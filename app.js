var express = require("express"),
    app     = express();

app.use(express.static(__dirname + '/Public'));

app.get("/", function(req, res){
    
    res.render(index.html);
    
});

app.listen(5005, function(){
    console.log("started");
    
});
