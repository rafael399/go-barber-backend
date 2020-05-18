export default {
  jwt: {
    secret: process.env.APP_SECRET || 'empty',
    expiresIn: '7d',
  },
};
