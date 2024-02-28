import { useEffect, lazy, Suspense, useState } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header";
import ModalComponent from "./components/ModalComponent";
const Login = lazy(() => import("./pages/auth/Login"));

import { useAuthStore } from "./store/authStore";

import useScanDetection from "use-scan-detection";

function App() {
  const [value, setValue] = useState("");

  useScanDetection({
    onComplete: setValue,
    minLength: 13, // EAN13
  });

  return (
    <>
      {" "}
      <p>{value}</p>
      <button>Click</button>
    </>
  );
}

export default App;
