import { useState } from "react";
import ProductPageBody from "./ProductPageBody";
import image1 from "/src/assets/imgs/image1.jpg";
const OneProductPage = () => {
  const [data, setData] = useState([]);
  const URL = "api/orders";
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       defaultAPI.get(URL).then((res) => {
  //         setData(res.data.data);
  //       });
  //       // return x;
  //     };
  //     fetchData();
  //   }, []);

  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col ">
        <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
          Product
        </h1>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
              Your Product
            </p>
            <div
              //key={item.id}
              className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full "
            >
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img className="w-full  md:block" src={image1} alt="dress" />
                <img
                  className="w-full "
                  src={"/src/assets/imgs/image2.jpg"}
                  alt="dress"
                />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                <div className="w-80 flex flex-col justify-start items-start space-y-4">
                  <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                    Item Name
                  </h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">ID: </span> 1
                    </p>
                    <p className="text-sm leading-none text-gray-800">
                      <span className="text-gray-300">unit: </span> 2 Meter
                    </p>
                  </div>
                </div>

                <div className="flex justify-evenly space-x-4  w-full">
                  <p className="text-base xl:text-lg leading-6 text-black">
                    descriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescriptiondescription
                    descriptiondescription description vdescriptionv description
                  </p>

                  <p className="text-base xl:text-lg font-semibold leading-6 text-green-600">
                    250 EGP
                  </p>
                </div>
              </div>
            </div>{" "}
            {/*{data?.map((item) => (
              
            ))}*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneProductPage;
