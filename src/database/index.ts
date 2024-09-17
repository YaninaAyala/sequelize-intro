import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize(
  "postgresql://ADA_owner:zLZtUXG90HoM@ep-wandering-breeze-a55wde5x.us-east-2.aws.neon.tech/ADA?sslmode=require"
);

async function authenticate() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
authenticate();
export default sequelize;
export { DataTypes };
