$("#but").click(function(){
    let username = [
    "furkan",
    "hasan",
    "zeynep",
    "irem"
    ],
    password = [
      "furkan123",
      "hasan123",
      "zeynep123",
      "irem123"
    ],
    uName = $("#username").val(),
    uPassword = $("#password").val(),
    index = username.indexOf(uName),
    success = $("#success"),
    danger = $("#danger");

    if(password[index] == uPassword){
      success.show();
      success.text(`Welcome ${uName}`)
      danger.hide();
    }else{
      success.hide();
      danger.show();
      danger.text("You're doing something wrong")
    }
  })