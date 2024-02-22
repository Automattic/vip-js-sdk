function SoftwareStacks( api ) {
	this.api = api;
}

SoftwareStacks.prototype.query = function ( args ) {
	const self = this;

	return new Promise( function ( resolve, reject ) {
		self.api
			.get( '/software_stacks' )
			.query( args )
			.end( function ( err, res ) {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			} );
	} );
};

module.exports = SoftwareStacks;
