import React, { useState } from "react";
import ModalDetail from "../ModalDetail";
import Review from "../Review";

const Detail = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    console.log("modal open!");
    setShowModal((prev) => !prev);
  };

  const nutrisions = [
    {
      name: "Energy",
      value: "180kJ / 42kcal"
    },
    {
      name: "Fat",
      value: "0g"
    },
    {
      name: "of which saturates",
      value: "0g"
    },
    {
      name: "Carbohydrate",
      value: "10.6g"
    },
    {
      name: "of which Sugars",
      value: "10.6g"
    },
    {
      name: "Protein",
      value: "0g"
    },
    {
      name: "salt",
      value: "0g"
    }
  ]

  const imageProduct = [
    "https://images.pexels.com/photos/2651821/pexels-photo-2651821.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3200651/pexels-photo-3200651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2983103/pexels-photo-2983103.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4113688/pexels-photo-4113688.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4113671/pexels-photo-4113671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/4113665/pexels-photo-4113665.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  ];

  return (
    <>
      <main className="bg-white pt-6 pb-3">
        <div className="md:container md:mx-auto md:px-8">
          <div className="flex inline-flex px-10 pb-3 md:px-12 ">
            <div className="w-full2 w-3/5">
              <div className="top-0 px-5 py-3">
                <div className="masonry-3 ">
                  {imageProduct.map((item, i) => (
                    <div
                      className="overflow-hidden mb-4 hover:block "
                      key={i}
                      onClick={openModal}
                    >
                      <div className="relative cursor-pointer">
                        <img className="" src={item} alt="" />

                        <div className="overlay flex justify-center items-center absolute bottom-0 h-full w-full px-4 pt-3 opacity-0 hover:opacity-100">
                          <div className=" flex justify-center items-center">
                          <button className="h-12 w-12">
                                    <svg className="h-12 w-12 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </button>
                          </div>

                          
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full2 w-2/5 pl-6">
              <div className="py-2 flex">
                <div className="w-full">
                  <div className="">
                    <div className="text-md font-gray-500">
                      Coca-Cola
                    </div>
                    <div className="text-3xl font-bold py-2">
                      Coca-Cola Original Taste 4 x 250ml
                    </div>
                    <div className="">
                      Sparkling Soft Drink with Vegetable Extracts
                    </div>
                    <div className="py-2 text-2xl font-bold">£2.85</div>
                    
                   
                  </div>
                  
                  <div className="py-1">
                    
                    <div className="py-3">
                      <div className="w-full">
                        <div className="py-3 border-sm border-t border-b">
                          <div className="font-semibold uppercase py-1">
                            Product information
                          </div>
                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Ingredients
                            </div>
                            <div className="px-2 text-sm font-light">
                              Carbonated Water, Sugar, Colour (Caramel E150d), Phosphoric Acid, Natural Flavourings including Caffeine
                            </div>
                          </div>
                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Dietary information
                            </div>
                            <div className="px-2 text-sm font-light">
                              Suitable for Vegans. Suitable for Vegetarians.
                            </div>
                          </div>
                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Nutritional values per 100ml
                            </div>
                            {
                              nutrisions.map(nutri => (
                                <div className="flex px-2 text-sm font-light space-x-2">
                                  <div className="w-1/2 border-sm border-b py-2">
                                    {nutri.name}
                                  </div>
                                  <div className="w-1/2 border-sm border-b py-2">
                                    {nutri.value}
                                  </div>
                                </div>
                              ))
                            }
                            
                          </div>
                          
                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Country of origin
                            </div>
                            <div className="px-2 text-sm font-light">
                              Made in GB.
                            </div>
                          </div>

                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Preparation and usage
                            </div>
                            <div className="px-2 text-sm font-light">
                              Best served chilled
                            </div>
                          </div>

                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Storage information
                            </div>
                            <div className="px-2 text-sm font-light">
                              Store cool and dry Best before end: See base of can for date.
                            </div>
                          </div>

                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Other information
                            </div>
                            <div className="px-2 text-sm font-light">
                              Contains caffeine This product is allergen free Contains natural flavourings Contains added colours Can - Metal - Widely Recycled Carton - Card - Widely Recycled
                            </div>
                          </div>

                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Packaging
                            </div>
                            <div className="px-2 text-sm font-light">
                              Box
                            </div>
                          </div>

                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Weight
                            </div>
                            <div className="px-2 text-sm font-light">
                              1000 Millilitre
                            </div>
                          </div>

                          <div className="py-2">
                            <div className="flex inline-flex justify-center text-sm font-semibold uppercase">
                              Manufacturer
                            </div>
                            <div className="px-2 text-sm font-light">
                              Coca-Cola Enterprises Ltd, Uxbridge, UB8 1EZ.
                            </div>
                          </div>  
                          
                        </div>
                        
                        <div className="py-2">
                          <img src="data:image/png;base64,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" alt="" />
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Review />
        </div>
      </main>
      
      <ModalDetail showModal={showModal} setShowModal={setShowModal} />

    </>
  );
};

export default Detail;
