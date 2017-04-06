function Sites( api ) {
	this.api = api;
}

Sites.prototype.allpages = function *allpages( numpages, args ) {
	numpages = numpages || 1;
	args = args || {};

	for ( let i = 0; i < numpages; i++ ) {
		args.page = i + 1;
		yield this.query( args );
	}
}

Sites.prototype.all = function( args, callback ) {
	const pagesize = 100;
	args.pagesize = 1;

	this.query( args )
		.then( body => Math.ceil( body.totalrecs / pagesize ) )
		.then( pages => {
			args.pagesize = 100;
			let t = this.allpages( pages, args );

			for ( let p of t ) {
				p
				.then( sites => callback( null, sites.data ) )
				.catch( err => callback( err ) )
			}
		})
		.catch( err => {
			callback( err );
		});
}

Sites.prototype.query = function( args ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.get( '/sites' )
			.query( args )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

module.exports = Sites;
