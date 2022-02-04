! function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(window.jQuery)
}(function ($) {
    "use strict";
    var func = (k = 0, {
            eq: function (t) {
                return function (e) {
                    return t === e
                }
            },
            eq2: function (e, t) {
                return e === t
            },
            peq2: function (n) {
                return function (e, t) {
                    return e[n] === t[n]
                }
            },
            ok: function () {
                return !0
            },
            fail: function () {
                return !1
            },
            self: function (e) {
                return e
            },
            not: function (e) {
                return function () {
                    return !e.apply(e, arguments)
                }
            },
            and: function (t, n) {
                return function (e) {
                    return t(e) && n(e)
                }
            },
            invoke: function (e, t) {
                return function () {
                    return e[t].apply(e, arguments)
                }
            },
            uniqueId: function (e) {
                var t = ++k + "";
                return e ? e + t : t
            },
            rect2bnd: function (e) {
                var t = $(document);
                return {
                    top: e.top + t.scrollTop(),
                    left: e.left + t.scrollLeft(),
                    width: e.right - e.left,
                    height: e.bottom - e.top
                }
            },
            invertObject: function (e) {
                var t = {};
                for (var n in e) e.hasOwnProperty(n) && (t[e[n]] = n);
                return t
            },
            namespaceToCamel: function (e, t) {
                return (t = t || "") + e.split(".").map(function (e) {
                    return e.substring(0, 1).toUpperCase() + e.substring(1)
                }).join("")
            },
            debounce: function (o, i, r) {
                var a;
                return function () {
                    var e = this,
                        t = arguments,
                        n = r && !a;
                    clearTimeout(a), a = setTimeout(function () {
                        a = null, r || o.apply(e, t)
                    }, i), n && o.apply(e, t)
                }
            }
        }),
        list = (W = function (e) {
            return e[0]
        }, X = function (e) {
            return e[e.length - 1]
        }, Z = function (e) {
            return e.slice(1)
        }, ba = function (e, t) {
            return $.inArray(t, e)
        }, ca = function (e, t) {
            return -1 !== ba(e, t)
        }, {
            head: W,
            last: X,
            initial: function (e) {
                return e.slice(0, e.length - 1)
            },
            tail: Z,
            prev: function (e, t) {
                var n = ba(e, t);
                return -1 === n ? null : e[n - 1]
            },
            next: function (e, t) {
                var n = ba(e, t);
                return -1 === n ? null : e[n + 1]
            },
            find: function (e, t) {
                for (var n = 0, o = e.length; n < o; n++) {
                    var i = e[n];
                    if (t(i)) return i
                }
            },
            contains: ca,
            all: function (e, t) {
                for (var n = 0, o = e.length; n < o; n++)
                    if (!t(e[n])) return !1;
                return !0
            },
            sum: function (e, n) {
                return n = n || func.self, e.reduce(function (e, t) {
                    return e + n(t)
                }, 0)
            },
            from: function (e) {
                for (var t = [], n = -1, o = e.length; ++n < o;) t[n] = e[n];
                return t
            },
            isEmpty: function (e) {
                return !e || !e.length
            },
            clusterBy: function (e, o) {
                return e.length ? Z(e).reduce(function (e, t) {
                    var n = X(e);
                    return o(X(n), t) ? n[n.length] = t : e[e.length] = [t], e
                }, [
                    [W(e)]
                ]) : []
            },
            compact: function (e) {
                for (var t = [], n = 0, o = e.length; n < o; n++) e[n] && t.push(e[n]);
                return t
            },
            unique: function (e) {
                for (var t = [], n = 0, o = e.length; n < o; n++) ca(t, e[n]) || t.push(e[n]);
                return t
            }
        }),
        isSupportAmd = "function" == typeof define && define.amd,
        isFontInstalled = function (e) {
            var t = "Comic Sans MS" === e ? "Courier New" : "Comic Sans MS",
                n = $("<div>").css({
                    position: "absolute",
                    left: "-9999px",
                    top: "-9999px",
                    fontSize: "200px"
                }).text("mmmmmmmmmwwwwwww").appendTo(document.body),
                o = n.css("fontFamily", t).width(),
                i = n.css("fontFamily", e + "," + t).width();
            return n.remove(), o !== i
        },
        userAgent = navigator.userAgent,
        isMSIE = /MSIE|Trident/i.test(userAgent),
        browserVersion, W, X, Z, ba, ca, k;
    if (isMSIE) {
        var matches = /MSIE (\d+[.]\d+)/.exec(userAgent);
        matches && (browserVersion = parseFloat(matches[1])), matches = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(userAgent), matches && (browserVersion = parseFloat(matches[1]))
    }
    var isEdge = /Edge\/\d+/.test(userAgent),
        hasCodeMirror = !!window.CodeMirror;
    if (!hasCodeMirror && isSupportAmd && "undefined" != typeof require)
        if (void 0 !== require.resolve) try {
            require.resolve("codemirror"), hasCodeMirror = !0
        } catch (e) {} else void 0 !== eval("require").specified && (hasCodeMirror = eval("require").specified("codemirror"));
    var agent = {
            isMac: -1 < navigator.appVersion.indexOf("Mac"),
            isMSIE: isMSIE,
            isEdge: isEdge,
            isFF: !isEdge && /firefox/i.test(userAgent),
            isPhantom: /PhantomJS/i.test(userAgent),
            isWebkit: !isEdge && /webkit/i.test(userAgent),
            isChrome: !isEdge && /chrome/i.test(userAgent),
            isSafari: !isEdge && /safari/i.test(userAgent),
            browserVersion: browserVersion,
            jqueryVersion: parseFloat($.fn.jquery),
            isSupportAmd: isSupportAmd,
            hasCodeMirror: hasCodeMirror,
            isFontInstalled: isFontInstalled,
            isW3CRangeSupport: !!document.createRange
        },
        NBSP_CHAR = String.fromCharCode(160),
        ZERO_WIDTH_NBSP_CHAR = "\ufeff",
        dom = (jb = function (e) {
            return e && $(e).hasClass("note-editable")
        }, lb = function (t) {
            return t = t.toUpperCase(),
                function (e) {
                    return e && e.nodeName.toUpperCase() === t
                }
        }, mb = function (e) {
            return e && 3 === e.nodeType
        }, ob = function (e) {
            return e && /^BR|^IMG|^HR|^IFRAME|^BUTTON/.test(e.nodeName.toUpperCase())
        }, pb = function (e) {
            return !jb(e) && (e && /^DIV|^P|^LI|^H[1-7]/.test(e.nodeName.toUpperCase()))
        }, rb = lb("PRE"), sb = lb("LI"), ub = lb("TABLE"), vb = lb("DATA"), wb = function (e) {
            return !(Bb(e) || xb(e) || yb(e) || pb(e) || ub(e) || Ab(e) || vb(e))
        }, xb = function (e) {
            return e && /^UL|^OL/.test(e.nodeName.toUpperCase())
        }, yb = lb("HR"), zb = function (e) {
            return e && /^TD|^TH/.test(e.nodeName.toUpperCase())
        }, Ab = lb("BLOCKQUOTE"), Bb = function (e) {
            return zb(e) || Ab(e) || jb(e)
        }, Cb = lb("A"), Fb = lb("BODY"), Ib = agent.isMSIE && agent.browserVersion < 11 ? "&nbsp;" : "<br>", Jb = function (e) {
            return mb(e) ? e.nodeValue.length : e ? e.childNodes.length : 0
        }, Kb = function (e) {
            var t = Jb(e);
            return 0 === t || (!mb(e) && 1 === t && e.innerHTML === Ib || !(!list.all(e.childNodes, mb) || "" !== e.innerHTML))
        }, Lb = function (e) {
            ob(e) || Jb(e) || (e.innerHTML = Ib)
        }, Mb = function (e, t) {
            for (; e;) {
                if (t(e)) return e;
                if (jb(e)) break;
                e = e.parentNode
            }
            return null
        }, Ob = function (e, t) {
            t = t || func.fail;
            var n = [];
            return Mb(e, function (e) {
                return jb(e) || n.push(e), t(e)
            }), n
        }, Sb = function (e, t) {
            t = t || func.fail;
            for (var n = []; e && !t(e);) n.push(e), e = e.nextSibling;
            return n
        }, Vb = function (e, t) {
            var n = t.nextSibling,
                o = t.parentNode;
            return n ? o.insertBefore(e, n) : o.appendChild(e), e
        }, Wb = function (n, e) {
            return $.each(e, function (e, t) {
                n.appendChild(t)
            }), n
        }, Xb = function (e) {
            return 0 === e.offset
        }, Yb = function (e) {
            return e.offset === Jb(e.node)
        }, Zb = function (e) {
            return Xb(e) || Yb(e)
        }, $b = function (e, t) {
            for (; e && e !== t;) {
                if (0 !== cc(e)) return !1;
                e = e.parentNode
            }
            return !0
        }, _b = function (e, t) {
            if (!t) return !1;
            for (; e && e !== t;) {
                if (cc(e) !== Jb(e.parentNode) - 1) return !1;
                e = e.parentNode
            }
            return !0
        }, cc = function (e) {
            for (var t = 0; e = e.previousSibling;) t += 1;
            return t
        }, dc = function (e) {
            return !!(e && e.childNodes && e.childNodes.length)
        }, ec = function (e, t) {
            var n, o;
            if (0 === e.offset) {
                if (jb(e.node)) return null;
                n = e.node.parentNode, o = cc(e.node)
            } else o = dc(e.node) ? (n = e.node.childNodes[e.offset - 1], Jb(n)) : (n = e.node, t ? 0 : e.offset - 1);
            return {
                node: n,
                offset: o
            }
        }, fc = function (e, t) {
            var n, o;
            if (Jb(e.node) === e.offset) {
                if (jb(e.node)) return null;
                n = e.node.parentNode, o = cc(e.node) + 1
            } else o = dc(e.node) ? (n = e.node.childNodes[e.offset], 0) : (n = e.node, t ? Jb(e.node) : e.offset + 1);
            return {
                node: n,
                offset: o
            }
        }, gc = function (e, t) {
            return e.node === t.node && e.offset === t.offset
        }, oc = function (e, t) {
            var n = t && t.isSkipPaddingBlankHTML,
                o = t && t.isNotSplitEdgePoint;
            if (Zb(e) && (mb(e.node) || o)) {
                if (Xb(e)) return e.node;
                if (Yb(e)) return e.node.nextSibling
            }
            if (mb(e.node)) return e.node.splitText(e.offset);
            var i = e.node.childNodes[e.offset],
                r = Vb(e.node.cloneNode(!1), e.node);
            return Wb(r, Sb(i)), n || (Lb(e.node), Lb(r)), r
        }, pc = function (e, n, o) {
            var t = Ob(n.node, func.eq(e));
            return t.length ? 1 === t.length ? oc(n, o) : t.reduce(function (e, t) {
                return e === n.node && (e = oc(n, o)), oc({
                    node: t,
                    offset: e ? dom.position(e) : Jb(t)
                }, o)
            }) : null
        }, rc = function (e) {
            return document.createElement(e)
        }, tc = function (e, t) {
            if (e && e.parentNode) {
                if (e.removeNode) return e.removeNode(t);
                var n = e.parentNode;
                if (!t) {
                    var o, i, r = [];
                    for (o = 0, i = e.childNodes.length; o < i; o++) r.push(e.childNodes[o]);
                    for (o = 0, i = r.length; o < i; o++) n.insertBefore(r[o], e)
                }
                n.removeChild(e)
            }
        }, wc = lb("TEXTAREA"), xc = function (e, t) {
            var n = wc(e[0]) ? e.val() : e.html();
            return t ? n.replace(/[\n\r]/g, "") : n
        }, {
            NBSP_CHAR: NBSP_CHAR,
            ZERO_WIDTH_NBSP_CHAR: ZERO_WIDTH_NBSP_CHAR,
            blank: Ib,
            emptyPara: "<p>" + Ib + "</p>",
            makePredByNodeName: lb,
            isEditable: jb,
            isControlSizing: function (e) {
                return e && $(e).hasClass("note-control-sizing")
            },
            isText: mb,
            isElement: function (e) {
                return e && 1 === e.nodeType
            },
            isVoid: ob,
            isPara: pb,
            isPurePara: function (e) {
                return pb(e) && !sb(e)
            },
            isHeading: function (e) {
                return e && /^H[1-7]/.test(e.nodeName.toUpperCase())
            },
            isInline: wb,
            isBlock: func.not(wb),
            isBodyInline: function (e) {
                return wb(e) && !Mb(e, pb)
            },
            isBody: Fb,
            isParaInline: function (e) {
                return wb(e) && !!Mb(e, pb)
            },
            isPre: rb,
            isList: xb,
            isTable: ub,
            isData: vb,
            isCell: zb,
            isBlockquote: Ab,
            isBodyContainer: Bb,
            isAnchor: Cb,
            isDiv: lb("DIV"),
            isLi: sb,
            isBR: lb("BR"),
            isSpan: lb("SPAN"),
            isB: lb("B"),
            isU: lb("U"),
            isS: lb("S"),
            isI: lb("I"),
            isImg: lb("IMG"),
            isTextarea: wc,
            isEmpty: Kb,
            isEmptyAnchor: func.and(Cb, Kb),
            isClosestSibling: function (e, t) {
                return e.nextSibling === t || e.previousSibling === t
            },
            withClosestSiblings: function (e, t) {
                t = t || func.ok;
                var n = [];
                return e.previousSibling && t(e.previousSibling) && n.push(e.previousSibling), n.push(e), e.nextSibling && t(e.nextSibling) && n.push(e.nextSibling), n
            },
            nodeLength: Jb,
            isLeftEdgePoint: Xb,
            isRightEdgePoint: Yb,
            isEdgePoint: Zb,
            isLeftEdgeOf: $b,
            isRightEdgeOf: _b,
            isLeftEdgePointOf: function (e, t) {
                return Xb(e) && $b(e.node, t)
            },
            isRightEdgePointOf: function (e, t) {
                return Yb(e) && _b(e.node, t)
            },
            prevPoint: ec,
            nextPoint: fc,
            isSamePoint: gc,
            isVisiblePoint: function (e) {
                if (mb(e.node) || !dc(e.node) || Kb(e.node)) return !0;
                var t = e.node.childNodes[e.offset - 1],
                    n = e.node.childNodes[e.offset];
                return !(t && !ob(t) || n && !ob(n))
            },
            prevPointUntil: function (e, t) {
                for (; e;) {
                    if (t(e)) return e;
                    e = ec(e)
                }
                return null
            },
            nextPointUntil: function (e, t) {
                for (; e;) {
                    if (t(e)) return e;
                    e = fc(e)
                }
                return null
            },
            isCharPoint: function (e) {
                if (!mb(e.node)) return !1;
                var t = e.node.nodeValue.charAt(e.offset - 1);
                return t && " " !== t && t !== NBSP_CHAR
            },
            walkPoint: function (e, t, n, o) {
                for (var i = e; i && (n(i), !gc(i, t));) {
                    var r = o && e.node !== i.node && t.node !== i.node;
                    i = fc(i, r)
                }
            },
            ancestor: Mb,
            singleChildAncestor: function (e, t) {
                for (e = e.parentNode; e && 1 === Jb(e);) {
                    if (t(e)) return e;
                    if (jb(e)) break;
                    e = e.parentNode
                }
                return null
            },
            listAncestor: Ob,
            lastAncestor: function (e, t) {
                var n = Ob(e);
                return list.last(n.filter(t))
            },
            listNext: Sb,
            listPrev: function (e, t) {
                t = t || func.fail;
                for (var n = []; e && !t(e);) n.push(e), e = e.previousSibling;
                return n
            },
            listDescendant: function (i, r) {
                var a = [];
                return r = r || func.ok,
                    function e(t) {
                        i !== t && r(t) && a.push(t);
                        for (var n = 0, o = t.childNodes.length; n < o; n++) e(t.childNodes[n])
                    }(i), a
            },
            commonAncestor: function (e, t) {
                for (var n = Ob(e), o = t; o; o = o.parentNode)
                    if (-1 < $.inArray(o, n)) return o;
                return null
            },
            wrap: function (e, t) {
                var n = e.parentNode,
                    o = $("<" + t + ">")[0];
                return n.insertBefore(o, e), o.appendChild(e), o
            },
            insertAfter: Vb,
            appendChildNodes: Wb,
            position: cc,
            hasChildren: dc,
            makeOffsetPath: function (e, t) {
                return Ob(t, func.eq(e)).map(cc).reverse()
            },
            fromOffsetPath: function (e, t) {
                for (var n = e, o = 0, i = t.length; o < i; o++) n = n.childNodes.length <= t[o] ? n.childNodes[n.childNodes.length - 1] : n.childNodes[t[o]];
                return n
            },
            splitTree: pc,
            splitPoint: function (e, t) {
                var n, o, i = t ? pb : Bb,
                    r = Ob(e.node, i),
                    a = list.last(r) || e.node;
                o = i(a) ? (n = r[r.length - 2], a) : (n = a).parentNode;
                var s = n && pc(n, e, {
                    isSkipPaddingBlankHTML: t,
                    isNotSplitEdgePoint: t
                });
                return s || o !== e.node || (s = e.node.childNodes[e.offset]), {
                    rightNode: s,
                    container: o
                }
            },
            create: rc,
            createText: function (e) {
                return document.createTextNode(e)
            },
            remove: tc,
            removeWhile: function (e, t) {
                for (; e && !jb(e) && t(e);) {
                    var n = e.parentNode;
                    tc(e), e = n
                }
            },
            replace: function (e, t) {
                if (e.nodeName.toUpperCase() === t.toUpperCase()) return e;
                var n = rc(t);
                return e.style.cssText && (n.style.cssText = e.style.cssText), Wb(n, list.from(e.childNodes)), Vb(n, e), tc(e), n
            },
            html: function (e, t) {
                var n = xc(e);
                return t && (n = n.replace(/<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g, function (e, t, n) {
                    n = n.toUpperCase();
                    var o = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!t,
                        i = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);
                    return e + (o || i ? "\n" : "")
                }), n = $.trim(n)), n
            },
            value: xc,
            posFromPlaceholder: function (e) {
                var t = $(e),
                    n = t.offset(),
                    o = t.outerHeight(!0);
                return {
                    left: n.left,
                    top: n.top + o
                }
            },
            attachEvents: function (t, n) {
                Object.keys(n).forEach(function (e) {
                    t.on(e, n[e])
                })
            },
            detachEvents: function (t, n) {
                Object.keys(n).forEach(function (e) {
                    t.off(e, n[e])
                })
            }
        }),
        Context = function (o, e) {
            var i = this,
                t = $.summernote.ui;
            return this.memos = {}, this.modules = {}, this.layoutInfo = {}, this.options = e, this.initialize = function () {
                return this.layoutInfo = t.createLayout(o, e), this._initialize(), o.hide(), this
            }, this.destroy = function () {
                this._destroy(), o.removeData("summernote"), t.removeLayout(o, this.layoutInfo)
            }, this.reset = function () {
                var e = i.isDisabled();
                this.code(dom.emptyPara), this._destroy(), this._initialize(), e && i.disable()
            }, this._initialize = function () {
                var t = $.extend({}, this.options.buttons);
                Object.keys(t).forEach(function (e) {
                    i.memo("button." + e, t[e])
                });
                var n = $.extend({}, this.options.modules, $.summernote.plugins || {});
                Object.keys(n).forEach(function (e) {
                    i.module(e, n[e], !0)
                }), Object.keys(this.modules).forEach(function (e) {
                    i.initializeModule(e)
                })
            }, this._destroy = function () {
                Object.keys(this.modules).reverse().forEach(function (e) {
                    i.removeModule(e)
                }), Object.keys(this.memos).forEach(function (e) {
                    i.removeMemo(e)
                })
            }, this.code = function (e) {
                var t = this.invoke("codeview.isActivated");
                return void 0 === e ? (this.invoke("codeview.sync"), t ? this.layoutInfo.codable.val() : this.layoutInfo.editable.html()) : (t ? this.layoutInfo.codable.val(e) : this.layoutInfo.editable.html(e), o.val(e), void this.triggerEvent("change", e))
            }, this.isDisabled = function () {
                return "false" === this.layoutInfo.editable.attr("contenteditable")
            }, this.enable = function () {
                this.layoutInfo.editable.attr("contenteditable", !0), this.invoke("toolbar.activate", !0)
            }, this.disable = function () {
                this.invoke("codeview.isActivated") && this.invoke("codeview.deactivate"), this.layoutInfo.editable.attr("contenteditable", !1), this.invoke("toolbar.deactivate", !0)
            }, this.triggerEvent = function () {
                var e = list.head(arguments),
                    t = list.tail(list.from(arguments)),
                    n = this.options.callbacks[func.namespaceToCamel(e, "on")];
                n && n.apply(o[0], t), o.trigger("summernote." + e, t)
            }, this.initializeModule = function (e) {
                var t = this.modules[e];
                t.shouldInitialize = t.shouldInitialize || func.ok, t.shouldInitialize() && (t.initialize && t.initialize(), t.events && dom.attachEvents(o, t.events))
            }, this.module = function (e, t, n) {
                return 1 === arguments.length ? this.modules[e] : (this.modules[e] = new t(this), void(n || this.initializeModule(e)))
            }, this.removeModule = function (e) {
                var t = this.modules[e];
                t.shouldInitialize() && (t.events && dom.detachEvents(o, t.events), t.destroy && t.destroy()), delete this.modules[e]
            }, this.memo = function (e, t) {
                return 1 === arguments.length ? this.memos[e] : void(this.memos[e] = t)
            }, this.removeMemo = function (e) {
                this.memos[e] && this.memos[e].destroy && this.memos[e].destroy(), delete this.memos[e]
            }, this.createInvokeHandler = function (t, n) {
                return function (e) {
                    e.preventDefault(), i.invoke(t, n || $(e.target).closest("[data-value]").data("value"))
                }
            }, this.invoke = function () {
                var e = list.head(arguments),
                    t = list.tail(list.from(arguments)),
                    n = e.split("."),
                    o = 1 < n.length,
                    i = o && list.head(n),
                    r = o ? list.last(n) : list.head(n),
                    a = this.modules[i || "editor"];
                return !i && this[r] ? this[r].apply(this, t) : a && a[r] && a.shouldInitialize() ? a[r].apply(a, t) : void 0
            }, this.initialize()
        },
        jb, lb, mb, ob, pb, rb, sb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Fb, Ib, Jb, Kb, Lb, Mb, Ob, Sb, Vb, Wb, Xb, Yb, Zb, $b, _b, cc, dc, ec, fc, gc, oc, pc, rc, tc, wc, xc;
    $.fn.extend({
        summernote: function () {
            var e = $.type(list.head(arguments)),
                t = "string" === e,
                i = "object" === e ? list.head(arguments) : {};
            (i = $.extend({}, $.summernote.options, i)).langInfo = $.extend(!0, {}, $.summernote.lang["en-US"], $.summernote.lang[i.lang]), i.icons = $.extend(!0, {}, $.summernote.options.icons, i.icons), this.each(function (e, t) {
                var n = $(t);
                if (!n.data("summernote")) {
                    var o = new Context(n, i);
                    n.data("summernote", o), n.data("summernote").triggerEvent("init", o.layoutInfo)
                }
            });
            var n = this.first();
            if (n.length) {
                var o = n.data("summernote");
                if (t) return o.invoke.apply(o, list.from(arguments));
                i.focus && o.invoke("editor.focus")
            }
            return this
        }
    });
    var Renderer = function (o, i, r, a) {
            this.render = function (e) {
                var n = $(o);
                if (r && r.contents && n.html(r.contents), r && r.className && n.addClass(r.className), r && r.data && $.each(r.data, function (e, t) {
                        n.attr("data-" + e, t)
                    }), r && r.click && n.on("click", r.click), i) {
                    var t = n.find(".note-children-container");
                    i.forEach(function (e) {
                        e.render(t.length ? t : n)
                    })
                }
                return a && a(n, r), r && r.callback && r.callback(n), e && e.append(n), n
            }
        },
        renderer = {
            create: function (n, o) {
                return function () {
                    var e = $.isArray(arguments[0]) ? arguments[0] : [],
                        t = "object" == typeof arguments[1] ? arguments[1] : arguments[0];
                    return t && t.children && (e = t.children), new Renderer(n, e, t, o)
                }
            }
        },
        editor = renderer.create('<div class="note-editor note-frame panel panel-default"/>'),
        toolbar = renderer.create('<div class="note-toolbar panel-heading"/>'),
        editingArea = renderer.create('<div class="note-editing-area"/>'),
        codable = renderer.create('<textarea class="note-codable"/>'),
        editable = renderer.create('<div class="note-editable panel-body" contentEditable="true"/>'),
        statusbar = renderer.create(['<div class="note-statusbar">', '  <div class="note-resizebar">', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', '    <div class="note-icon-bar"/>', "  </div>", "</div>"].join("")),
        airEditor = renderer.create('<div class="note-editor"/>'),
        airEditable = renderer.create('<div class="note-editable" contentEditable="true"/>'),
        buttonGroup = renderer.create('<div class="note-btn-group btn-group">'),
        button = renderer.create('<button type="button" class="note-btn btn btn-default btn-sm" tabindex="-1">', function (e, t) {
            t && t.tooltip && e.attr({
                title: t.tooltip
            }).tooltip({
                container: "body",
                trigger: "hover",
                placement: "bottom"
            })
        }),
        dropdown = renderer.create('<div class="dropdown-menu">', function (e, t) {
            var n = $.isArray(t.items) ? t.items.map(function (e) {
                return '<li><a href="javascript:void(0);" data-value="' + ("string" == typeof e ? e : e.value || "") + '">' + (t.template ? t.template(e) : e) + "</a></li>"
            }).join("") : t.items;
            e.html(n)
        }),
        dropdownCheck = renderer.create('<div class="dropdown-menu note-check">', function (e, o) {
            var t = $.isArray(o.items) ? o.items.map(function (e) {
                var t = "string" == typeof e ? e : e.value || "",
                    n = o.template ? o.template(e) : e;
                return '<li><a href="javascript:void(0);" data-value="' + t + '">' + icon(o.checkClassName) + " " + n + "</a></li>"
            }).join("") : o.items;
            e.html(t)
        }),
        palette = renderer.create('<div class="note-color-palette"/>', function (e, t) {
            for (var n = [], o = 0, i = t.colors.length; o < i; o++) {
                for (var r = t.eventName, a = t.colors[o], s = [], l = 0, d = a.length; l < d; l++) {
                    var c = a[l];
                    s.push(['<button type="button" class="note-color-btn"', 'style="background-color:', c, '" ', 'data-event="', r, '" ', 'data-value="', c, '" ', 'title="', c, '" ', 'data-toggle="button" tabindex="-1"></button>'].join(""))
                }
                n.push('<div class="note-color-row">' + s.join("") + "</div>")
            }
            e.html(n.join("")), e.find(".note-color-btn").tooltip({
                container: "body",
                trigger: "hover",
                placement: "bottom"
            })
        }),
        dialog = renderer.create('<div class="modal" aria-hidden="false" tabindex="-1"/>', function (e, t) {
            t.fade && e.addClass("fade"), e.html(['<div class="modal-dialog">', '  <div class="modal-content">', t.title ? '    <div class="modal-header">      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>      <h4 class="modal-title">' + t.title + "</h4>    </div>" : "", '    <div class="modal-body">' + t.body + "</div>", t.footer ? '    <div class="modal-footer">' + t.footer + "</div>" : "", "  </div>", "</div>"].join(""))
        }),
        popover = renderer.create(['<div class="note-popover popover in">', '  <div class="arrow"/>', '  <div class="popover-content note-children-container"/>', "</div>"].join(""), function (e, t) {
            var n = void 0 !== t.direction ? t.direction : "bottom";
            e.addClass(n), t.hideArrow && e.find(".arrow").hide()
        }),
        icon = function (e, t) {
            return "<" + (t = t || "i") + ' class="' + e + '"/>'
        },
        ui = {
            editor: editor,
            toolbar: toolbar,
            editingArea: editingArea,
            codable: codable,
            editable: editable,
            statusbar: statusbar,
            airEditor: airEditor,
            airEditable: airEditable,
            buttonGroup: buttonGroup,
            button: button,
            dropdown: dropdown,
            dropdownCheck: dropdownCheck,
            palette: palette,
            dialog: dialog,
            popover: popover,
            icon: icon,
            toggleBtn: function (e, t) {
                e.toggleClass("disabled", !t), e.attr("disabled", !t)
            },
            toggleBtnActive: function (e, t) {
                e.toggleClass("active", t)
            },
            onDialogShown: function (e, t) {
                e.one("shown.bs.modal", t)
            },
            onDialogHidden: function (e, t) {
                e.one("hidden.bs.modal", t)
            },
            showDialog: function (e) {
                e.modal("show")
            },
            hideDialog: function (e) {
                e.modal("hide")
            },
            createLayout: function (e, t) {
                var n = (t.airMode ? ui.airEditor([ui.editingArea([ui.airEditable()])]) : ui.editor([ui.toolbar(), ui.editingArea([ui.codable(), ui.editable()]), ui.statusbar()])).render();
                return n.insertAfter(e), {
                    note: e,
                    editor: n,
                    toolbar: n.find(".note-toolbar"),
                    editingArea: n.find(".note-editing-area"),
                    editable: n.find(".note-editable"),
                    codable: n.find(".note-codable"),
                    statusbar: n.find(".note-statusbar")
                }
            },
            removeLayout: function (e, t) {
                e.html(t.editable.html()), t.editor.remove(), e.show()
            }
        };
    $.summernote = $.summernote || {
        lang: {}
    }, $.extend($.summernote.lang, {
        "en-US": {
            font: {
                bold: "Bold",
                italic: "Italic",
                underline: "Underline",
                clear: "Remove Font Style",
                height: "Line Height",
                name: "Font Family",
                strikethrough: "Strikethrough",
                subscript: "Subscript",
                superscript: "Superscript",
                size: "Font Size"
            },
            image: {
                image: "Picture",
                insert: "Insert Image",
                resizeFull: "Resize Full",
                resizeHalf: "Resize Half",
                resizeQuarter: "Resize Quarter",
                floatLeft: "Float Left",
                floatRight: "Float Right",
                floatNone: "Float None",
                shapeRounded: "Shape: Rounded",
                shapeCircle: "Shape: Circle",
                shapeThumbnail: "Shape: Thumbnail",
                shapeNone: "Shape: None",
                dragImageHere: "Drag image or text here",
                dropImage: "Drop image or Text",
                selectFromFiles: "Select from files",
                maximumFileSize: "Maximum file size",
                maximumFileSizeError: "Maximum file size exceeded.",
                url: "Image URL",
                remove: "Remove Image"
            },
            video: {
                video: "Video",
                videoLink: "Video Link",
                insert: "Insert Video",
                url: "Video URL?",
                providers: "(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)"
            },
            link: {
                link: "Link",
                insert: "Insert Link",
                unlink: "Unlink",
                edit: "Edit",
                textToDisplay: "Text to display",
                url: "To what URL should this link go?",
                openInNewWindow: "Open in new window"
            },
            table: {
                table: "Table"
            },
            hr: {
                insert: "Insert Horizontal Rule"
            },
            style: {
                style: "Style",
                normal: "Normal",
                blockquote: "Quote",
                pre: "Code",
                h1: "Header 1",
                h2: "Header 2",
                h3: "Header 3",
                h4: "Header 4",
                h5: "Header 5",
                h6: "Header 6"
            },
            lists: {
                unordered: "Unordered list",
                ordered: "Ordered list"
            },
            options: {
                help: "Help",
                fullscreen: "Full Screen",
                codeview: "Code View"
            },
            paragraph: {
                paragraph: "Paragraph",
                outdent: "Outdent",
                indent: "Indent",
                left: "Align left",
                center: "Align center",
                right: "Align right",
                justify: "Justify full"
            },
            color: {
                recent: "Recent Color",
                more: "More Color",
                background: "Background Color",
                foreground: "Foreground Color",
                transparent: "Transparent",
                setTransparent: "Set transparent",
                reset: "Reset",
                resetToDefault: "Reset to default"
            },
            shortcut: {
                shortcuts: "Keyboard shortcuts",
                close: "Close",
                textFormatting: "Text formatting",
                action: "Action",
                paragraphFormatting: "Paragraph formatting",
                documentStyle: "Document Style",
                extraKeys: "Extra keys"
            },
            help: {
                insertParagraph: "Insert Paragraph",
                undo: "Undoes the last command",
                redo: "Redoes the last command",
                tab: "Tab",
                untab: "Untab",
                bold: "Set a bold style",
                italic: "Set a italic style",
                underline: "Set a underline style",
                strikethrough: "Set a strikethrough style",
                removeFormat: "Clean a style",
                justifyLeft: "Set left align",
                justifyCenter: "Set center align",
                justifyRight: "Set right align",
                justifyFull: "Set full align",
                insertUnorderedList: "Toggle unordered list",
                insertOrderedList: "Toggle ordered list",
                outdent: "Outdent on current paragraph",
                indent: "Indent on current paragraph",
                formatPara: "Change current block's format as a paragraph(P tag)",
                formatH1: "Change current block's format as H1",
                formatH2: "Change current block's format as H2",
                formatH3: "Change current block's format as H3",
                formatH4: "Change current block's format as H4",
                formatH5: "Change current block's format as H5",
                formatH6: "Change current block's format as H6",
                insertHorizontalRule: "Insert horizontal rule",
                "linkDialog.show": "Show Link Dialog"
            },
            history: {
                undo: "Undo",
                redo: "Redo"
            },
            specialChar: {
                specialChar: "SPECIAL CHARACTERS",
                select: "Select Special characters"
            }
        }
    });
    var key = (Jh = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SPACE: 32,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            NUM0: 48,
            NUM1: 49,
            NUM2: 50,
            NUM3: 51,
            NUM4: 52,
            NUM5: 53,
            NUM6: 54,
            NUM7: 55,
            NUM8: 56,
            B: 66,
            E: 69,
            I: 73,
            J: 74,
            K: 75,
            L: 76,
            R: 82,
            S: 83,
            U: 85,
            V: 86,
            Y: 89,
            Z: 90,
            SLASH: 191,
            LEFTBRACKET: 219,
            BACKSLASH: 220,
            RIGHTBRACKET: 221
        }, {
            isEdit: function (e) {
                return list.contains([Jh.BACKSPACE, Jh.TAB, Jh.ENTER, Jh.SPACE], e)
            },
            isMove: function (e) {
                return list.contains([Jh.LEFT, Jh.UP, Jh.RIGHT, Jh.DOWN], e)
            },
            nameFromCode: func.invertObject(Jh),
            code: Jh
        }),
        range = (Mh = function (e, t) {
            var n, o, i = e.parentElement(),
                r = document.body.createTextRange(),
                a = list.from(i.childNodes);
            for (n = 0; n < a.length; n++)
                if (!dom.isText(a[n])) {
                    if (r.moveToElementText(a[n]), 0 <= r.compareEndPoints("StartToStart", e)) break;
                    o = a[n]
                } if (0 !== n && dom.isText(a[n - 1])) {
                var s = document.body.createTextRange(),
                    l = null;
                s.moveToElementText(o || i), s.collapse(!o), l = o ? o.nextSibling : i.firstChild;
                var d = e.duplicate();
                d.setEndPoint("StartToStart", s);
                for (var c = d.text.replace(/[\r\n]/g, "").length; c > l.nodeValue.length && l.nextSibling;) c -= l.nodeValue.length, l = l.nextSibling;
                l.nodeValue, t && l.nextSibling && dom.isText(l.nextSibling) && c === l.nodeValue.length && (c -= l.nodeValue.length, l = l.nextSibling), i = l, n = c
            }
            return {
                cont: i,
                offset: n
            }
        }, Nh = function (e) {
            var a = function (e, t) {
                    var n, o;
                    if (dom.isText(e)) {
                        var i = dom.listPrev(e, func.not(dom.isText)),
                            r = list.last(i).previousSibling;
                        n = r || e.parentNode, t += list.sum(list.tail(i), dom.nodeLength), o = !r
                    } else {
                        if (n = e.childNodes[t] || e, dom.isText(n)) return a(n, 0);
                        t = 0, o = !1
                    }
                    return {
                        node: n,
                        collapseToStart: o,
                        offset: t
                    }
                },
                t = document.body.createTextRange(),
                n = a(e.node, e.offset);
            return t.moveToElementText(n.node), t.collapse(n.collapseToStart), t.moveStart("character", n.offset), t
        }, Oh = function (r, i, a, s) {
            this.sc = r, this.so = i, this.ec = a, this.eo = s;
            var n = function () {
                if (agent.isW3CRangeSupport) {
                    var e = document.createRange();
                    return e.setStart(r, i), e.setEnd(a, s), e
                }
                var t = Nh({
                    node: r,
                    offset: i
                });
                return t.setEndPoint("EndToEnd", Nh({
                    node: a,
                    offset: s
                })), t
            };
            this.getPoints = function () {
                return {
                    sc: r,
                    so: i,
                    ec: a,
                    eo: s
                }
            }, this.getStartPoint = function () {
                return {
                    node: r,
                    offset: i
                }
            }, this.getEndPoint = function () {
                return {
                    node: a,
                    offset: s
                }
            }, this.select = function () {
                var e = n();
                if (agent.isW3CRangeSupport) {
                    var t = document.getSelection();
                    0 < t.rangeCount && t.removeAllRanges(), t.addRange(e)
                } else e.select();
                return this
            }, this.scrollIntoView = function (e) {
                var t = $(e).height();
                return e.scrollTop + t < this.sc.offsetTop && (e.scrollTop += Math.abs(e.scrollTop + t - this.sc.offsetTop)), this
            }, this.normalize = function () {
                var e = function (e, t) {
                        if (dom.isVisiblePoint(e) && !dom.isEdgePoint(e) || dom.isVisiblePoint(e) && dom.isRightEdgePoint(e) && !t || dom.isVisiblePoint(e) && dom.isLeftEdgePoint(e) && t || dom.isVisiblePoint(e) && dom.isBlock(e.node) && dom.isEmpty(e.node)) return e;
                        var n = dom.ancestor(e.node, dom.isBlock);
                        if ((dom.isLeftEdgePointOf(e, n) || dom.isVoid(dom.prevPoint(e).node)) && !t || (dom.isRightEdgePointOf(e, n) || dom.isVoid(dom.nextPoint(e).node)) && t) {
                            if (dom.isVisiblePoint(e)) return e;
                            t = !t
                        }
                        return (t ? dom.nextPointUntil(dom.nextPoint(e), dom.isVisiblePoint) : dom.prevPointUntil(dom.prevPoint(e), dom.isVisiblePoint)) || e
                    },
                    t = e(this.getEndPoint(), !1),
                    n = this.isCollapsed() ? t : e(this.getStartPoint(), !0);
                return new Oh(n.node, n.offset, t.node, t.offset)
            }, this.nodes = function (n, e) {
                n = n || func.ok;
                var o = e && e.includeAncestor,
                    i = e && e.fullyContains,
                    t = this.getStartPoint(),
                    r = this.getEndPoint(),
                    a = [],
                    s = [];
                return dom.walkPoint(t, r, function (e) {
                    var t;
                    dom.isEditable(e.node) || (i ? (dom.isLeftEdgePoint(e) && s.push(e.node), dom.isRightEdgePoint(e) && list.contains(s, e.node) && (t = e.node)) : t = o ? dom.ancestor(e.node, n) : e.node, t && n(t) && a.push(t))
                }, !0), list.unique(a)
            }, this.commonAncestor = function () {
                return dom.commonAncestor(r, a)
            }, this.expand = function (e) {
                var t = dom.ancestor(r, e),
                    n = dom.ancestor(a, e);
                if (!t && !n) return new Oh(r, i, a, s);
                var o = this.getPoints();
                return t && (o.sc = t, o.so = 0), n && (o.ec = n, o.eo = dom.nodeLength(n)), new Oh(o.sc, o.so, o.ec, o.eo)
            }, this.collapse = function (e) {
                return e ? new Oh(r, i, r, i) : new Oh(a, s, a, s)
            }, this.splitText = function () {
                var e = r === a,
                    t = this.getPoints();
                return dom.isText(a) && !dom.isEdgePoint(this.getEndPoint()) && a.splitText(s), dom.isText(r) && !dom.isEdgePoint(this.getStartPoint()) && (t.sc = r.splitText(i), t.so = 0, e && (t.ec = t.sc, t.eo = s - i)), new Oh(t.sc, t.so, t.ec, t.eo)
            }, this.deleteContents = function () {
                if (this.isCollapsed()) return this;
                var e = this.splitText(),
                    t = e.nodes(null, {
                        fullyContains: !0
                    }),
                    o = dom.prevPointUntil(e.getStartPoint(), function (e) {
                        return !list.contains(t, e.node)
                    }),
                    i = [];
                return $.each(t, function (e, t) {
                    var n = t.parentNode;
                    o.node !== n && 1 === dom.nodeLength(n) && i.push(n), dom.remove(t, !1)
                }), $.each(i, function (e, t) {
                    dom.remove(t, !1)
                }), new Oh(o.node, o.offset, o.node, o.offset).normalize()
            };
            var e = function (t) {
                return function () {
                    var e = dom.ancestor(r, t);
                    return !!e && e === dom.ancestor(a, t)
                }
            };
            this.isOnEditable = e(dom.isEditable), this.isOnList = e(dom.isList), this.isOnAnchor = e(dom.isAnchor), this.isOnCell = e(dom.isCell), this.isOnData = e(dom.isData), this.isLeftEdgeOf = function (e) {
                if (!dom.isLeftEdgePoint(this.getStartPoint())) return !1;
                var t = dom.ancestor(this.sc, e);
                return t && dom.isLeftEdgeOf(this.sc, t)
            }, this.isCollapsed = function () {
                return r === a && i === s
            }, this.wrapBodyInlineWithPara = function () {
                if (dom.isBodyContainer(r) && dom.isEmpty(r)) return r.innerHTML = dom.emptyPara, new Oh(r.firstChild, 0, r.firstChild, 0);
                var e, t = this.normalize();
                if (dom.isParaInline(r) || dom.isPara(r)) return t;
                if (dom.isInline(t.sc)) {
                    var n = dom.listAncestor(t.sc, func.not(dom.isInline));
                    e = list.last(n), dom.isInline(e) || (e = n[n.length - 2] || t.sc.childNodes[t.so])
                } else e = t.sc.childNodes[0 < t.so ? t.so - 1 : 0];
                var o = dom.listPrev(e, dom.isParaInline).reverse();
                if ((o = o.concat(dom.listNext(e.nextSibling, dom.isParaInline))).length) {
                    var i = dom.wrap(list.head(o), "p");
                    dom.appendChildNodes(i, list.tail(o))
                }
                return this.normalize()
            }, this.insertNode = function (e) {
                var t = this.wrapBodyInlineWithPara().deleteContents(),
                    n = dom.splitPoint(t.getStartPoint(), dom.isInline(e));
                return n.rightNode ? n.rightNode.parentNode.insertBefore(e, n.rightNode) : n.container.appendChild(e), e
            }, this.pasteHTML = function (e) {
                var t = $("<div></div>").html(e)[0],
                    n = list.from(t.childNodes),
                    o = this.wrapBodyInlineWithPara().deleteContents();
                return n.reverse().map(function (e) {
                    return o.insertNode(e)
                }).reverse()
            }, this.toString = function () {
                var e = n();
                return agent.isW3CRangeSupport ? e.toString() : e.text
            }, this.getWordRange = function (e) {
                var t = this.getEndPoint();
                if (!dom.isCharPoint(t)) return this;
                var n = dom.prevPointUntil(t, function (e) {
                    return !dom.isCharPoint(e)
                });
                return e && (t = dom.nextPointUntil(t, function (e) {
                    return !dom.isCharPoint(e)
                })), new Oh(n.node, n.offset, t.node, t.offset)
            }, this.bookmark = function (e) {
                return {
                    s: {
                        path: dom.makeOffsetPath(e, r),
                        offset: i
                    },
                    e: {
                        path: dom.makeOffsetPath(e, a),
                        offset: s
                    }
                }
            }, this.paraBookmark = function (e) {
                return {
                    s: {
                        path: list.tail(dom.makeOffsetPath(list.head(e), r)),
                        offset: i
                    },
                    e: {
                        path: list.tail(dom.makeOffsetPath(list.last(e), a)),
                        offset: s
                    }
                }
            }, this.getClientRects = function () {
                return n().getClientRects()
            }
        }, {
            create: function (e, t, n, o) {
                if (4 === arguments.length) return new Oh(e, t, n, o);
                if (2 === arguments.length) return new Oh(n = e, o = t, n, o);
                var i = this.createFromSelection();
                return i || 1 !== arguments.length ? i : (i = this.createFromNode(e)).collapse(dom.emptyPara === e.innerHTML)
            },
            createFromSelection: function () {
                var e, t, n, o;
                if (agent.isW3CRangeSupport) {
                    var i = document.getSelection();
                    if (!i || 0 === i.rangeCount) return null;
                    if (dom.isBody(i.anchorNode)) return null;
                    var r = i.getRangeAt(0);
                    e = r.startContainer, t = r.startOffset, n = r.endContainer, o = r.endOffset
                } else {
                    var a = document.selection.createRange(),
                        s = a.duplicate();
                    s.collapse(!1);
                    var l = a;
                    l.collapse(!0);
                    var d = Mh(l, !0),
                        c = Mh(s, !1);
                    dom.isText(d.node) && dom.isLeftEdgePoint(d) && dom.isTextNode(c.node) && dom.isRightEdgePoint(c) && c.node.nextSibling === d.node && (d = c), e = d.cont, t = d.offset, n = c.cont, o = c.offset
                }
                return new Oh(e, t, n, o)
            },
            createFromNode: function (e) {
                var t = e,
                    n = 0,
                    o = e,
                    i = dom.nodeLength(o);
                return dom.isVoid(t) && (n = dom.listPrev(t).length - 1, t = t.parentNode), dom.isBR(o) ? (i = dom.listPrev(o).length - 1, o = o.parentNode) : dom.isVoid(o) && (i = dom.listPrev(o).length, o = o.parentNode), this.create(t, n, o, i)
            },
            createFromNodeBefore: function (e) {
                return this.createFromNode(e).collapse(!0)
            },
            createFromNodeAfter: function (e) {
                return this.createFromNode(e).collapse()
            },
            createFromBookmark: function (e, t) {
                var n = dom.fromOffsetPath(e, t.s.path),
                    o = t.s.offset,
                    i = dom.fromOffsetPath(e, t.e.path),
                    r = t.e.offset;
                return new Oh(n, o, i, r)
            },
            createFromParaBookmark: function (e, t) {
                var n = e.s.offset,
                    o = e.e.offset,
                    i = dom.fromOffsetPath(list.head(t), e.s.path),
                    r = dom.fromOffsetPath(list.last(t), e.e.path);
                return new Oh(i, n, r, o)
            }
        }),
        async = {
            readFileAsDataURL: function (e) {
                return $.Deferred(function (n) {
                    $.extend(new FileReader, {
                        onload: function (e) {
                            var t = e.target.result;
                            n.resolve(t)
                        },
                        onerror: function () {
                            n.reject(this)
                        }
                    }).readAsDataURL(e)
                }).promise()
            },
            createImage: function (n) {
                return $.Deferred(function (e) {
                    var t = $("<img>");
                    t.one("load", function () {
                        t.off("error abort"), e.resolve(t)
                    }).one("error abort", function () {
                        t.off("load").detach(), e.reject(t)
                    }).css({
                        display: "none"
                    }).appendTo(document.body).attr("src", n)
                }).promise()
            }
        }, History = function (t) {
            var n = [],
                o = -1,
                i = t[0],
                e = function (e) {
                    null !== e.contents && t.html(e.contents), null !== e.bookmark && range.createFromBookmark(i, e.bookmark).select()
                };
            this.rewind = function () {
                t.html() !== n[o].contents && this.recordUndo(), e(n[o = 0])
            }, this.reset = function () {
                n = [], o = -1, t.html(""), this.recordUndo()
            }, this.undo = function () {
                t.html() !== n[o].contents && this.recordUndo(), 0 < o && e(n[--o])
            }, this.redo = function () {
                n.length - 1 > o && e(n[++o])
            }, this.recordUndo = function () {
                var e;
                o++, n.length > o && (n = n.slice(0, o)), n.push((e = range.create(i), {
                    contents: t.html(),
                    bookmark: e ? e.bookmark(i) : {
                        s: {
                            path: [],
                            offset: 0
                        },
                        e: {
                            path: [],
                            offset: 0
                        }
                    }
                }))
            }
        }, Style = function () {
            this.fromNode = function (e) {
                var t = function (n, e) {
                    if (agent.jqueryVersion < 1.9) {
                        var o = {};
                        return $.each(e, function (e, t) {
                            o[t] = n.css(t)
                        }), o
                    }
                    return n.css.call(n, e)
                }(e, ["font-family", "font-size", "text-align", "list-style-type", "line-height"]) || {};
                return t["font-size"] = parseInt(t["font-size"], 10), t
            }, this.stylePara = function (e, n) {
                $.each(e.nodes(dom.isPara, {
                    includeAncestor: !0
                }), function (e, t) {
                    $(t).css(n)
                })
            }, this.styleNodes = function (e, t) {
                e = e.splitText();
                var n = t && t.nodeName || "SPAN",
                    o = !(!t || !t.expandClosestSibling),
                    i = !(!t || !t.onlyPartialContains);
                if (e.isCollapsed()) return [e.insertNode(dom.create(n))];
                var r = dom.makePredByNodeName(n),
                    a = e.nodes(dom.isText, {
                        fullyContains: !0
                    }).map(function (e) {
                        return dom.singleChildAncestor(e, r) || dom.wrap(e, n)
                    });
                if (o) {
                    if (i) {
                        var s = e.nodes();
                        r = func.and(r, function (e) {
                            return list.contains(s, e)
                        })
                    }
                    return a.map(function (e) {
                        var t = dom.withClosestSiblings(e, r),
                            n = list.head(t),
                            o = list.tail(t);
                        return $.each(o, function (e, t) {
                            dom.appendChildNodes(n, t.childNodes), dom.remove(t)
                        }), list.head(t)
                    })
                }
                return a
            }, this.current = function (e) {
                var t = $(dom.isElement(e.sc) ? e.sc : e.sc.parentNode),
                    n = this.fromNode(t);
                try {
                    n = $.extend(n, {
                        "font-bold": document.queryCommandState("bold") ? "bold" : "normal",
                        "font-italic": document.queryCommandState("italic") ? "italic" : "normal",
                        "font-underline": document.queryCommandState("underline") ? "underline" : "normal",
                        "font-subscript": document.queryCommandState("subscript") ? "subscript" : "normal",
                        "font-superscript": document.queryCommandState("superscript") ? "superscript" : "normal",
                        "font-strikethrough": document.queryCommandState("strikethrough") ? "strikethrough" : "normal"
                    })
                } catch (e) {}
                if (e.isOnList()) {
                    var o = -1 < $.inArray(n["list-style-type"], ["circle", "disc", "disc-leading-zero", "square"]);
                    n["list-style"] = o ? "unordered" : "ordered"
                } else n["list-style"] = "none";
                var i = dom.ancestor(e.sc, dom.isPara);
                if (i && i.style["line-height"]) n["line-height"] = i.style.lineHeight;
                else {
                    var r = parseInt(n["line-height"], 10) / parseInt(n["font-size"], 10);
                    n["line-height"] = r.toFixed(1)
                }
                return n.anchor = e.isOnAnchor() && dom.ancestor(e.sc, dom.isAnchor), n.ancestors = dom.listAncestor(e.sc, dom.isEditable), n.range = e, n
            }
        }, Bullet = function () {
            var l = this;
            this.insertOrderedList = function (e) {
                this.toggleList("OL", e)
            }, this.insertUnorderedList = function (e) {
                this.toggleList("UL", e)
            }, this.indent = function (e) {
                var o = this,
                    t = range.create(e).wrapBodyInlineWithPara(),
                    n = t.nodes(dom.isPara, {
                        includeAncestor: !0
                    }),
                    i = list.clusterBy(n, func.peq2("parentNode"));
                $.each(i, function (e, t) {
                    var n = list.head(t);
                    dom.isLi(n) ? o.wrapList(t, n.parentNode.nodeName) : $.each(t, function (e, t) {
                        $(t).css("marginLeft", function (e, t) {
                            return (parseInt(t, 10) || 0) + 25
                        })
                    })
                }), t.select()
            }, this.outdent = function (e) {
                var o = this,
                    t = range.create(e).wrapBodyInlineWithPara(),
                    n = t.nodes(dom.isPara, {
                        includeAncestor: !0
                    }),
                    i = list.clusterBy(n, func.peq2("parentNode"));
                $.each(i, function (e, t) {
                    var n = list.head(t);
                    dom.isLi(n) ? o.releaseList([t]) : $.each(t, function (e, t) {
                        $(t).css("marginLeft", function (e, t) {
                            return 25 < (t = parseInt(t, 10) || 0) ? t - 25 : ""
                        })
                    })
                }), t.select()
            }, this.toggleList = function (n, e) {
                var t = range.create(e).wrapBodyInlineWithPara(),
                    o = t.nodes(dom.isPara, {
                        includeAncestor: !0
                    }),
                    i = t.paraBookmark(o),
                    r = list.clusterBy(o, func.peq2("parentNode"));
                if (list.find(o, dom.isPurePara)) {
                    var a = [];
                    $.each(r, function (e, t) {
                        a = a.concat(l.wrapList(t, n))
                    }), o = a
                } else {
                    var s = t.nodes(dom.isList, {
                        includeAncestor: !0
                    }).filter(function (e) {
                        return !$.nodeName(e, n)
                    });
                    s.length ? $.each(s, function (e, t) {
                        dom.replace(t, n)
                    }) : o = this.releaseList(r, !0)
                }
                range.createFromParaBookmark(i, o).select()
            }, this.wrapList = function (e, t) {
                var n = list.head(e),
                    o = list.last(e),
                    i = dom.isList(n.previousSibling) && n.previousSibling,
                    r = dom.isList(o.nextSibling) && o.nextSibling,
                    a = i || dom.insertAfter(dom.create(t || "UL"), o);
                return e = e.map(function (e) {
                    return dom.isPurePara(e) ? dom.replace(e, "LI") : e
                }), dom.appendChildNodes(a, e), r && (dom.appendChildNodes(a, list.from(r.childNodes)), dom.remove(r)), e
            }, this.releaseList = function (e, l) {
                var d = [];
                return $.each(e, function (e, t) {
                    var n = list.head(t),
                        o = list.last(t),
                        i = l ? dom.lastAncestor(n, dom.isList) : n.parentNode,
                        r = 1 < i.childNodes.length ? dom.splitTree(i, {
                            node: o.parentNode,
                            offset: dom.position(o) + 1
                        }, {
                            isSkipPaddingBlankHTML: !0
                        }) : null,
                        a = dom.splitTree(i, {
                            node: n.parentNode,
                            offset: dom.position(n)
                        }, {
                            isSkipPaddingBlankHTML: !0
                        });
                    t = l ? dom.listDescendant(a, dom.isLi) : list.from(a.childNodes).filter(dom.isLi), (l || !dom.isList(i.parentNode)) && (t = t.map(function (e) {
                        return dom.replace(e, "P")
                    })), $.each(list.from(t).reverse(), function (e, t) {
                        dom.insertAfter(t, i)
                    });
                    var s = list.compact([i, a, r]);
                    $.each(s, function (e, t) {
                        var n = [t].concat(dom.listDescendant(t, dom.isList));
                        $.each(n.reverse(), function (e, t) {
                            dom.nodeLength(t) || dom.remove(t, !0)
                        })
                    }), d = d.concat(t)
                }), d
            }
        }, Typing = function () {
            var a = new Bullet;
            this.insertTab = function (e, t) {
                var n = dom.createText(new Array(t + 1).join(dom.NBSP_CHAR));
                (e = e.deleteContents()).insertNode(n, !0), (e = range.create(n, t)).select()
            }, this.insertParagraph = function (e) {
                var t = range.create(e);
                t = (t = t.deleteContents()).wrapBodyInlineWithPara();
                var n, o = dom.ancestor(t.sc, dom.isPara);
                if (o) {
                    if (dom.isEmpty(o) && dom.isLi(o)) return void a.toggleList(o.parentNode.nodeName);
                    if (dom.isEmpty(o) && dom.isPara(o) && dom.isBlockquote(o.parentNode)) dom.insertAfter(o, o.parentNode), n = o;
                    else {
                        n = dom.splitTree(o, t.getStartPoint());
                        var i = dom.listDescendant(o, dom.isEmptyAnchor);
                        i = i.concat(dom.listDescendant(n, dom.isEmptyAnchor)), $.each(i, function (e, t) {
                            dom.remove(t)
                        }), (dom.isHeading(n) || dom.isPre(n)) && dom.isEmpty(n) && (n = dom.replace(n, "p"))
                    }
                } else {
                    var r = t.sc.childNodes[t.so];
                    n = $(dom.emptyPara)[0], r ? t.sc.insertBefore(n, r) : t.sc.appendChild(n)
                }
                range.create(n, 0).normalize().select().scrollIntoView(e)
            }
        }, Table = function () {
            this.tab = function (e, t) {
                var n = dom.ancestor(e.commonAncestor(), dom.isCell),
                    o = dom.ancestor(n, dom.isTable),
                    i = dom.listDescendant(o, dom.isCell),
                    r = list[t ? "prev" : "next"](i, n);
                r && range.create(r, 0).select()
            }, this.createTable = function (e, t, n) {
                for (var o, i = [], r = 0; r < e; r++) i.push("<td>" + dom.blank + "</td>");
                o = i.join("");
                for (var a, s = [], l = 0; l < t; l++) s.push("<tr>" + o + "</tr>");
                a = s.join("");
                var d = $("<table>" + a + "</table>");
                return n && n.tableClassName && d.addClass(n.tableClassName), d[0]
            }
        }, KEY_BOGUS = "bogus", Editor = function (r) {
            var o = this,
                t = r.layoutInfo.note,
                n = r.layoutInfo.editor,
                i = r.layoutInfo.editable,
                c = r.options,
                a = c.langInfo,
                s = i[0],
                l = null,
                u = new Style,
                d = new Table,
                f = new Typing,
                e = new Bullet,
                h = new History(i);
            this.initialize = function () {
                i.on("keydown", function (e) {
                    e.keyCode === key.code.ENTER && r.triggerEvent("enter", e), r.triggerEvent("keydown", e), e.isDefaultPrevented() || (c.shortcuts ? o.handleKeyMap(e) : o.preventDefaultEditableShortCuts(e))
                }).on("keyup", function (e) {
                    r.triggerEvent("keyup", e)
                }).on("focus", function (e) {
                    r.triggerEvent("focus", e)
                }).on("blur", function (e) {
                    r.triggerEvent("blur", e)
                }).on("mousedown", function (e) {
                    r.triggerEvent("mousedown", e)
                }).on("mouseup", function (e) {
                    r.triggerEvent("mouseup", e)
                }).on("scroll", function (e) {
                    r.triggerEvent("scroll", e)
                }).on("paste", function (e) {
                    r.triggerEvent("paste", e)
                }), i.html(dom.html(t) || dom.emptyPara);
                var e = agent.isMSIE ? "DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted" : "input";
                i.on(e, func.debounce(function () {
                    r.triggerEvent("change", i.html())
                }, 250)), n.on("focusin", function (e) {
                    r.triggerEvent("focusin", e)
                }).on("focusout", function (e) {
                    r.triggerEvent("focusout", e)
                }), c.airMode || (c.width && n.outerWidth(c.width), c.height && i.outerHeight(c.height), c.maxHeight && i.css("max-height", c.maxHeight), c.minHeight && i.css("min-height", c.minHeight)), h.recordUndo()
            }, this.destroy = function () {
                i.off()
            }, this.handleKeyMap = function (e) {
                var t = c.keyMap[agent.isMac ? "mac" : "pc"],
                    n = [];
                e.metaKey && n.push("CMD"), e.ctrlKey && !e.altKey && n.push("CTRL"), e.shiftKey && n.push("SHIFT");
                var o = key.nameFromCode[e.keyCode];
                o && n.push(o);
                var i = t[n.join("+")];
                i ? (e.preventDefault(), r.invoke(i)) : key.isEdit(e.keyCode) && this.afterCommand()
            }, this.preventDefaultEditableShortCuts = function (e) {
                (e.ctrlKey || e.metaKey) && list.contains([66, 73, 85], e.keyCode) && e.preventDefault()
            }, this.createRange = function () {
                return this.focus(), range.create(s)
            }, this.saveRange = function (e) {
                l = this.createRange(), e && l.collapse().select()
            }, this.restoreRange = function () {
                l && (l.select(), this.focus())
            }, this.saveTarget = function (e) {
                i.data("target", e)
            }, this.clearTarget = function () {
                i.removeData("target")
            }, this.restoreTarget = function () {
                return i.data("target")
            }, this.currentStyle = function () {
                var e = range.create();
                return e && (e = e.normalize()), e ? u.current(e) : u.fromNode(i)
            }, this.styleFromNode = function (e) {
                return u.fromNode(e)
            }, this.undo = function () {
                r.triggerEvent("before.command", i.html()), h.undo(), r.triggerEvent("change", i.html())
            }, r.memo("help.undo", a.help.undo), this.redo = function () {
                r.triggerEvent("before.command", i.html()), h.redo(), r.triggerEvent("change", i.html())
            }, r.memo("help.redo", a.help.redo);
            for (var m = this.beforeCommand = function () {
                    r.triggerEvent("before.command", i.html()), o.focus()
                }, p = this.afterCommand = function (e) {
                    h.recordUndo(), e || r.triggerEvent("change", i.html())
                }, g = ["bold", "italic", "underline", "strikethrough", "superscript", "subscript", "justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "formatBlock", "removeFormat", "backColor", "foreColor", "fontName"], v = 0, b = g.length; v < b; v++) this[g[v]] = function (t) {
                return function (e) {
                    m(), document.execCommand(t, !1, e), p(!0)
                }
            }(g[v]), r.memo("help." + g[v], a.help[g[v]]);
            this.tab = function () {
                var e = this.createRange();
                e.isCollapsed() && e.isOnCell() ? d.tab(e) : (m(), f.insertTab(e, c.tabSize), p())
            }, r.memo("help.tab", a.help.tab), this.untab = function () {
                var e = this.createRange();
                e.isCollapsed() && e.isOnCell() && d.tab(e, !0)
            }, r.memo("help.untab", a.help.untab), this.wrapCommand = function (e) {
                return function () {
                    m(), e.apply(o, arguments), p()
                }
            }, this.insertParagraph = this.wrapCommand(function () {
                f.insertParagraph(s)
            }), r.memo("help.insertParagraph", a.help.insertParagraph), this.insertOrderedList = this.wrapCommand(function () {
                e.insertOrderedList(s)
            }), r.memo("help.insertOrderedList", a.help.insertOrderedList), this.insertUnorderedList = this.wrapCommand(function () {
                e.insertUnorderedList(s)
            }), r.memo("help.insertUnorderedList", a.help.insertUnorderedList), this.indent = this.wrapCommand(function () {
                e.indent(s)
            }), r.memo("help.indent", a.help.indent), this.outdent = this.wrapCommand(function () {
                e.outdent(s)
            }), r.memo("help.outdent", a.help.outdent), this.insertImage = function (e, t) {
                return async.createImage(e, t).then(function (e) {
                    m(), "function" == typeof t ? t(e) : ("string" == typeof t && e.attr("data-filename", t), e.css("width", Math.min(i.width(), e.width()))), e.show(), range.create(s).insertNode(e[0]), range.createFromNodeAfter(e[0]).select(), p()
                }).fail(function (e) {
                    r.triggerEvent("image.upload.error", e)
                })
            }, this.insertImages = function (e) {
                $.each(e, function (e, t) {
                    var n = t.name;
                    c.maximumImageFileSize && c.maximumImageFileSize < t.size ? r.triggerEvent("image.upload.error", a.image.maximumFileSizeError) : async.readFileAsDataURL(t).then(function (e) {
                        return o.insertImage(e, n)
                    }).fail(function () {
                        r.triggerEvent("image.upload.error")
                    })
                })
            }, this.insertImagesOrCallback = function (e) {
                c.callbacks.onImageUpload ? r.triggerEvent("image.upload", e) : this.insertImages(e)
            }, this.insertNode = this.wrapCommand(function (e) {
                this.createRange().insertNode(e), range.createFromNodeAfter(e).select()
            }), this.insertText = this.wrapCommand(function (e) {
                var t = this.createRange().insertNode(dom.createText(e));
                range.create(t, dom.nodeLength(t)).select()
            }), this.getSelectedText = function () {
                var e = this.createRange();
                return e.isOnAnchor() && (e = range.createFromNode(dom.ancestor(e.sc, dom.isAnchor))), e.toString()
            }, this.pasteHTML = this.wrapCommand(function (e) {
                var t = this.createRange().pasteHTML(e);
                range.createFromNodeAfter(list.last(t)).select()
            }), this.formatBlock = this.wrapCommand(function (e) {
                e = agent.isMSIE ? "<" + e + ">" : e, document.execCommand("FormatBlock", !1, e)
            }), this.formatPara = function () {
                this.formatBlock("P")
            }, r.memo("help.formatPara", a.help.formatPara);
            for (v = 1; v <= 6; v++) this["formatH" + v] = function (e) {
                return function () {
                    this.formatBlock("H" + e)
                }
            }(v), r.memo("help.formatH" + v, a.help["formatH" + v]);
            this.fontSize = function (e) {
                var t = this.createRange();
                if (t && t.isCollapsed()) {
                    var n = u.styleNodes(t),
                        o = list.head(n);
                    $(n).css({
                        "font-size": e + "px"
                    }), o && !dom.nodeLength(o) && (o.innerHTML = dom.ZERO_WIDTH_NBSP_CHAR, range.createFromNodeAfter(o.firstChild).select(), i.data(KEY_BOGUS, o))
                } else m(), $(u.styleNodes(t)).css({
                    "font-size": e + "px"
                }), p()
            }, this.insertHorizontalRule = this.wrapCommand(function () {
                var e = this.createRange().insertNode(dom.create("HR"));
                e.nextSibling && range.create(e.nextSibling, 0).normalize().select()
            }), r.memo("help.insertHorizontalRule", a.help.insertHorizontalRule), this.removeBogus = function () {
                var e = i.data(KEY_BOGUS);
                if (e) {
                    var t = list.find(list.from(e.childNodes), dom.isText),
                        n = t.nodeValue.indexOf(dom.ZERO_WIDTH_NBSP_CHAR); - 1 !== n && t.deleteData(n, 1), dom.isEmpty(e) && dom.remove(e), i.removeData(KEY_BOGUS)
                }
            }, this.lineHeight = this.wrapCommand(function (e) {
                u.stylePara(this.createRange(), {
                    lineHeight: e
                })
            }), this.unlink = function () {
                var e = this.createRange();
                if (e.isOnAnchor()) {
                    var t = dom.ancestor(e.sc, dom.isAnchor);
                    (e = range.createFromNode(t)).select(), m(), document.execCommand("unlink"), p()
                }
            }, this.createLink = this.wrapCommand(function (e) {
                var n = e.url,
                    t = e.text,
                    o = e.isNewWindow,
                    i = e.range || this.createRange(),
                    r = i.toString() !== t;
                "string" == typeof n && (n = n.trim()), c.onCreateLink && (n = c.onCreateLink(n));
                var a = [];
                if (r) {
                    var s = (i = i.deleteContents()).insertNode($("<A>" + t + "</A>")[0]);
                    a.push(s)
                } else a = u.styleNodes(i, {
                    nodeName: "A",
                    expandClosestSibling: !0,
                    onlyPartialContains: !0
                });
                $.each(a, function (e, t) {
                    n = /^[A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?/.test(n) ? n : "http://" + n, $(t).attr("href", n), o ? $(t).attr("target", "_blank") : $(t).removeAttr("target")
                });
                var l = range.createFromNodeBefore(list.head(a)).getStartPoint(),
                    d = range.createFromNodeAfter(list.last(a)).getEndPoint();
                range.create(l.node, l.offset, d.node, d.offset).select()
            }), this.getLinkInfo = function () {
                var e = this.createRange().expand(dom.isAnchor),
                    t = $(list.head(e.nodes(dom.isAnchor)));
                return {
                    range: e,
                    text: e.toString(),
                    isNewWindow: !!t.length && "_blank" === t.attr("target"),
                    url: t.length ? t.attr("href") : ""
                }
            }, this.color = this.wrapCommand(function (e) {
                var t = e.foreColor,
                    n = e.backColor;
                t && document.execCommand("foreColor", !1, t), n && document.execCommand("backColor", !1, n)
            }), this.insertTable = this.wrapCommand(function (e) {
                var t = e.split("x");
                this.createRange().deleteContents().insertNode(d.createTable(t[0], t[1], c))
            }), this.floatMe = this.wrapCommand(function (e) {
                $(this.restoreTarget()).css("float", e)
            }), this.resize = this.wrapCommand(function (e) {
                $(this.restoreTarget()).css({
                    width: 100 * e + "%",
                    height: ""
                })
            }), this.resizeTo = function (e, t, n) {
                var o;
                if (n) {
                    var i = e.y / e.x,
                        r = t.data("ratio");
                    o = {
                        width: i < r ? e.x : e.y / r,
                        height: i < r ? e.x * r : e.y
                    }
                } else o = {
                    width: e.x,
                    height: e.y
                };
                t.css(o)
            }, this.removeMedia = this.wrapCommand(function () {
                var e = $(this.restoreTarget()).detach();
                r.triggerEvent("media.delete", e, i)
            }), this.hasFocus = function () {
                return i.is(":focus")
            }, this.focus = function () {
                this.hasFocus() || i.focus()
            }, this.isEmpty = function () {
                return dom.isEmpty(i[0]) || dom.emptyPara === i.html()
            }, this.empty = function () {
                r.invoke("code", dom.emptyPara)
            }
        }, Clipboard = function (s) {
            var n = this,
                e = s.layoutInfo.editable;
            this.events = {
                "summernote.keydown": function (e, t) {
                    n.needKeydownHook() && (t.ctrlKey || t.metaKey) && t.keyCode === key.code.V && (s.invoke("editor.saveRange"), n.$paste.focus(), setTimeout(function () {
                        n.pasteByHook()
                    }, 0))
                }
            }, this.needKeydownHook = function () {
                return agent.isMSIE && 10 < agent.browserVersion || agent.isFF
            }, this.initialize = function () {
                this.needKeydownHook() ? (this.$paste = $('<div tabindex="-1" />').attr("contenteditable", !0).css({
                    position: "absolute",
                    left: -1e5,
                    opacity: 0
                }), e.before(this.$paste), this.$paste.on("paste", function (e) {
                    s.triggerEvent("paste", e)
                })) : e.on("paste", this.pasteByEvent)
            }, this.destroy = function () {
                this.needKeydownHook() && (this.$paste.remove(), this.$paste = null)
            }, this.pasteByHook = function () {
                var e = this.$paste[0].firstChild;
                if (dom.isImg(e)) {
                    for (var t = e.src, n = atob(t.split(",")[1]), o = new Uint8Array(n.length), i = 0; i < n.length; i++) o[i] = n.charCodeAt(i);
                    var r = new Blob([o], {
                        type: "image/png"
                    });
                    r.name = "clipboard.png", s.invoke("editor.restoreRange"), s.invoke("editor.focus"), s.invoke("editor.insertImagesOrCallback", [r])
                } else {
                    var a = $("<div />").html(this.$paste.html()).html();
                    s.invoke("editor.restoreRange"), s.invoke("editor.focus"), a && s.invoke("editor.pasteHTML", a)
                }
                this.$paste.empty()
            }, this.pasteByEvent = function (e) {
                var t = e.originalEvent.clipboardData;
                if (t && t.items && t.items.length) {
                    var n = list.head(t.items);
                    "file" === n.kind && -1 !== n.type.indexOf("image/") && s.invoke("editor.insertImagesOrCallback", [n.getAsFile()]), s.invoke("editor.afterCommand")
                }
            }
        }, Dropzone = function (r) {
            var t = $(document),
                a = r.layoutInfo.editor,
                n = r.layoutInfo.editable,
                e = r.options,
                s = e.langInfo,
                l = {},
                d = $(['<div class="note-dropzone">', '  <div class="note-dropzone-message"/>', "</div>"].join("")).prependTo(a);
            this.initialize = function () {
                e.disableDragAndDrop ? (l.onDrop = function (e) {
                    e.preventDefault()
                }, t.on("drop", l.onDrop)) : this.attachDragAndDropEvent()
            }, this.attachDragAndDropEvent = function () {
                var o = $(),
                    i = d.find(".note-dropzone-message");
                l.onDragenter = function (e) {
                    var t = r.invoke("codeview.isActivated"),
                        n = 0 < a.width() && 0 < a.height();
                    t || o.length || !n || (a.addClass("dragover"), d.width(a.width()), d.height(a.height()), i.text(s.image.dragImageHere)), o = o.add(e.target)
                }, l.onDragleave = function (e) {
                    (o = o.not(e.target)).length || a.removeClass("dragover")
                }, l.onDrop = function () {
                    o = $(), a.removeClass("dragover")
                }, t.on("dragenter", l.onDragenter).on("dragleave", l.onDragleave).on("drop", l.onDrop), d.on("dragenter", function () {
                    d.addClass("hover"), i.text(s.image.dropImage)
                }).on("dragleave", function () {
                    d.removeClass("hover"), i.text(s.image.dragImageHere)
                }), d.on("drop", function (e) {
                    var o = e.originalEvent.dataTransfer;
                    o && o.files && o.files.length ? (e.preventDefault(), n.focus(), r.invoke("editor.insertImagesOrCallback", o.files)) : $.each(o.types, function (e, t) {
                        var n = o.getData(t); - 1 < t.toLowerCase().indexOf("text") ? r.invoke("editor.pasteHTML", n) : $(n).each(function () {
                            r.invoke("editor.insertNode", this)
                        })
                    })
                }).on("dragover", !1)
            }, this.destroy = function () {
                Object.keys(l).forEach(function (e) {
                    t.off(e.substr(2).toLowerCase(), l[e])
                }), l = {}
            }
        }, CodeMirror, Mh, Nh, Oh, Jh;
    agent.hasCodeMirror && (agent.isSupportAmd ? require(["codemirror"], function (e) {
        CodeMirror = e
    }) : CodeMirror = window.CodeMirror);
    var Codeview = function (o) {
            var i = o.layoutInfo.editor,
                r = o.layoutInfo.editable,
                a = o.layoutInfo.codable,
                s = o.options;
            this.sync = function () {
                this.isActivated() && agent.hasCodeMirror && a.data("cmEditor").save()
            }, this.isActivated = function () {
                return i.hasClass("codeview")
            }, this.toggle = function () {
                this.isActivated() ? this.deactivate() : this.activate(), o.triggerEvent("codeview.toggled")
            }, this.activate = function () {
                if (a.val(dom.html(r, s.prettifyHtml)), a.height(r.height()), o.invoke("toolbar.updateCodeview", !0), i.addClass("codeview"), a.focus(), agent.hasCodeMirror) {
                    var e = CodeMirror.fromTextArea(a[0], s.codemirror);
                    if (s.codemirror.tern) {
                        var t = new CodeMirror.TernServer(s.codemirror.tern);
                        e.ternServer = t, e.on("cursorActivity", function (e) {
                            t.updateArgHints(e)
                        })
                    }
                    e.setSize(null, r.outerHeight()), a.data("cmEditor", e)
                }
            }, this.deactivate = function () {
                if (agent.hasCodeMirror) {
                    var e = a.data("cmEditor");
                    a.val(e.getValue()), e.toTextArea()
                }
                var t = dom.value(a, s.prettifyHtml) || dom.emptyPara,
                    n = r.html() !== t;
                r.html(t), r.height(s.height ? a.height() : "auto"), i.removeClass("codeview"), n && o.triggerEvent("change", r.html(), r), r.focus(), o.invoke("toolbar.updateCodeview", !1)
            }, this.destroy = function () {
                this.isActivated() && this.deactivate()
            }
        },
        EDITABLE_PADDING = 24,
        Statusbar = function (e) {
            var t = $(document),
                n = e.layoutInfo.statusbar,
                o = e.layoutInfo.editable,
                i = e.options;
            this.initialize = function () {
                i.airMode || i.disableResizeEditor || n.on("mousedown", function (e) {
                    e.preventDefault(), e.stopPropagation();
                    var n = o.offset().top - t.scrollTop();
                    t.on("mousemove", function (e) {
                        var t = e.clientY - (n + EDITABLE_PADDING);
                        t = 0 < i.minheight ? Math.max(t, i.minheight) : t, t = 0 < i.maxHeight ? Math.min(t, i.maxHeight) : t, o.height(t)
                    }).one("mouseup", function () {
                        t.off("mousemove")
                    })
                })
            }, this.destroy = function () {
                n.off(), n.remove()
            }
        },
        Fullscreen = function (t) {
            var n = t.layoutInfo.editor,
                o = t.layoutInfo.toolbar,
                i = t.layoutInfo.editable,
                r = t.layoutInfo.codable,
                a = $(window),
                s = $("html, body");
            this.toggle = function () {
                var e = function (e) {
                    i.css("height", e.h), r.css("height", e.h), r.data("cmeditor") && r.data("cmeditor").setsize(null, e.h)
                };
                n.toggleClass("fullscreen"), this.isFullscreen() ? (i.data("orgHeight", i.css("height")), a.on("resize", function () {
                    e({
                        h: a.height() - o.outerHeight()
                    })
                }).trigger("resize"), s.css("overflow", "hidden")) : (a.off("resize"), e({
                    h: i.data("orgHeight")
                }), s.css("overflow", "visible")), t.invoke("toolbar.updateFullscreen", this.isFullscreen())
            }, this.isFullscreen = function () {
                return n.hasClass("fullscreen")
            }
        },
        Handle = function (s) {
            var i = this,
                r = $(document),
                e = s.layoutInfo.editingArea,
                t = s.options;
            this.events = {
                "summernote.mousedown": function (e, t) {
                    i.update(t.target) && t.preventDefault()
                },
                "summernote.keyup summernote.scroll summernote.change summernote.dialog.shown": function () {
                    i.update()
                }
            }, this.initialize = function () {
                this.$handle = $(['<div class="note-handle">', '<div class="note-control-selection">', '<div class="note-control-selection-bg"></div>', '<div class="note-control-holder note-control-nw"></div>', '<div class="note-control-holder note-control-ne"></div>', '<div class="note-control-holder note-control-sw"></div>', '<div class="', t.disableResizeImage ? "note-control-holder" : "note-control-sizing", ' note-control-se"></div>', t.disableResizeImage ? "" : '<div class="note-control-selection-info"></div>', "</div>", "</div>"].join("")).prependTo(e), this.$handle.on("mousedown", function (e) {
                    if (dom.isControlSizing(e.target)) {
                        e.preventDefault(), e.stopPropagation();
                        var t = i.$handle.find(".note-control-selection").data("target"),
                            n = t.offset(),
                            o = r.scrollTop();
                        r.on("mousemove", function (e) {
                            s.invoke("editor.resizeTo", {
                                x: e.clientX - n.left,
                                y: e.clientY - (n.top - o)
                            }, t, !e.shiftKey), i.update(t[0])
                        }).one("mouseup", function (e) {
                            e.preventDefault(), r.off("mousemove"), s.invoke("editor.afterCommand")
                        }), t.data("ratio") || t.data("ratio", t.height() / t.width())
                    }
                })
            }, this.destroy = function () {
                this.$handle.remove()
            }, this.update = function (e) {
                var t = dom.isImg(e),
                    n = this.$handle.find(".note-control-selection");
                if (s.invoke("imagePopover.update", e), t) {
                    var o = $(e),
                        i = o.position(),
                        r = {
                            w: o.outerWidth(!0),
                            h: o.outerHeight(!0)
                        };
                    n.css({
                        display: "block",
                        left: i.left,
                        top: i.top,
                        width: r.w,
                        height: r.h
                    }).data("target", o);
                    var a = r.w + "x" + r.h;
                    n.find(".note-control-selection-info").text(a), s.invoke("editor.saveTarget", e)
                } else this.hide();
                return t
            }, this.hide = function () {
                s.invoke("editor.clearTarget"), this.$handle.children().hide()
            }
        },
        AutoLink = function (i) {
            var n = this,
                r = /^([A-Za-z][A-Za-z0-9+-.]*\:[\/\/]?|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i;
            this.events = {
                "summernote.keyup": function (e, t) {
                    t.isDefaultPrevented() || n.handleKeyup(t)
                },
                "summernote.keydown": function (e, t) {
                    n.handleKeydown(t)
                }
            }, this.initialize = function () {
                this.lastWordRange = null
            }, this.destroy = function () {
                this.lastWordRange = null
            }, this.replace = function () {
                if (this.lastWordRange) {
                    var e = this.lastWordRange.toString(),
                        t = e.match(r);
                    if (t && (t[1] || t[2])) {
                        var n = t[1] ? e : "http://" + e,
                            o = $("<a />").html(e).attr("href", n)[0];
                        this.lastWordRange.insertNode(o), this.lastWordRange = null, i.invoke("editor.focus")
                    }
                }
            }, this.handleKeydown = function (e) {
                if (list.contains([key.code.ENTER, key.code.SPACE], e.keyCode)) {
                    var t = i.invoke("editor.createRange").getWordRange();
                    this.lastWordRange = t
                }
            }, this.handleKeyup = function (e) {
                list.contains([key.code.ENTER, key.code.SPACE], e.keyCode) && this.replace()
            }
        },
        AutoSync = function (e) {
            var t = e.layoutInfo.note;
            this.events = {
                "summernote.change": function () {
                    t.val(e.invoke("code"))
                }
            }, this.shouldInitialize = function () {
                return dom.isTextarea(t[0])
            }
        },
        Placeholder = function (t) {
            var e = this,
                n = t.layoutInfo.editingArea,
                o = t.options;
            this.events = {
                "summernote.init summernote.change": function () {
                    e.update()
                },
                "summernote.codeview.toggled": function () {
                    e.update()
                }
            }, this.shouldInitialize = function () {
                return !!o.placeholder
            }, this.initialize = function () {
                this.$placeholder = $('<div class="note-placeholder">'), this.$placeholder.on("click", function () {
                    t.invoke("focus")
                }).text(o.placeholder).prependTo(n)
            }, this.destroy = function () {
                this.$placeholder.remove()
            }, this.update = function () {
                var e = !t.invoke("codeview.isActivated") && t.invoke("editor.isEmpty");
                this.$placeholder.toggle(e)
            }
        },
        Buttons = function (u) {
            var a = this,
                f = $.summernote.ui,
                r = u.layoutInfo.toolbar,
                c = u.options,
                s = c.langInfo,
                n = func.invertObject(c.keyMap[agent.isMac ? "mac" : "pc"]),
                l = this.representShortcut = function (e) {
                    var t = n[e];
                    return c.shortcuts && t ? (agent.isMac && (t = t.replace("CMD", "⌘").replace("SHIFT", "⇧")), " (" + (t = t.replace("BACKSLASH", "\\").replace("SLASH", "/").replace("LEFTBRACKET", "[").replace("RIGHTBRACKET", "]")) + ")") : ""
                };
            this.initialize = function () {
                this.addToolbarButtons(), this.addImagePopoverButtons(), this.addLinkPopoverButtons(), this.fontInstalledMap = {}
            }, this.destroy = function () {
                delete this.fontInstalledMap
            }, this.isFontInstalled = function (e) {
                return a.fontInstalledMap.hasOwnProperty(e) || (a.fontInstalledMap[e] = agent.isFontInstalled(e) || list.contains(c.fontNamesIgnoreCheck, e)), a.fontInstalledMap[e]
            }, this.addToolbarButtons = function () {
                u.memo("button.style", function () {
                    return f.buttonGroup([f.button({
                        className: "dropdown-toggle",
                        contents: f.icon(c.icons.magic) + " " + f.icon(c.icons.caret, "span"),
                        tooltip: s.style.style,
                        data: {
                            toggle: "dropdown"
                        }
                    }), f.dropdown({
                        className: "dropdown-style",
                        items: u.options.styleTags,
                        template: function (e) {
                            "string" == typeof e && (e = {
                                tag: e,
                                title: s.style.hasOwnProperty(e) ? s.style[e] : e
                            });
                            var t = e.tag,
                                n = e.title;
                            return "<" + t + (e.style ? ' style="' + e.style + '" ' : "") + (e.className ? ' class="' + e.className + '"' : "") + ">" + n + "</" + t + ">"
                        },
                        click: u.createInvokeHandler("editor.formatBlock")
                    })]).render()
                }), u.memo("button.bold", function () {
                    return f.button({
                        className: "note-btn-bold",
                        contents: f.icon(c.icons.bold),
                        tooltip: s.font.bold + l("bold"),
                        click: u.createInvokeHandler("editor.bold")
                    }).render()
                }), u.memo("button.italic", function () {
                    return f.button({
                        className: "note-btn-italic",
                        contents: f.icon(c.icons.italic),
                        tooltip: s.font.italic + l("italic"),
                        click: u.createInvokeHandler("editor.italic")
                    }).render()
                }), u.memo("button.underline", function () {
                    return f.button({
                        className: "note-btn-underline",
                        contents: f.icon(c.icons.underline),
                        tooltip: s.font.underline + l("underline"),
                        click: u.createInvokeHandler("editor.underline")
                    }).render()
                }), u.memo("button.clear", function () {
                    return f.button({
                        contents: f.icon(c.icons.eraser),
                        tooltip: s.font.clear + l("removeFormat"),
                        click: u.createInvokeHandler("editor.removeFormat")
                    }).render()
                }), u.memo("button.strikethrough", function () {
                    return f.button({
                        className: "note-btn-strikethrough",
                        contents: f.icon(c.icons.strikethrough),
                        tooltip: s.font.strikethrough + l("strikethrough"),
                        click: u.createInvokeHandler("editor.strikethrough")
                    }).render()
                }), u.memo("button.superscript", function () {
                    return f.button({
                        className: "note-btn-superscript",
                        contents: f.icon(c.icons.superscript),
                        tooltip: s.font.superscript,
                        click: u.createInvokeHandler("editor.superscript")
                    }).render()
                }), u.memo("button.subscript", function () {
                    return f.button({
                        className: "note-btn-subscript",
                        contents: f.icon(c.icons.subscript),
                        tooltip: s.font.subscript,
                        click: u.createInvokeHandler("editor.subscript")
                    }).render()
                }), u.memo("button.fontname", function () {
                    return f.buttonGroup([f.button({
                        className: "dropdown-toggle",
                        contents: '<span class="note-current-fontname"/> ' + f.icon(c.icons.caret, "span"),
                        tooltip: s.font.name,
                        data: {
                            toggle: "dropdown"
                        }
                    }), f.dropdownCheck({
                        className: "dropdown-fontname",
                        checkClassName: c.icons.menuCheck,
                        items: c.fontNames.filter(a.isFontInstalled),
                        template: function (e) {
                            return '<span style="font-family:' + e + '">' + e + "</span>"
                        },
                        click: u.createInvokeHandler("editor.fontName")
                    })]).render()
                }), u.memo("button.fontsize", function () {
                    return f.buttonGroup([f.button({
                        className: "dropdown-toggle",
                        contents: '<span class="note-current-fontsize"/>' + f.icon(c.icons.caret, "span"),
                        tooltip: s.font.size,
                        data: {
                            toggle: "dropdown"
                        }
                    }), f.dropdownCheck({
                        className: "dropdown-fontsize",
                        checkClassName: c.icons.menuCheck,
                        items: c.fontSizes,
                        click: u.createInvokeHandler("editor.fontSize")
                    })]).render()
                }), u.memo("button.color", function () {
                    return f.buttonGroup({
                        className: "note-color",
                        children: [f.button({
                            className: "note-current-color-button",
                            contents: f.icon(c.icons.font + " note-recent-color"),
                            tooltip: s.color.recent,
                            click: function (e) {
                                var t = $(e.currentTarget);
                                u.invoke("editor.color", {
                                    backColor: t.attr("data-backColor"),
                                    foreColor: t.attr("data-foreColor")
                                })
                            },
                            callback: function (e) {
                                e.find(".note-recent-color").css("background-color", "#FFFF00"), e.attr("data-backColor", "#FFFF00")
                            }
                        }), f.button({
                            className: "dropdown-toggle",
                            contents: f.icon(c.icons.caret, "span"),
                            tooltip: s.color.more,
                            data: {
                                toggle: "dropdown"
                            }
                        }), f.dropdown({
                            items: ["<li>", '<div class="btn-group">', '  <div class="note-palette-title">' + s.color.background + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-default" data-event="backColor" data-value="inherit">', s.color.transparent, "    </button>", "  </div>", '  <div class="note-holder" data-event="backColor"/>', "</div>", '<div class="btn-group">', '  <div class="note-palette-title">' + s.color.foreground + "</div>", "  <div>", '    <button type="button" class="note-color-reset btn btn-default" data-event="removeFormat" data-value="foreColor">', s.color.resetToDefault, "    </button>", "  </div>", '  <div class="note-holder" data-event="foreColor"/>', "</div>", "</li>"].join(""),
                            callback: function (e) {
                                e.find(".note-holder").each(function () {
                                    var e = $(this);
                                    e.append(f.palette({
                                        colors: c.colors,
                                        eventName: e.data("event")
                                    }).render())
                                })
                            },
                            click: function (e) {
                                var t = $(e.target),
                                    n = t.data("event"),
                                    o = t.data("value");
                                if (n && o) {
                                    var i = "backColor" === n ? "background-color" : "color",
                                        r = t.closest(".note-color").find(".note-recent-color"),
                                        a = t.closest(".note-color").find(".note-current-color-button");
                                    r.css(i, o), a.attr("data-" + n, o), u.invoke("editor." + n, o)
                                }
                            }
                        })]
                    }).render()
                }), u.memo("button.ul", function () {
                    return f.button({
                        contents: f.icon(c.icons.unorderedlist),
                        tooltip: s.lists.unordered + l("insertUnorderedList"),
                        click: u.createInvokeHandler("editor.insertUnorderedList")
                    }).render()
                }), u.memo("button.ol", function () {
                    return f.button({
                        contents: f.icon(c.icons.orderedlist),
                        tooltip: s.lists.ordered + l("insertOrderedList"),
                        click: u.createInvokeHandler("editor.insertOrderedList")
                    }).render()
                });
                var e = f.button({
                        contents: f.icon(c.icons.alignLeft),
                        tooltip: s.paragraph.left + l("justifyLeft"),
                        click: u.createInvokeHandler("editor.justifyLeft")
                    }),
                    t = f.button({
                        contents: f.icon(c.icons.alignCenter),
                        tooltip: s.paragraph.center + l("justifyCenter"),
                        click: u.createInvokeHandler("editor.justifyCenter")
                    }),
                    n = f.button({
                        contents: f.icon(c.icons.alignRight),
                        tooltip: s.paragraph.right + l("justifyRight"),
                        click: u.createInvokeHandler("editor.justifyRight")
                    }),
                    o = f.button({
                        contents: f.icon(c.icons.alignJustify),
                        tooltip: s.paragraph.justify + l("justifyFull"),
                        click: u.createInvokeHandler("editor.justifyFull")
                    }),
                    i = f.button({
                        contents: f.icon(c.icons.outdent),
                        tooltip: s.paragraph.outdent + l("outdent"),
                        click: u.createInvokeHandler("editor.outdent")
                    }),
                    r = f.button({
                        contents: f.icon(c.icons.indent),
                        tooltip: s.paragraph.indent + l("indent"),
                        click: u.createInvokeHandler("editor.indent")
                    });
                u.memo("button.justifyLeft", func.invoke(e, "render")), u.memo("button.justifyCenter", func.invoke(t, "render")), u.memo("button.justifyRight", func.invoke(n, "render")), u.memo("button.justifyFull", func.invoke(o, "render")), u.memo("button.outdent", func.invoke(i, "render")), u.memo("button.indent", func.invoke(r, "render")), u.memo("button.paragraph", function () {
                    return f.buttonGroup([f.button({
                        className: "dropdown-toggle",
                        contents: f.icon(c.icons.alignLeft) + " " + f.icon(c.icons.caret, "span"),
                        tooltip: s.paragraph.paragraph,
                        data: {
                            toggle: "dropdown"
                        }
                    }), f.dropdown([f.buttonGroup({
                        className: "note-align",
                        children: [e, t, n, o]
                    }), f.buttonGroup({
                        className: "note-list",
                        children: [i, r]
                    })])]).render()
                }), u.memo("button.height", function () {
                    return f.buttonGroup([f.button({
                        className: "dropdown-toggle",
                        contents: f.icon(c.icons.textHeight) + " " + f.icon(c.icons.caret, "span"),
                        tooltip: s.font.height,
                        data: {
                            toggle: "dropdown"
                        }
                    }), f.dropdownCheck({
                        items: c.lineHeights,
                        checkClassName: c.icons.menuCheck,
                        className: "dropdown-line-height",
                        click: u.createInvokeHandler("editor.lineHeight")
                    })]).render()
                }), u.memo("button.table", function () {
                    return f.buttonGroup([f.button({
                        className: "dropdown-toggle",
                        contents: f.icon(c.icons.table) + " " + f.icon(c.icons.caret, "span"),
                        tooltip: s.table.table,
                        data: {
                            toggle: "dropdown"
                        }
                    }), f.dropdown({
                        className: "note-table",
                        items: ['<div class="note-dimension-picker">', '  <div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"/>', '  <div class="note-dimension-picker-highlighted"/>', '  <div class="note-dimension-picker-unhighlighted"/>', "</div>", '<div class="note-dimension-display">1 x 1</div>'].join("")
                    })], {
                        callback: function (e) {
                            e.find(".note-dimension-picker-mousecatcher").css({
                                width: c.insertTableMaxSize.col + "em",
                                height: c.insertTableMaxSize.row + "em"
                            }).mousedown(u.createInvokeHandler("editor.insertTable")).on("mousemove", a.tableMoveHandler)
                        }
                    }).render()
                }), u.memo("button.link", function () {
                    return f.button({
                        contents: f.icon(c.icons.link),
                        tooltip: s.link.link + l("linkDialog.show"),
                        click: u.createInvokeHandler("linkDialog.show")
                    }).render()
                }), u.memo("button.picture", function () {
                    return f.button({
                        contents: f.icon(c.icons.picture),
                        tooltip: s.image.image,
                        click: u.createInvokeHandler("imageDialog.show")
                    }).render()
                }), u.memo("button.video", function () {
                    return f.button({
                        contents: f.icon(c.icons.video),
                        tooltip: s.video.video,
                        click: u.createInvokeHandler("videoDialog.show")
                    }).render()
                }), u.memo("button.hr", function () {
                    return f.button({
                        contents: f.icon(c.icons.minus),
                        tooltip: s.hr.insert + l("insertHorizontalRule"),
                        click: u.createInvokeHandler("editor.insertHorizontalRule")
                    }).render()
                }), u.memo("button.fullscreen", function () {
                    return f.button({
                        className: "btn-fullscreen",
                        contents: f.icon(c.icons.arrowsAlt),
                        tooltip: s.options.fullscreen,
                        click: u.createInvokeHandler("fullscreen.toggle")
                    }).render()
                }), u.memo("button.codeview", function () {
                    return f.button({
                        className: "btn-codeview",
                        contents: f.icon(c.icons.code),
                        tooltip: s.options.codeview,
                        click: u.createInvokeHandler("codeview.toggle")
                    }).render()
                }), u.memo("button.redo", function () {
                    return f.button({
                        contents: f.icon(c.icons.redo),
                        tooltip: s.history.redo + l("redo"),
                        click: u.createInvokeHandler("editor.redo")
                    }).render()
                }), u.memo("button.undo", function () {
                    return f.button({
                        contents: f.icon(c.icons.undo),
                        tooltip: s.history.undo + l("undo"),
                        click: u.createInvokeHandler("editor.undo")
                    }).render()
                }), u.memo("button.help", function () {
                    return f.button({
                        contents: f.icon(c.icons.question),
                        tooltip: s.options.help,
                        click: u.createInvokeHandler("helpDialog.show")
                    }).render()
                })
            }, this.addImagePopoverButtons = function () {
                u.memo("button.imageSize100", function () {
                    return f.button({
                        contents: '<span class="note-fontsize-10">100%</span>',
                        tooltip: s.image.resizeFull,
                        click: u.createInvokeHandler("editor.resize", "1")
                    }).render()
                }), u.memo("button.imageSize50", function () {
                    return f.button({
                        contents: '<span class="note-fontsize-10">50%</span>',
                        tooltip: s.image.resizeHalf,
                        click: u.createInvokeHandler("editor.resize", "0.5")
                    }).render()
                }), u.memo("button.imageSize25", function () {
                    return f.button({
                        contents: '<span class="note-fontsize-10">25%</span>',
                        tooltip: s.image.resizeQuarter,
                        click: u.createInvokeHandler("editor.resize", "0.25")
                    }).render()
                }), u.memo("button.floatLeft", function () {
                    return f.button({
                        contents: f.icon(c.icons.alignLeft),
                        tooltip: s.image.floatLeft,
                        click: u.createInvokeHandler("editor.floatMe", "left")
                    }).render()
                }), u.memo("button.floatRight", function () {
                    return f.button({
                        contents: f.icon(c.icons.alignRight),
                        tooltip: s.image.floatRight,
                        click: u.createInvokeHandler("editor.floatMe", "right")
                    }).render()
                }), u.memo("button.floatNone", function () {
                    return f.button({
                        contents: f.icon(c.icons.alignJustify),
                        tooltip: s.image.floatNone,
                        click: u.createInvokeHandler("editor.floatMe", "none")
                    }).render()
                }), u.memo("button.removeMedia", function () {
                    return f.button({
                        contents: f.icon(c.icons.trash),
                        tooltip: s.image.remove,
                        click: u.createInvokeHandler("editor.removeMedia")
                    }).render()
                })
            }, this.addLinkPopoverButtons = function () {
                u.memo("button.linkDialogShow", function () {
                    return f.button({
                        contents: f.icon(c.icons.link),
                        tooltip: s.link.edit,
                        click: u.createInvokeHandler("linkDialog.show")
                    }).render()
                }), u.memo("button.unlink", function () {
                    return f.button({
                        contents: f.icon(c.icons.unlink),
                        tooltip: s.link.unlink,
                        click: u.createInvokeHandler("editor.unlink")
                    }).render()
                })
            }, this.build = function (e, t) {
                for (var n = 0, o = t.length; n < o; n++) {
                    for (var i = t[n], r = i[0], a = i[1], s = f.buttonGroup({
                            className: "note-" + r
                        }).render(), l = 0, d = a.length; l < d; l++) {
                        var c = u.memo("button." + a[l]);
                        c && s.append("function" == typeof c ? c(u) : c)
                    }
                    s.appendTo(e)
                }
            }, this.updateCurrentStyle = function () {
                var e = u.invoke("editor.currentStyle");
                if (this.updateBtnStates({
                        ".note-btn-bold": function () {
                            return "bold" === e["font-bold"]
                        },
                        ".note-btn-italic": function () {
                            return "italic" === e["font-italic"]
                        },
                        ".note-btn-underline": function () {
                            return "underline" === e["font-underline"]
                        },
                        ".note-btn-subscript": function () {
                            return "subscript" === e["font-subscript"]
                        },
                        ".note-btn-superscript": function () {
                            return "superscript" === e["font-superscript"]
                        },
                        ".note-btn-strikethrough": function () {
                            return "strikethrough" === e["font-strikethrough"]
                        }
                    }), e["font-family"]) {
                    var t = e["font-family"].split(",").map(function (e) {
                            return e.replace(/[\'\"]/g, "").replace(/\s+$/, "").replace(/^\s+/, "")
                        }),
                        n = list.find(t, a.isFontInstalled);
                    r.find(".dropdown-fontname li a").each(function () {
                        var e = $(this).data("value") + "" == n + "";
                        this.className = e ? "checked" : ""
                    }), r.find(".note-current-fontname").text(n)
                }
                if (e["font-size"]) {
                    var o = e["font-size"];
                    r.find(".dropdown-fontsize li a").each(function () {
                        var e = $(this).data("value") + "" == o + "";
                        this.className = e ? "checked" : ""
                    }), r.find(".note-current-fontsize").text(o)
                }
                if (e["line-height"]) {
                    var i = e["line-height"];
                    r.find(".dropdown-line-height li a").each(function () {
                        var e = $(this).data("value") + "" == i + "";
                        this.className = e ? "checked" : ""
                    })
                }
            }, this.updateBtnStates = function (e) {
                $.each(e, function (e, t) {
                    f.toggleBtnActive(r.find(e), t())
                })
            }, this.tableMoveHandler = function (e) {
                var t, n = $(e.target.parentNode),
                    o = n.next(),
                    i = n.find(".note-dimension-picker-mousecatcher"),
                    r = n.find(".note-dimension-picker-highlighted"),
                    a = n.find(".note-dimension-picker-unhighlighted");
                if (void 0 === e.offsetX) {
                    var s = $(e.target).offset();
                    t = {
                        x: e.pageX - s.left,
                        y: e.pageY - s.top
                    }
                } else t = {
                    x: e.offsetX,
                    y: e.offsetY
                };
                var l = Math.ceil(t.x / 18) || 1,
                    d = Math.ceil(t.y / 18) || 1;
                r.css({
                    width: l + "em",
                    height: d + "em"
                }), i.data("value", l + "x" + d), 3 < l && l < c.insertTableMaxSize.col && a.css({
                    width: l + 1 + "em"
                }), 3 < d && d < c.insertTableMaxSize.row && a.css({
                    height: d + 1 + "em"
                }), o.html(l + " x " + d)
            }
        },
        Toolbar = function (e) {
            var n = $.summernote.ui,
                t = e.layoutInfo.note,
                o = e.layoutInfo.toolbar,
                i = e.options;
            this.shouldInitialize = function () {
                return !i.airMode
            }, this.initialize = function () {
                i.toolbar = i.toolbar || [], i.toolbar.length ? e.invoke("buttons.build", o, i.toolbar) : o.hide(), i.toolbarContainer && o.appendTo(i.toolbarContainer), t.on("summernote.keyup summernote.mouseup summernote.change", function () {
                    e.invoke("buttons.updateCurrentStyle")
                }), e.invoke("buttons.updateCurrentStyle")
            }, this.destroy = function () {
                o.children().remove()
            }, this.updateFullscreen = function (e) {
                n.toggleBtnActive(o.find(".btn-fullscreen"), e)
            }, this.updateCodeview = function (e) {
                n.toggleBtnActive(o.find(".btn-codeview"), e), e ? this.deactivate() : this.activate()
            }, this.activate = function (e) {
                var t = o.find("button");
                e || (t = t.not(".btn-codeview")), n.toggleBtn(t, !0)
            }, this.deactivate = function (e) {
                var t = o.find("button");
                e || (t = t.not(".btn-codeview")), n.toggleBtn(t, !1)
            }
        },
        LinkDialog = function (l) {
            var d = this,
                c = $.summernote.ui,
                o = l.layoutInfo.editor,
                i = l.options,
                r = i.langInfo;
            this.initialize = function () {
                var e = i.dialogsInBody ? $(document.body) : o,
                    t = '<div class="form-group"><label>' + r.link.textToDisplay + '</label><input class="note-link-text form-control" type="text" /></div><div class="form-group"><label>' + r.link.url + '</label><input class="note-link-url form-control" type="text" value="http://" /></div>' + (i.disableLinkTarget ? "" : '<div class="checkbox"><label><input type="checkbox" checked> ' + r.link.openInNewWindow + "</label></div>"),
                    n = '<button href="javascript:void(0);" class="btn btn-primary note-link-btn disabled" disabled>' + r.link.insert + "</button>";
                this.$dialog = c.dialog({
                    className: "link-dialog",
                    title: r.link.insert,
                    fade: i.dialogsFade,
                    body: t,
                    footer: n
                }).render().appendTo(e)
            }, this.destroy = function () {
                c.hideDialog(this.$dialog), this.$dialog.remove()
            }, this.bindEnterKey = function (e, t) {
                e.on("keypress", function (e) {
                    e.keyCode === key.code.ENTER && t.trigger("click")
                })
            }, this.toggleLinkBtn = function (e, t, n) {
                c.toggleBtn(e, t.val() && n.val())
            }, this.showLinkDialog = function (s) {
                return $.Deferred(function (n) {
                    var o = d.$dialog.find(".note-link-text"),
                        i = d.$dialog.find(".note-link-url"),
                        r = d.$dialog.find(".note-link-btn"),
                        a = d.$dialog.find("input[type=checkbox]");
                    c.onDialogShown(d.$dialog, function () {
                        l.triggerEvent("dialog.shown"), s.url || (s.url = s.text), o.val(s.text);
                        var e = function () {
                            d.toggleLinkBtn(r, o, i), s.text = o.val()
                        };
                        o.on("input", e).on("paste", function () {
                            setTimeout(e, 0)
                        });
                        var t = function () {
                            d.toggleLinkBtn(r, o, i), s.text || o.val(i.val())
                        };
                        i.on("input", t).on("paste", function () {
                            setTimeout(t, 0)
                        }).val(s.url).trigger("focus"), d.toggleLinkBtn(r, o, i), d.bindEnterKey(i, r), d.bindEnterKey(o, r), a.prop("checked", s.isNewWindow), r.one("click", function (e) {
                            e.preventDefault(), n.resolve({
                                range: s.range,
                                url: i.val(),
                                text: o.val(),
                                isNewWindow: a.is(":checked")
                            }), d.$dialog.modal("hide")
                        })
                    }), c.onDialogHidden(d.$dialog, function () {
                        o.off("input paste keypress"), i.off("input paste keypress"), r.off("click"), "pending" === n.state() && n.reject()
                    }), c.showDialog(d.$dialog)
                }).promise()
            }, this.show = function () {
                var e = l.invoke("editor.getLinkInfo");
                l.invoke("editor.saveRange"), this.showLinkDialog(e).then(function (e) {
                    l.invoke("editor.restoreRange"), l.invoke("editor.createLink", e)
                }).fail(function () {
                    l.invoke("editor.restoreRange")
                })
            }, l.memo("help.linkDialog.show", i.langInfo.help["linkDialog.show"])
        },
        LinkPopover = function (i) {
            var e = this,
                t = $.summernote.ui,
                n = i.options;
            this.events = {
                "summernote.keyup summernote.mouseup summernote.change summernote.scroll": function () {
                    e.update()
                },
                "summernote.dialog.shown": function () {
                    e.hide()
                }
            }, this.shouldInitialize = function () {
                return !list.isEmpty(n.popover.link)
            }, this.initialize = function () {
                this.$popover = t.popover({
                    className: "note-link-popover",
                    callback: function (e) {
                        e.find(".popover-content").prepend('<span><a target="_blank"></a>&nbsp;</span>')
                    }
                }).render().appendTo("body");
                var e = this.$popover.find(".popover-content");
                i.invoke("buttons.build", e, n.popover.link)
            }, this.destroy = function () {
                this.$popover.remove()
            }, this.update = function () {
                if (i.invoke("editor.hasFocus")) {
                    var e = i.invoke("editor.createRange");
                    if (e.isCollapsed() && e.isOnAnchor()) {
                        var t = dom.ancestor(e.sc, dom.isAnchor),
                            n = $(t).attr("href");
                        this.$popover.find("a").attr("href", n).html(n);
                        var o = dom.posFromPlaceholder(t);
                        this.$popover.css({
                            display: "block",
                            left: o.left,
                            top: o.top
                        })
                    } else this.hide()
                } else this.hide()
            }, this.hide = function () {
                this.$popover.hide()
            }
        },
        ImageDialog = function (i) {
            var r = this,
                a = $.summernote.ui,
                s = i.layoutInfo.editor,
                l = i.options,
                d = l.langInfo;
            this.initialize = function () {
                var e = l.dialogsInBody ? $(document.body) : s,
                    t = "";
                if (l.maximumImageFileSize) {
                    var n = Math.floor(Math.log(l.maximumImageFileSize) / Math.log(1024)),
                        o = 1 * (l.maximumImageFileSize / Math.pow(1024, n)).toFixed(2) + " " + " KMGTP" [n] + "B";
                    t = "<small>" + d.image.maximumFileSize + " : " + o + "</small>"
                }
                var i = '<div class="form-group note-group-select-from-files"><label>' + d.image.selectFromFiles + '</label><input class="note-image-input form-control" type="file" name="files" accept="image/*" multiple="multiple" />' + t + '</div><div class="form-group note-group-image-url" style="overflow:auto;"><label>' + d.image.url + '</label><input class="note-image-url form-control col-md-12" type="text" /></div>',
                    r = '<button href="javascript:void(0);" class="btn btn-primary note-image-btn disabled" disabled>' + d.image.insert + "</button>";
                this.$dialog = a.dialog({
                    title: d.image.insert,
                    fade: l.dialogsFade,
                    body: i,
                    footer: r
                }).render().appendTo(e)
            }, this.destroy = function () {
                a.hideDialog(this.$dialog), this.$dialog.remove()
            }, this.bindEnterKey = function (e, t) {
                e.on("keypress", function (e) {
                    e.keyCode === key.code.ENTER && t.trigger("click")
                })
            }, this.show = function () {
                i.invoke("editor.saveRange"), this.showImageDialog().then(function (e) {
                    a.hideDialog(r.$dialog), i.invoke("editor.restoreRange"), "string" == typeof e ? i.invoke("editor.insertImage", e) : i.invoke("editor.insertImagesOrCallback", e)
                }).fail(function () {
                    i.invoke("editor.restoreRange")
                })
            }, this.showImageDialog = function () {
                return $.Deferred(function (t) {
                    var e = r.$dialog.find(".note-image-input"),
                        n = r.$dialog.find(".note-image-url"),
                        o = r.$dialog.find(".note-image-btn");
                    a.onDialogShown(r.$dialog, function () {
                        i.triggerEvent("dialog.shown"), e.replaceWith(e.clone().on("change", function () {
                            t.resolve(this.files || this.value)
                        }).val("")), o.click(function (e) {
                            e.preventDefault(), t.resolve(n.val())
                        }), n.on("keyup paste", function () {
                            var e = n.val();
                            a.toggleBtn(o, e)
                        }).val("").trigger("focus"), r.bindEnterKey(n, o)
                    }), a.onDialogHidden(r.$dialog, function () {
                        e.off("change"), n.off("keyup paste keypress"), o.off("click"), "pending" === t.state() && t.reject()
                    }), a.showDialog(r.$dialog)
                })
            }
        },
        ImagePopover = function (t) {
            var n = $.summernote.ui,
                o = t.options;
            this.shouldInitialize = function () {
                return !list.isEmpty(o.popover.image)
            }, this.initialize = function () {
                this.$popover = n.popover({
                    className: "note-image-popover"
                }).render().appendTo("body");
                var e = this.$popover.find(".popover-content");
                t.invoke("buttons.build", e, o.popover.image)
            }, this.destroy = function () {
                this.$popover.remove()
            }, this.update = function (e) {
                if (dom.isImg(e)) {
                    var t = dom.posFromPlaceholder(e);
                    this.$popover.css({
                        display: "block",
                        left: t.left,
                        top: t.top
                    })
                } else this.hide()
            }, this.hide = function () {
                this.$popover.hide()
            }
        },
        VideoDialog = function (i) {
            var r = this,
                a = $.summernote.ui,
                o = i.layoutInfo.editor,
                s = i.options,
                l = s.langInfo;
            this.initialize = function () {
                var e = s.dialogsInBody ? $(document.body) : o,
                    t = '<div class="form-group row-fluid"><label>' + l.video.url + ' <small class="text-muted">' + l.video.providers + '</small></label><input class="note-video-url form-control span12" type="text" /></div>',
                    n = '<button href="javascript:void(0);" class="btn btn-primary note-video-btn disabled" disabled>' + l.video.insert + "</button>";
                this.$dialog = a.dialog({
                    title: l.video.insert,
                    fade: s.dialogsFade,
                    body: t,
                    footer: n
                }).render().appendTo(e)
            }, this.destroy = function () {
                a.hideDialog(this.$dialog), this.$dialog.remove()
            }, this.bindEnterKey = function (e, t) {
                e.on("keypress", function (e) {
                    e.keyCode === key.code.ENTER && t.trigger("click")
                })
            }, this.createVideoNode = function (e) {
                var t, n = e.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/),
                    o = e.match(/(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/),
                    i = e.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
                    r = e.match(/\/\/(player\.)?vimeo\.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/),
                    a = e.match(/.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/),
                    s = e.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
                    l = e.match(/^.+.(mp4|m4v)$/),
                    d = e.match(/^.+.(ogg|ogv)$/),
                    c = e.match(/^.+.(webm)$/);
                if (n && 11 === n[1].length) {
                    var u = n[1];
                    t = $("<iframe>").attr("frameborder", 0).attr("src", "//www.youtube.com/embed/" + u).attr("width", "640").attr("height", "360")
                } else if (o && o[0].length) t = $("<iframe>").attr("frameborder", 0).attr("src", "https://instagram.com/p/" + o[1] + "/embed/").attr("width", "612").attr("height", "710").attr("scrolling", "no").attr("allowtransparency", "true");
                else if (i && i[0].length) t = $("<iframe>").attr("frameborder", 0).attr("src", i[0] + "/embed/simple").attr("width", "600").attr("height", "600").attr("class", "vine-embed");
                else if (r && r[3].length) t = $("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("src", "//player.vimeo.com/video/" + r[3]).attr("width", "640").attr("height", "360");
                else if (a && a[2].length) t = $("<iframe>").attr("frameborder", 0).attr("src", "//www.dailymotion.com/embed/video/" + a[2]).attr("width", "640").attr("height", "360");
                else if (s && s[1].length) t = $("<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>").attr("frameborder", 0).attr("height", "498").attr("width", "510").attr("src", "//player.youku.com/embed/" + s[1]);
                else {
                    if (!(l || d || c)) return !1;
                    t = $("<video controls>").attr("src", e).attr("width", "640").attr("height", "360")
                }
                return t.addClass("note-video-clip"), t[0]
            }, this.show = function () {
                var e = i.invoke("editor.getSelectedText");
                i.invoke("editor.saveRange"), this.showVideoDialog(e).then(function (e) {
                    a.hideDialog(r.$dialog), i.invoke("editor.restoreRange");
                    var t = r.createVideoNode(e);
                    t && i.invoke("editor.insertNode", t)
                }).fail(function () {
                    i.invoke("editor.restoreRange")
                })
            }, this.showVideoDialog = function (o) {
                return $.Deferred(function (t) {
                    var n = r.$dialog.find(".note-video-url"),
                        e = r.$dialog.find(".note-video-btn");
                    a.onDialogShown(r.$dialog, function () {
                        i.triggerEvent("dialog.shown"), n.val(o).on("input", function () {
                            a.toggleBtn(e, n.val())
                        }).trigger("focus"), e.click(function (e) {
                            e.preventDefault(), t.resolve(n.val())
                        }), r.bindEnterKey(n, e)
                    }), a.onDialogHidden(r.$dialog, function () {
                        n.off("input"), e.off("click"), "pending" === t.state() && t.reject()
                    }), a.showDialog(r.$dialog)
                })
            }
        },
        HelpDialog = function (i) {
            var t = this,
                n = $.summernote.ui,
                o = i.layoutInfo.editor,
                r = i.options,
                a = r.langInfo;
            this.createShortCutList = function () {
                var o = r.keyMap[agent.isMac ? "mac" : "pc"];
                return Object.keys(o).map(function (e) {
                    var t = o[e],
                        n = $('<div><div class="help-list-item"/></div>');
                    return n.append($("<label><kbd>" + e + "</kdb></label>").css({
                        width: 180,
                        "margin-right": 10
                    })).append($("<span/>").html(i.memo("help." + t) || t)), n.html()
                }).join("")
            }, this.initialize = function () {
                var e = r.dialogsInBody ? $(document.body) : o,
                    t = ['<p class="text-center">', '<a href="http://summernote.org/" target="_blank">Summernote 0.8.2</a> · ', '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ', '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>', "</p>"].join("");
                this.$dialog = n.dialog({
                    title: a.options.help,
                    fade: r.dialogsFade,
                    body: this.createShortCutList(),
                    footer: t,
                    callback: function (e) {
                        e.find(".modal-body").css({
                            "max-height": 300,
                            overflow: "scroll"
                        })
                    }
                }).render().appendTo(e)
            }, this.destroy = function () {
                n.hideDialog(this.$dialog), this.$dialog.remove()
            }, this.showHelpDialog = function () {
                return $.Deferred(function (e) {
                    n.onDialogShown(t.$dialog, function () {
                        i.triggerEvent("dialog.shown"), e.resolve()
                    }), n.showDialog(t.$dialog)
                }).promise()
            }, this.show = function () {
                i.invoke("editor.saveRange"), this.showHelpDialog().then(function () {
                    i.invoke("editor.restoreRange")
                })
            }
        },
        AirPopover = function (o) {
            var n = this,
                t = $.summernote.ui,
                i = o.options;
            this.events = {
                "summernote.keyup summernote.mouseup summernote.scroll": function () {
                    n.update()
                },
                "summernote.change summernote.dialog.shown": function () {
                    n.hide()
                },
                "summernote.focusout": function (e, t) {
                    agent.isFF || t.relatedTarget && dom.ancestor(t.relatedTarget, func.eq(n.$popover[0])) || n.hide()
                }
            }, this.shouldInitialize = function () {
                return i.airMode && !list.isEmpty(i.popover.air)
            }, this.initialize = function () {
                this.$popover = t.popover({
                    className: "note-air-popover"
                }).render().appendTo("body");
                var e = this.$popover.find(".popover-content");
                o.invoke("buttons.build", e, i.popover.air)
            }, this.destroy = function () {
                this.$popover.remove()
            }, this.update = function () {
                var e = o.invoke("editor.currentStyle");
                if (e.range && !e.range.isCollapsed()) {
                    var t = list.last(e.range.getClientRects());
                    if (t) {
                        var n = func.rect2bnd(t);
                        this.$popover.css({
                            display: "block",
                            left: Math.max(n.left + n.width / 2, 0) - 20,
                            top: n.top + n.height
                        })
                    }
                } else this.hide()
            }, this.hide = function () {
                this.$popover.hide()
            }
        },
        HintPopover = function (i) {
            var r = this,
                e = $.summernote.ui,
                t = i.options.hint || [],
                a = i.options.hintDirection || "bottom",
                s = $.isArray(t) ? t : [t];
            this.events = {
                "summernote.keyup": function (e, t) {
                    t.isDefaultPrevented() || r.handleKeyup(t)
                },
                "summernote.keydown": function (e, t) {
                    r.handleKeydown(t)
                },
                "summernote.dialog.shown": function () {
                    r.hide()
                }
            }, this.shouldInitialize = function () {
                return 0 < s.length
            }, this.initialize = function () {
                this.lastWordRange = null, this.$popover = e.popover({
                    className: "note-hint-popover",
                    hideArrow: !0,
                    direction: ""
                }).render().appendTo("body"), this.$popover.hide(), this.$content = this.$popover.find(".popover-content"), this.$content.on("click", ".note-hint-item", function () {
                    r.$content.find(".active").removeClass("active"), $(this).addClass("active"), r.replace()
                })
            }, this.destroy = function () {
                this.$popover.remove()
            }, this.selectItem = function (e) {
                this.$content.find(".active").removeClass("active"), e.addClass("active"), this.$content[0].scrollTop = e[0].offsetTop - this.$content.innerHeight() / 2
            }, this.moveDown = function () {
                var e = this.$content.find(".note-hint-item.active"),
                    t = e.next();
                if (t.length) this.selectItem(t);
                else {
                    var n = e.parent().next();
                    n.length || (n = this.$content.find(".note-hint-group").first()), this.selectItem(n.find(".note-hint-item").first())
                }
            }, this.moveUp = function () {
                var e = this.$content.find(".note-hint-item.active"),
                    t = e.prev();
                if (t.length) this.selectItem(t);
                else {
                    var n = e.parent().prev();
                    n.length || (n = this.$content.find(".note-hint-group").last()), this.selectItem(n.find(".note-hint-item").last())
                }
            }, this.replace = function () {
                var e = this.$content.find(".note-hint-item.active");
                if (e.length) {
                    var t = this.nodeFromItem(e);
                    this.lastWordRange.insertNode(t), range.createFromNode(t).collapse().select(), this.lastWordRange = null, this.hide(), i.invoke("editor.focus")
                }
            }, this.nodeFromItem = function (e) {
                var t = s[e.data("index")],
                    n = e.data("item"),
                    o = t.content ? t.content(n) : n;
                return "string" == typeof o && (o = dom.createText(o)), o
            }, this.createItemTemplates = function (o, e) {
                var i = s[o];
                return e.map(function (e, t) {
                    var n = $('<div class="note-hint-item"/>');
                    return n.append(i.template ? i.template(e) : e + ""), n.data({
                        index: o,
                        item: e
                    }), 0 === o && 0 === t && n.addClass("active"), n
                })
            }, this.handleKeydown = function (e) {
                this.$popover.is(":visible") && (e.keyCode === key.code.ENTER ? (e.preventDefault(), this.replace()) : e.keyCode === key.code.UP ? (e.preventDefault(), this.moveUp()) : e.keyCode === key.code.DOWN && (e.preventDefault(), this.moveDown()))
            }, this.searchKeyword = function (e, t, n) {
                var o = s[e];
                if (o && o.match.test(t) && o.search) {
                    var i = o.match.exec(t);
                    o.search(i[1], n)
                } else n()
            }, this.createGroup = function (t, e) {
                var n = $('<div class="note-hint-group note-hint-group-' + t + '"/>');
                return this.searchKeyword(t, e, function (e) {
                    (e = e || []).length && (n.html(r.createItemTemplates(t, e)), r.show())
                }), n
            }, this.handleKeyup = function (e) {
                if (list.contains([key.code.ENTER, key.code.UP, key.code.DOWN], e.keyCode)) {
                    if (e.keyCode === key.code.ENTER && this.$popover.is(":visible")) return
                } else {
                    var t = i.invoke("editor.createRange").getWordRange(),
                        n = t.toString();
                    if (s.length && n) {
                        this.$content.empty();
                        var o = func.rect2bnd(list.last(t.getClientRects()));
                        o && (this.$popover.hide(), this.lastWordRange = t, s.forEach(function (e, t) {
                            e.match.test(n) && r.createGroup(t, n).appendTo(r.$content)
                        }), "top" === a ? this.$popover.css({
                            left: o.left,
                            top: o.top - this.$popover.outerHeight() - 5
                        }) : this.$popover.css({
                            left: o.left,
                            top: o.top + o.height + 5
                        }))
                    } else this.hide()
                }
            }, this.show = function () {
                this.$popover.show()
            }, this.hide = function () {
                this.$popover.hide()
            }
        };
    $.summernote = $.extend($.summernote, {
        version: "0.8.2",
        ui: ui,
        dom: dom,
        plugins: {},
        options: {
            modules: {
                editor: Editor,
                clipboard: Clipboard,
                dropzone: Dropzone,
                codeview: Codeview,
                statusbar: Statusbar,
                fullscreen: Fullscreen,
                handle: Handle,
                hintPopover: HintPopover,
                autoLink: AutoLink,
                autoSync: AutoSync,
                placeholder: Placeholder,
                buttons: Buttons,
                toolbar: Toolbar,
                linkDialog: LinkDialog,
                linkPopover: LinkPopover,
                imageDialog: ImageDialog,
                imagePopover: ImagePopover,
                videoDialog: VideoDialog,
                helpDialog: HelpDialog,
                airPopover: AirPopover
            },
            buttons: {},
            lang: "en-US",
            toolbar: [
                ["style", ["style"]],
                ["font", ["bold", "underline", "clear"]],
                ["fontname", ["fontname"]],
                ["color", ["color"]],
                ["para", ["ul", "ol", "paragraph"]],
                ["table", ["table"]],
                ["insert", ["link", "picture", "video"]],
                ["view", ["fullscreen", "codeview", "help"]]
            ],
            popover: {
                image: [
                    ["imagesize", ["imageSize100", "imageSize50", "imageSize25"]],
                    ["float", ["floatLeft", "floatRight", "floatNone"]],
                    ["remove", ["removeMedia"]]
                ],
                link: [
                    ["link", ["linkDialogShow", "unlink"]]
                ],
                air: [
                    ["color", ["color"]],
                    ["font", ["bold", "underline", "clear"]],
                    ["para", ["ul", "paragraph"]],
                    ["table", ["table"]],
                    ["insert", ["link", "picture"]]
                ]
            },
            airMode: !1,
            width: null,
            height: null,
            focus: !1,
            tabSize: 4,
            styleWithSpan: !0,
            shortcuts: !0,
            textareaAutoSync: !0,
            direction: null,
            styleTags: ["p", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"],
            fontNames: ["Arial", "Arial Black", "Comic Sans MS", "Courier New", "Helvetica Neue", "Helvetica", "Impact", "HexaBita Grande", "Tahoma", "Times New Roman", "Verdana"],
            fontSizes: ["8", "9", "10", "11", "12", "14", "18", "24", "36"],
            colors: [
                ["#000000", "#424242", "#636363", "#9C9C94", "#CEC6CE", "#EFEFEF", "#F7F7F7", "#FFFFFF"],
                ["#FF0000", "#FF9C00", "#FFFF00", "#00FF00", "#00FFFF", "#0000FF", "#9C00FF", "#FF00FF"],
                ["#F7C6CE", "#FFE7CE", "#FFEFC6", "#D6EFD6", "#CEDEE7", "#CEE7F7", "#D6D6E7", "#E7D6DE"],
                ["#E79C9C", "#FFC69C", "#FFE79C", "#B5D6A5", "#A5C6CE", "#9CC6EF", "#B5A5D6", "#D6A5BD"],
                ["#E76363", "#F7AD6B", "#FFD663", "#94BD7B", "#73A5AD", "#6BADDE", "#8C7BC6", "#C67BA5"],
                ["#CE0000", "#E79439", "#EFC631", "#6BA54A", "#4A7B8C", "#3984C6", "#634AA5", "#A54A7B"],
                ["#9C0000", "#B56308", "#BD9400", "#397B21", "#104A5A", "#085294", "#311873", "#731842"],
                ["#630000", "#7B3900", "#846300", "#295218", "#083139", "#003163", "#21104A", "#4A1031"]
            ],
            lineHeights: ["1.0", "1.2", "1.4", "1.5", "1.6", "1.8", "2.0", "3.0"],
            tableClassName: "table table-bordered",
            insertTableMaxSize: {
                col: 10,
                row: 10
            },
            dialogsInBody: !1,
            dialogsFade: !1,
            maximumImageFileSize: null,
            callbacks: {
                onInit: null,
                onFocus: null,
                onBlur: null,
                onEnter: null,
                onKeyup: null,
                onKeydown: null,
                onImageUpload: null,
                onImageUploadError: null
            },
            codemirror: {
                mode: "text/html",
                htmlMode: !0,
                lineNumbers: !0
            },
            keyMap: {
                pc: {
                    ENTER: "insertParagraph",
                    "CTRL+Z": "undo",
                    "CTRL+Y": "redo",
                    TAB: "tab",
                    "SHIFT+TAB": "untab",
                    "CTRL+B": "bold",
                    "CTRL+I": "italic",
                    "CTRL+U": "underline",
                    "CTRL+SHIFT+S": "strikethrough",
                    "CTRL+BACKSLASH": "removeFormat",
                    "CTRL+SHIFT+L": "justifyLeft",
                    "CTRL+SHIFT+E": "justifyCenter",
                    "CTRL+SHIFT+R": "justifyRight",
                    "CTRL+SHIFT+J": "justifyFull",
                    "CTRL+SHIFT+NUM7": "insertUnorderedList",
                    "CTRL+SHIFT+NUM8": "insertOrderedList",
                    "CTRL+LEFTBRACKET": "outdent",
                    "CTRL+RIGHTBRACKET": "indent",
                    "CTRL+NUM0": "formatPara",
                    "CTRL+NUM1": "formatH1",
                    "CTRL+NUM2": "formatH2",
                    "CTRL+NUM3": "formatH3",
                    "CTRL+NUM4": "formatH4",
                    "CTRL+NUM5": "formatH5",
                    "CTRL+NUM6": "formatH6",
                    "CTRL+ENTER": "insertHorizontalRule",
                    "CTRL+K": "linkDialog.show"
                },
                mac: {
                    ENTER: "insertParagraph",
                    "CMD+Z": "undo",
                    "CMD+SHIFT+Z": "redo",
                    TAB: "tab",
                    "SHIFT+TAB": "untab",
                    "CMD+B": "bold",
                    "CMD+I": "italic",
                    "CMD+U": "underline",
                    "CMD+SHIFT+S": "strikethrough",
                    "CMD+BACKSLASH": "removeFormat",
                    "CMD+SHIFT+L": "justifyLeft",
                    "CMD+SHIFT+E": "justifyCenter",
                    "CMD+SHIFT+R": "justifyRight",
                    "CMD+SHIFT+J": "justifyFull",
                    "CMD+SHIFT+NUM7": "insertUnorderedList",
                    "CMD+SHIFT+NUM8": "insertOrderedList",
                    "CMD+LEFTBRACKET": "outdent",
                    "CMD+RIGHTBRACKET": "indent",
                    "CMD+NUM0": "formatPara",
                    "CMD+NUM1": "formatH1",
                    "CMD+NUM2": "formatH2",
                    "CMD+NUM3": "formatH3",
                    "CMD+NUM4": "formatH4",
                    "CMD+NUM5": "formatH5",
                    "CMD+NUM6": "formatH6",
                    "CMD+ENTER": "insertHorizontalRule",
                    "CMD+K": "linkDialog.show"
                }
            },
            icons: {
                align: "note-icon-align",
                alignCenter: "note-icon-align-center",
                alignJustify: "note-icon-align-justify",
                alignLeft: "note-icon-align-left",
                alignRight: "note-icon-align-right",
                indent: "note-icon-align-indent",
                outdent: "note-icon-align-outdent",
                arrowsAlt: "note-icon-arrows-alt",
                bold: "note-icon-bold",
                caret: "note-icon-caret",
                circle: "note-icon-circle",
                close: "note-icon-close",
                code: "note-icon-code",
                eraser: "note-icon-eraser",
                font: "note-icon-font",
                frame: "note-icon-frame",
                italic: "note-icon-italic",
                link: "note-icon-link",
                unlink: "note-icon-chain-broken",
                magic: "note-icon-magic",
                menuCheck: "note-icon-check",
                minus: "note-icon-minus",
                orderedlist: "note-icon-orderedlist",
                pencil: "note-icon-pencil",
                picture: "note-icon-picture",
                question: "note-icon-question",
                redo: "note-icon-redo",
                square: "note-icon-square",
                strikethrough: "note-icon-strikethrough",
                subscript: "note-icon-subscript",
                superscript: "note-icon-superscript",
                table: "note-icon-table",
                textHeight: "note-icon-text-height",
                trash: "note-icon-trash",
                underline: "note-icon-underline",
                undo: "note-icon-undo",
                unorderedlist: "note-icon-unorderedlist",
                video: "note-icon-video"
            }
        }
    })
});