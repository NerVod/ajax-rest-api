import express from "express";
import cors from "cors";
import { fileURLToPath, URL, URLSearchParams } from "url";
import path from "path";
import { MongoClient } from "mongodb";

const url =
  "mongodb+srv://NerVod:MotDePasseMongo@cluster0.aykvr.mongodb.net/bddAjax?retryWrites=true&w=majority";
const dbName = "bddAjax";
const coll = "users";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/js", express.static(path.join(__dirname, "public", "js")));

app.get("/", (req, res, next) => {
  res.sendFile(
    "index.html",
    {
      root: __dirname,
    },
    (err) => {
      if (err) {
        next(err);
      } else {
        console.log("Fichier envoyé");
      }
    }
  );
});

app.get("/api", (req, res) => {
  console.log("route api called");
  res.json({
    message: "Requête bien reçue",
  });
});

app.post("/register", (req, res) => {
  console.log("Corps de la requête : ", req.body);
  const first = req.body.firstName;
  const last = req.body.lastName;
  const emailSaisi = req.body.email;

  res.send(
    `Données du formulaire bien reçues ! Bienvenue sur le site ${first} ${last} !`
  );

  MongoClient.connect(url, function (err, client) {
    // console.log("connecté à MongoDB");
    const db = client.db(dbName);
    const collection = db.collection(coll);

    collection.findOne({ email: emailSaisi }, (err, document) => {
      console.log("étape un");
      if (err) {
        console.log("erreur : ", err);
        client.close();
      } else {
        if (!document) {
          console.log("étape deux");
          collection.insertOne(
            {
              prenom: first,
              nom: last,
              email: emailSaisi,
            },
            (err, document) => {
              console.log("étape trois");
              console.log(document);
              client.close();
            }
          );
        } else {
          console.log("Un compte existe déjà sur cet email ");
        }
        // console.log("document :", document);
        console.log("étape finale");
      }
      console.log("email saisi : ", emailSaisi);
      //   Il y avait ici un client.close() qui s'exécutait avant la fin du travail de la callback de insertOne, ce qui entraînait l'erreur que tu avais...
      //   Tu faisais un client.close() au niveau de mon console.log "étape finale"
    });
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("something broke !");
});

app.listen(8010, "127.0.0.1", () => {
  console.log(`Serveur écoute port 8010`);
});
