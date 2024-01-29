// Import access to database tables
const fs = require("fs");
const jwt = require("jsonwebtoken");

// The B of BREAD - Browse (Read All) operation
const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    // Fetch all users from the database
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
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.readUserById(req.params.id);

    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      delete user.password;
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await tables.user.update(id, req.body);
    console.info(result);

    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json({ message: "User updated successfully" });
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const editRole = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await tables.user.updateRole(id, req.body);

    if (result == null) {
      res.sendStatus(404);
    } else {
      res.json({ message: "User updated successfully" });
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the user data from the request body
  const user = req.body;
  let newName = `public/profile/default.png`;

  if (req.file !== undefined) {
    const avatar = req.file;
    newName = `${avatar.destination}/${avatar.filename}-${avatar.originalname}`;

    fs.renameSync(`${avatar.destination}/${avatar.filename}`, newName);
  }

  try {
    // Insert the user into the database
    const insertId = await tables.user.create(user, newName);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted user
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided ID
    const user = await tables.user.delete(req.params.id);
    console.info(user);
    // If the user is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the user in JSON format
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json({ message: "user delete" });
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
// Ready to export the controller functions
// eslint-disable-next-line consistent-return
const createUser = async (req, res, next) => {
  try {
    const isExist = await tables.user.readUserByEmail(req.body.email);

    if (isExist) {
      return res.status(401).json({ error: "user is already exist" });
    }

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

const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");
    res.clearCookie("refreshToken");
    res.end();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  browse,
  read,
  edit,
  editRole,
  add,
  destroy,
  createUser,
  login,
  refresh,
  logout,
};
