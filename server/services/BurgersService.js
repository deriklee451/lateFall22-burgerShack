import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"
import { logger } from "../utils/Logger.js"


class BurgersService {
  async getAll() {
    const burgers = await dbContext.Burgers
    return burgers
  }

  async getOne(burgerId) {
    const burger = await dbContext.Burgers.find(b => b.id == burgerId)
    // NOTE if there isn't a burger found, we should kick the knight in the pants and send them back with an error
    if (!burger) throw new BadRequest('no burger named ' + burgerId)
    return burger
  }

  async create(newBurger) {
    logger.log(newBurger)
    newBurger.id = dbContext.Burgers[dbContext.Burgers.length - 1].id + 1 // NOTE not how we will do this once we have a db, it's crazy i know
    await dbContext.Burgers.push(newBurger)
    return newBurger
  }

  async remove(burgerId) {
    // const burger = dbContext.Burgers.find(b => b.id == burgerId) NOTE could do this again
    // if (!burger) throw new BadRequest('no burger at that id' + burgerId)
    // OR re-use the code we already wrote
    const burger = await this.getOne(burgerId) // NOTE this is similar to how it will work with db but still different
    let index = dbContext.Burgers.indexOf(burger)
    dbContext.Burgers.splice(index, 1)
    return `${burger.name} removed. she gone.`

  }
}

export const burgersService = new BurgersService()
