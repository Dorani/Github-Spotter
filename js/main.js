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
      $.ajax({
        url:'https://api.github.com/users/'+username+'/repos',
        data:{
          client_id:'6f73ca918108541caa59',
          client_secret:'7b655a83147f4123df2b87cb9edd97d1ff59bde0',
          sort: 'created: asc',
          per_page: 10
        }
      }).done(function(repos){
        $.each(repos, function(index, repo){
          $('#repos').append(`
            <div class="well">
              <div class="row">
                <div class="col-md-7">
                  <strong>${repo.name}</strong>
                </div>

                <div class="col-md-3">

                </div>

                <div class="col-md-2">


              </div>
           </div>
          </div>


          `);
        });
      });
      $('#profile').html(`
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">${user.name}</h3>
          </div>
          <div class="panel-body">
            <div class="row">
              <div class="col-md-3">
                <img class="thumbnail avatar" src="${user.avatar_url}">
                <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
               </div>
               <div class="col-md-9">
                <span class="label label-default">Public Repos: ${user.public_repos}</span>
                <span class="label label-primary">Public Gists:${user.public_gists}</span>
                <span class="label label-success">Followers:${user.followers}</span>
                <span class="label label-info">Following:${user.following}</span>
                <br><br>
                <ul class="list-group">
                  <li class="list-group-item">Company: ${user.company}</li>
                  <li class="list-group-item">Website/blog: ${user.blog}</li>
                  <li class="list-group-item">Location: ${user.location}</li>
                  <li class="list-group-item">Member Since: ${user.create_at}</li>
                </ul>
               </div>
             </div>
          </div>
        </div>
        <h3 class="page-header">Latest Repos</h3>
        <div id="repos"></div>

        `);
    });
  });
});

//makes request to url, sending along our credentials and gives us this user's info in obj format
//instead of concatinating everything, we will be using template literals which are part of es6 syntax
 //it allows us to use multiple lines and inserting variables
