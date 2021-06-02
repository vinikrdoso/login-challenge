const MOCKED_USERS = [
  {
    username: "vini@mail.com",
    password: "123456",
    name: "Vini",
  },
  {
    username: "test@mail.com",
    password: "654321",
    name: "Teste",
  },
];

export default (request, response) => {
  const { username, password } = request.body;

  setTimeout(() => {
    const foundUser = MOCKED_USERS.find((user) => user.username === username);
    if (!foundUser || foundUser.password !== password) {
      return response
        .status(401)
        .json({ message: "Usuário ou senha inválidos" });
    }

    return response.status(200).json({
      name: foundUser.name,
      username: foundUser.username,
    });
  }, 1500);
};
