import { Card, Col, Pagination, Row } from "antd";
import React, { useEffect } from "react";
import MainLayout from "../../Components/MainLayout/MainLayout";
import MyCard from "../../Components/Card/Card";
import { getProducts } from "../../Action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
const AllProduct = () => {
  const handleChage = (value) => {
    dispatch(getProducts(value));
  };
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  let { totalPage, products } = product;
  console.log({ totalPage, products });
  return (
    <MainLayout>
      <Row>
        {products &&
          products.map((item, index) => {
            return (
              <Col
                span={6}
                lg={6}
                s={24}
                xs={24}
                md={12}
                key={index}
                style={{
                  marginBottom: 15,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <MyCard item={item} />
              </Col>
            );
          })}
      </Row>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Pagination
          defaultCurrent={1}
          total={totalPage * 10}
          onChange={handleChage}
        />
      </div>
    </MainLayout>
  );
};

export default AllProduct;
