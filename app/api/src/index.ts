import { createSchema, createYoga } from 'graphql-yoga'
import { createServer } from 'http'

const port = Number(process.env.API_PORT) || 4000

const yoga = createYoga({
    
})

const server = createServer(yoga)

server.listen(4000,'127.0.0.1', () => {
    console.log(`🚀GraphQL Server ready at http://localhost:${port}/graphql`)
})