const axios = require("axios");

exports.getApi = (req, res) => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {           //there is lot of info on response that we don't even need
        console.log(response.data);     //response.data have info that you want
        //return res.status(200).send("Request Successful");
        return res.status(200).send(response.data);
    }).catch((error) => {
        return res.status(500).send(error);
    });
};