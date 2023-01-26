export interface ProductType {
  id?: number;
  product_name?: string;
  product_image?: string;
  description?: string;
  qty?: number;
  price?: number;
  important_info?: string;
  onClick?: () => void;
}
