import mongoose from 'mongoose'
import { env } from '../lib/env'
import { logger } from '../lib/logger'

export const connectToDB = async () => {
  try {
    await mongoose.connect(
      `mongodb://${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`
    )

    logger.info('Connected to mongo!!!')
    console.log('Connected to mongo!!!')
  } catch (err) {
    console.log('Could not connect to MongoDB')
    logger.error('Could not connect to MongoDB')
  }
}

export const closeDB = () => {
  if (env.DB_METHOD === 'drop') {
    mongoose.connection.dropDatabase().catch(err => {
      console.log(err)
    })
  }
  mongoose.connection.close(function() {
    console.log('Mongoose connection disconnected')
  })
  logger.info('MongoDB connection closed!!!')
}
