var debug       = require( 'debug' )( 'wpcom-vip' );
var Request     = require( './lib/util/request' );

// Modules


function WPCOM_VIP( token ) {
    this.req = new Request( this );

    this.auth = {};
}

WPCOM_VIP.prototype.API_URL     = 'https://api.vipv2.net';
WPCOM_VIP.prototype.API_VERSION = '1';
WPCOM_VIP.prototype.API_TIMEOUT = 10000;

WPCOM_VIP.prototype.get = function() {
    return this.req.get.apply( this.req, arguments );
};

WPCOM_VIP.prototype.post = function() {
    return this.req.post.apply( this.req, arguments );
};

WPCOM_VIP.prototype.put = function() {
    return this.req.get.apply( this.req, arguments );
};

WPCOM_VIP.prototype.delete = function() {
    return this.req.delete.apply( this.req, arguments );
};

WPCOM_VIP.prototype.makeUrl = function( url ) {
    return this.req.makeUrl( url );
};

module.exports = WPCOM_VIP;
