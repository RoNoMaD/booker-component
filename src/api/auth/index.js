export function setToken(token) {
  sessionStorage.setItem('token', token);
}

export function getToken() {
  sessionStorage.getItem('token');
}
