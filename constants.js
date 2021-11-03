const net = require("net");

const IP = "165.227.47.243";
const PORT = 50541;

const client = net.createConnection({
  host: IP,
  port: PORT
});

const playerName = "Name: MUG";


module.exports = { IP, PORT, client, playerName };
