const sql = require("../config/DbConnection");

// constructor
const LoginModel = function(loginmodel) {
    this.email = loginmodel.email;
    this.password = loginmodel.password;
  };

  LoginModel.getByLogin = (newloginmodel, result) => {
      console.log("hggh", newloginmodel);
    sql.query(`SELECT * FROM login WHERE email = "dwi.tripathy@gmail.com" AND PASSWORD="g"`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("Login found: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };
  
  module.exports = LoginModel;