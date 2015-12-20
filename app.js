/*
    Date: 2015-12-19
    https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
*/

var mylocalstorage = {
    //
    test : function () {
        console.log("mylocalstorage.test");
        $('#storeavailable').html(mylocalstorage.storageAvailable('localStorage'));
    },
    test2 : function () {
        console.log("mylocalstorage.test2");
        // All are valid. https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Basic_concepts
        // localStorage.colorSetting = '#a4509b';
        // localStorage['colorSetting'] = '#a4509b';
        // localStorage.setItem('colorSetting', '#a4509b');
        localStorage.data = $('#pdata').val();
        $('#pdata').val('');
    },
    test3 : function () {
        console.log("mylocalstorage.test3");
        $('#storelocal').html( localStorage.getItem('data') );
    },
    test4 : function () {
        console.log("mylocalstorage.test4");
        sessionStorage.data = $('#sdata').val();
        $('#sdata').val('');
    },
    test5 : function () {
        console.log("mylocalstorage.test5");
        $('#storesession').html( (sessionStorage.getItem('data')) ? sessionStorage.getItem('data') : 'empty'  );
    },

    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Testing_for_support_vs_availability
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