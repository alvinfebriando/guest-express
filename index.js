import express from 'express'
import { helloHandler } from './handler/hello.js'

const app = express()
const port = 3000

app.get("/", helloHandler)

app.listen(port, ()=>{
  console.log(`running on port: ${port}`)
})