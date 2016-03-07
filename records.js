/*
    Date: 2016-03-07

*/
document.getElementById('clear').addEventListener('click', function () {
    localStore.clear();
});


document.getElementById('set').addEventListener('click', function () {
    localStore.put($('#label').val(), $('#data').val());
    $('#data').val('');
    $('#label').val('');
});

document.getElementById('get').addEventListener('click', function () {
    var i = 0;
    var l = localStore.len();
    var list = '';
    var k = '', v = '';
    // innerHTML or https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
    // $('#storelocal').html( "items:" + l );
    document.getElementById('storelocal').innerHTML = "items:" + l;
    if (l > 0 ) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
        //$('#recordList').remove();
        document.getElementById('records').innerHTML = '';
        for (i = 0; i < l; i++) {
            k = localStore.key(i);
            v = localStore.get(localStore.key(i));
            console.log(i + ":" + k + ":" + v);
            list += '<div id=' + k + '>' + k + ':' + v + '<br>' +
                '<input id=label type=text placeholder="label" value="' + k + '">' + '<br>' +
                '<input id=value type=text placeholder="value" value="' + v + '">' + '<br>' +
                '<button class=removeKey>remove</button>' + '&nbsp;' +
                '<button class=updateKey>Update</button>' + '</div>';
        }
        // http://www.javascriptkit.com/javatutors/dom2.shtml
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
        //$('#records').append('<div id=recordList>' + list + '</div>');
        document.getElementById('records').innerHTML = '<div id=recordList>' + list + '</div>';

        bindClass('removeKey', function (e) {
            removeListItem(e);
            // Redraw list by clicking the button that draws it.
            document.getElementById('get').click();
        });
        bindClass('updateKey', function (e) {
            updateListItem(e);
            // Redraw list by clicking the button that draws it.
            document.getElementById('get').click();
        });

    }
});

function removeListItem (evt) {
    console.log('.removeKey');
    var id = evt.target.parentNode.id
    localStore.remove(id);
}

function updateListItem (evt) {
    console.log('.updateKey');
    var id       = evt.target.parentNode.id
    var newlabel = $(evt.target).siblings('#label').val();
    var newvalue = $(evt.target).siblings('#value').val();
    localStore.update({id:id,key:newlabel, value:newvalue});
}

function bindClass(theClass, theCallback) {
     // http://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
    var i = 0;
    // Returns an array of HTML objects
    var x = document.getElementsByClassName(theClass);
    for (i = 0; i < x.length; i ++) {
        //console.log(x[i]);
        x[i].addEventListener('click', theCallback);
    }
}
