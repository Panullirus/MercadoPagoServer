import { AuthUser } from "../../interfaces/AuthUser";
import { AuthtModel } from "./AuthModels";
import bcrypt from "bcrypt";

export const ComparePassword = async (client: string, stored: string) => {
    try {
        const result = await bcrypt.compare(client, stored);
        return result;
    } catch (error) {
        throw new Error('Error al comparar contraseñas');
    }

}

export const CreateUser = (user: AuthUser) => {

    const saltRounds: number = 14;
    const plaintextPassword = user.password

    bcrypt.hash(plaintextPassword, saltRounds, (err, hash) => {
        if (err) {
            return ({ code: 500, error: err })
        } else {

            const AuthUserInput: AuthUser = {
                name: user.name,
                lastName: user.lastName,
                phone: user.phone,
                password: hash,
                email: user.email
            }

            const AuthUserModelInit = new AuthtModel(AuthUserInput).save().then(res => res);

            return AuthUserModelInit
        }
    })
}

export const DeleteUserById = (id: string) => {
    const AuthUserModelInit = AuthtModel.findByIdAndDelete({ _id: id })

    return AuthUserModelInit
}

export const FindUserByEmail = async (email: string, password: string) => {
    return await AuthtModel.findOne({ email })
}
