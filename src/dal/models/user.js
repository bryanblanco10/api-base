const { genSaltSync, hashSync } = require("bcryptjs");
const { Model, DataTypes } = require("sequelize");
const USER_TABLE = "users";

const UserSchema = {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false,
  },
  fullname: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "required field" },
      notNull: { msg: "not null field" },
    },
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: "required field" },
      notNull: { msg: "not null field" },
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "required field" },
      notNull: { msg: "not null field" },
    },
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  deleteAt: {
    type: DataTypes.DATE,
  },
};
class User extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      modelName: "User",
      tableName: USER_TABLE,
      timestamps: true,
      hooks: {
        beforeCreate: (user) => {
          const salt = genSaltSync();
          user.password = hashSync(user.password, salt);
        },
      },
    };
  }
}

module.exports = { USER_TABLE, UserSchema, User };
