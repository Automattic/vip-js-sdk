var program = require( 'commander' );

program
    .version( '0.0.1' )
    .option( '--sql <sql>', 'Path to sql file' )
    .parse( process.argv );
