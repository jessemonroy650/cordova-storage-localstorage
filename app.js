    function onButtonClick() {
        alert("button clicked.");
    }
    //
    // Wait for PhoneGap to load
    document.addEventListener("deviceready", onDeviceReady, false);
    //
    function onDeviceReady() {
        //alert("device ready.");
        if (device.platform === "iOS") {
            alert("got iOS.");
            // hide Exit button. They don't have one on iOS devices.
            // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
            document.getElementById('exitApp').classList.add("hidden");
            // deals with post-iOS-7 change that covers the status bar
            // http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/
            document.body.style.marginTop = "20px";
            // hide the Splash Screen for iOS only
            navigator.splashscreen.hide();
        } else if (device.platform == 'Android') {
            // Get rid of 300ms delay 
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body); },
                false);
            //
            document.getElementById('exitApp').addEventListener('click', function() {
                navigator.app.exitApp();
            });
        } else if (device.platform == 'browser') {
            // hide Exit button. Browser does not exit.
            document.getElementById('exitApp').classList.add("hidden");
        }
        // this is cheating
        if ('mylocalstorage' in  window) {
            mylocalstorage.test1();
        }
        if ('localStore' in  window) {
            localStore.test('storeavail');
        }
    }


//
//    Entry Point
//
document.addEventListener('DOMContentLoaded', function() {
    // Detect if we are using Cordova/Phonegap or a browser.
    // https://videlais.com/2014/08/21/lessons-learned-from-detecting-apache-cordova/
    var isCordovaApp = (typeof window.cordova !== "undefined");

    // Is it a device we know?
    if ( isCordovaApp === true ) {
        // Wait for PhoneGap to load
        document.addEventListener("deviceready", onDeviceReady, false);
    } else {
        // This needs to be global so other modules can see it.
        device = {platform:'browser'};
        // Force the function.
        onDeviceReady();
    }
});
