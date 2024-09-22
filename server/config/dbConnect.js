import mongoose from 'mongoose';



// Manejo del caché de la conexión a la base de datos
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(process.env.MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
    console.log("MongoDB conectado exitosamente");
    return cached.conn;
  } catch (error) {
    console.error("MongoDB coneccion no exitosa:", error);
    throw new Error('Error en conectar MongoDB');
  }
}

export default dbConnect;
