const handleUser = (req, res)=>{
    const url = req.url;
    const method = req.meethod

    if (url === '/') {
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head></head>');
        res.write('<body><form action="/create-user" method ="POST"><input type=text name= user><input type="submit" value="Submit"></form></body>')
        res.write('</html>')
        return res.end()
    }

    if (url === '/users') {
        res.setHeader('Content-type','text/html');
        res.write('<html>')
        res.write('<head><tittle>Assignment 1</tittle></head>');
        res.write('<body><ul><li>user 1</li></ul><ul><li>user 2</li></ul></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/create-user') {
        const body = [];
        req.on('data', (chunk)=>{
            console.log(chunk)
            body.push(chunk);
        });
        req.on('end', () =>{
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(message)
            
        });
              
        console.log("tidak error")
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
       
    }

}

module.exports = handleUser;

