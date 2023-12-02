import { ArrowsAltOutlined, DownloadOutlined, ReloadOutlined } from "@ant-design/icons";
import { Button, ConfigProvider, Image } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStage } from "../redux/image-reducer";
import newInputHandler from '../utils/new-input-handler'

const OutputButtonsC = () => {
    const dispatch = useDispatch()
    const { imageName, imageURL, outputURL } = useSelector((state: any) => state.image)
    const [visiblePreview, setVisiblePreview] = useState(false)
    return (
        <>
            <ConfigProvider theme={{
                components: {
                    Button: {
                        colorPrimary: 'rgba(107, 114, 128, 0.9)',
                        colorPrimaryHover: 'rgb(107, 114, 128)',
                        colorPrimaryActive: 'rgb(74, 80, 91)',
                        colorPrimaryBorder: 'rgb(107, 114, 128)'
                    }
                }
            }}>
                <div className="flex">
                    <a href={outputURL} download={`compressed-${imageName}`}>
                        <Button type="primary" icon={<DownloadOutlined />} className="mr-[10px]">
                            Download
                        </Button>
                    </a>
                    <Button type="primary" icon={<ArrowsAltOutlined />} onClick={() => setVisiblePreview(true)}>
                        Show Here
                    </Button>
                    <Image preview={{ visible: visiblePreview, scaleStep: .2, src: `${outputURL}`, onVisibleChange: () => setVisiblePreview(false) }}></Image>

                </div >
                <Button type="primary" icon={<ReloadOutlined />} className="mt-[10px]" onClick={() => newInputHandler(dispatch, setCurrentStage, imageURL, outputURL)}>Compress another image!</Button>
            </ConfigProvider>
        </>
    );
}

export default OutputButtonsC;