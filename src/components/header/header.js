"use client";
import css from "./header.css";
import { Dropdown, Space, Collapse, Input } from "antd";
import {
  CaretDownOutlined,
  UserOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
  MailOutlined,
  PhoneOutlined,
  MenuOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import Link from "next/link";
const { Search } = Input;
const onChange = (key) => {
  console.log(key);
};
const onSearch = (value, _e, info) => console.log(info?.source, value);

const items = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
const items1 = [
  {
    key: "0",
    children: (
      <div className="flex flex-col text-white">
        <div className="mb-1 font-medium w-full bg-violet-900 rounded-lg py-2 px-20 text-center">
          <a href="mailto:sameedfayiz@gmail.com">
            <Space>
              <MailOutlined />
              sameedfayiz@gmail.com
            </Space>
          </a>
        </div>
        <div className="my-1 font-medium w-full bg-violet-900 rounded-lg py-2 px-20 text-center">
          <a href="tel:03308489575">
            <Space>
              <PhoneOutlined />
              0330 8489575
            </Space>
          </a>
        </div>
        <div className="my-1 font-medium w-full bg-violet-900 rounded-lg py-2 px-20 text-center">
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                English
                <CaretDownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="my-1 font-medium w-full bg-violet-900 rounded-lg py-2 px-20 text-center">
          <Dropdown menu={{ items }} placement="bottom" arrow>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                USD
                <CaretDownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
        <div className="my-1 font-medium w-full bg-violet-900 rounded-lg py-2 px-20 text-center">
          <Link href={""}>
            <Space>
              Login
              <UserOutlined />
            </Space>
          </Link>
        </div>
        <div className="my-1 font-medium w-full bg-violet-900 rounded-lg py-2 px-20 text-center">
          <Link href={""}>
            <Space>
              Wishlist
              <HeartOutlined />
            </Space>
          </Link>
        </div>
        <div className="mt-1 font-medium w-full bg-violet-900 rounded-lg py-2 px-20 text-center">
          <Link href={""}>
            <Space>
              Cart
              <ShoppingCartOutlined className="text-lg" />
            </Space>
          </Link>
        </div>
      </div>
    ),
  },
];
const items2 = [
  {
    key: "1",
    label: (
      <div className="tracking-wide text-2xl ms-5 sm:text-3xl font-bold">
        <Link href={"/"}>
          <Space>Hekto</Space>
        </Link>
      </div>
    ),
    children: (
      <div className="flex flex-col">
        <div className="my-1 font-medium">
          <Link href={"/"}>
            <Space>Home</Space>
          </Link>
        </div>
        <div className="my-1 font-medium">
          <Link href={""}>
            <Space>Pages</Space>
          </Link>
        </div>
        <div className="my-1 font-medium">
          <Link href={"/pages/shop_grid"}>
            <Space>Products</Space>
          </Link>
        </div>
        <div className="my-1 font-medium">
          <Link href={""}>
            <Space>Blogs</Space>
          </Link>
        </div>
        <div className="my-1 font-medium">
          <Link href={""}>
            <Space>Shop</Space>
          </Link>
        </div>
        <div className="my-1 font-medium">
          <Link href={""}>
            <Space>Contact</Space>
          </Link>
        </div>
        <div className="mt-1 font-medium">
          <Search
            style={{
              background: "#4095ff",
              borderRadius: 7,
            }}
            allowClear
            enterButton
            size="large"
            onSearch={onSearch}
          />
        </div>
      </div>
    ),
  },
];
const HeaderComponent = (props) => {
  return (
    <div className="w-full">
      <Collapse
        bordered={false}
        size="small"
        className="block md:hidden bg-purple-600 rounded-none text-sm"
        items={items1}
        onChange={onChange}
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? (
            <CloseOutlined style={{ fontSize: "20px", color: "white" }} />
          ) : (
            <CaretDownOutlined style={{ fontSize: "20px", color: "white" }} />
          )
        }
      />
      <div className="hidden md:flex justify-around bg-purple-600 text-white text-sm font-light py-2 md:px-4">
        <div className="grid gap-4 grid-cols-2">
          <a href="mailto:sameedfayiz@gmail.com">
            <Space>
              <MailOutlined />
              sameedfayiz@gmail.com
            </Space>
          </a>
          <a href="tel:03308489575">
            <Space>
              <PhoneOutlined />
              0330 8489575
            </Space>
          </a>
        </div>
        <div className="flex space-x-6 ">
          <div className="">
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  English
                  <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="">
            <Dropdown menu={{ items }} placement="bottom" arrow>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  USD
                  <CaretDownOutlined />
                </Space>
              </a>
            </Dropdown>
          </div>
          <div className="">
            <Link href={""}>
              <Space>
                Login
                <UserOutlined />
              </Space>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <Space>
                Wishlist
                <HeartOutlined />
              </Space>
            </Link>
          </div>
          <div className="">
            <Link href={""}>
              <Space>
                <ShoppingCartOutlined className="text-lg" />
              </Space>
            </Link>
          </div>
        </div>
      </div>
      <nav className="bg-slate-50 md:text-[15px] md:flex md:justify-between lg:justify-evenly md:py-5 md:px-2 lg:px-12 xl:px-16 md:items-center">
        <Collapse
          bordered={false}
          size="large"
          className="block md:hidden bg-slate-50"
          items={items2}
          onChange={onChange}
          expandIconPosition="end"
          expandIcon={({ isActive }) =>
            isActive ? (
              <CloseOutlined style={{ fontSize: "25px" }} />
            ) : (
              <MenuOutlined
                style={{
                  fontSize: "25px",
                }}
              />
            )
          }
        />
        <div className="hidden md:flex space-x-6 items-center me-5">
          <div className="tracking-wide text-3xl font-bold md:me:5 lg:me-10 xl:me-20">
            <Link href={"/"}>
              <Space>Hekto</Space>
            </Link>
          </div>
          <div className="font-medium">
            <Link href={"/"}>
              <Space>Home</Space>
            </Link>
          </div>
          <div className="font-medium">
            <Link href={""} className="cursor-text">
              <Space>Pages</Space>
            </Link>
          </div>
          <div className="font-medium">
            <Link href={"/pages/shop_grid"}>
              <Space>Products</Space>
            </Link>
          </div>
          <div className="font-medium">
            <Link href={""}>
              <Space>Blogs</Space>
            </Link>
          </div>
          <div className="font-medium">
            <Link href={""}>
              <Space>Shop</Space>
            </Link>
          </div>
          <div className="font-medium">
            <Link href={""}>
              <Space>Contact</Space>
            </Link>
          </div>
        </div>
        <div className="hidden md:flex">
          <Search allowClear enterButton size="large" onSearch={onSearch} />
        </div>
      </nav>
    </div>
  );
};
export default HeaderComponent;
