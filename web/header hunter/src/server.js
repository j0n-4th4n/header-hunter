import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


const CATS = [
  "429",
  "305",
  "400",
  "200",
  "496",
  "451",
  "523",
  "214",
  "203",
  "208",
  "415",
  "102",
  "421",
  "431",
  "501",
  "503",
  "407",
  "408",
  "504",
  "302",
  "444",
  "450",
  "425",
  "402",
  "525",
  "507",
  "301",
  "498",
  "509",
  "522",
  "424",
  "307",
  "511",
  "418",
  "416",
  "419",
  "205",
  "500",
  "423",
  "506",
  "405",
  "510",
  "100",
  "411",
  "417",
  "495",
  "422",
  "406",
  "426",
  "414",
  "420",
  "404",
  "413",
  "206",
  "412",
  "530",
  "101",
  "428",
  "409",
  "202",
  "502",
  "521",
  "599",
  "300",
  "308",
  "103",
  "508",
  "226",
  "497",
  "401",
  "403",
  "207",
  "204",
  "410",
  "304",
  "201",
]

// Secret flag route with redirection
app.get('/secret-path', (req, res) => {
  const status = CATS[Math.floor(Math.random() * CATS.length)]
  res.setHeader('X-CTF-Flag', 'PWNME{st4tus_c0d3_2600_fl4g_f0und}');
  res.redirect('/status/' + status + ".jpg");
});



// Decoy routes(parseInt(status)
const decoyRoutes = [
  '/not-here',
  '/try-again',
  '/keep-looking',
  '/almost-there',
  '/getting-warmer',
  '/cold-as-ice'
];

decoyRoutes.forEach(route => {
  app.get(route, (req, res) => {
    const status = CATS[Math.floor(Math.random() * CATS.length)]
    res.redirect('/status/' + status + ".jpg");
  });
});


// Secret flag route with redirection
app.get('/flag', (req, res) => {
  res.redirect('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});



// Serve static files from dist after building with Vite
app.use(express.static('dist'));
// Handle all other routes by serving index.html from dist
app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'dist', 'index.html'));
});



app.listen(port, () => {
  console.log(`CTF challenge running at http://localhost:${port}`);
});