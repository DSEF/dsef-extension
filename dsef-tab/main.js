define([
    'jqueryui'
], function (
    $
) {
    function insert_tab () {
        console.log("insert tab dsef");
        var tab_text = "DSEF";
        var tab_id = "dsef_experimental_settings";

        $('<div/>')
            .attr('id', tab_id)
            // .append(dsef_ui)
            .addClass('tab-pane')
            .appendTo('.tab-content');

        var tab_link = $('<a>')
            .text(tab_text)
            .attr('href', '#' + tab_id)
            .attr('data-toggle', 'tab')
            .on('click', function (evt) {
                window.history.pushState(null, null, '#' + tab_id);
            });

        $('<li>')
            .append(tab_link)
            .appendTo('#tabs');

        if (window.location.hash == '#' + tab_id) {
            tab_link.click();
        }
    }

    function load_ipython_extension (){

        insert_tab();
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
