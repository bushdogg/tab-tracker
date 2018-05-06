console.log('hello bush');
const express = require('express');
const bosyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models')
const config = require('./config/config')
const app = express();
app.use(morgan('combine'));
app.use(bosyParser.json());
app.use(cors());

require('./routes')(app)

sequelize.sync()
  .then(() => {
    app.listen(config.port || 8081);
    console.log(`server started on ${config.port}`)
  })
