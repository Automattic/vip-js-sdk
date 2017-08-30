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

Sites.prototype.get = function( site_id, args ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.get( '/sites/' + site_id )
			.query( args )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

Sites.prototype.getMasterDB = function( site_id ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.get( '/sites/' + site_id + '/masterdb' )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

module.exports = Sites;
