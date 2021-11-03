const net = require("net");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  conn.on("connect", () => {
    console.log("you are connected");
  });

  conn.on('data', function(message) { // this is how we receive
    console.log(`Server says: ${message}`);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

  
};

console.log("Connecting ...");
connect();
