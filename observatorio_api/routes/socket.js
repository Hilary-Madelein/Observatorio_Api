let io;

module.exports = {
  init: (server) => {
    const { Server } = require('socket.io');
    io = new Server(server, {
      path: '/socket.io',
      cors: {
        origin: "https://zealous-field-0dcd4f60f.6.azurestaticapps.net",
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
