import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ICustomerLoginData } from '../../interfaces/types.interfaces';
import { MedusaCart } from '../../interfaces/medusa-cart.interface';
import { MedusaCustomer } from '../../interfaces/customer';
import { Observable } from 'rxjs';
import { RegisterPayload } from '../../interfaces/auth.interface';
import { environment } from 'apps/frontend/src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MedusaService {
    headers = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Access-Control-Allow-Origin', '*');
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
        withCredentials: true,
    };
    private http = inject(HttpClient);

    medusaExists(email: string) {
        return this.http.get(environment.MEDUSA_API_BASE_PATH + '/store/auth/' + email, this.httpOptions);
    }

    loginEmailPassword(email: string, password?: string) {
        const loginReq: ICustomerLoginData = {
            email: email,
            password: email,
        };
        return this.http.post(environment.MEDUSA_API_BASE_PATH + '/store/auth/', loginReq, this.httpOptions);
    }
    createMedusaCustomer(payloadRegister:RegisterPayload) {
        return this.http.post(environment.MEDUSA_API_BASE_PATH + '/store/customers/', payloadRegister);
    }
    getMedusaSession(): Observable<MedusaCustomer> {
        return this.http.get<MedusaCustomer>(environment.MEDUSA_API_BASE_PATH + '/store/auth/');
    }
    getMedusaToken(email: string, password: string): Observable<MedusaCustomer> {
        return this.http.post<MedusaCustomer>(environment.MEDUSA_API_BASE_PATH + '/store/auth/token', {
            "email": email,
            "password": password,
        });
    }
    retrieveMedusaCustomer() {
        return this.http.get(environment.MEDUSA_API_BASE_PATH + '/store/customers/me', this.httpOptions);
    }
    shippingOptions(cartId: string) {
        return this.http.get(`${environment.MEDUSA_API_BASE_PATH}/store/shipping-options/${cartId}`, this.httpOptions);
    }
    addShippingMethod(cartId: string, option_id: string) {
        const data = {
            option_id: option_id
        }
        // console.log(cartId, data);
        return this.http.post(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/shipping-methods`, data, this.httpOptions);
    }
    createPaymentSessions(cartId: string) {
        return this.http.post(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/payment-sessions`, null, this.httpOptions);
    }
    cartsRetrieve(cartId: string) {
        return this.http.get(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}`, this.httpOptions);
    }
    cartsCreate() {
        return this.http.post<MedusaCart>(`${environment.MEDUSA_API_BASE_PATH}/store/carts`, null, this.httpOptions);
    }
    AddCartLineItems(cartId: string, data: { variant_id: string, quantity: number }) {
        return this.http.post<any>(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/line-items/`, data);
    }
    updateCartLineItems(cartId: string, lineId: string, data: any) {
        return this.http.post<any>(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/line-items/${lineId}`, data);
    }
    cartsLineItemsDelete(cartId: string, lineId: string) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/line-items/${lineId}`;
        return this.http.delete<MedusaCart>(url, this.httpOptions);
    }
    cartsUpdate(cartId: string, data: any) {
        return this.http.post<MedusaCart>(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}`, data, this.httpOptions);
    }
    setPaymentSession(cartId: string, provider_id: string) {
        return this.http.post(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/payment-session`, {
            provider_id
        }, this.httpOptions);
    }
    refreshPaymentSession(cartId: string, provider_id: string) {
        return this.http.post(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/payment-sessions/${provider_id}/refresh`, null, this.httpOptions);
    }
    updatePaymentSession(cartId: string, provider_id: string) {
        const data = {}
        return this.http.post(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/payment-sessions/${provider_id}`, data, this.httpOptions);
    }
    completeMedusaCart(cartId: string) {
        return this.http.post(`${environment.MEDUSA_API_BASE_PATH}/store/carts/${cartId}/complete`, null, this.httpOptions);
    }
    medusaProductsList() {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/products`;
        return this.http.get(url, this.httpOptions);
    }
    productsRetrieve(regionId: string) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/products/${regionId}`;
        return this.http.get(url, this.httpOptions);
    }
    regionsList() {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/regions`;
        return this.http.get(url, this.httpOptions);
    }
    regionsRetrieve(regionId: string) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/regions/${regionId}`;
        return this.http.get(url, this.httpOptions);
    }
    ordersRetrieve(orderId: string) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/orders/${orderId}`;
        return this.http.get(url, this.httpOptions);
    }
    addAddress(payload: any) {
        const data = {
            address: {
                first_name: payload?.first_name,
                last_name: payload?.last_name,
                address_1: payload?.address_1,
                city: payload?.city,
                country_code: payload?.country_code,
                postal_code: payload?.postal_code,
                phone: payload?.phone,
                address_2: payload?.address_2,
                province: 'Georgia',
                company: 'Wyman LLC',
                metadata: {}
            }
        }
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/customers/me/addresses`;
        return this.http.post(url, data);
    }
    updateAddress(addressId: string, payload: any) {
        const data = {
            first_name: payload?.first_name,
            last_name: payload?.last_name,
            address_1: payload?.address_1,
            address_2: payload?.address_2,
            city: payload?.city,
            country_code: payload?.country_code,
            postal_code: payload?.postal_code,
            phone: payload?.phone,
        }
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/customers/me/addresses/${addressId}`;
        return this.http.post(url, data);
    }
    deleteAddress(addressId: string) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/customers/me/addresses/${addressId}`;
        return this.http.delete(url);
    }
    medusaLogout() {
        return this.http.delete(environment.MEDUSA_API_BASE_PATH + '/store/auth', this.httpOptions);
    }
}
