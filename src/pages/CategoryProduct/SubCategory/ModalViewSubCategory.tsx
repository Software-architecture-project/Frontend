import { Modal } from "antd";
import React from "react";
interface IProps {
  open: boolean;
  setOpen: any;
}

const ModalViewSubCategory = ({ open, setOpen }: IProps) => {
  return (
    <Modal
      title="Chi tiết"
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

export default ModalViewSubCategory;
