import react, { useEffect, useState } from "react";
// import * as ImagePicker from "expo-image-picker";
// import * as Permissions from "expo-permissions";

export default function Home() {
  const [imgSrc, setImgSrc] = useState(null);
  const [vidSrc, setVidSrc] = useState(null);

  function clickImage(e) {
    console.log(window.URL.createObjectURL(e.target.files[0]), "IMAGE URL");
    setImgSrc(window.URL.createObjectURL(e.target.files[0]));
  }
  function clickVideo(e) {
    console.log(URL.createObjectURL(e.target.files[0]), "video URL");
    setVidSrc(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div>
      <h1>Native camera in browsers</h1>

      <span className="btn">Take photo</span>
      <br />

      <input
        id="cameraFileInput"
        type="file"
        accept="image/*"
        capture="environment"
        onChange={clickImage}
      />
      <br />

      {imgSrc != null ? (
        <img width="320" height="240" alt="" src={imgSrc} />
      ) : (
        ""
      )}
      <br />

      <span className="btn">Take a video</span>
      <br />

      <input
        id="cameraFileInput"
        type="file"
        accept="video/*"
        capture="environment"
        onChange={clickVideo}
      />

      {vidSrc != null ? (
        <video width="320" height="240" controls>
          <source src={vidSrc} type="video/mp4" />
        </video>
      ) : (
        ""
      )}
    </div>
  );
}
