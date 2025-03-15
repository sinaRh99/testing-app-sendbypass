import {
  CreateShippingNeedFormData,
  CreateShoppingNeedFormData,
} from "@/validations/needs";

export const SHIPPING_SHOPPING_TABS = [
  {
    label: "Shipping",
    value: "shipping",
    icon: "delivery",
  },
  {
    label: "Shopping",
    value: "shopping",
    icon: "shopping-bag-remove",
  },
];

export const NEEDS_STATUSES = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Active",
    value: "active",
  },
  {
    label: "History",
    value: "history",
  },
];

export const LOAD_TYPE_SELECT_ITEMS = [
  {
    label: "Document",
    value: "DOCUMENT",
  },
  {
    label: "Cloth",
    value: "CLOTH",
  },
  {
    label: "Food",
    value: "FOOD",
  },
  {
    label: "Electronic Gadget",
    value: "ELECTRONIC_GADGET",
  },
  {
    label: "Other",
    value: "OTHER",
  },
] as const;

export const SHIPPING_FORM_INITIAL_VALUES = {
  productName: "",
  loadType: null,
  dimension: {
    isFlexible: false,
    weight: "",
    width: "",
    length: "",
    height: "",
  },
  images: ["", null, null, null, null],
  origin: null,
  destination: null,
  proposedPrice: "",
  description: "",
  douDate: null,
} satisfies CreateShippingNeedFormData;

export const SHOPPING_FORM_INITIAL_VALUES = {
  ...SHIPPING_FORM_INITIAL_VALUES,
  productLink: "",
  productPrice: "",
} satisfies CreateShoppingNeedFormData;
