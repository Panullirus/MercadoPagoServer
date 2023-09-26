import { Product } from "../../interfaces/Product";
import { ProductModel } from "./ProductModel";


export const GetProductos = () => {
    const ProductModelInit = ProductModel.find();

    return ProductModelInit
}

export const CreateProduct = (product: Product) => {
    const ProductModelInit = new ProductModel(product).save();

    return ProductModelInit
}

export const DeleteUserById = (id: string) => {
    const ProductModelInit = ProductModel.findByIdAndDelete({ _id: id })

    return ProductModelInit
}

export const UpdateUserById = (id: string, product: Product) => {
    const ProductModelInit = ProductModel.findByIdAndUpdate(id, product)

    return ProductModelInit
}
