import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Row, Col, Select } from "antd";
import AddSizeAndQuantity from "../AddSizeAndQuantity/AddSizeAndQuantity";
import ImageUploader from "./ImageUploder/ImageUploader";
import { useDispatch } from "react-redux";
import { addProducts } from "../../Action/ProductAction";

const layout = {};
const tailLayout = {};
const AddProduct = ({ category }) => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    slug: "",
    description: "",
    category: "",
    fileList: [],
    AddSizeAndQuantity: [],
  });
  const dispatch = useDispatch();
  const onFinish = () => {
    let form = new FormData();
    form.append("name", newProduct.name);
    form.append("slug", newProduct.slug);
    form.append("category", newProduct.category);
    form.append("description", newProduct.description);
    if (newProduct.fileList) {
      newProduct.fileList.map((item) => {
        form.append("productImg", item.originFileObj);
      });
    }
    if (newProduct.AddSizeAndQuantity) {
      newProduct.AddSizeAndQuantity.map((item) => {
        let myJson = JSON.stringify({
          size: item.size,
          quantity: item.quantity,
        });
        return form.append("productDetails", myJson);
      });
    }
    dispatch(addProducts(form));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  const handleSelect = (value) => {};
  let handleChange = (name, value) => {
    setNewProduct({ ...newProduct, [name]: value });
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Row>
          <Col lg={24}>
            <Row gutter={16}>
              <Col lg={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>نام</h3>
                    <Input
                      type="text"
                      onChange={(e) => handleChange("name", e.target.value)}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>اسلاگ</h3>
                    <Input
                      onChange={(e) => handleChange("slug", e.target.value)}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col lg={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>توضیحات محصول</h3>
                    <Input.TextArea
                      onChange={(e) =>
                        handleChange("description", e.target.value)
                      }
                    />
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col lg={24}>
            <Row gutter={16}>
              <Col lg={8}>
                <Form.Item className="labelDir">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>دسته مادر</h3>

                    <Select
                      onChange={(value) => handleChange("category", value)}
                    >
                      {category &&
                        category.map((item) => {
                          return <option value={item._id}>{item.name}</option>;
                        })}
                    </Select>
                  </div>
                </Form.Item>
              </Col>

              <Col lg={8}>
                <Form.Item>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <h3>رنگ:</h3>
                    <Select onChange={handleSelect} showSearch={true}></Select>
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col lg={24}>
            <Row gutter={16}>
              <Col lg={12}>
                <AddSizeAndQuantity
                  setNewProduct={setNewProduct}
                  newProduct={newProduct}
                />
              </Col>
              <Col lg={12}>
                <ImageUploader
                  setNewProduct={setNewProduct}
                  newProduct={newProduct}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddProduct;
