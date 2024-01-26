import { useState, useRef } from "react";
import Button from "./Button";
import '../css/Modal.css';

function Modal() {
  const dialogRef = useRef();
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  // email validation - input
  function handleEmailChange(e) {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("This field is required");
    } else if (!e.target.value.includes("@")) {
      setEmailError("This field must be a valid email address including a @");
    } else {
      setEmailError("");
    }
  }

  // confirmation validation - input
  function handleConfirmChange(e) {
    setConfirmEmail(e.target.value);
    if (e.target.value !== email) {
      setConfirmError("This field must match the email");
    } else {
      setConfirmError("");
    }
  }

  // validation for all - submit
  function handleSubmit(e) {
   // " const handleSubmit = (e) => {" also works!!
    e.preventDefault();

    let isValid = true;
    if (!email) {
        setEmailError("This field is required");
        isValid = false;
    } else if (!email.includes("@")) {
        setEmailError("This field must be a valid email address including a @");
        isValid = false;
    } else {
        setEmailError("");
    }

    if (email !== confirmEmail) {
        setConfirmError("This field must match the email");
        isValid = false;
    } else {
        setConfirmError("");
    }

    // Submit the form if valid
    if (isValid) {
        // print the data in the console
        console.log(`Email: ${email}, Confirm Email: ${confirmEmail}`);
        
        // Clear the data of the form
        setEmail("");
        setConfirmEmail("");
        dialogRef.current.close();
    }
};

  return (
    <>
      <Button type="button" visual="button" aria-label="a button-like button to show the log in interface" onClick={() => dialogRef.current.showModal()}>
        Log In
      </Button>
      <dialog ref={dialogRef}>
        <form class="modal-form" onSubmit={handleSubmit}>
          <h2>* Log In *</h2>
          <div class="form-item register__email register-email">
            <label class="label-email" htmlFor="email">Email: * required:</label>
            <input
              class="input-email"
              name="email"
              id="email"
              type="text"
              value={email}
              onChange={handleEmailChange}
            />
            <span class="register-email__error">{emailError}</span>
          </div>

          <div class="form-item register__confirm register-confirm">
            <label class="label-confirm" htmlFor="confirm">Confirm Email: * required:</label>
            <input
              class="input-confirm"
              name="confirm"
              id="confirm"
              type="text"
              value={confirmEmail}
              onChange={handleConfirmChange}
            />
            <span class="register-confirm__error">{confirmError}</span>
          </div>
          <div className="buttons">
            <Button type="submit" visual="link" aria-label="a link-like button to submit the data" >
              Submit
            </Button>
            <Button type="button" visual="link" aria-label="a link-like button to close the log in interface" onClick={() => dialogRef.current.close()}>
              Close
            </Button>
          </div>
        </form>
      </dialog>
    </>
  );
}

export default Modal;
