import { Modal } from "antd";
import React, { memo } from "react";

interface IProps {
  open: boolean;
  setOpen: any;
}

const ModalEditDetailCategory = ({ open, setOpen }: IProps) => {
  return (
    <Modal
      title="Chỉnh sửa thông tin"
      centered
      open={open}
      onOk={() => setOpen(false)}
      onCancel={() => setOpen(false)}
      width={1000}
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </Modal>
  );
};

export default ModalEditDetailCategory;
