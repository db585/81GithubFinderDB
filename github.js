class GitHub {
  constructor () {
    this.client_id = '10c79bfce5e86576131b'
    this.client_secret = 'ea86036213d7f7673e261d222cbcd2ead96a762f'
    this.repos_count = 5
    this.repos_sort = 'created: asc'
  }

  async getUser (user) {
    const profileResponse = await window.fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const reposResponse = await window.fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profileData = await profileResponse.json()
    const reposData = await reposResponse.json()

    return {
      profile: profileData,
      repos: reposData
    }
  }
}
