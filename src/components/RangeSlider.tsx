import { ConfigProvider, InputNumber, Slider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setQualityValue } from "../redux/image-reducer";


const RangeSliderC = () => {
    const dispatch = useDispatch()
    const { qualityValue } = useSelector((state: any) => state.image)

    const setQuality = (newValue: any) => {
        dispatch(setQualityValue(newValue))
    };

    return (
        <div className="flex w-full justify-center no-transition">
            <ConfigProvider theme={{
                components: {
                    Slider: {
                        handleSizeHover: 10,
                        handleLineWidthHover: 2,
                        handleColor: '#6b7280',
                        trackBg: '#6b7280',
                        dotActiveBorderColor: '#6b7280',
                        handleActiveColor: '#6b7280',
                        trackHoverBg: '#6b7280',
                        colorPrimaryBorderHover: '#6b7280'
                    },
                    InputNumber: {
                        controlHeight: 15,
                        controlWidth: 57,
                        paddingSM: 6,
                        hoverBorderColor: "#6b7280",
                        activeBorderColor: "rgb(74, 80, 91)",
                        handleHoverColor: "#6b7280"
                    }
                },
            }}>
                <Slider
                    min={1}
                    max={95}
                    value={qualityValue}
                    onChange={setQuality}
                    className="w-1/2 mr-[20px]"
                    handleStyle={{}}
                    tooltip={{ formatter: null }}
                />
                <InputNumber
                    min={1}
                    max={95}
                    value={qualityValue}
                    onChange={setQuality}
                    className="h-[30px]"
                />
            </ConfigProvider>
        </div>
    );
}

export default RangeSliderC;