import React from "react";
import LoadingOverlay from "react-loading-overlay";
import { useNavigate } from "react-router-dom";
import SpinnerIndicator from "./spinner.gif";

export default function LoadingIndicator(active) {
  const navigate = useNavigate();

  try {
    return (
      <div style={{ backgroundColor: "#fff" }}>
        <LoadingOverlay
          active
          styles={{
            width: "100%",
            height: "100%",
            overflow: active ? "hidden" : "scroll",
            overlay: (base) => ({
              ...base,
              background: "hsl(0deg 0% 100% / 90%)",
              position: "fixed",
              zIndex: 10000,
              right: 0,
            }),
          }}
          spinner={<img src={SpinnerIndicator} alt="loading..." />}
        />
      </div>
    );
  } catch (error) {
    const errorObj = {
      From: "../containers/LoadingIndicator/index",
      Function: "render",
      Message: error.stack,
    };
    sessionStorage.setItem("ErrorObj", JSON.stringify(errorObj));
    navigate("/error_page");
  }
  return "";
}
