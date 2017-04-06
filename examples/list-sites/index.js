const vip = require( '../..' );
const api = new vip();

// Get all launched sites
api.sites.all( { launched: true }, ( err, sites ) => {
	console.log( err, sites.length );
});

// Get first launched site
api.sites
	.query( { pagesize: 1, launched: true } )
	.then( body => console.log( body ) )
	.catch( err => console.error( err ) );

