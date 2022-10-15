import React, {useState, useRef} from "react";
import ReCAPTCHA from "react-google-recaptcha";

const App = () => {
  
  const [captchaValidated, setCaptchaValidated] = useState(false);
  const captcha = useRef(null);

  const validateReCaptcha = () => {
    if (captcha.current.getValue()) {
      //console.log("El usuario no es un robot");
      setCaptchaValidated(true);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if(captchaValidated){
      alert("The data has been sent!")
    }else{
      alert("You have to verify your humanity by clicking on the reCaptcha checkbox")
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <ReCAPTCHA
        ref={captcha}
        sitekey="Your site key goes here"
        onChange={validateReCaptcha}
      />
      <button type="submit">Send</button>
    </form>
  );
};
export default App;
