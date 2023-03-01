const { server } = require('@hapi/hapi');
const Hapi = require('@hapi/hapi');
const routes = require('../src/routes')


const init = async () =>{
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
       //menggunakna framework api DAN MENGGUNAKAN SATU ARRAY
       server.route(routes);
    await server.start();
    console.log(`Server running on %s ${server.info.uri}`);
};
 

init();