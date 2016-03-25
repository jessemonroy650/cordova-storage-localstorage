/*
    Date: 2016-03-25

    The following functions are for drawing `<input>` and `<button>`.
    Use `headNode()` as the outermost wrapper.
    Use `div()` as an internal wrapper.
    Use `label()` is for internal labels.

    ## SEE BOTTOM FOR DETAILS ##
*/
var drawData = {
    // This holds the key to the datanode
    headNode : function(id, theClass) {
        var x = document.createElement('div');
        x.setAttribute('id', id);
        if (theClass) {
            x.setAttribute('class', theClass);
        }
        return x;
    },
    div : function(appendPoint, theClass) {
        var x = document.createElement('div');
        if (theClass) {
            x.setAttribute('class', theClass);
        }
        appendPoint.appendChild(x);
        return x;
    },
    label : function(appendPoint, label, theClass) {
        var x = document.createElement('div');
        x.textContent = label;
        if (theClass) {
            x.setAttribute('class', theClass);
        }
        appendPoint.appendChild(x);
        return x;
    },
    // This creates 'input' element.
    inputNode : function(appendPoint, id, attr, theClass) {
        var x = document.createElement('input');
        x.setAttribute('id', id);
        x.setAttribute('type', "text");
        if (attr && attr.pholder){
            x.setAttribute('placeholder', attr.pholder);
        }
        if (attr && attr.value) {
            x.setAttribute('value', attr.value);
        }
        if (theClass) {
            x.setAttribute('class', theClass);
        }
        appendPoint.appendChild(x);
    },
    // The creates buttons.
    button : function (appendPoint, id, label, theClass) {
        var x = document.createElement('button');
        if (id) {
            x.setAttribute('id', id);
        }
        x.textContent = label;
        if (theClass) {
            x.setAttribute('class', theClass);
        }
        appendPoint.appendChild(x);
    }
}

/*

This simple library is for drawing HTML elements. It allows for inplace editing or deleting - which ever is required.

- **required** items are required.
- * optional* are not required, but should be blank `''` or `null`. I am not check for parameters out of position.
- `class` is optional for all objects.

`headNode()` is the wrapper and should be the key (or index) to the data. It is used as a reference by other libraries to find this "visual data node". `div()` is another wrapper for internal grouping.

`label()` is a `<div>`. It is div that follow the usual rules.
`inputNode()` is `<input type=text>`. It displays the data and allows editing.
`button()` is `<button>`. It is for interaction. Listen for the `id` or `class`.

- headNode(id, class)
    - `id` required
    - `class` optional (CSS class name)
- div(appendPoint, theClass)
    - `appendpoint` required
    - `class` optional (CSS class name)
- label(appendPoint, label, theClass) {
    - `appendpoint` required
    - `label` required - the 'textContent' for a `<div>`
    - `class` optional (CSS class name)
- inputNode(appendPoint, id, obj, theClass)
    - `appendpoint` required
    - `id` required
    - `attr` optional (or '', if using `class`)
        - pholder - placeholder attribute
        - value - value attribute
    - `class` optional (CSS class name)
- button(appendpoint, id, label, class)
    - `appendpoint` required, `id` required (or '')
    - `label` required
    - `class` optional (CSS class name)

*/