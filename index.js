var debug       = require( 'debug' )( 'wpcom-vip' );
var request     = require( './lib/util/request' );

// Modules


function WPCOM_VIP( token ) {
    this.API_VERSION = '1';
    this.API_TIMEOUT = 10000;

    this.req = new Request( this );
}

WPCOM_VIP.prototype.req = new Request();

WPCOM_VIP.prototype.get = function() {
    return this.req.get.apply( arguments );
};

WPCOM_VIP.prototype.post = function() {
    return this.req.post.apply( arguments );
};

WPCOM_VIP.prototype.put = function() {
    return this.req.get.apply( arguments );
};

WPCOM_VIP.prototype.delete = function() {
    return this.req.delete.apply( arguments );
};

module.exports = WPCOM_VIP;
