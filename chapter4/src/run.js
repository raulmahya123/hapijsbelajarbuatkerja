const { server } = require('@hapi/hapi');
const Hapi = require('@hapi/hapi');


const init = async () =>{
    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });
       //menggunakna framework api DAN MENGGUNAKAN SATU ARRAY
       server.route([
        {
        method: 'GET',
        path:'/',
        handler:(request,h)=>{
            return 'HALLO SAYANG';
        },
        },
        {
            method: 'GET',
            path:'/about',
            handler:(request,h)=>{
                return 'UPI BLM MANDI';
            },
        },
        {
            method: 'GET',
            path:'/home',
            handler:(request,h)=>{
                return 'UPI BLM MINUM OBAT';
            },
        },
        {
            method: 'GET',
            path:'/{any*}',
            handler:(request,h)=>{
                return 'UPI BAU';
            },
        },{
            method: '*',
            path:'/home',
            handler:(request,h)=>{
                return 'RAULGANTENG';
            },
        }
    ]);
    await server.start();
    console.log(`Server running on %s ${server.info.uri}`);
};
 

init();