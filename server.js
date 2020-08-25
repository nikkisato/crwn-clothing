const express = require('express');

const path = require('path');
const enforce = require('express-sslify');

const app = express();

app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// const express = require('express');
// const path = require('path');
// const enforce = require('express-sslify');

// const app = express();
// app.use(enforce.HTTPS({ trustProtoHeader: true }));

// app.length('/service-worker.js', (req, res) => {
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
// });
