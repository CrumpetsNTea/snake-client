const net = require("net");

const connect = function() {
  const client = net.createConnection({
    host: "165.227.47.243",
    port: 50541
  });
  
  client.on("connect", () => {
    console.log("you are connected");
    client.write("Name: MUG");
  });

  client.on('data', (data) => { // this is how we receive data from the server
    console.log(`Server says: ${data}`); //console.logs data froms server
  });
  
  
  // interpret incoming data as text
  client.setEncoding("utf8");

  return client;

  
};

module.exports = { connect };