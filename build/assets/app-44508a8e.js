function Pi(e, t) {
    return function() {
        return e.apply(t, arguments)
    }
}
const {
    toString: An
} = Object.prototype, {
    getPrototypeOf: Se
} = Object, se = (e => t => {
    const i = An.call(t);
    return e[i] || (e[i] = i.slice(8, -1).toLowerCase())
})(Object.create(null)), W = e => (e = e.toLowerCase(), t => se(t) === e), oe = e => t => typeof t === e, {
    isArray: gt
} = Array, xt = oe("undefined");

function xn(e) {
    return e !== null && !xt(e) && e.constructor !== null && !xt(e.constructor) && B(e.constructor.isBuffer) && e.constructor.isBuffer(e)
}
const Ri = W("ArrayBuffer");

function Ln(e) {
    let t;
    return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Ri(e.buffer), t
}
const Tn = oe("string"),
    B = oe("function"),
    Di = oe("number"),
    ae = e => e !== null && typeof e == "object",
    Sn = e => e === !0 || e === !1,
    zt = e => {
        if (se(e) !== "object") return !1;
        const t = Se(e);
        return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
    },
    kn = W("Date"),
    Cn = W("File"),
    Pn = W("Blob"),
    Rn = W("FileList"),
    Dn = e => ae(e) && B(e.pipe),
    jn = e => {
        let t;
        return e && (typeof FormData == "function" && e instanceof FormData || B(e.append) && ((t = se(e)) === "formdata" || t === "object" && B(e.toString) && e.toString() === "[object FormData]"))
    },
    In = W("URLSearchParams"),
    Bn = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");

function St(e, t, {
    allOwnKeys: i = !1
} = {}) {
    if (e === null || typeof e > "u") return;
    let n, r;
    if (typeof e != "object" && (e = [e]), gt(e))
        for (n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
    else {
        const s = i ? Object.getOwnPropertyNames(e) : Object.keys(e),
            o = s.length;
        let a;
        for (n = 0; n < o; n++) a = s[n], t.call(null, e[a], a, e)
    }
}

function ji(e, t) {
    t = t.toLowerCase();
    const i = Object.keys(e);
    let n = i.length,
        r;
    for (; n-- > 0;)
        if (r = i[n], t === r.toLowerCase()) return r;
    return null
}
const Ii = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(),
    Bi = e => !xt(e) && e !== Ii;

function be() {
    const {
        caseless: e
    } = Bi(this) && this || {}, t = {}, i = (n, r) => {
        const s = e && ji(t, r) || r;
        zt(t[s]) && zt(n) ? t[s] = be(t[s], n) : zt(n) ? t[s] = be({}, n) : gt(n) ? t[s] = n.slice() : t[s] = n
    };
    for (let n = 0, r = arguments.length; n < r; n++) arguments[n] && St(arguments[n], i);
    return t
}
const Nn = (e, t, i, {
        allOwnKeys: n
    } = {}) => (St(t, (r, s) => {
        i && B(r) ? e[s] = Pi(r, i) : e[s] = r
    }, {
        allOwnKeys: n
    }), e),
    Fn = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
    Hn = (e, t, i, n) => {
        e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
            value: t.prototype
        }), i && Object.assign(e.prototype, i)
    },
    qn = (e, t, i, n) => {
        let r, s, o;
        const a = {};
        if (t = t || {}, e == null) return t;
        do {
            for (r = Object.getOwnPropertyNames(e), s = r.length; s-- > 0;) o = r[s], (!n || n(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
            e = i !== !1 && Se(e)
        } while (e && (!i || i(e, t)) && e !== Object.prototype);
        return t
    },
    Mn = (e, t, i) => {
        e = String(e), (i === void 0 || i > e.length) && (i = e.length), i -= t.length;
        const n = e.indexOf(t, i);
        return n !== -1 && n === i
    },
    Un = e => {
        if (!e) return null;
        if (gt(e)) return e;
        let t = e.length;
        if (!Di(t)) return null;
        const i = new Array(t);
        for (; t-- > 0;) i[t] = e[t];
        return i
    },
    zn = (e => t => e && t instanceof e)(typeof Uint8Array < "u" && Se(Uint8Array)),
    Vn = (e, t) => {
        const n = (e && e[Symbol.iterator]).call(e);
        let r;
        for (;
            (r = n.next()) && !r.done;) {
            const s = r.value;
            t.call(e, s[0], s[1])
        }
    },
    Wn = (e, t) => {
        let i;
        const n = [];
        for (;
            (i = e.exec(t)) !== null;) n.push(i);
        return n
    },
    $n = W("HTMLFormElement"),
    Jn = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function(i, n, r) {
        return n.toUpperCase() + r
    }),
    ci = (({
        hasOwnProperty: e
    }) => (t, i) => e.call(t, i))(Object.prototype),
    Kn = W("RegExp"),
    Ni = (e, t) => {
        const i = Object.getOwnPropertyDescriptors(e),
            n = {};
        St(i, (r, s) => {
            let o;
            (o = t(r, s, e)) !== !1 && (n[s] = o || r)
        }), Object.defineProperties(e, n)
    },
    Xn = e => {
        Ni(e, (t, i) => {
            if (B(e) && ["arguments", "caller", "callee"].indexOf(i) !== -1) return !1;
            const n = e[i];
            if (B(n)) {
                if (t.enumerable = !1, "writable" in t) {
                    t.writable = !1;
                    return
                }
                t.set || (t.set = () => {
                    throw Error("Can not rewrite read-only method '" + i + "'")
                })
            }
        })
    },
    Gn = (e, t) => {
        const i = {},
            n = r => {
                r.forEach(s => {
                    i[s] = !0
                })
            };
        return gt(e) ? n(e) : n(String(e).split(t)), i
    },
    Yn = () => {},
    Qn = (e, t) => (e = +e, Number.isFinite(e) ? e : t),
    ve = "abcdefghijklmnopqrstuvwxyz",
    li = "0123456789",
    Fi = {
        DIGIT: li,
        ALPHA: ve,
        ALPHA_DIGIT: ve + ve.toUpperCase() + li
    },
    Zn = (e = 16, t = Fi.ALPHA_DIGIT) => {
        let i = "";
        const {
            length: n
        } = t;
        for (; e--;) i += t[Math.random() * n | 0];
        return i
    };

function tr(e) {
    return !!(e && B(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator])
}
const er = e => {
        const t = new Array(10),
            i = (n, r) => {
                if (ae(n)) {
                    if (t.indexOf(n) >= 0) return;
                    if (!("toJSON" in n)) {
                        t[r] = n;
                        const s = gt(n) ? [] : {};
                        return St(n, (o, a) => {
                            const c = i(o, r + 1);
                            !xt(c) && (s[a] = c)
                        }), t[r] = void 0, s
                    }
                }
                return n
            };
        return i(e, 0)
    },
    ir = W("AsyncFunction"),
    nr = e => e && (ae(e) || B(e)) && B(e.then) && B(e.catch),
    u = {
        isArray: gt,
        isArrayBuffer: Ri,
        isBuffer: xn,
        isFormData: jn,
        isArrayBufferView: Ln,
        isString: Tn,
        isNumber: Di,
        isBoolean: Sn,
        isObject: ae,
        isPlainObject: zt,
        isUndefined: xt,
        isDate: kn,
        isFile: Cn,
        isBlob: Pn,
        isRegExp: Kn,
        isFunction: B,
        isStream: Dn,
        isURLSearchParams: In,
        isTypedArray: zn,
        isFileList: Rn,
        forEach: St,
        merge: be,
        extend: Nn,
        trim: Bn,
        stripBOM: Fn,
        inherits: Hn,
        toFlatObject: qn,
        kindOf: se,
        kindOfTest: W,
        endsWith: Mn,
        toArray: Un,
        forEachEntry: Vn,
        matchAll: Wn,
        isHTMLForm: $n,
        hasOwnProperty: ci,
        hasOwnProp: ci,
        reduceDescriptors: Ni,
        freezeMethods: Xn,
        toObjectSet: Gn,
        toCamelCase: Jn,
        noop: Yn,
        toFiniteNumber: Qn,
        findKey: ji,
        global: Ii,
        isContextDefined: Bi,
        ALPHABET: Fi,
        generateString: Zn,
        isSpecCompliantForm: tr,
        toJSONObject: er,
        isAsyncFn: ir,
        isThenable: nr
    };

function w(e, t, i, n, r) {
    Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), i && (this.config = i), n && (this.request = n), r && (this.response = r)
}
u.inherits(w, Error, {
    toJSON: function() {
        return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: u.toJSONObject(this.config),
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        }
    }
});
const Hi = w.prototype,
    qi = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
    qi[e] = {
        value: e
    }
});
Object.defineProperties(w, qi);
Object.defineProperty(Hi, "isAxiosError", {
    value: !0
});
w.from = (e, t, i, n, r, s) => {
    const o = Object.create(Hi);
    return u.toFlatObject(e, o, function(c) {
        return c !== Error.prototype
    }, a => a !== "isAxiosError"), w.call(o, e.message, t, i, n, r), o.cause = e, o.name = e.name, s && Object.assign(o, s), o
};
const rr = null;

function we(e) {
    return u.isPlainObject(e) || u.isArray(e)
}

function Mi(e) {
    return u.endsWith(e, "[]") ? e.slice(0, -2) : e
}

function ui(e, t, i) {
    return e ? e.concat(t).map(function(r, s) {
        return r = Mi(r), !i && s ? "[" + r + "]" : r
    }).join(i ? "." : "") : t
}

function sr(e) {
    return u.isArray(e) && !e.some(we)
}
const or = u.toFlatObject(u, {}, null, function(t) {
    return /^is[A-Z]/.test(t)
});

function ce(e, t, i) {
    if (!u.isObject(e)) throw new TypeError("target must be an object");
    t = t || new FormData, i = u.toFlatObject(i, {
        metaTokens: !0,
        dots: !1,
        indexes: !1
    }, !1, function(p, m) {
        return !u.isUndefined(m[p])
    });
    const n = i.metaTokens,
        r = i.visitor || l,
        s = i.dots,
        o = i.indexes,
        c = (i.Blob || typeof Blob < "u" && Blob) && u.isSpecCompliantForm(t);
    if (!u.isFunction(r)) throw new TypeError("visitor must be a function");

    function f(h) {
        if (h === null) return "";
        if (u.isDate(h)) return h.toISOString();
        if (!c && u.isBlob(h)) throw new w("Blob is not supported. Use a Buffer instead.");
        return u.isArrayBuffer(h) || u.isTypedArray(h) ? c && typeof Blob == "function" ? new Blob([h]) : Buffer.from(h) : h
    }

    function l(h, p, m) {
        let y = h;
        if (h && !m && typeof h == "object") {
            if (u.endsWith(p, "{}")) p = n ? p : p.slice(0, -2), h = JSON.stringify(h);
            else if (u.isArray(h) && sr(h) || (u.isFileList(h) || u.endsWith(p, "[]")) && (y = u.toArray(h))) return p = Mi(p), y.forEach(function(E, b) {
                !(u.isUndefined(E) || E === null) && t.append(o === !0 ? ui([p], b, s) : o === null ? p : p + "[]", f(E))
            }), !1
        }
        return we(h) ? !0 : (t.append(ui(m, p, s), f(h)), !1)
    }
    const d = [],
        g = Object.assign(or, {
            defaultVisitor: l,
            convertValue: f,
            isVisitable: we
        });

    function v(h, p) {
        if (!u.isUndefined(h)) {
            if (d.indexOf(h) !== -1) throw Error("Circular reference detected in " + p.join("."));
            d.push(h), u.forEach(h, function(y, _) {
                (!(u.isUndefined(y) || y === null) && r.call(t, y, u.isString(_) ? _.trim() : _, p, g)) === !0 && v(y, p ? p.concat(_) : [_])
            }), d.pop()
        }
    }
    if (!u.isObject(e)) throw new TypeError("data must be an object");
    return v(e), t
}

function di(e) {
    const t = {
        "!": "%21",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "~": "%7E",
        "%20": "+",
        "%00": "\0"
    };
    return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
        return t[n]
    })
}

function ke(e, t) {
    this._pairs = [], e && ce(e, this, t)
}
const Ui = ke.prototype;
Ui.append = function(t, i) {
    this._pairs.push([t, i])
};
Ui.toString = function(t) {
    const i = t ? function(n) {
        return t.call(this, n, di)
    } : di;
    return this._pairs.map(function(r) {
        return i(r[0]) + "=" + i(r[1])
    }, "").join("&")
};

function ar(e) {
    return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
}

function zi(e, t, i) {
    if (!t) return e;
    const n = i && i.encode || ar,
        r = i && i.serialize;
    let s;
    if (r ? s = r(t, i) : s = u.isURLSearchParams(t) ? t.toString() : new ke(t, i).toString(n), s) {
        const o = e.indexOf("#");
        o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + s
    }
    return e
}
class cr {
    constructor() {
        this.handlers = []
    }
    use(t, i, n) {
        return this.handlers.push({
            fulfilled: t,
            rejected: i,
            synchronous: n ? n.synchronous : !1,
            runWhen: n ? n.runWhen : null
        }), this.handlers.length - 1
    }
    eject(t) {
        this.handlers[t] && (this.handlers[t] = null)
    }
    clear() {
        this.handlers && (this.handlers = [])
    }
    forEach(t) {
        u.forEach(this.handlers, function(n) {
            n !== null && t(n)
        })
    }
}
const fi = cr,
    Vi = {
        silentJSONParsing: !0,
        forcedJSONParsing: !0,
        clarifyTimeoutError: !1
    },
    lr = typeof URLSearchParams < "u" ? URLSearchParams : ke,
    ur = typeof FormData < "u" ? FormData : null,
    dr = typeof Blob < "u" ? Blob : null,
    fr = {
        isBrowser: !0,
        classes: {
            URLSearchParams: lr,
            FormData: ur,
            Blob: dr
        },
        protocols: ["http", "https", "file", "blob", "url", "data"]
    },
    Wi = typeof window < "u" && typeof document < "u",
    pr = (e => Wi && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product),
    hr = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(),
    vr = Object.freeze(Object.defineProperty({
        __proto__: null,
        hasBrowserEnv: Wi,
        hasStandardBrowserEnv: pr,
        hasStandardBrowserWebWorkerEnv: hr
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    U = { ...vr,
        ...fr
    };

function mr(e, t) {
    return ce(e, new U.classes.URLSearchParams, Object.assign({
        visitor: function(i, n, r, s) {
            return U.isNode && u.isBuffer(i) ? (this.append(n, i.toString("base64")), !1) : s.defaultVisitor.apply(this, arguments)
        }
    }, t))
}

function gr(e) {
    return u.matchAll(/\w+|\[(\w*)]/g, e).map(t => t[0] === "[]" ? "" : t[1] || t[0])
}

function yr(e) {
    const t = {},
        i = Object.keys(e);
    let n;
    const r = i.length;
    let s;
    for (n = 0; n < r; n++) s = i[n], t[s] = e[s];
    return t
}

function $i(e) {
    function t(i, n, r, s) {
        let o = i[s++];
        const a = Number.isFinite(+o),
            c = s >= i.length;
        return o = !o && u.isArray(r) ? r.length : o, c ? (u.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !a) : ((!r[o] || !u.isObject(r[o])) && (r[o] = []), t(i, n, r[o], s) && u.isArray(r[o]) && (r[o] = yr(r[o])), !a)
    }
    if (u.isFormData(e) && u.isFunction(e.entries)) {
        const i = {};
        return u.forEachEntry(e, (n, r) => {
            t(gr(n), r, i, 0)
        }), i
    }
    return null
}

function br(e, t, i) {
    if (u.isString(e)) try {
        return (t || JSON.parse)(e), u.trim(e)
    } catch (n) {
        if (n.name !== "SyntaxError") throw n
    }
    return (i || JSON.stringify)(e)
}
const Ce = {
    transitional: Vi,
    adapter: ["xhr", "http"],
    transformRequest: [function(t, i) {
        const n = i.getContentType() || "",
            r = n.indexOf("application/json") > -1,
            s = u.isObject(t);
        if (s && u.isHTMLForm(t) && (t = new FormData(t)), u.isFormData(t)) return r && r ? JSON.stringify($i(t)) : t;
        if (u.isArrayBuffer(t) || u.isBuffer(t) || u.isStream(t) || u.isFile(t) || u.isBlob(t)) return t;
        if (u.isArrayBufferView(t)) return t.buffer;
        if (u.isURLSearchParams(t)) return i.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
        let a;
        if (s) {
            if (n.indexOf("application/x-www-form-urlencoded") > -1) return mr(t, this.formSerializer).toString();
            if ((a = u.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
                const c = this.env && this.env.FormData;
                return ce(a ? {
                    "files[]": t
                } : t, c && new c, this.formSerializer)
            }
        }
        return s || r ? (i.setContentType("application/json", !1), br(t)) : t
    }],
    transformResponse: [function(t) {
        const i = this.transitional || Ce.transitional,
            n = i && i.forcedJSONParsing,
            r = this.responseType === "json";
        if (t && u.isString(t) && (n && !this.responseType || r)) {
            const o = !(i && i.silentJSONParsing) && r;
            try {
                return JSON.parse(t)
            } catch (a) {
                if (o) throw a.name === "SyntaxError" ? w.from(a, w.ERR_BAD_RESPONSE, this, null, this.response) : a
            }
        }
        return t
    }],
    timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {
        FormData: U.classes.FormData,
        Blob: U.classes.Blob
    },
    validateStatus: function(t) {
        return t >= 200 && t < 300
    },
    headers: {
        common: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": void 0
        }
    }
};
u.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
    Ce.headers[e] = {}
});
const Pe = Ce,
    wr = u.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
    _r = e => {
        const t = {};
        let i, n, r;
        return e && e.split(`
`).forEach(function(o) {
            r = o.indexOf(":"), i = o.substring(0, r).trim().toLowerCase(), n = o.substring(r + 1).trim(), !(!i || t[i] && wr[i]) && (i === "set-cookie" ? t[i] ? t[i].push(n) : t[i] = [n] : t[i] = t[i] ? t[i] + ", " + n : n)
        }), t
    },
    pi = Symbol("internals");

function wt(e) {
    return e && String(e).trim().toLowerCase()
}

function Vt(e) {
    return e === !1 || e == null ? e : u.isArray(e) ? e.map(Vt) : String(e)
}

function Er(e) {
    const t = Object.create(null),
        i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
    let n;
    for (; n = i.exec(e);) t[n[1]] = n[2];
    return t
}
const Or = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

function me(e, t, i, n, r) {
    if (u.isFunction(n)) return n.call(this, t, i);
    if (r && (t = i), !!u.isString(t)) {
        if (u.isString(n)) return t.indexOf(n) !== -1;
        if (u.isRegExp(n)) return n.test(t)
    }
}

function Ar(e) {
    return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, i, n) => i.toUpperCase() + n)
}

function xr(e, t) {
    const i = u.toCamelCase(" " + t);
    ["get", "set", "has"].forEach(n => {
        Object.defineProperty(e, n + i, {
            value: function(r, s, o) {
                return this[n].call(this, t, r, s, o)
            },
            configurable: !0
        })
    })
}
class le {
    constructor(t) {
        t && this.set(t)
    }
    set(t, i, n) {
        const r = this;

        function s(a, c, f) {
            const l = wt(c);
            if (!l) throw new Error("header name must be a non-empty string");
            const d = u.findKey(r, l);
            (!d || r[d] === void 0 || f === !0 || f === void 0 && r[d] !== !1) && (r[d || c] = Vt(a))
        }
        const o = (a, c) => u.forEach(a, (f, l) => s(f, l, c));
        return u.isPlainObject(t) || t instanceof this.constructor ? o(t, i) : u.isString(t) && (t = t.trim()) && !Or(t) ? o(_r(t), i) : t != null && s(i, t, n), this
    }
    get(t, i) {
        if (t = wt(t), t) {
            const n = u.findKey(this, t);
            if (n) {
                const r = this[n];
                if (!i) return r;
                if (i === !0) return Er(r);
                if (u.isFunction(i)) return i.call(this, r, n);
                if (u.isRegExp(i)) return i.exec(r);
                throw new TypeError("parser must be boolean|regexp|function")
            }
        }
    }
    has(t, i) {
        if (t = wt(t), t) {
            const n = u.findKey(this, t);
            return !!(n && this[n] !== void 0 && (!i || me(this, this[n], n, i)))
        }
        return !1
    }
    delete(t, i) {
        const n = this;
        let r = !1;

        function s(o) {
            if (o = wt(o), o) {
                const a = u.findKey(n, o);
                a && (!i || me(n, n[a], a, i)) && (delete n[a], r = !0)
            }
        }
        return u.isArray(t) ? t.forEach(s) : s(t), r
    }
    clear(t) {
        const i = Object.keys(this);
        let n = i.length,
            r = !1;
        for (; n--;) {
            const s = i[n];
            (!t || me(this, this[s], s, t, !0)) && (delete this[s], r = !0)
        }
        return r
    }
    normalize(t) {
        const i = this,
            n = {};
        return u.forEach(this, (r, s) => {
            const o = u.findKey(n, s);
            if (o) {
                i[o] = Vt(r), delete i[s];
                return
            }
            const a = t ? Ar(s) : String(s).trim();
            a !== s && delete i[s], i[a] = Vt(r), n[a] = !0
        }), this
    }
    concat(...t) {
        return this.constructor.concat(this, ...t)
    }
    toJSON(t) {
        const i = Object.create(null);
        return u.forEach(this, (n, r) => {
            n != null && n !== !1 && (i[r] = t && u.isArray(n) ? n.join(", ") : n)
        }), i
    }[Symbol.iterator]() {
        return Object.entries(this.toJSON())[Symbol.iterator]()
    }
    toString() {
        return Object.entries(this.toJSON()).map(([t, i]) => t + ": " + i).join(`
`)
    }
    get[Symbol.toStringTag]() {
        return "AxiosHeaders"
    }
    static from(t) {
        return t instanceof this ? t : new this(t)
    }
    static concat(t, ...i) {
        const n = new this(t);
        return i.forEach(r => n.set(r)), n
    }
    static accessor(t) {
        const n = (this[pi] = this[pi] = {
                accessors: {}
            }).accessors,
            r = this.prototype;

        function s(o) {
            const a = wt(o);
            n[a] || (xr(r, o), n[a] = !0)
        }
        return u.isArray(t) ? t.forEach(s) : s(t), this
    }
}
le.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
u.reduceDescriptors(le.prototype, ({
    value: e
}, t) => {
    let i = t[0].toUpperCase() + t.slice(1);
    return {
        get: () => e,
        set(n) {
            this[i] = n
        }
    }
});
u.freezeMethods(le);
const $ = le;

function ge(e, t) {
    const i = this || Pe,
        n = t || i,
        r = $.from(n.headers);
    let s = n.data;
    return u.forEach(e, function(a) {
        s = a.call(i, s, r.normalize(), t ? t.status : void 0)
    }), r.normalize(), s
}

function Ji(e) {
    return !!(e && e.__CANCEL__)
}

function kt(e, t, i) {
    w.call(this, e ?? "canceled", w.ERR_CANCELED, t, i),
      (this.name = "CanceledError");
  }
u.inherits(kt, w, {
    __CANCEL__: !0
});

function Lr(e, t, i) {
    const n = i.config.validateStatus;
    !i.status || !n || n(i.status) ? e(i) : t(new w("Request failed with status code " + i.status, [w.ERR_BAD_REQUEST, w.ERR_BAD_RESPONSE][Math.floor(i.status / 100) - 4], i.config, i.request, i))
}
const Tr = U.hasStandardBrowserEnv ? {
    write(e, t, i, n, r, s) {
        const o = [e + "=" + encodeURIComponent(t)];
        u.isNumber(i) && o.push("expires=" + new Date(i).toGMTString()), u.isString(n) && o.push("path=" + n), u.isString(r) && o.push("domain=" + r), s === !0 && o.push("secure"), document.cookie = o.join("; ")
    },
    read(e) {
        const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
        return t ? decodeURIComponent(t[3]) : null
    },
    remove(e) {
        this.write(e, "", Date.now() - 864e5)
    }
} : {
    write() {},
    read() {
        return null
    },
    remove() {}
};

function Sr(e) {
    return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
}

function kr(e, t) {
    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
}

function Ki(e, t) {
    return e && !Sr(t) ? kr(e, t) : t
}
const Cr = U.hasStandardBrowserEnv ? function() {
    const t = /(msie|trident)/i.test(navigator.userAgent),
        i = document.createElement("a");
    let n;

    function r(s) {
        let o = s;
        return t && (i.setAttribute("href", o), o = i.href), i.setAttribute("href", o), {
            href: i.href,
            protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
            host: i.host,
            search: i.search ? i.search.replace(/^\?/, "") : "",
            hash: i.hash ? i.hash.replace(/^#/, "") : "",
            hostname: i.hostname,
            port: i.port,
            pathname: i.pathname.charAt(0) === "/" ? i.pathname : "/" + i.pathname
        }
    }
    return n = r(window.location.href),
        function(o) {
            const a = u.isString(o) ? r(o) : o;
            return a.protocol === n.protocol && a.host === n.host
        }
}() : function() {
    return function() {
        return !0
    }
}();

function Pr(e) {
    const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
    return t && t[1] || ""
}

function Rr(e, t) {
    e = e || 10;
    const i = new Array(e),
        n = new Array(e);
    let r = 0,
        s = 0,
        o;
    return t = t !== void 0 ? t : 1e3,
        function(c) {
            const f = Date.now(),
                l = n[s];
            o || (o = f), i[r] = c, n[r] = f;
            let d = s,
                g = 0;
            for (; d !== r;) g += i[d++], d = d % e;
            if (r = (r + 1) % e, r === s && (s = (s + 1) % e), f - o < t) return;
            const v = l && f - l;
            return v ? Math.round(g * 1e3 / v) : void 0
        }
}

function hi(e, t) {
    let i = 0;
    const n = Rr(50, 250);
    return r => {
        const s = r.loaded,
            o = r.lengthComputable ? r.total : void 0,
            a = s - i,
            c = n(a),
            f = s <= o;
        i = s;
        const l = {
            loaded: s,
            total: o,
            progress: o ? s / o : void 0,
            bytes: a,
            rate: c || void 0,
            estimated: c && o && f ? (o - s) / c : void 0,
            event: r
        };
        l[t ? "download" : "upload"] = !0, e(l)
    }
}
const Dr = typeof XMLHttpRequest < "u",
    jr = Dr && function(e) {
        return new Promise(function(i, n) {
            let r = e.data;
            const s = $.from(e.headers).normalize();
            let {
                responseType: o,
                withXSRFToken: a
            } = e, c;

            function f() {
                e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c)
            }
            let l;
            if (u.isFormData(r)) {
                if (U.hasStandardBrowserEnv || U.hasStandardBrowserWebWorkerEnv) s.setContentType(!1);
                else if ((l = s.getContentType()) !== !1) {
                    const [p, ...m] = l ? l.split(";").map(y => y.trim()).filter(Boolean) : [];
                    s.setContentType([p || "multipart/form-data", ...m].join("; "))
                }
            }
            let d = new XMLHttpRequest;
            if (e.auth) {
                const p = e.auth.username || "",
                    m = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                s.set("Authorization", "Basic " + btoa(p + ":" + m))
            }
            const g = Ki(e.baseURL, e.url);
            d.open(e.method.toUpperCase(), zi(g, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;

            function v() {
                if (!d) return;
                const p = $.from("getAllResponseHeaders" in d && d.getAllResponseHeaders()),
                    y = {
                        data: !o || o === "text" || o === "json" ? d.responseText : d.response,
                        status: d.status,
                        statusText: d.statusText,
                        headers: p,
                        config: e,
                        request: d
                    };
                Lr(function(E) {
                    i(E), f()
                }, function(E) {
                    n(E), f()
                }, y), d = null
            }
            if ("onloadend" in d ? d.onloadend = v : d.onreadystatechange = function() {
                    !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(v)
                }, d.onabort = function() {
                    d && (n(new w("Request aborted", w.ECONNABORTED, e, d)), d = null)
                }, d.onerror = function() {
                    n(new w("Network Error", w.ERR_NETWORK, e, d)), d = null
                }, d.ontimeout = function() {
                    let m = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                    const y = e.transitional || Vi;
                    e.timeoutErrorMessage && (m = e.timeoutErrorMessage), n(new w(m, y.clarifyTimeoutError ? w.ETIMEDOUT : w.ECONNABORTED, e, d)), d = null
                }, U.hasStandardBrowserEnv && (a && u.isFunction(a) && (a = a(e)), a || a !== !1 && Cr(g))) {
                const p = e.xsrfHeaderName && e.xsrfCookieName && Tr.read(e.xsrfCookieName);
                p && s.set(e.xsrfHeaderName, p)
            }
            r === void 0 && s.setContentType(null), "setRequestHeader" in d && u.forEach(s.toJSON(), function(m, y) {
                d.setRequestHeader(y, m)
            }), u.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), o && o !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", hi(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", hi(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = p => {
                d && (n(!p || p.type ? new kt(null, e, d) : p), d.abort(), d = null)
            }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
            const h = Pr(g);
            if (h && U.protocols.indexOf(h) === -1) {
                n(new w("Unsupported protocol " + h + ":", w.ERR_BAD_REQUEST, e));
                return
            }
            d.send(r || null)
        })
    },
    _e = {
        http: rr,
        xhr: jr
    };
u.forEach(_e, (e, t) => {
    if (e) {
        try {
            Object.defineProperty(e, "name", {
                value: t
            })
        } catch {}
        Object.defineProperty(e, "adapterName", {
            value: t
        })
    }
});
const vi = e => `- ${e}`,
    Ir = e => u.isFunction(e) || e === null || e === !1,
    Xi = {
        getAdapter: e => {
            e = u.isArray(e) ? e : [e];
            const {
                length: t
            } = e;
            let i, n;
            const r = {};
            for (let s = 0; s < t; s++) {
                i = e[s];
                let o;
                if (n = i, !Ir(i) && (n = _e[(o = String(i)).toLowerCase()], n === void 0)) throw new w(`Unknown adapter '${o}'`);
                if (n) break;
                r[o || "#" + s] = n
            }
            if (!n) {
                const s = Object.entries(r).map(([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build"));
                let o = t ? s.length > 1 ? `since :
` + s.map(vi).join(`
`) : " " + vi(s[0]) : "as no adapter specified";
                throw new w("There is no suitable adapter to dispatch the request " + o, "ERR_NOT_SUPPORT")
            }
            return n
        },
        adapters: _e
    };

function ye(e) {
    if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new kt(null, e)
}

function mi(e) {
    return ye(e), e.headers = $.from(e.headers), e.data = ge.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Xi.getAdapter(e.adapter || Pe.adapter)(e).then(function(n) {
        return ye(e), n.data = ge.call(e, e.transformResponse, n), n.headers = $.from(n.headers), n
    }, function(n) {
        return Ji(n) || (ye(e), n && n.response && (n.response.data = ge.call(e, e.transformResponse, n.response), n.response.headers = $.from(n.response.headers))), Promise.reject(n)
    })
}
const gi = e => e instanceof $ ? e.toJSON() : e;

function ft(e, t) {
    t = t || {};
    const i = {};

    function n(f, l, d) {
        return u.isPlainObject(f) && u.isPlainObject(l) ? u.merge.call({
            caseless: d
        }, f, l) : u.isPlainObject(l) ? u.merge({}, l) : u.isArray(l) ? l.slice() : l
    }

    function r(f, l, d) {
        if (u.isUndefined(l)) {
            if (!u.isUndefined(f)) return n(void 0, f, d)
        } else return n(f, l, d)
    }

    function s(f, l) {
        if (!u.isUndefined(l)) return n(void 0, l)
    }

    function o(f, l) {
        if (u.isUndefined(l)) {
            if (!u.isUndefined(f)) return n(void 0, f)
        } else return n(void 0, l)
    }

    function a(f, l, d) {
        if (d in t) return n(f, l);
        if (d in e) return n(void 0, f)
    }
    const c = {
        url: s,
        method: s,
        data: s,
        baseURL: o,
        transformRequest: o,
        transformResponse: o,
        paramsSerializer: o,
        timeout: o,
        timeoutMessage: o,
        withCredentials: o,
        withXSRFToken: o,
        adapter: o,
        responseType: o,
        xsrfCookieName: o,
        xsrfHeaderName: o,
        onUploadProgress: o,
        onDownloadProgress: o,
        decompress: o,
        maxContentLength: o,
        maxBodyLength: o,
        beforeRedirect: o,
        transport: o,
        httpAgent: o,
        httpsAgent: o,
        cancelToken: o,
        socketPath: o,
        responseEncoding: o,
        validateStatus: a,
        headers: (f, l) => r(gi(f), gi(l), !0)
    };
    return u.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
        const d = c[l] || r,
            g = d(e[l], t[l], l);
        u.isUndefined(g) && d !== a || (i[l] = g)
    }), i
}
const Gi = "1.6.2",
    Re = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
    Re[e] = function(n) {
        return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
    }
});
const yi = {};
Re.transitional = function(t, i, n) {
    function r(s, o) {
        return "[Axios v" + Gi + "] Transitional option '" + s + "'" + o + (n ? ". " + n : "")
    }
    return (s, o, a) => {
        if (t === !1) throw new w(r(o, " has been removed" + (i ? " in " + i : "")), w.ERR_DEPRECATED);
        return i && !yi[o] && (yi[o] = !0, console.warn(r(o, " has been deprecated since v" + i + " and will be removed in the near future"))), t ? t(s, o, a) : !0
    }
};

function Br(e, t, i) {
    if (typeof e != "object") throw new w("options must be an object", w.ERR_BAD_OPTION_VALUE);
    const n = Object.keys(e);
    let r = n.length;
    for (; r-- > 0;) {
        const s = n[r],
            o = t[s];
        if (o) {
            const a = e[s],
                c = a === void 0 || o(a, s, e);
            if (c !== !0) throw new w("option " + s + " must be " + c, w.ERR_BAD_OPTION_VALUE);
            continue
        }
        if (i !== !0) throw new w("Unknown option " + s, w.ERR_BAD_OPTION)
    }
}
const Ee = {
        assertOptions: Br,
        validators: Re
    },
    X = Ee.validators;
class Kt {
    constructor(t) {
        this.defaults = t, this.interceptors = {
            request: new fi,
            response: new fi
        }
    }
    request(t, i) {
        typeof t == "string" ? (i = i || {}, i.url = t) : i = t || {}, i = ft(this.defaults, i);
        const {
            transitional: n,
            paramsSerializer: r,
            headers: s
        } = i;
        n !== void 0 && Ee.assertOptions(n, {
            silentJSONParsing: X.transitional(X.boolean),
            forcedJSONParsing: X.transitional(X.boolean),
            clarifyTimeoutError: X.transitional(X.boolean)
        }, !1), r != null && (u.isFunction(r) ? i.paramsSerializer = {
            serialize: r
        } : Ee.assertOptions(r, {
            encode: X.function,
            serialize: X.function
        }, !0)), i.method = (i.method || this.defaults.method || "get").toLowerCase();
        let o = s && u.merge(s.common, s[i.method]);
        s && u.forEach(["delete", "get", "head", "post", "put", "patch", "common"], h => {
            delete s[h]
        }), i.headers = $.concat(o, s);
        const a = [];
        let c = !0;
        this.interceptors.request.forEach(function(p) {
            typeof p.runWhen == "function" && p.runWhen(i) === !1 || (c = c && p.synchronous, a.unshift(p.fulfilled, p.rejected))
        });
        const f = [];
        this.interceptors.response.forEach(function(p) {
            f.push(p.fulfilled, p.rejected)
        });
        let l, d = 0,
            g;
        if (!c) {
            const h = [mi.bind(this), void 0];
            for (h.unshift.apply(h, a), h.push.apply(h, f), g = h.length, l = Promise.resolve(i); d < g;) l = l.then(h[d++], h[d++]);
            return l
        }
        g = a.length;
        let v = i;
        for (d = 0; d < g;) {
            const h = a[d++],
                p = a[d++];
            try {
                v = h(v)
            } catch (m) {
                p.call(this, m);
                break
            }
        }
        try {
            l = mi.call(this, v)
        } catch (h) {
            return Promise.reject(h)
        }
        for (d = 0, g = f.length; d < g;) l = l.then(f[d++], f[d++]);
        return l
    }
    getUri(t) {
        t = ft(this.defaults, t);
        const i = Ki(t.baseURL, t.url);
        return zi(i, t.params, t.paramsSerializer)
    }
}
u.forEach(["delete", "get", "head", "options"], function(t) {
    Kt.prototype[t] = function(i, n) {
        return this.request(ft(n || {}, {
            method: t,
            url: i,
            data: (n || {}).data
        }))
    }
});
u.forEach(["post", "put", "patch"], function(t) {
    function i(n) {
        return function(s, o, a) {
            return this.request(ft(a || {}, {
                method: t,
                headers: n ? {
                    "Content-Type": "multipart/form-data"
                } : {},
                url: s,
                data: o
            }))
        }
    }
    Kt.prototype[t] = i(), Kt.prototype[t + "Form"] = i(!0)
});
const Wt = Kt;
class De {
    constructor(t) {
        if (typeof t != "function") throw new TypeError("executor must be a function.");
        let i;
        this.promise = new Promise(function(s) {
            i = s
        });
        const n = this;
        this.promise.then(r => {
            if (!n._listeners) return;
            let s = n._listeners.length;
            for (; s-- > 0;) n._listeners[s](r);
            n._listeners = null
        }), this.promise.then = r => {
            let s;
            const o = new Promise(a => {
                n.subscribe(a), s = a
            }).then(r);
            return o.cancel = function() {
                n.unsubscribe(s)
            }, o
        }, t(function(s, o, a) {
            n.reason || (n.reason = new kt(s, o, a), i(n.reason))
        })
    }
    throwIfRequested() {
        if (this.reason) throw this.reason
    }
    subscribe(t) {
        if (this.reason) {
            t(this.reason);
            return
        }
        this._listeners ? this._listeners.push(t) : this._listeners = [t]
    }
    unsubscribe(t) {
        if (!this._listeners) return;
        const i = this._listeners.indexOf(t);
        i !== -1 && this._listeners.splice(i, 1)
    }
    static source() {
        let t;
        return {
            token: new De(function(r) {
                t = r
            }),
            cancel: t
        }
    }
}
const Nr = De;

function Fr(e) {
    return function(i) {
        return e.apply(null, i)
    }
}

function Hr(e) {
    return u.isObject(e) && e.isAxiosError === !0
}
const Oe = {
    Continue: 100,
    SwitchingProtocols: 101,
    Processing: 102,
    EarlyHints: 103,
    Ok: 200,
    Created: 201,
    Accepted: 202,
    NonAuthoritativeInformation: 203,
    NoContent: 204,
    ResetContent: 205,
    PartialContent: 206,
    MultiStatus: 207,
    AlreadyReported: 208,
    ImUsed: 226,
    MultipleChoices: 300,
    MovedPermanently: 301,
    Found: 302,
    SeeOther: 303,
    NotModified: 304,
    UseProxy: 305,
    Unused: 306,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    BadRequest: 400,
    Unauthorized: 401,
    PaymentRequired: 402,
    Forbidden: 403,
    NotFound: 404,
    MethodNotAllowed: 405,
    NotAcceptable: 406,
    ProxyAuthenticationRequired: 407,
    RequestTimeout: 408,
    Conflict: 409,
    Gone: 410,
    LengthRequired: 411,
    PreconditionFailed: 412,
    PayloadTooLarge: 413,
    UriTooLong: 414,
    UnsupportedMediaType: 415,
    RangeNotSatisfiable: 416,
    ExpectationFailed: 417,
    ImATeapot: 418,
    MisdirectedRequest: 421,
    UnprocessableEntity: 422,
    Locked: 423,
    FailedDependency: 424,
    TooEarly: 425,
    UpgradeRequired: 426,
    PreconditionRequired: 428,
    TooManyRequests: 429,
    RequestHeaderFieldsTooLarge: 431,
    UnavailableForLegalReasons: 451,
    InternalServerError: 500,
    NotImplemented: 501,
    BadGateway: 502,
    ServiceUnavailable: 503,
    GatewayTimeout: 504,
    HttpVersionNotSupported: 505,
    VariantAlsoNegotiates: 506,
    InsufficientStorage: 507,
    LoopDetected: 508,
    NotExtended: 510,
    NetworkAuthenticationRequired: 511
};
Object.entries(Oe).forEach(([e, t]) => {
    Oe[t] = e
});
const qr = Oe;

function Yi(e) {
    const t = new Wt(e),
        i = Pi(Wt.prototype.request, t);
    return u.extend(i, Wt.prototype, t, {
        allOwnKeys: !0
    }), u.extend(i, t, null, {
        allOwnKeys: !0
    }), i.create = function(r) {
        return Yi(ft(e, r))
    }, i
}
const L = Yi(Pe);
L.Axios = Wt;
L.CanceledError = kt;
L.CancelToken = Nr;
L.isCancel = Ji;
L.VERSION = Gi;
L.toFormData = ce;
L.AxiosError = w;
L.Cancel = L.CanceledError;
L.all = function(t) {
    return Promise.all(t)
};
L.spread = Fr;
L.isAxiosError = Hr;
L.mergeConfig = ft;
L.AxiosHeaders = $;
L.formToJSON = e => $i(u.isHTMLForm(e) ? new FormData(e) : e);
L.getAdapter = Xi.getAdapter;
L.HttpStatusCode = qr;
L.default = L;
const Mr = L;
window.axios = Mr;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
var Ur = function() {
        function e(t, i) {
            i === void 0 && (i = []), this._eventType = t, this._eventFunctions = i
        }
        return e.prototype.init = function() {
            var t = this;
            this._eventFunctions.forEach(function(i) {
                typeof window < "u" && window.addEventListener(t._eventType, i)
            })
        }, e
    }(),
    Xt = globalThis && globalThis.__assign || function() {
        return Xt = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, Xt.apply(this, arguments)
    },
    Gt = {
        alwaysOpen: !1,
        activeClasses: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white",
        inactiveClasses: "text-gray-500 dark:text-gray-400",
        onOpen: function() {},
        onClose: function() {},
        onToggle: function() {}
    },
    Qi = function() {
        function e(t, i) {
            t === void 0 && (t = []), i === void 0 && (i = Gt), this._items = t, this._options = Xt(Xt({}, Gt), i), this._init()
        }
        return e.prototype._init = function() {
            var t = this;
            this._items.length && this._items.map(function(i) {
                i.active && t.open(i.id), i.triggerEl.addEventListener("click", function() {
                    t.toggle(i.id)
                })
            })
        }, e.prototype.getItem = function(t) {
            return this._items.filter(function(i) {
                return i.id === t
            })[0]
        }, e.prototype.open = function(t) {
            var i, n, r = this,
                s = this.getItem(t);
            this._options.alwaysOpen || this._items.map(function(o) {
                var a, c;
                o !== s && ((a = o.triggerEl.classList).remove.apply(a, r._options.activeClasses.split(" ")), (c = o.triggerEl.classList).add.apply(c, r._options.inactiveClasses.split(" ")), o.targetEl.classList.add("hidden"), o.triggerEl.setAttribute("aria-expanded", "false"), o.active = !1, o.iconEl && o.iconEl.classList.remove("rotate-180"))
            }), (i = s.triggerEl.classList).add.apply(i, this._options.activeClasses.split(" ")), (n = s.triggerEl.classList).remove.apply(n, this._options.inactiveClasses.split(" ")), s.triggerEl.setAttribute("aria-expanded", "true"), s.targetEl.classList.remove("hidden"), s.active = !0, s.iconEl && s.iconEl.classList.add("rotate-180"), this._options.onOpen(this, s)
        }, e.prototype.toggle = function(t) {
            var i = this.getItem(t);
            i.active ? this.close(t) : this.open(t), this._options.onToggle(this, i)
        }, e.prototype.close = function(t) {
            var i, n, r = this.getItem(t);
            (i = r.triggerEl.classList).remove.apply(i, this._options.activeClasses.split(" ")), (n = r.triggerEl.classList).add.apply(n, this._options.inactiveClasses.split(" ")), r.targetEl.classList.add("hidden"), r.triggerEl.setAttribute("aria-expanded", "false"), r.active = !1, r.iconEl && r.iconEl.classList.remove("rotate-180"), this._options.onClose(this, r)
        }, e
    }();

function je() {
    document.querySelectorAll("[data-accordion]").forEach(function(e) {
        var t = e.getAttribute("data-accordion"),
            i = e.getAttribute("data-active-classes"),
            n = e.getAttribute("data-inactive-classes"),
            r = [];
        e.querySelectorAll("[data-accordion-target]").forEach(function(s) {
            if (s.closest("[data-accordion]") === e) {
                var o = {
                    id: s.getAttribute("data-accordion-target"),
                    triggerEl: s,
                    targetEl: document.querySelector(s.getAttribute("data-accordion-target")),
                    iconEl: s.querySelector("[data-accordion-icon]"),
                    active: s.getAttribute("aria-expanded") === "true"
                };
                r.push(o)
            }
        }), new Qi(r, {
            alwaysOpen: t === "open",
            activeClasses: i || Gt.activeClasses,
            inactiveClasses: n || Gt.inactiveClasses
        })
    })
}
typeof window < "u" && (window.Accordion = Qi, window.initAccordions = je);
var Yt = globalThis && globalThis.__assign || function() {
        return Yt = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, Yt.apply(this, arguments)
    },
    bi = {
        onCollapse: function() {},
        onExpand: function() {},
        onToggle: function() {}
    },
    Zi = function() {
        function e(t, i, n) {
            t === void 0 && (t = null), i === void 0 && (i = null), n === void 0 && (n = bi), this._targetEl = t, this._triggerEl = i, this._options = Yt(Yt({}, bi), n), this._visible = !1, this._init()
        }
        return e.prototype._init = function() {
            var t = this;
            this._triggerEl && (this._triggerEl.hasAttribute("aria-expanded") ? this._visible = this._triggerEl.getAttribute("aria-expanded") === "true" : this._visible = !this._targetEl.classList.contains("hidden"), this._triggerEl.addEventListener("click", function() {
                t.toggle()
            }))
        }, e.prototype.collapse = function() {
            this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), this._visible = !1, this._options.onCollapse(this)
        }, e.prototype.expand = function() {
            this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), this._visible = !0, this._options.onExpand(this)
        }, e.prototype.toggle = function() {
            this._visible ? this.collapse() : this.expand(), this._options.onToggle(this)
        }, e
    }();

function Ie() {
    document.querySelectorAll("[data-collapse-toggle]").forEach(function(e) {
        var t = e.getAttribute("data-collapse-toggle"),
            i = document.getElementById(t);
        i ? new Zi(i, e) : console.error('The target element with id "'.concat(t, '" does not exist. Please check the data-collapse-toggle attribute.'))
    })
}
typeof window < "u" && (window.Collapse = Zi, window.initCollapses = Ie);
var ot = globalThis && globalThis.__assign || function() {
        return ot = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, ot.apply(this, arguments)
    },
    $t = {
        defaultPosition: 0,
        indicators: {
            items: [],
            activeClasses: "bg-white dark:bg-gray-800",
            inactiveClasses: "bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
        },
        interval: 3e3,
        onNext: function() {},
        onPrev: function() {},
        onChange: function() {}
    },
    tn = function() {
        function e(t, i) {
            t === void 0 && (t = []), i === void 0 && (i = $t), this._items = t, this._options = ot(ot(ot({}, $t), i), {
                indicators: ot(ot({}, $t.indicators), i.indicators)
            }), this._activeItem = this.getItem(this._options.defaultPosition), this._indicators = this._options.indicators.items, this._intervalDuration = this._options.interval, this._intervalInstance = null, this._init()
        }
        return e.prototype._init = function() {
            var t = this;
            this._items.map(function(i) {
                i.el.classList.add("absolute", "inset-0", "transition-transform", "transform")
            }), this._getActiveItem() ? this.slideTo(this._getActiveItem().position) : this.slideTo(0), this._indicators.map(function(i, n) {
                i.el.addEventListener("click", function() {
                    t.slideTo(n)
                })
            })
        }, e.prototype.getItem = function(t) {
            return this._items[t]
        }, e.prototype.slideTo = function(t) {
            var i = this._items[t],
                n = {
                    left: i.position === 0 ? this._items[this._items.length - 1] : this._items[i.position - 1],
                    middle: i,
                    right: i.position === this._items.length - 1 ? this._items[0] : this._items[i.position + 1]
                };
            this._rotate(n), this._setActiveItem(i), this._intervalInstance && (this.pause(), this.cycle()), this._options.onChange(this)
        }, e.prototype.next = function() {
            var t = this._getActiveItem(),
                i = null;
            t.position === this._items.length - 1 ? i = this._items[0] : i = this._items[t.position + 1], this.slideTo(i.position), this._options.onNext(this)
        }, e.prototype.prev = function() {
            var t = this._getActiveItem(),
                i = null;
            t.position === 0 ? i = this._items[this._items.length - 1] : i = this._items[t.position - 1], this.slideTo(i.position), this._options.onPrev(this)
        }, e.prototype._rotate = function(t) {
            this._items.map(function(i) {
                i.el.classList.add("hidden")
            }), t.left.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"), t.left.el.classList.add("-translate-x-full", "z-10"), t.middle.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-10"), t.middle.el.classList.add("translate-x-0", "z-20"), t.right.el.classList.remove("-translate-x-full", "translate-x-full", "translate-x-0", "hidden", "z-20"), t.right.el.classList.add("translate-x-full", "z-10")
        }, e.prototype.cycle = function() {
            var t = this;
            typeof window < "u" && (this._intervalInstance = window.setInterval(function() {
                t.next()
            }, this._intervalDuration))
        }, e.prototype.pause = function() {
            clearInterval(this._intervalInstance)
        }, e.prototype._getActiveItem = function() {
            return this._activeItem
        }, e.prototype._setActiveItem = function(t) {
            var i, n, r = this;
            this._activeItem = t;
            var s = t.position;
            this._indicators.length && (this._indicators.map(function(o) {
                var a, c;
                o.el.setAttribute("aria-current", "false"), (a = o.el.classList).remove.apply(a, r._options.indicators.activeClasses.split(" ")), (c = o.el.classList).add.apply(c, r._options.indicators.inactiveClasses.split(" "))
            }), (i = this._indicators[s].el.classList).add.apply(i, this._options.indicators.activeClasses.split(" ")), (n = this._indicators[s].el.classList).remove.apply(n, this._options.indicators.inactiveClasses.split(" ")), this._indicators[s].el.setAttribute("aria-current", "true"))
        }, e
    }();

function Be() {
    document.querySelectorAll("[data-carousel]").forEach(function(e) {
        var t = e.getAttribute("data-carousel-interval"),
            i = e.getAttribute("data-carousel") === "slide",
            n = [],
            r = 0;
        e.querySelectorAll("[data-carousel-item]").length && Array.from(e.querySelectorAll("[data-carousel-item]")).map(function(f, l) {
            n.push({
                position: l,
                el: f
            }), f.getAttribute("data-carousel-item") === "active" && (r = l)
        });
        var s = [];
        e.querySelectorAll("[data-carousel-slide-to]").length && Array.from(e.querySelectorAll("[data-carousel-slide-to]")).map(function(f) {
            s.push({
                position: parseInt(f.getAttribute("data-carousel-slide-to")),
                el: f
            })
        });
        var o = new tn(n, {
            defaultPosition: r,
            indicators: {
                items: s
            },
            interval: t || $t.interval
        });
        i && o.cycle();
        var a = e.querySelector("[data-carousel-next]"),
            c = e.querySelector("[data-carousel-prev]");
        a && a.addEventListener("click", function() {
            o.next()
        }), c && c.addEventListener("click", function() {
            o.prev()
        })
    })
}
typeof window < "u" && (window.Carousel = tn, window.initCarousels = Be);
var Qt = globalThis && globalThis.__assign || function() {
        return Qt = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, Qt.apply(this, arguments)
    },
    wi = {
        transition: "transition-opacity",
        duration: 300,
        timing: "ease-out",
        onHide: function() {}
    },
    en = function() {
        function e(t, i, n) {
            t === void 0 && (t = null), i === void 0 && (i = null), n === void 0 && (n = wi), this._targetEl = t, this._triggerEl = i, this._options = Qt(Qt({}, wi), n), this._init()
        }
        return e.prototype._init = function() {
            var t = this;
            this._triggerEl && this._triggerEl.addEventListener("click", function() {
                t.hide()
            })
        }, e.prototype.hide = function() {
            var t = this;
            this._targetEl.classList.add(this._options.transition, "duration-".concat(this._options.duration), this._options.timing, "opacity-0"), setTimeout(function() {
                t._targetEl.classList.add("hidden")
            }, this._options.duration), this._options.onHide(this, this._targetEl)
        }, e
    }();

function Ne() {
    document.querySelectorAll("[data-dismiss-target]").forEach(function(e) {
        var t = e.getAttribute("data-dismiss-target"),
            i = document.querySelector(t);
        i ? new en(i, e) : console.error('The dismiss element with id "'.concat(t, '" does not exist. Please check the data-dismiss-target attribute.'))
    })
}
typeof window < "u" && (window.Dismiss = en, window.initDismisses = Ne);
var R = "top",
    F = "bottom",
    H = "right",
    D = "left",
    Fe = "auto",
    Ct = [R, F, H, D],
    pt = "start",
    Lt = "end",
    zr = "clippingParents",
    nn = "viewport",
    _t = "popper",
    Vr = "reference",
    _i = Ct.reduce(function(e, t) {
        return e.concat([t + "-" + pt, t + "-" + Lt])
    }, []),
    rn = [].concat(Ct, [Fe]).reduce(function(e, t) {
        return e.concat([t, t + "-" + pt, t + "-" + Lt])
    }, []),
    Wr = "beforeRead",
    $r = "read",
    Jr = "afterRead",
    Kr = "beforeMain",
    Xr = "main",
    Gr = "afterMain",
    Yr = "beforeWrite",
    Qr = "write",
    Zr = "afterWrite",
    ts = [Wr, $r, Jr, Kr, Xr, Gr, Yr, Qr, Zr];

function V(e) {
    return e ? (e.nodeName || "").toLowerCase() : null
}

function I(e) {
    if (e == null) return window;
    if (e.toString() !== "[object Window]") {
        var t = e.ownerDocument;
        return t && t.defaultView || window
    }
    return e
}

function lt(e) {
    var t = I(e).Element;
    return e instanceof t || e instanceof Element
}

function N(e) {
    var t = I(e).HTMLElement;
    return e instanceof t || e instanceof HTMLElement
}

function He(e) {
    if (typeof ShadowRoot > "u") return !1;
    var t = I(e).ShadowRoot;
    return e instanceof t || e instanceof ShadowRoot
}

function es(e) {
    var t = e.state;
    Object.keys(t.elements).forEach(function(i) {
        var n = t.styles[i] || {},
            r = t.attributes[i] || {},
            s = t.elements[i];
        !N(s) || !V(s) || (Object.assign(s.style, n), Object.keys(r).forEach(function(o) {
            var a = r[o];
            a === !1 ? s.removeAttribute(o) : s.setAttribute(o, a === !0 ? "" : a)
        }))
    })
}

function is(e) {
    var t = e.state,
        i = {
            popper: {
                position: t.options.strategy,
                left: "0",
                top: "0",
                margin: "0"
            },
            arrow: {
                position: "absolute"
            },
            reference: {}
        };
    return Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
        function() {
            Object.keys(t.elements).forEach(function(n) {
                var r = t.elements[n],
                    s = t.attributes[n] || {},
                    o = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : i[n]),
                    a = o.reduce(function(c, f) {
                        return c[f] = "", c
                    }, {});
                !N(r) || !V(r) || (Object.assign(r.style, a), Object.keys(s).forEach(function(c) {
                    r.removeAttribute(c)
                }))
            })
        }
}
const ns = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: es,
    effect: is,
    requires: ["computeStyles"]
};

function z(e) {
    return e.split("-")[0]
}
var ct = Math.max,
    Zt = Math.min,
    ht = Math.round;

function Ae() {
    var e = navigator.userAgentData;
    return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
        return t.brand + "/" + t.version
    }).join(" ") : navigator.userAgent
}

function sn() {
    return !/^((?!chrome|android).)*safari/i.test(Ae())
}

function vt(e, t, i) {
    t === void 0 && (t = !1), i === void 0 && (i = !1);
    var n = e.getBoundingClientRect(),
        r = 1,
        s = 1;
    t && N(e) && (r = e.offsetWidth > 0 && ht(n.width) / e.offsetWidth || 1, s = e.offsetHeight > 0 && ht(n.height) / e.offsetHeight || 1);
    var o = lt(e) ? I(e) : window,
        a = o.visualViewport,
        c = !sn() && i,
        f = (n.left + (c && a ? a.offsetLeft : 0)) / r,
        l = (n.top + (c && a ? a.offsetTop : 0)) / s,
        d = n.width / r,
        g = n.height / s;
    return {
        width: d,
        height: g,
        top: l,
        right: f + d,
        bottom: l + g,
        left: f,
        x: f,
        y: l
    }
}

function qe(e) {
    var t = vt(e),
        i = e.offsetWidth,
        n = e.offsetHeight;
    return Math.abs(t.width - i) <= 1 && (i = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
        x: e.offsetLeft,
        y: e.offsetTop,
        width: i,
        height: n
    }
}

function on(e, t) {
    var i = t.getRootNode && t.getRootNode();
    if (e.contains(t)) return !0;
    if (i && He(i)) {
        var n = t;
        do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host
        } while (n)
    }
    return !1
}

function J(e) {
    return I(e).getComputedStyle(e)
}

function rs(e) {
    return ["table", "td", "th"].indexOf(V(e)) >= 0
}

function tt(e) {
    return ((lt(e) ? e.ownerDocument : e.document) || window.document).documentElement
}

function ue(e) {
    return V(e) === "html" ? e : e.assignedSlot || e.parentNode || (He(e) ? e.host : null) || tt(e)
}

function Ei(e) {
    return !N(e) || J(e).position === "fixed" ? null : e.offsetParent
}

function ss(e) {
    var t = /firefox/i.test(Ae()),
        i = /Trident/i.test(Ae());
    if (i && N(e)) {
        var n = J(e);
        if (n.position === "fixed") return null
    }
    var r = ue(e);
    for (He(r) && (r = r.host); N(r) && ["html", "body"].indexOf(V(r)) < 0;) {
        var s = J(r);
        if (s.transform !== "none" || s.perspective !== "none" || s.contain === "paint" || ["transform", "perspective"].indexOf(s.willChange) !== -1 || t && s.willChange === "filter" || t && s.filter && s.filter !== "none") return r;
        r = r.parentNode
    }
    return null
}

function Pt(e) {
    for (var t = I(e), i = Ei(e); i && rs(i) && J(i).position === "static";) i = Ei(i);
    return i && (V(i) === "html" || V(i) === "body" && J(i).position === "static") ? t : i || ss(e) || t
}

function Me(e) {
    return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
}

function Et(e, t, i) {
    return ct(e, Zt(t, i))
}

function os(e, t, i) {
    var n = Et(e, t, i);
    return n > i ? i : n
}

function an() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    }
}

function cn(e) {
    return Object.assign({}, an(), e)
}

function ln(e, t) {
    return t.reduce(function(i, n) {
        return i[n] = e, i
    }, {})
}
var as = function(t, i) {
    return t = typeof t == "function" ? t(Object.assign({}, i.rects, {
        placement: i.placement
    })) : t, cn(typeof t != "number" ? t : ln(t, Ct))
};

function cs(e) {
    var t, i = e.state,
        n = e.name,
        r = e.options,
        s = i.elements.arrow,
        o = i.modifiersData.popperOffsets,
        a = z(i.placement),
        c = Me(a),
        f = [D, H].indexOf(a) >= 0,
        l = f ? "height" : "width";
    if (!(!s || !o)) {
        var d = as(r.padding, i),
            g = qe(s),
            v = c === "y" ? R : D,
            h = c === "y" ? F : H,
            p = i.rects.reference[l] + i.rects.reference[c] - o[c] - i.rects.popper[l],
            m = o[c] - i.rects.reference[c],
            y = Pt(s),
            _ = y ? c === "y" ? y.clientHeight || 0 : y.clientWidth || 0 : 0,
            E = p / 2 - m / 2,
            b = d[v],
            O = _ - g[l] - d[h],
            A = _ / 2 - g[l] / 2 + E,
            x = Et(b, A, O),
            k = c;
        i.modifiersData[n] = (t = {}, t[k] = x, t.centerOffset = x - A, t)
    }
}

function ls(e) {
    var t = e.state,
        i = e.options,
        n = i.element,
        r = n === void 0 ? "[data-popper-arrow]" : n;
    r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || on(t.elements.popper, r) && (t.elements.arrow = r))
}
const us = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: cs,
    effect: ls,
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
};

function mt(e) {
    return e.split("-")[1]
}
var ds = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
};

function fs(e, t) {
    var i = e.x,
        n = e.y,
        r = t.devicePixelRatio || 1;
    return {
        x: ht(i * r) / r || 0,
        y: ht(n * r) / r || 0
    }
}

function Oi(e) {
    var t, i = e.popper,
        n = e.popperRect,
        r = e.placement,
        s = e.variation,
        o = e.offsets,
        a = e.position,
        c = e.gpuAcceleration,
        f = e.adaptive,
        l = e.roundOffsets,
        d = e.isFixed,
        g = o.x,
        v = g === void 0 ? 0 : g,
        h = o.y,
        p = h === void 0 ? 0 : h,
        m = typeof l == "function" ? l({
            x: v,
            y: p
        }) : {
            x: v,
            y: p
        };
    v = m.x, p = m.y;
    var y = o.hasOwnProperty("x"),
        _ = o.hasOwnProperty("y"),
        E = D,
        b = R,
        O = window;
    if (f) {
        var A = Pt(i),
            x = "clientHeight",
            k = "clientWidth";
        if (A === I(i) && (A = tt(i), J(A).position !== "static" && a === "absolute" && (x = "scrollHeight", k = "scrollWidth")), A = A, r === R || (r === D || r === H) && s === Lt) {
            b = F;
            var S = d && A === O && O.visualViewport ? O.visualViewport.height : A[x];
            p -= S - n.height, p *= c ? 1 : -1
        }
        if (r === D || (r === R || r === F) && s === Lt) {
            E = H;
            var T = d && A === O && O.visualViewport ? O.visualViewport.width : A[k];
            v -= T - n.width, v *= c ? 1 : -1
        }
    }
    var C = Object.assign({
            position: a
        }, f && ds),
        q = l === !0 ? fs({
            x: v,
            y: p
        }, I(i)) : {
            x: v,
            y: p
        };
    if (v = q.x, p = q.y, c) {
        var P;
        return Object.assign({}, C, (P = {}, P[b] = _ ? "0" : "", P[E] = y ? "0" : "", P.transform = (O.devicePixelRatio || 1) <= 1 ? "translate(" + v + "px, " + p + "px)" : "translate3d(" + v + "px, " + p + "px, 0)", P))
    }
    return Object.assign({}, C, (t = {}, t[b] = _ ? p + "px" : "", t[E] = y ? v + "px" : "", t.transform = "", t))
}

function ps(e) {
    var t = e.state,
        i = e.options,
        n = i.gpuAcceleration,
        r = n === void 0 ? !0 : n,
        s = i.adaptive,
        o = s === void 0 ? !0 : s,
        a = i.roundOffsets,
        c = a === void 0 ? !0 : a,
        f = {
            placement: z(t.placement),
            variation: mt(t.placement),
            popper: t.elements.popper,
            popperRect: t.rects.popper,
            gpuAcceleration: r,
            isFixed: t.options.strategy === "fixed"
        };
    t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Oi(Object.assign({}, f, {
        offsets: t.modifiersData.popperOffsets,
        position: t.options.strategy,
        adaptive: o,
        roundOffsets: c
    })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Oi(Object.assign({}, f, {
        offsets: t.modifiersData.arrow,
        position: "absolute",
        adaptive: !1,
        roundOffsets: c
    })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-placement": t.placement
    })
}
const hs = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: ps,
    data: {}
};
var Nt = {
    passive: !0
};

function vs(e) {
    var t = e.state,
        i = e.instance,
        n = e.options,
        r = n.scroll,
        s = r === void 0 ? !0 : r,
        o = n.resize,
        a = o === void 0 ? !0 : o,
        c = I(t.elements.popper),
        f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
    return s && f.forEach(function(l) {
            l.addEventListener("scroll", i.update, Nt)
        }), a && c.addEventListener("resize", i.update, Nt),
        function() {
            s && f.forEach(function(l) {
                l.removeEventListener("scroll", i.update, Nt)
            }), a && c.removeEventListener("resize", i.update, Nt)
        }
}
const ms = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function() {},
    effect: vs,
    data: {}
};
var gs = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};

function Jt(e) {
    return e.replace(/left|right|bottom|top/g, function(t) {
        return gs[t]
    })
}
var ys = {
    start: "end",
    end: "start"
};

function Ai(e) {
    return e.replace(/start|end/g, function(t) {
        return ys[t]
    })
}

function Ue(e) {
    var t = I(e),
        i = t.pageXOffset,
        n = t.pageYOffset;
    return {
        scrollLeft: i,
        scrollTop: n
    }
}

function ze(e) {
    return vt(tt(e)).left + Ue(e).scrollLeft
}

function bs(e, t) {
    var i = I(e),
        n = tt(e),
        r = i.visualViewport,
        s = n.clientWidth,
        o = n.clientHeight,
        a = 0,
        c = 0;
    if (r) {
        s = r.width, o = r.height;
        var f = sn();
        (f || !f && t === "fixed") && (a = r.offsetLeft, c = r.offsetTop)
    }
    return {
        width: s,
        height: o,
        x: a + ze(e),
        y: c
    }
}

function ws(e) {
    var t, i = tt(e),
        n = Ue(e),
        r = (t = e.ownerDocument) == null ? void 0 : t.body,
        s = ct(i.scrollWidth, i.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
        o = ct(i.scrollHeight, i.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0),
        a = -n.scrollLeft + ze(e),
        c = -n.scrollTop;
    return J(r || i).direction === "rtl" && (a += ct(i.clientWidth, r ? r.clientWidth : 0) - s), {
        width: s,
        height: o,
        x: a,
        y: c
    }
}

function Ve(e) {
    var t = J(e),
        i = t.overflow,
        n = t.overflowX,
        r = t.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + r + n)
}

function un(e) {
    return ["html", "body", "#document"].indexOf(V(e)) >= 0 ? e.ownerDocument.body : N(e) && Ve(e) ? e : un(ue(e))
}

function Ot(e, t) {
    var i;
    t === void 0 && (t = []);
    var n = un(e),
        r = n === ((i = e.ownerDocument) == null ? void 0 : i.body),
        s = I(n),
        o = r ? [s].concat(s.visualViewport || [], Ve(n) ? n : []) : n,
        a = t.concat(o);
    return r ? a : a.concat(Ot(ue(o)))
}

function xe(e) {
    return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height
    })
}

function _s(e, t) {
    var i = vt(e, !1, t === "fixed");
    return i.top = i.top + e.clientTop, i.left = i.left + e.clientLeft, i.bottom = i.top + e.clientHeight, i.right = i.left + e.clientWidth, i.width = e.clientWidth, i.height = e.clientHeight, i.x = i.left, i.y = i.top, i
}

function xi(e, t, i) {
    return t === nn ? xe(bs(e, i)) : lt(t) ? _s(t, i) : xe(ws(tt(e)))
}

function Es(e) {
    var t = Ot(ue(e)),
        i = ["absolute", "fixed"].indexOf(J(e).position) >= 0,
        n = i && N(e) ? Pt(e) : e;
    return lt(n) ? t.filter(function(r) {
        return lt(r) && on(r, n) && V(r) !== "body"
    }) : []
}

function Os(e, t, i, n) {
    var r = t === "clippingParents" ? Es(e) : [].concat(t),
        s = [].concat(r, [i]),
        o = s[0],
        a = s.reduce(function(c, f) {
            var l = xi(e, f, n);
            return c.top = ct(l.top, c.top), c.right = Zt(l.right, c.right), c.bottom = Zt(l.bottom, c.bottom), c.left = ct(l.left, c.left), c
        }, xi(e, o, n));
    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
}

function dn(e) {
    var t = e.reference,
        i = e.element,
        n = e.placement,
        r = n ? z(n) : null,
        s = n ? mt(n) : null,
        o = t.x + t.width / 2 - i.width / 2,
        a = t.y + t.height / 2 - i.height / 2,
        c;
    switch (r) {
        case R:
            c = {
                x: o,
                y: t.y - i.height
            };
            break;
        case F:
            c = {
                x: o,
                y: t.y + t.height
            };
            break;
        case H:
            c = {
                x: t.x + t.width,
                y: a
            };
            break;
        case D:
            c = {
                x: t.x - i.width,
                y: a
            };
            break;
        default:
            c = {
                x: t.x,
                y: t.y
            }
    }
    var f = r ? Me(r) : null;
    if (f != null) {
        var l = f === "y" ? "height" : "width";
        switch (s) {
            case pt:
                c[f] = c[f] - (t[l] / 2 - i[l] / 2);
                break;
            case Lt:
                c[f] = c[f] + (t[l] / 2 - i[l] / 2);
                break
        }
    }
    return c
}

function Tt(e, t) {
    t === void 0 && (t = {});
    var i = t,
        n = i.placement,
        r = n === void 0 ? e.placement : n,
        s = i.strategy,
        o = s === void 0 ? e.strategy : s,
        a = i.boundary,
        c = a === void 0 ? zr : a,
        f = i.rootBoundary,
        l = f === void 0 ? nn : f,
        d = i.elementContext,
        g = d === void 0 ? _t : d,
        v = i.altBoundary,
        h = v === void 0 ? !1 : v,
        p = i.padding,
        m = p === void 0 ? 0 : p,
        y = cn(typeof m != "number" ? m : ln(m, Ct)),
        _ = g === _t ? Vr : _t,
        E = e.rects.popper,
        b = e.elements[h ? _ : g],
        O = Os(lt(b) ? b : b.contextElement || tt(e.elements.popper), c, l, o),
        A = vt(e.elements.reference),
        x = dn({
            reference: A,
            element: E,
            strategy: "absolute",
            placement: r
        }),
        k = xe(Object.assign({}, E, x)),
        S = g === _t ? k : A,
        T = {
            top: O.top - S.top + y.top,
            bottom: S.bottom - O.bottom + y.bottom,
            left: O.left - S.left + y.left,
            right: S.right - O.right + y.right
        },
        C = e.modifiersData.offset;
    if (g === _t && C) {
        var q = C[r];
        Object.keys(T).forEach(function(P) {
            var et = [H, F].indexOf(P) >= 0 ? 1 : -1,
                it = [R, F].indexOf(P) >= 0 ? "y" : "x";
            T[P] += q[it] * et
        })
    }
    return T
}

function As(e, t) {
    t === void 0 && (t = {});
    var i = t,
        n = i.placement,
        r = i.boundary,
        s = i.rootBoundary,
        o = i.padding,
        a = i.flipVariations,
        c = i.allowedAutoPlacements,
        f = c === void 0 ? rn : c,
        l = mt(n),
        d = l ? a ? _i : _i.filter(function(h) {
            return mt(h) === l
        }) : Ct,
        g = d.filter(function(h) {
            return f.indexOf(h) >= 0
        });
    g.length === 0 && (g = d);
    var v = g.reduce(function(h, p) {
        return h[p] = Tt(e, {
            placement: p,
            boundary: r,
            rootBoundary: s,
            padding: o
        })[z(p)], h
    }, {});
    return Object.keys(v).sort(function(h, p) {
        return v[h] - v[p]
    })
}

function xs(e) {
    if (z(e) === Fe) return [];
    var t = Jt(e);
    return [Ai(e), t, Ai(t)]
}

function Ls(e) {
    var t = e.state,
        i = e.options,
        n = e.name;
    if (!t.modifiersData[n]._skip) {
        for (var r = i.mainAxis, s = r === void 0 ? !0 : r, o = i.altAxis, a = o === void 0 ? !0 : o, c = i.fallbackPlacements, f = i.padding, l = i.boundary, d = i.rootBoundary, g = i.altBoundary, v = i.flipVariations, h = v === void 0 ? !0 : v, p = i.allowedAutoPlacements, m = t.options.placement, y = z(m), _ = y === m, E = c || (_ || !h ? [Jt(m)] : xs(m)), b = [m].concat(E).reduce(function(ut, K) {
                return ut.concat(z(K) === Fe ? As(t, {
                    placement: K,
                    boundary: l,
                    rootBoundary: d,
                    padding: f,
                    flipVariations: h,
                    allowedAutoPlacements: p
                }) : K)
            }, []), O = t.rects.reference, A = t.rects.popper, x = new Map, k = !0, S = b[0], T = 0; T < b.length; T++) {
            var C = b[T],
                q = z(C),
                P = mt(C) === pt,
                et = [R, F].indexOf(q) >= 0,
                it = et ? "width" : "height",
                j = Tt(t, {
                    placement: C,
                    boundary: l,
                    rootBoundary: d,
                    altBoundary: g,
                    padding: f
                }),
                M = et ? P ? H : D : P ? F : R;
            O[it] > A[it] && (M = Jt(M));
            var Rt = Jt(M),
                nt = [];
            if (s && nt.push(j[q] <= 0), a && nt.push(j[M] <= 0, j[Rt] <= 0), nt.every(function(ut) {
                    return ut
                })) {
                S = C, k = !1;
                break
            }
            x.set(C, nt)
        }
        if (k)
            for (var Dt = h ? 3 : 1, de = function(K) {
                    var bt = b.find(function(It) {
                        var rt = x.get(It);
                        if (rt) return rt.slice(0, K).every(function(fe) {
                            return fe
                        })
                    });
                    if (bt) return S = bt, "break"
                }, yt = Dt; yt > 0; yt--) {
                var jt = de(yt);
                if (jt === "break") break
            }
        t.placement !== S && (t.modifiersData[n]._skip = !0, t.placement = S, t.reset = !0)
    }
}
const Ts = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: Ls,
    requiresIfExists: ["offset"],
    data: {
        _skip: !1
    }
};

function Li(e, t, i) {
    return i === void 0 && (i = {
        x: 0,
        y: 0
    }), {
        top: e.top - t.height - i.y,
        right: e.right - t.width + i.x,
        bottom: e.bottom - t.height + i.y,
        left: e.left - t.width - i.x
    }
}

function Ti(e) {
    return [R, H, F, D].some(function(t) {
        return e[t] >= 0
    })
}

function Ss(e) {
    var t = e.state,
        i = e.name,
        n = t.rects.reference,
        r = t.rects.popper,
        s = t.modifiersData.preventOverflow,
        o = Tt(t, {
            elementContext: "reference"
        }),
        a = Tt(t, {
            altBoundary: !0
        }),
        c = Li(o, n),
        f = Li(a, r, s),
        l = Ti(c),
        d = Ti(f);
    t.modifiersData[i] = {
        referenceClippingOffsets: c,
        popperEscapeOffsets: f,
        isReferenceHidden: l,
        hasPopperEscaped: d
    }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
        "data-popper-reference-hidden": l,
        "data-popper-escaped": d
    })
}
const ks = {
    name: "hide",
    enabled: !0,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: Ss
};

function Cs(e, t, i) {
    var n = z(e),
        r = [D, R].indexOf(n) >= 0 ? -1 : 1,
        s = typeof i == "function" ? i(Object.assign({}, t, {
            placement: e
        })) : i,
        o = s[0],
        a = s[1];
    return o = o || 0, a = (a || 0) * r, [D, H].indexOf(n) >= 0 ? {
        x: a,
        y: o
    } : {
        x: o,
        y: a
    }
}

function Ps(e) {
    var t = e.state,
        i = e.options,
        n = e.name,
        r = i.offset,
        s = r === void 0 ? [0, 0] : r,
        o = rn.reduce(function(l, d) {
            return l[d] = Cs(d, t.rects, s), l
        }, {}),
        a = o[t.placement],
        c = a.x,
        f = a.y;
    t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += f), t.modifiersData[n] = o
}
const Rs = {
    name: "offset",
    enabled: !0,
    phase: "main",
    requires: ["popperOffsets"],
    fn: Ps
};

function Ds(e) {
    var t = e.state,
        i = e.name;
    t.modifiersData[i] = dn({
        reference: t.rects.reference,
        element: t.rects.popper,
        strategy: "absolute",
        placement: t.placement
    })
}
const js = {
    name: "popperOffsets",
    enabled: !0,
    phase: "read",
    fn: Ds,
    data: {}
};

function Is(e) {
    return e === "x" ? "y" : "x"
}

function Bs(e) {
    var t = e.state,
        i = e.options,
        n = e.name,
        r = i.mainAxis,
        s = r === void 0 ? !0 : r,
        o = i.altAxis,
        a = o === void 0 ? !1 : o,
        c = i.boundary,
        f = i.rootBoundary,
        l = i.altBoundary,
        d = i.padding,
        g = i.tether,
        v = g === void 0 ? !0 : g,
        h = i.tetherOffset,
        p = h === void 0 ? 0 : h,
        m = Tt(t, {
            boundary: c,
            rootBoundary: f,
            padding: d,
            altBoundary: l
        }),
        y = z(t.placement),
        _ = mt(t.placement),
        E = !_,
        b = Me(y),
        O = Is(b),
        A = t.modifiersData.popperOffsets,
        x = t.rects.reference,
        k = t.rects.popper,
        S = typeof p == "function" ? p(Object.assign({}, t.rects, {
            placement: t.placement
        })) : p,
        T = typeof S == "number" ? {
            mainAxis: S,
            altAxis: S
        } : Object.assign({
            mainAxis: 0,
            altAxis: 0
        }, S),
        C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
        q = {
            x: 0,
            y: 0
        };
    if (A) {
        if (s) {
            var P, et = b === "y" ? R : D,
                it = b === "y" ? F : H,
                j = b === "y" ? "height" : "width",
                M = A[b],
                Rt = M + m[et],
                nt = M - m[it],
                Dt = v ? -k[j] / 2 : 0,
                de = _ === pt ? x[j] : k[j],
                yt = _ === pt ? -k[j] : -x[j],
                jt = t.elements.arrow,
                ut = v && jt ? qe(jt) : {
                    width: 0,
                    height: 0
                },
                K = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : an(),
                bt = K[et],
                It = K[it],
                rt = Et(0, x[j], ut[j]),
                fe = E ? x[j] / 2 - Dt - rt - bt - T.mainAxis : de - rt - bt - T.mainAxis,
                yn = E ? -x[j] / 2 + Dt + rt + It + T.mainAxis : yt + rt + It + T.mainAxis,
                pe = t.elements.arrow && Pt(t.elements.arrow),
                bn = pe ? b === "y" ? pe.clientTop || 0 : pe.clientLeft || 0 : 0,
                Ze = (P = C == null ? void 0 : C[b]) != null ? P : 0,
                wn = M + fe - Ze - bn,
                _n = M + yn - Ze,
                ti = Et(v ? Zt(Rt, wn) : Rt, M, v ? ct(nt, _n) : nt);
            A[b] = ti, q[b] = ti - M
        }
        if (a) {
            var ei, En = b === "x" ? R : D,
                On = b === "x" ? F : H,
                st = A[O],
                Bt = O === "y" ? "height" : "width",
                ii = st + m[En],
                ni = st - m[On],
                he = [R, D].indexOf(y) !== -1,
                ri = (ei = C == null ? void 0 : C[O]) != null ? ei : 0,
                si = he ? ii : st - x[Bt] - k[Bt] - ri + T.altAxis,
                oi = he ? st + x[Bt] + k[Bt] - ri - T.altAxis : ni,
                ai = v && he ? os(si, st, oi) : Et(v ? si : ii, st, v ? oi : ni);
            A[O] = ai, q[O] = ai - st
        }
        t.modifiersData[n] = q
    }
}
const Ns = {
    name: "preventOverflow",
    enabled: !0,
    phase: "main",
    fn: Bs,
    requiresIfExists: ["offset"]
};

function Fs(e) {
    return {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    }
}

function Hs(e) {
    return e === I(e) || !N(e) ? Ue(e) : Fs(e)
}

function qs(e) {
    var t = e.getBoundingClientRect(),
        i = ht(t.width) / e.offsetWidth || 1,
        n = ht(t.height) / e.offsetHeight || 1;
    return i !== 1 || n !== 1
}

function Ms(e, t, i) {
    i === void 0 && (i = !1);
    var n = N(t),
        r = N(t) && qs(t),
        s = tt(t),
        o = vt(e, r, i),
        a = {
            scrollLeft: 0,
            scrollTop: 0
        },
        c = {
            x: 0,
            y: 0
        };
    return (n || !n && !i) && ((V(t) !== "body" || Ve(s)) && (a = Hs(t)), N(t) ? (c = vt(t, !0), c.x += t.clientLeft, c.y += t.clientTop) : s && (c.x = ze(s))), {
        x: o.left + a.scrollLeft - c.x,
        y: o.top + a.scrollTop - c.y,
        width: o.width,
        height: o.height
    }
}

function Us(e) {
    var t = new Map,
        i = new Set,
        n = [];
    e.forEach(function(s) {
        t.set(s.name, s)
    });

    function r(s) {
        i.add(s.name);
        var o = [].concat(s.requires || [], s.requiresIfExists || []);
        o.forEach(function(a) {
            if (!i.has(a)) {
                var c = t.get(a);
                c && r(c)
            }
        }), n.push(s)
    }
    return e.forEach(function(s) {
        i.has(s.name) || r(s)
    }), n
}

function zs(e) {
    var t = Us(e);
    return ts.reduce(function(i, n) {
        return i.concat(t.filter(function(r) {
            return r.phase === n
        }))
    }, [])
}

function Vs(e) {
    var t;
    return function() {
        return t || (t = new Promise(function(i) {
            Promise.resolve().then(function() {
                t = void 0, i(e())
            })
        })), t
    }
}

function Ws(e) {
    var t = e.reduce(function(i, n) {
        var r = i[n.name];
        return i[n.name] = r ? Object.assign({}, r, n, {
            options: Object.assign({}, r.options, n.options),
            data: Object.assign({}, r.data, n.data)
        }) : n, i
    }, {});
    return Object.keys(t).map(function(i) {
        return t[i]
    })
}
var Si = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};

function ki() {
    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return !t.some(function(n) {
        return !(n && typeof n.getBoundingClientRect == "function")
    })
}

function $s(e) {
    e === void 0 && (e = {});
    var t = e,
        i = t.defaultModifiers,
        n = i === void 0 ? [] : i,
        r = t.defaultOptions,
        s = r === void 0 ? Si : r;
    return function(a, c, f) {
        f === void 0 && (f = s);
        var l = {
                placement: "bottom",
                orderedModifiers: [],
                options: Object.assign({}, Si, s),
                modifiersData: {},
                elements: {
                    reference: a,
                    popper: c
                },
                attributes: {},
                styles: {}
            },
            d = [],
            g = !1,
            v = {
                state: l,
                setOptions: function(y) {
                    var _ = typeof y == "function" ? y(l.options) : y;
                    p(), l.options = Object.assign({}, s, l.options, _), l.scrollParents = {
                        reference: lt(a) ? Ot(a) : a.contextElement ? Ot(a.contextElement) : [],
                        popper: Ot(c)
                    };
                    var E = zs(Ws([].concat(n, l.options.modifiers)));
                    return l.orderedModifiers = E.filter(function(b) {
                        return b.enabled
                    }), h(), v.update()
                },
                forceUpdate: function() {
                    if (!g) {
                        var y = l.elements,
                            _ = y.reference,
                            E = y.popper;
                        if (ki(_, E)) {
                            l.rects = {
                                reference: Ms(_, Pt(E), l.options.strategy === "fixed"),
                                popper: qe(E)
                            }, l.reset = !1, l.placement = l.options.placement, l.orderedModifiers.forEach(function(T) {
                                return l.modifiersData[T.name] = Object.assign({}, T.data)
                            });
                            for (var b = 0; b < l.orderedModifiers.length; b++) {
                                if (l.reset === !0) {
                                    l.reset = !1, b = -1;
                                    continue
                                }
                                var O = l.orderedModifiers[b],
                                    A = O.fn,
                                    x = O.options,
                                    k = x === void 0 ? {} : x,
                                    S = O.name;
                                typeof A == "function" && (l = A({
                                    state: l,
                                    options: k,
                                    name: S,
                                    instance: v
                                }) || l)
                            }
                        }
                    }
                },
                update: Vs(function() {
                    return new Promise(function(m) {
                        v.forceUpdate(), m(l)
                    })
                }),
                destroy: function() {
                    p(), g = !0
                }
            };
        if (!ki(a, c)) return v;
        v.setOptions(f).then(function(m) {
            !g && f.onFirstUpdate && f.onFirstUpdate(m)
        });

        function h() {
            l.orderedModifiers.forEach(function(m) {
                var y = m.name,
                    _ = m.options,
                    E = _ === void 0 ? {} : _,
                    b = m.effect;
                if (typeof b == "function") {
                    var O = b({
                            state: l,
                            name: y,
                            instance: v,
                            options: E
                        }),
                        A = function() {};
                    d.push(O || A)
                }
            })
        }

        function p() {
            d.forEach(function(m) {
                return m()
            }), d = []
        }
        return v
    }
}
var Js = [ms, js, hs, ns, Rs, Ts, Ns, us, ks],
    We = $s({
        defaultModifiers: Js
    }),
    G = globalThis && globalThis.__assign || function() {
        return G = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, G.apply(this, arguments)
    },
    Ft = globalThis && globalThis.__spreadArray || function(e, t, i) {
        if (i || arguments.length === 2)
            for (var n = 0, r = t.length, s; n < r; n++)(s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
        return e.concat(s || Array.prototype.slice.call(t))
    },
    Y = {
        placement: "bottom",
        triggerType: "click",
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        ignoreClickOutsideClass: !1,
        onShow: function() {},
        onHide: function() {},
        onToggle: function() {}
    },
    fn = function() {
        function e(t, i, n) {
            t === void 0 && (t = null), i === void 0 && (i = null), n === void 0 && (n = Y), this._targetEl = t, this._triggerEl = i, this._options = G(G({}, Y), n), this._popperInstance = this._createPopperInstance(), this._visible = !1, this._init()
        }
        return e.prototype._init = function() {
            this._triggerEl && this._setupEventListeners()
        }, e.prototype._setupEventListeners = function() {
            var t = this,
                i = this._getTriggerEvents();
            this._options.triggerType === "click" && i.showEvents.forEach(function(n) {
                t._triggerEl.addEventListener(n, function() {
                    t.toggle()
                })
            }), this._options.triggerType === "hover" && (i.showEvents.forEach(function(n) {
                t._triggerEl.addEventListener(n, function() {
                    n === "click" ? t.toggle() : setTimeout(function() {
                        t.show()
                    }, t._options.delay)
                }), t._targetEl.addEventListener(n, function() {
                    t.show()
                })
            }), i.hideEvents.forEach(function(n) {
                t._triggerEl.addEventListener(n, function() {
                    setTimeout(function() {
                        t._targetEl.matches(":hover") || t.hide()
                    }, t._options.delay)
                }), t._targetEl.addEventListener(n, function() {
                    setTimeout(function() {
                        t._triggerEl.matches(":hover") || t.hide()
                    }, t._options.delay)
                })
            }))
        }, e.prototype._createPopperInstance = function() {
            return We(this._triggerEl, this._targetEl, {
                placement: this._options.placement,
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: [this._options.offsetSkidding, this._options.offsetDistance]
                    }
                }]
            })
        }, e.prototype._setupClickOutsideListener = function() {
            var t = this;
            this._clickOutsideEventListener = function(i) {
                t._handleClickOutside(i, t._targetEl)
            }, document.body.addEventListener("click", this._clickOutsideEventListener, !0)
        }, e.prototype._removeClickOutsideListener = function() {
            document.body.removeEventListener("click", this._clickOutsideEventListener, !0)
        }, e.prototype._handleClickOutside = function(t, i) {
            var n = t.target,
                r = this._options.ignoreClickOutsideClass,
                s = !1;
            if (r) {
                var o = document.querySelectorAll(".".concat(r));
                o.forEach(function(a) {
                    if (a.contains(n)) {
                        s = !0;
                        return
                    }
                })
            }
            n !== i && !i.contains(n) && !this._triggerEl.contains(n) && !s && this.isVisible() && this.hide()
        }, e.prototype._getTriggerEvents = function() {
            switch (this._options.triggerType) {
                case "hover":
                    return {
                        showEvents: ["mouseenter", "click"],
                        hideEvents: ["mouseleave"]
                    };
                case "click":
                    return {
                        showEvents: ["click"],
                        hideEvents: []
                    };
                case "none":
                    return {
                        showEvents: [],
                        hideEvents: []
                    };
                default:
                    return {
                        showEvents: ["click"],
                        hideEvents: []
                    }
            }
        }, e.prototype.toggle = function() {
            this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this)
        }, e.prototype.isVisible = function() {
            return this._visible
        }, e.prototype.show = function() {
            this._targetEl.classList.remove("hidden"), this._targetEl.classList.add("block"), this._popperInstance.setOptions(function(t) {
                return G(G({}, t), {
                    modifiers: Ft(Ft([], t.modifiers, !0), [{
                        name: "eventListeners",
                        enabled: !0
                    }], !1)
                })
            }), this._setupClickOutsideListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this)
        }, e.prototype.hide = function() {
            this._targetEl.classList.remove("block"), this._targetEl.classList.add("hidden"), this._popperInstance.setOptions(function(t) {
                return G(G({}, t), {
                    modifiers: Ft(Ft([], t.modifiers, !0), [{
                        name: "eventListeners",
                        enabled: !1
                    }], !1)
                })
            }), this._visible = !1, this._removeClickOutsideListener(), this._options.onHide(this)
        }, e
    }();

function $e() {
    document.querySelectorAll("[data-dropdown-toggle]").forEach(function(e) {
        var t = e.getAttribute("data-dropdown-toggle"),
            i = document.getElementById(t);
        if (i) {
            var n = e.getAttribute("data-dropdown-placement"),
                r = e.getAttribute("data-dropdown-offset-skidding"),
                s = e.getAttribute("data-dropdown-offset-distance"),
                o = e.getAttribute("data-dropdown-trigger"),
                a = e.getAttribute("data-dropdown-delay"),
                c = e.getAttribute("data-dropdown-ignore-click-outside-class");
            new fn(i, e, {
                placement: n || Y.placement,
                triggerType: o || Y.triggerType,
                offsetSkidding: r ? parseInt(r) : Y.offsetSkidding,
                offsetDistance: s ? parseInt(s) : Y.offsetDistance,
                delay: a ? parseInt(a) : Y.delay,
                ignoreClickOutsideClass: c || Y.ignoreClickOutsideClass
            })
        } else console.error('The dropdown element with id "'.concat(t, '" does not exist. Please check the data-dropdown-toggle attribute.'))
    })
}
typeof window < "u" && (window.Dropdown = fn, window.initDropdowns = $e);
var te = globalThis && globalThis.__assign || function() {
        return te = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, te.apply(this, arguments)
    },
    dt = {
        placement: "center",
        backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
        backdrop: "dynamic",
        closable: !0,
        onHide: function() {},
        onShow: function() {},
        onToggle: function() {}
    },
    Le = function() {
        function e(t, i) {
            t === void 0 && (t = null), i === void 0 && (i = dt), this._targetEl = t, this._options = te(te({}, dt), i), this._isHidden = !0, this._backdropEl = null, this._init()
        }
        return e.prototype._init = function() {
            var t = this;
            this._targetEl && this._getPlacementClasses().map(function(i) {
                t._targetEl.classList.add(i)
            })
        }, e.prototype._createBackdrop = function() {
            var t;
            if (this._isHidden) {
                var i = document.createElement("div");
                i.setAttribute("modal-backdrop", ""), (t = i.classList).add.apply(t, this._options.backdropClasses.split(" ")), document.querySelector("body").append(i), this._backdropEl = i
            }
        }, e.prototype._destroyBackdropEl = function() {
            this._isHidden || document.querySelector("[modal-backdrop]").remove()
        }, e.prototype._setupModalCloseEventListeners = function() {
            var t = this;
            this._options.backdrop === "dynamic" && (this._clickOutsideEventListener = function(i) {
                t._handleOutsideClick(i.target)
            }, this._targetEl.addEventListener("click", this._clickOutsideEventListener, !0)), this._keydownEventListener = function(i) {
                i.key === "Escape" && t.hide()
            }, document.body.addEventListener("keydown", this._keydownEventListener, !0)
        }, e.prototype._removeModalCloseEventListeners = function() {
            this._options.backdrop === "dynamic" && this._targetEl.removeEventListener("click", this._clickOutsideEventListener, !0), document.body.removeEventListener("keydown", this._keydownEventListener, !0)
        }, e.prototype._handleOutsideClick = function(t) {
            (t === this._targetEl || t === this._backdropEl && this.isVisible()) && this.hide()
        }, e.prototype._getPlacementClasses = function() {
            switch (this._options.placement) {
                case "top-left":
                    return ["justify-start", "items-start"];
                case "top-center":
                    return ["justify-center", "items-start"];
                case "top-right":
                    return ["justify-end", "items-start"];
                case "center-left":
                    return ["justify-start", "items-center"];
                case "center":
                    return ["justify-center", "items-center"];
                case "center-right":
                    return ["justify-end", "items-center"];
                case "bottom-left":
                    return ["justify-start", "items-end"];
                case "bottom-center":
                    return ["justify-center", "items-end"];
                case "bottom-right":
                    return ["justify-end", "items-end"];
                default:
                    return ["justify-center", "items-center"]
            }
        }, e.prototype.toggle = function() {
            this._isHidden ? this.show() : this.hide(), this._options.onToggle(this)
        }, e.prototype.show = function() {
            this.isHidden && (this._targetEl.classList.add("flex"), this._targetEl.classList.remove("hidden"), this._targetEl.setAttribute("aria-modal", "true"), this._targetEl.setAttribute("role", "dialog"), this._targetEl.removeAttribute("aria-hidden"), this._createBackdrop(), this._isHidden = !1, document.body.classList.add("overflow-hidden"), this._options.closable && this._setupModalCloseEventListeners(), this._options.onShow(this))
        }, e.prototype.hide = function() {
            this.isVisible && (this._targetEl.classList.add("hidden"), this._targetEl.classList.remove("flex"), this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.removeAttribute("aria-modal"), this._targetEl.removeAttribute("role"), this._destroyBackdropEl(), this._isHidden = !0, document.body.classList.remove("overflow-hidden"), this._options.closable && this._removeModalCloseEventListeners(), this._options.onHide(this))
        }, e.prototype.isVisible = function() {
            return !this._isHidden
        }, e.prototype.isHidden = function() {
            return this._isHidden
        }, e
    }(),
    Ht = function(e, t) {
        return t.some(function(i) {
            return i.id === e
        }) ? t.find(function(i) {
            return i.id === e
        }) : null
    };

function Je() {
    var e = [];
    document.querySelectorAll("[data-modal-target]").forEach(function(t) {
        var i = t.getAttribute("data-modal-target"),
            n = document.getElementById(i);
        if (n) {
            var r = n.getAttribute("data-modal-placement"),
                s = n.getAttribute("data-modal-backdrop");
            Ht(i, e) || e.push({
                id: i,
                object: new Le(n, {
                    placement: r || dt.placement,
                    backdrop: s || dt.backdrop
                })
            })
        } else console.error("Modal with id ".concat(i, " does not exist. Are you sure that the data-modal-target attribute points to the correct modal id?."))
    }), document.querySelectorAll("[data-modal-toggle]").forEach(function(t) {
        var i = t.getAttribute("data-modal-toggle"),
            n = document.getElementById(i);
        if (n) {
            var r = n.getAttribute("data-modal-placement"),
                s = n.getAttribute("data-modal-backdrop"),
                o = Ht(i, e);
            o || (o = {
                id: i,
                object: new Le(n, {
                    placement: r || dt.placement,
                    backdrop: s || dt.backdrop
                })
            }, e.push(o)), t.addEventListener("click", function() {
                o.object.toggle()
            })
        } else console.error("Modal with id ".concat(i, " does not exist. Are you sure that the data-modal-toggle attribute points to the correct modal id?"))
    }), document.querySelectorAll("[data-modal-show]").forEach(function(t) {
        var i = t.getAttribute("data-modal-show"),
            n = document.getElementById(i);
        if (n) {
            var r = Ht(i, e);
            r ? t.addEventListener("click", function() {
                r.object.isHidden && r.object.show()
            }) : console.error("Modal with id ".concat(i, " has not been initialized. Please initialize it using the data-modal-target attribute."))
        } else console.error("Modal with id ".concat(i, " does not exist. Are you sure that the data-modal-show attribute points to the correct modal id?"))
    }), document.querySelectorAll("[data-modal-hide]").forEach(function(t) {
        var i = t.getAttribute("data-modal-hide"),
            n = document.getElementById(i);
        if (n) {
            var r = Ht(i, e);
            r ? t.addEventListener("click", function() {
                r.object.isVisible && r.object.hide()
            }) : console.error("Modal with id ".concat(i, " has not been initialized. Please initialize it using the data-modal-target attribute."))
        } else console.error("Modal with id ".concat(i, " does not exist. Are you sure that the data-modal-hide attribute points to the correct modal id?"))
    })
}
typeof window < "u" && (window.Modal = Le, window.initModals = Je);
var ee = globalThis && globalThis.__assign || function() {
        return ee = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, ee.apply(this, arguments)
    },
    at = {
        placement: "left",
        bodyScrolling: !1,
        backdrop: !0,
        edge: !1,
        edgeOffset: "bottom-[60px]",
        backdropClasses: "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-30",
        onShow: function() {},
        onHide: function() {},
        onToggle: function() {}
    },
    pn = function() {
        function e(t, i) {
            t === void 0 && (t = null), i === void 0 && (i = at), this._targetEl = t, this._options = ee(ee({}, at), i), this._visible = !1, this._init()
        }
        return e.prototype._init = function() {
            var t = this;
            this._targetEl && (this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.classList.add("transition-transform")), this._getPlacementClasses(this._options.placement).base.map(function(i) {
                t._targetEl.classList.add(i)
            }), document.addEventListener("keydown", function(i) {
                i.key === "Escape" && t.isVisible() && t.hide()
            })
        }, e.prototype.hide = function() {
            var t = this;
            this._options.edge ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function(i) {
                t._targetEl.classList.remove(i)
            }), this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(i) {
                t._targetEl.classList.add(i)
            })) : (this._getPlacementClasses(this._options.placement).active.map(function(i) {
                t._targetEl.classList.remove(i)
            }), this._getPlacementClasses(this._options.placement).inactive.map(function(i) {
                t._targetEl.classList.add(i)
            })), this._targetEl.setAttribute("aria-hidden", "true"), this._targetEl.removeAttribute("aria-modal"), this._targetEl.removeAttribute("role"), this._options.bodyScrolling || document.body.classList.remove("overflow-hidden"), this._options.backdrop && this._destroyBackdropEl(), this._visible = !1, this._options.onHide(this)
        }, e.prototype.show = function() {
            var t = this;
            this._options.edge ? (this._getPlacementClasses(this._options.placement + "-edge").active.map(function(i) {
                t._targetEl.classList.add(i)
            }), this._getPlacementClasses(this._options.placement + "-edge").inactive.map(function(i) {
                t._targetEl.classList.remove(i)
            })) : (this._getPlacementClasses(this._options.placement).active.map(function(i) {
                t._targetEl.classList.add(i)
            }), this._getPlacementClasses(this._options.placement).inactive.map(function(i) {
                t._targetEl.classList.remove(i)
            })), this._targetEl.setAttribute("aria-modal", "true"), this._targetEl.setAttribute("role", "dialog"), this._targetEl.removeAttribute("aria-hidden"), this._options.bodyScrolling || document.body.classList.add("overflow-hidden"), this._options.backdrop && this._createBackdrop(), this._visible = !0, this._options.onShow(this)
        }, e.prototype.toggle = function() {
            this.isVisible() ? this.hide() : this.show()
        }, e.prototype._createBackdrop = function() {
            var t, i = this;
            if (!this._visible) {
                var n = document.createElement("div");
                n.setAttribute("drawer-backdrop", ""), (t = n.classList).add.apply(t, this._options.backdropClasses.split(" ")), document.querySelector("body").append(n), n.addEventListener("click", function() {
                    i.hide()
                })
            }
        }, e.prototype._destroyBackdropEl = function() {
            this._visible && document.querySelector("[drawer-backdrop]").remove()
        }, e.prototype._getPlacementClasses = function(t) {
            switch (t) {
                case "top":
                    return {
                        base: ["top-0", "left-0", "right-0"],
                        active: ["transform-none"],
                        inactive: ["-translate-y-full"]
                    };
                case "right":
                    return {
                        base: ["right-0", "top-0"],
                        active: ["transform-none"],
                        inactive: ["translate-x-full"]
                    };
                case "bottom":
                    return {
                        base: ["bottom-0", "left-0", "right-0"],
                        active: ["transform-none"],
                        inactive: ["translate-y-full"]
                    };
                case "left":
                    return {
                        base: ["left-0", "top-0"],
                        active: ["transform-none"],
                        inactive: ["-translate-x-full"]
                    };
                case "bottom-edge":
                    return {
                        base: ["left-0", "top-0"],
                        active: ["transform-none"],
                        inactive: ["translate-y-full", this._options.edgeOffset]
                    };
                default:
                    return {
                        base: ["left-0", "top-0"],
                        active: ["transform-none"],
                        inactive: ["-translate-x-full"]
                    }
            }
        }, e.prototype.isHidden = function() {
            return !this._visible
        }, e.prototype.isVisible = function() {
            return this._visible
        }, e
    }(),
    qt = function(e, t) {
        if (t.some(function(i) {
                return i.id === e
            })) return t.find(function(i) {
            return i.id === e
        })
    };

function Ke() {
    var e = [];
    document.querySelectorAll("[data-drawer-target]").forEach(function(t) {
        var i = t.getAttribute("data-drawer-target"),
            n = document.getElementById(i);
        if (n) {
            var r = t.getAttribute("data-drawer-placement"),
                s = t.getAttribute("data-drawer-body-scrolling"),
                o = t.getAttribute("data-drawer-backdrop"),
                a = t.getAttribute("data-drawer-edge"),
                c = t.getAttribute("data-drawer-edge-offset");
            qt(i, e) || e.push({
                id: i,
                object: new pn(n, {
                    placement: r || at.placement,
                    bodyScrolling: s ? s === "true" : at.bodyScrolling,
                    backdrop: o ? o === "true" : at.backdrop,
                    edge: a ? a === "true" : at.edge,
                    edgeOffset: c || at.edgeOffset
                })
            })
        } else console.error("Drawer with id ".concat(i, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))
    }), document.querySelectorAll("[data-drawer-toggle]").forEach(function(t) {
        var i = t.getAttribute("data-drawer-toggle"),
            n = document.getElementById(i);
        if (n) {
            var r = qt(i, e);
            r ? t.addEventListener("click", function() {
                r.object.toggle()
            }) : console.error("Drawer with id ".concat(i, " has not been initialized. Please initialize it using the data-drawer-target attribute."))
        } else console.error("Drawer with id ".concat(i, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))
    }), document.querySelectorAll("[data-drawer-dismiss], [data-drawer-hide]").forEach(function(t) {
        var i = t.getAttribute("data-drawer-dismiss") ? t.getAttribute("data-drawer-dismiss") : t.getAttribute("data-drawer-hide"),
            n = document.getElementById(i);
        if (n) {
            var r = qt(i, e);
            r ? t.addEventListener("click", function() {
                r.object.hide()
            }) : console.error("Drawer with id ".concat(i, " has not been initialized. Please initialize it using the data-drawer-target attribute."))
        } else console.error("Drawer with id ".concat(i, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id"))
    }), document.querySelectorAll("[data-drawer-show]").forEach(function(t) {
        var i = t.getAttribute("data-drawer-show"),
            n = document.getElementById(i);
        if (n) {
            var r = qt(i, e);
            r ? t.addEventListener("click", function() {
                r.object.show()
            }) : console.error("Drawer with id ".concat(i, " has not been initialized. Please initialize it using the data-drawer-target attribute."))
        } else console.error("Drawer with id ".concat(i, " not found. Are you sure that the data-drawer-target attribute points to the correct drawer id?"))
    })
}
typeof window < "u" && (window.Drawer = pn, window.initDrawers = Ke);
var ie = globalThis && globalThis.__assign || function() {
        return ie = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, ie.apply(this, arguments)
    },
    Ci = {
        defaultTabId: null,
        activeClasses: "text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500",
        inactiveClasses: "dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300",
        onShow: function() {}
    },
    hn = function() {
        function e(t, i) {
            t === void 0 && (t = []), i === void 0 && (i = Ci), this._items = t, this._activeTab = i ? this.getTab(i.defaultTabId) : null, this._options = ie(ie({}, Ci), i), this._init()
        }
        return e.prototype._init = function() {
            var t = this;
            this._items.length && (this._activeTab || this._setActiveTab(this._items[0]), this.show(this._activeTab.id, !0), this._items.map(function(i) {
                i.triggerEl.addEventListener("click", function() {
                    t.show(i.id)
                })
            }))
        }, e.prototype.getActiveTab = function() {
            return this._activeTab
        }, e.prototype._setActiveTab = function(t) {
            this._activeTab = t
        }, e.prototype.getTab = function(t) {
            return this._items.filter(function(i) {
                return i.id === t
            })[0]
        }, e.prototype.show = function(t, i) {
            var n, r, s = this;
            i === void 0 && (i = !1);
            var o = this.getTab(t);
            o === this._activeTab && !i || (this._items.map(function(a) {
                var c, f;
                a !== o && ((c = a.triggerEl.classList).remove.apply(c, s._options.activeClasses.split(" ")), (f = a.triggerEl.classList).add.apply(f, s._options.inactiveClasses.split(" ")), a.targetEl.classList.add("hidden"), a.triggerEl.setAttribute("aria-selected", "false"))
            }), (n = o.triggerEl.classList).add.apply(n, this._options.activeClasses.split(" ")), (r = o.triggerEl.classList).remove.apply(r, this._options.inactiveClasses.split(" ")), o.triggerEl.setAttribute("aria-selected", "true"), o.targetEl.classList.remove("hidden"), this._setActiveTab(o), this._options.onShow(this, o))
        }, e
    }();

function Xe() {
    document.querySelectorAll("[data-tabs-toggle]").forEach(function(e) {
        var t = [],
            i = null;
        e.querySelectorAll('[role="tab"]').forEach(function(n) {
            var r = n.getAttribute("aria-selected") === "true",
                s = {
                    id: n.getAttribute("data-tabs-target"),
                    triggerEl: n,
                    targetEl: document.querySelector(n.getAttribute("data-tabs-target"))
                };
            t.push(s), r && (i = s.id)
        }), new hn(t, {
            defaultTabId: i
        })
    })
}
typeof window < "u" && (window.Tabs = hn, window.initTabs = Xe);
var Q = globalThis && globalThis.__assign || function() {
        return Q = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, Q.apply(this, arguments)
    },
    Mt = globalThis && globalThis.__spreadArray || function(e, t, i) {
        if (i || arguments.length === 2)
            for (var n = 0, r = t.length, s; n < r; n++)(s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
        return e.concat(s || Array.prototype.slice.call(t))
    },
    ne = {
        placement: "top",
        triggerType: "hover",
        onShow: function() {},
        onHide: function() {},
        onToggle: function() {}
    },
    vn = function() {
        function e(t, i, n) {
            t === void 0 && (t = null), i === void 0 && (i = null), n === void 0 && (n = ne), this._targetEl = t, this._triggerEl = i, this._options = Q(Q({}, ne), n), this._popperInstance = this._createPopperInstance(), this._visible = !1, this._init()
        }
        return e.prototype._init = function() {
            this._triggerEl && this._setupEventListeners()
        }, e.prototype._setupEventListeners = function() {
            var t = this,
                i = this._getTriggerEvents();
            i.showEvents.forEach(function(n) {
                t._triggerEl.addEventListener(n, function() {
                    t.show()
                })
            }), i.hideEvents.forEach(function(n) {
                t._triggerEl.addEventListener(n, function() {
                    t.hide()
                })
            })
        }, e.prototype._createPopperInstance = function() {
            return We(this._triggerEl, this._targetEl, {
                placement: this._options.placement,
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: [0, 8]
                    }
                }]
            })
        }, e.prototype._getTriggerEvents = function() {
            switch (this._options.triggerType) {
                case "hover":
                    return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"]
                    };
                case "click":
                    return {
                        showEvents: ["click", "focus"],
                        hideEvents: ["focusout", "blur"]
                    };
                case "none":
                    return {
                        showEvents: [],
                        hideEvents: []
                    };
                default:
                    return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"]
                    }
            }
        }, e.prototype._setupKeydownListener = function() {
            var t = this;
            this._keydownEventListener = function(i) {
                i.key === "Escape" && t.hide()
            }, document.body.addEventListener("keydown", this._keydownEventListener, !0)
        }, e.prototype._removeKeydownListener = function() {
            document.body.removeEventListener("keydown", this._keydownEventListener, !0)
        }, e.prototype._setupClickOutsideListener = function() {
            var t = this;
            this._clickOutsideEventListener = function(i) {
                t._handleClickOutside(i, t._targetEl)
            }, document.body.addEventListener("click", this._clickOutsideEventListener, !0)
        }, e.prototype._removeClickOutsideListener = function() {
            document.body.removeEventListener("click", this._clickOutsideEventListener, !0)
        }, e.prototype._handleClickOutside = function(t, i) {
            var n = t.target;
            n !== i && !i.contains(n) && !this._triggerEl.contains(n) && this.isVisible() && this.hide()
        }, e.prototype.isVisible = function() {
            return this._visible
        }, e.prototype.toggle = function() {
            this.isVisible() ? this.hide() : this.show()
        }, e.prototype.show = function() {
            this._targetEl.classList.remove("opacity-0", "invisible"), this._targetEl.classList.add("opacity-100", "visible"), this._popperInstance.setOptions(function(t) {
                return Q(Q({}, t), {
                    modifiers: Mt(Mt([], t.modifiers, !0), [{
                        name: "eventListeners",
                        enabled: !0
                    }], !1)
                })
            }), this._setupClickOutsideListener(), this._setupKeydownListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this)
        }, e.prototype.hide = function() {
            this._targetEl.classList.remove("opacity-100", "visible"), this._targetEl.classList.add("opacity-0", "invisible"), this._popperInstance.setOptions(function(t) {
                return Q(Q({}, t), {
                    modifiers: Mt(Mt([], t.modifiers, !0), [{
                        name: "eventListeners",
                        enabled: !1
                    }], !1)
                })
            }), this._removeClickOutsideListener(), this._removeKeydownListener(), this._visible = !1, this._options.onHide(this)
        }, e
    }();

function Ge() {
    document.querySelectorAll("[data-tooltip-target]").forEach(function(e) {
        var t = e.getAttribute("data-tooltip-target"),
            i = document.getElementById(t);
        if (i) {
            var n = e.getAttribute("data-tooltip-trigger"),
                r = e.getAttribute("data-tooltip-placement");
            new vn(i, e, {
                placement: r || ne.placement,
                triggerType: n || ne.triggerType
            })
        } else console.error('The tooltip element with id "'.concat(t, '" does not exist. Please check the data-tooltip-target attribute.'))
    })
}
typeof window < "u" && (window.Tooltip = vn, window.initTooltips = Ge);
var Z = globalThis && globalThis.__assign || function() {
        return Z = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, Z.apply(this, arguments)
    },
    Ut = globalThis && globalThis.__spreadArray || function(e, t, i) {
        if (i || arguments.length === 2)
            for (var n = 0, r = t.length, s; n < r; n++)(s || !(n in t)) && (s || (s = Array.prototype.slice.call(t, 0, n)), s[n] = t[n]);
        return e.concat(s || Array.prototype.slice.call(t))
    },
    At = {
        placement: "top",
        offset: 10,
        triggerType: "hover",
        onShow: function() {},
        onHide: function() {},
        onToggle: function() {}
    },
    mn = function() {
        function e(t, i, n) {
            t === void 0 && (t = null), i === void 0 && (i = null), n === void 0 && (n = At), this._targetEl = t, this._triggerEl = i, this._options = Z(Z({}, At), n), this._popperInstance = this._createPopperInstance(), this._visible = !1, this._init()
        }
        return e.prototype._init = function() {
            this._triggerEl && this._setupEventListeners()
        }, e.prototype._setupEventListeners = function() {
            var t = this,
                i = this._getTriggerEvents();
            i.showEvents.forEach(function(n) {
                t._triggerEl.addEventListener(n, function() {
                    t.show()
                }), t._targetEl.addEventListener(n, function() {
                    t.show()
                })
            }), i.hideEvents.forEach(function(n) {
                t._triggerEl.addEventListener(n, function() {
                    setTimeout(function() {
                        t._targetEl.matches(":hover") || t.hide()
                    }, 100)
                }), t._targetEl.addEventListener(n, function() {
                    setTimeout(function() {
                        t._triggerEl.matches(":hover") || t.hide()
                    }, 100)
                })
            })
        }, e.prototype._createPopperInstance = function() {
            return We(this._triggerEl, this._targetEl, {
                placement: this._options.placement,
                modifiers: [{
                    name: "offset",
                    options: {
                        offset: [0, this._options.offset]
                    }
                }]
            })
        }, e.prototype._getTriggerEvents = function() {
            switch (this._options.triggerType) {
                case "hover":
                    return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"]
                    };
                case "click":
                    return {
                        showEvents: ["click", "focus"],
                        hideEvents: ["focusout", "blur"]
                    };
                case "none":
                    return {
                        showEvents: [],
                        hideEvents: []
                    };
                default:
                    return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"]
                    }
            }
        }, e.prototype._setupKeydownListener = function() {
            var t = this;
            this._keydownEventListener = function(i) {
                i.key === "Escape" && t.hide()
            }, document.body.addEventListener("keydown", this._keydownEventListener, !0)
        }, e.prototype._removeKeydownListener = function() {
            document.body.removeEventListener("keydown", this._keydownEventListener, !0)
        }, e.prototype._setupClickOutsideListener = function() {
            var t = this;
            this._clickOutsideEventListener = function(i) {
                t._handleClickOutside(i, t._targetEl)
            }, document.body.addEventListener("click", this._clickOutsideEventListener, !0)
        }, e.prototype._removeClickOutsideListener = function() {
            document.body.removeEventListener("click", this._clickOutsideEventListener, !0)
        }, e.prototype._handleClickOutside = function(t, i) {
            var n = t.target;
            n !== i && !i.contains(n) && !this._triggerEl.contains(n) && this.isVisible() && this.hide()
        }, e.prototype.isVisible = function() {
            return this._visible
        }, e.prototype.toggle = function() {
            this.isVisible() ? this.hide() : this.show(), this._options.onToggle(this)
        }, e.prototype.show = function() {
            this._targetEl.classList.remove("opacity-0", "invisible"), this._targetEl.classList.add("opacity-100", "visible"), this._popperInstance.setOptions(function(t) {
                return Z(Z({}, t), {
                    modifiers: Ut(Ut([], t.modifiers, !0), [{
                        name: "eventListeners",
                        enabled: !0
                    }], !1)
                })
            }), this._setupClickOutsideListener(), this._setupKeydownListener(), this._popperInstance.update(), this._visible = !0, this._options.onShow(this)
        }, e.prototype.hide = function() {
            this._targetEl.classList.remove("opacity-100", "visible"), this._targetEl.classList.add("opacity-0", "invisible"), this._popperInstance.setOptions(function(t) {
                return Z(Z({}, t), {
                    modifiers: Ut(Ut([], t.modifiers, !0), [{
                        name: "eventListeners",
                        enabled: !1
                    }], !1)
                })
            }), this._removeClickOutsideListener(), this._removeKeydownListener(), this._visible = !1, this._options.onHide(this)
        }, e
    }();

function Ye() {
    document.querySelectorAll("[data-popover-target]").forEach(function(e) {
        var t = e.getAttribute("data-popover-target"),
            i = document.getElementById(t);
        if (i) {
            var n = e.getAttribute("data-popover-trigger"),
                r = e.getAttribute("data-popover-placement"),
                s = e.getAttribute("data-popover-offset");
            new mn(i, e, {
                placement: r || At.placement,
                offset: s ? parseInt(s) : At.offset,
                triggerType: n || At.triggerType
            })
        } else console.error('The popover element with id "'.concat(t, '" does not exist. Please check the data-popover-target attribute.'))
    })
}
typeof window < "u" && (window.Popover = mn, window.initPopovers = Ye);
var re = globalThis && globalThis.__assign || function() {
        return re = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++) {
                t = arguments[i];
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }
            return e
        }, re.apply(this, arguments)
    },
    Te = {
        triggerType: "hover",
        onShow: function() {},
        onHide: function() {},
        onToggle: function() {}
    },
    gn = function() {
        function e(t, i, n, r) {
            t === void 0 && (t = null), i === void 0 && (i = null), n === void 0 && (n = null), r === void 0 && (r = Te), this._parentEl = t, this._triggerEl = i, this._targetEl = n, this._options = re(re({}, Te), r), this._visible = !1, this._init()
        }
        return e.prototype._init = function() {
            var t = this;
            if (this._triggerEl) {
                var i = this._getTriggerEventTypes(this._options.triggerType);
                i.showEvents.forEach(function(n) {
                    t._triggerEl.addEventListener(n, function() {
                        t.show()
                    }), t._targetEl.addEventListener(n, function() {
                        t.show()
                    })
                }), i.hideEvents.forEach(function(n) {
                    t._parentEl.addEventListener(n, function() {
                        t._parentEl.matches(":hover") || t.hide()
                    })
                })
            }
        }, e.prototype.hide = function() {
            this._targetEl.classList.add("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "false"), this._visible = !1, this._options.onHide(this)
        }, e.prototype.show = function() {
            this._targetEl.classList.remove("hidden"), this._triggerEl && this._triggerEl.setAttribute("aria-expanded", "true"), this._visible = !0, this._options.onShow(this)
        }, e.prototype.toggle = function() {
            this._visible ? this.hide() : this.show()
        }, e.prototype.isHidden = function() {
            return !this._visible
        }, e.prototype.isVisible = function() {
            return this._visible
        }, e.prototype._getTriggerEventTypes = function(t) {
            switch (t) {
                case "hover":
                    return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"]
                    };
                case "click":
                    return {
                        showEvents: ["click", "focus"],
                        hideEvents: ["focusout", "blur"]
                    };
                case "none":
                    return {
                        showEvents: [],
                        hideEvents: []
                    };
                default:
                    return {
                        showEvents: ["mouseenter", "focus"],
                        hideEvents: ["mouseleave", "blur"]
                    }
            }
        }, e
    }();

function Qe() {
    document.querySelectorAll("[data-dial-init]").forEach(function(e) {
        var t = e.querySelector("[data-dial-toggle]");
        if (t) {
            var i = t.getAttribute("data-dial-toggle"),
                n = document.getElementById(i);
            if (n) {
                var r = t.getAttribute("data-dial-trigger");
                new gn(e, t, n, {
                    triggerType: r || Te.triggerType
                })
            } else console.error("Dial with id ".concat(i, " does not exist. Are you sure that the data-dial-toggle attribute points to the correct modal id?"))
        } else console.error("Dial with id ".concat(e.id, " does not have a trigger element. Are you sure that the data-dial-toggle attribute exists?"))
    })
}
typeof window < "u" && (window.Dial = gn, window.initDials = Qe);

function Ks() {
    je(), Ie(), Be(), Ne(), $e(), Je(), Ke(), Xe(), Ge(), Ye(), Qe()
}
typeof window < "u" && (window.initFlowbite = Ks);
var Xs = new Ur("load", [je, Ie, Be, Ne, $e, Je, Ke, Xe, Ge, Ye, Qe]);
Xs.init();