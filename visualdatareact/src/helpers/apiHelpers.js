import axios from 'axios';
import Cookies from 'js-cookie'


export function getCsrfCookie() {
  axios.get('/crsf-dev/')
}

export function calcLinearFit(xState,yState) {
  console.log('xdata',xState);
  console.log('ydata', yState)
  // return axios.post('/api/linear/',{xVals,yVals})
}