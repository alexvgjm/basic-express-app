import { RequestHandler, Router } from 'express'

const main = Router()

export const index: RequestHandler = (req, res) => {
  res.send('Hello World!')
  console.log('Response sent')
}

main.get('/', index)

export default main
