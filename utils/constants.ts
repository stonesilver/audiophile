export const navList = [
  { label: "HOME", href: "/" },
  { label: "HEADPHONES", href: "/headphones" },
  { label: "SPEAKERS", href: "/speakers" },
  { label: "EARPHONES", href: "/earphones" },
];

export const shopSection = [
  {
    img: "/images/headphone.webp",
    label: "HEADPHONE",
    href: "/headphones",
    cln: "!w-[80px] lg:!w-[122px] !h-[140px] lg:!h-[160px]",
  },
  {
    img: "/images/speaker.webp",
    label: "SPEAKER",
    href: "/speakers",
    cln: "!w-[84px] lg:!w-[121px] !h-[101px] lg:!h-[146px]",
  },
  {
    img: "/images/earphone.webp",
    label: "EARPHONE",
    href: "/earphones",
    cln: "!w-[103px] lg:!w-[125px] !h-[104px] lg:!h-[126]",
  },
];

export const dummyCartItems = [
  {
    id: "b074e726-69eb-4cce-ba15-02ac20bc3344",
    name: "XX99 MK II",
    img: "/images/headphone-transparent.webp",
    price: 2999,
    quantity: 1,
  },
  {
    id: "d1f632fd-47b2-4c7e-91fa-0c83ea134298",
    name: "XX59",
    img: "/images/white-headphone.webp",
    price: 899,
    quantity: 2,
  },
  { id: "00e049a7-a187-46da-921b-9df9b3f02481", name: "YX1", img: "/images/earphone.webp", price: 599, quantity: 1 },
];

export const dummyCheckout = [
  { label: "TOTAL", value: "$ 5,396" },
  { label: "SHIPPING", value: "$ 50" },
  { label: "VAT (INCLUDED)", value: "$ 1,079" },
  { label: "GRAND TOTAL", value: "$ 5,446" },
];

export const checkoutFormFields = [
  {
    title: "BILLING DETAILS",
    formFields: [
      { label: "First name", name: "first_name", type: "text", placeholder: "John" },
      { label: "Last name", name: "last_name", type: "text", placeholder: "Doe" },
      { label: "E-mail address", name: "", type: "email", placeholder: "@mail.com" },
      { label: "Phone Number", name: "phone_number", type: "tel", placeholder: "+2347064378577" },
    ],
  },
  {
    title: "SHIPPING INFO",
    formFields: [
      {
        label: "Address",
        name: "address",
        type: "text",
        placeholder: "1137 Williams Avenue",
        className: "col-span-2-md",
      },
      { label: "ZIP Code", name: "zip_code", type: "text", placeholder: "10001" },
      { label: "City", name: "city", type: "text", placeholder: "Lagos" },
      { label: "Country", name: "country", type: "text", placeholder: "Nigeria" },
    ],
  },
  {
    title: "PAYMENT DETAILS",
    formFields: [
      {
        label: "Payment Method",
        name: "e_money_number",
        type: "radio",
        placeholder: "",
        options: [
          { label: "e-Money", value: "e-Money" },
          { label: "Cash on Delivery", value: "Cash on Delivery" },
        ],
      },
      { label: "e-Money Number", name: "e_money_number", type: "text", placeholder: "238521993" },
      { label: "e-Money PIN", name: "e_money_pin", type: "text", placeholder: "﹡﹡﹡﹡" },
    ],
  },
];
