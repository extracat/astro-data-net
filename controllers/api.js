const url = process.env.NEXT_PUBLIC_API_URL;

class Api {

  constructor() {
    this.apiUrl = url;
    this.fetch = this.fetch.bind(this);
  }

  async fetch(query) {
    const res = await fetch(this.apiUrl + query);
    const data = await res.json();
    if (res.status !== 200) {
      throw new Error(data.message);
    }
    return data;
  }

}

module.exports = Api;
