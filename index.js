var debug       = require( 'debug' )( 'wpcom-vip' );
var Request     = require( './lib/util/request' );

// Modules


function WPCOM_VIP( token ) {
    this.req = new Request( this );

    this.auth = {};
    this.caps = [];

    const sites = require( './lib/sites' );
    this.sites = new sites( this );
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
    return this.req.put.apply( this.req, arguments );
};

WPCOM_VIP.prototype.del = function() {
    return this.req.del.apply( this.req, arguments );
};

WPCOM_VIP.prototype.makeUrl = function( url ) {
    return this.req.makeUrl( url );
};

// Caps
WPCOM_VIP.prototype.currentUserCan = function( cap, action ) {
    this.caps.forEach( function( c ) {
        if ( c.resource_name == cap ) {
            return action >= c.permissions;
        }
    });

    return false;
};

WPCOM_VIP.prototype.currentUserCanRead = function( cap ) {
    return this.currentUserCan( cap, 1 );
};

WPCOM_VIP.prototype.currentUserCanEdit = function( cap ) {
    return this.currentUserCan( cap, 2 );
};

WPCOM_VIP.prototype.currentUserCanAdd = function( cap ) {
    return this.currentUserCan( cap, 4 );
};

WPCOM_VIP.prototype.currentUserCanDelete = function( cap ) {
    return this.currentUserCan( cap, 8 );
};

module.exports = WPCOM_VIP;
