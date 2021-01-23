import React from "react";
import photo from "./114203993.jpg";
import { Card, Avatar } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Meta } = Card;
const MyCard = ({ item }) => {
  let { productImg } = item;
  return (
    <div>
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt="example" src={productImg[0].img.image} />}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
        ]}
      >
        <Meta
          title="ست لباس بچگانه ام کا سی طرح یلدا"
          description="۸۸,۰۰۰ تومان"
        />
      </Card>
    </div>
  );
};

export default MyCard;
