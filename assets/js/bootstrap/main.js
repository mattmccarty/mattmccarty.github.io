$(document).ready(() => {
  var globals = {
    icon: {
      pack: {
        FONTAWESOME: 0
      }
    },
    display: {
      size: {
        SMALL : 576,
        MEDIUM: 768,
        LARGE : 992,
        XLARGE: 1200
      }
    }
  }
  
  var iconsFontAwesome = ($("body").hasClass("icons-fontawesome")) ? true : false;
  var iconPack         = null;
  
  if (iconsFontAwesome) {
    iconPack = globals.icon.pack.FONTAWESOME;
  }

  var components = {
    sidebar: SideBarComponent
  };

  $.each(components, function(name, object) {
    object.init({globals: globals, icons: iconPack});
  });
});