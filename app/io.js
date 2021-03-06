module.exports 		= function(io) {
	io.on("connect", (socket) => {
		socket.on("auth", (token) => {
			console.info("[bot] authentication", token, this.config.token);

			if (token === this.config.token) {
				socket.emit("auth", true);
				socket.join("bot");
			} else {
				socket.emit("auth", false);
			}
		});
	});
};