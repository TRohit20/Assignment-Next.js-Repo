'use client'

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

export default function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

  return (<Unity 
  unityProvider={unityProvider}
  style={{width:1200, height:600,border:"solid black 10px"}}
  />);
}
