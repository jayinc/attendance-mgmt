! function (t) {
    var f, d, e = "0.4.2",
        p = "hasOwnProperty",
        g = /[\.\/]/,
        o = function () {},
        v = function (t, e) {
            return t - e
        },
        x = {
            n: {}
        },
        y = function (t, e) {
            t = String(t);
            var i, r = d,
                n = Array.prototype.slice.call(arguments, 2),
                s = y.listeners(t),
                o = 0,
                a = [],
                h = {},
                l = [],
                u = f;
            f = t;
            for (var c = d = 0, p = s.length; c < p; c++) "zIndex" in s[c] && (a.push(s[c].zIndex), s[c].zIndex < 0 && (h[s[c].zIndex] = s[c]));
            for (a.sort(v); a[o] < 0;)
                if (i = h[a[o++]], l.push(i.apply(e, n)), d) return d = r, l;
            for (c = 0; c < p; c++)
                if ("zIndex" in (i = s[c]))
                    if (i.zIndex == a[o]) {
                        if (l.push(i.apply(e, n)), d) break;
                        do {
                            if ((i = h[a[++o]]) && l.push(i.apply(e, n)), d) break
                        } while (i)
                    } else h[i.zIndex] = i;
            else if (l.push(i.apply(e, n)), d) break;
            return d = r, f = u, l.length ? l : null
        };
    y._events = x, y.listeners = function (t) {
        var e, i, r, n, s, o, a, h, l = t.split(g),
            u = x,
            c = [u],
            p = [];
        for (n = 0, s = l.length; n < s; n++) {
            for (h = [], o = 0, a = c.length; o < a; o++)
                for (i = [(u = c[o].n)[l[n]], u["*"]], r = 2; r--;)(e = i[r]) && (h.push(e), p = p.concat(e.f || []));
            c = h
        }
        return p
    }, y.on = function (t, e) {
        if (t = String(t), "function" != typeof e) return function () {};
        for (var i = t.split(g), r = x, n = 0, s = i.length; n < s; n++) r = (r = r.n).hasOwnProperty(i[n]) && r[i[n]] || (r[i[n]] = {
            n: {}
        });
        for (r.f = r.f || [], n = 0, s = r.f.length; n < s; n++)
            if (r.f[n] == e) return o;
        return r.f.push(e),
            function (t) {
                +t == +t && (e.zIndex = +t)
            }
    }, y.f = function (t) {
        var e = [].slice.call(arguments, 1);
        return function () {
            y.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, y.stop = function () {
        d = 1
    }, y.nt = function (t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(f) : f
    }, y.nts = function () {
        return f.split(g)
    }, y.off = y.unbind = function (t, e) {
        if (t) {
            var i, r, n, s, o, a, h, l = t.split(g),
                u = [x];
            for (s = 0, o = l.length; s < o; s++)
                for (a = 0; a < u.length; a += n.length - 2) {
                    if (n = [a, 1], i = u[a].n, "*" != l[s]) i[l[s]] && n.push(i[l[s]]);
                    else
                        for (r in i) i[p](r) && n.push(i[r]);
                    u.splice.apply(u, n)
                }
            for (s = 0, o = u.length; s < o; s++)
                for (i = u[s]; i.n;) {
                    if (e) {
                        if (i.f) {
                            for (a = 0, h = i.f.length; a < h; a++)
                                if (i.f[a] == e) {
                                    i.f.splice(a, 1);
                                    break
                                }! i.f.length && delete i.f
                        }
                        for (r in i.n)
                            if (i.n[p](r) && i.n[r].f) {
                                var c = i.n[r].f;
                                for (a = 0, h = c.length; a < h; a++)
                                    if (c[a] == e) {
                                        c.splice(a, 1);
                                        break
                                    }! c.length && delete i.n[r].f
                            }
                    } else
                        for (r in delete i.f, i.n) i.n[p](r) && i.n[r].f && delete i.n[r].f;
                    i = i.n
                }
        } else y._events = x = {
            n: {}
        }
    }, y.once = function (t, e) {
        var i = function () {
            return y.unbind(t, i), e.apply(this, arguments)
        };
        return y.on(t, i)
    }, y.version = e, y.toString = function () {
        return "You are running Eve " + e
    }, "undefined" != typeof module && module.exports ? module.exports = y : "undefined" != typeof define ? define("eve", [], function () {
        return y
    }) : t.eve = y
}(this),
function (e, i) {
    "function" == typeof define && define.amd ? define(["eve"], function (t) {
        return i(e, t)
    }) : i(e, e.eve)
}(this, function (t, z) {
    function Q(t) {
        if (Q.is(t, "function")) return r ? t() : z.on("raphael.DOMload", t);
        if (Q.is(t, A)) return Q._engine.create[b](Q, t.splice(0, 3 + Q.is(t[0], G))).add(t);
        var e = Array.prototype.slice.call(arguments, 0);
        if (Q.is(e[e.length - 1], "function")) {
            var i = e.pop();
            return r ? i.call(Q._engine.create[b](Q, e)) : z.on("raphael.DOMload", function () {
                i.call(Q._engine.create[b](Q, e))
            })
        }
        return Q._engine.create[b](Q, arguments)
    }

    function x(t) {
        if ("function" == typeof t || Object(t) !== t) return t;
        var e = new t.constructor;
        for (var i in t) t[N](i) && (e[i] = x(t[i]));
        return e
    }

    function W(s, o, a) {
        return function t() {
            var e = Array.prototype.slice.call(arguments, 0),
                i = e.join("␀"),
                r = t.cache = t.cache || {},
                n = t.count = t.count || [];
            return r[N](i) ? function (t, e) {
                for (var i = 0, r = t.length; i < r; i++)
                    if (t[i] === e) return t.push(t.splice(i, 1)[0])
            }(n, i) : (1e3 <= n.length && delete r[n.shift()], n.push(i), r[i] = s[b](o, e)), a ? a(r[i]) : r[i]
        }
    }

    function h() {
        return this.hex
    }

    function y(t, e) {
        for (var i = [], r = 0, n = t.length; r < n - 2 * !e; r += 2) {
            var s = [{
                x: +t[r - 2],
                y: +t[r - 1]
            }, {
                x: +t[r],
                y: +t[r + 1]
            }, {
                x: +t[r + 2],
                y: +t[r + 3]
            }, {
                x: +t[r + 4],
                y: +t[r + 5]
            }];
            e ? r ? n - 4 == r ? s[3] = {
                x: +t[0],
                y: +t[1]
            } : n - 2 == r && (s[2] = {
                x: +t[0],
                y: +t[1]
            }, s[3] = {
                x: +t[2],
                y: +t[3]
            }) : s[0] = {
                x: +t[n - 2],
                y: +t[n - 1]
            } : n - 4 == r ? s[3] = s[2] : r || (s[0] = {
                x: +t[r],
                y: +t[r + 1]
            }), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
        }
        return i
    }

    function m(t, e, i, r, n) {
        return t * (t * (-3 * e + 9 * i - 9 * r + 3 * n) + 6 * e - 12 * i + 6 * r) - 3 * e + 3 * i
    }

    function S(t, e, i, r, n, s, o, a, h) {
        null == h && (h = 1);
        for (var l = (h = 1 < h ? 1 : h < 0 ? 0 : h) / 2, u = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], c = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, f = 0; f < 12; f++) {
            var d = l * u[f] + l,
                g = m(d, t, i, n, o),
                v = m(d, e, r, s, a),
                x = g * g + v * v;
            p += c[f] * q.sqrt(x)
        }
        return l * p
    }

    function M(t, e, i, r, n, s, o, a) {
        if (!(B(t, i) < L(n, o) || L(t, i) > B(n, o) || B(e, r) < L(s, a) || L(e, r) > B(s, a))) {
            var h = (t - i) * (s - a) - (e - r) * (n - o);
            if (h) {
                var l = ((t * r - e * i) * (n - o) - (t - i) * (n * a - s * o)) / h,
                    u = ((t * r - e * i) * (s - a) - (e - r) * (n * a - s * o)) / h,
                    c = +l.toFixed(2),
                    p = +u.toFixed(2);
                if (!(c < +L(t, i).toFixed(2) || c > +B(t, i).toFixed(2) || c < +L(n, o).toFixed(2) || c > +B(n, o).toFixed(2) || p < +L(e, r).toFixed(2) || p > +B(e, r).toFixed(2) || p < +L(s, a).toFixed(2) || p > +B(s, a).toFixed(2))) return {
                    x: l,
                    y: u
                }
            }
        }
    }

    function k(t, e, i) {
        var r = Q.bezierBBox(t),
            n = Q.bezierBBox(e);
        if (!Q.isBBoxIntersect(r, n)) return i ? 0 : [];
        for (var s = S.apply(0, t), o = S.apply(0, e), a = B(~~(s / 5), 1), h = B(~~(o / 5), 1), l = [], u = [], c = {}, p = i ? 0 : [], f = 0; f < a + 1; f++) {
            var d = Q.findDotsAtSegment.apply(Q, t.concat(f / a));
            l.push({
                x: d.x,
                y: d.y,
                t: f / a
            })
        }
        for (f = 0; f < h + 1; f++) d = Q.findDotsAtSegment.apply(Q, e.concat(f / h)), u.push({
            x: d.x,
            y: d.y,
            t: f / h
        });
        for (f = 0; f < a; f++)
            for (var g = 0; g < h; g++) {
                var v = l[f],
                    x = l[f + 1],
                    y = u[g],
                    m = u[g + 1],
                    b = V(x.x - v.x) < .001 ? "y" : "x",
                    w = V(m.x - y.x) < .001 ? "y" : "x",
                    _ = M(v.x, v.y, x.x, x.y, y.x, y.y, m.x, m.y);
                if (_) {
                    if (c[_.x.toFixed(4)] == _.y.toFixed(4)) continue;
                    c[_.x.toFixed(4)] = _.y.toFixed(4);
                    var k = v.t + V((_[b] - v[b]) / (x[b] - v[b])) * (x.t - v.t),
                        C = y.t + V((_[w] - y[w]) / (m[w] - y[w])) * (m.t - y.t);
                    0 <= k && k <= 1.001 && 0 <= C && C <= 1.001 && (i ? p++ : p.push({
                        x: _.x,
                        y: _.y,
                        t1: L(k, 1),
                        t2: L(C, 1)
                    }))
                }
            }
        return p
    }

    function n(t, e, i) {
        t = Q._path2curve(t), e = Q._path2curve(e);
        for (var r, n, s, o, a, h, l, u, c, p, f = i ? 0 : [], d = 0, g = t.length; d < g; d++) {
            var v = t[d];
            if ("M" == v[0]) r = a = v[1], n = h = v[2];
            else {
                "C" == v[0] ? (r = (c = [r, n].concat(v.slice(1)))[6], n = c[7]) : (c = [r, n, r, n, a, h, a, h], r = a, n = h);
                for (var x = 0, y = e.length; x < y; x++) {
                    var m = e[x];
                    if ("M" == m[0]) s = l = m[1], o = u = m[2];
                    else {
                        "C" == m[0] ? (s = (p = [s, o].concat(m.slice(1)))[6], o = p[7]) : (p = [s, o, s, o, l, u, l, u], s = l, o = u);
                        var b = k(c, p, i);
                        if (i) f += b;
                        else {
                            for (var w = 0, _ = b.length; w < _; w++) b[w].segment1 = d, b[w].segment2 = x, b[w].bez1 = c, b[w].bez2 = p;
                            f = f.concat(b)
                        }
                    }
                }
            }
        }
        return f
    }

    function I(t, e, i, r, n, s) {
        null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +r, this.e = +n, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function i() {
        return this.x + " " + this.y + " " + this.width + " × " + this.height
    }

    function D(t, e, i, r, n, s) {
        function h(t) {
            return ((c * t + u) * t + l) * t
        }
        var o, l = 3 * e,
            u = 3 * (r - e) - l,
            c = 1 - l - u,
            a = 3 * i,
            p = 3 * (n - i) - a,
            f = 1 - a - p;
        return o = function (t, e) {
            var i, r, n, s, o, a;
            for (n = t, a = 0; a < 8; a++) {
                if (s = h(n) - t, V(s) < e) return n;
                if (V(o = (3 * c * n + 2 * u) * n + l) < 1e-6) break;
                n -= s / o
            }
            if (r = 1, (i = 0) > (n = t)) return i;
            if (r < n) return r;
            for (; i < r;) {
                if (s = h(n), V(s - t) < e) return n;
                s < t ? i = n : r = n, n = (r - i) / 2 + i
            }
            return n
        }(t, 1 / (200 * s)), ((f * o + p) * o + a) * o
    }

    function u(t, e) {
        var i = [],
            r = {};
        if (this.ms = e, this.times = 1, t) {
            for (var n in t) t[N](n) && (r[Z(n)] = t[n], i.push(Z(n)));
            i.sort(lt)
        }
        this.anim = r, this.top = i[i.length - 1], this.percents = i
    }

    function _(t, e, i, r, n, s) {
        i = Z(i);
        var o, a, h, l, u, c, p = t.ms,
            f = {},
            d = {},
            g = {};
        if (r)
            for (x = 0, y = ne.length; x < y; x++) {
                var v = ne[x];
                if (v.el.id == e.id && v.anim == t) {
                    v.percent != i ? (ne.splice(x, 1), h = 1) : a = v, e.attr(v.totalOrigin);
                    break
                }
            } else r = +d;
        for (var x = 0, y = t.percents.length; x < y; x++) {
            if (t.percents[x] == i || t.percents[x] > r * t.top) {
                i = t.percents[x], u = t.percents[x - 1] || 0, p = p / t.top * (i - u), l = t.percents[x + 1], o = t.anim[i];
                break
            }
            r && e.attr(t.anim[t.percents[x]])
        }
        if (o) {
            if (a) a.initstatus = r, a.start = new Date - a.ms * r;
            else {
                for (var m in o)
                    if (o[N](m) && (et[N](m) || e.paper.customAttributes[N](m))) switch (f[m] = e.attr(m), null == f[m] && (f[m] = tt[m]), d[m] = o[m], et[m]) {
                        case G:
                            g[m] = (d[m] - f[m]) / p;
                            break;
                        case "colour":
                            f[m] = Q.getRGB(f[m]);
                            var b = Q.getRGB(d[m]);
                            g[m] = {
                                r: (b.r - f[m].r) / p,
                                g: (b.g - f[m].g) / p,
                                b: (b.b - f[m].b) / p
                            };
                            break;
                        case "path":
                            var w = Et(f[m], d[m]),
                                _ = w[1];
                            for (f[m] = w[0], g[m] = [], x = 0, y = f[m].length; x < y; x++) {
                                g[m][x] = [0];
                                for (var k = 1, C = f[m][x].length; k < C; k++) g[m][x][k] = (_[x][k] - f[m][x][k]) / p
                            }
                            break;
                        case "transform":
                            var S = e._,
                                M = Nt(S[m], d[m]);
                            if (M)
                                for (f[m] = M.from, d[m] = M.to, g[m] = [], g[m].real = !0, x = 0, y = f[m].length; x < y; x++)
                                    for (g[m][x] = [f[m][x][0]], k = 1, C = f[m][x].length; k < C; k++) g[m][x][k] = (d[m][x][k] - f[m][x][k]) / p;
                            else {
                                var B = e.matrix || new I,
                                    L = {
                                        _: {
                                            transform: S.transform
                                        },
                                        getBBox: function () {
                                            return e.getBBox(1)
                                        }
                                    };
                                f[m] = [B.a, B.b, B.c, B.d, B.e, B.f], Dt(L, d[m]), d[m] = L._.transform, g[m] = [(L.matrix.a - B.a) / p, (L.matrix.b - B.b) / p, (L.matrix.c - B.c) / p, (L.matrix.d - B.d) / p, (L.matrix.e - B.e) / p, (L.matrix.f - B.f) / p]
                            }
                            break;
                        case "csv":
                            var F = H(o[m])[X](R),
                                T = H(f[m])[X](R);
                            if ("clip-rect" == m)
                                for (f[m] = T, g[m] = [], x = T.length; x--;) g[m][x] = (F[x] - f[m][x]) / p;
                            d[m] = F;
                            break;
                        default:
                            for (F = [][j](o[m]), T = [][j](f[m]), g[m] = [], x = e.paper.customAttributes[m].length; x--;) g[m][x] = ((F[x] || 0) - (T[x] || 0)) / p
                    }
                var A = o.easing,
                    P = Q.easing_formulas[A];
                if (!P)
                    if ((P = H(A).match(O)) && 5 == P.length) {
                        var E = P;
                        P = function (t) {
                            return D(t, +E[1], +E[2], +E[3], +E[4], p)
                        }
                    } else P = ut;
                if (v = {
                        anim: t,
                        percent: i,
                        timestamp: c = o.start || t.start || +new Date,
                        start: c + (t.del || 0),
                        status: 0,
                        initstatus: r || 0,
                        stop: !1,
                        ms: p,
                        easing: P,
                        from: f,
                        diff: g,
                        to: d,
                        el: e,
                        callback: o.callback,
                        prev: u,
                        next: l,
                        repeat: s || t.times,
                        origin: e.attr(),
                        totalOrigin: n
                    }, ne.push(v), r && !a && !h && (v.stop = !0, v.start = new Date - p * r, 1 == ne.length)) return oe();
                h && (v.start = new Date - v.ms * r), 1 == ne.length && se(oe)
            }
            z("raphael.anim.start." + e.id, e, t)
        }
    }

    function e(t) {
        for (var e = 0; e < ne.length; e++) ne[e].el.paper == t && ne.splice(e--, 1)
    }
    Q.version = "2.1.2", Q.eve = z;
    var r, s, o, a, R = /[, ]+/,
        l = {
            circle: 1,
            rect: 1,
            path: 1,
            ellipse: 1,
            text: 1,
            image: 1
        },
        c = /\{(\d+)\}/g,
        N = "hasOwnProperty",
        d = {
            doc: document,
            win: t
        },
        p = {
            was: Object.prototype[N].call(d.win, "Raphael"),
            is: d.win.Raphael
        },
        f = function () {
            this.ca = this.customAttributes = {}
        },
        b = "apply",
        j = "concat",
        g = "ontouchstart" in d.win || d.win.DocumentTouch && d.doc instanceof DocumentTouch,
        H = String,
        X = "split",
        v = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [X](" "),
        w = {
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        },
        C = H.prototype.toLowerCase,
        q = Math,
        B = q.max,
        L = q.min,
        V = q.abs,
        F = q.pow,
        U = q.PI,
        G = "number",
        T = "string",
        A = "array",
        P = Object.prototype.toString,
        E = (Q._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
        Y = {
            NaN: 1,
            Infinity: 1,
            "-Infinity": 1
        },
        O = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
        $ = q.round,
        Z = parseFloat,
        J = parseInt,
        K = H.prototype.toUpperCase,
        tt = Q._availableAttrs = {
            "arrow-end": "none",
            "arrow-start": "none",
            blur: 0,
            "clip-rect": "0 0 1e9 1e9",
            cursor: "default",
            cx: 0,
            cy: 0,
            fill: "#fff",
            "fill-opacity": 1,
            font: '10px "Arial"',
            "font-family": '"Arial"',
            "font-size": "10",
            "font-style": "normal",
            "font-weight": 400,
            gradient: 0,
            height: 0,
            href: "http://raphaeljs.com/",
            "letter-spacing": 0,
            opacity: 1,
            path: "M0,0",
            r: 0,
            rx: 0,
            ry: 0,
            src: "",
            stroke: "#000",
            "stroke-dasharray": "",
            "stroke-linecap": "butt",
            "stroke-linejoin": "butt",
            "stroke-miterlimit": 0,
            "stroke-opacity": 1,
            "stroke-width": 1,
            target: "_blank",
            "text-anchor": "middle",
            title: "Raphael",
            transform: "",
            width: 0,
            x: 0,
            y: 0
        },
        et = Q._availableAnimAttrs = {
            blur: G,
            "clip-rect": "csv",
            cx: G,
            cy: G,
            fill: "colour",
            "fill-opacity": G,
            "font-size": G,
            height: G,
            opacity: G,
            path: "path",
            r: G,
            rx: G,
            ry: G,
            stroke: "colour",
            "stroke-opacity": G,
            "stroke-width": G,
            transform: "transform",
            width: G,
            x: G,
            y: G
        },
        it = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
        rt = {
            hs: 1,
            rg: 1
        },
        nt = /,?([achlmqrstvxz]),?/gi,
        st = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        ot = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
        at = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
        ht = (Q._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
        lt = function (t, e) {
            return Z(t) - Z(e)
        },
        ut = function (t) {
            return t
        },
        ct = Q._rectPath = function (t, e, i, r, n) {
            return n ? [
                ["M", t + n, e],
                ["l", i - 2 * n, 0],
                ["a", n, n, 0, 0, 1, n, n],
                ["l", 0, r - 2 * n],
                ["a", n, n, 0, 0, 1, -n, n],
                ["l", 2 * n - i, 0],
                ["a", n, n, 0, 0, 1, -n, -n],
                ["l", 0, 2 * n - r],
                ["a", n, n, 0, 0, 1, n, -n],
                ["z"]
            ] : [
                ["M", t, e],
                ["l", i, 0],
                ["l", 0, r],
                ["l", -i, 0],
                ["z"]
            ]
        },
        pt = function (t, e, i, r) {
            return null == r && (r = i), [
                ["M", t, e],
                ["m", 0, -r],
                ["a", i, r, 0, 1, 1, 0, 2 * r],
                ["a", i, r, 0, 1, 1, 0, -2 * r],
                ["z"]
            ]
        },
        ft = Q._getPath = {
            path: function (t) {
                return t.attr("path")
            },
            circle: function (t) {
                var e = t.attrs;
                return pt(e.cx, e.cy, e.r)
            },
            ellipse: function (t) {
                var e = t.attrs;
                return pt(e.cx, e.cy, e.rx, e.ry)
            },
            rect: function (t) {
                var e = t.attrs;
                return ct(e.x, e.y, e.width, e.height, e.r)
            },
            image: function (t) {
                var e = t.attrs;
                return ct(e.x, e.y, e.width, e.height)
            },
            text: function (t) {
                var e = t._getBBox();
                return ct(e.x, e.y, e.width, e.height)
            },
            set: function (t) {
                var e = t._getBBox();
                return ct(e.x, e.y, e.width, e.height)
            }
        },
        dt = Q.mapPath = function (t, e) {
            if (!e) return t;
            var i, r, n, s, o, a, h;
            for (n = 0, o = (t = Et(t)).length; n < o; n++)
                for (s = 1, a = (h = t[n]).length; s < a; s += 2) i = e.x(h[s], h[s + 1]), r = e.y(h[s], h[s + 1]), h[s] = i, h[s + 1] = r;
            return t
        };
    if (Q._g = d, "VML" == (Q.type = d.win.SVGAngle || d.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML")) {
        var gt, vt = d.doc.createElement("div");
        if (vt.innerHTML = '<v:shape adj="1"/>', (gt = vt.firstChild).style.behavior = "url(#default#VML)", !gt || "object" != typeof gt.adj) return Q.type = "";
        vt = null
    }
    Q.svg = !(Q.vml = "VML" == Q.type), Q._Paper = f, Q.fn = s = f.prototype = Q.prototype, Q._id = 0, Q._oid = 0, Q.is = function (t, e) {
        return "finite" == (e = C.call(e)) ? !Y[N](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || P.call(t).slice(8, -1).toLowerCase() == e
    }, Q.angle = function (t, e, i, r, n, s) {
        if (null == n) {
            var o = t - i,
                a = e - r;
            return o || a ? (180 + 180 * q.atan2(-a, -o) / U + 360) % 360 : 0
        }
        return Q.angle(t, e, n, s) - Q.angle(i, r, n, s)
    }, Q.rad = function (t) {
        return t % 360 * U / 180
    }, Q.deg = function (t) {
        return 180 * t / U % 360
    }, Q.snapTo = function (t, e, i) {
        if (i = Q.is(i, "finite") ? i : 10, Q.is(t, A)) {
            for (var r = t.length; r--;)
                if (V(t[r] - e) <= i) return t[r]
        } else {
            var n = e % (t = +t);
            if (n < i) return e - n;
            if (t - i < n) return e - n + t
        }
        return e
    }, Q.createUUID = (o = /[xy]/g, a = function (t) {
        var e = 0 | 16 * q.random();
        return ("x" == t ? e : 8 | 3 & e).toString(16)
    }, function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(o, a).toUpperCase()
    }), Q.setWindow = function (t) {
        z("raphael.setWindow", Q, d.win, t), d.win = t, d.doc = d.win.document, Q._engine.initWin && Q._engine.initWin(d.win)
    };
    var xt = function (t) {
            if (Q.vml) {
                var i, r = /^\s+|\s+$/g;
                try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), i = e.body
                } catch (t) {
                    i = createPopup().document.body
                }
                var n = i.createTextRange();
                xt = W(function (t) {
                    try {
                        i.style.color = H(t).replace(r, "");
                        var e = n.queryCommandValue("ForeColor");
                        return "#" + ("000000" + (e = (255 & e) << 16 | 65280 & e | (16711680 & e) >>> 16).toString(16)).slice(-6)
                    } catch (t) {
                        return "none"
                    }
                })
            } else {
                var s = d.doc.createElement("i");
                s.title = "Raphaël Colour Picker", s.style.display = "none", d.doc.body.appendChild(s), xt = W(function (t) {
                    return s.style.color = t, d.doc.defaultView.getComputedStyle(s, "").getPropertyValue("color")
                })
            }
            return xt(t)
        },
        yt = function () {
            return "hsb(" + [this.h, this.s, this.b] + ")"
        },
        mt = function () {
            return "hsl(" + [this.h, this.s, this.l] + ")"
        },
        bt = function () {
            return this.hex
        },
        wt = function (t, e, i) {
            if (null == e && Q.is(t, "object") && "r" in t && "g" in t && "b" in t && (i = t.b, e = t.g, t = t.r), null == e && Q.is(t, T)) {
                var r = Q.getRGB(t);
                t = r.r, e = r.g, i = r.b
            }
            return (1 < t || 1 < e || 1 < i) && (t /= 255, e /= 255, i /= 255), [t, e, i]
        },
        _t = function (t, e, i, r) {
            var n = {
                r: t *= 255,
                g: e *= 255,
                b: i *= 255,
                hex: Q.rgb(t, e, i),
                toString: bt
            };
            return Q.is(r, "finite") && (n.opacity = r), n
        };
    Q.color = function (t) {
        var e;
        return Q.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = Q.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : Q.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = Q.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (Q.is(t, "string") && (t = Q.getRGB(t)), Q.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = Q.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = Q.rgb2hsb(t), t.v = e.b) : (t = {
            hex: "none"
        }).r = t.g = t.b = t.h = t.s = t.v = t.l = -1), t.toString = bt, t
    }, Q.hsb2rgb = function (t, e, i, r) {
        var n, s, o, a, h;
        return this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, r = (t = t.h).o), a = (h = i * e) * (1 - V((t = (t *= 360) % 360 / 60) % 2 - 1)), n = s = o = i - h, _t(n += [h, a, 0, 0, a, h][t = ~~t], s += [a, h, h, a, 0, 0][t], o += [0, 0, a, h, h, a][t], r)
    }, Q.hsl2rgb = function (t, e, i, r) {
        var n, s, o, a, h;
        return this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (1 < t || 1 < e || 1 < i) && (t /= 360, e /= 100, i /= 100), a = (h = 2 * e * (i < .5 ? i : 1 - i)) * (1 - V((t = (t *= 360) % 360 / 60) % 2 - 1)), n = s = o = i - h / 2, _t(n += [h, a, 0, 0, a, h][t = ~~t], s += [a, h, h, a, 0, 0][t], o += [0, 0, a, h, h, a][t], r)
    }, Q.rgb2hsb = function (t, e, i) {
        var r, n;
        return t = (i = wt(t, e, i))[0], e = i[1], i = i[2], {
            h: ((0 == (n = (r = B(t, e, i)) - L(t, e, i)) ? null : r == t ? (e - i) / n : r == e ? (i - t) / n + 2 : (t - e) / n + 4) + 360) % 6 * 60 / 360,
            s: 0 == n ? 0 : n / r,
            b: r,
            toString: yt
        }
    }, Q.rgb2hsl = function (t, e, i) {
        var r, n, s, o;
        return t = (i = wt(t, e, i))[0], e = i[1], i = i[2], r = ((n = B(t, e, i)) + (s = L(t, e, i))) / 2, {
            h: ((0 == (o = n - s) ? null : n == t ? (e - i) / o : n == e ? (i - t) / o + 2 : (t - e) / o + 4) + 360) % 6 * 60 / 360,
            s: 0 == o ? 0 : r < .5 ? o / (2 * r) : o / (2 - 2 * r),
            l: r,
            toString: mt
        }
    }, Q._path2string = function () {
        return this.join(",").replace(nt, "$1")
    }, Q._preload = function (t, e) {
        var i = d.doc.createElement("img");
        i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function () {
            e.call(this), this.onload = null, d.doc.body.removeChild(this)
        }, i.onerror = function () {
            d.doc.body.removeChild(this)
        }, d.doc.body.appendChild(i), i.src = t
    }, Q.getRGB = W(function (t) {
        if (!t || (t = H(t)).indexOf("-") + 1) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: h
        };
        if ("none" == t) return {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            toString: h
        };
        !rt[N](t.toLowerCase().substring(0, 2)) && "#" != t.charAt() && (t = xt(t));
        var e, i, r, n, s, o, a = t.match(E);
        return a ? (a[2] && (r = J(a[2].substring(5), 16), i = J(a[2].substring(3, 5), 16), e = J(a[2].substring(1, 3), 16)), a[3] && (r = J((s = a[3].charAt(3)) + s, 16), i = J((s = a[3].charAt(2)) + s, 16), e = J((s = a[3].charAt(1)) + s, 16)), a[4] && (o = a[4][X](it), e = Z(o[0]), "%" == o[0].slice(-1) && (e *= 2.55), i = Z(o[1]), "%" == o[1].slice(-1) && (i *= 2.55), r = Z(o[2]), "%" == o[2].slice(-1) && (r *= 2.55), "rgba" == a[1].toLowerCase().slice(0, 4) && (n = Z(o[3])), o[3] && "%" == o[3].slice(-1) && (n /= 100)), a[5] ? (o = a[5][X](it), e = Z(o[0]), "%" == o[0].slice(-1) && (e *= 2.55), i = Z(o[1]), "%" == o[1].slice(-1) && (i *= 2.55), r = Z(o[2]), "%" == o[2].slice(-1) && (r *= 2.55), ("deg" == o[0].slice(-3) || "°" == o[0].slice(-1)) && (e /= 360), "hsba" == a[1].toLowerCase().slice(0, 4) && (n = Z(o[3])), o[3] && "%" == o[3].slice(-1) && (n /= 100), Q.hsb2rgb(e, i, r, n)) : a[6] ? (o = a[6][X](it), e = Z(o[0]), "%" == o[0].slice(-1) && (e *= 2.55), i = Z(o[1]), "%" == o[1].slice(-1) && (i *= 2.55), r = Z(o[2]), "%" == o[2].slice(-1) && (r *= 2.55), ("deg" == o[0].slice(-3) || "°" == o[0].slice(-1)) && (e /= 360), "hsla" == a[1].toLowerCase().slice(0, 4) && (n = Z(o[3])), o[3] && "%" == o[3].slice(-1) && (n /= 100), Q.hsl2rgb(e, i, r, n)) : ((a = {
            r: e,
            g: i,
            b: r,
            toString: h
        }).hex = "#" + (16777216 | r | i << 8 | e << 16).toString(16).slice(1), Q.is(n, "finite") && (a.opacity = n), a)) : {
            r: -1,
            g: -1,
            b: -1,
            hex: "none",
            error: 1,
            toString: h
        }
    }, Q), Q.hsb = W(function (t, e, i) {
        return Q.hsb2rgb(t, e, i).hex
    }), Q.hsl = W(function (t, e, i) {
        return Q.hsl2rgb(t, e, i).hex
    }), Q.rgb = W(function (t, e, i) {
        return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
    }), (Q.getColor = function (t) {
        var e = this.getColor.start = this.getColor.start || {
                h: 0,
                s: 1,
                b: t || .75
            },
            i = this.hsb2rgb(e.h, e.s, e.b);
        return e.h += .075, 1 < e.h && (e.h = 0, e.s -= .2, e.s <= 0 && (this.getColor.start = {
            h: 0,
            s: 1,
            b: e.b
        })), i.hex
    }).reset = function () {
        delete this.start
    }, Q.parsePathString = function (t) {
        if (!t) return null;
        var e = kt(t);
        if (e.arr) return St(e.arr);
        var s = {
                a: 7,
                c: 6,
                h: 1,
                l: 2,
                m: 2,
                r: 4,
                q: 4,
                s: 4,
                t: 2,
                v: 1,
                z: 0
            },
            o = [];
        return Q.is(t, A) && Q.is(t[0], A) && (o = St(t)), o.length || H(t).replace(st, function (t, e, i) {
            var r = [],
                n = e.toLowerCase();
            if (i.replace(at, function (t, e) {
                    e && r.push(+e)
                }), "m" == n && 2 < r.length && (o.push([e][j](r.splice(0, 2))), n = "l", e = "m" == e ? "l" : "L"), "r" == n) o.push([e][j](r));
            else
                for (; r.length >= s[n] && (o.push([e][j](r.splice(0, s[n]))), s[n]););
        }), o.toString = Q._path2string, e.arr = St(o), o
    }, Q.parseTransformString = W(function (t) {
        if (!t) return null;
        var n = [];
        return Q.is(t, A) && Q.is(t[0], A) && (n = St(t)), n.length || H(t).replace(ot, function (t, e, i) {
            var r = [];
            C.call(e), i.replace(at, function (t, e) {
                e && r.push(+e)
            }), n.push([e][j](r))
        }), n.toString = Q._path2string, n
    });
    var kt = function (e) {
        var i = kt.ps = kt.ps || {};
        return i[e] ? i[e].sleep = 100 : i[e] = {
            sleep: 100
        }, setTimeout(function () {
            for (var t in i) i[N](t) && t != e && (i[t].sleep--, !i[t].sleep && delete i[t])
        }), i[e]
    };
    Q.findDotsAtSegment = function (t, e, i, r, n, s, o, a, h) {
        var l = 1 - h,
            u = F(l, 3),
            c = F(l, 2),
            p = h * h,
            f = p * h,
            d = u * t + 3 * c * h * i + 3 * l * h * h * n + f * o,
            g = u * e + 3 * c * h * r + 3 * l * h * h * s + f * a,
            v = t + 2 * h * (i - t) + p * (n - 2 * i + t),
            x = e + 2 * h * (r - e) + p * (s - 2 * r + e),
            y = i + 2 * h * (n - i) + p * (o - 2 * n + i),
            m = r + 2 * h * (s - r) + p * (a - 2 * s + r),
            b = l * t + h * i,
            w = l * e + h * r,
            _ = l * n + h * o,
            k = l * s + h * a,
            C = 90 - 180 * q.atan2(v - y, x - m) / U;
        return (y < v || x < m) && (C += 180), {
            x: d,
            y: g,
            m: {
                x: v,
                y: x
            },
            n: {
                x: y,
                y: m
            },
            start: {
                x: b,
                y: w
            },
            end: {
                x: _,
                y: k
            },
            alpha: C
        }
    }, Q.bezierBBox = function (t, e, i, r, n, s, o, a) {
        Q.is(t, "array") || (t = [t, e, i, r, n, s, o, a]);
        var h = Pt.apply(null, t);
        return {
            x: h.min.x,
            y: h.min.y,
            x2: h.max.x,
            y2: h.max.y,
            width: h.max.x - h.min.x,
            height: h.max.y - h.min.y
        }
    }, Q.isPointInsideBBox = function (t, e, i) {
        return e >= t.x && e <= t.x2 && i >= t.y && i <= t.y2
    }, Q.isBBoxIntersect = function (t, e) {
        var i = Q.isPointInsideBBox;
        return i(e, t.x, t.y) || i(e, t.x2, t.y) || i(e, t.x, t.y2) || i(e, t.x2, t.y2) || i(t, e.x, e.y) || i(t, e.x2, e.y) || i(t, e.x, e.y2) || i(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
    }, Q.pathIntersection = function (t, e) {
        return n(t, e)
    }, Q.pathIntersectionNumber = function (t, e) {
        return n(t, e, 1)
    }, Q.isPointInsidePath = function (t, e, i) {
        var r = Q.pathBBox(t);
        return Q.isPointInsideBBox(r, e, i) && 1 == n(t, [
            ["M", e, i],
            ["H", r.x2 + 10]
        ], 1) % 2
    }, Q._removedFactory = function (t) {
        return function () {
            z("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
        }
    };
    var Ct = Q.pathBBox = function (t) {
            var e = kt(t);
            if (e.bbox) return x(e.bbox);
            if (!t) return {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
                x2: 0,
                y2: 0
            };
            for (var i, r = 0, n = 0, s = [], o = [], a = 0, h = (t = Et(t)).length; a < h; a++)
                if ("M" == (i = t[a])[0]) r = i[1], n = i[2], s.push(r), o.push(n);
                else {
                    var l = Pt(r, n, i[1], i[2], i[3], i[4], i[5], i[6]);
                    s = s[j](l.min.x, l.max.x), o = o[j](l.min.y, l.max.y), r = i[5], n = i[6]
                } var u = L[b](0, s),
                c = L[b](0, o),
                p = B[b](0, s),
                f = B[b](0, o),
                d = p - u,
                g = f - c,
                v = {
                    x: u,
                    y: c,
                    x2: p,
                    y2: f,
                    width: d,
                    height: g,
                    cx: u + d / 2,
                    cy: c + g / 2
                };
            return e.bbox = x(v), v
        },
        St = function (t) {
            var e = x(t);
            return e.toString = Q._path2string, e
        },
        Mt = Q._pathToRelative = function (t) {
            var e = kt(t);
            if (e.rel) return St(e.rel);
            Q.is(t, A) && Q.is(t && t[0], A) || (t = Q.parsePathString(t));
            var i = [],
                r = 0,
                n = 0,
                s = 0,
                o = 0,
                a = 0;
            "M" == t[0][0] && (s = r = t[0][1], o = n = t[0][2], a++, i.push(["M", r, n]));
            for (var h = a, l = t.length; h < l; h++) {
                var u = i[h] = [],
                    c = t[h];
                if (c[0] != C.call(c[0])) switch (u[0] = C.call(c[0]), u[0]) {
                    case "a":
                        u[1] = c[1], u[2] = c[2], u[3] = c[3], u[4] = c[4], u[5] = c[5], u[6] = +(c[6] - r).toFixed(3), u[7] = +(c[7] - n).toFixed(3);
                        break;
                    case "v":
                        u[1] = +(c[1] - n).toFixed(3);
                        break;
                    case "m":
                        s = c[1], o = c[2];
                    default:
                        for (var p = 1, f = c.length; p < f; p++) u[p] = +(c[p] - (p % 2 ? r : n)).toFixed(3)
                } else {
                    u = i[h] = [], "m" == c[0] && (s = c[1] + r, o = c[2] + n);
                    for (var d = 0, g = c.length; d < g; d++) i[h][d] = c[d]
                }
                var v = i[h].length;
                switch (i[h][0]) {
                    case "z":
                        r = s, n = o;
                        break;
                    case "h":
                        r += +i[h][v - 1];
                        break;
                    case "v":
                        n += +i[h][v - 1];
                        break;
                    default:
                        r += +i[h][v - 2], n += +i[h][v - 1]
                }
            }
            return i.toString = Q._path2string, e.rel = St(i), i
        },
        Bt = Q._pathToAbsolute = function (t) {
            var e = kt(t);
            if (e.abs) return St(e.abs);
            if (Q.is(t, A) && Q.is(t && t[0], A) || (t = Q.parsePathString(t)), !t || !t.length) return [
                ["M", 0, 0]
            ];
            var i = [],
                r = 0,
                n = 0,
                s = 0,
                o = 0,
                a = 0;
            "M" == t[0][0] && (s = r = +t[0][1], o = n = +t[0][2], a++, i[0] = ["M", r, n]);
            for (var h, l, u = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), c = a, p = t.length; c < p; c++) {
                if (i.push(h = []), (l = t[c])[0] != K.call(l[0])) switch (h[0] = K.call(l[0]), h[0]) {
                        case "A":
                            h[1] = l[1], h[2] = l[2], h[3] = l[3], h[4] = l[4], h[5] = l[5], h[6] = +(l[6] + r), h[7] = +(l[7] + n);
                            break;
                        case "V":
                            h[1] = +l[1] + n;
                            break;
                        case "H":
                            h[1] = +l[1] + r;
                            break;
                        case "R":
                            for (var f = [r, n][j](l.slice(1)), d = 2, g = f.length; d < g; d++) f[d] = +f[d] + r, f[++d] = +f[d] + n;
                            i.pop(), i = i[j](y(f, u));
                            break;
                        case "M":
                            s = +l[1] + r, o = +l[2] + n;
                        default:
                            for (d = 1, g = l.length; d < g; d++) h[d] = +l[d] + (d % 2 ? r : n)
                    } else if ("R" == l[0]) f = [r, n][j](l.slice(1)), i.pop(), i = i[j](y(f, u)), h = ["R"][j](l.slice(-2));
                    else
                        for (var v = 0, x = l.length; v < x; v++) h[v] = l[v];
                switch (h[0]) {
                    case "Z":
                        r = s, n = o;
                        break;
                    case "H":
                        r = h[1];
                        break;
                    case "V":
                        n = h[1];
                        break;
                    case "M":
                        s = h[h.length - 2], o = h[h.length - 1];
                    default:
                        r = h[h.length - 2], n = h[h.length - 1]
                }
            }
            return i.toString = Q._path2string, e.abs = St(i), i
        },
        Lt = function (t, e, i, r) {
            return [t, e, i, r, i, r]
        },
        Ft = function (t, e, i, r, n, s) {
            return [1 / 3 * t + 2 / 3 * i, 1 / 3 * e + 2 / 3 * r, 1 / 3 * n + 2 / 3 * i, 1 / 3 * s + 2 / 3 * r, n, s]
        },
        Tt = function (t, e, i, r, n, s, o, a, h, l) {
            var u, c = 120 * U / 180,
                p = U / 180 * (+n || 0),
                f = [],
                d = W(function (t, e, i) {
                    return {
                        x: t * q.cos(i) - e * q.sin(i),
                        y: t * q.sin(i) + e * q.cos(i)
                    }
                });
            if (l) k = l[0], C = l[1], w = l[2], _ = l[3];
            else {
                t = (u = d(t, e, -p)).x, e = u.y, a = (u = d(a, h, -p)).x, h = u.y;
                var g = (q.cos(U / 180 * n), q.sin(U / 180 * n), (t - a) / 2),
                    v = (e - h) / 2,
                    x = g * g / (i * i) + v * v / (r * r);
                1 < x && (i *= x = q.sqrt(x), r *= x);
                var y = i * i,
                    m = r * r,
                    b = (s == o ? -1 : 1) * q.sqrt(V((y * m - y * v * v - m * g * g) / (y * v * v + m * g * g))),
                    w = b * i * v / r + (t + a) / 2,
                    _ = b * -r * g / i + (e + h) / 2,
                    k = q.asin(((e - _) / r).toFixed(9)),
                    C = q.asin(((h - _) / r).toFixed(9));
                (k = t < w ? U - k : k) < 0 && (k = 2 * U + k), (C = a < w ? U - C : C) < 0 && (C = 2 * U + C), o && C < k && (k -= 2 * U), !o && k < C && (C -= 2 * U)
            }
            var S = C - k;
            if (V(S) > c) {
                var M = C,
                    B = a,
                    L = h;
                C = k + c * (o && k < C ? 1 : -1), a = w + i * q.cos(C), h = _ + r * q.sin(C), f = Tt(a, h, i, r, n, 0, o, B, L, [C, M, w, _])
            }
            S = C - k;
            var F = q.cos(k),
                T = q.sin(k),
                A = q.cos(C),
                P = q.sin(C),
                E = q.tan(S / 4),
                z = 4 / 3 * i * E,
                I = 4 / 3 * r * E,
                D = [t, e],
                R = [t + z * T, e - I * F],
                N = [a + z * P, h - I * A],
                H = [a, h];
            if (R[0] = 2 * D[0] - R[0], R[1] = 2 * D[1] - R[1], l) return [R, N, H][j](f);
            for (var G = [], Y = 0, O = (f = [R, N, H][j](f).join()[X](",")).length; Y < O; Y++) G[Y] = Y % 2 ? d(f[Y - 1], f[Y], p).y : d(f[Y], f[Y + 1], p).x;
            return G
        },
        At = function (t, e, i, r, n, s, o, a, h) {
            var l = 1 - h;
            return {
                x: F(l, 3) * t + 3 * F(l, 2) * h * i + 3 * l * h * h * n + F(h, 3) * o,
                y: F(l, 3) * e + 3 * F(l, 2) * h * r + 3 * l * h * h * s + F(h, 3) * a
            }
        },
        Pt = W(function (t, e, i, r, n, s, o, a) {
            var h, l = n - 2 * i + t - (o - 2 * n + i),
                u = 2 * (i - t) - 2 * (n - i),
                c = t - i,
                p = (-u + q.sqrt(u * u - 4 * l * c)) / 2 / l,
                f = (-u - q.sqrt(u * u - 4 * l * c)) / 2 / l,
                d = [e, a],
                g = [t, o];
            return "1e12" < V(p) && (p = .5), "1e12" < V(f) && (f = .5), 0 < p && p < 1 && (h = At(t, e, i, r, n, s, o, a, p), g.push(h.x), d.push(h.y)), 0 < f && f < 1 && (h = At(t, e, i, r, n, s, o, a, f), g.push(h.x), d.push(h.y)), l = s - 2 * r + e - (a - 2 * s + r), c = e - r, p = (-(u = 2 * (r - e) - 2 * (s - r)) + q.sqrt(u * u - 4 * l * c)) / 2 / l, f = (-u - q.sqrt(u * u - 4 * l * c)) / 2 / l, "1e12" < V(p) && (p = .5), "1e12" < V(f) && (f = .5), 0 < p && p < 1 && (h = At(t, e, i, r, n, s, o, a, p), g.push(h.x), d.push(h.y)), 0 < f && f < 1 && (h = At(t, e, i, r, n, s, o, a, f), g.push(h.x), d.push(h.y)), {
                min: {
                    x: L[b](0, g),
                    y: L[b](0, d)
                },
                max: {
                    x: B[b](0, g),
                    y: B[b](0, d)
                }
            }
        }),
        Et = Q._path2curve = W(function (t, e) {
            var i = !e && kt(t);
            if (!e && i.curve) return St(i.curve);
            for (var s = Bt(t), o = e && Bt(e), r = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, n = {
                    x: 0,
                    y: 0,
                    bx: 0,
                    by: 0,
                    X: 0,
                    Y: 0,
                    qx: null,
                    qy: null
                }, a = function (t, e, i) {
                    var r, n;
                    if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                    switch (!(t[0] in {
                        T: 1,
                        Q: 1
                    }) && (e.qx = e.qy = null), t[0]) {
                        case "M":
                            e.X = t[1], e.Y = t[2];
                            break;
                        case "A":
                            t = ["C"][j](Tt[b](0, [e.x, e.y][j](t.slice(1))));
                            break;
                        case "S":
                            "C" == i || "S" == i ? (r = 2 * e.x - e.bx, n = 2 * e.y - e.by) : (r = e.x, n = e.y), t = ["C", r, n][j](t.slice(1));
                            break;
                        case "T":
                            "Q" == i || "T" == i ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"][j](Ft(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                            break;
                        case "Q":
                            e.qx = t[1], e.qy = t[2], t = ["C"][j](Ft(e.x, e.y, t[1], t[2], t[3], t[4]));
                            break;
                        case "L":
                            t = ["C"][j](Lt(e.x, e.y, t[1], t[2]));
                            break;
                        case "H":
                            t = ["C"][j](Lt(e.x, e.y, t[1], e.y));
                            break;
                        case "V":
                            t = ["C"][j](Lt(e.x, e.y, e.x, t[1]));
                            break;
                        case "Z":
                            t = ["C"][j](Lt(e.x, e.y, e.X, e.Y))
                    }
                    return t
                }, h = function (t, e) {
                    if (7 < t[e].length) {
                        t[e].shift();
                        for (var i = t[e]; i.length;) t.splice(e++, 0, ["C"][j](i.splice(0, 6)));
                        t.splice(e, 1), c = B(s.length, o && o.length || 0)
                    }
                }, l = function (t, e, i, r, n) {
                    t && e && "M" == t[n][0] && "M" != e[n][0] && (e.splice(n, 0, ["M", r.x, r.y]), i.bx = 0, i.by = 0, i.x = t[n][1], i.y = t[n][2], c = B(s.length, o && o.length || 0))
                }, u = 0, c = B(s.length, o && o.length || 0); u < c; u++) {
                s[u] = a(s[u], r), h(s, u), o && (o[u] = a(o[u], n)), o && h(o, u), l(s, o, r, n, u), l(o, s, n, r, u);
                var p = s[u],
                    f = o && o[u],
                    d = p.length,
                    g = o && f.length;
                r.x = p[d - 2], r.y = p[d - 1], r.bx = Z(p[d - 4]) || r.x, r.by = Z(p[d - 3]) || r.y, n.bx = o && (Z(f[g - 4]) || n.x), n.by = o && (Z(f[g - 3]) || n.y), n.x = o && f[g - 2], n.y = o && f[g - 1]
            }
            return o || (i.curve = St(s)), o ? [s, o] : s
        }, null, St),
        zt = (Q._parseDots = W(function (t) {
            for (var e = [], i = 0, r = t.length; i < r; i++) {
                var n = {},
                    s = t[i].match(/^([^:]*):?([\d\.]*)/);
                if (n.color = Q.getRGB(s[1]), n.color.error) return null;
                n.color = n.color.hex, s[2] && (n.offset = s[2] + "%"), e.push(n)
            }
            for (i = 1, r = e.length - 1; i < r; i++)
                if (!e[i].offset) {
                    for (var o = Z(e[i - 1].offset || 0), a = 0, h = i + 1; h < r; h++)
                        if (e[h].offset) {
                            a = e[h].offset;
                            break
                        } a || (a = 100, h = r);
                    for (var l = ((a = Z(a)) - o) / (h - i + 1); i < h; i++) o += l, e[i].offset = o + "%"
                } return e
        }), Q._tear = function (t, e) {
            t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
        }),
        It = (Q._tofront = function (t, e) {
            e.top !== t && (zt(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
        }, Q._toback = function (t, e) {
            e.bottom !== t && (zt(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
        }, Q._insertafter = function (t, e, i) {
            zt(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, (t.prev = e).next = t
        }, Q._insertbefore = function (t, e, i) {
            zt(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, (e.prev = t).next = e
        }, Q.toMatrix = function (t, e) {
            var i = Ct(t),
                r = {
                    _: {
                        transform: ""
                    },
                    getBBox: function () {
                        return i
                    }
                };
            return Dt(r, e), r.matrix
        }),
        Dt = (Q.transformPath = function (t, e) {
            return dt(t, It(t, e))
        }, Q._extractTransform = function (t, e) {
            if (null == e) return t._.transform;
            e = H(e).replace(/\.{3}|\u2026/g, t._.transform || "");
            var i, r, n = Q.parseTransformString(e),
                s = 0,
                o = 1,
                a = 1,
                h = t._,
                l = new I;
            if (h.transform = n || [], n)
                for (var u = 0, c = n.length; u < c; u++) {
                    var p, f, d, g, v, x = n[u],
                        y = x.length,
                        m = H(x[0]).toLowerCase(),
                        b = x[0] != m,
                        w = b ? l.invert() : 0;
                    "t" == m && 3 == y ? b ? (p = w.x(0, 0), f = w.y(0, 0), d = w.x(x[1], x[2]), g = w.y(x[1], x[2]), l.translate(d - p, g - f)) : l.translate(x[1], x[2]) : "r" == m ? 2 == y ? (v = v || t.getBBox(1), l.rotate(x[1], v.x + v.width / 2, v.y + v.height / 2), s += x[1]) : 4 == y && (b ? (d = w.x(x[2], x[3]), g = w.y(x[2], x[3]), l.rotate(x[1], d, g)) : l.rotate(x[1], x[2], x[3]), s += x[1]) : "s" == m ? 2 == y || 3 == y ? (v = v || t.getBBox(1), l.scale(x[1], x[y - 1], v.x + v.width / 2, v.y + v.height / 2), o *= x[1], a *= x[y - 1]) : 5 == y && (b ? (d = w.x(x[3], x[4]), g = w.y(x[3], x[4]), l.scale(x[1], x[2], d, g)) : l.scale(x[1], x[2], x[3], x[4]), o *= x[1], a *= x[2]) : "m" == m && 7 == y && l.add(x[1], x[2], x[3], x[4], x[5], x[6]), h.dirtyT = 1, t.matrix = l
                }
            t.matrix = l, h.sx = o, h.sy = a, h.deg = s, h.dx = i = l.e, h.dy = r = l.f, 1 == o && 1 == a && !s && h.bbox ? (h.bbox.x += +i, h.bbox.y += +r) : h.dirtyT = 1
        }),
        Rt = function (t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case "t":
                    return [e, 0, 0];
                case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case "s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        },
        Nt = Q._equaliseTransform = function (t, e) {
            e = H(e).replace(/\.{3}|\u2026/g, t), t = Q.parseTransformString(t) || [], e = Q.parseTransformString(e) || [];
            for (var i, r, n, s, o = B(t.length, e.length), a = [], h = [], l = 0; l < o; l++) {
                if (n = t[l] || Rt(e[l]), s = e[l] || Rt(n), n[0] != s[0] || "r" == n[0].toLowerCase() && (n[2] != s[2] || n[3] != s[3]) || "s" == n[0].toLowerCase() && (n[3] != s[3] || n[4] != s[4])) return;
                for (a[l] = [], h[l] = [], i = 0, r = B(n.length, s.length); i < r; i++) i in n && (a[l][i] = n[i]), i in s && (h[l][i] = s[i])
            }
            return {
                from: a,
                to: h
            }
        };
    Q._getContainer = function (t, e, i, r) {
            var n;
            return null != (n = null != r || Q.is(t, "object") ? t : d.doc.getElementById(t)) ? n.tagName ? null == e ? {
                container: n,
                width: n.style.pixelWidth || n.offsetWidth,
                height: n.style.pixelHeight || n.offsetHeight
            } : {
                container: n,
                width: e,
                height: i
            } : {
                container: 1,
                x: t,
                y: e,
                width: i,
                height: r
            } : void 0
        }, Q.pathToRelative = Mt, Q._engine = {}, Q.path2curve = Et, Q.matrix = function (t, e, i, r, n, s) {
            return new I(t, e, i, r, n, s)
        },
        function (t) {
            function n(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function s(t) {
                var e = q.sqrt(n(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }
            t.add = function (t, e, i, r, n, s) {
                var o, a, h, l, u = [
                        [],
                        [],
                        []
                    ],
                    c = [
                        [this.a, this.c, this.e],
                        [this.b, this.d, this.f],
                        [0, 0, 1]
                    ],
                    p = [
                        [t, i, n],
                        [e, r, s],
                        [0, 0, 1]
                    ];
                for (t && t instanceof I && (p = [
                        [t.a, t.c, t.e],
                        [t.b, t.d, t.f],
                        [0, 0, 1]
                    ]), o = 0; o < 3; o++)
                    for (a = 0; a < 3; a++) {
                        for (h = l = 0; h < 3; h++) l += c[o][h] * p[h][a];
                        u[o][a] = l
                    }
                this.a = u[0][0], this.b = u[1][0], this.c = u[0][1], this.d = u[1][1], this.e = u[0][2], this.f = u[1][2]
            }, t.invert = function () {
                var t = this,
                    e = t.a * t.d - t.b * t.c;
                return new I(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
            }, t.clone = function () {
                return new I(this.a, this.b, this.c, this.d, this.e, this.f)
            }, t.translate = function (t, e) {
                this.add(1, 0, 0, 1, t, e)
            }, t.scale = function (t, e, i, r) {
                null == e && (e = t), (i || r) && this.add(1, 0, 0, 1, i, r), this.add(t, 0, 0, e, 0, 0), (i || r) && this.add(1, 0, 0, 1, -i, -r)
            }, t.rotate = function (t, e, i) {
                t = Q.rad(t), e = e || 0, i = i || 0;
                var r = +q.cos(t).toFixed(9),
                    n = +q.sin(t).toFixed(9);
                this.add(r, n, -n, r, e, i), this.add(1, 0, 0, 1, -e, -i)
            }, t.x = function (t, e) {
                return t * this.a + e * this.c + this.e
            }, t.y = function (t, e) {
                return t * this.b + e * this.d + this.f
            }, t.get = function (t) {
                return +this[H.fromCharCode(97 + t)].toFixed(4)
            }, t.toString = function () {
                return Q.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
            }, t.toFilter = function () {
                return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
            }, t.offset = function () {
                return [this.e.toFixed(4), this.f.toFixed(4)]
            }, t.split = function () {
                var t = {};
                t.dx = this.e, t.dy = this.f;
                var e = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                t.scalex = q.sqrt(n(e[0])), s(e[0]), t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1], e[1] = [e[1][0] - e[0][0] * t.shear, e[1][1] - e[0][1] * t.shear], t.scaley = q.sqrt(n(e[1])), s(e[1]), t.shear /= t.scaley;
                var i = -e[0][1],
                    r = e[1][1];
                return r < 0 ? (t.rotate = Q.deg(q.acos(r)), i < 0 && (t.rotate = 360 - t.rotate)) : t.rotate = Q.deg(q.asin(i)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
            }, t.toTransformString = function (t) {
                var e = t || this[X]();
                return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : "") + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : "") + (e.rotate ? "r" + [e.rotate, 0, 0] : "")) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
            }
        }(I.prototype);
    var Ht = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    s.safari = "Apple Computer, Inc." == navigator.vendor && (Ht && Ht[1] < 4 || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Ht && Ht[1] < 8 ? function () {
        var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
            stroke: "none"
        });
        setTimeout(function () {
            t.remove()
        })
    } : function () {};
    for (var Gt = function () {
            this.returnValue = !1
        }, Yt = function () {
            return this.originalEvent.preventDefault()
        }, Ot = function () {
            this.cancelBubble = !0
        }, Wt = function () {
            return this.originalEvent.stopPropagation()
        }, jt = function (t) {
            var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                i = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
            return {
                x: t.clientX + i,
                y: t.clientY + e
            }
        }, Xt = d.doc.addEventListener ? function (s, t, o, a) {
            var e = function (t) {
                var e = jt(t);
                return o.call(a, t, e.x, e.y)
            };
            return s.addEventListener(t, e, !1), g && w[t] && s.addEventListener(w[t], function (t) {
                    for (var e = jt(t), i = t, r = 0, n = t.targetTouches && t.targetTouches.length; r < n; r++)
                        if (t.targetTouches[r].target == s) {
                            (t = t.targetTouches[r]).originalEvent = i, t.preventDefault = Yt, t.stopPropagation = Wt;
                            break
                        } return o.call(a, t, e.x, e.y)
                }, !1),
                function () {
                    return s.removeEventListener(t, e, !1), g && w[t] && s.removeEventListener(w[t], e, !1), !0
                }
        } : d.doc.attachEvent ? function (t, e, s, o) {
            var i = function (t) {
                t = t || d.win.event;
                var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    i = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                    r = t.clientX + i,
                    n = t.clientY + e;
                return t.preventDefault = t.preventDefault || Gt, t.stopPropagation = t.stopPropagation || Ot, s.call(o, t, r, n)
            };
            return t.attachEvent("on" + e, i),
                function () {
                    return t.detachEvent("on" + e, i), !0
                }
        } : void 0, qt = [], Vt = function (t) {
            for (var e, i = t.clientX, r = t.clientY, n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop, s = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft, o = qt.length; o--;) {
                if (e = qt[o], g && t.touches) {
                    for (var a, h = t.touches.length; h--;)
                        if ((a = t.touches[h]).identifier == e.el._drag.id) {
                            i = a.clientX, r = a.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                            break
                        }
                } else t.preventDefault();
                var l, u = e.el.node,
                    c = u.nextSibling,
                    p = u.parentNode,
                    f = u.style.display;
                d.win.opera && p.removeChild(u), u.style.display = "none", l = e.el.paper.getElementByPoint(i, r), u.style.display = f, d.win.opera && (c ? p.insertBefore(u, c) : p.appendChild(u)), l && z("raphael.drag.over." + e.el.id, e.el, l), i += s, r += n, z("raphael.drag.move." + e.el.id, e.move_scope || e.el, i - e.el._drag.x, r - e.el._drag.y, i, r, t)
            }
        }, Ut = function (t) {
            Q.unmousemove(Vt).unmouseup(Ut);
            for (var e, i = qt.length; i--;)(e = qt[i]).el._drag = {}, z("raphael.drag.end." + e.el.id, e.end_scope || e.start_scope || e.move_scope || e.el, t);
            qt = []
        }, $t = Q.el = {}, Zt = v.length; Zt--;) ! function (r) {
        Q[r] = $t[r] = function (t, e) {
            return Q.is(t, "function") && (this.events = this.events || [], this.events.push({
                name: r,
                f: t,
                unbind: Xt(this.shape || this.node || d.doc, r, t, e || this)
            })), this
        }, Q["un" + r] = $t["un" + r] = function (t) {
            for (var e = this.events || [], i = e.length; i--;) e[i].name != r || !Q.is(t, "undefined") && e[i].f != t || (e[i].unbind(), e.splice(i, 1), !e.length && delete this.events);
            return this
        }
    }(v[Zt]);
    $t.data = function (t, e) {
        var i = ht[this.id] = ht[this.id] || {};
        if (0 == arguments.length) return i;
        if (1 == arguments.length) {
            if (Q.is(t, "object")) {
                for (var r in t) t[N](r) && this.data(r, t[r]);
                return this
            }
            return z("raphael.data.get." + this.id, this, i[t], t), i[t]
        }
        return i[t] = e, z("raphael.data.set." + this.id, this, e, t), this
    }, $t.removeData = function (t) {
        return null == t ? ht[this.id] = {} : ht[this.id] && delete ht[this.id][t], this
    }, $t.getData = function () {
        return x(ht[this.id] || {})
    }, $t.hover = function (t, e, i, r) {
        return this.mouseover(t, i).mouseout(e, r || i)
    }, $t.unhover = function (t, e) {
        return this.unmouseover(t).unmouseout(e)
    };
    var Qt = [];
    $t.drag = function (a, h, l, u, c, p) {
        function t(t) {
            (t.originalEvent || t).preventDefault();
            var e = t.clientX,
                i = t.clientY,
                r = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                n = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
            if (this._drag.id = t.identifier, g && t.touches)
                for (var s, o = t.touches.length; o--;)
                    if (s = t.touches[o], this._drag.id = s.identifier, s.identifier == this._drag.id) {
                        e = s.clientX, i = s.clientY;
                        break
                    } this._drag.x = e + n, this._drag.y = i + r, !qt.length && Q.mousemove(Vt).mouseup(Ut), qt.push({
                el: this,
                move_scope: u,
                start_scope: c,
                end_scope: p
            }), h && z.on("raphael.drag.start." + this.id, h), a && z.on("raphael.drag.move." + this.id, a), l && z.on("raphael.drag.end." + this.id, l), z("raphael.drag.start." + this.id, c || u || this, t.clientX + n, t.clientY + r, t)
        }
        return this._drag = {}, Qt.push({
            el: this,
            start: t
        }), this.mousedown(t), this
    }, $t.onDragOver = function (t) {
        t ? z.on("raphael.drag.over." + this.id, t) : z.unbind("raphael.drag.over." + this.id)
    }, $t.undrag = function () {
        for (var t = Qt.length; t--;) Qt[t].el == this && (this.unmousedown(Qt[t].start), Qt.splice(t, 1), z.unbind("raphael.drag.*." + this.id));
        !Qt.length && Q.unmousemove(Vt).unmouseup(Ut), qt = []
    }, s.circle = function (t, e, i) {
        var r = Q._engine.circle(this, t || 0, e || 0, i || 0);
        return this.__set__ && this.__set__.push(r), r
    }, s.rect = function (t, e, i, r, n) {
        var s = Q._engine.rect(this, t || 0, e || 0, i || 0, r || 0, n || 0);
        return this.__set__ && this.__set__.push(s), s
    }, s.ellipse = function (t, e, i, r) {
        var n = Q._engine.ellipse(this, t || 0, e || 0, i || 0, r || 0);
        return this.__set__ && this.__set__.push(n), n
    }, s.path = function (t) {
        t && !Q.is(t, T) && !Q.is(t[0], A) && (t += "");
        var e = Q._engine.path(Q.format[b](Q, arguments), this);
        return this.__set__ && this.__set__.push(e), e
    }, s.image = function (t, e, i, r, n) {
        var s = Q._engine.image(this, t || "about:blank", e || 0, i || 0, r || 0, n || 0);
        return this.__set__ && this.__set__.push(s), s
    }, s.text = function (t, e, i) {
        var r = Q._engine.text(this, t || 0, e || 0, H(i));
        return this.__set__ && this.__set__.push(r), r
    }, s.set = function (t) {
        !Q.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
        var e = new fe(t);
        return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
    }, s.setStart = function (t) {
        this.__set__ = t || this.set()
    }, s.setFinish = function () {
        var t = this.__set__;
        return delete this.__set__, t
    }, s.setSize = function (t, e) {
        return Q._engine.setSize.call(this, t, e)
    }, s.setViewBox = function (t, e, i, r, n) {
        return Q._engine.setViewBox.call(this, t, e, i, r, n)
    }, s.top = s.bottom = null, s.raphael = Q;
    s.getElementByPoint = function (t, e) {
        var i, r, n, s, o, a, h, l = this.canvas,
            u = d.doc.elementFromPoint(t, e);
        if (d.win.opera && "svg" == u.tagName) {
            var c = (r = (i = l).getBoundingClientRect(), n = i.ownerDocument, s = n.body, o = n.documentElement, a = o.clientTop || s.clientTop || 0, h = o.clientLeft || s.clientLeft || 0, {
                    y: r.top + (d.win.pageYOffset || o.scrollTop || s.scrollTop) - a,
                    x: r.left + (d.win.pageXOffset || o.scrollLeft || s.scrollLeft) - h
                }),
                p = l.createSVGRect();
            p.x = t - c.x, p.y = e - c.y, p.width = p.height = 1;
            var f = l.getIntersectionList(p, null);
            f.length && (u = f[f.length - 1])
        }
        if (!u) return null;
        for (; u.parentNode && u != l.parentNode && !u.raphael;) u = u.parentNode;
        return u == this.canvas.parentNode && (u = l), u && u.raphael ? this.getById(u.raphaelid) : null
    }, s.getElementsByBBox = function (e) {
        var i = this.set();
        return this.forEach(function (t) {
            Q.isBBoxIntersect(t.getBBox(), e) && i.push(t)
        }), i
    }, s.getById = function (t) {
        for (var e = this.bottom; e;) {
            if (e.id == t) return e;
            e = e.next
        }
        return null
    }, s.forEach = function (t, e) {
        for (var i = this.bottom; i;) {
            if (!1 === t.call(e, i)) return this;
            i = i.next
        }
        return this
    }, s.getElementsByPoint = function (e, i) {
        var r = this.set();
        return this.forEach(function (t) {
            t.isPointInside(e, i) && r.push(t)
        }), r
    }, $t.isPointInside = function (t, e) {
        var i = this.realPath = ft[this.type](this);
        return this.attr("transform") && this.attr("transform").length && (i = Q.transformPath(i, this.attr("transform"))), Q.isPointInsidePath(i, t, e)
    }, $t.getBBox = function (t) {
        if (this.removed) return {};
        var e = this._;
        return t ? ((e.dirty || !e.bboxwt) && (this.realPath = ft[this.type](this), e.bboxwt = Ct(this.realPath), e.bboxwt.toString = i, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = ft[this.type](this)), e.bbox = Ct(dt(this.realPath, this.matrix)), e.bbox.toString = i, e.dirty = e.dirtyT = 0), e.bbox)
    }, $t.clone = function () {
        if (this.removed) return null;
        var t = this.paper[this.type]().attr(this.attr());
        return this.__set__ && this.__set__.push(t), t
    }, $t.glow = function (t) {
        if ("text" == this.type) return null;
        var e = {
                width: ((t = t || {}).width || 10) + (+this.attr("stroke-width") || 1),
                fill: t.fill || !1,
                opacity: t.opacity || .5,
                offsetx: t.offsetx || 0,
                offsety: t.offsety || 0,
                color: t.color || "#000"
            },
            i = e.width / 2,
            r = this.paper,
            n = r.set(),
            s = this.realPath || ft[this.type](this);
        s = this.matrix ? dt(s, this.matrix) : s;
        for (var o = 1; o < i + 1; o++) n.push(r.path(s).attr({
            stroke: e.color,
            fill: e.fill ? e.color : "none",
            "stroke-linejoin": "round",
            "stroke-linecap": "round",
            "stroke-width": +(e.width / i * o).toFixed(3),
            opacity: +(e.opacity / i).toFixed(3)
        }));
        return n.insertBefore(this).translate(e.offsetx, e.offsety)
    };
    var Jt = function (t, e, i, r, n, s, o, a, h) {
            return null == h ? S(t, e, i, r, n, s, o, a) : Q.findDotsAtSegment(t, e, i, r, n, s, o, a, function (t, e, i, r, n, s, o, a, h) {
                if (!(h < 0 || S(t, e, i, r, n, s, o, a) < h)) {
                    var l, u = .5,
                        c = 1 - u;
                    for (l = S(t, e, i, r, n, s, o, a, c); .01 < V(l - h);) l = S(t, e, i, r, n, s, o, a, c += (l < h ? 1 : -1) * (u /= 2));
                    return c
                }
            }(t, e, i, r, n, s, o, a, h))
        },
        Kt = function (f, d) {
            return function (t, e, i) {
                for (var r, n, s, o, a, h = "", l = {}, u = 0, c = 0, p = (t = Et(t)).length; c < p; c++) {
                    if ("M" == (s = t[c])[0]) r = +s[1], n = +s[2];
                    else {
                        if (e < u + (o = Jt(r, n, s[1], s[2], s[3], s[4], s[5], s[6]))) {
                            if (d && !l.start) {
                                if (h += ["C" + (a = Jt(r, n, s[1], s[2], s[3], s[4], s[5], s[6], e - u)).start.x, a.start.y, a.m.x, a.m.y, a.x, a.y], i) return h;
                                l.start = h, h = ["M" + a.x, a.y + "C" + a.n.x, a.n.y, a.end.x, a.end.y, s[5], s[6]].join(), u += o, r = +s[5], n = +s[6];
                                continue
                            }
                            if (!f && !d) return {
                                x: (a = Jt(r, n, s[1], s[2], s[3], s[4], s[5], s[6], e - u)).x,
                                y: a.y,
                                alpha: a.alpha
                            }
                        }
                        u += o, r = +s[5], n = +s[6]
                    }
                    h += s.shift() + s
                }
                return l.end = h, (a = f ? u : d ? l : Q.findDotsAtSegment(r, n, s[0], s[1], s[2], s[3], s[4], s[5], 1)).alpha && (a = {
                    x: a.x,
                    y: a.y,
                    alpha: a.alpha
                }), a
            }
        },
        te = Kt(1),
        ee = Kt(),
        ie = Kt(0, 1);
    Q.getTotalLength = te, Q.getPointAtLength = ee, Q.getSubpath = function (t, e, i) {
        if (this.getTotalLength(t) - i < 1e-6) return ie(t, e).end;
        var r = ie(t, i, 1);
        return e ? ie(r, e).end : r
    }, $t.getTotalLength = function () {
        var t = this.getPath();
        if (t) return this.node.getTotalLength ? this.node.getTotalLength() : te(t)
    }, $t.getPointAtLength = function (t) {
        var e = this.getPath();
        if (e) return ee(e, t)
    }, $t.getPath = function () {
        var t, e = Q._getPath[this.type];
        if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
    }, $t.getSubpath = function (t, e) {
        var i = this.getPath();
        if (i) return Q.getSubpath(i, t, e)
    };
    var re = Q.easing_formulas = {
        linear: function (t) {
            return t
        },
        "<": function (t) {
            return F(t, 1.7)
        },
        ">": function (t) {
            return F(t, .48)
        },
        "<>": function (t) {
            var e = .48 - t / 1.04,
                i = q.sqrt(.1734 + e * e),
                r = i - e,
                n = -i - e,
                s = F(V(r), 1 / 3) * (r < 0 ? -1 : 1) + F(V(n), 1 / 3) * (n < 0 ? -1 : 1) + .5;
            return 3 * (1 - s) * s * s + s * s * s
        },
        backIn: function (t) {
            return t * t * (2.70158 * t - 1.70158)
        },
        backOut: function (t) {
            return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
        },
        elastic: function (t) {
            return t == !!t ? t : F(2, -10 * t) * q.sin(2 * (t - .075) * U / .3) + 1
        },
        bounce: function (t) {
            var e, i = 7.5625,
                r = 2.75;
            return t < 1 / r ? e = i * t * t : t < 2 / r ? e = i * (t -= 1.5 / r) * t + .75 : t < 2.5 / r ? e = i * (t -= 2.25 / r) * t + .9375 : e = i * (t -= 2.625 / r) * t + .984375, e
        }
    };
    re.easeIn = re["ease-in"] = re["<"], re.easeOut = re["ease-out"] = re[">"], re.easeInOut = re["ease-in-out"] = re["<>"], re["back-in"] = re.backIn, re["back-out"] = re.backOut;
    var ne = [],
        se = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
            setTimeout(t, 16)
        },
        oe = function () {
            for (var t = +new Date, e = 0; e < ne.length; e++) {
                var i = ne[e];
                if (!i.el.removed && !i.paused) {
                    var r, n, s = t - i.start,
                        o = i.ms,
                        a = i.easing,
                        h = i.from,
                        l = i.diff,
                        u = i.to,
                        c = (i.t, i.el),
                        p = {},
                        f = {};
                    if (i.initstatus ? (s = (i.initstatus * i.anim.top - i.prev) / (i.percent - i.prev) * o, i.status = i.initstatus, delete i.initstatus, i.stop && ne.splice(e--, 1)) : i.status = (i.prev + (i.percent - i.prev) * (s / o)) / i.anim.top, !(s < 0))
                        if (s < o) {
                            var d = a(s / o);
                            for (var g in h)
                                if (h[N](g)) {
                                    switch (et[g]) {
                                        case G:
                                            r = +h[g] + d * o * l[g];
                                            break;
                                        case "colour":
                                            r = "rgb(" + [ae($(h[g].r + d * o * l[g].r)), ae($(h[g].g + d * o * l[g].g)), ae($(h[g].b + d * o * l[g].b))].join(",") + ")";
                                            break;
                                        case "path":
                                            r = [];
                                            for (var v = 0, x = h[g].length; v < x; v++) {
                                                r[v] = [h[g][v][0]];
                                                for (var y = 1, m = h[g][v].length; y < m; y++) r[v][y] = +h[g][v][y] + d * o * l[g][v][y];
                                                r[v] = r[v].join(" ")
                                            }
                                            r = r.join(" ");
                                            break;
                                        case "transform":
                                            if (l[g].real)
                                                for (r = [], v = 0, x = h[g].length; v < x; v++)
                                                    for (r[v] = [h[g][v][0]], y = 1, m = h[g][v].length; y < m; y++) r[v][y] = h[g][v][y] + d * o * l[g][v][y];
                                            else {
                                                var b = function (t) {
                                                    return +h[g][t] + d * o * l[g][t]
                                                };
                                                r = [
                                                    ["m", b(0), b(1), b(2), b(3), b(4), b(5)]
                                                ]
                                            }
                                            break;
                                        case "csv":
                                            if ("clip-rect" == g)
                                                for (r = [], v = 4; v--;) r[v] = +h[g][v] + d * o * l[g][v];
                                            break;
                                        default:
                                            var w = [][j](h[g]);
                                            for (r = [], v = c.paper.customAttributes[g].length; v--;) r[v] = +w[v] + d * o * l[g][v]
                                    }
                                    p[g] = r
                                } c.attr(p),
                                function (t, e, i) {
                                    setTimeout(function () {
                                        z("raphael.anim.frame." + t, e, i)
                                    })
                                }(c.id, c, i.anim)
                        } else {
                            if (function (t, e, i) {
                                    setTimeout(function () {
                                        z("raphael.anim.frame." + e.id, e, i), z("raphael.anim.finish." + e.id, e, i), Q.is(t, "function") && t.call(e)
                                    })
                                }(i.callback, c, i.anim), c.attr(u), ne.splice(e--, 1), 1 < i.repeat && !i.next) {
                                for (n in u) u[N](n) && (f[n] = i.totalOrigin[n]);
                                i.el.attr(f), _(i.anim, i.el, i.anim.percents[0], null, i.totalOrigin, i.repeat - 1)
                            }
                            i.next && !i.stop && _(i.anim, i.el, i.next, null, i.totalOrigin, i.repeat)
                        }
                }
            }
            Q.svg && c && c.paper && c.paper.safari(), ne.length && se(oe)
        },
        ae = function (t) {
            return 255 < t ? 255 : t < 0 ? 0 : t
        };
    $t.animateWith = function (t, e, i, r, n, s) {
        var o = this;
        if (o.removed) return s && s.call(o), o;
        var a = i instanceof u ? i : Q.animation(i, r, n, s);
        _(a, o, a.percents[0], null, o.attr());
        for (var h = 0, l = ne.length; h < l; h++)
            if (ne[h].anim == e && ne[h].el == t) {
                ne[l - 1].start = ne[h].start;
                break
            } return o
    }, $t.onAnimation = function (t) {
        return t ? z.on("raphael.anim.frame." + this.id, t) : z.unbind("raphael.anim.frame." + this.id), this
    }, u.prototype.delay = function (t) {
        var e = new u(this.anim, this.ms);
        return e.times = this.times, e.del = +t || 0, e
    }, u.prototype.repeat = function (t) {
        var e = new u(this.anim, this.ms);
        return e.del = this.del, e.times = q.floor(B(t, 0)) || 1, e
    }, Q.animation = function (t, e, i, r) {
        if (t instanceof u) return t;
        (Q.is(i, "function") || !i) && (r = r || i || null, i = null), t = Object(t), e = +e || 0;
        var n, s, o = {};
        for (s in t) t[N](s) && Z(s) != s && Z(s) + "%" != s && (n = !0, o[s] = t[s]);
        return n ? (i && (o.easing = i), r && (o.callback = r), new u({
            100: o
        }, e)) : new u(t, e)
    }, $t.animate = function (t, e, i, r) {
        var n = this;
        if (n.removed) return r && r.call(n), n;
        var s = t instanceof u ? t : Q.animation(t, e, i, r);
        return _(s, n, s.percents[0], null, n.attr()), n
    }, $t.setTime = function (t, e) {
        return t && null != e && this.status(t, L(e, t.ms) / t.ms), this
    }, $t.status = function (t, e) {
        var i, r, n = [],
            s = 0;
        if (null != e) return _(t, this, -1, L(e, 1)), this;
        for (i = ne.length; s < i; s++)
            if ((r = ne[s]).el.id == this.id && (!t || r.anim == t)) {
                if (t) return r.status;
                n.push({
                    anim: r.anim,
                    status: r.status
                })
            } return t ? 0 : n
    }, $t.pause = function (t) {
        for (var e = 0; e < ne.length; e++) ne[e].el.id != this.id || t && ne[e].anim != t || !1 !== z("raphael.anim.pause." + this.id, this, ne[e].anim) && (ne[e].paused = !0);
        return this
    }, $t.resume = function (t) {
        for (var e = 0; e < ne.length; e++)
            if (ne[e].el.id == this.id && (!t || ne[e].anim == t)) {
                var i = ne[e];
                !1 !== z("raphael.anim.resume." + this.id, this, i.anim) && (delete i.paused, this.status(i.anim, i.status))
            } return this
    }, $t.stop = function (t) {
        for (var e = 0; e < ne.length; e++) ne[e].el.id != this.id || t && ne[e].anim != t || !1 !== z("raphael.anim.stop." + this.id, this, ne[e].anim) && ne.splice(e--, 1);
        return this
    }, z.on("raphael.remove", e), z.on("raphael.clear", e), $t.toString = function () {
        return "Raphaël’s object"
    };
    var he, le, ue, ce, pe, fe = function (t) {
            if (this.items = [], this.length = 0, this.type = "set", t)
                for (var e = 0, i = t.length; e < i; e++) !t[e] || t[e].constructor != $t.constructor && t[e].constructor != fe || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        },
        de = fe.prototype;
    for (var ge in de.push = function () {
            for (var t, e, i = 0, r = arguments.length; i < r; i++) !(t = arguments[i]) || t.constructor != $t.constructor && t.constructor != fe || (this[e = this.items.length] = this.items[e] = t, this.length++);
            return this
        }, de.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, de.forEach = function (t, e) {
            for (var i = 0, r = this.items.length; i < r; i++)
                if (!1 === t.call(e, this.items[i], i)) return this;
            return this
        }, $t) $t[N](ge) && (de[ge] = function (i) {
        return function () {
            var e = arguments;
            return this.forEach(function (t) {
                t[i][b](t, e)
            })
        }
    }(ge));
    return de.attr = function (t, e) {
            if (t && Q.is(t, A) && Q.is(t[0], "object"))
                for (var i = 0, r = t.length; i < r; i++) this.items[i].attr(t[i]);
            else
                for (var n = 0, s = this.items.length; n < s; n++) this.items[n].attr(t, e);
            return this
        }, de.clear = function () {
            for (; this.length;) this.pop()
        }, de.splice = function (t, e) {
            t = t < 0 ? B(this.length + t, 0) : t, e = B(0, L(this.length - t, e));
            var i, r = [],
                n = [],
                s = [];
            for (i = 2; i < arguments.length; i++) s.push(arguments[i]);
            for (i = 0; i < e; i++) n.push(this[t + i]);
            for (; i < this.length - t; i++) r.push(this[t + i]);
            var o = s.length;
            for (i = 0; i < o + r.length; i++) this.items[t + i] = this[t + i] = i < o ? s[i] : r[i - o];
            for (i = this.items.length = this.length -= e - o; this[i];) delete this[i++];
            return new fe(n)
        }, de.exclude = function (t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (this[e] == t) return this.splice(e, 1), !0
        }, de.animate = function (t, e, i, r) {
            (Q.is(i, "function") || !i) && (r = i || null);
            var n, s, o = this.items.length,
                a = o,
                h = this;
            if (!o) return this;
            r && (s = function () {
                !--o && r.call(h)
            }), i = Q.is(i, T) ? i : s;
            var l = Q.animation(t, e, i, s);
            for (n = this.items[--a].animate(l); a--;) this.items[a] && !this.items[a].removed && this.items[a].animateWith(n, l, l), this.items[a] && !this.items[a].removed || o--;
            return this
        }, de.insertAfter = function (t) {
            for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
            return this
        }, de.getBBox = function () {
            for (var t = [], e = [], i = [], r = [], n = this.items.length; n--;)
                if (!this.items[n].removed) {
                    var s = this.items[n].getBBox();
                    t.push(s.x), e.push(s.y), i.push(s.x + s.width), r.push(s.y + s.height)
                } return {
                x: t = L[b](0, t),
                y: e = L[b](0, e),
                x2: i = B[b](0, i),
                y2: r = B[b](0, r),
                width: i - t,
                height: r - e
            }
        }, de.clone = function (t) {
            t = this.paper.set();
            for (var e = 0, i = this.items.length; e < i; e++) t.push(this.items[e].clone());
            return t
        }, de.toString = function () {
            return "Raphaël‘s set"
        }, de.glow = function (i) {
            var r = this.paper.set();
            return this.forEach(function (t) {
                var e = t.glow(i);
                null != e && e.forEach(function (t) {
                    r.push(t)
                })
            }), r
        }, de.isPointInside = function (e, i) {
            var r = !1;
            return this.forEach(function (t) {
                return t.isPointInside(e, i) ? (console.log("runned"), !(r = !0)) : void 0
            }), r
        }, Q.registerFont = function (t) {
            if (!t.face) return t;
            this.fonts = this.fonts || {};
            var e = {
                    w: t.w,
                    face: {},
                    glyphs: {}
                },
                i = t.face["font-family"];
            for (var r in t.face) t.face[N](r) && (e.face[r] = t.face[r]);
            if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg)
                for (var n in e.face["units-per-em"] = J(t.face["units-per-em"], 10), t.glyphs)
                    if (t.glyphs[N](n)) {
                        var s = t.glyphs[n];
                        if (e.glyphs[n] = {
                                w: s.w,
                                k: {},
                                d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function (t) {
                                    return {
                                        l: "L",
                                        c: "C",
                                        x: "z",
                                        t: "m",
                                        r: "l",
                                        v: "c"
                                    } [t] || "M"
                                }) + "z"
                            }, s.k)
                            for (var o in s.k) s[N](o) && (e.glyphs[n].k[o] = s.k[o])
                    } return t
        }, s.getFont = function (t, e, i, r) {
            if (r = r || "normal", i = i || "normal", e = +e || {
                    normal: 400,
                    bold: 700,
                    lighter: 300,
                    bolder: 800
                } [e] || 400, Q.fonts) {
                var n, s = Q.fonts[t];
                if (!s) {
                    var o = new RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, "") + "(\\s|$)", "i");
                    for (var a in Q.fonts)
                        if (Q.fonts[N](a) && o.test(a)) {
                            s = Q.fonts[a];
                            break
                        }
                }
                if (s)
                    for (var h = 0, l = s.length; h < l && ((n = s[h]).face["font-weight"] != e || n.face["font-style"] != i && n.face["font-style"] || n.face["font-stretch"] != r); h++);
                return n
            }
        }, s.print = function (t, e, i, r, n, s, o, a) {
            s = s || "middle", o = B(L(o || 0, 1), -1), a = B(L(a || 1, 3), 1);
            var h, l = H(i)[X](""),
                u = 0,
                c = 0,
                p = "";
            if (Q.is(r, "string") && (r = this.getFont(r)), r) {
                h = (n || 16) / r.face["units-per-em"];
                for (var f = r.face.bbox[X](R), d = +f[0], g = f[3] - f[1], v = 0, x = +f[1] + ("baseline" == s ? g + +r.face.descent : g / 2), y = 0, m = l.length; y < m; y++) {
                    if ("\n" == l[y]) c = w = u = 0, v += g * a;
                    else {
                        var b = c && r.glyphs[l[y - 1]] || {},
                            w = r.glyphs[l[y]];
                        u += c ? (b.w || r.w) + (b.k && b.k[l[y]] || 0) + r.w * o : 0, c = 1
                    }
                    w && w.d && (p += Q.transformPath(w.d, ["t", u * h, v * h, "s", h, h, d, x, "t", (t - d) / h, (e - x) / h]))
                }
            }
            return this.path(p).attr({
                fill: "#000",
                stroke: "none"
            })
        }, s.add = function (t) {
            if (Q.is(t, "array"))
                for (var e, i = this.set(), r = 0, n = t.length; r < n; r++) e = t[r] || {}, l[N](e.type) && i.push(this[e.type]().attr(e));
            return i
        }, Q.format = function (t, e) {
            var i = Q.is(e, A) ? [0][j](e) : arguments;
            return t && Q.is(t, T) && i.length - 1 && (t = t.replace(c, function (t, e) {
                return null == i[++e] ? "" : i[e]
            })), t || ""
        }, Q.fullfill = (ce = /\{([^\}]+)\}/g, pe = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, function (t, n) {
            return String(t).replace(ce, function (t, e) {
                return i = t, s = r = n, e.replace(pe, function (t, e, i, r, n) {
                    e = e || r, s && (e in s && (s = s[e]), "function" == typeof s && n && (s = s()))
                }), s = (null == s || s == r ? i : s) + "";
                var i, r, s
            })
        }), Q.ninja = function () {
            return p.was ? d.win.Raphael = p.is : delete Raphael, Q
        }, Q.st = de, he = document, le = "DOMContentLoaded", null == he.readyState && he.addEventListener && (he.addEventListener(le, ue = function () {
            he.removeEventListener(le, ue, !1), he.readyState = "complete"
        }, !1), he.readyState = "loading"),
        function t() {
            /in/.test(he.readyState) ? setTimeout(t, 9) : Q.eve("raphael.DOMload")
        }(), z.on("raphael.DOMload", function () {
            r = !0
        }),
        function () {
            if (Q.svg) {
                var S = "hasOwnProperty",
                    M = String,
                    v = parseFloat,
                    w = parseInt,
                    x = Math,
                    _ = x.max,
                    k = x.abs,
                    y = x.pow,
                    C = /[, ]+/,
                    p = Q.eve,
                    B = "http://www.w3.org/1999/xlink",
                    L = {
                        block: "M5,0 0,2.5 5,5z",
                        classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                        diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                        open: "M6,1 1,3.5 6,6",
                        oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
                    },
                    F = {};
                Q.toString = function () {
                    return "Your browser supports SVG.\nYou are running Raphaël " + this.version
                };
                var T = function (t, e) {
                        if (e)
                            for (var i in "string" == typeof t && (t = T(t)), e) e[S](i) && ("xlink:" == i.substring(0, 6) ? t.setAttributeNS(B, i.substring(6), M(e[i])) : t.setAttribute(i, M(e[i])));
                        else(t = Q._g.doc.createElementNS("http://www.w3.org/2000/svg", t)).style && (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                        return t
                    },
                    A = function (t, e) {
                        var n = "linear",
                            i = t.id + e,
                            s = .5,
                            o = .5,
                            r = t.node,
                            a = t.paper,
                            h = r.style,
                            l = Q._g.doc.getElementById(i);
                        if (!l) {
                            if (e = (e = M(e).replace(Q._radial_gradient, function (t, e, i) {
                                    if (n = "radial", e && i) {
                                        s = v(e);
                                        var r = 2 * (.5 < (o = v(i))) - 1;
                                        .25 < y(s - .5, 2) + y(o - .5, 2) && (o = x.sqrt(.25 - y(s - .5, 2)) * r + .5) && .5 != o && (o = o.toFixed(5) - 1e-5 * r)
                                    }
                                    return ""
                                })).split(/\s*\-\s*/), "linear" == n) {
                                var u = e.shift();
                                if (u = -v(u), isNaN(u)) return null;
                                var c = [0, 0, x.cos(Q.rad(u)), x.sin(Q.rad(u))],
                                    p = 1 / (_(k(c[2]), k(c[3])) || 1);
                                c[2] *= p, c[3] *= p, c[2] < 0 && (c[0] = -c[2], c[2] = 0), c[3] < 0 && (c[1] = -c[3], c[3] = 0)
                            }
                            var f = Q._parseDots(e);
                            if (!f) return null;
                            if (i = i.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && i != t.gradient.id && (a.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
                                l = T(n + "Gradient", {
                                    id: i
                                }), t.gradient = l, T(l, "radial" == n ? {
                                    fx: s,
                                    fy: o
                                } : {
                                    x1: c[0],
                                    y1: c[1],
                                    x2: c[2],
                                    y2: c[3],
                                    gradientTransform: t.matrix.invert()
                                }), a.defs.appendChild(l);
                                for (var d = 0, g = f.length; d < g; d++) l.appendChild(T("stop", {
                                    offset: f[d].offset ? f[d].offset : d ? "100%" : "0%",
                                    "stop-color": f[d].color || "#fff"
                                }))
                            }
                        }
                        return T(r, {
                            fill: "url(#" + i + ")",
                            opacity: 1,
                            "fill-opacity": 1
                        }), h.fill = "", h.opacity = 1, h.fillOpacity = 1
                    },
                    P = function (t) {
                        var e = t.getBBox(1);
                        T(t.pattern, {
                            patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
                        })
                    },
                    E = function (t, e, i) {
                        if ("path" == t.type) {
                            for (var r, n, s, o, a, h = M(e).toLowerCase().split("-"), l = t.paper, u = i ? "end" : "start", c = t.node, p = t.attrs, f = p["stroke-width"], d = h.length, g = "classic", v = 3, x = 3, y = 5; d--;) switch (h[d]) {
                                case "block":
                                case "classic":
                                case "oval":
                                case "diamond":
                                case "open":
                                case "none":
                                    g = h[d];
                                    break;
                                case "wide":
                                    x = 5;
                                    break;
                                case "narrow":
                                    x = 2;
                                    break;
                                case "long":
                                    v = 5;
                                    break;
                                case "short":
                                    v = 2
                            }
                            if ("open" == g ? (v += 2, x += 2, y += 2, s = 1, o = i ? 4 : 1, a = {
                                    fill: "none",
                                    stroke: p.stroke
                                }) : (o = s = v / 2, a = {
                                    fill: p.stroke,
                                    stroke: "none"
                                }), t._.arrows ? i ? (t._.arrows.endPath && F[t._.arrows.endPath]--, t._.arrows.endMarker && F[t._.arrows.endMarker]--) : (t._.arrows.startPath && F[t._.arrows.startPath]--, t._.arrows.startMarker && F[t._.arrows.startMarker]--) : t._.arrows = {}, "none" != g) {
                                var m = "raphael-marker-" + g,
                                    b = "raphael-marker-" + u + g + v + x;
                                Q._g.doc.getElementById(m) ? F[m]++ : (l.defs.appendChild(T(T("path"), {
                                    "stroke-linecap": "round",
                                    d: L[g],
                                    id: m
                                })), F[m] = 1);
                                var w, _ = Q._g.doc.getElementById(b);
                                _ ? (F[b]++, w = _.getElementsByTagName("use")[0]) : (_ = T(T("marker"), {
                                    id: b,
                                    markerHeight: x,
                                    markerWidth: v,
                                    orient: "auto",
                                    refX: o,
                                    refY: x / 2
                                }), w = T(T("use"), {
                                    "xlink:href": "#" + m,
                                    transform: (i ? "rotate(180 " + v / 2 + " " + x / 2 + ") " : "") + "scale(" + v / y + "," + x / y + ")",
                                    "stroke-width": (1 / ((v / y + x / y) / 2)).toFixed(4)
                                }), _.appendChild(w), l.defs.appendChild(_), F[b] = 1), T(w, a);
                                var k = s * ("diamond" != g && "oval" != g);
                                i ? (r = t._.arrows.startdx * f || 0, n = Q.getTotalLength(p.path) - k * f) : (r = k * f, n = Q.getTotalLength(p.path) - (t._.arrows.enddx * f || 0)), (a = {})["marker-" + u] = "url(#" + b + ")", (n || r) && (a.d = Q.getSubpath(p.path, r, n)), T(c, a), t._.arrows[u + "Path"] = m, t._.arrows[u + "Marker"] = b, t._.arrows[u + "dx"] = k, t._.arrows[u + "Type"] = g, t._.arrows[u + "String"] = e
                            } else i ? (r = t._.arrows.startdx * f || 0, n = Q.getTotalLength(p.path) - r) : (r = 0, n = Q.getTotalLength(p.path) - (t._.arrows.enddx * f || 0)), t._.arrows[u + "Path"] && T(c, {
                                d: Q.getSubpath(p.path, r, n)
                            }), delete t._.arrows[u + "Path"], delete t._.arrows[u + "Marker"], delete t._.arrows[u + "dx"], delete t._.arrows[u + "Type"], delete t._.arrows[u + "String"];
                            for (a in F)
                                if (F[S](a) && !F[a]) {
                                    var C = Q._g.doc.getElementById(a);
                                    C && C.parentNode.removeChild(C)
                                }
                        }
                    },
                    a = {
                        "": [0],
                        none: [0],
                        "-": [3, 1],
                        ".": [1, 1],
                        "-.": [3, 1, 1, 1],
                        "-..": [3, 1, 1, 1, 1, 1],
                        ". ": [1, 3],
                        "- ": [4, 3],
                        "--": [8, 3],
                        "- .": [4, 3, 1, 3],
                        "--.": [8, 3, 1, 3],
                        "--..": [8, 3, 1, 3, 1, 3]
                    },
                    z = function (t, e, i) {
                        if (e = a[M(e).toLowerCase()]) {
                            for (var r = t.attrs["stroke-width"] || "1", n = {
                                    round: r,
                                    square: r,
                                    butt: 0
                                } [t.attrs["stroke-linecap"] || i["stroke-linecap"]] || 0, s = [], o = e.length; o--;) s[o] = e[o] * r + (o % 2 ? 1 : -1) * n;
                            T(t.node, {
                                "stroke-dasharray": s.join(",")
                            })
                        }
                    },
                    f = function (r, t) {
                        var e = r.node,
                            i = r.attrs,
                            n = e.style.visibility;
                        for (var s in e.style.visibility = "hidden", t)
                            if (t[S](s)) {
                                if (!Q._availableAttrs[S](s)) continue;
                                var o = t[s];
                                switch (i[s] = o, s) {
                                    case "blur":
                                        r.blur(o);
                                        break;
                                    case "href":
                                    case "title":
                                        var a = T("title"),
                                            h = Q._g.doc.createTextNode(o);
                                        a.appendChild(h), e.appendChild(a);
                                        break;
                                    case "target":
                                        var l = e.parentNode;
                                        if ("a" != l.tagName.toLowerCase()) {
                                            a = T("a");
                                            l.insertBefore(a, e), a.appendChild(e), l = a
                                        }
                                        "target" == s ? l.setAttributeNS(B, "show", "blank" == o ? "new" : o) : l.setAttributeNS(B, s, o);
                                        break;
                                    case "cursor":
                                        e.style.cursor = o;
                                        break;
                                    case "transform":
                                        r.transform(o);
                                        break;
                                    case "arrow-start":
                                        E(r, o);
                                        break;
                                    case "arrow-end":
                                        E(r, o, 1);
                                        break;
                                    case "clip-rect":
                                        var u = M(o).split(C);
                                        if (4 == u.length) {
                                            r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                                            var c = T("clipPath"),
                                                p = T("rect");
                                            c.id = Q.createUUID(), T(p, {
                                                x: u[0],
                                                y: u[1],
                                                width: u[2],
                                                height: u[3]
                                            }), c.appendChild(p), r.paper.defs.appendChild(c), T(e, {
                                                "clip-path": "url(#" + c.id + ")"
                                            }), r.clip = p
                                        }
                                        if (!o) {
                                            var f = e.getAttribute("clip-path");
                                            if (f) {
                                                var d = Q._g.doc.getElementById(f.replace(/(^url\(#|\)$)/g, ""));
                                                d && d.parentNode.removeChild(d), T(e, {
                                                    "clip-path": ""
                                                }), delete r.clip
                                            }
                                        }
                                        break;
                                    case "path":
                                        "path" == r.type && (T(e, {
                                            d: o ? i.path = Q._pathToAbsolute(o) : "M0,0"
                                        }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && E(r, r._.arrows.startString), "endString" in r._.arrows && E(r, r._.arrows.endString, 1)));
                                        break;
                                    case "width":
                                        if (e.setAttribute(s, o), r._.dirty = 1, !i.fx) break;
                                        s = "x", o = i.x;
                                    case "x":
                                        i.fx && (o = -i.x - (i.width || 0));
                                    case "rx":
                                        if ("rx" == s && "rect" == r.type) break;
                                    case "cx":
                                        e.setAttribute(s, o), r.pattern && P(r), r._.dirty = 1;
                                        break;
                                    case "height":
                                        if (e.setAttribute(s, o), r._.dirty = 1, !i.fy) break;
                                        s = "y", o = i.y;
                                    case "y":
                                        i.fy && (o = -i.y - (i.height || 0));
                                    case "ry":
                                        if ("ry" == s && "rect" == r.type) break;
                                    case "cy":
                                        e.setAttribute(s, o), r.pattern && P(r), r._.dirty = 1;
                                        break;
                                    case "r":
                                        "rect" == r.type ? T(e, {
                                            rx: o,
                                            ry: o
                                        }) : e.setAttribute(s, o), r._.dirty = 1;
                                        break;
                                    case "src":
                                        "image" == r.type && e.setAttributeNS(B, "href", o);
                                        break;
                                    case "stroke-width":
                                        (1 != r._.sx || 1 != r._.sy) && (o /= _(k(r._.sx), k(r._.sy)) || 1), r.paper._vbSize && (o *= r.paper._vbSize), e.setAttribute(s, o), i["stroke-dasharray"] && z(r, i["stroke-dasharray"], t), r._.arrows && ("startString" in r._.arrows && E(r, r._.arrows.startString), "endString" in r._.arrows && E(r, r._.arrows.endString, 1));
                                        break;
                                    case "stroke-dasharray":
                                        z(r, o, t);
                                        break;
                                    case "fill":
                                        var g = M(o).match(Q._ISURL);
                                        if (g) {
                                            c = T("pattern");
                                            var v = T("image");
                                            c.id = Q.createUUID(), T(c, {
                                                    x: 0,
                                                    y: 0,
                                                    patternUnits: "userSpaceOnUse",
                                                    height: 1,
                                                    width: 1
                                                }), T(v, {
                                                    x: 0,
                                                    y: 0,
                                                    "xlink:href": g[1]
                                                }), c.appendChild(v),
                                                function (i) {
                                                    Q._preload(g[1], function () {
                                                        var t = this.offsetWidth,
                                                            e = this.offsetHeight;
                                                        T(i, {
                                                            width: t,
                                                            height: e
                                                        }), T(v, {
                                                            width: t,
                                                            height: e
                                                        }), r.paper.safari()
                                                    })
                                                }(c), r.paper.defs.appendChild(c), T(e, {
                                                    fill: "url(#" + c.id + ")"
                                                }), r.pattern = c, r.pattern && P(r);
                                            break
                                        }
                                        var x = Q.getRGB(o);
                                        if (x.error) {
                                            if (("circle" == r.type || "ellipse" == r.type || "r" != M(o).charAt()) && A(r, o)) {
                                                if ("opacity" in i || "fill-opacity" in i) {
                                                    var y = Q._g.doc.getElementById(e.getAttribute("fill").replace(/^url\(#|\)$/g, ""));
                                                    if (y) {
                                                        var m = y.getElementsByTagName("stop");
                                                        T(m[m.length - 1], {
                                                            "stop-opacity": ("opacity" in i ? i.opacity : 1) * ("fill-opacity" in i ? i["fill-opacity"] : 1)
                                                        })
                                                    }
                                                }
                                                i.gradient = o, i.fill = "none";
                                                break
                                            }
                                        } else delete t.gradient, delete i.gradient, !Q.is(i.opacity, "undefined") && Q.is(t.opacity, "undefined") && T(e, {
                                            opacity: i.opacity
                                        }), !Q.is(i["fill-opacity"], "undefined") && Q.is(t["fill-opacity"], "undefined") && T(e, {
                                            "fill-opacity": i["fill-opacity"]
                                        });
                                        x[S]("opacity") && T(e, {
                                            "fill-opacity": 1 < x.opacity ? x.opacity / 100 : x.opacity
                                        });
                                    case "stroke":
                                        x = Q.getRGB(o), e.setAttribute(s, x.hex), "stroke" == s && x[S]("opacity") && T(e, {
                                            "stroke-opacity": 1 < x.opacity ? x.opacity / 100 : x.opacity
                                        }), "stroke" == s && r._.arrows && ("startString" in r._.arrows && E(r, r._.arrows.startString), "endString" in r._.arrows && E(r, r._.arrows.endString, 1));
                                        break;
                                    case "gradient":
                                        ("circle" == r.type || "ellipse" == r.type || "r" != M(o).charAt()) && A(r, o);
                                        break;
                                    case "opacity":
                                        i.gradient && !i[S]("stroke-opacity") && T(e, {
                                            "stroke-opacity": 1 < o ? o / 100 : o
                                        });
                                    case "fill-opacity":
                                        if (i.gradient) {
                                            (y = Q._g.doc.getElementById(e.getAttribute("fill").replace(/^url\(#|\)$/g, ""))) && (m = y.getElementsByTagName("stop"), T(m[m.length - 1], {
                                                "stop-opacity": o
                                            }));
                                            break
                                        }
                                        default:
                                            "font-size" == s && (o = w(o, 10) + "px");
                                            var b = s.replace(/(\-.)/g, function (t) {
                                                return t.substring(1).toUpperCase()
                                            });
                                            e.style[b] = o, r._.dirty = 1, e.setAttribute(s, o)
                                }
                            } I(r, t), e.style.visibility = n
                    },
                    I = function (t, e) {
                        if ("text" == t.type && (e[S]("text") || e[S]("font") || e[S]("font-size") || e[S]("x") || e[S]("y"))) {
                            var i = t.attrs,
                                r = t.node,
                                n = r.firstChild ? w(Q._g.doc.defaultView.getComputedStyle(r.firstChild, "").getPropertyValue("font-size"), 10) : 10;
                            if (e[S]("text")) {
                                for (i.text = e.text; r.firstChild;) r.removeChild(r.firstChild);
                                for (var s, o = M(e.text).split("\n"), a = [], h = 0, l = o.length; h < l; h++) s = T("tspan"), h && T(s, {
                                    dy: 1.2 * n,
                                    x: i.x
                                }), s.appendChild(Q._g.doc.createTextNode(o[h])), r.appendChild(s), a[h] = s
                            } else
                                for (h = 0, l = (a = r.getElementsByTagName("tspan")).length; h < l; h++) h ? T(a[h], {
                                    dy: 1.2 * n,
                                    x: i.x
                                }) : T(a[0], {
                                    dy: 0
                                });
                            T(r, {
                                x: i.x,
                                y: i.y
                            }), t._.dirty = 1;
                            var u = t._getBBox(),
                                c = i.y - (u.y + u.height / 2);
                            c && Q.is(c, "finite") && T(a[0], {
                                dy: c
                            })
                        }
                    },
                    h = function (t, e) {
                        this[0] = this.node = t, t.raphael = !0, this.id = Q._oid++, t.raphaelid = this.id, this.matrix = Q.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            deg: 0,
                            dx: 0,
                            dy: 0,
                            dirty: 1
                        }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), (e.top = this).next = null
                    },
                    t = Q.el;
                (h.prototype = t).constructor = h, Q._engine.path = function (t, e) {
                    var i = T("path");
                    e.canvas && e.canvas.appendChild(i);
                    var r = new h(i, e);
                    return r.type = "path", f(r, {
                        fill: "none",
                        stroke: "#000",
                        path: t
                    }), r
                }, t.rotate = function (t, e, i) {
                    if (this.removed) return this;
                    if ((t = M(t).split(C)).length - 1 && (e = v(t[1]), i = v(t[2])), t = v(t[0]), null == i && (e = i), null == e || null == i) {
                        var r = this.getBBox(1);
                        e = r.x + r.width / 2, i = r.y + r.height / 2
                    }
                    return this.transform(this._.transform.concat([
                        ["r", t, e, i]
                    ])), this
                }, t.scale = function (t, e, i, r) {
                    if (this.removed) return this;
                    if ((t = M(t).split(C)).length - 1 && (e = v(t[1]), i = v(t[2]), r = v(t[3])), t = v(t[0]), null == e && (e = t), null == r && (i = r), null == i || null == r) var n = this.getBBox(1);
                    return i = null == i ? n.x + n.width / 2 : i, r = null == r ? n.y + n.height / 2 : r, this.transform(this._.transform.concat([
                        ["s", t, e, i, r]
                    ])), this
                }, t.translate = function (t, e) {
                    return this.removed || ((t = M(t).split(C)).length - 1 && (e = v(t[1])), t = v(t[0]) || 0, e = +e || 0, this.transform(this._.transform.concat([
                        ["t", t, e]
                    ]))), this
                }, t.transform = function (t) {
                    var e = this._;
                    if (null == t) return e.transform;
                    if (Q._extractTransform(this, t), this.clip && T(this.clip, {
                            transform: this.matrix.invert()
                        }), this.pattern && P(this), this.node && T(this.node, {
                            transform: this.matrix
                        }), 1 != e.sx || 1 != e.sy) {
                        var i = this.attrs[S]("stroke-width") ? this.attrs["stroke-width"] : 1;
                        this.attr({
                            "stroke-width": i
                        })
                    }
                    return this
                }, t.hide = function () {
                    return !this.removed && this.paper.safari(this.node.style.display = "none"), this
                }, t.show = function () {
                    return !this.removed && this.paper.safari(this.node.style.display = ""), this
                }, t.remove = function () {
                    if (!this.removed && this.node.parentNode) {
                        var t = this.paper;
                        for (var e in t.__set__ && t.__set__.exclude(this), p.unbind("raphael.*.*." + this.id), this.gradient && t.defs.removeChild(this.gradient), Q._tear(this, t), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node), this) this[e] = "function" == typeof this[e] ? Q._removedFactory(e) : null;
                        this.removed = !0
                    }
                }, t._getBBox = function () {
                    if ("none" == this.node.style.display) {
                        this.show();
                        var t = !0
                    }
                    var e = {};
                    try {
                        e = this.node.getBBox()
                    } catch (t) {} finally {
                        e = e || {}
                    }
                    return t && this.hide(), e
                }, t.attr = function (t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                        var i = {};
                        for (var r in this.attrs) this.attrs[S](r) && (i[r] = this.attrs[r]);
                        return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                    }
                    if (null == e && Q.is(t, "string")) {
                        if ("fill" == t && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        if ("transform" == t) return this._.transform;
                        for (var n = t.split(C), s = {}, o = 0, a = n.length; o < a; o++) s[t = n[o]] = t in this.attrs ? this.attrs[t] : Q.is(this.paper.customAttributes[t], "function") ? this.paper.customAttributes[t].def : Q._availableAttrs[t];
                        return a - 1 ? s : s[n[0]]
                    }
                    if (null == e && Q.is(t, "array")) {
                        for (s = {}, o = 0, a = t.length; o < a; o++) s[t[o]] = this.attr(t[o]);
                        return s
                    }
                    if (null != e) {
                        var h = {};
                        h[t] = e
                    } else null != t && Q.is(t, "object") && (h = t);
                    for (var l in h) p("raphael.attr." + l + "." + this.id, this, h[l]);
                    for (l in this.paper.customAttributes)
                        if (this.paper.customAttributes[S](l) && h[S](l) && Q.is(this.paper.customAttributes[l], "function")) {
                            var u = this.paper.customAttributes[l].apply(this, [].concat(h[l]));
                            for (var c in this.attrs[l] = h[l], u) u[S](c) && (h[c] = u[c])
                        } return f(this, h), this
                }, t.toFront = function () {
                    if (this.removed) return this;
                    "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
                    var t = this.paper;
                    return t.top != this && Q._tofront(this, t), this
                }, t.toBack = function () {
                    if (this.removed) return this;
                    var t = this.node.parentNode;
                    return "a" == t.tagName.toLowerCase() ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), Q._toback(this, this.paper), this.paper, this
                }, t.insertAfter = function (t) {
                    if (this.removed) return this;
                    var e = t.node || t[t.length - 1].node;
                    return e.nextSibling ? e.parentNode.insertBefore(this.node, e.nextSibling) : e.parentNode.appendChild(this.node), Q._insertafter(this, t, this.paper), this
                }, t.insertBefore = function (t) {
                    if (this.removed) return this;
                    var e = t.node || t[0].node;
                    return e.parentNode.insertBefore(this.node, e), Q._insertbefore(this, t, this.paper), this
                }, t.blur = function (t) {
                    var e = this;
                    if (0 != +t) {
                        var i = T("filter"),
                            r = T("feGaussianBlur");
                        e.attrs.blur = t, i.id = Q.createUUID(), T(r, {
                            stdDeviation: +t || 1.5
                        }), i.appendChild(r), e.paper.defs.appendChild(i), e._blur = i, T(e.node, {
                            filter: "url(#" + i.id + ")"
                        })
                    } else e._blur && (e._blur.parentNode.removeChild(e._blur), delete e._blur, delete e.attrs.blur), e.node.removeAttribute("filter");
                    return e
                }, Q._engine.circle = function (t, e, i, r) {
                    var n = T("circle");
                    t.canvas && t.canvas.appendChild(n);
                    var s = new h(n, t);
                    return s.attrs = {
                        cx: e,
                        cy: i,
                        r: r,
                        fill: "none",
                        stroke: "#000"
                    }, s.type = "circle", T(n, s.attrs), s
                }, Q._engine.rect = function (t, e, i, r, n, s) {
                    var o = T("rect");
                    t.canvas && t.canvas.appendChild(o);
                    var a = new h(o, t);
                    return a.attrs = {
                        x: e,
                        y: i,
                        width: r,
                        height: n,
                        r: s || 0,
                        rx: s || 0,
                        ry: s || 0,
                        fill: "none",
                        stroke: "#000"
                    }, a.type = "rect", T(o, a.attrs), a
                }, Q._engine.ellipse = function (t, e, i, r, n) {
                    var s = T("ellipse");
                    t.canvas && t.canvas.appendChild(s);
                    var o = new h(s, t);
                    return o.attrs = {
                        cx: e,
                        cy: i,
                        rx: r,
                        ry: n,
                        fill: "none",
                        stroke: "#000"
                    }, o.type = "ellipse", T(s, o.attrs), o
                }, Q._engine.image = function (t, e, i, r, n, s) {
                    var o = T("image");
                    T(o, {
                        x: i,
                        y: r,
                        width: n,
                        height: s,
                        preserveAspectRatio: "none"
                    }), o.setAttributeNS(B, "href", e), t.canvas && t.canvas.appendChild(o);
                    var a = new h(o, t);
                    return a.attrs = {
                        x: i,
                        y: r,
                        width: n,
                        height: s,
                        src: e
                    }, a.type = "image", a
                }, Q._engine.text = function (t, e, i, r) {
                    var n = T("text");
                    t.canvas && t.canvas.appendChild(n);
                    var s = new h(n, t);
                    return s.attrs = {
                        x: e,
                        y: i,
                        "text-anchor": "middle",
                        text: r,
                        font: Q._availableAttrs.font,
                        stroke: "none",
                        fill: "#000"
                    }, s.type = "text", f(s, s.attrs), s
                }, Q._engine.setSize = function (t, e) {
                    return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
                }, Q._engine.create = function () {
                    var t = Q._getContainer.apply(0, arguments),
                        e = t && t.container,
                        i = t.x,
                        r = t.y,
                        n = t.width,
                        s = t.height;
                    if (!e) throw new Error("SVG container not found.");
                    var o, a = T("svg"),
                        h = "overflow:hidden;";
                    return i = i || 0, r = r || 0, T(a, {
                        height: s = s || 342,
                        version: 1.1,
                        width: n = n || 512,
                        xmlns: "http://www.w3.org/2000/svg"
                    }), 1 == e ? (a.style.cssText = h + "position:absolute;left:" + i + "px;top:" + r + "px", Q._g.doc.body.appendChild(a), o = 1) : (a.style.cssText = h + "position:relative", e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a)), (e = new Q._Paper).width = n, e.height = s, e.canvas = a, e.clear(), e._left = e._top = 0, o && (e.renderfix = function () {}), e.renderfix(), e
                }, Q._engine.setViewBox = function (t, e, i, r, n) {
                    p("raphael.setViewBox", this, this._viewBox, [t, e, i, r, n]);
                    var s, o, a = _(i / this.width, r / this.height),
                        h = this.top,
                        l = n ? "meet" : "xMinYMin";
                    for (null == t ? (this._vbSize && (a = 1), delete this._vbSize, s = "0 0 " + this.width + " " + this.height) : (this._vbSize = a, s = t + " " + e + " " + i + " " + r), T(this.canvas, {
                            viewBox: s,
                            preserveAspectRatio: l
                        }); a && h;) o = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
                        "stroke-width": o
                    }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
                    return this._viewBox = [t, e, i, r, !!n], this
                }, Q.prototype.renderfix = function () {
                    var e, i = this.canvas,
                        t = i.style;
                    try {
                        e = i.getScreenCTM() || i.createSVGMatrix()
                    } catch (t) {
                        e = i.createSVGMatrix()
                    }
                    var r = -e.e % 1,
                        n = -e.f % 1;
                    (r || n) && (r && (this._left = (this._left + r) % 1, t.left = this._left + "px"), n && (this._top = (this._top + n) % 1, t.top = this._top + "px"))
                }, Q.prototype.clear = function () {
                    Q.eve("raphael.clear", this);
                    for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
                    this.bottom = this.top = null, (this.desc = T("desc")).appendChild(Q._g.doc.createTextNode("Created with Raphaël " + Q.version)), t.appendChild(this.desc), t.appendChild(this.defs = T("defs"))
                }, Q.prototype.remove = function () {
                    for (var t in p("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas), this) this[t] = "function" == typeof this[t] ? Q._removedFactory(t) : null
                };
                var e = Q.st;
                for (var i in t) t[S](i) && !e[S](i) && (e[i] = function (i) {
                    return function () {
                        var e = arguments;
                        return this.forEach(function (t) {
                            t[i].apply(t, e)
                        })
                    }
                }(i))
            }
        }(),
        function () {
            if (Q.vml) {
                var P = "hasOwnProperty",
                    E = String,
                    z = parseFloat,
                    c = Math,
                    I = c.round,
                    D = c.max,
                    R = c.min,
                    x = c.abs,
                    N = "fill",
                    H = /[, ]+/,
                    p = Q.eve,
                    G = " ",
                    Y = {
                        M: "m",
                        L: "l",
                        C: "c",
                        Z: "x",
                        m: "t",
                        l: "r",
                        c: "v",
                        z: "x"
                    },
                    O = /([clmz]),?([^clmz]*)/gi,
                    r = / progid:\S+Blur\([^\)]+\)/g,
                    W = /-?[^,\s-]+/g,
                    u = "position:absolute;left:0;top:0;width:1px;height:1px",
                    j = 21600,
                    X = {
                        path: 1,
                        rect: 1,
                        image: 1
                    },
                    q = {
                        circle: 1,
                        ellipse: 1
                    },
                    y = function (t, e, i) {
                        var r = Q.matrix();
                        return r.rotate(-t, .5, .5), {
                            dx: r.x(e, i),
                            dy: r.y(e, i)
                        }
                    },
                    V = function (t, e, i, r, n, s) {
                        var o = t._,
                            a = t.matrix,
                            h = o.fillpos,
                            l = t.node,
                            u = l.style,
                            c = 1,
                            p = "",
                            f = j / e,
                            d = j / i;
                        if (u.visibility = "hidden", e && i) {
                            if (l.coordsize = x(f) + G + x(d), u.rotation = s * (e * i < 0 ? -1 : 1), s) {
                                var g = y(s, r, n);
                                r = g.dx, n = g.dy
                            }
                            if (e < 0 && (p += "x"), i < 0 && (p += " y") && (c = -1), u.flip = p, l.coordorigin = r * -f + G + n * -d, h || o.fillsize) {
                                var v = l.getElementsByTagName(N);
                                v = v && v[0], l.removeChild(v), h && (g = y(s, a.x(h[0], h[1]), a.y(h[0], h[1])), v.position = g.dx * c + G + g.dy * c), o.fillsize && (v.size = o.fillsize[0] * x(e) + G + o.fillsize[1] * x(i)), l.appendChild(v)
                            }
                            u.visibility = "visible"
                        }
                    };
                Q.toString = function () {
                    return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
                };
                var U, $ = function (t, e, i) {
                        for (var r = E(e).toLowerCase().split("-"), n = i ? "end" : "start", s = r.length, o = "classic", a = "medium", h = "medium"; s--;) switch (r[s]) {
                            case "block":
                            case "classic":
                            case "oval":
                            case "diamond":
                            case "open":
                            case "none":
                                o = r[s];
                                break;
                            case "wide":
                            case "narrow":
                                h = r[s];
                                break;
                            case "long":
                            case "short":
                                a = r[s]
                        }
                        var l = t.node.getElementsByTagName("stroke")[0];
                        l[n + "arrow"] = o, l[n + "arrowlength"] = a, l[n + "arrowwidth"] = h
                    },
                    f = function (t, e) {
                        t.attrs = t.attrs || {};
                        var i = t.node,
                            r = t.attrs,
                            n = i.style,
                            s = X[t.type] && (e.x != r.x || e.y != r.y || e.width != r.width || e.height != r.height || e.cx != r.cx || e.cy != r.cy || e.rx != r.rx || e.ry != r.ry || e.r != r.r),
                            o = q[t.type] && (r.cx != e.cx || r.cy != e.cy || r.r != e.r || r.rx != e.rx || r.ry != e.ry),
                            a = t;
                        for (var h in e) e[P](h) && (r[h] = e[h]);
                        if (s && (r.path = Q._getPath[t.type](t), t._.dirty = 1), e.href && (i.href = e.href), e.title && (i.title = e.title), e.target && (i.target = e.target), e.cursor && (n.cursor = e.cursor), "blur" in e && t.blur(e.blur), (e.path && "path" == t.type || s) && (i.path = function (t) {
                                var e = /[ahqstv]/gi,
                                    i = Q._pathToAbsolute;
                                if (E(t).match(e) && (i = Q._path2curve), e = /[clmz]/g, i == Q._pathToAbsolute && !E(t).match(e)) {
                                    var r = E(t).replace(O, function (t, e, i) {
                                        var r = [],
                                            n = "m" == e.toLowerCase(),
                                            s = Y[e];
                                        return i.replace(W, function (t) {
                                            n && 2 == r.length && (s += r + Y["m" == e ? "l" : "L"], r = []), r.push(I(t * j))
                                        }), s + r
                                    });
                                    return r
                                }
                                var n, s, o = i(t);
                                r = [];
                                for (var a = 0, h = o.length; a < h; a++) {
                                    n = o[a], "z" == (s = o[a][0].toLowerCase()) && (s = "x");
                                    for (var l = 1, u = n.length; l < u; l++) s += I(n[l] * j) + (l != u - 1 ? "," : "");
                                    r.push(s)
                                }
                                return r.join(G)
                            }(~E(r.path).toLowerCase().indexOf("r") ? Q._pathToAbsolute(r.path) : r.path), "image" == t.type && (t._.fillpos = [r.x, r.y], t._.fillsize = [r.width, r.height], V(t, 1, 1, 0, 0, 0))), "transform" in e && t.transform(e.transform), o) {
                            var l = +r.cx,
                                u = +r.cy,
                                c = +r.rx || +r.r || 0,
                                p = +r.ry || +r.r || 0;
                            i.path = Q.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", I((l - c) * j), I((u - p) * j), I((l + c) * j), I((u + p) * j), I(l * j)), t._.dirty = 1
                        }
                        if ("clip-rect" in e) {
                            var f = E(e["clip-rect"]).split(H);
                            if (4 == f.length) {
                                f[2] = +f[2] + +f[0], f[3] = +f[3] + +f[1];
                                var d = i.clipRect || Q._g.doc.createElement("div"),
                                    g = d.style;
                                g.clip = Q.format("rect({1}px {2}px {3}px {0}px)", f), i.clipRect || (g.position = "absolute", g.top = 0, g.left = 0, g.width = t.paper.width + "px", g.height = t.paper.height + "px", i.parentNode.insertBefore(d, i), d.appendChild(i), i.clipRect = d)
                            }
                            e["clip-rect"] || i.clipRect && (i.clipRect.style.clip = "auto")
                        }
                        if (t.textpath) {
                            var v = t.textpath.style;
                            e.font && (v.font = e.font), e["font-family"] && (v.fontFamily = '"' + e["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, "") + '"'), e["font-size"] && (v.fontSize = e["font-size"]), e["font-weight"] && (v.fontWeight = e["font-weight"]), e["font-style"] && (v.fontStyle = e["font-style"])
                        }
                        if ("arrow-start" in e && $(a, e["arrow-start"]), "arrow-end" in e && $(a, e["arrow-end"], 1), null != e.opacity || null != e["stroke-width"] || null != e.fill || null != e.src || null != e.stroke || null != e["stroke-width"] || null != e["stroke-opacity"] || null != e["fill-opacity"] || null != e["stroke-dasharray"] || null != e["stroke-miterlimit"] || null != e["stroke-linejoin"] || null != e["stroke-linecap"]) {
                            var x = i.getElementsByTagName(N);
                            if (!(x = x && x[0]) && (x = U(N)), "image" == t.type && e.src && (x.src = e.src), e.fill && (x.on = !0), (null == x.on || "none" == e.fill || null === e.fill) && (x.on = !1), x.on && e.fill) {
                                var y = E(e.fill).match(Q._ISURL);
                                if (y) {
                                    x.parentNode == i && i.removeChild(x), x.rotate = !0, x.src = y[1], x.type = "tile";
                                    var m = t.getBBox(1);
                                    x.position = m.x + G + m.y, t._.fillpos = [m.x, m.y], Q._preload(y[1], function () {
                                        t._.fillsize = [this.offsetWidth, this.offsetHeight]
                                    })
                                } else x.color = Q.getRGB(e.fill).hex, x.src = "", x.type = "solid", Q.getRGB(e.fill).error && (a.type in {
                                    circle: 1,
                                    ellipse: 1
                                } || "r" != E(e.fill).charAt()) && Z(a, e.fill, x) && (r.fill = "none", r.gradient = e.fill, x.rotate = !1)
                            }
                            if ("fill-opacity" in e || "opacity" in e) {
                                var b = ((+r["fill-opacity"] + 1 || 2) - 1) * ((+r.opacity + 1 || 2) - 1) * ((+Q.getRGB(e.fill).o + 1 || 2) - 1);
                                b = R(D(b, 0), 1), x.opacity = b, x.src && (x.color = "none")
                            }
                            i.appendChild(x);
                            var w = i.getElementsByTagName("stroke") && i.getElementsByTagName("stroke")[0],
                                _ = !1;
                            !w && (_ = w = U("stroke")), (e.stroke && "none" != e.stroke || e["stroke-width"] || null != e["stroke-opacity"] || e["stroke-dasharray"] || e["stroke-miterlimit"] || e["stroke-linejoin"] || e["stroke-linecap"]) && (w.on = !0), ("none" == e.stroke || null === e.stroke || null == w.on || 0 == e.stroke || 0 == e["stroke-width"]) && (w.on = !1);
                            var k = Q.getRGB(e.stroke);
                            w.on && e.stroke && (w.color = k.hex), b = ((+r["stroke-opacity"] + 1 || 2) - 1) * ((+r.opacity + 1 || 2) - 1) * ((+k.o + 1 || 2) - 1);
                            var C = .75 * (z(e["stroke-width"]) || 1);
                            if (b = R(D(b, 0), 1), null == e["stroke-width"] && (C = r["stroke-width"]), e["stroke-width"] && (w.weight = C), C && C < 1 && (b *= C) && (w.weight = 1), w.opacity = b, e["stroke-linejoin"] && (w.joinstyle = e["stroke-linejoin"] || "miter"), w.miterlimit = e["stroke-miterlimit"] || 8, e["stroke-linecap"] && (w.endcap = "butt" == e["stroke-linecap"] ? "flat" : "square" == e["stroke-linecap"] ? "square" : "round"), e["stroke-dasharray"]) {
                                var S = {
                                    "-": "shortdash",
                                    ".": "shortdot",
                                    "-.": "shortdashdot",
                                    "-..": "shortdashdotdot",
                                    ". ": "dot",
                                    "- ": "dash",
                                    "--": "longdash",
                                    "- .": "dashdot",
                                    "--.": "longdashdot",
                                    "--..": "longdashdotdot"
                                };
                                w.dashstyle = S[P](e["stroke-dasharray"]) ? S[e["stroke-dasharray"]] : ""
                            }
                            _ && i.appendChild(w)
                        }
                        if ("text" == a.type) {
                            a.paper.canvas.style.display = "";
                            var M = a.paper.span,
                                B = r.font && r.font.match(/\d+(?:\.\d*)?(?=px)/);
                            n = M.style, r.font && (n.font = r.font), r["font-family"] && (n.fontFamily = r["font-family"]), r["font-weight"] && (n.fontWeight = r["font-weight"]), r["font-style"] && (n.fontStyle = r["font-style"]), B = z(r["font-size"] || B && B[0]) || 10, n.fontSize = 100 * B + "px", a.textpath.string && (M.innerHTML = E(a.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                            var L = M.getBoundingClientRect();
                            a.W = r.w = (L.right - L.left) / 100, a.H = r.h = (L.bottom - L.top) / 100, a.X = r.x, a.Y = r.y + a.H / 2, ("x" in e || "y" in e) && (a.path.v = Q.format("m{0},{1}l{2},{1}", I(r.x * j), I(r.y * j), I(r.x * j) + 1));
                            for (var F = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], T = 0, A = F.length; T < A; T++)
                                if (F[T] in e) {
                                    a._.dirty = 1;
                                    break
                                } switch (r["text-anchor"]) {
                                case "start":
                                    a.textpath.style["v-text-align"] = "left", a.bbx = a.W / 2;
                                    break;
                                case "end":
                                    a.textpath.style["v-text-align"] = "right", a.bbx = -a.W / 2;
                                    break;
                                default:
                                    a.textpath.style["v-text-align"] = "center", a.bbx = 0
                            }
                            a.textpath.style["v-text-kern"] = !0
                        }
                    },
                    Z = function (t, e, i) {
                        t.attrs = t.attrs || {};
                        var r = (t.attrs, Math.pow),
                            n = "linear",
                            s = ".5 .5";
                        if (t.attrs.gradient = e, e = (e = E(e).replace(Q._radial_gradient, function (t, e, i) {
                                return n = "radial", e && i && (e = z(e), i = z(i), .25 < r(e - .5, 2) + r(i - .5, 2) && (i = c.sqrt(.25 - r(e - .5, 2)) * (2 * (.5 < i) - 1) + .5), s = e + G + i), ""
                            })).split(/\s*\-\s*/), "linear" == n) {
                            var o = e.shift();
                            if (o = -z(o), isNaN(o)) return null
                        }
                        var a = Q._parseDots(e);
                        if (!a) return null;
                        if (t = t.shape || t.node, a.length) {
                            t.removeChild(i), i.on = !0, i.method = "none", i.color = a[0].color, i.color2 = a[a.length - 1].color;
                            for (var h = [], l = 0, u = a.length; l < u; l++) a[l].offset && h.push(a[l].offset + G + a[l].color);
                            i.colors = h.length ? h.join() : "0% " + i.color, "radial" == n ? (i.type = "gradientTitle", i.focus = "100%", i.focussize = "0 0", i.focusposition = s, i.angle = 0) : (i.type = "gradient", i.angle = (270 - o) % 360), t.appendChild(i)
                        }
                        return 1
                    },
                    d = function (t, e) {
                        this[0] = this.node = t, t.raphael = !0, this.id = Q._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = Q.matrix(), this._ = {
                            transform: [],
                            sx: 1,
                            sy: 1,
                            dx: 0,
                            dy: 0,
                            deg: 0,
                            dirty: 1,
                            dirtyT: 1
                        }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), (e.top = this).next = null
                    },
                    t = Q.el;
                (d.prototype = t).constructor = d, t.transform = function (t) {
                    if (null == t) return this._.transform;
                    var e, i = this.paper._viewBoxShift,
                        r = i ? "s" + [i.scale, i.scale] + "-1-1t" + [i.dx, i.dy] : "";
                    i && (e = t = E(t).replace(/\.{3}|\u2026/g, this._.transform || "")), Q._extractTransform(this, r + t);
                    var n, s = this.matrix.clone(),
                        o = this.skew,
                        a = this.node,
                        h = ~E(this.attrs.fill).indexOf("-"),
                        l = !E(this.attrs.fill).indexOf("url(");
                    if (s.translate(1, 1), l || h || "image" == this.type)
                        if (o.matrix = "1 0 0 1", o.offset = "0 0", n = s.split(), h && n.noRotation || !n.isSimple) {
                            a.style.filter = s.toFilter();
                            var u = this.getBBox(),
                                c = this.getBBox(1),
                                p = u.x - c.x,
                                f = u.y - c.y;
                            a.coordorigin = p * -j + G + f * -j, V(this, 1, 1, p, f, 0)
                        } else a.style.filter = "", V(this, n.scalex, n.scaley, n.dx, n.dy, n.rotate);
                    else a.style.filter = "", o.matrix = E(s), o.offset = s.offset();
                    return e && (this._.transform = e), this
                }, t.rotate = function (t, e, i) {
                    if (this.removed) return this;
                    if (null != t) {
                        if ((t = E(t).split(H)).length - 1 && (e = z(t[1]), i = z(t[2])), t = z(t[0]), null == i && (e = i), null == e || null == i) {
                            var r = this.getBBox(1);
                            e = r.x + r.width / 2, i = r.y + r.height / 2
                        }
                        return this._.dirtyT = 1, this.transform(this._.transform.concat([
                            ["r", t, e, i]
                        ])), this
                    }
                }, t.translate = function (t, e) {
                    return this.removed || ((t = E(t).split(H)).length - 1 && (e = z(t[1])), t = z(t[0]) || 0, e = +e || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += e), this.transform(this._.transform.concat([
                        ["t", t, e]
                    ]))), this
                }, t.scale = function (t, e, i, r) {
                    if (this.removed) return this;
                    if ((t = E(t).split(H)).length - 1 && (e = z(t[1]), i = z(t[2]), r = z(t[3]), isNaN(i) && (i = null), isNaN(r) && (r = null)), t = z(t[0]), null == e && (e = t), null == r && (i = r), null == i || null == r) var n = this.getBBox(1);
                    return i = null == i ? n.x + n.width / 2 : i, r = null == r ? n.y + n.height / 2 : r, this.transform(this._.transform.concat([
                        ["s", t, e, i, r]
                    ])), this._.dirtyT = 1, this
                }, t.hide = function () {
                    return !this.removed && (this.node.style.display = "none"), this
                }, t.show = function () {
                    return !this.removed && (this.node.style.display = ""), this
                }, t._getBBox = function () {
                    return this.removed ? {} : {
                        x: this.X + (this.bbx || 0) - this.W / 2,
                        y: this.Y - this.H,
                        width: this.W,
                        height: this.H
                    }
                }, t.remove = function () {
                    if (!this.removed && this.node.parentNode) {
                        for (var t in this.paper.__set__ && this.paper.__set__.exclude(this), Q.eve.unbind("raphael.*.*." + this.id), Q._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape), this) this[t] = "function" == typeof this[t] ? Q._removedFactory(t) : null;
                        this.removed = !0
                    }
                }, t.attr = function (t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                        var i = {};
                        for (var r in this.attrs) this.attrs[P](r) && (i[r] = this.attrs[r]);
                        return i.gradient && "none" == i.fill && (i.fill = i.gradient) && delete i.gradient, i.transform = this._.transform, i
                    }
                    if (null == e && Q.is(t, "string")) {
                        if (t == N && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
                        for (var n = t.split(H), s = {}, o = 0, a = n.length; o < a; o++) s[t = n[o]] = t in this.attrs ? this.attrs[t] : Q.is(this.paper.customAttributes[t], "function") ? this.paper.customAttributes[t].def : Q._availableAttrs[t];
                        return a - 1 ? s : s[n[0]]
                    }
                    if (this.attrs && null == e && Q.is(t, "array")) {
                        for (s = {}, o = 0, a = t.length; o < a; o++) s[t[o]] = this.attr(t[o]);
                        return s
                    }
                    var h;
                    for (var l in null != e && ((h = {})[t] = e), null == e && Q.is(t, "object") && (h = t), h) p("raphael.attr." + l + "." + this.id, this, h[l]);
                    if (h) {
                        for (l in this.paper.customAttributes)
                            if (this.paper.customAttributes[P](l) && h[P](l) && Q.is(this.paper.customAttributes[l], "function")) {
                                var u = this.paper.customAttributes[l].apply(this, [].concat(h[l]));
                                for (var c in this.attrs[l] = h[l], u) u[P](c) && (h[c] = u[c])
                            } h.text && "text" == this.type && (this.textpath.string = h.text), f(this, h)
                    }
                    return this
                }, t.toFront = function () {
                    return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && Q._tofront(this, this.paper), this
                }, t.toBack = function () {
                    return this.removed || this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), Q._toback(this, this.paper)), this
                }, t.insertAfter = function (t) {
                    return this.removed || (t.constructor == Q.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), Q._insertafter(this, t, this.paper)), this
                }, t.insertBefore = function (t) {
                    return this.removed || (t.constructor == Q.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), Q._insertbefore(this, t, this.paper)), this
                }, t.blur = function (t) {
                    var e = this.node.runtimeStyle,
                        i = e.filter;
                    return i = i.replace(r, ""), 0 != +t ? (this.attrs.blur = t, e.filter = i + G + " progid:DXImageTransform.Microsoft.Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = Q.format("-{0}px 0 0 -{0}px", I(+t || 1.5))) : (e.filter = i, e.margin = 0, delete this.attrs.blur), this
                }, Q._engine.path = function (t, e) {
                    var i = U("shape");
                    i.style.cssText = u, i.coordsize = j + G + j, i.coordorigin = e.coordorigin;
                    var r = new d(i, e),
                        n = {
                            fill: "none",
                            stroke: "#000"
                        };
                    t && (n.path = t), r.type = "path", r.path = [], r.Path = "", f(r, n), e.canvas.appendChild(i);
                    var s = U("skew");
                    return s.on = !0, i.appendChild(s), r.skew = s, r.transform(""), r
                }, Q._engine.rect = function (t, e, i, r, n, s) {
                    var o = Q._rectPath(e, i, r, n, s),
                        a = t.path(o),
                        h = a.attrs;
                    return a.X = h.x = e, a.Y = h.y = i, a.W = h.width = r, a.H = h.height = n, h.r = s, h.path = o, a.type = "rect", a
                }, Q._engine.ellipse = function (t, e, i, r, n) {
                    var s = t.path();
                    return s.attrs, s.X = e - r, s.Y = i - n, s.W = 2 * r, s.H = 2 * n, s.type = "ellipse", f(s, {
                        cx: e,
                        cy: i,
                        rx: r,
                        ry: n
                    }), s
                }, Q._engine.circle = function (t, e, i, r) {
                    var n = t.path();
                    return n.attrs, n.X = e - r, n.Y = i - r, n.W = n.H = 2 * r, n.type = "circle", f(n, {
                        cx: e,
                        cy: i,
                        r: r
                    }), n
                }, Q._engine.image = function (t, e, i, r, n, s) {
                    var o = Q._rectPath(i, r, n, s),
                        a = t.path(o).attr({
                            stroke: "none"
                        }),
                        h = a.attrs,
                        l = a.node,
                        u = l.getElementsByTagName(N)[0];
                    return h.src = e, a.X = h.x = i, a.Y = h.y = r, a.W = h.width = n, a.H = h.height = s, h.path = o, a.type = "image", u.parentNode == l && l.removeChild(u), u.rotate = !0, u.src = e, u.type = "tile", a._.fillpos = [i, r], a._.fillsize = [n, s], l.appendChild(u), V(a, 1, 1, 0, 0, 0), a
                }, Q._engine.text = function (t, e, i, r) {
                    var n = U("shape"),
                        s = U("path"),
                        o = U("textpath");
                    e = e || 0, i = i || 0, r = r || "", s.v = Q.format("m{0},{1}l{2},{1}", I(e * j), I(i * j), I(e * j) + 1), s.textpathok = !0, o.string = E(r), o.on = !0, n.style.cssText = u, n.coordsize = j + G + j, n.coordorigin = "0 0";
                    var a = new d(n, t),
                        h = {
                            fill: "#000",
                            stroke: "none",
                            font: Q._availableAttrs.font,
                            text: r
                        };
                    a.shape = n, a.path = s, a.textpath = o, a.type = "text", a.attrs.text = E(r), a.attrs.x = e, a.attrs.y = i, a.attrs.w = 1, a.attrs.h = 1, f(a, h), n.appendChild(o), n.appendChild(s), t.canvas.appendChild(n);
                    var l = U("skew");
                    return l.on = !0, n.appendChild(l), a.skew = l, a.transform(""), a
                }, Q._engine.setSize = function (t, e) {
                    var i = this.canvas.style;
                    return (this.width = t) == +t && (t += "px"), (this.height = e) == +e && (e += "px"), i.width = t, i.height = e, i.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && Q._engine.setViewBox.apply(this, this._viewBox), this
                }, Q._engine.setViewBox = function (t, e, i, r, n) {
                    Q.eve("raphael.setViewBox", this, this._viewBox, [t, e, i, r, n]);
                    var s, o, a = this.width,
                        h = this.height,
                        l = 1 / D(i / a, r / h);
                    return n && (i * (s = h / r) < a && (t -= (a - i * s) / 2 / s), r * (o = a / i) < h && (e -= (h - r * o) / 2 / o)), this._viewBox = [t, e, i, r, !!n], this._viewBoxShift = {
                        dx: -t,
                        dy: -e,
                        scale: l
                    }, this.forEach(function (t) {
                        t.transform("...")
                    }), this
                }, Q._engine.initWin = function (t) {
                    var e = t.document;
                    e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                        !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), U = function (t) {
                            return e.createElement("<rvml:" + t + ' class="rvml">')
                        }
                    } catch (t) {
                        U = function (t) {
                            return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
                        }
                    }
                }, Q._engine.initWin(Q._g.win), Q._engine.create = function () {
                    var t = Q._getContainer.apply(0, arguments),
                        e = t.container,
                        i = t.height,
                        r = t.width,
                        n = t.x,
                        s = t.y;
                    if (!e) throw new Error("VML container not found.");
                    var o = new Q._Paper,
                        a = o.canvas = Q._g.doc.createElement("div"),
                        h = a.style;
                    return n = n || 0, s = s || 0, r = r || 512, i = i || 342, (o.width = r) == +r && (r += "px"), (o.height = i) == +i && (i += "px"), o.coordsize = 216e5 + G + 216e5, o.coordorigin = "0 0", o.span = Q._g.doc.createElement("span"), o.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", a.appendChild(o.span), h.cssText = Q.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", r, i), 1 == e ? (Q._g.doc.body.appendChild(a), h.left = n + "px", h.top = s + "px", h.position = "absolute") : e.firstChild ? e.insertBefore(a, e.firstChild) : e.appendChild(a), o.renderfix = function () {}, o
                }, Q.prototype.clear = function () {
                    Q.eve("raphael.clear", this), this.canvas.innerHTML = "", this.span = Q._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
                }, Q.prototype.remove = function () {
                    for (var t in Q.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas), this) this[t] = "function" == typeof this[t] ? Q._removedFactory(t) : null;
                    return !0
                };
                var e = Q.st;
                for (var i in t) t[P](i) && !e[P](i) && (e[i] = function (i) {
                    return function () {
                        var e = arguments;
                        return this.forEach(function (t) {
                            t[i].apply(t, e)
                        })
                    }
                }(i))
            }
        }(), p.was ? d.win.Raphael = Q : Raphael = Q, Q
}),
function () {
    var v, _, t, e, a = [].slice,
        u = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        },
        n = {}.hasOwnProperty,
        s = function (t, e) {
            function i() {
                this.constructor = t
            }
            for (var r in e) n.call(e, r) && (t[r] = e[r]);
            return i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype, t
        },
        h = [].indexOf || function (t) {
            for (var e = 0, i = this.length; e < i; e++)
                if (e in this && this[e] === t) return e;
            return -1
        };
    _ = window.Morris = {}, v = jQuery, _.EventEmitter = function () {
        function t() {}
        return t.prototype.on = function (t, e) {
            return null == this.handlers && (this.handlers = {}), null == this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this
        }, t.prototype.fire = function () {
            var t, e, i, r, n, s, o;
            if (i = arguments[0], t = 2 <= arguments.length ? a.call(arguments, 1) : [], null != this.handlers && null != this.handlers[i]) {
                for (o = [], r = 0, n = (s = this.handlers[i]).length; r < n; r++) e = s[r], o.push(e.apply(null, t));
                return o
            }
        }, t
    }(), _.commas = function (t) {
        var e, i, r, n;
        return null != t ? (r = t < 0 ? "-" : "", e = Math.abs(t), r += (i = Math.floor(e).toFixed(0)).replace(/(?=(?:\d{3})+$)(?!^)/g, ","), (n = e.toString()).length > i.length && (r += n.slice(i.length)), r) : "-"
    }, _.pad2 = function (t) {
        return (t < 10 ? "0" : "") + t
    }, _.Grid = function (t) {
        function e(t) {
            this.resizeHandler = u(this.resizeHandler, this);
            var s = this;
            if (this.el = "string" == typeof t.element ? v(document.getElementById(t.element)) : v(t.element), null == this.el || 0 === this.el.length) throw new Error("Graph container element not found");
            "static" === this.el.css("position") && this.el.css("position", "relative"), this.options = v.extend({}, this.gridDefaults, this.defaults || {}, t), "string" == typeof this.options.units && (this.options.postUnits = t.units), this.raphael = new Raphael(this.el[0]), this.elementWidth = null, this.elementHeight = null, this.dirty = !1, this.selectFrom = null, this.init && this.init(), this.setData(this.options.data), this.el.bind("mousemove", function (t) {
                var e, i, r, n;
                return i = s.el.offset(), n = t.pageX - i.left, s.selectFrom ? (e = s.data[s.hitTest(Math.min(n, s.selectFrom))]._x, r = s.data[s.hitTest(Math.max(n, s.selectFrom))]._x - e, s.selectionRect.attr({
                    x: e,
                    width: r
                })) : s.fire("hovermove", n, t.pageY - i.top)
            }), this.el.bind("mouseleave", function () {
                return s.selectFrom && (s.selectionRect.hide(), s.selectFrom = null), s.fire("hoverout")
            }), this.el.bind("touchstart touchmove touchend", function (t) {
                var e, i;
                return i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], e = s.el.offset(), s.fire("hovermove", i.pageX - e.left, i.pageY - e.top)
            }), this.el.bind("click", function (t) {
                var e;
                return e = s.el.offset(), s.fire("gridclick", t.pageX - e.left, t.pageY - e.top)
            }), this.options.rangeSelect && (this.selectionRect = this.raphael.rect(0, 0, 0, this.el.innerHeight()).attr({
                fill: this.options.rangeSelectColor,
                stroke: !1
            }).toBack().hide(), this.el.bind("mousedown", function (t) {
                var e;
                return e = s.el.offset(), s.startRange(t.pageX - e.left)
            }), this.el.bind("mouseup", function (t) {
                var e;
                return e = s.el.offset(), s.endRange(t.pageX - e.left), s.fire("hovermove", t.pageX - e.left, t.pageY - e.top)
            })), this.options.resize && v(window).bind("resize", function () {
                return null != s.timeoutId && window.clearTimeout(s.timeoutId), s.timeoutId = window.setTimeout(s.resizeHandler, 100)
            }), this.el.css("-webkit-tap-highlight-color", "rgba(0,0,0,0)"), this.postInit && this.postInit()
        }
        return s(e, t), e.prototype.gridDefaults = {
            dateFormat: null,
            axes: !0,
            grid: !0,
            gridLineColor: "#aaa",
            gridStrokeWidth: .5,
            gridTextColor: "#888",
            gridTextSize: 12,
            gridTextFamily: "sans-serif",
            gridTextWeight: "normal",
            hideHover: !1,
            yLabelFormat: null,
            xLabelAngle: 0,
            numLines: 5,
            padding: 25,
            parseTime: !0,
            postUnits: "",
            preUnits: "",
            ymax: "auto",
            ymin: "auto 0",
            goals: [],
            goalStrokeWidth: 1,
            goalLineColors: ["#666633", "#999966", "#cc6666", "#663333"],
            events: [],
            eventStrokeWidth: 1,
            eventLineColors: ["#005a04", "#ccffbb", "#3a5f0b", "#005502"],
            rangeSelect: null,
            rangeSelectColor: "#eef",
            resize: !1
        }, e.prototype.setData = function (r, t) {
            var n, s, o, e, i, a, h, l, u, c, p, f, d, g, v;
            return null == t && (t = !0), null == (this.options.data = r) || 0 === r.length ? (this.data = [], this.raphael.clear(), void(null != this.hover && this.hover.hide())) : (f = this.cumulative ? 0 : null, d = this.cumulative ? 0 : null, 0 < this.options.goals.length && (i = Math.min.apply(Math, this.options.goals), e = Math.max.apply(Math, this.options.goals), d = null != d ? Math.min(d, i) : i, f = null != f ? Math.max(f, e) : e), this.data = function () {
                var t, e, i;
                for (i = [], o = t = 0, e = r.length; t < e; o = ++t) h = r[o], (a = {
                    src: h
                }).label = h[this.options.xkey], this.options.parseTime ? (a.x = _.parseDate(a.label), this.options.dateFormat ? a.label = this.options.dateFormat(a.x) : "number" == typeof a.label && (a.label = new Date(a.label).toString())) : (a.x = o, this.options.xLabelFormat && (a.label = this.options.xLabelFormat(a))), u = 0, a.y = function () {
                    var t, e, i, r;
                    for (i = this.options.ykeys, r = [], s = t = 0, e = i.length; t < e; s = ++t) p = i[s], "string" == typeof (g = h[p]) && (g = parseFloat(g)), null != g && "number" != typeof g && (g = null), null != g && (this.cumulative ? u += g : null != f ? (f = Math.max(g, f), d = Math.min(g, d)) : f = d = g), this.cumulative && null != u && (f = Math.max(u, f), d = Math.min(u, d)), r.push(g);
                    return r
                }.call(this), i.push(a);
                return i
            }.call(this), this.options.parseTime && (this.data = this.data.sort(function (t, e) {
                return (t.x > e.x) - (e.x > t.x)
            })), this.xmin = this.data[0].x, this.xmax = this.data[this.data.length - 1].x, this.events = [], 0 < this.options.events.length && (this.events = this.options.parseTime ? function () {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = this.options.events).length; t < e; t++) n = i[t], r.push(_.parseDate(n));
                return r
            }.call(this) : this.options.events, this.xmax = Math.max(this.xmax, Math.max.apply(Math, this.events)), this.xmin = Math.min(this.xmin, Math.min.apply(Math, this.events))), this.xmin === this.xmax && (this.xmin -= 1, this.xmax += 1), this.ymin = this.yboundary("min", d), this.ymax = this.yboundary("max", f), this.ymin === this.ymax && (d && (this.ymin -= 1), this.ymax += 1), (!0 === (v = this.options.axes) || "both" === v || "y" === v || !0 === this.options.grid) && (this.options.ymax === this.gridDefaults.ymax && this.options.ymin === this.gridDefaults.ymin ? (this.grid = this.autoGridLines(this.ymin, this.ymax, this.options.numLines), this.ymin = Math.min(this.ymin, this.grid[0]), this.ymax = Math.max(this.ymax, this.grid[this.grid.length - 1])) : (l = (this.ymax - this.ymin) / (this.options.numLines - 1), this.grid = function () {
                var t, e, i;
                for (i = [], c = t = this.ymin, e = this.ymax; 0 < l ? t <= e : e <= t; c = t += l) i.push(c);
                return i
            }.call(this))), this.dirty = !0, t ? this.redraw() : void 0)
        }, e.prototype.yboundary = function (t, e) {
            var i, r;
            return "string" == typeof (i = this.options["y" + t]) ? "auto" === i.slice(0, 4) ? 5 < i.length ? (r = parseInt(i.slice(5), 10), null == e ? r : Math[t](e, r)) : null != e ? e : 0 : parseInt(i, 10) : i
        }, e.prototype.autoGridLines = function (t, e, i) {
            var r, n, s, o, a, h, l, u, c;
            return a = e - t, c = Math.floor(Math.log(a) / Math.log(10)), l = Math.pow(10, c), n = Math.floor(t / l) * l, r = Math.ceil(e / l) * l, h = (r - n) / (i - 1), 1 === l && 1 < h && Math.ceil(h) !== h && (h = Math.ceil(h), r = n + h * (i - 1)), n < 0 && 0 < r && (n = Math.floor(t / h) * h, r = Math.ceil(e / h) * h), h < 1 ? (o = Math.floor(Math.log(h) / Math.log(10)), s = function () {
                var t, e;
                for (e = [], u = t = n; 0 < h ? t <= r : r <= t; u = t += h) e.push(parseFloat(u.toFixed(1 - o)));
                return e
            }()) : s = function () {
                var t, e;
                for (e = [], u = t = n; 0 < h ? t <= r : r <= t; u = t += h) e.push(u);
                return e
            }(), s
        }, e.prototype._calc = function () {
            var t, n, e, r, i, s, o, a;
            return i = this.el.width(), e = this.el.height(), (this.elementWidth !== i || this.elementHeight !== e || this.dirty) && (this.elementWidth = i, this.elementHeight = e, this.dirty = !1, this.left = this.options.padding, this.right = this.elementWidth - this.options.padding, this.top = this.options.padding, this.bottom = this.elementHeight - this.options.padding, (!0 === (o = this.options.axes) || "both" === o || "y" === o) && (s = function () {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = this.grid).length; t < e; t++) n = i[t], r.push(this.measureText(this.yAxisFormat(n)).width);
                return r
            }.call(this), this.left += Math.max.apply(Math, s)), (!0 === (a = this.options.axes) || "both" === a || "x" === a) && (t = function () {
                var t, e, i;
                for (i = [], r = t = 0, e = this.data.length; 0 <= e ? t < e : e < t; r = 0 <= e ? ++t : --t) i.push(this.measureText(this.data[r].text, -this.options.xLabelAngle).height);
                return i
            }.call(this), this.bottom -= Math.max.apply(Math, t)), this.width = Math.max(1, this.right - this.left), this.height = Math.max(1, this.bottom - this.top), this.dx = this.width / (this.xmax - this.xmin), this.dy = this.height / (this.ymax - this.ymin), this.calc) ? this.calc() : void 0
        }, e.prototype.transY = function (t) {
            return this.bottom - (t - this.ymin) * this.dy
        }, e.prototype.transX = function (t) {
            return 1 === this.data.length ? (this.left + this.right) / 2 : this.left + (t - this.xmin) * this.dx
        }, e.prototype.redraw = function () {
            return this.raphael.clear(), this._calc(), this.drawGrid(), this.drawGoals(), this.drawEvents(), this.draw ? this.draw() : void 0
        }, e.prototype.measureText = function (t, e) {
            var i, r;
            return null == e && (e = 0), i = (r = this.raphael.text(100, 100, t).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).rotate(e)).getBBox(), r.remove(), i
        }, e.prototype.yAxisFormat = function (t) {
            return this.yLabelFormat(t)
        }, e.prototype.yLabelFormat = function (t) {
            return "function" == typeof this.options.yLabelFormat ? this.options.yLabelFormat(t) : "" + this.options.preUnits + _.commas(t) + this.options.postUnits
        }, e.prototype.drawGrid = function () {
            var t, e, i, r, n, s, o, a;
            if (!1 !== this.options.grid || !0 === (n = this.options.axes) || "both" === n || "y" === n) {
                for (a = [], i = 0, r = (s = this.grid).length; i < r; i++) t = s[i], e = this.transY(t), (!0 === (o = this.options.axes) || "both" === o || "y" === o) && this.drawYAxisLabel(this.left - this.options.padding / 2, e, this.yAxisFormat(t)), this.options.grid ? a.push(this.drawGridLine("M" + this.left + "," + e + "H" + (this.left + this.width))) : a.push(void 0);
                return a
            }
        }, e.prototype.drawGoals = function () {
            var t, e, i, r, n, s, o;
            for (o = [], i = r = 0, n = (s = this.options.goals).length; r < n; i = ++r) e = s[i], t = this.options.goalLineColors[i % this.options.goalLineColors.length], o.push(this.drawGoal(e, t));
            return o
        }, e.prototype.drawEvents = function () {
            var t, e, i, r, n, s, o;
            for (o = [], i = r = 0, n = (s = this.events).length; r < n; i = ++r) e = s[i], t = this.options.eventLineColors[i % this.options.eventLineColors.length], o.push(this.drawEvent(e, t));
            return o
        }, e.prototype.drawGoal = function (t, e) {
            return this.raphael.path("M" + this.left + "," + this.transY(t) + "H" + this.right).attr("stroke", e).attr("stroke-width", this.options.goalStrokeWidth)
        }, e.prototype.drawEvent = function (t, e) {
            return this.raphael.path("M" + this.transX(t) + "," + this.bottom + "V" + this.top).attr("stroke", e).attr("stroke-width", this.options.eventStrokeWidth)
        }, e.prototype.drawYAxisLabel = function (t, e, i) {
            return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor).attr("text-anchor", "end")
        }, e.prototype.drawGridLine = function (t) {
            return this.raphael.path(t).attr("stroke", this.options.gridLineColor).attr("stroke-width", this.options.gridStrokeWidth)
        }, e.prototype.startRange = function (t) {
            return this.hover.hide(), this.selectFrom = t, this.selectionRect.attr({
                x: t,
                width: 0
            }).show()
        }, e.prototype.endRange = function (t) {
            var e, i;
            return this.selectFrom ? (i = Math.min(this.selectFrom, t), e = Math.max(this.selectFrom, t), this.options.rangeSelect.call(this.el, {
                start: this.data[this.hitTest(i)].x,
                end: this.data[this.hitTest(e)].x
            }), this.selectFrom = null) : void 0
        }, e.prototype.resizeHandler = function () {
            return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
        }, e
    }(_.EventEmitter), _.parseDate = function (t) {
        var e, i, r, n, s, o, a, h, l, u, c;
        return "number" == typeof t ? t : (i = t.match(/^(\d+) Q(\d)$/), n = t.match(/^(\d+)-(\d+)$/), s = t.match(/^(\d+)-(\d+)-(\d+)$/), a = t.match(/^(\d+) W(\d+)$/), h = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+)(Z|([+-])(\d\d):?(\d\d))?$/), l = t.match(/^(\d+)-(\d+)-(\d+)[ T](\d+):(\d+):(\d+(\.\d+)?)(Z|([+-])(\d\d):?(\d\d))?$/), i ? new Date(parseInt(i[1], 10), 3 * parseInt(i[2], 10) - 1, 1).getTime() : n ? new Date(parseInt(n[1], 10), parseInt(n[2], 10) - 1, 1).getTime() : s ? new Date(parseInt(s[1], 10), parseInt(s[2], 10) - 1, parseInt(s[3], 10)).getTime() : a ? (4 !== (u = new Date(parseInt(a[1], 10), 0, 1)).getDay() && u.setMonth(0, 1 + (4 - u.getDay() + 7) % 7), u.getTime() + 6048e5 * parseInt(a[2], 10)) : h ? h[6] ? (o = 0, "Z" !== h[6] && (o = 60 * parseInt(h[8], 10) + parseInt(h[9], 10), "+" === h[7] && (o = 0 - o)), Date.UTC(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10) + o)) : new Date(parseInt(h[1], 10), parseInt(h[2], 10) - 1, parseInt(h[3], 10), parseInt(h[4], 10), parseInt(h[5], 10)).getTime() : l ? (c = parseFloat(l[6]), e = Math.floor(c), r = Math.round(1e3 * (c - e)), l[8] ? (o = 0, "Z" !== l[8] && (o = 60 * parseInt(l[10], 10) + parseInt(l[11], 10), "+" === l[9] && (o = 0 - o)), Date.UTC(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10) + o, e, r)) : new Date(parseInt(l[1], 10), parseInt(l[2], 10) - 1, parseInt(l[3], 10), parseInt(l[4], 10), parseInt(l[5], 10), e, r).getTime()) : new Date(parseInt(t, 10), 0, 1).getTime())
    }, _.Hover = function () {
        function t(t) {
            null == t && (t = {}), this.options = v.extend({}, _.Hover.defaults, t), this.el = v("<div class='" + this.options.class + "'></div>"), this.el.hide(), this.options.parent.append(this.el)
        }
        return t.defaults = {
            class: "morris-hover morris-default-style"
        }, t.prototype.update = function (t, e, i) {
            return t ? (this.html(t), this.show(), this.moveTo(e, i)) : this.hide()
        }, t.prototype.html = function (t) {
            return this.el.html(t)
        }, t.prototype.moveTo = function (t, e) {
            var i, r, n, s, o, a;
            return o = this.options.parent.innerWidth(), s = this.options.parent.innerHeight(), r = this.el.outerWidth(), i = this.el.outerHeight(), n = Math.min(Math.max(0, t - r / 2), o - r), null != e ? (a = e - i - 10) < 0 && (s < (a = e + 10) + i && (a = s / 2 - i / 2)) : a = s / 2 - i / 2, this.el.css({
                left: n + "px",
                top: parseInt(a) + "px"
            })
        }, t.prototype.show = function () {
            return this.el.show()
        }, t.prototype.hide = function () {
            return this.el.hide()
        }, t
    }(), _.Line = function (t) {
        function e(t) {
            return this.hilight = u(this.hilight, this), this.onHoverOut = u(this.onHoverOut, this), this.onHoverMove = u(this.onHoverMove, this), this.onGridClick = u(this.onGridClick, this), this instanceof _.Line ? void e.__super__.constructor.call(this, t) : new _.Line(t)
        }
        return s(e, t), e.prototype.init = function () {
            return "always" !== this.options.hideHover ? (this.hover = new _.Hover({
                parent: this.el
            }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0
        }, e.prototype.defaults = {
            lineWidth: 3,
            pointSize: 4,
            lineColors: ["#0b62a4", "#7A92A3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
            pointStrokeWidths: [1],
            pointStrokeColors: ["#ffffff"],
            pointFillColors: [],
            smooth: !0,
            xLabels: "auto",
            xLabelFormat: null,
            xLabelMargin: 24,
            hideHover: !1
        }, e.prototype.calc = function () {
            return this.calcPoints(), this.generatePaths()
        }, e.prototype.calcPoints = function () {
            var n, s, t, e, i, r;
            for (r = [], t = 0, e = (i = this.data).length; t < e; t++)(n = i[t])._x = this.transX(n.x), n._y = function () {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n.y).length; t < e; t++) null != (s = i[t]) ? r.push(this.transY(s)) : r.push(s);
                return r
            }.call(this), r.push(n._ymax = Math.min.apply(Math, [this.bottom].concat(function () {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n._y).length; t < e; t++) null != (s = i[t]) && r.push(s);
                return r
            }())));
            return r
        }, e.prototype.hitTest = function (t) {
            var e, i, r, n;
            if (0 === this.data.length) return null;
            for (e = i = 0, r = (n = this.data.slice(1)).length; i < r && !(t < (n[e]._x + this.data[e]._x) / 2); e = ++i);
            return e
        }, e.prototype.onGridClick = function (t, e) {
            var i;
            return i = this.hitTest(t), this.fire("click", i, this.data[i].src, t, e)
        }, e.prototype.onHoverMove = function (t) {
            var e;
            return e = this.hitTest(t), this.displayHoverForRow(e)
        }, e.prototype.onHoverOut = function () {
            return !1 !== this.options.hideHover ? this.displayHoverForRow(null) : void 0
        }, e.prototype.displayHoverForRow = function (t) {
            var e;
            return null != t ? ((e = this.hover).update.apply(e, this.hoverContentForRow(t)), this.hilight(t)) : (this.hover.hide(), this.hilight())
        }, e.prototype.hoverContentForRow = function (t) {
            var e, i, r, n, s, o, a;
            for (e = "<div class='morris-hover-row-label'>" + (r = this.data[t]).label + "</div>", i = s = 0, o = (a = r.y).length; s < o; i = ++s) n = a[i], e += "<div class='morris-hover-point' style='color: " + this.colorFor(r, i, "label") + "'>\n  " + this.options.labels[i] + ":\n  " + this.yLabelFormat(n) + "\n</div>";
            return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, r.src)), [e, r._x, r._ymax]
        }, e.prototype.generatePaths = function () {
            var n, s, o, a;
            return this.paths = function () {
                var t, e, i, r;
                for (r = [], s = t = 0, e = this.options.ykeys.length; 0 <= e ? t < e : e < t; s = 0 <= e ? ++t : --t) a = "boolean" == typeof this.options.smooth ? this.options.smooth : (i = this.options.ykeys[s], 0 <= h.call(this.options.smooth, i)), 1 < (n = function () {
                    var t, e, i, r;
                    for (r = [], t = 0, e = (i = this.data).length; t < e; t++) void 0 !== (o = i[t])._y[s] && r.push({
                        x: o._x,
                        y: o._y[s]
                    });
                    return r
                }.call(this)).length ? r.push(_.Line.createPath(n, a, this.bottom)) : r.push(null);
                return r
            }.call(this)
        }, e.prototype.draw = function () {
            var t;
            return (!0 === (t = this.options.axes) || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries(), !1 === this.options.hideHover ? this.displayHoverForRow(this.data.length - 1) : void 0
        }, e.prototype.drawXAxis = function () {
            var t, e, i, a, h, n, l, r, s, o, u = this;
            for (l = this.bottom + this.options.padding / 2, a = h = null, t = function (t, e) {
                    var i, r, n, s, o;
                    return o = (i = u.drawXAxisLabel(u.transX(e), l, t)).getBBox(), i.transform("r" + -u.options.xLabelAngle), r = i.getBBox(), i.transform("t0," + r.height / 2 + "..."), 0 !== u.options.xLabelAngle && (s = -.5 * o.width * Math.cos(u.options.xLabelAngle * Math.PI / 180), i.transform("t" + s + ",0...")), r = i.getBBox(), (null == h || h >= r.x + r.width || null != a && a >= r.x) && 0 <= r.x && r.x + r.width < u.el.width() ? (0 !== u.options.xLabelAngle && (n = 1.25 * u.options.gridTextSize / Math.sin(u.options.xLabelAngle * Math.PI / 180), a = r.x - n), h = r.x - u.options.xLabelMargin) : i.remove()
                }, (i = this.options.parseTime ? 1 === this.data.length && "auto" === this.options.xLabels ? [
                    [this.data[0].label, this.data[0].x]
                ] : _.labelSeries(this.xmin, this.xmax, this.width, this.options.xLabels, this.options.xLabelFormat) : function () {
                    var t, e, i, r;
                    for (r = [], t = 0, e = (i = this.data).length; t < e; t++) n = i[t], r.push([n.label, n.x]);
                    return r
                }.call(this)).reverse(), o = [], r = 0, s = i.length; r < s; r++) e = i[r], o.push(t(e[0], e[1]));
            return o
        }, e.prototype.drawSeries = function () {
            var t, e, i, r, n, s;
            for (this.seriesPoints = [], t = e = r = this.options.ykeys.length - 1; r <= 0 ? e <= 0 : 0 <= e; t = r <= 0 ? ++e : --e) this._drawLineFor(t);
            for (s = [], t = i = n = this.options.ykeys.length - 1; n <= 0 ? i <= 0 : 0 <= i; t = n <= 0 ? ++i : --i) s.push(this._drawPointFor(t));
            return s
        }, e.prototype._drawPointFor = function (t) {
            var e, i, r, n, s, o;
            for (this.seriesPoints[t] = [], o = [], r = 0, n = (s = this.data).length; r < n; r++)(e = null) != (i = s[r])._y[t] && (e = this.drawLinePoint(i._x, i._y[t], this.colorFor(i, t, "point"), t)), o.push(this.seriesPoints[t].push(e));
            return o
        }, e.prototype._drawLineFor = function (t) {
            var e;
            return null !== (e = this.paths[t]) ? this.drawLinePath(e, this.colorFor(null, t, "line"), t) : void 0
        }, e.createPath = function (t, e, i) {
            var r, n, s, o, a, h, l, u, c, p;
            for (l = "", e && (s = _.Line.gradients(t)), u = {
                    y: null
                }, o = c = 0, p = t.length; c < p; o = ++c) null != (r = t[o]).y && (null != u.y ? e ? (n = s[o], h = s[o - 1], a = (r.x - u.x) / 4, l += "C" + (u.x + a) + "," + Math.min(i, u.y + a * h) + "," + (r.x - a) + "," + Math.min(i, r.y - a * n) + "," + r.x + "," + r.y) : l += "L" + r.x + "," + r.y : e && null == s[o] || (l += "M" + r.x + "," + r.y)), u = r;
            return l
        }, e.gradients = function (t) {
            var e, i, r, n, s, o, a, h;
            for (i = function (t, e) {
                    return (t.y - e.y) / (t.x - e.x)
                }, h = [], r = o = 0, a = t.length; o < a; r = ++o) null != (e = t[r]).y ? (n = t[r + 1] || {
                y: null
            }, null != (s = t[r - 1] || {
                y: null
            }).y && null != n.y ? h.push(i(s, n)) : null != s.y ? h.push(i(s, e)) : null != n.y ? h.push(i(e, n)) : h.push(null)) : h.push(null);
            return h
        }, e.prototype.hilight = function (t) {
            var e, i, r, n, s;
            if (null !== this.prevHilight && this.prevHilight !== t)
                for (e = i = 0, n = this.seriesPoints.length - 1; 0 <= n ? i <= n : n <= i; e = 0 <= n ? ++i : --i) this.seriesPoints[e][this.prevHilight] && this.seriesPoints[e][this.prevHilight].animate(this.pointShrinkSeries(e));
            if (null !== t && this.prevHilight !== t)
                for (e = r = 0, s = this.seriesPoints.length - 1; 0 <= s ? r <= s : s <= r; e = 0 <= s ? ++r : --r) this.seriesPoints[e][t] && this.seriesPoints[e][t].animate(this.pointGrowSeries(e));
            return this.prevHilight = t
        }, e.prototype.colorFor = function (t, e, i) {
            return "function" == typeof this.options.lineColors ? this.options.lineColors.call(this, t, e, i) : "point" === i && this.options.pointFillColors[e % this.options.pointFillColors.length] || this.options.lineColors[e % this.options.lineColors.length]
        }, e.prototype.drawXAxisLabel = function (t, e, i) {
            return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
        }, e.prototype.drawLinePath = function (t, e, i) {
            return this.raphael.path(t).attr("stroke", e).attr("stroke-width", this.lineWidthForSeries(i))
        }, e.prototype.drawLinePoint = function (t, e, i, r) {
            return this.raphael.circle(t, e, this.pointSizeForSeries(r)).attr("fill", i).attr("stroke-width", this.pointStrokeWidthForSeries(r)).attr("stroke", this.pointStrokeColorForSeries(r))
        }, e.prototype.pointStrokeWidthForSeries = function (t) {
            return this.options.pointStrokeWidths[t % this.options.pointStrokeWidths.length]
        }, e.prototype.pointStrokeColorForSeries = function (t) {
            return this.options.pointStrokeColors[t % this.options.pointStrokeColors.length]
        }, e.prototype.lineWidthForSeries = function (t) {
            return this.options.lineWidth instanceof Array ? this.options.lineWidth[t % this.options.lineWidth.length] : this.options.lineWidth
        }, e.prototype.pointSizeForSeries = function (t) {
            return this.options.pointSize instanceof Array ? this.options.pointSize[t % this.options.pointSize.length] : this.options.pointSize
        }, e.prototype.pointGrowSeries = function (t) {
            return Raphael.animation({
                r: this.pointSizeForSeries(t) + 3
            }, 25, "linear")
        }, e.prototype.pointShrinkSeries = function (t) {
            return Raphael.animation({
                r: this.pointSizeForSeries(t)
            }, 25, "linear")
        }, e
    }(_.Grid), _.labelSeries = function (t, e, i, r, n) {
        var s, o, a, h, l, u, c, p, f, d, g;
        if (a = 200 * (e - t) / i, o = new Date(t), void 0 === (c = _.LABEL_SPECS[r]))
            for (f = 0, d = (g = _.AUTO_LABEL_ORDER).length; f < d; f++)
                if (h = g[f], a >= (u = _.LABEL_SPECS[h]).span) {
                    c = u;
                    break
                } for (void 0 === c && (c = _.LABEL_SPECS.second), n && (c = v.extend({}, c, {
                fmt: n
            })), s = c.start(o), l = [];
            (p = s.getTime()) <= e;) t <= p && l.push([c.fmt(s), p]), c.incr(s);
        return l
    }, t = function (e) {
        return {
            span: 60 * e * 1e3,
            start: function (t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours())
            },
            fmt: function (t) {
                return _.pad2(t.getHours()) + ":" + _.pad2(t.getMinutes())
            },
            incr: function (t) {
                return t.setUTCMinutes(t.getUTCMinutes() + e)
            }
        }
    }, e = function (e) {
        return {
            span: 1e3 * e,
            start: function (t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes())
            },
            fmt: function (t) {
                return _.pad2(t.getHours()) + ":" + _.pad2(t.getMinutes()) + ":" + _.pad2(t.getSeconds())
            },
            incr: function (t) {
                return t.setUTCSeconds(t.getUTCSeconds() + e)
            }
        }
    }, _.LABEL_SPECS = {
        decade: {
            span: 1728e8,
            start: function (t) {
                return new Date(t.getFullYear() - t.getFullYear() % 10, 0, 1)
            },
            fmt: function (t) {
                return "" + t.getFullYear()
            },
            incr: function (t) {
                return t.setFullYear(t.getFullYear() + 10)
            }
        },
        year: {
            span: 1728e7,
            start: function (t) {
                return new Date(t.getFullYear(), 0, 1)
            },
            fmt: function (t) {
                return "" + t.getFullYear()
            },
            incr: function (t) {
                return t.setFullYear(t.getFullYear() + 1)
            }
        },
        month: {
            span: 24192e5,
            start: function (t) {
                return new Date(t.getFullYear(), t.getMonth(), 1)
            },
            fmt: function (t) {
                return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1)
            },
            incr: function (t) {
                return t.setMonth(t.getMonth() + 1)
            }
        },
        week: {
            span: 6048e5,
            start: function (t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            fmt: function (t) {
                return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1) + "-" + _.pad2(t.getDate())
            },
            incr: function (t) {
                return t.setDate(t.getDate() + 7)
            }
        },
        day: {
            span: 864e5,
            start: function (t) {
                return new Date(t.getFullYear(), t.getMonth(), t.getDate())
            },
            fmt: function (t) {
                return t.getFullYear() + "-" + _.pad2(t.getMonth() + 1) + "-" + _.pad2(t.getDate())
            },
            incr: function (t) {
                return t.setDate(t.getDate() + 1)
            }
        },
        hour: t(60),
        "30min": t(30),
        "15min": t(15),
        "10min": t(10),
        "5min": t(5),
        minute: t(1),
        "30sec": e(30),
        "15sec": e(15),
        "10sec": e(10),
        "5sec": e(5),
        second: e(1)
    }, _.AUTO_LABEL_ORDER = ["decade", "year", "month", "week", "day", "hour", "30min", "15min", "10min", "5min", "minute", "30sec", "15sec", "10sec", "5sec", "second"], _.Area = function (t) {
        function i(t) {
            var e;
            return this instanceof _.Area ? (e = v.extend({}, r, t), this.cumulative = !e.behaveLikeLine, "auto" === e.fillOpacity && (e.fillOpacity = e.behaveLikeLine ? .8 : 1), void i.__super__.constructor.call(this, e)) : new _.Area(t)
        }
        var r;
        return s(i, t), r = {
            fillOpacity: "auto",
            behaveLikeLine: !1
        }, i.prototype.calcPoints = function () {
            var n, s, o, t, e, i, r;
            for (r = [], t = 0, e = (i = this.data).length; t < e; t++)(n = i[t])._x = this.transX(n.x), s = 0, n._y = function () {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n.y).length; t < e; t++) o = i[t], this.options.behaveLikeLine ? r.push(this.transY(o)) : (s += o || 0, r.push(this.transY(s)));
                return r
            }.call(this), r.push(n._ymax = Math.max.apply(Math, n._y));
            return r
        }, i.prototype.drawSeries = function () {
            var t, e, i, r, n, s, o, a;
            for (this.seriesPoints = [], a = [], i = 0, r = (e = this.options.behaveLikeLine ? function () {
                    s = [];
                    for (var t = 0, e = this.options.ykeys.length - 1; 0 <= e ? t <= e : e <= t; 0 <= e ? t++ : t--) s.push(t);
                    return s
                }.apply(this) : function () {
                    o = [];
                    for (var t = n = this.options.ykeys.length - 1; n <= 0 ? t <= 0 : 0 <= t; n <= 0 ? t++ : t--) o.push(t);
                    return o
                }.apply(this)).length; i < r; i++) t = e[i], this._drawFillFor(t), this._drawLineFor(t), a.push(this._drawPointFor(t));
            return a
        }, i.prototype._drawFillFor = function (t) {
            var e;
            return null !== (e = this.paths[t]) ? (e += "L" + this.transX(this.xmax) + "," + this.bottom + "L" + this.transX(this.xmin) + "," + this.bottom + "Z", this.drawFilledPath(e, this.fillForSeries(t))) : void 0
        }, i.prototype.fillForSeries = function (t) {
            var e;
            return e = Raphael.rgb2hsl(this.colorFor(this.data[t], t, "line")), Raphael.hsl(e.h, this.options.behaveLikeLine ? .9 * e.s : .75 * e.s, Math.min(.98, this.options.behaveLikeLine ? 1.2 * e.l : 1.25 * e.l))
        }, i.prototype.drawFilledPath = function (t, e) {
            return this.raphael.path(t).attr("fill", e).attr("fill-opacity", this.options.fillOpacity).attr("stroke", "none")
        }, i
    }(_.Line), _.Bar = function (t) {
        function e(t) {
            return this.onHoverOut = u(this.onHoverOut, this), this.onHoverMove = u(this.onHoverMove, this), this.onGridClick = u(this.onGridClick, this), this instanceof _.Bar ? void e.__super__.constructor.call(this, v.extend({}, t, {
                parseTime: !1
            })) : new _.Bar(t)
        }
        return s(e, t), e.prototype.init = function () {
            return this.cumulative = this.options.stacked, "always" !== this.options.hideHover ? (this.hover = new _.Hover({
                parent: this.el
            }), this.on("hovermove", this.onHoverMove), this.on("hoverout", this.onHoverOut), this.on("gridclick", this.onGridClick)) : void 0
        }, e.prototype.defaults = {
            barSizeRatio: .75,
            barGap: 3,
            barColors: ["#0b62a4", "#7a92a3", "#4da74d", "#afd8f8", "#edc240", "#cb4b4b", "#9440ed"],
            barOpacity: 1,
            barRadius: [0, 0, 0, 0],
            xLabelMargin: 50
        }, e.prototype.calc = function () {
            var t;
            return this.calcBars(), !1 === this.options.hideHover ? (t = this.hover).update.apply(t, this.hoverContentForRow(this.data.length - 1)) : void 0
        }, e.prototype.calcBars = function () {
            var t, n, s, e, i, r, o;
            for (o = [], t = e = 0, i = (r = this.data).length; e < i; t = ++e)(n = r[t])._x = this.left + this.width * (t + .5) / this.data.length, o.push(n._y = function () {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = n.y).length; t < e; t++) null != (s = i[t]) ? r.push(this.transY(s)) : r.push(null);
                return r
            }.call(this));
            return o
        }, e.prototype.draw = function () {
            var t;
            return (!0 === (t = this.options.axes) || "both" === t || "x" === t) && this.drawXAxis(), this.drawSeries()
        }, e.prototype.drawXAxis = function () {
            var t, e, i, r, n, s, o, a, h, l, u, c, p;
            for (l = this.bottom + (this.options.xAxisLabelTopPadding || this.options.padding / 2), s = o = null, p = [], t = u = 0, c = this.data.length; 0 <= c ? u < c : c < u; t = 0 <= c ? ++u : --u) a = this.data[this.data.length - 1 - t], h = (e = this.drawXAxisLabel(a._x, l, a.label)).getBBox(), e.transform("r" + -this.options.xLabelAngle), i = e.getBBox(), e.transform("t0," + i.height / 2 + "..."), 0 !== this.options.xLabelAngle && (n = -.5 * h.width * Math.cos(this.options.xLabelAngle * Math.PI / 180), e.transform("t" + n + ",0...")), (null == o || o >= i.x + i.width || null != s && s >= i.x) && 0 <= i.x && i.x + i.width < this.el.width() ? (0 !== this.options.xLabelAngle && (r = 1.25 * this.options.gridTextSize / Math.sin(this.options.xLabelAngle * Math.PI / 180), s = i.x - r), p.push(o = i.x - this.options.xLabelMargin)) : p.push(e.remove());
            return p
        }, e.prototype.drawSeries = function () {
            var n, s, o, a, h, l, u, t, c, p, f, e, d, g, v;
            return o = this.width / this.options.data.length, t = this.options.stacked ? 1 : this.options.ykeys.length, n = (o * this.options.barSizeRatio - this.options.barGap * (t - 1)) / t, this.options.barSize && (n = Math.min(n, this.options.barSize)), e = o - n * t - this.options.barGap * (t - 1), u = e / 2, v = this.ymin <= 0 && 0 <= this.ymax ? this.transY(0) : null, this.bars = function () {
                var t, e, i, r;
                for (i = this.data, r = [], a = t = 0, e = i.length; t < e; a = ++t) c = i[a], h = 0, r.push(function () {
                    var t, e, i, r;
                    for (i = c._y, r = [], p = t = 0, e = i.length; t < e; p = ++t) null !== (g = i[p]) ? (v ? (d = Math.min(g, v), s = Math.max(g, v)) : (d = g, s = this.bottom), l = this.left + a * o + u, this.options.stacked || (l += p * (n + this.options.barGap)), f = s - d, this.options.verticalGridCondition && this.options.verticalGridCondition(c.x) && this.drawBar(this.left + a * o, this.top, o, Math.abs(this.top - this.bottom), this.options.verticalGridColor, this.options.verticalGridOpacity, this.options.barRadius), this.options.stacked && (d -= h), this.drawBar(l, d, n, f, this.colorFor(c, p, "bar"), this.options.barOpacity, this.options.barRadius), r.push(h += f)) : r.push(null);
                    return r
                }.call(this));
                return r
            }.call(this)
        }, e.prototype.colorFor = function (t, e, i) {
            var r, n;
            return "function" == typeof this.options.barColors ? (r = {
                x: t.x,
                y: t.y[e],
                label: t.label
            }, n = {
                index: e,
                key: this.options.ykeys[e],
                label: this.options.labels[e]
            }, this.options.barColors.call(this, r, n, i)) : this.options.barColors[e % this.options.barColors.length]
        }, e.prototype.hitTest = function (t) {
            return 0 === this.data.length ? null : (t = Math.max(Math.min(t, this.right), this.left), Math.min(this.data.length - 1, Math.floor((t - this.left) / (this.width / this.data.length))))
        }, e.prototype.onGridClick = function (t, e) {
            var i;
            return i = this.hitTest(t), this.fire("click", i, this.data[i].src, t, e)
        }, e.prototype.onHoverMove = function (t) {
            var e, i;
            return e = this.hitTest(t), (i = this.hover).update.apply(i, this.hoverContentForRow(e))
        }, e.prototype.onHoverOut = function () {
            return !1 !== this.options.hideHover ? this.hover.hide() : void 0
        }, e.prototype.hoverContentForRow = function (t) {
            var e, i, r, n, s, o, a;
            for (e = "<div class='morris-hover-row-label'>" + (r = this.data[t]).label + "</div>", i = s = 0, o = (a = r.y).length; s < o; i = ++s) n = a[i], e += "<div class='morris-hover-point' style='color: " + this.colorFor(r, i, "label") + "'>\n  " + this.options.labels[i] + ":\n  " + this.yLabelFormat(n) + "\n</div>";
            return "function" == typeof this.options.hoverCallback && (e = this.options.hoverCallback(t, this.options, e, r.src)), [e, this.left + (t + .5) * this.width / this.data.length]
        }, e.prototype.drawXAxisLabel = function (t, e, i) {
            return this.raphael.text(t, e, i).attr("font-size", this.options.gridTextSize).attr("font-family", this.options.gridTextFamily).attr("font-weight", this.options.gridTextWeight).attr("fill", this.options.gridTextColor)
        }, e.prototype.drawBar = function (t, e, i, r, n, s, o) {
            var a;
            return (0 === (a = Math.max.apply(Math, o)) || r < a ? this.raphael.rect(t, e, i, r) : this.raphael.path(this.roundedRect(t, e, i, r, o))).attr("fill", n).attr("fill-opacity", s).attr("stroke", "none")
        }, e.prototype.roundedRect = function (t, e, i, r, n) {
            return null == n && (n = [0, 0, 0, 0]), ["M", t, n[0] + e, "Q", t, e, t + n[0], e, "L", t + i - n[1], e, "Q", t + i, e, t + i, e + n[1], "L", t + i, e + r - n[2], "Q", t + i, e + r, t + i - n[2], e + r, "L", t + n[3], e + r, "Q", t, e + r, t, e + r - n[3], "Z"]
        }, e
    }(_.Grid), _.Donut = function (t) {
        function e(t) {
            this.resizeHandler = u(this.resizeHandler, this), this.select = u(this.select, this), this.click = u(this.click, this);
            var e = this;
            if (!(this instanceof _.Donut)) return new _.Donut(t);
            if (this.options = v.extend({}, this.defaults, t), this.el = "string" == typeof t.element ? v(document.getElementById(t.element)) : v(t.element), null === this.el || 0 === this.el.length) throw new Error("Graph placeholder not found.");
            void 0 !== t.data && 0 !== t.data.length && (this.raphael = new Raphael(this.el[0]), this.options.resize && v(window).bind("resize", function () {
                return null != e.timeoutId && window.clearTimeout(e.timeoutId), e.timeoutId = window.setTimeout(e.resizeHandler, 100)
            }), this.setData(t.data))
        }
        return s(e, t), e.prototype.defaults = {
            colors: ["#0B62A4", "#3980B5", "#679DC6", "#95BBD7", "#B0CCE1", "#095791", "#095085", "#083E67", "#052C48", "#042135"],
            backgroundColor: "#FFFFFF",
            labelColor: "#000000",
            formatter: _.commas,
            resize: !1
        }, e.prototype.redraw = function () {
            var t, e, i, r, n, s, o, a, h, l, u, c, p, f, d, g, v, x, y, m, b, w;
            for (this.raphael.clear(), e = this.el.width() / 2, i = this.el.height() / 2, c = (Math.min(e, i) - 10) / 3, p = u = 0, g = (y = this.values).length; p < g; p++) u += y[p];
            for (a = 5 / (2 * c), t = 1.9999 * Math.PI - a * this.data.length, n = s = 0, this.segments = [], r = f = 0, v = (m = this.values).length; f < v; r = ++f) h = s + a + t * (m[r] / u), (l = new _.DonutSegment(e, i, 2 * c, c, s, h, this.data[r].color || this.options.colors[n % this.options.colors.length], this.options.backgroundColor, n, this.raphael)).render(), this.segments.push(l), l.on("hover", this.select), l.on("click", this.click), s = h, n += 1;
            for (this.text1 = this.drawEmptyDonutLabel(e, i - 10, this.options.labelColor, 15, 800), this.text2 = this.drawEmptyDonutLabel(e, i + 10, this.options.labelColor, 14), o = Math.max.apply(Math, this.values), w = [], d = n = 0, x = (b = this.values).length; d < x; d++) {
                if (b[d] === o) {
                    this.select(n);
                    break
                }
                w.push(n += 1)
            }
            return w
        }, e.prototype.setData = function (t) {
            var n;
            return this.data = t, this.values = function () {
                var t, e, i, r;
                for (r = [], t = 0, e = (i = this.data).length; t < e; t++) n = i[t], r.push(parseFloat(n.value));
                return r
            }.call(this), this.redraw()
        }, e.prototype.click = function (t) {
            return this.fire("click", t, this.data[t])
        }, e.prototype.select = function (t) {
            var e, i, r, n;
            for (i = 0, r = (n = this.segments).length; i < r; i++) n[i].deselect();
            return this.segments[t].select(), e = this.data[t], this.setLabels(e.label, this.options.formatter(e.value, e))
        }, e.prototype.setLabels = function (t, e) {
            var i, r, n, s, o, a, h, l;
            return s = 1.8 * (i = 2 * (Math.min(this.el.width() / 2, this.el.height() / 2) - 10) / 3), n = i / 2, r = i / 3, this.text1.attr({
                text: t,
                transform: ""
            }), o = this.text1.getBBox(), a = Math.min(s / o.width, n / o.height), this.text1.attr({
                transform: "S" + a + "," + a + "," + (o.x + o.width / 2) + "," + (o.y + o.height)
            }), this.text2.attr({
                text: e,
                transform: ""
            }), h = this.text2.getBBox(), l = Math.min(s / h.width, r / h.height), this.text2.attr({
                transform: "S" + l + "," + l + "," + (h.x + h.width / 2) + "," + h.y
            })
        }, e.prototype.drawEmptyDonutLabel = function (t, e, i, r, n) {
            var s;
            return s = this.raphael.text(t, e, "").attr("font-size", r).attr("fill", i), null != n && s.attr("font-weight", n), s
        }, e.prototype.resizeHandler = function () {
            return this.timeoutId = null, this.raphael.setSize(this.el.width(), this.el.height()), this.redraw()
        }, e
    }(_.EventEmitter), _.DonutSegment = function (t) {
        function e(t, e, i, r, n, s, o, a, h, l) {
            this.cx = t, this.cy = e, this.inner = i, this.outer = r, this.color = o, this.backgroundColor = a, this.index = h, this.raphael = l, this.deselect = u(this.deselect, this), this.select = u(this.select, this), this.sin_p0 = Math.sin(n), this.cos_p0 = Math.cos(n), this.sin_p1 = Math.sin(s), this.cos_p1 = Math.cos(s), this.is_long = s - n > Math.PI ? 1 : 0, this.path = this.calcSegment(this.inner + 3, this.inner + this.outer - 5), this.selectedPath = this.calcSegment(this.inner + 3, this.inner + this.outer), this.hilight = this.calcArc(this.inner)
        }
        return s(e, t), e.prototype.calcArcPoints = function (t) {
            return [this.cx + t * this.sin_p0, this.cy + t * this.cos_p0, this.cx + t * this.sin_p1, this.cy + t * this.cos_p1]
        }, e.prototype.calcSegment = function (t, e) {
            var i, r, n, s, o, a, h, l, u, c;
            return i = (u = this.calcArcPoints(t))[0], n = u[1], r = u[2], s = u[3], o = (c = this.calcArcPoints(e))[0], h = c[1], a = c[2], l = c[3], "M" + i + "," + n + "A" + t + "," + t + ",0," + this.is_long + ",0," + r + "," + s + "L" + a + "," + l + "A" + e + "," + e + ",0," + this.is_long + ",1," + o + "," + h + "Z"
        }, e.prototype.calcArc = function (t) {
            var e, i, r, n, s;
            return e = (s = this.calcArcPoints(t))[0], r = s[1], i = s[2], n = s[3], "M" + e + "," + r + "A" + t + "," + t + ",0," + this.is_long + ",0," + i + "," + n
        }, e.prototype.render = function () {
            var t = this;
            return this.arc = this.drawDonutArc(this.hilight, this.color), this.seg = this.drawDonutSegment(this.path, this.color, this.backgroundColor, function () {
                return t.fire("hover", t.index)
            }, function () {
                return t.fire("click", t.index)
            })
        }, e.prototype.drawDonutArc = function (t, e) {
            return this.raphael.path(t).attr({
                stroke: e,
                "stroke-width": 2,
                opacity: 0
            })
        }, e.prototype.drawDonutSegment = function (t, e, i, r, n) {
            return this.raphael.path(t).attr({
                fill: e,
                stroke: i,
                "stroke-width": 3
            }).hover(r).click(n)
        }, e.prototype.select = function () {
            return this.selected ? void 0 : (this.seg.animate({
                path: this.selectedPath
            }, 150, "<>"), this.arc.animate({
                opacity: 1
            }, 150, "<>"), this.selected = !0)
        }, e.prototype.deselect = function () {
            return this.selected ? (this.seg.animate({
                path: this.path
            }, 150, "<>"), this.arc.animate({
                opacity: 0
            }, 150, "<>"), this.selected = !1) : void 0
        }, e
    }(_.EventEmitter)
}.call(this);