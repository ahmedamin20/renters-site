import React from 'react';
import { getCategories } from '../../api/queries/categories';
import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINTS } from '../../utils/config/constants';
import { Link, useParams } from 'react-router-dom';
import { getAllProducts } from '../../api/queries/products';

const ProductsByCategory = () => {
    const {id} = useParams()
    const { data } = useQuery({
        queryKey: [API_ENDPOINTS.CATEGORIES],
        queryFn: getCategories,
      });


      const { data: productsData } = useQuery({
        queryKey: [API_ENDPOINTS.PRODUCTS, id],
        queryFn: ()=>getAllProducts(id),
      });
      const catName = data?.data.find((item) => item.id == id)?.name;
      console.log(productsData)
      const products = [
    {
      imgSrc: 'https://readymadeui.com/images/product1.webp',
      alt: 'Product 1',
      title: 'Lexicon Luxe | T-shirt',
      price: '$10',
    },
    {
      imgSrc: 'https://readymadeui.com/images/product2.webp',
      alt: 'Product 2',
      title: 'Adjective Attire | T-shirt',
      price: '$12',
    },
    {
      imgSrc: 'https://readymadeui.com/images/product3.webp',
      alt: 'Product 3',
      title: 'ThreadCraft Vibes | T-shirt',
      price: '$14',
    },
    {
      imgSrc: 'https://readymadeui.com/images/product7.webp',
      alt: 'Product 3',
      title: 'Verbal Vogue Tees | T-shirt',
      price: '$12',
    },
    {
      imgSrc: 'https://readymadeui.com/images/product5.webp',
      alt: 'Product 3',
      title: 'Jargon Jungle | T-shirt',
      price: '$15',
    },
    {
      imgSrc: 'https://readymadeui.com/images/product6.webp',
      alt: 'Product 3',
      title: 'Syllable Streetwear | T-shirt',
      price: '$14',
    },
  ];

  return (
    <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">{catName} Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {productsData?.data.map((product, index) => (
          <Link
          to={`/product/${product.id}`}
            key={index}
            className="bg-white rounded overflow-hidden shadow-md cursor-pointer hover:scale-[1.02] transition-all"
          >
            <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
              <img
                src={product.main_image}
                alt={"image"}
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{product.name}</h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800">{product.price}EGP/ day</h4>
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;
