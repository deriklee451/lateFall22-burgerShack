import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";



export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOne)
      // .get('/:name', this.getOne)
      .post('', this.create)
      .delete('/:id', this.remove)
  }

  async getAll(request, response, next) {
    try {
      const burgers = await burgersService.getAll()
      return response.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async getOne(request, response, next) {
    try {
      // NOTE line 26 gets the information
      const burger = await burgersService.getOne(request.params.id)
      // const burger = await burgersService.getOne(request.params.name)
      // NOTE 28 sends it back once retrieved
      return response.send({ burger, message: 'Here enjoy your food' })
    } catch (error) {
      next(error)
    }
  }

  async create(request, response, next) {
    try {
      const newBurger = await burgersService.create(request.body)
      return response.send(newBurger)
    } catch (error) {
      next(error)
    }
  }

  async remove(request, response, next) {
    try {
      const message = await burgersService.remove(request.params.id)
      return response.send(message)
    } catch (error) {
      next(error)
    }
  }
}
