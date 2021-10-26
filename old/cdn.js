var p=document.querySelector("p")
var textarea=document.getElementById("mytextarea");
var copyBtn=document.getElementById("copyBtn");

var clipboard=new ClipboardJS(copyBtn);










$(".custom-select").each(function() {
  var classes = $(this).attr("class"),
    id = $(this).attr("id"),
    name = $(this).attr("name");
  var template = '<div class="' + classes + '">';
  template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
  template += '<div class="custom-options">';
  $(this).find("option").each(function() {
    template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
  });
  template += '</div></div>';

  $(this).wrap('<div class="custom-select-wrapper"></div>');
  $(this).hide();
  $(this).after(template);
});
$(".custom-option:first-of-type").hover(function() {
  $(this).parents(".custom-options").addClass("option-hover");
}, function() {
  $(this).parents(".custom-options").removeClass("option-hover");
});
$(".custom-select-trigger").on("click", function() {
  $('html').one('click', function() {
    $(".custom-select").removeClass("opened");
  });
  $(this).parents(".custom-select").toggleClass("opened");
  event.stopPropagation();
});
$(".custom-option").on("click", function() {
  $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
  
  /*custom code
  var someString = `&lt;link href=\"themes/prism.css" rel="stylesheet"/&gt;';
 
  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  */
  
  var test = "&lt;link rel='stylesheet'>" +
    "<div >test.test</div> <div class='remove'>[Remove]</div></div>";
    var bootstrap_css = "" +
      "<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css\">" +
      "";
      var jquery = '' +
        '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>' +
        '' +
        '';
        var bootstrap_js = '' +
          '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>' +
          '';
          
          var frontawesome_css = '' +
            '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">' +
            '';
            
        var tailewind_css = '' +
          '<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">' +
          '';    
          
  
    var myval=$(this).data("value");
    switch (myval) {
      case "bootstrap-css":
        textarea.value=bootstrap_css;
       
        break;
      case "jquery":
        textarea.value = jquery;
        break;
        case "bootstrap-js":
        textarea.value = bootstrap_js;
        break;
        case "frontawesome-css":
        textarea.value = frontawesome_css;
        break;
        case "tailwind":
        textarea.value = tailewind_css;
        break;
      default:
        code.innerHTML = "Looking forward to the Weekend";
    }
    
    
    //custom code
    
  $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
  $(this).addClass("selection");
  $(this).parents(".custom-select").removeClass("opened");
  $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
});


// copy btn add event listener 



function copyB(){
  const my= copyBtn.innerHTML;
  const color=copyBtn.style.color="white";


  setTimeout(()=>{
    copyBtn.innerHTML=my;
    copyBtn.style.color=color;
  },1000);

  copyBtn.innerHTML="copied";
  copyBtn.style.color="green;"
}


