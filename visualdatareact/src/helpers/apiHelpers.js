import axios from 'axios';
import Cookies from 'js-cookie'


export function getCsrfCookie() {
  axios.get('/crsf-dev/')
}

export function calcLinearFit(xVals, yVals) {
  console.log('xdata', xVals);
  console.log('ydata', yVals);

  return axios.post('/api/linear/', { xVals, yVals }, { headers: { 'X-CSRFToken': Cookies.get('csrftoken') } })
}

export function calcQuadraticFit(xVals, yVals) {
  console.log('xdata', xVals);
  console.log('ydata', yVals);

  return axios.post('/api/linear/', { xVals, yVals }, { headers: { 'X-CSRFToken': Cookies.get('csrftoken') } })
}