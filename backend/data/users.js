import bcrypt from "bcrypt";

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Swechchha",
    email: "swechchha@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Dimple",
    email: "dimple@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
