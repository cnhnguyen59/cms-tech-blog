const sequelize = require("../config/connection");
const seedUser = require('./UserData.js');
const seedArticle = require('./ArticleData.js');
const seedComments = require("./CommentsData.js");

const seedAll = async () => {
    await sequelize.sync({force:true});

    await seedUser();
    await seedArticle();
    await seedComments()

    process.exit(0);
};

seedAll()