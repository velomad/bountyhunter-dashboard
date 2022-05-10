import React,{useCallback,useEffect} from 'react'
import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha
  } from 'react-google-recaptcha-v3';
  
const YourReCaptchaComponent = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();

    console.log(executeRecaptcha)
    // Create an event handler so you can call the verification on button click event or form submit
    const handleReCaptchaVerify = useCallback(async () => {
      if (!executeRecaptcha) {
        console.log('Execute recaptcha not yet available');
        return;
      }
  
      const token = await executeRecaptcha('yourAction');
      // Do whatever you want with the token
    }, []);
  
    // You can use useEffect to trigger the verification as soon as the component being loaded
    useEffect(() => {
      handleReCaptchaVerify();
    }, [handleReCaptchaVerify]);
  
    return <button onClick={handleReCaptchaVerify}>Verify recaptcha</button>;
  };

  export default YourReCaptchaComponent