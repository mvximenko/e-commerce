const express = require('express');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

const app = express();
const port = process.env.PORT || 5000;

app.use(compression());
app.use(enforce.HTTPS({ trustProtoHeader: true }));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});