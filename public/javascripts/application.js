$(document).ready(function(){
  
  console.log("loaded");
  console.log($(".delete-link").length);

  $(".delete-link").on('click', function(e) {
      self=$(this);
      e.preventDefault();

      if(confirm('Are you sure?')) {
        $.ajax({
          url: self.attr('href'),
          method: 'DELETE',
          success: function(data) {
            location.reload();
          },
          error: function(data) {
              alert("Error while deleting.");
              console.log(data);
          }
        });
      };
  })



});

