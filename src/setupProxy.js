const { createProxyMiddleware } = require('http-proxy-middleware');


module.exports=app=>{
    app.use(

        createProxyMiddleware('/api/verifyPAN',
        
        {
            target:'https://ind-verify.hyperverge.co',
            changeOrigin:true
        }
        )
    )
}