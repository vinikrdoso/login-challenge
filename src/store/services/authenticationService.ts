import { api } from "../../services/api";

export const loginUserService = async (request) => {
  const params = request.user;

  try {
    const { data } = await api.get("signin", {
      params,
    });
    console.log("loginUserService response", data);
    if (data.length > 0) {
      //return sucesso
    } else {
      //return erro
    }
  } catch (error) {
    //return erro
  }
};
