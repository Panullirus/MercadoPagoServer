import { PaymentModel } from "./PaymentModels";
import { Payment } from "../../interfaces/Payment";

export const CreatePayment = (product: Payment) => {
    const PaymentModelInit = new PaymentModel(product).save();

    return PaymentModelInit
}

export const GetPayments = () => {
    const PaymentModelInit = PaymentModel.find();

    return PaymentModelInit
}

export const GetPayment = (id: string) => {
    const PaymentModelInit = PaymentModel.findOne({id: id});

    return PaymentModelInit
}