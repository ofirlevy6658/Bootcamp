const axios = require("axios");
const fetch = require("node-fetch");
const request = require("request");

const url = "https://neurovault.org/api/atlases/1557/";

const fetchAxios = async () => {
	const response = await axios.get(url);
	console.log(response.data);
};
fetchAxios(); // using axious

//using  node-fetch
fetch("https://neurovault.org/api/atlases/1557/")
	.then((res) => res.json())
	.then((json) => console.log(json));

// use request
request({ url: url }, (error, response) => {
	const data = JSON.parse(response.body);
	console.log(data);
});
