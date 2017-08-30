function Sandbox( api ) {
	this.api = api;
}

Sandbox.prototype.query = function( args ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.get( '/sandboxes' )
			.query( args )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

Sandbox.prototype.create = function( site_id ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.post( '/sandboxes' )
			.send( { client_site_id: site_id } )
			.end( ( resolve, reject ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

Sandbox.prototype.start = function( id ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.post( '/sandboxes/' + id )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

Sandbox.prototype.stop = function( id ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.post( '/sandboxes/' + id + '/stop' )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

module.exports = Sandbox;
