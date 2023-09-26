"use client";
import css from "./card.css";
import { Avatar, Card, Image, Button } from "antd";
import {
  ShoppingCartOutlined,
  HeartTwoTone,
  StarFilled,
  HeartOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ButtonOne } from "../button";
const { Meta } = Card;

const ProductCard = (props) => {
  return (
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
          style={{ height: props.height ? props.height : 300 }}
        >
          <Image
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
      <Link href={props.viewLink ? props.viewLink : ""}>
        <ButtonOne onClick={props.onclick3 ? props.onclick3 : () => {}}>
          View
        </ButtonOne>
      </Link>
      <div className="w-full flex justify-between mt-3">
        <div>{props.price ? props.price : "Price"}</div>
        <div>
          {props.rating ? props.rating : "Rating"}
          <StarFilled className="text-yellow-400 ms-1" />
        </div>
      </div>
    </Card>
  );
};
export { ProductCard };

const CardTypeOne = (props) => {
  return (
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
          className="h-44 w-max overflow-hidden p-4 pb-0"
          style={{ height: props.height ? props.height : "" }}
        >
          <Image
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
      <Link href={props.viewLink ? props.viewLink : ""}>
        <ButtonOne onClick={props.onclick1 ? props.onclick1 : () => {}}>
          View
        </ButtonOne>
      </Link>
      <div className="w-full flex justify-between mt-3">
        <div className="line-clamp-1">
          <p className="text-blue-800 text-xs font-medium underline decoration-2 decoration-gray-400 underline-offset-2">
            {props.title ? props.title : "Title"}
          </p>
        </div>
        <div className="text-blue-800 text-xs font-medium">
          {props.price ? props.price : "Price"}
        </div>
      </div>
    </Card>
  );
};
export { CardTypeOne };

const ProductCardList = (props) => {
  return (
    <Card
      key={props.mykey}
      size={props.size ? props.size : "small"}
      style={{
        width: props.width ? props.width : "",
      }}
      hoverable
      bordered={false}
      className="relative group shadow-2xl my-ant-card"
      cover={
        <div
          className="h-52 w-max overflow-hidden p-1"
          style={{ height: props.height ? props.height : "" }}
        >
          <Image
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
      <div className="w-full flex flex-col items-center">
        <div className="line-clamp-1">
          <p className="text-blue-800 text-base font-bold">
            {props.title ? props.title : "Title"}
          </p>
        </div>
        <div className="text-blue-800 text-sm">
          {props.price ? props.price : "Price"}
        </div>
      </div>
    </Card>
  );
};
export { ProductCardList };
