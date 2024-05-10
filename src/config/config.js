import dotenv from 'dotenv';
dotenv.config();

export default {
    port:process.env.PORT,
    mongoUrl:process.env.MONGO_URL,
    adminName: process.env.ADMIN_NAME,
    adminPassword: ADMIN_PASSWORD,
    sessionSecret: SESSION_SECRET 
}