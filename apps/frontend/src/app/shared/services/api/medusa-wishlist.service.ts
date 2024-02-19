import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { MedusaCustomer } from '../../interfaces/customer';
import { environment } from 'apps/frontend/src/environments/environment';

export interface IMedusaWishListPostData {
    variant_id: string;
    quantity: number;
    metadata?: any;
}

@Injectable({
    providedIn: 'root'
})
export class MedusaWishListService {

    private http = inject(HttpClient);

    createWishlist(customerId: string, postData: IMedusaWishListPostData) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/customers/${customerId}/wishlist`;

        return this.http.post<MedusaCustomer>(url, postData);
    }

    deleteItemFromWishlist(customerId: string, postData: any) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/customers/${customerId}/wishlist`;

        return this.http.delete(url, postData);
    }

    generateWishlistToken(customerId: string) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/store/customers/${customerId}/wishlist/share-token`;

        return this.http.post<MedusaCustomer>(url, {});
    }

    getWishlistWithToken(token: string) {
        const url = `${environment.MEDUSA_API_BASE_PATH}/wishlists/${token}`;

        return this.http.get<MedusaCustomer>(url);
    }
}
