"use client";
import { ProductCardList } from "@/app/components/card/card";
import { Col, Row } from "antd";
import { useState, useEffect, Suspense } from "react";
import Loading from "./loading";

export default function Page() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products", { cache: "no-cache" })
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="min-h-screen bg-white w-full py-32">
      <Row>
        <Col className="min-h-screen" xs={1} sm={2} md={2} lg={3} xl={4}></Col>
        <Col className="min-h-screen" xs={22} sm={20} md={20} lg={18} xl={16}>
          <Row gutter={[32, 16]}>
            {isLoading ? (
              <Loading></Loading>
            ) : (
              productData.products.map((data) => {
                return (
                  <Col
                    key={data.id}
                    className=""
                    xs={12}
                    sm={12}
                    md={8}
                    lg={6}
                    xl={6}
                  >
                    <ProductCardList
                      mykey={data.id}
                      size={""}
                      width={""}
                      xs={140}
                      base={150}
                      sm={200}
                      md={170}
                      lg={160}
                      xl={180}
                      src={data.thumbnail}
                      title={data.title}
                      desc={data.description}
                      price={data.price * 80}
                      rating={data.rating}
                      viewLink={""}
                      onclick1={""}
                      onclick2={""}
                    ></ProductCardList>
                  </Col>
                );
              })
            )}
          </Row>
        </Col>
        <Col className="min-h-screen" xs={1} sm={2} md={2} lg={3} xl={4}></Col>
      </Row>
    </div>
  );
}
