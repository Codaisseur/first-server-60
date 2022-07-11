"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "John Doe",
          email: "j@j.com",
          password: "john123",
          admin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Swen",
          email: "s@s.com",
          password: "swen123",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Karla",
          email: "k@k.com",
          password: "karla123",
          admin: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
