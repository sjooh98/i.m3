const express = require('express');
const app = express();  
const path = require('path');
const Port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Hello World!');
    //res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
}); 