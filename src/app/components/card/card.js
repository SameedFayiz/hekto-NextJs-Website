"use client";
import css from "./card.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import is_touch_enabled from "@/app/api/touchDetect";
import { deviceSizeResponse } from "@/app/api/winDimension";
import { Avatar, Card, Image } from "antd";
import { ButtonOne } from "../button";
import {
  ShoppingCartOutlined,
  HeartTwoTone,
  StarFilled,
  HeartOutlined,
} from "@ant-design/icons";
// import Image from "next/image"
const { Meta } = Card;

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
          <Image
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
          <Image
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
      <Meta
        avatar={
          props.avaSrc ? (
            <Avatar
              className="group-hover:opacity-60 transition-opacity"
              src={
                props.avaSrc === "default"
                  ? "https://xsgames.co/randomusers/avatar.php?g=pixel"
                  : props.avaSrc
              }
            />
          ) : null
        }
        title={
          <div className="text-sm break-words group-hover:opacity-60 transition-opacity">
            {props.title ? props.title : "Card title"}
          </div>
        }
        description={
          <div className="text-xs line-clamp-2 group-hover:opacity-60 transition-opacity">
            {props.desc ? props.desc : "This is the description"}
          </div>
        }
      />
      {touch ? null : (
        <Link href={props.viewLink ? props.viewLink : ""}>
          <ButtonOne onClick={props.onclick3 ? props.onclick3 : () => {}}>
            View
          </ButtonOne>
        </Link>
      )}

      <div className="w-full flex justify-between mt-3">
        <div className="text-pink-500 text-base sm:text-lg font-semibold">
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

const ProductCardList = (props) => {
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
          <Image
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
      <Meta
        title={
          <div className="text-sm beak-words group-hover:opacity-60 transition-opacity">
            {props.title ? props.title : "Card title"}
          </div>
        }
        description={
          <div className="text-[13px] line-clamp-2">
            {props.desc ? props.desc : "This is the description"}
          </div>
        }
      />
      {touch ? null : (
        <>
          <HeartOutlined
            style={{
              fontSize: "15px",
            }}
            className="absolute top-3 right-3 hidden group-hover:block rounded-full bg-white hover:text-pink-400 p-[6px]"
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
        <div className=" text-pink-500 text-base sm:text-lg font-semibold">
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
export { ProductCardList };
