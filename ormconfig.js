require('dotenv').config();

// FOR DEV DATABASE
// module.exports = {
//     type: 'postgres',
//     url: process.env.DATABASE_URL,
//     synchronize: false,
//     dropSchema: false,
//     logging: true,
//     ssl: false,
//     entities: ['src/**/*.entity.ts'],
//     migrations: ['migrations/**/*.ts'],
//     subscribers: ['subscriber/**/*.ts'],
//     cli: {
//         entitiesDir: 'src',
//         migrationsDir: 'migrations',
//         subscribersDir: 'subscriber'
//     }
// };

// FOR PROD DATABASE
module.exports = {
    type: 'postgres',
    url: process.env.DATABASE_URL_PROD,
    synchronize: false,
    dropSchema: false,
    logging: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        }
    },
    ssl: true,
    entities: ['src/**/*.entity.ts'],
    migrations: ['migrations/**/*.ts'],
    subscribers: ['subscriber/**/*.ts'],
    cli: {
        entitiesDir: 'src',
        migrationsDir: 'migrations',
        subscribersDir: 'subscriber'
    }
};
