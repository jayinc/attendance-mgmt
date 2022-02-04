! function (l) {
    var t = {
        set: {
            colors: 1,
            values: 1,
            backgroundColor: 1,
            scaleColors: 1,
            normalizeFunction: 1,
            focus: 1
        },
        get: {
            selectedRegions: 1,
            selectedMarkers: 1,
            mapObject: 1,
            regionName: 1
        }
    };
    l.fn.vectorMap = function (l) {
        var e = this.children(".jvectormap-container").data("mapObject");
        if ("addMap" === l) jvm.Map.maps[arguments[1]] = arguments[2];
        else {
            if (("set" === l || "get" === l) && t[l][arguments[1]]) return e[l + (arguments[1].charAt(0).toUpperCase() + arguments[1].substr(1))].apply(e, Array.prototype.slice.call(arguments, 2));
            (l = l || {}).container = this, e = new jvm.Map(l)
        }
        return this
    }
}(jQuery),
function (l) {
    "function" == typeof define && define.amd ? define(["jquery"], l) : "object" == typeof exports ? module.exports = l : l(jQuery)
}(function (o) {
    function e(l) {
        var e = l || window.event,
            t = u.call(arguments, 1),
            a = 0,
            i = 0,
            s = 0,
            n = 0;
        if ((l = o.event.fix(e)).type = "mousewheel", "detail" in e && (s = -1 * e.detail), "wheelDelta" in e && (s = e.wheelDelta), "wheelDeltaY" in e && (s = e.wheelDeltaY), "wheelDeltaX" in e && (i = -1 * e.wheelDeltaX), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (i = -1 * s, s = 0), a = 0 === s ? i : s, "deltaY" in e && (a = s = -1 * e.deltaY), "deltaX" in e && (i = e.deltaX, 0 === s && (a = -1 * i)), 0 !== s || 0 !== i) {
            if (1 === e.deltaMode) {
                var r = o.data(this, "mousewheel-line-height");
                a *= r, s *= r, i *= r
            } else if (2 === e.deltaMode) {
                var h = o.data(this, "mousewheel-page-height");
                a *= h, s *= h, i *= h
            }
            return n = Math.max(Math.abs(s), Math.abs(i)), (!d || n < d) && (p(e, d = n) && (d /= 40)), p(e, n) && (a /= 40, i /= 40, s /= 40), a = Math[1 <= a ? "floor" : "ceil"](a / d), i = Math[1 <= i ? "floor" : "ceil"](i / d), s = Math[1 <= s ? "floor" : "ceil"](s / d), l.deltaX = i, l.deltaY = s, l.deltaFactor = d, l.deltaMode = 0, t.unshift(l, a, i, s), c && clearTimeout(c), c = setTimeout(m, 200), (o.event.dispatch || o.event.handle).apply(this, t)
        }
    }

    function m() {
        d = null
    }

    function p(l, e) {
        return i.settings.adjustOldDeltas && "mousewheel" === l.type && e % 120 == 0
    }
    var c, d, l = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        t = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        u = Array.prototype.slice;
    if (o.event.fixHooks)
        for (var a = l.length; a;) o.event.fixHooks[l[--a]] = o.event.mouseHooks;
    var i = o.event.special.mousewheel = {
        version: "3.1.9",
        setup: function () {
            if (this.addEventListener)
                for (var l = t.length; l;) this.addEventListener(t[--l], e, !1);
            else this.onmousewheel = e;
            o.data(this, "mousewheel-line-height", i.getLineHeight(this)), o.data(this, "mousewheel-page-height", i.getPageHeight(this))
        },
        teardown: function () {
            if (this.removeEventListener)
                for (var l = t.length; l;) this.removeEventListener(t[--l], e, !1);
            else this.onmousewheel = null
        },
        getLineHeight: function (l) {
            return parseInt(o(l)["offsetParent" in o.fn ? "offsetParent" : "parent"]().css("fontSize"), 10)
        },
        getPageHeight: function (l) {
            return o(l).height()
        },
        settings: {
            adjustOldDeltas: !0
        }
    };
    o.fn.extend({
        mousewheel: function (l) {
            return l ? this.bind("mousewheel", l) : this.trigger("mousewheel")
        },
        unmousewheel: function (l) {
            return this.unbind("mousewheel", l)
        }
    })
});
var jvm = {
    inherits: function (l, e) {
        function t() {}
        t.prototype = e.prototype, l.prototype = new t, (l.prototype.constructor = l).parentClass = e
    },
    mixin: function (l, e) {
        var t;
        for (t in e.prototype) e.prototype.hasOwnProperty(t) && (l.prototype[t] = e.prototype[t])
    },
    min: function (l) {
        var e, t = Number.MAX_VALUE;
        if (l instanceof Array)
            for (e = 0; e < l.length; e++) l[e] < t && (t = l[e]);
        else
            for (e in l) l[e] < t && (t = l[e]);
        return t
    },
    max: function (l) {
        var e, t = Number.MIN_VALUE;
        if (l instanceof Array)
            for (e = 0; e < l.length; e++) l[e] > t && (t = l[e]);
        else
            for (e in l) l[e] > t && (t = l[e]);
        return t
    },
    keys: function (l) {
        var e, t = [];
        for (e in l) t.push(e);
        return t
    },
    values: function (l) {
        var e, t, a = [];
        for (t = 0; t < arguments.length; t++)
            for (e in l = arguments[t]) a.push(l[e]);
        return a
    },
    whenImageLoaded: function (l) {
        var e = new jvm.$.Deferred,
            t = jvm.$("<img/>");
        return t.error(function () {
            e.reject()
        }).load(function () {
            e.resolve(t)
        }), t.attr("src", l), e
    },
    isImageUrl: function (l) {
        return /\.\w{3,4}$/.test(l)
    }
};
jvm.$ = jQuery, Array.prototype.indexOf || (Array.prototype.indexOf = function (l, e) {
    var t;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var a = Object(this),
        i = a.length >>> 0;
    if (0 === i) return -1;
    var s = +e || 0;
    if (1 / 0 === Math.abs(s) && (s = 0), i <= s) return -1;
    for (t = Math.max(0 <= s ? s : i - Math.abs(s), 0); t < i;) {
        if (t in a && a[t] === l) return t;
        t++
    }
    return -1
}), jvm.AbstractElement = function (l, e) {
    this.node = this.createElement(l), this.name = l, this.properties = {}, e && this.set(e)
}, jvm.AbstractElement.prototype.set = function (l, e) {
    var t;
    if ("object" == typeof l)
        for (t in l) this.properties[t] = l[t], this.applyAttr(t, l[t]);
    else this.properties[l] = e, this.applyAttr(l, e)
}, jvm.AbstractElement.prototype.get = function (l) {
    return this.properties[l]
}, jvm.AbstractElement.prototype.applyAttr = function (l, e) {
    this.node.setAttribute(l, e)
}, jvm.AbstractElement.prototype.remove = function () {
    jvm.$(this.node).remove()
}, jvm.AbstractCanvasElement = function (l, e, t) {
    this.container = l, this.setSize(e, t), this.rootElement = new jvm[this.classPrefix + "GroupElement"], this.node.appendChild(this.rootElement.node), this.container.appendChild(this.node)
}, jvm.AbstractCanvasElement.prototype.add = function (l, e) {
    (e = e || this.rootElement).add(l), l.canvas = this
}, jvm.AbstractCanvasElement.prototype.addPath = function (l, e, t) {
    var a = new jvm[this.classPrefix + "PathElement"](l, e);
    return this.add(a, t), a
}, jvm.AbstractCanvasElement.prototype.addCircle = function (l, e, t) {
    var a = new jvm[this.classPrefix + "CircleElement"](l, e);
    return this.add(a, t), a
}, jvm.AbstractCanvasElement.prototype.addImage = function (l, e, t) {
    var a = new jvm[this.classPrefix + "ImageElement"](l, e);
    return this.add(a, t), a
}, jvm.AbstractCanvasElement.prototype.addText = function (l, e, t) {
    var a = new jvm[this.classPrefix + "TextElement"](l, e);
    return this.add(a, t), a
}, jvm.AbstractCanvasElement.prototype.addGroup = function (l) {
    var e = new jvm[this.classPrefix + "GroupElement"];
    return l ? l.node.appendChild(e.node) : this.node.appendChild(e.node), e.canvas = this, e
}, jvm.AbstractShapeElement = function (l, e, t) {
    this.style = t || {}, this.style.current = this.style.current || {}, this.isHovered = !1, this.isSelected = !1, this.updateStyle()
}, jvm.AbstractShapeElement.prototype.setStyle = function (l, e) {
    var t = {};
    "object" == typeof l ? t = l : t[l] = e, jvm.$.extend(this.style.current, t), this.updateStyle()
}, jvm.AbstractShapeElement.prototype.updateStyle = function () {
    var l = {};
    jvm.AbstractShapeElement.mergeStyles(l, this.style.initial), jvm.AbstractShapeElement.mergeStyles(l, this.style.current), this.isHovered && jvm.AbstractShapeElement.mergeStyles(l, this.style.hover), this.isSelected && (jvm.AbstractShapeElement.mergeStyles(l, this.style.selected), this.isHovered && jvm.AbstractShapeElement.mergeStyles(l, this.style.selectedHover)), this.set(l)
}, jvm.AbstractShapeElement.mergeStyles = function (l, e) {
    var t;
    for (t in e = e || {}) null === e[t] ? delete l[t] : l[t] = e[t]
}, jvm.SVGElement = function () {
    jvm.SVGElement.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.SVGElement, jvm.AbstractElement), jvm.SVGElement.svgns = "http://www.w3.org/2000/svg", jvm.SVGElement.prototype.createElement = function (l) {
    return document.createElementNS(jvm.SVGElement.svgns, l)
}, jvm.SVGElement.prototype.addClass = function (l) {
    this.node.setAttribute("class", l)
}, jvm.SVGElement.prototype.getElementCtr = function (l) {
    return jvm["SVG" + l]
}, jvm.SVGElement.prototype.getBBox = function () {
    return this.node.getBBox()
}, jvm.SVGGroupElement = function () {
    jvm.SVGGroupElement.parentClass.call(this, "g")
}, jvm.inherits(jvm.SVGGroupElement, jvm.SVGElement), jvm.SVGGroupElement.prototype.add = function (l) {
    this.node.appendChild(l.node)
}, jvm.SVGCanvasElement = function () {
    this.classPrefix = "SVG", jvm.SVGCanvasElement.parentClass.call(this, "svg"), this.defsElement = new jvm.SVGElement("defs"), this.node.appendChild(this.defsElement.node), jvm.AbstractCanvasElement.apply(this, arguments)
}, jvm.inherits(jvm.SVGCanvasElement, jvm.SVGElement), jvm.mixin(jvm.SVGCanvasElement, jvm.AbstractCanvasElement), jvm.SVGCanvasElement.prototype.setSize = function (l, e) {
    this.width = l, this.height = e, this.node.setAttribute("width", l), this.node.setAttribute("height", e)
}, jvm.SVGCanvasElement.prototype.applyTransformParams = function (l, e, t) {
    this.scale = l, this.transX = e, this.transY = t, this.rootElement.node.setAttribute("transform", "scale(" + l + ") translate(" + e + ", " + t + ")")
}, jvm.SVGShapeElement = function (l, e) {
    jvm.SVGShapeElement.parentClass.call(this, l, e), jvm.AbstractShapeElement.apply(this, arguments)
}, jvm.inherits(jvm.SVGShapeElement, jvm.SVGElement), jvm.mixin(jvm.SVGShapeElement, jvm.AbstractShapeElement), jvm.SVGShapeElement.prototype.applyAttr = function (l, e) {
    var t, a, i = this;
    "fill" === l && jvm.isImageUrl(e) ? jvm.SVGShapeElement.images[e] ? this.applyAttr("fill", "url(#image" + jvm.SVGShapeElement.images[e] + ")") : jvm.whenImageLoaded(e).then(function (l) {
        (a = new jvm.SVGElement("image")).node.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), a.applyAttr("x", "0"), a.applyAttr("y", "0"), a.applyAttr("width", l[0].width), a.applyAttr("height", l[0].height), (t = new jvm.SVGElement("pattern")).applyAttr("id", "image" + jvm.SVGShapeElement.imageCounter), t.applyAttr("x", 0), t.applyAttr("y", 0), t.applyAttr("width", l[0].width / 2), t.applyAttr("height", l[0].height / 2), t.applyAttr("viewBox", "0 0 " + l[0].width + " " + l[0].height), t.applyAttr("patternUnits", "userSpaceOnUse"), t.node.appendChild(a.node), i.canvas.defsElement.node.appendChild(t.node), jvm.SVGShapeElement.images[e] = jvm.SVGShapeElement.imageCounter++, i.applyAttr("fill", "url(#image" + jvm.SVGShapeElement.images[e] + ")")
    }) : jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this, arguments)
}, jvm.SVGShapeElement.imageCounter = 1, jvm.SVGShapeElement.images = {}, jvm.SVGPathElement = function (l, e) {
    jvm.SVGPathElement.parentClass.call(this, "path", l, e), this.node.setAttribute("fill-rule", "evenodd")
}, jvm.inherits(jvm.SVGPathElement, jvm.SVGShapeElement), jvm.SVGCircleElement = function (l, e) {
    jvm.SVGCircleElement.parentClass.call(this, "circle", l, e)
}, jvm.inherits(jvm.SVGCircleElement, jvm.SVGShapeElement), jvm.SVGImageElement = function (l, e) {
    jvm.SVGImageElement.parentClass.call(this, "image", l, e)
}, jvm.inherits(jvm.SVGImageElement, jvm.SVGShapeElement), jvm.SVGImageElement.prototype.applyAttr = function (l, e) {
    var t = this;
    "image" == l ? jvm.whenImageLoaded(e).then(function (l) {
        t.node.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), t.width = l[0].width, t.height = l[0].height, t.applyAttr("width", t.width), t.applyAttr("height", t.height), t.applyAttr("x", t.cx - t.width / 2), t.applyAttr("y", t.cy - t.height / 2), jvm.$(t.node).trigger("imageloaded", [l])
    }) : "cx" == l ? (this.cx = e, this.width && this.applyAttr("x", e - this.width / 2)) : "cy" == l ? (this.cy = e, this.height && this.applyAttr("y", e - this.height / 2)) : jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this, arguments)
}, jvm.SVGTextElement = function (l, e) {
    jvm.SVGTextElement.parentClass.call(this, "text", l, e)
}, jvm.inherits(jvm.SVGTextElement, jvm.SVGShapeElement), jvm.SVGTextElement.prototype.applyAttr = function (l, e) {
    "text" === l ? this.node.textContent = e : jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this, arguments)
}, jvm.VMLElement = function () {
    jvm.VMLElement.VMLInitialized || jvm.VMLElement.initializeVML(), jvm.VMLElement.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.VMLElement, jvm.AbstractElement), jvm.VMLElement.VMLInitialized = !1, jvm.VMLElement.initializeVML = function () {
    try {
        document.namespaces.rvml || document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), jvm.VMLElement.prototype.createElement = function (l) {
            return document.createElement("<rvml:" + l + ' class="rvml">')
        }
    } catch (l) {
        jvm.VMLElement.prototype.createElement = function (l) {
            return document.createElement("<" + l + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
        }
    }
    document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)"), jvm.VMLElement.VMLInitialized = !0
}, jvm.VMLElement.prototype.getElementCtr = function (l) {
    return jvm["VML" + l]
}, jvm.VMLElement.prototype.addClass = function (l) {
    jvm.$(this.node).addClass(l)
}, jvm.VMLElement.prototype.applyAttr = function (l, e) {
    this.node[l] = e
}, jvm.VMLElement.prototype.getBBox = function () {
    var l = jvm.$(this.node);
    return {
        x: l.position().left / this.canvas.scale,
        y: l.position().top / this.canvas.scale,
        width: l.width() / this.canvas.scale,
        height: l.height() / this.canvas.scale
    }
}, jvm.VMLGroupElement = function () {
    jvm.VMLGroupElement.parentClass.call(this, "group"), this.node.style.left = "0px", this.node.style.top = "0px", this.node.coordorigin = "0 0"
}, jvm.inherits(jvm.VMLGroupElement, jvm.VMLElement), jvm.VMLGroupElement.prototype.add = function (l) {
    this.node.appendChild(l.node)
}, jvm.VMLCanvasElement = function () {
    this.classPrefix = "VML", jvm.VMLCanvasElement.parentClass.call(this, "group"), jvm.AbstractCanvasElement.apply(this, arguments), this.node.style.position = "absolute"
}, jvm.inherits(jvm.VMLCanvasElement, jvm.VMLElement), jvm.mixin(jvm.VMLCanvasElement, jvm.AbstractCanvasElement), jvm.VMLCanvasElement.prototype.setSize = function (l, e) {
    var t, a, i, s;
    if (this.width = l, this.height = e, this.node.style.width = l + "px", this.node.style.height = e + "px", this.node.coordsize = l + " " + e, this.node.coordorigin = "0 0", this.rootElement) {
        for (i = 0, s = (t = this.rootElement.node.getElementsByTagName("shape")).length; i < s; i++) t[i].coordsize = l + " " + e, t[i].style.width = l + "px", t[i].style.height = e + "px";
        for (i = 0, s = (a = this.node.getElementsByTagName("group")).length; i < s; i++) a[i].coordsize = l + " " + e, a[i].style.width = l + "px", a[i].style.height = e + "px"
    }
}, jvm.VMLCanvasElement.prototype.applyTransformParams = function (l, e, t) {
    this.scale = l, this.transX = e, this.transY = t, this.rootElement.node.coordorigin = this.width - e - this.width / 100 + "," + (this.height - t - this.height / 100), this.rootElement.node.coordsize = this.width / l + "," + this.height / l
}, jvm.VMLShapeElement = function (l, e) {
    jvm.VMLShapeElement.parentClass.call(this, l, e), this.fillElement = new jvm.VMLElement("fill"), this.strokeElement = new jvm.VMLElement("stroke"), this.node.appendChild(this.fillElement.node), this.node.appendChild(this.strokeElement.node), this.node.stroked = !1, jvm.AbstractShapeElement.apply(this, arguments)
}, jvm.inherits(jvm.VMLShapeElement, jvm.VMLElement), jvm.mixin(jvm.VMLShapeElement, jvm.AbstractShapeElement), jvm.VMLShapeElement.prototype.applyAttr = function (l, e) {
    switch (l) {
        case "fill":
            this.node.fillcolor = e;
            break;
        case "fill-opacity":
            this.fillElement.node.opacity = Math.round(100 * e) + "%";
            break;
        case "stroke":
            this.node.stroked = "none" !== e, this.node.strokecolor = e;
            break;
        case "stroke-opacity":
            this.strokeElement.node.opacity = Math.round(100 * e) + "%";
            break;
        case "stroke-width":
            this.node.stroked = 0 !== parseInt(e, 10), this.node.strokeweight = e;
            break;
        case "d":
            this.node.path = jvm.VMLPathElement.pathSvgToVml(e);
            break;
        default:
            jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this, arguments)
    }
}, jvm.VMLPathElement = function (l, e) {
    var t = new jvm.VMLElement("skew");
    jvm.VMLPathElement.parentClass.call(this, "shape", l, e), this.node.coordorigin = "0 0", t.node.on = !0, t.node.matrix = "0.01,0,0,0.01,0,0", t.node.offset = "0,0", this.node.appendChild(t.node)
}, jvm.inherits(jvm.VMLPathElement, jvm.VMLShapeElement), jvm.VMLPathElement.prototype.applyAttr = function (l, e) {
    "d" === l ? this.node.path = jvm.VMLPathElement.pathSvgToVml(e) : jvm.VMLShapeElement.prototype.applyAttr.call(this, l, e)
}, jvm.VMLPathElement.pathSvgToVml = function (l) {
    var s, n, r = 0,
        h = 0;
    return (l = l.replace(/(-?\d+)e(-?\d+)/g, "0")).replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g, function (l, e, t) {
        (t = t.replace(/(\d)-/g, "$1,-").replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, ",").split(","))[0] || t.shift();
        for (var a = 0, i = t.length; a < i; a++) t[a] = Math.round(100 * t[a]);
        switch (e) {
            case "m":
                return r += t[0], h += t[1], "t" + t.join(",");
            case "M":
                return r = t[0], h = t[1], "m" + t.join(",");
            case "l":
                return r += t[0], h += t[1], "r" + t.join(",");
            case "L":
                return r = t[0], h = t[1], "l" + t.join(",");
            case "h":
                return r += t[0], "r" + t[0] + ",0";
            case "H":
                return "l" + (r = t[0]) + "," + h;
            case "v":
                return h += t[0], "r0," + t[0];
            case "V":
                return h = t[0], "l" + r + "," + h;
            case "c":
                return s = r + t[t.length - 4], n = h + t[t.length - 3], r += t[t.length - 2], h += t[t.length - 1], "v" + t.join(",");
            case "C":
                return s = t[t.length - 4], n = t[t.length - 3], r = t[t.length - 2], h = t[t.length - 1], "c" + t.join(",");
            case "s":
                return t.unshift(h - n), t.unshift(r - s), s = r + t[t.length - 4], n = h + t[t.length - 3], r += t[t.length - 2], h += t[t.length - 1], "v" + t.join(",");
            case "S":
                return t.unshift(h + h - n), t.unshift(r + r - s), s = t[t.length - 4], n = t[t.length - 3], r = t[t.length - 2], h = t[t.length - 1], "c" + t.join(",")
        }
        return ""
    }).replace(/z/g, "e")
}, jvm.VMLCircleElement = function (l, e) {
    jvm.VMLCircleElement.parentClass.call(this, "oval", l, e)
}, jvm.inherits(jvm.VMLCircleElement, jvm.VMLShapeElement), jvm.VMLCircleElement.prototype.applyAttr = function (l, e) {
    switch (l) {
        case "r":
            this.node.style.width = 2 * e + "px", this.node.style.height = 2 * e + "px", this.applyAttr("cx", this.get("cx") || 0), this.applyAttr("cy", this.get("cy") || 0);
            break;
        case "cx":
            if (!e) return;
            this.node.style.left = e - (this.get("r") || 0) + "px";
            break;
        case "cy":
            if (!e) return;
            this.node.style.top = e - (this.get("r") || 0) + "px";
            break;
        default:
            jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this, l, e)
    }
}, jvm.VectorCanvas = function (l, e, t) {
    return this.mode = window.SVGAngle ? "svg" : "vml", this.impl = "svg" == this.mode ? new jvm.SVGCanvasElement(l, e, t) : new jvm.VMLCanvasElement(l, e, t), this.impl.mode = this.mode, this.impl
}, jvm.SimpleScale = function (l) {
    this.scale = l
}, jvm.SimpleScale.prototype.getValue = function (l) {
    return l
}, jvm.OrdinalScale = function (l) {
    this.scale = l
}, jvm.OrdinalScale.prototype.getValue = function (l) {
    return this.scale[l]
}, jvm.OrdinalScale.prototype.getTicks = function () {
    var l, e = [];
    for (l in this.scale) e.push({
        label: l,
        value: this.scale[l]
    });
    return e
}, jvm.NumericScale = function (l, e, t, a) {
    this.scale = [], e = e || "linear", l && this.setScale(l), e && this.setNormalizeFunction(e), void 0 !== t && this.setMin(t), void 0 !== a && this.setMax(a)
}, jvm.NumericScale.prototype = {
    setMin: function (l) {
        this.clearMinValue = l, this.minValue = "function" == typeof this.normalize ? this.normalize(l) : l
    },
    setMax: function (l) {
        this.clearMaxValue = l, this.maxValue = "function" == typeof this.normalize ? this.normalize(l) : l
    },
    setScale: function (l) {
        var e;
        for (this.scale = [], e = 0; e < l.length; e++) this.scale[e] = [l[e]]
    },
    setNormalizeFunction: function (l) {
        "polynomial" === l ? this.normalize = function (l) {
            return Math.pow(l, .2)
        } : "linear" === l ? delete this.normalize : this.normalize = l, this.setMin(this.clearMinValue), this.setMax(this.clearMaxValue)
    },
    getValue: function (l) {
        var e, t, a = [],
            i = 0,
            s = 0;
        for ("function" == typeof this.normalize && (l = this.normalize(l)), s = 0; s < this.scale.length - 1; s++) e = this.vectorLength(this.vectorSubtract(this.scale[s + 1], this.scale[s])), a.push(e), i += e;
        for (t = (this.maxValue - this.minValue) / i, s = 0; s < a.length; s++) a[s] *= t;
        for (s = 0, l -= this.minValue; 0 <= l - a[s];) l -= a[s], s++;
        return this.vectorToNum(s == this.scale.length - 1 ? this.scale[s] : this.vectorAdd(this.scale[s], this.vectorMult(this.vectorSubtract(this.scale[s + 1], this.scale[s]), l / a[s])))
    },
    vectorToNum: function (l) {
        var e, t = 0;
        for (e = 0; e < l.length; e++) t += Math.round(l[e]) * Math.pow(256, l.length - e - 1);
        return t
    },
    vectorSubtract: function (l, e) {
        var t, a = [];
        for (t = 0; t < l.length; t++) a[t] = l[t] - e[t];
        return a
    },
    vectorAdd: function (l, e) {
        var t, a = [];
        for (t = 0; t < l.length; t++) a[t] = l[t] + e[t];
        return a
    },
    vectorMult: function (l, e) {
        var t, a = [];
        for (t = 0; t < l.length; t++) a[t] = l[t] * e;
        return a
    },
    vectorLength: function (l) {
        var e, t = 0;
        for (e = 0; e < l.length; e++) t += l[e] * l[e];
        return Math.sqrt(t)
    },
    getTicks: function () {
        var l, e, t = [this.clearMinValue, this.clearMaxValue],
            a = t[1] - t[0],
            i = Math.pow(10, Math.floor(Math.log(a / 5) / Math.LN10)),
            s = 5 / a * i,
            n = [];
        for (s <= .15 ? i *= 10 : s <= .35 ? i *= 5 : s <= .75 && (i *= 2), t[0] = Math.floor(t[0] / i) * i, t[1] = Math.ceil(t[1] / i) * i, l = t[0]; l <= t[1];) e = l == t[0] ? this.clearMinValue : l == t[1] ? this.clearMaxValue : l, n.push({
            label: l,
            value: this.getValue(e)
        }), l += i;
        return n
    }
}, jvm.ColorScale = function () {
    jvm.ColorScale.parentClass.apply(this, arguments)
}, jvm.inherits(jvm.ColorScale, jvm.NumericScale), jvm.ColorScale.prototype.setScale = function (l) {
    var e;
    for (e = 0; e < l.length; e++) this.scale[e] = jvm.ColorScale.rgbToArray(l[e])
}, jvm.ColorScale.prototype.getValue = function (l) {
    return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this, l))
}, jvm.ColorScale.arrayToRgb = function (l) {
    var e, t, a = "#";
    for (t = 0; t < l.length; t++) a += 1 == (e = l[t].toString(16)).length ? "0" + e : e;
    return a
}, jvm.ColorScale.numToRgb = function (l) {
    for (l = l.toString(16); l.length < 6;) l = "0" + l;
    return "#" + l
}, jvm.ColorScale.rgbToArray = function (l) {
    return l = l.substr(1), [parseInt(l.substr(0, 2), 16), parseInt(l.substr(2, 2), 16), parseInt(l.substr(4, 2), 16)]
}, jvm.Legend = function (l) {
    this.params = l || {}, this.map = this.params.map, this.series = this.params.series, this.body = jvm.$("<div/>"), this.body.addClass("jvectormap-legend"), this.params.cssClass && this.body.addClass(this.params.cssClass), l.vertical ? this.map.legendCntVertical.append(this.body) : this.map.legendCntHorizontal.append(this.body), this.render()
}, jvm.Legend.prototype.render = function () {
    var l, e, t, a, i = this.series.scale.getTicks(),
        s = jvm.$("<div/>").addClass("jvectormap-legend-inner");
    for (this.body.html(""), this.params.title && this.body.append(jvm.$("<div/>").addClass("jvectormap-legend-title").html(this.params.title)), this.body.append(s), l = 0; l < i.length; l++) {
        switch (e = jvm.$("<div/>").addClass("jvectormap-legend-tick"), t = jvm.$("<div/>").addClass("jvectormap-legend-tick-sample"), this.series.params.attribute) {
            case "fill":
                jvm.isImageUrl(i[l].value) ? t.css("background", "url(" + i[l].value + ")") : t.css("background", i[l].value);
                break;
            case "stroke":
                t.css("background", i[l].value);
                break;
            case "image":
                t.css("background", "url(" + i[l].value + ") no-repeat center center");
                break;
            case "r":
                jvm.$("<div/>").css({
                    "border-radius": i[l].value,
                    border: this.map.params.markerStyle.initial["stroke-width"] + "px " + this.map.params.markerStyle.initial.stroke + " solid",
                    width: 2 * i[l].value + "px",
                    height: 2 * i[l].value + "px",
                    background: this.map.params.markerStyle.initial.fill
                }).appendTo(t)
        }
        e.append(t), a = i[l].label, this.params.labelRender && (a = this.params.labelRender(a)), e.append(jvm.$("<div>" + a + " </div>").addClass("jvectormap-legend-tick-text")), s.append(e)
    }
    s.append(jvm.$("<div/>").css("clear", "both"))
}, jvm.DataSeries = function (l, e, t) {
    var a;
    (l = l || {}).attribute = l.attribute || "fill", this.elements = e, this.params = l, this.map = t, l.attributes && this.setAttributes(l.attributes), jvm.$.isArray(l.scale) ? (a = "fill" === l.attribute || "stroke" === l.attribute ? jvm.ColorScale : jvm.NumericScale, this.scale = new a(l.scale, l.normalizeFunction, l.min, l.max)) : this.scale = l.scale ? new jvm.OrdinalScale(l.scale) : new jvm.SimpleScale(l.scale), this.values = l.values || {}, this.setValues(this.values), this.params.legend && (this.legend = new jvm.Legend($.extend({
        map: this.map,
        series: this
    }, this.params.legend)))
}, jvm.DataSeries.prototype = {
    setAttributes: function (l, e) {
        var t, a = l;
        if ("string" == typeof l) this.elements[l] && this.elements[l].setStyle(this.params.attribute, e);
        else
            for (t in a) this.elements[t] && this.elements[t].element.setStyle(this.params.attribute, a[t])
    },
    setValues: function (l) {
        var e, t, a = -Number.MAX_VALUE,
            i = Number.MAX_VALUE,
            s = {};
        if (this.scale instanceof jvm.OrdinalScale || this.scale instanceof jvm.SimpleScale)
            for (t in l) s[t] = l[t] ? this.scale.getValue(l[t]) : this.elements[t].element.style.initial[this.params.attribute];
        else {
            if (void 0 === this.params.min || void 0 === this.params.max)
                for (t in l) a < (e = parseFloat(l[t])) && (a = e), e < i && (i = e);
            for (t in void 0 === this.params.min ? (this.scale.setMin(i), this.params.min = i) : this.scale.setMin(this.params.min), void 0 === this.params.max ? (this.scale.setMax(a), this.params.max = a) : this.scale.setMax(this.params.max), l) "indexOf" != t && (e = parseFloat(l[t]), s[t] = isNaN(e) ? this.elements[t].element.style.initial[this.params.attribute] : this.scale.getValue(e))
        }
        this.setAttributes(s), jvm.$.extend(this.values, l)
    },
    clear: function () {
        var l, e = {};
        for (l in this.values) this.elements[l] && (e[l] = this.elements[l].element.shape.style.initial[this.params.attribute]);
        this.setAttributes(e), this.values = {}
    },
    setScale: function (l) {
        this.scale.setScale(l), this.values && this.setValues(this.values)
    },
    setNormalizeFunction: function (l) {
        this.scale.setNormalizeFunction(l), this.values && this.setValues(this.values)
    }
}, jvm.Proj = {
    degRad: 180 / Math.PI,
    radDeg: Math.PI / 180,
    radius: 6381372,
    sgn: function (l) {
        return 0 < l ? 1 : l < 0 ? -1 : l
    },
    mill: function (l, e, t) {
        return {
            x: this.radius * (e - t) * this.radDeg,
            y: -this.radius * Math.log(Math.tan((45 + .4 * l) * this.radDeg)) / .8
        }
    },
    mill_inv: function (l, e, t) {
        return {
            lat: (2.5 * Math.atan(Math.exp(.8 * e / this.radius)) - 5 * Math.PI / 8) * this.degRad,
            lng: (t * this.radDeg + l / this.radius) * this.degRad
        }
    },
    merc: function (l, e, t) {
        return {
            x: this.radius * (e - t) * this.radDeg,
            y: -this.radius * Math.log(Math.tan(Math.PI / 4 + l * Math.PI / 360))
        }
    },
    merc_inv: function (l, e, t) {
        return {
            lat: (2 * Math.atan(Math.exp(e / this.radius)) - Math.PI / 2) * this.degRad,
            lng: (t * this.radDeg + l / this.radius) * this.degRad
        }
    },
    aea: function (l, e, t) {
        var a = t * this.radDeg,
            i = 29.5 * this.radDeg,
            s = 45.5 * this.radDeg,
            n = l * this.radDeg,
            r = e * this.radDeg,
            h = (Math.sin(i) + Math.sin(s)) / 2,
            o = Math.cos(i) * Math.cos(i) + 2 * h * Math.sin(i),
            m = h * (r - a),
            p = Math.sqrt(o - 2 * h * Math.sin(n)) / h,
            c = Math.sqrt(o - 2 * h * Math.sin(0)) / h;
        return {
            x: p * Math.sin(m) * this.radius,
            y: -(c - p * Math.cos(m)) * this.radius
        }
    },
    aea_inv: function (l, e, t) {
        var a = l / this.radius,
            i = e / this.radius,
            s = t * this.radDeg,
            n = 29.5 * this.radDeg,
            r = 45.5 * this.radDeg,
            h = (Math.sin(n) + Math.sin(r)) / 2,
            o = Math.cos(n) * Math.cos(n) + 2 * h * Math.sin(n),
            m = Math.sqrt(o - 2 * h * Math.sin(0)) / h,
            p = Math.sqrt(a * a + (m - i) * (m - i)),
            c = Math.atan(a / (m - i));
        return {
            lat: Math.asin((o - p * p * h * h) / (2 * h)) * this.degRad,
            lng: (s + c / h) * this.degRad
        }
    },
    lcc: function (l, e, t) {
        var a = t * this.radDeg,
            i = e * this.radDeg,
            s = 33 * this.radDeg,
            n = 45 * this.radDeg,
            r = l * this.radDeg,
            h = Math.log(Math.cos(s) * (1 / Math.cos(n))) / Math.log(Math.tan(Math.PI / 4 + n / 2) * (1 / Math.tan(Math.PI / 4 + s / 2))),
            o = Math.cos(s) * Math.pow(Math.tan(Math.PI / 4 + s / 2), h) / h,
            m = o * Math.pow(1 / Math.tan(Math.PI / 4 + r / 2), h),
            p = o * Math.pow(1 / Math.tan(Math.PI / 4 + 0), h);
        return {
            x: m * Math.sin(h * (i - a)) * this.radius,
            y: -(p - m * Math.cos(h * (i - a))) * this.radius
        }
    },
    lcc_inv: function (l, e, t) {
        var a = l / this.radius,
            i = e / this.radius,
            s = t * this.radDeg,
            n = 33 * this.radDeg,
            r = 45 * this.radDeg,
            h = Math.log(Math.cos(n) * (1 / Math.cos(r))) / Math.log(Math.tan(Math.PI / 4 + r / 2) * (1 / Math.tan(Math.PI / 4 + n / 2))),
            o = Math.cos(n) * Math.pow(Math.tan(Math.PI / 4 + n / 2), h) / h,
            m = o * Math.pow(1 / Math.tan(Math.PI / 4 + 0), h),
            p = this.sgn(h) * Math.sqrt(a * a + (m - i) * (m - i)),
            c = Math.atan(a / (m - i));
        return {
            lat: (2 * Math.atan(Math.pow(o / p, 1 / h)) - Math.PI / 2) * this.degRad,
            lng: (s + c / h) * this.degRad
        }
    }
}, jvm.MapObject = function () {}, jvm.MapObject.prototype.getLabelText = function (l) {
    return this.config.label ? "function" == typeof this.config.label.render ? this.config.label.render(l) : l : null
}, jvm.MapObject.prototype.getLabelOffsets = function (l) {
    var e;
    return this.config.label && ("function" == typeof this.config.label.offsets ? e = this.config.label.offsets(l) : "object" == typeof this.config.label.offsets && (e = this.config.label.offsets[l])), e || [0, 0]
}, jvm.MapObject.prototype.setHovered = function (l) {
    this.isHovered !== l && (this.isHovered = l, this.shape.isHovered = l, this.shape.updateStyle(), this.label && (this.label.isHovered = l, this.label.updateStyle()))
}, jvm.MapObject.prototype.setSelected = function (l) {
    this.isSelected !== l && (this.isSelected = l, this.shape.isSelected = l, this.shape.updateStyle(), this.label && (this.label.isSelected = l, this.label.updateStyle()), jvm.$(this.shape).trigger("selected", [l]))
}, jvm.MapObject.prototype.setStyle = function () {
    this.shape.setStyle.apply(this.shape, arguments)
}, jvm.MapObject.prototype.remove = function () {
    this.shape.remove(), this.label && this.label.remove()
}, jvm.Region = function (l) {
    var e, t, a;
    this.config = l, this.map = this.config.map, this.shape = l.canvas.addPath({
        d: l.path,
        "data-code": l.code
    }, l.style, l.canvas.rootElement), this.shape.addClass("jvectormap-region jvectormap-element"), e = this.shape.getBBox(), t = this.getLabelText(l.code), this.config.label && t && (a = this.getLabelOffsets(l.code), this.labelX = e.x + e.width / 2 + a[0], this.labelY = e.y + e.height / 2 + a[1], this.label = l.canvas.addText({
        text: t,
        "text-anchor": "middle",
        "alignment-baseline": "central",
        x: this.labelX,
        y: this.labelY,
        "data-code": l.code
    }, l.labelStyle, l.labelsGroup), this.label.addClass("jvectormap-region jvectormap-element"))
}, jvm.inherits(jvm.Region, jvm.MapObject), jvm.Region.prototype.updateLabelPosition = function () {
    this.label && this.label.set({
        x: this.labelX * this.map.scale + this.map.transX * this.map.scale,
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale
    })
}, jvm.Marker = function (l) {
    var e;
    this.config = l, this.map = this.config.map, this.isImage = !!this.config.style.initial.image, this.createShape(), e = this.getLabelText(l.index), this.config.label && e && (this.offsets = this.getLabelOffsets(l.index), this.labelX = l.cx / this.map.scale - this.map.transX, this.labelY = l.cy / this.map.scale - this.map.transY, this.label = l.canvas.addText({
        text: e,
        "data-index": l.index,
        dy: "0.6ex",
        x: this.labelX,
        y: this.labelY
    }, l.labelStyle, l.labelsGroup), this.label.addClass("jvectormap-marker jvectormap-element"))
}, jvm.inherits(jvm.Marker, jvm.MapObject), jvm.Marker.prototype.createShape = function () {
    var l = this;
    this.shape && this.shape.remove(), this.shape = this.config.canvas[this.isImage ? "addImage" : "addCircle"]({
        "data-index": this.config.index,
        cx: this.config.cx,
        cy: this.config.cy
    }, this.config.style, this.config.group), this.shape.addClass("jvectormap-marker jvectormap-element"), this.isImage && jvm.$(this.shape.node).on("imageloaded", function () {
        l.updateLabelPosition()
    })
}, jvm.Marker.prototype.updateLabelPosition = function () {
    this.label && this.label.set({
        x: this.labelX * this.map.scale + this.offsets[0] + this.map.transX * this.map.scale + 5 + (this.isImage ? (this.shape.width || 0) / 2 : this.shape.properties.r),
        y: this.labelY * this.map.scale + this.map.transY * this.map.scale + this.offsets[1]
    })
}, jvm.Marker.prototype.setStyle = function (l) {
    var e;
    jvm.Marker.parentClass.prototype.setStyle.apply(this, arguments), "r" === l && this.updateLabelPosition(), (e = !!this.shape.get("image")) != this.isImage && (this.isImage = e, this.config.style = jvm.$.extend(!0, {}, this.shape.style), this.createShape())
}, jvm.Map = function (l) {
    var e, t = this;
    if (this.params = jvm.$.extend(!0, {}, jvm.Map.defaultParams, l), !jvm.Map.maps[this.params.map]) throw new Error("Attempt to use map which was not loaded: " + this.params.map);
    for (e in this.mapData = jvm.Map.maps[this.params.map], this.markers = {}, this.regions = {}, this.regionsColors = {}, this.regionsData = {}, this.container = jvm.$("<div>").addClass("jvectormap-container"), this.params.container && this.params.container.append(this.container), this.container.data("mapObject", this), this.defaultWidth = this.mapData.width, this.defaultHeight = this.mapData.height, this.setBackgroundColor(this.params.backgroundColor), this.onResize = function () {
            t.updateSize()
        }, jvm.$(window).resize(this.onResize), jvm.Map.apiEvents) this.params[e] && this.container.bind(jvm.Map.apiEvents[e] + ".jvectormap", this.params[e]);
    this.canvas = new jvm.VectorCanvas(this.container[0], this.width, this.height), this.params.bindTouchEvents && ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? this.bindContainerTouchEvents() : window.MSGesture && this.bindContainerPointerEvents()), this.bindContainerEvents(), this.bindElementEvents(), this.createTip(), this.params.zoomButtons && this.bindZoomButtons(), this.createRegions(), this.createMarkers(this.params.markers || {}), this.updateSize(), this.params.focusOn && ("string" == typeof this.params.focusOn ? this.params.focusOn = {
        region: this.params.focusOn
    } : jvm.$.isArray(this.params.focusOn) && (this.params.focusOn = {
        regions: this.params.focusOn
    }), this.setFocus(this.params.focusOn)), this.params.selectedRegions && this.setSelectedRegions(this.params.selectedRegions), this.params.selectedMarkers && this.setSelectedMarkers(this.params.selectedMarkers), this.legendCntHorizontal = jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h"), this.legendCntVertical = jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v"), this.container.append(this.legendCntHorizontal), this.container.append(this.legendCntVertical), this.params.series && this.createSeries()
}, jvm.Map.prototype = {
    transX: 0,
    transY: 0,
    scale: 1,
    baseTransX: 0,
    baseTransY: 0,
    baseScale: 1,
    width: 0,
    height: 0,
    setBackgroundColor: function (l) {
        this.container.css("background-color", l)
    },
    resize: function () {
        var l = this.baseScale;
        this.width / this.height > this.defaultWidth / this.defaultHeight ? (this.baseScale = this.height / this.defaultHeight, this.baseTransX = Math.abs(this.width - this.defaultWidth * this.baseScale) / (2 * this.baseScale)) : (this.baseScale = this.width / this.defaultWidth, this.baseTransY = Math.abs(this.height - this.defaultHeight * this.baseScale) / (2 * this.baseScale)), this.scale *= this.baseScale / l, this.transX *= this.baseScale / l, this.transY *= this.baseScale / l
    },
    updateSize: function () {
        this.width = this.container.width(), this.height = this.container.height(), this.resize(), this.canvas.setSize(this.width, this.height), this.applyTransform()
    },
    reset: function () {
        var l, e;
        for (l in this.series)
            for (e = 0; e < this.series[l].length; e++) this.series[l][e].clear();
        this.scale = this.baseScale, this.transX = this.baseTransX, this.transY = this.baseTransY, this.applyTransform()
    },
    applyTransform: function () {
        var l, e, t, a;
        t = this.defaultWidth * this.scale <= this.width ? (l = (this.width - this.defaultWidth * this.scale) / (2 * this.scale), (this.width - this.defaultWidth * this.scale) / (2 * this.scale)) : (l = 0, (this.width - this.defaultWidth * this.scale) / this.scale), a = this.defaultHeight * this.scale <= this.height ? (e = (this.height - this.defaultHeight * this.scale) / (2 * this.scale), (this.height - this.defaultHeight * this.scale) / (2 * this.scale)) : (e = 0, (this.height - this.defaultHeight * this.scale) / this.scale), this.transY > e ? this.transY = e : this.transY < a && (this.transY = a), this.transX > l ? this.transX = l : this.transX < t && (this.transX = t), this.canvas.applyTransformParams(this.scale, this.transX, this.transY), this.markers && this.repositionMarkers(), this.repositionLabels(), this.container.trigger("viewportChange", [this.scale / this.baseScale, this.transX, this.transY])
    },
    bindContainerEvents: function () {
        var e, t, a = !1,
            s = this;
        this.params.panOnDrag && (this.container.mousemove(function (l) {
            return a && (s.transX -= (e - l.pageX) / s.scale, s.transY -= (t - l.pageY) / s.scale, s.applyTransform(), e = l.pageX, t = l.pageY), !1
        }).mousedown(function (l) {
            return a = !0, e = l.pageX, t = l.pageY, !1
        }), this.onContainerMouseUp = function () {
            a = !1
        }, jvm.$("body").mouseup(this.onContainerMouseUp)), this.params.zoomOnScroll && this.container.mousewheel(function (l) {
            var e = jvm.$(s.container).offset(),
                t = l.pageX - e.left,
                a = l.pageY - e.top,
                i = Math.pow(1 + s.params.zoomOnScrollSpeed / 1e3, l.deltaFactor * l.deltaY);
            s.tip.hide(), s.setScale(s.scale * i, t, a), l.preventDefault()
        })
    },
    bindContainerTouchEvents: function () {
        var n, r, h, o, m, p, c, d = this,
            l = function (l) {
                var e, t, a, i, s = l.originalEvent.touches;
                "touchstart" == l.type && (c = 0), 1 == s.length ? (1 == c && (a = d.transX, i = d.transY, d.transX -= (h - s[0].pageX) / d.scale, d.transY -= (o - s[0].pageY) / d.scale, d.applyTransform(), d.tip.hide(), (a != d.transX || i != d.transY) && l.preventDefault()), h = s[0].pageX, o = s[0].pageY) : 2 == s.length && (2 == c ? (t = Math.sqrt(Math.pow(s[0].pageX - s[1].pageX, 2) + Math.pow(s[0].pageY - s[1].pageY, 2)) / r, d.setScale(n * t, m, p), d.tip.hide(), l.preventDefault()) : (e = jvm.$(d.container).offset(), m = s[0].pageX > s[1].pageX ? s[1].pageX + (s[0].pageX - s[1].pageX) / 2 : s[0].pageX + (s[1].pageX - s[0].pageX) / 2, p = s[0].pageY > s[1].pageY ? s[1].pageY + (s[0].pageY - s[1].pageY) / 2 : s[0].pageY + (s[1].pageY - s[0].pageY) / 2, m -= e.left, p -= e.top, n = d.scale, r = Math.sqrt(Math.pow(s[0].pageX - s[1].pageX, 2) + Math.pow(s[0].pageY - s[1].pageY, 2)))), c = s.length
            };
        jvm.$(this.container).bind("touchstart", l), jvm.$(this.container).bind("touchmove", l)
    },
    bindContainerPointerEvents: function () {
        var a = this,
            e = new MSGesture,
            l = this.container[0];
        (e.target = l).addEventListener("MSGestureChange", function (l) {
            var e, t;
            (0 != l.translationX || 0 != l.translationY) && (e = a.transX, t = a.transY, a.transX += l.translationX / a.scale, a.transY += l.translationY / a.scale, a.applyTransform(), a.tip.hide(), (e != a.transX || t != a.transY) && l.preventDefault()), 1 != l.scale && (a.setScale(a.scale * l.scale, l.offsetX, l.offsetY), a.tip.hide(), l.preventDefault())
        }, !1), l.addEventListener("pointerdown", function (l) {
            e.addPointer(l.pointerId)
        }, !1)
    },
    bindElementEvents: function () {
        var e, t, i, r = this;
        this.container.mousemove(function (l) {
            2 < Math.abs(e - l.pageX) + Math.abs(t - l.pageY) && (i = !0)
        }), this.container.delegate("[class~='jvectormap-element']", "mouseover mouseout", function (l) {
            var e = -1 === (jvm.$(this).attr("class").baseVal || jvm.$(this).attr("class")).indexOf("jvectormap-region") ? "marker" : "region",
                t = jvm.$(this).attr("region" == e ? "data-code" : "data-index"),
                a = "region" == e ? r.regions[t].element : r.markers[t].element,
                i = "region" == e ? r.mapData.paths[t].name : r.markers[t].config.name || "",
                s = jvm.$.Event(e + "TipShow.jvectormap"),
                n = jvm.$.Event(e + "Over.jvectormap");
            "mouseover" == l.type ? (r.container.trigger(n, [t]), n.isDefaultPrevented() || a.setHovered(!0), r.tip.text(i), r.container.trigger(s, [r.tip, t]), s.isDefaultPrevented() || (r.tip.show(), r.tipWidth = r.tip.width(), r.tipHeight = r.tip.height())) : (a.setHovered(!1), r.tip.hide(), r.container.trigger(e + "Out.jvectormap", [t]))
        }), this.container.delegate("[class~='jvectormap-element']", "mousedown", function (l) {
            e = l.pageX, t = l.pageY, i = !1
        }), this.container.delegate("[class~='jvectormap-element']", "mouseup", function () {
            var l = -1 === (jvm.$(this).attr("class").baseVal ? jvm.$(this).attr("class").baseVal : jvm.$(this).attr("class")).indexOf("jvectormap-region") ? "marker" : "region",
                e = jvm.$(this).attr("region" == l ? "data-code" : "data-index"),
                t = jvm.$.Event(l + "Click.jvectormap"),
                a = "region" == l ? r.regions[e].element : r.markers[e].element;
            i || (r.container.trigger(t, [e]), ("region" === l && r.params.regionsSelectable || "marker" === l && r.params.markersSelectable) && (t.isDefaultPrevented() || (r.params[l + "sSelectableOne"] && r.clearSelected(l + "s"), a.setSelected(!a.isSelected))))
        })
    },
    bindZoomButtons: function () {
        var l = this;
        jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container), jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container), this.container.find(".jvectormap-zoomin").click(function () {
            l.setScale(l.scale * l.params.zoomStep, l.width / 2, l.height / 2, !1, l.params.zoomAnimate)
        }), this.container.find(".jvectormap-zoomout").click(function () {
            l.setScale(l.scale / l.params.zoomStep, l.width / 2, l.height / 2, !1, l.params.zoomAnimate)
        })
    },
    createTip: function () {
        var a = this;
        this.tip = jvm.$("<div/>").addClass("jvectormap-tip").appendTo(jvm.$("body")), this.container.mousemove(function (l) {
            var e = l.pageX - 15 - a.tipWidth,
                t = l.pageY - 15 - a.tipHeight;
            e < 5 && (e = l.pageX + 15), t < 5 && (t = l.pageY + 15), a.tip.css({
                left: e,
                top: t
            })
        })
    },
    setScale: function (l, e, t, a, i) {
        var s, n, r, h, o, m, p, c, d, u = jvm.$.Event("zoom.jvectormap"),
            v = this,
            M = 0,
            g = Math.abs(Math.round(60 * (l - this.scale) / Math.max(l, this.scale))),
            f = new jvm.$.Deferred;
        return l > this.params.zoomMax * this.baseScale ? l = this.params.zoomMax * this.baseScale : l < this.params.zoomMin * this.baseScale && (l = this.params.zoomMin * this.baseScale), void 0 !== e && void 0 !== t && (zoomStep = l / this.scale, d = a ? (c = e + this.defaultWidth * (this.width / (this.defaultWidth * l)) / 2, t + this.defaultHeight * (this.height / (this.defaultHeight * l)) / 2) : (c = this.transX - (zoomStep - 1) / l * e, this.transY - (zoomStep - 1) / l * t)), i && 0 < g ? (n = this.scale, r = (l - n) / g, h = this.transX * this.scale, m = this.transY * this.scale, o = (c * l - h) / g, p = (d * l - m) / g, s = setInterval(function () {
            M += 1, v.scale = n + r * M, v.transX = (h + o * M) / v.scale, v.transY = (m + p * M) / v.scale, v.applyTransform(), M == g && (clearInterval(s), v.container.trigger(u, [l / v.baseScale]), f.resolve())
        }, 10)) : (this.transX = c, this.transY = d, this.scale = l, this.applyTransform(), this.container.trigger(u, [l / this.baseScale]), f.resolve()), f
    },
    setFocus: function (l) {
        var e, t, a, i, s;
        if ((l = l || {}).region ? a = [l.region] : l.regions && (a = l.regions), a) {
            for (i = 0; i < a.length; i++) this.regions[a[i]] && ((t = this.regions[a[i]].element.shape.getBBox()) && (e = void 0 === e ? t : {
                x: Math.min(e.x, t.x),
                y: Math.min(e.y, t.y),
                width: Math.max(e.x + e.width, t.x + t.width) - Math.min(e.x, t.x),
                height: Math.max(e.y + e.height, t.y + t.height) - Math.min(e.y, t.y)
            }));
            return this.setScale(Math.min(this.width / e.width, this.height / e.height), -(e.x + e.width / 2), -(e.y + e.height / 2), !0, l.animate)
        }
        return l.lat && l.lng ? (s = this.latLngToPoint(l.lat, l.lng), l.x = this.transX - s.x / this.scale, l.y = this.transY - s.y / this.scale) : l.x && l.y && (l.x *= -this.defaultWidth, l.y *= -this.defaultHeight), this.setScale(l.scale * this.baseScale, l.x, l.y, !0, l.animate)
    },
    getSelected: function (l) {
        var e, t = [];
        for (e in this[l]) this[l][e].element.isSelected && t.push(e);
        return t
    },
    getSelectedRegions: function () {
        return this.getSelected("regions")
    },
    getSelectedMarkers: function () {
        return this.getSelected("markers")
    },
    setSelected: function (l, e) {
        var t;
        if ("object" != typeof e && (e = [e]), jvm.$.isArray(e))
            for (t = 0; t < e.length; t++) this[l][e[t]].element.setSelected(!0);
        else
            for (t in e) this[l][t].element.setSelected(!!e[t])
    },
    setSelectedRegions: function (l) {
        this.setSelected("regions", l)
    },
    setSelectedMarkers: function (l) {
        this.setSelected("markers", l)
    },
    clearSelected: function (l) {
        var e, t = {},
            a = this.getSelected(l);
        for (e = 0; e < a.length; e++) t[a[e]] = !1;
        this.setSelected(l, t)
    },
    clearSelectedRegions: function () {
        this.clearSelected("regions")
    },
    clearSelectedMarkers: function () {
        this.clearSelected("markers")
    },
    getMapObject: function () {
        return this
    },
    getRegionName: function (l) {
        return this.mapData.paths[l].name
    },
    createRegions: function () {
        var l, e, t = this;
        for (l in this.regionLabelsGroup = this.regionLabelsGroup || this.canvas.addGroup(), this.mapData.paths) e = new jvm.Region({
            map: this,
            path: this.mapData.paths[l].path,
            code: l,
            style: jvm.$.extend(!0, {}, this.params.regionStyle),
            labelStyle: jvm.$.extend(!0, {}, this.params.regionLabelStyle),
            canvas: this.canvas,
            labelsGroup: this.regionLabelsGroup,
            label: "vml" != this.canvas.mode ? this.params.labels && this.params.labels.regions : null
        }), jvm.$(e.shape).bind("selected", function (l, e) {
            t.container.trigger("regionSelected.jvectormap", [jvm.$(this.node).attr("data-code"), e, t.getSelectedRegions()])
        }), this.regions[l] = {
            element: e,
            config: this.mapData.paths[l]
        }
    },
    createMarkers: function (l) {
        var e, t, a, i, s, n = this;
        if (this.markersGroup = this.markersGroup || this.canvas.addGroup(), this.markerLabelsGroup = this.markerLabelsGroup || this.canvas.addGroup(), jvm.$.isArray(l))
            for (s = l.slice(), l = {}, e = 0; e < s.length; e++) l[e] = s[e];
        for (e in l) i = l[e] instanceof Array ? {
            latLng: l[e]
        } : l[e], !1 !== (a = this.getMarkerPosition(i)) && (t = new jvm.Marker({
            map: this,
            style: jvm.$.extend(!0, {}, this.params.markerStyle, {
                initial: i.style || {}
            }),
            labelStyle: jvm.$.extend(!0, {}, this.params.markerLabelStyle),
            index: e,
            cx: a.x,
            cy: a.y,
            group: this.markersGroup,
            canvas: this.canvas,
            labelsGroup: this.markerLabelsGroup,
            label: "vml" != this.canvas.mode ? this.params.labels && this.params.labels.markers : null
        }), jvm.$(t.shape).bind("selected", function (l, e) {
            n.container.trigger("markerSelected.jvectormap", [jvm.$(this.node).attr("data-index"), e, n.getSelectedMarkers()])
        }), this.markers[e] && this.removeMarkers([e]), this.markers[e] = {
            element: t,
            config: i
        })
    },
    repositionMarkers: function () {
        var l, e;
        for (l in this.markers) !1 !== (e = this.getMarkerPosition(this.markers[l].config)) && this.markers[l].element.setStyle({
            cx: e.x,
            cy: e.y
        })
    },
    repositionLabels: function () {
        var l;
        for (l in this.regions) this.regions[l].element.updateLabelPosition();
        for (l in this.markers) this.markers[l].element.updateLabelPosition()
    },
    getMarkerPosition: function (l) {
        return jvm.Map.maps[this.params.map].projection ? this.latLngToPoint.apply(this, l.latLng || [0, 0]) : {
            x: l.coords[0] * this.scale + this.transX * this.scale,
            y: l.coords[1] * this.scale + this.transY * this.scale
        }
    },
    addMarker: function (l, e, t) {
        var a, i, s = {},
            n = [];
        t = t || [];
        for (s[l] = e, i = 0; i < t.length; i++) a = {}, void 0 !== t[i] && (a[l] = t[i]), n.push(a);
        this.addMarkers(s, n)
    },
    addMarkers: function (l, e) {
        var t;
        for (e = e || [], this.createMarkers(l), t = 0; t < e.length; t++) this.series.markers[t].setValues(e[t] || {})
    },
    removeMarkers: function (l) {
        var e;
        for (e = 0; e < l.length; e++) this.markers[l[e]].element.remove(), delete this.markers[l[e]]
    },
    removeAllMarkers: function () {
        var l, e = [];
        for (l in this.markers) e.push(l);
        this.removeMarkers(e)
    },
    latLngToPoint: function (l, e) {
        var t, a, i, s = jvm.Map.maps[this.params.map].projection,
            n = s.centralMeridian;
        return e < -180 + n && (e += 360), t = jvm.Proj[s.type](l, e, n), !!(a = this.getInsetForPoint(t.x, t.y)) && (i = a.bbox, t.x = (t.x - i[0].x) / (i[1].x - i[0].x) * a.width * this.scale, t.y = (t.y - i[0].y) / (i[1].y - i[0].y) * a.height * this.scale, {
            x: t.x + this.transX * this.scale + a.left * this.scale,
            y: t.y + this.transY * this.scale + a.top * this.scale
        })
    },
    pointToLatLng: function (l, e) {
        var t, a, i, s, n, r = jvm.Map.maps[this.params.map].projection,
            h = r.centralMeridian,
            o = jvm.Map.maps[this.params.map].insets;
        for (t = 0; t < o.length; t++)
            if (i = (a = o[t]).bbox, s = l - (this.transX * this.scale + a.left * this.scale), n = e - (this.transY * this.scale + a.top * this.scale), s = s / (a.width * this.scale) * (i[1].x - i[0].x) + i[0].x, n = n / (a.height * this.scale) * (i[1].y - i[0].y) + i[0].y, s > i[0].x && s < i[1].x && n > i[0].y && n < i[1].y) return jvm.Proj[r.type + "_inv"](s, -n, h);
        return !1
    },
    getInsetForPoint: function (l, e) {
        var t, a, i = jvm.Map.maps[this.params.map].insets;
        for (t = 0; t < i.length; t++)
            if (l > (a = i[t].bbox)[0].x && l < a[1].x && e > a[0].y && e < a[1].y) return i[t]
    },
    createSeries: function () {
        var l, e;
        for (e in this.series = {
                markers: [],
                regions: []
            }, this.params.series)
            for (l = 0; l < this.params.series[e].length; l++) this.series[e][l] = new jvm.DataSeries(this.params.series[e][l], this[e], this)
    },
    remove: function () {
        this.tip.remove(), this.container.remove(), jvm.$(window).unbind("resize", this.onResize), jvm.$("body").unbind("mouseup", this.onContainerMouseUp)
    }
}, jvm.Map.maps = {}, jvm.Map.defaultParams = {
    map: "world_mill_en",
    backgroundColor: "#505050",
    zoomButtons: !0,
    zoomOnScroll: !0,
    zoomOnScrollSpeed: 3,
    panOnDrag: !0,
    zoomMax: 8,
    zoomMin: 1,
    zoomStep: 1.6,
    zoomAnimate: !0,
    regionsSelectable: !1,
    markersSelectable: !1,
    bindTouchEvents: !0,
    regionStyle: {
        initial: {
            fill: "white",
            "fill-opacity": 1,
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 1
        },
        hover: {
            "fill-opacity": .8,
            cursor: "pointer"
        },
        selected: {
            fill: "yellow"
        },
        selectedHover: {}
    },
    regionLabelStyle: {
        initial: {
            "font-family": "Verdana",
            "font-size": "12",
            "font-weight": "bold",
            cursor: "default",
            fill: "black"
        },
        hover: {
            cursor: "pointer"
        }
    },
    markerStyle: {
        initial: {
            fill: "grey",
            stroke: "#505050",
            "fill-opacity": 1,
            "stroke-width": 1,
            "stroke-opacity": 1,
            r: 5
        },
        hover: {
            stroke: "black",
            "stroke-width": 2,
            cursor: "pointer"
        },
        selected: {
            fill: "blue"
        },
        selectedHover: {}
    },
    markerLabelStyle: {
        initial: {
            "font-family": "Verdana",
            "font-size": "12",
            "font-weight": "bold",
            cursor: "default",
            fill: "black"
        },
        hover: {
            cursor: "pointer"
        }
    }
}, jvm.Map.apiEvents = {
    onRegionTipShow: "regionTipShow",
    onRegionOver: "regionOver",
    onRegionOut: "regionOut",
    onRegionClick: "regionClick",
    onRegionSelected: "regionSelected",
    onMarkerTipShow: "markerTipShow",
    onMarkerOver: "markerOver",
    onMarkerOut: "markerOut",
    onMarkerClick: "markerClick",
    onMarkerSelected: "markerSelected",
    onViewportChange: "viewportChange"
}, jvm.MultiMap = function (l) {
    var e = this;
    this.maps = {}, this.params = jvm.$.extend(!0, {}, jvm.MultiMap.defaultParams, l), this.params.maxLevel = this.params.maxLevel || Number.MAX_VALUE, this.params.main = this.params.main || {}, this.params.main.multiMapLevel = 0, this.history = [this.addMap(this.params.main.map, this.params.main)], this.defaultProjection = this.history[0].mapData.projection.type, this.mapsLoaded = {}, this.params.container.css({
        position: "relative"
    }), this.backButton = jvm.$("<div/>").addClass("jvectormap-goback").text("Back").appendTo(this.params.container), this.backButton.hide(), this.backButton.click(function () {
        e.goBack()
    }), this.spinner = jvm.$("<div/>").addClass("jvectormap-spinner").appendTo(this.params.container), this.spinner.hide()
}, jvm.MultiMap.prototype = {
    addMap: function (l, e) {
        var t = jvm.$("<div/>").css({
            width: "100%",
            height: "100%"
        });
        return this.params.container.append(t), this.maps[l] = new jvm.Map(jvm.$.extend(e, {
            container: t
        })), this.params.maxLevel > e.multiMapLevel && this.maps[l].container.on("regionClick.jvectormap", {
            scope: this
        }, function (l, e) {
            var t = l.data.scope,
                a = t.params.mapNameByCode(e, t);
            t.drillDownPromise && "pending" === t.drillDownPromise.state() || t.drillDown(a, e)
        }), this.maps[l]
    },
    downloadMap: function (l) {
        var e = this,
            t = jvm.$.Deferred();
        return this.mapsLoaded[l] ? t.resolve() : jvm.$.get(this.params.mapUrlByCode(l, this)).then(function () {
            e.mapsLoaded[l] = !0, t.resolve()
        }, function () {
            t.reject()
        }), t
    },
    drillDown: function (l, e) {
        var t = this.history[this.history.length - 1],
            a = this,
            i = t.setFocus({
                region: e,
                animate: !0
            }),
            s = this.downloadMap(e);
        i.then(function () {
            "pending" === s.state() && a.spinner.show()
        }), s.always(function () {
            a.spinner.hide()
        }), this.drillDownPromise = jvm.$.when(s, i), this.drillDownPromise.then(function () {
            t.params.container.hide(), a.maps[l] ? a.maps[l].params.container.show() : a.addMap(l, {
                map: l,
                multiMapLevel: t.params.multiMapLevel + 1
            }), a.history.push(a.maps[l]), a.backButton.show()
        })
    },
    goBack: function () {
        var l = this.history.pop(),
            e = this.history[this.history.length - 1],
            t = this;
        l.setFocus({
            scale: 1,
            x: .5,
            y: .5,
            animate: !0
        }).then(function () {
            l.params.container.hide(), e.params.container.show(), e.updateSize(), 1 === t.history.length && t.backButton.hide(), e.setFocus({
                scale: 1,
                x: .5,
                y: .5,
                animate: !0
            })
        })
    }
}, jvm.MultiMap.defaultParams = {
    mapNameByCode: function (l, e) {
        return l.toLowerCase() + "_" + e.defaultProjection + "_en"
    },
    mapUrlByCode: function (l, e) {
        return "jquery-jvectormap-data-" + l.toLowerCase() + "-" + e.defaultProjection + "-en.js"
    }
}, jQuery.fn.vectorMap("addMap", "de_merc", {
    insets: [{
        width: 900,
        top: 0,
        height: 1223.9059488513599,
        bbox: [{
            y: -7378296.907634238,
            x: 651826.6317576179
        }, {
            y: -5989477.065138949,
            x: 1673096.1659230748
        }],
        left: 0
    }],
    paths: {
        "DE-BE": {
            path: "M710.93,440.02l1.18,-1.74l0.31,-1.22l0.96,-1.12l-0.74,-2.47l0.48,-2.76l1.43,-1.17l2.76,-3.42l-0.06,-1.12l-1.49,-2.7l0.73,-8.19l-0.34,-1.59l0.66,-1.8l0.16,-0.16l4.76,2.11l1.12,-0.08l0.34,-0.81l-0.73,-2.2l1.06,-3.37l2.86,-0.48l1.08,-0.61l1.16,-1.09l0.98,-2.38l0.39,-0.31l0.66,0.02l0.24,3.25l0.83,1.09l1.82,0.8l3.7,0.26l1.88,-0.6l0.87,-1.69l2.0,-1.67l1.64,1.09l1.02,-0.05l0.87,-1.44l2.34,-2.09l0.79,1.34l1.69,1.64l-0.22,3.78l0.49,1.72l6.52,7.61l2.15,1.62l1.21,0.49l0.9,0.87l1.57,0.69l1.75,0.25l0.06,0.82l-2.29,5.42l-0.17,1.2l0.33,0.82l0.41,0.22l3.62,-0.43l1.09,0.58l1.94,2.43l3.86,1.75l1.27,1.34l-0.07,0.48l-1.02,1.02l-0.47,3.04l-2.57,2.53l-0.43,1.22l0.23,2.4l-0.28,1.58l-0.53,0.53l-2.57,0.96l-1.67,3.08l-0.45,-0.09l-0.56,-5.11l-0.49,-0.95l-0.7,-0.55l-1.77,0.03l-2.39,-0.8l-1.87,-1.09l-3.86,-1.52l-1.47,0.22l-1.05,0.87l-1.63,-0.07l-1.5,-2.36l-1.1,-0.55l-2.66,0.73l-0.84,0.62l-0.37,1.03l0.22,3.35l-2.67,-0.02l-1.64,-0.79l-2.96,-3.35l-3.68,0.97l-1.14,-1.98l-0.54,-0.29l-4.06,1.65l-2.27,-1.73l-1.46,-0.24l-4.23,1.95l-1.4,1.29l-3.62,-0.79l-2.35,-1.71Z",
            name: "Berlin"
        },
        "DE-ST": {
            path: "M511.76,466.87l-0.19,-2.32l-0.7,-0.44l-1.04,0.15l-2.76,-3.9l0.52,-0.91l1.16,-1.03l0.2,-0.98l-1.16,-2.7l-1.94,-1.17l-0.28,-1.74l1.63,-0.79l4.59,-0.93l0.63,-0.97l0.35,-2.41l-0.71,-1.37l-2.88,-2.43l-1.7,-0.6l-0.9,-0.75l-6.93,-9.3l0.21,-2.09l1.0,-2.72l1.58,-0.71l2.7,0.41l0.63,-0.69l-0.79,-1.85l-3.95,-5.86l-0.66,-2.68l0.16,-3.99l2.53,-3.1l0.36,-0.85l-0.08,-0.7l-0.56,-0.79l-1.71,-0.55l-1.09,0.38l-1.12,1.08l-0.45,-0.06l-4.13,-5.88l-4.69,-9.5l-1.66,-1.12l-1.11,-0.05l-0.75,-0.81l-0.72,-4.15l-1.93,-2.25l-1.65,-3.87l0.32,-2.36l-0.33,-2.71l0.36,-1.35l-0.15,-1.35l3.27,-1.5l4.54,-0.34l4.3,0.2l5.62,-1.97l1.86,-0.99l1.06,-1.37l1.88,-1.5l0.45,-0.81l0.52,-3.11l1.3,-0.77l3.38,-0.06l2.87,0.75l2.61,1.15l5.8,-0.42l4.6,0.87l1.07,1.04l1.26,0.54l0.9,1.52l0.85,0.44l1.18,-0.25l1.82,-1.22l0.82,0.32l2.16,-0.13l5.94,-2.55l3.5,-0.95l6.05,-5.65l2.56,-0.25l0.67,-0.54l-0.49,-4.32l0.54,-3.6l0.7,-1.79l1.22,-0.57l1.34,0.43l1.51,-0.09l1.11,-0.9l1.84,-5.16l3.98,-1.11l0.67,0.45l0.04,1.21l-0.51,1.41l-0.75,0.79l0.1,0.63l1.51,0.74l3.13,0.13l0.93,0.69l0.82,3.56l0.78,1.19l1.92,0.3l3.52,-1.8l1.19,-0.26l2.83,4.33l1.46,1.2l3.21,0.23l0.85,0.5l-0.43,1.53l-1.19,1.86l0.01,1.13l6.37,4.32l2.87,0.62l3.9,2.08l1.8,0.4l1.63,-0.6l2.43,0.08l7.08,-0.8l0.82,0.81l0.44,1.0l-0.1,1.76l0.35,0.42l2.54,0.14l3.73,-1.08l2.58,1.01l0.9,1.63l1.95,7.11l-0.38,1.6l-3.09,2.6l-0.31,0.64l0.13,2.03l1.17,2.44l-1.23,1.35l-0.58,1.36l0.34,1.4l1.02,1.72l0.66,2.44l1.72,1.93l-0.22,2.66l-0.96,3.06l-1.01,1.83l-1.62,0.75l-1.93,-0.11l-0.74,0.36l-0.51,2.59l-0.57,6.43l-2.71,4.59l0.31,0.62l0.59,0.23l2.89,-0.06l-1.55,2.53l0.34,2.08l0.89,0.9l1.43,0.36l2.27,-0.7l1.13,-1.26l0.54,-2.34l0.31,-0.28l1.4,0.72l1.94,3.12l0.8,0.66l2.14,-0.05l1.27,-0.43l-0.53,1.36l-0.13,3.41l-2.01,4.44l-1.84,2.01l-0.04,0.59l0.99,2.32l-0.77,2.88l-1.73,3.62l0.16,1.23l-0.4,1.77l0.55,2.85l-1.33,2.64l-1.56,5.1l0.37,3.89l1.15,1.45l1.27,0.39l1.31,2.34l-2.49,2.98l-2.25,6.41l1.74,4.46l2.91,3.03l1.02,2.69l2.47,1.5l1.76,1.92l6.04,8.22l0.44,2.9l1.46,1.5l4.7,3.4l2.58,-0.11l0.64,-0.53l0.49,-1.0l0.66,0.02l2.52,3.08l4.6,3.6l1.85,1.06l4.89,0.9l1.34,-1.33l2.5,-1.42l0.8,-1.79l0.76,0.01l12.48,7.63l4.91,0.77l1.31,0.93l1.19,3.39l0.65,0.55l0.99,0.26l4.48,0.06l2.89,0.82l1.11,1.01l1.78,2.51l5.51,3.88l1.89,0.76l6.62,-0.75l0.49,0.1l0.83,1.07l1.32,0.87l0.52,-0.14l1.63,-2.54l3.54,0.15l1.43,0.62l-0.67,1.56l-3.36,3.81l-3.59,6.03l0.11,6.61l2.2,5.14l-0.29,1.69l-2.65,3.63l-6.68,5.45l-1.94,3.5l-1.34,-0.34l-2.04,-2.14l-1.47,-0.84l-1.06,0.29l-1.06,0.91l-0.9,0.16l-1.32,-1.55l-2.19,-1.12l-2.66,-0.76l-1.12,-0.78l-1.03,-2.22l-0.4,-0.23l-2.85,0.28l-1.14,1.48l-5.05,4.22l-1.68,0.79l-2.82,-1.22l-3.88,-0.46l-1.59,0.98l-1.73,3.18l-1.87,1.62l-0.7,0.07l-0.41,-0.59l-0.83,-0.3l-9.29,1.63l-1.32,-0.89l-7.92,-0.32l-1.23,0.71l-0.39,3.02l-0.6,1.22l-7.2,0.73l-5.73,2.6l-2.87,-0.32l-2.41,-1.15l-1.07,-0.17l-0.56,0.72l-0.57,2.17l-2.81,2.39l-0.15,7.63l-0.4,1.65l-0.86,0.71l-0.79,1.3l-1.61,1.32l-0.18,0.66l0.24,3.33l0.87,1.84l0.25,6.13l1.44,3.78l-0.02,3.0l-0.62,1.26l-1.8,0.22l-1.27,1.06l-0.99,1.85l-0.44,2.31l0.75,2.46l0.13,3.19l1.92,2.71l0.34,1.47l0.33,4.48l-0.42,1.5l-0.98,1.36l-0.04,1.45l1.15,0.74l1.84,0.47l-0.38,4.14l1.02,1.98l2.07,1.96l0.35,2.52l0.38,0.69l0.69,0.55l3.84,0.76l0.13,0.8l-1.67,3.02l-0.51,3.28l0.45,0.92l1.87,0.94l0.79,1.77l-2.3,4.57l-3.4,4.33l-0.28,1.47l0.32,1.26l-1.45,1.21l-0.43,-0.04l-0.73,-1.27l-2.49,-2.32l-0.85,-0.35l-0.73,0.1l-0.77,0.74l-1.29,0.57l-5.62,-1.82l-2.95,0.69l-3.72,0.38l-0.46,-1.6l-3.15,-1.71l-0.73,-0.89l-0.66,-1.92l-1.47,-1.39l-4.85,-2.22l-2.28,-1.7l-1.31,-0.22l-8.74,0.77l-1.28,0.91l-0.45,-0.19l-1.15,-1.06l-0.5,-2.07l-2.27,-4.35l-0.38,-3.78l-0.59,-0.75l-2.18,-1.42l-0.7,-0.11l-3.4,0.86l-4.52,-0.09l-4.64,-0.62l-2.94,1.71l-5.26,-0.27l-1.77,-0.87l-0.51,-0.87l-0.65,-2.72l0.71,-0.42l0.36,-0.66l-0.11,-2.34l-0.66,-2.65l-2.1,-3.62l-1.05,-1.18l-2.23,-0.91l-2.12,-1.39l-0.97,-1.55l1.11,-1.6l4.81,-0.91l2.69,-1.52l2.11,-2.49l0.87,-2.0l-5.66,-8.78l-2.67,-5.06l-5.24,-4.19l-2.67,-0.93l-9.18,-1.37l-4.2,0.08l-15.08,-1.86l-2.43,-1.39l-0.69,-1.32l0.67,-6.12l-2.55,-5.15l0.11,-3.74l-2.01,-2.73l-1.37,-3.94l-0.05,-0.75l0.44,-0.46l2.31,0.61l1.13,-0.89l-0.07,-1.79l-0.89,-2.07l-0.52,-0.44l-1.47,-0.13l-3.12,-1.31l-1.47,-1.29l-2.79,-0.06l-4.44,-2.33l-8.84,0.21l-1.36,-0.87l-2.71,-4.96l0.01,-3.6l-0.54,-2.39l-0.61,-1.07l-1.35,-1.2l-1.38,-2.69l-1.08,-3.21l-1.66,-1.23l-1.67,-1.87l-0.67,-4.1l0.36,-6.53l2.08,-1.27l1.03,-1.6l1.38,-0.82l1.23,-2.14l0.13,-1.41l-0.6,-3.28l-2.15,-1.94l0.47,-2.82l0.68,-0.7l1.56,-0.74l0.45,-1.05l-0.41,-0.52l-1.39,0.08l-1.35,-1.59l-2.28,-1.14l-0.26,-1.39l-1.49,-2.14l-0.22,-0.9l0.64,-0.35l2.89,0.32l1.4,-0.46l2.94,-3.11l0.09,-1.88l0.66,-0.39l5.48,-0.87l13.01,-0.0l2.65,-1.03l1.88,-0.28l5.81,0.09l0.98,-0.4l0.81,-1.67l0.02,-2.13l-0.39,-0.79l-1.7,-1.35l-0.02,-0.58l0.71,-0.61l3.37,-1.07l2.19,-1.25l2.44,-2.09l1.88,-2.91l0.15,-1.55l-0.43,-1.9l-0.96,-0.88l-1.5,-0.38l-0.91,-1.92l0.9,-2.41l0.7,-0.74l3.37,-1.16l1.22,-1.18l0.28,-2.58l-0.3,-1.37l-0.97,-0.82l-0.63,0.27l-0.34,0.69Z",
            name: "Sachsen-Anhalt"
        },
        "DE-RP": {
            path: "M24.68,808.35l1.03,-5.98l0.65,-2.12l0.84,-0.99l0.36,-1.18l-0.35,-1.19l-0.91,-0.81l0.59,-2.57l0.64,-0.4l1.86,-0.15l0.92,-0.54l0.77,-1.77l0.04,-1.86l-0.55,-1.74l-1.17,-1.36l0.78,-1.02l2.17,-1.54l1.01,-1.5l1.91,-0.9l4.19,-1.18l1.97,-1.72l-0.3,-1.71l0.18,-1.4l1.5,-2.47l1.16,-0.67l3.37,0.75l2.75,-0.48l1.45,-1.43l0.04,-1.04l2.19,-0.05l2.75,-1.46l0.24,-0.54l-0.28,-0.98l-3.15,-5.07l0.23,-1.07l0.62,0.02l0.63,0.52l0.82,1.56l2.25,1.42l0.83,2.34l0.84,0.54l2.39,-0.87l4.61,-3.4l4.24,-0.74l1.26,-0.56l1.09,0.29l2.15,1.26l-0.46,1.94l0.42,0.55l0.55,0.1l1.26,-0.03l1.4,-0.67l1.29,-1.11l0.53,-0.03l1.57,1.17l1.21,1.55l1.86,0.47l7.83,-2.21l0.62,-0.74l0.16,-0.85l-0.34,-1.57l-1.61,-3.04l-0.38,-4.8l-0.56,-0.82l-1.87,-1.1l0.81,-2.56l-0.1,-2.33l1.41,-0.84l3.85,-1.4l1.29,2.43l1.3,1.09l1.55,0.41l1.45,-0.24l0.92,-0.99l0.79,-1.6l0.23,-3.13l-0.47,-3.75l2.64,-1.04l1.54,-1.88l0.98,-1.98l3.01,-0.7l2.71,-1.07l6.06,-4.03l1.07,0.12l2.09,0.91l1.41,-0.64l1.08,-2.11l2.21,0.76l1.32,-0.32l2.47,-2.55l0.84,-0.44l1.11,-2.64l1.36,0.63l0.58,1.49l0.53,0.39l5.61,0.4l5.8,-1.59l3.39,-2.58l0.19,-2.1l0.88,-1.77l0.09,-3.98l-0.36,-0.68l0.43,-0.48l2.19,-0.65l3.75,0.3l8.22,-2.3l3.88,-2.17l2.83,0.18l0.47,-0.37l1.35,-2.56l4.31,-1.88l1.39,-2.17l1.04,0.64l1.05,-0.59l0.35,-1.27l-0.1,-1.38l-0.54,-1.05l-1.45,-1.5l3.3,-2.03l2.37,-2.59l2.46,0.86l0.88,-0.68l0.05,-2.73l-1.22,-3.12l-0.36,-3.78l0.29,-1.56l2.9,-2.8l1.07,-0.32l5.25,1.47l-1.36,5.45l0.1,1.17l1.45,1.19l2.59,0.9l3.7,3.96l1.88,1.45l0.97,-0.03l1.69,-0.74l1.21,4.97l-0.23,4.73l1.05,2.01l4.14,5.4l1.6,2.84l0.66,2.66l0.63,0.4l0.52,-0.07l2.95,-1.17l0.98,0.29l2.45,1.54l-0.35,2.27l-1.02,2.91l2.01,5.01l0.36,2.37l0.67,1.4l0.91,0.55l0.29,0.56l-2.51,6.58l-2.09,1.83l-0.58,0.28l-1.16,-0.14l-2.49,-2.78l-1.65,-0.09l-1.17,0.25l-0.72,0.53l-1.52,2.08l-1.7,1.34l-0.42,1.92l-0.09,6.68l0.69,1.05l1.2,0.73l-1.76,2.0l-1.23,4.28l-1.14,0.96l-0.3,0.97l0.95,1.16l4.35,1.11l0.51,1.64l1.77,0.94l2.92,6.18l0.99,1.1l1.08,0.63l0.6,1.18l1.42,4.64l-0.09,1.47l-0.64,0.51l-1.46,0.37l-5.1,-0.14l-0.86,0.8l-0.55,1.81l0.1,0.69l0.87,1.16l-1.72,2.76l-0.79,-0.24l-1.56,-1.55l-0.67,-0.05l-1.3,1.38l-5.75,3.02l-1.25,1.81l-1.17,2.7l-0.25,1.57l0.14,1.31l0.75,1.0l2.49,1.74l-0.81,3.76l-2.11,-1.87l-3.96,0.42l-1.3,1.98l-0.72,3.29l-2.7,1.66l-3.86,3.01l-0.04,0.6l1.41,0.82l6.26,5.68l0.66,1.13l0.35,2.0l2.1,2.78l4.08,-0.16l4.26,-1.41l4.75,-2.5l3.81,-2.9l12.18,-4.15l2.53,-0.08l1.09,0.26l1.38,0.89l10.45,11.9l1.86,4.99l-1.43,5.4l0.78,1.98l2.23,3.31l0.95,2.07l0.91,4.12l1.88,3.51l1.49,3.86l0.38,0.22l1.81,-0.11l1.94,-0.44l0.96,0.38l-0.2,1.13l-3.25,4.48l-3.21,0.66l-2.8,1.96l-1.71,3.14l-0.17,4.01l1.51,3.74l2.4,4.63l1.6,4.55l-0.76,3.85l1.88,3.14l2.19,6.46l1.3,2.76l0.0,0.7l-1.85,0.92l-0.22,1.39l0.25,0.37l1.67,0.66l3.25,0.74l0.81,1.34l-1.29,3.09l0.73,5.13l-3.49,7.91l-0.22,1.37l0.26,0.44l1.99,0.71l-0.27,1.45l-6.66,7.88l-1.28,0.7l-1.16,1.28l-0.66,2.62l-1.87,14.27l-0.42,1.45l-7.19,14.87l-2.03,3.17l-3.09,3.33l-2.59,0.95l-1.17,-1.03l-9.59,-2.0l-15.65,-8.35l-1.86,-0.2l-5.51,0.58l-8.09,-2.35l-1.3,0.29l-3.42,1.55l-4.02,-1.05l-3.63,1.04l-1.17,-0.27l-0.78,-0.66l-1.81,-2.94l-2.3,-1.18l-4.21,-0.74l-2.02,-1.28l-3.44,-5.16l-1.26,-1.33l1.07,-1.32l-0.89,-2.43l-1.89,-0.67l-3.95,-0.27l-0.35,-1.39l-0.35,-0.3l-1.91,-0.16l-1.75,0.5l-0.44,-0.35l-1.81,0.05l-1.72,-1.49l-3.41,-3.78l-0.73,-3.72l0.1,-1.22l0.64,-1.31l0.91,0.09l1.07,-0.33l1.44,-1.99l0.75,-3.33l1.47,-1.7l0.58,-2.71l1.94,-1.7l0.91,-1.51l0.1,-0.8l-0.42,-1.16l0.66,-1.97l-0.53,-1.35l-1.19,-0.78l-2.45,-0.92l-4.83,-0.82l-0.58,-0.37l0.28,-0.8l-0.3,-0.78l-3.98,-4.82l-0.54,-2.03l1.23,-1.09l1.88,-2.43l2.62,-1.77l0.42,-1.41l-0.35,-2.04l-1.18,-0.66l-0.25,-4.03l-1.15,-2.32l-0.57,-1.84l-0.01,-2.22l-0.53,-0.54l-0.66,-0.06l-1.96,1.51l-0.84,0.3l-1.75,0.38l-0.95,-0.11l-4.62,-3.36l-2.25,-2.16l-7.08,-0.59l-6.52,-3.71l-2.79,1.56l-0.83,-0.68l-2.21,-0.68l-0.7,0.17l-7.5,4.93l-14.4,6.66l-1.71,0.34l-2.5,-0.18l-6.26,2.86l-11.26,-0.54l-13.35,1.23l0.13,-5.72l0.52,-1.56l3.98,-5.42l2.06,-3.94l-0.18,-1.43l-1.23,-1.17l1.36,-1.91l7.15,-4.65l0.13,-0.54l-0.74,-0.97l0.17,-0.38l1.32,0.06l0.0,-0.48l-1.1,-1.91l-0.21,-1.15l0.06,-1.14l0.96,-1.0l-0.21,-2.34l0.76,-5.17l-0.8,-0.7l-3.32,-0.9l-4.77,-0.02l-1.6,-0.44l-6.1,-4.78l-1.07,-0.09l-1.94,0.85l-1.67,-3.94l-4.74,-2.41l-1.42,-1.45l-3.23,-7.78l-1.68,-2.74l-0.7,0.03l-0.72,1.44l-1.87,-4.92l-1.71,-2.63l-0.38,-1.1l0.26,-1.74l-0.61,-3.19l-0.68,-1.36l-0.89,-0.59l1.07,-1.89l-0.27,-0.63l-0.59,-0.01Z",
            name: "Rheinland-Pfalz"
        },
        "DE-BB": {
            path: "M532.76,326.37l1.53,-0.18l2.31,0.5l3.12,0.0l2.21,0.98l1.94,0.29l0.45,-0.37l0.42,-3.83l1.26,-0.63l3.01,0.0l5.24,3.0l3.04,-0.28l2.13,-1.74l0.68,-2.62l-0.99,-5.27l-1.3,-1.83l-0.21,-1.01l0.53,-1.42l4.25,-3.94l1.87,-1.23l5.25,-1.99l3.23,-0.19l1.01,0.36l2.98,2.47l1.18,2.72l0.58,0.18l1.95,-1.25l2.03,-0.73l5.09,0.25l0.43,-0.45l-0.31,-2.3l-1.68,-1.49l1.07,-0.51l2.56,0.65l0.41,-0.13l2.24,-2.74l3.7,-1.82l1.49,-0.41l1.73,0.75l0.45,-0.09l3.54,-3.22l1.43,-0.24l1.23,-2.81l0.16,-2.22l2.44,-1.68l1.43,-2.56l3.01,-1.28l2.5,-0.52l1.86,1.79l0.85,0.24l3.07,-2.1l1.04,-0.3l0.89,0.37l2.34,3.93l6.9,1.91l4.12,2.44l2.89,2.27l1.73,1.89l2.81,1.61l1.59,2.11l1.7,0.37l3.5,-0.25l2.96,-0.78l10.86,2.69l1.2,0.58l2.78,2.77l4.11,1.14l2.41,0.14l0.6,0.39l0.38,4.13l1.26,1.09l1.36,0.13l4.26,-0.94l1.28,0.09l1.22,0.44l1.45,1.22l1.65,0.42l3.88,-0.88l2.71,-0.04l1.73,-0.72l0.25,0.9l-1.1,1.05l-0.27,0.69l0.84,1.24l2.46,1.07l2.74,-0.41l4.7,-5.04l2.85,-1.82l2.25,-1.97l0.83,-1.15l0.64,-2.18l2.11,-1.5l0.96,-1.12l0.65,-0.22l1.08,0.35l2.25,3.33l1.37,0.59l2.75,-0.0l0.39,-0.32l0.59,-3.24l1.23,-2.89l1.53,-1.78l1.46,-0.74l2.44,-0.24l1.96,0.4l3.99,2.13l2.03,0.45l1.85,-0.68l5.11,-4.14l1.11,-0.42l2.52,-2.95l3.17,-7.73l0.56,-3.16l0.7,-1.73l1.27,-1.21l1.7,-0.91l3.65,-0.25l2.3,-2.18l1.8,-3.27l5.81,-5.01l3.35,-0.49l3.31,0.25l3.09,-1.32l0.23,-0.45l-0.5,-2.15l-2.41,-4.54l0.15,-2.52l1.07,0.16l2.54,3.86l4.34,1.7l0.19,3.51l2.81,5.15l0.56,2.32l1.89,2.48l6.84,-0.51l5.75,0.42l2.11,0.85l2.44,0.51l0.41,-0.16l1.89,-2.69l2.15,-0.45l3.59,1.77l4.07,-0.25l1.93,0.43l0.14,4.01l-0.45,2.99l-1.49,3.51l-3.45,5.53l-8.18,5.54l-0.27,3.54l0.34,0.39l7.85,1.57l6.75,0.55l1.52,-1.24l0.56,-2.12l2.57,-1.31l2.7,-3.52l6.1,-3.79l0.54,2.51l0.52,5.99l0.64,1.17l1.52,1.32l0.44,0.97l1.06,0.98l-2.41,4.77l-0.65,0.98l-1.09,0.64l-0.97,1.46l-0.74,2.09l-0.29,2.36l1.14,7.25l-3.19,10.55l-1.27,2.85l-2.95,3.1l-5.73,4.58l-5.99,3.15l-4.91,3.86l2.01,10.46l-0.39,2.96l-0.95,1.84l-2.55,2.22l-0.1,0.48l1.13,2.28l1.82,1.48l2.19,0.71l2.2,0.17l1.82,0.81l3.26,3.82l2.65,1.42l10.37,7.67l1.46,1.72l3.42,6.71l1.13,1.07l1.77,0.83l2.94,3.93l5.79,2.3l6.2,6.99l2.86,2.37l-2.62,5.51l-0.79,3.84l1.86,1.97l0.39,1.47l-1.56,3.63l-2.33,3.71l-5.17,4.79l0.57,6.48l2.33,7.01l2.02,4.59l-0.47,3.14l2.32,2.57l3.33,1.72l2.85,0.68l2.59,1.14l1.41,2.6l-0.03,3.04l-1.92,2.68l0.06,1.21l1.34,2.1l-0.34,2.1l-1.06,2.95l-0.57,4.36l1.11,2.45l6.05,4.55l-2.34,3.35l-0.94,4.45l-2.1,3.82l-0.56,1.61l-0.36,9.79l-0.81,3.03l-1.48,2.8l-1.77,2.38l-5.61,5.73l-1.4,3.07l0.36,3.55l1.61,2.47l1.83,1.31l1.25,1.69l0.39,4.13l1.1,4.19l2.26,2.65l4.7,3.92l1.21,2.62l0.95,3.94l0.16,4.04l-1.11,3.05l-1.93,3.11l-0.8,3.07l0.12,0.81l-3.68,-0.17l-4.13,-1.73l-2.43,-1.44l-2.37,-0.46l-2.15,0.1l-4.25,1.21l-12.99,6.53l-3.58,0.83l-3.26,-2.18l-3.6,-1.33l-4.85,-0.61l-6.21,1.52l-3.95,2.19l-1.29,1.17l-3.89,5.1l-0.66,1.41l-0.17,2.38l-1.47,3.48l-7.15,10.72l-0.62,0.22l-2.28,-0.64l-16.83,2.1l-14.84,-1.15l-5.83,-1.72l-2.12,0.37l-0.96,-0.4l-1.65,-2.44l-2.5,-1.7l-2.15,-2.14l-4.85,-2.37l-2.43,0.29l-1.06,1.08l-1.36,0.73l-10.55,3.53l-1.24,-1.98l-2.09,-0.73l-0.78,0.95l-1.17,0.03l-1.36,1.66l-0.63,-1.34l-0.2,-1.45l1.63,-1.91l0.76,-2.25l0.17,-4.02l-0.18,-1.36l-0.85,-1.4l1.66,-1.39l0.42,-0.97l-0.75,-4.41l-0.71,-1.73l-2.13,-1.36l-0.84,-1.21l0.6,-3.11l-0.6,-1.42l-2.95,-2.22l-0.73,-0.02l-0.9,0.5l-0.58,-0.23l-1.27,-0.87l-2.71,-3.34l-0.87,-0.39l1.78,-3.23l6.61,-5.38l2.81,-3.83l0.37,-2.27l-2.2,-5.1l-0.11,-6.3l3.46,-5.74l3.41,-3.89l0.85,-1.98l-0.21,-0.52l-1.99,-0.84l-3.92,-0.12l-0.87,0.68l-0.99,1.89l-1.64,-1.67l-0.93,-0.3l-6.52,0.76l-1.67,-0.66l-5.44,-3.83l-1.64,-2.37l-1.34,-1.21l-1.17,-0.55l-2.01,-0.37l-5.19,-0.23l-0.31,-0.21l-1.23,-3.46l-1.61,-1.2l-4.91,-0.77l-12.52,-7.65l-1.41,-0.05l-1.04,1.99l-2.41,1.35l-1.28,1.26l-4.25,-0.94l-1.61,-0.94l-4.54,-3.55l-1.95,-2.6l-1.19,-0.83l-1.1,0.32l-0.91,1.39l-1.54,0.19l-0.89,-0.29l-5.31,-4.38l-0.43,-2.88l-6.13,-8.34l-1.83,-1.99l-2.35,-1.37l-1.04,-2.72l-2.57,-2.55l-1.12,-2.2l-0.76,-2.69l0.9,-1.69l1.25,-3.94l2.19,-2.31l0.4,-1.0l-1.55,-2.88l-0.6,-0.46l-0.83,-0.08l-0.84,-1.09l-0.22,-4.26l1.42,-4.1l1.38,-2.83l-0.55,-3.0l0.4,-1.73l-0.17,-1.12l1.68,-3.43l0.82,-3.09l-0.05,-0.87l-0.92,-1.92l1.19,-0.88l0.58,-0.94l2.03,-4.48l0.27,-1.3l-0.07,-2.36l0.64,-1.84l-0.69,-0.54l-1.25,0.52l-2.07,0.15l-2.5,-3.63l-0.83,-0.66l-1.19,-0.28l-0.91,0.65l-0.56,2.37l-0.66,0.83l-2.1,0.73l-1.07,-0.3l-0.62,-0.89l-0.13,-1.26l1.54,-2.26l-0.04,-0.67l-0.99,-0.63l-2.75,0.1l2.68,-4.3l1.02,-8.8l2.12,0.08l2.09,-1.02l1.13,-2.02l1.01,-3.22l0.2,-3.08l-1.77,-2.05l-0.61,-2.35l-1.28,-2.41l0.04,-0.78l1.76,-2.28l-0.23,-1.14l-0.97,-1.58l-0.15,-1.58l3.26,-2.96l0.57,-2.13l-0.09,-1.15l-2.5,-7.5l-0.72,-0.83l-2.93,-1.08l-3.82,1.08l-1.97,-0.09l0.06,-1.65l-0.51,-1.18l-0.79,-0.9l-0.89,-0.38l-7.01,0.86l-2.42,-0.08l-1.53,0.59l-1.49,-0.31l-4.0,-2.12l-2.71,-0.55l-6.1,-4.14l1.27,-2.2l0.53,-1.89l-0.18,-0.45l-1.38,-0.76l-2.94,-0.14l-1.22,-0.99l-2.95,-4.51l-0.42,-0.17l-1.52,0.34l-3.45,1.77l-1.42,-0.26l-1.36,-4.57l-1.35,-0.91l-3.16,-0.13l-0.79,-0.41l0.53,-0.6l0.59,-1.7l-0.05,-1.49l-1.17,-0.98l-4.55,1.13l-4.69,-1.87l-2.31,-0.32l-1.7,-0.64l-2.86,-2.99l-2.42,-0.83l-2.42,0.54l-3.14,2.21l-1.67,0.47l-1.95,-0.35l-1.5,-0.92l-3.53,-4.18l-1.36,-2.56ZM712.56,435.75l-0.84,0.95l-0.24,1.08l-1.11,1.46l-0.22,0.93l2.13,1.93l1.06,0.51l3.89,0.67l1.46,-1.35l3.95,-1.86l0.99,0.15l1.96,1.64l0.65,0.18l4.07,-1.55l0.78,1.71l0.64,0.4l0.65,0.1l3.03,-1.05l2.85,3.28l1.97,0.9l3.1,0.02l0.4,-0.34l0.19,-1.19l-0.28,-2.94l0.64,-0.58l2.21,-0.67l0.69,0.35l1.11,2.09l0.76,0.46l2.02,0.06l1.22,-0.93l1.01,-0.13l3.6,1.45l1.91,1.11l2.56,0.84l1.57,-0.08l0.78,1.06l0.5,4.89l0.6,0.84l1.28,-0.28l1.57,-3.02l2.57,-0.93l0.69,-0.75l0.38,-1.19l-0.21,-3.13l0.68,-1.44l2.21,-1.97l0.43,-1.18l0.1,-1.98l0.96,-0.91l0.17,-1.03l-1.58,-1.83l-3.93,-1.8l-1.78,-2.3l-1.41,-0.79l-3.7,0.36l0.03,-1.24l2.28,-5.36l-0.06,-1.42l-0.34,-0.37l-2.01,-0.29l-1.34,-0.61l-0.78,-0.8l-1.28,-0.54l-2.07,-1.56l-6.41,-7.49l-0.32,-1.28l0.19,-3.97l-3.12,-3.55l-0.77,0.15l-2.3,2.2l-0.68,1.26l-2.07,-1.15l-0.48,0.03l-2.28,1.91l-0.89,1.7l-1.29,0.35l-3.57,-0.25l-1.5,-0.67l-0.5,-0.63l-0.26,-3.67l-1.71,-0.14l-0.75,0.58l-1.01,2.43l-1.0,0.91l-0.77,0.45l-2.78,0.41l-0.59,0.47l-1.15,3.72l0.73,2.29l-0.43,0.05l-4.81,-2.14l-0.72,0.21l-1.08,2.54l0.35,1.59l-0.73,8.26l1.54,2.91l0.01,0.72l-4.13,4.39l-0.54,3.1l0.71,2.24Z",
            name: "Brandenburg"
        },
        "DE-NI": {
            path: "M115.48,467.94l-1.29,-4.15l0.06,-2.83l2.68,-7.01l0.82,-6.04l-1.42,-4.22l-5.97,-9.75l-0.51,-0.15l-0.62,0.29l-1.56,1.95l-2.32,0.68l-2.49,0.16l-2.68,-0.44l-5.12,-1.95l-7.71,-1.09l-2.46,-1.21l-1.82,-2.13l-0.57,-2.27l-0.49,-5.71l-1.0,-2.14l1.2,-0.14l5.45,-2.77l0.08,-0.66l-3.17,-2.7l-0.59,-0.9l-0.03,-1.16l0.63,-2.8l-0.71,-1.62l3.14,-2.28l3.17,-0.99l9.19,-0.15l5.14,1.56l4.9,-0.69l4.91,1.7l0.48,-0.2l1.79,-3.46l0.76,-5.87l0.91,-17.48l0.84,-5.37l1.73,-4.86l8.07,-12.75l2.13,-5.45l0.92,-5.27l0.16,-5.95l-0.91,-11.7l-1.22,-3.37l-0.07,-1.85l2.3,-7.72l0.31,-2.62l-0.37,-7.04l2.0,-1.73l1.77,-3.01l0.37,-2.07l-0.68,-1.83l2.3,-3.51l1.16,-0.59l2.13,-0.04l2.01,0.53l3.33,2.13l1.92,0.78l0.46,-0.12l0.02,-0.48l-2.36,-3.49l-4.08,-1.58l-22.39,-0.82l-3.4,-1.69l-1.37,-4.36l-0.03,-12.11l0.42,-2.7l1.89,-4.97l0.44,-2.47l0.67,-1.23l1.64,0.02l3.91,0.86l0.46,-0.24l0.47,-1.19l0.98,-0.63l0.71,-1.61l-0.22,-2.48l-1.01,-1.3l-2.81,-1.42l-1.13,-1.17l-0.18,-1.88l1.26,-1.65l3.18,-2.24l3.53,-3.97l1.94,-1.35l3.58,-3.74l7.62,-2.98l14.9,-1.69l2.11,2.15l2.5,0.56l14.46,-3.03l29.35,-4.12l7.48,2.19l-0.6,5.75l2.75,6.0l4.09,5.3l3.21,2.27l0.0,0.73l-0.8,2.03l0.2,0.51l3.61,1.35l0.95,1.48l-0.28,2.74l-0.84,1.38l-3.71,2.41l-3.79,0.34l-1.9,1.15l-0.17,0.46l1.79,5.5l0.92,2.11l1.41,1.55l0.47,0.09l2.26,-1.04l1.46,0.06l1.0,0.55l1.82,2.12l1.48,1.16l1.97,3.2l1.6,0.75l1.65,-0.05l1.4,-0.33l1.13,-0.7l1.27,-1.27l2.07,-3.46l2.24,-5.84l0.53,-5.66l-2.94,-3.62l-0.41,-0.13l-3.77,1.01l-1.61,-0.27l0.16,-2.01l0.84,-2.74l0.7,-5.57l0.79,-2.22l1.19,-1.27l1.52,-0.61l3.93,-0.19l1.69,0.78l3.93,5.95l4.07,2.08l8.33,1.64l3.52,1.71l0.0,0.79l-2.26,1.96l-2.16,2.63l-1.68,3.76l-0.6,4.85l0.12,9.3l0.6,4.18l1.33,3.03l0.43,0.23l0.33,-0.37l0.29,-4.14l-1.04,-10.26l0.08,-4.76l1.43,-3.41l4.0,-3.31l1.32,2.48l0.52,0.43l0.99,-0.08l0.86,1.47l0.81,0.19l2.39,-2.16l1.52,-2.38l0.34,-1.62l0.0,-2.37l-0.66,-3.45l-1.46,-4.48l1.05,-2.16l-0.02,-0.68l-0.95,-0.46l-3.98,0.17l-2.07,-0.37l-4.64,-1.71l-1.1,-4.31l-1.37,-3.72l-0.3,-2.67l0.21,-2.72l0.58,-2.38l3.68,-9.24l2.6,-9.99l1.65,-4.38l1.36,-2.05l1.85,-1.79l2.08,-1.25l2.1,-0.49l1.92,0.14l1.02,0.45l2.4,2.73l3.56,3.02l3.8,1.98l7.78,1.92l4.29,-0.13l7.07,-1.76l3.86,0.31l2.09,-2.21l7.63,-1.88l7.71,0.07l1.68,-1.11l1.27,0.91l1.61,0.29l3.29,-0.15l0.69,0.47l2.1,2.77l9.58,17.01l3.95,4.66l2.77,2.29l1.27,1.65l1.38,5.05l6.74,9.97l1.67,1.51l1.82,0.82l2.39,0.31l1.13,0.56l5.81,4.01l6.47,1.48l0.51,6.47l0.84,0.93l0.54,1.35l1.05,1.0l1.06,3.03l1.21,2.09l4.03,4.04l0.57,0.2l0.66,-0.22l1.34,-1.96l1.32,-0.53l0.74,0.98l0.37,3.72l0.44,0.63l1.08,0.09l2.37,-1.13l2.08,1.29l0.96,0.13l3.62,-1.25l1.68,-1.01l0.43,-0.57l0.08,-1.69l4.53,-1.52l2.68,2.7l2.01,0.58l2.16,2.76l1.6,1.16l1.9,0.44l5.4,-0.37l2.65,-3.47l1.68,-0.82l6.25,0.1l3.43,1.31l13.9,8.45l4.11,1.44l3.33,-1.29l7.16,-0.3l3.17,0.83l1.99,2.5l0.29,4.9l0.67,2.44l1.61,0.9l1.89,0.46l3.11,3.99l3.13,2.55l8.94,5.2l10.75,10.14l2.76,1.8l2.13,1.88l1.46,-0.71l0.98,-1.21l3.25,-2.68l1.0,-0.16l0.62,0.37l3.17,5.0l1.03,-0.05l1.95,-1.82l1.31,1.64l1.51,0.91l3.41,6.12l3.6,4.26l1.72,1.08l2.25,0.43l2.0,-0.52l3.26,-2.26l1.89,-0.44l2.06,0.66l3.0,3.08l1.91,0.71l2.21,0.3l4.41,1.76l-1.74,4.88l-0.77,0.56l-2.44,-0.42l-1.15,0.25l-1.05,1.08l-0.54,1.64l-0.56,3.75l0.5,4.08l-2.91,0.41l-5.92,5.58l-3.45,0.93l-5.9,2.54l-3.37,-0.07l-1.51,1.13l-0.8,0.18l-1.31,-1.79l-1.3,-0.57l-1.29,-1.15l-4.84,-0.9l-5.71,0.43l-2.44,-1.11l-2.96,-0.77l-3.69,0.06l-1.31,0.54l-0.54,0.62l-0.88,3.79l-1.82,1.44l-0.98,1.3l-1.75,0.93l-5.39,1.9l-4.22,-0.21l-4.63,0.35l-3.39,1.32l-0.53,0.69l0.12,1.53l-0.37,1.45l0.33,2.67l-0.31,2.54l1.72,4.09l1.9,2.19l0.76,4.24l1.12,1.15l1.15,0.06l1.28,0.8l4.67,9.44l4.32,6.12l0.99,0.3l2.16,-1.52l1.52,0.76l-0.2,0.91l-2.59,3.24l-0.19,4.38l0.76,2.96l1.26,1.52l3.31,5.69l-2.57,-0.41l-2.04,0.92l-1.21,3.07l-0.25,2.41l7.15,9.76l1.1,0.91l1.63,0.56l2.76,2.33l0.49,1.0l-0.7,2.55l-5.37,1.19l-1.03,0.7l-0.13,0.64l0.4,2.01l1.98,1.22l0.3,1.22l0.7,1.09l-0.09,0.47l-1.64,1.63l-0.07,1.07l2.97,4.17l1.56,0.09l0.22,2.64l0.34,0.3l0.61,-0.11l0.66,-1.09l0.42,0.88l0.05,1.96l-0.53,1.28l-4.02,1.55l-0.92,0.99l-0.84,2.01l-0.11,1.39l0.82,1.57l1.13,0.8l1.21,0.21l0.28,0.38l0.32,2.28l-0.88,1.93l-0.94,1.21l-2.34,1.99l-1.98,1.13l-3.46,1.11l-1.04,0.94l0.04,1.36l1.94,1.64l0.03,2.09l-0.51,1.17l-1.48,0.27l-4.9,-0.13l-2.05,0.32l-2.47,0.99l-12.96,0.0l-5.62,0.88l-1.13,0.59l-0.11,1.99l-2.75,2.92l-1.0,0.31l-3.01,-0.31l-1.23,0.89l0.08,1.09l1.68,2.52l0.44,1.67l2.39,1.2l1.4,1.62l1.35,0.02l-1.91,1.03l-0.62,0.74l-0.59,3.21l0.37,0.99l1.86,1.35l0.52,2.98l-0.1,1.1l-1.03,1.82l-1.41,0.85l-0.96,1.53l-1.56,0.77l-0.7,0.72l-0.46,6.94l0.75,4.44l1.86,2.1l1.54,1.11l1.0,3.08l1.38,2.69l1.44,1.35l0.5,0.89l0.48,2.14l0.03,3.83l2.62,4.8l-4.45,2.59l-1.9,2.25l-0.18,1.25l2.42,3.53l-0.3,2.05l-0.6,-0.16l-1.34,-1.48l-0.95,-0.17l-0.9,0.18l-5.08,2.48l-4.01,0.06l-3.45,-2.88l-4.8,-2.57l-1.15,-0.16l-4.61,0.97l-0.31,0.86l0.52,1.3l-0.13,1.18l-1.28,3.67l-0.62,0.86l-1.64,1.24l-0.57,1.16l-3.3,2.22l-0.96,2.45l-5.63,3.27l-1.04,-0.07l-0.41,-0.92l-0.62,-0.48l-1.58,0.01l-0.71,0.32l-0.93,1.12l-0.19,0.87l0.23,0.82l-0.9,1.76l-2.46,1.32l0.0,1.24l-4.31,-0.17l-1.57,0.32l-1.41,1.7l-2.07,-1.77l-0.64,-0.12l-1.22,1.35l-2.01,1.17l-1.17,1.38l-4.72,3.93l-3.11,-2.29l-0.75,-0.81l-0.23,-2.18l-0.55,-0.46l-0.61,0.03l-1.26,1.23l-1.38,0.03l-0.96,0.62l0.01,1.38l1.22,2.6l-0.17,0.61l-0.94,0.89l-0.76,-0.54l-1.68,-3.39l-2.48,-1.55l-1.41,-0.23l-0.38,0.7l0.48,1.44l-0.68,0.74l-2.41,0.79l-5.52,3.73l-0.01,0.93l0.64,1.35l3.24,3.16l0.84,0.05l1.49,-1.49l0.58,-0.15l0.25,0.24l-1.1,1.64l-0.33,1.74l-4.09,3.63l-1.05,-0.11l-2.86,-3.66l-1.29,-0.72l-1.41,-0.03l-6.78,-3.11l-1.63,-0.45l-2.9,-2.79l1.95,0.67l1.03,-0.13l0.4,-0.84l-0.86,-2.98l1.43,-1.97l1.46,0.21l3.54,-0.62l0.62,-0.58l0.3,-0.92l-0.36,-4.1l0.23,-2.09l-0.67,-1.74l0.81,-1.36l-0.01,-0.57l-1.18,-0.89l-1.01,-1.37l-2.05,-5.17l1.18,-0.28l0.52,-0.52l0.53,-4.24l1.47,0.61l0.63,-0.08l0.55,-0.52l-0.94,-2.11l0.07,-1.08l3.22,2.06l0.81,-0.43l0.85,-1.76l-0.07,-0.45l-1.87,-2.0l-1.21,-3.68l-0.5,-0.61l-1.86,-0.9l-0.72,-1.89l-0.6,-0.38l-3.37,0.81l-1.83,-0.63l-0.82,-1.2l-0.9,-0.42l-0.95,0.48l-1.32,1.35l-2.49,-0.19l-0.63,-0.77l-0.09,-2.09l-0.49,-0.79l-0.58,-0.27l-1.87,0.06l-1.52,1.47l-0.94,-0.62l-4.48,1.4l-1.23,-0.04l-0.35,-0.77l0.15,-2.58l1.11,-1.01l0.41,-1.07l-0.26,-1.91l0.62,-1.75l-0.35,-2.71l0.09,-2.46l0.98,-1.35l0.46,-1.58l1.54,-0.99l1.18,-1.3l1.82,-4.93l0.1,-3.71l0.87,-1.22l0.01,-0.49l-0.57,-0.62l-1.33,-0.4l-0.21,-0.43l1.53,-2.29l0.42,-1.96l-1.01,-0.55l-2.14,0.89l-2.16,0.34l-4.43,-0.17l-2.33,0.85l-1.37,0.09l1.25,-3.72l0.23,-1.85l-0.8,-3.09l-0.64,-0.92l-2.48,-1.17l-3.9,0.33l1.57,-2.11l1.1,-4.41l-0.0,-1.43l-4.55,-2.02l-1.58,0.51l-0.84,1.61l-3.17,-1.37l-0.98,-0.72l0.43,-0.75l-0.01,-0.89l1.55,-1.38l0.6,-1.85l-2.17,-6.42l1.27,-2.77l-0.13,-1.79l-1.33,-1.89l-2.65,-1.14l-0.68,-0.73l0.56,-2.66l-0.4,-0.78l-1.01,-0.64l-7.02,-0.98l-3.35,0.15l-2.87,0.6l0.98,-2.04l0.04,-1.2l-1.78,-4.92l2.6,-0.75l2.12,0.18l0.8,-0.41l0.02,-1.89l-0.7,-2.17l0.26,-0.65l3.03,-2.5l-0.37,-0.74l-2.65,-0.72l-3.22,-1.49l-1.78,-0.45l-0.43,-0.43l-0.33,-1.24l1.2,-8.39l1.11,-2.47l0.75,-0.21l3.1,0.2l2.71,-1.61l2.14,-4.37l3.22,-5.24l-1.83,-7.02l2.01,-2.0l0.44,-1.92l-0.33,-0.51l-1.9,-0.83l-1.51,-2.16l-0.7,-0.44l-1.34,-0.03l-5.45,2.9l-2.7,2.78l-1.56,3.02l-1.45,4.59l-0.62,0.95l-6.45,1.44l-3.47,1.43l-3.09,0.35l-11.03,-1.42l-0.36,-1.93l0.39,-3.2l-0.58,-1.77l0.25,-3.52l-0.36,-2.54l-2.73,-5.09l-1.83,-1.6l-1.79,-0.71l-1.24,0.06l-4.81,2.37l-1.49,0.3l-4.81,-0.16l-2.3,0.39l-3.28,2.8l-1.15,5.1l-0.94,0.96l-1.61,0.77l-5.43,0.72l-1.92,-0.72l-2.27,-0.01l-2.13,-0.81l-0.53,0.49l1.95,6.58l1.29,2.03l6.5,3.13l2.76,2.01l1.2,1.95l0.84,2.48l1.02,5.37l0.08,14.45l0.41,1.75l3.22,2.41l-0.56,1.69l-1.5,2.22l-4.91,3.34l-0.81,1.24l-1.0,2.85l-0.51,0.36l-0.54,0.14l-12.71,-3.46l-3.2,2.84l-2.29,3.12l-2.84,2.06l-6.76,2.58l-3.59,-1.27l-3.67,0.67l-1.61,0.8l-4.64,4.31l-2.26,-1.35l-3.32,-1.26l-1.97,-5.22l0.11,-0.63l1.03,-1.14l1.66,-1.32l2.37,-1.11l4.44,-0.91l1.33,-4.47l1.36,-3.08l-0.11,-1.1l-2.76,-1.28l-4.26,0.28l-0.59,-0.47l-0.61,-1.89l-2.6,-0.55l-0.5,-0.78l0.27,-0.74l1.32,-1.42l0.82,-1.72l0.02,-0.73l-0.9,-2.53l2.09,-2.34l0.86,-1.56l-0.03,-0.64l-1.32,-2.23l-0.29,-1.62l0.33,-0.29l3.39,-0.61l0.47,-0.41l0.01,-0.87l-3.02,-5.34l-3.79,-4.93l-1.34,-0.21l-6.34,2.52l-0.49,-0.07l-1.95,-1.96l-6.64,-4.2l-2.38,-0.88l-0.51,-0.74l-1.06,-6.41l-0.45,-0.94l-0.95,-0.75l-7.02,-2.18l-1.19,0.29l-0.79,1.17l-1.19,5.32l0.44,1.47l0.86,0.56l0.68,0.97l-1.11,0.96l-1.38,4.22l-1.33,1.77l-2.52,-0.32l-2.13,0.61l-4.64,3.87l-4.97,5.18l-1.65,0.99l-3.06,0.8l-1.95,1.71l-4.62,3.2l-3.95,0.88l-13.48,0.56l-2.85,2.29l-3.93,1.67l-2.28,-0.1ZM267.29,316.19l3.33,0.04l0.42,0.36l1.33,2.69l0.23,3.31l0.47,1.59l1.58,2.42l4.63,5.15l0.05,5.08l0.57,0.72l1.58,0.27l4.98,-1.09l5.05,3.14l2.1,0.36l2.08,-0.71l0.49,-1.2l4.12,3.23l0.44,0.03l4.27,-2.96l1.54,-1.68l0.71,-4.91l1.06,-2.17l-0.47,-1.22l-2.35,-2.52l-0.3,-0.81l1.6,-1.8l0.06,-0.83l-3.7,-4.22l-0.78,-0.23l-0.71,0.37l-1.49,3.45l-0.7,0.31l-0.74,-0.17l-3.31,-1.67l-3.73,-3.13l-4.34,-0.32l-2.53,-1.73l-0.2,-1.24l-0.64,-0.56l-3.53,-0.03l-1.92,0.54l-6.95,-2.64l-2.68,-1.7l-0.84,-0.05l-1.85,0.57l-3.4,-2.1l-1.21,-0.24l-2.22,0.34l-0.3,0.56l1.66,3.98l4.24,1.85l2.28,1.58ZM227.48,225.52l-1.97,1.81l-1.85,-0.65l-0.69,0.34l1.11,-2.22l1.7,-0.75l1.99,0.32l1.0,0.72l-1.29,0.43ZM203.64,215.14l1.2,0.74l-4.56,-0.91l-1.77,0.09l-0.38,0.37l-0.09,1.29l-1.06,-0.76l0.25,-0.6l1.54,-0.58l1.96,-0.23l2.9,0.59ZM191.01,217.07l-5.04,2.57l-2.62,0.16l-2.29,-1.52l-0.55,0.1l-1.56,1.77l-0.91,-0.36l2.17,-2.73l3.93,-0.88l7.87,0.54l0.0,0.36l-1.0,0.0ZM173.77,221.46l-7.48,-0.07l-3.31,0.82l-0.3,0.35l-0.23,2.56l-2.36,0.12l-0.65,-0.58l-0.3,-2.01l0.43,-1.67l0.99,-0.62l11.51,-0.19l1.72,1.3ZM153.93,224.83l0.95,0.77l-0.9,0.61l-3.99,-1.2l2.23,-0.56l1.71,0.38ZM146.24,226.07l-4.69,1.85l-11.86,1.57l-2.99,-0.83l3.62,-2.14l5.19,-0.87l10.72,0.41ZM119.1,232.11l-16.64,1.89l1.54,-0.76l13.22,-1.72l1.89,0.59ZM104.45,239.72l-2.36,2.66l-1.2,-0.5l-1.02,-0.95l0.03,-1.79l0.81,-0.56l1.55,0.01l2.19,1.14ZM87.04,250.56l0.7,1.0l-0.85,-1.02l-1.22,-0.46l-2.94,1.09l-1.53,-0.76l-1.24,-1.78l-0.31,-1.62l0.89,-0.69l7.36,-2.27l3.36,-0.26l0.94,1.85l-1.76,0.27l-3.38,1.48l-1.78,0.44l-0.3,0.39l0.25,1.39l1.8,0.95Z",
            name: "Niedersachsen"
        },
        "DE-MV": {
            path: "M495.83,194.64l-0.15,1.45l1.0,0.85l3.25,-0.51l1.79,-1.24l-0.25,-0.83l-3.89,-1.25l-0.81,-0.6l-0.55,-0.95l0.03,-4.18l0.06,-0.27l1.56,-0.13l4.11,-3.99l3.45,-1.02l5.16,-2.78l11.76,-1.57l0.66,0.25l0.57,0.8l0.62,2.28l0.74,1.27l3.58,1.1l0.38,0.59l-0.44,3.66l0.41,2.13l1.42,0.78l2.92,0.2l0.94,-0.21l3.9,-3.31l0.4,0.27l0.96,2.25l0.71,0.69l3.99,0.1l3.86,5.14l1.06,0.65l1.12,0.0l0.4,-0.37l0.12,-1.7l1.74,-6.0l-0.4,-2.7l0.61,-1.03l1.56,-0.83l0.29,-0.49l-0.56,-3.2l3.2,-3.26l0.11,-1.52l-0.27,-0.27l1.56,0.65l1.0,0.02l2.36,-1.73l1.71,-4.33l2.08,-1.21l1.21,-1.89l0.53,-2.21l-0.73,-0.81l0.27,-1.34l3.15,-5.34l2.97,-2.07l3.68,-0.53l8.29,1.45l23.4,-5.05l3.27,-2.08l0.43,4.12l-0.36,4.62l0.21,4.01l2.39,2.94l0.52,0.08l0.15,-0.51l-0.92,-1.97l-0.48,-4.28l-0.48,-1.55l0.89,-1.71l2.9,-1.76l0.84,-2.27l-0.34,-0.54l-1.21,-0.1l-1.94,0.56l0.13,-0.27l3.28,-4.33l2.04,-1.87l2.28,-3.86l9.96,-5.27l3.79,-3.19l1.5,-1.76l3.58,-6.95l5.89,-8.56l0.67,-1.68l4.04,-7.04l1.57,-4.44l1.03,-1.34l0.95,-0.48l-0.22,0.4l2.09,3.39l4.42,1.9l22.4,0.03l3.6,1.75l2.5,-1.23l2.51,0.62l0.98,1.47l-2.11,1.96l-2.34,0.51l-10.4,-0.9l-4.14,-1.57l-2.89,-0.34l-0.93,0.48l-1.41,1.78l-4.33,-0.47l-1.22,0.58l-0.51,1.46l-0.7,-0.45l-2.2,1.64l0.23,1.61l1.01,1.11l-1.49,-0.74l-2.11,0.2l-1.96,1.26l-0.75,1.5l-1.32,-1.62l-2.08,-1.02l-3.55,-0.34l-1.81,0.81l-1.54,2.22l-0.64,2.57l0.42,2.24l-1.25,-0.36l-0.65,-0.57l-0.61,0.1l-0.71,1.47l0.61,1.91l-0.43,1.79l-1.08,1.28l-1.49,0.35l-0.29,0.51l1.5,4.09l0.18,1.24l-1.0,1.19l0.08,0.58l4.28,2.99l2.52,0.68l2.41,-1.37l0.17,-0.46l-0.4,-0.28l-1.42,0.06l-1.02,-0.51l-1.78,-1.57l0.54,-1.68l0.87,-1.38l2.41,-2.35l2.18,-1.22l0.59,-3.56l1.53,-1.31l6.33,-3.06l0.07,-0.68l-1.78,-1.14l0.0,-0.56l1.48,-0.55l1.16,0.59l0.64,-0.57l1.54,1.14l3.02,-0.81l5.35,-3.06l0.18,-0.49l-0.57,-2.12l1.81,-0.98l1.11,-0.15l0.84,0.09l0.0,0.58l-1.4,0.46l-1.05,1.46l-0.59,2.0l-0.24,2.11l0.27,0.43l0.47,-0.18l1.81,-3.72l1.41,2.23l1.26,0.66l0.48,-0.11l0.82,-0.98l0.84,0.75l1.34,0.05l1.6,-1.43l1.21,2.8l2.13,2.57l1.63,-0.31l1.96,0.1l1.15,-0.37l1.18,-1.07l2.72,-5.73l2.44,-2.42l3.83,-2.49l3.73,-1.4l1.71,0.51l-0.88,1.02l-0.05,2.01l0.76,2.28l1.21,1.75l4.34,2.31l0.9,0.88l-1.75,3.31l0.45,2.74l2.75,4.46l0.27,3.59l0.49,1.7l1.27,0.62l3.99,0.0l0.0,0.46l-1.39,0.37l-1.1,0.72l-0.16,0.47l0.42,0.27l3.08,-0.3l5.02,2.87l3.47,0.85l2.36,1.29l3.18,6.56l2.38,2.15l-2.33,2.05l0.29,0.68l2.63,-0.06l3.5,-1.79l1.39,0.54l-0.61,1.56l-1.15,1.35l0.06,0.64l1.56,0.72l1.27,-0.86l0.53,0.15l3.1,6.99l1.58,2.16l2.03,1.26l2.31,0.04l0.41,-0.4l0.0,-1.14l-2.73,-3.6l0.0,-0.64l11.89,-2.36l2.97,-1.38l4.97,-3.41l2.42,-0.81l0.11,0.9l-1.65,1.01l0.22,1.39l2.96,1.53l7.61,6.41l0.0,0.84l-1.4,2.47l-0.8,3.2l-1.15,2.79l-2.55,1.58l-0.03,0.66l1.14,0.88l3.92,5.39l3.94,2.04l0.97,2.98l0.1,2.22l0.66,0.36l1.3,-0.13l3.53,1.77l0.12,1.29l-0.56,1.74l-1.04,1.47l-7.09,5.92l-1.03,2.47l1.07,2.23l4.33,1.83l0.63,1.8l1.44,2.1l1.64,1.49l1.21,-0.09l7.07,5.94l3.28,0.8l1.92,2.29l3.2,0.08l3.79,2.01l7.89,0.59l2.91,-0.85l1.36,-2.41l0.52,-0.36l1.29,0.25l1.22,1.2l0.26,2.41l-0.66,1.05l-4.53,3.25l0.03,0.67l2.74,1.25l2.08,0.2l0.11,4.2l-0.37,2.77l1.47,3.22l2.04,6.37l-0.01,11.34l0.77,3.54l2.35,3.65l1.05,3.48l2.02,3.41l1.02,8.48l2.0,9.31l-6.41,3.98l-2.8,3.6l-2.51,1.24l-0.78,2.42l-1.14,0.85l-6.28,-0.61l-7.5,-1.52l0.08,-2.63l8.09,-5.49l3.63,-5.75l1.58,-3.74l0.46,-3.15l-0.15,-4.35l-0.31,-0.38l-2.29,-0.51l-4.13,0.24l-3.68,-1.78l-2.69,0.67l-1.83,2.6l-4.34,-1.32l-5.9,-0.43l-6.64,0.5l-1.36,-2.05l-0.54,-2.27l-2.79,-5.12l-0.15,-3.5l-0.25,-0.36l-4.46,-1.75l-2.37,-3.74l-1.96,-0.44l-0.46,0.37l-0.13,3.28l2.44,4.59l0.37,1.68l-2.51,1.11l-3.35,-0.25l-3.71,0.61l-5.95,5.13l-1.89,3.39l-2.06,1.93l-3.34,0.14l-2.08,1.08l-1.47,1.45l-0.77,1.93l-0.52,3.05l-3.15,7.7l-2.26,2.63l-1.08,0.4l-5.11,4.14l-1.55,0.55l-1.62,-0.42l-4.04,-2.15l-2.18,-0.43l-2.71,0.29l-1.68,0.87l-1.72,2.01l-1.3,3.03l-0.54,3.01l-2.34,0.0l-1.03,-0.47l-2.25,-3.33l-1.51,-0.48l-0.98,0.29l-1.19,1.27l-2.21,1.61l-0.74,2.35l-0.65,0.88l-2.17,1.9l-3.46,2.36l-3.89,4.39l-2.27,0.39l-2.59,-1.31l-0.09,-0.28l0.98,-0.9l0.46,-0.9l-0.23,-0.99l-0.71,-0.56l-2.09,0.72l-2.65,0.03l-3.81,0.88l-1.23,-0.33l-1.45,-1.22l-1.5,-0.52l-1.49,-0.09l-4.27,0.94l-1.0,-0.11l-0.86,-0.98l-0.41,-4.04l-1.05,-0.62l-2.39,-0.12l-3.97,-1.1l-2.57,-2.64l-1.46,-0.73l-11.01,-2.73l-3.2,0.78l-3.4,0.25l-1.33,-0.29l-1.39,-1.97l-2.86,-1.66l-1.69,-1.86l-3.01,-2.36l-4.29,-2.52l-6.71,-1.82l-2.18,-3.79l-1.51,-0.64l-1.37,0.38l-2.88,2.03l-1.64,-1.69l-0.86,-0.34l-2.74,0.54l-3.4,1.45l-1.38,2.56l-2.69,2.04l-0.15,2.24l-0.82,2.28l-1.47,0.29l-3.52,3.16l-1.87,-0.71l-1.73,0.48l-3.81,1.88l-2.26,2.72l-2.68,-0.6l-1.8,0.92l-0.04,0.65l1.85,1.48l0.22,1.64l-4.86,-0.19l-2.14,0.77l-1.67,1.06l-1.15,-2.52l-3.11,-2.57l-1.44,-0.51l-3.49,0.23l-5.42,2.07l-1.98,1.31l-4.34,4.02l-0.71,1.77l0.24,1.46l1.3,1.82l0.94,4.93l-0.62,2.37l-1.79,1.37l-2.35,0.23l-5.24,-2.99l-3.4,-0.05l-1.92,1.1l-0.43,3.68l-1.35,-0.19l-2.4,-1.03l-3.16,0.0l-2.38,-0.51l-1.91,0.23l-1.69,-2.85l-1.62,-1.02l-1.49,-1.8l-0.49,-0.04l-2.51,1.94l-2.84,-4.74l-1.22,-0.67l-1.44,0.28l-5.05,4.48l-1.87,-1.7l-2.72,-1.76l-10.76,-10.14l-8.97,-5.23l-3.07,-2.49l-1.98,-2.88l-1.2,-1.18l-2.03,-0.54l-1.4,-0.79l-0.43,-1.96l-0.3,-4.98l-2.23,-2.89l-3.69,-1.03l-6.47,0.27l1.99,-3.62l0.96,-7.94l0.43,-0.75l2.54,-1.25l1.5,0.38l0.72,-0.14l0.61,-0.66l0.86,-2.74l5.35,-1.63l6.28,-4.8l0.22,-2.62l0.93,-2.74l-0.41,-3.51l0.7,-0.13l1.68,0.61l5.09,-0.57l0.72,1.15l0.36,1.95l0.99,0.71l1.03,-0.77l1.67,-2.35l-0.59,-0.84l0.49,-0.54l0.08,-0.79l-1.29,-5.55l-0.07,-2.55l0.66,-0.33l0.78,-1.08l0.19,-2.46l-1.0,-2.53l-0.07,-1.88l-0.34,-0.79l-1.77,-2.03l-1.2,-0.81l-2.84,-0.87l-2.05,0.3l-0.61,-0.35l-1.0,-0.93l-4.02,-5.45l-4.58,-1.1l1.28,-7.23l-0.82,-4.56l-1.14,-3.07l0.29,-2.0l0.85,-2.1l4.69,-2.81l4.85,-4.55l2.23,-1.48l1.73,0.55ZM556.67,174.77l-0.1,0.0l0.0,-0.04l0.1,0.04ZM798.15,168.67l2.91,1.83l17.22,18.98l1.55,1.16l-1.51,4.08l-1.53,0.71l-0.2,0.64l1.67,2.06l0.63,2.07l-10.6,1.23l-2.04,-0.3l-1.57,-1.11l-0.53,0.06l-2.24,2.54l-2.77,1.62l-5.53,1.48l-6.09,0.1l-3.26,-0.98l-1.41,-1.94l2.85,-1.86l3.19,-0.72l3.4,-1.97l1.11,-1.28l0.68,-5.06l-3.59,-6.84l0.23,-3.77l4.48,0.28l1.28,0.53l-0.46,0.85l0.18,1.12l-0.77,3.24l-0.13,2.65l0.29,0.4l0.46,-0.19l1.48,-2.65l1.07,-0.58l2.81,0.0l-0.52,0.98l-0.15,0.94l0.28,0.45l3.34,1.04l0.49,-0.52l-0.74,-2.04l1.23,-4.11l-0.18,-4.45l-1.4,-2.94l-0.51,-0.19l-1.86,0.78l-1.77,-4.59l-1.45,-1.92l-1.71,-1.32l-1.94,-0.47l-2.14,0.43l-1.24,1.42l0.79,2.42l0.0,0.93l-1.63,1.47l-1.05,2.55l-0.42,0.25l-2.8,1.06l0.14,-1.52l1.44,-2.24l0.35,-1.23l-0.51,-2.24l-1.01,-0.51l-4.27,2.04l-2.76,3.2l-1.41,-0.55l0.69,-2.86l2.65,-5.47l0.6,-4.5l-0.97,-2.9l-3.98,-4.21l-1.07,-1.66l0.79,-1.64l1.41,-1.49l1.59,-0.62l1.56,0.66l2.77,6.92l1.19,2.22l2.67,2.75l6.55,3.86l3.73,1.44ZM716.94,88.76l1.04,-0.51l7.38,-1.1l1.38,0.31l0.65,1.03l2.09,1.19l0.92,3.33l0.64,0.18l0.89,-0.86l0.37,-1.93l-0.76,-2.63l3.03,-3.62l2.61,-1.68l-0.84,2.63l-1.51,2.32l0.31,0.67l0.97,0.06l0.62,0.79l-1.31,3.13l0.35,0.54l1.58,0.07l1.31,-0.53l0.95,-1.2l0.59,-1.87l-0.25,-0.48l1.08,1.37l1.07,2.14l-0.54,2.74l1.94,2.82l2.78,1.06l5.06,-0.13l0.34,-0.6l-0.63,-1.09l0.85,-2.02l1.17,-1.42l0.0,-1.25l-1.34,-3.71l-0.73,-0.94l0.0,-0.82l2.07,-1.46l0.0,-1.04l-0.42,-0.4l-1.47,0.17l-2.04,2.15l-4.08,-0.02l-1.7,-2.89l-2.38,-0.87l-2.81,-5.28l-0.64,-0.19l-2.12,1.95l-1.57,2.17l-2.23,1.36l-1.73,1.87l-1.58,1.18l-1.54,-0.49l-0.29,-1.69l0.67,-3.01l1.23,-2.75l1.42,-1.36l0.74,-2.37l0.2,-1.83l-0.29,-0.72l-0.47,-0.24l-4.39,1.15l-1.56,0.91l0.04,-1.57l0.49,-1.02l2.06,-1.85l13.35,-3.9l2.58,-0.04l2.29,1.25l0.0,0.62l-3.4,2.28l-1.78,1.57l-0.89,2.58l0.3,3.26l0.84,2.41l1.41,2.04l1.78,1.47l4.3,1.41l12.64,-2.44l4.16,0.92l2.8,3.11l0.61,4.09l-2.44,3.9l-4.28,2.88l-2.21,2.15l-1.04,2.81l0.37,2.9l0.86,2.95l1.12,2.56l1.06,1.56l2.25,1.22l4.57,1.11l1.91,1.38l2.57,4.72l1.71,2.26l1.89,0.8l-2.07,2.19l-1.03,2.27l-0.61,6.2l-1.2,-0.26l0.77,-0.55l0.4,-1.13l-0.39,-2.01l-0.39,-0.31l-0.97,0.13l-0.94,1.03l-1.36,0.52l-1.42,0.02l-0.88,-0.41l0.0,-0.62l3.4,-1.47l1.6,-1.26l0.93,-2.07l-0.4,-0.56l-5.14,0.36l3.51,-2.16l0.0,-1.15l-0.36,-0.4l-2.64,-0.25l-1.65,0.21l-2.16,2.08l-1.28,-1.35l-1.36,-0.69l-9.78,1.15l-1.98,1.21l-5.27,4.69l-2.18,4.19l-2.31,0.5l-2.37,1.46l-0.38,4.49l0.22,0.39l0.44,-0.05l1.34,-1.15l0.1,-1.32l3.66,-0.64l0.37,0.17l0.67,3.57l-0.17,1.49l-1.24,0.61l-2.64,-0.42l-3.03,-1.08l-3.06,-2.02l0.57,-0.71l1.53,-4.51l-0.11,-0.45l-0.46,-0.04l-2.17,1.6l-0.64,0.93l0.29,0.8l-2.36,0.1l-1.49,0.99l-2.28,-1.98l-3.16,-1.12l-0.9,-1.21l0.5,-1.96l-0.27,-0.48l-1.72,-0.41l-3.58,1.52l-0.45,-0.87l0.43,-0.82l1.02,-0.38l1.35,0.57l0.56,-0.37l0.0,-1.05l-6.01,-4.83l1.23,-3.3l1.85,-2.85l2.18,-0.99l2.81,1.85l0.57,-0.13l0.41,-0.71l1.13,0.86l1.51,-0.31l2.92,-2.01l0.16,-0.43l-0.34,-0.3l-1.41,-0.16l-0.99,-0.96l-0.42,-1.44l0.44,-2.81l-0.36,-0.4l-1.19,-0.12l-1.39,-1.71l-1.26,-0.45l-3.52,0.93l1.92,-3.46l2.61,-0.66l2.91,-1.54l1.95,-0.36l0.33,-0.39l0.0,-0.89l1.25,-1.17l-0.17,-0.62l-3.75,-1.75l-0.61,-1.17l0.72,-1.17l-0.07,-1.34l-0.55,-0.34l-2.84,1.13l-1.51,0.17l-0.77,-1.04l-0.91,-0.58l-0.34,-2.71l-0.37,-0.88l-0.56,-0.43ZM739.9,88.58l-2.33,-1.17l0.0,-0.68l0.81,-0.77l1.51,2.63ZM708.19,96.05l0.04,-0.62l3.06,-11.07l0.66,-4.25l0.59,-0.98l1.41,-0.38l2.15,0.08l0.45,0.74l-0.01,0.83l-0.55,0.2l0.0,-0.98l-0.65,-0.31l-2.54,2.21l-0.58,2.84l-0.09,3.23l-0.91,3.39l-2.11,2.18l-0.94,2.89ZM557.97,170.25l-0.46,-2.61l0.44,-1.31l5.8,-2.81l-4.53,4.19l-1.25,2.53ZM553.61,176.63l-2.78,8.31l-0.89,1.34l-0.62,0.02l0.62,-3.75l-0.43,-1.94l-0.38,-0.31l-1.2,0.24l-0.55,1.64l0.4,2.07l-1.14,0.96l-1.32,-0.07l-2.73,-2.0l1.31,-3.44l3.42,-2.95l3.84,-1.26l2.46,1.15Z",
            name: "Mecklenburg-Vorpommern"
        },
        "DE-TH": {
            path: "M401.04,699.36l0.63,0.28l0.51,-0.58l-0.37,-3.21l0.84,-3.02l1.83,-0.94l2.01,-0.26l3.05,-1.19l0.48,-0.9l0.08,-1.52l-0.33,-1.17l0.21,-0.54l2.88,-3.62l-0.0,-0.52l-1.09,-1.44l-1.16,-2.58l-2.25,-1.83l-1.0,-0.27l-0.74,0.21l-1.87,2.09l-0.27,-3.26l-0.4,-0.37l-0.52,0.07l-0.7,0.68l0.01,-1.63l0.97,-0.42l0.98,0.58l3.62,0.38l3.03,-0.77l0.52,-1.43l-0.29,-2.09l-1.05,-1.87l-0.63,-0.53l-0.22,-0.76l0.23,-1.87l2.24,-1.61l3.9,-0.21l1.18,0.41l1.45,-0.47l0.01,1.34l0.82,0.7l0.96,0.28l2.71,-0.38l2.19,0.11l0.67,-0.32l1.76,-3.85l0.11,-0.83l-1.83,-3.43l-2.06,-0.32l-1.26,-0.97l-1.49,-0.27l0.53,-3.63l1.75,-3.35l0.39,-2.12l-0.66,-0.69l-2.25,-0.56l-1.17,-2.1l2.52,-0.89l1.42,0.0l0.98,1.32l0.0,1.23l0.79,0.77l0.28,1.01l0.71,0.14l0.67,-0.93l0.56,-4.81l0.51,-1.48l1.44,-1.77l0.45,-1.29l-0.51,-1.13l-3.17,-1.58l-2.41,-1.8l-2.49,-0.18l-1.5,-0.94l-2.08,-0.41l-3.24,-1.37l-0.69,-2.79l-1.62,-1.4l-0.4,-0.75l0.5,-2.1l-0.53,-1.02l-4.81,-1.62l-1.76,0.03l-0.91,-0.76l-0.87,-1.38l-0.72,-0.5l-0.93,-0.1l-0.05,-1.91l-0.51,-2.24l-1.08,-1.33l-0.57,-2.53l0.57,-2.1l6.78,-5.69l1.13,-1.35l2.04,-1.2l0.84,-1.13l1.94,1.67l0.68,0.22l0.61,-0.26l1.05,-1.5l1.26,-0.26l4.86,0.19l0.39,-0.54l-0.28,-1.08l1.45,-0.49l1.03,-0.87l0.97,-1.92l-0.07,-1.64l0.66,-0.78l1.59,-0.22l0.79,1.29l1.76,0.18l5.92,-3.44l1.05,-2.55l3.21,-2.13l0.66,-1.26l1.54,-1.13l0.77,-1.04l1.53,-4.83l-0.52,-1.95l4.31,-0.84l0.73,0.15l4.6,2.48l3.65,2.97l4.4,-0.06l5.89,-2.64l0.37,0.03l1.65,1.68l0.76,0.19l0.96,-0.88l0.25,-1.66l-0.33,-1.09l-2.22,-3.1l0.16,-0.69l1.62,-1.89l4.51,-2.63l1.57,0.92l8.77,-0.23l4.34,2.29l2.91,0.11l1.24,1.2l3.26,1.37l1.58,0.28l0.76,1.79l0.14,1.21l-0.86,0.51l-1.42,-0.61l-1.05,0.18l-0.61,0.82l0.03,1.08l1.45,4.2l1.97,2.64l-0.13,3.64l1.54,3.57l1.01,1.59l-0.69,6.04l0.99,1.86l2.75,1.54l15.19,1.87l4.18,-0.09l9.03,1.34l2.45,0.84l5.01,3.97l2.66,5.04l5.51,8.24l-1.59,2.98l-1.09,1.01l-2.38,1.36l-4.99,0.98l-1.09,1.28l-0.45,1.16l1.28,2.05l2.21,1.45l2.1,0.82l0.91,1.01l2.06,3.53l0.59,2.42l0.11,2.12l-0.77,0.44l-0.3,0.8l0.71,2.97l1.15,1.47l1.79,0.76l5.38,0.27l3.05,-1.72l4.44,0.63l4.63,0.09l3.78,-0.8l2.31,1.74l0.38,3.78l2.26,4.32l0.55,2.17l1.51,1.4l1.1,0.25l1.15,-0.9l8.65,-0.76l0.97,0.19l2.15,1.64l4.75,2.16l1.32,1.24l1.11,2.54l3.52,2.1l0.18,1.15l0.63,0.63l4.05,-0.38l2.74,-0.68l5.72,1.82l0.81,-0.18l1.87,-1.24l2.87,2.45l0.68,1.25l1.12,0.28l2.07,-1.57l-0.06,-2.76l3.38,-4.3l2.37,-4.48l0.0,-1.19l-0.55,-1.2l-2.51,-1.84l0.47,-3.0l1.69,-3.05l-0.1,-0.98l5.82,-0.59l14.87,4.51l0.76,4.53l3.0,5.22l1.01,2.37l1.49,1.51l5.45,2.87l2.28,3.6l2.03,4.38l-0.02,0.81l-1.5,0.87l-1.78,2.41l-0.43,-0.72l-0.72,-0.38l-1.61,0.32l-3.11,-0.43l-2.17,0.26l-1.79,-0.73l-0.56,0.3l-0.2,1.23l-0.34,0.35l-3.79,2.1l-3.72,4.94l-1.54,-0.75l-3.61,0.45l-3.95,3.07l-7.09,2.14l-0.28,0.35l-0.02,1.88l1.2,1.36l1.63,0.72l0.22,0.54l-1.46,1.86l-1.22,0.21l-1.11,0.93l-0.99,2.97l0.44,0.87l1.65,-0.14l0.77,0.57l-0.38,2.54l0.65,2.24l0.81,1.3l1.18,0.6l2.71,0.14l-1.76,3.07l-1.07,1.19l-3.47,2.55l-2.31,0.13l-1.91,-0.37l-2.44,0.35l-2.79,3.53l0.06,3.31l-0.65,2.25l-0.59,0.69l-2.48,0.83l-1.96,-0.95l-1.76,0.3l-2.43,3.8l-0.86,0.79l-1.32,-0.18l-1.26,-1.66l-0.84,-0.48l-1.14,-0.26l-1.4,0.48l-2.03,2.84l-2.36,1.84l-1.74,3.0l-0.16,1.64l1.68,1.65l0.37,0.92l0.04,1.23l-1.01,1.38l-0.22,1.56l-2.18,0.92l-1.15,0.99l-0.35,1.2l0.61,1.12l-2.88,1.73l-2.19,0.66l-2.07,1.05l0.13,-1.0l-0.27,-0.43l-1.85,-0.88l-0.89,-1.11l-1.3,-0.12l-2.38,0.43l-0.59,0.89l-1.51,0.46l-11.48,2.43l-2.89,-1.16l-2.25,-0.02l-0.6,0.34l-0.89,1.58l-2.63,0.47l-3.61,-2.59l-0.43,-3.73l-0.56,-1.0l-0.91,-0.43l-1.58,0.26l-2.11,-1.86l-0.87,-0.39l-0.24,-1.16l0.23,-4.94l1.41,-1.06l0.37,-0.83l-1.18,-2.71l-1.96,-0.74l-6.26,-0.34l-1.17,1.18l-1.36,0.76l-0.76,2.2l-1.89,1.24l-1.92,0.45l-2.72,1.31l-0.21,0.47l0.76,2.46l-0.2,1.16l0.79,3.21l-0.33,3.89l0.49,1.07l0.14,1.55l1.13,1.91l0.29,2.24l-1.12,0.78l0.16,1.81l-1.11,3.11l0.66,2.47l-1.04,2.51l0.09,1.89l-0.74,0.16l-2.11,-0.65l-1.71,-1.14l-0.69,0.43l-0.73,1.35l-4.4,-4.16l-0.59,-0.95l1.79,-2.06l0.17,-1.16l-1.89,-3.35l-0.84,-0.55l-0.79,-0.03l-0.46,-1.37l-0.48,-0.45l-1.73,0.24l-1.37,1.4l-1.98,0.35l-1.39,0.62l-2.19,-2.01l-2.95,-0.42l-0.57,0.33l-0.35,1.63l-4.21,-5.6l-1.68,-0.1l-3.0,0.87l-1.14,-1.46l-1.02,-0.38l-1.57,0.73l-2.31,-0.24l-2.53,1.36l-1.96,-0.61l-1.31,0.98l-2.05,3.5l-2.4,-0.61l-0.74,0.21l-0.43,0.51l-0.49,1.11l-0.29,4.64l0.89,1.21l2.66,1.57l1.94,2.01l0.98,0.27l1.98,-0.06l1.26,2.14l2.78,1.07l0.51,1.66l-0.14,1.51l-0.39,0.5l-0.84,0.13l-2.92,-1.11l-4.03,0.75l-1.43,-0.69l-0.81,0.14l-0.81,1.03l-0.69,5.02l-3.19,-1.95l-2.42,-0.67l-4.35,0.0l-1.02,-1.45l0.25,-2.17l-1.24,-2.71l0.56,-3.75l-0.94,-5.36l-2.51,-2.14l-1.27,-2.84l-0.42,-0.23l-1.63,0.22l-1.04,0.8l-2.39,-0.25l-0.36,-1.63l-2.7,-2.34l-1.63,-2.89l-2.74,0.55l-1.76,-0.17l-0.59,-0.42l-0.42,-1.13l0.93,-1.58l-0.26,-0.81l-2.69,-2.23l-1.71,-2.27l-1.39,-1.14l-0.27,-0.57l-0.04,-2.19l-0.53,-1.42l-0.59,-0.57l-9.35,-3.58l-1.02,-3.16l-1.91,-2.1l-1.63,-0.48l-5.16,0.4l-0.38,-0.57l-0.02,-1.5l-0.74,-0.38l-1.69,1.2l-5.23,5.87l-0.35,-0.03l-0.03,-1.0l1.13,-4.36l-0.84,-2.5l0.09,-3.71l-0.34,-1.64l1.1,-1.52l1.44,-0.25l0.42,-0.89l-0.25,-3.7l-1.09,-2.8l-0.67,-0.86l-4.97,-1.4l-1.26,0.02l-2.62,1.49l-1.99,0.61l-0.37,0.43l-0.2,1.5l1.27,1.93l-0.7,1.47l-1.38,0.0l-2.79,-1.47l-2.1,0.59l-0.34,-1.16l0.32,-3.47l1.08,-1.85l1.08,-0.79l0.93,-1.23l0.01,-1.99l2.03,-4.37l0.22,-2.96l-1.4,-2.02l0.39,-1.06l0.9,-0.39Z",
            name: "Thüringen"
        },
        "DE-BW": {
            path: "M174.11,1181.73l1.21,-0.1l1.04,-1.01l1.39,-3.8l-0.42,-0.53l-2.22,0.23l-4.39,1.31l0.46,-1.48l-0.28,-1.55l-1.73,-2.04l-2.19,-4.4l-1.36,-1.91l-1.49,-0.83l-0.29,-0.51l-0.56,-4.51l2.54,-3.62l0.04,-2.48l-1.2,-5.04l0.25,-1.92l1.37,-4.63l1.91,-1.57l0.21,-1.76l-0.52,-4.53l0.91,-1.2l1.05,-2.27l0.08,-3.1l0.48,-1.8l2.55,-2.71l1.04,-2.06l-0.26,-4.76l-4.19,-7.41l-0.3,-5.91l0.6,-2.8l0.64,-2.19l1.87,-3.35l0.22,-2.19l0.61,-1.7l6.18,-8.67l1.07,-2.2l1.5,-8.55l3.37,-2.29l1.41,-2.36l0.11,-2.19l-1.14,-3.86l-0.3,-1.7l0.11,-1.87l1.19,-5.49l1.82,-3.81l0.22,-2.86l0.46,-1.21l3.69,-3.37l-0.02,-1.16l-1.13,-3.08l0.01,-5.05l0.81,-4.73l4.05,-6.35l1.03,-0.73l1.7,-0.59l1.5,-1.31l2.69,-3.23l2.48,-2.05l1.1,-1.46l0.52,-1.4l0.12,-2.77l0.43,-1.09l0.88,-0.29l2.7,-0.05l1.01,-0.36l0.68,-0.69l0.42,-2.19l0.98,-1.35l0.82,-0.08l4.35,-2.6l1.25,-2.12l4.44,-12.27l3.03,-5.76l1.92,-2.21l3.04,-1.16l3.22,-3.48l2.09,-3.26l7.22,-14.92l0.47,-1.63l1.87,-14.27l0.62,-2.45l0.94,-0.98l1.31,-0.72l6.86,-8.21l0.35,-1.89l-0.26,-0.45l-2.0,-0.71l0.14,-0.89l3.5,-7.94l0.01,-1.77l-0.7,-3.54l1.34,-3.3l-1.26,-1.91l-4.78,-1.34l0.0,-0.51l1.85,-0.92l0.22,-1.39l-1.35,-2.95l-2.19,-6.48l-1.86,-3.11l0.75,-3.31l2.98,-1.24l2.14,0.35l2.26,1.81l6.65,6.95l0.41,0.1l4.31,-1.84l0.9,-1.12l0.02,-1.37l-1.84,-8.27l7.1,-1.78l0.11,0.97l1.33,2.44l-0.6,1.82l0.47,1.87l1.45,3.53l1.27,1.48l4.81,2.83l1.75,0.28l2.38,-0.23l1.16,2.34l1.0,0.79l5.85,-0.47l0.18,0.64l-0.28,1.23l-1.23,2.01l-0.65,-0.2l-0.89,-1.11l-0.6,-0.17l-0.65,0.35l-1.56,1.88l-0.53,1.57l0.33,4.28l-1.88,1.68l-0.23,2.05l0.32,1.02l3.71,1.3l1.64,-0.94l2.98,-3.57l0.86,-3.07l0.39,1.08l0.78,0.26l2.83,-1.66l0.55,-1.45l-0.66,-2.08l-1.13,-1.69l2.54,-3.04l5.28,-0.13l2.52,0.41l1.07,-0.46l2.19,-2.11l0.62,-0.06l2.4,0.06l1.27,1.46l0.66,0.24l0.76,-0.15l0.33,-0.77l-0.26,-0.99l-2.55,-4.64l-2.08,-2.47l-0.34,-0.91l1.23,1.04l0.91,0.18l0.52,-0.25l0.64,-1.1l1.08,0.44l5.5,-1.21l1.46,0.25l6.54,-0.26l1.16,-1.37l0.68,-2.12l1.37,-1.47l-0.25,-2.59l0.56,-0.74l2.01,-1.02l3.16,-0.26l2.77,-1.23l1.65,1.49l1.08,0.07l2.03,-1.8l0.11,-0.42l-0.72,-1.8l1.04,-7.07l-0.69,-0.71l-1.9,-0.85l-0.71,0.02l-0.79,0.65l-0.77,2.2l-0.85,0.21l0.34,-2.32l-0.57,-1.1l-4.99,-1.36l-0.15,-0.97l0.7,-1.82l-0.73,-2.26l1.39,-1.67l2.1,-1.03l4.7,0.33l3.68,-1.31l3.43,-0.52l1.69,0.05l5.34,2.51l1.34,0.1l1.59,-0.57l2.79,1.67l2.76,-0.88l1.61,-1.02l0.31,0.85l-0.7,1.4l0.32,2.33l-0.56,1.54l0.2,1.62l-0.81,0.82l0.07,1.37l-0.88,2.42l0.18,0.6l2.23,1.45l2.25,0.08l0.74,-0.67l0.43,-2.38l1.25,-0.67l0.74,-1.29l0.25,2.23l0.97,2.23l1.08,0.61l3.66,-3.82l2.67,-1.18l3.44,4.54l-0.02,4.03l0.3,1.97l3.9,4.43l0.66,1.26l-0.33,1.13l-1.66,2.16l-0.27,1.08l0.07,2.0l-1.99,2.43l0.01,0.9l1.24,1.01l0.86,0.05l0.85,-0.45l0.54,-0.73l0.52,-1.81l1.26,-0.52l1.21,-1.71l0.86,-0.39l0.42,0.73l-0.61,1.62l1.69,1.74l0.42,3.24l-0.21,3.36l0.58,4.0l1.37,0.45l7.07,-0.16l0.99,-0.49l3.9,-4.13l0.03,-1.83l-0.77,-1.08l2.32,-2.08l1.27,0.86l-0.62,1.65l0.29,0.99l1.17,0.82l1.15,0.07l0.51,0.34l0.08,0.59l-0.82,2.18l1.09,2.93l-0.69,2.31l-1.2,2.18l0.47,0.7l2.35,1.0l2.95,7.23l-1.61,-0.61l-1.2,0.18l-2.04,2.49l-0.26,4.21l0.27,1.12l1.12,1.55l2.03,1.16l-0.71,2.62l1.27,3.56l-0.05,0.81l-0.41,0.16l-1.89,-1.0l-0.64,0.33l-0.24,0.87l0.36,1.23l1.38,1.52l0.09,3.07l0.52,1.21l1.02,1.24l-1.25,0.73l-0.04,0.69l1.2,1.31l2.14,1.51l2.35,3.26l1.39,1.36l0.82,0.15l1.63,-0.85l1.84,1.72l0.05,2.86l-0.96,2.37l-0.47,0.42l-1.52,0.12l-0.39,0.92l0.68,0.8l2.46,1.04l-0.21,1.82l1.81,1.83l-0.27,2.52l2.7,1.31l1.58,0.03l2.23,1.25l1.58,0.18l0.98,3.1l0.66,0.88l4.03,3.32l0.78,1.54l1.63,1.9l0.6,1.63l1.24,1.35l0.82,2.65l0.01,0.61l-2.21,1.33l0.2,0.71l0.84,0.75l-0.27,5.51l-0.48,1.73l1.08,2.78l-0.48,2.39l-1.19,1.29l-0.26,0.81l0.02,3.78l-0.71,1.33l-0.08,1.59l0.25,1.27l0.76,1.02l2.05,1.13l0.86,0.04l0.58,1.79l1.62,3.02l-3.99,3.72l-1.07,0.63l-0.19,-1.17l0.51,-1.15l-0.02,-1.07l0.56,-0.49l0.07,-0.57l-0.69,-0.89l-1.2,-0.12l-5.52,5.92l-1.95,-3.54l-3.03,-0.19l-2.05,-1.92l-0.98,0.09l-2.23,3.06l-0.26,2.17l1.83,3.64l1.8,1.12l2.63,2.28l-0.27,0.99l-1.5,0.75l-0.38,0.72l1.29,4.82l-0.14,1.56l-1.13,3.31l0.28,0.99l-4.34,0.45l-1.5,1.66l-0.38,1.86l-9.25,5.65l-0.73,-0.44l-0.5,-2.11l-0.62,-0.57l-0.82,-0.15l-2.81,1.81l-3.46,0.78l-1.4,1.41l-1.0,1.88l0.2,1.98l-0.57,0.41l-5.5,7.7l0.86,2.07l1.4,0.31l1.82,4.05l3.09,5.24l1.54,5.25l3.86,17.8l2.64,6.02l0.29,1.82l-0.17,5.41l-0.72,3.17l-2.84,7.96l-1.22,0.95l-0.34,0.7l0.19,1.63l2.24,3.71l-0.37,5.12l-0.42,0.69l-0.47,2.58l-1.1,1.64l0.44,0.79l1.35,0.17l2.35,5.98l-0.72,0.36l-0.87,1.48l-2.26,0.32l-0.96,1.8l0.18,0.79l1.27,1.22l0.59,1.26l0.66,0.4l0.8,0.02l0.22,0.46l0.54,7.52l0.84,2.92l-0.36,1.74l-0.29,0.28l-0.74,-0.1l-1.78,-0.71l-0.63,0.07l-0.56,1.24l-0.13,2.07l-0.51,0.64l-1.23,-3.26l-1.03,-0.79l-1.92,-0.05l-2.52,0.69l-2.19,1.21l-3.24,1.1l-2.26,0.03l-2.29,-0.55l-4.24,-1.69l-3.11,1.49l-7.24,6.48l-4.22,2.16l-2.66,-0.89l-0.93,-0.01l-1.54,0.75l-0.96,1.51l-3.38,0.8l-1.15,0.87l-1.13,-0.56l-4.01,-0.76l-1.38,-0.75l-1.48,-1.87l-1.45,-4.32l-0.9,-1.16l-1.1,-0.66l-3.17,-0.43l-5.3,-2.71l-1.89,-0.35l-4.19,-0.08l-1.74,-0.52l-9.27,-6.19l-1.64,-5.12l-0.86,-0.48l-2.6,-0.46l-10.33,-7.46l-3.9,-0.6l-0.41,0.59l0.84,1.5l3.3,3.5l1.83,1.24l3.89,1.66l1.64,1.14l1.2,1.75l2.06,6.18l2.21,3.3l0.05,0.84l-7.24,0.24l-10.92,-1.23l-2.05,0.76l-1.64,1.73l-3.43,1.1l-3.73,0.35l-2.26,-0.59l-4.09,-3.4l-0.01,-0.53l1.49,-0.35l0.18,-0.68l-2.61,-2.46l-3.21,-1.87l-2.82,-0.17l-0.4,0.28l-0.88,2.86l0.3,0.63l-3.98,0.06l-0.37,-1.74l-1.16,-2.08l1.83,-3.3l-0.64,-1.81l-1.25,-0.42l-1.93,0.04l-2.36,-4.16l-1.48,-0.58l-1.31,1.04l-0.58,3.22l-0.84,0.55l-0.62,-0.46l-0.79,-4.86l-1.96,-0.86l-2.44,-0.14l-1.78,0.95l-0.17,0.49l0.78,1.96l-1.11,0.56l-6.45,1.06l-0.9,0.58l-1.82,3.09l-0.73,2.86l-0.92,0.87l-2.44,1.34l-1.07,1.19l-0.21,1.3l0.64,2.31l-0.59,1.47l0.23,0.52l2.01,0.65l2.48,1.89l2.24,1.21l1.91,-0.12l4.22,-2.44l4.64,-0.79l3.37,0.92l-0.37,2.27l-0.15,-0.78l-0.39,-0.25l-1.07,0.24l-0.6,0.58l-0.23,1.01l0.39,1.23l-0.04,2.42l-0.1,0.98l-0.52,0.92l-0.91,0.31l-2.11,-3.13l-1.83,-1.53l-3.12,0.37l-3.0,1.99l-1.39,3.17l-2.71,0.46l-6.19,-0.04l-3.61,-0.96l-0.82,-0.54l-1.15,-2.67l-0.86,-0.89l-3.61,-0.89l-1.89,-0.01l-5.51,0.96l-1.66,1.74l-1.77,0.54l-2.99,1.81l-1.7,2.35l-0.83,0.57l-4.29,0.97l-12.46,0.0l-0.65,-3.04l-0.7,-0.81l-6.51,-0.5l-1.31,-0.67l-0.52,0.14l-3.27,4.58l-1.73,0.99l-8.05,1.68l-2.02,-0.27l-3.56,-1.89Z",
            name: "Baden-Württemberg"
        },
        "DE-HH": {
            path: "M382.14,250.89l1.06,-5.39l1.01,-1.38l0.44,-1.91l1.48,0.3l1.92,1.41l-0.31,3.35l0.53,0.67l0.95,0.26l1.29,-0.73l9.63,-7.96l2.32,-0.72l3.25,0.52l1.08,-0.85l1.0,-2.62l0.8,-0.85l1.74,-0.5l1.8,0.23l1.07,-0.57l0.66,-0.71l1.26,-5.25l0.68,-0.84l5.84,0.95l2.93,-2.26l1.09,0.06l-0.18,1.36l-2.09,3.59l-0.53,1.8l0.58,1.18l3.41,2.56l0.36,2.82l1.06,0.95l0.26,0.81l-0.72,3.17l-0.4,4.75l-1.24,0.69l-1.85,0.49l-0.66,0.76l0.75,4.08l0.24,3.4l0.54,0.9l2.65,1.07l3.34,4.96l2.88,1.8l3.4,3.7l0.78,-0.01l0.55,3.01l-3.71,0.0l-1.13,0.37l-1.08,0.71l-2.35,3.23l-5.11,0.35l-1.5,-0.34l-1.48,-1.07l-2.17,-2.77l-2.1,-0.65l-2.98,-2.83l-5.13,1.68l-0.49,0.8l-0.01,1.47l-4.02,1.97l-1.41,0.1l-2.34,-1.38l-3.07,1.18l-0.52,-3.88l-0.68,-1.14l-1.1,-0.48l-0.99,0.32l-2.17,2.38l-3.86,-3.85l-1.13,-1.95l-1.12,-3.13l-1.1,-1.07l-0.5,-1.3l-0.83,-0.93l-0.37,-5.85l5.1,1.07l1.28,-0.54l0.19,-0.57l-1.22,-2.15l-3.83,-2.31l-3.76,-0.47Z",
            name: "Hamburg"
        },
        "DE-SH": {
            path: "M521.88,110.37l-3.0,0.2l-2.37,-0.4l-0.92,-1.15l0.18,-3.28l-0.71,-1.72l-1.53,-0.55l-2.57,-0.08l-1.19,0.36l-1.03,0.98l-0.61,-1.71l-0.34,-0.23l-1.39,0.43l-0.19,-1.6l2.68,-6.66l3.7,-3.63l4.5,-0.76l8.21,3.56l3.16,3.07l6.89,13.06l-11.54,-1.95l-2.06,1.08l-0.14,0.56l0.28,0.43ZM297.9,130.86l0.41,-1.44l-0.42,-0.54l-2.98,0.36l-5.16,1.59l-2.93,0.35l-3.67,-0.58l-1.65,0.69l-3.2,3.1l-0.93,0.31l-2.41,-0.88l-2.69,-2.47l-1.95,-3.56l-0.26,-4.13l1.23,-1.54l2.56,-1.17l2.92,-0.59l2.26,0.11l0.42,-0.4l0.0,-1.15l-0.31,-0.39l-1.66,-0.39l-1.27,-1.21l-1.45,-0.5l-0.44,0.14l-1.15,1.57l-0.51,-1.12l0.26,-1.72l1.64,-2.78l2.06,0.83l7.9,-2.17l10.73,0.0l2.6,-0.69l2.24,-1.39l4.11,-3.65l3.74,-1.85l1.7,-1.3l0.82,-3.06l-0.06,-4.31l-2.54,-3.94l-7.99,-8.66l-1.09,-1.72l-0.59,-1.94l-1.18,-0.88l-2.02,0.06l-2.17,0.6l-0.85,0.57l-0.29,-0.55l3.07,-2.12l0.15,-0.47l-3.43,-9.22l-1.29,-2.41l-2.93,-1.9l-5.28,-4.66l-3.2,-1.61l0.53,-4.13l-1.28,-3.46l-3.21,-6.32l-0.55,-4.38l0.43,-3.88l1.22,-4.5l3.15,0.97l3.62,0.16l6.8,-2.53l2.19,-0.34l7.73,1.34l7.73,3.18l20.72,4.91l1.48,1.31l0.72,4.01l0.72,2.02l2.11,0.97l7.16,0.03l1.55,-0.28l1.09,-1.03l1.45,-0.45l1.0,-0.9l1.47,-0.33l2.05,1.83l1.66,0.19l1.67,-0.54l1.43,-0.04l5.85,-2.97l1.93,-2.35l2.5,-1.1l1.19,-2.16l0.61,-0.49l0.28,5.35l0.26,0.35l4.87,1.79l5.96,0.31l3.97,1.77l1.68,1.28l2.59,1.13l2.19,1.56l1.03,2.93l1.53,1.75l2.64,-0.46l4.47,-1.72l0.25,-0.42l-0.34,-3.13l1.77,-0.12l3.02,1.88l2.15,2.75l1.32,5.72l0.65,1.43l2.5,3.06l-0.79,0.61l-3.21,-0.94l-2.62,2.3l-1.55,0.58l-0.3,0.57l-0.05,1.56l0.37,0.41l1.44,0.1l2.66,-0.78l2.3,-0.13l1.35,1.82l0.58,0.06l0.95,-0.83l0.72,-0.05l0.35,0.66l-0.66,2.23l0.48,2.51l0.06,3.3l-1.05,9.94l-1.57,4.22l-1.2,1.74l-3.1,2.9l-3.88,2.17l-4.17,1.37l-4.07,0.46l-0.36,0.4l0.0,1.15l0.21,0.35l4.52,2.26l23.57,-5.66l1.65,0.59l5.56,4.88l-1.77,1.94l0.02,1.99l0.76,2.03l0.5,2.59l-0.53,2.11l-1.32,1.99l-1.67,1.42l-1.61,0.49l-0.21,0.61l0.56,0.88l-0.58,1.0l0.05,0.47l0.98,1.06l0.25,1.22l-1.25,3.46l0.45,0.12l2.16,-0.8l1.86,-2.23l2.31,-5.24l1.31,-5.61l0.64,-1.28l0.81,-0.55l3.77,-0.44l1.46,-0.9l1.96,-2.64l0.96,-0.32l4.01,0.36l2.05,1.02l6.0,4.81l15.42,6.88l8.7,8.24l4.21,1.11l4.81,-0.88l3.37,-2.11l5.58,-5.23l3.18,-2.06l3.3,-1.4l3.73,-0.49l-0.25,0.21l0.23,0.45l1.7,0.77l1.8,-0.48l2.14,1.5l0.44,0.01l6.72,-4.15l2.35,0.9l-4.1,4.99l-1.82,-0.92l-0.44,0.08l-0.1,0.43l1.05,2.71l0.9,6.65l0.75,3.11l-0.71,2.15l0.07,2.9l0.66,4.78l-0.4,2.73l-1.8,2.46l-0.47,1.47l-11.28,7.37l-3.99,5.11l-1.62,1.05l-3.85,1.34l-0.69,-0.02l-0.87,0.64l-1.29,-1.12l-1.14,-0.03l-0.77,0.5l-5.37,7.82l0.03,1.19l1.33,3.32l1.43,2.41l1.97,1.67l2.81,0.93l3.86,-0.37l0.72,0.29l0.61,1.51l0.48,3.53l1.72,0.72l-0.02,4.85l0.62,1.06l1.08,0.84l3.41,1.11l-0.9,0.74l-2.95,0.49l-0.35,-0.5l0.09,-1.5l-1.81,-0.81l-0.94,0.04l-2.4,1.59l-4.79,4.5l-4.49,2.59l-1.22,2.33l-0.46,2.34l1.16,3.59l0.8,4.36l-1.23,6.8l0.08,0.9l0.49,0.41l4.29,0.88l3.87,5.3l1.11,1.04l0.87,0.5l2.2,-0.28l2.63,0.81l2.19,1.9l0.65,1.11l0.1,1.99l0.97,2.34l-0.26,2.44l-1.37,1.15l0.09,2.96l1.28,5.43l-0.05,0.5l-0.86,0.52l-0.13,0.58l0.99,0.44l-1.91,2.38l-0.86,-2.9l-1.15,-0.94l-5.07,0.63l-1.58,-0.6l-0.81,0.0l-0.61,0.39l-0.28,0.77l0.5,3.19l-0.91,2.64l-0.18,2.46l-5.9,4.43l-5.51,1.74l-1.3,3.28l-1.39,-0.33l-1.4,0.21l-2.22,1.33l-0.61,1.13l-0.81,5.23l-0.0,2.01l-0.45,1.59l-1.95,3.0l-2.87,1.21l-3.85,-1.34l-13.96,-8.48l-3.53,-1.34l-2.01,-0.11l-0.67,-3.51l-0.31,-0.28l-0.77,0.03l-3.25,-3.54l-2.94,-1.85l-3.3,-4.93l-2.68,-1.1l-1.23,-7.56l3.0,-1.13l0.66,-0.61l0.49,-5.04l0.73,-3.24l-0.44,-1.36l-0.94,-0.75l-0.41,-2.95l-3.56,-2.72l-0.34,-0.72l1.41,-3.28l1.3,-2.06l0.21,-1.05l-0.54,-0.95l-1.81,-0.08l-2.77,2.21l-5.19,-1.08l-0.71,0.12l-1.22,1.38l-1.25,5.21l-0.38,0.36l-0.62,0.41l-1.89,-0.21l-2.05,0.61l-1.07,1.12l-0.97,2.57l-0.72,0.57l-3.1,-0.57l-2.64,0.85l-10.7,8.57l-0.54,-0.58l0.41,-2.54l-0.14,-0.81l-2.24,-1.68l-1.93,-0.39l-0.59,0.33l-0.47,2.02l-0.94,1.16l-1.22,5.89l-4.35,-0.51l-3.51,-1.41l-7.0,-4.55l-3.12,-3.54l-1.12,-5.15l-0.67,-7.4l-1.18,-1.2l-6.07,-3.12l-2.28,-2.09l-2.25,-4.89l-1.53,-5.29l-0.14,-3.27l-0.25,-0.35l-3.52,-1.4l-6.15,-5.34l-3.88,-2.36l-3.75,-0.88l-12.38,-0.28l-3.65,-1.7l-2.56,-0.73l-1.47,0.78l-0.99,1.56l-1.91,-0.64l-3.36,-2.57l-3.22,-4.01l-7.92,-16.13l3.34,-1.55l1.7,-0.13l2.22,0.62l3.8,2.57l2.21,0.75l2.45,-1.04l0.95,-2.04l0.82,-3.37l0.55,-3.62l-0.02,-2.65l-1.21,-1.93l-3.08,-3.23l0.26,-2.84l-0.28,-0.38l-2.59,-0.75l-3.43,0.63l-3.3,1.59l-2.02,1.94l-2.56,-4.47l-1.72,-3.73l-0.24,-0.69l0.76,-3.2l2.52,-5.54l-0.67,-3.64l0.99,-0.76l4.05,-1.17l1.66,-0.16l1.25,-0.94l3.15,-4.87l1.01,-2.59l-0.45,-0.54l-2.24,0.44l-3.84,3.28l-1.25,0.56ZM503.63,116.33l3.05,-0.4l0.0,0.31l-3.05,0.09ZM297.82,101.16l-4.1,0.32l-1.8,-0.66l-0.81,-1.42l0.91,-0.66l0.15,-1.19l-1.04,-1.65l2.76,-2.67l3.32,-1.53l3.74,-0.22l3.48,0.93l-0.16,2.08l-1.73,1.69l-2.59,3.88l-2.14,1.11ZM276.23,95.6l-2.61,1.5l-1.95,-0.04l-1.07,-0.95l-0.92,-2.24l0.55,-2.46l3.02,-2.05l5.79,-2.47l0.13,1.24l-0.77,4.01l-2.18,3.46ZM278.04,172.13l-0.17,0.53l-0.74,-0.25l-1.22,-2.23l0.25,-1.99l0.95,-1.01l0.25,-0.0l0.07,2.08l0.93,1.18l-0.31,1.68ZM248.62,29.55l5.02,1.3l5.97,-0.3l-3.76,2.69l-1.36,0.39l-6.61,0.0l-0.45,-0.23l-0.96,-1.54l-1.03,-0.45l-0.94,0.04l-4.37,2.92l-0.82,5.61l0.33,9.27l-0.74,5.19l-0.47,-1.75l-0.08,-4.42l1.13,-18.44l0.91,-3.57l7.4,-20.86l1.45,-1.83l0.2,0.51l2.47,0.26l0.66,1.71l-0.77,2.08l-4.0,2.31l-1.9,2.89l-1.02,3.43l0.84,3.32l-0.57,5.98l3.45,3.49ZM250.11,2.5l1.58,-1.99l3.12,1.68l-4.57,0.25l-0.14,0.07ZM262.88,30.38l10.92,-0.55l-1.37,1.09l-9.55,-0.53ZM266.76,63.1l-0.71,1.0l-1.13,0.37l-1.52,-0.18l-2.59,-1.27l-2.43,0.93l-3.0,-0.93l-5.36,-3.34l1.72,-3.18l2.11,-2.06l2.55,-1.02l3.19,-0.27l5.33,0.32l2.06,1.26l1.65,2.86l0.0,0.95l-0.79,1.35l-1.1,3.21ZM245.45,60.5l-1.38,1.35l-1.03,1.72l4.9,9.27l1.53,0.93l-0.85,0.74l-3.04,1.11l-2.07,-1.9l-1.82,-3.32l-1.83,-2.51l2.7,-5.11l1.66,-1.83l1.23,-0.45ZM245.7,60.41l0.07,-0.03l0.0,0.01l-0.07,0.02ZM203.72,148.19l-0.84,0.26l-0.1,-0.17l0.87,-0.26l0.06,0.17ZM199.92,148.09l0.74,0.41l0.16,0.82l-0.19,-0.06l-0.71,-1.17Z",
            name: "Schleswig-Holstein"
        },
        "DE-NW": {
            path: "M75.59,764.33l0.58,-1.27l-0.33,-1.03l-2.4,-1.44l-1.43,-0.38l-1.42,0.59l-4.43,0.8l-4.67,3.44l-1.97,0.73l-1.09,-2.62l-2.26,-1.43l-0.75,-1.47l-0.82,-0.7l-1.13,-0.24l-0.87,0.76l-0.08,1.41l3.4,5.79l-2.45,1.28l-2.0,0.01l-0.11,-0.77l-3.36,-5.87l-0.12,-1.65l1.37,-5.66l0.08,-2.64l-0.45,-0.77l-0.77,-0.26l-1.24,-2.7l-0.26,-1.28l0.2,-1.03l1.01,-0.99l-0.26,-0.68l-1.75,-0.1l-4.17,-0.96l-1.95,-1.01l-3.96,1.3l-0.77,-0.04l-0.61,-0.49l-0.8,-1.68l-0.64,-0.64l0.62,-1.05l-0.31,-0.6l-1.61,-0.31l0.6,-1.85l-1.46,-1.84l1.62,-2.55l3.02,-2.52l2.16,-1.29l0.19,-0.76l1.76,-2.7l-0.19,-1.2l-0.38,-0.31l-6.68,-0.17l-1.82,-0.96l-0.92,-1.79l1.0,-0.64l0.12,-0.56l-5.97,-9.16l-1.94,-1.95l-2.02,-0.26l-3.81,1.05l-0.96,-0.11l-0.28,-0.95l0.3,-3.12l-1.78,-1.23l0.36,-2.99l-0.64,-0.95l-1.0,-0.73l-0.67,-1.17l-0.27,-1.3l1.24,0.12l1.52,-1.51l0.53,-2.01l-0.29,-2.62l0.75,-1.36l1.14,-0.65l2.43,0.04l1.16,-1.43l0.6,-1.6l0.06,-1.37l-0.82,-3.23l0.87,-2.37l-0.25,-0.5l-3.16,-1.1l-2.87,-2.11l-0.36,-3.25l0.96,-2.75l-0.2,-0.81l-0.44,-0.3l-3.43,0.42l-2.49,-0.83l-1.59,-0.19l-4.72,1.81l-0.11,-3.57l-1.5,-4.45l-0.51,-3.34l2.3,-1.22l1.1,0.62l2.47,2.71l2.37,-0.22l1.27,-1.43l1.86,-3.92l1.26,-1.46l9.02,-7.1l5.56,-3.03l1.59,-2.06l-0.05,-0.53l-1.73,-1.62l2.62,-1.97l-0.07,-0.72l-2.61,-0.73l-4.68,3.23l-1.93,-1.08l-0.64,-2.66l0.28,-3.4l0.82,-3.04l3.05,-4.23l5.0,-9.26l3.43,-2.67l1.07,-1.48l0.6,-2.15l0.3,-3.38l0.54,-1.33l-1.44,-2.07l0.12,-2.71l1.11,-6.47l-1.18,-8.12l-4.04,-4.78l-6.47,-8.94l-0.39,-1.77l1.64,-5.68l-0.22,-0.49l-6.55,-2.89l-2.06,-2.64l1.26,-4.29l-1.07,-1.4l-3.43,-2.29l-2.95,0.02l-0.63,-0.26l0.06,-1.27l2.19,-2.33l0.17,-3.2l-1.34,-3.25l-2.15,-1.72l0.24,-1.02l1.44,-1.02l3.92,-0.7l1.98,-0.84l3.43,-2.26l3.85,-1.04l6.98,1.82l0.42,-0.15l0.01,-0.45l-1.37,-2.15l-4.44,-4.46l2.62,-1.42l2.94,1.39l3.22,2.6l3.32,1.37l3.85,-0.57l2.1,3.05l3.94,0.71l1.35,0.79l0.27,2.28l0.5,0.34l3.96,-1.32l0.41,-1.77l-0.65,-2.92l5.64,1.67l2.28,-0.02l1.7,-0.79l4.78,-3.68l9.65,-3.31l8.63,-0.28l2.84,-1.49l2.44,-2.89l2.22,-4.04l0.68,-0.75l1.32,-0.7l0.21,-2.21l-0.25,-1.18l-3.24,-3.72l-6.41,-3.6l-2.17,-0.65l-1.36,-0.96l-0.18,-2.15l0.58,-1.43l1.79,-0.43l1.31,-0.7l0.85,-1.1l1.27,-2.85l1.59,-1.66l1.45,-0.81l6.51,-0.81l1.33,-1.25l2.14,-4.39l1.81,-1.9l4.24,-1.89l2.03,-1.83l3.28,-4.9l4.31,-2.63l0.43,-1.19l2.14,0.05l4.05,-1.73l2.66,-2.21l13.38,-0.56l4.13,-0.91l4.85,-3.32l1.9,-1.67l2.94,-0.74l1.84,-1.1l5.03,-5.24l4.49,-3.76l1.74,-0.49l2.89,0.24l1.61,-2.0l1.44,-4.36l1.17,-0.95l-0.17,-0.91l-0.71,-0.96l-0.75,-0.43l-0.34,-1.13l1.16,-4.99l0.83,-0.93l7.51,2.45l0.75,1.71l0.83,5.52l0.37,0.76l0.56,0.52l2.35,0.86l6.57,4.15l1.5,1.76l1.6,0.4l6.36,-2.52l0.72,0.14l3.51,4.64l2.76,4.82l0.08,0.67l-3.29,0.56l-0.78,0.68l0.26,2.24l1.31,2.5l-2.88,3.66l-0.03,0.92l0.87,2.48l-0.72,1.48l-1.65,1.99l-0.04,0.82l0.93,1.29l2.43,0.48l0.45,1.69l0.97,0.77l4.33,-0.27l2.14,0.87l0.17,0.54l-1.34,3.02l-1.19,4.19l-4.05,0.69l-2.53,1.17l-2.97,2.71l-0.25,1.06l2.16,5.75l6.29,2.91l0.84,-0.42l4.22,-4.07l1.4,-0.68l3.4,-0.61l3.7,1.26l6.99,-2.67l1.77,-1.03l1.29,-1.19l2.3,-3.13l2.97,-2.63l12.23,3.51l1.01,-0.22l0.87,-0.69l1.02,-2.91l0.66,-1.01l4.88,-3.31l1.68,-2.47l0.54,-1.23l0.05,-1.09l-3.33,-2.62l-0.26,-1.37l-0.08,-14.42l-1.04,-5.47l-0.88,-2.59l-1.35,-2.18l-2.9,-2.13l-6.35,-3.01l-1.13,-1.76l-1.71,-5.76l1.58,0.57l2.18,-0.01l2.1,0.74l5.69,-0.78l2.54,-1.51l0.64,-1.22l0.94,-4.47l3.07,-2.53l1.81,-0.24l4.92,0.15l1.68,-0.35l4.79,-2.36l0.85,-0.01l1.51,0.62l1.55,1.35l2.62,4.84l0.33,2.35l-0.24,3.6l0.57,1.69l-0.38,3.96l0.52,1.65l1.53,0.62l10.17,1.1l3.27,-0.38l3.47,-1.43l6.69,-1.56l0.87,-1.28l1.46,-4.61l1.41,-2.78l2.54,-2.64l5.35,-2.85l1.1,0.26l1.6,2.24l1.96,0.93l-0.72,1.89l-1.76,1.75l0.2,1.61l1.66,5.24l-3.14,5.11l-2.04,4.22l-2.33,1.38l-2.94,-0.22l-1.12,0.33l-0.84,1.2l-0.63,1.79l-1.24,8.79l0.45,1.4l0.86,0.8l1.75,0.43l3.3,1.52l2.35,0.6l-2.75,2.07l-0.43,0.97l0.8,3.78l-2.42,-0.08l-3.08,0.89l-0.26,0.52l1.89,5.12l-0.01,0.89l-1.06,2.48l0.65,0.62l3.13,-0.62l3.24,-0.15l6.88,0.96l0.59,0.38l0.2,0.3l-0.57,2.03l0.17,1.06l0.96,0.97l2.62,1.13l0.97,1.39l0.11,0.85l-0.09,0.9l-1.17,2.67l2.17,6.32l-0.47,1.47l-1.59,1.44l-0.54,2.29l1.44,1.14l3.49,1.47l0.68,-0.19l0.73,-1.61l1.07,-0.33l3.85,1.64l-1.16,5.19l-1.84,2.29l0.05,0.56l1.01,0.29l3.74,-0.34l2.15,1.05l0.75,1.45l0.35,1.86l-0.2,1.68l-1.38,4.09l0.29,0.52l1.18,0.24l3.22,-1.06l4.43,0.17l4.49,-1.08l-0.41,1.23l-1.61,2.61l0.47,1.05l1.67,0.64l-0.89,1.36l-0.09,3.65l-1.73,4.7l-1.0,1.1l-1.65,1.11l-0.56,1.74l-0.99,1.38l-0.2,1.77l0.39,3.67l-0.62,1.8l0.26,1.82l-0.24,0.66l-1.2,1.17l-0.28,1.54l0.21,2.03l0.79,0.92l1.6,0.04l3.59,-1.12l-1.58,2.44l-6.95,2.31l-1.41,0.98l0.06,0.79l1.83,1.43l0.13,0.48l-1.82,5.75l-2.42,2.84l-1.13,2.45l-3.45,2.68l-2.98,1.56l-0.92,0.93l-1.12,4.69l-1.02,-0.22l-0.76,0.26l-3.76,2.82l-4.2,-0.7l-1.75,-1.48l-0.42,-0.66l0.21,-2.36l-0.2,-1.51l-0.66,-1.04l-0.54,-0.53l-1.15,-0.12l-1.26,-0.65l-2.83,-1.91l-0.94,-0.18l-1.53,0.8l-4.09,1.08l-5.1,2.57l-0.7,0.92l-0.31,1.17l0.12,1.0l1.32,2.21l0.43,4.54l0.55,0.48l2.08,0.32l0.55,0.6l-0.95,2.66l-4.29,0.38l-1.1,0.45l-2.57,1.92l-4.5,-1.09l-3.65,1.0l-4.41,0.37l-4.63,1.79l-0.91,1.6l-1.86,1.26l-0.61,1.56l-3.19,3.25l-2.18,2.85l-1.84,4.3l0.35,0.85l1.56,1.31l0.72,2.19l1.88,0.7l1.22,-0.33l1.16,-1.71l4.44,-0.91l2.25,-1.64l0.93,-0.06l-0.31,1.99l1.16,0.9l1.93,9.22l0.06,1.87l-0.15,0.63l-3.14,3.52l-2.21,3.12l0.02,0.98l1.04,1.93l-0.03,0.87l-4.11,2.61l-3.29,-0.84l-10.05,0.04l-0.38,0.28l-0.39,1.6l1.63,3.32l-0.25,1.99l0.96,4.46l-1.65,2.29l-1.7,3.81l-1.23,0.43l-0.7,0.84l-2.09,4.64l-0.31,4.11l-1.84,-0.11l-1.91,1.25l-3.02,3.16l-0.17,2.09l-2.79,1.97l-2.61,0.26l-1.46,-0.27l-1.64,-2.75l-0.57,-0.24l-1.71,0.25l-5.83,5.63l-0.86,1.22l-1.94,1.4l-1.01,2.44l-4.63,4.06l-0.69,0.93l0.01,0.93l0.82,0.79l0.14,1.12l2.48,2.0l0.63,1.16l-0.78,5.17l-1.89,1.09l-1.1,2.16l-2.33,-1.46l-1.35,-0.38l-3.44,1.17l-0.58,-2.5l-1.66,-2.95l-4.16,-5.44l-0.96,-1.85l0.28,-4.52l-0.72,-3.75l-0.66,-1.66l-1.0,-0.26l-1.97,0.82l-1.66,-1.3l-3.78,-4.03l-2.69,-0.96l-1.09,-0.8l0.11,-1.52l0.94,-2.79l0.32,-2.22l-0.29,-0.44l-5.7,-1.59l-1.5,0.38l-3.21,3.05l-0.3,0.96l-0.15,1.12l0.37,3.88l1.23,3.18l-0.13,2.43l-2.26,-0.86l-0.61,0.09l-2.5,2.69l-3.62,2.22l-0.08,0.62l1.75,1.81l0.41,0.83l0.01,1.39l-0.32,0.68l-0.46,-0.01l-0.37,-0.52l-0.83,0.02l-1.51,2.27l-4.36,1.91l-1.62,2.78l-2.7,-0.21l-3.95,2.19l-8.1,2.26l-3.62,-0.31l-2.71,0.84l-0.76,1.13l0.41,0.77l-0.09,3.71l-0.85,1.69l-0.16,2.01l-2.96,2.16l-5.55,1.53l-5.36,-0.39l-0.92,-1.84l-1.95,-0.67l-0.55,0.45l-1.02,2.49l-0.69,0.3l-2.29,2.44l-0.83,0.26l-2.57,-0.74l-0.61,0.49l-0.9,1.9l-0.86,0.35l-1.85,-0.9l-1.44,-0.11l-1.04,0.44l-5.15,3.64l-2.63,1.04l-3.2,0.78l-1.24,2.25l-1.39,1.68l-2.21,0.66l-0.63,0.63l0.4,4.13l-0.22,2.97l-1.23,1.98l-1.71,0.09l-1.1,-0.56l-1.09,-1.37l-0.7,-1.59l-0.94,-0.34l-3.92,1.49l-1.86,1.28l0.08,2.49l-0.77,2.1l-0.01,0.87l2.43,1.9l0.36,4.72l1.66,3.19l0.27,1.31l-0.25,0.75l-7.52,2.19l-1.38,-0.28l-1.2,-1.51l-2.03,-1.4l-0.99,0.12l-1.32,1.14l-1.26,0.6l-1.17,-0.05Z",
            name: "Nordrhein-Westfalen"
        },
        "DE-SN": {
            path: "M613.57,769.98l-0.88,-1.33l-2.79,-0.81l-2.12,0.03l-5.2,-3.25l-0.58,-3.07l0.25,-1.64l-0.35,-0.7l-2.12,-1.47l-2.07,-3.22l-1.06,-0.4l-2.34,0.24l-0.59,-0.96l0.16,-0.56l0.96,-0.83l2.37,-1.07l0.38,-1.82l1.03,-1.45l-0.25,-2.33l-1.85,-1.93l0.75,-2.47l0.99,-1.4l2.32,-1.79l2.33,-2.97l1.77,0.28l1.61,1.93l1.91,0.25l1.3,-1.11l2.11,-3.51l1.27,-0.26l2.19,0.96l2.84,-0.95l0.91,-1.07l0.69,-2.41l-0.13,-3.07l2.59,-3.29l6.43,0.03l3.71,-2.69l1.2,-1.33l2.03,-3.53l-0.18,-0.56l-1.14,-0.45l-2.11,0.08l-0.84,-0.43l-1.2,-3.02l0.49,-2.08l-0.18,-0.71l-1.33,-1.02l-1.43,0.18l0.78,-2.59l0.79,-0.69l1.43,-0.36l1.74,-2.44l-0.4,-1.08l-1.72,-0.8l-1.03,-1.16l0.09,-1.14l6.97,-2.11l3.87,-3.03l3.31,-0.4l1.13,0.78l0.78,-0.11l3.92,-5.09l3.73,-2.05l0.52,-0.54l0.22,-1.02l1.53,0.58l2.22,-0.25l3.24,0.43l1.4,-0.33l0.88,1.04l0.53,0.13l1.07,-0.94l1.12,-1.73l1.51,-0.83l0.28,-1.01l-0.05,-0.69l-2.07,-4.47l-2.37,-3.75l-5.64,-3.04l-1.21,-1.22l-1.02,-2.37l-2.96,-5.14l-0.75,-4.6l-0.28,-0.32l-15.19,-4.61l-6.42,0.62l-3.95,-0.78l-0.56,-0.7l-0.42,-2.69l-2.18,-2.1l-0.84,-1.68l0.44,-4.14l-0.3,-0.43l-2.74,-0.81l-0.03,-0.8l0.98,-1.39l0.44,-1.31l-0.27,-5.11l-0.44,-1.79l-1.81,-2.46l-0.13,-3.11l-0.78,-2.82l0.41,-1.59l1.4,-2.2l2.23,-0.48l0.73,-0.71l0.52,-3.15l-0.18,-1.38l-1.42,-3.68l-0.25,-6.12l-0.88,-1.86l-0.23,-3.1l3.37,-3.7l0.47,-1.96l0.0,-7.18l2.8,-2.41l0.81,-2.61l2.91,1.31l3.21,0.36l5.79,-2.61l7.21,-0.74l0.74,-0.48l0.85,-4.22l0.62,-0.26l7.6,0.32l1.46,0.92l9.35,-1.64l0.82,0.81l1.32,-0.04l2.25,-1.9l1.73,-3.17l1.24,-0.71l3.43,0.48l3.16,1.24l1.97,-0.95l5.13,-4.29l0.85,-1.28l2.37,-0.23l0.96,2.06l1.38,1.03l2.77,0.82l2.06,1.06l1.67,1.7l1.25,-0.23l1.7,-1.16l0.45,0.18l2.71,2.63l2.92,0.94l2.68,3.31l1.44,1.01l1.12,0.35l1.2,-0.53l2.87,2.31l0.18,0.54l-0.58,2.32l0.06,1.18l1.08,1.5l1.96,1.19l1.31,4.82l-0.23,1.31l-1.32,0.94l-0.49,0.72l0.25,1.3l0.61,0.6l0.15,1.15l-0.17,3.92l-0.65,1.9l-1.33,1.33l-0.4,0.91l0.24,1.76l0.97,1.78l0.88,0.08l1.39,-1.74l0.85,0.13l0.77,-0.94l1.42,0.51l1.23,2.04l0.45,0.18l10.91,-3.64l1.51,-0.8l0.96,-1.02l1.97,-0.22l4.48,2.21l2.18,2.16l2.41,1.63l1.59,2.39l1.37,0.65l2.23,-0.36l5.8,1.72l14.92,1.15l16.88,-2.09l2.32,0.66l1.02,-0.36l7.38,-10.97l1.55,-3.64l0.21,-2.52l0.52,-1.07l3.79,-4.99l1.16,-1.06l3.86,-2.14l5.98,-1.45l4.59,0.6l3.43,1.27l3.6,2.26l3.88,-0.91l12.93,-6.51l4.17,-1.18l1.96,-0.09l2.03,0.39l2.44,1.45l4.22,1.77l4.08,0.21l0.36,1.56l2.33,2.38l6.35,2.14l4.3,2.77l4.66,1.4l2.15,1.03l3.23,3.0l0.91,1.95l-0.79,2.0l1.39,13.84l0.31,1.18l1.82,3.2l2.23,2.64l1.36,2.93l-0.49,4.44l0.68,1.04l-1.58,3.13l-1.34,4.22l-0.8,4.39l-0.31,5.9l-1.95,2.94l-0.48,6.27l-9.29,22.84l-3.44,3.84l-1.43,2.36l-0.07,3.03l-1.52,4.08l-1.74,2.71l-1.41,0.39l-2.03,-0.08l-3.52,-0.79l-5.13,-3.62l-3.31,-0.95l-0.36,-0.89l0.33,-2.62l2.23,-5.98l-0.53,-1.98l-0.38,-0.29l-1.35,0.01l-5.21,2.17l-0.73,-0.58l2.42,-5.83l0.18,-2.34l-0.31,-1.63l-2.02,-2.85l-1.27,-1.01l-2.73,-0.72l-1.1,-0.77l-0.85,-1.18l-1.11,-3.17l-0.37,-0.24l-0.37,0.25l-0.8,2.02l-0.89,0.46l-3.45,-0.2l-2.85,1.22l-0.9,-0.02l-0.9,-0.49l-2.04,-2.47l-3.65,-1.2l-3.31,0.48l-2.67,2.68l-1.36,4.43l-1.06,1.54l0.11,0.56l1.31,0.82l3.27,0.43l1.42,0.58l-0.74,0.7l-0.09,1.63l2.62,2.79l3.74,1.16l2.34,1.36l-0.53,3.46l-2.64,2.25l-7.53,-0.6l-3.64,0.75l-1.26,1.16l-1.82,2.74l-1.12,1.05l-15.17,6.98l-1.77,0.12l-3.55,-0.46l-2.2,0.49l-3.49,3.38l-3.17,0.06l-0.98,1.26l-0.42,1.51l0.3,3.19l-0.53,0.76l-1.12,0.21l-2.78,1.74l-1.63,0.33l-4.53,-0.5l-2.22,0.24l-3.7,1.37l-1.82,0.36l-8.77,-0.05l-4.66,0.9l-4.02,2.43l-0.15,0.51l1.08,2.26l-0.34,1.87l-1.22,1.58l-1.59,1.21l0.33,2.34l-1.49,1.19l-3.25,3.54l-1.59,0.4l-1.98,-0.97l-2.51,-3.69l-1.73,-0.5l-0.96,1.42l-3.77,2.73l-1.57,4.03l-1.74,0.89l-3.18,-1.8l-1.91,-0.18l-0.41,0.26l-3.26,8.73l-1.35,2.46l-2.23,1.67l-5.03,-0.29l-4.64,1.29l-3.44,-1.07l-1.77,0.83l-1.42,9.24l-4.11,4.32l-3.08,-0.18l-9.0,-5.5l-1.11,-0.3l-1.02,0.24l-1.82,1.08l-3.3,-0.14l-1.71,0.6l-1.46,1.41l-2.15,3.34l-0.96,0.93l-1.08,0.12l-5.29,-0.95l-7.34,0.55l-4.19,1.27l-3.55,3.11l-0.82,2.26l0.05,1.86l-1.51,0.32l-1.2,1.07l-2.84,1.6l-1.14,1.11l-3.09,5.6l-2.22,1.96l-0.8,1.2l-0.32,2.5l-1.87,2.4l-0.61,1.64l-0.3,2.83l0.86,4.64l-1.08,0.78l-1.33,-0.17l-0.86,-1.34l-1.86,-6.89l-2.4,-2.7l1.22,-1.72l0.09,-0.86l-0.38,-0.79l-1.04,-0.59l-2.76,-0.07l-1.3,-0.4l-0.95,-0.84l-0.33,-1.03l0.03,-2.57l-0.61,-1.58l-2.03,-1.52l-4.7,-0.41Z",
            name: "Sachsen"
        },
        "DE-HB": {
            path: "M265.58,310.82l0.8,0.18l2.21,-0.58l2.68,1.7l7.17,2.71l2.14,-0.54l3.22,0.01l0.46,1.58l2.72,1.87l0.73,0.27l3.75,0.12l3.54,3.03l4.41,1.97l1.4,-0.61l1.22,-3.12l0.42,-0.39l0.29,0.11l3.36,3.83l-1.42,1.53l-0.27,0.98l0.45,1.13l2.36,2.53l0.29,0.79l-1.03,1.9l-0.6,4.65l-1.38,1.52l-3.93,2.76l-4.56,-3.57l-0.63,0.2l-0.16,1.47l-1.64,0.57l-1.7,-0.26l-5.2,-3.2l-5.28,1.06l-1.19,-0.22l-0.2,-5.36l-4.74,-5.33l-1.51,-2.32l-0.64,-4.79l-1.4,-2.83l-1.0,-0.75l-3.06,0.06l-2.31,-1.59l-3.92,-1.6l-1.38,-3.36l1.62,-0.25l0.92,0.21l2.99,1.94ZM261.79,244.54l4.06,1.5l2.21,0.4l4.24,-0.1l-0.74,1.18l-0.31,1.27l0.35,1.81l1.14,2.83l0.65,3.35l-0.12,3.08l-1.59,2.74l-1.99,1.87l-0.96,-1.63l-1.08,0.07l-0.3,-0.25l-1.45,-2.79l0.77,-4.56l-2.98,-7.23l-0.78,-1.03l-1.11,-2.51Z",
            name: "Bremen"
        },
        "DE-SL": {
            path: "M65.91,909.24l-0.21,-2.28l-0.64,-1.35l-1.77,-1.74l-9.11,-4.59l-1.41,-0.2l-2.68,1.6l-1.32,0.13l-0.3,-5.31l0.6,-4.54l13.51,-1.25l11.46,0.51l6.25,-2.86l2.28,0.21l1.99,-0.4l14.47,-6.69l7.94,-5.02l1.73,0.6l1.17,0.8l0.9,-0.21l1.77,-1.34l7.03,3.84l6.38,0.37l2.1,2.07l3.58,2.54l0.55,0.68l0.8,0.28l1.24,0.13l1.89,-0.41l1.01,-0.38l1.9,-1.4l0.07,2.2l1.71,4.13l0.25,4.07l0.25,0.54l1.04,0.37l0.18,2.17l-2.75,2.03l-1.93,2.49l-0.92,0.59l-0.52,1.05l0.61,2.29l4.07,4.98l-0.06,1.61l1.1,0.66l4.87,0.83l2.31,0.87l0.81,0.47l0.41,1.05l-0.66,1.86l0.39,1.64l-0.76,1.28l-2.06,1.89l-0.56,2.68l-1.52,1.79l-0.72,3.26l-1.16,1.67l-2.17,0.39l-0.95,2.42l0.89,4.82l3.49,3.87l1.89,1.64l1.49,0.06l-1.39,0.85l-1.6,3.65l-3.65,0.96l-2.07,3.29l-3.11,-1.31l-8.4,-0.08l-2.94,-1.27l-3.73,-2.72l-0.72,-0.14l-1.34,1.32l0.28,2.09l-2.63,1.66l-1.84,-1.45l-1.09,-3.94l0.05,-5.24l-0.38,-0.4l-2.03,-0.1l-6.04,-3.43l-1.22,-0.21l-2.89,0.27l-4.03,-0.92l-1.17,0.24l-0.86,2.59l1.08,4.7l-1.51,2.01l-0.99,0.23l-3.85,-1.4l-4.29,-0.04l-0.96,-0.41l-1.12,-1.87l0.74,-3.56l-0.62,-2.59l-0.79,-0.29l-1.51,0.89l-1.6,-5.32l-2.23,-1.28l0.11,-2.0l-0.26,-0.83l-6.51,-6.3l-1.58,-1.93l-0.55,-1.54l0.39,-1.0l1.84,-0.34l0.42,-1.49l-0.42,-1.04l-5.23,-5.77Z",
            name: "Saarland"
        },
        "DE-BY": {
            path: "M307.18,810.28l0.93,-1.11l0.93,-0.0l0.77,-0.57l0.39,-4.33l0.83,-1.29l3.71,-0.97l5.1,-2.38l2.52,1.6l1.38,0.46l-0.87,1.83l0.4,0.45l0.48,-0.04l2.16,-1.42l1.77,-2.09l0.49,-2.5l3.28,-1.03l6.45,0.37l1.48,0.43l1.74,-0.11l4.6,2.37l0.69,0.81l0.76,2.07l1.6,1.93l2.33,0.38l1.64,-0.24l6.19,-2.67l1.1,-1.6l-0.56,-2.79l0.07,-1.11l1.7,-3.83l-0.62,-1.03l-2.08,-0.36l-0.3,-0.45l0.99,-4.18l-0.16,-4.14l1.86,0.47l1.06,-0.54l1.44,1.58l2.46,-0.45l1.71,0.78l1.53,-0.05l4.99,-1.68l0.44,-0.73l-0.68,-1.56l0.04,-0.97l0.66,-2.0l0.74,-1.0l0.6,-0.61l4.05,-1.67l1.68,-1.14l1.07,-1.32l0.1,-1.71l-0.6,-4.86l2.3,-8.32l1.09,-1.7l1.84,-0.72l2.59,2.84l1.17,0.44l2.05,-0.14l5.98,-2.33l6.14,-3.63l2.02,-1.76l1.24,-2.01l3.14,-5.61l1.02,-2.96l5.28,-5.92l1.14,-0.81l0.06,1.49l0.82,0.76l5.42,-0.37l1.14,0.34l1.64,1.79l0.74,2.73l0.52,0.72l9.38,3.61l0.79,1.53l0.03,2.15l0.42,0.9l1.44,1.19l1.71,2.27l2.58,2.09l0.1,0.45l-0.88,1.53l0.09,0.69l0.91,1.31l2.54,0.51l2.34,-0.63l0.56,1.49l0.89,1.21l2.62,2.24l0.23,1.41l0.55,0.57l2.85,0.25l1.07,-0.8l1.21,-0.17l1.24,2.72l2.45,2.06l0.84,4.97l-0.62,3.33l1.31,3.27l-0.33,1.79l0.61,1.37l1.09,1.11l4.38,-0.02l2.29,0.64l2.6,1.78l0.79,0.22l0.66,-0.12l0.41,-0.6l0.49,-4.86l0.53,-0.61l1.76,0.7l3.89,-0.76l3.03,1.12l1.21,-0.2l0.8,-0.98l0.11,-2.29l-0.71,-1.74l-2.78,-1.07l-0.75,-1.61l-0.65,-0.63l-2.95,-0.2l-1.82,-1.92l-2.67,-1.58l-0.62,-0.76l0.29,-4.33l0.35,-0.78l0.52,-0.38l1.91,0.66l0.95,-0.19l2.26,-3.71l0.69,-0.61l2.07,0.59l2.61,-1.38l2.28,0.25l1.43,-0.71l1.96,1.84l3.27,-0.87l1.2,0.05l3.27,4.79l1.11,0.95l0.8,-0.36l0.4,-1.67l2.5,0.36l1.02,0.79l0.58,0.96l0.97,0.33l1.58,-0.66l2.12,-0.4l1.28,-1.36l1.1,-0.25l0.79,1.73l1.46,0.39l1.77,3.1l-0.1,0.56l-1.88,2.14l-0.04,0.48l0.84,1.33l4.81,4.56l0.63,-0.1l1.06,-1.78l1.25,1.01l2.31,0.72l1.39,-0.29l0.39,-0.89l-0.17,-1.51l1.04,-2.58l-0.67,-2.41l1.11,-3.08l-0.18,-1.68l0.91,-0.39l0.23,-0.64l-0.33,-2.47l-1.15,-1.96l-0.11,-1.46l-0.5,-1.08l0.35,-3.75l-0.79,-3.22l0.17,-1.26l-0.68,-2.18l2.38,-1.15l1.99,-0.48l2.01,-1.32l0.5,-0.67l0.43,-1.71l1.23,-0.61l0.79,-0.97l6.0,0.33l1.43,0.46l1.01,2.12l-1.77,1.76l-0.24,5.16l0.32,1.54l3.43,2.62l1.39,-0.24l0.82,0.24l0.33,0.58l0.25,3.42l0.32,0.62l3.93,2.85l0.9,0.14l2.4,-0.62l1.34,-1.87l1.9,0.03l3.09,1.18l11.65,-2.47l1.71,-0.52l0.59,-0.89l2.04,-0.35l0.92,0.08l0.71,0.99l1.8,0.86l-0.01,1.31l0.84,0.34l2.22,-1.14l2.26,-0.69l3.19,-1.89l2.41,-0.25l0.64,0.27l2.0,3.16l1.97,1.3l0.39,4.98l0.44,0.58l5.42,3.38l2.28,0.02l2.56,0.75l0.3,0.53l-1.73,-0.13l-0.39,0.23l0.07,0.45l2.23,2.33l0.73,1.26l0.34,2.07l-0.17,1.78l-1.62,1.33l-1.24,2.27l1.15,1.97l4.8,3.01l2.35,2.58l1.07,1.65l0.72,1.74l0.27,2.19l-0.68,3.42l0.08,2.51l0.96,2.47l4.34,3.38l0.8,1.38l0.54,3.92l15.15,8.23l1.41,1.39l3.72,0.48l1.45,1.38l0.23,2.0l-0.67,2.07l0.08,2.03l5.34,2.88l0.48,0.87l-0.29,2.79l-0.77,2.26l-2.25,4.16l-0.63,2.04l-1.59,-0.49l-0.5,0.27l-0.61,2.25l-0.35,5.51l-1.41,1.43l-3.98,1.7l-1.38,2.77l1.53,3.62l2.11,3.04l2.95,2.34l4.55,2.25l0.71,1.41l0.06,1.83l-0.79,1.77l0.11,0.48l0.78,0.47l-0.34,1.62l1.0,1.22l2.4,1.36l0.94,1.04l0.64,1.53l0.86,5.16l1.26,3.2l0.8,1.19l1.28,1.27l1.11,0.34l1.03,-0.11l0.46,0.37l0.41,7.38l0.49,2.45l1.15,2.29l2.1,1.78l4.46,2.1l1.88,1.95l3.19,7.16l1.78,1.82l2.03,0.73l5.89,0.85l1.84,-0.25l0.34,-0.48l-0.36,-1.58l0.89,-0.28l3.6,0.99l1.59,0.86l4.11,4.02l1.7,0.74l1.12,4.03l3.2,3.81l1.21,0.69l9.11,12.41l1.27,2.91l1.59,2.57l2.92,1.76l6.05,0.33l1.84,0.71l1.11,0.96l2.99,4.01l4.12,4.2l1.04,2.47l0.06,4.12l1.47,2.5l2.89,2.73l3.14,2.27l2.35,1.14l0.55,-0.22l1.86,-4.08l1.12,-0.52l2.05,0.44l5.02,3.29l1.62,-0.11l0.23,2.53l1.04,2.72l1.57,2.41l1.73,1.74l1.97,0.96l3.7,0.6l1.23,0.69l2.22,3.47l4.73,9.45l1.8,1.89l-2.81,5.95l-0.26,1.52l0.71,0.38l0.97,1.86l1.29,0.86l-1.01,1.09l-0.25,1.77l0.51,4.87l-0.37,4.53l-0.59,1.89l-2.09,4.25l-1.39,1.01l-2.62,0.46l-0.86,1.78l-0.74,3.36l-3.71,-1.68l-1.53,-2.32l-3.44,-2.18l-10.34,-2.86l-3.37,0.47l-3.34,1.29l-0.96,0.93l-0.58,1.26l0.75,3.89l0.93,1.52l0.19,1.15l-0.25,1.32l-1.8,4.24l-0.2,7.04l-0.88,1.79l-0.74,3.86l-1.3,2.19l-9.52,8.34l-3.2,1.8l-13.45,2.36l-10.25,4.08l-1.71,1.21l-3.61,3.48l-3.18,1.78l-1.62,1.58l-5.04,0.98l-1.59,0.84l-4.05,5.35l-3.87,2.72l-1.84,2.7l-1.72,0.4l-0.82,1.24l-0.23,2.28l0.53,2.01l0.89,1.81l0.96,1.51l6.86,7.2l1.42,3.16l0.83,3.34l0.84,1.26l2.43,1.51l4.34,4.02l3.3,7.67l2.44,3.54l-6.19,9.96l-0.57,1.24l-0.38,2.77l-2.43,3.81l0.05,0.5l1.81,1.75l5.47,1.02l1.71,-0.28l2.38,-1.05l1.31,0.21l2.26,2.24l1.88,3.23l0.75,2.04l0.26,1.79l-0.26,3.35l-1.47,3.6l-1.87,2.16l0.17,3.36l-1.17,2.79l0.08,3.47l0.79,2.45l0.03,1.01l-2.68,3.19l-0.55,0.48l-0.79,0.04l-2.22,-1.45l-1.2,0.08l-1.44,0.66l-0.89,-0.36l-4.74,-3.59l-5.34,-5.64l-2.51,-0.66l-2.22,-1.8l-0.48,-3.34l1.11,-3.13l2.53,-1.26l0.1,-0.65l-2.01,-1.94l-2.5,-1.65l-1.36,-1.67l0.93,-2.33l-0.42,-0.54l-1.61,0.21l-5.53,-1.42l-3.59,0.01l-3.5,0.84l-1.95,0.97l-4.41,3.93l-1.43,0.64l-1.98,0.39l-1.89,-0.05l-1.26,-0.62l-3.59,-3.18l-1.52,-4.21l-0.76,-1.11l-1.83,-0.3l-3.82,1.47l-1.55,0.25l-5.74,-1.2l-2.14,0.31l-3.07,1.28l-0.75,-0.67l-0.46,-1.38l0.92,-1.77l0.88,-3.33l-0.44,-0.56l-2.66,1.27l-2.36,1.97l-1.49,0.61l-0.24,0.43l0.58,2.17l2.0,2.11l0.21,0.62l0.16,3.81l-0.41,2.1l-2.67,3.44l-23.19,-0.85l-8.36,1.73l-1.11,0.66l-1.08,2.5l-0.74,0.25l-5.42,-1.12l-8.03,-0.04l-4.24,-0.85l-1.88,-0.07l-3.45,3.05l-1.92,6.2l-1.67,1.86l-2.0,0.8l-4.47,0.74l-4.61,-1.02l-2.38,0.53l-4.84,5.47l0.2,0.65l2.04,0.91l0.27,0.78l-0.68,1.17l-1.4,0.6l-4.18,0.1l-1.94,0.6l-2.05,1.86l-2.66,3.22l-1.97,0.9l-1.87,-0.21l0.19,-3.57l-0.25,-0.39l-2.36,-0.88l-2.6,0.74l-6.36,4.42l-1.8,0.55l-10.07,-0.15l-1.18,-0.69l-0.76,-1.49l0.62,-1.89l-0.43,-1.89l-4.9,-5.3l-5.06,-2.39l-0.42,-0.72l2.86,-1.96l0.9,-1.07l-0.07,-0.57l-3.34,-2.32l-1.67,-0.13l-5.35,2.21l-2.76,0.34l-0.63,-0.19l-1.31,-1.93l-12.95,-4.91l-2.51,-0.06l-1.69,1.12l-1.96,2.74l-1.12,0.91l-0.99,0.17l-4.06,-0.62l-1.45,-0.67l-1.14,-1.05l-0.14,-1.04l0.94,-2.16l-0.58,-1.76l-0.74,-0.33l-2.39,0.59l-1.47,0.58l-0.25,0.42l0.19,1.4l1.45,3.1l-1.1,7.01l2.27,1.98l0.49,1.18l0.39,1.72l0.02,3.01l-0.87,3.17l-1.4,2.87l-1.57,2.09l-3.98,2.05l-2.78,5.32l-1.72,2.32l-1.86,1.71l-4.33,2.66l-2.06,0.8l-7.62,0.93l1.08,-2.1l1.5,-0.55l0.75,-0.76l0.25,-1.09l-0.26,-1.78l1.74,-5.25l0.09,-2.72l-0.21,-0.36l-2.07,-1.02l-4.31,0.79l-1.65,1.61l-1.82,-0.68l-2.6,1.19l-0.77,-0.75l-0.47,-1.25l-0.36,-3.05l-0.89,-1.13l2.04,-1.69l0.43,-1.82l-0.86,-1.7l-4.85,-7.13l-0.5,-0.14l-2.65,1.57l-0.74,-0.45l-0.18,-1.65l-0.89,-1.96l-2.23,-2.58l-0.26,-2.3l-0.65,-0.27l-1.11,0.89l-1.33,0.26l-2.81,-0.22l-3.14,-1.09l-2.31,0.96l-1.74,-0.9l-0.32,-1.29l0.18,-1.82l-0.42,-1.92l-1.15,-1.26l-1.55,-0.61l-1.8,0.19l-1.54,0.85l-2.14,2.5l-1.14,2.44l-3.75,-0.96l-4.01,-2.91l-2.27,-1.16l0.71,-0.48l3.48,-0.84l0.6,-0.52l0.44,-1.03l1.34,-0.65l3.54,0.93l4.42,-2.26l7.33,-6.54l2.78,-1.33l3.85,1.66l2.37,0.58l2.46,-0.02l3.51,-1.16l2.12,-1.18l2.35,-0.65l1.66,0.04l0.49,0.39l1.53,3.79l0.66,0.05l1.04,-1.44l0.33,-2.77l2.75,0.84l0.97,-0.74l0.44,-2.16l-0.84,-2.98l-0.56,-7.62l-0.49,-0.88l-1.25,-0.2l-0.64,-1.31l-1.3,-1.45l0.75,-1.34l1.82,-0.09l0.5,-0.28l0.67,-1.28l0.97,-0.53l0.18,-0.52l-2.54,-6.4l-0.45,-0.48l-0.92,0.11l-0.31,-0.29l1.01,-1.19l0.52,-2.69l0.43,-0.7l0.4,-5.37l-0.19,-0.85l-1.31,-1.45l-0.95,-2.44l0.17,-0.77l1.31,-1.06l2.91,-8.16l0.74,-3.29l0.16,-5.6l-0.33,-1.99l-2.62,-5.95l-3.86,-17.77l-1.56,-5.32l-3.15,-5.36l-1.91,-4.2l-0.59,-0.4l-0.84,0.03l-0.65,-1.22l5.31,-7.44l0.65,-0.43l-0.13,-2.22l0.88,-1.66l1.22,-1.23l3.32,-0.7l2.26,-1.66l0.6,-0.06l0.6,0.71l0.41,1.92l0.68,0.51l0.9,0.07l9.54,-5.82l0.52,-2.07l1.17,-1.33l4.44,-0.39l0.66,-0.31l-0.08,-0.69l-0.55,-0.65l1.1,-3.19l0.18,-1.82l-0.22,-1.62l-0.89,-1.87l-0.19,-1.17l1.69,-1.08l0.43,-0.53l0.08,-0.87l-0.6,-1.03l-4.03,-2.99l-1.65,-3.18l0.14,-1.7l2.05,-2.85l2.25,1.94l2.93,0.15l1.55,3.14l0.85,0.51l0.86,-0.53l4.94,-5.49l0.74,0.49l-0.58,0.47l-0.01,1.19l-0.58,1.96l0.37,1.05l0.5,0.39l1.75,-0.85l4.25,-3.96l0.08,-0.48l-1.74,-3.24l-0.66,-1.92l-0.37,-0.38l-0.9,0.02l-1.72,-0.91l-0.61,-0.8l-0.18,-1.01l0.06,-1.34l0.73,-1.43l-0.03,-3.7l1.4,-1.96l0.54,-2.62l-1.08,-2.87l0.47,-1.61l0.26,-5.81l-0.97,-1.03l1.98,-1.02l0.16,-1.28l-0.91,-2.88l-1.27,-1.39l-0.71,-1.79l-1.57,-1.8l-0.84,-1.62l-4.06,-3.34l-0.52,-0.7l-1.09,-3.23l-0.57,-0.38l-1.34,-0.01l-2.29,-1.27l-1.55,-0.02l-2.25,-0.99l0.39,-2.26l-1.89,-2.01l0.2,-1.83l-3.05,-1.64l1.88,-0.36l1.02,-1.86l0.59,-3.02l-0.33,-1.69l-2.28,-2.05l-0.99,0.1l-1.19,0.74l-1.25,-1.22l-2.42,-3.33l-3.12,-2.49l1.02,-0.42l0.3,-0.9l-1.56,-2.51l-0.15,-3.26l-1.4,-1.55l-0.25,-0.85l0.07,-0.29l2.17,0.96l0.89,-0.7l0.09,-1.26l-1.25,-3.43l0.71,-2.7l-0.48,-0.84l-1.84,-0.86l-0.87,-1.2l-0.23,-0.89l0.26,-4.01l1.58,-1.91l0.81,-0.12l1.86,0.65l0.63,-0.71l-3.11,-7.81l-2.67,-1.31l1.12,-1.8l0.77,-2.54l-1.1,-3.06l0.79,-1.94l-0.13,-1.15l-0.63,-0.59l-1.45,-0.21l-0.84,-0.56l-0.15,-0.3l0.64,-1.62l-0.12,-0.69l-1.06,-0.86l-1.19,-0.33l-2.36,1.88l-0.47,0.83l0.82,1.5l0.01,1.21l-3.6,3.81l-0.69,0.37l-7.69,-0.02l-0.44,-4.09l0.24,-2.78l-0.43,-3.33l-0.42,-0.82l-1.25,-1.03l0.61,-1.41l-0.68,-1.3l-1.27,-0.14l-1.73,2.12l-1.45,0.67l-0.95,2.44l-1.04,0.28l-0.7,-0.57l1.99,-2.69l0.03,-2.69l1.78,-2.46l0.42,-1.66l-0.81,-1.61l-3.8,-4.27l-0.25,-5.92l-3.86,-5.09l-0.7,-0.15l-2.79,1.49l-3.36,3.65l-1.09,-2.24l-0.26,-2.3l-0.34,-0.44l-0.74,-0.05l-0.95,1.45l-1.42,0.89l-0.45,2.43l-0.72,0.32l-1.26,-0.15l-1.88,-1.27l0.86,-2.27l-0.08,-1.31l0.83,-0.89l-0.2,-1.69l0.56,-1.58l-0.32,-2.34l0.7,-1.72l-0.22,-0.77l-0.61,-0.56l-0.55,-0.04l-1.67,1.09l-2.44,0.79l-2.57,-1.66l-1.97,0.59l-1.04,-0.1l-5.38,-2.52l-1.88,-0.05l-3.5,0.53l-3.55,1.29l-4.85,-0.31l-2.4,1.17l-1.69,2.05l0.7,2.62l-0.69,1.61l0.06,1.13l0.8,0.91l4.55,1.02l0.29,0.58l-0.41,2.15l0.47,0.79l0.95,0.1l0.9,-0.5l1.16,-2.6l2.24,0.95l-0.99,6.97l0.68,1.74l-1.53,1.43l-0.55,-0.04l-1.11,-1.22l-0.82,-0.33l-2.99,1.26l-3.2,0.27l-2.21,1.12l-0.9,1.2l0.3,2.46l-1.33,1.41l-0.69,2.16l-0.77,1.01l-6.19,0.2l-1.58,-0.25l-5.5,1.21l-0.79,-0.5l-1.37,-2.35l-1.97,-1.9l-0.3,-0.78l3.16,-3.22l0.6,-1.12l-1.15,-6.97l2.1,-0.43l1.41,-1.58l-0.33,-1.68l0.11,-1.16l1.59,-4.06l-0.47,-0.8l-2.19,-1.08l-0.22,-0.86l1.54,-2.3l0.53,-1.76l-1.03,-1.5l-2.09,0.23l-1.02,-0.79l-0.77,-2.11l0.22,-3.67l-0.24,-0.78l-0.6,-0.3l-0.47,0.18l-1.16,1.84l-0.62,-1.15l-3.47,-10.75l0.19,-10.68l1.53,0.6l0.67,-0.23l0.25,-0.47l-1.22,-2.81l0.12,-1.66l-0.96,-1.64l-0.52,-3.31l-0.61,-0.93l-1.34,-0.31l-0.96,0.17l-0.52,0.47l-1.35,-0.87Z",
            name: "Bayern"
        },
        "DE-HE": {
            path: "M188.95,810.33l6.35,-4.54l0.44,-0.79l0.38,-2.69l1.04,-1.63l1.7,0.13l1.57,-0.41l1.64,1.66l1.0,0.26l0.41,-0.41l0.82,-4.47l-0.52,-0.68l-2.12,-1.3l-0.63,-0.83l-0.07,-0.96l0.2,-1.29l1.14,-2.63l1.07,-1.56l5.64,-2.93l1.17,-1.3l1.94,1.78l1.16,0.02l2.14,-3.32l-0.15,-0.7l-0.81,-1.02l0.67,-2.02l5.17,0.05l1.73,-0.47l1.1,-1.26l0.0,-1.59l-1.47,-4.79l-0.75,-1.41l-1.96,-1.59l-2.99,-6.28l-1.77,-0.93l-0.22,-1.18l-0.54,-0.66l-4.43,-1.15l-0.42,-0.41l0.1,-0.44l1.24,-1.13l1.24,-4.3l1.87,-2.34l-0.24,-0.56l-1.7,-1.35l0.1,-6.48l0.35,-1.6l1.58,-1.2l1.46,-2.02l1.44,-0.58l1.38,0.15l2.34,2.66l1.56,0.2l0.93,-0.4l2.36,-2.11l2.64,-6.91l-0.4,-1.04l-0.98,-0.64l-0.56,-1.18l-0.35,-2.32l-1.98,-4.89l0.99,-2.55l0.41,-2.61l0.89,-2.03l0.56,-0.61l1.34,-0.45l0.4,-0.63l0.8,-5.69l-0.85,-1.44l-2.36,-1.85l-0.09,-1.03l-0.81,-0.77l0.05,-0.5l5.12,-4.59l0.98,-2.42l1.94,-1.41l0.84,-1.2l4.21,-3.82l1.4,-1.65l1.5,-0.07l0.98,2.19l0.86,0.66l1.76,0.3l2.77,-0.29l3.21,-2.25l0.35,-0.87l-0.08,-1.39l2.81,-2.89l1.55,-1.05l2.12,0.08l0.5,-1.2l0.14,-3.46l2.02,-4.46l0.51,-0.6l1.33,-0.54l1.65,-3.7l1.88,-2.85l-0.97,-4.61l0.24,-2.07l-1.63,-3.36l0.28,-0.88l9.71,-0.04l3.43,0.84l4.39,-2.63l0.38,-0.49l0.06,-1.36l-1.08,-2.41l2.1,-2.94l3.15,-3.53l0.3,-1.06l-0.07,-2.06l-1.95,-9.31l-1.15,-0.95l0.34,-1.86l-0.62,-0.71l-0.94,-0.03l-2.72,1.84l-4.53,0.96l-1.41,1.88l-1.39,-0.09l-0.62,-0.55l-0.54,-1.9l-1.7,-1.58l1.71,-3.95l2.09,-2.73l3.23,-3.29l0.6,-1.52l1.89,-1.3l1.01,-1.6l4.7,-1.65l3.75,-0.21l3.54,-0.99l4.62,1.08l3.75,-2.38l4.01,-0.2l0.58,-0.35l0.98,-1.98l0.24,-1.37l-1.02,-1.25l-2.22,-0.4l-0.39,-4.41l-1.42,-2.56l0.64,-1.87l4.99,-2.51l4.01,-1.05l1.5,-0.78l1.2,0.51l1.94,1.48l2.71,1.09l0.52,0.76l0.18,1.35l-0.15,2.67l2.47,2.45l3.83,0.82l1.35,-0.1l3.6,-2.81l1.34,0.09l0.63,-0.26l0.54,-1.21l0.18,-2.09l0.48,-1.48l0.74,-0.75l2.94,-1.54l3.35,-2.49l1.48,-2.89l2.01,-2.19l0.89,-1.94l1.48,-5.06l-0.24,-0.76l-1.63,-1.2l-0.05,-0.34l7.8,-2.81l0.86,-0.88l1.3,-2.32l0.45,0.44l0.55,-0.0l1.67,-1.62l1.52,0.16l0.47,2.94l0.35,0.46l1.4,0.62l2.29,-0.09l1.98,-1.76l1.14,1.4l1.44,0.66l1.69,0.21l2.54,-0.81l0.81,2.0l2.27,1.39l1.17,3.62l1.81,1.98l-0.94,1.48l-2.55,-1.92l-1.05,0.04l-0.46,0.61l-0.04,0.74l1.05,2.21l-0.69,0.02l-1.0,-0.55l-0.72,0.16l-0.29,0.57l-0.41,3.96l-1.23,0.31l-0.52,0.59l0.19,1.39l1.92,4.38l1.2,1.63l0.93,0.51l-0.82,1.77l0.67,1.7l-0.22,2.1l0.37,3.91l-0.39,0.88l-3.38,0.6l-1.32,-0.28l-0.56,0.26l-1.69,2.34l0.1,1.36l0.69,2.01l-3.16,-0.89l-0.46,0.46l0.14,0.6l0.63,0.93l2.76,2.51l1.79,0.54l6.81,3.12l1.42,0.04l1.1,0.62l2.78,3.61l1.74,0.29l1.01,-0.51l3.57,-3.44l0.4,-0.72l0.05,-1.23l0.91,-1.12l0.24,-0.93l-0.68,-0.82l-0.8,-0.05l-2.1,1.65l-2.96,-2.91l-0.54,-1.52l4.05,-2.36l1.18,-1.01l2.45,-0.81l0.99,-1.13l-0.46,-1.65l2.89,1.64l1.55,3.24l0.8,0.79l1.35,-0.13l0.91,-1.06l0.27,-1.1l-1.17,-2.51l-0.13,-1.03l1.89,-0.23l1.37,-1.23l0.31,2.28l3.92,3.2l-1.56,1.38l-0.73,2.0l0.64,3.32l1.09,1.37l0.19,0.68l0.21,2.95l0.41,0.87l1.62,0.55l0.82,1.33l1.15,0.95l1.91,0.02l2.19,0.92l2.26,0.5l0.29,0.52l-0.47,1.15l0.0,1.11l0.55,1.03l1.53,1.27l0.4,2.28l0.5,0.75l3.51,1.51l2.02,0.39l1.52,0.94l2.41,0.15l2.31,1.74l3.25,1.71l-0.25,1.15l-1.44,1.77l-0.62,1.71l-0.63,4.91l-0.91,-1.25l-0.03,-1.26l-1.43,-1.69l-1.76,-0.02l-2.26,0.62l-1.07,0.97l1.53,2.78l2.65,0.81l-0.34,1.69l-1.76,3.39l-0.6,2.71l0.11,1.55l0.65,0.42l1.29,0.2l1.24,0.96l1.92,0.26l1.48,2.89l-1.8,4.06l-5.16,0.2l-0.79,-0.53l0.07,-1.23l-0.64,-0.5l-1.54,0.49l-1.14,-0.41l-2.97,-0.02l-1.41,0.33l-2.45,1.76l-0.42,2.4l0.29,1.11l1.64,2.25l0.27,1.83l-0.3,0.92l-2.51,0.55l-3.38,-0.36l-0.94,-0.57l-0.66,-0.01l-1.0,0.4l-0.43,1.01l-0.06,1.18l0.54,0.96l0.68,0.06l0.71,-0.55l-0.06,1.9l0.43,1.4l0.9,0.09l1.69,-1.98l0.97,-0.18l2.22,1.72l1.09,2.47l0.98,1.34l-2.78,3.56l-0.27,0.68l0.32,1.37l-0.27,1.77l-2.8,1.05l-2.02,0.26l-1.53,0.66l-0.92,0.89l-0.77,3.1l0.38,2.84l-1.69,0.43l-0.78,1.71l1.45,2.23l-0.21,2.59l-2.03,4.36l0.06,1.82l-1.92,1.89l-1.2,2.04l-0.39,3.89l0.24,1.15l0.53,0.65l0.67,0.11l1.64,-0.64l2.69,1.44l1.53,0.12l0.88,-0.55l0.72,-1.8l-1.29,-2.13l0.24,-1.08l1.86,-0.55l1.96,-1.22l1.12,-0.28l4.55,1.05l0.85,0.82l1.03,2.68l0.22,3.42l-1.6,0.61l-1.0,1.13l-0.34,0.88l0.33,1.78l-0.08,3.79l0.82,2.39l-1.21,5.0l0.35,0.95l0.53,0.2l-0.84,2.47l-4.24,7.42l-1.89,1.65l-6.08,3.6l-5.76,2.25l-1.82,0.13l-0.84,-0.34l-2.77,-2.91l-0.74,0.05l-1.91,0.9l-1.25,1.98l-2.34,8.46l0.55,6.38l-0.86,1.03l-1.58,1.06l-4.04,1.66l-0.82,0.8l-0.86,1.18l-0.72,2.23l-0.03,1.21l0.49,1.53l-4.67,1.51l-1.29,0.02l-1.71,-0.78l-2.14,0.52l-1.62,-1.64l-1.36,0.53l-1.58,-0.47l-0.82,0.3l-0.29,1.49l0.31,3.06l-0.98,4.41l0.53,0.94l2.06,0.37l0.39,0.39l-1.68,3.66l-0.14,0.9l0.6,3.19l-0.8,0.96l-5.85,2.5l-1.4,0.22l-2.12,-0.35l-1.2,-1.59l-0.89,-2.3l-0.7,-0.75l-4.87,-2.54l-1.94,0.06l-1.47,-0.43l-6.65,-0.36l-3.73,1.27l-0.56,2.58l-1.64,1.95l-1.49,1.06l0.63,-1.11l-0.18,-0.68l-1.62,-0.62l-2.16,-1.56l-0.75,-0.14l-5.41,2.44l-3.79,1.01l-0.83,0.8l-0.4,1.02l-0.27,4.04l-1.61,0.45l-1.24,1.6l0.12,0.55l1.67,1.13l0.5,0.12l1.49,-0.68l0.75,0.14l0.35,0.52l0.51,3.3l0.93,1.51l-0.1,1.75l1.13,2.5l-1.82,-0.71l-0.54,0.37l-0.2,11.33l3.52,10.99l0.79,1.44l0.78,0.27l1.44,-2.04l-0.17,4.03l0.86,2.37l1.2,1.11l2.27,-0.2l0.59,0.93l-2.08,3.81l0.04,0.84l0.47,0.73l2.36,1.31l-1.57,3.83l-0.13,1.36l0.33,1.54l-0.99,0.98l-1.87,0.31l-0.63,0.53l0.08,2.12l1.07,4.92l-3.78,4.46l0.46,1.35l1.95,1.88l1.26,2.17l-0.68,1.14l-2.02,-1.31l-0.71,0.46l-0.05,1.04l2.47,3.19l2.67,5.31l-0.49,-0.09l-1.28,-1.48l-2.86,-0.16l-1.05,0.19l-2.22,2.15l-0.8,0.32l-2.28,-0.43l-5.79,0.26l-2.86,3.58l1.56,3.07l0.23,0.91l-0.41,0.91l-2.27,1.32l-0.71,-1.31l-0.85,0.12l-1.03,3.28l-3.66,4.03l-3.29,-0.8l-0.24,-0.65l0.21,-1.8l1.59,-1.12l0.36,-0.9l-0.38,-3.52l0.19,-1.4l1.83,-2.2l1.49,1.47l1.16,-0.24l1.59,-2.87l0.13,-1.18l-0.33,-0.97l-0.42,-0.26l-5.91,0.5l-1.95,-3.06l-2.78,0.15l-1.52,-0.25l-4.47,-2.65l-1.1,-1.26l-1.38,-3.38l-0.43,-1.64l0.56,-1.23l-0.1,-1.4l-1.1,-1.61l-0.21,-1.22l-0.42,-0.48l-0.74,-0.07l-6.89,1.75l-0.5,0.36l-0.12,0.9l1.9,8.76l-0.61,0.89l-3.9,1.69l-6.5,-6.79l-2.49,-1.98l-1.29,-0.43l-1.31,0.03l-2.94,1.21l-1.51,-4.29l-3.85,-8.13l0.16,-3.83l1.57,-2.79l2.53,-1.72l3.36,-0.75l3.44,-4.74l0.33,-1.67l-0.25,-0.44l-1.38,-0.54l-3.7,0.53l-1.36,-3.59l-1.85,-3.44l-0.93,-4.17l-1.01,-2.19l-2.22,-3.3l-0.67,-1.74l1.43,-5.4l-1.93,-5.19l-10.61,-12.12l-1.56,-1.03l-1.33,-0.34l-2.86,0.09l-12.29,4.19l-3.9,2.95l-4.63,2.45l-4.17,1.38l-3.69,0.13l-1.58,-2.35l-0.28,-1.83l-0.86,-1.48l-6.36,-5.77l-1.0,-0.43Z",
            name: "Hessen"
        }
    },
    height: 1223.9059488513599,
    projection: {
        type: "merc",
        centralMeridian: 0
    },
    width: 900
}), jQuery.fn.vectorMap("addMap", "world_mill", {
    insets: [{
        width: 900,
        top: 0,
        height: 440.7063107441331,
        bbox: [{
            y: -12671671.123330014,
            x: -20004297.151525836
        }, {
            y: 6930392.025135122,
            x: 20026572.394749384
        }],
        left: 0
    }],
    paths: {
        BD: {
            path: "M651.84,230.21l-0.6,-2.0l-1.36,-1.71l-2.31,-0.11l-0.41,0.48l0.2,0.94l-0.53,0.99l-0.72,-0.36l-0.68,0.35l-1.2,-0.36l-0.37,-2.0l-0.81,-1.86l0.39,-1.46l-0.22,-0.47l-1.14,-0.53l0.29,-0.5l1.48,-0.94l0.03,-0.65l-1.55,-1.22l0.55,-1.14l1.61,0.94l1.04,0.15l0.18,1.54l0.34,0.35l5.64,0.63l-0.84,1.64l-1.22,0.34l-0.77,1.51l0.07,0.47l1.37,1.37l0.67,-0.19l0.42,-1.39l1.21,3.84l-0.03,1.21l-0.33,-0.15l-0.4,0.28Z",
            name: "Bangladesh"
        },
        BE: {
            path: "M429.29,144.05l1.91,0.24l2.1,-0.63l2.63,1.99l-0.21,1.66l-0.69,0.4l-0.18,1.2l-1.66,-1.13l-1.39,0.15l-2.73,-2.7l-1.17,-0.18l-0.16,-0.52l1.54,-0.5Z",
            name: "Belgium"
        },
        BF: {
            path: "M421.42,247.64l-0.11,0.95l0.34,1.16l1.4,1.71l0.07,1.1l0.32,0.37l2.55,0.51l-0.04,1.28l-0.38,0.53l-1.07,0.21l-0.72,1.18l-0.63,0.21l-3.22,-0.25l-0.94,0.39l-5.4,-0.05l-0.39,0.38l0.16,2.73l-1.23,-0.43l-1.17,0.1l-0.89,0.57l-2.27,-1.72l-0.13,-1.11l0.61,-0.96l0.02,-0.93l1.87,-1.98l0.44,-1.81l0.43,-0.39l1.28,0.26l1.05,-0.52l0.47,-0.73l1.84,-1.09l0.55,-0.83l2.2,-1.0l1.15,-0.3l0.72,0.45l1.13,-0.01Z",
            name: "Burkina Faso"
        },
        BG: {
            path: "M491.65,168.18l-0.86,0.88l-0.91,2.17l0.48,1.34l-1.6,-0.24l-2.55,0.95l-0.28,1.51l-1.8,0.22l-2.0,-1.0l-1.92,0.79l-1.42,-0.07l-0.15,-1.63l-1.05,-0.97l0.0,-0.8l1.2,-1.57l0.01,-0.56l-1.14,-1.23l-0.05,-0.94l0.88,0.97l0.88,-0.2l1.91,0.47l3.68,0.16l1.42,-0.81l2.72,-0.66l2.55,1.24Z",
            name: "Bulgaria"
        },
        BA: {
            path: "M463.49,163.65l2.1,0.5l1.72,-0.03l1.52,0.68l-0.36,0.78l0.08,0.45l1.04,1.02l-0.25,0.98l-1.81,1.15l-0.38,1.38l-1.67,-0.87l-0.89,-1.2l-2.11,-1.83l-1.63,-2.22l0.23,-0.57l0.48,0.38l0.55,-0.06l0.43,-0.51l0.94,-0.06Z",
            name: "Bosnia and Herz."
        },
        BN: {
            path: "M707.48,273.58l0.68,-0.65l1.41,-0.91l-0.15,1.63l-0.81,-0.05l-0.61,0.58l-0.53,-0.6Z",
            name: "Brunei"
        },
        BO: {
            path: "M263.83,340.69l-3.09,-0.23l-0.38,0.23l-0.7,1.52l-1.31,-1.53l-3.28,-0.64l-2.37,2.4l-1.31,0.26l-0.88,-3.26l-1.3,-2.86l0.74,-2.37l-0.13,-0.43l-1.2,-1.01l-0.37,-1.89l-1.08,-1.55l1.45,-2.56l-0.96,-2.33l0.47,-1.06l-0.34,-0.73l0.91,-1.32l0.16,-3.84l0.5,-1.18l-1.81,-3.41l2.46,0.07l0.8,-0.85l3.4,-1.91l2.66,-0.35l-0.19,1.38l0.3,1.07l-0.05,1.97l2.72,2.27l2.88,0.49l0.89,0.86l1.79,0.58l0.98,0.7l1.71,0.05l1.17,0.61l0.6,2.7l-0.7,0.54l0.96,2.99l0.37,0.28l4.3,0.1l-0.25,1.2l0.27,1.02l1.43,0.9l0.5,1.35l-0.41,1.86l-0.65,1.08l0.12,1.35l-2.69,-1.65l-2.4,-0.03l-4.36,0.76l-1.49,2.5l-0.11,1.52l-0.75,2.37Z",
            name: "Bolivia"
        },
        JP: {
            path: "M781.12,166.87l1.81,0.68l1.62,-0.97l0.39,2.42l-3.35,0.75l-2.23,2.88l-3.63,-1.9l-0.56,0.2l-1.26,3.05l-2.16,0.03l-0.29,-2.51l1.08,-2.03l2.45,-0.16l0.37,-0.33l1.25,-5.94l2.47,2.71l2.03,1.12ZM773.56,187.34l-0.91,2.22l0.37,1.52l-1.14,1.75l-3.02,1.26l-4.58,0.27l-3.34,3.01l-1.25,-0.8l-0.09,-1.9l-0.46,-0.38l-4.35,0.62l-3.0,1.32l-2.85,0.05l-0.37,0.27l0.13,0.44l2.32,1.89l-1.54,4.34l-1.26,0.9l-0.79,-0.7l0.56,-2.27l-0.21,-0.45l-1.47,-0.75l-0.74,-1.4l2.12,-0.84l1.26,-1.7l2.45,-1.42l1.83,-1.91l4.78,-0.81l2.6,0.57l0.44,-0.21l2.39,-4.66l1.29,1.06l0.5,0.01l5.1,-4.02l1.69,-3.73l-0.38,-3.4l0.9,-1.61l2.14,-0.44l1.23,3.72l-0.07,2.18l-2.23,2.84l-0.04,3.16ZM757.78,196.26l0.19,0.56l-1.01,1.21l-1.16,-0.68l-1.28,0.65l-0.69,1.45l-1.02,-0.5l0.01,-0.93l1.14,-1.38l1.57,0.14l0.85,-0.98l1.4,0.46Z",
            name: "Japan"
        },
        BI: {
            path: "M495.45,295.49l-1.08,-2.99l1.14,-0.11l0.64,-1.19l0.76,0.09l0.65,1.83l-2.1,2.36Z",
            name: "Burundi"
        },
        BJ: {
            path: "M429.57,255.75l-0.05,0.8l0.5,1.34l-0.42,0.86l0.17,0.79l-1.81,2.12l-0.57,1.76l-0.08,5.42l-1.41,0.2l-0.48,-1.36l0.11,-5.71l-0.52,-0.7l-0.2,-1.35l-1.48,-1.48l0.21,-0.9l0.89,-0.43l0.42,-0.92l1.27,-0.36l1.22,-1.34l0.61,-0.0l1.62,1.24Z",
            name: "Benin"
        },
        BT: {
            path: "M650.32,213.86l0.84,0.71l-0.12,1.1l-3.76,-0.11l-1.57,0.4l-1.93,-0.87l1.48,-1.96l1.13,-0.57l1.63,0.57l1.33,0.08l0.99,0.65Z",
            name: "Bhutan"
        },
        JM: {
            path: "M228.38,239.28l-0.8,0.4l-2.26,-1.06l0.84,-0.23l2.14,0.3l1.17,0.56l-1.08,0.03Z",
            name: "Jamaica"
        },
        BW: {
            path: "M483.92,330.07l2.27,4.01l2.83,2.86l0.96,0.31l0.78,2.43l2.13,0.61l1.02,0.76l-3.0,1.64l-2.32,2.02l-1.54,2.69l-1.52,0.45l-0.64,1.94l-1.34,0.52l-1.85,-0.12l-1.21,-0.74l-1.35,-0.3l-1.22,0.62l-0.75,1.37l-2.31,1.9l-1.4,0.21l-0.35,-0.59l0.16,-1.75l-1.48,-2.54l-0.62,-0.43l-0.0,-7.1l2.08,-0.08l0.39,-0.4l0.07,-8.9l5.19,-0.93l0.8,0.89l0.51,0.07l1.5,-0.95l2.21,-0.49Z",
            name: "Botswana"
        },
        BR: {
            path: "M259.98,275.05l3.24,0.7l0.65,-0.53l4.55,-1.32l1.08,-1.06l-0.02,-0.63l0.55,-0.05l0.28,0.28l-0.26,0.87l0.22,0.48l0.73,0.32l0.4,0.81l-0.62,0.86l-0.4,2.13l0.82,2.56l1.69,1.43l1.43,0.2l3.17,-1.68l3.18,0.3l0.65,-0.75l-0.27,-0.92l1.9,-0.09l2.39,0.99l1.06,-0.61l0.84,0.78l1.2,-0.18l1.18,-1.06l0.84,-1.94l1.36,-2.11l0.37,-0.05l1.89,5.45l1.33,0.59l0.05,1.28l-1.77,1.94l0.02,0.56l1.02,0.87l4.07,0.36l0.08,2.16l0.66,0.29l1.74,-1.5l6.97,2.32l1.02,1.22l-0.35,1.18l0.49,0.5l2.81,-0.74l4.77,1.3l3.75,-0.08l3.57,2.0l3.29,2.86l1.93,0.72l2.12,0.12l0.71,0.62l1.21,4.51l-0.95,3.98l-4.72,5.06l-1.64,2.92l-1.72,2.05l-0.8,0.3l-0.72,2.03l0.18,4.75l-0.94,5.53l-0.81,1.13l-0.43,3.36l-2.55,3.5l-0.4,2.51l-1.86,1.04l-0.67,1.53l-2.54,0.01l-3.94,1.01l-1.83,1.2l-2.87,0.82l-3.03,2.19l-2.2,2.83l-0.36,2.0l0.4,1.58l-0.44,2.6l-0.51,1.2l-1.77,1.54l-2.75,4.78l-3.83,3.42l-1.24,2.74l-1.18,1.15l-0.36,-0.83l0.95,-1.14l0.01,-0.5l-1.52,-1.97l-4.56,-3.32l-1.03,-0.0l-2.38,-2.02l-0.81,-0.0l5.34,-5.45l3.77,-2.58l0.22,-2.46l-1.35,-1.81l-0.91,0.07l0.58,-2.33l0.01,-1.54l-1.11,-0.83l-1.75,0.3l-0.44,-3.11l-0.52,-0.95l-1.88,-0.88l-1.24,0.47l-2.17,-0.41l0.15,-3.21l-0.62,-1.34l0.66,-0.73l-0.22,-1.34l0.66,-1.13l0.44,-2.04l-0.61,-1.83l-1.4,-0.86l-0.2,-0.75l0.34,-1.39l-0.38,-0.5l-4.52,-0.1l-0.72,-2.22l0.59,-0.42l-0.03,-1.1l-0.5,-0.87l-0.32,-1.7l-1.45,-0.76l-1.63,-0.02l-1.05,-0.72l-1.6,-0.48l-1.13,-0.99l-2.69,-0.4l-2.47,-2.06l0.13,-4.35l-0.45,-0.45l-3.46,0.5l-3.44,1.94l-0.6,0.74l-2.9,-0.17l-1.47,0.42l-0.72,-0.18l0.15,-3.52l-0.63,-0.34l-1.94,1.41l-1.87,-0.06l-0.83,-1.18l-1.37,-0.26l0.21,-1.01l-1.35,-1.49l-0.88,-1.91l0.56,-0.6l-0.0,-0.81l1.29,-0.62l0.22,-0.43l-0.22,-1.19l0.61,-0.91l0.15,-0.99l2.65,-1.58l1.99,-0.47l0.42,-0.36l2.06,0.11l0.42,-0.33l1.19,-8.0l-0.41,-1.56l-1.1,-1.0l0.01,-1.33l1.91,-0.42l0.08,-0.96l-0.33,-0.43l-1.14,-0.2l-0.02,-0.83l4.47,0.05l0.82,-0.67l0.82,1.81l0.8,0.07l1.15,1.1l2.26,-0.05l0.71,-0.83l2.78,-0.96l0.48,-1.13l1.6,-0.64l0.24,-0.47l-0.48,-0.82l-1.83,-0.19l-0.36,-3.22Z",
            name: "Brazil"
        },
        BS: {
            path: "M226.4,223.87l-0.48,-1.15l-0.84,-0.75l0.36,-1.11l0.95,1.95l0.01,1.06ZM225.56,216.43l-1.87,0.29l-0.04,-0.22l0.74,-0.14l1.17,0.06Z",
            name: "Bahamas"
        },
        BY: {
            path: "M493.84,128.32l0.29,0.7l0.49,0.23l1.19,-0.38l2.09,0.72l0.19,1.26l-0.45,1.24l1.57,2.26l0.89,0.59l0.17,0.81l1.58,0.56l0.4,0.5l-0.53,0.41l-1.87,-0.11l-0.73,0.38l-0.13,0.52l1.04,2.74l-1.91,0.26l-0.89,0.99l-0.11,1.18l-2.73,-0.04l-0.53,-0.62l-0.52,-0.08l-0.75,0.46l-0.91,-0.42l-1.92,-0.07l-2.75,-0.79l-2.6,-0.28l-2.0,0.07l-1.5,0.92l-0.67,0.07l-0.08,-1.22l-0.59,-1.19l1.36,-0.88l0.01,-1.35l-0.7,-1.41l-0.07,-1.0l2.16,-0.02l2.72,-1.3l0.75,-2.04l1.91,-1.04l0.2,-0.41l-0.19,-1.25l3.8,-1.78l2.3,0.77Z",
            name: "Belarus"
        },
        BZ: {
            path: "M198.03,244.38l0.1,-4.49l0.69,-0.06l0.74,-1.3l0.34,0.28l-0.4,1.3l0.17,0.58l-0.34,2.25l-1.3,1.42Z",
            name: "Belize"
        },
        RU: {
            path: "M491.55,115.25l2.55,-1.85l-0.01,-0.65l-2.2,-1.5l7.32,-6.76l1.03,-2.11l-0.13,-0.49l-3.46,-2.52l0.86,-2.7l-2.11,-2.81l1.56,-3.67l-2.77,-4.52l2.15,-2.99l-0.08,-0.55l-3.65,-2.73l0.3,-2.54l1.81,-0.37l4.26,-1.77l2.42,-1.45l4.06,2.61l6.79,1.04l9.34,4.85l1.78,1.88l0.14,2.46l-2.55,2.02l-3.9,1.06l-11.07,-3.14l-2.06,0.53l-0.13,0.7l3.94,2.94l0.31,5.86l0.26,0.36l5.14,2.24l0.58,-0.29l0.32,-1.94l-1.35,-1.78l1.13,-1.09l6.13,2.42l2.11,-0.98l0.18,-0.56l-1.51,-2.67l5.41,-3.76l2.07,0.22l2.26,1.41l0.57,-0.16l1.46,-2.87l-0.05,-0.44l-1.92,-2.32l1.12,-2.32l-1.32,-2.27l5.87,1.16l1.04,1.75l-2.59,0.43l-0.33,0.4l0.02,2.36l2.46,1.83l3.87,-0.91l0.86,-2.8l13.69,-5.65l0.99,0.11l-1.92,2.06l0.23,0.67l3.11,0.45l2.0,-1.48l4.56,-0.12l3.64,-1.73l2.65,2.44l0.56,-0.01l2.85,-2.88l-0.01,-0.57l-2.35,-2.29l0.9,-1.01l7.14,1.3l3.41,1.36l9.05,4.97l0.51,-0.11l1.67,-2.27l-0.05,-0.53l-2.43,-2.21l-0.06,-0.78l-0.34,-0.36l-2.52,-0.36l0.64,-1.93l-1.32,-3.46l-0.06,-1.21l4.48,-4.06l1.69,-4.29l1.6,-0.81l6.23,1.18l0.44,2.21l-2.29,3.64l0.06,0.5l1.47,1.39l0.76,3.0l-0.56,6.03l2.69,2.82l-0.96,2.57l-4.86,5.95l0.23,0.64l2.86,0.61l0.42,-0.17l0.93,-1.4l2.64,-1.03l0.87,-2.24l2.09,-1.96l0.07,-0.5l-1.36,-2.28l1.09,-2.69l-0.32,-0.55l-2.47,-0.33l-0.5,-2.06l1.94,-4.38l-0.06,-0.42l-2.96,-3.4l4.12,-2.88l0.16,-0.4l-0.51,-2.93l0.54,-0.05l1.13,2.25l-0.96,4.35l0.27,0.47l2.68,0.84l0.5,-0.51l-1.02,-2.99l3.79,-1.66l5.01,-0.24l4.53,2.61l0.48,-0.06l0.07,-0.48l-2.18,-3.82l-0.23,-4.67l3.98,-0.9l5.97,0.21l5.49,-0.64l0.27,-0.65l-1.83,-2.31l2.56,-2.9l2.87,-0.17l4.8,-2.47l6.54,-0.67l1.03,-1.42l6.25,-0.45l2.32,1.11l5.53,-2.7l4.5,0.08l0.39,-0.28l0.66,-2.15l2.26,-2.12l5.69,-2.11l3.21,1.29l-2.46,0.94l-0.25,0.42l0.34,0.35l5.41,0.77l0.61,2.33l0.58,0.25l2.2,-1.22l7.13,0.07l5.51,2.47l1.79,1.72l-0.53,2.24l-9.16,4.15l-1.97,1.52l0.16,0.71l6.77,1.91l2.16,-0.78l1.13,2.74l0.67,0.11l1.01,-1.15l3.81,-0.73l7.7,0.77l0.54,1.99l0.36,0.29l10.47,0.71l0.43,-0.38l0.13,-3.23l4.87,0.78l3.95,-0.02l3.83,2.4l1.03,2.71l-1.35,1.79l0.02,0.5l3.15,3.64l4.07,1.96l0.53,-0.18l2.23,-4.47l3.95,1.93l4.16,-1.21l4.73,1.39l2.05,-1.26l3.94,0.62l0.43,-0.55l-1.68,-4.02l2.89,-1.8l22.31,3.03l2.16,2.75l6.55,3.51l10.29,-0.81l4.82,0.73l1.85,1.66l-0.29,3.08l0.25,0.41l3.08,1.26l3.56,-0.88l4.35,-0.11l4.8,0.87l4.57,-0.47l4.23,3.79l0.43,0.07l3.1,-1.4l0.16,-0.6l-1.88,-2.62l0.85,-1.52l7.71,1.21l5.22,-0.26l7.09,2.09l9.59,5.22l6.35,4.11l-0.2,2.38l1.88,1.41l0.6,-0.42l-0.48,-2.53l6.15,0.57l4.4,3.51l-1.97,1.43l-4.0,0.41l-0.36,0.39l-0.06,3.79l-0.74,0.62l-2.07,-0.11l-1.91,-1.39l-3.14,-1.11l-0.78,-1.85l-2.72,-0.68l-2.63,0.49l-1.04,-1.1l0.46,-1.31l-0.5,-0.51l-3.0,0.98l-0.22,0.58l0.99,1.7l-1.21,1.48l-3.04,1.68l-3.12,-0.28l-0.4,0.23l0.09,0.46l2.2,2.09l1.46,3.2l1.15,1.1l0.24,1.33l-0.42,0.67l-4.63,-0.77l-6.96,2.9l-2.19,0.44l-7.6,5.06l-0.84,1.45l-3.61,-2.37l-6.24,2.82l-0.94,-1.15l-0.53,-0.08l-2.28,1.52l-3.2,-0.49l-0.44,0.27l-0.78,2.37l-3.05,3.78l0.09,1.47l0.29,0.36l2.54,0.72l-0.29,4.53l-1.97,0.11l-0.35,0.26l-1.07,2.94l0.8,1.45l-3.91,1.58l-1.05,3.95l-3.48,0.77l-0.3,0.3l-0.72,3.29l-3.09,2.65l-0.7,-1.74l-2.44,-12.44l1.16,-4.71l2.04,-2.06l0.22,-1.64l3.8,-0.86l4.46,-4.61l4.28,-3.81l4.48,-3.01l2.17,-5.63l-0.42,-0.54l-3.04,0.33l-1.77,3.31l-5.86,3.86l-1.86,-4.25l-0.45,-0.23l-6.46,1.3l-6.47,6.44l-0.01,0.55l1.58,1.74l-8.24,1.17l0.15,-2.2l-0.34,-0.42l-3.89,-0.56l-3.25,1.81l-7.62,-0.62l-8.45,1.19l-17.71,15.41l0.22,0.7l3.74,0.41l1.36,2.17l2.43,0.76l1.88,-1.68l2.4,0.2l3.4,3.54l0.08,2.6l-1.95,3.42l-0.21,3.9l-1.1,5.06l-3.71,4.54l-0.87,2.21l-8.29,8.89l-3.19,1.7l-1.32,0.03l-1.45,-1.36l-0.49,-0.04l-2.27,1.5l0.41,-3.65l-0.59,-2.47l1.75,-0.89l2.91,0.53l0.42,-0.2l1.68,-3.03l0.87,-3.46l0.97,-1.18l1.32,-2.88l-0.45,-0.56l-4.14,0.95l-2.19,1.25l-3.41,-0.0l-1.06,-2.93l-2.97,-2.3l-4.28,-1.06l-1.75,-5.07l-2.66,-5.01l-2.29,-1.29l-3.75,-1.01l-3.44,0.08l-3.18,0.62l-2.24,1.77l0.05,0.66l1.18,0.69l0.02,1.43l-1.33,1.05l-2.26,3.51l-0.04,1.43l-3.16,1.84l-2.82,-1.16l-3.01,0.23l-1.35,-1.07l-1.5,-0.35l-3.9,2.31l-3.22,0.52l-2.27,0.79l-3.05,-0.51l-2.21,0.03l-1.48,-1.6l-2.6,-1.63l-2.63,-0.43l-5.46,1.01l-3.23,-1.25l-0.72,-2.57l-5.2,-1.24l-2.75,-1.36l-0.5,0.12l-2.59,3.45l0.84,2.1l-2.06,1.93l-3.41,-0.77l-2.42,-0.12l-1.83,-1.54l-2.53,-0.05l-2.42,-0.98l-3.86,1.57l-4.72,2.78l-3.3,0.75l-1.55,-1.92l-3.0,0.41l-1.11,-1.33l-1.62,-0.59l-1.31,-1.94l-1.38,-0.6l-3.7,0.79l-3.31,-1.83l-0.51,0.11l-0.99,1.29l-5.29,-8.05l-2.96,-2.48l0.65,-0.77l0.01,-0.51l-0.5,-0.11l-6.2,3.21l-1.84,0.15l0.15,-1.39l-0.26,-0.42l-3.22,-1.17l-2.46,0.7l-0.69,-3.16l-0.32,-0.31l-4.5,-0.75l-2.47,1.47l-6.19,1.27l-1.29,0.86l-9.51,1.3l-1.15,1.17l-0.03,0.53l1.47,1.9l-1.89,0.69l-0.22,0.56l0.31,0.6l-2.11,1.44l0.03,0.68l3.75,2.12l-0.39,0.98l-3.23,-0.13l-0.86,0.86l-3.09,-1.59l-3.97,0.07l-2.66,1.35l-8.32,-3.56l-4.07,0.06l-5.39,3.68l-0.39,2.0l-2.03,-1.5l-0.59,0.13l-2.0,3.59l0.57,0.93l-1.28,2.16l0.06,0.48l2.13,2.17l1.95,0.04l1.37,1.82l-0.23,1.46l0.25,0.43l0.83,0.33l-0.8,1.31l-2.49,0.62l-2.49,3.2l0.0,0.49l2.17,2.78l-0.15,2.18l2.5,3.24l-1.58,1.59l-0.7,-0.13l-1.63,-1.72l-2.29,-0.84l-0.94,-1.31l-2.34,-0.63l-1.48,0.4l-0.43,-0.47l-3.51,-1.48l-5.76,-1.01l-0.45,0.19l-2.89,-2.34l-2.9,-1.2l-1.53,-1.29l1.29,-0.43l2.08,-2.61l-0.05,-0.55l-0.89,-0.79l3.05,-1.06l0.27,-0.42l-0.07,-0.69l-0.49,-0.35l-1.73,0.39l0.04,-0.68l1.04,-0.72l2.66,-0.48l0.4,-1.32l-0.5,-1.6l0.92,-1.54l0.03,-1.17l-0.29,-0.37l-3.69,-1.06l-1.41,0.02l-1.42,-1.41l-2.19,0.38l-2.77,-1.01l-0.03,-0.59l-0.89,-1.43l-2.0,-0.32l-0.11,-0.54l0.49,-0.53l0.01,-0.53l-1.6,-1.9l-3.58,0.02l-0.88,0.73l-0.46,-0.07l-1.0,-2.79l2.22,-0.02l0.97,-0.74l0.07,-0.57l-0.9,-1.04l-1.35,-0.48l-0.11,-0.7l-0.95,-0.58l-1.38,-1.99l0.46,-0.98l-0.51,-1.96l-2.45,-0.84l-1.21,0.3l-0.46,-0.76l-2.46,-0.83l-0.72,-1.87l-0.21,-1.69l-0.99,-0.85l0.85,-1.17l-0.7,-3.21l1.66,-1.97l-0.16,-0.79ZM749.2,170.72l-0.6,0.4l-0.13,0.16l-0.01,-0.51l0.74,-0.05ZM871.88,65.81l2.17,-0.13l3.19,1.16l-2.39,1.09l-5.63,0.48l-0.26,-0.84l2.92,-1.76ZM797.39,48.49l-2.0,1.36l-3.8,-0.42l-4.25,-1.8l0.35,-0.97l9.69,1.83ZM783.67,46.12l-1.63,3.09l-8.98,-0.13l-4.09,1.14l-4.54,-2.97l1.16,-3.01l3.05,-0.89l6.5,0.22l8.54,2.56ZM778.2,134.98l-0.56,-0.9l0.27,-0.12l0.29,1.01ZM778.34,135.48l0.94,3.53l-0.05,3.38l1.05,3.39l2.18,5.0l-2.89,-0.83l-0.49,0.26l-1.54,4.65l2.42,3.5l-0.04,1.13l-1.24,-1.24l-0.61,0.06l-1.09,1.61l-0.28,-1.61l0.27,-3.1l-0.28,-3.4l0.58,-2.47l0.11,-4.39l-1.46,-3.36l0.21,-4.32l2.15,-1.46l0.07,-0.34ZM771.95,56.61l1.76,-1.42l2.89,-0.42l3.28,1.71l0.14,0.6l-3.27,0.03l-4.81,-0.5ZM683.76,31.09l-13.01,1.93l4.03,-6.35l1.82,-0.56l1.73,0.34l5.99,2.98l-0.56,1.66ZM670.85,27.93l-5.08,0.64l-6.86,-1.57l-3.99,-2.05l-2.1,-4.16l-2.6,-0.87l5.72,-3.5l5.2,-1.28l4.69,2.85l5.59,5.4l-0.56,4.53ZM564.15,68.94l-0.64,0.17l-7.85,-0.57l-0.86,-2.04l-4.28,-1.17l-0.28,-1.94l2.27,-0.89l0.25,-0.39l-0.08,-2.38l4.81,-3.97l-0.15,-0.7l-1.47,-0.38l5.3,-3.81l0.15,-0.44l-0.58,-1.94l5.28,-2.51l8.21,-3.27l8.28,-0.96l4.35,-1.94l4.6,-0.64l1.36,1.61l-1.34,1.28l-16.43,4.94l-7.97,4.88l-7.74,9.63l0.66,4.14l4.16,3.27ZM548.81,18.48l-5.5,1.18l-0.58,1.02l-2.59,0.84l-2.13,-1.07l1.12,-1.42l-0.3,-0.65l-2.33,-0.07l1.68,-0.36l3.47,-0.06l0.42,1.29l0.66,0.16l1.38,-1.34l2.15,-0.88l2.94,1.01l-0.39,0.36ZM477.37,133.15l-4.08,0.05l-2.56,-0.32l0.33,-0.87l3.17,-1.03l3.24,0.96l-0.09,1.23Z",
            name: "Russia"
        },
        RW: {
            path: "M497.0,288.25l0.71,1.01l-0.11,1.09l-1.63,0.03l-1.04,1.39l-0.83,-0.11l0.51,-1.2l0.08,-1.34l0.42,-0.41l0.7,0.14l1.19,-0.61Z",
            name: "Rwanda"
        },
        RS: {
            path: "M469.4,163.99l0.42,-0.5l-0.01,-0.52l-1.15,-1.63l1.43,-0.62l1.33,0.12l1.17,1.06l0.46,1.13l1.34,0.64l0.35,1.35l1.46,0.9l0.76,-0.29l0.2,0.69l-0.48,0.78l0.22,1.12l1.05,1.22l-0.77,0.8l-0.37,1.52l-1.21,0.08l0.24,-0.64l-0.39,-0.54l-2.08,-1.64l-0.9,0.05l-0.48,0.94l-2.12,-1.37l0.53,-1.6l-1.11,-1.37l0.51,-1.1l-0.41,-0.57Z",
            name: "Serbia"
        },
        TL: {
            path: "M734.55,307.93l-0.1,-0.97l4.5,-0.86l-2.82,1.28l-1.59,0.55Z",
            name: "Timor-Leste"
        },
        TM: {
            path: "M553.03,173.76l-0.04,0.34l-0.09,-0.22l0.13,-0.12ZM555.87,172.66l0.45,-0.1l1.48,0.74l2.06,2.43l4.07,-0.18l0.38,-0.51l-0.32,-1.19l1.92,-0.94l1.91,-1.59l2.94,1.39l0.43,2.47l1.19,0.67l2.58,-0.13l0.62,0.4l1.32,3.12l4.54,3.44l2.67,1.45l3.06,1.14l-0.04,1.05l-1.33,-0.75l-0.59,0.19l-0.32,0.84l-2.2,0.81l-0.46,2.13l-1.21,0.74l-1.91,0.42l-0.73,1.33l-1.56,0.31l-2.22,-0.94l-0.2,-2.17l-0.38,-0.36l-1.73,-0.09l-2.76,-2.46l-2.14,-0.4l-2.84,-1.48l-1.78,-0.27l-1.24,0.53l-1.57,-0.08l-2.0,1.69l-1.7,0.43l-0.36,-1.58l0.36,-2.98l-0.22,-0.4l-1.65,-0.84l0.54,-1.69l-0.34,-0.52l-1.22,-0.13l0.36,-1.64l2.22,0.59l2.2,-0.95l0.12,-0.65l-1.77,-1.74l-0.66,-1.57Z",
            name: "Turkmenistan"
        },
        TJ: {
            path: "M597.75,178.82l-2.54,-0.44l-0.47,0.34l-0.24,1.7l0.43,0.45l2.64,-0.22l3.18,0.95l4.39,-0.41l0.56,2.37l0.52,0.29l0.67,-0.24l1.11,0.49l0.21,2.13l-3.76,-0.21l-1.8,1.32l-1.76,0.74l-0.61,-0.58l0.21,-2.23l-0.64,-0.49l-0.07,-0.93l-1.36,-0.66l-0.45,0.07l-1.08,1.01l-0.55,1.48l-1.31,-0.05l-0.95,1.16l-0.9,-0.35l-1.86,0.74l1.26,-2.83l-0.54,-2.17l-1.67,-0.82l0.33,-0.66l2.18,-0.04l1.19,-1.63l0.76,-1.79l2.43,-0.5l-0.26,1.0l0.73,1.05Z",
            name: "Tajikistan"
        },
        RO: {
            path: "M487.53,154.23l0.6,0.24l2.87,3.98l-0.17,2.69l0.45,1.42l1.32,0.81l1.35,-0.42l0.76,0.36l0.02,0.31l-0.83,0.45l-0.59,-0.22l-0.54,0.3l-0.62,3.3l-1.0,-0.22l-2.07,-1.13l-2.95,0.71l-1.25,0.76l-3.51,-0.15l-1.89,-0.47l-0.87,0.16l-0.82,-1.3l0.29,-0.26l-0.06,-0.64l-1.09,-0.34l-0.56,0.5l-1.05,-0.64l-0.39,-1.39l-1.36,-0.65l-0.35,-1.0l-0.83,-0.75l1.54,-0.54l2.66,-4.21l2.4,-1.24l2.96,0.34l1.48,0.73l0.79,-0.45l1.78,-0.3l0.75,-0.74l0.79,0.0Z",
            name: "Romania"
        },
        GW: {
            path: "M386.23,253.6l-0.29,0.84l0.15,0.6l-2.21,0.59l-0.86,0.96l-1.04,-0.83l-1.09,-0.23l-0.54,-1.06l-0.66,-0.49l2.41,-0.48l4.13,0.1Z",
            name: "Guinea-Bissau"
        },
        GT: {
            path: "M195.08,249.77l-2.48,-0.37l-1.03,-0.45l-1.14,-0.89l0.3,-0.99l-0.24,-0.68l0.96,-1.66l2.98,-0.01l0.4,-0.37l-0.19,-1.28l-1.67,-1.4l0.51,-0.4l0.0,-1.05l3.85,0.02l-0.21,4.53l0.4,0.43l1.46,0.38l-1.48,0.98l-0.35,0.7l0.12,0.57l-2.2,1.96Z",
            name: "Guatemala"
        },
        GR: {
            path: "M487.07,174.59l-0.59,1.43l-0.37,0.21l-2.84,-0.35l-3.03,0.77l-0.18,0.68l1.28,1.23l-0.61,0.23l-1.14,0.0l-1.2,-1.39l-0.63,0.03l-0.53,1.01l0.56,1.76l1.03,1.19l-0.56,0.38l-0.05,0.62l2.52,2.12l0.02,0.87l-1.78,-0.59l-0.48,0.56l0.5,1.0l-1.07,0.2l-0.3,0.53l0.75,2.01l-0.98,0.02l-1.84,-1.12l-1.37,-4.2l-2.21,-2.95l-0.11,-0.56l1.04,-1.28l0.2,-0.95l0.85,-0.66l0.03,-0.46l1.32,-0.21l1.01,-0.64l1.22,0.05l0.65,-0.56l2.26,-0.0l1.82,-0.75l1.85,1.0l2.28,-0.28l0.35,-0.39l0.01,-0.77l0.34,0.22ZM480.49,192.16l0.58,0.4l-0.68,-0.12l0.11,-0.28ZM482.52,192.82l2.51,0.06l0.24,0.32l-1.99,0.13l-0.77,-0.51Z",
            name: "Greece"
        },
        GQ: {
            path: "M448.79,279.62l0.02,2.22l-4.09,0.0l0.69,-2.27l3.38,0.05Z",
            name: "Eq. Guinea"
        },
        GY: {
            path: "M277.42,270.07l-0.32,1.83l-1.32,0.57l-0.23,0.46l-0.28,2.0l1.11,1.82l0.83,0.19l0.32,1.25l1.13,1.62l-1.21,-0.19l-1.08,0.71l-1.77,0.5l-0.44,0.46l-0.86,-0.09l-1.32,-1.01l-0.77,-2.27l0.36,-1.9l0.68,-1.23l-0.57,-1.17l-0.74,-0.43l0.12,-1.16l-0.9,-0.69l-1.1,0.09l-1.31,-1.48l0.53,-0.72l-0.04,-0.84l1.99,-0.86l0.05,-0.59l-0.71,-0.78l0.14,-0.57l1.66,-1.24l1.36,0.77l1.41,1.49l0.06,1.15l0.37,0.38l0.8,0.05l2.06,1.86Z",
            name: "Guyana"
        },
        GE: {
            path: "M521.71,168.93l5.29,0.89l4.07,2.01l1.41,-0.44l2.07,0.56l0.68,1.1l1.07,0.55l-0.12,0.59l0.98,1.29l-1.01,-0.13l-1.81,-0.83l-0.94,0.47l-3.23,0.43l-2.29,-1.39l-2.33,0.05l0.21,-0.97l-0.76,-2.26l-1.45,-1.12l-1.43,-0.39l-0.41,-0.42Z",
            name: "Georgia"
        },
        GB: {
            path: "M412.61,118.72l-2.19,3.22l-0.0,0.45l5.13,-0.3l-0.53,2.37l-2.2,3.12l0.29,0.63l2.37,0.21l2.33,4.3l1.76,0.69l2.2,5.12l2.94,0.77l-0.23,1.62l-1.15,0.88l-0.1,0.52l0.82,1.42l-1.86,1.43l-3.3,-0.02l-4.12,0.87l-1.04,-0.58l-0.47,0.06l-1.51,1.41l-2.12,-0.34l-1.86,1.18l-0.6,-0.29l3.19,-3.0l2.16,-0.69l0.28,-0.41l-0.34,-0.36l-3.73,-0.53l-0.4,-0.76l2.2,-0.87l0.17,-0.61l-1.26,-1.67l0.36,-1.7l3.38,0.28l0.43,-0.33l0.37,-1.99l-1.79,-2.49l-3.11,-0.72l-0.38,-0.59l0.79,-1.35l-0.04,-0.46l-0.82,-0.97l-0.61,0.01l-0.68,0.84l-0.1,-2.34l-1.23,-1.88l0.85,-3.47l1.77,-2.68l1.85,0.26l2.17,-0.22ZM406.26,132.86l-1.01,1.77l-1.57,-0.59l-1.16,0.01l0.37,-1.54l-0.39,-1.39l1.45,-0.1l2.3,1.84Z",
            name: "United Kingdom"
        },
        GA: {
            path: "M453.24,279.52l-0.08,0.98l0.7,1.29l2.36,0.24l-0.98,2.63l1.18,1.79l0.25,1.78l-0.29,1.52l-0.6,0.93l-1.84,-0.09l-1.23,-1.11l-0.66,0.23l-0.15,0.84l-1.42,0.26l-1.02,0.7l-0.11,0.52l0.77,1.35l-1.34,0.97l-3.94,-4.3l-1.44,-2.45l0.06,-0.6l0.54,-0.81l1.05,-3.46l4.17,-0.07l0.4,-0.4l-0.02,-2.66l2.39,0.21l1.25,-0.27Z",
            name: "Gabon"
        },
        GN: {
            path: "M391.8,254.11l0.47,0.8l1.11,-0.32l0.98,0.7l1.07,0.2l2.26,-1.22l0.64,0.44l1.13,1.56l-0.48,1.4l0.8,0.3l-0.08,0.48l0.46,0.68l-0.35,1.36l1.05,2.61l-1.0,0.69l0.03,1.41l-0.72,-0.06l-1.08,1.0l-0.24,-0.27l0.07,-1.11l-1.05,-1.54l-1.79,0.21l-0.35,-2.01l-1.6,-2.18l-2.0,-0.0l-1.31,0.54l-1.95,2.18l-1.86,-2.19l-1.2,-0.78l-0.3,-1.11l-0.8,-0.85l0.65,-0.72l0.81,-0.03l1.64,-0.8l0.23,-1.87l2.67,0.64l0.89,-0.3l1.21,0.15Z",
            name: "Guinea"
        },
        GM: {
            path: "M379.31,251.39l0.1,-0.35l2.43,-0.07l0.74,-0.61l0.51,-0.03l0.77,0.49l-1.03,-0.3l-1.87,0.9l-1.65,-0.04ZM384.03,250.91l0.91,0.05l0.75,-0.24l-0.59,0.31l-1.08,-0.13Z",
            name: "Gambia"
        },
        GL: {
            path: "M353.02,1.2l14.69,4.67l-3.68,1.89l-22.97,0.86l-0.36,0.27l0.12,0.43l1.55,1.18l8.79,-0.66l7.48,2.07l4.86,-1.77l1.66,1.73l-2.53,3.19l-0.01,0.48l0.46,0.15l6.35,-2.2l12.06,-2.31l7.24,1.13l1.09,1.99l-9.79,4.01l-1.44,1.32l-7.87,0.98l-0.35,0.41l0.38,0.38l5.07,0.24l-2.53,3.58l-2.07,3.81l0.08,6.05l2.57,3.11l-3.22,0.2l-4.12,1.66l-0.05,0.72l4.45,2.65l0.51,3.75l-2.3,0.4l-0.25,0.64l2.79,3.69l-4.82,0.31l-0.36,0.29l0.16,0.44l2.62,1.8l-0.59,1.22l-3.3,0.7l-3.45,0.01l-0.29,0.68l3.03,3.12l0.02,1.34l-4.4,-1.73l-1.72,1.35l0.15,0.66l3.31,1.15l3.13,2.71l0.81,3.16l-3.85,0.75l-4.89,-4.26l-0.47,-0.03l-0.17,0.44l0.79,2.86l-2.71,2.21l-0.13,0.44l0.37,0.27l8.73,0.34l-12.32,6.64l-7.24,1.48l-2.94,0.08l-2.69,1.75l-3.43,4.41l-5.24,2.84l-1.73,0.18l-7.12,2.1l-2.15,2.52l-0.13,2.99l-1.19,2.45l-4.01,3.09l-0.14,0.44l0.97,2.9l-2.28,6.48l-3.1,0.2l-3.83,-3.07l-4.86,-0.02l-2.25,-1.93l-1.7,-3.79l-4.3,-4.84l-1.21,-2.49l-0.44,-3.8l-3.32,-3.63l0.84,-2.86l-1.56,-1.7l2.28,-4.6l3.83,-1.74l1.03,-1.96l0.52,-3.47l-0.59,-0.41l-4.17,2.21l-2.07,0.58l-2.72,-1.28l-0.15,-2.71l0.85,-2.09l2.01,-0.06l5.06,1.2l0.46,-0.23l-0.14,-0.49l-6.54,-4.47l-2.67,0.55l-1.58,-0.86l2.56,-4.01l-0.03,-0.48l-1.5,-1.74l-4.98,-8.5l-3.13,-1.96l0.03,-1.88l-0.24,-0.37l-6.85,-3.02l-5.36,-0.38l-12.7,0.58l-2.78,-1.57l-3.66,-2.77l5.73,-1.45l5.0,-0.28l0.38,-0.38l-0.35,-0.41l-10.67,-1.38l-5.3,-2.06l0.25,-1.54l18.41,-5.26l1.22,-2.27l-0.25,-0.55l-6.14,-1.86l1.68,-1.77l8.55,-4.03l3.59,-0.63l0.3,-0.54l-0.88,-2.27l5.47,-1.47l7.65,-0.95l7.55,-0.05l3.04,1.85l6.48,-3.27l5.81,2.22l3.56,0.5l5.16,1.94l0.5,-0.21l-0.17,-0.52l-5.71,-3.13l0.28,-2.13l8.12,-3.6l8.7,0.28l3.35,-2.34l8.71,-0.6l19.93,0.8Z",
            name: "Greenland"
        },
        GH: {
            path: "M420.53,257.51l-0.01,0.72l0.96,1.2l0.24,3.73l0.59,0.95l-0.51,2.1l0.19,1.41l1.02,2.21l-6.97,2.84l-1.8,-0.57l0.04,-0.89l-1.02,-2.04l0.61,-2.65l1.07,-2.32l-0.96,-6.47l5.01,0.07l0.94,-0.39l0.61,0.11Z",
            name: "Ghana"
        },
        OM: {
            path: "M568.09,230.93l-0.91,1.67l-1.22,0.04l-0.6,0.76l-0.41,1.51l0.27,1.58l-1.16,0.05l-1.56,0.97l-0.76,1.74l-1.62,0.05l-0.98,0.65l-0.17,1.15l-0.89,0.52l-1.49,-0.18l-2.4,0.94l-2.47,-5.4l7.35,-2.71l1.67,-5.23l-1.12,-2.09l0.05,-0.83l0.67,-1.0l0.07,-1.05l0.9,-0.42l-0.05,-2.07l0.7,-0.01l1.0,1.62l1.51,1.08l3.3,0.84l1.73,2.29l0.81,0.37l-1.23,2.35l-0.99,0.79Z",
            name: "Oman"
        },
        TN: {
            path: "M448.1,188.24l-1.0,1.27l-0.02,1.32l0.84,0.88l-0.28,2.09l-1.53,1.32l-0.12,0.42l0.48,1.54l1.42,0.32l0.53,1.11l0.9,0.52l-0.11,1.67l-3.54,2.64l-0.1,2.38l-0.58,0.3l-0.96,-4.45l-1.54,-1.25l-0.16,-0.78l-1.92,-1.56l-0.18,-1.76l1.51,-1.62l0.59,-2.34l-0.38,-2.78l0.42,-1.21l2.45,-1.05l1.29,0.26l-0.06,1.11l0.58,0.38l1.47,-0.73Z",
            name: "Tunisia"
        },
        JO: {
            path: "M518.64,201.38l-5.14,1.56l-0.19,0.65l2.16,2.39l-0.89,1.14l-1.71,0.34l-1.71,1.8l-2.34,-0.37l1.21,-4.32l0.56,-4.07l2.8,0.94l4.46,-2.71l0.79,2.66Z",
            name: "Jordan"
        },
        HR: {
            path: "M455.59,162.84l1.09,0.07l-0.82,0.94l-0.27,-1.01ZM456.96,162.92l0.62,-0.41l1.73,0.45l0.42,-0.4l-0.01,-0.59l0.86,-0.52l0.2,-1.05l1.63,-0.68l2.57,1.68l2.07,0.6l0.87,-0.31l1.05,1.57l-0.52,0.63l-1.05,-0.56l-1.68,0.04l-2.1,-0.5l-1.29,0.06l-0.57,0.49l-0.59,-0.47l-0.62,0.16l-0.46,1.7l1.79,2.42l2.79,2.75l-1.18,-0.87l-2.21,-0.87l-1.67,-1.78l0.13,-0.63l-1.05,-1.19l-0.32,-1.27l-1.42,-0.43Z",
            name: "Croatia"
        },
        HT: {
            path: "M237.05,238.38l-1.16,0.43l-0.91,-0.55l0.05,-0.2l2.02,0.31ZM237.53,238.43l1.06,0.12l-0.05,0.01l-1.01,-0.12ZM239.25,238.45l0.79,-0.51l0.06,-0.62l-1.02,-1.0l0.02,-0.82l-0.3,-0.4l-0.93,-0.32l3.16,0.45l0.02,1.84l-0.48,0.34l-0.08,0.58l0.54,0.72l-1.78,-0.26Z",
            name: "Haiti"
        },
        HU: {
            path: "M462.08,157.89l0.65,-1.59l-0.09,-0.44l0.64,-0.0l0.39,-0.34l0.1,-0.69l1.75,0.87l2.32,-0.37l0.43,-0.66l3.49,-0.78l0.69,-0.78l0.57,-0.14l2.57,0.93l0.67,-0.23l1.03,0.65l0.08,0.37l-1.42,0.71l-2.59,4.14l-1.8,0.53l-1.68,-0.1l-2.74,1.23l-1.85,-0.54l-2.54,-1.66l-0.66,-1.1Z",
            name: "Hungary"
        },
        HN: {
            path: "M199.6,249.52l-1.7,-1.21l0.06,-0.94l3.04,-2.14l2.37,0.28l1.27,-0.09l1.1,-0.52l1.3,0.28l1.14,-0.25l1.38,0.37l2.23,1.37l-2.36,0.93l-1.23,-0.39l-0.88,1.3l-1.28,0.99l-0.98,-0.22l-0.42,0.52l-0.96,0.05l-0.36,0.41l0.04,0.88l-0.52,0.6l-0.3,0.04l-0.3,-0.55l-0.66,-0.31l0.11,-0.67l-0.48,-0.65l-0.87,-0.26l-0.73,0.2Z",
            name: "Honduras"
        },
        PR: {
            path: "M256.17,238.73l-0.26,0.27l-2.83,0.05l-0.07,-0.55l1.95,-0.1l1.22,0.33Z",
            name: "Puerto Rico"
        },
        PS: {
            path: "M509.21,203.07l0.1,-0.06l-0.02,0.03l-0.09,0.03ZM509.36,202.91l-0.02,-0.63l-0.33,-0.16l0.31,-1.09l0.24,0.1l-0.2,1.78Z",
            name: "Palestine"
        },
        PT: {
            path: "M401.84,187.38l-0.64,0.47l-1.13,-0.35l-0.91,0.17l0.28,-1.78l-0.24,-1.78l-1.25,-0.56l-0.45,-0.84l0.17,-1.66l1.01,-1.18l0.69,-2.92l-0.04,-1.39l-0.59,-1.9l1.3,-0.85l0.84,1.35l3.1,-0.3l0.46,0.99l-1.05,0.94l-0.03,2.16l-0.41,0.57l-0.08,1.1l-0.79,0.18l-0.26,0.59l0.91,1.6l-0.63,1.75l0.76,1.09l-1.1,1.52l0.07,1.05Z",
            name: "Portugal"
        },
        PY: {
            path: "M274.9,336.12l0.74,1.52l-0.16,3.45l0.32,0.41l2.64,0.5l1.11,-0.47l1.4,0.59l0.36,0.6l0.53,3.42l1.27,0.4l0.98,-0.38l0.51,0.27l-0.0,1.18l-1.21,5.32l-2.09,1.9l-1.8,0.4l-4.71,-0.98l2.2,-3.63l-0.32,-1.5l-2.78,-1.28l-3.03,-1.94l-2.07,-0.44l-4.34,-4.06l0.91,-2.9l0.08,-1.42l1.07,-2.04l4.13,-0.72l2.18,0.03l2.05,1.17l0.03,0.59Z",
            name: "Paraguay"
        },
        PA: {
            path: "M213.8,263.68l0.26,-1.52l-0.36,-0.26l-0.01,-0.49l0.44,-0.1l0.93,1.4l1.26,0.03l0.77,0.49l1.38,-0.23l2.51,-1.11l0.86,-0.72l3.45,0.85l1.4,1.18l0.41,1.74l-0.21,0.34l-0.53,-0.12l-0.47,0.29l-0.16,0.6l-0.68,-1.28l0.45,-0.49l-0.19,-0.66l-0.47,-0.13l-0.54,-0.84l-1.5,-0.75l-1.1,0.16l-0.75,0.99l-1.62,0.84l-0.18,0.96l0.85,0.97l-0.58,0.45l-0.69,0.08l-0.34,-1.18l-1.27,0.03l-0.71,-1.05l-2.59,-0.46Z",
            name: "Panama"
        },
        PG: {
            path: "M808.58,298.86l2.54,2.56l-0.13,0.26l-0.33,0.12l-0.87,-0.78l-1.22,-2.16ZM801.41,293.04l0.5,0.29l0.26,0.27l-0.49,-0.35l-0.27,-0.21ZM803.17,294.58l0.59,0.5l0.08,1.06l-0.29,-0.91l-0.38,-0.65ZM796.68,298.41l0.52,0.75l1.43,-0.19l2.27,-1.81l-0.01,-1.43l1.12,0.16l-0.04,1.1l-0.7,1.28l-1.12,0.18l-0.62,0.79l-2.46,1.11l-1.17,-0.0l-3.08,-1.25l3.41,0.0l0.45,-0.68ZM789.15,303.55l2.31,1.8l1.59,2.61l1.34,0.13l-0.06,0.66l0.31,0.43l1.06,0.24l0.06,0.65l2.25,1.05l-1.22,0.13l-0.72,-0.63l-4.56,-0.65l-3.22,-2.87l-1.49,-2.34l-3.27,-1.1l-2.38,0.72l-1.59,0.86l-0.2,0.42l0.27,1.55l-1.55,0.68l-1.36,-0.4l-2.21,-0.09l-0.08,-15.41l8.39,2.93l2.95,2.4l0.6,1.64l4.02,1.49l0.31,0.68l-1.76,0.21l-0.33,0.52l0.55,1.68Z",
            name: "Papua New Guinea"
        },
        PE: {
            path: "M244.96,295.21l-1.26,-0.07l-0.57,0.42l-1.93,0.45l-2.98,1.75l-0.36,1.36l-0.58,0.8l0.12,1.37l-1.24,0.59l-0.22,1.22l-0.62,0.84l1.04,2.27l1.28,1.44l-0.41,0.84l0.32,0.57l1.48,0.13l1.16,1.37l2.21,0.07l1.63,-1.08l-0.13,3.02l0.3,0.4l1.14,0.29l1.31,-0.34l1.9,3.59l-0.48,0.85l-0.17,3.85l-0.94,1.59l0.35,0.75l-0.47,1.07l0.98,1.97l-2.1,3.82l-0.98,0.5l-2.17,-1.28l-0.39,-1.16l-4.95,-2.58l-4.46,-2.79l-1.84,-1.51l-0.91,-1.84l0.3,-0.96l-2.11,-3.33l-4.82,-9.68l-1.04,-1.2l-0.87,-1.94l-3.4,-2.48l0.58,-1.18l-1.13,-2.23l0.66,-1.49l1.45,-1.15l-0.6,0.98l0.07,0.92l0.47,0.36l1.74,0.03l0.97,1.17l0.54,0.07l1.42,-1.03l0.6,-1.84l1.42,-2.02l3.04,-1.04l2.73,-2.62l0.86,-1.74l-0.1,-1.87l1.44,1.02l0.9,1.25l1.06,0.59l1.7,2.73l1.86,0.31l1.45,-0.61l0.96,0.39l1.36,-0.19l1.45,0.89l-1.4,2.21l0.31,0.61l0.59,0.05l0.47,0.5Z",
            name: "Peru"
        },
        PK: {
            path: "M615.09,192.34l-1.83,1.81l-2.6,0.39l-3.73,-0.68l-1.58,1.33l-0.09,0.42l1.77,4.39l1.7,1.23l-1.69,1.27l-0.12,2.14l-2.33,2.64l-1.6,2.8l-2.46,2.67l-3.03,-0.07l-2.76,2.83l0.05,0.6l1.5,1.11l0.26,1.9l1.44,1.5l0.37,1.68l-5.01,-0.01l-1.78,1.7l-1.42,-0.52l-0.76,-1.87l-2.27,-2.15l-11.61,0.86l0.71,-2.34l3.43,-1.32l0.25,-0.44l-0.21,-1.24l-1.2,-0.65l-0.28,-2.46l-2.29,-1.14l-1.28,-1.94l2.82,0.94l2.62,-0.38l1.42,0.33l0.76,-0.56l1.71,0.19l3.25,-1.14l0.27,-0.36l0.08,-2.19l1.18,-1.32l1.68,0.0l0.58,-0.82l1.6,-0.3l1.19,0.16l0.98,-0.78l0.02,-1.88l0.93,-1.47l1.48,-0.66l0.19,-0.55l-0.66,-1.25l2.04,-0.11l0.69,-1.01l-0.02,-1.16l1.11,-1.06l-0.17,-1.78l-0.49,-1.03l1.15,-0.98l5.42,-0.91l2.6,-0.82l1.6,1.16l0.97,2.34l3.45,0.97Z",
            name: "Pakistan"
        },
        PH: {
            path: "M737.01,263.84l0.39,2.97l-0.44,1.18l-0.55,-1.53l-0.67,-0.14l-1.17,1.28l0.65,2.09l-0.42,0.69l-2.48,-1.23l-0.57,-1.49l0.65,-1.03l-0.1,-0.54l-1.59,-1.19l-0.56,0.08l-0.65,0.87l-1.23,0.0l-1.58,0.97l0.83,-1.8l2.56,-1.42l0.65,0.84l0.45,0.13l1.9,-0.69l0.56,-1.11l1.5,-0.06l0.38,-0.43l-0.09,-1.19l1.21,0.71l0.36,2.02ZM733.59,256.58l0.05,0.75l0.08,0.26l-0.8,-0.42l-0.18,-0.71l0.85,0.12ZM734.08,256.1l-0.12,-1.12l-1.0,-1.27l1.36,0.03l0.53,0.73l0.51,2.04l-1.27,-0.4ZM733.76,257.68l0.38,0.98l-0.32,0.15l-0.07,-1.13ZM724.65,238.43l1.46,0.7l0.72,-0.31l-0.32,1.17l0.79,1.71l-0.57,1.84l-1.53,1.04l-0.39,2.25l0.56,2.04l1.63,0.57l1.16,-0.27l2.71,1.23l-0.19,1.08l0.76,0.84l-0.08,0.36l-1.4,-0.9l-0.88,-1.27l-0.66,0.0l-0.38,0.55l-1.6,-1.31l-2.15,0.36l-0.87,-0.39l0.07,-0.61l0.66,-0.55l-0.01,-0.62l-0.75,-0.59l-0.72,0.44l-0.74,-0.87l-0.39,-2.49l0.32,0.27l0.66,-0.28l0.26,-3.97l0.7,-2.02l1.14,0.0ZM731.03,258.87l-0.88,0.85l-1.19,1.94l-1.05,-1.19l0.93,-1.1l0.32,-1.47l0.52,-0.06l-0.27,1.15l0.22,0.45l0.49,-0.12l1.0,-1.32l-0.08,0.85ZM726.83,255.78l0.83,0.38l1.17,-0.0l-0.02,0.48l-2.0,1.4l0.03,-2.26ZM724.81,252.09l-0.38,1.27l-1.42,-1.95l1.2,0.05l0.6,0.63ZM716.55,261.82l1.1,-0.95l0.03,-0.03l-0.28,0.36l-0.85,0.61ZM719.22,259.06l0.04,-0.06l0.8,-1.53l0.16,0.75l-1.0,0.84Z",
            name: "Philippines"
        },
        PL: {
            path: "M468.44,149.42l-1.11,-1.54l-1.86,-0.33l-0.48,-1.05l-1.72,-0.37l-0.65,0.69l-0.72,-0.36l0.11,-0.61l-0.33,-0.46l-1.75,-0.27l-1.04,-0.93l-0.94,-1.94l0.16,-1.22l-0.62,-1.8l-0.78,-1.07l0.57,-1.04l-0.48,-1.43l1.41,-0.83l6.91,-2.71l2.14,0.5l0.52,0.91l5.51,0.44l4.55,-0.05l1.07,0.31l0.48,0.84l0.15,1.58l0.65,1.2l-0.01,0.99l-1.27,0.58l-0.19,0.54l0.73,1.48l0.08,1.55l1.2,2.76l-0.17,0.58l-1.23,0.44l-2.27,2.72l0.18,0.95l-1.97,-1.03l-1.98,0.4l-1.36,-0.28l-1.24,0.58l-1.07,-0.97l-1.16,0.24Z",
            name: "Poland"
        },
        ZM: {
            path: "M481.47,313.3l0.39,0.31l2.52,0.14l0.99,1.17l2.01,0.35l1.4,-0.64l0.69,1.17l1.78,0.33l1.84,2.35l2.23,0.18l0.4,-0.43l-0.21,-2.74l-0.62,-0.3l-0.48,0.32l-1.98,-1.17l0.72,-5.29l-0.51,-1.18l0.57,-1.3l3.68,-0.62l0.26,0.63l1.21,0.63l0.9,-0.22l2.16,0.67l1.33,0.71l1.07,1.02l0.56,1.87l-0.88,2.7l0.43,2.09l-0.73,0.87l-0.76,2.37l0.59,0.68l-6.6,1.83l-0.29,0.44l0.19,1.45l-1.68,0.35l-1.43,1.02l-0.38,0.87l-0.87,0.26l-3.48,3.69l-4.16,-0.53l-1.52,-1.0l-1.77,-0.13l-1.83,0.52l-3.04,-3.4l0.11,-7.59l4.82,0.03l0.39,-0.49l-0.18,-0.76l0.33,-0.83l-0.4,-1.36l0.24,-1.05Z",
            name: "Zambia"
        },
        EH: {
            path: "M384.42,230.28l0.25,-0.79l1.06,-1.29l0.8,-3.51l3.38,-2.78l0.7,-1.81l0.06,4.84l-1.98,0.2l-0.94,1.59l0.39,3.56l-3.7,-0.01ZM392.01,218.1l0.7,-1.8l1.77,-0.24l2.09,0.34l0.95,-0.62l1.28,-0.07l-0.0,2.51l-6.79,-0.12Z",
            name: "W. Sahara"
        },
        EE: {
            path: "M485.71,115.04l2.64,0.6l2.56,0.11l-1.6,1.91l0.61,3.54l-0.81,0.87l-1.78,-0.01l-3.22,-1.76l-1.8,0.45l0.21,-1.53l-0.58,-0.41l-0.69,0.34l-1.26,-1.03l-0.17,-1.63l2.83,-0.92l3.05,-0.52Z",
            name: "Estonia"
        },
        EG: {
            path: "M492.06,205.03l1.46,0.42l2.95,-1.64l2.04,-0.21l1.53,0.3l0.59,1.19l0.69,0.04l0.41,-0.64l1.81,0.58l1.95,0.16l1.04,-0.51l1.42,4.08l-2.03,4.54l-1.66,-1.77l-1.76,-3.85l-0.64,-0.12l-0.36,0.67l1.04,2.88l3.44,6.95l1.78,3.04l2.03,2.65l-0.36,0.53l0.23,2.01l2.7,2.19l-28.41,0.0l0.0,-18.96l-0.73,-2.2l0.59,-1.56l-0.32,-1.26l0.68,-0.99l3.06,-0.04l4.82,1.52Z",
            name: "Egypt"
        },
        ZA: {
            path: "M467.14,373.21l-0.13,-1.96l-0.68,-1.56l0.7,-0.68l-0.13,-2.33l-4.56,-8.19l0.77,-0.86l0.6,0.45l0.69,1.31l2.83,0.72l1.5,-0.26l2.24,-1.39l0.19,-9.55l1.35,2.3l-0.21,1.5l0.61,1.2l0.4,0.19l1.79,-0.27l2.6,-2.07l0.69,-1.32l0.96,-0.48l2.19,1.04l2.04,0.13l1.77,-0.65l0.85,-2.12l1.38,-0.33l1.59,-2.76l2.15,-1.89l3.41,-1.87l2.0,0.45l1.02,-0.28l0.99,0.2l1.75,5.29l-0.38,3.25l-0.81,-0.23l-1.0,0.46l-0.87,1.68l-0.05,1.16l1.97,1.84l1.47,-0.29l0.69,-1.18l1.09,0.01l-0.76,3.69l-0.58,1.09l-2.2,1.79l-3.17,4.76l-2.8,2.83l-3.57,2.88l-2.53,1.05l-1.22,0.14l-0.51,0.7l-1.18,-0.32l-1.39,0.5l-2.59,-0.52l-1.61,0.33l-1.18,-0.11l-2.55,1.1l-2.1,0.44l-1.6,1.07l-0.85,0.05l-0.93,-0.89l-0.93,-0.15l-0.97,-1.13l-0.25,0.05ZM491.45,364.19l0.62,-0.93l1.48,-0.59l1.18,-2.19l-0.07,-0.49l-1.99,-1.69l-1.66,0.56l-1.43,1.14l-1.34,1.73l0.02,0.51l1.88,2.11l1.31,-0.16Z",
            name: "South Africa"
        },
        EC: {
            path: "M231.86,285.53l0.29,1.59l-0.69,1.45l-2.61,2.51l-3.13,1.11l-1.53,2.18l-0.49,1.68l-1.0,0.73l-1.02,-1.11l-1.78,-0.16l0.67,-1.15l-0.24,-0.86l1.25,-2.13l-0.54,-1.09l-0.67,-0.08l-0.72,0.87l-0.87,-0.64l0.35,-0.69l-0.36,-1.96l0.81,-0.51l0.45,-1.51l0.92,-1.57l-0.07,-0.97l2.65,-1.33l2.75,1.35l0.77,1.05l2.12,0.35l0.76,-0.32l1.96,1.21Z",
            name: "Ecuador"
        },
        IT: {
            path: "M451.59,158.63l3.48,0.94l-0.21,1.17l0.3,0.83l-1.49,-0.24l-2.04,1.1l-0.21,0.39l0.13,1.45l-0.25,1.12l0.82,1.57l2.39,1.63l1.31,2.54l2.79,2.43l2.05,0.08l0.21,0.23l-0.39,0.33l0.09,0.67l4.05,1.97l2.17,1.76l-0.16,0.36l-1.17,-1.08l-2.18,-0.49l-0.44,0.2l-1.05,1.91l0.14,0.54l1.57,0.95l-0.19,0.98l-1.06,0.33l-1.25,2.34l-0.37,0.08l0.0,-0.33l1.0,-2.45l-1.73,-3.17l-1.12,-0.51l-0.88,-1.33l-1.51,-0.51l-1.27,-1.25l-1.75,-0.18l-4.12,-3.21l-1.62,-1.65l-1.03,-3.19l-3.53,-1.36l-1.3,0.51l-1.69,1.41l0.16,-0.72l-0.28,-0.47l-1.14,-0.33l-0.53,-1.96l0.72,-0.78l0.04,-0.48l-0.65,-1.17l0.8,0.39l1.4,-0.23l1.11,-0.84l0.52,0.35l1.19,-0.1l0.75,-1.2l1.53,0.33l1.36,-0.56l0.35,-1.14l1.08,0.32l0.68,-0.64l1.98,-0.44l0.42,0.82ZM459.19,184.75l-0.65,1.65l0.32,1.05l-0.31,0.89l-1.5,-0.85l-4.5,-1.67l0.19,-0.82l2.67,0.23l3.78,-0.48ZM443.93,176.05l1.18,1.66l-0.3,3.32l-1.06,-0.01l-0.77,0.73l-0.53,-0.44l-0.1,-3.37l-0.39,-1.22l1.04,0.01l0.92,-0.68Z",
            name: "Italy"
        },
        VN: {
            path: "M690.56,230.25l-2.7,1.82l-2.09,2.46l-0.63,1.95l4.31,6.45l2.32,1.65l1.43,1.94l1.11,4.59l-0.32,4.24l-1.93,1.54l-2.84,1.61l-2.11,2.15l-2.73,2.06l-0.59,-1.05l0.63,-1.53l-0.13,-0.47l-1.34,-1.04l1.51,-0.71l2.55,-0.18l0.3,-0.63l-0.82,-1.14l4.0,-2.07l0.31,-3.05l-0.57,-1.77l0.42,-2.66l-0.73,-1.97l-1.86,-1.76l-3.63,-5.29l-2.72,-1.46l0.36,-0.47l1.5,-0.64l0.21,-0.52l-0.97,-2.27l-0.37,-0.24l-2.83,-0.02l-2.24,-3.9l0.83,-0.4l4.39,-0.29l2.06,-1.31l1.15,0.89l1.88,0.4l-0.17,1.51l1.35,1.16l1.67,0.45Z",
            name: "Vietnam"
        },
        SB: {
            path: "M826.69,311.6l-0.61,0.09l-0.2,-0.33l0.37,0.15l0.44,0.09ZM824.18,307.38l-0.26,-0.3l-0.31,-0.91l0.03,0.0l0.54,1.21ZM823.04,309.33l-1.66,-0.22l-0.2,-0.52l1.16,0.28l0.69,0.46ZM819.28,304.68l1.14,0.65l0.02,0.03l-0.81,-0.44l-0.35,-0.23Z",
            name: "Solomon Is."
        },
        ET: {
            path: "M516.04,247.79l1.1,0.84l1.63,-0.45l0.68,0.47l1.63,0.03l2.01,0.94l1.73,1.66l1.64,2.07l-1.52,2.04l0.16,1.72l0.39,0.38l2.05,0.0l-0.36,1.03l2.86,3.58l8.32,3.08l1.31,0.02l-6.32,6.75l-3.1,0.11l-2.36,1.77l-1.47,0.04l-0.86,0.79l-1.38,-0.0l-1.32,-0.81l-2.29,1.05l-0.76,0.98l-3.29,-0.41l-3.07,-2.07l-1.8,-0.07l-0.62,-0.6l0.0,-1.24l-0.28,-0.38l-1.15,-0.37l-1.4,-2.59l-1.19,-0.68l-0.47,-1.0l-1.27,-1.23l-1.16,-0.22l0.43,-0.72l1.45,-0.28l0.41,-0.95l-0.03,-2.21l0.68,-2.44l1.05,-0.63l1.43,-3.06l1.57,-1.37l1.02,-2.51l0.35,-1.88l2.52,0.46l0.44,-0.24l0.58,-1.43Z",
            name: "Ethiopia"
        },
        SO: {
            path: "M525.13,288.48l-1.13,-1.57l-0.03,-8.86l2.66,-3.38l1.67,-0.13l2.13,-1.69l3.41,-0.23l7.08,-7.55l2.91,-3.69l0.08,-4.82l2.98,-0.67l1.24,-0.86l0.45,-0.0l-0.2,3.0l-1.21,3.62l-2.73,5.97l-2.13,3.65l-5.03,6.16l-8.56,6.4l-2.78,3.08l-0.8,1.56Z",
            name: "Somalia"
        },
        ZW: {
            path: "M498.91,341.09l-1.11,-0.22l-0.92,0.28l-2.09,-0.44l-1.5,-1.11l-1.89,-0.43l-0.62,-1.4l-0.01,-0.84l-0.3,-0.38l-0.97,-0.25l-2.71,-2.74l-1.92,-3.32l3.83,0.45l3.73,-3.82l1.08,-0.44l0.26,-0.77l1.25,-0.9l1.41,-0.26l0.5,0.89l1.99,-0.05l1.72,1.17l1.11,0.17l1.05,0.66l0.01,2.99l-0.59,3.76l0.38,0.86l-0.23,1.23l-0.39,0.35l-0.63,1.81l-2.43,2.75Z",
            name: "Zimbabwe"
        },
        ES: {
            path: "M416.0,169.21l1.07,1.17l4.61,1.38l1.06,-0.57l2.6,1.26l2.71,-0.3l0.09,1.12l-2.14,1.8l-3.11,0.61l-0.31,0.31l-0.2,0.89l-1.54,1.69l-0.97,2.4l0.84,1.74l-1.32,1.27l-0.48,1.68l-1.88,0.65l-1.66,2.07l-5.36,-0.01l-1.79,1.08l-0.89,0.98l-0.88,-0.17l-0.79,-0.82l-0.68,-1.59l-2.37,-0.63l-0.11,-0.5l1.21,-1.82l-0.77,-1.13l0.61,-1.68l-0.76,-1.62l0.87,-0.49l0.09,-1.25l0.42,-0.6l0.03,-2.11l0.99,-0.69l0.13,-0.5l-1.03,-1.73l-1.46,-0.11l-0.61,0.38l-1.06,0.0l-0.52,-1.23l-0.53,-0.21l-1.32,0.67l-0.01,-1.49l-0.75,-0.96l3.03,-1.88l2.99,0.53l3.32,-0.02l2.63,0.51l6.01,-0.06Z",
            name: "Spain"
        },
        ER: {
            path: "M520.38,246.23l3.42,2.43l3.5,3.77l0.84,0.54l-0.95,-0.01l-3.51,-3.89l-2.33,-1.15l-1.73,-0.07l-0.91,-0.51l-1.26,0.51l-1.34,-1.02l-0.61,0.17l-0.66,1.61l-2.35,-0.43l-0.17,-0.67l1.29,-5.29l0.61,-0.61l1.95,-0.53l0.87,-1.01l1.17,2.41l0.68,2.33l1.49,1.43Z",
            name: "Eritrea"
        },
        ME: {
            path: "M468.91,172.53l-1.22,-1.02l0.47,-1.81l0.89,-0.72l2.26,1.51l-0.5,0.57l-0.75,-0.27l-1.14,1.73Z",
            name: "Montenegro"
        },
        MD: {
            path: "M488.41,153.73l1.4,-0.27l1.72,0.93l1.07,0.15l0.85,0.65l-0.14,0.84l0.96,0.85l1.12,2.47l-1.15,-0.07l-0.66,-0.41l-0.52,0.25l-0.09,0.86l-1.08,1.89l-0.27,-0.86l0.25,-1.34l-0.16,-1.6l-3.29,-4.34Z",
            name: "Moldova"
        },
        MG: {
            path: "M545.91,319.14l0.4,3.03l0.62,1.21l-0.21,1.02l-0.57,-0.8l-0.69,-0.01l-0.47,0.76l0.41,2.12l-0.18,0.87l-0.73,0.78l-0.15,2.14l-4.71,15.2l-1.06,2.88l-3.92,1.64l-3.12,-1.49l-0.6,-1.21l-0.19,-2.4l-0.86,-2.05l-0.21,-1.77l0.38,-1.62l1.21,-0.75l0.01,-0.76l1.19,-2.04l0.23,-1.66l-1.06,-2.99l-0.19,-2.21l0.81,-1.33l0.32,-1.46l4.63,-1.22l3.44,-3.0l0.85,-1.4l-0.08,-0.7l0.78,-0.04l1.38,-1.77l0.13,-1.64l0.45,-0.61l1.16,1.69l0.59,1.6Z",
            name: "Madagascar"
        },
        MA: {
            path: "M378.78,230.02l0.06,-0.59l0.92,-0.73l0.82,-1.37l-0.09,-1.04l0.79,-1.7l1.31,-1.58l0.96,-0.59l0.66,-1.55l0.09,-1.47l0.81,-1.48l1.72,-1.07l1.55,-2.69l1.16,-0.96l2.44,-0.39l1.94,-1.82l1.31,-0.78l2.09,-2.28l-0.51,-3.65l1.24,-3.7l1.5,-1.75l4.46,-2.57l2.37,-4.47l1.44,0.01l1.68,1.21l2.32,-0.19l3.47,0.65l0.8,1.54l0.16,1.71l0.86,2.96l0.56,0.59l-0.26,0.61l-3.05,0.44l-1.26,1.05l-1.33,0.22l-0.33,0.37l-0.09,1.78l-2.68,1.0l-1.07,1.42l-4.47,1.13l-4.04,2.01l-0.54,4.64l-1.15,0.06l-0.92,0.61l-1.96,-0.35l-2.42,0.54l-0.74,1.9l-0.86,0.4l-1.14,3.26l-3.53,3.01l-0.8,3.55l-0.96,1.1l-0.29,0.82l-4.95,0.18Z",
            name: "Morocco"
        },
        UZ: {
            path: "M598.64,172.75l-1.63,1.52l0.06,0.64l1.85,1.12l1.97,-0.64l2.21,1.17l-2.52,1.68l-2.59,-0.22l-0.18,-0.41l0.46,-1.23l-0.45,-0.53l-3.35,0.69l-2.1,3.51l-1.87,-0.12l-1.03,1.51l0.22,0.55l1.64,0.62l0.46,1.83l-1.19,2.49l-2.66,-0.53l0.05,-1.36l-0.26,-0.39l-3.3,-1.23l-2.56,-1.4l-4.4,-3.34l-1.34,-3.14l-1.08,-0.6l-2.58,0.13l-0.69,-0.44l-0.47,-2.52l-3.37,-1.6l-0.43,0.05l-2.07,1.72l-2.1,1.01l-0.21,0.47l0.28,1.01l-1.91,0.03l-0.09,-10.5l5.99,-1.7l6.19,3.54l2.71,2.84l7.05,-0.67l2.71,2.01l-0.17,2.81l0.39,0.42l0.9,0.02l0.44,2.14l0.38,0.32l2.94,0.09l0.95,1.42l1.28,-0.24l1.05,-2.04l4.43,-2.5Z",
            name: "Uzbekistan"
        },
        MM: {
            path: "M673.9,230.21l-1.97,1.57l-0.57,0.96l-1.4,0.6l-1.36,1.05l-1.99,0.36l-1.08,2.66l-0.91,0.4l-0.19,0.55l1.21,2.27l2.52,3.43l-0.79,1.91l-0.74,0.41l-0.17,0.52l0.65,1.37l1.61,1.95l0.25,2.58l0.9,2.13l-1.92,3.57l0.68,-2.25l-0.81,-1.74l0.19,-2.65l-1.05,-1.53l-1.24,-6.17l-1.12,-2.26l-0.6,-0.13l-4.34,3.02l-2.39,-0.65l0.77,-2.84l-0.52,-2.61l-1.91,-2.96l0.25,-0.75l-0.29,-0.51l-1.33,-0.3l-1.61,-1.93l-0.1,-1.3l0.82,-0.24l0.04,-1.64l1.02,-0.52l0.21,-0.45l-0.23,-0.95l0.54,-0.96l0.08,-2.22l1.46,0.45l0.47,-0.2l1.12,-2.19l0.16,-1.35l1.33,-2.16l-0.0,-1.52l2.89,-1.66l1.63,0.44l0.5,-0.44l-0.17,-1.4l0.64,-0.36l0.08,-1.04l0.77,-0.11l0.71,1.35l1.06,0.69l-0.03,3.86l-2.38,2.37l-0.3,3.15l0.46,0.43l2.28,-0.38l0.51,2.08l1.47,0.67l-0.6,1.8l0.19,0.48l2.97,1.48l1.64,-0.55l0.02,0.32Z",
            name: "Myanmar"
        },
        ML: {
            path: "M392.61,254.08l-0.19,-2.37l-0.99,-0.87l-0.44,-1.3l-0.09,-1.28l0.81,-0.58l0.35,-1.24l2.37,0.65l1.31,-0.47l0.86,0.15l0.66,-0.56l9.83,-0.04l0.38,-0.28l0.56,-1.8l-0.44,-0.65l-2.35,-21.95l3.27,-0.04l16.7,11.38l0.74,1.31l2.5,1.09l0.02,1.38l0.44,0.39l2.34,-0.21l0.01,5.38l-1.28,1.61l-0.26,1.49l-5.31,0.57l-1.07,0.92l-2.9,0.1l-0.86,-0.48l-1.38,0.36l-2.4,1.08l-0.6,0.87l-1.85,1.09l-0.43,0.7l-0.79,0.39l-1.44,-0.21l-0.81,0.84l-0.34,1.64l-1.91,2.02l-0.06,1.03l-0.67,1.22l0.13,1.16l-0.97,0.39l-0.23,-0.64l-0.52,-0.24l-1.35,0.4l-0.34,0.55l-2.69,-0.28l-0.37,-0.35l-0.02,-0.9l-0.65,-0.35l0.45,-0.64l-0.03,-0.53l-2.12,-2.44l-0.76,-0.01l-2.0,1.16l-0.78,-0.15l-0.8,-0.67l-1.21,0.23Z",
            name: "Mali"
        },
        MN: {
            path: "M676.61,146.48l3.81,1.68l5.67,-1.0l2.37,0.41l2.34,1.5l1.79,1.75l2.29,-0.03l3.12,0.52l2.47,-0.81l3.41,-0.59l3.53,-2.21l1.25,0.29l1.53,1.13l2.27,-0.21l-2.66,5.01l0.64,1.68l0.47,0.21l1.32,-0.38l2.38,0.48l2.02,-1.11l1.76,0.89l2.06,2.02l-0.13,0.53l-1.72,-0.29l-3.77,0.46l-1.88,0.99l-1.76,1.99l-3.71,1.17l-2.45,1.6l-3.83,-0.87l-0.41,0.17l-1.31,1.99l1.04,2.24l-1.52,0.9l-1.74,1.57l-2.79,1.02l-3.78,0.13l-4.05,1.05l-2.77,1.52l-1.16,-0.85l-2.94,0.0l-3.62,-1.79l-2.58,-0.49l-3.4,0.41l-5.12,-0.67l-2.63,0.06l-1.31,-1.6l-1.4,-3.0l-1.48,-0.33l-3.13,-1.94l-6.16,-0.93l-0.71,-1.06l0.86,-3.82l-1.93,-2.71l-3.5,-1.18l-1.95,-1.58l-0.5,-1.72l2.34,-0.52l4.75,-2.8l3.62,-1.47l2.18,0.97l2.46,0.05l1.81,1.53l2.46,0.12l3.95,0.71l2.43,-2.28l0.08,-0.48l-0.9,-1.72l2.24,-2.98l2.62,1.27l4.94,1.17l0.43,2.24Z",
            name: "Mongolia"
        },
        MK: {
            path: "M472.8,173.98l0.49,-0.71l3.57,-0.71l1.0,0.77l0.13,1.45l-0.65,0.53l-1.15,-0.05l-1.12,0.67l-1.39,0.22l-0.79,-0.55l-0.29,-1.03l0.19,-0.6Z",
            name: "Macedonia"
        },
        MW: {
            path: "M505.5,309.31l0.85,1.95l0.15,2.86l-0.69,1.65l0.71,1.8l0.06,1.28l0.49,0.64l0.07,1.06l0.4,0.55l0.8,-0.23l0.55,0.61l0.69,-0.21l0.34,0.6l0.19,2.94l-1.04,0.62l-0.54,1.25l-1.11,-1.08l-0.16,-1.56l0.51,-1.31l-0.32,-1.3l-0.99,-0.65l-0.82,0.12l-2.36,-1.64l0.63,-1.96l0.82,-1.18l-0.46,-2.01l0.9,-2.86l-0.94,-2.51l0.96,0.18l0.29,0.4Z",
            name: "Malawi"
        },
        MR: {
            path: "M407.36,220.66l-2.58,0.03l-0.39,0.44l2.42,22.56l0.36,0.43l-0.39,1.24l-9.75,0.04l-0.56,0.53l-0.91,-0.11l-1.27,0.45l-1.61,-0.66l-0.97,0.03l-0.36,0.29l-0.38,1.35l-0.42,0.23l-2.93,-3.4l-2.96,-1.52l-1.62,-0.03l-1.27,0.54l-1.12,-0.2l-0.65,0.4l-0.08,-0.49l0.68,-1.29l0.31,-2.43l-0.57,-3.91l0.23,-1.21l-0.69,-1.5l-1.15,-1.02l0.25,-0.39l9.58,0.02l0.4,-0.45l-0.46,-3.68l0.47,-1.04l2.12,-0.21l0.36,-0.4l-0.08,-6.4l7.81,0.13l0.41,-0.4l0.01,-3.31l7.76,5.35Z",
            name: "Mauritania"
        },
        UG: {
            path: "M498.55,276.32l0.7,-0.46l1.65,0.5l1.96,-0.57l1.7,0.01l1.45,-0.98l0.91,1.33l1.33,3.95l-2.57,4.03l-1.46,-0.4l-2.54,0.91l-1.37,1.61l-0.01,0.81l-2.42,-0.01l-2.26,1.01l-0.17,-1.59l0.58,-1.04l0.14,-1.94l1.37,-2.28l1.78,-1.58l-0.17,-0.65l-0.72,-0.24l0.13,-2.43Z",
            name: "Uganda"
        },
        MY: {
            path: "M717.47,273.46l-1.39,0.65l-2.12,-0.41l-2.88,-0.0l-0.38,0.28l-0.84,2.75l-0.99,0.96l-1.21,3.29l-1.73,0.45l-2.45,-0.68l-1.39,0.31l-1.33,1.15l-1.59,-0.14l-1.41,0.44l-1.44,-1.19l-0.18,-0.73l1.34,0.53l1.93,-0.47l0.75,-2.22l4.02,-1.03l2.75,-3.21l0.82,0.94l0.64,-0.05l0.4,-0.65l0.96,0.06l0.42,-0.36l0.24,-2.68l1.81,-1.64l1.21,-1.86l0.63,-0.01l1.07,1.05l0.34,1.28l3.44,1.35l-0.06,0.35l-1.37,0.1l-0.35,0.54l0.32,0.88ZM673.68,269.59l0.17,1.09l0.47,0.33l1.65,-0.3l0.87,-0.94l1.61,1.52l0.98,1.56l-0.12,2.81l0.41,2.29l0.95,0.9l0.88,2.44l-1.27,0.12l-5.1,-3.67l-0.34,-1.29l-1.37,-1.59l-0.33,-1.97l-0.88,-1.4l0.25,-1.68l-0.46,-1.05l1.63,0.84Z",
            name: "Malaysia"
        },
        MX: {
            path: "M133.12,200.41l0.2,0.47l9.63,3.33l6.96,-0.02l0.4,-0.4l0.0,-0.74l3.77,0.0l3.55,2.93l1.39,2.83l1.52,1.04l2.08,0.82l0.47,-0.14l1.46,-2.0l1.73,-0.04l1.59,0.98l2.05,3.35l1.47,1.56l1.26,3.14l2.18,1.02l2.26,0.58l-1.18,3.72l-0.42,5.04l1.79,4.89l1.62,1.89l0.61,1.52l1.2,1.42l2.55,0.66l1.37,1.1l7.54,-1.89l1.86,-1.3l1.14,-4.3l4.1,-1.21l3.57,-0.11l0.32,0.3l-0.06,0.94l-1.26,1.45l-0.67,1.71l0.38,0.7l-0.72,2.27l-0.49,-0.3l-1.0,0.08l-1.0,1.39l-0.47,-0.11l-0.53,0.47l-4.26,-0.02l-0.4,0.4l-0.0,1.06l-1.1,0.26l0.1,0.44l1.82,1.44l0.56,0.91l-3.19,0.21l-1.21,2.09l0.24,0.72l-0.2,0.44l-2.24,-2.18l-1.45,-0.93l-2.22,-0.69l-1.52,0.22l-3.07,1.16l-10.55,-3.85l-2.86,-1.96l-3.78,-0.92l-1.08,-1.19l-2.62,-1.43l-1.18,-1.54l-0.38,-0.81l0.66,-0.63l-0.18,-0.53l0.52,-0.76l0.01,-0.91l-2.0,-3.82l-2.21,-2.63l-2.53,-2.09l-1.19,-1.62l-2.2,-1.17l-0.3,-0.43l0.34,-1.48l-0.21,-0.45l-1.23,-0.6l-1.36,-1.2l-0.59,-1.78l-1.54,-0.47l-2.44,-2.55l-0.16,-0.9l-1.33,-2.03l-0.84,-1.99l-0.16,-1.33l-1.81,-1.1l-0.97,0.05l-1.31,-0.7l-0.57,0.22l-0.4,1.12l0.72,3.77l3.51,3.89l0.28,0.78l0.53,0.26l0.41,1.43l1.33,1.73l1.58,1.41l0.8,2.39l1.43,2.41l0.13,1.32l0.37,0.36l1.04,0.08l1.67,2.28l-0.85,0.76l-0.66,-1.51l-1.68,-1.54l-2.91,-1.87l0.06,-1.82l-0.54,-1.68l-2.91,-2.03l-0.55,0.09l-1.95,-1.1l-0.88,-0.94l0.68,-0.08l0.93,-1.01l0.08,-1.78l-1.93,-1.94l-1.46,-0.77l-3.75,-7.56l4.88,-0.42Z",
            name: "Mexico"
        },
        IL: {
            path: "M507.76,203.05l0.4,-0.78l0.18,0.4l-0.33,1.03l0.52,0.44l0.68,-0.22l-0.86,3.6l-1.16,-3.32l0.59,-0.74l-0.03,-0.41ZM508.73,200.34l0.37,-1.02l0.64,0.0l0.52,-0.51l-0.49,1.53l-0.56,-0.24l-0.48,0.23Z",
            name: "Israel"
        },
        FR: {
            path: "M444.48,172.62l-0.64,1.78l-0.58,-0.31l-0.49,-1.72l0.4,-0.89l1.0,-0.72l0.3,1.85ZM429.64,147.1l1.78,1.58l1.46,-0.13l2.1,1.42l1.35,0.27l1.23,0.83l3.04,0.5l-1.03,1.85l-0.3,2.12l-0.41,0.32l-0.95,-0.24l-0.5,0.43l0.06,0.61l-1.81,1.92l-0.04,1.42l0.55,0.38l0.88,-0.36l0.61,0.97l-0.03,1.0l0.57,0.91l-0.75,1.09l0.65,2.39l1.27,0.57l-0.18,0.82l-2.01,1.53l-4.77,-0.8l-3.82,1.0l-0.53,1.85l-2.49,0.34l-2.71,-1.31l-1.16,0.57l-4.31,-1.29l-0.72,-0.86l1.19,-1.78l0.39,-6.45l-2.58,-3.3l-1.9,-1.66l-3.72,-1.23l-0.19,-1.72l2.81,-0.61l4.12,0.81l0.47,-0.48l-0.6,-2.77l1.94,0.95l5.83,-2.54l0.92,-2.74l1.6,-0.49l0.24,0.78l1.36,0.33l1.05,1.19ZM289.01,278.39l-0.81,0.8l-0.78,0.12l-0.5,-0.66l-0.56,-0.1l-0.91,0.6l-0.46,-0.22l1.09,-2.96l-0.96,-1.77l-0.17,-1.49l1.07,-1.77l2.32,0.75l2.51,2.01l0.3,0.74l-2.14,3.96Z",
            name: "France"
        },
        XS: {
            path: "M531.15,258.94l1.51,0.12l5.13,-0.95l5.3,-1.48l-0.01,4.4l-2.67,3.39l-1.85,0.01l-8.04,-2.94l-2.55,-3.17l1.12,-1.71l2.04,2.34Z",
            name: "Somaliland"
        },
        FI: {
            path: "M492.17,76.39l-0.23,3.5l3.52,2.63l-2.08,2.88l-0.02,0.44l2.8,4.56l-1.59,3.31l2.16,3.24l-0.94,2.39l0.14,0.47l3.44,2.51l-0.77,1.62l-7.52,6.95l-4.5,0.31l-4.38,1.37l-3.8,0.74l-1.44,-1.96l-2.17,-1.11l0.5,-3.66l-1.16,-3.33l1.09,-2.08l2.21,-2.42l5.67,-4.32l1.64,-0.83l0.21,-0.42l-0.46,-2.02l-3.38,-1.89l-0.75,-1.43l-0.22,-6.74l-6.79,-4.8l0.8,-0.62l2.54,2.12l3.46,-0.12l3.0,0.96l2.51,-2.11l1.17,-3.08l3.55,-1.38l2.76,1.53l-0.95,2.79Z",
            name: "Finland"
        },
        FJ: {
            path: "M869.95,326.98l-1.21,0.41l-0.08,-0.23l2.97,-1.21l-0.14,0.42l-1.54,0.61ZM867.58,329.25l0.43,0.37l-0.27,0.88l-1.24,0.28l-1.04,-0.24l-0.14,-0.66l0.63,-0.58l0.92,0.26l0.7,-0.31Z",
            name: "Fiji"
        },
        FK: {
            path: "M274.36,425.85l1.44,1.08l-0.47,0.73l-3.0,0.89l-0.96,-1.0l-0.52,-0.05l-1.83,1.29l-0.73,-0.88l2.46,-1.64l1.93,0.76l1.67,-1.19Z",
            name: "Falkland Is."
        },
        NI: {
            path: "M202.33,252.67l0.81,-0.18l1.03,-1.02l-0.04,-0.88l0.68,-0.0l0.63,-0.54l0.97,0.22l1.53,-1.26l0.58,-0.99l1.17,0.34l2.41,-0.94l0.13,1.32l-0.81,1.94l0.1,2.74l-0.36,0.37l-0.11,1.75l-0.47,0.81l0.18,1.14l-1.73,-0.85l-0.71,0.27l-1.47,-0.6l-0.52,0.16l-4.01,-3.81Z",
            name: "Nicaragua"
        },
        NL: {
            path: "M430.31,143.39l0.6,-0.5l2.13,-4.8l3.2,-1.33l1.74,0.08l0.33,0.8l-0.59,2.92l-0.5,0.99l-1.26,0.0l-0.4,0.45l0.33,2.7l-2.2,-1.78l-2.62,0.58l-0.75,-0.11Z",
            name: "Netherlands"
        },
        NO: {
            path: "M491.44,67.41l6.8,2.89l-2.29,0.86l-0.15,0.65l2.33,2.38l-4.98,1.79l0.84,-2.45l-0.18,-0.48l-3.55,-1.8l-3.89,1.52l-1.42,3.38l-2.12,1.72l-2.64,-1.0l-3.11,0.21l-2.66,-2.22l-0.5,-0.01l-1.41,1.1l-1.44,0.17l-0.35,0.35l-0.32,2.47l-4.32,-0.64l-0.44,0.29l-0.58,2.11l-2.45,0.2l-4.15,7.68l-3.88,5.76l0.78,1.62l-0.64,1.16l-2.24,-0.06l-0.38,0.24l-1.66,3.89l0.15,5.17l1.57,2.04l-0.78,4.16l-2.02,2.48l-0.85,1.63l-1.3,-1.75l-0.58,-0.07l-4.87,4.19l-3.1,0.79l-3.16,-1.7l-0.85,-3.77l-0.77,-8.55l2.14,-2.31l6.55,-3.27l5.02,-4.17l10.63,-13.84l10.98,-8.7l5.35,-1.91l4.34,0.12l3.69,-3.64l4.49,0.19l4.37,-0.89ZM484.55,20.04l4.26,1.75l-3.1,2.55l-7.1,0.65l-7.08,-0.9l-0.37,-1.31l-0.37,-0.29l-3.44,-0.1l-2.08,-2.0l6.87,-1.44l3.9,1.31l2.39,-1.64l6.13,1.4ZM481.69,33.93l-4.45,1.74l-3.54,-0.99l1.12,-0.9l0.05,-0.58l-1.06,-1.22l4.22,-0.89l1.09,1.97l2.57,0.87ZM466.44,24.04l7.43,3.77l-5.41,1.86l-1.58,4.08l-2.26,1.2l-1.12,4.11l-2.61,0.18l-4.79,-2.86l1.84,-1.54l-0.1,-0.68l-3.69,-1.53l-4.77,-4.51l-1.73,-3.89l6.11,-1.82l1.54,1.92l3.57,-0.08l1.2,-1.96l3.32,-0.18l3.05,1.92Z",
            name: "Norway"
        },
        NA: {
            path: "M474.26,330.66l-0.97,0.04l-0.38,0.4l-0.07,8.9l-2.09,0.08l-0.39,0.4l-0.0,17.42l-1.98,1.23l-1.17,0.17l-2.44,-0.66l-0.48,-1.13l-0.99,-0.74l-0.54,0.05l-0.9,1.01l-1.53,-1.68l-0.93,-1.88l-1.99,-8.56l-0.06,-3.12l-0.33,-1.52l-2.3,-3.34l-1.91,-4.83l-1.96,-2.43l-0.12,-1.57l2.33,-0.79l1.43,0.07l1.81,1.13l10.23,-0.25l1.84,1.23l5.87,0.35ZM474.66,330.64l6.51,-1.6l1.9,0.39l-1.69,0.4l-1.31,0.83l-1.12,-0.94l-4.29,0.92Z",
            name: "Namibia"
        },
        VU: {
            path: "M839.04,322.8l0.22,1.14l-0.44,0.03l-0.2,-1.45l0.42,0.27Z",
            name: "Vanuatu"
        },
        NC: {
            path: "M838.78,341.24l-0.33,0.22l-2.9,-1.75l-3.26,-3.37l1.65,0.83l4.85,4.07Z",
            name: "New Caledonia"
        },
        NE: {
            path: "M454.75,226.53l1.33,1.37l0.48,0.07l1.27,-0.7l0.53,3.52l0.94,0.83l0.17,0.92l0.81,0.69l-0.44,0.95l-0.96,5.26l-0.13,3.22l-3.04,2.31l-1.22,3.57l1.02,1.24l-0.0,1.46l0.39,0.4l1.13,0.04l-0.9,1.25l-1.47,-2.42l-0.86,-0.29l-2.09,1.37l-1.74,-0.67l-1.45,-0.17l-0.85,0.35l-1.36,-0.07l-1.64,1.09l-1.06,0.05l-2.94,-1.28l-1.44,0.59l-1.01,-0.03l-0.97,-0.94l-2.7,-0.98l-2.69,0.3l-0.87,0.64l-0.47,1.6l-0.75,1.16l-0.12,1.53l-1.57,-1.1l-1.31,0.24l0.03,-0.81l-0.32,-0.41l-2.59,-0.52l-0.15,-1.16l-1.35,-1.6l-0.29,-1.0l0.13,-0.84l1.29,-0.08l1.08,-0.92l3.31,-0.22l2.22,-0.41l0.32,-0.34l0.2,-1.47l1.39,-1.88l-0.01,-5.66l3.36,-1.12l7.24,-5.12l8.42,-4.92l3.69,1.06Z",
            name: "Niger"
        },
        NG: {
            path: "M456.32,253.89l0.64,0.65l-0.28,1.04l-2.11,2.01l-2.03,5.18l-1.37,1.16l-1.15,3.18l-1.33,0.66l-1.46,-0.97l-1.21,0.16l-1.38,1.36l-0.91,0.24l-1.79,4.06l-2.33,0.81l-1.11,-0.07l-0.86,0.5l-1.71,-0.05l-1.19,-1.39l-0.89,-1.89l-1.77,-1.66l-3.95,-0.08l0.07,-5.21l0.42,-1.43l1.95,-2.3l-0.14,-0.91l0.43,-1.18l-0.53,-1.41l0.25,-2.92l0.72,-1.07l0.32,-1.34l0.46,-0.39l2.47,-0.28l2.34,0.89l1.15,1.02l1.28,0.04l1.22,-0.58l3.03,1.27l1.49,-0.14l1.36,-1.0l1.33,0.07l0.82,-0.35l3.45,0.8l1.82,-1.32l1.84,2.67l0.66,0.16Z",
            name: "Nigeria"
        },
        NZ: {
            path: "M857.8,379.65l1.86,3.12l0.44,0.18l0.3,-0.38l0.03,-1.23l0.38,0.27l0.57,2.31l2.02,0.94l1.81,0.27l1.57,-1.06l0.7,0.18l-1.15,3.59l-1.98,0.11l-0.74,1.2l0.2,1.11l-2.42,3.98l-1.49,0.92l-1.04,-0.85l1.21,-2.05l-0.81,-2.01l-2.63,-1.25l0.04,-0.57l1.82,-1.19l0.43,-2.34l-0.16,-2.03l-0.95,-1.82l-0.06,-0.72l-3.11,-3.64l-0.79,-1.52l1.56,1.45l1.76,0.66l0.65,2.34ZM853.83,393.59l0.57,1.24l0.59,0.16l1.42,-0.97l0.46,0.79l0.0,1.03l-2.47,3.48l-1.26,1.2l-0.06,0.5l0.55,0.87l-1.41,0.07l-2.33,1.38l-2.03,5.02l-3.02,2.16l-2.06,-0.06l-1.71,-1.04l-2.47,-0.2l-0.27,-0.73l1.22,-2.1l3.05,-2.94l1.62,-0.59l4.02,-2.82l1.57,-1.67l1.07,-2.16l0.88,-0.7l0.48,-1.75l1.24,-0.97l0.35,0.79Z",
            name: "New Zealand"
        },
        NP: {
            path: "M641.14,213.62l0.01,3.19l-1.74,0.04l-4.8,-0.86l-1.58,-1.39l-3.37,-0.34l-7.65,-3.7l0.8,-2.09l2.33,-1.7l1.77,0.75l2.49,1.76l1.38,0.41l0.99,1.35l1.9,0.52l1.99,1.17l5.49,0.9Z",
            name: "Nepal"
        },
        XK: {
            path: "M472.77,172.64l-1.08,-1.29l0.96,-0.77l0.29,-0.83l1.98,1.64l-0.36,0.67l-1.79,0.58Z",
            name: "Kosovo"
        },
        CI: {
            path: "M407.4,259.27l0.86,0.42l0.56,0.9l1.13,0.53l1.19,-0.61l0.97,-0.08l1.42,0.54l0.6,3.24l-1.03,2.08l-0.65,2.84l1.06,2.33l-0.06,0.53l-2.54,-0.47l-1.66,0.03l-3.06,0.46l-4.11,1.6l0.32,-3.06l-1.18,-1.31l-1.32,-0.66l0.42,-0.85l-0.2,-1.4l0.5,-0.67l0.01,-1.59l0.84,-0.32l0.26,-0.5l-1.15,-3.01l0.12,-0.5l0.51,-0.25l0.66,0.31l1.93,0.02l0.67,-0.71l0.71,-0.14l0.25,0.69l0.57,0.22l1.4,-0.61Z",
            name: "Côte d'Ivoire"
        },
        CH: {
            path: "M444.62,156.35l-0.29,0.87l0.18,0.53l1.13,0.58l1.0,0.1l-0.1,0.65l-0.79,0.38l-1.72,-0.37l-0.45,0.23l-0.45,1.04l-0.75,0.06l-0.84,-0.4l-1.32,1.0l-0.96,0.12l-0.88,-0.55l-0.81,-1.3l-0.49,-0.16l-0.63,0.26l0.02,-0.65l1.71,-1.66l0.1,-0.56l0.93,0.08l0.58,-0.46l1.99,0.02l0.66,-0.61l2.19,0.79Z",
            name: "Switzerland"
        },
        CO: {
            path: "M242.07,254.93l-1.7,0.59l-0.59,1.18l-1.7,1.69l-0.38,1.93l-0.67,1.43l0.31,0.57l1.03,0.13l0.25,0.9l0.57,0.64l-0.04,2.34l1.64,1.42l3.16,-0.24l1.26,0.28l1.67,2.06l0.41,0.13l4.09,-0.39l0.45,0.22l-0.92,1.95l-0.2,1.8l0.52,1.83l0.75,1.05l-1.12,1.1l0.07,0.63l0.84,0.51l0.74,1.29l-0.39,-0.45l-0.59,-0.01l-0.71,0.74l-4.71,-0.05l-0.4,0.41l0.03,1.57l0.33,0.39l1.11,0.2l-1.68,0.4l-0.29,0.38l-0.01,1.82l1.16,1.14l0.34,1.25l-1.05,7.05l-1.04,-0.87l1.26,-1.99l-0.13,-0.56l-2.18,-1.23l-1.38,0.2l-1.14,-0.38l-1.27,0.61l-1.55,-0.26l-1.38,-2.46l-1.23,-0.75l-0.85,-1.2l-1.67,-1.19l-0.86,0.13l-2.11,-1.32l-1.01,0.31l-1.8,-0.29l-0.52,-0.91l-3.09,-1.68l0.77,-0.52l-0.1,-1.12l0.41,-0.64l1.34,-0.32l2.0,-2.88l-0.11,-0.57l-0.66,-0.43l0.39,-1.38l-0.52,-2.1l0.49,-0.83l-0.4,-2.13l-0.97,-1.35l0.17,-0.66l0.86,-0.08l0.47,-0.75l-0.46,-1.63l1.41,-0.07l1.8,-1.69l0.93,-0.24l0.3,-0.38l0.45,-2.76l1.22,-1.0l1.44,-0.04l0.45,-0.5l1.91,0.12l2.93,-1.84l1.15,-1.14l0.91,0.46l-0.25,0.45Z",
            name: "Colombia"
        },
        CN: {
            path: "M740.23,148.97l4.57,1.3l2.8,2.17l0.98,2.9l0.38,0.27l3.8,0.0l2.32,-1.28l3.29,-0.75l-0.96,2.09l-1.02,1.28l-0.85,3.4l-1.52,2.73l-2.76,-0.5l-2.4,1.13l-0.21,0.45l0.64,2.57l-0.32,3.2l-0.94,0.06l-0.37,0.89l-0.91,-1.01l-0.64,0.07l-0.92,1.57l-3.73,1.25l-0.26,0.48l0.26,1.06l-1.5,-0.08l-1.09,-0.86l-0.56,0.06l-1.67,2.06l-2.7,1.56l-2.03,1.88l-3.4,0.83l-1.93,1.4l-1.15,0.34l0.33,-0.7l-0.41,-0.89l1.79,-1.79l0.02,-0.54l-1.32,-1.56l-0.48,-0.1l-2.24,1.09l-2.83,2.06l-1.51,1.83l-2.28,0.13l-1.55,1.49l-0.04,0.5l1.32,1.97l2.0,0.58l0.31,1.35l1.98,0.84l3.0,-1.96l2.0,1.02l1.49,0.11l0.22,0.83l-3.37,0.86l-1.12,1.48l-2.5,1.52l-1.29,1.99l0.14,0.56l2.57,1.48l0.97,2.7l3.17,4.63l-0.03,1.66l-1.35,0.65l-0.2,0.51l0.6,1.47l1.4,0.91l-0.89,3.82l-1.43,0.38l-3.85,6.44l-2.27,3.11l-6.78,4.57l-2.73,0.29l-1.45,1.04l-0.62,-0.61l-0.55,-0.01l-1.36,1.25l-3.39,1.27l-2.61,0.4l-1.1,2.79l-0.81,0.09l-0.49,-1.42l0.5,-0.85l-0.25,-0.59l-3.36,-0.84l-1.3,0.4l-2.31,-0.62l-0.94,-0.84l0.33,-1.28l-0.3,-0.49l-2.19,-0.46l-1.13,-0.93l-0.47,-0.02l-2.06,1.36l-4.29,0.28l-2.76,1.05l-0.28,0.43l0.32,2.53l-0.59,-0.03l-0.19,-1.34l-0.55,-0.34l-1.68,0.7l-2.46,-1.23l0.62,-1.87l-0.26,-0.51l-1.37,-0.44l-0.54,-2.22l-0.45,-0.3l-2.13,0.35l0.24,-2.48l2.39,-2.4l0.03,-4.31l-1.19,-0.92l-0.78,-1.49l-0.41,-0.21l-1.41,0.19l-1.98,-0.3l0.46,-1.07l-1.17,-1.7l-0.55,-0.11l-1.63,1.05l-2.25,-0.57l-2.89,1.73l-2.25,1.98l-1.75,0.29l-1.17,-0.71l-3.31,-0.65l-1.48,0.79l-1.04,1.27l-0.12,-1.17l-0.54,-0.34l-1.44,0.54l-5.55,-0.86l-1.98,-1.16l-1.89,-0.54l-0.99,-1.35l-1.34,-0.37l-2.55,-1.79l-2.01,-0.84l-1.21,0.56l-5.57,-3.45l-0.53,-2.31l1.19,0.25l0.48,-0.37l0.08,-1.42l-0.98,-1.56l0.15,-2.44l-2.69,-3.32l-4.12,-1.23l-0.67,-2.0l-1.92,-1.48l-0.38,-0.7l-0.51,-3.01l-1.52,-0.66l-0.7,0.13l-0.48,-2.05l0.55,-0.51l-0.09,-0.82l2.03,-1.19l1.6,-0.54l2.56,0.38l0.42,-0.22l0.85,-1.7l3.0,-0.33l1.1,-1.26l4.05,-1.77l0.39,-0.91l-0.17,-1.44l1.45,-0.67l0.2,-0.52l-2.07,-4.9l4.51,-1.12l1.37,-0.73l1.89,-5.51l4.98,0.86l1.51,-1.7l0.11,-2.87l1.99,-0.38l1.83,-2.06l0.49,-0.13l0.68,2.08l2.23,1.77l3.44,1.16l1.55,2.29l-0.92,3.49l0.96,1.67l6.54,1.13l2.95,1.87l1.47,0.35l1.06,2.62l1.53,1.91l3.05,0.08l5.14,0.67l3.37,-0.41l2.36,0.43l3.65,1.8l3.06,0.04l1.45,0.88l2.87,-1.59l3.95,-1.02l3.83,-0.14l3.06,-1.14l1.77,-1.6l1.72,-1.01l0.17,-0.49l-1.1,-2.05l1.02,-1.54l4.02,0.8l2.45,-1.61l3.76,-1.19l1.96,-2.13l1.63,-0.83l3.51,-0.4l1.92,0.34l0.46,-0.3l0.17,-1.5l-2.27,-2.22l-2.11,-1.09l-2.18,1.11l-2.32,-0.47l-1.29,0.32l-0.4,-0.82l2.73,-5.16l3.02,1.06l3.53,-2.06l0.18,-1.68l2.16,-3.35l1.49,-1.35l-0.03,-1.85l-1.07,-0.85l1.54,-1.26l2.98,-0.59l3.23,-0.09l3.64,0.99l2.04,1.16l3.29,6.71l0.92,3.19ZM696.92,237.31l-1.87,1.08l-1.63,-0.64l-0.06,-1.79l1.03,-0.98l2.58,-0.69l1.16,0.05l0.3,0.54l-0.98,1.06l-0.53,1.37Z",
            name: "China"
        },
        CM: {
            path: "M457.92,257.49l1.05,1.91l-1.4,0.16l-1.05,-0.23l-0.45,0.22l-0.54,1.19l0.08,0.45l1.48,1.47l1.05,0.45l1.01,2.46l-1.52,2.99l-0.68,0.68l-0.13,3.69l2.38,3.84l1.09,0.8l0.24,2.48l-3.67,-1.14l-11.27,-0.13l0.23,-1.79l-0.98,-1.66l-1.19,-0.54l-0.44,-0.97l-0.6,-0.42l1.71,-4.27l0.75,-0.13l1.38,-1.36l0.65,-0.03l1.71,0.99l1.93,-1.12l1.14,-3.18l1.38,-1.17l2.0,-5.14l2.17,-2.13l0.3,-1.64l-0.86,-0.88l0.03,-0.33l0.94,1.28l0.07,3.22Z",
            name: "Cameroon"
        },
        CL: {
            path: "M246.5,429.18l-3.14,1.83l-0.57,3.16l-0.64,0.05l-2.68,-1.06l-2.82,-2.33l-3.04,-1.89l-0.69,-1.85l0.63,-2.14l-1.21,-2.11l-0.31,-5.37l1.01,-2.91l2.57,-2.38l-0.18,-0.68l-3.16,-0.77l2.05,-2.47l0.77,-4.65l2.32,0.9l0.54,-0.29l1.31,-6.31l-0.22,-0.44l-1.68,-0.8l-0.56,0.28l-0.7,3.36l-0.81,-0.22l1.56,-9.41l1.15,-2.24l-0.71,-2.82l-0.18,-2.84l1.01,-0.33l3.26,-9.14l1.07,-4.22l-0.56,-4.21l0.74,-2.34l-0.29,-3.27l1.46,-3.34l2.04,-16.59l-0.66,-7.76l1.03,-0.53l0.54,-0.9l0.79,1.14l0.32,1.78l1.25,1.16l-0.69,2.55l1.33,2.9l0.97,3.59l0.46,0.29l1.5,-0.3l0.11,0.23l-0.76,2.44l-2.57,1.23l-0.23,0.37l0.08,4.33l-0.46,0.77l0.56,1.21l-1.58,1.51l-1.68,2.62l-0.89,2.47l0.2,2.7l-1.48,2.73l1.12,5.09l0.64,0.61l-0.01,2.29l-1.38,2.68l0.01,2.4l-1.89,2.04l0.02,2.75l0.69,2.57l-1.43,1.13l-1.26,5.68l0.39,3.51l-0.97,0.89l0.58,3.5l1.02,1.14l-0.65,1.02l0.15,0.57l1.0,0.53l0.16,0.69l-1.03,0.85l0.26,1.75l-0.89,4.03l-1.31,2.66l0.24,1.75l-0.71,1.83l-1.99,1.7l0.3,3.67l0.88,1.19l1.58,0.01l0.01,2.21l1.04,1.95l5.98,0.63ZM248.69,430.79l0.0,7.33l0.4,0.4l3.52,0.05l-0.44,0.75l-1.94,0.98l-2.49,-0.37l-1.88,-1.06l-2.55,-0.49l-5.59,-3.71l-2.38,-2.63l4.1,2.48l3.32,1.23l0.45,-0.12l1.29,-1.57l0.83,-2.32l2.05,-1.24l1.31,0.29Z",
            name: "Chile"
        },
        XC: {
            path: "M504.91,192.87l0.34,0.01l0.27,-0.07l-0.29,0.26l-0.31,-0.2Z",
            name: "N. Cyprus"
        },
        CA: {
            path: "M280.06,145.6l-1.67,2.88l0.07,0.49l0.5,0.04l1.46,-0.98l1.0,0.42l-0.56,0.72l0.17,0.62l2.22,0.89l1.35,-0.71l1.95,0.78l-0.66,2.01l0.5,0.51l1.32,-0.42l0.98,3.17l-0.91,2.41l-0.8,0.08l-1.23,-0.45l0.47,-2.25l-0.89,-0.83l-0.48,0.06l-2.78,2.63l-0.34,-0.02l1.02,-0.85l-0.14,-0.69l-2.4,-0.77l-7.4,0.08l-0.17,-0.41l1.3,-0.94l0.02,-0.64l-0.73,-0.58l1.85,-1.74l2.57,-5.16l1.47,-1.79l1.99,-1.05l0.46,0.06l-1.53,2.45ZM68.32,74.16l4.13,0.95l4.02,2.14l2.61,0.4l2.47,-1.89l2.88,-1.31l3.85,0.48l3.71,-1.94l3.82,-1.04l1.56,1.68l0.49,0.08l1.87,-1.04l0.65,-1.98l1.24,0.35l4.16,3.94l0.54,0.01l2.75,-2.49l0.26,2.59l0.49,0.35l3.08,-0.73l1.04,-1.27l2.73,0.23l3.83,1.86l5.86,1.61l3.47,0.75l2.44,-0.26l2.73,1.78l-2.98,1.81l-0.19,0.41l0.31,0.32l4.53,0.92l6.87,-0.5l2.0,-0.69l2.49,2.39l0.53,0.02l2.72,-2.16l-0.02,-0.64l-2.16,-1.54l1.15,-1.06l4.83,-0.61l1.84,0.95l2.48,2.31l3.01,-0.23l4.55,1.92l3.85,-0.67l3.61,0.1l0.41,-0.44l-0.25,-2.36l1.79,-0.61l3.49,1.32l-0.01,3.77l0.31,0.39l0.45,-0.22l1.48,-3.16l1.74,0.1l0.41,-0.3l1.13,-4.37l-2.78,-3.11l-2.8,-1.74l0.19,-4.64l2.71,-3.07l2.98,0.67l2.41,1.95l3.19,4.8l-1.99,1.97l0.21,0.68l4.33,0.84l-0.01,4.15l0.25,0.37l0.44,-0.09l3.07,-3.15l2.54,2.39l-0.61,3.33l2.42,2.88l0.61,0.0l2.61,-3.08l1.88,-3.82l0.17,-4.58l6.72,0.94l3.13,2.04l0.13,1.82l-1.76,2.19l-0.01,0.49l1.66,2.16l-0.26,1.71l-4.68,2.8l-3.28,0.61l-2.47,-1.2l-0.55,0.23l-0.73,2.04l-2.38,3.43l-0.74,1.77l-2.74,2.57l-3.44,0.25l-2.21,1.78l-0.28,2.53l-2.82,0.55l-3.12,3.22l-2.72,4.31l-1.03,3.17l-0.14,4.31l0.33,0.41l3.44,0.57l2.24,5.95l0.45,0.23l3.4,-0.69l4.52,1.51l2.43,1.31l1.91,1.73l3.1,0.96l2.62,1.46l6.6,0.54l-0.35,2.74l0.81,3.53l1.81,3.78l3.83,3.3l0.45,0.04l2.1,-1.28l1.37,-3.69l-1.31,-5.38l-1.45,-1.58l3.57,-1.47l2.84,-2.46l1.52,-2.8l-0.25,-2.55l-1.7,-3.07l-2.85,-2.61l2.8,-3.95l-1.08,-3.37l-0.79,-5.67l1.36,-0.7l6.76,1.41l2.12,-0.96l5.12,3.36l1.05,1.61l4.08,0.26l-0.06,2.87l0.83,4.7l0.3,0.32l2.16,0.54l1.73,2.06l0.5,0.09l3.63,-2.03l2.52,-4.19l1.26,-1.32l7.6,11.72l-0.92,2.04l0.16,0.51l3.3,1.97l2.22,1.98l4.1,0.98l1.43,0.99l0.95,2.79l2.1,0.68l0.84,1.08l0.17,3.45l-3.37,2.26l-4.22,1.24l-3.06,2.63l-4.06,0.51l-5.35,-0.69l-6.39,0.2l-2.3,2.41l-3.26,1.51l-6.47,7.15l-0.06,0.48l0.44,0.19l2.13,-0.52l4.17,-4.24l5.12,-2.62l3.52,-0.3l1.69,1.21l-2.12,2.21l0.81,3.47l1.02,2.61l3.47,1.6l4.14,-0.45l2.15,-2.8l0.26,1.48l1.14,0.8l-2.56,1.69l-5.5,1.82l-2.54,1.27l-2.74,2.15l-1.4,-0.16l-0.07,-2.01l4.14,-2.44l0.18,-0.45l-0.39,-0.29l-6.63,0.45l-1.39,-1.49l-0.14,-4.43l-1.11,-0.91l-1.82,0.39l-0.66,-0.66l-0.6,0.03l-1.91,2.39l-0.82,2.52l-0.8,1.27l-1.67,0.56l-0.46,0.76l-8.31,0.07l-1.21,0.62l-2.35,1.97l-0.71,-0.14l-1.37,0.96l-1.12,-0.48l-4.74,1.26l-0.9,1.17l0.21,0.62l1.73,0.3l-1.81,0.31l-1.85,0.81l-2.11,-0.13l-2.95,1.78l-0.69,-0.09l1.39,-2.1l1.73,-1.21l0.1,-2.29l1.16,-1.99l0.49,0.53l2.03,0.42l1.2,-1.16l0.02,-0.47l-2.66,-3.51l-2.28,-0.61l-5.64,-0.71l-0.4,-0.57l-0.79,0.13l0.2,-0.41l-0.22,-0.55l-0.68,-0.26l0.19,-1.26l-0.78,-0.73l0.31,-0.64l-0.29,-0.57l-2.6,-0.44l-0.75,-1.63l-0.94,-0.66l-4.31,-0.65l-1.13,1.19l-1.48,0.59l-0.85,1.06l-2.83,-0.76l-2.09,0.39l-2.39,-0.97l-4.24,-0.7l-0.57,-0.4l-0.41,-1.63l-0.4,-0.3l-0.85,0.02l-0.39,0.4l-0.01,0.85l-69.13,-0.01l-6.51,-4.52l-4.5,-1.38l-1.26,-2.66l0.33,-1.93l-0.23,-0.43l-3.01,-1.35l-0.55,-2.77l-2.89,-2.38l-0.04,-1.45l1.39,-1.83l-0.28,-2.55l-4.16,-2.2l-4.07,-6.6l-4.02,-3.22l-1.3,-1.88l-0.5,-0.13l-2.51,1.21l-2.23,1.87l-3.85,-3.88l-2.44,-1.04l-2.22,-0.13l0.03,-37.49ZM260.37,148.65l3.04,0.76l2.26,1.2l-3.78,-0.95l-1.53,-1.01ZM249.4,3.81l6.68,0.49l5.32,0.79l4.26,1.57l-0.07,1.1l-5.85,2.53l-6.02,1.21l-2.39,1.39l-0.18,0.45l0.39,0.29l4.01,-0.02l-4.65,2.82l-4.2,1.74l-4.19,4.59l-5.03,0.92l-1.67,1.15l-7.47,0.59l-0.37,0.37l0.32,0.42l2.41,0.49l-0.81,0.47l-0.12,0.59l1.83,2.41l-2.02,1.59l-3.81,1.51l-1.32,2.16l-3.38,1.53l-0.22,0.48l0.35,1.19l0.4,0.29l3.88,-0.18l0.03,0.61l-6.33,2.95l-6.41,-1.4l-7.43,0.79l-3.72,-0.62l-4.4,-0.25l-0.23,-1.83l4.29,-1.11l0.28,-0.51l-1.1,-3.45l1.0,-0.25l6.58,2.28l0.47,-0.16l-0.05,-0.49l-3.41,-3.45l-3.58,-0.98l1.48,-1.55l4.34,-1.29l0.97,-2.19l-0.16,-0.48l-3.42,-2.13l-0.81,-2.26l6.2,0.22l2.24,0.58l3.91,-2.1l0.2,-0.43l-0.35,-0.32l-5.64,-0.67l-8.73,0.36l-4.26,-1.9l-2.12,-2.4l-2.78,-1.66l-0.41,-1.52l3.31,-1.03l2.93,-0.2l4.91,-0.99l3.7,-2.27l2.87,0.3l2.62,1.67l0.56,-0.14l1.82,-3.2l3.13,-0.94l4.44,-0.69l7.53,-0.26l1.48,0.67l7.19,-1.06l10.8,0.79ZM203.85,57.54l0.01,0.42l1.97,2.97l0.68,-0.02l2.24,-3.72l5.95,-1.86l4.01,4.64l-0.35,2.91l0.5,0.43l4.95,-1.36l2.32,-1.8l5.31,2.28l3.27,2.11l0.3,1.84l0.48,0.33l4.42,-0.99l2.64,2.87l5.97,1.77l2.06,1.72l2.11,3.71l-4.19,1.86l-0.01,0.73l5.9,2.83l3.94,0.94l3.78,3.95l3.46,0.25l-0.63,2.37l-4.11,4.47l-2.76,-1.56l-3.9,-3.94l-3.59,0.41l-0.33,0.34l-0.19,2.72l2.63,2.38l3.42,1.89l0.94,0.97l1.55,3.75l-0.7,2.29l-2.74,-0.92l-6.25,-3.15l-0.51,0.13l0.05,0.52l6.07,5.69l0.18,0.59l-6.09,-1.39l-5.31,-2.24l-2.63,-1.66l0.6,-0.77l-0.12,-0.6l-7.39,-4.01l-0.59,0.37l0.03,0.79l-6.73,0.6l-1.69,-1.1l1.36,-2.46l4.51,-0.07l5.15,-0.52l0.31,-0.6l-0.74,-1.3l0.78,-1.84l3.21,-4.05l-0.67,-2.35l-1.11,-1.6l-3.84,-2.1l-4.35,-1.28l0.91,-0.63l0.06,-0.61l-2.65,-2.75l-2.34,-0.36l-1.89,-1.46l-0.53,0.03l-1.24,1.23l-4.36,0.55l-9.04,-0.99l-9.26,-1.98l-1.6,-1.22l2.22,-1.77l0.13,-0.44l-0.38,-0.27l-3.22,-0.02l-0.72,-4.25l1.83,-4.04l2.42,-1.85l5.5,-1.1l-1.39,2.35ZM261.19,159.33l2.07,0.61l1.44,-0.04l-1.15,0.63l-2.94,-1.23l-0.4,-0.68l0.36,-0.37l0.61,1.07ZM230.83,84.39l-2.37,0.18l-0.49,-1.63l0.93,-2.09l1.94,-0.51l1.62,0.99l0.02,1.52l-1.66,1.54ZM229.43,58.25l0.11,0.65l-4.87,-0.21l-2.72,0.62l-3.1,-2.57l0.08,-1.26l0.86,-0.23l5.57,0.51l4.08,2.5ZM222.0,105.02l-0.72,1.49l-0.63,-0.19l-0.48,-0.84l0.81,-0.99l0.65,0.05l0.37,0.46ZM183.74,38.32l2.9,1.7l4.79,-0.01l1.84,1.46l-0.49,1.68l0.23,0.48l2.82,1.14l1.76,1.26l7.01,0.65l4.1,-1.1l5.03,-0.43l3.93,0.35l2.48,1.77l0.46,1.7l-1.3,1.1l-3.56,1.01l-3.23,-0.59l-7.17,0.76l-5.09,0.09l-3.99,-0.6l-6.42,-1.54l-0.79,-2.51l-0.3,-2.49l-2.64,-2.5l-5.32,-0.72l-2.52,-1.4l0.68,-1.57l4.78,0.31ZM207.38,91.35l0.4,1.56l0.56,0.26l1.06,-0.52l1.32,0.96l5.42,2.57l0.2,1.68l0.46,0.35l1.68,-0.28l1.15,0.85l-1.55,0.87l-3.61,-0.88l-1.32,-1.69l-0.57,-0.06l-2.45,2.1l-3.12,1.79l-0.7,-1.87l-0.42,-0.26l-2.16,0.24l1.39,-1.39l0.32,-3.14l0.76,-3.35l1.18,0.22ZM215.49,102.6l-2.67,1.95l-1.4,-0.07l-0.3,-0.58l1.53,-1.48l2.84,0.18ZM202.7,24.12l2.53,1.59l-2.87,1.4l-4.53,4.05l-4.25,0.38l-5.03,-0.68l-2.45,-2.04l0.03,-1.62l1.82,-1.37l0.14,-0.45l-0.38,-0.27l-4.45,0.04l-2.59,-1.76l-1.41,-2.29l1.57,-2.32l1.62,-1.66l2.44,-0.39l0.25,-0.65l-0.6,-0.74l4.86,-0.25l3.24,3.11l8.16,2.3l1.9,3.61ZM187.47,59.2l-2.76,3.49l-2.38,-0.15l-1.44,-3.84l0.04,-2.2l1.19,-1.88l2.3,-1.23l5.07,0.17l4.11,1.02l-3.24,3.72l-2.88,0.89ZM186.07,48.79l-1.08,1.53l-3.34,-0.34l-2.56,-1.1l1.03,-1.75l3.25,-1.23l1.95,1.58l0.75,1.3ZM185.71,35.32l-5.3,-0.2l-0.32,-0.71l4.31,0.07l1.3,0.84ZM180.68,32.48l-3.34,1.0l-1.79,-1.1l-0.98,-1.87l-0.15,-1.73l4.1,0.53l2.67,1.7l-0.51,1.47ZM180.9,76.31l-1.1,1.08l-3.13,-1.23l-2.12,0.43l-2.71,-1.57l1.72,-1.09l1.55,-1.72l3.81,1.9l1.98,2.2ZM169.74,54.87l2.96,0.97l4.17,-0.57l0.41,0.88l-2.14,2.11l0.09,0.64l3.55,1.92l-0.4,3.72l-3.79,1.65l-2.17,-0.35l-1.72,-1.74l-6.02,-3.5l0.03,-0.85l4.68,0.54l0.4,-0.21l-0.05,-0.45l-2.48,-2.81l2.46,-1.95ZM174.45,40.74l1.37,1.73l0.07,2.44l-1.05,3.45l-3.79,0.47l-2.32,-0.69l0.05,-2.64l-0.44,-0.41l-3.68,0.35l-0.12,-3.1l2.45,0.1l3.67,-1.73l3.41,0.29l0.37,-0.26ZM170.05,31.55l0.67,1.56l-3.33,-0.49l-4.22,-1.77l-4.35,-0.16l1.4,-0.94l-0.06,-0.7l-2.81,-1.23l-0.12,-1.39l4.39,0.68l6.62,1.98l1.81,2.47ZM134.5,58.13l-1.02,1.82l0.45,0.58l5.4,-1.39l3.33,2.29l0.49,-0.03l2.6,-2.23l1.94,1.32l2.0,4.5l0.7,0.06l1.3,-2.29l-1.63,-4.46l1.69,-0.54l2.31,0.71l2.65,1.81l2.49,7.92l8.48,4.27l-0.19,1.35l-3.79,0.33l-0.26,0.67l1.4,1.49l-0.58,1.1l-4.23,-0.64l-4.43,-1.19l-3.0,0.28l-4.66,1.47l-10.52,1.04l-1.43,-2.02l-3.42,-1.2l-2.21,0.43l-2.51,-2.86l4.84,-1.05l3.6,0.19l3.27,-0.78l0.31,-0.39l-0.31,-0.39l-4.84,-1.06l-8.79,0.27l-0.85,-1.07l5.26,-1.66l0.27,-0.45l-0.4,-0.34l-3.8,0.06l-3.81,-1.06l1.81,-3.01l1.66,-1.79l6.48,-2.81l1.97,0.71ZM158.7,56.61l-1.7,2.44l-3.2,-2.75l0.37,-0.3l3.11,-0.18l1.42,0.79ZM149.61,42.73l1.01,1.89l0.5,0.18l2.14,-0.82l2.23,0.19l0.36,2.04l-1.33,2.09l-8.28,0.76l-6.35,2.15l-3.41,0.1l-0.19,-0.96l4.9,-2.08l0.23,-0.46l-0.41,-0.31l-11.25,0.59l-2.89,-0.74l3.04,-4.44l2.14,-1.32l6.81,1.69l4.58,3.06l4.37,0.39l0.36,-0.63l-3.36,-4.6l1.85,-1.53l2.18,0.51l0.77,2.26ZM144.76,34.41l-4.36,1.44l-3.0,-1.4l1.46,-1.24l3.47,-0.52l2.96,0.71l-0.52,1.01ZM145.13,29.83l-1.9,0.66l-3.67,-0.0l2.27,-1.61l3.3,0.95ZM118.92,65.79l-6.03,2.02l-1.33,-1.9l-5.38,-2.28l2.59,-5.05l2.16,-3.14l-0.02,-0.48l-1.97,-2.41l7.64,-0.7l3.6,1.02l6.3,0.27l4.42,2.95l-2.53,0.98l-6.24,3.43l-3.1,3.28l-0.11,2.01ZM129.54,35.53l-0.28,3.37l-1.72,1.62l-2.33,0.28l-4.61,2.19l-3.86,0.76l-2.64,-0.87l3.72,-3.4l5.01,-3.34l3.72,0.07l3.0,-0.67ZM111.09,152.69l-0.67,0.24l-3.85,-1.37l-0.83,-1.17l-2.12,-1.07l-0.66,-1.02l-2.4,-0.55l-0.74,-1.71l6.02,1.45l2.0,2.55l2.52,1.39l0.73,1.27ZM87.8,134.64l0.89,0.29l1.86,-0.21l-0.65,3.34l1.69,2.33l-1.31,-1.33l-0.99,-1.62l-1.17,-0.98l-0.33,-1.82Z",
            name: "Canada"
        },
        CG: {
            path: "M466.72,276.48l-0.1,1.03l-1.25,2.97l-0.19,3.62l-0.46,1.78l-0.23,0.63l-1.61,1.19l-1.21,1.39l-1.09,2.43l0.04,2.09l-3.25,3.24l-0.5,-0.24l-0.5,-0.83l-1.36,-0.02l-0.98,0.89l-1.68,-0.99l-1.54,1.24l-1.52,-1.96l1.57,-1.14l0.11,-0.52l-0.77,-1.35l2.1,-0.66l0.39,-0.73l1.05,0.82l2.21,0.11l1.12,-1.37l0.37,-1.81l-0.27,-2.09l-1.13,-1.5l1.0,-2.69l-0.13,-0.45l-0.92,-0.58l-1.6,0.17l-0.51,-0.94l0.1,-0.61l2.75,0.09l3.97,1.24l0.51,-0.33l0.17,-1.28l1.24,-2.21l1.28,-1.14l2.76,0.49Z",
            name: "Congo"
        },
        CF: {
            path: "M461.16,278.2l-0.26,-1.19l-1.09,-0.77l-0.84,-1.17l-0.29,-1.0l-1.04,-1.15l0.08,-3.43l0.58,-0.49l1.16,-2.35l1.85,-0.17l0.61,-0.62l0.97,0.58l3.15,-0.96l2.48,-1.92l0.02,-0.96l2.81,0.02l2.36,-1.17l1.93,-2.85l1.16,-0.93l1.11,-0.3l0.27,0.86l1.34,1.47l-0.39,2.01l0.3,1.01l4.01,2.75l0.17,0.93l2.63,2.31l0.6,1.44l2.08,1.4l-3.84,-0.21l-1.94,0.88l-1.23,-0.49l-2.67,1.2l-1.29,-0.18l-0.51,0.36l-0.6,1.22l-3.35,-0.65l-1.57,-0.91l-2.42,-0.83l-1.45,0.91l-0.97,1.27l-0.26,1.56l-3.22,-0.43l-1.49,1.33l-0.94,1.62Z",
            name: "Central African Rep."
        },
        CD: {
            path: "M487.01,272.38l2.34,-0.14l1.35,1.84l1.34,0.45l0.86,-0.39l1.21,0.12l1.07,-0.41l0.54,0.89l2.04,1.54l-0.14,2.72l0.7,0.54l-1.38,1.13l-1.53,2.54l-0.17,2.05l-0.59,1.08l-0.02,1.72l-0.72,0.84l-0.66,3.01l0.63,1.32l-0.44,4.26l0.64,1.47l-0.37,1.22l0.86,1.8l1.53,1.41l0.3,1.26l0.44,0.5l-4.08,0.75l-0.92,1.81l0.51,1.34l-0.74,5.43l0.17,0.38l2.45,1.46l0.54,-0.1l0.12,1.62l-1.28,-0.01l-1.85,-2.35l-1.94,-0.45l-0.48,-1.13l-0.55,-0.2l-1.41,0.74l-1.71,-0.3l-1.01,-1.18l-2.49,-0.19l-0.44,-0.77l-1.98,-0.21l-2.88,0.36l0.11,-2.41l-0.85,-1.13l-0.16,-1.36l0.32,-1.73l-0.46,-0.89l-0.04,-1.49l-0.4,-0.39l-2.53,0.02l0.1,-0.41l-0.39,-0.49l-1.28,0.01l-0.43,0.45l-1.62,0.32l-0.83,1.79l-1.09,-0.28l-2.4,0.52l-1.37,-1.91l-1.3,-3.3l-0.38,-0.27l-7.39,-0.03l-2.46,0.42l0.5,-0.45l0.37,-1.47l0.66,-0.38l0.92,0.08l0.73,-0.82l0.87,0.02l0.31,0.68l1.4,0.36l3.59,-3.63l0.01,-2.23l1.02,-2.29l2.69,-2.39l0.43,-0.99l0.49,-1.96l0.17,-3.51l1.25,-2.95l0.36,-3.14l0.86,-1.13l1.1,-0.66l3.57,1.73l3.65,0.73l0.46,-0.21l0.8,-1.46l1.24,0.19l2.61,-1.17l0.81,0.44l1.04,-0.03l0.59,-0.66l0.7,-0.16l1.81,0.25Z",
            name: "Dem. Rep. Congo"
        },
        CZ: {
            path: "M458.46,144.88l1.22,1.01l1.47,0.23l0.13,0.93l1.36,0.68l0.54,-0.2l0.24,-0.55l1.15,0.25l0.53,1.09l1.68,0.18l0.6,0.84l-1.04,0.73l-0.96,1.28l-1.6,0.17l-0.55,0.56l-1.04,-0.46l-1.05,0.15l-2.12,-0.96l-1.05,0.34l-1.2,1.12l-1.56,-0.87l-2.57,-2.1l-0.53,-1.88l4.7,-2.52l0.71,0.26l0.9,-0.28Z",
            name: "Czech Rep."
        },
        CY: {
            path: "M504.36,193.47l0.43,0.28l-1.28,0.57l-0.92,-0.28l-0.24,-0.46l2.01,-0.13Z",
            name: "Cyprus"
        },
        CR: {
            path: "M211.34,258.05l0.48,0.99l1.6,1.6l-0.54,0.45l0.29,1.42l-0.25,1.19l-1.09,-0.59l-0.05,-1.25l-2.46,-1.42l-0.28,-0.77l-0.66,-0.45l-0.45,-0.0l-0.11,1.04l-1.32,-0.95l0.31,-1.3l-0.36,-0.6l0.31,-0.27l1.42,0.58l1.29,-0.14l0.56,0.56l0.74,0.17l0.55,-0.27Z",
            name: "Costa Rica"
        },
        CU: {
            path: "M221.21,227.25l1.27,1.02l2.19,-0.28l4.43,3.33l2.08,0.43l-0.1,0.38l0.36,0.5l1.75,0.1l1.48,0.84l-3.11,0.51l-4.15,-0.03l0.77,-0.67l-0.04,-0.64l-1.2,-0.74l-1.49,-0.16l-0.7,-0.61l-0.56,-1.4l-0.4,-0.25l-1.34,0.1l-2.2,-0.66l-0.88,-0.58l-3.18,-0.4l-0.27,-0.16l0.58,-0.74l-0.36,-0.29l-2.72,-0.05l-1.7,1.29l-0.91,0.03l-0.61,0.69l-1.01,0.22l1.11,-1.29l1.01,-0.52l3.69,-1.01l3.98,0.21l2.21,0.84Z",
            name: "Cuba"
        },
        SZ: {
            path: "M500.35,351.36l0.5,2.04l-0.38,0.89l-1.05,0.21l-1.23,-1.2l-0.02,-0.64l0.83,-1.57l1.34,0.27Z",
            name: "Swaziland"
        },
        SY: {
            path: "M511.0,199.79l0.05,-1.33l0.54,-1.36l1.28,-0.99l0.13,-0.45l-0.41,-1.11l-1.14,-0.36l-0.19,-1.74l0.52,-1.0l1.29,-1.21l0.2,-1.18l0.59,0.23l2.62,-0.76l1.36,0.52l2.06,-0.01l2.95,-1.08l3.25,-0.26l-0.67,0.94l-1.28,0.66l-0.21,0.4l0.23,2.01l-0.88,3.19l-10.15,5.73l-2.15,-0.85Z",
            name: "Syria"
        },
        KG: {
            path: "M621.35,172.32l-3.87,1.69l-0.96,1.18l-3.04,0.34l-1.13,1.86l-2.36,-0.35l-1.99,0.63l-2.39,1.4l0.06,0.95l-0.4,0.37l-4.52,0.43l-3.02,-0.93l-2.37,0.17l0.11,-0.79l2.32,0.42l1.13,-0.88l1.99,0.2l3.21,-2.14l-0.03,-0.69l-2.97,-1.57l-1.94,0.65l-1.22,-0.74l1.71,-1.58l-0.12,-0.67l-0.36,-0.15l0.32,-0.77l1.36,-0.35l4.02,1.02l0.49,-0.3l0.35,-1.59l1.09,-0.48l3.42,1.22l1.11,-0.31l7.64,0.39l1.16,1.0l1.23,0.39Z",
            name: "Kyrgyzstan"
        },
        KE: {
            path: "M506.26,284.69l1.87,-2.56l0.93,-2.15l-1.38,-4.08l-1.06,-1.6l2.82,-2.75l0.79,0.26l0.12,1.41l0.86,0.83l1.9,0.11l3.28,2.13l3.57,0.44l1.05,-1.12l1.96,-0.9l0.82,0.68l1.16,0.09l-1.78,2.45l0.03,9.12l1.3,1.94l-1.37,0.78l-0.67,1.03l-1.08,0.46l-0.34,1.67l-0.81,1.07l-0.45,1.55l-0.68,0.56l-3.2,-2.23l-0.35,-1.58l-8.86,-4.98l0.14,-1.6l-0.57,-1.04Z",
            name: "Kenya"
        },
        SS: {
            path: "M481.71,263.34l1.07,-0.72l1.2,-3.18l1.36,-0.26l1.61,1.99l0.87,0.34l1.1,-0.41l1.5,0.07l0.57,0.53l2.49,0.0l0.44,-0.63l1.07,-0.4l0.45,-0.84l0.59,-0.33l1.9,1.33l1.6,-0.2l2.83,-3.33l-0.32,-2.21l1.59,-0.52l-0.24,1.6l0.3,1.83l1.35,1.18l0.2,1.87l0.35,0.41l0.02,1.53l-0.23,0.47l-1.42,0.25l-0.85,1.44l0.3,0.6l1.4,0.16l1.11,1.08l0.59,1.13l1.03,0.53l1.28,2.36l-4.41,3.98l-1.74,0.01l-1.89,0.55l-1.47,-0.52l-1.15,0.57l-2.96,-2.62l-1.3,0.49l-1.06,-0.15l-0.79,0.39l-0.82,-0.22l-1.8,-2.7l-1.91,-1.1l-0.66,-1.5l-2.62,-2.32l-0.18,-0.94l-2.37,-1.6Z",
            name: "S. Sudan"
        },
        SR: {
            path: "M283.12,270.19l2.1,0.53l-1.08,1.95l0.2,1.72l0.93,1.49l-0.59,2.03l-0.43,0.71l-1.12,-0.42l-1.32,0.22l-0.93,-0.2l-0.46,0.26l-0.25,0.73l0.33,0.7l-0.89,-0.13l-1.39,-1.97l-0.31,-1.34l-0.97,-0.31l-0.89,-1.47l0.35,-1.61l1.45,-0.82l0.33,-1.87l2.61,0.44l0.57,-0.47l1.75,-0.16Z",
            name: "Suriname"
        },
        KH: {
            path: "M689.52,249.39l0.49,1.45l-0.28,2.74l-4.0,1.86l-0.16,0.6l0.68,0.95l-2.06,0.17l-2.05,0.97l-1.82,-0.32l-2.12,-3.7l-0.55,-2.85l1.4,-1.85l3.02,-0.45l2.23,0.35l2.01,0.98l0.51,-0.14l0.95,-1.48l1.74,0.74Z",
            name: "Cambodia"
        },
        SV: {
            path: "M195.8,250.13l1.4,-1.19l2.24,1.45l0.98,-0.27l0.44,0.2l-0.27,1.05l-1.14,-0.03l-3.64,-1.21Z",
            name: "El Salvador"
        },
        SK: {
            path: "M476.82,151.17l-1.14,1.9l-2.73,-0.92l-0.82,0.2l-0.74,0.8l-3.46,0.73l-0.47,0.69l-1.76,0.33l-1.88,-1.0l-0.18,-0.81l0.38,-0.75l1.87,-0.32l1.74,-1.89l0.83,0.16l0.79,-0.34l1.51,1.04l1.34,-0.63l1.25,0.3l1.65,-0.42l1.81,0.95Z",
            name: "Slovakia"
        },
        KR: {
            path: "M737.51,185.84l0.98,-0.1l0.87,-1.17l2.69,-0.32l0.33,-0.29l1.76,2.79l0.58,1.76l0.02,3.12l-0.8,1.32l-2.21,0.55l-1.93,1.13l-1.8,0.19l-0.2,-1.1l0.43,-2.28l-0.95,-2.56l1.43,-0.37l0.23,-0.62l-1.43,-2.06Z",
            name: "Korea"
        },
        SI: {
            path: "M456.18,162.07l-0.51,-1.32l0.18,-1.05l1.69,0.2l1.42,-0.71l2.09,-0.07l0.62,-0.51l0.21,0.47l-1.61,0.67l-0.44,1.34l-0.66,0.24l-0.26,0.82l-1.22,-0.49l-0.84,0.46l-0.69,-0.04Z",
            name: "Slovenia"
        },
        KP: {
            path: "M736.77,185.16l-0.92,-0.42l-0.88,0.62l-1.21,-0.88l0.96,-1.15l0.59,-2.59l-0.46,-0.74l-2.09,-0.77l1.64,-1.52l2.72,-1.58l1.58,-1.91l1.11,0.78l2.17,0.11l0.41,-0.5l-0.3,-1.22l3.52,-1.18l0.94,-1.4l0.98,1.08l-2.19,2.18l0.01,2.14l-1.06,0.54l-1.41,1.4l-1.7,0.52l-1.25,1.09l-0.14,1.98l0.94,0.45l1.15,1.04l-0.13,0.26l-2.6,0.29l-1.13,1.29l-1.22,0.08Z",
            name: "Dem. Rep. Korea"
        },
        KW: {
            path: "M540.81,207.91l0.37,0.86l-0.17,0.76l0.6,1.53l-0.95,0.04l-0.82,-1.28l-1.57,-0.18l1.31,-1.88l1.22,0.17Z",
            name: "Kuwait"
        },
        SN: {
            path: "M390.09,248.21l0.12,1.55l0.49,1.46l0.96,0.82l0.05,1.28l-1.26,-0.19l-0.75,0.33l-1.84,-0.61l-5.84,-0.13l-2.54,0.51l-0.22,-1.03l1.77,0.04l2.01,-0.91l1.03,0.48l1.09,0.04l1.29,-0.62l0.14,-0.58l-0.51,-0.74l-1.81,0.25l-1.13,-0.63l-0.79,0.04l-0.72,0.61l-2.31,0.06l-0.92,-1.77l-0.81,-0.64l0.64,-0.35l2.46,-3.74l1.04,0.19l1.38,-0.56l1.19,-0.02l2.72,1.37l3.03,3.48Z",
            name: "Senegal"
        },
        SL: {
            path: "M394.46,264.11l-1.73,1.98l-0.58,1.33l-2.07,-1.06l-1.22,-1.26l-0.65,-2.39l1.16,-0.96l0.67,-1.17l1.21,-0.52l1.66,0.0l1.03,1.64l0.52,2.41Z",
            name: "Sierra Leone"
        },
        KZ: {
            path: "M552.8,172.89l0.46,-1.27l-0.48,-1.05l-2.96,-1.19l-1.06,-2.58l-1.37,-0.87l-0.03,-0.3l1.95,0.23l0.45,-0.38l0.08,-1.96l1.75,-0.41l2.1,0.45l0.48,-0.33l0.45,-3.04l-0.45,-2.09l-0.41,-0.31l-2.42,0.15l-2.36,-0.73l-2.87,1.37l-2.17,0.61l-0.85,-0.34l0.13,-1.61l-1.6,-2.12l-2.02,-0.08l-1.78,-1.82l1.29,-2.18l-0.57,-0.95l1.62,-2.91l2.21,1.63l0.63,-0.27l0.29,-2.22l4.92,-3.43l3.71,-0.08l8.4,3.6l2.92,-1.36l3.77,-0.06l3.11,1.66l0.51,-0.11l0.6,-0.81l3.31,0.13l0.39,-0.25l0.63,-1.57l-0.17,-0.5l-3.5,-1.98l1.87,-1.27l-0.13,-1.03l1.98,-0.72l0.18,-0.62l-1.59,-2.06l0.81,-0.82l9.23,-1.18l1.33,-0.88l6.18,-1.26l2.26,-1.42l4.08,0.68l0.73,3.33l0.51,0.3l2.48,-0.8l2.79,1.02l-0.17,1.56l0.43,0.44l2.55,-0.24l4.89,-2.53l0.03,0.32l3.15,2.61l5.56,8.47l0.65,0.02l1.12,-1.46l3.15,1.74l3.76,-0.78l1.15,0.49l1.14,1.8l1.84,0.76l0.99,1.29l3.35,-0.25l1.02,1.52l-1.6,1.81l-1.93,0.28l-0.34,0.38l-0.11,3.05l-1.13,1.16l-4.75,-1.0l-0.46,0.27l-1.76,5.47l-1.1,0.59l-4.91,1.23l-0.27,0.54l2.1,4.97l-1.37,0.63l-0.23,0.41l0.13,1.13l-0.88,-0.25l-1.42,-1.13l-7.89,-0.4l-0.92,0.31l-3.73,-1.22l-1.42,0.63l-0.53,1.66l-3.72,-0.94l-1.85,0.43l-0.76,1.4l-4.65,2.62l-1.13,2.08l-0.44,0.01l-0.92,-1.4l-2.87,-0.09l-0.45,-2.14l-0.38,-0.32l-0.8,-0.01l0.0,-2.96l-3.0,-2.22l-7.31,0.58l-2.35,-2.68l-6.71,-3.69l-6.45,1.83l-0.29,0.39l0.1,10.85l-0.7,0.08l-1.62,-2.17l-1.83,-0.96l-3.11,0.59l-0.64,0.51Z",
            name: "Kazakhstan"
        },
        SA: {
            path: "M537.53,210.34l2.0,0.24l0.9,1.32l1.49,-0.06l0.87,2.08l1.29,0.76l0.51,0.99l1.56,1.03l-0.1,1.9l0.32,0.9l1.58,2.47l0.76,0.53l0.7,-0.04l1.68,4.23l7.53,1.33l0.51,-0.29l0.77,1.25l-1.55,4.87l-7.29,2.52l-7.3,1.03l-2.34,1.17l-1.88,2.74l-0.76,0.28l-0.82,-0.78l-0.91,0.12l-2.88,-0.51l-3.51,0.25l-0.86,-0.56l-0.57,0.15l-0.66,1.27l0.16,1.11l-0.43,0.32l-0.93,-1.4l-0.33,-1.16l-1.23,-0.88l-1.27,-2.06l-0.78,-2.22l-1.73,-1.79l-1.14,-0.48l-1.54,-2.31l-0.21,-3.41l-1.44,-2.93l-1.27,-1.16l-1.33,-0.57l-1.31,-3.37l-0.77,-0.67l-0.97,-1.97l-2.8,-4.03l-1.06,-0.17l0.37,-1.96l0.2,-0.72l2.74,0.3l1.08,-0.84l0.6,-0.94l1.74,-0.35l0.65,-1.03l0.71,-0.4l0.1,-0.62l-2.06,-2.28l4.39,-1.22l0.48,-0.37l2.77,0.69l3.66,1.9l7.03,5.5l4.87,0.3Z",
            name: "Saudi Arabia"
        },
        SE: {
            path: "M480.22,89.3l-4.03,1.17l-2.43,2.86l0.26,2.57l-8.77,6.64l-1.78,5.79l1.78,2.68l2.22,1.96l-2.07,3.77l-2.72,1.13l-0.95,6.04l-1.29,3.01l-2.74,-0.31l-0.4,0.22l-1.31,2.59l-2.34,0.13l-0.75,-3.09l-2.08,-4.03l-1.83,-4.96l1.0,-1.93l2.14,-2.7l0.83,-4.45l-1.6,-2.17l-0.15,-4.94l1.48,-3.39l2.58,-0.15l0.87,-1.59l-0.78,-1.57l3.76,-5.59l4.04,-7.48l2.17,0.01l0.39,-0.29l0.57,-2.07l4.37,0.64l0.46,-0.34l0.33,-2.56l1.1,-0.13l6.94,4.87l0.06,6.32l0.66,1.36Z",
            name: "Sweden"
        },
        SD: {
            path: "M505.98,259.4l-0.34,-0.77l-1.17,-0.9l-0.26,-1.61l0.29,-1.81l-0.34,-0.46l-1.16,-0.17l-0.54,0.59l-1.23,0.11l-0.28,0.65l0.53,0.65l0.17,1.22l-2.44,3.0l-0.96,0.19l-2.39,-1.4l-0.95,0.52l-0.38,0.78l-1.11,0.41l-0.29,0.5l-1.94,0.0l-0.54,-0.52l-1.81,-0.09l-0.95,0.4l-2.45,-2.35l-2.07,0.54l-0.73,1.26l-0.6,2.1l-1.25,0.58l-0.75,-0.62l0.27,-2.65l-1.48,-1.78l-0.22,-1.48l-0.92,-0.96l-0.02,-1.29l-0.57,-1.16l-0.68,-0.16l0.69,-1.29l-0.18,-1.14l0.65,-0.62l0.03,-0.55l-0.36,-0.41l1.55,-2.97l1.91,0.16l0.43,-0.4l-0.1,-10.94l2.49,-0.01l0.4,-0.4l-0.0,-4.82l29.02,0.0l0.64,2.04l-0.49,0.66l0.36,2.69l0.93,3.16l2.12,1.55l-0.89,1.04l-1.72,0.39l-0.98,0.9l-1.43,5.65l0.24,1.15l-0.38,2.06l-0.96,2.38l-1.53,1.31l-1.32,2.91l-1.22,0.86l-0.37,1.34Z",
            name: "Sudan"
        },
        DO: {
            path: "M241.8,239.2l0.05,-0.65l-0.46,-0.73l0.42,-0.44l0.19,-1.0l-0.09,-1.53l1.66,0.01l1.99,0.63l0.33,0.67l1.28,0.19l0.33,0.76l1.0,0.08l0.8,0.62l-0.45,0.51l-1.13,-0.47l-1.88,-0.01l-1.27,0.59l-0.75,-0.55l-1.01,0.54l-0.79,1.4l-0.23,-0.61Z",
            name: "Dominican Rep."
        },
        DJ: {
            path: "M528.43,256.18l-0.45,0.66l-0.58,-0.25l-1.51,0.13l-0.18,-1.01l1.45,-1.95l0.83,0.17l0.77,-0.44l0.2,1.0l-1.2,0.51l-0.06,0.7l0.73,0.47Z",
            name: "Djibouti"
        },
        DK: {
            path: "M452.28,129.07l-1.19,2.24l-2.13,-1.6l-0.23,-0.95l2.98,-0.95l0.57,1.26ZM447.74,126.31l-0.26,0.57l-0.88,-0.07l-1.8,2.53l0.48,1.69l-1.09,0.36l-1.61,-0.39l-0.89,-1.69l-0.07,-3.43l0.96,-1.73l2.02,-0.2l1.09,-1.07l1.33,-0.67l-0.05,1.06l-0.73,1.41l0.3,1.0l1.2,0.64Z",
            name: "Denmark"
        },
        DE: {
            path: "M453.14,155.55l-0.55,-0.36l-1.2,-0.1l-1.87,0.57l-2.13,-0.13l-0.56,0.63l-0.86,-0.6l-0.96,0.09l-2.57,-0.93l-0.85,0.67l-1.47,-0.02l0.24,-1.75l1.23,-2.14l-0.28,-0.59l-3.52,-0.58l-0.92,-0.66l0.12,-1.2l-0.48,-0.88l0.27,-2.17l-0.37,-3.03l1.41,-0.22l0.63,-1.26l0.66,-3.19l-0.41,-1.18l0.26,-0.39l1.66,-0.15l0.33,0.54l0.62,0.07l1.7,-1.69l-0.54,-3.02l1.37,0.33l1.31,-0.37l0.31,1.18l2.25,0.71l-0.02,0.92l0.5,0.4l2.55,-0.65l1.34,-0.87l2.57,1.24l1.06,0.98l0.48,1.44l-0.57,0.74l-0.0,0.48l0.87,1.15l0.57,1.64l-0.14,1.29l0.82,1.7l-1.5,-0.07l-0.56,0.57l-4.47,2.15l-0.22,0.54l0.68,2.26l2.58,2.16l-0.66,1.11l-0.79,0.36l-0.23,0.43l0.32,1.87Z",
            name: "Germany"
        },
        YE: {
            path: "M528.27,246.72l0.26,-0.42l-0.22,-1.01l0.19,-1.5l0.92,-0.69l-0.07,-1.35l0.39,-0.75l1.01,0.47l3.34,-0.27l3.76,0.41l0.95,0.81l1.36,-0.58l1.74,-2.62l2.18,-1.09l6.86,-0.94l2.48,5.41l-1.64,0.76l-0.56,1.9l-6.23,2.16l-2.29,1.8l-1.93,0.05l-1.41,1.02l-4.24,0.74l-1.72,1.49l-3.28,0.19l-0.52,-1.18l0.02,-1.51l-1.34,-3.29Z",
            name: "Yemen"
        },
        DZ: {
            path: "M441.46,188.44l-0.32,1.07l0.39,2.64l-0.54,2.16l-1.58,1.82l0.37,2.39l1.91,1.55l0.18,0.8l1.42,1.03l1.84,7.23l0.12,1.16l-0.57,5.0l0.2,1.51l-0.87,0.99l-0.02,0.51l1.41,1.86l0.14,1.2l0.89,1.48l0.5,0.16l0.98,-0.41l1.73,1.08l0.82,1.23l-8.22,4.81l-7.23,5.11l-3.43,1.13l-2.3,0.21l-0.28,-1.59l-2.56,-1.09l-0.67,-1.25l-26.12,-17.86l0.01,-3.47l3.77,-1.88l2.44,-0.41l2.12,-0.75l1.08,-1.42l2.81,-1.05l0.35,-2.08l1.33,-0.29l1.04,-0.94l3.47,-0.69l0.46,-1.08l-0.1,-0.45l-0.58,-0.52l-0.82,-2.81l-0.19,-1.83l-0.78,-1.49l2.03,-1.31l2.63,-0.48l1.7,-1.22l2.31,-0.84l8.24,-0.73l1.49,0.38l2.28,-1.1l2.46,-0.02l0.92,0.6l1.35,-0.05Z",
            name: "Algeria"
        },
        US: {
            path: "M892.72,99.2l1.31,0.53l1.41,-0.37l1.89,0.98l1.89,0.42l-1.32,0.58l-2.9,-1.53l-2.08,0.22l-0.26,-0.15l0.07,-0.67ZM183.22,150.47l0.37,1.47l1.12,0.85l4.23,0.7l2.39,0.98l2.17,-0.38l1.85,0.5l-1.55,0.65l-3.49,2.61l-0.16,0.77l0.5,0.39l2.33,-0.61l1.77,1.02l5.15,-2.4l-0.31,0.65l0.25,0.56l1.36,0.38l1.71,1.16l4.7,-0.88l0.67,0.85l1.31,0.21l0.58,0.58l-1.34,0.17l-2.18,-0.32l-3.6,0.89l-2.71,3.25l0.35,0.9l0.59,-0.0l0.55,-0.6l-1.36,4.65l0.29,3.09l0.67,1.58l0.61,0.45l1.77,-0.44l1.6,-1.96l0.14,-2.21l-0.82,-1.96l0.11,-1.13l1.19,-2.37l0.44,-0.33l0.48,0.75l0.4,-0.29l0.4,-1.37l0.6,-0.47l0.24,-0.8l1.69,0.49l1.65,1.08l-0.03,2.37l-1.27,1.13l-0.0,1.13l0.87,0.36l1.66,-1.29l0.5,0.17l0.5,2.6l-2.49,3.75l0.17,0.61l1.54,0.62l1.48,0.17l1.92,-0.44l4.72,-2.15l2.16,-1.8l-0.05,-1.24l0.75,-0.22l3.92,0.36l2.12,-1.05l0.21,-0.4l-0.28,-1.48l3.27,-2.4l8.32,-0.02l0.56,-0.82l1.9,-0.77l0.93,-1.51l0.74,-2.37l1.58,-1.98l0.92,0.62l1.47,-0.47l0.8,0.66l-0.0,4.09l1.96,2.6l-2.34,1.31l-5.37,2.09l-1.83,2.72l0.02,1.79l0.83,1.59l0.54,0.23l-6.19,0.94l-2.2,0.89l-0.23,0.48l0.45,0.29l2.99,-0.46l-2.19,0.56l-1.13,0.0l-0.15,-0.32l-0.48,0.08l-0.76,0.82l0.22,0.67l0.32,0.06l-0.41,1.62l-1.27,1.58l-1.48,-1.07l-0.49,-0.04l-0.16,0.46l0.52,1.58l0.61,0.59l0.03,0.79l-0.95,1.38l-1.21,-1.22l-0.27,-2.27l-0.35,-0.35l-0.42,0.25l-0.48,1.27l0.33,1.41l-0.97,-0.27l-0.48,0.24l0.18,0.5l1.52,0.83l0.1,2.52l0.79,0.51l0.52,3.42l-1.42,1.88l-2.47,0.8l-1.71,1.66l-1.31,0.25l-1.27,1.03l-0.43,0.99l-2.69,1.78l-2.64,3.03l-0.45,2.12l0.45,2.08l0.85,2.38l1.09,1.9l0.04,1.2l1.16,3.06l-0.18,2.69l-0.55,1.43l-0.47,0.21l-0.89,-0.23l-0.49,-1.18l-0.87,-0.56l-2.75,-5.16l0.48,-1.68l-0.72,-1.78l-2.01,-2.38l-1.12,-0.53l-2.72,1.18l-1.47,-1.35l-1.57,-0.68l-2.99,0.31l-2.17,-0.3l-2.0,0.19l-1.15,0.46l-0.19,0.58l0.39,0.63l0.14,1.34l-0.84,-0.2l-0.84,0.46l-1.58,-0.07l-2.08,-1.44l-2.09,0.33l-1.91,-0.62l-3.73,0.84l-2.39,2.07l-2.54,1.22l-1.45,1.41l-0.61,1.38l0.34,3.71l-0.29,0.02l-3.5,-1.33l-1.25,-3.11l-1.44,-1.5l-2.24,-3.56l-1.76,-1.09l-2.27,-0.01l-1.71,2.07l-1.76,-0.69l-1.16,-0.74l-1.52,-2.98l-3.93,-3.16l-4.34,-0.0l-0.4,0.4l-0.0,0.74l-6.5,0.02l-9.02,-3.14l-0.34,-0.71l-5.7,0.49l-0.43,-1.29l-1.62,-1.61l-1.14,-0.38l-0.55,-0.88l-1.28,-0.13l-1.01,-0.77l-2.22,-0.27l-0.43,-0.3l-0.36,-1.58l-2.4,-2.83l-2.01,-3.85l-0.06,-0.9l-2.92,-3.26l-0.33,-2.29l-1.3,-1.66l0.52,-2.37l-0.09,-2.57l-0.78,-2.3l0.95,-2.82l0.61,-5.68l-0.47,-4.27l-1.46,-4.08l3.19,0.79l1.26,2.83l0.69,0.08l0.69,-1.14l-1.1,-4.79l68.76,-0.0l0.4,-0.4l0.14,-0.86ZM32.44,67.52l1.73,1.97l0.55,0.05l0.99,-0.79l3.65,0.24l-0.09,0.62l0.32,0.45l3.83,0.77l2.61,-0.43l5.19,1.4l4.84,0.43l1.89,0.57l3.42,-0.7l6.14,1.87l-0.03,38.06l0.38,0.4l2.39,0.11l2.31,0.98l3.9,3.99l0.55,0.04l2.4,-2.03l2.16,-1.04l1.2,1.71l3.95,3.14l4.09,6.63l4.2,2.29l0.06,1.83l-1.02,1.23l-1.16,-1.08l-2.04,-1.03l-0.67,-2.89l-3.28,-3.03l-1.65,-3.57l-6.35,-0.32l-2.82,-1.01l-5.26,-3.85l-6.77,-2.04l-3.53,0.3l-4.81,-1.69l-3.25,-1.63l-2.78,0.8l-0.28,0.46l0.44,2.21l-3.91,0.96l-2.26,1.27l-2.3,0.65l-0.27,-1.65l1.05,-3.42l2.49,-1.09l0.16,-0.6l-0.69,-0.96l-0.55,-0.1l-3.19,2.12l-1.78,2.56l-3.55,2.61l-0.04,0.61l1.56,1.52l-2.07,2.29l-5.11,2.57l-0.77,1.66l-3.76,1.77l-0.92,1.73l-2.69,1.38l-1.81,-0.22l-6.95,3.32l-3.97,0.91l4.85,-2.5l2.59,-1.86l3.26,-0.52l1.19,-1.4l3.42,-2.1l2.59,-2.27l0.42,-2.68l1.23,-2.1l-0.04,-0.46l-0.45,-0.11l-2.68,1.03l-0.63,-0.49l-0.53,0.03l-1.05,1.04l-1.36,-1.54l-0.66,0.08l-0.32,0.62l-0.58,-1.14l-0.56,-0.16l-2.41,1.42l-1.07,-0.0l-0.17,-1.75l0.3,-1.71l-1.61,-1.33l-3.41,0.59l-1.96,-1.63l-1.57,-0.84l-0.15,-2.21l-1.7,-1.43l0.82,-1.88l1.99,-2.12l0.88,-1.92l1.71,-0.24l2.04,0.51l1.87,-1.77l1.91,0.25l1.91,-1.23l0.17,-0.43l-0.47,-1.82l-1.07,-0.7l1.39,-1.17l0.12,-0.45l-0.39,-0.26l-1.65,0.07l-2.66,0.88l-0.75,0.78l-1.92,-0.8l-3.46,0.44l-3.44,-0.91l-1.06,-1.61l-2.65,-1.99l2.91,-1.43l5.5,-2.0l1.52,0.0l-0.26,1.62l0.41,0.46l5.29,-0.16l0.3,-0.65l-2.03,-2.59l-3.14,-1.68l-1.79,-2.12l-2.4,-1.83l-3.09,-1.24l1.04,-1.69l4.23,-0.14l3.36,-2.07l0.73,-2.27l2.39,-1.99l2.42,-0.52l4.65,-1.97l2.46,0.23l3.71,-2.35l3.5,0.89ZM37.6,123.41l-2.25,1.23l-0.95,-0.69l-0.29,-1.24l3.21,-1.63l1.42,0.21l0.67,0.7l-1.8,1.42ZM31.06,234.03l0.98,0.47l0.74,0.87l-1.77,1.07l-0.44,-1.53l0.49,-0.89ZM29.34,232.07l0.18,0.05l0.08,0.05l-0.16,0.03l-0.11,-0.14ZM25.16,230.17l0.05,-0.03l0.18,0.22l-0.13,-0.01l-0.1,-0.18ZM5.89,113.26l-1.08,0.41l-2.21,-1.12l1.53,-0.4l1.62,0.28l0.14,0.83Z",
            name: "United States"
        },
        UY: {
            path: "M286.85,372.74l-0.92,1.5l-2.59,1.44l-1.69,-0.52l-1.42,0.26l-2.39,-1.19l-1.52,0.08l-1.27,-1.3l0.16,-1.5l0.56,-0.79l-0.02,-2.73l1.21,-4.74l1.19,-0.21l2.37,2.0l1.08,0.03l4.36,3.17l1.22,1.6l-0.96,1.5l0.61,1.4Z",
            name: "Uruguay"
        },
        LB: {
            path: "M510.37,198.01l-0.88,0.51l1.82,-3.54l0.62,0.08l0.22,0.61l-1.13,0.88l-0.65,1.47Z",
            name: "Lebanon"
        },
        LA: {
            path: "M689.54,248.53l-1.76,-0.74l-0.49,0.15l-0.94,1.46l-1.32,-0.64l0.62,-0.98l0.11,-2.17l-2.04,-2.42l-0.25,-2.65l-1.9,-2.1l-2.15,-0.31l-0.78,0.91l-1.12,0.06l-1.05,-0.4l-2.06,1.2l-0.04,-1.59l0.61,-2.68l-0.36,-0.49l-1.35,-0.1l-0.11,-1.23l-0.96,-0.88l1.96,-1.89l0.39,0.36l1.33,0.07l0.42,-0.45l-0.34,-2.66l0.7,-0.21l1.28,1.81l1.11,2.35l0.36,0.23l2.82,0.02l0.71,1.67l-1.39,0.65l-0.72,0.93l0.13,0.6l2.91,1.51l3.6,5.25l1.88,1.78l0.56,1.62l-0.35,1.96Z",
            name: "Lao PDR"
        },
        TW: {
            path: "M724.01,226.68l-0.74,1.48l-0.9,-1.52l-0.25,-1.74l1.38,-2.44l1.73,-1.74l0.64,0.44l-1.85,5.52Z",
            name: "Taiwan"
        },
        TT: {
            path: "M266.64,259.32l0.28,-1.16l1.13,-0.22l-0.06,1.2l-1.35,0.18Z",
            name: "Trinidad and Tobago"
        },
        TR: {
            path: "M513.21,175.47l3.64,1.17l3.05,-0.44l2.1,0.26l3.11,-1.56l2.46,-0.13l2.19,1.33l0.33,0.82l-0.22,1.33l0.25,0.44l2.28,1.13l-1.17,0.57l-0.21,0.45l0.75,3.2l-0.41,1.16l1.13,1.92l-0.55,0.22l-0.9,-0.67l-2.91,-0.37l-1.24,0.46l-4.23,0.41l-2.81,1.05l-1.91,0.01l-1.52,-0.53l-2.58,0.75l-0.66,-0.45l-0.62,0.3l-0.12,1.45l-0.89,0.84l-0.47,-0.67l0.79,-1.3l-0.41,-0.2l-1.43,0.23l-2.0,-0.63l-2.02,1.65l-3.51,0.3l-2.13,-1.53l-2.7,-0.1l-0.86,1.24l-1.38,0.27l-2.29,-1.44l-2.71,-0.01l-1.37,-2.65l-1.68,-1.52l1.07,-1.99l-0.09,-0.49l-1.27,-1.12l2.37,-2.41l3.7,-0.11l1.28,-2.24l4.49,0.37l3.21,-1.97l2.81,-0.82l3.99,-0.06l4.29,2.07ZM488.79,176.72l-1.72,1.31l-0.5,-0.88l1.37,-2.57l-0.7,-0.85l1.7,-0.63l1.8,0.34l0.46,1.17l1.76,0.78l-2.87,0.32l-1.3,1.01Z",
            name: "Turkey"
        },
        LK: {
            path: "M624.16,268.99l-1.82,0.48l-0.99,-1.67l-0.42,-3.46l0.95,-3.43l1.21,0.98l2.26,4.19l-0.34,2.33l-0.85,0.58Z",
            name: "Sri Lanka"
        },
        LV: {
            path: "M489.16,122.85l0.96,0.66l0.22,1.65l0.68,1.76l-3.65,1.7l-2.23,-1.58l-1.29,-0.26l-0.68,-0.77l-2.42,0.34l-4.16,-0.23l-2.47,0.9l0.06,-1.98l1.13,-2.06l1.95,-1.02l2.12,2.58l2.01,-0.07l0.38,-0.33l0.44,-2.52l1.76,-0.53l3.06,1.7l2.15,0.07Z",
            name: "Latvia"
        },
        LT: {
            path: "M486.93,129.3l0.17,1.12l-1.81,0.98l-0.72,2.02l-2.47,1.18l-2.1,-0.02l-0.73,-1.05l-1.06,-0.3l-0.09,-1.87l-3.56,-1.13l-0.43,-2.36l2.48,-0.94l4.12,0.22l2.25,-0.31l0.52,0.69l1.24,0.21l2.19,1.56Z",
            name: "Lithuania"
        },
        LU: {
            path: "M436.08,149.45l-0.48,-0.07l0.3,-1.28l0.27,0.4l-0.09,0.96Z",
            name: "Luxembourg"
        },
        LR: {
            path: "M399.36,265.97l0.18,1.54l-0.48,0.99l0.08,0.47l2.47,1.8l-0.33,2.8l-2.65,-1.13l-5.78,-4.61l0.58,-1.32l2.1,-2.33l0.86,-0.22l0.77,1.14l-0.14,0.85l0.59,0.87l1.0,0.14l0.76,-0.99Z",
            name: "Liberia"
        },
        LS: {
            path: "M491.06,363.48l-0.49,0.15l-1.49,-1.67l1.1,-1.43l2.19,-1.44l1.51,1.27l-0.98,1.82l-1.23,0.38l-0.62,0.93Z",
            name: "Lesotho"
        },
        TH: {
            path: "M670.27,255.86l-1.41,3.87l0.15,2.0l0.38,0.36l1.38,0.07l0.9,2.04l0.55,2.34l1.4,1.44l1.61,0.38l0.96,0.97l-0.5,0.64l-1.1,0.2l-0.34,-1.18l-2.04,-1.1l-0.63,0.23l-0.63,-0.62l-0.48,-1.3l-2.56,-2.63l-0.73,0.41l0.95,-3.89l2.16,-4.22ZM670.67,254.77l-0.92,-2.18l-0.26,-2.61l-2.14,-3.06l0.71,-0.49l0.89,-2.59l-3.61,-5.45l0.87,-0.51l1.05,-2.58l1.74,-0.18l2.6,-1.59l0.76,0.56l0.13,1.39l0.37,0.36l1.23,0.09l-0.51,2.28l0.05,2.42l0.6,0.34l2.43,-1.42l0.77,0.39l1.47,-0.07l0.71,-0.88l1.48,0.14l1.71,1.88l0.25,2.65l1.92,2.11l-0.1,1.89l-0.61,0.86l-2.22,-0.33l-3.5,0.64l-1.6,2.12l0.36,2.58l-1.51,-0.79l-1.84,-0.01l0.28,-1.52l-0.4,-0.47l-2.21,0.01l-0.4,0.37l-0.19,2.74l-0.34,0.93Z",
            name: "Thailand"
        },
        TF: {
            path: "M596.68,420.38l-3.2,0.18l-0.05,-1.26l0.39,-1.41l1.3,0.78l2.08,0.35l-0.52,1.36Z",
            name: "Fr. S. Antarctic Lands"
        },
        TG: {
            path: "M422.7,257.63l-0.09,1.23l1.53,1.52l0.08,1.09l0.5,0.65l-0.11,5.62l0.49,1.47l-1.31,0.35l-1.02,-2.13l-0.18,-1.12l0.53,-2.19l-0.63,-1.16l-0.22,-3.68l-1.01,-1.4l0.07,-0.28l1.37,0.03Z",
            name: "Togo"
        },
        TD: {
            path: "M480.25,235.49l0.12,9.57l-2.1,0.05l-1.14,1.89l-0.69,1.63l0.34,0.73l-0.66,0.91l0.24,0.89l-0.86,1.95l0.45,0.5l0.6,-0.1l0.34,0.64l0.03,1.38l0.9,1.04l-1.45,0.43l-1.27,1.03l-1.83,2.76l-2.16,1.07l-2.31,-0.15l-0.86,0.25l-0.26,0.49l0.17,0.61l-2.11,1.68l-2.85,0.87l-1.09,-0.57l-0.73,0.66l-1.12,0.1l-1.1,-3.12l-1.25,-0.64l-1.22,-1.22l0.29,-0.64l3.01,0.04l0.35,-0.6l-1.3,-2.2l-0.08,-3.31l-0.97,-1.66l0.22,-1.04l-0.38,-0.48l-1.22,-0.04l0.0,-1.25l-0.98,-1.07l0.96,-3.01l3.25,-2.65l0.13,-3.33l0.95,-5.18l0.52,-1.07l-0.1,-0.48l-0.91,-0.78l-0.2,-0.96l-0.8,-0.58l-0.55,-3.65l2.1,-1.2l19.57,9.83Z",
            name: "Chad"
        },
        LY: {
            path: "M483.48,203.15l-0.75,1.1l0.29,1.39l-0.6,1.83l0.73,2.14l0.0,24.12l-2.48,0.01l-0.41,0.85l-19.41,-9.76l-4.41,2.28l-1.37,-1.33l-3.82,-1.1l-1.14,-1.65l-1.98,-1.23l-1.22,0.32l-0.66,-1.11l-0.17,-1.26l-1.28,-1.69l0.87,-1.19l-0.07,-4.34l0.43,-2.27l-0.86,-3.45l1.13,-0.76l0.22,-1.16l-0.2,-1.03l3.48,-2.61l0.29,-1.94l2.45,0.8l1.18,-0.21l1.98,0.44l3.15,1.18l1.37,2.54l5.72,1.67l2.64,1.35l1.61,-0.72l1.29,-1.34l-0.44,-2.34l0.66,-1.13l1.67,-1.21l1.57,-0.35l3.14,0.53l1.08,1.28l3.99,0.78l0.36,0.54Z",
            name: "Libya"
        },
        AE: {
            path: "M550.76,223.97l1.88,-0.4l3.84,0.02l4.78,-4.75l0.19,0.36l0.26,1.58l-0.81,0.01l-0.39,0.35l-0.08,2.04l-0.81,0.63l-0.01,0.96l-0.66,0.99l-0.39,1.41l-7.08,-1.25l-0.7,-1.96Z",
            name: "United Arab Emirates"
        },
        VE: {
            path: "M240.68,256.69l0.53,0.75l-0.02,1.06l-1.07,1.78l0.95,2.0l0.42,0.22l1.4,-0.44l0.56,-1.83l-0.77,-1.17l-0.1,-1.47l2.82,-0.93l0.26,-0.49l-0.28,-0.96l0.3,-0.28l0.66,1.31l1.96,0.26l1.4,1.22l0.08,0.68l0.39,0.35l4.81,-0.22l1.49,1.11l1.92,0.31l1.67,-0.84l0.22,-0.6l3.44,-0.14l-0.17,0.55l0.86,1.19l2.19,0.35l1.67,1.1l0.37,1.86l0.41,0.32l1.55,0.17l-1.66,1.35l-0.22,0.92l0.65,0.97l-1.67,0.54l-0.3,0.4l0.04,0.99l-0.56,0.57l-0.01,0.55l1.85,2.27l-0.66,0.69l-4.47,1.29l-0.72,0.54l-3.69,-0.9l-0.71,0.27l-0.02,0.7l0.91,0.53l-0.08,1.54l0.35,1.58l0.35,0.31l1.66,0.17l-1.3,0.52l-0.48,1.13l-2.68,0.91l-0.6,0.77l-1.57,0.13l-1.17,-1.13l-0.8,-2.52l-1.25,-1.26l1.02,-1.23l-1.29,-2.95l0.18,-1.62l1.0,-2.21l-0.2,-0.49l-1.14,-0.46l-4.02,0.36l-1.82,-2.1l-1.57,-0.33l-2.99,0.22l-1.06,-0.97l0.25,-1.23l-0.2,-1.01l-0.59,-0.69l-0.29,-1.06l-1.08,-0.39l0.78,-2.79l1.9,-2.11Z",
            name: "Venezuela"
        },
        AF: {
            path: "M600.7,188.88l-1.57,1.3l-0.1,0.48l0.8,2.31l-1.09,1.04l-0.03,1.27l-0.48,0.71l-2.16,-0.08l-0.37,0.59l0.78,1.48l-1.38,0.69l-1.06,1.69l0.06,1.7l-0.65,0.52l-0.91,-0.21l-1.91,0.36l-0.48,0.77l-1.88,0.13l-1.4,1.56l-0.18,2.32l-2.91,1.02l-1.65,-0.23l-0.71,0.55l-1.41,-0.3l-2.41,0.39l-3.52,-1.17l1.96,-2.35l-0.21,-1.78l-0.3,-0.34l-1.63,-0.4l-0.19,-1.58l-0.75,-2.03l0.95,-1.36l-0.19,-0.6l-0.73,-0.28l1.47,-4.8l2.14,0.9l2.12,-0.36l0.74,-1.34l1.77,-0.39l1.54,-0.92l0.63,-2.31l1.87,-0.5l0.49,-0.81l0.94,0.56l2.13,0.11l2.55,0.92l1.95,-0.83l0.65,0.43l0.56,-0.13l0.69,-1.12l1.57,-0.08l0.72,-1.66l0.79,-0.74l0.8,0.39l-0.17,0.56l0.71,0.58l-0.08,2.39l1.11,0.95ZM601.37,188.71l1.73,-0.71l1.43,-1.18l4.03,0.35l-2.23,0.74l-4.95,0.8Z",
            name: "Afghanistan"
        },
        IQ: {
            path: "M530.82,187.47l0.79,0.66l1.26,-0.28l1.46,3.08l1.63,0.94l0.14,1.23l-1.22,1.05l-0.53,2.52l1.73,2.67l3.12,1.62l1.15,1.88l-0.38,1.85l0.39,0.48l0.41,-0.0l0.02,1.07l0.76,0.94l-2.47,-0.1l-1.71,2.44l-4.31,-0.2l-7.02,-5.48l-3.73,-1.94l-2.88,-0.73l-0.85,-2.87l5.45,-3.02l0.95,-3.43l-0.19,-1.96l1.27,-0.7l1.22,-1.7l0.87,-0.36l2.69,0.34Z",
            name: "Iraq"
        },
        IS: {
            path: "M384.14,88.06l-0.37,2.61l2.54,2.51l-2.9,2.75l-9.19,3.4l-9.25,-1.66l1.7,-1.22l-0.1,-0.7l-4.05,-1.47l2.96,-0.53l0.33,-0.43l-0.11,-1.2l-0.33,-0.36l-4.67,-0.85l1.28,-2.04l3.45,-0.56l3.77,2.72l0.44,0.02l3.64,-2.16l3.3,1.08l3.98,-2.16l3.58,0.26Z",
            name: "Iceland"
        },
        IR: {
            path: "M533.43,187.16l-1.27,-2.15l0.42,-0.98l-0.71,-3.04l1.03,-0.5l0.33,0.83l1.26,1.35l2.05,0.51l1.11,-0.16l2.89,-2.11l0.62,-0.14l0.39,0.46l-0.72,1.2l0.06,0.49l1.56,1.53l0.65,0.04l0.67,1.81l2.56,0.83l1.87,1.48l3.69,0.49l3.91,-0.76l0.47,-0.73l2.17,-0.6l1.66,-1.54l1.51,0.08l1.18,-0.53l1.59,0.24l2.83,1.48l1.88,0.3l2.77,2.47l1.77,0.18l0.18,1.99l-1.68,5.49l0.24,0.5l0.61,0.23l-0.82,1.48l0.8,2.18l0.19,1.71l0.3,0.34l1.63,0.4l0.15,1.32l-2.15,2.35l-0.01,0.53l2.21,3.03l2.34,1.24l0.06,2.14l1.24,0.72l0.11,0.69l-3.31,1.27l-1.08,3.03l-9.68,-1.68l-0.99,-3.05l-1.43,-0.73l-2.17,0.46l-2.47,1.26l-2.83,-0.82l-2.46,-2.02l-2.41,-0.8l-3.42,-6.06l-0.48,-0.2l-1.18,0.39l-1.44,-0.82l-0.5,0.08l-0.65,0.74l-0.97,-1.01l-0.02,-1.31l-0.71,-0.39l0.26,-1.81l-1.29,-2.11l-3.13,-1.63l-1.58,-2.43l0.5,-1.9l1.31,-1.26l-0.19,-1.66l-1.74,-1.1l-1.57,-3.3Z",
            name: "Iran"
        },
        AM: {
            path: "M536.99,182.33l-0.28,0.03l-1.23,-2.13l-0.93,0.01l-0.62,-0.66l-0.69,-0.07l-0.96,-0.81l-1.56,-0.62l0.19,-1.12l-0.26,-0.79l2.72,-0.36l1.09,1.01l-0.17,0.92l1.02,0.78l-0.47,0.62l0.08,0.56l2.04,1.23l0.04,1.4Z",
            name: "Armenia"
        },
        AL: {
            path: "M470.32,171.8l0.74,0.03l0.92,0.89l-0.17,1.95l0.36,1.28l1.01,0.82l-1.82,2.83l-0.19,-0.61l-1.25,-0.89l-0.18,-1.2l0.53,-2.82l-0.54,-1.47l0.6,-0.83Z",
            name: "Albania"
        },
        AO: {
            path: "M461.55,300.03l1.26,3.15l1.94,2.36l2.47,-0.53l1.25,0.32l0.44,-0.18l0.93,-1.92l1.31,-0.08l0.41,-0.44l0.47,-0.0l-0.1,0.41l0.39,0.49l2.65,-0.02l0.03,1.19l0.48,1.01l-0.34,1.52l0.18,1.55l0.83,1.04l-0.13,2.85l0.54,0.39l3.96,-0.41l-0.1,1.79l0.39,1.05l-0.24,1.43l-4.7,-0.03l-0.4,0.39l-0.12,8.13l2.92,3.49l-3.83,0.88l-5.89,-0.36l-1.88,-1.24l-10.47,0.22l-1.3,-1.01l-1.85,-0.16l-2.4,0.77l-0.15,-1.06l0.33,-2.16l1.0,-3.45l1.35,-3.2l2.24,-2.8l0.33,-2.06l-0.13,-1.53l-0.8,-1.08l-1.21,-2.87l0.87,-1.62l-1.27,-4.12l-1.17,-1.53l2.47,-0.63l7.03,0.03ZM451.71,298.87l-0.47,-1.25l1.25,-1.11l0.32,0.3l-0.99,1.03l-0.12,1.03Z",
            name: "Angola"
        },
        AR: {
            path: "M249.29,428.93l-2.33,-0.52l-5.83,-0.43l-0.89,-1.66l0.05,-2.37l-0.45,-0.4l-1.43,0.18l-0.67,-0.91l-0.2,-3.13l1.88,-1.47l0.79,-2.04l-0.25,-1.7l1.3,-2.68l0.91,-4.15l-0.22,-1.69l0.85,-0.45l0.2,-0.44l-0.27,-1.16l-0.98,-0.68l0.59,-0.92l-0.05,-0.5l-1.04,-1.07l-0.52,-3.1l0.97,-0.86l-0.42,-3.58l1.2,-5.43l1.38,-0.98l0.16,-0.43l-0.75,-2.79l-0.01,-2.43l1.78,-1.75l0.06,-2.57l1.43,-2.85l0.01,-2.58l-0.69,-0.74l-1.09,-4.52l1.47,-2.7l-0.18,-2.79l0.85,-2.35l1.59,-2.46l1.73,-1.64l0.05,-0.52l-0.6,-0.84l0.44,-0.85l-0.07,-4.19l2.7,-1.44l0.86,-2.75l-0.21,-0.71l1.76,-2.01l2.9,0.57l1.38,1.78l0.68,-0.08l0.87,-1.87l2.39,0.09l4.95,4.77l2.17,0.49l3.0,1.92l2.47,1.0l0.25,0.82l-2.37,3.93l0.23,0.59l5.39,1.16l2.12,-0.44l2.45,-2.16l0.5,-2.38l0.76,-0.31l0.98,1.2l-0.04,1.8l-3.67,2.51l-2.85,2.66l-3.43,3.88l-1.3,5.07l0.01,2.72l-0.54,0.73l-0.36,3.28l3.14,2.64l-0.16,2.11l1.4,1.11l-0.1,1.09l-2.29,3.52l-3.55,1.49l-4.92,0.6l-2.71,-0.29l-0.43,0.51l0.5,1.65l-0.49,2.1l0.38,1.42l-1.19,0.83l-2.36,0.38l-2.3,-1.04l-1.38,0.83l0.41,3.64l1.69,0.91l1.4,-0.71l0.36,0.76l-2.04,0.86l-2.01,1.89l-0.97,4.63l-2.34,0.1l-2.09,1.78l-0.61,2.75l2.46,2.31l2.17,0.63l-0.7,2.32l-2.83,1.73l-1.73,3.86l-2.17,1.22l-1.16,1.67l0.75,3.76l1.04,1.28ZM256.71,438.88l-2.0,0.15l-1.4,-1.22l-3.82,-0.1l-0.0,-5.83l1.6,3.05l3.26,2.07l3.08,0.78l-0.71,1.1Z",
            name: "Argentina"
        },
        AU: {
            path: "M705.8,353.26l0.26,0.04l0.17,-0.47l-0.48,-1.42l0.92,1.11l0.45,0.15l0.27,-0.39l-0.1,-1.56l-1.98,-3.63l1.09,-3.31l-0.24,-1.57l0.34,-0.62l0.38,1.06l0.43,-0.19l0.99,-1.7l1.91,-0.83l1.29,-1.15l1.81,-0.91l0.96,-0.17l0.92,0.26l1.92,-0.95l1.47,-0.28l1.03,-0.8l1.43,0.04l2.78,-0.84l1.36,-1.15l0.71,-1.45l1.41,-1.26l0.3,-2.58l1.27,-1.59l0.78,1.65l0.54,0.19l1.07,-0.51l0.15,-0.6l-0.73,-1.0l0.45,-0.71l0.78,0.39l0.58,-0.3l0.28,-1.82l1.87,-2.14l1.12,-0.39l0.28,-0.58l0.62,0.17l0.53,-0.73l1.87,-0.57l1.65,1.05l1.35,1.48l3.39,0.38l0.43,-0.54l-0.46,-1.23l1.05,-1.79l1.04,-0.61l0.14,-0.55l-0.25,-0.41l0.88,-1.17l1.31,-0.77l1.3,0.27l2.1,-0.48l0.31,-0.4l-0.05,-1.3l-0.92,-0.77l1.48,0.56l1.41,1.07l2.11,0.65l0.81,-0.2l1.4,0.7l1.69,-0.66l0.8,0.19l0.64,-0.33l0.71,0.77l-1.33,1.94l-0.71,0.07l-0.35,0.51l0.24,0.86l-1.52,2.35l0.12,1.05l2.15,1.65l1.97,0.85l3.04,2.36l1.97,0.65l0.55,0.88l2.72,0.85l1.84,-1.1l2.07,-5.97l-0.42,-3.59l0.3,-1.73l0.47,-0.87l-0.31,-0.68l1.09,-3.28l0.46,-0.47l0.4,0.71l0.16,1.51l0.65,0.52l0.16,1.04l0.85,1.21l0.12,2.38l0.9,2.0l0.57,0.18l1.3,-0.78l1.69,1.7l-0.2,1.08l0.53,2.2l0.39,1.3l0.68,0.48l0.6,1.95l-0.19,1.48l0.81,1.76l6.01,3.69l-0.11,0.76l1.38,1.58l0.95,2.77l0.58,0.22l0.72,-0.41l0.8,0.9l0.61,0.01l0.46,2.41l4.81,4.71l0.66,2.02l-0.07,3.31l1.14,2.2l-0.13,2.24l-1.1,3.68l0.03,1.64l-0.47,1.89l-1.05,2.4l-1.9,1.47l-1.72,3.51l-2.38,6.09l-0.24,2.82l-1.14,0.8l-2.85,0.15l-2.31,1.19l-2.51,2.25l-3.09,-1.57l0.3,-1.15l-0.54,-0.47l-1.5,0.63l-2.01,1.94l-7.12,-2.18l-1.48,-1.63l-1.14,-3.74l-1.45,-1.26l-1.81,-0.26l0.56,-1.18l-0.61,-2.1l-0.72,-0.1l-1.14,1.82l-0.9,0.21l0.63,-0.82l0.36,-1.55l0.92,-1.31l-0.13,-2.34l-0.7,-0.22l-2.0,2.34l-1.51,0.93l-0.94,2.01l-1.35,-0.81l-0.02,-1.52l-1.57,-2.04l-1.09,-0.88l0.24,-0.33l-0.14,-0.59l-3.21,-1.69l-1.83,-0.12l-2.54,-1.35l-4.58,0.28l-6.02,1.9l-2.53,-0.13l-2.62,1.41l-2.13,0.63l-1.49,2.6l-3.49,0.31l-2.29,-0.5l-3.48,0.43l-1.6,1.47l-0.81,-0.04l-2.37,1.63l-3.26,-0.1l-3.72,-2.21l0.04,-1.05l1.19,-0.46l0.49,-0.89l0.21,-2.97l-0.28,-1.64l-1.34,-2.86l-0.38,-1.47l0.05,-1.72l-0.95,-1.7l-0.18,-0.97l-1.01,-0.99l-0.29,-1.98l-1.13,-1.75ZM784.92,393.44l2.65,1.02l3.23,-0.96l1.09,0.14l0.15,3.06l-0.85,1.13l-0.17,1.63l-0.87,-0.24l-1.57,1.91l-1.68,-0.18l-1.4,-2.36l-0.37,-2.04l-1.39,-2.51l0.04,-0.8l1.15,0.18Z",
            name: "Australia"
        },
        AT: {
            path: "M462.89,152.8l0.04,2.25l-1.07,0.0l-0.33,0.63l0.36,0.51l-1.04,2.13l-2.02,0.07l-1.33,0.7l-5.29,-0.99l-0.47,-0.93l-0.44,-0.21l-2.47,0.55l-0.42,0.51l-3.18,-0.81l0.43,-0.91l1.12,0.78l0.6,-0.17l0.25,-0.58l1.93,0.12l1.86,-0.56l1.0,0.08l0.68,0.57l0.62,-0.15l0.26,-0.77l-0.3,-1.78l0.8,-0.44l0.68,-1.15l1.52,0.85l0.47,-0.06l1.34,-1.25l0.64,-0.17l1.81,0.92l1.28,-0.11l0.7,0.37Z",
            name: "Austria"
        },
        IN: {
            path: "M623.34,207.03l-1.24,1.04l-0.97,2.55l0.22,0.51l8.04,3.87l3.42,0.37l1.57,1.38l4.92,0.88l2.18,-0.04l0.38,-0.3l0.29,-1.24l-0.32,-1.64l0.14,-0.87l0.82,-0.31l0.45,2.48l2.28,1.02l1.77,-0.38l4.14,0.1l0.38,-0.36l0.18,-1.66l-0.5,-0.65l1.37,-0.29l2.25,-1.99l2.7,-1.62l1.93,0.62l1.8,-0.98l0.79,1.14l-0.68,0.91l0.26,0.63l2.42,0.36l0.09,0.47l-0.83,0.75l0.13,1.07l-1.52,-0.29l-3.24,1.86l-0.13,1.78l-1.32,2.14l-0.18,1.39l-0.93,1.82l-1.64,-0.5l-0.52,0.37l-0.09,2.63l-0.56,1.11l0.19,0.81l-0.53,0.27l-1.18,-3.73l-1.08,-0.27l-0.38,0.31l-0.24,1.0l-0.66,-0.66l0.54,-1.06l1.22,-0.34l1.15,-2.25l-0.24,-0.56l-1.57,-0.47l-4.34,-0.28l-0.18,-1.56l-0.35,-0.35l-1.11,-0.12l-1.91,-1.12l-0.56,0.17l-0.88,1.82l0.11,0.49l1.36,1.07l-1.09,0.69l-0.69,1.11l0.18,0.56l1.24,0.57l-0.32,1.54l0.85,1.94l0.36,2.01l-0.22,0.59l-4.58,0.52l-0.33,0.42l0.13,1.8l-1.17,1.36l-3.65,1.81l-2.79,3.03l-4.32,3.28l-0.18,1.27l-4.65,1.79l-0.77,2.16l0.64,5.3l-1.06,2.49l-0.01,3.94l-1.24,0.28l-1.14,1.93l0.39,0.84l-1.68,0.53l-1.04,1.83l-0.65,0.47l-2.06,-2.05l-2.1,-6.02l-2.2,-3.64l-1.05,-4.75l-2.29,-3.57l-1.76,-8.2l0.01,-3.11l-0.49,-2.53l-0.55,-0.29l-3.53,1.52l-1.53,-0.27l-2.86,-2.77l0.85,-0.67l0.08,-0.55l-0.74,-1.03l-2.67,-2.06l1.24,-1.32l5.34,0.01l0.39,-0.49l-0.5,-2.29l-1.42,-1.46l-0.27,-1.93l-1.43,-1.2l2.31,-2.37l3.05,0.06l2.62,-2.85l1.6,-2.81l2.4,-2.73l0.07,-2.04l1.97,-1.48l-0.02,-0.65l-1.93,-1.31l-0.82,-1.78l-0.8,-2.21l0.9,-0.89l3.59,0.65l2.92,-0.42l2.33,-2.19l2.31,2.85l-0.24,2.13l0.99,1.59l-0.05,0.82l-1.34,-0.28l-0.47,0.48l0.7,3.06l2.62,1.99l2.99,1.65Z",
            name: "India"
        },
        TZ: {
            path: "M495.56,296.42l2.8,-3.12l-0.02,-0.81l-0.64,-1.3l0.68,-0.52l0.14,-1.47l-0.76,-1.25l0.31,-0.11l2.26,0.03l-0.51,2.76l0.76,1.3l0.5,0.12l1.05,-0.53l1.19,-0.12l0.61,0.24l1.43,-0.62l0.1,-0.67l-0.71,-0.62l1.57,-1.7l8.65,4.86l0.32,1.53l3.34,2.33l-1.05,2.8l0.13,1.61l1.63,1.12l-0.6,1.76l-0.01,2.33l1.89,4.03l0.57,0.43l-1.46,1.08l-2.61,0.94l-1.43,-0.04l-1.06,0.77l-2.29,0.36l-2.87,-0.68l-0.83,0.07l-0.63,-0.75l-0.31,-2.78l-1.32,-1.35l-3.25,-0.77l-3.96,-1.58l-1.18,-2.41l-0.32,-1.75l-1.76,-1.49l0.42,-1.05l-0.44,-0.89l0.08,-0.96l-0.46,-0.58l0.06,-0.56Z",
            name: "Tanzania"
        },
        AZ: {
            path: "M539.29,175.73l1.33,0.32l1.94,-1.8l2.3,3.34l1.43,0.43l-1.26,0.15l-0.35,0.32l-0.8,3.14l-0.99,0.96l0.05,1.11l-1.26,-1.13l0.7,-1.18l-0.04,-0.47l-0.74,-0.86l-1.48,0.15l-2.34,1.71l-0.03,-1.27l-2.03,-1.35l0.47,-0.62l-0.08,-0.56l-1.03,-0.79l0.29,-0.43l-0.14,-0.58l-1.13,-0.86l1.89,0.68l1.69,0.06l0.37,-0.87l-0.81,-1.37l0.42,0.06l1.63,1.72ZM533.78,180.57l0.61,0.46l0.69,-0.0l0.59,1.15l-0.68,-0.15l-1.21,-1.45Z",
            name: "Azerbaijan"
        },
        IE: {
            path: "M405.08,135.42l0.35,2.06l-1.75,2.78l-4.22,1.88l-2.84,-0.4l1.73,-3.0l-1.18,-3.53l4.6,-3.74l0.32,1.15l-0.49,1.74l0.4,0.51l1.47,-0.04l1.6,0.6Z",
            name: "Ireland"
        },
        ID: {
            path: "M756.47,287.89l0.69,4.01l2.79,1.78l0.51,-0.1l2.04,-2.59l2.71,-1.43l2.05,-0.0l3.9,1.73l2.46,0.45l0.08,15.12l-1.75,-1.54l-2.54,-0.51l-0.88,0.71l-2.32,0.06l0.69,-1.33l1.45,-0.64l0.23,-0.46l-0.65,-2.74l-1.24,-2.21l-5.04,-2.29l-2.09,-0.23l-3.68,-2.27l-0.55,0.13l-0.65,1.07l-0.52,0.12l-0.55,-1.89l-1.21,-0.78l1.84,-0.62l1.72,0.05l0.39,-0.52l-0.21,-0.66l-0.38,-0.28l-3.45,-0.0l-1.13,-1.48l-2.1,-0.43l-0.52,-0.6l2.69,-0.48l1.28,-0.78l3.66,0.94l0.3,0.71ZM757.91,300.34l-0.62,0.82l-0.1,-0.8l0.59,-1.12l0.13,1.1ZM747.38,292.98l0.34,0.72l-1.22,-0.57l-4.68,-0.1l0.27,-0.62l2.78,-0.09l2.52,0.67ZM741.05,285.25l-0.67,-2.88l0.64,-2.01l0.41,0.86l1.21,0.18l0.16,0.7l-0.1,1.68l-0.84,-0.16l-0.46,0.3l-0.34,1.34ZM739.05,293.5l-0.5,0.44l-1.34,-0.36l-0.17,-0.37l1.73,-0.08l0.27,0.36ZM721.45,284.51l-0.19,1.97l2.24,2.23l0.54,0.02l1.27,-1.07l2.75,-0.5l-0.9,1.21l-2.11,0.93l-0.16,0.6l2.22,3.01l-0.3,1.07l1.36,1.74l-2.26,0.85l-0.28,-0.31l0.12,-1.19l-1.64,-1.34l0.17,-2.23l-0.56,-0.39l-1.67,0.76l-0.23,0.39l0.3,6.17l-1.1,0.25l-0.69,-0.47l0.64,-2.21l-0.39,-2.42l-0.39,-0.34l-0.8,-0.01l-0.58,-1.29l0.98,-1.6l0.35,-1.96l1.32,-3.87ZM728.59,296.27l0.38,0.49l-0.02,1.28l-0.88,0.49l-0.53,-0.47l1.04,-1.79ZM729.04,286.98l0.27,-0.05l-0.02,0.13l-0.24,-0.08ZM721.68,284.05l0.16,-0.32l1.89,-1.65l1.83,0.68l3.16,0.35l2.94,-0.1l2.39,-1.66l-1.73,2.13l-1.66,0.43l-2.41,-0.48l-4.17,0.13l-2.39,0.51ZM730.55,310.47l1.11,-1.93l2.03,-0.82l0.08,0.62l-1.45,1.67l-1.77,0.46ZM728.12,305.88l-0.1,0.38l-3.46,0.66l-2.91,-0.27l-0.0,-0.25l1.54,-0.41l1.66,0.73l1.67,-0.19l1.61,-0.65ZM722.9,310.24l-0.64,0.03l-2.26,-1.2l1.11,-0.24l1.78,1.41ZM716.26,305.77l0.88,0.51l1.28,-0.17l0.2,0.35l-4.65,0.73l0.39,-0.67l1.15,-0.02l0.75,-0.73ZM711.66,293.84l-0.38,-0.16l-2.54,1.01l-1.12,-1.44l-1.69,-0.13l-1.16,-0.75l-3.04,0.77l-1.1,-1.15l-3.31,-0.11l-0.35,-3.05l-1.35,-0.95l-1.11,-1.98l-0.33,-2.06l0.27,-2.14l0.9,-1.01l0.37,1.15l2.09,1.49l1.53,-0.48l1.82,0.08l1.38,-1.19l1.0,-0.18l2.28,0.67l2.26,-0.53l1.52,-3.64l1.01,-0.99l0.78,-2.57l4.1,0.3l-1.11,1.77l0.02,0.46l1.7,2.2l-0.23,1.39l2.07,1.71l-2.33,0.42l-0.88,1.9l0.1,2.05l-2.4,1.9l-0.06,2.45l-0.7,2.79ZM692.58,302.03l0.35,0.26l4.8,0.25l0.78,-0.97l4.17,1.09l1.13,1.68l3.69,0.45l2.13,1.04l-1.8,0.6l-2.77,-0.99l-4.8,-0.12l-5.24,-1.41l-1.84,-0.25l-1.11,0.3l-4.26,-0.97l-0.7,-1.14l-1.59,-0.13l1.18,-1.65l2.74,0.13l2.87,1.13l0.26,0.68ZM685.53,299.17l-2.22,0.04l-2.06,-2.03l-3.15,-2.01l-2.93,-3.51l-3.11,-5.33l-2.2,-2.12l-1.64,-4.06l-2.32,-1.69l-1.27,-2.07l-1.96,-1.5l-2.51,-2.65l-0.11,-0.66l4.81,0.53l2.15,2.38l3.31,2.74l2.35,2.66l2.7,0.17l1.95,1.59l1.54,2.17l1.59,0.95l-0.84,1.71l0.15,0.52l1.44,0.87l0.79,0.1l0.4,1.58l0.87,1.4l1.96,0.39l1.0,1.31l-0.6,3.01l-0.09,3.5Z",
            name: "Indonesia"
        },
        UA: {
            path: "M492.5,162.44l1.28,-2.49l1.82,0.19l0.66,-0.23l0.09,-0.71l-0.25,-0.75l-0.79,-0.72l-0.33,-1.21l-0.86,-0.62l-0.02,-1.19l-1.13,-0.86l-1.15,-0.19l-2.04,-1.0l-1.66,0.32l-0.66,0.47l-0.92,-0.0l-0.84,0.78l-2.48,0.7l-1.18,-0.71l-3.07,-0.36l-0.89,0.43l-0.24,-0.55l-1.11,-0.7l0.35,-0.93l1.26,-1.02l-0.54,-1.23l2.04,-2.43l1.4,-0.62l0.25,-1.19l-1.04,-2.39l0.83,-0.13l1.28,-0.84l1.8,-0.07l2.47,0.26l2.86,0.81l1.88,0.06l0.86,0.44l1.04,-0.41l0.77,0.66l2.18,-0.15l0.92,0.3l0.52,-0.34l0.15,-1.53l0.56,-0.54l2.85,-0.05l0.84,-0.72l3.04,-0.18l1.23,1.46l-0.48,0.77l0.21,1.03l0.36,0.32l1.8,0.14l0.93,2.08l3.18,1.15l1.94,-0.45l1.67,1.49l1.4,-0.03l3.35,0.96l0.02,0.54l-0.96,1.59l0.47,1.97l-0.26,0.7l-2.36,0.28l-1.29,0.89l-0.23,1.38l-1.83,0.27l-1.58,0.97l-2.41,0.21l-2.16,1.17l-0.21,0.38l0.34,2.26l1.23,0.75l2.13,-0.08l-0.14,0.31l-2.65,0.53l-3.23,1.69l-0.87,-0.39l0.42,-1.1l-0.25,-0.52l-2.21,-0.73l2.35,-1.06l0.12,-0.65l-0.93,-0.82l-3.62,-0.74l-0.13,-0.89l-0.46,-0.34l-2.61,0.59l-0.91,1.69l-1.71,2.04l-0.86,-0.4l-1.62,0.27Z",
            name: "Ukraine"
        },
        QA: {
            path: "M549.33,221.64l-0.76,-0.23l-0.14,-1.64l0.84,-1.29l0.47,0.52l0.04,1.34l-0.45,1.3Z",
            name: "Qatar"
        },
        MZ: {
            path: "M508.58,318.75l-0.34,-2.57l0.51,-2.05l3.55,0.63l2.5,-0.38l1.02,-0.76l1.49,0.01l2.74,-0.98l1.66,-1.2l0.5,9.24l0.41,1.23l-0.68,1.67l-0.93,1.71l-1.5,1.5l-5.16,2.28l-2.78,2.73l-1.02,0.53l-1.71,1.8l-0.98,0.57l-0.35,2.41l1.16,1.94l0.49,2.17l0.43,0.31l-0.06,2.06l-0.39,1.17l0.5,0.72l-0.25,0.73l-0.92,0.83l-5.12,2.39l-1.22,1.36l0.21,1.13l0.58,0.39l-0.11,0.72l-1.22,-0.01l-0.73,-2.97l0.42,-3.09l-1.78,-5.37l2.49,-2.81l0.69,-1.89l0.44,-0.43l0.28,-1.53l-0.39,-0.93l0.59,-3.65l-0.01,-3.26l-1.49,-1.16l-1.2,-0.22l-1.74,-1.17l-1.92,0.01l-0.29,-2.08l7.06,-1.96l1.28,1.09l0.89,-0.1l0.67,0.44l0.1,0.73l-0.51,1.29l0.19,1.81l1.75,1.83l0.65,-0.13l0.71,-1.65l1.17,-0.86l-0.26,-3.47l-1.05,-1.85l-1.04,-0.94Z",
            name: "Mozambique"
        }
    },
    height: 440.7063107441331,
    projection: {
        type: "mill",
        centralMeridian: 11.5
    },
    width: 900
});