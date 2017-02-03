$(document).ready(function(){
  $('#searchUser').on('keyup', function(e){
    var username = e.target.value;

    // Make request to Github
    $.ajax({
      url:'https://api.github.com/users/' + username,
      data:{
        client_id:'6f73ca918108541caa59',
        client_secret:'7b655a83147f4123df2b87cb9edd97d1ff59bde0'
      }
    }).done(function(user){
      console.log(user);
    });
  });
});

//makes request to url, sending along our credentials and gives us this user's info in obj format
