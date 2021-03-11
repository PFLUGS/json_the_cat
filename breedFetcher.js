const request = require('request');
// const breedName = process.argv[2];

// const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
  // console.log('body:', body);
  // console.log('statusCode:', response && response.statusCode);
  // console.log(typeof body)
    if (error) {
      callback(error, null);
      return
    } 

      const data = JSON.parse(body);
      // console.log(data);
      // console.log(typeof data);
      const desc = data[0];
      if (desc) {
        callback(null, desc.description);
      } else {
        callback(null);
      }
  });
};

module.exports = { fetchBreedDescription };


