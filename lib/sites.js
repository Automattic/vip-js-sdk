function Sites( api ) {
	this.api = api;
}

Sites.prototype.query = function( args ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.get( '/sites' )
			.query( args )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err.response.body );
				}

				return resolve( res.body );
			});
	});
}

module.exports = Sites;
