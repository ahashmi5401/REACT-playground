import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

// Sample generic product
const products = [
  {
    id: 1,
    name: "Premium Product",
    price: 6171,
    oldPrice: 10285,
    images: [
      "/images/product1-main.png",
      "/images/product1-2.png",
      "/images/product1-3.png",
      "/images/product1-4.png",
    ],
    description: "This is a premium product with excellent quality and features.",
    options: ["S", "M", "L", "XL"], // could be size, color, etc.
  },
];

function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(product?.images[0]);
  const [selectedOption, setSelectedOption] = useState("");

  if (!product)
    return <p className="text-center mt-10 text-gray-400">Product not found.</p>;

  return (
    <div className="bg-black text-white min-h-screen px-6 py-10 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left: Image + Thumbnails */}
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name}-${idx}`}
                className={`h-20 w-20 object-cover rounded-md cursor-pointer border ${
                  selectedImage === img ? "border-[#D4AF37]" : "border-zinc-700"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="flex-1">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-[500px] object-cover rounded-md"
            />
          </div>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-bold text-[#D4AF37] mb-4">{product.name}</h1>

          {/* Price & Discount */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold text-[#D4AF37]">
              PKR {product.price.toLocaleString()}
            </span>
            <span className="line-through text-gray-400">
              PKR {product.oldPrice.toLocaleString()}
            </span>
            <span className="text-red-500 font-semibold">
              -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
            </span>
          </div>

          {/* Shipping & Returns */}
          <div className="flex flex-col gap-2 mb-6 text-gray-400 text-sm">
            <span className="text-blue-400 font-medium">⚡ Express: Instant dispatch</span>
            <span>Est. shipping by Jan 04, 2026</span>
            <span>Easy 14 days return & refund</span>
          </div>

          {/* Options Selection */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Options</h3>
            <div className="flex gap-3">
              {product.options.map((opt) => (
                <button
                  key={opt}
                  className={`border px-4 py-2 rounded hover:bg-[#D4AF37] hover:text-black transition ${
                    selectedOption === opt ? "bg-[#D4AF37] text-black" : ""
                  }`}
                  onClick={() => setSelectedOption(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center gap-4 mb-6">
            <input
              type="number"
              defaultValue={1}
              min={1}
              className="w-20 px-3 py-2 text-black rounded"
            />
            <button className="bg-[#D4AF37] text-black px-6 py-3 rounded hover:bg-yellow-400 transition">
              Add to Cart
            </button>
          </div>

          <Link to="/shop" className="text-gray-400 hover:text-[#D4AF37]">
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
