
$(document).ready(function(){

    $(window).scroll(function(){
      var scroll_top = $(this).scrollTop();

      if (scroll_top > 100) {
        $(".top_header").addClass("active_header");
      }else{
        $(".top_header").removeClass("active_header");
      }
    })

    

    $(".menu_bar").click(function(event){
      event.stopPropagation(); // Prevent the body click event from firing when .menu_bar is clicked
      $(this).toggleClass("active_menu_bar");
      $(".menu_top").toggleClass("active_menu_top");
  });
  
  $(document).on("click", function(event) {
      if (!$(event.target).closest(".menu_bar").length) {
          // If the clicked element is not inside .menu_bar, remove the class from body
          // $("body").removeClass("your_class_to_remove");
          $('.menu_bar').removeClass("active_menu_bar");
          $(".menu_top").removeClass("active_menu_top");
      }
  });



  
})




document.getElementById('myForm').addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Perform validation
  if (validateForm()) {
      // If the form is valid, you can submit it or perform other actions
      alert('Form submitted successfully!');
      // Uncomment the line below to actually submit the form
      // event.target.submit();
  }
});

function validateForm(e) {
  e.preventDefault()
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phoneNumber').value;
  var companyName = document.getElementById('companyName').value;
  var nameError = document.getElementById("nameError");
  var phoneError = document.getElementById("phoneError");
  var emailError = document.getElementById("mailError");
  var CompanyError = document.getElementById("CompanyError");


var namePattern = /^[a-zA-Z\s]+$/;
var phonePattern = /^\d{10}$/;
 var emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            nameError.innerHTML = "";
            phoneError.innerHTML = "";
            emailError.innerHTML = "";
            CompanyError.innerHTML = "";

            if (!name.match(namePattern)) {
                nameError.innerHTML = "Invalid name";
                return false;
            }

            if (!email.match(emailPattern)) {
              console.log("dssfjsdkj");
                emailError.innerHTML = "Invalid email address";
                return false;
            }


            if (!phone.match(phonePattern)) {
                phoneError.innerHTML = "Invalid phone number";
                return false;

            }
            if(!companyName){
              CompanyError.innerHTML = "Invalid Company Name";
              return false;
            }
            
            return true;

  // Simple validation for name (non-empty)
  // if (name.trim() === '') {
  //     alert('Please enter your name.');
  //     return false;
  // }

  // // Simple email validation
  // var emailRegex = /^\S+@\S+\.\S+$/;
  // if (!emailRegex.test(email)) {
  //     alert('Please enter a valid email address.');
  //     return false;
  // }

  // // Simple phone number validation
  // var phoneRegex = /^\d{10}$/; // Assumes a 10-digit phone number
  // if (!phoneRegex.test(phoneNumber)) {
  //     alert('Please enter a valid phone number.');
  //     return false;
  // }

  // // Simple validation for company name (non-empty)
  // if (companyName.trim() === '') {
  //     alert('Please enter your company name.');
  //     return false;
  // }

  // If all validations pass, the form is considered valid
  // return true;
}

