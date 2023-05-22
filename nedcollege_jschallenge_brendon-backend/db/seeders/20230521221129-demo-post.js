'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create blog posts
    await queryInterface.bulkInsert('posts', [
      {
        id: '1',
        image: 'example1.jpg',
        category: 'Technology',
        title: 'First Blog Post',
        author: 'John Doe',
        read_time: 5,
        text: 'This is the first blog post.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: '2',
        image: 'example2.jpg',
        category: 'Travel',
        title: 'Second Blog Post',
        author: 'Jane Smith',
        read_time: 8,
        text: 'This is the second blog post.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the inserted blog posts
    await queryInterface.bulkDelete('posts', null, {})
  },
}
