
// This uses require.js to structure javascript:
// http://requirejs.org/docs/api.html#define

define(function(require) {
    // Zepto provides nice js and DOM methods (very similar to jQuery,
    // and a lot smaller):
    // http://zeptojs.com/
    
    //var $ = require('zepto'); - disabled this, as we are not using it in my sample app - Chris Mills

    // Need to verify receipts? This library is included by default.
    // https://github.com/mozilla/receiptverifier
    require('receiptverifier');

    // Want to install the app locally? This library hooks up the
    // installation button. See <button class="install-btn"> in
    // index.html
    require('./install-button');

    // Write your app here.
    
        
    // test for media query support. If they are not supported, include respond.js polyfill

    if(!Modernizr.mq('only all')) {
      require('respond');
    } 



});

