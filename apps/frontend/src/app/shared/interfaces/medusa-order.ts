export interface MedusaOrder {
    id: string;
    status: string;
    fulfillment_status: string;
    payment_status: string;
    display_id: number;
    cart_id: string;
    customer_id: string;
    email: string;
    region_id: string;
    currency_code: string;
    tax_rate: null;
    created_at: Date;
    object: string;
    shipping_total: number;
    discount_total: number;
    tax_total: number;
    refunded_total: number;
    total: number;
    subtotal: number;
    paid_total: number;
    refundable_amount: number;
    gift_card_total: number;
    gift_card_tax_total: number;
    customer: Customer;
    discounts: any[];
    fulfillments: any[];
    items: Item[];
    payments: Payment[];
    region: Region;
    shipping_address: ShippingAddress;
    shipping_methods: ShippingMethod[];
    item_tax_total: number;
    shipping_tax_total: number;
}

export interface Customer {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    email: string;
    first_name: string;
    last_name: string;
    billing_address_id: null;
    phone: null;
    has_account: boolean;
    metadata: CustomerMetadata;
}

export interface CustomerMetadata {
    stripe_id: string;
}

export interface Item {
    id: string;
    created_at: Date;
    updated_at: Date;
    cart_id: string;
    order_id: string;
    swap_id: null;
    claim_order_id: null;
    original_item_id: null;
    order_edit_id: null;
    title: string;
    description: string;
    thumbnail: string;
    is_return: boolean;
    is_giftcard: boolean;
    should_merge: boolean;
    allow_discounts: boolean;
    has_shipping: boolean;
    unit_price: number;
    variant_id: string;
    quantity: number;
    fulfilled_quantity: null;
    returned_quantity: null;
    shipped_quantity: null;
    metadata: DataClass;
    adjustments: any[];
    tax_lines: TaxLine[];
    variant: Variant;
    subtotal: number;
    discount_total: number;
    total: number;
    original_total: number;
    original_tax_total: number;
    tax_total: number;
    raw_discount_total: number;
    refundable: number;
}

export interface DataClass {
}

export interface TaxLine {
    id: string;
    created_at: Date;
    updated_at: Date;
    rate: number;
    name: string;
    code: string;
    metadata: null;
    item_id?: string;
    shipping_method_id?: string;
}

export interface Variant {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    title: string;
    product_id: string;
    sku: null;
    barcode: null;
    ean: null;
    upc: null;
    variant_rank: number;
    inventory_quantity: number;
    allow_backorder: boolean;
    manage_inventory: boolean;
    hs_code: null;
    origin_country: null;
    mid_code: null;
    material: null;
    weight: null;
    length: null;
    height: null;
    width: null;
    metadata: null;
}

export interface Payment {
    id: string;
    created_at: Date;
    updated_at: Date;
    swap_id: null;
    cart_id: string;
    order_id: string;
    amount: number;
    currency_code: string;
    amount_refunded: number;
    provider_id: string;
    data: PaymentData;
    captured_at: null;
    canceled_at: null;
    metadata: null;
    idempotency_key: null;
}

export interface PaymentData {
    id: string;
    amount: number;
    object: string;
    review: null;
    source: null;
    status: string;
    created: number;
    invoice: null;
    currency: string;
    customer: string;
    livemode: boolean;
    metadata: DataMetadata;
    shipping: null;
    processing: null;
    application: null;
    canceled_at: null;
    description: null;
    next_action: null;
    on_behalf_of: null;
    client_secret: string;
    latest_charge: string;
    receipt_email: null;
    transfer_data: null;
    amount_details: AmountDetails;
    capture_method: string;
    payment_method: string;
    transfer_group: null;
    amount_received: number;
    amount_capturable: number;
    last_payment_error: null;
    setup_future_usage: null;
    cancellation_reason: null;
    confirmation_method: string;
    payment_method_types: string[];
    statement_descriptor: null;
    application_fee_amount: null;
    payment_method_options: PaymentMethodOptions;
    automatic_payment_methods: null;
    statement_descriptor_suffix: null;
    payment_method_configuration_details: null;
}

export interface AmountDetails {
    tip: DataClass;
}

export interface DataMetadata {
    resource_id: string;
}

export interface PaymentMethodOptions {
    card: Card;
}

export interface Card {
    network: null;
    installments: null;
    mandate_options: null;
    request_three_d_secure: string;
}

export interface Region {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    name: string;
    currency_code: string;
    tax_rate: number;
    tax_code: null;
    gift_cards_taxable: boolean;
    automatic_taxes: boolean;
    tax_provider_id: null;
    metadata: DataClass;
}

export interface ShippingAddress {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    customer_id: null;
    company: null;
    first_name: string;
    last_name: string;
    address_1: string;
    address_2: string;
    city: string;
    country_code: string;
    province: null;
    postal_code: string;
    phone: string;
    metadata: null;
}

export interface ShippingMethod {
    id: string;
    shipping_option_id: string;
    order_id: string;
    claim_order_id: null;
    cart_id: string;
    swap_id: null;
    return_id: null;
    price: number;
    data: DataClass;
    shipping_option: ShippingOption;
    tax_lines: TaxLine[];
    original_total: number;
    total: number;
    subtotal: number;
    original_tax_total: number;
    tax_total: number;
}

export interface ShippingOption {
    id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: null;
    name: string;
    region_id: string;
    profile_id: string;
    provider_id: string;
    price_type: string;
    amount: number;
    is_return: boolean;
    admin_only: boolean;
    data: ShippingOptionData;
    metadata: null;
}

export interface ShippingOptionData {
    id: string;
}
