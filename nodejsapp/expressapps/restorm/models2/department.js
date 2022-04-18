import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class department extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    deptno: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deptname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "department_pkey",
        unique: true,
        fields: [
          { name: "deptno" },
        ]
      },
    ]
  });
  }
}
