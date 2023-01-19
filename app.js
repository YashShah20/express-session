const express = require("express");
const session = require("express-session");

const app = express();

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.all("/",(req, res) => {
  if (req.session.count) {
    req.session.count++;
  } else {
    req.session.count = 1;
  }
  res.send(`you visited this page ${req.session.count} times`);
});



app.listen(4000, () => {
  console.log("server running...");
});
