const express = require("express");
const app = express();
const cors = require("cors");

const userRoute = require("./routes/apiCall");

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`My server is running on port ${PORT}`);
});

app.use(userRoute);