# BLOG.localstorage #
Date: 2016-01-06 <br>
Last Update: 2016-03-07

A common task when working on a hybrid mobile platform is to store some data until the remote becomes available. There are four methods of storage available.

1. localstorage - it has a peristant storage and session storage
2. indexeddb - a system similiar to the *nix indexDB or BerkeleyDB, except javascript-ish
3. websql (or sqlite) - javascript-ish version of sqlite, except less capable
4. file - a flat file, you control the format.

NOTE: For convenience, we are using [zepto.js](http://zeptojs.com/), a jquery clone.

## localstorage ##

The beauty of this framework is that it is simple. There is one (1) property, five (5) [methods](https://developer.mozilla.org/en-US/docs/Web/API/Storage), and one (1) [event](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Responding_to_storage_changes_with_the_StorageEvent).

### property ###

- `length` - number of Item(s) stored

### methods ###

- `getItem()` - gets an Item
- `setItem()` - sets (or stores) an Item
- `removeItem()` - removes the Item
- `key()` - Passed an 'n', returns the name of the 'n'th key
- `clear()` - empty all keys out of the storage

### events ###

- `storage` - `window.addEventListener('storage', function(e) {});`

### The Test Framework ###

We run five (5) tests check the basics of the library. Only the first three (3) are documented as the later two are a namespace change.

1. test1 - `availability`
2. test2 - for localStorage can we `setItem()`
3. test3 - for localStorage can we `getItem()`
4. test4 - for sessionStorage can we `setItem()`
5. test5 - for sessionStorage can we `getItem()`

However, it should be noted there are three (3) syntactic ways to write code to manipulate the data.

1. dot notation
2. bracket notation (known in other languages as associative array or dictionary array)
3. function notation

***Examples***

1. `localStorage.data = 'some string';`
2. `localStorage['data'] = 'some string';`
3. `localStorage.setItem('data', 'some string');`

#### test1 - availability ####

The first thing to do is test for availability. [doc](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_support_vs_availability). With the code below, we are testing three (3) things.

1. Is the namespace available
2. Can we write (setItem) to the library.
3. Can we remove (removeItem) data from the library.

If those three (3) things are available, then we return `true`, else `false.

        try {
            var storage = window[type],
			          x = '__storage_test__';
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }
        catch(e) {
            return false;
        }

#### 2. test2 - `localStorage.setItem()` ####

Simply enough, we get the string from the input field (`id=pdata`) and assign the string to `localStorage` with the key `data`. We then clear the input field to give an indication that we have completed the task.

        localStorage.data = $('#pdata').val();
        $('#pdata').val('');

#### 3. test3 - `localStorage.getItem()` ####

Starting from the inside and working out, we retrieve an item stored in `localStorage` by using the function `getItem()` and giving it a key of `'data'`. We then check for the "truthiness" of what is return, if we get "something" - return "something" else return the string 'empty'.

Whatever is return from this from this expression, is place on the webpage as the value of the element (`id=storelocal`).

        $('#storelocal').html( localStorage.getItem('data') ? localStorage.getItem('data') : 'empty' );

