"use client";
import { ProductCardList } from "@/components/card/card";
import { Col, Row } from "antd";
import { useState, useEffect } from "react";
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
    <div className="min-h-screen bg-white w-full pb-32">
      <Row>
        <Col className="min-h-screen" xs={1} sm={2} md={2} lg={3} xl={6}></Col>
        <Col className="min-h-screen" xs={22} sm={20} md={20} lg={18} xl={12}>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            productData.products.map((data) => {
              return (
                <ProductCardList
                  key={data.id}
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
                  viewLink={`./product_details/${data.id}`}
                  onclick1={""}
                  onclick2={""}
                ></ProductCardList>
              );
            })
          )}
        </Col>
        <Col className="min-h-screen" xs={1} sm={2} md={2} lg={3} xl={6}></Col>
      </Row>
    </div>
  );
}
