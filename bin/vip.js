#! /usr/bin/env node

/**
 * The command line vip tool
 */

var WPCOM_VIP = require( '../index' );

// @todo authentication

var program = require( 'commander' );

program
    .version( '0.0.1' )
    .command( 'auth', 'setup authorization to VIP' )
    .command( 'import', 'import content to your site' )
    .parse( process.argv );

if ( ! process.argv.slice( 2 ).length ) {
    program.outputHelp();
}
