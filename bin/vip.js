#! /usr/bin/env node

/**
 * The command line vip tool
 */

var WPCOM_VIP = require( '../index' );

// @todo authentication

var program = require( 'commander' );

program
    .version( '0.0.1' )
    .command( 'import' )
    .parse( process.argv );
