/*
    Date: 2016-03-06
          2016-03-07 - Added update()
*/

var localStore = {
    //
    test : function (id) {
        var v = this.storageAvailable('localStorage')
        console.log("localStore.test:" + v);
        //document.getElementById(id).innerHTML = v;
        document.getElementById(id).textContent = v;
        return v;
    },
    len     : function ()    { return localStorage.length; },
    clear   : function ()    { localStorage.clear(); },
    put     : function (k,v) { localStorage[k] = v; },
    get     : function (key) { return localStorage.getItem(key) ? localStorage.getItem(key) : ''; },
    update  : function (obj) { this.remove(obj.id); this.put(obj.key, obj.value); },
    key     : function (num) { return localStorage.key(num); },
    remove  : function (key) { localStorage.removeItem(key); },
    storageAvailable: function (type) {
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
    }
};