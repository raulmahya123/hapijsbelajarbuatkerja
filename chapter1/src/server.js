const Hapi = require('@hapi/hapi'); //MANGGIL MOGUL SI HAPPY


const init = async () =>{ //asyn memungkinkan aplikasi web untuk bekerja secara asynchronus secara 
    //tdk langung atau menggunakan request
    const server = Hapi.server({ //buat variable server
        port: 3000, //port yang ada di http
        host: 'localhost' //domainnya di localhost
    });
    await server.start(); //await disini untuk menunda eksekusi dari consologe
    console.log(`Server running on %s ${server.info.uri}`);
};



init();