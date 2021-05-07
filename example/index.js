(function (global, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        global.deptchChart = factory();
    }
})(this, function () {

    function _r(t, e) {
        if (Array.isArray(t))
            return t
    }
    function _o(t, e) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
            var n = []
                , r = !0
                , o = !1
                , i = void 0;
            try {
                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value),
                    !e || n.length !== e); r = !0)
                    ;
            } catch (c) {
                o = !0,
                    i = c
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (o)
                        throw i
                }
            }
            return n
        }
    }
    function getString(t, e) {
        return _r(t, e) || _o(t, e)
    }


    function deptchChart(t, e) {
        var i, o;
        (i = HTMLCanvasElement.prototype).getContext = (o = i.getContext,
            function (t) {
                var e, i, n = o.call(this, t);
                return "2d" === t && (e = n.backingStorePixelRatio || n.webkitBackingStorePixelRatio || n.mozBackingStorePixelRatio || n.msBackingStorePixelRatio || n.oBackingStorePixelRatio || n.backingStorePixelRatio || 1,
                    (i = (window.devicePixelRatio || 1) / e) > 1 && (this.style.height = this.height + "px",
                        this.style.width = this.width + "px",
                        this.width *= i,
                        this.height *= i)),
                    n
            }
        );
        var n = {
            "hb-night": {
                bidsLineColor: e && e.bidsLineColor || "rgba(0, 141, 115, 1)",
                asksLineColor: e && e.asksLineColor || "rgba(236, 49, 75, 1)",
                bidsFillColor: e && e.bidsFillColor || "rgba(0, 141, 115, .2)",
                asksFillColor: e && e.asksFillColor || "rgba(236, 49, 75, .2)",
                axisColor: e && e.axisColor || "rgba(97, 104, 138, .3)",
                color: e && e.color || "rgba(81, 128, 159, .8)",
                bgColor: e && e.bgColor || "rgba(23, 54, 72, .95)",
                dotColor: "rgba(0 , 126, 224, 1)",
                tipColor: e && e.tipColor || "#C7CCE6",
                tipShadow: 4
            },
            "hb-day": {
                bidsLineColor: e && e.bidsLineColor || "rgba(3, 192, 135, 0)",
                asksLineColor: e && e.asksLineColor || "rgba(231, 109, 66, 0)",
                bidsFillColor: e && e.bidsFillColor || "rgba(3, 192, 135, .1)",
                asksFillColor: e && e.asksFillColor || "rgba(231, 109, 66, .1)",
                axisColor: e && e.axisColor || "rgba(180, 188, 227, .3)",
                color: e && e.color || "#232A4A",
                bgColor: e && e.bgColor || "#ffffff",
                dotColor: "rgba(0 , 126, 224, 1)",
                tipColor: e && e.tipColor || "#9CA9B5",
                tipShadow: 4
            }
        }
            , r = {
                theme: e && e.theme || "hb-night",
                ruleHeight: e && e.ruleHeight || 30,
                ruleWidth: e && e.ruleWidth || 54,
                priceFix: e && e.priceFix || 2,
                amountFix: e && e.amountFix || 0,
                paddingTop: e && e.paddingTop || 15,
                noAmountTick: e && e.noAmountTick || 500,
                lang: e && e.lang || "en-us",
                langMap: e && e.langMap
            };
        function a(t) {
            var e = t || r.theme;
            Object.keys(n["hb-day"]).forEach((function (t) {
                r[t] = n[e][t]
            }
            ))
        }
        a();
        var l, h, c, u = Object.assign({
            "zh-cn": {
                "委托价": "委托价",
                "累计": "累计"
            },
            "en-us": {
                "委托价": "Price",
                "累计": "Sum"
            }
        }, r.langMap || {}), d = [], p = [], f = 0, g = "string" == typeof t ? document.querySelector("#" + t.replace("#", "")) : t || document.querySelector("#chart"), b = document.createElement("canvas"), C = g.offsetWidth, m = g.offsetHeight, x = document.createElement("canvas"), y = !0, v = b.getContext("2d"), k = x.getContext("2d"), P = (c = v,
            (window.devicePixelRatio || 1) / (c.backingStorePixelRatio || c.webkitBackingStorePixelRatio || c.mozBackingStorePixelRatio || c.msBackingStorePixelRatio || c.oBackingStorePixelRatio || c.backingStorePixelRatio || 1)), w = C - r.ruleWidth, T = m - r.ruleHeight, S = ~~(m * r.paddingTop / 100), O = S * P, L = T - S, F = L * P, j = w * P, M = T * P;
        function D(t, e) {
            if (t = t || h)
                if (h = t,
                    $(k),
                    y = !1,
                    t > j - P)
                    y = !0;
                else {
                    for (var i = v.getImageData(t, 0, 1, M - 1 * P), o = 0; o < i.height; o++) {
                        var n = i.data[4 * o * i.width]
                            , r = i.data[4 * o * i.width + 1];
                        if (n || r)
                            return B(t, o, t > j / 2 ? "asks" : "bids"),
                                void (y = !0)
                    }
                    y = !0
                }
        }
        function A(t) {
            var e = (t + "").split(".");
            return getString(e, 1)[0].length
        }
        b.width = x.width = C * P,
            b.height = x.height = m * P,
            b.style.position = x.style.position = "absolute",
            b.style.width = x.style.width = C + "px",
            b.style.height = x.style.height = m + "px",
            g.style.position = "relative",
            g.appendChild(b),
            g.appendChild(x);
        var E = {
            1e3: ["K", "M", "B"],
            1e4: ["万", "亿", "兆"]
        };
        function R(t, e, i) {
            r.dotColor = "bids" === i ? r.bidsLineColor : r.asksLineColor,
                k.beginPath(),
                k.arc(t, e, 10 * P, 0, 2 * Math.PI),
                k.closePath(),
                k.fillStyle = r.dotColor.replace("1)", ".3)"),
                k.fill(),
                k.beginPath(),
                k.arc(t, e, 5 * P, 0, 2 * Math.PI),
                k.closePath(),
                k.fillStyle = r.dotColor,
                k.fill(),
                function (t, e, i) {
                    k.beginPath(),
                        k.strokeStyle = r[i + "LineColor"],
                        k.lineWidth = ~~(2 * P),
                        k.setLineDash([5 * P, 5 * P]),
                        k.moveTo(t, Math.min(e + 10 * P, M)),
                        k.lineTo(t, M),
                        k.stroke(),
                        k.closePath()
                }(t, e, i)
        }
        function B(t, e, i) {
            R(t, e, i),
                CanvasRenderingContext2D.prototype.roundRect = function (t, e, i, o, n) {
                    var r = Math.min(i, o);
                    return n > r / 2 && (n = r / 2),
                        this.beginPath(),
                        this.moveTo(t + n, e),
                        this.arcTo(t + i, e, t + i, e + o, n),
                        this.arcTo(t + i, e + o, t, e + o, n),
                        this.arcTo(t, e + o, t, e, n),
                        this.arcTo(t, e, t + i, e, n),
                        this.closePath(),
                        this
                }
                ;
            var o = (6 * (f ? Math.max(f.toFixed(r.amountFix).toString().length - 9, 0) : 0) + 140) * P
                , n = 90 * P
                , a = 18 * P;
            k.shadowBlur = r.tipShadow * P,
                k.shadowOffsetY = r.tipShadow * P;
            var s = w - t > o ? t + 4 : t - o - 2
                , h = e - n - a > k.shadowBlur ? e - n - a : e + a
                , c = e - n - a > k.shadowBlur ? e - n - a : e + a
                , g = e - n - a > k.shadowBlur ? e - a : e + n + a
                , b = J()
                , C = b.pTick * t + b.pMin
                , m = function (t, e) {
                    if ("bids" === e) {
                        var i = p.map((function (e) {
                            return Math.abs(e[0] - t)
                        }
                        ));
                        return i.indexOf(Math.min.apply(null, i)) > -1 && (l = p[i.indexOf(Math.min.apply(null, i))][1]),
                            l
                    }
                    var o = d.map((function (e) {
                        return Math.abs(e[0] - t)
                    }
                    ));
                    return o.indexOf(Math.min.apply(null, o)) > -1 && (l = d[o.indexOf(Math.min.apply(null, o))][1]),
                        l
                }(C, i);
            k.beginPath(),
                k.moveTo(q(t), q(c)),
                k.lineTo(q(t), q(g)),
                k.closePath(),
                k.lineWidth = ~~(4 * P),
                k.strokeStyle = "bids" === i ? r.bidsLineColor : r.asksLineColor,
                k.stroke(),
                k.fillStyle = r.bgColor,
                k.roundRect(s, h, o, n, 3 * P),
                k.fill(),
                k.shadowBlur = 0,
                k.shadowOffsetY = 0,
                k.fillStyle = r.tipColor,
                k.font = 12 * P + "px Arial",
                k.fillText(u[r.lang]["委托价"], s + 16 * P, h + 20 * P),
                k.fillText(C.toFixed(r.priceFix), s + 16 * P, h + 36 * P),
                k.fillText(u[r.lang]["累计"], s + 16 * P, h + 60 * P),
                k.fillText(m.toFixed(r.amountFix), s + 16 * P, h + 76 * P)
        }
        function W() {
            v.strokeStyle = r.axisColor,
                v.lineWidth = ~~(1.5 * P),
                v.beginPath(),
                v.moveTo(q(0), q(M)),
                v.lineTo(q(j), q(M)),
                v.lineTo(q(j), q(0)),
                v.stroke(),
                v.closePath()
        }
        function I() {
            v.strokeStyle = r.bidsLineColor,
                v.lineWidth = ~~(2 * P),
                v.beginPath();
            for (var t = p.sort((function (t, e) {
                return t[0] - e[0]
            }
            )), e = j / t.length / 2, i = 0; i < t.length; i++)
                0 === i && v.moveTo(q(i * e), q(Y(t[i][1]))),
                    v.lineTo(q(i * e), q(Y(t[i][1]))),
                    i === t.length - 1 && v.lineTo(q(i * e), q(M - P));
            v.stroke(),
                v.lineTo(q(0), q(M)),
                v.lineTo(q(0), q(0)),
                v.closePath(),
                v.fillStyle = r.bidsFillColor,
                v.fill()
        }
        function z() {
            v.strokeStyle = r.asksLineColor,
                v.beginPath();
            for (var t = d.sort((function (t, e) {
                return t[0] - e[0]
            }
            )), e = j / t.length / 2, i = j / 2 + 2 * P, o = 0; o < t.length; o++)
                0 === o && v.lineTo(q(i), q(M - P)),
                    v.lineTo(q(o * e + i), q(Y(t[o][1]))),
                    o === t.length - 1 && v.lineTo(q(j), q(Y(t[o][1])));
            v.stroke(),
                v.lineTo(q(j), q(M - P)),
                v.lineTo(q(i), q(M - P)),
                v.closePath(),
                v.fillStyle = r.asksFillColor,
                v.fill()
        }
        function H() {
            for (var t = 32 * P, e = 1 + ~~(T / 100), i = (j - 2 * t) / (~~(w / 100) - 1), o = (M - 2 * (16 * P)) / e, n = [], a = [], l = [], s = [], h = 0, c = [], u = [], d = J(), p = t; p < j; p += i)
                n.push(p),
                    a.push(d.pMin + p * d.pTick);
            for (var g = M - P; g > 0; g -= o)
                l.push(g),
                    s.push((M - P - g) * d.aTick);
            s.forEach((function (t, e) {
                h += t,
                    c.push(r.noAmountTick * e),
                    u.push(e)
            }
            )),
                f < 5 && 0 !== h && (s = u,
                    f = (F - o * e - 1) / o + 5),
                0 === h && (s = c),
                s[0] = 0,
                _(n, a, "x"),
                _(l, s, "y")
        }
        function _(t, e, i) {
            v.lineWidth = ~~(1.5 * P),
                v.strokeStyle = r.axisColor,
                v.font = 12 * P + "px Arial",
                v.fillStyle = r.color,
                v.textAlign = "x" === i ? "center" : "left";
            var o = P;
            "x" === i ? t.forEach((function (t, i) {
                v.beginPath(),
                    v.lineTo(q(t), M + o),
                    v.lineTo(q(t), (T + 4) * P + o),
                    v.stroke(),
                    v.closePath(),
                    v.fillText(e[i].toFixed(r.priceFix), q(t), (T + 20) * P + o)
            }
            )) : t.forEach((function (t, i) {
                var n = e[i] <= 1e3 ? e[i].toFixed(0) : function (t, e) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3
                        , o = E[i]
                        , n = o.reduce((function (t, e) {
                            return t[0] > i && (t[0] /= i,
                                t[1] = e),
                                t
                        }
                        ), [t, ""])
                        , r = e;
                    return A(n[0]) === A(i) - 1 && (r -= 1),
                        n[0] = n[0].toFixed(r),
                        n.join("")
                }(e[i], 2, 1e3);
                v.beginPath(),
                    v.lineTo(j + o, q(t + o)),
                    v.lineTo((w + 4) * P + o, q(t + o)),
                    v.stroke(),
                    v.fillText(n, (w + 8) * P + o, q(t + 4 * P)),
                    v.closePath()
            }
            ))
        }
        function q(t) {
            return .5 + ~~t
        }
        function Y(t) {
            if (0 === t)
                return M - P;
            var e = F - F * t / f + O;
            return e - M < ~~(v.lineWidth * P) ? e - ~~(v.lineWidth * P) : e
        }
        function $(t) {
            t.clearRect(0, 0, C * P, m * P)
        }
        function J() {
            var t = p[0] && p[0][0] || 0
                , e = d[d.length - 1] && d[d.length - 1][0] || 0;
            return {
                pMin: 1 * t,
                pMax: 1 * e,
                pTick: (e - t) / j,
                aTick: f / F
            }
        }
        function U() {
            $(v),
                W(),
                H(),
                I(),
                z()
        }
        return x.addEventListener("mousemove", (function (t) {
            var e = function (t) {
                var e = b.getBoundingClientRect();
                return {
                    x: (t.clientX - e.left) * P,
                    y: (t.clientY - e.top) * P
                }
            }(t);
            y && D(e.x, e.y)
        }
        ), !1),
            x.addEventListener("mouseout", (function (t) {
                setTimeout((function () {
                    return $(k)
                }
                ), 500),
                    h = null
            }
            ), !1),
            {
                update: U,
                putData: function (t) {
                    $(v),
                        $(k),
                        function (t) {
                            var e = []
                                , i = [];
                            t.asks.forEach((function (t, i) {
                                var o = [];
                                o.push(t[0]),
                                    i - 1 > -1 ? o.push(1 * t[1] + 1 * e[i - 1][1]) : o.push(t[1]),
                                    e.push(o)
                            }
                            ));
                            var o = e[e.length - 1] ? e[e.length - 1][1] : 0;
                            t.bids.forEach((function (t, e) {
                                var o = [];
                                o.push(t[0]),
                                    e - 1 > -1 ? o.push(1 * t[1] + 1 * i[e - 1][1]) : o.push(t[1]),
                                    i.push(o)
                            }
                            ));
                            var n = i[i.length - 1] ? i[i.length - 1][1] : 0;
                            f = Math.max(n, o),
                                d = e,
                                p = i.reverse()
                        }(t),
                        W(),
                        H(),
                        I(),
                        z(),
                        D()
                },
                forceUpdate: function () {
                    C = g.offsetWidth,
                        m = g.offsetHeight,
                        b.width = x.width = C * P,
                        b.height = x.height = m * P,
                        b.style.width = x.style.width = C + "px",
                        b.style.height = x.style.height = m + "px",
                        w = C - r.ruleWidth,
                        T = m - r.ruleHeight,
                        S = ~~(m * r.paddingTop / 100),
                        O = S * P,
                        F = (L = T - S) * P,
                        j = w * P,
                        M = T * P,
                        y = !0,
                        $(k),
                        U()
                },
                initTheme: a,
                reload: function (t) {
                    Object.assign(r, t)
                }
            }
    }
    return deptchChart
});