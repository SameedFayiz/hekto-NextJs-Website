"use client";
import { ProductCardList } from "@/app/components/card/card";
import { Col, Row } from "antd";
import { useState, useEffect, Suspense } from "react";
import Loading from "../shop_list/loading";

export default function Page() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { cache: "no-cache" })
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
              productData.map((data) => {
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
                      height={250}
                      src={data.image}
                      title={data.title}
                      price={data.price}
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
