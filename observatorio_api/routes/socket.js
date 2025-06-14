let io;

module.exports = {
  init: (server) => {
    const { Server } = require('socket.io');
    io = new Server(server, {
      cors: {
        origin: "*",
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
