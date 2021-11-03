const net = require("net");
const { client, playerName } = require("./constants");

const connect = function() {
  client; //connects the client to the IP and PORT (imported from constants file)
  
  client.on("connect", () => {
    console.log("you are connected"); //tells the client they are connected
    client.write(playerName); //names the snake MUG
  });

  client.on('data', (data) => { // this is how we receive data from the server
    console.log(`Server says: ${data}`); //console.logs data froms server
    setTimeout(() => {
      process.exit();
    }, 2000); //auto disconnects client from server once they have received death message
   
    
    
  });
  
  client.setEncoding("utf8");

  return client;
};

module.exports = { connect };