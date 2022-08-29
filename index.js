const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;
// app.get(ROUTES NAME, FUNCTION)


app.get("/", function(req, res){
  res.json({
    status: "success",
    payload: { 
      name: req.body.name,
    }
  })
})


app.get("/students", function(req, res){
  res.json({
    status: "success",
    payload: { 
      student: { 
        name: ["Ayomide", "Moyosoore"]
      }
    }
  })
})

app.get("/*", function(req, res){
  res.json({
    status: "failed",
    payload: { 
      message: "Route not found"
    }
  })
})

const startServer = async () => {
  try {
    app.listen(PORT);
    console.log(`Server Started on Port ${PORT}`);
  } catch (error) {
    console.log(error)
  }
}


startServer();



