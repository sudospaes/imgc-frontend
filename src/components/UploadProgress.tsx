import { ConfigProvider, Progress } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getImage from "../utils/axios-tools"
import { setIsFailed } from "../redux/image-reducer"
import ReuploadPopconfirmC from "./ReuploadPopconfirm";


const UploadProgressC = () => {
    const { isDarkMode } = useSelector((state: any) => state.settings)
    const { imageURL, qualityValue, isFailed } = useSelector((state: any) => state.image)
    const [percentCompleted, setPercentCompleted] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        if (!isFailed) getImage(imageURL, qualityValue, setPercentCompleted, dispatch, setIsFailed)
    }, [isFailed])

    return (
        <ConfigProvider theme={{
            components: {
                Progress: {
                    defaultColor: "rgb(107, 114, 128)",
                    colorText: "rgb(57, 60, 66)",
                    circleTextFontSize: '70%',
                    circleTextColor: isDarkMode ? '#b3b3b3' : ''
                }
            }
        }
        }>
            <Progress type="circle" percent={percentCompleted} size={70} format={() => isFailed ? <ReuploadPopconfirmC /> : 'Uploading'} status={isFailed ? 'exception' : 'normal'} className="mt-2" />
        </ConfigProvider >
    );
}

export default UploadProgressC;