import BaseController from '../utils/BaseController'
import { Auth0Provider } from '@bcwdev/auth0provider'

export class ValuesController extends BaseController {
  constructor() {
    super('api/banana')
    this.router
      .get('', this.getAll)
      .get('/one', this.getOne)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
  }

  async getAll(req, res, next) {
    try {
      return res.send(['The Best burger', 'The second best burger'])
    } catch (error) {
      next(error)
    }
  }

  async getOne(req, res, next) {
    try {
      return res.send('The Best burger')
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      req.body.creatorId = req.userInfo.id
      res.send(req.body)
    } catch (error) {
      next(error)
    }
  }
}
