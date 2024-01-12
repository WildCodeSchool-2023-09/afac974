// Import access to database tables
const fs = require("fs");
const jwt = require("jsonwebtoken");

// The B of BREAD - Browse (Read All) operation
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all items from the database
    const users = await tables.user.readAll();

    // Respond with the users in JSON format
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const item = await tables.user.readAll(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the item data from the request body
  const item = req.body;
  let newName = `public/profile/default.png`;

  if (req.file !== undefined) {
    const avatar = req.file;
    newName = `${avatar.destination}/${avatar.filename}-${avatar.originalname}`;

    fs.renameSync(`${avatar.destination}/${avatar.filename}`, newName);
  }

  try {
    // Insert the item into the database
    const insertId = await tables.user.create(item, newName);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted item
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented

// Ready to export the controller functions
// eslint-disable-next-line consistent-return
const createUser = async (req, res, next) => {
  try {
    const isExist = await tables.user.readUserByEmail(req.body.email);

    if (isExist) {
      return res.status(401).json({ error: "user is already exist" });
    }

    /**
     * Pour rappel, dans le modele UserManager:
     *
     * create(user){...}
     *
     * req.body doit FORCÉMENT posseder les cles suivantes :
     * - firstname
     * - lastname
     * - email
     * - password
     * - id_role
     */

    req.body.image = "/profile/default.png";
    const user = await tables.user.create(req.body);
    return res.json({ user });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const token = jwt.sign({ id: req.user.id }, process.env.APP_SECRET);
    const refreshToken = jwt.sign(
      { id: req.user.id },
      process.env.APP_REFRESH_SECRET
    );

    res.cookie("token", token, { httpOnly: true });
    res.cookie("refreshToken", refreshToken, { httpOnly: true });
    res.json({ user: req.user });
  } catch (err) {
    next(err);
  }
};

const generateNewToken = (user) => {
  const token = jwt.sign({ id: user.id }, process.env.APP_SECRET);
  return token;
};
const refresh = async (req, res, next) => {
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.APP_SECRET);
    const user = await tables.user.readUserById(decoded.id);
    delete user.password;

    const newToken = generateNewToken(user);

    res.cookie("token", newToken, { httpOnly: true }).json({ user });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  createUser,
  login,
  refresh,
};
