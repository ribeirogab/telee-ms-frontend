function isAuthenticated () {
  return !!localStorage.getItem('token')
}

function whatPermission () {}

export { isAuthenticated, whatPermission }
