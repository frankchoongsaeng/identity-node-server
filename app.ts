import { Express, Response, Request } from 'express'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'

// router handlers
import v1Router from './routes/index'

const app: Express = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/spec', express.static(path.join(__dirname, 'openapi.json')));
app.use(express.static(path.join(__dirname, 'public')))


/* GET home page. */
app.get('/', function (_: Request, res: Response) {
	res.render('index', { title: 'Express' })
})


app.use('/v1', v1Router)


module.exports = app
