const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '906880266961-4f99hr8ilutvjtjeetju7u93s352tohd.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

passport.use(
    new GoogleStrategy(
        {
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback',
        },
        function (accessToken, refreshToken, profile, done) {
            done(null, profile);
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
