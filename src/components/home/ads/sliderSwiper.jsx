import MainButton from "../../common/mianBtn";

export default function CustomSwiperSlide({ ad }) {
  console.log(ad, "data dsadsadsadasdsdsads");
  return (
    <div className="h-full home-swiper relative font-volkhov flex flex-col justify-center gap-5 text-center text-background lg:text-left">
      <img
        style={{ width: "100%", height: "100%" }}
        src={ad.image}
        alt={ad.title}
        className="object-cover absolute -z-50 top-0 left-0"
        fill
        priority
      />
      <div className="container text-foreground dark:text-background mx-auto pl-10 flex flex-col gap-5 max-w-5xl">
        <h1 className="font-bold text-4xl max-w-4xl max-lg:mx-auto lg:text-7xl">
          {ad.title}
        </h1>
        <p className="max-w-sm md:max-w-md lg:max-w-lg opacity-80 max-lg:mx-auto text-2xl font-bold text-primary font-cairo ">
          {ad.discount}
        </p>
        <p className="max-w-sm md:max-w-md lg:max-w-lg opacity-80 max-lg:mx-auto font-cairo ">
          {ad.description}
        </p>
        {/*<MainButton className="max-lg:mx-auto">get started</MainButton>*/}
      </div>
    </div>
  );
}
