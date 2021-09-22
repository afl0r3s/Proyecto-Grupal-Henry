// Products
const GET_PRODUCTS = "GET_PRODUCTS";
const GET_PRODUCTS_BY_NAME = "GET_PRODUCTS_BY_NAME";
const GET_PRODUCTS_BY_ID = "GET_PRODUCTS_BY_ID";
const POST_PRODUCT = "POST_PRODUCT";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const UPDATE_PRODUCT = "UPDATE_PRODUCT";

const STATUS_CHANGE = "STATUS_CHANGE";

// Categories
const GET_CATEGORIES = "GET_CATEGORIES";
const GET_CATEGORIES_BY_NAME = "GET_CATEGORIES_BY_NAME";
const GET_CATEGORY_DETAILS = "GET_CATEGORY_DETAILS";
const POST_CATEGORY = "POST_CATEGORY";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const UPDATE_CATEGORY = "UPDATE_CATEGORY";

// Filter
const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
const FILTER_BY_PRICE_RANGE = "FILTER_BY_PRICE_RANGE";

// Order
const ORDER_BY_PRICE = "ORDER_BY_PRICE";

// Orders
const GET_CART_FROM_USER = "GET_CART_FROM_USER";
const UPDATE_USER_CART = "UPDATE_USER_CART";

// Email
const SEND_HELP_EMAIL = "SEND_HELP_EMAIL";
const SEND_REGISTER_EMAIL = "SEND_REGISTER_EMAIL";
const SEND_PAYMENT_EMAIL = "SEND_PAYMENT_EMAIL";

// Users
const GET_USERS = "GET_USERS";
const DELETE_USERS = "DELETE_USERS";


const TYPES = {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCTS_BY_ID,
  POST_PRODUCT,
  DELETE_PRODUCT,
  UPDATE_PRODUCT,
  POST_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORIES_BY_NAME,
  GET_CATEGORY_DETAILS,
  DELETE_CATEGORY,
  UPDATE_CATEGORY,
  ORDER_BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE_RANGE,
  SEND_HELP_EMAIL,
  SEND_REGISTER_EMAIL,
  SEND_PAYMENT_EMAIL,
  GET_CART_FROM_USER,
  UPDATE_USER_CART,
  STATUS_CHANGE,
  GET_USERS,
  DELETE_USERS,
};

export default TYPES;
