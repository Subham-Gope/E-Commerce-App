import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
import Title from "../components/Title";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="about-image"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-6">
          <p>
            Forever brings you timeless fashion and lifestyle essentials crafted
            to elevate your everyday. Explore premium quality, sustainable
            designs that seamlessly blend style, comfort, and durability for all
            seasons.
          </p>
          <p>
            Rediscover shopping with Forever! Our curated collections cater to
            every taste, ensuring you stay trendy while embracing
            sustainability. Experience effortless elegance with products
            designed to last a lifetime.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to create timeless, sustainable designs
            that inspire confidence and celebrate individuality. We aim to
            deliver unmatched quality while championing ethical practices and
            environmental responsibility.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance: </b>
          <p className="text-gray-600">
            Our mission in Quality Assurance is to ensure every product at
            Forever meets the highest standards of excellence. We are committed
            to delivering reliability, durability, and customer satisfaction in
            every detail.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className="text-gray-600">
            At Forever, we prioritize convenience by offering a seamless
            shopping experience. From intuitive navigation to fast delivery, we
            make it easy to find and enjoy the products you love.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            Forever is dedicated to providing exceptional customer service. Our
            team is here to support you every step of the way, ensuring your
            experience is seamless, personalized, and truly satisfying.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
