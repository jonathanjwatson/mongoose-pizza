import React, { useContext } from "react";
import LoadingContext from "../../utils/LoadingContext";
import { showMessage } from "../../constants/actions";

const Toast = () => {
  const style = {
    error: {
      color: "#721c24",
      backgroundColor: "#f8d7da",
      borderColor: "#f5c6cb",
    },
    success: {
      color: "#155724",
      backgroundColor: "#d4edda",
      borderColor: "#c3e6cb",
    },
    warning: {},
    info: {},
  };

  const globals = useContext(LoadingContext);

  return (
    <>
      {globals.message && (
        <div className="container">
          <div className="row" style={style[globals.messageStatus]}>
            <div className="col s12">
              <p className="center-align">
                {globals.message}
                <span
                  className="hoverable btn-flat "
                  style={{ float: "right" }}
                  onClick={() => {
                    globals.dispatch({ type: showMessage, message: "" });
                  }}
                >
                  x
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
