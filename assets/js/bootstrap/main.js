$(document).ready(() => {
  var ICON_FONTAWESOME = 0;
  
  var iconsFontAwesome = ($("body").hasClass("icons-fontawesome")) ? true : false;
  var iconPack         = null;
  
  if (iconsFontAwesome) {
    iconPack = ICON_FONTAWESOME;
  }

  var components = {
    sidebar: SideBarComponent
  };

  $.each(components, function(name, object) {
    object.init({icons: iconPack});
  });
});