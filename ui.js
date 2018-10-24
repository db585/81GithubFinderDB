class UI {
  constructor () {
    this.profile = document.querySelector('#dbProfile')
  }

  // Display profile
  showProfile (user) {
    this.profile.innerHTML = `
      <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-3">
            <img class="img-fluid mb-2" src="${user.avatar_url}">
            <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-3">View Profile</a>
          </div>

          <div class="col-md-9">
            <span class="badge badge-pill badge-danger mr-2">Public repos: ${user.public_repos}</span>
            <span class="badge badge-pill badge-warning mr-2">Public Gists: ${user.public_gists}</span>
            <span class="badge badge-pill badge-success mr-2">Followers: ${user.followers}</span>
            <span class="badge badge-pill badge-info mr-2">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group mb-3">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
            <h3 class="page-heading mb-3">Latest Repo</h3>
            <div id="dbRepos"></div>
          </div>
        </div>
      </div>
    `
  }

  // Show user's repos
  showRepos (repos) {
    let output = ''

    repos.forEach((repo) => {
      console.log(repo)
      output += `
        <div class="card card-body mb-2">
          <div class="row">
            <div class="col-md-6 mb-2">
              <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </div>
            <div class="col-md-6">
              <span class="badge badge-pill badge-danger mr-1">Stars: ${repo.stargazers_count}</span>
              <span class="badge badge-pill badge-warning mr-1">Watchers: ${repo.watchers_count}</span>
              <span class="badge badge-pill badge-success mr-1">Forkes: ${repo.forks_count}</span>
            </div>
          </div>

        </div>
      `
    })

    document.querySelector('#dbRepos').innerHTML = output
  }

  // Show alert msg
  showAlert (msg, btrClass) {
    // Call for clear any alert
    this.clearAlert()

    // Create div
    const div = document.createElement('div')

    // Add Bootstrap classes
    div.className = btrClass

    // Add text to div
    div.appendChild(document.createTextNode(msg))

    // Get parent
    const container = document.querySelector('.searchContainer')

    // Get html elememt before insert div
    const search = document.querySelector('.search')

    // Insert div into parent before search
    container.insertBefore(div, search)

    // Set timeout to disapear an alert
    setTimeout(() => {
      this.clearAlert()
    },
    3000)
  }

  clearAlert () {
    const currentAlert = document.querySelector('.alert')
    // console.log(currentAlert)

    // Check if alert exists
    if (currentAlert) {
      currentAlert.remove()
    }
  }

  // Clear profile info from page
  clearProfile () {
    this.profile.innerHTML = ''
  }
}
