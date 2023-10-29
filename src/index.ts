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

const finalPort = process.env.PORT || '3000'

app.listen(finalPort, () => { 
  console.log('op on ', finalPort)
})