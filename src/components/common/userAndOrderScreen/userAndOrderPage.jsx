import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { showRequest } from "../../../api/queries/requests";
import AcceptAndRejectFooter from "../acceptAndRejectFooter";
import OneProductPage from "../oneProduct/oneProductPage";

const UserAndOrderPage = () => {
  const { id } = useParams();
  console.log(id)
  const { data, isPending } = useQuery({
    queryKey: ["showOneReq", id],
    queryFn: () =>  showRequest(id),
  });
  if(!data) return null

  const user = data?.data?.from_user,
    product = data?.data?.product;
  console.log(data.data)
  return (
    isPending ? <p className="text-center animate-bounce text-bold">Loading...</p> :

    <div className="bg-itemsBgLight dark:bg-itemsBgDark rounded-lg">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className=" shadow-lg rounded-lg p-6">
              <div className="flex dark:text-white text-black flex-col items-center">
                <img
                  src={user?.avatar}
                  className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                />

                <h1 className="text-xl font-bold dark:text-white text-black">
                  {user?.name}
                </h1>
                <p className="">{user?.email}</p>
                <AcceptAndRejectFooter />
              </div>
              {/*<hr className="my-6 border-t border-gray-300" />
              <div className="flex dark:text-white text-black flex-col">
                <span className=" uppercase font-bold tracking-wider mb-2">
                  Skills
                </span>
                <ul>
                  <li className="mb-2">JavaScript</li>
                  <li className="mb-2">React</li>
                  <li className="mb-2">Node.js</li>
                  <li className="mb-2">HTML/CSS</li>
                  <li className="mb-2">Tailwind Css</li>
                </ul>
  </div>*/}
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            {product && <OneProductPage isMyProduct={true} productId={product?.id} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAndOrderPage;
