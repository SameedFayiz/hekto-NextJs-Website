"use client";
import Link from "next/link";
import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";

const breadcrumbNameMap = {
  "/pages": "Pages",
  "/pages/shop_grid": "Shop Grid",
  "/pages/shop_list": "Shop List",
  "/pages/product_details": "Product Details",
};
const BreadCrumbComponent = () => {
  const textClass = `text-sm md:text-lg font-medium`;
  const pathname = usePathname();
  const pathSnippets = pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return {
      key: url,
      title:
        url === "/pages/product_details" ? (
          <p className={`${textClass} text-pink-500`}>
            {breadcrumbNameMap[url]}
          </p>
        ) : (
          <Link href={url}>
            <p
              className={`${textClass} ${
                pathname === url ? "text-pink-500" : ""
              }`}
            >
              {breadcrumbNameMap[url]}
            </p>
          </Link>
        ),
    };
  });
  const breadcrumbItems = [
    {
      title: (
        <Link href="/">
          <p className={textClass}>Home</p>
        </Link>
      ),
      key: "home",
    },
    {
      title: <p className={textClass}>Pages</p>,
      key: "/pages",
    },
  ].concat(
    extraBreadcrumbItems.filter((ele) => {
      if (ele.key != "/pages" && !ele.key.includes("/pages/product_details/")) {
        return ele;
      }
    })
  );
  return (
    <div className="bg-gray-100 py-12 sm:py-16 md:py-20 px-[12%] md:px-[14%] ">
      <h1 className="text-black text-xl sm:text-2xl md:text-3xl font-bold tracking-wide mb-2">
        {breadcrumbNameMap[pathname]}
      </h1>
      <Breadcrumb
        items={breadcrumbItems}
        separator={<p className={textClass}>{">"}</p>}
      />
    </div>
  );
};
export default BreadCrumbComponent;
