import dotenv from 'dotenv';

if(process.env.NODE_ENV !== 'production'){
    dotenv.config()
}

export const config = {
    port: Number(process.env.PORT )|| 3000,
    mongoUrl: process.env.MONGO_URL || 'mongodb://localhost:27017/biblioteca',
    jwtSecret: process.env.JWT_SECRET || 'my_secret',
    nodeEnv: process.env.NODE_ENV || 'development'
}