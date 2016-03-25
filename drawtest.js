/*
    Date: 2016-03-24
*/

function alpha() {
    console.log('alpha');

    var dataNode = function(appendPoint, data, labels) {
        var yPoint = drawData.headNode(data.k);                       // data wrapper
        drawData.inputNode(yPoint, "_label", {'pholder':labels.phLabel, 'value':data.k}); // key
        drawData.inputNode(yPoint, "_value", {'pholder':labels.phValue, 'value':data.v}); // value
        var zPoint = drawData.div(yPoint, 'fspacer');
        drawData.button(zPoint, 'removeKey', labels.buttonRemove, 'removeKey');    // remove button
        drawData.button(zPoint, 'updateKey', labels.buttonUpdate, 'updateKey');    // update button
        appendPoint.appendChild(yPoint);
    }

    var apoint = document.getElementById('records');
    dataNode(apoint,
        {'k':'key',v:'value'},
        {'phLabel':"RSS",'phValue':"URL",
         'buttonRemove':"remove",'buttonUpdate':"update"}
    );
}
function beta() { console.log('beta');
    var apoint = document.getElementById('records');
    drawData.button(apoint, '', "update", 'updateKey');
    drawData.label(apoint, 'This is a label.');
}
function gama() {
    console.log('gama');
    // yPoint, "_value", labels.phValue, data.v)
    var apoint = document.getElementById('records');
    drawData.inputNode(apoint, "_value", {'pholder':'placeholder', value:''});
}

var x = document.getElementById('addNode').addEventListener('click', alpha);
var y = document.getElementById('addButton').addEventListener('click', beta);
var z = document.getElementById('addFields').addEventListener('click', gama);
