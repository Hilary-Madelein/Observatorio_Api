let io;

module.exports = {
  init: (server) => {
    const { Server } = require('socket.io');
    io = new Server(server, {
      path: '/socket.io',
      cors: {
        origin: "https://observatoriohidrometeorologico-hfdtdkage8h9azdz.eastus-01.azurewebsites.net",
        methods: ["GET", "POST"],
        credentials: true
      }
    });
    return io;
  },
  getIO: () => {
    if (!io) throw new Error('Socket.io no inicializado');
    return io;
  }
};
