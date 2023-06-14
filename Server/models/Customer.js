module.exports =(sequelize, DataTypes) =>{

    const Customer = sequelize.define("Customer", {
        customerid: {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },


        firstName: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        lastName: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        email: {
            type:DataTypes.STRING,
            allowNull: false,

        },

        password: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        phoneNumber: {
            type:DataTypes.STRING,
            allowNull: false,
        },

        address: { 
            type:DataTypes.STRING,
            allowNull: false,
        },

        birthday: {
            type:DataTypes.DATEONLY,
            allowNull: false,
        },

        nicNumber: {
            type:DataTypes.STRING,
            allowNull: false,   
        },
        gender: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        occupation: {
            type:DataTypes.STRING,
            allowNull: false,
        },
        
        
});


Customer.associate = (models) => {
    Customer.hasMany(models.Event),
      {
        onDelete: "cascade",
    };
};

return Customer;
};