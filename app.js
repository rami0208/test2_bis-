var express = require('express');
var path = require('path');
var app = express();
const yargs = require("yargs");

const commands = require("./commands");

app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.locals.file = commands.readFile("list.json")

app.use(express.static('views'))

function add (request, response) {
    var data = request.params;
    var item = data.item;
    var price = Number(data.price);
    let gList = commands.readFile("list.json")
    const whatIndex = (index => index.item === item )
    let index = gList.findIndex(whatIndex)
    if (index === -1){ // Item does not exist
        gList.push({item, price})
        }
    else { // Item exists already, replace old price with new one
        gList[index].price = price;
    }
    commands.writeFile("list.json", gList);
}

function remove (request, response) {
    var data = request.params;
    var item = data.item;
    let gList = commands.readFile("list.json")
    const IndexFiltered = (index => index.item !== item )
    let filteredList = gList.filter(IndexFiltered)
    commands.writeFile("list.json", filteredList )
    }

function print(request, response){
    let gList = commands.readFile("list.json")
    response.send(gList);

}

app.get('/add/:item/:price', add)
app.get('/remove/:item', remove)
app.get('/printgrocery', print)


const port = 8080;
app.listen(port, () => {
        console.log(`A node is listening on port ${port}`);
});


