const vip = require( '../..' );
const api = new vip();

api.sites
	.query( { pagesize: 1 } )
	.then( body => console.log( body ) )
	.catch( err => console.error( err ) );
