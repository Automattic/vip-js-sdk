var program = require( 'commander' );

program
    .command( 'setup' )
    .description( 'Setup cli authorization. Writes the cli config file at ~/.vip/authorization' )
    .option( '--user_id <user_id>', 'VIP API user id' )
    .option( '--access_token <access_token>', 'VIP API access token' )
    .option( '--file_path [file_path]', 'Override location of authorization file' )
    .action( function() {

    });

program
    .parse( process.argv );

if ( ! process.argv.slice( 2 ).length ) {
    program.outputHelp();
}
