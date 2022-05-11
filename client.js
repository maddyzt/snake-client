const net = require("net");

// create a function to register user input as data for stdin
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };
};

// setup interface to handle user input from stdin
const setupInput = function () {
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.resume();
stdin.on("data", handleUserInput);
return stdin;
};

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: MZT");
  });

  conn.on("data", (data) => {
    console.log('Server says: ', data.toString());
  });

  return conn;
};

module.exports = connect;
module.exports = setupInput;
