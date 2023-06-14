module.exports =(sequelize, DataTypes) =>{

    const Event = sequelize.define("Event", {

        eventId: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },


        eventName: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        description: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        estimatedBudget: {
            type: DataTypes.DECIMAL(10, 2), // Example: up to 10 digits with 2 decimal places
            allowNull: false,
          },

        eventDate:{
            type:DataTypes.DATEONLY,
            allowNull: false,
        }

      
        
        
});

return Event;
};