const debug = require( 'debug' )( 'wpcom-vip:request' );
const superagent = require( 'superagent' );
require( 'superagent-proxy' )( superagent );

function Request( wpcomVIP ) {
	this.wpcomVIP = wpcomVIP;
}

Request.prototype.addAuthorization = function( request ) {
	if ( ! this.wpcomVIP || ! this.wpcomVIP.auth ) {
		return request;
	}

	return request
		.set( 'API-User-ID', this.wpcomVIP.auth.apiUserId )
		.set( 'Access-Token', this.wpcomVIP.auth.token );
};

Request.prototype.get = function( url ) {
	url = this.makeUrl( url );

	let request = superagent
		.get( url )
		.timeout( this.wpcomVIP.API_TIMEOUT );

	if ( this.wpcomVIP.proxy ) {
		request = request.proxy( this.wpcomVIP.proxy );
	}

	return this.addAuthorization( request );
};

Request.prototype.post = function( url ) {
	url = this.makeUrl( url );

	let request = superagent
		.post( url )
		.timeout( this.wpcomVIP.API_TIMEOUT );

	if ( this.wpcomVIP.proxy ) {
		request = request.proxy( this.wpcomVIP.proxy );
	}

	return this.addAuthorization( request );
};

Request.prototype.put = function( url ) {
	url = this.makeUrl( url );

	let request = superagent
		.put( url )
		.timeout( this.wpcomVIP.API_TIMEOUT );

	if ( this.wpcomVIP.proxy ) {
		request = request.proxy( this.wpcomVIP.proxy );
	}

	return this.addAuthorization( request );
};

Request.prototype.patch = function( url ) {
	url = this.makeUrl( url );

	let request = superagent
		.patch( url )
		.timeout( this.wpcomVIP.API_TIMEOUT );

	if ( this.wpcomVIP.proxy ) {
		request = request.proxy( this.wpcomVIP.proxy );
	}

	return this.addAuthorization( request );
};

Request.prototype.del = function( url ) {
	url = this.makeUrl( url );

	let request = superagent
		.del( url )
		.timeout( this.wpcomVIP.API_TIMEOUT );

	if ( this.wpcomVIP.proxy ) {
		request = request.proxy( this.wpcomVIP.proxy );
	}

	return this.addAuthorization( request );
};

Request.prototype.makeUrl = function( part ) {
	return this.wpcomVIP.API_URL + '/v' + this.wpcomVIP.API_VERSION + part;
};

module.exports = Request;
