import React, { useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {

  const captcha = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await captcha.current.executeAsync();
    if (token) {
      alert("The data has been sent!");
    } else {
      alert(
        "You were not able to verify your humanity :("
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" />
        <ReCAPTCHA
          ref={captcha}
          sitekey="Here you add your reCaptcha API key"
          size="invisible"
          type="image"// or audio test
          badge="bottomleft" // or you can place it with bottomright and inline
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default App;
