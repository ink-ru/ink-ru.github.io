function loadjscssfile(filename, filetype, classid){
 if (filetype=="js"){         var fileref=document.createElement('script')
   fileref.setAttribute("type","text/javascript")
   fileref.setAttribute("src", filename)
 }
 else if (filetype=="css"){         var fileref=document.createElement("link")
   fileref.setAttribute("rel", "stylesheet")
   fileref.setAttribute("type", "text/css")
   if(classid) { fileref.setAttribute("class", classid) }
     fileref.setAttribute("href", filename)
 }
 if (typeof fileref!="undefined")
   document.getElementsByTagName("head")[0].appendChild(fileref)
}



function createWidgetHelpButton(options)
{
      if(!options.login) {options.login='button.php';}
      if(!options.width_button) {options.width_button='50';}
      if(!options.text_button) {options.text_button="";}
      if(!options.text_size) {options.text_size='26';}
      if(!options.title_button) {options.title_button="Please update Telegram button code";}
      if(!options.border_radius) {options.border_radius='50';}
      if(!options.background_color) {options.background_color='#3399ff';}
      if(!options.text_color) {options.text_color='#ffffff';}
      if(!options.pulse) {options.pulse='telegramim_pulse';}

 if(!options.iconopen) {options.iconopen="ftelegramim-telegram-logo";}

 var urltoscript = "https://telegram.im/widget-button/";

 loadjscssfile(urltoscript+"widget-button.css.php", "css");
 loadjscssfile(urltoscript+"fonts.css", "css");
 loadjscssfile(urltoscript+"ico/style.css", "css");


 Widget = {
   created: false,
   widgetElement: null,
   show: function() {



               var script_tag = document.createElement('script');
     script_tag.setAttribute("type","text/javascript");
     script_tag.setAttribute("src",urltoscript+"WidgetTelegramButton.min.js");

(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);


if (script_tag.readyState)
{
  script_tag.onreadystatechange = function ()
  {
    if (this.readyState == 'complete' || this.readyState == 'loaded') main_ie();
  };
}
else script_tag.onload = main;

function main()
{
  WidgetTelegramButton = WidgetTelegramButton.noConflict();
  if (WidgetTelegramButton('.telegramim_count').length>0) {
   WidgetTelegramButton('.telegramim_count').each(function() {
     var datafor = WidgetTelegramButton(this).attr('data-for');
     WidgetTelegramButton.getJSON('https://telegram.im/check.php?login='+datafor,function(result){
       if(result.ok) {
         WidgetTelegramButton(".telegramim_count[data-for^='"+datafor+"']").html(result.result);
       }
       else { WidgetTelegramButton(".telegramim_count[data-for^='"+datafor+"']").html('?');  }
     });
   });
  }
  WidgetTelegramButton('.telegramim_button i').addClass('ftelegramim '+options.iconopen);
}


  function main_ie()
  {
    jQuery = jQuery.noConflict(true);
    if (jQuery('.telegramim_count').length>0) {
     jQuery('.telegramim_count').each(function() {
       var datafor = jQuery(this).attr('data-for');
       jQuery.getJSON('https://telegram.im/check.php?login='+datafor,function(result){
         if(result.ok) {
           jQuery(".telegramim_count[data-for^='"+datafor+"']").html(result.result);
         }
         else { jQuery(".telegramim_count[data-for^='"+datafor+"']").html('?');  }
       });
     });
    }
    jQuery('.telegramim_button i').addClass('ftelegramim '+options.iconopen);
  }


}
}
Widget.show();
}

if(!TelegramButtonOptions) {var TelegramButtonOptions={};}
createWidgetHelpButton(TelegramButtonOptions);
