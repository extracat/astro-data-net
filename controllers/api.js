const url = process.env.NEXT_PUBLIC_API_URL;

class Api {

  constructor() {
    this.apiUrl = url;
    this.get = this.get.bind(this);
  }

  async get(query) {
    try {
      const res = await fetch(this.apiUrl + query);
      const data = await res.json();
      if (res.status !== 200) {
        throw new Error(data.message);
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
    const res = await fetch(this.apiUrl + query, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return res;
  }

}

module.exports = Api;
