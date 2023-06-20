module.exports =(sequelize, DataTypes) =>{

    const Service = sequelize.define("Service", {

        serviceId: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },


        serviceName: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        serviceDescription: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        
});



Service.associate = (models) => {

    
    const { EventTemplate, ServiceEventTemplate } = models;
    Service.belongsToMany(EventTemplate, { through: ServiceEventTemplate,as: "EventTemplate", foreignKey:'serviceId'});

};


return Service;
};