import axios from "axios";
import {
  setOutputURL,
  setOutputSize,
  setCurrentStage,
} from "../redux/image-reducer";

function getImage(
  imageURL: any,
  qualityValue: number,
  setPercentCompleted: any,
  dispatch: any,
  setIsFailed: any
) {
  axios.get(imageURL, { responseType: "blob" }).then((getRes) => {
    const formData = new FormData();
    formData.append("image", getRes.data);
    formData.append("quality", qualityValue.toString());
    axios
      .post("http://localhost:3000/upload", formData, {
        onUploadProgress: function (progressEvent) {
          const { loaded, total } = progressEvent;
          if (total) {
            let percentCompleted = Math.round((loaded * 100) / total);
            setPercentCompleted(percentCompleted);
          }
        },
      })
      .then((postRes) => {
        axios.get(postRes.data, { responseType: "blob" }).then((res) => {
          dispatch(setOutputURL(URL.createObjectURL(res.data)));
          dispatch(setOutputSize(res.data.size));
          dispatch(setCurrentStage("Output"));
        });
      })
      .catch(() => dispatch(setIsFailed(true)));
  });
}

export default getImage;
