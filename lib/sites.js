function Sites( api ) {
	this.api = api;
}

Sites.prototype.query = function( args ) {
	var self = this;

	return new Promise( function( resolve, reject ) {
		self.api
			.get( '/sites' )
			.query( args )
			.end( function( err, res ) {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

Sites.prototype.getMeta = function( site_id, meta_key ) {
	var self = this;

	return new Promise( function( resolve, reject ) {
		self.api
			.get( '/sites/' + site_id + '/meta/' + meta_key )
			.end( function( err, res ) {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}


module.exports = Sites;
