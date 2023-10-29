import express, {static as staticMiddle, Request, Response,} from 'express'
import helmet from 'helmet'
import {resolve} from 'path'

const appDir = resolve(__dirname, '..', 'static')

const app = express()

// app.use(helmet())

app.use(staticMiddle(appDir))

app.use('*', (req: Request, res: Response) => {
  res.sendFile(resolve(appDir, "index.html"));
})

app.listen(3000, () => { 
  console.log('op on 3000')
})