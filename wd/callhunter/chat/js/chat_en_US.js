//!! здесь начало кода chat_en_US.js

//заменяем везде jivochat. на ipchat. и jivosite. на ipsite.

(function(e, t) {
    var i, n, r = typeof t,
        a = e.location,
        s = e.document,
        o = s.documentElement,
        l = e.jQuery,
        c = e.$,
        u = {},
        f = [],
        d = "1.10.2",
        h = f.concat,
        p = f.push,
        g = f.slice,
        v = f.indexOf,
        m = u.toString,
        y = u.hasOwnProperty,
        b = d.trim,
        w = function(e, t) {
            return new w.fn.init(e, t, n)
        },
        x = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        _ = /\S+/g,
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        M = /^[\],:{}\s]*$/,
        k = /(?:^|:|,)(?:\s*\[)+/g,
        E = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        A = /^-ms-/,
        N = /-([\da-z])/gi,
        I = function(e, t) {
            return t.toUpperCase()
        },
        P = function(e) {
            if (s.addEventListener || e.type === "load" || s.readyState === "complete") {
                O();
                w.ready()
            }
        },
        O = function() {
            if (s.addEventListener) {
                s.removeEventListener("DOMContentLoaded", P, false);
                e.removeEventListener("load", P, false)
            } else {
                s.detachEvent("onreadystatechange", P);
                e.detachEvent("onload", P)
            }
        };
    w.fn = w.prototype = {
        jquery: d,
        constructor: w,
        init: function(e, i, n) {
            var r, a;
            if (!e) {
                return this
            }
            if (typeof e === "string") {
                if (e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3) {
                    r = [null, e, null]
                } else {
                    r = S.exec(e)
                }
                if (r && (r[1] || !i)) {
                    if (r[1]) {
                        i = i instanceof w ? i[0] : i;
                        w.merge(this, w.parseHTML(r[1], i && i.nodeType ? i.ownerDocument || i : s, true));
                        if (T.test(r[1]) && w.isPlainObject(i)) {
                            for (r in i) {
                                if (w.isFunction(this[r])) {
                                    this[r](i[r])
                                } else {
                                    this.attr(r, i[r])
                                }
                            }
                        }
                        return this
                    } else {
                        a = s.getElementById(r[2]);
                        if (a && a.parentNode) {
                            if (a.id !== r[2]) {
                                return n.find(e)
                            }
                            this.length = 1;
                            this[0] = a
                        }
                        this.context = s;
                        this.selector = e;
                        return this
                    }
                } else if (!i || i.jquery) {
                    return (i || n).find(e)
                } else {
                    return this.constructor(i).find(e)
                }
            } else if (e.nodeType) {
                this.context = this[0] = e;
                this.length = 1;
                return this
            } else if (w.isFunction(e)) {
                return n.ready(e)
            }
            if (e.selector !== t) {
                this.selector = e.selector;
                this.context = e.context
            }
            return w.makeArray(e, this)
        },
        selector: "",
        length: 0,
        toArray: function() {
            return g.call(this)
        },
        get: function(e) {
            return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = w.merge(this.constructor(), e);
            t.prevObject = this;
            t.context = this.context;
            return t
        },
        each: function(e, t) {
            return w.each(this, e, t)
        },
        ready: function(e) {
            w.ready.promise().done(e);
            return this
        },
        slice: function() {
            return this.pushStack(g.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                i = +e + (e < 0 ? t : 0);
            return this.pushStack(i >= 0 && i < t ? [this[i]] : [])
        },
        map: function(e) {
            return this.pushStack(w.map(this, function(t, i) {
                return e.call(t, i, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: p,
        sort: [].sort,
        splice: [].splice
    };
    w.fn.init.prototype = w.fn;
    w.extend = w.fn.extend = function() {
        var e, i, n, r, a, s, o = arguments[0] || {},
            l = 1,
            c = arguments.length,
            u = false;
        if (typeof o === "boolean") {
            u = o;
            o = arguments[1] || {};
            l = 2
        }
        if (typeof o !== "object" && !w.isFunction(o)) {
            o = {}
        }
        if (c === l) {
            o = this;
            --l
        }
        for (; l < c; l++) {
            if ((a = arguments[l]) != null) {
                for (r in a) {
                    e = o[r];
                    n = a[r];
                    if (o === n) {
                        continue
                    }
                    if (u && n && (w.isPlainObject(n) || (i = w.isArray(n)))) {
                        if (i) {
                            i = false;
                            s = e && w.isArray(e) ? e : []
                        } else {
                            s = e && w.isPlainObject(e) ? e : {}
                        }
                        o[r] = w.extend(u, s, n)
                    } else if (n !== t) {
                        o[r] = n
                    }
                }
            }
        }
        return o
    };
    w.extend({
        expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            if (e.$ === w) {
                e.$ = c
            }
            if (t && e.jQuery === w) {
                e.jQuery = l
            }
            return w
        },
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) {
                w.readyWait++
            } else {
                w.ready(true)
            }
        },
        ready: function(e) {
            if (e === true ? --w.readyWait : w.isReady) {
                return
            }
            if (!s.body) {
                return setTimeout(w.ready)
            }
            w.isReady = true;
            if (e !== true && --w.readyWait > 0) {
                return
            }
            i.resolveWith(s, [w]);
            if (w.fn.trigger) {
                w(s).trigger("ready").off("ready")
            }
        },
        isFunction: function(e) {
            return w.type(e) === "function"
        },
        isArray: Array.isArray || function(e) {
            return w.type(e) === "array"
        },
        isWindow: function(e) {
            return e != null && e == e.window
        },
        isNumeric: function(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            if (e == null) {
                return String(e)
            }
            return typeof e === "object" || typeof e === "function" ? u[m.call(e)] || "object" : typeof e
        },
        isPlainObject: function(e) {
            var i;
            if (!e || w.type(e) !== "object" || e.nodeType || w.isWindow(e)) {
                return false
            }
            try {
                if (e.constructor && !y.call(e, "constructor") && !y.call(e.constructor.prototype, "isPrototypeOf")) {
                    return false
                }
            } catch (n) {
                return false
            }
            if (w.support.ownLast) {
                for (i in e) {
                    return y.call(e, i)
                }
            }
            for (i in e) {}
            return i === t || y.call(e, i)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return false
            }
            return true
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, i) {
            if (!e || typeof e !== "string") {
                return null
            }
            if (typeof t === "boolean") {
                i = t;
                t = false
            }
            t = t || s;
            var n = T.exec(e),
                r = !i && [];
            if (n) {
                return [t.createElement(n[1])]
            }
            n = w.buildFragment([e], t, r);
            if (r) {
                w(r).remove()
            }
            return w.merge([], n.childNodes)
        },
        parseJSON: function(t) {
            if (e.JSON && e.JSON.parse) {
                return e.JSON.parse(t)
            }
            if (t === null) {
                return t
            }
            if (typeof t === "string") {
                t = w.trim(t);
                if (t) {
                    if (M.test(t.replace(E, "@").replace(j, "]").replace(k, ""))) {
                        return new Function("return " + t)()
                    }
                }
            }
            w.error("Invalid JSON: " + t)
        },
        parseXML: function(i) {
            var n, r;
            if (!i || typeof i !== "string") {
                return null
            }
            try {
                if (e.DOMParser) {
                    r = new DOMParser;
                    n = r.parseFromString(i, "text/xml")
                } else {
                    n = new ActiveXObject("Microsoft.XMLDOM");
                    n.async = "false";
                    n.loadXML(i)
                }
            } catch (a) {
                n = t
            }
            if (!n || !n.documentElement || n.getElementsByTagName("parsererror").length) {
                w.error("Invalid XML: " + i)
            }
            return n
        },
        noop: function() {},
        globalEval: function(t) {
            if (t && w.trim(t)) {
                (e.execScript || function(t) {
                    e["eval"].call(e, t)
                })(t)
            }
        },
        camelCase: function(e) {
            return e.replace(A, "ms-").replace(N, I)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var n, r = 0,
                a = e.length,
                s = H(e);
            if (i) {
                if (s) {
                    for (; r < a; r++) {
                        n = t.apply(e[r], i);
                        if (n === false) {
                            break
                        }
                    }
                } else {
                    for (r in e) {
                        n = t.apply(e[r], i);
                        if (n === false) {
                            break
                        }
                    }
                }
            } else {
                if (s) {
                    for (; r < a; r++) {
                        n = t.call(e[r], r, e[r]);
                        if (n === false) {
                            break
                        }
                    }
                } else {
                    for (r in e) {
                        n = t.call(e[r], r, e[r]);
                        if (n === false) {
                            break
                        }
                    }
                }
            }
            return e
        },
        trim: b && !b.call("﻿ ") ? function(e) {
            return e == null ? "" : b.call(e)
        } : function(e) {
            return e == null ? "" : (e + "").replace(C, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            if (e != null) {
                if (H(Object(e))) {
                    w.merge(i, typeof e === "string" ? [e] : e)
                } else {
                    p.call(i, e)
                }
            }
            return i
        },
        inArray: function(e, t, i) {
            var n;
            if (t) {
                if (v) {
                    return v.call(t, e, i)
                }
                n = t.length;
                i = i ? i < 0 ? Math.max(0, n + i) : i : 0;
                for (; i < n; i++) {
                    if (i in t && t[i] === e) {
                        return i
                    }
                }
            }
            return -1
        },
        merge: function(e, i) {
            var n = i.length,
                r = e.length,
                a = 0;
            if (typeof n === "number") {
                for (; a < n; a++) {
                    e[r++] = i[a]
                }
            } else {
                while (i[a] !== t) {
                    e[r++] = i[a++]
                }
            }
            e.length = r;
            return e
        },
        grep: function(e, t, i) {
            var n, r = [],
                a = 0,
                s = e.length;
            i = !!i;
            for (; a < s; a++) {
                n = !!t(e[a], a);
                if (i !== n) {
                    r.push(e[a])
                }
            }
            return r
        },
        map: function(e, t, i) {
            var n, r = 0,
                a = e.length,
                s = H(e),
                o = [];
            if (s) {
                for (; r < a; r++) {
                    n = t(e[r], r, i);
                    if (n != null) {
                        o[o.length] = n
                    }
                }
            } else {
                for (r in e) {
                    n = t(e[r], r, i);
                    if (n != null) {
                        o[o.length] = n
                    }
                }
            }
            return h.apply([], o)
        },
        guid: 1,
        proxy: function(e, i) {
            var n, r, a;
            if (typeof i === "string") {
                a = e[i];
                i = e;
                e = a
            }
            if (!w.isFunction(e)) {
                return t
            }
            n = g.call(arguments, 2);
            r = function() {
                return e.apply(i || this, n.concat(g.call(arguments)))
            };
            r.guid = e.guid = e.guid || w.guid++;
            return r
        },
        access: function(e, i, n, r, a, s, o) {
            var l = 0,
                c = e.length,
                u = n == null;
            if (w.type(n) === "object") {
                a = true;
                for (l in n) {
                    w.access(e, i, l, n[l], true, s, o)
                }
            } else if (r !== t) {
                a = true;
                if (!w.isFunction(r)) {
                    o = true
                }
                if (u) {
                    if (o) {
                        i.call(e, r);
                        i = null
                    } else {
                        u = i;
                        i = function(e, t, i) {
                            return u.call(w(e), i)
                        }
                    }
                }
                if (i) {
                    for (; l < c; l++) {
                        i(e[l], n, o ? r : r.call(e[l], l, i(e[l], n)))
                    }
                }
            }
            return a ? e : u ? i.call(e) : c ? i(e[0], n) : s
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, i, n) {
            var r, a, s = {};
            for (a in t) {
                s[a] = e.style[a];
                e.style[a] = t[a]
            }
            r = i.apply(e, n || []);
            for (a in t) {
                e.style[a] = s[a]
            }
            return r
        }
    });
    w.ready.promise = function(t) {
        if (!i) {
            i = w.Deferred();
            if (s.readyState === "complete") {
                setTimeout(w.ready)
            } else if (s.addEventListener) {
                s.addEventListener("DOMContentLoaded", P, false);
                e.addEventListener("load", P, false)
            } else {
                s.attachEvent("onreadystatechange", P);
                e.attachEvent("onload", P);
                var n = false;
                try {
                    n = e.frameElement == null && s.documentElement
                } catch (r) {}
                if (n && n.doScroll) {
                    (function a() {
                        if (!w.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(a, 50)
                            }
                            O();
                            w.ready()
                        }
                    })()
                }
            }
        }
        return i.promise(t)
    };
    w.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });

    function H(e) {
        var t = e.length,
            i = w.type(e);
        if (w.isWindow(e)) {
            return false
        }
        if (e.nodeType === 1 && t) {
            return true
        }
        return i === "array" || i !== "function" && (t === 0 || typeof t === "number" && t > 0 && t - 1 in e)
    }
    n = w(s);
    (function(e, t) {
        var i, n, r, a, s, o, l, c, u, f, d, h, p, g, v, m, y, b = "sizzle" + -new Date,
            x = e.document,
            _ = 0,
            C = 0,
            S = ot(),
            T = ot(),
            M = ot(),
            k = false,
            E = function(e, t) {
                if (e === t) {
                    k = true;
                    return 0
                }
                return 0
            },
            j = typeof t,
            A = 1 << 31,
            N = {}.hasOwnProperty,
            I = [],
            P = I.pop,
            O = I.push,
            H = I.push,
            L = I.slice,
            D = I.indexOf || function(e) {
                var t = 0,
                    i = this.length;
                for (; t < i; t++) {
                    if (this[t] === e) {
                        return t
                    }
                }
                return -1
            },
            $ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            F = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            B = F.replace("w", "w#"),
            V = "\\[" + R + "*(" + F + ")" + R + "*(?:([*^$|!~]?=)" + R + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + B + ")|)|)" + R + "*\\]",
            z = ":(" + F + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + V.replace(3, 8) + ")*)|.*)\\)|)",
            W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            J = new RegExp("^" + R + "*," + R + "*"),
            q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp(R + "*[+~]"),
            Y = new RegExp("=" + R + "*([^\\]'\"]*)" + R + "*\\]", "g"),
            X = new RegExp(z),
            G = new RegExp("^" + B + "$"),
            Q = {
                ID: new RegExp("^#(" + F + ")"),
                CLASS: new RegExp("^\\.(" + F + ")"),
                TAG: new RegExp("^(" + F.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + V),
                PSEUDO: new RegExp("^" + z),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + $ + ")$", "i"),
                needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
            },
            Z = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            et = /^(?:input|select|textarea|button)$/i,
            tt = /^h\d$/i,
            it = /'|\\/g,
            nt = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            rt = function(e, t, i) {
                var n = "0x" + t - 65536;
                return n !== n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
            };
        try {
            H.apply(I = L.call(x.childNodes), x.childNodes);
            I[x.childNodes.length].nodeType
        } catch (at) {
            H = {
                apply: I.length ? function(e, t) {
                    O.apply(e, L.call(t))
                } : function(e, t) {
                    var i = e.length,
                        n = 0;
                    while (e[i++] = t[n++]) {}
                    e.length = i - 1
                }
            }
        }

        function st(e, t, i, r) {
            var a, s, o, l, c, u, h, v, m, w;
            if ((t ? t.ownerDocument || t : x) !== d) {
                f(t)
            }
            t = t || d;
            i = i || [];
            if (!e || typeof e !== "string") {
                return i
            }
            if ((l = t.nodeType) !== 1 && l !== 9) {
                return []
            }
            if (p && !r) {
                if (a = K.exec(e)) {
                    if (o = a[1]) {
                        if (l === 9) {
                            s = t.getElementById(o);
                            if (s && s.parentNode) {
                                if (s.id === o) {
                                    i.push(s);
                                    return i
                                }
                            } else {
                                return i
                            }
                        } else {
                            if (t.ownerDocument && (s = t.ownerDocument.getElementById(o)) && y(t, s) && s.id === o) {
                                i.push(s);
                                return i
                            }
                        }
                    } else if (a[2]) {
                        H.apply(i, t.getElementsByTagName(e));
                        return i
                    } else if ((o = a[3]) && n.getElementsByClassName && t.getElementsByClassName) {
                        H.apply(i, t.getElementsByClassName(o));
                        return i
                    }
                }
                if (n.qsa && (!g || !g.test(e))) {
                    v = h = b;
                    m = t;
                    w = l === 9 && e;
                    if (l === 1 && t.nodeName.toLowerCase() !== "object") {
                        u = vt(e);
                        if (h = t.getAttribute("id")) {
                            v = h.replace(it, "\\$&")
                        } else {
                            t.setAttribute("id", v)
                        }
                        v = "[id='" + v + "'] ";
                        c = u.length;
                        while (c--) {
                            u[c] = v + mt(u[c])
                        }
                        m = U.test(e) && t.parentNode || t;
                        w = u.join(",")
                    }
                    if (w) {
                        try {
                            H.apply(i, m.querySelectorAll(w));
                            return i
                        } catch (_) {} finally {
                            if (!h) {
                                t.removeAttribute("id")
                            }
                        }
                    }
                }
            }
            return Tt(e.replace(W, "$1"), t, i, r)
        }

        function ot() {
            var e = [];

            function t(i, n) {
                if (e.push(i += " ") > a.cacheLength) {
                    delete t[e.shift()]
                }
                return t[i] = n
            }
            return t
        }

        function lt(e) {
            e[b] = true;
            return e
        }

        function ct(e) {
            var t = d.createElement("div");
            try {
                return !!e(t)
            } catch (i) {
                return false
            } finally {
                if (t.parentNode) {
                    t.parentNode.removeChild(t)
                }
                t = null
            }
        }

        function ut(e, t) {
            var i = e.split("|"),
                n = e.length;
            while (n--) {
                a.attrHandle[i[n]] = t
            }
        }

        function ft(e, t) {
            var i = t && e,
                n = i && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || A) - (~e.sourceIndex || A);
            if (n) {
                return n
            }
            if (i) {
                while (i = i.nextSibling) {
                    if (i === t) {
                        return -1
                    }
                }
            }
            return e ? 1 : -1
        }

        function dt(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === e
            }
        }

        function ht(e) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === e
            }
        }

        function pt(e) {
            return lt(function(t) {
                t = +t;
                return lt(function(i, n) {
                    var r, a = e([], i.length, t),
                        s = a.length;
                    while (s--) {
                        if (i[r = a[s]]) {
                            i[r] = !(n[r] = i[r])
                        }
                    }
                })
            })
        }
        o = st.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : false
        };
        n = st.support = {};
        f = st.setDocument = function(e) {
            var t = e ? e.ownerDocument || e : x,
                i = t.defaultView;
            if (t === d || t.nodeType !== 9 || !t.documentElement) {
                return d
            }
            d = t;
            h = t.documentElement;
            p = !o(t);
            if (i && i.attachEvent && i !== i.top) {
                i.attachEvent("onbeforeunload", function() {
                    f()
                })
            }
            n.attributes = ct(function(e) {
                e.className = "i";
                return !e.getAttribute("className")
            });
            n.getElementsByTagName = ct(function(e) {
                e.appendChild(t.createComment(""));
                return !e.getElementsByTagName("*").length
            });
            n.getElementsByClassName = ct(function(e) {
                e.innerHTML = "<div class='a'></div><div class='a i'></div>";
                e.firstChild.className = "i";
                return e.getElementsByClassName("i").length === 2
            });
            n.getById = ct(function(e) {
                h.appendChild(e).id = b;
                return !t.getElementsByName || !t.getElementsByName(b).length
            });
            if (n.getById) {
                a.find["ID"] = function(e, t) {
                    if (typeof t.getElementById !== j && p) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : []
                    }
                };
                a.filter["ID"] = function(e) {
                    var t = e.replace(nt, rt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
            } else {
                delete a.find["ID"];
                a.filter["ID"] = function(e) {
                    var t = e.replace(nt, rt);
                    return function(e) {
                        var i = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                        return i && i.value === t
                    }
                }
            }
            a.find["TAG"] = n.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== j) {
                    return t.getElementsByTagName(e)
                }
            } : function(e, t) {
                var i, n = [],
                    r = 0,
                    a = t.getElementsByTagName(e);
                if (e === "*") {
                    while (i = a[r++]) {
                        if (i.nodeType === 1) {
                            n.push(i)
                        }
                    }
                    return n
                }
                return a
            };
            a.find["CLASS"] = n.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== j && p) {
                    return t.getElementsByClassName(e)
                }
            };
            v = [];
            g = [];
            if (n.qsa = Z.test(t.querySelectorAll)) {
                ct(function(e) {
                    e.innerHTML = "<select><option selected=''></option></select>";
                    if (!e.querySelectorAll("[selected]").length) {
                        g.push("\\[" + R + "*(?:value|" + $ + ")")
                    }
                    if (!e.querySelectorAll(":checked").length) {
                        g.push(":checked")
                    }
                });
                ct(function(e) {
                    var i = t.createElement("input");
                    i.setAttribute("type", "hidden");
                    e.appendChild(i).setAttribute("t", "");
                    if (e.querySelectorAll("[t^='']").length) {
                        g.push("[*^$]=" + R + "*(?:''|\"\")")
                    }
                    if (!e.querySelectorAll(":enabled").length) {
                        g.push(":enabled", ":disabled")
                    }
                    e.querySelectorAll("*,:x");
                    g.push(",.*:")
                })
            }
            if (n.matchesSelector = Z.test(m = h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) {
                ct(function(e) {
                    n.disconnectedMatch = m.call(e, "div");
                    m.call(e, "[s!='']:x");
                    v.push("!=", z)
                })
            }
            g = g.length && new RegExp(g.join("|"));
            v = v.length && new RegExp(v.join("|"));
            y = Z.test(h.contains) || h.compareDocumentPosition ? function(e, t) {
                var i = e.nodeType === 9 ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !!(n && n.nodeType === 1 && (i.contains ? i.contains(n) : e.compareDocumentPosition && e.compareDocumentPosition(n) & 16))
            } : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return true
                        }
                    }
                }
                return false
            };
            E = h.compareDocumentPosition ? function(e, i) {
                if (e === i) {
                    k = true;
                    return 0
                }
                var r = i.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(i);
                if (r) {
                    if (r & 1 || !n.sortDetached && i.compareDocumentPosition(e) === r) {
                        if (e === t || y(x, e)) {
                            return -1
                        }
                        if (i === t || y(x, i)) {
                            return 1
                        }
                        return u ? D.call(u, e) - D.call(u, i) : 0
                    }
                    return r & 4 ? -1 : 1
                }
                return e.compareDocumentPosition ? -1 : 1
            } : function(e, i) {
                var n, r = 0,
                    a = e.parentNode,
                    s = i.parentNode,
                    o = [e],
                    l = [i];
                if (e === i) {
                    k = true;
                    return 0
                } else if (!a || !s) {
                    return e === t ? -1 : i === t ? 1 : a ? -1 : s ? 1 : u ? D.call(u, e) - D.call(u, i) : 0
                } else if (a === s) {
                    return ft(e, i)
                }
                n = e;
                while (n = n.parentNode) {
                    o.unshift(n)
                }
                n = i;
                while (n = n.parentNode) {
                    l.unshift(n)
                }
                while (o[r] === l[r]) {
                    r++
                }
                return r ? ft(o[r], l[r]) : o[r] === x ? -1 : l[r] === x ? 1 : 0
            };
            return t
        };
        st.matches = function(e, t) {
            return st(e, null, null, t)
        };
        st.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d) {
                f(e)
            }
            t = t.replace(Y, "='$1']");
            if (n.matchesSelector && p && (!v || !v.test(t)) && (!g || !g.test(t))) {
                try {
                    var i = m.call(e, t);
                    if (i || n.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                        return i
                    }
                } catch (r) {}
            }
            return st(t, d, null, [e]).length > 0
        };
        st.contains = function(e, t) {
            if ((e.ownerDocument || e) !== d) {
                f(e)
            }
            return y(e, t)
        };
        st.attr = function(e, i) {
            if ((e.ownerDocument || e) !== d) {
                f(e)
            }
            var r = a.attrHandle[i.toLowerCase()],
                s = r && N.call(a.attrHandle, i.toLowerCase()) ? r(e, i, !p) : t;
            return s === t ? n.attributes || !p ? e.getAttribute(i) : (s = e.getAttributeNode(i)) && s.specified ? s.value : null : s
        };
        st.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        st.uniqueSort = function(e) {
            var t, i = [],
                r = 0,
                a = 0;
            k = !n.detectDuplicates;
            u = !n.sortStable && e.slice(0);
            e.sort(E);
            if (k) {
                while (t = e[a++]) {
                    if (t === e[a]) {
                        r = i.push(a)
                    }
                }
                while (r--) {
                    e.splice(i[r], 1)
                }
            }
            return e
        };
        s = st.getText = function(e) {
            var t, i = "",
                n = 0,
                r = e.nodeType;
            if (!r) {
                for (; t = e[n]; n++) {
                    i += s(t)
                }
            } else if (r === 1 || r === 9 || r === 11) {
                if (typeof e.textContent === "string") {
                    return e.textContent
                } else {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        i += s(e)
                    }
                }
            } else if (r === 3 || r === 4) {
                return e.nodeValue
            }
            return i
        };
        a = st.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(nt, rt);
                    e[3] = (e[4] || e[5] || "").replace(nt, rt);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            st.error(e[0])
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +(e[7] + e[8] || e[3] === "odd")
                    } else if (e[3]) {
                        st.error(e[0])
                    }
                    return e
                },
                PSEUDO: function(e) {
                    var i, n = !e[5] && e[2];
                    if (Q["CHILD"].test(e[0])) {
                        return null
                    }
                    if (e[3] && e[4] !== t) {
                        e[2] = e[4]
                    } else if (n && X.test(n) && (i = vt(n, true)) && (i = n.indexOf(")", n.length - i) - n.length)) {
                        e[0] = e[0].slice(0, i);
                        e[2] = n.slice(0, i)
                    }
                    return e.slice(0, 3)
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(nt, rt).toLowerCase();
                    return e === "*" ? function() {
                        return true
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = S[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && S(e, function(e) {
                        return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, i) {
                    return function(n) {
                        var r = st.attr(n, e);
                        if (r == null) {
                            return t === "!="
                        }
                        if (!t) {
                            return true
                        }
                        r += "";
                        return t === "=" ? r === i : t === "!=" ? r !== i : t === "^=" ? i && r.indexOf(i) === 0 : t === "*=" ? i && r.indexOf(i) > -1 : t === "$=" ? i && r.slice(-i.length) === i : t === "~=" ? (" " + r + " ").indexOf(i) > -1 : t === "|=" ? r === i || r.slice(0, i.length + 1) === i + "-" : false
                    }
                },
                CHILD: function(e, t, i, n, r) {
                    var a = e.slice(0, 3) !== "nth",
                        s = e.slice(-4) !== "last",
                        o = t === "of-type";
                    return n === 1 && r === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(t, i, l) {
                        var c, u, f, d, h, p, g = a !== s ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = o && t.nodeName.toLowerCase(),
                            y = !l && !o;
                        if (v) {
                            if (a) {
                                while (g) {
                                    f = t;
                                    while (f = f[g]) {
                                        if (o ? f.nodeName.toLowerCase() === m : f.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    p = g = e === "only" && !p && "nextSibling"
                                }
                                return true
                            }
                            p = [s ? v.firstChild : v.lastChild];
                            if (s && y) {
                                u = v[b] || (v[b] = {});
                                c = u[e] || [];
                                h = c[0] === _ && c[1];
                                d = c[0] === _ && c[2];
                                f = h && v.childNodes[h];
                                while (f = ++h && f && f[g] || (d = h = 0) || p.pop()) {
                                    if (f.nodeType === 1 && ++d && f === t) {
                                        u[e] = [_, h, d];
                                        break
                                    }
                                }
                            } else if (y && (c = (t[b] || (t[b] = {}))[e]) && c[0] === _) {
                                d = c[1]
                            } else {
                                while (f = ++h && f && f[g] || (d = h = 0) || p.pop()) {
                                    if ((o ? f.nodeName.toLowerCase() === m : f.nodeType === 1) && ++d) {
                                        if (y) {
                                            (f[b] || (f[b] = {}))[e] = [_, d]
                                        }
                                        if (f === t) {
                                            break
                                        }
                                    }
                                }
                            }
                            d -= r;
                            return d === n || d % n === 0 && d / n >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var i, n = a.pseudos[e] || a.setFilters[e.toLowerCase()] || st.error("unsupported pseudo: " + e);
                    if (n[b]) {
                        return n(t)
                    }
                    if (n.length > 1) {
                        i = [e, e, "", t];
                        return a.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function(e, i) {
                            var r, a = n(e, t),
                                s = a.length;
                            while (s--) {
                                r = D.call(e, a[s]);
                                e[r] = !(i[r] = a[s])
                            }
                        }) : function(e) {
                            return n(e, 0, i)
                        }
                    }
                    return n
                }
            },
            pseudos: {
                not: lt(function(e) {
                    var t = [],
                        i = [],
                        n = l(e.replace(W, "$1"));
                    return n[b] ? lt(function(e, t, i, r) {
                        var a, s = n(e, null, r, []),
                            o = e.length;
                        while (o--) {
                            if (a = s[o]) {
                                e[o] = !(t[o] = a)
                            }
                        }
                    }) : function(e, r, a) {
                        t[0] = e;
                        n(t, null, a, i);
                        return !i.pop()
                    }
                }),
                has: lt(function(e) {
                    return function(t) {
                        return st(e, t).length > 0
                    }
                }),
                contains: lt(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || s(t)).indexOf(e) > -1
                    }
                }),
                lang: lt(function(e) {
                    if (!G.test(e || "")) {
                        st.error("unsupported lang: " + e)
                    }
                    e = e.replace(nt, rt).toLowerCase();
                    return function(t) {
                        var i;
                        do {
                            if (i = p ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                i = i.toLowerCase();
                                return i === e || i.indexOf(e + "-") === 0
                            }
                        } while ((t = t.parentNode) && t.nodeType === 1);
                        return false
                    }
                }),
                target: function(t) {
                    var i = e.location && e.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === false
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeName > "@" || e.nodeType === 3 || e.nodeType === 4) {
                            return false
                        }
                    }
                    return true
                },
                parent: function(e) {
                    return !a.pseudos["empty"](e)
                },
                header: function(e) {
                    return tt.test(e.nodeName)
                },
                input: function(e) {
                    return et.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === e.type)
                },
                first: pt(function() {
                    return [0]
                }),
                last: pt(function(e, t) {
                    return [t - 1]
                }),
                eq: pt(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: pt(function(e, t) {
                    var i = 0;
                    for (; i < t; i += 2) {
                        e.push(i)
                    }
                    return e
                }),
                odd: pt(function(e, t) {
                    var i = 1;
                    for (; i < t; i += 2) {
                        e.push(i)
                    }
                    return e
                }),
                lt: pt(function(e, t, i) {
                    var n = i < 0 ? i + t : i;
                    for (; --n >= 0;) {
                        e.push(n)
                    }
                    return e
                }),
                gt: pt(function(e, t, i) {
                    var n = i < 0 ? i + t : i;
                    for (; ++n < t;) {
                        e.push(n)
                    }
                    return e
                })
            }
        };
        a.pseudos["nth"] = a.pseudos["eq"];
        for (i in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
            a.pseudos[i] = dt(i)
        }
        for (i in {
                submit: true,
                reset: true
            }) {
            a.pseudos[i] = ht(i)
        }

        function gt() {}
        gt.prototype = a.filters = a.pseudos;
        a.setFilters = new gt;

        function vt(e, t) {
            var i, n, r, s, o, l, c, u = T[e + " "];
            if (u) {
                return t ? 0 : u.slice(0)
            }
            o = e;
            l = [];
            c = a.preFilter;
            while (o) {
                if (!i || (n = J.exec(o))) {
                    if (n) {
                        o = o.slice(n[0].length) || o
                    }
                    l.push(r = [])
                }
                i = false;
                if (n = q.exec(o)) {
                    i = n.shift();
                    r.push({
                        value: i,
                        type: n[0].replace(W, " ")
                    });
                    o = o.slice(i.length)
                }
                for (s in a.filter) {
                    if ((n = Q[s].exec(o)) && (!c[s] || (n = c[s](n)))) {
                        i = n.shift();
                        r.push({
                            value: i,
                            type: s,
                            matches: n
                        });
                        o = o.slice(i.length)
                    }
                }
                if (!i) {
                    break
                }
            }
            return t ? o.length : o ? st.error(e) : T(e, l).slice(0)
        }

        function mt(e) {
            var t = 0,
                i = e.length,
                n = "";
            for (; t < i; t++) {
                n += e[t].value
            }
            return n
        }

        function yt(e, t, i) {
            var n = t.dir,
                a = i && n === "parentNode",
                s = C++;
            return t.first ? function(t, i, r) {
                while (t = t[n]) {
                    if (t.nodeType === 1 || a) {
                        return e(t, i, r)
                    }
                }
            } : function(t, i, o) {
                var l, c, u, f = _ + " " + s;
                if (o) {
                    while (t = t[n]) {
                        if (t.nodeType === 1 || a) {
                            if (e(t, i, o)) {
                                return true
                            }
                        }
                    }
                } else {
                    while (t = t[n]) {
                        if (t.nodeType === 1 || a) {
                            u = t[b] || (t[b] = {});
                            if ((c = u[n]) && c[0] === f) {
                                if ((l = c[1]) === true || l === r) {
                                    return l === true
                                }
                            } else {
                                c = u[n] = [f];
                                c[1] = e(t, i, o) || r;
                                if (c[1] === true) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }

        function bt(e) {
            return e.length > 1 ? function(t, i, n) {
                var r = e.length;
                while (r--) {
                    if (!e[r](t, i, n)) {
                        return false
                    }
                }
                return true
            } : e[0]
        }

        function wt(e, t, i, n, r) {
            var a, s = [],
                o = 0,
                l = e.length,
                c = t != null;
            for (; o < l; o++) {
                if (a = e[o]) {
                    if (!i || i(a, n, r)) {
                        s.push(a);
                        if (c) {
                            t.push(o)
                        }
                    }
                }
            }
            return s
        }

        function xt(e, t, i, n, r, a) {
            if (n && !n[b]) {
                n = xt(n)
            }
            if (r && !r[b]) {
                r = xt(r, a)
            }
            return lt(function(a, s, o, l) {
                var c, u, f, d = [],
                    h = [],
                    p = s.length,
                    g = a || St(t || "*", o.nodeType ? [o] : o, []),
                    v = e && (a || !t) ? wt(g, d, e, o, l) : g,
                    m = i ? r || (a ? e : p || n) ? [] : s : v;
                if (i) {
                    i(v, m, o, l)
                }
                if (n) {
                    c = wt(m, h);
                    n(c, [], o, l);
                    u = c.length;
                    while (u--) {
                        if (f = c[u]) {
                            m[h[u]] = !(v[h[u]] = f)
                        }
                    }
                }
                if (a) {
                    if (r || e) {
                        if (r) {
                            c = [];
                            u = m.length;
                            while (u--) {
                                if (f = m[u]) {
                                    c.push(v[u] = f)
                                }
                            }
                            r(null, m = [], c, l)
                        }
                        u = m.length;
                        while (u--) {
                            if ((f = m[u]) && (c = r ? D.call(a, f) : d[u]) > -1) {
                                a[c] = !(s[c] = f)
                            }
                        }
                    }
                } else {
                    m = wt(m === s ? m.splice(p, m.length) : m);
                    if (r) {
                        r(null, s, m, l)
                    } else {
                        H.apply(s, m)
                    }
                }
            })
        }

        function _t(e) {
            var t, i, n, r = e.length,
                s = a.relative[e[0].type],
                o = s || a.relative[" "],
                l = s ? 1 : 0,
                u = yt(function(e) {
                    return e === t
                }, o, true),
                f = yt(function(e) {
                    return D.call(t, e) > -1
                }, o, true),
                d = [function(e, i, n) {
                    return !s && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : f(e, i, n))
                }];
            for (; l < r; l++) {
                if (i = a.relative[e[l].type]) {
                    d = [yt(bt(d), i)]
                } else {
                    i = a.filter[e[l].type].apply(null, e[l].matches);
                    if (i[b]) {
                        n = ++l;
                        for (; n < r; n++) {
                            if (a.relative[e[n].type]) {
                                break
                            }
                        }
                        return xt(l > 1 && bt(d), l > 1 && mt(e.slice(0, l - 1).concat({
                            value: e[l - 2].type === " " ? "*" : ""
                        })).replace(W, "$1"), i, l < n && _t(e.slice(l, n)), n < r && _t(e = e.slice(n)), n < r && mt(e))
                    }
                    d.push(i)
                }
            }
            return bt(d)
        }

        function Ct(e, t) {
            var i = 0,
                n = t.length > 0,
                s = e.length > 0,
                o = function(o, l, u, f, h) {
                    var p, g, v, m = [],
                        y = 0,
                        b = "0",
                        w = o && [],
                        x = h != null,
                        C = c,
                        S = o || s && a.find["TAG"]("*", h && l.parentNode || l),
                        T = _ += C == null ? 1 : Math.random() || .1;
                    if (x) {
                        c = l !== d && l;
                        r = i
                    }
                    for (;
                        (p = S[b]) != null; b++) {
                        if (s && p) {
                            g = 0;
                            while (v = e[g++]) {
                                if (v(p, l, u)) {
                                    f.push(p);
                                    break
                                }
                            }
                            if (x) {
                                _ = T;
                                r = ++i
                            }
                        }
                        if (n) {
                            if (p = !v && p) {
                                y--
                            }
                            if (o) {
                                w.push(p)
                            }
                        }
                    }
                    y += b;
                    if (n && b !== y) {
                        g = 0;
                        while (v = t[g++]) {
                            v(w, m, l, u)
                        }
                        if (o) {
                            if (y > 0) {
                                while (b--) {
                                    if (!(w[b] || m[b])) {
                                        m[b] = P.call(f)
                                    }
                                }
                            }
                            m = wt(m)
                        }
                        H.apply(f, m);
                        if (x && !o && m.length > 0 && y + t.length > 1) {
                            st.uniqueSort(f)
                        }
                    }
                    if (x) {
                        _ = T;
                        c = C
                    }
                    return w
                };
            return n ? lt(o) : o
        }
        l = st.compile = function(e, t) {
            var i, n = [],
                r = [],
                a = M[e + " "];
            if (!a) {
                if (!t) {
                    t = vt(e)
                }
                i = t.length;
                while (i--) {
                    a = _t(t[i]);
                    if (a[b]) {
                        n.push(a)
                    } else {
                        r.push(a)
                    }
                }
                a = M(e, Ct(r, n))
            }
            return a
        };

        function St(e, t, i) {
            var n = 0,
                r = t.length;
            for (; n < r; n++) {
                st(e, t[n], i)
            }
            return i
        }

        function Tt(e, t, i, r) {
            var s, o, c, u, f, d = vt(e);
            if (!r) {
                if (d.length === 1) {
                    o = d[0] = d[0].slice(0);
                    if (o.length > 2 && (c = o[0]).type === "ID" && n.getById && t.nodeType === 9 && p && a.relative[o[1].type]) {
                        t = (a.find["ID"](c.matches[0].replace(nt, rt), t) || [])[0];
                        if (!t) {
                            return i
                        }
                        e = e.slice(o.shift().value.length)
                    }
                    s = Q["needsContext"].test(e) ? 0 : o.length;
                    while (s--) {
                        c = o[s];
                        if (a.relative[u = c.type]) {
                            break
                        }
                        if (f = a.find[u]) {
                            if (r = f(c.matches[0].replace(nt, rt), U.test(o[0].type) && t.parentNode || t)) {
                                o.splice(s, 1);
                                e = r.length && mt(o);
                                if (!e) {
                                    H.apply(i, r);
                                    return i
                                }
                                break
                            }
                        }
                    }
                }
            }
            l(e, d)(r, t, !p, i, U.test(e));
            return i
        }
        n.sortStable = b.split("").sort(E).join("") === b;
        n.detectDuplicates = k;
        f();
        n.sortDetached = ct(function(e) {
            return e.compareDocumentPosition(d.createElement("div")) & 1
        });
        if (!ct(function(e) {
                e.innerHTML = "<a href='#'></a>";
                return e.firstChild.getAttribute("href") === "#"
            })) {
            ut("type|href|height|width", function(e, t, i) {
                if (!i) {
                    return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                }
            })
        }
        if (!n.attributes || !ct(function(e) {
                e.innerHTML = "<input/>";
                e.firstChild.setAttribute("value", "");
                return e.firstChild.getAttribute("value") === ""
            })) {
            ut("value", function(e, t, i) {
                if (!i && e.nodeName.toLowerCase() === "input") {
                    return e.defaultValue
                }
            })
        }
        if (!ct(function(e) {
                return e.getAttribute("disabled") == null
            })) {
            ut($, function(e, t, i) {
                var n;
                if (!i) {
                    return (n = e.getAttributeNode(t)) && n.specified ? n.value : e[t] === true ? t.toLowerCase() : null
                }
            })
        }
        w.find = st;
        w.expr = st.selectors;
        w.expr[":"] = w.expr.pseudos;
        w.unique = st.uniqueSort;
        w.text = st.getText;
        w.isXMLDoc = st.isXML;
        w.contains = st.contains
    })(e);
    var L = {};

    function D(e) {
        var t = L[e] = {};
        w.each(e.match(_) || [], function(e, i) {
            t[i] = true
        });
        return t
    }
    w.Callbacks = function(e) {
        e = typeof e === "string" ? L[e] || D(e) : w.extend({}, e);
        var i, n, r, a, s, o, l = [],
            c = !e.once && [],
            u = function(t) {
                n = e.memory && t;
                r = true;
                s = o || 0;
                o = 0;
                a = l.length;
                i = true;
                for (; l && s < a; s++) {
                    if (l[s].apply(t[0], t[1]) === false && e.stopOnFalse) {
                        n = false;
                        break
                    }
                }
                i = false;
                if (l) {
                    if (c) {
                        if (c.length) {
                            u(c.shift())
                        }
                    } else if (n) {
                        l = []
                    } else {
                        f.disable()
                    }
                }
            },
            f = {
                add: function() {
                    if (l) {
                        var t = l.length;
                        (function r(t) {
                            w.each(t, function(t, i) {
                                var n = w.type(i);
                                if (n === "function") {
                                    if (!e.unique || !f.has(i)) {
                                        l.push(i)
                                    }
                                } else if (i && i.length && n !== "string") {
                                    r(i)
                                }
                            })
                        })(arguments);
                        if (i) {
                            a = l.length
                        } else if (n) {
                            o = t;
                            u(n)
                        }
                    }
                    return this
                },
                remove: function() {
                    if (l) {
                        w.each(arguments, function(e, t) {
                            var n;
                            while ((n = w.inArray(t, l, n)) > -1) {
                                l.splice(n, 1);
                                if (i) {
                                    if (n <= a) {
                                        a--
                                    }
                                    if (n <= s) {
                                        s--
                                    }
                                }
                            }
                        })
                    }
                    return this
                },
                has: function(e) {
                    return e ? w.inArray(e, l) > -1 : !!(l && l.length)
                },
                empty: function() {
                    l = [];
                    a = 0;
                    return this
                },
                disable: function() {
                    l = c = n = t;
                    return this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    c = t;
                    if (!n) {
                        f.disable()
                    }
                    return this
                },
                locked: function() {
                    return !c
                },
                fireWith: function(e, t) {
                    if (l && (!r || c)) {
                        t = t || [];
                        t = [e, t.slice ? t.slice() : t];
                        if (i) {
                            c.push(t)
                        } else {
                            u(t)
                        }
                    }
                    return this
                },
                fire: function() {
                    f.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!r
                }
            };
        return f
    };
    w.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", w.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", w.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", w.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        r.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var e = arguments;
                        return w.Deferred(function(i) {
                            w.each(t, function(t, a) {
                                var s = a[0],
                                    o = w.isFunction(e[t]) && e[t];
                                r[a[1]](function() {
                                    var e = o && o.apply(this, arguments);
                                    if (e && w.isFunction(e.promise)) {
                                        e.promise().done(i.resolve).fail(i.reject).progress(i.notify)
                                    } else {
                                        i[s + "With"](this === n ? i.promise() : this, o ? [e] : arguments)
                                    }
                                })
                            });
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? w.extend(e, n) : n
                    }
                },
                r = {};
            n.pipe = n.then;
            w.each(t, function(e, a) {
                var s = a[2],
                    o = a[3];
                n[a[1]] = s.add;
                if (o) {
                    s.add(function() {
                        i = o
                    }, t[e ^ 1][2].disable, t[2][2].lock)
                }
                r[a[0]] = function() {
                    r[a[0] + "With"](this === r ? n : this, arguments);
                    return this
                };
                r[a[0] + "With"] = s.fireWith
            });
            n.promise(r);
            if (e) {
                e.call(r, r)
            }
            return r
        },
        when: function(e) {
            var t = 0,
                i = g.call(arguments),
                n = i.length,
                r = n !== 1 || e && w.isFunction(e.promise) ? n : 0,
                a = r === 1 ? e : w.Deferred(),
                s = function(e, t, i) {
                    return function(n) {
                        t[e] = this;
                        i[e] = arguments.length > 1 ? g.call(arguments) : n;
                        if (i === o) {
                            a.notifyWith(t, i)
                        } else if (!--r) {
                            a.resolveWith(t, i)
                        }
                    }
                },
                o, l, c;
            if (n > 1) {
                o = new Array(n);
                l = new Array(n);
                c = new Array(n);
                for (; t < n; t++) {
                    if (i[t] && w.isFunction(i[t].promise)) {
                        i[t].promise().done(s(t, c, i)).fail(a.reject).progress(s(t, l, o))
                    } else {
                        --r
                    }
                }
            }
            if (!r) {
                a.resolveWith(c, i)
            }
            return a.promise()
        }
    });
    w.support = function(t) {
        var i, n, a, o, l, c, u, f, d, h = s.createElement("div");
        h.setAttribute("className", "t");
        h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
        i = h.getElementsByTagName("*") || [];
        n = h.getElementsByTagName("a")[0];
        if (!n || !n.style || !i.length) {
            return t
        }
        o = s.createElement("select");
        c = o.appendChild(s.createElement("option"));
        a = h.getElementsByTagName("input")[0];
        n.style.cssText = "top:1px;float:left;opacity:.5";
        t.getSetAttribute = h.className !== "t";
        t.leadingWhitespace = h.firstChild.nodeType === 3;
        t.tbody = !h.getElementsByTagName("tbody").length;
        t.htmlSerialize = !!h.getElementsByTagName("link").length;
        t.style = /top/.test(n.getAttribute("style"));
        t.hrefNormalized = n.getAttribute("href") === "/a";
        t.opacity = /^0.5/.test(n.style.opacity);
        t.cssFloat = !!n.style.cssFloat;
        t.checkOn = !!a.value;
        t.optSelected = c.selected;
        t.enctype = !!s.createElement("form").enctype;
        t.html5Clone = s.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>";
        t.inlineBlockNeedsLayout = false;
        t.shrinkWrapBlocks = false;
        t.pixelPosition = false;
        t.deleteExpando = true;
        t.noCloneEvent = true;
        t.reliableMarginRight = true;
        t.boxSizingReliable = true;
        a.checked = true;
        t.noCloneChecked = a.cloneNode(true).checked;
        o.disabled = true;
        t.optDisabled = !c.disabled;
        try {
            delete h.test
        } catch (p) {
            t.deleteExpando = false
        }
        a = s.createElement("input");
        a.setAttribute("value", "");
        t.input = a.getAttribute("value") === "";
        a.value = "t";
        a.setAttribute("type", "radio");
        t.radioValue = a.value === "t";
        a.setAttribute("checked", "t");
        a.setAttribute("name", "t");
        l = s.createDocumentFragment();
        l.appendChild(a);
        t.appendChecked = a.checked;
        t.checkClone = l.cloneNode(true).cloneNode(true).lastChild.checked;
        if (h.attachEvent) {
            h.attachEvent("onclick", function() {
                t.noCloneEvent = false
            });
            h.cloneNode(true).click()
        }
        for (d in {
                submit: true,
                change: true,
                focusin: true
            }) {
            h.setAttribute(u = "on" + d, "t");
            t[d + "Bubbles"] = u in e || h.attributes[u].expando === false
        }
        h.style.backgroundClip = "content-box";
        h.cloneNode(true).style.backgroundClip = "";
        t.clearCloneStyle = h.style.backgroundClip === "content-box";
        for (d in w(t)) {
            break
        }
        t.ownLast = d !== "0";
        w(function() {
            var i, n, a, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                l = s.getElementsByTagName("body")[0];
            if (!l) {
                return
            }
            i = s.createElement("div");
            i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
            l.appendChild(i).appendChild(h);
            h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
            a = h.getElementsByTagName("td");
            a[0].style.cssText = "padding:0;margin:0;border:0;display:none";
            f = a[0].offsetHeight === 0;
            a[0].style.display = "";
            a[1].style.display = "none";
            t.reliableHiddenOffsets = f && a[0].offsetHeight === 0;
            h.innerHTML = "";
            h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
            w.swap(l, l.style.zoom != null ? {
                zoom: 1
            } : {}, function() {
                t.boxSizing = h.offsetWidth === 4
            });
            if (e.getComputedStyle) {
                t.pixelPosition = (e.getComputedStyle(h, null) || {}).top !== "1%";
                t.boxSizingReliable = (e.getComputedStyle(h, null) || {
                    width: "4px"
                }).width === "4px";
                n = h.appendChild(s.createElement("div"));
                n.style.cssText = h.style.cssText = o;
                n.style.marginRight = n.style.width = "0";
                h.style.width = "1px";
                t.reliableMarginRight = !parseFloat((e.getComputedStyle(n, null) || {}).marginRight)
            }
            if (typeof h.style.zoom !== r) {
                h.innerHTML = "";
                h.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1";
                t.inlineBlockNeedsLayout = h.offsetWidth === 3;
                h.style.display = "block";
                h.innerHTML = "<div></div>";
                h.firstChild.style.width = "5px";
                t.shrinkWrapBlocks = h.offsetWidth !== 3
            }
            l.removeChild(i);
            i = h = a = n = null
        });
        i = o = l = c = n = a = null;
        return t
    }({});
    var $ = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        R = /([A-Z])/g;

    function F(e, i, n, r) {
        if (!w.acceptData(e)) {
            return
        }
        var a, s, o = w.expando,
            l = e.nodeType,
            c = l ? w.cache : e,
            u = l ? e[o] : e[o] && o;
        if ((!u || !c[u] || !r && !c[u].data) && n === t && typeof i === "string") {
            return
        }
        if (!u) {
            if (l) {
                u = e[o] = f.pop() || w.guid++
            } else {
                u = o
            }
        }
        if (!c[u]) {
            c[u] = l ? {} : {
                toJSON: w.noop
            }
        }
        if (typeof i === "object" || typeof i === "function") {
            if (r) {
                c[u] = w.extend(c[u], i)
            } else {
                c[u].data = w.extend(c[u].data, i)
            }
        }
        s = c[u];
        if (!r) {
            if (!s.data) {
                s.data = {}
            }
            s = s.data
        }
        if (n !== t) {
            s[w.camelCase(i)] = n
        }
        if (typeof i === "string") {
            a = s[i];
            if (a == null) {
                a = s[w.camelCase(i)]
            }
        } else {
            a = s
        }
        return a
    }

    function B(e, t, i) {
        if (!w.acceptData(e)) {
            return
        }
        var n, r, a = e.nodeType,
            s = a ? w.cache : e,
            o = a ? e[w.expando] : w.expando;
        if (!s[o]) {
            return
        }
        if (t) {
            n = i ? s[o] : s[o].data;
            if (n) {
                if (!w.isArray(t)) {
                    if (t in n) {
                        t = [t]
                    } else {
                        t = w.camelCase(t);
                        if (t in n) {
                            t = [t]
                        } else {
                            t = t.split(" ")
                        }
                    }
                } else {
                    t = t.concat(w.map(t, w.camelCase))
                }
                r = t.length;
                while (r--) {
                    delete n[t[r]]
                }
                if (i ? !z(n) : !w.isEmptyObject(n)) {
                    return
                }
            }
        }
        if (!i) {
            delete s[o].data;
            if (!z(s[o])) {
                return
            }
        }
        if (a) {
            w.cleanData([e], true)
        } else if (w.support.deleteExpando || s != s.window) {
            delete s[o]
        } else {
            s[o] = null
        }
    }
    w.extend({
        cache: {},
        noData: {
            applet: true,
            embed: true,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            e = e.nodeType ? w.cache[e[w.expando]] : e[w.expando];
            return !!e && !z(e)
        },
        data: function(e, t, i) {
            return F(e, t, i)
        },
        removeData: function(e, t) {
            return B(e, t)
        },
        _data: function(e, t, i) {
            return F(e, t, i, true)
        },
        _removeData: function(e, t) {
            return B(e, t, true)
        },
        acceptData: function(e) {
            if (e.nodeType && e.nodeType !== 1 && e.nodeType !== 9) {
                return false
            }
            var t = e.nodeName && w.noData[e.nodeName.toLowerCase()];
            return !t || t !== true && e.getAttribute("classid") === t
        }
    });
    w.fn.extend({
        data: function(e, i) {
            var n, r, a = null,
                s = 0,
                o = this[0];
            if (e === t) {
                if (this.length) {
                    a = w.data(o);
                    if (o.nodeType === 1 && !w._data(o, "parsedAttrs")) {
                        n = o.attributes;
                        for (; s < n.length; s++) {
                            r = n[s].name;
                            if (r.indexOf("data-") === 0) {
                                r = w.camelCase(r.slice(5));
                                V(o, r, a[r])
                            }
                        }
                        w._data(o, "parsedAttrs", true)
                    }
                }
                return a
            }
            if (typeof e === "object") {
                return this.each(function() {
                    w.data(this, e)
                })
            }
            return arguments.length > 1 ? this.each(function() {
                w.data(this, e, i)
            }) : o ? V(o, e, w.data(o, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                w.removeData(this, e)
            })
        }
    });

    function V(e, i, n) {
        if (n === t && e.nodeType === 1) {
            var r = "data-" + i.replace(R, "-$1").toLowerCase();
            n = e.getAttribute(r);
            if (typeof n === "string") {
                try {
                    n = n === "true" ? true : n === "false" ? false : n === "null" ? null : +n + "" === n ? +n : $.test(n) ? w.parseJSON(n) : n
                } catch (a) {}
                w.data(e, i, n)
            } else {
                n = t
            }
        }
        return n
    }

    function z(e) {
        var t;
        for (t in e) {
            if (t === "data" && w.isEmptyObject(e[t])) {
                continue
            }
            if (t !== "toJSON") {
                return false
            }
        }
        return true
    }
    w.extend({
        queue: function(e, t, i) {
            var n;
            if (e) {
                t = (t || "fx") + "queue";
                n = w._data(e, t);
                if (i) {
                    if (!n || w.isArray(i)) {
                        n = w._data(e, t, w.makeArray(i))
                    } else {
                        n.push(i)
                    }
                }
                return n || []
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var i = w.queue(e, t),
                n = i.length,
                r = i.shift(),
                a = w._queueHooks(e, t),
                s = function() {
                    w.dequeue(e, t)
                };
            if (r === "inprogress") {
                r = i.shift();
                n--
            }
            if (r) {
                if (t === "fx") {
                    i.unshift("inprogress")
                }
                delete a.stop;
                r.call(e, s, a)
            }
            if (!n && a) {
                a.empty.fire()
            }
        },
        _queueHooks: function(e, t) {
            var i = t + "queueHooks";
            return w._data(e, i) || w._data(e, i, {
                empty: w.Callbacks("once memory").add(function() {
                    w._removeData(e, t + "queue");
                    w._removeData(e, i)
                })
            })
        }
    });
    w.fn.extend({
        queue: function(e, i) {
            var n = 2;
            if (typeof e !== "string") {
                i = e;
                e = "fx";
                n--
            }
            if (arguments.length < n) {
                return w.queue(this[0], e)
            }
            return i === t ? this : this.each(function() {
                var t = w.queue(this, e, i);
                w._queueHooks(this, e);
                if (e === "fx" && t[0] !== "inprogress") {
                    w.dequeue(this, e)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                w.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            e = w.fx ? w.fx.speeds[e] || e : e;
            t = t || "fx";
            return this.queue(t, function(t, i) {
                var n = setTimeout(t, e);
                i.stop = function() {
                    clearTimeout(n)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, i) {
            var n, r = 1,
                a = w.Deferred(),
                s = this,
                o = this.length,
                l = function() {
                    if (!--r) {
                        a.resolveWith(s, [s])
                    }
                };
            if (typeof e !== "string") {
                i = e;
                e = t
            }
            e = e || "fx";
            while (o--) {
                n = w._data(s[o], e + "queueHooks");
                if (n && n.empty) {
                    r++;
                    n.empty.add(l)
                }
            }
            l();
            return a.promise(i)
        }
    });
    var W, J, q = /[\t\r\n\f]/g,
        U = /\r/g,
        Y = /^(?:input|select|textarea|button|object)$/i,
        X = /^(?:a|area)$/i,
        G = /^(?:checked|selected)$/i,
        Q = w.support.getSetAttribute,
        Z = w.support.input;
    w.fn.extend({
        attr: function(e, t) {
            return w.access(this, w.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                w.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return w.access(this, w.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            e = w.propFix[e] || e;
            return this.each(function() {
                try {
                    this[e] = t;
                    delete this[e]
                } catch (i) {}
            })
        },
        addClass: function(e) {
            var t, i, n, r, a, s = 0,
                o = this.length,
                l = typeof e === "string" && e;
            if (w.isFunction(e)) {
                return this.each(function(t) {
                    w(this).addClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                t = (e || "").match(_) || [];
                for (; s < o; s++) {
                    i = this[s];
                    n = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(q, " ") : " ");
                    if (n) {
                        a = 0;
                        while (r = t[a++]) {
                            if (n.indexOf(" " + r + " ") < 0) {
                                n += r + " "
                            }
                        }
                        i.className = w.trim(n)
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, i, n, r, a, s = 0,
                o = this.length,
                l = arguments.length === 0 || typeof e === "string" && e;
            if (w.isFunction(e)) {
                return this.each(function(t) {
                    w(this).removeClass(e.call(this, t, this.className))
                })
            }
            if (l) {
                t = (e || "").match(_) || [];
                for (; s < o; s++) {
                    i = this[s];
                    n = i.nodeType === 1 && (i.className ? (" " + i.className + " ").replace(q, " ") : "");
                    if (n) {
                        a = 0;
                        while (r = t[a++]) {
                            while (n.indexOf(" " + r + " ") >= 0) {
                                n = n.replace(" " + r + " ", " ")
                            }
                        }
                        i.className = e ? w.trim(n) : ""
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var i = typeof e;
            if (typeof t === "boolean" && i === "string") {
                return t ? this.addClass(e) : this.removeClass(e)
            }
            if (w.isFunction(e)) {
                return this.each(function(i) {
                    w(this).toggleClass(e.call(this, i, this.className, t), t)
                })
            }
            return this.each(function() {
                if (i === "string") {
                    var t, n = 0,
                        a = w(this),
                        s = e.match(_) || [];
                    while (t = s[n++]) {
                        if (a.hasClass(t)) {
                            a.removeClass(t)
                        } else {
                            a.addClass(t)
                        }
                    }
                } else if (i === r || i === "boolean") {
                    if (this.className) {
                        w._data(this, "__className__", this.className)
                    }
                    this.className = this.className || e === false ? "" : w._data(this, "__className__") || ""
                }
            })
        },
        hasClass: function(e) {
            var t = " " + e + " ",
                i = 0,
                n = this.length;
            for (; i < n; i++) {
                if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(q, " ").indexOf(t) >= 0) {
                    return true
                }
            }
            return false
        },
        val: function(e) {
            var i, n, r, a = this[0];
            if (!arguments.length) {
                if (a) {
                    n = w.valHooks[a.type] || w.valHooks[a.nodeName.toLowerCase()];
                    if (n && "get" in n && (i = n.get(a, "value")) !== t) {
                        return i
                    }
                    i = a.value;
                    return typeof i === "string" ? i.replace(U, "") : i == null ? "" : i
                }
                return
            }
            r = w.isFunction(e);
            return this.each(function(i) {
                var a;
                if (this.nodeType !== 1) {
                    return
                }
                if (r) {
                    a = e.call(this, i, w(this).val())
                } else {
                    a = e
                }
                if (a == null) {
                    a = ""
                } else if (typeof a === "number") {
                    a += ""
                } else if (w.isArray(a)) {
                    a = w.map(a, function(e) {
                        return e == null ? "" : e + ""
                    })
                }
                n = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()];
                if (!n || !("set" in n) || n.set(this, a, "value") === t) {
                    this.value = a
                }
            })
        }
    });
    w.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = w.find.attr(e, "value");
                    return t != null ? t : e.text
                }
            },
            select: {
                get: function(e) {
                    var t, i, n = e.options,
                        r = e.selectedIndex,
                        a = e.type === "select-one" || r < 0,
                        s = a ? null : [],
                        o = a ? r + 1 : n.length,
                        l = r < 0 ? o : a ? r : 0;
                    for (; l < o; l++) {
                        i = n[l];
                        if ((i.selected || l === r) && (w.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !w.nodeName(i.parentNode, "optgroup"))) {
                            t = w(i).val();
                            if (a) {
                                return t
                            }
                            s.push(t)
                        }
                    }
                    return s
                },
                set: function(e, t) {
                    var i, n, r = e.options,
                        a = w.makeArray(t),
                        s = r.length;
                    while (s--) {
                        n = r[s];
                        if (n.selected = w.inArray(w(n).val(), a) >= 0) {
                            i = true
                        }
                    }
                    if (!i) {
                        e.selectedIndex = -1
                    }
                    return a
                }
            }
        },
        attr: function(e, i, n) {
            var a, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2) {
                return
            }
            if (typeof e.getAttribute === r) {
                return w.prop(e, i, n)
            }
            if (o !== 1 || !w.isXMLDoc(e)) {
                i = i.toLowerCase();
                a = w.attrHooks[i] || (w.expr.match.bool.test(i) ? J : W)
            }
            if (n !== t) {
                if (n === null) {
                    w.removeAttr(e, i)
                } else if (a && "set" in a && (s = a.set(e, n, i)) !== t) {
                    return s
                } else {
                    e.setAttribute(i, n + "");
                    return n
                }
            } else if (a && "get" in a && (s = a.get(e, i)) !== null) {
                return s
            } else {
                s = w.find.attr(e, i);
                return s == null ? t : s
            }
        },
        removeAttr: function(e, t) {
            var i, n, r = 0,
                a = t && t.match(_);
            if (a && e.nodeType === 1) {
                while (i = a[r++]) {
                    n = w.propFix[i] || i;
                    if (w.expr.match.bool.test(i)) {
                        if (Z && Q || !G.test(i)) {
                            e[n] = false
                        } else {
                            e[w.camelCase("default-" + i)] = e[n] = false
                        }
                    } else {
                        w.attr(e, i, "")
                    }
                    e.removeAttribute(Q ? i : n)
                }
            }
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!w.support.radioValue && t === "radio" && w.nodeName(e, "input")) {
                        var i = e.value;
                        e.setAttribute("type", t);
                        if (i) {
                            e.value = i
                        }
                        return t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, i, n) {
            var r, a, s, o = e.nodeType;
            if (!e || o === 3 || o === 8 || o === 2) {
                return
            }
            s = o !== 1 || !w.isXMLDoc(e);
            if (s) {
                i = w.propFix[i] || i;
                a = w.propHooks[i]
            }
            if (n !== t) {
                return a && "set" in a && (r = a.set(e, n, i)) !== t ? r : e[i] = n
            } else {
                return a && "get" in a && (r = a.get(e, i)) !== null ? r : e[i]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = w.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Y.test(e.nodeName) || X.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    });
    J = {
        set: function(e, t, i) {
            if (t === false) {
                w.removeAttr(e, i)
            } else if (Z && Q || !G.test(i)) {
                e.setAttribute(!Q && w.propFix[i] || i, i)
            } else {
                e[w.camelCase("default-" + i)] = e[i] = true
            }
            return i
        }
    };
    w.each(w.expr.match.bool.source.match(/\w+/g), function(e, i) {
        var n = w.expr.attrHandle[i] || w.find.attr;
        w.expr.attrHandle[i] = Z && Q || !G.test(i) ? function(e, i, r) {
            var a = w.expr.attrHandle[i],
                s = r ? t : (w.expr.attrHandle[i] = t) != n(e, i, r) ? i.toLowerCase() : null;
            w.expr.attrHandle[i] = a;
            return s
        } : function(e, i, n) {
            return n ? t : e[w.camelCase("default-" + i)] ? i.toLowerCase() : null
        }
    });
    if (!Z || !Q) {
        w.attrHooks.value = {
            set: function(e, t, i) {
                if (w.nodeName(e, "input")) {
                    e.defaultValue = t
                } else {
                    return W && W.set(e, t, i)
                }
            }
        }
    }
    if (!Q) {
        W = {
            set: function(e, i, n) {
                var r = e.getAttributeNode(n);
                if (!r) {
                    e.setAttributeNode(r = e.ownerDocument.createAttribute(n))
                }
                r.value = i += "";
                return n === "value" || i === e.getAttribute(n) ? i : t
            }
        };
        w.expr.attrHandle.id = w.expr.attrHandle.name = w.expr.attrHandle.coords = function(e, i, n) {
            var r;
            return n ? t : (r = e.getAttributeNode(i)) && r.value !== "" ? r.value : null
        };
        w.valHooks.button = {
            get: function(e, i) {
                var n = e.getAttributeNode(i);
                return n && n.specified ? n.value : t
            },
            set: W.set
        };
        w.attrHooks.contenteditable = {
            set: function(e, t, i) {
                W.set(e, t === "" ? false : t, i)
            }
        };
        w.each(["width", "height"], function(e, t) {
            w.attrHooks[t] = {
                set: function(e, i) {
                    if (i === "") {
                        e.setAttribute(t, "auto");
                        return i
                    }
                }
            }
        })
    }
    if (!w.support.hrefNormalized) {
        w.each(["href", "src"], function(e, t) {
            w.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        })
    }
    if (!w.support.style) {
        w.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || t
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        }
    }
    if (!w.support.optSelected) {
        w.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                if (t) {
                    t.selectedIndex;
                    if (t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                }
                return null
            }
        }
    }
    w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        w.propFix[this.toLowerCase()] = this
    });
    if (!w.support.enctype) {
        w.propFix.enctype = "encoding"
    }
    w.each(["radio", "checkbox"], function() {
        w.valHooks[this] = {
            set: function(e, t) {
                if (w.isArray(t)) {
                    return e.checked = w.inArray(w(e).val(), t) >= 0
                }
            }
        };
        if (!w.support.checkOn) {
            w.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    });
    var K = /^(?:input|select|textarea)$/i,
        et = /^key/,
        tt = /^(?:mouse|contextmenu)|click/,
        it = /^(?:focusinfocus|focusoutblur)$/,
        nt = /^([^.]*)(?:\.(.+)|)$/;

    function rt() {
        return true
    }

    function at() {
        return false
    }

    function st() {
        try {
            return s.activeElement
        } catch (e) {}
    }
    w.event = {
        global: {},
        add: function(e, i, n, a, s) {
            var o, l, c, u, f, d, h, p, g, v, m, y = w._data(e);
            if (!y) {
                return
            }
            if (n.handler) {
                u = n;
                n = u.handler;
                s = u.selector
            }
            if (!n.guid) {
                n.guid = w.guid++
            }
            if (!(l = y.events)) {
                l = y.events = {}
            }
            if (!(d = y.handle)) {
                d = y.handle = function(e) {
                    return typeof w !== r && (!e || w.event.triggered !== e.type) ? w.event.dispatch.apply(d.elem, arguments) : t
                };
                d.elem = e
            }
            i = (i || "").match(_) || [""];
            c = i.length;
            while (c--) {
                o = nt.exec(i[c]) || [];
                g = m = o[1];
                v = (o[2] || "").split(".").sort();
                if (!g) {
                    continue
                }
                f = w.event.special[g] || {};
                g = (s ? f.delegateType : f.bindType) || g;
                f = w.event.special[g] || {};
                h = w.extend({
                    type: g,
                    origType: m,
                    data: a,
                    handler: n,
                    guid: n.guid,
                    selector: s,
                    needsContext: s && w.expr.match.needsContext.test(s),
                    namespace: v.join(".")
                }, u);
                if (!(p = l[g])) {
                    p = l[g] = [];
                    p.delegateCount = 0;
                    if (!f.setup || f.setup.call(e, a, v, d) === false) {
                        if (e.addEventListener) {
                            e.addEventListener(g, d, false)
                        } else if (e.attachEvent) {
                            e.attachEvent("on" + g, d)
                        }
                    }
                }
                if (f.add) {
                    f.add.call(e, h);
                    if (!h.handler.guid) {
                        h.handler.guid = n.guid
                    }
                }
                if (s) {
                    p.splice(p.delegateCount++, 0, h)
                } else {
                    p.push(h)
                }
                w.event.global[g] = true
            }
            e = null
        },
        remove: function(e, t, i, n, r) {
            var a, s, o, l, c, u, f, d, h, p, g, v = w.hasData(e) && w._data(e);
            if (!v || !(u = v.events)) {
                return
            }
            t = (t || "").match(_) || [""];
            c = t.length;
            while (c--) {
                o = nt.exec(t[c]) || [];
                h = g = o[1];
                p = (o[2] || "").split(".").sort();
                if (!h) {
                    for (h in u) {
                        w.event.remove(e, h + t[c], i, n, true)
                    }
                    continue
                }
                f = w.event.special[h] || {};
                h = (n ? f.delegateType : f.bindType) || h;
                d = u[h] || [];
                o = o[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                l = a = d.length;
                while (a--) {
                    s = d[a];
                    if ((r || g === s.origType) && (!i || i.guid === s.guid) && (!o || o.test(s.namespace)) && (!n || n === s.selector || n === "**" && s.selector)) {
                        d.splice(a, 1);
                        if (s.selector) {
                            d.delegateCount--
                        }
                        if (f.remove) {
                            f.remove.call(e, s)
                        }
                    }
                }
                if (l && !d.length) {
                    if (!f.teardown || f.teardown.call(e, p, v.handle) === false) {
                        w.removeEvent(e, h, v.handle)
                    }
                    delete u[h]
                }
            }
            if (w.isEmptyObject(u)) {
                delete v.handle;
                w._removeData(e, "events")
            }
        },
        trigger: function(i, n, r, a) {
            var o, l, c, u, f, d, h, p = [r || s],
                g = y.call(i, "type") ? i.type : i,
                v = y.call(i, "namespace") ? i.namespace.split(".") : [];
            c = d = r = r || s;
            if (r.nodeType === 3 || r.nodeType === 8) {
                return
            }
            if (it.test(g + w.event.triggered)) {
                return
            }
            if (g.indexOf(".") >= 0) {
                v = g.split(".");
                g = v.shift();
                v.sort()
            }
            l = g.indexOf(":") < 0 && "on" + g;
            i = i[w.expando] ? i : new w.Event(g, typeof i === "object" && i);
            i.isTrigger = a ? 2 : 3;
            i.namespace = v.join(".");
            i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            i.result = t;
            if (!i.target) {
                i.target = r
            }
            n = n == null ? [i] : w.makeArray(n, [i]);
            f = w.event.special[g] || {};
            if (!a && f.trigger && f.trigger.apply(r, n) === false) {
                return
            }
            if (!a && !f.noBubble && !w.isWindow(r)) {
                u = f.delegateType || g;
                if (!it.test(u + g)) {
                    c = c.parentNode
                }
                for (; c; c = c.parentNode) {
                    p.push(c);
                    d = c
                }
                if (d === (r.ownerDocument || s)) {
                    p.push(d.defaultView || d.parentWindow || e)
                }
            }
            h = 0;
            while ((c = p[h++]) && !i.isPropagationStopped()) {
                i.type = h > 1 ? u : f.bindType || g;
                o = (w._data(c, "events") || {})[i.type] && w._data(c, "handle");
                if (o) {
                    o.apply(c, n)
                }
                o = l && c[l];
                if (o && w.acceptData(c) && o.apply && o.apply(c, n) === false) {
                    i.preventDefault()
                }
            }
            i.type = g;
            if (!a && !i.isDefaultPrevented()) {
                if ((!f._default || f._default.apply(p.pop(), n) === false) && w.acceptData(r)) {
                    if (l && r[g] && !w.isWindow(r)) {
                        d = r[l];
                        if (d) {
                            r[l] = null
                        }
                        w.event.triggered = g;
                        try {
                            r[g]()
                        } catch (m) {}
                        w.event.triggered = t;
                        if (d) {
                            r[l] = d
                        }
                    }
                }
            }
            return i.result
        },
        dispatch: function(e) {
            e = w.event.fix(e);
            var i, n, r, a, s, o = [],
                l = g.call(arguments),
                c = (w._data(this, "events") || {})[e.type] || [],
                u = w.event.special[e.type] || {};
            l[0] = e;
            e.delegateTarget = this;
            if (u.preDispatch && u.preDispatch.call(this, e) === false) {
                return
            }
            o = w.event.handlers.call(this, e, c);
            i = 0;
            while ((a = o[i++]) && !e.isPropagationStopped()) {
                e.currentTarget = a.elem;
                s = 0;
                while ((r = a.handlers[s++]) && !e.isImmediatePropagationStopped()) {
                    if (!e.namespace_re || e.namespace_re.test(r.namespace)) {
                        e.handleObj = r;
                        e.data = r.data;
                        n = ((w.event.special[r.origType] || {}).handle || r.handler).apply(a.elem, l);
                        if (n !== t) {
                            if ((e.result = n) === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (u.postDispatch) {
                u.postDispatch.call(this, e)
            }
            return e.result
        },
        handlers: function(e, i) {
            var n, r, a, s, o = [],
                l = i.delegateCount,
                c = e.target;
            if (l && c.nodeType && (!e.button || e.type !== "click")) {
                for (; c != this; c = c.parentNode || this) {
                    if (c.nodeType === 1 && (c.disabled !== true || e.type !== "click")) {
                        a = [];
                        for (s = 0; s < l; s++) {
                            r = i[s];
                            n = r.selector + " ";
                            if (a[n] === t) {
                                a[n] = r.needsContext ? w(n, this).index(c) >= 0 : w.find(n, this, null, [c]).length
                            }
                            if (a[n]) {
                                a.push(r)
                            }
                        }
                        if (a.length) {
                            o.push({
                                elem: c,
                                handlers: a
                            })
                        }
                    }
                }
            }
            if (l < i.length) {
                o.push({
                    elem: this,
                    handlers: i.slice(l)
                })
            }
            return o
        },
        fix: function(e) {
            if (e[w.expando]) {
                return e
            }
            var t, i, n, r = e.type,
                a = e,
                o = this.fixHooks[r];
            if (!o) {
                this.fixHooks[r] = o = tt.test(r) ? this.mouseHooks : et.test(r) ? this.keyHooks : {}
            }
            n = o.props ? this.props.concat(o.props) : this.props;
            e = new w.Event(a);
            t = n.length;
            while (t--) {
                i = n[t];
                e[i] = a[i]
            }
            if (!e.target) {
                e.target = a.srcElement || s
            }
            if (e.target.nodeType === 3) {
                e.target = e.target.parentNode
            }
            e.metaKey = !!e.metaKey;
            return o.filter ? o.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                if (e.which == null) {
                    e.which = t.charCode != null ? t.charCode : t.keyCode
                }
                return e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, i) {
                var n, r, a, o = i.button,
                    l = i.fromElement;
                if (e.pageX == null && i.clientX != null) {
                    r = e.target.ownerDocument || s;
                    a = r.documentElement;
                    n = r.body;
                    e.pageX = i.clientX + (a && a.scrollLeft || n && n.scrollLeft || 0) - (a && a.clientLeft || n && n.clientLeft || 0);
                    e.pageY = i.clientY + (a && a.scrollTop || n && n.scrollTop || 0) - (a && a.clientTop || n && n.clientTop || 0)
                }
                if (!e.relatedTarget && l) {
                    e.relatedTarget = l === e.target ? i.toElement : l
                }
                if (!e.which && o !== t) {
                    e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0
                }
                return e
            }
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== st() && this.focus) {
                        try {
                            this.focus();
                            return false
                        } catch (e) {}
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === st() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (w.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                        this.click();
                        return false
                    }
                },
                _default: function(e) {
                    return w.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== t) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        },
        simulate: function(e, t, i, n) {
            var r = w.extend(new w.Event, i, {
                type: e,
                isSimulated: true,
                originalEvent: {}
            });
            if (n) {
                w.event.trigger(r, null, t)
            } else {
                w.event.dispatch.call(t, r)
            }
            if (r.isDefaultPrevented()) {
                i.preventDefault()
            }
        }
    };
    w.removeEvent = s.removeEventListener ? function(e, t, i) {
        if (e.removeEventListener) {
            e.removeEventListener(t, i, false)
        }
    } : function(e, t, i) {
        var n = "on" + t;
        if (e.detachEvent) {
            if (typeof e[n] === r) {
                e[n] = null
            }
            e.detachEvent(n, i)
        }
    };
    w.Event = function(e, t) {
        if (!(this instanceof w.Event)) {
            return new w.Event(e, t)
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.returnValue === false || e.getPreventDefault && e.getPreventDefault() ? rt : at
        } else {
            this.type = e
        }
        if (t) {
            w.extend(this, t)
        }
        this.timeStamp = e && e.timeStamp || w.now();
        this[w.expando] = true
    };
    w.Event.prototype = {
        isDefaultPrevented: at,
        isPropagationStopped: at,
        isImmediatePropagationStopped: at,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = rt;
            if (!e) {
                return
            }
            if (e.preventDefault) {
                e.preventDefault()
            } else {
                e.returnValue = false
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = rt;
            if (!e) {
                return
            }
            if (e.stopPropagation) {
                e.stopPropagation()
            }
            e.cancelBubble = true
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = rt;
            this.stopPropagation()
        }
    };
    w.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(e, t) {
        w.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var i, n = this,
                    r = e.relatedTarget,
                    a = e.handleObj;
                if (!r || r !== n && !w.contains(n, r)) {
                    e.type = a.origType;
                    i = a.handler.apply(this, arguments);
                    e.type = t
                }
                return i
            }
        }
    });
    if (!w.support.submitBubbles) {
        w.event.special.submit = {
            setup: function() {
                if (w.nodeName(this, "form")) {
                    return false
                }
                w.event.add(this, "click._submit keypress._submit", function(e) {
                    var i = e.target,
                        n = w.nodeName(i, "input") || w.nodeName(i, "button") ? i.form : t;
                    if (n && !w._data(n, "submitBubbles")) {
                        w.event.add(n, "submit._submit", function(e) {
                            e._submit_bubble = true
                        });
                        w._data(n, "submitBubbles", true)
                    }
                })
            },
            postDispatch: function(e) {
                if (e._submit_bubble) {
                    delete e._submit_bubble;
                    if (this.parentNode && !e.isTrigger) {
                        w.event.simulate("submit", this.parentNode, e, true)
                    }
                }
            },
            teardown: function() {
                if (w.nodeName(this, "form")) {
                    return false
                }
                w.event.remove(this, "._submit")
            }
        }
    }
    if (!w.support.changeBubbles) {
        w.event.special.change = {
            setup: function() {
                if (K.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type === "radio") {
                        w.event.add(this, "propertychange._change", function(e) {
                            if (e.originalEvent.propertyName === "checked") {
                                this._just_changed = true
                            }
                        });
                        w.event.add(this, "click._change", function(e) {
                            if (this._just_changed && !e.isTrigger) {
                                this._just_changed = false
                            }
                            w.event.simulate("change", this, e, true)
                        })
                    }
                    return false
                }
                w.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    if (K.test(t.nodeName) && !w._data(t, "changeBubbles")) {
                        w.event.add(t, "change._change", function(e) {
                            if (this.parentNode && !e.isSimulated && !e.isTrigger) {
                                w.event.simulate("change", this.parentNode, e, true)
                            }
                        });
                        w._data(t, "changeBubbles", true)
                    }
                })
            },
            handle: function(e) {
                var t = e.target;
                if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") {
                    return e.handleObj.handler.apply(this, arguments)
                }
            },
            teardown: function() {
                w.event.remove(this, "._change");
                return !K.test(this.nodeName)
            }
        }
    }
    if (!w.support.focusinBubbles) {
        w.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var i = 0,
                n = function(e) {
                    w.event.simulate(t, e.target, w.event.fix(e), true)
                };
            w.event.special[t] = {
                setup: function() {
                    if (i++ === 0) {
                        s.addEventListener(e, n, true)
                    }
                },
                teardown: function() {
                    if (--i === 0) {
                        s.removeEventListener(e, n, true)
                    }
                }
            }
        })
    }
    w.fn.extend({
        on: function(e, i, n, r, a) {
            var s, o;
            if (typeof e === "object") {
                if (typeof i !== "string") {
                    n = n || i;
                    i = t
                }
                for (s in e) {
                    this.on(s, i, n, e[s], a)
                }
                return this
            }
            if (n == null && r == null) {
                r = i;
                n = i = t
            } else if (r == null) {
                if (typeof i === "string") {
                    r = n;
                    n = t
                } else {
                    r = n;
                    n = i;
                    i = t
                }
            }
            if (r === false) {
                r = at
            } else if (!r) {
                return this
            }
            if (a === 1) {
                o = r;
                r = function(e) {
                    w().off(e);
                    return o.apply(this, arguments)
                };
                r.guid = o.guid || (o.guid = w.guid++)
            }
            return this.each(function() {
                w.event.add(this, e, r, n, i)
            })
        },
        one: function(e, t, i, n) {
            return this.on(e, t, i, n, 1)
        },
        off: function(e, i, n) {
            var r, a;
            if (e && e.preventDefault && e.handleObj) {
                r = e.handleObj;
                w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler);
                return this
            }
            if (typeof e === "object") {
                for (a in e) {
                    this.off(a, i, e[a])
                }
                return this
            }
            if (i === false || typeof i === "function") {
                n = i;
                i = t
            }
            if (n === false) {
                n = at
            }
            return this.each(function() {
                w.event.remove(this, e, n, i)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                w.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var i = this[0];
            if (i) {
                return w.event.trigger(e, t, i, true)
            }
        }
    });
    var ot = /^.[^:#\[\.,]*$/,
        lt = /^(?:parents|prev(?:Until|All))/,
        ct = w.expr.match.needsContext,
        ut = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    w.fn.extend({
        find: function(e) {
            var t, i = [],
                n = this,
                r = n.length;
            if (typeof e !== "string") {
                return this.pushStack(w(e).filter(function() {
                    for (t = 0; t < r; t++) {
                        if (w.contains(n[t], this)) {
                            return true
                        }
                    }
                }))
            }
            for (t = 0; t < r; t++) {
                w.find(e, n[t], i)
            }
            i = this.pushStack(r > 1 ? w.unique(i) : i);
            i.selector = this.selector ? this.selector + " " + e : e;
            return i
        },
        has: function(e) {
            var t, i = w(e, this),
                n = i.length;
            return this.filter(function() {
                for (t = 0; t < n; t++) {
                    if (w.contains(this, i[t])) {
                        return true
                    }
                }
            })
        },
        not: function(e) {
            return this.pushStack(dt(this, e || [], true))
        },
        filter: function(e) {
            return this.pushStack(dt(this, e || [], false))
        },
        is: function(e) {
            return !!dt(this, typeof e === "string" && ct.test(e) ? w(e) : e || [], false).length
        },
        closest: function(e, t) {
            var i, n = 0,
                r = this.length,
                a = [],
                s = ct.test(e) || typeof e !== "string" ? w(e, t || this.context) : 0;
            for (; n < r; n++) {
                for (i = this[n]; i && i !== t; i = i.parentNode) {
                    if (i.nodeType < 11 && (s ? s.index(i) > -1 : i.nodeType === 1 && w.find.matchesSelector(i, e))) {
                        i = a.push(i);
                        break
                    }
                }
            }
            return this.pushStack(a.length > 1 ? w.unique(a) : a)
        },
        index: function(e) {
            if (!e) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }
            if (typeof e === "string") {
                return w.inArray(this[0], w(e))
            }
            return w.inArray(e.jquery ? e[0] : e, this)
        },
        add: function(e, t) {
            var i = typeof e === "string" ? w(e, t) : w.makeArray(e && e.nodeType ? [e] : e),
                n = w.merge(this.get(), i);
            return this.pushStack(w.unique(n))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function ft(e, t) {
        do {
            e = e[t]
        } while (e && e.nodeType !== 1);
        return e
    }
    w.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return w.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, i) {
            return w.dir(e, "parentNode", i)
        },
        next: function(e) {
            return ft(e, "nextSibling")
        },
        prev: function(e) {
            return ft(e, "previousSibling")
        },
        nextAll: function(e) {
            return w.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return w.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, i) {
            return w.dir(e, "nextSibling", i)
        },
        prevUntil: function(e, t, i) {
            return w.dir(e, "previousSibling", i)
        },
        siblings: function(e) {
            return w.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w.sibling(e.firstChild)
        },
        contents: function(e) {
            return w.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : w.merge([], e.childNodes)
        }
    }, function(e, t) {
        w.fn[e] = function(i, n) {
            var r = w.map(this, t, i);
            if (e.slice(-5) !== "Until") {
                n = i
            }
            if (n && typeof n === "string") {
                r = w.filter(n, r)
            }
            if (this.length > 1) {
                if (!ut[e]) {
                    r = w.unique(r)
                }
                if (lt.test(e)) {
                    r = r.reverse()
                }
            }
            return this.pushStack(r)
        }
    });
    w.extend({
        filter: function(e, t, i) {
            var n = t[0];
            if (i) {
                e = ":not(" + e + ")"
            }
            return t.length === 1 && n.nodeType === 1 ? w.find.matchesSelector(n, e) ? [n] : [] : w.find.matches(e, w.grep(t, function(e) {
                return e.nodeType === 1
            }))
        },
        dir: function(e, i, n) {
            var r = [],
                a = e[i];
            while (a && a.nodeType !== 9 && (n === t || a.nodeType !== 1 || !w(a).is(n))) {
                if (a.nodeType === 1) {
                    r.push(a)
                }
                a = a[i]
            }
            return r
        },
        sibling: function(e, t) {
            var i = [];
            for (; e; e = e.nextSibling) {
                if (e.nodeType === 1 && e !== t) {
                    i.push(e)
                }
            }
            return i
        }
    });

    function dt(e, t, i) {
        if (w.isFunction(t)) {
            return w.grep(e, function(e, n) {
                return !!t.call(e, n, e) !== i
            })
        }
        if (t.nodeType) {
            return w.grep(e, function(e) {
                return e === t !== i
            })
        }
        if (typeof t === "string") {
            if (ot.test(t)) {
                return w.filter(t, e, i)
            }
            t = w.filter(t, e)
        }
        return w.grep(e, function(e) {
            return w.inArray(e, t) >= 0 !== i
        })
    }

    function ht(e) {
        var t = pt.split("|"),
            i = e.createDocumentFragment();
        if (i.createElement) {
            while (t.length) {
                i.createElement(t.pop())
            }
        }
        return i
    }
    var pt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" + "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        gt = / jQuery\d+="(?:null|\d+)"/g,
        vt = new RegExp("<(?:" + pt + ")[\\s/>]", "i"),
        mt = /^\s+/,
        yt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bt = /<([\w:]+)/,
        wt = /<tbody/i,
        xt = /<|&#?\w+;/,
        _t = /<(?:script|style|link)/i,
        Ct = /^(?:checkbox|radio)$/i,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Tt = /^$|\/(?:java|ecma)script/i,
        Mt = /^true\/(.*)/,
        kt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Et = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: w.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        jt = ht(s),
        At = jt.appendChild(s.createElement("div"));
    Et.optgroup = Et.option;
    Et.tbody = Et.tfoot = Et.colgroup = Et.caption = Et.thead;
    Et.th = Et.td;
    w.fn.extend({
        text: function(e) {
            return w.access(this, function(e) {
                return e === t ? w.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Nt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = Nt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        },
        after: function() {
            return this.domManip(arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        },
        remove: function(e, t) {
            var i, n = e ? w.filter(e, this) : this,
                r = 0;
            for (;
                (i = n[r]) != null; r++) {
                if (!t && i.nodeType === 1) {
                    w.cleanData(Dt(i))
                }
                if (i.parentNode) {
                    if (t && w.contains(i.ownerDocument, i)) {
                        Ot(Dt(i, "script"))
                    }
                    i.parentNode.removeChild(i)
                }
            }
            return this
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                if (e.nodeType === 1) {
                    w.cleanData(Dt(e, false))
                }
                while (e.firstChild) {
                    e.removeChild(e.firstChild)
                }
                if (e.options && w.nodeName(e, "select")) {
                    e.options.length = 0
                }
            }
            return this
        },
        clone: function(e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function() {
                return w.clone(this, e, t)
            })
        },
        html: function(e) {
            return w.access(this, function(e) {
                var i = this[0] || {},
                    n = 0,
                    r = this.length;
                if (e === t) {
                    return i.nodeType === 1 ? i.innerHTML.replace(gt, "") : t
                }
                if (typeof e === "string" && !_t.test(e) && (w.support.htmlSerialize || !vt.test(e)) && (w.support.leadingWhitespace || !mt.test(e)) && !Et[(bt.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = e.replace(yt, "<$1></$2>");
                    try {
                        for (; n < r; n++) {
                            i = this[n] || {};
                            if (i.nodeType === 1) {
                                w.cleanData(Dt(i, false));
                                i.innerHTML = e
                            }
                        }
                        i = 0
                    } catch (a) {}
                }
                if (i) {
                    this.empty().append(e)
                }
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = w.map(this, function(e) {
                    return [e.nextSibling, e.parentNode]
                }),
                t = 0;
            this.domManip(arguments, function(i) {
                var n = e[t++],
                    r = e[t++];
                if (r) {
                    if (n && n.parentNode !== r) {
                        n = this.nextSibling
                    }
                    w(this).remove();
                    r.insertBefore(i, n)
                }
            }, true);
            return t ? this : this.remove()
        },
        detach: function(e) {
            return this.remove(e, true)
        },
        domManip: function(e, t, i) {
            e = h.apply([], e);
            var n, r, a, s, o, l, c = 0,
                u = this.length,
                f = this,
                d = u - 1,
                p = e[0],
                g = w.isFunction(p);
            if (g || !(u <= 1 || typeof p !== "string" || w.support.checkClone || !St.test(p))) {
                return this.each(function(n) {
                    var r = f.eq(n);
                    if (g) {
                        e[0] = p.call(this, n, r.html())
                    }
                    r.domManip(e, t, i)
                })
            }
            if (u) {
                l = w.buildFragment(e, this[0].ownerDocument, false, !i && this);
                n = l.firstChild;
                if (l.childNodes.length === 1) {
                    l = n
                }
                if (n) {
                    s = w.map(Dt(l, "script"), It);
                    a = s.length;
                    for (; c < u; c++) {
                        r = l;
                        if (c !== d) {
                            r = w.clone(r, true, true);
                            if (a) {
                                w.merge(s, Dt(r, "script"))
                            }
                        }
                        t.call(this[c], r, c)
                    }
                    if (a) {
                        o = s[s.length - 1].ownerDocument;
                        w.map(s, Pt);
                        for (c = 0; c < a; c++) {
                            r = s[c];
                            if (Tt.test(r.type || "") && !w._data(r, "globalEval") && w.contains(o, r)) {
                                if (r.src) {
                                    w._evalUrl(r.src)
                                } else {
                                    w.globalEval((r.text || r.textContent || r.innerHTML || "").replace(kt, ""))
                                }
                            }
                        }
                    }
                    l = n = null
                }
            }
            return this
        }
    });

    function Nt(e, t) {
        return w.nodeName(e, "table") && w.nodeName(t.nodeType === 1 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function It(e) {
        e.type = (w.find.attr(e, "type") !== null) + "/" + e.type;
        return e
    }

    function Pt(e) {
        var t = Mt.exec(e.type);
        if (t) {
            e.type = t[1]
        } else {
            e.removeAttribute("type")
        }
        return e
    }

    function Ot(e, t) {
        var i, n = 0;
        for (;
            (i = e[n]) != null; n++) {
            w._data(i, "globalEval", !t || w._data(t[n], "globalEval"))
        }
    }

    function Ht(e, t) {
        if (t.nodeType !== 1 || !w.hasData(e)) {
            return
        }
        var i, n, r, a = w._data(e),
            s = w._data(t, a),
            o = a.events;
        if (o) {
            delete s.handle;
            s.events = {};
            for (i in o) {
                for (n = 0, r = o[i].length; n < r; n++) {
                    w.event.add(t, i, o[i][n])
                }
            }
        }
        if (s.data) {
            s.data = w.extend({}, s.data)
        }
    }

    function Lt(e, t) {
        var i, n, r;
        if (t.nodeType !== 1) {
            return
        }
        i = t.nodeName.toLowerCase();
        if (!w.support.noCloneEvent && t[w.expando]) {
            r = w._data(t);
            for (n in r.events) {
                w.removeEvent(t, n, r.handle)
            }
            t.removeAttribute(w.expando)
        }
        if (i === "script" && t.text !== e.text) {
            It(t).text = e.text;
            Pt(t)
        } else if (i === "object") {
            if (t.parentNode) {
                t.outerHTML = e.outerHTML
            }
            if (w.support.html5Clone && (e.innerHTML && !w.trim(t.innerHTML))) {
                t.innerHTML = e.innerHTML
            }
        } else if (i === "input" && Ct.test(e.type)) {
            t.defaultChecked = t.checked = e.checked;
            if (t.value !== e.value) {
                t.value = e.value
            }
        } else if (i === "option") {
            t.defaultSelected = t.selected = e.defaultSelected
        } else if (i === "input" || i === "textarea") {
            t.defaultValue = e.defaultValue
        }
    }
    w.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        w.fn[e] = function(e) {
            var i, n = 0,
                r = [],
                a = w(e),
                s = a.length - 1;
            for (; n <= s; n++) {
                i = n === s ? this : this.clone(true);
                w(a[n])[t](i);
                p.apply(r, i.get())
            }
            return this.pushStack(r)
        }
    });

    function Dt(e, i) {
        var n, a, s = 0,
            o = typeof e.getElementsByTagName !== r ? e.getElementsByTagName(i || "*") : typeof e.querySelectorAll !== r ? e.querySelectorAll(i || "*") : t;
        if (!o) {
            for (o = [], n = e.childNodes || e;
                (a = n[s]) != null; s++) {
                if (!i || w.nodeName(a, i)) {
                    o.push(a)
                } else {
                    w.merge(o, Dt(a, i))
                }
            }
        }
        return i === t || i && w.nodeName(e, i) ? w.merge([e], o) : o
    }

    function $t(e) {
        if (Ct.test(e.type)) {
            e.defaultChecked = e.checked
        }
    }
    w.extend({
        clone: function(e, t, i) {
            var n, r, a, s, o, l = w.contains(e.ownerDocument, e);
            if (w.support.html5Clone || w.isXMLDoc(e) || !vt.test("<" + e.nodeName + ">")) {
                a = e.cloneNode(true)
            } else {
                At.innerHTML = e.outerHTML;
                At.removeChild(a = At.firstChild)
            }
            if ((!w.support.noCloneEvent || !w.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !w.isXMLDoc(e)) {
                n = Dt(a);
                o = Dt(e);
                for (s = 0;
                    (r = o[s]) != null; ++s) {
                    if (n[s]) {
                        Lt(r, n[s])
                    }
                }
            }
            if (t) {
                if (i) {
                    o = o || Dt(e);
                    n = n || Dt(a);
                    for (s = 0;
                        (r = o[s]) != null; s++) {
                        Ht(r, n[s])
                    }
                } else {
                    Ht(e, a)
                }
            }
            n = Dt(a, "script");
            if (n.length > 0) {
                Ot(n, !l && Dt(e, "script"))
            }
            n = o = r = null;
            return a
        },
        buildFragment: function(e, t, i, n) {
            var r, a, s, o, l, c, u, f = e.length,
                d = ht(t),
                h = [],
                p = 0;
            for (; p < f; p++) {
                a = e[p];
                if (a || a === 0) {
                    if (w.type(a) === "object") {
                        w.merge(h, a.nodeType ? [a] : a)
                    } else if (!xt.test(a)) {
                        h.push(t.createTextNode(a))
                    } else {
                        o = o || d.appendChild(t.createElement("div"));
                        l = (bt.exec(a) || ["", ""])[1].toLowerCase();
                        u = Et[l] || Et._default;
                        o.innerHTML = u[1] + a.replace(yt, "<$1></$2>") + u[2];
                        r = u[0];
                        while (r--) {
                            o = o.lastChild
                        }
                        if (!w.support.leadingWhitespace && mt.test(a)) {
                            h.push(t.createTextNode(mt.exec(a)[0]))
                        }
                        if (!w.support.tbody) {
                            a = l === "table" && !wt.test(a) ? o.firstChild : u[1] === "<table>" && !wt.test(a) ? o : 0;
                            r = a && a.childNodes.length;
                            while (r--) {
                                if (w.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length) {
                                    a.removeChild(c)
                                }
                            }
                        }
                        w.merge(h, o.childNodes);
                        o.textContent = "";
                        while (o.firstChild) {
                            o.removeChild(o.firstChild)
                        }
                        o = d.lastChild
                    }
                }
            }
            if (o) {
                d.removeChild(o)
            }
            if (!w.support.appendChecked) {
                w.grep(Dt(h, "input"), $t)
            }
            p = 0;
            while (a = h[p++]) {
                if (n && w.inArray(a, n) !== -1) {
                    continue
                }
                s = w.contains(a.ownerDocument, a);
                o = Dt(d.appendChild(a), "script");
                if (s) {
                    Ot(o)
                }
                if (i) {
                    r = 0;
                    while (a = o[r++]) {
                        if (Tt.test(a.type || "")) {
                            i.push(a)
                        }
                    }
                }
            }
            o = null;
            return d
        },
        cleanData: function(e, t) {
            var i, n, a, s, o = 0,
                l = w.expando,
                c = w.cache,
                u = w.support.deleteExpando,
                d = w.event.special;
            for (;
                (i = e[o]) != null; o++) {
                if (t || w.acceptData(i)) {
                    a = i[l];
                    s = a && c[a];
                    if (s) {
                        if (s.events) {
                            for (n in s.events) {
                                if (d[n]) {
                                    w.event.remove(i, n)
                                } else {
                                    w.removeEvent(i, n, s.handle)
                                }
                            }
                        }
                        if (c[a]) {
                            delete c[a];
                            if (u) {
                                delete i[l]
                            } else if (typeof i.removeAttribute !== r) {
                                i.removeAttribute(l)
                            } else {
                                i[l] = null
                            }
                            f.push(a)
                        }
                    }
                }
            }
        },
        _evalUrl: function(e) {
            return w.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: false,
                global: false,
                "throws": true
            })
        }
    });
    w.fn.extend({
        wrapAll: function(e) {
            if (w.isFunction(e)) {
                return this.each(function(t) {
                    w(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                var t = w(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    t.insertBefore(this[0])
                }
                t.map(function() {
                    var e = this;
                    while (e.firstChild && e.firstChild.nodeType === 1) {
                        e = e.firstChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (w.isFunction(e)) {
                return this.each(function(t) {
                    w(this).wrapInner(e.call(this, t))
                })
            }
            return this.each(function() {
                var t = w(this),
                    i = t.contents();
                if (i.length) {
                    i.wrapAll(e)
                } else {
                    t.append(e)
                }
            })
        },
        wrap: function(e) {
            var t = w.isFunction(e);
            return this.each(function(i) {
                w(this).wrapAll(t ? e.call(this, i) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!w.nodeName(this, "body")) {
                    w(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    var Rt, Ft, Bt, Vt = /alpha\([^)]*\)/i,
        zt = /opacity\s*=\s*([^)]*)/,
        Wt = /^(top|right|bottom|left)$/,
        Jt = /^(none|table(?!-c[ea]).+)/,
        qt = /^margin/,
        Ut = new RegExp("^(" + x + ")(.*)$", "i"),
        Yt = new RegExp("^(" + x + ")(?!px)[a-z%]+$", "i"),
        Xt = new RegExp("^([+-])=(" + x + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Zt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Kt = ["Top", "Right", "Bottom", "Left"],
        ei = ["Webkit", "O", "Moz", "ms"];

    function ti(e, t) {
        if (t in e) {
            return t
        }
        var i = t.charAt(0).toUpperCase() + t.slice(1),
            n = t,
            r = ei.length;
        while (r--) {
            t = ei[r] + i;
            if (t in e) {
                return t
            }
        }
        return n
    }

    function ii(e, t) {
        e = t || e;
        return w.css(e, "display") === "none" || !w.contains(e.ownerDocument, e)
    }

    function ni(e, t) {
        var i, n, r, a = [],
            s = 0,
            o = e.length;
        for (; s < o; s++) {
            n = e[s];
            if (!n.style) {
                continue
            }
            a[s] = w._data(n, "olddisplay");
            i = n.style.display;
            if (t) {
                if (!a[s] && i === "none") {
                    n.style.display = ""
                }
                if (n.style.display === "" && ii(n)) {
                    a[s] = w._data(n, "olddisplay", oi(n.nodeName))
                }
            } else {
                if (!a[s]) {
                    r = ii(n);
                    if (i && i !== "none" || !r) {
                        w._data(n, "olddisplay", r ? i : w.css(n, "display"))
                    }
                }
            }
        }
        for (s = 0; s < o; s++) {
            n = e[s];
            if (!n.style) {
                continue
            }
            if (!t || n.style.display === "none" || n.style.display === "") {
                n.style.display = t ? a[s] || "" : "none"
            }
        }
        return e
    }
    w.fn.extend({
        css: function(e, i) {
            return w.access(this, function(e, i, n) {
                var r, a, s = {},
                    o = 0;
                if (w.isArray(i)) {
                    a = Ft(e);
                    r = i.length;
                    for (; o < r; o++) {
                        s[i[o]] = w.css(e, i[o], false, a)
                    }
                    return s
                }
                return n !== t ? w.style(e, i, n) : w.css(e, i)
            }, e, i, arguments.length > 1)
        },
        show: function() {
            return ni(this, true)
        },
        hide: function() {
            return ni(this)
        },
        toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide()
            }
            return this.each(function() {
                if (ii(this)) {
                    w(this).show()
                } else {
                    w(this).hide()
                }
            })
        }
    });
    w.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var i = Bt(e, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: true,
            fillOpacity: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": w.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, i, n, r) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                return
            }
            var a, s, o, l = w.camelCase(i),
                c = e.style;
            i = w.cssProps[l] || (w.cssProps[l] = ti(c, l));
            o = w.cssHooks[i] || w.cssHooks[l];
            if (n !== t) {
                s = typeof n;
                if (s === "string" && (a = Xt.exec(n))) {
                    n = (a[1] + 1) * a[2] + parseFloat(w.css(e, i));
                    s = "number"
                }
                if (n == null || s === "number" && isNaN(n)) {
                    return
                }
                if (s === "number" && !w.cssNumber[l]) {
                    n += "px"
                }
                if (!w.support.clearCloneStyle && n === "" && i.indexOf("background") === 0) {
                    c[i] = "inherit"
                }
                if (!o || !("set" in o) || (n = o.set(e, n, r)) !== t) {
                    try {
                        c[i] = n
                    } catch (u) {}
                }
            } else {
                if (o && "get" in o && (a = o.get(e, false, r)) !== t) {
                    return a
                }
                return c[i]
            }
        },
        css: function(e, i, n, r) {
            var a, s, o, l = w.camelCase(i);
            i = w.cssProps[l] || (w.cssProps[l] = ti(e.style, l));
            o = w.cssHooks[i] || w.cssHooks[l];
            if (o && "get" in o) {
                s = o.get(e, true, n)
            }
            if (s === t) {
                s = Bt(e, i, r)
            }
            if (s === "normal" && i in Zt) {
                s = Zt[i]
            }
            if (n === "" || n) {
                a = parseFloat(s);
                return n === true || w.isNumeric(a) ? a || 0 : s
            }
            return s
        }
    });
    if (e.getComputedStyle) {
        Ft = function(t) {
            return e.getComputedStyle(t, null)
        };
        Bt = function(e, i, n) {
            var r, a, s, o = n || Ft(e),
                l = o ? o.getPropertyValue(i) || o[i] : t,
                c = e.style;
            if (o) {
                if (l === "" && !w.contains(e.ownerDocument, e)) {
                    l = w.style(e, i)
                }
                if (Yt.test(l) && qt.test(i)) {
                    r = c.width;
                    a = c.minWidth;
                    s = c.maxWidth;
                    c.minWidth = c.maxWidth = c.width = l;
                    l = o.width;
                    c.width = r;
                    c.minWidth = a;
                    c.maxWidth = s
                }
            }
            return l
        }
    } else if (s.documentElement.currentStyle) {
        Ft = function(e) {
            return e.currentStyle
        };
        Bt = function(e, i, n) {
            var r, a, s, o = n || Ft(e),
                l = o ? o[i] : t,
                c = e.style;
            if (l == null && c && c[i]) {
                l = c[i]
            }
            if (Yt.test(l) && !Wt.test(i)) {
                r = c.left;
                a = e.runtimeStyle;
                s = a && a.left;
                if (s) {
                    a.left = e.currentStyle.left
                }
                c.left = i === "fontSize" ? "1em" : l;
                l = c.pixelLeft + "px";
                c.left = r;
                if (s) {
                    a.left = s
                }
            }
            return l === "" ? "auto" : l
        }
    }

    function ri(e, t, i) {
        var n = Ut.exec(t);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
    }

    function ai(e, t, i, n, r) {
        var a = i === (n ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; a < 4; a += 2) {
            if (i === "margin") {
                s += w.css(e, i + Kt[a], true, r)
            }
            if (n) {
                if (i === "content") {
                    s -= w.css(e, "padding" + Kt[a], true, r)
                }
                if (i !== "margin") {
                    s -= w.css(e, "border" + Kt[a] + "Width", true, r)
                }
            } else {
                s += w.css(e, "padding" + Kt[a], true, r);
                if (i !== "padding") {
                    s += w.css(e, "border" + Kt[a] + "Width", true, r)
                }
            }
        }
        return s
    }

    function si(e, t, i) {
        var n = true,
            r = t === "width" ? e.offsetWidth : e.offsetHeight,
            a = Ft(e),
            s = w.support.boxSizing && w.css(e, "boxSizing", false, a) === "border-box";
        if (r <= 0 || r == null) {
            r = Bt(e, t, a);
            if (r < 0 || r == null) {
                r = e.style[t]
            }
            if (Yt.test(r)) {
                return r
            }
            n = s && (w.support.boxSizingReliable || r === e.style[t]);
            r = parseFloat(r) || 0
        }
        return r + ai(e, t, i || (s ? "border" : "content"), n, a) + "px"
    }

    function oi(e) {
        var t = s,
            i = Gt[e];
        if (!i) {
            i = li(e, t);
            if (i === "none" || !i) {
                Rt = (Rt || w("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement);
                t = (Rt[0].contentWindow || Rt[0].contentDocument).document;
                t.write("<!doctype html><html><body>");
                t.close();
                i = li(e, t);
                Rt.detach()
            }
            Gt[e] = i
        }
        return i
    }

    function li(e, t) {
        var i = w(t.createElement(e)).appendTo(t.body),
            n = w.css(i[0], "display");
        i.remove();
        return n
    }
    w.each(["height", "width"], function(e, t) {
        w.cssHooks[t] = {
            get: function(e, i, n) {
                if (i) {
                    return e.offsetWidth === 0 && Jt.test(w.css(e, "display")) ? w.swap(e, Qt, function() {
                        return si(e, t, n)
                    }) : si(e, t, n)
                }
            },
            set: function(e, i, n) {
                var r = n && Ft(e);
                return ri(e, i, n ? ai(e, t, n, w.support.boxSizing && w.css(e, "boxSizing", false, r) === "border-box", r) : 0)
            }
        }
    });
    if (!w.support.opacity) {
        w.cssHooks.opacity = {
            get: function(e, t) {
                return zt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var i = e.style,
                    n = e.currentStyle,
                    r = w.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "",
                    a = n && n.filter || i.filter || "";
                i.zoom = 1;
                if ((t >= 1 || t === "") && w.trim(a.replace(Vt, "")) === "" && i.removeAttribute) {
                    i.removeAttribute("filter");
                    if (t === "" || n && !n.filter) {
                        return
                    }
                }
                i.filter = Vt.test(a) ? a.replace(Vt, r) : a + " " + r
            }
        }
    }
    w(function() {
        if (!w.support.reliableMarginRight) {
            w.cssHooks.marginRight = {
                get: function(e, t) {
                    if (t) {
                        return w.swap(e, {
                            display: "inline-block"
                        }, Bt, [e, "marginRight"])
                    }
                }
            }
        }
        if (!w.support.pixelPosition && w.fn.position) {
            w.each(["top", "left"], function(e, t) {
                w.cssHooks[t] = {
                    get: function(e, i) {
                        if (i) {
                            i = Bt(e, t);
                            return Yt.test(i) ? w(e).position()[t] + "px" : i
                        }
                    }
                }
            })
        }
    });
    if (w.expr && w.expr.filters) {
        w.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !w.support.reliableHiddenOffsets && (e.style && e.style.display || w.css(e, "display")) === "none"
        };
        w.expr.filters.visible = function(e) {
            return !w.expr.filters.hidden(e)
        }
    }
    w.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        w.cssHooks[e + t] = {
            expand: function(i) {
                var n = 0,
                    r = {},
                    a = typeof i === "string" ? i.split(" ") : [i];
                for (; n < 4; n++) {
                    r[e + Kt[n] + t] = a[n] || a[n - 2] || a[0]
                }
                return r
            }
        };
        if (!qt.test(e)) {
            w.cssHooks[e + t].set = ri
        }
    });
    var ci = /%20/g,
        ui = /\[\]$/,
        fi = /\r?\n/g,
        di = /^(?:submit|button|image|reset|file)$/i,
        hi = /^(?:input|select|textarea|keygen)/i;
    w.fn.extend({
        serialize: function() {
            return w.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = w.prop(this, "elements");
                return e ? w.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !w(this).is(":disabled") && hi.test(this.nodeName) && !di.test(e) && (this.checked || !Ct.test(e))
            }).map(function(e, t) {
                var i = w(this).val();
                return i == null ? null : w.isArray(i) ? w.map(i, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(fi, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: i.replace(fi, "\r\n")
                }
            }).get()
        }
    });
    w.param = function(e, i) {
        var n, r = [],
            a = function(e, t) {
                t = w.isFunction(t) ? t() : t == null ? "" : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (i === t) {
            i = w.ajaxSettings && w.ajaxSettings.traditional
        }
        if (w.isArray(e) || e.jquery && !w.isPlainObject(e)) {
            w.each(e, function() {
                a(this.name, this.value)
            })
        } else {
            for (n in e) {
                pi(n, e[n], i, a)
            }
        }
        return r.join("&").replace(ci, "+")
    };

    function pi(e, t, i, n) {
        var r;
        if (w.isArray(t)) {
            w.each(t, function(t, r) {
                if (i || ui.test(e)) {
                    n(e, r)
                } else {
                    pi(e + "[" + (typeof r === "object" ? t : "") + "]", r, i, n)
                }
            })
        } else if (!i && w.type(t) === "object") {
            for (r in t) {
                pi(e + "[" + r + "]", t[r], i, n)
            }
        } else {
            n(e, t)
        }
    }
    w.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(e, t) {
        w.fn[t] = function(e, i) {
            return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
        }
    });
    w.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, i) {
            return this.on(e, null, t, i)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, i, n) {
            return this.on(t, e, i, n)
        },
        undelegate: function(e, t, i) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", i)
        }
    });
    var gi, vi, mi = w.now(),
        yi = /\?/,
        bi = /#.*$/,
        wi = /([?&])_=[^&]*/,
        xi = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        _i = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ci = /^(?:GET|HEAD)$/,
        Si = /^\/\//,
        Ti = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Mi = w.fn.load,
        ki = {},
        Ei = {},
        ji = "*/".concat("*");
    try {
        vi = a.href
    } catch (Ai) {
        vi = s.createElement("a");
        vi.href = "";
        vi = vi.href
    }
    gi = Ti.exec(vi.toLowerCase()) || [];

    function Ni(e) {
        return function(t, i) {
            if (typeof t !== "string") {
                i = t;
                t = "*"
            }
            var n, r = 0,
                a = t.toLowerCase().match(_) || [];
            if (w.isFunction(i)) {
                while (n = a[r++]) {
                    if (n[0] === "+") {
                        n = n.slice(1) || "*";
                        (e[n] = e[n] || []).unshift(i)
                    } else {
                        (e[n] = e[n] || []).push(i)
                    }
                }
            }
        }
    }

    function Ii(e, t, i, n) {
        var r = {},
            a = e === Ei;

        function s(o) {
            var l;
            r[o] = true;
            w.each(e[o] || [], function(e, o) {
                var c = o(t, i, n);
                if (typeof c === "string" && !a && !r[c]) {
                    t.dataTypes.unshift(c);
                    s(c);
                    return false
                } else if (a) {
                    return !(l = c)
                }
            });
            return l
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Pi(e, i) {
        var n, r, a = w.ajaxSettings.flatOptions || {};
        for (r in i) {
            if (i[r] !== t) {
                (a[r] ? e : n || (n = {}))[r] = i[r]
            }
        }
        if (n) {
            w.extend(true, e, n)
        }
        return e
    }
    w.fn.load = function(e, i, n) {
        if (typeof e !== "string" && Mi) {
            return Mi.apply(this, arguments)
        }
        var r, a, s, o = this,
            l = e.indexOf(" ");
        if (l >= 0) {
            r = e.slice(l, e.length);
            e = e.slice(0, l)
        }
        if (w.isFunction(i)) {
            n = i;
            i = t
        } else if (i && typeof i === "object") {
            s = "POST"
        }
        if (o.length > 0) {
            w.ajax({
                url: e,
                type: s,
                dataType: "html",
                data: i
            }).done(function(e) {
                a = arguments;
                o.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e)
            }).complete(n && function(e, t) {
                o.each(n, a || [e.responseText, t, e])
            })
        }
        return this
    };
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        w.fn[t] = function(e) {
            return this.on(t, e)
        }
    });
    w.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: vi,
            type: "GET",
            isLocal: _i.test(gi[1]),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ji,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": w.parseJSON,
                "text xml": w.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Pi(Pi(e, w.ajaxSettings), t) : Pi(w.ajaxSettings, e)
        },
        ajaxPrefilter: Ni(ki),
        ajaxTransport: Ni(Ei),
        ajax: function(e, i) {
            if (typeof e === "object") {
                i = e;
                e = t
            }
            i = i || {};
            var n, r, a, s, o, l, c, u, f = w.ajaxSetup({}, i),
                d = f.context || f,
                h = f.context && (d.nodeType || d.jquery) ? w(d) : w.event,
                p = w.Deferred(),
                g = w.Callbacks("once memory"),
                v = f.statusCode || {},
                m = {},
                y = {},
                b = 0,
                x = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (b === 2) {
                            if (!u) {
                                u = {};
                                while (t = xi.exec(s)) {
                                    u[t[1].toLowerCase()] = t[2]
                                }
                            }
                            t = u[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return b === 2 ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var i = e.toLowerCase();
                        if (!b) {
                            e = y[i] = y[i] || e;
                            m[e] = t
                        }
                        return this
                    },
                    overrideMimeType: function(e) {
                        if (!b) {
                            f.mimeType = e
                        }
                        return this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (b < 2) {
                                for (t in e) {
                                    v[t] = [v[t], e[t]]
                                }
                            } else {
                                C.always(e[C.status])
                            }
                        }
                        return this
                    },
                    abort: function(e) {
                        var t = e || x;
                        if (c) {
                            c.abort(t)
                        }
                        T(0, t);
                        return this
                    }
                };
            p.promise(C).complete = g.add;
            C.success = C.done;
            C.error = C.fail;
            f.url = ((e || f.url || vi) + "").replace(bi, "").replace(Si, gi[1] + "//");
            f.type = i.method || i.type || f.method || f.type;
            f.dataTypes = w.trim(f.dataType || "*").toLowerCase().match(_) || [""];
            if (f.crossDomain == null) {
                n = Ti.exec(f.url.toLowerCase());
                f.crossDomain = !!(n && (n[1] !== gi[1] || n[2] !== gi[2] || (n[3] || (n[1] === "http:" ? "80" : "443")) !== (gi[3] || (gi[1] === "http:" ? "80" : "443"))))
            }
            if (f.data && f.processData && typeof f.data !== "string") {
                f.data = w.param(f.data, f.traditional)
            }
            Ii(ki, f, i, C);
            if (b === 2) {
                return C
            }
            l = f.global;
            if (l && w.active++ === 0) {
                w.event.trigger("ajaxStart")
            }
            f.type = f.type.toUpperCase();
            f.hasContent = !Ci.test(f.type);
            a = f.url;
            if (!f.hasContent) {
                if (f.data) {
                    a = f.url += (yi.test(a) ? "&" : "?") + f.data;
                    delete f.data
                }
                if (f.cache === false) {
                    f.url = wi.test(a) ? a.replace(wi, "$1_=" + mi++) : a + (yi.test(a) ? "&" : "?") + "_=" + mi++
                }
            }
            if (f.ifModified) {
                if (w.lastModified[a]) {
                    C.setRequestHeader("If-Modified-Since", w.lastModified[a])
                }
                if (w.etag[a]) {
                    C.setRequestHeader("If-None-Match", w.etag[a])
                }
            }
            if (f.data && f.hasContent && f.contentType !== false || i.contentType) {
                C.setRequestHeader("Content-Type", f.contentType)
            }
            C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + ji + "; q=0.01" : "") : f.accepts["*"]);
            for (r in f.headers) {
                C.setRequestHeader(r, f.headers[r])
            }
            if (f.beforeSend && (f.beforeSend.call(d, C, f) === false || b === 2)) {
                return C.abort()
            }
            x = "abort";
            for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                C[r](f[r])
            }
            c = Ii(Ei, f, i, C);
            if (!c) {
                T(-1, "No Transport")
            } else {
                C.readyState = 1;
                if (l) {
                    h.trigger("ajaxSend", [C, f])
                }
                if (f.async && f.timeout > 0) {
                    o = setTimeout(function() {
                        C.abort("timeout")
                    }, f.timeout)
                }
                try {
                    b = 1;
                    c.send(m, T)
                } catch (S) {
                    if (b < 2) {
                        T(-1, S)
                    } else {
                        throw S
                    }
                }
            }

            function T(e, i, n, r) {
                var u, m, y, x, _, S = i;
                if (b === 2) {
                    return
                }
                b = 2;
                if (o) {
                    clearTimeout(o)
                }
                c = t;
                s = r || "";
                C.readyState = e > 0 ? 4 : 0;
                u = e >= 200 && e < 300 || e === 304;
                if (n) {
                    x = Oi(f, C, n)
                }
                x = Hi(f, x, C, u);
                if (u) {
                    if (f.ifModified) {
                        _ = C.getResponseHeader("Last-Modified");
                        if (_) {
                            w.lastModified[a] = _
                        }
                        _ = C.getResponseHeader("etag");
                        if (_) {
                            w.etag[a] = _
                        }
                    }
                    if (e === 204 || f.type === "HEAD") {
                        S = "nocontent"
                    } else if (e === 304) {
                        S = "notmodified"
                    } else {
                        S = x.state;
                        m = x.data;
                        y = x.error;
                        u = !y
                    }
                } else {
                    y = S;
                    if (e || !S) {
                        S = "error";
                        if (e < 0) {
                            e = 0
                        }
                    }
                }
                C.status = e;
                C.statusText = (i || S) + "";
                if (u) {
                    p.resolveWith(d, [m, S, C])
                } else {
                    p.rejectWith(d, [C, S, y])
                }
                C.statusCode(v);
                v = t;
                if (l) {
                    h.trigger(u ? "ajaxSuccess" : "ajaxError", [C, f, u ? m : y])
                }
                g.fireWith(d, [C, S]);
                if (l) {
                    h.trigger("ajaxComplete", [C, f]);
                    if (!--w.active) {
                        w.event.trigger("ajaxStop")
                    }
                }
            }
            return C
        },
        getJSON: function(e, t, i) {
            return w.get(e, t, i, "json")
        },
        getScript: function(e, i) {
            return w.get(e, t, i, "script")
        }
    });
    w.each(["get", "post"], function(e, i) {
        w[i] = function(e, n, r, a) {
            if (w.isFunction(n)) {
                a = a || r;
                r = n;
                n = t
            }
            return w.ajax({
                url: e,
                type: i,
                dataType: a,
                data: n,
                success: r
            })
        }
    });

    function Oi(e, i, n) {
        var r, a, s, o, l = e.contents,
            c = e.dataTypes;
        while (c[0] === "*") {
            c.shift();
            if (a === t) {
                a = e.mimeType || i.getResponseHeader("Content-Type")
            }
        }
        if (a) {
            for (o in l) {
                if (l[o] && l[o].test(a)) {
                    c.unshift(o);
                    break
                }
            }
        }
        if (c[0] in n) {
            s = c[0]
        } else {
            for (o in n) {
                if (!c[0] || e.converters[o + " " + c[0]]) {
                    s = o;
                    break
                }
                if (!r) {
                    r = o
                }
            }
            s = s || r
        }
        if (s) {
            if (s !== c[0]) {
                c.unshift(s)
            }
            return n[s]
        }
    }

    function Hi(e, t, i, n) {
        var r, a, s, o, l, c = {},
            u = e.dataTypes.slice();
        if (u[1]) {
            for (s in e.converters) {
                c[s.toLowerCase()] = e.converters[s]
            }
        }
        a = u.shift();
        while (a) {
            if (e.responseFields[a]) {
                i[e.responseFields[a]] = t
            }
            if (!l && n && e.dataFilter) {
                t = e.dataFilter(t, e.dataType)
            }
            l = a;
            a = u.shift();
            if (a) {
                if (a === "*") {
                    a = l
                } else if (l !== "*" && l !== a) {
                    s = c[l + " " + a] || c["* " + a];
                    if (!s) {
                        for (r in c) {
                            o = r.split(" ");
                            if (o[1] === a) {
                                s = c[l + " " + o[0]] || c["* " + o[0]];
                                if (s) {
                                    if (s === true) {
                                        s = c[r]
                                    } else if (c[r] !== true) {
                                        a = o[0];
                                        u.unshift(o[1])
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (s !== true) {
                        if (s && e["throws"]) {
                            t = s(t)
                        } else {
                            try {
                                t = s(t)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s ? f : "No conversion from " + l + " to " + a
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    w.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                w.globalEval(e);
                return e
            }
        }
    });
    w.ajaxPrefilter("script", function(e) {
        if (e.cache === t) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET";
            e.global = false
        }
    });
    w.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var i, n = s.head || w("head")[0] || s.documentElement;
            return {
                send: function(t, r) {
                    i = s.createElement("script");
                    i.async = true;
                    if (e.scriptCharset) {
                        i.charset = e.scriptCharset
                    }
                    i.src = e.url;
                    i.onload = i.onreadystatechange = function(e, t) {
                        if (t || !i.readyState || /loaded|complete/.test(i.readyState)) {
                            i.onload = i.onreadystatechange = null;
                            if (i.parentNode) {
                                i.parentNode.removeChild(i)
                            }
                            i = null;
                            if (!t) {
                                r(200, "success")
                            }
                        }
                    };
                    n.insertBefore(i, n.firstChild)
                },
                abort: function() {
                    if (i) {
                        i.onload(t, true)
                    }
                }
            }
        }
    });
    var Li = [],
        Di = /(=)\?(?=&|$)|\?\?/;
    w.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Li.pop() || w.expando + "_" + mi++;
            this[e] = true;
            return e
        }
    });
    w.ajaxPrefilter("json jsonp", function(i, n, r) {
        var a, s, o, l = i.jsonp !== false && (Di.test(i.url) ? "url" : typeof i.data === "string" && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Di.test(i.data) && "data");
        if (l || i.dataTypes[0] === "jsonp") {
            a = i.jsonpCallback = w.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback;
            if (l) {
                i[l] = i[l].replace(Di, "$1" + a)
            } else if (i.jsonp !== false) {
                i.url += (yi.test(i.url) ? "&" : "?") + i.jsonp + "=" + a
            }
            i.converters["script json"] = function() {
                if (!o) {
                    w.error(a + " was not called")
                }
                return o[0]
            };
            i.dataTypes[0] = "json";
            s = e[a];
            e[a] = function() {
                o = arguments
            };
            r.always(function() {
                e[a] = s;
                if (i[a]) {
                    i.jsonpCallback = n.jsonpCallback;
                    Li.push(a)
                }
                if (o && w.isFunction(s)) {
                    s(o[0])
                }
                o = s = t
            });
            return "script"
        }
    });
    var $i, Ri, Fi = 0,
        Bi = e.ActiveXObject && function() {
            var e;
            for (e in $i) {
                $i[e](t, true)
            }
        };

    function Vi() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }

    function zi() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    w.ajaxSettings.xhr = e.ActiveXObject ? function() {
        return !this.isLocal && Vi() || zi()
    } : Vi;
    Ri = w.ajaxSettings.xhr();
    w.support.cors = !!Ri && "withCredentials" in Ri;
    Ri = w.support.ajax = !!Ri;
    if (Ri) {
        w.ajaxTransport(function(i) {
            if (!i.crossDomain || w.support.cors) {
                var n;
                return {
                    send: function(r, a) {
                        var s, o, l = i.xhr();
                        if (i.username) {
                            l.open(i.type, i.url, i.async, i.username, i.password)
                        } else {
                            l.open(i.type, i.url, i.async)
                        }
                        if (i.xhrFields) {
                            for (o in i.xhrFields) {
                                l[o] = i.xhrFields[o]
                            }
                        }
                        if (i.mimeType && l.overrideMimeType) {
                            l.overrideMimeType(i.mimeType)
                        }
                        if (!i.crossDomain && !r["X-Requested-With"]) {
                            r["X-Requested-With"] = "XMLHttpRequest"
                        }
                        try {
                            for (o in r) {
                                l.setRequestHeader(o, r[o])
                            }
                        } catch (c) {}
                        l.send(i.hasContent && i.data || null);
                        n = function(e, r) {
                            var o, c, u, f;
                            try {
                                if (n && (r || l.readyState === 4)) {
                                    n = t;
                                    if (s) {
                                        l.onreadystatechange = w.noop;
                                        if (Bi) {
                                            delete $i[s]
                                        }
                                    }
                                    if (r) {
                                        if (l.readyState !== 4) {
                                            l.abort()
                                        }
                                    } else {
                                        f = {};
                                        o = l.status;
                                        c = l.getAllResponseHeaders();
                                        if (typeof l.responseText === "string") {
                                            f.text = l.responseText
                                        }
                                        try {
                                            u = l.statusText
                                        } catch (d) {
                                            u = ""
                                        }
                                        if (!o && i.isLocal && !i.crossDomain) {
                                            o = f.text ? 200 : 404
                                        } else if (o === 1223) {
                                            o = 204
                                        }
                                    }
                                }
                            } catch (h) {
                                if (!r) {
                                    a(-1, h)
                                }
                            }
                            if (f) {
                                a(o, u, f, c)
                            }
                        };
                        if (!i.async) {
                            n()
                        } else if (l.readyState === 4) {
                            setTimeout(n)
                        } else {
                            s = ++Fi;
                            if (Bi) {
                                if (!$i) {
                                    $i = {};
                                    w(e).unload(Bi)
                                }
                                $i[s] = n
                            }
                            l.onreadystatechange = n
                        }
                    },
                    abort: function() {
                        if (n) {
                            n(t, true)
                        }
                    }
                }
            }
        })
    }
    var Wi, Ji, qi = /^(?:toggle|show|hide)$/,
        Ui = new RegExp("^(?:([+-])=|)(" + x + ")([a-z%]*)$", "i"),
        Yi = /queueHooks$/,
        Xi = [tn],
        Gi = {
            "*": [function(e, t) {
                var i = this.createTween(e, t),
                    n = i.cur(),
                    r = Ui.exec(t),
                    a = r && r[3] || (w.cssNumber[e] ? "" : "px"),
                    s = (w.cssNumber[e] || a !== "px" && +n) && Ui.exec(w.css(i.elem, e)),
                    o = 1,
                    l = 20;
                if (s && s[3] !== a) {
                    a = a || s[3];
                    r = r || [];
                    s = +n || 1;
                    do {
                        o = o || ".5";
                        s = s / o;
                        w.style(i.elem, e, s + a)
                    } while (o !== (o = i.cur() / n) && o !== 1 && --l)
                }
                if (r) {
                    s = i.start = +s || +n || 0;
                    i.unit = a;
                    i.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]
                }
                return i
            }]
        };

    function Qi() {
        setTimeout(function() {
            Wi = t
        });
        return Wi = w.now()
    }

    function Zi(e, t, i) {
        var n, r = (Gi[t] || []).concat(Gi["*"]),
            a = 0,
            s = r.length;
        for (; a < s; a++) {
            if (n = r[a].call(i, t, e)) {
                return n
            }
        }
    }

    function Ki(e, t, i) {
        var n, r, a = 0,
            s = Xi.length,
            o = w.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (r) {
                    return false
                }
                var t = Wi || Qi(),
                    i = Math.max(0, c.startTime + c.duration - t),
                    n = i / c.duration || 0,
                    a = 1 - n,
                    s = 0,
                    l = c.tweens.length;
                for (; s < l; s++) {
                    c.tweens[s].run(a)
                }
                o.notifyWith(e, [c, a, i]);
                if (a < 1 && l) {
                    return i
                } else {
                    o.resolveWith(e, [c]);
                    return false
                }
            },
            c = o.promise({
                elem: e,
                props: w.extend({}, t),
                opts: w.extend(true, {
                    specialEasing: {}
                }, i),
                originalProperties: t,
                originalOptions: i,
                startTime: Wi || Qi(),
                duration: i.duration,
                tweens: [],
                createTween: function(t, i) {
                    var n = w.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
                    c.tweens.push(n);
                    return n
                },
                stop: function(t) {
                    var i = 0,
                        n = t ? c.tweens.length : 0;
                    if (r) {
                        return this
                    }
                    r = true;
                    for (; i < n; i++) {
                        c.tweens[i].run(1)
                    }
                    if (t) {
                        o.resolveWith(e, [c, t])
                    } else {
                        o.rejectWith(e, [c, t])
                    }
                    return this
                }
            }),
            u = c.props;
        en(u, c.opts.specialEasing);
        for (; a < s; a++) {
            n = Xi[a].call(c, e, u, c.opts);
            if (n) {
                return n
            }
        }
        w.map(u, Zi, c);
        if (w.isFunction(c.opts.start)) {
            c.opts.start.call(e, c)
        }
        w.fx.timer(w.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        }));
        return c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function en(e, t) {
        var i, n, r, a, s;
        for (i in e) {
            n = w.camelCase(i);
            r = t[n];
            a = e[i];
            if (w.isArray(a)) {
                r = a[1];
                a = e[i] = a[0]
            }
            if (i !== n) {
                e[n] = a;
                delete e[i]
            }
            s = w.cssHooks[n];
            if (s && "expand" in s) {
                a = s.expand(a);
                delete e[n];
                for (i in a) {
                    if (!(i in e)) {
                        e[i] = a[i];
                        t[i] = r
                    }
                }
            } else {
                t[n] = r
            }
        }
    }
    w.Animation = w.extend(Ki, {
        tweener: function(e, t) {
            if (w.isFunction(e)) {
                t = e;
                e = ["*"]
            } else {
                e = e.split(" ")
            }
            var i, n = 0,
                r = e.length;
            for (; n < r; n++) {
                i = e[n];
                Gi[i] = Gi[i] || [];
                Gi[i].unshift(t)
            }
        },
        prefilter: function(e, t) {
            if (t) {
                Xi.unshift(e)
            } else {
                Xi.push(e)
            }
        }
    });

    function tn(e, t, i) {
        var n, r, a, s, o, l, c = this,
            u = {},
            f = e.style,
            d = e.nodeType && ii(e),
            h = w._data(e, "fxshow");
        if (!i.queue) {
            o = w._queueHooks(e, "fx");
            if (o.unqueued == null) {
                o.unqueued = 0;
                l = o.empty.fire;
                o.empty.fire = function() {
                    if (!o.unqueued) {
                        l()
                    }
                }
            }
            o.unqueued++;
            c.always(function() {
                c.always(function() {
                    o.unqueued--;
                    if (!w.queue(e, "fx").length) {
                        o.empty.fire()
                    }
                })
            })
        }
        if (e.nodeType === 1 && ("height" in t || "width" in t)) {
            i.overflow = [f.overflow, f.overflowX, f.overflowY];
            if (w.css(e, "display") === "inline" && w.css(e, "float") === "none") {
                if (!w.support.inlineBlockNeedsLayout || oi(e.nodeName) === "inline") {
                    f.display = "inline-block"
                } else {
                    f.zoom = 1
                }
            }
        }
        if (i.overflow) {
            f.overflow = "hidden";
            if (!w.support.shrinkWrapBlocks) {
                c.always(function() {
                    f.overflow = i.overflow[0];
                    f.overflowX = i.overflow[1];
                    f.overflowY = i.overflow[2]
                })
            }
        }
        for (n in t) {
            r = t[n];
            if (qi.exec(r)) {
                delete t[n];
                a = a || r === "toggle";
                if (r === (d ? "hide" : "show")) {
                    continue
                }
                u[n] = h && h[n] || w.style(e, n)
            }
        }
        if (!w.isEmptyObject(u)) {
            if (h) {
                if ("hidden" in h) {
                    d = h.hidden
                }
            } else {
                h = w._data(e, "fxshow", {})
            }
            if (a) {
                h.hidden = !d
            }
            if (d) {
                w(e).show()
            } else {
                c.done(function() {
                    w(e).hide()
                })
            }
            c.done(function() {
                var t;
                w._removeData(e, "fxshow");
                for (t in u) {
                    w.style(e, t, u[t])
                }
            });
            for (n in u) {
                s = Zi(d ? h[n] : 0, n, c);
                if (!(n in h)) {
                    h[n] = s.start;
                    if (d) {
                        s.end = s.start;
                        s.start = n === "width" || n === "height" ? 1 : 0
                    }
                }
            }
        }
    }

    function nn(e, t, i, n, r) {
        return new nn.prototype.init(e, t, i, n, r)
    }
    w.Tween = nn;
    nn.prototype = {
        constructor: nn,
        init: function(e, t, i, n, r, a) {
            this.elem = e;
            this.prop = i;
            this.easing = r || "swing";
            this.options = t;
            this.start = this.now = this.cur();
            this.end = n;
            this.unit = a || (w.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var e = nn.propHooks[this.prop];
            return e && e.get ? e.get(this) : nn.propHooks._default.get(this)
        },
        run: function(e) {
            var t, i = nn.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
            } else {
                this.pos = t = e
            }
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (i && i.set) {
                i.set(this)
            } else {
                nn.propHooks._default.set(this)
            }
            return this
        }
    };
    nn.prototype.init.prototype = nn.prototype;
    nn.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (e.elem[e.prop] != null && (!e.elem.style || e.elem.style[e.prop] == null)) {
                    return e.elem[e.prop]
                }
                t = w.css(e.elem, e.prop, "");
                return !t || t === "auto" ? 0 : t
            },
            set: function(e) {
                if (w.fx.step[e.prop]) {
                    w.fx.step[e.prop](e)
                } else if (e.elem.style && (e.elem.style[w.cssProps[e.prop]] != null || w.cssHooks[e.prop])) {
                    w.style(e.elem, e.prop, e.now + e.unit)
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    };
    nn.propHooks.scrollTop = nn.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    w.each(["toggle", "show", "hide"], function(e, t) {
        var i = w.fn[t];
        w.fn[t] = function(e, n, r) {
            return e == null || typeof e === "boolean" ? i.apply(this, arguments) : this.animate(rn(t, true), e, n, r)
        }
    });
    w.fn.extend({
        fadeTo: function(e, t, i, n) {
            return this.filter(ii).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, i, n)
        },
        animate: function(e, t, i, n) {
            var r = w.isEmptyObject(e),
                a = w.speed(t, i, n),
                s = function() {
                    var t = Ki(this, w.extend({}, e), a);
                    if (r || w._data(this, "finish")) {
                        t.stop(true)
                    }
                };
            s.finish = s;
            return r || a.queue === false ? this.each(s) : this.queue(a.queue, s)
        },
        stop: function(e, i, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop;
                t(n)
            };
            if (typeof e !== "string") {
                n = i;
                i = e;
                e = t
            }
            if (i && e !== false) {
                this.queue(e || "fx", [])
            }
            return this.each(function() {
                var t = true,
                    i = e != null && e + "queueHooks",
                    a = w.timers,
                    s = w._data(this);
                if (i) {
                    if (s[i] && s[i].stop) {
                        r(s[i])
                    }
                } else {
                    for (i in s) {
                        if (s[i] && s[i].stop && Yi.test(i)) {
                            r(s[i])
                        }
                    }
                }
                for (i = a.length; i--;) {
                    if (a[i].elem === this && (e == null || a[i].queue === e)) {
                        a[i].anim.stop(n);
                        t = false;
                        a.splice(i, 1)
                    }
                }
                if (t || !n) {
                    w.dequeue(this, e)
                }
            })
        },
        finish: function(e) {
            if (e !== false) {
                e = e || "fx"
            }
            return this.each(function() {
                var t, i = w._data(this),
                    n = i[e + "queue"],
                    r = i[e + "queueHooks"],
                    a = w.timers,
                    s = n ? n.length : 0;
                i.finish = true;
                w.queue(this, e, []);
                if (r && r.stop) {
                    r.stop.call(this, true)
                }
                for (t = a.length; t--;) {
                    if (a[t].elem === this && a[t].queue === e) {
                        a[t].anim.stop(true);
                        a.splice(t, 1)
                    }
                }
                for (t = 0; t < s; t++) {
                    if (n[t] && n[t].finish) {
                        n[t].finish.call(this)
                    }
                }
                delete i.finish
            })
        }
    });

    function rn(e, t) {
        var i, n = {
                height: e
            },
            r = 0;
        t = t ? 1 : 0;
        for (; r < 4; r += 2 - t) {
            i = Kt[r];
            n["margin" + i] = n["padding" + i] = e
        }
        if (t) {
            n.opacity = n.width = e
        }
        return n
    }
    w.each({
        slideDown: rn("show"),
        slideUp: rn("hide"),
        slideToggle: rn("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        w.fn[e] = function(e, i, n) {
            return this.animate(t, e, i, n)
        }
    });
    w.speed = function(e, t, i) {
        var n = e && typeof e === "object" ? w.extend({}, e) : {
            complete: i || !i && t || w.isFunction(e) && e,
            duration: e,
            easing: i && t || t && !w.isFunction(t) && t
        };
        n.duration = w.fx.off ? 0 : typeof n.duration === "number" ? n.duration : n.duration in w.fx.speeds ? w.fx.speeds[n.duration] : w.fx.speeds._default;
        if (n.queue == null || n.queue === true) {
            n.queue = "fx"
        }
        n.old = n.complete;
        n.complete = function() {
            if (w.isFunction(n.old)) {
                n.old.call(this)
            }
            if (n.queue) {
                w.dequeue(this, n.queue)
            }
        };
        return n
    };
    w.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    };
    w.timers = [];
    w.fx = nn.prototype.init;
    w.fx.tick = function() {
        var e, i = w.timers,
            n = 0;
        Wi = w.now();
        for (; n < i.length; n++) {
            e = i[n];
            if (!e() && i[n] === e) {
                i.splice(n--, 1)
            }
        }
        if (!i.length) {
            w.fx.stop()
        }
        Wi = t
    };
    w.fx.timer = function(e) {
        if (e() && w.timers.push(e)) {
            w.fx.start()
        }
    };
    w.fx.interval = 13;
    w.fx.start = function() {
        if (!Ji) {
            Ji = setInterval(w.fx.tick, w.fx.interval)
        }
    };
    w.fx.stop = function() {
        clearInterval(Ji);
        Ji = null
    };
    w.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    w.fx.step = {};
    if (w.expr && w.expr.filters) {
        w.expr.filters.animated = function(e) {
            return w.grep(w.timers, function(t) {
                return e === t.elem
            }).length
        }
    }
    w.fn.offset = function(e) {
        if (arguments.length) {
            return e === t ? this : this.each(function(t) {
                w.offset.setOffset(this, e, t)
            })
        }
        var i, n, a = {
                top: 0,
                left: 0
            },
            s = this[0],
            o = s && s.ownerDocument;
        if (!o) {
            return
        }
        i = o.documentElement;
        if (!w.contains(i, s)) {
            return a
        }
        if (typeof s.getBoundingClientRect !== r) {
            a = s.getBoundingClientRect()
        }
        n = an(o);
        return {
            top: a.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
            left: a.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
        }
    };
    w.offset = {
        setOffset: function(e, t, i) {
            var n = w.css(e, "position");
            if (n === "static") {
                e.style.position = "relative"
            }
            var r = w(e),
                a = r.offset(),
                s = w.css(e, "top"),
                o = w.css(e, "left"),
                l = (n === "absolute" || n === "fixed") && w.inArray("auto", [s, o]) > -1,
                c = {},
                u = {},
                f, d;
            if (l) {
                u = r.position();
                f = u.top;
                d = u.left
            } else {
                f = parseFloat(s) || 0;
                d = parseFloat(o) || 0
            }
            if (w.isFunction(t)) {
                t = t.call(e, i, a)
            }
            if (t.top != null) {
                c.top = t.top - a.top + f
            }
            if (t.left != null) {
                c.left = t.left - a.left + d
            }
            if ("using" in t) {
                t.using.call(e, c)
            } else {
                r.css(c)
            }
        }
    };
    w.fn.extend({
        position: function() {
            if (!this[0]) {
                return
            }
            var e, t, i = {
                    top: 0,
                    left: 0
                },
                n = this[0];
            if (w.css(n, "position") === "fixed") {
                t = n.getBoundingClientRect()
            } else {
                e = this.offsetParent();
                t = this.offset();
                if (!w.nodeName(e[0], "html")) {
                    i = e.offset()
                }
                i.top += w.css(e[0], "borderTopWidth", true);
                i.left += w.css(e[0], "borderLeftWidth", true)
            }
            return {
                top: t.top - i.top - w.css(n, "marginTop", true),
                left: t.left - i.left - w.css(n, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent || o;
                while (e && (!w.nodeName(e, "html") && w.css(e, "position") === "static")) {
                    e = e.offsetParent
                }
                return e || o
            })
        }
    });
    w.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, i) {
        var n = /Y/.test(i);
        w.fn[e] = function(r) {
            return w.access(this, function(e, r, a) {
                var s = an(e);
                if (a === t) {
                    return s ? i in s ? s[i] : s.document.documentElement[r] : e[r]
                }
                if (s) {
                    s.scrollTo(!n ? a : w(s).scrollLeft(), n ? a : w(s).scrollTop())
                } else {
                    e[r] = a
                }
            }, e, r, arguments.length, null)
        }
    });

    function an(e) {
        return w.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false
    }
    w.each({
        Height: "height",
        Width: "width"
    }, function(e, i) {
        w.each({
            padding: "inner" + e,
            content: i,
            "": "outer" + e
        }, function(n, r) {
            w.fn[r] = function(r, a) {
                var s = arguments.length && (n || typeof r !== "boolean"),
                    o = n || (r === true || a === true ? "margin" : "border");
                return w.access(this, function(i, n, r) {
                    var a;
                    if (w.isWindow(i)) {
                        return i.document.documentElement["client" + e]
                    }
                    if (i.nodeType === 9) {
                        a = i.documentElement;
                        return Math.max(i.body["scroll" + e], a["scroll" + e], i.body["offset" + e], a["offset" + e], a["client" + e])
                    }
                    return r === t ? w.css(i, n, o) : w.style(i, n, r, o)
                }, i, s ? r : t, s, null)
            }
        })
    });
    w.fn.size = function() {
        return this.length
    };
    w.fn.andSelf = w.fn.addBack;
    if (typeof module === "object" && module && typeof module.exports === "object") {
        module.exports = w
    } else {
        e.jQuery = e.$ = w;
        if (typeof define === "function" && define.amd) {
            define("jquery", [], function() {
                return w
            })
        }
    }
})(window);
jQuery.browser = {};
(function() {
    jQuery.browser.msie = false;
    jQuery.browser.version = 0;
    if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
        jQuery.browser.msie = true;
        jQuery.browser.version = RegExp.$1
    }
})();
(function(e) {
    var t = "ar" + +new Date,
        i = {
            onResize: e.noop,
            onBeforeResize: e.noop,
            onAfterResize: e.noop,
            animate: {
                duration: 200,
                complete: e.noop
            },
            extraSpace: 50,
            minSize: "original",
            maxSize: 500,
            delay: 100
        },
        n = ["lineHeight", "textDecoration", "letterSpacing", "fontSize", "fontFamily", "fontStyle", "fontWeight", "textTransform", "textAlign", "direction", "wordSpacing", "fontSizeAdjust", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "width"],
        r = ["textarea:not(textarea." + t + ")", "input:not(input[type])", "input[type=text]", "input[type=password]", "input[type=email]", "input[type=url]"].join(",");

    function a(t, n) {
        if (t.data("AutoResizer")) {
            t.data("AutoResizer").destroy()
        }
        t.data("AutoResizer", this);
        var r;
        this.$el = t;
        this.config = n = e.extend({}, i, n);
        this.isTextArea = this.$el.is("textarea");
        r = this.isTextArea ? t.height() : t.width();
        if (n.maxSize === "original") {
            n.maxSize = r
        }
        if (n.minSize === "original") {
            n.minSize = r
        }
        if (this.isTextArea) {
            t.css({
                resize: "none"
            })
        }
        if (n.animate) {
            n.animate.complete = e.proxy(this.afterResize, this, n.animate.complete)
        }
        this.bind();
        if (!t.is(":hidden")) {
            this.check(true)
        }
    }! function() {
        var i = ".autoResize",
            r;
        this.unbind = function() {
            this.$el.unbind(i)
        };
        this.bind = function s() {
            var t = e.proxy(function() {
                this.check()
            }, this);
            this.unbind();
            this.$el.bind("keyup" + i, t).bind("change" + i, t).bind("paste" + i, t)
        };

        function a() {
            if (!r) {
                r = e('<div class="autoresize-clones"/>').appendTo("body").css({
                    position: "absolute",
                    top: -9999,
                    left: -9999,
                    width: 0,
                    height: 0,
                    padding: 0,
                    overflow: "hidden"
                })
            }
            return r
        }
        this.getClone = function() {
            var i, r;
            if (!this.$clone) {
                i = this.$el;
                this.$clone = r = e(this.isTextArea ? "<textarea/>" : "<span/>");
                e.each(n, function(e, t) {
                    r.css(t, i.css(t))
                });
                r.addClass(t).attr("tabIndex", -1).css("overflow", "hidden");
                if (this.isTextArea) {
                    r.height(0)
                } else {
                    r.width("auto").css({
                        whiteSpace: "nowrap"
                    })
                }
                a().append(r)
            }
            return this.$clone
        };
        this.afterResize = function(e) {
            var t = this.$el,
                i = this.config;
            if (this.isTextArea) {
                if (t.height() === i.maxSize) {
                    t.css("overflowY", "auto").scrollTop(1e4)
                } else {
                    t.css("overflowY", "hidden")
                }
            }
            i.onAfterResize.call(this.$el);
            if (e) {
                e.apply(this, arguments)
            }
        };
        this.check = function o(e) {
            var t = this.config,
                i = this.getClone(),
                n = this.$el,
                r = n.val() || "",
                a = n.width(),
                s = this.isTextArea ? n.height() : a,
                o, l;
            r = r.length ? r : " ";
            if (r === this.prevValue && this.prevWidth === a) {
                return
            }
            if (this.isTextArea) {
                if (a !== this.prevWidth) {
                    i.width(a)
                }
                i.val(r).scrollTop(0).scrollTop(1e4);
                o = i.scrollTop() + t.extraSpace
            } else {
                i.text(r);
                o = i.width() + t.extraSpace
            }
            o = Math.min(Math.max(o, t.minSize), t.maxSize);
            if (s !== o) {
                l = {};
                l[this.isTextArea ? "height" : "width"] = o
            }
            this.prevValue = r;
            this.prevWidth = a;
            if (l) {
                t.onBeforeResize.call(n);
                t.onResize.call(n);
                if (t.animate && !e) {
                    n.stop(true, true).animate(l, t.animate)
                } else {
                    n.css(l);
                    this.afterResize()
                }
            }
        };
        this.destroy = function l() {
            this.$el.removeData("AutoResizer");
            this.unbind();
            this.$clone.remove();
            delete this.$el;
            delete this.$clone
        }
    }.call(a.prototype);
    e.fn.autoResize = function s(t) {
        this.filter(r).each(function() {
            new a(e(this), t)
        });
        return this
    }
})(jQuery);
(function(e) {
    e(jQuery)
})(function(e) {
    var t = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        n = Array.prototype.slice,
        r, a;
    if (e.event.fixHooks) {
        for (var s = t.length; s;) {
            e.event.fixHooks[t[--s]] = e.event.mouseHooks
        }
    }
    var o = e.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener) {
                for (var t = i.length; t;) {
                    this.addEventListener(i[--t], l, false)
                }
            } else {
                this.onmousewheel = l
            }
            e.data(this, "mousewheel-line-height", o.getLineHeight(this));
            e.data(this, "mousewheel-page-height", o.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var t = i.length; t;) {
                    this.removeEventListener(i[--t], l, false)
                }
            } else {
                this.onmousewheel = null
            }
            e.removeData(this, "mousewheel-line-height");
            e.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(t) {
            var i = e(t),
                n = i["offsetParent" in e.fn ? "offsetParent" : "parent"]();
            if (!n.length) {
                n = e("body")
            }
            return parseInt(n.css("fontSize"), 10) || parseInt(i.css("fontSize"), 10) || 16
        },
        getPageHeight: function(t) {
            return e(t).height()
        },
        settings: {
            adjustOldDeltas: true,
            normalizeOffset: true
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    });

    function l(t) {
        var i = t || window.event,
            s = n.call(arguments, 1),
            l = 0,
            f = 0,
            d = 0,
            h = 0,
            p = 0,
            g = 0;
        t = e.event.fix(i);
        t.type = "mousewheel";
        if ("detail" in i) {
            d = i.detail * -1
        }
        if ("wheelDelta" in i) {
            d = i.wheelDelta
        }
        if ("wheelDeltaY" in i) {
            d = i.wheelDeltaY
        }
        if ("wheelDeltaX" in i) {
            f = i.wheelDeltaX * -1
        }
        if ("axis" in i && i.axis === i.HORIZONTAL_AXIS) {
            f = d * -1;
            d = 0
        }
        l = d === 0 ? f : d;
        if ("deltaY" in i) {
            d = i.deltaY * -1;
            l = d
        }
        if ("deltaX" in i) {
            f = i.deltaX;
            if (d === 0) {
                l = f * -1
            }
        }
        if (d === 0 && f === 0) {
            return
        }
        if (i.deltaMode === 1) {
            var v = e.data(this, "mousewheel-line-height");
            l *= v;
            d *= v;
            f *= v
        } else if (i.deltaMode === 2) {
            var m = e.data(this, "mousewheel-page-height");
            l *= m;
            d *= m;
            f *= m
        }
        h = Math.max(Math.abs(d), Math.abs(f));
        if (!a || h < a) {
            a = h;
            if (u(i, h)) {
                a /= 40
            }
        }
        if (u(i, h)) {
            l /= 40;
            f /= 40;
            d /= 40
        }
        l = Math[l >= 1 ? "floor" : "ceil"](l / a);
        f = Math[f >= 1 ? "floor" : "ceil"](f / a);
        d = Math[d >= 1 ? "floor" : "ceil"](d / a);
        if (o.settings.normalizeOffset && this.getBoundingClientRect) {
            var y = this.getBoundingClientRect();
            p = t.clientX - y.left;
            g = t.clientY - y.top
        }
        t.deltaX = f;
        t.deltaY = d;
        t.deltaFactor = a;
        t.offsetX = p;
        t.offsetY = g;
        t.deltaMode = 0;
        s.unshift(t, l, f, d);
        if (r) {
            clearTimeout(r)
        }
        r = setTimeout(c, 200);
        return (e.event.dispatch || e.event.handle).apply(this, s)
    }

    function c() {
        a = null
    }

    function u(e, t) {
        return o.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 === 0
    }
});
"use strict";
(function(e) {
    e(jQuery)
})(function(e) {
    var t = {
        wheelSpeed: navigator.platform.toUpperCase().indexOf("WIN") !== -1 ? 15 : 1,
        wheelPropagation: false,
        minScrollbarLength: null,
        useBothWheelAxes: false,
        useKeyboard: false,
        topMargin: 0
    };
    e.fn.perfectScrollbar = function(i, n) {
        return this.each(function() {
            var r = e.extend(true, {}, t),
                a = e(this);
            if (typeof i === "object") {
                e.extend(true, r, i)
            } else {
                n = i
            }
            if (n === "update") {
                if (a.data("perfect-scrollbar-update")) {
                    a.data("perfect-scrollbar-update")()
                }
                return a
            } else if (n === "scroll") {
                if (a.data("perfect-scrollbar-scroll")) {
                    a.data("perfect-scrollbar-scroll")()
                }
                return a
            } else if (n === "destroy") {
                if (a.data("perfect-scrollbar-destroy")) {
                    a.data("perfect-scrollbar-destroy")()
                }
                return a
            }
            if (a.data("perfect-scrollbar")) {
                return a.data("perfect-scrollbar")
            }
            a.addClass("ps-container");
            var s = e("<div class='ps-scrollbar-x-rail'></div>").appendTo(a),
                o = e("<div class='ps-scrollbar-y-rail'></div>").appendTo(a),
                l = e("<div class='ps-scrollbar-x'></div>").appendTo(s),
                c = e("<div class='ps-scrollbar-y'></div>").appendTo(o),
                u, f, d, h, p, g, v, m, y = parseInt(s.css("bottom"), 10),
                b, w, x = parseInt(o.css("right"), 10),
                _ = a.find(".overview"),
                C = e("#messages-div"),
                S, T, M, k, E, j = false;
            var A = function() {
                var e = parseInt(w * (g - h) / (h - b), 10);
                s.css({
                    bottom: y - e
                });
                a.bottomPositionCSS = parseInt(w * (g - h) / (h - b), 10);
                $()
            };
            var N = function() {
                return parseInt(_.css("bottom"))
            };
            var I = function() {
                return parseInt(_.css("top"))
            };
            var P = function() {
                return parseInt(c.css("bottom"))
            };
            a.bottomPositionCSS = N();
            var O = function() {
                var e = parseInt(m * (p - d) / (d - v), 10);
                a.scrollLeft(e);
                o.css({
                    right: x - e
                })
            };
            var H = function(e) {
                if (r.minScrollbarLength) {
                    e = Math.max(e, r.minScrollbarLength)
                }
                return e
            };
            var L = function() {
                S = e("#jivosite-adword");
                T = e("#input-div");
                if (E !== 0) {
                    S.find(".messages-div-blurred").css({
                        bottom: "auto",
                        top: I()
                    });
                    T.find(".messages-div-blurred").css({
                        bottom: "auto",
                        top: I() - C.height()
                    })
                } else {
                    S.find(".messages-div-blurred").css({
                        bottom: S.height() + N() - C.height(),
                        top: "auto"
                    });
                    T.find(".messages-div-blurred").css({
                        bottom: T.innerHeight() + N(),
                        top: "auto"
                    })
                }
            };
            var D = function(e) {
                E = e;
                k = (M + E) * -1;
                if (E !== 0) {
                    _.css({
                        bottom: "auto",
                        top: k
                    });
                    j = true
                } else {
                    _.css({
                        bottom: e,
                        top: "auto"
                    });
                    if (updateBlur) updateBlur();
                    j = false
                }
            };
            var $ = function() {
                M = g - h + r.topMargin;
                if (a.bottomPositionCSS < M) {
                    if (a.bottomPositionCSS <= 0) {
                        D(0);
                        a.bottomPositionCSS = 0
                    } else {
                        D(a.bottomPositionCSS * -1)
                    }
                } else {
                    D(M * -1);
                    a.bottomPositionCSS = M
                }
                L()
            };
            var R = function(e) {
                s.toggle(u);
                o.toggle(f);
                s.css({
                    left: a.scrollLeft(),
                    bottom: y - a.scrollTop(),
                    width: d
                });
                o.css({
                    top: a.scrollTop(),
                    right: x - a.scrollLeft(),
                    height: h
                });
                l.css({
                    left: m,
                    width: v
                });
                c.css({
                    bottom: e ? 0 : w,
                    height: b
                })
            };
            var F = function(e) {
                d = a.width();
                h = a.height() - r.topMargin;
                p = _.width();
                g = _.height() - r.topMargin;
                if (d < p) {
                    u = true;
                    v = H(parseInt(d * d / p, 10));
                    m = parseInt(a.scrollLeft() * (d - v) / (p - d), 10)
                } else {
                    u = false;
                    v = 0;
                    m = 0;
                    a.scrollLeft(0)
                }
                if (h < g && !e) {
                    f = true;
                    b = H(parseInt(h * h / g, 10));
                    $();
                    w = parseInt(a.bottomPositionCSS * (h - b) / (g - h), 10)
                } else {
                    f = false;
                    b = 0;
                    w = 0;
                    D(0);
                    L()
                }
                if (w >= h - b) {
                    w = h - b
                }
                if (m >= d - v) {
                    m = d - v
                }
                R(e)
            };
            var B = function(e, t) {
                var i = e + t,
                    n = d - v;
                if (i < 0) {
                    m = 0
                } else if (i > n) {
                    m = n
                } else {
                    m = i
                }
                s.css({
                    left: a.scrollLeft()
                });
                l.css({
                    left: m
                })
            };
            var V = function(e, t) {
                var i = e - t,
                    n = h - b;
                if (i < 0) {
                    w = 0
                } else if (i > n) {
                    w = n
                } else {
                    w = i
                }
                o.css({
                    top: a.scrollTop()
                });
                c.css({
                    bottom: w
                })
            };
            var z = function() {
                var t, i;
                l.bind("mousedown.perfect-scrollbar", function(e) {
                    i = e.pageX;
                    t = l.position().left;
                    s.addClass("in-scrolling");
                    e.stopPropagation();
                    e.preventDefault()
                });
                e(document).bind("mousemove.perfect-scrollbar", function(e) {
                    if (s.hasClass("in-scrolling")) {
                        O();
                        B(t, e.pageX - i);
                        e.stopPropagation();
                        e.preventDefault()
                    }
                });
                e(document).bind("mouseup.perfect-scrollbar", function(e) {
                    if (s.hasClass("in-scrolling")) {
                        s.removeClass("in-scrolling")
                    }
                });
                t = i = null
            };
            var W = function() {
                var t, i;
                c.bind("mousedown.perfect-scrollbar", function(e) {
                    i = e.pageY;
                    t = P();
                    o.addClass("in-scrolling");
                    e.stopPropagation();
                    e.preventDefault()
                });
                e(document).bind("mousemove.perfect-scrollbar", function(e) {
                    if (o.hasClass("in-scrolling")) {
                        A();
                        V(P(), e.pageY - i);
                        i = e.pageY;
                        e.stopPropagation();
                        e.preventDefault()
                    }
                });
                e(document).bind("mouseup.perfect-scrollbar", function() {
                    if (o.hasClass("in-scrolling")) {
                        o.removeClass("in-scrolling")
                    }
                });
                t = i = null
            };
            var J = function() {
                var e = function(e, t) {
                    var i = a.bottomPositionCSS;
                    if (i === 0 && t > 0 && e === 0) {
                        return !r.wheelPropagation
                    } else if (i >= g - h && t < 0 && e === 0) {
                        return !r.wheelPropagation
                    }
                    var n = a.scrollLeft();
                    if (n === 0 && e < 0 && t === 0) {
                        return !r.wheelPropagation
                    } else if (n >= p - d && e > 0 && t === 0) {
                        return !r.wheelPropagation
                    }
                    return true
                };
                var t = false;
                try {
                    var i = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                        n;
                    if (window.top && window.top.addEventListener && devicejs.safari()) {
                        for (n = i.length; n--;) {
                            window.top.addEventListener(i[n], function() {})
                        }
                    }
                } catch (s) {}
                a.bind("mousewheel.perfect-scrollbar", function(i, n, s, o) {
                    if (!r.useBothWheelAxes) {
                        a.bottomPositionCSS = a.bottomPositionCSS + o * r.wheelSpeed;
                        a.scrollLeft(a.scrollLeft() + s * r.wheelSpeed)
                    } else if (f && !u) {
                        if (o) {
                            a.bottomPositionCSS = a.bottomPositionCSS + o * r.wheelSpeed
                        } else {
                            a.bottomPositionCSS = a.bottomPositionCSS - s * r.wheelSpeed
                        }
                    } else if (u && !f) {
                        if (s) {
                            a.scrollLeft(a.scrollLeft() + s * r.wheelSpeed)
                        } else {
                            a.scrollLeft(a.scrollLeft() - o * r.wheelSpeed)
                        }
                    }
                    F();
                    t = e(s, o);
                    if (t) {
                        i.preventDefault()
                    }
                });
                a.bind("MozMousePixelScroll.perfect-scrollbar", function(e) {
                    if (t) {
                        e.preventDefault()
                    }
                })
            };
            var q = function() {
                var t = function(e, t) {
                    var i = a.bottomPositionCSS;
                    if (i === 0 && t > 0 && e === 0) {
                        return false
                    } else if (i >= g - h && t < 0 && e === 0) {
                        return false
                    }
                    var n = a.scrollLeft();
                    if (n === 0 && e < 0 && t === 0) {
                        return false
                    } else if (n >= p - d && e > 0 && t === 0) {
                        return false
                    }
                    return true
                };
                var i = false;
                a.bind("mouseenter.perfect-scrollbar", function(e) {
                    i = true
                });
                a.bind("mouseleave.perfect-scrollbar", function(e) {
                    i = false
                });
                var n = false;
                e(document).bind("keydown.perfect-scrollbar", function(e) {
                    if (!i) {
                        return
                    }
                    var s = 0,
                        o = 0;
                    switch (e.which) {
                        case 37:
                            s = -3;
                            break;
                        case 38:
                            o = 3;
                            break;
                        case 39:
                            s = 3;
                            break;
                        case 40:
                            o = -3;
                            break;
                        default:
                            return
                    }
                    a.bottomPositionCSS = a.bottomPositionCSS + o * r.wheelSpeed;
                    a.scrollLeft(a.scrollLeft() + s * r.wheelSpeed);
                    F();
                    n = t(s, o);
                    if (n) {
                        e.preventDefault()
                    }
                })
            };
            var U = function() {
                var e = function(e) {
                    e.stopPropagation()
                };
                c.bind("click.perfect-scrollbar", e);
                o.bind("click.perfect-scrollbar", function(e) {
                    var t = parseInt(b / 2, 10),
                        i = e.pageY - o.offset().top - t,
                        n = h - b,
                        r = i / n;
                    if (r < 0) {
                        r = 0
                    } else if (r > 1) {
                        r = 1
                    }
                    a.bottomPositionCSS = (g - h) * r;
                    F()
                });
                l.bind("click.perfect-scrollbar", e);
                s.bind("click.perfect-scrollbar", function(e) {
                    var t = parseInt(v / 2, 10),
                        i = e.pageX - s.offset().left - t,
                        n = d - v,
                        r = i / n;
                    if (r < 0) {
                        r = 0
                    } else if (r > 1) {
                        r = 1
                    }
                    a.scrollLeft((p - d) * r);
                    F()
                })
            };
            var Y = function() {
                var t = function(e, t) {
                    a.bottomPositionCSS = a.bottomPositionCSS + t;
                    a.scrollLeft(a.scrollLeft() - e);
                    F()
                };
                var i = {},
                    n = 0,
                    r = {},
                    s = null,
                    o = false,
                    l = false;
                e(window).bind("touchstart.perfect-scrollbar", function(e) {
                    o = true
                });
                e(window).bind("touchend.perfect-scrollbar", function(e) {
                    o = false
                });
                a.bind("touchstart.perfect-scrollbar", function(e) {
                    var t = e.originalEvent.targetTouches[0];
                    i.pageX = t.pageX;
                    i.pageY = t.pageY;
                    n = (new Date).getTime();
                    if (s !== null) {
                        clearInterval(s)
                    }
                    e.stopPropagation()
                });
                a.bind("touchmove.perfect-scrollbar", function(e) {
                    if (!o && e.originalEvent.targetTouches.length === 1) {
                        var a = e.originalEvent.targetTouches[0];
                        l = true;
                        var s = {};
                        s.pageX = a.pageX;
                        s.pageY = a.pageY;
                        var c = s.pageX - i.pageX,
                            u = s.pageY - i.pageY;
                        t(c, u);
                        i = s;
                        var f = (new Date).getTime();
                        r.x = c / (f - n);
                        r.y = u / (f - n);
                        n = f;
                        if (document.documentElement.style.position === "fixed") {
                            e.preventDefault()
                        }
                    }
                });
                a.bind("touchend.perfect-scrollbar", function(e) {
                    clearInterval(s);
                    if (l) {
                        l = false;
                        s = setInterval(function() {
                            if (Math.abs(r.x) < .01 && Math.abs(r.y) < .01) {
                                clearInterval(s);
                                return
                            }
                            t(r.x * 30, r.y * 30);
                            r.x *= .8;
                            r.y *= .8
                        }, 10)
                    }
                })
            };
            var X = function() {
                a.unbind(".perfect-scrollbar");
                e(window).unbind(".perfect-scrollbar");
                e(document).unbind(".perfect-scrollbar");
                a.data("perfect-scrollbar", null);
                a.data("perfect-scrollbar-update", null);
                a.data("perfect-scrollbar-scroll", null);
                a.data("perfect-scrollbar-destroy", null);
                l.remove();
                c.remove();
                s.remove();
                o.remove();
                l = c = d = h = p = g = v = m = y = b = w = x = null
            };
            var G = function(t) {
                a.addClass("ie").addClass("ie" + t);
                var i = function() {
                    var t = function() {
                        e(this).addClass("hover")
                    };
                    var i = function() {
                        e(this).removeClass("hover")
                    };
                    a.bind("mouseenter.perfect-scrollbar", t).bind("mouseleave.perfect-scrollbar", i);
                    s.bind("mouseenter.perfect-scrollbar", t).bind("mouseleave.perfect-scrollbar", i);
                    o.bind("mouseenter.perfect-scrollbar", t).bind("mouseleave.perfect-scrollbar", i);
                    l.bind("mouseenter.perfect-scrollbar", t).bind("mouseleave.perfect-scrollbar", i);
                    c.bind("mouseenter.perfect-scrollbar", t).bind("mouseleave.perfect-scrollbar", i)
                };
                var n = function() {
                    R = function() {
                        l.css({
                            left: m + a.scrollLeft(),
                            bottom: y,
                            width: v
                        });
                        c.css({
                            bottom: w + a.bottomPositionCSS,
                            right: x,
                            height: b
                        });
                        l.hide().show();
                        c.hide().show()
                    };
                    A = function() {
                        var e = parseInt(w * g / h, 10);
                        a.bottomPositionCSS = parseInt(w * g / h, 10);
                        l.css({
                            bottom: y
                        });
                        l.hide().show()
                    };
                    O = function() {
                        var e = parseInt(m * p / d, 10);
                        a.scrollLeft(e);
                        c.hide().show()
                    }
                };
                if (t === 6) {
                    i();
                    n()
                }
            };
            var Q = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch;
            var Z = function() {
                var e = navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);
                if (e && e[1] === "msie") {
                    G(parseInt(e[2], 10))
                }
                F();
                z();
                W();
                U();
                if (Q) {
                    Y()
                }
                if (a.mousewheel) {
                    J()
                }
                if (r.useKeyboard) {
                    q()
                }
                a.data("perfect-scrollbar", a);
                a.data("perfect-scrollbar-update", F);
                a.data("perfect-scrollbar-scroll", function() {
                    E = 0;
                    w = 0;
                    a.bottomPositionCSS = 0;
                    F(true)
                });
                a.data("perfect-scrollbar-destroy", X)
            };
            Z();
            return a
        })
    }
});
(function(e) {
    e.fn.typing = function(e) {
        return this.each(function(i, n) {
            t(n, e)
        })
    };

    function t(t, i) {
        var n = e.extend({
            start: null,
            stop: null,
            delay: 400
        }, i);
        var r = e(t),
            a = false,
            s;

        function o(e) {
            if (!a) {
                a = true;
                if (n.start) {
                    n.start(e, r)
                }
            }
        }

        function l(e, t) {
            if (a) {
                clearTimeout(s);
                s = setTimeout(function() {
                    a = false;
                    if (n.stop) {
                        n.stop(e, r)
                    }
                }, t >= 0 ? t : n.delay)
            }
        }
        r.keypress(o);
        r.keydown(function(e) {
            if (e.keyCode === 8 || e.keyCode === 46) {
                o(e)
            }
        });
        r.keyup(l);
        r.blur(function(e) {
            l(e, 0)
        })
    }
})(jQuery);
(function(e) {
    e.fn.jivoDragEvent = function(e) {
        return this.each(function(i, n) {
            t(n, e)
        })
    };

    function t(t, i) {
        var n = e.extend({
            "min-height": 300,
            "min-width": 200,
            opacity: .8,
            "out-of-border": true,
            handler: e(),
            tracker: e(),
            console: false
        }, i);
        var r = ".jivo-drag",
            a = e(t),
            s = n.handler,
            o = n.tracker,
            l = e(s.prop("ownerDocument")),
            c = false,
            u = 0,
            f = 0;

        function d(e, t) {
            a.trigger({
                type: e,
                dx: t.screenX - u,
                dy: t.screenY - f
            })
        }

        function h(e) {
            c = false;
            o.hide();
            d("jivo.drag.stop", e);
            l.unbind(r)
        }

        function p(e) {
            e.preventDefault();
            if (!c) {
                h(e)
            }
            d("jivo.drag.move", e)
        }

        function g(e) {
            c = true;
            u = e.screenX;
            f = e.screenY;
            e.preventDefault();
            l.bind("mouseup" + r, h).bind("mousemove" + r, p);
            o.show();
            d("jivo.drag.init", e)
        }
        s.mousedown(g);
        a.bind("jivo.drag.init", function(e) {
            if (n.console) console.log("drag init", e)
        });
        a.bind("jivo.drag.move", function(e) {
            if (n.console) console.log("drag move", e)
        });
        a.bind("jivo.drag.stop", function(e) {
            if (n.console) console.log("drag stop", e)
        })
    }
})(jQuery);
(function(e, t, i) {
    var n = Object.prototype.toString.call(e.operamini) == "[object OperaMini]";
    var r = "placeholder" in t.createElement("input") && !n;
    var a = "placeholder" in t.createElement("textarea") && !n;
    var s = i.fn;
    var o = i.valHooks;
    var l = i.propHooks;
    var c;
    var u;
    if (r && a) {
        u = s.placeholder = function() {
            return this
        };
        u.input = u.textarea = true
    } else {
        u = s.placeholder = function() {
            var e = this;
            e.filter((r ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                "focus.placeholder": d,
                "blur.placeholder": h
            }).data("placeholder-enabled", true).trigger("blur.placeholder");
            return e
        };
        u.input = r;
        u.textarea = a;
        c = {
            get: function(e) {
                var t = i(e);
                var n = t.data("placeholder-password");
                if (n) {
                    return n[0].value
                }
                return t.data("placeholder-enabled") && t.hasClass("placeholder") ? "" : e.value
            },
            set: function(e, t) {
                var n = i(e);
                var r = n.data("placeholder-password");
                if (r) {
                    return r[0].value = t
                }
                if (!n.data("placeholder-enabled")) {
                    return e.value = t
                }
                if (t == "") {
                    e.value = t;
                    if (e != p()) {
                        h.call(e)
                    }
                } else if (n.hasClass("placeholder")) {
                    d.call(e, true, t) || (e.value = t)
                } else {
                    e.value = t
                }
                return n
            }
        };
        if (!r) {
            o.input = c;
            l.value = c
        }
        if (!a) {
            o.textarea = c;
            l.value = c
        }
        i(function() {
            i(t).delegate("form", "submit.placeholder", function() {
                var e = i(".placeholder", this).each(d);
                setTimeout(function() {
                    e.each(h)
                }, 10)
            })
        });
        i(e).bind("beforeunload.placeholder", function() {
            i(".placeholder").each(function() {
                this.value = ""
            })
        })
    }

    function f(e) {
        var t = {};
        var n = /^jQuery\d+$/;
        i.each(e.attributes, function(e, i) {
            if (i.specified && !n.test(i.name)) {
                t[i.name] = i.value
            }
        });
        return t
    }

    function d(e, t) {
        var n = this;
        var r = i(n);
        if (n.value == r.attr("placeholder") && r.hasClass("placeholder")) {
            if (r.data("placeholder-password")) {
                r = r.hide().next().show().attr("id", r.removeAttr("id").data("placeholder-id"));
                if (e === true) {
                    return r[0].value = t
                }
                r.focus()
            } else {
                n.value = "";
                r.removeClass("placeholder");
                n == p() && n.select()
            }
        }
    }

    function h() {
        var e;
        var t = this;
        var n = i(t);
        var r = this.id;
        if (t.value == "") {
            if (t.type == "password") {
                if (!n.data("placeholder-textinput")) {
                    try {
                        e = n.clone().attr({
                            type: "text"
                        })
                    } catch (a) {
                        e = i("<input>").attr(i.extend(f(this), {
                            type: "text"
                        }))
                    }
                    e.removeAttr("name").data({
                        "placeholder-password": n,
                        "placeholder-id": r
                    }).bind("focus.placeholder", d);
                    n.data({
                        "placeholder-textinput": e,
                        "placeholder-id": r
                    }).before(e)
                }
                n = n.removeAttr("id").hide().prev().attr("id", r).show()
            }
            n.addClass("placeholder");
            n[0].value = n.attr("placeholder")
        }
    }

    function p() {
        try {
            return t.activeElement
        } catch (e) {}
    }
})(this, document, jQuery);
(function() {
    var e = this;
    var t = e._;
    var i = {};
    var n = Array.prototype,
        r = Object.prototype,
        a = Function.prototype;
    var s = n.push,
        o = n.slice,
        l = n.concat,
        c = r.toString,
        u = r.hasOwnProperty;
    var f = n.forEach,
        d = n.map,
        h = n.reduce,
        p = n.reduceRight,
        g = n.filter,
        v = n.every,
        m = n.some,
        y = n.indexOf,
        b = n.lastIndexOf,
        w = Array.isArray,
        x = Object.keys,
        _ = false;
    var C = function(e) {
        if (e instanceof C) return e;
        if (!(this instanceof C)) return new C(e);
        this._wrapped = e
    };
    if (typeof exports !== "undefined") {
        if (typeof module !== "undefined" && module.exports) {
            exports = module.exports = C
        }
        exports._ = C
    } else {
        e._ = C
    }
    C.VERSION = "1.4.4";
    var S = C.each = C.forEach = function(e, t, n) {
        if (e == null) return;
        if (f && e.forEach === f) {
            e.forEach(t, n)
        } else if (e.length === +e.length) {
            for (var r = 0, a = e.length; r < a; r++) {
                if (t.call(n, e[r], r, e) === i) return
            }
        } else {
            for (var s in e) {
                if (C.has(e, s)) {
                    if (t.call(n, e[s], s, e) === i) return
                }
            }
        }
    };
    C.map = C.collect = function(e, t, i) {
        var n = [];
        if (e == null) return n;
        if (d && e.map === d) return e.map(t, i);
        S(e, function(e, r, a) {
            n[n.length] = t.call(i, e, r, a)
        });
        return n
    };
    var T = "Reduce of empty array with no initial value";
    C.reduce = C.foldl = C.inject = function(e, t, i, n) {
        var r = arguments.length > 2;
        if (e == null) e = [];
        if (h && e.reduce === h) {
            if (n) t = C.bind(t, n);
            return r ? e.reduce(t, i) : e.reduce(t)
        }
        S(e, function(e, a, s) {
            if (!r) {
                i = e;
                r = true
            } else {
                i = t.call(n, i, e, a, s)
            }
        });
        if (!r) throw new TypeError(T);
        return i
    };
    C.reduceRight = C.foldr = function(e, t, i, n) {
        var r = arguments.length > 2;
        if (e == null) e = [];
        if (p && e.reduceRight === p) {
            if (n) t = C.bind(t, n);
            return r ? e.reduceRight(t, i) : e.reduceRight(t)
        }
        var a = e.length;
        if (a !== +a) {
            var s = C.keys(e);
            a = s.length
        }
        S(e, function(o, l, c) {
            l = s ? s[--a] : --a;
            if (!r) {
                i = e[l];
                r = true
            } else {
                i = t.call(n, i, e[l], l, c)
            }
        });
        if (!r) throw new TypeError(T);
        return i
    };
    C.find = C.detect = function(e, t, i) {
        var n;
        M(e, function(e, r, a) {
            if (t.call(i, e, r, a)) {
                n = e;
                return true
            }
        });
        return n
    };
    C.filter = C.select = function(e, t, i) {
        var n = [];
        if (e == null) return n;
        if (g && e.filter === g) return e.filter(t, i);
        S(e, function(e, r, a) {
            if (t.call(i, e, r, a)) n[n.length] = e
        });
        return n
    };
    C.reject = function(e, t, i) {
        return C.filter(e, function(e, n, r) {
            return !t.call(i, e, n, r)
        }, i)
    };
    C.every = C.all = function(e, t, n) {
        t || (t = C.identity);
        var r = true;
        if (e == null) return r;
        if (v && e.every === v) return e.every(t, n);
        S(e, function(e, a, s) {
            if (!(r = r && t.call(n, e, a, s))) return i
        });
        return !!r
    };
    var M = C.some = C.any = function(e, t, n) {
        t || (t = C.identity);
        var r = false;
        if (e == null) return r;
        if (m && e.some === m) return e.some(t, n);
        S(e, function(e, a, s) {
            if (r || (r = t.call(n, e, a, s))) return i
        });
        return !!r
    };
    C.contains = C.include = function(e, t) {
        if (e == null) return false;
        if (y && e.indexOf === y) return e.indexOf(t) != -1;
        return M(e, function(e) {
            return e === t
        })
    };
    C.invoke = function(e, t) {
        var i = o.call(arguments, 2);
        var n = C.isFunction(t);
        return C.map(e, function(e) {
            return (n ? t : e[t]).apply(e, i)
        })
    };
    C.pluck = function(e, t) {
        return C.map(e, function(e) {
            return e[t]
        })
    };
    C.where = function(e, t, i) {
        if (C.isEmpty(t)) return i ? null : [];
        return C[i ? "find" : "filter"](e, function(e) {
            for (var i in t) {
                if (t[i] !== e[i]) return false
            }
            return true
        })
    };
    C.findWhere = function(e, t) {
        return C.where(e, t, true)
    };
    C.max = function(e, t, i) {
        if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) {
            return Math.max.apply(Math, e)
        }
        if (!t && C.isEmpty(e)) return -Infinity;
        var n = {
            computed: -Infinity,
            value: -Infinity
        };
        S(e, function(e, r, a) {
            var s = t ? t.call(i, e, r, a) : e;
            s >= n.computed && (n = {
                value: e,
                computed: s
            })
        });
        return n.value
    };
    C.min = function(e, t, i) {
        if (!t && C.isArray(e) && e[0] === +e[0] && e.length < 65535) {
            return Math.min.apply(Math, e)
        }
        if (!t && C.isEmpty(e)) return Infinity;
        var n = {
            computed: Infinity,
            value: Infinity
        };
        S(e, function(e, r, a) {
            var s = t ? t.call(i, e, r, a) : e;
            s < n.computed && (n = {
                value: e,
                computed: s
            })
        });
        return n.value
    };
    C.shuffle = function(e) {
        var t;
        var i = 0;
        var n = [];
        S(e, function(e) {
            t = C.random(i++);
            n[i - 1] = n[t];
            n[t] = e
        });
        return n
    };
    var k = function(e) {
        return C.isFunction(e) ? e : function(t) {
            return t[e]
        }
    };
    C.sortBy = function(e, t, i) {
        var n = k(t);
        return C.pluck(C.map(e, function(e, t, r) {
            return {
                value: e,
                index: t,
                criteria: n.call(i, e, t, r)
            }
        }).sort(function(e, t) {
            var i = e.criteria;
            var n = t.criteria;
            if (i !== n) {
                if (i > n || i === void 0) return 1;
                if (i < n || n === void 0) return -1
            }
            return e.index < t.index ? -1 : 1
        }), "value")
    };
    var E = function(e, t, i, n) {
        var r = {};
        var a = k(t || C.identity);
        S(e, function(t, s) {
            var o = a.call(i, t, s, e);
            n(r, o, t)
        });
        return r
    };
    C.groupBy = function(e, t, i) {
        return E(e, t, i, function(e, t, i) {
            (C.has(e, t) ? e[t] : e[t] = []).push(i)
        })
    };
    C.countBy = function(e, t, i) {
        return E(e, t, i, function(e, t) {
            if (!C.has(e, t)) e[t] = 0;
            e[t]++
        })
    };
    C.sortedIndex = function(e, t, i, n) {
        i = i == null ? C.identity : k(i);
        var r = i.call(n, t);
        var a = 0,
            s = e.length;
        while (a < s) {
            var o = a + s >>> 1;
            i.call(n, e[o]) < r ? a = o + 1 : s = o
        }
        return a
    };
    C.toArray = function(e) {
        if (!e) return [];
        if (C.isArray(e)) return o.call(e);
        if (e.length === +e.length) return C.map(e, C.identity);
        return C.values(e)
    };
    C.size = function(e) {
        if (e == null) return 0;
        return e.length === +e.length ? e.length : C.keys(e).length
    };
    C.first = C.head = C.take = function(e, t, i) {
        if (e == null) return void 0;
        return t != null && !i ? o.call(e, 0, t) : e[0]
    };
    C.initial = function(e, t, i) {
        return o.call(e, 0, e.length - (t == null || i ? 1 : t))
    };
    C.last = function(e, t, i) {
        if (e == null) return void 0;
        if (t != null && !i) {
            return o.call(e, Math.max(e.length - t, 0))
        } else {
            return e[e.length - 1]
        }
    };
    C.rest = C.tail = C.drop = function(e, t, i) {
        return o.call(e, t == null || i ? 1 : t)
    };
    C.compact = function(e) {
        return C.filter(e, C.identity)
    };
    var j = function(e, t, i) {
        S(e, function(e) {
            if (C.isArray(e)) {
                t ? s.apply(i, e) : j(e, t, i)
            } else {
                i.push(e)
            }
        });
        return i
    };
    C.flatten = function(e, t) {
        return j(e, t, [])
    };
    C.without = function(e) {
        return C.difference(e, o.call(arguments, 1))
    };
    C.uniq = C.unique = function(e, t, i, n) {
        if (C.isFunction(t)) {
            n = i;
            i = t;
            t = false
        }
        var r = i ? C.map(e, i, n) : e;
        var a = [];
        var s = [];
        S(r, function(i, n) {
            if (t ? !n || s[s.length - 1] !== i : !C.contains(s, i)) {
                s.push(i);
                a.push(e[n])
            }
        });
        return a
    };
    C.union = function() {
        return C.uniq(l.apply(n, arguments))
    };
    C.intersection = function(e) {
        var t = o.call(arguments, 1);
        return C.filter(C.uniq(e), function(e) {
            return C.every(t, function(t) {
                return C.indexOf(t, e) >= 0
            })
        })
    };
    C.difference = function(e) {
        var t = l.apply(n, o.call(arguments, 1));
        return C.filter(e, function(e) {
            return !C.contains(t, e)
        })
    };
    C.zip = function() {
        var e = o.call(arguments);
        var t = C.max(C.pluck(e, "length"));
        var i = new Array(t);
        for (var n = 0; n < t; n++) {
            i[n] = C.pluck(e, "" + n)
        }
        return i
    };
    C.object = function(e, t) {
        if (e == null) return {};
        var i = {};
        for (var n = 0, r = e.length; n < r; n++) {
            if (t) {
                i[e[n]] = t[n]
            } else {
                i[e[n][0]] = e[n][1]
            }
        }
        return i
    };
    C.indexOf = function(e, t, i) {
        if (e == null) return -1;
        var n = 0,
            r = e.length;
        if (i) {
            if (typeof i == "number") {
                n = i < 0 ? Math.max(0, r + i) : i
            } else {
                n = C.sortedIndex(e, t);
                return e[n] === t ? n : -1
            }
        }
        if (y && e.indexOf === y) return e.indexOf(t, i);
        for (; n < r; n++)
            if (e[n] === t) return n;
        return -1
    };
    C.lastIndexOf = function(e, t, i) {
        if (e == null) return -1;
        var n = i != null;
        if (b && e.lastIndexOf === b) {
            return n ? e.lastIndexOf(t, i) : e.lastIndexOf(t)
        }
        var r = n ? i : e.length;
        while (r--)
            if (e[r] === t) return r;
        return -1
    };
    C.range = function(e, t, i) {
        if (arguments.length <= 1) {
            t = e || 0;
            e = 0
        }
        i = arguments[2] || 1;
        var n = Math.max(Math.ceil((t - e) / i), 0);
        var r = 0;
        var a = new Array(n);
        while (r < n) {
            a[r++] = e;
            e += i
        }
        return a
    };
    C.bind = function(e, t) {
        if (e.bind === _ && _) return _.apply(e, o.call(arguments, 1));
        var i = o.call(arguments, 2);
        return function() {
            return e.apply(t, i.concat(o.call(arguments)))
        }
    };
    C.partial = function(e) {
        var t = o.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(o.call(arguments)))
        }
    };
    C.bindAll = function(e) {
        var t = o.call(arguments, 1);
        if (t.length === 0) t = C.functions(e);
        S(t, function(t) {
            e[t] = C.bind(e[t], e)
        });
        return e
    };
    C.memoize = function(e, t) {
        var i = {};
        t || (t = C.identity);
        return function() {
            var n = t.apply(this, arguments);
            return C.has(i, n) ? i[n] : i[n] = e.apply(this, arguments)
        }
    };
    C.delay = function(e, t) {
        var i = o.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, i)
        }, t)
    };
    C.defer = function(e) {
        return C.delay.apply(C, [e, 1].concat(o.call(arguments, 1)))
    };
    C.throttle = function(e, t) {
        var i, n, r, a;
        var s = 0;
        var o = function() {
            s = new Date;
            r = null;
            a = e.apply(i, n)
        };
        return function() {
            var l = new Date;
            var c = t - (l - s);
            i = this;
            n = arguments;
            if (c <= 0) {
                clearTimeout(r);
                r = null;
                s = l;
                a = e.apply(i, n)
            } else if (!r) {
                r = setTimeout(o, c)
            }
            return a
        }
    };
    C.debounce = function(e, t, i) {
        var n, r;
        return function() {
            var a = this,
                s = arguments;
            var o = function() {
                n = null;
                if (!i) r = e.apply(a, s)
            };
            var l = i && !n;
            clearTimeout(n);
            n = setTimeout(o, t);
            if (l) r = e.apply(a, s);
            return r
        }
    };
    C.once = function(e) {
        var t = false,
            i;
        return function() {
            if (t) return i;
            t = true;
            i = e.apply(this, arguments);
            e = null;
            return i
        }
    };
    C.wrap = function(e, t) {
        return function() {
            var i = [e];
            s.apply(i, arguments);
            return t.apply(this, i)
        }
    };
    C.compose = function() {
        var e = arguments;
        return function() {
            var t = arguments;
            for (var i = e.length - 1; i >= 0; i--) {
                t = [e[i].apply(this, t)]
            }
            return t[0]
        }
    };
    C.after = function(e, t) {
        if (e <= 0) return t();
        return function() {
            if (--e < 1) {
                return t.apply(this, arguments)
            }
        }
    };
    C.keys = x || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var i in e)
            if (C.has(e, i)) t[t.length] = i;
        return t
    };
    C.values = function(e) {
        var t = [];
        for (var i in e)
            if (C.has(e, i)) t.push(e[i]);
        return t
    };
    C.pairs = function(e) {
        var t = [];
        for (var i in e)
            if (C.has(e, i)) t.push([i, e[i]]);
        return t
    };
    C.invert = function(e) {
        var t = {};
        for (var i in e)
            if (C.has(e, i)) t[e[i]] = i;
        return t
    };
    C.functions = C.methods = function(e) {
        var t = [];
        for (var i in e) {
            if (C.isFunction(e[i])) t.push(i)
        }
        return t.sort()
    };
    C.extend = function(e) {
        S(o.call(arguments, 1), function(t) {
            if (t) {
                for (var i in t) {
                    e[i] = t[i]
                }
            }
        });
        return e
    };
    C.pick = function(e) {
        var t = {};
        var i = l.apply(n, o.call(arguments, 1));
        S(i, function(i) {
            if (i in e) t[i] = e[i]
        });
        return t
    };
    C.omit = function(e) {
        var t = {};
        var i = l.apply(n, o.call(arguments, 1));
        for (var r in e) {
            if (!C.contains(i, r)) t[r] = e[r]
        }
        return t
    };
    C.defaults = function(e) {
        S(o.call(arguments, 1), function(t) {
            if (t) {
                for (var i in t) {
                    if (e[i] == null) e[i] = t[i]
                }
            }
        });
        return e
    };
    C.clone = function(e) {
        if (!C.isObject(e)) return e;
        return C.isArray(e) ? e.slice() : C.extend({}, e)
    };
    C.tap = function(e, t) {
        t(e);
        return e
    };
    var A = function(e, t, i, n) {
        if (e === t) return e !== 0 || 1 / e == 1 / t;
        if (e == null || t == null) return e === t;
        if (e instanceof C) e = e._wrapped;
        if (t instanceof C) t = t._wrapped;
        var r = c.call(e);
        if (r != c.call(t)) return false;
        switch (r) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : e == 0 ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if (typeof e != "object" || typeof t != "object") return false;
        var a = i.length;
        while (a--) {
            if (i[a] == e) return n[a] == t
        }
        i.push(e);
        n.push(t);
        var s = 0,
            o = true;
        if (r == "[object Array]") {
            s = e.length;
            o = s == t.length;
            if (o) {
                while (s--) {
                    if (!(o = A(e[s], t[s], i, n))) break
                }
            }
        } else {
            var l = e.constructor,
                u = t.constructor;
            if (l !== u && !(C.isFunction(l) && l instanceof l && C.isFunction(u) && u instanceof u)) {
                return false
            }
            for (var f in e) {
                if (C.has(e, f)) {
                    s++;
                    if (!(o = C.has(t, f) && A(e[f], t[f], i, n))) break
                }
            }
            if (o) {
                for (f in t) {
                    if (C.has(t, f) && !s--) break
                }
                o = !s
            }
        }
        i.pop();
        n.pop();
        return o
    };
    C.isEqual = function(e, t) {
        return A(e, t, [], [])
    };
    C.isEmpty = function(e) {
        if (e == null) return true;
        if (C.isArray(e) || C.isString(e)) return e.length === 0;
        for (var t in e)
            if (C.has(e, t)) return false;
        return true
    };
    C.isElement = function(e) {
        return !!(e && e.nodeType === 1)
    };
    C.isArray = w || function(e) {
        return c.call(e) == "[object Array]"
    };
    C.isObject = function(e) {
        return e === Object(e)
    };
    S(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(e) {
        C["is" + e] = function(t) {
            return c.call(t) == "[object " + e + "]"
        }
    });
    if (!C.isArguments(arguments)) {
        C.isArguments = function(e) {
            return !!(e && C.has(e, "callee"))
        }
    }
    if (typeof /./ !== "function") {
        C.isFunction = function(e) {
            return typeof e === "function"
        }
    }
    C.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    };
    C.isNaN = function(e) {
        return C.isNumber(e) && e != +e
    };
    C.isBoolean = function(e) {
        return e === true || e === false || c.call(e) == "[object Boolean]"
    };
    C.isNull = function(e) {
        return e === null
    };
    C.isUndefined = function(e) {
        return e === void 0
    };
    C.has = function(e, t) {
        return u.call(e, t)
    };
    C.noConflict = function() {
        e._ = t;
        return this
    };
    C.identity = function(e) {
        return e
    };
    C.times = function(e, t, i) {
        var n = Array(e);
        for (var r = 0; r < e; r++) n[r] = t.call(i, r);
        return n
    };
    C.random = function(e, t) {
        if (t == null) {
            t = e;
            e = 0
        }
        return e + Math.floor(Math.random() * (t - e + 1))
    };
    var N = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    N.unescape = C.invert(N.escape);
    var I = {
        escape: new RegExp("[" + C.keys(N.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + C.keys(N.unescape).join("|") + ")", "g")
    };
    C.each(["escape", "unescape"], function(e) {
        C[e] = function(t) {
            if (t == null) return "";
            return ("" + t).replace(I[e], function(t) {
                return N[e][t]
            })
        }
    });
    C.result = function(e, t) {
        if (e == null) return null;
        var i = e[t];
        return C.isFunction(i) ? i.call(e) : i
    };
    C.mixin = function(e) {
        S(C.functions(e), function(t) {
            var i = C[t] = e[t];
            C.prototype[t] = function() {
                var e = [this._wrapped];
                s.apply(e, arguments);
                return D.call(this, i.apply(C, e))
            }
        })
    };
    var P = 0;
    C.uniqueId = function(e) {
        var t = ++P + "";
        return e ? e + t : t
    };
    C.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var O = /(.)^/;
    var H = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    };
    var L = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    C.template = function(e, t, i) {
        var n;
        i = C.defaults({}, i, C.templateSettings);
        var r = new RegExp([(i.escape || O).source, (i.interpolate || O).source, (i.evaluate || O).source].join("|") + "|$", "g");
        var a = 0;
        var s = "__p+='";
        e.replace(r, function(t, i, n, r, o) {
            s += e.slice(a, o).replace(L, function(e) {
                return "\\" + H[e]
            });
            if (i) {
                s += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'"
            }
            if (n) {
                s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"
            }
            if (r) {
                s += "';\n" + r + "\n__p+='"
            }
            a = o + t.length;
            return t
        });
        s += "';\n";
        if (!i.variable) s = "with(obj||{}){\n" + s + "}\n";
        s = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            n = new Function(i.variable || "obj", "_", s)
        } catch (o) {
            o.source = s;
            throw o
        }
        if (t) return n(t, C);
        var l = function(e) {
            return n.call(this, e, C)
        };
        l.source = "function(" + (i.variable || "obj") + "){\n" + s + "}";
        return l
    };
    C.chain = function(e) {
        return C(e).chain()
    };
    var D = function(e) {
        return this._chain ? C(e).chain() : e
    };
    C.mixin(C);
    S(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
        var t = n[e];
        C.prototype[e] = function() {
            var i = this._wrapped;
            t.apply(i, arguments);
            if ((e == "shift" || e == "splice") && i.length === 0) delete i[0];
            return D.call(this, i)
        }
    });
    S(["concat", "join", "slice"], function(e) {
        var t = n[e];
        C.prototype[e] = function() {
            return D.call(this, t.apply(this._wrapped, arguments))
        }
    });
    C.extend(C.prototype, {
        chain: function() {
            this._chain = true;
            return this
        },
        value: function() {
            return this._wrapped
        }
    })
}).call(this);
(function() {
    var e = this;
    var t = e.Backbone;
    var i = [];
    var n = i.push;
    var r = i.slice;
    var a = i.splice;
    var s;
    if (typeof exports !== "undefined") {
        s = exports
    } else {
        s = e.Backbone = {}
    }
    s.VERSION = "1.0.0";
    var o = e._;
    if (!o && typeof require !== "undefined") o = require("underscore");
    s.$ = e.jQuery || e.Zepto || e.ender || e.$;
    s.noConflict = function() {
        e.Backbone = t;
        return this
    };
    s.emulateHTTP = false;
    s.emulateJSON = false;
    var l = s.Events = {
        on: function(e, t, i) {
            if (!u(this, "on", e, [t, i]) || !t) return this;
            this._events || (this._events = {});
            var n = this._events[e] || (this._events[e] = []);
            n.push({
                callback: t,
                context: i,
                ctx: i || this
            });
            return this
        },
        once: function(e, t, i) {
            if (!u(this, "once", e, [t, i]) || !t) return this;
            var n = this;
            var r = o.once(function() {
                n.off(e, r);
                t.apply(this, arguments)
            });
            r._callback = t;
            return this.on(e, r, i)
        },
        off: function(e, t, i) {
            var n, r, a, s, l, c, f, d;
            if (!this._events || !u(this, "off", e, [t, i])) return this;
            if (!e && !t && !i) {
                this._events = {};
                return this
            }
            s = e ? [e] : o.keys(this._events);
            for (l = 0, c = s.length; l < c; l++) {
                e = s[l];
                if (a = this._events[e]) {
                    this._events[e] = n = [];
                    if (t || i) {
                        for (f = 0, d = a.length; f < d; f++) {
                            r = a[f];
                            if (t && t !== r.callback && t !== r.callback._callback || i && i !== r.context) {
                                n.push(r)
                            }
                        }
                    }
                    if (!n.length) delete this._events[e]
                }
            }
            return this
        },
        trigger: function(e) {
            if (!this._events) return this;
            var t = r.call(arguments, 1);
            if (!u(this, "trigger", e, t)) return this;
            var i = this._events[e];
            var n = this._events.all;
            if (i) f(i, t);
            if (n) f(n, arguments);
            return this
        },
        stopListening: function(e, t, i) {
            var n = this._listeners;
            if (!n) return this;
            var r = !t && !i;
            if (typeof t === "object") i = this;
            if (e)(n = {})[e._listenerId] = e;
            for (var a in n) {
                n[a].off(t, i, this);
                if (r) delete this._listeners[a]
            }
            return this
        }
    };
    var c = /\s+/;
    var u = function(e, t, i, n) {
        if (!i) return true;
        if (typeof i === "object") {
            for (var r in i) {
                e[t].apply(e, [r, i[r]].concat(n))
            }
            return false
        }
        if (c.test(i)) {
            var a = i.split(c);
            for (var s = 0, o = a.length; s < o; s++) {
                e[t].apply(e, [a[s]].concat(n))
            }
            return false
        }
        return true
    };
    var f = function(e, t) {
        var i, n = -1,
            r = e.length,
            a = t[0],
            s = t[1],
            o = t[2];
        switch (t.length) {
            case 0:
                while (++n < r)(i = e[n]).callback.call(i.ctx);
                return;
            case 1:
                while (++n < r)(i = e[n]).callback.call(i.ctx, a);
                return;
            case 2:
                while (++n < r)(i = e[n]).callback.call(i.ctx, a, s);
                return;
            case 3:
                while (++n < r)(i = e[n]).callback.call(i.ctx, a, s, o);
                return;
            default:
                while (++n < r)(i = e[n]).callback.apply(i.ctx, t)
        }
    };
    var d = {
        listenTo: "on",
        listenToOnce: "once"
    };
    o.each(d, function(e, t) {
        l[t] = function(t, i, n) {
            var r = this._listeners || (this._listeners = {});
            var a = t._listenerId || (t._listenerId = o.uniqueId("l"));
            r[a] = t;
            if (typeof i === "object") n = this;
            t[e](i, n, this);
            return this
        }
    });
    l.bind = l.on;
    l.unbind = l.off;
    o.extend(s, l);
    var h = s.Model = function(e, t) {
        var i;
        var n = e || {};
        t || (t = {});
        this.cid = o.uniqueId("c");
        this.attributes = {};
        o.extend(this, o.pick(t, p));
        if (t.parse) n = this.parse(n, t) || {};
        if (i = o.result(this, "defaults")) {
            n = o.defaults({}, n, i)
        }
        this.set(n, t);
        this.changed = {};
        this.initialize.apply(this, arguments)
    };
    var p = ["url", "urlRoot", "collection"];
    o.extend(h.prototype, l, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return o.clone(this.attributes)
        },
        sync: function() {
            return s.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return o.escape(this.get(e))
        },
        has: function(e) {
            return this.get(e) != null
        },
        set: function(e, t, i) {
            var n, r, a, s, l, c, u, f;
            if (e == null) return this;
            if (typeof e === "object") {
                r = e;
                i = t
            } else {
                (r = {})[e] = t
            }
            i || (i = {});
            if (!this._validate(r, i)) return false;
            a = i.unset;
            l = i.silent;
            s = [];
            c = this._changing;
            this._changing = true;
            if (!c) {
                this._previousAttributes = o.clone(this.attributes);
                this.changed = {}
            }
            f = this.attributes, u = this._previousAttributes;
            if (this.idAttribute in r) this.id = r[this.idAttribute];
            for (n in r) {
                t = r[n];
                if (!o.isEqual(f[n], t)) s.push(n);
                if (!o.isEqual(u[n], t)) {
                    this.changed[n] = t
                } else {
                    delete this.changed[n]
                }
                a ? delete f[n] : f[n] = t
            }
            if (!l) {
                if (s.length) this._pending = true;
                for (var d = 0, h = s.length; d < h; d++) {
                    this.trigger("change:" + s[d], this, f[s[d]], i)
                }
            }
            if (c) return this;
            if (!l) {
                while (this._pending) {
                    this._pending = false;
                    this.trigger("change", this, i)
                }
            }
            this._pending = false;
            this._changing = false;
            return this
        },
        unset: function(e, t) {
            return this.set(e, void 0, o.extend({}, t, {
                unset: true
            }))
        },
        clear: function(e) {
            var t = {};
            for (var i in this.attributes) t[i] = void 0;
            return this.set(t, o.extend({}, e, {
                unset: true
            }))
        },
        hasChanged: function(e) {
            if (e == null) return !o.isEmpty(this.changed);
            return o.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e) return this.hasChanged() ? o.clone(this.changed) : false;
            var t, i = false;
            var n = this._changing ? this._previousAttributes : this.attributes;
            for (var r in e) {
                if (o.isEqual(n[r], t = e[r])) continue;
                (i || (i = {}))[r] = t
            }
            return i
        },
        previous: function(e) {
            if (e == null || !this._previousAttributes) return null;
            return this._previousAttributes[e]
        },
        previousAttributes: function() {
            return o.clone(this._previousAttributes)
        },
        fetch: function(e) {
            e = e ? o.clone(e) : {};
            if (e.parse === void 0) e.parse = true;
            var t = this;
            var i = e.success;
            e.success = function(n) {
                if (!t.set(t.parse(n, e), e)) return false;
                if (i) i(t, n, e);
                t.trigger("sync", t, n, e)
            };
            D(this, e);
            return this.sync("read", this, e)
        },
        save: function(e, t, i) {
            var n, r, a, s = this.attributes;
            if (e == null || typeof e === "object") {
                n = e;
                i = t
            } else {
                (n = {})[e] = t
            }
            if (n && (!i || !i.wait) && !this.set(n, i)) return false;
            i = o.extend({
                validate: true
            }, i);
            if (!this._validate(n, i)) return false;
            if (n && i.wait) {
                this.attributes = o.extend({}, s, n)
            }
            if (i.parse === void 0) i.parse = true;
            var l = this;
            var c = i.success;
            i.success = function(e) {
                l.attributes = s;
                var t = l.parse(e, i);
                if (i.wait) t = o.extend(n || {}, t);
                if (o.isObject(t) && !l.set(t, i)) {
                    return false
                }
                if (c) c(l, e, i);
                l.trigger("sync", l, e, i)
            };
            D(this, i);
            r = this.isNew() ? "create" : i.patch ? "patch" : "update";
            if (r === "patch") i.attrs = n;
            a = this.sync(r, this, i);
            if (n && i.wait) this.attributes = s;
            return a
        },
        destroy: function(e) {
            e = e ? o.clone(e) : {};
            var t = this;
            var i = e.success;
            var n = function() {
                t.trigger("destroy", t, t.collection, e)
            };
            e.success = function(r) {
                if (e.wait || t.isNew()) n();
                if (i) i(t, r, e);
                if (!t.isNew()) t.trigger("sync", t, r, e)
            };
            if (this.isNew()) {
                e.success();
                return false
            }
            D(this, e);
            var r = this.sync("delete", this, e);
            if (!e.wait) n();
            return r
        },
        url: function() {
            var e = o.result(this, "urlRoot") || o.result(this.collection, "url") || L();
            if (this.isNew()) return e;
            return e + (e.charAt(e.length - 1) === "/" ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return this.id == null
        },
        isValid: function(e) {
            return this._validate({}, o.extend(e || {}, {
                validate: true
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate) return true;
            e = o.extend({}, this.attributes, e);
            var i = this.validationError = this.validate(e, t) || null;
            if (!i) return true;
            this.trigger("invalid", this, i, o.extend(t || {}, {
                validationError: i
            }));
            return false
        }
    });
    var g = ["keys", "values", "pairs", "invert", "pick", "omit"];
    o.each(g, function(e) {
        h.prototype[e] = function() {
            var t = r.call(arguments);
            t.unshift(this.attributes);
            return o[e].apply(o, t)
        }
    });
    var v = s.Collection = function(e, t) {
        t || (t = {});
        if (t.url) this.url = t.url;
        if (t.model) this.model = t.model;
        if (t.comparator !== void 0) this.comparator = t.comparator;
        this._reset();
        this.initialize.apply(this, arguments);
        if (e) this.reset(e, o.extend({
            silent: true
        }, t))
    };
    var m = {
        add: true,
        remove: true,
        merge: true
    };
    var y = {
        add: true,
        merge: false,
        remove: false
    };
    o.extend(v.prototype, l, {
        model: h,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },
        sync: function() {
            return s.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, o.defaults(t || {}, y))
        },
        remove: function(e, t) {
            e = o.isArray(e) ? e.slice() : [e];
            t || (t = {});
            var i, n, r, a;
            for (i = 0, n = e.length; i < n; i++) {
                a = this.get(e[i]);
                if (!a) continue;
                delete this._byId[a.id];
                delete this._byId[a.cid];
                r = this.indexOf(a);
                this.models.splice(r, 1);
                this.length--;
                if (!t.silent) {
                    t.index = r;
                    a.trigger("remove", a, this, t)
                }
                this._removeReference(a)
            }
            return this
        },
        set: function(e, t) {
            t = o.defaults(t || {}, m);
            if (t.parse) e = this.parse(e, t);
            if (!o.isArray(e)) e = e ? [e] : [];
            var i, r, s, l, c, u;
            var f = t.at;
            var d = this.comparator && f == null && t.sort !== false;
            var h = o.isString(this.comparator) ? this.comparator : null;
            var p = [],
                g = [],
                v = {};
            for (i = 0, r = e.length; i < r; i++) {
                if (!(s = this._prepareModel(e[i], t))) continue;
                if (c = this.get(s)) {
                    if (t.remove) v[c.cid] = true;
                    if (t.merge) {
                        c.set(s.attributes, t);
                        if (d && !u && c.hasChanged(h)) u = true
                    }
                } else if (t.add) {
                    p.push(s);
                    s.on("all", this._onModelEvent, this);
                    this._byId[s.cid] = s;
                    if (s.id != null) this._byId[s.id] = s
                }
            }
            if (t.remove) {
                for (i = 0, r = this.length; i < r; ++i) {
                    if (!v[(s = this.models[i]).cid]) g.push(s)
                }
                if (g.length) this.remove(g, t)
            }
            if (p.length) {
                if (d) u = true;
                this.length += p.length;
                if (f != null) {
                    a.apply(this.models, [f, 0].concat(p))
                } else {
                    n.apply(this.models, p)
                }
            }
            if (u) this.sort({
                silent: true
            });
            if (t.silent) return this;
            for (i = 0, r = p.length; i < r; i++) {
                (s = p[i]).trigger("add", s, this, t)
            }
            if (u) this.trigger("sort", this, t);
            return this
        },
        reset: function(e, t) {
            t || (t = {});
            for (var i = 0, n = this.models.length; i < n; i++) {
                this._removeReference(this.models[i])
            }
            t.previousModels = this.models;
            this._reset();
            this.add(e, o.extend({
                silent: true
            }, t));
            if (!t.silent) this.trigger("reset", this, t);
            return this
        },
        push: function(e, t) {
            e = this._prepareModel(e, t);
            this.add(e, o.extend({
                at: this.length
            }, t));
            return e
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            this.remove(t, e);
            return t
        },
        unshift: function(e, t) {
            e = this._prepareModel(e, t);
            this.add(e, o.extend({
                at: 0
            }, t));
            return e
        },
        shift: function(e) {
            var t = this.at(0);
            this.remove(t, e);
            return t
        },
        slice: function(e, t) {
            return this.models.slice(e, t)
        },
        get: function(e) {
            if (e == null) return void 0;
            return this._byId[e.id != null ? e.id : e.cid || e]
        },
        at: function(e) {
            return this.models[e]
        },
        where: function(e, t) {
            if (o.isEmpty(e)) return t ? void 0 : [];
            return this[t ? "find" : "filter"](function(t) {
                for (var i in e) {
                    if (e[i] !== t.get(i)) return false
                }
                return true
            })
        },
        findWhere: function(e) {
            return this.where(e, true)
        },
        sort: function(e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            e || (e = {});
            if (o.isString(this.comparator) || this.comparator.length === 1) {
                this.models = this.sortBy(this.comparator, this)
            } else {
                this.models.sort(o.bind(this.comparator, this))
            }
            if (!e.silent) this.trigger("sort", this, e);
            return this
        },
        sortedIndex: function(e, t, i) {
            t || (t = this.comparator);
            var n = o.isFunction(t) ? t : function(e) {
                return e.get(t)
            };
            return o.sortedIndex(this.models, e, n, i)
        },
        pluck: function(e) {
            return o.invoke(this.models, "get", e)
        },
        fetch: function(e) {
            e = e ? o.clone(e) : {};
            if (e.parse === void 0) e.parse = true;
            var t = e.success;
            var i = this;
            e.success = function(n) {
                var r = e.reset ? "reset" : "set";
                i[r](n, e);
                if (t) t(i, n, e);
                i.trigger("sync", i, n, e)
            };
            D(this, e);
            return this.sync("read", this, e)
        },
        create: function(e, t) {
            t = t ? o.clone(t) : {};
            if (!(e = this._prepareModel(e, t))) return false;
            if (!t.wait) this.add(e, t);
            var i = this;
            var n = t.success;
            t.success = function(r) {
                if (t.wait) i.add(e, t);
                if (n) n(e, r, t)
            };
            e.save(null, t);
            return e
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0;
            this.models = [];
            this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (e instanceof h) {
                if (!e.collection) e.collection = this;
                return e
            }
            t || (t = {});
            t.collection = this;
            var i = new this.model(e, t);
            if (!i._validate(e, t)) {
                this.trigger("invalid", this, e, t);
                return false
            }
            return i
        },
        _removeReference: function(e) {
            if (this === e.collection) delete e.collection;
            e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, i, n) {
            if ((e === "add" || e === "remove") && i !== this) return;
            if (e === "destroy") this.remove(t, n);
            if (t && e === "change:" + t.idAttribute) {
                delete this._byId[t.previous(t.idAttribute)];
                if (t.id != null) this._byId[t.id] = t
            }
            this.trigger.apply(this, arguments)
        }
    });
    var b = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
    o.each(b, function(e) {
        v.prototype[e] = function() {
            var t = r.call(arguments);
            t.unshift(this.models);
            return o[e].apply(o, t)
        }
    });
    var w = ["groupBy", "countBy", "sortBy"];
    o.each(w, function(e) {
        v.prototype[e] = function(t, i) {
            var n = o.isFunction(t) ? t : function(e) {
                return e.get(t)
            };
            return o[e](this.models, n, i)
        }
    });
    var x = s.View = function(e) {
        this.cid = o.uniqueId("view");
        this._configure(e || {});
        this._ensureElement();
        this.initialize.apply(this, arguments);
        this.delegateEvents()
    };
    var _ = /^(\S+)\s*(.*)$/;
    var C = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    o.extend(x.prototype, l, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            this.$el.remove();
            this.stopListening();
            return this
        },
        setElement: function(e, t) {
            if (this.$el) this.undelegateEvents();
            this.$el = e instanceof s.$ ? e : s.$(e);
            this.el = this.$el[0];
            if (t !== false) this.delegateEvents();
            return this
        },
        delegateEvents: function(e) {
            if (!(e || (e = o.result(this, "events")))) return this;
            this.undelegateEvents();
            for (var t in e) {
                var i = e[t];
                if (!o.isFunction(i)) i = this[e[t]];
                if (!i) continue;
                var n = t.match(_);
                var r = n[1],
                    a = n[2];
                i = o.bind(i, this);
                r += ".delegateEvents" + this.cid;
                if (a === "") {
                    this.$el.on(r, i)
                } else {
                    this.$el.on(r, a, i)
                }
            }
            return this
        },
        undelegateEvents: function() {
            this.$el.off(".delegateEvents" + this.cid);
            return this
        },
        _configure: function(e) {
            if (this.options) e = o.extend({}, o.result(this, "options"), e);
            o.extend(this, o.pick(e, C));
            this.options = e
        },
        _ensureElement: function() {
            if (!this.el) {
                var e = o.extend({}, o.result(this, "attributes"));
                if (this.id) e.id = o.result(this, "id");
                if (this.className) e["class"] = o.result(this, "className");
                var t = s.$("<" + o.result(this, "tagName") + ">").attr(e);
                this.setElement(t, false)
            } else {
                this.setElement(o.result(this, "el"), false)
            }
        }
    });
    s.sync = function(e, t, i) {
        var n = S[e];
        o.defaults(i || (i = {}), {
            emulateHTTP: s.emulateHTTP,
            emulateJSON: s.emulateJSON
        });
        var r = {
            type: n,
            dataType: "json"
        };
        if (!i.url) {
            r.url = o.result(t, "url") || L()
        }
        if (i.data == null && t && (e === "create" || e === "update" || e === "patch")) {
            r.contentType = "application/json";
            r.data = JSON.stringify(i.attrs || t.toJSON(i))
        }
        if (i.emulateJSON) {
            r.contentType = "application/x-www-form-urlencoded";
            r.data = r.data ? {
                model: r.data
            } : {}
        }
        if (i.emulateHTTP && (n === "PUT" || n === "DELETE" || n === "PATCH")) {
            r.type = "POST";
            if (i.emulateJSON) r.data._method = n;
            var a = i.beforeSend;
            i.beforeSend = function(e) {
                e.setRequestHeader("X-HTTP-Method-Override", n);
                if (a) return a.apply(this, arguments)
            }
        }
        if (r.type !== "GET" && !i.emulateJSON) {
            r.processData = false
        }
        if (r.type === "PATCH" && window.ActiveXObject && !(window.external && window.external.msActiveXFilteringEnabled)) {
            r.xhr = function() {
                return new ActiveXObject("Microsoft.XMLHTTP")
            }
        }
        var l = i.xhr = s.ajax(o.extend(r, i));
        t.trigger("request", t, l, i);
        return l
    };
    var S = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    s.ajax = function() {
        return s.$.ajax.apply(s.$, arguments)
    };
    var T = s.Router = function(e) {
        e || (e = {});
        if (e.routes) this.routes = e.routes;
        this._bindRoutes();
        this.initialize.apply(this, arguments)
    };
    var M = /\((.*?)\)/g;
    var k = /(\(\?)?:\w+/g;
    var E = /\*\w+/g;
    var j = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    o.extend(T.prototype, l, {
        initialize: function() {},
        route: function(e, t, i) {
            if (!o.isRegExp(e)) e = this._routeToRegExp(e);
            if (o.isFunction(t)) {
                i = t;
                t = ""
            }
            if (!i) i = this[t];
            var n = this;
            s.history.route(e, function(r) {
                var a = n._extractParameters(e, r);
                i && i.apply(n, a);
                n.trigger.apply(n, ["route:" + t].concat(a));
                n.trigger("route", t, a);
                s.history.trigger("route", n, t, a)
            });
            return this
        },
        navigate: function(e, t) {
            s.history.navigate(e, t);
            return this
        },
        _bindRoutes: function() {
            if (!this.routes) return;
            this.routes = o.result(this, "routes");
            var e, t = o.keys(this.routes);
            while ((e = t.pop()) != null) {
                this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            e = e.replace(j, "\\$&").replace(M, "(?:$1)?").replace(k, function(e, t) {
                return t ? e : "([^/]+)"
            }).replace(E, "(.*?)");
            return new RegExp("^" + e + "$")
        },
        _extractParameters: function(e, t) {
            var i = e.exec(t).slice(1);
            return o.map(i, function(e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var A = s.History = function() {
        this.handlers = [];
        o.bindAll(this, "checkUrl");
        if (typeof window !== "undefined") {
            this.location = window.location;
            this.history = window.history
        }
    };
    var N = /^[#\/]|\s+$/g;
    var I = /^\/+|\/+$/g;
    var P = /msie [\w.]+/;
    var O = /\/$/;
    A.started = false;
    o.extend(A.prototype, l, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function(e, t) {
            if (e == null) {
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var i = this.root.replace(O, "");
                    if (!e.indexOf(i)) e = e.substr(i.length)
                } else {
                    e = this.getHash()
                }
            }
            return e.replace(N, "")
        },
        start: function(e) {
            if (A.started) throw new Error("Backbone.history has already been started");
            A.started = true;
            this.options = o.extend({}, {
                root: "/"
            }, this.options, e);
            this.root = this.options.root;
            this._wantsHashChange = this.options.hashChange !== false;
            this._wantsPushState = !!this.options.pushState;
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment();
            var i = document.documentMode;
            var n = P.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
            this.root = ("/" + this.root + "/").replace(I, "/");
            if (n && this._wantsHashChange) {
                this.iframe = s.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
                this.navigate(t)
            }
            if (this._hasPushState) {
                s.$(window).on("popstate", this.checkUrl)
            } else if (this._wantsHashChange && "onhashchange" in window && !n) {
                s.$(window).on("hashchange", this.checkUrl)
            } else if (this._wantsHashChange) {
                this._checkUrlInterval = setInterval(this.checkUrl, this.interval)
            }
            this.fragment = t;
            var r = this.location;
            var a = r.pathname.replace(/[^\/]$/, "$&/") === this.root;
            if (this._wantsHashChange && this._wantsPushState && !this._hasPushState && !a) {
                this.fragment = this.getFragment(null, true);
                this.location.replace(this.root + this.location.search + "#" + this.fragment);
                return true
            } else if (this._wantsPushState && this._hasPushState && a && r.hash) {
                this.fragment = this.getHash().replace(N, "");
                this.history.replaceState({}, document.title, this.root + this.fragment + r.search)
            }
            if (!this.options.silent) return this.loadUrl()
        },
        stop: function() {
            s.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl);
            clearInterval(this._checkUrlInterval);
            A.started = false
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            if (t === this.fragment && this.iframe) {
                t = this.getFragment(this.getHash(this.iframe))
            }
            if (t === this.fragment) return false;
            if (this.iframe) this.navigate(t);
            this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e);
            var i = o.any(this.handlers, function(e) {
                if (e.route.test(t)) {
                    e.callback(t);
                    return true
                }
            });
            return i
        },
        navigate: function(e, t) {
            if (!A.started) return false;
            if (!t || t === true) t = {
                trigger: t
            };
            e = this.getFragment(e || "");
            if (this.fragment === e) return;
            this.fragment = e;
            var i = this.root + e;
            if (this._hasPushState) {
                this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i)
            } else if (this._wantsHashChange) {
                this._updateHash(this.location, e, t.replace);
                if (this.iframe && e !== this.getFragment(this.getHash(this.iframe))) {
                    if (!t.replace) this.iframe.document.open().close();
                    this._updateHash(this.iframe.location, e, t.replace)
                }
            } else {
                return this.location.assign(i)
            }
            if (t.trigger) this.loadUrl(e)
        },
        _updateHash: function(e, t, i) {
            if (i) {
                var n = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(n + "#" + t)
            } else {
                e.hash = "#" + t
            }
        }
    });
    s.history = new A;
    var H = function(e, t) {
        var i = this;
        var n;
        if (e && o.has(e, "constructor")) {
            n = e.constructor
        } else {
            n = function() {
                return i.apply(this, arguments)
            }
        }
        o.extend(n, i, t);
        var r = function() {
            this.constructor = n
        };
        r.prototype = i.prototype;
        n.prototype = new r;
        if (e) o.extend(n.prototype, e);
        n.__super__ = i.prototype;
        return n
    };
    h.extend = v.extend = T.extend = x.extend = A.extend = H;
    var L = function() {
        throw new Error('A "url" property or function must be specified')
    };
    var D = function(e, t) {
        var i = t.error;
        t.error = function(n) {
            if (i) i(e, n, t);
            e.trigger("error", e, n, t)
        }
    }
}).call(this);
(function(e) {
    e(_, Backbone)
})(function(e, t) {
    function i(t) {
        var n = {},
            r = s.keyPathSeparator;
        for (var a in t) {
            var o = t[a];
            if (o && o.constructor === Object && !e.isEmpty(o)) {
                var l = i(o);
                for (var c in l) {
                    var u = l[c];
                    n[a + r + c] = u
                }
            } else {
                n[a] = o
            }
        }
        return n
    }

    function n(t, i, n) {
        var r = s.keyPathSeparator;
        var a = i.split(r);
        var o = t;
        n || n === false;
        for (var l = 0, c = a.length; l < c; l++) {
            if (n && !e.has(o, a[l])) {
                return false
            }
            o = o[a[l]];
            if (o == null && l < c - 1) {
                o = {}
            }
            if (typeof o === "undefined") {
                if (n) {
                    return true
                }
                return o
            }
        }
        if (n) {
            return true
        }
        return o
    }

    function r(t, i, n, r) {
        r = r || {};
        var a = s.keyPathSeparator;
        var o = i.split(a);
        var l = t;
        for (var c = 0, u = o.length; c < u && l !== undefined; c++) {
            var f = o[c];
            if (c === u - 1) {
                r.unset ? delete l[f] : l[f] = n
            } else {
                if (typeof l[f] === "undefined" || !e.isObject(l[f])) {
                    l[f] = {}
                }
                l = l[f]
            }
        }
    }

    function a(e, t) {
        r(e, t, null, {
            unset: true
        })
    }
    var s = t.Model.extend({
        constructor: function(t, i) {
            var n;
            var r = t || {};
            this.cid = e.uniqueId("c");
            this.attributes = {};
            if (i && i.collection) this.collection = i.collection;
            if (i && i.parse) r = this.parse(r, i) || {};
            if (n = e.result(this, "defaults")) {
                r = e.deepExtend({}, n, r)
            }
            this.set(r, i);
            this.changed = {};
            this.initialize.apply(this, arguments)
        },
        toJSON: function(t) {
            return e.deepClone(this.attributes)
        },
        get: function(e) {
            return n(this.attributes, e)
        },
        set: function(t, o, l) {
            var c, u, f, d, h, p, g, v;
            if (t == null) return this;
            if (typeof t === "object") {
                u = t;
                l = o || {}
            } else {
                (u = {})[t] = o
            }
            l || (l = {});
            if (!this._validate(u, l)) return false;
            f = l.unset;
            h = l.silent;
            d = [];
            p = this._changing;
            this._changing = true;
            if (!p) {
                this._previousAttributes = e.deepClone(this.attributes);
                this.changed = {}
            }
            v = this.attributes, g = this._previousAttributes;
            if (this.idAttribute in u) this.id = u[this.idAttribute];
            u = i(u);
            for (c in u) {
                o = u[c];
                if (!e.isEqual(n(v, c), o)) d.push(c);
                if (!e.isEqual(n(g, c), o)) {
                    r(this.changed, c, o)
                } else {
                    a(this.changed, c)
                }
                f ? a(v, c) : r(v, c, o)
            }
            if (!h) {
                if (d.length) this._pending = true;
                var m = s.keyPathSeparator;
                var y = {};
                for (var b = 0, w = d.length; b < w; b++) {
                    var t = d[b];
                    if (!y.hasOwnProperty(t) || !y[t]) {
                        y[t] = true;
                        this.trigger("change:" + t, this, n(v, t), l)
                    }
                    var x = t.split(m);
                    for (var _ = x.length - 1; _ > 0; _--) {
                        var C = e.first(x, _).join(m),
                            S = C + m + "*";
                        if (!y.hasOwnProperty(S) || !y[S]) {
                            y[S] = true;
                            this.trigger("change:" + S, this, n(v, C), l)
                        }
                        if (!y.hasOwnProperty(C) || !y[C]) {
                            y[C] = true;
                            this.trigger("change:" + C, this, n(v, C), l)
                        }
                    }
                }
            }
            if (p) return this;
            if (!h) {
                while (this._pending) {
                    this._pending = false;
                    this.trigger("change", this, l)
                }
            }
            this._pending = false;
            this._changing = false;
            return this
        },
        clear: function(t) {
            var n = {};
            var r = i(this.attributes);
            for (var a in r) n[a] = void 0;
            return this.set(n, e.extend({}, t, {
                unset: true
            }))
        },
        hasChanged: function(t) {
            if (t == null) return !e.isEmpty(this.changed);
            return n(this.changed, t) !== undefined
        },
        changedAttributes: function(t) {
            if (!t) return this.hasChanged() ? i(this.changed) : false;
            var n = this._changing ? this._previousAttributes : this.attributes;
            t = i(t);
            n = i(n);
            var r, a = false;
            for (var s in t) {
                if (e.isEqual(n[s], r = t[s])) continue;
                (a || (a = {}))[s] = r
            }
            return a
        },
        previous: function(e) {
            if (e == null || !this._previousAttributes) return null;
            return n(this._previousAttributes, e)
        },
        previousAttributes: function() {
            return e.deepClone(this._previousAttributes)
        }
    });
    s.keyPathSeparator = ".";
    t.DeepModel = s;
    if (typeof module != "undefined") module.exports = s;
    return t
});
(function() {
    var e, t, i, n;
    t = window.device;
    e = {};
    window.device = e;
    n = window.navigator.userAgent.toLowerCase();
    e.safari = function() {
        return i("safari") && !e.chrome()
    };
    e.chrome = function() {
        return i("chrome")
    };
    e.ios = function() {
        return e.iphone() || e.ipod() || e.ipad()
    };
    e.iphone = function() {
        return !e.windows() && i("iphone")
    };
    e.ipod = function() {
        return i("ipod")
    };
    e.ipad = function() {
        return i("ipad")
    };
    e.chromeIOS = function() {
        return i("crios")
    };
    e.android = function() {
        return !e.windows() && i("android")
    };
    e.androidPhone = function() {
        return e.android() && i("mobile")
    };
    e.androidTablet = function() {
        return e.android() && !i("mobile")
    };
    e.blackberry = function() {
        return i("blackberry") || i("bb10") || i("rim")
    };
    e.blackberryPhone = function() {
        return e.blackberry() && !i("tablet")
    };
    e.blackberryTablet = function() {
        return e.blackberry() && i("tablet")
    };
    e.windows = function() {
        return i("windows")
    };
    e.windowsPhone = function() {
        return e.windows() && i("phone")
    };
    e.windowsTablet = function() {
        return e.windows() && (i("touch") && !e.windowsPhone() && !i("trident"))
    };
    e.fxos = function() {
        return (i("(mobile;") || i("(tablet;")) && i("; rv:")
    };
    e.fxosPhone = function() {
        return e.fxos() && i("mobile")
    };
    e.fxosTablet = function() {
        return e.fxos() && i("tablet")
    };
    e.meego = function() {
        return i("meego")
    };
    e.cordova = function() {
        return window.cordova && location.protocol === "file:"
    };
    e.nodeWebkit = function() {
        return typeof window.process === "object"
    };
    e.mobile = function() {
        return e.androidPhone() || e.iphone() || e.ipod() || e.windowsPhone() || e.blackberryPhone() || e.fxosPhone() || e.meego()
    };
    e.tablet = function() {
        return e.ipad() || e.androidTablet() || e.blackberryTablet() || e.windowsTablet() || e.fxosTablet()
    };
    e.desktop = function() {
        return !e.tablet() && !e.mobile()
    };
    e.television = function() {
        var e;
        var t = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"];
        e = 0;
        while (e < t.length) {
            if (i(t[e])) {
                return true
            }
            e++
        }
        return false
    };
    e.portrait = function() {
        return window.innerHeight / window.innerWidth > 1
    };
    e.landscape = function() {
        return window.innerHeight / window.innerWidth < 1
    };
    e.noConflict = function() {
        window.device = t;
        return this
    };
    i = function(e) {
        return n.indexOf(e) !== -1
    }
}).call(this);
var config = parent.jivo_config;
var jivo = parent.jivo;
var machina = function(e, t) {
    var i = [].slice;
    var n = "transition";
    var r = "handler";
    var a = "handling";
    var s = "handled";
    var o = "nohandler";
    var l = "transition";
    var c = "invalidstate";
    var u = "deferred";
    var f = "newfsm";
    var d = {
        makeFsmNamespace: function() {
            var e = 0;
            return function() {
                return "fsm." + e++
            }
        }(),
        getDefaultOptions: function() {
            return {
                initialState: "uninitialized",
                eventListeners: {
                    "*": []
                },
                states: {},
                eventQueue: [],
                namespace: d.makeFsmNamespace(),
                targetReplayState: "",
                state: t,
                priorState: t,
                _priorAction: "",
                _currentAction: ""
            }
        }
    };
    if (!e.deepExtend) {
        var h = {
                "*": function(e, t, i) {
                    e[t] = i
                },
                object: function(e, t, i) {
                    e[t] = v({}, e[t] || {}, i)
                },
                array: function(t, i, n) {
                    t[i] = [];
                    e.each(n, function(e, n) {
                        h[g(e)](t[i], n, e)
                    }, this)
                }
            },
            p = function(t) {
                if (e.isArray(t)) {
                    return "array"
                }
                if (e.isDate(t)) {
                    return "date"
                }
                if (e.isRegExp(t)) {
                    return "regex"
                }
                return typeof t
            },
            g = function(e) {
                var t = p(e);
                return h[t] ? t : "*"
            },
            v = function(t) {
                e.each(i.call(arguments, 1), function(i) {
                    e.each(i, function(e, i) {
                        h[g(e)](t, i, e)
                    })
                });
                return t
            };
        e.mixin({
            deepExtend: v
        })
    }
    var m = function(t) {
        e.extend(this, t);
        e.defaults(this, d.getDefaultOptions());
        this.initialize.apply(this, arguments);
        w.emit(f, this);
        if (this.initialState) {
            this.transition(this.initialState)
        }
    };
    e.extend(m.prototype, {
        initialize: function() {},
        emit: function(t) {
            var n = arguments;
            if (this.eventListeners["*"]) {
                e.each(this.eventListeners["*"], function(e) {
                    try {
                        e.apply(this, i.call(n, 0))
                    } catch (t) {
                        reportException(t);
                        log(t.message)
                    }
                }, this)
            }
            if (this.eventListeners[t]) {
                e.each(this.eventListeners[t], function(e) {
                    try {
                        e.apply(this, i.call(n, 1))
                    } catch (t) {
                        reportException(t);
                        log(t.message)
                    }
                }, this)
            }
        },
        handle: function(n) {
            if (!this.inExitHandler) {
                var l = this.states,
                    c = this.state,
                    u = i.call(arguments, 0),
                    f, d, h, p;
                this.currentActionArgs = u;
                if (l[c][n] || l[c]["*"] || this["*"]) {
                    f = l[c][n] ? n : "*";
                    h = f === "*";
                    if (l[c][f]) {
                        d = l[c][f];
                        p = c + "." + f
                    } else {
                        d = this["*"];
                        p = "*"
                    }
                    if (!this._currentAction) this._currentAction = p;
                    this.emit.call(this, a, {
                        inputType: n,
                        args: u.slice(1)
                    });
                    if (e.isFunction(d)) d = d.apply(this, h ? u : u.slice(1));
                    if (e.isString(d)) this.transition(d);
                    this.emit.call(this, s, {
                        inputType: n,
                        args: u.slice(1)
                    });
                    this._priorAction = this._currentAction;
                    this._currentAction = "";
                    this.processQueue(r)
                } else {
                    this.emit.call(this, o, {
                        inputType: n,
                        args: u.slice(1)
                    })
                }
                this.currentActionArgs = t
            }
        },
        transition: function(e) {
            if (!this.inExitHandler && e !== this.state) {
                var t;
                if (this.states[e]) {
                    this.targetReplayState = e;
                    this.priorState = this.state;
                    this.state = e;
                    t = this.priorState;
                    if (this.states[t] && this.states[t]._onExit) {
                        this.inExitHandler = true;
                        this.states[t]._onExit.call(this);
                        this.inExitHandler = false
                    }
                    this.emit.call(this, l, {
                        fromState: t,
                        action: this._currentAction,
                        toState: e
                    });
                    if (this.states[e]._onEnter) {
                        try {
                            this.states[e]._onEnter.call(this)
                        } catch (i) {
                            reportException(i);
                            log(i.message)
                        }
                    }
                    if (this.targetReplayState === e) {
                        this.processQueue(n)
                    }
                    return
                }
                this.emit.call(this, c, {
                    state: this.state,
                    attemptedState: e
                })
            }
        },
        processQueue: function(t) {
            var i = t === n ? function(e) {
                return e.type === n && (!e.untilState || e.untilState === this.state)
            } : function(e) {
                return e.type === r
            };
            var a = e.filter(this.eventQueue, i, this);
            this.eventQueue = e.difference(this.eventQueue, a);
            e.each(a, function(e) {
                this.handle.apply(this, e.args)
            }, this)
        },
        clearQueue: function(t, i) {
            if (!t) {
                this.eventQueue = []
            } else {
                var a;
                if (t === n) {
                    a = function(e) {
                        return e.type === n && (i ? e.untilState === i : true)
                    }
                } else if (t === r) {
                    a = function(e) {
                        return e.type === r
                    }
                }
                this.eventQueue = e.filter(this.eventQueue, a)
            }
        },
        deferUntilTransition: function(e) {
            if (this.currentActionArgs) {
                var t = {
                    type: n,
                    untilState: e,
                    args: this.currentActionArgs
                };
                this.eventQueue.push(t);
                this.emit.call(this, u, {
                    state: this.state,
                    queuedArgs: t
                })
            }
        },
        deferUntilNextHandler: function() {
            if (this.currentActionArgs) {
                var e = {
                    type: n,
                    args: this.currentActionArgs
                };
                this.eventQueue.push(e);
                this.emit.call(this, u, {
                    state: this.state,
                    queuedArgs: e
                })
            }
        },
        on: function(e, t) {
            var i = this;
            if (!i.eventListeners[e]) {
                i.eventListeners[e] = []
            }
            i.eventListeners[e].push(t);
            return {
                eventName: e,
                callback: t,
                off: function() {
                    i.off(e, t)
                }
            }
        },
        off: function(t, i) {
            if (!t) {
                this.eventListeners = {}
            } else {
                if (this.eventListeners[t]) {
                    if (i) {
                        this.eventListeners[t] = e.without(this.eventListeners[t], i)
                    } else {
                        this.eventListeners[t] = []
                    }
                }
            }
        }
    });
    m.prototype.trigger = m.prototype.emit;
    var y = function() {};
    var b = function(t, i, n) {
        var r;
        if (i && i.hasOwnProperty("constructor")) {
            r = i.constructor
        } else {
            r = function() {
                t.apply(this, arguments)
            }
        }
        e.deepExtend(r, t);
        y.prototype = t.prototype;
        r.prototype = new y;
        if (i) {
            e.deepExtend(r.prototype, i)
        }
        if (n) {
            e.deepExtend(r, n)
        }
        r.prototype.constructor = r;
        r.__super__ = t.prototype;
        return r
    };
    m.extend = function(e, t) {
        var i = b(this, e, t);
        i.extend = this.extend;
        return i
    };
    var w = {
        Fsm: m,
        utils: d,
        on: function(e, t) {
            if (!this.eventListeners[e]) {
                this.eventListeners[e] = []
            }
            this.eventListeners[e].push(t);
            return t
        },
        off: function(t, i) {
            if (this.eventListeners[t]) {
                this.eventListeners[t] = e.without(this.eventListeners[t], i)
            }
        },
        trigger: function(t) {
            var n = 0,
                r, a = arguments,
                s = this.eventListeners[t] || [];
            if (s && s.length) {
                e.each(s, function(e) {
                    e.apply(null, i.call(a, 1))
                })
            }
        },
        eventListeners: {
            newFsm: []
        }
    };
    w.emit = w.trigger;
    return w
}(_);
(function(e) {
    var t = e.setTimeout,
        i = e.document,
        n = 0;
    e.jivoXHR = function() {
        var r, a, s, o = null;

        function l() {
            try {
                s.parentNode.removeChild(s)
            } catch (e) {}
        }

        function c() {
            a = false;
            r = "";
            l();
            s = null
        }

        function u(e) {
            try {
                o.onerror.call(o, e, r)
            } catch (t) {
                throw new Error(e)
            }
        }

        function f() {
            if (this.readyState && this.readyState !== "complete" && this.readyState !== "loaded" || a) {
                return
            }
            this.onload = this.onreadystatechange = null;
            a = true;
            if (o.readyState !== 4) {
                u("Script failed to load [" + r + "].")
            }
            l()
        }

        function d(e) {
            e = e || [];
            o.readyState = 4;
            o.status = 200;
            if (typeof o.onload === "function") {
                o.onload.apply(o, e)
            }
        }
        o = {
            onerror: null,
            onload: null,
            readyState: 0,
            open: function(t, i) {
                c();
                var a = "cb" + n++;
                (function(t) {
                    e.jivoXHR[t] = function() {
                        try {
                            d.call(o, arguments)
                        } catch (i) {
                            o.readyState = -1;
                            u(i.message)
                        }
                        e.jivoXHR[t] = null
                    }
                })(a);
                r = i.replace(/=\?/, "=jivoXHR." + a)
            },
            send: function() {
                t(function() {
                    s = i.createElement("script");
                    s.setAttribute("type", "text/javascript");
                    s.charset = "UTF-8";
                    s.onload = s.onreadystatechange = function() {
                        f.call(s)
                    };
                    s.setAttribute("src", r);
                    i.getElementsByTagName("head")[0].appendChild(s)
                }, 0)
            },
            abort: function() {},
            setRequestHeader: function() {},
            getResponseHeader: function() {
                return ""
            },
            getAllResponseHeaders: function() {
                return []
            }
        };
        c();
        return o
    }
})(window);
machina.on("newfsm", function(e) {
    e.on("handling", function(e) {
        log(this.namespace + ": handling " + e.inputType + " in state " + this.state)
    });
    e.on("nohandler", function(e) {
        log(this.namespace + ": unhandled " + e.inputType + " in state " + this.state)
    });
    e.on("transition", function(e) {
        log([this.namespace + ":", "transition from:", e.fromState, "to:", e.toState, "action:", e.action].join(" "))
    })
});
var TimeMachine = machina.Fsm.extend({
    _fireEvent: function(e) {
        delete this._scheduled_events[e];
        this.handle(e)
    },
    _scheduleEvent: function(e, t) {
        if (!(e in this._scheduled_events)) {
            log(this.namespace + ": scheduling " + e + " for " + t);
            this._scheduled_events[e] = setTimeout(underscore.bind(this._fireEvent, this, e), t)
        } else {
            log(this.namespace + ": attempt to re-schedule event" + e)
        }
    },
    _cancelEvent: function(e) {
        if (e in this._scheduled_events) {
            clearTimeout(this._scheduled_events[e]);
            delete this._scheduled_events[e]
        } else {
            log(this.namespace + ": attempt to cancel not scheduled event", e)
        }
    },
    constructor: function() {
        this._scheduled_events = {};
        machina.Fsm.apply(this, arguments)
    }
});
var VOXIMPLANT_URL = "//cdn.voximplant.com/voximplant.min.js";
var WebPhone = machina.Fsm.extend({
    namespace: "WP",
    autoCall: false,
    agentId: "",
    states: {
        uninitialized: {
            call: function() {
                this.autocall = true;
                this.transition("initializing")
            },
            init: function() {
                this.transition("initializing")
            }
        },
        initializing: {
            _onEnter: function() {
                loadScript(VOXIMPLANT_URL, underscore.bind(this.handle, this, "script_loaded"), underscore.bind(this.handle, this, "script_load_error"))
            },
            script_loaded: function() {
                this.emit("WebPhoneInitializing", {
                    name: "WebPhoneInitializing"
                });
                this.vox = VoxImplant.getInstance();
                this.vox.init({
                    useFlashOnly: false,
                    micRequired: true,
                    swfContainer: "rtc_placeholder",
                    progressTone: true
                });
                this.vox.addEventListener(VoxImplant.Events.SDKReady, underscore.bind(this.handle, this, "vox_init"))
            },
            script_load_error: function(e) {
                reportException({
                    message: "Error loading voximplant script",
                    fileName: "web_phone.js"
                })
            },
            vox_init: function() {
                this.transition("connecting")
            },
            call: function() {
                this.autocall = true
            }
        },
        initialized: {
            _onEnter: function() {
                this.emit("WebPhoneInitialized", {
                    name: "WebPhoneInitialized"
                })
            },
            call: function() {
                this.autocall = true;
                this.transition("connecting")
            },
            init: function() {
                this.transition("connecting")
            }
        },
        connecting: {
            _onEnter: function() {
                this.emit("WebPhoneConnecting", {
                    name: "WebPhoneConnecting"
                });
                this.vox.connect();
                this.vox.addEventListener(VoxImplant.Events.MicAccessResult, underscore.bind(function(e) {
                    if (!e.result) {
                        this.handle("vox_mic_access_denied")
                    }
                }, this));
                this.vox.addEventListener(VoxImplant.Events.ConnectionEstablished, underscore.bind(function(e) {
                    this.handle("vox_connected")
                }, this));
                this.vox.addEventListener(VoxImplant.Events.ConnectionFailed, underscore.bind(function(e) {
                    this.handle("vox_connection_failed")
                }, this));
                this.vox.addEventListener(VoxImplant.Events.ConnectionClosed, underscore.bind(function(e) {
                    this.handle("vox_connection_closed")
                }, this))
            },
            vox_connected: function() {
                this.transition("authenticating")
            },
            vox_connection_failed: function() {
                this.transition("initialized")
            },
            vox_connection_closed: function() {
                this.transition("initialized")
            },
            vox_mic_access_denied: function() {
                this.transition("mic_disabled")
            },
            call: function() {
                this.autocall = true
            },
            hangup: function() {
                this.transition("initialized")
            }
        },
        connected: {
            _onEnter: function() {
                this.emit("WebPhoneConnected", {
                    name: "WebPhoneConnected"
                })
            },
            call: function() {
                this.autocall = true;
                this.transition("authenticating")
            },
            init: function() {
                this.transition("authenticating")
            }
        },
        authenticating: {
            _onEnter: function() {
                this.emit("WebPhoneAuthenticating", {
                    name: "WebPhoneAuthenticating"
                });
                this.vox.addEventListener(VoxImplant.Events.AuthResult, underscore.bind(function(e) {
                    if (e.result) {
                        this.handle("vox_authenticated")
                    } else {
                        if (e.code == 302) {
                            this.handle("vox_key_received", e.key)
                        } else {
                            this.handle("vox_authentication_failed")
                        }
                    }
                }, this));
                this.vox.requestOneTimeLoginKey(config.vox_login)
            },
            vox_key_received: function(e) {
                var t = config.base_url + "/script/sign?cb=?&key=" + e;
                getJSONP(t, underscore.bind(function(e) {
                    if (e.result) {
                        this.handle("vox_hash_received", e.hash)
                    } else {
                        this.handle("vox_authentication_failed")
                    }
                }, this))
            },
            vox_hash_received: function(e) {
                this.vox.loginWithOneTimeKey(config.vox_login, e)
            },
            vox_authenticated: function() {
                if (this.autocall) {
                    this.transition("progressing")
                } else {
                    this.transition("idle")
                }
            },
            vox_authentication_failed: function() {
                this.transition("connected")
            },
            call: function() {
                this.autocall = true
            },
            hangup: function() {
                this.transition("connected")
            }
        },
        idle: {
            _onEnter: function() {
                var e = "WebPhoneIdle";
                if (this.priorState === "authenticating") {
                    e = "WebPhoneAuthenticated"
                }
                this.emit(e, {
                    name: e
                })
            },
            call: function() {
                this.transition("progressing")
            },
            disconnect: function() {
                this.vox.disconnect();
                this.transition("initialized")
            }
        },
        progressing: {
            _onEnter: function() {
                this.emit("WebPhoneProgressing", {
                    name: "WebPhoneProgressing"
                });
                this.voxCall = this.vox.call(this.agentId, false, "", {
                    "X-jv-sessid": cookie("sess_id")
                });
                this.voxCall.addEventListener(VoxImplant.CallEvents.Connected, underscore.bind(function(e) {
                    this.handle("vox_call_connected")
                }, this));
                this.voxCall.addEventListener(VoxImplant.CallEvents.Failed, underscore.bind(function(e) {
                    this.handle("vox_call_failed")
                }, this));
                this.voxCall.addEventListener(VoxImplant.CallEvents.Disconnected, underscore.bind(function(e) {
                    this.handle("vox_call_disconnected")
                }, this))
            },
            vox_call_connected: function() {
                this.transition("joined")
            },
            vox_call_failed: function() {
                this.transition("idle")
            },
            hangup: function() {
                this.voxCall.hangup();
                this.transition("idle")
            }
        },
        joined: {
            _onEnter: function() {
                this.emit("WebPhoneJoined", {
                    name: "WebPhoneJoined"
                })
            },
            vox_call_disconnected: function() {
                this.transition("idle")
            },
            hangup: function() {
                this.voxCall.hangup();
                this.transition("idle")
            }
        },
        mic_disabled: {
            _onEnter: function() {
                this.emit("WebPhoneMicDisabled", {
                    name: "WebPhoneMicDisabled"
                })
            }
        }
    },
    setAgentId: function(e) {
        this.agentId = e
    }
});
if (typeof JSON !== "object") {
    JSON = {}
}(function() {
    "use strict";

    function f(e) {
        return e < 10 ? "0" + e : e
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
    }
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap, indent, meta = {
            "\b": "\\b",
            "	": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        },
        rep;

    function quote(e) {
        escapable.lastIndex = 0;
        return escapable.test(e) ? '"' + e.replace(escapable, function(e) {
            var t = meta[e];
            return typeof t === "string" ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + e + '"'
    }

    function str(e, t) {
        var i, n, r, a, s = gap,
            o, l = t[e];
        if (l && typeof l === "object" && typeof l.toJSON === "function") {
            l = l.toJSON(e)
        }
        if (typeof rep === "function") {
            l = rep.call(t, e, l)
        }
        switch (typeof l) {
            case "string":
                return quote(l);
            case "number":
                return isFinite(l) ? String(l) : "null";
            case "boolean":
            case "null":
                return String(l);
            case "object":
                if (!l) {
                    return "null"
                }
                gap += indent;
                o = [];
                if (Object.prototype.toString.apply(l) === "[object Array]") {
                    a = l.length;
                    for (i = 0; i < a; i += 1) {
                        o[i] = str(i, l) || "null"
                    }
                    r = o.length === 0 ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]" : "[" + o.join(",") + "]";
                    gap = s;
                    return r
                }
                if (rep && typeof rep === "object") {
                    a = rep.length;
                    for (i = 0; i < a; i += 1) {
                        if (typeof rep[i] === "string") {
                            n = rep[i];
                            r = str(n, l);
                            if (r) {
                                o.push(quote(n) + (gap ? ": " : ":") + r)
                            }
                        }
                    }
                } else {
                    for (n in l) {
                        if (Object.prototype.hasOwnProperty.call(l, n)) {
                            r = str(n, l);
                            if (r) {
                                o.push(quote(n) + (gap ? ": " : ":") + r)
                            }
                        }
                    }
                }
                r = o.length === 0 ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}" : "{" + o.join(",") + "}";
                gap = s;
                return r
        }
    }
    if (typeof JSON.stringify !== "function") {
        JSON.stringify = function(e, t, i) {
            var n;
            gap = "";
            indent = "";
            if (typeof i === "number") {
                for (n = 0; n < i; n += 1) {
                    indent += " "
                }
            } else if (typeof i === "string") {
                indent = i
            }
            rep = t;
            if (t && typeof t !== "function" && (typeof t !== "object" || typeof t.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": e
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        JSON.parse = function(text, reviver) {
            var j;

            function walk(e, t) {
                var i, n, r = e[t];
                if (r && typeof r === "object") {
                    for (i in r) {
                        if (Object.prototype.hasOwnProperty.call(r, i)) {
                            n = walk(r, i);
                            if (n !== undefined) {
                                r[i] = n
                            } else {
                                delete r[i]
                            }
                        }
                    }
                }
                return reviver.call(e, t, r)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function(e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                }, "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
})();
var underscore = _.noConflict(),
    devicejs = device.noConflict();
underscore.templateSettings.interpolate = /\{\{(.+?)\}\}/g;
var appVersion = navigator.appVersion;
var ie8 = appVersion.indexOf("MSIE 8.") !== -1;
var ie9 = appVersion.indexOf("MSIE 9.") !== -1;
var ie = appVersion.indexOf("MSIE") !== -1;

function addListener(e, t, i) {
    if (e.addEventListener) {
        e.addEventListener(t, i, false)
    } else if (e.attachEvent) {
        e.attachEvent("on" + t, function(e) {
            return function() {
                i.call(e, window.event)
            }
        }(e));
        e = null
    }
}

function removeEvent(e, t, i) {
    if (window.removeEventListener) {
        e.removeEventListener(t, i, false)
    } else if (window.detachEvent) {
        var n = function() {
            i.call(e)
        };
        e.detachEvent("on" + t, n)
    } else {
        return false
    }
}

function loadScript(e, t, i) {
    var n = document.createElement("script");
    n.type = "text/javascript";
    if (n.readyState) {
        n.onreadystatechange = function() {
            if (n.readyState == "loaded" || n.readyState == "complete") {
                n.onreadystatechange = null;
                t()
            } else {
                i({
                    target: n,
                    readyState: readyState
                })
            }
        }
    } else {
        n.onload = function() {
            t()
        };
        n.onerror = function(e) {
            i(e)
        }
    }
    n.src = e;
    if (typeof log != "undefined") log("adding script " + e);
    document.getElementsByTagName("head")[0].appendChild(n)
}

function setIframeLoadCallback(e, t) {
    if (e.readyState) {
        log("Using readyState callback");
        e.onreadystatechange = function() {
            if (e.readyState == "loaded" || e.readyState == "complete") {
                e.onreadystatechange = null;
                t()
            }
        }
    } else {
        log("Using onload callback");
        e.onload = function() {
            if (e.contentWindow.location.href != "about:blank") {
                t();
                e.onload = null
            }
        }
    }
}
var dateFormat = function() {
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        t = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        i = /[^-+\dA-Z]/g,
        n = function(e, t) {
            e = String(e);
            t = t || 2;
            while (e.length < t) e = "0" + e;
            return e
        };
    return function(r, a, s) {
        var o = dateFormat;
        if (arguments.length == 1 && Object.prototype.toString.call(r) == "[object String]" && !/\d/.test(r)) {
            a = r;
            r = undefined
        }
        if (typeof r === "string" && isNaN(new Date(r))) {
            r = r.replace(/-/g, "/").replace("T", " ").split(".").shift() + "Z"
        }
        r = r ? new Date(r) : new Date;
        if (isNaN(r)) throw SyntaxError("invalid date");
        a = String(o.masks[a] || a || o.masks["default"]);
        if (a.slice(0, 4) == "UTC:") {
            a = a.slice(4);
            s = true
        }
        var l = s ? "getUTC" : "get",
            c = r[l + "Date"](),
            u = r[l + "Day"](),
            f = r[l + "Month"](),
            d = r[l + "FullYear"](),
            h = r[l + "Hours"](),
            p = r[l + "Minutes"](),
            g = r[l + "Seconds"](),
            v = r[l + "Milliseconds"](),
            m = s ? 0 : r.getTimezoneOffset(),
            y = {
                d: c,
                dd: n(c),
                ddd: o.i18n.dayNames[u],
                dddd: o.i18n.dayNames[u + 7],
                m: f + 1,
                mm: n(f + 1),
                mmm: o.i18n.monthNames[f],
                mmmm: o.i18n.monthNames[f + 12],
                yy: String(d).slice(2),
                yyyy: d,
                h: h % 12 || 12,
                hh: n(h % 12 || 12),
                H: h,
                HH: n(h),
                M: p,
                MM: n(p),
                s: g,
                ss: n(g),
                l: n(v, 3),
                L: n(v > 99 ? Math.round(v / 10) : v),
                t: h < 12 ? "a" : "p",
                tt: h < 12 ? "am" : "pm",
                T: h < 12 ? "A" : "P",
                TT: h < 12 ? "AM" : "PM",
                Z: s ? "UTC" : (String(r).match(t) || [""]).pop().replace(i, ""),
                o: (m > 0 ? "-" : "+") + n(Math.floor(Math.abs(m) / 60) * 100 + Math.abs(m) % 60, 4),
                S: ["th", "st", "nd", "rd"][c % 10 > 3 ? 0 : (c % 100 - c % 10 != 10) * c % 10]
            };
        return a.replace(e, function(e) {
            return e in y ? y[e] : e.slice(1, e.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};
dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
};
var base_langpack = {
    "b_onlineCallDefaultText": "Call us for Free!",
    "cw_callAfter": "Call in",
    "cw_callButtonText": "Call back",
    "cw_callFree": "The call is free charge. Powered by JivoChat",
    "cw_chat": "Chat",
    "cw_chatWithOperator": "Chat with agent",
    "cw_close": "Close",
    "cw_code_restrict": "Invalid direction",
    "cw_connecting": "Connecting",
    "cw_enterPhonePlaceholder": "Enter your phone",
    "cw_errInfoText": "Please try to call again or contact us in the live chat",
    "cw_formCenterText": "Did you find what you were looking for?",
    "cw_form_second": "second",
    "cw_form_secondd": "seconds",
    "cw_form_seconds": "seconds",
    "cw_pickUpPhone": "Please pick up the phone",
    "cw_rate_limit": "The call to the specified number is not possible",
    "cw_repeatCall": "call again",
    "cw_repeatCallAgain": "Call again",
    "cw_reportPlaceholder": "Report the problem, we'll deal!",
    "cw_reportProblem": "report a problem",
    "cw_seconds": "seconds",
    "cw_textSend": "send",
    "cw_thxForCall": "Thank you for the call!",
    "cw_typeInChat": "Chat with us",
    "cw_unableToConnect": "The connection failed?",
    "cw_weCalling": "We are calling you",
    "cw_weRecallAfter": "Call back in",
    "c_callConnected": "Call established",
    "c_callDisconnected": "Call finished",
    "c_callProcessing": "Calling agent...",
    "defCallformTitle": "Leave your number and we will call you back",
    "defOfflineFormText": "Leave your message in the form below, and we will receive it by e-mail!",
    "defOfflineWidgetLabel": "Send us a message",
    "defOfflineWidgetLabelMobile": "Message",
    "defOnlineWidgetLabel": "Chat with us, we are online!",
    "defOnlineWidgetLabelMobile": "Chat",
    "defRuleInvitationText": "Hello! How may I help you?",
    "defRuleRetaining": "Please wait. All agents are busy right now, but soon someone will get free and help you!",
    "lblAgentDisconnected": "Agent disconnected",
    "lblCallMe": "Call",
    "lblCaptcha": "Type the text",
    "lblCaptchaError": "Error, please try again",
    "lblChatEnded": "Chat ended",
    "lblChatIsOnline": "Agent is online",
    "lblConnectedToAgent": "Please type your message",
    "lblConnectionLost": "Connection lost. Reconnecting...",
    "lblDeclineFile": "Reject",
    "lblDefaultCobrowseComment": "Please note",
    "lblEnterMessageHere": "Type here and hit <Enter>",
    "lblEnterMessageOrPhoneHere": "Start chat or enter your phone number (we will call you back instantly)",
    "lblEvaluateCancel": "Cancel",
    "lblEvaluatePlease": "Please rate the service quality",
    "lblEvaluateThanks": "Thank you!",
    "lblHangUp": "Hangup",
    "lblHangUpShort": "Hangup",
    "lblIntroduceButton": "Introduce",
    "lblIntroduceName": "Your name",
    "lblIntroduceRequest": "Please introduce yourself",
    "lblIntroduceRequestBefore": "Introduce Yourself and Chat!",
    "lblLeaveMessage": "Send us a message",
    "lblLookingForFreeAgent": "Connecting...",
    "lblMessageError": "Unfortunately message was not sent due to a technical error",
    "lblMessageHere": "Type here",
    "lblNegative": "Bad",
    "lblNewMessage": "New message!",
    "lblNoOperators": "Unfortunately, nobody can take the chat at the moment",
    "lblOfflineMessageSend": "Message was sent",
    "lblOperatorsOnline": "Agents are online!",
    "lblPencilHint": "Agent is typing a message",
    "lblPhoneHint": "Click &quot;Allow&quot; to use microphone for the call.\r\nYour web cam will not be used",
    "lblPositive": "Good",
//    "lblPwrBy": "Powered by <a href=\"https:\/\/www.ipchat.com\/_URL_\" target=\"_blank\"><span class=\"j1\">Jivo<\/span><span class=\"j2\">Chat<\/span><\/a>",
//!!
    "lblPwrBy": "Powered by <a href=\"http:\/\/sale-storm.com\/_URL_\" target=\"_blank\">SaleStorm<\/a>",
    "lblReceiveFile": "Accept",
    "lblReopenedElseWhere": "Chat opened in another window",
    "lblReply": "Reply",
    "lblSelectDep": "Select Department",
    "lblSend": "Send",
    "lblSendBefore": "Start Chat",
    "lblSendingFile": "_AGENT_ is sending you file: _FILE_",
    "lblThanks": "Thank you!",
    "lblThankYouMessage": "Thank you for your message! We will contact you as soon as possible",
    "lblTransferred": "Chat was transferred to agent _AGENT_",
    "lblView": "View",
    "lblWaitForOperator": "Please wait for an agent to answer the call...",
    "lblWebPhoneFlashError": "Your Flash plugin version does not support web calls. Please use the chat",
    "lblWebPhoneMicError": "Microphone setup has failed. Please use the chat",
    "lblWebPhoneNotAvail": "Web calls are unavailable due to connection issues. Please use the chat",
    "lblWebPhoneNotConnected": "Call cannot be established. Please use the chat",
    "lblYourEmail": "Your email",
    "lblYourMessage": "Your message",
    "lblYourPhone": "Your phone",
    "lnkCloseThisWindow": "Close",
    "lnkRestartChat": "Resume",
    "ofl_enterEmail": "Please, enter e-mail",
    "ofl_enterMessage": "Please, enter message",
    "ofl_enterName": "Please, enter your name",
    "ofl_enterValidEmail": "Please, enter valid email",
    "ofl_enterValidPhone": "Please, enter a valid phone number",
    "seo_copyrightTextNew": "Live Chat Powered by <a href=\"https:\/\/www.ipchat.com\/\" target=\"_blank\" id=\"jivosite-copyright\" class=\"jivo-_COLOR_ jivo-en\"><\/a>"
};

function translate(e) {
    if ("custom_langpack" in config && e in config.custom_langpack) {
        return config.custom_langpack[e].replace(/\n/g, "<br />").replace(/'/g, "&#039;")
    }
    return translate_basic(e)
}

function translate_basic(e) {
    if (e in base_langpack) {
        return base_langpack[e].replace(/\n/g, "<br />")
    }
    return e
}

function cookie(e, t, i) {
    if (e != "__utmz") {
        e = ["jv", e, config.widget_id].join("_")
    }
    if (arguments.length > 1 && String(t) !== "[object Object]") {
        if (typeof i === "undefined") {
            i = {}
        }
        if (t === null || t === undefined) {
            log("Clearing COOKIE " + e);
            i.expires = -1
        } else {
            log("Set COOKIE " + e + " with value " + t)
        }
        if (typeof i.expires === "number") {
            var n = i.expires,
                r = i.expires = new Date;
            r.setDate(r.getDate() + n)
        }
        t = String(t);
        return document.cookie = [encodeURIComponent(e), "=", encodeURIComponent(t), i.expires ? "; expires=" + i.expires.toUTCString() : "", config.cookie_domain && !jivo.isSeparateWindow() ? "; domain=" + config.cookie_domain : "", "; path=/"].join("")
    }
    i = t || {};
    var a, s = i.raw ? function(e) {
        return e
    } : decodeURIComponent;
    return (a = new RegExp("(?:^|; )" + encodeURIComponent(e) + "=([^;]*)").exec(document.cookie)) ? s(a[1]) : null
}

function getJSONP(e, t) {

//!! что бы не было запросов в никуда
return;
/*
//!! коммент после return;

    var i = new jivoXHR;
    i.open("GET", e);
    i.onload = t;
    i.send()
*/
}

function getJSONPWithData(e, t, i) {

//!! что бы не было запросов в никуда
return;
/*
//!! коммент после return;

    e += "?cb=?";
    t["t"] = (new Date).getTime();
    for (var n in t) {
        e += "&" + n + "=" + encodeURIComponent(t[n])
    }
    return getJSONP(e, i)
*/
}
var error_sent_cnt = 0;

function reportException(e) {
    if ("production" == "production" && !config["disable_error_reporting"]) {
        if (++error_sent_cnt > 3) {
            return
        }
        try {
            getJSONPWithData("//err.ipsite.com/widget", {
                widget_id: config.widget_id,
                message: e.message,
                url: window.top.location.href,
                lineNumber: e.lineNumber,
                fileName: e.fileName
            }, log)
        } catch (e) {
            log(e.message)
        }
    } else {
        log("REPORT", e)
    }
}

function telemetry(e, t) {
    if (typeof t != "object") {
        t = {}
    }
    t.event = e;
    t.widget_id = config.widget_id;
    t.chat_mode = config.chat_mode;
    if (cookie("client_id")) {
        t.client_id = cookie("client_id").split(".")[0]
    }
    if ("production" != "production") {
        log("TELEMETRY", t);
        return
    }
    try {
        getJSONPWithData("//telemetry.ipsite.com/w", t, log)
    } catch (i) {
        log(i.message)
    }
}

function callWidgetPing(e, t) {
    var i = {
        name: "cw_ping"
    };
    if (cookie("client_id")) {
        i.jv_client_id = cookie("client_id")
    }
    if (cookie("sess_id")) {
        i.jv_sess_id = cookie("sess_id")
    }
    if (t) {
        i = underscore.extend(i, t)
    }
    getJSONPWithData(chatServerUrl(config.widget_id, config.site_id), i, function(t) {
        if (t.result === "ok") {
            e(t)
        }
    })
}

function setUTMParams(e) {
    var t = e.substr(e.indexOf("?") + 1),
        i = t.split("&"),
        n, r, a = "";
    for (r = i.length; r--;) {
        n = i[r].split("=");
        if (n[0].indexOf("utm_") >= 0) {
            n = i[r];
            a += (a.length > 0 ? "|" : "") + n.substr(n.indexOf("utm_") + 4)
        }
    }
    if (a) {
        cookie("utm", a)
    }
}

function setImplicitGuiMessage(e, t) {
    var i = 0,
        n = t || "";
    underscore.each(underscore.pairs(e), function(e) {
        if (i < 10) {
            n = n + e[0] + ": " + e[1] + "; \n";
            i += 1
        }
    });
    if (i > 0) {
        jivo.handle("gui_message", n, {
            implicit: 1
        })
    }
}

function highlightUrls(e) {
    var t = /(\s|"|'|^)((?:(?:http|https|ftp|ftps|mailto):\/\/)?)((?:[a-zA-Zа-яА-Я0-9]|[\~\!\#$\%\^\&\*\(\)\+\=\_\-\:\;?\/\[\]\{\}\`\.]|(?:,(?!\s)))*\.(?:рф|com|aero|biz|com|coop|edu|eu|gov|info|int|mil|museum|name|net|org|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|travel|xxx|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)(?:[a-zA-Zа-яА-Я0-9]|[\~\!\#$\%\^\&\*\(\)\+\=\_\-\:\;?\/\[\]\{\}\`\.]|(?:,(?!\s)))*)/gim;
    return stripBrackets(e).replace(t, function(e, t, i, n) {
        if (!i) {
            i = "http://"
        }
        var r = document.domain;
        r = r.replace("www.", "");
        var a;
        if (n.indexOf(r, 0) == -1) {
            a = "_blank"
        } else {
            a = "col_old_page"
        }
        return t + "<a href='" + i + n + "' target='" + a + "'>" + n + "</a>"
    })
}

function nl2br(e) {
    return e.replace(/\n/g, "<br />")
}

function stripBrackets(e) {
    if (underscore.isUndefined(e)) return "";
    else return e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}
var CLASS_LIST_SUPPORTED = "classList" in document.documentElement;

function splitClasses(e) {
    return underscore.isArray(e) ? e : e.replace(/^\s+|\s+$/g, "").split(/\s+/)
}

function forceRedraw(e) {
    e.offsetHeight
}

function getClasses(e) {
    return splitClasses(e.className)
}

function setClasses(e, t) {
    var i = t.join(" ");
    if (e.className !== i) {
        e.className = i;
        forceRedraw(e)
    }
}
var hasClass = CLASS_LIST_SUPPORTED ? function e(t, i) {
    return t.classList.contains(i)
} : function t(e, i) {
    return e.className !== "" && underscore.contains(getClasses(e), i)
};
var addClass = CLASS_LIST_SUPPORTED ? function i(e, t) {
    underscore.each(splitClasses(t), function(t) {
        e.classList.add(t)
    });
    forceRedraw(e)
} : function n(e, t) {
    var i = getClasses(e),
        n = underscore.union(i, splitClasses(t));
    setClasses(e, n)
};
var removeClass = CLASS_LIST_SUPPORTED ? function r(e, t) {
    underscore.each(splitClasses(t), function(t) {
        e.classList.remove(t)
    });
    forceRedraw(e)
} : function a(e, t) {
    var i = getClasses(e),
        n = underscore.difference(i, splitClasses(t));
    setClasses(e, n)
};
var toggleClass = CLASS_LIST_SUPPORTED ? function s(e, t, i) {
    t = underscore.uniq(splitClasses(t));
    underscore.each(t, function(t) {
        e.classList.toggle(t, i)
    });
    forceRedraw(e)
} : function o(e, t, i) {
    var n = getClasses(e),
        r = [],
        a = [],
        s;
    underscore.each(splitClasses(t), function(e) {
        var t = underscore.contains(n, e) ? i !== true && a : i !== false && r;
        if (t) {
            t.push(e)
        }
    });
    s = underscore.union(underscore.difference(n, a), r);
    setClasses(e, s)
};

function removeProperty(e, t) {
    if (e.style.removeProperty) e.style.removeProperty(t);
    else e.style.removeAttribute(t)
}

function removeElement(e) {
    e.parentNode.removeChild(e)
}

function prefixedEvent(e, t, i) {
    var n = ["webkit", "moz", "MS", "o", ""];
    for (var r = 0; r < n.length; r++) {
        if (!n[r]) t = t.toLowerCase();
        e.addEventListener(n[r] + t, i, false)
    }
}

function css3AnimationIsSupported() {
    var e = utils.browser,
        t = e.name;
    return !!(t === "Firefox" && e.mV > 23 || t === "Chrome" && e.mV > 28 || t === "Safari" && e.mV > 5)
}

function switchClasses(e, t, i) {
    removeClass(e, t);
    addClass(e, i)
}

function getOffsetRect(e) {
    var t = e.getBoundingClientRect();
    var i = document.body;
    var n = document.documentElement;
    var r = window.pageYOffset || n.scrollTop || i.scrollTop;
    var a = window.pageXOffset || n.scrollLeft || i.scrollLeft;
    var s = n.clientTop || i.clientTop || 0;
    var o = n.clientLeft || i.clientLeft || 0;
    var l = t.top + r - s;
    var c = t.left + a - o;
    return {
        top: Math.round(l),
        left: Math.round(c)
    }
}

function getElementPosition(e) {
    function t(e) {
        return e.compatMode && e.compatMode != "BackCompat" ? e.documentElement : e.body
    }
    var i = e.ownerDocument,
        n = i.all && !window.opera,
        r = n ? t(i) : i.defaultView || i.parentWindow,
        a = {
            left: 0,
            top: 0
        },
        s;
    if (e.getBoundingClientRect) {
        a = underscore.extend(a, e.getBoundingClientRect())
    } else {
        s = e;
        while (s) {
            a.left += s.offsetLeft;
            a.top += s.offsetTop;
            s = s.offsetParent
        }
    }
    a.width = e.offsetWidth;
    a.height = e.offsetHeight;
    a.windowWidth = n ? r.clientWidth : r.innerWidth;
    a.windowHeight = n ? r.clientHeight : r.innerHeight;
    return a
}

function setElementPosition(e, t) {
    e.style.cssText += "" + "; top: " + t.top + "px" + "; left : " + t.left + "px" + "; width : " + t.width + "px" + "; height: " + t.height + "px";
    return this
}

function setSubstrTitle(e) {
    return e.substr(0, 255)
}

function getConfigContactsAsk() {
    var e = true;
    underscore.each(["name", "phone", "email"], function(t) {
        if (config.contacts_settings[t].show) {
            e = false
        }
    }, this);
    if (e) {
        config.contacts_ask = 2
    }
}

function getIconLocale() {
    if (config.iconLocale === undefined) {
        var e = underscore.find(["ru_RU", "be", "kk", "uk"], function(e) {
            return e === config.locale
        });
        config.iconLocale = e ? e : "en"
    }
    return config.iconLocale
}

function getURLParam(e, t) {
    var i = (t || window.location || "").search.substring(1);
    var n = i.split("&");
    for (var r = 0; r < n.length; r++) {
        var a = n[r].split("=");
        if (a[0] == e) {
            return decodeURIComponent(a[1])
        }
    }
}

function getByIdFromParent(e) {
    var t = window.parent.document,
        i = t.getElementById(e);
    return i && $(i)
}

function proxy(e, t, i) {
    return e[t].apply(e, i)
}
var utils = {
    fields: ["client_name", "phone", "email"],
    phoneReg: /^\+?[0-9() -]+$/i,
    showAd: function() {
        return !(config.options & 8 && config.hide_ad)
    },
    hideOffline: function() {
        return config.hide_offline > 0 && config.options & 512
    },
    isValidValue_phone: function(e) {
        return e.replace(/\D+/g, "").length >= 5 && this.phoneReg.test(e)
    },
    isValidValue_mobilePhone: function(e) {
        var t = e.replace(/\D+/g, ""),
            i = -1;
        if (underscore.indexOf(["7", "8"], t.charAt(0)) !== -1) {
            i = 11
        } else if (t.charAt(0) === "9") {
            i = 10
        }
        return underscore.indexOf(["7", "8", "9"], t.charAt(0)) !== -1 && t.length === i && this.phoneReg.test(e)
    },
    isValidValue_email: function(e) {
        return e.length >= 4 && /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e)
    },
    isValidValue_name: function(e) {
        return e.length > 0 && e.length < 100
    }
};
(function(e) {
    if (e.browser) return;
    e.browser = {};
    e.browser.mozilla = false;
    e.browser.webkit = false;
    e.browser.opera = false;
    e.browser.msie = false;
    var t = navigator.userAgent;
    e.browser.ua = t;
    e.browser.name = navigator.appName;
    e.browser.fV = "" + parseFloat(navigator.appVersion);
    e.browser.mV = parseInt(navigator.appVersion, 10);
    var i, n, r;
    if ((n = t.indexOf("Opera")) != -1) {
        e.browser.opera = true;
        e.browser.name = "Opera";
        e.browser.fV = t.substring(n + 6);
        if ((n = t.indexOf("Version")) != -1) e.browser.fV = t.substring(n + 8)
    } else if ((n = t.indexOf("MSIE")) != -1) {
        e.browser.msie = true;
        e.browser.name = "Microsoft Internet Explorer";
        e.browser.fV = t.substring(n + 5)
    } else if (t.indexOf("Trident") != -1) {
        e.browser.msie = true;
        e.browser.name = "Microsoft Internet Explorer";
        var a = t.indexOf("rv:") + 3;
        var s = a + 4;
        e.browser.fV = t.substring(a, s)
    } else if ((n = t.indexOf("Chrome")) != -1) {
        e.browser.webkit = true;
        e.browser.name = "Chrome";
        e.browser.fV = t.substring(n + 7)
    } else if ((n = t.indexOf("Safari")) != -1) {
        e.browser.webkit = true;
        e.browser.name = "Safari";
        e.browser.fV = t.substring(n + 7);
        if ((n = t.indexOf("Version")) != -1) e.browser.fV = t.substring(n + 8)
    } else if ((n = t.indexOf("AppleWebkit")) != -1) {
        e.browser.webkit = true;
        e.browser.name = "Safari";
        e.browser.fV = t.substring(n + 7);
        if ((n = t.indexOf("Version")) != -1) e.browser.fV = t.substring(n + 8)
    } else if ((n = t.indexOf("Firefox")) != -1) {
        e.browser.mozilla = true;
        e.browser.name = "Firefox";
        e.browser.fV = t.substring(n + 8)
    } else if ((i = t.lastIndexOf(" ") + 1) < (n = t.lastIndexOf("/"))) {
        e.browser.name = t.substring(i, n);
        e.browser.fV = t.substring(n + 1);
        if (e.browser.name.toLowerCase() == e.browser.name.toUpperCase()) {
            e.browser.name = navigator.appName
        }
    }
    if ((r = e.browser.fV.indexOf(";")) != -1) e.browser.fV = e.browser.fV.substring(0, r);
    if ((r = e.browser.fV.indexOf(" ")) != -1) e.browser.fV = e.browser.fV.substring(0, r);
    e.browser.mV = parseInt("" + e.browser.fV, 10);
    if (isNaN(e.browser.mV)) {
        e.browser.fV = "" + parseFloat(navigator.appVersion);
        e.browser.mV = parseInt(navigator.appVersion, 10)
    }
    e.browser.version = e.browser.mV
})(utils);

function staticUrl(e, t) {
    if (!t) {
        e += "?rnd=1446137274"
    }
    if (config.static_host) {
        return "//" + config.static_host + e
    }
    return config.base_url + e
}

function chatServerUrl() {
    var e = window.location.protocol + "//";
    if ("comet" in config) {
        e += config.comet.host;
        if (window.location.protocol == "https:") {
            if ("secure_port" in config.comet) {
                e += ":" + config.comet.secure_port
            }
        } else {
            if ("plain_port" in config.comet) {
                e += ":" + config.comet.plain_port
            }
        }
    } else {
//!! просто комментируем, что бы не было случайных обращений туда
//        e += "node.ipsite.com"
    }
    return e + "/jsonp/" + underscore.toArray(arguments).join("/")
}
var _templates = {
    message: {
        message: underscore.template(["<% if (jivo.isSeparateWindow()) {%>", "<div id='jivo_action'>", "<div id='jivo_close_button' data-action='close'></div>", "</div>", "<% } %>", "<div id='header-avatar' class='header {{ config.widget_font_color }}'>", "<div id='header-avatar-container'>", "<div id='header-animate-container'>", "<div class='info'>", "<div class='agent-name'>{{ header }}</div>", "</div>", "</div>", "</div>", "<div class='clear'></div>", "</div>", "<div class='special-logo'></div>", "<div id='offline-form' class='message<% if (templateData.nologo) {%> nologo<% } %>'>", "<div id='offline-form-inner' class='system-message-container'>", "<div class='description message'>{{ msg }}</div>", "<div id='buttons'></div>", "</div>", "<div id='jivosite-adword' class='<% if (templateData.locale) {%>jivosite-adword-{{ templateData.locale }}<% } %>'>", "<div class='content'>", "{{ templateData.link }}", "</div>", "</div>", "</div>"].join("\n"))
    },
    offline: {
        form: underscore.template(["<% if (jivo.isSeparateWindow()) {%>", "<div id='jivo_action'>", "<div id='jivo_close_button' data-action='close'></div>", "</div>", "<% } %>", "<div id='header-avatar' class='header {{ config.widget_font_color }}'>", "<div id='header-avatar-container'>", "<div id='header-animate-container'>", "<div class='info'>", "<div class='agent-name'>{{ header }}</div>", "</div>", "</div>", "</div>", "<div class='clear'></div>", "</div>", "<div class='special-logo'></div>", "<div id='offline-form'<% if (nologo) {%> class='nologo'<% } %>>", "<div id='offline-form-inner'>", "<div id='offline-form-fields'>", "<div class='description'>{{ text }}</div>", "<% if (fields.get('message').show()) {%>", "<div class='field-wrapper message'>", "<textarea id='message' maxlength='{{ maxMessageLength }}' class='input-field offline-message' placeholder='{{ translate('lblYourMessage') }}<% if (fields.get('message').required()) {%>*<% } %>'>{{fields.get('message').value()}}</textarea>", "<div id='error-message' class='error-balloon multiline'>{{ translate('ofl_enterMessage') }}</div>", "</div>", "<% } %>", "<% if (fields.get('name').show()) {%>", "<div class='field-wrapper'>", "<input id='name' type='text' class='input-field' placeholder='{{ translate('lblIntroduceName') }}<% if (fields.get('name').required()) {%>*<% } %>' value='{{_.escape(cookie('client_name'))}}'>", "<div id='error-name' class='error-balloon'>{{ translate('ofl_enterName') }}</div>", "</div>", "<% } %>", "<% if (fields.get('phone').show()) {%>", "<div class='field-wrapper'>", "<input id='phone' type='tel' class='input-field' placeholder='{{ translate('lblYourPhone') }}<% if (fields.get('phone').required()) {%>*<% } %>' value='{{ cookie('phone') }}'>", "<div id='error-phone' class='error-balloon'>{{ translate('ofl_enterValidPhone') }}</div>", "</div>", "<% } %>", "<% if (fields.get('email').show()) {%>", "<div class='field-wrapper'>", "<input id='email' type='email' class='input-field' placeholder='{{ translate('lblYourEmail') }}<% if (fields.get('email').required()) {%>*<% } %>' value='{{ cookie('email') }}'>", "<div id='error-email' class='error-balloon'>{{ translate('ofl_enterValidEmail') }}</div>", "</div>", "<% } %>", "<div class='buttons'>", "<div class='left-button'>", "<a id='cancel' class='jivoBtn cancel' href='#'>{{ translate('lblEvaluateCancel') }}</a>", "</div>", "<div>", "<input id='submit' type='button' value='{{ translate('lblSend') }}' class='jivoBtn accept'>", "</div>", "</div>", "<div class='captcha-container'>", "<div class='body'>", "<img src='' alt='captcha code image'>", "<input type='text' class='input-field cap_symbols' value='' placeholder='{{ translate('lblCaptcha') }}'>", "<input id='resend' type='button' class='jivoBtn accept' value='Ok'>", "</div>", "<p><div class='error'>{{ translate('lblCaptchaError') }}</div></p>", "</div>", "<a id='cancelCap' class='jivoBtn cancel' href='#'>{{ translate('lblEvaluateCancel') }}</a>", "<div class='clear'/>", "</div>", "<div id='jivosite-adword' class='<% if (locale) {%>jivosite-adword-{{ locale }}<% } %>'>", "<div class='content'>", "{{ link }}", "</div>", "</div>", "</div>"].join("\n"))
    },
    online: {
        chat: underscore.template(["<% if (jivo.isSeparateWindow()) {%>", "<div id='jivo_action'>", "<div id='jivo_close_button' data-action='close'></div>", "</div>", "<% } %>", "<div id='jivosite-iframe-chat'>", "<div id='header-avatar' class='header {{ config.widget_font_color }}'>", "<div id='header-avatar-container'>", "<div id='header-animate-container'>", "<div class='header-animate-info header-animate-first'>", "<div class='avatar'></div>", "<div class='info'>", "<div class='agent-name'>{{ agent.name }}</div>", "<div class='title'>{{ agent.title }}</div>", "</div>", "</div>", "<div class='header-animate-info header-animate-second'>", "<div class='avatar'></div>", "<div class='info'>", "<div class='agent-name'></div>", "<div class='title'></div>", "</div>", "</div>", "</div>", "</div>", "<div class='clear'></div>", "<div class='sound_player'></div>", "</div>", "<div id='chat-body'<% if (templateData.nologo) {%> class='nologo'<% } %>>", "<div id='jivo-chat'>", "<div id='scrollbar-container'>", "<div id='messages-div' class='viewport'>", "<div id='messages-div-outer'>", "<div id='messages-div-inner' class='overview messages-div-inner'>", "<div id='messages-div-inner-clear'></div>", "</div>", "</div>", "<div id='agent-typing'></div>", "</div>", "</div>", "</div>", "<div id='jivosite-adword' class='<% if (templateData.locale) {%>jivosite-adword-{{ templateData.locale }}<% } %>'>", "<div class='content'>", "{{ templateData.link }}", "</div>", "</div>", "<div id='input-div' class='<% if (devicejs.iphone()) {%>input-div-iphone<% } %>'>", "<div class='input-div-table'>", "<div class='td-textarea'>", "<textarea id='input-field' class='<% if (jivo.getCallWidget()) {%>input-field-callwidget<% } %>' name='input-field' maxlength='{{ templateData.maxMessageLength }}' placeholder='{{ templateData.lblEnterMessageHere }}' autocomplete='off'></textarea>", "</div>", "<div class='td-button'>", "<input id='input-button' type='button' value=<% if (jivo.isTablet() && !jivo.isSeparateWindow()) {%>'{{ translate('lblReply') }}'<% } else {%>'{{ translate('lblSend') }}' disabled<% } %> class='jivoBtn accept'>", "</div>", "</div>", "</div>", "</div>", "</div>", "<div class='special-logo'></div>", "<svg id='svg-image-blur'>", "<filter id='blur-effect'>", "<feGaussianBlur stdDeviation='5' />", "</filter>", "</svg>"].join("\n")),
        agentMessage: underscore.template(["<div class='new-msg-container {{ type }} {{ color }} <% if (history && history === true) {%>new-msg-container-history<% } %>'>", "<div class='pip'></div>", "<div class='new-msg-body {{ type }}'>", "<div class='new-msg-body-inner'>", "<div class='new-msg-text <% if (history && history === true) {%>new-msg-text-history<% } %>'>", "<div class='new-msg-text-inner'>{{ highlightUrls(text) }}</div>", "</div>", "</div>", "</div>", "<div class='new-time'>{{ dateFormat(time, 'H:MM') }}</div>", "</div>"].join("\n")),
        clientMessage: underscore.template(["<div class='new-msg-container {{ type }} <% if (history && history === true) {%>new-msg-container-history<% } %>'>", "<div class='pip'></div>", "<div class='new-msg-body {{ type }}'>", "<div class='new-msg-body-inner'>", "<div class='new-msg-text <% if (history && history === true) {%>new-msg-text-history<% } %>'>", "<div class='new-msg-text-inner'>{{ nl2br(highlightUrls(text)) }}</div>", "</div>", "</div>", "</div>", "<div class='new-time'>{{ dateFormat(time, 'H:MM') }}</div>", "</div>"].join("\n")),
        systemMessage: underscore.template(["<div class='new-msg-container {{ type }}'>", "<div class='new-msg-body {{ type }}'>", "<div class='new-msg-body-inner'>", "<div class='new-msg-text'>", "<div class='new-msg-text-inner'>{{ text }}</div>", "</div>", "</div>", "</div>", "</div>"].join("\n")),
        emptyMessage: underscore.template(["<div class='new-msg-container {{ type }}' style='visible:hidden'>", "</div>"].join("\n")),
        connectionError: underscore.template(["<div class='connectionError new-msg-container systemMessage'>", "<div class='new-msg-body systemMessage'>", "<div class='new-msg-body-inner'>", "<div class='new-msg-text'>", "<div class='new-msg-text-inner'>{{ text }}</div>", "</div>", "</div>", "</div>", "</div>"].join("\n")),
        cobrowse_highlight: underscore.template(["<div class='new-msg-container agentHighlight {{ color }} <% if (history && history === true) {%>new-msg-container-history<% } %>'>", "<div class='pip'></div>", "<div class='new-msg-text <% if (history && history === true) {%>new-msg-text-history<% } %>'>", "<div class='new-msg-text-inner'>{{ highlightUrls(comment) }}</div>", "</div>", "<div class='cobrowse-btn-container'>", "<a href='#' data-url='{{ page_url }}' data-hash='{{ hash }}'>", "<div class='white-cloud'></div>{{ translate('lblView') }}", "</a>", "</div>", "<div class='new-time'>{{ dateFormat(time, 'H:MM') }}</div>", "</div>"].join("\n")),
        messageNode: underscore.template(["<div class='new-msg-text <% if (history && history === true) {%>new-msg-text-history<% } %>'>", "<div class='new-msg-text-inner'><% if (type !== 'connectionError') {%>{{ highlightUrls(text) }}<% } else { %>{{ text }}<% } %></div>", "</div>"].join("\n")),
        typing: underscore.template(["<div class='agent-typing-wrapper'>", "<div class='agent-typing'>", "{{ translate('lblPencilHint') }}", "</div>", "</div>"].join("\n")),
        receiveFile: underscore.template(["<div class='new-msg-container {{ type }}'>", "<div class='new-msg-body'>", "<div class='new-msg-body-inner'>", "<div class='new-msg-text'>", "<div class='new-msg-text-inner'>{{ translate('lblSendingFile').replace('_FILE_', fileName).replace('_AGENT_', agentName) }}</div>", "</div>", "<div class='evaluation-btn-container'>", "<a href='{{ fileUrl }}' id='receive_file_{{ fileId }}' data-id='{{ fileId }}' data-name='{{ fileName }}' target='_blank' class='button accept'>{{ translate('lblReceiveFile') }}</a>", "<a href='#' class='button decline' data-id='{{ fileId }}' data-name='{{ fileName }}'>{{ translate('lblDeclineFile') }}</a>", "</div>", "</div>", "</div>", "</div>"].join("\n")),
        highlight: underscore.template(["<div class='new-msg-container {{ type }}'>", "<div class='pip'></div>", "<div class='new-msg-body {{type }}'>", "<div class='new-msg-body-inner'>", "<div class='new-msg-text'>", "<div class='new-msg-text-inner'>{{ text }}</div>", "</div>", "<div class='cobrowse-btn-container'>", "<a href='#' data-href='{{ hash }}'>", "<div class='white-cloud'></div>{{ lblView }}", "</a>", "</div>", "</div>", "</div>", "<div class='new-time'>{{ dateFormat(time, 'H:MM') }}</div>", "</div>"].join("\n")),
        introduceForm: underscore.template(["<div id='introduce-form'<% if (nologo) {%> class='nologo'<% } %>>", "<div id='jivosite-adword' class='<% if (locale) {%>jivosite-adword-{{ locale }}<% } %>'>", "<div class='content'>", "{{ link }}", "</div>", "</div>", "<div id='introduce-avatar'>", "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABzCAYAAACrQz3mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADkdJREFUeNrsXQu0VkUVHn4el8fVFAIFcwmCRiBYKd0lj1zx8oFIAipaUGgSxIqHddUkWCVSBMrjQgsVgtQgwgcLFB9Qll5AeabiJSyIWyQqmhYgL3m0P8++9nPunnP/85/HzHDvXmuvH84598ye/Z09s2fPnplaJ06cUNm0bt065RAVErcj7kDcivlc4ibMBcSnEdcmPka8j/gw8b+ZdxHvZN5CvJV4v3KU6jgm7/nE3Yi7MLcL8bcA9Az+91kBzwHQNcylxH93RTm1LLfMBsR9ia8i7k3cwoAMu4lXEj9L/DTxAWfAtIHog7qZfgYxkLbRU8SLi4qKFiVUd/fBpEq0oZ9i4iHE9R1o1Q4RP0I8lYDdXgOmJ/xl9HMX8bV5/PlHxGXsvMCJKWenpsLBgbOzj5R9lMqpw85QQZaDBGepJTtOcKLaEzfKQ47lxJOpnJerJZgk9CX0M5H7w1zpHe6/4JysJt5GCjweo0wZ+mlL3JUdLPTTZ4d4xXPEPyaZNlULMEnYpvRTwn1iLgTLW8J91aukqBMpylqLfr5IfA3xjWy5udDjxN8jWd87ZcEkQWfQz+gcHv2A+6P5pJAtFjlmaIpv4X69cQ5/MpPkH3NKgUkCdqKfOcSXVPEoxnjTiH9DSjhsq+dD9UG/+03i23MY624mHkH1We88mCTcdPqp6ut8jXgCmtI0m9GYmmEMn37KzXEQzaC6jXUSTG6SfkXcKeCxch6OPOESiBpQBxD/nLhNwKMbiG8N6jqsA5MEupp+fk3cVPPIQeJJaFKpYgdjqkxD4i9ws3ch8ZlZXDdrKLOLPyIMIzYSH4mx6g246R3H/5YITtFQqvcK68EkYUbSz+yAR14gHkaV2RFDZb5EfB3x19nTzIQUF4H359m7Lo2j/lQv1AEx5LnE3QMe/T49OztOMDMxAzktAEhETEYR99QBmSPB+bgNY0x2LsbzgD+fuiCIMJD4JWJYynkxAYrgfE+u7yHNY7NYX7FRLJbJ3h0srrPmESh+IFWyLKIDgGHBvcTNE+r+drM1vRnFMn31ac/jzraaP1mLMiu8d6OWSYXj634xAMgnvTpWDWQAIQqznB2qpIAEYVbmMeLWcb2Q6/0VOHmaR6C3F0mPp0ctK45mdhVk1tybxBa5N8L7LyBer9KbQUGTjcD5+8qb9hpMXC8ioOibr+dWRXyEeCUBGqmcSM0sFQ6noatwC7P6t1ElFkQMZ6GJ+r0KFx9Ngt4i/gnxvLDNrFC/oewc1dY0uV1St0wSarIGSLj61+cDpI8+Q7zMAiBB5zAAmMMsjGilC9hKj2ia3GmpgklADqefOzVA9ieBl8agwLlx9l0x0U3cdxdEBHQpD6kkQBElGp4KmBwQmCPcQnt9i24wHJL68NdrI32NOGqrA0Cf4Y/jmHAb+r06UTAJyIs4siPRnSTgwhiUBZkmK7sJIAyIAdAnecws0cPEFyVpmfOVHKLDLPvUmBTVJ2wlDNEU9f8wYdQ+VPp4P8v6jh9Mnv2QguYYP90do5JuVW4QQnbXxvSuuzXjUOh7eqxDE56PXK+J7BRFHEdml9OYozAFjgAKZ6hfmKFJQN0RNHhFeZMFfkLQYUNclik5PId4CLI3RuX0cAhI0BUqpkxC1uMNSo7lzomlmeVUDylD4A4S4I2YlXOZcosKVNXZE2EAhT6LhVsoY0YkMAnIZkrO2UFQfXYCyumk3KNLY37fL1m/fgIOzaJYZolwDZPJwxLKDLjAQTDbxPky1usw1nMueFQNJlnll5WXXuiniRHnI3Xl1VP6zASb6by4X8j6nSjcujGoWQ+yzEnCtZ1hXOWQ1ELFPFmeEp2R0Huns75zwUUPJlkJAr5XCrcQ5TmUkPANlZvUIImXsp7v0HjQXcJYphREf1V5M+ZJUV1HwUxyjSsCCX+WRhI5gUlWeaEmsjEh4XRIV8FMqqWqcIYmCLeAT9tcLPOHwjVkmj/tqlISpoMJv38F699Pt+cC5mDh2n0pJCn/x1Ew303y5az3KcKtIYFgUhOLqR1/eArrHBeloJT/OgpmeQplLGYcsgnRp28EWeZNwoseTWkRz/4Umqwk6J9JF8D6f0S4NUgEk6yyYjMIPy1IQyPcnOyssUwtSXOb12QP6TI+D8lPZaTk10+lr9xVmTkI/4bGs60EppRzsiRlxexwDEh0C39NsTwJj6skMHsJDy5PWTmvOQYm9i74OMXyJDx6nQQm9ZdIafSn/e82oFzXwEx7B6zXGZdsAm6tsy2zm/CHqwwsgMW6jGMOgbkhzcIYj1XCrW7ZYEqZ6avT1gwJ+5Gmk7eRoNhSA+VKuHTNBlNK11hrSEkvOQLmZqHJS4PWCNc+mUXJUH9Zsc1nNsFCthlS0hpHwHzGULlvMj7ZhKB7YUbJW5+UxbnzVUhyZb/Xd0wUyrhIa13bAcyLNV5T+q7hunVtDYxt86USjeOYBkl+RQeA2Uq4YSqshsWormQcYH3lVENlS8GV1gCzpXCj3IBVYhbgSsfGmcg0N7GhsYRPS4D5OeHGvwwIiMFvI8fArKVp2ZKmXcK1cwGmlFj7rgEBDys36aiBMvcI15oCTGl3xg8NeYcunlzwNwNlSvg0BpgFNlgJh6q2OQbk28rbTtWGVqwgo/EeTZ0QsNIxMFcZKlfCpyHArCNYyceGhHzCMTCNyKvBp05G6sBpmFDXkJCId77gCJB/UV4aZOqkwedoRmeyBpX0XeVt42kzITb6bWVuuk7sGgGmlHxs8lwRbHXWlZsw27L10LzhhITLlbwtQFok4XMoo/HGGhtWGvJqsHXoTMvARNwYOTebDMsh4fNBRhMgOMsS5W21DExb5JECPXsApjTB2sISoW2b27RFnnOEa28BzHLhRktLhMaOyrakX8LpedkSWSR8ygGmNN3VyiJrWGaJHAhoHLFElvOFazsAppTe2NEiMB+2RI5HLdJJB+HaloymU2/Ph5zZQMh6+JNhGbAE4SkblMG4SGeSbc0UFRXtFwDFvGJbi77E6YbLf1CZmeqS6POq8rwvJij2V1if1LF3tghMpOWbSv3E0K3EIl1IuHyimwowtYm1FhF2fjRxxBSOhLJpnlVKIivNBlPKzO7FZ1zZQjhuY3bKZa41UGZQfwk8pAVeqz8Fk3eEelsIHHS0zDqLU2xukZqBlck2rX3poCoHdIDb9mzLBEkTrf0sAxMz7Feo5FeLHeG+aZdl9Zfw+BS3bDCfFR68QdlH+1NQMj4aGxf+Sng8J4G5TDPe7GhhpU44/v58+kvsWy/tXb+sEph8jqU0MB5qIZjHqxuYyjvUzk/YaOuAZJmg3wp/MJizzauTZR63zCqh/yHCrcXZ/zkJTLJOgOnPPGii5P2BaprZ9GgQ4+Dv1xdqwWSSAsrFlo05Gzj+/rBjS2kXy0qbPElg3i9cwxrOPhaB2SgFMOtYUtc+Sl5DO61KMKmpxcpcaYuSeyyyzsIUymhoiVXeI9wCPttysUyQtIsiDuseUI3ALLSgngNY77ngI4NJ1olcl+ell9DXUr8GzFSssr4GNOCyJmcwmcYJ15BOMsYwkPDq0kgFNX0sxxglp++M0/2BFkyyTuSG/k64NZ539DJF2Kk6jXHvXcpbTGvCKqHf8cIt4LEpNJhMozSOwQOGnCHMsf4gxbLGGnJ6HtA4YKOC/jYQTLJOTANJs+w9iUemXE8czoK9d9Jc1HSfSv8IyJGsXz8Bhz15g8mAjtaY9hQO/qZBvRnI01JWLKwEJ+SNTqPJJX221zg9m5R8Jls4MJlGaAbWS0iAJBXcgCuHaZ5mhvpotAQ4IS/Rk+lZj48pOfo0Ipd35AQmWSd2b5QW8eDgzgUJ9J/YYweHm2FOsdiUI+IjbHmODPvJcbcQrL/5Sj4IFXrfEBuYDChc5Y2age3PYqoUvNRvsfBIb2yu7CJYDU5jQmoq4qVnxvRe6G+gcH1jmKFgTscUZykbfeQflXe4daUhAwF+f54govkarryFtmcrdwjrTxDwnqW8ldShjymmumNqS8raf5+4O/GWRMDkwhH4lU4fwosGU2UWhnhXZ+4PkA5RT7lLFZv64iDTFaSDYznWv7/y1nzWFm7jZIRQy+xDg8lCDFfyOchIhOpPlVkR8LdwZJC98B0V80GiltCH7MiUkB7KAvSAAw6Waj7iETzWVImDycJMVvJpfgB0EFVkadaz+PIgPI6m6ue4FYYhDCkeUt5BPwez9HGd8rIE6mnGk6PzKSxvMFmoUiVnvh9jy0OTO4ijNher6kv/4OHNPHZ05mmaVuQEd8l7UBwFTAb0FfT7mts4rv50VUMVhJQc3awTTmL4qoqwBjSOZXu9lP5IiBogT6YgIHtTUxxpMW9kMEmAfcrbSmVtDVZ5EfR2Oelxb9QXRW5mfU3udGV+vtMlmkEgjvXp0Jxl+qwUgo2qwSgnGuUHMirFvtSdBJzFA973avASCZGdvqwnZTWYDCiCBj1UyscrOUCItXYn/SRyfnesfWZNPxpIM3myoip92WWZQj+KcejmagriZk8NRYl/0Ilbpu+rQxRkdDUCsoQzNcLoyF7L9Fkpvk5ssvj4KQ4i6tc8LJBOWabvC7xUebP2PSwGBcoJk+XwB+IfcWZGvnpxD8ws4RGoR46qyYVJR5iR6ZBP9h+8918Ql4adnHa2mdU0vauJMS7FjmCYLjJxWA2mogpDAgk55yovbwfyl5rWpXHL1HyZNytv6qyvhU0vtgrAXOQizcdpzDIrgRnlZQlQQ/7qsZU2cmdNbGqMzZVXMiPd8oCylGwH009Yg4E+FluOdVHJbNaIdY9rudnEzlfbXXGhXQPTT8hfRRY4dq7ChrotlXfqIFaJNWGHBs9gVh/ZD/vY0UF8FAcN4DTCcuXlwyILroyfcZL+J8AADxI/P7hyHu8AAAAASUVORK5CYII=' />", "</div>", "<div id='introduce-caption'>{{ translate('lblIntroduceRequest') }}</div>", "<% if (fields.get('name').show()) {%>", "<div class='field-wrapper'>", "<input id='name' type='text' class='input-field' placeholder='{{ translate('lblIntroduceName') }}<% if (fields.get('name').required()) {%>*<% } %>' value='{{_.escape(cookie('client_name'))}}'>", "<div id='error-name' class='error-balloon'>{{ translate('ofl_enterName') }}</div>", "</div>", "<% } %>", "<% if (fields.get('email').show()) {%>", "<div class='field-wrapper'>", "<input id='email' type='email' class='input-field' placeholder='{{ translate('lblYourEmail') }}<% if (fields.get('email').required()) {%>*<% } %>' value='{{ cookie('email') }}'>", "<div id='error-email' class='error-balloon'>{{ translate('ofl_enterValidEmail') }}</div>", "</div>", "<% } %>", "<% if (fields.get('phone').show()) {%>", "<div class='field-wrapper'>", "<input id='phone' type='tel' class='input-field' placeholder='{{ translate('lblYourPhone') }}<% if (fields.get('phone').required()) {%>*<% } %>' value='{{ cookie('phone') }}'>", "<div id='error-phone' class='error-balloon'>{{ translate('ofl_enterValidPhone') }}</div>", "</div>", "<% } %>", "<div class='message field-wrapper'>", "<textarea id='message' class='input-field' placeholder='{{ translate('lblYourMessage') }}<% if (fields.get('message').required()) {%>*<% } %>' maxlength='{{ maxMessageLength }}'><% if (typeof valueInputField !== 'undefined') {%>{{ valueInputField }}<% } %></textarea>", "<div id='error-message' class='error-balloon multiline'>{{ translate('ofl_enterMessage') }}</div>", "</div>", "<% if (departments) { %>", "<div class='departments'>", "<div id='current-department' class='input-field' data-id='{{ departments[0].id }}'>{{ departments[0].name }}</div>", "<ul id='departments-list'>", "<% _.each(departments, function(department) { %>", "<li data-id='{{ department.id }}'>{{ department.name }}</li>", "<% }) %>", "</ul>", "</div>", "<% } %>", "<div class='buttons'><div id='cancel-introduce' class='left-button'><a id='cancel' class='jivoBtn cancel' href='#'>{{ translate('lblEvaluateCancel') }}</a></div><div><input id='submit' type='button' value='{{ send }}' class='jivoBtn accept'></div></div>", "</div>"].join("\n")),
        introducePopup: underscore.template(["<div id='introduce-popup' style='height: 0'>", "<div id='introduce-popup-content'>", "<% if (config.contacts_ask !== -1) {%><a id='cancel' href='#'></a><% } %>", "<i class='icon-thx'></i>", "<div class='text-field'>{{ translate('lblIntroduceRequest') }}:</div>", "<% if (fields.get('name').show()) {%>", "<div class='field-wrapper'>", "<input id='name' type='text' class='input-field' placeholder='{{ translate('lblIntroduceName') }}<% if (fields.get('name').required()) {%>*<% } %>' value='{{ cookie('client_name') }}'>", "<div id='error-name' class='error-balloon'>{{ translate('ofl_enterName') }}</div>", "</div>", "<% } %>", "<% if (fields.get('email').show()) {%>", "<div class='field-wrapper'>", "<input id='email' type='email' class='input-field' placeholder='{{ translate('lblYourEmail') }}<% if (fields.get('email').required()) {%>*<% } %>' value='{{ cookie('email') }}'>", "<div id='error-email' class='error-balloon'>{{ translate('ofl_enterValidEmail') }}</div>", "</div>", "<% } %>", "<% if (fields.get('phone').show()) {%>", "<div class='field-wrapper'>", "<input id='phone' type='tel' class='input-field' placeholder='{{ translate('lblYourPhone') }}<% if (fields.get('phone').required()) {%>*<% } %>' value='{{ cookie('phone') }}'>", "<div id='error-phone' class='error-balloon'>{{ translate('ofl_enterValidPhone') }}</div>", "</div>", "<% } %>", "<div class='buttons'><input id='submit' type='button' value='{{ send }}' class='jivoBtn accept'></div>", "</div>", "</div>"].join("\n")),
        departments: underscore.template(["<div id='departments'<% if (nologo) {%> class='nologo'<% } %>>", "<% _.each(departments, function(department) { %>", "<a class='department' data-id='{{ department.id }}'>{{ department.name }}</a>", "<% }) %>", "</div>"].join("\n")),
        callButton: underscore.template("<div id='callme'><div></div></div>"),
        evaluation: underscore.template(["<div id='evaluation-popup'>", "<div class='evaluation-text'>", "<div class='evaluation-text-inner'>{{ translate('lblEvaluatePlease') }}</div>", "</div>", "<div class='evaluation-btn-container visible'>", "<a href='#' class='button' id='positive'></a>", "<a href='#' class='button' id='negative'></a>", "<a href='#' class='cancel-icon' id='close-eval'></a>", "</div>", "<div class='evaluation-btn-container hidden'>", "<a href='#' class='button' id='cancel'>{{ translate('lblEvaluateCancel') }}</a>", "</div>", "</div>"].join("\n"))
    }
};

function log() {
    if (!("logs" in config)) {
        return
    }
    var e = Array.prototype.slice.call(arguments);
    if (typeof console != "undefined" && typeof console.log == "function") {
        if (window.opera) {
            var t = 0;
            while (t < arguments.length) {
                console.log("Item " + (t + 1) + ": " + arguments[t]);
                t++
            }
        } else if (e.length == 1 && typeof e[0] == "string") {
            console.log(e.toString())
        } else {
            console.log(e)
        }
    } else if (typeof console != "undefined" && typeof console.log == "object") {
        Function.prototype.call.call(console.log, console, e)
    }
}

function hexToR(e) {
    return parseInt(cutHex(e).substring(0, 2), 16)
}

function hexToG(e) {
    return parseInt(cutHex(e).substring(2, 4), 16)
}

function hexToB(e) {
    return parseInt(cutHex(e).substring(4, 6), 16)
}

function cutHex(e) {
    return e.charAt(0) == "#" ? e.substring(1, 7) : e
}

function rgbToHex(e, t, i) {
    return toHex(e) + toHex(t) + toHex(i)
}

function toHex(e) {
    e = parseInt(e, 10);
    if (isNaN(e)) return "00";
    e = Math.max(0, Math.min(e, 255));
    return "0123456789ABCDEF".charAt((e - e % 16) / 16) + "0123456789ABCDEF".charAt(e % 16)
}

function adjustLightness(e, t, i) {
    var n = hexToR(e);
    var r = hexToG(e);
    var a = hexToB(e);
    var s = ColorConverter.toHSV(new RGB(n, r, a));
    if (s.v > 0) s.v = s.v * t;
    else s.v = 100 * (t - 1);
    s.s = s.s * i;
    var o = ColorConverter.toRGB(s);
    var l = rgbToHex(o.r, o.g, o.b);
    return "#" + l
}

function getLightness(e) {
    var t = hexToR(e);
    var i = hexToG(e);
    var n = hexToB(e);
    var r = ColorConverter.toHSV(new RGB(t, i, n));
    log("hsv.v=" + r.v);
    return r.v
}

function isLightColor(e) {
    return getLightness(e) > 65
}

function HSV(e, t, i) {
    if (e <= 0) {
        e = 0
    }
    if (t <= 0) {
        t = 0
    }
    if (i <= 0) {
        i = 0
    }
    if (e > 360) {
        e = 360
    }
    if (t > 100) {
        t = 100
    }
    if (i > 100) {
        i = 100
    }
    this.h = e;
    this.s = t;
    this.v = i
}

function RGB(e, t, i) {
    if (e <= 0) {
        e = 0
    }
    if (t <= 0) {
        t = 0
    }
    if (i <= 0) {
        i = 0
    }
    if (e > 255) {
        e = 255
    }
    if (t > 255) {
        t = 255
    }
    if (i > 255) {
        i = 255
    }
    this.r = e;
    this.g = t;
    this.b = i
}

function CMYK(e, t, i, n) {
    if (e <= 0) {
        e = 0
    }
    if (t <= 0) {
        t = 0
    }
    if (i <= 0) {
        i = 0
    }
    if (n <= 0) {
        n = 0
    }
    if (e > 100) {
        e = 100
    }
    if (t > 100) {
        t = 100
    }
    if (i > 100) {
        i = 100
    }
    if (n > 100) {
        n = 100
    }
    this.c = e;
    this.m = t;
    this.y = i;
    this.k = n
}
var ColorConverter = {
    _RGBtoHSV: function(e) {
        var t = new HSV(0, 0, 0);
        var i = e.r / 255;
        var n = e.g / 255;
        var r = e.b / 255;
        var a = Math.min(i, n, r);
        var s = Math.max(i, n, r);
        var o = s - a;
        t.v = s;
        if (o == 0) {
            t.h = 0;
            t.s = 0
        } else {
            t.s = o / s;
            var l = ((s - i) / 6 + o / 2) / o;
            var c = ((s - n) / 6 + o / 2) / o;
            var u = ((s - r) / 6 + o / 2) / o;
            if (i == s) {
                t.h = u - c
            } else if (n == s) {
                t.h = 1 / 3 + l - u
            } else if (r == s) {
                t.h = 2 / 3 + c - l
            }
            if (t.h < 0) {
                t.h += 1
            }
            if (t.h > 1) {
                t.h -= 1
            }
        }
        t.h = Math.round(t.h * 360);
        t.s = Math.round(t.s * 100);
        t.v = Math.round(t.v * 100);
        return t
    },
    _HSVtoRGB: function(e) {
        var t = new RGB(0, 0, 0);
        var i = e.h / 360;
        var n = e.s / 100;
        var r = e.v / 100;
        if (n == 0) {
            t.r = r * 255;
            t.g = r * 255;
            t.b = r * 255
        } else {
            var a = i * 6;
            var s = Math.floor(a);
            var o = r * (1 - n);
            var l = r * (1 - n * (a - s));
            var c = r * (1 - n * (1 - (a - s)));
            var u, f, d;
            if (s == 0) {
                u = r;
                f = c;
                d = o
            } else if (s == 1) {
                u = l;
                f = r;
                d = o
            } else if (s == 2) {
                u = o;
                f = r;
                d = c
            } else if (s == 3) {
                u = o;
                f = l;
                d = r
            } else if (s == 4) {
                u = c;
                f = o;
                d = r
            } else {
                u = r;
                f = o;
                d = l
            }
            t.r = u * 255;
            t.g = f * 255;
            t.b = d * 255;
            t.r = Math.round(t.r);
            t.g = Math.round(t.g);
            t.b = Math.round(t.b)
        }
        return t
    },
    _CMYKtoRGB: function(e) {
        var t = new RGB(0, 0, 0);
        var i = e.c / 100;
        var n = e.m / 100;
        var r = e.y / 100;
        var a = e.k / 100;
        t.r = 1 - Math.min(1, i * (1 - a) + a);
        t.g = 1 - Math.min(1, n * (1 - a) + a);
        t.b = 1 - Math.min(1, r * (1 - a) + a);
        t.r = Math.round(t.r * 255);
        t.g = Math.round(t.g * 255);
        t.b = Math.round(t.b * 255);
        return t
    },
    _RGBtoCMYK: function(e) {
        var t = new CMYK(0, 0, 0, 0);
        var i = e.r / 255;
        var n = e.g / 255;
        var r = e.b / 255;
        t.k = Math.min(1 - i, 1 - n, 1 - r);
        t.c = (1 - i - t.k) / (1 - t.k);
        t.m = (1 - n - t.k) / (1 - t.k);
        t.y = (1 - r - t.k) / (1 - t.k);
        t.c = Math.round(t.c * 100);
        t.m = Math.round(t.m * 100);
        t.y = Math.round(t.y * 100);
        t.k = Math.round(t.k * 100);
        return t
    },
    toRGB: function(e) {
        if (e instanceof RGB) {
            return e
        }
        if (e instanceof HSV) {
            return this._HSVtoRGB(e)
        }
        if (e instanceof CMYK) {
            return this._CMYKtoRGB(e)
        }
    },
    toHSV: function(e) {
        if (e instanceof HSV) {
            return e
        }
        if (e instanceof RGB) {
            return this._RGBtoHSV(e)
        }
        if (e instanceof CMYK) {
            return this._RGBtoHSV(this._CMYKtoRGB(e))
        }
    },
    toCMYK: function(e) {
        if (e instanceof CMYK) {
            return e
        }
        if (e instanceof RGB) {
            return this._RGBtoCMYK(e)
        }
        if (e instanceof HSV) {
            return this._RGBtoCMYK(this._HSVtoRGB(e))
        }
    }
};
window.onerror = function(e, t, i) {
    reportException({
        message: e,
        lineNumber: i,
        fileName: t
    })
};
var chat_contents = {
    isInit: false,
    init: function(e, t, i) {
        log("CHAT_CONTENTS: init", t);
        this.view_settings = {
            backgroundColor: config.widget_color,
            borderColor: adjustLightness(config.widget_color, .6, 1),
            isDarkText: config.widget_font_color == "dark"
        };
        if (this.view_settings.isDarkText) {
            this.view_settings.shadowCss = adjustLightness(this.view_settings.backgroundColor, 1.15, .7) + " 0 1px";
            this.view_settings.textColor = adjustLightness(this.view_settings.backgroundColor, .1, .5)
        } else {
            this.view_settings.shadowCss = adjustLightness(this.view_settings.backgroundColor, .6, 1) + " 0 -1px";
            this.view_settings.textColor = "#ffffff"
        }
        if (e === "online") {
            if (!this.isInit) {
                chat_view_online.create(this.view_settings, i)
            }
            if (typeof t === "object" && t.start === "call" && config.options & 128) {
                if (jivo.getCallWidget()) {
                    jivo.handle("cw_ping", {
                        title: false,
                        invitation: "jivo_api.open"
                    })
                } else {
                    this.wpInit()
                }
            }
        } else {
            if (!this.isInit) chat_view_offline.create(this.view_settings, i)
        }
        this.callWidgetButtonInit();
        this.isInit = true
    },
    updateAgent: function(e) {
        var t = {
            "agent.id": e.agent_id,
            "agent.avatar": e.avatar_url,
            "agent.name": e.display_name,
            "agent.title": e.title,
            "agent.vox_name": e.vox_name,
            "agent.online": true,
            "agent.disableAnimation": e.disableAnimation ? true : false
        };
        if (e.state && !jivo.getCallWidget()) {
            t["agent.calls"] = e.state.available_for_calls
        } else {
            this.callWidgetButtonInit()
        }
        chat_view_online.setChatAttr(t)
    },
    callInit: function(e) {
        this.callWidgetButtonInit();
        if (typeof e === "object" && e.start === "call") {
            if (jivo.getCallWidget()) {
                jivo.handle("cw_ping", {
                    title: false,
                    invitation: "jivo_api.open"
                })
            } else {
                if (chat_view_online.getChatModel().get("agent.id")) {
                    if (chat_view_online.getChatModel().get("agent.calls")) {
                        chat_view_online.getCallView().addMessage(translate("c_callProcessing"));
                        chat_view_online.getCallModel().getWebPhone().handle("call")
                    } else {
                        chat_view_online.getCallView().addMessage(translate("lblWebPhoneNotConnected"))
                    }
                } else {
                    if (config.options & 128) {
                        this.wpInit()
                    }
                }
            }
        }
    },
    callWidgetButtonInit: function() {
        var e = jivo.getCallWidget(),
            t = config.chat_mode === "online" ? chat_view_online : chat_view_offline;
        if (e && e.state !== "CALL") {
            callWidgetPing(function(e) {
                var i = e.show_form ? true : false;
                t.setChatAttr({
                    "agent.calls": i,
                    can_enter_phone: i
                })
            })
        }
    },
    wpInit: function() {
        var e = chat_view_online.getCallModel();
        if (!e.isInit) {
            this.wp_ready_hook = e.getWebPhone().on("WebPhoneAuthenticated", underscore.bind(this.wpReady, this));
            this.wp_fail_hook = e.getWebPhone().on("WebPhoneMicDisabled", underscore.bind(this.wpFail, this));
            e.getWebPhone().handle("init");
            chat_view_online.addConnectionError(translate("lblWaitForOperator"));
            e.isInit = true
        }
    },
    wpReady: function() {
        this.wp_ready_hook.off();
        this.wp_fail_hook.off();
        this.auto_call = true;
        jivo.handle("gui_start_call")
    },
    wpFail: function() {
        this.wp_ready_hook.off();
        this.wp_fail_hook.off();
        chat_view_online.addConnectionError(translate("lblWebPhoneMicError"))
    },
    handle: function(e, t) {
        log("CHAT_CONTENTS: handling " + e);
        switch (e) {
            case "agent_typing":
                chat_view_online.setChatAttr({
                    "agent.typing": t.typing
                });
                break;
            case "agent_message":
                chat_view_online.setChatAttr({
                    "agent.typing": false
                });
                if (jivo.isVisitorsInsight()) {
                    chat_view_online.setChatAttr({
                        inputEnabled: true
                    })
                }
                if (t.invitation && $(".agentMessage").length > 0) {
                    chat_view_online.hideInvitationMessage()
                }
                chat_view_online.addAgentMessage(t.message);
                jivo.handle("gui_agent_message_ack", [t.msg_id]);
                if (jivo.isVisitorsInsight() && $(".connectionError").length > 0) {
                    chat_view_online.hideConnectionError()
                }
                break;
            case "system_message":
                chat_view_online.addSystemMessage(t.message);
                break;
            case "agent_service_message":
                handleServiceMessage(t);
                break;
            case "accept":
                this.updateAgent(t.agent_info);
                if (this.auto_call) {
                    this.auto_call = false;
                    chat_view_online.getCallModel().getWebPhone().handle("call")
                }
                if (config.contacts_ask === 1 && jivo.invitationText) {
                    chat_view_online.getIntroduceView().close()
                }
                if (config.departments) {
                    chat_view_online.getDepartmentsView().close()
                }
                break;
            case "agent_chat_close":
                var i = [],
                    n = ['<input type="button" class="jivoBtn reject reject-chat-btn" id="close-chat-btn" value="' + translate("lnkCloseThisWindow") + '" />'];
                chat_view_online.hideConnectionError();
                if (!jivo.isSeparateWindow()) {
                    n.unshift('<input type="button" class="jivoBtn accept accept-chat-btn" id="restart-chat-btn" value="' + translate("lnkRestartChat") + '" />')
                }
                if (!(t && t.reason && t.reason === 8)) {
                    i.push(translate("lblAgentDisconnected"));
                    i.push(n.join(""));
                    chat_view_online.setChatAttr({
                        inputEnabled: false
                    });
                    chat_view_online.addConnectionError(i.join("<br>"))
                }
                chat_view_online.setChatAttr({
                    "agent.calls": false,
                    "agent.typing": false
                });
                chat_view_online.getCallModel().getWebPhone().handle("disconnect");
                $(".reject-chat-btn").on("click", function() {
                    jivo.handle("gui_minimize")
                });
                $(".accept-chat-btn").on("click", function() {
                    jivo.handle("gui_resume")
                });
                break;
            case "gui_resume":
                chat_view_online.setChatAttr({
                    inputEnabled: true
                });
                chat_view_online.hideConnectionError();
                chat_view_online.chatMaximized();
                break;
            case "resume_ok":
                var r = t.agent_info,
                    a = t.client_info;
                if (typeof r === "object") {
                    r.disableAnimation = true;
                    this.updateAgent(t.agent_info)
                }
                chat_view_online.setChatAttr({
                    "client.name": a.name,
                    inputEnabled: true
                });
                var s = a.msg_history || [];
                chat_view_online.resetMessages(s);
                if (s.length) {
                    if (config.contacts_ask === 1) {
                        chat_view_online.getIntroduceView().close()
                    }
                    chat_view_online.getDepartmentsView().close();
                    if (underscore.findWhere(s, {
                            type: "clientMessage"
                        })) {
                        chat_view_online.setChatAttr({
                            can_enter_phone: false
                        })
                    }
                    var o = [];
                    underscore.each(s, function(e) {
                        if (e.type === "agentMessage" && !e.ack) {
                            o.push(e.msg_id)
                        }
                    }, this);
                    if (o.length) {
                        setTimeout(function() {
                            jivo.handle("gui_agent_message_ack", o)
                        }, 0)
                    }
                }
                break;
            case "connect_failed":
                chat_view_online.getCallModel().getWebPhone().handle("disconnect");
                var n = [{
                    title: translate("lblLeaveMessage"),
                    event: "gui_leave_msg"
                }];
                if (utils.hideOffline()) {
                    n = [{
                        title: translate("lnkCloseThisWindow"),
                        event: "gui_minimize"
                    }]
                }
                chat_view_msg.instance.models.message.set({
                    msg: translate("lblNoOperators"),
                    buttons: n
                });
                chat_view_msg.create(this.view_settings);
                break;
            case "gui_leave_msg":
                chat_view_offline.create(this.view_settings);
                break;
            case "focus_maximize":
                if (t === "offline") {
                    chat_view_offline.getFormView().inputFocus()
                } else {
                    chat_view_online.chatMaximized()
                }
                this.callWidgetButtonInit();
                break;
            case "show":
                this.callInit(t);
                break;
            case "maximize":
                chat_view_online.getMessagesView().setScrollBottom(0);
                this.callInit(t);
                break;
            case "gui_message":
                chat_view_online.addClientMessage(t);
                break;
            case "offline_success":
                chat_view_msg.instance.models.message.set({
                    header: translate("lblOfflineMessageSend"),
                    msg: translate("lblThankYouMessage"),
                    buttons: [{
                        title: translate("lnkCloseThisWindow"),
                        event: "gui_minimize"
                    }]
                });
                chat_view_msg.create(this.view_settings);
                break;
            case "offline_captcha":
                chat_view_offline.captcha(t);
                break;
            case "offline_failed":
                chat_view_msg.instance.models.message.set({
                    header: "An error occured",
                    msg: translate("lblMessageError"),
                    buttons: [{
                        title: translate("lnkCloseThisWindow"),
                        event: "gui_minimize"
                    }]
                });
                chat_view_msg.create(this.view_settings);
                break;
            case "transferred":
                chat_view_online.addConnectionError(translate("lblTransferred").replace("_AGENT_", t.agent_info.display_name));
                this.updateAgent(t.agent_info);
                break;
            case "update_agent_info":
                this.updateAgent(t.agent_info);
                break;
            case "cw_connecting":
                chat_view_online.getCallView().addMessage(translate("c_callProcessing"));
                chat_view_online.setChatAttr({
                    can_enter_phone: false
                });
                break;
            case "cw_connected":
                chat_view_online.getCallView().addMessage(translate("c_callConnected"));
                chat_view_online.setChatAttr({
                    can_enter_phone: false
                });
                $("#callme").css("display", "none");
                break;
            case "cw_call_end":
                chat_view_online.getCallView().addMessage(translate("c_callDisconnected"));
                $("#callme").css("display", "block");
                break;
            case "cw_show_form":
                if (!t.show_form) {
                    chat_view_online.getCallView().addMessage(translate("lblWebPhoneNotConnected"))
                }
                break;
            default:
                log("CHAT_CONTENTS: unhandled " + e, t)
        }
    }
};

function handleServiceMessage(e) {
    switch (e.service) {
        case "file_transfer":
            if (e.event === "receive_file_request") {
                chat_view_online.addReceiveFile({
                    fileUrl: e.file_url,
                    fileName: e.file_name,
                    fileId: e.file_id,
                    state: "pending",
                    agentName: chat_view_online.getChatAttr("agent.name")
                })
            }
            break;
        case "cobrowse":
            if (e.event === "highlight") {
                chat_view_online.addCobrowseHighlight({
                    page_url: e.page_url,
                    hash: e.hash,
                    comment: stripBrackets(e.comment),
                    state: "pending"
                })
            }
            break;
        default:
            log("CHAT_CONTENTS: unhandled agent_service_message", e)
    }
}
window.Jivo = {
    Online: {
        Models: {},
        Views: {},
        Collections: {},
        Controller: {},
        MAX_MESSAGE_LENGTH: 1e3
    },
    Offline: {
        Models: {},
        Views: {},
        Collections: {},
        Controller: {},
        MAX_MESSAGE_LENGTH: 1200
    },
    Message: {
        Models: {},
        Views: {},
        Controller: {}
    },
    Model: {},
    View: {},
    Collection: {}
};
Jivo.Model.Field = Backbone.Model.extend({
    defaults: {
        formId: "default-form-id"
    },
    valid: function() {
        return !this.required() || this.value().length > 0
    },
    required: function() {
        return this.show() && config.contacts_settings[this.id].required
    },
    show: function() {
        return config.contacts_settings[this.id].show
    },
    value: function() {
        var e = $("#" + this.get("formId")).find("#" + this.id);
        if (e.length === 0) {
            return ""
        } else {
            return $.trim(e.val())
        }
    }
});
Jivo.Model.Email = Jivo.Model.Field.extend({
    id: "email",
    valid: function() {
        var e = this,
            t = e.value();
        return t.length === 0 && !e.required() || utils.isValidValue_email(t)
    }
});
Jivo.Model.Phone = Jivo.Model.Field.extend({
    id: "phone",
    valid: function() {
        var e = this,
            t = e.value();
        return t.length === 0 && !e.required() || utils.isValidValue_phone(t)
    }
});
Jivo.Model.Name = Jivo.Model.Field.extend({
    id: "name"
});
Jivo.Model.Message = Jivo.Model.Field.extend({
    id: "message"
});
Jivo.Model.Error = Backbone.Model.extend({
    defaults: {
        name: "",
        messages: []
    },
    idAttribute: "name"
});
Jivo.Collection.Errors = Backbone.Collection.extend({
    model: Jivo.Model.Error
});
Jivo.View.Form = Backbone.View.extend({
    events: {
        "click #submit": "submit",
        "click #cancel": "cancel",
        "keydown input:text,textarea": "onKeyDown"
    },
    initialize: function() {
        var e = this;
        e.collection = new Jivo.Collection.Errors;
        e.collection.on("add", e.onErrorAdd, e);
        e.collection.on("remove", e.onErrorRemove, e);
        e.collection.on("reset", e.onReset, e);
        e.initializeSpecial()
    },
    initializeSpecial: function() {},
    valid: function() {
        var e = this;
        e.fields.each(function(t) {
            if (t.valid()) {
                e.collection.remove(t.id)
            } else {
                e.collection.add({
                    name: t.id,
                    messages: []
                })
            }
        }, e);
        return !e.collection.length
    },
    toggleError: function(e, t) {
        var i = this;
        if (t) {
            i.$("#" + e).parent().addClass("error-field");
            i.$("#error-" + e).show()
        } else {
            i.$("#" + e).parent().removeClass("error-field");
            i.$("#error-" + e).hide()
        }
        if (!jivo.isSeparateWindow()) i.updateHeight()
    },
    updateHeight: function() {
        jivo.handle("update_height", this.getHeight())
    },
    getHeight: function() {
        return 0
    },
    onErrorAdd: function(e) {
        this.toggleError(e.get("name"), true)
    },
    onErrorRemove: function(e) {
        this.toggleError(e.get("name"), false)
    },
    onReset: function(e, t) {
        underscore.each(t.previousModels, function(e) {
            this.toggleError(e.get("name"), false)
        }, this)
    },
    onKeyDown: function(e) {
        var t = this,
            i = $(e.target).attr("id");
        t.collection.remove(i);
        if (e.keyCode === 13 && (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA" && !hasClass(e.target, "offline-message"))) {
            e.preventDefault();
            t.submit()
        }
    }
});
Jivo.Online.Models.Chat = Backbone.Model.extend({
    defaults: {
        templateData: {
            pencilTitle: translate("lblPencilHint"),
            pencilSource: config.base_url + "/images/pencil.gif",
            callMe: translate("lblCallMe"),
            hangUp: translate("hangUp"),
            lblHangUpShort: translate("lblHangUpShort"),
            lblEvaluatePlease: translate("lblEvaluatePlease"),
            lblEvaluateThanks: translate("lblEvaluateThanks"),
            lblEvaluateCancel: translate("lblEvaluateCancel"),
            link: translate("lblPwrBy").replace("_URL_", "?utm_source=" + encodeURIComponent(location.hostname) + "&utm_medium=link&utm_content=offline_form&utm_campaign=self_ad"),
            nologo: !utils.showAd(),
            maxMessageLength: Jivo.Online.MAX_MESSAGE_LENGTH,
            locale: getIconLocale()
        },
        client: {
            id: 1,
            name: cookie("client_name"),
            phone: cookie("phone"),
            email: cookie("email"),
            title: false,
            avatar: false,
            typing: false
        },
        agent: {
            id: 2,
            name: translate("lblConnectedToAgent"),
            title: translate("lblOperatorsOnline"),
            avatar: false,
            calls: false,
            typing: false,
            online: false,
            disableAnimation: false
        },
        can_enter_phone: jivo.getCallWidget() ? true : false,
        inputEnabled: true,
        evaluate: false,
        "size.height": 362,
        "size.min-height": 200,
        "size.width": 287,
        "textarea.height": 32,
        "textarea.width": 226,
        "position.left": 0,
        "position.right": 0,
        "coordinates.x": 0,
        "coordinates.y": 0,
        "coordinates.dx": 0,
        "coordinates.dy": 0
    },
    initialize: function() {
        var e;
        if (jivo.isMobileOrTablet()) {
            e = translate("lblMessageHere")
        } else if (jivo.getCallWidget()) {
            e = translate("lblEnterMessageOrPhoneHere")
        } else {
            e = translate("lblEnterMessageHere")
        }
        this.defaults.templateData.lblEnterMessageHere = e
    },
    introduced: cookie("client_name") !== null || cookie("phone") !== null || cookie("email") !== null || false
});
Jivo.Online.Views.Chat = Backbone.View.extend({
    el: "#inner-chat",
    tagName: "div",
    previousScroll: 0,
    template: _templates.online.chat,
    headerTimeout: [],
    events: {
        "keydown    #input-field": "inputFieldKeyPress",
        "click      #input-button": "inputButtonClick",
        "focusin    #input-field": "inputFieldFocus",
        "input      #input-field": "messageInput"
    },
    initialize: function() {
        this.model.on("change:agent.name", this.setHeaderName, this);
        this.model.on("change:agent.title", this.setAgentTitle, this);
        this.model.on("change:agent.typing", this.agentTyping, this);
        this.model.on("change:agent.avatar", this.setAgentImage, this);
        this.model.on("change:client.typing", this.clientTyping, this);
        this.model.on("change:inputEnabled", this.setInputMode, this);
        this.model.on("change:agent.calls", this.updateCallMe, this);
        this.model.on("change:can_enter_phone", this.inputSizeChange, this);
        if (config.typing_insight == 1) {
            setInterval(underscore.bind(this.notifyInputChanged, this), 1e3)
        }
    },
    handleTyping: function(e) {
        this.model.set({
            "client.typing": e
        })
    },
    lastInputValue: "",
    notifyInputChanged: function() {
        var e = this.$el.find("#input-field").val();
        if (this.lastInputValue != e) {
            jivo.handle("gui_typing_insight", e);
            this.lastInputValue = e
        }
    },
    render: function() {
        var e = this.$el;
        e.append(this.template(this.model.toJSON()));
        this.model.set("agent.name", translate("lblConnectedToAgent"));
        this.inputAutoResize();
        if (jivo.isSeparateWindow()) {
            e.on("focus blur", "input[type=text],input[type=tel],input[type=email],textarea", JivoGui.handleSoftKeyboard)
        }
        getByIdFromParent("jivo_action").find("div").on("click", function() {
            if ($(this).attr("data-action") === "close") {
                var e = jivo.getCallWidget();
                if (e && e.state !== "CALL" && !e.clickClosedForm) {
                    jivo.handle("cw_ping")
                } else {
                    chat_view_online.chatMinimized()
                }
            }
        });
        if (!jivo.isMobileOrTablet()) {
            getByIdFromParent("jivo-chat").jivoDragEvent({
                handler: getByIdFromParent("jivo-drag-handle"),
                tracker: getByIdFromParent("jivo-mouse-tracker")
            }).bind("jivo.drag.init", $.proxy(this, "startResize")).bind("jivo.drag.move", $.proxy(this, "resize")).bind("jivo.drag.stop", $.proxy(this, "stopResize"))
        }
        $("input[placeholder], textarea[placeholder]").placeholder();
        $(window).on("resize", underscore.bind(this.windowResize, this));
        $("#messages-div-outer").on("scroll", underscore.bind(this.messagesScroll, this));
        if (utils.browser.msie && utils.browser.mV < 9) {
            this.$("#input-field").on("keydown paste", underscore.bind(this.messageInput, this))
        }
        if (devicejs.ios()) {
            $("#messages-div-inner").on("touchmove", function() {
                var e = $("#input-field");
                if (e.is(":focus")) {
                    e.trigger("blur")
                }
            })
        }
        this.requestRedraw();
        if (1 === config.contacts_ask) {
            this.showIntroduceForm(true)
        } else if (config.departments) {
            this.showDepartmentsSelector()
        }
        return this
    },
    inputFocus: function() {
        var e = this.$el.find("#input-field"),
            t;
        setTimeout(function() {
            t = $("#introduce-form");
            if ((!t.length || !t.is(":visible")) && !jivo.isSeparateWindow()) {
                e.focus()
            }
        }, 0);
        return e
    },
    inputAutoResize: function() {
        this.$("#input-field").autoResize({
            extraSpace: jivo.isMobileOrTablet() ? 12 : 0,
            animate: false,
            maxSize: 65,
            minSize: "original",
            onResize: underscore.bind(this.updateMessage, this),
            onAfterResize: underscore.bind(this.updateMessage, this)
        }).typing({
            start: underscore.bind(this.handleTyping, this, 1),
            stop: underscore.bind(this.handleTyping, this, 0),
            delay: 5e3
        })
    },
    setHeaderName: function() {
        var e = this.$el,
            t = this.model.get("agent.name"),
            i = this.model.get("agent.title") ? this.model.get("agent.title") : translate("lblOperatorsOnline"),
            n = e.find("#header-animate-container"),
            r;
        for (r = this.headerTimeout.length; r--;) {
            clearTimeout(this.headerTimeout[r])
        }
        n.removeClass("header-animate");
        if (this.model.get("agent.disableAnimation")) {
            e.find(".header-animate-info").find(".agent-name").text(t);
            this.setAgentTitle()
        } else {
            e.find(".header-animate-first").find(".agent-name").text(t);
            e.find(".header-animate-first").find(".title").text(i);
            this.headerTimeout[0] = setTimeout(function() {
                n.addClass("header-animate")
            }, 0);
            this.headerTimeout[1] = setTimeout(function() {
                e.find(".header-animate-second").find(".agent-name").text(t);
                e.find(".header-animate-second").find(".title").text(i)
            }, 400);
            if (!jivo.isMobileOrTablet()) {
                this.headerTimeout[2] = setTimeout(function() {
                    n.removeClass("header-animate")
                }, 1500)
            }
        }
        $("#agent-typing").empty();
        this.agentTyping()
    },
    setAgentTitle: function() {
        var e = this.model.get("agent.title") ? this.model.get("agent.title") : translate("lblOperatorsOnline");
        this.$el.find(".title").text(e)
    },
    setAgentImage: function() {
        this.$el.find(".avatar img").remove();
        if (config.options & 32) {
            if (this.model.get("agent.avatar") !== null) {
                this.$el.find(".avatar").append($("<img/>", {
                    src: config.avatar_url + "/avatars/" + this.model.get("agent.avatar")
                }));
                this.$el.find(".avatar").parent().addClass("has-avatar")
            } else {
                this.$el.find(".avatar").parent().removeClass("has-avatar")
            }
        }
    },
    setInputMode: function() {
        var e = this.model.get("inputEnabled"),
            t = chat_view_online.getMessagesView(),
            i = t.getScrollBottom();
        this.$("#input-div").css("visibility", e ? "visible" : "hidden");
        this.$("#messages-div").css("bottom", e ? 40 : 0);
        t.setScrollBottom(i)
    },
    agentTyping: function() {
        var e = $("#agent-typing");
        if (this.model.get("agent.typing")) {
            if (e.is(":empty")) {
                e.append(_templates.online.typing({
                    agentName: this.model.get("agent.name")
                }))
            }
            e.show()
        } else {
            e.hide()
        }
    },
    clientTyping: function() {
        chat_view_online.typing(this.model.get("client.typing"))
    },
    inputFieldKeyPress: function(e) {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.inputSendMessage(e.currentTarget.value, $(e.currentTarget), $("#input-button")[0])
        }
    },
    inputButtonClick: function(e) {
        if (jivo.isTablet() && !jivo.isSeparateWindow()) {
            e.preventDefault();
            jivo.handle("gui_answer_proactive")
        } else {
            var t = $("#input-field");
            this.inputSendMessage(t.val(), t, $(e.currentTarget)[0])
        }
    },
    inputSendMessage: function(e, t, i) {
        if ($.trim(e).length !== 0) {
            var n = this.model.get("can_enter_phone");
            this.model.set("can_enter_phone", false);
            if (n && jivo.getCallWidget() && !jivo.isMobileOrTablet() && utils.isValidValue_mobilePhone(e)) {
                jivo.handle("cw_ping");
                jivo.cw.callwidget.handle("setPhoneNumber", e.replace(/[^0-9]/gim, ""));
                return
            }
            if (!chat_view_online.getChatModel().introduced && (jivo.invitationText || jivo.isMobileOrTablet()) && 1 === config.contacts_ask) {
                if (jivo.isMobileOrTablet()) {
                    t.blur()
                }
                this.showIntroduceForm(false, e)
            } else {
                Jivo.Online.Controller.sendMessage(e)
            }
            t.val("").css("height", "");
            i.disabled = true;
            this.updateMessage();
            if (devicejs.ios()) {
                chat_view_online.initSound()
            }
        }
    },
    inputFieldFocus: function(e) {
        Jivo.Online.Controller.onFocus();
        if (devicejs.ios()) {
            var t = $(e.target);
            t.on("focus", function() {
                $(document).unbind("scroll.on_focus");
                setTimeout(function() {
                    $(document).bind("scroll.on_focus", function(e) {
                        t.trigger("blur")
                    })
                }, 1500)
            });
            t.on("blur", function() {
                $(document).unbind("scroll.on_focus")
            })
        }
    },
    windowResize: function() {
        chat_view_online.getMessagesView().setScrollBottom(this.previousScroll)
    },
    messagesScroll: function() {
        this.previousScroll = chat_view_online.getMessagesView().getScrollBottom()
    },
    messageInput: function(e) {
        var t = e.currentTarget,
            i = e.currentTarget.value,
            n = $("#input-button")[0];
        setTimeout(underscore.bind(function() {
            var e = $(this).attr("maxlength");
            if ($(this).val().length > e) {
                $(this).val($(this).val().substring(0, e))
            }
        }, t), 0);
        n.disabled = i.length <= 0
    },
    showIntroduceForm: function(e, t) {
        chat_view_online.getIntroduceView().render(e, t);
        this.disableDragging()
    },
    showDepartmentsSelector: function() {
        chat_view_online.getDepartmentsView().render();
        this.disableDragging()
    },
    updateCallMe: function() {
        if ((chat_view_online.getCallModel().rtcSupported() || this.hasFlash() || jivo.getCallWidget()) && this.model.get("agent.calls")) {
            this.$el.find("#callme").css("display", "block");
            this.$el.find(".title").css("width", "75%")
        } else {
            if (chat_view_online.getCallModel().calling()) {
                return
            }
            this.$el.find("#callme").css("display", "none");
            this.$el.find(".title").css("width", "100%")
        }
    },
    hasFlash: function() {
        var e = false;
        try {
            var t = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (t) {
                e = true
            }
        } catch (i) {
            if (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] != undefined && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin) {
                e = true
            }
        }
        return e
    },
    enableDragging: function() {
        if (!jivo.isSeparateWindow()) {
            getByIdFromParent("jivo-drag-handle").show()
        }
    },
    disableDragging: function() {
        if (!jivo.isSeparateWindow()) {
            getByIdFromParent("jivo-drag-handle").hide()
        }
    },
    toolbarToggle: function(e) {
        if (!jivo.isSeparateWindow()) {
            var t = getByIdFromParent("jivo_close_button");
            t.finish();
            if (e === "show") {
                t.fadeIn(500)
            } else {
                t.fadeOut(500)
            }
        }
    },
    requestRedraw: function() {
        var e = document.getElementById("inner-chat");
        e.style.display = "none";
        e.offsetHeight;
        e.style.display = "block"
    },
    startResize: function(e) {
        var t = getElementPosition(e.currentTarget);
        t.minLeft = 30;
        t.maxLeft = t.windowWidth - t.width - 30;
        if ($("#introduce-popup").length > 0) {
            this.model.set("size.min-height", 200 + $("#introduce-popup").outerHeight())
        } else {
            this.model.set("size.min-height", 200)
        }
        t.minHeight = this.model.get("size.min-height");
        t.maxHeight = t.windowHeight;
        chat_view_online.getMessagesView().setScrollBottom(0);
        this._dragData = t
    },
    stopResize: function(e) {
        var t = $(e.currentTarget);
        cookie("left", t.css("left"));
        cookie("right", t.css("right"));
        cookie("height", t.css("height"));
        delete this._dragData
    },
    resize: function(e) {
        var t = this._dragData,
            i = t.left + e.dx,
            n = t.height - e.dy,
            r, a, s = $(e.currentTarget);
        i = Math.max(t.minLeft, Math.min(t.maxLeft, i));
        n = Math.max(t.minHeight, Math.min(t.maxHeight, n));
        if (i !== e.currentTarget.offsetLeft) {
            r = t.windowWidth - t.width - i;
            a = i <= r;
            s.css({
                left: a ? i : "auto",
                right: a ? "auto" : r
            })
        }
        if (n !== this.model.get("size.height") && (n > this.model.get("size.min-height") || n > this.model.get("size.height"))) {
            this.model.set("size.height", n);
            jivo.transferProportion({
                width: s.css("width"),
                height: s.css("height")
            });
            s.css({
                height: n
            });
            if (navigator.userAgent.indexOf("Opera") >= 0) {
                this.requestRedraw()
            }
            chat_view_online.getMessagesView().setScrollBottom(0)
        }
    },
    updateMessage: function() {
        var e = chat_view_online.getMessagesView(),
            t = e.getScrollBottom();
        this.$("#messages-div").css("bottom", this.$("#input-field").outerHeight() + 10);
        e.setScrollBottom(t, true)
    },
    inputSizeChange: function() {
        var e = this.$("#input-field");
        e.attr("placeholder", translate("lblEnterMessageHere"));
        e.removeClass("input-field-callwidget");
        e.val("");
        this.inputAutoResize()
    }
});
Jivo.Online.Views.Evaluation = Backbone.View.extend({
    el: "#chat-body",
    template: _templates.online.evaluation,
    events: {
        "click .evaluation-btn-container a": "sendRate"
    },
    render: function() {
        this.$el.append(this.template({}));
        var e = this.$("#evaluation-popup");
        if (jivo.gui.animationIsSupported()) {
            e.addClass("jivo-fade-in")
        } else {
            e.css("opacity", "1");
            e.show()
        }
    },
    sendRate: function(e) {
        e.preventDefault();
        var t = e.currentTarget.id,
            i;

        function n(e) {
            setTimeout(function() {
                chat_view_online.getMessagesView().evaluationMessageIsShow = false
            }, e)
        }
        if (t === "close-eval") {
            this.evaluationTimeout = setTimeout(underscore.bind(this.hideEvaluation, this), 100);
            n(400);
            return
        }
        i = translate("lblEvaluate" + (t === "cancel" ? "Please" : "Thanks"));
        this.$(".evaluation-text-inner").html(i);
        this.$(".evaluation-btn-container").toggleClass("hidden visible");
        var r;
        if (t === "cancel") {
            if (this.evaluationTimeout) {
                clearTimeout(this.evaluationTimeout)
            }
            r = 0
        } else {
            this.evaluationTimeout = setTimeout(underscore.bind(this.hideEvaluation, this), 15e3);
            n(15300);
            if (t === "positive") {
                r = 1
            } else {
                r = -1
            }
        }
        chat_view_online.getChatView().inputFocus();
        jivo.handle("gui_evaluation", r, cookie("sess_id"));
        e.preventDefault()
    },
    hideEvaluation: function() {
        var e = this.$("#evaluation-popup");
        if (jivo.gui.animationIsSupported()) {
            e.removeClass("jivo-fade-in");
            e.addClass("jivo-fade-out")
        } else {
            e.css("opacity", "0");
            e.hide()
        }
    }
});
var MessageModel = Jivo.Online.Models.Message = Backbone.Model.extend({
    defaults: function() {
        return {
            text: "",
            time: new Date,
            delivered: true,
            priority: 0,
            color: config.bubble_color
        }
    },
    isAgent: function() {
        return underscore.indexOf([MessageModel.TYPE_AGENT, MessageModel.TYPE_COBROWSE_HIGHLIGHT, MessageModel.TYPE_RECEIVE_FILE], this.get("type")) >= 0
    },
    isClient: function() {
        return this.get("type") === MessageModel.TYPE_CLIENT
    },
    isHistory: function() {
        return !!this.get("history")
    },
    isReceiveFile: function() {
        return this.get("type") === MessageModel.TYPE_RECEIVE_FILE
    },
    isSystem: function() {
        return this.get("type") === MessageModel.TYPE_SYSTEM
    },
    isConnectionError: function() {
        return this.get("type") === MessageModel.TYPE_CONNECTION_ERROR
    }
}, {
    TYPE_AGENT: "agentMessage",
    TYPE_CLIENT: "clientMessage",
    TYPE_SYSTEM: "systemMessage",
    TYPE_RECEIVE_FILE: "receiveFile",
    TYPE_CONNECTION_ERROR: "connectionError",
    TYPE_COBROWSE_HIGHLIGHT: "cobrowse_highlight"
});
var MessagesCollection = Jivo.Online.Collections.Messages = Backbone.Collection.extend({
    model: MessageModel,
    addMessage: function(e, t) {
        this.push(underscore.extend({}, t, {
            type: e
        }));
        return this
    },
    addAgentMessage: function(e) {
        return this.addMessage(MessageModel.TYPE_AGENT, {
            text: e
        })
    },
    addClientMessage: function(e) {
        return this.addMessage(MessageModel.TYPE_CLIENT, {
            text: e
        })
    },
    addSystemMessage: function(e) {
        return this.addMessage(MessageModel.TYPE_SYSTEM, {
            text: e
        })
    },
    addConnectionError: function(e) {
        return this.addMessage(MessageModel.TYPE_CONNECTION_ERROR, {
            text: e
        })
    },
    addReceiveFile: function(e) {
        return this.addMessage(MessageModel.TYPE_RECEIVE_FILE, e)
    },
    addCobrowseHighlight: function(e) {
        return this.addMessage(MessageModel.TYPE_COBROWSE_HIGHLIGHT, e)
    }
});
Jivo.Online.Views.Message = Backbone.View.extend({
    el: "#messages-div-inner",
    $lastMessage: null,
    $clearDiv: null,
    scrollBottomThreshold: 20,
    messagesBeforeEvaluation: 5,
    $parent: null,
    events: {
        "click .cobrowse-btn-container a": "openHighlight",
        "click .cobrowse-btn-container": "openHighlight",
        "click .receiveFile a": "declineFile"
    },
    evaluationMessageIsShow: false,
    initialize: function() {
        this.$lastMessage = this.$(".new-msg-container");
        this.$clearDiv = this.$("#messages-div-inner-clear");
        this.$parent = this.$el.parent();
        this.listenTo(this.collection, "add", this.handleAdd).listenTo(this.collection, "reset", this.handleReset)
    },
    render: function() {
        this.$parent.perfectScrollbar({
            topMargin: utils.showAd() ? 40 : 25
        });
        if (navigator.userAgent.indexOf("Opera") >= 0) {
            var e = this;
            setTimeout(function() {
                e.collection.add({
                    type: "emptyMessage",
                    time: new Date,
                    history: false
                })
            }, 200)
        }
    },
    updateScrollBar: function() {
        this.$parent.perfectScrollbar("update")
    },
    getScrollBottom: function() {
        return parseInt($(this.el).css("bottom"))
    },
    setScrollBottom: function(e) {
        $(this.el).css({
            bottom: -e,
            top: "auto"
        });
        this.updateScrollBar()
    },
    setScrollMobileBottom: function() {
        document.body.scrollTop = 1e4;
        this.$parent.perfectScrollbar("scroll")
    },
    renderMessage: function(e) {
        var t = e.get("type"),
            i = !e.isConnectionError() && !e.isSystem() && !e.isReceiveFile(),
            n, r = this.$lastMessage;
        if (i && r && r.hasClass(t)) {
            n = _templates.online.messageNode({
                type: t,
                text: e.get("text"),
                history: e.get("history")
            });
            r.find(".new-msg-body-inner").append(n);
            r.find(".new-time").text(dateFormat(e.get("time"), "H:MM"))
        } else {
            n = _templates.online[t](e.toJSON());
            r = this.$lastMessage = $(n).insertBefore(this.$clearDiv)
        }
        setTimeout(function() {
            if (!e.get("history")) {
                if (t === "agentMessage" || t === "clientMessage" || t === "cobrowse_highlight") {
                    r.find(".new-msg-text").each(function() {
                        var e = $(this);
                        if (e[0].clientHeight === 0) {
                            e[0].style.height = e.find(".new-msg-text-inner")[0].clientHeight + "px";
                            if (!css3AnimationIsSupported()) {
                                e[0].className += " new-msg-text-history"
                            }
                        }
                    });
                    r.addClass("new-msg-animate")
                }
            } else {
                if (updateBlur) updateBlur()
            }
        }, 0)
    },
    isIntroduceRequired: function l() {
        return !chat_view_online.getChatModel().introduced
    },
    isEvaluationRequired: function() {
        function e(e) {
            return !e.isHistory() && (e.isClient() || e.isAgent())
        }
        return config.show_rate_form && config.options & 64 && !this.evaluationMessageIsShow && this.collection.filter(e).length >= this.messagesBeforeEvaluation
    },
    handleAdd: function(e) {
        var t = e.get("type"),
            i;
        i = this.getScrollBottom();
        this.renderMessage(e);
        if (i === 0) {
            this.updateScrollBar();
            if (updateBlur) updateBlur()
        }
        this.trigger("message", this, e);
        if (e.isAgent()) {
            jivo.soundPlayer.incomingMessage()
        } else if (e.isClient() && this.isIntroduceRequired() && config.contacts_ask <= 0) {
            chat_view_online.getIntroducePopupView().render()
        }
        if (this.isEvaluationRequired() && !$("#introduce-popup").is(":visible")) {
            this.evaluationMessageIsShow = true;
            chat_view_online.getEvaluationView().render()
        }
    },
    handleReset: function(e) {
        var t = underscore.find(e.toJSON(), function(e) {
            return e.type === "clientMessage"
        });
        this.$(".new-msg-container").remove();
        this.$lastMessage = this.$(".new-msg-container");
        e.each(function(e) {
            e.set("history", true);
            this.renderMessage(e)
        }, this);
        if (e.length && this.isIntroduceRequired() && t && config.contacts_ask <= 0) {
            chat_view_online.getIntroducePopupView().render()
        }
        this.setScrollBottom(0);
        this.trigger("reset", this, e)
    },
    remove: function(e) {},
    edit: function(e) {},
    hideMessage: function(e, t) {
        var i = this,
            n = this.getScrollBottom();

        function r() {
            $(this).remove();
            i.setScrollBottom(n)
        }
        if (t) {
            e.each(r)
        } else {
            e.fadeOut("slow", r)
        }
    },
    declineFile: function(e) {
        var t = $(e.currentTarget);
        e.preventDefault();
        if (t.attr("href") !== "#") {
            window.open(t.attr("href"));
            chat_view_online.fileReceive(t.attr("data-id"), t.attr("data-name"))
        } else {
            chat_view_online.fileDecline(t.attr("data-id"), t.attr("data-name"))
        }
        this.hideMessage(t.parents(".receiveFile"));
        chat_view_online.getChatView().inputFocus()
    },
    openHighlight: function(e) {
        var t = $(e.currentTarget);
        if (!t.attr("data-url")) t = t.find("a");
        chat_view_online.acceptCobrowse(t.attr("data-url"), t.attr("data-hash"));
        chat_view_online.getChatView().inputFocus();
        e.preventDefault()
    },
    hideInvitationMessage: function() {
        this.hideMessage(this.$(".agentMessage"), true);
        this.$lastMessage = null
    },
    hideConnectionError: function() {
        this.hideMessage(this.$(".connectionError"), true)
    }
});
Jivo.Online.Models.Name = Jivo.Model.Name.extend({
    required: function() {
        return this.show() && config.contacts_settings[this.id].required
    }
});
Jivo.Online.Models.Message = Jivo.Model.Message.extend({
    defauts: {
        required: false
    },
    required: function() {
        return this.get("required")
    },
    show: function() {
        return this.get("required")
    }
});
Jivo.Online.Views.IntroduceForm = Jivo.View.Form.extend({
    el: "#inner-chat",
    tagName: "div",
    templateData: {
        nologo: !utils.showAd(),
        maxMessageLength: Jivo.Online.MAX_MESSAGE_LENGTH,
        link: translate("lblPwrBy").replace("_URL_", "?utm_source=" + encodeURIComponent(location.hostname) + "&utm_medium=link&utm_content=offline_form&utm_campaign=self_ad"),
        locale: getIconLocale()
    },
    validFields: ["name", "phone", "email"]
});
Jivo.Online.Views.Introduce = Jivo.Online.Views.IntroduceForm.extend({
    template: _templates.online.introduceForm,
    previousStartedValue: false,
    events: {
        "click #submit": "submit",
        "click #cancel": "cancel",
        'keydown input:text,input[type="tel"],input[type="email"],textarea': "onKeyDown",
        "input  #message": "messageInput"
    },
    fields: new Backbone.Collection([new Jivo.Online.Models.Message({
        formId: "introduce-form"
    }), new Jivo.Model.Email({
        formId: "introduce-form"
    }), new Jivo.Model.Phone({
        formId: "introduce-form"
    }), new Jivo.Online.Models.Name({
        formId: "introduce-form"
    })]),
    render: function(e, t) {
        var i = this.$("#introduce-form"),
            n, r, a;
        n = this.templateData;
        if (t) {
            n.valueInputField = t;
            this.fields.get("message").set("required", true)
        } else {
            this.fields.get("message").set("required", e)
        }
        n.fields = this.fields;
        n.departments = e && config.departments ? config.departments : null;
        n.send = e ? translate("lblSendBefore") : translate("lblSend");
        if (i.length > 0 && this.previousStartedValue === e) {
            i.show()
        } else {
            this.previousStartedValue = e;
            this.$("#introduce-form").remove();
            this.$el.append(this.template(n))
        }
        if (t || e) {
            this.$("#message").show();
            this.$("#introduce-form").find(".buttons").addClass("single");
            if (e) {
                this.$("#introduce-caption").hide();
                chat_view_online.getChatModel().set("agent.name", translate("lblIntroduceRequestBefore"))
            }
        } else {
            this.$("#message").hide();
            this.$("#introduce-form").find(".buttons").removeClass("single");
            this.$("#introduce-caption").show()
        }
        r = this.$("#introduce-avatar");
        r.removeClass("introduce-bg").css("height", 0);
        if (this.getHeight() < jivo.getChatHeight()) {
            a = jivo.getChatHeight() - this.getHeight();
            r.css("height", a);
            if (r.height() > r.width()) {
                r.find("img").css({
                    width: "100%",
                    height: "auto"
                })
            } else {
                r.find("img").css({
                    width: "auto",
                    height: "100%"
                })
            }
            if (a > 50) {
                r.addClass("introduce-bg")
            }
        }
        if (jivo.isSeparateWindow()) {
            this.$("#introduce-form").perfectScrollbar({
                topMargin: utils.showAd() ? 40 : 25
            }).find("#departments-list").perfectScrollbar()
        } else {
            setTimeout(function() {
                $("#introduce-form").find('input:text[value=""],input[type="tel"][value=""],input[type="email"][value=""],textarea:empty').first().focus()
            }, 0)
        }
        if (jivo.isMobileOrTablet()) {
            document.documentElement.style.position = "static"
        }
        this.$("#introduce-form").find("input[placeholder], textarea[placeholder]").placeholder();
        this.$("#current-department").click(function() {
            $("#departments-list").toggle()
        });
        this.$("#departments-list>li").click(underscore.bind(this.onDepartmentSelect));
        if (utils.browser.msie && utils.browser.mV < 9) {
            this.$("#message").on("keydown paste", underscore.bind(this.messageInput, this))
        }
        this.delegateEvents();
        this.updateHeight()
    },
    getHeight: function() {
        var e = $("#header-avatar").outerHeight();
        return (e > 100 ? e / 2 : e) + $("#introduce-form").outerHeight()
    },
    messageInput: function(e) {
        setTimeout(underscore.bind(function() {
            var e = $(this).attr("maxlength");
            if ($(this).val().length > e) {
                $(this).val($(this).val().substring(0, e))
            }
        }, e.currentTarget), 0)
    },
    submit: function() {
        if (this.valid()) {
            var e = {},
                t = this.validFields,
                i = true;
            underscore.each(t, function(t) {
                var n = this.fields.get(t).value();
                if (n !== "") {
                    e[t] = n;
                    i = false
                }
            }, this);
            if (i && config.contacts_ask <= 0) {
                this.close();
                return
            }
            chat_view_online.getChatModel().introduced = true;
            this.close();
            chat_view_online.getChatView().el.scrollTop = 0;
            jivo.handle("gui_introduced", e);
            if (this.$("#current-department")) {
                jivo.handle("gui_department", this.$("#current-department").attr("data-id"))
            }
            var n = chat_view_online.getChatModel().get("client");
            underscore.extend(n, e);
            var r = this.fields.get("message").value();
            if ($.trim(r).length !== 0) {
                chat_view_online.sendMessage(r)
            }
            if (devicejs.ios()) {
                chat_view_online.initSound()
            }
            chat_view_online.getChatView().inputFocus()
        } else {
            chat_view_online.getChatView().requestRedraw();
            this.updateHeight()
        }
    },
    cancel: function(e) {
        this.close();
        e.preventDefault()
    },
    close: function() {
        this.$("#introduce-form").hide();
        this.collection.reset();
        chat_view_online.getChatView().enableDragging();
        if (jivo.isMobileOrTablet()) {
            document.documentElement.style.position = "fixed"
        }
        this.undelegateEvents()
    },
    onDepartmentSelect: function(e) {
        var t = $(e.currentTarget);
        $("#departments-list").hide();
        this.$("#current-department").html(t.html()).attr("data-id", t.attr("data-id"))
    }
});
Jivo.Online.Views.IntroducePopup = Jivo.Online.Views.IntroduceForm.extend({
    el: "#chat-body",
    template: _templates.online.introducePopup,
    popup: "#introduce-popup",
    popupContent: "#introduce-popup-content",
    events: {
        "click #submit": "submit",
        "click #cancel": "cancel",
        'keydown input:text,input[type="tel"],input[type="email"]': "onKeyDown",
        "focus input": "onInputFocus",
        "blur input": "onInputBlur"
    },
    fields: new Backbone.Collection([new Jivo.Model.Email({
        formId: "introduce-popup"
    }), new Jivo.Model.Phone({
        formId: "introduce-popup"
    }), new Jivo.Online.Models.Name({
        formId: "introduce-popup"
    })]),
    render: function() {
        var e;
        if ($("#introduce-popup").length === 0) {
            e = this.templateData;
            e.fields = this.fields;
            e.send = translate("lblSend");
            this.$el.append(this.template(e));
            this.$("#introduce-popup").find("input[placeholder], textarea[placeholder]").placeholder()
        }
        setTimeout(underscore.bind(this.renderSpecific, this), 3e3)
    },
    renderSpecific: function(e) {
        this.onInputBlur(e, false);
        this.delegateEvents()
    },
    cancel: function(e) {
        e.preventDefault();
        this.close();
        chat_view_online.getChatModel().introduced = true
    },
    close: function() {
        this.$("#introduce-popup").fadeOut();
        chat_view_online.getChatView().enableDragging();
        this.undelegateEvents()
    },
    submit: function(e) {
        if (e) {
            e.target.focus()
        }
        if (this.valid()) {
            var t = {},
                i = this.validFields,
                n = true,
                r;
            underscore.each(i, function(e) {
                var i = this.fields.get(e).value();
                if (i !== "") {
                    t[e] = i;
                    n = false
                }
            }, this);
            if (n && config.contacts_ask <= 0) {
                this.close();
                return
            }
            this.$("#cancel, .text-field, .field-wrapper, .buttons").fadeOut();
            this.$(".icon-thx").fadeIn();
            this.$("#introduce-popup-content").addClass("thx-content");
            this.onInputBlurSpecific(e, true);
            setTimeout(underscore.bind(this.close, this), 3e3);
            chat_view_online.getChatModel().introduced = true;
            jivo.handle("gui_introduced", t);
            var a = chat_view_online.getChatModel().get("client");
            underscore.extend(a, t);
            chat_view_online.getChatView().inputFocus()
        }
    },
    toggleError: function(e, t) {
        if (t) {
            this.$("#" + e).parent().addClass("error-field");
            this.$("#error-" + e).show()
        } else {
            this.$("#" + e).parent().removeClass("error-field");
            this.$("#error-" + e).hide()
        }
    },
    onInputFocus: function() {
        this.$("#introduce-popup").height(this.$("#introduce-popup-content").height())
    },
    onInputBlur: function(e, t) {
        setTimeout(underscore.bind(this.onInputBlurSpecific, this), 100)
    },
    onInputBlurSpecific: function(e, t) {
        var i;
        if (t || !((this.$("input:text").length ? this.$("input:text").val() !== "" : false) || (this.$('input[type="tel"]').length ? this.$('input[type="tel"]').val() !== "" : false) || (this.$('input[type="email"]').length ? this.$('input[type="email"]').val() !== "" : false) || this.$('input[type="button"]').is(":focus") || this.$("input:text").is(":focus") || this.$('input[type="tel"]').is(":focus") || this.$('input[type="email"]').is(":focus"))) {
            if (t) {
                i = this.$(".icon-thx").outerHeight()
            } else {
                i = this.$(".text-field").outerHeight() + this.$(".field-wrapper").outerHeight()
            }
            this.$("#introduce-popup").height(i)
        }
    }
});
Jivo.Online.Views.Departments = Backbone.View.extend({
    el: "#inner-chat",
    tagName: "div",
    template: _templates.online.departments,
    templateData: {
        nologo: !utils.showAd()
    },
    events: {
        "click a.department": "onDepartmentSelect"
    },
    render: function() {
        var e = this.templateData;
        e.departments = config.departments;
        this.$el.append(this.template(this.templateData));
        chat_view_online.getChatModel().set("agent.name", translate("lblSelectDep"));
        this.$("#input-field").hide();
        this.fixSafariScroll()
    },
    close: function() {
        this.$("#input-field").show();
        this.$("#departments").remove();
        chat_view_online.getChatModel().set("agent.name", chat_view_online.getChatModel().get("agent.name"));
        chat_view_online.getChatView().enableDragging()
    },
    onDepartmentSelect: function(e) {
        jivo.handle("gui_department", $(e.currentTarget).attr("data-id"));
        this.close(true);
        chat_view_online.chatMaximized()
    },
    fixSafariScroll: function() {
        this.$("#departments").mouseover(function(e) {
            $(this).css("border", "1px");
            $(this).css("border", "none")
        })
    }
});
Jivo.Online.Views.Call = Backbone.View.extend({
    el: "#header-avatar",
    template: _templates.online.callButton,
    events: {
        "click #callme": "onCallClick"
    },
    initialize: function() {
        this.model.on("change:state", this.onStateChange, this);
        $("#phone_hint").html(translate("lblPhoneHint"))
    },
    render: function() {
        this.$el.append(this.template({}))
    },
    addMessage: function(e) {
        chat_view_online.addSystemMessage(e)
    },
    micDisabled: function() {
        return this.model.get("state") === "WebPhoneMicDisabled"
    },
    idle: function() {
        return this.model.get("state") === "WebPhoneIdle"
    },
    connecting: function() {
        return this.model.get("state") === "WebPhoneConnecting"
    },
    progressing: function() {
        return this.model.get("state") === "WebPhoneProgressing"
    },
    joined: function() {
        return this.model.get("state") === "WebPhoneJoined"
    },
    authenticating: function() {
        return this.model.get("state") === "WebPhoneAuthenticating"
    },
    onStateChange: function() {
        if (this.model.calling()) {
            $("#callme").addClass("hang-up");
            if (this.joined()) {
                this.addMessage(translate("c_callConnected"))
            } else if (this.authenticating()) {
                $("#web_phone").addClass("phone_hidden")
            } else if (this.connecting()) {
                if (!this.model.rtcSupported()) {
                    $("#web_phone").removeClass("phone_hidden")
                }
            } else if (this.progressing()) {
                $("#callme").show();
                $(".header-avatar-container").find(".title").css("width", "75%")
            }
        } else {
            $("#callme").removeClass("hang-up");
            if (this.micDisabled()) {
                $("#callme").hide()
            } else if (this.idle()) {
                this.addMessage(translate("c_callDisconnected"))
            }
            chat_view_online.getCallModel().isInit = false
        }
    },
    onCallClick: function() {
        var e = jivo.getCallWidget();
        if (e) {
            if (e.state !== "CALL") {
                if (config.chat_mode === "online") {
                    jivo.handle("cw_ping")
                } else {
                    jivo.handle("cw_show_form", {
                        show_form: 1
                    })
                }
                e.analyticsTitle = "buttonClick"
            } else {
                chat_view_online.chatMinimized()
            }
        } else {
            if (this.model.calling()) {
                this.model.hangup()
            } else {
                $("#callme").hide();
                this.addMessage(translate("c_callProcessing"));
                this.model.call()
            }
        }
    }
});
Jivo.Online.Models.Call = Backbone.Model.extend({
    isInit: false,
    defaults: {
        state: "WebPhoneUninitialized"
    },
    initialize: function(e) {
        e.on("change:agent.vox_name", this.onVoxNameChange, this)
    },
    call: function() {
        this.getWebPhone().handle("call")
    },
    hangup: function() {
        this.getWebPhone().handle("hangup")
    },
    rtcSupported: function() {
        var e = false;
        if (!jivo.isMobileOrTablet()) {
            if (typeof webkitRTCPeerConnection !== "undefined" || typeof mozRTCPeerConnection !== "undefined") {
                if (typeof mozRTCPeerConnection !== "undefined") {
                    try {
                        e = true
                    } catch (t) {}
                } else {
                    e = true
                }
            }
        }
        return e
    },
    getWebPhone: function() {
        if (this.webPhone === undefined) {
            var e = ["WebPhoneMicDisabled", "WebPhoneInitializing", "WebPhoneInitialized", "WebPhoneConnecting", "WebPhoneConnected", "WebPhoneAuthenticating", "WebPhoneIdle", "WebPhoneProgressing", "WebPhoneJoined"];
            this.webPhone = new WebPhone;
            for (var t in e) {
                this.webPhone.on(e[t], underscore.bind(function(e) {
                    this.set("state", e.name)
                }, this))
            }
        }
        return this.webPhone
    },
    onVoxNameChange: function(e) {
        this.getWebPhone().setAgentId(e.changed["agent.vox_name"])
    },
    calling: function() {
        return underscore.contains(["WebPhoneInitializing", "WebPhoneConnecting", "WebPhoneAuthenticating", "WebPhoneProgressing", "WebPhoneJoined"], this.get("state"))
    }
});
var chat_view_online = Jivo.Online.Controller = new function() {
    var e, t, i, n, r, a, s, o, l, c = false;
    underscore.defaults(config, {
        bubble_color: "green"
    });
    this.getChatModel = function() {
        if (!e) {
            e = new Jivo.Online.Models.Chat
        }
        return e
    };
    this.getMessagesCollection = function() {
        if (!t) {
            t = new MessagesCollection
        }
        return t
    };
    this.getCallModel = function() {
        if (!i) {
            i = new Jivo.Online.Models.Call(this.getChatModel())
        }
        return i
    };
    this.getChatView = function() {
        if (!r) {
            r = new Jivo.Online.Views.Chat({
                model: this.getChatModel(),
                collection: this.getMessagesCollection()
            })
        }
        return r
    };
    this.getMessagesView = function() {
        if (!a) {
            a = new Jivo.Online.Views.Message({
                collection: this.getMessagesCollection()
            })
        }
        return a
    };
    this.getIntroduceView = function() {
        if (!o) {
            o = new Jivo.Online.Views.Introduce;
            o.undelegateEvents()
        }
        return o
    };
    this.getIntroducePopupView = function() {
        if (!o) {
            o = new Jivo.Online.Views.IntroducePopup;
            o.undelegateEvents()
        }
        return o
    };
    this.getDepartmentsView = function() {
        if (!l) {
            l = new Jivo.Online.Views.Departments
        }
        return l
    };
    this.getCallView = function() {
        if (!s) {
            s = new Jivo.Online.Views.Call({
                model: this.getCallModel(),
                chatModel: this.getChatModel()
            })
        }
        return s
    };
    this.getEvaluationView = function() {
        if (!n) {
            n = new Jivo.Online.Views.Evaluation
        }
        return n
    };
    var u = ["addClientMessage", "addAgentMessage", "addSystemMessage", "addReceiveFile", "addConnectionError", "addCobrowseHighlight"];
    underscore.each(u, function(e) {
        this[e] = function() {
            return proxy(this.getMessagesCollection(), e, arguments)
        }
    }, this);
    this.resetMessages = function() {
        return proxy(this.getMessagesCollection(), "reset", arguments)
    };
    var f = ["hideConnectionError", "hideInvitationMessage"];
    underscore.each(f, function(e) {
        this[e] = function() {
            return proxy(this.getMessagesView(), e, arguments)
        }
    }, this);
    this.setChatAttr = function() {
        return proxy(this.getChatModel(), "set", arguments)
    };
    this.getChatAttr = function() {
        return proxy(this.getChatModel(), "get", arguments)
    };
    this.create = function(e, t) {
        this.getChatView().render();
        this.getMessagesView().render();
        this.getCallView().render();
        if (t) {
            this.chatMaximized()
        }
    };
    this.sendMessage = function(e) {
        if (e.length == 0) return false;
        jivo.handle("gui_message", e)
    };
    this.onFocus = function() {
        jivo.handle("gui_msg_input_focus")
    };
    this.chatMinimized = function() {
        jivo.handle("gui_minimize")
    };
    this.chatMaximized = function() {
        this.onFocus();
        this.getChatView().inputFocus();
        this.getMessagesView().setScrollBottom(0)
    };
    this.typing = function(e) {
        jivo.handle("gui_typing", e ? 1 : 0)
    };
    this.fileReceive = function(e, t) {
        jivo.handle("gui_receive_file", e, t)
    };
    this.fileDecline = function(e, t) {
        jivo.handle("gui_decline_file", e, t)
    };
    this.acceptCobrowse = function(e, t) {
        jivo.handle("gui_accept_cobrowse", e, t)
    };
    this.getHeight = function() {
        return this.getChatModel().get("size.height")
    };
    this.initSound = function() {
        if (!c) {
            jivo.soundPlayer.incomingMessage();
            jivo.soundPlayer.pause();
            c = true
        }
    }
};
Jivo.Offline.Models.Form = Backbone.Model.extend({
    defaults: {
        templateData: {
            type: config.widget_font_color,
            header: config.offline_form_title || config.offline_widget_label,
            text: config.offline_form_text,
            link: translate("lblPwrBy").replace("_URL_", "?utm_source=" + encodeURIComponent(location.hostname) + "&utm_medium=link&utm_content=offline_form&utm_campaign=self_ad"),
//!!
//            nologo: !utils.showAd(),
            nologo: 0,
            maxMessageLength: Jivo.Offline.MAX_MESSAGE_LENGTH,
            locale: getIconLocale(),
            agent: {
                calls: false
            }
        }
    }
});
Jivo.Offline.Models.Error = Backbone.Model.extend({
    defaults: {
        name: "",
        messages: []
    },
    idAttribute: "name"
});
Jivo.Offline.Collections.Errors = Backbone.Collection.extend({
    model: Jivo.Offline.Models.Error
});
Jivo.Offline.Models.Email = Jivo.Model.Email.extend({
    show: function() {
        return config.contacts_settings.email.show || this.phoneNotRequired()
    },
    required: function() {
        return config.contacts_settings.email.show && config.contacts_settings.email.required || this.phoneNotRequired()
    },
    phoneNotRequired: function() {
        return !config.contacts_settings.phone.show || !config.contacts_settings.phone.required
    }
});
Jivo.Offline.Models.Message = Jivo.Model.Field.extend({
    id: "message",
    required: function() {
        return true
    },
    show: function() {
        return true
    }
});
Jivo.Offline.Views.Form = Jivo.View.Form.extend({
    el: "#inner-chat",
    tagName: "div",
    template: _templates.offline.form,
    height: 362,
    events: {
        "click #submit": "submit",
        "click #cancel": "cancel",
        'keydown input:text,input[type="tel"],input[type="email"],textarea': "onKeyDown",
        "input  #message": "messageInput"
    },
    fields: new Backbone.Collection([new Jivo.Offline.Models.Message({
        formId: "inner-chat"
    }), new Jivo.Offline.Models.Email({
        formId: "inner-chat"
    }), new Jivo.Model.Phone({
        formId: "inner-chat"
    }), new Jivo.Model.Name({
        formId: "inner-chat"
    })]),
    initializeSpecial: function() {
        this.model.on("change:agent.calls", this.updateCallMe, this)
    },
    render: function(e, t) {
        var i = this.model.get("templateData");
        i.fields = this.fields;
        this.$el.html(this.template(i));
        this.$el.addClass("offline");
        getByIdFromParent("jivo_action").find("div").on("click", function() {
            if ($(this).data("action") === "close") {
                var e = jivo.getCallWidget();
                if (e && e.state !== "CALL" && !e.clickClosedForm) {
                    e.analyticsTitle = "buttonClick";
                    e.handle("cw_show_form", {
                        show_form: 1
                    })
                } else {
                    chat_view_offline.chatMinimized()
                }
            }
        });
        if (!jivo.isSeparateWindow() && !jivo.isTablet()) {
            getByIdFromParent("jivo_top_wrap").mouseenter(underscore.bind(this.toolbarToggle, this, "show")).mouseleave(underscore.bind(this.toolbarToggle, this, "hide"))
        }
        $("input[placeholder], textarea[placeholder]").placeholder();
        if (utils.browser.msie && utils.browser.mV < 9) {
            this.$("#message").on("keydown paste", underscore.bind(this.messageInput, this))
        }
        if (jivo.isSeparateWindow()) {
            this.$el.on("focus blur", "input[type=text],input[type=tel],input[type=email],textarea", JivoGui.handleSoftKeyboard);
            this.$("#offline-form-inner").perfectScrollbar({
                topMargin: utils.showAd() ? 40 : 25
            })
        } else {
            this.updateHeight()
        }
        if (e) {
            $("#offline-form-inner").find(".description, .message, #email, #name, #phone, .buttons").hide();
            var n = $(".captcha-container");
            n.show();
            n.find("img").attr("src", config.avatar_url + "/captcha/" + e + ".png");
            if (t) {
                n.find(".error").css("display", "block")
            }
            n.find("#resend").on("click", underscore.bind(this.submit, this));
            $("#cancelCap").show().on("click", underscore.bind(this.cancelCaptcha, this));
            setTimeout(function() {
                $(".cap_symbols").focus()
            }, 0)
        }
        setTimeout(function() {
            $("#header-animate-container").addClass("header-animate")
        }, 0);
        return this
    },
    inputFocus: function() {
        var e = this.$el.find("#message");
        setTimeout(function() {
            e.focus()
        }, 0);
        return e
    },
    messageInput: function(e) {
        setTimeout(underscore.bind(function() {
            var e = $(this).attr("maxlength");
            if ($(this).val().length > e) {
                $(this).val($(this).val().substring(0, e))
            }
        }, e.currentTarget), 0)
    },
    submit: function() {
        if (this.valid()) {
            var e = {};
            this.fields.each(function(t) {
                e[t.id] = t.value()
            }, this);
            if (chat_view_offline.cap_id) {
                e.cap_id = chat_view_offline.cap_id;
                e.cap_symbols = $(".cap_symbols").val();
                if (e.cap_symbols == "") {
                    $(".cap_symbols").addClass("empty");
                    return
                }
            }
            jivo.handle("gui_offline_message", e)
        } else {
            this.requestRedraw();
            if (!jivo.isSeparateWindow()) this.updateHeight();
            chat_view_offline.instance.views.form.el.scrollTop = 0
        }
    },
    cancel: function(e) {
        jivo.handle("gui_minimize");
        e.preventDefault()
    },
    cancelCaptcha: function() {
        chat_view_offline.cap_id = false;
        $(".captcha-container").hide();
        $("#cancelCap").hide();
        $("#offline-form-inner").find(".description, .message, #email, #phone, #name, .buttons").show()
    },
    getHeight: function() {
        return $("#header-avatar").height() + $("#offline-form").height()
    },
    toolbarToggle: function(e) {
        var t = getByIdFromParent("jivo_close_button");
        t.finish();
        if (e === "show") {
            t.fadeIn(500)
        } else {
            t.fadeOut(500)
        }
    },
    requestRedraw: function() {
        var e = this.$("#offline-form-inner")[0];
        e.style.display = "none";
        e.offsetHeight;
        e.style.display = "block"
    },
    updateCallMe: function() {
        if (jivo.getCallWidget() && this.model.get("agent.calls")) {
            this.$el.find("#callme").show()
        } else {
            this.$el.find("#callme").hide()
        }
    }
});
var chat_view_offline = Jivo.Offline.Controller = new function() {
    var e, t;
    this.instance = {
        models: {
            form: new Jivo.Offline.Models.Form,
            error: new Jivo.Offline.Models.Error
        },
        collections: {
            errors: false
        },
        views: {
            form: false
        }
    };
    this.create = function(e, t) {
        this.instance.collections.errors = new Jivo.Offline.Collections.Errors;
        this.instance.views.form = new Jivo.Offline.Views.Form({
            model: this.instance.models.form,
            collection: this.instance.collections.errors
        });
        this.instance.views.form.render();
        this.getCallView().render();
        if (t) {
            this.getFormView().inputFocus()
        }
    };
    this.captcha = function(e) {
        this.instance.views.form.render(e.cap_id, this.cap_id && e.cap_id != this.cap_id);
        this.cap_id = e.cap_id
    };
    this.getHeight = function() {
        return this.instance.views.form.getHeight()
    };
    this.chatMinimized = function() {
        this.instance.collections.errors.reset();
        jivo.handle("gui_minimize")
    };
    this.getFormView = function() {
        if (!e) {
            e = this.instance.views.form
        }
        return e
    };
    this.getCallView = function() {
        if (!t) {
            t = new Jivo.Online.Views.Call({
                model: this.instance.views.form
            })
        }
        return t
    };
    this.setChatAttr = function() {
        return proxy(this.instance.models.form, "set", arguments)
    }
};
Jivo.Message.Models.Message = Backbone.Model.extend({
    defaults: {
        templateData: {
            link: translate("lblPwrBy").replace("_URL_", "?utm_source=" + encodeURIComponent(location.hostname) + "&utm_medium=link&utm_content=offline_form&utm_campaign=self_ad"),
            nologo: !utils.showAd(),
            locale: getIconLocale()
        },
        buttons: [],
        msg: translate("lblNoOperators"),
        header: translate("lblChatEnded")
    }
});
Jivo.Message.Views.Message = Backbone.View.extend({
    el: "#inner-chat",
    submited: false,
    tagName: "div",
    template: _templates.message.message,
    initialize: function() {},
    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
        this.$el.addClass("offline");
        if (getByIdFromParent("jivo-chat")) {
            getByIdFromParent("jivo-chat").addClass("jivo-offline").removeClass("jivo-online")
        }
        var e = this.$el.find("#buttons"),
            t = this.model.get("buttons");
        underscore.each(t, function(t, i) {
            e.append($("<input/>", {
                type: "button",
                value: t.title,
                "class": "jivoBtn accept"
            }).click(function(e) {
                return function() {
                    jivo.handle(e)
                }
            }(t.event)))
        });
        setTimeout($.proxy(function() {
            this.$el.find("#report-message-inner").css({
                top: (this.$el.find("#report-message").outerHeight() - this.$el.find("#report-message-inner").outerHeight()) / 2
            })
        }, this), 10);
        setTimeout(function() {
            $("#header-animate-container").addClass("header-animate")
        }, 0);
        return this
    }
});
var chat_view_msg = Jivo.Message.Controller = new function() {
    this.instance = {
        models: {
            message: new Jivo.Message.Models.Message
        },
        views: {
            message: false
        }
    };
    this.create = function(e, t) {
        this.instance.views.message = new Jivo.Message.Views.Message({
            model: this.instance.models.message
        });
        this.instance.views.message.render()
    };
    this._parent = function(e) {
        if ($(window.parent.document.getElementById(e))) return $(window.parent.document.getElementById(e));
        else return false
    }
};
browserNameVer = function() {
    var e = navigator.appName,
        t = navigator.userAgent.toLowerCase(),
        i = navigator.platform.toLowerCase(),
        n;
    var r = t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    var a = i ? /win/.test(i) : /win/.test(t);
    if (r && (n = t.match(/version\/([\.\d]+)/i)) != null) r[2] = n[1];
    r = r ? [r[1], r[2]] : [e, navigator.appVersion, "-?"];
    r.win = a;
    return r
}();
if (!(browserNameVer.win && browserNameVer[0] == "msie" && parseFloat(browserNameVer[1]) <= 9 || /Android/.test(navigator.userAgent)) && !jivo.isMobileOrTablet()) {
    var $content, messages_col = 0,
        translation, overviewNode = $("#messages-div-inner");
    var updateBlur = function() {
        $content = $(".messages-div-inner:first");
        var e = $content.children(".new-msg-container").find(".new-msg-text").length;
        if (e > messages_col || e < messages_col && $content != null) {
            initBlur();
            messages_col = e
        }
    };

    function initBlur() {
        $(".messages-div-blurred").remove();
        var e = $("#jivosite-adword"),
            t = $("#input-div"),
            i = $("#messages-div"),
            n = $("#messages-div-inner"),
            r = i.height();
        this.$contentBlurred = $("<div></div>").addClass("messages-div-blurred").append($("<div></div>").addClass("messages-div-blurred-cont").html($content.clone())).css({
            filter: "url(#blur-effect)",
            bottom: -r + e.height() + parseInt(n.css("bottom"))
        });
        this.$contentBlurred.appendTo(e);
        this.$contentBlurred.clone().css("bottom", t.innerHeight() + parseInt(n.css("bottom"))).appendTo(t);
        translation = "translate3d(0," + overviewNode.css("bottom") + ", 0)";
        e.find(".messages-div-blurred-cont").css({
            "-webkit-transform": translation,
            "-moz-transform": translation,
            transform: translation
        });
        t.find(".messages-div-blurred-cont").css({
            "-webkit-transform": translation,
            "-moz-transform": translation,
            transform: translation
        })
    }
    updateBlur()
}


//скомпилировали (после упаковки перестает работать)

/*


(function(a,c){function f(b){var a=b.length,m=e.type(b);return e.isWindow(b)?!1:1===b.nodeType&&a?!0:"array"===m||"function"!==m&&(0===a||"number"===typeof a&&0<a&&a-1 in b)}function l(b){var a=bb[b]={};e.each(b.match(la)||[],function(b,g){a[g]=!0});return a}function q(b,a,m,v){if(e.acceptData(b)){var g=e.expando,d=b.nodeType,k=d?e.cache:b,h=d?b[g]:b[g]&&g;if(h&&k[h]&&(v||k[h].data)||m!==c||"string"!==typeof a){h||(h=d?b[g]=fa.pop()||e.guid++:g);k[h]||(k[h]=d?{}:{toJSON:e.noop});if("object"===typeof a||
"function"===typeof a)v?k[h]=e.extend(k[h],a):k[h].data=e.extend(k[h].data,a);b=k[h];v||(b.data||(b.data={}),b=b.data);m!==c&&(b[e.camelCase(a)]=m);"string"===typeof a?(m=b[a],null==m&&(m=b[e.camelCase(a)])):m=b;return m}}}function r(b,a,m){if(e.acceptData(b)){var g,c,d=b.nodeType,k=d?e.cache:b,h=d?b[e.expando]:e.expando;if(k[h]){if(a&&(g=m?k[h]:k[h].data)){e.isArray(a)?a=a.concat(e.map(a,e.camelCase)):a in g?a=[a]:(a=e.camelCase(a),a=a in g?[a]:a.split(" "));for(c=a.length;c--;)delete g[a[c]];if(m?
!n(g):!e.isEmptyObject(g))return}if(!m&&(delete k[h].data,!n(k[h])))return;d?e.cleanData([b],!0):e.support.deleteExpando||k!=k.window?delete k[h]:k[h]=null}}}function u(b,a,m){if(m===c&&1===b.nodeType)if(m="data-"+a.replace(Bb,"-$1").toLowerCase(),m=b.getAttribute(m),"string"===typeof m){try{m="true"===m?!0:"false"===m?!1:"null"===m?null:+m+""===m?+m:Cb.test(m)?e.parseJSON(m):m}catch(v){}e.data(b,a,m)}else m=c;return m}function n(b){for(var a in b)if(("data"!==a||!e.isEmptyObject(b[a]))&&"toJSON"!==
a)return!1;return!0}function x(){return!0}function y(){return!1}function A(){try{return E.activeElement}catch(b){}}function B(b,a){do b=b[a];while(b&&1!==b.nodeType);return b}function C(b,a,m){if(e.isFunction(a))return e.grep(b,function(b,g){return!!a.call(b,g,b)!==m});if(a.nodeType)return e.grep(b,function(b){return b===a!==m});if("string"===typeof a){if(Db.test(a))return e.filter(a,b,m);a=e.filter(a,b)}return e.grep(b,function(b){return 0<=e.inArray(b,a)!==m})}function z(b){var a=cb.split("|");
b=b.createDocumentFragment();if(b.createElement)for(;a.length;)b.createElement(a.pop());return b}function F(b,a){return e.nodeName(b,"table")&&e.nodeName(1===a.nodeType?a:a.firstChild,"tr")?b.getElementsByTagName("tbody")[0]||b.appendChild(b.ownerDocument.createElement("tbody")):b}function K(b){b.type=(null!==e.find.attr(b,"type"))+"/"+b.type;return b}function H(b){var a=Eb.exec(b.type);a?b.type=a[1]:b.removeAttribute("type");return b}function G(b,a){for(var g,v=0;null!=(g=b[v]);v++)e._data(g,"globalEval",
!a||e._data(a[v],"globalEval"))}function O(b,a){if(1===a.nodeType&&e.hasData(b)){var g,v,c;v=e._data(b);var d=e._data(a,v),k=v.events;if(k)for(g in delete d.handle,d.events={},k)for(v=0,c=k[g].length;v<c;v++)e.event.add(a,g,k[g][v]);d.data&&(d.data=e.extend({},d.data))}}function J(b,a){var g,v,d=0,L=typeof b.getElementsByTagName!==da?b.getElementsByTagName(a||"*"):typeof b.querySelectorAll!==da?b.querySelectorAll(a||"*"):c;if(!L)for(L=[],g=b.childNodes||b;null!=(v=g[d]);d++)!a||e.nodeName(v,a)?L.push(v):
e.merge(L,J(v,a));return a===c||a&&e.nodeName(b,a)?e.merge([b],L):L}function p(b){Qa.test(b.type)&&(b.defaultChecked=b.checked)}function M(b,a){if(a in b)return a;for(var g=a.charAt(0).toUpperCase()+a.slice(1),e=a,d=db.length;d--;)if(a=db[d]+g,a in b)return a;return e}function Q(b,a){b=a||b;return"none"===e.css(b,"display")||!e.contains(b.ownerDocument,b)}function X(b,a){for(var g,v,d,c=[],k=0,h=b.length;k<h;k++)v=b[k],v.style&&(c[k]=e._data(v,"olddisplay"),g=v.style.display,a?(c[k]||"none"!==g||
(v.style.display=""),""===v.style.display&&Q(v)&&(c[k]=e._data(v,"olddisplay",R(v.nodeName)))):c[k]||(d=Q(v),(g&&"none"!==g||!d)&&e._data(v,"olddisplay",d?g:e.css(v,"display"))));for(k=0;k<h;k++)v=b[k],!v.style||a&&"none"!==v.style.display&&""!==v.style.display||(v.style.display=a?c[k]||"":"none");return b}function ea(b,a,e){return(b=Fb.exec(a))?Math.max(0,b[1]-(e||0))+(b[2]||"px"):a}function P(b,a,m,d,c){a=m===(d?"border":"content")?4:"width"===a?1:0;for(var g=0;4>a;a+=2)"margin"===m&&(g+=e.css(b,
m+ra[a],!0,c)),d?("content"===m&&(g-=e.css(b,"padding"+ra[a],!0,c)),"margin"!==m&&(g-=e.css(b,"border"+ra[a]+"Width",!0,c))):(g+=e.css(b,"padding"+ra[a],!0,c),"padding"!==m&&(g+=e.css(b,"border"+ra[a]+"Width",!0,c)));return g}function W(b,a,m){var g=!0,d="width"===a?b.offsetWidth:b.offsetHeight,c=sa(b),k=e.support.boxSizing&&"border-box"===e.css(b,"boxSizing",!1,c);if(0>=d||null==d){d=ga(b,a,c);if(0>d||null==d)d=b.style[a];if(Ia.test(d))return d;g=k&&(e.support.boxSizingReliable||d===b.style[a]);
d=parseFloat(d)||0}return d+P(b,a,m||(k?"border":"content"),g,c)+"px"}function R(b){var a=E,m=eb[b];m||(m=S(b,a),"none"!==m&&m||(Da=(Da||e("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(a.documentElement),a=(Da[0].contentWindow||Da[0].contentDocument).document,a.write("<!doctype html><html><body>"),a.close(),m=S(b,a),Da.detach()),eb[b]=m);return m}function S(b,a){var g=e(a.createElement(b)).appendTo(a.body),d=e.css(g[0],"display");g.remove();
return d}function Y(b,a,m,d){var g;if(e.isArray(a))e.each(a,function(a,g){m||Gb.test(b)?d(b,g):Y(b+"["+("object"===typeof g?a:"")+"]",g,m,d)});else if(m||"object"!==e.type(a))d(b,a);else for(g in a)Y(b+"["+g+"]",a[g],m,d)}function Z(b){return function(a,m){"string"!==typeof a&&(m=a,a="*");var g,d=0,c=a.toLowerCase().match(la)||[];if(e.isFunction(m))for(;g=c[d++];)"+"===g[0]?(g=g.slice(1)||"*",(b[g]=b[g]||[]).unshift(m)):(b[g]=b[g]||[]).push(m)}}function aa(b,a,m,d){function g(k){var I;c[k]=!0;e.each(b[k]||
[],function(b,e){var k=e(a,m,d);if("string"===typeof k&&!v&&!c[k])return a.dataTypes.unshift(k),g(k),!1;if(v)return!(I=k)});return I}var c={},v=b===Ra;return g(a.dataTypes[0])||!c["*"]&&g("*")}function h(b,a){var g,d,k=e.ajaxSettings.flatOptions||{};for(d in a)a[d]!==c&&((k[d]?b:g||(g={}))[d]=a[d]);g&&e.extend(!0,b,g);return b}function w(){try{return new a.XMLHttpRequest}catch(b){}}function d(){setTimeout(function(){va=c});return va=e.now()}function k(b,a,e){for(var g,m=(Ea[a]||[]).concat(Ea["*"]),
d=0,c=m.length;d<c;d++)if(g=m[d].call(e,a,b))return g}function t(b,a,m){var g,c=0,L=Ja.length,h=e.Deferred().always(function(){delete f.elem}),f=function(){if(g)return!1;for(var a=va||d(),a=Math.max(0,t.startTime+t.duration-a),e=1-(a/t.duration||0),m=0,c=t.tweens.length;m<c;m++)t.tweens[m].run(e);h.notifyWith(b,[t,e,a]);if(1>e&&c)return a;h.resolveWith(b,[t]);return!1},t=h.promise({elem:b,props:e.extend({},a),opts:e.extend(!0,{specialEasing:{}},m),originalProperties:a,originalOptions:m,startTime:va||
d(),duration:m.duration,tweens:[],createTween:function(a,g){var m=e.Tween(b,t.opts,a,g,t.opts.specialEasing[a]||t.opts.easing);t.tweens.push(m);return m},stop:function(a){var e=0,m=a?t.tweens.length:0;if(g)return this;for(g=!0;e<m;e++)t.tweens[e].run(1);a?h.resolveWith(b,[t,a]):h.rejectWith(b,[t,a]);return this}});m=t.props;for(U(m,t.opts.specialEasing);c<L;c++)if(a=Ja[c].call(t,b,m,t.opts))return a;e.map(m,k,t);e.isFunction(t.opts.start)&&t.opts.start.call(b,t);e.fx.timer(e.extend(f,{elem:b,anim:t,
queue:t.opts.queue}));return t.progress(t.opts.progress).done(t.opts.done,t.opts.complete).fail(t.opts.fail).always(t.opts.always)}function U(b,a){var g,d,c,k,h;for(g in b)if(d=e.camelCase(g),c=a[d],k=b[g],e.isArray(k)&&(c=k[1],k=b[g]=k[0]),g!==d&&(b[d]=k,delete b[g]),(h=e.cssHooks[d])&&"expand"in h)for(g in k=h.expand(k),delete b[d],k)g in b||(b[g]=k[g],a[g]=c);else a[d]=c}function D(b,a,e,d,c){return new D.prototype.init(b,a,e,d,c)}function V(b,a){var g,e={height:b},d=0;for(a=a?1:0;4>d;d+=2-a)g=
ra[d],e["margin"+g]=e["padding"+g]=b;a&&(e.opacity=e.width=b);return e}function ta(b){return e.isWindow(b)?b:9===b.nodeType?b.defaultView||b.parentWindow:!1}var T,na,da=typeof c,Fa=a.location,E=a.document,ya=E.documentElement,ha=a.jQuery,ba=a.$,ia={},fa=[],Ka=fa.concat,za=fa.push,oa=fa.slice,pa=fa.indexOf,La=ia.toString,ja=ia.hasOwnProperty,Ga="1.10.2".trim,e=function(b,a){return new e.fn.init(b,a,na)},Ma=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,la=/\S+/g,Hb=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
Ib=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,fb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Jb=/^[\],:{}\s]*$/,Kb=/(?:^|:|,)(?:\s*\[)+/g,Lb=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,Mb=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,Nb=/^-ms-/,Ob=/-([\da-z])/gi,Pb=function(b,a){return a.toUpperCase()},ka=function(b){if(E.addEventListener||"load"===b.type||"complete"===E.readyState)gb(),e.ready()},gb=function(){E.addEventListener?(E.removeEventListener("DOMContentLoaded",ka,!1),a.removeEventListener("load",
ka,!1)):(E.detachEvent("onreadystatechange",ka),a.detachEvent("onload",ka))};e.fn=e.prototype={jquery:"1.10.2",constructor:e,init:function(b,a,m){var g;if(!b)return this;if("string"===typeof b){g="<"===b.charAt(0)&&">"===b.charAt(b.length-1)&&3<=b.length?[null,b,null]:Ib.exec(b);if(!g||!g[1]&&a)return!a||a.jquery?(a||m).find(b):this.constructor(a).find(b);if(g[1]){if(a=a instanceof e?a[0]:a,e.merge(this,e.parseHTML(g[1],a&&a.nodeType?a.ownerDocument||a:E,!0)),fb.test(g[1])&&e.isPlainObject(a))for(g in a)if(e.isFunction(this[g]))this[g](a[g]);
else this.attr(g,a[g])}else{if((a=E.getElementById(g[2]))&&a.parentNode){if(a.id!==g[2])return m.find(b);this.length=1;this[0]=a}this.context=E;this.selector=b}return this}if(b.nodeType)return this.context=this[0]=b,this.length=1,this;if(e.isFunction(b))return m.ready(b);b.selector!==c&&(this.selector=b.selector,this.context=b.context);return e.makeArray(b,this)},selector:"",length:0,toArray:function(){return oa.call(this)},get:function(b){return null==b?this.toArray():0>b?this[this.length+b]:this[b]},
pushStack:function(b){b=e.merge(this.constructor(),b);b.prevObject=this;b.context=this.context;return b},each:function(b,a){return e.each(this,b,a)},ready:function(b){e.ready.promise().done(b);return this},slice:function(){return this.pushStack(oa.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(b){var a=this.length;b=+b+(0>b?a:0);return this.pushStack(0<=b&&b<a?[this[b]]:[])},map:function(b){return this.pushStack(e.map(this,function(a,e){return b.call(a,
e,a)}))},end:function(){return this.prevObject||this.constructor(null)},push:za,sort:[].sort,splice:[].splice};e.fn.init.prototype=e.fn;e.extend=e.fn.extend=function(){var b,a,m,d,k,h=arguments[0]||{},f=1,t=arguments.length,w=!1;"boolean"===typeof h&&(w=h,h=arguments[1]||{},f=2);"object"===typeof h||e.isFunction(h)||(h={});t===f&&(h=this,--f);for(;f<t;f++)if(null!=(k=arguments[f]))for(d in k)b=h[d],m=k[d],h!==m&&(w&&m&&(e.isPlainObject(m)||(a=e.isArray(m)))?(a?(a=!1,b=b&&e.isArray(b)?b:[]):b=b&&e.isPlainObject(b)?
b:{},h[d]=e.extend(w,b,m)):m!==c&&(h[d]=m));return h};e.extend({expando:"jQuery"+("1.10.2"+Math.random()).replace(/\D/g,""),noConflict:function(b){a.$===e&&(a.$=ba);b&&a.jQuery===e&&(a.jQuery=ha);return e},isReady:!1,readyWait:1,holdReady:function(b){b?e.readyWait++:e.ready(!0)},ready:function(b){if(!0===b?!--e.readyWait:!e.isReady){if(!E.body)return setTimeout(e.ready);e.isReady=!0;!0!==b&&0<--e.readyWait||(T.resolveWith(E,[e]),e.fn.trigger&&e(E).trigger("ready").off("ready"))}},isFunction:function(b){return"function"===
e.type(b)},isArray:Array.isArray||function(b){return"array"===e.type(b)},isWindow:function(b){return null!=b&&b==b.window},isNumeric:function(b){return!isNaN(parseFloat(b))&&isFinite(b)},type:function(b){return null==b?String(b):"object"===typeof b||"function"===typeof b?ia[La.call(b)]||"object":typeof b},isPlainObject:function(b){var a;if(!b||"object"!==e.type(b)||b.nodeType||e.isWindow(b))return!1;try{if(b.constructor&&!ja.call(b,"constructor")&&!ja.call(b.constructor.prototype,"isPrototypeOf"))return!1}catch(m){return!1}if(e.support.ownLast)for(a in b)return ja.call(b,
a);for(a in b);return a===c||ja.call(b,a)},isEmptyObject:function(b){for(var a in b)return!1;return!0},error:function(b){throw Error(b);},parseHTML:function(b,a,m){if(!b||"string"!==typeof b)return null;"boolean"===typeof a&&(m=a,a=!1);a=a||E;var g=fb.exec(b);m=!m&&[];if(g)return[a.createElement(g[1])];g=e.buildFragment([b],a,m);m&&e(m).remove();return e.merge([],g.childNodes)},parseJSON:function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(null===b)return b;if("string"===typeof b&&(b=e.trim(b))&&
Jb.test(b.replace(Lb,"@").replace(Mb,"]").replace(Kb,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(b){var g,m;if(!b||"string"!==typeof b)return null;try{a.DOMParser?(m=new DOMParser,g=m.parseFromString(b,"text/xml")):(g=new ActiveXObject("Microsoft.XMLDOM"),g.async="false",g.loadXML(b))}catch(v){g=c}g&&g.documentElement&&!g.getElementsByTagName("parsererror").length||e.error("Invalid XML: "+b);return g},noop:function(){},globalEval:function(b){b&&e.trim(b)&&
(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(b){return b.replace(Nb,"ms-").replace(Ob,Pb)},nodeName:function(b,a){return b.nodeName&&b.nodeName.toLowerCase()===a.toLowerCase()},each:function(b,a,e){var g,m=0,d=b.length;g=f(b);if(e)if(g)for(;m<d&&(g=a.apply(b[m],e),!1!==g);m++);else for(m in b){if(g=a.apply(b[m],e),!1===g)break}else if(g)for(;m<d&&(g=a.call(b[m],m,b[m]),!1!==g);m++);else for(m in b)if(g=a.call(b[m],m,b[m]),!1===g)break;return b},trim:Ga&&!Ga.call("\ufeff ")?
function(b){return null==b?"":Ga.call(b)}:function(b){return null==b?"":(b+"").replace(Hb,"")},makeArray:function(b,a){var g=a||[];null!=b&&(f(Object(b))?e.merge(g,"string"===typeof b?[b]:b):za.call(g,b));return g},inArray:function(b,a,e){var g;if(a){if(pa)return pa.call(a,b,e);g=a.length;for(e=e?0>e?Math.max(0,g+e):e:0;e<g;e++)if(e in a&&a[e]===b)return e}return-1},merge:function(b,a){var g=a.length,e=b.length,d=0;if("number"===typeof g)for(;d<g;d++)b[e++]=a[d];else for(;a[d]!==c;)b[e++]=a[d++];
b.length=e;return b},grep:function(b,a,e){var g,m=[],d=0,c=b.length;for(e=!!e;d<c;d++)g=!!a(b[d],d),e!==g&&m.push(b[d]);return m},map:function(b,a,e){var g,m=0,d=b.length,c=[];if(f(b))for(;m<d;m++)g=a(b[m],m,e),null!=g&&(c[c.length]=g);else for(m in b)g=a(b[m],m,e),null!=g&&(c[c.length]=g);return Ka.apply([],c)},guid:1,proxy:function(b,a){var g,d;"string"===typeof a&&(d=b[a],a=b,b=d);if(!e.isFunction(b))return c;g=oa.call(arguments,2);d=function(){return b.apply(a||this,g.concat(oa.call(arguments)))};
d.guid=b.guid=b.guid||e.guid++;return d},access:function(b,a,m,d,k,h,f){var g=0,v=b.length,I=null==m;if("object"===e.type(m))for(g in k=!0,m)e.access(b,a,g,m[g],!0,h,f);else if(d!==c&&(k=!0,e.isFunction(d)||(f=!0),I&&(f?(a.call(b,d),a=null):(I=a,a=function(b,a,g){return I.call(e(b),g)})),a))for(;g<v;g++)a(b[g],m,f?d:d.call(b[g],g,a(b[g],m)));return k?b:I?a.call(b):v?a(b[0],m):h},now:function(){return(new Date).getTime()},swap:function(b,a,e,d){var g,m={};for(g in a)m[g]=b.style[g],b.style[g]=a[g];
e=e.apply(b,d||[]);for(g in a)b.style[g]=m[g];return e}});e.ready.promise=function(b){if(!T)if(T=e.Deferred(),"complete"===E.readyState)setTimeout(e.ready);else if(E.addEventListener)E.addEventListener("DOMContentLoaded",ka,!1),a.addEventListener("load",ka,!1);else{E.attachEvent("onreadystatechange",ka);a.attachEvent("onload",ka);var g=!1;try{g=null==a.frameElement&&E.documentElement}catch(m){}g&&g.doScroll&&function v(){if(!e.isReady){try{g.doScroll("left")}catch(I){return setTimeout(v,50)}gb();
e.ready()}}()}return T.promise(b)};e.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b,a){ia["[object "+a+"]"]=a.toLowerCase()});na=e(E);(function(b,a){function g(b,a,g,e){var m,d,c,v,k;(a?a.ownerDocument||a:M)!==E&&G(a);a=a||E;g=g||[];if(!b||"string"!==typeof b)return g;if(1!==(v=a.nodeType)&&9!==v)return[];if(T&&!e){if(m=ua.exec(b))if(c=m[1])if(9===v)if((d=a.getElementById(c))&&d.parentNode){if(d.id===c)return g.push(d),g}else return g;else{if(a.ownerDocument&&
(d=a.ownerDocument.getElementById(c))&&na(a,d)&&d.id===c)return g.push(d),g}else{if(m[2])return S.apply(g,a.getElementsByTagName(b)),g;if((c=m[3])&&z.getElementsByClassName&&a.getElementsByClassName)return S.apply(g,a.getElementsByClassName(c)),g}if(z.qsa&&(!ba||!ba.test(b))){d=m=J;c=a;k=9===v&&b;if(1===v&&"object"!==a.nodeName.toLowerCase()){v=p(b);(m=a.getAttribute("id"))?d=m.replace(Ga,"\\$&"):a.setAttribute("id",d);d="[id='"+d+"'] ";for(c=v.length;c--;)v[c]=d+q(v[c]);c=ka.test(b)&&a.parentNode||
a;k=v.join(",")}if(k)try{return S.apply(g,c.querySelectorAll(k)),g}catch(xc){}finally{m||a.removeAttribute("id")}}}var h;a:{b=b.replace(Y,"$1");d=p(b);if(!e&&1===d.length){m=d[0]=d[0].slice(0);if(2<m.length&&"ID"===(h=m[0]).type&&z.getById&&9===a.nodeType&&T&&D.relative[m[1].type]){a=(D.find.ID(h.matches[0].replace(wa,xa),a)||[])[0];if(!a){h=g;break a}b=b.slice(m.shift().value.length)}for(v=ga.needsContext.test(b)?0:m.length;v--;){h=m[v];if(D.relative[c=h.type])break;if(c=D.find[c])if(e=c(h.matches[0].replace(wa,
xa),ka.test(m[0].type)&&a.parentNode||a)){m.splice(v,1);b=e.length&&q(m);if(!b){S.apply(g,e);h=g;break a}break}}}K(b,d)(e,a,!T,g,ka.test(b));h=g}return h}function d(){function b(g,e){a.push(g+=" ")>D.cacheLength&&delete b[a.shift()];return b[g]=e}var a=[];return b}function c(b){b[J]=!0;return b}function k(b){var a=E.createElement("div");try{return!!b(a)}catch(vc){return!1}finally{a.parentNode&&a.parentNode.removeChild(a)}}function h(b,a){for(var g=b.split("|"),e=b.length;e--;)D.attrHandle[g[e]]=a}
function f(b,a){var g=a&&b,e=g&&1===b.nodeType&&1===a.nodeType&&(~a.sourceIndex||-2147483648)-(~b.sourceIndex||-2147483648);if(e)return e;if(g)for(;g=g.nextSibling;)if(g===a)return-1;return b?1:-1}function t(b){return function(a){return"input"===a.nodeName.toLowerCase()&&a.type===b}}function w(b){return function(a){var g=a.nodeName.toLowerCase();return("input"===g||"button"===g)&&a.type===b}}function l(b){return c(function(a){a=+a;return c(function(g,e){for(var m,d=b([],g.length,a),c=d.length;c--;)g[m=
d[c]]&&(g[m]=!(e[m]=g[m]))})})}function n(){}function p(b,a){var e,m,d,c,v,k,h;if(v=za[b+" "])return a?0:v.slice(0);v=b;k=[];for(h=D.preFilter;v;){if(!e||(m=la.exec(v)))m&&(v=v.slice(m[0].length)||v),k.push(d=[]);e=!1;if(m=Fa.exec(v))e=m.shift(),d.push({value:e,type:m[0].replace(Y," ")}),v=v.slice(e.length);for(c in D.filter)!(m=ga[c].exec(v))||h[c]&&!(m=h[c](m))||(e=m.shift(),d.push({value:e,type:c,matches:m}),v=v.slice(e.length));if(!e)break}return a?v.length:v?g.error(b):za(b,k).slice(0)}function q(b){for(var a=
0,g=b.length,e="";a<g;a++)e+=b[a].value;return e}function B(b,a,g){var e=a.dir,m=g&&"parentNode"===e,d=Ka++;return a.first?function(a,g,d){for(;a=a[e];)if(1===a.nodeType||m)return b(a,g,d)}:function(a,g,c){var v,k,h,f=O+" "+d;if(c)for(;a=a[e];){if((1===a.nodeType||m)&&b(a,g,c))return!0}else for(;a=a[e];)if(1===a.nodeType||m)if(h=a[J]||(a[J]={}),(k=h[e])&&k[0]===f){if(!0===(v=k[1])||v===x)return!0===v}else if(k=h[e]=[f],k[1]=b(a,g,c)||x,!0===k[1])return!0}}function U(b){return 1<b.length?function(a,
g,e){for(var m=b.length;m--;)if(!b[m](a,g,e))return!1;return!0}:b[0]}function r(b,a,g,e,m){for(var d,c=[],v=0,k=b.length,h=null!=a;v<k;v++)if(d=b[v])if(!g||g(d,e,m))c.push(d),h&&a.push(v);return c}function u(b,a,e,m,d,v){m&&!m[J]&&(m=u(m));d&&!d[J]&&(d=u(d,v));return c(function(c,v,k,h){var f,t,I=[],L=[],w=v.length,l;if(!(l=c)){l=a||"*";for(var N=k.nodeType?[k]:k,n=[],Aa=0,p=N.length;Aa<p;Aa++)g(l,N[Aa],n);l=n}l=!b||!c&&a?l:r(l,I,b,k,h);N=e?d||(c?b:w||m)?[]:v:l;e&&e(l,N,k,h);if(m)for(f=r(N,L),m(f,
[],k,h),k=f.length;k--;)if(t=f[k])N[L[k]]=!(l[L[k]]=t);if(c){if(d||b){if(d){f=[];for(k=N.length;k--;)(t=N[k])&&f.push(l[k]=t);d(null,N=[],f,h)}for(k=N.length;k--;)(t=N[k])&&-1<(f=d?pa.call(c,t):I[k])&&(c[f]=!(v[f]=t))}}else N=r(N===v?N.splice(w,N.length):N),d?d(null,v,N,h):S.apply(v,N)})}function C(b){var a,g,e,m=b.length,d=D.relative[b[0].type];g=d||D.relative[" "];for(var c=d?1:0,v=B(function(b){return b===a},g,!0),k=B(function(b){return-1<pa.call(a,b)},g,!0),h=[function(b,g,e){return!d&&(e||g!==
ta)||((a=g).nodeType?v(b,g,e):k(b,g,e))}];c<m;c++)if(g=D.relative[b[c].type])h=[B(U(h),g)];else{g=D.filter[b[c].type].apply(null,b[c].matches);if(g[J]){for(e=++c;e<m&&!D.relative[b[e].type];e++);return u(1<c&&U(h),1<c&&q(b.slice(0,c-1).concat({value:" "===b[c-2].type?"*":""})).replace(Y,"$1"),g,c<e&&C(b.slice(c,e)),e<m&&C(b=b.slice(e)),e<m&&q(b))}h.push(g)}return U(h)}function A(b,a){var e=0,m=0<a.length,d=0<b.length,v=function(c,v,k,h,f){var t,I,L=[],l=0,w="0",N=c&&[],n=null!=f,p=ta,Aa=c||d&&D.find.TAG("*",
f&&v.parentNode||v),q=O+=null==p?1:Math.random()||.1;n&&(ta=v!==E&&v,x=e);for(;null!=(f=Aa[w]);w++){if(d&&f){for(t=0;I=b[t++];)if(I(f,v,k)){h.push(f);break}n&&(O=q,x=++e)}m&&((f=!I&&f)&&l--,c&&N.push(f))}l+=w;if(m&&w!==l){for(t=0;I=a[t++];)I(N,L,v,k);if(c){if(0<l)for(;w--;)N[w]||L[w]||(L[w]=Z.call(h));L=r(L)}S.apply(h,L);n&&!c&&0<L.length&&1<l+a.length&&g.uniqueSort(h)}n&&(O=q,ta=p);return N};return m?c(v):v}var y,z,x,D,F,V,K,ta,H,G,E,ha,T,ba,ia,fa,na,J="sizzle"+-new Date,M=b.document,O=0,Ka=0,da=
d(),za=d(),oa=d(),P=!1,Q=function(b,a){b===a&&(P=!0);return 0},ja=typeof a,W={}.hasOwnProperty,R=[],Z=R.pop,ea=R.push,S=R.push,aa=R.slice,pa=R.indexOf||function(b){for(var a=0,g=this.length;a<g;a++)if(this[a]===b)return a;return-1},La="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w","w#"),ca="\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+La+")|)|)[\\x20\\t\\r\\n\\f]*\\]",X=":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+
ca.replace(3,8)+")*)|.*)\\)|)",Y=RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$","g"),la=/^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,Fa=/^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,ka=/[\x20\t\r\n\f]*[+~]/,qa=RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*)[\\x20\\t\\r\\n\\f]*\\]","g"),ra=new RegExp(X),sa=new RegExp("^"+La+"$"),ga={ID:/^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,CLASS:/^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,TAG:new RegExp("^("+"(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w",
"w*")+")"),ATTR:new RegExp("^"+ca),PSEUDO:new RegExp("^"+X),CHILD:/^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,bool:/^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,needsContext:/^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i},
ma=/^[^{]+\{\s*\[native \w/,ua=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,va=/^(?:input|select|textarea|button)$/i,ya=/^h\d$/i,Ga=/'|\\/g,wa=RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)","ig"),xa=function(b,a,g){b="0x"+a-65536;return b!==b||g?a:0>b?String.fromCharCode(b+65536):String.fromCharCode(b>>10|55296,b&1023|56320)};try{S.apply(R=aa.call(M.childNodes),M.childNodes),R[M.childNodes.length].nodeType}catch(Aa){S={apply:R.length?function(b,a){ea.apply(b,aa.call(a))}:function(b,
a){for(var g=b.length,e=0;b[g++]=a[e++];);b.length=g-1}}}V=g.isXML=function(b){return(b=b&&(b.ownerDocument||b).documentElement)?"HTML"!==b.nodeName:!1};z=g.support={};G=g.setDocument=function(b){var a=b?b.ownerDocument||b:M;b=a.defaultView;if(a===E||9!==a.nodeType||!a.documentElement)return E;E=a;ha=a.documentElement;T=!V(a);b&&b.attachEvent&&b!==b.top&&b.attachEvent("onbeforeunload",function(){G()});z.attributes=k(function(b){b.className="i";return!b.getAttribute("className")});z.getElementsByTagName=
k(function(b){b.appendChild(a.createComment(""));return!b.getElementsByTagName("*").length});z.getElementsByClassName=k(function(b){b.innerHTML="<div class='a'></div><div class='a i'></div>";b.firstChild.className="i";return 2===b.getElementsByClassName("i").length});z.getById=k(function(b){ha.appendChild(b).id=J;return!a.getElementsByName||!a.getElementsByName(J).length});z.getById?(D.find.ID=function(b,a){if(typeof a.getElementById!==ja&&T){var g=a.getElementById(b);return g&&g.parentNode?[g]:[]}},
D.filter.ID=function(b){var a=b.replace(wa,xa);return function(b){return b.getAttribute("id")===a}}):(delete D.find.ID,D.filter.ID=function(b){var a=b.replace(wa,xa);return function(b){return(b=typeof b.getAttributeNode!==ja&&b.getAttributeNode("id"))&&b.value===a}});D.find.TAG=z.getElementsByTagName?function(b,a){if(typeof a.getElementsByTagName!==ja)return a.getElementsByTagName(b)}:function(b,a){var g,e=[],m=0,d=a.getElementsByTagName(b);if("*"===b){for(;g=d[m++];)1===g.nodeType&&e.push(g);return e}return d};
D.find.CLASS=z.getElementsByClassName&&function(b,a){if(typeof a.getElementsByClassName!==ja&&T)return a.getElementsByClassName(b)};ia=[];ba=[];if(z.qsa=ma.test(a.querySelectorAll))k(function(b){b.innerHTML="<select><option selected=''></option></select>";b.querySelectorAll("[selected]").length||ba.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");b.querySelectorAll(":checked").length||
ba.push(":checked")}),k(function(b){var g=a.createElement("input");g.setAttribute("type","hidden");b.appendChild(g).setAttribute("t","");b.querySelectorAll("[t^='']").length&&ba.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");b.querySelectorAll(":enabled").length||ba.push(":enabled",":disabled");b.querySelectorAll("*,:x");ba.push(",.*:")});(z.matchesSelector=ma.test(fa=ha.webkitMatchesSelector||ha.mozMatchesSelector||ha.oMatchesSelector||ha.msMatchesSelector))&&k(function(b){z.disconnectedMatch=fa.call(b,
"div");fa.call(b,"[s!='']:x");ia.push("!=",X)});ba=ba.length&&new RegExp(ba.join("|"));ia=ia.length&&new RegExp(ia.join("|"));na=ma.test(ha.contains)||ha.compareDocumentPosition?function(b,a){var g=9===b.nodeType?b.documentElement:b,e=a&&a.parentNode;return b===e||!!(e&&1===e.nodeType&&(g.contains?g.contains(e):b.compareDocumentPosition&&b.compareDocumentPosition(e)&16))}:function(b,a){if(a)for(;a=a.parentNode;)if(a===b)return!0;return!1};Q=ha.compareDocumentPosition?function(b,g){if(b===g)return P=
!0,0;var e=g.compareDocumentPosition&&b.compareDocumentPosition&&b.compareDocumentPosition(g);return e?e&1||!z.sortDetached&&g.compareDocumentPosition(b)===e?b===a||na(M,b)?-1:g===a||na(M,g)?1:H?pa.call(H,b)-pa.call(H,g):0:e&4?-1:1:b.compareDocumentPosition?-1:1}:function(b,g){var e,m=0;e=b.parentNode;var d=g.parentNode,c=[b],v=[g];if(b===g)return P=!0,0;if(!e||!d)return b===a?-1:g===a?1:e?-1:d?1:H?pa.call(H,b)-pa.call(H,g):0;if(e===d)return f(b,g);for(e=b;e=e.parentNode;)c.unshift(e);for(e=g;e=e.parentNode;)v.unshift(e);
for(;c[m]===v[m];)m++;return m?f(c[m],v[m]):c[m]===M?-1:v[m]===M?1:0};return a};g.matches=function(b,a){return g(b,null,null,a)};g.matchesSelector=function(b,a){(b.ownerDocument||b)!==E&&G(b);a=a.replace(qa,"='$1']");if(!(!z.matchesSelector||!T||ia&&ia.test(a)||ba&&ba.test(a)))try{var e=fa.call(b,a);if(e||z.disconnectedMatch||b.document&&11!==b.document.nodeType)return e}catch(wc){}return 0<g(a,E,null,[b]).length};g.contains=function(b,a){(b.ownerDocument||b)!==E&&G(b);return na(b,a)};g.attr=function(b,
g){(b.ownerDocument||b)!==E&&G(b);var e=D.attrHandle[g.toLowerCase()],e=e&&W.call(D.attrHandle,g.toLowerCase())?e(b,g,!T):a;return e===a?z.attributes||!T?b.getAttribute(g):(e=b.getAttributeNode(g))&&e.specified?e.value:null:e};g.error=function(b){throw Error("Syntax error, unrecognized expression: "+b);};g.uniqueSort=function(b){var a,g=[],e=0,m=0;P=!z.detectDuplicates;H=!z.sortStable&&b.slice(0);b.sort(Q);if(P){for(;a=b[m++];)a===b[m]&&(e=g.push(m));for(;e--;)b.splice(g[e],1)}return b};F=g.getText=
function(b){var a,g="",e=0;a=b.nodeType;if(!a)for(;a=b[e];e++)g+=F(a);else if(1===a||9===a||11===a){if("string"===typeof b.textContent)return b.textContent;for(b=b.firstChild;b;b=b.nextSibling)g+=F(b)}else if(3===a||4===a)return b.nodeValue;return g};D=g.selectors={cacheLength:50,createPseudo:c,match:ga,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(b){b[1]=b[1].replace(wa,
xa);b[3]=(b[4]||b[5]||"").replace(wa,xa);"~="===b[2]&&(b[3]=" "+b[3]+" ");return b.slice(0,4)},CHILD:function(b){b[1]=b[1].toLowerCase();"nth"===b[1].slice(0,3)?(b[3]||g.error(b[0]),b[4]=+(b[4]?b[5]+(b[6]||1):2*("even"===b[3]||"odd"===b[3])),b[5]=+(b[7]+b[8]||"odd"===b[3])):b[3]&&g.error(b[0]);return b},PSEUDO:function(b){var g,e=!b[5]&&b[2];if(ga.CHILD.test(b[0]))return null;b[3]&&b[4]!==a?b[2]=b[4]:e&&ra.test(e)&&(g=p(e,!0))&&(g=e.indexOf(")",e.length-g)-e.length)&&(b[0]=b[0].slice(0,g),b[2]=e.slice(0,
g));return b.slice(0,3)}},filter:{TAG:function(b){var a=b.replace(wa,xa).toLowerCase();return"*"===b?function(){return!0}:function(b){return b.nodeName&&b.nodeName.toLowerCase()===a}},CLASS:function(b){var a=da[b+" "];return a||(a=new RegExp("(^|[\\x20\\t\\r\\n\\f])"+b+"([\\x20\\t\\r\\n\\f]|$)"),da(b,function(b){return a.test("string"===typeof b.className&&b.className||typeof b.getAttribute!==ja&&b.getAttribute("class")||"")}))},ATTR:function(b,a,e){return function(m){m=g.attr(m,b);if(null==m)return"!="===
a;if(!a)return!0;m+="";return"="===a?m===e:"!="===a?m!==e:"^="===a?e&&0===m.indexOf(e):"*="===a?e&&-1<m.indexOf(e):"$="===a?e&&m.slice(-e.length)===e:"~="===a?-1<(" "+m+" ").indexOf(e):"|="===a?m===e||m.slice(0,e.length+1)===e+"-":!1}},CHILD:function(b,a,g,e,m){var d="nth"!==b.slice(0,3),c="last"!==b.slice(-4),v="of-type"===a;return 1===e&&0===m?function(b){return!!b.parentNode}:function(a,g,k){var h,f,t,I,L;g=d!==c?"nextSibling":"previousSibling";var l=a.parentNode,w=v&&a.nodeName.toLowerCase();
k=!k&&!v;if(l){if(d){for(;g;){for(f=a;f=f[g];)if(v?f.nodeName.toLowerCase()===w:1===f.nodeType)return!1;L=g="only"===b&&!L&&"nextSibling"}return!0}L=[c?l.firstChild:l.lastChild];if(c&&k)for(k=l[J]||(l[J]={}),h=k[b]||[],I=h[0]===O&&h[1],t=h[0]===O&&h[2],f=I&&l.childNodes[I];f=++I&&f&&f[g]||(t=I=0)||L.pop();){if(1===f.nodeType&&++t&&f===a){k[b]=[O,I,t];break}}else if(k&&(h=(a[J]||(a[J]={}))[b])&&h[0]===O)t=h[1];else for(;(f=++I&&f&&f[g]||(t=I=0)||L.pop())&&((v?f.nodeName.toLowerCase()!==w:1!==f.nodeType)||
!++t||(k&&((f[J]||(f[J]={}))[b]=[O,t]),f!==a)););t-=m;return t===e||0===t%e&&0<=t/e}}},PSEUDO:function(b,a){var e,m=D.pseudos[b]||D.setFilters[b.toLowerCase()]||g.error("unsupported pseudo: "+b);return m[J]?m(a):1<m.length?(e=[b,b,"",a],D.setFilters.hasOwnProperty(b.toLowerCase())?c(function(b,g){for(var e,d=m(b,a),c=d.length;c--;)e=pa.call(b,d[c]),b[e]=!(g[e]=d[c])}):function(b){return m(b,0,e)}):m}},pseudos:{not:c(function(b){var a=[],g=[],e=K(b.replace(Y,"$1"));return e[J]?c(function(b,a,g,m){m=
e(b,null,m,[]);for(var d=b.length;d--;)if(g=m[d])b[d]=!(a[d]=g)}):function(b,m,d){a[0]=b;e(a,null,d,g);return!g.pop()}}),has:c(function(b){return function(a){return 0<g(b,a).length}}),contains:c(function(b){return function(a){return-1<(a.textContent||a.innerText||F(a)).indexOf(b)}}),lang:c(function(b){sa.test(b||"")||g.error("unsupported lang: "+b);b=b.replace(wa,xa).toLowerCase();return function(a){var g;do if(g=T?a.lang:a.getAttribute("xml:lang")||a.getAttribute("lang"))return g=g.toLowerCase(),
g===b||0===g.indexOf(b+"-");while((a=a.parentNode)&&1===a.nodeType);return!1}}),target:function(a){var g=b.location&&b.location.hash;return g&&g.slice(1)===a.id},root:function(b){return b===ha},focus:function(b){return b===E.activeElement&&(!E.hasFocus||E.hasFocus())&&!!(b.type||b.href||~b.tabIndex)},enabled:function(b){return!1===b.disabled},disabled:function(b){return!0===b.disabled},checked:function(b){var a=b.nodeName.toLowerCase();return"input"===a&&!!b.checked||"option"===a&&!!b.selected},selected:function(b){b.parentNode&&
b.parentNode.selectedIndex;return!0===b.selected},empty:function(b){for(b=b.firstChild;b;b=b.nextSibling)if("@"<b.nodeName||3===b.nodeType||4===b.nodeType)return!1;return!0},parent:function(b){return!D.pseudos.empty(b)},header:function(b){return ya.test(b.nodeName)},input:function(b){return va.test(b.nodeName)},button:function(b){var a=b.nodeName.toLowerCase();return"input"===a&&"button"===b.type||"button"===a},text:function(b){var a;return"input"===b.nodeName.toLowerCase()&&"text"===b.type&&(null==
(a=b.getAttribute("type"))||a.toLowerCase()===b.type)},first:l(function(){return[0]}),last:l(function(b,a){return[a-1]}),eq:l(function(b,a,g){return[0>g?g+a:g]}),even:l(function(b,a){for(var g=0;g<a;g+=2)b.push(g);return b}),odd:l(function(b,a){for(var g=1;g<a;g+=2)b.push(g);return b}),lt:l(function(b,a,g){for(a=0>g?g+a:g;0<=--a;)b.push(a);return b}),gt:l(function(b,a,g){for(g=0>g?g+a:g;++g<a;)b.push(g);return b})}};D.pseudos.nth=D.pseudos.eq;for(y in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})D.pseudos[y]=
t(y);for(y in{submit:!0,reset:!0})D.pseudos[y]=w(y);n.prototype=D.filters=D.pseudos;D.setFilters=new n;K=g.compile=function(b,a){var g,e=[],m=[],d=oa[b+" "];if(!d){a||(a=p(b));for(g=a.length;g--;)d=C(a[g]),d[J]?e.push(d):m.push(d);d=oa(b,A(m,e))}return d};z.sortStable=J.split("").sort(Q).join("")===J;z.detectDuplicates=P;G();z.sortDetached=k(function(b){return b.compareDocumentPosition(E.createElement("div"))&1});k(function(b){b.innerHTML="<a href='#'></a>";return"#"===b.firstChild.getAttribute("href")})||
h("type|href|height|width",function(b,a,g){if(!g)return b.getAttribute(a,"type"===a.toLowerCase()?1:2)});z.attributes&&k(function(b){b.innerHTML="<input/>";b.firstChild.setAttribute("value","");return""===b.firstChild.getAttribute("value")})||h("value",function(b,a,g){if(!g&&"input"===b.nodeName.toLowerCase())return b.defaultValue});k(function(b){return null==b.getAttribute("disabled")})||h("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
function(b,a,g){var e;if(!g)return(e=b.getAttributeNode(a))&&e.specified?e.value:!0===b[a]?a.toLowerCase():null});e.find=g;e.expr=g.selectors;e.expr[":"]=e.expr.pseudos;e.unique=g.uniqueSort;e.text=g.getText;e.isXMLDoc=g.isXML;e.contains=g.contains})(a);var bb={};e.Callbacks=function(b){b="string"===typeof b?bb[b]||l(b):e.extend({},b);var a,m,d,k,h,f,t=[],w=!b.once&&[],n=function(g){m=b.memory&&g;d=!0;h=f||0;f=0;k=t.length;for(a=!0;t&&h<k;h++)if(!1===t[h].apply(g[0],g[1])&&b.stopOnFalse){m=!1;break}a=
!1;t&&(w?w.length&&n(w.shift()):m?t=[]:p.disable())},p={add:function(){if(t){var g=t.length;(function Na(a){e.each(a,function(a,g){var m=e.type(g);"function"===m?b.unique&&p.has(g)||t.push(g):g&&g.length&&"string"!==m&&Na(g)})})(arguments);a?k=t.length:m&&(f=g,n(m))}return this},remove:function(){t&&e.each(arguments,function(b,g){for(var m;-1<(m=e.inArray(g,t,m));)t.splice(m,1),a&&(m<=k&&k--,m<=h&&h--)});return this},has:function(b){return b?-1<e.inArray(b,t):!(!t||!t.length)},empty:function(){t=
[];k=0;return this},disable:function(){t=w=m=c;return this},disabled:function(){return!t},lock:function(){w=c;m||p.disable();return this},locked:function(){return!w},fireWith:function(b,g){!t||d&&!w||(g=g||[],g=[b,g.slice?g.slice():g],a?w.push(g):n(g));return this},fire:function(){p.fireWith(this,arguments);return this},fired:function(){return!!d}};return p};e.extend({Deferred:function(b){var a=[["resolve","done",e.Callbacks("once memory"),"resolved"],["reject","fail",e.Callbacks("once memory"),"rejected"],
["notify","progress",e.Callbacks("memory")]],m="pending",d={state:function(){return m},always:function(){c.done(arguments).fail(arguments);return this},then:function(){var b=arguments;return e.Deferred(function(g){e.each(a,function(a,m){var v=m[0],k=e.isFunction(b[a])&&b[a];c[m[1]](function(){var b=k&&k.apply(this,arguments);if(b&&e.isFunction(b.promise))b.promise().done(g.resolve).fail(g.reject).progress(g.notify);else g[v+"With"](this===d?g.promise():this,k?[b]:arguments)})});b=null}).promise()},
promise:function(b){return null!=b?e.extend(b,d):d}},c={};d.pipe=d.then;e.each(a,function(b,g){var e=g[2],v=g[3];d[g[1]]=e.add;v&&e.add(function(){m=v},a[b^1][2].disable,a[2][2].lock);c[g[0]]=function(){c[g[0]+"With"](this===c?d:this,arguments);return this};c[g[0]+"With"]=e.fireWith});d.promise(c);b&&b.call(c,c);return c},when:function(b){var a=0,m=oa.call(arguments),d=m.length,c=1!==d||b&&e.isFunction(b.promise)?d:0,k=1===c?b:e.Deferred(),h=function(b,a,g){return function(e){a[b]=this;g[b]=1<arguments.length?
oa.call(arguments):e;g===f?k.notifyWith(a,g):--c||k.resolveWith(a,g)}},f,t,w;if(1<d)for(f=Array(d),t=Array(d),w=Array(d);a<d;a++)m[a]&&e.isFunction(m[a].promise)?m[a].promise().done(h(a,w,m)).fail(k.reject).progress(h(a,t,f)):--c;c||k.resolveWith(w,m);return k.promise()}});e.support=function(b){var g,m,d,c,k,h,f=E.createElement("div");f.setAttribute("className","t");f.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";g=f.getElementsByTagName("*")||[];m=f.getElementsByTagName("a")[0];
if(!m||!m.style||!g.length)return b;d=E.createElement("select");c=d.appendChild(E.createElement("option"));g=f.getElementsByTagName("input")[0];m.style.cssText="top:1px;float:left;opacity:.5";b.getSetAttribute="t"!==f.className;b.leadingWhitespace=3===f.firstChild.nodeType;b.tbody=!f.getElementsByTagName("tbody").length;b.htmlSerialize=!!f.getElementsByTagName("link").length;b.style=/top/.test(m.getAttribute("style"));b.hrefNormalized="/a"===m.getAttribute("href");b.opacity=/^0.5/.test(m.style.opacity);
b.cssFloat=!!m.style.cssFloat;b.checkOn=!!g.value;b.optSelected=c.selected;b.enctype=!!E.createElement("form").enctype;b.html5Clone="<:nav></:nav>"!==E.createElement("nav").cloneNode(!0).outerHTML;b.inlineBlockNeedsLayout=!1;b.shrinkWrapBlocks=!1;b.pixelPosition=!1;b.deleteExpando=!0;b.noCloneEvent=!0;b.reliableMarginRight=!0;b.boxSizingReliable=!0;g.checked=!0;b.noCloneChecked=g.cloneNode(!0).checked;d.disabled=!0;b.optDisabled=!c.disabled;try{delete f.test}catch(sc){b.deleteExpando=!1}g=E.createElement("input");
g.setAttribute("value","");b.input=""===g.getAttribute("value");g.value="t";g.setAttribute("type","radio");b.radioValue="t"===g.value;g.setAttribute("checked","t");g.setAttribute("name","t");m=E.createDocumentFragment();m.appendChild(g);b.appendChecked=g.checked;b.checkClone=m.cloneNode(!0).cloneNode(!0).lastChild.checked;f.attachEvent&&(f.attachEvent("onclick",function(){b.noCloneEvent=!1}),f.cloneNode(!0).click());for(h in{submit:!0,change:!0,focusin:!0})f.setAttribute(m="on"+h,"t"),b[h+"Bubbles"]=
m in a||!1===f.attributes[m].expando;f.style.backgroundClip="content-box";f.cloneNode(!0).style.backgroundClip="";b.clearCloneStyle="content-box"===f.style.backgroundClip;for(h in e(b))break;b.ownLast="0"!==h;e(function(){var g,m,d=E.getElementsByTagName("body")[0];d&&(g=E.createElement("div"),g.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",d.appendChild(g).appendChild(f),f.innerHTML="<table><tr><td></td><td>t</td></tr></table>",m=f.getElementsByTagName("td"),
m[0].style.cssText="padding:0;margin:0;border:0;display:none",k=0===m[0].offsetHeight,m[0].style.display="",m[1].style.display="none",b.reliableHiddenOffsets=k&&0===m[0].offsetHeight,f.innerHTML="",f.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",e.swap(d,null!=d.style.zoom?{zoom:1}:{},function(){b.boxSizing=4===f.offsetWidth}),a.getComputedStyle&&(b.pixelPosition=
"1%"!==(a.getComputedStyle(f,null)||{}).top,b.boxSizingReliable="4px"===(a.getComputedStyle(f,null)||{width:"4px"}).width,m=f.appendChild(E.createElement("div")),m.style.cssText=f.style.cssText="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",m.style.marginRight=m.style.width="0",f.style.width="1px",b.reliableMarginRight=!parseFloat((a.getComputedStyle(m,null)||{}).marginRight)),typeof f.style.zoom!==da&&(f.innerHTML="",
f.style.cssText="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=3===f.offsetWidth,f.style.display="block",f.innerHTML="<div></div>",f.firstChild.style.width="5px",b.shrinkWrapBlocks=3!==f.offsetWidth),d.removeChild(g),g=f=m=m=null)});g=d=m=c=m=g=null;return b}({});var Cb=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,Bb=/([A-Z])/g;e.extend({cache:{},noData:{applet:!0,
embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(b){b=b.nodeType?e.cache[b[e.expando]]:b[e.expando];return!!b&&!n(b)},data:function(b,a,e){return q(b,a,e)},removeData:function(b,a){return r(b,a)},_data:function(b,a,e){return q(b,a,e,!0)},_removeData:function(b,a){return r(b,a,!0)},acceptData:function(b){if(b.nodeType&&1!==b.nodeType&&9!==b.nodeType)return!1;var a=b.nodeName&&e.noData[b.nodeName.toLowerCase()];return!a||!0!==a&&b.getAttribute("classid")===a}});e.fn.extend({data:function(b,
a){var g,d,k=null,h=0,f=this[0];if(b===c){if(this.length&&(k=e.data(f),1===f.nodeType&&!e._data(f,"parsedAttrs"))){for(g=f.attributes;h<g.length;h++)d=g[h].name,0===d.indexOf("data-")&&(d=e.camelCase(d.slice(5)),u(f,d,k[d]));e._data(f,"parsedAttrs",!0)}return k}return"object"===typeof b?this.each(function(){e.data(this,b)}):1<arguments.length?this.each(function(){e.data(this,b,a)}):f?u(f,b,e.data(f,b)):null},removeData:function(b){return this.each(function(){e.removeData(this,b)})}});e.extend({queue:function(b,
a,m){var g;if(b)return a=(a||"fx")+"queue",g=e._data(b,a),m&&(!g||e.isArray(m)?g=e._data(b,a,e.makeArray(m)):g.push(m)),g||[]},dequeue:function(b,a){a=a||"fx";var g=e.queue(b,a),d=g.length,c=g.shift(),k=e._queueHooks(b,a),h=function(){e.dequeue(b,a)};"inprogress"===c&&(c=g.shift(),d--);c&&("fx"===a&&g.unshift("inprogress"),delete k.stop,c.call(b,h,k));!d&&k&&k.empty.fire()},_queueHooks:function(b,a){var g=a+"queueHooks";return e._data(b,g)||e._data(b,g,{empty:e.Callbacks("once memory").add(function(){e._removeData(b,
a+"queue");e._removeData(b,g)})})}});e.fn.extend({queue:function(b,a){var g=2;"string"!==typeof b&&(a=b,b="fx",g--);return arguments.length<g?e.queue(this[0],b):a===c?this:this.each(function(){var g=e.queue(this,b,a);e._queueHooks(this,b);"fx"===b&&"inprogress"!==g[0]&&e.dequeue(this,b)})},dequeue:function(b){return this.each(function(){e.dequeue(this,b)})},delay:function(b,a){b=e.fx?e.fx.speeds[b]||b:b;return this.queue(a||"fx",function(a,g){var e=setTimeout(a,b);g.stop=function(){clearTimeout(e)}})},
clearQueue:function(b){return this.queue(b||"fx",[])},promise:function(b,a){var g,d=1,k=e.Deferred(),h=this,f=this.length,t=function(){--d||k.resolveWith(h,[h])};"string"!==typeof b&&(a=b,b=c);for(b=b||"fx";f--;)(g=e._data(h[f],b+"queueHooks"))&&g.empty&&(d++,g.empty.add(t));t();return k.promise(a)}});var Ba,ib,Sa=/[\t\r\n\f]/g,Rb=/\r/g,Sb=/^(?:input|select|textarea|button|object)$/i,Tb=/^(?:a|area)$/i,Ta=/^(?:checked|selected)$/i,ma=e.support.getSetAttribute,Oa=e.support.input;e.fn.extend({attr:function(b,
a){return e.access(this,e.attr,b,a,1<arguments.length)},removeAttr:function(b){return this.each(function(){e.removeAttr(this,b)})},prop:function(b,a){return e.access(this,e.prop,b,a,1<arguments.length)},removeProp:function(b){b=e.propFix[b]||b;return this.each(function(){try{this[b]=c,delete this[b]}catch(g){}})},addClass:function(b){var a,d,c,k,h,f=0,t=this.length;a="string"===typeof b&&b;if(e.isFunction(b))return this.each(function(a){e(this).addClass(b.call(this,a,this.className))});if(a)for(a=
(b||"").match(la)||[];f<t;f++)if(d=this[f],c=1===d.nodeType&&(d.className?(" "+d.className+" ").replace(Sa," "):" ")){for(h=0;k=a[h++];)0>c.indexOf(" "+k+" ")&&(c+=k+" ");d.className=e.trim(c)}return this},removeClass:function(b){var a,d,c,k,h,f=0,t=this.length;a=0===arguments.length||"string"===typeof b&&b;if(e.isFunction(b))return this.each(function(a){e(this).removeClass(b.call(this,a,this.className))});if(a)for(a=(b||"").match(la)||[];f<t;f++)if(d=this[f],c=1===d.nodeType&&(d.className?(" "+d.className+
" ").replace(Sa," "):"")){for(h=0;k=a[h++];)for(;0<=c.indexOf(" "+k+" ");)c=c.replace(" "+k+" "," ");d.className=b?e.trim(c):""}return this},toggleClass:function(b,a){var g=typeof b;return"boolean"===typeof a&&"string"===g?a?this.addClass(b):this.removeClass(b):e.isFunction(b)?this.each(function(g){e(this).toggleClass(b.call(this,g,this.className,a),a)}):this.each(function(){if("string"===g)for(var a,d=0,m=e(this),c=b.match(la)||[];a=c[d++];)m.hasClass(a)?m.removeClass(a):m.addClass(a);else if(g===
da||"boolean"===g)this.className&&e._data(this,"__className__",this.className),this.className=this.className||!1===b?"":e._data(this,"__className__")||""})},hasClass:function(b){b=" "+b+" ";for(var a=0,e=this.length;a<e;a++)if(1===this[a].nodeType&&0<=(" "+this[a].className+" ").replace(Sa," ").indexOf(b))return!0;return!1},val:function(b){var a,d,k,h=this[0];if(arguments.length)return k=e.isFunction(b),this.each(function(a){1===this.nodeType&&(a=k?b.call(this,a,e(this).val()):b,null==a?a="":"number"===
typeof a?a+="":e.isArray(a)&&(a=e.map(a,function(b){return null==b?"":b+""})),d=e.valHooks[this.type]||e.valHooks[this.nodeName.toLowerCase()],d&&"set"in d&&d.set(this,a,"value")!==c||(this.value=a))});if(h){if((d=e.valHooks[h.type]||e.valHooks[h.nodeName.toLowerCase()])&&"get"in d&&(a=d.get(h,"value"))!==c)return a;a=h.value;return"string"===typeof a?a.replace(Rb,""):null==a?"":a}}});e.extend({valHooks:{option:{get:function(b){var a=e.find.attr(b,"value");return null!=a?a:b.text}},select:{get:function(b){for(var a,
d=b.options,c=b.selectedIndex,k=(b="select-one"===b.type||0>c)?null:[],h=b?c+1:d.length,f=0>c?h:b?c:0;f<h;f++)if(a=d[f],!(!a.selected&&f!==c||(e.support.optDisabled?a.disabled:null!==a.getAttribute("disabled"))||a.parentNode.disabled&&e.nodeName(a.parentNode,"optgroup"))){a=e(a).val();if(b)return a;k.push(a)}return k},set:function(b,a){for(var g,d,c=b.options,k=e.makeArray(a),h=c.length;h--;)if(d=c[h],d.selected=0<=e.inArray(e(d).val(),k))g=!0;g||(b.selectedIndex=-1);return k}}},attr:function(b,a,
d){var g,m,k=b.nodeType;if(b&&3!==k&&8!==k&&2!==k){if(typeof b.getAttribute===da)return e.prop(b,a,d);1===k&&e.isXMLDoc(b)||(a=a.toLowerCase(),g=e.attrHooks[a]||(e.expr.match.bool.test(a)?ib:Ba));if(d!==c)if(null===d)e.removeAttr(b,a);else{if(g&&"set"in g&&(m=g.set(b,d,a))!==c)return m;b.setAttribute(a,d+"");return d}else{if(g&&"get"in g&&null!==(m=g.get(b,a)))return m;m=e.find.attr(b,a);return null==m?c:m}}},removeAttr:function(b,a){var g,d,c=0,k=a&&a.match(la);if(k&&1===b.nodeType)for(;g=k[c++];)d=
e.propFix[g]||g,e.expr.match.bool.test(g)?Oa&&ma||!Ta.test(g)?b[d]=!1:b[e.camelCase("default-"+g)]=b[d]=!1:e.attr(b,g,""),b.removeAttribute(ma?g:d)},attrHooks:{type:{set:function(b,a){if(!e.support.radioValue&&"radio"===a&&e.nodeName(b,"input")){var g=b.value;b.setAttribute("type",a);g&&(b.value=g);return a}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(b,a,d){var g,m,k=b.nodeType;if(b&&3!==k&&8!==k&&2!==k)return 1===k&&e.isXMLDoc(b)||(a=e.propFix[a]||a,m=e.propHooks[a]),d!==c?m&&
"set"in m&&(g=m.set(b,d,a))!==c?g:b[a]=d:m&&"get"in m&&null!==(g=m.get(b,a))?g:b[a]},propHooks:{tabIndex:{get:function(b){var a=e.find.attr(b,"tabindex");return a?parseInt(a,10):Sb.test(b.nodeName)||Tb.test(b.nodeName)&&b.href?0:-1}}}});ib={set:function(b,a,d){!1===a?e.removeAttr(b,d):Oa&&ma||!Ta.test(d)?b.setAttribute(!ma&&e.propFix[d]||d,d):b[e.camelCase("default-"+d)]=b[d]=!0;return d}};e.each(e.expr.match.bool.source.match(/\w+/g),function(b,a){var g=e.expr.attrHandle[a]||e.find.attr;e.expr.attrHandle[a]=
Oa&&ma||!Ta.test(a)?function(b,a,d){var m=e.expr.attrHandle[a];b=d?c:(e.expr.attrHandle[a]=c)!=g(b,a,d)?a.toLowerCase():null;e.expr.attrHandle[a]=m;return b}:function(b,a,g){return g?c:b[e.camelCase("default-"+a)]?a.toLowerCase():null}});Oa&&ma||(e.attrHooks.value={set:function(b,a,d){if(e.nodeName(b,"input"))b.defaultValue=a;else return Ba&&Ba.set(b,a,d)}});ma||(Ba={set:function(b,a,e){var g=b.getAttributeNode(e);g||b.setAttributeNode(g=b.ownerDocument.createAttribute(e));g.value=a+="";return"value"===
e||a===b.getAttribute(e)?a:c}},e.expr.attrHandle.id=e.expr.attrHandle.name=e.expr.attrHandle.coords=function(b,a,e){var g;return e?c:(g=b.getAttributeNode(a))&&""!==g.value?g.value:null},e.valHooks.button={get:function(b,a){var g=b.getAttributeNode(a);return g&&g.specified?g.value:c},set:Ba.set},e.attrHooks.contenteditable={set:function(b,a,e){Ba.set(b,""===a?!1:a,e)}},e.each(["width","height"],function(b,a){e.attrHooks[a]={set:function(b,g){if(""===g)return b.setAttribute(a,"auto"),g}}}));e.support.hrefNormalized||
e.each(["href","src"],function(b,a){e.propHooks[a]={get:function(b){return b.getAttribute(a,4)}}});e.support.style||(e.attrHooks.style={get:function(b){return b.style.cssText||c},set:function(b,a){return b.style.cssText=a+""}});e.support.optSelected||(e.propHooks.selected={get:function(b){if(b=b.parentNode)b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex;return null}});e.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "),
function(){e.propFix[this.toLowerCase()]=this});e.support.enctype||(e.propFix.enctype="encoding");e.each(["radio","checkbox"],function(){e.valHooks[this]={set:function(b,a){if(e.isArray(a))return b.checked=0<=e.inArray(e(b).val(),a)}};e.support.checkOn||(e.valHooks[this].get=function(b){return null===b.getAttribute("value")?"on":b.value})});var Ua=/^(?:input|select|textarea)$/i,Ub=/^key/,Vb=/^(?:mouse|contextmenu)|click/,jb=/^(?:focusinfocus|focusoutblur)$/,kb=/^([^.]*)(?:\.(.+)|)$/;e.event={global:{},
add:function(b,a,d,k,h){var g,m,f,v,t,w,l,I,n;if(f=e._data(b)){d.handler&&(v=d,d=v.handler,h=v.selector);d.guid||(d.guid=e.guid++);(m=f.events)||(m=f.events={});(t=f.handle)||(t=f.handle=function(b){return typeof e===da||b&&e.event.triggered===b.type?c:e.event.dispatch.apply(t.elem,arguments)},t.elem=b);a=(a||"").match(la)||[""];for(f=a.length;f--;)g=kb.exec(a[f])||[],I=w=g[1],n=(g[2]||"").split(".").sort(),I&&(g=e.event.special[I]||{},I=(h?g.delegateType:g.bindType)||I,g=e.event.special[I]||{},w=
e.extend({type:I,origType:w,data:k,handler:d,guid:d.guid,selector:h,needsContext:h&&e.expr.match.needsContext.test(h),namespace:n.join(".")},v),(l=m[I])||(l=m[I]=[],l.delegateCount=0,g.setup&&!1!==g.setup.call(b,k,n,t)||(b.addEventListener?b.addEventListener(I,t,!1):b.attachEvent&&b.attachEvent("on"+I,t))),g.add&&(g.add.call(b,w),w.handler.guid||(w.handler.guid=d.guid)),h?l.splice(l.delegateCount++,0,w):l.push(w),e.event.global[I]=!0);b=null}},remove:function(b,a,d,c,k){var g,m,h,f,v,t,w,l,I,n,p,
q=e.hasData(b)&&e._data(b);if(q&&(t=q.events)){a=(a||"").match(la)||[""];for(v=a.length;v--;)if(h=kb.exec(a[v])||[],I=p=h[1],n=(h[2]||"").split(".").sort(),I){w=e.event.special[I]||{};I=(c?w.delegateType:w.bindType)||I;l=t[I]||[];h=h[2]&&new RegExp("(^|\\.)"+n.join("\\.(?:.*\\.|)")+"(\\.|$)");for(f=g=l.length;g--;)m=l[g],!k&&p!==m.origType||d&&d.guid!==m.guid||h&&!h.test(m.namespace)||c&&c!==m.selector&&("**"!==c||!m.selector)||(l.splice(g,1),m.selector&&l.delegateCount--,w.remove&&w.remove.call(b,
m));f&&!l.length&&(w.teardown&&!1!==w.teardown.call(b,n,q.handle)||e.removeEvent(b,I,q.handle),delete t[I])}else for(I in t)e.event.remove(b,I+a[v],d,c,!0);e.isEmptyObject(t)&&(delete q.handle,e._removeData(b,"events"))}},trigger:function(b,g,d,k){var m,h,f,v,t,w,l=[d||E],n=ja.call(b,"type")?b.type:b;t=ja.call(b,"namespace")?b.namespace.split("."):[];f=m=d=d||E;if(3!==d.nodeType&&8!==d.nodeType&&!jb.test(n+e.event.triggered)&&(0<=n.indexOf(".")&&(t=n.split("."),n=t.shift(),t.sort()),h=0>n.indexOf(":")&&
"on"+n,b=b[e.expando]?b:new e.Event(n,"object"===typeof b&&b),b.isTrigger=k?2:3,b.namespace=t.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=c,b.target||(b.target=d),g=null==g?[b]:e.makeArray(g,[b]),t=e.event.special[n]||{},k||!t.trigger||!1!==t.trigger.apply(d,g))){if(!k&&!t.noBubble&&!e.isWindow(d)){v=t.delegateType||n;jb.test(v+n)||(f=f.parentNode);for(;f;f=f.parentNode)l.push(f),m=f;m===(d.ownerDocument||E)&&l.push(m.defaultView||m.parentWindow||
a)}for(w=0;(f=l[w++])&&!b.isPropagationStopped();)b.type=1<w?v:t.bindType||n,(m=(e._data(f,"events")||{})[b.type]&&e._data(f,"handle"))&&m.apply(f,g),(m=h&&f[h])&&e.acceptData(f)&&m.apply&&!1===m.apply(f,g)&&b.preventDefault();b.type=n;if(!(k||b.isDefaultPrevented()||t._default&&!1!==t._default.apply(l.pop(),g))&&e.acceptData(d)&&h&&d[n]&&!e.isWindow(d)){(m=d[h])&&(d[h]=null);e.event.triggered=n;try{d[n]()}catch(uc){}e.event.triggered=c;m&&(d[h]=m)}return b.result}},dispatch:function(b){b=e.event.fix(b);
var a,d,k,h,f,t=oa.call(arguments);a=(e._data(this,"events")||{})[b.type]||[];var w=e.event.special[b.type]||{};t[0]=b;b.delegateTarget=this;if(!w.preDispatch||!1!==w.preDispatch.call(this,b)){f=e.event.handlers.call(this,b,a);for(a=0;(k=f[a++])&&!b.isPropagationStopped();)for(b.currentTarget=k.elem,h=0;(d=k.handlers[h++])&&!b.isImmediatePropagationStopped();)if(!b.namespace_re||b.namespace_re.test(d.namespace))b.handleObj=d,b.data=d.data,d=((e.event.special[d.origType]||{}).handle||d.handler).apply(k.elem,
t),d!==c&&!1===(b.result=d)&&(b.preventDefault(),b.stopPropagation());w.postDispatch&&w.postDispatch.call(this,b);return b.result}},handlers:function(b,a){var g,d,k,h,f=[],t=a.delegateCount,w=b.target;if(t&&w.nodeType&&(!b.button||"click"!==b.type))for(;w!=this;w=w.parentNode||this)if(1===w.nodeType&&(!0!==w.disabled||"click"!==b.type)){k=[];for(h=0;h<t;h++)d=a[h],g=d.selector+" ",k[g]===c&&(k[g]=d.needsContext?0<=e(g,this).index(w):e.find(g,this,null,[w]).length),k[g]&&k.push(d);k.length&&f.push({elem:w,
handlers:k})}t<a.length&&f.push({elem:this,handlers:a.slice(t)});return f},fix:function(b){if(b[e.expando])return b;var a,d,c;a=b.type;var k=b,h=this.fixHooks[a];h||(this.fixHooks[a]=h=Vb.test(a)?this.mouseHooks:Ub.test(a)?this.keyHooks:{});c=h.props?this.props.concat(h.props):this.props;b=new e.Event(k);for(a=c.length;a--;)d=c[a],b[d]=k[d];b.target||(b.target=k.srcElement||E);3===b.target.nodeType&&(b.target=b.target.parentNode);b.metaKey=!!b.metaKey;return h.filter?h.filter(b,k):b},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks:{},keyHooks:{props:["char","charCode","key","keyCode"],filter:function(b,a){null==b.which&&(b.which=null!=a.charCode?a.charCode:a.keyCode);return b}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b,a){var e,g,d=a.button,k=a.fromElement;null==b.pageX&&null!=a.clientX&&(e=b.target.ownerDocument||E,g=e.documentElement,e=e.body,b.pageX=a.clientX+(g&&g.scrollLeft||e&&e.scrollLeft||0)-(g&&g.clientLeft||
e&&e.clientLeft||0),b.pageY=a.clientY+(g&&g.scrollTop||e&&e.scrollTop||0)-(g&&g.clientTop||e&&e.clientTop||0));!b.relatedTarget&&k&&(b.relatedTarget=k===b.target?a.toElement:k);b.which||d===c||(b.which=d&1?1:d&2?3:d&4?2:0);return b}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==A()&&this.focus)try{return this.focus(),!1}catch(b){}},delegateType:"focusin"},blur:{trigger:function(){if(this===A()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(e.nodeName(this,
"input")&&"checkbox"===this.type&&this.click)return this.click(),!1},_default:function(b){return e.nodeName(b.target,"a")}},beforeunload:{postDispatch:function(b){b.result!==c&&(b.originalEvent.returnValue=b.result)}}},simulate:function(b,a,d,c){b=e.extend(new e.Event,d,{type:b,isSimulated:!0,originalEvent:{}});c?e.event.trigger(b,null,a):e.event.dispatch.call(a,b);b.isDefaultPrevented()&&d.preventDefault()}};e.removeEvent=E.removeEventListener?function(b,a,e){b.removeEventListener&&b.removeEventListener(a,
e,!1)}:function(b,a,e){a="on"+a;b.detachEvent&&(typeof b[a]===da&&(b[a]=null),b.detachEvent(a,e))};e.Event=function(b,a){if(!(this instanceof e.Event))return new e.Event(b,a);b&&b.type?(this.originalEvent=b,this.type=b.type,this.isDefaultPrevented=b.defaultPrevented||!1===b.returnValue||b.getPreventDefault&&b.getPreventDefault()?x:y):this.type=b;a&&e.extend(this,a);this.timeStamp=b&&b.timeStamp||e.now();this[e.expando]=!0};e.Event.prototype={isDefaultPrevented:y,isPropagationStopped:y,isImmediatePropagationStopped:y,
preventDefault:function(){var b=this.originalEvent;this.isDefaultPrevented=x;b&&(b.preventDefault?b.preventDefault():b.returnValue=!1)},stopPropagation:function(){var b=this.originalEvent;this.isPropagationStopped=x;b&&(b.stopPropagation&&b.stopPropagation(),b.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=x;this.stopPropagation()}};e.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b,a){e.event.special[b]={delegateType:a,bindType:a,handle:function(b){var g,
d=b.relatedTarget,c=b.handleObj;if(!d||d!==this&&!e.contains(this,d))b.type=c.origType,g=c.handler.apply(this,arguments),b.type=a;return g}}});e.support.submitBubbles||(e.event.special.submit={setup:function(){if(e.nodeName(this,"form"))return!1;e.event.add(this,"click._submit keypress._submit",function(b){b=b.target;(b=e.nodeName(b,"input")||e.nodeName(b,"button")?b.form:c)&&!e._data(b,"submitBubbles")&&(e.event.add(b,"submit._submit",function(b){b._submit_bubble=!0}),e._data(b,"submitBubbles",!0))})},
postDispatch:function(b){b._submit_bubble&&(delete b._submit_bubble,this.parentNode&&!b.isTrigger&&e.event.simulate("submit",this.parentNode,b,!0))},teardown:function(){if(e.nodeName(this,"form"))return!1;e.event.remove(this,"._submit")}});e.support.changeBubbles||(e.event.special.change={setup:function(){if(Ua.test(this.nodeName)){if("checkbox"===this.type||"radio"===this.type)e.event.add(this,"propertychange._change",function(b){"checked"===b.originalEvent.propertyName&&(this._just_changed=!0)}),
e.event.add(this,"click._change",function(b){this._just_changed&&!b.isTrigger&&(this._just_changed=!1);e.event.simulate("change",this,b,!0)});return!1}e.event.add(this,"beforeactivate._change",function(b){b=b.target;Ua.test(b.nodeName)&&!e._data(b,"changeBubbles")&&(e.event.add(b,"change._change",function(b){!this.parentNode||b.isSimulated||b.isTrigger||e.event.simulate("change",this.parentNode,b,!0)}),e._data(b,"changeBubbles",!0))})},handle:function(b){var a=b.target;if(this!==a||b.isSimulated||
b.isTrigger||"radio"!==a.type&&"checkbox"!==a.type)return b.handleObj.handler.apply(this,arguments)},teardown:function(){e.event.remove(this,"._change");return!Ua.test(this.nodeName)}});e.support.focusinBubbles||e.each({focus:"focusin",blur:"focusout"},function(b,a){var g=0,d=function(b){e.event.simulate(a,b.target,e.event.fix(b),!0)};e.event.special[a]={setup:function(){0===g++&&E.addEventListener(b,d,!0)},teardown:function(){0===--g&&E.removeEventListener(b,d,!0)}}});e.fn.extend({on:function(b,
a,d,k,h){var g,m;if("object"===typeof b){"string"!==typeof a&&(d=d||a,a=c);for(g in b)this.on(g,a,d,b[g],h);return this}null==d&&null==k?(k=a,d=a=c):null==k&&("string"===typeof a?(k=d,d=c):(k=d,d=a,a=c));if(!1===k)k=y;else if(!k)return this;1===h&&(m=k,k=function(b){e().off(b);return m.apply(this,arguments)},k.guid=m.guid||(m.guid=e.guid++));return this.each(function(){e.event.add(this,b,k,d,a)})},one:function(b,a,e,d){return this.on(b,a,e,d,1)},off:function(b,a,d){var g;if(b&&b.preventDefault&&b.handleObj)return g=
b.handleObj,e(b.delegateTarget).off(g.namespace?g.origType+"."+g.namespace:g.origType,g.selector,g.handler),this;if("object"===typeof b){for(g in b)this.off(g,a,b[g]);return this}if(!1===a||"function"===typeof a)d=a,a=c;!1===d&&(d=y);return this.each(function(){e.event.remove(this,b,d,a)})},trigger:function(b,a){return this.each(function(){e.event.trigger(b,a,this)})},triggerHandler:function(b,a){var d=this[0];if(d)return e.event.trigger(b,a,d,!0)}});var Db=/^.[^:#\[\.,]*$/,Wb=/^(?:parents|prev(?:Until|All))/,
lb=e.expr.match.needsContext,Xb={children:!0,contents:!0,next:!0,prev:!0};e.fn.extend({find:function(b){var a,d=[],c=this,k=c.length;if("string"!==typeof b)return this.pushStack(e(b).filter(function(){for(a=0;a<k;a++)if(e.contains(c[a],this))return!0}));for(a=0;a<k;a++)e.find(b,c[a],d);d=this.pushStack(1<k?e.unique(d):d);d.selector=this.selector?this.selector+" "+b:b;return d},has:function(b){var a,d=e(b,this),c=d.length;return this.filter(function(){for(a=0;a<c;a++)if(e.contains(this,d[a]))return!0})},
not:function(b){return this.pushStack(C(this,b||[],!0))},filter:function(b){return this.pushStack(C(this,b||[],!1))},is:function(b){return!!C(this,"string"===typeof b&&lb.test(b)?e(b):b||[],!1).length},closest:function(b,a){for(var d,g=0,c=this.length,k=[],h=lb.test(b)||"string"!==typeof b?e(b,a||this.context):0;g<c;g++)for(d=this[g];d&&d!==a;d=d.parentNode)if(11>d.nodeType&&(h?-1<h.index(d):1===d.nodeType&&e.find.matchesSelector(d,b))){k.push(d);break}return this.pushStack(1<k.length?e.unique(k):
k)},index:function(b){return b?"string"===typeof b?e.inArray(this[0],e(b)):e.inArray(b.jquery?b[0]:b,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(b,a){var d="string"===typeof b?e(b,a):e.makeArray(b&&b.nodeType?[b]:b),d=e.merge(this.get(),d);return this.pushStack(e.unique(d))},addBack:function(b){return this.add(null==b?this.prevObject:this.prevObject.filter(b))}});e.each({parent:function(b){return(b=b.parentNode)&&11!==b.nodeType?b:null},parents:function(b){return e.dir(b,
"parentNode")},parentsUntil:function(b,a,d){return e.dir(b,"parentNode",d)},next:function(b){return B(b,"nextSibling")},prev:function(b){return B(b,"previousSibling")},nextAll:function(b){return e.dir(b,"nextSibling")},prevAll:function(b){return e.dir(b,"previousSibling")},nextUntil:function(b,a,d){return e.dir(b,"nextSibling",d)},prevUntil:function(b,a,d){return e.dir(b,"previousSibling",d)},siblings:function(b){return e.sibling((b.parentNode||{}).firstChild,b)},children:function(b){return e.sibling(b.firstChild)},
contents:function(b){return e.nodeName(b,"iframe")?b.contentDocument||b.contentWindow.document:e.merge([],b.childNodes)}},function(b,a){e.fn[b]=function(d,g){var c=e.map(this,a,d);"Until"!==b.slice(-5)&&(g=d);g&&"string"===typeof g&&(c=e.filter(g,c));1<this.length&&(Xb[b]||(c=e.unique(c)),Wb.test(b)&&(c=c.reverse()));return this.pushStack(c)}});e.extend({filter:function(b,a,d){var g=a[0];d&&(b=":not("+b+")");return 1===a.length&&1===g.nodeType?e.find.matchesSelector(g,b)?[g]:[]:e.find.matches(b,e.grep(a,
function(b){return 1===b.nodeType}))},dir:function(b,a,d){var g=[];for(b=b[a];b&&9!==b.nodeType&&(d===c||1!==b.nodeType||!e(b).is(d));)1===b.nodeType&&g.push(b),b=b[a];return g},sibling:function(a,e){for(var b=[];a;a=a.nextSibling)1===a.nodeType&&a!==e&&b.push(a);return b}});var cb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Yb=/ jQuery\d+="(?:null|\d+)"/g,mb=new RegExp("<(?:"+cb+")[\\s/>]",
"i"),Va=/^\s+/,nb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ob=/<([\w:]+)/,pb=/<tbody/i,Zb=/<|&#?\w+;/,$b=/<(?:script|style|link)/i,Qa=/^(?:checkbox|radio)$/i,ac=/checked\s*(?:[^=]|=\s*.checked.)/i,qb=/^$|\/(?:java|ecma)script/i,Eb=/^true\/(.*)/,bc=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ca={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],
tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:e.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Wa=z(E).appendChild(E.createElement("div"));ca.optgroup=ca.option;ca.tbody=ca.tfoot=ca.colgroup=ca.caption=ca.thead;ca.th=ca.td;e.fn.extend({text:function(a){return e.access(this,function(a){return a===c?e.text(this):this.empty().append((this[0]&&this[0].ownerDocument||E).createTextNode(a))},
null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||F(this,a).appendChild(a)})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=F(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,
function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,d){for(var b,g=a?e.filter(a,this):this,c=0;null!=(b=g[c]);c++)d||1!==b.nodeType||e.cleanData(J(b)),b.parentNode&&(d&&e.contains(b.ownerDocument,b)&&G(J(b,"script")),b.parentNode.removeChild(b));return this},empty:function(){for(var a,d=0;null!=(a=this[d]);d++){for(1===a.nodeType&&e.cleanData(J(a,!1));a.firstChild;)a.removeChild(a.firstChild);a.options&&e.nodeName(a,"select")&&(a.options.length=0)}return this},
clone:function(a,d){a=null==a?!1:a;d=null==d?a:d;return this.map(function(){return e.clone(this,a,d)})},html:function(a){return e.access(this,function(a){var b=this[0]||{},d=0,g=this.length;if(a===c)return 1===b.nodeType?b.innerHTML.replace(Yb,""):c;if(!("string"!==typeof a||$b.test(a)||!e.support.htmlSerialize&&mb.test(a)||!e.support.leadingWhitespace&&Va.test(a)||ca[(ob.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(nb,"<$1></$2>");try{for(;d<g;d++)b=this[d]||{},1===b.nodeType&&(e.cleanData(J(b,
!1)),b.innerHTML=a);b=0}catch(L){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=e.map(this,function(a){return[a.nextSibling,a.parentNode]}),d=0;this.domManip(arguments,function(b){var g=a[d++],c=a[d++];c&&(g&&g.parentNode!==c&&(g=this.nextSibling),e(this).remove(),c.insertBefore(b,g))},!0);return d?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,d,c){a=Ka.apply([],a);var b,g,k,m,h=0,f=this.length,t=this,w=f-1,l=a[0],n=e.isFunction(l);
if(n||!(1>=f||"string"!==typeof l||e.support.checkClone)&&ac.test(l))return this.each(function(b){var e=t.eq(b);n&&(a[0]=l.call(this,b,e.html()));e.domManip(a,d,c)});if(f&&(m=e.buildFragment(a,this[0].ownerDocument,!1,!c&&this),b=m.firstChild,1===m.childNodes.length&&(m=b),b)){k=e.map(J(m,"script"),K);for(g=k.length;h<f;h++)b=m,h!==w&&(b=e.clone(b,!0,!0),g&&e.merge(k,J(b,"script"))),d.call(this[h],b,h);if(g)for(m=k[k.length-1].ownerDocument,e.map(k,H),h=0;h<g;h++)b=k[h],qb.test(b.type||"")&&!e._data(b,
"globalEval")&&e.contains(m,b)&&(b.src?e._evalUrl(b.src):e.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bc,"")));m=b=null}return this}});e.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,d){e.fn[a]=function(a){for(var b=0,g=[],c=e(a),k=c.length-1;b<=k;b++)a=b===k?this:this.clone(!0),e(c[b])[d](a),za.apply(g,a.get());return this.pushStack(g)}});e.extend({clone:function(a,d,c){var b,g,k,m,h,f=e.contains(a.ownerDocument,
a);e.support.html5Clone||e.isXMLDoc(a)||!mb.test("<"+a.nodeName+">")?k=a.cloneNode(!0):(Wa.innerHTML=a.outerHTML,Wa.removeChild(k=Wa.firstChild));if(!(e.support.noCloneEvent&&e.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||e.isXMLDoc(a)))for(b=J(k),h=J(a),m=0;null!=(g=h[m]);++m)if(b[m]){var t=b[m],w,l=void 0,n;if(1===t.nodeType){w=t.nodeName.toLowerCase();if(!e.support.noCloneEvent&&t[e.expando]){n=e._data(t);for(l in n.events)e.removeEvent(t,l,n.handle);t.removeAttribute(e.expando)}if("script"===
w&&t.text!==g.text)K(t).text=g.text,H(t);else if("object"===w)t.parentNode&&(t.outerHTML=g.outerHTML),e.support.html5Clone&&g.innerHTML&&!e.trim(t.innerHTML)&&(t.innerHTML=g.innerHTML);else if("input"===w&&Qa.test(g.type))t.defaultChecked=t.checked=g.checked,t.value!==g.value&&(t.value=g.value);else if("option"===w)t.defaultSelected=t.selected=g.defaultSelected;else if("input"===w||"textarea"===w)t.defaultValue=g.defaultValue}}if(d)if(c)for(h=h||J(a),b=b||J(k),m=0;null!=(g=h[m]);m++)O(g,b[m]);else O(a,
k);b=J(k,"script");0<b.length&&G(b,!f&&J(a,"script"));return k},buildFragment:function(a,d,c,k){for(var b,g,m,h,f,t,w=a.length,l=z(d),v=[],n=0;n<w;n++)if((g=a[n])||0===g)if("object"===e.type(g))e.merge(v,g.nodeType?[g]:g);else if(Zb.test(g)){m=m||l.appendChild(d.createElement("div"));h=(ob.exec(g)||["",""])[1].toLowerCase();t=ca[h]||ca._default;m.innerHTML=t[1]+g.replace(nb,"<$1></$2>")+t[2];for(b=t[0];b--;)m=m.lastChild;!e.support.leadingWhitespace&&Va.test(g)&&v.push(d.createTextNode(Va.exec(g)[0]));
if(!e.support.tbody)for(b=(g="table"!==h||pb.test(g)?"<table>"!==t[1]||pb.test(g)?0:m:m.firstChild)&&g.childNodes.length;b--;)e.nodeName(f=g.childNodes[b],"tbody")&&!f.childNodes.length&&g.removeChild(f);e.merge(v,m.childNodes);for(m.textContent="";m.firstChild;)m.removeChild(m.firstChild);m=l.lastChild}else v.push(d.createTextNode(g));m&&l.removeChild(m);e.support.appendChecked||e.grep(J(v,"input"),p);for(n=0;g=v[n++];)if(!k||-1===e.inArray(g,k))if(a=e.contains(g.ownerDocument,g),m=J(l.appendChild(g),
"script"),a&&G(m),c)for(b=0;g=m[b++];)qb.test(g.type||"")&&c.push(g);return l},cleanData:function(a,d){for(var b,g,c,k,h=0,f=e.expando,t=e.cache,w=e.support.deleteExpando,l=e.event.special;null!=(b=a[h]);h++)if(d||e.acceptData(b))if(k=(c=b[f])&&t[c]){if(k.events)for(g in k.events)l[g]?e.event.remove(b,g):e.removeEvent(b,g,k.handle);t[c]&&(delete t[c],w?delete b[f]:typeof b.removeAttribute!==da?b.removeAttribute(f):b[f]=null,fa.push(c))}},_evalUrl:function(a){return e.ajax({url:a,type:"GET",dataType:"script",
async:!1,global:!1,"throws":!0})}});e.fn.extend({wrapAll:function(a){if(e.isFunction(a))return this.each(function(b){e(this).wrapAll(a.call(this,b))});if(this[0]){var b=e(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return e.isFunction(a)?this.each(function(b){e(this).wrapInner(a.call(this,b))}):this.each(function(){var b=
e(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){var b=e.isFunction(a);return this.each(function(d){e(this).wrapAll(b?a.call(this,d):a)})},unwrap:function(){return this.parent().each(function(){e.nodeName(this,"body")||e(this).replaceWith(this.childNodes)}).end()}});var Da,sa,ga,Xa=/alpha\([^)]*\)/i,cc=/opacity\s*=\s*([^)]*)/,dc=/^(top|right|bottom|left)$/,ec=/^(none|table(?!-c[ea]).+)/,rb=/^margin/,Fb=new RegExp("^("+Ma+")(.*)$","i"),Ia=new RegExp("^("+Ma+")(?!px)[a-z%]+$",
"i"),fc=new RegExp("^([+-])=("+Ma+")","i"),eb={BODY:"block"},gc={position:"absolute",visibility:"hidden",display:"block"},sb={letterSpacing:0,fontWeight:400},ra=["Top","Right","Bottom","Left"],db=["Webkit","O","Moz","ms"];e.fn.extend({css:function(a,d){return e.access(this,function(a,b,d){var g,k={},m=0;if(e.isArray(b)){g=sa(a);for(d=b.length;m<d;m++)k[b[m]]=e.css(a,b[m],!1,g);return k}return d!==c?e.style(a,b,d):e.css(a,b)},a,d,1<arguments.length)},show:function(){return X(this,!0)},hide:function(){return X(this)},
toggle:function(a){return"boolean"===typeof a?a?this.show():this.hide():this.each(function(){Q(this)?e(this).show():e(this).hide()})}});e.extend({cssHooks:{opacity:{get:function(a,d){if(d){var b=ga(a,"opacity");return""===b?"1":b}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":e.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,d,k,h){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var b,
g,m,f=e.camelCase(d),t=a.style;d=e.cssProps[f]||(e.cssProps[f]=M(t,f));m=e.cssHooks[d]||e.cssHooks[f];if(k!==c){if(g=typeof k,"string"===g&&(b=fc.exec(k))&&(k=(b[1]+1)*b[2]+parseFloat(e.css(a,d)),g="number"),!(null==k||"number"===g&&isNaN(k)||("number"!==g||e.cssNumber[f]||(k+="px"),e.support.clearCloneStyle||""!==k||0!==d.indexOf("background")||(t[d]="inherit"),m&&"set"in m&&(k=m.set(a,k,h))===c)))try{t[d]=k}catch(tc){}}else return m&&"get"in m&&(b=m.get(a,!1,h))!==c?b:t[d]}},css:function(a,d,k,
h){var b,g;g=e.camelCase(d);d=e.cssProps[g]||(e.cssProps[g]=M(a.style,g));(g=e.cssHooks[d]||e.cssHooks[g])&&"get"in g&&(b=g.get(a,!0,k));b===c&&(b=ga(a,d,h));"normal"===b&&d in sb&&(b=sb[d]);return""===k||k?(a=parseFloat(b),!0===k||e.isNumeric(a)?a||0:b):b}});a.getComputedStyle?(sa=function(b){return a.getComputedStyle(b,null)},ga=function(a,d,k){var b,g=(k=k||sa(a))?k.getPropertyValue(d)||k[d]:c,m=a.style;k&&(""!==g||e.contains(a.ownerDocument,a)||(g=e.style(a,d)),Ia.test(g)&&rb.test(d)&&(a=m.width,
d=m.minWidth,b=m.maxWidth,m.minWidth=m.maxWidth=m.width=g,g=k.width,m.width=a,m.minWidth=d,m.maxWidth=b));return g}):E.documentElement.currentStyle&&(sa=function(a){return a.currentStyle},ga=function(a,d,e){var b,g,k=(e=e||sa(a))?e[d]:c,m=a.style;null==k&&m&&m[d]&&(k=m[d]);if(Ia.test(k)&&!dc.test(d)){e=m.left;if(g=(b=a.runtimeStyle)&&b.left)b.left=a.currentStyle.left;m.left="fontSize"===d?"1em":k;k=m.pixelLeft+"px";m.left=e;g&&(b.left=g)}return""===k?"auto":k});e.each(["height","width"],function(a,
d){e.cssHooks[d]={get:function(a,b,g){if(b)return 0===a.offsetWidth&&ec.test(e.css(a,"display"))?e.swap(a,gc,function(){return W(a,d,g)}):W(a,d,g)},set:function(a,b,g){var c=g&&sa(a);return ea(a,b,g?P(a,d,g,e.support.boxSizing&&"border-box"===e.css(a,"boxSizing",!1,c),c):0)}}});e.support.opacity||(e.cssHooks.opacity={get:function(a,d){return cc.test((d&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":d?"1":""},set:function(a,d){var b=a.style,g=a.currentStyle,
c=e.isNumeric(d)?"alpha(opacity="+100*d+")":"",k=g&&g.filter||b.filter||"";b.zoom=1;if((1<=d||""===d)&&""===e.trim(k.replace(Xa,""))&&b.removeAttribute&&(b.removeAttribute("filter"),""===d||g&&!g.filter))return;b.filter=Xa.test(k)?k.replace(Xa,c):k+" "+c}});e(function(){e.support.reliableMarginRight||(e.cssHooks.marginRight={get:function(a,d){if(d)return e.swap(a,{display:"inline-block"},ga,[a,"marginRight"])}});!e.support.pixelPosition&&e.fn.position&&e.each(["top","left"],function(a,d){e.cssHooks[d]=
{get:function(a,b){if(b)return b=ga(a,d),Ia.test(b)?e(a).position()[d]+"px":b}}})});e.expr&&e.expr.filters&&(e.expr.filters.hidden=function(a){return 0>=a.offsetWidth&&0>=a.offsetHeight||!e.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||e.css(a,"display"))},e.expr.filters.visible=function(a){return!e.expr.filters.hidden(a)});e.each({margin:"",padding:"",border:"Width"},function(a,d){e.cssHooks[a+d]={expand:function(b){var e=0,g={};for(b="string"===typeof b?b.split(" "):[b];4>e;e++)g[a+
ra[e]+d]=b[e]||b[e-2]||b[0];return g}};rb.test(a)||(e.cssHooks[a+d].set=ea)});var hc=/%20/g,Gb=/\[\]$/,tb=/\r?\n/g,ic=/^(?:submit|button|image|reset|file)$/i,jc=/^(?:input|select|textarea|keygen)/i;e.fn.extend({serialize:function(){return e.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=e.prop(this,"elements");return a?e.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!e(this).is(":disabled")&&jc.test(this.nodeName)&&!ic.test(a)&&(this.checked||
!Qa.test(a))}).map(function(a,d){var b=e(this).val();return null==b?null:e.isArray(b)?e.map(b,function(a){return{name:d.name,value:a.replace(tb,"\r\n")}}):{name:d.name,value:b.replace(tb,"\r\n")}}).get()}});e.param=function(a,d){var b,g=[],k=function(a,b){b=e.isFunction(b)?b():null==b?"":b;g[g.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};d===c&&(d=e.ajaxSettings&&e.ajaxSettings.traditional);if(e.isArray(a)||a.jquery&&!e.isPlainObject(a))e.each(a,function(){k(this.name,this.value)});else for(b in a)Y(b,
a[b],d,k);return g.join("&").replace(hc,"+")};e.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,d){e.fn[d]=function(a,b){return 0<arguments.length?this.on(d,null,a,b):this.trigger(d)}});e.fn.extend({hover:function(a,d){return this.mouseenter(a).mouseleave(d||a)},bind:function(a,d,e){return this.on(a,null,d,e)},unbind:function(a,
d){return this.off(a,null,d)},delegate:function(a,d,e,c){return this.on(d,a,e,c)},undelegate:function(a,d,e){return 1===arguments.length?this.off(a,"**"):this.off(d,a||"**",e)}});var ua,qa,Ya=e.now(),Za=/\?/,kc=/#.*$/,ub=/([?&])_=[^&]*/,lc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,mc=/^(?:GET|HEAD)$/,nc=/^\/\//,vb=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,wb=e.fn.load,xb={},Ra={},yb="*/".concat("*");try{qa=Fa.href}catch(b){qa=E.createElement("a"),qa.href="",qa=qa.href}ua=vb.exec(qa.toLowerCase())||[];e.fn.load=
function(a,d,k){if("string"!==typeof a&&wb)return wb.apply(this,arguments);var b,g,h,m=this,f=a.indexOf(" ");0<=f&&(b=a.slice(f,a.length),a=a.slice(0,f));e.isFunction(d)?(k=d,d=c):d&&"object"===typeof d&&(h="POST");0<m.length&&e.ajax({url:a,type:h,dataType:"html",data:d}).done(function(a){g=arguments;m.html(b?e("<div>").append(e.parseHTML(a)).find(b):a)}).complete(k&&function(a,b){m.each(k,g||[a.responseText,b,a])});return this};e.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,d){e.fn[d]=function(a){return this.on(d,a)}});e.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:qa,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ua[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":yb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",
text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":e.parseJSON,"text xml":e.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,d){return d?h(h(a,e.ajaxSettings),d):h(e.ajaxSettings,a)},ajaxPrefilter:Z(xb),ajaxTransport:Z(Ra),ajax:function(a,d){function b(a,b,d,g){var k,m,n,v;v=b;if(2!==z){z=2;t&&clearTimeout(t);l=c;f=g||"";y.readyState=0<a?4:0;g=200<=a&&300>a||304===a;if(d){n=p;for(var C=y,D,A,x,F,I=n.contents,V=n.dataTypes;"*"===V[0];)V.shift(),
A===c&&(A=n.mimeType||C.getResponseHeader("Content-Type"));if(A)for(F in I)if(I[F]&&I[F].test(A)){V.unshift(F);break}if(V[0]in d)x=V[0];else{for(F in d){if(!V[0]||n.converters[F+" "+V[0]]){x=F;break}D||(D=F)}x=x||D}x?(x!==V[0]&&V.unshift(x),n=d[x]):n=void 0}a:{d=p;D=n;A=y;x=g;var K,L,N,C={},I=d.dataTypes.slice();if(I[1])for(L in d.converters)C[L.toLowerCase()]=d.converters[L];for(F=I.shift();F;)if(d.responseFields[F]&&(A[d.responseFields[F]]=D),!N&&x&&d.dataFilter&&(D=d.dataFilter(D,d.dataType)),
N=F,F=I.shift())if("*"===F)F=N;else if("*"!==N&&N!==F){L=C[N+" "+F]||C["* "+F];if(!L)for(K in C)if(n=K.split(" "),n[1]===F&&(L=C[N+" "+n[0]]||C["* "+n[0]])){!0===L?L=C[K]:!0!==C[K]&&(F=n[0],I.unshift(n[1]));break}if(!0!==L)if(L&&d["throws"])D=L(D);else try{D=L(D)}catch(Qb){n={state:"parsererror",error:L?Qb:"No conversion from "+N+" to "+F};break a}}n={state:"success",data:D}}if(g)p.ifModified&&((v=y.getResponseHeader("Last-Modified"))&&(e.lastModified[h]=v),(v=y.getResponseHeader("etag"))&&(e.etag[h]=
v)),204===a||"HEAD"===p.type?v="nocontent":304===a?v="notmodified":(v=n.state,k=n.data,m=n.error,g=!m);else if(m=v,a||!v)v="error",0>a&&(a=0);y.status=a;y.statusText=(b||v)+"";g?U.resolveWith(q,[k,v,y]):U.rejectWith(q,[y,v,m]);y.statusCode(u);u=c;w&&B.trigger(g?"ajaxSuccess":"ajaxError",[y,p,g?k:m]);r.fireWith(q,[y,v]);w&&(B.trigger("ajaxComplete",[y,p]),--e.active||e.event.trigger("ajaxStop"))}}"object"===typeof a&&(d=a,a=c);d=d||{};var g,k,h,f,t,w,l,n,p=e.ajaxSetup({},d),q=p.context||p,B=p.context&&
(q.nodeType||q.jquery)?e(q):e.event,U=e.Deferred(),r=e.Callbacks("once memory"),u=p.statusCode||{},C={},D={},z=0,A="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(2===z){if(!n)for(n={};b=lc.exec(f);)n[b[1].toLowerCase()]=b[2];b=n[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===z?f:null},setRequestHeader:function(a,b){var d=a.toLowerCase();z||(a=D[d]=D[d]||a,C[a]=b);return this},overrideMimeType:function(a){z||(p.mimeType=a);return this},statusCode:function(a){var b;
if(a)if(2>z)for(b in a)u[b]=[u[b],a[b]];else y.always(a[y.status]);return this},abort:function(a){a=a||A;l&&l.abort(a);b(0,a);return this}};U.promise(y).complete=r.add;y.success=y.done;y.error=y.fail;p.url=((a||p.url||qa)+"").replace(kc,"").replace(nc,ua[1]+"//");p.type=d.method||d.type||p.method||p.type;p.dataTypes=e.trim(p.dataType||"*").toLowerCase().match(la)||[""];null==p.crossDomain&&(g=vb.exec(p.url.toLowerCase()),p.crossDomain=!(!g||g[1]===ua[1]&&g[2]===ua[2]&&(g[3]||("http:"===g[1]?"80":
"443"))===(ua[3]||("http:"===ua[1]?"80":"443"))));p.data&&p.processData&&"string"!==typeof p.data&&(p.data=e.param(p.data,p.traditional));aa(xb,p,d,y);if(2===z)return y;(w=p.global)&&0===e.active++&&e.event.trigger("ajaxStart");p.type=p.type.toUpperCase();p.hasContent=!mc.test(p.type);h=p.url;p.hasContent||(p.data&&(h=p.url+=(Za.test(h)?"&":"?")+p.data,delete p.data),!1===p.cache&&(p.url=ub.test(h)?h.replace(ub,"$1_="+Ya++):h+(Za.test(h)?"&":"?")+"_="+Ya++));p.ifModified&&(e.lastModified[h]&&y.setRequestHeader("If-Modified-Since",
e.lastModified[h]),e.etag[h]&&y.setRequestHeader("If-None-Match",e.etag[h]));(p.data&&p.hasContent&&!1!==p.contentType||d.contentType)&&y.setRequestHeader("Content-Type",p.contentType);y.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+yb+"; q=0.01":""):p.accepts["*"]);for(k in p.headers)y.setRequestHeader(k,p.headers[k]);if(p.beforeSend&&(!1===p.beforeSend.call(q,y,p)||2===z))return y.abort();A="abort";for(k in{success:1,error:1,
complete:1})y[k](p[k]);if(l=aa(Ra,p,d,y)){y.readyState=1;w&&B.trigger("ajaxSend",[y,p]);p.async&&0<p.timeout&&(t=setTimeout(function(){y.abort("timeout")},p.timeout));try{z=1,l.send(C,b)}catch(hb){if(2>z)b(-1,hb);else throw hb;}}else b(-1,"No Transport");return y},getJSON:function(a,d,c){return e.get(a,d,c,"json")},getScript:function(a,d){return e.get(a,c,d,"script")}});e.each(["get","post"],function(a,d){e[d]=function(a,b,g,k){e.isFunction(b)&&(k=k||g,g=b,b=c);return e.ajax({url:a,type:d,dataType:k,
data:b,success:g})}});e.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){e.globalEval(a);return a}}});e.ajaxPrefilter("script",function(a){a.cache===c&&(a.cache=!1);a.crossDomain&&(a.type="GET",a.global=!1)});e.ajaxTransport("script",function(a){if(a.crossDomain){var b,d=E.head||e("head")[0]||E.documentElement;return{send:function(e,g){b=E.createElement("script");
b.async=!0;a.scriptCharset&&(b.charset=a.scriptCharset);b.src=a.url;b.onload=b.onreadystatechange=function(a,d){if(d||!b.readyState||/loaded|complete/.test(b.readyState))b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,d||g(200,"success")};d.insertBefore(b,d.firstChild)},abort:function(){if(b)b.onload(c,!0)}}}});var zb=[],$a=/(=)\?(?=&|$)|\?\?/;e.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=zb.pop()||e.expando+"_"+Ya++;this[a]=!0;return a}});e.ajaxPrefilter("json jsonp",
function(b,d,k){var g,h,f,m=!1!==b.jsonp&&($a.test(b.url)?"url":"string"===typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&$a.test(b.data)&&"data");if(m||"jsonp"===b.dataTypes[0])return g=b.jsonpCallback=e.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,m?b[m]=b[m].replace($a,"$1"+g):!1!==b.jsonp&&(b.url+=(Za.test(b.url)?"&":"?")+b.jsonp+"="+g),b.converters["script json"]=function(){f||e.error(g+" was not called");return f[0]},b.dataTypes[0]="json",
h=a[g],a[g]=function(){f=arguments},k.always(function(){a[g]=h;b[g]&&(b.jsonpCallback=d.jsonpCallback,zb.push(g));f&&e.isFunction(h)&&h(f[0]);f=h=c}),"script"});var Ca,Ha,oc=0,ab=a.ActiveXObject&&function(){for(var a in Ca)Ca[a](c,!0)};e.ajaxSettings.xhr=a.ActiveXObject?function(){var b;if(!(b=!this.isLocal&&w()))a:{try{b=new a.ActiveXObject("Microsoft.XMLHTTP");break a}catch(g){}b=void 0}return b}:w;Ha=e.ajaxSettings.xhr();e.support.cors=!!Ha&&"withCredentials"in Ha;(Ha=e.support.ajax=!!Ha)&&e.ajaxTransport(function(b){if(!b.crossDomain||
e.support.cors){var d;return{send:function(g,k){var h,f,m=b.xhr();b.username?m.open(b.type,b.url,b.async,b.username,b.password):m.open(b.type,b.url,b.async);if(b.xhrFields)for(f in b.xhrFields)m[f]=b.xhrFields[f];b.mimeType&&m.overrideMimeType&&m.overrideMimeType(b.mimeType);b.crossDomain||g["X-Requested-With"]||(g["X-Requested-With"]="XMLHttpRequest");try{for(f in g)m.setRequestHeader(f,g[f])}catch(rc){}m.send(b.hasContent&&b.data||null);d=function(a,g){var f,t,w,l;try{if(d&&(g||4===m.readyState))if(d=
c,h&&(m.onreadystatechange=e.noop,ab&&delete Ca[h]),g)4!==m.readyState&&m.abort();else{l={};f=m.status;t=m.getAllResponseHeaders();"string"===typeof m.responseText&&(l.text=m.responseText);try{w=m.statusText}catch(Na){w=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=l.text?200:404}}catch(Na){g||k(-1,Na)}l&&k(f,w,l,t)};b.async?4===m.readyState?setTimeout(d):(h=++oc,ab&&(Ca||(Ca={},e(a).unload(ab)),Ca[h]=d),m.onreadystatechange=d):d()},abort:function(){d&&d(c,!0)}}}});var va,Pa,pc=/^(?:toggle|show|hide)$/,
Ab=new RegExp("^(?:([+-])=|)("+Ma+")([a-z%]*)$","i"),qc=/queueHooks$/,Ja=[function(a,d,c){var b,g,h,f,m,t=this,w={},l=a.style,n=a.nodeType&&Q(a),p=e._data(a,"fxshow");c.queue||(f=e._queueHooks(a,"fx"),null==f.unqueued&&(f.unqueued=0,m=f.empty.fire,f.empty.fire=function(){f.unqueued||m()}),f.unqueued++,t.always(function(){t.always(function(){f.unqueued--;e.queue(a,"fx").length||f.empty.fire()})}));1===a.nodeType&&("height"in d||"width"in d)&&(c.overflow=[l.overflow,l.overflowX,l.overflowY],"inline"===
e.css(a,"display")&&"none"===e.css(a,"float")&&(e.support.inlineBlockNeedsLayout&&"inline"!==R(a.nodeName)?l.zoom=1:l.display="inline-block"));c.overflow&&(l.overflow="hidden",e.support.shrinkWrapBlocks||t.always(function(){l.overflow=c.overflow[0];l.overflowX=c.overflow[1];l.overflowY=c.overflow[2]}));for(b in d)g=d[b],pc.exec(g)&&(delete d[b],h=h||"toggle"===g,g!==(n?"hide":"show")&&(w[b]=p&&p[b]||e.style(a,b)));if(!e.isEmptyObject(w))for(b in p?"hidden"in p&&(n=p.hidden):p=e._data(a,"fxshow",{}),
h&&(p.hidden=!n),n?e(a).show():t.done(function(){e(a).hide()}),t.done(function(){var b;e._removeData(a,"fxshow");for(b in w)e.style(a,b,w[b])}),w)d=k(n?p[b]:0,b,t),b in p||(p[b]=d.start,n&&(d.end=d.start,d.start="width"===b||"height"===b?1:0))}],Ea={"*":[function(a,d){var b=this.createTween(a,d),g=b.cur(),c=Ab.exec(d),k=c&&c[3]||(e.cssNumber[a]?"":"px"),h=(e.cssNumber[a]||"px"!==k&&+g)&&Ab.exec(e.css(b.elem,a)),f=1,t=20;if(h&&h[3]!==k){k=k||h[3];c=c||[];h=+g||1;do f=f||".5",h/=f,e.style(b.elem,a,
h+k);while(f!==(f=b.cur()/g)&&1!==f&&--t)}c&&(h=b.start=+h||+g||0,b.unit=k,b.end=c[1]?h+(c[1]+1)*c[2]:+c[2]);return b}]};e.Animation=e.extend(t,{tweener:function(a,d){e.isFunction(a)?(d=a,a=["*"]):a=a.split(" ");for(var b,g=0,c=a.length;g<c;g++)b=a[g],Ea[b]=Ea[b]||[],Ea[b].unshift(d)},prefilter:function(a,d){d?Ja.unshift(a):Ja.push(a)}});e.Tween=D;D.prototype={constructor:D,init:function(a,d,c,k,h,f){this.elem=a;this.prop=c;this.easing=h||"swing";this.options=d;this.start=this.now=this.cur();this.end=
k;this.unit=f||(e.cssNumber[c]?"":"px")},cur:function(){var a=D.propHooks[this.prop];return a&&a.get?a.get(this):D.propHooks._default.get(this)},run:function(a){var b,d=D.propHooks[this.prop];this.pos=this.options.duration?b=e.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):b=a;this.now=(this.end-this.start)*b+this.start;this.options.step&&this.options.step.call(this.elem,this.now,this);d&&d.set?d.set(this):D.propHooks._default.set(this);return this}};D.prototype.init.prototype=
D.prototype;D.propHooks={_default:{get:function(a){return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(a=e.css(a.elem,a.prop,""))&&"auto"!==a?a:0:a.elem[a.prop]},set:function(a){if(e.fx.step[a.prop])e.fx.step[a.prop](a);else a.elem.style&&(null!=a.elem.style[e.cssProps[a.prop]]||e.cssHooks[a.prop])?e.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}};D.propHooks.scrollTop=D.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}};
e.each(["toggle","show","hide"],function(a,d){var b=e.fn[d];e.fn[d]=function(a,e,g){return null==a||"boolean"===typeof a?b.apply(this,arguments):this.animate(V(d,!0),a,e,g)}});e.fn.extend({fadeTo:function(a,d,e,c){return this.filter(Q).css("opacity",0).show().end().animate({opacity:d},a,e,c)},animate:function(a,d,c,k){var b=e.isEmptyObject(a),g=e.speed(d,c,k);d=function(){var d=t(this,e.extend({},a),g);(b||e._data(this,"finish"))&&d.stop(!0)};d.finish=d;return b||!1===g.queue?this.each(d):this.queue(g.queue,
d)},stop:function(a,d,k){var b=function(a){var b=a.stop;delete a.stop;b(k)};"string"!==typeof a&&(k=d,d=a,a=c);d&&!1!==a&&this.queue(a||"fx",[]);return this.each(function(){var d=!0,g=null!=a&&a+"queueHooks",c=e.timers,h=e._data(this);if(g)h[g]&&h[g].stop&&b(h[g]);else for(g in h)h[g]&&h[g].stop&&qc.test(g)&&b(h[g]);for(g=c.length;g--;)c[g].elem!==this||null!=a&&c[g].queue!==a||(c[g].anim.stop(k),d=!1,c.splice(g,1));!d&&k||e.dequeue(this,a)})},finish:function(a){!1!==a&&(a=a||"fx");return this.each(function(){var b,
d=e._data(this),c=d[a+"queue"];b=d[a+"queueHooks"];var k=e.timers,h=c?c.length:0;d.finish=!0;e.queue(this,a,[]);b&&b.stop&&b.stop.call(this,!0);for(b=k.length;b--;)k[b].elem===this&&k[b].queue===a&&(k[b].anim.stop(!0),k.splice(b,1));for(b=0;b<h;b++)c[b]&&c[b].finish&&c[b].finish.call(this);delete d.finish})}});e.each({slideDown:V("show"),slideUp:V("hide"),slideToggle:V("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,d){e.fn[a]=function(a,b,e){return this.animate(d,
a,b,e)}});e.speed=function(a,d,c){var b=a&&"object"===typeof a?e.extend({},a):{complete:c||!c&&d||e.isFunction(a)&&a,duration:a,easing:c&&d||d&&!e.isFunction(d)&&d};b.duration=e.fx.off?0:"number"===typeof b.duration?b.duration:b.duration in e.fx.speeds?e.fx.speeds[b.duration]:e.fx.speeds._default;if(null==b.queue||!0===b.queue)b.queue="fx";b.old=b.complete;b.complete=function(){e.isFunction(b.old)&&b.old.call(this);b.queue&&e.dequeue(this,b.queue)};return b};e.easing={linear:function(a){return a},
swing:function(a){return.5-Math.cos(a*Math.PI)/2}};e.timers=[];e.fx=D.prototype.init;e.fx.tick=function(){var a,d=e.timers,k=0;for(va=e.now();k<d.length;k++)a=d[k],a()||d[k]!==a||d.splice(k--,1);d.length||e.fx.stop();va=c};e.fx.timer=function(a){a()&&e.timers.push(a)&&e.fx.start()};e.fx.interval=13;e.fx.start=function(){Pa||(Pa=setInterval(e.fx.tick,e.fx.interval))};e.fx.stop=function(){clearInterval(Pa);Pa=null};e.fx.speeds={slow:600,fast:200,_default:400};e.fx.step={};e.expr&&e.expr.filters&&(e.expr.filters.animated=
function(a){return e.grep(e.timers,function(b){return a===b.elem}).length});e.fn.offset=function(a){if(arguments.length)return a===c?this:this.each(function(b){e.offset.setOffset(this,a,b)});var b,d,k={top:0,left:0},h=(d=this[0])&&d.ownerDocument;if(h){b=h.documentElement;if(!e.contains(b,d))return k;typeof d.getBoundingClientRect!==da&&(k=d.getBoundingClientRect());d=ta(h);return{top:k.top+(d.pageYOffset||b.scrollTop)-(b.clientTop||0),left:k.left+(d.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}}};
e.offset={setOffset:function(a,d,c){var b=e.css(a,"position");"static"===b&&(a.style.position="relative");var g=e(a),k=g.offset(),h=e.css(a,"top"),f=e.css(a,"left"),m={};("absolute"===b||"fixed"===b)&&-1<e.inArray("auto",[h,f])?(f=g.position(),b=f.top,f=f.left):(b=parseFloat(h)||0,f=parseFloat(f)||0);e.isFunction(d)&&(d=d.call(a,c,k));null!=d.top&&(m.top=d.top-k.top+b);null!=d.left&&(m.left=d.left-k.left+f);"using"in d?d.using.call(a,m):g.css(m)}};e.fn.extend({position:function(){if(this[0]){var a,
d,c={top:0,left:0},k=this[0];"fixed"===e.css(k,"position")?d=k.getBoundingClientRect():(a=this.offsetParent(),d=this.offset(),e.nodeName(a[0],"html")||(c=a.offset()),c.top+=e.css(a[0],"borderTopWidth",!0),c.left+=e.css(a[0],"borderLeftWidth",!0));return{top:d.top-c.top-e.css(k,"marginTop",!0),left:d.left-c.left-e.css(k,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||ya;a&&!e.nodeName(a,"html")&&"static"===e.css(a,"position");)a=a.offsetParent;return a||
ya})}});e.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,d){var b=/Y/.test(d);e.fn[a]=function(g){return e.access(this,function(a,g,k){var h=ta(a);if(k===c)return h?d in h?h[d]:h.document.documentElement[g]:a[g];h?h.scrollTo(b?e(h).scrollLeft():k,b?k:e(h).scrollTop()):a[g]=k},a,g,arguments.length,null)}});e.each({Height:"height",Width:"width"},function(a,d){e.each({padding:"inner"+a,content:d,"":"outer"+a},function(b,g){e.fn[g]=function(g,k){var h=arguments.length&&(b||"boolean"!==
typeof g),f=b||(!0===g||!0===k?"margin":"border");return e.access(this,function(b,d,g){return e.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(d=b.documentElement,Math.max(b.body["scroll"+a],d["scroll"+a],b.body["offset"+a],d["offset"+a],d["client"+a])):g===c?e.css(b,d,f):e.style(b,d,g,f)},d,h?g:c,h,null)}})});e.fn.size=function(){return this.length};e.fn.andSelf=e.fn.addBack;"object"===typeof module&&module&&"object"===typeof module.exports?module.exports=e:(a.jQuery=a.$=e,"function"===
typeof define&&define.amd&&define("jquery",[],function(){return e}))})(window);jQuery.browser={};(function(){jQuery.browser.msie=!1;jQuery.browser.version=0;navigator.userAgent.match(/MSIE ([0-9]+)\./)&&(jQuery.browser.msie=!0,jQuery.browser.version=RegExp.$1)})();
(function(a){function c(c,f){c.data("AutoResizer")&&c.data("AutoResizer").destroy();c.data("AutoResizer",this);var n;this.$el=c;this.config=f=a.extend({},l,f);n=(this.isTextArea=this.$el.is("textarea"))?c.height():c.width();"original"===f.maxSize&&(f.maxSize=n);"original"===f.minSize&&(f.minSize=n);this.isTextArea&&c.css({resize:"none"});f.animate&&(f.animate.complete=a.proxy(this.afterResize,this,f.animate.complete));this.bind();c.is(":hidden")||this.check(!0)}var f="ar"+ +new Date,l={onResize:a.noop,
onBeforeResize:a.noop,onAfterResize:a.noop,animate:{duration:200,complete:a.noop},extraSpace:50,minSize:"original",maxSize:500,delay:100},q="lineHeight textDecoration letterSpacing fontSize fontFamily fontStyle fontWeight textTransform textAlign direction wordSpacing fontSizeAdjust paddingTop paddingLeft paddingBottom paddingRight width".split(" "),r=["textarea:not(textarea."+f+")","input:not(input[type]),input[type=text],input[type=password],input[type=email],input[type=url]"].join();!function(){var c;
this.unbind=function(){this.$el.unbind(".autoResize")};this.bind=function(){var c=a.proxy(function(){this.check()},this);this.unbind();this.$el.bind("keyup.autoResize",c).bind("change.autoResize",c).bind("paste.autoResize",c)};this.getClone=function(){var l,r;this.$clone||(l=this.$el,this.$clone=r=a(this.isTextArea?"<textarea/>":"<span/>"),a.each(q,function(a,c){r.css(c,l.css(c))}),r.addClass(f).attr("tabIndex",-1).css("overflow","hidden"),this.isTextArea?r.height(0):r.width("auto").css({whiteSpace:"nowrap"}),
c||(c=a('<div class="autoresize-clones"/>').appendTo("body").css({position:"absolute",top:-9999,left:-9999,width:0,height:0,padding:0,overflow:"hidden"})),c.append(r));return this.$clone};this.afterResize=function(a){var c=this.$el,f=this.config;this.isTextArea&&(c.height()===f.maxSize?c.css("overflowY","auto").scrollTop(1E4):c.css("overflowY","hidden"));f.onAfterResize.call(this.$el);a&&a.apply(this,arguments)};this.check=function(a){var c=this.config,f=this.getClone(),l=this.$el,n=l.val()||"",q=
l.width(),r=this.isTextArea?l.height():q,u,n=n.length?n:" ";if(n!==this.prevValue||this.prevWidth!==q)this.isTextArea?(q!==this.prevWidth&&f.width(q),f.val(n).scrollTop(0).scrollTop(1E4),f=f.scrollTop()+c.extraSpace):(f.text(n),f=f.width()+c.extraSpace),f=Math.min(Math.max(f,c.minSize),c.maxSize),r!==f&&(u={},u[this.isTextArea?"height":"width"]=f),this.prevValue=n,this.prevWidth=q,u&&(c.onBeforeResize.call(l),c.onResize.call(l),c.animate&&!a?l.stop(!0,!0).animate(u,c.animate):(l.css(u),this.afterResize()))};
this.destroy=function(){this.$el.removeData("AutoResizer");this.unbind();this.$clone.remove();delete this.$el;delete this.$clone}}.call(c.prototype);a.fn.autoResize=function(f){this.filter(r).each(function(){new c(a(this),f)});return this}})(jQuery);
(function(a){a(jQuery)})(function(a){function c(c){var l=c||window.event,q=r.call(arguments,1),z,A=0,x=0,H,G=0,O=0;c=a.event.fix(l);c.type="mousewheel";"detail"in l&&(x=-1*l.detail);"wheelDelta"in l&&(x=l.wheelDelta);"wheelDeltaY"in l&&(x=l.wheelDeltaY);"wheelDeltaX"in l&&(A=-1*l.wheelDeltaX);"axis"in l&&l.axis===l.HORIZONTAL_AXIS&&(A=-1*x,x=0);z=0===x?A:x;"deltaY"in l&&(z=x=-1*l.deltaY);"deltaX"in l&&(A=l.deltaX,0===x&&(z=-1*A));if(0!==x||0!==A){1===l.deltaMode?(H=a.data(this,"mousewheel-line-height"),
z*=H,x*=H,A*=H):2===l.deltaMode&&(H=a.data(this,"mousewheel-page-height"),z*=H,x*=H,A*=H);H=Math.max(Math.abs(x),Math.abs(A));if(!n||H<n)n=H,y.settings.adjustOldDeltas&&"mousewheel"===l.type&&0===H%120&&(n/=40);y.settings.adjustOldDeltas&&"mousewheel"===l.type&&0===H%120&&(z/=40,A/=40,x/=40);z=Math[1<=z?"floor":"ceil"](z/n);A=Math[1<=A?"floor":"ceil"](A/n);x=Math[1<=x?"floor":"ceil"](x/n);y.settings.normalizeOffset&&this.getBoundingClientRect&&(l=this.getBoundingClientRect(),G=c.clientX-l.left,O=
c.clientY-l.top);c.deltaX=A;c.deltaY=x;c.deltaFactor=n;c.offsetX=G;c.offsetY=O;c.deltaMode=0;q.unshift(c,z,A,x);u&&clearTimeout(u);u=setTimeout(f,200);return(a.event.dispatch||a.event.handle).apply(this,q)}}function f(){n=null}var l=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],q="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r=Array.prototype.slice,u,n;if(a.event.fixHooks)for(var x=l.length;x;)a.event.fixHooks[l[--x]]=
a.event.mouseHooks;var y=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var f=q.length;f;)this.addEventListener(q[--f],c,!1);else this.onmousewheel=c;a.data(this,"mousewheel-line-height",y.getLineHeight(this));a.data(this,"mousewheel-page-height",y.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var f=q.length;f;)this.removeEventListener(q[--f],c,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height");a.removeData(this,
"mousewheel-page-height")},getLineHeight:function(c){c=a(c);var f=c["offsetParent"in a.fn?"offsetParent":"parent"]();f.length||(f=a("body"));return parseInt(f.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(c){return a(c).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});"use strict";
(function(a){a(jQuery)})(function(a){var c={wheelSpeed:-1!==navigator.platform.toUpperCase().indexOf("WIN")?15:1,wheelPropagation:!1,minScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!1,topMargin:0};a.fn.perfectScrollbar=function(f,l){return this.each(function(){var q=a.extend(!0,{},c),r=a(this);"object"===typeof f?a.extend(!0,q,f):l=f;if("update"===l)return r.data("perfect-scrollbar-update")&&r.data("perfect-scrollbar-update")(),r;if("scroll"===l)return r.data("perfect-scrollbar-scroll")&&
r.data("perfect-scrollbar-scroll")(),r;if("destroy"===l)return r.data("perfect-scrollbar-destroy")&&r.data("perfect-scrollbar-destroy")(),r;if(r.data("perfect-scrollbar"))return r.data("perfect-scrollbar");r.addClass("ps-container");var u=a("<div class='ps-scrollbar-x-rail'></div>").appendTo(r),n=a("<div class='ps-scrollbar-y-rail'></div>").appendTo(r),x=a("<div class='ps-scrollbar-x'></div>").appendTo(u),y=a("<div class='ps-scrollbar-y'></div>").appendTo(n),A,B,C,z,F,K,H,G,O=parseInt(u.css("bottom"),
10),J,p,M=parseInt(n.css("right"),10),Q=r.find(".overview"),X=a("#messages-div"),ea,P,W,R,S,Y=function(){var a=parseInt(p*(K-z)/(z-J),10);u.css({bottom:O-a});r.bottomPositionCSS=parseInt(p*(K-z)/(z-J),10);k()},Z=function(){return parseInt(Q.css("bottom"))};r.bottomPositionCSS=Z();var aa=function(){var a=parseInt(G*(F-C)/(C-H),10);r.scrollLeft(a);n.css({right:M-a})},h=function(a){q.minScrollbarLength&&(a=Math.max(a,q.minScrollbarLength));return a},w=function(){ea=a("#jivosite-adword");P=a("#input-div");
0!==S?(ea.find(".messages-div-blurred").css({bottom:"auto",top:parseInt(Q.css("top"))}),P.find(".messages-div-blurred").css({bottom:"auto",top:parseInt(Q.css("top"))-X.height()})):(ea.find(".messages-div-blurred").css({bottom:ea.height()+Z()-X.height(),top:"auto"}),P.find(".messages-div-blurred").css({bottom:P.innerHeight()+Z(),top:"auto"}))},d=function(a){S=a;R=-1*(W+S);0!==S?Q.css({bottom:"auto",top:R}):(Q.css({bottom:a,top:"auto"}),updateBlur&&updateBlur())},k=function(){W=K-z+q.topMargin;r.bottomPositionCSS<
W?0>=r.bottomPositionCSS?(d(0),r.bottomPositionCSS=0):d(-1*r.bottomPositionCSS):(d(-1*W),r.bottomPositionCSS=W);w()},t=function(a){u.toggle(A);n.toggle(B);u.css({left:r.scrollLeft(),bottom:O-r.scrollTop(),width:C});n.css({top:r.scrollTop(),right:M-r.scrollLeft(),height:z});x.css({left:G,width:H});y.css({bottom:a?0:p,height:J})},U=function(a){C=r.width();z=r.height()-q.topMargin;F=Q.width();K=Q.height()-q.topMargin;C<F?(A=!0,H=h(parseInt(C*C/F,10)),G=parseInt(r.scrollLeft()*(C-H)/(F-C),10)):(A=!1,
G=H=0,r.scrollLeft(0));z<K&&!a?(B=!0,J=h(parseInt(z*z/K,10)),k(),p=parseInt(r.bottomPositionCSS*(z-J)/(K-z),10)):(B=!1,p=J=0,d(0),w());p>=z-J&&(p=z-J);G>=C-H&&(G=C-H);t(a)},D=function(){var d,c;x.bind("mousedown.perfect-scrollbar",function(a){c=a.pageX;d=x.position().left;u.addClass("in-scrolling");a.stopPropagation();a.preventDefault()});a(document).bind("mousemove.perfect-scrollbar",function(a){if(u.hasClass("in-scrolling")){aa();var k=d+(a.pageX-c),h=C-H;G=0>k?0:k>h?h:k;u.css({left:r.scrollLeft()});
x.css({left:G});a.stopPropagation();a.preventDefault()}});a(document).bind("mouseup.perfect-scrollbar",function(a){u.hasClass("in-scrolling")&&u.removeClass("in-scrolling")});d=c=null},V=function(){var d;y.bind("mousedown.perfect-scrollbar",function(a){d=a.pageY;parseInt(y.css("bottom"));n.addClass("in-scrolling");a.stopPropagation();a.preventDefault()});a(document).bind("mousemove.perfect-scrollbar",function(a){if(n.hasClass("in-scrolling")){Y();var c=parseInt(y.css("bottom"))-(a.pageY-d),k=z-J;
p=0>c?0:c>k?k:c;n.css({top:r.scrollTop()});y.css({bottom:p});d=a.pageY;a.stopPropagation();a.preventDefault()}});a(document).bind("mouseup.perfect-scrollbar",function(){n.hasClass("in-scrolling")&&n.removeClass("in-scrolling")});d=null},ta=function(){var a=!1;try{var d="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],c;if(window.top&&window.top.addEventListener&&devicejs.safari())for(c=d.length;c--;)window.top.addEventListener(d[c],function(){})}catch(fa){}r.bind("mousewheel.perfect-scrollbar",
function(d,c,k,h){q.useBothWheelAxes?B&&!A?r.bottomPositionCSS=h?r.bottomPositionCSS+h*q.wheelSpeed:r.bottomPositionCSS-k*q.wheelSpeed:A&&!B&&(k?r.scrollLeft(r.scrollLeft()+k*q.wheelSpeed):r.scrollLeft(r.scrollLeft()-h*q.wheelSpeed)):(r.bottomPositionCSS+=h*q.wheelSpeed,r.scrollLeft(r.scrollLeft()+k*q.wheelSpeed));U();c=r.bottomPositionCSS;0===c&&0<h&&0===k||c>=K-z&&0>h&&0===k?a=!q.wheelPropagation:(c=r.scrollLeft(),a=0===c&&0>k&&0===h||c>=F-C&&0<k&&0===h?!q.wheelPropagation:!0);a&&d.preventDefault()});
r.bind("MozMousePixelScroll.perfect-scrollbar",function(d){a&&d.preventDefault()})},T=function(){var d=!1;r.bind("mouseenter.perfect-scrollbar",function(a){d=!0});r.bind("mouseleave.perfect-scrollbar",function(a){d=!1});var c=!1;a(document).bind("keydown.perfect-scrollbar",function(a){if(d){var k=0,h=0;switch(a.which){case 37:k=-3;break;case 38:h=3;break;case 39:k=3;break;case 40:h=-3;break;default:return}r.bottomPositionCSS+=h*q.wheelSpeed;r.scrollLeft(r.scrollLeft()+k*q.wheelSpeed);U();var f=r.bottomPositionCSS;
0===f&&0<h&&0===k||f>=K-z&&0>h&&0===k?c=!1:(f=r.scrollLeft(),c=0===f&&0>k&&0===h||f>=F-C&&0<k&&0===h?!1:!0);c&&a.preventDefault()}})},na=function(){var a=function(a){a.stopPropagation()};y.bind("click.perfect-scrollbar",a);n.bind("click.perfect-scrollbar",function(a){var d=parseInt(J/2,10);a=(a.pageY-n.offset().top-d)/(z-J);0>a?a=0:1<a&&(a=1);r.bottomPositionCSS=(K-z)*a;U()});x.bind("click.perfect-scrollbar",a);u.bind("click.perfect-scrollbar",function(a){var d=parseInt(H/2,10);a=(a.pageX-u.offset().left-
d)/(C-H);0>a?a=0:1<a&&(a=1);r.scrollLeft((F-C)*a);U()})},da=function(){var d={},c=0,k,h,f=null,t=!1,l=!1;a(window).bind("touchstart.perfect-scrollbar",function(a){t=!0});a(window).bind("touchend.perfect-scrollbar",function(a){t=!1});r.bind("touchstart.perfect-scrollbar",function(a){var k=a.originalEvent.targetTouches[0];d.pageX=k.pageX;d.pageY=k.pageY;c=(new Date).getTime();null!==f&&clearInterval(f);a.stopPropagation()});r.bind("touchmove.perfect-scrollbar",function(a){if(!t&&1===a.originalEvent.targetTouches.length){var f=
a.originalEvent.targetTouches[0];l=!0;var w={};w.pageX=f.pageX;w.pageY=f.pageY;var f=w.pageX-d.pageX,p=w.pageY-d.pageY;r.bottomPositionCSS+=p;r.scrollLeft(r.scrollLeft()-f);U();d=w;w=(new Date).getTime();k=f/(w-c);h=p/(w-c);c=w;"fixed"===document.documentElement.style.position&&a.preventDefault()}});r.bind("touchend.perfect-scrollbar",function(a){clearInterval(f);l&&(l=!1,f=setInterval(function(){if(.01>Math.abs(k)&&.01>Math.abs(h))clearInterval(f);else{var a=30*k;r.bottomPositionCSS+=30*h;r.scrollLeft(r.scrollLeft()-
a);U();k*=.8;h*=.8}},10))})},Fa=function(){r.unbind(".perfect-scrollbar");a(window).unbind(".perfect-scrollbar");a(document).unbind(".perfect-scrollbar");r.data("perfect-scrollbar",null);r.data("perfect-scrollbar-update",null);r.data("perfect-scrollbar-scroll",null);r.data("perfect-scrollbar-destroy",null);x.remove();y.remove();u.remove();n.remove();x=y=C=z=F=K=H=G=O=J=p=M=null},E=function(d){r.addClass("ie").addClass("ie"+d);var c=function(){t=function(){x.css({left:G+r.scrollLeft(),bottom:O,width:H});
y.css({bottom:p+r.bottomPositionCSS,right:M,height:J});x.hide().show();y.hide().show()};Y=function(){parseInt(p*K/z,10);r.bottomPositionCSS=parseInt(p*K/z,10);x.css({bottom:O});x.hide().show()};aa=function(){var a=parseInt(G*F/C,10);r.scrollLeft(a);y.hide().show()}};6===d&&(function(){var d=function(){a(this).addClass("hover")},c=function(){a(this).removeClass("hover")};r.bind("mouseenter.perfect-scrollbar",d).bind("mouseleave.perfect-scrollbar",c);u.bind("mouseenter.perfect-scrollbar",d).bind("mouseleave.perfect-scrollbar",
c);n.bind("mouseenter.perfect-scrollbar",d).bind("mouseleave.perfect-scrollbar",c);x.bind("mouseenter.perfect-scrollbar",d).bind("mouseleave.perfect-scrollbar",c);y.bind("mouseenter.perfect-scrollbar",d).bind("mouseleave.perfect-scrollbar",c)}(),c())},ya="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch;(function(){var a=navigator.userAgent.toLowerCase().match(/(msie) ([\w.]+)/);a&&"msie"===a[1]&&E(parseInt(a[2],10));U();D();V();na();ya&&da();r.mousewheel&&ta();
q.useKeyboard&&T();r.data("perfect-scrollbar",r);r.data("perfect-scrollbar-update",U);r.data("perfect-scrollbar-scroll",function(){p=S=0;r.bottomPositionCSS=0;U(!0)});r.data("perfect-scrollbar-destroy",Fa)})();return r})}});
(function(a){function c(c,l){function f(a){x||(x=!0,u.start&&u.start(a,n))}function r(a,c){x&&(clearTimeout(y),y=setTimeout(function(){x=!1;u.stop&&u.stop(a,n)},0<=c?c:u.delay))}var u=a.extend({start:null,stop:null,delay:400},l),n=a(c),x=!1,y;n.keypress(f);n.keydown(function(a){8!==a.keyCode&&46!==a.keyCode||f(a)});n.keyup(r);n.blur(function(a){r(a,0)})}a.fn.typing=function(a){return this.each(function(f,q){c(q,a)})}})(jQuery);
(function(a){function c(c,l){function f(a,c){x.trigger({type:a,dx:c.screenX-z,dy:c.screenY-F})}function r(a){C=!1;A.hide();f("jivo.drag.stop",a);B.unbind(".jivo-drag")}function u(a){a.preventDefault();C||r(a);f("jivo.drag.move",a)}var n=a.extend({"min-height":300,"min-width":200,opacity:.8,"out-of-border":!0,handler:a(),tracker:a(),console:!1},l),x=a(c),y=n.handler,A=n.tracker,B=a(y.prop("ownerDocument")),C=!1,z=0,F=0;y.mousedown(function(a){C=!0;z=a.screenX;F=a.screenY;a.preventDefault();B.bind("mouseup.jivo-drag",
r).bind("mousemove.jivo-drag",u);A.show();f("jivo.drag.init",a)});x.bind("jivo.drag.init",function(a){n.console&&console.log("drag init",a)});x.bind("jivo.drag.move",function(a){n.console&&console.log("drag move",a)});x.bind("jivo.drag.stop",function(a){n.console&&console.log("drag stop",a)})}a.fn.jivoDragEvent=function(a){return this.each(function(f,q){c(q,a)})}})(jQuery);
(function(a,c,f){function l(a){var c={},l=/^jQuery\d+$/;f.each(a.attributes,function(a,f){f.specified&&!l.test(f.name)&&(c[f.name]=f.value)});return c}function q(a,c){var l=f(this);if(this.value==l.attr("placeholder")&&l.hasClass("placeholder"))if(l.data("placeholder-password")){l=l.hide().next().show().attr("id",l.removeAttr("id").data("placeholder-id"));if(!0===a)return l[0].value=c;l.focus()}else this.value="",l.removeClass("placeholder"),this==u()&&this.select()}function r(){var a,c=f(this),n=
this.id;if(""==this.value){if("password"==this.type){if(!c.data("placeholder-textinput")){try{a=c.clone().attr({type:"text"})}catch(K){a=f("<input>").attr(f.extend(l(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":c,"placeholder-id":n}).bind("focus.placeholder",q);c.data({"placeholder-textinput":a,"placeholder-id":n}).before(a)}c=c.removeAttr("id").hide().prev().attr("id",n).show()}c.addClass("placeholder");c[0].value=c.attr("placeholder")}}function u(){try{return c.activeElement}catch(C){}}
var n="[object OperaMini]"==Object.prototype.toString.call(a.operamini),x="placeholder"in c.createElement("input")&&!n,n="placeholder"in c.createElement("textarea")&&!n,y=f.fn,A=f.valHooks,B=f.propHooks;x&&n?(y=y.placeholder=function(){return this},y.input=y.textarea=!0):(y=y.placeholder=function(){this.filter((x?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":q,"blur.placeholder":r}).data("placeholder-enabled",!0).trigger("blur.placeholder");return this},y.input=
x,y.textarea=n,y={get:function(a){var c=f(a),l=c.data("placeholder-password");return l?l[0].value:c.data("placeholder-enabled")&&c.hasClass("placeholder")?"":a.value},set:function(a,c){var l=f(a),n=l.data("placeholder-password");if(n)return n[0].value=c;if(!l.data("placeholder-enabled"))return a.value=c;""==c?(a.value=c,a!=u()&&r.call(a)):l.hasClass("placeholder")?q.call(a,!0,c)||(a.value=c):a.value=c;return l}},x||(A.input=y,B.value=y),n||(A.textarea=y,B.value=y),f(function(){f(c).delegate("form",
"submit.placeholder",function(){var a=f(".placeholder",this).each(q);setTimeout(function(){a.each(r)},10)})}),f(a).bind("beforeunload.placeholder",function(){f(".placeholder").each(function(){this.value=""})}))})(this,document,jQuery);
(function(){var a=this,c=a._,f={},l=Array.prototype,q=Object.prototype,r=l.push,u=l.slice,n=l.concat,x=q.toString,y=q.hasOwnProperty,A=l.forEach,B=l.map,C=l.reduce,z=l.reduceRight,F=l.filter,K=l.every,H=l.some,G=l.indexOf,O=l.lastIndexOf,q=Array.isArray,J=Object.keys,p=function(a){if(a instanceof p)return a;if(!(this instanceof p))return new p(a);this._wrapped=a};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=p),exports._=p):a._=p;p.VERSION="1.4.4";
var M=p.each=p.forEach=function(a,c,h){if(null!=a)if(A&&a.forEach===A)a.forEach(c,h);else if(a.length===+a.length)for(var d=0,k=a.length;d<k&&c.call(h,a[d],d,a)!==f;d++);else for(d in a)if(p.has(a,d)&&c.call(h,a[d],d,a)===f)break};p.map=p.collect=function(a,c,h){var d=[];if(null==a)return d;if(B&&a.map===B)return a.map(c,h);M(a,function(a,k,f){d[d.length]=c.call(h,a,k,f)});return d};p.reduce=p.foldl=p.inject=function(a,c,h,f){var d=2<arguments.length;null==a&&(a=[]);if(C&&a.reduce===C)return f&&(c=
p.bind(c,f)),d?a.reduce(c,h):a.reduce(c);M(a,function(a,k,t){d?h=c.call(f,h,a,k,t):(h=a,d=!0)});if(!d)throw new TypeError("Reduce of empty array with no initial value");return h};p.reduceRight=p.foldr=function(a,c,h,f){var d=2<arguments.length;null==a&&(a=[]);if(z&&a.reduceRight===z)return f&&(c=p.bind(c,f)),d?a.reduceRight(c,h):a.reduceRight(c);var k=a.length;if(k!==+k)var t=p.keys(a),k=t.length;M(a,function(l,w,p){w=t?t[--k]:--k;d?h=c.call(f,h,a[w],w,p):(h=a[w],d=!0)});if(!d)throw new TypeError("Reduce of empty array with no initial value");
return h};p.find=p.detect=function(a,c,h){var d;Q(a,function(a,k,f){if(c.call(h,a,k,f))return d=a,!0});return d};p.filter=p.select=function(a,c,h){var d=[];if(null==a)return d;if(F&&a.filter===F)return a.filter(c,h);M(a,function(a,k,f){c.call(h,a,k,f)&&(d[d.length]=a)});return d};p.reject=function(a,c,h){return p.filter(a,function(a,d,k){return!c.call(h,a,d,k)},h)};p.every=p.all=function(a,c,h){c||(c=p.identity);var d=!0;if(null==a)return d;if(K&&a.every===K)return a.every(c,h);M(a,function(a,k,t){if(!(d=
d&&c.call(h,a,k,t)))return f});return!!d};var Q=p.some=p.any=function(a,c,h){c||(c=p.identity);var d=!1;if(null==a)return d;if(H&&a.some===H)return a.some(c,h);M(a,function(a,k,t){if(d||(d=c.call(h,a,k,t)))return f});return!!d};p.contains=p.include=function(a,c){return null==a?!1:G&&a.indexOf===G?-1!=a.indexOf(c):Q(a,function(a){return a===c})};p.invoke=function(a,c){var d=u.call(arguments,2),k=p.isFunction(c);return p.map(a,function(a){return(k?c:a[c]).apply(a,d)})};p.pluck=function(a,c){return p.map(a,
function(a){return a[c]})};p.where=function(a,c,h){return p.isEmpty(c)?h?null:[]:p[h?"find":"filter"](a,function(a){for(var d in c)if(c[d]!==a[d])return!1;return!0})};p.findWhere=function(a,c){return p.where(a,c,!0)};p.max=function(a,c,h){if(!c&&p.isArray(a)&&a[0]===+a[0]&&65535>a.length)return Math.max.apply(Math,a);if(!c&&p.isEmpty(a))return-Infinity;var d={computed:-Infinity,value:-Infinity};M(a,function(a,k,f){k=c?c.call(h,a,k,f):a;k>=d.computed&&(d={value:a,computed:k})});return d.value};p.min=
function(a,c,h){if(!c&&p.isArray(a)&&a[0]===+a[0]&&65535>a.length)return Math.min.apply(Math,a);if(!c&&p.isEmpty(a))return Infinity;var d={computed:Infinity,value:Infinity};M(a,function(a,k,f){k=c?c.call(h,a,k,f):a;k<d.computed&&(d={value:a,computed:k})});return d.value};p.shuffle=function(a){var d,c=0,h=[];M(a,function(a){d=p.random(c++);h[c-1]=h[d];h[d]=a});return h};var X=function(a){return p.isFunction(a)?a:function(d){return d[a]}};p.sortBy=function(a,c,h){var d=X(c);return p.pluck(p.map(a,function(a,
c,k){return{value:a,index:c,criteria:d.call(h,a,c,k)}}).sort(function(a,d){var c=a.criteria,k=d.criteria;if(c!==k){if(c>k||void 0===c)return 1;if(c<k||void 0===k)return-1}return a.index<d.index?-1:1}),"value")};var ea=function(a,c,h,f){var d={},k=X(c||p.identity);M(a,function(c,t){var l=k.call(h,c,t,a);f(d,l,c)});return d};p.groupBy=function(a,c,h){return ea(a,c,h,function(a,d,c){(p.has(a,d)?a[d]:a[d]=[]).push(c)})};p.countBy=function(a,c,h){return ea(a,c,h,function(a,d){p.has(a,d)||(a[d]=0);a[d]++})};
p.sortedIndex=function(a,c,h,f){h=null==h?p.identity:X(h);c=h.call(f,c);for(var d=0,k=a.length;d<k;){var t=d+k>>>1;h.call(f,a[t])<c?d=t+1:k=t}return d};p.toArray=function(a){return a?p.isArray(a)?u.call(a):a.length===+a.length?p.map(a,p.identity):p.values(a):[]};p.size=function(a){return null==a?0:a.length===+a.length?a.length:p.keys(a).length};p.first=p.head=p.take=function(a,c,h){if(null!=a)return null==c||h?a[0]:u.call(a,0,c)};p.initial=function(a,c,h){return u.call(a,0,a.length-(null==c||h?1:
c))};p.last=function(a,c,h){if(null!=a)return null==c||h?a[a.length-1]:u.call(a,Math.max(a.length-c,0))};p.rest=p.tail=p.drop=function(a,c,h){return u.call(a,null==c||h?1:c)};p.compact=function(a){return p.filter(a,p.identity)};var P=function(a,c,h){M(a,function(a){p.isArray(a)?c?r.apply(h,a):P(a,c,h):h.push(a)});return h};p.flatten=function(a,c){return P(a,c,[])};p.without=function(a){return p.difference(a,u.call(arguments,1))};p.uniq=p.unique=function(a,c,h,f){p.isFunction(c)&&(f=h,h=c,c=!1);h=
h?p.map(a,h,f):a;var d=[],k=[];M(h,function(h,f){(c?f&&k[k.length-1]===h:p.contains(k,h))||(k.push(h),d.push(a[f]))});return d};p.union=function(){return p.uniq(n.apply(l,arguments))};p.intersection=function(a){var d=u.call(arguments,1);return p.filter(p.uniq(a),function(a){return p.every(d,function(d){return 0<=p.indexOf(d,a)})})};p.difference=function(a){var d=n.apply(l,u.call(arguments,1));return p.filter(a,function(a){return!p.contains(d,a)})};p.zip=function(){for(var a=u.call(arguments),c=p.max(p.pluck(a,
"length")),h=Array(c),f=0;f<c;f++)h[f]=p.pluck(a,""+f);return h};p.object=function(a,c){if(null==a)return{};for(var d={},h=0,k=a.length;h<k;h++)c?d[a[h]]=c[h]:d[a[h][0]]=a[h][1];return d};p.indexOf=function(a,c,h){if(null==a)return-1;var d=0,k=a.length;if(h)if("number"==typeof h)d=0>h?Math.max(0,k+h):h;else return d=p.sortedIndex(a,c),a[d]===c?d:-1;if(G&&a.indexOf===G)return a.indexOf(c,h);for(;d<k;d++)if(a[d]===c)return d;return-1};p.lastIndexOf=function(a,c,h){if(null==a)return-1;var d=null!=h;
if(O&&a.lastIndexOf===O)return d?a.lastIndexOf(c,h):a.lastIndexOf(c);for(h=d?h:a.length;h--;)if(a[h]===c)return h;return-1};p.range=function(a,c,h){1>=arguments.length&&(c=a||0,a=0);h=arguments[2]||1;for(var d=Math.max(Math.ceil((c-a)/h),0),k=0,f=Array(d);k<d;)f[k++]=a,a+=h;return f};p.bind=function(a,c){var d=u.call(arguments,2);return function(){return a.apply(c,d.concat(u.call(arguments)))}};p.partial=function(a){var d=u.call(arguments,1);return function(){return a.apply(this,d.concat(u.call(arguments)))}};
p.bindAll=function(a){var d=u.call(arguments,1);0===d.length&&(d=p.functions(a));M(d,function(d){a[d]=p.bind(a[d],a)});return a};p.memoize=function(a,c){var d={};c||(c=p.identity);return function(){var h=c.apply(this,arguments);return p.has(d,h)?d[h]:d[h]=a.apply(this,arguments)}};p.delay=function(a,c){var d=u.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},c)};p.defer=function(a){return p.delay.apply(p,[a,1].concat(u.call(arguments,1)))};p.throttle=function(a,c){var d,h,k,
f,l=0,w=function(){l=new Date;k=null;f=a.apply(d,h)};return function(){var t=new Date,p=c-(t-l);d=this;h=arguments;0>=p?(clearTimeout(k),k=null,l=t,f=a.apply(d,h)):k||(k=setTimeout(w,p));return f}};p.debounce=function(a,c,h){var d,k;return function(){var f=this,l=arguments,t=h&&!d;clearTimeout(d);d=setTimeout(function(){d=null;h||(k=a.apply(f,l))},c);t&&(k=a.apply(f,l));return k}};p.once=function(a){var d=!1,c;return function(){if(d)return c;d=!0;c=a.apply(this,arguments);a=null;return c}};p.wrap=
function(a,c){return function(){var d=[a];r.apply(d,arguments);return c.apply(this,d)}};p.compose=function(){var a=arguments;return function(){for(var d=arguments,c=a.length-1;0<=c;c--)d=[a[c].apply(this,d)];return d[0]}};p.after=function(a,c){return 0>=a?c():function(){if(1>--a)return c.apply(this,arguments)}};p.keys=J||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var d=[],c;for(c in a)p.has(a,c)&&(d[d.length]=c);return d};p.values=function(a){var d=[],c;for(c in a)p.has(a,
c)&&d.push(a[c]);return d};p.pairs=function(a){var d=[],c;for(c in a)p.has(a,c)&&d.push([c,a[c]]);return d};p.invert=function(a){var d={},c;for(c in a)p.has(a,c)&&(d[a[c]]=c);return d};p.functions=p.methods=function(a){var d=[],c;for(c in a)p.isFunction(a[c])&&d.push(c);return d.sort()};p.extend=function(a){M(u.call(arguments,1),function(d){if(d)for(var c in d)a[c]=d[c]});return a};p.pick=function(a){var d={},c=n.apply(l,u.call(arguments,1));M(c,function(c){c in a&&(d[c]=a[c])});return d};p.omit=
function(a){var d={},c=n.apply(l,u.call(arguments,1)),h;for(h in a)p.contains(c,h)||(d[h]=a[h]);return d};p.defaults=function(a){M(u.call(arguments,1),function(d){if(d)for(var c in d)null==a[c]&&(a[c]=d[c])});return a};p.clone=function(a){return p.isObject(a)?p.isArray(a)?a.slice():p.extend({},a):a};p.tap=function(a,c){c(a);return a};var W=function(a,c,h,f){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a instanceof p&&(a=a._wrapped);c instanceof p&&(c=c._wrapped);var d=x.call(a);
if(d!=x.call(c))return!1;switch(d){case "[object String]":return a==String(c);case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var k=h.length;k--;)if(h[k]==a)return f[k]==c;h.push(a);f.push(c);var k=0,l=!0;if("[object Array]"==d){if(k=a.length,l=k==c.length)for(;k--&&
(l=W(a[k],c[k],h,f)););}else{var d=a.constructor,w=c.constructor;if(d!==w&&!(p.isFunction(d)&&d instanceof d&&p.isFunction(w)&&w instanceof w))return!1;for(var t in a)if(p.has(a,t)&&(k++,!(l=p.has(c,t)&&W(a[t],c[t],h,f))))break;if(l){for(t in c)if(p.has(c,t)&&!k--)break;l=!k}}h.pop();f.pop();return l};p.isEqual=function(a,c){return W(a,c,[],[])};p.isEmpty=function(a){if(null==a)return!0;if(p.isArray(a)||p.isString(a))return 0===a.length;for(var c in a)if(p.has(a,c))return!1;return!0};p.isElement=
function(a){return!(!a||1!==a.nodeType)};p.isArray=q||function(a){return"[object Array]"==x.call(a)};p.isObject=function(a){return a===Object(a)};M("Arguments Function String Number Date RegExp".split(" "),function(a){p["is"+a]=function(c){return x.call(c)=="[object "+a+"]"}});p.isArguments(arguments)||(p.isArguments=function(a){return!(!a||!p.has(a,"callee"))});"function"!==typeof/./&&(p.isFunction=function(a){return"function"===typeof a});p.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))};
p.isNaN=function(a){return p.isNumber(a)&&a!=+a};p.isBoolean=function(a){return!0===a||!1===a||"[object Boolean]"==x.call(a)};p.isNull=function(a){return null===a};p.isUndefined=function(a){return void 0===a};p.has=function(a,c){return y.call(a,c)};p.noConflict=function(){a._=c;return this};p.identity=function(a){return a};p.times=function(a,c,h){for(var d=Array(a),f=0;f<a;f++)d[f]=c.call(h,f);return d};p.random=function(a,c){null==c&&(c=a,a=0);return a+Math.floor(Math.random()*(c-a+1))};var R={escape:{"&":"&amp;",
"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};R.unescape=p.invert(R.escape);var S={escape:new RegExp("["+p.keys(R.escape).join("")+"]","g"),unescape:new RegExp("("+p.keys(R.unescape).join("|")+")","g")};p.each(["escape","unescape"],function(a){p[a]=function(c){return null==c?"":(""+c).replace(S[a],function(c){return R[a][c]})}});p.result=function(a,c){if(null==a)return null;var d=a[c];return p.isFunction(d)?d.call(a):d};p.mixin=function(a){M(p.functions(a),function(c){var d=p[c]=
a[c];p.prototype[c]=function(){var a=[this._wrapped];r.apply(a,arguments);return w.call(this,d.apply(p,a))}})};var Y=0;p.uniqueId=function(a){var c=++Y+"";return a?a+c:c};p.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var Z=/(.)^/,aa={"'":"'","\\":"\\","\r":"r","\n":"n","\t":"t","\u2028":"u2028","\u2029":"u2029"},h=/\\|'|\r|\n|\t|\u2028|\u2029/g;p.template=function(a,c,f){var d;f=p.defaults({},f,p.templateSettings);var k=new RegExp([(f.escape||
Z).source,(f.interpolate||Z).source,(f.evaluate||Z).source].join("|")+"|$","g"),l=0,w="__p+='";a.replace(k,function(c,d,f,k,p){w+=a.slice(l,p).replace(h,function(a){return"\\"+aa[a]});d&&(w+="'+\n((__t=("+d+"))==null?'':_.escape(__t))+\n'");f&&(w+="'+\n((__t=("+f+"))==null?'':__t)+\n'");k&&(w+="';\n"+k+"\n__p+='");l=p+c.length;return c});w+="';\n";f.variable||(w="with(obj||{}){\n"+w+"}\n");w="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+w+"return __p;\n";
try{d=new Function(f.variable||"obj","_",w)}catch(T){throw T.source=w,T;}if(c)return d(c,p);c=function(a){return d.call(this,a,p)};c.source="function("+(f.variable||"obj")+"){\n"+w+"}";return c};p.chain=function(a){return p(a).chain()};var w=function(a){return this._chain?p(a).chain():a};p.mixin(p);M("pop push reverse shift sort splice unshift".split(" "),function(a){var c=l[a];p.prototype[a]=function(){var d=this._wrapped;c.apply(d,arguments);"shift"!=a&&"splice"!=a||0!==d.length||delete d[0];return w.call(this,
d)}});M(["concat","join","slice"],function(a){var c=l[a];p.prototype[a]=function(){return w.call(this,c.apply(this._wrapped,arguments))}});p.extend(p.prototype,{chain:function(){this._chain=!0;return this},value:function(){return this._wrapped}})}).call(this);
(function(){var a=this,c=a.Backbone,f=[],l=f.push,q=f.slice,r=f.splice,u;u="undefined"!==typeof exports?exports:a.Backbone={};u.VERSION="1.0.0";var n=a._;n||"undefined"===typeof require||(n=require("underscore"));u.$=a.jQuery||a.Zepto||a.ender||a.$;u.noConflict=function(){a.Backbone=c;return this};u.emulateHTTP=!1;u.emulateJSON=!1;var x=u.Events={on:function(a,c,d){if(!A(this,"on",a,[c,d])||!c)return this;this._events||(this._events={});(this._events[a]||(this._events[a]=[])).push({callback:c,context:d,
ctx:d||this});return this},once:function(a,c,d){if(!A(this,"once",a,[c,d])||!c)return this;var h=this,f=n.once(function(){h.off(a,f);c.apply(this,arguments)});f._callback=c;return this.on(a,f,d)},off:function(a,c,d){var h,f,l,w,p,q,r,u;if(!this._events||!A(this,"off",a,[c,d]))return this;if(!a&&!c&&!d)return this._events={},this;w=a?[a]:n.keys(this._events);p=0;for(q=w.length;p<q;p++)if(a=w[p],l=this._events[a]){this._events[a]=h=[];if(c||d)for(r=0,u=l.length;r<u;r++)f=l[r],(c&&c!==f.callback&&c!==
f.callback._callback||d&&d!==f.context)&&h.push(f);h.length||delete this._events[a]}return this},trigger:function(a){if(!this._events)return this;var c=q.call(arguments,1);if(!A(this,"trigger",a,c))return this;var d=this._events[a],h=this._events.all;d&&B(d,c);h&&B(h,arguments);return this},stopListening:function(a,c,d){var h=this._listeners;if(!h)return this;var f=!c&&!d;"object"===typeof c&&(d=this);a&&((h={})[a._listenerId]=a);for(var l in h)h[l].off(c,d,this),f&&delete this._listeners[l];return this}},
y=/\s+/,A=function(a,c,d,f){if(!d)return!0;if("object"===typeof d){for(var h in d)a[c].apply(a,[h,d[h]].concat(f));return!1}if(y.test(d)){d=d.split(y);h=0;for(var k=d.length;h<k;h++)a[c].apply(a,[d[h]].concat(f));return!1}return!0},B=function(a,c){var d,h=-1,f=a.length,l=c[0],w=c[1],p=c[2];switch(c.length){case 0:for(;++h<f;)(d=a[h]).callback.call(d.ctx);break;case 1:for(;++h<f;)(d=a[h]).callback.call(d.ctx,l);break;case 2:for(;++h<f;)(d=a[h]).callback.call(d.ctx,l,w);break;case 3:for(;++h<f;)(d=
a[h]).callback.call(d.ctx,l,w,p);break;default:for(;++h<f;)(d=a[h]).callback.apply(d.ctx,c)}};n.each({listenTo:"on",listenToOnce:"once"},function(a,c){x[c]=function(c,h,f){var d=this._listeners||(this._listeners={}),k=c._listenerId||(c._listenerId=n.uniqueId("l"));d[k]=c;"object"===typeof h&&(f=this);c[a](h,f,this);return this}});x.bind=x.on;x.unbind=x.off;n.extend(u,x);var C=u.Model=function(a,c){var d,h=a||{};c||(c={});this.cid=n.uniqueId("c");this.attributes={};n.extend(this,n.pick(c,z));c.parse&&
(h=this.parse(h,c)||{});if(d=n.result(this,"defaults"))h=n.defaults({},h,d);this.set(h,c);this.changed={};this.initialize.apply(this,arguments)},z=["url","urlRoot","collection"];n.extend(C.prototype,x,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(a){return n.clone(this.attributes)},sync:function(){return u.sync.apply(this,arguments)},get:function(a){return this.attributes[a]},escape:function(a){return n.escape(this.get(a))},has:function(a){return null!=
this.get(a)},set:function(a,c,d){var h,f,l,w,p,q,r;if(null==a)return this;"object"===typeof a?(f=a,d=c):(f={})[a]=c;d||(d={});if(!this._validate(f,d))return!1;l=d.unset;w=d.silent;a=[];p=this._changing;this._changing=!0;p||(this._previousAttributes=n.clone(this.attributes),this.changed={});r=this.attributes;q=this._previousAttributes;this.idAttribute in f&&(this.id=f[this.idAttribute]);for(h in f)c=f[h],n.isEqual(r[h],c)||a.push(h),n.isEqual(q[h],c)?delete this.changed[h]:this.changed[h]=c,l?delete r[h]:
r[h]=c;if(!w)for(a.length&&(this._pending=!0),c=0,h=a.length;c<h;c++)this.trigger("change:"+a[c],this,r[a[c]],d);if(p)return this;if(!w)for(;this._pending;)this._pending=!1,this.trigger("change",this,d);this._changing=this._pending=!1;return this},unset:function(a,c){return this.set(a,void 0,n.extend({},c,{unset:!0}))},clear:function(a){var c={},d;for(d in this.attributes)c[d]=void 0;return this.set(c,n.extend({},a,{unset:!0}))},hasChanged:function(a){return null==a?!n.isEmpty(this.changed):n.has(this.changed,
a)},changedAttributes:function(a){if(!a)return this.hasChanged()?n.clone(this.changed):!1;var c,d=!1,h=this._changing?this._previousAttributes:this.attributes,f;for(f in a)n.isEqual(h[f],c=a[f])||((d||(d={}))[f]=c);return d},previous:function(a){return null!=a&&this._previousAttributes?this._previousAttributes[a]:null},previousAttributes:function(){return n.clone(this._previousAttributes)},fetch:function(a){a=a?n.clone(a):{};void 0===a.parse&&(a.parse=!0);var c=this,d=a.success;a.success=function(h){if(!c.set(c.parse(h,
a),a))return!1;d&&d(c,h,a);c.trigger("sync",c,h,a)};aa(this,a);return this.sync("read",this,a)},save:function(a,c,d){var h,f=this.attributes;null==a||"object"===typeof a?(h=a,d=c):(h={})[a]=c;if(!(!h||d&&d.wait||this.set(h,d)))return!1;d=n.extend({validate:!0},d);if(!this._validate(h,d))return!1;h&&d.wait&&(this.attributes=n.extend({},f,h));void 0===d.parse&&(d.parse=!0);var l=this,p=d.success;d.success=function(a){l.attributes=f;var c=l.parse(a,d);d.wait&&(c=n.extend(h||{},c));if(n.isObject(c)&&
!l.set(c,d))return!1;p&&p(l,a,d);l.trigger("sync",l,a,d)};aa(this,d);a=this.isNew()?"create":d.patch?"patch":"update";"patch"===a&&(d.attrs=h);a=this.sync(a,this,d);h&&d.wait&&(this.attributes=f);return a},destroy:function(a){a=a?n.clone(a):{};var c=this,d=a.success,h=function(){c.trigger("destroy",c,c.collection,a)};a.success=function(f){(a.wait||c.isNew())&&h();d&&d(c,f,a);c.isNew()||c.trigger("sync",c,f,a)};if(this.isNew())return a.success(),!1;aa(this,a);var f=this.sync("delete",this,a);a.wait||
h();return f},url:function(){var a=n.result(this,"urlRoot")||n.result(this.collection,"url")||Z();return this.isNew()?a:a+("/"===a.charAt(a.length-1)?"":"/")+encodeURIComponent(this.id)},parse:function(a,c){return a},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return null==this.id},isValid:function(a){return this._validate({},n.extend(a||{},{validate:!0}))},_validate:function(a,c){if(!c.validate||!this.validate)return!0;a=n.extend({},this.attributes,a);var d=this.validationError=
this.validate(a,c)||null;if(!d)return!0;this.trigger("invalid",this,d,n.extend(c||{},{validationError:d}));return!1}});n.each("keys values pairs invert pick omit".split(" "),function(a){C.prototype[a]=function(){var c=q.call(arguments);c.unshift(this.attributes);return n[a].apply(n,c)}});var F=u.Collection=function(a,c){c||(c={});c.url&&(this.url=c.url);c.model&&(this.model=c.model);void 0!==c.comparator&&(this.comparator=c.comparator);this._reset();this.initialize.apply(this,arguments);a&&this.reset(a,
n.extend({silent:!0},c))},K={add:!0,remove:!0,merge:!0},H={add:!0,merge:!1,remove:!1};n.extend(F.prototype,x,{model:C,initialize:function(){},toJSON:function(a){return this.map(function(c){return c.toJSON(a)})},sync:function(){return u.sync.apply(this,arguments)},add:function(a,c){return this.set(a,n.defaults(c||{},H))},remove:function(a,c){a=n.isArray(a)?a.slice():[a];c||(c={});var d,f,h,l;d=0;for(f=a.length;d<f;d++)if(l=this.get(a[d]))delete this._byId[l.id],delete this._byId[l.cid],h=this.indexOf(l),
this.models.splice(h,1),this.length--,c.silent||(c.index=h,l.trigger("remove",l,this,c)),this._removeReference(l);return this},set:function(a,c){c=n.defaults(c||{},K);c.parse&&(a=this.parse(a,c));n.isArray(a)||(a=a?[a]:[]);var d,f,h,p,w,q=c.at,u=this.comparator&&null==q&&!1!==c.sort,y=n.isString(this.comparator)?this.comparator:null,B=[],C=[],z={};d=0;for(f=a.length;d<f;d++)if(h=this._prepareModel(a[d],c))(p=this.get(h))?(c.remove&&(z[p.cid]=!0),c.merge&&(p.set(h.attributes,c),u&&!w&&p.hasChanged(y)&&
(w=!0))):c.add&&(B.push(h),h.on("all",this._onModelEvent,this),this._byId[h.cid]=h,null!=h.id&&(this._byId[h.id]=h));if(c.remove){d=0;for(f=this.length;d<f;++d)z[(h=this.models[d]).cid]||C.push(h);C.length&&this.remove(C,c)}B.length&&(u&&(w=!0),this.length+=B.length,null!=q?r.apply(this.models,[q,0].concat(B)):l.apply(this.models,B));w&&this.sort({silent:!0});if(c.silent)return this;d=0;for(f=B.length;d<f;d++)(h=B[d]).trigger("add",h,this,c);w&&this.trigger("sort",this,c);return this},reset:function(a,
c){c||(c={});for(var d=0,f=this.models.length;d<f;d++)this._removeReference(this.models[d]);c.previousModels=this.models;this._reset();this.add(a,n.extend({silent:!0},c));c.silent||this.trigger("reset",this,c);return this},push:function(a,c){a=this._prepareModel(a,c);this.add(a,n.extend({at:this.length},c));return a},pop:function(a){var c=this.at(this.length-1);this.remove(c,a);return c},unshift:function(a,c){a=this._prepareModel(a,c);this.add(a,n.extend({at:0},c));return a},shift:function(a){var c=
this.at(0);this.remove(c,a);return c},slice:function(a,c){return this.models.slice(a,c)},get:function(a){if(null!=a)return this._byId[null!=a.id?a.id:a.cid||a]},at:function(a){return this.models[a]},where:function(a,c){return n.isEmpty(a)?c?void 0:[]:this[c?"find":"filter"](function(c){for(var d in a)if(a[d]!==c.get(d))return!1;return!0})},findWhere:function(a){return this.where(a,!0)},sort:function(a){if(!this.comparator)throw Error("Cannot sort a set without a comparator");a||(a={});n.isString(this.comparator)||
1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(n.bind(this.comparator,this));a.silent||this.trigger("sort",this,a);return this},sortedIndex:function(a,c,d){c||(c=this.comparator);var f=n.isFunction(c)?c:function(a){return a.get(c)};return n.sortedIndex(this.models,a,f,d)},pluck:function(a){return n.invoke(this.models,"get",a)},fetch:function(a){a=a?n.clone(a):{};void 0===a.parse&&(a.parse=!0);var c=a.success,d=this;a.success=function(f){d[a.reset?"reset":
"set"](f,a);c&&c(d,f,a);d.trigger("sync",d,f,a)};aa(this,a);return this.sync("read",this,a)},create:function(a,c){c=c?n.clone(c):{};if(!(a=this._prepareModel(a,c)))return!1;c.wait||this.add(a,c);var d=this,f=c.success;c.success=function(h){c.wait&&d.add(a,c);f&&f(a,h,c)};a.save(null,c);return a},parse:function(a,c){return a},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(a,c){if(a instanceof C)return a.collection||
(a.collection=this),a;c||(c={});c.collection=this;var d=new this.model(a,c);return d._validate(a,c)?d:(this.trigger("invalid",this,a,c),!1)},_removeReference:function(a){this===a.collection&&delete a.collection;a.off("all",this._onModelEvent,this)},_onModelEvent:function(a,c,d,f){if("add"!==a&&"remove"!==a||d===this)"destroy"===a&&this.remove(c,f),c&&a==="change:"+c.idAttribute&&(delete this._byId[c.previous(c.idAttribute)],null!=c.id&&(this._byId[c.id]=c)),this.trigger.apply(this,arguments)}});n.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min toArray size first head take initial rest tail drop last without indexOf shuffle lastIndexOf isEmpty chain".split(" "),
function(a){F.prototype[a]=function(){var c=q.call(arguments);c.unshift(this.models);return n[a].apply(n,c)}});n.each(["groupBy","countBy","sortBy"],function(a){F.prototype[a]=function(c,d){var f=n.isFunction(c)?c:function(a){return a.get(c)};return n[a](this.models,f,d)}});var f=u.View=function(a){this.cid=n.uniqueId("view");this._configure(a||{});this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()},G=/^(\S+)\s*(.*)$/,O="model collection el id attributes className tagName events".split(" ");
n.extend(f.prototype,x,{tagName:"div",$:function(a){return this.$el.find(a)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(a,c){this.$el&&this.undelegateEvents();this.$el=a instanceof u.$?a:u.$(a);this.el=this.$el[0];!1!==c&&this.delegateEvents();return this},delegateEvents:function(a){if(!a&&!(a=n.result(this,"events")))return this;this.undelegateEvents();for(var c in a){var d=a[c];n.isFunction(d)||
(d=this[a[c]]);if(d){var f=c.match(G),h=f[1],f=f[2],d=n.bind(d,this),h=h+(".delegateEvents"+this.cid);if(""===f)this.$el.on(h,d);else this.$el.on(h,f,d)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_configure:function(a){this.options&&(a=n.extend({},n.result(this,"options"),a));n.extend(this,n.pick(a,O));this.options=a},_ensureElement:function(){if(this.el)this.setElement(n.result(this,"el"),!1);else{var a=n.extend({},n.result(this,"attributes"));
this.id&&(a.id=n.result(this,"id"));this.className&&(a["class"]=n.result(this,"className"));a=u.$("<"+n.result(this,"tagName")+">").attr(a);this.setElement(a,!1)}}});u.sync=function(a,c,d){var f=J[a];n.defaults(d||(d={}),{emulateHTTP:u.emulateHTTP,emulateJSON:u.emulateJSON});var h={type:f,dataType:"json"};d.url||(h.url=n.result(c,"url")||Z());null!=d.data||!c||"create"!==a&&"update"!==a&&"patch"!==a||(h.contentType="application/json",h.data=JSON.stringify(d.attrs||c.toJSON(d)));d.emulateJSON&&(h.contentType=
"application/x-www-form-urlencoded",h.data=h.data?{model:h.data}:{});if(d.emulateHTTP&&("PUT"===f||"DELETE"===f||"PATCH"===f)){h.type="POST";d.emulateJSON&&(h.data._method=f);var l=d.beforeSend;d.beforeSend=function(a){a.setRequestHeader("X-HTTP-Method-Override",f);if(l)return l.apply(this,arguments)}}"GET"===h.type||d.emulateJSON||(h.processData=!1);"PATCH"!==h.type||!window.ActiveXObject||window.external&&window.external.msActiveXFilteringEnabled||(h.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")});
a=d.xhr=u.ajax(n.extend(h,d));c.trigger("request",c,a,d);return a};var J={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};u.ajax=function(){return u.$.ajax.apply(u.$,arguments)};var p=u.Router=function(a){a||(a={});a.routes&&(this.routes=a.routes);this._bindRoutes();this.initialize.apply(this,arguments)},M=/\((.*?)\)/g,Q=/(\(\?)?:\w+/g,X=/\*\w+/g,ea=/[\-{}\[\]+?.,\\\^$|#\s]/g;n.extend(p.prototype,x,{initialize:function(){},route:function(a,c,d){n.isRegExp(a)||(a=this._routeToRegExp(a));
n.isFunction(c)&&(d=c,c="");d||(d=this[c]);var f=this;u.history.route(a,function(h){h=f._extractParameters(a,h);d&&d.apply(f,h);f.trigger.apply(f,["route:"+c].concat(h));f.trigger("route",c,h);u.history.trigger("route",f,c,h)});return this},navigate:function(a,c){u.history.navigate(a,c);return this},_bindRoutes:function(){if(this.routes){this.routes=n.result(this,"routes");for(var a,c=n.keys(this.routes);null!=(a=c.pop());)this.route(a,this.routes[a])}},_routeToRegExp:function(a){a=a.replace(ea,"\\$&").replace(M,
"(?:$1)?").replace(Q,function(a,c){return c?a:"([^/]+)"}).replace(X,"(.*?)");return new RegExp("^"+a+"$")},_extractParameters:function(a,c){var d=a.exec(c).slice(1);return n.map(d,function(a){return a?decodeURIComponent(a):null})}});var P=u.History=function(){this.handlers=[];n.bindAll(this,"checkUrl");"undefined"!==typeof window&&(this.location=window.location,this.history=window.history)},W=/^[#\/]|\s+$/g,R=/^\/+|\/+$/g,S=/msie [\w.]+/,Y=/\/$/;P.started=!1;n.extend(P.prototype,x,{interval:50,getHash:function(a){return(a=
(a||this).location.href.match(/#(.*)$/))?a[1]:""},getFragment:function(a,c){if(null==a)if(this._hasPushState||!this._wantsHashChange||c){a=this.location.pathname;var d=this.root.replace(Y,"");a.indexOf(d)||(a=a.substr(d.length))}else a=this.getHash();return a.replace(W,"")},start:function(a){if(P.started)throw Error("Backbone.history has already been started");P.started=!0;this.options=n.extend({},{root:"/"},this.options,a);this.root=this.options.root;this._wantsHashChange=!1!==this.options.hashChange;
this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);a=this.getFragment();var c=document.documentMode,c=S.exec(navigator.userAgent.toLowerCase())&&(!c||7>=c);this.root=("/"+this.root+"/").replace(R,"/");c&&this._wantsHashChange&&(this.iframe=u.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow,this.navigate(a));if(this._hasPushState)u.$(window).on("popstate",this.checkUrl);else if(this._wantsHashChange&&
"onhashchange"in window&&!c)u.$(window).on("hashchange",this.checkUrl);else this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval));this.fragment=a;a=this.location;c=a.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState&&!this._hasPushState&&!c)return this.fragment=this.getFragment(null,!0),this.location.replace(this.root+this.location.search+"#"+this.fragment),!0;this._wantsPushState&&this._hasPushState&&c&&a.hash&&(this.fragment=
this.getHash().replace(W,""),this.history.replaceState({},document.title,this.root+this.fragment+a.search));if(!this.options.silent)return this.loadUrl()},stop:function(){u.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);P.started=!1},route:function(a,c){this.handlers.unshift({route:a,callback:c})},checkUrl:function(a){a=this.getFragment();a===this.fragment&&this.iframe&&(a=this.getFragment(this.getHash(this.iframe)));if(a===this.fragment)return!1;
this.iframe&&this.navigate(a);this.loadUrl()||this.loadUrl(this.getHash())},loadUrl:function(a){var c=this.fragment=this.getFragment(a);return n.any(this.handlers,function(a){if(a.route.test(c))return a.callback(c),!0})},navigate:function(a,c){if(!P.started)return!1;c&&!0!==c||(c={trigger:c});a=this.getFragment(a||"");if(this.fragment!==a){this.fragment=a;var d=this.root+a;if(this._hasPushState)this.history[c.replace?"replaceState":"pushState"]({},document.title,d);else if(this._wantsHashChange)this._updateHash(this.location,
a,c.replace),this.iframe&&a!==this.getFragment(this.getHash(this.iframe))&&(c.replace||this.iframe.document.open().close(),this._updateHash(this.iframe.location,a,c.replace));else return this.location.assign(d);c.trigger&&this.loadUrl(a)}},_updateHash:function(a,c,d){d?(d=a.href.replace(/(javascript:|#).*$/,""),a.replace(d+"#"+c)):a.hash="#"+c}});u.history=new P;C.extend=F.extend=p.extend=f.extend=P.extend=function(a,c){var d=this,f;f=a&&n.has(a,"constructor")?a.constructor:function(){return d.apply(this,
arguments)};n.extend(f,d,c);var h=function(){this.constructor=f};h.prototype=d.prototype;f.prototype=new h;a&&n.extend(f.prototype,a);f.__super__=d.prototype;return f};var Z=function(){throw Error('A "url" property or function must be specified');},aa=function(a,c){var d=c.error;c.error=function(f){d&&d(a,f,c);a.trigger("error",a,f,c)}}}).call(this);
(function(a){a(_,Backbone)})(function(a,c){function f(c){var l={},q=r.keyPathSeparator,u;for(u in c){var A=c[u];if(A&&A.constructor===Object&&!a.isEmpty(A)){var A=f(A),B;for(B in A)l[u+q+B]=A[B]}else l[u]=A}return l}function l(c,f,l){f=f.split(r.keyPathSeparator);l||!1===l;for(var n=0,q=f.length;n<q;n++){if(l&&!a.has(c,f[n]))return!1;c=c[f[n]];null==c&&n<q-1&&(c={});if("undefined"===typeof c)break}return l?!0:c}function q(c,f,l,q){q=q||{};f=f.split(r.keyPathSeparator);for(var n=0,B=f.length;n<B&&
void 0!==c;n++){var u=f[n];n===B-1?q.unset?delete c[u]:c[u]=l:("undefined"!==typeof c[u]&&a.isObject(c[u])||(c[u]={}),c=c[u])}}var r=c.Model.extend({constructor:function(c,f){var l,n=c||{};this.cid=a.uniqueId("c");this.attributes={};f&&f.collection&&(this.collection=f.collection);f&&f.parse&&(n=this.parse(n,f)||{});if(l=a.result(this,"defaults"))n=a.deepExtend({},l,n);this.set(n,f);this.changed={};this.initialize.apply(this,arguments)},toJSON:function(c){return a.deepClone(this.attributes)},get:function(a){return l(this.attributes,
a)},set:function(c,n,x){var u,A,B,C,z,F,K;if(null==c)return this;"object"===typeof c?(A=c,x=n||{}):(A={})[c]=n;x||(x={});if(!this._validate(A,x))return!1;B=x.unset;z=x.silent;C=[];F=this._changing;this._changing=!0;F||(this._previousAttributes=a.deepClone(this.attributes),this.changed={});K=this.attributes;c=this._previousAttributes;this.idAttribute in A&&(this.id=A[this.idAttribute]);A=f(A);for(u in A)n=A[u],a.isEqual(l(K,u),n)||C.push(u),a.isEqual(l(c,u),n)?q(this.changed,u,null,{unset:!0}):q(this.changed,
u,n),B?q(K,u,null,{unset:!0}):q(K,u,n);if(!z)for(C.length&&(this._pending=!0),n=r.keyPathSeparator,u={},A=0,B=C.length;A<B;A++){c=C[A];u.hasOwnProperty(c)&&u[c]||(u[c]=!0,this.trigger("change:"+c,this,l(K,c),x));c=c.split(n);for(var H=c.length-1;0<H;H--){var G=a.first(c,H).join(n),O=G+n+"*";u.hasOwnProperty(O)&&u[O]||(u[O]=!0,this.trigger("change:"+O,this,l(K,G),x));u.hasOwnProperty(G)&&u[G]||(u[G]=!0,this.trigger("change:"+G,this,l(K,G),x))}}if(F)return this;if(!z)for(;this._pending;)this._pending=
!1,this.trigger("change",this,x);this._changing=this._pending=!1;return this},clear:function(c){var l={},q=f(this.attributes),r;for(r in q)l[r]=void 0;return this.set(l,a.extend({},c,{unset:!0}))},hasChanged:function(c){return null==c?!a.isEmpty(this.changed):void 0!==l(this.changed,c)},changedAttributes:function(c){if(!c)return this.hasChanged()?f(this.changed):!1;var l=this._changing?this._previousAttributes:this.attributes;c=f(c);var l=f(l),q,r=!1,u;for(u in c)a.isEqual(l[u],q=c[u])||((r||(r={}))[u]=
q);return r},previous:function(a){return null!=a&&this._previousAttributes?l(this._previousAttributes,a):null},previousAttributes:function(){return a.deepClone(this._previousAttributes)}});r.keyPathSeparator=".";c.DeepModel=r;"undefined"!=typeof module&&(module.exports=r);return c});
(function(){var a,c,f,l;c=window.device;a={};window.device=a;l=window.navigator.userAgent.toLowerCase();a.safari=function(){return f("safari")&&!a.chrome()};a.chrome=function(){return f("chrome")};a.ios=function(){return a.iphone()||a.ipod()||a.ipad()};a.iphone=function(){return!a.windows()&&f("iphone")};a.ipod=function(){return f("ipod")};a.ipad=function(){return f("ipad")};a.chromeIOS=function(){return f("crios")};a.android=function(){return!a.windows()&&f("android")};a.androidPhone=function(){return a.android()&&
f("mobile")};a.androidTablet=function(){return a.android()&&!f("mobile")};a.blackberry=function(){return f("blackberry")||f("bb10")||f("rim")};a.blackberryPhone=function(){return a.blackberry()&&!f("tablet")};a.blackberryTablet=function(){return a.blackberry()&&f("tablet")};a.windows=function(){return f("windows")};a.windowsPhone=function(){return a.windows()&&f("phone")};a.windowsTablet=function(){return a.windows()&&f("touch")&&!a.windowsPhone()&&!f("trident")};a.fxos=function(){return(f("(mobile;")||
f("(tablet;"))&&f("; rv:")};a.fxosPhone=function(){return a.fxos()&&f("mobile")};a.fxosTablet=function(){return a.fxos()&&f("tablet")};a.meego=function(){return f("meego")};a.cordova=function(){return window.cordova&&"file:"===location.protocol};a.nodeWebkit=function(){return"object"===typeof window.process};a.mobile=function(){return a.androidPhone()||a.iphone()||a.ipod()||a.windowsPhone()||a.blackberryPhone()||a.fxosPhone()||a.meego()};a.tablet=function(){return a.ipad()||a.androidTablet()||a.blackberryTablet()||
a.windowsTablet()||a.fxosTablet()};a.desktop=function(){return!a.tablet()&&!a.mobile()};a.television=function(){var a,c="googletv viera smarttv internet.tv netcast nettv appletv boxee kylo roku dlnadoc roku pov_tv hbbtv ce-html".split(" ");for(a=0;a<c.length;){if(f(c[a]))return!0;a++}return!1};a.portrait=function(){return 1<window.innerHeight/window.innerWidth};a.landscape=function(){return 1>window.innerHeight/window.innerWidth};a.noConflict=function(){window.device=c;return this};f=function(a){return-1!==
l.indexOf(a)}}).call(this);
var config=parent.jivo_config,jivo=parent.jivo,machina=function(a,c){var f=[].slice,l={makeFsmNamespace:function(){var a=0;return function(){return"fsm."+a++}}(),getDefaultOptions:function(){return{initialState:"uninitialized",eventListeners:{"*":[]},states:{},eventQueue:[],namespace:l.makeFsmNamespace(),targetReplayState:"",state:c,priorState:c,_priorAction:"",_currentAction:""}}};if(!a.deepExtend){var q={"*":function(a,c,f){a[c]=f},object:function(a,c,f){a[c]=u({},a[c]||{},f)},array:function(c,
f,l){c[f]=[];a.each(l,function(a,l){q[r(a)](c[f],l,a)},this)}},r=function(c){c=a.isArray(c)?"array":a.isDate(c)?"date":a.isRegExp(c)?"regex":typeof c;return q[c]?c:"*"},u=function(c){a.each(f.call(arguments,1),function(f){a.each(f,function(a,f){q[r(a)](c,f,a)})});return c};a.mixin({deepExtend:u})}var n=function(c){a.extend(this,c);a.defaults(this,l.getDefaultOptions());this.initialize.apply(this,arguments);A.emit("newfsm",this);this.initialState&&this.transition(this.initialState)};a.extend(n.prototype,
{initialize:function(){},emit:function(c){var l=arguments;this.eventListeners["*"]&&a.each(this.eventListeners["*"],function(a){try{a.apply(this,f.call(l,0))}catch(F){reportException(F),log(F.message)}},this);this.eventListeners[c]&&a.each(this.eventListeners[c],function(a){try{a.apply(this,f.call(l,1))}catch(F){reportException(F),log(F.message)}},this)},handle:function(l){if(!this.inExitHandler){var n=this.states,q=this.state,r=f.call(arguments,0),u,B;this.currentActionArgs=r;n[q][l]||n[q]["*"]||
this["*"]?(u=n[q][l]?l:"*",B="*"===u,n[q][u]?(n=n[q][u],q=q+"."+u):(n=this["*"],q="*"),this._currentAction||(this._currentAction=q),this.emit.call(this,"handling",{inputType:l,args:r.slice(1)}),a.isFunction(n)&&(n=n.apply(this,B?r:r.slice(1))),a.isString(n)&&this.transition(n),this.emit.call(this,"handled",{inputType:l,args:r.slice(1)}),this._priorAction=this._currentAction,this._currentAction="",this.processQueue("handler")):this.emit.call(this,"nohandler",{inputType:l,args:r.slice(1)});this.currentActionArgs=
c}},transition:function(a){if(!this.inExitHandler&&a!==this.state){var c;if(this.states[a]){this.targetReplayState=a;this.priorState=this.state;this.state=a;c=this.priorState;this.states[c]&&this.states[c]._onExit&&(this.inExitHandler=!0,this.states[c]._onExit.call(this),this.inExitHandler=!1);this.emit.call(this,"transition",{fromState:c,action:this._currentAction,toState:a});if(this.states[a]._onEnter)try{this.states[a]._onEnter.call(this)}catch(z){reportException(z),log(z.message)}this.targetReplayState===
a&&this.processQueue("transition")}else this.emit.call(this,"invalidstate",{state:this.state,attemptedState:a})}},processQueue:function(c){c=a.filter(this.eventQueue,"transition"===c?function(a){return"transition"===a.type&&(!a.untilState||a.untilState===this.state)}:function(a){return"handler"===a.type},this);this.eventQueue=a.difference(this.eventQueue,c);a.each(c,function(a){this.handle.apply(this,a.args)},this)},clearQueue:function(c,f){if(c){var l;"transition"===c?l=function(a){return"transition"===
a.type&&(f?a.untilState===f:!0)}:"handler"===c&&(l=function(a){return"handler"===a.type});this.eventQueue=a.filter(this.eventQueue,l)}else this.eventQueue=[]},deferUntilTransition:function(a){this.currentActionArgs&&(a={type:"transition",untilState:a,args:this.currentActionArgs},this.eventQueue.push(a),this.emit.call(this,"deferred",{state:this.state,queuedArgs:a}))},deferUntilNextHandler:function(){if(this.currentActionArgs){var a={type:"transition",args:this.currentActionArgs};this.eventQueue.push(a);
this.emit.call(this,"deferred",{state:this.state,queuedArgs:a})}},on:function(a,c){var f=this;f.eventListeners[a]||(f.eventListeners[a]=[]);f.eventListeners[a].push(c);return{eventName:a,callback:c,off:function(){f.off(a,c)}}},off:function(c,f){c?this.eventListeners[c]&&(this.eventListeners[c]=f?a.without(this.eventListeners[c],f):[]):this.eventListeners={}}});n.prototype.trigger=n.prototype.emit;var x=function(){},y=function(c,f,l){var n;n=f&&f.hasOwnProperty("constructor")?f.constructor:function(){c.apply(this,
arguments)};a.deepExtend(n,c);x.prototype=c.prototype;n.prototype=new x;f&&a.deepExtend(n.prototype,f);l&&a.deepExtend(n,l);n.prototype.constructor=n;n.__super__=c.prototype;return n};n.extend=function(a,c){var f=y(this,a,c);f.extend=this.extend;return f};var A={Fsm:n,utils:l,on:function(a,c){this.eventListeners[a]||(this.eventListeners[a]=[]);this.eventListeners[a].push(c);return c},off:function(c,f){this.eventListeners[c]&&(this.eventListeners[c]=a.without(this.eventListeners[c],f))},trigger:function(c){var l=
arguments,n=this.eventListeners[c]||[];n&&n.length&&a.each(n,function(a){a.apply(null,f.call(l,1))})},eventListeners:{newFsm:[]}};A.emit=A.trigger;return A}(_);
(function(a){var c=a.setTimeout,f=a.document,l=0;a.jivoXHR=function(){function q(){try{A.parentNode.removeChild(A)}catch(C){}}function r(a){try{B.onerror.call(B,a,x)}catch(z){throw Error(a);}}function u(){this.readyState&&"complete"!==this.readyState&&"loaded"!==this.readyState||y||(this.onload=this.onreadystatechange=null,y=!0,4!==B.readyState&&r("Script failed to load ["+x+"]."),q())}function n(a){a=a||[];B.readyState=4;B.status=200;"function"===typeof B.onload&&B.onload.apply(B,a)}var x,y,A,B=
null,B={onerror:null,onload:null,readyState:0,open:function(c,f){y=!1;x="";q();A=null;var u="cb"+l++;(function(c){a.jivoXHR[c]=function(){try{n.call(B,arguments)}catch(H){B.readyState=-1,r(H.message)}a.jivoXHR[c]=null}})(u);x=f.replace(/=\?/,"=jivoXHR."+u)},send:function(){c(function(){A=f.createElement("script");A.setAttribute("type","text/javascript");A.charset="UTF-8";A.onload=A.onreadystatechange=function(){u.call(A)};A.setAttribute("src",x);f.getElementsByTagName("head")[0].appendChild(A)},0)},
abort:function(){},setRequestHeader:function(){},getResponseHeader:function(){return""},getAllResponseHeaders:function(){return[]}};y=!1;x="";q();A=null;return B}})(window);
machina.on("newfsm",function(a){a.on("handling",function(a){log(this.namespace+": handling "+a.inputType+" in state "+this.state)});a.on("nohandler",function(a){log(this.namespace+": unhandled "+a.inputType+" in state "+this.state)});a.on("transition",function(a){log([this.namespace+":","transition from:",a.fromState,"to:",a.toState,"action:",a.action].join(" "))})});
var TimeMachine=machina.Fsm.extend({_fireEvent:function(a){delete this._scheduled_events[a];this.handle(a)},_scheduleEvent:function(a,c){a in this._scheduled_events?log(this.namespace+": attempt to re-schedule event"+a):(log(this.namespace+": scheduling "+a+" for "+c),this._scheduled_events[a]=setTimeout(underscore.bind(this._fireEvent,this,a),c))},_cancelEvent:function(a){a in this._scheduled_events?(clearTimeout(this._scheduled_events[a]),delete this._scheduled_events[a]):log(this.namespace+": attempt to cancel not scheduled event",
a)},constructor:function(){this._scheduled_events={};machina.Fsm.apply(this,arguments)}}),VOXIMPLANT_URL="//cdn.voximplant.com/voximplant.min.js",WebPhone=machina.Fsm.extend({namespace:"WP",autoCall:!1,agentId:"",states:{uninitialized:{call:function(){this.autocall=!0;this.transition("initializing")},init:function(){this.transition("initializing")}},initializing:{_onEnter:function(){loadScript(VOXIMPLANT_URL,underscore.bind(this.handle,this,"script_loaded"),underscore.bind(this.handle,this,"script_load_error"))},
script_loaded:function(){this.emit("WebPhoneInitializing",{name:"WebPhoneInitializing"});this.vox=VoxImplant.getInstance();this.vox.init({useFlashOnly:!1,micRequired:!0,swfContainer:"rtc_placeholder",progressTone:!0});this.vox.addEventListener(VoxImplant.Events.SDKReady,underscore.bind(this.handle,this,"vox_init"))},script_load_error:function(a){reportException({message:"Error loading voximplant script",fileName:"web_phone.js"})},vox_init:function(){this.transition("connecting")},call:function(){this.autocall=
!0}},initialized:{_onEnter:function(){this.emit("WebPhoneInitialized",{name:"WebPhoneInitialized"})},call:function(){this.autocall=!0;this.transition("connecting")},init:function(){this.transition("connecting")}},connecting:{_onEnter:function(){this.emit("WebPhoneConnecting",{name:"WebPhoneConnecting"});this.vox.connect();this.vox.addEventListener(VoxImplant.Events.MicAccessResult,underscore.bind(function(a){a.result||this.handle("vox_mic_access_denied")},this));this.vox.addEventListener(VoxImplant.Events.ConnectionEstablished,
underscore.bind(function(a){this.handle("vox_connected")},this));this.vox.addEventListener(VoxImplant.Events.ConnectionFailed,underscore.bind(function(a){this.handle("vox_connection_failed")},this));this.vox.addEventListener(VoxImplant.Events.ConnectionClosed,underscore.bind(function(a){this.handle("vox_connection_closed")},this))},vox_connected:function(){this.transition("authenticating")},vox_connection_failed:function(){this.transition("initialized")},vox_connection_closed:function(){this.transition("initialized")},
vox_mic_access_denied:function(){this.transition("mic_disabled")},call:function(){this.autocall=!0},hangup:function(){this.transition("initialized")}},connected:{_onEnter:function(){this.emit("WebPhoneConnected",{name:"WebPhoneConnected"})},call:function(){this.autocall=!0;this.transition("authenticating")},init:function(){this.transition("authenticating")}},authenticating:{_onEnter:function(){this.emit("WebPhoneAuthenticating",{name:"WebPhoneAuthenticating"});this.vox.addEventListener(VoxImplant.Events.AuthResult,
underscore.bind(function(a){a.result?this.handle("vox_authenticated"):302==a.code?this.handle("vox_key_received",a.key):this.handle("vox_authentication_failed")},this));this.vox.requestOneTimeLoginKey(config.vox_login)},vox_key_received:function(a){getJSONP(config.base_url+"/script/sign?cb=?&key="+a,underscore.bind(function(a){a.result?this.handle("vox_hash_received",a.hash):this.handle("vox_authentication_failed")},this))},vox_hash_received:function(a){this.vox.loginWithOneTimeKey(config.vox_login,
a)},vox_authenticated:function(){this.autocall?this.transition("progressing"):this.transition("idle")},vox_authentication_failed:function(){this.transition("connected")},call:function(){this.autocall=!0},hangup:function(){this.transition("connected")}},idle:{_onEnter:function(){var a="WebPhoneIdle";"authenticating"===this.priorState&&(a="WebPhoneAuthenticated");this.emit(a,{name:a})},call:function(){this.transition("progressing")},disconnect:function(){this.vox.disconnect();this.transition("initialized")}},
progressing:{_onEnter:function(){this.emit("WebPhoneProgressing",{name:"WebPhoneProgressing"});this.voxCall=this.vox.call(this.agentId,!1,"",{"X-jv-sessid":cookie("sess_id")});this.voxCall.addEventListener(VoxImplant.CallEvents.Connected,underscore.bind(function(a){this.handle("vox_call_connected")},this));this.voxCall.addEventListener(VoxImplant.CallEvents.Failed,underscore.bind(function(a){this.handle("vox_call_failed")},this));this.voxCall.addEventListener(VoxImplant.CallEvents.Disconnected,underscore.bind(function(a){this.handle("vox_call_disconnected")},
this))},vox_call_connected:function(){this.transition("joined")},vox_call_failed:function(){this.transition("idle")},hangup:function(){this.voxCall.hangup();this.transition("idle")}},joined:{_onEnter:function(){this.emit("WebPhoneJoined",{name:"WebPhoneJoined"})},vox_call_disconnected:function(){this.transition("idle")},hangup:function(){this.voxCall.hangup();this.transition("idle")}},mic_disabled:{_onEnter:function(){this.emit("WebPhoneMicDisabled",{name:"WebPhoneMicDisabled"})}}},setAgentId:function(a){this.agentId=
a}});"object"!==typeof JSON&&(JSON={});
(function(){function a(a){return 10>a?"0"+a:a}function c(a){q.lastIndex=0;return q.test(a)?'"'+a.replace(q,function(a){var c=n[a];return"string"===typeof c?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function f(a,l){var n,q,y,A,K=r,H,G=l[a];G&&"object"===typeof G&&"function"===typeof G.toJSON&&(G=G.toJSON(a));"function"===typeof x&&(G=x.call(l,a,G));switch(typeof G){case "string":return c(G);case "number":return isFinite(G)?String(G):"null";case "boolean":case "null":return String(G);
case "object":if(!G)return"null";r+=u;H=[];if("[object Array]"===Object.prototype.toString.apply(G)){A=G.length;for(n=0;n<A;n+=1)H[n]=f(n,G)||"null";y=0===H.length?"[]":r?"[\n"+r+H.join(",\n"+r)+"\n"+K+"]":"["+H.join(",")+"]";r=K;return y}if(x&&"object"===typeof x)for(A=x.length,n=0;n<A;n+=1)"string"===typeof x[n]&&(q=x[n],(y=f(q,G))&&H.push(c(q)+(r?": ":":")+y));else for(q in G)Object.prototype.hasOwnProperty.call(G,q)&&(y=f(q,G))&&H.push(c(q)+(r?": ":":")+y);y=0===H.length?"{}":r?"{\n"+r+H.join(",\n"+
r)+"\n"+K+"}":"{"+H.join(",")+"}";r=K;return y}}"function"!==typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+a(this.getUTCMonth()+1)+"-"+a(this.getUTCDate())+"T"+a(this.getUTCHours())+":"+a(this.getUTCMinutes())+":"+a(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()});var l=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
q=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,r,u,n={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},x;"function"!==typeof JSON.stringify&&(JSON.stringify=function(a,c,l){var n;u=r="";if("number"===typeof l)for(n=0;n<l;n+=1)u+=" ";else"string"===typeof l&&(u=l);if((x=c)&&"function"!==typeof c&&("object"!==typeof c||"number"!==typeof c.length))throw Error("JSON.stringify");return f("",{"":a})});
"function"!==typeof JSON.parse&&(JSON.parse=function(a,c){function f(a,l){var n,q,r=a[l];if(r&&"object"===typeof r)for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(q=f(r,n),void 0!==q?r[n]=q:delete r[n]);return c.call(a,l,r)}var n;a=String(a);l.lastIndex=0;l.test(a)&&(a=a.replace(l,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return n=eval("("+a+")"),"function"===typeof c?f({"":n},""):n;throw new SyntaxError("JSON.parse");})})();var underscore=_.noConflict(),devicejs=device.noConflict();underscore.templateSettings.interpolate=/\{\{(.+?)\}\}/g;var appVersion=navigator.appVersion,ie8=-1!==appVersion.indexOf("MSIE 8."),ie9=-1!==appVersion.indexOf("MSIE 9."),ie=-1!==appVersion.indexOf("MSIE");
function addListener(a,c,f){a.addEventListener?a.addEventListener(c,f,!1):a.attachEvent&&(a.attachEvent("on"+c,function(a){return function(){f.call(a,window.event)}}(a)),a=null)}function removeEvent(a,c,f){if(window.removeEventListener)a.removeEventListener(c,f,!1);else if(window.detachEvent)a.detachEvent("on"+c,function(){f.call(a)});else return!1}
function loadScript(a,c,f){var l=document.createElement("script");l.type="text/javascript";l.readyState?l.onreadystatechange=function(){"loaded"==l.readyState||"complete"==l.readyState?(l.onreadystatechange=null,c()):f({target:l,readyState:readyState})}:(l.onload=function(){c()},l.onerror=function(a){f(a)});l.src=a;"undefined"!=typeof log&&log("adding script "+a);document.getElementsByTagName("head")[0].appendChild(l)}
function setIframeLoadCallback(a,c){a.readyState?(log("Using readyState callback"),a.onreadystatechange=function(){if("loaded"==a.readyState||"complete"==a.readyState)a.onreadystatechange=null,c()}):(log("Using onload callback"),a.onload=function(){"about:blank"!=a.contentWindow.location.href&&(c(),a.onload=null)})}
var dateFormat=function(){var a=/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,c=/\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,f=/[^-+\dA-Z]/g,l=function(a,c){a=String(a);for(c=c||2;a.length<c;)a="0"+a;return a};return function(q,r,u){var n=dateFormat;1!=arguments.length||"[object String]"!=Object.prototype.toString.call(q)||/\d/.test(q)||(r=q,q=void 0);"string"===typeof q&&isNaN(new Date(q))&&
(q=q.replace(/-/g,"/").replace("T"," ").split(".").shift()+"Z");q=q?new Date(q):new Date;if(isNaN(q))throw SyntaxError("invalid date");r=String(n.masks[r]||r||n.masks["default"]);"UTC:"==r.slice(0,4)&&(r=r.slice(4),u=!0);var x=u?"getUTC":"get",y=q[x+"Date"](),A=q[x+"Day"](),B=q[x+"Month"](),C=q[x+"FullYear"](),z=q[x+"Hours"](),F=q[x+"Minutes"](),K=q[x+"Seconds"](),x=q[x+"Milliseconds"](),H=u?0:q.getTimezoneOffset(),G={d:y,dd:l(y),ddd:n.i18n.dayNames[A],dddd:n.i18n.dayNames[A+7],m:B+1,mm:l(B+1),mmm:n.i18n.monthNames[B],
mmmm:n.i18n.monthNames[B+12],yy:String(C).slice(2),yyyy:C,h:z%12||12,hh:l(z%12||12),H:z,HH:l(z),M:F,MM:l(F),s:K,ss:l(K),l:l(x,3),L:l(99<x?Math.round(x/10):x),t:12>z?"a":"p",tt:12>z?"am":"pm",T:12>z?"A":"P",TT:12>z?"AM":"PM",Z:u?"UTC":(String(q).match(c)||[""]).pop().replace(f,""),o:(0<H?"-":"+")+l(100*Math.floor(Math.abs(H)/60)+Math.abs(H)%60,4),S:["th","st","nd","rd"][3<y%10?0:(10!=y%100-y%10)*y%10]};return r.replace(a,function(a){return a in G?G[a]:a.slice(1,a.length-1)})}}();
dateFormat.masks={"default":"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};dateFormat.i18n={dayNames:"Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),monthNames:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ")};
var base_langpack={b_onlineCallDefaultText:"Call us for Free!",cw_callAfter:"Call in",cw_callButtonText:"Call back",cw_callFree:"The call is free charge. Powered by JivoChat",cw_chat:"Chat",cw_chatWithOperator:"Chat with agent",cw_close:"Close",cw_code_restrict:"Invalid direction",cw_connecting:"Connecting",cw_enterPhonePlaceholder:"Enter your phone",cw_errInfoText:"Please try to call again or contact us in the live chat",cw_formCenterText:"Did you find what you were looking for?",cw_form_second:"second",
cw_form_secondd:"seconds",cw_form_seconds:"seconds",cw_pickUpPhone:"Please pick up the phone",cw_rate_limit:"The call to the specified number is not possible",cw_repeatCall:"call again",cw_repeatCallAgain:"Call again",cw_reportPlaceholder:"Report the problem, we'll deal!",cw_reportProblem:"report a problem",cw_seconds:"seconds",cw_textSend:"send",cw_thxForCall:"Thank you for the call!",cw_typeInChat:"Chat with us",cw_unableToConnect:"The connection failed?",cw_weCalling:"We are calling you",cw_weRecallAfter:"Call back in",
c_callConnected:"Call established",c_callDisconnected:"Call finished",c_callProcessing:"Calling agent...",defCallformTitle:"Leave your number and we will call you back",defOfflineFormText:"Leave your message in the form below, and we will receive it by e-mail!",defOfflineWidgetLabel:"Send us a message",defOfflineWidgetLabelMobile:"Message",defOnlineWidgetLabel:"Chat with us, we are online!",defOnlineWidgetLabelMobile:"Chat",defRuleInvitationText:"Hello! How may I help you?",defRuleRetaining:"Please wait. All agents are busy right now, but soon someone will get free and help you!",
lblAgentDisconnected:"Agent disconnected",lblCallMe:"Call",lblCaptcha:"Type the text",lblCaptchaError:"Error, please try again",lblChatEnded:"Chat ended",lblChatIsOnline:"Agent is online",lblConnectedToAgent:"Please type your message",lblConnectionLost:"Connection lost. Reconnecting...",lblDeclineFile:"Reject",lblDefaultCobrowseComment:"Please note",lblEnterMessageHere:"Type here and hit <Enter>",lblEnterMessageOrPhoneHere:"Start chat or enter your phone number (we will call you back instantly)",
lblEvaluateCancel:"Cancel",lblEvaluatePlease:"Please rate the service quality",lblEvaluateThanks:"Thank you!",lblHangUp:"Hangup",lblHangUpShort:"Hangup",lblIntroduceButton:"Introduce",lblIntroduceName:"Your name",lblIntroduceRequest:"Please introduce yourself",lblIntroduceRequestBefore:"Introduce Yourself and Chat!",lblLeaveMessage:"Send us a message",lblLookingForFreeAgent:"Connecting...",lblMessageError:"Unfortunately message was not sent due to a technical error",lblMessageHere:"Type here",lblNegative:"Bad",
lblNewMessage:"New message!",lblNoOperators:"Unfortunately, nobody can take the chat at the moment",lblOfflineMessageSend:"Message was sent",lblOperatorsOnline:"Agents are online!",lblPencilHint:"Agent is typing a message",lblPhoneHint:"Click &quot;Allow&quot; to use microphone for the call.\r\nYour web cam will not be used",lblPositive:"Good",lblPwrBy:'Powered by <a href="http://sale-storm.com/_URL_" target="_blank">SaleStorm</a>',lblReceiveFile:"Accept",lblReopenedElseWhere:"Chat opened in another window",
lblReply:"Reply",lblSelectDep:"Select Department",lblSend:"Send",lblSendBefore:"Start Chat",lblSendingFile:"_AGENT_ is sending you file: _FILE_",lblThanks:"Thank you!",lblThankYouMessage:"Thank you for your message! We will contact you as soon as possible",lblTransferred:"Chat was transferred to agent _AGENT_",lblView:"View",lblWaitForOperator:"Please wait for an agent to answer the call...",lblWebPhoneFlashError:"Your Flash plugin version does not support web calls. Please use the chat",lblWebPhoneMicError:"Microphone setup has failed. Please use the chat",
lblWebPhoneNotAvail:"Web calls are unavailable due to connection issues. Please use the chat",lblWebPhoneNotConnected:"Call cannot be established. Please use the chat",lblYourEmail:"Your email",lblYourMessage:"Your message",lblYourPhone:"Your phone",lnkCloseThisWindow:"Close",lnkRestartChat:"Resume",ofl_enterEmail:"Please, enter e-mail",ofl_enterMessage:"Please, enter message",ofl_enterName:"Please, enter your name",ofl_enterValidEmail:"Please, enter valid email",ofl_enterValidPhone:"Please, enter a valid phone number",
seo_copyrightTextNew:'Live Chat Powered by <a href="https://www.ipchat.com/" target="_blank" id="jivosite-copyright" class="jivo-_COLOR_ jivo-en"></a>'};function translate(a){return"custom_langpack"in config&&a in config.custom_langpack?config.custom_langpack[a].replace(/\n/g,"<br />").replace(/'/g,"&#039;"):translate_basic(a)}function translate_basic(a){return a in base_langpack?base_langpack[a].replace(/\n/g,"<br />"):a}
function cookie(a,c,f){"__utmz"!=a&&(a=["jv",a,config.widget_id].join("_"));if(1<arguments.length&&"[object Object]"!==String(c)){"undefined"===typeof f&&(f={});null===c||void 0===c?(log("Clearing COOKIE "+a),f.expires=-1):log("Set COOKIE "+a+" with value "+c);if("number"===typeof f.expires){var l=f.expires,q=f.expires=new Date;q.setDate(q.getDate()+l)}c=String(c);return document.cookie=[encodeURIComponent(a),"=",encodeURIComponent(c),f.expires?"; expires="+f.expires.toUTCString():"",config.cookie_domain&&
!jivo.isSeparateWindow()?"; domain="+config.cookie_domain:"","; path=/"].join("")}f=c||{};q=f.raw?function(a){return a}:decodeURIComponent;return(l=(new RegExp("(?:^|; )"+encodeURIComponent(a)+"=([^;]*)")).exec(document.cookie))?q(l[1]):null}function getJSONP(a,c){}function getJSONPWithData(a,c,f){}var error_sent_cnt=0;
function reportException(a){if(config.disable_error_reporting)log("REPORT",a);else if(!(3<++error_sent_cnt))try{getJSONPWithData("//err.ipsite.com/widget",{widget_id:config.widget_id,message:a.message,url:window.top.location.href,lineNumber:a.lineNumber,fileName:a.fileName},log)}catch(c){log(c.message)}}
function telemetry(a,c){"object"!=typeof c&&(c={});c.event=a;c.widget_id=config.widget_id;c.chat_mode=config.chat_mode;cookie("client_id")&&(c.client_id=cookie("client_id").split(".")[0]);try{getJSONPWithData("//telemetry.ipsite.com/w",c,log)}catch(f){log(f.message)}}
function callWidgetPing(a,c){var f={name:"cw_ping"};cookie("client_id")&&(f.jv_client_id=cookie("client_id"));cookie("sess_id")&&(f.jv_sess_id=cookie("sess_id"));c&&(f=underscore.extend(f,c));getJSONPWithData(chatServerUrl(config.widget_id,config.site_id),f,function(c){"ok"===c.result&&a(c)})}
function setUTMParams(a){a=a.substr(a.indexOf("?")+1).split("&");var c,f,l="";for(f=a.length;f--;)c=a[f].split("="),0<=c[0].indexOf("utm_")&&(c=a[f],l+=(0<l.length?"|":"")+c.substr(c.indexOf("utm_")+4));l&&cookie("utm",l)}function setImplicitGuiMessage(a,c){var f=0,l=c||"";underscore.each(underscore.pairs(a),function(a){10>f&&(l=l+a[0]+": "+a[1]+"; \n",f+=1)});0<f&&jivo.handle("gui_message",l,{implicit:1})}
function highlightUrls(a){return stripBrackets(a).replace(/(\s|"|'|^)((?:(?:http|https|ftp|ftps|mailto):\/\/)?)((?:[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]|[\~\!\#$\%\^\&\*\(\)\+\=\_\-\:\;?\/\[\]\{\}\`\.]|(?:,(?!\s)))*\.(?:\u0440\u0444|com|aero|biz|com|coop|edu|eu|gov|info|int|mil|museum|name|net|org|ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tm|tn|to|tp|tr|tt|tv|tw|tz|travel|xxx|ua|ug|uk|um|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|yu|za|zm|zw)(?:[a-zA-Z\u0430-\u044f\u0410-\u042f0-9]|[\~\!\#$\%\^\&\*\(\)\+\=\_\-\:\;?\/\[\]\{\}\`\.]|(?:,(?!\s)))*)/gim,function(a,
f,l,q){l||(l="http://");a=document.domain;a=a.replace("www.","");a=-1==q.indexOf(a,0)?"_blank":"col_old_page";return f+"<a href='"+l+q+"' target='"+a+"'>"+q+"</a>"})}function nl2br(a){return a.replace(/\n/g,"<br />")}function stripBrackets(a){return underscore.isUndefined(a)?"":a.replace(/</g,"&lt;").replace(/>/g,"&gt;")}var CLASS_LIST_SUPPORTED="classList"in document.documentElement;function splitClasses(a){return underscore.isArray(a)?a:a.replace(/^\s+|\s+$/g,"").split(/\s+/)}
function forceRedraw(a){a.offsetHeight}function getClasses(a){return splitClasses(a.className)}function setClasses(a,c){var f=c.join(" ");a.className!==f&&(a.className=f,forceRedraw(a))}
var hasClass=CLASS_LIST_SUPPORTED?function(a,c){return a.classList.contains(c)}:function(a,c){return""!==a.className&&underscore.contains(getClasses(a),c)},addClass=CLASS_LIST_SUPPORTED?function(a,c){underscore.each(splitClasses(c),function(c){a.classList.add(c)});forceRedraw(a)}:function(a,c){var f=getClasses(a),f=underscore.union(f,splitClasses(c));setClasses(a,f)},removeClass=CLASS_LIST_SUPPORTED?function(a,c){underscore.each(splitClasses(c),function(c){a.classList.remove(c)});forceRedraw(a)}:
function(a,c){var f=getClasses(a),f=underscore.difference(f,splitClasses(c));setClasses(a,f)},toggleClass=CLASS_LIST_SUPPORTED?function(a,c,f){c=underscore.uniq(splitClasses(c));underscore.each(c,function(c){a.classList.toggle(c,f)});forceRedraw(a)}:function(a,c,f){var l=getClasses(a),q=[],r=[];underscore.each(splitClasses(c),function(a){var c=underscore.contains(l,a)?!0!==f&&r:!1!==f&&q;c&&c.push(a)});c=underscore.union(underscore.difference(l,r),q);setClasses(a,c)};
function removeProperty(a,c){a.style.removeProperty?a.style.removeProperty(c):a.style.removeAttribute(c)}function removeElement(a){a.parentNode.removeChild(a)}function prefixedEvent(a,c,f){for(var l=["webkit","moz","MS","o",""],q=0;q<l.length;q++)l[q]||(c=c.toLowerCase()),a.addEventListener(l[q]+c,f,!1)}function css3AnimationIsSupported(){var a=utils.browser,c=a.name;return!!("Firefox"===c&&23<a.mV||"Chrome"===c&&28<a.mV||"Safari"===c&&5<a.mV)}
function switchClasses(a,c,f){removeClass(a,c);addClass(a,f)}function getOffsetRect(a){a=a.getBoundingClientRect();var c=document.body,f=document.documentElement;return{top:Math.round(a.top+(window.pageYOffset||f.scrollTop||c.scrollTop)-(f.clientTop||c.clientTop||0)),left:Math.round(a.left+(window.pageXOffset||f.scrollLeft||c.scrollLeft)-(f.clientLeft||c.clientLeft||0))}}
function getElementPosition(a){var c=a.ownerDocument,f=c.all&&!window.opera,c=f?c.compatMode&&"BackCompat"!=c.compatMode?c.documentElement:c.body:c.defaultView||c.parentWindow,l={left:0,top:0},q;if(a.getBoundingClientRect)l=underscore.extend(l,a.getBoundingClientRect());else for(q=a;q;)l.left+=q.offsetLeft,l.top+=q.offsetTop,q=q.offsetParent;l.width=a.offsetWidth;l.height=a.offsetHeight;l.windowWidth=f?c.clientWidth:c.innerWidth;l.windowHeight=f?c.clientHeight:c.innerHeight;return l}
function setElementPosition(a,c){a.style.cssText+="; top: "+c.top+"px; left : "+c.left+"px; width : "+c.width+"px; height: "+c.height+"px";return this}function setSubstrTitle(a){return a.substr(0,255)}function getConfigContactsAsk(){var a=!0;underscore.each(["name","phone","email"],function(c){config.contacts_settings[c].show&&(a=!1)},this);a&&(config.contacts_ask=2)}
function getIconLocale(){if(void 0===config.iconLocale){var a=underscore.find(["ru_RU","be","kk","uk"],function(a){return a===config.locale});config.iconLocale=a?a:"en"}return config.iconLocale}function getURLParam(a,c){for(var f=(c||window.location||"").search.substring(1).split("&"),l=0;l<f.length;l++){var q=f[l].split("=");if(q[0]==a)return decodeURIComponent(q[1])}}function getByIdFromParent(a){return(a=window.parent.document.getElementById(a))&&$(a)}
function proxy(a,c,f){return a[c].apply(a,f)}
var utils={fields:["client_name","phone","email"],phoneReg:/^\+?[0-9() -]+$/i,showAd:function(){return!(config.options&8&&config.hide_ad)},hideOffline:function(){return 0<config.hide_offline&&config.options&512},isValidValue_phone:function(a){return 5<=a.replace(/\D+/g,"").length&&this.phoneReg.test(a)},isValidValue_mobilePhone:function(a){var c=a.replace(/\D+/g,""),f=-1;-1!==underscore.indexOf(["7","8"],c.charAt(0))?f=11:"9"===c.charAt(0)&&(f=10);return-1!==underscore.indexOf(["7","8","9"],c.charAt(0))&&
c.length===f&&this.phoneReg.test(a)},isValidValue_email:function(a){return 4<=a.length&&/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(a)},isValidValue_name:function(a){return 0<a.length&&100>a.length}};
(function(a){if(!a.browser){a.browser={};a.browser.mozilla=!1;a.browser.webkit=!1;a.browser.opera=!1;a.browser.msie=!1;var c=navigator.userAgent;a.browser.ua=c;a.browser.name=navigator.appName;a.browser.fV=""+parseFloat(navigator.appVersion);a.browser.mV=parseInt(navigator.appVersion,10);var f,l;-1!=(l=c.indexOf("Opera"))?(a.browser.opera=!0,a.browser.name="Opera",a.browser.fV=c.substring(l+6),-1!=(l=c.indexOf("Version"))&&(a.browser.fV=c.substring(l+8))):-1!=(l=c.indexOf("MSIE"))?(a.browser.msie=
!0,a.browser.name="Microsoft Internet Explorer",a.browser.fV=c.substring(l+5)):-1!=c.indexOf("Trident")?(a.browser.msie=!0,a.browser.name="Microsoft Internet Explorer",f=c.indexOf("rv:")+3,a.browser.fV=c.substring(f,f+4)):-1!=(l=c.indexOf("Chrome"))?(a.browser.webkit=!0,a.browser.name="Chrome",a.browser.fV=c.substring(l+7)):-1!=(l=c.indexOf("Safari"))?(a.browser.webkit=!0,a.browser.name="Safari",a.browser.fV=c.substring(l+7),-1!=(l=c.indexOf("Version"))&&(a.browser.fV=c.substring(l+8))):-1!=(l=c.indexOf("AppleWebkit"))?
(a.browser.webkit=!0,a.browser.name="Safari",a.browser.fV=c.substring(l+7),-1!=(l=c.indexOf("Version"))&&(a.browser.fV=c.substring(l+8))):-1!=(l=c.indexOf("Firefox"))?(a.browser.mozilla=!0,a.browser.name="Firefox",a.browser.fV=c.substring(l+8)):(f=c.lastIndexOf(" ")+1)<(l=c.lastIndexOf("/"))&&(a.browser.name=c.substring(f,l),a.browser.fV=c.substring(l+1),a.browser.name.toLowerCase()==a.browser.name.toUpperCase()&&(a.browser.name=navigator.appName));-1!=(c=a.browser.fV.indexOf(";"))&&(a.browser.fV=
a.browser.fV.substring(0,c));-1!=(c=a.browser.fV.indexOf(" "))&&(a.browser.fV=a.browser.fV.substring(0,c));a.browser.mV=parseInt(""+a.browser.fV,10);isNaN(a.browser.mV)&&(a.browser.fV=""+parseFloat(navigator.appVersion),a.browser.mV=parseInt(navigator.appVersion,10));a.browser.version=a.browser.mV}})(utils);function staticUrl(a,c){c||(a+="?rnd=1446137274");return config.static_host?"//"+config.static_host+a:config.base_url+a}
function chatServerUrl(){var a=window.location.protocol+"//";"comet"in config&&(a+=config.comet.host,"https:"==window.location.protocol?"secure_port"in config.comet&&(a+=":"+config.comet.secure_port):"plain_port"in config.comet&&(a+=":"+config.comet.plain_port));return a+"/jsonp/"+underscore.toArray(arguments).join("/")}
var _templates={message:{message:underscore.template("<% if (jivo.isSeparateWindow()) {%>\n<div id='jivo_action'>\n<div id='jivo_close_button' data-action='close'></div>\n</div>\n<% } %>\n<div id='header-avatar' class='header {{ config.widget_font_color }}'>\n<div id='header-avatar-container'>\n<div id='header-animate-container'>\n<div class='info'>\n<div class='agent-name'>{{ header }}</div>\n</div>\n</div>\n</div>\n<div class='clear'></div>\n</div>\n<div class='special-logo'></div>\n<div id='offline-form' class='message<% if (templateData.nologo) {%> nologo<% } %>'>\n<div id='offline-form-inner' class='system-message-container'>\n<div class='description message'>{{ msg }}</div>\n<div id='buttons'></div>\n</div>\n<div id='jivosite-adword' class='<% if (templateData.locale) {%>jivosite-adword-{{ templateData.locale }}<% } %>'>\n<div class='content'>\n{{ templateData.link }}\n</div>\n</div>\n</div>")},offline:{form:underscore.template("<% if (jivo.isSeparateWindow()) {%>\n<div id='jivo_action'>\n<div id='jivo_close_button' data-action='close'></div>\n</div>\n<% } %>\n<div id='header-avatar' class='header {{ config.widget_font_color }}'>\n<div id='header-avatar-container'>\n<div id='header-animate-container'>\n<div class='info'>\n<div class='agent-name'>{{ header }}</div>\n</div>\n</div>\n</div>\n<div class='clear'></div>\n</div>\n<div class='special-logo'></div>\n<div id='offline-form'<% if (nologo) {%> class='nologo'<% } %>>\n<div id='offline-form-inner'>\n<div id='offline-form-fields'>\n<div class='description'>{{ text }}</div>\n<% if (fields.get('message').show()) {%>\n<div class='field-wrapper message'>\n<textarea id='message' maxlength='{{ maxMessageLength }}' class='input-field offline-message' placeholder='{{ translate('lblYourMessage') }}<% if (fields.get('message').required()) {%>*<% } %>'>{{fields.get('message').value()}}</textarea>\n<div id='error-message' class='error-balloon multiline'>{{ translate('ofl_enterMessage') }}</div>\n</div>\n<% } %>\n<% if (fields.get('name').show()) {%>\n<div class='field-wrapper'>\n<input id='name' type='text' class='input-field' placeholder='{{ translate('lblIntroduceName') }}<% if (fields.get('name').required()) {%>*<% } %>' value='{{_.escape(cookie('client_name'))}}'>\n<div id='error-name' class='error-balloon'>{{ translate('ofl_enterName') }}</div>\n</div>\n<% } %>\n<% if (fields.get('phone').show()) {%>\n<div class='field-wrapper'>\n<input id='phone' type='tel' class='input-field' placeholder='{{ translate('lblYourPhone') }}<% if (fields.get('phone').required()) {%>*<% } %>' value='{{ cookie('phone') }}'>\n<div id='error-phone' class='error-balloon'>{{ translate('ofl_enterValidPhone') }}</div>\n</div>\n<% } %>\n<% if (fields.get('email').show()) {%>\n<div class='field-wrapper'>\n<input id='email' type='email' class='input-field' placeholder='{{ translate('lblYourEmail') }}<% if (fields.get('email').required()) {%>*<% } %>' value='{{ cookie('email') }}'>\n<div id='error-email' class='error-balloon'>{{ translate('ofl_enterValidEmail') }}</div>\n</div>\n<% } %>\n<div class='buttons'>\n<div class='left-button'>\n<a id='cancel' class='jivoBtn cancel' href='#'>{{ translate('lblEvaluateCancel') }}</a>\n</div>\n<div>\n<input id='submit' type='button' value='{{ translate('lblSend') }}' class='jivoBtn accept'>\n</div>\n</div>\n<div class='captcha-container'>\n<div class='body'>\n<img src='' alt='captcha code image'>\n<input type='text' class='input-field cap_symbols' value='' placeholder='{{ translate('lblCaptcha') }}'>\n<input id='resend' type='button' class='jivoBtn accept' value='Ok'>\n</div>\n<p><div class='error'>{{ translate('lblCaptchaError') }}</div></p>\n</div>\n<a id='cancelCap' class='jivoBtn cancel' href='#'>{{ translate('lblEvaluateCancel') }}</a>\n<div class='clear'/>\n</div>\n<div id='jivosite-adword' class='<% if (locale) {%>jivosite-adword-{{ locale }}<% } %>'>\n<div class='content'>\n{{ link }}\n</div>\n</div>\n</div>")},
online:{chat:underscore.template("<% if (jivo.isSeparateWindow()) {%>\n<div id='jivo_action'>\n<div id='jivo_close_button' data-action='close'></div>\n</div>\n<% } %>\n<div id='jivosite-iframe-chat'>\n<div id='header-avatar' class='header {{ config.widget_font_color }}'>\n<div id='header-avatar-container'>\n<div id='header-animate-container'>\n<div class='header-animate-info header-animate-first'>\n<div class='avatar'></div>\n<div class='info'>\n<div class='agent-name'>{{ agent.name }}</div>\n<div class='title'>{{ agent.title }}</div>\n</div>\n</div>\n<div class='header-animate-info header-animate-second'>\n<div class='avatar'></div>\n<div class='info'>\n<div class='agent-name'></div>\n<div class='title'></div>\n</div>\n</div>\n</div>\n</div>\n<div class='clear'></div>\n<div class='sound_player'></div>\n</div>\n<div id='chat-body'<% if (templateData.nologo) {%> class='nologo'<% } %>>\n<div id='jivo-chat'>\n<div id='scrollbar-container'>\n<div id='messages-div' class='viewport'>\n<div id='messages-div-outer'>\n<div id='messages-div-inner' class='overview messages-div-inner'>\n<div id='messages-div-inner-clear'></div>\n</div>\n</div>\n<div id='agent-typing'></div>\n</div>\n</div>\n</div>\n<div id='jivosite-adword' class='<% if (templateData.locale) {%>jivosite-adword-{{ templateData.locale }}<% } %>'>\n<div class='content'>\n{{ templateData.link }}\n</div>\n</div>\n<div id='input-div' class='<% if (devicejs.iphone()) {%>input-div-iphone<% } %>'>\n<div class='input-div-table'>\n<div class='td-textarea'>\n<textarea id='input-field' class='<% if (jivo.getCallWidget()) {%>input-field-callwidget<% } %>' name='input-field' maxlength='{{ templateData.maxMessageLength }}' placeholder='{{ templateData.lblEnterMessageHere }}' autocomplete='off'></textarea>\n</div>\n<div class='td-button'>\n<input id='input-button' type='button' value=<% if (jivo.isTablet() && !jivo.isSeparateWindow()) {%>'{{ translate('lblReply') }}'<% } else {%>'{{ translate('lblSend') }}' disabled<% } %> class='jivoBtn accept'>\n</div>\n</div>\n</div>\n</div>\n</div>\n<div class='special-logo'></div>\n<svg id='svg-image-blur'>\n<filter id='blur-effect'>\n<feGaussianBlur stdDeviation='5' />\n</filter>\n</svg>"),
agentMessage:underscore.template("<div class='new-msg-container {{ type }} {{ color }} <% if (history && history === true) {%>new-msg-container-history<% } %>'>\n<div class='pip'></div>\n<div class='new-msg-body {{ type }}'>\n<div class='new-msg-body-inner'>\n<div class='new-msg-text <% if (history && history === true) {%>new-msg-text-history<% } %>'>\n<div class='new-msg-text-inner'>{{ highlightUrls(text) }}</div>\n</div>\n</div>\n</div>\n<div class='new-time'>{{ dateFormat(time, 'H:MM') }}</div>\n</div>"),
clientMessage:underscore.template("<div class='new-msg-container {{ type }} <% if (history && history === true) {%>new-msg-container-history<% } %>'>\n<div class='pip'></div>\n<div class='new-msg-body {{ type }}'>\n<div class='new-msg-body-inner'>\n<div class='new-msg-text <% if (history && history === true) {%>new-msg-text-history<% } %>'>\n<div class='new-msg-text-inner'>{{ nl2br(highlightUrls(text)) }}</div>\n</div>\n</div>\n</div>\n<div class='new-time'>{{ dateFormat(time, 'H:MM') }}</div>\n</div>"),
systemMessage:underscore.template("<div class='new-msg-container {{ type }}'>\n<div class='new-msg-body {{ type }}'>\n<div class='new-msg-body-inner'>\n<div class='new-msg-text'>\n<div class='new-msg-text-inner'>{{ text }}</div>\n</div>\n</div>\n</div>\n</div>"),emptyMessage:underscore.template("<div class='new-msg-container {{ type }}' style='visible:hidden'>\n</div>"),connectionError:underscore.template("<div class='connectionError new-msg-container systemMessage'>\n<div class='new-msg-body systemMessage'>\n<div class='new-msg-body-inner'>\n<div class='new-msg-text'>\n<div class='new-msg-text-inner'>{{ text }}</div>\n</div>\n</div>\n</div>\n</div>"),
cobrowse_highlight:underscore.template("<div class='new-msg-container agentHighlight {{ color }} <% if (history && history === true) {%>new-msg-container-history<% } %>'>\n<div class='pip'></div>\n<div class='new-msg-text <% if (history && history === true) {%>new-msg-text-history<% } %>'>\n<div class='new-msg-text-inner'>{{ highlightUrls(comment) }}</div>\n</div>\n<div class='cobrowse-btn-container'>\n<a href='#' data-url='{{ page_url }}' data-hash='{{ hash }}'>\n<div class='white-cloud'></div>{{ translate('lblView') }}\n</a>\n</div>\n<div class='new-time'>{{ dateFormat(time, 'H:MM') }}</div>\n</div>"),
messageNode:underscore.template("<div class='new-msg-text <% if (history && history === true) {%>new-msg-text-history<% } %>'>\n<div class='new-msg-text-inner'><% if (type !== 'connectionError') {%>{{ highlightUrls(text) }}<% } else { %>{{ text }}<% } %></div>\n</div>"),typing:underscore.template("<div class='agent-typing-wrapper'>\n<div class='agent-typing'>\n{{ translate('lblPencilHint') }}\n</div>\n</div>"),receiveFile:underscore.template("<div class='new-msg-container {{ type }}'>\n<div class='new-msg-body'>\n<div class='new-msg-body-inner'>\n<div class='new-msg-text'>\n<div class='new-msg-text-inner'>{{ translate('lblSendingFile').replace('_FILE_', fileName).replace('_AGENT_', agentName) }}</div>\n</div>\n<div class='evaluation-btn-container'>\n<a href='{{ fileUrl }}' id='receive_file_{{ fileId }}' data-id='{{ fileId }}' data-name='{{ fileName }}' target='_blank' class='button accept'>{{ translate('lblReceiveFile') }}</a>\n<a href='#' class='button decline' data-id='{{ fileId }}' data-name='{{ fileName }}'>{{ translate('lblDeclineFile') }}</a>\n</div>\n</div>\n</div>\n</div>"),
highlight:underscore.template("<div class='new-msg-container {{ type }}'>\n<div class='pip'></div>\n<div class='new-msg-body {{type }}'>\n<div class='new-msg-body-inner'>\n<div class='new-msg-text'>\n<div class='new-msg-text-inner'>{{ text }}</div>\n</div>\n<div class='cobrowse-btn-container'>\n<a href='#' data-href='{{ hash }}'>\n<div class='white-cloud'></div>{{ lblView }}\n</a>\n</div>\n</div>\n</div>\n<div class='new-time'>{{ dateFormat(time, 'H:MM') }}</div>\n</div>"),introduceForm:underscore.template("<div id='introduce-form'<% if (nologo) {%> class='nologo'<% } %>>\n<div id='jivosite-adword' class='<% if (locale) {%>jivosite-adword-{{ locale }}<% } %>'>\n<div class='content'>\n{{ link }}\n</div>\n</div>\n<div id='introduce-avatar'>\n<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABzCAYAAACrQz3mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAADkdJREFUeNrsXQu0VkUVHn4el8fVFAIFcwmCRiBYKd0lj1zx8oFIAipaUGgSxIqHddUkWCVSBMrjQgsVgtQgwgcLFB9Qll5AeabiJSyIWyQqmhYgL3m0P8++9nPunnP/85/HzHDvXmuvH84598ye/Z09s2fPnplaJ06cUNm0bt065RAVErcj7kDcivlc4ibMBcSnEdcmPka8j/gw8b+ZdxHvZN5CvJV4v3KU6jgm7/nE3Yi7MLcL8bcA9Az+91kBzwHQNcylxH93RTm1LLfMBsR9ia8i7k3cwoAMu4lXEj9L/DTxAWfAtIHog7qZfgYxkLbRU8SLi4qKFiVUd/fBpEq0oZ9i4iHE9R1o1Q4RP0I8lYDdXgOmJ/xl9HMX8bV5/PlHxGXsvMCJKWenpsLBgbOzj5R9lMqpw85QQZaDBGepJTtOcKLaEzfKQ47lxJOpnJerJZgk9CX0M5H7w1zpHe6/4JysJt5GCjweo0wZ+mlL3JUdLPTTZ4d4xXPEPyaZNlULMEnYpvRTwn1iLgTLW8J91aukqBMpylqLfr5IfA3xjWy5udDjxN8jWd87ZcEkQWfQz+gcHv2A+6P5pJAtFjlmaIpv4X69cQ5/MpPkH3NKgUkCdqKfOcSXVPEoxnjTiH9DSjhsq+dD9UG/+03i23MY624mHkH1We88mCTcdPqp6ut8jXgCmtI0m9GYmmEMn37KzXEQzaC6jXUSTG6SfkXcKeCxch6OPOESiBpQBxD/nLhNwKMbiG8N6jqsA5MEupp+fk3cVPPIQeJJaFKpYgdjqkxD4i9ws3ch8ZlZXDdrKLOLPyIMIzYSH4mx6g246R3H/5YITtFQqvcK68EkYUbSz+yAR14gHkaV2RFDZb5EfB3x19nTzIQUF4H359m7Lo2j/lQv1AEx5LnE3QMe/T49OztOMDMxAzktAEhETEYR99QBmSPB+bgNY0x2LsbzgD+fuiCIMJD4JWJYynkxAYrgfE+u7yHNY7NYX7FRLJbJ3h0srrPmESh+IFWyLKIDgGHBvcTNE+r+drM1vRnFMn31ac/jzraaP1mLMiu8d6OWSYXj634xAMgnvTpWDWQAIQqznB2qpIAEYVbmMeLWcb2Q6/0VOHmaR6C3F0mPp0ctK45mdhVk1tybxBa5N8L7LyBer9KbQUGTjcD5+8qb9hpMXC8ioOibr+dWRXyEeCUBGqmcSM0sFQ6noatwC7P6t1ElFkQMZ6GJ+r0KFx9Ngt4i/gnxvLDNrFC/oewc1dY0uV1St0wSarIGSLj61+cDpI8+Q7zMAiBB5zAAmMMsjGilC9hKj2ia3GmpgklADqefOzVA9ieBl8agwLlx9l0x0U3cdxdEBHQpD6kkQBElGp4KmBwQmCPcQnt9i24wHJL68NdrI32NOGqrA0Cf4Y/jmHAb+r06UTAJyIs4siPRnSTgwhiUBZkmK7sJIAyIAdAnecws0cPEFyVpmfOVHKLDLPvUmBTVJ2wlDNEU9f8wYdQ+VPp4P8v6jh9Mnv2QguYYP90do5JuVW4QQnbXxvSuuzXjUOh7eqxDE56PXK+J7BRFHEdml9OYozAFjgAKZ6hfmKFJQN0RNHhFeZMFfkLQYUNclik5PId4CLI3RuX0cAhI0BUqpkxC1uMNSo7lzomlmeVUDylD4A4S4I2YlXOZcosKVNXZE2EAhT6LhVsoY0YkMAnIZkrO2UFQfXYCyumk3KNLY37fL1m/fgIOzaJYZolwDZPJwxLKDLjAQTDbxPky1usw1nMueFQNJlnll5WXXuiniRHnI3Xl1VP6zASb6by4X8j6nSjcujGoWQ+yzEnCtZ1hXOWQ1ELFPFmeEp2R0Huns75zwUUPJlkJAr5XCrcQ5TmUkPANlZvUIImXsp7v0HjQXcJYphREf1V5M+ZJUV1HwUxyjSsCCX+WRhI5gUlWeaEmsjEh4XRIV8FMqqWqcIYmCLeAT9tcLPOHwjVkmj/tqlISpoMJv38F699Pt+cC5mDh2n0pJCn/x1Ew303y5az3KcKtIYFgUhOLqR1/eArrHBeloJT/OgpmeQplLGYcsgnRp28EWeZNwoseTWkRz/4Umqwk6J9JF8D6f0S4NUgEk6yyYjMIPy1IQyPcnOyssUwtSXOb12QP6TI+D8lPZaTk10+lr9xVmTkI/4bGs60EppRzsiRlxexwDEh0C39NsTwJj6skMHsJDy5PWTmvOQYm9i74OMXyJDx6nQQm9ZdIafSn/e82oFzXwEx7B6zXGZdsAm6tsy2zm/CHqwwsgMW6jGMOgbkhzcIYj1XCrW7ZYEqZ6avT1gwJ+5Gmk7eRoNhSA+VKuHTNBlNK11hrSEkvOQLmZqHJS4PWCNc+mUXJUH9Zsc1nNsFCthlS0hpHwHzGULlvMj7ZhKB7YUbJW5+UxbnzVUhyZb/Xd0wUyrhIa13bAcyLNV5T+q7hunVtDYxt86USjeOYBkl+RQeA2Uq4YSqshsWormQcYH3lVENlS8GV1gCzpXCj3IBVYhbgSsfGmcg0N7GhsYRPS4D5OeHGvwwIiMFvI8fArKVp2ZKmXcK1cwGmlFj7rgEBDys36aiBMvcI15oCTGl3xg8NeYcunlzwNwNlSvg0BpgFNlgJh6q2OQbk28rbTtWGVqwgo/EeTZ0QsNIxMFcZKlfCpyHArCNYyceGhHzCMTCNyKvBp05G6sBpmFDXkJCId77gCJB/UV4aZOqkwedoRmeyBpX0XeVt42kzITb6bWVuuk7sGgGmlHxs8lwRbHXWlZsw27L10LzhhITLlbwtQFok4XMoo/HGGhtWGvJqsHXoTMvARNwYOTebDMsh4fNBRhMgOMsS5W21DExb5JECPXsApjTB2sISoW2b27RFnnOEa28BzHLhRktLhMaOyrakX8LpedkSWSR8ygGmNN3VyiJrWGaJHAhoHLFElvOFazsAppTe2NEiMB+2RI5HLdJJB+HaloymU2/Ph5zZQMh6+JNhGbAE4SkblMG4SGeSbc0UFRXtFwDFvGJbi77E6YbLf1CZmeqS6POq8rwvJij2V1if1LF3tghMpOWbSv3E0K3EIl1IuHyimwowtYm1FhF2fjRxxBSOhLJpnlVKIivNBlPKzO7FZ1zZQjhuY3bKZa41UGZQfwk8pAVeqz8Fk3eEelsIHHS0zDqLU2xukZqBlck2rX3poCoHdIDb9mzLBEkTrf0sAxMz7Feo5FeLHeG+aZdl9Zfw+BS3bDCfFR68QdlH+1NQMj4aGxf+Sng8J4G5TDPe7GhhpU44/v58+kvsWy/tXb+sEph8jqU0MB5qIZjHqxuYyjvUzk/YaOuAZJmg3wp/MJizzauTZR63zCqh/yHCrcXZ/zkJTLJOgOnPPGii5P2BaprZ9GgQ4+Dv1xdqwWSSAsrFlo05Gzj+/rBjS2kXy0qbPElg3i9cwxrOPhaB2SgFMOtYUtc+Sl5DO61KMKmpxcpcaYuSeyyyzsIUymhoiVXeI9wCPttysUyQtIsiDuseUI3ALLSgngNY77ngI4NJ1olcl+ell9DXUr8GzFSssr4GNOCyJmcwmcYJ15BOMsYwkPDq0kgFNX0sxxglp++M0/2BFkyyTuSG/k64NZ539DJF2Kk6jXHvXcpbTGvCKqHf8cIt4LEpNJhMozSOwQOGnCHMsf4gxbLGGnJ6HtA4YKOC/jYQTLJOTANJs+w9iUemXE8czoK9d9Jc1HSfSv8IyJGsXz8Bhz15g8mAjtaY9hQO/qZBvRnI01JWLKwEJ+SNTqPJJX221zg9m5R8Jls4MJlGaAbWS0iAJBXcgCuHaZ5mhvpotAQ4IS/Rk+lZj48pOfo0Ipd35AQmWSd2b5QW8eDgzgUJ9J/YYweHm2FOsdiUI+IjbHmODPvJcbcQrL/5Sj4IFXrfEBuYDChc5Y2age3PYqoUvNRvsfBIb2yu7CJYDU5jQmoq4qVnxvRe6G+gcH1jmKFgTscUZykbfeQflXe4daUhAwF+f54govkarryFtmcrdwjrTxDwnqW8ldShjymmumNqS8raf5+4O/GWRMDkwhH4lU4fwosGU2UWhnhXZ+4PkA5RT7lLFZv64iDTFaSDYznWv7/y1nzWFm7jZIRQy+xDg8lCDFfyOchIhOpPlVkR8LdwZJC98B0V80GiltCH7MiUkB7KAvSAAw6Waj7iETzWVImDycJMVvJpfgB0EFVkadaz+PIgPI6m6ue4FYYhDCkeUt5BPwez9HGd8rIE6mnGk6PzKSxvMFmoUiVnvh9jy0OTO4ijNher6kv/4OHNPHZ05mmaVuQEd8l7UBwFTAb0FfT7mts4rv50VUMVhJQc3awTTmL4qoqwBjSOZXu9lP5IiBogT6YgIHtTUxxpMW9kMEmAfcrbSmVtDVZ5EfR2Oelxb9QXRW5mfU3udGV+vtMlmkEgjvXp0Jxl+qwUgo2qwSgnGuUHMirFvtSdBJzFA973avASCZGdvqwnZTWYDCiCBj1UyscrOUCItXYn/SRyfnesfWZNPxpIM3myoip92WWZQj+KcejmagriZk8NRYl/0Ilbpu+rQxRkdDUCsoQzNcLoyF7L9Fkpvk5ssvj4KQ4i6tc8LJBOWabvC7xUebP2PSwGBcoJk+XwB+IfcWZGvnpxD8ws4RGoR46qyYVJR5iR6ZBP9h+8918Ql4adnHa2mdU0vauJMS7FjmCYLjJxWA2mogpDAgk55yovbwfyl5rWpXHL1HyZNytv6qyvhU0vtgrAXOQizcdpzDIrgRnlZQlQQ/7qsZU2cmdNbGqMzZVXMiPd8oCylGwH009Yg4E+FluOdVHJbNaIdY9rudnEzlfbXXGhXQPTT8hfRRY4dq7ChrotlXfqIFaJNWGHBs9gVh/ZD/vY0UF8FAcN4DTCcuXlwyILroyfcZL+J8AADxI/P7hyHu8AAAAASUVORK5CYII=' />\n</div>\n<div id='introduce-caption'>{{ translate('lblIntroduceRequest') }}</div>\n<% if (fields.get('name').show()) {%>\n<div class='field-wrapper'>\n<input id='name' type='text' class='input-field' placeholder='{{ translate('lblIntroduceName') }}<% if (fields.get('name').required()) {%>*<% } %>' value='{{_.escape(cookie('client_name'))}}'>\n<div id='error-name' class='error-balloon'>{{ translate('ofl_enterName') }}</div>\n</div>\n<% } %>\n<% if (fields.get('email').show()) {%>\n<div class='field-wrapper'>\n<input id='email' type='email' class='input-field' placeholder='{{ translate('lblYourEmail') }}<% if (fields.get('email').required()) {%>*<% } %>' value='{{ cookie('email') }}'>\n<div id='error-email' class='error-balloon'>{{ translate('ofl_enterValidEmail') }}</div>\n</div>\n<% } %>\n<% if (fields.get('phone').show()) {%>\n<div class='field-wrapper'>\n<input id='phone' type='tel' class='input-field' placeholder='{{ translate('lblYourPhone') }}<% if (fields.get('phone').required()) {%>*<% } %>' value='{{ cookie('phone') }}'>\n<div id='error-phone' class='error-balloon'>{{ translate('ofl_enterValidPhone') }}</div>\n</div>\n<% } %>\n<div class='message field-wrapper'>\n<textarea id='message' class='input-field' placeholder='{{ translate('lblYourMessage') }}<% if (fields.get('message').required()) {%>*<% } %>' maxlength='{{ maxMessageLength }}'><% if (typeof valueInputField !== 'undefined') {%>{{ valueInputField }}<% } %></textarea>\n<div id='error-message' class='error-balloon multiline'>{{ translate('ofl_enterMessage') }}</div>\n</div>\n<% if (departments) { %>\n<div class='departments'>\n<div id='current-department' class='input-field' data-id='{{ departments[0].id }}'>{{ departments[0].name }}</div>\n<ul id='departments-list'>\n<% _.each(departments, function(department) { %>\n<li data-id='{{ department.id }}'>{{ department.name }}</li>\n<% }) %>\n</ul>\n</div>\n<% } %>\n<div class='buttons'><div id='cancel-introduce' class='left-button'><a id='cancel' class='jivoBtn cancel' href='#'>{{ translate('lblEvaluateCancel') }}</a></div><div><input id='submit' type='button' value='{{ send }}' class='jivoBtn accept'></div></div>\n</div>"),
introducePopup:underscore.template("<div id='introduce-popup' style='height: 0'>\n<div id='introduce-popup-content'>\n<% if (config.contacts_ask !== -1) {%><a id='cancel' href='#'></a><% } %>\n<i class='icon-thx'></i>\n<div class='text-field'>{{ translate('lblIntroduceRequest') }}:</div>\n<% if (fields.get('name').show()) {%>\n<div class='field-wrapper'>\n<input id='name' type='text' class='input-field' placeholder='{{ translate('lblIntroduceName') }}<% if (fields.get('name').required()) {%>*<% } %>' value='{{ cookie('client_name') }}'>\n<div id='error-name' class='error-balloon'>{{ translate('ofl_enterName') }}</div>\n</div>\n<% } %>\n<% if (fields.get('email').show()) {%>\n<div class='field-wrapper'>\n<input id='email' type='email' class='input-field' placeholder='{{ translate('lblYourEmail') }}<% if (fields.get('email').required()) {%>*<% } %>' value='{{ cookie('email') }}'>\n<div id='error-email' class='error-balloon'>{{ translate('ofl_enterValidEmail') }}</div>\n</div>\n<% } %>\n<% if (fields.get('phone').show()) {%>\n<div class='field-wrapper'>\n<input id='phone' type='tel' class='input-field' placeholder='{{ translate('lblYourPhone') }}<% if (fields.get('phone').required()) {%>*<% } %>' value='{{ cookie('phone') }}'>\n<div id='error-phone' class='error-balloon'>{{ translate('ofl_enterValidPhone') }}</div>\n</div>\n<% } %>\n<div class='buttons'><input id='submit' type='button' value='{{ send }}' class='jivoBtn accept'></div>\n</div>\n</div>"),
departments:underscore.template("<div id='departments'<% if (nologo) {%> class='nologo'<% } %>>\n<% _.each(departments, function(department) { %>\n<a class='department' data-id='{{ department.id }}'>{{ department.name }}</a>\n<% }) %>\n</div>"),callButton:underscore.template("<div id='callme'><div></div></div>"),evaluation:underscore.template("<div id='evaluation-popup'>\n<div class='evaluation-text'>\n<div class='evaluation-text-inner'>{{ translate('lblEvaluatePlease') }}</div>\n</div>\n<div class='evaluation-btn-container visible'>\n<a href='#' class='button' id='positive'></a>\n<a href='#' class='button' id='negative'></a>\n<a href='#' class='cancel-icon' id='close-eval'></a>\n</div>\n<div class='evaluation-btn-container hidden'>\n<a href='#' class='button' id='cancel'>{{ translate('lblEvaluateCancel') }}</a>\n</div>\n</div>")}};
function log(){if("logs"in config){var a=Array.prototype.slice.call(arguments);if("undefined"!=typeof console&&"function"==typeof console.log)if(window.opera)for(a=0;a<arguments.length;)console.log("Item "+(a+1)+": "+arguments[a]),a++;else 1==a.length&&"string"==typeof a[0]?console.log(a.toString()):console.log(a);else"undefined"!=typeof console&&"object"==typeof console.log&&Function.prototype.call.call(console.log,console,a)}}function hexToR(a){return parseInt(cutHex(a).substring(0,2),16)}
function hexToG(a){return parseInt(cutHex(a).substring(2,4),16)}function hexToB(a){return parseInt(cutHex(a).substring(4,6),16)}function cutHex(a){return"#"==a.charAt(0)?a.substring(1,7):a}function rgbToHex(a,c,f){return toHex(a)+toHex(c)+toHex(f)}function toHex(a){a=parseInt(a,10);if(isNaN(a))return"00";a=Math.max(0,Math.min(a,255));return"0123456789ABCDEF".charAt((a-a%16)/16)+"0123456789ABCDEF".charAt(a%16)}
function adjustLightness(a,c,f){var l=hexToR(a),q=hexToG(a);a=hexToB(a);l=ColorConverter.toHSV(new RGB(l,q,a));l.v=0<l.v?l.v*c:100*(c-1);l.s*=f;c=ColorConverter.toRGB(l);return"#"+rgbToHex(c.r,c.g,c.b)}function getLightness(a){var c=hexToR(a),f=hexToG(a);a=hexToB(a);c=ColorConverter.toHSV(new RGB(c,f,a));log("hsv.v="+c.v);return c.v}function isLightColor(a){return 65<getLightness(a)}
function HSV(a,c,f){0>=a&&(a=0);0>=c&&(c=0);0>=f&&(f=0);360<a&&(a=360);100<c&&(c=100);100<f&&(f=100);this.h=a;this.s=c;this.v=f}function RGB(a,c,f){0>=a&&(a=0);0>=c&&(c=0);0>=f&&(f=0);255<a&&(a=255);255<c&&(c=255);255<f&&(f=255);this.r=a;this.g=c;this.b=f}function CMYK(a,c,f,l){0>=a&&(a=0);0>=c&&(c=0);0>=f&&(f=0);0>=l&&(l=0);100<a&&(a=100);100<c&&(c=100);100<f&&(f=100);100<l&&(l=100);this.c=a;this.m=c;this.y=f;this.k=l}
var ColorConverter={_RGBtoHSV:function(a){var c=new HSV(0,0,0),f=a.r/255,l=a.g/255;a=a.b/255;var q=Math.max(f,l,a),r=q-Math.min(f,l,a);c.v=q;if(0==r)c.h=0,c.s=0;else{c.s=r/q;var u=((q-f)/6+r/2)/r,n=((q-l)/6+r/2)/r,r=((q-a)/6+r/2)/r;f==q?c.h=r-n:l==q?c.h=1/3+u-r:a==q&&(c.h=2/3+n-u);0>c.h&&(c.h+=1);1<c.h&&--c.h}c.h=Math.round(360*c.h);c.s=Math.round(100*c.s);c.v=Math.round(100*c.v);return c},_HSVtoRGB:function(a){var c=new RGB(0,0,0),f=a.h/360,l=a.s/100;a=a.v/100;if(0==l)c.r=255*a,c.g=255*a,c.b=255*
a;else{var q=6*f,r=Math.floor(q),f=a*(1-l),u=a*(1-l*(q-r)),l=a*(1-l*(1-(q-r)));0==r?(r=a,q=l,a=f):1==r?(r=u,q=a,a=f):2==r?(r=f,q=a,a=l):3==r?(r=f,q=u):4==r?(r=l,q=f):(r=a,q=f,a=u);c.r=255*r;c.g=255*q;c.b=255*a;c.r=Math.round(c.r);c.g=Math.round(c.g);c.b=Math.round(c.b)}return c},_CMYKtoRGB:function(a){var c=new RGB(0,0,0),f=a.m/100,l=a.y/100,q=a.k/100;c.r=1-Math.min(1,a.c/100*(1-q)+q);c.g=1-Math.min(1,f*(1-q)+q);c.b=1-Math.min(1,l*(1-q)+q);c.r=Math.round(255*c.r);c.g=Math.round(255*c.g);c.b=Math.round(255*
c.b);return c},_RGBtoCMYK:function(a){var c=new CMYK(0,0,0,0),f=a.r/255,l=a.g/255;a=a.b/255;c.k=Math.min(1-f,1-l,1-a);c.c=(1-f-c.k)/(1-c.k);c.m=(1-l-c.k)/(1-c.k);c.y=(1-a-c.k)/(1-c.k);c.c=Math.round(100*c.c);c.m=Math.round(100*c.m);c.y=Math.round(100*c.y);c.k=Math.round(100*c.k);return c},toRGB:function(a){if(a instanceof RGB)return a;if(a instanceof HSV)return this._HSVtoRGB(a);if(a instanceof CMYK)return this._CMYKtoRGB(a)},toHSV:function(a){if(a instanceof HSV)return a;if(a instanceof RGB)return this._RGBtoHSV(a);
if(a instanceof CMYK)return this._RGBtoHSV(this._CMYKtoRGB(a))},toCMYK:function(a){if(a instanceof CMYK)return a;if(a instanceof RGB)return this._RGBtoCMYK(a);if(a instanceof HSV)return this._RGBtoCMYK(this._HSVtoRGB(a))}};window.onerror=function(a,c,f){reportException({message:a,lineNumber:f,fileName:c})};
var chat_contents={isInit:!1,init:function(a,c,f){log("CHAT_CONTENTS: init",c);this.view_settings={backgroundColor:config.widget_color,borderColor:adjustLightness(config.widget_color,.6,1),isDarkText:"dark"==config.widget_font_color};this.view_settings.isDarkText?(this.view_settings.shadowCss=adjustLightness(this.view_settings.backgroundColor,1.15,.7)+" 0 1px",this.view_settings.textColor=adjustLightness(this.view_settings.backgroundColor,.1,.5)):(this.view_settings.shadowCss=adjustLightness(this.view_settings.backgroundColor,
.6,1)+" 0 -1px",this.view_settings.textColor="#ffffff");"online"===a?(this.isInit||chat_view_online.create(this.view_settings,f),"object"===typeof c&&"call"===c.start&&config.options&128&&(jivo.getCallWidget()?jivo.handle("cw_ping",{title:!1,invitation:"jivo_api.open"}):this.wpInit())):this.isInit||chat_view_offline.create(this.view_settings,f);this.callWidgetButtonInit();this.isInit=!0},updateAgent:function(a){var c={"agent.id":a.agent_id,"agent.avatar":a.avatar_url,"agent.name":a.display_name,"agent.title":a.title,
"agent.vox_name":a.vox_name,"agent.online":!0,"agent.disableAnimation":a.disableAnimation?!0:!1};a.state&&!jivo.getCallWidget()?c["agent.calls"]=a.state.available_for_calls:this.callWidgetButtonInit();chat_view_online.setChatAttr(c)},callInit:function(a){this.callWidgetButtonInit();"object"===typeof a&&"call"===a.start&&(jivo.getCallWidget()?jivo.handle("cw_ping",{title:!1,invitation:"jivo_api.open"}):chat_view_online.getChatModel().get("agent.id")?chat_view_online.getChatModel().get("agent.calls")?
(chat_view_online.getCallView().addMessage(translate("c_callProcessing")),chat_view_online.getCallModel().getWebPhone().handle("call")):chat_view_online.getCallView().addMessage(translate("lblWebPhoneNotConnected")):config.options&128&&this.wpInit())},callWidgetButtonInit:function(){var a=jivo.getCallWidget(),c="online"===config.chat_mode?chat_view_online:chat_view_offline;a&&"CALL"!==a.state&&callWidgetPing(function(a){a=a.show_form?!0:!1;c.setChatAttr({"agent.calls":a,can_enter_phone:a})})},wpInit:function(){var a=
chat_view_online.getCallModel();a.isInit||(this.wp_ready_hook=a.getWebPhone().on("WebPhoneAuthenticated",underscore.bind(this.wpReady,this)),this.wp_fail_hook=a.getWebPhone().on("WebPhoneMicDisabled",underscore.bind(this.wpFail,this)),a.getWebPhone().handle("init"),chat_view_online.addConnectionError(translate("lblWaitForOperator")),a.isInit=!0)},wpReady:function(){this.wp_ready_hook.off();this.wp_fail_hook.off();this.auto_call=!0;jivo.handle("gui_start_call")},wpFail:function(){this.wp_ready_hook.off();
this.wp_fail_hook.off();chat_view_online.addConnectionError(translate("lblWebPhoneMicError"))},handle:function(a,c){log("CHAT_CONTENTS: handling "+a);switch(a){case "agent_typing":chat_view_online.setChatAttr({"agent.typing":c.typing});break;case "agent_message":chat_view_online.setChatAttr({"agent.typing":!1});jivo.isVisitorsInsight()&&chat_view_online.setChatAttr({inputEnabled:!0});c.invitation&&0<$(".agentMessage").length&&chat_view_online.hideInvitationMessage();chat_view_online.addAgentMessage(c.message);
jivo.handle("gui_agent_message_ack",[c.msg_id]);jivo.isVisitorsInsight()&&0<$(".connectionError").length&&chat_view_online.hideConnectionError();break;case "system_message":chat_view_online.addSystemMessage(c.message);break;case "agent_service_message":handleServiceMessage(c);break;case "accept":this.updateAgent(c.agent_info);this.auto_call&&(this.auto_call=!1,chat_view_online.getCallModel().getWebPhone().handle("call"));1===config.contacts_ask&&jivo.invitationText&&chat_view_online.getIntroduceView().close();
config.departments&&chat_view_online.getDepartmentsView().close();break;case "agent_chat_close":var f=[],l=['<input type="button" class="jivoBtn reject reject-chat-btn" id="close-chat-btn" value="'+translate("lnkCloseThisWindow")+'" />'];chat_view_online.hideConnectionError();jivo.isSeparateWindow()||l.unshift('<input type="button" class="jivoBtn accept accept-chat-btn" id="restart-chat-btn" value="'+translate("lnkRestartChat")+'" />');c&&c.reason&&8===c.reason||(f.push(translate("lblAgentDisconnected")),
f.push(l.join("")),chat_view_online.setChatAttr({inputEnabled:!1}),chat_view_online.addConnectionError(f.join("<br>")));chat_view_online.setChatAttr({"agent.calls":!1,"agent.typing":!1});chat_view_online.getCallModel().getWebPhone().handle("disconnect");$(".reject-chat-btn").on("click",function(){jivo.handle("gui_minimize")});$(".accept-chat-btn").on("click",function(){jivo.handle("gui_resume")});break;case "gui_resume":chat_view_online.setChatAttr({inputEnabled:!0});chat_view_online.hideConnectionError();
chat_view_online.chatMaximized();break;case "resume_ok":f=c.agent_info;l=c.client_info;"object"===typeof f&&(f.disableAnimation=!0,this.updateAgent(c.agent_info));chat_view_online.setChatAttr({"client.name":l.name,inputEnabled:!0});f=l.msg_history||[];chat_view_online.resetMessages(f);if(f.length){1===config.contacts_ask&&chat_view_online.getIntroduceView().close();chat_view_online.getDepartmentsView().close();underscore.findWhere(f,{type:"clientMessage"})&&chat_view_online.setChatAttr({can_enter_phone:!1});
var q=[];underscore.each(f,function(a){"agentMessage"!==a.type||a.ack||q.push(a.msg_id)},this);q.length&&setTimeout(function(){jivo.handle("gui_agent_message_ack",q)},0)}break;case "connect_failed":chat_view_online.getCallModel().getWebPhone().handle("disconnect");l=[{title:translate("lblLeaveMessage"),event:"gui_leave_msg"}];utils.hideOffline()&&(l=[{title:translate("lnkCloseThisWindow"),event:"gui_minimize"}]);chat_view_msg.instance.models.message.set({msg:translate("lblNoOperators"),buttons:l});
chat_view_msg.create(this.view_settings);break;case "gui_leave_msg":chat_view_offline.create(this.view_settings);break;case "focus_maximize":"offline"===c?chat_view_offline.getFormView().inputFocus():chat_view_online.chatMaximized();this.callWidgetButtonInit();break;case "show":this.callInit(c);break;case "maximize":chat_view_online.getMessagesView().setScrollBottom(0);this.callInit(c);break;case "gui_message":chat_view_online.addClientMessage(c);break;case "offline_success":chat_view_msg.instance.models.message.set({header:translate("lblOfflineMessageSend"),
msg:translate("lblThankYouMessage"),buttons:[{title:translate("lnkCloseThisWindow"),event:"gui_minimize"}]});chat_view_msg.create(this.view_settings);break;case "offline_captcha":chat_view_offline.captcha(c);break;case "offline_failed":chat_view_msg.instance.models.message.set({header:"An error occured",msg:translate("lblMessageError"),buttons:[{title:translate("lnkCloseThisWindow"),event:"gui_minimize"}]});chat_view_msg.create(this.view_settings);break;case "transferred":chat_view_online.addConnectionError(translate("lblTransferred").replace("_AGENT_",
c.agent_info.display_name));this.updateAgent(c.agent_info);break;case "update_agent_info":this.updateAgent(c.agent_info);break;case "cw_connecting":chat_view_online.getCallView().addMessage(translate("c_callProcessing"));chat_view_online.setChatAttr({can_enter_phone:!1});break;case "cw_connected":chat_view_online.getCallView().addMessage(translate("c_callConnected"));chat_view_online.setChatAttr({can_enter_phone:!1});$("#callme").css("display","none");break;case "cw_call_end":chat_view_online.getCallView().addMessage(translate("c_callDisconnected"));
$("#callme").css("display","block");break;case "cw_show_form":c.show_form||chat_view_online.getCallView().addMessage(translate("lblWebPhoneNotConnected"));break;default:log("CHAT_CONTENTS: unhandled "+a,c)}}};
function handleServiceMessage(a){switch(a.service){case "file_transfer":"receive_file_request"===a.event&&chat_view_online.addReceiveFile({fileUrl:a.file_url,fileName:a.file_name,fileId:a.file_id,state:"pending",agentName:chat_view_online.getChatAttr("agent.name")});break;case "cobrowse":"highlight"===a.event&&chat_view_online.addCobrowseHighlight({page_url:a.page_url,hash:a.hash,comment:stripBrackets(a.comment),state:"pending"});break;default:log("CHAT_CONTENTS: unhandled agent_service_message",
a)}}window.Jivo={Online:{Models:{},Views:{},Collections:{},Controller:{},MAX_MESSAGE_LENGTH:1E3},Offline:{Models:{},Views:{},Collections:{},Controller:{},MAX_MESSAGE_LENGTH:1200},Message:{Models:{},Views:{},Controller:{}},Model:{},View:{},Collection:{}};
Jivo.Model.Field=Backbone.Model.extend({defaults:{formId:"default-form-id"},valid:function(){return!this.required()||0<this.value().length},required:function(){return this.show()&&config.contacts_settings[this.id].required},show:function(){return config.contacts_settings[this.id].show},value:function(){var a=$("#"+this.get("formId")).find("#"+this.id);return 0===a.length?"":$.trim(a.val())}});
Jivo.Model.Email=Jivo.Model.Field.extend({id:"email",valid:function(){var a=this.value();return 0===a.length&&!this.required()||utils.isValidValue_email(a)}});Jivo.Model.Phone=Jivo.Model.Field.extend({id:"phone",valid:function(){var a=this.value();return 0===a.length&&!this.required()||utils.isValidValue_phone(a)}});Jivo.Model.Name=Jivo.Model.Field.extend({id:"name"});Jivo.Model.Message=Jivo.Model.Field.extend({id:"message"});
Jivo.Model.Error=Backbone.Model.extend({defaults:{name:"",messages:[]},idAttribute:"name"});Jivo.Collection.Errors=Backbone.Collection.extend({model:Jivo.Model.Error});
Jivo.View.Form=Backbone.View.extend({events:{"click #submit":"submit","click #cancel":"cancel","keydown input:text,textarea":"onKeyDown"},initialize:function(){this.collection=new Jivo.Collection.Errors;this.collection.on("add",this.onErrorAdd,this);this.collection.on("remove",this.onErrorRemove,this);this.collection.on("reset",this.onReset,this);this.initializeSpecial()},initializeSpecial:function(){},valid:function(){var a=this;a.fields.each(function(c){c.valid()?a.collection.remove(c.id):a.collection.add({name:c.id,
messages:[]})},a);return!a.collection.length},toggleError:function(a,c){c?(this.$("#"+a).parent().addClass("error-field"),this.$("#error-"+a).show()):(this.$("#"+a).parent().removeClass("error-field"),this.$("#error-"+a).hide());jivo.isSeparateWindow()||this.updateHeight()},updateHeight:function(){jivo.handle("update_height",this.getHeight())},getHeight:function(){return 0},onErrorAdd:function(a){this.toggleError(a.get("name"),!0)},onErrorRemove:function(a){this.toggleError(a.get("name"),!1)},onReset:function(a,
c){underscore.each(c.previousModels,function(a){this.toggleError(a.get("name"),!1)},this)},onKeyDown:function(a){var c=$(a.target).attr("id");this.collection.remove(c);13!==a.keyCode||"INPUT"!==a.target.tagName&&("TEXTAREA"!==a.target.tagName||hasClass(a.target,"offline-message"))||(a.preventDefault(),this.submit())}});
Jivo.Online.Models.Chat=Backbone.Model.extend({defaults:{templateData:{pencilTitle:translate("lblPencilHint"),pencilSource:config.base_url+"/images/pencil.gif",callMe:translate("lblCallMe"),hangUp:translate("hangUp"),lblHangUpShort:translate("lblHangUpShort"),lblEvaluatePlease:translate("lblEvaluatePlease"),lblEvaluateThanks:translate("lblEvaluateThanks"),lblEvaluateCancel:translate("lblEvaluateCancel"),link:translate("lblPwrBy").replace("_URL_","?utm_source="+encodeURIComponent(location.hostname)+
"&utm_medium=link&utm_content=offline_form&utm_campaign=self_ad"),nologo:!utils.showAd(),maxMessageLength:Jivo.Online.MAX_MESSAGE_LENGTH,locale:getIconLocale()},client:{id:1,name:cookie("client_name"),phone:cookie("phone"),email:cookie("email"),title:!1,avatar:!1,typing:!1},agent:{id:2,name:translate("lblConnectedToAgent"),title:translate("lblOperatorsOnline"),avatar:!1,calls:!1,typing:!1,online:!1,disableAnimation:!1},can_enter_phone:jivo.getCallWidget()?!0:!1,inputEnabled:!0,evaluate:!1,"size.height":362,
"size.min-height":200,"size.width":287,"textarea.height":32,"textarea.width":226,"position.left":0,"position.right":0,"coordinates.x":0,"coordinates.y":0,"coordinates.dx":0,"coordinates.dy":0},initialize:function(){var a;a=jivo.isMobileOrTablet()?translate("lblMessageHere"):jivo.getCallWidget()?translate("lblEnterMessageOrPhoneHere"):translate("lblEnterMessageHere");this.defaults.templateData.lblEnterMessageHere=a},introduced:null!==cookie("client_name")||null!==cookie("phone")||null!==cookie("email")||
!1});
Jivo.Online.Views.Chat=Backbone.View.extend({el:"#inner-chat",tagName:"div",previousScroll:0,template:_templates.online.chat,headerTimeout:[],events:{"keydown    #input-field":"inputFieldKeyPress","click      #input-button":"inputButtonClick","focusin    #input-field":"inputFieldFocus","input      #input-field":"messageInput"},initialize:function(){this.model.on("change:agent.name",this.setHeaderName,this);this.model.on("change:agent.title",this.setAgentTitle,this);this.model.on("change:agent.typing",this.agentTyping,
this);this.model.on("change:agent.avatar",this.setAgentImage,this);this.model.on("change:client.typing",this.clientTyping,this);this.model.on("change:inputEnabled",this.setInputMode,this);this.model.on("change:agent.calls",this.updateCallMe,this);this.model.on("change:can_enter_phone",this.inputSizeChange,this);1==config.typing_insight&&setInterval(underscore.bind(this.notifyInputChanged,this),1E3)},handleTyping:function(a){this.model.set({"client.typing":a})},lastInputValue:"",notifyInputChanged:function(){var a=
this.$el.find("#input-field").val();this.lastInputValue!=a&&(jivo.handle("gui_typing_insight",a),this.lastInputValue=a)},render:function(){var a=this.$el;a.append(this.template(this.model.toJSON()));this.model.set("agent.name",translate("lblConnectedToAgent"));this.inputAutoResize();if(jivo.isSeparateWindow())a.on("focus blur","input[type=text],input[type=tel],input[type=email],textarea",JivoGui.handleSoftKeyboard);getByIdFromParent("jivo_action").find("div").on("click",function(){if("close"===$(this).attr("data-action")){var a=
jivo.getCallWidget();a&&"CALL"!==a.state&&!a.clickClosedForm?jivo.handle("cw_ping"):chat_view_online.chatMinimized()}});jivo.isMobileOrTablet()||getByIdFromParent("jivo-chat").jivoDragEvent({handler:getByIdFromParent("jivo-drag-handle"),tracker:getByIdFromParent("jivo-mouse-tracker")}).bind("jivo.drag.init",$.proxy(this,"startResize")).bind("jivo.drag.move",$.proxy(this,"resize")).bind("jivo.drag.stop",$.proxy(this,"stopResize"));$("input[placeholder], textarea[placeholder]").placeholder();$(window).on("resize",
underscore.bind(this.windowResize,this));$("#messages-div-outer").on("scroll",underscore.bind(this.messagesScroll,this));if(utils.browser.msie&&9>utils.browser.mV)this.$("#input-field").on("keydown paste",underscore.bind(this.messageInput,this));if(devicejs.ios())$("#messages-div-inner").on("touchmove",function(){var a=$("#input-field");a.is(":focus")&&a.trigger("blur")});this.requestRedraw();1===config.contacts_ask?this.showIntroduceForm(!0):config.departments&&this.showDepartmentsSelector();return this},
inputFocus:function(){var a=this.$el.find("#input-field"),c;setTimeout(function(){c=$("#introduce-form");c.length&&c.is(":visible")||jivo.isSeparateWindow()||a.focus()},0);return a},inputAutoResize:function(){this.$("#input-field").autoResize({extraSpace:jivo.isMobileOrTablet()?12:0,animate:!1,maxSize:65,minSize:"original",onResize:underscore.bind(this.updateMessage,this),onAfterResize:underscore.bind(this.updateMessage,this)}).typing({start:underscore.bind(this.handleTyping,this,1),stop:underscore.bind(this.handleTyping,
this,0),delay:5E3})},setHeaderName:function(){var a=this.$el,c=this.model.get("agent.name"),f=this.model.get("agent.title")?this.model.get("agent.title"):translate("lblOperatorsOnline"),l=a.find("#header-animate-container"),q;for(q=this.headerTimeout.length;q--;)clearTimeout(this.headerTimeout[q]);l.removeClass("header-animate");this.model.get("agent.disableAnimation")?(a.find(".header-animate-info").find(".agent-name").text(c),this.setAgentTitle()):(a.find(".header-animate-first").find(".agent-name").text(c),
a.find(".header-animate-first").find(".title").text(f),this.headerTimeout[0]=setTimeout(function(){l.addClass("header-animate")},0),this.headerTimeout[1]=setTimeout(function(){a.find(".header-animate-second").find(".agent-name").text(c);a.find(".header-animate-second").find(".title").text(f)},400),jivo.isMobileOrTablet()||(this.headerTimeout[2]=setTimeout(function(){l.removeClass("header-animate")},1500)));$("#agent-typing").empty();this.agentTyping()},setAgentTitle:function(){var a=this.model.get("agent.title")?
this.model.get("agent.title"):translate("lblOperatorsOnline");this.$el.find(".title").text(a)},setAgentImage:function(){this.$el.find(".avatar img").remove();config.options&32&&(null!==this.model.get("agent.avatar")?(this.$el.find(".avatar").append($("<img/>",{src:config.avatar_url+"/avatars/"+this.model.get("agent.avatar")})),this.$el.find(".avatar").parent().addClass("has-avatar")):this.$el.find(".avatar").parent().removeClass("has-avatar"))},setInputMode:function(){var a=this.model.get("inputEnabled"),
c=chat_view_online.getMessagesView(),f=c.getScrollBottom();this.$("#input-div").css("visibility",a?"visible":"hidden");this.$("#messages-div").css("bottom",a?40:0);c.setScrollBottom(f)},agentTyping:function(){var a=$("#agent-typing");this.model.get("agent.typing")?(a.is(":empty")&&a.append(_templates.online.typing({agentName:this.model.get("agent.name")})),a.show()):a.hide()},clientTyping:function(){chat_view_online.typing(this.model.get("client.typing"))},inputFieldKeyPress:function(a){13===a.keyCode&&
(a.preventDefault(),this.inputSendMessage(a.currentTarget.value,$(a.currentTarget),$("#input-button")[0]))},inputButtonClick:function(a){if(jivo.isTablet()&&!jivo.isSeparateWindow())a.preventDefault(),jivo.handle("gui_answer_proactive");else{var c=$("#input-field");this.inputSendMessage(c.val(),c,$(a.currentTarget)[0])}},inputSendMessage:function(a,c,f){if(0!==$.trim(a).length){var l=this.model.get("can_enter_phone");this.model.set("can_enter_phone",!1);l&&jivo.getCallWidget()&&!jivo.isMobileOrTablet()&&
utils.isValidValue_mobilePhone(a)?(jivo.handle("cw_ping"),jivo.cw.callwidget.handle("setPhoneNumber",a.replace(/[^0-9]/gim,""))):(chat_view_online.getChatModel().introduced||!jivo.invitationText&&!jivo.isMobileOrTablet()||1!==config.contacts_ask?Jivo.Online.Controller.sendMessage(a):(jivo.isMobileOrTablet()&&c.blur(),this.showIntroduceForm(!1,a)),c.val("").css("height",""),f.disabled=!0,this.updateMessage(),devicejs.ios()&&chat_view_online.initSound())}},inputFieldFocus:function(a){Jivo.Online.Controller.onFocus();
if(devicejs.ios()){var c=$(a.target);c.on("focus",function(){$(document).unbind("scroll.on_focus");setTimeout(function(){$(document).bind("scroll.on_focus",function(a){c.trigger("blur")})},1500)});c.on("blur",function(){$(document).unbind("scroll.on_focus")})}},windowResize:function(){chat_view_online.getMessagesView().setScrollBottom(this.previousScroll)},messagesScroll:function(){this.previousScroll=chat_view_online.getMessagesView().getScrollBottom()},messageInput:function(a){var c=a.currentTarget;
a=a.currentTarget.value;var f=$("#input-button")[0];setTimeout(underscore.bind(function(){var a=$(this).attr("maxlength");$(this).val().length>a&&$(this).val($(this).val().substring(0,a))},c),0);f.disabled=0>=a.length},showIntroduceForm:function(a,c){chat_view_online.getIntroduceView().render(a,c);this.disableDragging()},showDepartmentsSelector:function(){chat_view_online.getDepartmentsView().render();this.disableDragging()},updateCallMe:function(){(chat_view_online.getCallModel().rtcSupported()||
this.hasFlash()||jivo.getCallWidget())&&this.model.get("agent.calls")?(this.$el.find("#callme").css("display","block"),this.$el.find(".title").css("width","75%")):chat_view_online.getCallModel().calling()||(this.$el.find("#callme").css("display","none"),this.$el.find(".title").css("width","100%"))},hasFlash:function(){var a=!1;try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),a=!0}catch(c){navigator.mimeTypes&&void 0!=navigator.mimeTypes["application/x-shockwave-flash"]&&navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin&&
(a=!0)}return a},enableDragging:function(){jivo.isSeparateWindow()||getByIdFromParent("jivo-drag-handle").show()},disableDragging:function(){jivo.isSeparateWindow()||getByIdFromParent("jivo-drag-handle").hide()},toolbarToggle:function(a){if(!jivo.isSeparateWindow()){var c=getByIdFromParent("jivo_close_button");c.finish();"show"===a?c.fadeIn(500):c.fadeOut(500)}},requestRedraw:function(){var a=document.getElementById("inner-chat");a.style.display="none";a.offsetHeight;a.style.display="block"},startResize:function(a){a=
getElementPosition(a.currentTarget);a.minLeft=30;a.maxLeft=a.windowWidth-a.width-30;0<$("#introduce-popup").length?this.model.set("size.min-height",200+$("#introduce-popup").outerHeight()):this.model.set("size.min-height",200);a.minHeight=this.model.get("size.min-height");a.maxHeight=a.windowHeight;chat_view_online.getMessagesView().setScrollBottom(0);this._dragData=a},stopResize:function(a){a=$(a.currentTarget);cookie("left",a.css("left"));cookie("right",a.css("right"));cookie("height",a.css("height"));
delete this._dragData},resize:function(a){var c=this._dragData,f=c.left+a.dx,l=c.height-a.dy,q=$(a.currentTarget),f=Math.max(c.minLeft,Math.min(c.maxLeft,f)),l=Math.max(c.minHeight,Math.min(c.maxHeight,l));f!==a.currentTarget.offsetLeft&&(a=c.windowWidth-c.width-f,c=f<=a,q.css({left:c?f:"auto",right:c?"auto":a}));l!==this.model.get("size.height")&&(l>this.model.get("size.min-height")||l>this.model.get("size.height"))&&(this.model.set("size.height",l),jivo.transferProportion({width:q.css("width"),
height:q.css("height")}),q.css({height:l}),0<=navigator.userAgent.indexOf("Opera")&&this.requestRedraw(),chat_view_online.getMessagesView().setScrollBottom(0))},updateMessage:function(){var a=chat_view_online.getMessagesView(),c=a.getScrollBottom();this.$("#messages-div").css("bottom",this.$("#input-field").outerHeight()+10);a.setScrollBottom(c,!0)},inputSizeChange:function(){var a=this.$("#input-field");a.attr("placeholder",translate("lblEnterMessageHere"));a.removeClass("input-field-callwidget");
a.val("");this.inputAutoResize()}});
Jivo.Online.Views.Evaluation=Backbone.View.extend({el:"#chat-body",template:_templates.online.evaluation,events:{"click .evaluation-btn-container a":"sendRate"},render:function(){this.$el.append(this.template({}));var a=this.$("#evaluation-popup");jivo.gui.animationIsSupported()?a.addClass("jivo-fade-in"):(a.css("opacity","1"),a.show())},sendRate:function(a){function c(a){setTimeout(function(){chat_view_online.getMessagesView().evaluationMessageIsShow=!1},a)}a.preventDefault();var f=a.currentTarget.id,
l;"close-eval"===f?(this.evaluationTimeout=setTimeout(underscore.bind(this.hideEvaluation,this),100),c(400)):(l=translate("lblEvaluate"+("cancel"===f?"Please":"Thanks")),this.$(".evaluation-text-inner").html(l),this.$(".evaluation-btn-container").toggleClass("hidden visible"),"cancel"===f?(this.evaluationTimeout&&clearTimeout(this.evaluationTimeout),f=0):(this.evaluationTimeout=setTimeout(underscore.bind(this.hideEvaluation,this),15E3),c(15300),f="positive"===f?1:-1),chat_view_online.getChatView().inputFocus(),
jivo.handle("gui_evaluation",f,cookie("sess_id")),a.preventDefault())},hideEvaluation:function(){var a=this.$("#evaluation-popup");jivo.gui.animationIsSupported()?(a.removeClass("jivo-fade-in"),a.addClass("jivo-fade-out")):(a.css("opacity","0"),a.hide())}});
var MessageModel=Jivo.Online.Models.Message=Backbone.Model.extend({defaults:function(){return{text:"",time:new Date,delivered:!0,priority:0,color:config.bubble_color}},isAgent:function(){return 0<=underscore.indexOf([MessageModel.TYPE_AGENT,MessageModel.TYPE_COBROWSE_HIGHLIGHT,MessageModel.TYPE_RECEIVE_FILE],this.get("type"))},isClient:function(){return this.get("type")===MessageModel.TYPE_CLIENT},isHistory:function(){return!!this.get("history")},isReceiveFile:function(){return this.get("type")===
MessageModel.TYPE_RECEIVE_FILE},isSystem:function(){return this.get("type")===MessageModel.TYPE_SYSTEM},isConnectionError:function(){return this.get("type")===MessageModel.TYPE_CONNECTION_ERROR}},{TYPE_AGENT:"agentMessage",TYPE_CLIENT:"clientMessage",TYPE_SYSTEM:"systemMessage",TYPE_RECEIVE_FILE:"receiveFile",TYPE_CONNECTION_ERROR:"connectionError",TYPE_COBROWSE_HIGHLIGHT:"cobrowse_highlight"}),MessagesCollection=Jivo.Online.Collections.Messages=Backbone.Collection.extend({model:MessageModel,addMessage:function(a,
c){this.push(underscore.extend({},c,{type:a}));return this},addAgentMessage:function(a){return this.addMessage(MessageModel.TYPE_AGENT,{text:a})},addClientMessage:function(a){return this.addMessage(MessageModel.TYPE_CLIENT,{text:a})},addSystemMessage:function(a){return this.addMessage(MessageModel.TYPE_SYSTEM,{text:a})},addConnectionError:function(a){return this.addMessage(MessageModel.TYPE_CONNECTION_ERROR,{text:a})},addReceiveFile:function(a){return this.addMessage(MessageModel.TYPE_RECEIVE_FILE,
a)},addCobrowseHighlight:function(a){return this.addMessage(MessageModel.TYPE_COBROWSE_HIGHLIGHT,a)}});
Jivo.Online.Views.Message=Backbone.View.extend({el:"#messages-div-inner",$lastMessage:null,$clearDiv:null,scrollBottomThreshold:20,messagesBeforeEvaluation:5,$parent:null,events:{"click .cobrowse-btn-container a":"openHighlight","click .cobrowse-btn-container":"openHighlight","click .receiveFile a":"declineFile"},evaluationMessageIsShow:!1,initialize:function(){this.$lastMessage=this.$(".new-msg-container");this.$clearDiv=this.$("#messages-div-inner-clear");this.$parent=this.$el.parent();this.listenTo(this.collection,
"add",this.handleAdd).listenTo(this.collection,"reset",this.handleReset)},render:function(){this.$parent.perfectScrollbar({topMargin:utils.showAd()?40:25});if(0<=navigator.userAgent.indexOf("Opera")){var a=this;setTimeout(function(){a.collection.add({type:"emptyMessage",time:new Date,history:!1})},200)}},updateScrollBar:function(){this.$parent.perfectScrollbar("update")},getScrollBottom:function(){return parseInt($(this.el).css("bottom"))},setScrollBottom:function(a){$(this.el).css({bottom:-a,top:"auto"});
this.updateScrollBar()},setScrollMobileBottom:function(){document.body.scrollTop=1E4;this.$parent.perfectScrollbar("scroll")},renderMessage:function(a){var c=a.get("type"),f=!a.isConnectionError()&&!a.isSystem()&&!a.isReceiveFile(),l=this.$lastMessage;f&&l&&l.hasClass(c)?(f=_templates.online.messageNode({type:c,text:a.get("text"),history:a.get("history")}),l.find(".new-msg-body-inner").append(f),l.find(".new-time").text(dateFormat(a.get("time"),"H:MM"))):(f=_templates.online[c](a.toJSON()),l=this.$lastMessage=
$(f).insertBefore(this.$clearDiv));setTimeout(function(){if(a.get("history"))updateBlur&&updateBlur();else if("agentMessage"===c||"clientMessage"===c||"cobrowse_highlight"===c)l.find(".new-msg-text").each(function(){var a=$(this);0===a[0].clientHeight&&(a[0].style.height=a.find(".new-msg-text-inner")[0].clientHeight+"px",css3AnimationIsSupported()||(a[0].className+=" new-msg-text-history"))}),l.addClass("new-msg-animate")},0)},isIntroduceRequired:function(){return!chat_view_online.getChatModel().introduced},
isEvaluationRequired:function(){function a(a){return!a.isHistory()&&(a.isClient()||a.isAgent())}return config.show_rate_form&&config.options&64&&!this.evaluationMessageIsShow&&this.collection.filter(a).length>=this.messagesBeforeEvaluation},handleAdd:function(a){a.get("type");var c;c=this.getScrollBottom();this.renderMessage(a);0===c&&(this.updateScrollBar(),updateBlur&&updateBlur());this.trigger("message",this,a);a.isAgent()?jivo.soundPlayer.incomingMessage():a.isClient()&&this.isIntroduceRequired()&&
0>=config.contacts_ask&&chat_view_online.getIntroducePopupView().render();this.isEvaluationRequired()&&!$("#introduce-popup").is(":visible")&&(this.evaluationMessageIsShow=!0,chat_view_online.getEvaluationView().render())},handleReset:function(a){var c=underscore.find(a.toJSON(),function(a){return"clientMessage"===a.type});this.$(".new-msg-container").remove();this.$lastMessage=this.$(".new-msg-container");a.each(function(a){a.set("history",!0);this.renderMessage(a)},this);a.length&&this.isIntroduceRequired()&&
c&&0>=config.contacts_ask&&chat_view_online.getIntroducePopupView().render();this.setScrollBottom(0);this.trigger("reset",this,a)},remove:function(a){},edit:function(a){},hideMessage:function(a,c){function f(){$(this).remove();l.setScrollBottom(q)}var l=this,q=this.getScrollBottom();c?a.each(f):a.fadeOut("slow",f)},declineFile:function(a){var c=$(a.currentTarget);a.preventDefault();"#"!==c.attr("href")?(window.open(c.attr("href")),chat_view_online.fileReceive(c.attr("data-id"),c.attr("data-name"))):
chat_view_online.fileDecline(c.attr("data-id"),c.attr("data-name"));this.hideMessage(c.parents(".receiveFile"));chat_view_online.getChatView().inputFocus()},openHighlight:function(a){var c=$(a.currentTarget);c.attr("data-url")||(c=c.find("a"));chat_view_online.acceptCobrowse(c.attr("data-url"),c.attr("data-hash"));chat_view_online.getChatView().inputFocus();a.preventDefault()},hideInvitationMessage:function(){this.hideMessage(this.$(".agentMessage"),!0);this.$lastMessage=null},hideConnectionError:function(){this.hideMessage(this.$(".connectionError"),
!0)}});Jivo.Online.Models.Name=Jivo.Model.Name.extend({required:function(){return this.show()&&config.contacts_settings[this.id].required}});Jivo.Online.Models.Message=Jivo.Model.Message.extend({defauts:{required:!1},required:function(){return this.get("required")},show:function(){return this.get("required")}});
Jivo.Online.Views.IntroduceForm=Jivo.View.Form.extend({el:"#inner-chat",tagName:"div",templateData:{nologo:!utils.showAd(),maxMessageLength:Jivo.Online.MAX_MESSAGE_LENGTH,link:translate("lblPwrBy").replace("_URL_","?utm_source="+encodeURIComponent(location.hostname)+"&utm_medium=link&utm_content=offline_form&utm_campaign=self_ad"),locale:getIconLocale()},validFields:["name","phone","email"]});
Jivo.Online.Views.Introduce=Jivo.Online.Views.IntroduceForm.extend({template:_templates.online.introduceForm,previousStartedValue:!1,events:{"click #submit":"submit","click #cancel":"cancel",'keydown input:text,input[type="tel"],input[type="email"],textarea':"onKeyDown","input  #message":"messageInput"},fields:new Backbone.Collection([new Jivo.Online.Models.Message({formId:"introduce-form"}),new Jivo.Model.Email({formId:"introduce-form"}),new Jivo.Model.Phone({formId:"introduce-form"}),new Jivo.Online.Models.Name({formId:"introduce-form"})]),
render:function(a,c){var f=this.$("#introduce-form"),l;l=this.templateData;c?(l.valueInputField=c,this.fields.get("message").set("required",!0)):this.fields.get("message").set("required",a);l.fields=this.fields;l.departments=a&&config.departments?config.departments:null;l.send=a?translate("lblSendBefore"):translate("lblSend");0<f.length&&this.previousStartedValue===a?f.show():(this.previousStartedValue=a,this.$("#introduce-form").remove(),this.$el.append(this.template(l)));c||a?(this.$("#message").show(),
this.$("#introduce-form").find(".buttons").addClass("single"),a&&(this.$("#introduce-caption").hide(),chat_view_online.getChatModel().set("agent.name",translate("lblIntroduceRequestBefore")))):(this.$("#message").hide(),this.$("#introduce-form").find(".buttons").removeClass("single"),this.$("#introduce-caption").show());f=this.$("#introduce-avatar");f.removeClass("introduce-bg").css("height",0);this.getHeight()<jivo.getChatHeight()&&(l=jivo.getChatHeight()-this.getHeight(),f.css("height",l),f.height()>
f.width()?f.find("img").css({width:"100%",height:"auto"}):f.find("img").css({width:"auto",height:"100%"}),50<l&&f.addClass("introduce-bg"));jivo.isSeparateWindow()?this.$("#introduce-form").perfectScrollbar({topMargin:utils.showAd()?40:25}).find("#departments-list").perfectScrollbar():setTimeout(function(){$("#introduce-form").find('input:text[value=""],input[type="tel"][value=""],input[type="email"][value=""],textarea:empty').first().focus()},0);jivo.isMobileOrTablet()&&(document.documentElement.style.position=
"static");this.$("#introduce-form").find("input[placeholder], textarea[placeholder]").placeholder();this.$("#current-department").click(function(){$("#departments-list").toggle()});this.$("#departments-list>li").click(underscore.bind(this.onDepartmentSelect));if(utils.browser.msie&&9>utils.browser.mV)this.$("#message").on("keydown paste",underscore.bind(this.messageInput,this));this.delegateEvents();this.updateHeight()},getHeight:function(){var a=$("#header-avatar").outerHeight();return(100<a?a/2:
a)+$("#introduce-form").outerHeight()},messageInput:function(a){setTimeout(underscore.bind(function(){var a=$(this).attr("maxlength");$(this).val().length>a&&$(this).val($(this).val().substring(0,a))},a.currentTarget),0)},submit:function(){if(this.valid()){var a={},c=!0;underscore.each(this.validFields,function(f){var l=this.fields.get(f).value();""!==l&&(a[f]=l,c=!1)},this);if(c&&0>=config.contacts_ask)this.close();else{chat_view_online.getChatModel().introduced=!0;this.close();chat_view_online.getChatView().el.scrollTop=
0;jivo.handle("gui_introduced",a);this.$("#current-department")&&jivo.handle("gui_department",this.$("#current-department").attr("data-id"));var f=chat_view_online.getChatModel().get("client");underscore.extend(f,a);f=this.fields.get("message").value();0!==$.trim(f).length&&chat_view_online.sendMessage(f);devicejs.ios()&&chat_view_online.initSound();chat_view_online.getChatView().inputFocus()}}else chat_view_online.getChatView().requestRedraw(),this.updateHeight()},cancel:function(a){this.close();
a.preventDefault()},close:function(){this.$("#introduce-form").hide();this.collection.reset();chat_view_online.getChatView().enableDragging();jivo.isMobileOrTablet()&&(document.documentElement.style.position="fixed");this.undelegateEvents()},onDepartmentSelect:function(a){a=$(a.currentTarget);$("#departments-list").hide();this.$("#current-department").html(a.html()).attr("data-id",a.attr("data-id"))}});
Jivo.Online.Views.IntroducePopup=Jivo.Online.Views.IntroduceForm.extend({el:"#chat-body",template:_templates.online.introducePopup,popup:"#introduce-popup",popupContent:"#introduce-popup-content",events:{"click #submit":"submit","click #cancel":"cancel",'keydown input:text,input[type="tel"],input[type="email"]':"onKeyDown","focus input":"onInputFocus","blur input":"onInputBlur"},fields:new Backbone.Collection([new Jivo.Model.Email({formId:"introduce-popup"}),new Jivo.Model.Phone({formId:"introduce-popup"}),
new Jivo.Online.Models.Name({formId:"introduce-popup"})]),render:function(){var a;0===$("#introduce-popup").length&&(a=this.templateData,a.fields=this.fields,a.send=translate("lblSend"),this.$el.append(this.template(a)),this.$("#introduce-popup").find("input[placeholder], textarea[placeholder]").placeholder());setTimeout(underscore.bind(this.renderSpecific,this),3E3)},renderSpecific:function(a){this.onInputBlur(a,!1);this.delegateEvents()},cancel:function(a){a.preventDefault();this.close();chat_view_online.getChatModel().introduced=
!0},close:function(){this.$("#introduce-popup").fadeOut();chat_view_online.getChatView().enableDragging();this.undelegateEvents()},submit:function(a){a&&a.target.focus();if(this.valid()){var c={},f=!0;underscore.each(this.validFields,function(a){var l=this.fields.get(a).value();""!==l&&(c[a]=l,f=!1)},this);f&&0>=config.contacts_ask?this.close():(this.$("#cancel, .text-field, .field-wrapper, .buttons").fadeOut(),this.$(".icon-thx").fadeIn(),this.$("#introduce-popup-content").addClass("thx-content"),
this.onInputBlurSpecific(a,!0),setTimeout(underscore.bind(this.close,this),3E3),chat_view_online.getChatModel().introduced=!0,jivo.handle("gui_introduced",c),a=chat_view_online.getChatModel().get("client"),underscore.extend(a,c),chat_view_online.getChatView().inputFocus())}},toggleError:function(a,c){c?(this.$("#"+a).parent().addClass("error-field"),this.$("#error-"+a).show()):(this.$("#"+a).parent().removeClass("error-field"),this.$("#error-"+a).hide())},onInputFocus:function(){this.$("#introduce-popup").height(this.$("#introduce-popup-content").height())},
onInputBlur:function(a,c){setTimeout(underscore.bind(this.onInputBlurSpecific,this),100)},onInputBlurSpecific:function(a,c){var f;if(c||!(this.$("input:text").length&&""!==this.$("input:text").val()||this.$('input[type="tel"]').length&&""!==this.$('input[type="tel"]').val()||this.$('input[type="email"]').length&&""!==this.$('input[type="email"]').val()||this.$('input[type="button"]').is(":focus")||this.$("input:text").is(":focus")||this.$('input[type="tel"]').is(":focus")||this.$('input[type="email"]').is(":focus")))f=
c?this.$(".icon-thx").outerHeight():this.$(".text-field").outerHeight()+this.$(".field-wrapper").outerHeight(),this.$("#introduce-popup").height(f)}});
Jivo.Online.Views.Departments=Backbone.View.extend({el:"#inner-chat",tagName:"div",template:_templates.online.departments,templateData:{nologo:!utils.showAd()},events:{"click a.department":"onDepartmentSelect"},render:function(){this.templateData.departments=config.departments;this.$el.append(this.template(this.templateData));chat_view_online.getChatModel().set("agent.name",translate("lblSelectDep"));this.$("#input-field").hide();this.fixSafariScroll()},close:function(){this.$("#input-field").show();
this.$("#departments").remove();chat_view_online.getChatModel().set("agent.name",chat_view_online.getChatModel().get("agent.name"));chat_view_online.getChatView().enableDragging()},onDepartmentSelect:function(a){jivo.handle("gui_department",$(a.currentTarget).attr("data-id"));this.close(!0);chat_view_online.chatMaximized()},fixSafariScroll:function(){this.$("#departments").mouseover(function(a){$(this).css("border","1px");$(this).css("border","none")})}});
Jivo.Online.Views.Call=Backbone.View.extend({el:"#header-avatar",template:_templates.online.callButton,events:{"click #callme":"onCallClick"},initialize:function(){this.model.on("change:state",this.onStateChange,this);$("#phone_hint").html(translate("lblPhoneHint"))},render:function(){this.$el.append(this.template({}))},addMessage:function(a){chat_view_online.addSystemMessage(a)},micDisabled:function(){return"WebPhoneMicDisabled"===this.model.get("state")},idle:function(){return"WebPhoneIdle"===this.model.get("state")},
connecting:function(){return"WebPhoneConnecting"===this.model.get("state")},progressing:function(){return"WebPhoneProgressing"===this.model.get("state")},joined:function(){return"WebPhoneJoined"===this.model.get("state")},authenticating:function(){return"WebPhoneAuthenticating"===this.model.get("state")},onStateChange:function(){this.model.calling()?($("#callme").addClass("hang-up"),this.joined()?this.addMessage(translate("c_callConnected")):this.authenticating()?$("#web_phone").addClass("phone_hidden"):
this.connecting()?this.model.rtcSupported()||$("#web_phone").removeClass("phone_hidden"):this.progressing()&&($("#callme").show(),$(".header-avatar-container").find(".title").css("width","75%"))):($("#callme").removeClass("hang-up"),this.micDisabled()?$("#callme").hide():this.idle()&&this.addMessage(translate("c_callDisconnected")),chat_view_online.getCallModel().isInit=!1)},onCallClick:function(){var a=jivo.getCallWidget();a?"CALL"!==a.state?("online"===config.chat_mode?jivo.handle("cw_ping"):jivo.handle("cw_show_form",
{show_form:1}),a.analyticsTitle="buttonClick"):chat_view_online.chatMinimized():this.model.calling()?this.model.hangup():($("#callme").hide(),this.addMessage(translate("c_callProcessing")),this.model.call())}});
Jivo.Online.Models.Call=Backbone.Model.extend({isInit:!1,defaults:{state:"WebPhoneUninitialized"},initialize:function(a){a.on("change:agent.vox_name",this.onVoxNameChange,this)},call:function(){this.getWebPhone().handle("call")},hangup:function(){this.getWebPhone().handle("hangup")},rtcSupported:function(){var a=!1;if(!jivo.isMobileOrTablet()&&("undefined"!==typeof webkitRTCPeerConnection||"undefined"!==typeof mozRTCPeerConnection))if("undefined"!==typeof mozRTCPeerConnection)try{a=!0}catch(c){}else a=
!0;return a},getWebPhone:function(){if(void 0===this.webPhone){var a="WebPhoneMicDisabled WebPhoneInitializing WebPhoneInitialized WebPhoneConnecting WebPhoneConnected WebPhoneAuthenticating WebPhoneIdle WebPhoneProgressing WebPhoneJoined".split(" ");this.webPhone=new WebPhone;for(var c in a)this.webPhone.on(a[c],underscore.bind(function(a){this.set("state",a.name)},this))}return this.webPhone},onVoxNameChange:function(a){this.getWebPhone().setAgentId(a.changed["agent.vox_name"])},calling:function(){return underscore.contains(["WebPhoneInitializing",
"WebPhoneConnecting","WebPhoneAuthenticating","WebPhoneProgressing","WebPhoneJoined"],this.get("state"))}});
var chat_view_online=Jivo.Online.Controller=new function(){var a,c,f,l,q,r,u,n,x,y=!1;underscore.defaults(config,{bubble_color:"green"});this.getChatModel=function(){a||(a=new Jivo.Online.Models.Chat);return a};this.getMessagesCollection=function(){c||(c=new MessagesCollection);return c};this.getCallModel=function(){f||(f=new Jivo.Online.Models.Call(this.getChatModel()));return f};this.getChatView=function(){q||(q=new Jivo.Online.Views.Chat({model:this.getChatModel(),collection:this.getMessagesCollection()}));
return q};this.getMessagesView=function(){r||(r=new Jivo.Online.Views.Message({collection:this.getMessagesCollection()}));return r};this.getIntroduceView=function(){n||(n=new Jivo.Online.Views.Introduce,n.undelegateEvents());return n};this.getIntroducePopupView=function(){n||(n=new Jivo.Online.Views.IntroducePopup,n.undelegateEvents());return n};this.getDepartmentsView=function(){x||(x=new Jivo.Online.Views.Departments);return x};this.getCallView=function(){u||(u=new Jivo.Online.Views.Call({model:this.getCallModel(),
chatModel:this.getChatModel()}));return u};this.getEvaluationView=function(){l||(l=new Jivo.Online.Views.Evaluation);return l};underscore.each("addClientMessage addAgentMessage addSystemMessage addReceiveFile addConnectionError addCobrowseHighlight".split(" "),function(a){this[a]=function(){return proxy(this.getMessagesCollection(),a,arguments)}},this);this.resetMessages=function(){return proxy(this.getMessagesCollection(),"reset",arguments)};underscore.each(["hideConnectionError","hideInvitationMessage"],
function(a){this[a]=function(){return proxy(this.getMessagesView(),a,arguments)}},this);this.setChatAttr=function(){return proxy(this.getChatModel(),"set",arguments)};this.getChatAttr=function(){return proxy(this.getChatModel(),"get",arguments)};this.create=function(a,c){this.getChatView().render();this.getMessagesView().render();this.getCallView().render();c&&this.chatMaximized()};this.sendMessage=function(a){if(0==a.length)return!1;jivo.handle("gui_message",a)};this.onFocus=function(){jivo.handle("gui_msg_input_focus")};
this.chatMinimized=function(){jivo.handle("gui_minimize")};this.chatMaximized=function(){this.onFocus();this.getChatView().inputFocus();this.getMessagesView().setScrollBottom(0)};this.typing=function(a){jivo.handle("gui_typing",a?1:0)};this.fileReceive=function(a,c){jivo.handle("gui_receive_file",a,c)};this.fileDecline=function(a,c){jivo.handle("gui_decline_file",a,c)};this.acceptCobrowse=function(a,c){jivo.handle("gui_accept_cobrowse",a,c)};this.getHeight=function(){return this.getChatModel().get("size.height")};
this.initSound=function(){y||(jivo.soundPlayer.incomingMessage(),jivo.soundPlayer.pause(),y=!0)}};
Jivo.Offline.Models.Form=Backbone.Model.extend({defaults:{templateData:{type:config.widget_font_color,header:config.offline_form_title||config.offline_widget_label,text:config.offline_form_text,link:translate("lblPwrBy").replace("_URL_","?utm_source="+encodeURIComponent(location.hostname)+"&utm_medium=link&utm_content=offline_form&utm_campaign=self_ad"),nologo:0,maxMessageLength:Jivo.Offline.MAX_MESSAGE_LENGTH,locale:getIconLocale(),agent:{calls:!1}}}});
Jivo.Offline.Models.Error=Backbone.Model.extend({defaults:{name:"",messages:[]},idAttribute:"name"});Jivo.Offline.Collections.Errors=Backbone.Collection.extend({model:Jivo.Offline.Models.Error});
Jivo.Offline.Models.Email=Jivo.Model.Email.extend({show:function(){return config.contacts_settings.email.show||this.phoneNotRequired()},required:function(){return config.contacts_settings.email.show&&config.contacts_settings.email.required||this.phoneNotRequired()},phoneNotRequired:function(){return!config.contacts_settings.phone.show||!config.contacts_settings.phone.required}});Jivo.Offline.Models.Message=Jivo.Model.Field.extend({id:"message",required:function(){return!0},show:function(){return!0}});
Jivo.Offline.Views.Form=Jivo.View.Form.extend({el:"#inner-chat",tagName:"div",template:_templates.offline.form,height:362,events:{"click #submit":"submit","click #cancel":"cancel",'keydown input:text,input[type="tel"],input[type="email"],textarea':"onKeyDown","input  #message":"messageInput"},fields:new Backbone.Collection([new Jivo.Offline.Models.Message({formId:"inner-chat"}),new Jivo.Offline.Models.Email({formId:"inner-chat"}),new Jivo.Model.Phone({formId:"inner-chat"}),new Jivo.Model.Name({formId:"inner-chat"})]),
initializeSpecial:function(){this.model.on("change:agent.calls",this.updateCallMe,this)},render:function(a,c){var f=this.model.get("templateData");f.fields=this.fields;this.$el.html(this.template(f));this.$el.addClass("offline");getByIdFromParent("jivo_action").find("div").on("click",function(){if("close"===$(this).data("action")){var a=jivo.getCallWidget();a&&"CALL"!==a.state&&!a.clickClosedForm?(a.analyticsTitle="buttonClick",a.handle("cw_show_form",{show_form:1})):chat_view_offline.chatMinimized()}});
jivo.isSeparateWindow()||jivo.isTablet()||getByIdFromParent("jivo_top_wrap").mouseenter(underscore.bind(this.toolbarToggle,this,"show")).mouseleave(underscore.bind(this.toolbarToggle,this,"hide"));$("input[placeholder], textarea[placeholder]").placeholder();if(utils.browser.msie&&9>utils.browser.mV)this.$("#message").on("keydown paste",underscore.bind(this.messageInput,this));jivo.isSeparateWindow()?(this.$el.on("focus blur","input[type=text],input[type=tel],input[type=email],textarea",JivoGui.handleSoftKeyboard),
this.$("#offline-form-inner").perfectScrollbar({topMargin:utils.showAd()?40:25})):this.updateHeight();a&&($("#offline-form-inner").find(".description, .message, #email, #name, #phone, .buttons").hide(),f=$(".captcha-container"),f.show(),f.find("img").attr("src",config.avatar_url+"/captcha/"+a+".png"),c&&f.find(".error").css("display","block"),f.find("#resend").on("click",underscore.bind(this.submit,this)),$("#cancelCap").show().on("click",underscore.bind(this.cancelCaptcha,this)),setTimeout(function(){$(".cap_symbols").focus()},
0));setTimeout(function(){$("#header-animate-container").addClass("header-animate")},0);return this},inputFocus:function(){var a=this.$el.find("#message");setTimeout(function(){a.focus()},0);return a},messageInput:function(a){setTimeout(underscore.bind(function(){var a=$(this).attr("maxlength");$(this).val().length>a&&$(this).val($(this).val().substring(0,a))},a.currentTarget),0)},submit:function(){if(this.valid()){var a={};this.fields.each(function(c){a[c.id]=c.value()},this);if(chat_view_offline.cap_id&&
(a.cap_id=chat_view_offline.cap_id,a.cap_symbols=$(".cap_symbols").val(),""==a.cap_symbols)){$(".cap_symbols").addClass("empty");return}jivo.handle("gui_offline_message",a)}else this.requestRedraw(),jivo.isSeparateWindow()||this.updateHeight(),chat_view_offline.instance.views.form.el.scrollTop=0},cancel:function(a){jivo.handle("gui_minimize");a.preventDefault()},cancelCaptcha:function(){chat_view_offline.cap_id=!1;$(".captcha-container").hide();$("#cancelCap").hide();$("#offline-form-inner").find(".description, .message, #email, #phone, #name, .buttons").show()},
getHeight:function(){return $("#header-avatar").height()+$("#offline-form").height()},toolbarToggle:function(a){var c=getByIdFromParent("jivo_close_button");c.finish();"show"===a?c.fadeIn(500):c.fadeOut(500)},requestRedraw:function(){var a=this.$("#offline-form-inner")[0];a.style.display="none";a.offsetHeight;a.style.display="block"},updateCallMe:function(){jivo.getCallWidget()&&this.model.get("agent.calls")?this.$el.find("#callme").show():this.$el.find("#callme").hide()}});
var chat_view_offline=Jivo.Offline.Controller=new function(){var a,c;this.instance={models:{form:new Jivo.Offline.Models.Form,error:new Jivo.Offline.Models.Error},collections:{errors:!1},views:{form:!1}};this.create=function(a,c){this.instance.collections.errors=new Jivo.Offline.Collections.Errors;this.instance.views.form=new Jivo.Offline.Views.Form({model:this.instance.models.form,collection:this.instance.collections.errors});this.instance.views.form.render();this.getCallView().render();c&&this.getFormView().inputFocus()};
this.captcha=function(a){this.instance.views.form.render(a.cap_id,this.cap_id&&a.cap_id!=this.cap_id);this.cap_id=a.cap_id};this.getHeight=function(){return this.instance.views.form.getHeight()};this.chatMinimized=function(){this.instance.collections.errors.reset();jivo.handle("gui_minimize")};this.getFormView=function(){a||(a=this.instance.views.form);return a};this.getCallView=function(){c||(c=new Jivo.Online.Views.Call({model:this.instance.views.form}));return c};this.setChatAttr=function(){return proxy(this.instance.models.form,
"set",arguments)}};Jivo.Message.Models.Message=Backbone.Model.extend({defaults:{templateData:{link:translate("lblPwrBy").replace("_URL_","?utm_source="+encodeURIComponent(location.hostname)+"&utm_medium=link&utm_content=offline_form&utm_campaign=self_ad"),nologo:!utils.showAd(),locale:getIconLocale()},buttons:[],msg:translate("lblNoOperators"),header:translate("lblChatEnded")}});
Jivo.Message.Views.Message=Backbone.View.extend({el:"#inner-chat",submited:!1,tagName:"div",template:_templates.message.message,initialize:function(){},render:function(){this.$el.html(this.template(this.model.toJSON()));this.$el.addClass("offline");getByIdFromParent("jivo-chat")&&getByIdFromParent("jivo-chat").addClass("jivo-offline").removeClass("jivo-online");var a=this.$el.find("#buttons"),c=this.model.get("buttons");underscore.each(c,function(c,l){a.append($("<input/>",{type:"button",value:c.title,
"class":"jivoBtn accept"}).click(function(a){return function(){jivo.handle(a)}}(c.event)))});setTimeout($.proxy(function(){this.$el.find("#report-message-inner").css({top:(this.$el.find("#report-message").outerHeight()-this.$el.find("#report-message-inner").outerHeight())/2})},this),10);setTimeout(function(){$("#header-animate-container").addClass("header-animate")},0);return this}});
var chat_view_msg=Jivo.Message.Controller=new function(){this.instance={models:{message:new Jivo.Message.Models.Message},views:{message:!1}};this.create=function(a,c){this.instance.views.message=new Jivo.Message.Views.Message({model:this.instance.models.message});this.instance.views.message.render()};this._parent=function(a){return $(window.parent.document.getElementById(a))?$(window.parent.document.getElementById(a)):!1}};
browserNameVer=function(){var a=navigator.appName,c=navigator.userAgent.toLowerCase(),f=navigator.platform.toLowerCase(),l,q=c.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i),f=f?/win/.test(f):/win/.test(c);q&&null!=(l=c.match(/version\/([\.\d]+)/i))&&(q[2]=l[1]);q=q?[q[1],q[2]]:[a,navigator.appVersion,"-?"];q.win=f;return q}();
if(!(browserNameVer.win&&"msie"==browserNameVer[0]&&9>=parseFloat(browserNameVer[1])||/Android/.test(navigator.userAgent)||jivo.isMobileOrTablet())){var initBlur=function(){$(".messages-div-blurred").remove();var a=$("#jivosite-adword"),c=$("#input-div"),f=$("#messages-div"),l=$("#messages-div-inner"),f=f.height();this.$contentBlurred=$("<div></div>").addClass("messages-div-blurred").append($("<div></div>").addClass("messages-div-blurred-cont").html($content.clone())).css({filter:"url(#blur-effect)",
bottom:-f+a.height()+parseInt(l.css("bottom"))});this.$contentBlurred.appendTo(a);this.$contentBlurred.clone().css("bottom",c.innerHeight()+parseInt(l.css("bottom"))).appendTo(c);translation="translate3d(0,"+overviewNode.css("bottom")+", 0)";a.find(".messages-div-blurred-cont").css({"-webkit-transform":translation,"-moz-transform":translation,transform:translation});c.find(".messages-div-blurred-cont").css({"-webkit-transform":translation,"-moz-transform":translation,transform:translation})},$content,
messages_col=0,translation,overviewNode=$("#messages-div-inner"),updateBlur=function(){$content=$(".messages-div-inner:first");var a=$content.children(".new-msg-container").find(".new-msg-text").length;if(a>messages_col||a<messages_col&&null!=$content)initBlur(),messages_col=a};updateBlur()};

*/
