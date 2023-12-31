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

const ServiceRouter = require('./Routes/Admin_Add_Services');
app.use("/addservices", ServiceRouter)

const EvntTmpltRouter = require('./Routes/EventTemplates');
app.use("/evnttmplt", EvntTmpltRouter)

const SlctEvntTmpltRouter = require('./Routes/Customer_selectEventTemplate');
app.use("/evntTmplt", SlctEvntTmpltRouter)

const SlctServicesNames = require('./Routes/Get_Services_names');
app.use("/gtservicenames", SlctServicesNames)

const ServicesNames = require('./Routes/Admin_createEvents_EventstemplateService');
app.use("/pstevnttmpltservices", ServicesNames)




const ServiceDetails = require('./Routes/Admin_GetserviceID');
app.use("/secervisdetails", ServiceDetails)









db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log('Server running on port 3001');
    });
});
