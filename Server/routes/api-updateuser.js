module.exports = function (app, path, fs) {
    
    app.post("/api/updateuser", function (req, res) {
        if(!req.body) {
            return res.sendStatus(400);
        }
        fs.readFile('data/users.json','utf8',(err,users)=>{
            if (err) {
                console.error(err)
                return
            }
            try{
                console.log(req.body.username);
                users = JSON.parse(users);
                
                for(let i = 0; i < users.length; i++) {
                    if(users[i].id == req.body.user.id) {
                        users[i].username = req.body.user.username;
                        users[i].email = req.body.user.email;
                        users[i].permission = req.body.user.permission;
                    }
                }

                fs.writeFile("data/users.json", JSON.stringify(users), (err) => {
                    if (err) {
                        console.log(err);
                        return res.sendStatus(400);
                    } else {
                        console.log("File written successfully\n");
                    }
                })
            }catch(err){
              console.log("Error parsing the user data on account update" + err);
            }
        })
    });
}