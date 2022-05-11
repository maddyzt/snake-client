let connection;

// create a function to register user input as data for stdin
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };

  if (key === '\x77'){
    connection.write("Move: up")
  } else if (key === '\x61'){
    connection.write("Move: left")
  } else if (key === '\x73'){
    connection.write("Move: down")
  } else if (key === '\x64'){
    connection.write("Move: right");
  };
};

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;

