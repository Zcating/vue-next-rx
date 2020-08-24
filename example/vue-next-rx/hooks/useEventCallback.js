"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useEventCallback = void 0;
var rxjs_1 = require("rxjs");
var vue_1 = require("vue");
function useEventCallback(callback, initState) {
    import('vue').then((vue) => {
        window.TestVue = vue;
    });
    var state = vue_1.shallowRef();
    var event$ = new rxjs_1.Subject();
    var state$ = new rxjs_1.BehaviorSubject(initState !== null && initState !== void 0 ? initState : null);
    var resultCallback = function (event) {
        event$.next(event);
    };
    vue_1.watchEffect(function (onInvalidate) {
        if (initState) {
            state.value = initState;
        }
        var subscription = callback(event$, state$).subscribe({
            next: function (value) {
                state.value = value;
            },
        });
        onInvalidate(function () {
            subscription.unsubscribe();
        });
    });
    return {
        callback: resultCallback,
        state: state,
    };
}
exports.useEventCallback = useEventCallback;
//# sourceMappingURL=useEventCallback.js.map