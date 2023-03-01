const router =  [
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
]

module.exports = router;
// agar bisa di akses di run js