
const users = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

async function getUserById(userId) {
  return users.find(user => user.id === userId);
};

module.exports = { getUserById };