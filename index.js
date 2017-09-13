var debug       = require( 'debug' )( 'wpcom-vip' );
var Request     = require( './lib/util/request' );

// Modules


function WPCOM_VIP( token ) {
    this.req = new Request( this );

    this.proxy = '';
    this.auth = {};
    this.caps = [];

    var sites = require( './lib/sites' );
    this.sites = new sites( this );

    var softwareStacks = require( './lib/software-stacks' );
    this.softwareStacks = new softwareStacks( this );
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
var CAP_API_READ = 1;
var CAP_API_EDIT = 2;
var CAP_API_ADD = 4;
var CAP_API_DELETE = 8;

WPCOM_VIP.prototype.currentUserCan = function( cap, action ) {
    if ( ! Array.isArray( this.caps ) ) {
        return false;
    }

    return this.caps.some( function( c ) {
        if ( c.resource_name == cap ) {
            return action <= c.permissions;
        }

        return false;
    });
};

WPCOM_VIP.prototype.currentUserCanRead = function( cap ) {
    return this.currentUserCan( cap, CAP_API_READ );
};

WPCOM_VIP.prototype.currentUserCanEdit = function( cap ) {
    return this.currentUserCan( cap, CAP_API_EDIT );
};

WPCOM_VIP.prototype.currentUserCanAdd = function( cap ) {
    return this.currentUserCan( cap, CAP_API_ADD );
};

WPCOM_VIP.prototype.currentUserCanDelete = function( cap ) {
    return this.currentUserCan( cap, CAP_API_DELETE );
};

module.exports = WPCOM_VIP;
