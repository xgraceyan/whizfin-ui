import React from "react";
import { ColorRing, InfinitySpin, Oval } from "react-loader-spinner";

function LoadingScreen() {
  return (
    <div id="loading-screen" className="w-screen bg-secondary">
      <Oval
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        wrapperClass="blocks-wrapper"
        color="#48624c"
        secondaryColor="#7b9784"
        // colors={["#48624c", "#48624c", "#48624c", "#48624c", "#48624c"]}
      />
    </div>
  );
}

export default LoadingScreen;
