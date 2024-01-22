// Import access to database tables
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all roles from the database
    const roles = await tables.role.readAll();

    // Respond with the roles in JSON format
    res.status(200).json(roles);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific role from the database based on the provided ID
    const role = await tables.role.read(req.params.id);

    // If the role is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the role in JSON format
    if (role == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(role);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the role data from the request body
  const role = req.body;

  try {
    // Insert the role into the database
    await tables.role.update(role, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the role data from the request body
  const role = req.body;

  try {
    // Insert the role into the database
    const insertId = await tables.role.create(role);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted role
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the role data from the request body
  try {
    // Insert the role into the database
    await tables.role.delete(req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Ready to export the controller functions
module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
