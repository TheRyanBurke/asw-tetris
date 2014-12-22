var Network = {

	client: null,
	
	Connect: function() {
		this.client = new Paho.MQTT.Client("q.thingfabric.com", 4483, "tetris");
		this.client.onMessageArrived = this.OnMessageArrived;
		this.client.onConnectionLost = this.OnConnectionLost;
        this.client.connect({
            userName: "19f9cb06-9247-4924-8a0f-8cc27a172dd8",
            password: "558ccc9c88f298e97b923984e0e4cbe8",
			useSSL: true,
            keepAliveInterval: 30,
			onSuccess: this.OnSuccess,
			onFailure: this.OnFailure
        });
	},
	
	OnSuccess: function() {
		console.log("Connected to MQTT!");
		Network.client.subscribe("9d3f9dd8f8d61daea47ba3a550f87c1d/tetris/#");
	},
	
	OnFailure: function() {
		console.log("Failed to connect to MQTT!");
	},
	
	OnConnectionLost: function() {
		console.log("Connection lost!");
		Network.client.Connect();
	},
	
	OnMessageArrived: function(message) {
		console.log("Message arrived: " + message.payloadString);
		try {
			var obj = JSON.parse(message.payloadString);
			if(obj.type == "shape") {
				Game.PushShapeQueue(obj.value);
			}
		} catch (e) {
			console.log("MQTT Message error: " + e);
		}
	}

};