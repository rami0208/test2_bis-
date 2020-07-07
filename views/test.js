function setup() {
    var button = select('#submit');
    button.mousePressed(submitWord);
    var buttonPrint = select('#print');
    buttonPrint.mousePressed(printList);
}

function submitWord(){
    action = String(select('#action-select').value());

    item = select('#item').value();
    price = select('#price').value();
    loadJSON(action + '/' + item +'/' + price);
 }

function printList(){
    loadJSON('printgrocery/', tada);
    function tada(data){
        console.log("finished")
        console.log(data);
        createCanvas(400,400);
        background(51);
        var keys = Object.keys(data)
        for (var i=0; i<keys.length; i++){
            var number = keys[i]
            var obj = data[number]
            var item = obj["item"]
            var price = obj["price"]
            fill(255);
            text(item+"   ", 50, i*50);
            text(price, 100, i*50);
    }
   }
   }


