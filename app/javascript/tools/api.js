import axios from 'axios'

// test suite does not put csrf token
// so check if there first
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
}
const csrf = document.getElementsByName('csrf-token');
if(csrf.length) {
  headers['X-CSRF-Token'] = csrf[0].getAttribute('content');
}

export default() => {
  return axios.create({
    headers
  })
}
