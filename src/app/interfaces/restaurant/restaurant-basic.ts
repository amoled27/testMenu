export interface AcceptedCurrencyType {
  id: number;
  type_name: string;
}

export interface AmenityType {
  id: number;
  type_name: string;
}

export interface CategoryType {
  id: number;
  type_name: string;
}

export interface CuisineType {
  id: number;
  type_name: string;
}

export interface PaymentOptionType {
  id: number;
  type_name: string;
}

export interface SeatingType {
  id: number;
  type_name: string;
}

export interface RestaurantObject {
  id: number;
  name: string;
  brief_description?: any;
  full_description?: any;
  business_type?: any;
  establishment_type?: any;
  average_cost_for_two?: any;
  price_range?: any;
  default_currency?: any;
  temporary_closed?: any;
  accepted_currency_types: AcceptedCurrencyType[];
  amenity_types: AmenityType[];
  category_types: CategoryType[];
  cuisine_types: CuisineType[];
  environment_types: any[];
  payment_option_types: PaymentOptionType[];
  seating_types: SeatingType[];
  menus: any[];
}



