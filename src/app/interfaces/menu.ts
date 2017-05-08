export interface Menu {
  id: number;
  menu_name: string;
  menu_description: string;
  menu_note: string;
  enabled: boolean;
}


export interface MenuGroup {
  id: number;
  menu_group_name: string;
  menu_group_description: string;
  menu_group_note: string;
  enabled: boolean;
}

export interface MenuGroupItem {
  id: number;
  menu_item_name: string;
  menu_item_description: string;
  menu_item_price: number;


  enabled: boolean;


  special: boolean;
  vegetarian: boolean;
  vegan: boolean;
  kosher: boolean;
  halal: boolean;
  gluten_free: boolean;

  menu_item_calories: number;
  menu_item_heat_index: number;

}
export interface MenuGroupOption {
  id: number;
  menu_group_option_name: string
  menu_group_option_info: string;
  enabled: boolean;

}
export interface MenuGroupOptionItem {
  id: number;
  menu_group_option_item_name: string;
  menu_group_option_item_info: string;
  menu_group_option_item_additional_cost: number;
  enabled: boolean;

}


