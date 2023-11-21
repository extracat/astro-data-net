const url = process.env.NEXT_PUBLIC_API_URL;
const Cookies = require('js-cookie');

class Api {

  constructor() {
    this.apiUrl = url;
    this.get = this.get.bind(this);
  }

  getToken() {
      const token = Cookies.get('token'); // Retrieve the JWT token from cookies
      return token;
  }


  async get(query) {
    try {    

      // Set up the headers with the Authorization token
      const token = this.getToken();
      const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

      const res = await fetch(this.apiUrl + query, { headers });

      // Check for 401 Unauthorized error
      if (res.status === 401) {
        throw new Error('Unauthorized');
      }

      const data = await res.json();

      if (res.status !== 200) {
        throw new Error(data.message || 'Error fetching data');
      }

      return data;
    } catch (error) {
      // If API server is offline
      if (error.name === 'TypeError' && error.message === 'fetch failed') {
        console.error('Fetch error: API server is unavailable.');
      } else {
        // Other errors
        console.error('Fetch error: ', error.message);
      }
      return { error: error.message };
    }
  }
  

  async post(query, data) {

    // Set up the headers with the Authorization token
    const token = this.getToken();
    const headerAuth = token ? `Bearer ${token}` : '';

    const res = await fetch(this.apiUrl + query, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': headerAuth,
      },
      body: JSON.stringify(data),
    });
    return res;
  }

}

module.exports = Api;
