app.get("/", (req, res) =>{
  res.send("Hola express API / get automatico");
});

app.post("/", (req, res) =>{
  res.send("Hola express API/ post");
});

//query params
app.get("/saludar", (req, res) =>{
  const nombre = req.query.nombre;
  res.send("Hola " + nombre);
});

//datos mediante cuerpo de peticion, body
app.post("/saludarPost", (req, res) =>{
  const nombre = req.body.nombre;
  const edad = req.body.edad;

  res.send("Hola " + nombre + " tienes "+ edad + " años.");
});

//params
app.get("/saludarParams/:nombre/:edad", (req, res) =>{
  const nombre = req.params.nombre;
  const edad = req.params.edad;
  res.send("Hola " + nombre + " tienes "+ edad + " años.");
});
