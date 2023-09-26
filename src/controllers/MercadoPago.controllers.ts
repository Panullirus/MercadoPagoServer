import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { Payment } from "../interfaces/Payment";
import { CreatePayment } from "../mongodb/Payments/PaymentControllers";

export class MercadoPago {

    constructor(accessToken: string) {
        mercadopago.configure({
            access_token: accessToken
        })
    }

    VeryfyPaymentStatus(payment: Payment, mercadoPagoAPI: any) {
        return mercadopago.payment.capture(Number(payment), mercadoPagoAPI)
    }

    VeryfyPaymentStatusAndSave(payment: Payment, mercadoPagoAPI: any) {
        mercadopago.payment.capture(Number(payment.data.id), mercadoPagoAPI).then(response => {
            console.log("desde verificar => ", payment)

            CreatePayment(payment).then(res => res);
        })
    }

    CreatePreference(items: any) {

        try {
            const preference: CreatePreferencePayload = {
                items: [
                    {
                        title: items?.title,
                        unit_price: items?.price,
                        quantity: 1
                    }
                ],
                notification_url: "https://0c1b-187-155-251-9.ngrok.io/NotificationPayment"
            }

            return mercadopago.preferences.create(preference)

        } catch (error) {
            console.log("Error en creación de preferencia => ", error)
        }

    }
}