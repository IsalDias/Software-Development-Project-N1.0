module.exports = (sequelize, DataTypes) => {

    const EventTemplate = sequelize.define("EventTemplate", {
      eventTemplateid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      eventTemplateName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventTemplateDescrpt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });

    
 
      EventTemplate.associate = (models) => {

    
      const { Service, ServiceEventTemplate } = models;
      EventTemplate.belongsToMany(Service, { through: ServiceEventTemplate,as: "Service", foreignKey:'eventTemplateid'});
      };
    




  
    return EventTemplate;
  };
  