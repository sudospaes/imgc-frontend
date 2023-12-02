import { useSelector } from "react-redux";
import prettyBytes from "pretty-bytes";

const ImageInfoC = () => {
    const { imageURL, imageName, imageSize, imageWidth, imageHeight, currentStage, outputSize } = useSelector((state: any) => state.image)

    return (
        <>
            <img src={imageURL} className='h-[85px]' style={{ borderRadius: '5px' }} />
            <p className="text-xs mt-[10px] dark:text-[#b3b3b3]">"{imageName}": {`${imageWidth}*${imageHeight}`}</p>
            <p className="text-xs mb-[10px] dark:text-[#b3b3b3]">~{prettyBytes(imageSize)}{currentStage == 'Output' ? ` -> ~${prettyBytes(outputSize)}` : ''}</p>
        </>
    );
}

export default ImageInfoC;