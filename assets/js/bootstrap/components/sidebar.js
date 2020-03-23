var SideBarComponent = (function() {
    var iconPack = null;

    var init = function(opt) {
        iconPack = (typeof opt.icons !== "undefined") ? opt.icons : null;
        initToggles();
        initListItems();
    };

    var initToggles = function() {
        $(".sidebar-toggle").on("click", function(e) {
            var sideBar = $(".sidebar-ext");
            if (sideBar.is(":hidden")) {
                sideBar.show();
            } else {
                sideBar.hide();
            }
            e.stopPropagation();
        });
    };

    var initListItems = function() {
        $(".sidebar-ext .list-group-item").on("click", function(e) {
            let iconStateContainer = $(this).children(".state-icon");
            let iconState          = iconStateContainer.children("i");
            if (iconState.hasClass("com-nav-tree-item-closed")) {
                iconState.removeClass("com-nav-tree-item-closed");
                iconState.addClass("com-nav-tree-item-open");
                $(this).next(".list-group").show(); 
            } else {
                iconState.removeClass("com-nav-tree-item-open");
                iconState.addClass("com-nav-tree-item-closed");
                $(this).next(".list-group").hide(); 
            }
            e.stopPropagation();
        });
    };

    return {
        init: init
    };
})();