/*
    Date: 2016-03-07

*/
var formIds = {'key':'key','value':'value'};
//
function triggerRedrawList() {
    document.getElementById('getList').click();
}
//
document.getElementById('toggleForm').addEventListener('click', toggleFormVisible);
document.getElementById('clearList').addEventListener('click', clearList);
document.getElementById('getList').addEventListener('click', getList);
document.getElementById('setItem').addEventListener('click', setItem);

function toggleFormVisible() {
    document.getElementById('theAddForm').classList.toggle('hidden');
    var txtIs = document.getElementById('toggleForm').textContent;
    var found = txtIs.search(/^show/);
    var s = '', t = '';
    if (found == -1) {s='hide';t='show'} else {s='show';t='hide'}
    document.getElementById('toggleForm').textContent = txtIs.replace(s, t);
}
// http://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function removeListVisualById(parentId) {
    var parentNode = document.getElementById(parentId);
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}
// NOT WORKING. Requires real DOM object 
function appendListVisualById(parentId, newNode) {
    var parentNode = document.getElementById(parentId);
    parentNode.appendChild(newNode);
}

function createListItemVisual(strg, k, v) {
    strg = '<div id=' + k + ' class=oneRecord>' +
    '<input id=_label type=text placeholder="label" value="' + k + '">' + '<br>' +
    '<input id=_value type=text placeholder="value" value="' + v + '">' + '<br>' +
    '<button class="removeKey">delete</button>' +
    '<span class=fspacer>&nbsp;</span>' +
    '<button class=updateKey>update</button>' + '</div>';

    return strg;
}

function getList() {
    var i, l = localStore.len();
    var list = '', blank = '';
    var k = '', v = '', ddata = [];

    document.getElementById('storelocal').textContent = "items:" + l;
    //document.getElementById('records').innerHTML = '';
    removeListVisualById('records');
    if (l > 0 ) {
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
        for (i = 0; i < l; i++) {
            // some Javascript engines cannot do this correctly.
            // [k,v] = getListItem(i);          
            ddata = getItem(i);
            k = ddata[0];
            v = ddata[1];
            console.log(i + ":" + k + ":" + v);
            //
            blank = '';
            list += createListItemVisual(blank, k, v);
        }
        // http://www.javascriptkit.com/javatutors/dom2.shtml
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
        document.getElementById('records').innerHTML = '<div id=recordList>' + list + '</div>';
        // var xyz = '<div id=recordList>' + list + '</div>';
        // appendListVisualById('records', xyz);

        bindClassOnEvent('removeKey', 'click', function (e) {
            removeItem(e);
            // Redraw list by clicking the button that draws it.
            triggerRedrawList();
        });
        bindClassOnEvent('updateKey', 'click', function (e) {
            updateItem(e, {l:'#_label' , v:'#_value'});
            // Redraw list by clicking the button that draws it.
            triggerRedrawList();
        });
    }
}

function setItem (evt) {
    // 'formIds' is global.
    var k = document.getElementById(formIds.key).value;
    var v = document.getElementById(formIds.value).value;
    // console.log("setItem:", k, v);
    // filter against blank fields
    localStore.put(k, v);
    clearFormValues(['key','value']);
}

function getItem(idx) {
    k = localStore.key(idx);
    v = localStore.get(localStore.key(idx));
    return [k,v];
}

function removeItem (evt) {
    //console.log('.removeKey');
    var id = evt.target.parentNode.id;
    console.log("remove:",id);
    localStore.remove(id);
}

function updateItem (evt, selector) {
    //console.log('.updateKey');
    var id = evt.target.parentNode.id;
    var l  = evt.target.parentNode.querySelector(selector.l).value;
    var v  = evt.target.parentNode.querySelector(selector.v).value;
    localStore.update({id:id, key:l, value:v});
}

function clearList (evt) {
    localStore.clear();
    triggerRedrawList();
}

function clearFormValues() {
    document.getElementById(formIds.key).value   = '';
    document.getElementById(formIds.value).value = '';
}

//
//
//
function bindClassOnEvent(theClass, event, theCallback) {
     // http://www.w3schools.com/jsref/met_document_getelementsbyclassname.asp
    // Returns an array of HTML objects
    var x = document.getElementsByClassName(theClass);
    var i, j = x.length;
    for (i = 0; i < j; i ++) {
        //console.log(x[i]);
        x[i].addEventListener(event, theCallback);
    }
}
