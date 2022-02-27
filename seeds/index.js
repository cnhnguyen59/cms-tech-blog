const sequelize = require("../config/connection");
const seedUser = require('./UserData.js');
const seedArticle = require('./ArticleData.js');

const seedAll = async () => {
    await sequelize.sync({force:true});

    await seedUser();
    await seedArticle();

    process.exit(0);
};

seedAll()