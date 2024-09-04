// src/services/userService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userService = {
  getAllUsers: async () => {
    return prisma.dm_users.findMany();
  },
  getUserById: async (id) => {
    return prisma.dm_users.findUnique({ where: { id: parseInt(id) } });
  },
  createUser: async (userData) => {
    return prisma.dm_users.create({ data: userData });
  },
  updateUser: async (id, userData) => {
    return prisma.dm_users.update({ where: { id: parseInt(id) }, data: userData });
  },
  deleteUser: async (id) => {
    return prisma.dm_users.delete({ where: { id: parseInt(id) } });
  },
};

module.exports = userService;

// src/controllers/userController.js
const userService = require('../services/userService');

const userController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching users' });
    }
  },
  getUserById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const user = await userService.getUserById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user' });
    }
  },
  createUser: async (req, res) => {
    try {
      const newUser = await userService.createUser(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ error: 'Error creating user' });
    }
  },
  updateUser: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedUser = await userService.updateUser(id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user' });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await userService.deleteUser(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting user' });
    }
  },
};

module.exports = userController;

// src/routes/userRoutes.js
const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;

// Repeat the same pattern for other models...

// src/services/userLoginService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const userLoginService = {
  getAllUserLogins: async () => {
    return prisma.dm_user_login.findMany();
  },
  getUserLoginById: async (id) => {
    return prisma.dm_user_login.findUnique({ where: { id: parseInt(id) } });
  },
  createUserLogin: async (userLoginData) => {
    return prisma.dm_user_login.create({ data: userLoginData });
  },
  updateUserLogin: async (id, userLoginData) => {
    return prisma.dm_user_login.update({ where: { id: parseInt(id) }, data: userLoginData });
  },
  deleteUserLogin: async (id) => {
    return prisma.dm_user_login.delete({ where: { id: parseInt(id) } });
  },
};

module.exports = userLoginService;

// src/controllers/userLoginController.js
const userLoginService = require('../services/userLoginService');

const userLoginController = {
  getAllUserLogins: async (req, res) => {
    try {
      const userLogins = await userLoginService.getAllUserLogins();
      res.json(userLogins);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user logins' });
    }
  },
  getUserLoginById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const userLogin = await userLoginService.getUserLoginById(id);
      if (userLogin) {
        res.json(userLogin);
      } else {
        res.status(404).json({ error: 'User login not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user login' });
    }
  },
  createUserLogin: async (req, res) => {
    try {
      const newUserLogin = await userLoginService.createUserLogin(req.body);
      res.status(201).json(newUserLogin);
    } catch (error) {
      res.status(500).json({ error: 'Error creating user login' });
    }
  },
  updateUserLogin: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedUserLogin = await userLoginService.updateUserLogin(id, req.body);
      res.json(updatedUserLogin);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user login' });
    }
  },
  deleteUserLogin: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await userLoginService.deleteUserLogin(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting user login' });
    }
  },
};

module.exports = userLoginController;

// src/routes/userLoginRoutes.js
const express = require('express');
const userLoginController = require('../controllers/userLoginController');

const router = express.Router();

router.get('/', userLoginController.getAllUserLogins);
router.get('/:id', userLoginController.getUserLoginById);
router.post('/', userLoginController.createUserLogin);
router.put('/:id', userLoginController.updateUserLogin);
router.delete('/:id', userLoginController.deleteUserLogin);

module.exports = router;

// Continue this pattern for the remaining models...
