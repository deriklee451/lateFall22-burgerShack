import express from 'express'
import { socketProvider } from './SocketProvider'
import { Startup } from './Startup'
import { DbConnection } from './db/DbConfig'
import { logger } from './utils/Logger'
import { createServer } from 'http'

// create server & socketServer
const app = express()
const port = process.env.PORT || 3000

const httpServer = createServer(app)
Startup.ConfigureGlobalMiddleware(app) //FIXME just kidding don't comment it has body parser
Startup.ConfigureRoutes(app)

// Establish Socket
socketProvider.initialize(httpServer)

// Connect to Atlas MongoDB
// DbConnection.connect() TODO comment this out, so it doesn't try to connect to a database

// Start Server
httpServer.listen(port, () => {
  logger.log(`[SERVING ON PORT: ${port}]`)
})
