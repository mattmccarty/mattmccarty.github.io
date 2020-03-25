var SideBarComponent = (function() {
  var globals  = null,
      iconPack = null,
      sidebar  = $(".sidebar-ext .nav-max");

  var init = function(opt) {
    globals  = (typeof opt.globals !== "undefined") ? opt.globals : null;
    iconPack = (typeof opt.icons   !== "undefined") ? opt.icons   : null;
    initToggles();
    initItemClicks();
    initStateButtons();

    $(window).resize(function() {
      if ($('header').width() <= globals.display.size.MEDIUM) {
        if (sidebar.is(":visible")) {
          $(".main-content").hide();
        }
      } else {
        if (sidebar.is(":hidden")) {
          $(".main-content").show();
        }
      }
    });
  };

  var initActive = function() {
    //var parents = sidebar.find(".active").parent("ul");
    //parents.show();
  }

  var initToggles = function() {
    var toggle  = $(".sidebar-toggle"),
        icon    = $(".sidebar-toggle > i");

    if (sidebar.is(":hidden")) {
      icon.removeClass("min-left");
      icon.addClass("max-right");
    }
  
    toggle.on("click", function(e) {
      if (sidebar.is(":hidden")) {
        sidebar.show();
        if ($('header').width() <= globals.display.size.MEDIUM) {
          $(".main-content").hide();
        }
        if (icon.hasClass("max-right")) {
          icon.removeClass("max-right");
          icon.addClass("min-left");
        }
      } else {
        sidebar.hide();
        $(".main-content").show();
        if (icon.hasClass("min-left")) {
          icon.removeClass("min-left");
          icon.addClass("max-right");
        }
      }
    });
  };

  var initItemClicks = function() {
    $(window).on("popstate", function(e) {
      var title   = $("title"),
          content = $(".main-content");
      if (e.originalEvent.hasOwnProperty("state")) {
        title.html(e.originalEvent.state.title);
        content.html(e.originalEvent.state.content);
      }
    });

    $(".sidebar-ext a.list-group-item.page-load[href^='/']").on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass("active")   === false &&
          $(this).hasClass("redirect") === false
      ) {
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

        if ($('header').width() <= globals.display.size.MEDIUM) {
          $(".sidebar-ext .nav-min .sidebar-toggle").trigger("click");
        }
      }
    });
  };

  var initStateButtons = function() {
    $(".sidebar-ext a.list-group-item .state-icon").on('click', function(e) {
      itemUpdate($(this));
      e.preventDefault();
      if ($(this).hasClass("state-icon")) {
        e.stopPropagation();
      }
    });
  }

  var itemUpdate = function(el) {
    var activeChild  = $(el).next(".list-group").find(".active"),
        activeParent = $(el).closest(".list-group").prev(".active");

    let iconStateContainer = null;
    let iconState          = null;
    if ($(el).hasClass("state-icon")) {
      iconStateContainer = $(el);
      iconState          = iconStateContainer.children("i");
    } else {
      iconStateContainer = $(el).children(".state-icon");
      iconState          = iconStateContainer.children("i");
    }
    if (iconState.hasClass("com-nav-tree-item-closed")) {
      iconState.removeClass("com-nav-tree-item-closed");
      iconState.addClass("com-nav-tree-item-open");
      if ($(el).hasClass("state-icon")) {
        $(el).parent().next(".list-group").show();
      } else {
        $(el).next(".list-group").show();
      }
    } else if (iconState.hasClass("com-nav-tree-item-open")) {
      if (activeChild.length <= 0 && activeParent.length <= 0) {
        iconState.removeClass("com-nav-tree-item-open");
        iconState.addClass("com-nav-tree-item-closed");
        if ($(el).hasClass("state-icon")) {
          $(el).parent().next(".list-group").hide();
        } else {
          $(el).next(".list-group").hide();
        }
      }
    }

    if ($(el).hasClass("state-icon") == false) {
      $(".sidebar-ext .list-group-item").removeClass("active");
      $(el).addClass("active");
    }
  };
  
  return {
      init: init
  };
})();