import { Sequelize } from 'sequelize';
const dbName=process.env.DB_NAME
const dbPassword=process.env.DB_PASSWORD
const dbUserName=process.env.DB_USERNAME
const dbHost=process.env.DB_HOST

const sequelize = new Sequelize(dbName, dbUserName, dbPassword, {
  host: dbHost,
  dialect:  'postgres',
  logging:console.log,
});
const connectDb= async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      } 
}
export {connectDb}
export default sequelize
