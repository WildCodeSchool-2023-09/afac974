const fs = require("fs");
const jwt = require("jsonwebtoken");

const tables = require("../tables");

const browse = async (req, res, next) => {
  try {
    const items = await tables.user.readAll();

    res.json(items);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const item = await tables.user.readAll(req.params.id);
    if (item == null) {
      res.sendStatus(404);
    } else {
      res.json(item);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const item = req.body;
  let newName = `public/uploads/dafault.jpg`;

  if (req.file !== undefined) {
    const avatar = req.file;
    newName = `${avatar.destination}/${avatar.filename}-${avatar.originalname}`;

    fs.renameSync(`${avatar.destination}/${avatar.filename}`, newName);
  }

  try {
    const insertId = await tables.user.create(item, newName);

    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

// eslint-disable-next-line consistent-return
const createUser = async (req, res, next) => {
  try {
    const isExist = await tables.user.readUserByEmail(req.body.email);

    if (isExist) {
      return res.status(401).json({ error: "user is already exist" });
    }

    const user = await tables.user.create(req.body, null);
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
