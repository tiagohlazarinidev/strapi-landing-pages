module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '766f8712e1d9316f72e43cc277d63b14'),
  },
});
