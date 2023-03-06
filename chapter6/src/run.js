const { server } = require('@hapi/hapi');
const Hapi = require('@hapi/hapi');


const init = async () =>{
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
       //menggunakna framework api DAN MENGGUNAKAN SATU ARRAY
       server.route({
        
        method: 'GET',
        path:'/user/{name?}',
        handler: (request,h) => {            
      const  {name = "mahya" } = request.params;         
    return `nama saya adalah ${name}`;
        },
        })
    await server.start();
    console.log(`Server running on %s ${server.info.uri}`);
};
 



init();