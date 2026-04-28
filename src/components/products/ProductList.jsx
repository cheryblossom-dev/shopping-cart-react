import ProductCard from "./ProductCard.jsx";

function ProductList() {
  ////สร้างข้อมูลสินค้า
  const products = [
    {
      id: 1,
      name: "Class White tee",
      category: "Basics",
      price: 390,
      image:
        "https://campussutra.com/products/mens-ivory-white-solid-utility-oversized-shirt_csmovsrt7866?srsltid=AfmBOoqnwySBrQEjdimOJpeSEZaTRJldx3G8obTFG8L_wC-x0Eq5iX6S",
    },
    {
      id: 2,
      name: "Canvas Tote Bag",
      category: "Accessories",
      price: 5400,
      image:
        "https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8a091123-957c-4e9a-90b4-5aab6f513637/AIR+MAX+TL+2.5+PRM.png",
    },
    {
      id: 3,
      name: "Minimal Sneakers",
      category: "Footwear",
      price: 1390,
      image:
        "https://sneaker-freaker.b-cdn.net/b2366808a3c275d4539db24a35544e6c4f9fb323-1100x735.jpg?auto=format&fit=max&q=90&w=1100",
    },
    {
      id: 4,
      name: "Everyday Cap",
      category: "Accessories",
      price: 390,
      image:
        "https://redtape.com/cdn/shop/files/1_c6a68273-9ad7-4bee-abef-3b6974d7d211.jpg?v=1754293040&width=1240",
    },
  ];
  return (
    <section className="mb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-slate-900">
          Recommended Products
        </h2>
        <span className="text-sm text-slate-500">{products.length} items</span>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {/* 2. ใช้ .map() เพื่อสร้างรายการสินค้าตามจำนวนข้อมูลที่มี */}
        {products.map((item) => (
          <ProductCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
