function Containers( api ) {
	this.api = api;
}

Containers.prototype.query = function( args ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.get( '/containers' )
			.query( args )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

Containers.prototype.getForSite = function( site_id, args ) {
	args.client_site_id = site_id;

	return this.query( args );
}

module.exports = Containers;
