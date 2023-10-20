const { RolesModel } = require("../models")

module.exports = {
  getAllRoles: () => RolesModel.find(),
  roleExist: ( rol ) => RolesModel.countDocuments( {rol_name : rol })
}