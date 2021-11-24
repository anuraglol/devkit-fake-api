const axios = require("axios");

const URL = "http://localhost:3000";

axios.get("http://localhost:3000/posts").then(function (response) {
  console.log(response.data);
});

// axios.get(`${URL}/post/7`).then(function (response) {
//   console.log(response.data);
// });

axios.get(`${URL}/user/9`).then(function (response) {
  console.log(response.data);
});

axios
  .post(`${URL}/user/new?id=1&name=Anurag&username=kd`)
  .then(function (response) {
    console.log(response.data);
  });

axios.get(`${URL}/users`).then(function (response) {
  console.log(response.data);
});
