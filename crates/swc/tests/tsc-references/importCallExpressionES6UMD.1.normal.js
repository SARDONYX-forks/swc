//// [0.ts]
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports);
    else if (typeof define === "function" && define.amd) define([
        "exports"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.0Ts = {});
})(this, function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "foo", {
        enumerable: true,
        get: function() {
            return foo;
        }
    });
    function foo() {
        return "foo";
    }
});
//// [1.ts]
(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("@swc/helpers/_/_interop_require_wildcard"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "@swc/helpers/_/_interop_require_wildcard"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.1Ts = {}, global.interopRequireWildcard);
})(this, function(exports, _interop_require_wildcard) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: Object.getOwnPropertyDescriptor(all, name).get
        });
    }
    _export(exports, {
        get D () {
            return D;
        },
        get p2 () {
            return p2;
        }
    });
    import("./0");
    var p1 = import("./0");
    p1.then((zero)=>{
        return zero.foo();
    });
    var p2 = import("./0");
    function foo() {
        const p2 = import("./0");
    }
    class C {
        method() {
            const loadAsync = import("./0");
        }
    }
    class D {
        method() {
            const loadAsync = import("./0");
        }
    }
});
