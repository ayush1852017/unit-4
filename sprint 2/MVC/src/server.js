const connect = require("./config/db");
const app = require("./index");

app.listen(4000, async () => {
  try {
    await connect();
    console.log("Port 4000 is running");
  } catch (error) {
    console.log("something went wrong:", error);
  }
});
