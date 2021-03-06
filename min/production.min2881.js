window.Modernizr = function(a, b, c) {
        function d(a) { s.cssText = a }

        function e(a, b) { return typeof a === b }

        function f(a, b) { return !!~("" + a).indexOf(b) }

        function g(a, b) { for (var d in a) { var e = a[d]; if (!f(e, "-") && s[e] !== c) return "pfx" == b ? e : !0 } return !1 }

        function h(a, b, d) { for (var f in a) { var g = b[a[f]]; if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g } return !1 }

        function i(a, b, c) {
            var d = a.charAt(0).toUpperCase() + a.slice(1),
                f = (a + " " + w.join(d + " ") + d).split(" ");
            return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + x.join(d + " ") + d).split(" "), h(f, b, c))
        }
        var j, k, l, m = "2.8.3",
            n = {},
            o = !0,
            p = b.documentElement,
            q = "modernizr",
            r = b.createElement(q),
            s = r.style,
            t = {}.toString,
            u = " -webkit- -moz- -o- -ms- ".split(" "),
            v = "Webkit Moz O ms",
            w = v.split(" "),
            x = v.toLowerCase().split(" "),
            y = { svg: "http://www.w3.org/2000/svg" },
            z = {},
            A = [],
            B = A.slice,
            C = function(a, c, d, e) {
                var f, g, h, i, j = b.createElement("div"),
                    k = b.body,
                    l = k || b.createElement("body");
                if (parseInt(d, 10))
                    for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : q + (d + 1), j.appendChild(h);
                return f = ["&#173;", '<style id="s', q, '">', a, "</style>"].join(""), j.id = q, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = p.style.overflow, p.style.overflow = "hidden", p.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), p.style.overflow = i), !!g
            },
            D = function() {
                function a(a, f) { f = f || b.createElement(d[a] || "div"), a = "on" + a; var g = a in f; return g || (f.setAttribute || (f = b.createElement("div")), f.setAttribute && f.removeAttribute && (f.setAttribute(a, ""), g = e(f[a], "function"), e(f[a], "undefined") || (f[a] = c), f.removeAttribute(a))), f = null, g }
                var d = { select: "input", change: "input", submit: "form", reset: "form", error: "img", load: "img", abort: "img" };
                return a
            }(),
            E = {}.hasOwnProperty;
        l = e(E, "undefined") || e(E.call, "undefined") ? function(a, b) { return b in a && e(a.constructor.prototype[b], "undefined") } : function(a, b) { return E.call(a, b) }, Function.prototype.bind || (Function.prototype.bind = function(a) {
            var b = this;
            if ("function" != typeof b) throw new TypeError;
            var c = B.call(arguments, 1),
                d = function() {
                    if (this instanceof d) {
                        var e = function() {};
                        e.prototype = b.prototype;
                        var f = new e,
                            g = b.apply(f, c.concat(B.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return b.apply(a, c.concat(B.call(arguments)))
                };
            return d
        }), z.canvas = function() { var a = b.createElement("canvas"); return !!a.getContext && !!a.getContext("2d") }, z.canvastext = function() { return !!n.canvas && !!e(b.createElement("canvas").getContext("2d").fillText, "function") }, z.webgl = function() { return !!a.WebGLRenderingContext }, z.touch = function() { var c; return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : C(["@media (", u.join("touch-enabled),("), q, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) { c = 9 === a.offsetTop }), c }, z.geolocation = function() { return "geolocation" in navigator }, z.hashchange = function() { return D("hashchange", a) && (b.documentMode === c || b.documentMode > 7) }, z.history = function() { return !!a.history && !!history.pushState }, z.draganddrop = function() { var a = b.createElement("div"); return "draggable" in a || "ondragstart" in a && "ondrop" in a }, z.websockets = function() { return "WebSocket" in a || "MozWebSocket" in a }, z.cssanimations = function() { return i("animationName") }, z.csstransforms = function() { return !!i("transform") }, z.csstransforms3d = function() { var a = !!i("perspective"); return a && "webkitPerspective" in p.style && C("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) { a = 9 === b.offsetLeft && 3 === b.offsetHeight }), a }, z.video = function() {
            var a = b.createElement("video"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, z.audio = function() {
            var a = b.createElement("audio"),
                c = !1;
            try {
                (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (d) {}
            return c
        }, z.localstorage = function() { try { return localStorage.setItem(q, q), localStorage.removeItem(q), !0 } catch (a) { return !1 } }, z.sessionstorage = function() { try { return sessionStorage.setItem(q, q), sessionStorage.removeItem(q), !0 } catch (a) { return !1 } }, z.webworkers = function() { return !!a.Worker }, z.applicationcache = function() { return !!a.applicationCache }, z.svg = function() { return !!b.createElementNS && !!b.createElementNS(y.svg, "svg").createSVGRect }, z.svgclippaths = function() { return !!b.createElementNS && /SVGClipPath/.test(t.call(b.createElementNS(y.svg, "clipPath"))) };
        for (var F in z) l(z, F) && (k = F.toLowerCase(), n[k] = z[F](), A.push((n[k] ? "" : "no-") + k));
        return n.addTest = function(a, b) {
                if ("object" == typeof a)
                    for (var d in a) l(a, d) && n.addTest(d, a[d]);
                else {
                    if (a = a.toLowerCase(), n[a] !== c) return n;
                    b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
                }
                return n
            }, d(""), r = j = null,
            function(a, b) {
                function c(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function d() { var a = s.elements; return "string" == typeof a ? a.split(" ") : a }

                function e(a) { var b = r[a[p]]; return b || (b = {}, q++, a[p] = q, r[q] = b), b }

                function f(a, c, d) {
                    if (c || (c = b), k) return c.createElement(a);
                    d || (d = e(c));
                    var f;
                    return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
                }

                function g(a, c) {
                    if (a || (a = b), k) return a.createDocumentFragment();
                    c = c || e(a);
                    for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; i > g; g++) f.createElement(h[g]);
                    return f
                }

                function h(a, b) { b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) { return s.shivMethods ? f(c, a, b) : b.createElem(c) }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) { return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")' }) + ");return n}")(s, b.frag) }

                function i(a) { a || (a = b); var d = e(a); return s.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a }
                var j, k, l = "3.7.0",
                    m = a.html5 || {},
                    n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    p = "_html5shiv",
                    q = 0,
                    r = {};
                ! function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() { b.createElement("a"); var a = b.createDocumentFragment(); return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement }()
                    } catch (c) { j = !0, k = !0 }
                }();
                var s = { elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video", version: l, shivCSS: m.shivCSS !== !1, supportsUnknownElements: k, shivMethods: m.shivMethods !== !1, type: "default", shivDocument: i, createElement: f, createDocumentFragment: g };
                a.html5 = s, i(b)
            }(this, b), n._version = m, n._prefixes = u, n._domPrefixes = x, n._cssomPrefixes = w, n.hasEvent = D, n.testProp = function(a) { return g([a]) }, n.testAllProps = i, n.testStyles = C, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + A.join(" ") : ""), n
    }(this, this.document),
    function(a, b, c) {
        function d(a) { return "[object Function]" == q.call(a) }

        function e(a) { return "string" == typeof a }

        function f() {}

        function g(a) { return !a || "loaded" == a || "complete" == a || "uninitialized" == a }

        function h() {
            var a = r.shift();
            s = 1, a ? a.t ? o(function() {
                ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : s = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) { if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) { "img" != a && o(function() { v.removeChild(l) }, 50); for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload() } }
            var j = j || m.errorTimeout,
                l = b.createElement(a),
                n = 0,
                q = 0,
                t = { t: d, s: c, e: f, a: i, x: j };
            1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() { k.call(this, q) }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
        }

        function j(a, b, c, d, f) { return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this }

        function k() { var a = m; return a.loader = { load: j, i: 0 }, a }
        var l, m, n = b.documentElement,
            o = a.setTimeout,
            p = b.getElementsByTagName("script")[0],
            q = {}.toString,
            r = [],
            s = 0,
            t = "MozAppearance" in n.style,
            u = t && !!b.createRange().compareNode,
            v = u ? n : p.parentNode,
            n = a.opera && "[object Opera]" == q.call(a.opera),
            n = !!b.attachEvent && !n,
            w = t ? "object" : n ? "script" : "img",
            x = n ? "script" : w,
            y = Array.isArray || function(a) { return "[object Array]" == q.call(a) },
            z = [],
            A = {},
            B = { timeout: function(a, b) { return b.length && (a.timeout = b[0]), a } };
        m = function(a) {
            function b(a) {
                var b, c, d, a = a.split("!"),
                    e = z.length,
                    f = a.pop(),
                    g = a.length,
                    f = { url: f, origUrl: f, prefixes: a };
                for (c = 0; g > c; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
                for (c = 0; e > c; c++) f = z[c](f);
                return f
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() { k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2 })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (l = function() {
                            var a = [].slice.call(arguments);
                            m.apply(this, a), n()
                        }), g(a, l, b, 0, j);
                        else if (Object(a) === a)
                            for (i in h = function() { var b, c = 0; for (b in a) a.hasOwnProperty(b) && c++; return c }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                                var a = [].slice.call(arguments);
                                m.apply(this, a), n()
                            } : l[i] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), n()
                                }
                            }(m[i])), g(a[i], l, b, i, j))
                    } else !c && n()
                }
                var h, i, j = !!a.test,
                    k = a.load || a.both,
                    l = a.callback || f,
                    m = l,
                    n = a.complete || f;
                c(j ? a.yep : a.nope, !!k), k && c(k)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (y(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, m.addPrefix = function(a, b) { B[a] = b }, m.addFilter = function(a) { z.push(a) }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() { b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete" }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k, l, n = b.createElement("script"),
                e = e || m.errorTimeout;
            n.src = a;
            for (l in d) n.setAttribute(l, d[l]);
            c = j ? h : c || f, n.onreadystatechange = n.onload = function() {!k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null) }, o(function() { k || (k = 1, c(1)) }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var j, e = b.createElement("link"),
                c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (p.parentNode.insertBefore(e, p), o(c, 0))
        }
    }(this, document), Modernizr.load = function() { yepnope.apply(window, [].slice.call(arguments, 0)) }, ! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
        function c(a) {
            var b = "length" in a && a.length,
                c = ea.type(a);
            return "function" === c || ea.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }

        function d(a, b, c) {
            if (ea.isFunction(b)) return ea.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
            if (b.nodeType) return ea.grep(a, function(a) { return a === b !== c });
            if ("string" == typeof b) {
                if (ma.test(b)) return ea.filter(b, a, c);
                b = ea.filter(b, a)
            }
            return ea.grep(a, function(a) { return ea.inArray(a, b) >= 0 !== c })
        }

        function e(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }

        function f(a) { var b = ua[a] = {}; return ea.each(a.match(ta) || [], function(a, c) { b[c] = !0 }), b }

        function g() { oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h)) }

        function h() {
            (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
        }

        function i(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(za, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c } catch (e) {}
                    ea.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function j(a) {
            var b;
            for (b in a)
                if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function k(a, b, c, d) {
            if (ea.acceptData(a)) {
                var e, f, g = ea.expando,
                    h = a.nodeType,
                    i = h ? ea.cache : a,
                    j = h ? a[g] : a[g] && g;
                if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : { toJSON: ea.noop }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
            }
        }

        function l(a, b, c) {
            if (ea.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? ea.cache : a,
                    h = f ? a[ea.expando] : ea.expando;
                if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; for (; e--;) delete d[b[e]]; if (c ? !j(d) : !ea.isEmptyObject(d)) return }(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null) }
            }
        }

        function m() { return !0 }

        function n() { return !1 }

        function o() { try { return oa.activeElement } catch (a) {} }

        function p(a) {
            var b = Ka.split("|"),
                c = a.createDocumentFragment();
            if (c.createElement)
                for (; b.length;) c.createElement(b.pop());
            return c
        }

        function q(a, b) {
            var c, d, e = 0,
                f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
            if (!f)
                for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
            return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
        }

        function r(a) { Ea.test(a.type) && (a.defaultChecked = a.checked) }

        function s(a, b) { return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

        function t(a) { return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a }

        function u(a) { var b = Va.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

        function v(a, b) { for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval")) }

        function w(a, b) {
            if (1 === b.nodeType && ea.hasData(a)) {
                var c, d, e, f = ea._data(a),
                    g = ea._data(b, f),
                    h = f.events;
                if (h) {
                    delete g.handle, g.events = {};
                    for (c in h)
                        for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
                }
                g.data && (g.data = ea.extend({}, g.data))
            }
        }

        function x(a, b) {
            var c, d, e;
            if (1 === b.nodeType) {
                if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
                    e = ea._data(b);
                    for (d in e.events) ea.removeEvent(b, d, e.handle);
                    b.removeAttribute(ea.expando)
                }
                "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
            }
        }

        function y(b, c) {
            var d, e = ea(c.createElement(b)).appendTo(c.body),
                f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
            return e.detach(), f
        }

        function z(a) {
            var b = oa,
                c = _a[a];
            return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
        }

        function A(a, b) { return { get: function() { var c = a(); return null != c ? c ? void delete this.get : (this.get = b).apply(this, arguments) : void 0 } } }

        function B(a, b) {
            if (b in a) return b;
            for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
                if (b = mb[e] + c, b in a) return b;
            return d
        }

        function C(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

        function D(a, b, c) { var d = ib.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

        function E(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e))); return g }

        function F(a, b, c) {
            var d = !0,
                e = "width" === b ? a.offsetWidth : a.offsetHeight,
                f = ab(a),
                g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
                d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
            }
            return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }

        function G(a, b, c, d, e) { return new G.prototype.init(a, b, c, d, e) }

        function H() { return setTimeout(function() { nb = void 0 }), nb = ea.now() }

        function I(a, b) {
            var c, d = { height: a },
                e = 0;
            for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
            return b && (d.opacity = d.width = a), d
        }

        function J(a, b, c) {
            for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a)) return d
        }

        function K(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this,
                m = {},
                n = a.style,
                o = a.nodeType && Ca(a),
                p = ea._data(a, "fxshow");
            c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, l.always(function() { l.always(function() { h.unqueued--, ea.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function() { n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2] }));
            for (d in b)
                if (e = b[d], pb.exec(e)) {
                    if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
                        if ("show" !== e || !p || void 0 === p[d]) continue;
                        o = !0
                    }
                    m[d] = p && p[d] || ea.style(a, d)
                } else j = void 0;
            if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
            else {
                p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function() { ea(a).hide() }), l.done(function() {
                    var b;
                    ea._removeData(a, "fxshow");
                    for (b in m) ea.style(a, b, m[b])
                });
                for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }

        function L(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
        }

        function M(a, b, c) {
            var d, e, f = 0,
                g = sb.length,
                h = ea.Deferred().always(function() { delete i.elem }),
                i = function() { if (e) return !1; for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
                j = h.promise({
                    elem: a,
                    props: ea.extend({}, b),
                    opts: ea.extend(!0, { specialEasing: {} }, c),
                    originalProperties: b,
                    originalOptions: c,
                    startTime: nb || H(),
                    duration: c.duration,
                    tweens: [],
                    createTween: function(b, c) { var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                    stop: function(b) {
                        var c = 0,
                            d = b ? j.tweens.length : 0;
                        if (e) return this;
                        for (e = !0; d > c; c++) j.tweens[c].run(1);
                        return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                    }
                }),
                k = j.props;
            for (L(k, j.opts.specialEasing); g > f; f++)
                if (d = sb[f].call(j, a, k, j.opts)) return d;
            return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }

        function N(a) {
            return function(b, c) {
                "string" != typeof b && (c = b, b = "*");
                var d, e = 0,
                    f = b.toLowerCase().match(ta) || [];
                if (ea.isFunction(c))
                    for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }

        function O(a, b, c, d) {
            function e(h) { var i; return f[h] = !0, ea.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1) }), i }
            var f = {},
                g = a === Rb;
            return e(b.dataTypes[0]) || !f["*"] && e("*")
        }

        function P(a, b) { var c, d, e = ea.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && ea.extend(!0, a, c), a }

        function Q(a, b, c) {
            for (var d, e, f, g, h = a.contents, i = a.dataTypes;
                "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
            if (e)
                for (g in h)
                    if (h[g] && h[g].test(e)) { i.unshift(g); break }
            if (i[0] in c) f = i[0];
            else {
                for (g in c) {
                    if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                    d || (d = g)
                }
                f = f || d
            }
            return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
        }

        function R(a, b, c, d) {
            var e, f, g, h, i, j = {},
                k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
            for (f = k.shift(); f;)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                    if ("*" === f) f = i;
                    else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g)
                    for (e in j)
                        if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
                if (g !== !0)
                    if (g && a["throws"]) b = g(b);
                    else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
            }
            return { state: "success", data: b }
        }

        function S(a, b, c, d) {
            var e;
            if (ea.isArray(b)) ea.each(b, function(b, e) { c || Vb.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
            else if (c || "object" !== ea.type(b)) d(a, b);
            else
                for (e in b) S(a + "[" + e + "]", b[e], c, d)
        }

        function T() { try { return new a.XMLHttpRequest } catch (b) {} }

        function U() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }

        function V(a) { return ea.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
        var W = [],
            X = W.slice,
            Y = W.concat,
            Z = W.push,
            $ = W.indexOf,
            _ = {},
            aa = _.toString,
            ba = _.hasOwnProperty,
            ca = {},
            da = "1.11.3",
            ea = function(a, b) { return new ea.fn.init(a, b) },
            fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ga = /^-ms-/,
            ha = /-([\da-z])/gi,
            ia = function(a, b) { return b.toUpperCase() };
        ea.fn = ea.prototype = {
            jquery: da,
            constructor: ea,
            selector: "",
            length: 0,
            toArray: function() { return X.call(this) },
            get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this) },
            pushStack: function(a) { var b = ea.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
            each: function(a, b) { return ea.each(this, a, b) },
            map: function(a) { return this.pushStack(ea.map(this, function(b, c) { return a.call(b, c, b) })) },
            slice: function() { return this.pushStack(X.apply(this, arguments)) },
            first: function() { return this.eq(0) },
            last: function() { return this.eq(-1) },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() { return this.prevObject || this.constructor(null) },
            push: Z,
            sort: W.sort,
            splice: W.splice
        }, ea.extend = ea.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, ea.extend({
            expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) { throw new Error(a) },
            noop: function() {},
            isFunction: function(a) { return "function" === ea.type(a) },
            isArray: Array.isArray || function(a) { return "array" === ea.type(a) },
            isWindow: function(a) { return null != a && a == a.window },
            isNumeric: function(a) { return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0 },
            isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
                try { if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
                if (ca.ownLast)
                    for (b in a) return ba.call(a, b);
                for (b in a);
                return void 0 === b || ba.call(a, b)
            },
            type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a },
            globalEval: function(b) { b && ea.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) },
            camelCase: function(a) { return a.replace(ga, "ms-").replace(ha, ia) },
            nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
            each: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a);
                if (d) {
                    if (h)
                        for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
                    else
                        for (f in a)
                            if (e = b.apply(a[f], d), e === !1) break
                } else if (h)
                    for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
                else
                    for (f in a)
                        if (e = b.call(a[f], f, a[f]), e === !1) break; return a
            },
            trim: function(a) { return null == a ? "" : (a + "").replace(fa, "") },
            makeArray: function(a, b) { var d = b || []; return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if ($) return $.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
                if (c !== c)
                    for (; void 0 !== b[d];) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
            map: function(a, b, d) {
                var e, f = 0,
                    g = a.length,
                    h = c(a),
                    i = [];
                if (h)
                    for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
                else
                    for (f in a) e = b(a[f], f, d), null != e && i.push(e);
                return Y.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) { var c, d, e; return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function() { return a.apply(b || this, c.concat(X.call(arguments))) }, d.guid = a.guid = a.guid || ea.guid++, d) : void 0 },
            now: function() { return +new Date },
            support: ca
        }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { _["[object " + b + "]"] = b.toLowerCase() });
        var ja = function(a) {
            function b(a, b, c, d) {
                var e, f, g, h, i, j, l, n, o, p;
                if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
                if (!d && I) {
                    if (11 !== h && (e = sa.exec(a)))
                        if (g = e[1]) { if (9 === h) { if (f = b.getElementById(g), !f || !f.parentNode) return c; if (f.id === g) return c.push(f), c } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c } else { if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c; if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c }
                    if (v.qsa && (!J || !J.test(a))) {
                        if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
                            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
                        }
                        if (p) try { return $.apply(c, o.querySelectorAll(p)), c } catch (q) {} finally { l || b.removeAttribute("id") }
                    }
                }
                return B(a.replace(ia, "$1"), b, c, d)
            }

            function c() {
                function a(c, d) { return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d }
                var b = [];
                return a
            }

            function d(a) { return a[N] = !0, a }

            function e(a) { var b = G.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

            function f(a, b) { for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b }

            function g(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
                if (d) return d;
                if (c)
                    for (; c = c.nextSibling;)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function h(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

            function i(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

            function j(a) { return d(function(b) { return b = +b, d(function(c, d) { for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

            function k(a) { return a && "undefined" != typeof a.getElementsByTagName && a }

            function l() {}

            function m(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

            function n(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = Q++;
                return b.first ? function(b, c, f) {
                    for (; b = b[d];)
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [P, f];
                    if (g) {
                        for (; b = b[d];)
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) { if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 }
                }
            }

            function o(a) {
                return a.length > 1 ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function p(a, c, d) { for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d); return d }

            function q(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

            function r(a, b, c, e, f, g) {
                return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        r = d || p(b || "*", h.nodeType ? [h] : h, []),
                        s = !a || !d && b ? r : q(r, m, a, h, i),
                        t = c ? f || (d ? a : o || e) ? [] : g : s;
                    if (c && c(s, t, h, i), e)
                        for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
                    if (d) {
                        if (f || a) {
                            if (f) {
                                for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
                                f(null, t = [], j, i)
                            }
                            for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
                        }
                    } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
                })
            }

            function s(a) {
                for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) { return a === b }, g, !0), j = n(function(a) { return aa(b, a) > -1 }, g, !0), k = [function(a, c, d) { var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d)); return b = null, e }]; e > h; h++)
                    if (c = w.relative[a[h].type]) k = [n(o(k), c)];
                    else {
                        if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) { for (d = ++h; e > d && !w.relative[a[d].type]; d++); return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({ value: " " === a[h - 2].type ? "*" : "" })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a)) }
                        k.push(c)
                    }
                return o(k)
            }

            function t(a, c) {
                var e = c.length > 0,
                    f = a.length > 0,
                    g = function(d, g, h, i, j) {
                        var k, l, m, n = 0,
                            o = "0",
                            p = d && [],
                            r = [],
                            s = C,
                            t = d || f && w.find.TAG("*", j),
                            u = P += null == s ? 1 : Math.random() || .1,
                            v = t.length;
                        for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
                            if (f && k) {
                                for (l = 0; m = a[l++];)
                                    if (m(k, g, h)) { i.push(k); break }
                                j && (P = u)
                            }
                            e && ((k = !m && k) && n--, d && p.push(k))
                        }
                        if (n += o, e && o !== n) {
                            for (l = 0; m = c[l++];) m(p, r, g, h);
                            if (d) {
                                if (n > 0)
                                    for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
                                r = q(r)
                            }
                            $.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
                        }
                        return j && (P = u, C = s), p
                    };
                return e ? d(g) : g
            }
            var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
                O = a.document,
                P = 0,
                Q = 0,
                R = c(),
                S = c(),
                T = c(),
                U = function(a, b) { return a === b && (E = !0), 0 },
                V = 1 << 31,
                W = {}.hasOwnProperty,
                X = [],
                Y = X.pop,
                Z = X.push,
                $ = X.push,
                _ = X.slice,
                aa = function(a, b) {
                    for (var c = 0, d = a.length; d > c; c++)
                        if (a[c] === b) return c;
                    return -1
                },
                ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                ca = "[\\x20\\t\\r\\n\\f]",
                da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ea = da.replace("w", "w#"),
                fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
                ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
                ha = new RegExp(ca + "+", "g"),
                ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
                ja = new RegExp("^" + ca + "*," + ca + "*"),
                ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
                la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
                ma = new RegExp(ga),
                na = new RegExp("^" + ea + "$"),
                oa = {
                    ID: new RegExp("^#(" + da + ")"),
                    CLASS: new RegExp("^\\.(" + da + ")"),
                    TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + fa),
                    PSEUDO: new RegExp("^" + ga),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ba + ")$", "i"),
                    needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
                },
                pa = /^(?:input|select|textarea|button)$/i,
                qa = /^h\d$/i,
                ra = /^[^{]+\{\s*\[native \w/,
                sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ta = /[+~]/,
                ua = /'|\\/g,
                va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
                wa = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
                xa = function() { F() };
            try { $.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType } catch (ya) {
                $ = {
                    apply: X.length ? function(a, b) { Z.apply(a, _.call(b)) } : function(a, b) {
                        for (var c = a.length, d = 0; a[c++] = b[d++];);
                        a.length = c - 1
                    }
                }
            }
            v = b.support = {}, y = b.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, F = b.setDocument = function(a) {
                var b, c, d = a ? a.ownerDocument || a : O;
                return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function(a) { return a.className = "i", !a.getAttribute("className") }), v.getElementsByTagName = e(function(a) { return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length }), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function(a) { return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length }), v.getById ? (w.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && I) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, w.filter.ID = function(a) { var b = a.replace(va, wa); return function(a) { return a.getAttribute("id") === b } }) : (delete w.find.ID, w.filter.ID = function(a) { var b = a.replace(va, wa); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), w.find.TAG = v.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) { for (; c = f[e++];) 1 === c.nodeType && d.push(c); return d }
                    return f
                }, w.find.CLASS = v.getElementsByClassName && function(a, b) { return I ? b.getElementsByClassName(a) : void 0 }, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function(a) { H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]") }), e(function(a) {
                    var b = d.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
                })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) { v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga) }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        for (; b = b.parentNode;)
                            if (b === a) return !0;
                    return !1
                }, U = b ? function(a, b) { if (a === b) return E = !0, 0; var c = !a.compareDocumentPosition - !b.compareDocumentPosition; return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1) } : function(a, b) {
                    if (a === b) return E = !0, 0;
                    var c, e = 0,
                        f = a.parentNode,
                        h = b.parentNode,
                        i = [a],
                        j = [b];
                    if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
                    if (f === h) return g(a, b);
                    for (c = a; c = c.parentNode;) i.unshift(c);
                    for (c = b; c = c.parentNode;) j.unshift(c);
                    for (; i[e] === j[e];) e++;
                    return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
                }, d) : G
            }, b.matches = function(a, c) { return b(a, null, null, c) }, b.matchesSelector = function(a, c) {
                if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try { var d = L.call(a, c); if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
                return b(c, G, null, [a]).length > 0
            }, b.contains = function(a, b) { return (a.ownerDocument || a) !== G && F(a), M(a, b) }, b.attr = function(a, b) {
                (a.ownerDocument || a) !== G && F(a);
                var c = w.attrHandle[b.toLowerCase()],
                    d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
                return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }, b.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, b.uniqueSort = function(a) {
                var b, c = [],
                    d = 0,
                    e = 0;
                if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) { for (; b = a[e++];) b === a[e] && (d = c.push(e)); for (; d--;) a.splice(c[d], 1) }
                return D = null, a
            }, x = b.getText = function(a) {
                var b, c = "",
                    d = 0,
                    e = a.nodeType;
                if (e) { if (1 === e || 9 === e || 11 === e) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += x(a) } else if (3 === e || 4 === e) return a.nodeValue } else
                    for (; b = a[d++];) c += x(b);
                return c
            }, w = b.selectors = {
                cacheLength: 50,
                createPseudo: d,
                match: oa,
                attrHandle: {},
                find: {},
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(a) { return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
                filter: {
                    TAG: function(a) { var b = a.replace(va, wa).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                    CLASS: function(a) { var b = R[a + " "]; return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) },
                    ATTR: function(a, c, d) { return function(e) { var f = b.attr(e, a); return null == f ? "!=" === c : c ? (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0 } },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    for (; p;) {
                                        for (l = b; l = l[p];)
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                                        if (1 === l.nodeType && ++m && l === b) { k[a] = [P, n, m]; break }
                                } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
                                else
                                    for (;
                                        (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, c) { var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a); return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) { for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g]) }) : function(a) { return f(a, 0, e) }) : f }
                },
                pseudos: {
                    not: d(function(a) {
                        var b = [],
                            c = [],
                            e = A(a.replace(ia, "$1"));
                        return e[N] ? d(function(a, b, c, d) { for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, d, f) { return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop() }
                    }),
                    has: d(function(a) { return function(c) { return b(a, c).length > 0 } }),
                    contains: d(function(a) {
                        return a = a.replace(va, wa),
                            function(b) { return (b.textContent || b.innerText || x(b)).indexOf(a) > -1 }
                    }),
                    lang: d(function(a) {
                        return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                    root: function(a) { return a === H },
                    focus: function(a) { return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                    enabled: function(a) { return a.disabled === !1 },
                    disabled: function(a) { return a.disabled === !0 },
                    checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                    selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) { return !w.pseudos.empty(a) },
                    header: function(a) { return qa.test(a.nodeName) },
                    input: function(a) { return pa.test(a.nodeName) },
                    button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                    text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                    first: j(function() { return [0] }),
                    last: j(function(a, b) { return [b - 1] }),
                    eq: j(function(a, b, c) { return [0 > c ? c + b : c] }),
                    even: j(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                    odd: j(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                    lt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                    gt: j(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
                }
            }, w.pseudos.nth = w.pseudos.eq;
            for (u in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[u] = h(u);
            for (u in { submit: !0, reset: !0 }) w.pseudos[u] = i(u);
            return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
                var d, e, f, g, h, i, j, k = S[a + " "];
                if (k) return c ? 0 : k.slice(0);
                for (h = a, i = [], j = w.preFilter; h;) {
                    (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({ value: d, type: e[0].replace(ia, " ") }), h = h.slice(d.length));
                    for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({ value: d, type: g, matches: e }), h = h.slice(d.length));
                    if (!d) break
                }
                return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
            }, A = b.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = T[a + " "];
                if (!f) {
                    for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                    f = T(a, t(e, d)), f.selector = a
                }
                return f
            }, B = b.select = function(a, b, c, d) {
                var e, f, g, h, i, j = "function" == typeof a && a,
                    l = !d && z(a = j.selector || a);
                if (c = c || [], 1 === l.length) {
                    if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
                        if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
                        j && (b = b.parentNode), a = a.slice(f.shift().value.length)
                    }
                    for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
                        if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) { if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c; break }
                }
                return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
            }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) { return 1 & a.compareDocumentPosition(G.createElement("div")) }), e(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || f("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), v.attributes && e(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || f("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), e(function(a) { return null == a.getAttribute("disabled") }) || f(ba, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), b
        }(a);
        ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
        var ka = ea.expr.match.needsContext,
            la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            ma = /^.[^:#\[\.,]*$/;
        ea.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) { return 1 === a.nodeType })) }, ea.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(ea(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (ea.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) ea.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) { return this.pushStack(d(this, a || [], !1)) },
            not: function(a) { return this.pushStack(d(this, a || [], !0)) },
            is: function(a) { return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length }
        });
        var na, oa = a.document,
            pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            qa = ea.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
                            for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    if (d = oa.getElementById(c[2]), d && d.parentNode) {
                        if (d.id !== c[2]) return na.find(a);
                        this.length = 1, this[0] = d
                    }
                    return this.context = oa, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
            };
        qa.prototype = ea.fn, na = ea(oa);
        var ra = /^(?:parents|prev(?:Until|All))/,
            sa = { children: !0, contents: !0, next: !0, prev: !0 };
        ea.extend({ dir: function(a, b, c) { for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b]; return d }, sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c } }), ea.fn.extend({
            has: function(a) {
                var b, c = ea(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (ea.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) { f.push(c); break }
                return this.pushStack(f.length > 1 ? ea.unique(f) : f)
            },
            index: function(a) { return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
            add: function(a, b) { return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b)))) },
            addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
        }), ea.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return ea.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return ea.dir(a, "parentNode", c) }, next: function(a) { return e(a, "nextSibling") }, prev: function(a) { return e(a, "previousSibling") }, nextAll: function(a) { return ea.dir(a, "nextSibling") }, prevAll: function(a) { return ea.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return ea.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return ea.dir(a, "previousSibling", c) }, siblings: function(a) { return ea.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return ea.sibling(a.firstChild) }, contents: function(a) { return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes) } }, function(a, b) { ea.fn[a] = function(c, d) { var e = ea.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e) } });
        var ta = /\S+/g,
            ua = {};
        ea.Callbacks = function(a) {
            a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
            var b, c, d, e, g, h, i = [],
                j = !a.once && [],
                k = function(f) {
                    for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
                        if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) { c = !1; break }
                    b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
                },
                l = {
                    add: function() { if (i) { var d = i.length;! function f(b) { ea.each(b, function(b, c) { var d = ea.type(c); "function" === d ? a.unique && l.has(c) || i.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = i.length : c && (h = d, k(c)) } return this },
                    remove: function() {
                        return i && ea.each(arguments, function(a, c) {
                            for (var d;
                                (d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
                        }), this
                    },
                    has: function(a) { return a ? ea.inArray(a, i) > -1 : !(!i || !i.length) },
                    empty: function() { return i = [], e = 0, this },
                    disable: function() { return i = j = c = void 0, this },
                    disabled: function() { return !i },
                    lock: function() { return j = void 0, c || l.disable(), this },
                    locked: function() { return !j },
                    fireWith: function(a, c) { return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this },
                    fire: function() { return l.fireWith(this, arguments), this },
                    fired: function() { return !!d }
                };
            return l
        }, ea.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", ea.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ea.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ea.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() { return c },
                        always: function() { return e.done(arguments).fail(arguments), this },
                        then: function() {
                            var a = arguments;
                            return ea.Deferred(function(c) {
                                ea.each(b, function(b, f) {
                                    var g = ea.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) { return null != a ? ea.extend(a, d) : d }
                    },
                    e = {};
                return d.pipe = d.then, ea.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b, c, d, e = 0,
                    f = X.call(arguments),
                    g = f.length,
                    h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
                    i = 1 === h ? a : ea.Deferred(),
                    j = function(a, c, d) { return function(e) { c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d) } };
                if (g > 1)
                    for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
                return h || i.resolveWith(d, f), i.promise()
            }
        });
        var va;
        ea.fn.ready = function(a) { return ea.ready.promise().done(a), this }, ea.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) { a ? ea.readyWait++ : ea.ready(!0) },
            ready: function(a) {
                if (a === !0 ? !--ea.readyWait : !ea.isReady) {
                    if (!oa.body) return setTimeout(ea.ready);
                    ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
                }
            }
        }), ea.ready.promise = function(b) {
            if (!va)
                if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
                else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
            else {
                oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
                var c = !1;
                try { c = null == a.frameElement && oa.documentElement } catch (d) {}
                c && c.doScroll && ! function e() {
                    if (!ea.isReady) {
                        try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) }
                        g(), ea.ready()
                    }
                }()
            }
            return va.promise(b)
        };
        var wa, xa = "undefined";
        for (wa in ea(ca)) break;
        ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function() {
                var a, b, c, d;
                c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
            }),
            function() {
                var a = oa.createElement("div");
                if (null == ca.deleteExpando) { ca.deleteExpando = !0; try { delete a.test } catch (b) { ca.deleteExpando = !1 } }
                a = null
            }(), ea.acceptData = function(a) {
                var b = ea.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            };
        var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            za = /([A-Z])/g;
        ea.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a) }, data: function(a, b, c) { return k(a, b, c) }, removeData: function(a, b) { return l(a, b) }, _data: function(a, b, c) { return k(a, b, c, !0) }, _removeData: function(a, b) { return l(a, b, !0) } }), ea.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
                        for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
                        ea._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() { ea.data(this, a) }) : arguments.length > 1 ? this.each(function() { ea.data(this, a, b) }) : f ? i(f, a, ea.data(f, a)) : void 0
            },
            removeData: function(a) { return this.each(function() { ea.removeData(this, a) }) }
        }), ea.extend({
            queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0 },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = ea.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = ea._queueHooks(a, b),
                    g = function() { ea.dequeue(a, b) };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) { var c = b + "queueHooks"; return ea._data(a, c) || ea._data(a, c, { empty: ea.Callbacks("once memory").add(function() { ea._removeData(a, b + "queue"), ea._removeData(a, c) }) }) }
        }), ea.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = ea.queue(this, a, b);
                    ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
                })
            },
            dequeue: function(a) { return this.each(function() { ea.dequeue(this, a) }) },
            clearQueue: function(a) { return this.queue(a || "fx", []) },
            promise: function(a, b) {
                var c, d = 1,
                    e = ea.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) };
                for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Ba = ["Top", "Right", "Bottom", "Left"],
            Ca = function(a, b) { return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a) },
            Da = ea.access = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === ea.type(c)) { e = !0; for (h in c) ea.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(ea(a), c) })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            Ea = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = oa.createElement("input"),
                b = oa.createElement("div"),
                c = oa.createDocumentFragment();
            if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() { ca.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == ca.deleteExpando) { ca.deleteExpando = !0; try { delete b.test } catch (d) { ca.deleteExpando = !1 } }
        }(),
        function() {
            var b, c, d = oa.createElement("div");
            for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
        var Fa = /^(?:input|select|textarea)$/i,
            Ga = /^key/,
            Ha = /^(?:mouse|pointer|contextmenu)|click/,
            Ia = /^(?:focusinfocus|focusoutblur)$/,
            Ja = /^([^.]*)(?:\.(.+)|)$/;
        ea.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
                if (q) {
                    for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) { return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && ea.expr.match.needsContext.test(e), namespace: o.join(".") }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
                    a = null
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
                if (q && (k = q.events)) {
                    for (b = (b || "").match(ta) || [""], j = b.length; j--;)
                        if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                            for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
                        } else
                            for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
                    ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, j, k, l, m = [d || oa],
                    n = ba.call(b, "type") ? b.type : b,
                    o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
                if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
                    if (!e && !j.noBubble && !ea.isWindow(d)) {
                        for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
                        k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
                    }
                    for (l = 0;
                        (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                    if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
                        k = d[g], k && (d[g] = null), ea.event.triggered = n;
                        try { d[n]() } catch (p) {}
                        ea.event.triggered = void 0, k && (d[g] = k)
                    }
                    return b.result
                }
            },
            dispatch: function(a) {
                a = ea.event.fix(a);
                var b, c, d, e, f, g = [],
                    h = X.call(arguments),
                    i = (ea._data(this, "events") || {})[a.type] || [],
                    j = ea.event.special[a.type] || {};
                if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
                    for (g = ea.event.handlers.call(this, a, i), b = 0;
                        (e = g[b++]) && !a.isPropagationStopped();)
                        for (a.currentTarget = e.elem, f = 0;
                            (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
                    return j.postDispatch && j.postDispatch.call(this, a), a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [],
                    h = b.delegateCount,
                    i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i != this; i = i.parentNode || this)
                        if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
                            e.length && g.push({ elem: i, handlers: e })
                        }
                return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
            },
            fix: function(a) {
                if (a[ea.expando]) return a;
                var b, c, d, e = a.type,
                    f = a,
                    g = this.fixHooks[e];
                for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
                return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button,
                        g = b.fromElement;
                    return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
                }
            },
            special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== o() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === o() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return ea.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } },
            simulate: function(a, b, c, d) {
                var e = ea.extend(new ea.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
                d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, ea.removeEvent = oa.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
        }, ea.Event = function(a, b) {
            return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a,
                b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
        }, ea.Event.prototype = {
            isDefaultPrevented: n,
            isPropagationStopped: n,
            isImmediatePropagationStopped: n,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
            }
        }, ea.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
            ea.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this,
                        e = a.relatedTarget,
                        f = a.handleObj;
                    return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
                }
            }
        }), ca.submitBubbles || (ea.event.special.submit = {
            setup: function() {
                return ea.nodeName(this, "form") ? !1 : void ea.event.add(this, "click._submit keypress._submit", function(a) {
                    var b = a.target,
                        c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
                    c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) { a._submit_bubble = !0 }), ea._data(c, "submitBubbles", !0))
                })
            },
            postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0)) },
            teardown: function() { return ea.nodeName(this, "form") ? !1 : void ea.event.remove(this, "._submit") }
        }), ca.changeBubbles || (ea.event.special.change = {
            setup: function() {
                return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), ea.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0) })), !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
                    var b = a.target;
                    Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0) }), ea._data(b, "changeBubbles", !0))
                })
            },
            handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 },
            teardown: function() { return ea.event.remove(this, "._change"), !Fa.test(this.nodeName) }
        }), ca.focusinBubbles || ea.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
            var c = function(a) { ea.event.simulate(b, a.target, ea.event.fix(a), !0) };
            ea.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this,
                        e = ea._data(d, b);
                    e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this,
                        e = ea._data(d, b) - 1;
                    e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
                }
            }
        }), ea.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this }
                if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
                else if (!d) return this;
                return 1 === e && (g = d, d = function(a) { return ea().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function() { ea.event.add(this, a, d, c, b) })
            },
            one: function(a, b, c, d) { return this.on(a, b, c, d, 1) },
            off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() { ea.event.remove(this, a, c, b) }) },
            trigger: function(a, b) { return this.each(function() { ea.event.trigger(a, b, this) }) },
            triggerHandler: function(a, b) { var c = this[0]; return c ? ea.event.trigger(a, b, c, !0) : void 0 }
        });
        var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            La = / jQuery\d+="(?:null|\d+)"/g,
            Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
            Na = /^\s+/,
            Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Pa = /<([\w:]+)/,
            Qa = /<tbody/i,
            Ra = /<|&#?\w+;/,
            Sa = /<(?:script|style|link)/i,
            Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Ua = /^$|\/(?:java|ecma)script/i,
            Va = /^true\/(.*)/,
            Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xa = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
            Ya = p(oa),
            Za = Ya.appendChild(oa.createElement("div"));
        Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
                if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
                    for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
                if (b)
                    if (c)
                        for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
                    else w(a, f);
                return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
                    if (f = a[o], f || 0 === f)
                        if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
                        else if (Ra.test(f)) {
                    for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
                    if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
                        for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                    for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
                    h = m.lastChild
                } else n.push(b.createTextNode(f));
                for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
                    if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
                        for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
                return h = null, m
            },
            cleanData: function(a, b) {
                for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
                    if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
                        if (f.events)
                            for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
                        i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
                    }
            }
        }), ea.fn.extend({
            text: function(a) { return Da(this, function(a) { return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a)) }, null, a, arguments.length) },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = s(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
            after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
            remove: function(a, b) { for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c)); return this },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++) {
                    for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
                    a.options && ea.nodeName(a, "select") && (a.options.length = 0)
                }
                return this
            },
            clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return ea.clone(this, a, b) }) },
            html: function(a) {
                return Da(this, function(a) {
                    var b = this[0] || {},
                        c = 0,
                        d = this.length;
                    if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
                    if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
                        a = a.replace(Oa, "<$1></$2>");
                        try {
                            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() },
            detach: function(a) { return this.remove(a, !0) },
            domManip: function(a, b) {
                a = Y.apply([], a);
                var c, d, e, f, g, h, i = 0,
                    j = this.length,
                    k = this,
                    l = j - 1,
                    m = a[0],
                    n = ea.isFunction(m);
                if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function(c) {
                    var d = k.eq(c);
                    n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
                });
                if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
                    for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
                    if (e)
                        for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
                    h = c = null
                }
                return this
            }
        }), ea.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { ea.fn[a] = function(a) { for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get()); return this.pushStack(e) } });
        var $a, _a = {};
        ! function() {
            var a;
            ca.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, d;
                return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
            }
        }();
        var ab, bb, cb = /^margin/,
            db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
            eb = /^(top|right|bottom|left)$/;
        a.getComputedStyle ? (ab = function(b) { return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null) }, bb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : oa.documentElement.currentStyle && (ab = function(a) { return a.currentStyle }, bb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" }), ! function() {
            function b() {
                var b, c, d, e;
                c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
            }
            var c, d, e, f, g, h, i;
            c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, { reliableHiddenOffsets: function() { return null == h && b(), h }, boxSizingReliable: function() { return null == g && b(), g }, pixelPosition: function() { return null == f && b(), f }, reliableMarginRight: function() { return null == i && b(), i } }))
        }(), ea.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        };
        var fb = /alpha\([^)]*\)/i,
            gb = /opacity\s*=\s*([^)]*)/,
            hb = /^(none|table(?!-c[ea]).+)/,
            ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
            jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
            kb = { position: "absolute", visibility: "hidden", display: "block" },
            lb = { letterSpacing: "0", fontWeight: "400" },
            mb = ["Webkit", "O", "Moz", "ms"];
        ea.extend({
            cssHooks: { opacity: { get: function(a, b) { if (b) { var c = bb(a, "opacity"); return "" === c ? "1" : c } } } },
            cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
            cssProps: { "float": ca.cssFloat ? "cssFloat" : "styleFloat" },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = ea.camelCase(b),
                        i = a.style;
                    if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                    if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {}
                }
            },
            css: function(a, b, c, d) { var e, f, g, h = ea.camelCase(b); return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f }
        }), ea.each(["height", "width"], function(a, b) { ea.cssHooks[b] = { get: function(a, c, d) { return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() { return F(a, b, d) }) : F(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && ab(a); return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0) } } }), ca.opacity || (ea.cssHooks.opacity = {
            get: function(a, b) { return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                    f = d && d.filter || c.filter || "";
                c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
            }
        }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) { return b ? ea.swap(a, { display: "inline-block" }, bb, [a, "marginRight"]) : void 0 }), ea.each({ margin: "", padding: "", border: "Width" }, function(a, b) { ea.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, cb.test(a) || (ea.cssHooks[a + b].set = D) }), ea.fn.extend({
            css: function(a, b) {
                return Da(this, function(a, b, c) {
                    var d, e, f = {},
                        g = 0;
                    if (ea.isArray(b)) { for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d); return f }
                    return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() { return C(this, !0) },
            hide: function() { return C(this) },
            toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { Ca(this) ? ea(this).show() : ea(this).hide() }) }
        }), ea.Tween = G, G.prototype = { constructor: G, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px") }, cur: function() { var a = G.propHooks[this.prop]; return a && a.get ? a.get(this) : G.propHooks._default.get(this) }, run: function(a) { var b, c = G.propHooks[this.prop]; return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this } }, G.prototype.init.prototype = G.prototype, G.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, G.propHooks.scrollTop = G.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, ea.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, ea.fx = G.prototype.init, ea.fx.step = {};
        var nb, ob, pb = /^(?:toggle|show|hide)$/,
            qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
            rb = /queueHooks$/,
            sb = [K],
            tb = {
                "*": [function(a, b) {
                    var c = this.createTween(a, b),
                        d = c.cur(),
                        e = qb.exec(b),
                        f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
                        g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
                        h = 1,
                        i = 20;
                    if (g && g[3] !== f) {
                        f = f || g[3], e = e || [], g = +d || 1;
                        do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                    }
                    return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
                }]
            };
        ea.Animation = ea.extend(M, { tweener: function(a, b) { ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b) }, prefilter: function(a, b) { b ? sb.unshift(a) : sb.push(a) } }), ea.speed = function(a, b, c) { var d = a && "object" == typeof a ? ea.extend({}, a) : { complete: c || !c && b || ea.isFunction(a) && a, duration: a, easing: c && b || b && !ea.isFunction(b) && b }; return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue) }, d }, ea.fn.extend({
                fadeTo: function(a, b, c, d) { return this.filter(Ca).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
                animate: function(a, b, c, d) {
                    var e = ea.isEmptyObject(a),
                        f = ea.speed(b, c, d),
                        g = function() {
                            var b = M(this, ea.extend({}, a), f);
                            (e || ea._data(this, "finish")) && b.stop(!0)
                        };
                    return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
                },
                stop: function(a, b, c) {
                    var d = function(a) {
                        var b = a.stop;
                        delete a.stop, b(c)
                    };
                    return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                        var b = !0,
                            e = null != a && a + "queueHooks",
                            f = ea.timers,
                            g = ea._data(this);
                        if (e) g[e] && g[e].stop && d(g[e]);
                        else
                            for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
                        for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                        (b || !c) && ea.dequeue(this, a)
                    })
                },
                finish: function(a) {
                    return a !== !1 && (a = a || "fx"), this.each(function() {
                        var b, c = ea._data(this),
                            d = c[a + "queue"],
                            e = c[a + "queueHooks"],
                            f = ea.timers,
                            g = d ? d.length : 0;
                        for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                        for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                        delete c.finish
                    })
                }
            }), ea.each(["toggle", "show", "hide"], function(a, b) {
                var c = ea.fn[b];
                ea.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e) }
            }), ea.each({ slideDown: I("show"), slideUp: I("hide"), slideToggle: I("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { ea.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), ea.timers = [], ea.fx.tick = function() {
                var a, b = ea.timers,
                    c = 0;
                for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
                b.length || ea.fx.stop(), nb = void 0
            }, ea.fx.timer = function(a) { ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop() }, ea.fx.interval = 13, ea.fx.start = function() { ob || (ob = setInterval(ea.fx.tick, ea.fx.interval)) }, ea.fx.stop = function() { clearInterval(ob), ob = null }, ea.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ea.fn.delay = function(a, b) {
                return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                    var d = setTimeout(b, a);
                    c.stop = function() { clearTimeout(d) }
                })
            },
            function() {
                var a, b, c, d, e;
                b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
            }();
        var ub = /\r/g;
        ea.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                return arguments.length ? (d = ea.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) { return null == a ? "" : a + "" })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
            }
        }), ea.extend({
            valHooks: {
                option: { get: function(a) { var b = ea.find.attr(a, "value"); return null != b ? b : ea.trim(ea.text(a)) } },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
                                if (b = ea(c).val(), f) return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
                            if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                        return c || (a.selectedIndex = -1), e
                    }
                }
            }
        }), ea.each(["radio", "checkbox"], function() { ea.valHooks[this] = { set: function(a, b) { return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0 } }, ca.checkOn || (ea.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
        var vb, wb, xb = ea.expr.attrHandle,
            yb = /^(?:checked|selected)$/i,
            zb = ca.getSetAttribute,
            Ab = ca.input;
        ea.fn.extend({ attr: function(a, b) { return Da(this, ea.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { ea.removeAttr(this, a) }) } }), ea.extend({
            attr: function(a, b, c) { var d, e, f = a.nodeType; return a && 3 !== f && 8 !== f && 2 !== f ? typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b)) : void 0 },
            removeAttr: function(a, b) {
                var c, d, e = 0,
                    f = b && b.match(ta);
                if (f && 1 === a.nodeType)
                    for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
            },
            attrHooks: { type: { set: function(a, b) { if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }
        }), wb = { set: function(a, b, c) { return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c } }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = xb[b] || ea.find.attr;
            xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) { var e, f; return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e } : function(a, b, c) { return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null }
        }), Ab && zb || (ea.attrHooks.value = { set: function(a, b, c) { return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c) } }), zb || (vb = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, xb.id = xb.name = xb.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, ea.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: vb.set }, ea.attrHooks.contenteditable = { set: function(a, b, c) { vb.set(a, "" === b ? !1 : b, c) } }, ea.each(["width", "height"], function(a, b) { ea.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), ca.style || (ea.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
        var Bb = /^(?:input|select|textarea|button|object)$/i,
            Cb = /^(?:a|area)$/i;
        ea.fn.extend({ prop: function(a, b) { return Da(this, ea.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = ea.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), ea.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; return a && 3 !== g && 8 !== g && 2 !== g ? (f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0 }, propHooks: { tabIndex: { get: function(a) { var b = ea.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1 } } } }), ca.hrefNormalized || ea.each(["href", "src"], function(a, b) { ea.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), ca.optSelected || (ea.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { ea.propFix[this.toLowerCase()] = this }), ca.enctype || (ea.propFix.enctype = "encoding");
        var Db = /[\t\r\n\f]/g;
        ea.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = "string" == typeof a && a;
                if (ea.isFunction(a)) return this.each(function(b) { ea(this).addClass(a.call(this, b, this.className)) });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
                            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = ea.trim(d), c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0,
                    i = this.length,
                    j = 0 === arguments.length || "string" == typeof a && a;
                if (ea.isFunction(a)) return this.each(function(b) { ea(this).removeClass(a.call(this, b, this.className)) });
                if (j)
                    for (b = (a || "").match(ta) || []; i > h; h++)
                        if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
                            for (f = 0; e = b[f++];)
                                for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
                            g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) { ea(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                    if ("string" === c)
                        for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
                })
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
                return !1
            }
        }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { ea.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), ea.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
        var Eb = ea.now(),
            Fb = /\?/,
            Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        ea.parseJSON = function(b) {
            if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
            var c, d = null,
                e = ea.trim(b + "");
            return e && !ea.trim(e.replace(Gb, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
        }, ea.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c };
        var Hb, Ib, Jb = /#.*$/,
            Kb = /([?&])_=[^&]*/,
            Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Nb = /^(?:GET|HEAD)$/,
            Ob = /^\/\//,
            Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            Qb = {},
            Rb = {},
            Sb = "*/".concat("*");
        try { Ib = location.href } catch (Tb) { Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href }
        Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: { url: Ib, type: "GET", isLocal: Mb.test(Hb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Sb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ea.parseJSON, "text xml": ea.parseXML }, flatOptions: { url: !0, context: !0 } },
            ajaxSetup: function(a, b) { return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a) },
            ajaxPrefilter: N(Qb),
            ajaxTransport: N(Rb),
            ajax: function(a, b) {
                function c(a, b, c, d) {
                    var e, k, r, s, u, w = b;
                    2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]),
                        v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
                }
                "object" == typeof a && (b = a, a = void 0), b = b || {};
                var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
                    m = l.context || l,
                    n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
                    o = ea.Deferred(),
                    p = ea.Callbacks("once memory"),
                    q = l.statusCode || {},
                    r = {},
                    s = {},
                    t = 0,
                    u = "canceled",
                    v = {
                        readyState: 0,
                        getResponseHeader: function(a) {
                            var b;
                            if (2 === t) {
                                if (!k)
                                    for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
                                b = k[a.toLowerCase()]
                            }
                            return null == b ? null : b
                        },
                        getAllResponseHeaders: function() { return 2 === t ? g : null },
                        setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this },
                        overrideMimeType: function(a) { return t || (l.mimeType = a), this },
                        statusCode: function(a) {
                            var b;
                            if (a)
                                if (2 > t)
                                    for (b in a) q[b] = [q[b], a[b]];
                                else v.always(a[v.status]);
                            return this
                        },
                        abort: function(a) { var b = a || u; return j && j.abort(b), c(0, b), this }
                    };
                if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
                i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
                for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
                if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
                u = "abort";
                for (e in { success: 1, error: 1, complete: 1 }) v[e](l[e]);
                if (j = O(Rb, l, b, v)) {
                    v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() { v.abort("timeout") }, l.timeout));
                    try { t = 1, j.send(r, c) } catch (w) {
                        if (!(2 > t)) throw w;
                        c(-1, w)
                    }
                } else c(-1, "No Transport");
                return v
            },
            getJSON: function(a, b, c) { return ea.get(a, b, c, "json") },
            getScript: function(a, b) { return ea.get(a, void 0, b, "script") }
        }), ea.each(["get", "post"], function(a, b) { ea[b] = function(a, c, d, e) { return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), ea._evalUrl = function(a) { return ea.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, ea.fn.extend({
            wrapAll: function(a) {
                if (ea.isFunction(a)) return this.each(function(b) { ea(this).wrapAll(a.call(this, b)) });
                if (this[0]) {
                    var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]), b.map(function() { for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild; return a }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                return this.each(ea.isFunction(a) ? function(b) { ea(this).wrapInner(a.call(this, b)) } : function() {
                    var b = ea(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) { var b = ea.isFunction(a); return this.each(function(c) { ea(this).wrapAll(b ? a.call(this, c) : a) }) },
            unwrap: function() { return this.parent().each(function() { ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes) }).end() }
        }), ea.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display")) }, ea.expr.filters.visible = function(a) { return !ea.expr.filters.hidden(a) };
        var Ub = /%20/g,
            Vb = /\[\]$/,
            Wb = /\r?\n/g,
            Xb = /^(?:submit|button|image|reset|file)$/i,
            Yb = /^(?:input|select|textarea|keygen)/i;
        ea.param = function(a, b) {
            var c, d = [],
                e = function(a, b) { b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
            if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() { e(this.name, this.value) });
            else
                for (c in a) S(c, a[c], b, e);
            return d.join("&").replace(Ub, "+")
        }, ea.fn.extend({ serialize: function() { return ea.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = ea.prop(this, "elements"); return a ? ea.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !ea(this).is(":disabled") && Yb.test(this.nodeName) && !Xb.test(a) && (this.checked || !Ea.test(a)) }).map(function(a, b) { var c = ea(this).val(); return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) { return { name: b.name, value: a.replace(Wb, "\r\n") } }) : { name: b.name, value: c.replace(Wb, "\r\n") } }).get() } }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U() } : T;
        var Zb = 0,
            $b = {},
            _b = ea.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() { for (var a in $b) $b[a](void 0, !0) }), ca.cors = !!_b && "withCredentials" in _b, _b = ca.ajax = !!_b, _b && ea.ajaxTransport(function(a) {
            if (!a.crossDomain || ca.cors) {
                var b;
                return {
                    send: function(c, d) {
                        var e, f = a.xhr(),
                            g = ++Zb;
                        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                            for (e in a.xhrFields) f[e] = a.xhrFields[e];
                        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                        for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                        f.send(a.hasContent && a.data || null), b = function(c, e) {
                            var h, i, j;
                            if (b && (e || 4 === f.readyState))
                                if (delete $b[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
                                else {
                                    j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                    try { i = f.statusText } catch (k) { i = "" }
                                    h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                                }
                            j && d(h, i, j, f.getAllResponseHeaders())
                        }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = $b[g] = b : b()
                    },
                    abort: function() { b && b(void 0, !0) }
                }
            }
        }), ea.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return ea.globalEval(a), a } } }), ea.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), ea.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c = oa.head || ea("head")[0] || oa.documentElement;
                return {
                    send: function(d, e) {
                        b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                        }, c.insertBefore(b, c.firstChild)
                    },
                    abort: function() { b && b.onload(void 0, !0) }
                }
            }
        });
        var ac = [],
            bc = /(=)\?(?=&|$)|\?\?/;
        ea.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = ac.pop() || ea.expando + "_" + Eb++; return this[a] = !0, a } }), ea.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (bc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && bc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(bc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || ea.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ac.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), ea.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || oa;
            var d = la.exec(a),
                e = !c && [];
            return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
        };
        var cc = ea.fn.load;
        ea.fn.load = function(a, b, c) {
            if ("string" != typeof a && cc) return cc.apply(this, arguments);
            var d, e, f, g = this,
                h = a.indexOf(" ");
            return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({ url: a, type: f, dataType: "html", data: b }).done(function(a) { e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, e || [a.responseText, b, a]) }), this
        }, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { ea.fn[b] = function(a) { return this.on(b, a) } }), ea.expr.filters.animated = function(a) { return ea.grep(ea.timers, function(b) { return a === b.elem }).length };
        var dc = a.document.documentElement;
        ea.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = ea.css(a, "position"),
                    l = ea(a),
                    m = {};
                "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
            }
        }, ea.fn.extend({
            offset: function(a) {
                if (arguments.length) return void 0 === a ? this : this.each(function(b) { ea.offset.setOffset(this, a, b) });
                var b, c, d = { top: 0, left: 0 },
                    e = this[0],
                    f = e && e.ownerDocument;
                return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d) : void 0
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = { top: 0, left: 0 },
                        d = this[0];
                    return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - ea.css(d, "marginTop", !0), left: b.left - c.left - ea.css(d, "marginLeft", !0) }
                }
            },
            offsetParent: function() { return this.map(function() { for (var a = this.offsetParent || dc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent; return a || dc }) }
        }), ea.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
            var c = /Y/.test(b);
            ea.fn[a] = function(d) { return Da(this, function(a, d, e) { var f = V(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) }
        }), ea.each(["top", "left"], function(a, b) { ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) { return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0 }) }), ea.each({ Height: "height", Width: "width" }, function(a, b) {
            ea.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
                ea.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d),
                        g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return Da(this, function(b, c, d) { var e; return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g) }, b, f ? d : void 0, f, null)
                }
            })
        }), ea.fn.size = function() { return this.length }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return ea });
        var ec = a.jQuery,
            fc = a.$;
        return ea.noConflict = function(b) { return a.$ === ea && (a.$ = fc), b && a.jQuery === ea && (a.jQuery = ec), ea }, typeof b === xa && (a.jQuery = a.$ = ea), ea
    }),
    function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery) }(function(a) {
        function b(a) { return h.raw ? a : encodeURIComponent(a) }

        function c(a) { return h.raw ? a : decodeURIComponent(a) }

        function d(a) { return b(h.json ? JSON.stringify(a) : String(a)) }

        function e(a) { 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return a = decodeURIComponent(a.replace(g, " ")), h.json ? JSON.parse(a) : a } catch (b) {} }

        function f(b, c) { var d = h.raw ? b : e(b); return a.isFunction(c) ? c(d) : d }
        var g = /\+/g,
            h = a.cookie = function(e, g, i) {
                if (arguments.length > 1 && !a.isFunction(g)) {
                    if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) {
                        var j = i.expires,
                            k = i.expires = new Date;
                        k.setMilliseconds(k.getMilliseconds() + 864e5 * j)
                    }
                    return document.cookie = [b(e), "=", d(g), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("")
                }
                for (var l = e ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) {
                    var p = m[n].split("="),
                        q = c(p.shift()),
                        r = p.join("=");
                    if (e === q) { l = f(r, g); break }
                    e || void 0 === (r = f(r)) || (l[q] = r)
                }
                return l
            };
        h.defaults = {}, a.removeCookie = function(b, c) { return a.cookie(b, "", a.extend({}, c, { expires: -1 })), !a.cookie(b) }
    }), ! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(a.jQuery) }(this, function(a) {
        function b(a) { if (a in l.style) return a; for (var b = ["Moz", "Webkit", "O", "ms"], c = a.charAt(0).toUpperCase() + a.substr(1), d = 0; d < b.length; ++d) { var e = b[d] + c; if (e in l.style) return e } }

        function c() { return l.style[m.transform] = "", l.style[m.transform] = "rotateY(90deg)", "" !== l.style[m.transform] }

        function d(a) { return "string" == typeof a && this.parse(a), this }

        function e(a, b, c) { b === !0 ? a.queue(c) : b ? a.queue(b, c) : a.each(function() { c.call(this) }) }

        function f(b) { var c = []; return a.each(b, function(b) { b = a.camelCase(b), b = a.transit.propertyMap[b] || a.cssProps[b] || b, b = i(b), m[b] && (b = i(m[b])), -1 === a.inArray(b, c) && c.push(b) }), c }

        function g(b, c, d, e) {
            var g = f(b);
            a.cssEase[d] && (d = a.cssEase[d]);
            var h = "" + k(c) + " " + d;
            parseInt(e, 10) > 0 && (h += " " + k(e));
            var i = [];
            return a.each(g, function(a, b) { i.push(b + " " + h) }), i.join(", ")
        }

        function h(b, c) {
            c || (a.cssNumber[b] = !0), a.transit.propertyMap[b] = m.transform, a.cssHooks[b] = {
                get: function(c) { var d = a(c).css("transit:transform"); return d.get(b) },
                set: function(c, d) {
                    var e = a(c).css("transit:transform");
                    e.setFromString(b, d), a(c).css({ "transit:transform": e })
                }
            }
        }

        function i(a) { return a.replace(/([A-Z])/g, function(a) { return "-" + a.toLowerCase() }) }

        function j(a, b) { return "string" != typeof a || a.match(/^[\-0-9\.]+$/) ? "" + a + b : a }

        function k(b) { var c = b; return "string" != typeof c || c.match(/^[\-0-9\.]+/) || (c = a.fx.speeds[c] || a.fx.speeds._default), j(c, "ms") }
        a.transit = { version: "0.9.12", propertyMap: { marginLeft: "margin", marginRight: "margin", marginBottom: "margin", marginTop: "margin", paddingLeft: "padding", paddingRight: "padding", paddingBottom: "padding", paddingTop: "padding" }, enabled: !0, useTransitionEnd: !1 };
        var l = document.createElement("div"),
            m = {},
            n = "translate",
            o = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
        m.transition = b("transition"), m.transitionDelay = b("transitionDelay"), m.transform = b("transform"), m.transformOrigin = b("transformOrigin"), m.filter = b("Filter"), m.transform3d = c(), m.transform3d && (n = "translate3d");
        var p = { transition: "transitionend", MozTransition: "transitionend", OTransition: "oTransitionEnd", WebkitTransition: "webkitTransitionEnd", msTransition: "MSTransitionEnd" },
            q = m.transitionEnd = p[m.transition] || null;
        for (var r in m) m.hasOwnProperty(r) && "undefined" == typeof a.support[r] && (a.support[r] = m[r]);
        return l = null, a.cssEase = { _default: "ease", "in": "ease-in", out: "ease-out", "in-out": "ease-in-out", snap: "cubic-bezier(0,1,.5,1)", easeInCubic: "cubic-bezier(.550,.055,.675,.190)", easeOutCubic: "cubic-bezier(.215,.61,.355,1)", easeInOutCubic: "cubic-bezier(.645,.045,.355,1)", easeInCirc: "cubic-bezier(.6,.04,.98,.335)", easeOutCirc: "cubic-bezier(.075,.82,.165,1)", easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)", easeInExpo: "cubic-bezier(.95,.05,.795,.035)", easeOutExpo: "cubic-bezier(.19,1,.22,1)", easeInOutExpo: "cubic-bezier(1,0,0,1)", easeInQuad: "cubic-bezier(.55,.085,.68,.53)", easeOutQuad: "cubic-bezier(.25,.46,.45,.94)", easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)", easeInQuart: "cubic-bezier(.895,.03,.685,.22)", easeOutQuart: "cubic-bezier(.165,.84,.44,1)", easeInOutQuart: "cubic-bezier(.77,0,.175,1)", easeInQuint: "cubic-bezier(.755,.05,.855,.06)", easeOutQuint: "cubic-bezier(.23,1,.32,1)", easeInOutQuint: "cubic-bezier(.86,0,.07,1)", easeInSine: "cubic-bezier(.47,0,.745,.715)", easeOutSine: "cubic-bezier(.39,.575,.565,1)", easeInOutSine: "cubic-bezier(.445,.05,.55,.95)", easeInBack: "cubic-bezier(.6,-.28,.735,.045)", easeOutBack: "cubic-bezier(.175, .885,.32,1.275)", easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)" }, a.cssHooks["transit:transform"] = {
            get: function(b) { return a(b).data("transform") || new d },
            set: function(b, c) {
                var e = c;
                e instanceof d || (e = new d(e)), b.style[m.transform] = "WebkitTransform" !== m.transform || o ? e.toString() : e.toString(!0), a(b).data("transform", e)
            }
        }, a.cssHooks.transform = { set: a.cssHooks["transit:transform"].set }, a.cssHooks.filter = { get: function(a) { return a.style[m.filter] }, set: function(a, b) { a.style[m.filter] = b } }, a.fn.jquery < "1.8" && (a.cssHooks.transformOrigin = { get: function(a) { return a.style[m.transformOrigin] }, set: function(a, b) { a.style[m.transformOrigin] = b } }, a.cssHooks.transition = { get: function(a) { return a.style[m.transition] }, set: function(a, b) { a.style[m.transition] = b } }), h("scale"), h("scaleX"), h("scaleY"), h("translate"), h("rotate"), h("rotateX"), h("rotateY"), h("rotate3d"), h("skewX"), h("skewY"), h("x", !0), h("y", !0), m.transform3d && (h("translate3d"), h("scale3d"), h("rotateZ"), h("z", !0)), d.prototype = {
            setFromString: function(a, b) {
                var c = "string" == typeof b ? b.split(",") : b.constructor === Array ? b : [b];
                c.unshift(a), d.prototype.set.apply(this, c)
            },
            set: function(a) {
                var b = Array.prototype.slice.apply(arguments, [1]);
                this.setter[a] ? this.setter[a].apply(this, b) : this[a] = b.join(",")
            },
            get: function(a) { return this.getter[a] ? this.getter[a].apply(this) : this[a] || 0 },
            setter: { rotate: function(a) { this.rotate = j(a, "deg") }, rotateX: function(a) { this.rotateX = j(a, "deg") }, rotateY: function(a) { this.rotateY = j(a, "deg") }, rotateZ: function(a) { this.rotateZ = j(a, "deg") }, scale: function(a, b) { void 0 === b && (b = a), this.scale = a + "," + b }, scale3d: function(a, b, c) { void 0 === b && void 0 === c && (b = a, c = a), this.scale3d = a + "," + b + "," + c }, skewX: function(a) { this.skewX = j(a, "deg") }, skewY: function(a) { this.skewY = j(a, "deg") }, perspective: function(a) { this.perspective = j(a, "px") }, x: function(a) { this.set("translate", a, null) }, y: function(a) { this.set("translate", null, a) }, z: function(a) { this.set("translate3d", null, null, a) }, translate: function(a, b) { void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null !== a && void 0 !== a && (this._translateX = j(a, "px")), null !== b && void 0 !== b && (this._translateY = j(b, "px")), this.translate = this._translateX + "," + this._translateY }, translate3d: function(a, b, c) { void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), void 0 === this._translateZ && (this._translateZ = 0), null !== a && void 0 !== a && (this._translateX = j(a, "px")), null !== b && void 0 !== b && (this._translateY = j(b, "px")), null !== c && void 0 !== c && (this._translateZ = j(c, "px")), this.translate3d = this._translateX + "," + this._translateY + "," + this._translateZ } },
            getter: { x: function() { return this._translateX || 0 }, y: function() { return this._translateY || 0 }, z: function() { return this._translateZ || 0 }, scale: function() { var a = (this.scale || "1,1").split(","); return a[0] && (a[0] = parseFloat(a[0])), a[1] && (a[1] = parseFloat(a[1])), a[0] === a[1] ? a[0] : a }, scale3d: function() { var a = (this.scale3d || "1,1,1").split(","); return a[0] && (a[0] = parseFloat(a[0])), a[1] && (a[1] = parseFloat(a[1])), a[2] && (a[2] = parseFloat(a[2])), a[0] === a[1] ? a[0] : a }, rotate3d: function() { for (var a = (this.rotate3d || "0,0,0,0deg").split(","), b = 0; 3 >= b; ++b) a[b] && (a[b] = parseFloat(a[b])); return a[3] && (a[3] = j(a[3], "deg")), a } },
            parse: function(a) {
                var b = this;
                a.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(a, c, d) { b.setFromString(c, d) })
            },
            toString: function(a) {
                var b = [];
                for (var c in this)
                    if (this.hasOwnProperty(c)) { if (!m.transform3d && ("rotateX" === c || "rotateY" === c || "perspective" === c || "transformOrigin" === c)) continue; "_" !== c[0] && b.push(a && "scale" === c ? c + "3d(" + this[c] + ",1)" : a && "translate" === c ? c + "3d(" + this[c] + ",0)" : c + "(" + this[c] + ")") }
                return b.join(" ")
            }
        }, m.transform3d && (d.prototype.setter.x = function(a) { this.set("translate3d", a, null, null) }, d.prototype.setter.y = function(a) { this.set("translate3d", null, a, null) }), a.fn.transition = a.fn.transit = function(b, c, d, f) {
            var h = this,
                i = 0,
                j = !0,
                l = a.extend(!0, {}, b);
            "function" == typeof c && (f = c, c = void 0), "object" == typeof c && (d = c.easing, i = c.delay || 0, j = "undefined" == typeof c.queue ? !0 : c.queue, f = c.complete, c = c.duration), "function" == typeof d && (f = d, d = void 0), "undefined" != typeof l.easing && (d = l.easing, delete l.easing), "undefined" != typeof l.duration && (c = l.duration, delete l.duration), "undefined" != typeof l.complete && (f = l.complete, delete l.complete), "undefined" != typeof l.queue && (j = l.queue, delete l.queue), "undefined" != typeof l.delay && (i = l.delay, delete l.delay), "undefined" == typeof c && (c = a.fx.speeds._default), "undefined" == typeof d && (d = a.cssEase._default), c = k(c);
            var n = g(l, c, d, i),
                o = a.transit.enabled && m.transition,
                p = o ? parseInt(c, 10) + parseInt(i, 10) : 0;
            if (0 === p) { var r = function(a) { h.css(l), f && f.apply(h), a && a() }; return e(h, j, r), h }
            var s = {},
                t = function(b) {
                    var c = !1,
                        d = function() { c && h.unbind(q, d), p > 0 && h.each(function() { this.style[m.transition] = s[this] || null }), "function" == typeof f && f.apply(h), "function" == typeof b && b() };
                    p > 0 && q && a.transit.useTransitionEnd ? (c = !0, h.bind(q, d)) : window.setTimeout(d, p), h.each(function() { p > 0 && (this.style[m.transition] = n), a(this).css(l) })
                },
                u = function(a) { this.offsetWidth, t(a) };
            return e(h, j, u), this
        }, a.transit.getTransitionValue = g, a
    }), ! function(a) {
        function b(a, b, c, d) {
            if (c.match(/^[\+\-]?[0-9]{1,3}%{1}$/)) {
                var e = c.replace("%", "");
                e >= -100 && 100 >= e || (c = "-50%")
            } else c = "-50%";
            switch (b) {
                case "x":
                    a.css({ WebkitTransform: "translateX(" + c + ")", MozTransform: "translateX(" + c + ")", OTransform: "translateX(" + c + ")", MsTransform: "translateX(" + c + ")", Transform: "translateX(" + c + ")" }), d = "a";
                    break;
                case "y":
                    a.css({ WebkitTransform: "translateY(" + c + ")", MozTransform: "translateY(" + c + ")", OTransform: "translateY(" + c + ")", MsTransform: "translateY(" + c + ")", Transform: "translateY(" + c + ")" }), d = "b";
                    break;
                case "none":
                    d = "c"
            }
            return d
        }

        function c(a, b, c) {
            switch (b) {
                case "fadeIn":
                    a.css({ opacity: 0 }), c += "1";
                    break;
                case "none":
                    c += "5"
            }
            return c
        }

        function d(b, c) { return b.match(/^[\+\-]?[0-9]{1,3}%{1}$/) ? (b = b.replace("%", ""), scrollarea = b >= -100 && 100 >= b ? b * a(c).height() / 100 : a(c).height()) : scrollarea = a(c).height(), scrollarea }

        function e(a, b, c) {
            switch (b) {
                case "a1":
                    return a.css({ WebkitTransition: "transform " + c + ", opacity " + c, MozTransition: "transform " + c + ", opacity " + c, OTransition: "transform " + c + ", opacity " + c, MsTransition: "transform " + c + ", opacity " + c, Transition: "transform " + c + ", opacity " + c }),
                        function() { a.css({ WebkitTransform: "translateX(0)", MozTransform: "translateX(0)", OTransform: "translateX(0)", MsTransform: "translateX(0)", Transform: "translateX(0)", opacity: 1 }) };
                case "a5":
                    return a.css({ WebkitTransition: "transform " + c, MozTransition: "transform " + c, OTransition: "transform " + c, MsTransition: "transform " + c, Transition: "transform " + c }),
                        function() { a.css({ WebkitTransform: "translateX(0)", MozTransform: "translateX(0)", OTransform: "translateX(0)", MsTransform: "translateX(0)", Transform: "translateX(0)" }) };
                case "b1":
                    return a.css({ WebkitTransition: "transform " + c + ", opacity " + c, MozTransition: "transform " + c + ", opacity " + c, OTransition: "transform " + c + ", opacity " + c, MsTransition: "transform " + c + ", opacity " + c, Transition: "transform " + c + ", opacity " + c }),
                        function() { a.css({ WebkitTransform: "translateY(0)", MozTransform: "translateY(0)", OTransform: "translateY(0)", MsTransform: "translateY(0)", Transform: "translateY(0)", opacity: 1 }) };
                case "b5":
                    return a.css({ WebkitTransition: "transform " + c, MozTransition: "transform " + c, OTransition: "transform " + c, MsTransition: "transform " + c, Transition: "transform " + c }),
                        function() { a.css({ WebkitTransform: "translateY(0)", MozTransform: "translateY(0)", OTransform: "translateY(0)", MsTransform: "translateY(0)", Transform: "translateY(0)" }) };
                case "c1":
                    return a.css({ WebkitTransition: "opacity " + c, MozTransition: "opacity " + c, OTransition: "opacity " + c, MsTransition: "opacity " + c, Transition: "opacity " + c }),
                        function() { a.css({ opacity: 1 }) };
                case "c5":
                    return a.css({ WebkitTransition: "transform" + c + ", opacity " + c, MozTransition: "transform" + c + ", opacity " + c, OTransition: "transform" + c + ", opacity " + c, MsTransition: "transform" + c + ", opacity " + c, Transition: "transform" + c + ", opacity " + c }),
                        function() { a.css({ WebkitTransform: "translateX(0)", MozTransform: "translateX(0)", OTransform: "translateX(0)", MsTransform: "translateX(0)", Transform: "translateX(0)", opacity: 1 }) }
            }
        }

        function f(a, b, c) { var d = null; return d = b == window ? 0 : c.parent().offset().top, a = c.offset().top - d }
        a.fn.boxLoader = function(g) {
            var h = a.extend({ direction: "x", position: "-50%", effect: "fadeIn", duration: "1s", windowarea: "50%", container: window }, g);
            return this.each(function() {
                var g, i, j = a(this),
                    k = null,
                    l = null;
                l = f(l, h.container, j), i = b(j, h.direction, h.position, i), i = c(j, h.effect, i), k = d(h.windowarea, h.container);
                var m = e(j, i, h.duration);
                a(window).resize(function() { l = f(l, h.container, j) }), a(h.container).scroll(function() { g = a(h.container).scrollTop() + k, g > l && m() })
            })
        }
    }(jQuery), ! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery) }(function(a) {
        a.extend(a.fn, {
            validate: function(b) {
                if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
                var c = a.data(this[0], "validator");
                return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(b) { c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0) }), this.on("submit.validate", function(b) {
                    function d() { var d, e; return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0 }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                })), c)
            },
            valid: function() { var b, c, d; return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function() { b = c.element(this) && b, d = d.concat(c.errorList) }), c.errorList = d), b },
            rules: function(b, c) {
                var d, e, f, g, h, i, j = this[0];
                if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
                    case "add":
                        a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
                        break;
                    case "remove":
                        return c ? (i = {}, a.each(c.split(/\s/), function(b, c) { i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required") }), i) : (delete e[j.name], f)
                }
                return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({ required: h }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, { remote: h })), g
            }
        }), a.extend(a.expr[":"], { blank: function(b) { return !a.trim("" + a(b).val()) }, filled: function(b) { return !!a.trim("" + a(b).val()) }, unchecked: function(b) { return !a(b).prop("checked") } }), a.validator = function(b, c) { this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init() }, a.validator.format = function(b, c) { return 1 === arguments.length ? function() { var c = a.makeArray(arguments); return c.unshift(b), a.validator.format.apply(this, c) } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) { b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function() { return c }) }), b) }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a) { this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a))) },
                onfocusout: function(a) { this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a) },
                onkeyup: function(b, c) {
                    var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                    9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b === this.lastElement) && this.element(b)
                },
                onclick: function(a) { a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode) },
                highlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d) },
                unhighlight: function(b, c, d) { "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d) }
            },
            setDefaults: function(b) { a.extend(a.validator.defaults, b) },
            messages: { required: "This field is required.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date ( ISO ).", number: "Please enter a valid number.", digits: "Please enter only digits.", creditcard: "Please enter a valid credit card number.", equalTo: "Please enter the same value again.", maxlength: a.validator.format("Please enter no more than {0} characters."), minlength: a.validator.format("Please enter at least {0} characters."), rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."), range: a.validator.format("Please enter a value between {0} and {1}."), max: a.validator.format("Please enter a value less than or equal to {0}."), min: a.validator.format("Please enter a value greater than or equal to {0}.") },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function b(b) {
                        var c = a.data(this.form, "validator"),
                            d = "on" + b.type.replace(/^validate/, ""),
                            e = c.settings;
                        e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c, d = this.groups = {};
                    a.each(this.settings.groups, function(b, c) { "string" == typeof c && (c = c.split(/\s/)), a.each(c, function(a, c) { d[c] = b }) }), c = this.settings.rules, a.each(c, function(b, d) { c[b] = a.validator.normalizeRule(d) }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() { return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid() },
                checkForm: function() { this.prepareForm(); for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]); return this.valid() },
                element: function(b) {
                    var c = this.clean(b),
                        d = this.validationTargetFor(c),
                        e = !0;
                    return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] : (this.prepareElement(d), this.currentElements = a(d), e = this.check(d) !== !1, e ? delete this.invalid[d.name] : this.invalid[d.name] = !0),
                        a(b).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
                },
                showErrors: function(b) {
                    if (b) {
                        a.extend(this.errorMap, b), this.errorList = [];
                        for (var c in b) this.errorList.push({ message: b[c], element: this.findByName(c)[0] });
                        this.successList = a.grep(this.successList, function(a) { return !(a.name in b) })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors();
                    var b, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    if (this.settings.unhighlight)
                        for (b = 0; c[b]; b++) this.settings.unhighlight.call(this, c[b], this.settings.errorClass, "");
                    else c.removeClass(this.settings.errorClass)
                },
                numberOfInvalids: function() { return this.objectLength(this.invalid) },
                objectLength: function(a) { var b, c = 0; for (b in a) c++; return c },
                hideErrors: function() { this.hideThese(this.toHide) },
                hideThese: function(a) { a.not(this.containers).text(""), this.addWrapper(a).hide() },
                valid: function() { return 0 === this.size() },
                size: function() { return this.errorList.length },
                focusInvalid: function() { if (this.settings.focusInvalid) try { a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin") } catch (b) {} },
                findLastActive: function() { var b = this.lastActive; return b && 1 === a.grep(this.errorList, function(a) { return a.element.name === b.name }).length && b },
                elements: function() {
                    var b = this,
                        c = {};
                    return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() { return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : (c[this.name] = !0, !0) })
                },
                clean: function(b) { return a(b)[0] },
                errors: function() { var b = this.settings.errorClass.split(" ").join("."); return a(this.settings.errorElement + "." + b, this.errorContext) },
                reset: function() { this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([]) },
                prepareForm: function() { this.reset(), this.toHide = this.errors().add(this.containers) },
                prepareElement: function(a) { this.reset(), this.toHide = this.errorsFor(a) },
                elementValue: function(b) {
                    var c, d = a(b),
                        e = b.type;
                    return "radio" === e || "checkbox" === e ? this.findByName(b.name).filter(":checked").val() : "number" === e && "undefined" != typeof b.validity ? b.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
                },
                check: function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d, e, f = a(b).rules(),
                        g = a.map(f, function(a, b) { return b }).length,
                        h = !1,
                        i = this.elementValue(b);
                    for (d in f) { e = { method: d, parameters: f[d] }; try { if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) { h = !0; continue } if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b))); if (!c) return this.formatAndAdd(b, e), !1 } catch (j) { throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j } }
                    return h ? void 0 : (this.objectLength(f) && this.successList.push(b), !0)
                },
                customDataMessage: function(b, c) { return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg") },
                customMessage: function(a, b) { var c = this.settings.messages[a]; return c && (c.constructor === String ? c : c[b]) },
                findDefined: function() {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a]
                },
                defaultMessage: function(b, c) { return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>") },
                formatAndAdd: function(b, c) {
                    var d = this.defaultMessage(b, c.method),
                        e = /\$?\{(\d+)\}/g;
                    "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({ message: d, element: b, method: c.method }), this.errorMap[b.name] = d, this.submitted[b.name] = d
                },
                addWrapper: function(a) { return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a },
                defaultShowErrors: function() {
                    var a, b, c;
                    for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() { return this.currentElements.not(this.invalidElements()) },
                invalidElements: function() { return a(this.errorList).map(function() { return this.element }) },
                showLabel: function(b, c) {
                    var d, e, f, g = this.errorsFor(b),
                        h = this.idOrName(b),
                        i = a(b).attr("aria-describedby");
                    g.length ? (g.removeClass(this.settings.validClass).addClass(this.settings.errorClass), g.html(c)) : (g = a("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(c || ""), d = g, this.settings.wrapper && (d = g.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), g.is("label") ? g.attr("for", h) : 0 === g.parents("label[for='" + h + "']").length && (f = g.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), i ? i.match(new RegExp("\\b" + f + "\\b")) || (i += " " + f) : i = f, a(b).attr("aria-describedby", i), e = this.groups[b.name], e && a.each(this.groups, function(b, c) { c === e && a("[name='" + b + "']", this.currentForm).attr("aria-describedby", g.attr("id")) }))), !c && this.settings.success && (g.text(""), "string" == typeof this.settings.success ? g.addClass(this.settings.success) : this.settings.success(g, b)), this.toShow = this.toShow.add(g)
                },
                errorsFor: function(b) {
                    var c = this.idOrName(b),
                        d = a(b).attr("aria-describedby"),
                        e = "label[for='" + c + "'], label[for='" + c + "'] *";
                    return d && (e = e + ", #" + d.replace(/\s+/g, ", #")), this.errors().filter(e)
                },
                idOrName: function(a) { return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name) },
                validationTargetFor: function(b) { return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0] },
                checkable: function(a) { return /radio|checkbox/i.test(a.type) },
                findByName: function(b) { return a(this.currentForm).find("[name='" + b + "']") },
                getLength: function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                    }
                    return b.length
                },
                depend: function(a, b) { return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0 },
                dependTypes: { "boolean": function(a) { return a }, string: function(b, c) { return !!a(b, c.form).length }, "function": function(a, b) { return a(b) } },
                optional: function(b) { var c = this.elementValue(b); return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch" },
                startRequest: function(a) { this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0) },
                stopRequest: function(b, c) { this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1) },
                previousValue: function(b) { return a.data(b, "previousValue") || a.data(b, "previousValue", { old: null, valid: !0, message: this.defaultMessage(b, "remote") }) },
                destroy: function() { this.resetForm(), a(this.currentForm).off(".validate").removeData("validator") }
            },
            classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, number: { number: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } },
            addClassRules: function(b, c) { b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b) },
            classRules: function(b) {
                var c = {},
                    d = a(b).attr("class");
                return d && a.each(d.split(" "), function() { this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this]) }), c
            },
            normalizeAttributeRule: function(a, b, c, d) { /min|max/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0) },
            attributeRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
            },
            dataRules: function(b) {
                var c, d, e = {},
                    f = a(b),
                    g = b.getAttribute("type");
                for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
                return e
            },
            staticRules: function(b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
            },
            normalizeRules: function(b, c) {
                return a.each(b, function(d, e) {
                    if (e === !1) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                    }
                }), a.each(b, function(d, e) { b[d] = a.isFunction(e) ? e(c) : e }), a.each(["minlength", "maxlength"], function() { b[this] && (b[this] = Number(b[this])) }), a.each(["rangelength", "range"], function() {
                    var c;
                    b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
                }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
            },
            normalizeRule: function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function() { c[this] = !0 }), b = c
                }
                return b
            },
            addMethod: function(b, c, d) { a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b)) },
            methods: {
                required: function(b, c, d) { if (!this.depend(d, c)) return "dependency-mismatch"; if ("select" === c.nodeName.toLowerCase()) { var e = a(c).val(); return e && e.length > 0 } return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0 },
                email: function(a, b) { return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a) },
                url: function(a, b) { return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a) },
                date: function(a, b) { return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString()) },
                dateISO: function(a, b) { return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a) },
                number: function(a, b) { return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a) },
                digits: function(a, b) { return this.optional(b) || /^\d+$/.test(a) },
                creditcard: function(a, b) {
                    if (this.optional(b)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(a)) return !1;
                    var c, d, e = 0,
                        f = 0,
                        g = !1;
                    if (a = a.replace(/\D/g, ""), a.length < 13 || a.length > 19) return !1;
                    for (c = a.length - 1; c >= 0; c--) d = a.charAt(c), f = parseInt(d, 10), g && (f *= 2) > 9 && (f -= 9), e += f, g = !g;
                    return e % 10 === 0
                },
                minlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d },
                maxlength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || d >= e },
                rangelength: function(b, c, d) { var e = a.isArray(b) ? b.length : this.getLength(b, c); return this.optional(c) || e >= d[0] && e <= d[1] },
                min: function(a, b, c) { return this.optional(b) || a >= c },
                max: function(a, b, c) { return this.optional(b) || c >= a },
                range: function(a, b, c) { return this.optional(b) || a >= c[0] && a <= c[1] },
                equalTo: function(b, c, d) { var e = a(d); return this.settings.onfocusout && e.off(".validate-equalTo").on("blur.validate-equalTo", function() { a(c).valid() }), b === e.val() },
                remote: function(b, c, d) {
                    if (this.optional(c)) return "dependency-mismatch";
                    var e, f, g = this.previousValue(c);
                    return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), g.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = g.message, d = "string" == typeof d && { url: d } || d, g.old === b ? g.valid : (g.old = b, e = this, this.startRequest(c), f = {}, f[c.name] = b, a.ajax(a.extend(!0, {
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: f,
                        context: e.currentForm,
                        success: function(d) {
                            var f, h, i, j = d === !0 || "true" === d;
                            e.settings.messages[c.name].remote = g.originalMessage, j ? (i = e.formSubmitted, e.prepareElement(c), e.formSubmitted = i, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, h = d || e.defaultMessage(c, "remote"), f[c.name] = g.message = a.isFunction(h) ? h(b) : h, e.invalid[c.name] = !0, e.showErrors(f)), g.valid = j, e.stopRequest(c, j)
                        }
                    }, d)), "pending")
                }
            }
        });
        var b, c = {};
        a.ajaxPrefilter ? a.ajaxPrefilter(function(a, b, d) { var e = a.port; "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d) }) : (b = a.ajax, a.ajax = function(d) {
            var e = ("mode" in d ? d : a.ajaxSettings).mode,
                f = ("port" in d ? d : a.ajaxSettings).port;
            return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
        })
    }), ! function(a) { "function" == typeof define && define.amd ? define(["jquery", "./jquery.validate.min"], a) : a(jQuery) }(function(a) {
        ! function() {
            function b(a) { return a.replace(/<.[^<>]*?>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/[.(),;:!?%#$'\"_+=\/\-?????????]*/g, "") }
            a.validator.addMethod("maxWords", function(a, c, d) { return this.optional(c) || b(a).match(/\b\w+\b/g).length <= d }, a.validator.format("Please enter {0} words or less.")), a.validator.addMethod("minWords", function(a, c, d) { return this.optional(c) || b(a).match(/\b\w+\b/g).length >= d }, a.validator.format("Please enter at least {0} words.")), a.validator.addMethod("rangeWords", function(a, c, d) {
                var e = b(a),
                    f = /\b\w+\b/g;
                return this.optional(c) || e.match(f).length >= d[0] && e.match(f).length <= d[1]
            }, a.validator.format("Please enter between {0} and {1} words."))
        }(), a.validator.addMethod("accept", function(b, c, d) {
            var e, f, g = "string" == typeof d ? d.replace(/\s/g, "").replace(/,/g, "|") : "image/*",
                h = this.optional(c);
            if (h) return h;
            if ("file" === a(c).attr("type") && (g = g.replace(/\*/g, ".*"), c.files && c.files.length))
                for (e = 0; e < c.files.length; e++)
                    if (f = c.files[e], !f.type.match(new RegExp("\\.?(" + g + ")$", "i"))) return !1;
            return !0
        }, a.validator.format("Please enter a value with a valid mimetype.")), a.validator.addMethod("alphanumeric", function(a, b) { return this.optional(b) || /^\w+$/i.test(a) }, "Letters, numbers, and underscores only please"), a.validator.addMethod("bankaccountNL", function(a, b) {
            if (this.optional(b)) return !0;
            if (!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(a)) return !1;
            var c, d, e, f = a.replace(/ /g, ""),
                g = 0,
                h = f.length;
            for (c = 0; h > c; c++) d = h - c, e = f.substring(c, c + 1), g += d * e;
            return g % 11 === 0
        }, "Please specify a valid bank account number"), a.validator.addMethod("bankorgiroaccountNL", function(b, c) { return this.optional(c) || a.validator.methods.bankaccountNL.call(this, b, c) || a.validator.methods.giroaccountNL.call(this, b, c) }, "Please specify a valid bank or giro account number"), a.validator.addMethod("bic", function(a, b) { return this.optional(b) || /^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(a) }, "Please specify a valid BIC code"), a.validator.addMethod("cifES", function(a) { "use strict"; var b, c, d, e, f, g, h = []; if (a = a.toUpperCase(), !a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)")) return !1; for (d = 0; 9 > d; d++) h[d] = parseInt(a.charAt(d), 10); for (c = h[2] + h[4] + h[6], e = 1; 8 > e; e += 2) f = (2 * h[e]).toString(), g = f.charAt(1), c += parseInt(f.charAt(0), 10) + ("" === g ? 0 : parseInt(g, 10)); return /^[ABCDEFGHJNPQRSUVW]{1}/.test(a) ? (c += "", b = 10 - parseInt(c.charAt(c.length - 1), 10), a += b, h[8].toString() === String.fromCharCode(64 + b) || h[8].toString() === a.charAt(a.length - 1)) : !1 }, "Please specify a valid CIF number."), a.validator.addMethod("cpfBR", function(a) { if (a = a.replace(/([~!@#$%^&*()_+=`{}\[\]\-|\\:;'<>,.\/? ])+/g, ""), 11 !== a.length) return !1; var b, c, d, e, f = 0; if (b = parseInt(a.substring(9, 10), 10), c = parseInt(a.substring(10, 11), 10), d = function(a, b) { var c = 10 * a % 11; return (10 === c || 11 === c) && (c = 0), c === b }, "" === a || "00000000000" === a || "11111111111" === a || "22222222222" === a || "33333333333" === a || "44444444444" === a || "55555555555" === a || "66666666666" === a || "77777777777" === a || "88888888888" === a || "99999999999" === a) return !1; for (e = 1; 9 >= e; e++) f += parseInt(a.substring(e - 1, e), 10) * (11 - e); if (d(f, b)) { for (f = 0, e = 1; 10 >= e; e++) f += parseInt(a.substring(e - 1, e), 10) * (12 - e); return d(f, c) } return !1 }, "Please specify a valid CPF number"), a.validator.addMethod("creditcardtypes", function(a, b, c) {
            if (/[^0-9\-]+/.test(a)) return !1;
            a = a.replace(/\D/g, "");
            var d = 0;
            return c.mastercard && (d |= 1), c.visa && (d |= 2), c.amex && (d |= 4), c.dinersclub && (d |= 8), c.enroute && (d |= 16), c.discover && (d |= 32), c.jcb && (d |= 64), c.unknown && (d |= 128), c.all && (d = 255), 1 & d && /^(5[12345])/.test(a) ? 16 === a.length : 2 & d && /^(4)/.test(a) ? 16 === a.length : 4 & d && /^(3[47])/.test(a) ? 15 === a.length : 8 & d && /^(3(0[012345]|[68]))/.test(a) ? 14 === a.length : 16 & d && /^(2(014|149))/.test(a) ? 15 === a.length : 32 & d && /^(6011)/.test(a) ? 16 === a.length : 64 & d && /^(3)/.test(a) ? 16 === a.length : 64 & d && /^(2131|1800)/.test(a) ? 15 === a.length : 128 & d ? !0 : !1
        }, "Please enter a valid credit card number."), a.validator.addMethod("currency", function(a, b, c) {
            var d, e = "string" == typeof c,
                f = e ? c : c[0],
                g = e ? !0 : c[1];
            return f = f.replace(/,/g, ""), f = g ? f + "]" : f + "]?", d = "^[" + f + "([1-9]{1}[0-9]{0,2}(\\,[0-9]{3})*(\\.[0-9]{0,2})?|[1-9]{1}[0-9]{0,}(\\.[0-9]{0,2})?|0(\\.[0-9]{0,2})?|(\\.[0-9]{1,2})?)$", d = new RegExp(d), this.optional(b) || d.test(a)
        }, "Please specify a valid currency"), a.validator.addMethod("dateFA", function(a, b) { return this.optional(b) || /^[1-4]\d{3}\/((0?[1-6]\/((3[0-1])|([1-2][0-9])|(0?[1-9])))|((1[0-2]|(0?[7-9]))\/(30|([1-2][0-9])|(0?[1-9]))))$/.test(a) }, a.validator.messages.date), a.validator.addMethod("dateITA", function(a, b) {
            var c, d, e, f, g, h = !1,
                i = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
            return i.test(a) ? (c = a.split("/"), d = parseInt(c[0], 10), e = parseInt(c[1], 10), f = parseInt(c[2], 10), g = new Date(Date.UTC(f, e - 1, d, 12, 0, 0, 0)), h = g.getUTCFullYear() === f && g.getUTCMonth() === e - 1 && g.getUTCDate() === d ? !0 : !1) : h = !1, this.optional(b) || h
        }, a.validator.messages.date), a.validator.addMethod("dateNL", function(a, b) { return this.optional(b) || /^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(a) }, a.validator.messages.date), a.validator.addMethod("extension", function(a, b, c) { return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(new RegExp("\\.(" + c + ")$", "i")) }, a.validator.format("Please enter a value with a valid extension.")), a.validator.addMethod("giroaccountNL", function(a, b) { return this.optional(b) || /^[0-9]{1,7}$/.test(a) }, "Please specify a valid giro account number"), a.validator.addMethod("iban", function(a, b) {
            if (this.optional(b)) return !0;
            var c, d, e, f, g, h, i, j, k, l = a.replace(/ /g, "").toUpperCase(),
                m = "",
                n = !0,
                o = "",
                p = "";
            if (c = l.substring(0, 2), h = { AL: "\\d{8}[\\dA-Z]{16}", AD: "\\d{8}[\\dA-Z]{12}", AT: "\\d{16}", AZ: "[\\dA-Z]{4}\\d{20}", BE: "\\d{12}", BH: "[A-Z]{4}[\\dA-Z]{14}", BA: "\\d{16}", BR: "\\d{23}[A-Z][\\dA-Z]", BG: "[A-Z]{4}\\d{6}[\\dA-Z]{8}", CR: "\\d{17}", HR: "\\d{17}", CY: "\\d{8}[\\dA-Z]{16}", CZ: "\\d{20}", DK: "\\d{14}", DO: "[A-Z]{4}\\d{20}", EE: "\\d{16}", FO: "\\d{14}", FI: "\\d{14}", FR: "\\d{10}[\\dA-Z]{11}\\d{2}", GE: "[\\dA-Z]{2}\\d{16}", DE: "\\d{18}", GI: "[A-Z]{4}[\\dA-Z]{15}", GR: "\\d{7}[\\dA-Z]{16}", GL: "\\d{14}", GT: "[\\dA-Z]{4}[\\dA-Z]{20}", HU: "\\d{24}", IS: "\\d{22}", IE: "[\\dA-Z]{4}\\d{14}", IL: "\\d{19}", IT: "[A-Z]\\d{10}[\\dA-Z]{12}", KZ: "\\d{3}[\\dA-Z]{13}", KW: "[A-Z]{4}[\\dA-Z]{22}", LV: "[A-Z]{4}[\\dA-Z]{13}", LB: "\\d{4}[\\dA-Z]{20}", LI: "\\d{5}[\\dA-Z]{12}", LT: "\\d{16}", LU: "\\d{3}[\\dA-Z]{13}", MK: "\\d{3}[\\dA-Z]{10}\\d{2}", MT: "[A-Z]{4}\\d{5}[\\dA-Z]{18}", MR: "\\d{23}", MU: "[A-Z]{4}\\d{19}[A-Z]{3}", MC: "\\d{10}[\\dA-Z]{11}\\d{2}", MD: "[\\dA-Z]{2}\\d{18}", ME: "\\d{18}", NL: "[A-Z]{4}\\d{10}", NO: "\\d{11}", PK: "[\\dA-Z]{4}\\d{16}", PS: "[\\dA-Z]{4}\\d{21}", PL: "\\d{24}", PT: "\\d{21}", RO: "[A-Z]{4}[\\dA-Z]{16}", SM: "[A-Z]\\d{10}[\\dA-Z]{12}", SA: "\\d{2}[\\dA-Z]{18}", RS: "\\d{18}", SK: "\\d{20}", SI: "\\d{15}", ES: "\\d{20}", SE: "\\d{20}", CH: "\\d{5}[\\dA-Z]{12}", TN: "\\d{20}", TR: "\\d{5}[\\dA-Z]{17}", AE: "\\d{3}\\d{16}", GB: "[A-Z]{4}\\d{14}", VG: "[\\dA-Z]{4}\\d{16}" }, g = h[c], "undefined" != typeof g && (i = new RegExp("^[A-Z]{2}\\d{2}" + g + "$", ""), !i.test(l))) return !1;
            for (d = l.substring(4, l.length) + l.substring(0, 4), j = 0; j < d.length; j++) e = d.charAt(j), "0" !== e && (n = !1), n || (m += "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(e));
            for (k = 0; k < m.length; k++) f = m.charAt(k), p = "" + o + f, o = p % 97;
            return 1 === o
        }, "Please specify a valid IBAN"), a.validator.addMethod("integer", function(a, b) { return this.optional(b) || /^-?\d+$/.test(a) }, "A positive or negative non-decimal number please"), a.validator.addMethod("ipv4", function(a, b) { return this.optional(b) || /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(a) }, "Please enter a valid IP v4 address."), a.validator.addMethod("ipv6", function(a, b) { return this.optional(b) || /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(a) }, "Please enter a valid IP v6 address."), a.validator.addMethod("lettersonly", function(a, b) { return this.optional(b) || /^[a-z]+$/i.test(a) }, "Letters only please"), a.validator.addMethod("letterswithbasicpunc", function(a, b) { return this.optional(b) || /^[a-z\-.,()'"\s]+$/i.test(a) }, "Letters or punctuation only please"), a.validator.addMethod("mobileNL", function(a, b) { return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(a) }, "Please specify a valid mobile number"), a.validator.addMethod("mobileUK", function(a, b) { return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[1345789]\d{2}|624)\s?\d{3}\s?\d{3})$/) }, "Please specify a valid mobile number"), a.validator.addMethod("nieES", function(a) { "use strict"; return a = a.toUpperCase(), a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[T]{1}/.test(a) ? a[8] === /^[T]{1}[A-Z0-9]{8}$/.test(a) : /^[XYZ]{1}/.test(a) ? a[8] === "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.replace("X", "0").replace("Y", "1").replace("Z", "2").substring(0, 8) % 23) : !1 : !1 }, "Please specify a valid NIE number."), a.validator.addMethod("nifES", function(a) { "use strict"; return a = a.toUpperCase(), a.match("((^[A-Z]{1}[0-9]{7}[A-Z0-9]{1}$|^[T]{1}[A-Z0-9]{8}$)|^[0-9]{8}[A-Z]{1}$)") ? /^[0-9]{8}[A-Z]{1}$/.test(a) ? "TRWAGMYFPDXBNJZSQVHLCKE".charAt(a.substring(8, 0) % 23) === a.charAt(8) : /^[KLM]{1}/.test(a) ? a[8] === String.fromCharCode(64) : !1 : !1 }, "Please specify a valid NIF number."), jQuery.validator.addMethod("notEqualTo", function(b, c, d) { return this.optional(c) || !a.validator.methods.equalTo.call(this, b, c, d) }, "Please enter a different value, values must not be the same."), a.validator.addMethod("nowhitespace", function(a, b) { return this.optional(b) || /^\S+$/i.test(a) }, "No white space please"), a.validator.addMethod("pattern", function(a, b, c) { return this.optional(b) ? !0 : ("string" == typeof c && (c = new RegExp("^(?:" + c + ")$")), c.test(a)) }, "Invalid format."), a.validator.addMethod("phoneNL", function(a, b) { return this.optional(b) || /^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(a) }, "Please specify a valid phone number."), a.validator.addMethod("phoneUK", function(a, b) { return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/) }, "Please specify a valid phone number"), a.validator.addMethod("phoneUS", function(a, b) { return a = a.replace(/\s+/g, ""), this.optional(b) || a.length > 9 && a.match(/^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/) }, "Please specify a valid phone number"), a.validator.addMethod("phonesUK", function(a, b) { return a = a.replace(/\(|\)|\s+|-/g, ""), this.optional(b) || a.length > 9 && a.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[1345789]\d{8}|624\d{6})))$/) }, "Please specify a valid uk phone number"), a.validator.addMethod("postalCodeCA", function(a, b) { return this.optional(b) || /^[ABCEGHJKLMNPRSTVXY]\d[A-Z] \d[A-Z]\d$/.test(a) }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeBR", function(a, b) { return this.optional(b) || /^\d{2}.\d{3}-\d{3}?$|^\d{5}-?\d{3}?$/.test(a) }, "Informe um CEP v??lido."), a.validator.addMethod("postalcodeIT", function(a, b) { return this.optional(b) || /^\d{5}$/.test(a) }, "Please specify a valid postal code"), a.validator.addMethod("postalcodeNL", function(a, b) { return this.optional(b) || /^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(a) }, "Please specify a valid postal code"), a.validator.addMethod("postcodeUK", function(a, b) { return this.optional(b) || /^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(a) }, "Please specify a valid UK postcode"), a.validator.addMethod("require_from_group", function(b, c, d) {
            var e = a(d[1], c.form),
                f = e.eq(0),
                g = f.data("valid_req_grp") ? f.data("valid_req_grp") : a.extend({}, this),
                h = e.filter(function() { return g.elementValue(this) }).length >= d[0];
            return f.data("valid_req_grp", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() { g.element(this) }), e.data("being_validated", !1)), h
        }, a.validator.format("Please fill at least {0} of these fields.")), a.validator.addMethod("skip_or_fill_minimum", function(b, c, d) {
            var e = a(d[1], c.form),
                f = e.eq(0),
                g = f.data("valid_skip") ? f.data("valid_skip") : a.extend({}, this),
                h = e.filter(function() { return g.elementValue(this) }).length,
                i = 0 === h || h >= d[0];
            return f.data("valid_skip", g), a(c).data("being_validated") || (e.data("being_validated", !0), e.each(function() { g.element(this) }), e.data("being_validated", !1)), i
        }, a.validator.format("Please either skip these fields or fill at least {0} of them.")), a.validator.addMethod("stateUS", function(a, b, c) {
            var d, e = "undefined" == typeof c,
                f = e || "undefined" == typeof c.caseSensitive ? !1 : c.caseSensitive,
                g = e || "undefined" == typeof c.includeTerritories ? !1 : c.includeTerritories,
                h = e || "undefined" == typeof c.includeMilitary ? !1 : c.includeMilitary;
            return d = g || h ? g && h ? "^(A[AEKLPRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : g ? "^(A[KLRSZ]|C[AOT]|D[CE]|FL|G[AU]|HI|I[ADLN]|K[SY]|LA|M[ADEINOPST]|N[CDEHJMVY]|O[HKR]|P[AR]|RI|S[CD]|T[NX]|UT|V[AIT]|W[AIVY])$" : "^(A[AEKLPRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$" : "^(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])$", d = f ? new RegExp(d) : new RegExp(d, "i"), this.optional(b) || d.test(a)
        }, "Please specify a valid state"), a.validator.addMethod("strippedminlength", function(b, c, d) { return a(b).text().length >= d }, a.validator.format("Please enter at least {0} characters")), a.validator.addMethod("time", function(a, b) { return this.optional(b) || /^([01]\d|2[0-3]|[0-9])(:[0-5]\d){1,2}$/.test(a) }, "Please enter a valid time, between 00:00 and 23:59"), a.validator.addMethod("time12h", function(a, b) { return this.optional(b) || /^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(a) }, "Please enter a valid time in 12-hour am/pm format"), a.validator.addMethod("url2", function(a, b) { return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a) }, a.validator.messages.url), a.validator.addMethod("vinUS", function(a) {
            if (17 !== a.length) return !1;
            var b, c, d, e, f, g, h = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                i = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 7, 9, 2, 3, 4, 5, 6, 7, 8, 9],
                j = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2],
                k = 0;
            for (b = 0; 17 > b; b++) {
                if (e = j[b], d = a.slice(b, b + 1), 8 === b && (g = d), isNaN(d)) {
                    for (c = 0; c < h.length; c++)
                        if (d.toUpperCase() === h[c]) { d = i[c], d *= e, isNaN(g) && 8 === c && (g = h[c]); break }
                } else d *= e;
                k += d
            }
            return f = k % 11, 10 === f && (f = "X"), f === g ? !0 : !1
        }, "The specified vehicle identification number (VIN) is invalid."), a.validator.addMethod("zipcodeUS", function(a, b) { return this.optional(b) || /^\d{5}(-\d{4})?$/.test(a) }, "The specified US ZIP Code is invalid"), a.validator.addMethod("ziprange", function(a, b) { return this.optional(b) || /^90[2-5]\d\{2\}-\d{4}$/.test(a) }, "Your ZIP-code must be in the range 902xx-xxxx to 905xx-xxxx")
    }), ! function(a) {
        "use strict";

        function b() {}

        function c() { try { return document.activeElement } catch (a) {} }

        function d(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                if (a[c] === b) return !0;
            return !1
        }

        function e(a, b, c) { return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : void 0 }

        function f(a, b) {
            var c;
            a.createTextRange ? (c = a.createTextRange(), c.move("character", b), c.select()) : a.selectionStart && (a.focus(), a.setSelectionRange(b, b))
        }

        function g(a, b) { try { return a.type = b, !0 } catch (c) { return !1 } }

        function h(a, b) {
            if (a && a.getAttribute(B)) b(a);
            else
                for (var c, d = a ? a.getElementsByTagName("input") : N, e = a ? a.getElementsByTagName("textarea") : O, f = d ? d.length : 0, g = e ? e.length : 0, h = f + g, i = 0; h > i; i++) c = f > i ? d[i] : e[i - f], b(c)
        }

        function i(a) { h(a, k) }

        function j(a) { h(a, l) }

        function k(a, b) {
            var c = !!b && a.value !== b,
                d = a.value === a.getAttribute(B);
            if ((c || d) && "true" === a.getAttribute(C)) {
                a.removeAttribute(C), a.value = a.value.replace(a.getAttribute(B), ""),
                    a.className = a.className.replace(A, "");
                var e = a.getAttribute(I);
                parseInt(e, 10) >= 0 && (a.setAttribute("maxLength", e), a.removeAttribute(I));
                var f = a.getAttribute(D);
                return f && (a.type = f), !0
            }
            return !1
        }

        function l(a) {
            var b = a.getAttribute(B);
            if ("" === a.value && b) {
                a.setAttribute(C, "true"), a.value = b, a.className += " " + z;
                var c = a.getAttribute(I);
                c || (a.setAttribute(I, a.maxLength), a.removeAttribute("maxLength"));
                var d = a.getAttribute(D);
                return d ? a.type = "text" : "password" === a.type && g(a, "text") && a.setAttribute(D, "password"), !0
            }
            return !1
        }

        function m(a) { return function() { P && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) ? f(a, 0) : k(a) } }

        function n(a) { return function() { l(a) } }

        function o(a) { return function() { i(a) } }

        function p(a) { return function(b) { return v = a.value, "true" === a.getAttribute(C) && v === a.getAttribute(B) && d(x, b.keyCode) ? (b.preventDefault && b.preventDefault(), !1) : void 0 } }

        function q(a) { return function() { k(a, v), "" === a.value && (a.blur(), f(a, 0)) } }

        function r(a) { return function() { a === c() && a.value === a.getAttribute(B) && "true" === a.getAttribute(C) && f(a, 0) } }

        function s(a) {
            var b = a.form;
            b && "string" == typeof b && (b = document.getElementById(b), b.getAttribute(E) || (e(b, "submit", o(b)), b.setAttribute(E, "true"))), e(a, "focus", m(a)), e(a, "blur", n(a)), P && (e(a, "keydown", p(a)), e(a, "keyup", q(a)), e(a, "click", r(a))), a.setAttribute(F, "true"), a.setAttribute(B, T), (P || a !== c()) && l(a)
        }
        var t = document.createElement("input"),
            u = void 0 !== t.placeholder;
        if (a.Placeholders = { nativeSupport: u, disable: u ? b : i, enable: u ? b : j }, !u) {
            var v, w = ["text", "search", "url", "tel", "email", "password", "number", "textarea"],
                x = [27, 33, 34, 35, 36, 37, 38, 39, 40, 8, 46],
                y = "#ccc",
                z = "placeholdersjs",
                A = new RegExp("(?:^|\\s)" + z + "(?!\\S)"),
                B = "data-placeholder-value",
                C = "data-placeholder-active",
                D = "data-placeholder-type",
                E = "data-placeholder-submit",
                F = "data-placeholder-bound",
                G = "data-placeholder-focus",
                H = "data-placeholder-live",
                I = "data-placeholder-maxlength",
                J = 100,
                K = document.getElementsByTagName("head")[0],
                L = document.documentElement,
                M = a.Placeholders,
                N = document.getElementsByTagName("input"),
                O = document.getElementsByTagName("textarea"),
                P = "false" === L.getAttribute(G),
                Q = "false" !== L.getAttribute(H),
                R = document.createElement("style");
            R.type = "text/css";
            var S = document.createTextNode("." + z + " {color:" + y + ";}");
            R.styleSheet ? R.styleSheet.cssText = S.nodeValue : R.appendChild(S), K.insertBefore(R, K.firstChild);
            for (var T, U, V = 0, W = N.length + O.length; W > V; V++) U = V < N.length ? N[V] : O[V - N.length], T = U.attributes.placeholder, T && (T = T.nodeValue, T && d(w, U.type) && s(U));
            var X = setInterval(function() {
                for (var a = 0, b = N.length + O.length; b > a; a++) U = a < N.length ? N[a] : O[a - N.length], T = U.attributes.placeholder, T ? (T = T.nodeValue, T && d(w, U.type) && (U.getAttribute(F) || s(U), (T !== U.getAttribute(B) || "password" === U.type && !U.getAttribute(D)) && ("password" === U.type && !U.getAttribute(D) && g(U, "text") && U.setAttribute(D, "password"), U.value === U.getAttribute(B) && (U.value = T), U.setAttribute(B, T)))) : U.getAttribute(C) && (k(U), U.removeAttribute(B));
                Q || clearInterval(X)
            }, J);
            e(a, "beforeunload", function() { M.disable() })
        }
    }(this),
    function() {
        function a(a) {
            function b(b, c, d, e, f, g) {
                for (; f >= 0 && g > f; f += a) {
                    var h = e ? e[f] : f;
                    d = c(d, b[h], h, b)
                }
                return d
            }
            return function(c, d, e, f) {
                d = t(d, f, 4);
                var g = !A(c) && s.keys(c),
                    h = (g || c).length,
                    i = a > 0 ? 0 : h - 1;
                return arguments.length < 3 && (e = c[g ? g[i] : i], i += a), b(c, d, e, g, i, h)
            }
        }

        function b(a) {
            return function(b, c, d) {
                c = u(c, d);
                for (var e = z(b), f = a > 0 ? 0 : e - 1; f >= 0 && e > f; f += a)
                    if (c(b[f], f, b)) return f;
                return -1
            }
        }

        function c(a, b, c) {
            return function(d, e, f) {
                var g = 0,
                    h = z(d);
                if ("number" == typeof f) a > 0 ? g = f >= 0 ? f : Math.max(f + h, g) : h = f >= 0 ? Math.min(f + 1, h) : f + h + 1;
                else if (c && f && h) return f = c(d, e), d[f] === e ? f : -1;
                if (e !== e) return f = b(k.call(d, g, h), s.isNaN), f >= 0 ? f + g : -1;
                for (f = a > 0 ? g : h - 1; f >= 0 && h > f; f += a)
                    if (d[f] === e) return f;
                return -1
            }
        }

        function d(a, b) {
            var c = F.length,
                d = a.constructor,
                e = s.isFunction(d) && d.prototype || h,
                f = "constructor";
            for (s.has(a, f) && !s.contains(b, f) && b.push(f); c--;) f = F[c], f in a && a[f] !== e[f] && !s.contains(b, f) && b.push(f)
        }
        var e = this,
            f = e._,
            g = Array.prototype,
            h = Object.prototype,
            i = Function.prototype,
            j = g.push,
            k = g.slice,
            l = h.toString,
            m = h.hasOwnProperty,
            n = Array.isArray,
            o = Object.keys,
            p = i.bind,
            q = Object.create,
            r = function() {},
            s = function(a) { return a instanceof s ? a : this instanceof s ? void(this._wrapped = a) : new s(a) };
        "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = s), exports._ = s) : e._ = s, s.VERSION = "1.8.3";
        var t = function(a, b, c) {
                if (void 0 === b) return a;
                switch (null == c ? 3 : c) {
                    case 1:
                        return function(c) { return a.call(b, c) };
                    case 2:
                        return function(c, d) { return a.call(b, c, d) };
                    case 3:
                        return function(c, d, e) { return a.call(b, c, d, e) };
                    case 4:
                        return function(c, d, e, f) { return a.call(b, c, d, e, f) }
                }
                return function() { return a.apply(b, arguments) }
            },
            u = function(a, b, c) { return null == a ? s.identity : s.isFunction(a) ? t(a, b, c) : s.isObject(a) ? s.matcher(a) : s.property(a) };
        s.iteratee = function(a, b) { return u(a, b, 1 / 0) };
        var v = function(a, b) {
                return function(c) {
                    var d = arguments.length;
                    if (2 > d || null == c) return c;
                    for (var e = 1; d > e; e++)
                        for (var f = arguments[e], g = a(f), h = g.length, i = 0; h > i; i++) {
                            var j = g[i];
                            b && void 0 !== c[j] || (c[j] = f[j])
                        }
                    return c
                }
            },
            w = function(a) {
                if (!s.isObject(a)) return {};
                if (q) return q(a);
                r.prototype = a;
                var b = new r;
                return r.prototype = null, b
            },
            x = function(a) { return function(b) { return null == b ? void 0 : b[a] } },
            y = Math.pow(2, 53) - 1,
            z = x("length"),
            A = function(a) { var b = z(a); return "number" == typeof b && b >= 0 && y >= b };
        s.each = s.forEach = function(a, b, c) {
            b = t(b, c);
            var d, e;
            if (A(a))
                for (d = 0, e = a.length; e > d; d++) b(a[d], d, a);
            else { var f = s.keys(a); for (d = 0, e = f.length; e > d; d++) b(a[f[d]], f[d], a) }
            return a
        }, s.map = s.collect = function(a, b, c) {
            b = u(b, c);
            for (var d = !A(a) && s.keys(a), e = (d || a).length, f = Array(e), g = 0; e > g; g++) {
                var h = d ? d[g] : g;
                f[g] = b(a[h], h, a)
            }
            return f
        }, s.reduce = s.foldl = s.inject = a(1), s.reduceRight = s.foldr = a(-1), s.find = s.detect = function(a, b, c) { var d; return d = A(a) ? s.findIndex(a, b, c) : s.findKey(a, b, c), void 0 !== d && -1 !== d ? a[d] : void 0 }, s.filter = s.select = function(a, b, c) { var d = []; return b = u(b, c), s.each(a, function(a, c, e) { b(a, c, e) && d.push(a) }), d }, s.reject = function(a, b, c) { return s.filter(a, s.negate(u(b)), c) }, s.every = s.all = function(a, b, c) { b = u(b, c); for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) { var g = d ? d[f] : f; if (!b(a[g], g, a)) return !1 } return !0 }, s.some = s.any = function(a, b, c) { b = u(b, c); for (var d = !A(a) && s.keys(a), e = (d || a).length, f = 0; e > f; f++) { var g = d ? d[f] : f; if (b(a[g], g, a)) return !0 } return !1 }, s.contains = s.includes = s.include = function(a, b, c, d) { return A(a) || (a = s.values(a)), ("number" != typeof c || d) && (c = 0), s.indexOf(a, b, c) >= 0 }, s.invoke = function(a, b) {
            var c = k.call(arguments, 2),
                d = s.isFunction(b);
            return s.map(a, function(a) { var e = d ? b : a[b]; return null == e ? e : e.apply(a, c) })
        }, s.pluck = function(a, b) { return s.map(a, s.property(b)) }, s.where = function(a, b) { return s.filter(a, s.matcher(b)) }, s.findWhere = function(a, b) { return s.find(a, s.matcher(b)) }, s.max = function(a, b, c) {
            var d, e, f = -1 / 0,
                g = -1 / 0;
            if (null == b && null != a) { a = A(a) ? a : s.values(a); for (var h = 0, i = a.length; i > h; h++) d = a[h], d > f && (f = d) } else b = u(b, c), s.each(a, function(a, c, d) { e = b(a, c, d), (e > g || e === -1 / 0 && f === -1 / 0) && (f = a, g = e) });
            return f
        }, s.min = function(a, b, c) {
            var d, e, f = 1 / 0,
                g = 1 / 0;
            if (null == b && null != a) { a = A(a) ? a : s.values(a); for (var h = 0, i = a.length; i > h; h++) d = a[h], f > d && (f = d) } else b = u(b, c), s.each(a, function(a, c, d) { e = b(a, c, d), (g > e || 1 / 0 === e && 1 / 0 === f) && (f = a, g = e) });
            return f
        }, s.shuffle = function(a) { for (var b, c = A(a) ? a : s.values(a), d = c.length, e = Array(d), f = 0; d > f; f++) b = s.random(0, f), b !== f && (e[f] = e[b]), e[b] = c[f]; return e }, s.sample = function(a, b, c) { return null == b || c ? (A(a) || (a = s.values(a)), a[s.random(a.length - 1)]) : s.shuffle(a).slice(0, Math.max(0, b)) }, s.sortBy = function(a, b, c) {
            return b = u(b, c), s.pluck(s.map(a, function(a, c, d) { return { value: a, index: c, criteria: b(a, c, d) } }).sort(function(a, b) {
                var c = a.criteria,
                    d = b.criteria;
                if (c !== d) { if (c > d || void 0 === c) return 1; if (d > c || void 0 === d) return -1 }
                return a.index - b.index
            }), "value")
        };
        var B = function(a) {
            return function(b, c, d) {
                var e = {};
                return c = u(c, d), s.each(b, function(d, f) {
                    var g = c(d, f, b);
                    a(e, d, g)
                }), e
            }
        };
        s.groupBy = B(function(a, b, c) { s.has(a, c) ? a[c].push(b) : a[c] = [b] }), s.indexBy = B(function(a, b, c) { a[c] = b }), s.countBy = B(function(a, b, c) { s.has(a, c) ? a[c]++ : a[c] = 1 }), s.toArray = function(a) { return a ? s.isArray(a) ? k.call(a) : A(a) ? s.map(a, s.identity) : s.values(a) : [] }, s.size = function(a) { return null == a ? 0 : A(a) ? a.length : s.keys(a).length }, s.partition = function(a, b, c) {
            b = u(b, c);
            var d = [],
                e = [];
            return s.each(a, function(a, c, f) {
                (b(a, c, f) ? d : e).push(a)
            }), [d, e]
        }, s.first = s.head = s.take = function(a, b, c) { return null == a ? void 0 : null == b || c ? a[0] : s.initial(a, a.length - b) }, s.initial = function(a, b, c) { return k.call(a, 0, Math.max(0, a.length - (null == b || c ? 1 : b))) }, s.last = function(a, b, c) { return null == a ? void 0 : null == b || c ? a[a.length - 1] : s.rest(a, Math.max(0, a.length - b)) }, s.rest = s.tail = s.drop = function(a, b, c) { return k.call(a, null == b || c ? 1 : b) }, s.compact = function(a) { return s.filter(a, s.identity) };
        var C = function(a, b, c, d) {
            for (var e = [], f = 0, g = d || 0, h = z(a); h > g; g++) {
                var i = a[g];
                if (A(i) && (s.isArray(i) || s.isArguments(i))) {
                    b || (i = C(i, b, c));
                    var j = 0,
                        k = i.length;
                    for (e.length += k; k > j;) e[f++] = i[j++]
                } else c || (e[f++] = i)
            }
            return e
        };
        s.flatten = function(a, b) { return C(a, b, !1) }, s.without = function(a) { return s.difference(a, k.call(arguments, 1)) }, s.uniq = s.unique = function(a, b, c, d) {
            s.isBoolean(b) || (d = c, c = b, b = !1), null != c && (c = u(c, d));
            for (var e = [], f = [], g = 0, h = z(a); h > g; g++) {
                var i = a[g],
                    j = c ? c(i, g, a) : i;
                b ? (g && f === j || e.push(i), f = j) : c ? s.contains(f, j) || (f.push(j), e.push(i)) : s.contains(e, i) || e.push(i)
            }
            return e
        }, s.union = function() { return s.uniq(C(arguments, !0, !0)) }, s.intersection = function(a) {
            for (var b = [], c = arguments.length, d = 0, e = z(a); e > d; d++) {
                var f = a[d];
                if (!s.contains(b, f)) {
                    for (var g = 1; c > g && s.contains(arguments[g], f); g++);
                    g === c && b.push(f)
                }
            }
            return b
        }, s.difference = function(a) { var b = C(arguments, !0, !0, 1); return s.filter(a, function(a) { return !s.contains(b, a) }) }, s.zip = function() { return s.unzip(arguments) }, s.unzip = function(a) { for (var b = a && s.max(a, z).length || 0, c = Array(b), d = 0; b > d; d++) c[d] = s.pluck(a, d); return c }, s.object = function(a, b) { for (var c = {}, d = 0, e = z(a); e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1]; return c }, s.findIndex = b(1), s.findLastIndex = b(-1), s.sortedIndex = function(a, b, c, d) {
            c = u(c, d, 1);
            for (var e = c(b), f = 0, g = z(a); g > f;) {
                var h = Math.floor((f + g) / 2);
                c(a[h]) < e ? f = h + 1 : g = h
            }
            return f
        }, s.indexOf = c(1, s.findIndex, s.sortedIndex), s.lastIndexOf = c(-1, s.findLastIndex), s.range = function(a, b, c) { null == b && (b = a || 0, a = 0), c = c || 1; for (var d = Math.max(Math.ceil((b - a) / c), 0), e = Array(d), f = 0; d > f; f++, a += c) e[f] = a; return e };
        var D = function(a, b, c, d, e) {
            if (!(d instanceof b)) return a.apply(c, e);
            var f = w(a.prototype),
                g = a.apply(f, e);
            return s.isObject(g) ? g : f
        };
        s.bind = function(a, b) {
            if (p && a.bind === p) return p.apply(a, k.call(arguments, 1));
            if (!s.isFunction(a)) throw new TypeError("Bind must be called on a function");
            var c = k.call(arguments, 2),
                d = function() { return D(a, d, b, this, c.concat(k.call(arguments))) };
            return d
        }, s.partial = function(a) {
            var b = k.call(arguments, 1),
                c = function() { for (var d = 0, e = b.length, f = Array(e), g = 0; e > g; g++) f[g] = b[g] === s ? arguments[d++] : b[g]; for (; d < arguments.length;) f.push(arguments[d++]); return D(a, c, this, this, f) };
            return c
        }, s.bindAll = function(a) { var b, c, d = arguments.length; if (1 >= d) throw new Error("bindAll must be passed function names"); for (b = 1; d > b; b++) c = arguments[b], a[c] = s.bind(a[c], a); return a }, s.memoize = function(a, b) {
            var c = function(d) {
                var e = c.cache,
                    f = "" + (b ? b.apply(this, arguments) : d);
                return s.has(e, f) || (e[f] = a.apply(this, arguments)), e[f]
            };
            return c.cache = {}, c
        }, s.delay = function(a, b) { var c = k.call(arguments, 2); return setTimeout(function() { return a.apply(null, c) }, b) }, s.defer = s.partial(s.delay, s, 1), s.throttle = function(a, b, c) {
            var d, e, f, g = null,
                h = 0;
            c || (c = {});
            var i = function() { h = c.leading === !1 ? 0 : s.now(), g = null, f = a.apply(d, e), g || (d = e = null) };
            return function() {
                var j = s.now();
                h || c.leading !== !1 || (h = j);
                var k = b - (j - h);
                return d = this, e = arguments, 0 >= k || k > b ? (g && (clearTimeout(g), g = null), h = j, f = a.apply(d, e), g || (d = e = null)) : g || c.trailing === !1 || (g = setTimeout(i, k)), f
            }
        }, s.debounce = function(a, b, c) {
            var d, e, f, g, h, i = function() {
                var j = s.now() - g;
                b > j && j >= 0 ? d = setTimeout(i, b - j) : (d = null, c || (h = a.apply(f, e), d || (f = e = null)))
            };
            return function() { f = this, e = arguments, g = s.now(); var j = c && !d; return d || (d = setTimeout(i, b)), j && (h = a.apply(f, e), f = e = null), h }
        }, s.wrap = function(a, b) { return s.partial(b, a) }, s.negate = function(a) { return function() { return !a.apply(this, arguments) } }, s.compose = function() {
            var a = arguments,
                b = a.length - 1;
            return function() { for (var c = b, d = a[b].apply(this, arguments); c--;) d = a[c].call(this, d); return d }
        }, s.after = function(a, b) { return function() { return --a < 1 ? b.apply(this, arguments) : void 0 } }, s.before = function(a, b) { var c; return function() { return --a > 0 && (c = b.apply(this, arguments)), 1 >= a && (b = null), c } }, s.once = s.partial(s.before, 2);
        var E = !{ toString: null }.propertyIsEnumerable("toString"),
            F = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
        s.keys = function(a) { if (!s.isObject(a)) return []; if (o) return o(a); var b = []; for (var c in a) s.has(a, c) && b.push(c); return E && d(a, b), b }, s.allKeys = function(a) { if (!s.isObject(a)) return []; var b = []; for (var c in a) b.push(c); return E && d(a, b), b }, s.values = function(a) { for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = a[b[e]]; return d }, s.mapObject = function(a, b, c) { b = u(b, c); for (var d, e = s.keys(a), f = e.length, g = {}, h = 0; f > h; h++) d = e[h], g[d] = b(a[d], d, a); return g }, s.pairs = function(a) { for (var b = s.keys(a), c = b.length, d = Array(c), e = 0; c > e; e++) d[e] = [b[e], a[b[e]]]; return d }, s.invert = function(a) { for (var b = {}, c = s.keys(a), d = 0, e = c.length; e > d; d++) b[a[c[d]]] = c[d]; return b }, s.functions = s.methods = function(a) { var b = []; for (var c in a) s.isFunction(a[c]) && b.push(c); return b.sort() }, s.extend = v(s.allKeys), s.extendOwn = s.assign = v(s.keys), s.findKey = function(a, b, c) {
            b = u(b, c);
            for (var d, e = s.keys(a), f = 0, g = e.length; g > f; f++)
                if (d = e[f], b(a[d], d, a)) return d
        }, s.pick = function(a, b, c) {
            var d, e, f = {},
                g = a;
            if (null == g) return f;
            s.isFunction(b) ? (e = s.allKeys(g), d = t(b, c)) : (e = C(arguments, !1, !1, 1), d = function(a, b, c) { return b in c }, g = Object(g));
            for (var h = 0, i = e.length; i > h; h++) {
                var j = e[h],
                    k = g[j];
                d(k, j, g) && (f[j] = k)
            }
            return f
        }, s.omit = function(a, b, c) {
            if (s.isFunction(b)) b = s.negate(b);
            else {
                var d = s.map(C(arguments, !1, !1, 1), String);
                b = function(a, b) { return !s.contains(d, b) }
            }
            return s.pick(a, b, c)
        }, s.defaults = v(s.allKeys, !0), s.create = function(a, b) { var c = w(a); return b && s.extendOwn(c, b), c }, s.clone = function(a) { return s.isObject(a) ? s.isArray(a) ? a.slice() : s.extend({}, a) : a }, s.tap = function(a, b) { return b(a), a }, s.isMatch = function(a, b) {
            var c = s.keys(b),
                d = c.length;
            if (null == a) return !d;
            for (var e = Object(a), f = 0; d > f; f++) { var g = c[f]; if (b[g] !== e[g] || !(g in e)) return !1 }
            return !0
        };
        var G = function(a, b, c, d) {
            if (a === b) return 0 !== a || 1 / a === 1 / b;
            if (null == a || null == b) return a === b;
            a instanceof s && (a = a._wrapped), b instanceof s && (b = b._wrapped);
            var e = l.call(a);
            if (e !== l.call(b)) return !1;
            switch (e) {
                case "[object RegExp]":
                case "[object String]":
                    return "" + a == "" + b;
                case "[object Number]":
                    return +a !== +a ? +b !== +b : 0 === +a ? 1 / +a === 1 / b : +a === +b;
                case "[object Date]":
                case "[object Boolean]":
                    return +a === +b
            }
            var f = "[object Array]" === e;
            if (!f) {
                if ("object" != typeof a || "object" != typeof b) return !1;
                var g = a.constructor,
                    h = b.constructor;
                if (g !== h && !(s.isFunction(g) && g instanceof g && s.isFunction(h) && h instanceof h) && "constructor" in a && "constructor" in b) return !1
            }
            c = c || [], d = d || [];
            for (var i = c.length; i--;)
                if (c[i] === a) return d[i] === b;
            if (c.push(a), d.push(b), f) {
                if (i = a.length, i !== b.length) return !1;
                for (; i--;)
                    if (!G(a[i], b[i], c, d)) return !1
            } else {
                var j, k = s.keys(a);
                if (i = k.length, s.keys(b).length !== i) return !1;
                for (; i--;)
                    if (j = k[i], !s.has(b, j) || !G(a[j], b[j], c, d)) return !1
            }
            return c.pop(), d.pop(), !0
        };
        s.isEqual = function(a, b) { return G(a, b) }, s.isEmpty = function(a) { return null == a ? !0 : A(a) && (s.isArray(a) || s.isString(a) || s.isArguments(a)) ? 0 === a.length : 0 === s.keys(a).length }, s.isElement = function(a) { return !(!a || 1 !== a.nodeType) }, s.isArray = n || function(a) { return "[object Array]" === l.call(a) }, s.isObject = function(a) { var b = typeof a; return "function" === b || "object" === b && !!a }, s.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(a) { s["is" + a] = function(b) { return l.call(b) === "[object " + a + "]" } }), s.isArguments(arguments) || (s.isArguments = function(a) { return s.has(a, "callee") }), "function" != typeof /./ && "object" != typeof Int8Array && (s.isFunction = function(a) { return "function" == typeof a || !1 }), s.isFinite = function(a) { return isFinite(a) && !isNaN(parseFloat(a)) }, s.isNaN = function(a) { return s.isNumber(a) && a !== +a }, s.isBoolean = function(a) { return a === !0 || a === !1 || "[object Boolean]" === l.call(a) }, s.isNull = function(a) { return null === a }, s.isUndefined = function(a) { return void 0 === a }, s.has = function(a, b) { return null != a && m.call(a, b) }, s.noConflict = function() { return e._ = f, this }, s.identity = function(a) { return a }, s.constant = function(a) { return function() { return a } }, s.noop = function() {}, s.property = x, s.propertyOf = function(a) { return null == a ? function() {} : function(b) { return a[b] } }, s.matcher = s.matches = function(a) {
            return a = s.extendOwn({}, a),
                function(b) { return s.isMatch(b, a) }
        }, s.times = function(a, b, c) {
            var d = Array(Math.max(0, a));
            b = t(b, c, 1);
            for (var e = 0; a > e; e++) d[e] = b(e);
            return d
        }, s.random = function(a, b) { return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1)) }, s.now = Date.now || function() { return (new Date).getTime() };
        var H = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
            I = s.invert(H),
            J = function(a) {
                var b = function(b) { return a[b] },
                    c = "(?:" + s.keys(a).join("|") + ")",
                    d = RegExp(c),
                    e = RegExp(c, "g");
                return function(a) { return a = null == a ? "" : "" + a, d.test(a) ? a.replace(e, b) : a }
            };
        s.escape = J(H), s.unescape = J(I), s.result = function(a, b, c) { var d = null == a ? void 0 : a[b]; return void 0 === d && (d = c), s.isFunction(d) ? d.call(a) : d };
        var K = 0;
        s.uniqueId = function(a) { var b = ++K + ""; return a ? a + b : b }, s.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g };
        var L = /(.)^/,
            M = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" },
            N = /\\|'|\r|\n|\u2028|\u2029/g,
            O = function(a) { return "\\" + M[a] };
        s.template = function(a, b, c) {
            !b && c && (b = c), b = s.defaults({}, b, s.templateSettings);
            var d = RegExp([(b.escape || L).source, (b.interpolate || L).source, (b.evaluate || L).source].join("|") + "|$", "g"),
                e = 0,
                f = "__p+='";
            a.replace(d, function(b, c, d, g, h) { return f += a.slice(e, h).replace(N, O), e = h + b.length, c ? f += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'" : d ? f += "'+\n((__t=(" + d + "))==null?'':__t)+\n'" : g && (f += "';\n" + g + "\n__p+='"), b }), f += "';\n", b.variable || (f = "with(obj||{}){\n" + f + "}\n"), f = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + f + "return __p;\n";
            try { var g = new Function(b.variable || "obj", "_", f) } catch (h) { throw h.source = f, h }
            var i = function(a) { return g.call(this, a, s) },
                j = b.variable || "obj";
            return i.source = "function(" + j + "){\n" + f + "}", i
        }, s.chain = function(a) { var b = s(a); return b._chain = !0, b };
        var P = function(a, b) { return a._chain ? s(b).chain() : b };
        s.mixin = function(a) {
            s.each(s.functions(a), function(b) {
                var c = s[b] = a[b];
                s.prototype[b] = function() { var a = [this._wrapped]; return j.apply(a, arguments), P(this, c.apply(s, a)) }
            })
        }, s.mixin(s), s.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
            var b = g[a];
            s.prototype[a] = function() { var c = this._wrapped; return b.apply(c, arguments), "shift" !== a && "splice" !== a || 0 !== c.length || delete c[0], P(this, c) }
        }), s.each(["concat", "join", "slice"], function(a) {
            var b = g[a];
            s.prototype[a] = function() { return P(this, b.apply(this._wrapped, arguments)) }
        }), s.prototype.value = function() { return this._wrapped }, s.prototype.valueOf = s.prototype.toJSON = s.prototype.value, s.prototype.toString = function() { return "" + this._wrapped }, "function" == typeof define && define.amd && define("underscore", [], function() { return s })
    }.call(this);
var APP = APP || {};
APP.common = function(a, b, c, d) {
    function e() { try { a.console.log.apply(a.console, arguments) } catch (b) {} }

    function f(a) { alert(a.msg), a.cb && a.cb.fn.apply(a.cb.scope, a.cb.params) }

    function g(a) { return b.ajax(a) }

    function h(b, c) {
        var d, e = b.split("."),
            f = a[c] || a.APP;
        e[0] === c && (e = e.slice(1));
        var g = e.length;
        for (d = 0; g > d; d += 1) "undefined" == typeof f[e[d]] && (f[e[d]] = {}), f = f[e[d]];
        return f
    }

    function i(a) { return "" === a || "undefined" === a || "null" === a || null === a || a === d ? !0 : !1 }

    function j(a, b, c) { return a.replace(b, c) }

    function k() {
        var b = a.navigator.userAgent,
            c = b.indexOf("MSIE ");
        return c > 0 ? parseInt(b.substring(c + 5, b.indexOf(".", c))) : 0
    }

    function l() { var b = !1; return Modernizr.csstransforms3d && (-1 == a.navigator.userAgent.toLowerCase().indexOf("android") ? b = !0 : navigator.userAgent.match(/Android \d+/) && Number(navigator.userAgent.match(/Android \d+/)[0].match(/\d+/)[0]) >= 6 && (b = !0)), b }

    function m() { var b = !1; return -1 != a.navigator.userAgent.toLowerCase().indexOf("window") && (b = !0), b }

    function n() {
        var a = b("#wrap");
        a.addClass("window")
    }
    return { isWindow: m, setupKrFont: n, namespace: h, callAPI: g, showMsg: f, isEmptyValue: i, replaceAll: j, getIEVersion: k, checkDoAnimation: l, log: a.console ? e : function() {}, validator: { email: /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/ }, util: { trim: function(a) { return a.replace(/(^\s*)|(\s*$)/gi, "") } } }
}(window, window.jQuery, window._), APP.common.isWindow() && $("#wrap").hasClass("ko") && APP.common.setupKrFont(), APP.video = function(a, b, c, d, e) {
    function f() { b("*[data-video-area]").length > 0 && g() }

    function g() { b("*[data-video-area]").each(function(a) { m.push(this), h(this) }) }

    function h(c) { b(c).on("click", function(c) { c.preventDefault(); var d = b(c.target).closest(".img_click_area"); return j(d.attr(i(a.chkIsChn, a.gLocale)) || d.attr("data-video-area")), !1 }), b(a).resize(function() { clearTimeout(n), n = setTimeout(function() { l() }, o) }) }

    function i(a, b) { return console.log(b, ":::::::::::::////////////////////"), "true" === a || a === !0 || "zh" === b ? "data-video-cn-area" : "data-video-" + b + "-area" }

    function j(a) {
        var c = 800,
            d = 450,
            e = 20,
            f = "",
            g = parseInt(p.width(), 10);
        parseInt(p.height(), 10);
        g >= 840 || (c = g - 2 * e, d = parseInt(500 * (c - 2 * e) / 800, 10), 500 > c && (f = "&title=0")), b(document.body).append(['<div class="dimmed_bg" style="">', "</div>", '<div id="videoPlayer" class="video_player"  style="width:' + c + "px; height:" + d + 'px;">', '<iframe src="' + a + "?autoplay=1" + f + '" width="' + c + '" height="' + d + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen>', "</iframe>", "</div>"].join("")), b(".dimmed_bg").one("click", function(a) { return a.preventDefault(), k(), !1 }), l()
    }

    function k() { b(".dimmed_bg").off("click"), b(".dimmed_bg").remove(), b("#videoPlayer").remove() }

    function l() { b("#videoPlayer")[0] && b("#videoPlayer").css({ top: parseInt(.5 * (b(a).height() - b("#videoPlayer").height()), 10) + "px", left: parseInt(.5 * (b(a).width() - b("#videoPlayer").width()), 10) + "px" }) }
    var m = (d.common.log, d.common.showMsg, []),
        n = null,
        o = 300,
        p = b(a);
    return { init: f }
}(window, window.jQuery, window._, window.APP), APP.nav = function(a, b, c, d, e) {
    function f() {
        if (o.find(".nav")[0]) {
            m = b("#wrap .nav"), n = m.find(".nav_list_cont");
            var c = l();
            0 === c || m.find(".nav_list_cont .nav_list>li:eq(" + (c - 1) + ")>a").addClass("act"), p.on("click", function(a) { return a.preventDefault(), n.hasClass("on") ? j() : j("on"), !1 }), q.find(".lang_btn").on("click", function(c) { return c.preventDefault(), b.cookie("fxmirror.locale", b(c.target).attr("data-lang"), { path: "/" }), a.location.href = "/" + b(c.target).attr("data-lang") + "/" + b(document.body).attr("data-page"), !1 }), s.find("li>a").on("click", function(c) { return c.preventDefault(), b.cookie("fxmirror.locale", b(c.target).attr("data-lang"), { path: "/" }), a.location.href = "/" + b(c.target).attr("data-lang") + "/" + b(document.body).attr("data-page"), !1 }), r.on("click", function(a) { return a.preventDefault(), r.hasClass("on") ? k() : k("on"), !1 }), b(a).resize(function() { g() }), m.addClass("show"), b(a).on("scroll", h), setTimeout(g, 500)
        }
    }

    function g() { n.removeClass("on"), n.css({ height: "0px" }), k("off", 0), h(!0), b(a).width() >= 1025 ? (q.css("display", "block"), r.css("display", "none"), s.css("display", "none"), m.height(148)) : (q.css("display", "none"), r.css("display", "block"), s.css("display", "block"), m.height(71)) }

    function h(c) { b(document.body).hasClass("view_desktop") ? (x = -48, y = -148) : (x = 0, y = -80), b(document.body).hasClass("view_desktop") || (n.hasClass("on") && j("off", 0), r.hasClass("on") && k("off", 0)), b(a).scrollTop() > 70 ? (i(m, !0), b(a).scrollTop() < w ? m.hasClass("show") || m.stop().addClass("show").transit({ "margin-top": x + "px" }, { duration: 300 }) : m.hasClass("show") && m.stop().removeClass("show").transit({ "margin-top": y + "px" }, { duration: 200 })) : (i(m, !1), m.hasClass("show") ? b(document.body).hasClass("view_desktop") && m.stop().addClass("show").transit({ "margin-top": "0px" }, { duration: 300 }) : b(document.body).hasClass("view_desktop") ? m.stop().addClass("show").transit({ "margin-top": "0px" }, { duration: 300 }) : m.stop().addClass("show").transit({ "margin-top": x + "px" }, { duration: 300 })), c === !0 && (b(document.body).hasClass("view_desktop") && b(a).scrollTop() <= 70 ? m.stop().addClass("show").transit({ "margin-top": "0px" }, { duration: 300 }) : m.stop().addClass("show").transit({ "margin-top": x + "px" }, { duration: 300 })), w = b(a).scrollTop() }

    function i(a, b) { try { b ? a.transit({ "box-shadow": u }, { duration: 0 }) : a.transit({ "box-shadow": v }, { duration: 0 }) } catch (c) {} }

    function j(a, b) { r.hasClass("on") && k("off", 0), "on" === a ? (n.addClass("on"), m.transit({ height: 42 * n.find("li").length + 91 + "px" }, { duration: 350 }), n.transit({ height: 42 * n.find("li").length + 20 + "px" }, { duration: 350 })) : (n.removeClass("on"), m.transit({ height: "71px" }, { duration: 0 === b ? b : 200 }), n.transit({ height: "0px" }, { duration: 0 === b ? b : 200 })) }

    function k(a, b) { n.hasClass("on") && j("off", 0), "on" === a ? (r.addClass("on"), m.transit({ height: 45 * s.find("li").length + 91 + "px" }, { duration: 350 }), s.transit({ height: 45 * s.find("li").length + 20 + "px" }, { duration: 350 })) : (r.removeClass("on"), m.transit({ height: "71px" }, { duration: 0 === b ? b : 200 }), s.transit({ height: "0px" }, { duration: 200 })) }

    function l() {
        var a, b = t.length,
            c = 0;
        for (a = 0; b > a; ++a)
            if (o.hasClass(t[a])) { c = a; break }
        return c
    }
    var m, n, o = (d.common.log, d.common.showMsg, b("#wrap")),
        p = b("#navBtn"),
        q = b(".nav .lang_cont"),
        r = b(".nav .lang_cont_m_btn"),
        s = b(".nav .lang_cont_m"),
        t = (b(".nav .lang_cont .lang_btn"), ["main", "features", "fitnshop", "about", "contact"]),
        u = "0px 4px 7px -2px rgba(0,0,0,0.38)",
        v = "none",
        w = 0,
        x = 0,
        y = -80;
    return { init: f }
}(window, window.jQuery, window._, window.APP), APP.responseManager = function(a, b, c, d, e) {
    function f() { b(a).resize(function() { g() }), g() }

    function g() { i = b(a).width(), i > 1024 ? h.hasClass(l) || h.removeClass(m).addClass(l) : 1024 >= i && i >= 768 ? h.hasClass(k) || h.removeClass(m).addClass(k) : h.hasClass(j) || h.removeClass(m).addClass(j) }
    var h = (d.common.log, d.common.showMsg, b("#wrap"), b(document.body)),
        i = 0,
        j = "view_mobile",
        k = "view_tablet",
        l = "view_desktop",
        m = j + " " + k + " " + l;
    return { init: f, resize: g, VIEW_MOBILE: j, VIEW_DESKTOP: l }
}(window, window.jQuery, window._, window.APP), APP.responseManager.init(), APP.nav.init(), APP.video.init();
var APP = APP || {};
APP.main = function(a, b, c, d, e, f) {
    function g() { h(), i(), j(), d.common.checkDoAnimation() && (k(), setTimeout(function() { b(a).scroll() }, 300)), b("#wrap").css({ opacity: 1 }), b(".tab_btn span, .dot_btn span, .dropdown span").click(function() { b(".dropdown").removeClass("pop"), b(this).hasClass("picked") || b(".tab_btn span, .dot_btn .dot, .content_hightlight .img_cont .img_click_area, .dropdown span").toggleClass("picked") }), b(".tab_btn .triangle").bind("touchstart", function() { b(".content_hightlight .dropdown").toggleClass("pop") }) }

    function h() { l = b("#wrap"), m = l.find(".content_hightlight .img_cont") }

    function i() { b(a).resize(function() { n && clearTimeout(n), n = setTimeout(function() { j() }, o) }) }

    function j() { b(a).width() >= 1024 ? m.css({ height: p + "px" }) : b(a).width() >= 768 && b(a).width() < 1024 ? m.css({ height: parseInt(p * b(a).width() / 1024, 10) + "px" }) : m.css({ height: parseInt(p * b(a).width() / 1024, 10) + "px" }) }

    function k() { b(".content_hightlight .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_hightlight .title_sub").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "90%" }), b(".content_hightlight .brochure").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.6s", windowarea: "90%" }), b(".content_hightlight .img_cont").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "1s", windowarea: "100%" }), b(".content_mobile .title_sub").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_mobile .title_main").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "90%" }), b(".content_mobile .img_mobile").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "1s", windowarea: "90%" }), b(".content_features .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .clothes .img_cont").boxLoader({ direction: "x", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .clothes .img_cont").boxLoader({ direction: "x", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .clothes .title").boxLoader({ direction: "x", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .clothes .desc").boxLoader({ direction: "x", position: "35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .items .img_cont").boxLoader({ direction: "x", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .items .title").boxLoader({ direction: "x", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .items .desc").boxLoader({ direction: "x", position: "-35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .software .img_cont").boxLoader({ direction: "x", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .software .title").boxLoader({ direction: "x", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .software .desc").boxLoader({ direction: "x", position: "35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .ad .img_cont").boxLoader({ direction: "x", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .ad .title").boxLoader({ direction: "x", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .ad .desc").boxLoader({ direction: "x", position: "-35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_asseenon .title_main").boxLoader({ direction: "y", position: "-80%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_asseenon .asseenon_list li").each(function(a) { a % 2 == 0 ? b(this).boxLoader({ direction: "x", position: "-35%", effect: "fadeIn", duration: "0.8s", windowarea: "100%" }) : b(this).boxLoader({ direction: "x", position: "35%", effect: "fadeIn", duration: "0.8s", windowarea: "100%" }) }) }
    var l, m, n = (d.common, null),
        o = 300,
        p = 574;
    return { init: g, resize: j }
}(window, window.jQuery, window._, window.APP, window.Modernizr);
var APP = APP || {};
APP.feature = function(a, b, c, d, e, f) {
    function g() { b(a).resize(function() { h() }), h(), d.common.checkDoAnimation() && (i(), setTimeout(function() { b(a).scroll() }, 300)), b("#wrap").css({ opacity: 1 }), b(".tab_btn span, .dropdown span").click(function() { b(".dropdown").removeClass("pop"), b(this).hasClass("picked") || b(".content_mirror .tab_btn span, .content_mirror .scroll .screen div, .content_mirror .part, .content_mirror .title_cont, .dropdown span, .content_features .gallery_cont").toggleClass("picked") }), b(".content_mirror .part .arrow").click(function() { b(".tab_btn span:not(.picked)").click() }), b(".tab_btn .triangle").bind("touchstart", function() { b(".content_mirror .dropdown").toggleClass("pop") }) }

    function h() { b(a).width() > 1024 ? j.css("display", "block") : j.css("display", "none"), b(a).width() < 768 ? (k.css("display", "none"), l.html(d.common.replaceAll(l.html(), /<br>&amp;<br>/gi, " & "))) : (k.css("display", "block"), l.html(d.common.replaceAll(l.html(), / &amp; /gi, "<br>&amp;<br>"))) }

    function i() {
        b(".content_hightlight .title_main, .content_mirror .tab_btn").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_hightlight .desc").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_mirror .scroll").boxLoader({ direction: "x", position: "0%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_features .gallery_cont .frame").each(function(a) {
            [0, 2, 4].indexOf(a) > -1 ? b(this).boxLoader({ direction: "x", position: "-35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) : b(this).boxLoader({ direction: "x", position: "35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" })
        }), b(".content_ware .hardware_img .processor").boxLoader({
            direction: "x",
            position: "-30%",
            effect: "fadeIn",
            duration: "0.8s",
            windowarea: "80%"
        }), b(".content_ware .hardware_img .camera").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_ware .hardware_img .router").boxLoader({ direction: "x", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_ware .software_img .app, .content_ware .software_img .cat").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_cat  .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_cat  .cat_desc").boxLoader({ direction: "y", position: "40%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_cat .large_l_img").boxLoader({ direction: "x", position: "-20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b('.content_cat div[class*="top"]').boxLoader({ direction: "y", position: "-20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b('.content_cat div[class*="bottom"]').boxLoader({ direction: "y", position: "20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_kids .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_kids .img_list").each(function(a) { a % 2 == 0 ? b(this).boxLoader({ direction: "x", position: "-35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) : b(this).boxLoader({ direction: "x", position: "35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) }), b(".content_kids .kids_info_area .kids_info_title").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_kids .kids_info_area .kids_info_desc").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_benefits .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_benefits .circle_title").boxLoader({ direction: "y", position: "0%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_benefits .box_list").each(function(a) { a % 2 == 0 ? b(this).boxLoader({ direction: "x", position: "-35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) : b(this).boxLoader({ direction: "x", position: "35%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) })
    }
    var j = b(".content_cat .cat_desc br"),
        k = b(".software .list_title br"),
        l = b(".content_benefits .circle_title:eq(0)");
    b(".content_benefits .circle_title br");
    return { init: g, resize: h }
}(window, window.jQuery, window._, window.APP, window.Modernizr);
var APP = APP || {};
APP.contact = function(a, b, c, d, e, f) {
    function g() {
        if (b("#wrap").hasClass("contact")) {
            try { H = d.common.getIEVersion() } catch (c) {}
            h(), i(), p(), d.common.checkDoAnimation() && (q(), setTimeout(function() { b(a).scroll() }, 300)), b("#wrap").css({ opacity: 1 })
        }
    }

    function h() { r = b("#wrap"), s = b("#iptFname"), t = b("#iptLname"), u = b("#iptEmail"), v = b("#iptEmailChk"), w = b("#iptPhone"), x = b("#iptCompany"), y = b("#iptCountry"), z = b("#iptTopic"), A = b("#iptMsg"), B = b("#sendBtn") }

    function i() { j(s, I), j(t, J), j(u, K), j(v, L), j(w, M), j(x, N), j(y, O), j(z, P), j(A, Q), G || w.keydown(function(a) {-1 !== b.inArray(a.keyCode, [46, 8, 9, 27, 13, 110, 190]) || 65 == a.keyCode && a.ctrlKey === !0 || 67 == a.keyCode && a.ctrlKey === !0 || 88 == a.keyCode && a.ctrlKey === !0 || a.keyCode >= 35 && a.keyCode <= 39 || (a.shiftKey || a.keyCode < 48 || a.keyCode > 57) && (a.keyCode < 96 || a.keyCode > 105) && a.preventDefault() }), B.css({ cursor: "pointer" }).on("click", function(a) { if (a.preventDefault(), !n()) return !1; var b = { iptFname: s.val(), iptLname: t.val(), iptEmail: u.val(), iptEmailChk: v.val(), iptPhone: w.val(), iptCompany: x.val(), iptCountry: y.val(), iptTopic: z.val(), iptMsg: "<br/>" + C.replaceAll(A.val(), /\n/gi, "<br/>") }; return o(b).then(function(a) { C.showMsg({ msg: d.i18n["contact.msg.success"] }), s.val(""), t.val(""), u.val(""), v.val(""), w.val(""), x.val(""), y.val(""), A.val(""), 0 != H && 10 > H && (s.focus(), s.blur(), t.focus(), t.blur(), u.focus(), u.blur(), v.focus(), v.blur(), w.focus(), w.blur(), x.focus(), x.blur(), y.focus(), y.blur(), A.focus(), A.blur()) }, function(a) { a.status ? "empty" == a.status || "not_same_email" == a.status : C.showMsg({ msg: d.i18n["contact.msg.fail"] }) }), !1 }), b(a).resize(function() { D && clearTimeout(D), D = setTimeout(function() { p() }, E) }) }

    function j(a, b) { a.on("blur", function(b) { b.preventDefault(), a == z ? a.parent().css({ border: "1px solid #e2e2e2" }) : a.css({ border: "1px solid #e2e2e2" }) }), a.on("keyup", function(c) { c.preventDefault(), b = k(a) }) }

    function k(a) {
        var b = !0,
            c = a.val();
        return null === c ? c = "" : A === a || (c = d.common.util.trim(c)), "" == c && (b = !1), m(a, b), (a == u || a == v) && (b = l(a)), a == v && a.val() != u.val() && (a.focus(), a.css({ border: "1px solid #FF0000" }), b = !1), b
    }

    function l(a) {
        var b = !0,
            c = d.common.util.trim(a.val());
        return c.match(d.common.validator.email) ? a.css({ border: "1px solid #e2e2e2" }) : (a.focus(), a.css({ border: "1px solid #FF0000" }), b = !1), b
    }

    function m(a, b) { a == z ? b ? z.parent().css({ border: "1px solid #e2e2e2" }) : (a.focus(), z.parent().css({ border: "1px solid #FF0000" })) : b ? a.css({ border: "1px solid #e2e2e2" }) : (a.focus(), a.css({ border: "1px solid #FF0000" })) }

    function n() {
        if ("zh" != F) {
            if (!k(s)) return I = !1, !1;
            if (I = !0, !k(t)) return J = !1, !1;
            J = !0
        } else {
            if (!k(s) && !k(t)) return J = !1, !1;
            J = !0
        }
        if (!k(u)) return K = !1, !1;
        if (K = !0, !k(v)) return L = !1, !1;
        if (L = !0, !k(w)) return M = !1, !1;
        if (G) {
            if (!w.val().match(/^[0-9]*$/gm)) return w.val(""), w.focus(), M = !1, !1;
            M = !0
        } else M = !0;
        return k(x) ? (N = !0, k(y) ? (O = !0, k(z) ? (P = !0, k(A) ? (Q = !0, !0) : (Q = !1, !1)) : (P = !1, !1)) : (O = !1, !1)) : (N = !1, !1)
    }

    function o(a) { return C.callAPI({ url: "/message", type: "POST", data: a, dataType: "JSON" }) }

    function p() { b(a).width() < 768 ? b(".contact_left input").width(b("#iptTopic").width()) : b(".contact_left input").removeAttr("style") }

    function q() { b(".content_hightlight .title_main").boxLoader({ direction: "y", position: "-10%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_contact .contact_desc").boxLoader({ direction: "y", position: "20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_contact .contact_cont").boxLoader({ direction: "y", position: "0%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) }
    var r, s, t, u, v, w, x, y, z, A, B, C = d.common,
        D = null,
        E = 300,
        F = b(document.body).attr("data-locale"),
        G = -1 == a.navigator.userAgent.toLowerCase().indexOf("android") ? !1 : !0,
        H = 0,
        I = !1,
        J = !1,
        K = !1,
        L = !1,
        M = !1,
        N = !1,
        O = !1,
        P = !1,
        Q = !1;
    return { init: g, resize: p }
}(window, window.jQuery, window._, window.APP, window.Modernizr);
var APP = APP || {};
APP.about = function(a, b, c, d, e, f) {
    function g() { b(a).resize(function() { h() }), h(), d.common.checkDoAnimation() && (i(), setTimeout(function() { b(a).scroll() }, 300)), b("#wrap").css({ opacity: 1 }) }

    function h() { b(a).width() > 768 ? j.css("display", "block") : j.css("display", "none") }

    function i() { b(".content_hightlight .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_hightlight .desc").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_fxgear .content_box").boxLoader({ direction: "y", position: "20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_biz_title .title").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".area_contents .years").each(function(a) { b(this).boxLoader({ direction: "y", position: "0%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) }), b(".area_contents .content_title").each(function(a) { b(this).boxLoader({ direction: "x", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) }), b(".area_contents .content_subtitle").each(function(a) { b(this).boxLoader({ direction: "x", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) }), b(".area_list .list_row").each(function(a) { b(this).boxLoader({ direction: "x", position: "20%", effect: "fadeIn", duration: "0.8s", windowarea: "100%" }) }) }
    var j = b(".content_box .desc br");
    return { init: g, resize: h }
}(window, window.jQuery, window._, window.APP, window.Modernizr);
var APP = APP || {};
APP.now = function(a, b, c, d, e, f) {
    function g() { h(), i(), k(), d.common.checkDoAnimation() && (j(), setTimeout(function() { b(a).scroll() }, 300)), b("#wrap").css({ opacity: 1 }) }

    function h() { l = b("#wrap"), m = b("#wrap .content_action .img_action") }

    function i() { b(a).resize(function() { n && clearTimeout(n), n = setTimeout(function() { k() }, o) }) }

    function j() { b(".content_hightlight .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_hightlight .title_sub").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_action .now_title").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_action .img_action").each(function(a) { a % 2 == 0 ? (b(this).find(".action_desc").boxLoader({ direction: "x", position: "-20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(this).find(".action_video").boxLoader({ direction: "x", position: "20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" })) : (b(this).find(".action_desc").boxLoader({ direction: "x", position: "20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(this).find(".action_video").boxLoader({ direction: "x", position: "-20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" })) }), b(".content_events .now_title").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "90%" }), b(".content_events .events_list").each(function(a) { a % 2 == 0 ? b(this).boxLoader({ direction: "x", position: "10%", effect: "fadeIn", duration: "0.8s", windowarea: "90%" }) : b(this).boxLoader({ direction: "x", position: "-10%", effect: "fadeIn", duration: "0.8s", windowarea: "90%" }) }), b(".content_commercial .now_title").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "90%" }), b(".content_commercial .commercial_list").each(function(a) { a % 2 == 0 ? b(this).boxLoader({ direction: "x", position: "10%", effect: "fadeIn", duration: "0.8s", windowarea: "90%" }) : b(this).boxLoader({ direction: "x", position: "-10%", effect: "fadeIn", duration: "0.8s", windowarea: "90%" }) }) }

    function k() { b(a).width() < 768 ? m.removeClass("right") : m.filter(":even").addClass("right") }
    var l, m, n = (d.common, null),
        o = 300;
    return { init: g, resize: k }
}(window, window.jQuery, window._, window.APP, window.Modernizr);
var APP = APP || {};
APP.fitnshop = function(a, b, c, d, e, f) {
    function g() { h(), i(), j(), d.common.checkDoAnimation() && (k(), setTimeout(function() { b(a).scroll() }, 300)), b("#wrap").css({ opacity: 1 }) }

    function h() { l = b("#wrap") }

    function i() { b(a).resize(function() { m && clearTimeout(m), m = setTimeout(function() { j() }, n) }) }

    function j() { b(a).width() < 768 ? (b("#wrap.ko .how_desc dd:eq(1)").css({ "line-height": "15px", "margin-bottom": "7px", "margin-top": "2px" }), b("#wrap.ko .how_desc dd:eq(2)").css({ "line-height": "15px" })) : b(a).width() > 1024 && (b("#wrap.ko .how_desc dd:eq(1)").css({ "line-height": "inherit", "margin-bottom": "7px", "margin-top": "-7px" }), b("#wrap.ko .how_desc dd:eq(2)").css({ "line-height": "initial" })) }

    function k() { b(".content_hightlight .title_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_hightlight .title_sub").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_hightlight .title_sub_bold").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_mobile .img_mobileroom01").boxLoader({ direction: "x", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_mobile .img_mobileroom02").boxLoader({ direction: "x", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_mobile .mobile_title").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_mobile .mobile_title_sub").boxLoader({ direction: "y", position: "30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_mobile .img_mobile_cont_inner .img_mobile").each(function(a) { a % 2 == 0 ? b(this).boxLoader({ direction: "y", position: "15%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) : b(this).boxLoader({ direction: "y", position: "-15%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }) }), b(".content_how .how_main").boxLoader({ direction: "y", position: "-30%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_how .img_how01").boxLoader({ direction: "y", position: "-20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_how .img_how02").boxLoader({ direction: "x", position: "20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_how .img_how03").boxLoader({ direction: "x", position: "-20%", effect: "fadeIn", duration: "0.8s", windowarea: "80%" }), b(".content_how .how_desc dt").each(function(a) { b(this).boxLoader({ direction: "y", position: "-40%", effect: "fadeIn", duration: "0.7s", windowarea: "100%" }) }), b(".content_how .how_desc dd").each(function(a) { b(this).boxLoader({ direction: "y", position: "-40%", effect: "fadeIn", duration: "0.7s", windowarea: "100%" }) }) }
    var l, m = (d.common, null),
        n = 300;
    return { init: g, resize: j }
}(window, window.jQuery, window._, window.APP, window.Modernizr);