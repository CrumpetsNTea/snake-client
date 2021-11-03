const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  conn.on("connect", () => {
    console.log("you are connected");
  });

  conn.on("connect", () => {
    conn.write("Name: MUG");

  });
  conn.on('data', (message) => { // this is how we receive
    console.log(`Server says: ${message}`);
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;

  
};
module.exports = { connect };