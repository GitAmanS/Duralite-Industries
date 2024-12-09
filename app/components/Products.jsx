"use client";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";

const Products = () => {
  const productsList = [
    {
      id: 1,
      name: "Small Road Barrier",
      productImg: "./products/product1.jpg",
      productSubImage: "./products/product1.jpg",
      productDesc:
        "A compact road barrier designed for small roads or construction zones. It offers reliable safety and is easy to transport and install. Perfect for urban areas or narrow streets requiring temporary traffic control.",
    },
    {
      id: 2,
      name: "Medium Road Barrier",
      productImg: "./products/product2.jpg",
      productSubImage: "./products/product2.jpg",
      productDesc:
        "A medium-sized road barrier offering an ideal balance between portability and visibility. It is suitable for both urban and rural areas and is highly visible even from a distance, making it perfect for medium-traffic zones.",
    },
    {
      id: 3,
      name: "Large Road Barrier",
      productImg: "./products/product3.jpg",
      productSubImage: "./products/product3.jpg",
      productDesc:
        "A large and robust road barrier designed for high-traffic roads or highways. This barrier provides maximum protection and is built for long-term use. It is suitable for construction sites and emergency roadwork zones.",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(productsList[0]);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const SelectProduct = (product) => {
    if (selectedProduct.id !== product.id) {
      // Trigger animation reset
      setIsAnimating(false);
      setTimeout(() => {
        setSelectedProduct(product);
        setIsAnimating(true); // Restart animation
      }, 100); // Small delay to allow animation reset
    }
  };

  return (
    <div ref={sectionRef} className="flex min-h-screen h-auto mx-40 py-8">
      {/* Products List */}
      <div className="w-full">
        <h1 className="text-5xl font-[500] my-4">Our Products</h1>
        <p className="font-[400] mb-12 text-gray-500">
          Ador offers a deep understanding of the unique local conditions,
          unparalleled services, and countless options to make a tailor-made
          solution for your needs.
        </p>
        {productsList.map((product) => (
          <button
            onClick={() => SelectProduct(product)}
            className={`flex items-center my-4 text-lg font-[500] hover:text-[#004185] bg-[#F3F5F7] w-full py-4 text-start px-6 rounded-xl relative group ${
              selectedProduct.id === product.id ? "text-[#004185]" : ""
            }`}
            key={product.id}
          >
            <h1 className="text-lg">{product.name}</h1>
            <div
              className={`group-hover:block ml-2 text-[#004185] text-2xl ${
                selectedProduct.id === product.id ? "block" : "hidden"
              }`}
            >
              <GoArrowRight />
            </div>
          </button>
        ))}
      </div>

      {/* Main Image */}
      <div className="p-4 rounded h-100 w-full">
        <img
          className={`h-screen w-full object-cover rounded-xl transition-all duration-500 ease-in-out ${
            (isVisible || isAnimating) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          src={selectedProduct.productImg}
          alt="Product"
        />
      </div>

      {/* Sub Image and Description */}
      <div className="flex flex-col p-4 w-full">
        <div className="h-1/2 w-full">
          <img
            className={`h-full w-full rounded-xl object-cover transition-all duration-500 ease-in-out ${
              (isVisible || isAnimating) ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
            }`}
            src={selectedProduct.productSubImage}
            alt="Product"
          />
        </div>
        <div className="flex flex-col h-1/2 py-2">
          <h1 className="text-2xl font-[500]">{selectedProduct.name}</h1>
          <p
            className="transition-all duration-500 ease-in-out mt-2 text-gray-600"
          >
            {selectedProduct.productDesc}
          </p>
          <button className="flex transition-all duration-500 ease-in-out mt-auto flex-row w-fit py-3 px-6 rounded-full text-sm font-[500] space-x-2 items-center text-white bg-[#004185]">
            Read More
            <GoArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
