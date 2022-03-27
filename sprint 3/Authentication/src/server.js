const connect = require("./config/db");
const app = require("./index");

app.listen(5000, async () => {
  try {
    await connect();
    console.log("Listening to port 5000");
  } catch (error) {
    console.log(err.message);
  }
});
