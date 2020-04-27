const axios = require("axios");
const api = {
  getUser(username) {
    let apiURL = "https://api.github.com/users/" + username;
    return axios.get(apiURL)
    console.log(apiURL)
   
    .catch(function (error) {
      
      console.log(error);
    });
  }
};

module.exports = api;