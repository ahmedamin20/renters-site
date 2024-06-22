import { useMutation, useQuery } from "@tanstack/react-query";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import { getOneProducts } from "../../../api/queries/products";
import { MakeRequest } from "../../../api/queries/requests";
import DatePicker from "../../datePacker";
import Modal from "../../popupForm";
import { userId } from "../../../utils/config/constants";
const OneProductPage = ({productId, isMyProduct = false}) => {
  const checkRoute = ()=> {
    if(window.location.pathname.includes("/profile")){
      return true
    }else
    return false
  }
  const {id} = useParams()
  const formRef = useRef(null)
  const {data, isPending: fetchLoading} = useQuery({
    queryKey:["oneProduct",id, productId],
    queryFn:()=> getOneProducts(!checkRoute() ? id : productId)
    
  })
  console.log(data)
  const {mutate, isPending, isSuccess} = useMutation({
    mutationFn: ()=>{
      const formData = new FormData(formRef.current)
      formData.append("product_id", id)
      const data = Object.fromEntries(formData)
      MakeRequest(data)
    }
  })
  
  return (
    !fetchLoading &&
    <section className="py-10 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl px-4 mx-auto">
        <div className="flex flex-wrap mb-24 -mx-4">
          <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
            <div className="sticky top-0 overflow-hidden ">
              <div className="relative mb-6 lg:mb-10 lg:h-96">
                
                <img
                  className="object-contain w-full lg:h-full"
                  src={data?.data.main_image}
                  alt="main_image"
                />
                
              </div>
              
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="lg:pl-20">
              <div className="mb-6 ">
                <span className="p-3 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                  <span className="font-bold text-xl">Rang: <span className="text-red m-1 text-lg">Min|</span>{data?.data.minimum_days} , <span className="text-green m-1 text-lg">Max|</span>{data?.data.maximum_days}</span>
                </span>
                <h2 className="max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                  {data?.data?.name}
                </h2>
                
                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                  <span>{data?.data.price}</span>
                  <span className="ml-3 text-base font-normal text-gray-500  dark:text-gray-400">
                    /day
                  </span>
                </p>
              </div>
              <div className="mb-6">
                <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                Description
                </h2>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                  <div className="p-3 lg:p-5 ">
                    <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                      <div className="flex w-full flex-wrap justify-center gap-x-2 gap-y-4">
              {/*<div className="w-full mb-4 md:w-2/5">*/}
              <div className="w-full mb-4">
                          <div className="flex ">
                            
                            <div className="w-full">
                              <span className="mb-2 w-full text-pretty text-lg font-medium text-gray-500 dark:text-gray-400">
                                {data?.data?.description}
                              </span>
                              
                            </div>
                          </div>
                        </div>
                        
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                
                <p className="mt-2 text-sm text-blue-500 dark:text-blue-200">
                  Product Health |  
                  <span className="text-gray-600 mx-1 dark:text-gray-400">
                    {data?.data.health}%
                  </span>
                </p>
              </div>
              <div className="mb-6 "></div>
              {
                !isMyProduct && (<div className="flex flex-wrap items-center mb-6">
                
                <div className="mb-4 lg:mb-0">
                
              
                  <Modal onClick={mutate} innerBtnText={"Confirm"} text={"Rent Now"}>
                <form ref={formRef} className="flex flex-col gap-[20px]">
                <span className="text-pretty text-[14px] font-[750]">Select your specific Date</span>
                <lable className="text-start font-bold my-2">From Date</lable>
                <DatePicker name="from_date"/>
                <lable className="text-start font-bold my-2">To Date</lable>
                <DatePicker name="to_date"/>
                </form>
                </Modal>
                </div>
                
                </div>
              )
            }
              <div className="flex gap-4 mb-6">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneProductPage;
