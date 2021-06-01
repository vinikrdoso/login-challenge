import SignInTemplate from "../templates/SignIn";

export default function Home() {
  const handleSubmit = () => {
    console.log("opa");
  };
  return <SignInTemplate onSubmit={handleSubmit} />;
}
