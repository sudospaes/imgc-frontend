import { useDispatch } from "react-redux";
import { setImageURL, setImageName, setImageSize, setImageWidth, setImageHeight, setCurrentStage } from "../redux/image-reducer";

const ImageInputC = () => {
    const dispatch = useDispatch()

    const storeImageInfo = (e: any) => {
        const img = new Image();
        img.src = URL.createObjectURL(e.target.files[0])

        dispatch(setImageURL(img.src))
        dispatch(setImageName(e.target.files[0].name))
        dispatch(setImageSize(e.target.files[0].size))

        img.onload = () => {
            dispatch(setImageWidth(img.width))
            dispatch(setImageHeight(img.height))
        }

        dispatch(setCurrentStage('Confirm'))
    }

    return (
        <>
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-[#919191]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-[#919191]"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-gray-500 dark:text-[#919191]">PNG, JPG or JPEG</p>
            </div>
            <input id="dropzone-file" type="file" className="absolute opacity-0 w-[340px] h-[254px] cursor-pointer" onChange={storeImageInfo} accept="image/png, image/jpeg" />
        </>
    );
}

export default ImageInputC;