const validIdMock = {
  data: {
    id: "MLB1642157248",
    site_id: "MLB",
    title: "Kit 3 Camisas Polo G1 Ao G6 Plus Size Tamanho Especial",
    seller_id: 587567108,
    category_id: "MLB31447",
    official_store_id: null,
    price: 158.00,
    base_price: 158.01,
    original_price: 169.9,
    currency_id: "BRL",
    sold_quantity: 905,
    buying_mode: "buy_it_now",
    condition: "new",
    pictures: [
      {
        id: "653056-MLB45305109765_032021",
        url: "http://http2.mlstatic.com/D_653056-MLB45305109765_032021-O.jpg",
        secure_url: "https://http2.mlstatic.com/D_653056-MLB45305109765_032021-O.jpg",
        size: "500x352",
        max_size: "1200x845",
        quality: ""
      }
    ],
    shipping: {
      mode: "me2",
      free_methods: [
        {
          id: 100009,
          rule: {
            default: true,
            free_mode: "country",
            free_shipping_flag: true,
            value: null
          }
        }
      ],
      tags: [
        "mandatory_free_shipping"
      ],
      dimensions: null,
      local_pick_up: false,
      free_shipping: true,
      logistic_type: "cross_docking",
      store_pick_up: false
    },
    listing_source: "",
    catalog_product_id: null,
    domain_id: "MLB-T_SHIRTS",
    parent_item_id: null,
    plain_text: "Aqui é apenas uma descrição"
  }
};

const invalidIdMock = {
  error: "resource not found" ,
  message: "Se você deseja saber os recursos da API disponíveis, visite o site de desenvolvedores MercadoLibre (http://developers.mercadolibre.com)",
};

module.exports = {
  validIdMock,
  invalidIdMock,
};
   