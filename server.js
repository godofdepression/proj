function require HTTPS(req,res,next)
{
  if(!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}
const express = require('express');
const app = express();
app.use(requireHTTPS);

app.use(express.static('./dist/<package.json>'));
app.get('/*', function(req,res){
  res.sendFile('index.html',{root:'dist/<package.json>/'}
               );
});

app.list(process.env.PORT || 0786);
                            
                        
