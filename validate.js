const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 5001;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,'forms.html'));
});

app.post('/validate', (req, res) => {
    n = req.body.pn;
    result = validate(n);
    if(n != null){
        res.send(result.toString());
    }
})

app.listen(port, () =>{
    console.log('Server running at http://localhost:'+port);
});

function validate(str) {
    const regex = /^\d{3}-\d{3}-\d{4}$/;
    if (regex.test(str)) {
        return "Phone number entered correctly";
    } else {
        return "Incorrect number format";
    }
}