const Joi = require("joi");

const getFavoriteSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    id_user: Joi.number().presence("required"),
    id_artwork: Joi.number().presence("required"),
  });
};

const validateFavorite = (req, res, next) => {
  const schema = getFavoriteSchema();

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

module.exports = validateFavorite;
