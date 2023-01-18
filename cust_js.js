
(function(){
        setTimeout(function(){ // set time out it is optional 
              $(".dd_nav a").each(function(index, elem) {
                     var file_name = $(elem).attr("data-html-ank");

                     jQuery.ajax({
                            url:file_name,
                            beforeSend: function(){
                                // Show image container
                                $("#loader").show();
                            },
                            success: function(data){
                                   $('[include-html="' + file_name + '"]').html(data);
                            },
                            
                            error: function(jqXHR, textStatus, errorThrown){
                                   var s = jqXHR.status + ": " + jqXHR.statusText;
                                   $('[include-html="' + file_name + '"]').html(file_name+ "-" + s);
                            },
                             complete:function(data){
                             $("#loader").hide();
                            }
                     });
              });
      }, 2000);
})();
