import { env } from '../lib/env'
import { logger } from '../lib/logger'
let Sequelize = require('sequelize')

let sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

  sync: { force: env.DB_METHOD === 'drop' }
})

export const connectToDB = async () => {
  try {
    await sequelize.authenticate()

    logger.info('Connected to MySQL!!!')
    console.log('Connected to MySQL!!!')
  } catch (err) {
    console.log('Could not connect to MySQL')
    logger.error('Could not connect to MySQL')
  }
}

export const closeDB = () => {
  sequelize.close().then(function() {
    console.log('MySQL connection disconnected')
  })
  logger.info('MySQL connection closed!!!')
}

export const DB = sequelize
