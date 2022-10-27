import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Axios from "axios";

function Request(props) {
  const url = "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth";
  const [data, setData] = useState({
    name: "",
    email: "",
    confirmationEmail: "",
  });
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmationError, setConfirmationError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  function handle(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    // console.log(newData)
  }

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (props.requestPopup === true && !menuRef.current.contains(e.target)) {
        props.setRequestPopup(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  function validate() {
    setErrorMsg("");
    setNameError("");
    setEmailError("");
    setConfirmationError("");
    let nameError = "";
    let emailError = "";
    let confirmationError = "";
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.name.length < 3) {
      nameError = "Must be at least 3 characters long";
    }
    if (!data.name) {
      nameError = "Full name cannot be blank";
    }
    if (regexEmail.test(data.email) === false) {
      emailError = "Please enter a valid email address";
    }
    if (!data.email) {
      emailError = "Email address cannot be blank";
    }
    if (data.email !== data.confirmationEmail) {
      confirmationError = "Email address does not match";
    }
    if (nameError || emailError || confirmationError) {
      setNameError(nameError);
      setEmailError(emailError);
      setConfirmationError(confirmationError);
      return false;
    }
    return true;
  }

  function submit(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      setLoading(true);
      Axios.post(url, {
        name: data.name,
        email: data.email,
      })
        .then((resp) => {
          if (resp.status === 200) {
            props.setRequestPopup(false);
            props.setConfirmationPopup(true);
            data.name = "";
            data.email = "";
            data.confirmationEmail = "";
          } else {
            console.log(resp);
          }
        })
        .catch((error) => {
          if (error.response) {
            // console.log(error.response.data);
            setErrorMsg(JSON.stringify(error.response.data.errorMessage));
          }
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  return props.requestPopup ? (
    <div className="popup-request">
      <div className="popup-request-inner" ref={menuRef}>
        <h3>Request an invite</h3>
        <hr className="hr-small"></hr>
        <form onSubmit={(e) => submit(e)}>
          <input
            onChange={(e) => handle(e)}
            id="name"
            value={data.name}
            placeholder="Full name"
            type="text"
          ></input>
          {nameError ? <label>{nameError}</label> : ""}
          <input
            onChange={(e) => handle(e)}
            id="email"
            value={data.email}
            placeholder="Email"
            type="text"
          ></input>
          {emailError ? <label>{emailError}</label> : ""}
          <input
            onChange={(e) => handle(e)}
            id="confirmationEmail"
            placeholder="Confirm email"
            type="text"
          ></input>
          {confirmationError ? <label>{confirmationError}</label> : ""}
          <button type="submit" className="button-send" disabled={loading}>
            {!loading && <span>Send</span>}
            {loading && <span>Sending. please wait...</span>}
          </button>
          {errorMsg ? (
            <label>
              <i>{errorMsg}</i>
            </label>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Request;
