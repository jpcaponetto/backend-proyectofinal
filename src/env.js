export const envi = {
  mode: process.env.MODE,
  port: process.env.PORT,
  host: process.env.HOST,
  env: process.env.ENVIROMENT,
  mongo: {
    dbname: process.env.DBNAME,
    user: process.env.USERDB,
    password: process.env.PASSWORDDB,
    cluster: process.env.CLUSTER,
    uri: `mongodb+srv://${process.env.USERDB}:${process.env.PASSWORDDB}@${process.env.cluster}/${process.env.DBNAME}?retryWrites=true&w=majority`,
  },
  cookie: {
    secret: process.env.SECRET,
    options: {
      age: process.env.AGE,
      firma: process.env.FIRMA,
      httpOnly: process.env.HTTPONLY,
    },
  },
  jwt: {
    secret: process.env.SECRET,
    expire: process.env.EXPIRE,
  },
  mail: {
    user: process.env.USER,
    pass: process.env.PASS,
    port: process.env.PORT,
  },
};
