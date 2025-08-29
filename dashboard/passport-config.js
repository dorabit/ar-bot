const localStrategy = require('passport-local').Strategy;

module.exports = function (Passport, db, bcrypt) {
	Passport.serializeUser((user, done) => {
		done(null, user.email);
	});

	Passport.deserializeUser(async (email, done) => {
		const user = await db.get(email);
		done(null, user);
	});

	Passport.use(new localStrategy({
		usernameField: "email",   // عدلتها عشان تتوافق مع قاعدة البيانات
		passwordField: "password",
		passReqToCallback: true
	}, async function (req, email, password, done) {
		const user = await db.get(email);
		if (!user)
			return done(null, false, { message: "البريد الإلكتروني غير موجود ❌" });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return done(null, false, { message: "البريد الإلكتروني أو كلمة المرور غير صحيحة 🚫" });

		const remember = req.body.remember;
		if (remember)
			req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // 30 يوم
		else
			req.session.cookie.expires = false;

		return done(null, user);
	}));
};
