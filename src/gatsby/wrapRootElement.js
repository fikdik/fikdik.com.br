import React from "react"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "~/styles/index.css"

export const wrapRootElement = ({ element }) => (
  <>
    <ToastContainer autoClose={3000} />
    {element}
  </>
)
