"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          title: "Work",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Do some sports",
          important: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Clean my house",
          important: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("todoItems", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
