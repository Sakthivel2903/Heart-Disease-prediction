const firebaseConfig = {
  apiKey: "AIzaSyDVqUF3CS7K4iJmoFT0oTKTcte8Ov8ihpM",
  authDomain: "integrated-web-application.firebaseapp.com",
  databaseURL: "https://integrated-web-application-default-rtdb.firebaseio.com",
  projectId: "integrated-web-application",
  storageBucket: "integrated-web-application.appspot.com",
  messagingSenderId: "814789377522",
  appId: "1:814789377522:web:1ad04bd7cf6b479243bf6b",
  measurementId: "G-SPPP00VWS2"
};
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth();
  
  
  // Function to handle user sign-up
  function handleSignUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
  
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed up successfully
        const user = userCredential.user;
        console.log(`User signed up: ${user.email}`);
  
        // Define project details
        const projectName = "Your Project Name";
        const projectDescription = "Your Project Description";
  
        // Configure SMTP email settings and send welcome email
        Email.send({
          SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812", // Replace with your SMTPJS API key or token
          Host: "smtp.elasticemail.com", // Replace with your SMTP server hostname
          Username: "harikishore651@gmail.com", // Your email address
          Password: "CF02FB174E9737254670C18A2318A696CAE5", // Your email password or API key
          Port: 2525, // Use the appropriate port for your SMTP server (587 for TLS, 465 for SSL)
          To: email, // Recipient's email address
          From: "harikishore651@gmail.com", // Your email address
          Subject: "WELCOME!",
          Body: "Welcome to Cardiovascular Forecasting Web Application"
      }).then(
          message => console.log(`Email sent successfully to ${email}:`, message)
      ).catch(
          error => console.error(`Email error for ${email}:`, error)
      );
  
        // You can redirect to a dashboard or another page here
      })
      .catch((error) => {
        // Handle sign-up errors
        console.error(error.message);
      });
  }
  
  
  // Function to handle user sign-in
  function handleSignIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
  
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // User signed in successfully
        const user = userCredential.user;
        window.location.href = "http://localhost:8501";
      })
      .catch((error) => {
        // Handle sign-in errors
        console.error(error.message);
      });
  }
  
  // Event listeners for the sign-up and sign-in buttons
  document.getElementById('signup-button').addEventListener('click', handleSignUp);
  document.getElementById('signin-button').addEventListener('click', handleSignIn);