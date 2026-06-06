export const productMeta = [
    {
      id: "signature",
      image: "/images/products/signature_collection.png",
      accent: "accent-gold",
    },
    {
      id: "estate",
      image: "/images/products/estate_collection.png",
      accent: "accent-blue",
    },
    {
      id: "whisky",
      image: "/images/products/whisky_collection.png",
      accent: "accent-red",
    },
    {
      id: "wine",
      image: "/images/products/wine_collection.png",
      accent: "accent-gold",
    },
  ];
  
  export function getTranslatedProducts(t) {
    return productMeta.map((product) => ({
      ...product,
      size: t.common.size250,
      name: t.products.items[product.id].name,
      tag: t.products.items[product.id].tag,
      collection: t.products.items[product.id].collection,
      profile: t.products.items[product.id].profile,
      description: t.products.items[product.id].description,
    }));
  }