const api = {
  getUser(username) {
    return new Promise((resolve, reject) => {
      const request = require('request');
      const options = {
        json: true,
        port: 443,
        headers: {
          accept: 'application/vnd.github.v3+json',
          'User-Agent': 'http://developer.github.com/v3/#user-agent-required'
        }
      };
      request(`https://api.github.com/users/${username}`, options , (err, res, body) => {
        if (err) { return console.log(err); }
        // console.log(body.email, body.avatar_url);
        resolve({email: body.email, image: body.avatar_url});
      });
    });
  }
};

module.exports = api;