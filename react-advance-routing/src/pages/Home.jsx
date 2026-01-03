import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const categories = [
    {
      name: "Fashion",
      image: "https://images.unsplash.com/photo-1521336575822-6da63fb45455",
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    },
    {
      name: "Beauty",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    },
    {
      name: "Accessories",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
  ];

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

  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#D4AF37]">
            Elevate Your Lifestyle
          </h1>
          <p className="mt-6 text-gray-400 text-lg">
            Premium fashion, electronics, and luxury essentials — all in one place.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/shop"
              className="bg-[#D4AF37] text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Shop Now
            </Link>
            <Link
              to="/categories"
              className="border border-[#D4AF37] px-8 py-3 rounded-full hover:bg-[#D4AF37] hover:text-black transition"
            >
              Explore
            </Link>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="relative rounded-2xl overflow-hidden group"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <h3 className="text-xl font-semibold text-[#D4AF37]">
                  {cat.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* FEATURED PRODUCTS */}
<section className="py-20 px-6 bg-zinc-900">
  <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
    Featured Products
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-zinc-800 border border-zinc-700 rounded-md overflow-hidden shadow-sm hover:shadow-lg hover:border-[#D4AF37] transition transform hover:-translate-y-1"
      >
        {/* Product Image */}
        <div className="h-56 w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-white">{product.name}</h3>
          <p className="text-[#D4AF37] font-bold text-lg mt-1">{product.price}</p>
          <button className="mt-4 w-full border border-[#D4AF37] py-2 rounded hover:bg-[#D4AF37] hover:text-black transition">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* FOOTER */}
      <footer className="border-t border-zinc-800 py-6 text-center text-gray-500 text-sm">
        © 2026 LuxeMall. Crafted with elegance.
      </footer>
    </div>
  );
}

export default Home;
