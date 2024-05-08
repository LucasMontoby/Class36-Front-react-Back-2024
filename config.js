const config ={
    appConfig: {
        port:process.env.APP_PORT,
        host: process.env.APP_HOST,
        secret: process.env.SESSION_SECRET
    },
    dbConfig:{
        port:process.env.DB_PORT,
        host:process.env.DB_HOST,
        dbName:process.env.DB_NAME
    }
}

module.exports = config