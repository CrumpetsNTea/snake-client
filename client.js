const net = require("net");

const connect = function() {
  const client = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  client.on("connect", () => {
    console.log("you are connected");
  });


  client.on("connect", () => {
    client.write("Name: MUG");
    // conn.write("Move: up"); ///this allows our client to send stuff to the server
  });


  client.on('data', (message) => { // this is how we receive data from the server
    console.log(`Server says: ${message}`); //console.logs message froms server
  });
  
  
  // interpret incoming data as text
  client.setEncoding("utf8");

  return client;

  
};

module.exports = { connect };