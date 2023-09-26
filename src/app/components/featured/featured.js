"use client";
import css from "./featured.css";
import { Carousel, Tabs } from "antd";
import { CardTypeOne, ProductCard } from "../card/card";
import Image from "next/image";

const FeaturedTypeOne = (props) => {
  const data = props.data;
  return (
    <Carousel
      dots={{ className: "carousel-dots" }}
      className="w-full my-carousel"
    >
      {data?.map((obj, index) => {
        return (
          <div key={index}>
            <section className={`${obj.background ? obj.background : ""}`}>
              <div className="container mx-auto flex px-5 lg:px-24 xl:px-40 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                  <h1 className="font-serif text-4xl mb-4 font-extrabold text-gray-900">
                    {`${obj.header ? obj.header : "New Furniture Trends"}...`}
                    <br className="hidden lg:inline-block" />
                    {obj.headerBreak ? obj.headerBreak : "in 2023"}
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    {obj.description
                      ? obj.description
                      : `Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.`}
                  </p>
                  <div className="flex justify-center my-4 mx-1">
                    <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                      {obj.buttonText ? obj.buttonText : "Shop Now"}
                    </button>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <Image
                    className="object-cover object-center rounded"
                    width={props.imgWidth ? props.imgWidth : 432}
                    height={props.imgHeight ? props.imgHeight : 360}
                    alt="hero"
                    src={
                      obj.imgSrc ? obj.imgSrc : "https://dummyimage.com/720x600"
                    }
                  ></Image>
                </div>
              </div>
            </section>
          </div>
        );
      })}
      <div>
        <section className="">
          <div className="container mx-auto flex px-5 lg:px-24 xl:px-40 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="font-serif text-4xl mb-4 font-extrabold text-gray-900">
                New Furniture Trends{"..."}
                <br className="hidden lg:inline-block" />
                in 2023
              </h1>
              <p className="mb-8 leading-relaxed">
                Copper mug try-hard pitchfork pour-over freegan heirloom neutra
                air plant cold-pressed tacos poke beard tote bag.
              </p>
              <div className="flex justify-center my-4 mx-1">
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg">
                  Shop Now
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded"
                width={720}
                height={600}
                alt="hero"
                src="https://dummyimage.com/720x600"
              ></Image>
            </div>
          </div>
        </section>
      </div>
    </Carousel>
  );
};
export { FeaturedTypeOne };

const FeaturedTypeTwo = (props) => {
  const data = props.data;
  return (
    <section className="w-full bg-white min-[1400px]:px-32">
      <div className="pt-28 flex flex-col items-center">
        <h1 className="font-serif mb-5 font-extrabold text-gray-900 text-3xl sm:text-4xl tracking-wider">
          {props.label ? props.label : "Label"}
        </h1>
        <div className="flex flex-wrap">
          {data?.map((obj, index) => {
            return (
              <div
                key={index}
                className="lg:w-1/4 md:w-1/2 p-4 w-full flex justify-center"
              >
                <ProductCard
                  mykey={obj.id}
                  width={props.width}
                  title={obj.title}
                  desc={obj.description}
                  price={obj.price}
                  rating={obj.rating.rate}
                  src={obj.image}
                ></ProductCard>
              </div>
            );
          })}
          {/* <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex justify-center">
            <ProductCard
              width={250}
              title={testData.title}
              desc={testData.description}
              price={testData.price}
              rating={testData.rating.rate}
              src={testData.image}
            ></ProductCard>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex justify-center">
            <ProductCard
              width={250}
              title={testData.title}
              desc={testData.description}
              price={testData.price}
              rating={testData.rating.rate}
              src={testData.image}
            ></ProductCard>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex justify-center">
            <ProductCard
              width={250}
              title={testData.title}
              desc={testData.description}
              price={testData.price}
              rating={testData.rating.rate}
              src={testData.image}
            ></ProductCard>
          </div>
          <div className="lg:w-1/4 md:w-1/2 p-4 w-full flex justify-center">
            <ProductCard
              width={250}
              title={testData.title}
              desc={testData.description}
              price={testData.price}
              rating={testData.rating.rate}
              src={testData.image}
            ></ProductCard>
          </div> */}
        </div>
      </div>
    </section>
  );
};
export { FeaturedTypeTwo };

const FeaturedTypeThree = (props) => {
  const onChange = (key) => {
    console.log(key);
  };

  const featuredItems = props.data?.map((obj, index) => {
    return {
      key: index,
      label: (
        <div className="text-blue-800 text-lg font-medium tracking-wide hover:text-pink-500 transition duration-300">
          {obj.label ? obj.label : "Label"}
        </div>
      ),
      children: (
        <div className="flex flex-wrap">
          {obj.products?.map((objInner, index) => {
            return (
              <div
                key={index}
                className="lg:w-1/3 md:w-1/2 p-4 w-full flex justify-center"
              >
                <CardTypeOne
                  mykey={objInner.id}
                  size={props.size}
                  width={props.width}
                  title={objInner.title}
                  desc={objInner.description}
                  price={objInner.price}
                  rating={objInner.rating.rate}
                  src={objInner.image}
                ></CardTypeOne>
              </div>
            );
          })}
        </div>
      ),
    };
  });
  return (
    <section className="w-full bg-white min-[1400px]:px-32">
      <div className="pt-24 pb-16 flex flex-col items-center">
        <h1 className="font-serif mb-5 font-extrabold text-gray-900 text-3xl sm:text-4xl tracking-wider">
          {props.label ? props.label : "Label"}
        </h1>
        <Tabs
          centered
          defaultActiveKey="1"
          items={featuredItems}
          onChange={onChange}
        />
        {/* <div className="flex flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full flex justify-center">
            <CardTypeOne
              width={250}
              title={testData.title}
              desc={testData.description}
              price={testData.price}
              rating={testData.rating.rate}
              src={testData.image}
            ></CardTypeOne>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full flex justify-center">
            <CardTypeOne></CardTypeOne>
          </div>
          <div className="lg:w-1/3 md:w-1/2 p-4 w-full flex justify-center">
            <CardTypeOne></CardTypeOne>
          </div>
        </div> */}
      </div>
    </section>
  );
};
export { FeaturedTypeThree };