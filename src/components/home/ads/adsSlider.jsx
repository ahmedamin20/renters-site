import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import CustomSwiperSlide from "./sliderSwiper";
import image1 from "/src/assets/imgs/image1.jpg";
import image2 from "/src/assets/imgs/image2.jpg";
import image3 from "/src/assets/imgs/image3.jpg";

export default function HomeSlider({ adsData }) {
  const ads = [
    {
      id: 1,
      title: "title1",
      description: "description1",
      discount: "discount1",
      image: image1,
    },
    {
      id: 2,
      title: "title2",
      image: image2,
      description: "description2",
      discount: "discount2",
    },
    {
      id: 3,
      title: "title3",
      image: image3,
      description: "description3",
      discount: "discount3",
    },
  ];

  return (
    <div
      className="rounded-lg"
      style={{ display: "flex", justifyContent: "center", width: "100%" }}
    >
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        // navigation
        modules={[Navigation, Autoplay, Pagination]}
        loop
        color="red"
        className="h-[90vh]"
        pagination={{ clickable: true }}
        dir="ltr"
      >
        {ads?.map((ad) => {
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
