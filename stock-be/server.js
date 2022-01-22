//引入express
const express = require("express");
require("dotenv").config();
//利用 express 這個 library 來建立一個web app
let app = express();
const port = process.env.SERVER_PORT || 3000;
app.listen(port, () => {
  console.log(`Sever running at port ${port}`);
});