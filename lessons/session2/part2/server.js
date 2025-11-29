import express from "express";

let app = express();

app.get("/movies/animation", (req, res) => {
    console.log("/slb called")
    res.send("Olá Express!");                           // Resposta: "Olá Express!" 
});

function f1(req, rsp, next) {
    console.log("F1 was called")
    //next()
    rsp.send("Response ended here")
}

app.get("/movies/animation/:movieId/actors/:actorId", 
  f1,  
  (req, res) => {
    console.log("last mw was called also")
    const id = req.params.movieId;
    const id2 = req.params.actorId
    const a = req.query.a
    const b = req.query.b
    /* obtém item por ID */res.json(
      { id,
        id2,
        a,
        b,   
      nome: "Item exemplo1" });
  });

const PORT = 1904

app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`); // Mensagem na consola
});
