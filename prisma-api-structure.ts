// src/services/variantService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const variantService = {
  getAllVariants: async () => {
    return prisma.dm_variants.findMany();
  },
  getVariantById: async (id) => {
    return prisma.dm_variants.findUnique({ where: { id: parseInt(id) } });
  },
  createVariant: async (variantData) => {
    return prisma.dm_variants.create({ data: variantData });
  },
  updateVariant: async (id, variantData) => {
    return prisma.dm_variants.update({ where: { id: parseInt(id) }, data: variantData });
  },
  deleteVariant: async (id) => {
    return prisma.dm_variants.delete({ where: { id: parseInt(id) } });
  },
};

module.exports = variantService;

// src/controllers/variantController.js
const variantService = require('../services/variantService');

const variantController = {
  getAllVariants: async (req, res) => {
    try {
      const variants = await variantService.getAllVariants();
      res.json(variants);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching variants' });
    }
  },
  getVariantById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const variant = await variantService.getVariantById(id);
      if (variant) {
        res.json(variant);
      } else {
        res.status(404).json({ error: 'Variant not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching variant' });
    }
  },
  createVariant: async (req, res) => {
    try {
      const newVariant = await variantService.createVariant(req.body);
      res.status(201).json(newVariant);
    } catch (error) {
      res.status(500).json({ error: 'Error creating variant' });
    }
  },
  updateVariant: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedVariant = await variantService.updateVariant(id, req.body);
      res.json(updatedVariant);
    } catch (error) {
      res.status(500).json({ error: 'Error updating variant' });
    }
  },
  deleteVariant: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await variantService.deleteVariant(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting variant' });
    }
  },
};

module.exports = variantController;

// src/routes/variantRoutes.js
const express = require('express');
const variantController = require('../controllers/variantController');

const router = express.Router();

router.get('/', variantController.getAllVariants);
router.get('/:id', variantController.getVariantById);
router.post('/', variantController.createVariant);
router.put('/:id', variantController.updateVariant);
router.delete('/:id', variantController.deleteVariant);

module.exports = router;

// src/services/groupService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const groupService = {
  getAllGroups: async () => {
    return prisma.dm_gruop.findMany();
  },
  getGroupById: async (id) => {
    return prisma.dm_gruop.findUnique({ where: { id: parseInt(id) } });
  },
  createGroup: async (groupData) => {
    return prisma.dm_gruop.create({ data: groupData });
  },
  updateGroup: async (id, groupData) => {
    return prisma.dm_gruop.update({ where: { id: parseInt(id) }, data: groupData });
  },
  deleteGroup: async (id) => {
    return prisma.dm_gruop.delete({ where: { id: parseInt(id) } });
  },
};

module.exports = groupService;

// src/controllers/groupController.js
const groupService = require('../services/groupService');

const groupController = {
  getAllGroups: async (req, res) => {
    try {
      const groups = await groupService.getAllGroups();
      res.json(groups);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching groups' });
    }
  },
  getGroupById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const group = await groupService.getGroupById(id);
      if (group) {
        res.json(group);
      } else {
        res.status(404).json({ error: 'Group not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching group' });
    }
  },
  createGroup: async (req, res) => {
    try {
      const newGroup = await groupService.createGroup(req.body);
      res.status(201).json(newGroup);
    } catch (error) {
      res.status(500).json({ error: 'Error creating group' });
    }
  },
  updateGroup: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedGroup = await groupService.updateGroup(id, req.body);
      res.json(updatedGroup);
    } catch (error) {
      res.status(500).json({ error: 'Error updating group' });
    }
  },
  deleteGroup: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await groupService.deleteGroup(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting group' });
    }
  },
};

module.exports = groupController;

// src/routes/groupRoutes.js
const express = require('express');
const groupController = require('../controllers/groupController');

const router = express.Router();

router.get('/', groupController.getAllGroups);
router.get('/:id', groupController.getGroupById);
router.post('/', groupController.createGroup);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

module.exports = router;

// src/services/productService.js
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const productService = {
  getAllProducts: async () => {
    return prisma.dm_products.findMany();
  },
  getProductById: async (id) => {
    return prisma.dm_products.findUnique({ where: { id: parseInt(id) } });
  },
  createProduct: async (productData) => {
    return prisma.dm_products.create({ data: productData });
  },
  updateProduct: async (id, productData) => {
    return prisma.dm_products.update({ where: { id: parseInt(id) }, data: productData });
  },
  deleteProduct: async (id) => {
    return prisma.dm_products.delete({ where: { id: parseInt(id) } });
  },
};

module.exports = productService;

// src/controllers/productController.js
const productService = require('../services/productService');

const productController = {
  getAllProducts: async (req, res) => {
    try {
      const products = await productService.getAllProducts();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching products' });
    }
  },
  getProductById: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const product = await productService.getProductById(id);
      if (product) {
        res.json(product);
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching product' });
    }
  },
  createProduct: async (req, res) => {
    try {
      const newProduct = await productService.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error creating product' });
    }
  },
  updateProduct: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const updatedProduct = await productService.updateProduct(id, req.body);
      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Error updating product' });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      await productService.deleteProduct(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Error deleting product' });
    }
  },
};

module.exports = productController;

// src/routes/productRoutes.js
const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;

// Update src/app.js to include the new routes
// Add these lines with the other route imports
const variantRoutes = require('./routes/variantRoutes');
const groupRoutes = require('./routes/groupRoutes');
const productRoutes = require('./routes/productRoutes');

// Add these lines where you're using the routes
app.use('/api/variants', variantRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/products', productRoutes);
