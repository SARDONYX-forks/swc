//// [asyncAliasReturnType_es6.ts]
import { _ as _async_to_generator } from "@swc/helpers/_/_async_to_generator";
function f() {
    return _async_to_generator(function*() {})();
}
