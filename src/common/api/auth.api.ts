import constants from "../constants";
import { Api_Auth_Login_Body } from "../interfaces/api.interface";
import * as request from "../utilities/axios.utility";

const login = (body: Api_Auth_Login_Body) => {
  request.post(constants.api.auth.login);
};

export const auth = Object.freeze(
  Object.seal({
    login,
  })
);
