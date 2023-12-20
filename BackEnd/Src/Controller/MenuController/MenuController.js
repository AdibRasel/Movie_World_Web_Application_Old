const CreateService = require("../../Service/Common/CreateService");
const MenuModel = require("../../Model/MenuList/MenuModel")


// Office Register
exports.MenuCreate = async (req, res) => {
    let Result = await CreateService(req, MenuModel);
    res.status(200).json(Result);
};