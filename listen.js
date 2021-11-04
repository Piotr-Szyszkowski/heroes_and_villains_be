const app = require("./app");
const PORT = 9090;

app.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Heroes and Villains Server 0.1 Listening on port ${PORT}`);
});
