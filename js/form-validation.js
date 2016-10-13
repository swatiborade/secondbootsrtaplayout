$(function()
{
    $("#myemailform").validate(
      {
        rules: 
        {
          first_name: 
          {
            required: true
          },
           last_name: 
          {
            required: true
          },
          email: 
          {
            required: true,
            email: true
          },
          message: 
          {
            maxlength: 1024
          }
        },
        messages: 
        {
          first_name: 
          {
            required: "Please enter your name"
          },
          email: 
          {
            required: "Please enter your email address. This is required to contact you later."
          },
          message: 
          {
            maxlength: jQuery.format("Please limit the message to {0} letters!")
          }
        }
      }); 
});