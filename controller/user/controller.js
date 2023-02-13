const User = require("../../model/User");
exports.registar = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.json({ data: user });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  res.json({ data: req.user });
};

exports.updateDetail = async (req, res, next) => {
  try {
    let user = await User.update(req.body, {
      where: {
        user_id: req.user.user_id,
      },
    });
    user = await User.findByPk(req.user.user_id);
    res.json({ data: user });
  } catch (err) {
    next(err);
  }
};

exports.delteteData = async (req, res, next) => {
  try {
    let user = await User.destroy({
      where: {
        user_id: req.user.user_id,
      },
    });
    res.json({ data: "Data deleted!!" });
  } catch (err) {
    next(err);
  }
};
