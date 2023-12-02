import { useSelector } from "react-redux";
import ImageInputC from "./ImageInput";
import ConfirmInputC from "./ConfirmInput";
import UploadC from "./Upload";
import OutputC from "./Output";

const MainC = () => {
    return (
        <div className="flex items-center justify-center w-[345px] mx-auto">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-500 border-dashed rounded-lg cursor-pointer dark:border-[#8f8d8de0]">
                <RenderCurrentStage />
            </label>
        </div >
    );
}

const RenderCurrentStage = () => {
    const { currentStage } = useSelector((state: any) => state.image)
    switch (currentStage) {
        case 'Input':
            return <ImageInputC />
        case 'Confirm':
            return <ConfirmInputC />
        case 'Upload':
            return <UploadC />
        case 'Output':
            return <OutputC />
    }
}

export default MainC;