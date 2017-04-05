const vip = require( '../..' );
const api = new vip();

// Get all launched sites
api.sites.all( { launched: true } )
	.then( s => console.log( "Total launched sites:", s.length ) )
	.catch( e => console.log( e ) );

// Get first launched site
api.sites
	.query( { pagesize: 1, launched: true } )
	.then( body => console.log( body ) )
	.catch( err => console.error( err ) );

