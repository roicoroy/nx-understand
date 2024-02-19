export interface MedusaSavedItem {
    variant_id?: string,
    quantity?: any,
    amount?: number,
    thumbnail?: string,
    title?: string,
}

export interface MedusaProductVariant {
    id: string;
    created_at: string;
    updated_at: string;
    deleted_at?: null;
    currency_code: string;
    amount: number;
    min_quantity?: null;
    max_quantity?: null;
    price_list_id?: null;
    region_id?: null;
    price_list?: null;
    variant_id: string;
}


export interface MedusaCategory {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    description: string;
    handle: string;
    parent_category_id?: null;
    rank: number;
    metadata: Metadata;
    category_children?: (null)[] | null;
    parent_category?: null;
}
export interface Metadata {
}

export interface ICustomer {
    billing_address_id?: any;
    created_at?: any;
    deleted_at?: any;
    email?: any;
    first_name?: any;
    has_account?: any;
    id?: any;
    last_name?: any;
    metadata?: any;
    orders?: any;
    phone?: any;
    updated_at?: any;
}

export interface IStrapiRegisterData {
    username?: string;
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: any;
    phone?: number;
}

export interface ICustomerRegisterData {
    first_name?: string;
    last_name?: string;
    email?: string;
    password?: any;
    phone?: number;
}

export interface ICustomer {
    billing_address_id?: any;
    created_at?: any;
    deleted_at?: any;
    email?: any;
    first_name?: any;
    has_account?: any;
    id?: any;
    last_name?: any;
    metadata?: any;
    orders?: any;
    phone?: any;
    updated_at?: any;
}

// export interface IRegisterAddress {
//     id: string;
//     created_at: string;
//     updated_at: string;
//     deleted_at?: any;
//     customer_id: string;
//     company: string;
//     first_name: string;
//     last_name: string;
//     address_1: string;
//     address_2?: any;
//     city: string;
//     country_code: string;
//     province?: null;
//     postal_code: string;
//     phone: string;
//     metadata?: any;
// }

export interface ICustomerLoginData {
    email: string | any;
    password: string | any;
}
export interface IStrapiLoginData {
    identifier: string | any;
    password: any | any;
}
export interface AppStateModel {
    authState?: any;
    formsState?: any;
    languageState?: any;
    medusaState?: any;
}

export type AppAuthRoutes = {
    login?: string;
    logout?: string;
    register?: string;
    requestPassword?: string;
    resetPassword?: string;
    loginRedirect?: string;
    logoutRedirect?: string;
    requestPasswordRedirect?: string;
    profile?: string;
};

export const authFlow = 'auth/';

export const AUTH_ROUTES: AppAuthRoutes = {
    login: 'login',
    logout: 'logout',
    register: 'register',
    requestPassword: 'request-password',
    resetPassword: 'reset-password',
    loginRedirect: '/',
    logoutRedirect: 'login',
    requestPasswordRedirect: 'login',
    profile: '/profile'
};

export interface ISelectedProduct {
    title: null,
    description: null,
    thumbnail: null,
    price: null,
    size: null,
}
export interface ICartItem {
    quantity: any,
    variant: any,
    selectedProduct: any,
    thumbnail: any,
}