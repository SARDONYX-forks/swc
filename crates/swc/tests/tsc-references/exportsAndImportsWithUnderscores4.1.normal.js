//// [exportsAndImportsWithUnderscores4.ts]
"use strict";
//// [m1.ts]
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
    get _ () {
        return _;
    },
    get __ () {
        return __;
    },
    get ___ () {
        return ___;
    },
    get ___hello () {
        return ___hello;
    },
    get __esmodule () {
        return __esmodule;
    },
    get __proto () {
        return __proto;
    },
    get _hi () {
        return _hi;
    }
});
function _() {
    console.log("_");
}
function __() {
    console.log("__");
}
function ___() {
    console.log("___");
}
function _hi() {
    console.log("_hi");
}
function __proto() {
    console.log("__proto");
}
function __esmodule() {
    console.log("__esmodule");
}
function ___hello() {
    console.log("___hello");
}
//// [m2.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _m1 = require("./m1");
(0, _m1._)();
(0, _m1.__)();
(0, _m1.___hello)();
(0, _m1.__esmodule)();
(0, _m1.__proto)();
(0, _m1._hi)();
