var debug       = require( 'debug' )( 'wpcom-vip:request' );
var superagent  = require( 'superagent' );

function Request( wpcomVIP ) {
    this.wpcomVIP = wpcomVIP;
}

function makeUrl( url ) {
    return Request.wpcomVIP.API_URL + '/' + Request.wpcomVIP.API_VERSION + '/' + part;
}

function addAuthorization( request ) {
    if ( ! this.wpcom || ! this.wpcom.auth ) {
      return request;
    }

    return request
        .set( 'API-User-ID', this.wpcom.auth.apiUserId )
        .set( 'Access-Token', this.wpcom.auth.token );
}

Request.prototype.get = function( url ) {
    url = makeUrl( url );

    var request = superagent
        .get( url )
        .timeout( this.wpcom.API_TIMEOUT );

    return addAuthorization( request );
};

Request.prototype.post = function( url ) {
    url = makeUrl( url );

    var request = superagent
        .post( url )
        .timeout( this.wpcom.API_TIMEOUT );

    return addAuthorization( request );
};

Request.prototype.put = function( url ) {
    url = makeUrl( url );

    var request = superagent
        .put( url )
        .timeout( this.wpcom.API_TIMEOUT );

    return addAuthorization( request );
};

Request.prototype.delete = function( url ) {
    url = makeUrl( url );
    
    var request = superagent
        .delete( url )
        .timeout( this.wpcom.API_TIMEOUT );

    return addAuthorization( request );
};

module.exports = Request;
