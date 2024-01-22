const Joi = require("joi");

const getArtworkSchema = () => {
  return Joi.object({
    id: Joi.number().presence("required"),
    name: Joi.string().max(50).presence("required"),
    date: Joi.date().presence("required"),
    style: Joi.string().max(50).presence("required"),
    format: Joi.string().max(50).presence("required"),
    certified: Joi.number().presence("required"),
    id_user: Joi.number().presence("optional"),
  });
};

const validateArtwork = (req, res, next) => {
  const schema = getArtworkSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateArtwork;
