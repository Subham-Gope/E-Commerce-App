import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          alt="exhange icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Easy Exchange Policy</p>
        <p>We Offer hassle free exchange poilcy</p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          alt="exhange icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">7 Days Return Policy</p>
        <p>We provide 7 days of free return policye</p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="exhange icon"
          className="w-12 m-auto mb-5"
        />
        <p className="font-semibold">Best customer support</p>
        <p>we provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
