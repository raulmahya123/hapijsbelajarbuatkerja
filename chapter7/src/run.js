'use strick'

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
        handler: (request,h) => {            
      return "<h1>hello World</h1>";
        },
        })


        server.route({
        
            method: 'GET',
            path:'/mahya/{users?}',
            handler: (request,h) => {            
         if(request.params.soccer){
            return `<h1>hello ${request.params.users}</h1>`;
         }else{
            return `kmu jahat`
         }
            },
            })

            server.route({
                method: 'GET',
                path:'/userssss/{soccer?}',
                handler: (request,h) => {    
                    if(request.params.soccer)     {
                        return `<h1>${request.query.name} ${request.query.lastname}</h1>`
                    }else{
                      return  `gagal`
                    }
           
                },
                })

                server.route({
                    method: 'GET',
                    path:'/okee/{soccers?}',
                    handler: (request,h) => {    
                            return `<h1>${request.query.name} ${request.query.lastname}</h1>`
                    },
                    })


                server.route({
                    method: 'GET',
                    path:'/users/{soccer?}',
                    handler: (request,h) => {            
               return `<h1>${request.query.name} ${request.query.lastname}</h1>`
                    },
                    })
    


                    server.route({
                        method: 'GET',
                        path:'/mahyaa',
                        handler: (request,h) => {            
                 return h.redirect('/')
                        },
                        })



                        server.route({
                            method: 'GET',
                            path:'/{any*}',
                            handler: (request,h) => {            
                     return `<h1>gabisa blog</h1>`
                            },
                            })
    


    await server.start();
    console.log(`Server running on : ${server.info.uri}`);
};
 


process.on('unhandledRejection',(err)=>{
    console.log(err);
    process.exit(1)
})


init();