"use client";
import css from "./card.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import is_touch_enabled from "@/lib/touchDetect";
import { deviceSizeResponse } from "@/lib/winDimension";
import { Card, Carousel, Image as AntImage } from "antd";
import { ButtonOne } from "@/components/button";
import {
  ShoppingCartOutlined,
  HeartTwoTone,
  StarFilled,
  HeartOutlined,
} from "@ant-design/icons";

const CardTypeOne = (props) => {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(is_touch_enabled());
  }, []);
  const tmpCard = (
    <Card
      key={props.mykey}
      size={props.size ? props.size : "small"}
      style={{
        width: props.width ? props.width : 300,
      }}
      bordered={false}
      className="my-ant-card relative group"
      hoverable
      cover={
        <div
          className="h-44 w-max overflow-hidden p-1 pb-0"
          style={{
            height: props.xs
              ? deviceSizeResponse(
                  props.xs,
                  props.base,
                  props.sm,
                  props.md,
                  props.lg,
                  props.xl
                )
              : 250,
          }}
        >
          <AntImage
            alt="Image"
            className="group-hover:opacity-60 transition-opacity"
            height={"100%"}
            width={"100%"}
            preview={false}
            src={
              props.src
                ? props.src
                : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          />
        </div>
      }
    >
      {touch ? null : (
        <Link href={props.viewLink ? props.viewLink : ""}>
          <ButtonOne onClick={props.onclick1 ? props.onclick1 : () => {}}>
            View
          </ButtonOne>
        </Link>
      )}
      <div className="w-full flex justify-between mt-3">
        <div className="line-clamp-1 max-w-[72%] text-blue-800 text-base font-medium underline decoration-2 decoration-gray-300">
          {props.title ? props.title : "Title"}
        </div>
        <div className="text-pink-500 text-base font-medium">
          {"Rs. " + (props.price ? props.price : "Price")}
        </div>
      </div>
    </Card>
  );
  return touch ? (
    <Link href={props.viewLink ? props.viewLink : ""}>{tmpCard}</Link>
  ) : (
    tmpCard
  );
};
export { CardTypeOne };

const CardTypeTwo = (props) => {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(is_touch_enabled());
  }, []);
  const tmpCard = (
    <Card
      hoverable
      size={props.size ? props.size : "small"}
      key={props.mykey}
      className="relative group shadow-md"
      style={{
        width: props.width ? props.width : 300,
      }}
      cover={
        <div
          className="h-52 w-max overflow-hidden p-4"
          style={{
            height: props.xs
              ? deviceSizeResponse(
                  props.xs,
                  props.base,
                  props.sm,
                  props.md,
                  props.lg,
                  props.xl
                )
              : 300,
          }}
        >
          <AntImage
            alt="Image"
            className="group-hover:opacity-60 transition-opacity"
            height={"100%"}
            width={"100%"}
            preview={!touch}
            src={
              props.src
                ? props.src
                : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          />
        </div>
      }
      actions={[
        <ShoppingCartOutlined
          style={{
            fontSize: "18px",
          }}
          className="transition-all ease-in-out hover:scale-110 duration-1000"
          key="buy"
          onClick={props.onclick1 ? props.onclick1 : () => {}}
        />,
        <HeartTwoTone
          style={{
            fontSize: "18px",
          }}
          twoToneColor="#eb2f96"
          className="transition-all ease-in-out hover:scale-110 duration-1000"
          key="wish"
          onClick={props.onclick2 ? props.onclick2 : () => {}}
        />,
      ]}
    >
      <div>
        <div className="text-sm font-medium text-black line-clamp-1 group-hover:opacity-60 transition-opacity">
          {props.title ? props.title : "Card title"}
        </div>
        <div className="text-xs text-slate-400 break-words line-clamp-2 mt-1 group-hover:opacity-60 transition-opacity">
          {props.desc ? props.desc : "This is the description"}
        </div>
      </div>
      {touch ? null : (
        <Link href={props.viewLink ? props.viewLink : ""}>
          <ButtonOne onClick={props.onclick3 ? props.onclick3 : () => {}}>
            View
          </ButtonOne>
        </Link>
      )}

      <div className="w-full flex justify-between mt-3">
        <div className="text-base sm:text-lg text-pink-500 font-semibold">
          {"Rs. " + (props.price ? props.price : "Price")}
        </div>
        <div className="text-base">
          {props.rating ? props.rating : "Rating"}
          <StarFilled className="text-yellow-400 ms-1" />
        </div>
      </div>
    </Card>
  );
  return touch ? (
    <Link href={props.viewLink ? props.viewLink : ""}>{tmpCard}</Link>
  ) : (
    tmpCard
  );
};
export { CardTypeTwo };

const ProductCardGrid = (props) => {
  const [touch, setTouch] = useState(false);
  useEffect(() => {
    setTouch(is_touch_enabled());
  }, []);
  const tmpCard = (
    <Card
      key={props.mykey}
      size={props.size ? props.size : "small"}
      style={{
        width: props.width ? props.width : "",
      }}
      hoverable
      bordered={false}
      className="relative group shadow-2xl"
      cover={
        <div
          className="h-52 w-max overflow-hidden p-1"
          style={{
            height: props.xs
              ? deviceSizeResponse(
                  props.xs,
                  props.base,
                  props.sm,
                  props.md,
                  props.lg,
                  props.xl
                )
              : "",
          }}
        >
          <AntImage
            alt="Image"
            className="group-hover:opacity-60 transition-opacity"
            height={"100%"}
            width={"100%"}
            preview={!touch}
            src={
              props.src
                ? props.src
                : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          />
        </div>
      }
    >
      <div>
        <div className="text-sm font-medium text-black break-words line-clamp-1 group-hover:opacity-60 transition-opacity">
          {props.title ? props.title : "Card title"}
        </div>
        <div className="text-[13px] text-slate-500 break-words line-clamp-2 mt-1">
          {props.desc ? props.desc : "This is the description"}
        </div>
      </div>
      {touch ? null : (
        <>
          <HeartOutlined
            style={{
              fontSize: "15px",
            }}
            className="bg-white hover:text-pink-400 absolute top-3 right-3 hidden group-hover:block rounded-full p-[6px]"
            key="wish"
            onClick={props.onclick1 ? props.onclick1 : () => {}}
          />
          <Link href={props.viewLink ? props.viewLink : ""}>
            <ButtonOne onClick={props.onclick2 ? props.onclick2 : () => {}}>
              View
            </ButtonOne>
          </Link>
        </>
      )}
      <div className="w-full flex flex-col justify-between mt-3">
        <div className="text-base sm:text-lg text-pink-500 font-semibold">
          {"Rs. " + (props.price ? props.price : "Price")}
        </div>
        <div className="text-xs">
          {props.rating ? props.rating : "Rating"}
          <StarFilled className="text-yellow-400 ms-1" />
        </div>
      </div>
    </Card>
  );
  return touch ? (
    <Link href={props.viewLink ? props.viewLink : ""}>{tmpCard}</Link>
  ) : (
    tmpCard
  );
};
export { ProductCardGrid };

const ProductCardList = (props) => {
  return (
    <Card
      size={props.size ? props.size : "small"}
      style={{
        width: props.width ? props.width : "",
      }}
      hoverable
      bordered={false}
      className="relative group flex custom_card_list my-5 overflow-hidden"
      cover={
        <div
          className="overflow-hidden"
          style={{
            height: props.xs
              ? deviceSizeResponse(
                  props.xs,
                  props.base,
                  props.sm,
                  props.md,
                  props.lg,
                  props.xl
                )
              : "",
            width: props.xs
              ? deviceSizeResponse(
                  props.xs,
                  props.base,
                  props.sm,
                  props.md,
                  props.lg,
                  props.xl
                )
              : "",
            borderBottomLeftRadius: 8,
          }}
        >
          <AntImage
            alt="Image"
            className="group-hover:opacity-60 transition-opacity"
            height={"100%"}
            width={"100%"}
            src={
              props.src
                ? props.src
                : "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            }
          />
        </div>
      }
    >
      <div className="absolute top-3 right-3">
        <HeartTwoTone
          style={{
            fontSize: "16px",
          }}
          twoToneColor="#eb2f96"
          className="transition-all ease-in-out hover:scale-125 duration-500 ms-10"
          key="wish"
          onClick={props.onclick2 ? props.onclick2 : () => {}}
        />
      </div>
      <Link
        href={props.viewLink ? props.viewLink : ""}
        className="hover:text-current flex flex-col h-full pt-5"
      >
        <div>
          <div className="text-sm sm:text-base font-medium text-black break-words line-clamp-2 group-hover:opacity-60 transition-opacity">
            {props.title ? props.title : "Card title"}
          </div>
          <div className="text-xs sm:text-sm text-slate-500 break-words line-clamp-2 sm:line-clamp-3">
            {props.desc ? props.desc : "This is the description"}
          </div>
        </div>
        <div className="flex justify-between items-end mt-auto">
          <div className="text-sm sm:text-lg font-semibold text-pink-500">
            {"Rs. " + (props.price ? props.price : "Price")}
          </div>
          <div className="text-xs sm:text-sm">
            {props.rating ? props.rating : "Rating"}
            <StarFilled className="text-yellow-400 ms-1" />
          </div>
        </div>
      </Link>
    </Card>
  );
};
export { ProductCardList };

const ProductDetailCard = (props) => {
  return (
    <div className="shadow-lg w-[60%] flex">
      <div className="w-1/2 bg-slate-700">
        <Carousel className="h-96">
          {props.images?.map((ele, index) => {
            return (
              <div className="flex h-full w-full" key={index}>
                <Image src={ele} alt={"Product Image"} fill={true} />
              </div>
            );
          })}
        </Carousel>
      </div>
      <div className="w-1/2 bg-slate-50">
        <div className="flex flex-col w-full p-10">
          <div className="text-2xl font-semibold text-indigo-900">
            {props.title ? props.title : "Card title"}
          </div>

          <div className="text-sm mt-3">
            {props.rating ? props.rating : "Rating"}
            <StarFilled className="text-yellow-400 ms-1" />
          </div>
          <div className="text-lg font-semibold text-pink-500 mt-3">
            {"Rs. " + (props.price ? props.price : "Price")}
          </div>
          <div className="mt-3">
            {"Category:" + (props.category ? props.category : "Category")}
          </div>
          <div className="mt-3">
            {"Tags:" + (props.tags ? props.tags : "Tags")}
          </div>
          <div className="flex mt-3">Share</div>
        </div>
      </div>
    </div>
  );
};
export { ProductDetailCard };
