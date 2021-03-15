let pickedWands = []

module.exports = {
  getPicked: (req, res) => {
    res.status(200).send(pickedWands)
  },
  pickWand: (req, res) => {
    const {wand} = req.body;
    console.log(req.body)

    pickedWands.push(wand);
    res.status(200).send(pickedWands)
  },
  editWand: (req, res) => {

  },
  deleteWand: (req, res) => {
    
  }
}