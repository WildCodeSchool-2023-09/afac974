const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/uploads" });
const router = express.Router();

const favoriteControllers = require("./controllers/favoriteControllers");
const validateFavorite = require("./validators/validateFavorite");

router.get("/favorites", favoriteControllers.browse);
router.get("/favorites/:id", favoriteControllers.read);
router.post("/favorites", validateFavorite, favoriteControllers.add);
// router.put("/favorites/:id", validateFavorite, favoriteControllers.edit);
// router.delete("/favorites/:id", favoriteControllers.destroy);

const artworkControllers = require("./controllers/artworkControllers");
// const validateArtwork = require("./validators/validateArtwork");

router.get("/artworks", artworkControllers.browse);
router.get("/artworks/:id", artworkControllers.read);
router.post("/artworks", artworkControllers.add);
// router.put("/artworks/:id", validateArtwork, artworkControllers.edit);
// router.delete("/artworks/:id", artworkControllers.destroy);

const roleControllers = require("./controllers/roleControllers");
// const validateRole = require("./validators/validateRole");

router.get("/roles", roleControllers.browse);
router.get("/roles/:id", roleControllers.read);
// router.post("/roles", validateRole, roleControllers.add);
// router.put("/roles/:id", validateRole, roleControllers.edit);
// router.delete("/roles/:id", roleControllers.destroy);

const { hashPwd, verifyPwd } = require("./services/argon");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userController = require("./controllers/userControllers");
const { verifyToken } = require("./services/jwt");

// Route to get a list of items
router.get("/users", userController.browse);

// Route to get a specific item by ID
router.get("/users/:id", userController.read);

// Route to add a new item
router.post("/users", upload.single("avatar"), verifyToken, userController.add);

router.post("/register", hashPwd, userController.createUser);
router.post("/login", verifyPwd, userController.login);

router.put(
  "/users/:id",
  upload.single("avatar"),
  // verifyToken,
  userController.edit
);
router.delete("/users/:id", userController.destroy);

router.get("/refresh", userController.refresh);

/* ************************************************************************* */

module.exports = router;
