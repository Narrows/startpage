document.addEventListener('DOMContentLoaded', function() {
    var cfg = {
        'search_url': $search_base_url,
    }

    var keycodes = {
        'enter': 13,
        '/': 191,
        'j': 74,
        'k': 75,
    }

    var action_items= [];
    var action_item_idx = -1;
    var el_search = qs('.js-search');

    function qs(q, context) {
        var els = [];
        context = context ? context : document;
        var els = context.querySelectorAll(q);
        if (els.length == 1) {
            return els[0];
        }

        return els;
    }

    function search(query) {
        query = query || '';

        if (query.length == 0) {
            search_url
        }

        window.location = cfg.search_url + query;
    }

    function resetActionItems() {
        deselectItem(action_items[action_item_idx]);
        action_item_idx = -1;
    }

    function initActionItems() {
        action_items = qs('.js-action_item');
    }

    function actionItemGo(item) {
        window.location = qs('a', item).href;
    }

    function selectItemUp() {
        var old = action_items[action_item_idx];
        var new_idx = Math.max(0, action_item_idx - 1)
        action_item_idx = new_idx;
        selectItem(action_items[new_idx]);
        deselectItem(old);
    }

    function selectItemDown() {
        var old = action_items[action_item_idx];
        var new_idx = Math.min(action_items.length - 1, action_item_idx + 1);
        action_item_idx = new_idx;
        selectItem(action_items[new_idx]);
        deselectItem(old);
    }

    function deselectItem(item_el) {
        if (!item_el) return;
        item_el.classList.remove('action_selected');
    }

    function selectItem(item_el) {
        if (!item_el) return;
        item_el.classList.add('action_selected');
    }

    // main
    initActionItems();

    el_search.focus();
    el_search.addEventListener('keyup', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (event.keyCode == keycodes['enter']) {
            if (event.target.value.length == '') {
                resetActionItems();
                event.target.blur();
                return;
            }

            search(event.target.value);
            return;
        }
    })

    document.addEventListener('keyup', function(event) {
        if (event.target.tagName.toLowerCase() != 'body') {
            return;
        }

        if (event.keyCode == keycodes['/']) {
            resetActionItems();
            el_search.focus();
            return;
        }

        if (event.keyCode == keycodes['j']) {
            selectItemDown();
            return;
        }

        if (event.keyCode == keycodes['k']) {
            selectItemUp();
            return;
        }

        if (event.keyCode == keycodes['enter']) {
            actionItemGo(action_items[action_item_idx]);
            return;
        }
    });

    window.qs = qs;
});
