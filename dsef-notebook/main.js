define([
    'base/js/namespace',
], function (
    Jupyter,
) {
    function load_ipython_extension (){

        var start_handler = function () {
            Jupyter.notebook.restart_run_all();
        };

        var action = {
            icon: 'fa-play',
            help: 'Start Data Run',
            help_index: 'zz',
            handler: start_handler
        };
        var prefix = "dsef";
        var action_name = "start-data-run";

        var full_action_name = Jupyter.actions.register(action, action_name, prefix);
        Jupyter.toolbar.add_buttons_group([full_action_name]);
    }

    return {
        load_ipython_extension: load_ipython_extension
    };
});
