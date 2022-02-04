! function (r) {
    r.color = {}, r.color.make = function (e, t, i, n) {
        var o = {};
        return o.r = e || 0, o.g = t || 0, o.b = i || 0, o.a = null != n ? n : 1, o.add = function (e, t) {
            for (var i = 0; i < e.length; ++i) o[e.charAt(i)] += t;
            return o.normalize()
        }, o.scale = function (e, t) {
            for (var i = 0; i < e.length; ++i) o[e.charAt(i)] *= t;
            return o.normalize()
        }, o.toString = function () {
            return 1 <= o.a ? "rgb(" + [o.r, o.g, o.b].join(",") + ")" : "rgba(" + [o.r, o.g, o.b, o.a].join(",") + ")"
        }, o.normalize = function () {
            function e(e, t, i) {
                return t < e ? e : i < t ? i : t
            }
            return o.r = e(0, parseInt(o.r), 255), o.g = e(0, parseInt(o.g), 255), o.b = e(0, parseInt(o.b), 255), o.a = e(0, o.a, 1), o
        }, o.clone = function () {
            return r.color.make(o.r, o.b, o.g, o.a)
        }, o.normalize()
    }, r.color.extract = function (e, t) {
        var i;
        do {
            if ("" != (i = e.css(t).toLowerCase()) && "transparent" != i) break;
            e = e.parent()
        } while (e.length && !r.nodeName(e.get(0), "body"));
        return "rgba(0, 0, 0, 0)" == i && (i = "transparent"), r.color.parse(i)
    }, r.color.parse = function (e) {
        var t, i = r.color.make;
        if (t = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(e)) return i(parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10));
        if (t = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e)) return i(parseInt(t[1], 10), parseInt(t[2], 10), parseInt(t[3], 10), parseFloat(t[4]));
        if (t = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(e)) return i(2.55 * parseFloat(t[1]), 2.55 * parseFloat(t[2]), 2.55 * parseFloat(t[3]));
        if (t = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(e)) return i(2.55 * parseFloat(t[1]), 2.55 * parseFloat(t[2]), 2.55 * parseFloat(t[3]), parseFloat(t[4]));
        if (t = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e)) return i(parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16));
        if (t = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e)) return i(parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16));
        var n = r.trim(e).toLowerCase();
        return "transparent" == n ? i(255, 255, 255, 0) : i((t = o[n] || [0, 0, 0])[0], t[1], t[2])
    };
    var o = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0]
    }
}(jQuery),
function (Q) {
    var d = Object.prototype.hasOwnProperty;

    function V(e, t) {
        var i = t.children("." + e)[0];
        if (null == i && ((i = document.createElement("canvas")).className = e, Q(i).css({
                direction: "ltr",
                position: "absolute",
                left: 0,
                top: 0
            }).appendTo(t), !i.getContext)) {
            if (!window.G_vmlCanvasManager) throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
            i = window.G_vmlCanvasManager.initElement(i)
        }
        this.element = i;
        var n = this.context = i.getContext("2d"),
            o = window.devicePixelRatio || 1,
            r = n.webkitBackingStorePixelRatio || n.mozBackingStorePixelRatio || n.msBackingStorePixelRatio || n.oBackingStorePixelRatio || n.backingStorePixelRatio || 1;
        this.pixelRatio = o / r, this.resize(t.width(), t.height()), this.textContainer = null, this.text = {}, this._textCache = {}
    }

    function n(m, e, t, n) {
        var S = [],
            z = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: .85,
                    sorted: null
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    font: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null
                },
                yaxis: {
                    autoscaleMargin: .02,
                    position: "left"
                },
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: !1,
                        radius: 3,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        symbol: "circle"
                    },
                    lines: {
                        lineWidth: 2,
                        fill: !1,
                        fillColor: null,
                        steps: !1
                    },
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1,
                        zero: !0
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    margin: 0,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                interaction: {
                    redrawOverlayInterval: 1e3 / 60
                },
                hooks: {}
            },
            d = null,
            i = null,
            h = null,
            y = null,
            c = null,
            p = [],
            g = [],
            w = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            },
            M = 0,
            T = 0,
            C = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            },
            A = this;

        function W(e, t) {
            t = [A].concat(t);
            for (var i = 0; i < e.length; ++i) e[i].apply(this, t)
        }

        function o(e) {
            S = function (e) {
                    for (var t = [], i = 0; i < e.length; ++i) {
                        var n = Q.extend(!0, {}, z.series);
                        null != e[i].data ? (n.data = e[i].data, delete e[i].data, Q.extend(!0, n, e[i]), e[i].data = n.data) : n.data = e[i], t.push(n)
                    }
                    return t
                }(e),
                function () {
                    var e, t = S.length,
                        i = -1;
                    for (e = 0; e < S.length; ++e) {
                        var n = S[e].color;
                        null != n && (t--, "number" == typeof n && i < n && (i = n))
                    }
                    t <= i && (t = i + 1);
                    var o, r = [],
                        a = z.colors,
                        l = a.length,
                        s = 0;
                    for (e = 0; e < t; e++) o = Q.color.parse(a[e % l] || "#666"), e % l == 0 && e && (s = 0 <= s ? s < .5 ? -s - .2 : 0 : -s), r[e] = o.scale("rgb", 1 + s);
                    var c, h = 0;
                    for (e = 0; e < S.length; ++e) {
                        if (null == (c = S[e]).color ? (c.color = r[h].toString(), ++h) : "number" == typeof c.color && (c.color = r[c.color].toString()), null == c.lines.show) {
                            var u, f = !0;
                            for (u in c)
                                if (c[u] && c[u].show) {
                                    f = !1;
                                    break
                                } f && (c.lines.show = !0)
                        }
                        null == c.lines.zero && (c.lines.zero = !!c.lines.fill), c.xaxis = v(p, x(c, "x")), c.yaxis = v(g, x(c, "y"))
                    }
                }(),
                function () {
                    var e, t, i, n, o, r, a, l, s, c, h, u, f = Number.POSITIVE_INFINITY,
                        d = Number.NEGATIVE_INFINITY,
                        p = Number.MAX_VALUE;

                    function g(e, t, i) {
                        t < e.datamin && t != -p && (e.datamin = t), i > e.datamax && i != p && (e.datamax = i)
                    }
                    for (Q.each(I(), function (e, t) {
                            t.datamin = f, t.datamax = d, t.used = !1
                        }), e = 0; e < S.length; ++e)(o = S[e]).datapoints = {
                        points: []
                    }, W(C.processRawData, [o, o.data, o.datapoints]);
                    for (e = 0; e < S.length; ++e) {
                        if (o = S[e], h = o.data, !(u = o.datapoints.format)) {
                            if ((u = []).push({
                                    x: !0,
                                    number: !0,
                                    required: !0
                                }), u.push({
                                    y: !0,
                                    number: !0,
                                    required: !0
                                }), o.bars.show || o.lines.show && o.lines.fill) {
                                var m = !!(o.bars.show && o.bars.zero || o.lines.show && o.lines.zero);
                                u.push({
                                    y: !0,
                                    number: !0,
                                    required: !1,
                                    defaultValue: 0,
                                    autoscale: m
                                }), o.bars.horizontal && (delete u[u.length - 1].y, u[u.length - 1].x = !0)
                            }
                            o.datapoints.format = u
                        }
                        if (null == o.datapoints.pointsize) {
                            o.datapoints.pointsize = u.length, a = o.datapoints.pointsize, r = o.datapoints.points;
                            var x = o.lines.show && o.lines.steps;
                            for (o.xaxis.used = o.yaxis.used = !0, t = i = 0; t < h.length; ++t, i += a) {
                                var v = null == (c = h[t]);
                                if (!v)
                                    for (n = 0; n < a; ++n) l = c[n], (s = u[n]) && (s.number && null != l && (l = +l, isNaN(l) ? l = null : l == 1 / 0 ? l = p : l == -1 / 0 && (l = -p)), null == l && (s.required && (v = !0), null != s.defaultValue && (l = s.defaultValue))), r[i + n] = l;
                                if (v)
                                    for (n = 0; n < a; ++n) null != (l = r[i + n]) && !1 !== (s = u[n]).autoscale && (s.x && g(o.xaxis, l, l), s.y && g(o.yaxis, l, l)), r[i + n] = null;
                                else if (x && 0 < i && null != r[i - a] && r[i - a] != r[i] && r[i - a + 1] != r[i + 1]) {
                                    for (n = 0; n < a; ++n) r[i + a + n] = r[i + n];
                                    r[i + 1] = r[i - a + 1], i += a
                                }
                            }
                        }
                    }
                    for (e = 0; e < S.length; ++e) o = S[e], W(C.processDatapoints, [o, o.datapoints]);
                    for (e = 0; e < S.length; ++e) {
                        o = S[e], r = o.datapoints.points, a = o.datapoints.pointsize, u = o.datapoints.format;
                        var b = f,
                            k = f,
                            y = d,
                            w = d;
                        for (t = 0; t < r.length; t += a)
                            if (null != r[t])
                                for (n = 0; n < a; ++n) l = r[t + n], (s = u[n]) && !1 !== s.autoscale && l != p && l != -p && (s.x && (l < b && (b = l), y < l && (y = l)), s.y && (l < k && (k = l), w < l && (w = l)));
                        if (o.bars.show) {
                            var M;
                            switch (o.bars.align) {
                                case "left":
                                    M = 0;
                                    break;
                                case "right":
                                    M = -o.bars.barWidth;
                                    break;
                                default:
                                    M = -o.bars.barWidth / 2
                            }
                            o.bars.horizontal ? (k += M, w += M + o.bars.barWidth) : (b += M, y += M + o.bars.barWidth)
                        }
                        g(o.xaxis, b, y), g(o.yaxis, k, w)
                    }
                    Q.each(I(), function (e, t) {
                        t.datamin == f && (t.datamin = null), t.datamax == d && (t.datamax = null)
                    })
                }()
        }

        function x(e, t) {
            var i = e[t + "axis"];
            return "object" == typeof i && (i = i.n), "number" != typeof i && (i = 1), i
        }

        function I() {
            return Q.grep(p.concat(g), function (e) {
                return e
            })
        }

        function u(e) {
            var t, i, n = {};
            for (t = 0; t < p.length; ++t)(i = p[t]) && i.used && (n["x" + i.n] = i.c2p(e.left));
            for (t = 0; t < g.length; ++t)(i = g[t]) && i.used && (n["y" + i.n] = i.c2p(e.top));
            return void 0 !== n.x1 && (n.x = n.x1), void 0 !== n.y1 && (n.y = n.y1), n
        }

        function v(e, t) {
            return e[t - 1] || (e[t - 1] = {
                n: t,
                direction: e == p ? "x" : "y",
                options: Q.extend(!0, {}, e == p ? z.xaxis : z.yaxis)
            }), e[t - 1]
        }

        function r() {
            N && clearTimeout(N), h.unbind("mousemove", q), h.unbind("mouseleave", O), h.unbind("click", R), W(C.shutdown, [h])
        }

        function a(i) {
            var e = i.labelWidth,
                t = i.labelHeight,
                n = i.options.position,
                o = "x" === i.direction,
                r = i.options.tickLength,
                a = z.grid.axisMargin,
                l = z.grid.labelMargin,
                s = !0,
                c = !0,
                h = !0,
                u = !1;
            Q.each(o ? p : g, function (e, t) {
                t && (t.show || t.reserveSpace) && (t === i ? u = !0 : t.options.position === n && (u ? c = !1 : s = !1), u || (h = !1))
            }), c && (a = 0), null == r && (r = h ? "full" : 5), isNaN(+r) || (l += +r), o ? (t += l, "bottom" == n ? (w.bottom += t + a, i.box = {
                top: d.height - w.bottom,
                height: t
            }) : (i.box = {
                top: w.top + a,
                height: t
            }, w.top += t + a)) : (e += l, "left" == n ? (i.box = {
                left: w.left + a,
                width: e
            }, w.left += e + a) : (w.right += e + a, i.box = {
                left: d.width - w.right,
                width: e
            })), i.position = n, i.tickLength = r, i.box.padding = l, i.innermost = s
        }

        function l() {
            var e, t = I(),
                i = z.grid.show;
            for (var n in w) {
                var o = z.grid.margin || 0;
                w[n] = "number" == typeof o ? o : o[n] || 0
            }
            for (var n in W(C.processOffset, [w]), w) "object" == typeof z.grid.borderWidth ? w[n] += i ? z.grid.borderWidth[n] : 0 : w[n] += i ? z.grid.borderWidth : 0;
            if (Q.each(t, function (e, t) {
                    var i = t.options;
                    t.show = null == i.show ? t.used : i.show, t.reserveSpace = null == i.reserveSpace ? t.show : i.reserveSpace,
                        function (e) {
                            var t = e.options,
                                i = +(null != t.min ? t.min : e.datamin),
                                n = +(null != t.max ? t.max : e.datamax),
                                o = n - i;
                            if (0 == o) {
                                var r = 0 == n ? 1 : .01;
                                null == t.min && (i -= r), null != t.max && null == t.min || (n += r)
                            } else {
                                var a = t.autoscaleMargin;
                                null != a && (null == t.min && (i -= o * a) < 0 && null != e.datamin && 0 <= e.datamin && (i = 0), null == t.max && 0 < (n += o * a) && null != e.datamax && e.datamax <= 0 && (n = 0))
                            }
                            e.min = i, e.max = n
                        }(t)
                }), i) {
                var r = Q.grep(t, function (e) {
                    return e.show || e.reserveSpace
                });
                for (Q.each(r, function (e, t) {
                        var i, n;
                        ! function (e) {
                            var t, i = e.options;
                            t = "number" == typeof i.ticks && 0 < i.ticks ? i.ticks : .3 * Math.sqrt("x" == e.direction ? d.width : d.height);
                            var n = (e.max - e.min) / t,
                                o = -Math.floor(Math.log(n) / Math.LN10),
                                r = i.tickDecimals;
                            null != r && r < o && (o = r);
                            var a, l = Math.pow(10, -o),
                                s = n / l;
                            s < 1.5 ? a = 1 : s < 3 ? (a = 2, 2.25 < s && (null == r || o + 1 <= r) && (a = 2.5, ++o)) : a = s < 7.5 ? 5 : 10;
                            a *= l, null != i.minTickSize && a < i.minTickSize && (a = i.minTickSize);
                            if (e.delta = n, e.tickDecimals = Math.max(0, null != r ? r : o), e.tickSize = i.tickSize || a, "time" == i.mode && !e.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                            e.tickGenerator || (e.tickGenerator = function (e) {
                                for (var t, i, n, o = [], r = (i = e.min, (n = e.tickSize) * Math.floor(i / n)), a = 0, l = Number.NaN; t = l, l = r + a * e.tickSize, o.push(l), ++a, l < e.max && l != t;);
                                return o
                            }, e.tickFormatter = function (e, t) {
                                var i = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1,
                                    n = "" + Math.round(e * i) / i;
                                if (null != t.tickDecimals) {
                                    var o = n.indexOf("."),
                                        r = -1 == o ? 0 : n.length - o - 1;
                                    if (r < t.tickDecimals) return (r ? n : n + ".") + ("" + i).substr(1, t.tickDecimals - r)
                                }
                                return n
                            });
                            Q.isFunction(i.tickFormatter) && (e.tickFormatter = function (e, t) {
                                return "" + i.tickFormatter(e, t)
                            });
                            if (null != i.alignTicksWithAxis) {
                                var c = ("x" == e.direction ? p : g)[i.alignTicksWithAxis - 1];
                                if (c && c.used && c != e) {
                                    var h = e.tickGenerator(e);
                                    if (0 < h.length && (null == i.min && (e.min = Math.min(e.min, h[0])), null == i.max && 1 < h.length && (e.max = Math.max(e.max, h[h.length - 1]))), e.tickGenerator = function (e) {
                                            var t, i, n = [];
                                            for (i = 0; i < c.ticks.length; ++i) t = (c.ticks[i].v - c.min) / (c.max - c.min), t = e.min + t * (e.max - e.min), n.push(t);
                                            return n
                                        }, !e.mode && null == i.tickDecimals) {
                                        var u = Math.max(0, 1 - Math.floor(Math.log(e.delta) / Math.LN10)),
                                            f = e.tickGenerator(e);
                                        1 < f.length && /\..*0$/.test((f[1] - f[0]).toFixed(u)) || (e.tickDecimals = u)
                                    }
                                }
                            }
                        }(t),
                        function (e) {
                            var t, i, n = e.options.ticks,
                                o = [];
                            null == n || "number" == typeof n && 0 < n ? o = e.tickGenerator(e) : n && (o = Q.isFunction(n) ? n(e) : n);
                            for (e.ticks = [], t = 0; t < o.length; ++t) {
                                var r = null,
                                    a = o[t];
                                "object" == typeof a ? (i = +a[0], 1 < a.length && (r = a[1])) : i = +a, null == r && (r = e.tickFormatter(i, e)), isNaN(i) || e.ticks.push({
                                    v: i,
                                    label: r
                                })
                            }
                        }(t), n = (i = t).ticks, i.options.autoscaleMargin && 0 < n.length && (null == i.options.min && (i.min = Math.min(i.min, n[0].v)), null == i.options.max && 1 < n.length && (i.max = Math.max(i.max, n[n.length - 1].v))),
                            function (e) {
                                for (var t = e.options, i = e.ticks || [], n = t.labelWidth || 0, o = t.labelHeight || 0, r = n || ("x" == e.direction ? Math.floor(d.width / (i.length || 1)) : null), a = e.direction + "Axis " + e.direction + e.n + "Axis", l = "flot-" + e.direction + "-axis flot-" + e.direction + e.n + "-axis " + a, s = t.font || "flot-tick-label tickLabel", c = 0; c < i.length; ++c) {
                                    var h = i[c];
                                    if (h.label) {
                                        var u = d.getTextInfo(l, h.label, s, null, r);
                                        n = Math.max(n, u.width), o = Math.max(o, u.height)
                                    }
                                }
                                e.labelWidth = t.labelWidth || n, e.labelHeight = t.labelHeight || o
                            }(t)
                    }), e = r.length - 1; 0 <= e; --e) a(r[e]);
                ! function () {
                    var e, t = z.grid.minBorderMargin;
                    if (null == t)
                        for (e = t = 0; e < S.length; ++e) t = Math.max(t, 2 * (S[e].points.radius + S[e].points.lineWidth / 2));
                    var i = {
                        left: t,
                        right: t,
                        top: t,
                        bottom: t
                    };
                    Q.each(I(), function (e, t) {
                        t.reserveSpace && t.ticks && t.ticks.length && ("x" === t.direction ? (i.left = Math.max(i.left, t.labelWidth / 2), i.right = Math.max(i.right, t.labelWidth / 2)) : (i.bottom = Math.max(i.bottom, t.labelHeight / 2), i.top = Math.max(i.top, t.labelHeight / 2)))
                    }), w.left = Math.ceil(Math.max(i.left, w.left)), w.right = Math.ceil(Math.max(i.right, w.right)), w.top = Math.ceil(Math.max(i.top, w.top)), w.bottom = Math.ceil(Math.max(i.bottom, w.bottom))
                }(), Q.each(r, function (e, t) {
                    var i;
                    "x" == (i = t).direction ? (i.box.left = w.left - i.labelWidth / 2, i.box.width = d.width - w.left - w.right + i.labelWidth) : (i.box.top = w.top - i.labelHeight / 2, i.box.height = d.height - w.bottom - w.top + i.labelHeight)
                })
            }
            M = d.width - w.left - w.right, T = d.height - w.bottom - w.top, Q.each(t, function (e, t) {
                    ! function (e) {
                        function t(e) {
                            return e
                        }
                        var i, n, o = e.options.transform || t,
                            r = e.options.inverseTransform;
                        n = "x" == e.direction ? (i = e.scale = M / Math.abs(o(e.max) - o(e.min)), Math.min(o(e.max), o(e.min))) : (i = -(i = e.scale = T / Math.abs(o(e.max) - o(e.min))), Math.max(o(e.max), o(e.min))), e.p2c = o == t ? function (e) {
                            return (e - n) * i
                        } : function (e) {
                            return (o(e) - n) * i
                        }, e.c2p = r ? function (e) {
                            return r(n + e / i)
                        } : function (e) {
                            return n + e / i
                        }
                    }(t)
                }), i && Q.each(I(), function (e, t) {
                    var i, n, o, r, a, l = t.box,
                        s = t.direction + "Axis " + t.direction + t.n + "Axis",
                        c = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + s,
                        h = t.options.font || "flot-tick-label tickLabel";
                    if (d.removeText(c), t.show && 0 != t.ticks.length)
                        for (var u = 0; u < t.ticks.length; ++u) !(i = t.ticks[u]).label || i.v < t.min || i.v > t.max || ("x" == t.direction ? (r = "center", n = w.left + t.p2c(i.v), "bottom" == t.position ? o = l.top + l.padding : (o = l.top + l.height - l.padding, a = "bottom")) : (a = "middle", o = w.top + t.p2c(i.v), "left" == t.position ? (n = l.left + l.width - l.padding, r = "right") : n = l.left + l.padding), d.addText(c, n, o, i.label, h, null, null, r, a))
                }),
                function () {
                    null != z.legend.container ? Q(z.legend.container).html("") : m.find(".legend").remove();
                    if (!z.legend.show) return;
                    for (var e, t, i = [], n = [], o = !1, r = z.legend.labelFormatter, a = 0; a < S.length; ++a)(e = S[a]).label && (t = r ? r(e.label, e) : e.label) && n.push({
                        label: t,
                        color: e.color
                    });
                    if (z.legend.sorted)
                        if (Q.isFunction(z.legend.sorted)) n.sort(z.legend.sorted);
                        else if ("reverse" == z.legend.sorted) n.reverse();
                    else {
                        var l = "descending" != z.legend.sorted;
                        n.sort(function (e, t) {
                            return e.label == t.label ? 0 : e.label < t.label != l ? 1 : -1
                        })
                    }
                    for (var a = 0; a < n.length; ++a) {
                        var s = n[a];
                        a % z.legend.noColumns == 0 && (o && i.push("</tr>"), i.push("<tr>"), o = !0), i.push('<td class="legendColorBox"><div style="border:1px solid ' + z.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + s.color + ';overflow:hidden"></div></div></td><td class="legendLabel">' + s.label + "</td>")
                    }
                    o && i.push("</tr>");
                    if (0 == i.length) return;
                    var c = '<table style="font-size:smaller;color:' + z.grid.color + '">' + i.join("") + "</table>";
                    if (null != z.legend.container) Q(z.legend.container).html(c);
                    else {
                        var h = "",
                            u = z.legend.position,
                            f = z.legend.margin;
                        null == f[0] && (f = [f, f]), "n" == u.charAt(0) ? h += "top:" + (f[1] + w.top) + "px;" : "s" == u.charAt(0) && (h += "bottom:" + (f[1] + w.bottom) + "px;"), "e" == u.charAt(1) ? h += "right:" + (f[0] + w.right) + "px;" : "w" == u.charAt(1) && (h += "left:" + (f[0] + w.left) + "px;");
                        var d = Q('<div class="legend">' + c.replace('style="', 'style="position:absolute;' + h + ";") + "</div>").appendTo(m);
                        if (0 != z.legend.backgroundOpacity) {
                            var p = z.legend.backgroundColor;
                            null == p && ((p = (p = z.grid.backgroundColor) && "string" == typeof p ? Q.color.parse(p) : Q.color.extract(d, "background-color")).a = 1, p = p.toString());
                            var g = d.children();
                            Q('<div style="position:absolute;width:' + g.width() + "px;height:" + g.height() + "px;" + h + "background-color:" + p + ';"> </div>').prependTo(d).css("opacity", z.legend.backgroundOpacity)
                        }
                    }
                }()
        }

        function s() {
            d.clear(), W(C.drawBackground, [y]);
            var e = z.grid;
            e.show && e.backgroundColor && (y.save(), y.translate(w.left, w.top), y.fillStyle = X(z.grid.backgroundColor, T, 0, "rgba(255, 255, 255, 0)"), y.fillRect(0, 0, M, T), y.restore()), e.show && !e.aboveData && f();
            for (var t = 0; t < S.length; ++t) W(C.drawSeries, [y, S[t]]), b(S[t]);
            W(C.draw, [y]), e.show && e.aboveData && f(), d.render(), L()
        }

        function F(e, t) {
            for (var i, n, o, r, a = I(), l = 0; l < a.length; ++l)
                if ((i = a[l]).direction == t && (e[r = t + i.n + "axis"] || 1 != i.n || (r = t + "axis"), e[r])) {
                    n = e[r].from, o = e[r].to;
                    break
                } if (e[r] || (i = "x" == t ? p[0] : g[0], n = e[t + "1"], o = e[t + "2"]), null != n && null != o && o < n) {
                var s = n;
                n = o, o = s
            }
            return {
                from: n,
                to: o,
                axis: i
            }
        }

        function f() {
            var e, t, i, n;
            y.save(), y.translate(w.left, w.top);
            var o = z.grid.markings;
            if (o)
                for (Q.isFunction(o) && ((t = A.getAxes()).xmin = t.xaxis.min, t.xmax = t.xaxis.max, t.ymin = t.yaxis.min, t.ymax = t.yaxis.max, o = o(t)), e = 0; e < o.length; ++e) {
                    var r = o[e],
                        a = F(r, "x"),
                        l = F(r, "y");
                    if (null == a.from && (a.from = a.axis.min), null == a.to && (a.to = a.axis.max), null == l.from && (l.from = l.axis.min), null == l.to && (l.to = l.axis.max), !(a.to < a.axis.min || a.from > a.axis.max || l.to < l.axis.min || l.from > l.axis.max)) {
                        a.from = Math.max(a.from, a.axis.min), a.to = Math.min(a.to, a.axis.max), l.from = Math.max(l.from, l.axis.min), l.to = Math.min(l.to, l.axis.max);
                        var s = a.from === a.to,
                            c = l.from === l.to;
                        if (!s || !c)
                            if (a.from = Math.floor(a.axis.p2c(a.from)), a.to = Math.floor(a.axis.p2c(a.to)), l.from = Math.floor(l.axis.p2c(l.from)), l.to = Math.floor(l.axis.p2c(l.to)), s || c) {
                                var h = r.lineWidth || z.grid.markingsLineWidth,
                                    u = h % 2 ? .5 : 0;
                                y.beginPath(), y.strokeStyle = r.color || z.grid.markingsColor, y.lineWidth = h, s ? (y.moveTo(a.to + u, l.from), y.lineTo(a.to + u, l.to)) : (y.moveTo(a.from, l.to + u), y.lineTo(a.to, l.to + u)), y.stroke()
                            } else y.fillStyle = r.color || z.grid.markingsColor, y.fillRect(a.from, l.to, a.to - a.from, l.from - l.to)
                    }
                }
            t = I(), i = z.grid.borderWidth;
            for (var f = 0; f < t.length; ++f) {
                var d, p, g, m, x = t[f],
                    v = x.box,
                    b = x.tickLength;
                if (x.show && 0 != x.ticks.length) {
                    for (y.lineWidth = 1, "x" == x.direction ? (d = 0, p = "full" == b ? "top" == x.position ? 0 : T : v.top - w.top + ("top" == x.position ? v.height : 0)) : (p = 0, d = "full" == b ? "left" == x.position ? 0 : M : v.left - w.left + ("left" == x.position ? v.width : 0)), x.innermost || (y.strokeStyle = x.options.color, y.beginPath(), g = m = 0, "x" == x.direction ? g = M + 1 : m = T + 1, 1 == y.lineWidth && ("x" == x.direction ? p = Math.floor(p) + .5 : d = Math.floor(d) + .5), y.moveTo(d, p), y.lineTo(d + g, p + m), y.stroke()), y.strokeStyle = x.options.tickColor, y.beginPath(), e = 0; e < x.ticks.length; ++e) {
                        var k = x.ticks[e].v;
                        g = m = 0, isNaN(k) || k < x.min || k > x.max || "full" == b && ("object" == typeof i && 0 < i[x.position] || 0 < i) && (k == x.min || k == x.max) || ("x" == x.direction ? (d = x.p2c(k), m = "full" == b ? -T : b, "top" == x.position && (m = -m)) : (p = x.p2c(k), g = "full" == b ? -M : b, "left" == x.position && (g = -g)), 1 == y.lineWidth && ("x" == x.direction ? d = Math.floor(d) + .5 : p = Math.floor(p) + .5), y.moveTo(d, p), y.lineTo(d + g, p + m))
                    }
                    y.stroke()
                }
            }
            i && (n = z.grid.borderColor, "object" == typeof i || "object" == typeof n ? ("object" != typeof i && (i = {
                top: i,
                right: i,
                bottom: i,
                left: i
            }), "object" != typeof n && (n = {
                top: n,
                right: n,
                bottom: n,
                left: n
            }), 0 < i.top && (y.strokeStyle = n.top, y.lineWidth = i.top, y.beginPath(), y.moveTo(0 - i.left, 0 - i.top / 2), y.lineTo(M, 0 - i.top / 2), y.stroke()), 0 < i.right && (y.strokeStyle = n.right, y.lineWidth = i.right, y.beginPath(), y.moveTo(M + i.right / 2, 0 - i.top), y.lineTo(M + i.right / 2, T), y.stroke()), 0 < i.bottom && (y.strokeStyle = n.bottom, y.lineWidth = i.bottom, y.beginPath(), y.moveTo(M + i.right, T + i.bottom / 2), y.lineTo(0, T + i.bottom / 2), y.stroke()), 0 < i.left && (y.strokeStyle = n.left, y.lineWidth = i.left, y.beginPath(), y.moveTo(0 - i.left / 2, T + i.bottom), y.lineTo(0 - i.left / 2, 0), y.stroke())) : (y.lineWidth = i, y.strokeStyle = z.grid.borderColor, y.strokeRect(-i / 2, -i / 2, M + i, T + i))), y.restore()
        }

        function b(e) {
            e.lines.show && function (e) {
                function t(e, t, i, n, o) {
                    var r = e.points,
                        a = e.pointsize,
                        l = null,
                        s = null;
                    y.beginPath();
                    for (var c = a; c < r.length; c += a) {
                        var h = r[c - a],
                            u = r[c - a + 1],
                            f = r[c],
                            d = r[c + 1];
                        if (null != h && null != f) {
                            if (u <= d && u < o.min) {
                                if (d < o.min) continue;
                                h = (o.min - u) / (d - u) * (f - h) + h, u = o.min
                            } else if (d <= u && d < o.min) {
                                if (u < o.min) continue;
                                f = (o.min - u) / (d - u) * (f - h) + h, d = o.min
                            }
                            if (d <= u && u > o.max) {
                                if (d > o.max) continue;
                                h = (o.max - u) / (d - u) * (f - h) + h, u = o.max
                            } else if (u <= d && d > o.max) {
                                if (u > o.max) continue;
                                f = (o.max - u) / (d - u) * (f - h) + h, d = o.max
                            }
                            if (h <= f && h < n.min) {
                                if (f < n.min) continue;
                                u = (n.min - h) / (f - h) * (d - u) + u, h = n.min
                            } else if (f <= h && f < n.min) {
                                if (h < n.min) continue;
                                d = (n.min - h) / (f - h) * (d - u) + u, f = n.min
                            }
                            if (f <= h && h > n.max) {
                                if (f > n.max) continue;
                                u = (n.max - h) / (f - h) * (d - u) + u, h = n.max
                            } else if (h <= f && f > n.max) {
                                if (h > n.max) continue;
                                d = (n.max - h) / (f - h) * (d - u) + u, f = n.max
                            }
                            h == l && u == s || y.moveTo(n.p2c(h) + t, o.p2c(u) + i), l = f, s = d, y.lineTo(n.p2c(f) + t, o.p2c(d) + i)
                        }
                    }
                    y.stroke()
                }
                y.save(), y.translate(w.left, w.top), y.lineJoin = "round";
                var i = e.lines.lineWidth,
                    n = e.shadowSize;
                if (0 < i && 0 < n) {
                    y.lineWidth = n, y.strokeStyle = "rgba(0,0,0,0.1)";
                    var o = Math.PI / 18;
                    t(e.datapoints, Math.sin(o) * (i / 2 + n / 2), Math.cos(o) * (i / 2 + n / 2), e.xaxis, e.yaxis), y.lineWidth = n / 2, t(e.datapoints, Math.sin(o) * (i / 2 + n / 4), Math.cos(o) * (i / 2 + n / 4), e.xaxis, e.yaxis)
                }
                y.lineWidth = i, y.strokeStyle = e.color;
                var r = P(e.lines, e.color, 0, T);
                r && (y.fillStyle = r, function (e, t, i) {
                    var n = e.points,
                        o = e.pointsize,
                        r = Math.min(Math.max(0, i.min), i.max),
                        a = 0,
                        l = !1,
                        s = 1,
                        c = 0,
                        h = 0;
                    for (; !(0 < o && a > n.length + o);) {
                        var u = n[(a += o) - o],
                            f = n[a - o + s],
                            d = n[a],
                            p = n[a + s];
                        if (l) {
                            if (0 < o && null != u && null == d) {
                                h = a, o = -o, s = 2;
                                continue
                            }
                            if (o < 0 && a == c + o) {
                                y.fill(), l = !1, s = 1, a = c = h + (o = -o);
                                continue
                            }
                        }
                        if (null != u && null != d) {
                            if (u <= d && u < t.min) {
                                if (d < t.min) continue;
                                f = (t.min - u) / (d - u) * (p - f) + f, u = t.min
                            } else if (d <= u && d < t.min) {
                                if (u < t.min) continue;
                                p = (t.min - u) / (d - u) * (p - f) + f, d = t.min
                            }
                            if (d <= u && u > t.max) {
                                if (d > t.max) continue;
                                f = (t.max - u) / (d - u) * (p - f) + f, u = t.max
                            } else if (u <= d && d > t.max) {
                                if (u > t.max) continue;
                                p = (t.max - u) / (d - u) * (p - f) + f, d = t.max
                            }
                            if (l || (y.beginPath(), y.moveTo(t.p2c(u), i.p2c(r)), l = !0), f >= i.max && p >= i.max) y.lineTo(t.p2c(u), i.p2c(i.max)), y.lineTo(t.p2c(d), i.p2c(i.max));
                            else if (f <= i.min && p <= i.min) y.lineTo(t.p2c(u), i.p2c(i.min)), y.lineTo(t.p2c(d), i.p2c(i.min));
                            else {
                                var g = u,
                                    m = d;
                                f <= p && f < i.min && p >= i.min ? (u = (i.min - f) / (p - f) * (d - u) + u, f = i.min) : p <= f && p < i.min && f >= i.min && (d = (i.min - f) / (p - f) * (d - u) + u, p = i.min), p <= f && f > i.max && p <= i.max ? (u = (i.max - f) / (p - f) * (d - u) + u, f = i.max) : f <= p && p > i.max && f <= i.max && (d = (i.max - f) / (p - f) * (d - u) + u, p = i.max), u != g && y.lineTo(t.p2c(g), i.p2c(f)), y.lineTo(t.p2c(u), i.p2c(f)), y.lineTo(t.p2c(d), i.p2c(p)), d != m && (y.lineTo(t.p2c(d), i.p2c(p)), y.lineTo(t.p2c(m), i.p2c(p)))
                            }
                        }
                    }
                }(e.datapoints, e.xaxis, e.yaxis));
                0 < i && t(e.datapoints, 0, 0, e.xaxis, e.yaxis);
                y.restore()
            }(e), e.bars.show && function (c) {
                var e;
                switch (y.save(), y.translate(w.left, w.top), y.lineWidth = c.bars.lineWidth, y.strokeStyle = c.color, c.bars.align) {
                    case "left":
                        e = 0;
                        break;
                    case "right":
                        e = -c.bars.barWidth;
                        break;
                    default:
                        e = -c.bars.barWidth / 2
                }
                var t = c.bars.fill ? function (e, t) {
                    return P(c.bars, c.color, e, t)
                } : null;
                (function (e, t, i, n, o, r) {
                    for (var a = e.points, l = e.pointsize, s = 0; s < a.length; s += l) null != a[s] && k(a[s], a[s + 1], a[s + 2], t, i, n, o, r, y, c.bars.horizontal, c.bars.lineWidth)
                })(c.datapoints, e, e + c.bars.barWidth, t, c.xaxis, c.yaxis), y.restore()
            }(e), e.points.show && function (e) {
                function t(e, t, i, n, o, r, a, l) {
                    for (var s = e.points, c = e.pointsize, h = 0; h < s.length; h += c) {
                        var u = s[h],
                            f = s[h + 1];
                        null == u || u < r.min || u > r.max || f < a.min || f > a.max || (y.beginPath(), u = r.p2c(u), f = a.p2c(f) + n, "circle" == l ? y.arc(u, f, t, 0, o ? Math.PI : 2 * Math.PI, !1) : l(y, u, f, t, o), y.closePath(), i && (y.fillStyle = i, y.fill()), y.stroke())
                    }
                }
                y.save(), y.translate(w.left, w.top);
                var i = e.points.lineWidth,
                    n = e.shadowSize,
                    o = e.points.radius,
                    r = e.points.symbol;
                0 == i && (i = 1e-4);
                if (0 < i && 0 < n) {
                    var a = n / 2;
                    y.lineWidth = a, y.strokeStyle = "rgba(0,0,0,0.1)", t(e.datapoints, o, null, a + a / 2, !0, e.xaxis, e.yaxis, r), y.strokeStyle = "rgba(0,0,0,0.2)", t(e.datapoints, o, null, a / 2, !0, e.xaxis, e.yaxis, r)
                }
                y.lineWidth = i, y.strokeStyle = e.color, t(e.datapoints, o, P(e.points, e.color), 0, !1, e.xaxis, e.yaxis, r), y.restore()
            }(e)
        }

        function k(e, t, i, n, o, r, a, l, s, c, h) {
            var u, f, d, p, g, m, x, v, b;
            c ? (v = m = x = !0, g = !1, p = t + n, d = t + o, (f = e) < (u = i) && (b = f, f = u, u = b, m = !(g = !0))) : (g = m = x = !0, v = !1, u = e + n, f = e + o, (p = t) < (d = i) && (b = p, p = d, d = b, x = !(v = !0))), f < a.min || u > a.max || p < l.min || d > l.max || (u < a.min && (u = a.min, g = !1), f > a.max && (f = a.max, m = !1), d < l.min && (d = l.min, v = !1), p > l.max && (p = l.max, x = !1), u = a.p2c(u), d = l.p2c(d), f = a.p2c(f), p = l.p2c(p), r && (s.fillStyle = r(d, p), s.fillRect(u, p, f - u, d - p)), 0 < h && (g || m || x || v) && (s.beginPath(), s.moveTo(u, d), g ? s.lineTo(u, p) : s.moveTo(u, p), x ? s.lineTo(f, p) : s.moveTo(f, p), m ? s.lineTo(f, d) : s.moveTo(f, d), v ? s.lineTo(u, d) : s.moveTo(u, d), s.stroke()))
        }

        function P(e, t, i, n) {
            var o = e.fill;
            if (!o) return null;
            if (e.fillColor) return X(e.fillColor, i, n, t);
            var r = Q.color.parse(t);
            return r.a = "number" == typeof o ? o : .4, r.normalize(), r.toString()
        }
        A.setData = o, A.setupGrid = l, A.draw = s, A.getPlaceholder = function () {
                return m
            }, A.getCanvas = function () {
                return d.element
            }, A.getPlotOffset = function () {
                return w
            }, A.width = function () {
                return M
            }, A.height = function () {
                return T
            }, A.offset = function () {
                var e = h.offset();
                return e.left += w.left, e.top += w.top, e
            }, A.getData = function () {
                return S
            }, A.getAxes = function () {
                var i = {};
                return Q.each(p.concat(g), function (e, t) {
                    t && (i[t.direction + (1 != t.n ? t.n : "") + "axis"] = t)
                }), i
            }, A.getXAxes = function () {
                return p
            }, A.getYAxes = function () {
                return g
            }, A.c2p = u, A.p2c = function (e) {
                var t, i, n, o = {};
                for (t = 0; t < p.length; ++t)
                    if ((i = p[t]) && i.used && (n = "x" + i.n, null == e[n] && 1 == i.n && (n = "x"), null != e[n])) {
                        o.left = i.p2c(e[n]);
                        break
                    } for (t = 0; t < g.length; ++t)
                    if ((i = g[t]) && i.used && (n = "y" + i.n, null == e[n] && 1 == i.n && (n = "y"), null != e[n])) {
                        o.top = i.p2c(e[n]);
                        break
                    } return o
            }, A.getOptions = function () {
                return z
            }, A.highlight = Y, A.unhighlight = E, A.triggerRedrawOverlay = L, A.pointOffset = function (e) {
                return {
                    left: parseInt(p[x(e, "x") - 1].p2c(+e.x) + w.left, 10),
                    top: parseInt(g[x(e, "y") - 1].p2c(+e.y) + w.top, 10)
                }
            }, A.shutdown = r, A.destroy = function () {
                r(), m.removeData("plot").empty(), S = [], p = [], g = [], D = [], A = C = c = y = h = i = d = z = null
            }, A.resize = function () {
                var e = m.width(),
                    t = m.height();
                d.resize(e, t), i.resize(e, t)
            }, A.hooks = C,
            function () {
                for (var e = {
                        Canvas: V
                    }, t = 0; t < n.length; ++t) {
                    var i = n[t];
                    i.init(A, e), i.options && Q.extend(!0, z, i.options)
                }
            }(),
            function (e) {
                Q.extend(!0, z, e), e && e.colors && (z.colors = e.colors);
                null == z.xaxis.color && (z.xaxis.color = Q.color.parse(z.grid.color).scale("a", .22).toString());
                null == z.yaxis.color && (z.yaxis.color = Q.color.parse(z.grid.color).scale("a", .22).toString());
                null == z.xaxis.tickColor && (z.xaxis.tickColor = z.grid.tickColor || z.xaxis.color);
                null == z.yaxis.tickColor && (z.yaxis.tickColor = z.grid.tickColor || z.yaxis.color);
                null == z.grid.borderColor && (z.grid.borderColor = z.grid.color);
                null == z.grid.tickColor && (z.grid.tickColor = Q.color.parse(z.grid.color).scale("a", .22).toString());
                var t, i, n, o = m.css("font-size"),
                    r = o ? +o.replace("px", "") : 13,
                    a = {
                        style: m.css("font-style"),
                        size: Math.round(.8 * r),
                        variant: m.css("font-variant"),
                        weight: m.css("font-weight"),
                        family: m.css("font-family")
                    };
                for (n = z.xaxes.length || 1, t = 0; t < n; ++t)(i = z.xaxes[t]) && !i.tickColor && (i.tickColor = i.color), i = Q.extend(!0, {}, z.xaxis, i), (z.xaxes[t] = i).font && (i.font = Q.extend({}, a, i.font), i.font.color || (i.font.color = i.color), i.font.lineHeight || (i.font.lineHeight = Math.round(1.15 * i.font.size)));
                for (n = z.yaxes.length || 1, t = 0; t < n; ++t)(i = z.yaxes[t]) && !i.tickColor && (i.tickColor = i.color), i = Q.extend(!0, {}, z.yaxis, i), (z.yaxes[t] = i).font && (i.font = Q.extend({}, a, i.font), i.font.color || (i.font.color = i.color), i.font.lineHeight || (i.font.lineHeight = Math.round(1.15 * i.font.size)));
                z.xaxis.noTicks && null == z.xaxis.ticks && (z.xaxis.ticks = z.xaxis.noTicks);
                z.yaxis.noTicks && null == z.yaxis.ticks && (z.yaxis.ticks = z.yaxis.noTicks);
                z.x2axis && (z.xaxes[1] = Q.extend(!0, {}, z.xaxis, z.x2axis), z.xaxes[1].position = "top", null == z.x2axis.min && (z.xaxes[1].min = null), null == z.x2axis.max && (z.xaxes[1].max = null));
                z.y2axis && (z.yaxes[1] = Q.extend(!0, {}, z.yaxis, z.y2axis), z.yaxes[1].position = "right", null == z.y2axis.min && (z.yaxes[1].min = null), null == z.y2axis.max && (z.yaxes[1].max = null));
                z.grid.coloredAreas && (z.grid.markings = z.grid.coloredAreas);
                z.grid.coloredAreasColor && (z.grid.markingsColor = z.grid.coloredAreasColor);
                z.lines && Q.extend(!0, z.series.lines, z.lines);
                z.points && Q.extend(!0, z.series.points, z.points);
                z.bars && Q.extend(!0, z.series.bars, z.bars);
                null != z.shadowSize && (z.series.shadowSize = z.shadowSize);
                null != z.highlightColor && (z.series.highlightColor = z.highlightColor);
                for (t = 0; t < z.xaxes.length; ++t) v(p, t + 1).options = z.xaxes[t];
                for (t = 0; t < z.yaxes.length; ++t) v(g, t + 1).options = z.yaxes[t];
                for (var l in C) z.hooks[l] && z.hooks[l].length && (C[l] = C[l].concat(z.hooks[l]));
                W(C.processOptions, [z])
            }(t),
            function () {
                m.css("padding", 0).children().filter(function () {
                    return !Q(this).hasClass("flot-overlay") && !Q(this).hasClass("flot-base")
                }).remove(), "static" == m.css("position") && m.css("position", "relative");
                d = new V("flot-base", m), i = new V("flot-overlay", m), y = d.context, c = i.context, h = Q(i.element).unbind();
                var e = m.data("plot");
                e && (e.shutdown(), i.clear());
                m.data("plot", A)
            }(), o(e), l(), s(),
            function () {
                z.grid.hoverable && (h.mousemove(q), h.bind("mouseleave", O));
                z.grid.clickable && h.click(R);
                W(C.bindEvents, [h])
            }();
        var D = [],
            N = null;

        function q(e) {
            z.grid.hoverable && H("plothover", e, function (e) {
                return 0 != e.hoverable
            })
        }

        function O(e) {
            z.grid.hoverable && H("plothover", e, function (e) {
                return !1
            })
        }

        function R(e) {
            H("plotclick", e, function (e) {
                return 0 != e.clickable
            })
        }

        function H(e, t, i) {
            var n = h.offset(),
                o = t.pageX - n.left - w.left,
                r = t.pageY - n.top - w.top,
                a = u({
                    left: o,
                    top: r
                });
            a.pageX = t.pageX, a.pageY = t.pageY;
            var l = function (e, t, i) {
                var n, o, r, a = z.grid.mouseActiveRadius,
                    l = a * a + 1,
                    s = null;
                for (n = S.length - 1; 0 <= n; --n)
                    if (i(S[n])) {
                        var c = S[n],
                            h = c.xaxis,
                            u = c.yaxis,
                            f = c.datapoints.points,
                            d = h.c2p(e),
                            p = u.c2p(t),
                            g = a / h.scale,
                            m = a / u.scale;
                        if (r = c.datapoints.pointsize, h.options.inverseTransform && (g = Number.MAX_VALUE), u.options.inverseTransform && (m = Number.MAX_VALUE), c.lines.show || c.points.show)
                            for (o = 0; o < f.length; o += r) {
                                var x = f[o],
                                    v = f[o + 1];
                                if (null != x && !(g < x - d || x - d < -g || m < v - p || v - p < -m)) {
                                    var b = Math.abs(h.p2c(x) - e),
                                        k = Math.abs(u.p2c(v) - t),
                                        y = b * b + k * k;
                                    y < l && (l = y, s = [n, o / r])
                                }
                            }
                        if (c.bars.show && !s) {
                            var w, M;
                            switch (c.bars.align) {
                                case "left":
                                    w = 0;
                                    break;
                                case "right":
                                    w = -c.bars.barWidth;
                                    break;
                                default:
                                    w = -c.bars.barWidth / 2
                            }
                            for (M = w + c.bars.barWidth, o = 0; o < f.length; o += r) {
                                x = f[o], v = f[o + 1];
                                var T = f[o + 2];
                                null != x && (S[n].bars.horizontal ? d <= Math.max(T, x) && d >= Math.min(T, x) && v + w <= p && p <= v + M : x + w <= d && d <= x + M && p >= Math.min(T, v) && p <= Math.max(T, v)) && (s = [n, o / r])
                            }
                        }
                    } return s ? (n = s[0], o = s[1], r = S[n].datapoints.pointsize, {
                    datapoint: S[n].datapoints.points.slice(o * r, (o + 1) * r),
                    dataIndex: o,
                    series: S[n],
                    seriesIndex: n
                }) : null
            }(o, r, i);
            if (l && (l.pageX = parseInt(l.series.xaxis.p2c(l.datapoint[0]) + n.left + w.left, 10), l.pageY = parseInt(l.series.yaxis.p2c(l.datapoint[1]) + n.top + w.top, 10)), z.grid.autoHighlight) {
                for (var s = 0; s < D.length; ++s) {
                    var c = D[s];
                    c.auto != e || l && c.series == l.series && c.point[0] == l.datapoint[0] && c.point[1] == l.datapoint[1] || E(c.series, c.point)
                }
                l && Y(l.series, l.datapoint, e)
            }
            m.trigger(e, [a, l])
        }

        function L() {
            var e = z.interaction.redrawOverlayInterval; - 1 != e ? N || (N = setTimeout(j, e)) : j()
        }

        function j() {
            var e, t;
            for (N = null, c.save(), i.clear(), c.translate(w.left, w.top), e = 0; e < D.length; ++e)(t = D[e]).series.bars.show ? _(t.series, t.point) : G(t.series, t.point);
            c.restore(), W(C.drawOverlay, [c])
        }

        function Y(e, t, i) {
            if ("number" == typeof e && (e = S[e]), "number" == typeof t) {
                var n = e.datapoints.pointsize;
                t = e.datapoints.points.slice(n * t, n * (t + 1))
            }
            var o = B(e, t); - 1 == o ? (D.push({
                series: e,
                point: t,
                auto: i
            }), L()) : i || (D[o].auto = !1)
        }

        function E(e, t) {
            if (null == e && null == t) return D = [], void L();
            if ("number" == typeof e && (e = S[e]), "number" == typeof t) {
                var i = e.datapoints.pointsize;
                t = e.datapoints.points.slice(i * t, i * (t + 1))
            }
            var n = B(e, t); - 1 != n && (D.splice(n, 1), L())
        }

        function B(e, t) {
            for (var i = 0; i < D.length; ++i) {
                var n = D[i];
                if (n.series == e && n.point[0] == t[0] && n.point[1] == t[1]) return i
            }
            return -1
        }

        function G(e, t) {
            var i = t[0],
                n = t[1],
                o = e.xaxis,
                r = e.yaxis,
                a = "string" == typeof e.highlightColor ? e.highlightColor : Q.color.parse(e.color).scale("a", .5).toString();
            if (!(i < o.min || i > o.max || n < r.min || n > r.max)) {
                var l = e.points.radius + e.points.lineWidth / 2;
                c.lineWidth = l, c.strokeStyle = a;
                var s = 1.5 * l;
                i = o.p2c(i), n = r.p2c(n), c.beginPath(), "circle" == e.points.symbol ? c.arc(i, n, s, 0, 2 * Math.PI, !1) : e.points.symbol(c, i, n, s, !1), c.closePath(), c.stroke()
            }
        }

        function _(e, t) {
            var i, n = "string" == typeof e.highlightColor ? e.highlightColor : Q.color.parse(e.color).scale("a", .5).toString(),
                o = n;
            switch (e.bars.align) {
                case "left":
                    i = 0;
                    break;
                case "right":
                    i = -e.bars.barWidth;
                    break;
                default:
                    i = -e.bars.barWidth / 2
            }
            c.lineWidth = e.bars.lineWidth, c.strokeStyle = n, k(t[0], t[1], t[2] || 0, i, i + e.bars.barWidth, function () {
                return o
            }, e.xaxis, e.yaxis, c, e.bars.horizontal, e.bars.lineWidth)
        }

        function X(e, t, i, n) {
            if ("string" == typeof e) return e;
            for (var o = y.createLinearGradient(0, i, 0, t), r = 0, a = e.colors.length; r < a; ++r) {
                var l = e.colors[r];
                if ("string" != typeof l) {
                    var s = Q.color.parse(n);
                    null != l.brightness && (s = s.scale("rgb", l.brightness)), null != l.opacity && (s.a *= l.opacity), l = s.toString()
                }
                o.addColorStop(r / (a - 1), l)
            }
            return o
        }
    }
    Q.fn.detach || (Q.fn.detach = function () {
        return this.each(function () {
            this.parentNode && this.parentNode.removeChild(this)
        })
    }), V.prototype.resize = function (e, t) {
        if (e <= 0 || t <= 0) throw new Error("Invalid dimensions for plot, width = " + e + ", height = " + t);
        var i = this.element,
            n = this.context,
            o = this.pixelRatio;
        this.width != e && (i.width = e * o, i.style.width = e + "px", this.width = e), this.height != t && (i.height = t * o, i.style.height = t + "px", this.height = t), n.restore(), n.save(), n.scale(o, o)
    }, V.prototype.clear = function () {
        this.context.clearRect(0, 0, this.width, this.height)
    }, V.prototype.render = function () {
        var e = this._textCache;
        for (var t in e)
            if (d.call(e, t)) {
                var i = this.getTextLayer(t),
                    n = e[t];
                for (var o in i.hide(), n)
                    if (d.call(n, o)) {
                        var r = n[o];
                        for (var a in r)
                            if (d.call(r, a)) {
                                for (var l, s = r[a].positions, c = 0; l = s[c]; c++) l.active ? l.rendered || (i.append(l.element), l.rendered = !0) : (s.splice(c--, 1), l.rendered && l.element.detach());
                                0 == s.length && delete r[a]
                            }
                    } i.show()
            }
    }, V.prototype.getTextLayer = function (e) {
        var t = this.text[e];
        return null == t && (null == this.textContainer && (this.textContainer = Q("<div class='flot-text'></div>").css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            "font-size": "smaller",
            color: "#545454"
        }).insertAfter(this.element)), t = this.text[e] = Q("<div></div>").addClass(e).css({
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        }).appendTo(this.textContainer)), t
    }, V.prototype.getTextInfo = function (e, t, i, n, o) {
        var r, a, l, s;
        if (t = "" + t, r = "object" == typeof i ? i.style + " " + i.variant + " " + i.weight + " " + i.size + "px/" + i.lineHeight + "px " + i.family : i, null == (a = this._textCache[e]) && (a = this._textCache[e] = {}), null == (l = a[r]) && (l = a[r] = {}), null == (s = l[t])) {
            var c = Q("<div></div>").html(t).css({
                position: "absolute",
                "max-width": o,
                top: -9999
            }).appendTo(this.getTextLayer(e));
            "object" == typeof i ? c.css({
                font: r,
                color: i.color
            }) : "string" == typeof i && c.addClass(i), s = l[t] = {
                width: c.outerWidth(!0),
                height: c.outerHeight(!0),
                element: c,
                positions: []
            }, c.detach()
        }
        return s
    }, V.prototype.addText = function (e, t, i, n, o, r, a, l, s) {
        var c = this.getTextInfo(e, n, o, r, a),
            h = c.positions;
        "center" == l ? t -= c.width / 2 : "right" == l && (t -= c.width), "middle" == s ? i -= c.height / 2 : "bottom" == s && (i -= c.height);
        for (var u, f = 0; u = h[f]; f++)
            if (u.x == t && u.y == i) return void(u.active = !0);
        u = {
            active: !0,
            rendered: !1,
            element: h.length ? c.element.clone() : c.element,
            x: t,
            y: i
        }, h.push(u), u.element.css({
            top: Math.round(i),
            left: Math.round(t),
            "text-align": l
        })
    }, V.prototype.removeText = function (e, t, i, n, o, r) {
        if (null == n) {
            var a = this._textCache[e];
            if (null != a)
                for (var l in a)
                    if (d.call(a, l)) {
                        var s = a[l];
                        for (var c in s)
                            if (d.call(s, c))
                                for (var h = s[c].positions, u = 0; f = h[u]; u++) f.active = !1
                    }
        } else {
            var f;
            for (h = this.getTextInfo(e, n, o, r).positions, u = 0; f = h[u]; u++) f.x == t && f.y == i && (f.active = !1)
        }
    }, Q.plot = function (e, t, i) {
        return new n(Q(e), t, i, Q.plot.plugins)
    }, Q.plot.version = "0.8.3", Q.plot.plugins = [], Q.fn.plot = function (e, t) {
        return this.each(function () {
            Q.plot(this, e, t)
        })
    }
}(jQuery),
function (a, l, s) {
    var c, h = [],
        u = a.resize = a.extend(a.resize, {}),
        f = !1,
        i = "setTimeout",
        d = "resize",
        p = d + "-special-event",
        g = "pendingDelay",
        n = "activeDelay",
        o = "throttleWindow";

    function m(e) {
        !0 === f && (f = e || 1);
        for (var t = h.length - 1; 0 <= t; t--) {
            var i = a(h[t]);
            if (i[0] == l || i.is(":visible")) {
                var n = i.width(),
                    o = i.height(),
                    r = i.data(p);
                !r || n === r.w && o === r.h || (i.trigger(d, [r.w = n, r.h = o]), f = e || !0)
            } else(r = i.data(p)).w = 0, r.h = 0
        }
        null !== c && (f && (null == e || e - f < 1e3) ? c = l.requestAnimationFrame(m) : (c = setTimeout(m, u[g]), f = !1))
    }
    u[g] = 200, u[n] = 20, u[o] = !0, a.event.special[d] = {
        setup: function () {
            if (!u[o] && this[i]) return !1;
            var e = a(this);
            h.push(this), e.data(p, {
                w: e.width(),
                h: e.height()
            }), 1 === h.length && (c = s, m())
        },
        teardown: function () {
            if (!u[o] && this[i]) return !1;
            for (var e = a(this), t = h.length - 1; 0 <= t; t--)
                if (h[t] == this) {
                    h.splice(t, 1);
                    break
                } e.removeData(p), h.length || (f ? cancelAnimationFrame(c) : clearTimeout(c), c = null)
        },
        add: function (e) {
            if (!u[o] && this[i]) return !1;
            var r;

            function t(e, t, i) {
                var n = a(this),
                    o = n.data(p) || {};
                o.w = t !== s ? t : n.width(), o.h = i !== s ? i : n.height(), r.apply(this, arguments)
            }
            if (a.isFunction(e)) return r = e, t;
            r = e.handler, e.handler = t
        }
    }, l.requestAnimationFrame || (l.requestAnimationFrame = l.webkitRequestAnimationFrame || l.mozRequestAnimationFrame || l.oRequestAnimationFrame || l.msRequestAnimationFrame || function (e, t) {
        return l.setTimeout(function () {
            e((new Date).getTime())
        }, u[n])
    }), l.cancelAnimationFrame || (l.cancelAnimationFrame = l.webkitCancelRequestAnimationFrame || l.mozCancelRequestAnimationFrame || l.oCancelRequestAnimationFrame || l.msCancelRequestAnimationFrame || clearTimeout)
}(jQuery, this), jQuery.plot.plugins.push({
        init: function (t) {
            function i() {
                var e = t.getPlaceholder();
                0 != e.width() && 0 != e.height() && (t.resize(), t.setupGrid(), t.draw())
            }
            t.hooks.bindEvents.push(function (e, t) {
                e.getPlaceholder().resize(i)
            }), t.hooks.shutdown.push(function (e, t) {
                e.getPlaceholder().unbind("resize", i)
            })
        },
        options: {},
        name: "resize",
        version: "1.0"
    }),
    function (w) {
        var e = {
            series: {
                pie: {
                    show: !1,
                    radius: "auto",
                    innerRadius: 0,
                    startAngle: 1.5,
                    tilt: 1,
                    shadow: {
                        left: 5,
                        top: 15,
                        alpha: .02
                    },
                    offset: {
                        top: 0,
                        left: "auto"
                    },
                    stroke: {
                        color: "#fff",
                        width: 1
                    },
                    label: {
                        show: "auto",
                        formatter: function (e, t) {
                            return "<div style='font-size:x-small;text-align:center;padding:2px;color:" + t.color + ";'>" + e + "<br/>" + Math.round(t.percent) + "%</div>"
                        },
                        radius: 1,
                        background: {
                            color: null,
                            opacity: 0
                        },
                        threshold: 0
                    },
                    combine: {
                        threshold: -1,
                        color: null,
                        label: "Other"
                    },
                    highlight: {
                        opacity: .5
                    }
                }
            }
        };
        w.plot.plugins.push({
            init: function (h) {
                var r = null,
                    v = null,
                    b = null,
                    u = null,
                    k = null,
                    y = null,
                    s = !1,
                    f = null,
                    d = [];

                function c(e) {
                    if (0 < b.series.pie.innerRadius) {
                        e.save();
                        var t = 1 < b.series.pie.innerRadius ? b.series.pie.innerRadius : u * b.series.pie.innerRadius;
                        e.globalCompositeOperation = "destination-out", e.beginPath(), e.fillStyle = b.series.pie.stroke.color, e.arc(0, 0, t, 0, 2 * Math.PI, !1), e.fill(), e.closePath(), e.restore(), e.save(), e.beginPath(), e.strokeStyle = b.series.pie.stroke.color, e.arc(0, 0, t, 0, 2 * Math.PI, !1), e.stroke(), e.closePath(), e.restore()
                    }
                }

                function p(e, t) {
                    for (var i = !1, n = -1, o = e.length, r = o - 1; ++n < o; r = n)(e[n][1] <= t[1] && t[1] < e[r][1] || e[r][1] <= t[1] && t[1] < e[n][1]) && t[0] < (e[r][0] - e[n][0]) * (t[1] - e[n][1]) / (e[r][1] - e[n][1]) + e[n][0] && (i = !i);
                    return i
                }

                function n(e) {
                    t("plothover", e)
                }

                function o(e) {
                    t("plotclick", e)
                }

                function t(e, t) {
                    var i, n, o, r = h.offset(),
                        a = function (e, t) {
                            for (var i, n, o = h.getData(), r = h.getOptions(), a = 1 < r.series.pie.radius ? r.series.pie.radius : u * r.series.pie.radius, l = 0; l < o.length; ++l) {
                                var s = o[l];
                                if (s.pie.show) {
                                    if (f.save(), f.beginPath(), f.moveTo(0, 0), f.arc(0, 0, a, s.startAngle, s.startAngle + s.angle / 2, !1), f.arc(0, 0, a, s.startAngle + s.angle / 2, s.startAngle + s.angle, !1), f.closePath(), i = e - k, n = t - y, f.isPointInPath) {
                                        if (f.isPointInPath(e - k, t - y)) return f.restore(), {
                                            datapoint: [s.percent, s.data],
                                            dataIndex: 0,
                                            series: s,
                                            seriesIndex: l
                                        }
                                    } else if (p([
                                            [0, 0],
                                            [a * Math.cos(s.startAngle), a * Math.sin(s.startAngle)],
                                            [a * Math.cos(s.startAngle + s.angle / 4), a * Math.sin(s.startAngle + s.angle / 4)],
                                            [a * Math.cos(s.startAngle + s.angle / 2), a * Math.sin(s.startAngle + s.angle / 2)],
                                            [a * Math.cos(s.startAngle + s.angle / 1.5), a * Math.sin(s.startAngle + s.angle / 1.5)],
                                            [a * Math.cos(s.startAngle + s.angle), a * Math.sin(s.startAngle + s.angle)]
                                        ], [i, n])) return f.restore(), {
                                        datapoint: [s.percent, s.data],
                                        dataIndex: 0,
                                        series: s,
                                        seriesIndex: l
                                    };
                                    f.restore()
                                }
                            }
                            return null
                        }(parseInt(t.pageX - r.left), parseInt(t.pageY - r.top));
                    if (b.grid.autoHighlight)
                        for (var l = 0; l < d.length; ++l) {
                            var s = d[l];
                            s.auto != e || a && s.series == a.series || g(s.series)
                        }
                    a && (i = a.series, n = e, -1 == (o = m(i)) ? (d.push({
                        series: i,
                        auto: n
                    }), h.triggerRedrawOverlay()) : n || (d[o].auto = !1));
                    var c = {
                        pageX: t.pageX,
                        pageY: t.pageY
                    };
                    v.trigger(e, [c, a])
                }

                function g(e) {
                    null == e && (d = [], h.triggerRedrawOverlay());
                    var t = m(e); - 1 != t && (d.splice(t, 1), h.triggerRedrawOverlay())
                }

                function m(e) {
                    for (var t = 0; t < d.length; ++t)
                        if (d[t].series == e) return t;
                    return -1
                }
                h.hooks.processOptions.push(function (e, t) {
                    t.series.pie.show && (t.grid.show = !1, "auto" == t.series.pie.label.show && (t.legend.show ? t.series.pie.label.show = !1 : t.series.pie.label.show = !0), "auto" == t.series.pie.radius && (t.series.pie.label.show ? t.series.pie.radius = .75 : t.series.pie.radius = 1), 1 < t.series.pie.tilt ? t.series.pie.tilt = 1 : t.series.pie.tilt < 0 && (t.series.pie.tilt = 0))
                }), h.hooks.bindEvents.push(function (e, t) {
                    var i = e.getOptions();
                    i.series.pie.show && (i.grid.hoverable && t.unbind("mousemove").mousemove(n), i.grid.clickable && t.unbind("click").click(o))
                }), h.hooks.processDatapoints.push(function (e, t, i, n) {
                    var o;
                    e.getOptions().series.pie.show && (o = e, s || (s = !0, r = o.getCanvas(), v = w(r).parent(), b = o.getOptions(), o.setData(function (e) {
                        for (var t = 0, i = 0, n = 0, o = b.series.pie.combine.color, r = [], a = 0; a < e.length; ++a) {
                            var l = e[a].data;
                            w.isArray(l) && 1 == l.length && (l = l[0]), w.isArray(l) ? !isNaN(parseFloat(l[1])) && isFinite(l[1]) ? l[1] = +l[1] : l[1] = 0 : l = !isNaN(parseFloat(l)) && isFinite(l) ? [1, +l] : [1, 0], e[a].data = [l]
                        }
                        for (var a = 0; a < e.length; ++a) t += e[a].data[0][1];
                        for (var a = 0; a < e.length; ++a) {
                            var l = e[a].data[0][1];
                            l / t <= b.series.pie.combine.threshold && (i += l, n++, o || (o = e[a].color))
                        }
                        for (var a = 0; a < e.length; ++a) {
                            var l = e[a].data[0][1];
                            (n < 2 || l / t > b.series.pie.combine.threshold) && r.push(w.extend(e[a], {
                                data: [
                                    [1, l]
                                ],
                                color: e[a].color,
                                label: e[a].label,
                                angle: l * Math.PI * 2 / t,
                                percent: l / (t / 100)
                            }))
                        }
                        return 1 < n && r.push({
                            data: [
                                [1, i]
                            ],
                            color: o,
                            label: b.series.pie.combine.label,
                            angle: i * Math.PI * 2 / t,
                            percent: i / (t / 100)
                        }), r
                    }(o.getData()))))
                }), h.hooks.drawOverlay.push(function (e, t) {
                    e.getOptions().series.pie.show && function (e, t) {
                        var i = e.getOptions(),
                            n = 1 < i.series.pie.radius ? i.series.pie.radius : u * i.series.pie.radius;
                        t.save(), t.translate(k, y), t.scale(1, i.series.pie.tilt);
                        for (var o = 0; o < d.length; ++o) r(d[o].series);

                        function r(e) {
                            e.angle <= 0 || isNaN(e.angle) || (t.fillStyle = "rgba(255, 255, 255, " + i.series.pie.highlight.opacity + ")", t.beginPath(), 1e-9 < Math.abs(e.angle - 2 * Math.PI) && t.moveTo(0, 0), t.arc(0, 0, n, e.startAngle, e.startAngle + e.angle / 2, !1), t.arc(0, 0, n, e.startAngle + e.angle / 2, e.startAngle + e.angle, !1), t.closePath(), t.fill())
                        }
                        c(t), t.restore()
                    }(e, t)
                }), h.hooks.draw.push(function (e, t) {
                    e.getOptions().series.pie.show && function (e, t) {
                        if (v) {
                            var m = e.getPlaceholder().width(),
                                x = e.getPlaceholder().height(),
                                i = v.children().filter(".legend").children().width() || 0;
                            f = t, s = !1, u = Math.min(m, x / b.series.pie.tilt) / 2, y = x / 2 + b.series.pie.offset.top, k = m / 2, "auto" == b.series.pie.offset.left ? (b.legend.position.match("w") ? k += i / 2 : k -= i / 2, k < u ? k = u : m - u < k && (k = m - u)) : k += b.series.pie.offset.left;
                            for (var a = e.getData(), n = 0; 0 < n && (u *= .95), n += 1, o(), b.series.pie.tilt <= .8 && r(), !l() && n < 10;);
                            10 <= n && (o(), v.prepend("<div class='error'>Could not draw pie with labels contained inside canvas</div>")), e.setSeries && e.insertLegend && (e.setSeries(a), e.insertLegend())
                        }

                        function o() {
                            f.clearRect(0, 0, m, x), v.children().filter(".pieLabel, .pieLabelBackground").remove()
                        }

                        function r() {
                            var e = b.series.pie.shadow.left,
                                t = b.series.pie.shadow.top,
                                i = b.series.pie.shadow.alpha,
                                n = 1 < b.series.pie.radius ? b.series.pie.radius : u * b.series.pie.radius;
                            if (!(m / 2 - e <= n || n * b.series.pie.tilt >= x / 2 - t || n <= 10)) {
                                f.save(), f.translate(e, t), f.globalAlpha = i, f.fillStyle = "#000", f.translate(k, y), f.scale(1, b.series.pie.tilt);
                                for (var o = 1; o <= 10; o++) f.beginPath(), f.arc(0, 0, n, 0, 2 * Math.PI, !1), f.fill(), n -= o;
                                f.restore()
                            }
                        }

                        function l() {
                            var n = Math.PI * b.series.pie.startAngle,
                                o = 1 < b.series.pie.radius ? b.series.pie.radius : u * b.series.pie.radius;
                            f.save(), f.translate(k, y), f.scale(1, b.series.pie.tilt), f.save();
                            for (var r = n, e = 0; e < a.length; ++e) a[e].startAngle = r, t(a[e].angle, a[e].color, !0);
                            if (f.restore(), 0 < b.series.pie.stroke.width) {
                                f.save(), f.lineWidth = b.series.pie.stroke.width, r = n;
                                for (var e = 0; e < a.length; ++e) t(a[e].angle, b.series.pie.stroke.color, !1);
                                f.restore()
                            }
                            return c(f), f.restore(), !b.series.pie.label.show || function () {
                                for (var e = n, g = 1 < b.series.pie.label.radius ? b.series.pie.label.radius : u * b.series.pie.label.radius, t = 0; t < a.length; ++t) {
                                    if (a[t].percent >= 100 * b.series.pie.label.threshold && !i(a[t], e, t)) return !1;
                                    e += a[t].angle
                                }
                                return !0;

                                function i(e, t, i) {
                                    if (0 == e.data[0][1]) return !0;
                                    var n, o = b.legend.labelFormatter,
                                        r = b.series.pie.label.formatter;
                                    n = o ? o(e.label, e) : e.label, r && (n = r(n, e));
                                    var a = (t + e.angle + t) / 2,
                                        l = k + Math.round(Math.cos(a) * g),
                                        s = y + Math.round(Math.sin(a) * g) * b.series.pie.tilt,
                                        c = "<span class='pieLabel' id='pieLabel" + i + "' style='position:absolute;top:" + s + "px;left:" + l + "px;'>" + n + "</span>";
                                    v.append(c);
                                    var h = v.children("#pieLabel" + i),
                                        u = s - h.height() / 2,
                                        f = l - h.width() / 2;
                                    if (h.css("top", u), h.css("left", f), 0 < 0 - u || 0 < 0 - f || x - (u + h.height()) < 0 || m - (f + h.width()) < 0) return !1;
                                    if (0 != b.series.pie.label.background.opacity) {
                                        var d = b.series.pie.label.background.color;
                                        null == d && (d = e.color);
                                        var p = "top:" + u + "px;left:" + f + "px;";
                                        w("<div class='pieLabelBackground' style='position:absolute;width:" + h.width() + "px;height:" + h.height() + "px;" + p + "background-color:" + d + ";'></div>").css("opacity", b.series.pie.label.background.opacity).insertBefore(h)
                                    }
                                    return !0
                                }
                            }();

                            function t(e, t, i) {
                                e <= 0 || isNaN(e) || (i ? f.fillStyle = t : (f.strokeStyle = t, f.lineJoin = "round"), f.beginPath(), 1e-9 < Math.abs(e - 2 * Math.PI) && f.moveTo(0, 0), f.arc(0, 0, o, r, r + e / 2, !1), f.arc(0, 0, o, r + e / 2, r + e, !1), f.closePath(), r += e, i ? f.fill() : f.stroke())
                            }
                        }
                    }(e, t)
                })
            },
            options: e,
            name: "pie",
            version: "1.1"
        })
    }(jQuery),
    function (l) {
        function t(e, t, i, n) {
            var o = "categories" == t.xaxis.options.mode,
                r = "categories" == t.yaxis.options.mode;
            if (o || r) {
                var a = n.format;
                if (!a) {
                    var l = t;
                    if ((a = []).push({
                            x: !0,
                            number: !0,
                            required: !0
                        }), a.push({
                            y: !0,
                            number: !0,
                            required: !0
                        }), l.bars.show || l.lines.show && l.lines.fill) {
                        var s = !!(l.bars.show && l.bars.zero || l.lines.show && l.lines.zero);
                        a.push({
                            y: !0,
                            number: !0,
                            required: !1,
                            defaultValue: 0,
                            autoscale: s
                        }), l.bars.horizontal && (delete a[a.length - 1].y, a[a.length - 1].x = !0)
                    }
                    n.format = a
                }
                for (var c = 0; c < a.length; ++c) a[c].x && o && (a[c].number = !1), a[c].y && r && (a[c].number = !1)
            }
        }

        function s(e) {
            var t = [];
            for (var i in e.categories) {
                var n = e.categories[i];
                n >= e.min && n <= e.max && t.push([n, i])
            }
            return t.sort(function (e, t) {
                return e[0] - t[0]
            }), t
        }

        function n(e, t, i) {
            if ("categories" == e[t].options.mode) {
                if (!e[t].categories) {
                    var n = {},
                        o = e[t].options.categories || {};
                    if (l.isArray(o))
                        for (var r = 0; r < o.length; ++r) n[o[r]] = r;
                    else
                        for (var a in o) n[a] = o[a];
                    e[t].categories = n
                }
                e[t].options.ticks || (e[t].options.ticks = s),
                    function (e, t, i) {
                        for (var n = e.points, o = e.pointsize, r = e.format, a = t.charAt(0), l = function (e) {
                                var t = -1;
                                for (var i in e) e[i] > t && (t = e[i]);
                                return t + 1
                            }(i), s = 0; s < n.length; s += o)
                            if (null != n[s])
                                for (var c = 0; c < o; ++c) {
                                    var h = n[s + c];
                                    null != h && r[c][a] && (h in i || (i[h] = l, ++l), n[s + c] = i[h])
                                }
                    }(i, t, e[t].categories)
            }
        }

        function i(e, t, i) {
            n(t, "xaxis", i), n(t, "yaxis", i)
        }
        l.plot.plugins.push({
            init: function (e) {
                e.hooks.processRawData.push(t), e.hooks.processDatapoints.push(i)
            },
            options: {
                xaxis: {
                    categories: null
                },
                yaxis: {
                    categories: null
                }
            },
            name: "categories",
            version: "1.0"
        })
    }(jQuery),
    function (i) {
        function v(e, t) {
            return t * Math.floor(e / t)
        }

        function s(e, t, i, n) {
            if ("function" == typeof e.strftime) return e.strftime(t);
            var o, r = function (e, t) {
                    return t = "" + (null == t ? "0" : t), 1 == (e = "" + e).length ? t + e : e
                },
                a = [],
                l = !1,
                s = e.getHours(),
                c = s < 12;
            null == i && (i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), null == n && (n = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]), o = 12 < s ? s - 12 : 0 == s ? 12 : s;
            for (var h = 0; h < t.length; ++h) {
                var u = t.charAt(h);
                if (l) {
                    switch (u) {
                        case "a":
                            u = "" + n[e.getDay()];
                            break;
                        case "b":
                            u = "" + i[e.getMonth()];
                            break;
                        case "d":
                            u = r(e.getDate());
                            break;
                        case "e":
                            u = r(e.getDate(), " ");
                            break;
                        case "h":
                        case "H":
                            u = r(s);
                            break;
                        case "I":
                            u = r(o);
                            break;
                        case "l":
                            u = r(o, " ");
                            break;
                        case "m":
                            u = r(e.getMonth() + 1);
                            break;
                        case "M":
                            u = r(e.getMinutes());
                            break;
                        case "q":
                            u = "" + (Math.floor(e.getMonth() / 3) + 1);
                            break;
                        case "S":
                            u = r(e.getSeconds());
                            break;
                        case "y":
                            u = r(e.getFullYear() % 100);
                            break;
                        case "Y":
                            u = "" + e.getFullYear();
                            break;
                        case "p":
                            u = c ? "am" : "pm";
                            break;
                        case "P":
                            u = c ? "AM" : "PM";
                            break;
                        case "w":
                            u = "" + e.getDay()
                    }
                    a.push(u), l = !1
                } else "%" == u ? l = !0 : a.push(u)
            }
            return a.join("")
        }

        function n(e) {
            function t(e, t, i, n) {
                e[t] = function () {
                    return i[n].apply(i, arguments)
                }
            }
            var i = {
                date: e
            };
            null != e.strftime && t(i, "strftime", e, "strftime"), t(i, "getTime", e, "getTime"), t(i, "setTime", e, "setTime");
            for (var n = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], o = 0; o < n.length; o++) t(i, "get" + n[o], e, "getUTC" + n[o]), t(i, "set" + n[o], e, "setUTC" + n[o]);
            return i
        }

        function b(e, t) {
            if ("browser" == t.timezone) return new Date(e);
            if (t.timezone && "utc" != t.timezone) {
                if ("undefined" == typeof timezoneJS || void 0 === timezoneJS.Date) return n(new Date(e));
                var i = new timezoneJS.Date;
                return i.setTimezone(t.timezone), i.setTime(e), i
            }
            return n(new Date(e))
        }
        var k = {
                second: 1e3,
                minute: 6e4,
                hour: 36e5,
                day: 864e5,
                month: 2592e6,
                quarter: 7776e6,
                year: 525949.2 * 60 * 1e3
            },
            e = [
                [1, "second"],
                [2, "second"],
                [5, "second"],
                [10, "second"],
                [30, "second"],
                [1, "minute"],
                [2, "minute"],
                [5, "minute"],
                [10, "minute"],
                [30, "minute"],
                [1, "hour"],
                [2, "hour"],
                [4, "hour"],
                [8, "hour"],
                [12, "hour"],
                [1, "day"],
                [2, "day"],
                [3, "day"],
                [.25, "month"],
                [.5, "month"],
                [1, "month"],
                [2, "month"]
            ],
            y = e.concat([
                [3, "month"],
                [6, "month"],
                [1, "year"]
            ]),
            w = e.concat([
                [1, "quarter"],
                [2, "quarter"],
                [1, "year"]
            ]);
        i.plot.plugins.push({
            init: function (e) {
                e.hooks.processOptions.push(function (e, t) {
                    i.each(e.getAxes(), function (e, t) {
                        var x = t.options;
                        "time" == x.mode && (t.tickGenerator = function (e) {
                            var t = [],
                                i = b(e.min, x),
                                n = 0,
                                o = x.tickSize && "quarter" === x.tickSize[1] || x.minTickSize && "quarter" === x.minTickSize[1] ? w : y;
                            null != x.minTickSize && (n = "number" == typeof x.tickSize ? x.tickSize : x.minTickSize[0] * k[x.minTickSize[1]]);
                            for (var r = 0; r < o.length - 1 && !(e.delta < (o[r][0] * k[o[r][1]] + o[r + 1][0] * k[o[r + 1][1]]) / 2 && o[r][0] * k[o[r][1]] >= n); ++r);
                            var a = o[r][0],
                                l = o[r][1];
                            if ("year" == l) {
                                if (null != x.minTickSize && "year" == x.minTickSize[1]) a = Math.floor(x.minTickSize[0]);
                                else {
                                    var s = Math.pow(10, Math.floor(Math.log(e.delta / k.year) / Math.LN10)),
                                        c = e.delta / k.year / s;
                                    a = c < 1.5 ? 1 : c < 3 ? 2 : c < 7.5 ? 5 : 10, a *= s
                                }
                                a < 1 && (a = 1)
                            }
                            e.tickSize = x.tickSize || [a, l];
                            var h = e.tickSize[0];
                            l = e.tickSize[1];
                            var u = h * k[l];
                            "second" == l ? i.setSeconds(v(i.getSeconds(), h)) : "minute" == l ? i.setMinutes(v(i.getMinutes(), h)) : "hour" == l ? i.setHours(v(i.getHours(), h)) : "month" == l ? i.setMonth(v(i.getMonth(), h)) : "quarter" == l ? i.setMonth(3 * v(i.getMonth() / 3, h)) : "year" == l && i.setFullYear(v(i.getFullYear(), h)), i.setMilliseconds(0), k.minute <= u && i.setSeconds(0), k.hour <= u && i.setMinutes(0), k.day <= u && i.setHours(0), 4 * k.day <= u && i.setDate(1), 2 * k.month <= u && i.setMonth(v(i.getMonth(), 3)), 2 * k.quarter <= u && i.setMonth(v(i.getMonth(), 6)), k.year <= u && i.setMonth(0);
                            var f, d = 0,
                                p = Number.NaN;
                            do {
                                if (f = p, p = i.getTime(), t.push(p), "month" == l || "quarter" == l)
                                    if (h < 1) {
                                        i.setDate(1);
                                        var g = i.getTime();
                                        i.setMonth(i.getMonth() + ("quarter" == l ? 3 : 1));
                                        var m = i.getTime();
                                        i.setTime(p + d * k.hour + (m - g) * h), d = i.getHours(), i.setHours(0)
                                    } else i.setMonth(i.getMonth() + h * ("quarter" == l ? 3 : 1));
                                else "year" == l ? i.setFullYear(i.getFullYear() + h) : i.setTime(p + u)
                            } while (p < e.max && p != f);
                            return t
                        }, t.tickFormatter = function (e, t) {
                            var i = b(e, t.options);
                            if (null != x.timeformat) return s(i, x.timeformat, x.monthNames, x.dayNames);
                            var n = t.options.tickSize && "quarter" == t.options.tickSize[1] || t.options.minTickSize && "quarter" == t.options.minTickSize[1],
                                o = t.tickSize[0] * k[t.tickSize[1]],
                                r = t.max - t.min,
                                a = x.twelveHourClock ? " %p" : "",
                                l = x.twelveHourClock ? "%I" : "%H";
                            return s(i, o < k.minute ? l + ":%M:%S" + a : o < k.day ? r < 2 * k.day ? l + ":%M" + a : "%b %d " + l + ":%M" + a : o < k.month ? "%b %d" : n && o < k.quarter || !n && o < k.year ? r < k.year ? "%b" : "%b %Y" : n && o < k.year ? r < k.year ? "Q%q" : "Q%q %Y" : "%Y", x.monthNames, x.dayNames)
                        })
                    })
                })
            },
            options: {
                xaxis: {
                    timezone: null,
                    timeformat: null,
                    twelveHourClock: !1,
                    monthNames: null
                }
            },
            name: "time",
            version: "1.0"
        }), i.plot.formatDate = s, i.plot.dateGenerator = b
    }(jQuery);