const { SlashCommandBuilder } = require('@discordjs/builders');
const { linkManagerController } = require('../reunions/useCases/linkManagerUseCase/linkManagerController');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('Link das planilhas')
		.setDescription('Atribui os links das planilhas do RAITec')
		.addStringOption(option => option.setName('Inovacao').setDescription('Link da planilha da Inovação'))
        .addStringOption(option => option.setName('GRP').setDescription('Link da planilha da GRP'))
        .addStringOption(option => option.setName('Midias').setDescription('Link da planilha de Mídias')),
	async execute(interaction) {
		await createReunionController.handle(interaction);
	},
};