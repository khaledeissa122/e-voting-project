$( document ).ready(function() {
    var addin = $("#addinput");
    var newin = $("#newinput");
    var voterrow = $(".input-voter");

    addin.click(function(){
      if ($('.input-voter').css("display") == "none") {
        $('.input-voter').show();
        newin.show();
      }else{
        $('.input-voter').hide();
        $('.new-input-voter').hide();
        newin.hide();
      }
    });

    newin.click(function(){
          $('<div class="row new-input-voter"><div class="col-sm-4"><div class="form-group"><label class="required" for="exampleInputEName">Name</label><input type="text" class="form-control" id="exampleInputEName" aria-describedby="emailHelp" placeholder="Enter your name"></div></div><div class="col-sm-4"><div class="form-group"><label class="required" for="exampleInputEName">ID</label><input type="text" class="form-control" id="exampleInputEName" aria-describedby="emailHelp" placeholder="Enter your id"></div></div><div class="col-sm-4"><div class="form-group"><label class="required" for="exampleInputEName">Password</label><input type="Password" class="form-control" id="exampleInputEName" aria-describedby="emailHelp" placeholder="Enter Password"></div></div></div>').insertAfter(".input-voter");
    });


});
