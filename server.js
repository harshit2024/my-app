const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
 
const app = express();
const PORT = process.env.PORT || 3001;


const path = require('path');
const cors = require('cors');

// Use the appropriate port for your server

// Enable CORS for all routes
const corsOptions = {
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

const gitClone = require('git-clone');




 app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
 
// Replace with your GitHub App's client ID and secret
const CLIENT_ID = 'Iv1.41657dd58f814182';
const CLIENT_SECRET = '0502b51f793e120d3ad7c145d03dbbfc7f55cf50';
 
 
 
app.get('/oauth-callback', async (req, res) => {
  const code = req.query.code;
  console.log(code);
 
 
  const access_token = await exchangeCodeForToken(code);
  console.log(access_token);
 
  res.redirect(`http://localhost:3000/welcomePage?token=${access_token}`);
});
async function exchangeCodeForToken(code) {
  const response = await axios.post(
    'https://github.com/login/oauth/access_token',
    {
      code,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    },
    {
      headers: {
        Accept: 'application/json',
      },
    }
  );
  console.log(response);
  return response.data.access_token;
}


app.post('/clone', (req, res) => {
  const repositoryUrl = req.body.repositoryUrl;
  const localPath = path.resolve(__dirname, '..', '..', 'cloned-repositories', 'RestApi');


  console.log(`Cloning repository from ${repositoryUrl} to ${localPath}`);

  gitClone(repositoryUrl, localPath, null, (err) => {
    if (err) {
      console.error('Git clone failed:', err);
      res.status(500).send('Git clone failed');
    } else {
      console.log('Repository cloned successfully.');
      res.send('Repository cloned successfully.');
    }
  });
});

 
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
 