const request = require('request');
const breedName = process.argv[2];

const url = `https://apcatapom/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  // console.log('body:', body);
  // console.log('statusCode:', response && response.statusCode);
  // console.log(typeof body)
  if (error) {
    return console.log('THIS IS ERROR:', JSON.stringify(error));
  } else {
    const data = JSON.parse(body);
    // console.log(data);
    // console.log(typeof data);
    const breed = data[0];
    if (breed) {
      console.log(breed.description);
    } else {
      console.log(`error: ${breedName} not found`);
    }
  }
});


