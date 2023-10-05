"use client";

import { Radio, Select } from "antd";
import { UnorderedListOutlined, AppstoreFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const ToolsContainer = ({ children }) => {
  const router = useRouter();
  const [view, setView] = useState("grid");
  useEffect(() => {}, [view]);
  const pathname = usePathname();
  if (!pathname.includes("shop_grid") && !pathname.includes("shop_list")) {
    return <>{children}</>;
  }
  return (
    <>
      <div className="bg-white py-10 sm:py-12 md:py-16 px-[8%] md:px-[14%] block lg:flex justify-between">
        <h1 className="text-blue-900 text-xl font-bold tracking-wide mb-2">
          Ecommerce Accessories & Items
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="my-1 md:my-0 me-4">
            <label
              htmlFor="itemCount"
              className="font-medium text-blue-800 me-2"
            >
              Per page:
            </label>
            <Select
              name="itemCount"
              defaultValue={20}
              style={{
                width: 60,
              }}
              options={[
                {
                  value: 20,
                  label: "20",
                },
                {
                  value: 30,
                  label: "30",
                },
                {
                  value: 40,
                  label: "40",
                },
              ]}
            />
          </div>
          <div className="my-1 md:my-0 me-4">
            <label htmlFor="mySort" className="font-medium text-blue-800 me-2">
              Sort by:
            </label>
            <Select
              name="mySort"
              defaultValue="1"
              style={{
                width: 120,
              }}
              options={[
                {
                  value: "1",
                  label: "Best match",
                },
                {
                  value: "2",
                  label: "Latest",
                },
              ]}
            />
          </div>
          <div className="my-1 md:my-0 me-4">
            <label htmlFor="myView" className="font-medium text-blue-800 me-2">
              View:
            </label>
            <Radio.Group name="myView" defaultValue={view} size="middle">
              <Radio.Button
                value="grid"
                onClick={(e) => {
                  setView(e.target.value);
                  router.push("/pages/shop_grid");
                }}
              >
                <AppstoreFilled />
              </Radio.Button>
              <Radio.Button
                value="list"
                onClick={(e) => {
                  setView(e.target.value);
                  router.push("/pages/shop_list");
                }}
              >
                <UnorderedListOutlined />
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
      {children}
    </>
  );
};
export default ToolsContainer;
