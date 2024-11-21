const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sjoya:1034776883@cluster0.1ewo7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log("Conexión exitosa a MongoDB Atlas"))
  .catch((error) => console.error("Error de conexión:", error));
