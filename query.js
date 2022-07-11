const User = require("./models").user;

const getAdminUsers = async () => {
  try {
    const users = await User.findAll({
      where: { admin: true },
    });

    console.log("do I get users?", users);
  } catch (e) {
    console.log(e.message);
  }
};

const getUserById = async (id) => {
  try {
    const user = await User.findByPk(id); // primary key => {} || undefined
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
};

const createUser = async (name, email, password) => {
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });

    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};

const deleteUser = async (id) => {
  try {
    const theUser = await User.findByPk(id);

    console.log("i found the user!", theUser);
    await theUser.destroy();
    console.log("user deleted");
  } catch (e) {
    console.log(e.message);
  }
};

// deleteUser(2);
// createUser("Alex", "a@a.com", "alex123");
getAdminUsers();
// getUserById(2);
