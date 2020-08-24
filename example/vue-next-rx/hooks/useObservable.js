"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useObservable = void 0;
var vue_1 = require("vue");
function useObservable(inputFactory, initValue) {
    var data = vue_1.ref(initValue);
    var loading = vue_1.ref(false);
    var error = vue_1.ref();
    var subscription = inputFactory().subscribe(function (value) {
        data.value = value;
    }, function (e) {
        loading.value = false;
        error.value = e;
    }, function () {
        loading.value = false;
    });
    vue_1.watchEffect(function (onInvalidate) {
        onInvalidate(function () {
            subscription.unsubscribe();
        });
    });
    return { data: data, loading: loading, error: error };
}
exports.useObservable = useObservable;
//# sourceMappingURL=useObservable.js.map