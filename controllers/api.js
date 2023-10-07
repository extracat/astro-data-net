const uri = process.env.API_URI;

class Api {

  constructor() {
    this.apiUrl = uri;
  }

  async fetch(query) {
    const res = await fetch(this.apiUrl + query);
    return await res.json();
  }

  async getTelegrams(id) {
    let query = '/telegrams';
    if (id) {
      query = query + '/' + id;
    }

    const data = await this.fetch(query);
    
    return data;
  }

}

module.exports = Api;
