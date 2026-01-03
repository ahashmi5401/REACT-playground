import React from "react";
import { Link, Outlet } from "react-router-dom";

// Sample products
const products = [
  {
    id: 1,
    name: "Luxury Watch",
    price: "$299",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
  {
    id: 2,
    name: "Designer Bag",
    price: "$499",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: 3,
    name: "Premium Headphones",
    price: "$199",
    image: "https://images.unsplash.com/photo-1518445698161-4d8b6f8a1d6b",
  },
  {
    id: 4,
    name: "Gold Sunglasses",
    price: "$149",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
];

function Shop() {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-10">
      <h1 className="text-4xl font-bold text-[#D4AF37] mb-10 text-center">
        Shop Our Collection
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`${product.id}`}
            className="bg-zinc-800 border border-zinc-700 rounded-md overflow-hidden shadow-sm hover:shadow-lg hover:border-[#D4AF37] transition transform hover:-translate-y-1"
          >
            <div className="h-56 w-full overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg text-white">{product.name}</h3>
              <p className="text-[#D4AF37] font-bold text-lg mt-1">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Nested route outlet for product details */}
      <Outlet />
    </div>
  );
}

export default Shop;
