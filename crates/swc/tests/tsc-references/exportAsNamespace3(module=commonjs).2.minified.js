//// [0.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var target = exports, all = {
    get a () {
        return a;
    },
    get b () {
        return b;
    }
};
for(var name in all)Object.defineProperty(target, name, {
    enumerable: !0,
    get: Object.getOwnPropertyDescriptor(all, name).get
});
var a = 1, b = 2;
//// [1.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
}), Object.defineProperty(exports, "ns", {
    enumerable: !0,
    get: function() {
        return _0;
    }
});
var _0 = /*#__PURE__*/ require("@swc/helpers/_/_interop_require_wildcard")._(require("./0"));
ns.a, ns.b;
var ns = {
    a: 1,
    b: 2
};
ns.a, ns.b;
//// [2.ts]
Object.defineProperty(exports, "__esModule", {
    value: !0
});
var _1 = /*#__PURE__*/ require("@swc/helpers/_/_interop_require_wildcard")._(require("./1"));
_1.ns.a, _1.ns.b;
