import express from "express";
import cors from "cors";
import { fileURLToPath, URL, URLSearchParams } from "url";
import path from "path";
import { MongoClient } from "mongodb";
import got from 'got';
import ky from 'ky';
import jwt from 'jsonwebtoken'

import { encrypt } from "./user.js";



///////// test password

const passwordTest = encrypt("framboise")
console.log('framboise :',passwordTest)

const password2 = encrypt('framboise')
console.log('password2 : ',password2)
///////// fin test password



const url =
  "mongodb+srv://NerVod:MotDePasseMongo@cluster0.aykvr.mongodb.net/bddAjax?retryWrites=true&w=majority";
const dbName = "bddAjax";
const coll = "users";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  port: process.env.PORT || 8010,
  host: process.env.HOST || '127.0.0.1'
}


app.get('/ky', async (req, res, next) => {
    console.log('Route ky appelée')

    let response ;

    try {
        response = await ky.post('https://example.com', {
        json: {
            message: 'appel sur API KY'
        }
        }).json;
    } catch (error) {
            console.log('erreur route ky : ', error)
    }        

    console.log('donnes ky : ', response.json)
    const jsonDonnees = response.json;
    console.log(jsonDonnees)

});


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

app.get("/api", async (req, res, next) => {
  console.log("route api called");
  let result;

  try {
      result = await got.post('https://httpbin.org/anything', {
          json: {
              message: `Appel API n°${Math.ceil(Math.random()*100)} résussi via mon serveur !`
          }
      }).json();
     
  } catch (error) {
      next(error);
  }
  console.log('data :', result.json);
  const jsonData = result.json;
  res.json(jsonData)
});

 
  // commenté pour exo Angular
app.post("/register", (req, res) => {
  console.log('Route /register inbvoquée');
  console.log("Corps de la requête : ", req.body);
  const first = req.body.firstName;
  const last = req.body.lastName;
  const emailSaisi = req.body.email;
  const favouriteJedi = req.body.favouriteJedi;
  const password = encrypt(body.password)
  // const corpsRequete = req.body;
  // const firstName = corps.Requete.prenom;
  // const lastName = corps.Requete.nom;

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
              favouriteJedi: favouriteJedi,
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




// gestion des routes d'erreurs

app.route('*')
  .get((req, res, next) => {
    res.status(404).sendFile(
      'error404.html',
      {
        root: __dirname,
      },
      (err)=> {
        if(err) {
          next(err);
        }
      }
    );
  })
  .post((req, res)=> {
    res.status(403).json({
      error: 'Requête interdite sur cette route !'
    })
  })
  .all((req, res) => {
    res.status(403).json({
      error: 'Requête avec méthode autre que GET ou POST'
    })
  })




app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(req.statusCode).send("something broke !");
});



app.listen(config.port, config.host, () => {
  console.log(`Serveur écoute port 8010`);
});


/*
import crypto from "crypto";

const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

function encrypt(text) {
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return { iv: iv.toString("hex"), encryptedData: encrypted.toString("hex") };
}

function decrypt(text) {
  let iv = Buffer.from(text.iv, "hex");
  let encryptedText = Buffer.from(text.encryptedData, "hex");
  let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(key), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

var hw = encrypt("fraise des bois");
console.log(hw);
console.log(decrypt(hw));
*/






/*   
import bcrypt from "bcrypt";
const saltRounds = 10;
const myPlaintextPassword = "s0//P4$$w0rD";
const someOtherPlaintextPassword = "not_bacon";
const salt = bcrypt.genSaltSync(saltRounds);
const hash = bcrypt.hashSync(myPlaintextPassword, salt);
const hash2 = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log("salt", salt);
console.log("hash", hash);
console.log("hash2", hash2);

const hashPassword = bcrypt.hashSync(password, saltRounds);
            console.log(
              "🚀 ~ file: index.js ~ line 129 ~ db.collection ~ hashPassword",
              hashPassword
            );
            insertUser(firstName, lastName, hashPassword, email);
*/



/////////////////////////

/*
Doc Angular pour requêtes POST avec httpClient : https://angular.io/guide/http#making-a-post-request

Doc intéressante concernant ExpressJS : https://www.tutorialspoint.com/expressjs/expressjs_middleware.htm

Doc intéressante sur les différentes entre les architectures d'application REST et SOAP : https://www.redhat.com/fr/topics/integration/whats-the-difference-between-soap-rest

Lien liveshare: https://prod.liveshare.vsengsaas.visualstudio.com/join?C0EE9BD304D4A1F989F97DA7F8EACE5536B7

JWT explanations : https://jwt.io/introduction
*/