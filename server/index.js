var app = require("express")();
var http = require("http").createServer(app);
var io = require("socket.io")(http, {
  cors: true,
});

app.get("/", function (req, res) {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", function (socket) {
  console.log("client " + socket.id + " connected");
  socket.on("disconnect", function () {
    console.log("client " + socket.id + " disconnected");
  });
});

http.listen(3000, function () {
  console.log("listening on *:3000");
});
