const env = {
    stack: [],
    error: void 0,
    hasError: false
};
try {
    var x = _ts_add_disposable_resource(env, null, false);
    var C = class C {
    };
} catch (e) {
    env.error = e;
    env.hasError = true;
} finally{
    _ts_dispose_resources(env);
}
export { C as default };
