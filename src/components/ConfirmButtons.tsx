import { useDispatch } from "react-redux";
import { setCurrentStage } from "../redux/image-reducer";
import { Button, ConfigProvider } from "antd";
import { CloseOutlined, CloudUploadOutlined } from "@ant-design/icons";

const ConfirmButtonsC = () => {
    const dispatch = useDispatch()
    return (
        <>
            <div className="flex mt-2">
                <ConfigProvider theme={{
                    components: {
                        Button: {
                            colorPrimary: 'rgba(107, 114, 128, 0.9)',
                            colorPrimaryHover: 'rgb(107, 114, 128)',
                            colorPrimaryActive: 'rgb(74, 80, 91)',
                            colorPrimaryBorder: 'rgb(107, 114, 128)',
                        }
                    }
                }}>
                    <Button type="primary" icon={<CloudUploadOutlined />} className="mr-[10px]" onClick={() => dispatch(setCurrentStage('Upload'))}>
                        Upload
                    </Button>
                    <Button type="primary" icon={<CloseOutlined />} onClick={() => dispatch(setCurrentStage('Input'))}>
                        Cancel
                    </Button>

                </ConfigProvider>
            </div >
        </>
    );
}
export default ConfirmButtonsC;