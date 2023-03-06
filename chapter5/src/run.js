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
        path:'/',
        handler: function (request,h) {
            const user = {
                firstName: 'John',
                lastName: 'Doe',
                userName: 'JohnDoe',
                id: 123
            }
    return user;
        },
        })
    await server.start();
    console.log(`Server running on %s ${server.info.uri}`);
};
 



init();