const app = require("./index");
const connect = require("./config/db");

app.listen(5500, async () => {
  try {
    await connect();
    console.log("listening to port 5500");
  } catch (error) {
    console.error(err.message);
  }
});
