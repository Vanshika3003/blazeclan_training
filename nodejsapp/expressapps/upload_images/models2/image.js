import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class image extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    imagelink: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'image',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "image_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
