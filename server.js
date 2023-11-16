import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import cacheData from './data/loadData.js';
import Database from "@replit/database";
const db = new Database();
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(compression());
app.use(express.static(process.cwd() + '/public', {
  setHeaders: (res) => {
    res.set('Cache-control', 'public, max-age=21600');
  }
}));
app.use(express.static(process.cwd() + '/react-ui/dist'));
app.use(express.static(process.cwd() + '/react-ui/public'));

app.route('/')
  .get((req, res) => res.sendFile(process.cwd() + '/react-ui/dist/index.html'));

app.route('/data/:dataType')
  .get((req, res) => {
    res.set('Cache-control', 'public, max-age=600');
    res.json(cacheData[req.params.dataType]);
  })

app.route('/rating')
  .post((req, res) => {
    let { material, estrelas, comentario } = req.body;

    db.set(String(Date.now()), { material, estrelas, comentario });
  });

/* app.route(process.env.GET_COMMENTS_ROUTE)
  .get(async (req, res) => {
    let comments = [];

    let keys = await db.list();

    for (let key of keys) {
      let value = await db.get(key);
      comments.push(value);
    }
    res.json(comments);
  }); */

app.listen(port, () => console.log(`App listening on port ${port}.`));