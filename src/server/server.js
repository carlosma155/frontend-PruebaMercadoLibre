import express from 'express';
import config  from './config';

const app = express();
const { port, env } = config

if(env === "development") {
    console.log('Development config')
}

app.get('*', (req, res) => {
  res.send({ hello: 'express' });
});

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Server running on port ${port}`);
});