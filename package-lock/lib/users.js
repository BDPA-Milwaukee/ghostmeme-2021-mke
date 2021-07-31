exports.login = function (req, res) {
        var message = '';
        var sess = req.session;

        if (req.method == "POST") {
            var post = req.body;
            var name = post.user_name;
            var pass = post.password;
            var rememberme = post.remember_me;

            var sql = "SELECT * FROM `users` WHERE `user_name`='" + name + "' and password = '" + pass + "'";
            db.query(sql, function (err, results) {
                if (results.length) {
                    req.session.userId = results[0].id;
                    req.session.user = results[0];
                    console.log(results[0].id);
                    res.redirect('/home/dashboard');
                }
                else {
                    message = 'Wrong Credentials.';
                    res.render('index.ejs', { message: message });
                }

            });
        } else {
            res.render('index.ejs', { message: message });
        }

    };



exports.signup = function(req, res){
message = '';
    if(req.method == "POST"){
    var fname = post.full_name;
    var phonenum = post.phone_number;
    var emailadd = post.email_address;
    var pass = post.password;
    var uname = post.user_name;
    var avatarpic = post.avatar_picture;
    var rememberme = post.remember_me;

      var sql = "INSERT INTO `users`(`full_name`,`phone_number`, `emailadd`, `password`,`user_name`, `avatar_picture`, `remember_me`) VALUES ('" + fname + "','" + phonenum + "','" + emailadd + "','" + pass + "','" + uname + "' '" + avatarpic + "','" + rememberme + "')";

      var query = db.query(sql, function(err, result) {

         message = "Succesfully! Your account has been created.";
         res.render('signup.ejs',{message: message});
      });

   } else {
      res.render('signup');
   }
};




