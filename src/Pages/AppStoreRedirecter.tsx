import React, { useEffect } from "react";
import { Routes, Route, useParams } from "react-router-dom";

export default function AppStoreRedirecter() {
  let { IOS_LINK, ANDROID_LINK } = useParams();
  function detectMobileOS() {
    const userAgent = navigator.userAgent;
    if (/android/i.test(userAgent)) {
      return "Android";
    } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      return "iOS";
    } else {
      return "Unknown";
    }
  }
  useEffect(() => {
    console.log(IOS_LINK);
    console.log(ANDROID_LINK);
    if (detectMobileOS() === "iOS") {
      window.location.replace(new URL(IOS_LINK ?? ""));
    } else if (detectMobileOS() === "Android") {
      window.location.replace(new URL(ANDROID_LINK ?? ""));
    } else {
      window.location.replace(new URL("https://quinnpatwardhan.com"));
    }
  }, []);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <h1>Redirect in Progress</h1>
    </div>
  );
}
