const server = require("./api/server.js");
const accountsRouter = require("./api/accounts-router");

const PORT = process.env.PORT || 5000;

server.use('/accounts', accountsRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: 'Something went wrong.'
  });
});

server.listen(PORT, () => {
  console.log(`\n== API running on port ${PORT} ==\n`);
});
