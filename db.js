//1. Importieren
const { Pool } = require("pg");

const connectionString = process.env.PG_CONNECTIONSTRING;

//2. konfigurieren & pool Instanz erstellen
const pool = new Pool({
  //   user: "dfltrrbp",
  //   host: "kandula.db.elephantsql.com",
  //   database: "dfltrrbp",
  //   password: "5XObKTkAEtR4iwT2UITiAET2GW-7epDO",
  //   port: 5432,
  connectionString,
  //Alternativ:
  //connectionString : nameOfConstant
});

//3. exportieren
module.exports = pool;
