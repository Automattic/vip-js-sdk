function HostAction( api ) {
	this.api = api;
}

HostAction.prototype.get = function( action_id ) {
	return new Promise( ( resolve, reject ) => {
		this.api
			.get( '/actions/' + action_id )
			.end( ( err, res ) => {
				if ( err ) {
					return reject( err );
				}

				return resolve( res.body );
			});
	});
}

HostAction.prototype.create = function( host_id, opts ) {
	// TODO: Set up default opts

	this.api
		.post( '/actions' )
		.send( opts )
		.end( ( err, res ) => {
			if ( err ) {
				return reject( err );
			}

			return resolve( res.body );
		});
}

HostAction.prototype.poll = function( action_id ) {
	// TODO: Poll host action_id
}

module.exports = HostAction;
