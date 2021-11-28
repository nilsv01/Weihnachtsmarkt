const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'visitorsystem',
    insecureAuth : true
});

app.post('/add',(req, res) => {

    db.query('UPDATE visitor SET visitorMoment = visitorMoment + 1, visitorDaily = visitorDaily + 1, visitorTotal = visitorTotal + 1 WHERE id = 1',
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
   //*         console.log("new Visitor");
        }
    }
    );
});

app.post('/sub',(req, res) => {

    db.query('UPDATE visitor SET visitorMoment = visitorMoment -1 WHERE id = 1 AND visitorMoment != 0',
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
   //*         console.log("left Visitor");
        }
    }
    );
});

app.post('/resMoment',(req, res) => {

    db.query('UPDATE visitor SET visitorMoment = 0 WHERE id = 1',
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
   //*         console.log("new Moment");
        }
    }
    );
});

app.post('/resDaily',(req, res) => {

    db.query('UPDATE visitor SET visitorDaily = 0 WHERE id = 1',
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
   //*         console.log("new Day");
        }
    }
    );
});

app.post('/resTotal',(req, res) => {

    db.query('UPDATE visitor SET visitorTotal = 0 WHERE id = 1',
    (err,result) => {
        if(err) {
            console.log(err);
        } else {
    //*        console.log("new Total");
        }
    }
    );
});

app.get('/getVisitorMoment', (req, res) => {
    db.query("SELECT visitorMoment FROM visitor", (err,result) => {
      if(err){
          console.log(err);
      }else{
  //*     console.log(JSON.parse(JSON.stringify(result))[0].visitorMoment);
          res.send(result);
      }      
 });
});

app.get('/getVisitorDaily', (req, res) => {
    db.query("SELECT visitorDaily FROM visitor", (err,result) => {
      if(err){
          console.log(err);
      }else{
          res.send(result)   
      }      
 });
});

app.get('/getVisitorTotal', (req, res) => {
    db.query("SELECT visitorTotal FROM visitor", (err,result) => {
      if(err){
          console.log(err);
      }else{
          res.send(result)   
      }      
 });
});

app.listen(3001,() =>{
    console.log("server is running")
});