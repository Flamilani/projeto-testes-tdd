const app = require("./app");

const start = (port) => {
    try {
      app.listen(port, () => {
        console.log(`Api running at http://localhost:${port}`);
      });
    } catch (err) {
      console.error(err);
      process.exit();
    }
  };
  
  start(3000);