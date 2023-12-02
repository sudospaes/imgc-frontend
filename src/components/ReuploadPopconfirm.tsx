import { ExclamationOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Popconfirm } from "antd";
import { useDispatch } from "react-redux";
import { setIsFailed } from "../redux/image-reducer";

const ReuploadPopconfirmC = () => {
  const dispatch = useDispatch()

  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Popconfirm: {
              colorWarning: "rgb(253, 116, 116)"
            }
          }
        }}
      >
        <Popconfirm
          title="Upload Failed!"
          description="Do you want to upload it again?"
          onConfirm={() => { dispatch(setIsFailed(false)) }}
          okText="Yes"
          cancelText="No"
        >
          <Button danger shape="circle" icon={<ExclamationOutlined />} />
        </Popconfirm>
      </ConfigProvider >
    </>
  );
}

export default ReuploadPopconfirmC;