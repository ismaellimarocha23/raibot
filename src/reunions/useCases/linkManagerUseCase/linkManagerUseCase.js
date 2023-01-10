const fs = require('fs/promises');
const path = require("path");

const linkManagerUseCase = {
	async execute(link_inovacao, link_grp, link_midias) {
    
    const INOVACAO_NAME = "Inovação";
    const GRP_NAME = "Administração";
    const MIDIAS_NAME = "Mídias";

    const filePath = path.resolve(__dirname, "setoresRaitec\spreadsheets_ids.json");
	
    const file = await fs.readFile(filePath);

    const fileObject = JSON.parse(file);

    fileObject[INOVACAO_NAME] = link_inovacao;
    fileObject[GRP_NAME] = link_grp;
    fileObject[MIDIAS_NAME] = link_midias;

    const fileJson = JSON.stringify(fileObject);

    await fs.writeFile(filePath, fileJson);

	},
};

module.exports = { createReunionUseCase };