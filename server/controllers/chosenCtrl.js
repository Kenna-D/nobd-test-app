let pickedWands = []
let id = 1

module.exports = {
  getPicked: (req, res) => {
    res.status(200).send(pickedWands)
  },
  pickWand: (req, res) => {
    const {wand} = req.body;

    // console.log(req.body)

    pickedWands.push({id, ...wand});
    id = id + 1
    res.status(200).send(pickedWands)
  },
  editWand: (req, res) => {
    const{id} = req.params;
    const{name} = req.body;
    const wand = pickedWands.find(elem => elem.id === +id);
    wand.name = name;
    res.status(200).send(pickedWands)
  },
  deleteWand: (req, res) => {
    const{id} = req.params;
    const dropWand = pickedWands.findIndex(elem => elem.id === +id);
    pickedWands.splice(dropWand, 1)
    res.status(200).send(pickedWands)
  }
}