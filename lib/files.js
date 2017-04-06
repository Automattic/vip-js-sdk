function Files( api ) {
	this.api = api;
}

Files.prototype.query = function( site_id, args ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.get( '/sites/' + site_id + '/files' )
			.query( args )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

Files.prototype.add = function( site, token ) {
	// TODO: Read file from readstream, pipe to files service
}

module.exports = Files;
