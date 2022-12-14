//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { getAllPokemon } = require("./src/controllers/getAllPokemons.js");
const { getTypes } = require("./src/controllers/getTypes.js");
const { conn } = require("./src/db.js");
// const app = express();

const port = process.env.PORT || 3001;
// app.get("/", (req, res) => {
//   res.send("La pagina inicio");
// });

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(port, async () => {
    await getTypes();
    await getAllPokemon();
    console.log(`%s listening at ${port}`); // eslint-disable-line no-console
  });
});
