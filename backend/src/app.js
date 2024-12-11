const express = require("express");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const userRoute = require("./routes/user");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const createAdminAccount = require("./scripts/admin");
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

createAdminAccount();

app.use("/user", loginRoute);
app.use("/auth", registerRoute);
app.use("/api", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
})