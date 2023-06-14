const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = require('./models');

//routers
const CustomerRouter = require('./Routes/Customers');
app.use("/customers", CustomerRouter);

const EventRouter = require('./Routes/Events');
app.use("/events", EventRouter);






db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    });
});
