const connect = require("./config/db");
const app = require("./index");

app.listen(5000, async () => {
  try {
    await connect();
    console.log("listening to port 5000");
  } catch (error) {
    console.error(err.message);
  }
});
