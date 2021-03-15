const data = require('../data/wands.json')


module.exports = {


  getWands: (req, res) => {
    res.status(200).send(data)
  },

}