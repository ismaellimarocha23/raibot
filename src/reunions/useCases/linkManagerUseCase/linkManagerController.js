const { linkManagerUseCase } = require('./linkManagerUseCase');

const linkManagerController = {
	async handle(interaction) {
		try {

			const link_inovacao = interaction.options.getString('Inovacao');

            const link_grp = interaction.options.getString('GRP');

            const link_midias = interaction.options.getString('Midias');

            await linkManagerUseCase.execute(link_inovacao, link_grp, link_midias);

			await interaction.reply('Links Atualizados!');

		} catch (error) {
			await interaction.reply(error.message);
		}
	},
};

module.exports = { linkManagerController };
