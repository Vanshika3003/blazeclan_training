import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class employee extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    empno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    empname: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    designation: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    deptno: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'department',
        key: 'deptno'
      }
    }
  }, {
    sequelize,
    tableName: 'employee',
    schema: 'public',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "employee_pkey",
        unique: true,
        fields: [
          { name: "empno" },
        ]
      },
    ]
  });
  }
}
