module.exports =(sequelize, DataTypes) =>{

    const Event = sequelize.define("Event", {

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

return Service;
};