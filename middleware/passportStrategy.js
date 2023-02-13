const LocalStrategy = require("passport-local");
const User = require("../model/User");
const bcrypt = require("bcrypt");

exports.initializingPassport = (passport) => {
  async function matchPassword(enterPassword, password) {
    const ans = await bcrypt.compare(enterPassword, password);
    console.log(ans);
    return ans;
  }
  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username });
        const user1 = user;
        if (!user) return done(null, false);
        //console.log(user.password);

        if (!matchPassword(password, user.password)) return done(null, false);
        //console.log(user1);
        return done(null, user1);
      } catch (error) {
        return done(error, false);
      }
    })
  );
  passport.serializeUser((user, done) => {
    console.log("serializeUser");
    done(null, user.user_id);
  });
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (error) {
      done(error, false);
    }
  });
};
