const http = require('http');
http.get('http://127.0.0.1:3000', (ev) => {
    ev.on('end', function (res) {
        console.log(res);
    });
});


// other way 
/**
 *
 * const request = require('request');
 * request({
 *   url: 'http://127.0.0.1:3000',
 *   method: 'GET',
 *   body: 'form get method request'
 * });
 *
 *
 */