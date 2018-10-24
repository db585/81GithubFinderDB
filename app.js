// Init GitHub obj from class
const github = new GitHub()

// Init UI obj from class
const ui = new UI()

// Search input
const searchUser = document.querySelector('#dbSearchUser')

// Search event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value

  if (userText !== '') {
    // make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          // Show alert UI
          ui.showAlert('User not found', 'alert alert-danger')
        } else {
          // Show profile UI
          ui.showProfile(data.profile)

          // Show repos
          ui.showRepos(data.repos)
        }
      })
  } else {
    // Clear profile
    ui.clearProfile()
  }
  e.preventDefault()
})
