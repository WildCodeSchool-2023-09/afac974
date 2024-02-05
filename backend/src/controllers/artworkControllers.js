// Import access to database tables
const fs = require("fs");
const tables = require("../tables");

// The B of BREAD - Browse (Read All) operation
const browse = async (req, res, next) => {
  try {
    // Fetch all artwork from the database
    const artwork = await tables.artwork.readAllUserDetails();

    // Respond with the artwork in JSON format
    res.status(200).json(artwork);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const browseUser = async (req, res, next) => {
  try {
    // Fetch all artwork from the database
    const artwork = await tables.artwork.readAllUser();

    // Respond with the artwork in JSON format
    res.status(200).json(artwork);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read = async (req, res, next) => {
  try {
    // Fetch a specific artwork from the database based on the provided ID
    const artwork = await tables.artwork.read(req.params.id);

    // If the artwork is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the artwork in JSON format
    if (artwork == null) {
      res.sendStatus(404);
    } else {
      res.status(200).json(artwork);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The E of BREAD - Edit (Update) operation
// This operation is not yet implemented
const edit = async (req, res, next) => {
  // Extract the artwork data from the request body
  const artwork = req.body;

  try {
    // Insert the artwork into the database
    await tables.artwork.update(artwork, req.params.id);

    // Respond with HTTP 204 (No Content)
    res.sendStatus(204);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add = async (req, res, next) => {
  // Extract the artwork data from the request body
  const artwork = req.file;
  let newArtwork = "";
  if (artwork !== undefined) {
    newArtwork = `${artwork.destination}/${artwork.filename}-${artwork.originalname}`;

    fs.renameSync(`${artwork.destination}/${artwork.filename}`, newArtwork);
  }

  // Ajout de la key idUser qui vaut req.user.id
  req.body.idUser = req.user.id;

  try {
    //   Insert the artwork into the database
    const insertId = await tables.artwork.create(req.body, newArtwork);

    //   Respond with HTTP 201 (Created) and the ID of the newly inserted artwork
    res.status(201).json({ ...req.body, id: insertId });
  } catch (err) {
    //   Pass any errors to the error-handling middleware
    next(err);
  }
};

// The D of BREAD - Destroy (Delete) operation
// This operation is not yet implemented
const destroy = async (req, res, next) => {
  // Extract the artwork data from the request body
  try {
    // Insert the artwork into the database
    await tables.artwork.delete(req.params.id);

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
  browseUser,
  read,
  edit,
  add,
  destroy,
};
