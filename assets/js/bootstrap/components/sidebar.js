var SideBarComponent = (function() {
  var iconPack = null;

  var init = function(opt) {
    iconPack = (typeof opt.icons !== "undefined") ? opt.icons : null;
    initToggles();
    initItemClicks();
    initStateButtons();
  };

  var initToggles = function() {
    var sidebar = $(".sidebar-ext .nav-max"),
        toggle  = $(".sidebar-toggle"),
        icon    = $(".sidebar-toggle > i");

    if (sidebar.is(":hidden")) {
      icon.removeClass("min-left");
      icon.addClass("max-right");
    }
  
    toggle.on("click", function(e) {
      if (sidebar.is(":hidden")) {
        sidebar.show();
        if (icon.hasClass("max-right")) {
          icon.removeClass("max-right");
          icon.addClass("min-left");
        }
      } else {
        sidebar.hide();
        if (icon.hasClass("min-left")) {
          icon.removeClass("min-left");
          icon.addClass("max-right");
        }
      }
    });
  };

  var initItemClicks = function() {
    $(window).on("popstate", function(e) {
      $('title').html(e.originalEvent.state.title);
      $('.main-content').html(e.originalEvent.state.content);
      bindLinks();
    });

    $(".sidebar-ext a.list-group-item[href^='/']").on('click', function(e) {
      if ($(this).hasClass("active")   === false &&
          $(this).hasClass("redirect") === false
      ) {
        e.preventDefault();
        var url = $(this).attr('href');
        $.get(url, function(data) {
          var regex = /<title>(.*)<\/title>/g
          var title = regex.exec(data)[1];
          $('title').html(title);
          $('.main-content').html($(data).find('.main-content').html());
          history.pushState({
              'title'  : $('title').html(),
              'content': $('.main-content').html()
          }, title, url);
        });
        itemUpdate(this);
      }
    });
  };

  var initStateButtons = function() {
    $(".sidebar-ext a.list-group-item .state-icon").on('click', function(e) {
      itemUpdate(this);
      e.preventDefault();
    });
  }

  var itemUpdate = function(el) {
    var activeChild  = $(el).next(".list-group").find(".active"),
        activeParent = $(el).closest(".list-group").prev(".active");

    let iconStateContainer = $(el).children(".state-icon");
    let iconState          = iconStateContainer.children("i");
    if (iconState.hasClass("com-nav-tree-item-closed")) {
      iconState.removeClass("com-nav-tree-item-closed");
      iconState.addClass("com-nav-tree-item-open");
      $(el).next(".list-group").show(); 
    } else if (iconState.hasClass("com-nav-tree-item-open")) {
      if (activeChild.length <= 0 && activeParent.length <= 0) {
        iconState.removeClass("com-nav-tree-item-open");
        iconState.addClass("com-nav-tree-item-closed");
        $(el).next(".list-group").hide();
      }
    }

    $(".sidebar-ext .list-group-item").removeClass("active");
    $(el).addClass("active");
  };
  
  return {
      init: init
  };
})();