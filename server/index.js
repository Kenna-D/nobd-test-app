const express  = require('express');
const optionsCtrl = require('./controllers/optionsCtrl')
const chosenCtrl = require('./controllers/chosenCtrl')
const app = express();
const port = 7900;

app.use(express.json())

//optionsCtrl endpoint
// app.get('/api/available-options', optionsCtrl.getAvatar);
// app.get('/api/available-options', optionsCtrl.getHouse);
// app.get('/api/available-options', optionsCtrl.getSpell);
app.get('/api/options', optionsCtrl.getWands);

//chosenCtrl endpoints
app.get('/api/picked', chosenCtrl.getPicked);
app.post('/api/picked', chosenCtrl.pickWand);
app.put('/api/picked/:id', chosenCtrl.editWand);
app.delete('/api/picked/:id', chosenCtrl.deleteWand);

app.listen(port, () => console.log(`Server is running on ${port}`));