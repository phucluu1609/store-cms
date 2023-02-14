import { CheckCircleIcon, ErrorIcon } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ResetNoti } from "./actions";
import "./styles.css";

function Notifications() {
  const dispatch = useDispatch();
  const { status, content } = useSelector(
    (state) => state.notificationsReducer
  );

  useEffect(() => {
    if (status === "success") {
      toast.success(content, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 1300,
        icon: <CheckCircleIcon />,
      });
    } else if (status === "warning") {
      toast.warn(content, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 9000,
        icon: <ErrorIcon />,
      });
    } else if (status === "error") {
      toast.error(content, {
        position: toast.POSITION.BOTTOM_RIGHT,
        autoClose: 9000,
        icon: <ErrorIcon />,
      });
    } else {
      return;
    }
    dispatch(ResetNoti());
  }, [status, content]);

  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Notifications;
