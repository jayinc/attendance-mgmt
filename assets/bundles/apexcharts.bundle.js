! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).ApexCharts = e()
}(this, function () {
    "use strict";

    function w(t) {
        return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function s(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
        }
    }

    function r(t, e, i) {
        return e && s(t.prototype, e), i && s(t, i), t
    }

    function o(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = i, t
    }

    function ot(e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = null != arguments[t] ? arguments[t] : {},
                s = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(i).filter(function (t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable
            }))), s.forEach(function (t) {
                o(e, t, i[t])
            })
        }
        return e
    }

    function a(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }), e && i(t, e)
    }

    function l(t) {
        return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        })(t)
    }

    function i(t, e) {
        return (i = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e, t
        })(t, e)
    }

    function h(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? function (t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t) : e
    }

    function S(t) {
        return function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                return i
            }
        }(t) || function (t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
        }(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }
    var lt = function () {
            function s() {
                n(this, s)
            }
            return r(s, [{
                key: "shadeRGBColor",
                value: function (t, e) {
                    var i = e.split(","),
                        s = t < 0 ? 0 : 255,
                        a = t < 0 ? -1 * t : t,
                        n = parseInt(i[0].slice(4)),
                        r = parseInt(i[1]),
                        o = parseInt(i[2]);
                    return "rgb(" + (Math.round((s - n) * a) + n) + "," + (Math.round((s - r) * a) + r) + "," + (Math.round((s - o) * a) + o) + ")"
                }
            }, {
                key: "shadeHexColor",
                value: function (t, e) {
                    var i = parseInt(e.slice(1), 16),
                        s = t < 0 ? 0 : 255,
                        a = t < 0 ? -1 * t : t,
                        n = i >> 16,
                        r = i >> 8 & 255,
                        o = 255 & i;
                    return "#" + (16777216 + 65536 * (Math.round((s - n) * a) + n) + 256 * (Math.round((s - r) * a) + r) + (Math.round((s - o) * a) + o)).toString(16).slice(1)
                }
            }, {
                key: "shadeColor",
                value: function (t, e) {
                    return 7 < e.length ? this.shadeRGBColor(t, e) : this.shadeHexColor(t, e)
                }
            }], [{
                key: "bind",
                value: function (t, e) {
                    return function () {
                        return t.apply(e, arguments)
                    }
                }
            }, {
                key: "isObject",
                value: function (t) {
                    return t && "object" === w(t) && !Array.isArray(t) && null != t
                }
            }, {
                key: "listToArray",
                value: function (t) {
                    var e, i = [];
                    for (e = 0; e < t.length; e++) i[e] = t[e];
                    return i
                }
            }, {
                key: "extend",
                value: function (e, i) {
                    var s = this;
                    "function" != typeof Object.assign && (Object.assign = function (t) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        for (var e = Object(t), i = 1; i < arguments.length; i++) {
                            var s = arguments[i];
                            if (null != s)
                                for (var a in s) s.hasOwnProperty(a) && (e[a] = s[a])
                        }
                        return e
                    });
                    var a = Object.assign({}, e);
                    return this.isObject(e) && this.isObject(i) && Object.keys(i).forEach(function (t) {
                        s.isObject(i[t]) && t in e ? a[t] = s.extend(e[t], i[t]) : Object.assign(a, o({}, t, i[t]))
                    }), a
                }
            }, {
                key: "extendArray",
                value: function (t, e) {
                    var i = [];
                    return t.map(function (t) {
                        i.push(s.extend(e, t))
                    }), i
                }
            }, {
                key: "monthMod",
                value: function (t) {
                    return t % 12
                }
            }, {
                key: "addProps",
                value: function (t, e, i) {
                    "string" == typeof e && (e = e.split(".")), t[e[0]] = t[e[0]] || {};
                    var s = t[e[0]];
                    return 1 < e.length ? (e.shift(), this.addProps(s, e, i)) : t[e[0]] = i, t
                }
            }, {
                key: "clone",
                value: function (t) {
                    if ("[object Array]" === Object.prototype.toString.call(t)) {
                        for (var e = [], i = 0; i < t.length; i++) e[i] = this.clone(t[i]);
                        return e
                    }
                    if ("object" !== w(t)) return t;
                    var s = {};
                    for (var a in t) t.hasOwnProperty(a) && (s[a] = this.clone(t[a]));
                    return s
                }
            }, {
                key: "log10",
                value: function (t) {
                    return Math.log(t) / Math.LN10
                }
            }, {
                key: "roundToBase10",
                value: function (t) {
                    return Math.pow(10, Math.floor(Math.log10(t)))
                }
            }, {
                key: "roundToBase",
                value: function (t, e) {
                    return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)))
                }
            }, {
                key: "parseNumber",
                value: function (t) {
                    return null === t ? t : parseFloat(t)
                }
            }, {
                key: "noExponents",
                value: function (t) {
                    var e = String(t).split(/[eE]/);
                    if (1 == e.length) return e[0];
                    var i = "",
                        s = t < 0 ? "-" : "",
                        a = e[0].replace(".", ""),
                        n = Number(e[1]) + 1;
                    if (n < 0) {
                        for (i = s + "0."; n++;) i += "0";
                        return i + a.replace(/^\-/, "")
                    }
                    for (n -= a.length; n--;) i += "0";
                    return a + i
                }
            }, {
                key: "getDimensions",
                value: function (t) {
                    var e = getComputedStyle(t),
                        i = [],
                        s = t.clientHeight,
                        a = t.clientWidth;
                    return s -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), a -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i.push(a), i.push(s), i
                }
            }, {
                key: "getBoundingClientRect",
                value: function (t) {
                    var e = t.getBoundingClientRect();
                    return {
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        width: e.width,
                        height: e.height,
                        x: e.x,
                        y: e.y
                    }
                }
            }, {
                key: "hexToRgba",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "#999999",
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : .6;
                    "#" !== t.substring(0, 1) && (t = "#999999");
                    var i = t.replace("#", "");
                    i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
                    for (var s = 0; s < i.length; s++) i[s] = parseInt(1 === i[s].length ? i[s] + i[s] : i[s], 16);
                    return void 0 !== e && i.push(e), "rgba(" + i.join(",") + ")"
                }
            }, {
                key: "getOpacityFromRGBA",
                value: function (t) {
                    return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))[3]
                }
            }, {
                key: "rgb2hex",
                value: function (t) {
                    return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && 4 === t.length ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : ""
                }
            }, {
                key: "isColorHex",
                value: function (t) {
                    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)
                }
            }, {
                key: "polarToCartesian",
                value: function (t, e, i, s) {
                    var a = (s - 90) * Math.PI / 180;
                    return {
                        x: t + i * Math.cos(a),
                        y: e + i * Math.sin(a)
                    }
                }
            }, {
                key: "escapeString",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "x",
                        i = t.toString().slice();
                    return i.replace(/[` ~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, e)
                }
            }, {
                key: "negToZero",
                value: function (t) {
                    return t < 0 ? 0 : t
                }
            }, {
                key: "moveIndexInArray",
                value: function (t, e, i) {
                    if (i >= t.length)
                        for (var s = i - t.length + 1; s--;) t.push(void 0);
                    return t.splice(i, 0, t.splice(e, 1)[0]), t
                }
            }, {
                key: "extractNumber",
                value: function (t) {
                    return parseFloat(t.replace(/[^\d\.]*/g, ""))
                }
            }, {
                key: "randomString",
                value: function (t) {
                    for (var e = "", i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", s = 0; s < t; s++) e += i.charAt(Math.floor(Math.random() * i.length));
                    return e
                }
            }, {
                key: "findAncestor",
                value: function (t, e) {
                    for (;
                        (t = t.parentElement) && !t.classList.contains(e););
                    return t
                }
            }, {
                key: "setELstyles",
                value: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && (t.style.key = e[i])
                }
            }, {
                key: "isNumber",
                value: function (t) {
                    return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10))
                }
            }, {
                key: "isFloat",
                value: function (t) {
                    return Number(t) === t && t % 1 != 0
                }
            }, {
                key: "isSafari",
                value: function () {
                    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
                }
            }, {
                key: "isFirefox",
                value: function () {
                    return -1 < navigator.userAgent.toLowerCase().indexOf("firefox")
                }
            }, {
                key: "isIE11",
                value: function () {
                    if (-1 !== window.navigator.userAgent.indexOf("MSIE") || -1 < window.navigator.appVersion.indexOf("Trident/")) return !0
                }
            }, {
                key: "isIE",
                value: function () {
                    var t = window.navigator.userAgent,
                        e = t.indexOf("MSIE ");
                    if (0 < e) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
                    if (0 < t.indexOf("Trident/")) {
                        var i = t.indexOf("rv:");
                        return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
                    }
                    var s = t.indexOf("Edge/");
                    return 0 < s && parseInt(t.substring(s + 5, t.indexOf(".", s)), 10)
                }
            }]), s
        }(),
        I = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "getDefaultFilter",
                value: function (t, e) {
                    var i = this.w;
                    t.unfilter(!0), (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), "none" !== i.config.states.normal.filter ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addNormalFilter",
                value: function (t, e) {
                    var i = this.w;
                    i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e)
                }
            }, {
                key: "addLightenFilter",
                value: function (t, i, e) {
                    var s = this,
                        a = this.w,
                        n = e.intensity;
                    if (!lt.isFirefox()) {
                        t.unfilter(!0);
                        var r = new window.SVG.Filter;
                        r.size("120%", "180%", "-5%", "-40%"), t.filter(function (t) {
                            var e = a.config.chart.dropShadow;
                            (r = e.enabled ? s.addShadow(t, i, e) : t).componentTransfer({
                                rgb: {
                                    type: "linear",
                                    slope: 1.5,
                                    intercept: n
                                }
                            })
                        }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
                    }
                }
            }, {
                key: "addDarkenFilter",
                value: function (t, i, e) {
                    var s = this,
                        a = this.w,
                        n = e.intensity;
                    if (!lt.isFirefox()) {
                        t.unfilter(!0);
                        var r = new window.SVG.Filter;
                        r.size("120%", "180%", "-5%", "-40%"), t.filter(function (t) {
                            var e = a.config.chart.dropShadow;
                            (r = e.enabled ? s.addShadow(t, i, e) : t).componentTransfer({
                                rgb: {
                                    type: "linear",
                                    slope: n
                                }
                            })
                        }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse")
                    }
                }
            }, {
                key: "applyFilter",
                value: function (t, e, i) {
                    var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : .5;
                    switch (i) {
                        case "none":
                            this.addNormalFilter(t, e);
                            break;
                        case "lighten":
                            this.addLightenFilter(t, e, {
                                intensity: s
                            });
                            break;
                        case "darken":
                            this.addDarkenFilter(t, e, {
                                intensity: s
                            })
                    }
                }
            }, {
                key: "addShadow",
                value: function (t, e, i) {
                    var s = i.blur,
                        a = i.top,
                        n = i.left,
                        r = i.color,
                        o = i.opacity,
                        l = t.flood(Array.isArray(r) ? r[e] : r, o).composite(t.sourceAlpha, "in").offset(n, a).gaussianBlur(s).merge(t.source);
                    return t.blend(t.source, l)
                }
            }, {
                key: "dropShadow",
                value: function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        s = e.top,
                        a = e.left,
                        n = e.blur,
                        r = e.color,
                        o = e.opacity,
                        l = e.noUserSpaceOnUse;
                    return t.unfilter(!0), r = Array.isArray(r) ? r[i] : r, (new window.SVG.Filter).size("120%", "180%", "-5%", "-40%"), t.filter(function (t) {
                        var e;
                        e = lt.isSafari() || lt.isFirefox() || lt.isIE() ? t.flood(r, o).composite(t.sourceAlpha, "in").offset(a, s).gaussianBlur(n) : t.flood(r, o).composite(t.sourceAlpha, "in").offset(a, s).gaussianBlur(n).merge(t.source), t.blend(t.source, e)
                    }), l || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), t
                }
            }, {
                key: "setSelectionFilter",
                value: function (t, e, i) {
                    var s = this.w;
                    if (void 0 !== s.globals.selectedDataPoints[e] && -1 < s.globals.selectedDataPoints[e].indexOf(i)) {
                        t.node.setAttribute("selected", !0);
                        var a = s.config.states.active.filter;
                        "none" !== a && this.applyFilter(t, e, a.type, a.value)
                    }
                }
            }]), e
        }(),
        Y = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.setEasingFunctions()
            }
            return r(e, [{
                key: "setEasingFunctions",
                value: function () {
                    var t;
                    switch (this.w.config.chart.animations.easing) {
                        case "linear":
                            t = "-";
                            break;
                        case "easein":
                            t = "<";
                            break;
                        case "easeout":
                            t = ">";
                            break;
                        case "easeinout":
                            t = "<>";
                            break;
                        case "swing":
                            t = function (t) {
                                return (t -= 1) * t * (2.70158 * t + 1.70158) + 1
                            };
                            break;
                        case "bounce":
                            t = function (t) {
                                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                            };
                            break;
                        case "elastic":
                            t = function (t) {
                                return t === !!t ? t : Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
                            };
                            break;
                        default:
                            t = "<>"
                    }
                    this.w.globals.easing = t
                }
            }, {
                key: "animateLine",
                value: function (t, e, i, s) {
                    t.attr(e).animate(s).attr(i)
                }
            }, {
                key: "animateCircleRadius",
                value: function (t, e, i, s, a) {
                    e || (e = 0), t.attr({
                        r: e
                    }).animate(s, a).attr({
                        r: i
                    })
                }
            }, {
                key: "animateCircle",
                value: function (t, e, i, s, a) {
                    t.attr({
                        r: e.r,
                        cx: e.cx,
                        cy: e.cy
                    }).animate(s, a).attr({
                        r: i.r,
                        cx: i.cx,
                        cy: i.cy
                    })
                }
            }, {
                key: "animateRect",
                value: function (t, e, i, s, a) {
                    t.attr(e).animate(s).attr(i).afterAll(function () {
                        a()
                    })
                }
            }, {
                key: "animatePathsGradually",
                value: function (t) {
                    var e = t.el,
                        i = t.j,
                        s = t.pathFrom,
                        a = t.pathTo,
                        n = t.speed,
                        r = t.delay,
                        o = t.strokeWidth,
                        l = this.w,
                        h = 0;
                    l.config.chart.animations.animateGradually.enabled && (h = l.config.chart.animations.animateGradually.delay), l.config.chart.animations.dynamicAnimation.enabled && l.globals.dataChanged && (h = 0), this.morphSVG(e, i, s, a, n, o, r * h)
                }
            }, {
                key: "showDelayedElements",
                value: function () {
                    this.w.globals.delayedElements.forEach(function (t) {
                        t.el.classList.remove("hidden")
                    })
                }
            }, {
                key: "morphSVG",
                value: function (t, e, i, s, a, n, r) {
                    var o = this,
                        l = this.w;
                    i || (i = t.attr("pathFrom")), s || (s = t.attr("pathTo")), (!i || -1 < i.indexOf("undefined") || -1 < i.indexOf("NaN")) && (i = "M 0 ".concat(l.globals.gridHeight), a = 1), (-1 < s.indexOf("undefined") || -1 < s.indexOf("NaN")) && (s = "M 0 ".concat(l.globals.gridHeight), a = 1), l.globals.shouldAnimate || (a = 1), t.plot(i).animate(1, l.globals.easing, r).plot(i).animate(a, l.globals.easing, r).plot(s).afterAll(function () {
                        lt.isNumber(e) ? e === l.globals.series[l.globals.maxValsInArrayIndex].length - 2 && l.globals.shouldAnimate && (l.globals.animationEnded = !0) : l.globals.shouldAnimate && (l.globals.animationEnded = !0, "function" == typeof l.config.chart.events.animationEnd && l.config.chart.events.animationEnd(o.ctx, l)), o.showDelayedElements()
                    })
                }
            }]), e
        }(),
        ht = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "drawLine",
                value: function (t, e, i, s) {
                    var a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "#a8a8a8",
                        n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0,
                        r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null;
                    return this.w.globals.dom.Paper.line().attr({
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: s,
                        stroke: a,
                        "stroke-dasharray": n,
                        "stroke-width": r
                    })
                }
            }, {
                key: "drawRect",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0,
                        a = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : "#fefefe",
                        r = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : 1,
                        o = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null,
                        l = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : null,
                        h = 9 < arguments.length && void 0 !== arguments[9] ? arguments[9] : 0,
                        c = this.w.globals.dom.Paper.rect();
                    return c.attr({
                        x: t,
                        y: e,
                        width: 0 < i ? i : 0,
                        height: 0 < s ? s : 0,
                        rx: a,
                        ry: a,
                        fill: n,
                        opacity: r,
                        "stroke-width": null !== o ? o : 0,
                        stroke: null !== l ? l : "none",
                        "stroke-dasharray": h
                    }), c
                }
            }, {
                key: "drawPolygon",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "#e1e1e1",
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "none";
                    return this.w.globals.dom.Paper.polygon(t).attr({
                        fill: i,
                        stroke: e
                    })
                }
            }, {
                key: "drawCircle",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.w.globals.dom.Paper.circle(2 * t);
                    return null !== e && i.attr(e), i
                }
            }, {
                key: "drawPath",
                value: function (t) {
                    var e = t.d,
                        i = void 0 === e ? "" : e,
                        s = t.stroke,
                        a = void 0 === s ? "#a8a8a8" : s,
                        n = t.strokeWidth,
                        r = void 0 === n ? 1 : n,
                        o = t.fill,
                        l = t.fillOpacity,
                        h = void 0 === l ? 1 : l,
                        c = t.strokeOpacity,
                        d = void 0 === c ? 1 : c,
                        u = t.classes,
                        g = t.strokeLinecap,
                        f = void 0 === g ? null : g,
                        p = t.strokeDashArray,
                        x = void 0 === p ? 0 : p,
                        b = this.w;
                    return null === f && (f = b.config.stroke.lineCap), (-1 < i.indexOf("undefined") || -1 < i.indexOf("NaN")) && (i = "M 0 ".concat(b.globals.gridHeight)), b.globals.dom.Paper.path(i).attr({
                        fill: o,
                        "fill-opacity": h,
                        stroke: a,
                        "stroke-opacity": d,
                        "stroke-linecap": f,
                        "stroke-width": r,
                        "stroke-dasharray": x,
                        class: u
                    })
                }
            }, {
                key: "group",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        e = this.w.globals.dom.Paper.group();
                    return null !== t && e.attr(t), e
                }
            }, {
                key: "move",
                value: function (t, e) {
                    return ["M", t, e].join(" ")
                }
            }, {
                key: "line",
                value: function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        s = null;
                    return null === i ? s = ["L", t, e].join(" ") : "H" === i ? s = ["H", t].join(" ") : "V" === i && (s = ["V", e].join(" ")), s
                }
            }, {
                key: "curve",
                value: function (t, e, i, s, a, n) {
                    return ["C", t, e, i, s, a, n].join(" ")
                }
            }, {
                key: "quadraticCurve",
                value: function (t, e, i, s) {
                    return ["Q", t, e, i, s].join(" ")
                }
            }, {
                key: "arc",
                value: function (t, e, i, s, a, n, r) {
                    var o = "A";
                    return 7 < arguments.length && void 0 !== arguments[7] && arguments[7] && (o = "a"), [o, t, e, i, s, a, n, r].join(" ")
                }
            }, {
                key: "renderPaths",
                value: function (t) {
                    var e, i = t.i,
                        s = t.j,
                        a = t.realIndex,
                        n = t.pathFrom,
                        r = t.pathTo,
                        o = t.stroke,
                        l = t.strokeWidth,
                        h = t.strokeLinecap,
                        c = t.fill,
                        d = t.animationDelay,
                        u = t.initialSpeed,
                        g = t.dataChangeSpeed,
                        f = t.className,
                        p = t.id,
                        x = t.shouldClipToGrid,
                        b = void 0 === x || x,
                        m = t.bindEventsOnPaths,
                        v = void 0 === m || m,
                        y = t.drawShadow,
                        w = void 0 === y || y,
                        k = this.w,
                        A = new I(this.ctx),
                        S = new Y(this.ctx),
                        C = this.w.config.chart.animations.enabled,
                        L = C && this.w.config.chart.animations.dynamicAnimation.enabled,
                        z = !!(C && !k.globals.resized || L && k.globals.dataChanged && k.globals.shouldAnimate);
                    z ? e = n : (e = r, this.w.globals.animationEnded = !0);
                    var P, E = k.config.stroke.dashArray;
                    P = Array.isArray(E) ? E[a] : k.config.stroke.dashArray;
                    var M = this.drawPath({
                        d: e,
                        stroke: o,
                        strokeWidth: l,
                        fill: c,
                        fillOpacity: 1,
                        classes: f,
                        strokeLinecap: h,
                        strokeDashArray: P
                    });
                    if (M.attr("id", "".concat(p, "-").concat(i)), M.attr("index", a), b && M.attr({
                            "clip-path": "url(#gridRectMask".concat(k.globals.cuid, ")")
                        }), "none" !== k.config.states.normal.filter.type) A.getDefaultFilter(M, a);
                    else if (k.config.chart.dropShadow.enabled && w && (!k.config.chart.dropShadow.enabledSeries || k.config.chart.dropShadow.enabledSeries && -1 !== k.config.chart.dropShadow.enabledSeries.indexOf(a))) {
                        var T = k.config.chart.dropShadow;
                        A.dropShadow(M, T, a)
                    }
                    v && (M.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, M)), M.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, M)), M.node.addEventListener("mousedown", this.pathMouseDown.bind(this, M))), M.attr({
                        pathTo: r,
                        pathFrom: n
                    });
                    var X = {
                        el: M,
                        j: s,
                        pathFrom: n,
                        pathTo: r,
                        strokeWidth: l
                    };
                    return !C || k.globals.resized || k.globals.dataChanged ? !k.globals.resized && k.globals.dataChanged || S.showDelayedElements() : S.animatePathsGradually(ot({}, X, {
                        speed: u,
                        delay: d
                    })), k.globals.dataChanged && L && z && S.animatePathsGradually(ot({}, X, {
                        speed: g
                    })), M
                }
            }, {
                key: "drawPattern",
                value: function (e, i, s) {
                    var a = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : "#a8a8a8",
                        n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0;
                    return this.w.globals.dom.Paper.pattern(i, s, function (t) {
                        "horizontalLines" === e ? t.line(0, 0, s, 0).stroke({
                            color: a,
                            width: n + 1
                        }) : "verticalLines" === e ? t.line(0, 0, 0, i).stroke({
                            color: a,
                            width: n + 1
                        }) : "slantedLines" === e ? t.line(0, 0, i, s).stroke({
                            color: a,
                            width: n
                        }) : "squares" === e ? t.rect(i, s).fill("none").stroke({
                            color: a,
                            width: n
                        }) : "circles" === e && t.circle(i).fill("none").stroke({
                            color: a,
                            width: n
                        })
                    })
                }
            }, {
                key: "drawGradient",
                value: function (t, e, i, s, a) {
                    var n, r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
                        o = 6 < arguments.length && void 0 !== arguments[6] ? arguments[6] : null,
                        l = 7 < arguments.length && void 0 !== arguments[7] ? arguments[7] : null,
                        h = 8 < arguments.length && void 0 !== arguments[8] ? arguments[8] : 0,
                        c = this.w;
                    e = lt.hexToRgba(e, s), i = lt.hexToRgba(i, a);
                    var d = 0,
                        u = 1,
                        g = 1,
                        f = null;
                    null !== o && (d = void 0 !== o[0] ? o[0] / 100 : 0, u = void 0 !== o[1] ? o[1] / 100 : 1, g = void 0 !== o[2] ? o[2] / 100 : 1, f = void 0 !== o[3] ? o[3] / 100 : null);
                    var p = !("donut" !== c.config.chart.type && "pie" !== c.config.chart.type && "bubble" !== c.config.chart.type);
                    if (n = null === l || 0 === l.length ? c.globals.dom.Paper.gradient(p ? "radial" : "linear", function (t) {
                            t.at(d, e, s), t.at(u, i, a), t.at(g, i, a), null !== f && t.at(f, e, s)
                        }) : c.globals.dom.Paper.gradient(p ? "radial" : "linear", function (e) {
                            (Array.isArray(l[h]) ? l[h] : l).forEach(function (t) {
                                e.at(t.offset / 100, t.color, t.opacity)
                            })
                        }), p) {
                        var x = c.globals.gridWidth / 2,
                            b = c.globals.gridHeight / 2;
                        "bubble" !== c.config.chart.type ? n.attr({
                            gradientUnits: "userSpaceOnUse",
                            cx: x,
                            cy: b,
                            r: r
                        }) : n.attr({
                            cx: .5,
                            cy: .5,
                            r: .8,
                            fx: .2,
                            fy: .2
                        })
                    } else "vertical" === t ? n.from(0, 0).to(0, 1) : "diagonal" === t ? n.from(0, 0).to(1, 1) : "horizontal" === t ? n.from(0, 1).to(1, 1) : "diagonal2" === t && n.from(0, 1).to(2, 2);
                    return n
                }
            }, {
                key: "drawText",
                value: function (t) {
                    var e, i = this.w,
                        s = t.x,
                        a = t.y,
                        n = t.text,
                        r = t.textAnchor,
                        o = t.fontSize,
                        l = t.fontFamily,
                        h = t.foreColor,
                        c = t.opacity;
                    return void 0 === n && (n = ""), r || (r = "start"), h || (h = i.config.chart.foreColor), l = l || i.config.chart.fontFamily, (e = Array.isArray(n) ? i.globals.dom.Paper.text(function (t) {
                        for (var e = 0; e < n.length; e++) t.tspan(n[e])
                    }) : i.globals.dom.Paper.plain(n)).attr({
                        x: s,
                        y: a,
                        "text-anchor": r,
                        "dominant-baseline": "auto",
                        "font-size": o,
                        "font-family": l,
                        fill: h,
                        class: (t.cssClass, t.cssClass)
                    }), e.node.style.fontFamily = l, e.node.style.opacity = c, e
                }
            }, {
                key: "addTspan",
                value: function (t, e, i) {
                    var s = t.tspan(e);
                    i || (i = this.w.config.chart.fontFamily), s.node.style.fontFamily = i
                }
            }, {
                key: "drawMarker",
                value: function (t, e, i) {
                    t = t || 0;
                    var s = i.pSize || 0,
                        a = null;
                    if ("square" === i.shape) {
                        var n = void 0 === i.pRadius ? s / 2 : i.pRadius;
                        null === e && (n = s = 0);
                        var r = 1.2 * s + n,
                            o = this.drawRect(r, r, r, r, n);
                        o.attr({
                            x: t - r / 2,
                            y: e - r / 2,
                            cx: t,
                            cy: e,
                            class: i.class ? i.class : "",
                            fill: i.pointFillColor,
                            "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                            stroke: i.pointStrokeColor,
                            "stroke-width": i.pWidth ? i.pWidth : 0,
                            "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                        }), a = o
                    } else "circle" === i.shape && (lt.isNumber(e) || (e = s = 0), a = this.drawCircle(s, {
                        cx: t,
                        cy: e,
                        class: i.class ? i.class : "",
                        stroke: i.pointStrokeColor,
                        fill: i.pointFillColor,
                        "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1,
                        "stroke-width": i.pWidth ? i.pWidth : 0,
                        "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1
                    }));
                    return a
                }
            }, {
                key: "pathMouseEnter",
                value: function (t, e) {
                    var i = this.w,
                        s = new I(this.ctx),
                        a = parseInt(t.node.getAttribute("index")),
                        n = parseInt(t.node.getAttribute("j"));
                    if ("function" == typeof i.config.chart.events.dataPointMouseEnter && i.config.chart.events.dataPointMouseEnter(e, this.ctx, {
                            seriesIndex: a,
                            dataPointIndex: n,
                            w: i
                        }), this.ctx.fireEvent("dataPointMouseEnter", [e, this.ctx, {
                            seriesIndex: a,
                            dataPointIndex: n,
                            w: i
                        }]), ("none" === i.config.states.active.filter.type || "true" !== t.node.getAttribute("selected")) && "none" !== i.config.states.hover.filter.type && "none" !== i.config.states.active.filter.type && !i.globals.isTouchDevice) {
                        var r = i.config.states.hover.filter;
                        s.applyFilter(t, a, r.type, r.value)
                    }
                }
            }, {
                key: "pathMouseLeave",
                value: function (t, e) {
                    var i = this.w,
                        s = new I(this.ctx),
                        a = parseInt(t.node.getAttribute("index")),
                        n = parseInt(t.node.getAttribute("j"));
                    "function" == typeof i.config.chart.events.dataPointMouseLeave && i.config.chart.events.dataPointMouseLeave(e, this.ctx, {
                        seriesIndex: a,
                        dataPointIndex: n,
                        w: i
                    }), this.ctx.fireEvent("dataPointMouseLeave", [e, this.ctx, {
                        seriesIndex: a,
                        dataPointIndex: n,
                        w: i
                    }]), "none" !== i.config.states.active.filter.type && "true" === t.node.getAttribute("selected") || "none" !== i.config.states.hover.filter.type && s.getDefaultFilter(t, a)
                }
            }, {
                key: "pathMouseDown",
                value: function (t, e) {
                    var i = this.w,
                        s = new I(this.ctx),
                        a = parseInt(t.node.getAttribute("index")),
                        n = parseInt(t.node.getAttribute("j")),
                        r = "false";
                    if ("true" === t.node.getAttribute("selected")) {
                        if (t.node.setAttribute("selected", "false"), -1 < i.globals.selectedDataPoints[a].indexOf(n)) {
                            var o = i.globals.selectedDataPoints[a].indexOf(n);
                            i.globals.selectedDataPoints[a].splice(o, 1)
                        }
                    } else {
                        if (!i.config.states.active.allowMultipleDataPointsSelection && 0 < i.globals.selectedDataPoints.length) {
                            i.globals.selectedDataPoints = [];
                            var l = i.globals.dom.Paper.select(".apexcharts-series path").members,
                                h = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members;
                            l.forEach(function (t) {
                                t.node.setAttribute("selected", "false"), s.getDefaultFilter(t, a)
                            }), h.forEach(function (t) {
                                t.node.setAttribute("selected", "false"), s.getDefaultFilter(t, a)
                            })
                        }
                        t.node.setAttribute("selected", "true"), r = "true", void 0 === i.globals.selectedDataPoints[a] && (i.globals.selectedDataPoints[a] = []), i.globals.selectedDataPoints[a].push(n)
                    }
                    if ("true" === r) {
                        var c = i.config.states.active.filter;
                        "none" !== c && s.applyFilter(t, a, c.type, c.value)
                    } else "none" !== i.config.states.active.filter.type && s.getDefaultFilter(t, a);
                    "function" == typeof i.config.chart.events.dataPointSelection && i.config.chart.events.dataPointSelection(e, this.ctx, {
                        selectedDataPoints: i.globals.selectedDataPoints,
                        seriesIndex: a,
                        dataPointIndex: n,
                        w: i
                    }), this.ctx.fireEvent("dataPointSelection", [e, this.ctx, {
                        selectedDataPoints: i.globals.selectedDataPoints,
                        seriesIndex: a,
                        dataPointIndex: n,
                        w: i
                    }])
                }
            }, {
                key: "rotateAroundCenter",
                value: function (t) {
                    var e = t.getBBox();
                    return {
                        x: e.x + e.width / 2,
                        y: e.y + e.height / 2
                    }
                }
            }, {
                key: "getTextRects",
                value: function (t, e, i, s) {
                    var a = !(4 < arguments.length && void 0 !== arguments[4]) || arguments[4],
                        n = this.w,
                        r = this.drawText({
                            x: -200,
                            y: -200,
                            text: t,
                            textAnchor: "start",
                            fontSize: e,
                            fontFamily: i,
                            foreColor: "#fff",
                            opacity: 0
                        });
                    s && r.attr("transform", s), n.globals.dom.Paper.add(r);
                    var o = r.bbox();
                    return a || (o = r.node.getBoundingClientRect()), r.remove(), {
                        width: o.width,
                        height: o.height
                    }
                }
            }, {
                key: "placeTextWithEllipsis",
                value: function (t, e, i) {
                    if (0 < (t.textContent = e).length && t.getSubStringLength(0, e.length) >= i) {
                        for (var s = e.length - 3; 0 < s; s -= 3)
                            if (t.getSubStringLength(0, s) <= i) return void(t.textContent = e.substring(0, s) + "...");
                        t.textContent = "..."
                    }
                }
            }], [{
                key: "setAttrs",
                value: function (t, e) {
                    for (var i in e) e.hasOwnProperty(i) && t.setAttribute(i, e[i])
                }
            }]), e
        }(),
        c = {
            name: "en",
            options: {
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                toolbar: {
                    exportToSVG: "Download SVG",
                    exportToPNG: "Download PNG",
                    menu: "Menu",
                    selection: "Selection",
                    selectionZoom: "Selection Zoom",
                    zoomIn: "Zoom In",
                    zoomOut: "Zoom Out",
                    pan: "Panning",
                    reset: "Reset Zoom"
                }
            }
        },
        p = function () {
            function t() {
                n(this, t), this.yAxis = {
                    show: !0,
                    showAlways: !1,
                    seriesName: void 0,
                    opposite: !1,
                    reversed: !1,
                    logarithmic: !1,
                    tickAmount: void 0,
                    forceNiceScale: !1,
                    max: void 0,
                    min: void 0,
                    floating: !1,
                    decimalsInFloat: void 0,
                    labels: {
                        show: !0,
                        minWidth: 0,
                        maxWidth: 160,
                        offsetX: 0,
                        offsetY: 0,
                        align: void 0,
                        rotate: 0,
                        padding: 20,
                        style: {
                            colors: [],
                            fontSize: "11px",
                            fontFamily: void 0,
                            cssClass: ""
                        },
                        formatter: void 0
                    },
                    axisBorder: {
                        show: !1,
                        color: "#78909C",
                        offsetX: 0,
                        offsetY: 0
                    },
                    axisTicks: {
                        show: !1,
                        color: "#78909C",
                        width: 6,
                        offsetX: 0,
                        offsetY: 0
                    },
                    title: {
                        text: void 0,
                        rotate: 90,
                        offsetY: 0,
                        offsetX: 0,
                        style: {
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            cssClass: ""
                        }
                    },
                    tooltip: {
                        enabled: !1,
                        offsetX: 0
                    },
                    crosshairs: {
                        show: !0,
                        position: "front",
                        stroke: {
                            color: "#b6b6b6",
                            width: 1,
                            dashArray: 0
                        }
                    }
                }, this.xAxisAnnotation = {
                    x: 0,
                    x2: null,
                    strokeDashArray: 1,
                    fillColor: "#c2c2c2",
                    borderColor: "#c2c2c2",
                    opacity: .3,
                    offsetX: 0,
                    offsetY: 0,
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        text: void 0,
                        textAnchor: "middle",
                        orientation: "vertical",
                        position: "top",
                        offsetX: 0,
                        offsetY: 0,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            cssClass: "",
                            padding: {
                                left: 5,
                                right: 5,
                                top: 2,
                                bottom: 2
                            }
                        }
                    }
                }, this.yAxisAnnotation = {
                    y: 0,
                    y2: null,
                    strokeDashArray: 1,
                    fillColor: "#c2c2c2",
                    borderColor: "#c2c2c2",
                    opacity: .3,
                    offsetX: 0,
                    offsetY: 0,
                    yAxisIndex: 0,
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        text: void 0,
                        textAnchor: "end",
                        position: "right",
                        offsetX: 0,
                        offsetY: -3,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            cssClass: "",
                            padding: {
                                left: 5,
                                right: 5,
                                top: 0,
                                bottom: 2
                            }
                        }
                    }
                }, this.pointAnnotation = {
                    x: 0,
                    y: null,
                    yAxisIndex: 0,
                    seriesIndex: 0,
                    marker: {
                        size: 0,
                        fillColor: "#fff",
                        strokeWidth: 2,
                        strokeColor: "#333",
                        shape: "circle",
                        offsetX: 0,
                        offsetY: 0,
                        radius: 2,
                        cssClass: ""
                    },
                    label: {
                        borderColor: "#c2c2c2",
                        borderWidth: 1,
                        text: void 0,
                        textAnchor: "middle",
                        offsetX: 0,
                        offsetY: -15,
                        style: {
                            background: "#fff",
                            color: void 0,
                            fontSize: "11px",
                            fontFamily: void 0,
                            cssClass: "",
                            padding: {
                                left: 5,
                                right: 5,
                                top: 0,
                                bottom: 2
                            }
                        }
                    },
                    customSVG: {
                        SVG: void 0,
                        cssClass: void 0,
                        offsetX: 0,
                        offsetY: 0
                    }
                }
            }
            return r(t, [{
                key: "init",
                value: function () {
                    return {
                        annotations: {
                            position: "front",
                            yaxis: [this.yAxisAnnotation],
                            xaxis: [this.xAxisAnnotation],
                            points: [this.pointAnnotation]
                        },
                        chart: {
                            animations: {
                                enabled: !0,
                                easing: "easeinout",
                                speed: 800,
                                animateGradually: {
                                    delay: 150,
                                    enabled: !0
                                },
                                dynamicAnimation: {
                                    enabled: !0,
                                    speed: 350
                                }
                            },
                            background: "transparent",
                            locales: [c],
                            defaultLocale: "en",
                            dropShadow: {
                                enabled: !1,
                                enabledSeries: void 0,
                                top: 2,
                                left: 2,
                                blur: 4,
                                color: "#000",
                                opacity: .35
                            },
                            events: {
                                animationEnd: void 0,
                                beforeMount: void 0,
                                mounted: void 0,
                                updated: void 0,
                                click: void 0,
                                legendClick: void 0,
                                markerClick: void 0,
                                selection: void 0,
                                dataPointSelection: void 0,
                                dataPointMouseEnter: void 0,
                                dataPointMouseLeave: void 0,
                                beforeZoom: void 0,
                                zoomed: void 0,
                                scrolled: void 0
                            },
                            foreColor: "#373d3f",
                            fontFamily: "Helvetica, Arial, sans-serif",
                            height: "auto",
                            parentHeightOffset: 15,
                            id: void 0,
                            group: void 0,
                            offsetX: 0,
                            offsetY: 0,
                            selection: {
                                enabled: !1,
                                type: "x",
                                fill: {
                                    color: "#24292e",
                                    opacity: .1
                                },
                                stroke: {
                                    width: 1,
                                    color: "#24292e",
                                    opacity: .4,
                                    dashArray: 3
                                },
                                xaxis: {
                                    min: void 0,
                                    max: void 0
                                },
                                yaxis: {
                                    min: void 0,
                                    max: void 0
                                }
                            },
                            sparkline: {
                                enabled: !1
                            },
                            brush: {
                                enabled: !1,
                                autoScaleYaxis: !1,
                                target: void 0
                            },
                            stacked: !1,
                            stackType: "normal",
                            toolbar: {
                                show: !0,
                                tools: {
                                    download: !0,
                                    selection: !0,
                                    zoom: !0,
                                    zoomin: !0,
                                    zoomout: !0,
                                    pan: !0,
                                    reset: !0,
                                    customIcons: []
                                },
                                autoSelected: "zoom"
                            },
                            type: "line",
                            width: "100%",
                            zoom: {
                                enabled: !0,
                                type: "x",
                                zoomedArea: {
                                    fill: {
                                        color: "#90CAF9",
                                        opacity: .4
                                    },
                                    stroke: {
                                        color: "#0D47A1",
                                        opacity: .4,
                                        width: 1
                                    }
                                }
                            }
                        },
                        plotOptions: {
                            bar: {
                                horizontal: !1,
                                columnWidth: "70%",
                                barHeight: "70%",
                                distributed: !1,
                                endingShape: "flat",
                                colors: {
                                    ranges: [],
                                    backgroundBarColors: [],
                                    backgroundBarOpacity: 1
                                },
                                dataLabels: {
                                    maxItems: 100,
                                    hideOverflowingLabels: !0,
                                    position: "top"
                                }
                            },
                            candlestick: {
                                colors: {
                                    upward: "#00B746",
                                    downward: "#EF403C"
                                },
                                wick: {
                                    useFillColor: !0
                                }
                            },
                            heatmap: {
                                radius: 2,
                                enableShades: !0,
                                shadeIntensity: .5,
                                distributed: !1,
                                colorScale: {
                                    inverse: !1,
                                    ranges: [],
                                    min: void 0,
                                    max: void 0
                                }
                            },
                            radialBar: {
                                size: void 0,
                                inverseOrder: !1,
                                startAngle: 0,
                                endAngle: 360,
                                offsetX: 0,
                                offsetY: 0,
                                hollow: {
                                    margin: 5,
                                    size: "50%",
                                    background: "transparent",
                                    image: void 0,
                                    imageWidth: 150,
                                    imageHeight: 150,
                                    imageOffsetX: 0,
                                    imageOffsetY: 0,
                                    imageClipped: !0,
                                    position: "front",
                                    dropShadow: {
                                        enabled: !1,
                                        top: 0,
                                        left: 0,
                                        blur: 3,
                                        color: "#000",
                                        opacity: .5
                                    }
                                },
                                track: {
                                    show: !0,
                                    startAngle: void 0,
                                    endAngle: void 0,
                                    background: "#f2f2f2",
                                    strokeWidth: "97%",
                                    opacity: 1,
                                    margin: 5,
                                    dropShadow: {
                                        enabled: !1,
                                        top: 0,
                                        left: 0,
                                        blur: 3,
                                        color: "#000",
                                        opacity: .5
                                    }
                                },
                                dataLabels: {
                                    show: !0,
                                    name: {
                                        show: !0,
                                        fontSize: "16px",
                                        fontFamily: void 0,
                                        color: void 0,
                                        offsetY: 0
                                    },
                                    value: {
                                        show: !0,
                                        fontSize: "14px",
                                        fontFamily: void 0,
                                        color: void 0,
                                        offsetY: 16,
                                        formatter: function (t) {
                                            return t + "%"
                                        }
                                    },
                                    total: {
                                        show: !1,
                                        label: "Total",
                                        color: void 0,
                                        formatter: function (t) {
                                            return t.globals.seriesTotals.reduce(function (t, e) {
                                                return t + e
                                            }, 0) / t.globals.series.length + "%"
                                        }
                                    }
                                }
                            },
                            rangeBar: {},
                            pie: {
                                size: void 0,
                                customScale: 1,
                                offsetX: 0,
                                offsetY: 0,
                                expandOnClick: !0,
                                dataLabels: {
                                    offset: 0,
                                    minAngleToShowLabel: 10
                                },
                                donut: {
                                    size: "65%",
                                    background: "transparent",
                                    labels: {
                                        show: !1,
                                        name: {
                                            show: !0,
                                            fontSize: "16px",
                                            fontFamily: void 0,
                                            color: void 0,
                                            offsetY: -10
                                        },
                                        value: {
                                            show: !0,
                                            fontSize: "20px",
                                            fontFamily: void 0,
                                            color: void 0,
                                            offsetY: 10,
                                            formatter: function (t) {
                                                return t
                                            }
                                        },
                                        total: {
                                            show: !1,
                                            label: "Total",
                                            color: void 0,
                                            formatter: function (t) {
                                                return t.globals.seriesTotals.reduce(function (t, e) {
                                                    return t + e
                                                }, 0)
                                            }
                                        }
                                    }
                                }
                            },
                            radar: {
                                size: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                polygons: {
                                    strokeColors: "#e8e8e8",
                                    connectorColors: "#e8e8e8",
                                    fill: {
                                        colors: void 0
                                    }
                                }
                            }
                        },
                        colors: void 0,
                        dataLabels: {
                            enabled: !0,
                            enabledOnSeries: void 0,
                            formatter: function (t) {
                                return t
                            },
                            textAnchor: "middle",
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                fontSize: "12px",
                                fontFamily: void 0,
                                colors: void 0
                            },
                            dropShadow: {
                                enabled: !1,
                                top: 1,
                                left: 1,
                                blur: 1,
                                color: "#000",
                                opacity: .45
                            }
                        },
                        fill: {
                            type: "solid",
                            colors: void 0,
                            opacity: .85,
                            gradient: {
                                shade: "dark",
                                type: "horizontal",
                                shadeIntensity: .5,
                                gradientToColors: void 0,
                                inverseColors: !0,
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [0, 50, 100],
                                colorStops: []
                            },
                            image: {
                                src: [],
                                width: void 0,
                                height: void 0
                            },
                            pattern: {
                                style: "sqaures",
                                width: 6,
                                height: 6,
                                strokeWidth: 2
                            }
                        },
                        grid: {
                            show: !0,
                            borderColor: "#e0e0e0",
                            strokeDashArray: 0,
                            position: "back",
                            xaxis: {
                                lines: {
                                    show: !1,
                                    animate: !1
                                }
                            },
                            yaxis: {
                                lines: {
                                    show: !0,
                                    animate: !1
                                }
                            },
                            row: {
                                colors: void 0,
                                opacity: .5
                            },
                            column: {
                                colors: void 0,
                                opacity: .5
                            },
                            padding: {
                                top: 0,
                                right: 10,
                                bottom: 0,
                                left: 12
                            }
                        },
                        labels: [],
                        legend: {
                            show: !0,
                            showForSingleSeries: !1,
                            showForNullSeries: !0,
                            showForZeroSeries: !0,
                            floating: !1,
                            position: "bottom",
                            horizontalAlign: "center",
                            fontSize: "12px",
                            fontFamily: void 0,
                            width: void 0,
                            height: void 0,
                            formatter: void 0,
                            offsetX: -20,
                            offsetY: 0,
                            labels: {
                                colors: void 0,
                                useSeriesColors: !1
                            },
                            markers: {
                                width: 12,
                                height: 12,
                                strokeWidth: 0,
                                strokeColor: "#fff",
                                radius: 12,
                                customHTML: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                onClick: void 0
                            },
                            itemMargin: {
                                horizontal: 0,
                                vertical: 5
                            },
                            onItemClick: {
                                toggleDataSeries: !0
                            },
                            onItemHover: {
                                highlightDataSeries: !0
                            }
                        },
                        markers: {
                            discrete: [],
                            size: 0,
                            colors: void 0,
                            strokeColors: "#fff",
                            strokeWidth: 2,
                            strokeOpacity: .9,
                            fillOpacity: 1,
                            shape: "circle",
                            radius: 2,
                            offsetX: 0,
                            offsetY: 0,
                            hover: {
                                size: void 0,
                                sizeOffset: 3
                            }
                        },
                        noData: {
                            text: void 0,
                            align: "center",
                            verticalAlign: "middle",
                            offsetX: 0,
                            offsetY: 0,
                            style: {
                                color: void 0,
                                fontSize: "14px",
                                fontFamily: void 0
                            }
                        },
                        responsive: [],
                        series: void 0,
                        states: {
                            normal: {
                                filter: {
                                    type: "none",
                                    value: 0
                                }
                            },
                            hover: {
                                filter: {
                                    type: "lighten",
                                    value: .15
                                }
                            },
                            active: {
                                allowMultipleDataPointsSelection: !1,
                                filter: {
                                    type: "darken",
                                    value: .65
                                }
                            }
                        },
                        title: {
                            text: void 0,
                            align: "left",
                            margin: 10,
                            offsetX: 0,
                            offsetY: 0,
                            floating: !1,
                            style: {
                                fontSize: "14px",
                                fontFamily: void 0,
                                color: void 0
                            }
                        },
                        subtitle: {
                            text: void 0,
                            align: "left",
                            margin: 10,
                            offsetX: 0,
                            offsetY: 30,
                            floating: !1,
                            style: {
                                fontSize: "12px",
                                fontFamily: void 0,
                                color: void 0
                            }
                        },
                        stroke: {
                            show: !0,
                            curve: "smooth",
                            lineCap: "butt",
                            width: 2,
                            colors: void 0,
                            dashArray: 0
                        },
                        tooltip: {
                            enabled: !0,
                            shared: !0,
                            followCursor: !1,
                            intersect: !1,
                            inverseOrder: !1,
                            custom: void 0,
                            fillSeriesColor: !1,
                            theme: "light",
                            style: {
                                fontSize: "12px",
                                fontFamily: void 0
                            },
                            onDatasetHover: {
                                highlightDataSeries: !1
                            },
                            x: {
                                show: !0,
                                format: "dd MMM",
                                formatter: void 0
                            },
                            y: {
                                formatter: void 0,
                                title: {
                                    formatter: function (t) {
                                        return t
                                    }
                                }
                            },
                            z: {
                                formatter: void 0,
                                title: "Size: "
                            },
                            marker: {
                                show: !0
                            },
                            items: {
                                display: "flex"
                            },
                            fixed: {
                                enabled: !1,
                                position: "topRight",
                                offsetX: 0,
                                offsetY: 0
                            }
                        },
                        xaxis: {
                            type: "category",
                            categories: [],
                            offsetX: 0,
                            offsetY: 0,
                            labels: {
                                show: !0,
                                rotate: -45,
                                rotateAlways: !1,
                                hideOverlappingLabels: !0,
                                trim: !0,
                                minHeight: void 0,
                                maxHeight: 120,
                                showDuplicates: !0,
                                style: {
                                    colors: [],
                                    fontSize: "12px",
                                    fontFamily: void 0,
                                    cssClass: ""
                                },
                                offsetX: 0,
                                offsetY: 0,
                                format: void 0,
                                formatter: void 0,
                                datetimeFormatter: {
                                    year: "yyyy",
                                    month: "MMM 'yy",
                                    day: "dd MMM",
                                    hour: "HH:mm",
                                    minute: "HH:mm:ss"
                                }
                            },
                            axisBorder: {
                                show: !0,
                                color: "#78909C",
                                width: "100%",
                                height: 1,
                                offsetX: 0,
                                offsetY: 0
                            },
                            axisTicks: {
                                show: !0,
                                color: "#78909C",
                                height: 6,
                                offsetX: 0,
                                offsetY: 0
                            },
                            tickAmount: void 0,
                            tickPlacement: "on",
                            min: void 0,
                            max: void 0,
                            range: void 0,
                            floating: !1,
                            position: "bottom",
                            title: {
                                text: void 0,
                                offsetX: 0,
                                offsetY: 0,
                                style: {
                                    color: void 0,
                                    fontSize: "12px",
                                    fontFamily: void 0,
                                    cssClass: ""
                                }
                            },
                            crosshairs: {
                                show: !0,
                                width: 1,
                                position: "back",
                                opacity: .9,
                                stroke: {
                                    color: "#b6b6b6",
                                    width: 1,
                                    dashArray: 3
                                },
                                fill: {
                                    type: "solid",
                                    color: "#B1B9C4",
                                    gradient: {
                                        colorFrom: "#D8E3F0",
                                        colorTo: "#BED1E6",
                                        stops: [0, 100],
                                        opacityFrom: .4,
                                        opacityTo: .5
                                    }
                                },
                                dropShadow: {
                                    enabled: !1,
                                    left: 0,
                                    top: 0,
                                    blur: 1,
                                    opacity: .4
                                }
                            },
                            tooltip: {
                                enabled: !0,
                                offsetY: 0,
                                formatter: void 0,
                                style: {
                                    fontSize: "12px",
                                    fontFamily: void 0
                                }
                            }
                        },
                        yaxis: this.yAxis,
                        theme: {
                            mode: "light",
                            palette: "palette1",
                            monochrome: {
                                enabled: !1,
                                color: "#008FFB",
                                shadeTo: "light",
                                shadeIntensity: .65
                            }
                        }
                    }
                }
            }]), t
        }(),
        t = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.graphics = new ht(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints
            }
            return r(e, [{
                key: "drawAnnotations",
                value: function () {
                    var t = this.w;
                    if (t.globals.axisCharts) {
                        for (var e = this.drawYAxisAnnotations(), i = this.drawXAxisAnnotations(), s = this.drawPointAnnotations(), a = t.config.chart.animations.enabled, n = [e, i, s], r = [i.node, e.node, s.node], o = 0; o < 3; o++) t.globals.dom.elGraphical.add(n[o]), !a || t.globals.resized || t.globals.dataChanged || r[o].classList.add("hidden"), t.globals.delayedElements.push({
                            el: r[o],
                            index: 0
                        });
                        this.setOrientations(t.config.annotations.xaxis), this.annotationsBackground()
                    }
                }
            }, {
                key: "addXaxisAnnotation",
                value: function (t, e, i) {
                    var s = this.w,
                        a = this.invertAxis ? s.globals.minY : s.globals.minX,
                        n = this.invertAxis ? s.globals.yRange[0] : s.globals.xRange,
                        r = (t.x - a) / (n / s.globals.gridWidth),
                        o = t.label.text;
                    if ("category" === s.config.xaxis.type || s.config.xaxis.convertedCatToNumeric) {
                        var l = s.globals.labels.indexOf(t.x),
                            h = s.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (l + 1) + ")");
                        h && (r = parseFloat(h.getAttribute("x")))
                    }
                    var c = t.strokeDashArray;
                    if (!(r < 0 || r > s.globals.gridWidth)) {
                        if (null === t.x2) {
                            var d = this.graphics.drawLine(r + t.offsetX, 0 + t.offsetY, r + t.offsetX, s.globals.gridHeight + t.offsetY, t.borderColor, c);
                            e.appendChild(d.node)
                        } else {
                            var u = (t.x2 - a) / (n / s.globals.gridWidth);
                            if (u < r) {
                                var g = r;
                                r = u, u = g
                            }
                            if (o) {
                                var f = this.graphics.drawRect(r + t.offsetX, 0 + t.offsetY, u - r, s.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, c);
                                e.appendChild(f.node)
                            }
                        }
                        var p = "top" === t.label.position ? -3 : s.globals.gridHeight,
                            x = this.graphics.drawText({
                                x: r + t.label.offsetX,
                                y: p + t.label.offsetY,
                                text: o,
                                textAnchor: t.label.textAnchor,
                                fontSize: t.label.style.fontSize,
                                fontFamily: t.label.style.fontFamily,
                                foreColor: t.label.style.color,
                                cssClass: "apexcharts-xaxis-annotation-label " + t.label.style.cssClass
                            });
                        x.attr({
                            rel: i
                        }), e.appendChild(x.node)
                    }
                }
            }, {
                key: "drawXAxisAnnotations",
                value: function () {
                    var i = this,
                        t = this.w,
                        s = this.graphics.group({
                            class: "apexcharts-xaxis-annotations"
                        });
                    return t.config.annotations.xaxis.map(function (t, e) {
                        i.addXaxisAnnotation(t, s.node, e)
                    }), s
                }
            }, {
                key: "addYaxisAnnotation",
                value: function (t, e, i) {
                    var s, a, n = this.w,
                        r = t.strokeDashArray;
                    if (this.invertAxis) {
                        var o = n.globals.labels.indexOf(t.y),
                            l = n.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (o + 1) + ")");
                        l && (s = parseFloat(l.getAttribute("y")))
                    } else s = n.globals.gridHeight - (t.y - n.globals.minYArr[t.yAxisIndex]) / (n.globals.yRange[t.yAxisIndex] / n.globals.gridHeight), n.config.yaxis[t.yAxisIndex] && n.config.yaxis[t.yAxisIndex].reversed && (s = (t.y - n.globals.minYArr[t.yAxisIndex]) / (n.globals.yRange[t.yAxisIndex] / n.globals.gridHeight));
                    var h = t.label.text;
                    if (null === t.y2) {
                        var c = this.graphics.drawLine(0 + t.offsetX, s + t.offsetY, n.globals.gridWidth + t.offsetX, s + t.offsetY, t.borderColor, r);
                        e.appendChild(c.node)
                    } else {
                        if (this.invertAxis) {
                            var d = n.globals.labels.indexOf(t.y2),
                                u = n.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (d + 1) + ")");
                            u && (a = parseFloat(u.getAttribute("y")))
                        } else a = n.globals.gridHeight - (t.y2 - n.globals.minYArr[t.yAxisIndex]) / (n.globals.yRange[t.yAxisIndex] / n.globals.gridHeight), n.config.yaxis[t.yAxisIndex] && n.config.yaxis[t.yAxisIndex].reversed && (a = (t.y2 - n.globals.minYArr[t.yAxisIndex]) / (n.globals.yRange[t.yAxisIndex] / n.globals.gridHeight));
                        if (s < a) {
                            var g = s;
                            s = a, a = g
                        }
                        if (h) {
                            var f = this.graphics.drawRect(0 + t.offsetX, a + t.offsetY, n.globals.gridWidth + t.offsetX, s - a, 0, t.fillColor, t.opacity, 1, t.borderColor, r);
                            e.appendChild(f.node)
                        }
                    }
                    var p = "right" === t.label.position ? n.globals.gridWidth : 0,
                        x = this.graphics.drawText({
                            x: p + t.label.offsetX,
                            y: (a || s) + t.label.offsetY - 3,
                            text: h,
                            textAnchor: t.label.textAnchor,
                            fontSize: t.label.style.fontSize,
                            fontFamily: t.label.style.fontFamily,
                            foreColor: t.label.style.color,
                            cssClass: "apexcharts-yaxis-annotation-label " + t.label.style.cssClass
                        });
                    x.attr({
                        rel: i
                    }), e.appendChild(x.node)
                }
            }, {
                key: "drawYAxisAnnotations",
                value: function () {
                    var i = this,
                        t = this.w,
                        s = this.graphics.group({
                            class: "apexcharts-yaxis-annotations"
                        });
                    return t.config.annotations.yaxis.map(function (t, e) {
                        i.addYaxisAnnotation(t, s.node, e)
                    }), s
                }
            }, {
                key: "clearAnnotations",
                value: function (t) {
                    var e = t.w.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
                    (e = lt.listToArray(e)).forEach(function (t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    })
                }
            }, {
                key: "addPointAnnotation",
                value: function (t, e, i) {
                    var s = this.w,
                        a = 0,
                        n = 0,
                        r = 0;
                    if (this.invertAxis && console.warn("Point annotation is not supported in horizontal bar charts."), "string" == typeof t.x) {
                        var o = s.globals.labels.indexOf(t.x),
                            l = s.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (o + 1) + ")");
                        a = parseFloat(l.getAttribute("x"));
                        var h = t.y;
                        null === t.y && (h = s.globals.series[t.seriesIndex][o]), n = s.globals.gridHeight - (h - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size, r = s.globals.gridHeight - (h - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight), s.config.yaxis[t.yAxisIndex] && s.config.yaxis[t.yAxisIndex].reversed && (n = (h - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight) + parseInt(t.label.style.fontSize) + t.marker.size, r = (h - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight))
                    } else a = (t.x - s.globals.minX) / (s.globals.xRange / s.globals.gridWidth), n = s.globals.gridHeight - (parseFloat(t.y) - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size, r = s.globals.gridHeight - (t.y - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight), s.config.yaxis[t.yAxisIndex] && s.config.yaxis[t.yAxisIndex].reversed && (n = (parseFloat(t.y) - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight) - parseInt(t.label.style.fontSize) - t.marker.size, r = (t.y - s.globals.minYArr[t.yAxisIndex]) / (s.globals.yRange[t.yAxisIndex] / s.globals.gridHeight));
                    if (!(a < 0 || a > s.globals.gridWidth)) {
                        var c = {
                                pSize: t.marker.size,
                                pWidth: t.marker.strokeWidth,
                                pointFillColor: t.marker.fillColor,
                                pointStrokeColor: t.marker.strokeColor,
                                shape: t.marker.shape,
                                radius: t.marker.radius,
                                class: "apexcharts-point-annotation-marker " + t.marker.cssClass
                            },
                            d = this.graphics.drawMarker(a + t.marker.offsetX, r + t.marker.offsetY, c);
                        e.appendChild(d.node);
                        var u = t.label.text ? t.label.text : "",
                            g = this.graphics.drawText({
                                x: a + t.label.offsetX,
                                y: n + t.label.offsetY,
                                text: u,
                                textAnchor: t.label.textAnchor,
                                fontSize: t.label.style.fontSize,
                                fontFamily: t.label.style.fontFamily,
                                foreColor: t.label.style.color,
                                cssClass: "apexcharts-point-annotation-label " + t.label.style.cssClass
                            });
                        if (g.attr({
                                rel: i
                            }), e.appendChild(g.node), t.customSVG.SVG) {
                            var f = this.graphics.group({
                                class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass
                            });
                            f.attr({
                                transform: "translate(".concat(a + t.customSVG.offsetX, ", ").concat(n + t.customSVG.offsetY, ")")
                            }), f.node.innerHTML = t.customSVG.SVG, e.appendChild(f.node)
                        }
                    }
                }
            }, {
                key: "drawPointAnnotations",
                value: function () {
                    var i = this,
                        t = this.w,
                        s = this.graphics.group({
                            class: "apexcharts-point-annotations"
                        });
                    return t.config.annotations.points.map(function (t, e) {
                        i.addPointAnnotation(t, s.node, e)
                    }), s
                }
            }, {
                key: "setOrientations",
                value: function (t) {
                    var l = this,
                        h = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        c = this.w;
                    t.map(function (t, e) {
                        if ("vertical" === t.label.orientation) {
                            var i = null !== h ? h : e,
                                s = c.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(i, "']"));
                            if (null !== s) {
                                var a = s.getBoundingClientRect();
                                s.setAttribute("x", parseFloat(s.getAttribute("x")) - a.height + 4), "top" === t.label.position ? s.setAttribute("y", parseFloat(s.getAttribute("y")) + a.width) : s.setAttribute("y", parseFloat(s.getAttribute("y")) - a.width);
                                var n = l.graphics.rotateAroundCenter(s),
                                    r = n.x,
                                    o = n.y;
                                s.setAttribute("transform", "rotate(-90 ".concat(r, " ").concat(o, ")"))
                            }
                        }
                    })
                }
            }, {
                key: "addBackgroundToAnno",
                value: function (t, e) {
                    var i = this.w;
                    if (!e.label.text) return null;
                    var s = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(),
                        a = t.getBoundingClientRect(),
                        n = e.label.style.padding.left,
                        r = e.label.style.padding.right,
                        o = e.label.style.padding.top,
                        l = e.label.style.padding.bottom;
                    "vertical" === e.label.orientation && (o = e.label.style.padding.left, l = e.label.style.padding.right, n = e.label.style.padding.top, r = e.label.style.padding.bottom);
                    var h = a.left - s.left - n,
                        c = a.top - s.top - o;
                    return this.graphics.drawRect(h, c, a.width + n + r, a.height + o + l, 0, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0)
                }
            }, {
                key: "annotationsBackground",
                value: function () {
                    var r = this,
                        o = this.w,
                        i = function (t, e, i) {
                            var s = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(i, "-annotations .apexcharts-").concat(i, "-annotation-label[rel='").concat(e, "']"));
                            if (s) {
                                var a = s.parentNode,
                                    n = r.addBackgroundToAnno(s, t);
                                n && a.insertBefore(n.node, s)
                            }
                        };
                    o.config.annotations.xaxis.map(function (t, e) {
                        i(t, e, "xaxis")
                    }), o.config.annotations.yaxis.map(function (t, e) {
                        i(t, e, "yaxis")
                    }), o.config.annotations.points.map(function (t, e) {
                        i(t, e, "point")
                    })
                }
            }, {
                key: "addText",
                value: function (t, e, i) {
                    var s = t.x,
                        a = t.y,
                        n = t.text,
                        r = t.textAnchor,
                        o = t.appendTo,
                        l = void 0 === o ? ".apexcharts-inner" : o,
                        h = t.foreColor,
                        c = t.fontSize,
                        d = t.fontFamily,
                        u = t.cssClass,
                        g = t.backgroundColor,
                        f = t.borderWidth,
                        p = t.strokeDashArray,
                        x = t.radius,
                        b = t.borderColor,
                        m = t.paddingLeft,
                        v = void 0 === m ? 4 : m,
                        y = t.paddingRight,
                        w = void 0 === y ? 4 : y,
                        k = t.paddingBottom,
                        A = void 0 === k ? 2 : k,
                        S = t.paddingTop,
                        C = void 0 === S ? 2 : S,
                        L = i,
                        z = L.w,
                        P = z.globals.dom.baseEl.querySelector(l),
                        E = this.graphics.drawText({
                            x: s,
                            y: a,
                            text: n,
                            textAnchor: r || "start",
                            fontSize: c || "12px",
                            fontFamily: d || z.config.chart.fontFamily,
                            foreColor: h || z.config.chart.foreColor,
                            cssClass: u
                        });
                    P.appendChild(E.node);
                    var M = E.bbox();
                    if (n) {
                        var T = this.graphics.drawRect(M.x - v, M.y - C, M.width + v + w, M.height + A + C, x, g, 1, f, b, p);
                        E.before(T)
                    }
                    return e && z.globals.memory.methodsToExec.push({
                        context: L,
                        method: L.addText,
                        params: {
                            x: s,
                            y: a,
                            text: n,
                            textAnchor: r,
                            appendTo: l,
                            foreColor: h,
                            fontSize: c,
                            cssClass: u,
                            backgroundColor: g,
                            borderWidth: f,
                            strokeDashArray: p,
                            radius: x,
                            borderColor: b,
                            paddingLeft: v,
                            paddingRight: w,
                            paddingBottom: A,
                            paddingTop: C
                        }
                    }), i
                }
            }, {
                key: "addPointAnnotationExternal",
                value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "point",
                        contextMethod: i.addPointAnnotation
                    }), i
                }
            }, {
                key: "addYaxisAnnotationExternal",
                value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "yaxis",
                        contextMethod: i.addYaxisAnnotation
                    }), i
                }
            }, {
                key: "addXaxisAnnotationExternal",
                value: function (t, e, i) {
                    return this.addAnnotationExternal({
                        params: t,
                        pushToMemory: e,
                        context: i,
                        type: "xaxis",
                        contextMethod: i.addXaxisAnnotation
                    }), i
                }
            }, {
                key: "addAnnotationExternal",
                value: function (t) {
                    var e = t.params,
                        i = t.pushToMemory,
                        s = t.context,
                        a = t.type,
                        n = t.contextMethod,
                        r = s,
                        o = r.w,
                        l = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations")),
                        h = l.childNodes.length + 1,
                        c = new p,
                        d = Object.assign({}, "xaxis" === a ? c.xAxisAnnotation : "yaxis" === a ? c.yAxisAnnotation : c.pointAnnotation),
                        u = lt.extend(d, e);
                    switch (a) {
                        case "xaxis":
                            this.addXaxisAnnotation(u, l, h);
                            break;
                        case "yaxis":
                            this.addYaxisAnnotation(u, l, h);
                            break;
                        case "point":
                            this.addPointAnnotation(u, l, h)
                    }
                    var g = o.globals.dom.baseEl.querySelector(".apexcharts-".concat(a, "-annotations .apexcharts-").concat(a, "-annotation-label[rel='").concat(h, "']")),
                        f = this.addBackgroundToAnno(g, u);
                    return f && l.insertBefore(f.node, g), i && o.globals.memory.methodsToExec.push({
                        context: r,
                        method: n,
                        params: e
                    }), s
                }
            }]), e
        }(),
        k = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334]
            }
            return r(e, [{
                key: "isValidDate",
                value: function (t) {
                    return !isNaN(this.parseDate(t))
                }
            }, {
                key: "getUTCTimeStamp",
                value: function (t) {
                    return Date.parse(t) ? new Date(new Date(t).toISOString().substr(0, 25)).getTime() : t
                }
            }, {
                key: "parseDate",
                value: function (t) {
                    var e = Date.parse(t);
                    if (!isNaN(e)) return this.getUTCTimeStamp(t);
                    var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
                    return this.getUTCTimeStamp(i)
                }
            }, {
                key: "treatAsUtc",
                value: function (t) {
                    var e = new Date(t);
                    return e.setMinutes(e.getMinutes() - e.getTimezoneOffset()), e
                }
            }, {
                key: "formatDate",
                value: function (t, e) {
                    var i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                        a = this.w.globals.locale,
                        n = ["\0"].concat(S(a.months)),
                        r = [""].concat(S(a.shortMonths)),
                        o = [""].concat(S(a.days)),
                        l = [""].concat(S(a.shortDays));

                    function h(t, e) {
                        var i = t + "";
                        for (e = e || 2; i.length < e;) i = "0" + i;
                        return i
                    }
                    s && (t = this.treatAsUtc(t));
                    var c = i ? t.getUTCFullYear() : t.getFullYear();
                    e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(/(^|[^\\])yy/g, "$1" + c.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + c);
                    var d = (i ? t.getUTCMonth() : t.getMonth()) + 1;
                    e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + n[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + h(d))).replace(/(^|[^\\])M/g, "$1" + d);
                    var u = i ? t.getUTCDate() : t.getDate();
                    e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + l[0])).replace(/(^|[^\\])dd/g, "$1" + h(u))).replace(/(^|[^\\])d/g, "$1" + u);
                    var g = i ? t.getUTCHours() : t.getHours(),
                        f = 12 < g ? g - 12 : 0 === g ? 12 : g;
                    e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + h(g))).replace(/(^|[^\\])H/g, "$1" + g)).replace(/(^|[^\\])hh+/g, "$1" + h(f))).replace(/(^|[^\\])h/g, "$1" + f);
                    var p = i ? t.getUTCMinutes() : t.getMinutes();
                    e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + h(p))).replace(/(^|[^\\])m/g, "$1" + p);
                    var x = i ? t.getUTCSeconds() : t.getSeconds();
                    e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + h(x))).replace(/(^|[^\\])s/g, "$1" + x);
                    var b = i ? t.getUTCMilliseconds() : t.getMilliseconds();
                    e = e.replace(/(^|[^\\])fff+/g, "$1" + h(b, 3)), b = Math.round(b / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + h(b)), b = Math.round(b / 10);
                    var m = g < 12 ? "AM" : "PM";
                    e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + b)).replace(/(^|[^\\])TT+/g, "$1" + m)).replace(/(^|[^\\])T/g, "$1" + m.charAt(0));
                    var v = m.toLowerCase();
                    e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + v)).replace(/(^|[^\\])t/g, "$1" + v.charAt(0));
                    var y = -t.getTimezoneOffset(),
                        w = i || !y ? "Z" : 0 < y ? "+" : "-";
                    if (!i) {
                        var k = (y = Math.abs(y)) % 60;
                        w += h(Math.floor(y / 60)) + ":" + h(k)
                    }
                    e = e.replace(/(^|[^\\])K/g, "$1" + w);
                    var A = (i ? t.getUTCDay() : t.getDay()) + 1;
                    return (e = (e = (e = (e = e.replace(new RegExp(o[0], "g"), o[A])).replace(new RegExp(l[0], "g"), l[A])).replace(new RegExp(n[0], "g"), n[d])).replace(new RegExp(r[0], "g"), r[d])).replace(/\\(.)/g, "$1")
                }
            }, {
                key: "getTimeUnitsfromTimestamp",
                value: function (t, e) {
                    var i = this.w;
                    void 0 !== i.config.xaxis.min && (t = i.config.xaxis.min), void 0 !== i.config.xaxis.max && (e = i.config.xaxis.max);
                    var s = new Date(t).getFullYear(),
                        a = new Date(e).getFullYear(),
                        n = new Date(t).getMonth(),
                        r = new Date(e).getMonth(),
                        o = new Date(t).getDate(),
                        l = new Date(e).getDate(),
                        h = new Date(t).getHours(),
                        c = new Date(e).getHours();
                    return {
                        minMinute: new Date(t).getMinutes(),
                        maxMinute: new Date(e).getMinutes(),
                        minHour: h,
                        maxHour: c,
                        minDate: o,
                        maxDate: l,
                        minMonth: n,
                        maxMonth: r,
                        minYear: s,
                        maxYear: a
                    }
                }
            }, {
                key: "isLeapYear",
                value: function (t) {
                    return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
                }
            }, {
                key: "calculcateLastDaysOfMonth",
                value: function (t, e, i) {
                    return this.determineDaysOfMonths(t, e) - i
                }
            }, {
                key: "determineDaysOfYear",
                value: function (t) {
                    var e = 365;
                    return this.isLeapYear(t) && (e = 366), e
                }
            }, {
                key: "determineRemainingDaysOfYear",
                value: function (t, e, i) {
                    var s = this.daysCntOfYear[e] + i;
                    return 1 < e && this.isLeapYear() && s++, s
                }
            }, {
                key: "determineDaysOfMonths",
                value: function (t, e) {
                    var i = 30;
                    switch (t = lt.monthMod(t), !0) {
                        case -1 < this.months30.indexOf(t):
                            2 === t && (i = this.isLeapYear(e) ? 29 : 28);
                            break;
                        case -1 < this.months31.indexOf(t):
                        default:
                            i = 31
                    }
                    return i
                }
            }]), e
        }(),
        d = function () {
            function e(t) {
                n(this, e), this.opts = t
            }
            return r(e, [{
                key: "line",
                value: function () {
                    return {
                        chart: {
                            animations: {
                                easing: "swing"
                            }
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            width: 5,
                            curve: "straight"
                        },
                        markers: {
                            size: 0,
                            hover: {
                                sizeOffset: 6
                            }
                        },
                        xaxis: {
                            crosshairs: {
                                width: 1
                            }
                        }
                    }
                }
            }, {
                key: "sparkline",
                value: function (t) {
                    return this.opts.yaxis[0].labels.show = !1, this.opts.yaxis[0].floating = !0, lt.extend(t, {
                        grid: {
                            show: !1,
                            padding: {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0
                            }
                        },
                        legend: {
                            show: !1
                        },
                        xaxis: {
                            labels: {
                                show: !1
                            },
                            tooltip: {
                                enabled: !1
                            },
                            axisBorder: {
                                show: !1
                            }
                        },
                        chart: {
                            toolbar: {
                                show: !1
                            },
                            zoom: {
                                enabled: !1
                            }
                        },
                        dataLabels: {
                            enabled: !1
                        }
                    })
                }
            }, {
                key: "bar",
                value: function () {
                    return {
                        chart: {
                            stacked: !1,
                            animations: {
                                easing: "swing"
                            }
                        },
                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    position: "center"
                                }
                            }
                        },
                        dataLabels: {
                            style: {
                                colors: ["#fff"]
                            }
                        },
                        stroke: {
                            width: 0
                        },
                        fill: {
                            opacity: .85
                        },
                        legend: {
                            markers: {
                                shape: "square",
                                radius: 2,
                                size: 8
                            }
                        },
                        tooltip: {
                            shared: !1
                        },
                        xaxis: {
                            tooltip: {
                                enabled: !1
                            },
                            crosshairs: {
                                width: "barWidth",
                                position: "back",
                                fill: {
                                    type: "gradient"
                                },
                                dropShadow: {
                                    enabled: !1
                                },
                                stroke: {
                                    width: 0
                                }
                            }
                        }
                    }
                }
            }, {
                key: "candlestick",
                value: function () {
                    return {
                        stroke: {
                            width: 1,
                            colors: ["#333"]
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        tooltip: {
                            shared: !0,
                            custom: function (t) {
                                var e = t.seriesIndex,
                                    i = t.dataPointIndex,
                                    s = t.w;
                                return '<div class="apexcharts-tooltip-candlestick"><div>Open: <span class="value">' + s.globals.seriesCandleO[e][i] + '</span></div><div>High: <span class="value">' + s.globals.seriesCandleH[e][i] + '</span></div><div>Low: <span class="value">' + s.globals.seriesCandleL[e][i] + '</span></div><div>Close: <span class="value">' + s.globals.seriesCandleC[e][i] + "</span></div></div>"
                            }
                        },
                        states: {
                            active: {
                                filter: {
                                    type: "none"
                                }
                            }
                        },
                        xaxis: {
                            crosshairs: {
                                width: 1
                            }
                        }
                    }
                }
            }, {
                key: "rangeBar",
                value: function () {
                    return {
                        stroke: {
                            width: 0
                        },
                        plotOptions: {
                            bar: {
                                dataLabels: {
                                    position: "center"
                                }
                            }
                        },
                        dataLabels: {
                            enabled: !1,
                            formatter: function (t, e) {
                                e.ctx;
                                var i = e.seriesIndex,
                                    s = e.dataPointIndex,
                                    a = e.w,
                                    n = a.globals.seriesRangeStart[i][s];
                                return a.globals.seriesRangeEnd[i][s] - n
                            },
                            style: {
                                colors: ["#fff"]
                            }
                        },
                        tooltip: {
                            shared: !1,
                            followCursor: !0,
                            custom: function (t) {
                                var e = t.ctx,
                                    i = t.seriesIndex,
                                    s = t.dataPointIndex,
                                    a = t.w,
                                    n = a.globals.seriesRangeStart[i][s],
                                    r = a.globals.seriesRangeEnd[i][s],
                                    o = "",
                                    l = "",
                                    h = a.globals.colors[i];
                                if (void 0 === a.config.tooltip.x.formatter)
                                    if ("datetime" === a.config.xaxis.type) {
                                        var c = new k(e);
                                        o = c.formatDate(new Date(n), a.config.tooltip.x.format, !0, !0), l = c.formatDate(new Date(r), a.config.tooltip.x.format, !0, !0)
                                    } else o = n, l = r;
                                else o = a.config.tooltip.x.formatter(n), l = a.config.tooltip.x.formatter(r);
                                var d = a.globals.labels[s];
                                return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + h + '">' + (a.config.series[i].name ? a.config.series[i].name : "") + '</span></div><div> <span class="category">' + d + ': </span> <span class="value start-value">' + o + '</span> <span class="separator">-</span> <span class="value end-value">' + l + "</span></div></div>"
                            }
                        },
                        xaxis: {
                            tooltip: {
                                enabled: !1
                            },
                            crosshairs: {
                                stroke: {
                                    width: 0
                                }
                            }
                        }
                    }
                }
            }, {
                key: "area",
                value: function () {
                    return {
                        stroke: {
                            width: 4
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                inverseColors: !1,
                                shade: "light",
                                type: "vertical",
                                opacityFrom: .65,
                                opacityTo: .5,
                                stops: [0, 100, 100]
                            }
                        },
                        markers: {
                            size: 0,
                            hover: {
                                sizeOffset: 6
                            }
                        },
                        tooltip: {
                            followCursor: !1
                        }
                    }
                }
            }, {
                key: "brush",
                value: function (t) {
                    return lt.extend(t, {
                        chart: {
                            toolbar: {
                                autoSelected: "selection",
                                show: !1
                            },
                            zoom: {
                                enabled: !1
                            }
                        },
                        dataLabels: {
                            enabled: !1
                        },
                        stroke: {
                            width: 1
                        },
                        tooltip: {
                            enabled: !1
                        },
                        xaxis: {
                            tooltip: {
                                enabled: !1
                            }
                        }
                    })
                }
            }, {
                key: "stacked100",
                value: function () {
                    var i = this;
                    this.opts.dataLabels = this.opts.dataLabels || {}, this.opts.dataLabels.formatter = this.opts.dataLabels.formatter || void 0;
                    var t = this.opts.dataLabels.formatter;
                    this.opts.yaxis.forEach(function (t, e) {
                        i.opts.yaxis[e].min = 0, i.opts.yaxis[e].max = 100
                    }), "bar" === this.opts.chart.type && (this.opts.dataLabels.formatter = t || function (t) {
                        return "number" == typeof t && t ? t.toFixed(0) + "%" : t
                    })
                }
            }, {
                key: "bubble",
                value: function () {
                    return {
                        dataLabels: {
                            style: {
                                colors: ["#fff"]
                            }
                        },
                        tooltip: {
                            shared: !1,
                            intersect: !0
                        },
                        xaxis: {
                            crosshairs: {
                                width: 0
                            }
                        },
                        fill: {
                            type: "solid",
                            gradient: {
                                shade: "light",
                                inverse: !0,
                                shadeIntensity: .55,
                                opacityFrom: .4,
                                opacityTo: .8
                            }
                        }
                    }
                }
            }, {
                key: "scatter",
                value: function () {
                    return {
                        dataLabels: {
                            enabled: !1
                        },
                        tooltip: {
                            shared: !1,
                            intersect: !0
                        },
                        markers: {
                            size: 6,
                            strokeWidth: 2,
                            hover: {
                                sizeOffset: 2
                            }
                        }
                    }
                }
            }, {
                key: "heatmap",
                value: function () {
                    return {
                        chart: {
                            stacked: !1,
                            zoom: {
                                enabled: !1
                            }
                        },
                        fill: {
                            opacity: 1
                        },
                        dataLabels: {
                            style: {
                                colors: ["#fff"]
                            }
                        },
                        stroke: {
                            colors: ["#fff"]
                        },
                        tooltip: {
                            followCursor: !0,
                            marker: {
                                show: !1
                            },
                            x: {
                                show: !1
                            }
                        },
                        legend: {
                            position: "top",
                            markers: {
                                shape: "square",
                                size: 10,
                                offsetY: 2
                            }
                        },
                        grid: {
                            padding: {
                                right: 20
                            }
                        }
                    }
                }
            }, {
                key: "pie",
                value: function () {
                    return {
                        chart: {
                            toolbar: {
                                show: !1
                            }
                        },
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: !1
                                    }
                                }
                            }
                        },
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            },
                            style: {
                                colors: ["#fff"]
                            },
                            dropShadow: {
                                enabled: !0
                            }
                        },
                        stroke: {
                            colors: ["#fff"]
                        },
                        fill: {
                            opacity: 1,
                            gradient: {
                                shade: "dark",
                                shadeIntensity: .35,
                                inverseColors: !1,
                                stops: [0, 100, 100]
                            }
                        },
                        padding: {
                            right: 0,
                            left: 0
                        },
                        tooltip: {
                            theme: "dark",
                            fillSeriesColor: !0
                        },
                        legend: {
                            position: "right"
                        }
                    }
                }
            }, {
                key: "donut",
                value: function () {
                    return {
                        chart: {
                            toolbar: {
                                show: !1
                            }
                        },
                        dataLabels: {
                            formatter: function (t) {
                                return t.toFixed(1) + "%"
                            },
                            style: {
                                colors: ["#fff"]
                            },
                            dropShadow: {
                                enabled: !0
                            }
                        },
                        stroke: {
                            colors: ["#fff"]
                        },
                        fill: {
                            opacity: 1,
                            gradient: {
                                shade: "dark",
                                shadeIntensity: .4,
                                inverseColors: !1,
                                type: "vertical",
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [70, 98, 100]
                            }
                        },
                        padding: {
                            right: 0,
                            left: 0
                        },
                        tooltip: {
                            theme: "dark",
                            fillSeriesColor: !0
                        },
                        legend: {
                            position: "right"
                        }
                    }
                }
            }, {
                key: "radar",
                value: function () {
                    return this.opts.yaxis[0].labels.style.fontSize = "13px", {
                        dataLabels: {
                            enabled: !0,
                            style: {
                                colors: ["#a8a8a8"],
                                fontSize: "11px"
                            }
                        },
                        stroke: {
                            width: 2
                        },
                        markers: {
                            size: 3,
                            strokeWidth: 1,
                            strokeOpacity: 1
                        },
                        fill: {
                            opacity: .2
                        },
                        tooltip: {
                            shared: !(this.opts.yaxis[0].labels.offsetY = 6),
                            intersect: !0,
                            followCursor: !0
                        },
                        grid: {
                            show: !1
                        },
                        xaxis: {
                            tooltip: {
                                enabled: !1
                            },
                            crosshairs: {
                                show: !1
                            }
                        }
                    }
                }
            }, {
                key: "radialBar",
                value: function () {
                    return {
                        chart: {
                            animations: {
                                dynamicAnimation: {
                                    enabled: !0,
                                    speed: 800
                                }
                            },
                            toolbar: {
                                show: !1
                            }
                        },
                        fill: {
                            gradient: {
                                shade: "dark",
                                shadeIntensity: .4,
                                inverseColors: !1,
                                type: "diagonal2",
                                opacityFrom: 1,
                                opacityTo: 1,
                                stops: [70, 98, 100]
                            }
                        },
                        padding: {
                            right: 0,
                            left: 0
                        },
                        legend: {
                            show: !1,
                            position: "right"
                        },
                        tooltip: {
                            enabled: !1,
                            fillSeriesColor: !0
                        }
                    }
                }
            }], [{
                key: "convertCatToNumeric",
                value: function (t) {
                    t.xaxis.type = "numeric", t.xaxis.convertedCatToNumeric = !0, t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function (t) {
                        return t
                    }, t.chart = t.chart || {}, t.chart.zoom = t.chart.zoom || window.Apex.chart && window.Apex.chart.zoom || {};
                    var e = t.xaxis.labels.formatter,
                        i = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
                    return i && i.length && (t.xaxis.labels.formatter = function (t) {
                        return e(i[t - 1])
                    }), t.xaxis.categories = [], t.labels = [], t.chart.zoom.enabled = t.chart.zoom.enabled || !1, t
                }
            }]), e
        }(),
        ct = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "getStackedSeriesTotals",
                value: function () {
                    for (var t = this.w, e = [], i = 0; i < t.globals.series[t.globals.maxValsInArrayIndex].length; i++) {
                        for (var s = 0, a = 0; a < t.globals.series.length; a++) s += t.globals.series[a][i];
                        e.push(s)
                    }
                    return t.globals.stackedSeriesTotals = e
                }
            }, {
                key: "getSeriesTotalByIndex",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    return null === t ? this.w.config.series.reduce(function (t, e) {
                        return t + e
                    }, 0) : this.w.globals.series[t].reduce(function (t, e) {
                        return t + e
                    }, 0)
                }
            }, {
                key: "isSeriesNull",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
                    return 0 === (null === t ? this.w.config.series.filter(function (t) {
                        return null !== t
                    }) : this.w.globals.series[t].filter(function (t) {
                        return null !== t
                    })).length
                }
            }, {
                key: "seriesHaveSameValues",
                value: function (t) {
                    return this.w.globals.series[t].every(function (t, e, i) {
                        return t === i[0]
                    })
                }
            }, {
                key: "getLargestSeries",
                value: function () {
                    var t = this.w;
                    t.globals.maxValsInArrayIndex = t.globals.series.map(function (t) {
                        return t.length
                    }).indexOf(Math.max.apply(Math, t.globals.series.map(function (t) {
                        return t.length
                    })))
                }
            }, {
                key: "getLargestMarkerSize",
                value: function () {
                    var t = this.w,
                        e = 0;
                    return t.globals.markers.size.forEach(function (t) {
                        e = Math.max(e, t)
                    }), t.globals.markers.largestSize = e
                }
            }, {
                key: "getSeriesTotals",
                value: function () {
                    var t = this.w;
                    t.globals.seriesTotals = t.globals.series.map(function (t, e) {
                        var i = 0;
                        if (Array.isArray(t))
                            for (var s = 0; s < t.length; s++) i += t[s];
                        else i += t;
                        return i
                    })
                }
            }, {
                key: "getSeriesTotalsXRange",
                value: function (a, n) {
                    var r = this.w;
                    return r.globals.series.map(function (t, e) {
                        for (var i = 0, s = 0; s < t.length; s++) r.globals.seriesX[e][s] > a && r.globals.seriesX[e][s] < n && (i += t[s]);
                        return i
                    })
                }
            }, {
                key: "getPercentSeries",
                value: function () {
                    var o = this.w;
                    o.globals.seriesPercent = o.globals.series.map(function (t, e) {
                        var i = [];
                        if (Array.isArray(t))
                            for (var s = 0; s < t.length; s++) {
                                var a = o.globals.stackedSeriesTotals[s],
                                    n = 100 * t[s] / a;
                                i.push(n)
                            } else {
                                var r = 100 * t / o.globals.seriesTotals.reduce(function (t, e) {
                                    return t + e
                                }, 0);
                                i.push(r)
                            }
                        return i
                    })
                }
            }, {
                key: "getCalculatedRatios",
                value: function () {
                    var t, e, i, s, a, n = this.w.globals,
                        r = [],
                        o = [],
                        l = .1,
                        h = 0;
                    if (n.yRange = [], n.isMultipleYAxis)
                        for (var c = 0; c < n.minYArr.length; c++) n.yRange.push(Math.abs(n.minYArr[c] - n.maxYArr[c])), o.push(0);
                    else n.yRange.push(Math.abs(n.minY - n.maxY));
                    n.xRange = Math.abs(n.maxX - n.minX), n.zRange = Math.abs(n.maxZ - n.minZ);
                    for (var d = 0; d < n.yRange.length; d++) r.push(n.yRange[d] / n.gridHeight);
                    if (e = n.xRange / n.gridWidth, i = Math.abs(n.initialmaxX - n.initialminX) / n.gridWidth, t = n.yRange / n.gridWidth, s = n.xRange / n.gridHeight, a = n.zRange / n.gridHeight * 16, n.minY !== Number.MIN_VALUE && 0 !== Math.abs(n.minY) && (n.hasNegs = !0), n.isMultipleYAxis) {
                        o = [];
                        for (var u = 0; u < r.length; u++) o.push(-n.minYArr[u] / r[u])
                    } else o.push(-n.minY / r[0]), n.minY !== Number.MIN_VALUE && 0 !== Math.abs(n.minY) && (l = -n.minY / t, h = n.minX / e);
                    return {
                        yRatio: r,
                        invertedYRatio: t,
                        zRatio: a,
                        xRatio: e,
                        initialXRatio: i,
                        invertedXRatio: s,
                        baseLineInvertedY: l,
                        baseLineY: o,
                        baseLineX: h
                    }
                }
            }, {
                key: "getLogSeries",
                value: function (t) {
                    var i = this.w;
                    return i.globals.seriesLog = t.map(function (t, e) {
                        return i.config.yaxis[e] && i.config.yaxis[e].logarithmic ? t.map(function (t) {
                            return null === t ? null : (Math.log(t) - Math.log(i.globals.minYArr[e])) / (Math.log(i.globals.maxYArr[e]) - Math.log(i.globals.minYArr[e]))
                        }) : t
                    }), i.globals.seriesLog
                }
            }, {
                key: "getLogYRatios",
                value: function (t) {
                    var n = this,
                        r = this.w,
                        o = this.w.globals;
                    return o.yLogRatio = t.slice(), o.logYRange = o.yRange.map(function (t, e) {
                        if (r.config.yaxis[e] && n.w.config.yaxis[e].logarithmic) {
                            var i, s = -Number.MAX_VALUE,
                                a = Number.MIN_VALUE;
                            return o.seriesLog.forEach(function (t, e) {
                                t.forEach(function (t) {
                                    r.config.yaxis[e] && r.config.yaxis[e].logarithmic && (s = Math.max(t, s), a = Math.min(t, a))
                                })
                            }), i = Math.pow(o.yRange[e], Math.abs(a - s) / o.yRange[e]), o.yLogRatio[e] = i / o.gridHeight, i
                        }
                    }), o.yLogRatio
                }
            }], [{
                key: "checkComboSeries",
                value: function (t) {
                    var e = !1,
                        i = !1;
                    return t.length && void 0 !== t[0].type && (e = !0, t.forEach(function (t) {
                        "bar" !== t.type && "column" !== t.type || (i = !0)
                    })), {
                        comboCharts: e,
                        comboChartsHasBars: i
                    }
                }
            }, {
                key: "extendArrayProps",
                value: function (t, e) {
                    return e.yaxis && (e = t.extendYAxis(e)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e
                }
            }]), e
        }(),
        u = function () {
            function e(t) {
                n(this, e), this.opts = t
            }
            return r(e, [{
                key: "init",
                value: function () {
                    var t = this.opts,
                        e = new p,
                        i = new d(t);
                    this.chartType = t.chart.type, "histogram" === this.chartType && (t.chart.type = "bar", t = lt.extend({
                        plotOptions: {
                            bar: {
                                columnWidth: "99.99%"
                            }
                        }
                    }, t)), t.series = this.checkEmptySeries(t.series), t = this.extendYAxis(t), t = this.extendAnnotations(t);
                    var s = e.init(),
                        a = {};
                    if (t && "object" === w(t)) {
                        var n = {};
                        switch (this.chartType) {
                            case "line":
                                n = i.line();
                                break;
                            case "area":
                                n = i.area();
                                break;
                            case "bar":
                                n = i.bar();
                                break;
                            case "candlestick":
                                n = i.candlestick();
                                break;
                            case "rangeBar":
                                n = i.rangeBar();
                                break;
                            case "histogram":
                                n = i.bar();
                                break;
                            case "bubble":
                                n = i.bubble();
                                break;
                            case "scatter":
                                n = i.scatter();
                                break;
                            case "heatmap":
                                n = i.heatmap();
                                break;
                            case "pie":
                                n = i.pie();
                                break;
                            case "donut":
                                n = i.donut();
                                break;
                            case "radar":
                                n = i.radar();
                                break;
                            case "radialBar":
                                n = i.radialBar();
                                break;
                            default:
                                n = i.line()
                        }
                        t.chart.brush && t.chart.brush.enabled && (n = i.brush(n)), t.chart.stacked && "100%" === t.chart.stackType && i.stacked100(), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(t), t.xaxis = t.xaxis || window.Apex.xaxis || {};
                        var r = ct.checkComboSeries(t.series);
                        "line" !== t.chart.type && "area" !== t.chart.type && "scatter" !== t.chart.type || r.comboChartsHasBars || "datetime" === t.xaxis.type || "numeric" === t.xaxis.type || "between" === t.xaxis.tickPlacement || (t = d.convertCatToNumeric(t)), (t.chart.sparkline && t.chart.sparkline.enabled || window.Apex.chart && window.Apex.chart.sparkline && window.Apex.chart.sparkline.enabled) && (n = i.sparkline(n)), a = lt.extend(s, n)
                    }
                    var o = lt.extend(a, window.Apex);
                    return s = lt.extend(o, t), this.handleUserInputErrors(s)
                }
            }, {
                key: "extendYAxis",
                value: function (t) {
                    var e = new p;
                    return void 0 === t.yaxis && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = lt.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? t.yaxis = [lt.extend(e.yAxis, t.yaxis)] : t.yaxis = lt.extendArray(t.yaxis, e.yAxis), t
                }
            }, {
                key: "extendAnnotations",
                value: function (t) {
                    return void 0 === t.annotations && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), this.extendPointAnnotations(t)
                }
            }, {
                key: "extendYAxisAnnotations",
                value: function (t) {
                    var e = new p;
                    return t.annotations.yaxis = lt.extendArray(void 0 !== t.annotations.yaxis ? t.annotations.yaxis : [], e.yAxisAnnotation), t
                }
            }, {
                key: "extendXAxisAnnotations",
                value: function (t) {
                    var e = new p;
                    return t.annotations.xaxis = lt.extendArray(void 0 !== t.annotations.xaxis ? t.annotations.xaxis : [], e.xAxisAnnotation), t
                }
            }, {
                key: "extendPointAnnotations",
                value: function (t) {
                    var e = new p;
                    return t.annotations.points = lt.extendArray(void 0 !== t.annotations.points ? t.annotations.points : [], e.pointAnnotation), t
                }
            }, {
                key: "checkForDarkTheme",
                value: function (t) {
                    t.theme && "dark" === t.theme.mode && (t.tooltip || (t.tooltip = {}), "light" !== t.tooltip.theme && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.theme.palette || (t.theme.palette = "palette4"))
                }
            }, {
                key: "checkEmptySeries",
                value: function (t) {
                    return 0 === t.length ? [{
                        data: []
                    }] : t
                }
            }, {
                key: "handleUserInputErrors",
                value: function (t) {
                    var e = t;
                    if (e.tooltip.shared && e.tooltip.intersect) throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
                    if (e.chart.scroller && console.warn("Scroller has been deprecated since v2.0.0. Please remove the configuration for chart.scroller"), ("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal) {
                        if (1 < e.yaxis.length) throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
                        e.yaxis[0].reversed && (e.yaxis[0].opposite = !0), e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1
                    }
                    return "bar" !== e.chart.type && "rangeBar" !== e.chart.type || e.tooltip.shared && ("barWidth" === e.xaxis.crosshairs.width && 1 < e.series.length && (console.warn('crosshairs.width = "barWidth" is only supported in single series, not in a multi-series barChart.'), e.xaxis.crosshairs.width = "tickWidth"), e.plotOptions.bar.horizontal && (e.states.hover.type = "none", e.tooltip.shared = !1), e.tooltip.followCursor || (console.warn("followCursor option in shared columns cannot be turned off. Please set %ctooltip.followCursor: true", "color: blue;"), e.tooltip.followCursor = !0)), "candlestick" === e.chart.type && e.yaxis[0].reversed && (console.warn("Reversed y-axis in candlestick chart is not supported."), e.yaxis[0].reversed = !1), e.chart.group && 0 === e.yaxis[0].labels.minWidth && console.warn("It looks like you have multiple charts in synchronization. You must provide yaxis.labels.minWidth which must be EQUAL for all grouped charts to prevent incorrect behaviour."), Array.isArray(e.stroke.width) && "line" !== e.chart.type && "area" !== e.chart.type && (console.warn("stroke.width option accepts array only for line and area charts. Reverted back to Number"), e.stroke.width = e.stroke.width[0]), e
                }
            }]), e
        }(),
        g = function () {
            function t() {
                n(this, t)
            }
            return r(t, [{
                key: "globalVars",
                value: function (t) {
                    return {
                        chartID: null,
                        cuid: null,
                        events: {
                            beforeMount: [],
                            mounted: [],
                            updated: [],
                            clicked: [],
                            selection: [],
                            dataPointSelection: [],
                            zoomed: [],
                            scrolled: []
                        },
                        colors: [],
                        clientX: null,
                        clientY: null,
                        fill: {
                            colors: []
                        },
                        stroke: {
                            colors: []
                        },
                        dataLabels: {
                            style: {
                                colors: []
                            }
                        },
                        radarPolygons: {
                            fill: {
                                colors: []
                            }
                        },
                        markers: {
                            colors: [],
                            size: t.markers.size,
                            largestSize: 0
                        },
                        animationEnded: !1,
                        isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints,
                        isDirty: !1,
                        initialConfig: null,
                        lastXAxis: [],
                        lastYAxis: [],
                        series: [],
                        seriesRangeStart: [],
                        seriesRangeEnd: [],
                        seriesPercent: [],
                        seriesTotals: [],
                        stackedSeriesTotals: [],
                        seriesX: [],
                        seriesZ: [],
                        labels: [],
                        timelineLabels: [],
                        invertedTimelineLabels: [],
                        seriesNames: [],
                        noLabelsProvided: !1,
                        allSeriesCollapsed: !1,
                        collapsedSeries: [],
                        collapsedSeriesIndices: [],
                        ancillaryCollapsedSeries: [],
                        ancillaryCollapsedSeriesIndices: [],
                        risingSeries: [],
                        dataFormatXNumeric: !1,
                        selectedDataPoints: [],
                        ignoreYAxisIndexes: [],
                        padHorizontal: 0,
                        maxValsInArrayIndex: 0,
                        zoomEnabled: "zoom" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled,
                        panEnabled: "pan" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.pan,
                        selectionEnabled: "selection" === t.chart.toolbar.autoSelected && t.chart.toolbar.tools.selection,
                        yaxis: null,
                        minY: Number.MIN_VALUE,
                        maxY: -Number.MAX_VALUE,
                        minYArr: [],
                        maxYArr: [],
                        maxX: -Number.MAX_VALUE,
                        initialmaxX: -Number.MAX_VALUE,
                        minX: Number.MIN_VALUE,
                        initialminX: Number.MIN_VALUE,
                        minZ: Number.MIN_VALUE,
                        maxZ: -Number.MAX_VALUE,
                        minXDiff: Number.MAX_VALUE,
                        mousedown: !1,
                        lastClientPosition: {},
                        visibleXRange: void 0,
                        yRange: [],
                        zRange: 0,
                        xRange: 0,
                        yValueDecimal: 0,
                        total: 0,
                        SVGNS: "http://www.w3.org/2000/svg",
                        svgWidth: 0,
                        svgHeight: 0,
                        noData: !1,
                        locale: {},
                        dom: {},
                        memory: {
                            methodsToExec: []
                        },
                        shouldAnimate: !0,
                        skipLastTimelinelabel: !1,
                        delayedElements: [],
                        axisCharts: !0,
                        isXNumeric: !1,
                        isDataXYZ: !1,
                        resized: !1,
                        resizeTimer: null,
                        comboCharts: !1,
                        comboChartsHasBars: !1,
                        dataChanged: !1,
                        previousPaths: [],
                        seriesXvalues: [],
                        seriesYvalues: [],
                        seriesCandleO: [],
                        seriesCandleH: [],
                        seriesCandleL: [],
                        seriesCandleC: [],
                        allSeriesHasEqualX: !0,
                        dataPoints: 0,
                        pointsArray: [],
                        dataLabelsRects: [],
                        lastDrawnDataLabelsIndexes: [],
                        hasNullValues: !1,
                        easing: null,
                        zoomed: !1,
                        gridWidth: 0,
                        gridHeight: 0,
                        yAxisScale: [],
                        xAxisScale: null,
                        xAxisTicksPositions: [],
                        timescaleTicks: [],
                        rotateXLabels: !1,
                        defaultLabels: !1,
                        xLabelFormatter: void 0,
                        yLabelFormatters: [],
                        xaxisTooltipFormatter: void 0,
                        ttKeyFormatter: void 0,
                        ttVal: void 0,
                        ttZFormatter: void 0,
                        LINE_HEIGHT_RATIO: 1.618,
                        xAxisLabelsHeight: 0,
                        yAxisLabelsWidth: 0,
                        scaleX: 1,
                        scaleY: 1,
                        translateX: 0,
                        translateY: 0,
                        translateYAxisX: [],
                        yLabelsCoords: [],
                        yTitleCoords: [],
                        yAxisWidths: [],
                        translateXAxisY: 0,
                        translateXAxisX: 0,
                        tooltip: null,
                        tooltipOpts: null
                    }
                }
            }, {
                key: "init",
                value: function (t) {
                    var e = this.globalVars(t);
                    return e.initialConfig = lt.extend({}, t), e.initialSeries = JSON.parse(JSON.stringify(e.initialConfig.series)), e.lastXAxis = JSON.parse(JSON.stringify(e.initialConfig.xaxis)), e.lastYAxis = JSON.parse(JSON.stringify(e.initialConfig.yaxis)), e
                }
            }]), t
        }(),
        f = function () {
            function e(t) {
                n(this, e), this.opts = t
            }
            return r(e, [{
                key: "init",
                value: function () {
                    var t = new u(this.opts).init();
                    return {
                        config: t,
                        globals: (new g).init(t)
                    }
                }
            }]), e
        }(),
        dt = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.opts = null, this.seriesIndex = 0
            }
            return r(e, [{
                key: "clippedImgArea",
                value: function (t) {
                    var e = this.w,
                        i = e.config,
                        s = parseInt(e.globals.gridWidth),
                        a = parseInt(e.globals.gridHeight),
                        n = a < s ? s : a,
                        r = t.image,
                        o = 0,
                        l = 0;
                    l = void 0 === t.width && void 0 === t.height ? void 0 !== i.fill.image.width && void 0 !== i.fill.image.height ? (o = i.fill.image.width + 1, i.fill.image.height) : (o = n + 1, n) : (o = t.width, t.height);
                    var h = document.createElementNS(e.globals.SVGNS, "pattern");
                    ht.setAttrs(h, {
                        id: t.patternID,
                        patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse",
                        width: o + "px",
                        height: l + "px"
                    });
                    var c = document.createElementNS(e.globals.SVGNS, "image");
                    h.appendChild(c), c.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), ht.setAttrs(c, {
                        x: 0,
                        y: 0,
                        preserveAspectRatio: "none",
                        width: o + "px",
                        height: l + "px"
                    }), c.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(h)
                }
            }, {
                key: "getSeriesIndex",
                value: function (t) {
                    var e = this.w;
                    return "bar" === e.config.chart.type && e.config.plotOptions.bar.distributed || "heatmap" === e.config.chart.type ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex
                }
            }, {
                key: "fillPath",
                value: function (t) {
                    var e = this.w;
                    this.opts = t;
                    var i, s, a, n = this.w.config;
                    this.seriesIndex = this.getSeriesIndex(t);
                    var r = this.getFillColors(),
                        o = r[this.seriesIndex];
                    "function" == typeof o && (o = o({
                        seriesIndex: this.seriesIndex,
                        value: t.value,
                        w: e
                    }));
                    var l = this.getFillType(this.seriesIndex),
                        h = Array.isArray(n.fill.opacity) ? n.fill.opacity[this.seriesIndex] : n.fill.opacity,
                        c = o;
                    return t.color && (o = t.color), -1 === o.indexOf("rgb") ? c = lt.hexToRgba(o, h) : -1 < o.indexOf("rgba") && (h = "0." + lt.getOpacityFromRGBA(r[this.seriesIndex])), "pattern" === l && (s = this.handlePatternFill(s, o, h, c)), "gradient" === l && (a = this.handleGradientFill(a, o, h, this.seriesIndex)), i = 0 < n.fill.image.src.length && "image" === l ? t.seriesNumber < n.fill.image.src.length ? (this.clippedImgArea({
                        opacity: h,
                        image: n.fill.image.src[t.seriesNumber],
                        patternUnits: t.patternUnits,
                        patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1)
                    }), "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1, ")")) : c : "gradient" === l ? a : "pattern" === l ? s : c, t.solid && (i = c), i
                }
            }, {
                key: "getFillType",
                value: function (t) {
                    var e = this.w;
                    return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type
                }
            }, {
                key: "getFillColors",
                value: function () {
                    var t = this.w,
                        e = t.config,
                        i = this.opts,
                        s = [];
                    return t.globals.comboCharts ? "line" === t.config.series[this.seriesIndex].type ? t.globals.stroke.colors instanceof Array ? s = t.globals.stroke.colors : s.push(t.globals.stroke.colors) : t.globals.fill.colors instanceof Array ? s = t.globals.fill.colors : s.push(t.globals.fill.colors) : "line" === e.chart.type ? t.globals.stroke.colors instanceof Array ? s = t.globals.stroke.colors : s.push(t.globals.stroke.colors) : t.globals.fill.colors instanceof Array ? s = t.globals.fill.colors : s.push(t.globals.fill.colors), void 0 !== i.fillColors && (s = [], i.fillColors instanceof Array ? s = i.fillColors.slice() : s.push(i.fillColors)), s
                }
            }, {
                key: "handlePatternFill",
                value: function (t, e, i, s) {
                    var a = this.w.config,
                        n = this.opts,
                        r = new ht(this.ctx),
                        o = void 0 === a.fill.pattern.strokeWidth ? Array.isArray(a.stroke.width) ? a.stroke.width[this.seriesIndex] : a.stroke.width : Array.isArray(a.fill.pattern.strokeWidth) ? a.fill.pattern.strokeWidth[this.seriesIndex] : a.fill.pattern.strokeWidth,
                        l = e;
                    return a.fill.pattern.style instanceof Array ? void 0 !== a.fill.pattern.style[n.seriesNumber] ? r.drawPattern(a.fill.pattern.style[n.seriesNumber], a.fill.pattern.width, a.fill.pattern.height, l, o, i) : s : r.drawPattern(a.fill.pattern.style, a.fill.pattern.width, a.fill.pattern.height, l, o, i)
                }
            }, {
                key: "handleGradientFill",
                value: function (t, e, i, s) {
                    var a, n, r = this.w.config,
                        o = this.opts,
                        l = new ht(this.ctx),
                        h = new lt,
                        c = r.fill.gradient.type,
                        d = void 0 === r.fill.gradient.opacityFrom ? i : Array.isArray(r.fill.gradient.opacityFrom) ? r.fill.gradient.opacityFrom[s] : r.fill.gradient.opacityFrom,
                        u = void 0 === r.fill.gradient.opacityTo ? i : Array.isArray(r.fill.gradient.opacityTo) ? r.fill.gradient.opacityTo[s] : r.fill.gradient.opacityTo;
                    if (a = e, n = void 0 === r.fill.gradient.gradientToColors || 0 === r.fill.gradient.gradientToColors.length ? "dark" === r.fill.gradient.shade ? h.shadeColor(-1 * parseFloat(r.fill.gradient.shadeIntensity), e) : h.shadeColor(parseFloat(r.fill.gradient.shadeIntensity), e) : r.fill.gradient.gradientToColors[o.seriesNumber], r.fill.gradient.inverseColors) {
                        var g = a;
                        a = n, n = g
                    }
                    return l.drawGradient(c, a, n, d, u, o.size, r.fill.gradient.stops, r.fill.gradient.colorStops, s)
                }
            }]), e
        }(),
        ut = function () {
            function i(t, e) {
                n(this, i), this.ctx = t, this.w = t.w
            }
            return r(i, [{
                key: "setGlobalMarkerSize",
                value: function () {
                    var e = this.w;
                    if (e.globals.markers.size = Array.isArray(e.config.markers.size) ? e.config.markers.size : [e.config.markers.size], 0 < e.globals.markers.size.length) {
                        if (e.globals.markers.size.length < e.globals.series.length + 1)
                            for (var t = 0; t <= e.globals.series.length; t++) void 0 === e.globals.markers.size[t] && e.globals.markers.size.push(e.globals.markers.size[0])
                    } else e.globals.markers.size = e.config.series.map(function (t) {
                        return e.config.markers.size
                    })
                }
            }, {
                key: "plotChartMarkers",
                value: function (t, a, n) {
                    var r, o = this,
                        l = this.w,
                        h = a,
                        c = t,
                        d = null,
                        u = new ht(this.ctx);
                    if (0 < l.globals.markers.size[a] && (d = u.group({
                            class: "apexcharts-series-markers"
                        })).attr("clip-path", "url(#gridRectMarkerMask".concat(l.globals.cuid, ")")), c.x instanceof Array)
                        for (var e = function (t) {
                                var e = n;
                                1 === n && 0 === t && (e = 0), 1 === n && 1 === t && (e = 1);
                                var i = "apexcharts-marker";
                                if ("line" !== l.config.chart.type && "area" !== l.config.chart.type || l.globals.comboCharts || l.config.tooltip.intersect || (i += " no-pointer-events"), Array.isArray(l.config.markers.size) ? 0 < l.globals.markers.size[a] : 0 < l.config.markers.size) {
                                    lt.isNumber(c.y[t]) ? i += " w".concat((Math.random() + 1).toString(36).substring(4)) : i = "apexcharts-nullpoint";
                                    var s = o.getMarkerConfig(i, a);
                                    l.config.markers.discrete.map(function (t) {
                                        t.seriesIndex === a && t.dataPointIndex === e && (s.pointStrokeColor = t.strokeColor, s.pointFillColor = t.fillColor, s.pSize = t.size)
                                    }), l.config.series[h].data[n] && (l.config.series[h].data[n].fillColor && (s.pointFillColor = l.config.series[h].data[n].fillColor), l.config.series[h].data[n].strokeColor && (s.pointStrokeColor = l.config.series[h].data[n].strokeColor)), (r = u.drawMarker(c.x[t], c.y[t], s)).attr("rel", e), r.attr("j", e), r.attr("index", a), r.node.setAttribute("default-marker-size", s.pSize), new I(o.ctx).setSelectionFilter(r, a, e), o.addEvents(r), d && d.add(r)
                                } else void 0 === l.globals.pointsArray[a] && (l.globals.pointsArray[a] = []), l.globals.pointsArray[a].push([c.x[t], c.y[t]])
                            }, i = 0; i < c.x.length; i++) e(i);
                    return d
                }
            }, {
                key: "getMarkerConfig",
                value: function (t, e) {
                    var i = this.w,
                        s = this.getMarkerStyle(e);
                    return {
                        pSize: i.globals.markers.size[e],
                        pRadius: i.config.markers.radius,
                        pWidth: i.config.markers.strokeWidth,
                        pointStrokeColor: s.pointStrokeColor,
                        pointFillColor: s.pointFillColor,
                        shape: i.config.markers.shape instanceof Array ? i.config.markers.shape[e] : i.config.markers.shape,
                        class: t,
                        pointStrokeOpacity: i.config.markers.strokeOpacity,
                        pointFillOpacity: i.config.markers.fillOpacity,
                        seriesIndex: e
                    }
                }
            }, {
                key: "addEvents",
                value: function (t) {
                    var e = new ht(this.ctx);
                    t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("touchstart", e.pathMouseDown.bind(this.ctx, t), {
                        passive: !0
                    })
                }
            }, {
                key: "getMarkerStyle",
                value: function (t) {
                    var e = this.w,
                        i = e.globals.markers.colors,
                        s = e.config.markers.strokeColor || e.config.markers.strokeColors;
                    return {
                        pointStrokeColor: s instanceof Array ? s[t] : s,
                        pointFillColor: i instanceof Array ? i[t] : i
                    }
                }
            }]), i
        }(),
        x = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.radiusSizes = []
            }
            return r(e, [{
                key: "draw",
                value: function (t, e, i) {
                    var s = this.w,
                        a = new ht(this.ctx),
                        n = i.realIndex,
                        r = i.pointsPos,
                        o = i.zRatio,
                        l = i.elParent,
                        h = a.group({
                            class: "apexcharts-series-markers apexcharts-series-".concat(s.config.chart.type)
                        });
                    if (h.attr("clip-path", "url(#gridRectMarkerMask".concat(s.globals.cuid, ")")), r.x instanceof Array)
                        for (var c = 0; c < r.x.length; c++) {
                            var d = e + 1,
                                u = !0;
                            0 === e && 0 === c && (d = 0), 0 === e && 1 === c && (d = 1);
                            var g = 0,
                                f = s.globals.markers.size[n];
                            o !== 1 / 0 && (f = s.globals.seriesZ[n][d] / o, void 0 === this.radiusSizes[n] && this.radiusSizes.push([]), this.radiusSizes[n].push(f)), s.config.chart.animations.enabled || (g = f);
                            var p = r.x[c],
                                x = r.y[c];
                            if (g = g || 0, (0 === p && 0 === x || null === x || void 0 === s.globals.series[n][d]) && (u = !1), u) {
                                var b = this.drawPoint(p, x, g, f, n, d, e);
                                h.add(b)
                            }
                            l.add(h)
                        }
                }
            }, {
                key: "drawPoint",
                value: function (t, e, i, s, a, n, r) {
                    var o = this.w,
                        l = a,
                        h = new Y(this.ctx),
                        c = new I(this.ctx),
                        d = new dt(this.ctx),
                        u = new ut(this.ctx),
                        g = new ht(this.ctx),
                        f = u.getMarkerConfig("apexcharts-marker", l),
                        p = d.fillPath({
                            seriesNumber: a,
                            patternUnits: "objectBoundingBox",
                            value: o.globals.series[a][r]
                        }),
                        x = g.drawCircle(i);
                    if (o.config.series[l].data[n] && o.config.series[l].data[n].fillColor && (p = o.config.series[l].data[n].fillColor), x.attr({
                            cx: t,
                            cy: e,
                            fill: p,
                            stroke: f.pointStrokeColor,
                            strokeWidth: f.pWidth
                        }), o.config.chart.dropShadow.enabled) {
                        var b = o.config.chart.dropShadow;
                        c.dropShadow(x, b, a)
                    }
                    if (this.initialAnim && !o.globals.dataChanged) {
                        var m = 1;
                        o.globals.resized || (m = o.config.chart.animations.speed), h.animateCircleRadius(x, 0, s, m, o.globals.easing)
                    }
                    if (o.globals.dataChanged)
                        if (this.dynamicAnim) {
                            var v, y, w, k, A = o.config.chart.animations.dynamicAnimation.speed;
                            null != (k = o.globals.previousPaths[a] && o.globals.previousPaths[a][r]) && (v = k.x, y = k.y, w = void 0 !== k.r ? k.r : s);
                            for (var S = 0; S < o.globals.collapsedSeries.length; S++) o.globals.collapsedSeries[S].index === a && (A = 1, s = 0);
                            0 === t && 0 === e && (s = 0), h.animateCircle(x, {
                                cx: v,
                                cy: y,
                                r: w
                            }, {
                                cx: t,
                                cy: e,
                                r: s
                            }, A, o.globals.easing)
                        } else x.attr({
                            r: s
                        });
                    return x.attr({
                        rel: n,
                        j: n,
                        index: a,
                        "default-marker-size": s
                    }), c.setSelectionFilter(x, a, n), u.addEvents(x), x.node.classList.add("apexcharts-marker"), x
                }
            }, {
                key: "centerTextInBubble",
                value: function (t) {
                    var e = this.w;
                    return {
                        y: t += parseInt(e.config.dataLabels.style.fontSize) / 4
                    }
                }
            }]), e
        }(),
        gt = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "dataLabelsCorrection",
                value: function (t, e, i, s, a, n, r) {
                    var o = this.w,
                        l = !1,
                        h = new ht(this.ctx).getTextRects(i, r),
                        c = h.width,
                        d = h.height;
                    void 0 === o.globals.dataLabelsRects[s] && (o.globals.dataLabelsRects[s] = []), o.globals.dataLabelsRects[s].push({
                        x: t,
                        y: e,
                        width: c,
                        height: d
                    });
                    var u = o.globals.dataLabelsRects[s].length - 2,
                        g = void 0 !== o.globals.lastDrawnDataLabelsIndexes[s] ? o.globals.lastDrawnDataLabelsIndexes[s][o.globals.lastDrawnDataLabelsIndexes[s].length - 1] : 0;
                    if (void 0 !== o.globals.dataLabelsRects[s][u]) {
                        var f = o.globals.dataLabelsRects[s][g];
                        (t > f.x + f.width + 2 || e > f.y + f.height + 2 || t + c < f.x) && (l = !0)
                    }
                    return (0 === a || n) && (l = !0), {
                        x: t,
                        y: e,
                        drawnextLabel: l
                    }
                }
            }, {
                key: "drawDataLabel",
                value: function (t, e, i) {
                    var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : "top",
                        a = this.w,
                        n = new ht(this.ctx),
                        r = a.config.dataLabels,
                        o = 0,
                        l = 0,
                        h = i,
                        c = null;
                    if (!r.enabled || t.x instanceof Array != 1) return c;
                    (c = n.group({
                        class: "apexcharts-data-labels"
                    })).attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")"));
                    for (var d = 0; d < t.x.length; d++)
                        if (o = t.x[d] + r.offsetX, l = t.y[d] + r.offsetY - a.globals.markers.size[e] - 5, "bottom" === s && (l = l + 2 * a.globals.markers.size[e] + 1.4 * parseInt(r.style.fontSize)), !isNaN(o)) {
                            1 === i && 0 === d && (h = 0), 1 === i && 1 === d && (h = 1);
                            var u = a.globals.series[e][h],
                                g = "";
                            "bubble" === a.config.chart.type ? (g = a.globals.seriesZ[e][h], l = t.y[d] + a.config.dataLabels.offsetY, l = new x(this.ctx).centerTextInBubble(l, e, h).y) : null != u && (g = a.config.dataLabels.formatter(u, {
                                ctx: this.ctx,
                                seriesIndex: e,
                                dataPointIndex: h,
                                w: a
                            })), this.plotDataLabelsText({
                                x: o,
                                y: l,
                                text: g,
                                i: e,
                                j: h,
                                parent: c,
                                offsetCorrection: !0,
                                dataLabelsConfig: a.config.dataLabels
                            })
                        } return c
                }
            }, {
                key: "plotDataLabelsText",
                value: function (t) {
                    var e = this.w,
                        i = new ht(this.ctx),
                        s = t.x,
                        a = t.y,
                        n = t.i,
                        r = t.j,
                        o = t.text,
                        l = t.textAnchor,
                        h = t.parent,
                        c = t.dataLabelsConfig,
                        d = t.alwaysDrawDataLabel,
                        u = t.offsetCorrection;
                    if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && -1 < e.config.dataLabels.enabledOnSeries.indexOf(n))) {
                        var g = {
                            x: s,
                            y: a,
                            drawnextLabel: !0
                        };
                        if (u && (g = this.dataLabelsCorrection(s, a, o, n, r, d, parseInt(c.style.fontSize))), e.globals.zoomed || (s = g.x, a = g.y), g.drawnextLabel) {
                            var f = i.drawText({
                                width: 100,
                                height: parseInt(c.style.fontSize),
                                x: s,
                                y: a,
                                foreColor: e.globals.dataLabels.style.colors[n],
                                textAnchor: l || c.textAnchor,
                                text: o,
                                fontSize: c.style.fontSize,
                                fontFamily: c.style.fontFamily
                            });
                            if (f.attr({
                                    class: "apexcharts-datalabel",
                                    cx: s,
                                    cy: a
                                }), c.dropShadow.enabled) {
                                var p = c.dropShadow;
                                new I(this.ctx).dropShadow(f, p)
                            }
                            h.add(f), void 0 === e.globals.lastDrawnDataLabelsIndexes[n] && (e.globals.lastDrawnDataLabelsIndexes[n] = []), e.globals.lastDrawnDataLabelsIndexes[n].push(r)
                        }
                    }
                }
            }]), e
        }(),
        P = function () {
            function s(t, e) {
                n(this, s), this.ctx = t, this.w = t.w;
                var i = this.w;
                this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = i.config.stroke.width, this.isNullValue = !1, this.xyRatios = e, null !== this.xyRatios && (this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.invertedXRatio = e.invertedXRatio, this.invertedYRatio = e.invertedYRatio, this.baseLineY = e.baseLineY, this.baseLineInvertedY = e.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0
            }
            return r(s, [{
                key: "draw",
                value: function (t, e) {
                    var i = this.w,
                        s = new ht(this.ctx),
                        a = new ct(this.ctx, i);
                    t = a.getLogSeries(t), this.series = t, this.yRatio = a.getLogYRatios(this.yRatio), this.initVariables(t);
                    var n = s.group({
                        class: "apexcharts-bar-series apexcharts-plot-series"
                    });
                    i.config.dataLabels.enabled && this.totalItems > i.config.plotOptions.bar.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering.");
                    for (var r = 0, o = 0; r < t.length; r++, o++) {
                        var l, h, c, d, u = void 0,
                            g = void 0,
                            f = void 0,
                            p = void 0,
                            x = [],
                            b = [],
                            m = i.globals.comboCharts ? e[r] : r,
                            v = s.group({
                                class: "apexcharts-series ".concat(lt.escapeString(i.globals.seriesNames[m])),
                                rel: r + 1,
                                "data:realIndex": m
                            });
                        this.ctx.series.addCollapsedClassToSeries(v, m), 0 < t[r].length && (this.visibleI = this.visibleI + 1);
                        var y = 0,
                            w = 0,
                            k = 0;
                        1 < this.yRatio.length && (this.yaxisIndex = m), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
                        var A = this.initialPositions();
                        p = A.y, w = A.barHeight, h = A.yDivision, d = A.zeroW, f = A.x, k = A.barWidth, l = A.xDivision, c = A.zeroH, this.horizontal || b.push(f + k / 2);
                        for (var S = s.group({
                                class: "apexcharts-datalabels"
                            }), C = 0, L = i.globals.dataPoints; C < i.globals.dataPoints; C++, L--) {
                            void 0 === this.series[r][C] || null === t[r][C] ? this.isNullValue = !0 : this.isNullValue = !1, i.config.stroke.show && (y = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[m] : this.strokeWidth);
                            var z = null;
                            this.isHorizontal ? (z = this.drawBarPaths({
                                indexes: {
                                    i: r,
                                    j: C,
                                    realIndex: m,
                                    bc: o
                                },
                                barHeight: w,
                                strokeWidth: y,
                                pathTo: u,
                                pathFrom: g,
                                zeroW: d,
                                x: f,
                                y: p,
                                yDivision: h,
                                elSeries: v
                            }), k = this.series[r][C] / this.invertedYRatio) : (z = this.drawColumnPaths({
                                indexes: {
                                    i: r,
                                    j: C,
                                    realIndex: m,
                                    bc: o
                                },
                                x: f,
                                y: p,
                                xDivision: l,
                                pathTo: u,
                                pathFrom: g,
                                barWidth: k,
                                zeroH: c,
                                strokeWidth: y,
                                elSeries: v
                            }), w = this.series[r][C] / this.yRatio[this.yaxisIndex]), u = z.pathTo, g = z.pathFrom, p = z.y, f = z.x, 0 < C && b.push(f + k / 2), x.push(p);
                            var P = this.getPathFillColor(t, r, C, m);
                            v = this.renderSeries({
                                realIndex: m,
                                pathFill: P,
                                j: C,
                                i: r,
                                pathFrom: g,
                                pathTo: u,
                                strokeWidth: y,
                                elSeries: v,
                                x: f,
                                y: p,
                                series: t,
                                barHeight: w,
                                barWidth: k,
                                elDataLabelsWrap: S,
                                visibleSeries: this.visibleI,
                                type: "bar"
                            })
                        }
                        i.globals.seriesXvalues[m] = b, i.globals.seriesYvalues[m] = x, n.add(v)
                    }
                    return n
                }
            }, {
                key: "getPathFillColor",
                value: function (e, i, s, t) {
                    var a = this.w,
                        n = new dt(this.ctx),
                        r = null,
                        o = this.barOptions.distributed ? s : i;
                    return 0 < this.barOptions.colors.ranges.length && this.barOptions.colors.ranges.map(function (t) {
                        e[i][s] >= t.from && e[i][s] <= t.to && (r = t.color)
                    }), a.config.series[i].data[s] && a.config.series[i].data[s].fillColor && (r = a.config.series[i].data[s].fillColor), n.fillPath({
                        seriesNumber: this.barOptions.distributed ? o : t,
                        color: r,
                        value: e[i][s]
                    })
                }
            }, {
                key: "renderSeries",
                value: function (t) {
                    var e = t.realIndex,
                        i = t.pathFill,
                        s = t.lineFill,
                        a = t.j,
                        n = t.i,
                        r = t.pathFrom,
                        o = t.pathTo,
                        l = t.strokeWidth,
                        h = t.elSeries,
                        c = t.x,
                        d = t.y,
                        u = t.series,
                        g = t.barHeight,
                        f = t.barWidth,
                        p = t.elDataLabelsWrap,
                        x = t.visibleSeries,
                        b = t.type,
                        m = this.w,
                        v = new ht(this.ctx);
                    s || (s = this.barOptions.distributed ? m.globals.stroke.colors[a] : m.globals.stroke.colors[e]), m.config.series[n].data[a] && m.config.series[n].data[a].strokeColor && (s = m.config.series[n].data[a].strokeColor), this.isNullValue && (i = "none");
                    var y = a / m.config.chart.animations.animateGradually.delay * (m.config.chart.animations.speed / m.globals.dataPoints) / 2.4,
                        w = v.renderPaths({
                            i: n,
                            j: a,
                            realIndex: e,
                            pathFrom: r,
                            pathTo: o,
                            stroke: s,
                            strokeWidth: l,
                            strokeLineCap: m.config.stroke.lineCap,
                            fill: i,
                            animationDelay: y,
                            initialSpeed: m.config.chart.animations.speed,
                            dataChangeSpeed: m.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-".concat(b, "-area"),
                            id: "apexcharts-".concat(b, "-area")
                        });
                    w.attr("clip-path", "url(#gridRectMask".concat(m.globals.cuid, ")")), new I(this.ctx).setSelectionFilter(w, e, a), h.add(w);
                    var k = this.calculateDataLabelsPos({
                        x: c,
                        y: d,
                        i: n,
                        j: a,
                        series: u,
                        realIndex: e,
                        barHeight: g,
                        barWidth: f,
                        renderedPath: w,
                        visibleSeries: x
                    });
                    return null !== k && p.add(k), h.add(p), h
                }
            }, {
                key: "initVariables",
                value: function (t) {
                    var e = this.w;
                    this.series = t, this.totalItems = 0, this.seriesLen = 0, this.visibleI = -1, this.visibleItems = 1;
                    for (var i = 0; i < t.length; i++)
                        if (0 < t[i].length && (this.seriesLen = this.seriesLen + 1, this.totalItems += t[i].length), e.globals.isXNumeric)
                            for (var s = 0; s < t[i].length; s++) e.globals.seriesX[i][s] > e.globals.minX && e.globals.seriesX[i][s] < e.globals.maxX && this.visibleItems++;
                        else this.visibleItems = e.globals.dataPoints;
                    0 === this.seriesLen && (this.seriesLen = 1)
                }
            }, {
                key: "initialPositions",
                value: function () {
                    var t, e, i, s, a, n, r, o, l = this.w;
                    return this.isHorizontal ? (a = (i = l.globals.gridHeight / l.globals.dataPoints) / this.seriesLen, l.globals.isXNumeric && (a = (i = l.globals.gridHeight / this.totalItems) / this.seriesLen), a = a * parseInt(this.barOptions.barHeight) / 100, o = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (i - a * this.seriesLen) / 2) : (n = (s = l.globals.gridWidth / this.visibleItems) / this.seriesLen * parseInt(this.barOptions.columnWidth) / 100, l.globals.isXNumeric && (n = (s = l.globals.minXDiff / this.xRatio) / this.seriesLen * parseInt(this.barOptions.columnWidth) / 100), r = l.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? l.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = l.globals.padHorizontal + (s - n * this.seriesLen) / 2), {
                        x: t,
                        y: e,
                        yDivision: i,
                        xDivision: s,
                        barHeight: a,
                        barWidth: n,
                        zeroH: r,
                        zeroW: o
                    }
                }
            }, {
                key: "drawBarPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.barHeight,
                        s = t.strokeWidth,
                        a = t.pathTo,
                        n = t.pathFrom,
                        r = t.zeroW,
                        o = t.x,
                        l = t.y,
                        h = t.yDivision,
                        c = t.elSeries,
                        d = this.w,
                        u = new ht(this.ctx),
                        g = e.i,
                        f = e.j,
                        p = e.realIndex,
                        x = e.bc;
                    d.globals.isXNumeric && (l = (d.globals.seriesX[g][f] - d.globals.minX) / this.invertedXRatio - i);
                    var b = l + i * this.visibleI;
                    a = u.move(r, b), n = u.move(r, b), 0 < d.globals.previousPaths.length && (n = this.getPathFrom(p, f));
                    var m = {
                            barHeight: i,
                            strokeWidth: s,
                            barYPosition: b,
                            x: o = void 0 === this.series[g][f] || null === this.series[g][f] ? r : r + this.series[g][f] / this.invertedYRatio - 2 * (this.isReversed ? this.series[g][f] / this.invertedYRatio : 0),
                            zeroW: r
                        },
                        v = this.barEndingShape(d, m, this.series, g, f);
                    if (a = a + u.line(v.newX, b) + v.path + u.line(r, b + i - s) + u.line(r, b), n = n + u.line(r, b) + v.ending_p_from + u.line(r, b + i - s) + u.line(r, b + i - s) + u.line(r, b), d.globals.isXNumeric || (l += h), 0 < this.barOptions.colors.backgroundBarColors.length && 0 === g) {
                        x >= this.barOptions.colors.backgroundBarColors.length && (x = 0);
                        var y = this.barOptions.colors.backgroundBarColors[x],
                            w = u.drawRect(0, b - i * this.visibleI, d.globals.gridWidth, i * this.seriesLen, 0, y, this.barOptions.colors.backgroundBarOpacity);
                        c.add(w), w.node.classList.add("apexcharts-backgroundBar")
                    }
                    return {
                        pathTo: a,
                        pathFrom: n,
                        x: o,
                        y: l,
                        barYPosition: b
                    }
                }
            }, {
                key: "drawColumnPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.x,
                        s = t.y,
                        a = t.xDivision,
                        n = t.pathTo,
                        r = t.pathFrom,
                        o = t.barWidth,
                        l = t.zeroH,
                        h = t.strokeWidth,
                        c = t.elSeries,
                        d = this.w,
                        u = new ht(this.ctx),
                        g = e.i,
                        f = e.j,
                        p = e.realIndex,
                        x = e.bc;
                    d.globals.isXNumeric && (i = (d.globals.seriesX[g][f] - d.globals.minX) / this.xRatio - o / 2);
                    var b = i + o * this.visibleI;
                    n = u.move(b, l), r = u.move(b, l), 0 < d.globals.previousPaths.length && (r = this.getPathFrom(p, f));
                    var m = {
                            barWidth: o,
                            strokeWidth: h,
                            barXPosition: b,
                            y: s = void 0 === this.series[g][f] || null === this.series[g][f] ? l : l - this.series[g][f] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[g][f] / this.yRatio[this.yaxisIndex] : 0),
                            zeroH: l
                        },
                        v = this.barEndingShape(d, m, this.series, g, f);
                    if (n = n + u.line(b, v.newY) + v.path + u.line(b + o - h, l) + u.line(b - h / 2, l), r = r + u.line(b, l) + v.ending_p_from + u.line(b + o - h, l) + u.line(b + o - h, l) + u.line(b - h / 2, l), d.globals.isXNumeric || (i += a), 0 < this.barOptions.colors.backgroundBarColors.length && 0 === g) {
                        x >= this.barOptions.colors.backgroundBarColors.length && (x = 0);
                        var y = this.barOptions.colors.backgroundBarColors[x],
                            w = u.drawRect(b - o * this.visibleI, 0, o * this.seriesLen, d.globals.gridHeight, 0, y, this.barOptions.colors.backgroundBarOpacity);
                        c.add(w), w.node.classList.add("apexcharts-backgroundBar")
                    }
                    return {
                        pathTo: n,
                        pathFrom: r,
                        x: i,
                        y: s,
                        barXPosition: b
                    }
                }
            }, {
                key: "getPathFrom",
                value: function (t, e) {
                    for (var i, s = this.w, a = 0; a < s.globals.previousPaths.length; a++) {
                        var n = s.globals.previousPaths[a];
                        0 < n.paths.length && parseInt(n.realIndex) === parseInt(t) && void 0 !== s.globals.previousPaths[a].paths[e] && (i = s.globals.previousPaths[a].paths[e].d)
                    }
                    return i
                }
            }, {
                key: "calculateDataLabelsPos",
                value: function (t) {
                    var e = t.x,
                        i = t.y,
                        s = t.i,
                        a = t.j,
                        n = t.realIndex,
                        r = t.series,
                        o = t.barHeight,
                        l = t.barWidth,
                        h = t.visibleSeries,
                        c = t.renderedPath,
                        d = this.w,
                        u = new ht(this.ctx),
                        g = Array.isArray(this.strokeWidth) ? this.strokeWidth[n] : this.strokeWidth,
                        f = e + parseFloat(l * h),
                        p = i + parseFloat(o * h);
                    d.globals.isXNumeric && !d.globals.isBarHorizontal && (f = e + parseFloat(l * (h + 1)) - g, p = i + parseFloat(o * (h + 1)) - g);
                    var x, b = e,
                        m = i,
                        v = d.config.dataLabels,
                        y = this.barOptions.dataLabels,
                        w = v.offsetX,
                        k = v.offsetY,
                        A = {
                            width: 0,
                            height: 0
                        };
                    return d.config.dataLabels.enabled && (A = u.getTextRects(d.globals.yLabelFormatters[0](d.globals.maxY), parseInt(v.style.fontSize))), x = this.isHorizontal ? this.calculateBarsDataLabelsPosition({
                        x: e,
                        y: i,
                        i: s,
                        j: a,
                        renderedPath: c,
                        bcy: p,
                        barHeight: o,
                        barWidth: l,
                        textRects: A,
                        strokeWidth: g,
                        dataLabelsX: b,
                        dataLabelsY: m,
                        barDataLabelsConfig: y,
                        offX: w,
                        offY: k
                    }) : this.calculateColumnsDataLabelsPosition({
                        x: e,
                        y: i,
                        i: s,
                        j: a,
                        renderedPath: c,
                        realIndex: n,
                        bcx: f,
                        bcy: p,
                        barHeight: o,
                        barWidth: l,
                        textRects: A,
                        strokeWidth: g,
                        dataLabelsY: m,
                        barDataLabelsConfig: y,
                        offX: w,
                        offY: k
                    }), c.attr({
                        cy: x.bcy,
                        cx: x.bcx,
                        j: a,
                        val: r[s][a],
                        barHeight: o,
                        barWidth: l
                    }), this.drawCalculatedDataLabels({
                        x: x.dataLabelsX,
                        y: x.dataLabelsY,
                        val: r[s][a],
                        i: n,
                        j: a,
                        barWidth: l,
                        barHeight: o,
                        textRects: A,
                        dataLabelsConfig: v
                    })
                }
            }, {
                key: "calculateColumnsDataLabelsPosition",
                value: function (t) {
                    var e, i = this.w,
                        s = t.i,
                        a = t.j,
                        n = t.y,
                        r = t.bcx,
                        o = t.barWidth,
                        l = t.barHeight,
                        h = t.textRects,
                        c = t.dataLabelsY,
                        d = t.barDataLabelsConfig,
                        u = t.strokeWidth,
                        g = t.offX,
                        f = t.offY,
                        p = i.globals.gridWidth / i.globals.dataPoints;
                    r -= u / 2, e = i.globals.isXNumeric ? r - o / 2 + g : r - p + o / 2 + g;
                    var x = this.series[s][a] <= 0;
                    switch (this.isReversed && (n -= l), d.position) {
                        case "center":
                            c = x ? n + l / 2 + h.height / 2 + f : n + l / 2 + h.height / 2 - f;
                            break;
                        case "bottom":
                            c = x ? n + l + h.height + u + f : n + l - h.height / 2 + u - f;
                            break;
                        case "top":
                            c = x ? n - h.height / 2 - f : n + h.height + f
                    }
                    return i.config.chart.stacked || (c < 0 ? c = 0 + u : c + h.height / 3 > i.globals.gridHeight && (c = i.globals.gridHeight - u)), {
                        bcx: r,
                        bcy: n,
                        dataLabelsX: e,
                        dataLabelsY: c
                    }
                }
            }, {
                key: "calculateBarsDataLabelsPosition",
                value: function (t) {
                    var e = this.w,
                        i = t.x,
                        s = t.i,
                        a = t.j,
                        n = t.bcy,
                        r = t.barHeight,
                        o = t.barWidth,
                        l = t.textRects,
                        h = t.dataLabelsX,
                        c = t.strokeWidth,
                        d = t.barDataLabelsConfig,
                        u = t.offX,
                        g = t.offY,
                        f = n - e.globals.gridHeight / e.globals.dataPoints + r / 2 + l.height / 2 + g - 3,
                        p = this.series[s][a] <= 0;
                    switch (this.isReversed && (i += o), d.position) {
                        case "center":
                            h = p ? i - o / 2 - u : i - o / 2 + u;
                            break;
                        case "bottom":
                            h = p ? i - o - c - Math.round(l.width / 2) - u : i - o + c + Math.round(l.width / 2) + u;
                            break;
                        case "top":
                            h = p ? i - c + Math.round(l.width / 2) - u : i - c - Math.round(l.width / 2) + u
                    }
                    return e.config.chart.stacked || (h < 0 ? h = h + l.width + c : h + l.width / 2 > e.globals.gridWidth && (h = e.globals.gridWidth - l.width - c)), {
                        bcx: i,
                        bcy: n,
                        dataLabelsX: h,
                        dataLabelsY: f
                    }
                }
            }, {
                key: "drawCalculatedDataLabels",
                value: function (t) {
                    var e = t.x,
                        i = t.y,
                        s = t.val,
                        a = t.i,
                        n = t.j,
                        r = t.textRects,
                        o = t.barHeight,
                        l = t.barWidth,
                        h = t.dataLabelsConfig,
                        c = this.w,
                        d = new gt(this.ctx),
                        u = new ht(this.ctx),
                        g = h.formatter,
                        f = null,
                        p = -1 < c.globals.collapsedSeriesIndices.indexOf(a);
                    if (h.enabled && !p) {
                        f = u.group({
                            class: "apexcharts-data-labels"
                        });
                        var x = "";
                        null != s && (x = g(s, {
                            seriesIndex: a,
                            dataPointIndex: n,
                            w: c
                        })), 0 === s && c.config.chart.stacked && (x = ""), c.config.chart.stacked && this.barOptions.dataLabels.hideOverflowingLabels && (this.isHorizontal ? (l = this.series[a][n] / this.yRatio[this.yaxisIndex], r.width / 1.6 > l && (x = "")) : (o = this.series[a][n] / this.yRatio[this.yaxisIndex], r.height / 1.6 > o && (x = ""))), d.plotDataLabelsText({
                            x: e,
                            y: i,
                            text: x,
                            i: a,
                            j: n,
                            parent: f,
                            dataLabelsConfig: h,
                            alwaysDrawDataLabel: !0,
                            offsetCorrection: !0
                        })
                    }
                    return f
                }
            }, {
                key: "barEndingShape",
                value: function (t, e, i, s, a) {
                    var n = new ht(this.ctx);
                    if (this.isHorizontal) {
                        var r = null,
                            o = e.x;
                        if (void 0 !== i[s][a] || null !== i[s][a]) {
                            var l = i[s][a] < 0,
                                h = e.barHeight / 2 - e.strokeWidth;
                            switch (l && (h = -e.barHeight / 2 - e.strokeWidth), t.config.chart.stacked || "rounded" === this.barOptions.endingShape && (o = e.x - h / 2), this.barOptions.endingShape) {
                                case "flat":
                                    r = n.line(o, e.barYPosition + e.barHeight - e.strokeWidth);
                                    break;
                                case "rounded":
                                    r = n.quadraticCurve(o + h, e.barYPosition + (e.barHeight - e.strokeWidth) / 2, o, e.barYPosition + e.barHeight - e.strokeWidth)
                            }
                        }
                        return {
                            path: r,
                            ending_p_from: "",
                            newX: o
                        }
                    }
                    var c = null,
                        d = e.y;
                    if (void 0 !== i[s][a] || null !== i[s][a]) {
                        var u = i[s][a] < 0,
                            g = e.barWidth / 2 - e.strokeWidth;
                        switch (u && (g = -e.barWidth / 2 - e.strokeWidth), t.config.chart.stacked || "rounded" === this.barOptions.endingShape && (d += g / 2), this.barOptions.endingShape) {
                            case "flat":
                                c = n.line(e.barXPosition + e.barWidth - e.strokeWidth, d);
                                break;
                            case "rounded":
                                c = n.quadraticCurve(e.barXPosition + (e.barWidth - e.strokeWidth) / 2, d - g, e.barXPosition + e.barWidth - e.strokeWidth, d)
                        }
                    }
                    return {
                        path: c,
                        ending_p_from: "",
                        newY: d
                    }
                }
            }]), s
        }(),
        y = function (t) {
            function e() {
                return n(this, e), h(this, l(e).apply(this, arguments))
            }
            return a(e, P), r(e, [{
                key: "draw",
                value: function (t, e) {
                    var i = this.w;
                    this.graphics = new ht(this.ctx), this.fill = new dt(this.ctx), this.bar = new P(this.ctx, this.xyRatios);
                    var s = new ct(this.ctx, i);
                    t = s.getLogSeries(t), this.yRatio = s.getLogYRatios(this.yRatio), this.initVariables(t), "100%" === i.config.chart.stackType && (t = i.globals.seriesPercent.slice()), this.series = t, this.totalItems = 0, this.prevY = [], this.prevX = [], this.prevYF = [], this.prevXF = [], this.prevYVal = [], this.prevXVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [], this.yArrj = [], this.yArrjF = [], this.yArrjVal = [];
                    for (var a = 0; a < t.length; a++) 0 < t[a].length && (this.totalItems += t[a].length);
                    for (var n = this.graphics.group({
                            class: "apexcharts-bar-series apexcharts-plot-series"
                        }), r = 0, o = 0, l = 0, h = 0; l < t.length; l++, h++) {
                        var c = void 0,
                            d = void 0,
                            u = void 0,
                            g = void 0,
                            f = void 0,
                            p = void 0,
                            x = [],
                            b = [],
                            m = i.globals.comboCharts ? e[l] : l;
                        1 < this.yRatio.length && (this.yaxisIndex = m), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
                        var v = this.graphics.group({
                                class: "apexcharts-series ".concat(lt.escapeString(i.globals.seriesNames[m])),
                                rel: l + 1,
                                "data:realIndex": m
                            }),
                            y = this.graphics.group({
                                class: "apexcharts-datalabels"
                            }),
                            w = 0,
                            k = 0,
                            A = 0,
                            S = this.initialPositions(r, o, u, g, f, p);
                        o = S.y, k = S.barHeight, g = S.yDivision, p = S.zeroW, r = S.x, A = S.barWidth, u = S.xDivision, f = S.zeroH, this.yArrj = [], this.yArrjF = [], this.yArrjVal = [], this.xArrj = [], this.xArrjF = [], this.xArrjVal = [];
                        for (var C = 0; C < i.globals.dataPoints; C++) {
                            i.config.stroke.show && (w = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[m] : this.strokeWidth);
                            var L = null;
                            this.isHorizontal ? (L = this.drawBarPaths({
                                indexes: {
                                    i: l,
                                    j: C,
                                    realIndex: m,
                                    bc: h
                                },
                                barHeight: k,
                                strokeWidth: w,
                                pathTo: c,
                                pathFrom: d,
                                zeroW: p,
                                x: r,
                                y: o,
                                yDivision: g,
                                elSeries: v
                            }), A = this.series[l][C] / this.invertedYRatio) : (L = this.drawColumnPaths({
                                indexes: {
                                    i: l,
                                    j: C,
                                    realIndex: m,
                                    bc: h
                                },
                                x: r,
                                y: o,
                                xDivision: u,
                                pathTo: c,
                                pathFrom: d,
                                barWidth: A,
                                zeroH: f,
                                strokeWidth: w,
                                elSeries: v
                            }), k = this.series[l][C] / this.yRatio[this.yaxisIndex]), c = L.pathTo, d = L.pathFrom, o = L.y, r = L.x, x.push(r), b.push(o);
                            var z = this.bar.getPathFillColor(t, l, C, m);
                            v = this.renderSeries({
                                realIndex: m,
                                pathFill: z,
                                j: C,
                                i: l,
                                pathFrom: d,
                                pathTo: c,
                                strokeWidth: w,
                                elSeries: v,
                                x: r,
                                y: o,
                                series: t,
                                barHeight: k,
                                barWidth: A,
                                elDataLabelsWrap: y,
                                type: "bar",
                                visibleSeries: 0
                            })
                        }
                        i.globals.seriesXvalues[m] = x, i.globals.seriesYvalues[m] = b, this.prevY.push(this.yArrj), this.prevYF.push(this.yArrjF), this.prevYVal.push(this.yArrjVal), this.prevX.push(this.xArrj), this.prevXF.push(this.xArrjF), this.prevXVal.push(this.xArrjVal), n.add(v)
                    }
                    return n
                }
            }, {
                key: "initialPositions",
                value: function (t, e, i, s, a, n) {
                    var r, o, l = this.w;
                    return this.isHorizontal ? (r = (r = s = l.globals.gridHeight / l.globals.dataPoints) * parseInt(l.config.plotOptions.bar.barHeight) / 100, n = this.baseLineInvertedY + l.globals.padHorizontal + (this.isReversed ? l.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), e = (s - r) / 2) : (o = i = l.globals.gridWidth / l.globals.dataPoints, o = l.globals.isXNumeric ? (i = l.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth) / 100 : o * parseInt(l.config.plotOptions.bar.columnWidth) / 100, a = this.baseLineY[this.yaxisIndex] + (this.isReversed ? l.globals.gridHeight : 0) - (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), t = l.globals.padHorizontal + (i - o) / 2), {
                        x: t,
                        y: e,
                        yDivision: s,
                        xDivision: i,
                        barHeight: r,
                        barWidth: o,
                        zeroH: a,
                        zeroW: n
                    }
                }
            }, {
                key: "drawBarPaths",
                value: function (t) {
                    for (var e, i = t.indexes, s = t.barHeight, a = t.strokeWidth, n = t.pathTo, r = t.pathFrom, o = t.zeroW, l = t.x, h = t.y, c = t.yDivision, d = t.elSeries, u = this.w, g = h, f = i.i, p = i.j, x = i.realIndex, b = i.bc, m = 0, v = 0; v < this.prevXF.length; v++) m += this.prevXF[v][p];
                    if (0 < f) {
                        var y = o;
                        this.prevXVal[f - 1][p] < 0 ? y = 0 <= this.series[f][p] ? this.prevX[f - 1][p] + m - 2 * (this.isReversed ? m : 0) : this.prevX[f - 1][p] : 0 <= this.prevXVal[f - 1][p] && (y = 0 <= this.series[f][p] ? this.prevX[f - 1][p] : this.prevX[f - 1][p] - m + 2 * (this.isReversed ? m : 0)), e = y
                    } else e = o;
                    l = null === this.series[f][p] ? e : e + this.series[f][p] / this.invertedYRatio - 2 * (this.isReversed ? this.series[f][p] / this.invertedYRatio : 0);
                    var w = {
                            barHeight: s,
                            strokeWidth: a,
                            invertedYRatio: this.invertedYRatio,
                            barYPosition: g,
                            x: l
                        },
                        k = this.bar.barEndingShape(u, w, this.series, f, p);
                    if (1 < this.series.length && f !== this.endingShapeOnSeriesNumber && (k.path = this.graphics.line(k.newX, g + s - a)), this.xArrj.push(k.newX), this.xArrjF.push(Math.abs(e - k.newX)), this.xArrjVal.push(this.series[f][p]), n = this.graphics.move(e, g), r = this.graphics.move(e, g), 0 < u.globals.previousPaths.length && (r = this.bar.getPathFrom(x, p, !1)), n = n + this.graphics.line(k.newX, g) + k.path + this.graphics.line(e, g + s - a) + this.graphics.line(e, g), r = r + this.graphics.line(e, g) + this.graphics.line(e, g + s - a) + this.graphics.line(e, g + s - a) + this.graphics.line(e, g + s - a) + this.graphics.line(e, g), 0 < u.config.plotOptions.bar.colors.backgroundBarColors.length && 0 === f) {
                        b >= u.config.plotOptions.bar.colors.backgroundBarColors.length && (b = 0);
                        var A = u.config.plotOptions.bar.colors.backgroundBarColors[b],
                            S = this.graphics.drawRect(0, g, u.globals.gridWidth, s, 0, A, u.config.plotOptions.bar.colors.backgroundBarOpacity);
                        d.add(S), S.node.classList.add("apexcharts-backgroundBar")
                    }
                    return {
                        pathTo: n,
                        pathFrom: r,
                        x: l,
                        y: h += c
                    }
                }
            }, {
                key: "drawColumnPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.x,
                        s = t.y,
                        a = t.xDivision,
                        n = t.pathTo,
                        r = t.pathFrom,
                        o = t.barWidth,
                        l = t.zeroH,
                        h = t.strokeWidth,
                        c = t.elSeries,
                        d = this.w,
                        u = e.i,
                        g = e.j,
                        f = e.realIndex,
                        p = e.bc;
                    if (d.globals.isXNumeric) {
                        var x = d.globals.seriesX[u][g];
                        x || (x = 0), i = (x - d.globals.minX) / this.xRatio - o / 2
                    }
                    for (var b, m = i, v = 0, y = 0; y < this.prevYF.length; y++) v += this.prevYF[y][g];
                    if (0 < u && !d.globals.isXNumeric || 0 < u && d.globals.isXNumeric && d.globals.seriesX[u - 1][g] === d.globals.seriesX[u][g]) {
                        var w = this.prevY[u - 1][g];
                        b = this.prevYVal[u - 1][g] < 0 ? 0 <= this.series[u][g] ? w - v + 2 * (this.isReversed ? v : 0) : w : 0 <= this.series[u][g] ? w : w + v - 2 * (this.isReversed ? v : 0)
                    } else b = d.globals.gridHeight - l;
                    s = b - this.series[u][g] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[u][g] / this.yRatio[this.yaxisIndex] : 0);
                    var k = {
                            barWidth: o,
                            strokeWidth: h,
                            yRatio: this.yRatio[this.yaxisIndex],
                            barXPosition: m,
                            y: s
                        },
                        A = this.bar.barEndingShape(d, k, this.series, u, g);
                    if (this.yArrj.push(A.newY), this.yArrjF.push(Math.abs(b - A.newY)), this.yArrjVal.push(this.series[u][g]), n = this.graphics.move(m, b), r = this.graphics.move(m, b), 0 < d.globals.previousPaths.length && (r = this.bar.getPathFrom(f, g, !1)), n = n + this.graphics.line(m, A.newY) + A.path + this.graphics.line(m + o - h, b) + this.graphics.line(m - h / 2, b), r = r + this.graphics.line(m, b) + this.graphics.line(m + o - h, b) + this.graphics.line(m + o - h, b) + this.graphics.line(m + o - h, b) + this.graphics.line(m - h / 2, b), 0 < d.config.plotOptions.bar.colors.backgroundBarColors.length && 0 === u) {
                        p >= d.config.plotOptions.bar.colors.backgroundBarColors.length && (p = 0);
                        var S = d.config.plotOptions.bar.colors.backgroundBarColors[p],
                            C = this.graphics.drawRect(m, 0, o, d.globals.gridHeight, 0, S, d.config.plotOptions.bar.colors.backgroundBarOpacity);
                        c.add(C), C.node.classList.add("apexcharts-backgroundBar")
                    }
                    return i += a, {
                        pathTo: n,
                        pathFrom: r,
                        x: d.globals.isXNumeric ? i - a : i,
                        y: s
                    }
                }
            }, {
                key: "checkZeroSeries",
                value: function (t) {
                    for (var e = t.series, i = this.w, s = 0; s < e.length; s++) {
                        for (var a = 0, n = 0; n < e[i.globals.maxValsInArrayIndex].length; n++) a += e[s][n];
                        0 === a && this.zeroSerieses.push(s)
                    }
                    for (var r = e.length - 1; 0 <= r; r--) - 1 < this.zeroSerieses.indexOf(r) && r === this.endingShapeOnSeriesNumber && (this.endingShapeOnSeriesNumber -= 1)
                }
            }]), e
        }(),
        A = function (t) {
            function e() {
                return n(this, e), h(this, l(e).apply(this, arguments))
            }
            return a(e, P), r(e, [{
                key: "draw",
                value: function (t, e) {
                    var i = this.w,
                        s = new ht(this.ctx),
                        a = new dt(this.ctx);
                    this.candlestickOptions = this.w.config.plotOptions.candlestick;
                    var n = new ct(this.ctx, i);
                    t = n.getLogSeries(t), this.series = t, this.yRatio = n.getLogYRatios(this.yRatio), this.initVariables(t);
                    for (var r = s.group({
                            class: "apexcharts-candlestick-series apexcharts-plot-series"
                        }), o = 0, l = 0; o < t.length; o++, l++) {
                        var h, c, d = void 0,
                            u = void 0,
                            g = void 0,
                            f = void 0,
                            p = [],
                            x = [],
                            b = i.globals.comboCharts ? e[o] : o,
                            m = s.group({
                                class: "apexcharts-series ".concat(lt.escapeString(i.globals.seriesNames[b])),
                                rel: o + 1,
                                "data:realIndex": b
                            });
                        0 < t[o].length && (this.visibleI = this.visibleI + 1);
                        var v, y, w = 0;
                        1 < this.yRatio.length && (this.yaxisIndex = b);
                        var k = this.initialPositions();
                        f = k.y, v = k.barHeight, g = k.x, y = k.barWidth, h = k.xDivision, c = k.zeroH, x.push(g + y / 2);
                        for (var A = s.group({
                                class: "apexcharts-datalabels"
                            }), S = 0, C = i.globals.dataPoints; S < i.globals.dataPoints; S++, C--) {
                            void 0 === this.series[o][S] || null === t[o][S] ? this.isNullValue = !0 : this.isNullValue = !1, i.config.stroke.show && (w = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[b] : this.strokeWidth);
                            var L, z = this.drawCandleStickPaths({
                                indexes: {
                                    i: o,
                                    j: S,
                                    realIndex: b,
                                    bc: l
                                },
                                x: g,
                                y: f,
                                xDivision: h,
                                pathTo: d,
                                pathFrom: u,
                                barWidth: y,
                                zeroH: c,
                                strokeWidth: w,
                                elSeries: m
                            });
                            d = z.pathTo, u = z.pathFrom, f = z.y, g = z.x, L = z.color, 0 < S && x.push(g + y / 2), p.push(f);
                            var P = a.fillPath({
                                    seriesNumber: b,
                                    color: L,
                                    value: t[o][S]
                                }),
                                E = this.candlestickOptions.wick.useFillColor ? L : void 0;
                            m = this.renderSeries({
                                realIndex: b,
                                pathFill: P,
                                lineFill: E,
                                j: S,
                                i: o,
                                pathFrom: u,
                                pathTo: d,
                                strokeWidth: w,
                                elSeries: m,
                                x: g,
                                y: f,
                                series: t,
                                barHeight: v,
                                barWidth: y,
                                elDataLabelsWrap: A,
                                visibleSeries: this.visibleI,
                                type: "candlestick"
                            })
                        }
                        i.globals.seriesXvalues[b] = x, i.globals.seriesYvalues[b] = p, r.add(m)
                    }
                    return r
                }
            }, {
                key: "drawCandleStickPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.x,
                        s = (t.y, t.xDivision),
                        a = t.pathTo,
                        n = t.pathFrom,
                        r = t.barWidth,
                        o = t.zeroH,
                        l = t.strokeWidth,
                        h = this.w,
                        c = new ht(this.ctx),
                        d = e.i,
                        u = e.j,
                        g = !0,
                        f = h.config.plotOptions.candlestick.colors.upward,
                        p = h.config.plotOptions.candlestick.colors.downward,
                        x = this.yRatio[this.yaxisIndex],
                        b = e.realIndex,
                        m = this.getOHLCValue(b, u),
                        v = o,
                        y = o;
                    m.o > m.c && (g = !1);
                    var w = Math.min(m.o, m.c),
                        k = Math.max(m.o, m.c);
                    h.globals.isXNumeric && (i = (h.globals.seriesX[d][u] - h.globals.minX) / this.xRatio - r / 2);
                    var A = i + r * this.visibleI;
                    return void 0 === this.series[d][u] || null === this.series[d][u] ? w = o : (w = o - w / x, k = o - k / x, v = o - m.h / x, y = o - m.l / x), c.move(A, o), n = c.move(A, w), 0 < h.globals.previousPaths.length && (n = this.getPathFrom(b, u, !0)), a = c.move(A, k) + c.line(A + r / 2, k) + c.line(A + r / 2, v) + c.line(A + r / 2, k) + c.line(A + r, k) + c.line(A + r, w) + c.line(A + r / 2, w) + c.line(A + r / 2, y) + c.line(A + r / 2, w) + c.line(A, w) + c.line(A, k - l / 2), n += c.move(A, w), h.globals.isXNumeric || (i += s), {
                        pathTo: a,
                        pathFrom: n,
                        x: i,
                        y: k,
                        barXPosition: A,
                        color: g ? f : p
                    }
                }
            }, {
                key: "getOHLCValue",
                value: function (t, e) {
                    var i = this.w;
                    return {
                        o: i.globals.seriesCandleO[t][e],
                        h: i.globals.seriesCandleH[t][e],
                        l: i.globals.seriesCandleL[t][e],
                        c: i.globals.seriesCandleC[t][e]
                    }
                }
            }]), e
        }(),
        b = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "drawXCrosshairs",
                value: function () {
                    var t = this.w,
                        e = new ht(this.ctx),
                        i = new I(this.ctx),
                        s = t.config.xaxis.crosshairs.fill.gradient,
                        a = t.config.xaxis.crosshairs.dropShadow,
                        n = t.config.xaxis.crosshairs.fill.type,
                        r = s.colorFrom,
                        o = s.colorTo,
                        l = s.opacityFrom,
                        h = s.opacityTo,
                        c = s.stops,
                        d = a.enabled,
                        u = a.left,
                        g = a.top,
                        f = a.blur,
                        p = a.color,
                        x = a.opacity,
                        b = t.config.xaxis.crosshairs.fill.color;
                    if (t.config.xaxis.crosshairs.show) {
                        "gradient" === n && (b = e.drawGradient("vertical", r, o, l, h, null, c, null));
                        var m = e.drawRect();
                        1 === t.config.xaxis.crosshairs.width && (m = e.drawLine()), m.attr({
                            class: "apexcharts-xcrosshairs",
                            x: 0,
                            y: 0,
                            y2: t.globals.gridHeight,
                            width: lt.isNumber(t.config.xaxis.crosshairs.width) ? t.config.xaxis.crosshairs.width : 0,
                            height: t.globals.gridHeight,
                            fill: b,
                            filter: "none",
                            "fill-opacity": t.config.xaxis.crosshairs.opacity,
                            stroke: t.config.xaxis.crosshairs.stroke.color,
                            "stroke-width": t.config.xaxis.crosshairs.stroke.width,
                            "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray
                        }), d && (m = i.dropShadow(m, {
                            left: u,
                            top: g,
                            blur: f,
                            color: p,
                            opacity: x
                        })), t.globals.dom.elGraphical.add(m)
                    }
                }
            }, {
                key: "drawYCrosshairs",
                value: function () {
                    var t = this.w,
                        e = new ht(this.ctx),
                        i = t.config.yaxis[0].crosshairs;
                    if (t.config.yaxis[0].crosshairs.show) {
                        var s = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
                        s.attr({
                            class: "apexcharts-ycrosshairs"
                        }), t.globals.dom.elGraphical.add(s)
                    }
                    var a = e.drawLine(0, 0, t.globals.gridWidth, 0, i.stroke.color, 0, 0);
                    a.attr({
                        class: "apexcharts-ycrosshairs-hidden"
                    }), t.globals.dom.elGraphical.add(a)
                }
            }]), e
        }(),
        C = function () {
            function i(t, e) {
                n(this, i), this.ctx = t, this.w = t.w, this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.negRange = !1, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.width
            }
            return r(i, [{
                key: "draw",
                value: function (t) {
                    var e = this.w,
                        i = new ht(this.ctx),
                        s = i.group({
                            class: "apexcharts-heatmap"
                        });
                    s.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
                    var a = e.globals.gridWidth / e.globals.dataPoints,
                        n = e.globals.gridHeight / e.globals.series.length,
                        r = 0,
                        o = !1;
                    this.checkColorRange();
                    var l = t.slice();
                    e.config.yaxis[0].reversed && (o = !0, l.reverse());
                    for (var h = o ? 0 : l.length - 1; o ? h < l.length : 0 <= h; o ? h++ : h--) {
                        var c = i.group({
                            class: "apexcharts-series apexcharts-heatmap-series ".concat(lt.escapeString(e.globals.seriesNames[h])),
                            rel: h + 1,
                            "data:realIndex": h
                        });
                        if (e.config.chart.dropShadow.enabled) {
                            var d = e.config.chart.dropShadow;
                            new I(this.ctx).dropShadow(c, d, h)
                        }
                        for (var u = 0, g = 0; g < l[h].length; g++) {
                            var f = 1,
                                p = this.determineHeatColor(h, g);
                            if (e.globals.hasNegs || this.negRange) {
                                var x = e.config.plotOptions.heatmap.shadeIntensity;
                                f = p.percent < 0 ? 1 - (1 + p.percent / 100) * x : (1 - p.percent / 100) * x
                            } else f = 1 - p.percent / 100;
                            var b = p.color;
                            if (e.config.plotOptions.heatmap.enableShades) {
                                var m = new lt;
                                b = lt.hexToRgba(m.shadeColor(f, p.color), e.config.fill.opacity)
                            }
                            var v = this.rectRadius,
                                y = i.drawRect(u, r, a, n, v);
                            if (y.attr({
                                    cx: u,
                                    cy: r
                                }), y.node.classList.add("apexcharts-heatmap-rect"), c.add(y), y.attr({
                                    fill: b,
                                    i: h,
                                    index: h,
                                    j: g,
                                    val: l[h][g],
                                    "stroke-width": this.strokeWidth,
                                    stroke: e.globals.stroke.colors[0],
                                    color: b
                                }), y.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, y)), y.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, y)), y.node.addEventListener("mousedown", i.pathMouseDown.bind(this, y)), e.config.chart.animations.enabled && !e.globals.dataChanged) {
                                var w = 1;
                                e.globals.resized || (w = e.config.chart.animations.speed), this.animateHeatMap(y, u, r, a, n, w)
                            }
                            if (e.globals.dataChanged) {
                                var k = 1;
                                if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
                                    k = this.dynamicAnim.speed;
                                    var A = e.globals.previousPaths[h] && e.globals.previousPaths[h][g] && e.globals.previousPaths[h][g].color;
                                    A || (A = "rgba(255, 255, 255, 0)"), this.animateHeatColor(y, lt.isColorHex(A) ? A : lt.rgb2hex(A), lt.isColorHex(b) ? b : lt.rgb2hex(b), k)
                                }
                            }
                            var S = this.calculateHeatmapDataLabels({
                                x: u,
                                y: r,
                                i: h,
                                j: g,
                                series: l,
                                rectHeight: n,
                                rectWidth: a
                            });
                            null !== S && c.add(S), u += a
                        }
                        r += n, s.add(c)
                    }
                    var C = e.globals.yAxisScale[0].result.slice();
                    e.config.yaxis[0].reversed ? C.unshift("") : C.push(""), e.globals.yAxisScale[0].result = C;
                    var L = e.globals.gridHeight / e.globals.series.length;
                    return e.config.yaxis[0].labels.offsetY = -L / 2, s
                }
            }, {
                key: "checkColorRange",
                value: function () {
                    var i = this,
                        t = this.w.config.plotOptions.heatmap;
                    0 < t.colorScale.ranges.length && t.colorScale.ranges.map(function (t, e) {
                        t.from < 0 && (i.negRange = !0)
                    })
                }
            }, {
                key: "determineHeatColor",
                value: function (t, e) {
                    var i = this.w,
                        s = i.globals.series[t][e],
                        a = i.config.plotOptions.heatmap,
                        n = a.colorScale.inverse ? e : t,
                        r = i.globals.colors[n],
                        o = Math.min.apply(Math, S(i.globals.series[t])),
                        l = Math.max.apply(Math, S(i.globals.series[t]));
                    a.distributed || (o = i.globals.minY, l = i.globals.maxY), void 0 !== a.colorScale.min && (o = a.colorScale.min < i.globals.minY ? a.colorScale.min : i.globals.minY, l = a.colorScale.max > i.globals.maxY ? a.colorScale.max : i.globals.maxY);
                    var h = Math.abs(l) + Math.abs(o),
                        c = 100 * s / (0 === h ? h - 1e-6 : h);
                    return 0 < a.colorScale.ranges.length && a.colorScale.ranges.map(function (t, e) {
                        if (s >= t.from && s <= t.to) {
                            r = t.color, o = t.from, l = t.to;
                            var i = Math.abs(l) + Math.abs(o);
                            c = 100 * s / (0 === i ? i - 1e-6 : i)
                        }
                    }), {
                        color: r,
                        percent: c
                    }
                }
            }, {
                key: "calculateHeatmapDataLabels",
                value: function (t) {
                    var e = t.x,
                        i = t.y,
                        s = t.i,
                        a = t.j,
                        n = (t.series, t.rectHeight),
                        r = t.rectWidth,
                        o = this.w,
                        l = o.config.dataLabels,
                        h = new ht(this.ctx),
                        c = new gt(this.ctx),
                        d = l.formatter,
                        u = null;
                    if (l.enabled) {
                        u = h.group({
                            class: "apexcharts-data-labels"
                        });
                        var g = l.offsetX,
                            f = l.offsetY,
                            p = e + r / 2 + g,
                            x = i + n / 2 + parseInt(l.style.fontSize) / 3 + f,
                            b = d(o.globals.series[s][a], {
                                seriesIndex: s,
                                dataPointIndex: a,
                                w: o
                            });
                        c.plotDataLabelsText({
                            x: p,
                            y: x,
                            text: b,
                            i: s,
                            j: a,
                            parent: u,
                            dataLabelsConfig: l
                        })
                    }
                    return u
                }
            }, {
                key: "animateHeatMap",
                value: function (t, e, i, s, a, n) {
                    var r = this;
                    new Y(this.ctx).animateRect(t, {
                        x: e + s / 2,
                        y: i + a / 2,
                        width: 0,
                        height: 0
                    }, {
                        x: e,
                        y: i,
                        width: s,
                        height: a
                    }, n, function () {
                        r.w.globals.animationEnded = !0
                    })
                }
            }, {
                key: "animateHeatColor",
                value: function (t, e, i, s) {
                    t.attr({
                        fill: e
                    }).animate(s).attr({
                        fill: i
                    })
                }
            }]), i
        }(),
        T = function () {
            function c(t) {
                n(this, c), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels;
                var e = this.w;
                this.lineColorArr = void 0 !== e.globals.stroke.colors ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = e.globals.svgHeight < e.globals.svgWidth ? e.globals.svgHeight - 35 : e.globals.gridWidth, this.centerY = this.defaultSize / 2, this.centerX = e.globals.gridWidth / 2, this.fullAngle = 360, this.size = 0, this.donutSize = 0, this.sliceLabels = [], this.prevSectorAngleArr = []
            }
            return r(c, [{
                key: "draw",
                value: function (t) {
                    for (var e = this.w, i = new ht(this.ctx), s = i.group({
                            class: "apexcharts-pie"
                        }), a = 0, n = 0; n < t.length; n++) a += lt.negToZero(t[n]);
                    var r = [],
                        o = i.group();
                    0 === a && (a = 1e-5);
                    for (var l = 0; l < t.length; l++) {
                        var h = this.fullAngle * lt.negToZero(t[l]) / a;
                        r.push(h)
                    }
                    if (e.globals.dataChanged) {
                        for (var c, d = 0, u = 0; u < e.globals.previousPaths.length; u++) d += lt.negToZero(e.globals.previousPaths[u]);
                        for (var g = 0; g < e.globals.previousPaths.length; g++) c = this.fullAngle * lt.negToZero(e.globals.previousPaths[g]) / d, this.prevSectorAngleArr.push(c)
                    }
                    this.size = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur, void 0 !== e.config.plotOptions.pie.size && (this.size = e.config.plotOptions.pie.size), this.donutSize = this.size * parseInt(e.config.plotOptions.pie.donut.size) / 100;
                    var f = e.config.plotOptions.pie.customScale,
                        p = e.globals.gridWidth / 2,
                        x = e.globals.gridHeight / 2,
                        b = p - e.globals.gridWidth / 2 * f,
                        m = x - e.globals.gridHeight / 2 * f;
                    if (this.donutDataLabels.show) {
                        var v = this.renderInnerDataLabels(this.donutDataLabels, {
                            hollowSize: this.donutSize,
                            centerX: this.centerX,
                            centerY: this.centerY,
                            opacity: this.donutDataLabels.show,
                            translateX: b,
                            translateY: m
                        });
                        s.add(v)
                    }
                    if ("donut" === e.config.chart.type) {
                        var y = i.drawCircle(this.donutSize);
                        y.attr({
                            cx: this.centerX,
                            cy: this.centerY,
                            fill: e.config.plotOptions.pie.donut.background
                        }), o.add(y)
                    }
                    var w = this.drawArcs(r, t);
                    return this.sliceLabels.forEach(function (t) {
                        w.add(t)
                    }), o.attr({
                        transform: "translate(".concat(b, ", ").concat(m - 5, ") scale(").concat(f, ")")
                    }), s.attr({
                        "data:innerTranslateX": b,
                        "data:innerTranslateY": m - 25
                    }), o.add(w), s.add(o), s
                }
            }, {
                key: "drawArcs",
                value: function (t, e) {
                    var i = this.w,
                        s = new I(this.ctx),
                        a = new ht(this.ctx),
                        n = new dt(this.ctx),
                        r = a.group(),
                        o = 0,
                        l = 0,
                        h = 0,
                        c = 0;
                    this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
                    for (var d = 0; d < t.length; d++) {
                        var u = a.group({
                            class: "apexcharts-series apexcharts-pie-series ".concat(lt.escapeString(i.globals.seriesNames[d])),
                            id: "apexcharts-series-" + d,
                            rel: d + 1
                        });
                        r.add(u), l = c, h = (o = h) + t[d], c = l + this.prevSectorAngleArr[d];
                        var g = h - o,
                            f = n.fillPath({
                                seriesNumber: d,
                                size: this.size,
                                value: e[d]
                            }),
                            p = this.getChangedPath(l, c),
                            x = a.drawPath({
                                d: p,
                                stroke: this.lineColorArr instanceof Array ? this.lineColorArr[d] : this.lineColorArr,
                                strokeWidth: this.strokeWidth,
                                fill: f,
                                fillOpacity: i.config.fill.opacity,
                                classes: "apexcharts-pie-area"
                            });
                        if (x.attr({
                                id: "apexcharts-".concat(i.config.chart.type, "-slice-").concat(d),
                                index: 0,
                                j: d
                            }), i.config.chart.dropShadow.enabled) {
                            var b = i.config.chart.dropShadow;
                            s.dropShadow(x, b, d)
                        }
                        this.addListeners(x, this.donutDataLabels), ht.setAttrs(x.node, {
                            "data:angle": g,
                            "data:startAngle": o,
                            "data:strokeWidth": this.strokeWidth,
                            "data:value": e[d]
                        });
                        var m = {
                            x: 0,
                            y: 0
                        };
                        "pie" === i.config.chart.type ? m = lt.polarToCartesian(this.centerX, this.centerY, this.size / 1.25 + i.config.plotOptions.pie.dataLabels.offset, o + (h - o) / 2) : "donut" === i.config.chart.type && (m = lt.polarToCartesian(this.centerX, this.centerY, (this.size + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, o + (h - o) / 2)), u.add(x);
                        var v = 0;
                        if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : (v = (h - o) / this.fullAngle * i.config.chart.animations.speed, this.animDur = v + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(x, {
                                endAngle: h,
                                startAngle: o,
                                prevStartAngle: l,
                                prevEndAngle: c,
                                animateStartingPos: !0,
                                i: d,
                                animBeginArr: this.animBeginArr,
                                dur: i.config.chart.animations.dynamicAnimation.speed
                            }) : this.animatePaths(x, {
                                endAngle: h,
                                startAngle: o,
                                i: d,
                                totalItems: t.length - 1,
                                animBeginArr: this.animBeginArr,
                                dur: v
                            }), i.config.plotOptions.pie.expandOnClick && x.click(this.pieClicked.bind(this, d)), i.config.dataLabels.enabled) {
                            var y = m.x,
                                w = m.y,
                                k = 100 * (h - o) / 360 + "%";
                            if (0 !== g && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[d]) {
                                var A = i.config.dataLabels.formatter;
                                void 0 !== A && (k = A(i.globals.seriesPercent[d][0], {
                                    seriesIndex: d,
                                    w: i
                                }));
                                var S = i.globals.dataLabels.style.colors[d],
                                    C = a.drawText({
                                        x: y,
                                        y: w,
                                        text: k,
                                        textAnchor: "middle",
                                        fontSize: i.config.dataLabels.style.fontSize,
                                        fontFamily: i.config.dataLabels.style.fontFamily,
                                        foreColor: S
                                    });
                                if (i.config.dataLabels.dropShadow.enabled) {
                                    var L = i.config.dataLabels.dropShadow;
                                    new I(this.ctx).dropShadow(C, L)
                                }
                                C.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && !1 === i.globals.resized && (C.node.classList.add("apexcharts-pie-label-delay"), C.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(C)
                            }
                        }
                    }
                    return r
                }
            }, {
                key: "addListeners",
                value: function (t, e) {
                    var i = new ht(this.ctx);
                    t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e))
                }
            }, {
                key: "animatePaths",
                value: function (t, e) {
                    var i = this.w,
                        s = e.endAngle - e.startAngle,
                        a = s,
                        n = e.startAngle,
                        r = e.startAngle;
                    void 0 !== e.prevStartAngle && void 0 !== e.prevEndAngle && (n = e.prevEndAngle, a = e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (s + r > this.fullAngle ? e.endAngle = e.endAngle - (s + r) : s + r < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (s + r)))), s === this.fullAngle && (s = this.fullAngle - .01), this.animateArc(t, n, r, s, a, e)
                }
            }, {
                key: "animateArc",
                value: function (e, i, s, a, n, r) {
                    var o, l = this,
                        t = this.w,
                        h = l.size;
                    h || (h = r.size), (isNaN(i) || isNaN(n)) && (i = s, n = a, r.dur = 0);
                    var c = a,
                        d = s,
                        u = i - s;
                    t.globals.dataChanged && r.shouldSetPrevPaths && (o = l.getPiePath({
                        me: l,
                        startAngle: d,
                        angle: n,
                        size: h
                    }), e.attr({
                        d: o
                    })), 0 !== r.dur ? e.animate(r.dur, t.globals.easing, r.animBeginArr[r.i]).afterAll(function () {
                        "pie" !== t.config.chart.type && "donut" !== t.config.chart.type || this.animate(300).attr({
                            "stroke-width": t.config.stroke.width
                        }), t.globals.animationEnded = !0
                    }).during(function (t) {
                        c = u + (a - u) * t, r.animateStartingPos && (c = n + (a - n) * t, d = i - n + (s - (i - n)) * t), o = l.getPiePath({
                            me: l,
                            startAngle: d,
                            angle: c,
                            size: h
                        }), e.node.setAttribute("data:pathOrig", o), e.attr({
                            d: o
                        })
                    }) : (o = l.getPiePath({
                        me: l,
                        startAngle: d,
                        angle: a,
                        size: h
                    }), r.isTrack || (t.globals.animationEnded = !0), e.node.setAttribute("data:pathOrig", o), e.attr({
                        d: o
                    }))
                }
            }, {
                key: "pieClicked",
                value: function (t) {
                    var e, i = this.w,
                        s = this.size + 4,
                        a = i.globals.dom.Paper.select("#apexcharts-".concat(i.config.chart.type.toLowerCase(), "-slice-").concat(t)).members[0],
                        n = a.attr("d");
                    if ("true" !== a.attr("data:pieClicked")) {
                        var r = i.globals.dom.baseEl.querySelectorAll(".apexcharts-pie-area");
                        Array.prototype.forEach.call(r, function (t) {
                            t.setAttribute("data:pieClicked", "false");
                            var e = t.getAttribute("data:pathOrig");
                            t.setAttribute("d", e)
                        }), a.attr("data:pieClicked", "true");
                        var o = parseInt(a.attr("data:startAngle")),
                            l = parseInt(a.attr("data:angle"));
                        e = this.getPiePath({
                            me: this,
                            startAngle: o,
                            angle: l,
                            size: s
                        }), 360 !== l && a.plot(e).animate(1).plot(n).animate(100).plot(e)
                    } else {
                        a.attr({
                            "data:pieClicked": "false"
                        }), this.revertDataLabelsInner(a.node, this.donutDataLabels);
                        var h = a.attr("data:pathOrig");
                        a.attr({
                            d: h
                        })
                    }
                }
            }, {
                key: "getChangedPath",
                value: function (t, e) {
                    var i = "";
                    return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({
                        me: this,
                        startAngle: t,
                        angle: e - t,
                        size: this.size
                    })), i
                }
            }, {
                key: "getPiePath",
                value: function (t) {
                    var e = t.me,
                        i = t.startAngle,
                        s = t.angle,
                        a = t.size,
                        n = this.w,
                        r = i,
                        o = Math.PI * (r - 90) / 180,
                        l = s + i;
                    360 <= Math.ceil(l) && (l = 359.99);
                    var h = Math.PI * (l - 90) / 180,
                        c = e.centerX + a * Math.cos(o),
                        d = e.centerY + a * Math.sin(o),
                        u = e.centerX + a * Math.cos(h),
                        g = e.centerY + a * Math.sin(h),
                        f = lt.polarToCartesian(e.centerX, e.centerY, e.donutSize, l),
                        p = lt.polarToCartesian(e.centerX, e.centerY, e.donutSize, r),
                        x = 180 < s ? 1 : 0;
                    return "donut" === n.config.chart.type ? ["M", c, d, "A", a, a, 0, x, 1, u, g, "L", f.x, f.y, "A", e.donutSize, e.donutSize, 0, x, 0, p.x, p.y, "L", c, d, "z"].join(" ") : "pie" === n.config.chart.type ? ["M", c, d, "A", a, a, 0, x, 1, u, g, "L", e.centerX, e.centerY, "L", c, d].join(" ") : ["M", c, d, "A", a, a, 0, x, 1, u, g].join(" ")
                }
            }, {
                key: "renderInnerDataLabels",
                value: function (t, e) {
                    var i = this.w,
                        s = new ht(this.ctx),
                        a = s.group({
                            class: "apexcharts-datalabels-group",
                            transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ")")
                        }),
                        n = t.total.show;
                    a.node.style.opacity = e.opacity;
                    var r, o, l = e.centerX,
                        h = e.centerY;
                    r = void 0 === t.name.color ? i.globals.colors[0] : t.name.color, o = void 0 === t.value.color ? i.config.chart.foreColor : t.value.color;
                    var c = t.value.formatter,
                        d = "",
                        u = "";
                    if (n ? (r = t.total.color, u = t.total.label, d = t.total.formatter(i)) : 1 === i.globals.series.length && (d = c(i.globals.series[0], i), u = i.globals.seriesNames[0]), t.name.show) {
                        var g = s.drawText({
                            x: l,
                            y: h + parseInt(t.name.offsetY),
                            text: u,
                            textAnchor: "middle",
                            foreColor: r,
                            fontSize: t.name.fontSize,
                            fontFamily: t.name.fontFamily
                        });
                        g.node.classList.add("apexcharts-datalabel-label"), a.add(g)
                    }
                    if (t.value.show) {
                        var f = t.name.show ? parseInt(t.value.offsetY) + 16 : t.value.offsetY,
                            p = s.drawText({
                                x: l,
                                y: h + f,
                                text: d,
                                textAnchor: "middle",
                                foreColor: o,
                                fontSize: t.value.fontSize,
                                fontFamily: t.value.fontFamily
                            });
                        p.node.classList.add("apexcharts-datalabel-value"), a.add(p)
                    }
                    return a
                }
            }, {
                key: "printInnerLabels",
                value: function (t, e, i, s) {
                    var a, n = this.w;
                    s ? a = void 0 === t.name.color ? n.globals.colors[parseInt(s.parentNode.getAttribute("rel")) - 1] : t.name.color : 1 < n.globals.series.length && t.total.show && (a = t.total.color);
                    var r = n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"),
                        o = n.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
                    i = (0, t.value.formatter)(i, n), s || "function" != typeof t.total.formatter || (i = t.total.formatter(n)), null !== r && (r.textContent = e), null !== o && (o.textContent = i), null !== r && (r.style.fill = a)
                }
            }, {
                key: "printDataLabelsInner",
                value: function (t, e) {
                    var i = this.w,
                        s = t.getAttribute("data:value"),
                        a = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel")) - 1];
                    1 < i.globals.series.length && this.printInnerLabels(e, a, s, t);
                    var n = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                    null !== n && (n.style.opacity = 1)
                }
            }, {
                key: "revertDataLabelsInner",
                value: function (t, e, i) {
                    var s = this,
                        a = this.w,
                        n = a.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
                    if (e.total.show && 1 < a.globals.series.length) new c(this.ctx).printInnerLabels(e, e.total.label, e.total.formatter(a));
                    else {
                        var r = document.querySelectorAll(".apexcharts-pie-area"),
                            o = !1;
                        if (r.forEach(function (t) {
                                "true" === t.getAttribute("data:pieClicked") && (o = !0, s.printDataLabelsInner(t, e))
                            }), !o)
                            if (a.globals.selectedDataPoints.length && 1 < a.globals.series.length)
                                if (0 < a.globals.selectedDataPoints[0].length) {
                                    var l = a.globals.selectedDataPoints[0],
                                        h = a.globals.dom.baseEl.querySelector("#apexcharts-".concat(a.config.chart.type.toLowerCase(), "-slice-").concat(l));
                                    this.printDataLabelsInner(h, e)
                                } else n && a.globals.selectedDataPoints.length && 0 === a.globals.selectedDataPoints[0].length && (n.style.opacity = 0);
                        else n && 1 < a.globals.series.length && (n.style.opacity = 0)
                    }
                }
            }]), c
        }(),
        L = function () {
            function a(t) {
                n(this, a), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
                var e = this.w;
                this.graphics = new ht(this.ctx), this.lineColorArr = void 0 !== e.globals.stroke.colors ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = e.globals.svgHeight < e.globals.svgWidth ? e.globals.svgHeight - 35 : e.globals.gridWidth, this.maxValue = this.w.globals.maxY, this.polygons = e.config.plotOptions.radar.polygons, this.maxLabelWidth = 20;
                var i = e.globals.labels.slice().sort(function (t, e) {
                        return e.length - t.length
                    })[0],
                    s = this.graphics.getTextRects(i, e.config.dataLabels.style.fontSize);
                this.size = this.defaultSize / 2.1 - e.config.stroke.width - e.config.chart.dropShadow.blur - s.width / 1.75, void 0 !== e.config.plotOptions.radar.size && (this.size = e.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = []
            }
            return r(a, [{
                key: "draw",
                value: function (t) {
                    var u = this,
                        g = this.w,
                        f = new dt(this.ctx),
                        p = [];
                    this.dataPointsLen = t[g.globals.maxValsInArrayIndex].length, this.disAngle = 2 * Math.PI / this.dataPointsLen;
                    var e = g.globals.gridWidth / 2,
                        i = g.globals.gridHeight / 2,
                        s = this.graphics.group({
                            class: "apexcharts-radar-series",
                            "data:innerTranslateX": e,
                            "data:innerTranslateY": i - 25,
                            transform: "translate(".concat(e || 0, ", ").concat(i || 0, ")")
                        }),
                        x = [],
                        b = null;
                    if (this.yaxisLabels = this.graphics.group({
                            class: "apexcharts-yaxis"
                        }), t.forEach(function (t, n) {
                            var r = u.graphics.group().attr({
                                class: "apexcharts-series ".concat(lt.escapeString(g.globals.seriesNames[n])),
                                rel: n + 1,
                                "data:realIndex": n
                            });
                            u.dataRadiusOfPercent[n] = [], u.dataRadius[n] = [], u.angleArr[n] = [], t.forEach(function (t, e) {
                                u.dataRadiusOfPercent[n][e] = t / u.maxValue, u.dataRadius[n][e] = u.dataRadiusOfPercent[n][e] * u.size, u.angleArr[n][e] = e * u.disAngle
                            }), x = u.getDataPointsPos(u.dataRadius[n], u.angleArr[n]);
                            var e = u.createPaths(x, {
                                x: 0,
                                y: 0
                            });
                            b = u.graphics.group({
                                class: "apexcharts-series-markers-wrap hidden"
                            }), g.globals.delayedElements.push({
                                el: b.node,
                                index: n
                            });
                            var i = {
                                    i: n,
                                    realIndex: n,
                                    animationDelay: n,
                                    initialSpeed: g.config.chart.animations.speed,
                                    dataChangeSpeed: g.config.chart.animations.dynamicAnimation.speed,
                                    className: "apexcharts-radar",
                                    id: "apexcharts-radar",
                                    shouldClipToGrid: !1,
                                    bindEventsOnPaths: !1,
                                    stroke: g.globals.stroke.colors[n],
                                    strokeLineCap: g.config.stroke.lineCap
                                },
                                s = null;
                            0 < g.globals.previousPaths.length && (s = u.getPathFrom(n));
                            for (var a = 0; a < e.linePathsTo.length; a++) {
                                var o = u.graphics.renderPaths(ot({}, i, {
                                    pathFrom: null === s ? e.linePathsFrom[a] : s,
                                    pathTo: e.linePathsTo[a],
                                    strokeWidth: Array.isArray(g.config.stroke.width) ? g.config.stroke.width[n] : g.config.stroke.width,
                                    fill: "none",
                                    drawShadow: !1
                                }));
                                r.add(o);
                                var l = f.fillPath({
                                        seriesNumber: n
                                    }),
                                    h = u.graphics.renderPaths(ot({}, i, {
                                        pathFrom: null === s ? e.areaPathsFrom[a] : s,
                                        pathTo: e.areaPathsTo[a],
                                        strokeWidth: 0,
                                        fill: l,
                                        drawShadow: !1
                                    }));
                                if (g.config.chart.dropShadow.enabled) {
                                    var c = new I(u.ctx),
                                        d = g.config.chart.dropShadow;
                                    c.dropShadow(h, Object.assign({}, d, {
                                        noUserSpaceOnUse: !0
                                    }), n)
                                }
                                r.add(h)
                            }
                            t.forEach(function (t, e) {
                                var i = new ut(u.ctx).getMarkerConfig("apexcharts-marker", n),
                                    s = u.graphics.drawMarker(x[e].x, x[e].y, i);
                                s.attr("rel", e), s.attr("j", e), s.attr("index", n), s.node.setAttribute("default-marker-size", i.pSize);
                                var a = u.graphics.group({
                                    class: "apexcharts-series-markers"
                                });
                                a && a.add(s), b.add(a), r.add(b)
                            }), p.push(r)
                        }), this.drawPolygons({
                            parent: s
                        }), g.config.dataLabels.enabled) {
                        var a = this.drawLabels();
                        s.add(a)
                    }
                    return s.add(this.yaxisLabels), p.forEach(function (t) {
                        s.add(t)
                    }), s
                }
            }, {
                key: "drawPolygons",
                value: function (t) {
                    for (var n = this, a = this.w, r = t.parent, s = a.globals.yAxisScale[0].result.reverse(), e = s.length, i = [], o = this.size / (e - 1), l = 0; l < e; l++) i[l] = o * l;
                    i.reverse();
                    var h = [],
                        c = [];
                    i.forEach(function (t, s) {
                        var e = n.getPolygonPos(t),
                            a = "";
                        e.forEach(function (t, e) {
                            if (0 === s) {
                                var i = n.graphics.drawLine(t.x, t.y, 0, 0, Array.isArray(n.polygons.connectorColors) ? n.polygons.connectorColors[e] : n.polygons.connectorColors);
                                c.push(i)
                            }
                            0 === e && n.yaxisLabelsTextsPos.push({
                                x: t.x,
                                y: t.y
                            }), a += t.x + "," + t.y + " "
                        }), h.push(a)
                    }), h.forEach(function (t, e) {
                        var i = n.polygons.strokeColors,
                            s = n.graphics.drawPolygon(t, Array.isArray(i) ? i[e] : i, a.globals.radarPolygons.fill.colors[e]);
                        r.add(s)
                    }), c.forEach(function (t) {
                        r.add(t)
                    }), a.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function (t, e) {
                        var i = n.drawYAxisText(t.x, t.y, e, s[e]);
                        n.yaxisLabels.add(i)
                    })
                }
            }, {
                key: "drawYAxisText",
                value: function (t, e, i, s) {
                    var a = this.w,
                        n = a.config.yaxis[0],
                        r = a.globals.yLabelFormatters[0];
                    return this.graphics.drawText({
                        x: t + n.labels.offsetX,
                        y: e + n.labels.offsetY,
                        text: r(s, i),
                        textAnchor: "middle",
                        fontSize: n.labels.style.fontSize,
                        fontFamily: n.labels.style.fontFamily,
                        foreColor: n.labels.style.color
                    })
                }
            }, {
                key: "drawLabels",
                value: function () {
                    var n = this,
                        r = this.w,
                        o = "middle",
                        l = r.config.dataLabels,
                        h = this.graphics.group({
                            class: "apexcharts-datalabels"
                        }),
                        c = this.getPolygonPos(this.size),
                        d = 0,
                        u = 0;
                    return r.globals.labels.forEach(function (t, e) {
                        var i = l.formatter,
                            s = new gt(n.ctx);
                        if (c[e]) {
                            d = c[e].x, u = c[e].y, 10 <= Math.abs(c[e].x) ? 0 < c[e].x ? (o = "start", d += 10) : c[e].x < 0 && (o = "end", d -= 10) : o = "middle", Math.abs(c[e].y) >= n.size - 10 && (c[e].y < 0 ? u -= 10 : 0 < c[e].y && (u += 10));
                            var a = i(t, {
                                seriesIndex: -1,
                                dataPointIndex: e,
                                w: r
                            });
                            s.plotDataLabelsText({
                                x: d,
                                y: u,
                                text: a,
                                textAnchor: o,
                                i: e,
                                j: e,
                                parent: h,
                                dataLabelsConfig: l,
                                offsetCorrection: !1
                            })
                        }
                    }), h
                }
            }, {
                key: "createPaths",
                value: function (i, t) {
                    var s = this,
                        e = [],
                        a = [],
                        n = [],
                        r = [];
                    if (i.length) {
                        a = [this.graphics.move(t.x, t.y)], r = [this.graphics.move(t.x, t.y)];
                        var o = this.graphics.move(i[0].x, i[0].y),
                            l = this.graphics.move(i[0].x, i[0].y);
                        i.forEach(function (t, e) {
                            o += s.graphics.line(t.x, t.y), l += s.graphics.line(t.x, t.y), e === i.length - 1 && (o += "Z", l += "Z")
                        }), e.push(o), n.push(l)
                    }
                    return {
                        linePathsFrom: a,
                        linePathsTo: e,
                        areaPathsFrom: r,
                        areaPathsTo: n
                    }
                }
            }, {
                key: "getPathFrom",
                value: function (t) {
                    for (var e = this.w, i = null, s = 0; s < e.globals.previousPaths.length; s++) {
                        var a = e.globals.previousPaths[s];
                        0 < a.paths.length && parseInt(a.realIndex) === parseInt(t) && void 0 !== e.globals.previousPaths[s].paths[0] && (i = e.globals.previousPaths[s].paths[0].d)
                    }
                    return i
                }
            }, {
                key: "getDataPointsPos",
                value: function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.dataPointsLen;
                    t = t || [], e = e || [];
                    for (var s = [], a = 0; a < i; a++) {
                        var n = {};
                        n.x = t[a] * Math.sin(e[a]), n.y = -t[a] * Math.cos(e[a]), s.push(n)
                    }
                    return s
                }
            }, {
                key: "getPolygonPos",
                value: function (t) {
                    for (var e = [], i = 2 * Math.PI / this.dataPointsLen, s = 0; s < this.dataPointsLen; s++) {
                        var a = {};
                        a.x = t * Math.sin(s * i), a.y = -t * Math.cos(s * i), e.push(a)
                    }
                    return e
                }
            }]), a
        }(),
        z = function (t) {
            function s(t) {
                var e;
                n(this, s), (e = h(this, l(s).call(this, t))).ctx = t, e.w = t.w, e.animBeginArr = [0], e.animDur = 0;
                var i = e.w;
                return e.startAngle = i.config.plotOptions.radialBar.startAngle, e.endAngle = i.config.plotOptions.radialBar.endAngle, e.trackStartAngle = i.config.plotOptions.radialBar.track.startAngle, e.trackEndAngle = i.config.plotOptions.radialBar.track.endAngle, e.radialDataLabels = i.config.plotOptions.radialBar.dataLabels, e.trackStartAngle || (e.trackStartAngle = e.startAngle), e.trackEndAngle || (e.trackEndAngle = e.endAngle), 360 === e.endAngle && (e.endAngle = 359.99), e.fullAngle = 360 - i.config.plotOptions.radialBar.endAngle - i.config.plotOptions.radialBar.startAngle, e.margin = parseInt(i.config.plotOptions.radialBar.track.margin), e
            }
            return a(s, T), r(s, [{
                key: "draw",
                value: function (t) {
                    var e = this.w,
                        i = new ht(this.ctx),
                        s = i.group({
                            class: "apexcharts-radialbar"
                        }),
                        a = i.group(),
                        n = this.defaultSize / 2,
                        r = e.globals.gridWidth / 2,
                        o = this.defaultSize / 2.05 - e.config.stroke.width - e.config.chart.dropShadow.blur;
                    void 0 !== e.config.plotOptions.radialBar.size && (o = e.config.plotOptions.radialBar.size);
                    var l = e.globals.fill.colors;
                    if (e.config.plotOptions.radialBar.track.show) {
                        var h = this.drawTracks({
                            size: o,
                            centerX: r,
                            centerY: n,
                            colorArr: l,
                            series: t
                        });
                        a.add(h)
                    }
                    var c = this.drawArcs({
                        size: o,
                        centerX: r,
                        centerY: n,
                        colorArr: l,
                        series: t
                    });
                    return a.add(c.g), "front" === e.config.plotOptions.radialBar.hollow.position && (c.g.add(c.elHollow), c.dataLabels && c.g.add(c.dataLabels)), s.add(a), s
                }
            }, {
                key: "drawTracks",
                value: function (t) {
                    var e = this.w,
                        i = new ht(this.ctx),
                        s = i.group(),
                        a = new I(this.ctx),
                        n = new dt(this.ctx),
                        r = this.getStrokeWidth(t);
                    t.size = t.size - r / 2;
                    for (var o = 0; o < t.series.length; o++) {
                        var l = i.group({
                            class: "apexcharts-radialbar-track apexcharts-track"
                        });
                        s.add(l), l.attr({
                            id: "apexcharts-track-" + o,
                            rel: o + 1
                        }), t.size = t.size - r - this.margin;
                        var h = e.config.plotOptions.radialBar.track,
                            c = n.fillPath({
                                seriesNumber: 0,
                                size: t.size,
                                fillColors: Array.isArray(h.background) ? h.background[o] : h.background,
                                solid: !0
                            }),
                            d = this.trackStartAngle,
                            u = this.trackEndAngle;
                        360 <= Math.abs(u) + Math.abs(d) && (u = 360 - Math.abs(this.startAngle) - .1);
                        var g = i.drawPath({
                            d: "",
                            stroke: c,
                            strokeWidth: r * parseInt(h.strokeWidth) / 100,
                            fill: "none",
                            strokeOpacity: h.opacity,
                            classes: "apexcharts-radialbar-area"
                        });
                        if (h.dropShadow.enabled) {
                            var f = h.dropShadow;
                            a.dropShadow(g, f)
                        }
                        l.add(g), g.attr("id", "apexcharts-radialbarTrack-" + o), new T(this.ctx).animatePaths(g, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: u,
                            startAngle: d,
                            size: t.size,
                            i: o,
                            totalItems: 2,
                            animBeginArr: 0,
                            dur: 0,
                            isTrack: !0,
                            easing: e.globals.easing
                        })
                    }
                    return s
                }
            }, {
                key: "drawArcs",
                value: function (t) {
                    var e = this.w,
                        i = new ht(this.ctx),
                        s = new dt(this.ctx),
                        a = new I(this.ctx),
                        n = i.group(),
                        r = this.getStrokeWidth(t);
                    t.size = t.size - r / 2;
                    var o = e.config.plotOptions.radialBar.hollow.background,
                        l = t.size - r * t.series.length - this.margin * t.series.length - r * parseInt(e.config.plotOptions.radialBar.track.strokeWidth) / 100 / 2,
                        h = l - e.config.plotOptions.radialBar.hollow.margin;
                    void 0 !== e.config.plotOptions.radialBar.hollow.image && (o = this.drawHollowImage(t, n, l, o));
                    var c = this.drawHollow({
                        size: h,
                        centerX: t.centerX,
                        centerY: t.centerY,
                        fill: o
                    });
                    if (e.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
                        var d = e.config.plotOptions.radialBar.hollow.dropShadow;
                        a.dropShadow(c, d)
                    }
                    var u = 1;
                    !this.radialDataLabels.total.show && 1 < e.globals.series.length && (u = 0);
                    var g = new T(this.ctx),
                        f = null;
                    this.radialDataLabels.show && (f = g.renderInnerDataLabels(this.radialDataLabels, {
                        hollowSize: l,
                        centerX: t.centerX,
                        centerY: t.centerY,
                        opacity: u
                    })), "back" === e.config.plotOptions.radialBar.hollow.position && (n.add(c), f && n.add(f));
                    var p = !1;
                    e.config.plotOptions.radialBar.inverseOrder && (p = !0);
                    for (var x = p ? t.series.length - 1 : 0; p ? 0 <= x : x < t.series.length; p ? x-- : x++) {
                        var b = i.group({
                            class: "apexcharts-series apexcharts-radial-series ".concat(lt.escapeString(e.globals.seriesNames[x]))
                        });
                        n.add(b), b.attr({
                            id: "apexcharts-series-" + x,
                            rel: x + 1
                        }), this.ctx.series.addCollapsedClassToSeries(b, x), t.size = t.size - r - this.margin;
                        var m = s.fillPath({
                                seriesNumber: x,
                                size: t.size,
                                value: t.series[x]
                            }),
                            v = this.startAngle,
                            y = void 0,
                            w = Math.abs(e.config.plotOptions.radialBar.endAngle - e.config.plotOptions.radialBar.startAngle),
                            k = lt.negToZero(100 < t.series[x] ? 100 : t.series[x]) / 100,
                            A = Math.round(w * k) + this.startAngle,
                            S = void 0;
                        e.globals.dataChanged && (y = this.startAngle, S = Math.round(w * lt.negToZero(e.globals.previousPaths[x]) / 100) + y), 360 <= Math.abs(A) + Math.abs(v) && (A -= .01), 360 <= Math.abs(S) + Math.abs(y) && (S -= .01);
                        var C = A - v,
                            L = Array.isArray(e.config.stroke.dashArray) ? e.config.stroke.dashArray[x] : e.config.stroke.dashArray,
                            z = i.drawPath({
                                d: "",
                                stroke: m,
                                strokeWidth: r,
                                fill: "none",
                                fillOpacity: e.config.fill.opacity,
                                classes: "apexcharts-radialbar-area",
                                strokeDashArray: L
                            });
                        if (ht.setAttrs(z.node, {
                                "data:angle": C,
                                "data:value": t.series[x]
                            }), e.config.chart.dropShadow.enabled) {
                            var P = e.config.chart.dropShadow;
                            a.dropShadow(z, P, x)
                        }
                        this.addListeners(z, this.radialDataLabels);
                        var E = new T(this.ctx);
                        b.add(z), z.attr({
                            id: "apexcharts-radialbar-slice-" + x,
                            index: 0,
                            j: x
                        });
                        var M = 0;
                        !E.initialAnim || e.globals.resized || e.globals.dataChanged || (M = (A - v) / 360 * e.config.chart.animations.speed, this.animDur = M / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), e.globals.dataChanged && (M = (A - v) / 360 * e.config.chart.animations.dynamicAnimation.speed, this.animDur = M / (1.2 * t.series.length) + this.animDur, this.animBeginArr.push(this.animDur)), E.animatePaths(z, {
                            centerX: t.centerX,
                            centerY: t.centerY,
                            endAngle: A,
                            startAngle: v,
                            prevEndAngle: S,
                            prevStartAngle: y,
                            size: t.size,
                            i: x,
                            totalItems: 2,
                            animBeginArr: this.animBeginArr,
                            dur: M,
                            shouldSetPrevPaths: !0,
                            easing: e.globals.easing
                        })
                    }
                    return {
                        g: n,
                        elHollow: c,
                        dataLabels: f
                    }
                }
            }, {
                key: "drawHollow",
                value: function (t) {
                    var e = new ht(this.ctx).drawCircle(2 * t.size);
                    return e.attr({
                        class: "apexcharts-radialbar-hollow",
                        cx: t.centerX,
                        cy: t.centerY,
                        r: t.size,
                        fill: t.fill
                    }), e
                }
            }, {
                key: "drawHollowImage",
                value: function (e, t, i, s) {
                    var a = this.w,
                        n = new dt(this.ctx),
                        r = (Math.random() + 1).toString(36).substring(4),
                        o = a.config.plotOptions.radialBar.hollow.image;
                    if (a.config.plotOptions.radialBar.hollow.imageClipped) n.clippedImgArea({
                        width: i,
                        height: i,
                        image: o,
                        patternID: "pattern".concat(a.globals.cuid).concat(r)
                    }), s = "url(#pattern".concat(a.globals.cuid).concat(r, ")");
                    else {
                        var l = a.config.plotOptions.radialBar.hollow.imageWidth,
                            h = a.config.plotOptions.radialBar.hollow.imageHeight;
                        if (void 0 === l && void 0 === h) {
                            var c = a.globals.dom.Paper.image(o).loaded(function (t) {
                                this.move(e.centerX - t.width / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - t.height / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetY)
                            });
                            t.add(c)
                        } else {
                            var d = a.globals.dom.Paper.image(o).loaded(function (t) {
                                this.move(e.centerX - l / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetX, e.centerY - h / 2 + a.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(l, h)
                            });
                            t.add(d)
                        }
                    }
                    return s
                }
            }, {
                key: "getStrokeWidth",
                value: function (t) {
                    var e = this.w;
                    return t.size * (100 - parseInt(e.config.plotOptions.radialBar.hollow.size)) / 100 / (t.series.length + 1) - this.margin
                }
            }]), s
        }(),
        E = function (t) {
            function e() {
                return n(this, e), h(this, l(e).apply(this, arguments))
            }
            return a(e, P), r(e, [{
                key: "draw",
                value: function (t, e) {
                    var i = this.w,
                        s = new ht(this.ctx),
                        a = new dt(this.ctx);
                    this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = t, this.seriesRangeStart = i.globals.seriesRangeStart, this.seriesRangeEnd = i.globals.seriesRangeEnd, this.initVariables(t);
                    for (var n = s.group({
                            class: "apexcharts-rangebar-series apexcharts-plot-series"
                        }), r = 0, o = 0; r < t.length; r++, o++) {
                        var l, h, c, d, u = void 0,
                            g = void 0,
                            f = void 0,
                            p = void 0,
                            x = [],
                            b = [],
                            m = i.globals.comboCharts ? e[r] : r,
                            v = s.group({
                                class: "apexcharts-series ".concat(lt.escapeString(i.globals.seriesNames[m])),
                                rel: r + 1,
                                "data:realIndex": m
                            });
                        0 < t[r].length && (this.visibleI = this.visibleI + 1);
                        var y = 0,
                            w = 0,
                            k = 0;
                        1 < this.yRatio.length && (this.yaxisIndex = m);
                        var A = this.initialPositions();
                        p = A.y, h = A.yDivision, w = A.barHeight, d = A.zeroW, f = A.x, k = A.barWidth, l = A.xDivision, c = A.zeroH, b.push(f + k / 2);
                        for (var S = s.group({
                                class: "apexcharts-datalabels"
                            }), C = 0, L = i.globals.dataPoints; C < i.globals.dataPoints; C++, L--) {
                            void 0 === this.series[r][C] || null === t[r][C] ? this.isNullValue = !0 : this.isNullValue = !1, i.config.stroke.show && (y = this.isNullValue ? 0 : Array.isArray(this.strokeWidth) ? this.strokeWidth[m] : this.strokeWidth);
                            var z = null;
                            this.isHorizontal ? k = (z = this.drawRangeBarPaths({
                                indexes: {
                                    i: r,
                                    j: C,
                                    realIndex: m,
                                    bc: o
                                },
                                barHeight: w,
                                strokeWidth: y,
                                pathTo: u,
                                pathFrom: g,
                                zeroW: d,
                                x: f,
                                y: p,
                                yDivision: h,
                                elSeries: v
                            })).barWidth : w = (z = this.drawRangeColumnPaths({
                                indexes: {
                                    i: r,
                                    j: C,
                                    realIndex: m,
                                    bc: o
                                },
                                x: f,
                                y: p,
                                xDivision: l,
                                pathTo: u,
                                pathFrom: g,
                                barWidth: k,
                                zeroH: c,
                                strokeWidth: y,
                                elSeries: v
                            })).barHeight, u = z.pathTo, g = z.pathFrom, p = z.y, f = z.x, 0 < C && b.push(f + k / 2), x.push(p);
                            var P = a.fillPath({
                                    seriesNumber: m
                                }),
                                E = i.globals.stroke.colors[m];
                            v = this.renderSeries({
                                realIndex: m,
                                pathFill: P,
                                lineFill: E,
                                j: C,
                                i: r,
                                pathFrom: g,
                                pathTo: u,
                                strokeWidth: y,
                                elSeries: v,
                                x: f,
                                y: p,
                                series: t,
                                barHeight: w,
                                barWidth: k,
                                elDataLabelsWrap: S,
                                visibleSeries: this.visibleI,
                                type: "rangebar"
                            })
                        }
                        i.globals.seriesXvalues[m] = b, i.globals.seriesYvalues[m] = x, n.add(v)
                    }
                    return n
                }
            }, {
                key: "drawRangeColumnPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = t.x,
                        s = (t.y, t.strokeWidth),
                        a = t.xDivision,
                        n = t.pathTo,
                        r = t.pathFrom,
                        o = t.barWidth,
                        l = t.zeroH,
                        h = this.w,
                        c = new ht(this.ctx),
                        d = e.i,
                        u = e.j,
                        g = this.yRatio[this.yaxisIndex],
                        f = e.realIndex,
                        p = this.getRangeValue(f, u),
                        x = Math.min(p.start, p.end),
                        b = Math.max(p.start, p.end);
                    h.globals.isXNumeric && (i = (h.globals.seriesX[d][u] - h.globals.minX) / this.xRatio - o / 2);
                    var m = i + o * this.visibleI;
                    void 0 === this.series[d][u] || null === this.series[d][u] ? x = l : (x = l - x / g, b = l - b / g);
                    var v = Math.abs(b - x);
                    return c.move(m, l), r = c.move(m, x), 0 < h.globals.previousPaths.length && (r = this.getPathFrom(f, u, !0)), n = c.move(m, b) + c.line(m + o, b) + c.line(m + o, x) + c.line(m, x) + c.line(m, b - s / 2), r = r + c.move(m, x) + c.line(m + o, x) + c.line(m + o, x) + c.line(m, x), h.globals.isXNumeric || (i += a), {
                        pathTo: n,
                        pathFrom: r,
                        barHeight: v,
                        x: i,
                        y: b,
                        barXPosition: m
                    }
                }
            }, {
                key: "drawRangeBarPaths",
                value: function (t) {
                    var e = t.indexes,
                        i = (t.x, t.y),
                        s = t.yDivision,
                        a = t.pathTo,
                        n = t.pathFrom,
                        r = t.barHeight,
                        o = t.zeroW,
                        l = this.w,
                        h = new ht(this.ctx),
                        c = e.i,
                        d = e.j,
                        u = e.realIndex,
                        g = o,
                        f = o;
                    l.globals.isXNumeric && (i = (l.globals.seriesX[c][d] - l.globals.minX) / this.invertedXRatio - r);
                    var p = i + r * this.visibleI;
                    void 0 !== this.series[c][d] && null !== this.series[c][d] && (g = o + this.seriesRangeStart[c][d] / this.invertedYRatio, f = o + this.seriesRangeEnd[c][d] / this.invertedYRatio), h.move(o, p), n = h.move(o, p), 0 < l.globals.previousPaths.length && (n = this.getPathFrom(u, d));
                    var x = Math.abs(f - g);
                    return a = h.move(g, p) + h.line(f, p) + h.line(f, p + r) + h.line(g, p + r) + h.line(g, p), n = n + h.line(g, p) + h.line(g, p + r) + h.line(g, p + r) + h.line(g, p), l.globals.isXNumeric || (i += s), {
                        pathTo: a,
                        pathFrom: n,
                        barWidth: x,
                        x: f,
                        y: i,
                        barYPosition: p
                    }
                }
            }, {
                key: "getRangeValue",
                value: function (t, e) {
                    var i = this.w;
                    return {
                        start: i.globals.seriesRangeStart[t][e],
                        end: i.globals.seriesRangeEnd[t][e]
                    }
                }
            }]), e
        }(),
        M = function () {
            function s(t, e, i) {
                n(this, s), this.ctx = t, this.w = t.w, this.xyRatios = e, this.pointsChart = !("bubble" !== this.w.config.chart.type && "scatter" !== this.w.config.chart.type) || i, this.scatter = new x(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.yaxisIndex = 0
            }
            return r(s, [{
                key: "draw",
                value: function (t, e, i) {
                    var s = this.w,
                        a = new ht(this.ctx),
                        n = new dt(this.ctx),
                        r = s.globals.comboCharts ? e : s.config.chart.type,
                        o = a.group({
                            class: "apexcharts-".concat(r, "-series apexcharts-plot-series")
                        }),
                        l = new ct(this.ctx, s);
                    t = l.getLogSeries(t);
                    var h = this.xyRatios.yRatio;
                    h = l.getLogYRatios(h);
                    for (var c = this.xyRatios.zRatio, d = this.xyRatios.xRatio, u = this.xyRatios.baseLineY, g = [], f = [], p = 0, x = 0; x < t.length; x++) {
                        if ("line" === r && ("gradient" === s.config.fill.type || "gradient" === s.config.fill.type[x]) && l.seriesHaveSameValues(x)) {
                            var b = t[x].slice();
                            b[b.length - 1] = b[b.length - 1] + 1e-6, t[x] = b
                        }
                        var m = s.globals.gridWidth / s.globals.dataPoints,
                            v = s.globals.comboCharts ? i[x] : x;
                        1 < h.length && (this.yaxisIndex = v), this.isReversed = s.config.yaxis[this.yaxisIndex] && s.config.yaxis[this.yaxisIndex].reversed;
                        var y = [],
                            w = [],
                            k = s.globals.gridHeight - u[this.yaxisIndex] - (this.isReversed ? s.globals.gridHeight : 0) + (this.isReversed ? 2 * u[this.yaxisIndex] : 0),
                            A = k;
                        k > s.globals.gridHeight && (A = s.globals.gridHeight), p = m / 2;
                        var S = s.globals.padHorizontal + p,
                            C = 1;
                        s.globals.isXNumeric && 0 < s.globals.seriesX.length && (S = (s.globals.seriesX[v][0] - s.globals.minX) / d), w.push(S);
                        var L = void 0,
                            z = void 0,
                            P = void 0,
                            E = void 0,
                            M = [],
                            T = [],
                            X = a.group({
                                class: "apexcharts-series ".concat(lt.escapeString(s.globals.seriesNames[v]))
                            }),
                            I = a.group({
                                class: "apexcharts-series-markers-wrap"
                            }),
                            Y = a.group({
                                class: "apexcharts-datalabels"
                            });
                        this.ctx.series.addCollapsedClassToSeries(X, v);
                        var F = t[x].length === s.globals.dataPoints;
                        X.attr({
                            "data:longestSeries": F,
                            rel: x + 1,
                            "data:realIndex": v
                        }), this.appendPathFrom = !0;
                        var R = S,
                            D = void 0,
                            N = R,
                            O = k,
                            H = 0;
                        if (O = this.determineFirstPrevY({
                                i: x,
                                series: t,
                                yRatio: h[this.yaxisIndex],
                                zeroY: k,
                                prevY: O,
                                prevSeriesY: f,
                                lineYPosition: H
                            }).prevY, y.push(O), D = O, null === t[x][0]) {
                            for (var W = 0; W < t[x].length; W++)
                                if (null !== t[x][W]) {
                                    N = m * W, O = k - t[x][W] / h[this.yaxisIndex], L = a.move(N, O), z = a.move(N, A);
                                    break
                                }
                        } else L = a.move(N, O), z = a.move(N, A) + a.line(N, O);
                        if (P = a.move(-1, k) + a.line(-1, k), E = a.move(-1, k) + a.line(-1, k), 0 < s.globals.previousPaths.length) {
                            var B = this.checkPreviousPaths({
                                pathFromLine: P,
                                pathFromArea: E,
                                realIndex: v
                            });
                            P = B.pathFromLine, E = B.pathFromArea
                        }
                        for (var V = 1 < s.globals.dataPoints ? s.globals.dataPoints - 1 : s.globals.dataPoints, G = 0; G < V; G++) {
                            if (s.globals.isXNumeric) {
                                var _ = s.globals.seriesX[v][G + 1];
                                void 0 === s.globals.seriesX[v][G + 1] && (_ = s.globals.seriesX[v][V - 1]), S = (_ - s.globals.minX) / d
                            } else S += m;
                            var j = lt.isNumber(s.globals.minYArr[v]) ? s.globals.minYArr[v] : s.globals.minY;
                            C = s.config.chart.stacked ? (H = 0 < x && s.globals.collapsedSeries.length < s.config.series.length - 1 ? f[x - 1][G + 1] : k, void 0 === t[x][G + 1] || null === t[x][G + 1] ? H - j / h[this.yaxisIndex] + 2 * (this.isReversed ? j / h[this.yaxisIndex] : 0) : H - t[x][G + 1] / h[this.yaxisIndex] + 2 * (this.isReversed ? t[x][G + 1] / h[this.yaxisIndex] : 0)) : void 0 === t[x][G + 1] || null === t[x][G + 1] ? k - j / h[this.yaxisIndex] + 2 * (this.isReversed ? j / h[this.yaxisIndex] : 0) : k - t[x][G + 1] / h[this.yaxisIndex] + 2 * (this.isReversed ? t[x][G + 1] / h[this.yaxisIndex] : 0), w.push(S), y.push(C);
                            var U = this.createPaths({
                                series: t,
                                i: x,
                                j: G,
                                x: S,
                                y: C,
                                xDivision: m,
                                pX: R,
                                pY: D,
                                areaBottomY: A,
                                linePath: L,
                                areaPath: z,
                                linePaths: M,
                                areaPaths: T,
                                seriesIndex: i
                            });
                            T = U.areaPaths, M = U.linePaths, R = U.pX, D = U.pY, z = U.areaPath, L = U.linePath, this.appendPathFrom && (P += a.line(S, k), E += a.line(S, k));
                            var q = this.calculatePoints({
                                series: t,
                                x: S,
                                y: C,
                                realIndex: v,
                                i: x,
                                j: G,
                                prevY: O,
                                categoryAxisCorrection: p,
                                xRatio: d
                            });
                            if (this.pointsChart) this.scatter.draw(X, G, {
                                realIndex: v,
                                pointsPos: q,
                                zRatio: c,
                                elParent: I
                            });
                            else {
                                var Z = new ut(this.ctx);
                                1 < s.globals.dataPoints && I.node.classList.add("hidden");
                                var $ = Z.plotChartMarkers(q, v, G + 1);
                                null !== $ && I.add($)
                            }
                            var J = !t[x][G + 1] || t[x][G + 1] > t[x][G] ? "top" : "bottom",
                                Q = new gt(this.ctx).drawDataLabel(q, v, G + 1, null, J);
                            null !== Q && Y.add(Q)
                        }
                        f.push(y), s.globals.seriesXvalues[v] = w, s.globals.seriesYvalues[v] = y, this.pointsChart || s.globals.delayedElements.push({
                            el: I.node,
                            index: v
                        });
                        var K = {
                            i: x,
                            realIndex: v,
                            animationDelay: x,
                            initialSpeed: s.config.chart.animations.speed,
                            dataChangeSpeed: s.config.chart.animations.dynamicAnimation.speed,
                            className: "apexcharts-".concat(r),
                            id: "apexcharts-".concat(r)
                        };
                        if ("area" === r)
                            for (var tt = n.fillPath({
                                    seriesNumber: v
                                }), et = 0; et < T.length; et++) {
                                var it = a.renderPaths(ot({}, K, {
                                    pathFrom: E,
                                    pathTo: T[et],
                                    stroke: "none",
                                    strokeWidth: 0,
                                    strokeLineCap: null,
                                    fill: tt
                                }));
                                X.add(it)
                            }
                        if (s.config.stroke.show && !this.pointsChart) {
                            var st;
                            st = "line" === r ? n.fillPath({
                                seriesNumber: v,
                                i: x
                            }) : s.globals.stroke.colors[v];
                            for (var at = 0; at < M.length; at++) {
                                var nt = a.renderPaths(ot({}, K, {
                                    pathFrom: P,
                                    pathTo: M[at],
                                    stroke: st,
                                    strokeWidth: Array.isArray(s.config.stroke.width) ? s.config.stroke.width[v] : s.config.stroke.width,
                                    strokeLineCap: s.config.stroke.lineCap,
                                    fill: "none"
                                }));
                                X.add(nt)
                            }
                        }
                        X.add(I), X.add(Y), g.push(X)
                    }
                    for (var rt = g.length; 0 < rt; rt--) o.add(g[rt - 1]);
                    return o
                }
            }, {
                key: "createPaths",
                value: function (t) {
                    var e = t.series,
                        i = t.i,
                        s = t.j,
                        a = t.x,
                        n = t.y,
                        r = t.pX,
                        o = t.pY,
                        l = t.xDivision,
                        h = t.areaBottomY,
                        c = t.linePath,
                        d = t.areaPath,
                        u = t.linePaths,
                        g = t.areaPaths,
                        f = t.seriesIndex,
                        p = this.w,
                        x = new ht(this.ctx),
                        b = p.config.stroke.curve;
                    if (Array.isArray(p.config.stroke.curve) && (b = Array.isArray(f) ? p.config.stroke.curve[f[i]] : p.config.stroke.curve[i]), "smooth" === b) {
                        var m = .35 * (a - r);
                        p.globals.hasNullValues ? (null !== e[i][s] && (d = null !== e[i][s + 1] ? (c = x.move(r, o) + x.curve(r + m, o, a - m, n, a + 1, n), x.move(r + 1, o) + x.curve(r + m, o, a - m, n, a + 1, n) + x.line(a, h) + x.line(r, h) + "z") : (c = x.move(r, o), x.move(r, o) + "z")), u.push(c), g.push(d)) : (c += x.curve(r + m, o, a - m, n, a, n), d += x.curve(r + m, o, a - m, n, a, n)), r = a, o = n, s === e[i].length - 2 && (d = d + x.curve(r, o, a, n, a, h) + x.move(a, n) + "z", p.globals.hasNullValues || (u.push(c), g.push(d)))
                    } else null === e[i][s + 1] && (c += x.move(a, n), d = d + x.line(a - l, h) + x.move(a, n)), null === e[i][s] && (c += x.move(a, n), d += x.move(a, h)), "stepline" === b ? (c = c + x.line(a, null, "H") + x.line(null, n, "V"), d = d + x.line(a, null, "H") + x.line(null, n, "V")) : "straight" === b && (c += x.line(a, n), d += x.line(a, n)), s === e[i].length - 2 && (d = d + x.line(a, h) + x.move(a, n) + "z", u.push(c), g.push(d));
                    return {
                        linePaths: u,
                        areaPaths: g,
                        pX: r,
                        pY: o,
                        linePath: c,
                        areaPath: d
                    }
                }
            }, {
                key: "calculatePoints",
                value: function (t) {
                    var e = t.series,
                        i = t.realIndex,
                        s = t.x,
                        a = t.y,
                        n = t.i,
                        r = t.j,
                        o = t.prevY,
                        l = t.categoryAxisCorrection,
                        h = t.xRatio,
                        c = this.w,
                        d = [],
                        u = [];
                    if (0 === r) {
                        var g = l + c.config.markers.offsetX;
                        c.globals.isXNumeric && (g = (c.globals.seriesX[i][0] - c.globals.minX) / h + c.config.markers.offsetX), d.push(g), u.push(lt.isNumber(e[n][0]) ? o + c.config.markers.offsetY : null), d.push(s + c.config.markers.offsetX), u.push(lt.isNumber(e[n][r + 1]) ? a + c.config.markers.offsetY : null)
                    } else d.push(s + c.config.markers.offsetX), u.push(lt.isNumber(e[n][r + 1]) ? a + c.config.markers.offsetY : null);
                    return {
                        x: d,
                        y: u
                    }
                }
            }, {
                key: "checkPreviousPaths",
                value: function (t) {
                    for (var e = t.pathFromLine, i = t.pathFromArea, s = t.realIndex, a = this.w, n = 0; n < a.globals.previousPaths.length; n++) {
                        var r = a.globals.previousPaths[n];
                        ("line" === r.type || "area" === r.type) && 0 < r.paths.length && parseInt(r.realIndex) === parseInt(s) && ("line" === r.type ? (this.appendPathFrom = !1, e = a.globals.previousPaths[n].paths[0].d) : "area" === r.type && (this.appendPathFrom = !1, i = a.globals.previousPaths[n].paths[0].d, a.config.stroke.show && (e = a.globals.previousPaths[n].paths[1].d)))
                    }
                    return {
                        pathFromLine: e,
                        pathFromArea: i
                    }
                }
            }, {
                key: "determineFirstPrevY",
                value: function (t) {
                    var e = t.i,
                        i = t.series,
                        s = t.yRatio,
                        a = t.zeroY,
                        n = t.prevY,
                        r = t.prevSeriesY,
                        o = t.lineYPosition,
                        l = this.w;
                    if (void 0 !== i[e][0]) n = l.config.chart.stacked ? (o = 0 < e ? r[e - 1][0] : a) - i[e][0] / s + 2 * (this.isReversed ? i[e][0] / s : 0) : a - i[e][0] / s + 2 * (this.isReversed ? i[e][0] / s : 0);
                    else if (l.config.chart.stacked && 0 < e && void 0 === i[e][0])
                        for (var h = e - 1; 0 <= h; h--)
                            if (null !== i[h][0] && void 0 !== i[h][0]) {
                                n = o = r[h][0];
                                break
                            } return {
                        prevY: n,
                        lineYPosition: o
                    }
                }
            }]), s
        }(),
        m = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.tooltipKeyFormat = "dd MMM"
            }
            return r(e, [{
                key: "xLabelFormat",
                value: function (t, e) {
                    var i = this.w;
                    return "datetime" === i.config.xaxis.type && void 0 === i.config.tooltip.x.formatter ? new k(this.ctx).formatDate(new Date(e), i.config.tooltip.x.format, !0, !0) : t(e)
                }
            }, {
                key: "setLabelFormatters",
                value: function () {
                    var i = this.w;
                    return i.globals.xLabelFormatter = function (t) {
                        return t
                    }, i.globals.xaxisTooltipFormatter = function (t) {
                        return t
                    }, i.globals.ttKeyFormatter = function (t) {
                        return t
                    }, i.globals.ttZFormatter = function (t) {
                        return t
                    }, i.globals.legendFormatter = function (t) {
                        return t
                    }, "function" == typeof i.config.tooltip.x.formatter && (i.globals.ttKeyFormatter = i.config.tooltip.x.formatter), "function" == typeof i.config.xaxis.tooltip.formatter && (i.globals.xaxisTooltipFormatter = i.config.xaxis.tooltip.formatter), Array.isArray(i.config.tooltip.y) ? i.globals.ttVal = i.config.tooltip.y : void 0 !== i.config.tooltip.y.formatter && (i.globals.ttVal = i.config.tooltip.y), void 0 !== i.config.tooltip.z.formatter && (i.globals.ttZFormatter = i.config.tooltip.z.formatter), void 0 !== i.config.legend.formatter && (i.globals.legendFormatter = i.config.legend.formatter), void 0 !== i.config.xaxis.labels.formatter ? i.globals.xLabelFormatter = i.config.xaxis.labels.formatter : i.globals.xLabelFormatter = function (t) {
                        return lt.isNumber(t) ? "numeric" === i.config.xaxis.type && i.globals.dataPoints < 50 ? t.toFixed(1) : t.toFixed(0) : t
                    }, i.config.yaxis.forEach(function (e, t) {
                        void 0 !== e.labels.formatter ? i.globals.yLabelFormatters[t] = e.labels.formatter : i.globals.yLabelFormatters[t] = function (t) {
                            return lt.isNumber(t) ? 0 !== i.globals.yValueDecimal || i.globals.maxY - i.globals.minY < 4 ? t.toFixed(void 0 !== e.decimalsInFloat ? e.decimalsInFloat : i.globals.yValueDecimal) : t.toFixed(0) : t
                        }
                    }), i.globals
                }
            }, {
                key: "heatmapLabelFormatters",
                value: function () {
                    var t = this.w;
                    if ("heatmap" === t.config.chart.type) {
                        t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
                        var e = t.globals.seriesNames.reduce(function (t, e) {
                            return t.length > e.length ? t : e
                        }, 0);
                        t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e
                    }
                }
            }]), e
        }(),
        v = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "getLabel",
                value: function (t, e, i, s) {
                    var a, n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [],
                        r = this.w,
                        o = void 0 === t[s] ? "" : t[s],
                        l = r.globals.xLabelFormatter,
                        h = r.config.xaxis.labels.formatter;
                    return a = new m(this.ctx).xLabelFormat(l, o), void 0 !== h && (a = h(o, t[s], s)), 0 < e.length ? (i = e[s].position, a = e[s].value) : "datetime" === r.config.xaxis.type && void 0 === h && (a = ""), void 0 === a && (a = ""), (0 === (a = a.toString()).indexOf("NaN") || 0 === a.toLowerCase().indexOf("invalid") || 0 <= a.toLowerCase().indexOf("infinity") || 0 <= n.indexOf(a) && !r.config.xaxis.labels.showDuplicates) && (a = ""), {
                        x: i,
                        text: a
                    }
                }
            }, {
                key: "drawYAxisTicks",
                value: function (t, e, i, s, a, n, r) {
                    var o = this.w,
                        l = new ht(this.ctx),
                        h = o.globals.translateY;
                    if (s.show) {
                        !0 === o.config.yaxis[a].opposite && (t += s.width);
                        for (var c = e; 0 <= c; c--) {
                            var d = h + e / 10 + o.config.yaxis[a].labels.offsetY - 1;
                            o.globals.isBarHorizontal && (d = n * c);
                            var u = l.drawLine(t + i.offsetX - s.width + s.offsetX, d + s.offsetY, t + i.offsetX + s.offsetX, d + s.offsetY, i.color);
                            r.add(u), h += n
                        }
                    }
                }
            }]), e
        }(),
        F = function () {
            function i(t) {
                n(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.xaxisLabels = e.globals.labels.slice(), 0 < e.globals.timelineLabels.length && (this.xaxisLabels = e.globals.timelineLabels.slice()), this.drawnLabels = [], "top" === e.config.xaxis.position ? this.offY = 0 : this.offY = e.globals.gridHeight + 1, this.offY = this.offY + e.config.xaxis.axisBorder.offsetY, this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.xaxisBorderWidth = e.config.xaxis.axisBorder.width, -1 < this.xaxisBorderWidth.indexOf("%") ? this.xaxisBorderWidth = e.globals.gridWidth * parseInt(this.xaxisBorderWidth) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth), this.xaxisBorderHeight = e.config.xaxis.axisBorder.height, this.yaxis = e.config.yaxis[0], this.axesUtils = new v(t)
            }
            return r(i, [{
                key: "drawXaxis",
                value: function () {
                    var t, e = this.w,
                        i = new ht(this.ctx),
                        s = i.group({
                            class: "apexcharts-xaxis",
                            transform: "translate(".concat(e.config.xaxis.offsetX, ", ").concat(e.config.xaxis.offsetY, ")")
                        }),
                        a = i.group({
                            class: "apexcharts-xaxis-texts-g",
                            transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")")
                        });
                    s.add(a);
                    for (var n = e.globals.padHorizontal, r = [], o = 0; o < this.xaxisLabels.length; o++) r.push(this.xaxisLabels[o]);
                    n = e.globals.isXNumeric ? n + (t = e.globals.gridWidth / (r.length - 1)) / 2 + e.config.xaxis.labels.offsetX : n + (t = e.globals.gridWidth / r.length) + e.config.xaxis.labels.offsetX;
                    var l = r.length;
                    if (e.config.xaxis.labels.show)
                        for (var h = 0; h <= l - 1; h++) {
                            var c = n - t / 2 + e.config.xaxis.labels.offsetX,
                                d = this.axesUtils.getLabel(r, e.globals.timelineLabels, c, h, this.drawnLabels);
                            this.drawnLabels.push(d.text);
                            var u = 28;
                            e.globals.rotateXLabels && (u = 22);
                            var g = i.drawText({
                                x: d.x,
                                y: this.offY + e.config.xaxis.labels.offsetY + u,
                                text: "",
                                textAnchor: "middle",
                                fontSize: this.xaxisFontSize,
                                fontFamily: this.xaxisFontFamily,
                                foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[h] : this.xaxisForeColors,
                                cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
                            });
                            h === l - 1 && e.globals.skipLastTimelinelabel && (d.text = ""), a.add(g), i.addTspan(g, d.text, this.xaxisFontFamily);
                            var f = document.createElementNS(e.globals.SVGNS, "title");
                            f.textContent = d.text, g.node.appendChild(f), n += t
                        }
                    if (void 0 !== e.config.xaxis.title.text) {
                        var p = i.group({
                                class: "apexcharts-xaxis-title"
                            }),
                            x = i.drawText({
                                x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX,
                                y: this.offY - parseInt(this.xaxisFontSize) + e.globals.xAxisLabelsHeight + e.config.xaxis.title.offsetY,
                                text: e.config.xaxis.title.text,
                                textAnchor: "middle",
                                fontSize: e.config.xaxis.title.style.fontSize,
                                fontFamily: e.config.xaxis.title.style.fontFamily,
                                foreColor: e.config.xaxis.title.style.color,
                                cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass
                            });
                        p.add(x), s.add(p)
                    }
                    if (e.config.xaxis.axisBorder.show) {
                        var b = 0;
                        "bar" === e.config.chart.type && e.globals.isXNumeric && (b -= 15);
                        var m = i.drawLine(e.globals.padHorizontal + b + e.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, e.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                        s.add(m)
                    }
                    return s
                }
            }, {
                key: "drawXaxisInversed",
                value: function (t) {
                    var e, i, s = this.w,
                        a = new ht(this.ctx),
                        n = s.config.yaxis[0].opposite ? s.globals.translateYAxisX[t] : 0,
                        r = a.group({
                            class: "apexcharts-yaxis apexcharts-xaxis-inversed",
                            rel: t
                        }),
                        o = a.group({
                            class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g",
                            transform: "translate(" + n + ", 0)"
                        });
                    r.add(o);
                    for (var l = [], h = 0; h < this.xaxisLabels.length; h++) l.push(this.xaxisLabels[h]);
                    i = -(e = s.globals.gridHeight / l.length) / 2.2;
                    var c = s.globals.yLabelFormatters[0],
                        d = s.config.yaxis[0].labels;
                    if (d.show)
                        for (var u = 0; u <= l.length - 1; u++) {
                            var g = void 0 === l[u] ? "" : l[u];
                            g = c(g);
                            var f = a.drawText({
                                x: d.offsetX - 15,
                                y: i + e + d.offsetY,
                                text: g,
                                textAnchor: this.yaxis.opposite ? "start" : "end",
                                foreColor: d.style.color ? d.style.color : d.style.colors[u],
                                fontSize: d.style.fontSize,
                                fontFamily: d.style.fontFamily,
                                cssClass: "apexcharts-yaxis-label " + d.style.cssClass
                            });
                            if (o.add(f), 0 !== s.config.yaxis[t].labels.rotate) {
                                var p = a.rotateAroundCenter(f.node);
                                f.node.setAttribute("transform", "rotate(".concat(s.config.yaxis[t].labels.rotate, " ").concat(p.x, " ").concat(p.y, ")"))
                            }
                            i += e
                        }
                    if (void 0 !== s.config.yaxis[0].title.text) {
                        var x = a.group({
                                class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed",
                                transform: "translate(" + n + ", 0)"
                            }),
                            b = a.drawText({
                                x: 0,
                                y: s.globals.gridHeight / 2,
                                text: s.config.yaxis[0].title.text,
                                textAnchor: "middle",
                                foreColor: s.config.yaxis[0].title.style.color,
                                fontSize: s.config.yaxis[0].title.style.fontSize,
                                fontFamily: s.config.yaxis[0].title.style.fontFamily,
                                cssClass: "apexcharts-yaxis-title-text " + s.config.yaxis[0].title.style.cssClass
                            });
                        x.add(b), r.add(x)
                    }
                    if (s.config.xaxis.axisBorder.show) {
                        var m = a.drawLine(s.globals.padHorizontal + s.config.xaxis.axisBorder.offsetX, this.offY, this.xaxisBorderWidth, this.offY, this.yaxis.axisBorder.color, 0, this.xaxisBorderHeight);
                        r.add(m), this.axesUtils.drawYAxisTicks(0, l.length, s.config.yaxis[0].axisBorder, s.config.yaxis[0].axisTicks, 0, e, r)
                    }
                    return r
                }
            }, {
                key: "drawXaxisTicks",
                value: function (t, e) {
                    var i = this.w,
                        s = t;
                    if (!(t < 0 || t > i.globals.gridWidth)) {
                        var a = this.offY + i.config.xaxis.axisTicks.offsetY,
                            n = a + i.config.xaxis.axisTicks.height;
                        if (i.config.xaxis.axisTicks.show) {
                            var r = new ht(this.ctx).drawLine(t + i.config.xaxis.axisTicks.offsetX, a + i.config.xaxis.offsetY, s + i.config.xaxis.axisTicks.offsetX, n + i.config.xaxis.offsetY, i.config.xaxis.axisTicks.color);
                            e.add(r), r.node.classList.add("apexcharts-xaxis-tick")
                        }
                    }
                }
            }, {
                key: "getXAxisTicksPositions",
                value: function () {
                    var t = this.w,
                        e = [],
                        i = this.xaxisLabels.length,
                        s = t.globals.padHorizontal;
                    if (0 < t.globals.timelineLabels.length)
                        for (var a = 0; a < i; a++) s = this.xaxisLabels[a].position, e.push(s);
                    else
                        for (var n = i, r = 0; r < n; r++) {
                            var o = n;
                            t.globals.isXNumeric && "bar" !== t.config.chart.type && (o -= 1), s += t.globals.gridWidth / o, e.push(s)
                        }
                    return e
                }
            }, {
                key: "xAxisLabelCorrections",
                value: function () {
                    var t = this.w,
                        e = new ht(this.ctx),
                        i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"),
                        s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text"),
                        a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"),
                        n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text");
                    if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways)
                        for (var r = 0; r < s.length; r++) {
                            var o = e.rotateAroundCenter(s[r]);
                            o.y = o.y - 1, o.x = o.x + 1, s[r].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(o.x, " ").concat(o.y, ")")), s[r].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
                            var l = s[r].childNodes;
                            t.config.xaxis.labels.trim && e.placeTextWithEllipsis(l[0], l[0].textContent, t.config.xaxis.labels.maxHeight - 40)
                        } else
                            for (var h = t.globals.gridWidth / t.globals.labels.length, c = 0; c < s.length; c++) {
                                var d = s[c].childNodes;
                                t.config.xaxis.labels.trim && "datetime" !== t.config.xaxis.type && e.placeTextWithEllipsis(d[0], d[0].textContent, h)
                            }
                    if (0 < a.length) {
                        var u = a[a.length - 1].getBBox(),
                            g = a[0].getBBox();
                        u.x < -20 && a[a.length - 1].parentNode.removeChild(a[a.length - 1]), g.x + g.width > t.globals.gridWidth && a[0].parentNode.removeChild(a[0]);
                        for (var f = 0; f < n.length; f++) e.placeTextWithEllipsis(n[f], n[f].textContent, t.config.yaxis[0].labels.maxWidth - 2 * parseInt(t.config.yaxis[0].title.style.fontSize) - 20)
                    }
                }
            }]), i
        }(),
        X = function () {
            function i(t) {
                n(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.xaxisFontSize = e.config.xaxis.labels.style.fontSize, this.axisFontFamily = e.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = e.config.xaxis.labels.style.colors, this.xAxisoffX = 0, "bottom" === e.config.xaxis.position && (this.xAxisoffX = e.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new v(t)
            }
            return r(i, [{
                key: "drawYaxis",
                value: function (t) {
                    var e = this.w,
                        i = new ht(this.ctx),
                        s = e.config.yaxis[t].labels.style.fontSize,
                        a = e.config.yaxis[t].labels.style.fontFamily,
                        n = i.group({
                            class: "apexcharts-yaxis",
                            rel: t,
                            transform: "translate(" + e.globals.translateYAxisX[t] + ", 0)"
                        });
                    if (!e.config.yaxis[t].show) return n;
                    var r = i.group({
                        class: "apexcharts-yaxis-texts-g"
                    });
                    n.add(r);
                    var o = e.globals.yAxisScale[t].result.length - 1,
                        l = e.globals.gridHeight / o + .1,
                        h = e.globals.translateY,
                        c = e.globals.yLabelFormatters[t],
                        d = e.globals.yAxisScale[t].result.slice();
                    if (e.config.yaxis[t] && e.config.yaxis[t].reversed && d.reverse(), e.config.yaxis[t].labels.show)
                        for (var u = o; 0 <= u; u--) {
                            var g = d[u];
                            g = c(g, u);
                            var f = e.config.yaxis[t].labels.padding;
                            e.config.yaxis[t].opposite && 0 !== e.config.yaxis.length && (f *= -1);
                            var p = i.drawText({
                                x: f,
                                y: h + o / 10 + e.config.yaxis[t].labels.offsetY + 1,
                                text: g,
                                textAnchor: e.config.yaxis[t].opposite ? "start" : "end",
                                fontSize: s,
                                fontFamily: a,
                                foreColor: e.config.yaxis[t].labels.style.color,
                                cssClass: "apexcharts-yaxis-label " + e.config.yaxis[t].labels.style.cssClass
                            });
                            r.add(p);
                            var x = i.rotateAroundCenter(p.node);
                            0 !== e.config.yaxis[t].labels.rotate && p.node.setAttribute("transform", "rotate(".concat(e.config.yaxis[t].labels.rotate, " ").concat(x.x, " ").concat(x.y, ")")), h += l
                        }
                    if (void 0 !== e.config.yaxis[t].title.text) {
                        var b = i.group({
                                class: "apexcharts-yaxis-title"
                            }),
                            m = 0;
                        e.config.yaxis[t].opposite && (m = e.globals.translateYAxisX[t]);
                        var v = i.drawText({
                            x: m,
                            y: e.globals.gridHeight / 2 + e.globals.translateY,
                            text: e.config.yaxis[t].title.text,
                            textAnchor: "end",
                            foreColor: e.config.yaxis[t].title.style.color,
                            fontSize: e.config.yaxis[t].title.style.fontSize,
                            fontFamily: e.config.yaxis[t].title.style.fontFamily,
                            cssClass: "apexcharts-yaxis-title-text " + e.config.yaxis[t].title.style.cssClass
                        });
                        b.add(v), n.add(b)
                    }
                    var y = e.config.yaxis[t].axisBorder;
                    if (y.show) {
                        var w = 31 + y.offsetX;
                        e.config.yaxis[t].opposite && (w = -31 - y.offsetX);
                        var k = i.drawLine(w, e.globals.translateY + y.offsetY - 2, w, e.globals.gridHeight + e.globals.translateY + y.offsetY + 2, y.color);
                        n.add(k), this.axesUtils.drawYAxisTicks(w, o, y, e.config.yaxis[t].axisTicks, t, l, n)
                    }
                    return n
                }
            }, {
                key: "drawYaxisInversed",
                value: function (t) {
                    var e = this.w,
                        i = new ht(this.ctx),
                        s = i.group({
                            class: "apexcharts-xaxis apexcharts-yaxis-inversed"
                        }),
                        a = i.group({
                            class: "apexcharts-xaxis-texts-g",
                            transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")")
                        });
                    s.add(a);
                    var n = e.globals.yAxisScale[t].result.length - 1,
                        r = e.globals.gridWidth / n + .1,
                        o = r + e.config.xaxis.labels.offsetX,
                        l = e.globals.xLabelFormatter,
                        h = e.globals.yAxisScale[t].result.slice(),
                        c = e.globals.invertedTimelineLabels;
                    0 < c.length && (this.xaxisLabels = c.slice(), n = (h = c.slice()).length), e.config.yaxis[t] && e.config.yaxis[t].reversed && h.reverse();
                    var d = c.length;
                    if (e.config.xaxis.labels.show)
                        for (var u = d ? 0 : n; d ? u < d - 1 : 0 <= u; d ? u++ : u--) {
                            var g = h[u];
                            g = l(g, u);
                            var f = e.globals.gridWidth + e.globals.padHorizontal - (o - r + e.config.xaxis.labels.offsetX);
                            if (c.length) {
                                var p = this.axesUtils.getLabel(h, c, f, u, this.drawnLabels);
                                f = p.x, g = p.text, this.drawnLabels.push(p.text)
                            }
                            var x = i.drawText({
                                x: f,
                                y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30,
                                text: "",
                                textAnchor: "middle",
                                foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors,
                                fontSize: this.xaxisFontSize,
                                fontFamily: this.xaxisFontFamily,
                                cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass
                            });
                            a.add(x), x.tspan(g);
                            var b = document.createElementNS(e.globals.SVGNS, "title");
                            b.textContent = g, x.node.appendChild(b), o += r
                        }
                    if (void 0 !== e.config.xaxis.title.text) {
                        var m = i.group({
                                class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed"
                            }),
                            v = i.drawText({
                                x: e.globals.gridWidth / 2,
                                y: this.xAxisoffX + parseInt(this.xaxisFontSize) + parseInt(e.config.xaxis.title.style.fontSize) + 20,
                                text: e.config.xaxis.title.text,
                                textAnchor: "middle",
                                fontSize: e.config.xaxis.title.style.fontSize,
                                fontFamily: e.config.xaxis.title.style.fontFamily,
                                cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass
                            });
                        m.add(v), s.add(m)
                    }
                    var y = e.config.yaxis[t].axisBorder;
                    if (y.show) {
                        var w = i.drawLine(e.globals.padHorizontal + y.offsetX, 1 + y.offsetY, e.globals.padHorizontal + y.offsetX, e.globals.gridHeight + y.offsetY, y.color);
                        s.add(w)
                    }
                    return s
                }
            }, {
                key: "yAxisTitleRotate",
                value: function (t, e) {
                    var i = this.w,
                        s = new ht(this.ctx),
                        a = {
                            width: 0,
                            height: 0
                        },
                        n = {
                            width: 0,
                            height: 0
                        },
                        r = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
                    null !== r && (a = r.getBoundingClientRect());
                    var o = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
                    if (null !== o && (n = o.getBoundingClientRect()), null !== o) {
                        var l = this.xPaddingForYAxisTitle(t, a, n, e);
                        o.setAttribute("x", l.xPos - (e ? 10 : 0))
                    }
                    if (null !== o) {
                        var h = s.rotateAroundCenter(o);
                        e ? o.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")")) : o.setAttribute("transform", "rotate(-".concat(i.config.yaxis[t].title.rotate, " ").concat(h.x, " ").concat(h.y, ")"))
                    }
                }
            }, {
                key: "xPaddingForYAxisTitle",
                value: function (t, e, i, s) {
                    var a = this.w,
                        n = 0,
                        r = 0,
                        o = 10;
                    return void 0 === a.config.yaxis[t].title.text || t < 0 ? {
                        xPos: r,
                        padd: 0
                    } : (s ? (r = e.width + a.config.yaxis[t].title.offsetX + i.width / 2 + o / 2, 0 === (n += 1) && (r -= o / 2)) : (r = -1 * e.width + a.config.yaxis[t].title.offsetX + o / 2 + i.width / 2, a.globals.isBarHorizontal && (o = 25, r = -1 * e.width - a.config.yaxis[t].title.offsetX - o)), {
                        xPos: r,
                        padd: o
                    })
                }
            }, {
                key: "setYAxisXPosition",
                value: function (a, n) {
                    var r = this.w,
                        o = 0,
                        l = 0,
                        h = 21,
                        c = 1;
                    1 < r.config.yaxis.length && (this.multipleYs = !0), r.config.yaxis.map(function (t, e) {
                        var i = -1 < r.globals.ignoreYAxisIndexes.indexOf(e) || !t.show || t.floating || 0 === a[e].width,
                            s = a[e].width + n[e].width;
                        t.opposite ? r.globals.isBarHorizontal ? (l = r.globals.gridWidth + r.globals.translateX - 1, r.globals.translateYAxisX[e] = l - t.labels.offsetX) : (l = r.globals.gridWidth + r.globals.translateX + c, i || (c = c + s + 20), r.globals.translateYAxisX[e] = l - t.labels.offsetX + 20) : (o = r.globals.translateX - h, i || (h = h + s + 20), r.globals.translateYAxisX[e] = o + t.labels.offsetX)
                    })
                }
            }, {
                key: "setYAxisTextAlignments",
                value: function () {
                    var r = this.w,
                        t = r.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis");
                    (t = lt.listToArray(t)).forEach(function (t, e) {
                        var i = r.config.yaxis[e];
                        if (void 0 !== i.labels.align) {
                            var s = r.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-texts-g")),
                                a = r.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(e, "'] .apexcharts-yaxis-label"));
                            a = lt.listToArray(a);
                            var n = s.getBoundingClientRect();
                            "left" === i.labels.align ? (a.forEach(function (t, e) {
                                t.setAttribute("text-anchor", "start")
                            }), i.opposite || s.setAttribute("transform", "translate(-".concat(n.width, ", 0)"))) : "center" === i.labels.align ? (a.forEach(function (t, e) {
                                t.setAttribute("text-anchor", "middle")
                            }), s.setAttribute("transform", "translate(".concat(n.width / 2 * (i.opposite ? 1 : -1), ", 0)"))) : "right" === i.labels.align && (a.forEach(function (t, e) {
                                t.setAttribute("text-anchor", "end")
                            }), i.opposite && s.setAttribute("transform", "translate(".concat(n.width, ", 0)")))
                        }
                    })
                }
            }]), i
        }(),
        R = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "niceScale",
                value: function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0,
                        s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 10,
                        a = this.w,
                        n = void 0 === this.w.config.yaxis[i].max && void 0 === this.w.config.yaxis[i].min || this.w.config.yaxis[i].forceNiceScale;
                    if (t === Number.MIN_VALUE && 0 === e || !lt.isNumber(t) && !lt.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE) return t = 0, e = s, this.linearScale(t, e, s);
                    e < t ? (console.warn("yaxis.min cannot be greater than yaxis.max"), e = t + .1) : t === e && (t = 0 === t ? 0 : t - .5, e = 0 === e ? 2 : e + .5);
                    var r = [],
                        o = e - t;
                    o < 1 && n && ("candlestick" === a.config.chart.type || "candlestick" === a.config.series[i].type || a.globals.isRangeData) && (e *= 1.01), o < 1e-5 && n && (e *= 1.05);
                    var l = s + 1;
                    l < 2 ? l = 2 : 2 < l && (l -= 2);
                    for (var h = o / l, c = Math.floor(lt.log10(h)), d = Math.pow(10, c), u = parseInt(h / d) * d, g = u * Math.floor(t / u), f = u * Math.ceil(e / u), p = g; r.push(p), !((p += u) > f););
                    if (n) return {
                        result: r,
                        niceMin: r[0],
                        niceMax: r[r.length - 1]
                    };
                    var x = t;
                    (r = []).push(x);
                    for (var b = Math.abs(e - t) / s, m = 0; m <= s - 1; m++) x += b, r.push(x);
                    return {
                        result: r,
                        niceMin: r[0],
                        niceMax: r[r.length - 1]
                    }
                }
            }, {
                key: "linearScale",
                value: function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 10,
                        s = Math.abs(e - t) / i;
                    i === Number.MAX_VALUE && (i = 10, s = 1);
                    for (var a = [], n = t; 0 <= i;) a.push(n), n += s, i -= 1;
                    return {
                        result: a,
                        niceMin: a[0],
                        niceMax: a[a.length - 1]
                    }
                }
            }, {
                key: "logarithmicScale",
                value: function (t, a, n, e) {
                    (a < 0 || a === Number.MIN_VALUE) && (a = .01);
                    for (var r = Math.log(a) / Math.log(10), o = Math.log(n) / Math.log(10), i = Math.abs(n - a) / e, s = [], l = a; 0 <= e;) s.push(l), l += i, e -= 1;
                    var h = s.map(function (t, e) {
                        t <= 0 && (t = .01);
                        var i = (o - r) / (n - a),
                            s = Math.pow(10, r + i * (t - r));
                        return Math.round(s / lt.roundToBase(s, 10)) * lt.roundToBase(s, 10)
                    });
                    return 0 === h[0] && (h[0] = 1), {
                        result: h,
                        niceMin: h[0],
                        niceMax: h[h.length - 1]
                    }
                }
            }, {
                key: "setYScaleForIndex",
                value: function (t, e, i) {
                    var s = this.w.globals,
                        a = this.w.config,
                        n = s.isBarHorizontal ? a.xaxis : a.yaxis[t];
                    void 0 === s.yAxisScale[t] && (s.yAxisScale[t] = []), n.logarithmic ? (s.allSeriesCollapsed = !1, s.yAxisScale[t] = this.logarithmicScale(t, e, i, n.tickAmount ? n.tickAmount : Math.floor(Math.log10(i)))) : i !== -Number.MAX_VALUE && lt.isNumber(i) ? (s.allSeriesCollapsed = !1, void 0 === n.min && void 0 === n.max || n.forceNiceScale ? s.yAxisScale[t] = this.niceScale(e, i, t, n.tickAmount ? n.tickAmount : i < 5 && 1 < i ? i + 1 : 5) : s.yAxisScale[t] = this.linearScale(e, i, n.tickAmount)) : s.yAxisScale[t] = this.linearScale(0, 5, 5)
                }
            }, {
                key: "setMultipleYScales",
                value: function () {
                    var n = this,
                        r = this.w.globals,
                        o = this.w.config,
                        l = r.minYArr.concat([]),
                        h = r.maxYArr.concat([]),
                        c = [];
                    o.yaxis.forEach(function (i, s) {
                        var a = s;
                        o.series.forEach(function (t, e) {
                            t.name === i.seriesName && -1 === r.collapsedSeriesIndices.indexOf(e) && (s !== (a = e) ? c.push({
                                index: e,
                                similarIndex: s,
                                alreadyExists: !0
                            }) : c.push({
                                index: e
                            }))
                        });
                        var t = l[a],
                            e = h[a];
                        n.setYScaleForIndex(s, t, e)
                    }), this.sameScaleInMultipleAxes(l, h, c)
                }
            }, {
                key: "sameScaleInMultipleAxes",
                value: function (t, a, e) {
                    var r = this,
                        o = this.w.config,
                        l = this.w.globals,
                        h = [];
                    e.forEach(function (t) {
                        t.alreadyExists && (void 0 === h[t.index] && (h[t.index] = []), h[t.index].push(t.index), h[t.index].push(t.similarIndex))
                    }), h.forEach(function (a, n) {
                        h.forEach(function (t, e) {
                            var i, s;
                            n !== e && 0 < (i = a, s = t, i.filter(function (t) {
                                return -1 !== s.indexOf(t)
                            })).length && (h[n] = h[n].concat(h[e]))
                        })
                    });
                    var i = h.map(function (i) {
                        return i.filter(function (t, e) {
                            return i.indexOf(t) === e
                        })
                    }).map(function (t) {
                        return t.sort()
                    });
                    h = h.filter(function (t) {
                        return !!t
                    });
                    var n = i.slice(),
                        s = n.map(function (t) {
                            return JSON.stringify(t)
                        });
                    n = n.filter(function (t, e) {
                        return s.indexOf(JSON.stringify(t)) === e
                    });
                    var c = [],
                        d = [];
                    t.forEach(function (i, s) {
                        n.forEach(function (t, e) {
                            -1 < t.indexOf(s) && (void 0 === c[e] && (c[e] = [], d[e] = []), c[e].push({
                                key: s,
                                value: i
                            }), d[e].push({
                                key: s,
                                value: a[s]
                            }))
                        })
                    });
                    var u = Array.apply(null, Array(n.length)).map(Number.prototype.valueOf, Number.MIN_VALUE),
                        g = Array.apply(null, Array(n.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
                    c.forEach(function (t, i) {
                        t.forEach(function (t, e) {
                            u[i] = Math.min(t.value, u[i])
                        })
                    }), d.forEach(function (t, i) {
                        t.forEach(function (t, e) {
                            g[i] = Math.max(t.value, g[i])
                        })
                    }), t.forEach(function (t, n) {
                        d.forEach(function (i, t) {
                            var s = u[t],
                                a = g[t];
                            i.forEach(function (t, e) {
                                i[e].key === n && (void 0 !== o.yaxis[n].min && (s = "function" == typeof o.yaxis[n].min ? o.yaxis[n].min(l.minY) : o.yaxis[n].min), void 0 !== o.yaxis[n].max && (a = "function" == typeof o.yaxis[n].max ? o.yaxis[n].max(l.maxY) : o.yaxis[n].max), r.setYScaleForIndex(n, s, a))
                            })
                        })
                    })
                }
            }, {
                key: "autoScaleY",
                value: function (t, a) {
                    t || (t = this);
                    var n = [];
                    return t.w.config.series.forEach(function (t) {
                        var e, i, s = t.data.find(function (t) {
                            return t[0] >= a.xaxis.min
                        })[1];
                        i = e = s, t.data.forEach(function (t) {
                            t[0] <= a.xaxis.max && t[0] >= a.xaxis.min && (t[1] > i && null !== t[1] && (i = t[1]), t[1] < e && null !== t[1] && (e = t[1]))
                        }), e *= .95, i *= 1.05, n.push({
                            min: e,
                            max: i
                        })
                    }), n
                }
            }]), e
        }(),
        e = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.scales = new R(t)
            }
            return r(e, [{
                key: "init",
                value: function () {
                    this.setYRange(), this.setXRange(), this.setZRange()
                }
            }, {
                key: "getMinYMaxY",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : Number.MAX_VALUE,
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : -Number.MAX_VALUE,
                        s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                        a = this.w.globals,
                        n = -Number.MAX_VALUE,
                        r = Number.MIN_VALUE;
                    null === s && (s = t + 1);
                    var o = a.series,
                        l = o,
                        h = o;
                    "candlestick" === this.w.config.chart.type ? (l = a.seriesCandleL, h = a.seriesCandleH) : a.isRangeData && (l = a.seriesRangeStart, h = a.seriesRangeEnd);
                    for (var c = t; c < s; c++) {
                        a.dataPoints = Math.max(a.dataPoints, o[c].length);
                        for (var d = 0; d < a.series[c].length; d++) {
                            var u = o[c][d];
                            null !== u && lt.isNumber(u) ? (n = Math.max(n, h[c][d]), e = Math.min(e, l[c][d]), i = Math.max(i, l[c][d]), "candlestick" === this.w.config.chart.type && (n = Math.max(n, a.seriesCandleO[c][d]), n = Math.max(n, a.seriesCandleH[c][d]), n = Math.max(n, a.seriesCandleL[c][d]), i = n = Math.max(n, a.seriesCandleC[c][d])), lt.isFloat(u) && (u = lt.noExponents(u), a.yValueDecimal = Math.max(a.yValueDecimal, u.toString().split(".")[1].length)), r > l[c][d] && l[c][d] < 0 && (r = l[c][d])) : a.hasNullValues = !0
                        }
                    }
                    return {
                        minY: r,
                        maxY: n,
                        lowestY: e,
                        highestY: i
                    }
                }
            }, {
                key: "setYRange",
                value: function () {
                    var i = this.w.globals,
                        t = this.w.config;
                    i.maxY = -Number.MAX_VALUE, i.minY = Number.MIN_VALUE;
                    var e = Number.MAX_VALUE;
                    if (i.isMultipleYAxis)
                        for (var s = 0; s < i.series.length; s++) {
                            var a = this.getMinYMaxY(s, e, null, s + 1);
                            i.minYArr.push(a.minY), i.maxYArr.push(a.maxY), e = a.lowestY
                        }
                    var n = this.getMinYMaxY(0, e, null, i.series.length);
                    if (i.minY = n.minY, i.maxY = n.maxY, e = n.lowestY, t.chart.stacked) {
                        for (var r = [], o = [], l = 0; l < i.series[i.maxValsInArrayIndex].length; l++)
                            for (var h = 0, c = 0, d = 0; d < i.series.length; d++) null !== i.series[d][l] && lt.isNumber(i.series[d][l]) && (0 < i.series[d][l] ? h = h + parseFloat(i.series[d][l]) + 1e-4 : c += parseFloat(i.series[d][l])), d === i.series.length - 1 && (r.push(h), o.push(c));
                        for (var u = 0; u < r.length; u++) i.maxY = Math.max(i.maxY, r[u]), i.minY = Math.min(i.minY, o[u])
                    }
                    if (("line" === t.chart.type || "area" === t.chart.type || "candlestick" === t.chart.type) && i.minY === Number.MIN_VALUE && e !== -Number.MAX_VALUE && e !== i.maxY) {
                        var g = i.maxY - e;
                        0 <= e && e <= 10 && (g = 0), i.minY = e - 5 * g / 100, i.maxY = i.maxY + 5 * g / 100
                    }
                    return t.yaxis.map(function (t, e) {
                        void 0 !== t.max && ("number" == typeof t.max ? i.maxYArr[e] = t.max : "function" == typeof t.max && (i.maxYArr[e] = t.max(i.maxY)), i.maxY = i.maxYArr[e]), void 0 !== t.min && ("number" == typeof t.min ? i.minYArr[e] = t.min : "function" == typeof t.min && (i.minYArr[e] = t.min(i.minY)), i.minY = i.minYArr[e])
                    }), i.isBarHorizontal && (void 0 !== t.xaxis.min && "number" == typeof t.xaxis.min && (i.minY = t.xaxis.min), void 0 !== t.xaxis.max && "number" == typeof t.xaxis.max && (i.maxY = t.xaxis.max)), i.isMultipleYAxis ? (this.scales.setMultipleYScales(), i.minY = e, i.yAxisScale.forEach(function (t, e) {
                        i.minYArr[e] = t.niceMin, i.maxYArr[e] = t.niceMax
                    })) : (this.scales.setYScaleForIndex(0, i.minY, i.maxY), i.minY = i.yAxisScale[0].niceMin, i.maxY = i.yAxisScale[0].niceMax, i.minYArr[0] = i.yAxisScale[0].niceMin, i.maxYArr[0] = i.yAxisScale[0].niceMax), {
                        minY: i.minY,
                        maxY: i.maxY,
                        minYArr: i.minYArr,
                        maxYArr: i.maxYArr
                    }
                }
            }, {
                key: "setXRange",
                value: function () {
                    var t, a = this.w.globals,
                        e = this.w.config,
                        i = "numeric" === e.xaxis.type || "datetime" === e.xaxis.type || "category" === e.xaxis.type && !a.noLabelsProvided || a.noLabelsProvided || a.isXNumeric;
                    if (a.isXNumeric)
                        for (var s = 0; s < a.series.length; s++)
                            if (a.labels[s])
                                for (var n = 0; n < a.labels[s].length; n++) null !== a.labels[s][n] && lt.isNumber(a.labels[s][n]) && (a.maxX = Math.max(a.maxX, a.labels[s][n]), a.initialmaxX = Math.max(a.maxX, a.labels[s][n]), a.minX = Math.min(a.minX, a.labels[s][n]), a.initialminX = Math.min(a.minX, a.labels[s][n]));
                    if (a.noLabelsProvided && 0 === e.xaxis.categories.length && (a.maxX = a.labels[a.labels.length - 1], a.initialmaxX = a.labels[a.labels.length - 1], a.minX = 1, a.initialminX = 1), (a.comboChartsHasBars || "candlestick" === e.chart.type || "bar" === e.chart.type && "category" !== e.xaxis.type) && "category" !== e.xaxis.type) {
                        var r = a.minX - a.svgWidth / a.dataPoints * (Math.abs(a.maxX - a.minX) / a.svgWidth) / 2;
                        a.minX = r, a.initialminX = r;
                        var o = a.maxX + a.svgWidth / a.dataPoints * (Math.abs(a.maxX - a.minX) / a.svgWidth) / 2;
                        a.maxX = o, a.initialmaxX = o
                    }
                    if (!a.isXNumeric && !a.noLabelsProvided || e.xaxis.convertedCatToNumeric && !a.dataFormatXNumeric || (void 0 === e.xaxis.tickAmount ? (t = Math.round(a.svgWidth / 150), "numeric" === e.xaxis.type && a.dataPoints < 20 && (t = a.dataPoints - 1), t > a.dataPoints && 0 !== a.dataPoints && (t = a.dataPoints - 1)) : t = "dataPoints" === e.xaxis.tickAmount ? a.series[a.maxValsInArrayIndex].length - 1 : e.xaxis.tickAmount, void 0 !== e.xaxis.max && "number" == typeof e.xaxis.max && (a.maxX = e.xaxis.max), void 0 !== e.xaxis.min && "number" == typeof e.xaxis.min && (a.minX = e.xaxis.min), void 0 !== e.xaxis.range && (a.minX = a.maxX - e.xaxis.range), a.minX !== Number.MAX_VALUE && a.maxX !== -Number.MAX_VALUE ? a.xAxisScale = this.scales.linearScale(a.minX, a.maxX, t) : (a.xAxisScale = this.scales.linearScale(1, t, t), a.noLabelsProvided && 0 < a.labels.length && (a.xAxisScale = this.scales.linearScale(1, a.labels.length, t - 1), a.seriesX = a.labels.slice())), i && (a.labels = a.xAxisScale.result.slice())), a.minX === a.maxX)
                        if ("datetime" === e.xaxis.type) {
                            var l = new Date(a.minX);
                            l.setDate(l.getDate() - 2), a.minX = new Date(l).getTime();
                            var h = new Date(a.maxX);
                            h.setDate(h.getDate() + 2), a.maxX = new Date(h).getTime()
                        } else("numeric" === e.xaxis.type || "category" === e.xaxis.type && !a.noLabelsProvided) && (a.minX = a.minX - 2, a.maxX = a.maxX + 2);
                    return a.isXNumeric && (a.seriesX.forEach(function (t, s) {
                        t.forEach(function (t, e) {
                            if (0 < e) {
                                var i = t - a.seriesX[s][e - 1];
                                a.minXDiff = Math.min(i, a.minXDiff)
                            }
                        })
                    }), this.calcMinXDiffForTinySeries()), {
                        minX: a.minX,
                        maxX: a.maxX
                    }
                }
            }, {
                key: "calcMinXDiffForTinySeries",
                value: function () {
                    var t = this.w,
                        e = t.globals.labels.length;
                    return 1 === t.globals.labels.length ? t.globals.minXDiff = (t.globals.maxX - t.globals.minX) / e / 3 : t.globals.minXDiff === Number.MAX_VALUE && (0 < t.globals.timelineLabels.length && (e = t.globals.timelineLabels.length), e < 3 && (e = 3), t.globals.minXDiff = (t.globals.maxX - t.globals.minX) / e), t.globals.minXDiff
                }
            }, {
                key: "setZRange",
                value: function () {
                    var t = this.w.globals;
                    if (t.isDataXYZ)
                        for (var e = 0; e < t.series.length; e++)
                            if (void 0 !== t.seriesZ[e])
                                for (var i = 0; i < t.seriesZ[e].length; i++) null !== t.seriesZ[e][i] && lt.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]))
                }
            }]), e
        }(),
        D = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "getAllSeriesEls",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series")
                }
            }, {
                key: "getSeriesByName",
                value: function (t) {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-series.".concat(lt.escapeString(t)))
                }
            }, {
                key: "addCollapsedClassToSeries",
                value: function (t, e) {
                    for (var i = this.w, s = 0; s < i.globals.collapsedSeries.length; s++) i.globals.collapsedSeries[s].index === e && t.node.classList.add("apexcharts-series-collapsed")
                }
            }, {
                key: "toggleSeriesOnHover",
                value: function (t, e) {
                    var i = this.w,
                        s = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                    if ("mousemove" === t.type) {
                        var a = parseInt(e.getAttribute("rel")) - 1,
                            n = null;
                        n = i.globals.axisCharts || "radialBar" === i.config.chart.type ? i.globals.axisCharts ? i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(a, "']")) : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a + 1, "']")) : i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(a + 1, "'] path"));
                        for (var r = 0; r < s.length; r++) s[r].classList.add("legend-mouseover-inactive");
                        null !== n && (i.globals.axisCharts || n.parentNode.classList.remove("legend-mouseover-inactive"), n.classList.remove("legend-mouseover-inactive"))
                    } else if ("mouseout" === t.type)
                        for (var o = 0; o < s.length; o++) s[o].classList.remove("legend-mouseover-inactive")
                }
            }, {
                key: "highlightRangeInSeries",
                value: function (t, e) {
                    var i = this.w,
                        s = i.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap-rect"),
                        a = function () {
                            for (var t = 0; t < s.length; t++) s[t].classList.remove("legend-mouseover-inactive")
                        };
                    if ("mousemove" === t.type) {
                        var n = parseInt(e.getAttribute("rel")) - 1;
                        a(),
                            function () {
                                for (var t = 0; t < s.length; t++) s[t].classList.add("legend-mouseover-inactive")
                            }(),
                            function (t) {
                                for (var e = 0; e < s.length; e++) {
                                    var i = parseInt(s[e].getAttribute("val"));
                                    i >= t.from && i <= t.to && s[e].classList.remove("legend-mouseover-inactive")
                                }
                            }(i.config.plotOptions.heatmap.colorScale.ranges[n])
                    } else "mouseout" === t.type && a()
                }
            }, {
                key: "getActiveSeriesIndex",
                value: function () {
                    var i = this.w,
                        t = 0;
                    if (1 < i.globals.series.length)
                        for (var e = i.globals.series.map(function (t, e) {
                                return 0 < t.length && "bar" !== i.config.series[e].type && "column" !== i.config.series[e].type ? e : -1
                            }), s = 0; s < e.length; s++)
                            if (-1 !== e[s]) {
                                t = e[s];
                                break
                            } return t
                }
            }, {
                key: "getActiveConfigSeriesIndex",
                value: function () {
                    var t = this.w,
                        e = 0;
                    if (1 < t.config.series.length)
                        for (var i = t.config.series.map(function (t, e) {
                                return t.data && 0 < t.data.length ? e : -1
                            }), s = 0; s < i.length; s++)
                            if (-1 !== i[s]) {
                                e = i[s];
                                break
                            } return e
                }
            }, {
                key: "getPreviousPaths",
                value: function () {
                    var o = this.w;

                    function t(t, e, i) {
                        for (var s = t[e].childNodes, a = {
                                type: i,
                                paths: [],
                                realIndex: t[e].getAttribute("data:realIndex")
                            }, n = 0; n < s.length; n++)
                            if (s[n].hasAttribute("pathTo")) {
                                var r = s[n].getAttribute("pathTo");
                                a.paths.push({
                                    d: r
                                })
                            } o.globals.previousPaths.push(a)
                    }
                    o.globals.previousPaths = [];
                    var e = o.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-series");
                    if (0 < e.length)
                        for (var i = e.length - 1; 0 <= i; i--) t(e, i, "line");
                    var s = o.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-series");
                    if (0 < s.length)
                        for (var a = s.length - 1; 0 <= a; a--) t(s, a, "area");
                    var n = o.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series .apexcharts-series");
                    if (0 < n.length)
                        for (var r = 0; r < n.length; r++) t(n, r, "bar");
                    var l = o.globals.dom.baseEl.querySelectorAll(".apexcharts-candlestick-series .apexcharts-series");
                    if (0 < l.length)
                        for (var h = 0; h < l.length; h++) t(l, h, "candlestick");
                    var c = o.globals.dom.baseEl.querySelectorAll(".apexcharts-radar-series .apexcharts-series");
                    if (0 < c.length)
                        for (var d = 0; d < c.length; d++) t(c, d, "radar");
                    var u = o.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series");
                    if (0 < u.length)
                        for (var g = 0; g < u.length; g++) {
                            for (var f = o.globals.dom.baseEl.querySelectorAll(".apexcharts-bubble-series .apexcharts-series[data\\:realIndex='".concat(g, "'] circle")), p = [], x = 0; x < f.length; x++) p.push({
                                x: f[x].getAttribute("cx"),
                                y: f[x].getAttribute("cy"),
                                r: f[x].getAttribute("r")
                            });
                            o.globals.previousPaths.push(p)
                        }
                    var b = o.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series");
                    if (0 < b.length)
                        for (var m = 0; m < b.length; m++) {
                            for (var v = o.globals.dom.baseEl.querySelectorAll(".apexcharts-scatter-series .apexcharts-series[data\\:realIndex='".concat(m, "'] circle")), y = [], w = 0; w < v.length; w++) y.push({
                                x: v[w].getAttribute("cx"),
                                y: v[w].getAttribute("cy"),
                                r: v[w].getAttribute("r")
                            });
                            o.globals.previousPaths.push(y)
                        }
                    var k = o.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series");
                    if (0 < k.length)
                        for (var A = 0; A < k.length; A++) {
                            for (var S = o.globals.dom.baseEl.querySelectorAll(".apexcharts-heatmap .apexcharts-series[data\\:realIndex='".concat(A, "'] rect")), C = [], L = 0; L < S.length; L++) C.push({
                                color: S[L].getAttribute("color")
                            });
                            o.globals.previousPaths.push(C)
                        }
                    o.globals.axisCharts || (o.globals.previousPaths = o.globals.series)
                }
            }, {
                key: "handleNoData",
                value: function () {
                    var t = this.w,
                        e = t.config.noData,
                        i = new ht(this.ctx),
                        s = t.globals.svgWidth / 2,
                        a = t.globals.svgHeight / 2,
                        n = "middle";
                    if (t.globals.noData = !0, t.globals.animationEnded = !0, "left" === e.align ? (s = 10, n = "start") : "right" === e.align && (s = t.globals.svgWidth - 10, n = "end"), "top" === e.verticalAlign ? a = 50 : "bottom" === e.verticalAlign && (a = t.globals.svgHeight - 50), s += e.offsetX, a = a + parseInt(e.style.fontSize) + 2, void 0 !== e.text && "" !== e.text) {
                        var r = i.drawText({
                            x: s,
                            y: a,
                            text: e.text,
                            textAnchor: n,
                            fontSize: e.style.fontSize,
                            fontFamily: e.style.fontFamily,
                            foreColor: e.style.color,
                            opacity: 1,
                            class: "apexcharts-text-nodata"
                        });
                        r.node.setAttribute("class", "apexcharts-title-text"), t.globals.dom.Paper.add(r)
                    }
                }
            }, {
                key: "setNullSeriesToZeroValues",
                value: function (t) {
                    for (var e = this.w, i = 0; i < t.length; i++)
                        if (0 === t[i].length)
                            for (var s = 0; s < t[e.globals.maxValsInArrayIndex].length; s++) t[i].push(0);
                    return t
                }
            }, {
                key: "hasAllSeriesEqualX",
                value: function () {
                    for (var t = !0, e = this.w, i = this.filteredSeriesX(), s = 0; s < i.length - 1; s++)
                        if (i[s][0] !== i[s + 1][0]) {
                            t = !1;
                            break
                        } return e.globals.allSeriesHasEqualX = t
                }
            }, {
                key: "filteredSeriesX",
                value: function () {
                    return this.w.globals.seriesX.map(function (t, e) {
                        return 0 < t.length ? t : []
                    })
                }
            }]), e
        }(),
        N = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.lgRect = {}, this.yAxisWidth = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.xPadRight = 0, this.xPadLeft = 0
            }
            return r(e, [{
                key: "plotCoords",
                value: function () {
                    var t = this.w,
                        e = t.globals,
                        i = this.getLegendsRect();
                    e.axisCharts ? this.setGridCoordsForAxisCharts(i) : this.setGridCoordsForNonAxisCharts(i), this.titleSubtitleOffset(), e.gridHeight = e.gridHeight - t.config.grid.padding.top - t.config.grid.padding.bottom, e.gridWidth = e.gridWidth - t.config.grid.padding.left - t.config.grid.padding.right - this.xPadRight - this.xPadLeft, e.translateX = e.translateX + t.config.grid.padding.left + this.xPadLeft, e.translateY = e.translateY + t.config.grid.padding.top
                }
            }, {
                key: "conditionalChecksForAxisCoords",
                value: function (t, e) {
                    var i = this.w;
                    this.xAxisHeight = (t.height + e.height) * i.globals.LINE_HEIGHT_RATIO + 15, this.xAxisWidth = t.width, this.xAxisHeight - e.height > i.config.xaxis.labels.maxHeight && (this.xAxisHeight = i.config.xaxis.labels.maxHeight), i.config.xaxis.labels.minHeight && this.xAxisHeight < i.config.xaxis.labels.minHeight && (this.xAxisHeight = i.config.xaxis.labels.minHeight), i.config.xaxis.floating && (this.xAxisHeight = 0), i.globals.isBarHorizontal ? this.yAxisWidth = i.globals.yLabelsCoords[0].width + i.globals.yTitleCoords[0].width + 15 : this.yAxisWidth = this.getTotalYAxisWidth();
                    var s = 0,
                        a = 0;
                    i.config.yaxis.forEach(function (t) {
                        s += t.labels.minWidth, a += t.labels.maxWidth
                    }), this.yAxisWidth < s && (this.yAxisWidth = s), this.yAxisWidth > a && (this.yAxisWidth = a)
                }
            }, {
                key: "setGridCoordsForAxisCharts",
                value: function (t) {
                    var i = this.w,
                        e = i.globals,
                        s = this.getyAxisLabelsCoords(),
                        a = this.getxAxisLabelsCoords(),
                        n = this.getyAxisTitleCoords(),
                        r = this.getxAxisTitleCoords();
                    i.globals.yLabelsCoords = [], i.globals.yTitleCoords = [], i.config.yaxis.map(function (t, e) {
                        i.globals.yLabelsCoords.push({
                            width: s[e].width,
                            index: e
                        }), i.globals.yTitleCoords.push({
                            width: n[e].width,
                            index: e
                        })
                    }), this.conditionalChecksForAxisCoords(a, r), e.translateXAxisY = i.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, e.translateXAxisX = i.globals.rotateXLabels && i.globals.isXNumeric && i.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, i.globals.isBarHorizontal && (e.rotateXLabels = !1, e.translateXAxisY = parseInt(i.config.xaxis.labels.style.fontSize) / 1.5 * -1), e.translateXAxisY = e.translateXAxisY + i.config.xaxis.labels.offsetY, e.translateXAxisX = e.translateXAxisX + i.config.xaxis.labels.offsetX;
                    var o = this.yAxisWidth,
                        l = this.xAxisHeight;
                    e.xAxisLabelsHeight = this.xAxisHeight, e.xAxisHeight = this.xAxisHeight;
                    var h = 10;
                    switch (i.config.grid.show && "radar" !== i.config.chart.type || (o = 0, l = 35), this.isSparkline && (t = {
                        height: 0,
                        width: 0
                    }, h = o = l = 0), this.additionalPaddingXLabels(a), i.config.legend.position) {
                        case "bottom":
                            e.translateY = h, e.translateX = o, e.gridHeight = e.svgHeight - t.height - l - (this.isSparkline ? 0 : i.globals.rotateXLabels ? 10 : 15), e.gridWidth = e.svgWidth - o;
                            break;
                        case "top":
                            e.translateY = t.height + h, e.translateX = o, e.gridHeight = e.svgHeight - t.height - l - (this.isSparkline ? 0 : i.globals.rotateXLabels ? 10 : 15), e.gridWidth = e.svgWidth - o;
                            break;
                        case "left":
                            e.translateY = h, e.translateX = t.width + o, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - t.width - o;
                            break;
                        case "right":
                            e.translateY = h, e.translateX = o, e.gridHeight = e.svgHeight - l - 12, e.gridWidth = e.svgWidth - t.width - o - 5;
                            break;
                        default:
                            throw new Error("Legend position not supported")
                    }
                    this.setGridXPosForDualYAxis(n, s), new X(this.ctx).setYAxisXPosition(s, n)
                }
            }, {
                key: "setGridCoordsForNonAxisCharts",
                value: function (t) {
                    var e = this.w,
                        i = e.globals,
                        s = 0;
                    e.config.legend.show && !e.config.legend.floating && (s = 20);
                    var a = 10,
                        n = 0;
                    if ("pie" === e.config.chart.type || "donut" === e.config.chart.type ? (a += e.config.plotOptions.pie.offsetY, n += e.config.plotOptions.pie.offsetX) : "radialBar" === e.config.chart.type && (a += e.config.plotOptions.radialBar.offsetY, n += e.config.plotOptions.radialBar.offsetX), !e.config.legend.show) return i.gridHeight = i.svgHeight - 35, i.gridWidth = i.gridHeight, i.translateY = a - 10, void(i.translateX = n + (i.svgWidth - i.gridWidth) / 2);
                    switch (e.config.legend.position) {
                        case "bottom":
                            i.gridHeight = i.svgHeight - t.height - 35, i.gridWidth = i.gridHeight, i.translateY = a - 20, i.translateX = n + (i.svgWidth - i.gridWidth) / 2;
                            break;
                        case "top":
                            i.gridHeight = i.svgHeight - t.height - 35, i.gridWidth = i.gridHeight, i.translateY = t.height + a, i.translateX = n + (i.svgWidth - i.gridWidth) / 2;
                            break;
                        case "left":
                            i.gridWidth = i.svgWidth - t.width - s, i.gridHeight = i.gridWidth, i.translateY = a, i.translateX = n + t.width + s;
                            break;
                        case "right":
                            i.gridWidth = i.svgWidth - t.width - s - 5, i.gridHeight = i.gridWidth, i.translateY = a, i.translateX = n + 10;
                            break;
                        default:
                            throw new Error("Legend position not supported")
                    }
                }
            }, {
                key: "setGridXPosForDualYAxis",
                value: function (i, s) {
                    var a = this.w;
                    a.config.yaxis.map(function (t, e) {
                        -1 === a.globals.ignoreYAxisIndexes.indexOf(e) && !a.config.yaxis[e].floating && a.config.yaxis[e].show && t.opposite && (a.globals.translateX = a.globals.translateX - (s[e].width + i[e].width) - parseInt(a.config.yaxis[e].labels.style.fontSize) / 1.2 - 12)
                    })
                }
            }, {
                key: "additionalPaddingXLabels",
                value: function (a) {
                    var n = this,
                        r = this.w;
                    if ("category" === r.config.xaxis.type && r.globals.isBarHorizontal || "numeric" === r.config.xaxis.type || "datetime" === r.config.xaxis.type) {
                        var o = r.globals.isXNumeric;
                        r.config.yaxis.forEach(function (t, e) {
                            var i, s;
                            (!t.show || t.floating || -1 !== r.globals.collapsedSeriesIndices.indexOf(e) || o || t.opposite && r.globals.isBarHorizontal) && ((o && r.globals.isMultipleYAxis && -1 !== r.globals.collapsedSeriesIndices.indexOf(e) || r.globals.isBarHorizontal && t.opposite) && (i = a, r.config.grid.padding.left < i.width && (n.xPadLeft = i.width / 2 + 1)), (!r.globals.isBarHorizontal && t.opposite && -1 !== r.globals.collapsedSeriesIndices.indexOf(e) || o && !r.globals.isMultipleYAxis) && (s = a, n.timescaleLabels ? n.timescaleLabels[n.timescaleLabels.length - 1].position + s.width > r.globals.gridWidth ? r.globals.skipLastTimelinelabel = !0 : r.globals.skipLastTimelinelabel = !1 : "datetime" !== r.config.xaxis.type && r.config.grid.padding.right < s.width && (n.xPadRight = s.width / 2 + 1)))
                        })
                    }
                }
            }, {
                key: "titleSubtitleOffset",
                value: function () {
                    var t = this.w,
                        e = t.globals,
                        i = this.isSparkline || !t.globals.axisCharts ? 0 : 10;
                    void 0 !== t.config.title.text ? i += t.config.title.margin : i += this.isSparkline || !t.globals.axisCharts ? 0 : 5, void 0 !== t.config.subtitle.text ? i += t.config.subtitle.margin : i += this.isSparkline || !t.globals.axisCharts ? 0 : 5, t.config.legend.show && "bottom" === t.config.legend.position && !t.config.legend.floating && 1 < t.config.series.length && (i += 10);
                    var s = this.getTitleSubtitleCoords("title"),
                        a = this.getTitleSubtitleCoords("subtitle");
                    e.gridHeight = e.gridHeight - s.height - a.height - i, e.translateY = e.translateY + s.height + a.height + i
                }
            }, {
                key: "getTotalYAxisWidth",
                value: function () {
                    var s = this.w,
                        a = 0,
                        n = 10,
                        r = function (t) {
                            return -1 < s.globals.ignoreYAxisIndexes.indexOf(t)
                        };
                    return s.globals.yLabelsCoords.map(function (t, e) {
                        var i = s.config.yaxis[e].floating;
                        0 < t.width && !i ? (a = a + t.width + n, r(e) && (a = a - t.width - n)) : a += i || !s.config.yaxis[e].show ? 0 : 5
                    }), s.globals.yTitleCoords.map(function (t, e) {
                        var i = s.config.yaxis[e].floating;
                        n = parseInt(s.config.yaxis[e].title.style.fontSize), 0 < t.width && !i ? (a = a + t.width + n, r(e) && (a = a - t.width - n)) : a += i || !s.config.yaxis[e].show ? 0 : 5
                    }), a
                }
            }, {
                key: "getxAxisTimeScaleLabelsCoords",
                value: function () {
                    var t, e = this.w;
                    this.timescaleLabels = e.globals.timelineLabels.slice(), e.globals.isBarHorizontal && "datetime" === e.config.xaxis.type && (this.timescaleLabels = e.globals.invertedTimelineLabels.slice());
                    var i = this.timescaleLabels.map(function (t) {
                            return t.value
                        }),
                        s = i.reduce(function (t, e) {
                            return void 0 === t ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : t.length > e.length ? t : e
                        }, 0);
                    return 1.05 * (t = new ht(this.ctx).getTextRects(s, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && 0 !== e.config.xaxis.labels.rotate && (e.globals.overlappingXLabels = !0), t
                }
            }, {
                key: "getxAxisLabelsCoords",
                value: function () {
                    var t, e = this.w,
                        i = e.globals.labels.slice();
                    if (0 < e.globals.timelineLabels.length) {
                        var s = this.getxAxisTimeScaleLabelsCoords();
                        t = {
                            width: s.width,
                            height: s.height
                        }
                    } else {
                        var a = "left" !== e.config.legend.position || "right" !== e.config.legend.position || e.config.legend.floating ? 0 : this.lgRect.width,
                            n = e.globals.xLabelFormatter,
                            r = i.reduce(function (t, e) {
                                return t.length > e.length ? t : e
                            }, 0);
                        e.globals.isBarHorizontal && (r = e.globals.yAxisScale[0].result.reduce(function (t, e) {
                            return t.length > e.length ? t : e
                        }, 0)), r = new m(this.ctx).xLabelFormat(n, r);
                        var o = new ht(this.ctx),
                            l = o.getTextRects(r, e.config.xaxis.labels.style.fontSize);
                        (t = {
                            width: l.width,
                            height: l.height
                        }).width * i.length > e.globals.svgWidth - a - this.yAxisWidth && 0 !== e.config.xaxis.labels.rotate ? e.globals.isBarHorizontal || (e.globals.rotateXLabels = !0, l = o.getTextRects(r, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1), t.height = l.height / 1.66) : e.globals.rotateXLabels = !1
                    }
                    return e.config.xaxis.labels.show || (t = {
                        width: 0,
                        height: 0
                    }), {
                        width: t.width,
                        height: t.height
                    }
                }
            }, {
                key: "getyAxisLabelsCoords",
                value: function () {
                    var n = this,
                        r = this.w,
                        o = [],
                        l = 10;
                    return r.config.yaxis.map(function (t, e) {
                        if (t.show && t.labels.show && r.globals.yAxisScale[e].result.length) {
                            var i = r.globals.yLabelFormatters[e],
                                s = i(r.globals.yAxisScale[e].niceMax, -1);
                            void 0 !== s && 0 !== s.length || (s = r.globals.yAxisScale[e].niceMax), r.globals.isBarHorizontal && (l = 0, s = i(s = r.globals.labels.slice().reduce(function (t, e) {
                                return t.length > e.length ? t : e
                            }, 0), -1));
                            var a = new ht(n.ctx).getTextRects(s, t.labels.style.fontSize);
                            o.push({
                                width: a.width + l,
                                height: a.height
                            })
                        } else o.push({
                            width: 0,
                            height: 0
                        })
                    }), o
                }
            }, {
                key: "getxAxisTitleCoords",
                value: function () {
                    var t = this.w,
                        e = 0,
                        i = 0;
                    if (void 0 !== t.config.xaxis.title.text) {
                        var s = new ht(this.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
                        e = s.width, i = s.height
                    }
                    return {
                        width: e,
                        height: i
                    }
                }
            }, {
                key: "getyAxisTitleCoords",
                value: function () {
                    var s = this,
                        t = this.w,
                        a = [];
                    return t.config.yaxis.map(function (t, e) {
                        if (t.show && void 0 !== t.title.text) {
                            var i = new ht(s.ctx).getTextRects(t.title.text, t.title.style.fontSize, t.title.style.fontFamily, "rotate(-90 0 0)", !1);
                            a.push({
                                width: i.width,
                                height: i.height
                            })
                        } else a.push({
                            width: 0,
                            height: 0
                        })
                    }), a
                }
            }, {
                key: "getTitleSubtitleCoords",
                value: function (t) {
                    var e = this.w,
                        i = 0,
                        s = 0,
                        a = "title" === t ? e.config.title.floating : e.config.subtitle.floating,
                        n = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
                    if (null !== n && !a) {
                        var r = n.getBoundingClientRect();
                        i = r.width, s = e.globals.axisCharts ? r.height + 5 : r.height
                    }
                    return {
                        width: i,
                        height: s
                    }
                }
            }, {
                key: "getLegendsRect",
                value: function () {
                    var t = this.w,
                        e = t.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                        i = Object.assign({}, lt.getBoundingClientRect(e));
                    return null !== e && !t.config.legend.floating && t.config.legend.show ? this.lgRect = {
                        x: i.x,
                        y: i.y,
                        height: i.height,
                        width: 0 === i.height ? 0 : i.width
                    } : this.lgRect = {
                        x: 0,
                        y: 0,
                        height: 0,
                        width: 0
                    }, this.lgRect
                }
            }]), e
        }(),
        O = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.timeScaleArray = []
            }
            return r(e, [{
                key: "calculateTimeScaleTicks",
                value: function (t, e) {
                    var r = this,
                        o = this.w;
                    if (o.globals.allSeriesCollapsed) return o.globals.labels = [], o.globals.timelineLabels = [], [];
                    var i = new k(this.ctx),
                        s = (e - t) / 864e5;
                    this.determineInterval(s), o.globals.disableZoomIn = !1, o.globals.disableZoomOut = !1, s < .005 ? o.globals.disableZoomIn = !0 : 5e4 < s && (o.globals.disableZoomOut = !0);
                    var a = i.getTimeUnitsfromTimestamp(t, e),
                        n = o.globals.gridWidth / s,
                        l = n / 24,
                        h = l / 60,
                        c = Math.floor(24 * s),
                        d = Math.floor(24 * s * 60),
                        u = Math.floor(s),
                        g = Math.floor(s / 30),
                        f = Math.floor(s / 365),
                        p = {
                            minMinute: a.minMinute,
                            minHour: a.minHour,
                            minDate: a.minDate,
                            minMonth: a.minMonth,
                            minYear: a.minYear
                        },
                        x = {
                            firstVal: p,
                            currentMinute: p.minMinute,
                            currentHour: p.minHour,
                            currentMonthDate: p.minDate,
                            currentDate: p.minDate,
                            currentMonth: p.minMonth,
                            currentYear: p.minYear,
                            daysWidthOnXAxis: n,
                            hoursWidthOnXAxis: l,
                            minutesWidthOnXAxis: h,
                            numberOfMinutes: d,
                            numberOfHours: c,
                            numberOfDays: u,
                            numberOfMonths: g,
                            numberOfYears: f
                        };
                    switch (this.tickInterval) {
                        case "years":
                            this.generateYearScale(x);
                            break;
                        case "months":
                        case "half_year":
                            this.generateMonthScale(x);
                            break;
                        case "months_days":
                        case "months_fortnight":
                        case "days":
                        case "week_days":
                            this.generateDayScale(x);
                            break;
                        case "hours":
                            this.generateHourScale(x);
                            break;
                        case "minutes":
                            this.generateMinuteScale(x)
                    }
                    var b = this.timeScaleArray.map(function (t) {
                        var e = {
                            position: t.position,
                            unit: t.unit,
                            year: t.year,
                            day: t.day ? t.day : 1,
                            hour: t.hour ? t.hour : 0,
                            month: t.month + 1
                        };
                        return "month" === t.unit ? ot({}, e, {
                            value: t.value + 1
                        }) : "day" === t.unit || "hour" === t.unit ? ot({}, e, {
                            value: t.value
                        }) : "minute" === t.unit ? ot({}, e, {
                            value: t.value,
                            minute: t.value
                        }) : t
                    });
                    return b.filter(function (t) {
                        var e = 1,
                            i = Math.ceil(o.globals.gridWidth / 120),
                            s = t.value;
                        void 0 !== o.config.xaxis.tickAmount && (i = o.config.xaxis.tickAmount), b.length > i && (e = Math.floor(b.length / i));
                        var a = !1,
                            n = !1;
                        switch (r.tickInterval) {
                            case "half_year":
                                e = 7, "year" === t.unit && (a = !0);
                                break;
                            case "months":
                                e = 1, "year" === t.unit && (a = !0);
                                break;
                            case "months_fortnight":
                                e = 15, "year" !== t.unit && "month" !== t.unit || (a = !0), 30 === s && (n = !0);
                                break;
                            case "months_days":
                                e = 10, "month" === t.unit && (a = !0), 30 === s && (n = !0);
                                break;
                            case "week_days":
                                e = 8, "month" === t.unit && (a = !0);
                                break;
                            case "days":
                                e = 1, "month" === t.unit && (a = !0);
                                break;
                            case "hours":
                                "day" === t.unit && (a = !0);
                                break;
                            case "minutes":
                                s % 5 != 0 && (n = !0)
                        }
                        if ("minutes" === r.tickInterval || "hours" === r.tickInterval) {
                            if (!n) return !0
                        } else if ((s % e == 0 || a) && !n) return !0
                    })
                }
            }, {
                key: "recalcDimensionsBasedOnFormat",
                value: function (t, e) {
                    var i = this.w,
                        s = this.formatDates(t),
                        a = this.removeOverlappingTS(s);
                    e ? i.globals.invertedTimelineLabels = a.slice() : i.globals.timelineLabels = a.slice(), new N(this.ctx).plotCoords()
                }
            }, {
                key: "determineInterval",
                value: function (t) {
                    switch (!0) {
                        case 1825 < t:
                            this.tickInterval = "years";
                            break;
                        case 800 < t && t <= 1825:
                            this.tickInterval = "half_year";
                            break;
                        case 180 < t && t <= 800:
                            this.tickInterval = "months";
                            break;
                        case 90 < t && t <= 180:
                            this.tickInterval = "months_fortnight";
                            break;
                        case 60 < t && t <= 90:
                            this.tickInterval = "months_days";
                            break;
                        case 30 < t && t <= 60:
                            this.tickInterval = "week_days";
                            break;
                        case 2 < t && t <= 30:
                            this.tickInterval = "days";
                            break;
                        case .1 < t && t <= 2:
                            this.tickInterval = "hours";
                            break;
                        case t < .1:
                            this.tickInterval = "minutes";
                            break;
                        default:
                            this.tickInterval = "days"
                    }
                }
            }, {
                key: "generateYearScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentMonth,
                        s = t.currentYear,
                        a = t.daysWidthOnXAxis,
                        n = t.numberOfYears,
                        r = e.minYear,
                        o = 0,
                        l = new k(this.ctx);
                    if (1 < e.minDate && 0 < e.minMonth) {
                        var h = l.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
                        o = (l.determineDaysOfYear(e.minYear) - h + 1) * a, r = e.minYear + 1, this.timeScaleArray.push({
                            position: o,
                            value: r,
                            unit: "year",
                            year: r,
                            month: lt.monthMod(i + 1)
                        })
                    } else 1 === e.minDate && 0 === e.minMonth && this.timeScaleArray.push({
                        position: o,
                        value: r,
                        unit: "year",
                        year: s,
                        month: lt.monthMod(i + 1)
                    });
                    for (var c = r, d = o, u = 0; u < n; u++) c++, d = l.determineDaysOfYear(c - 1) * a + d, this.timeScaleArray.push({
                        position: d,
                        value: c,
                        unit: "year",
                        year: c,
                        month: 1
                    })
                }
            }, {
                key: "generateMonthScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentMonthDate,
                        s = t.currentMonth,
                        a = t.currentYear,
                        n = t.daysWidthOnXAxis,
                        r = t.numberOfMonths,
                        o = s,
                        l = 0,
                        h = new k(this.ctx),
                        c = "month",
                        d = 0;
                    if (1 < e.minDate) {
                        l = (h.determineDaysOfMonths(s + 1, e.minYear) - i + 1) * n, o = lt.monthMod(s + 1);
                        var u = a + d,
                            g = lt.monthMod(o),
                            f = o;
                        0 === o && (c = "year", f = u, u += d += g = 1), this.timeScaleArray.push({
                            position: l,
                            value: f,
                            unit: c,
                            year: u,
                            month: g
                        })
                    } else this.timeScaleArray.push({
                        position: l,
                        value: o,
                        unit: c,
                        year: a,
                        month: lt.monthMod(s)
                    });
                    for (var p = o + 1, x = l, b = 0, m = 1; b < r; b++, m++) {
                        0 === (p = lt.monthMod(p)) ? (c = "year", d += 1) : c = "month";
                        var v = a + Math.floor(p / 12) + d;
                        x = h.determineDaysOfMonths(p, v) * n + x;
                        var y = 0 === p ? v : p;
                        this.timeScaleArray.push({
                            position: x,
                            value: y,
                            unit: c,
                            year: v,
                            month: 0 === p ? 1 : p
                        }), p++
                    }
                }
            }, {
                key: "generateDayScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentMonth,
                        s = t.currentYear,
                        a = t.hoursWidthOnXAxis,
                        n = t.numberOfDays,
                        r = new k(this.ctx),
                        o = "day",
                        l = (24 - e.minHour) * a,
                        h = e.minDate + 1,
                        c = h,
                        d = function (t, e, i) {
                            return t > r.determineDaysOfMonths(e + 1, i) && (o = "month", c = e += u = 1), e
                        },
                        u = h,
                        g = d(u, i, s);
                    this.timeScaleArray.push({
                        position: l,
                        value: c,
                        unit: o,
                        year: s,
                        month: lt.monthMod(g),
                        day: u
                    });
                    for (var f = l, p = 0; p < n; p++) {
                        o = "day", g = d(u += 1, g, s + Math.floor(g / 12) + 0);
                        var x = s + Math.floor(g / 12) + 0;
                        f = 24 * a + f;
                        var b = 1 === u ? lt.monthMod(g) : u;
                        this.timeScaleArray.push({
                            position: f,
                            value: b,
                            unit: o,
                            year: x,
                            month: lt.monthMod(g),
                            day: b
                        })
                    }
                }
            }, {
                key: "generateHourScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentDate,
                        s = t.currentMonth,
                        a = t.currentYear,
                        n = t.minutesWidthOnXAxis,
                        r = t.numberOfHours,
                        o = new k(this.ctx),
                        l = "hour",
                        h = function (t, e) {
                            return t > o.determineDaysOfMonths(e + 1, a) ? e += 1 : e
                        },
                        c = 60 - e.minMinute,
                        d = c * n,
                        u = e.minHour + 1,
                        g = u + 1;
                    60 === c && (d = 0, g = (u = e.minHour) + 1);
                    var f, p, x = i,
                        b = h(x, s);
                    this.timeScaleArray.push({
                        position: d,
                        value: u,
                        unit: l,
                        day: x,
                        hour: g,
                        year: a,
                        month: lt.monthMod(b)
                    });
                    for (var m = d, v = 0; v < r; v++) {
                        l = "hour", 24 <= g && (g = 0, l = "day", b = (f = x += 1, p = b, f > o.determineDaysOfMonths(p + 1, a) && (p += x = 1), {
                            month: p,
                            date: x
                        }).month, b = h(x, b));
                        var y = a + Math.floor(b / 12) + 0;
                        m = 0 === g && 0 === v ? c * n : 60 * n + m;
                        var w = 0 === g ? x : g;
                        this.timeScaleArray.push({
                            position: m,
                            value: w,
                            unit: l,
                            hour: g,
                            day: x,
                            year: y,
                            month: lt.monthMod(b)
                        }), g++
                    }
                }
            }, {
                key: "generateMinuteScale",
                value: function (t) {
                    var e = t.firstVal,
                        i = t.currentMinute,
                        s = t.currentHour,
                        a = t.currentDate,
                        n = t.currentMonth,
                        r = t.currentYear,
                        o = t.minutesWidthOnXAxis,
                        l = t.numberOfMinutes,
                        h = o - (i - e.minMinute),
                        c = e.minMinute + 1,
                        d = c + 1,
                        u = a,
                        g = n,
                        f = r,
                        p = s;
                    this.timeScaleArray.push({
                        position: h,
                        value: c,
                        unit: "minute",
                        day: u,
                        hour: p,
                        minute: d,
                        year: f,
                        month: lt.monthMod(g)
                    });
                    for (var x = h, b = 0; b < l; b++) {
                        60 <= d && (d = 0, 24 === (p += 1) && (p = 0));
                        var m = r + Math.floor(g / 12) + 0;
                        x = o + x;
                        var v = d;
                        this.timeScaleArray.push({
                            position: x,
                            value: v,
                            unit: "minute",
                            hour: p,
                            minute: d,
                            day: u,
                            year: m,
                            month: lt.monthMod(g)
                        }), d++
                    }
                }
            }, {
                key: "createRawDateString",
                value: function (t, e) {
                    var i = t.year;
                    return i += "-" + ("0" + t.month.toString()).slice(-2), "day" === t.unit ? i += "day" === t.unit ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), "hour" === t.unit ? i += "hour" === t.unit ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), i + ("minute" === t.unit ? ":" + ("0" + e).slice(-2) + ":00.000Z" : ":00:00.000Z")
                }
            }, {
                key: "formatDates",
                value: function (t) {
                    var o = this,
                        l = this.w;
                    return t.map(function (t) {
                        var e = t.value.toString(),
                            i = new k(o.ctx),
                            s = o.createRawDateString(t, e),
                            a = new Date(Date.parse(s));
                        if (void 0 === l.config.xaxis.labels.format) {
                            var n = "dd MMM",
                                r = l.config.xaxis.labels.datetimeFormatter;
                            "year" === t.unit && (n = r.year), "month" === t.unit && (n = r.month), "day" === t.unit && (n = r.day), "hour" === t.unit && (n = r.hour), "minute" === t.unit && (n = r.minute), e = i.formatDate(a, n, !0, !1)
                        } else e = i.formatDate(a, l.config.xaxis.labels.format);
                        return {
                            dateString: s,
                            position: t.position,
                            value: e,
                            unit: t.unit,
                            year: t.year,
                            month: t.month
                        }
                    })
                }
            }, {
                key: "removeOverlappingTS",
                value: function (a) {
                    var n = this,
                        r = new ht(this.ctx),
                        o = 0,
                        t = a.map(function (t, e) {
                            if (0 < e && n.w.config.xaxis.labels.hideOverlappingLabels) {
                                var i = r.getTextRects(a[o].value).width,
                                    s = a[o].position;
                                return t.position > s + i + 10 ? (o = e, t) : null
                            }
                            return t
                        });
                    return t.filter(function (t) {
                        return null !== t
                    })
                }
            }]), e
        }(),
        H = function () {
            function i(t, e) {
                n(this, i), this.ctx = e, this.w = e.w, this.el = t, this.coreUtils = new ct(this.ctx), this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = []
            }
            return r(i, [{
                key: "setupElements",
                value: function () {
                    var t = this.w.globals,
                        e = this.w.config,
                        i = e.chart.type;
                    t.axisCharts = -1 < ["line", "area", "bar", "rangeBar", "candlestick", "radar", "scatter", "bubble", "heatmap"].indexOf(i), t.xyCharts = -1 < ["line", "area", "bar", "rangeBar", "candlestick", "scatter", "bubble"].indexOf(i), t.isBarHorizontal = ("bar" === e.chart.type || "rangeBar" === e.chart.type) && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.cuid, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), ht.setAttrs(t.dom.elWrap, {
                        id: t.chartClass.substring(1),
                        class: "apexcharts-canvas " + t.chartClass.substring(1)
                    }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({
                        class: "apexcharts-svg",
                        "xmlns:data": "ApexChartsNS",
                        transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")")
                    }), t.dom.Paper.node.style.background = e.chart.background, this.setSVGDimensions(), t.dom.elGraphical = t.dom.Paper.group().attr({
                        class: "apexcharts-inner apexcharts-graphical"
                    }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elWrap.appendChild(t.dom.elLegendWrap), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs)
                }
            }, {
                key: "plotChartType",
                value: function (i, t) {
                    var s = this.w,
                        e = s.config,
                        a = s.globals,
                        n = {
                            series: [],
                            i: []
                        },
                        r = {
                            series: [],
                            i: []
                        },
                        o = {
                            series: [],
                            i: []
                        },
                        l = {
                            series: [],
                            i: []
                        },
                        h = {
                            series: [],
                            i: []
                        };
                    a.series.map(function (t, e) {
                        void 0 !== i[e].type ? ("column" === i[e].type || "bar" === i[e].type ? (s.config.plotOptions.bar.horizontal = !1, l.series.push(t), l.i.push(e)) : "area" === i[e].type ? (r.series.push(t), r.i.push(e)) : "line" === i[e].type ? (n.series.push(t), n.i.push(e)) : "scatter" === i[e].type ? (o.series.push(t), o.i.push(e)) : "bubble" === i[e].type || ("candlestick" === i[e].type ? (h.series.push(t), h.i.push(e)) : console.warn("You have specified an unrecognized chart type. Available types for this propery are line/area/column/bar/scatter/bubble")), a.comboCharts = !0) : (n.series.push(t), n.i.push(e))
                    });
                    var c = new M(this.ctx, t),
                        d = new A(this.ctx, t),
                        u = new T(this.ctx),
                        g = new z(this.ctx),
                        f = new E(this.ctx, t),
                        p = new L(this.ctx),
                        x = [];
                    if (a.comboCharts) {
                        if (0 < r.series.length && x.push(c.draw(r.series, "area", r.i)), 0 < l.series.length)
                            if (s.config.chart.stacked) {
                                var b = new y(this.ctx, t);
                                x.push(b.draw(l.series, l.i))
                            } else {
                                var m = new P(this.ctx, t);
                                x.push(m.draw(l.series, l.i))
                            } if (0 < n.series.length && x.push(c.draw(n.series, "line", n.i)), 0 < h.series.length && x.push(d.draw(h.series, h.i)), 0 < o.series.length) {
                            var v = new M(this.ctx, t, !0);
                            x.push(v.draw(o.series, "scatter", o.i))
                        }
                    } else switch (e.chart.type) {
                        case "line":
                            x = c.draw(a.series, "line");
                            break;
                        case "area":
                            x = c.draw(a.series, "area");
                            break;
                        case "bar":
                            x = e.chart.stacked ? new y(this.ctx, t).draw(a.series) : new P(this.ctx, t).draw(a.series);
                            break;
                        case "candlestick":
                            x = new A(this.ctx, t).draw(a.series);
                            break;
                        case "rangeBar":
                            x = f.draw(a.series);
                            break;
                        case "heatmap":
                            x = new C(this.ctx, t).draw(a.series);
                            break;
                        case "pie":
                        case "donut":
                            x = u.draw(a.series);
                            break;
                        case "radialBar":
                            x = g.draw(a.series);
                            break;
                        case "radar":
                            x = p.draw(a.series);
                            break;
                        default:
                            x = c.draw(a.series)
                    }
                    return x
                }
            }, {
                key: "setSVGDimensions",
                value: function () {
                    var t = this.w.globals,
                        e = this.w.config;
                    t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
                    var i = lt.getDimensions(this.el),
                        s = e.chart.width.toString().split(/[0-9]+/g).pop();
                    if ("%" === s ? lt.isNumber(i[0]) && (0 === i[0].width && (i = lt.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width) / 100) : "px" !== s && "" !== s || (t.svgWidth = parseInt(e.chart.width)), "auto" !== t.svgHeight && "" !== t.svgHeight)
                        if ("%" === e.chart.height.toString().split(/[0-9]+/g).pop()) {
                            var a = lt.getDimensions(this.el.parentNode);
                            t.svgHeight = a[1] * parseInt(e.chart.height) / 100
                        } else t.svgHeight = parseInt(e.chart.height);
                    else t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth;
                    ht.setAttrs(t.dom.Paper.node, {
                        width: t.svgWidth,
                        height: t.svgHeight
                    });
                    var n = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0;
                    t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + n + "px", t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px"
                }
            }, {
                key: "shiftGraphPosition",
                value: function () {
                    var t = this.w.globals,
                        e = t.translateY,
                        i = {
                            transform: "translate(" + t.translateX + ", " + e + ")"
                        };
                    ht.setAttrs(t.dom.elGraphical.node, i)
                }
            }, {
                key: "coreCalculations",
                value: function () {
                    new e(this.ctx).init()
                }
            }, {
                key: "resetGlobals",
                value: function () {
                    var t = this.w.globals;
                    t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesPercent = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.stackedSeriesTotals = [], t.labels = [], t.timelineLabels = [], t.noLabelsProvided = !1, t.timescaleTicks = [], t.resizeTimer = null, t.selectionResizeTimer = null, t.seriesXvalues = this.w.config.series.map(function (t) {
                        return []
                    }), t.seriesYvalues = this.w.config.series.map(function (t) {
                        return []
                    }), t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.isDataXYZ = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialmaxX = -Number.MAX_VALUE, t.initialminX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0
                }
            }, {
                key: "isMultipleY",
                value: function () {
                    if (this.w.config.yaxis.constructor === Array && 1 < this.w.config.yaxis.length) return this.w.config.chart.stacked = !1, this.w.globals.isMultipleYAxis = !0
                }
            }, {
                key: "excludeCollapsedSeriesInYAxis",
                value: function () {
                    var i = this,
                        t = this.w;
                    t.globals.ignoreYAxisIndexes = t.globals.collapsedSeries.map(function (t, e) {
                        if (i.w.globals.isMultipleYAxis) return t.index
                    })
                }
            }, {
                key: "isMultiFormat",
                value: function () {
                    return this.isFormatXY() || this.isFormat2DArray()
                }
            }, {
                key: "isFormatXY",
                value: function () {
                    var t = this.w.config.series.slice(),
                        e = new D(this.ctx);
                    if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && 0 < t[this.activeSeriesIndex].data.length && null !== t[this.activeSeriesIndex].data[0] && void 0 !== t[this.activeSeriesIndex].data[0].x && null !== t[this.activeSeriesIndex].data[0]) return !0
                }
            }, {
                key: "isFormat2DArray",
                value: function () {
                    var t = this.w.config.series.slice(),
                        e = new D(this.ctx);
                    if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), void 0 !== t[this.activeSeriesIndex].data && 0 < t[this.activeSeriesIndex].data.length && void 0 !== t[this.activeSeriesIndex].data[0] && null !== t[this.activeSeriesIndex].data[0] && t[this.activeSeriesIndex].data[0].constructor === Array) return !0
                }
            }, {
                key: "handleFormat2DArray",
                value: function (t, e) {
                    for (var i = this.w.config, s = this.w.globals, a = 0; a < t[e].data.length; a++)
                        if (void 0 !== t[e].data[a][1] && (Array.isArray(t[e].data[a][1]) && 4 === t[e].data[a][1].length ? this.twoDSeries.push(lt.parseNumber(t[e].data[a][1][3])) : this.twoDSeries.push(lt.parseNumber(t[e].data[a][1])), s.dataFormatXNumeric = !0), "datetime" === i.xaxis.type) {
                            var n = new Date(t[e].data[a][0]);
                            n = new Date(n).getTime(), this.twoDSeriesX.push(n)
                        } else this.twoDSeriesX.push(t[e].data[a][0]);
                    for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r][2] && (this.threeDSeries.push(t[e].data[r][2]), s.isDataXYZ = !0)
                }
            }, {
                key: "handleFormatXY",
                value: function (t, e) {
                    var i = this.w.config,
                        s = this.w.globals,
                        a = new k(this.ctx),
                        n = e; - 1 < s.collapsedSeriesIndices.indexOf(e) && (n = this.activeSeriesIndex);
                    for (var r = 0; r < t[e].data.length; r++) void 0 !== t[e].data[r].y && (Array.isArray(t[e].data[r].y) ? this.twoDSeries.push(lt.parseNumber(t[e].data[r].y[t[e].data[r].y.length - 1])) : this.twoDSeries.push(lt.parseNumber(t[e].data[r].y)));
                    for (var o = 0; o < t[n].data.length; o++) {
                        var l = "string" == typeof t[n].data[o].x,
                            h = !!a.isValidDate(t[n].data[o].x.toString());
                        l || h ? l ? "datetime" !== i.xaxis.type || s.isRangeData ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[n].data[o].x)) : this.twoDSeriesX.push(a.parseDate(t[n].data[o].x)) : "datetime" === i.xaxis.type ? this.twoDSeriesX.push(a.parseDate(t[n].data[o].x.toString())) : (s.dataFormatXNumeric = !0, s.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[n].data[o].x))) : (s.isXNumeric = !0, s.dataFormatXNumeric = !0, this.twoDSeriesX.push(t[n].data[o].x))
                    }
                    if (t[e].data[0] && void 0 !== t[e].data[0].z) {
                        for (var c = 0; c < t[e].data.length; c++) this.threeDSeries.push(t[e].data[c].z);
                        s.isDataXYZ = !0
                    }
                }
            }, {
                key: "handleRangeData",
                value: function (t, e) {
                    var i = this.w.globals,
                        s = {};
                    return this.isFormat2DArray() ? s = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(s.start), i.seriesRangeEnd.push(s.end), s
                }
            }, {
                key: "handleCandleStickData",
                value: function (t, e) {
                    var i = this.w.globals,
                        s = {};
                    return this.isFormat2DArray() ? s = this.handleCandleStickDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleCandleStickDataFormat("xy", t, e)), i.seriesCandleO.push(s.o), i.seriesCandleH.push(s.h), i.seriesCandleL.push(s.l), i.seriesCandleC.push(s.c), s
                }
            }, {
                key: "handleRangeDataFormat",
                value: function (t, e, i) {
                    var s = [],
                        a = [],
                        n = "Please provide [Start, End] values in valid format. Read more https://apexcharts.com/docs/series/#rangecharts",
                        r = new D(this.ctx).getActiveConfigSeriesIndex();
                    if ("array" === t) {
                        if (2 !== e[r].data[0][1].length) throw new Error(n);
                        for (var o = 0; o < e[i].data.length; o++) s.push(e[i].data[o][1][0]), a.push(e[i].data[o][1][1])
                    } else if ("xy" === t) {
                        if (2 !== e[r].data[0].y.length) throw new Error(n);
                        for (var l = 0; l < e[i].data.length; l++) s.push(e[i].data[l].y[0]), a.push(e[i].data[l].y[1])
                    }
                    return {
                        start: s,
                        end: a
                    }
                }
            }, {
                key: "handleCandleStickDataFormat",
                value: function (t, e, i) {
                    var s = [],
                        a = [],
                        n = [],
                        r = [],
                        o = "Please provide [Open, High, Low and Close] values in valid format. Read more https://apexcharts.com/docs/series/#candlestick";
                    if ("array" === t) {
                        if (4 !== e[i].data[0][1].length) throw new Error(o);
                        for (var l = 0; l < e[i].data.length; l++) s.push(e[i].data[l][1][0]), a.push(e[i].data[l][1][1]), n.push(e[i].data[l][1][2]), r.push(e[i].data[l][1][3])
                    } else if ("xy" === t) {
                        if (4 !== e[i].data[0].y.length) throw new Error(o);
                        for (var h = 0; h < e[i].data.length; h++) s.push(e[i].data[h].y[0]), a.push(e[i].data[h].y[1]), n.push(e[i].data[h].y[2]), r.push(e[i].data[h].y[3])
                    }
                    return {
                        o: s,
                        h: a,
                        l: n,
                        c: r
                    }
                }
            }, {
                key: "parseDataAxisCharts",
                value: function (t) {
                    for (var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.ctx, i = this.w.config, s = this.w.globals, a = new k(e), n = 0; n < t.length; n++) {
                        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], void 0 === t[n].data) return void console.error("It is a possibility that you may have not included 'data' property in series.");
                        if ("rangeBar" !== i.chart.type && "rangeArea" !== i.chart.type && "rangeBar" !== t[n].type && "rangeArea" !== t[n].type || (s.isRangeData = !0, this.handleRangeData(t, n)), this.isMultiFormat()) this.isFormat2DArray() ? this.handleFormat2DArray(t, n) : this.isFormatXY() && this.handleFormatXY(t, n), "candlestick" !== i.chart.type && "candlestick" !== t[n].type || this.handleCandleStickData(t, n), s.series.push(this.twoDSeries), s.labels.push(this.twoDSeriesX), s.seriesX.push(this.twoDSeriesX), this.fallbackToCategory || (s.isXNumeric = !0);
                        else {
                            if ("datetime" === i.xaxis.type) {
                                s.isXNumeric = !0;
                                for (var r = 0 < i.labels.length ? i.labels.slice() : i.xaxis.categories.slice(), o = 0; o < r.length; o++)
                                    if ("string" == typeof r[o]) {
                                        if (!a.isValidDate(r[o])) throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
                                        this.twoDSeriesX.push(a.parseDate(r[o]))
                                    } s.seriesX.push(this.twoDSeriesX)
                            } else if ("numeric" === i.xaxis.type) {
                                s.isXNumeric = !0;
                                var l = 0 < i.labels.length ? i.labels.slice() : i.xaxis.categories.slice();
                                0 < l.length && (this.twoDSeriesX = l, s.seriesX.push(this.twoDSeriesX))
                            }
                            s.labels.push(this.twoDSeriesX);
                            var h = t[n].data.map(function (t) {
                                return lt.parseNumber(t)
                            });
                            s.series.push(h)
                        }
                        s.seriesZ.push(this.threeDSeries), void 0 !== t[n].name ? s.seriesNames.push(t[n].name) : s.seriesNames.push("series-" + parseInt(n + 1))
                    }
                    return this.w
                }
            }, {
                key: "parseDataNonAxisCharts",
                value: function (t) {
                    var e = this.w.globals,
                        i = this.w.config;
                    e.series = t.slice(), e.seriesNames = i.labels.slice();
                    for (var s = 0; s < e.series.length; s++) void 0 === e.seriesNames[s] && e.seriesNames.push("series-" + (s + 1));
                    return this.w
                }
            }, {
                key: "handleExternalLabelsData",
                value: function (t) {
                    var e = this.w.config,
                        i = this.w.globals;
                    if (0 < e.xaxis.categories.length) i.labels = e.xaxis.categories;
                    else if (0 < e.labels.length) i.labels = e.labels.slice();
                    else if (this.fallbackToCategory) i.labels = i.labels[0];
                    else {
                        var s = [];
                        if (i.axisCharts) {
                            for (var a = 0; a < i.series[i.maxValsInArrayIndex].length; a++) s.push(a + 1);
                            for (var n = 0; n < t.length; n++) i.seriesX.push(s);
                            i.isXNumeric = !0
                        }
                        if (0 === s.length) {
                            s = [0, 10];
                            for (var r = 0; r < t.length; r++) i.seriesX.push(s)
                        }
                        i.labels = s, i.noLabelsProvided = !0
                    }
                }
            }, {
                key: "parseData",
                value: function (t) {
                    var e = this.w,
                        i = e.config,
                        s = e.globals;
                    if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.resetGlobals(), this.isMultipleY(), s.axisCharts ? this.parseDataAxisCharts(t) : this.parseDataNonAxisCharts(t), this.coreUtils.getLargestSeries(), "bar" === i.chart.type && i.chart.stacked) {
                        var a = new D(this.ctx);
                        s.series = a.setNullSeriesToZeroValues(s.series)
                    }
                    this.coreUtils.getSeriesTotals(), s.axisCharts && this.coreUtils.getStackedSeriesTotals(), this.coreUtils.getPercentSeries(), s.dataFormatXNumeric || s.isXNumeric && ("numeric" !== i.xaxis.type || 0 !== i.labels.length || 0 !== i.xaxis.categories.length) || this.handleExternalLabelsData(t)
                }
            }, {
                key: "xySettings",
                value: function () {
                    var t = null,
                        e = this.w;
                    if (e.globals.axisCharts && ("back" === e.config.xaxis.crosshairs.position && new b(this.ctx).drawXCrosshairs(), "back" === e.config.yaxis[0].crosshairs.position && new b(this.ctx).drawYCrosshairs(), t = this.coreUtils.getCalculatedRatios(), "datetime" === e.config.xaxis.type && void 0 === e.config.xaxis.labels.formatter)) {
                        var i, s = new O(this.ctx);
                        isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? (i = s.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX), s.recalcDimensionsBasedOnFormat(i, !1)) : e.globals.isBarHorizontal && (i = s.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY), s.recalcDimensionsBasedOnFormat(i, !0))
                    }
                    return t
                }
            }, {
                key: "drawAxis",
                value: function (t, e) {
                    var i, s, a = this.w.globals,
                        n = this.w.config,
                        r = new F(this.ctx),
                        o = new X(this.ctx);
                    a.axisCharts && "radar" !== t && (a.isBarHorizontal ? (s = o.drawYaxisInversed(0), i = r.drawXaxisInversed(0), a.dom.elGraphical.add(i), a.dom.elGraphical.add(s)) : (i = r.drawXaxis(), a.dom.elGraphical.add(i), n.yaxis.map(function (t, e) {
                        -1 === a.ignoreYAxisIndexes.indexOf(e) && (s = o.drawYaxis(e), a.dom.Paper.add(s))
                    }))), n.yaxis.map(function (t, e) {
                        -1 === a.ignoreYAxisIndexes.indexOf(e) && o.yAxisTitleRotate(e, t.opposite)
                    })
                }
            }, {
                key: "setupBrushHandler",
                value: function () {
                    var i = this,
                        a = this.w;
                    a.config.chart.brush.enabled && "function" != typeof a.config.chart.events.selection && (a.config.chart.brush.targets || [a.config.chart.brush.target]).forEach(function (t) {
                        var s = ApexCharts.getChartByID(t);
                        s.w.globals.brushSource = i.ctx;
                        var e = function () {
                            i.ctx._updateOptions({
                                chart: {
                                    selection: {
                                        xaxis: {
                                            min: s.w.globals.minX,
                                            max: s.w.globals.maxX
                                        }
                                    }
                                }
                            }, !1, !1)
                        };
                        "function" != typeof s.w.config.chart.events.zoomed && (s.w.config.chart.events.zoomed = function () {
                            e()
                        }), "function" != typeof s.w.config.chart.events.scrolled && (s.w.config.chart.events.scrolled = function () {
                            e()
                        }), a.config.chart.events.selection = function (t, e) {
                            var i = lt.clone(a.config.yaxis);
                            a.config.chart.brush.autoScaleYaxis && (i = new R(s).autoScaleY(s, e)), s._updateOptions({
                                xaxis: {
                                    min: e.xaxis.min,
                                    max: e.xaxis.max
                                },
                                yaxis: i
                            }, !1, !1, !1)
                        }
                    })
                }
            }]), i
        }(),
        W = setTimeout;

    function B() {}

    function V(t) {
        if (!(this instanceof V)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof t) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], Z(t, this)
    }

    function G(i, s) {
        for (; 3 === i._state;) i = i._value;
        0 !== i._state ? (i._handled = !0, V._immediateFn(function () {
            var t = 1 === i._state ? s.onFulfilled : s.onRejected;
            if (null !== t) {
                var e;
                try {
                    e = t(i._value)
                } catch (t) {
                    return void j(s.promise, t)
                }
                _(s.promise, e)
            } else(1 === i._state ? _ : j)(s.promise, i._value)
        })) : i._deferreds.push(s)
    }

    function _(t, e) {
        try {
            if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
            if (e && ("object" == typeof e || "function" == typeof e)) {
                var i = e.then;
                if (e instanceof V) return t._state = 3, t._value = e, void U(t);
                if ("function" == typeof i) return void Z((s = i, a = e, function () {
                    s.apply(a, arguments)
                }), t)
            }
            t._state = 1, t._value = e, U(t)
        } catch (e) {
            j(t, e)
        }
        var s, a
    }

    function j(t, e) {
        t._state = 2, t._value = e, U(t)
    }

    function U(t) {
        2 === t._state && 0 === t._deferreds.length && V._immediateFn(function () {
            t._handled || V._unhandledRejectionFn(t._value)
        });
        for (var e = 0, i = t._deferreds.length; e < i; e++) G(t, t._deferreds[e]);
        t._deferreds = null
    }

    function q(t, e, i) {
        this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
    }

    function Z(t, e) {
        var i = !1;
        try {
            t(function (t) {
                i || (i = !0, _(e, t))
            }, function (t) {
                i || (i = !0, j(e, t))
            })
        } catch (t) {
            if (i) return;
            i = !0, j(e, t)
        }
    }
    V.prototype.catch = function (t) {
        return this.then(null, t)
    }, V.prototype.then = function (t, e) {
        var i = new this.constructor(B);
        return G(this, new q(t, e, i)), i
    }, V.prototype.finally = function (e) {
        var i = this.constructor;
        return this.then(function (t) {
            return i.resolve(e()).then(function () {
                return t
            })
        }, function (t) {
            return i.resolve(e()).then(function () {
                return i.reject(t)
            })
        })
    }, V.all = function (e) {
        return new V(function (s, a) {
            if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
            var n = Array.prototype.slice.call(e);
            if (0 === n.length) return s([]);
            var r = n.length;

            function o(e, t) {
                try {
                    if (t && ("object" == typeof t || "function" == typeof t)) {
                        var i = t.then;
                        if ("function" == typeof i) return void i.call(t, function (t) {
                            o(e, t)
                        }, a)
                    }
                    n[e] = t, 0 == --r && s(n)
                } catch (e) {
                    a(e)
                }
            }
            for (var t = 0; t < n.length; t++) o(t, n[t])
        })
    }, V.resolve = function (e) {
        return e && "object" == typeof e && e.constructor === V ? e : new V(function (t) {
            t(e)
        })
    }, V.reject = function (i) {
        return new V(function (t, e) {
            e(i)
        })
    }, V.race = function (a) {
        return new V(function (t, e) {
            for (var i = 0, s = a.length; i < s; i++) a[i].then(t, e)
        })
    }, V._immediateFn = "function" == typeof setImmediate && function (t) {
        setImmediate(t)
    } || function (t) {
        W(t, 0)
    }, V._unhandledRejectionFn = function (t) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
    };
    var $, J, Q = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "getSvgString",
                value: function () {
                    return this.w.globals.dom.Paper.svg()
                }
            }, {
                key: "cleanup",
                value: function () {
                    var t = this.w,
                        e = t.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs"),
                        i = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs");
                    e && e.setAttribute("x", -500), i && (i.setAttribute("y1", -100), i.setAttribute("y2", -100))
                }
            }, {
                key: "svgUrl",
                value: function () {
                    this.cleanup();
                    var t = this.getSvgString(),
                        e = new Blob([t], {
                            type: "image/svg+xml;charset=utf-8"
                        });
                    return URL.createObjectURL(e)
                }
            }, {
                key: "dataURI",
                value: function () {
                    var h = this;
                    return new V(function (e) {
                        var t = h.w;
                        h.cleanup();
                        var i = document.createElement("canvas");
                        i.width = t.globals.svgWidth, i.height = t.globals.svgHeight;
                        var s = "transparent" === t.config.chart.background ? "#fff" : t.config.chart.background,
                            a = i.getContext("2d");
                        a.fillStyle = s, a.fillRect(0, 0, i.width, i.height);
                        var n = window.URL || window.webkitURL || window,
                            r = new Image;
                        r.crossOrigin = "anonymous";
                        var o = h.getSvgString(),
                            l = "data:image/svg+xml," + encodeURIComponent(o);
                        r.onload = function () {
                            a.drawImage(r, 0, 0), n.revokeObjectURL(l);
                            var t = i.toDataURL("image/png");
                            e(t)
                        }, r.src = l
                    })
                }
            }, {
                key: "exportToSVG",
                value: function () {
                    this.triggerDownload(this.svgUrl(), ".svg")
                }
            }, {
                key: "exportToPng",
                value: function () {
                    var e = this;
                    this.dataURI().then(function (t) {
                        e.triggerDownload(t, ".png")
                    })
                }
            }, {
                key: "triggerDownload",
                value: function (t, e) {
                    var i = document.createElement("a");
                    i.href = t, i.download = this.w.globals.chartID + e, document.body.appendChild(i), i.click(), document.body.removeChild(i)
                }
            }]), e
        }(),
        K = function () {
            function i(t) {
                n(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.anim = new Y(this.ctx), this.xaxisLabels = e.globals.labels.slice(), this.animX = e.config.grid.xaxis.lines.animate && e.config.chart.animations.enabled, this.animY = e.config.grid.yaxis.lines.animate && e.config.chart.animations.enabled, 0 < e.globals.timelineLabels.length && (this.xaxisLabels = e.globals.timelineLabels.slice())
            }
            return r(i, [{
                key: "drawGridArea",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        e = this.w,
                        i = new ht(this.ctx);
                    null === t && (t = i.group({
                        class: "apexcharts-grid"
                    }));
                    var s = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"),
                        a = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
                    return t.add(a), t.add(s), t
                }
            }, {
                key: "drawGrid",
                value: function () {
                    var t = this.w,
                        e = new F(this.ctx),
                        i = new X(this.ctx),
                        s = this.w.globals,
                        a = null;
                    if (s.axisCharts) {
                        if (t.config.grid.show) a = this.renderGrid(), s.dom.elGraphical.add(a.el), this.drawGridArea(a.el);
                        else {
                            var n = this.drawGridArea();
                            s.dom.elGraphical.add(n)
                        }
                        null !== a && e.xAxisLabelCorrections(a.xAxisTickWidth), i.setYAxisTextAlignments()
                    }
                }
            }, {
                key: "createGridMask",
                value: function () {
                    var t = this.w,
                        e = t.globals,
                        i = new ht(this.ctx),
                        s = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
                    if (Array.isArray(t.config.stroke.width)) {
                        var a = 0;
                        t.config.stroke.width.forEach(function (t) {
                            a = Math.max(a, t)
                        }), s = a
                    }
                    e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)), e.dom.elGridRect = i.drawRect(-s / 2, -s / 2, e.gridWidth + s, e.gridHeight + s, 0, "#fff"), new ct(this).getLargestMarkerSize();
                    var n = t.globals.markers.largestSize + t.config.markers.hover.sizeOffset + 1;
                    n < 10 && (n = 10), e.dom.elGridRectMarker = i.drawRect(2 * -n, 2 * -n, e.gridWidth + 4 * n, e.gridHeight + 4 * n, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
                    var r = e.dom.baseEl.querySelector("defs");
                    r.appendChild(e.dom.elGridRectMask), r.appendChild(e.dom.elGridRectMarkerMask)
                }
            }, {
                key: "renderGrid",
                value: function () {
                    var t = this.w,
                        e = new ht(this.ctx),
                        i = t.config.grid.strokeDashArray,
                        s = e.group({
                            class: "apexcharts-grid"
                        }),
                        a = e.group({
                            class: "apexcharts-gridlines-horizontal"
                        }),
                        n = e.group({
                            class: "apexcharts-gridlines-vertical"
                        });
                    s.add(a), s.add(n);
                    for (var r, o = 8, l = 0; l < t.globals.series.length && (void 0 !== t.globals.yAxisScale[l] && (o = t.globals.yAxisScale[l].result.length - 1), !(2 < o)); l++);
                    if (t.globals.isBarHorizontal) {
                        if (r = o, t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show)
                            for (var h, c = t.globals.padHorizontal, d = t.globals.gridHeight, u = 0; u < r + 1 && (h = c = c + t.globals.gridWidth / r + .3, u !== r - 1); u++) {
                                if (t.config.grid.xaxis.lines.show) {
                                    var g = e.drawLine(c, 0, h, d, t.config.grid.borderColor, i);
                                    g.node.classList.add("apexcharts-gridline"), n.add(g), this.animX && this.animateLine(g, {
                                        x1: 0,
                                        x2: 0
                                    }, {
                                        x1: c,
                                        x2: h
                                    })
                                }
                                new F(this.ctx).drawXaxisTicks(c, s)
                            }
                        if (t.config.grid.yaxis.lines.show)
                            for (var f = 0, p = 0, x = t.globals.gridWidth, b = 0; b < t.globals.dataPoints + 1; b++) {
                                var m = e.drawLine(0, f, x, p, t.config.grid.borderColor, i);
                                a.add(m), m.node.classList.add("apexcharts-gridline"), this.animY && this.animateLine(m, {
                                    y1: f + 20,
                                    y2: p + 20
                                }, {
                                    y1: f,
                                    y2: p
                                }), p = f += t.globals.gridHeight / t.globals.dataPoints
                            }
                    } else {
                        if (r = this.xaxisLabels.length, t.config.grid.xaxis.lines.show || t.config.xaxis.axisTicks.show) {
                            var v, y = t.globals.padHorizontal,
                                w = t.globals.gridHeight;
                            if (0 < t.globals.timelineLabels.length)
                                for (var k = 0; k < r; k++) {
                                    if (y = this.xaxisLabels[k].position, v = this.xaxisLabels[k].position, t.config.grid.xaxis.lines.show && 0 < y && y < t.globals.gridWidth) {
                                        var A = e.drawLine(y, 0, v, w, t.config.grid.borderColor, i);
                                        A.node.classList.add("apexcharts-gridline"), n.add(A), this.animX && this.animateLine(A, {
                                            x1: 0,
                                            x2: 0
                                        }, {
                                            x1: y,
                                            x2: v
                                        })
                                    }
                                    var S = new F(this.ctx);
                                    k === r - 1 && t.globals.skipLastTimelinelabel || S.drawXaxisTicks(y, s)
                                } else
                                    for (var C = r, L = 0; L < C; L++) {
                                        var z = C;
                                        if (t.globals.isXNumeric && "bar" !== t.config.chart.type && (z -= 1), v = y += t.globals.gridWidth / z, L === z - 1) break;
                                        if (t.config.grid.xaxis.lines.show) {
                                            var P = e.drawLine(y, 0, v, w, t.config.grid.borderColor, i);
                                            P.node.classList.add("apexcharts-gridline"), n.add(P), this.animX && this.animateLine(P, {
                                                x1: 0,
                                                x2: 0
                                            }, {
                                                x1: y,
                                                x2: v
                                            })
                                        }
                                        new F(this.ctx).drawXaxisTicks(y, s)
                                    }
                        }
                        if (t.config.grid.yaxis.lines.show)
                            for (var E = 0, M = 0, T = t.globals.gridWidth, X = 0; X < o + 1; X++) {
                                var I = e.drawLine(0, E, T, M, t.config.grid.borderColor, i);
                                a.add(I), I.node.classList.add("apexcharts-gridline"), this.animY && this.animateLine(I, {
                                    y1: E + 20,
                                    y2: M + 20
                                }, {
                                    y1: E,
                                    y2: M
                                }), M = E += t.globals.gridHeight / o
                            }
                    }
                    return this.drawGridBands(s, r, o), {
                        el: s,
                        xAxisTickWidth: t.globals.gridWidth / r
                    }
                }
            }, {
                key: "drawGridBands",
                value: function (t, e, i) {
                    var s = this.w,
                        a = new ht(this.ctx);
                    if (void 0 !== s.config.grid.row.colors && 0 < s.config.grid.row.colors.length)
                        for (var n = 0, r = s.globals.gridHeight / i, o = s.globals.gridWidth, l = 0, h = 0; l < i; l++, h++) {
                            h >= s.config.grid.row.colors.length && (h = 0);
                            var c = s.config.grid.row.colors[h],
                                d = a.drawRect(0, n, o, r, 0, c, s.config.grid.row.opacity);
                            t.add(d), d.node.classList.add("apexcharts-gridRow"), n += s.globals.gridHeight / i
                        }
                    if (void 0 !== s.config.grid.column.colors && 0 < s.config.grid.column.colors.length)
                        for (var u = s.globals.padHorizontal, g = s.globals.padHorizontal + s.globals.gridWidth / e, f = s.globals.gridHeight, p = 0, x = 0; p < e; p++, x++) {
                            x >= s.config.grid.column.colors.length && (x = 0);
                            var b = s.config.grid.column.colors[x],
                                m = a.drawRect(u, 0, g, f, 0, b, s.config.grid.column.opacity);
                            m.node.classList.add("apexcharts-gridColumn"), t.add(m), u += s.globals.gridWidth / e
                        }
                }
            }, {
                key: "animateLine",
                value: function (t, e, i) {
                    var s = this.w,
                        a = s.config.chart.animations;
                    if (a && !s.globals.resized && !s.globals.dataChanged) {
                        var n = a.speed;
                        this.anim.animateLine(t, e, i, n)
                    }
                }
            }]), i
        }(),
        tt = function () {
            function i(t, e) {
                n(this, i), this.ctx = t, this.w = t.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this)
            }
            return r(i, [{
                key: "init",
                value: function () {
                    var t = this.w,
                        e = t.globals,
                        i = t.config;
                    if ((i.legend.showForSingleSeries && 1 === e.series.length || 1 < e.series.length || !e.axisCharts) && i.legend.show) {
                        for (; e.dom.elLegendWrap.firstChild;) e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
                        this.drawLegends(), lt.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.getLegendStyles()) : this.appendToForeignObject(), "bottom" === i.legend.position || "top" === i.legend.position ? this.legendAlignHorizontal() : "right" !== i.legend.position && "left" !== i.legend.position || this.legendAlignVertical()
                    }
                }
            }, {
                key: "appendToForeignObject",
                value: function () {
                    var t = this.w.globals,
                        e = document.createElementNS(t.SVGNS, "foreignObject");
                    e.setAttribute("x", 0), e.setAttribute("y", 0), e.setAttribute("width", t.svgWidth), e.setAttribute("height", t.svgHeight), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), e.appendChild(t.dom.elLegendWrap), e.appendChild(this.getLegendStyles()), t.dom.Paper.node.insertBefore(e, t.dom.elGraphical.node)
                }
            }, {
                key: "drawLegends",
                value: function () {
                    var t = this.w,
                        e = t.config.legend.fontFamily,
                        i = t.globals.seriesNames,
                        s = t.globals.colors.slice();
                    if ("heatmap" === t.config.chart.type) {
                        var a = t.config.plotOptions.heatmap.colorScale.ranges;
                        i = a.map(function (t) {
                            return t.name ? t.name : t.from + " - " + t.to
                        }), s = a.map(function (t) {
                            return t.color
                        })
                    }
                    for (var n = t.globals.legendFormatter, r = 0; r <= i.length - 1; r++) {
                        var o = n(i[r], {
                                seriesIndex: r,
                                w: t
                            }),
                            l = !1,
                            h = !1;
                        if (0 < t.globals.collapsedSeries.length)
                            for (var c = 0; c < t.globals.collapsedSeries.length; c++) t.globals.collapsedSeries[c].index === r && (l = !0);
                        if (0 < t.globals.ancillaryCollapsedSeriesIndices.length)
                            for (var d = 0; d < t.globals.ancillaryCollapsedSeriesIndices.length; d++) t.globals.ancillaryCollapsedSeriesIndices[d] === r && (h = !0);
                        var u = document.createElement("span");
                        u.classList.add("apexcharts-legend-marker");
                        var g = t.config.legend.markers.offsetX,
                            f = t.config.legend.markers.offsetY,
                            p = t.config.legend.markers.height,
                            x = t.config.legend.markers.width,
                            b = t.config.legend.markers.strokeWidth,
                            m = t.config.legend.markers.strokeColor,
                            v = t.config.legend.markers.radius,
                            y = u.style;
                        y.background = s[r], y.color = s[r], y.height = Array.isArray(p) ? parseFloat(p[r]) + "px" : parseFloat(p) + "px", y.width = Array.isArray(x) ? parseFloat(x[r]) + "px" : parseFloat(x) + "px", y.left = Array.isArray(g) ? g[r] : g, y.top = Array.isArray(f) ? f[r] : f, y.borderWidth = Array.isArray(b) ? b[r] : b, y.borderColor = Array.isArray(m) ? m[r] : m, y.borderRadius = Array.isArray(v) ? parseFloat(v[r]) + "px" : parseFloat(v) + "px", t.config.legend.markers.customHTML && (Array.isArray(t.config.legend.markers.customHTML) ? u.innerHTML = t.config.legend.markers.customHTML[r]() : u.innerHTML = t.config.legend.markers.customHTML()), ht.setAttrs(u, {
                            rel: r + 1,
                            "data:collapsed": l || h
                        }), (l || h) && u.classList.add("inactive-legend");
                        var w = document.createElement("div"),
                            k = document.createElement("span");
                        k.classList.add("apexcharts-legend-text"), k.innerHTML = o;
                        var A = t.config.legend.labels.useSeriesColors ? t.globals.colors[r] : t.config.legend.labels.colors;
                        A || (A = t.config.chart.foreColor), k.style.color = A, k.style.fontSize = parseFloat(t.config.legend.fontSize) + "px", k.style.fontFamily = e || t.config.chart.fontFamily, ht.setAttrs(k, {
                            rel: r + 1,
                            "data:collapsed": l || h
                        }), w.appendChild(u), w.appendChild(k);
                        var S = new ct(this.ctx);
                        t.config.legend.showForZeroSeries || 0 === S.getSeriesTotalByIndex(r) && S.seriesHaveSameValues(r) && !S.isSeriesNull(r) && -1 === t.globals.collapsedSeriesIndices.indexOf(r) && -1 === t.globals.ancillaryCollapsedSeriesIndices.indexOf(r) && w.classList.add("apexcharts-hidden-zero-series"), t.config.legend.showForNullSeries || S.isSeriesNull(r) && -1 === t.globals.collapsedSeriesIndices.indexOf(r) && -1 === t.globals.ancillaryCollapsedSeriesIndices.indexOf(r) && w.classList.add("apexcharts-hidden-null-series"), t.globals.dom.elLegendWrap.appendChild(w), t.globals.dom.elLegendWrap.classList.add(t.config.legend.horizontalAlign), t.globals.dom.elLegendWrap.classList.add("position-" + t.config.legend.position), w.classList.add("apexcharts-legend-series"), w.style.margin = "".concat(t.config.legend.itemMargin.horizontal, "px ").concat(t.config.legend.itemMargin.vertical, "px"), t.globals.dom.elLegendWrap.style.width = t.config.legend.width ? t.config.legend.width + "px" : "", t.globals.dom.elLegendWrap.style.height = t.config.legend.height ? t.config.legend.height + "px" : "", ht.setAttrs(w, {
                            rel: r + 1,
                            "data:collapsed": l || h
                        }), (l || h) && w.classList.add("inactive-legend"), t.config.legend.onItemClick.toggleDataSeries || w.classList.add("no-click")
                    }
                    "heatmap" !== t.config.chart.type && t.config.legend.onItemClick.toggleDataSeries && t.globals.dom.elWrap.addEventListener("click", this.onLegendClick, !0), t.config.legend.onItemHover.highlightDataSeries && (t.globals.dom.elWrap.addEventListener("mousemove", this.onLegendHovered, !0), t.globals.dom.elWrap.addEventListener("mouseout", this.onLegendHovered, !0))
                }
            }, {
                key: "getLegendBBox",
                value: function () {
                    var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(),
                        e = t.width;
                    return {
                        clwh: t.height,
                        clww: e
                    }
                }
            }, {
                key: "setLegendWrapXY",
                value: function (t, e) {
                    var i = this.w,
                        s = i.globals.dom.baseEl.querySelector(".apexcharts-legend"),
                        a = s.getBoundingClientRect(),
                        n = 0,
                        r = 0;
                    if ("bottom" === i.config.legend.position) r += i.globals.svgHeight - a.height / 2;
                    else if ("top" === i.config.legend.position) {
                        var o = new N(this.ctx),
                            l = o.getTitleSubtitleCoords("title").height,
                            h = o.getTitleSubtitleCoords("subtitle").height;
                        r = r + (0 < l ? l - 10 : 0) + (0 < h ? h - 10 : 0)
                    }
                    s.style.position = "absolute", n = n + t + i.config.legend.offsetX, r = r + e + i.config.legend.offsetY, s.style.left = n + "px", s.style.top = r + "px", "bottom" === i.config.legend.position ? (s.style.top = "auto", s.style.bottom = 10 + i.config.legend.offsetY + "px") : "right" === i.config.legend.position && (s.style.left = "auto", s.style.right = 25 + i.config.legend.offsetX + "px"), s.style.width && (s.style.width = parseInt(i.config.legend.width) + "px"), s.style.height && (s.style.height = parseInt(i.config.legend.height) + "px")
                }
            }, {
                key: "legendAlignHorizontal",
                value: function () {
                    var t = this.w;
                    t.globals.dom.baseEl.querySelector(".apexcharts-legend").style.right = 0;
                    var e = this.getLegendBBox(),
                        i = new N(this.ctx),
                        s = i.getTitleSubtitleCoords("title"),
                        a = i.getTitleSubtitleCoords("subtitle"),
                        n = 0;
                    "bottom" === t.config.legend.position ? n = -e.clwh / 1.8 : "top" === t.config.legend.position && (n = s.height + a.height + t.config.title.margin + t.config.subtitle.margin - 15), this.setLegendWrapXY(20, n)
                }
            }, {
                key: "legendAlignVertical",
                value: function () {
                    var t = this.w,
                        e = this.getLegendBBox(),
                        i = 0;
                    "left" === t.config.legend.position && (i = 20), "right" === t.config.legend.position && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20)
                }
            }, {
                key: "onLegendHovered",
                value: function (t) {
                    var e = this.w,
                        i = t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
                    if ("heatmap" !== e.config.chart.type) !t.target.classList.contains("inactive-legend") && i && new D(this.ctx).toggleSeriesOnHover(t, t.target);
                    else if (i) {
                        var s = parseInt(t.target.getAttribute("rel")) - 1;
                        this.ctx.fireEvent("legendHover", [this.ctx, s, this.w]), new D(this.ctx).highlightRangeInSeries(t, t.target)
                    }
                }
            }, {
                key: "onLegendClick",
                value: function (t) {
                    if (t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker")) {
                        var e = parseInt(t.target.getAttribute("rel")) - 1,
                            i = "true" === t.target.getAttribute("data:collapsed"),
                            s = this.w.config.chart.events.legendClick;
                        "function" == typeof s && s(this.ctx, e, this.w), this.ctx.fireEvent("legendClick", [this.ctx, e, this.w]);
                        var a = this.w.config.legend.markers.onClick;
                        "function" == typeof a && t.target.classList.contains("apexcharts-legend-marker") && (a(this.ctx, e, this.w), this.ctx.fireEvent("legendMarkerClick", [this.ctx, e, this.w])), this.toggleDataSeries(e, i)
                    }
                }
            }, {
                key: "getLegendStyles",
                value: function () {
                    var t = document.createElement("style");
                    t.setAttribute("type", "text/css");
                    var e = document.createTextNode("\n    \n      .apexcharts-legend {\n        display: flex;\n        overflow: auto;\n        padding: 0 10px;\n      }\n\n      .apexcharts-legend.position-bottom, .apexcharts-legend.position-top {\n        flex-wrap: wrap\n      }\n      .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        flex-direction: column;\n        bottom: 0;\n      }\n\n      .apexcharts-legend.position-bottom.left, .apexcharts-legend.position-top.left, .apexcharts-legend.position-right, .apexcharts-legend.position-left {\n        justify-content: flex-start;\n      }\n\n      .apexcharts-legend.position-bottom.center, .apexcharts-legend.position-top.center {\n        justify-content: center;  \n      }\n\n      .apexcharts-legend.position-bottom.right, .apexcharts-legend.position-top.right {\n        justify-content: flex-end;\n      }\n\n      .apexcharts-legend-series {\n        cursor: pointer;\n        line-height: normal;\n      }\n\n      .apexcharts-legend.position-bottom .apexcharts-legend-series, .apexcharts-legend.position-top .apexcharts-legend-series{\n        display: flex;\n        align-items: center;\n      }\n\n      .apexcharts-legend-text {\n        position: relative;\n        font-size: 14px;\n      }\n\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\n        pointer-events: none;\n      }\n\n      .apexcharts-legend-marker {\n        position: relative;\n        display: inline-block;\n        cursor: pointer;\n        margin-right: 3px;\n      }\n      \n      .apexcharts-legend.right .apexcharts-legend-series, .apexcharts-legend.left .apexcharts-legend-series{\n        display: inline-block;\n      }\n\n      .apexcharts-legend-series.no-click {\n        cursor: auto;\n      }\n\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\n        display: none !important;\n      }\n\n      .inactive-legend {\n        opacity: 0.45;\n      }");
                    return t.appendChild(e), t
                }
            }, {
                key: "resetToggleDataSeries",
                value: function () {
                    var t = this.w,
                        e = null,
                        i = [];
                    if (t.globals.axisCharts ? (e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex]"), (e = lt.listToArray(e)).forEach(function (t) {
                            i.push(parseInt(t.getAttribute("data:realIndex")))
                        })) : (e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[rel]"), (e = lt.listToArray(e)).forEach(function (t) {
                            i.push(parseInt(t.getAttribute("rel")) - 1)
                        })), i.sort(), 0 < t.globals.collapsedSeries.length) {
                        for (var s = t.globals.risingSeries.slice(), a = t.config.series.slice(), n = 0; n < t.globals.collapsedSeries.length; n++) {
                            var r = i.indexOf(t.globals.collapsedSeries[n].index); - 1 !== r && (t.globals.axisCharts ? a[r].data = t.globals.collapsedSeries.slice()[n].data.slice() : a[r] = t.globals.collapsedSeries.slice()[n].data, s.push(r))
                        }
                        t.globals.collapsedSeries = [], t.globals.ancillaryCollapsedSeries = [], t.globals.collapsedSeriesIndices = [], t.globals.ancillaryCollapsedSeriesIndices = [], t.globals.risingSeries = s, t.config.series = a, this.ctx._updateSeries(t.config.series, t.config.chart.animations.dynamicAnimation.enabled)
                    }
                }
            }, {
                key: "toggleDataSeries",
                value: function (t, e) {
                    var i = this.w;
                    if (i.globals.axisCharts || "radialBar" === i.config.chart.type) {
                        i.globals.resized = !0;
                        var s = null,
                            a = null;
                        if (i.globals.risingSeries = [], a = i.globals.axisCharts ? (s = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), parseInt(s.getAttribute("data:realIndex"))) : (s = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), parseInt(s.getAttribute("rel")) - 1), e) this.riseCollapsedSeries(i.globals.collapsedSeries, i.globals.collapsedSeriesIndices, a), this.riseCollapsedSeries(i.globals.ancillaryCollapsedSeries, i.globals.ancillaryCollapsedSeriesIndices, a);
                        else {
                            if (i.globals.axisCharts) {
                                var n = !1;
                                if (i.config.yaxis[a] && i.config.yaxis[a].show && i.config.yaxis[a].showAlways && (n = !0, i.globals.ancillaryCollapsedSeriesIndices.indexOf(a) < 0 && (i.globals.ancillaryCollapsedSeries.push({
                                        index: a,
                                        data: i.config.series[a].data.slice(),
                                        type: s.parentNode.className.baseVal.split("-")[1]
                                    }), i.globals.ancillaryCollapsedSeriesIndices.push(a))), !n) {
                                    i.globals.collapsedSeries.push({
                                        index: a,
                                        data: i.config.series[a].data.slice(),
                                        type: s.parentNode.className.baseVal.split("-")[1]
                                    }), i.globals.collapsedSeriesIndices.push(a);
                                    var r = i.globals.risingSeries.indexOf(a);
                                    i.globals.risingSeries.splice(r, 1)
                                }
                                i.config.series[a].data = []
                            } else i.globals.collapsedSeries.push({
                                index: a,
                                data: i.config.series[a]
                            }), i.globals.collapsedSeriesIndices.push(a), i.config.series[a] = 0;
                            for (var o = s.childNodes, l = 0; l < o.length; l++) o[l].classList.contains("apexcharts-series-markers-wrap") && (o[l].classList.contains("apexcharts-hide") ? o[l].classList.remove("apexcharts-hide") : o[l].classList.add("apexcharts-hide"));
                            i.globals.allSeriesCollapsed = i.globals.collapsedSeries.length === i.globals.series.length, this.ctx._updateSeries(i.config.series, i.config.chart.animations.dynamicAnimation.enabled)
                        }
                    } else {
                        var h = i.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")),
                            c = i.config.chart.type;
                        if ("pie" === c || "donut" === c) {
                            var d = i.config.plotOptions.pie.donut.labels,
                                u = new ht(this.ctx),
                                g = new T(this.ctx);
                            u.pathMouseDown(h.members[0], null), g.printDataLabelsInner(h.members[0].node, d)
                        }
                        h.fire("click")
                    }
                }
            }, {
                key: "riseCollapsedSeries",
                value: function (t, e, i) {
                    var s = this.w;
                    if (0 < t.length)
                        for (var a = 0; a < t.length; a++) t[a].index === i && (s.globals.axisCharts ? s.config.series[i].data = t[a].data.slice() : s.config.series[i] = t[a].data, t.splice(a, 1), e.splice(a, 1), s.globals.risingSeries.push(i), this.ctx._updateSeries(s.config.series, s.config.chart.animations.dynamicAnimation.enabled))
                }
            }]), i
        }(),
        et = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "checkResponsiveConfig",
                value: function (t) {
                    var n = this,
                        r = this.w,
                        e = r.config;
                    if (0 !== e.responsive.length) {
                        var o = e.responsive.slice();
                        o.sort(function (t, e) {
                            return t.breakpoint > e.breakpoint ? 1 : e.breakpoint > t.breakpoint ? -1 : 0
                        }).reverse();
                        var l = new u({}),
                            i = function () {
                                var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                                    e = o[0].breakpoint,
                                    i = 0 < window.innerWidth ? window.innerWidth : screen.width;
                                if (e < i) {
                                    var s = ct.extendArrayProps(l, r.globals.initialConfig);
                                    t = lt.extend(s, t), t = lt.extend(r.config, t), n.overrideResponsiveOptions(t)
                                } else
                                    for (var a = 0; a < o.length; a++) i < o[a].breakpoint && (t = ct.extendArrayProps(l, o[a].options), t = lt.extend(r.config, t), n.overrideResponsiveOptions(t))
                            };
                        if (t) {
                            var s = ct.extendArrayProps(l, t);
                            s = lt.extend(r.config, s), i(s = lt.extend(s, t))
                        } else i({})
                    }
                }
            }, {
                key: "overrideResponsiveOptions",
                value: function (t) {
                    var e = new u(t).init();
                    this.w.config = e
                }
            }]), e
        }(),
        it = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.colors = []
            }
            return r(e, [{
                key: "init",
                value: function () {
                    this.setDefaultColors()
                }
            }, {
                key: "setDefaultColors",
                value: function () {
                    var t = this.w,
                        e = new lt;
                    if (t.globals.dom.elWrap.classList.add(t.config.theme.mode), void 0 === t.config.colors ? t.globals.colors = this.predefined() : t.globals.colors = t.config.colors, t.config.theme.monochrome.enabled) {
                        var i = [],
                            s = t.globals.series.length;
                        t.config.plotOptions.bar.distributed && "bar" === t.config.chart.type && (s = t.globals.series[0].length * t.globals.series.length);
                        for (var a = t.config.theme.monochrome.color, n = 1 / (s / t.config.theme.monochrome.shadeIntensity), r = t.config.theme.monochrome.shadeTo, o = 0, l = 0; l < s; l++) {
                            var h = void 0;
                            h = "dark" === r ? e.shadeColor(-1 * o, a) : e.shadeColor(o, a), o += n, i.push(h)
                        }
                        t.globals.colors = i.slice()
                    }
                    var c = t.globals.colors.slice();
                    this.pushExtraColors(t.globals.colors), void 0 === t.config.stroke.colors ? t.globals.stroke.colors = c : t.globals.stroke.colors = t.config.stroke.colors, this.pushExtraColors(t.globals.stroke.colors), void 0 === t.config.fill.colors ? t.globals.fill.colors = c : t.globals.fill.colors = t.config.fill.colors, this.pushExtraColors(t.globals.fill.colors), void 0 === t.config.dataLabels.style.colors ? t.globals.dataLabels.style.colors = c : t.globals.dataLabels.style.colors = t.config.dataLabels.style.colors, this.pushExtraColors(t.globals.dataLabels.style.colors, 50), void 0 === t.config.plotOptions.radar.polygons.fill.colors ? t.globals.radarPolygons.fill.colors = ["dark" === t.config.theme.mode ? "#202D48" : "#fff"] : t.globals.radarPolygons.fill.colors = t.config.plotOptions.radar.polygons.fill.colors, this.pushExtraColors(t.globals.radarPolygons.fill.colors, 20), void 0 === t.config.markers.colors ? t.globals.markers.colors = c : t.globals.markers.colors = t.config.markers.colors, this.pushExtraColors(t.globals.markers.colors)
                }
            }, {
                key: "pushExtraColors",
                value: function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        s = this.w,
                        a = e || s.globals.series.length;
                    if (null === i && (i = "bar" === s.config.chart.type && s.config.plotOptions.bar.distributed || "heatmap" === s.config.chart.type && s.config.plotOptions.heatmap.colorScale.inverse), i && (a = s.globals.series[0].length * s.globals.series.length), t.length < a)
                        for (var n = a - t.length, r = 0; r < n; r++) t.push(t[r])
                }
            }, {
                key: "updateThemeOptions",
                value: function (t) {
                    t.chart = t.chart || {}, t.tooltip = t.tooltip || {};
                    var e = t.theme.mode || "light",
                        i = t.theme.palette ? t.theme.palette : "dark" === e ? "palette4" : "palette1",
                        s = t.chart.foreColor ? t.chart.foreColor : "dark" === e ? "#f6f7f8" : "#373d3f";
                    return t.tooltip.theme = e, t.chart.foreColor = s, t.theme.palette = i, t
                }
            }, {
                key: "predefined",
                value: function () {
                    switch (this.w.config.theme.palette) {
                        case "palette1":
                            this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
                            break;
                        case "palette2":
                            this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
                            break;
                        case "palette3":
                            this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
                            break;
                        case "palette4":
                            this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
                            break;
                        case "palette5":
                            this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
                            break;
                        case "palette6":
                            this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
                            break;
                        case "palette7":
                            this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
                            break;
                        case "palette8":
                            this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
                            break;
                        case "palette9":
                            this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
                            break;
                        case "palette10":
                            this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
                            break;
                        default:
                            this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"]
                    }
                    return this.colors
                }
            }]), e
        }(),
        st = function () {
            function e(t) {
                n(this, e), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx
            }
            return r(e, [{
                key: "getNearestValues",
                value: function (t) {
                    var e = t.hoverArea,
                        i = t.elGrid,
                        s = t.clientX,
                        a = t.clientY,
                        n = t.hasBars,
                        r = this.w,
                        o = r.globals.gridWidth,
                        l = o / (r.globals.dataPoints - 1),
                        h = i.getBoundingClientRect();
                    (n && r.globals.comboCharts || n) && (l = o / r.globals.dataPoints);
                    var c = s - h.left,
                        d = a - h.top;
                    c < 0 || d < 0 || c > r.globals.gridWidth || d > r.globals.gridHeight ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : r.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
                    var u = Math.round(c / l);
                    n && (u = Math.ceil(c / l), u -= 1);
                    for (var g, f = null, p = null, x = [], b = 0; b < r.globals.seriesXvalues.length; b++) x.push([r.globals.seriesXvalues[b][0] - 1e-6].concat(r.globals.seriesXvalues[b]));
                    return x = x.map(function (t) {
                        return t.filter(function (t) {
                            return t
                        })
                    }), g = r.globals.seriesYvalues.map(function (t) {
                        return t.filter(function (t) {
                            return t
                        })
                    }), r.globals.isXNumeric && (f = (p = this.closestInMultiArray(c, d, x, g)).index, u = p.j, null !== f && (x = r.globals.seriesXvalues[f], u = (p = this.closestInArray(c, x)).index)), (!u || u < 1) && (u = 0), {
                        capturedSeries: f,
                        j: u,
                        hoverX: c,
                        hoverY: d
                    }
                }
            }, {
                key: "closestInMultiArray",
                value: function (r, o, l, h) {
                    var t = this.w,
                        e = 0,
                        c = null,
                        d = -1;
                    1 < t.globals.series.length ? e = this.getFirstActiveXArray(l) : c = 0;
                    var i = h[e][0],
                        s = l[e][0],
                        u = Math.abs(r - s),
                        g = Math.abs(o - i),
                        f = g + u;
                    return h.map(function (t, n) {
                        t.map(function (t, e) {
                            var i = Math.abs(o - h[n][e]),
                                s = Math.abs(r - l[n][e]),
                                a = s + i;
                            a < f && (f = a, u = s, g = i, c = n, d = e)
                        })
                    }), {
                        index: c,
                        j: d
                    }
                }
            }, {
                key: "getFirstActiveXArray",
                value: function (t) {
                    for (var e = 0, i = new ct(this.ctx), s = t.map(function (t, e) {
                            return 0 < t.length ? e : -1
                        }), a = 0; a < s.length; a++) {
                        var n = i.getSeriesTotalByIndex(a);
                        if (-1 !== s[a] && 0 !== n && !i.seriesHaveSameValues(a)) {
                            e = s[a];
                            break
                        }
                    }
                    return e
                }
            }, {
                key: "closestInArray",
                value: function (t, e) {
                    for (var i = e[0], s = null, a = Math.abs(t - i), n = 0; n < e.length; n++) {
                        var r = Math.abs(t - e[n]);
                        r < a && (a = r, i = e[n], s = n)
                    }
                    return {
                        index: s
                    }
                }
            }, {
                key: "isXoverlap",
                value: function (t) {
                    var e = [],
                        i = this.w.globals.seriesX.filter(function (t) {
                            return void 0 !== t[0]
                        });
                    if (0 < i.length)
                        for (var s = 0; s < i.length - 1; s++) void 0 !== i[s][t] && void 0 !== i[s + 1][t] && i[s][t] !== i[s + 1][t] && e.push("unEqual");
                    return 0 === e.length
                }
            }, {
                key: "isinitialSeriesSameLen",
                value: function () {
                    for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
                        if (e[i].data.length !== e[i + 1].data.length) {
                            t = !1;
                            break
                        } return t
                }
            }, {
                key: "getBarsHeight",
                value: function (t) {
                    return S(t).reduce(function (t, e) {
                        return t + e.getBBox().height
                    }, 0)
                }
            }, {
                key: "toggleAllTooltipSeriesGroups",
                value: function (t) {
                    var e = this.w,
                        i = this.ttCtx;
                    0 === i.allTooltipSeriesGroups.length && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
                    for (var s = i.allTooltipSeriesGroups, a = 0; a < s.length; a++) "enable" === t ? (s[a].classList.add("active"), s[a].style.display = e.config.tooltip.items.display) : (s[a].classList.remove("active"), s[a].style.display = "none")
                }
            }]), e
        }(),
        at = function () {
            function e(t) {
                n(this, e), this.w = t.w, this.ctx = t.ctx, this.ttCtx = t, this.tooltipUtil = new st(t)
            }
            return r(e, [{
                key: "drawSeriesTexts",
                value: function (t) {
                    var e = t.shared,
                        i = void 0 === e || e,
                        s = t.ttItems,
                        a = t.i,
                        n = void 0 === a ? 0 : a,
                        r = t.j,
                        o = void 0 === r ? null : r;
                    void 0 !== this.w.config.tooltip.custom ? this.handleCustomTooltip({
                        i: n,
                        j: o
                    }) : this.toggleActiveInactiveSeries(i);
                    var l = this.getValuesToPrint({
                        i: n,
                        j: o
                    });
                    this.printLabels({
                        i: n,
                        j: o,
                        values: l,
                        ttItems: s,
                        shared: i
                    });
                    var h = this.ttCtx.getElTooltip();
                    this.ttCtx.tooltipRect.ttWidth = h.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = h.getBoundingClientRect().height
                }
            }, {
                key: "printLabels",
                value: function (t) {
                    var e, i = t.i,
                        s = t.j,
                        a = t.values,
                        n = t.ttItems,
                        r = t.shared,
                        o = this.w,
                        l = a.xVal,
                        h = a.zVal,
                        c = a.xAxisTTVal,
                        d = "",
                        u = o.globals.colors[i];
                    null !== s && o.config.plotOptions.bar.distributed && (u = o.globals.colors[s]);
                    for (var g = 0, f = o.globals.series.length - 1; g < o.globals.series.length; g++, f--) {
                        var p = this.getFormatters(i);
                        if (d = this.getSeriesName({
                                fn: p.yLbTitleFormatter,
                                index: i,
                                seriesIndex: i,
                                j: s
                            }), r) {
                            var x = o.config.tooltip.inverseOrder ? f : g;
                            p = this.getFormatters(x), d = this.getSeriesName({
                                fn: p.yLbTitleFormatter,
                                index: x,
                                seriesIndex: i,
                                j: s
                            }), u = o.globals.colors[x], e = p.yLbFormatter(o.globals.series[x][s], {
                                series: o.globals.series,
                                seriesIndex: x,
                                dataPointIndex: s,
                                w: o
                            }), (this.ttCtx.hasBars() && o.config.chart.stacked && 0 === o.globals.series[x][s] || void 0 === o.globals.series[x][s]) && (e = void 0)
                        } else e = p.yLbFormatter(o.globals.series[i][s], {
                            series: o.globals.series,
                            seriesIndex: i,
                            dataPointIndex: s,
                            w: o
                        });
                        null === s && (e = p.yLbFormatter(o.globals.series[i], o)), this.DOMHandling({
                            t: g,
                            ttItems: n,
                            values: {
                                val: e,
                                xVal: l,
                                xAxisTTVal: c,
                                zVal: h
                            },
                            seriesName: d,
                            shared: r,
                            pColor: u
                        })
                    }
                }
            }, {
                key: "getFormatters",
                value: function (t) {
                    var e, i = this.w,
                        s = i.globals.yLabelFormatters[t];
                    return void 0 !== i.globals.ttVal ? Array.isArray(i.globals.ttVal) ? (s = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (s = i.globals.ttVal.formatter, "function" == typeof i.globals.ttVal.title.formatter && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, "function" != typeof s && (s = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function (t) {
                        return t
                    }), "function" != typeof e && (e = function (t) {
                        return t
                    }), {
                        yLbFormatter: s,
                        yLbTitleFormatter: e
                    }
                }
            }, {
                key: "getSeriesName",
                value: function (t) {
                    var e = t.fn,
                        i = t.index,
                        s = t.seriesIndex,
                        a = t.j,
                        n = this.w;
                    return e(String(n.globals.seriesNames[i]), {
                        series: n.globals.series,
                        seriesIndex: s,
                        dataPointIndex: a,
                        w: n
                    })
                }
            }, {
                key: "DOMHandling",
                value: function (t) {
                    var e = t.t,
                        i = t.ttItems,
                        s = t.values,
                        a = t.seriesName,
                        n = t.shared,
                        r = t.pColor,
                        o = this.w,
                        l = this.ttCtx,
                        h = s.val,
                        c = s.xVal,
                        d = s.xAxisTTVal,
                        u = s.zVal,
                        g = null;
                    g = i[e].children, o.config.tooltip.fillSeriesColor && (i[e].style.backgroundColor = r, g[0].style.display = "none"), l.showTooltipTitle && (null === l.tooltipTitle && (l.tooltipTitle = o.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), l.tooltipTitle.innerHTML = c), l.blxaxisTooltip && (l.xaxisTooltipText.innerHTML = "" !== d ? d : c);
                    var f = i[e].querySelector(".apexcharts-tooltip-text-label");
                    f && (f.innerHTML = a ? a + ": " : "");
                    var p = i[e].querySelector(".apexcharts-tooltip-text-value");
                    p && (p.innerHTML = h), g[0] && g[0].classList.contains("apexcharts-tooltip-marker") && (g[0].style.backgroundColor = r), o.config.tooltip.marker.show || (g[0].style.display = "none"), null !== u && (i[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = o.config.tooltip.z.title, i[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = u), n && g[0] && (null == h || -1 < o.globals.collapsedSeriesIndices.indexOf(e) ? g[0].parentNode.style.display = "none" : g[0].parentNode.style.display = o.config.tooltip.items.display)
                }
            }, {
                key: "toggleActiveInactiveSeries",
                value: function (t) {
                    var e = this.w;
                    if (t) this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
                    else {
                        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
                        var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
                        i && (i.classList.add("active"), i.style.display = e.config.tooltip.items.display)
                    }
                }
            }, {
                key: "getValuesToPrint",
                value: function (t) {
                    var e = t.i,
                        i = t.j,
                        s = this.w,
                        a = this.ctx.series.filteredSeriesX(),
                        n = "",
                        r = null,
                        o = null,
                        l = {
                            series: s.globals.series,
                            seriesIndex: e,
                            dataPointIndex: i,
                            w: s
                        },
                        h = s.globals.ttZFormatter;
                    null === i ? o = s.globals.series[e] : s.globals.isXNumeric ? (n = a[e][i], 0 === a[e].length && (n = a[this.tooltipUtil.getFirstActiveXArray(a)][i])) : n = void 0 !== s.globals.labels[i] ? s.globals.labels[i] : "";
                    var c = n;
                    return n = s.globals.isXNumeric && "datetime" === s.config.xaxis.type ? new m(this.ctx).xLabelFormat(s.globals.ttKeyFormatter, c) : s.globals.xLabelFormatter(c, l), void 0 !== s.config.tooltip.x.formatter && (n = s.globals.ttKeyFormatter(c, l)), 0 < s.globals.seriesZ.length && 0 < s.globals.seriesZ[0].length && (r = h(s.globals.seriesZ[e][i], s)), {
                        val: o,
                        xVal: n,
                        xAxisTTVal: "function" == typeof s.config.xaxis.tooltip.formatter ? s.globals.xaxisTooltipFormatter(c, l) : n,
                        zVal: r
                    }
                }
            }, {
                key: "handleCustomTooltip",
                value: function (t) {
                    var e = t.i,
                        i = t.j,
                        s = this.w;
                    this.ttCtx.getElTooltip().innerHTML = s.config.tooltip.custom({
                        ctx: this.ctx,
                        series: s.globals.series,
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: s
                    })
                }
            }]), e
        }(),
        nt = function () {
            function e(t) {
                n(this, e), this.ttCtx = t, this.ctx = t.ctx, this.w = t.w
            }
            return r(e, [{
                key: "moveXCrosshairs",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null,
                        i = this.ttCtx,
                        s = this.w,
                        a = i.getElXCrosshairs(),
                        n = t - i.xcrosshairsWidth / 2,
                        r = s.globals.labels.slice().length;
                    if (null !== e && (n = s.globals.gridWidth / r * e), "tickWidth" === s.config.xaxis.crosshairs.width || "barWidth" === s.config.xaxis.crosshairs.width ? n + i.xcrosshairsWidth > s.globals.gridWidth && (n = s.globals.gridWidth - i.xcrosshairsWidth) : null !== e && (n += s.globals.gridWidth / r / 2), n < 0 && (n = 0), n > s.globals.gridWidth && (n = s.globals.gridWidth), null !== a && (a.setAttribute("x", n), a.setAttribute("x1", n), a.setAttribute("x2", n), a.setAttribute("y2", s.globals.gridHeight), a.classList.add("active")), i.blxaxisTooltip) {
                        var o = n;
                        "tickWidth" !== s.config.xaxis.crosshairs.width && "barWidth" !== s.config.xaxis.crosshairs.width || (o = n + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(o)
                    }
                }
            }, {
                key: "moveYCrosshairs",
                value: function (t) {
                    var e = this.ttCtx;
                    null !== e.ycrosshairs && (ht.setAttrs(e.ycrosshairs, {
                        y1: t,
                        y2: t
                    }), ht.setAttrs(e.ycrosshairsHidden, {
                        y1: t,
                        y2: t
                    }))
                }
            }, {
                key: "moveXAxisTooltip",
                value: function (t) {
                    var e = this.w,
                        i = this.ttCtx;
                    if (null !== i.xaxisTooltip) {
                        i.xaxisTooltip.classList.add("active");
                        var s, a = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
                        if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) t += e.globals.translateX, s = new ht(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = s.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = a + "px"
                    }
                }
            }, {
                key: "moveYAxisTooltip",
                value: function (t) {
                    var e = this.w,
                        i = this.ttCtx;
                    null === i.yaxisTTEls && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                    var s = parseInt(i.ycrosshairsHidden.getAttribute("y1")),
                        a = e.globals.translateY + s,
                        n = i.yaxisTTEls[t].getBoundingClientRect().height,
                        r = e.globals.translateYAxisX[t] - 2;
                    e.config.yaxis[t].opposite && (r -= 26), a -= n / 2, -1 === e.globals.ignoreYAxisIndexes.indexOf(t) ? (i.yaxisTTEls[t].classList.add("active"), i.yaxisTTEls[t].style.top = a + "px", i.yaxisTTEls[t].style.left = r + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("active")
                }
            }, {
                key: "moveTooltip",
                value: function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        s = this.w,
                        a = this.ttCtx,
                        n = a.getElTooltip(),
                        r = a.tooltipRect,
                        o = null !== i ? parseInt(i) : 1,
                        l = parseInt(t) + o + 5,
                        h = parseInt(e) + o / 2;
                    if (l > s.globals.gridWidth / 2 && (l = l - r.ttWidth - o - 15), l > s.globals.gridWidth - r.ttWidth - 10 && (l = s.globals.gridWidth - r.ttWidth), l < -20 && (l = -20), s.config.tooltip.followCursor) {
                        var c = a.getElGrid().getBoundingClientRect();
                        h = a.e.clientY + s.globals.translateY - c.top - r.ttHeight / 2
                    }
                    var d = this.positionChecks(r, l, h);
                    l = d.x, h = d.y, isNaN(l) || (l += s.globals.translateX, n.style.left = l + "px", n.style.top = h + "px")
                }
            }, {
                key: "positionChecks",
                value: function (t, e, i) {
                    var s = this.w;
                    return t.ttHeight + i > s.globals.gridHeight && (i = s.globals.gridHeight - t.ttHeight + s.globals.translateY), i < 0 && (i = 0), {
                        x: e,
                        y: i
                    }
                }
            }, {
                key: "moveMarkers",
                value: function (t, e) {
                    var i = this.w,
                        s = this.ttCtx;
                    if (0 < i.globals.markers.size[t])
                        for (var a = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), n = 0; n < a.length; n++) parseInt(a[n].getAttribute("rel")) === e && (s.marker.resetPointsSize(), s.marker.enlargeCurrentPoint(e, a[n]));
                    else s.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t)
                }
            }, {
                key: "moveDynamicPointOnHover",
                value: function (t, e) {
                    var i, s, a = this.w,
                        n = this.ttCtx,
                        r = a.globals.pointsArray,
                        o = a.config.markers.hover.size;
                    void 0 === o && (o = a.globals.markers.size[e] + a.config.markers.hover.sizeOffset), i = r[e][t][0], s = r[e][t][1] ? r[e][t][1] : 0;
                    var l = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
                    l && (l.setAttribute("r", o), l.setAttribute("cx", i), l.setAttribute("cy", s)), this.moveXCrosshairs(i), n.fixedTooltip || this.moveTooltip(i, s, o)
                }
            }, {
                key: "moveDynamicPointsOnHover",
                value: function (t) {
                    var e, i = this.ttCtx,
                        s = i.w,
                        a = 0,
                        n = 0,
                        r = s.globals.pointsArray;
                    e = new D(this.ctx).getActiveSeriesIndex();
                    var o = s.config.markers.hover.size;
                    void 0 === o && (o = s.globals.markers.size[e] + s.config.markers.hover.sizeOffset), r[e] && (a = r[e][t][0], n = r[e][t][1]);
                    var l = null,
                        h = i.getAllMarkers();
                    if (null !== (l = null !== h ? h : s.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers circle")))
                        for (var c = 0; c < l.length; c++) {
                            var d = r[c];
                            if (d && d.length) {
                                var u = r[c][t][1];
                                l[c].setAttribute("cx", a);
                                var g = parseInt(l[c].parentNode.parentNode.parentNode.getAttribute("data:realIndex"));
                                null !== u ? (l[g] && l[g].setAttribute("r", o), l[g] && l[g].setAttribute("cy", u)) : l[g] && l[g].setAttribute("r", 0)
                            }
                        }
                    if (this.moveXCrosshairs(a), !i.fixedTooltip) {
                        var f = n || s.globals.gridHeight;
                        this.moveTooltip(a, f, o)
                    }
                }
            }, {
                key: "moveStickyTooltipOverBars",
                value: function (t) {
                    var e, i = this.w,
                        s = this.ttCtx,
                        a = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='1'] path[j='".concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='1'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='1'] path[j='").concat(t, "']")),
                        n = a ? parseFloat(a.getAttribute("cx")) : 0,
                        r = a ? parseFloat(a.getAttribute("barWidth")) : 0;
                    i.globals.isXNumeric ? n -= r / 2 : (n = s.xAxisTicksPositions[t - 1] + s.dataPointsDividedWidth / 2, isNaN(n) && (n = s.xAxisTicksPositions[t] - s.dataPointsDividedWidth / 2));
                    var o = s.getElGrid().getBoundingClientRect();
                    if (e = s.e.clientY - o.top - s.tooltipRect.ttHeight / 2, this.moveXCrosshairs(n), !s.fixedTooltip) {
                        var l = e || i.globals.gridHeight;
                        this.moveTooltip(n, l)
                    }
                }
            }]), e
        }(),
        rt = function () {
            function e(t) {
                n(this, e), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx, this.tooltipPosition = new nt(t)
            }
            return r(e, [{
                key: "drawDynamicPoints",
                value: function () {
                    for (var t = this.w, e = new ht(this.ctx), i = new ut(this.ctx), s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series"), a = 0; a < s.length; a++) {
                        var n = parseInt(s[a].getAttribute("data:realIndex")),
                            r = t.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(n, "'] .apexcharts-series-markers-wrap"));
                        if (null !== r) {
                            var o = void 0,
                                l = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
                            "line" !== t.config.chart.type && "area" !== t.config.chart.type || t.globals.comboCharts || t.config.tooltip.intersect || (l += " no-pointer-events");
                            var h = i.getMarkerConfig(l, n);
                            (o = e.drawMarker(0, 0, h)).node.setAttribute("default-marker-size", 0);
                            var c = document.createElementNS(t.globals.SVGNS, "g");
                            c.classList.add("apexcharts-series-markers"), c.appendChild(o.node), r.appendChild(c)
                        }
                    }
                }
            }, {
                key: "enlargeCurrentPoint",
                value: function (t, e) {
                    var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                        s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                        a = this.w;
                    "bubble" !== a.config.chart.type && this.newPointSize(t, e);
                    var n = e.getAttribute("cx"),
                        r = e.getAttribute("cy");
                    if (null !== i && null !== s && (n = i, r = s), this.tooltipPosition.moveXCrosshairs(n), !this.fixedTooltip) {
                        if ("radar" === a.config.chart.type) {
                            var o = this.ttCtx.getElGrid().getBoundingClientRect();
                            n = this.ttCtx.e.clientX - o.left
                        }
                        this.tooltipPosition.moveTooltip(n, r, a.config.markers.hover.size)
                    }
                }
            }, {
                key: "enlargePoints",
                value: function (t) {
                    for (var e = this.w, i = this.ttCtx, s = t, a = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n = e.config.markers.hover.size, r = 0; r < a.length; r++) {
                        var o = a[r].getAttribute("rel"),
                            l = a[r].getAttribute("index");
                        if (void 0 === n && (n = e.globals.markers.size[l] + e.config.markers.hover.sizeOffset), s === parseInt(o)) {
                            this.newPointSize(s, a[r]);
                            var h = a[r].getAttribute("cx"),
                                c = a[r].getAttribute("cy");
                            this.tooltipPosition.moveXCrosshairs(h), i.fixedTooltip || this.tooltipPosition.moveTooltip(h, c, n)
                        } else this.oldPointSize(a[r])
                    }
                }
            }, {
                key: "newPointSize",
                value: function (t, e) {
                    var i = this.w,
                        s = i.config.markers.hover.size,
                        a = null;
                    a = 0 === t ? e.parentNode.firstChild : e.parentNode.lastChild;
                    var n = parseInt(a.getAttribute("index"));
                    void 0 === s && (s = i.globals.markers.size[n] + i.config.markers.hover.sizeOffset), a.setAttribute("r", s)
                }
            }, {
                key: "oldPointSize",
                value: function (t) {
                    var e = parseInt(t.getAttribute("default-marker-size"));
                    t.setAttribute("r", e)
                }
            }, {
                key: "resetPointsSize",
                value: function () {
                    for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
                        var i = parseInt(t[e].getAttribute("default-marker-size"));
                        lt.isNumber(i) ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0)
                    }
                }
            }]), e
        }(),
        ft = function () {
            function e(t) {
                n(this, e), this.w = t.w, this.ttCtx = t
            }
            return r(e, [{
                key: "getAttr",
                value: function (t, e) {
                    return parseFloat(t.target.getAttribute(e))
                }
            }, {
                key: "handleHeatTooltip",
                value: function (t) {
                    var e = t.e,
                        i = t.opt,
                        s = t.x,
                        a = t.y,
                        n = this.ttCtx,
                        r = this.w;
                    if (e.target.classList.contains("apexcharts-heatmap-rect")) {
                        var o = this.getAttr(e, "i"),
                            l = this.getAttr(e, "j"),
                            h = this.getAttr(e, "cx"),
                            c = this.getAttr(e, "cy"),
                            d = this.getAttr(e, "width"),
                            u = this.getAttr(e, "height");
                        if (n.tooltipLabels.drawSeriesTexts({
                                ttItems: i.ttItems,
                                i: o,
                                j: l,
                                shared: !1
                            }), s = h + n.tooltipRect.ttWidth / 2 + d, a = c + n.tooltipRect.ttHeight / 2 - u / 2, n.tooltipPosition.moveXCrosshairs(h + d / 2), s > r.globals.gridWidth / 2 && (s = h - n.tooltipRect.ttWidth / 2 + d), n.w.config.tooltip.followCursor) {
                            var g = n.getElGrid().getBoundingClientRect();
                            a = n.e.clientY - g.top + r.globals.translateY / 2 - 10
                        }
                    }
                    return {
                        x: s,
                        y: a
                    }
                }
            }, {
                key: "handleMarkerTooltip",
                value: function (t) {
                    var e, i, s = t.e,
                        a = t.opt,
                        n = t.x,
                        r = t.y,
                        o = this.w,
                        l = this.ttCtx;
                    if (s.target.classList.contains("apexcharts-marker")) {
                        var h = parseInt(a.paths.getAttribute("cx")),
                            c = parseInt(a.paths.getAttribute("cy")),
                            d = parseFloat(a.paths.getAttribute("val"));
                        if (i = parseInt(a.paths.getAttribute("rel")), e = parseInt(a.paths.parentNode.parentNode.parentNode.getAttribute("rel")) - 1, l.intersect) {
                            var u = lt.findAncestor(a.paths, "apexcharts-series");
                            u && (e = parseInt(u.getAttribute("data:realIndex")))
                        }
                        if (l.tooltipLabels.drawSeriesTexts({
                                ttItems: a.ttItems,
                                i: e,
                                j: i,
                                shared: !l.showOnIntersect && o.config.tooltip.shared
                            }), "mouseup" === s.type && l.markerClick(s, e, i), n = h, r = c + o.globals.translateY - 1.4 * l.tooltipRect.ttHeight, l.w.config.tooltip.followCursor) {
                            var g = l.getElGrid().getBoundingClientRect();
                            r = l.e.clientY + o.globals.translateY - g.top
                        }
                        d < 0 && (r = c), l.marker.enlargeCurrentPoint(i, a.paths, n, r)
                    }
                    return {
                        x: n,
                        y: r
                    }
                }
            }, {
                key: "handleBarTooltip",
                value: function (t) {
                    var e, i, s = t.e,
                        a = t.opt,
                        n = this.w,
                        r = this.ttCtx,
                        o = r.getElTooltip(),
                        l = 0,
                        h = 0,
                        c = 0,
                        d = this.getBarTooltipXY({
                            e: s,
                            opt: a
                        });
                    e = d.i;
                    var u = d.barHeight,
                        g = d.j;
                    if (n.globals.isBarHorizontal && r.hasBars() || !n.config.tooltip.shared ? (h = d.x, c = d.y, i = Array.isArray(n.config.stroke.width) ? n.config.stroke.width[e] : n.config.stroke.width, l = h) : n.globals.comboCharts || n.config.tooltip.shared || (l /= 2), isNaN(c) && (c = n.globals.svgHeight - r.tooltipRect.ttHeight), h + r.tooltipRect.ttWidth > n.globals.gridWidth ? h -= r.tooltipRect.ttWidth : h < 0 && (h += r.tooltipRect.ttWidth), r.w.config.tooltip.followCursor) {
                        var f = r.getElGrid().getBoundingClientRect();
                        c = r.e.clientY - f.top
                    }
                    if (null === r.tooltip && (r.tooltip = n.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), n.config.tooltip.shared || (n.globals.comboChartsHasBars ? r.tooltipPosition.moveXCrosshairs(l + i / 2) : r.tooltipPosition.moveXCrosshairs(l)), !r.fixedTooltip && (!n.config.tooltip.shared || n.globals.isBarHorizontal && r.hasBars())) {
                        x && (h = n.globals.gridWidth - h), o.style.left = h + n.globals.translateX + "px";
                        var p = parseInt(a.paths.parentNode.getAttribute("data:realIndex")),
                            x = n.globals.isMultipleYAxis ? n.config.yaxis[p] && n.config.yaxis[p].reversed : n.config.yaxis[0].reversed;
                        !x || n.globals.isBarHorizontal && r.hasBars() || (c = c + u - 2 * (n.globals.series[e][g] < 0 ? u : 0)), r.tooltipRect.ttHeight + c > n.globals.gridHeight ? (c = n.globals.gridHeight - r.tooltipRect.ttHeight + n.globals.translateY, o.style.top = c + "px") : o.style.top = c + n.globals.translateY - r.tooltipRect.ttHeight / 2 + "px"
                    }
                }
            }, {
                key: "getBarTooltipXY",
                value: function (t) {
                    var e = t.e,
                        i = t.opt,
                        s = this.w,
                        a = null,
                        n = this.ttCtx,
                        r = 0,
                        o = 0,
                        l = 0,
                        h = 0,
                        c = 0,
                        d = e.target.classList;
                    if (d.contains("apexcharts-bar-area") || d.contains("apexcharts-candlestick-area") || d.contains("apexcharts-rangebar-area")) {
                        var u = e.target,
                            g = u.getBoundingClientRect(),
                            f = i.elGrid.getBoundingClientRect(),
                            p = g.height;
                        c = g.height;
                        var x = g.width,
                            b = parseInt(u.getAttribute("cx")),
                            m = parseInt(u.getAttribute("cy"));
                        h = parseFloat(u.getAttribute("barWidth"));
                        var v = "touchmove" === e.type ? e.touches[0].clientX : e.clientX;
                        a = parseInt(u.getAttribute("j")), r = parseInt(u.parentNode.getAttribute("rel")) - 1, s.globals.comboCharts && (r = parseInt(u.parentNode.getAttribute("data:realIndex"))), n.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: r,
                            j: a,
                            shared: !n.showOnIntersect && s.config.tooltip.shared
                        }), l = s.config.tooltip.followCursor ? s.globals.isBarHorizontal ? (o = v - f.left + 15, m - n.dataPointsDividedHeight + p / 2 - n.tooltipRect.ttHeight / 2) : (o = s.globals.isXNumeric ? b - x / 2 : b - n.dataPointsDividedWidth + x / 2, e.clientY - f.top - n.tooltipRect.ttHeight / 2 - 15) : s.globals.isBarHorizontal ? ((o = b) < n.xyRatios.baseLineInvertedY && (o = b - n.tooltipRect.ttWidth), m - n.dataPointsDividedHeight + p / 2 - n.tooltipRect.ttHeight / 2) : (o = s.globals.isXNumeric ? b - x / 2 : b - n.dataPointsDividedWidth + x / 2, m)
                    }
                    return {
                        x: o,
                        y: l,
                        barHeight: c,
                        barWidth: h,
                        i: r,
                        j: a
                    }
                }
            }]), e
        }(),
        pt = function () {
            function e(t) {
                n(this, e), this.w = t.w, this.ttCtx = t
            }
            return r(e, [{
                key: "drawXaxisTooltip",
                value: function () {
                    var t = this.w,
                        e = this.ttCtx,
                        i = "bottom" === t.config.xaxis.position;
                    e.xaxisOffY = i ? t.globals.gridHeight + 1 : 1;
                    var s = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top",
                        a = t.globals.dom.elWrap;
                    e.blxaxisTooltip && null === t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", s + " " + t.config.tooltip.theme), a.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText))
                }
            }, {
                key: "drawYaxisTooltip",
                value: function () {
                    for (var t = this.w, e = this.ttCtx, i = 0; i < t.config.yaxis.length; i++) {
                        var s = t.config.yaxis[i].opposite || t.config.yaxis[i].crosshairs.opposite;
                        e.yaxisOffX = s ? t.globals.gridWidth + 1 : 1;
                        var a = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i, s ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left"),
                            n = t.globals.dom.elWrap;
                        e.blyaxisTooltip && null === t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(i)) && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", a + " " + t.config.tooltip.theme), n.appendChild(e.yaxisTooltip), 0 === i && (e.yaxisTooltipText = []), e.yaxisTooltipText.push(document.createElement("div")), e.yaxisTooltipText[i].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[i]))
                    }
                }
            }, {
                key: "setXCrosshairWidth",
                value: function () {
                    var t = this.w,
                        e = this.ttCtx,
                        i = e.getElXCrosshairs();
                    if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width), t.globals.comboCharts) {
                        var s = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                        if (null !== s && "barWidth" === t.config.xaxis.crosshairs.width) {
                            var a = parseFloat(s.getAttribute("barWidth"));
                            e.xcrosshairsWidth = a
                        } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                            var n = t.globals.labels.length;
                            e.xcrosshairsWidth = t.globals.gridWidth / n
                        }
                    } else if ("tickWidth" === t.config.xaxis.crosshairs.width) {
                        var r = t.globals.labels.length;
                        e.xcrosshairsWidth = t.globals.gridWidth / r
                    } else if ("barWidth" === t.config.xaxis.crosshairs.width) {
                        var o = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
                        if (null !== o) {
                            var l = parseFloat(o.getAttribute("barWidth"));
                            e.xcrosshairsWidth = l
                        } else e.xcrosshairsWidth = 1
                    }
                    t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), null !== i && 0 < e.xcrosshairsWidth && i.setAttribute("width", e.xcrosshairsWidth)
                }
            }, {
                key: "handleYCrosshair",
                value: function () {
                    var t = this.w,
                        e = this.ttCtx;
                    e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden")
                }
            }, {
                key: "drawYaxisTooltipText",
                value: function (t, e, i) {
                    var s = this.ttCtx,
                        a = this.w,
                        n = a.globals.yLabelFormatters[t];
                    if (s.blyaxisTooltip) {
                        var r = s.getElGrid().getBoundingClientRect(),
                            o = (e - r.top) * i.yRatio[t],
                            l = a.globals.maxYArr[t] - a.globals.minYArr[t],
                            h = a.globals.minYArr[t] + (l - o);
                        s.tooltipPosition.moveYCrosshairs(e - r.top), s.yaxisTooltipText[t].innerHTML = n(h), s.tooltipPosition.moveYAxisTooltip(t)
                    }
                }
            }]), e
        }(),
        xt = function () {
            function i(t) {
                n(this, i), this.ctx = t, this.w = t.w;
                var e = this.w;
                this.tooltipUtil = new st(this), this.tooltipLabels = new at(this), this.tooltipPosition = new nt(this), this.marker = new rt(this), this.intersect = new ft(this), this.axesTooltip = new pt(this), this.showOnIntersect = e.config.tooltip.intersect, this.showTooltipTitle = e.config.tooltip.x.show, this.fixedTooltip = e.config.tooltip.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !e.globals.isBarHorizontal && e.config.tooltip.shared
            }
            return r(i, [{
                key: "getElTooltip",
                value: function (t) {
                    return t || (t = this), t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip")
                }
            }, {
                key: "getElXCrosshairs",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs")
                }
            }, {
                key: "getElGrid",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid")
                }
            }, {
                key: "drawTooltip",
                value: function (t) {
                    var e = this.w;
                    this.xyRatios = t, this.blxaxisTooltip = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.blyaxisTooltip = e.config.yaxis[0].tooltip.enabled && e.globals.axisCharts, this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1);
                    var i = document.createElement("div");
                    if (i.classList.add("apexcharts-tooltip"), i.classList.add(e.config.tooltip.theme), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) {
                        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
                        var s = new F(this.ctx);
                        this.xAxisTicksPositions = s.getXAxisTicksPositions()
                    }
                    if ((e.globals.comboCharts && !e.config.tooltip.shared || e.config.tooltip.intersect && !e.config.tooltip.shared || ("bar" === e.config.chart.type || "rangeBar" === e.config.chart.type) && !e.config.tooltip.shared) && (this.showOnIntersect = !0), 0 !== e.config.markers.size && 0 !== e.globals.markers.largestSize || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) {
                        this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = e.config.tooltip.style.fontFamily || e.config.chart.fontFamily, this.tooltipTitle.style.fontSize = e.config.tooltip.style.fontSize, i.appendChild(this.tooltipTitle));
                        var a = e.globals.series.length;
                        (e.globals.xyCharts || e.globals.comboCharts) && e.config.tooltip.shared && (a = this.showOnIntersect ? 1 : e.globals.series.length), this.ttItems = this.createTTElements(a), this.addSVGEvents()
                    }
                }
            }, {
                key: "createTTElements",
                value: function (t) {
                    for (var e = this.w, i = [], s = this.getElTooltip(), a = 0; a < t; a++) {
                        var n = document.createElement("div");
                        n.classList.add("apexcharts-tooltip-series-group");
                        var r = document.createElement("span");
                        r.classList.add("apexcharts-tooltip-marker"), r.style.backgroundColor = e.globals.colors[a], n.appendChild(r);
                        var o = document.createElement("div");
                        o.classList.add("apexcharts-tooltip-text"), o.style.fontFamily = e.config.tooltip.style.fontFamily || e.config.chart.fontFamily, o.style.fontSize = e.config.tooltip.style.fontSize;
                        var l = document.createElement("div");
                        l.classList.add("apexcharts-tooltip-y-group");
                        var h = document.createElement("span");
                        h.classList.add("apexcharts-tooltip-text-label"), l.appendChild(h);
                        var c = document.createElement("span");
                        c.classList.add("apexcharts-tooltip-text-value"), l.appendChild(c);
                        var d = document.createElement("div");
                        d.classList.add("apexcharts-tooltip-z-group");
                        var u = document.createElement("span");
                        u.classList.add("apexcharts-tooltip-text-z-label"), d.appendChild(u);
                        var g = document.createElement("span");
                        g.classList.add("apexcharts-tooltip-text-z-value"), d.appendChild(g), o.appendChild(l), o.appendChild(d), n.appendChild(o), s.appendChild(n), i.push(n)
                    }
                    return i
                }
            }, {
                key: "addSVGEvents",
                value: function () {
                    var t = this.w,
                        e = t.config.chart.type,
                        i = this.getElTooltip(),
                        s = !("bar" !== e && "candlestick" !== e && "rangeBar" !== e),
                        a = t.globals.dom.Paper.node,
                        n = this.getElGrid();
                    n && (this.seriesBound = n.getBoundingClientRect());
                    var r, o = [],
                        l = [],
                        h = {
                            hoverArea: a,
                            elGrid: n,
                            tooltipEl: i,
                            tooltipY: o,
                            tooltipX: l,
                            ttItems: this.ttItems
                        };
                    if (t.globals.axisCharts && ("area" === e || "line" === e || "scatter" === e || "bubble" === e ? r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : s ? r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-rangebar-area") : "heatmap" === e ? r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap") : "radar" === e && (r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-marker")), r && r.length))
                        for (var c = 0; c < r.length; c++) o.push(r[c].getAttribute("cy")), l.push(r[c].getAttribute("cx"));
                    if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || s && this.hasBars() && t.config.tooltip.shared) this.addPathsEventListeners([a], h);
                    else if (s && !t.globals.comboCharts) this.addBarsEventListeners(h);
                    else if ("bubble" === e || "scatter" === e || "radar" === e || this.showOnIntersect && ("area" === e || "line" === e)) this.addPointsEventsListeners(h);
                    else if (!t.globals.axisCharts || "heatmap" === e) {
                        var d = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
                        this.addPathsEventListeners(d, h)
                    }
                    if (this.showOnIntersect) {
                        var u = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker");
                        0 < u.length && this.addPathsEventListeners(u, h);
                        var g = t.globals.dom.baseEl.querySelectorAll(".apexcharts-area-series .apexcharts-marker");
                        0 < g.length && this.addPathsEventListeners(g, h), this.hasBars() && !t.config.tooltip.shared && this.addBarsEventListeners(h)
                    }
                }
            }, {
                key: "drawFixedTooltipRect",
                value: function () {
                    var t = this.w,
                        e = this.getElTooltip(),
                        i = e.getBoundingClientRect(),
                        s = i.width + 10,
                        a = i.height + 10,
                        n = t.config.tooltip.fixed.offsetX,
                        r = t.config.tooltip.fixed.offsetY;
                    return -1 < t.config.tooltip.fixed.position.toLowerCase().indexOf("right") && (n = n + t.globals.svgWidth - s + 10), -1 < t.config.tooltip.fixed.position.toLowerCase().indexOf("bottom") && (r = r + t.globals.svgHeight - a - 10), e.style.left = n + "px", e.style.top = r + "px", {
                        x: n,
                        y: r,
                        ttWidth: s,
                        ttHeight: a
                    }
                }
            }, {
                key: "addPointsEventsListeners",
                value: function (t) {
                    var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker");
                    this.addPathsEventListeners(e, t)
                }
            }, {
                key: "addBarsEventListeners",
                value: function (t) {
                    var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-rangebar-area");
                    this.addPathsEventListeners(e, t)
                }
            }, {
                key: "addPathsEventListeners",
                value: function (s, t) {
                    for (var a = this, n = this, e = function (e) {
                            var i = {
                                paths: s[e],
                                tooltipEl: t.tooltipEl,
                                tooltipY: t.tooltipY,
                                tooltipX: t.tooltipX,
                                elGrid: t.elGrid,
                                hoverArea: t.hoverArea,
                                ttItems: t.ttItems
                            };
                            a.w.globals.tooltipOpts = i, ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function (t) {
                                return s[e].addEventListener(t, n.seriesHover.bind(n, i), {
                                    capture: !1,
                                    passive: !0
                                })
                            })
                        }, i = 0; i < s.length; i++) e(i)
                }
            }, {
                key: "seriesHover",
                value: function (s, a) {
                    var n = this,
                        t = [],
                        e = this.w;
                    e.config.chart.group && (t = this.ctx.getGroupedCharts()), e.globals.axisCharts && (e.globals.minX === -1 / 0 && e.globals.maxX === 1 / 0 || 0 === e.globals.dataPoints) || (t.length ? t.forEach(function (t) {
                        var e = n.getElTooltip(t),
                            i = {
                                paths: s.paths,
                                tooltipEl: e,
                                tooltipY: s.tooltipY,
                                tooltipX: s.tooltipX,
                                elGrid: s.elGrid,
                                hoverArea: s.hoverArea,
                                ttItems: t.w.globals.tooltip.ttItems
                            };
                        t.w.globals.minX === n.w.globals.minX && t.w.globals.maxX === n.w.globals.maxX && t.w.globals.tooltip.seriesHoverByContext({
                            chartCtx: t,
                            ttCtx: t.w.globals.tooltip,
                            opt: i,
                            e: a
                        })
                    }) : this.seriesHoverByContext({
                        chartCtx: this.ctx,
                        ttCtx: this.w.globals.tooltip,
                        opt: s,
                        e: a
                    }))
                }
            }, {
                key: "seriesHoverByContext",
                value: function (t) {
                    var e = t.chartCtx,
                        i = t.ttCtx,
                        s = t.opt,
                        a = t.e,
                        n = e.w,
                        r = this.getElTooltip();
                    i.tooltipRect = {
                        x: 0,
                        y: 0,
                        ttWidth: r.getBoundingClientRect().width,
                        ttHeight: r.getBoundingClientRect().height
                    }, i.e = a, !i.hasBars() || n.globals.comboCharts || i.isBarShared || n.config.tooltip.onDatasetHover.highlightDataSeries && new D(e).toggleSeriesOnHover(a, a.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), n.globals.axisCharts ? i.axisChartsTooltips({
                        e: a,
                        opt: s,
                        tooltipRect: i.tooltipRect
                    }) : i.nonAxisChartsTooltips({
                        e: a,
                        opt: s,
                        tooltipRect: i.tooltipRect
                    })
                }
            }, {
                key: "axisChartsTooltips",
                value: function (t) {
                    var e, i, s, a = t.e,
                        n = t.opt,
                        r = this.w,
                        o = null,
                        l = n.elGrid.getBoundingClientRect(),
                        h = "touchmove" === a.type ? a.touches[0].clientX : a.clientX,
                        c = "touchmove" === a.type ? a.touches[0].clientY : a.clientY;
                    if (this.clientY = c, this.clientX = h, c < l.top || c > l.top + l.height) this.handleMouseOut(n);
                    else {
                        var d = this.getElTooltip(),
                            u = this.getElXCrosshairs(),
                            g = r.globals.xyCharts || "bar" === r.config.chart.type && !r.globals.isBarHorizontal && this.hasBars() && r.config.tooltip.shared || r.globals.comboCharts && this.hasBars;
                        if (r.globals.isBarHorizontal && this.hasBars() && (g = !1), "mousemove" === a.type || "touchmove" === a.type || "mouseup" === a.type) {
                            if (null !== u && u.classList.add("active"), null !== this.ycrosshairs && this.blyaxisTooltip && this.ycrosshairs.classList.add("active"), g && !this.showOnIntersect) {
                                e = (o = this.tooltipUtil.getNearestValues({
                                    context: this,
                                    hoverArea: n.hoverArea,
                                    elGrid: n.elGrid,
                                    clientX: h,
                                    clientY: c,
                                    hasBars: this.hasBars
                                })).j;
                                var f = o.capturedSeries;
                                if (o.hoverX < 0 || o.hoverX > r.globals.gridWidth) return void this.handleMouseOut(n);
                                if (null !== f) {
                                    if (null === r.globals.series[f][e]) return void n.tooltipEl.classList.remove("active");
                                    void 0 !== r.globals.series[f][e] ? r.config.tooltip.shared && this.tooltipUtil.isXoverlap(e) && this.tooltipUtil.isinitialSeriesSameLen() ? this.create(a, this, f, e, n.ttItems) : this.create(a, this, f, e, n.ttItems, !1) : this.tooltipUtil.isXoverlap(e) && this.create(a, this, 0, e, n.ttItems)
                                } else this.tooltipUtil.isXoverlap(e) && this.create(a, this, 0, e, n.ttItems)
                            } else if ("heatmap" === r.config.chart.type) {
                                var p = this.intersect.handleHeatTooltip({
                                    e: a,
                                    opt: n,
                                    x: i,
                                    y: s
                                });
                                i = p.x, s = p.y, d.style.left = i + "px", d.style.top = s + "px"
                            } else this.hasBars && this.intersect.handleBarTooltip({
                                e: a,
                                opt: n
                            }), this.hasMarkers && this.intersect.handleMarkerTooltip({
                                e: a,
                                opt: n,
                                x: i,
                                y: s
                            });
                            if (this.blyaxisTooltip)
                                for (var x = 0; x < r.config.yaxis.length; x++) this.axesTooltip.drawYaxisTooltipText(x, c, this.xyRatios);
                            n.tooltipEl.classList.add("active")
                        } else "mouseout" !== a.type && "touchend" !== a.type || this.handleMouseOut(n)
                    }
                }
            }, {
                key: "nonAxisChartsTooltips",
                value: function (t) {
                    var e = t.e,
                        i = t.opt,
                        s = t.tooltipRect,
                        a = this.w,
                        n = i.paths.getAttribute("rel"),
                        r = this.getElTooltip(),
                        o = a.globals.dom.elWrap.getBoundingClientRect();
                    if ("mousemove" === e.type || "touchmove" === e.type) {
                        r.classList.add("active"), this.tooltipLabels.drawSeriesTexts({
                            ttItems: i.ttItems,
                            i: parseInt(n) - 1,
                            shared: !1
                        });
                        var l = a.globals.clientX - o.left - s.ttWidth / 2,
                            h = a.globals.clientY - o.top - s.ttHeight - 10;
                        r.style.left = l + "px", r.style.top = h + "px"
                    } else "mouseout" !== e.type && "touchend" !== e.type || r.classList.remove("active")
                }
            }, {
                key: "deactivateHoverFilter",
                value: function () {
                    for (var t = this.w, e = new ht(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), s = 0; s < i.length; s++) e.pathMouseLeave(i[s])
                }
            }, {
                key: "handleMouseOut",
                value: function (t) {
                    var e = this.w,
                        i = this.getElXCrosshairs();
                    if (t.tooltipEl.classList.remove("active"), this.deactivateHoverFilter(), "bubble" !== e.config.chart.type && this.marker.resetPointsSize(), null !== i && i.classList.remove("active"), null !== this.ycrosshairs && this.ycrosshairs.classList.remove("active"), this.blxaxisTooltip && this.xaxisTooltip.classList.remove("active"), this.blyaxisTooltip) {
                        null === this.yaxisTTEls && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
                        for (var s = 0; s < this.yaxisTTEls.length; s++) this.yaxisTTEls[s].classList.remove("active")
                    }
                }
            }, {
                key: "getElMarkers",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelectorAll(" .apexcharts-series-markers")
                }
            }, {
                key: "getAllMarkers",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker")
                }
            }, {
                key: "hasMarkers",
                value: function () {
                    return 0 < this.getElMarkers().length
                }
            }, {
                key: "getElBars",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-rangebar-series")
                }
            }, {
                key: "hasBars",
                value: function () {
                    return 0 < this.getElBars().length
                }
            }, {
                key: "markerClick",
                value: function (t, e, i) {
                    var s = this.w;
                    "function" == typeof s.config.chart.events.markerClick && s.config.chart.events.markerClick(t, this.ctx, {
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: s
                    }), this.ctx.fireEvent("markerClick", [t, this.ctx, {
                        seriesIndex: e,
                        dataPointIndex: i,
                        w: s
                    }])
                }
            }, {
                key: "create",
                value: function (t, e, i, s, a) {
                    var n = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : null,
                        r = this.w,
                        o = e;
                    "mouseup" === t.type && this.markerClick(t, i, s), null === n && (n = r.config.tooltip.shared);
                    var l = this.hasMarkers(),
                        h = this.getElBars();
                    if (n) {
                        if (o.tooltipLabels.drawSeriesTexts({
                                ttItems: a,
                                i: i,
                                j: s,
                                shared: !this.showOnIntersect && r.config.tooltip.shared
                            }), l && (0 < r.globals.markers.largestSize ? o.marker.enlargePoints(s) : o.tooltipPosition.moveDynamicPointsOnHover(s)), this.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(h), 0 < this.barSeriesHeight)) {
                            var c = new ht(this.ctx),
                                d = r.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(s, "']"));
                            this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(s);
                            for (var u = 0; u < d.length; u++) c.pathMouseEnter(d[u])
                        }
                    } else o.tooltipLabels.drawSeriesTexts({
                        shared: !1,
                        ttItems: a,
                        i: i,
                        j: s
                    }), this.hasBars() && o.tooltipPosition.moveStickyTooltipOverBars(s), l && o.tooltipPosition.moveMarkers(i, s)
                }
            }]), i
        }(),
        bt = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w, this.ev = this.w.config.chart.events, this.localeValues = this.w.globals.locale.toolbar
            }
            return r(e, [{
                key: "createToolbar",
                value: function () {
                    var t = this.w,
                        e = document.createElement("div");
                    if (e.setAttribute("class", "apexcharts-toolbar"), t.globals.dom.elWrap.appendChild(e), this.elZoom = document.createElement("div"), this.elZoomIn = document.createElement("div"), this.elZoomOut = document.createElement("div"), this.elPan = document.createElement("div"), this.elSelection = document.createElement("div"), this.elZoomReset = document.createElement("div"), this.elMenuIcon = document.createElement("div"), this.elMenu = document.createElement("div"), this.elCustomIcons = [], this.t = t.config.chart.toolbar.tools, Array.isArray(this.t.customIcons))
                        for (var i = 0; i < this.t.customIcons.length; i++) this.elCustomIcons.push(document.createElement("div"));
                    this.elMenuItems = [];
                    var s = [];
                    this.t.zoomin && t.config.chart.zoom.enabled && s.push({
                        el: this.elZoomIn,
                        icon: "string" == typeof this.t.zoomin ? this.t.zoomin : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n',
                        title: this.localeValues.zoomIn,
                        class: "apexcharts-zoom-in-icon"
                    }), this.t.zoomout && t.config.chart.zoom.enabled && s.push({
                        el: this.elZoomOut,
                        icon: "string" == typeof this.t.zoomout ? this.t.zoomout : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>\n</svg>\n',
                        title: this.localeValues.zoomOut,
                        class: "apexcharts-zoom-out-icon"
                    }), this.t.zoom && t.config.chart.zoom.enabled && s.push({
                        el: this.elZoom,
                        icon: "string" == typeof this.t.zoom ? this.t.zoom : '<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>\n    <path d="M0 0h24v24H0V0z" fill="none"/>\n    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>\n</svg>',
                        title: this.localeValues.selectionZoom,
                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-zoom-icon"
                    }), this.t.selection && t.config.chart.selection.enabled && s.push({
                        el: this.elSelection,
                        icon: "string" == typeof this.t.selection ? this.t.selection : '<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>\n</svg>',
                        title: this.localeValues.selection,
                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-selection-icon"
                    }), this.t.pan && t.config.chart.zoom.enabled && s.push({
                        el: this.elPan,
                        icon: "string" == typeof this.t.pan ? this.t.pan : '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">\n    <defs>\n        <path d="M0 0h24v24H0z" id="a"/>\n    </defs>\n    <clipPath id="b">\n        <use overflow="visible" xlink:href="#a"/>\n    </clipPath>\n    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>\n</svg>',
                        title: this.localeValues.pan,
                        class: t.globals.isTouchDevice ? "hidden" : "apexcharts-pan-icon"
                    }), this.t.reset && t.config.chart.zoom.enabled && s.push({
                        el: this.elZoomReset,
                        icon: "string" == typeof this.t.reset ? this.t.reset : '<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">\n    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>\n    <path d="M0 0h24v24H0z" fill="none"/>\n</svg>',
                        title: this.localeValues.reset,
                        class: "apexcharts-reset-zoom-icon"
                    }), this.t.download && s.push({
                        el: this.elMenuIcon,
                        icon: "string" == typeof this.t.download ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>',
                        title: this.localeValues.menu,
                        class: "apexcharts-menu-icon"
                    });
                    for (var a = 0; a < this.elCustomIcons.length; a++) s.push({
                        el: this.elCustomIcons[a],
                        icon: this.t.customIcons[a].icon,
                        title: this.t.customIcons[a].title,
                        index: this.t.customIcons[a].index,
                        class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[a].class
                    });
                    s.forEach(function (t, e) {
                        t.index && lt.moveIndexInArray(s, e, t.index)
                    });
                    for (var n = 0; n < s.length; n++) ht.setAttrs(s[n].el, {
                        class: s[n].class,
                        title: s[n].title
                    }), s[n].el.innerHTML = s[n].icon, e.appendChild(s[n].el);
                    e.appendChild(this.elMenu), ht.setAttrs(this.elMenu, {
                        class: "apexcharts-menu"
                    });
                    for (var r = [{
                            name: "exportSVG",
                            title: this.localeValues.exportToSVG
                        }, {
                            name: "exportPNG",
                            title: this.localeValues.exportToPNG
                        }], o = 0; o < r.length; o++) this.elMenuItems.push(document.createElement("div")), this.elMenuItems[o].innerHTML = r[o].title, ht.setAttrs(this.elMenuItems[o], {
                        class: "apexcharts-menu-item ".concat(r[o].name),
                        title: r[o].title
                    }), this.elMenu.appendChild(this.elMenuItems[o]);
                    t.globals.zoomEnabled ? this.elZoom.classList.add("selected") : t.globals.panEnabled ? this.elPan.classList.add("selected") : t.globals.selectionEnabled && this.elSelection.classList.add("selected"), this.addToolbarEventListeners()
                }
            }, {
                key: "addToolbarEventListeners",
                value: function () {
                    var e = this;
                    this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleSelection.bind(this)), this.elZoom.addEventListener("click", this.toggleZooming.bind(this)), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function (t) {
                        t.classList.contains("exportSVG") ? t.addEventListener("click", e.downloadSVG.bind(e)) : t.classList.contains("exportPNG") && t.addEventListener("click", e.downloadPNG.bind(e))
                    });
                    for (var t = 0; t < this.t.customIcons.length; t++) this.elCustomIcons[t].addEventListener("click", this.t.customIcons[t].click)
                }
            }, {
                key: "toggleSelection",
                value: function () {
                    this.toggleOtherControls(), this.w.globals.selectionEnabled = !this.w.globals.selectionEnabled, this.elSelection.classList.contains("selected") ? this.elSelection.classList.remove("selected") : this.elSelection.classList.add("selected")
                }
            }, {
                key: "toggleZooming",
                value: function () {
                    this.toggleOtherControls(), this.w.globals.zoomEnabled = !this.w.globals.zoomEnabled, this.elZoom.classList.contains("selected") ? this.elZoom.classList.remove("selected") : this.elZoom.classList.add("selected")
                }
            }, {
                key: "getToolbarIconsReference",
                value: function () {
                    var t = this.w;
                    this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"))
                }
            }, {
                key: "enableZooming",
                value: function () {
                    this.toggleOtherControls(), this.w.globals.zoomEnabled = !0, this.elZoom && this.elZoom.classList.add("selected"), this.elPan && this.elPan.classList.remove("selected")
                }
            }, {
                key: "enablePanning",
                value: function () {
                    this.toggleOtherControls(), this.w.globals.panEnabled = !0, this.elPan && this.elPan.classList.add("selected"), this.elZoom && this.elZoom.classList.remove("selected")
                }
            }, {
                key: "togglePanning",
                value: function () {
                    this.toggleOtherControls(), this.w.globals.panEnabled = !this.w.globals.panEnabled, this.elPan.classList.contains("selected") ? this.elPan.classList.remove("selected") : this.elPan.classList.add("selected")
                }
            }, {
                key: "toggleOtherControls",
                value: function () {
                    var t = this.w;
                    t.globals.panEnabled = !1, t.globals.zoomEnabled = !1, t.globals.selectionEnabled = !1, this.getToolbarIconsReference(), this.elPan && this.elPan.classList.remove("selected"), this.elSelection && this.elSelection.classList.remove("selected"), this.elZoom && this.elZoom.classList.remove("selected")
                }
            }, {
                key: "handleZoomIn",
                value: function () {
                    var t = this.w,
                        e = (t.globals.minX + t.globals.maxX) / 2,
                        i = (t.globals.minX + e) / 2,
                        s = (t.globals.maxX + e) / 2;
                    t.globals.disableZoomIn || this.zoomUpdateOptions(i, s)
                }
            }, {
                key: "handleZoomOut",
                value: function () {
                    var t = this.w;
                    if (!("datetime" === t.config.xaxis.type && new Date(t.globals.minX).getUTCFullYear() < 1e3)) {
                        var e = (t.globals.minX + t.globals.maxX) / 2,
                            i = t.globals.minX - (e - t.globals.minX),
                            s = t.globals.maxX - (e - t.globals.maxX);
                        t.globals.disableZoomOut || this.zoomUpdateOptions(i, s)
                    }
                }
            }, {
                key: "zoomUpdateOptions",
                value: function (t, e) {
                    var i = {
                            min: t,
                            max: e
                        },
                        s = this.getBeforeZoomRange(i);
                    s && (i = s.xaxis), this.w.globals.zoomed = !0, this.ctx._updateOptions({
                        xaxis: i
                    }, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(i)
                }
            }, {
                key: "zoomCallback",
                value: function (t, e) {
                    "function" == typeof this.ev.zoomed && this.ev.zoomed(this.ctx, {
                        xaxis: t,
                        yaxis: e
                    })
                }
            }, {
                key: "getBeforeZoomRange",
                value: function (t, e) {
                    var i = null;
                    return "function" == typeof this.ev.beforeZoom && (i = this.ev.beforeZoom(this, {
                        xaxis: t,
                        yaxis: e
                    })), i
                }
            }, {
                key: "toggleMenu",
                value: function () {
                    this.elMenu.classList.contains("open") ? this.elMenu.classList.remove("open") : this.elMenu.classList.add("open")
                }
            }, {
                key: "downloadPNG",
                value: function () {
                    new Q(this.ctx).exportToPng(this.ctx), this.toggleMenu()
                }
            }, {
                key: "downloadSVG",
                value: function () {
                    new Q(this.ctx).exportToSVG(), this.toggleMenu()
                }
            }, {
                key: "handleZoomReset",
                value: function (t) {
                    var i = this;
                    this.ctx.getSyncedCharts().forEach(function (t) {
                        var e = t.w;
                        e.globals.minX !== e.globals.initialminX && e.globals.maxX !== e.globals.initialmaxX && (t.revertDefaultAxisMinMax(), "function" == typeof e.config.chart.events.zoomed && i.zoomCallback({
                            min: e.config.xaxis.min,
                            max: e.config.xaxis.max
                        }), e.globals.zoomed = !1, t._updateSeries(e.globals.initialSeries, e.config.chart.animations.dynamicAnimation.enabled))
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    this.elZoomReset && (this.elZoomReset.removeEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.removeEventListener("click", this.toggleSelection.bind(this)), this.elZoom.removeEventListener("click", this.toggleZooming.bind(this)), this.elZoomIn.removeEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.removeEventListener("click", this.handleZoomOut.bind(this)), this.elPan.removeEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.removeEventListener("click", this.toggleMenu.bind(this))), this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null
                }
            }]), e
        }(),
        mt = function (t) {
            function i(t) {
                var e;
                return n(this, i), (e = h(this, l(i).call(this, t))).ctx = t, e.w = t.w, e.dragged = !1, e.graphics = new ht(e.ctx), e.eventList = ["mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], e.clientX = 0, e.clientY = 0, e.startX = 0, e.endX = 0, e.dragX = 0, e.startY = 0, e.endY = 0, e.dragY = 0, e
            }
            return a(i, bt), r(i, [{
                key: "init",
                value: function (t) {
                    var e = this,
                        i = t.xyRatios,
                        s = this.w,
                        a = this;
                    this.xyRatios = i, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = s.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), s.globals.dom.elGraphical.add(this.zoomRect), s.globals.dom.elGraphical.add(this.selectionRect), "x" === s.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                        minX: 0,
                        minY: 0,
                        maxX: s.globals.gridWidth,
                        maxY: s.globals.gridHeight
                    }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : "y" === s.config.chart.selection.type ? this.slDraggableRect = this.selectionRect.draggable({
                        minX: 0,
                        maxX: s.globals.gridWidth
                    }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = s.globals.dom.baseEl.querySelector(s.globals.chartClass), this.hoverArea.classList.add("zoomable"), this.eventList.forEach(function (t) {
                        e.hoverArea.addEventListener(t, a.svgMouseEvents.bind(a, i), {
                            capture: !1,
                            passive: !0
                        })
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    var e = this,
                        i = this;
                    this.eventList.forEach(function (t) {
                        e.hoverArea && e.hoverArea.removeEventListener(t, i.svgMouseEvents.bind(i, i.xyRatios), {
                            capture: !1,
                            passive: !0
                        })
                    }), this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null
                }
            }, {
                key: "svgMouseEvents",
                value: function (t, e) {
                    var i = this.w,
                        s = this,
                        a = this.ctx.toolbar,
                        n = i.globals.zoomEnabled ? i.config.chart.zoom.type : i.config.chart.selection.type;
                    if (e.shiftKey ? (this.shiftWasPressed = !0, a.enablePanning()) : this.shiftWasPressed && (a.enableZooming(), this.shiftWasPressed = !1), !e.target.classList.contains("apexcharts-selection-rect") && !e.target.parentNode.classList.contains("apexcharts-toolbar")) {
                        if (s.clientX = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientX : "touchend" === e.type ? e.changedTouches[0].clientX : e.clientX, s.clientY = "touchmove" === e.type || "touchstart" === e.type ? e.touches[0].clientY : "touchend" === e.type ? e.changedTouches[0].clientY : e.clientY, "mousedown" === e.type && 1 === e.which) {
                            var r = s.gridRect.getBoundingClientRect();
                            s.startX = s.clientX - r.left, s.startY = s.clientY - r.top, s.dragged = !1, s.w.globals.mousedown = !0
                        }
                        if (("mousemove" === e.type && 1 === e.which || "touchmove" === e.type) && (s.dragged = !0, i.globals.panEnabled ? (i.globals.selection = null, s.w.globals.mousedown && s.panDragging({
                                context: s,
                                zoomtype: n,
                                xyRatios: t
                            })) : (s.w.globals.mousedown && i.globals.zoomEnabled || s.w.globals.mousedown && i.globals.selectionEnabled) && (s.selection = s.selectionDrawing({
                                context: s,
                                zoomtype: n
                            }))), "mouseup" === e.type || "touchend" === e.type) {
                            var o = s.gridRect.getBoundingClientRect();
                            s.w.globals.mousedown && (s.endX = s.clientX - o.left, s.endY = s.clientY - o.top, s.dragX = Math.abs(s.endX - s.startX), s.dragY = Math.abs(s.endY - s.startY), (i.globals.zoomEnabled || i.globals.selectionEnabled) && s.selectionDrawn({
                                context: s,
                                zoomtype: n
                            })), i.globals.zoomEnabled && s.hideSelectionRect(this.selectionRect), s.dragged = !1, s.w.globals.mousedown = !1
                        }
                        this.makeSelectionRectDraggable()
                    }
                }
            }, {
                key: "makeSelectionRectDraggable",
                value: function () {
                    var t = this.w;
                    if (this.selectionRect) {
                        var e = this.selectionRect.node.getBoundingClientRect();
                        0 < e.width && 0 < e.height && this.slDraggableRect.selectize().resize({
                            constraint: {
                                minX: 0,
                                minY: 0,
                                maxX: t.globals.gridWidth,
                                maxY: t.globals.gridHeight
                            }
                        }).on("resizing", this.selectionDragging.bind(this, "resizing"))
                    }
                }
            }, {
                key: "preselectedSelection",
                value: function () {
                    var t = this.w,
                        e = this.xyRatios;
                    if (!t.globals.zoomEnabled)
                        if (void 0 !== t.globals.selection && null !== t.globals.selection) this.drawSelectionRect(t.globals.selection);
                        else if (void 0 !== t.config.chart.selection.xaxis.min && void 0 !== t.config.chart.selection.xaxis.max) {
                        var i = (t.config.chart.selection.xaxis.min - t.globals.minX) / e.xRatio,
                            s = {
                                x: i,
                                y: 0,
                                width: t.globals.gridWidth - (t.globals.maxX - t.config.chart.selection.xaxis.max) / e.xRatio - i,
                                height: t.globals.gridHeight,
                                translateX: 0,
                                translateY: 0,
                                selectionEnabled: !0
                            };
                        this.drawSelectionRect(s), this.makeSelectionRectDraggable(), "function" == typeof t.config.chart.events.selection && t.config.chart.events.selection(this.ctx, {
                            xaxis: {
                                min: t.config.chart.selection.xaxis.min,
                                max: t.config.chart.selection.xaxis.max
                            },
                            yaxis: {}
                        })
                    }
                }
            }, {
                key: "drawSelectionRect",
                value: function (t) {
                    var e = t.x,
                        i = t.y,
                        s = t.width,
                        a = t.height,
                        n = t.translateX,
                        r = t.translateY,
                        o = this.w,
                        l = this.zoomRect,
                        h = this.selectionRect;
                    if (this.dragged || null !== o.globals.selection) {
                        var c = {
                            transform: "translate(" + n + ", " + r + ")"
                        };
                        o.globals.zoomEnabled && this.dragged && (l.attr({
                            x: e,
                            y: i,
                            width: s,
                            height: a,
                            fill: o.config.chart.zoom.zoomedArea.fill.color,
                            "fill-opacity": o.config.chart.zoom.zoomedArea.fill.opacity,
                            stroke: o.config.chart.zoom.zoomedArea.stroke.color,
                            "stroke-width": o.config.chart.zoom.zoomedArea.stroke.width,
                            "stroke-opacity": o.config.chart.zoom.zoomedArea.stroke.opacity
                        }), ht.setAttrs(l.node, c)), o.globals.selectionEnabled && (h.attr({
                            x: e,
                            y: i,
                            width: 0 < s ? s : 0,
                            height: 0 < a ? a : 0,
                            fill: o.config.chart.selection.fill.color,
                            "fill-opacity": o.config.chart.selection.fill.opacity,
                            stroke: o.config.chart.selection.stroke.color,
                            "stroke-width": o.config.chart.selection.stroke.width,
                            "stroke-dasharray": o.config.chart.selection.stroke.dashArray,
                            "stroke-opacity": o.config.chart.selection.stroke.opacity
                        }), ht.setAttrs(h.node, c))
                    }
                }
            }, {
                key: "hideSelectionRect",
                value: function (t) {
                    t && t.attr({
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    })
                }
            }, {
                key: "selectionDrawing",
                value: function (t) {
                    var e, i = t.context,
                        s = t.zoomtype,
                        a = this.w,
                        n = i,
                        r = this.gridRect.getBoundingClientRect(),
                        o = n.startX - 1,
                        l = n.startY,
                        h = n.clientX - r.left - o,
                        c = n.clientY - r.top - l,
                        d = 0,
                        u = 0;
                    return (Math.abs(h + o) > a.globals.gridWidth || n.clientX - r.left < 0) && (n.hideSelectionRect(this.zoomRect), n.dragged = !1, n.w.globals.mousedown = !1), o > n.clientX - r.left && (d = -(h = Math.abs(h))), l > n.clientY - r.top && (u = -(c = Math.abs(c))), e = "x" === s ? {
                        x: o,
                        y: 0,
                        width: h,
                        height: a.globals.gridHeight,
                        translateX: d,
                        translateY: 0
                    } : "y" === s ? {
                        x: 0,
                        y: l,
                        width: a.globals.gridWidth,
                        height: c,
                        translateX: 0,
                        translateY: u
                    } : {
                        x: o,
                        y: l,
                        width: h,
                        height: c,
                        translateX: d,
                        translateY: u
                    }, n.drawSelectionRect(e), n.selectionDragging("resizing"), e
                }
            }, {
                key: "selectionDragging",
                value: function (t, e) {
                    var r = this,
                        o = this.w,
                        l = this.xyRatios,
                        h = this.selectionRect,
                        i = 0;
                    "resizing" === t && (i = 30), "function" == typeof o.config.chart.events.selection && o.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function () {
                        var t = r.gridRect.getBoundingClientRect(),
                            e = h.node.getBoundingClientRect(),
                            i = o.globals.xAxisScale.niceMin + (e.left - t.left) * l.xRatio,
                            s = o.globals.xAxisScale.niceMin + (e.right - t.left) * l.xRatio,
                            a = o.globals.yAxisScale[0].niceMin + (t.bottom - e.bottom) * l.yRatio[0],
                            n = o.globals.yAxisScale[0].niceMax - (e.top - t.top) * l.yRatio[0];
                        o.config.chart.events.selection(r.ctx, {
                            xaxis: {
                                min: i,
                                max: s
                            },
                            yaxis: {
                                min: a,
                                max: n
                            }
                        })
                    }, i))
                }
            }, {
                key: "selectionDrawn",
                value: function (t) {
                    var e = t.context,
                        i = t.zoomtype,
                        s = this.w,
                        a = e,
                        n = this.xyRatios,
                        r = this.ctx.toolbar;
                    if (a.startX > a.endX) {
                        var o = a.startX;
                        a.startX = a.endX, a.endX = o
                    }
                    if (a.startY > a.endY) {
                        var l = a.startY;
                        a.startY = a.endY, a.endY = l
                    }
                    var h = s.globals.xAxisScale.niceMin + a.startX * n.xRatio,
                        c = s.globals.xAxisScale.niceMin + a.endX * n.xRatio,
                        d = [],
                        u = [];
                    if (s.config.yaxis.forEach(function (t, e) {
                            d.push(Math.floor(s.globals.yAxisScale[e].niceMax - n.yRatio[e] * a.startY)), u.push(Math.floor(s.globals.yAxisScale[e].niceMax - n.yRatio[e] * a.endY))
                        }), a.dragged && (10 < a.dragX || 10 < a.dragY) && h !== c)
                        if (s.globals.zoomEnabled) {
                            var g = lt.clone(s.config.yaxis);
                            s.globals.zoomed || (s.globals.lastXAxis = lt.clone(s.config.xaxis), s.globals.lastYAxis = lt.clone(s.config.yaxis));
                            var f = {
                                min: h,
                                max: c
                            };
                            if ("xy" !== i && "y" !== i || g.forEach(function (t, e) {
                                    g[e].min = u[e], g[e].max = d[e]
                                }), s.config.chart.zoom.autoScaleYaxis) {
                                var p = new R(a.ctx);
                                g = p.autoScaleY(a.ctx, {
                                    xaxis: f
                                })
                            }
                            if (r) {
                                var x = r.getBeforeZoomRange(f, g);
                                x && (f = x.xaxis ? x.xaxis : f, g = x.yaxis ? x.yaxe : g)
                            }
                            a.ctx._updateOptions({
                                xaxis: f,
                                yaxis: g
                            }, !1, a.w.config.chart.animations.dynamicAnimation.enabled), "function" == typeof s.config.chart.events.zoomed && r.zoomCallback(f, g), s.globals.zoomed = !0
                        } else if (s.globals.selectionEnabled) {
                        var b, m = null;
                        b = {
                            min: h,
                            max: c
                        }, "xy" !== i && "y" !== i || (m = lt.clone(s.config.yaxis)).forEach(function (t, e) {
                            m[e].min = u[e], m[e].max = d[e]
                        }), s.globals.selection = a.selection, "function" == typeof s.config.chart.events.selection && s.config.chart.events.selection(a.ctx, {
                            xaxis: b,
                            yaxis: m
                        })
                    }
                }
            }, {
                key: "panDragging",
                value: function (t) {
                    var e, i = t.context,
                        s = (t.zoomtype, this.w),
                        a = i;
                    if (void 0 !== s.globals.lastClientPosition.x) {
                        var n = s.globals.lastClientPosition.x - a.clientX,
                            r = s.globals.lastClientPosition.y - a.clientY;
                        Math.abs(n) > Math.abs(r) && 0 < n ? e = "left" : Math.abs(n) > Math.abs(r) && n < 0 ? e = "right" : Math.abs(r) > Math.abs(n) && 0 < r ? e = "up" : Math.abs(r) > Math.abs(n) && r < 0 && (e = "down")
                    }
                    s.globals.lastClientPosition = {
                        x: a.clientX,
                        y: a.clientY
                    };
                    var o = s.globals.minX,
                        l = s.globals.maxX;
                    this.panScrolled(e, o, l)
                }
            }, {
                key: "panScrolled",
                value: function (t, e, i) {
                    var s = this.w,
                        a = this.xyRatios,
                        n = lt.clone(s.config.yaxis);
                    "left" === t ? (e = s.globals.minX + s.globals.gridWidth / 15 * a.xRatio, i = s.globals.maxX + s.globals.gridWidth / 15 * a.xRatio) : "right" === t && (e = s.globals.minX - s.globals.gridWidth / 15 * a.xRatio, i = s.globals.maxX - s.globals.gridWidth / 15 * a.xRatio), (e < s.globals.initialminX || i > s.globals.initialmaxX) && (e = s.globals.minX, i = s.globals.maxX);
                    var r = {
                        min: e,
                        max: i
                    };
                    s.config.chart.zoom.autoScaleYaxis && (n = new R(me.ctx).autoScaleY(me.ctx, {
                        xaxis: r
                    })), this.ctx._updateOptions({
                        xaxis: {
                            min: e,
                            max: i
                        },
                        yaxis: n
                    }, !1, !1), "function" == typeof s.config.chart.events.scrolled && s.config.chart.events.scrolled(this.ctx, {
                        xaxis: {
                            min: e,
                            max: i
                        }
                    })
                }
            }]), i
        }(),
        vt = function () {
            function e(t) {
                n(this, e), this.ctx = t, this.w = t.w
            }
            return r(e, [{
                key: "draw",
                value: function () {
                    this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle")
                }
            }, {
                key: "drawTitleSubtitle",
                value: function (t) {
                    var e = this.w,
                        i = "title" === t ? e.config.title : e.config.subtitle,
                        s = e.globals.svgWidth / 2,
                        a = i.offsetY,
                        n = "middle";
                    if ("left" === i.align ? (s = 10, n = "start") : "right" === i.align && (s = e.globals.svgWidth - 10, n = "end"), s += i.offsetX, a = a + parseInt(i.style.fontSize) + 2, void 0 !== i.text) {
                        var r = new ht(this.ctx).drawText({
                            x: s,
                            y: a,
                            text: i.text,
                            textAnchor: n,
                            fontSize: i.style.fontSize,
                            fontFamily: i.style.fontFamily,
                            foreColor: i.style.color,
                            opacity: 1
                        });
                        r.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(r)
                    }
                }
            }]), e
        }();
    return $ = "undefined" != typeof window ? window : void 0, J = function (r, a) {
            var d = (void 0 !== this ? this : r).SVG = function (t) {
                if (d.supported) return t = new d.Doc(t), d.parser.draw || d.prepare(), t
            };
            if (d.ns = "http://www.w3.org/2000/svg", d.xmlns = "http://www.w3.org/2000/xmlns/", d.xlink = "http://www.w3.org/1999/xlink", d.svgjs = "http://svgjs.com/svgjs", d.supported = !0, !d.supported) return !1;
            d.did = 1e3, d.eid = function (t) {
                return "Svgjs" + o(t) + d.did++
            }, d.create = function (t) {
                var e = a.createElementNS(this.ns, t);
                return e.setAttribute("id", this.eid(t)), e
            }, d.extend = function () {
                var t, e, i, s;
                for (e = (t = [].slice.call(arguments)).pop(), s = t.length - 1; 0 <= s; s--)
                    if (t[s])
                        for (i in e) t[s].prototype[i] = e[i];
                d.Set && d.Set.inherit && d.Set.inherit()
            }, d.invent = function (t) {
                var e = "function" == typeof t.create ? t.create : function () {
                    this.constructor.call(this, d.create(t.create))
                };
                return t.inherit && (e.prototype = new t.inherit), t.extend && d.extend(e, t.extend), t.construct && d.extend(t.parent || d.Container, t.construct), e
            }, d.adopt = function (t) {
                return t ? t.instance ? t.instance : ((e = "svg" == t.nodeName ? t.parentNode instanceof r.SVGElement ? new d.Nested : new d.Doc : "linearGradient" == t.nodeName ? new d.Gradient("linear") : "radialGradient" == t.nodeName ? new d.Gradient("radial") : d[o(t.nodeName)] ? new(d[o(t.nodeName)]) : new d.Element(t)).type = t.nodeName, ((e.node = t).instance = e) instanceof d.Doc && e.namespace().defs(), e.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}), e) : null;
                var e
            }, d.prepare = function () {
                var t = a.getElementsByTagName("body")[0],
                    e = (t ? new d.Doc(t) : d.adopt(a.documentElement).nested()).size(2, 0);
                d.parser = {
                    body: t || a.documentElement,
                    draw: e.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node,
                    poly: e.polyline().node,
                    path: e.path().node,
                    native: d.create("svg")
                }
            }, d.parser = {
                native: d.create("svg")
            }, a.addEventListener("DOMContentLoaded", function () {
                d.parser.draw || d.prepare()
            }, !1), d.regex = {
                numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
                hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                rgb: /rgb\((\d+),(\d+),(\d+)\)/,
                reference: /#([a-z0-9\-_]+)/i,
                transforms: /\)\s*,?\s*/,
                whitespace: /\s/g,
                isHex: /^#[a-f0-9]{3,6}$/i,
                isRgb: /^rgb\(/,
                isCss: /[^:]+:[^;]+;?/,
                isBlank: /^(\s+)?$/,
                isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                isPercent: /^-?[\d\.]+%$/,
                isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
                delimiter: /[\s,]+/,
                hyphen: /([^e])\-/gi,
                pathLetters: /[MLHVCSQTAZ]/gi,
                isPathLetter: /[MLHVCSQTAZ]/i,
                numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
                dots: /\./g
            }, d.utils = {
                map: function (t, e) {
                    var i, s = t.length,
                        a = [];
                    for (i = 0; i < s; i++) a.push(e(t[i]));
                    return a
                },
                filter: function (t, e) {
                    var i, s = t.length,
                        a = [];
                    for (i = 0; i < s; i++) e(t[i]) && a.push(t[i]);
                    return a
                },
                radians: function (t) {
                    return t % 360 * Math.PI / 180
                },
                degrees: function (t) {
                    return 180 * t / Math.PI % 360
                },
                filterSVGElements: function (t) {
                    return this.filter(t, function (t) {
                        return t instanceof r.SVGElement
                    })
                }
            }, d.defaults = {
                attrs: {
                    "fill-opacity": 1,
                    "stroke-opacity": 1,
                    "stroke-width": 0,
                    "stroke-linejoin": "miter",
                    "stroke-linecap": "butt",
                    fill: "#000000",
                    stroke: "#000000",
                    opacity: 1,
                    x: 0,
                    y: 0,
                    cx: 0,
                    cy: 0,
                    width: 0,
                    height: 0,
                    r: 0,
                    rx: 0,
                    ry: 0,
                    offset: 0,
                    "stop-opacity": 1,
                    "stop-color": "#000000",
                    "font-size": 16,
                    "font-family": "Helvetica, Arial, sans-serif",
                    "text-anchor": "start"
                }
            }, d.Color = function (t) {
                var e, i;
                this.r = 0, this.g = 0, this.b = 0, t && ("string" == typeof t ? d.regex.isRgb.test(t) ? (e = d.regex.rgb.exec(t.replace(d.regex.whitespace, "")), this.r = parseInt(e[1]), this.g = parseInt(e[2]), this.b = parseInt(e[3])) : d.regex.isHex.test(t) && (e = d.regex.hex.exec(4 == (i = t).length ? ["#", i.substring(1, 2), i.substring(1, 2), i.substring(2, 3), i.substring(2, 3), i.substring(3, 4), i.substring(3, 4)].join("") : i), this.r = parseInt(e[1], 16), this.g = parseInt(e[2], 16), this.b = parseInt(e[3], 16)) : "object" === w(t) && (this.r = t.r, this.g = t.g, this.b = t.b))
            }, d.extend(d.Color, {
                toString: function () {
                    return this.toHex()
                },
                toHex: function () {
                    return "#" + c(this.r) + c(this.g) + c(this.b)
                },
                toRgb: function () {
                    return "rgb(" + [this.r, this.g, this.b].join() + ")"
                },
                brightness: function () {
                    return this.r / 255 * .3 + this.g / 255 * .59 + this.b / 255 * .11
                },
                morph: function (t) {
                    return this.destination = new d.Color(t), this
                },
                at: function (t) {
                    return this.destination ? (t = t < 0 ? 0 : 1 < t ? 1 : t, new d.Color({
                        r: ~~(this.r + (this.destination.r - this.r) * t),
                        g: ~~(this.g + (this.destination.g - this.g) * t),
                        b: ~~(this.b + (this.destination.b - this.b) * t)
                    })) : this
                }
            }), d.Color.test = function (t) {
                return t += "", d.regex.isHex.test(t) || d.regex.isRgb.test(t)
            }, d.Color.isRgb = function (t) {
                return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b
            }, d.Color.isColor = function (t) {
                return d.Color.isRgb(t) || d.Color.test(t)
            }, d.Array = function (t, e) {
                0 == (t = (t || []).valueOf()).length && e && (t = e.valueOf()), this.value = this.parse(t)
            }, d.extend(d.Array, {
                morph: function (t) {
                    if (this.destination = this.parse(t), this.value.length != this.destination.length) {
                        for (var e = this.value[this.value.length - 1], i = this.destination[this.destination.length - 1]; this.value.length > this.destination.length;) this.destination.push(i);
                        for (; this.value.length < this.destination.length;) this.value.push(e)
                    }
                    return this
                },
                settle: function () {
                    for (var t = 0, e = this.value.length, i = []; t < e; t++) - 1 == i.indexOf(this.value[t]) && i.push(this.value[t]);
                    return this.value = i
                },
                at: function (t) {
                    if (!this.destination) return this;
                    for (var e = 0, i = this.value.length, s = []; e < i; e++) s.push(this.value[e] + (this.destination[e] - this.value[e]) * t);
                    return new d.Array(s)
                },
                toString: function () {
                    return this.value.join(" ")
                },
                valueOf: function () {
                    return this.value
                },
                parse: function (t) {
                    return t = t.valueOf(), Array.isArray(t) ? t : this.split(t)
                },
                split: function (t) {
                    return t.trim().split(d.regex.delimiter).map(parseFloat)
                },
                reverse: function () {
                    return this.value.reverse(), this
                },
                clone: function () {
                    var t = new this.constructor;
                    return t.value = function t(e) {
                        for (var i = e.slice(0), s = i.length; s--;) Array.isArray(i[s]) && (i[s] = t(i[s]));
                        return i
                    }(this.value), t
                }
            }), d.PointArray = function (t, e) {
                d.Array.call(this, t, e || [
                    [0, 0]
                ])
            }, d.PointArray.prototype = new d.Array, d.PointArray.prototype.constructor = d.PointArray, d.extend(d.PointArray, {
                toString: function () {
                    for (var t = 0, e = this.value.length, i = []; t < e; t++) i.push(this.value[t].join(","));
                    return i.join(" ")
                },
                toLine: function () {
                    return {
                        x1: this.value[0][0],
                        y1: this.value[0][1],
                        x2: this.value[1][0],
                        y2: this.value[1][1]
                    }
                },
                at: function (t) {
                    if (!this.destination) return this;
                    for (var e = 0, i = this.value.length, s = []; e < i; e++) s.push([this.value[e][0] + (this.destination[e][0] - this.value[e][0]) * t, this.value[e][1] + (this.destination[e][1] - this.value[e][1]) * t]);
                    return new d.PointArray(s)
                },
                parse: function (t) {
                    var e = [];
                    if (t = t.valueOf(), Array.isArray(t)) {
                        if (Array.isArray(t[0])) return t.map(function (t) {
                            return t.slice()
                        });
                        if (null != t[0].x) return t.map(function (t) {
                            return [t.x, t.y]
                        })
                    } else t = t.trim().split(d.regex.delimiter).map(parseFloat);
                    t.length % 2 != 0 && t.pop();
                    for (var i = 0, s = t.length; i < s; i += 2) e.push([t[i], t[i + 1]]);
                    return e
                },
                move: function (t, e) {
                    var i = this.bbox();
                    if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
                        for (var s = this.value.length - 1; 0 <= s; s--) this.value[s] = [this.value[s][0] + t, this.value[s][1] + e];
                    return this
                },
                size: function (t, e) {
                    var i, s = this.bbox();
                    for (i = this.value.length - 1; 0 <= i; i--) s.width && (this.value[i][0] = (this.value[i][0] - s.x) * t / s.width + s.x), s.height && (this.value[i][1] = (this.value[i][1] - s.y) * e / s.height + s.y);
                    return this
                },
                bbox: function () {
                    return d.parser.draw || d.prepare(), d.parser.poly.setAttribute("points", this.toString()), d.parser.poly.getBBox()
                }
            });
            for (var l = {
                    M: function (t, e, i) {
                        return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
                    },
                    L: function (t, e) {
                        return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
                    },
                    H: function (t, e) {
                        return e.x = t[0], ["H", t[0]]
                    },
                    V: function (t, e) {
                        return e.y = t[0], ["V", t[0]]
                    },
                    C: function (t, e) {
                        return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
                    },
                    S: function (t, e) {
                        return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]]
                    },
                    Q: function (t, e) {
                        return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
                    },
                    T: function (t, e) {
                        return e.x = t[0], e.y = t[1], ["T", t[0], t[1]]
                    },
                    Z: function (t, e, i) {
                        return e.x = i.x, e.y = i.y, ["Z"]
                    },
                    A: function (t, e) {
                        return e.x = t[5], e.y = t[6], ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]]
                    }
                }, t = "mlhvqtcsaz".split(""), e = 0, i = t.length; e < i; ++e) l[t[e]] = function (n) {
                return function (t, e, i) {
                    if ("H" == n) t[0] = t[0] + e.x;
                    else if ("V" == n) t[0] = t[0] + e.y;
                    else if ("A" == n) t[5] = t[5] + e.x, t[6] = t[6] + e.y;
                    else
                        for (var s = 0, a = t.length; s < a; ++s) t[s] = t[s] + (s % 2 ? e.y : e.x);
                    return l[n](t, e, i)
                }
            }(t[e].toUpperCase());
            d.PathArray = function (t, e) {
                d.Array.call(this, t, e || [
                    ["M", 0, 0]
                ])
            }, d.PathArray.prototype = new d.Array, d.PathArray.prototype.constructor = d.PathArray, d.extend(d.PathArray, {
                toString: function () {
                    return function (t) {
                        for (var e = 0, i = t.length, s = ""; e < i; e++) s += t[e][0], null != t[e][1] && (s += t[e][1], null != t[e][2] && (s += " ", s += t[e][2], null != t[e][3] && (s += " ", s += t[e][3], s += " ", s += t[e][4], null != t[e][5] && (s += " ", s += t[e][5], s += " ", s += t[e][6], null != t[e][7] && (s += " ", s += t[e][7])))));
                        return s + " "
                    }(this.value)
                },
                move: function (t, e) {
                    var i = this.bbox();
                    if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
                        for (var s, a = this.value.length - 1; 0 <= a; a--) "M" == (s = this.value[a][0]) || "L" == s || "T" == s ? (this.value[a][1] += t, this.value[a][2] += e) : "H" == s ? this.value[a][1] += t : "V" == s ? this.value[a][1] += e : "C" == s || "S" == s || "Q" == s ? (this.value[a][1] += t, this.value[a][2] += e, this.value[a][3] += t, this.value[a][4] += e, "C" == s && (this.value[a][5] += t, this.value[a][6] += e)) : "A" == s && (this.value[a][6] += t, this.value[a][7] += e);
                    return this
                },
                size: function (t, e) {
                    var i, s, a = this.bbox();
                    for (i = this.value.length - 1; 0 <= i; i--) "M" == (s = this.value[i][0]) || "L" == s || "T" == s ? (this.value[i][1] = (this.value[i][1] - a.x) * t / a.width + a.x, this.value[i][2] = (this.value[i][2] - a.y) * e / a.height + a.y) : "H" == s ? this.value[i][1] = (this.value[i][1] - a.x) * t / a.width + a.x : "V" == s ? this.value[i][1] = (this.value[i][1] - a.y) * e / a.height + a.y : "C" == s || "S" == s || "Q" == s ? (this.value[i][1] = (this.value[i][1] - a.x) * t / a.width + a.x, this.value[i][2] = (this.value[i][2] - a.y) * e / a.height + a.y, this.value[i][3] = (this.value[i][3] - a.x) * t / a.width + a.x, this.value[i][4] = (this.value[i][4] - a.y) * e / a.height + a.y, "C" == s && (this.value[i][5] = (this.value[i][5] - a.x) * t / a.width + a.x, this.value[i][6] = (this.value[i][6] - a.y) * e / a.height + a.y)) : "A" == s && (this.value[i][1] = this.value[i][1] * t / a.width, this.value[i][2] = this.value[i][2] * e / a.height, this.value[i][6] = (this.value[i][6] - a.x) * t / a.width + a.x, this.value[i][7] = (this.value[i][7] - a.y) * e / a.height + a.y);
                    return this
                },
                equalCommands: function (t) {
                    var e, i, s;
                    for (t = new d.PathArray(t), s = this.value.length === t.value.length, e = 0, i = this.value.length; s && e < i; e++) s = this.value[e][0] === t.value[e][0];
                    return s
                },
                morph: function (t) {
                    return t = new d.PathArray(t), this.equalCommands(t) ? this.destination = t : this.destination = null, this
                },
                at: function (t) {
                    if (!this.destination) return this;
                    var e, i, s, a, n = this.value,
                        r = this.destination.value,
                        o = [],
                        l = new d.PathArray;
                    for (e = 0, i = n.length; e < i; e++) {
                        for (o[e] = [n[e][0]], s = 1, a = n[e].length; s < a; s++) o[e][s] = n[e][s] + (r[e][s] - n[e][s]) * t;
                        "A" === o[e][0] && (o[e][4] = +(0 != o[e][4]), o[e][5] = +(0 != o[e][5]))
                    }
                    return l.value = o, l
                },
                parse: function (t) {
                    if (t instanceof d.PathArray) return t.valueOf();
                    var e, i = {
                        M: 2,
                        L: 2,
                        H: 1,
                        V: 1,
                        C: 6,
                        S: 4,
                        Q: 4,
                        T: 2,
                        A: 7,
                        Z: 0
                    };
                    t = "string" == typeof t ? t.replace(d.regex.numbersWithDots, h).replace(d.regex.pathLetters, " $& ").replace(d.regex.hyphen, "$1 -").trim().split(d.regex.delimiter) : t.reduce(function (t, e) {
                        return [].concat.call(t, e)
                    }, []);
                    for (var s = [], a = new d.Point, n = new d.Point, r = 0, o = t.length; d.regex.isPathLetter.test(t[r]) ? (e = t[r], ++r) : "M" == e ? e = "L" : "m" == e && (e = "l"), s.push(l[e].call(null, t.slice(r, r += i[e.toUpperCase()]).map(parseFloat), a, n)), r < o;);
                    return s
                },
                bbox: function () {
                    return d.parser.draw || d.prepare(), d.parser.path.setAttribute("d", this.toString()), d.parser.path.getBBox()
                }
            }), d.Number = d.invent({
                create: function (t, e) {
                    this.value = 0, this.unit = e || "", "number" == typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" == typeof t ? (e = t.match(d.regex.numberAndUnit)) && (this.value = parseFloat(e[1]), "%" == e[5] ? this.value /= 100 : "s" == e[5] && (this.value *= 1e3), this.unit = e[5]) : t instanceof d.Number && (this.value = t.valueOf(), this.unit = t.unit)
                },
                extend: {
                    toString: function () {
                        return ("%" == this.unit ? ~~(1e8 * this.value) / 1e6 : "s" == this.unit ? this.value / 1e3 : this.value) + this.unit
                    },
                    toJSON: function () {
                        return this.toString()
                    },
                    valueOf: function () {
                        return this.value
                    },
                    plus: function (t) {
                        return t = new d.Number(t), new d.Number(this + t, this.unit || t.unit)
                    },
                    minus: function (t) {
                        return t = new d.Number(t), new d.Number(this - t, this.unit || t.unit)
                    },
                    times: function (t) {
                        return t = new d.Number(t), new d.Number(this * t, this.unit || t.unit)
                    },
                    divide: function (t) {
                        return t = new d.Number(t), new d.Number(this / t, this.unit || t.unit)
                    },
                    to: function (t) {
                        var e = new d.Number(this);
                        return "string" == typeof t && (e.unit = t), e
                    },
                    morph: function (t) {
                        return this.destination = new d.Number(t), t.relative && (this.destination.value += this.value), this
                    },
                    at: function (t) {
                        return this.destination ? new d.Number(this.destination).minus(this).times(t).plus(this) : this
                    }
                }
            }), d.Element = d.invent({
                create: function (t) {
                    this._stroke = d.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = t) && (this.type = t.nodeName, (this.node.instance = this)._stroke = t.getAttribute("stroke") || this._stroke)
                },
                extend: {
                    x: function (t) {
                        return this.attr("x", t)
                    },
                    y: function (t) {
                        return this.attr("y", t)
                    },
                    cx: function (t) {
                        return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
                    },
                    cy: function (t) {
                        return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
                    },
                    move: function (t, e) {
                        return this.x(t).y(e)
                    },
                    center: function (t, e) {
                        return this.cx(t).cy(e)
                    },
                    width: function (t) {
                        return this.attr("width", t)
                    },
                    height: function (t) {
                        return this.attr("height", t)
                    },
                    size: function (t, e) {
                        var i = u(this, t, e);
                        return this.width(new d.Number(i.width)).height(new d.Number(i.height))
                    },
                    clone: function (t) {
                        this.writeDataToDom();
                        var e = x(this.node.cloneNode(!0));
                        return t ? t.add(e) : this.after(e), e
                    },
                    remove: function () {
                        return this.parent() && this.parent().removeElement(this), this
                    },
                    replace: function (t) {
                        return this.after(t).remove(), t
                    },
                    addTo: function (t) {
                        return t.put(this)
                    },
                    putIn: function (t) {
                        return t.add(this)
                    },
                    id: function (t) {
                        return this.attr("id", t)
                    },
                    inside: function (t, e) {
                        var i = this.bbox();
                        return t > i.x && e > i.y && t < i.x + i.width && e < i.y + i.height
                    },
                    show: function () {
                        return this.style("display", "")
                    },
                    hide: function () {
                        return this.style("display", "none")
                    },
                    visible: function () {
                        return "none" != this.style("display")
                    },
                    toString: function () {
                        return this.attr("id")
                    },
                    classes: function () {
                        var t = this.attr("class");
                        return null == t ? [] : t.trim().split(d.regex.delimiter)
                    },
                    hasClass: function (t) {
                        return -1 != this.classes().indexOf(t)
                    },
                    addClass: function (t) {
                        if (!this.hasClass(t)) {
                            var e = this.classes();
                            e.push(t), this.attr("class", e.join(" "))
                        }
                        return this
                    },
                    removeClass: function (e) {
                        return this.hasClass(e) && this.attr("class", this.classes().filter(function (t) {
                            return t != e
                        }).join(" ")), this
                    },
                    toggleClass: function (t) {
                        return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
                    },
                    reference: function (t) {
                        return d.get(this.attr(t))
                    },
                    parent: function (t) {
                        var e = this;
                        if (!e.node.parentNode) return null;
                        if (e = d.adopt(e.node.parentNode), !t) return e;
                        for (; e && e.node instanceof r.SVGElement;) {
                            if ("string" == typeof t ? e.matches(t) : e instanceof t) return e;
                            if (!e.node.parentNode || "#document" == e.node.parentNode.nodeName) return null;
                            e = d.adopt(e.node.parentNode)
                        }
                    },
                    doc: function () {
                        return this instanceof d.Doc ? this : this.parent(d.Doc)
                    },
                    parents: function (t) {
                        var e = [],
                            i = this;
                        do {
                            if (!(i = i.parent(t)) || !i.node) break;
                            e.push(i)
                        } while (i.parent);
                        return e
                    },
                    matches: function (t) {
                        return e = this.node, i = t, (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, i);
                        var e, i
                    },
                    native: function () {
                        return this.node
                    },
                    svg: function (t) {
                        var e = a.createElement("svg");
                        if (!(t && this instanceof d.Parent)) return e.appendChild(t = a.createElement("svg")), this.writeDataToDom(), t.appendChild(this.node.cloneNode(!0)), e.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
                        e.innerHTML = "<svg>" + t.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
                        for (var i = 0, s = e.firstChild.childNodes.length; i < s; i++) this.node.appendChild(e.firstChild.firstChild);
                        return this
                    },
                    writeDataToDom: function () {
                        return (this.each || this.lines) && (this.each ? this : this.lines()).each(function () {
                            this.writeDataToDom()
                        }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this
                    },
                    setData: function (t) {
                        return this.dom = t, this
                    },
                    is: function (t) {
                        return this instanceof t
                    }
                }
            }), d.easing = {
                "-": function (t) {
                    return t
                },
                "<>": function (t) {
                    return -Math.cos(t * Math.PI) / 2 + .5
                },
                ">": function (t) {
                    return Math.sin(t * Math.PI / 2)
                },
                "<": function (t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                }
            }, d.morph = function (i) {
                return function (t, e) {
                    return new d.MorphObj(t, e).at(i)
                }
            }, d.Situation = d.invent({
                create: function (t) {
                    this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new d.Number(t.duration).valueOf(), this.delay = new d.Number(t.delay).valueOf(), this.start = +new Date + this.delay, this.finish = this.start + this.duration, this.ease = t.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {}
                }
            }), d.FX = d.invent({
                create: function (t) {
                    this._target = t, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1
                },
                extend: {
                    animate: function (t, e, i) {
                        "object" === w(t) && (e = t.ease, i = t.delay, t = t.duration);
                        var s = new d.Situation({
                            duration: t || 1e3,
                            delay: i || 0,
                            ease: d.easing[e || "-"] || e
                        });
                        return this.queue(s), this
                    },
                    delay: function (t) {
                        var e = new d.Situation({
                            duration: t,
                            delay: 0,
                            ease: d.easing["-"]
                        });
                        return this.queue(e)
                    },
                    target: function (t) {
                        return t && t instanceof d.Element ? (this._target = t, this) : this._target
                    },
                    timeToAbsPos: function (t) {
                        return (t - this.situation.start) / (this.situation.duration / this._speed)
                    },
                    absPosToTime: function (t) {
                        return this.situation.duration / this._speed * t + this.situation.start
                    },
                    startAnimFrame: function () {
                        this.stopAnimFrame(), this.animationFrame = r.requestAnimationFrame(function () {
                            this.step()
                        }.bind(this))
                    },
                    stopAnimFrame: function () {
                        r.cancelAnimationFrame(this.animationFrame)
                    },
                    start: function () {
                        return !this.active && this.situation && (this.active = !0, this.startCurrent()), this
                    },
                    startCurrent: function () {
                        return this.situation.start = +new Date + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step()
                    },
                    queue: function (t) {
                        return ("function" == typeof t || t instanceof d.Situation) && this.situations.push(t), this.situation || (this.situation = this.situations.shift()), this
                    },
                    dequeue: function () {
                        return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof d.Situation ? this.start() : this.situation.call(this)), this
                    },
                    initAnimations: function () {
                        var t, e, i, s = this.situation;
                        if (s.init) return this;
                        for (t in s.animations)
                            for (i = this.target()[t](), Array.isArray(i) || (i = [i]), Array.isArray(s.animations[t]) || (s.animations[t] = [s.animations[t]]), e = i.length; e--;) s.animations[t][e] instanceof d.Number && (i[e] = new d.Number(i[e])), s.animations[t][e] = i[e].morph(s.animations[t][e]);
                        for (t in s.attrs) s.attrs[t] = new d.MorphObj(this.target().attr(t), s.attrs[t]);
                        for (t in s.styles) s.styles[t] = new d.MorphObj(this.target().style(t), s.styles[t]);
                        return s.initialTransformation = this.target().matrixify(), s.init = !0, this
                    },
                    clearQueue: function () {
                        return this.situations = [], this
                    },
                    clearCurrent: function () {
                        return this.situation = null, this
                    },
                    stop: function (t, e) {
                        var i = this.active;
                        return this.active = !1, e && this.clearQueue(), t && this.situation && (!i && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent()
                    },
                    reset: function () {
                        if (this.situation) {
                            var t = this.situation;
                            this.stop(), this.situation = t, this.atStart()
                        }
                        return this
                    },
                    finish: function () {
                        for (this.stop(!0, !1); this.dequeue().situation && this.stop(!0, !1););
                        return this.clearQueue().clearCurrent(), this
                    },
                    atStart: function () {
                        return this.at(0, !0)
                    },
                    atEnd: function () {
                        return !0 === this.situation.loops && (this.situation.loops = this.situation.loop + 1), "number" == typeof this.situation.loops ? this.at(this.situation.loops, !0) : this.at(1, !0)
                    },
                    at: function (t, e) {
                        var i = this.situation.duration / this._speed;
                        return this.absPos = t, e || (this.situation.reversed && (this.absPos = 1 - this.absPos), this.absPos += this.situation.loop), this.situation.start = +new Date - this.absPos * i, this.situation.finish = this.situation.start + i, this.step(!0)
                    },
                    speed: function (t) {
                        return 0 === t ? this.pause() : t ? (this._speed = t, this.at(this.absPos, !0)) : this._speed
                    },
                    loop: function (t, e) {
                        var i = this.last();
                        return i.loops = null == t || t, i.loop = 0, e && (i.reversing = !0), this
                    },
                    pause: function () {
                        return this.paused = !0, this.stopAnimFrame(), this
                    },
                    play: function () {
                        return this.paused ? (this.paused = !1, this.at(this.absPos, !0)) : this
                    },
                    reverse: function (t) {
                        var e = this.last();
                        return e.reversed = void 0 === t ? !e.reversed : t, this
                    },
                    progress: function (t) {
                        return t ? this.situation.ease(this.pos) : this.pos
                    },
                    after: function (i) {
                        var s = this.last();
                        return this.target().on("finished.fx", function t(e) {
                            e.detail.situation == s && (i.call(this, s), this.off("finished.fx", t))
                        }), this._callStart()
                    },
                    during: function (e) {
                        var i = this.last(),
                            t = function (t) {
                                t.detail.situation == i && e.call(this, t.detail.pos, d.morph(t.detail.pos), t.detail.eased, i)
                            };
                        return this.target().off("during.fx", t).on("during.fx", t), this.after(function () {
                            this.off("during.fx", t)
                        }), this._callStart()
                    },
                    afterAll: function (i) {
                        var t = function t(e) {
                            i.call(this), this.off("allfinished.fx", t)
                        };
                        return this.target().off("allfinished.fx", t).on("allfinished.fx", t), this._callStart()
                    },
                    duringAll: function (e) {
                        var t = function (t) {
                            e.call(this, t.detail.pos, d.morph(t.detail.pos), t.detail.eased, t.detail.situation)
                        };
                        return this.target().off("during.fx", t).on("during.fx", t), this.afterAll(function () {
                            this.off("during.fx", t)
                        }), this._callStart()
                    },
                    last: function () {
                        return this.situations.length ? this.situations[this.situations.length - 1] : this.situation
                    },
                    add: function (t, e, i) {
                        return this.last()[i || "animations"][t] = e, this._callStart()
                    },
                    step: function (t) {
                        var e, i, s;
                        t || (this.absPos = this.timeToAbsPos(+new Date)), !1 !== this.situation.loops ? (e = Math.max(this.absPos, 0), i = Math.floor(e), !0 === this.situation.loops || i < this.situation.loops ? (this.pos = e - i, s = this.situation.loop, this.situation.loop = i) : (this.absPos = this.situation.loops, this.pos = 1, s = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != Boolean((this.situation.loop - s) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
                        var a = this.situation.ease(this.pos);
                        for (var n in this.situation.once) n > this.lastPos && n <= a && (this.situation.once[n].call(this.target(), this.pos, a), delete this.situation.once[n]);
                        return this.active && this.target().fire("during", {
                            pos: this.pos,
                            eased: a,
                            fx: this,
                            situation: this.situation
                        }), this.situation && (this.eachAt(), 1 == this.pos && !this.situation.reversed || this.situation.reversed && 0 == this.pos ? (this.stopAnimFrame(), this.target().fire("finished", {
                            fx: this,
                            situation: this.situation
                        }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = a), this
                    },
                    eachAt: function () {
                        var t, e, i, s = this,
                            a = this.target(),
                            n = this.situation;
                        for (t in n.animations) i = [].concat(n.animations[t]).map(function (t) {
                            return "string" != typeof t && t.at ? t.at(n.ease(s.pos), s.pos) : t
                        }), a[t].apply(a, i);
                        for (t in n.attrs) i = [t].concat(n.attrs[t]).map(function (t) {
                            return "string" != typeof t && t.at ? t.at(n.ease(s.pos), s.pos) : t
                        }), a.attr.apply(a, i);
                        for (t in n.styles) i = [t].concat(n.styles[t]).map(function (t) {
                            return "string" != typeof t && t.at ? t.at(n.ease(s.pos), s.pos) : t
                        }), a.style.apply(a, i);
                        if (n.transforms.length) {
                            for (i = n.initialTransformation, t = 0, e = n.transforms.length; t < e; t++) {
                                var r = n.transforms[t];
                                i = r instanceof d.Matrix ? r.relative ? i.multiply((new d.Matrix).morph(r).at(n.ease(this.pos))) : i.morph(r).at(n.ease(this.pos)) : (r.relative || r.undo(i.extract()), i.multiply(r.at(n.ease(this.pos))))
                            }
                            a.matrix(i)
                        }
                        return this
                    },
                    once: function (t, e, i) {
                        var s = this.last();
                        return i || (t = s.ease(t)), s.once[t] = e, this
                    },
                    _callStart: function () {
                        return setTimeout(function () {
                            this.start()
                        }.bind(this), 0), this
                    }
                },
                parent: d.Element,
                construct: {
                    animate: function (t, e, i) {
                        return (this.fx || (this.fx = new d.FX(this))).animate(t, e, i)
                    },
                    delay: function (t) {
                        return (this.fx || (this.fx = new d.FX(this))).delay(t)
                    },
                    stop: function (t, e) {
                        return this.fx && this.fx.stop(t, e), this
                    },
                    finish: function () {
                        return this.fx && this.fx.finish(), this
                    },
                    pause: function () {
                        return this.fx && this.fx.pause(), this
                    },
                    play: function () {
                        return this.fx && this.fx.play(), this
                    },
                    speed: function (t) {
                        if (this.fx) {
                            if (null == t) return this.fx.speed();
                            this.fx.speed(t)
                        }
                        return this
                    }
                }
            }), d.MorphObj = d.invent({
                create: function (t, e) {
                    return d.Color.isColor(e) ? new d.Color(t).morph(e) : d.regex.delimiter.test(t) ? d.regex.pathLetters.test(t) ? new d.PathArray(t).morph(e) : new d.Array(t).morph(e) : d.regex.numberAndUnit.test(e) ? new d.Number(t).morph(e) : (this.value = t, void(this.destination = e))
                },
                extend: {
                    at: function (t, e) {
                        return e < 1 ? this.value : this.destination
                    },
                    valueOf: function () {
                        return this.value
                    }
                }
            }), d.extend(d.FX, {
                attr: function (t, e, i) {
                    if ("object" === w(t))
                        for (var s in t) this.attr(s, t[s]);
                    else this.add(t, e, "attrs");
                    return this
                },
                style: function (t, e) {
                    if ("object" === w(t))
                        for (var i in t) this.style(i, t[i]);
                    else this.add(t, e, "styles");
                    return this
                },
                x: function (t, e) {
                    if (this.target() instanceof d.G) return this.transform({
                        x: t
                    }, e), this;
                    var i = new d.Number(t);
                    return i.relative = e, this.add("x", i)
                },
                y: function (t, e) {
                    if (this.target() instanceof d.G) return this.transform({
                        y: t
                    }, e), this;
                    var i = new d.Number(t);
                    return i.relative = e, this.add("y", i)
                },
                cx: function (t) {
                    return this.add("cx", new d.Number(t))
                },
                cy: function (t) {
                    return this.add("cy", new d.Number(t))
                },
                move: function (t, e) {
                    return this.x(t).y(e)
                },
                center: function (t, e) {
                    return this.cx(t).cy(e)
                },
                size: function (t, e) {
                    var i;
                    return this.target() instanceof d.Text ? this.attr("font-size", t) : (t && e || (i = this.target().bbox()), t || (t = i.width / i.height * e), e || (e = i.height / i.width * t), this.add("width", new d.Number(t)).add("height", new d.Number(e))), this
                },
                width: function (t) {
                    return this.add("width", new d.Number(t))
                },
                height: function (t) {
                    return this.add("height", new d.Number(t))
                },
                plot: function (t, e, i, s) {
                    return 4 == arguments.length ? this.plot([t, e, i, s]) : this.add("plot", new(this.target().morphArray)(t))
                },
                leading: function (t) {
                    return this.target().leading ? this.add("leading", new d.Number(t)) : this
                },
                viewbox: function (t, e, i, s) {
                    return this.target() instanceof d.Container && this.add("viewbox", new d.ViewBox(t, e, i, s)), this
                },
                update: function (t) {
                    if (this.target() instanceof d.Stop) {
                        if ("number" == typeof t || t instanceof d.Number) return this.update({
                            offset: t,
                            color: arguments[1],
                            opacity: arguments[2]
                        });
                        null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", t.offset)
                    }
                    return this
                }
            }), d.Box = d.invent({
                create: function (t, e, i, s) {
                    if (!("object" !== w(t) || t instanceof d.Element)) return d.Box.call(this, null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height);
                    4 == arguments.length && (this.x = t, this.y = e, this.width = i, this.height = s), b(this)
                },
                extend: {
                    merge: function (t) {
                        var e = new this.constructor;
                        return e.x = Math.min(this.x, t.x), e.y = Math.min(this.y, t.y), e.width = Math.max(this.x + this.width, t.x + t.width) - e.x, e.height = Math.max(this.y + this.height, t.y + t.height) - e.y, b(e)
                    },
                    transform: function (e) {
                        var t, i = 1 / 0,
                            s = -1 / 0,
                            a = 1 / 0,
                            n = -1 / 0;
                        return [new d.Point(this.x, this.y), new d.Point(this.x2, this.y), new d.Point(this.x, this.y2), new d.Point(this.x2, this.y2)].forEach(function (t) {
                            t = t.transform(e), i = Math.min(i, t.x), s = Math.max(s, t.x), a = Math.min(a, t.y), n = Math.max(n, t.y)
                        }), (t = new this.constructor).x = i, t.width = s - i, t.y = a, t.height = n - a, b(t), t
                    }
                }
            }), d.BBox = d.invent({
                create: function (e) {
                    if (d.Box.apply(this, [].slice.call(arguments)), e instanceof d.Element) {
                        var i;
                        try {
                            if (!a.documentElement.contains) {
                                for (var t = e.node; t.parentNode;) t = t.parentNode;
                                if (t != a) throw new Error("Element not in the dom")
                            }
                            i = e.node.getBBox()
                        } catch (t) {
                            if (e instanceof d.Shape) {
                                d.parser.draw || d.prepare();
                                var s = e.clone(d.parser.draw.instance).show();
                                i = s.node.getBBox(), s.remove()
                            } else i = {
                                x: e.node.clientLeft,
                                y: e.node.clientTop,
                                width: e.node.clientWidth,
                                height: e.node.clientHeight
                            }
                        }
                        d.Box.call(this, i)
                    }
                },
                inherit: d.Box,
                parent: d.Element,
                construct: {
                    bbox: function () {
                        return new d.BBox(this)
                    }
                }
            }), d.BBox.prototype.constructor = d.BBox, d.extend(d.Element, {
                tbox: function () {
                    return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."), this.rbox(this.doc())
                }
            }), d.RBox = d.invent({
                create: function (t) {
                    d.Box.apply(this, [].slice.call(arguments)), t instanceof d.Element && d.Box.call(this, t.node.getBoundingClientRect())
                },
                inherit: d.Box,
                parent: d.Element,
                extend: {
                    addOffset: function () {
                        return this.x += r.pageXOffset, this.y += r.pageYOffset, this
                    }
                },
                construct: {
                    rbox: function (t) {
                        return t ? new d.RBox(this).transform(t.screenCTM().inverse()) : new d.RBox(this).addOffset()
                    }
                }
            }), d.RBox.prototype.constructor = d.RBox, d.Matrix = d.invent({
                create: function (t) {
                    var e, i = f([1, 0, 0, 1, 0, 0]);
                    for (t = t instanceof d.Element ? t.matrixify() : "string" == typeof t ? f(t.split(d.regex.delimiter).map(parseFloat)) : 6 == arguments.length ? f([].slice.call(arguments)) : Array.isArray(t) ? f(t) : "object" === w(t) ? t : i, e = v.length - 1; 0 <= e; --e) this[v[e]] = null != t[v[e]] ? t[v[e]] : i[v[e]]
                },
                extend: {
                    extract: function () {
                        var t = g(this, 0, 1),
                            e = g(this, 1, 0),
                            i = 180 / Math.PI * Math.atan2(t.y, t.x) - 90;
                        return {
                            x: this.e,
                            y: this.f,
                            transformedX: (this.e * Math.cos(i * Math.PI / 180) + this.f * Math.sin(i * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b),
                            transformedY: (this.f * Math.cos(i * Math.PI / 180) + this.e * Math.sin(-i * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d),
                            skewX: -i,
                            skewY: 180 / Math.PI * Math.atan2(e.y, e.x),
                            scaleX: Math.sqrt(this.a * this.a + this.b * this.b),
                            scaleY: Math.sqrt(this.c * this.c + this.d * this.d),
                            rotation: i,
                            a: this.a,
                            b: this.b,
                            c: this.c,
                            d: this.d,
                            e: this.e,
                            f: this.f,
                            matrix: new d.Matrix(this)
                        }
                    },
                    clone: function () {
                        return new d.Matrix(this)
                    },
                    morph: function (t) {
                        return this.destination = new d.Matrix(t), this
                    },
                    at: function (t) {
                        return this.destination ? new d.Matrix({
                            a: this.a + (this.destination.a - this.a) * t,
                            b: this.b + (this.destination.b - this.b) * t,
                            c: this.c + (this.destination.c - this.c) * t,
                            d: this.d + (this.destination.d - this.d) * t,
                            e: this.e + (this.destination.e - this.e) * t,
                            f: this.f + (this.destination.f - this.f) * t
                        }) : this
                    },
                    multiply: function (t) {
                        return new d.Matrix(this.native().multiply((e = t, e instanceof d.Matrix || (e = new d.Matrix(e)), e).native()));
                        var e
                    },
                    inverse: function () {
                        return new d.Matrix(this.native().inverse())
                    },
                    translate: function (t, e) {
                        return new d.Matrix(this.native().translate(t || 0, e || 0))
                    },
                    scale: function (t, e, i, s) {
                        return 1 == arguments.length ? e = t : 3 == arguments.length && (s = i, i = e, e = t), this.around(i, s, new d.Matrix(t, 0, 0, e, 0, 0))
                    },
                    rotate: function (t, e, i) {
                        return t = d.utils.radians(t), this.around(e, i, new d.Matrix(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0))
                    },
                    flip: function (t, e) {
                        return "x" == t ? this.scale(-1, 1, e, 0) : "y" == t ? this.scale(1, -1, 0, e) : this.scale(-1, -1, t, null != e ? e : t)
                    },
                    skew: function (t, e, i, s) {
                        return 1 == arguments.length ? e = t : 3 == arguments.length && (s = i, i = e, e = t), t = d.utils.radians(t), e = d.utils.radians(e), this.around(i, s, new d.Matrix(1, Math.tan(e), Math.tan(t), 1, 0, 0))
                    },
                    skewX: function (t, e, i) {
                        return this.skew(t, 0, e, i)
                    },
                    skewY: function (t, e, i) {
                        return this.skew(0, t, e, i)
                    },
                    around: function (t, e, i) {
                        return this.multiply(new d.Matrix(1, 0, 0, 1, t || 0, e || 0)).multiply(i).multiply(new d.Matrix(1, 0, 0, 1, -t || 0, -e || 0))
                    },
                    native: function () {
                        for (var t = d.parser.native.createSVGMatrix(), e = v.length - 1; 0 <= e; e--) t[v[e]] = this[v[e]];
                        return t
                    },
                    toString: function () {
                        return "matrix(" + m(this.a) + "," + m(this.b) + "," + m(this.c) + "," + m(this.d) + "," + m(this.e) + "," + m(this.f) + ")"
                    }
                },
                parent: d.Element,
                construct: {
                    ctm: function () {
                        return new d.Matrix(this.node.getCTM())
                    },
                    screenCTM: function () {
                        if (this instanceof d.Nested) {
                            var t = this.rect(1, 1),
                                e = t.node.getScreenCTM();
                            return t.remove(), new d.Matrix(e)
                        }
                        return new d.Matrix(this.node.getScreenCTM())
                    }
                }
            }), d.Point = d.invent({
                create: function (t, e) {
                    var i;
                    i = Array.isArray(t) ? {
                        x: t[0],
                        y: t[1]
                    } : "object" === w(t) ? {
                        x: t.x,
                        y: t.y
                    } : null != t ? {
                        x: t,
                        y: null != e ? e : t
                    } : {
                        x: 0,
                        y: 0
                    }, this.x = i.x, this.y = i.y
                },
                extend: {
                    clone: function () {
                        return new d.Point(this)
                    },
                    morph: function (t, e) {
                        return this.destination = new d.Point(t, e), this
                    },
                    at: function (t) {
                        return this.destination ? new d.Point({
                            x: this.x + (this.destination.x - this.x) * t,
                            y: this.y + (this.destination.y - this.y) * t
                        }) : this
                    },
                    native: function () {
                        var t = d.parser.native.createSVGPoint();
                        return t.x = this.x, t.y = this.y, t
                    },
                    transform: function (t) {
                        return new d.Point(this.native().matrixTransform(t.native()))
                    }
                }
            }), d.extend(d.Element, {
                point: function (t, e) {
                    return new d.Point(t, e).transform(this.screenCTM().inverse())
                }
            }), d.extend(d.Element, {
                attr: function (t, e, i) {
                    if (null == t) {
                        for (t = {}, i = (e = this.node.attributes).length - 1; 0 <= i; i--) t[e[i].nodeName] = d.regex.isNumber.test(e[i].nodeValue) ? parseFloat(e[i].nodeValue) : e[i].nodeValue;
                        return t
                    }
                    if ("object" === w(t))
                        for (e in t) this.attr(e, t[e]);
                    else if (null === e) this.node.removeAttribute(t);
                    else {
                        if (null == e) return null == (e = this.node.getAttribute(t)) ? d.defaults.attrs[t] : d.regex.isNumber.test(e) ? parseFloat(e) : e;
                        "stroke-width" == t ? this.attr("stroke", 0 < parseFloat(e) ? this._stroke : null) : "stroke" == t && (this._stroke = e), "fill" != t && "stroke" != t || (d.regex.isImage.test(e) && (e = this.doc().defs().image(e, 0, 0)), e instanceof d.Image && (e = this.doc().defs().pattern(0, 0, function () {
                            this.add(e)
                        }))), "number" == typeof e ? e = new d.Number(e) : d.Color.isColor(e) ? e = new d.Color(e) : Array.isArray(e) && (e = new d.Array(e)), "leading" == t ? this.leading && this.leading(e) : "string" == typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" != t && "x" != t || this.rebuild(t, e)
                    }
                    return this
                }
            }), d.extend(d.Element, {
                transform: function (t, e) {
                    var i, s;
                    if ("object" !== w(t)) return i = new d.Matrix(this).extract(), "string" == typeof t ? i[t] : i;
                    if (i = new d.Matrix(this), e = !!e || !!t.relative, null != t.a) i = e ? i.multiply(new d.Matrix(t)) : new d.Matrix(t);
                    else if (null != t.rotation) p(t, this), i = e ? i.rotate(t.rotation, t.cx, t.cy) : i.rotate(t.rotation - i.extract().rotation, t.cx, t.cy);
                    else if (null != t.scale || null != t.scaleX || null != t.scaleY) {
                        if (p(t, this), t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1, t.scaleY = null != t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1, !e) {
                            var a = i.extract();
                            t.scaleX = 1 * t.scaleX / a.scaleX, t.scaleY = 1 * t.scaleY / a.scaleY
                        }
                        i = i.scale(t.scaleX, t.scaleY, t.cx, t.cy)
                    } else null != t.skew || null != t.skewX || null != t.skewY ? (p(t, this), t.skewX = null != t.skew ? t.skew : null != t.skewX ? t.skewX : 0, t.skewY = null != t.skew ? t.skew : null != t.skewY ? t.skewY : 0, e || (a = i.extract(), i = i.multiply((new d.Matrix).skew(a.skewX, a.skewY, t.cx, t.cy).inverse())), i = i.skew(t.skewX, t.skewY, t.cx, t.cy)) : t.flip ? ("x" == t.flip || "y" == t.flip ? t.offset = null == t.offset ? this.bbox()["c" + t.flip] : t.offset : null == t.offset ? (s = this.bbox(), t.flip = s.cx, t.offset = s.cy) : t.flip = t.offset, i = (new d.Matrix).flip(t.flip, t.offset)) : null == t.x && null == t.y || (e ? i = i.translate(t.x, t.y) : (null != t.x && (i.e = t.x), null != t.y && (i.f = t.y)));
                    return this.attr("transform", i)
                }
            }), d.extend(d.FX, {
                transform: function (t, e) {
                    var i, s, a = this.target();
                    return "object" !== w(t) ? (i = new d.Matrix(a).extract(), "string" == typeof t ? i[t] : i) : (e = !!e || !!t.relative, null != t.a ? i = new d.Matrix(t) : null != t.rotation ? (p(t, a), i = new d.Rotate(t.rotation, t.cx, t.cy)) : null != t.scale || null != t.scaleX || null != t.scaleY ? (p(t, a), t.scaleX = null != t.scale ? t.scale : null != t.scaleX ? t.scaleX : 1, t.scaleY = null != t.scale ? t.scale : null != t.scaleY ? t.scaleY : 1, i = new d.Scale(t.scaleX, t.scaleY, t.cx, t.cy)) : null != t.skewX || null != t.skewY ? (p(t, a), t.skewX = null != t.skewX ? t.skewX : 0, t.skewY = null != t.skewY ? t.skewY : 0, i = new d.Skew(t.skewX, t.skewY, t.cx, t.cy)) : t.flip ? ("x" == t.flip || "y" == t.flip ? t.offset = null == t.offset ? a.bbox()["c" + t.flip] : t.offset : null == t.offset ? (s = a.bbox(), t.flip = s.cx, t.offset = s.cy) : t.flip = t.offset, i = (new d.Matrix).flip(t.flip, t.offset)) : null == t.x && null == t.y || (i = new d.Translate(t.x, t.y)), i ? (i.relative = e, this.last().transforms.push(i), this._callStart()) : this)
                }
            }), d.extend(d.Element, {
                untransform: function () {
                    return this.attr("transform", null)
                },
                matrixify: function () {
                    return (this.attr("transform") || "").split(d.regex.transforms).slice(0, -1).map(function (t) {
                        var e = t.trim().split("(");
                        return [e[0], e[1].split(d.regex.delimiter).map(function (t) {
                            return parseFloat(t)
                        })]
                    }).reduce(function (t, e) {
                        return "matrix" == e[0] ? t.multiply(f(e[1])) : t[e[0]].apply(t, e[1])
                    }, new d.Matrix)
                },
                toParent: function (t) {
                    if (this == t) return this;
                    var e = this.screenCTM(),
                        i = t.screenCTM().inverse();
                    return this.addTo(t).untransform().transform(i.multiply(e)), this
                },
                toDoc: function () {
                    return this.toParent(this.doc())
                }
            }), d.Transformation = d.invent({
                create: function (t, e) {
                    if (1 < arguments.length && "boolean" != typeof e) return this.constructor.call(this, [].slice.call(arguments));
                    if (Array.isArray(t))
                        for (var i = 0, s = this.arguments.length; i < s; ++i) this[this.arguments[i]] = t[i];
                    else if ("object" === w(t))
                        for (i = 0, s = this.arguments.length; i < s; ++i) this[this.arguments[i]] = t[this.arguments[i]];
                    !(this.inversed = !1) === e && (this.inversed = !0)
                },
                extend: {
                    arguments: [],
                    method: "",
                    at: function (t) {
                        for (var e = [], i = 0, s = this.arguments.length; i < s; ++i) e.push(this[this.arguments[i]]);
                        var a = this._undo || new d.Matrix;
                        return a = (new d.Matrix).morph(d.Matrix.prototype[this.method].apply(a, e)).at(t), this.inversed ? a.inverse() : a
                    },
                    undo: function (t) {
                        for (var e = 0, i = this.arguments.length; e < i; ++e) t[this.arguments[e]] = void 0 === this[this.arguments[e]] ? 0 : t[this.arguments[e]];
                        return t.cx = this.cx, t.cy = this.cy, this._undo = new(d[o(this.method)])(t, !0).at(1), this
                    }
                }
            }), d.Translate = d.invent({
                parent: d.Matrix,
                inherit: d.Transformation,
                create: function (t, e) {
                    this.constructor.apply(this, [].slice.call(arguments))
                },
                extend: {
                    arguments: ["transformedX", "transformedY"],
                    method: "translate"
                }
            }), d.Rotate = d.invent({
                parent: d.Matrix,
                inherit: d.Transformation,
                create: function (t, e) {
                    this.constructor.apply(this, [].slice.call(arguments))
                },
                extend: {
                    arguments: ["rotation", "cx", "cy"],
                    method: "rotate",
                    at: function (t) {
                        var e = (new d.Matrix).rotate((new d.Number).morph(this.rotation - (this._undo ? this._undo.rotation : 0)).at(t), this.cx, this.cy);
                        return this.inversed ? e.inverse() : e
                    },
                    undo: function (t) {
                        return this._undo = t, this
                    }
                }
            }), d.Scale = d.invent({
                parent: d.Matrix,
                inherit: d.Transformation,
                create: function (t, e) {
                    this.constructor.apply(this, [].slice.call(arguments))
                },
                extend: {
                    arguments: ["scaleX", "scaleY", "cx", "cy"],
                    method: "scale"
                }
            }), d.Skew = d.invent({
                parent: d.Matrix,
                inherit: d.Transformation,
                create: function (t, e) {
                    this.constructor.apply(this, [].slice.call(arguments))
                },
                extend: {
                    arguments: ["skewX", "skewY", "cx", "cy"],
                    method: "skew"
                }
            }), d.extend(d.Element, {
                style: function (t, e) {
                    if (0 == arguments.length) return this.node.style.cssText || "";
                    if (arguments.length < 2)
                        if ("object" === w(t))
                            for (e in t) this.style(e, t[e]);
                        else {
                            if (!d.regex.isCss.test(t)) return this.node.style[n(t)];
                            for (t = t.split(/\s*;\s*/).filter(function (t) {
                                    return !!t
                                }).map(function (t) {
                                    return t.split(/\s*:\s*/)
                                }); e = t.pop();) this.style(e[0], e[1])
                        }
                    else this.node.style[n(t)] = null === e || d.regex.isBlank.test(e) ? "" : e;
                    return this
                }
            }), d.Parent = d.invent({
                create: function (t) {
                    this.constructor.call(this, t)
                },
                inherit: d.Element,
                extend: {
                    children: function () {
                        return d.utils.map(d.utils.filterSVGElements(this.node.childNodes), function (t) {
                            return d.adopt(t)
                        })
                    },
                    add: function (t, e) {
                        return null == e ? this.node.appendChild(t.node) : t.node != this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
                    },
                    put: function (t, e) {
                        return this.add(t, e), t
                    },
                    has: function (t) {
                        return 0 <= this.index(t)
                    },
                    index: function (t) {
                        return [].slice.call(this.node.childNodes).indexOf(t.node)
                    },
                    get: function (t) {
                        return d.adopt(this.node.childNodes[t])
                    },
                    first: function () {
                        return this.get(0)
                    },
                    last: function () {
                        return this.get(this.node.childNodes.length - 1)
                    },
                    each: function (t, e) {
                        var i, s, a = this.children();
                        for (i = 0, s = a.length; i < s; i++) a[i] instanceof d.Element && t.apply(a[i], [i, a]), e && a[i] instanceof d.Container && a[i].each(t, e);
                        return this
                    },
                    removeElement: function (t) {
                        return this.node.removeChild(t.node), this
                    },
                    clear: function () {
                        for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                        return delete this._defs, this
                    },
                    defs: function () {
                        return this.doc().defs()
                    }
                }
            }), d.extend(d.Parent, {
                ungroup: function (t, e) {
                    return 0 === e || this instanceof d.Defs || this.node == d.parser.draw || (t = t || (this instanceof d.Doc ? this : this.parent(d.Parent)), e = e || 1 / 0, this.each(function () {
                        return this instanceof d.Defs ? this : this instanceof d.Parent ? this.ungroup(t, e - 1) : this.toParent(t)
                    }), this.node.firstChild || this.remove()), this
                },
                flatten: function (t, e) {
                    return this.ungroup(t, e)
                }
            }), d.Container = d.invent({
                create: function (t) {
                    this.constructor.call(this, t)
                },
                inherit: d.Parent
            }), d.ViewBox = d.invent({
                create: function (t) {
                    var e, i, s, a, n, r, o, l = 1,
                        h = 1,
                        c = /[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;
                    if (t instanceof d.Element) {
                        for (n = ((o = r = t).attr("viewBox") || "").match(c), t.bbox, s = new d.Number(t.width()), a = new d.Number(t.height());
                            "%" == s.unit;) l *= s.value, s = new d.Number(r instanceof d.Doc ? r.parent().offsetWidth : r.parent().width()), r = r.parent();
                        for (;
                            "%" == a.unit;) h *= a.value, a = new d.Number(o instanceof d.Doc ? o.parent().offsetHeight : o.parent().height()), o = o.parent();
                        this.x = 0, this.y = 0, this.width = s * l, this.height = a * h, this.zoom = 1, n && (e = parseFloat(n[0]), i = parseFloat(n[1]), s = parseFloat(n[2]), a = parseFloat(n[3]), this.zoom = this.width / this.height > s / a ? this.height / a : this.width / s, this.x = e, this.y = i, this.width = s, this.height = a)
                    } else t = "string" == typeof t ? t.match(c).map(function (t) {
                        return parseFloat(t)
                    }) : Array.isArray(t) ? t : "object" === w(t) ? [t.x, t.y, t.width, t.height] : 4 == arguments.length ? [].slice.call(arguments) : [0, 0, 0, 0], this.x = t[0], this.y = t[1], this.width = t[2], this.height = t[3]
                },
                extend: {
                    toString: function () {
                        return this.x + " " + this.y + " " + this.width + " " + this.height
                    },
                    morph: function (t, e, i, s) {
                        return this.destination = new d.ViewBox(t, e, i, s), this
                    },
                    at: function (t) {
                        return this.destination ? new d.ViewBox([this.x + (this.destination.x - this.x) * t, this.y + (this.destination.y - this.y) * t, this.width + (this.destination.width - this.width) * t, this.height + (this.destination.height - this.height) * t]) : this
                    }
                },
                parent: d.Container,
                construct: {
                    viewbox: function (t, e, i, s) {
                        return 0 == arguments.length ? new d.ViewBox(this) : this.attr("viewBox", new d.ViewBox(t, e, i, s))
                    }
                }
            }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function (e) {
                d.Element.prototype[e] = function (t) {
                    return d.on(this.node, e, t), this
                }
            }), d.listeners = [], d.handlerMap = [], d.listenerId = 0, d.on = function (t, e, i, s, a) {
                var n = i.bind(s || t.instance || t),
                    r = (d.handlerMap.indexOf(t) + 1 || d.handlerMap.push(t)) - 1,
                    o = e.split(".")[0],
                    l = e.split(".")[1] || "*";
                d.listeners[r] = d.listeners[r] || {}, d.listeners[r][o] = d.listeners[r][o] || {}, d.listeners[r][o][l] = d.listeners[r][o][l] || {}, i._svgjsListenerId || (i._svgjsListenerId = ++d.listenerId), d.listeners[r][o][l][i._svgjsListenerId] = n, t.addEventListener(o, n, a || !1)
            }, d.off = function (t, e, i) {
                var s = d.handlerMap.indexOf(t),
                    a = e && e.split(".")[0],
                    n = e && e.split(".")[1],
                    r = "";
                if (-1 != s)
                    if (i) {
                        if ("function" == typeof i && (i = i._svgjsListenerId), !i) return;
                        d.listeners[s][a] && d.listeners[s][a][n || "*"] && (t.removeEventListener(a, d.listeners[s][a][n || "*"][i], !1), delete d.listeners[s][a][n || "*"][i])
                    } else if (n && a) {
                    if (d.listeners[s][a] && d.listeners[s][a][n]) {
                        for (i in d.listeners[s][a][n]) d.off(t, [a, n].join("."), i);
                        delete d.listeners[s][a][n]
                    }
                } else if (n)
                    for (e in d.listeners[s])
                        for (r in d.listeners[s][e]) n === r && d.off(t, [e, n].join("."));
                else if (a) {
                    if (d.listeners[s][a]) {
                        for (r in d.listeners[s][a]) d.off(t, [a, r].join("."));
                        delete d.listeners[s][a]
                    }
                } else {
                    for (e in d.listeners[s]) d.off(t, e);
                    delete d.listeners[s], delete d.handlerMap[s]
                }
            }, d.extend(d.Element, {
                on: function (t, e, i, s) {
                    return d.on(this.node, t, e, i, s), this
                },
                off: function (t, e) {
                    return d.off(this.node, t, e), this
                },
                fire: function (t, e) {
                    return t instanceof r.Event ? this.node.dispatchEvent(t) : this.node.dispatchEvent(t = new d.CustomEvent(t, {
                        detail: e,
                        cancelable: !0
                    })), this._event = t, this
                },
                event: function () {
                    return this._event
                }
            }), d.Defs = d.invent({
                create: "defs",
                inherit: d.Container
            }), d.G = d.invent({
                create: "g",
                inherit: d.Container,
                extend: {
                    x: function (t) {
                        return null == t ? this.transform("x") : this.transform({
                            x: t - this.x()
                        }, !0)
                    },
                    y: function (t) {
                        return null == t ? this.transform("y") : this.transform({
                            y: t - this.y()
                        }, !0)
                    },
                    cx: function (t) {
                        return null == t ? this.gbox().cx : this.x(t - this.gbox().width / 2)
                    },
                    cy: function (t) {
                        return null == t ? this.gbox().cy : this.y(t - this.gbox().height / 2)
                    },
                    gbox: function () {
                        var t = this.bbox(),
                            e = this.transform();
                        return t.x += e.x, t.x2 += e.x, t.cx += e.x, t.y += e.y, t.y2 += e.y, t.cy += e.y, t
                    }
                },
                construct: {
                    group: function () {
                        return this.put(new d.G)
                    }
                }
            }), d.Doc = d.invent({
                create: function (t) {
                    t && ("svg" == (t = "string" == typeof t ? a.getElementById(t) : t).nodeName ? this.constructor.call(this, t) : (this.constructor.call(this, d.create("svg")), t.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs())
                },
                inherit: d.Container,
                extend: {
                    namespace: function () {
                        return this.attr({
                            xmlns: d.ns,
                            version: "1.1"
                        }).attr("xmlns:xlink", d.xlink, d.xmlns).attr("xmlns:svgjs", d.svgjs, d.xmlns)
                    },
                    defs: function () {
                        var t;
                        return this._defs || ((t = this.node.getElementsByTagName("defs")[0]) ? this._defs = d.adopt(t) : this._defs = new d.Defs, this.node.appendChild(this._defs.node)), this._defs
                    },
                    parent: function () {
                        return this.node.parentNode && "#document" != this.node.parentNode.nodeName ? this.node.parentNode : null
                    },
                    spof: function () {
                        var t = this.node.getScreenCTM();
                        return t && this.style("left", -t.e % 1 + "px").style("top", -t.f % 1 + "px"), this
                    },
                    remove: function () {
                        return this.parent() && this.parent().removeChild(this.node), this
                    },
                    clear: function () {
                        for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                        return delete this._defs, d.parser.draw && !d.parser.draw.parentNode && this.node.appendChild(d.parser.draw), this
                    },
                    clone: function (t) {
                        this.writeDataToDom();
                        var e = this.node,
                            i = x(e.cloneNode(!0));
                        return t ? (t.node || t).appendChild(i.node) : e.parentNode.insertBefore(i.node, e.nextSibling), i
                    }
                }
            }), d.extend(d.Element, {
                siblings: function () {
                    return this.parent().children()
                },
                position: function () {
                    return this.parent().index(this)
                },
                next: function () {
                    return this.siblings()[this.position() + 1]
                },
                previous: function () {
                    return this.siblings()[this.position() - 1]
                },
                forward: function () {
                    var t = this.position() + 1,
                        e = this.parent();
                    return e.removeElement(this).add(this, t), e instanceof d.Doc && e.node.appendChild(e.defs().node), this
                },
                backward: function () {
                    var t = this.position();
                    return 0 < t && this.parent().removeElement(this).add(this, t - 1), this
                },
                front: function () {
                    var t = this.parent();
                    return t.node.appendChild(this.node), t instanceof d.Doc && t.node.appendChild(t.defs().node), this
                },
                back: function () {
                    return 0 < this.position() && this.parent().removeElement(this).add(this, 0), this
                },
                before: function (t) {
                    t.remove();
                    var e = this.position();
                    return this.parent().add(t, e), this
                },
                after: function (t) {
                    t.remove();
                    var e = this.position();
                    return this.parent().add(t, e + 1), this
                }
            }), d.Mask = d.invent({
                create: function () {
                    this.constructor.call(this, d.create("mask")), this.targets = []
                },
                inherit: d.Container,
                extend: {
                    remove: function () {
                        for (var t = this.targets.length - 1; 0 <= t; t--) this.targets[t] && this.targets[t].unmask();
                        return this.targets = [], d.Element.prototype.remove.call(this), this
                    }
                },
                construct: {
                    mask: function () {
                        return this.defs().put(new d.Mask)
                    }
                }
            }), d.extend(d.Element, {
                maskWith: function (t) {
                    return this.masker = t instanceof d.Mask ? t : this.parent().mask().add(t), this.masker.targets.push(this), this.attr("mask", 'url("#' + this.masker.attr("id") + '")')
                },
                unmask: function () {
                    return delete this.masker, this.attr("mask", null)
                }
            }), d.ClipPath = d.invent({
                create: function () {
                    this.constructor.call(this, d.create("clipPath")), this.targets = []
                },
                inherit: d.Container,
                extend: {
                    remove: function () {
                        for (var t = this.targets.length - 1; 0 <= t; t--) this.targets[t] && this.targets[t].unclip();
                        return this.targets = [], this.parent().removeElement(this), this
                    }
                },
                construct: {
                    clip: function () {
                        return this.defs().put(new d.ClipPath)
                    }
                }
            }), d.extend(d.Element, {
                clipWith: function (t) {
                    return this.clipper = t instanceof d.ClipPath ? t : this.parent().clip().add(t), this.clipper.targets.push(this), this.attr("clip-path", 'url("#' + this.clipper.attr("id") + '")')
                },
                unclip: function () {
                    return delete this.clipper, this.attr("clip-path", null)
                }
            }), d.Gradient = d.invent({
                create: function (t) {
                    this.constructor.call(this, d.create(t + "Gradient")), this.type = t
                },
                inherit: d.Container,
                extend: {
                    at: function (t, e, i) {
                        return this.put(new d.Stop).update(t, e, i)
                    },
                    update: function (t) {
                        return this.clear(), "function" == typeof t && t.call(this, this), this
                    },
                    fill: function () {
                        return "url(#" + this.id() + ")"
                    },
                    toString: function () {
                        return this.fill()
                    },
                    attr: function (t, e, i) {
                        return "transform" == t && (t = "gradientTransform"), d.Container.prototype.attr.call(this, t, e, i)
                    }
                },
                construct: {
                    gradient: function (t, e) {
                        return this.defs().gradient(t, e)
                    }
                }
            }), d.extend(d.Gradient, d.FX, {
                from: function (t, e) {
                    return "radial" == (this._target || this).type ? this.attr({
                        fx: new d.Number(t),
                        fy: new d.Number(e)
                    }) : this.attr({
                        x1: new d.Number(t),
                        y1: new d.Number(e)
                    })
                },
                to: function (t, e) {
                    return "radial" == (this._target || this).type ? this.attr({
                        cx: new d.Number(t),
                        cy: new d.Number(e)
                    }) : this.attr({
                        x2: new d.Number(t),
                        y2: new d.Number(e)
                    })
                }
            }), d.extend(d.Defs, {
                gradient: function (t, e) {
                    return this.put(new d.Gradient(t)).update(e)
                }
            }), d.Stop = d.invent({
                create: "stop",
                inherit: d.Element,
                extend: {
                    update: function (t) {
                        return ("number" == typeof t || t instanceof d.Number) && (t = {
                            offset: arguments[0],
                            color: arguments[1],
                            opacity: arguments[2]
                        }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new d.Number(t.offset)), this
                    }
                }
            }), d.Pattern = d.invent({
                create: "pattern",
                inherit: d.Container,
                extend: {
                    fill: function () {
                        return "url(#" + this.id() + ")"
                    },
                    update: function (t) {
                        return this.clear(), "function" == typeof t && t.call(this, this), this
                    },
                    toString: function () {
                        return this.fill()
                    },
                    attr: function (t, e, i) {
                        return "transform" == t && (t = "patternTransform"), d.Container.prototype.attr.call(this, t, e, i)
                    }
                },
                construct: {
                    pattern: function (t, e, i) {
                        return this.defs().pattern(t, e, i)
                    }
                }
            }), d.extend(d.Defs, {
                pattern: function (t, e, i) {
                    return this.put(new d.Pattern).update(i).attr({
                        x: 0,
                        y: 0,
                        width: t,
                        height: e,
                        patternUnits: "userSpaceOnUse"
                    })
                }
            }), d.Shape = d.invent({
                create: function (t) {
                    this.constructor.call(this, t)
                },
                inherit: d.Element
            }), d.Bare = d.invent({
                create: function (t, e) {
                    if (this.constructor.call(this, d.create(t)), e)
                        for (var i in e.prototype) "function" == typeof e.prototype[i] && (this[i] = e.prototype[i])
                },
                inherit: d.Element,
                extend: {
                    words: function (t) {
                        for (; this.node.hasChildNodes();) this.node.removeChild(this.node.lastChild);
                        return this.node.appendChild(a.createTextNode(t)), this
                    }
                }
            }), d.extend(d.Parent, {
                element: function (t, e) {
                    return this.put(new d.Bare(t, e))
                }
            }), d.Symbol = d.invent({
                create: "symbol",
                inherit: d.Container,
                construct: {
                    symbol: function () {
                        return this.put(new d.Symbol)
                    }
                }
            }), d.Use = d.invent({
                create: "use",
                inherit: d.Shape,
                extend: {
                    element: function (t, e) {
                        return this.attr("href", (e || "") + "#" + t, d.xlink)
                    }
                },
                construct: {
                    use: function (t, e) {
                        return this.put(new d.Use).element(t, e)
                    }
                }
            }), d.Rect = d.invent({
                create: "rect",
                inherit: d.Shape,
                construct: {
                    rect: function (t, e) {
                        return this.put(new d.Rect).size(t, e)
                    }
                }
            }), d.Circle = d.invent({
                create: "circle",
                inherit: d.Shape,
                construct: {
                    circle: function (t) {
                        return this.put(new d.Circle).rx(new d.Number(t).divide(2)).move(0, 0)
                    }
                }
            }), d.extend(d.Circle, d.FX, {
                rx: function (t) {
                    return this.attr("r", t)
                },
                ry: function (t) {
                    return this.rx(t)
                }
            }), d.Ellipse = d.invent({
                create: "ellipse",
                inherit: d.Shape,
                construct: {
                    ellipse: function (t, e) {
                        return this.put(new d.Ellipse).size(t, e).move(0, 0)
                    }
                }
            }), d.extend(d.Ellipse, d.Rect, d.FX, {
                rx: function (t) {
                    return this.attr("rx", t)
                },
                ry: function (t) {
                    return this.attr("ry", t)
                }
            }), d.extend(d.Circle, d.Ellipse, {
                x: function (t) {
                    return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
                },
                y: function (t) {
                    return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
                },
                cx: function (t) {
                    return null == t ? this.attr("cx") : this.attr("cx", t)
                },
                cy: function (t) {
                    return null == t ? this.attr("cy") : this.attr("cy", t)
                },
                width: function (t) {
                    return null == t ? 2 * this.rx() : this.rx(new d.Number(t).divide(2))
                },
                height: function (t) {
                    return null == t ? 2 * this.ry() : this.ry(new d.Number(t).divide(2))
                },
                size: function (t, e) {
                    var i = u(this, t, e);
                    return this.rx(new d.Number(i.width).divide(2)).ry(new d.Number(i.height).divide(2))
                }
            }), d.Line = d.invent({
                create: "line",
                inherit: d.Shape,
                extend: {
                    array: function () {
                        return new d.PointArray([
                            [this.attr("x1"), this.attr("y1")],
                            [this.attr("x2"), this.attr("y2")]
                        ])
                    },
                    plot: function (t, e, i, s) {
                        return null == t ? this.array() : (t = void 0 !== e ? {
                            x1: t,
                            y1: e,
                            x2: i,
                            y2: s
                        } : new d.PointArray(t).toLine(), this.attr(t))
                    },
                    move: function (t, e) {
                        return this.attr(this.array().move(t, e).toLine())
                    },
                    size: function (t, e) {
                        var i = u(this, t, e);
                        return this.attr(this.array().size(i.width, i.height).toLine())
                    }
                },
                construct: {
                    line: function (t, e, i, s) {
                        return d.Line.prototype.plot.apply(this.put(new d.Line), null != t ? [t, e, i, s] : [0, 0, 0, 0])
                    }
                }
            }), d.Polyline = d.invent({
                create: "polyline",
                inherit: d.Shape,
                construct: {
                    polyline: function (t) {
                        return this.put(new d.Polyline).plot(t || new d.PointArray)
                    }
                }
            }), d.Polygon = d.invent({
                create: "polygon",
                inherit: d.Shape,
                construct: {
                    polygon: function (t) {
                        return this.put(new d.Polygon).plot(t || new d.PointArray)
                    }
                }
            }), d.extend(d.Polyline, d.Polygon, {
                array: function () {
                    return this._array || (this._array = new d.PointArray(this.attr("points")))
                },
                plot: function (t) {
                    return null == t ? this.array() : this.clear().attr("points", "string" == typeof t ? t : this._array = new d.PointArray(t))
                },
                clear: function () {
                    return delete this._array, this
                },
                move: function (t, e) {
                    return this.attr("points", this.array().move(t, e))
                },
                size: function (t, e) {
                    var i = u(this, t, e);
                    return this.attr("points", this.array().size(i.width, i.height))
                }
            }), d.extend(d.Line, d.Polyline, d.Polygon, {
                morphArray: d.PointArray,
                x: function (t) {
                    return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                },
                y: function (t) {
                    return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                },
                width: function (t) {
                    var e = this.bbox();
                    return null == t ? e.width : this.size(t, e.height)
                },
                height: function (t) {
                    var e = this.bbox();
                    return null == t ? e.height : this.size(e.width, t)
                }
            }), d.Path = d.invent({
                create: "path",
                inherit: d.Shape,
                extend: {
                    morphArray: d.PathArray,
                    array: function () {
                        return this._array || (this._array = new d.PathArray(this.attr("d")))
                    },
                    plot: function (t) {
                        return null == t ? this.array() : this.clear().attr("d", "string" == typeof t ? t : this._array = new d.PathArray(t))
                    },
                    clear: function () {
                        return delete this._array, this
                    },
                    move: function (t, e) {
                        return this.attr("d", this.array().move(t, e))
                    },
                    x: function (t) {
                        return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                    },
                    y: function (t) {
                        return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                    },
                    size: function (t, e) {
                        var i = u(this, t, e);
                        return this.attr("d", this.array().size(i.width, i.height))
                    },
                    width: function (t) {
                        return null == t ? this.bbox().width : this.size(t, this.bbox().height)
                    },
                    height: function (t) {
                        return null == t ? this.bbox().height : this.size(this.bbox().width, t)
                    }
                },
                construct: {
                    path: function (t) {
                        return this.put(new d.Path).plot(t || new d.PathArray)
                    }
                }
            }), d.Image = d.invent({
                create: "image",
                inherit: d.Shape,
                extend: {
                    load: function (e) {
                        if (!e) return this;
                        var i = this,
                            s = new r.Image;
                        return d.on(s, "load", function () {
                            d.off(s);
                            var t = i.parent(d.Pattern);
                            null !== t && (0 == i.width() && 0 == i.height() && i.size(s.width, s.height), t && 0 == t.width() && 0 == t.height() && t.size(i.width(), i.height()), "function" == typeof i._loaded && i._loaded.call(i, {
                                width: s.width,
                                height: s.height,
                                ratio: s.width / s.height,
                                url: e
                            }))
                        }), d.on(s, "error", function (t) {
                            d.off(s), "function" == typeof i._error && i._error.call(i, t)
                        }), this.attr("href", s.src = this.src = e, d.xlink)
                    },
                    loaded: function (t) {
                        return this._loaded = t, this
                    },
                    error: function (t) {
                        return this._error = t, this
                    }
                },
                construct: {
                    image: function (t, e, i) {
                        return this.put(new d.Image).load(t).size(e || 0, i || e || 0)
                    }
                }
            }), d.Text = d.invent({
                create: function () {
                    this.constructor.call(this, d.create("text")), this.dom.leading = new d.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", d.defaults.attrs["font-family"])
                },
                inherit: d.Shape,
                extend: {
                    x: function (t) {
                        return null == t ? this.attr("x") : this.attr("x", t)
                    },
                    y: function (t) {
                        var e = this.attr("y"),
                            i = "number" == typeof e ? e - this.bbox().y : 0;
                        return null == t ? "number" == typeof e ? e - i : e : this.attr("y", "number" == typeof t.valueOf() ? t + i : t)
                    },
                    cx: function (t) {
                        return null == t ? this.bbox().cx : this.x(t - this.bbox().width / 2)
                    },
                    cy: function (t) {
                        return null == t ? this.bbox().cy : this.y(t - this.bbox().height / 2)
                    },
                    text: function (t) {
                        if (void 0 === t) {
                            t = "";
                            for (var e = this.node.childNodes, i = 0, s = e.length; i < s; ++i) 0 != i && 3 != e[i].nodeType && 1 == d.adopt(e[i]).dom.newLined && (t += "\n"), t += e[i].textContent;
                            return t
                        }
                        if (this.clear().build(!0), "function" == typeof t) t.call(this, this);
                        else {
                            i = 0;
                            for (var a = (t = t.split("\n")).length; i < a; i++) this.tspan(t[i]).newLine()
                        }
                        return this.build(!1).rebuild()
                    },
                    size: function (t) {
                        return this.attr("font-size", t).rebuild()
                    },
                    leading: function (t) {
                        return null == t ? this.dom.leading : (this.dom.leading = new d.Number(t), this.rebuild())
                    },
                    lines: function () {
                        var t = (this.textPath && this.textPath() || this).node,
                            e = d.utils.map(d.utils.filterSVGElements(t.childNodes), function (t) {
                                return d.adopt(t)
                            });
                        return new d.Set(e)
                    },
                    rebuild: function (t) {
                        if ("boolean" == typeof t && (this._rebuild = t), this._rebuild) {
                            var e = this,
                                i = 0,
                                s = this.dom.leading * new d.Number(this.attr("font-size"));
                            this.lines().each(function () {
                                this.dom.newLined && (e.textPath() || this.attr("x", e.attr("x")), "\n" == this.text() ? i += s : (this.attr("dy", s + i), i = 0))
                            }), this.fire("rebuild")
                        }
                        return this
                    },
                    build: function (t) {
                        return this._build = !!t, this
                    },
                    setData: function (t) {
                        return this.dom = t, this.dom.leading = new d.Number(t.leading || 1.3), this
                    }
                },
                construct: {
                    text: function (t) {
                        return this.put(new d.Text).text(t)
                    },
                    plain: function (t) {
                        return this.put(new d.Text).plain(t)
                    }
                }
            }), d.Tspan = d.invent({
                create: "tspan",
                inherit: d.Shape,
                extend: {
                    text: function (t) {
                        return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" == typeof t ? t.call(this, this) : this.plain(t), this)
                    },
                    dx: function (t) {
                        return this.attr("dx", t)
                    },
                    dy: function (t) {
                        return this.attr("dy", t)
                    },
                    newLine: function () {
                        var t = this.parent(d.Text);
                        return this.dom.newLined = !0, this.dy(t.dom.leading * t.attr("font-size")).attr("x", t.x())
                    }
                }
            }), d.extend(d.Text, d.Tspan, {
                plain: function (t) {
                    return !1 === this._build && this.clear(), this.node.appendChild(a.createTextNode(t)), this
                },
                tspan: function (t) {
                    var e = (this.textPath && this.textPath() || this).node,
                        i = new d.Tspan;
                    return !1 === this._build && this.clear(), e.appendChild(i.node), i.text(t)
                },
                clear: function () {
                    for (var t = (this.textPath && this.textPath() || this).node; t.hasChildNodes();) t.removeChild(t.lastChild);
                    return this
                },
                length: function () {
                    return this.node.getComputedTextLength()
                }
            }), d.TextPath = d.invent({
                create: "textPath",
                inherit: d.Parent,
                parent: d.Text,
                construct: {
                    morphArray: d.PathArray,
                    path: function (t) {
                        for (var e = new d.TextPath, i = this.doc().defs().path(t); this.node.hasChildNodes();) e.node.appendChild(this.node.firstChild);
                        return this.node.appendChild(e.node), e.attr("href", "#" + i, d.xlink), this
                    },
                    array: function () {
                        var t = this.track();
                        return t ? t.array() : null
                    },
                    plot: function (t) {
                        var e = this.track(),
                            i = null;
                        return e && (i = e.plot(t)), null == t ? i : this
                    },
                    track: function () {
                        var t = this.textPath();
                        if (t) return t.reference("href")
                    },
                    textPath: function () {
                        if (this.node.firstChild && "textPath" == this.node.firstChild.nodeName) return d.adopt(this.node.firstChild)
                    }
                }
            }), d.Nested = d.invent({
                create: function () {
                    this.constructor.call(this, d.create("svg")), this.style("overflow", "visible")
                },
                inherit: d.Container,
                construct: {
                    nested: function () {
                        return this.put(new d.Nested)
                    }
                }
            }), d.A = d.invent({
                create: "a",
                inherit: d.Container,
                extend: {
                    to: function (t) {
                        return this.attr("href", t, d.xlink)
                    },
                    show: function (t) {
                        return this.attr("show", t, d.xlink)
                    },
                    target: function (t) {
                        return this.attr("target", t)
                    }
                },
                construct: {
                    link: function (t) {
                        return this.put(new d.A).to(t)
                    }
                }
            }), d.extend(d.Element, {
                linkTo: function (t) {
                    var e = new d.A;
                    return "function" == typeof t ? t.call(e, e) : e.to(t), this.parent().put(e).put(this)
                }
            }), d.Marker = d.invent({
                create: "marker",
                inherit: d.Container,
                extend: {
                    width: function (t) {
                        return this.attr("markerWidth", t)
                    },
                    height: function (t) {
                        return this.attr("markerHeight", t)
                    },
                    ref: function (t, e) {
                        return this.attr("refX", t).attr("refY", e)
                    },
                    update: function (t) {
                        return this.clear(), "function" == typeof t && t.call(this, this), this
                    },
                    toString: function () {
                        return "url(#" + this.id() + ")"
                    }
                },
                construct: {
                    marker: function (t, e, i) {
                        return this.defs().marker(t, e, i)
                    }
                }
            }), d.extend(d.Defs, {
                marker: function (t, e, i) {
                    return this.put(new d.Marker).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(i)
                }
            }), d.extend(d.Line, d.Polyline, d.Polygon, d.Path, {
                marker: function (t, e, i, s) {
                    var a = ["marker"];
                    return "all" != t && a.push(t), a = a.join("-"), t = e instanceof d.Marker ? e : this.doc().marker(e, i, s), this.attr(a, t)
                }
            });
            var s = {
                stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
                fill: ["color", "opacity", "rule"],
                prefix: function (t, e) {
                    return "color" == e ? t : t + "-" + e
                }
            };

            function h(t, e, i, s) {
                return i + s.replace(d.regex.dots, " .")
            }

            function n(t) {
                return t.toLowerCase().replace(/-(.)/g, function (t, e) {
                    return e.toUpperCase()
                })
            }

            function o(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function c(t) {
                var e = t.toString(16);
                return 1 == e.length ? "0" + e : e
            }

            function u(t, e, i) {
                if (null == e || null == i) {
                    var s = t.bbox();
                    null == e ? e = s.width / s.height * i : null == i && (i = s.height / s.width * e)
                }
                return {
                    width: e,
                    height: i
                }
            }

            function g(t, e, i) {
                return {
                    x: e * t.a + i * t.c + 0,
                    y: e * t.b + i * t.d + 0
                }
            }

            function f(t) {
                return {
                    a: t[0],
                    b: t[1],
                    c: t[2],
                    d: t[3],
                    e: t[4],
                    f: t[5]
                }
            }

            function p(t, e) {
                t.cx = null == t.cx ? e.bbox().cx : t.cx, t.cy = null == t.cy ? e.bbox().cy : t.cy
            }

            function x(t) {
                for (var e = t.childNodes.length - 1; 0 <= e; e--) t.childNodes[e] instanceof r.SVGElement && x(t.childNodes[e]);
                return d.adopt(t).id(d.eid(t.nodeName))
            }

            function b(t) {
                return null == t.x && (t.x = 0, t.y = 0, t.width = 0, t.height = 0), t.w = t.width, t.h = t.height, t.x2 = t.x + t.width, t.y2 = t.y + t.height, t.cx = t.x + t.width / 2, t.cy = t.y + t.height / 2, t
            }

            function m(t) {
                return 1e-37 < Math.abs(t) ? t : 0
            } ["fill", "stroke"].forEach(function (e) {
                var i, t = {};
                t[e] = function (t) {
                    if (void 0 === t) return this;
                    if ("string" == typeof t || d.Color.isRgb(t) || t && "function" == typeof t.fill) this.attr(e, t);
                    else
                        for (i = s[e].length - 1; 0 <= i; i--) null != t[s[e][i]] && this.attr(s.prefix(e, s[e][i]), t[s[e][i]]);
                    return this
                }, d.extend(d.Element, d.FX, t)
            }), d.extend(d.Element, d.FX, {
                rotate: function (t, e, i) {
                    return this.transform({
                        rotation: t,
                        cx: e,
                        cy: i
                    })
                },
                skew: function (t, e, i, s) {
                    return 1 == arguments.length || 3 == arguments.length ? this.transform({
                        skew: t,
                        cx: e,
                        cy: i
                    }) : this.transform({
                        skewX: t,
                        skewY: e,
                        cx: i,
                        cy: s
                    })
                },
                scale: function (t, e, i, s) {
                    return 1 == arguments.length || 3 == arguments.length ? this.transform({
                        scale: t,
                        cx: e,
                        cy: i
                    }) : this.transform({
                        scaleX: t,
                        scaleY: e,
                        cx: i,
                        cy: s
                    })
                },
                translate: function (t, e) {
                    return this.transform({
                        x: t,
                        y: e
                    })
                },
                flip: function (t, e) {
                    return e = "number" == typeof t ? t : e, this.transform({
                        flip: t || "both",
                        offset: e
                    })
                },
                matrix: function (t) {
                    return this.attr("transform", new d.Matrix(6 == arguments.length ? [].slice.call(arguments) : t))
                },
                opacity: function (t) {
                    return this.attr("opacity", t)
                },
                dx: function (t) {
                    return this.x(new d.Number(t).plus(this instanceof d.FX ? 0 : this.x()), !0)
                },
                dy: function (t) {
                    return this.y(new d.Number(t).plus(this instanceof d.FX ? 0 : this.y()), !0)
                },
                dmove: function (t, e) {
                    return this.dx(t).dy(e)
                }
            }), d.extend(d.Rect, d.Ellipse, d.Circle, d.Gradient, d.FX, {
                radius: function (t, e) {
                    var i = (this._target || this).type;
                    return "radial" == i || "circle" == i ? this.attr("r", new d.Number(t)) : this.rx(t).ry(null == e ? t : e)
                }
            }), d.extend(d.Path, {
                length: function () {
                    return this.node.getTotalLength()
                },
                pointAt: function (t) {
                    return this.node.getPointAtLength(t)
                }
            }), d.extend(d.Parent, d.Text, d.Tspan, d.FX, {
                font: function (t, e) {
                    if ("object" === w(t))
                        for (e in t) this.font(e, t[e]);
                    return "leading" == t ? this.leading(e) : "anchor" == t ? this.attr("text-anchor", e) : "size" == t || "family" == t || "weight" == t || "stretch" == t || "variant" == t || "style" == t ? this.attr("font-" + t, e) : this.attr(t, e)
                }
            }), d.Set = d.invent({
                create: function (t) {
                    Array.isArray(t) ? this.members = t : this.clear()
                },
                extend: {
                    add: function () {
                        var t, e, i = [].slice.call(arguments);
                        for (t = 0, e = i.length; t < e; t++) this.members.push(i[t]);
                        return this
                    },
                    remove: function (t) {
                        var e = this.index(t);
                        return -1 < e && this.members.splice(e, 1), this
                    },
                    each: function (t) {
                        for (var e = 0, i = this.members.length; e < i; e++) t.apply(this.members[e], [e, this.members]);
                        return this
                    },
                    clear: function () {
                        return this.members = [], this
                    },
                    length: function () {
                        return this.members.length
                    },
                    has: function (t) {
                        return 0 <= this.index(t)
                    },
                    index: function (t) {
                        return this.members.indexOf(t)
                    },
                    get: function (t) {
                        return this.members[t]
                    },
                    first: function () {
                        return this.get(0)
                    },
                    last: function () {
                        return this.get(this.members.length - 1)
                    },
                    valueOf: function () {
                        return this.members
                    },
                    bbox: function () {
                        if (0 == this.members.length) return new d.RBox;
                        var t = this.members[0].rbox(this.members[0].doc());
                        return this.each(function () {
                            t = t.merge(this.rbox(this.doc()))
                        }), t
                    }
                },
                construct: {
                    set: function (t) {
                        return new d.Set(t)
                    }
                }
            }), d.FX.Set = d.invent({
                create: function (t) {
                    this.set = t
                }
            }), d.Set.inherit = function () {
                var t = [];
                for (var e in d.Shape.prototype) "function" == typeof d.Shape.prototype[e] && "function" != typeof d.Set.prototype[e] && t.push(e);
                for (var e in t.forEach(function (i) {
                        d.Set.prototype[i] = function () {
                            for (var t = 0, e = this.members.length; t < e; t++) this.members[t] && "function" == typeof this.members[t][i] && this.members[t][i].apply(this.members[t], arguments);
                            return "animate" == i ? this.fx || (this.fx = new d.FX.Set(this)) : this
                        }
                    }), t = [], d.FX.prototype) "function" == typeof d.FX.prototype[e] && "function" != typeof d.FX.Set.prototype[e] && t.push(e);
                t.forEach(function (i) {
                    d.FX.Set.prototype[i] = function () {
                        for (var t = 0, e = this.set.members.length; t < e; t++) this.set.members[t].fx[i].apply(this.set.members[t].fx, arguments);
                        return this
                    }
                })
            }, d.extend(d.Element, {
                data: function (e, t, i) {
                    if ("object" === w(e))
                        for (t in e) this.data(t, e[t]);
                    else if (arguments.length < 2) try {
                        return JSON.parse(this.attr("data-" + e))
                    } catch (t) {
                        return this.attr("data-" + e)
                    } else this.attr("data-" + e, null === t ? null : !0 === i || "string" == typeof t || "number" == typeof t ? t : JSON.stringify(t));
                    return this
                }
            }), d.extend(d.Element, {
                remember: function (t, e) {
                    if ("object" === w(t))
                        for (var e in t) this.remember(e, t[e]);
                    else {
                        if (1 == arguments.length) return this.memory()[t];
                        this.memory()[t] = e
                    }
                    return this
                },
                forget: function () {
                    if (0 == arguments.length) this._memory = {};
                    else
                        for (var t = arguments.length - 1; 0 <= t; t--) delete this.memory()[arguments[t]];
                    return this
                },
                memory: function () {
                    return this._memory || (this._memory = {})
                }
            }), d.get = function (i) {
                var t = a.getElementById(function (t) {
                    var e = (i || "").toString().match(d.regex.reference);
                    if (e) return e[1]
                }() || i);
                return d.adopt(t)
            }, d.select = function (t, e) {
                return new d.Set(d.utils.map((e || a).querySelectorAll(t), function (t) {
                    return d.adopt(t)
                }))
            }, d.extend(d.Parent, {
                select: function (t) {
                    return d.select(t, this.node)
                }
            });
            var v = "abcdef".split("");
            if ("function" != typeof r.CustomEvent) {
                var y = function (t, e) {
                    e = e || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var i = a.createEvent("CustomEvent");
                    return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i
                };
                y.prototype = r.Event.prototype, d.CustomEvent = y
            } else d.CustomEvent = r.CustomEvent;
            return function (a) {
                for (var n = 0, t = ["moz", "webkit"], e = 0; e < t.length && !r.requestAnimationFrame; ++e) a.requestAnimationFrame = a[t[e] + "RequestAnimationFrame"], a.cancelAnimationFrame = a[t[e] + "CancelAnimationFrame"] || a[t[e] + "CancelRequestAnimationFrame"];
                a.requestAnimationFrame = a.requestAnimationFrame || function (t) {
                    var e = (new Date).getTime(),
                        i = Math.max(0, 16 - (e - n)),
                        s = a.setTimeout(function () {
                            t(e + i)
                        }, i);
                    return n = e + i, s
                }, a.cancelAnimationFrame = a.cancelAnimationFrame || a.clearTimeout
            }(r), d
        }, "function" == typeof define && define.amd ? define(function () {
            return J($, $.document)
        }) : "object" === ("undefined" == typeof exports ? "undefined" : w(exports)) && "undefined" != typeof module ? module.exports = $.document ? J($, $.document) : function (t) {
            return J(t, t.document)
        } : $.SVG = J($, $.document),
        function () {
            SVG.Filter = SVG.invent({
                create: "filter",
                inherit: SVG.Parent,
                extend: {
                    source: "SourceGraphic",
                    sourceAlpha: "SourceAlpha",
                    background: "BackgroundImage",
                    backgroundAlpha: "BackgroundAlpha",
                    fill: "FillPaint",
                    stroke: "StrokePaint",
                    autoSetIn: !0,
                    put: function (t, e) {
                        return this.add(t, e), !t.attr("in") && this.autoSetIn && t.attr("in", this.source), t.attr("result") || t.attr("result", t), t
                    },
                    blend: function (t, e, i) {
                        return this.put(new SVG.BlendEffect(t, e, i))
                    },
                    colorMatrix: function (t, e) {
                        return this.put(new SVG.ColorMatrixEffect(t, e))
                    },
                    convolveMatrix: function (t) {
                        return this.put(new SVG.ConvolveMatrixEffect(t))
                    },
                    componentTransfer: function (t) {
                        return this.put(new SVG.ComponentTransferEffect(t))
                    },
                    composite: function (t, e, i) {
                        return this.put(new SVG.CompositeEffect(t, e, i))
                    },
                    flood: function (t, e) {
                        return this.put(new SVG.FloodEffect(t, e))
                    },
                    offset: function (t, e) {
                        return this.put(new SVG.OffsetEffect(t, e))
                    },
                    image: function (t) {
                        return this.put(new SVG.ImageEffect(t))
                    },
                    merge: function () {
                        var t = [void 0];
                        for (var e in arguments) t.push(arguments[e]);
                        return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect, t)))
                    },
                    gaussianBlur: function (t, e) {
                        return this.put(new SVG.GaussianBlurEffect(t, e))
                    },
                    morphology: function (t, e) {
                        return this.put(new SVG.MorphologyEffect(t, e))
                    },
                    diffuseLighting: function (t, e, i) {
                        return this.put(new SVG.DiffuseLightingEffect(t, e, i))
                    },
                    displacementMap: function (t, e, i, s, a) {
                        return this.put(new SVG.DisplacementMapEffect(t, e, i, s, a))
                    },
                    specularLighting: function (t, e, i, s) {
                        return this.put(new SVG.SpecularLightingEffect(t, e, i, s))
                    },
                    tile: function () {
                        return this.put(new SVG.TileEffect)
                    },
                    turbulence: function (t, e, i, s, a) {
                        return this.put(new SVG.TurbulenceEffect(t, e, i, s, a))
                    },
                    toString: function () {
                        return "url(#" + this.attr("id") + ")"
                    }
                }
            }), SVG.extend(SVG.Defs, {
                filter: function (t) {
                    var e = this.put(new SVG.Filter);
                    return "function" == typeof t && t.call(e, e), e
                }
            }), SVG.extend(SVG.Container, {
                filter: function (t) {
                    return this.defs().filter(t)
                }
            }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, {
                filter: function (t) {
                    return this.filterer = t instanceof SVG.Element ? t : this.doc().filter(t), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer
                },
                unfilter: function (t) {
                    return this.filterer && !0 === t && this.filterer.remove(), delete this.filterer, this.attr("filter", null)
                }
            }), SVG.Effect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                },
                inherit: SVG.Element,
                extend: {
                    in: function (t) {
                        return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                    },
                    result: function (t) {
                        return null == t ? this.attr("result") : this.attr("result", t)
                    },
                    toString: function () {
                        return this.result()
                    }
                }
            }), SVG.ParentEffect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                },
                inherit: SVG.Parent,
                extend: {
                    in: function (t) {
                        return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", t)
                    },
                    result: function (t) {
                        return null == t ? this.attr("result") : this.attr("result", t)
                    },
                    toString: function () {
                        return this.result()
                    }
                }
            });
            var t = {
                blend: function (t, e) {
                    return this.parent() && this.parent().blend(this, t, e)
                },
                colorMatrix: function (t, e) {
                    return this.parent() && this.parent().colorMatrix(t, e).in(this)
                },
                convolveMatrix: function (t) {
                    return this.parent() && this.parent().convolveMatrix(t).in(this)
                },
                componentTransfer: function (t) {
                    return this.parent() && this.parent().componentTransfer(t).in(this)
                },
                composite: function (t, e) {
                    return this.parent() && this.parent().composite(this, t, e)
                },
                flood: function (t, e) {
                    return this.parent() && this.parent().flood(t, e)
                },
                offset: function (t, e) {
                    return this.parent() && this.parent().offset(t, e).in(this)
                },
                image: function (t) {
                    return this.parent() && this.parent().image(t)
                },
                merge: function () {
                    return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments))
                },
                gaussianBlur: function (t, e) {
                    return this.parent() && this.parent().gaussianBlur(t, e).in(this)
                },
                morphology: function (t, e) {
                    return this.parent() && this.parent().morphology(t, e).in(this)
                },
                diffuseLighting: function (t, e, i) {
                    return this.parent() && this.parent().diffuseLighting(t, e, i).in(this)
                },
                displacementMap: function (t, e, i, s) {
                    return this.parent() && this.parent().displacementMap(this, t, e, i, s)
                },
                specularLighting: function (t, e, i, s) {
                    return this.parent() && this.parent().specularLighting(t, e, i, s).in(this)
                },
                tile: function () {
                    return this.parent() && this.parent().tile().in(this)
                },
                turbulence: function (t, e, i, s, a) {
                    return this.parent() && this.parent().turbulence(t, e, i, s, a).in(this)
                }
            };
            SVG.extend(SVG.Effect, t), SVG.extend(SVG.ParentEffect, t), SVG.ChildEffect = SVG.invent({
                create: function () {
                    this.constructor.call(this)
                },
                inherit: SVG.Element,
                extend: {
                    in: function (t) {
                        this.attr("in", t)
                    }
                }
            });
            var e = {
                    blend: function (t, e, i) {
                        this.attr({
                            in: t,
                            in2: e,
                            mode: i || "normal"
                        })
                    },
                    colorMatrix: function (t, e) {
                        "matrix" == t && (e = a(e)), this.attr({
                            type: t,
                            values: void 0 === e ? null : e
                        })
                    },
                    convolveMatrix: function (t) {
                        t = a(t), this.attr({
                            order: Math.sqrt(t.split(" ").length),
                            kernelMatrix: t
                        })
                    },
                    composite: function (t, e, i) {
                        this.attr({
                            in: t,
                            in2: e,
                            operator: i
                        })
                    },
                    flood: function (t, e) {
                        this.attr("flood-color", t), null != e && this.attr("flood-opacity", e)
                    },
                    offset: function (t, e) {
                        this.attr({
                            dx: t,
                            dy: e
                        })
                    },
                    image: function (t) {
                        this.attr("href", t, SVG.xlink)
                    },
                    displacementMap: function (t, e, i, s, a) {
                        this.attr({
                            in: t,
                            in2: e,
                            scale: i,
                            xChannelSelector: s,
                            yChannelSelector: a
                        })
                    },
                    gaussianBlur: function (t, e) {
                        null != t || null != e ? this.attr("stdDeviation", function (t) {
                            if (!Array.isArray(t)) return t;
                            for (var e = 0, i = t.length, s = []; e < i; e++) s.push(t[e]);
                            return s.join(" ")
                        }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0")
                    },
                    morphology: function (t, e) {
                        this.attr({
                            operator: t,
                            radius: e
                        })
                    },
                    tile: function () {},
                    turbulence: function (t, e, i, s, a) {
                        this.attr({
                            numOctaves: e,
                            seed: i,
                            stitchTiles: s,
                            baseFrequency: t,
                            type: a
                        })
                    }
                },
                i = {
                    merge: function () {
                        var t;
                        if (arguments[0] instanceof SVG.Set) {
                            var e = this;
                            arguments[0].each(function (t) {
                                this instanceof SVG.MergeNode ? e.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && e.put(new SVG.MergeNode(this))
                            })
                        } else {
                            t = Array.isArray(arguments[0]) ? arguments[0] : arguments;
                            for (var i = 0; i < t.length; i++) t[i] instanceof SVG.MergeNode ? this.put(t[i]) : this.put(new SVG.MergeNode(t[i]))
                        }
                    },
                    componentTransfer: function (e) {
                        if (this.rgb = new SVG.Set, ["r", "g", "b", "a"].forEach(function (t) {
                                this[t] = new(SVG["Func" + t.toUpperCase()])("identity"), this.rgb.add(this[t]), this.node.appendChild(this[t].node)
                            }.bind(this)), e)
                            for (var t in e.rgb && (["r", "g", "b"].forEach(function (t) {
                                    this[t].attr(e.rgb)
                                }.bind(this)), delete e.rgb), e) this[t].attr(e[t])
                    },
                    diffuseLighting: function (t, e, i) {
                        this.attr({
                            surfaceScale: t,
                            diffuseConstant: e,
                            kernelUnitLength: i
                        })
                    },
                    specularLighting: function (t, e, i, s) {
                        this.attr({
                            surfaceScale: t,
                            diffuseConstant: e,
                            specularExponent: i,
                            kernelUnitLength: s
                        })
                    }
                },
                s = {
                    distantLight: function (t, e) {
                        this.attr({
                            azimuth: t,
                            elevation: e
                        })
                    },
                    pointLight: function (t, e, i) {
                        this.attr({
                            x: t,
                            y: e,
                            z: i
                        })
                    },
                    spotLight: function (t, e, i, s, a, n) {
                        this.attr({
                            x: t,
                            y: e,
                            z: i,
                            pointsAtX: s,
                            pointsAtY: a,
                            pointsAtZ: n
                        })
                    },
                    mergeNode: function (t) {
                        this.attr("in", t)
                    }
                };

            function a(t) {
                return Array.isArray(t) && (t = new SVG.Array(t)), t.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ")
            }

            function n() {
                var t = function () {};
                for (var e in "function" == typeof arguments[arguments.length - 1] && (t = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
                    for (var i in arguments[e]) t(arguments[e][i], i, arguments[e])
            } ["r", "g", "b", "a"].forEach(function (t) {
                s["Func" + t.toUpperCase()] = function (t) {
                    switch (this.attr("type", t), t) {
                        case "table":
                            this.attr("tableValues", arguments[1]);
                            break;
                        case "linear":
                            this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
                            break;
                        case "gamma":
                            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2])
                    }
                }
            }), n(e, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i + "Effect"] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                    },
                    inherit: SVG.Effect,
                    extend: {}
                })
            }), n(i, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i + "Effect"] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments), this.result(this.attr("id") + "Out")
                    },
                    inherit: SVG.ParentEffect,
                    extend: {}
                })
            }), n(s, function (t, e) {
                var i = e.charAt(0).toUpperCase() + e.slice(1);
                SVG[i] = SVG.invent({
                    create: function () {
                        this.constructor.call(this, SVG.create("fe" + i)), t.apply(this, arguments)
                    },
                    inherit: SVG.ChildEffect,
                    extend: {}
                })
            }), SVG.extend(SVG.MergeEffect, {
                in: function (t) {
                    return t instanceof SVG.MergeNode ? this.add(t, 0) : this.add(new SVG.MergeNode(t), 0), this
                }
            }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, {
                in2: function (t) {
                    return null == t ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", t)
                }
            }), SVG.filter = {
                sepiatone: [.343, .669, .119, 0, 0, .249, .626, .13, 0, 0, .172, .334, .111, 0, 0, 0, 0, 0, 1, 0]
            }
        }.call(void 0),
        function () {
            function h(t, e, i, s, a, n, r) {
                for (var o = t.slice(e, i || r), l = s.slice(a, n || r), h = 0, c = {
                        pos: [0, 0],
                        start: [0, 0]
                    }, d = {
                        pos: [0, 0],
                        start: [0, 0]
                    }; o[h] = u.call(c, o[h]), l[h] = u.call(d, l[h]), o[h][0] != l[h][0] || "M" == o[h][0] || "A" == o[h][0] && (o[h][4] != l[h][4] || o[h][5] != l[h][5]) ? (Array.prototype.splice.apply(o, [h, 1].concat(f.call(c, o[h]))), Array.prototype.splice.apply(l, [h, 1].concat(f.call(d, l[h])))) : (o[h] = g.call(c, o[h]), l[h] = g.call(d, l[h])), ++h != o.length || h != l.length;) h == o.length && o.push(["C", c.pos[0], c.pos[1], c.pos[0], c.pos[1], c.pos[0], c.pos[1]]), h == l.length && l.push(["C", d.pos[0], d.pos[1], d.pos[0], d.pos[1], d.pos[0], d.pos[1]]);
                return {
                    start: o,
                    dest: l
                }
            }

            function u(t) {
                switch (t[0]) {
                    case "z":
                    case "Z":
                        t[0] = "L", t[1] = this.start[0], t[2] = this.start[1];
                        break;
                    case "H":
                        t[0] = "L", t[2] = this.pos[1];
                        break;
                    case "V":
                        t[0] = "L", t[2] = t[1], t[1] = this.pos[0];
                        break;
                    case "T":
                        t[0] = "Q", t[3] = t[1], t[4] = t[2], t[1] = this.reflection[1], t[2] = this.reflection[0];
                        break;
                    case "S":
                        t[0] = "C", t[6] = t[4], t[5] = t[3], t[4] = t[2], t[3] = t[1], t[2] = this.reflection[1], t[1] = this.reflection[0]
                }
                return t
            }

            function g(t) {
                var e = t.length;
                return this.pos = [t[e - 2], t[e - 1]], -1 != "SCQT".indexOf(t[0]) && (this.reflection = [2 * this.pos[0] - t[e - 4], 2 * this.pos[1] - t[e - 3]]), t
            }

            function f(t) {
                var e = [t];
                switch (t[0]) {
                    case "M":
                        return this.pos = this.start = [t[1], t[2]], e;
                    case "L":
                        t[5] = t[3] = t[1], t[6] = t[4] = t[2], t[1] = this.pos[0], t[2] = this.pos[1];
                        break;
                    case "Q":
                        t[6] = t[4], t[5] = t[3], t[4] = 1 * t[4] / 3 + 2 * t[2] / 3, t[3] = 1 * t[3] / 3 + 2 * t[1] / 3, t[2] = 1 * this.pos[1] / 3 + 2 * t[2] / 3, t[1] = 1 * this.pos[0] / 3 + 2 * t[1] / 3;
                        break;
                    case "A":
                        t = (e = function (t, e) {
                            var i, s, a, n, r, o, l, h, c, d, u, g, f, p, x, b, m, v, y, w, k, A, S, C, L, z, P = Math.abs(e[1]),
                                E = Math.abs(e[2]),
                                M = e[3] % 360,
                                T = e[4],
                                X = e[5],
                                I = e[6],
                                Y = e[7],
                                F = new SVG.Point(t),
                                R = new SVG.Point(I, Y),
                                D = [];
                            if (0 === P || 0 === E || F.x === R.x && F.y === R.y) return [
                                ["C", F.x, F.y, R.x, R.y, R.x, R.y]
                            ];
                            for (1 < (s = (i = new SVG.Point((F.x - R.x) / 2, (F.y - R.y) / 2).transform((new SVG.Matrix).rotate(M))).x * i.x / (P * P) + i.y * i.y / (E * E)) && (P *= s = Math.sqrt(s), E *= s), a = (new SVG.Matrix).rotate(M).scale(1 / P, 1 / E).rotate(-M), F = F.transform(a), o = (n = [(R = R.transform(a)).x - F.x, R.y - F.y])[0] * n[0] + n[1] * n[1], r = Math.sqrt(o), n[0] /= r, n[1] /= r, l = o < 4 ? Math.sqrt(1 - o / 4) : 0, T === X && (l *= -1), h = new SVG.Point((R.x + F.x) / 2 + l * -n[1], (R.y + F.y) / 2 + l * n[0]), c = new SVG.Point(F.x - h.x, F.y - h.y), d = new SVG.Point(R.x - h.x, R.y - h.y), u = Math.acos(c.x / Math.sqrt(c.x * c.x + c.y * c.y)), c.y < 0 && (u *= -1), g = Math.acos(d.x / Math.sqrt(d.x * d.x + d.y * d.y)), d.y < 0 && (g *= -1), X && g < u && (g += 2 * Math.PI), !X && u < g && (g -= 2 * Math.PI), b = [], f = (g - (m = u)) / (p = Math.ceil(2 * Math.abs(u - g) / Math.PI)), x = 4 * Math.tan(f / 4) / 3, k = 0; k <= p; k++) y = Math.cos(m), v = Math.sin(m), w = new SVG.Point(h.x + y, h.y + v), b[k] = [new SVG.Point(w.x + x * v, w.y - x * y), w, new SVG.Point(w.x - x * v, w.y + x * y)], m += f;
                            for (b[0][0] = b[0][1].clone(), b[b.length - 1][2] = b[b.length - 1][1].clone(), a = (new SVG.Matrix).rotate(M).scale(P, E).rotate(-M), k = 0, A = b.length; k < A; k++) b[k][0] = b[k][0].transform(a), b[k][1] = b[k][1].transform(a), b[k][2] = b[k][2].transform(a);
                            for (k = 1, A = b.length; k < A; k++) S = (w = b[k - 1][2]).x, C = w.y, L = (w = b[k][0]).x, z = w.y, I = (w = b[k][1]).x, Y = w.y, D.push(["C", S, C, L, z, I, Y]);
                            return D
                        }(this.pos, t))[0]
                }
                return t[0] = "C", this.pos = [t[5], t[6]], this.reflection = [2 * t[5] - t[3], 2 * t[6] - t[4]], e
            }

            function c(t, e) {
                if (!1 === e) return !1;
                for (var i = e, s = t.length; i < s; ++i)
                    if ("M" == t[i][0]) return i;
                return !1
            }
            SVG.extend(SVG.PathArray, {
                morph: function (t) {
                    for (var e = this.value, i = this.parse(t), s = 0, a = 0, n = !1, r = !1; !1 !== s || !1 !== a;) {
                        var o;
                        n = c(e, !1 !== s && s + 1), r = c(i, !1 !== a && a + 1), !1 === s && (s = 0 == (o = new SVG.PathArray(l.start).bbox()).height || 0 == o.width ? e.push(e[0]) - 1 : e.push(["M", o.x + o.width / 2, o.y + o.height / 2]) - 1), !1 === a && (a = 0 == (o = new SVG.PathArray(l.dest).bbox()).height || 0 == o.width ? i.push(i[0]) - 1 : i.push(["M", o.x + o.width / 2, o.y + o.height / 2]) - 1);
                        var l = h(e, s, n, i, a, r);
                        e = e.slice(0, s).concat(l.start, !1 === n ? [] : e.slice(n)), i = i.slice(0, a).concat(l.dest, !1 === r ? [] : i.slice(r)), s = !1 !== n && s + l.start.length, a = !1 !== r && a + l.dest.length
                    }
                    return this.value = e, this.destination = new SVG.PathArray, this.destination.value = i, this
                }
            })
        }(),
        function () {
            function s(t) {
                t.remember("_draggable", this), this.el = t
            }
            s.prototype.init = function (t, e) {
                var i = this;
                this.constraint = t, this.value = e, this.el.on("mousedown.drag", function (t) {
                    i.start(t)
                }), this.el.on("touchstart.drag", function (t) {
                    i.start(t)
                })
            }, s.prototype.transformPoint = function (t, e) {
                var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
                return this.p.x = i.pageX - (e || 0), this.p.y = i.pageY, this.p.matrixTransform(this.m)
            }, s.prototype.getBBox = function () {
                var t = this.el.bbox();
                return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t
            }, s.prototype.start = function (t) {
                if ("click" != t.type && "mousedown" != t.type && "mousemove" != t.type || 1 == (t.which || t.buttons)) {
                    var e = this;
                    this.el.fire("beforedrag", {
                        event: t,
                        handler: this
                    }), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
                    var i, s = this.getBBox();
                    if (this.el instanceof SVG.Text) switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
                        case "middle":
                            i /= 2;
                            break;
                        case "start":
                            i = 0
                    }
                    this.startPoints = {
                        point: this.transformPoint(t, i),
                        box: s,
                        transform: this.el.transform()
                    }, SVG.on(window, "mousemove.drag", function (t) {
                        e.drag(t)
                    }), SVG.on(window, "touchmove.drag", function (t) {
                        e.drag(t)
                    }), SVG.on(window, "mouseup.drag", function (t) {
                        e.end(t)
                    }), SVG.on(window, "touchend.drag", function (t) {
                        e.end(t)
                    }), this.el.fire("dragstart", {
                        event: t,
                        p: this.startPoints.point,
                        m: this.m,
                        handler: this
                    }), t.preventDefault(), t.stopPropagation()
                }
            }, s.prototype.drag = function (t) {
                var e = this.getBBox(),
                    i = this.transformPoint(t),
                    s = this.startPoints.box.x + i.x - this.startPoints.point.x,
                    a = this.startPoints.box.y + i.y - this.startPoints.point.y,
                    n = this.constraint,
                    r = i.x - this.startPoints.point.x,
                    o = i.y - this.startPoints.point.y,
                    l = new CustomEvent("dragmove", {
                        detail: {
                            event: t,
                            p: i,
                            m: this.m,
                            handler: this
                        },
                        cancelable: !0
                    });
                if (this.el.fire(l), l.defaultPrevented) return i;
                if ("function" == typeof n) {
                    var h = n.call(this.el, s, a, this.m);
                    "boolean" == typeof h && (h = {
                        x: h,
                        y: h
                    }), !0 === h.x ? this.el.x(s) : !1 !== h.x && this.el.x(h.x), !0 === h.y ? this.el.y(a) : !1 !== h.y && this.el.y(h.y)
                } else "object" == typeof n && (null != n.minX && s < n.minX ? s = n.minX : null != n.maxX && s > n.maxX - e.width && (s = n.maxX - e.width), null != n.minY && a < n.minY ? a = n.minY : null != n.maxY && a > n.maxY - e.height && (a = n.maxY - e.height), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({
                    x: r,
                    y: o
                }, !0) : this.el.move(s, a));
                return i
            }, s.prototype.end = function (t) {
                var e = this.drag(t);
                this.el.fire("dragend", {
                    event: t,
                    p: e,
                    m: this.m,
                    handler: this
                }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag")
            }, SVG.extend(SVG.Element, {
                draggable: function (t, e) {
                    "function" != typeof t && "object" != typeof t || (e = t, t = !0);
                    var i = this.remember("_draggable") || new s(this);
                    return (t = void 0 === t || t) ? i.init(e || {}, t) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this
                }
            })
        }.call(void 0),
        function () {
            function i(t) {
                (this.el = t).remember("_selectHandler", this), this.pointSelection = {
                    isSelected: !1
                }, this.rectSelection = {
                    isSelected: !1
                }
            }
            i.prototype.init = function (t, e) {
                var i = this.el.bbox();
                for (var s in this.options = {}, this.el.selectize.defaults) this.options[s] = this.el.selectize.defaults[s], void 0 !== e[s] && (this.options[s] = e[s]);
                this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && -1 !== ["line", "polyline", "polygon"].indexOf(this.el.type) ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup()
            }, i.prototype.selectPoints = function (t) {
                return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawCircles()), this
            }, i.prototype.getPointArray = function () {
                var e = this.el.bbox();
                return this.el.array().valueOf().map(function (t) {
                    return [t[0] - e.x, t[1] - e.y]
                })
            }, i.prototype.drawCircles = function () {
                for (var a = this, t = this.getPointArray(), e = 0, i = t.length; e < i; ++e) {
                    var s = function (s) {
                        return function (t) {
                            (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                            var e = t.pageX || t.touches[0].pageX,
                                i = t.pageY || t.touches[0].pageY;
                            a.el.fire("point", {
                                x: e,
                                y: i,
                                i: s,
                                event: t
                            })
                        }
                    }(e);
                    this.pointSelection.set.add(this.nested.circle(this.options.radius).center(t[e][0], t[e][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s).on("mousedown", s))
                }
            }, i.prototype.updatePointSelection = function () {
                var e = this.getPointArray();
                this.pointSelection.set.each(function (t) {
                    this.cx() === e[t][0] && this.cy() === e[t][1] || this.center(e[t][0], e[t][1])
                })
            }, i.prototype.updateRectSelection = function () {
                var t = this.el.bbox();
                this.rectSelection.set.get(0).attr({
                    width: t.width,
                    height: t.height
                }), this.options.points && (this.rectSelection.set.get(2).center(t.width, 0), this.rectSelection.set.get(3).center(t.width, t.height), this.rectSelection.set.get(4).center(0, t.height), this.rectSelection.set.get(5).center(t.width / 2, 0), this.rectSelection.set.get(6).center(t.width, t.height / 2), this.rectSelection.set.get(7).center(t.width / 2, t.height), this.rectSelection.set.get(8).center(0, t.height / 2)), this.options.rotationPoint && (this.options.points ? this.rectSelection.set.get(9).center(t.width / 2, 20) : this.rectSelection.set.get(1).center(t.width / 2, 20))
            }, i.prototype.selectRect = function (t) {
                var a = this,
                    e = this.el.bbox();

                function i(s) {
                    return function (t) {
                        (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                        var e = t.pageX || t.touches[0].pageX,
                            i = t.pageY || t.touches[0].pageY;
                        a.el.fire(s, {
                            x: e,
                            y: i,
                            event: t
                        })
                    }
                }
                if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(e.width, e.height).addClass(this.options.classRect)), this.options.points && !this.rectSelection.set.get(1)) {
                    var s = "touchstart",
                        n = "mousedown";
                    this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, 0).attr("class", this.options.classPoints + "_lt").on(n, i("lt")).on(s, i("lt"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width, 0).attr("class", this.options.classPoints + "_rt").on(n, i("rt")).on(s, i("rt"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width, e.height).attr("class", this.options.classPoints + "_rb").on(n, i("rb")).on(s, i("rb"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, e.height).attr("class", this.options.classPoints + "_lb").on(n, i("lb")).on(s, i("lb"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width / 2, 0).attr("class", this.options.classPoints + "_t").on(n, i("t")).on(s, i("t"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width, e.height / 2).attr("class", this.options.classPoints + "_r").on(n, i("r")).on(s, i("r"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width / 2, e.height).attr("class", this.options.classPoints + "_b").on(n, i("b")).on(s, i("b"))), this.rectSelection.set.add(this.nested.circle(this.options.radius).center(0, e.height / 2).attr("class", this.options.classPoints + "_l").on(n, i("l")).on(s, i("l"))), this.rectSelection.set.each(function () {
                        this.addClass(a.options.classPoints)
                    })
                }
                if (this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
                    var r = function (t) {
                        (t = t || window.event).preventDefault ? t.preventDefault() : t.returnValue = !1, t.stopPropagation();
                        var e = t.pageX || t.touches[0].pageX,
                            i = t.pageY || t.touches[0].pageY;
                        a.el.fire("rot", {
                            x: e,
                            y: i,
                            event: t
                        })
                    };
                    this.rectSelection.set.add(this.nested.circle(this.options.radius).center(e.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", r).on("mousedown", r))
                }
            }, i.prototype.handler = function () {
                var t = this.el.bbox();
                this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection()
            }, i.prototype.observe = function () {
                var t = this;
                if (MutationObserver)
                    if (this.rectSelection.isSelected || this.pointSelection.isSelected) this.observerInst = this.observerInst || new MutationObserver(function () {
                        t.handler()
                    }), this.observerInst.observe(this.el.node, {
                        attributes: !0
                    });
                    else try {
                        this.observerInst.disconnect(), delete this.observerInst
                    } catch (t) {} else this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function () {
                        t.handler()
                    })
            }, i.prototype.cleanup = function () {
                !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function () {
                    this.remove()
                }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function () {
                    this.remove()
                }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested)
            }, SVG.extend(SVG.Element, {
                selectize: function (t, e) {
                    return "object" == typeof t && (e = t, t = !0), (this.remember("_selectHandler") || new i(this)).init(void 0 === t || t, e || {}), this
                }
            }), SVG.Element.prototype.selectize.defaults = {
                points: !0,
                classRect: "svg_select_boundingRect",
                classPoints: "svg_select_points",
                radius: 7,
                rotationPoint: !0,
                deepSelect: !1
            }
        }(),
        function () {
            (function () {
                function e(t) {
                    t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint()
                }
                e.prototype.transformPoint = function (t, e, i) {
                    return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m)
                }, e.prototype._extractPosition = function (t) {
                    return {
                        x: null != t.clientX ? t.clientX : t.touches[0].clientX,
                        y: null != t.clientY ? t.clientY : t.touches[0].clientY
                    }
                }, e.prototype.init = function (t) {
                    var e = this;
                    if (this.stop(), "stop" !== t) {
                        for (var i in this.options = {}, this.el.resize.defaults) this.options[i] = this.el.resize.defaults[i], void 0 !== t[i] && (this.options[i] = t[i]);
                        this.el.on("lt.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("rt.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("rb.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("lb.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("t.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("r.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("b.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("l.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("rot.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.el.on("point.resize", function (t) {
                            e.resize(t || window.event)
                        }), this.update()
                    }
                }, e.prototype.stop = function () {
                    return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this
                }, e.prototype.resize = function (t) {
                    var e = this;
                    this.m = this.el.node.getScreenCTM().inverse(), this.offset = {
                        x: window.pageXOffset,
                        y: window.pageYOffset
                    };
                    var i = this._extractPosition(t.detail.event);
                    if (this.parameters = {
                            type: this.el.type,
                            p: this.transformPoint(i.x, i.y),
                            x: t.detail.x,
                            y: t.detail.y,
                            box: this.el.bbox(),
                            rotation: this.el.transform().rotation
                        }, "text" === this.el.type && (this.parameters.fontSize = this.el.attr()["font-size"]), void 0 !== t.detail.i) {
                        var s = this.el.array().valueOf();
                        this.parameters.i = t.detail.i, this.parameters.pointCoords = [s[t.detail.i][0], s[t.detail.i][1]]
                    }
                    switch (t.type) {
                        case "lt":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e);
                                if (0 < this.parameters.box.width - i[0] && 0 < this.parameters.box.height - i[1]) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y + i[1]).size(this.parameters.box.width - i[0], this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case "rt":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 2);
                                if (0 < this.parameters.box.width + i[0] && 0 < this.parameters.box.height - i[1]) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).size(this.parameters.box.width + i[0], this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case "rb":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (0 < this.parameters.box.width + i[0] && 0 < this.parameters.box.height + i[1]) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x - i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + i[0], this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case "lb":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 1);
                                if (0 < this.parameters.box.width - i[0] && 0 < this.parameters.box.height + i[1]) {
                                    if ("text" === this.parameters.type) return this.el.move(this.parameters.box.x + i[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - i[0]);
                                    i = this.checkAspectRatio(i), this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).size(this.parameters.box.width - i[0], this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case "t":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 2);
                                if (0 < this.parameters.box.height - i[1]) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y + i[1]).height(this.parameters.box.height - i[1])
                                }
                            };
                            break;
                        case "r":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (0 < this.parameters.box.width + i[0]) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + i[0])
                                }
                            };
                            break;
                        case "b":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 0);
                                if (0 < this.parameters.box.height + i[1]) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + i[1])
                                }
                            };
                            break;
                        case "l":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, 1);
                                if (0 < this.parameters.box.width - i[0]) {
                                    if ("text" === this.parameters.type) return;
                                    this.el.move(this.parameters.box.x + i[0], this.parameters.box.y).width(this.parameters.box.width - i[0])
                                }
                            };
                            break;
                        case "rot":
                            this.calc = function (t, e) {
                                var i = t + this.parameters.p.x,
                                    s = e + this.parameters.p.y,
                                    a = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2),
                                    n = 180 * (Math.atan2(s - this.parameters.box.y - this.parameters.box.height / 2, i - this.parameters.box.x - this.parameters.box.width / 2) - a) / Math.PI;
                                this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(this.parameters.rotation + n - n % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy)
                            };
                            break;
                        case "point":
                            this.calc = function (t, e) {
                                var i = this.snapToGrid(t, e, this.parameters.pointCoords[0], this.parameters.pointCoords[1]),
                                    s = this.el.array().valueOf();
                                s[this.parameters.i][0] = this.parameters.pointCoords[0] + i[0], s[this.parameters.i][1] = this.parameters.pointCoords[1] + i[1], this.el.plot(s)
                            }
                    }
                    this.el.fire("resizestart", {
                        dx: this.parameters.x,
                        dy: this.parameters.y,
                        event: t
                    }), SVG.on(window, "touchmove.resize", function (t) {
                        e.update(t || window.event)
                    }), SVG.on(window, "touchend.resize", function () {
                        e.done()
                    }), SVG.on(window, "mousemove.resize", function (t) {
                        e.update(t || window.event)
                    }), SVG.on(window, "mouseup.resize", function () {
                        e.done()
                    })
                }, e.prototype.update = function (t) {
                    if (t) {
                        var e = this._extractPosition(t),
                            i = this.transformPoint(e.x, e.y),
                            s = i.x - this.parameters.p.x,
                            a = i.y - this.parameters.p.y;
                        this.lastUpdateCall = [s, a], this.calc(s, a), this.el.fire("resizing", {
                            dx: s,
                            dy: a,
                            event: t
                        })
                    } else this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1])
                }, e.prototype.done = function () {
                    this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone")
                }, e.prototype.snapToGrid = function (t, e, i, s) {
                    var a;
                    return a = void 0 !== s ? [(i + t) % this.options.snapToGrid, (s + e) % this.options.snapToGrid] : (i = null == i ? 3 : i, [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t -= Math.abs(a[0]) < this.options.snapToGrid / 2 ? a[0] : a[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(a[1]) < this.options.snapToGrid / 2 ? a[1] : a[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, s)
                }, e.prototype.constraintToBox = function (t, e, i, s) {
                    var a, n, r = this.options.constraint || {};
                    return n = void 0 !== s ? (a = i, s) : (a = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), void 0 !== r.minX && a + t < r.minX && (t = r.minX - a), void 0 !== r.maxX && a + t > r.maxX && (t = r.maxX - a), void 0 !== r.minY && n + e < r.minY && (e = r.minY - n), void 0 !== r.maxY && n + e > r.maxY && (e = r.maxY - n), [t, e]
                }, e.prototype.checkAspectRatio = function (t) {
                    if (!this.options.saveAspectRatio) return t;
                    var e = t.slice(),
                        i = this.parameters.box.width / this.parameters.box.height,
                        s = this.parameters.box.width + t[0],
                        a = this.parameters.box.height - t[1],
                        n = s / a;
                    return n < i ? e[1] = s / i - this.parameters.box.height : i < n && (e[0] = this.parameters.box.width - a * i), e
                }, SVG.extend(SVG.Element, {
                    resize: function (t) {
                        return (this.remember("_resizeHandler") || new e(this)).init(t || {}), this
                    }
                }), SVG.Element.prototype.resize.defaults = {
                    snapToAngle: .1,
                    snapToGrid: 1,
                    constraint: {},
                    saveAspectRatio: !1
                }
            }).call(this)
        }(),
        function (t, e) {
            void 0 === e && (e = {});
            var i = e.insertAt;
            if ("undefined" != typeof document) {
                var s = document.head || document.getElementsByTagName("head")[0],
                    a = document.createElement("style");
                a.type = "text/css", "top" === i && s.firstChild ? s.insertBefore(a, s.firstChild) : s.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t))
            }
        }('.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0,0,0,.5);\n  box-shadow: 0 0 1px rgba(255,255,255,.5);\n  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);\n}\n.apexcharts-canvas.dark {\n  background: #343F57;\n}\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-gridline, .apexcharts-text {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n.apexcharts-tooltip.light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n.apexcharts-tooltip.dark {\n  color: #fff;\n  background: rgba(30,30,30, 0.8);\n}\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line {\n  pointer-events: none;\n}\n\n.apexcharts-tooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n.apexcharts-tooltip.light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n.apexcharts-tooltip.dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-text-z-label:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-value, \n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n.apexcharts-tooltip-series-group.active, .apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n.apexcharts-tooltip-candlestick {\n  padding: 4px 8px;\n}\n.apexcharts-tooltip-candlestick > div {\n  margin: 4px 0;\n}\n.apexcharts-tooltip-candlestick span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after, .apexcharts-xaxistooltip:before {\n\tleft: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-left: -6px;\n}\n.apexcharts-xaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after, .apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after, .apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-xaxistooltip-bottom.dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color:#ECEFF1\n}\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n.apexcharts-xaxistooltip-top.dark:after {\n  border-top-color:rgba(0, 0, 0, 0.5);\n}\n.apexcharts-xaxistooltip-top.dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n\n.apexcharts-xaxistooltip.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n\tbackground: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after, .apexcharts-yaxistooltip:before {\n\ttop: 50%;\n\tborder: solid transparent;\n\tcontent: " ";\n\theight: 0;\n\twidth: 0;\n\tposition: absolute;\n\tpointer-events: none;\n}\n.apexcharts-yaxistooltip:after {\n\tborder-color: rgba(236, 239, 241, 0);\n\tborder-width: 6px;\n\tmargin-top: -6px;\n}\n.apexcharts-yaxistooltip:before {\n\tborder-color: rgba(144, 164, 174, 0);\n\tborder-width: 7px;\n\tmargin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after, .apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after, .apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n.apexcharts-yaxistooltip-left.dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-yaxistooltip-left.dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n.apexcharts-yaxistooltip-right.dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n.apexcharts-yaxistooltip-right.dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.active {\n  opacity: 1;\n}\n\n.apexcharts-xcrosshairs, .apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.active, .apexcharts-ycrosshairs.active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-zoom-rect {\n  pointer-events: none;\n}\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_points, .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n.svg_select_points_l, .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n  fill: #888;\n}\n.apexcharts-canvas.zoomable .hovering-zoom {\n  cursor: crosshair\n}\n.apexcharts-canvas.zoomable .hovering-pan {\n  cursor: move\n}\n\n.apexcharts-xaxis,\n.apexcharts-yaxis {\n  pointer-events: none;\n}\n\n.apexcharts-zoom-icon, \n.apexcharts-zoom-in-icon,\n.apexcharts-zoom-out-icon,\n.apexcharts-reset-zoom-icon, \n.apexcharts-pan-icon, \n.apexcharts-selection-icon,\n.apexcharts-menu-icon, \n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n\n.apexcharts-zoom-icon svg, \n.apexcharts-zoom-in-icon svg,\n.apexcharts-zoom-out-icon svg,\n.apexcharts-reset-zoom-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.dark .apexcharts-zoom-icon svg, \n.dark .apexcharts-zoom-in-icon svg,\n.dark .apexcharts-zoom-out-icon svg,\n.dark .apexcharts-reset-zoom-icon svg, \n.dark .apexcharts-pan-icon svg, \n.dark .apexcharts-selection-icon svg,\n.dark .apexcharts-menu-icon svg, \n.dark .apexcharts-toolbar-custom-icon svg{\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.selected svg, \n.apexcharts-canvas .apexcharts-selection-icon.selected svg, \n.apexcharts-canvas .apexcharts-reset-zoom-icon.selected svg {\n  fill: #008FFB;\n}\n.light .apexcharts-selection-icon:not(.selected):hover svg,\n.light .apexcharts-zoom-icon:not(.selected):hover svg, \n.light .apexcharts-zoom-in-icon:hover svg, \n.light .apexcharts-zoom-out-icon:hover svg, \n.light .apexcharts-reset-zoom-icon:hover svg, \n.light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon, .apexcharts-menu-icon {\n  position: relative;\n}\n.apexcharts-reset-zoom-icon {\n  margin-left: 5px;\n}\n.apexcharts-zoom-icon, .apexcharts-reset-zoom-icon, .apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoom-in-icon, .apexcharts-zoom-out-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoom-out-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n.apexcharts-pan-icon.selected svg {\n  stroke: #008FFB;\n}\n.apexcharts-pan-icon:not(.selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  top: 0px;\n  right: 3px;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center; \n}\n\n.apexcharts-toolbar svg {\n  pointer-events: none;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n.light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n.dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-toolbar {\n    /*opacity: 0;*/\n  }\n\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  } \n}\n\n.apexcharts-datalabel.hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabel, .apexcharts-datalabel-label, .apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events, .apexcharts-radar-series path, .apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}'), "document" in self && ("classList" in document.createElement("_") && (!document.createElementNS || "classList" in document.createElementNS("http://www.w3.org/2000/svg", "g")) || function (t) {
            if ("Element" in t) {
                var e = t.Element.prototype,
                    i = Object,
                    n = String.prototype.trim || function () {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    s = Array.prototype.indexOf || function (t) {
                        for (var e = 0, i = this.length; e < i; e++)
                            if (e in this && this[e] === t) return e;
                        return -1
                    },
                    a = function (t, e) {
                        this.name = t, this.code = DOMException[t], this.message = e
                    },
                    r = function (t, e) {
                        if ("" === e) throw new a("SYNTAX_ERR", "The token must not be empty.");
                        if (/\s/.test(e)) throw new a("INVALID_CHARACTER_ERR", "The token must not contain space characters.");
                        return s.call(t, e)
                    },
                    o = function (t) {
                        for (var e = n.call(t.getAttribute("class") || ""), i = e ? e.split(/\s+/) : [], s = 0, a = i.length; s < a; s++) this.push(i[s]);
                        this._updateClassName = function () {
                            t.setAttribute("class", this.toString())
                        }
                    },
                    l = o.prototype = [],
                    h = function () {
                        return new o(this)
                    };
                if (a.prototype = Error.prototype, l.item = function (t) {
                        return this[t] || null
                    }, l.contains = function (t) {
                        return ~r(this, t + "")
                    }, l.add = function () {
                        for (var t, e = arguments, i = 0, s = e.length, a = !1; t = e[i] + "", ~r(this, t) || (this.push(t), a = !0), ++i < s;);
                        a && this._updateClassName()
                    }, l.remove = function () {
                        var t, e, i = arguments,
                            s = 0,
                            a = i.length,
                            n = !1;
                        do {
                            for (t = i[s] + "", e = r(this, t); ~e;) this.splice(e, 1), n = !0, e = r(this, t)
                        } while (++s < a);
                        n && this._updateClassName()
                    }, l.toggle = function (t, e) {
                        var i = this.contains(t),
                            s = i ? !0 !== e && "remove" : !1 !== e && "add";
                        return s && this[s](t), !0 === e || !1 === e ? e : !i
                    }, l.replace = function (t, e) {
                        var i = r(t + "");
                        ~i && (this.splice(i, 1, e), this._updateClassName())
                    }, l.toString = function () {
                        return this.join(" ")
                    }, i.defineProperty) {
                    var c = {
                        get: h,
                        enumerable: !0,
                        configurable: !0
                    };
                    try {
                        i.defineProperty(e, "classList", c)
                    } catch (t) {
                        void 0 !== t.number && -2146823252 !== t.number || (c.enumerable = !1, i.defineProperty(e, "classList", c))
                    }
                } else i.prototype.__defineGetter__ && e.__defineGetter__("classList", h)
            }
        }(self), function () {
            var t = document.createElement("_");
            if (t.classList.add("c1", "c2"), !t.classList.contains("c2")) {
                var e = function (t) {
                    var s = DOMTokenList.prototype[t];
                    DOMTokenList.prototype[t] = function (t) {
                        var e, i = arguments.length;
                        for (e = 0; e < i; e++) t = arguments[e], s.call(this, t)
                    }
                };
                e("add"), e("remove")
            }
            if (t.classList.toggle("c3", !1), t.classList.contains("c3")) {
                var i = DOMTokenList.prototype.toggle;
                DOMTokenList.prototype.toggle = function (t, e) {
                    return 1 in arguments && !this.contains(t) == !e ? e : i.call(this, t)
                }
            }
            "replace" in document.createElement("_").classList || (DOMTokenList.prototype.replace = function (t, e) {
                var i = this.toString().split(" "),
                    s = i.indexOf(t + "");
                ~s && (i = i.slice(s), this.remove.apply(this, i), this.add(e), this.add.apply(this, i.slice(1)))
            }), t = null
        }()),
        function () {
            var s = !1;

            function a(t) {
                var e = t.__resizeTriggers__,
                    i = e.firstElementChild,
                    s = e.lastElementChild,
                    a = i.firstElementChild;
                s.scrollLeft = s.scrollWidth, s.scrollTop = s.scrollHeight, a.style.width = i.offsetWidth + 1 + "px", a.style.height = i.offsetHeight + 1 + "px", i.scrollLeft = i.scrollWidth, i.scrollTop = i.scrollHeight
            }

            function i(e) {
                var i = this;
                a(this), this.__resizeRAF__ && r(this.__resizeRAF__), this.__resizeRAF__ = t(function () {
                    var t;
                    ((t = i).offsetWidth != t.__resizeLast__.width || t.offsetHeight != t.__resizeLast__.height) && (i.__resizeLast__.width = i.offsetWidth, i.__resizeLast__.height = i.offsetHeight, i.__resizeListeners__.forEach(function (t) {
                        t.call(e)
                    }))
                })
            }
            var e, n, t = (e = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                    return window.setTimeout(t, 20)
                }, function (t) {
                    return e(t)
                }),
                r = (n = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout, function (t) {
                    return n(t)
                }),
                o = !1,
                l = "",
                h = "animationstart",
                c = "Webkit Moz O ms".split(" "),
                d = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
                u = document.createElement("fakeelement");
            if (void 0 !== u.style.animationName && (o = !0), !1 === o)
                for (var g = 0; g < c.length; g++)
                    if (void 0 !== u.style[c[g] + "AnimationName"]) {
                        l = "-" + c[g].toLowerCase() + "-", h = d[g];
                        break
                    } var f = "@" + l + "keyframes resizeanim { from { opacity: 0; } to { opacity: 0; } } ",
                p = l + "animation: 1ms resizeanim; ";
            window.addResizeListener = function (e, t) {
                e.__resizeTriggers__ || ("static" == getComputedStyle(e).position && (e.style.position = "relative"), function () {
                    if (!s) {
                        var t = (f || "") + ".resize-triggers { " + (p || "") + 'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                            e = document.head || document.getElementsByTagName("head")[0],
                            i = document.createElement("style");
                        i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(document.createTextNode(t)), e.appendChild(i), s = !0
                    }
                }(), e.__resizeLast__ = {}, e.__resizeListeners__ = [], (e.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers", e.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div><div class="contract-trigger"></div>', e.appendChild(e.__resizeTriggers__), a(e), e.addEventListener("scroll", i, !0), h && e.__resizeTriggers__.addEventListener(h, function (t) {
                    "resizeanim" == t.animationName && a(e)
                })), e.__resizeListeners__.push(t)
            }, window.removeResizeListener = function (t, e) {
                t && (t.__resizeListeners__.splice(t.__resizeListeners__.indexOf(e), 1), t.__resizeListeners__.length || (t.removeEventListener("scroll", i), t.__resizeTriggers__ = !t.removeChild(t.__resizeTriggers__)))
            }
        }(), window.Apex = {},
        function () {
            function i(t, e) {
                n(this, i), this.opts = e, (this.ctx = this).w = new f(e).init(), this.el = t, this.w.globals.cuid = (Math.random() + 1).toString(36).substring(4), this.w.globals.chartID = this.w.config.chart.id ? this.w.config.chart.id : this.w.globals.cuid, this.initModules(), this.create = lt.bind(this.create, this), this.windowResizeHandler = this.windowResize.bind(this)
            }
            return r(i, [{
                key: "render",
                value: function () {
                    var a = this;
                    return new V(function (t, e) {
                        if (null !== a.el) {
                            void 0 === Apex._chartInstances && (Apex._chartInstances = []), a.w.config.chart.id && Apex._chartInstances.push({
                                id: a.w.globals.chartID,
                                group: a.w.config.chart.group,
                                chart: a
                            }), a.setLocale(a.w.config.chart.defaultLocale);
                            var i = a.w.config.chart.events.beforeMount;
                            "function" == typeof i && i(a, a.w), a.fireEvent("beforeMount", [a, a.w]), window.addEventListener("resize", a.windowResizeHandler), window.addResizeListener(a.el.parentNode, a.parentResizeCallback.bind(a));
                            var s = a.create(a.w.config.series, {});
                            if (!s) return t(a);
                            a.mount(s).then(function () {
                                t(s), "function" == typeof a.w.config.chart.events.mounted && a.w.config.chart.events.mounted(a, a.w), a.fireEvent("mounted", [a, a.w])
                            }).catch(function (t) {
                                e(t)
                            })
                        } else e(new Error("Element not found"))
                    })
                }
            }, {
                key: "initModules",
                value: function () {
                    this.animations = new Y(this), this.annotations = new t(this), this.core = new H(this.el, this), this.grid = new K(this), this.coreUtils = new ct(this), this.config = new u({}), this.crosshairs = new b(this), this.options = new p, this.responsive = new et(this), this.series = new D(this), this.theme = new it(this), this.formatters = new m(this), this.titleSubtitle = new vt(this), this.legend = new tt(this), this.toolbar = new bt(this), this.dimensions = new N(this), this.zoomPanSelection = new mt(this), this.w.globals.tooltip = new xt(this)
                }
            }, {
                key: "addEventListener",
                value: function (t, e) {
                    var i = this.w;
                    i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e]
                }
            }, {
                key: "removeEventListener",
                value: function (t, e) {
                    var i = this.w;
                    if (i.globals.events.hasOwnProperty(t)) {
                        var s = i.globals.events[t].indexOf(e); - 1 !== s && i.globals.events[t].splice(s, 1)
                    }
                }
            }, {
                key: "fireEvent",
                value: function (t, e) {
                    var i = this.w;
                    if (i.globals.events.hasOwnProperty(t)) {
                        e && e.length || (e = []);
                        for (var s = i.globals.events[t], a = s.length, n = 0; n < a; n++) s[n].apply(null, e)
                    }
                }
            }, {
                key: "create",
                value: function (t, e) {
                    var i = this.w;
                    this.initModules();
                    var s = this.w.globals;
                    if (s.noData = !1, s.animationEnded = !1, this.responsive.checkResponsiveConfig(e), null === this.el) return s.animationEnded = !0, null;
                    if (this.core.setupElements(), 0 === s.svgWidth) return s.animationEnded = !0, null;
                    var a = ct.checkComboSeries(t);
                    s.comboCharts = a.comboCharts, s.comboChartsHasBars = a.comboChartsHasBars, (0 === t.length || 1 === t.length && t[0].data && 0 === t[0].data.length) && this.series.handleNoData(), this.setupEventHandlers(), this.core.parseData(t), this.theme.init(), new ut(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), this.legend.init(), this.series.hasAllSeriesEqualX(), s.axisCharts && (this.core.coreCalculations(), "category" !== i.config.xaxis.type && this.formatters.setLabelFormatters()), this.formatters.heatmapLabelFormatters(), this.dimensions.plotCoords();
                    var n = this.core.xySettings();
                    this.grid.createGridMask();
                    var r = this.core.plotChartType(t, n);
                    this.core.shiftGraphPosition();
                    var o = {
                        plot: {
                            left: i.globals.translateX,
                            top: i.globals.translateY,
                            width: i.globals.gridWidth,
                            height: i.globals.gridHeight
                        }
                    };
                    return {
                        elGraph: r,
                        xyRatios: n,
                        elInner: i.globals.dom.elGraphical,
                        dimensions: o
                    }
                }
            }, {
                key: "mount",
                value: function () {
                    var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
                        n = this,
                        r = n.w;
                    return new V(function (t, e) {
                        if (null === n.el) return e(new Error("Not enough data to display or target element not found"));
                        if ((null === a || r.globals.allSeriesCollapsed) && n.series.handleNoData(), n.core.drawAxis(r.config.chart.type, a.xyRatios), n.grid = new K(n), "back" === r.config.grid.position && n.grid.drawGrid(), "back" === r.config.annotations.position && n.annotations.drawAnnotations(), a.elGraph instanceof Array)
                            for (var i = 0; i < a.elGraph.length; i++) r.globals.dom.elGraphical.add(a.elGraph[i]);
                        else r.globals.dom.elGraphical.add(a.elGraph);
                        if ("front" === r.config.grid.position && n.grid.drawGrid(), "front" === r.config.xaxis.crosshairs.position && n.crosshairs.drawXCrosshairs(), "front" === r.config.yaxis[0].crosshairs.position && n.crosshairs.drawYCrosshairs(), "front" === r.config.annotations.position && n.annotations.drawAnnotations(), !r.globals.noData) {
                            if (r.config.tooltip.enabled && !r.globals.noData && n.w.globals.tooltip.drawTooltip(a.xyRatios), r.globals.axisCharts && r.globals.isXNumeric)(r.config.chart.zoom.enabled || r.config.chart.selection && r.config.chart.selection.enabled || r.config.chart.pan && r.config.chart.pan.enabled) && n.zoomPanSelection.init({
                                xyRatios: a.xyRatios
                            });
                            else {
                                var s = r.config.chart.toolbar.tools;
                                s.zoom = !1, s.zoomin = !1, s.zoomout = !1, s.selection = !1, s.pan = !1, s.reset = !1
                            }
                            r.config.chart.toolbar.show && !r.globals.allSeriesCollapsed && n.toolbar.createToolbar()
                        }
                        0 < r.globals.memory.methodsToExec.length && r.globals.memory.methodsToExec.forEach(function (t) {
                            t.method(t.params, !1, t.context)
                        }), t(n)
                    })
                }
            }, {
                key: "clearPreviousPaths",
                value: function () {
                    var t = this.w;
                    t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1, t.globals.collapsedSeries = [], t.globals.collapsedSeriesIndices = []
                }
            }, {
                key: "updateOptions",
                value: function (t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        s = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3],
                        a = this.w;
                    return t.series && (t.series[0].data && (t.series = t.series.map(function (t, e) {
                        return ot({}, a.config.series[e], {
                            name: t.name ? t.name : a.config.series[e] && a.config.series[e].name,
                            type: t.type ? t.type : a.config.series[e] && a.config.series[e].type,
                            data: t.data ? t.data : a.config.series[e] && a.config.series[e].data
                        })
                    })), this.revertDefaultAxisMinMax()), t.xaxis && ((t.xaxis.min || t.xaxis.max) && this.forceXAxisUpdate(t), t.xaxis.categories && t.xaxis.categories.length && a.config.xaxis.convertedCatToNumeric && (t = d.convertCatToNumeric(t))), 0 < a.globals.collapsedSeriesIndices.length && this.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this._updateOptions(t, e, i, s)
                }
            }, {
                key: "_updateOptions",
                value: function (i) {
                    var s = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
                        a = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        n = 3 < arguments.length && void 0 !== arguments[3] && arguments[3];
                    this.getSyncedCharts().forEach(function (t) {
                        var e = t.w;
                        return e.globals.shouldAnimate = a, s || (e.globals.resized = !0, e.globals.dataChanged = !0, a && t.series.getPreviousPaths()), i && "object" === w(i) && (t.config = new u(i), i = ct.extendArrayProps(t.config, i), e.config = lt.extend(e.config, i), n && (e.globals.lastXAxis = [], e.globals.lastYAxis = [], e.globals.initialConfig = lt.extend({}, e.config), e.globals.initialSeries = JSON.parse(JSON.stringify(e.config.series)))), t.update(i)
                    })
                }
            }, {
                key: "updateSeries",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                        e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
                    return this.revertDefaultAxisMinMax(), this._updateSeries(t, e, i)
                }
            }, {
                key: "appendSeries",
                value: function (t) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2],
                        s = this.w.config.series.slice();
                    return s.push(t), this.revertDefaultAxisMinMax(), this._updateSeries(s, e, i)
                }
            }, {
                key: "_updateSeries",
                value: function (t, e) {
                    var i, s = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
                        a = this.w;
                    return this.w.globals.shouldAnimate = e, a.globals.dataChanged = !0, a.globals.allSeriesCollapsed && (a.globals.allSeriesCollapsed = !1), e && this.series.getPreviousPaths(), a.globals.axisCharts ? (0 === (i = t.map(function (t, e) {
                        return ot({}, a.config.series[e], {
                            name: t.name ? t.name : a.config.series[e] && a.config.series[e].name,
                            type: t.type ? t.type : a.config.series[e] && a.config.series[e].type,
                            data: t.data ? t.data : a.config.series[e] && a.config.series[e].data
                        })
                    })).length && (i = [{
                        data: []
                    }]), a.config.series = i) : a.config.series = t.slice(), s && (a.globals.initialConfig.series = JSON.parse(JSON.stringify(a.config.series)), a.globals.initialSeries = JSON.parse(JSON.stringify(a.config.series))), this.update()
                }
            }, {
                key: "getSyncedCharts",
                value: function () {
                    var t = this.getGroupedCharts(),
                        e = [this];
                    return t.length && (e = [], t.forEach(function (t) {
                        e.push(t)
                    })), e
                }
            }, {
                key: "getGroupedCharts",
                value: function () {
                    var e = this;
                    return Apex._chartInstances.filter(function (t) {
                        if (t.group) return !0
                    }).map(function (t) {
                        return e.w.config.chart.group === t.group ? t.chart : e
                    })
                }
            }, {
                key: "appendData",
                value: function (t) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1];
                    this.w.globals.dataChanged = !0, this.series.getPreviousPaths();
                    for (var i = this.w.config.series.slice(), s = 0; s < i.length; s++)
                        if (void 0 !== t[s])
                            for (var a = 0; a < t[s].data.length; a++) i[s].data.push(t[s].data[a]);
                    return this.w.config.series = i, e && (this.w.globals.initialSeries = JSON.parse(JSON.stringify(this.w.config.series))), this.update()
                }
            }, {
                key: "update",
                value: function (s) {
                    var a = this;
                    return new V(function (t, e) {
                        a.clear();
                        var i = a.create(a.w.config.series, s);
                        if (!i) return t(a);
                        a.mount(i).then(function () {
                            "function" == typeof a.w.config.chart.events.updated && a.w.config.chart.events.updated(a, a.w), a.fireEvent("updated", [a, a.w]), a.w.globals.isDirty = !0, t(a)
                        }).catch(function (t) {
                            e(t)
                        })
                    })
                }
            }, {
                key: "forceXAxisUpdate",
                value: function (t) {
                    var e = this.w;
                    void 0 !== t.xaxis.min && (e.config.xaxis.min = t.xaxis.min, e.globals.lastXAxis.min = t.xaxis.min), void 0 !== t.xaxis.max && (e.config.xaxis.max = t.xaxis.max, e.globals.lastXAxis.max = t.xaxis.max)
                }
            }, {
                key: "revertDefaultAxisMinMax",
                value: function () {
                    var i = this.w;
                    i.config.xaxis.min = i.globals.lastXAxis.min, i.config.xaxis.max = i.globals.lastXAxis.max, i.config.yaxis.map(function (t, e) {
                        i.globals.zoomed && void 0 !== i.globals.lastYAxis[e] && (t.min = i.globals.lastYAxis[e].min, t.max = i.globals.lastYAxis[e].max)
                    })
                }
            }, {
                key: "clear",
                value: function () {
                    this.zoomPanSelection && this.zoomPanSelection.destroy(), this.toolbar && this.toolbar.destroy(), this.animations = null, this.annotations = null, this.core = null, this.grid = null, this.series = null, this.responsive = null, this.theme = null, this.formatters = null, this.titleSubtitle = null, this.legend = null, this.dimensions = null, this.options = null, this.crosshairs = null, this.zoomPanSelection = null, this.toolbar = null, this.w.globals.tooltip = null, this.clearDomElements()
                }
            }, {
                key: "killSVG",
                value: function (i) {
                    return new V(function (t, e) {
                        i.each(function (t, e) {
                            this.removeClass("*"), this.off(), this.stop()
                        }, !0), i.ungroup(), i.clear(), t("done")
                    })
                }
            }, {
                key: "clearDomElements",
                value: function () {
                    var t = this.w.globals.dom;
                    if (null !== this.el)
                        for (; this.el.firstChild;) this.el.removeChild(this.el.firstChild);
                    this.killSVG(t.Paper), t.Paper.remove(), t.elWrap = null, t.elGraphical = null, t.elLegendWrap = null, t.baseEl = null, t.elGridRect = null, t.elGridRectMask = null, t.elGridRectMarkerMask = null, t.elDefs = null
                }
            }, {
                key: "destroy",
                value: function () {
                    this.clear();
                    var i = this.w.config.chart.id;
                    i && Apex._chartInstances.forEach(function (t, e) {
                        t.id === i && Apex._chartInstances.splice(e, 1)
                    }), window.removeEventListener("resize", this.windowResizeHandler), window.removeResizeListener(this.el.parentNode, this.parentResizeCallback.bind(this))
                }
            }, {
                key: "toggleSeries",
                value: function (t) {
                    var e = this.series.getSeriesByName(t),
                        i = parseInt(e.getAttribute("data:realIndex")),
                        s = e.classList.contains("apexcharts-series-collapsed");
                    this.legend.toggleDataSeries(i, s)
                }
            }, {
                key: "resetToggleSeries",
                value: function () {
                    this.legend.resetToggleDataSeries()
                }
            }, {
                key: "setupEventHandlers",
                value: function () {
                    var e = this.w,
                        i = this,
                        s = e.globals.dom.baseEl.querySelector(e.globals.chartClass),
                        t = ["mousedown", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"];
                    t.forEach(function (t) {
                        s.addEventListener(t, function (t) {
                            "mousedown" === t.type && 1 === t.which || ("mouseup" === t.type && 1 === t.which || "touchend" === t.type) && ("function" == typeof e.config.chart.events.click && e.config.chart.events.click(t, i, e), i.fireEvent("click", [t, i, e]))
                        }, {
                            capture: !1,
                            passive: !0
                        })
                    }), t.forEach(function (t) {
                        document.addEventListener(t, function (t) {
                            e.globals.clientX = "touchmove" === t.type ? t.touches[0].clientX : t.clientX, e.globals.clientY = "touchmove" === t.type ? t.touches[0].clientY : t.clientY
                        })
                    }), this.core.setupBrushHandler()
                }
            }, {
                key: "addXaxisAnnotation",
                value: function (t) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                        s = this;
                    i && (s = i), s.annotations.addXaxisAnnotationExternal(t, e, s)
                }
            }, {
                key: "addYaxisAnnotation",
                value: function (t) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                        s = this;
                    i && (s = i), s.annotations.addYaxisAnnotationExternal(t, e, s)
                }
            }, {
                key: "addPointAnnotation",
                value: function (t) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                        s = this;
                    i && (s = i), s.annotations.addPointAnnotationExternal(t, e, s)
                }
            }, {
                key: "clearAnnotations",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : void 0,
                        e = this;
                    t && (e = t), e.annotations.clearAnnotations(e)
                }
            }, {
                key: "addText",
                value: function (t) {
                    var e = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : void 0,
                        s = this;
                    i && (s = i), s.annotations.addText(t, e, s)
                }
            }, {
                key: "getChartArea",
                value: function () {
                    return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner")
                }
            }, {
                key: "getSeriesTotalXRange",
                value: function (t, e) {
                    return this.coreUtils.getSeriesTotalsXRange(t, e)
                }
            }, {
                key: "getHighestValueInSeries",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    return new e(this.ctx).getMinYMaxY(t).highestY
                }
            }, {
                key: "getLowestValueInSeries",
                value: function () {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    return new e(this.ctx).getMinYMaxY(t).lowestY
                }
            }, {
                key: "getSeriesTotal",
                value: function () {
                    return this.w.globals.seriesTotals
                }
            }, {
                key: "setLocale",
                value: function (t) {
                    this.setCurrentLocaleValues(t)
                }
            }, {
                key: "setCurrentLocaleValues",
                value: function (e) {
                    var t = this.w.config.chart.locales;
                    window.Apex.chart && window.Apex.chart.locales && 0 < window.Apex.chart.locales.length && (t = this.w.config.chart.locales.concat(window.Apex.chart.locales));
                    var i = t.filter(function (t) {
                        return t.name === e
                    })[0];
                    if (!i) throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
                    var s = lt.extend(c, i);
                    this.w.globals.locale = s.options
                }
            }, {
                key: "dataURI",
                value: function () {
                    return new Q(this.ctx).dataURI()
                }
            }, {
                key: "paper",
                value: function () {
                    return this.w.globals.dom.Paper
                }
            }, {
                key: "parentResizeCallback",
                value: function () {
                    this.w.globals.animationEnded && this.windowResize()
                }
            }, {
                key: "windowResize",
                value: function () {
                    var t = this;
                    clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function () {
                        t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.update()
                    }, 150)
                }
            }], [{
                key: "initOnLoad",
                value: function () {
                    for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++) new i(t[e], JSON.parse(t[e].getAttribute("data-options"))).render()
                }
            }, {
                key: "exec",
                value: function (t, e) {
                    var i = this.getChartByID(t);
                    if (i) {
                        for (var s = arguments.length, a = new Array(2 < s ? s - 2 : 0), n = 2; n < s; n++) a[n - 2] = arguments[n];
                        switch (e) {
                            case "updateOptions":
                                return i.updateOptions.apply(i, a);
                            case "updateSeries":
                                return i.updateSeries.apply(i, a);
                            case "appendData":
                                return i.appendData.apply(i, a);
                            case "appendSeries":
                                return i.appendSeries.apply(i, a);
                            case "toggleSeries":
                                return i.toggleSeries.apply(i, a);
                            case "dataURI":
                                return i.dataURI.apply(i, a);
                            case "addXaxisAnnotation":
                                return i.addXaxisAnnotation.apply(i, a);
                            case "addYaxisAnnotation":
                                return i.addYaxisAnnotation.apply(i, a);
                            case "addPointAnnotation":
                                return i.addPointAnnotation.apply(i, a);
                            case "addText":
                                return i.addText.apply(i, a);
                            case "clearAnnotations":
                                return i.clearAnnotations.apply(i, a);
                            case "paper":
                                return i.paper.apply(i, a);
                            case "destroy":
                                return i.destroy()
                        }
                    }
                }
            }, {
                key: "merge",
                value: function (t, e) {
                    return lt.extend(t, e)
                }
            }, {
                key: "getChartByID",
                value: function (e) {
                    return Apex._chartInstances.filter(function (t) {
                        return t.id === e
                    })[0].chart
                }
            }]), i
        }()
});