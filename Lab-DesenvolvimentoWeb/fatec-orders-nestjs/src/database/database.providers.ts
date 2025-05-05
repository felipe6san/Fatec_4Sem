import { Sequelize } from "sequelize"

export const databaseProviders = [
    {
        provide: "SEQUELIZE",
        useFactory: async () => {
            const sequelize = new Sequelize({
                dialect: "sqlite",
                storage: '.database/.sqlite',
            });
            sequelize.addModels([BrandEntity]);
            return sequelize;
        }
    }
]