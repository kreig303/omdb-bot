'use strict';

const Hapi = require('hapi');

const init = async () => {

    const server = Hapi.server({
        port: 3030,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {

       return 'The OMDB app is up and running.';
        }
    });
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();
