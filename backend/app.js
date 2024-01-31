const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "dadfadsf",
      title: "First server-side post",
      content: "This is coming from the server",
    },
    {
      id: "ksajdfklsaj",
      title: "Second server-side post",
      content: "This is coming from the server!",
    },
  ];

  //there is no need for return because it is the last statement in this use function so it will return automatically
  res
    .status(200)
    .json({ message: "Posts fetched successfully!", posts: posts });
});

module.exports = app;
