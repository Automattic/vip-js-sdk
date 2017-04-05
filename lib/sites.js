function Sites( api ) {
	this.api = api;
}

Sites.prototype.all = function( args ) {
	args = args || {};
	args.pagesize = 1;
	args.page = 1;

	let pagesize = 100;

	return this.query( args )
		.then( res => Math.ceil( res.totalrecs / pagesize ) )
		.then( pages => {
			let queries = [];

			for( let i = 0; i < pages; i++ ) {
				args.page = i + 1;
				args.pagesize = pagesize;
				queries.push( this.query( args ) );
			}

			return Promise.all( queries )
				.then( q => q.map( d => d.data ) )
				.then( data => Array.prototype.concat.apply([], data ) );
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
