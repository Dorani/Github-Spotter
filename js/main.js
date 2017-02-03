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
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}"></a>
               </div>
               <div class="col-md-9">

               </div>
             </div>
          </div>
        </div>
        `);
    });
  });
});

//makes request to url, sending along our credentials and gives us this user's info in obj format
//instead of concatinating everything, we will be using template literals which are part of es6 syntax
 //it allows us to use multiple lines and inserting variables
