import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CustomSwiperSlide from "./sliderSwiper";
import image1 from "/src/assets/imgs/image1.jpg";
import image2 from "/src/assets/imgs/image2.jpg";
import image3 from "/src/assets/imgs/image3.jpg";
import { useQuery } from "@tanstack/react-query";
import { getAds } from "../../../api/queries/ads";

export default function HomeSlider() {
  const {data:ads} = useQuery({
    queryKey:["ads"],
    queryFn:getAds
  })

  return (
    <div
      className="rounded-lg"
      style={{ display: "flex", justifyContent: "center", width: "100dvw",height:"100dvh" }}
    >
      <Swiper
        autoplay={{
          delay: 2000,
        }}
        slidesPerView={1}
        // navigation
        modules={[Navigation, Autoplay, Pagination]}
        loop
        color="red"
        className="h-[100dvh]  w-full"
        pagination={{ clickable: true }}
        dir="ltr"
      >
      {ads?.data?.map((ad) => {
        return (
          <SwiperSlide key={ad.id}>
            <CustomSwiperSlide ad={ad} />
          </SwiperSlide>
        );
      })}
      </Swiper>
    </div>
  );
}
