document.addEventListener('DOMContentLoaded', function() {
  // Generate random captcha
  function generateCaptcha() {
      let captcha = Math.random().toString(36).substring(2, 8).toUpperCase();
      document.getElementById('captcha').value = captcha;
  }

  // Refresh captcha on button click
  document.getElementById('refreshCaptcha').addEventListener('click', function() {
      generateCaptcha();
  });

  // Initialize captcha
  generateCaptcha();

  // Handle form submission
  document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();

      // Retrieve user input
      let userId = document.getElementById('userId').value;
      let password = document.getElementById('password').value;
      let captchaInput = document.getElementById('captchaInput').value;
      let captcha = document.getElementById('captcha').value;

      // Validate captcha
      if (captchaInput !== captcha) {
          alert('Captcha is incorrect. Please try again.');
          return;
      }

      // Perform further validation or authentication logic here
      // For demonstration, simply alert the user input
      alert('User ID: ' + userId + '\nPassword: ' + password + '\nCaptcha: ' + captcha);

      // Reset form after submission (optional)
      this.reset();
      generateCaptcha();
  });

  // Change submit button color on click
  const submitButton = document.getElementById('submitButton');
  submitButton.addEventListener('click', function() {
      this.classList.add('clicked');
      setTimeout(() => this.classList.remove('clicked'), 300);
  });
});
