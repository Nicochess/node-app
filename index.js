const express = require("express");
const path = require("path");

const app = express();

//Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", require('./routes/api/users'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is listening at ${PORT} port.`));
