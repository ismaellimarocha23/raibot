// enviar as informações sobre os comandos para o discord armazenar.
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const commands = require('../commands/slashCommands');

const { clientId, token } = process.env;


const commandsJSON = [];

for (const command of commands) {
	commandsJSON.push(command.data.toJSON());
}


const rest = new REST({ version: '9' }).setToken(token);

const deployCommands = async () => {
	try {
		await rest.put(Routes.applicationCommands(clientId), { body: commandsJSON });
		console.log('Successfully registered application commands.');
	}
	catch (error) {
		console.error(error);
	}
};

module.exports = deployCommands;
