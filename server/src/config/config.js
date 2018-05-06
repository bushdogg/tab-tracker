module.exports = {
    port: 8081,
    dbsqllite: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || 'localhost',
            storage: './tabtracker.sqlite'
        }
    },
    db: {
        database: process.env.DB_NAME || 'lulu9540_participation',
        user: process.env.DB_USER || 'lulu9540_root',
        password: process.env.DB_PASS || 'BigBoyTennis79',
        options: {
            dialect: process.env.DIALECT || 'mysql',
            host: process.env.HOST || 'www.lushmarketing.com.au'
        }
    }    
}