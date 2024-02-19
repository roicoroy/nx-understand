import { IAuthStateModel } from "./auth/auth.state";
import { ErrosStateModel } from "./error-logging/error-logging.state";
import { ProductsStateModel } from "./products/products.state";

export interface IStoreSnapshoModel {
    products: ProductsStateModel,
    cart: any;
    theme: any;
    auth: IAuthStateModel,
    errorsLogging: ErrosStateModel;
}