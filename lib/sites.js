function Sites( api ) {
	this.api = api;
}

Sites.prototype.query = function ( args ) {
	const self = this;

	return new Promise( function ( resolve, reject ) {
		self.api
			.get( '/sites' )
			.query( args )
			.end( function ( err, res ) {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			} );
	} );
};

Sites.prototype.getMeta = function ( siteId, metaKey ) {
	const self = this;

	return new Promise( function ( resolve, reject ) {
		self.api.get( '/sites/' + siteId + '/meta/' + metaKey ).end( function ( err, res ) {
			if ( err ) {
				// Meta doesn't exist, but that shouldn't trigger an error
				if ( 404 === err.status ) {
					return resolve( null );
				}

				return reject( err );
			}

			// Meta keys are unique per site
			return resolve( res.body.data[ 0 ].meta_value );
		} );
	} );
};

module.exports = Sites;
