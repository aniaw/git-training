(function ()
{
    'use strict';

    window.day1 = {
        getDescendingNumbers: function (start, stop)
        {
            if (typeof start != "number" || typeof stop != "number" || start < stop) {
                return false;
            }
            var descendingNumbers = start;
            for (var i = start - 1; i >= stop; i--) {
                descendingNumbers = descendingNumbers + " " + i;
            }
            return descendingNumbers;
        },

        deleteStr: function (delStr, list)
        {
            var del = false;
            for (var i = 0; i < list.length; i++) {
                if (del) {
                    list[i - 1] = list[i];
                } else if (list[i] == delStr) {
                    del = true;
                }
            }
            if (del) {
                list.pop();
            }
            return list;
        }
    };
})();
