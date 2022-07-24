const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

app.get('/',(req,res)=>{
  client.get('visits', (err, visits)=>{
      res.send(`<body style="background-color:powderblue;"></body><center><h1><br><br><br><br>Number of visits is ${visits}</h1></center>`);
      client.set('visits', +visits + 1);
  });
});

app.listen(8081, ()=> {
    console.log('Listening on port 8081')
})