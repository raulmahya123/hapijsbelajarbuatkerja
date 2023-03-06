'use strick'

const {
    server
} = require('@hapi/hapi');
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const path = require('path');


const init = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 3000
    });
    // await server.register
    //    require(fs) ///gabisa atau gagal

    await server.register([{
            plugin: require("hapi-geo-locate"),
            options: {
                enabledByDefault: true
            }
        },
        {
            plugin: Inert
        }
    ])
    //menggunakna framework api DAN MENGGUNAKAN SATU ARRAY
    server.route([{
        
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                console.log('masuk')
                console.log(h)
                 return h.file("./src/welcome.html")
            },
        },
        {
            method:'POST',
            path:'/login',
            handler: (request,h) => {
                // console.log(request.payload.username);
                // console.log(request.payload.password);
                // return "berhasil ya"
                if (request.payload.username === "raul" && request.payload.password === "123456"){
                    return h.file("./src/login.html")
                }else{
                    return h.redirect("/")
                }
            }
        },
        {
            method: 'GET',
            path: '/download',
            handler: (request, h) => {
               
                 return h.file("./src/welcome.html",{
                    mode:'attachment',
                    filename:'welcome-download.html'
                 })
        }
    },
        {
            method: 'GET',
            path: '/location',
            handler: (request, h) => {
                if (request.location) {
                    return request.location;
                } else {
                    return "<h1>gagals</h1>";
                }
            }
        },
        {
            method: 'GET',
            path: '/users',
            handler: (request, h) => {
                return "<h1>USER PAGE</h1>"
            }
        }
    ])


    // server.route({

    //     method: 'GET',
    //     path:'/mahya/{users?}',
    //     handler: (request,h) => {            
    //  if(request.params.soccer){
    //     return `<h1>hello ${request.params.users}</h1>`;
    //  }else{
    //     return `kmu jahat`
    //  }
    //     },
    //     })

    //     server.route({
    //         method: 'GET',
    //         path:'/userssss/{soccer?}',
    //         handler: (request,h) => {    
    //             if(request.params.soccer)     {
    //                 return `<h1>${request.query.name} ${request.query.lastname}</h1>`
    //             }else{
    //               return  `gagal`
    //             }

    //         },
    //         })

    //         server.route({
    //             method: 'GET',
    //             path:'/okee/{soccers?}',
    //             handler: (request,h) => {    
    //                     return `<h1>${request.query.name} ${request.query.lastname}</h1>`
    //             },
    //             })


    //         server.route({
    //             method: 'GET',
    //             path:'/users/{soccer?}',
    //             handler: (request,h) => {            
    //        return `<h1>${request.query.name} ${request.query.lastname}</h1>`
    //             },
    //             })



    //             server.route({
    //                 method: 'GET',
    //                 path:'/mahyaa',
    //                 handler: (request,h) => {            
    //          return h.redirect('/')
    //                 },
    //                 })



    //                 server.route({
    //                     method: 'GET',
    //                     path:'/{any*}',
    //                     handler: (request,h) => {            
    //              return `<h1>gabisa blog</h1>`
    //                     },
    //                     })



    await server.start();
    console.log(`Server running on : ${server.info.uri}`);
};



process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1)
})


init();