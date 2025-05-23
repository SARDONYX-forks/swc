//// [usingDeclarationsTopLevelOfModule.2.ts]
define([
    "require",
    "@swc/helpers/_/_ts_add_disposable_resource",
    "@swc/helpers/_/_ts_dispose_resources"
], function(require, _ts_add_disposable_resource, _ts_dispose_resources) {
    let env = {
        stack: [],
        error: void 0,
        hasError: !1
    };
    try {
        var z = _ts_add_disposable_resource._(env, {
            [Symbol.dispose] () {}
        }, !1);
        console.log(2, z);
    } catch (e) {
        env.error = e, env.hasError = !0;
    } finally{
        _ts_dispose_resources._(env);
    }
    return 4;
});
