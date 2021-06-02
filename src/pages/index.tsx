import { connect } from "react-redux";
import { loginUserAction } from "../store/actions/authenticationActions";

import SignInTemplate from "../templates/SignIn";

import { api } from "../services/api";
import Swal from "sweetalert2";

function Home(props) {
  const handleSubmit = async ({ email, password }) => {
    // try {
    //   const { data } = await api.get("signin", {
    //     params: {
    //       username: email,
    //       password,
    //     },
    //   });
    //   if (data.length > 0) {
    //     Swal.fire({
    //       title: "Sucesso!",
    //       text: "Você logou com êxito",
    //       icon: "success",
    //       confirmButtonText: "Ok",
    //     });
    //   } else {
    //     Swal.fire({
    //       title: "Ops!",
    //       text: "E-mail ou senha inválidos",
    //       icon: "info",
    //       confirmButtonText: "Ok",
    //     });
    //   }
    // } catch (error) {
    //   Swal.fire({
    //     title: "Erro",
    //     text: "Algo inesperado aconteceu :c",
    //     icon: "error",
    //     confirmButtonText: "Ok",
    //   });
    // }
    const data = {
      username: email,
      password,
    };
    props.dispatch(loginUserAction(data));
  };

  return <SignInTemplate onSubmit={handleSubmit} />;
}

const mapStateToProps = (response) => ({
  response,
});

export default connect(mapStateToProps)(Home);
