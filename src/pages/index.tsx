import SignInTemplate from "../templates/SignIn";

// import { connect } from "react-redux";

// import { loginUserAction } from "../store/sagas/login";

function Home() {
  const handleSubmit = (email, password) => {
    console.log("email, password", email, password);
  };

  return <SignInTemplate onSubmit={handleSubmit} />;
}

// const mapStateToProps = (response) => ({
//   response,
// });

export default Home;
