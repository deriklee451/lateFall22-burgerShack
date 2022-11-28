import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  // Account = mongoose.model('Account', AccountSchema);

  // TODO THIS IS FOR TODAY ONLY WE ARE FAKING A DATABASE
  Burgers = [
    {
      id: 1,
      name: 'Shoe',
      description: 'Farm Fresh Leather, broiled over charcoal. A thick insole patty, with shoelaces and a polish dip.',
      price: 20
    },
    {
      id: 2,
      name: 'The Bob Burger',
      description: "It's a big burger",
      price: 5
    },
    {
      id: 3,
      name: 'Krabby Patty',
      description: 'Pickles, Cheese, Krabby Patty and a secret ingredient.',
      price: 8
    }
  ]
}

export const dbContext = new DbContext()
