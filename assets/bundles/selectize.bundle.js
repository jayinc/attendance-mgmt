! function (e, t) {
    "function" == typeof define && define.amd ? define("sifter", t) : "object" == typeof exports ? module.exports = t() : e.Sifter = t()
}(this, function () {
    var e = function (e, t) {
        this.items = e, this.settings = t || {
            diacritics: !0
        }
    };
    e.prototype.tokenize = function (e) {
        if (!(e = a(String(e || "").toLowerCase())) || !e.length) return [];
        var t, n, i, o, r = [],
            s = e.split(/ +/);
        for (t = 0, n = s.length; t < n; t++) {
            if (i = l(s[t]), this.settings.diacritics)
                for (o in p) p.hasOwnProperty(o) && (i = i.replace(new RegExp(o, "g"), p[o]));
            r.push({
                string: s[t],
                regex: new RegExp(i, "i")
            })
        }
        return r
    }, e.prototype.iterator = function (e, t) {
        (s(e) ? Array.prototype.forEach || function (e) {
            for (var t = 0, n = this.length; t < n; t++) e(this[t], t, this)
        } : function (e) {
            for (var t in this) this.hasOwnProperty(t) && e(this[t], t, this)
        }).apply(e, [t])
    }, e.prototype.getScoreFunction = function (e, t) {
        var o, r, s, a;
        e = this.prepareSearch(e, t), r = e.tokens, o = e.options.fields, s = r.length, a = e.options.nesting;
        var l, p = function (e, t) {
                var n, i;
                return e ? -1 === (i = (e = String(e || "")).search(t.regex)) ? 0 : (n = t.string.length / e.length, 0 === i && (n += .5), n) : 0
            },
            c = (l = o.length) ? 1 === l ? function (e, t) {
                return p(g(t, o[0], a), e)
            } : function (e, t) {
                for (var n = 0, i = 0; n < l; n++) i += p(g(t, o[n], a), e);
                return i / l
            } : function () {
                return 0
            };
        return s ? 1 === s ? function (e) {
            return c(r[0], e)
        } : "and" === e.options.conjunction ? function (e) {
            for (var t, n = 0, i = 0; n < s; n++) {
                if ((t = c(r[n], e)) <= 0) return 0;
                i += t
            }
            return i / s
        } : function (e) {
            for (var t = 0, n = 0; t < s; t++) n += c(r[t], e);
            return n / s
        } : function () {
            return 0
        }
    }, e.prototype.getSortFunction = function (e, n) {
        var t, i, o, r, s, a, l, p, c, u, d;
        if (d = !(e = (o = this).prepareSearch(e, n)).query && n.sort_empty || n.sort, c = function (e, t) {
                return "$score" === e ? t.score : g(o.items[t.id], e, n.nesting)
            }, s = [], d)
            for (t = 0, i = d.length; t < i; t++)(e.query || "$score" !== d[t].field) && s.push(d[t]);
        if (e.query) {
            for (u = !0, t = 0, i = s.length; t < i; t++)
                if ("$score" === s[t].field) {
                    u = !1;
                    break
                } u && s.unshift({
                field: "$score",
                direction: "desc"
            })
        } else
            for (t = 0, i = s.length; t < i; t++)
                if ("$score" === s[t].field) {
                    s.splice(t, 1);
                    break
                } for (p = [], t = 0, i = s.length; t < i; t++) p.push("desc" === s[t].direction ? -1 : 1);
        return (a = s.length) ? 1 === a ? (r = s[0].field, l = p[0], function (e, t) {
            return l * h(c(r, e), c(r, t))
        }) : function (e, t) {
            var n, i, o;
            for (n = 0; n < a; n++)
                if (o = s[n].field, i = p[n] * h(c(o, e), c(o, t))) return i;
            return 0
        } : null
    }, e.prototype.prepareSearch = function (e, t) {
        if ("object" == typeof e) return e;
        var n = (t = r({}, t)).fields,
            i = t.sort,
            o = t.sort_empty;
        return n && !s(n) && (t.fields = [n]), i && !s(i) && (t.sort = [i]), o && !s(o) && (t.sort_empty = [o]), {
            options: t,
            query: String(e || "").toLowerCase(),
            tokens: this.tokenize(e),
            total: 0,
            items: []
        }
    }, e.prototype.search = function (e, n) {
        var i, o, t, r, s = this;
        return o = this.prepareSearch(e, n), n = o.options, e = o.query, r = n.score || s.getScoreFunction(o), e.length ? s.iterator(s.items, function (e, t) {
            i = r(e), (!1 === n.filter || 0 < i) && o.items.push({
                score: i,
                id: t
            })
        }) : s.iterator(s.items, function (e, t) {
            o.items.push({
                score: 1,
                id: t
            })
        }), (t = s.getSortFunction(o, n)) && o.items.sort(t), o.total = o.items.length, "number" == typeof n.limit && (o.items = o.items.slice(0, n.limit)), o
    };
    var h = function (e, t) {
            return "number" == typeof e && "number" == typeof t ? t < e ? 1 : e < t ? -1 : 0 : (e = n(String(e || "")), (t = n(String(t || ""))) < e ? 1 : e < t ? -1 : 0)
        },
        r = function (e, t) {
            var n, i, o, r;
            for (n = 1, i = arguments.length; n < i; n++)
                if (r = arguments[n])
                    for (o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
            return e
        },
        g = function (e, t, n) {
            if (e && t) {
                if (!n) return e[t];
                for (var i = t.split("."); i.length && (e = e[i.shift()]););
                return e
            }
        },
        a = function (e) {
            return (e + "").replace(/^\s+|\s+$|/g, "")
        },
        l = function (e) {
            return (e + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
        },
        s = Array.isArray || "undefined" != typeof $ && $.isArray || function (e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        },
        p = {
            a: "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",
            b: "[b␢βΒB฿𐌁ᛒ]",
            c: "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",
            d: "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",
            e: "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",
            f: "[fƑƒḞḟ]",
            g: "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",
            h: "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",
            i: "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",
            j: "[jȷĴĵɈɉʝɟʲ]",
            k: "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",
            l: "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",
            n: "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",
            o: "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",
            p: "[pṔṕṖṗⱣᵽƤƥᵱ]",
            q: "[qꝖꝗʠɊɋꝘꝙq̃]",
            r: "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",
            s: "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",
            t: "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",
            u: "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",
            v: "[vṼṽṾṿƲʋꝞꝟⱱʋ]",
            w: "[wẂẃẀẁŴŵẄẅẆẇẈẉ]",
            x: "[xẌẍẊẋχ]",
            y: "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",
            z: "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]"
        },
        n = function () {
            var e, t, n, i, o = "",
                r = {};
            for (n in p)
                if (p.hasOwnProperty(n))
                    for (o += i = p[n].substring(2, p[n].length - 1), e = 0, t = i.length; e < t; e++) r[i.charAt(e)] = n;
            var s = new RegExp("[" + o + "]", "g");
            return function (e) {
                return e.replace(s, function (e) {
                    return r[e]
                }).toLowerCase()
            }
        }();
    return e
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("microplugin", t) : "object" == typeof exports ? module.exports = t() : e.MicroPlugin = t()
}(this, function () {
    var e = {
            mixin: function (i) {
                i.plugins = {}, i.prototype.initializePlugins = function (e) {
                    var t, n, i, o = [];
                    if (this.plugins = {
                            names: [],
                            settings: {},
                            requested: {},
                            loaded: {}
                        }, r.isArray(e))
                        for (t = 0, n = e.length; t < n; t++) "string" == typeof e[t] ? o.push(e[t]) : (this.plugins.settings[e[t].name] = e[t].options, o.push(e[t].name));
                    else if (e)
                        for (i in e) e.hasOwnProperty(i) && (this.plugins.settings[i] = e[i], o.push(i));
                    for (; o.length;) this.require(o.shift())
                }, i.prototype.loadPlugin = function (e) {
                    var t = this.plugins,
                        n = i.plugins[e];
                    if (!i.plugins.hasOwnProperty(e)) throw new Error('Unable to find "' + e + '" plugin');
                    t.requested[e] = !0, t.loaded[e] = n.fn.apply(this, [this.plugins.settings[e] || {}]), t.names.push(e)
                }, i.prototype.require = function (e) {
                    var t = this.plugins;
                    if (!this.plugins.loaded.hasOwnProperty(e)) {
                        if (t.requested[e]) throw new Error('Plugin has circular dependency ("' + e + '")');
                        this.loadPlugin(e)
                    }
                    return t.loaded[e]
                }, i.define = function (e, t) {
                    i.plugins[e] = {
                        name: e,
                        fn: t
                    }
                }
            }
        },
        r = {
            isArray: Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
        };
    return e
}),
function (e, t) {
    "function" == typeof define && define.amd ? define("selectize", ["jquery", "sifter", "microplugin"], t) : "object" == typeof exports ? module.exports = t(require("jquery"), require("sifter"), require("microplugin")) : e.Selectize = t(e.jQuery, e.Sifter, e.MicroPlugin)
}(this, function (x, u, e) {
    "use strict";
    var S = function (e, t) {
        if ("string" != typeof t || t.length) {
            var l = "string" == typeof t ? new RegExp(t, "i") : t,
                p = function (e) {
                    var t = 0;
                    if (3 === e.nodeType) {
                        var n = e.data.search(l);
                        if (0 <= n && 0 < e.data.length) {
                            var i = e.data.match(l),
                                o = document.createElement("span");
                            o.className = "highlight";
                            var r = e.splitText(n),
                                s = (r.splitText(i[0].length), r.cloneNode(!0));
                            o.appendChild(s), r.parentNode.replaceChild(o, r), t = 1
                        }
                    } else if (1 === e.nodeType && e.childNodes && !/(script|style)/i.test(e.tagName))
                        for (var a = 0; a < e.childNodes.length; ++a) a += p(e.childNodes[a]);
                    return t
                };
            return e.each(function () {
                p(this)
            })
        }
    };
    x.fn.removeHighlight = function () {
        return this.find("span.highlight").each(function () {
            this.parentNode.firstChild.nodeName;
            var e = this.parentNode;
            e.replaceChild(this.firstChild, this), e.normalize()
        }).end()
    };
    var i = function () {};
    i.prototype = {
        on: function (e, t) {
            this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(t)
        },
        off: function (e, t) {
            var n = arguments.length;
            return 0 === n ? delete this._events : 1 === n ? delete this._events[e] : (this._events = this._events || {}, void(e in this._events != !1 && this._events[e].splice(this._events[e].indexOf(t), 1)))
        },
        trigger: function (e) {
            if (this._events = this._events || {}, e in this._events != !1)
                for (var t = 0; t < this._events[e].length; t++) this._events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
        }
    }, i.mixin = function (e) {
        for (var t = ["on", "off", "trigger"], n = 0; n < t.length; n++) e.prototype[t[n]] = i.prototype[t[n]]
    };
    var C = /Mac/.test(navigator.userAgent),
        $ = C ? 91 : 17,
        b = C ? 18 : 17,
        I = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
        p = function (e) {
            return void 0 !== e
        },
        _ = function (e) {
            return null == e ? null : "boolean" == typeof e ? e ? "1" : "0" : e + ""
        },
        a = function (e) {
            return (e + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
        },
        t = {
            before: function (e, t, n) {
                var i = e[t];
                e[t] = function () {
                    return n.apply(e, arguments), i.apply(e, arguments)
                }
            },
            after: function (t, e, n) {
                var i = t[e];
                t[e] = function () {
                    var e = i.apply(t, arguments);
                    return n.apply(t, arguments), e
                }
            }
        },
        n = function (t, n, e) {
            var i, o = t.trigger,
                r = {};
            for (i in t.trigger = function () {
                    var e = arguments[0];
                    if (-1 === n.indexOf(e)) return o.apply(t, arguments);
                    r[e] = arguments
                }, e.apply(t, []), t.trigger = o, r) r.hasOwnProperty(i) && o.apply(t, r[i])
        },
        d = function (e) {
            var t = {};
            if ("selectionStart" in e) t.start = e.selectionStart, t.length = e.selectionEnd - t.start;
            else if (document.selection) {
                e.focus();
                var n = document.selection.createRange(),
                    i = document.selection.createRange().text.length;
                n.moveStart("character", -e.value.length), t.start = n.text.length - i, t.length = i
            }
            return t
        },
        F = function (c) {
            var u = null,
                e = function (e, t) {
                    var n, i, o, r, s, a, l, p;
                    t = t || {}, (e = e || window.event || {}).metaKey || e.altKey || (t.force || !1 !== c.data("grow")) && (n = c.val(), e.type && "keydown" === e.type.toLowerCase() && (o = 97 <= (i = e.keyCode) && i <= 122 || 65 <= i && i <= 90 || 48 <= i && i <= 57 || 32 === i, 46 === i || 8 === i ? (p = d(c[0])).length ? n = n.substring(0, p.start) + n.substring(p.start + p.length) : 8 === i && p.start ? n = n.substring(0, p.start - 1) + n.substring(p.start + 1) : 46 === i && void 0 !== p.start && (n = n.substring(0, p.start) + n.substring(p.start + 1)) : o && (a = e.shiftKey, l = String.fromCharCode(e.keyCode), n += l = a ? l.toUpperCase() : l.toLowerCase())), r = c.attr("placeholder"), !n && r && (n = r), (s = function (e, t) {
                        if (!e) return 0;
                        var n = x("<test>").css({
                            position: "absolute",
                            top: -99999,
                            left: -99999,
                            width: "auto",
                            padding: 0,
                            whiteSpace: "pre"
                        }).text(e).appendTo("body");
                        ! function (e, t, n) {
                            var i, o, r = {};
                            if (n)
                                for (i = 0, o = n.length; i < o; i++) r[n[i]] = e.css(n[i]);
                            else r = e.css();
                            t.css(r)
                        }(t, n, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]);
                        var i = n.width();
                        return n.remove(), i
                    }(n, c) + 4) !== u && (u = s, c.width(s), c.triggerHandler("resize")))
                };
            c.on("keydown keyup update blur", e), e()
        },
        y = function (e, t) {
            var n, i, o, r, s = this;
            (r = e[0]).selectize = s;
            var a, l, p, c = window.getComputedStyle && window.getComputedStyle(r, null);
            if (o = (o = c ? c.getPropertyValue("direction") : r.currentStyle && r.currentStyle.direction) || e.parents("[dir]:first").attr("dir") || "", x.extend(s, {
                    order: 0,
                    settings: t,
                    $input: e,
                    tabIndex: e.attr("tabindex") || "",
                    tagType: "select" === r.tagName.toLowerCase() ? 1 : 2,
                    rtl: /rtl/i.test(o),
                    eventNS: ".selectize" + ++y.count,
                    highlightedValue: null,
                    isOpen: !1,
                    isDisabled: !1,
                    isRequired: e.is("[required]"),
                    isInvalid: !1,
                    isLocked: !1,
                    isFocused: !1,
                    isInputHidden: !1,
                    isSetup: !1,
                    isShiftDown: !1,
                    isCmdDown: !1,
                    isCtrlDown: !1,
                    ignoreFocus: !1,
                    ignoreBlur: !1,
                    ignoreHover: !1,
                    hasOptions: !1,
                    currentResults: null,
                    lastValue: "",
                    caretPos: 0,
                    loading: 0,
                    loadedSearches: {},
                    $activeOption: null,
                    $activeItems: [],
                    optgroups: {},
                    options: {},
                    userOptions: {},
                    items: [],
                    renderCache: {},
                    onSearchChange: null === t.loadThrottle ? s.onSearchChange : (a = s.onSearchChange, l = t.loadThrottle, function () {
                        var e = this,
                            t = arguments;
                        window.clearTimeout(p), p = window.setTimeout(function () {
                            a.apply(e, t)
                        }, l)
                    })
                }), s.sifter = new u(this.options, {
                    diacritics: t.diacritics
                }), s.settings.options) {
                for (n = 0, i = s.settings.options.length; n < i; n++) s.registerOption(s.settings.options[n]);
                delete s.settings.options
            }
            if (s.settings.optgroups) {
                for (n = 0, i = s.settings.optgroups.length; n < i; n++) s.registerOptionGroup(s.settings.optgroups[n]);
                delete s.settings.optgroups
            }
            s.settings.mode = s.settings.mode || (1 === s.settings.maxItems ? "single" : "multi"), "boolean" != typeof s.settings.hideSelected && (s.settings.hideSelected = "multi" === s.settings.mode), s.initializePlugins(s.settings.plugins), s.setupCallbacks(), s.setupTemplates(), s.setup()
        };
    return i.mixin(y), void 0 !== e ? e.mixin(y) : function (e, t) {
        t || (t = {});
        console.error("Selectize: " + e), t.explanation && (console.group && console.group(), console.error(t.explanation), console.group && console.groupEnd())
    }("Dependency MicroPlugin is missing", {
        explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.'
    }), x.extend(y.prototype, {
        setup: function () {
            var e, t, n, i, o, r, s, a, l, p, c, u, d, h, g = this,
                f = g.settings,
                v = g.eventNS,
                m = x(window),
                y = x(document),
                w = g.$input;
            if (s = g.settings.mode, a = w.attr("class") || "", e = x("<div>").addClass(f.wrapperClass).addClass(a).addClass(s), t = x("<div>").addClass(f.inputClass).addClass("items").appendTo(e), n = x('<input type="text" autocomplete="off" />').appendTo(t).attr("tabindex", w.is(":disabled") ? "-1" : g.tabIndex), r = x(f.dropdownParent || e), i = x("<div>").addClass(f.dropdownClass).addClass(s).hide().appendTo(r), o = x("<div>").addClass(f.dropdownContentClass).appendTo(i), (p = w.attr("id")) && (n.attr("id", p + "-selectized"), x("label[for='" + p + "']").attr("for", p + "-selectized")), g.settings.copyClassesToDropdown && i.addClass(a), e.css({
                    width: w[0].style.width
                }), g.plugins.names.length && (l = "plugin-" + g.plugins.names.join(" plugin-"), e.addClass(l), i.addClass(l)), (null === f.maxItems || 1 < f.maxItems) && 1 === g.tagType && w.attr("multiple", "multiple"), g.settings.placeholder && n.attr("placeholder", f.placeholder), !g.settings.splitOn && g.settings.delimiter) {
                var O = g.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                g.settings.splitOn = new RegExp("\\s*" + O + "+\\s*")
            }
            w.attr("autocorrect") && n.attr("autocorrect", w.attr("autocorrect")), w.attr("autocapitalize") && n.attr("autocapitalize", w.attr("autocapitalize")), g.$wrapper = e, g.$control = t, g.$control_input = n, g.$dropdown = i, g.$dropdown_content = o, i.on("mouseenter", "[data-selectable]", function () {
                return g.onOptionHover.apply(g, arguments)
            }), i.on("mousedown click", "[data-selectable]", function () {
                return g.onOptionSelect.apply(g, arguments)
            }), u = "mousedown", d = "*:not(input)", h = function () {
                return g.onItemSelect.apply(g, arguments)
            }, (c = t).on(u, d, function (e) {
                for (var t = e.target; t && t.parentNode !== c[0];) t = t.parentNode;
                return e.currentTarget = t, h.apply(this, [e])
            }), F(n), t.on({
                mousedown: function () {
                    return g.onMouseDown.apply(g, arguments)
                },
                click: function () {
                    return g.onClick.apply(g, arguments)
                }
            }), n.on({
                mousedown: function (e) {
                    e.stopPropagation()
                },
                keydown: function () {
                    return g.onKeyDown.apply(g, arguments)
                },
                keyup: function () {
                    return g.onKeyUp.apply(g, arguments)
                },
                keypress: function () {
                    return g.onKeyPress.apply(g, arguments)
                },
                resize: function () {
                    g.positionDropdown.apply(g, [])
                },
                blur: function () {
                    return g.onBlur.apply(g, arguments)
                },
                focus: function () {
                    return g.ignoreBlur = !1, g.onFocus.apply(g, arguments)
                },
                paste: function () {
                    return g.onPaste.apply(g, arguments)
                }
            }), y.on("keydown" + v, function (e) {
                g.isCmdDown = e[C ? "metaKey" : "ctrlKey"], g.isCtrlDown = e[C ? "altKey" : "ctrlKey"], g.isShiftDown = e.shiftKey
            }), y.on("keyup" + v, function (e) {
                e.keyCode === b && (g.isCtrlDown = !1), 16 === e.keyCode && (g.isShiftDown = !1), e.keyCode === $ && (g.isCmdDown = !1)
            }), y.on("mousedown" + v, function (e) {
                if (g.isFocused) {
                    if (e.target === g.$dropdown[0] || e.target.parentNode === g.$dropdown[0]) return !1;
                    g.$control.has(e.target).length || e.target === g.$control[0] || g.blur(e.target)
                }
            }), m.on(["scroll" + v, "resize" + v].join(" "), function () {
                g.isOpen && g.positionDropdown.apply(g, arguments)
            }), m.on("mousemove" + v, function () {
                g.ignoreHover = !1
            }), this.revertSettings = {
                $children: w.children().detach(),
                tabindex: w.attr("tabindex")
            }, w.attr("tabindex", -1).hide().after(g.$wrapper), x.isArray(f.items) && (g.setValue(f.items), delete f.items), I && w.on("invalid" + v, function (e) {
                e.preventDefault(), g.isInvalid = !0, g.refreshState()
            }), g.updateOriginalInput(), g.refreshItems(), g.refreshState(), g.updatePlaceholder(), g.isSetup = !0, w.is(":disabled") && g.disable(), g.on("change", this.onChange), w.data("selectize", g), w.addClass("selectized"), g.trigger("initialize"), !0 === f.preload && g.onSearchChange("")
        },
        setupTemplates: function () {
            var n = this.settings.labelField,
                i = this.settings.optgroupLabelField,
                e = {
                    optgroup: function (e) {
                        return '<div class="optgroup">' + e.html + "</div>"
                    },
                    optgroup_header: function (e, t) {
                        return '<div class="optgroup-header">' + t(e[i]) + "</div>"
                    },
                    option: function (e, t) {
                        return '<div class="option">' + t(e[n]) + "</div>"
                    },
                    item: function (e, t) {
                        return '<div class="item">' + t(e[n]) + "</div>"
                    },
                    option_create: function (e, t) {
                        return '<div class="create">Add <strong>' + t(e.input) + "</strong>&hellip;</div>"
                    }
                };
            this.settings.render = x.extend({}, e, this.settings.render)
        },
        setupCallbacks: function () {
            var e, t, n = {
                initialize: "onInitialize",
                change: "onChange",
                item_add: "onItemAdd",
                item_remove: "onItemRemove",
                clear: "onClear",
                option_add: "onOptionAdd",
                option_remove: "onOptionRemove",
                option_clear: "onOptionClear",
                optgroup_add: "onOptionGroupAdd",
                optgroup_remove: "onOptionGroupRemove",
                optgroup_clear: "onOptionGroupClear",
                dropdown_open: "onDropdownOpen",
                dropdown_close: "onDropdownClose",
                type: "onType",
                load: "onLoad",
                focus: "onFocus",
                blur: "onBlur"
            };
            for (e in n) n.hasOwnProperty(e) && (t = this.settings[n[e]]) && this.on(e, t)
        },
        onClick: function (e) {
            this.isFocused || (this.focus(), e.preventDefault())
        },
        onMouseDown: function (e) {
            var t = this,
                n = e.isDefaultPrevented();
            x(e.target);
            if (t.isFocused) {
                if (e.target !== t.$control_input[0]) return "single" === t.settings.mode ? t.isOpen ? t.close() : t.open() : n || t.setActiveItem(null), !1
            } else n || window.setTimeout(function () {
                t.focus()
            }, 0)
        },
        onChange: function () {
            this.$input.trigger("change")
        },
        onPaste: function (e) {
            var o = this;
            o.isFull() || o.isInputHidden || o.isLocked ? e.preventDefault() : o.settings.splitOn && setTimeout(function () {
                var e = o.$control_input.val();
                if (e.match(o.settings.splitOn))
                    for (var t = x.trim(e).split(o.settings.splitOn), n = 0, i = t.length; n < i; n++) o.createItem(t[n])
            }, 0)
        },
        onKeyPress: function (e) {
            if (this.isLocked) return e && e.preventDefault();
            var t = String.fromCharCode(e.keyCode || e.which);
            return this.settings.create && "multi" === this.settings.mode && t === this.settings.delimiter ? (this.createItem(), e.preventDefault(), !1) : void 0
        },
        onKeyDown: function (e) {
            e.target, this.$control_input[0];
            var t = this;
            if (t.isLocked) 9 !== e.keyCode && e.preventDefault();
            else {
                switch (e.keyCode) {
                    case 65:
                        if (t.isCmdDown) return void t.selectAll();
                        break;
                    case 27:
                        return void(t.isOpen && (e.preventDefault(), e.stopPropagation(), t.close()));
                    case 78:
                        if (!e.ctrlKey || e.altKey) break;
                    case 40:
                        if (!t.isOpen && t.hasOptions) t.open();
                        else if (t.$activeOption) {
                            t.ignoreHover = !0;
                            var n = t.getAdjacentOption(t.$activeOption, 1);
                            n.length && t.setActiveOption(n, !0, !0)
                        }
                        return void e.preventDefault();
                    case 80:
                        if (!e.ctrlKey || e.altKey) break;
                    case 38:
                        if (t.$activeOption) {
                            t.ignoreHover = !0;
                            var i = t.getAdjacentOption(t.$activeOption, -1);
                            i.length && t.setActiveOption(i, !0, !0)
                        }
                        return void e.preventDefault();
                    case 13:
                        return void(t.isOpen && t.$activeOption && (t.onOptionSelect({
                            currentTarget: t.$activeOption
                        }), e.preventDefault()));
                    case 37:
                        return void t.advanceSelection(-1, e);
                    case 39:
                        return void t.advanceSelection(1, e);
                    case 9:
                        return t.settings.selectOnTab && t.isOpen && t.$activeOption && (t.onOptionSelect({
                            currentTarget: t.$activeOption
                        }), t.isFull() || e.preventDefault()), void(t.settings.create && t.createItem() && e.preventDefault());
                    case 8:
                    case 46:
                        return void t.deleteSelection(e)
                }!t.isFull() && !t.isInputHidden || (C ? e.metaKey : e.ctrlKey) || e.preventDefault()
            }
        },
        onKeyUp: function (e) {
            var t = this;
            if (t.isLocked) return e && e.preventDefault();
            var n = t.$control_input.val() || "";
            t.lastValue !== n && (t.lastValue = n, t.onSearchChange(n), t.refreshOptions(), t.trigger("type", n))
        },
        onSearchChange: function (t) {
            var n = this,
                i = n.settings.load;
            i && (n.loadedSearches.hasOwnProperty(t) || (n.loadedSearches[t] = !0, n.load(function (e) {
                i.apply(n, [t, e])
            })))
        },
        onFocus: function (e) {
            var t = this,
                n = t.isFocused;
            if (t.isDisabled) return t.blur(), e && e.preventDefault(), !1;
            t.ignoreFocus || (t.isFocused = !0, "focus" === t.settings.preload && t.onSearchChange(""), n || t.trigger("focus"), t.$activeItems.length || (t.showInput(), t.setActiveItem(null), t.refreshOptions(!!t.settings.openOnFocus)), t.refreshState())
        },
        onBlur: function (e, t) {
            var n = this;
            if (n.isFocused && (n.isFocused = !1, !n.ignoreFocus)) {
                if (!n.ignoreBlur && document.activeElement === n.$dropdown_content[0]) return n.ignoreBlur = !0, void n.onFocus(e);
                var i = function () {
                    n.close(), n.setTextboxValue(""), n.setActiveItem(null), n.setActiveOption(null), n.setCaret(n.items.length), n.refreshState(), t && t.focus && t.focus(), n.ignoreFocus = !1, n.trigger("blur")
                };
                n.ignoreFocus = !0, n.settings.create && n.settings.createOnBlur ? n.createItem(null, !1, i) : i()
            }
        },
        onOptionHover: function (e) {
            this.ignoreHover || this.setActiveOption(e.currentTarget, !1)
        },
        onOptionSelect: function (e) {
            var t, n, i = this;
            e.preventDefault && (e.preventDefault(), e.stopPropagation()), (n = x(e.currentTarget)).hasClass("create") ? i.createItem(null, function () {
                i.settings.closeAfterSelect && i.close()
            }) : void 0 !== (t = n.attr("data-value")) && (i.lastQuery = null, i.setTextboxValue(""), i.addItem(t), i.settings.closeAfterSelect ? i.close() : !i.settings.hideSelected && e.type && /mouse/.test(e.type) && i.setActiveOption(i.getOption(t)))
        },
        onItemSelect: function (e) {
            this.isLocked || "multi" === this.settings.mode && (e.preventDefault(), this.setActiveItem(e.currentTarget, e))
        },
        load: function (e) {
            var t = this,
                n = t.$wrapper.addClass(t.settings.loadingClass);
            t.loading++, e.apply(t, [function (e) {
                t.loading = Math.max(t.loading - 1, 0), e && e.length && (t.addOption(e), t.refreshOptions(t.isFocused && !t.isInputHidden)), t.loading || n.removeClass(t.settings.loadingClass), t.trigger("load", e)
            }])
        },
        setTextboxValue: function (e) {
            var t = this.$control_input;
            t.val() !== e && (t.val(e).triggerHandler("update"), this.lastValue = e)
        },
        getValue: function () {
            return 1 === this.tagType && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter)
        },
        setValue: function (e, t) {
            n(this, t ? [] : ["change"], function () {
                this.clear(t), this.addItems(e, t)
            })
        },
        setActiveItem: function (e, t) {
            var n, i, o, r, s, a, l, p, c = this;
            if ("single" !== c.settings.mode) {
                if (!(e = x(e)).length) return x(c.$activeItems).removeClass("active"), c.$activeItems = [], void(c.isFocused && c.showInput());
                if ("mousedown" === (n = t && t.type.toLowerCase()) && c.isShiftDown && c.$activeItems.length) {
                    for (p = c.$control.children(".active:last"), r = Array.prototype.indexOf.apply(c.$control[0].childNodes, [p[0]]), (s = Array.prototype.indexOf.apply(c.$control[0].childNodes, [e[0]])) < r && (l = r, r = s, s = l), i = r; i <= s; i++) a = c.$control[0].childNodes[i], -1 === c.$activeItems.indexOf(a) && (x(a).addClass("active"), c.$activeItems.push(a));
                    t.preventDefault()
                } else "mousedown" === n && c.isCtrlDown || "keydown" === n && this.isShiftDown ? e.hasClass("active") ? (o = c.$activeItems.indexOf(e[0]), c.$activeItems.splice(o, 1), e.removeClass("active")) : c.$activeItems.push(e.addClass("active")[0]) : (x(c.$activeItems).removeClass("active"), c.$activeItems = [e.addClass("active")[0]]);
                c.hideInput(), this.isFocused || c.focus()
            }
        },
        setActiveOption: function (e, t, n) {
            var i, o, r, s, a, l = this;
            l.$activeOption && l.$activeOption.removeClass("active"), l.$activeOption = null, (e = x(e)).length && (l.$activeOption = e.addClass("active"), !t && p(t) || (i = l.$dropdown_content.height(), o = l.$activeOption.outerHeight(!0), t = l.$dropdown_content.scrollTop() || 0, a = (s = r = l.$activeOption.offset().top - l.$dropdown_content.offset().top + t) - i + o, i + t < r + o ? l.$dropdown_content.stop().animate({
                scrollTop: a
            }, n ? l.settings.scrollDuration : 0) : r < t && l.$dropdown_content.stop().animate({
                scrollTop: s
            }, n ? l.settings.scrollDuration : 0)))
        },
        selectAll: function () {
            var e = this;
            "single" !== e.settings.mode && (e.$activeItems = Array.prototype.slice.apply(e.$control.children(":not(input)").addClass("active")), e.$activeItems.length && (e.hideInput(), e.close()), e.focus())
        },
        hideInput: function () {
            this.setTextboxValue(""), this.$control_input.css({
                opacity: 0,
                position: "absolute",
                left: this.rtl ? 1e4 : -1e4
            }), this.isInputHidden = !0
        },
        showInput: function () {
            this.$control_input.css({
                opacity: 1,
                position: "relative",
                left: 0
            }), this.isInputHidden = !1
        },
        focus: function () {
            var e = this;
            e.isDisabled || (e.ignoreFocus = !0, e.$control_input[0].focus(), window.setTimeout(function () {
                e.ignoreFocus = !1, e.onFocus()
            }, 0))
        },
        blur: function (e) {
            this.$control_input[0].blur(), this.onBlur(null, e)
        },
        getScoreFunction: function (e) {
            return this.sifter.getScoreFunction(e, this.getSearchOptions())
        },
        getSearchOptions: function () {
            var e = this.settings,
                t = e.sortField;
            return "string" == typeof t && (t = [{
                field: t
            }]), {
                fields: e.searchField,
                conjunction: e.searchConjunction,
                sort: t
            }
        },
        search: function (e) {
            var t, n, i, o = this,
                r = o.settings,
                s = this.getSearchOptions();
            if (r.score && "function" != typeof (i = o.settings.score.apply(this, [e]))) throw new Error('Selectize "score" setting must be a function that returns a function');
            if (e !== o.lastQuery ? (o.lastQuery = e, n = o.sifter.search(e, x.extend(s, {
                    score: i
                })), o.currentResults = n) : n = x.extend(!0, {}, o.currentResults), r.hideSelected)
                for (t = n.items.length - 1; 0 <= t; t--) - 1 !== o.items.indexOf(_(n.items[t].id)) && n.items.splice(t, 1);
            return n
        },
        refreshOptions: function (e) {
            var t, n, i, o, r, s, a, l, p, c, u, d, h, g, f, v;
            void 0 === e && (e = !0);
            var m, y, w = this,
                O = x.trim(w.$control_input.val()),
                C = w.search(O),
                $ = w.$dropdown_content,
                b = w.$activeOption && _(w.$activeOption.attr("data-value"));
            for (o = C.items.length, "number" == typeof w.settings.maxOptions && (o = Math.min(o, w.settings.maxOptions)), r = {}, s = [], t = 0; t < o; t++)
                for (a = w.options[C.items[t].id], l = w.render("option", a), p = a[w.settings.optgroupField] || "", n = 0, i = (c = x.isArray(p) ? p : [p]) && c.length; n < i; n++) p = c[n], w.optgroups.hasOwnProperty(p) || (p = ""), r.hasOwnProperty(p) || (r[p] = document.createDocumentFragment(), s.push(p)), r[p].appendChild(l);
            for (this.settings.lockOptgroupOrder && s.sort(function (e, t) {
                    return (w.optgroups[e].$order || 0) - (w.optgroups[t].$order || 0)
                }), u = document.createDocumentFragment(), t = 0, o = s.length; t < o; t++) p = s[t], w.optgroups.hasOwnProperty(p) && r[p].childNodes.length ? ((d = document.createDocumentFragment()).appendChild(w.render("optgroup_header", w.optgroups[p])), d.appendChild(r[p]), u.appendChild(w.render("optgroup", x.extend({}, w.optgroups[p], {
                html: (m = d, y = void 0, y = document.createElement("div"), y.appendChild(m.cloneNode(!0)), y.innerHTML),
                dom: d
            })))) : u.appendChild(r[p]);
            if ($.html(u), w.settings.highlight && C.query.length && C.tokens.length)
                for ($.removeHighlight(), t = 0, o = C.tokens.length; t < o; t++) S($, C.tokens[t].regex);
            if (!w.settings.hideSelected)
                for (t = 0, o = w.items.length; t < o; t++) w.getOption(w.items[t]).addClass("selected");
            (h = w.canCreate(O)) && ($.prepend(w.render("option_create", {
                input: O
            })), v = x($[0].childNodes[0])), w.hasOptions = 0 < C.items.length || h, w.hasOptions ? (0 < C.items.length ? ((f = b && w.getOption(b)) && f.length ? g = f : "single" === w.settings.mode && w.items.length && (g = w.getOption(w.items[0])), g && g.length || (g = v && !w.settings.addPrecedence ? w.getAdjacentOption(v, 1) : $.find("[data-selectable]:first"))) : g = v, w.setActiveOption(g), e && !w.isOpen && w.open()) : (w.setActiveOption(null), e && w.isOpen && w.close())
        },
        addOption: function (e) {
            var t, n, i, o = this;
            if (x.isArray(e))
                for (t = 0, n = e.length; t < n; t++) o.addOption(e[t]);
            else(i = o.registerOption(e)) && (o.userOptions[i] = !0, o.lastQuery = null, o.trigger("option_add", i, e))
        },
        registerOption: function (e) {
            var t = _(e[this.settings.valueField]);
            return null != t && !this.options.hasOwnProperty(t) && (e.$order = e.$order || ++this.order, this.options[t] = e, t)
        },
        registerOptionGroup: function (e) {
            var t = _(e[this.settings.optgroupValueField]);
            return !!t && (e.$order = e.$order || ++this.order, this.optgroups[t] = e, t)
        },
        addOptionGroup: function (e, t) {
            t[this.settings.optgroupValueField] = e, (e = this.registerOptionGroup(t)) && this.trigger("optgroup_add", e, t)
        },
        removeOptionGroup: function (e) {
            this.optgroups.hasOwnProperty(e) && (delete this.optgroups[e], this.renderCache = {}, this.trigger("optgroup_remove", e))
        },
        clearOptionGroups: function () {
            this.optgroups = {}, this.renderCache = {}, this.trigger("optgroup_clear")
        },
        updateOption: function (e, t) {
            var n, i, o, r, s, a, l, p = this;
            if (e = _(e), o = _(t[p.settings.valueField]), null !== e && p.options.hasOwnProperty(e)) {
                if ("string" != typeof o) throw new Error("Value must be set in option data");
                l = p.options[e].$order, o !== e && (delete p.options[e], -1 !== (r = p.items.indexOf(e)) && p.items.splice(r, 1, o)), t.$order = t.$order || l, p.options[o] = t, s = p.renderCache.item, a = p.renderCache.option, s && (delete s[e], delete s[o]), a && (delete a[e], delete a[o]), -1 !== p.items.indexOf(o) && (n = p.getItem(e), i = x(p.render("item", t)), n.hasClass("active") && i.addClass("active"), n.replaceWith(i)), p.lastQuery = null, p.isOpen && p.refreshOptions(!1)
            }
        },
        removeOption: function (e, t) {
            var n = this;
            e = _(e);
            var i = n.renderCache.item,
                o = n.renderCache.option;
            i && delete i[e], o && delete o[e], delete n.userOptions[e], delete n.options[e], n.lastQuery = null, n.trigger("option_remove", e), n.removeItem(e, t)
        },
        clearOptions: function () {
            var e = this;
            e.loadedSearches = {}, e.userOptions = {}, e.renderCache = {}, e.options = e.sifter.items = {}, e.lastQuery = null, e.trigger("option_clear"), e.clear()
        },
        getOption: function (e) {
            return this.getElementWithValue(e, this.$dropdown_content.find("[data-selectable]"))
        },
        getAdjacentOption: function (e, t) {
            var n = this.$dropdown.find("[data-selectable]"),
                i = n.index(e) + t;
            return 0 <= i && i < n.length ? n.eq(i) : x()
        },
        getElementWithValue: function (e, t) {
            if (null != (e = _(e)))
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n].getAttribute("data-value") === e) return x(t[n]);
            return x()
        },
        getItem: function (e) {
            return this.getElementWithValue(e, this.$control.children())
        },
        addItems: function (e, t) {
            for (var n = x.isArray(e) ? e : [e], i = 0, o = n.length; i < o; i++) this.isPending = i < o - 1, this.addItem(n[i], t)
        },
        addItem: function (a, l) {
            n(this, l ? [] : ["change"], function () {
                var e, t, n, i, o, r = this,
                    s = r.settings.mode;
                a = _(a), -1 === r.items.indexOf(a) ? r.options.hasOwnProperty(a) && ("single" === s && r.clear(l), "multi" === s && r.isFull() || (e = x(r.render("item", r.options[a])), o = r.isFull(), r.items.splice(r.caretPos, 0, a), r.insertAtCaret(e), (!r.isPending || !o && r.isFull()) && r.refreshState(), r.isSetup && (n = r.$dropdown_content.find("[data-selectable]"), r.isPending || (t = r.getOption(a), i = r.getAdjacentOption(t, 1).attr("data-value"), r.refreshOptions(r.isFocused && "single" !== s), i && r.setActiveOption(r.getOption(i))), !n.length || r.isFull() ? r.close() : r.positionDropdown(), r.updatePlaceholder(), r.trigger("item_add", a, e), r.updateOriginalInput({
                    silent: l
                })))) : "single" === s && r.close()
            })
        },
        removeItem: function (e, t) {
            var n, i, o, r = this;
            n = e instanceof x ? e : r.getItem(e), e = _(n.attr("data-value")), -1 !== (i = r.items.indexOf(e)) && (n.remove(), n.hasClass("active") && (o = r.$activeItems.indexOf(n[0]), r.$activeItems.splice(o, 1)), r.items.splice(i, 1), r.lastQuery = null, !r.settings.persist && r.userOptions.hasOwnProperty(e) && r.removeOption(e, t), i < r.caretPos && r.setCaret(r.caretPos - 1), r.refreshState(), r.updatePlaceholder(), r.updateOriginalInput({
                silent: t
            }), r.positionDropdown(), r.trigger("item_remove", e, n))
        },
        createItem: function (e, n) {
            var i = this,
                o = i.caretPos;
            e = e || x.trim(i.$control_input.val() || "");
            var r = arguments[arguments.length - 1];
            if ("function" != typeof r && (r = function () {}), "boolean" != typeof n && (n = !0), !i.canCreate(e)) return r(), !1;
            i.lock();
            var t, s, a = "function" == typeof i.settings.create ? this.settings.create : function (e) {
                    var t = {};
                    return t[i.settings.labelField] = e, t[i.settings.valueField] = e, t
                },
                l = (s = !(t = function (e) {
                    if (i.unlock(), !e || "object" != typeof e) return r();
                    var t = _(e[i.settings.valueField]);
                    if ("string" != typeof t) return r();
                    i.setTextboxValue(""), i.addOption(e), i.setCaret(o), i.addItem(t), i.refreshOptions(n && "single" !== i.settings.mode), r(e)
                }), function () {
                    s || (s = !0, t.apply(this, arguments))
                }),
                p = a.apply(this, [e, l]);
            return void 0 !== p && l(p), !0
        },
        refreshItems: function () {
            this.lastQuery = null, this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput()
        },
        refreshState: function () {
            this.refreshValidityState(), this.refreshClasses()
        },
        refreshValidityState: function () {
            if (!this.isRequired) return !1;
            var e = !this.items.length;
            this.isInvalid = e, this.$control_input.prop("required", e), this.$input.prop("required", !e)
        },
        refreshClasses: function () {
            var e = this,
                t = e.isFull(),
                n = e.isLocked;
            e.$wrapper.toggleClass("rtl", e.rtl), e.$control.toggleClass("focus", e.isFocused).toggleClass("disabled", e.isDisabled).toggleClass("required", e.isRequired).toggleClass("invalid", e.isInvalid).toggleClass("locked", n).toggleClass("full", t).toggleClass("not-full", !t).toggleClass("input-active", e.isFocused && !e.isInputHidden).toggleClass("dropdown-active", e.isOpen).toggleClass("has-options", !x.isEmptyObject(e.options)).toggleClass("has-items", 0 < e.items.length), e.$control_input.data("grow", !t && !n)
        },
        isFull: function () {
            return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems
        },
        updateOriginalInput: function (e) {
            var t, n, i, o, r = this;
            if (e = e || {}, 1 === r.tagType) {
                for (i = [], t = 0, n = r.items.length; t < n; t++) o = r.options[r.items[t]][r.settings.labelField] || "", i.push('<option value="' + a(r.items[t]) + '" selected="selected">' + a(o) + "</option>");
                i.length || this.$input.attr("multiple") || i.push('<option value="" selected="selected"></option>'), r.$input.html(i.join(""))
            } else r.$input.val(r.getValue()), r.$input.attr("value", r.$input.val());
            r.isSetup && (e.silent || r.trigger("change", r.$input.val()))
        },
        updatePlaceholder: function () {
            if (this.settings.placeholder) {
                var e = this.$control_input;
                this.items.length ? e.removeAttr("placeholder") : e.attr("placeholder", this.settings.placeholder), e.triggerHandler("update", {
                    force: !0
                })
            }
        },
        open: function () {
            var e = this;
            e.isLocked || e.isOpen || "multi" === e.settings.mode && e.isFull() || (e.focus(), e.isOpen = !0, e.refreshState(), e.$dropdown.css({
                visibility: "hidden",
                display: "block"
            }), e.positionDropdown(), e.$dropdown.css({
                visibility: "visible"
            }), e.trigger("dropdown_open", e.$dropdown))
        },
        close: function () {
            var e = this,
                t = e.isOpen;
            "single" === e.settings.mode && e.items.length && (e.hideInput(), e.$control_input.blur()), e.isOpen = !1, e.$dropdown.hide(), e.setActiveOption(null), e.refreshState(), t && e.trigger("dropdown_close", e.$dropdown)
        },
        positionDropdown: function () {
            var e = this.$control,
                t = "body" === this.settings.dropdownParent ? e.offset() : e.position();
            t.top += e.outerHeight(!0), this.$dropdown.css({
                width: e.outerWidth(),
                top: t.top,
                left: t.left
            })
        },
        clear: function (e) {
            var t = this;
            t.items.length && (t.$control.children(":not(input)").remove(), t.items = [], t.lastQuery = null, t.setCaret(0), t.setActiveItem(null), t.updatePlaceholder(), t.updateOriginalInput({
                silent: e
            }), t.refreshState(), t.showInput(), t.trigger("clear"))
        },
        insertAtCaret: function (e) {
            var t = Math.min(this.caretPos, this.items.length);
            0 === t ? this.$control.prepend(e) : x(this.$control[0].childNodes[t]).before(e), this.setCaret(t + 1)
        },
        deleteSelection: function (e) {
            var t, n, i, o, r, s, a, l, p, c = this;
            if (i = e && 8 === e.keyCode ? -1 : 1, o = d(c.$control_input[0]), c.$activeOption && !c.settings.hideSelected && (a = c.getAdjacentOption(c.$activeOption, -1).attr("data-value")), r = [], c.$activeItems.length) {
                for (p = c.$control.children(".active:" + (0 < i ? "last" : "first")), s = c.$control.children(":not(input)").index(p), 0 < i && s++, t = 0, n = c.$activeItems.length; t < n; t++) r.push(x(c.$activeItems[t]).attr("data-value"));
                e && (e.preventDefault(), e.stopPropagation())
            } else(c.isFocused || "single" === c.settings.mode) && c.items.length && (i < 0 && 0 === o.start && 0 === o.length ? r.push(c.items[c.caretPos - 1]) : 0 < i && o.start === c.$control_input.val().length && r.push(c.items[c.caretPos]));
            if (!r.length || "function" == typeof c.settings.onDelete && !1 === c.settings.onDelete.apply(c, [r])) return !1;
            for (void 0 !== s && c.setCaret(s); r.length;) c.removeItem(r.pop());
            return c.showInput(), c.positionDropdown(), c.refreshOptions(!0), a && (l = c.getOption(a)).length && c.setActiveOption(l), !0
        },
        advanceSelection: function (e, t) {
            var n, i, o, r, s, a = this;
            0 !== e && (a.rtl && (e *= -1), n = 0 < e ? "last" : "first", i = d(a.$control_input[0]), a.isFocused && !a.isInputHidden ? (r = a.$control_input.val().length, (e < 0 ? 0 === i.start && 0 === i.length : i.start === r) && !r && a.advanceCaret(e, t)) : (s = a.$control.children(".active:" + n)).length && (o = a.$control.children(":not(input)").index(s), a.setActiveItem(null), a.setCaret(0 < e ? o + 1 : o)))
        },
        advanceCaret: function (e, t) {
            var n, i, o = this;
            0 !== e && (n = 0 < e ? "next" : "prev", o.isShiftDown ? (i = o.$control_input[n]()).length && (o.hideInput(), o.setActiveItem(i), t && t.preventDefault()) : o.setCaret(o.caretPos + e))
        },
        setCaret: function (e) {
            var t, n, i, o, r = this;
            if (e = "single" === r.settings.mode ? r.items.length : Math.max(0, Math.min(r.items.length, e)), !r.isPending)
                for (t = 0, n = (i = r.$control.children(":not(input)")).length; t < n; t++) o = x(i[t]).detach(), t < e ? r.$control_input.before(o) : r.$control.append(o);
            r.caretPos = e
        },
        lock: function () {
            this.close(), this.isLocked = !0, this.refreshState()
        },
        unlock: function () {
            this.isLocked = !1, this.refreshState()
        },
        disable: function () {
            this.$input.prop("disabled", !0), this.$control_input.prop("disabled", !0).prop("tabindex", -1), this.isDisabled = !0, this.lock()
        },
        enable: function () {
            var e = this;
            e.$input.prop("disabled", !1), e.$control_input.prop("disabled", !1).prop("tabindex", e.tabIndex), e.isDisabled = !1, e.unlock()
        },
        destroy: function () {
            var e = this,
                t = e.eventNS,
                n = e.revertSettings;
            e.trigger("destroy"), e.off(), e.$wrapper.remove(), e.$dropdown.remove(), e.$input.html("").append(n.$children).removeAttr("tabindex").removeClass("selectized").attr({
                tabindex: n.tabindex
            }).show(), e.$control_input.removeData("grow"), e.$input.removeData("selectize"), x(window).off(t), x(document).off(t), x(document.body).off(t), delete e.$input[0].selectize
        },
        render: function (e, t) {
            var n, i, o = "",
                r = !1,
                s = this;
            return "option" !== e && "item" !== e || (r = !!(n = _(t[s.settings.valueField]))), r && (p(s.renderCache[e]) || (s.renderCache[e] = {}), s.renderCache[e].hasOwnProperty(n)) ? s.renderCache[e][n] : (o = x(s.settings.render[e].apply(this, [t, a])), "option" === e || "option_create" === e ? o.attr("data-selectable", "") : "optgroup" === e && (i = t[s.settings.optgroupValueField] || "", o.attr("data-group", i)), "option" !== e && "item" !== e || o.attr("data-value", n || ""), r && (s.renderCache[e][n] = o[0]), o[0])
        },
        clearCache: function (e) {
            void 0 === e ? this.renderCache = {} : delete this.renderCache[e]
        },
        canCreate: function (e) {
            if (!this.settings.create) return !1;
            var t = this.settings.createFilter;
            return e.length && ("function" != typeof t || t.apply(this, [e])) && ("string" != typeof t || new RegExp(t).test(e)) && (!(t instanceof RegExp) || t.test(e))
        }
    }), y.count = 0, y.defaults = {
        options: [],
        optgroups: [],
        plugins: [],
        delimiter: ",",
        splitOn: null,
        persist: !0,
        diacritics: !0,
        create: !1,
        createOnBlur: !1,
        createFilter: null,
        highlight: !0,
        openOnFocus: !0,
        maxOptions: 1e3,
        maxItems: null,
        hideSelected: null,
        addPrecedence: !1,
        selectOnTab: !1,
        preload: !1,
        allowEmptyOption: !1,
        closeAfterSelect: !1,
        scrollDuration: 60,
        loadThrottle: 300,
        loadingClass: "loading",
        dataAttr: "data-data",
        optgroupField: "optgroup",
        valueField: "value",
        labelField: "text",
        optgroupLabelField: "label",
        optgroupValueField: "value",
        lockOptgroupOrder: !1,
        sortField: "$order",
        searchField: ["text"],
        searchConjunction: "and",
        mode: null,
        wrapperClass: "selectize-control",
        inputClass: "selectize-input",
        dropdownClass: "selectize-dropdown",
        dropdownContentClass: "selectize-dropdown-content",
        dropdownParent: null,
        copyClassesToDropdown: !0,
        render: {}
    }, x.fn.selectize = function (o) {
        var r = x.fn.selectize.defaults,
            u = x.extend({}, r, o),
            d = u.dataAttr,
            h = u.labelField,
            g = u.valueField,
            f = u.optgroupField,
            v = u.optgroupLabelField,
            m = u.optgroupValueField;
        return this.each(function () {
            if (!this.selectize) {
                var e = x(this),
                    t = this.tagName.toLowerCase(),
                    n = e.attr("placeholder") || e.attr("data-placeholder");
                n || u.allowEmptyOption || (n = e.children('option[value=""]').text());
                var i = {
                    placeholder: n,
                    options: [],
                    optgroups: [],
                    items: []
                };
                "select" === t ? function (e, s) {
                    var t, n, i, o, r = s.options,
                        a = {},
                        l = function (e) {
                            var t = d && e.attr(d);
                            return "string" == typeof t && t.length ? JSON.parse(t) : null
                        },
                        p = function (e, t) {
                            e = x(e);
                            var n = _(e.val());
                            if (n || u.allowEmptyOption)
                                if (a.hasOwnProperty(n)) {
                                    if (t) {
                                        var i = a[n][f];
                                        i ? x.isArray(i) ? i.push(t) : a[n][f] = [i, t] : a[n][f] = t
                                    }
                                } else {
                                    var o = l(e) || {};
                                    o[h] = o[h] || e.text(), o[g] = o[g] || n, o[f] = o[f] || t, a[n] = o, r.push(o), e.is(":selected") && s.items.push(n)
                                }
                        },
                        c = function (e) {
                            var t, n, i, o, r;
                            for ((i = (e = x(e)).attr("label")) && ((o = l(e) || {})[v] = i, o[m] = i, s.optgroups.push(o)), t = 0, n = (r = x("option", e)).length; t < n; t++) p(r[t], i)
                        };
                    for (s.maxItems = e.attr("multiple") ? null : 1, t = 0, n = (o = e.children()).length; t < n; t++) "optgroup" === (i = o[t].tagName.toLowerCase()) ? c(o[t]) : "option" === i && p(o[t])
                }(e, i) : function (e, t) {
                    var n, i, o, r, s = e.attr(d);
                    if (s)
                        for (t.options = JSON.parse(s), n = 0, i = t.options.length; n < i; n++) t.items.push(t.options[n][g]);
                    else {
                        var a = x.trim(e.val() || "");
                        if (!u.allowEmptyOption && !a.length) return;
                        for (n = 0, i = (o = a.split(u.delimiter)).length; n < i; n++)(r = {})[h] = o[n], r[g] = o[n], t.options.push(r);
                        t.items = o
                    }
                }(e, i), new y(e, x.extend(!0, {}, r, i, o))
            }
        })
    }, x.fn.selectize.defaults = y.defaults, x.fn.selectize.support = {
        validity: I
    }, y.define("drag_drop", function (e) {
        if (!x.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
        if ("multi" === this.settings.mode) {
            var t, n, i, o = this;
            o.lock = (t = o.lock, function () {
                var e = o.$control.data("sortable");
                return e && e.disable(), t.apply(o, arguments)
            }), o.unlock = (n = o.unlock, function () {
                var e = o.$control.data("sortable");
                return e && e.enable(), n.apply(o, arguments)
            }), o.setup = (i = o.setup, function () {
                i.apply(this, arguments);
                var n = o.$control.sortable({
                    items: "[data-value]",
                    forcePlaceholderSize: !0,
                    disabled: o.isLocked,
                    start: function (e, t) {
                        t.placeholder.css("width", t.helper.css("width")), n.css({
                            overflow: "visible"
                        })
                    },
                    stop: function () {
                        n.css({
                            overflow: "hidden"
                        });
                        var e = o.$activeItems ? o.$activeItems.slice() : null,
                            t = [];
                        n.children("[data-value]").each(function () {
                            t.push(x(this).attr("data-value"))
                        }), o.setValue(t), o.setActiveItem(e)
                    }
                })
            })
        }
    }), y.define("dropdown_header", function (e) {
        var t, n = this;
        e = x.extend({
            title: "Untitled",
            headerClass: "selectize-dropdown-header",
            titleRowClass: "selectize-dropdown-header-title",
            labelClass: "selectize-dropdown-header-label",
            closeClass: "selectize-dropdown-header-close",
            html: function (e) {
                return '<div class="' + e.headerClass + '"><div class="' + e.titleRowClass + '"><span class="' + e.labelClass + '">' + e.title + '</span><a href="javascript:void(0)" class="' + e.closeClass + '">&times;</a></div></div>'
            }
        }, e), n.setup = (t = n.setup, function () {
            t.apply(n, arguments), n.$dropdown_header = x(e.html(e)), n.$dropdown.prepend(n.$dropdown_header)
        })
    }), y.define("optgroup_columns", function (a) {
        var r, l = this;
        a = x.extend({
            equalizeWidth: !0,
            equalizeHeight: !0
        }, a), this.getAdjacentOption = function (e, t) {
            var n = e.closest("[data-group]").find("[data-selectable]"),
                i = n.index(e) + t;
            return 0 <= i && i < n.length ? n.eq(i) : x()
        }, this.onKeyDown = (r = l.onKeyDown, function (e) {
            var t, n, i, o;
            return !this.isOpen || 37 !== e.keyCode && 39 !== e.keyCode ? r.apply(this, arguments) : (l.ignoreHover = !0, t = (o = this.$activeOption.closest("[data-group]")).find("[data-selectable]").index(this.$activeOption), void((n = (i = (o = 37 === e.keyCode ? o.prev("[data-group]") : o.next("[data-group]")).find("[data-selectable]")).eq(Math.min(i.length - 1, t))).length && this.setActiveOption(n)))
        });
        var p = function () {
                var e, t = p.width,
                    n = document;
                return void 0 === t && ((e = n.createElement("div")).innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>', e = e.firstChild, n.body.appendChild(e), t = p.width = e.offsetWidth - e.clientWidth, n.body.removeChild(e)), t
            },
            e = function () {
                var e, t, n, i, o, r, s;
                if ((t = (s = x("[data-group]", l.$dropdown_content)).length) && l.$dropdown_content.width()) {
                    if (a.equalizeHeight) {
                        for (e = n = 0; e < t; e++) n = Math.max(n, s.eq(e).height());
                        s.css({
                            height: n
                        })
                    }
                    a.equalizeWidth && (r = l.$dropdown_content.innerWidth() - p(), i = Math.round(r / t), s.css({
                        width: i
                    }), 1 < t && (o = r - i * (t - 1), s.eq(t - 1).css({
                        width: o
                    })))
                }
            };
        (a.equalizeHeight || a.equalizeWidth) && (t.after(this, "positionDropdown", e), t.after(this, "refreshOptions", e))
    }), y.define("remove_button", function (e) {
        e = x.extend({
            label: "&times;",
            title: "Remove",
            className: "remove",
            append: !0
        }, e);
        var r, t, n, i, s;
        "single" !== this.settings.mode ? (i = r = this, s = '<a href="javascript:void(0)" class="' + (t = e).className + '" tabindex="-1" title="' + a(t.title) + '">' + t.label + "</a>", r.setup = (n = i.setup, function () {
            if (t.append) {
                var o = i.settings.render.item;
                i.settings.render.item = function (e) {
                    return t = o.apply(r, arguments), n = s, i = t.search(/(<\/[^>]+>\s*)$/), t.substring(0, i) + n + t.substring(i);
                    var t, n, i
                }
            }
            n.apply(r, arguments), r.$control.on("click", "." + t.className, function (e) {
                if (e.preventDefault(), !i.isLocked) {
                    var t = x(e.currentTarget).parent();
                    i.setActiveItem(t), i.deleteSelection() && i.setCaret(i.items.length)
                }
            })
        })) : function (n, i) {
            i.className = "remove-single";
            var o, r = n,
                s = '<a href="javascript:void(0)" class="' + i.className + '" tabindex="-1" title="' + a(i.title) + '">' + i.label + "</a>";
            n.setup = (o = r.setup, function () {
                if (i.append) {
                    var e = x(r.$input.context).attr("id"),
                        t = (x("#" + e), r.settings.render.item);
                    r.settings.render.item = function (e) {
                        return t.apply(n, arguments) + s
                    }
                }
                o.apply(n, arguments), n.$control.on("click", "." + i.className, function (e) {
                    e.preventDefault(), r.isLocked || r.clear()
                })
            })
        }(this, e)
    }), y.define("restore_on_backspace", function (i) {
        var o, e = this;
        i.text = i.text || function (e) {
            return e[this.settings.labelField]
        }, this.onKeyDown = (o = e.onKeyDown, function (e) {
            var t, n;
            return 8 === e.keyCode && "" === this.$control_input.val() && !this.$activeItems.length && 0 <= (t = this.caretPos - 1) && t < this.items.length ? (n = this.options[this.items[t]], this.deleteSelection(e) && (this.setTextboxValue(i.text.apply(this, [n])), this.refreshOptions(!0)), void e.preventDefault()) : o.apply(this, arguments)
        })
    }), y
});