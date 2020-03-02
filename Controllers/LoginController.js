const LoginModel = require("../Models/LoginModel");

exports.findLogin = (req, res) => {
    console.log("findLogin", req);
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
      }
          
      const loginModel = new LoginModel({
        email : req.body.email,
        password : req.body.password
      });
    
      LoginModel.getByLogin(loginModel,(err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers."
          });
        else res.send(data);
      });
};
