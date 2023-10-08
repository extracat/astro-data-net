const url = process.env.NEXT_PUBLIC_API_URL;

class Api {

  constructor() {
    this.apiUrl = url;
    this.get = this.get.bind(this);
  }

  async get(query) {
    const res = await fetch(this.apiUrl + query);
    const data = await res.json();
    if (res.status !== 200) {
      throw new Error(data.message);
    }
    return data;
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
