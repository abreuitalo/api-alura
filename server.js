import dotenv from "dotenv";
import routes from "./src/routes/postsRoutes.js";
import express from "express";
const app = express();

app.use(express.static("uploads"));
dotenv.config();
routes(app);

// const posts = [
//   {
//     id: 1,
//     descricao: "Uma foto teste",
//     imagem: "https://placecats.com/millie/300/150",
//   },
//   {
//     id: 2,
//     descricao: "Uma bela paisagem da Toscana",
//     imagem: "https://placecats.com/millie/300/150",
//   },
//   {
//     id: 3,
//     descricao: "Um delicioso prato de sushi",
//     imagem: "https://placecats.com/millie/300/150",
//   },
// ];

app.listen(3000, () => {
  console.log("Servidor escutando...");
});
