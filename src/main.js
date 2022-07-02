const app = require("./server");
// const args = require("../yargs/yargs");
// const PORT = args.port || 8080; //Puerto desde yargs

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on("error", (error) => {
  console.log(`Error en el servidor ${error}`);
});
