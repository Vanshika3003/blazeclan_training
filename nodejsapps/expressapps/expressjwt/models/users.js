import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    username: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "usernameprimarykey",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
    ]
  });
  }
}
