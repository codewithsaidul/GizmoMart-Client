import Banner from "../../assets/aboutBanner.png";

const AboutBanner = () => {
  return (
    <div className="mt-12 mb-20">
      <h2 className="text-center text-3xl text-primary font-bold mb-10">
        About Us
      </h2>

      <div className="flex flex-col lg:flex-row md:justify-between md:items-center gap-10 mt-8">
        <div className="w-full lg:w-1/2">
          <p className="tex-lg font-medium">
            Welcome to your ultimate tech destination! Our website brings
            together an extensive collection of premium electronics and gadgets
            to cater to all your technological needs. Whether you&apos;re a
            gaming enthusiast seeking cutting-edge gamepads and headphones, a
            tech-savvy professional looking for high-performance computers and
            smartphones, or a photography lover in search of the perfect camera,
            </p>
            <p className="tex-lg font-medium mt-5">
            we&apos;ve got something for everyone. Discover the latest
            innovations from top brands, all available at competitive prices.
            From sleek smartwatches to enhance your daily life to powerful
            gadgets that keep you connected, our platform ensures a seamless
            shopping experience. Dive into a world of advanced technology and
            elevate your lifestyle with our curated selection of products
            designed to inspire and delight. Shop with confidence and take your
            tech game to the next level!
          </p>
        </div>

        <figure className="w-full lg:w-1/2">
          <img src={Banner} alt="About Banner" className="w-full rounded-2xl" />
        </figure>
      </div>
    </div>
  );
};

export default AboutBanner;
