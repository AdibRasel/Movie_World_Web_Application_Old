const CreateService = require("../../Service/Common/CreateService");
const DashBoardModel = require("../../Model/DashBoardModel/DashBoardModel")


// DashBoard Create
exports.DashBoardCreate = async (req, res) => {
    let Result = await CreateService(req, DashBoardModel);
    res.status(200).json(Result);
};