import React from 'react';
// import '../../css/Forgot.css'

const ForgotPassword = () => {
 
  const handleAlert= () => {
    alert("Email has been sent to your mail");
  }
  return (
    
    <div>
     <body>
        <div class="wrapper">
            <div class="container">
            <div class="title-section">
             <h2 class="title">Reset Password</h2>
            <p class="para">enter your mail to send verification code</p> 
            </div>
             <form action=" " class="from">
                <div class="input-group">
                    <label for="" class="label-title">enter your email</label>
                    <input type="email" name="email" placeholder='enter email'></input>
                    <span class="icon">&#9993;</span>
                </div>
                <div class="input-group" >
                    <button class="submit-btn" type="submit" onClick={handleAlert} >send reset email</button>
                    
                </div>
             </form>
            </div>
        </div>
     </body>

     
    </div>
  );
}

export default ForgotPassword;
