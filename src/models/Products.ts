import { DataTypes, Model, NumberDataType, Optional } from 'sequelize'
import sequelizeConnection from '../database/configDatabase';

interface ProductsAttributes {
    id: number,
    title: string,
    price: NumberDataType,
    description: string,
    category: string,
    image: string,
    rating: number
}
export interface ProductstInput extends Optional<ProductsAttributes, 'id'> { }
export interface ProductstOuput extends Required<ProductsAttributes> { }

class Products extends Model<ProductsAttributes, ProductstInput> implements ProductsAttributes {
    public id!: number
    title!: string
    price!: NumberDataType
    description!: string
    category!: string
    image!: string
    rating!: number
}

Products.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT
    },
    category: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING
    },
    rating: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: true,
    modelName: "ecomerce",
    tableName: "products",
    sequelize: sequelizeConnection,
    paranoid: true
})

export default Products