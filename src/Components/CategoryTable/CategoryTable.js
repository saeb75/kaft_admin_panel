import { Table, Space, Button } from "antd";
import Column from "antd/lib/table/Column";
import React, { useEffect, useState } from "react";
import MyModal from "../Modal/MyModal";
import { useDispatch, useSelector } from "react-redux";
import { getListCategory } from "../../Action/CategoryAction";
import "./style.css";
import AddCategoryForm from "../AddCategoryForm/AddCategoryForm";
import { render } from "@testing-library/react";

const CategoryTable = ({ category }) => {
  const [updateCategory, setUpdateCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleUpdateClose = () => {
    setUpdateCategory(false);
  };
  const showUpdateModal = (record) => {
    setUpdateCategory(true);

    setSelectedCategory(record);
  };

  return (
    <div>
      <div className="userContainer">
        <Table dataSource={category.categories}>
          <Column title="نام" dataIndex="name" key="name" />
          <Column title="اسلاگ" dataIndex="slug" key="slug" />
          <Column
            title="دسته مادر"
            render={(text, record) => {
              return record.parentId ? record.parentId.name : "";
            }}
            key="email"
          />

          <Column
            title="اکشن"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <a onClick={() => showUpdateModal(record)}>آپدیت</a>
                <a>حذف</a>
              </Space>
            )}
          />
        </Table>
        <MyModal
          open={updateCategory}
          modalTitle="آپدیت دسته"
          width={1000}
          footer={[]}
          handleCancel={handleUpdateClose}
        >
          <AddCategoryForm
            category={category.categories}
            updatedCategory={selectedCategory}
            handleCancel={handleUpdateClose}
          />
        </MyModal>
      </div>
    </div>
  );
};

export default CategoryTable;
