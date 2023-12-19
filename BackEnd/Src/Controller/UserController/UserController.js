const UserRegister = require("../../Service/UserService/UserRegister");


// User Register
exports.UserRegister = async (req, res) => {
    let Result = await UserRegister(req, "UserModel");
    res.status(200).json(Result);
};

