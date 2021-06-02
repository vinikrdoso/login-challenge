import { useSelector, useDispatch } from "react-redux";
import { loginUserAction } from "../store/actions/authenticationActions";

import SignInTemplate from "../templates/SignIn";

function Home() {
  const dispatch = useDispatch();
  const loading = useSelector<{ login: { loading: boolean } }>(
    (state) => state.login.loading
  );
  const handleSubmit = async ({ email, password }) => {
    const data = {
      username: email,
      password,
    };
    dispatch(loginUserAction(data));
  };

  return <SignInTemplate onSubmit={handleSubmit} loading={loading} />;
}

export default Home;
