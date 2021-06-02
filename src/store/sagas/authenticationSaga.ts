import { put, call } from "redux-saga/effects";
import Swal from "sweetalert2";

import * as types from "../actions";

import { api } from "../../services/api";

export function* loginSaga(payload) {
  try {
    const response = yield call(api.post, "/auth/login", payload.user);
    yield put({ type: types.LOGIN_USER_SUCCESS, response: response.data });
    Swal.fire({
      title: "Sucesso!",
      text: "Você logou com êxito",
      icon: "success",
      confirmButtonText: "Ok",
    });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, response: error.response.data });
    Swal.fire({
      title: "Ops!",
      text: "E-mail ou senha inválidos",
      icon: "info",
      confirmButtonText: "Ok",
    });
  }
}
