var e, t, n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e;
} : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
}, i = {};

!function(e, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : r(exports)) && "object" == ("undefined" == typeof module ? "undefined" : r(module)) ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == ("undefined" == typeof exports ? "undefined" : r(exports)) ? exports.AV = t() : e.AV = t();
}("undefined" != typeof self ? self : void 0, function() {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(i.exports, i, i.exports, t), i.l = !0, i.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            });
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default;
            } : function() {
                return e;
            };
            return t.d(n, "a", n), n;
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }, t.p = "", t(t.s = 23);
    }([ function(e, t, n) {
        (function(e, n) {
            var i, o;
            !function() {
                var s = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self.self === self && self || "object" == (void 0 === e ? "undefined" : r(e)) && e.global === e && e || this || {}, a = s._, u = Array.prototype, c = Object.prototype, l = "undefined" != typeof Symbol ? Symbol.prototype : null, h = u.push, f = u.slice, d = c.toString, p = c.hasOwnProperty, _ = Array.isArray, v = Object.keys, y = Object.create, m = function() {}, g = function e(t) {
                    return t instanceof e ? t : this instanceof e ? void (this._wrapped = t) : new e(t);
                };
                void 0 === t || t.nodeType ? s._ = g : (void 0 !== n && !n.nodeType && n.exports && (t = n.exports = g), 
                t._ = g), g.VERSION = "1.9.1";
                var b, w = function(e, t, n) {
                    if (void 0 === t) return e;
                    switch (null == n ? 3 : n) {
                      case 1:
                        return function(n) {
                            return e.call(t, n);
                        };

                      case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i);
                        };

                      case 4:
                        return function(n, r, i, o) {
                            return e.call(t, n, r, i, o);
                        };
                    }
                    return function() {
                        return e.apply(t, arguments);
                    };
                }, O = function(e, t, n) {
                    return g.iteratee !== b ? g.iteratee(e, t) : null == e ? g.identity : g.isFunction(e) ? w(e, t, n) : g.isObject(e) && !g.isArray(e) ? g.matcher(e) : g.property(e);
                };
                g.iteratee = b = function(e, t) {
                    return O(e, t, 1 / 0);
                };
                var S = function(e, t) {
                    return t = null == t ? e.length - 1 : +t, function() {
                        for (var n = Math.max(arguments.length - t, 0), r = Array(n), i = 0; i < n; i++) r[i] = arguments[i + t];
                        switch (t) {
                          case 0:
                            return e.call(this, r);

                          case 1:
                            return e.call(this, arguments[0], r);

                          case 2:
                            return e.call(this, arguments[0], arguments[1], r);
                        }
                        var o = Array(t + 1);
                        for (i = 0; i < t; i++) o[i] = arguments[i];
                        return o[t] = r, e.apply(this, o);
                    };
                }, A = function(e) {
                    if (!g.isObject(e)) return {};
                    if (y) return y(e);
                    m.prototype = e;
                    var t = new m();
                    return m.prototype = null, t;
                }, E = function(e) {
                    return function(t) {
                        return null == t ? void 0 : t[e];
                    };
                }, C = function(e, t) {
                    return null != e && p.call(e, t);
                }, T = function(e, t) {
                    for (var n = t.length, r = 0; r < n; r++) {
                        if (null == e) return;
                        e = e[t[r]];
                    }
                    return n ? e : void 0;
                }, j = Math.pow(2, 53) - 1, N = E("length"), x = function(e) {
                    var t = N(e);
                    return "number" == typeof t && t >= 0 && t <= j;
                };
                g.each = g.forEach = function(e, t, n) {
                    t = w(t, n);
                    var r, i;
                    if (x(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e); else {
                        var o = g.keys(e);
                        for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e);
                    }
                    return e;
                }, g.map = g.collect = function(e, t, n) {
                    t = O(t, n);
                    for (var r = !x(e) && g.keys(e), i = (r || e).length, o = Array(i), s = 0; s < i; s++) {
                        var a = r ? r[s] : s;
                        o[s] = t(e[a], a, e);
                    }
                    return o;
                };
                var k = function(e) {
                    var t = function(t, n, r, i) {
                        var o = !x(t) && g.keys(t), s = (o || t).length, a = e > 0 ? 0 : s - 1;
                        for (i || (r = t[o ? o[a] : a], a += e); a >= 0 && a < s; a += e) {
                            var u = o ? o[a] : a;
                            r = n(r, t[u], u, t);
                        }
                        return r;
                    };
                    return function(e, n, r, i) {
                        var o = arguments.length >= 3;
                        return t(e, w(n, i, 4), r, o);
                    };
                };
                g.reduce = g.foldl = g.inject = k(1), g.reduceRight = g.foldr = k(-1), g.find = g.detect = function(e, t, n) {
                    var r = (x(e) ? g.findIndex : g.findKey)(e, t, n);
                    if (void 0 !== r && -1 !== r) return e[r];
                }, g.filter = g.select = function(e, t, n) {
                    var r = [];
                    return t = O(t, n), g.each(e, function(e, n, i) {
                        t(e, n, i) && r.push(e);
                    }), r;
                }, g.reject = function(e, t, n) {
                    return g.filter(e, g.negate(O(t)), n);
                }, g.every = g.all = function(e, t, n) {
                    t = O(t, n);
                    for (var r = !x(e) && g.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                        var s = r ? r[o] : o;
                        if (!t(e[s], s, e)) return !1;
                    }
                    return !0;
                }, g.some = g.any = function(e, t, n) {
                    t = O(t, n);
                    for (var r = !x(e) && g.keys(e), i = (r || e).length, o = 0; o < i; o++) {
                        var s = r ? r[o] : o;
                        if (t(e[s], s, e)) return !0;
                    }
                    return !1;
                }, g.contains = g.includes = g.include = function(e, t, n, r) {
                    return x(e) || (e = g.values(e)), ("number" != typeof n || r) && (n = 0), g.indexOf(e, t, n) >= 0;
                }, g.invoke = S(function(e, t, n) {
                    var r, i;
                    return g.isFunction(t) ? i = t : g.isArray(t) && (r = t.slice(0, -1), t = t[t.length - 1]), 
                    g.map(e, function(e) {
                        var o = i;
                        if (!o) {
                            if (r && r.length && (e = T(e, r)), null == e) return;
                            o = e[t];
                        }
                        return null == o ? o : o.apply(e, n);
                    });
                }), g.pluck = function(e, t) {
                    return g.map(e, g.property(t));
                }, g.where = function(e, t) {
                    return g.filter(e, g.matcher(t));
                }, g.findWhere = function(e, t) {
                    return g.find(e, g.matcher(t));
                }, g.max = function(e, t, n) {
                    var i, o, s = -1 / 0, a = -1 / 0;
                    if (null == t || "number" == typeof t && "object" != r(e[0]) && null != e) for (var u = 0, c = (e = x(e) ? e : g.values(e)).length; u < c; u++) null != (i = e[u]) && i > s && (s = i); else t = O(t, n), 
                    g.each(e, function(e, n, r) {
                        ((o = t(e, n, r)) > a || o === -1 / 0 && s === -1 / 0) && (s = e, a = o);
                    });
                    return s;
                }, g.min = function(e, t, n) {
                    var i, o, s = 1 / 0, a = 1 / 0;
                    if (null == t || "number" == typeof t && "object" != r(e[0]) && null != e) for (var u = 0, c = (e = x(e) ? e : g.values(e)).length; u < c; u++) null != (i = e[u]) && i < s && (s = i); else t = O(t, n), 
                    g.each(e, function(e, n, r) {
                        ((o = t(e, n, r)) < a || o === 1 / 0 && s === 1 / 0) && (s = e, a = o);
                    });
                    return s;
                }, g.shuffle = function(e) {
                    return g.sample(e, 1 / 0);
                }, g.sample = function(e, t, n) {
                    if (null == t || n) return x(e) || (e = g.values(e)), e[g.random(e.length - 1)];
                    var r = x(e) ? g.clone(e) : g.values(e), i = N(r);
                    t = Math.max(Math.min(t, i), 0);
                    for (var o = i - 1, s = 0; s < t; s++) {
                        var a = g.random(s, o), u = r[s];
                        r[s] = r[a], r[a] = u;
                    }
                    return r.slice(0, t);
                }, g.sortBy = function(e, t, n) {
                    var r = 0;
                    return t = O(t, n), g.pluck(g.map(e, function(e, n, i) {
                        return {
                            value: e,
                            index: r++,
                            criteria: t(e, n, i)
                        };
                    }).sort(function(e, t) {
                        var n = e.criteria, r = t.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n) return 1;
                            if (n < r || void 0 === r) return -1;
                        }
                        return e.index - t.index;
                    }), "value");
                };
                var U = function(e, t) {
                    return function(n, r, i) {
                        var o = t ? [ [], [] ] : {};
                        return r = O(r, i), g.each(n, function(t, i) {
                            var s = r(t, i, n);
                            e(o, t, s);
                        }), o;
                    };
                };
                g.groupBy = U(function(e, t, n) {
                    C(e, n) ? e[n].push(t) : e[n] = [ t ];
                }), g.indexBy = U(function(e, t, n) {
                    e[n] = t;
                }), g.countBy = U(function(e, t, n) {
                    C(e, n) ? e[n]++ : e[n] = 1;
                });
                var I = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
                g.toArray = function(e) {
                    return e ? g.isArray(e) ? f.call(e) : g.isString(e) ? e.match(I) : x(e) ? g.map(e, g.identity) : g.values(e) : [];
                }, g.size = function(e) {
                    return null == e ? 0 : x(e) ? e.length : g.keys(e).length;
                }, g.partition = U(function(e, t, n) {
                    e[n ? 0 : 1].push(t);
                }, !0), g.first = g.head = g.take = function(e, t, n) {
                    return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || n ? e[0] : g.initial(e, e.length - t);
                }, g.initial = function(e, t, n) {
                    return f.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
                }, g.last = function(e, t, n) {
                    return null == e || e.length < 1 ? null == t ? void 0 : [] : null == t || n ? e[e.length - 1] : g.rest(e, Math.max(0, e.length - t));
                }, g.rest = g.tail = g.drop = function(e, t, n) {
                    return f.call(e, null == t || n ? 1 : t);
                }, g.compact = function(e) {
                    return g.filter(e, Boolean);
                };
                var R = function e(t, n, r, i) {
                    for (var o = (i = i || []).length, s = 0, a = N(t); s < a; s++) {
                        var u = t[s];
                        if (x(u) && (g.isArray(u) || g.isArguments(u))) if (n) for (var c = 0, l = u.length; c < l; ) i[o++] = u[c++]; else e(u, n, r, i), 
                        o = i.length; else r || (i[o++] = u);
                    }
                    return i;
                };
                g.flatten = function(e, t) {
                    return R(e, t, !1);
                }, g.without = S(function(e, t) {
                    return g.difference(e, t);
                }), g.uniq = g.unique = function(e, t, n, r) {
                    g.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = O(n, r));
                    for (var i = [], o = [], s = 0, a = N(e); s < a; s++) {
                        var u = e[s], c = n ? n(u, s, e) : u;
                        t && !n ? (s && o === c || i.push(u), o = c) : n ? g.contains(o, c) || (o.push(c), 
                        i.push(u)) : g.contains(i, u) || i.push(u);
                    }
                    return i;
                }, g.union = S(function(e) {
                    return g.uniq(R(e, !0, !0));
                }), g.intersection = function(e) {
                    for (var t = [], n = arguments.length, r = 0, i = N(e); r < i; r++) {
                        var o = e[r];
                        if (!g.contains(t, o)) {
                            var s;
                            for (s = 1; s < n && g.contains(arguments[s], o); s++) ;
                            s === n && t.push(o);
                        }
                    }
                    return t;
                }, g.difference = S(function(e, t) {
                    return t = R(t, !0, !0), g.filter(e, function(e) {
                        return !g.contains(t, e);
                    });
                }), g.unzip = function(e) {
                    for (var t = e && g.max(e, N).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = g.pluck(e, r);
                    return n;
                }, g.zip = S(g.unzip), g.object = function(e, t) {
                    for (var n = {}, r = 0, i = N(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                    return n;
                };
                var P = function(e) {
                    return function(t, n, r) {
                        n = O(n, r);
                        for (var i = N(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e) if (n(t[o], o, t)) return o;
                        return -1;
                    };
                };
                g.findIndex = P(1), g.findLastIndex = P(-1), g.sortedIndex = function(e, t, n, r) {
                    for (var i = (n = O(n, r, 1))(t), o = 0, s = N(e); o < s; ) {
                        var a = Math.floor((o + s) / 2);
                        n(e[a]) < i ? o = a + 1 : s = a;
                    }
                    return o;
                };
                var D = function(e, t, n) {
                    return function(r, i, o) {
                        var s = 0, a = N(r);
                        if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (n && o && a) return o = n(r, i), 
                        r[o] === i ? o : -1;
                        if (i !== i) return (o = t(f.call(r, s, a), g.isNaN)) >= 0 ? o + s : -1;
                        for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e) if (r[o] === i) return o;
                        return -1;
                    };
                };
                g.indexOf = D(1, g.findIndex, g.sortedIndex), g.lastIndexOf = D(-1, g.findLastIndex), 
                g.range = function(e, t, n) {
                    null == t && (t = e || 0, e = 0), n || (n = t < e ? -1 : 1);
                    for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, 
                    e += n) i[o] = e;
                    return i;
                }, g.chunk = function(e, t) {
                    if (null == t || t < 1) return [];
                    for (var n = [], r = 0, i = e.length; r < i; ) n.push(f.call(e, r, r += t));
                    return n;
                };
                var L = function(e, t, n, r, i) {
                    if (!(r instanceof t)) return e.apply(n, i);
                    var o = A(e.prototype), s = e.apply(o, i);
                    return g.isObject(s) ? s : o;
                };
                g.bind = S(function(e, t, n) {
                    if (!g.isFunction(e)) throw new TypeError("Bind must be called on a function");
                    var r = S(function(i) {
                        return L(e, r, t, this, n.concat(i));
                    });
                    return r;
                }), (g.partial = S(function(e, t) {
                    var n = g.partial.placeholder;
                    return function r() {
                        for (var i = 0, o = t.length, s = Array(o), a = 0; a < o; a++) s[a] = t[a] === n ? arguments[i++] : t[a];
                        for (;i < arguments.length; ) s.push(arguments[i++]);
                        return L(e, r, this, this, s);
                    };
                })).placeholder = g, g.bindAll = S(function(e, t) {
                    var n = (t = R(t, !1, !1)).length;
                    if (n < 1) throw new Error("bindAll must be passed function names");
                    for (;n--; ) {
                        var r = t[n];
                        e[r] = g.bind(e[r], e);
                    }
                }), g.memoize = function(e, t) {
                    var n = function n(r) {
                        var i = n.cache, o = "" + (t ? t.apply(this, arguments) : r);
                        return C(i, o) || (i[o] = e.apply(this, arguments)), i[o];
                    };
                    return n.cache = {}, n;
                }, g.delay = S(function(e, t, n) {
                    return setTimeout(function() {
                        return e.apply(null, n);
                    }, t);
                }), g.defer = g.partial(g.delay, g, 1), g.throttle = function(e, t, n) {
                    var r, i, o, s, a = 0;
                    n || (n = {});
                    var u = function() {
                        a = !1 === n.leading ? 0 : g.now(), r = null, s = e.apply(i, o), r || (i = o = null);
                    }, c = function() {
                        var c = g.now();
                        a || !1 !== n.leading || (a = c);
                        var l = t - (c - a);
                        return i = this, o = arguments, l <= 0 || l > t ? (r && (clearTimeout(r), r = null), 
                        a = c, s = e.apply(i, o), r || (i = o = null)) : r || !1 === n.trailing || (r = setTimeout(u, l)), 
                        s;
                    };
                    return c.cancel = function() {
                        clearTimeout(r), a = 0, r = i = o = null;
                    }, c;
                }, g.debounce = function(e, t, n) {
                    var r, i, o = function(t, n) {
                        r = null, n && (i = e.apply(t, n));
                    }, s = S(function(s) {
                        if (r && clearTimeout(r), n) {
                            var a = !r;
                            r = setTimeout(o, t), a && (i = e.apply(this, s));
                        } else r = g.delay(o, t, this, s);
                        return i;
                    });
                    return s.cancel = function() {
                        clearTimeout(r), r = null;
                    }, s;
                }, g.wrap = function(e, t) {
                    return g.partial(t, e);
                }, g.negate = function(e) {
                    return function() {
                        return !e.apply(this, arguments);
                    };
                }, g.compose = function() {
                    var e = arguments, t = e.length - 1;
                    return function() {
                        for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
                        return r;
                    };
                }, g.after = function(e, t) {
                    return function() {
                        if (--e < 1) return t.apply(this, arguments);
                    };
                }, g.before = function(e, t) {
                    var n;
                    return function() {
                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
                    };
                }, g.once = g.partial(g.before, 2), g.restArguments = S;
                var F = !{
                    toString: null
                }.propertyIsEnumerable("toString"), q = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ], M = function(e, t) {
                    var n = q.length, r = e.constructor, i = g.isFunction(r) && r.prototype || c, o = "constructor";
                    for (C(e, o) && !g.contains(t, o) && t.push(o); n--; ) (o = q[n]) in e && e[o] !== i[o] && !g.contains(t, o) && t.push(o);
                };
                g.keys = function(e) {
                    if (!g.isObject(e)) return [];
                    if (v) return v(e);
                    var t = [];
                    for (var n in e) C(e, n) && t.push(n);
                    return F && M(e, t), t;
                }, g.allKeys = function(e) {
                    if (!g.isObject(e)) return [];
                    var t = [];
                    for (var n in e) t.push(n);
                    return F && M(e, t), t;
                }, g.values = function(e) {
                    for (var t = g.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
                    return r;
                }, g.mapObject = function(e, t, n) {
                    t = O(t, n);
                    for (var r = g.keys(e), i = r.length, o = {}, s = 0; s < i; s++) {
                        var a = r[s];
                        o[a] = t(e[a], a, e);
                    }
                    return o;
                }, g.pairs = function(e) {
                    for (var t = g.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [ t[i], e[t[i]] ];
                    return r;
                }, g.invert = function(e) {
                    for (var t = {}, n = g.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
                    return t;
                }, g.functions = g.methods = function(e) {
                    var t = [];
                    for (var n in e) g.isFunction(e[n]) && t.push(n);
                    return t.sort();
                };
                var B = function(e, t) {
                    return function(n) {
                        var r = arguments.length;
                        if (t && (n = Object(n)), r < 2 || null == n) return n;
                        for (var i = 1; i < r; i++) for (var o = arguments[i], s = e(o), a = s.length, u = 0; u < a; u++) {
                            var c = s[u];
                            t && void 0 !== n[c] || (n[c] = o[c]);
                        }
                        return n;
                    };
                };
                g.extend = B(g.allKeys), g.extendOwn = g.assign = B(g.keys), g.findKey = function(e, t, n) {
                    t = O(t, n);
                    for (var r, i = g.keys(e), o = 0, s = i.length; o < s; o++) if (r = i[o], t(e[r], r, e)) return r;
                };
                var W = function(e, t, n) {
                    return t in n;
                };
                g.pick = S(function(e, t) {
                    var n = {}, r = t[0];
                    if (null == e) return n;
                    g.isFunction(r) ? (t.length > 1 && (r = w(r, t[1])), t = g.allKeys(e)) : (r = W, 
                    t = R(t, !1, !1), e = Object(e));
                    for (var i = 0, o = t.length; i < o; i++) {
                        var s = t[i], a = e[s];
                        r(a, s, e) && (n[s] = a);
                    }
                    return n;
                }), g.omit = S(function(e, t) {
                    var n, r = t[0];
                    return g.isFunction(r) ? (r = g.negate(r), t.length > 1 && (n = t[1])) : (t = g.map(R(t, !1, !1), String), 
                    r = function(e, n) {
                        return !g.contains(t, n);
                    }), g.pick(e, r, n);
                }), g.defaults = B(g.allKeys, !0), g.create = function(e, t) {
                    var n = A(e);
                    return t && g.extendOwn(n, t), n;
                }, g.clone = function(e) {
                    return g.isObject(e) ? g.isArray(e) ? e.slice() : g.extend({}, e) : e;
                }, g.tap = function(e, t) {
                    return t(e), e;
                }, g.isMatch = function(e, t) {
                    var n = g.keys(t), r = n.length;
                    if (null == e) return !r;
                    for (var i = Object(e), o = 0; o < r; o++) {
                        var s = n[o];
                        if (t[s] !== i[s] || !(s in i)) return !1;
                    }
                    return !0;
                };
                var J, Q;
                J = function(e, t, n, i) {
                    if (e === t) return 0 !== e || 1 / e == 1 / t;
                    if (null == e || null == t) return !1;
                    if (e !== e) return t !== t;
                    var o = void 0 === e ? "undefined" : r(e);
                    return ("function" === o || "object" === o || "object" == (void 0 === t ? "undefined" : r(t))) && Q(e, t, n, i);
                }, Q = function(e, t, n, i) {
                    e instanceof g && (e = e._wrapped), t instanceof g && (t = t._wrapped);
                    var o = d.call(e);
                    if (o !== d.call(t)) return !1;
                    switch (o) {
                      case "[object RegExp]":
                      case "[object String]":
                        return "" + e == "" + t;

                      case "[object Number]":
                        return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;

                      case "[object Date]":
                      case "[object Boolean]":
                        return +e == +t;

                      case "[object Symbol]":
                        return l.valueOf.call(e) === l.valueOf.call(t);
                    }
                    var s = "[object Array]" === o;
                    if (!s) {
                        if ("object" != (void 0 === e ? "undefined" : r(e)) || "object" != (void 0 === t ? "undefined" : r(t))) return !1;
                        var a = e.constructor, u = t.constructor;
                        if (a !== u && !(g.isFunction(a) && a instanceof a && g.isFunction(u) && u instanceof u) && "constructor" in e && "constructor" in t) return !1;
                    }
                    n = n || [], i = i || [];
                    for (var c = n.length; c--; ) if (n[c] === e) return i[c] === t;
                    if (n.push(e), i.push(t), s) {
                        if ((c = e.length) !== t.length) return !1;
                        for (;c--; ) if (!J(e[c], t[c], n, i)) return !1;
                    } else {
                        var h, f = g.keys(e);
                        if (c = f.length, g.keys(t).length !== c) return !1;
                        for (;c--; ) if (h = f[c], !C(t, h) || !J(e[h], t[h], n, i)) return !1;
                    }
                    return n.pop(), i.pop(), !0;
                }, g.isEqual = function(e, t) {
                    return J(e, t);
                }, g.isEmpty = function(e) {
                    return null == e || (x(e) && (g.isArray(e) || g.isString(e) || g.isArguments(e)) ? 0 === e.length : 0 === g.keys(e).length);
                }, g.isElement = function(e) {
                    return !(!e || 1 !== e.nodeType);
                }, g.isArray = _ || function(e) {
                    return "[object Array]" === d.call(e);
                }, g.isObject = function(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return "function" === t || "object" === t && !!e;
                }, g.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error", "Symbol", "Map", "WeakMap", "Set", "WeakSet" ], function(e) {
                    g["is" + e] = function(t) {
                        return d.call(t) === "[object " + e + "]";
                    };
                }), g.isArguments(arguments) || (g.isArguments = function(e) {
                    return C(e, "callee");
                });
                var V = s.document && s.document.childNodes;
                "function" != typeof /./ && "object" != ("undefined" == typeof Int8Array ? "undefined" : r(Int8Array)) && "function" != typeof V && (g.isFunction = function(e) {
                    return "function" == typeof e || !1;
                }), g.isFinite = function(e) {
                    return !g.isSymbol(e) && isFinite(e) && !isNaN(parseFloat(e));
                }, g.isNaN = function(e) {
                    return g.isNumber(e) && isNaN(e);
                }, g.isBoolean = function(e) {
                    return !0 === e || !1 === e || "[object Boolean]" === d.call(e);
                }, g.isNull = function(e) {
                    return null === e;
                }, g.isUndefined = function(e) {
                    return void 0 === e;
                }, g.has = function(e, t) {
                    if (!g.isArray(t)) return C(e, t);
                    for (var n = t.length, r = 0; r < n; r++) {
                        var i = t[r];
                        if (null == e || !p.call(e, i)) return !1;
                        e = e[i];
                    }
                    return !!n;
                }, g.noConflict = function() {
                    return s._ = a, this;
                }, g.identity = function(e) {
                    return e;
                }, g.constant = function(e) {
                    return function() {
                        return e;
                    };
                }, g.noop = function() {}, g.property = function(e) {
                    return g.isArray(e) ? function(t) {
                        return T(t, e);
                    } : E(e);
                }, g.propertyOf = function(e) {
                    return null == e ? function() {} : function(t) {
                        return g.isArray(t) ? T(e, t) : e[t];
                    };
                }, g.matcher = g.matches = function(e) {
                    return e = g.extendOwn({}, e), function(t) {
                        return g.isMatch(t, e);
                    };
                }, g.times = function(e, t, n) {
                    var r = Array(Math.max(0, e));
                    t = w(t, n, 1);
                    for (var i = 0; i < e; i++) r[i] = t(i);
                    return r;
                }, g.random = function(e, t) {
                    return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
                }, g.now = Date.now || function() {
                    return new Date().getTime();
                };
                var K = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }, G = g.invert(K), H = function(e) {
                    var t = function(t) {
                        return e[t];
                    }, n = "(?:" + g.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
                    return function(e) {
                        return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
                    };
                };
                g.escape = H(K), g.unescape = H(G), g.result = function(e, t, n) {
                    g.isArray(t) || (t = [ t ]);
                    var r = t.length;
                    if (!r) return g.isFunction(n) ? n.call(e) : n;
                    for (var i = 0; i < r; i++) {
                        var o = null == e ? void 0 : e[t[i]];
                        void 0 === o && (o = n, i = r), e = g.isFunction(o) ? o.call(e) : o;
                    }
                    return e;
                };
                var z = 0;
                g.uniqueId = function(e) {
                    var t = ++z + "";
                    return e ? e + t : t;
                }, g.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var $ = /(.)^/, X = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }, Y = /\\|'|\r|\n|\u2028|\u2029/g, Z = function(e) {
                    return "\\" + X[e];
                };
                g.template = function(e, t, n) {
                    !t && n && (t = n), t = g.defaults({}, t, g.templateSettings);
                    var r = RegExp([ (t.escape || $).source, (t.interpolate || $).source, (t.evaluate || $).source ].join("|") + "|$", "g"), i = 0, o = "__p+='";
                    e.replace(r, function(t, n, r, s, a) {
                        return o += e.slice(i, a).replace(Y, Z), i = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), 
                        t;
                    }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
                    var s;
                    try {
                        s = new Function(t.variable || "obj", "_", o);
                    } catch (e) {
                        throw e.source = o, e;
                    }
                    var a = function(e) {
                        return s.call(this, e, g);
                    };
                    return a.source = "function(" + (t.variable || "obj") + "){\n" + o + "}", a;
                }, g.chain = function(e) {
                    var t = g(e);
                    return t._chain = !0, t;
                };
                var ee = function(e, t) {
                    return e._chain ? g(t).chain() : t;
                };
                g.mixin = function(e) {
                    return g.each(g.functions(e), function(t) {
                        var n = g[t] = e[t];
                        g.prototype[t] = function() {
                            var e = [ this._wrapped ];
                            return h.apply(e, arguments), ee(this, n.apply(g, e));
                        };
                    }), g;
                }, g.mixin(g), g.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
                    var t = u[e];
                    g.prototype[e] = function() {
                        var n = this._wrapped;
                        return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], 
                        ee(this, n);
                    };
                }), g.each([ "concat", "join", "slice" ], function(e) {
                    var t = u[e];
                    g.prototype[e] = function() {
                        return ee(this, t.apply(this._wrapped, arguments));
                    };
                }), g.prototype.value = function() {
                    return this._wrapped;
                }, g.prototype.valueOf = g.prototype.toJSON = g.prototype.value, g.prototype.toString = function() {
                    return String(this._wrapped);
                }, i = [], void 0 !== (o = function() {
                    return g;
                }.apply(t, i)) && (n.exports = o);
            }();
        }).call(t, n(6), n(30)(e));
    }, function(e, t, n) {
        var r = n(42).Promise;
        r._continueWhile = function(e, t) {
            return e() ? t().then(function() {
                return r._continueWhile(e, t);
            }) : r.resolve();
        }, e.exports = r;
    }, function(e, t, n) {
        var r = n(0), i = n(57), o = n(0).extend, s = n(1), a = n(5), u = n(3), c = u.getSessionToken, l = u.ajax, h = function(e, t) {
            var n = new Date().getTime(), r = i(n + e);
            return t ? r + "," + n + ",master" : r + "," + n;
        }, f = function(e, t) {
            t ? e["X-LC-Sign"] = h(a.applicationKey) : e["X-LC-Key"] = a.applicationKey;
        }, d = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1], n = {
                "X-LC-Id": a.applicationId,
                "Content-Type": "application/json;charset=UTF-8"
            }, r = !1;
            return "boolean" == typeof e.useMasterKey ? r = e.useMasterKey : "boolean" == typeof a._config.useMasterKey && (r = a._config.useMasterKey), 
            r ? a.masterKey ? t ? n["X-LC-Sign"] = h(a.masterKey, !0) : n["X-LC-Key"] = a.masterKey + ",master" : (console.warn("masterKey is not set, fall back to use appKey"), 
            f(n, t)) : f(n, t), a.hookKey && (n["X-LC-Hook-Key"] = a.hookKey), null !== a._config.production && (n["X-LC-Prod"] = String(a._config.production)), 
            n["X-LC-UA"] = a._sharedConfig.userAgent, s.resolve().then(function() {
                var t = c(e);
                if (t) n["X-LC-Session"] = t; else if (!a._config.disableCurrentUser) return a.User.currentAsync().then(function(e) {
                    return e && e._sessionToken && (n["X-LC-Session"] = e._sessionToken), n;
                });
                return n;
            });
        }, p = function(e) {
            var t = e.service, n = void 0 === t ? "api" : t, r = e.version, i = void 0 === r ? "1.1" : r, o = e.path, s = a._config.serverURLs[n];
            if (!s) throw new Error("undefined server URL for " + n);
            return "/" !== s.charAt(s.length - 1) && (s += "/"), s += i, o && (s += o), s;
        }, _ = function(e) {
            var t = e.service, n = e.version, i = e.method, o = e.path, s = e.query, u = e.data, c = e.authOptions, h = e.signKey, f = void 0 === h || h;
            if (!a.applicationId || !a.applicationKey && !a.masterKey) throw new Error("Not initialized");
            a._appRouter.refresh();
            var _ = a._config.requestTimeout, v = p({
                service: t,
                path: o,
                version: n
            });
            return d(c, f).then(function(e) {
                return l({
                    method: i,
                    url: v,
                    query: s,
                    data: u,
                    headers: e,
                    timeout: _
                }).catch(function(e) {
                    var t = {
                        code: e.code || -1,
                        error: e.message || e.responseText
                    };
                    if (e.response && e.response.code) t = e.response; else if (e.responseText) try {
                        t = JSON.parse(e.responseText);
                    } catch (e) {}
                    t.rawMessage = t.rawMessage || t.error, a._sharedConfig.keepErrorRawMessage || (t.error += " [" + (e.statusCode || "N/A") + " " + i + " " + v + "]");
                    var n = new Error(t.error);
                    throw delete t.error, r.extend(n, t);
                });
            });
        };
        a.request = _, e.exports = {
            _request: function(e, t, n, r, i, s, a) {
                var u = "";
                if (e && (u += "/" + e), t && (u += "/" + t), n && (u += "/" + n), i && i._fetchWhenSave) throw new Error("_fetchWhenSave should be in the query");
                if (i && i._where) throw new Error("_where should be in the query");
                return r && "get" === r.toLowerCase() && (a = o({}, a, i), i = null), _({
                    method: r,
                    path: u,
                    query: a,
                    data: i,
                    authOptions: s
                });
            },
            request: _
        };
    }, function(e, t, n) {
        var i = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : r(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
        }, o = n(0), s = n(8), a = n(7), u = a("leancloud:request"), c = a("leancloud:request:error"), l = n(1), h = 0, f = function(e) {
            return o.isArray(e) ? e : void 0 === e || null === e ? [] : [ e ];
        }, d = function() {};
        e.exports = {
            ajax: function(e) {
                var t = e.method, n = e.url, r = e.query, o = e.data, f = e.headers, d = void 0 === f ? {} : f, p = e.onprogress, _ = e.timeout, v = {};
                if (r) for (var y in r) {
                    var m = r[y];
                    void 0 !== m && ("object" === (void 0 === m ? "undefined" : i(m)) ? v[y] = JSON.stringify(m) : v[y] = m);
                }
                var g = h++;
                return u("request(%d) %s %s %o %o %o", g, t, n, v, o, d), new l(function(e, i) {
                    var l = s(t, n).set(d).query(v).send(o);
                    p && l.on("progress", p), _ && l.timeout(_), l.end(function(s, l) {
                        return s ? (l && (a.enabled("leancloud:request") || c("request(%d) %s %s %o %o %o", g, t, n, r, o, d), 
                        c("response(%d) %d %O %o", g, l.status, l.body || l.text, l.header), s.statusCode = l.status, 
                        s.responseText = l.text, s.response = l.body), i(s)) : (u("response(%d) %d %O %o", g, l.status, l.body || l.text, l.header), 
                        e(l.body));
                    });
                });
            },
            isNullOrUndefined: function(e) {
                return o.isNull(e) || o.isUndefined(e);
            },
            ensureArray: f,
            transformFetchOptions: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.keys, n = e.include, r = e.includeACL, i = {};
                return t && (i.keys = f(t).join(",")), n && (i.include = f(n).join(",")), r && (i.returnACL = r), 
                i;
            },
            getSessionToken: function(e) {
                return e.sessionToken ? e.sessionToken : e.user && "function" == typeof e.user.getSessionToken ? e.user.getSessionToken() : void 0;
            },
            tap: function(e) {
                return function(t) {
                    return e(t), t;
                };
            },
            inherits: function(e, t, n) {
                var r;
                return r = t && t.hasOwnProperty("constructor") ? t.constructor : function() {
                    e.apply(this, arguments);
                }, o.extend(r, e), d.prototype = e.prototype, r.prototype = new d(), t && o.extend(r.prototype, t), 
                n && o.extend(r, n), r.prototype.constructor = r, r.__super__ = e.prototype, r;
            },
            parseDate: function(e) {
                var t = new RegExp("^([0-9]{1,4})-([0-9]{1,2})-([0-9]{1,2})T([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})(.([0-9]+))?Z$").exec(e);
                if (!t) return null;
                var n = t[1] || 0, r = (t[2] || 1) - 1, i = t[3] || 0, o = t[4] || 0, s = t[5] || 0, a = t[6] || 0, u = t[8] || 0;
                return new Date(Date.UTC(n, r, i, o, s, a, u));
            },
            setValue: function(e, t, n) {
                var r = t.split("."), i = r.pop(), o = e;
                return r.forEach(function(e) {
                    void 0 === o[e] && (o[e] = {}), o = o[e];
                }), o[i] = n, e;
            },
            findValue: function(e, t) {
                for (var n = t.split("."), r = n[0], i = n.pop(), o = e, s = 0; s < n.length; s++) if (void 0 === (o = o[n[s]])) return [ void 0, void 0, i ];
                return [ o[i], o, i, r ];
            },
            isPlainObject: function(e) {
                return o.isObject(e) && Object.getPrototypeOf(e) === Object.prototype;
            }
        };
    }, function(e, t, n) {
        function r(e, t) {
            var n = new Error(t);
            return n.code = e, n;
        }
        n(0).extend(r, {
            OTHER_CAUSE: -1,
            INTERNAL_SERVER_ERROR: 1,
            CONNECTION_FAILED: 100,
            OBJECT_NOT_FOUND: 101,
            INVALID_QUERY: 102,
            INVALID_CLASS_NAME: 103,
            MISSING_OBJECT_ID: 104,
            INVALID_KEY_NAME: 105,
            INVALID_POINTER: 106,
            INVALID_JSON: 107,
            COMMAND_UNAVAILABLE: 108,
            NOT_INITIALIZED: 109,
            INCORRECT_TYPE: 111,
            INVALID_CHANNEL_NAME: 112,
            PUSH_MISCONFIGURED: 115,
            OBJECT_TOO_LARGE: 116,
            OPERATION_FORBIDDEN: 119,
            CACHE_MISS: 120,
            INVALID_NESTED_KEY: 121,
            INVALID_FILE_NAME: 122,
            INVALID_ACL: 123,
            TIMEOUT: 124,
            INVALID_EMAIL_ADDRESS: 125,
            MISSING_CONTENT_TYPE: 126,
            MISSING_CONTENT_LENGTH: 127,
            INVALID_CONTENT_LENGTH: 128,
            FILE_TOO_LARGE: 129,
            FILE_SAVE_ERROR: 130,
            FILE_DELETE_ERROR: 153,
            DUPLICATE_VALUE: 137,
            INVALID_ROLE_NAME: 139,
            EXCEEDED_QUOTA: 140,
            SCRIPT_FAILED: 141,
            VALIDATION_ERROR: 142,
            INVALID_IMAGE_DATA: 150,
            UNSAVED_FILE_ERROR: 151,
            INVALID_PUSH_TIME_ERROR: 152,
            USERNAME_MISSING: 200,
            PASSWORD_MISSING: 201,
            USERNAME_TAKEN: 202,
            EMAIL_TAKEN: 203,
            EMAIL_MISSING: 204,
            EMAIL_NOT_FOUND: 205,
            SESSION_MISSING: 206,
            MUST_CREATE_USER_THROUGH_SIGNUP: 207,
            ACCOUNT_ALREADY_LINKED: 208,
            LINKED_ID_MISSING: 250,
            INVALID_LINKED_SESSION: 251,
            UNSUPPORTED_SERVICE: 252,
            X_DOMAIN_REQUEST: 602
        }), e.exports = r;
    }, function(e, t, n) {
        (function(t) {
            var r = n(0), i = n(17), o = n(33), s = n(3), a = s.inherits, u = s.parseDate, c = n(1), l = t.AV || {};
            l._config = {
                serverURLs: {},
                useMasterKey: !1,
                production: null,
                realtime: null,
                requestTimeout: null
            }, l._sharedConfig = {
                userAgent: o,
                liveQueryRealtime: null
            }, l._getAVPath = function(e) {
                if (!l.applicationId) throw new Error("You need to call AV.initialize before using AV.");
                if (e || (e = ""), !r.isString(e)) throw new Error("Tried to get a localStorage path that wasn't a String.");
                return "/" === e[0] && (e = e.substring(1)), "AV/" + l.applicationId + "/" + e;
            }, l._installationId = null, l._getInstallationId = function() {
                if (l._installationId) return c.resolve(l._installationId);
                var e = l._getAVPath("installationId");
                return l.localStorage.getItemAsync(e).then(function(t) {
                    return l._installationId = t, l._installationId ? t : (l._installationId = t = i(), 
                    l.localStorage.setItemAsync(e, t).then(function() {
                        return t;
                    }));
                });
            }, l._subscriptionId = null, l._refreshSubscriptionId = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l._getAVPath("subscriptionId"), t = l._subscriptionId = i();
                return l.localStorage.setItemAsync(e, t).then(function() {
                    return t;
                });
            }, l._getSubscriptionId = function() {
                if (l._subscriptionId) return c.resolve(l._subscriptionId);
                var e = l._getAVPath("subscriptionId");
                return l.localStorage.getItemAsync(e).then(function(t) {
                    return l._subscriptionId = t, l._subscriptionId || (t = l._refreshSubscriptionId(e)), 
                    t;
                });
            }, l._parseDate = u, l._extend = function(e, t) {
                var n = a(this, e, t);
                return n.extend = this.extend, n;
            }, l._encode = function(e, t, n) {
                var i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                if (e instanceof l.Object) {
                    if (n) throw new Error("AV.Objects not allowed here");
                    return t && !r.include(t, e) && e._hasData ? e._toFullJSON(t.concat(e), i) : e._toPointer();
                }
                if (e instanceof l.ACL) return e.toJSON();
                if (r.isDate(e)) return i ? {
                    __type: "Date",
                    iso: e.toJSON()
                } : e.toJSON();
                if (e instanceof l.GeoPoint) return e.toJSON();
                if (r.isArray(e)) return r.map(e, function(e) {
                    return l._encode(e, t, n, i);
                });
                if (r.isRegExp(e)) return e.source;
                if (e instanceof l.Relation) return e.toJSON();
                if (e instanceof l.Op) return e.toJSON();
                if (e instanceof l.File) {
                    if (!e.url() && !e.id) throw new Error("Tried to save an object containing an unsaved file.");
                    return e._toFullJSON(t, i);
                }
                return r.isObject(e) ? r.mapObject(e, function(e, r) {
                    return l._encode(e, t, n, i);
                }) : e;
            }, l._decode = function(e, t) {
                if (!r.isObject(e) || r.isDate(e)) return e;
                if (r.isArray(e)) return r.map(e, function(e) {
                    return l._decode(e);
                });
                if (e instanceof l.Object) return e;
                if (e instanceof l.File) return e;
                if (e instanceof l.Op) return e;
                if (e instanceof l.GeoPoint) return e;
                if (e instanceof l.ACL) return e;
                if ("ACL" === t) return new l.ACL(e);
                if (e.__op) return l.Op._decode(e);
                var n;
                if ("Pointer" === e.__type) {
                    n = e.className;
                    var i = l.Object._create(n);
                    if (Object.keys(e).length > 3) {
                        var o = r.clone(e);
                        delete o.__type, delete o.className, i._finishFetch(o, !0);
                    } else i._finishFetch({
                        objectId: e.objectId
                    }, !1);
                    return i;
                }
                if ("Object" === e.__type) {
                    n = e.className;
                    var s = r.clone(e);
                    delete s.__type, delete s.className;
                    var a = l.Object._create(n);
                    return a._finishFetch(s, !0), a;
                }
                if ("Date" === e.__type) return l._parseDate(e.iso);
                if ("GeoPoint" === e.__type) return new l.GeoPoint({
                    latitude: e.latitude,
                    longitude: e.longitude
                });
                if ("Relation" === e.__type) {
                    if (!t) throw new Error("key missing decoding a Relation");
                    var u = new l.Relation(null, t);
                    return u.targetClassName = e.className, u;
                }
                if ("File" === e.__type) {
                    var c = new l.File(e.name), h = r.clone(e);
                    return delete h.__type, c._finishFetch(h), c;
                }
                return r.mapObject(e, l._decode);
            }, l.parseJSON = l._decode, l._encodeObjectOrArray = function(e) {
                var t = function(e) {
                    return e && e._toFullJSON && (e = e._toFullJSON([])), r.mapObject(e, function(e) {
                        return l._encode(e, []);
                    });
                };
                return r.isArray(e) ? e.map(function(e) {
                    return t(e);
                }) : t(e);
            }, l._arrayEach = r.each, l._traverse = function(e, t, n) {
                if (e instanceof l.Object) {
                    if (n = n || [], r.indexOf(n, e) >= 0) return;
                    return n.push(e), l._traverse(e.attributes, t, n), t(e);
                }
                return e instanceof l.Relation || e instanceof l.File ? t(e) : r.isArray(e) ? (r.each(e, function(r, i) {
                    var o = l._traverse(r, t, n);
                    o && (e[i] = o);
                }), t(e)) : r.isObject(e) ? (l._each(e, function(r, i) {
                    var o = l._traverse(r, t, n);
                    o && (e[i] = o);
                }), t(e)) : t(e);
            }, l._objectEach = l._each = function(e, t) {
                r.isObject(e) ? r.each(r.keys(e), function(n) {
                    t(e[n], n);
                }) : r.each(e, t);
            }, e.exports = l;
        }).call(t, n(6));
    }, function(e, t) {
        var n;
        n = function() {
            return this;
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == (void 0 === i ? "undefined" : r(i)) && (n = i);
        }
        e.exports = n;
    }, function(e, o, s) {
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : r(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
            })(e);
        }
        o.log = function() {
            var e;
            return "object" === ("undefined" == typeof console ? "undefined" : a(console)) && console.log && (e = console).log.apply(e, arguments);
        }, o.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), 
            this.useColors) {
                var n = "color: " + this.color;
                t.splice(1, 0, n, "color: inherit");
                var r = 0, i = 0;
                t[0].replace(/%[a-zA-Z%]/g, function(e) {
                    "%%" !== e && (r++, "%c" === e && (i = r));
                }), t.splice(i, 0, n);
            }
        }, o.save = function(e) {
            try {
                e ? o.storage.setItem("debug", e) : o.storage.removeItem("debug");
            } catch (e) {}
        }, o.load = function() {
            var e;
            try {
                e = o.storage.getItem("debug");
            } catch (e) {}
            return !e && "undefined" != typeof process && "env" in process && (e = process.env.DEBUG), 
            e;
        }, o.useColors = function() {
            return !(void 0 === i || !i.process || "renderer" !== i.process.type && !i.process.__nwjs) || (void 0 === t || !t.userAgent || !t.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || void 0 !== i && i.console && (i.console.firebug || i.console.exception && i.console.table) || void 0 !== t && t.userAgent && t.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || void 0 !== t && t.userAgent && t.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
        }, o.storage = function() {
            try {
                return n;
            } catch (e) {}
        }(), o.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
        e.exports = s(40)(o), e.exports.formatters.j = function(e) {
            try {
                return JSON.stringify(e);
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message;
            }
        };
    }, function(t, n, o) {
        function s() {}
        function a(e) {
            if (!m(e)) return e;
            var t = [];
            for (var n in e) u(t, n, e[n]);
            return t.join("&");
        }
        function u(e, t, n) {
            if (null != n) if (Array.isArray(n)) n.forEach(function(n) {
                u(e, t, n);
            }); else if (m(n)) for (var r in n) u(e, t + "[" + r + "]", n[r]); else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n)); else null === n && e.push(encodeURIComponent(t));
        }
        function c(e) {
            for (var t, n, r = {}, i = e.split("&"), o = 0, s = i.length; o < s; ++o) -1 == (n = (t = i[o]).indexOf("=")) ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
            return r;
        }
        function l(e) {
            for (var t, n, r, i, o = e.split(/\r?\n/), s = {}, a = 0, u = o.length; a < u; ++a) -1 !== (t = (n = o[a]).indexOf(":")) && (r = n.slice(0, t).toLowerCase(), 
            i = O(n.slice(t + 1)), s[r] = i);
            return s;
        }
        function h(e) {
            return /[\/+]json($|[^-\w])/.test(e);
        }
        function f(e) {
            this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || void 0 === this.xhr.responseType ? this.xhr.responseText : null, 
            this.statusText = this.req.xhr.statusText;
            var t = this.xhr.status;
            1223 === t && (t = 204), this._setStatusProperties(t), this.header = this.headers = l(this.xhr.getAllResponseHeaders()), 
            this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), 
            null === this.text && e._responseType ? this.body = this.xhr.response : this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null;
        }
        function d(e, t) {
            var n = this;
            this._query = this._query || [], this.method = e, this.url = t, this.header = {}, 
            this._header = {}, this.on("end", function() {
                var e = null, t = null;
                try {
                    t = new f(n);
                } catch (t) {
                    return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, 
                    n.xhr ? (e.rawResponse = void 0 === n.xhr.responseType ? n.xhr.responseText : n.xhr.response, 
                    e.status = n.xhr.status ? n.xhr.status : null, e.statusCode = e.status) : (e.rawResponse = null, 
                    e.status = null), n.callback(e);
                }
                n.emit("response", t);
                var r;
                try {
                    n._isResponseOK(t) || (r = new Error(t.statusText || "Unsuccessful HTTP response"));
                } catch (e) {
                    r = e;
                }
                r ? (r.original = e, r.response = t, r.status = t.status, n.callback(r, t)) : n.callback(null, t);
            });
        }
        function p(e, t, n) {
            var r = w("DELETE", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }
        var _;
        void 0 !== i ? _ = i : "undefined" != typeof self ? _ = self : (console.warn("Using browser-only version of superagent in non-browser environment"), 
        _ = this);
        var v = o(35), y = o(36), m = o(19), g = o(37), b = o(39), w = n = t.exports = function(e, t) {
            return "function" == typeof t ? new n.Request("GET", e).end(t) : 1 == arguments.length ? new n.Request("GET", e) : new n.Request(e, t);
        };
        n.Request = d, w.getXHR = function() {
            if (!(!_.XMLHttpRequest || _.location && "file:" == _.location.protocol && _.ActiveXObject)) return new e();
            try {
                return new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (e) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (e) {}
            throw Error("Browser-only version of superagent could not find XHR");
        };
        var O = "".trim ? function(e) {
            return e.trim();
        } : function(e) {
            return e.replace(/(^\s*|\s*$)/g, "");
        };
        w.serializeObject = a, w.parseString = c, w.types = {
            html: "text/html",
            json: "application/json",
            xml: "text/xml",
            urlencoded: "application/x-www-form-urlencoded",
            form: "application/x-www-form-urlencoded",
            "form-data": "application/x-www-form-urlencoded"
        }, w.serialize = {
            "application/x-www-form-urlencoded": a,
            "application/json": JSON.stringify
        }, w.parse = {
            "application/x-www-form-urlencoded": c,
            "application/json": JSON.parse
        }, g(f.prototype), f.prototype._parseBody = function(e) {
            var t = w.parse[this.type];
            return this.req._parser ? this.req._parser(this, e) : (!t && h(this.type) && (t = w.parse["application/json"]), 
            t && e && (e.length || e instanceof Object) ? t(e) : null);
        }, f.prototype.toError = function() {
            var e = this.req, t = e.method, n = e.url, r = "cannot " + t + " " + n + " (" + this.status + ")", i = new Error(r);
            return i.status = this.status, i.method = t, i.url = n, i;
        }, w.Response = f, v(d.prototype), y(d.prototype), d.prototype.type = function(e) {
            return this.set("Content-Type", w.types[e] || e), this;
        }, d.prototype.accept = function(e) {
            return this.set("Accept", w.types[e] || e), this;
        }, d.prototype.auth = function(e, t, n) {
            1 === arguments.length && (t = ""), "object" == (void 0 === t ? "undefined" : r(t)) && null !== t && (n = t, 
            t = ""), n || (n = {
                type: "function" == typeof btoa ? "basic" : "auto"
            });
            return this._auth(e, t, n, function(e) {
                if ("function" == typeof btoa) return btoa(e);
                throw new Error("Cannot use basic auth, btoa is not a function");
            });
        }, d.prototype.query = function(e) {
            return "string" != typeof e && (e = a(e)), e && this._query.push(e), this;
        }, d.prototype.attach = function(e, t, n) {
            if (t) {
                if (this._data) throw Error("superagent can't mix .send() and .attach()");
                this._getFormData().append(e, t, n || t.name);
            }
            return this;
        }, d.prototype._getFormData = function() {
            return this._formData || (this._formData = new _.FormData()), this._formData;
        }, d.prototype.callback = function(e, t) {
            if (this._shouldRetry(e, t)) return this._retry();
            var n = this._callback;
            this.clearTimeout(), e && (this._maxRetries && (e.retries = this._retries - 1), 
            this.emit("error", e)), n(e, t);
        }, d.prototype.crossDomainError = function() {
            var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
            e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, 
            this.callback(e);
        }, d.prototype.buffer = d.prototype.ca = d.prototype.agent = function() {
            return console.warn("This is not supported in browser version of superagent"), this;
        }, d.prototype.pipe = d.prototype.write = function() {
            throw Error("Streaming is not supported in browser version of superagent");
        }, d.prototype._isHost = function(e) {
            return e && "object" == (void 0 === e ? "undefined" : r(e)) && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e);
        }, d.prototype.end = function(e) {
            return this._endCalled && console.warn("Warning: .end() was called twice. This is not supported in superagent"), 
            this._endCalled = !0, this._callback = e || s, this._finalizeQueryString(), this._end();
        }, d.prototype._end = function() {
            var e = this, t = this.xhr = w.getXHR(), n = this._formData || this._data;
            this._setTimeouts(), t.onreadystatechange = function() {
                var n = t.readyState;
                if (n >= 2 && e._responseTimeoutTimer && clearTimeout(e._responseTimeoutTimer), 
                4 == n) {
                    var r;
                    try {
                        r = t.status;
                    } catch (e) {
                        r = 0;
                    }
                    if (!r) {
                        if (e.timedout || e._aborted) return;
                        return e.crossDomainError();
                    }
                    e.emit("end");
                }
            };
            var r = function(t, n) {
                n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = t, e.emit("progress", n);
            };
            if (this.hasListeners("progress")) try {
                t.onprogress = r.bind(null, "download"), t.upload && (t.upload.onprogress = r.bind(null, "upload"));
            } catch (e) {}
            try {
                this.username && this.password ? t.open(this.method, this.url, !0, this.username, this.password) : t.open(this.method, this.url, !0);
            } catch (e) {
                return this.callback(e);
            }
            if (this._withCredentials && (t.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof n && !this._isHost(n)) {
                var i = this._header["content-type"], o = this._serializer || w.serialize[i ? i.split(";")[0] : ""];
                !o && h(i) && (o = w.serialize["application/json"]), o && (n = o(n));
            }
            for (var s in this.header) null != this.header[s] && this.header.hasOwnProperty(s) && t.setRequestHeader(s, this.header[s]);
            return this._responseType && (t.responseType = this._responseType), this.emit("request", this), 
            t.send(void 0 !== n ? n : null), this;
        }, w.agent = function() {
            return new b();
        }, [ "GET", "POST", "OPTIONS", "PATCH", "PUT", "DELETE" ].forEach(function(e) {
            b.prototype[e.toLowerCase()] = function(t, n) {
                var r = new w.Request(e, t);
                return this._setDefaults(r), n && r.end(n), r;
            };
        }), b.prototype.del = b.prototype.delete, w.get = function(e, t, n) {
            var r = w("GET", e);
            return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), 
            r;
        }, w.head = function(e, t, n) {
            var r = w("HEAD", e);
            return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), 
            r;
        }, w.options = function(e, t, n) {
            var r = w("OPTIONS", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, w.del = p, w.delete = p, w.patch = function(e, t, n) {
            var r = w("PATCH", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, w.post = function(e, t, n) {
            var r = w("POST", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        }, w.put = function(e, t, n) {
            var r = w("PUT", e);
            return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), 
            r;
        };
    }, function(e, t, n) {
        var o = n(10), s = n(27), a = n(28), u = o.LISTENERS, c = o.CAPTURE, l = o.BUBBLE, h = o.ATTRIBUTE, f = o.newNode, d = s.defineCustomEventTarget, p = a.createEventWrapper, _ = a.STOP_IMMEDIATE_PROPAGATION_FLAG, v = void 0 !== i && void 0 !== i.EventTarget, y = e.exports = function e() {
            if (!(this instanceof e)) {
                if (1 === arguments.length && Array.isArray(arguments[0])) return d(e, arguments[0]);
                if (arguments.length > 0) {
                    for (var t = Array(arguments.length), n = 0; n < arguments.length; ++n) t[n] = arguments[n];
                    return d(e, t);
                }
                throw new TypeError("Cannot call a class as a function");
            }
            Object.defineProperty(this, u, {
                value: Object.create(null)
            });
        };
        y.prototype = Object.create((v ? i.EventTarget : Object).prototype, {
            constructor: {
                value: y,
                writable: !0,
                configurable: !0
            },
            addEventListener: {
                value: function(e, t, n) {
                    if (null == t) return !1;
                    if ("function" != typeof t && "object" != (void 0 === t ? "undefined" : r(t))) throw new TypeError('"listener" is not an object.');
                    var i = n ? c : l, o = this[u][e];
                    if (null == o) return this[u][e] = f(t, i), !0;
                    for (var s = null; null != o; ) {
                        if (o.listener === t && o.kind === i) return !1;
                        s = o, o = o.next;
                    }
                    return s.next = f(t, i), !0;
                },
                configurable: !0,
                writable: !0
            },
            removeEventListener: {
                value: function(e, t, n) {
                    if (null == t) return !1;
                    for (var r = n ? c : l, i = null, o = this[u][e]; null != o; ) {
                        if (o.listener === t && o.kind === r) return null == i ? this[u][e] = o.next : i.next = o.next, 
                        !0;
                        i = o, o = o.next;
                    }
                    return !1;
                },
                configurable: !0,
                writable: !0
            },
            dispatchEvent: {
                value: function(e) {
                    var t = this[u][e.type];
                    if (null == t) return !0;
                    for (var n = p(e, this); null != t && ("function" == typeof t.listener ? t.listener.call(this, n) : t.kind !== h && "function" == typeof t.listener.handleEvent && t.listener.handleEvent(n), 
                    !n[_]); ) t = t.next;
                    return !n.defaultPrevented;
                },
                configurable: !0,
                writable: !0
            }
        });
    }, function(e, t, n) {
        var r = t.createUniqueKey = "undefined" != typeof Symbol ? Symbol : function(e) {
            return "[[" + e + "_" + Math.random().toFixed(8).slice(2) + "]]";
        };
        t.LISTENERS = r("listeners"), t.CAPTURE = 1, t.BUBBLE = 2, t.ATTRIBUTE = 3, t.newNode = function(e, t) {
            return {
                listener: e,
                kind: t,
                next: null
            };
        };
    }, function(e, t, n) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var o = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : r(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
        }, s = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), a = function() {
            function e() {
                i(this, e), this._entries = [];
            }
            return s(e, [ {
                key: "append",
                value: function(e, t) {
                    if ("string" != typeof e) throw new TypeError("FormData name must be a string");
                    if ("string" != typeof t && ("object" !== (void 0 === t ? "undefined" : o(t)) || "string" != typeof t.uri)) throw new TypeError("FormData value must be a string or { uri: tempFilePath }");
                    this._entries.push([ e, t ]);
                }
            }, {
                key: "set",
                value: function(e, t) {
                    var n = this.get(e);
                    n ? n[1] = t : this.append(e, t);
                }
            }, {
                key: "delete",
                value: function(e) {
                    this._entries = this._entries.filter(function(t) {
                        return t[0] !== e;
                    });
                }
            }, {
                key: "entries",
                value: function() {
                    return this._entries;
                }
            }, {
                key: "get",
                value: function(e) {
                    return this._entries.find(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "getAll",
                value: function(e) {
                    return this._entries.filter(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "has",
                value: function(e) {
                    return this._entries.some(function(t) {
                        return t[0] === e;
                    });
                }
            }, {
                key: "keys",
                value: function() {
                    return this._entries.map(function(e) {
                        return e[0];
                    });
                }
            }, {
                key: "values",
                value: function() {
                    return this._entries.map(function(e) {
                        return e[1];
                    });
                }
            } ]), e;
        }();
        e.exports = a;
    }, function(e, t, n) {
        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), o = function() {
            function e() {
                r(this, e);
            }
            return i(e, [ {
                key: "getItem",
                value: function(e) {
                    return wx.getStorageSync(e);
                }
            }, {
                key: "setItem",
                value: function(e, t) {
                    return wx.setStorageSync(e, t);
                }
            }, {
                key: "removeItem",
                value: function(e) {
                    return this.setItem(e, "");
                }
            }, {
                key: "clear",
                value: function() {
                    return wx.clearStorageSync();
                }
            } ]), e;
        }();
        e.exports = new o();
    }, function(e, t, n) {
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function s(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t;
        }
        function a(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        function u(e) {
            this.status = e.statusCode, this.statusText = e.statusCode, e.header && (this._responseHeaders = Object.keys(e.header).reduce(function(t, n) {
                return t[n.toLowerCase()] = e.header[n], t;
            }, {}));
            var t = e.data;
            "string" != typeof t && (t = JSON.stringify(t)), this.responseText = this.response = t, 
            this.readyState = p, this.dispatchEvent({
                type: "readystatechange"
            });
        }
        var c = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), l = n(14), h = n(9), f = n(11), d = 0, p = 4, _ = [ "abort", "error", "load", "loadstart", "progress", "timeout", "loadend", "readystatechange" ], v = [ "abort", "error", "load", "loadstart", "progress", "timeout", "loadend" ], y = function(e) {
            function t() {
                return o(this, t), s(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments));
            }
            return a(t, h(v)), t;
        }(), m = function(e) {
            function t() {
                o(this, t);
                var e = s(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                return e.readyState = d, e._headers = {}, e.upload = new y(), e;
            }
            return a(t, h(_)), c(t, [ {
                key: "abort",
                value: function() {
                    if (!this._request || this._request.abort) return this.status = 0, this.readyState = p, 
                    this._request.abort();
                    throw new Error("该版本基础库不支持 abort request");
                }
            }, {
                key: "getAllResponseHeaders",
                value: function() {
                    var e = this;
                    return this._responseHeaders ? Object.keys(this._responseHeaders).map(function(t) {
                        return t + ": " + e._responseHeaders[t];
                    }).join("\r\n") : "";
                }
            }, {
                key: "getResponseHeader",
                value: function(e) {
                    var t = e.toLowerCase();
                    return this._responseHeaders && this._responseHeaders[t] ? this._responseHeaders[t] : null;
                }
            }, {
                key: "overrideMimeType",
                value: function() {
                    throw new Error("not supported in weapp");
                }
            }, {
                key: "open",
                value: function(e, t) {
                    var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (this.readyState !== d) throw new Error("request is already opened");
                    if (!n) throw new Error("sync request is not supported");
                    this._method = e, this._url = t, this.readyState = 1, this.dispatchEvent({
                        type: "readystatechange"
                    });
                }
            }, {
                key: "setRequestHeader",
                value: function(e, t) {
                    if (1 !== this.readyState) throw new Error("request is not opened");
                    this._headers[e.toLowerCase()] = t;
                }
            }, {
                key: "send",
                value: function(e) {
                    var t = this;
                    if (1 !== this.readyState) throw new Error("request is not opened");
                    if (e instanceof f) {
                        var n = e.entries(), r = n.filter(function(e) {
                            return "string" != typeof e[1];
                        });
                        if (0 === r.length) throw new Error("Must specify a Blob field in FormData");
                        r.length > 1 && console.warn("Only the first Blob will be send in Weapp");
                        var o = n.filter(function(e) {
                            return "string" == typeof e[1];
                        }).reduce(function(e, t) {
                            return l(e, i({}, t[0], t[1]));
                        }, {});
                        this._request = wx.uploadFile({
                            url: this._url,
                            name: r[0][0],
                            filePath: r[0][1].uri,
                            formData: o,
                            header: this._headers,
                            success: u.bind(this),
                            fail: function(e) {
                                t.status = 0, t.readyState = p, t.dispatchEvent({
                                    type: "readystatechange"
                                }), t.dispatchEvent({
                                    type: "error"
                                });
                            }
                        }), this._request && this._request.onProgressUpdate && this._request.onProgressUpdate(function(e) {
                            var n = e.totalBytesSent, r = e.totalBytesExpectedToSend;
                            t.upload.dispatchEvent({
                                type: "progress",
                                loaded: n,
                                total: r
                            });
                        });
                    } else this._request = wx.request({
                        url: this._url,
                        data: e || "",
                        method: this._method.toUpperCase(),
                        header: this._headers,
                        success: u.bind(this),
                        fail: function(e) {
                            t.status = 0, t.readyState = p, t.dispatchEvent({
                                type: "readystatechange"
                            }), t.dispatchEvent({
                                type: "error"
                            });
                        }
                    });
                }
            } ]), t;
        }();
        l(m, {
            UNSENT: d,
            OPENED: 1,
            HEADERS_RECEIVED: 2,
            LOADING: 3,
            DONE: p
        }), e.exports = m;
    }, function(e, t, n) {
        function r(e) {
            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(e);
        }
        var i = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
        e.exports = function() {
            try {
                if (!Object.assign) return !1;
                var e = new String("abc");
                if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e];
                }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                    r[e] = e;
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("");
            } catch (e) {
                return !1;
            }
        }() ? Object.assign : function(e, t) {
            for (var n, a, u = r(e), c = 1; c < arguments.length; c++) {
                n = Object(arguments[c]);
                for (var l in n) o.call(n, l) && (u[l] = n[l]);
                if (i) {
                    a = i(n);
                    for (var h = 0; h < a.length; h++) s.call(n, a[h]) && (u[a[h]] = n[a[h]]);
                }
            }
            return u;
        };
    }, function(e, t, n) {
        function i(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != (void 0 === t ? "undefined" : r(t)) && "function" != typeof t ? e : t;
        }
        function s(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : r(t)));
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }
        var a = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
                    Object.defineProperty(e, r.key, r);
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t;
            };
        }(), u = n(14), c = n(9), l = 0, h = 1, f = 3, d = [ "open", "error", "message", "close" ], p = function(e) {
            function t(e, n) {
                if (i(this, t), !e) throw new TypeError("Failed to construct 'WebSocket': url required");
                if (n && (!wx.canIUse || !wx.canIUse("connectSocket.object.protocols"))) throw new Error("subprotocal not supported in weapp");
                var r = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                r._url = e, r._protocal = n || "", r._readyState = l;
                var s = function(e) {
                    r._readyState = f, r.dispatchEvent({
                        type: "error",
                        message: e.errMsg
                    });
                }, a = wx.connectSocket({
                    url: e,
                    protocals: r._protocal,
                    fail: function(e) {
                        return setTimeout(function() {
                            return s(e);
                        }, 0);
                    }
                });
                return r._socketTask = a, a.onOpen(function(e) {
                    r._readyState = h, r.dispatchEvent({
                        type: "open"
                    });
                }), a.onError(s), a.onMessage(function(e) {
                    var t = e.data, n = e.origin, i = e.ports, o = e.source;
                    r.dispatchEvent({
                        data: t,
                        origin: n,
                        ports: i,
                        source: o,
                        type: "message"
                    });
                }), a.onClose(function(e) {
                    r._readyState = f;
                    var t = e.code, n = e.reason, i = e.wasClean;
                    r.dispatchEvent({
                        code: t,
                        reason: n,
                        wasClean: i,
                        type: "close"
                    });
                }), r;
            }
            return s(t, c(d)), a(t, [ {
                key: "close",
                value: function() {
                    this.readyState !== f && (this.readyState === l && console.warn("close WebSocket which is connecting might not work"), 
                    this._socketTask.close());
                }
            }, {
                key: "send",
                value: function(e) {
                    if (this.readyState !== h) throw new Error("INVALID_STATE_ERR");
                    if (!("string" == typeof e || e instanceof ArrayBuffer)) throw new TypeError("only String/ArrayBuffer supported");
                    this._socketTask.send({
                        data: e
                    });
                }
            }, {
                key: "url",
                get: function() {
                    return this._url;
                }
            }, {
                key: "protocal",
                get: function() {
                    return this._protocal;
                }
            }, {
                key: "readyState",
                get: function() {
                    return this._readyState;
                }
            } ]), t;
        }();
        u(p, {
            CONNECTING: l,
            OPEN: h,
            CLOSING: 2,
            CLOSED: f
        }), e.exports = p;
    }, function(e, t, n) {
        e.exports = {};
    }, function(e, t, n) {
        var r = n(31), i = n(32);
        e.exports = function(e, t, n) {
            var o = t && n || 0;
            "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
            var s = (e = e || {}).random || (e.rng || r)();
            if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, t) for (var a = 0; a < 16; ++a) t[o + a] = s[a];
            return t || i(s);
        };
    }, function(e, t, n) {
        e.exports = "3.11.1";
    }, function(e, t, n) {
        e.exports = function(e) {
            return null !== e && "object" == (void 0 === e ? "undefined" : r(e));
        };
    }, function(e, t, n) {
        var r = n(0), i = n(1), o = n(44), s = [ "getItem", "setItem", "removeItem", "clear" ];
        o.async ? r(s).each(function(e) {
            "function" != typeof o[e] && (o[e] = function() {
                var t = new Error("Synchronous API [" + e + "] is not available in this runtime.");
                throw t.code = "SYNC_API_NOT_AVAILABLE", t;
            });
        }) : r(s).each(function(e) {
            "function" == typeof o[e] && (o[e + "Async"] = function() {
                return i.resolve(o[e].apply(o, arguments));
            });
        }), e.exports = o;
    }, function(e, t, n) {
        var r = n(20), i = n(5), o = t.removeAsync = r.removeItemAsync.bind(r), s = function(e, t) {
            try {
                e = JSON.parse(e);
            } catch (e) {
                return null;
            }
            return e ? e.expiredAt && e.expiredAt < Date.now() ? o(t).then(function() {
                return null;
            }) : e.value : null;
        };
        t.getAsync = function(e) {
            return e = "AV/" + i.applicationId + "/" + e, r.getItemAsync(e).then(function(t) {
                return s(t, e);
            });
        }, t.setAsync = function(e, t, n) {
            var o = {
                value: t
            };
            return "number" == typeof n && (o.expiredAt = Date.now() + n), r.setItemAsync("AV/" + i.applicationId + "/" + e, JSON.stringify(o));
        };
    }, function(e, t) {
        var n = {
            utf8: {
                stringToBytes: function(e) {
                    return n.bin.stringToBytes(unescape(encodeURIComponent(e)));
                },
                bytesToString: function(e) {
                    return decodeURIComponent(escape(n.bin.bytesToString(e)));
                }
            },
            bin: {
                stringToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(255 & e.charCodeAt(n));
                    return t;
                },
                bytesToString: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push(String.fromCharCode(e[n]));
                    return t.join("");
                }
            }
        };
        e.exports = n;
    }, function(e, t, n) {
        n(24);
        var r = n(0), i = n(5);
        i._ = r, i.version = n(18), i.Promise = n(1), i.localStorage = n(20), i.Cache = n(21), 
        i.Error = n(4), n(46), n(48)(i), n(49)(i), n(50)(i), n(51)(i), n(52)(i), n(53)(i), 
        n(61)(i), n(62)(i), n(63)(i), n(64)(i), n(65)(i), n(67)(i), n(68)(i), n(69)(i), 
        n(70)(i), n(71)(i), n(72)(i), i.Conversation = n(73), n(74), e.exports = i;
    }, function(e, t, n) {
        n(25);
    }, function(r, o, s) {
        var a = s(26).polyfill;
        try {
            a();
        } catch (r) {}
        try {
            a(GameGlobal);
        } catch (r) {}
        try {
            a(i = i || {});
        } catch (r) {}
        try {
            n = n || s(12);
        } catch (r) {}
        try {
            e = e || s(13);
        } catch (r) {}
        try {
            FormData = FormData || s(11);
        } catch (r) {}
        try {
            WebSocket = WebSocket || s(15);
        } catch (r) {}
        try {
            t = t || s(16);
        } catch (r) {}
    }, function(e, t, n) {
        (function(t) {
            var o = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
                return void 0 === e ? "undefined" : r(e);
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
            }, s = n(12), a = n(13), u = n(11), c = n(15), l = n(29), h = n(16);
            e.exports = {
                polyfill: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : t || i;
                    if ("object" !== (void 0 === e ? "undefined" : o(e))) throw new Error("polyfill target is not an Object");
                    var n = {
                        localStorage: s,
                        XMLHttpRequest: a,
                        FormData: u,
                        WebSocket: c,
                        Object: Object,
                        navigator: h
                    };
                    for (var r in n) e[r] || (e[r] = n[r]);
                    l.polyfill(e), e.navigator.product = "ReactNative";
                },
                localStorage: s,
                XMLHttpRequest: a,
                FormData: u,
                WebSocket: c
            };
        }).call(t, n(6));
    }, function(e, t, n) {
        function i(e, t) {
            for (var n = e[a][t]; null != n; ) {
                if (n.kind === u) return n.listener;
                n = n.next;
            }
            return null;
        }
        function o(e, t, n) {
            "function" != typeof n && "object" != (void 0 === n ? "undefined" : r(n)) && (n = null);
            for (var i = null, o = e[a][t]; null != o; ) o.kind === u ? null == i ? e[a][t] = o.next : i.next = o.next : i = o, 
            o = o.next;
            null != n && (null == i ? e[a][t] = c(n, u) : i.next = c(n, u));
        }
        var s = n(10), a = s.LISTENERS, u = s.ATTRIBUTE, c = s.newNode;
        t.defineCustomEventTarget = function(e, t) {
            function n() {
                e.call(this);
            }
            var r = {
                constructor: {
                    value: n,
                    configurable: !0,
                    writable: !0
                }
            };
            return t.forEach(function(e) {
                r["on" + e] = {
                    get: function() {
                        return i(this, e);
                    },
                    set: function(t) {
                        o(this, e, t);
                    },
                    configurable: !0,
                    enumerable: !0
                };
            }), n.prototype = Object.create(e.prototype, r), n;
        };
    }, function(e, t, n) {
        var r = n(10).createUniqueKey, i = r("stop_immediate_propagation_flag"), o = r("canceled_flag"), s = r("original_event"), a = Object.freeze({
            stopPropagation: Object.freeze({
                value: function() {
                    var e = this[s];
                    "function" == typeof e.stopPropagation && e.stopPropagation();
                },
                writable: !0,
                configurable: !0
            }),
            stopImmediatePropagation: Object.freeze({
                value: function() {
                    this[i] = !0;
                    var e = this[s];
                    "function" == typeof e.stopImmediatePropagation && e.stopImmediatePropagation();
                },
                writable: !0,
                configurable: !0
            }),
            preventDefault: Object.freeze({
                value: function() {
                    !0 === this.cancelable && (this[o] = !0);
                    var e = this[s];
                    "function" == typeof e.preventDefault && e.preventDefault();
                },
                writable: !0,
                configurable: !0
            }),
            defaultPrevented: Object.freeze({
                get: function() {
                    return this[o];
                },
                enumerable: !0,
                configurable: !0
            })
        });
        t.STOP_IMMEDIATE_PROPAGATION_FLAG = i, t.createEventWrapper = function(e, t) {
            var n = "number" == typeof e.timeStamp ? e.timeStamp : Date.now(), r = {
                type: {
                    value: e.type,
                    enumerable: !0
                },
                target: {
                    value: t,
                    enumerable: !0
                },
                currentTarget: {
                    value: t,
                    enumerable: !0
                },
                eventPhase: {
                    value: 2,
                    enumerable: !0
                },
                bubbles: {
                    value: Boolean(e.bubbles),
                    enumerable: !0
                },
                cancelable: {
                    value: Boolean(e.cancelable),
                    enumerable: !0
                },
                timeStamp: {
                    value: n,
                    enumerable: !0
                },
                isTrusted: {
                    value: !1,
                    enumerable: !0
                }
            };
            return r[i] = {
                value: !1,
                writable: !0
            }, r[o] = {
                value: !1,
                writable: !0
            }, r[s] = {
                value: e
            }, void 0 !== e.detail && (r.detail = {
                value: e.detail,
                enumerable: !0
            }), Object.create(Object.create(e, a), r);
        };
    }, function(e, t, n) {
        var r = n(9);
        t.polyfill = function(e) {
            if (wx.onNetworkStatusChange && !e.__onlineOfflinePolyfilled) {
                e.__onlineOfflinePolyfilled = !0;
                var t = new r();
                e.dispatchEvent || (e.addEventListener = t.addEventListener.bind(t), e.removeEventListener = t.removeEventListener.bind(t), 
                e.dispatchEvent = t.dispatchEvent.bind(t), "function" != typeof postMessage || e.importScripts || (e.importScripts = function() {
                    throw new Error("mocked");
                })), wx.getNetworkType({
                    success: function(t) {
                        var n = t.networkType;
                        e.onLine = "none" !== n, wx.onNetworkStatusChange(function(t) {
                            var n = t.isConnected;
                            e.onLine !== n && (e.onLine = n, e.dispatchEvent({
                                type: n ? "online" : "offline"
                            }));
                        });
                    }
                });
            }
        };
    }, function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), 
            Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l;
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i;
                }
            }), e.webpackPolyfill = 1), e;
        };
    }, function(e, t) {
        var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof i.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
        if (n) {
            var r = new Uint8Array(16);
            e.exports = function() {
                return n(r), r;
            };
        } else {
            var o = new Array(16);
            e.exports = function() {
                for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), 
                o[t] = e >>> ((3 & t) << 3) & 255;
                return o;
            };
        }
    }, function(e, t) {
        for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
        e.exports = function(e, t) {
            var r = t || 0, i = n;
            return [ i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]] ].join("");
        };
    }, function(e, t, n) {
        var r = n(18), i = [ "Weapp" ].concat(n(34));
        e.exports = "LeanCloud-JS-SDK/" + r + " (" + i.join("; ") + ")";
    }, function(e, t, n) {
        e.exports = [];
    }, function(e, t, n) {
        function r(e) {
            if (e) return i(e);
        }
        function i(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e;
        }
        e.exports = r, r.prototype.on = r.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), 
            this;
        }, r.prototype.once = function(e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments);
            }
            return n.fn = t, this.on(e, n), this;
        }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, 
            this;
            var n = this._callbacks["$" + e];
            if (!n) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var r, i = 0; i < n.length; i++) if ((r = n[i]) === t || r.fn === t) {
                n.splice(i, 1);
                break;
            }
            return this;
        }, r.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            var t = [].slice.call(arguments, 1), n = this._callbacks["$" + e];
            if (n) for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t);
            return this;
        }, r.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || [];
        }, r.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length;
        };
    }, function(e, t, n) {
        function i(e) {
            if (e) return o(e);
        }
        function o(e) {
            for (var t in i.prototype) e[t] = i.prototype[t];
            return e;
        }
        var s = n(19);
        e.exports = i, i.prototype.clearTimeout = function() {
            return clearTimeout(this._timer), clearTimeout(this._responseTimeoutTimer), delete this._timer, 
            delete this._responseTimeoutTimer, this;
        }, i.prototype.parse = function(e) {
            return this._parser = e, this;
        }, i.prototype.responseType = function(e) {
            return this._responseType = e, this;
        }, i.prototype.serialize = function(e) {
            return this._serializer = e, this;
        }, i.prototype.timeout = function(e) {
            if (!e || "object" != (void 0 === e ? "undefined" : r(e))) return this._timeout = e, 
            this._responseTimeout = 0, this;
            for (var t in e) switch (t) {
              case "deadline":
                this._timeout = e.deadline;
                break;

              case "response":
                this._responseTimeout = e.response;
                break;

              default:
                console.warn("Unknown timeout option", t);
            }
            return this;
        }, i.prototype.retry = function(e, t) {
            return 0 !== arguments.length && !0 !== e || (e = 1), e <= 0 && (e = 0), this._maxRetries = e, 
            this._retries = 0, this._retryCallback = t, this;
        };
        var a = [ "ECONNRESET", "ETIMEDOUT", "EADDRINFO", "ESOCKETTIMEDOUT" ];
        i.prototype._shouldRetry = function(e, t) {
            if (!this._maxRetries || this._retries++ >= this._maxRetries) return !1;
            if (this._retryCallback) try {
                var n = this._retryCallback(e, t);
                if (!0 === n) return !0;
                if (!1 === n) return !1;
            } catch (e) {
                console.error(e);
            }
            if (t && t.status && t.status >= 500 && 501 != t.status) return !0;
            if (e) {
                if (e.code && ~a.indexOf(e.code)) return !0;
                if (e.timeout && "ECONNABORTED" == e.code) return !0;
                if (e.crossDomain) return !0;
            }
            return !1;
        }, i.prototype._retry = function() {
            return this.clearTimeout(), this.req && (this.req = null, this.req = this.request()), 
            this._aborted = !1, this.timedout = !1, this._end();
        }, i.prototype.then = function(e, t) {
            if (!this._fullfilledPromise) {
                var n = this;
                this._endCalled && console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"), 
                this._fullfilledPromise = new Promise(function(e, t) {
                    n.end(function(n, r) {
                        n ? t(n) : e(r);
                    });
                });
            }
            return this._fullfilledPromise.then(e, t);
        }, i.prototype.catch = function(e) {
            return this.then(void 0, e);
        }, i.prototype.use = function(e) {
            return e(this), this;
        }, i.prototype.ok = function(e) {
            if ("function" != typeof e) throw Error("Callback required");
            return this._okCallback = e, this;
        }, i.prototype._isResponseOK = function(e) {
            return !!e && (this._okCallback ? this._okCallback(e) : e.status >= 200 && e.status < 300);
        }, i.prototype.get = function(e) {
            return this._header[e.toLowerCase()];
        }, i.prototype.getHeader = i.prototype.get, i.prototype.set = function(e, t) {
            if (s(e)) {
                for (var n in e) this.set(n, e[n]);
                return this;
            }
            return this._header[e.toLowerCase()] = t, this.header[e] = t, this;
        }, i.prototype.unset = function(e) {
            return delete this._header[e.toLowerCase()], delete this.header[e], this;
        }, i.prototype.field = function(e, t) {
            if (null === e || void 0 === e) throw new Error(".field(name, val) name can not be empty");
            if (this._data && console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"), 
            s(e)) {
                for (var n in e) this.field(n, e[n]);
                return this;
            }
            if (Array.isArray(t)) {
                for (var r in t) this.field(e, t[r]);
                return this;
            }
            if (null === t || void 0 === t) throw new Error(".field(name, val) val can not be empty");
            return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), 
            this;
        }, i.prototype.abort = function() {
            return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), 
            this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this);
        }, i.prototype._auth = function(e, t, n, r) {
            switch (n.type) {
              case "basic":
                this.set("Authorization", "Basic " + r(e + ":" + t));
                break;

              case "auto":
                this.username = e, this.password = t;
                break;

              case "bearer":
                this.set("Authorization", "Bearer " + e);
            }
            return this;
        }, i.prototype.withCredentials = function(e) {
            return void 0 == e && (e = !0), this._withCredentials = e, this;
        }, i.prototype.redirects = function(e) {
            return this._maxRedirects = e, this;
        }, i.prototype.maxResponseSize = function(e) {
            if ("number" != typeof e) throw TypeError("Invalid argument");
            return this._maxResponseSize = e, this;
        }, i.prototype.toJSON = function() {
            return {
                method: this.method,
                url: this.url,
                data: this._data,
                headers: this._header
            };
        }, i.prototype.send = function(e) {
            var t = s(e), n = this._header["content-type"];
            if (this._formData && console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"), 
            t && !this._data) Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {}); else if (e && this._data && this._isHost(this._data)) throw Error("Can't merge these send calls");
            if (t && s(this._data)) for (var r in e) this._data[r] = e[r]; else "string" == typeof e ? (n || this.type("form"), 
            n = this._header["content-type"], this._data = "application/x-www-form-urlencoded" == n ? this._data ? this._data + "&" + e : e : (this._data || "") + e) : this._data = e;
            return !t || this._isHost(e) ? this : (n || this.type("json"), this);
        }, i.prototype.sortQuery = function(e) {
            return this._sort = void 0 === e || e, this;
        }, i.prototype._finalizeQueryString = function() {
            var e = this._query.join("&");
            if (e && (this.url += (this.url.indexOf("?") >= 0 ? "&" : "?") + e), this._query.length = 0, 
            this._sort) {
                var t = this.url.indexOf("?");
                if (t >= 0) {
                    var n = this.url.substring(t + 1).split("&");
                    "function" == typeof this._sort ? n.sort(this._sort) : n.sort(), this.url = this.url.substring(0, t) + "?" + n.join("&");
                }
            }
        }, i.prototype._appendQueryString = function() {
            console.trace("Unsupported");
        }, i.prototype._timeoutError = function(e, t, n) {
            if (!this._aborted) {
                var r = new Error(e + t + "ms exceeded");
                r.timeout = t, r.code = "ECONNABORTED", r.errno = n, this.timedout = !0, this.abort(), 
                this.callback(r);
            }
        }, i.prototype._setTimeouts = function() {
            var e = this;
            this._timeout && !this._timer && (this._timer = setTimeout(function() {
                e._timeoutError("Timeout of ", e._timeout, "ETIME");
            }, this._timeout)), this._responseTimeout && !this._responseTimeoutTimer && (this._responseTimeoutTimer = setTimeout(function() {
                e._timeoutError("Response timeout of ", e._responseTimeout, "ETIMEDOUT");
            }, this._responseTimeout));
        };
    }, function(e, t, n) {
        function r(e) {
            if (e) return i(e);
        }
        function i(e) {
            for (var t in r.prototype) e[t] = r.prototype[t];
            return e;
        }
        var o = n(38);
        e.exports = r, r.prototype.get = function(e) {
            return this.header[e.toLowerCase()];
        }, r.prototype._setHeaderProperties = function(e) {
            var t = e["content-type"] || "";
            this.type = o.type(t);
            var n = o.params(t);
            for (var r in n) this[r] = n[r];
            this.links = {};
            try {
                e.link && (this.links = o.parseLinks(e.link));
            } catch (e) {}
        }, r.prototype._setStatusProperties = function(e) {
            var t = e / 100 | 0;
            this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, 
            this.redirect = 3 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), 
            this.created = 201 == e, this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, 
            this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.forbidden = 403 == e, 
            this.notFound = 404 == e, this.unprocessableEntity = 422 == e;
        };
    }, function(e, t, n) {
        t.type = function(e) {
            return e.split(/ *; */).shift();
        }, t.params = function(e) {
            return e.split(/ *; */).reduce(function(e, t) {
                var n = t.split(/ *= */), r = n.shift(), i = n.shift();
                return r && i && (e[r] = i), e;
            }, {});
        }, t.parseLinks = function(e) {
            return e.split(/ *, */).reduce(function(e, t) {
                var n = t.split(/ *; */), r = n[0].slice(1, -1);
                return e[n[1].split(/ *= */)[1].slice(1, -1)] = r, e;
            }, {});
        }, t.cleanHeader = function(e, t) {
            return delete e["content-type"], delete e["content-length"], delete e["transfer-encoding"], 
            delete e.host, t && (delete e.authorization, delete e.cookie), e;
        };
    }, function(e, t) {
        function n() {
            this._defaults = [];
        }
        [ "use", "on", "once", "set", "query", "type", "accept", "auth", "withCredentials", "sortQuery", "retry", "ok", "redirects", "timeout", "buffer", "serialize", "parse", "ca", "key", "pfx", "cert" ].forEach(function(e) {
            n.prototype[e] = function() {
                return this._defaults.push({
                    fn: e,
                    arguments: arguments
                }), this;
            };
        }), n.prototype._setDefaults = function(e) {
            this._defaults.forEach(function(t) {
                e[t.fn].apply(e, t.arguments);
            });
        }, e.exports = n;
    }, function(e, t, n) {
        e.exports = function(e) {
            function t(e) {
                for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
                return r.colors[Math.abs(t) % r.colors.length];
            }
            function r(e) {
                function n() {
                    if (n.enabled) {
                        for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                        var o = n, a = Number(new Date()), u = a - (s || a);
                        o.diff = u, o.prev = s, o.curr = a, s = a, t[0] = r.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
                        var c = 0;
                        t[0] = t[0].replace(/%([a-zA-Z%])/g, function(e, n) {
                            if ("%%" === e) return e;
                            c++;
                            var i = r.formatters[n];
                            if ("function" == typeof i) {
                                var s = t[c];
                                e = i.call(o, s), t.splice(c, 1), c--;
                            }
                            return e;
                        }), r.formatArgs.call(o, t), (o.log || r.log).apply(o, t);
                    }
                }
                var s;
                return n.namespace = e, n.enabled = r.enabled(e), n.useColors = r.useColors(), n.color = t(e), 
                n.destroy = i, n.extend = o, "function" == typeof r.init && r.init(n), r.instances.push(n), 
                n;
            }
            function i() {
                var e = r.instances.indexOf(this);
                return -1 !== e && (r.instances.splice(e, 1), !0);
            }
            function o(e, t) {
                return r(this.namespace + (void 0 === t ? ":" : t) + e);
            }
            return r.debug = r, r.default = r, r.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e;
            }, r.disable = function() {
                r.enable("");
            }, r.enable = function(e) {
                r.save(e), r.names = [], r.skips = [];
                var t, n = ("string" == typeof e ? e : "").split(/[\s,]+/), i = n.length;
                for (t = 0; t < i; t++) n[t] && ("-" === (e = n[t].replace(/\*/g, ".*?"))[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")));
                for (t = 0; t < r.instances.length; t++) {
                    var o = r.instances[t];
                    o.enabled = r.enabled(o.namespace);
                }
            }, r.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                var t, n;
                for (t = 0, n = r.skips.length; t < n; t++) if (r.skips[t].test(e)) return !1;
                for (t = 0, n = r.names.length; t < n; t++) if (r.names[t].test(e)) return !0;
                return !1;
            }, r.humanize = n(41), Object.keys(e).forEach(function(t) {
                r[t] = e[t];
            }), r.instances = [], r.names = [], r.skips = [], r.formatters = {}, r.selectColor = t, 
            r.enable(r.load()), r;
        };
    }, function(e, t) {
        function n(e) {
            if (!((e = String(e)).length > 100)) {
                var t = /^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                if (t) {
                    var n = parseFloat(t[1]);
                    switch ((t[2] || "ms").toLowerCase()) {
                      case "years":
                      case "year":
                      case "yrs":
                      case "yr":
                      case "y":
                        return n * f;

                      case "weeks":
                      case "week":
                      case "w":
                        return n * h;

                      case "days":
                      case "day":
                      case "d":
                        return n * l;

                      case "hours":
                      case "hour":
                      case "hrs":
                      case "hr":
                      case "h":
                        return n * c;

                      case "minutes":
                      case "minute":
                      case "mins":
                      case "min":
                      case "m":
                        return n * u;

                      case "seconds":
                      case "second":
                      case "secs":
                      case "sec":
                      case "s":
                        return n * a;

                      case "milliseconds":
                      case "millisecond":
                      case "msecs":
                      case "msec":
                      case "ms":
                        return n;

                      default:
                        return;
                    }
                }
            }
        }
        function i(e) {
            var t = Math.abs(e);
            return t >= l ? Math.round(e / l) + "d" : t >= c ? Math.round(e / c) + "h" : t >= u ? Math.round(e / u) + "m" : t >= a ? Math.round(e / a) + "s" : e + "ms";
        }
        function o(e) {
            var t = Math.abs(e);
            return t >= l ? s(e, t, l, "day") : t >= c ? s(e, t, c, "hour") : t >= u ? s(e, t, u, "minute") : t >= a ? s(e, t, a, "second") : e + " ms";
        }
        function s(e, t, n, r) {
            var i = t >= 1.5 * n;
            return Math.round(e / n) + " " + r + (i ? "s" : "");
        }
        var a = 1e3, u = 60 * a, c = 60 * u, l = 24 * c, h = 7 * l, f = 365.25 * l;
        e.exports = function(e, t) {
            t = t || {};
            var s = void 0 === e ? "undefined" : r(e);
            if ("string" === s && e.length > 0) return n(e);
            if ("number" === s && !1 === isNaN(e)) return t.long ? o(e) : i(e);
            throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e));
        };
    }, function(e, t, n) {
        (function(t) {
            !function(t, n) {
                e.exports = n();
            }(0, function() {
                function e(e) {
                    var t = void 0 === e ? "undefined" : r(e);
                    return null !== e && ("object" === t || "function" === t);
                }
                function o(e) {
                    return "function" == typeof e;
                }
                function s() {
                    return void 0 !== D ? function() {
                        D(u);
                    } : a();
                }
                function a() {
                    var e = setTimeout;
                    return function() {
                        return e(u, 1);
                    };
                }
                function u() {
                    for (var e = 0; e < P; e += 2) (0, Q[e])(Q[e + 1]), Q[e] = void 0, Q[e + 1] = void 0;
                    P = 0;
                }
                function c(e, t) {
                    var n = this, r = new this.constructor(h);
                    void 0 === r[K] && N(r);
                    var i = n._state;
                    if (i) {
                        var o = arguments[i - 1];
                        F(function() {
                            return C(i, r, o, n._result);
                        });
                    } else S(n, r, e, t);
                    return r;
                }
                function l(e) {
                    var t = this;
                    if (e && "object" == (void 0 === e ? "undefined" : r(e)) && e.constructor === t) return e;
                    var n = new t(h);
                    return g(n, e), n;
                }
                function h() {}
                function f() {
                    return new TypeError("You cannot resolve a promise with itself");
                }
                function d() {
                    return new TypeError("A promises callback cannot return that same promise.");
                }
                function p(e) {
                    try {
                        return e.then;
                    } catch (e) {
                        return $.error = e, $;
                    }
                }
                function _(e, t, n, r) {
                    try {
                        e.call(t, n, r);
                    } catch (e) {
                        return e;
                    }
                }
                function v(e, t, n) {
                    F(function(e) {
                        var r = !1, i = _(n, t, function(n) {
                            r || (r = !0, t !== n ? g(e, n) : w(e, n));
                        }, function(t) {
                            r || (r = !0, O(e, t));
                        }, "Settle: " + (e._label || " unknown promise"));
                        !r && i && (r = !0, O(e, i));
                    }, e);
                }
                function y(e, t) {
                    t._state === H ? w(e, t._result) : t._state === z ? O(e, t._result) : S(t, void 0, function(t) {
                        return g(e, t);
                    }, function(t) {
                        return O(e, t);
                    });
                }
                function m(e, t, n) {
                    t.constructor === e.constructor && n === c && t.constructor.resolve === l ? y(e, t) : n === $ ? (O(e, $.error), 
                    $.error = null) : void 0 === n ? w(e, t) : o(n) ? v(e, t, n) : w(e, t);
                }
                function g(t, n) {
                    t === n ? O(t, f()) : e(n) ? m(t, n, p(n)) : w(t, n);
                }
                function b(e) {
                    e._onerror && e._onerror(e._result), A(e);
                }
                function w(e, t) {
                    e._state === G && (e._result = t, e._state = H, 0 !== e._subscribers.length && F(A, e));
                }
                function O(e, t) {
                    e._state === G && (e._state = z, e._result = t, F(b, e));
                }
                function S(e, t, n, r) {
                    var i = e._subscribers, o = i.length;
                    e._onerror = null, i[o] = t, i[o + H] = n, i[o + z] = r, 0 === o && e._state && F(A, e);
                }
                function A(e) {
                    var t = e._subscribers, n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, i = void 0, o = e._result, s = 0; s < t.length; s += 3) r = t[s], 
                        i = t[s + n], r ? C(n, r, i, o) : i(o);
                        e._subscribers.length = 0;
                    }
                }
                function E(e, t) {
                    try {
                        return e(t);
                    } catch (e) {
                        return $.error = e, $;
                    }
                }
                function C(e, t, n, r) {
                    var i = o(n), s = void 0, a = void 0, u = void 0, c = void 0;
                    if (i) {
                        if ((s = E(n, r)) === $ ? (c = !0, a = s.error, s.error = null) : u = !0, t === s) return void O(t, d());
                    } else s = r, u = !0;
                    t._state !== G || (i && u ? g(t, s) : c ? O(t, a) : e === H ? w(t, s) : e === z && O(t, s));
                }
                function T(e, t) {
                    try {
                        t(function(t) {
                            g(e, t);
                        }, function(t) {
                            O(e, t);
                        });
                    } catch (t) {
                        O(e, t);
                    }
                }
                function j() {
                    return X++;
                }
                function N(e) {
                    e[K] = X++, e._state = void 0, e._result = void 0, e._subscribers = [];
                }
                function x() {
                    return new Error("Array Methods must be provided an Array");
                }
                function k() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
                }
                function U() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
                }
                var I = void 0, R = I = Array.isArray ? Array.isArray : function(e) {
                    return "[object Array]" === Object.prototype.toString.call(e);
                }, P = 0, D = void 0, L = void 0, F = function(e, t) {
                    Q[P] = e, Q[P + 1] = t, 2 === (P += 2) && (L ? L(u) : V());
                }, q = void 0 !== i ? i : void 0, M = q || {}, B = M.MutationObserver || M.WebKitMutationObserver, W = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), J = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, Q = new Array(1e3), V = void 0;
                V = W ? function() {
                    return process.nextTick(u);
                } : B ? function() {
                    var e = 0, t = new B(u), n = document.createTextNode("");
                    return t.observe(n, {
                        characterData: !0
                    }), function() {
                        n.data = e = ++e % 2;
                    };
                }() : J ? function() {
                    var e = new MessageChannel();
                    return e.port1.onmessage = u, function() {
                        return e.port2.postMessage(0);
                    };
                }() : void 0 === q ? function() {
                    try {
                        var e = n(43);
                        return D = e.runOnLoop || e.runOnContext, s();
                    } catch (e) {
                        return a();
                    }
                }() : a();
                var K = Math.random().toString(36).substring(2), G = void 0, H = 1, z = 2, $ = {
                    error: null
                }, X = 0, Y = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(h), this.promise[K] || N(this.promise), 
                        R(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 
                        0 === this.length ? w(this.promise, this._result) : (this.length = this.length || 0, 
                        this._enumerate(t), 0 === this._remaining && w(this.promise, this._result))) : O(this.promise, x());
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === G && t < e.length; t++) this._eachEntry(e[t], t);
                    }, e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor, r = n.resolve;
                        if (r === l) {
                            var i = p(e);
                            if (i === c && e._state !== G) this._settledAt(e._state, t, e._result); else if ("function" != typeof i) this._remaining--, 
                            this._result[t] = e; else if (n === Z) {
                                var o = new n(h);
                                m(o, e, i), this._willSettleAt(o, t);
                            } else this._willSettleAt(new n(function(t) {
                                return t(e);
                            }), t);
                        } else this._willSettleAt(r(e), t);
                    }, e.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        r._state === G && (this._remaining--, e === z ? O(r, n) : this._result[t] = n), 
                        0 === this._remaining && w(r, this._result);
                    }, e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        S(e, void 0, function(e) {
                            return n._settledAt(H, t, e);
                        }, function(e) {
                            return n._settledAt(z, t, e);
                        });
                    }, e;
                }(), Z = function() {
                    function e(t) {
                        this[K] = j(), this._result = this._state = void 0, this._subscribers = [], h !== t && ("function" != typeof t && k(), 
                        this instanceof e ? T(this, t) : U());
                    }
                    return e.prototype.catch = function(e) {
                        return this.then(null, e);
                    }, e.prototype.finally = function(e) {
                        var t = this, n = t.constructor;
                        return t.then(function(t) {
                            return n.resolve(e()).then(function() {
                                return t;
                            });
                        }, function(t) {
                            return n.resolve(e()).then(function() {
                                throw t;
                            });
                        });
                    }, e;
                }();
                return Z.prototype.then = c, Z.all = function(e) {
                    return new Y(this, e).promise;
                }, Z.race = function(e) {
                    var t = this;
                    return new t(R(e) ? function(n, r) {
                        for (var i = e.length, o = 0; o < i; o++) t.resolve(e[o]).then(n, r);
                    } : function(e, t) {
                        return t(new TypeError("You must pass an array to race."));
                    });
                }, Z.resolve = l, Z.reject = function(e) {
                    var t = new this(h);
                    return O(t, e), t;
                }, Z._setScheduler = function(e) {
                    L = e;
                }, Z._setAsap = function(e) {
                    F = e;
                }, Z._asap = F, Z.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== t) e = t; else if ("undefined" != typeof self) e = self; else try {
                        e = Function("return this")();
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment");
                    }
                    var n = e.Promise;
                    if (n) {
                        var r = null;
                        try {
                            r = Object.prototype.toString.call(n.resolve());
                        } catch (e) {}
                        if ("[object Promise]" === r && !n.cast) return;
                    }
                    e.Promise = Z;
                }, Z.Promise = Z, Z;
            });
        }).call(t, n(6));
    }, function(e, t) {}, function(e, t, n) {
        (function(t) {
            var r = n(0), i = {}, o = [ "getItem", "setItem", "removeItem", "clear" ], s = t.localStorage;
            try {
                var a = "__storejs__";
                if (s.setItem(a, a), s.getItem(a) != a) throw new Error();
                s.removeItem(a);
            } catch (e) {
                s = n(45);
            }
            r(o).each(function(e) {
                i[e] = function() {
                    return s[e].apply(s, arguments);
                };
            }), i.async = !1, e.exports = i;
        }).call(t, n(6));
    }, function(e, t, n) {
        !function(t) {
            var n = {}, r = {};
            n.length = 0, n.getItem = function(e) {
                return e in r ? r[e] : null;
            }, n.setItem = function(e, t) {
                void 0 === t ? n.removeItem(e) : (r.hasOwnProperty(e) || n.length++, r[e] = "" + t);
            }, n.removeItem = function(e) {
                r.hasOwnProperty(e) && (delete r[e], n.length--);
            }, n.key = function(e) {
                return Object.keys(r)[e] || null;
            }, n.clear = function() {
                r = {}, n.length = 0;
            }, e.exports = n;
        }();
    }, function(e, t, n) {
        function r(e) {
            var t = void 0, n = e.slice(0, 8).toLowerCase();
            switch (e.slice(-9)) {
              case "-9Nh9j0Va":
                t = "lncldapi.com";
                break;

              case "-MdYXbMMI":
                t = "lncldglobal.com";
                break;

              default:
                t = "lncld.net";
            }
            return {
                push: "https://" + n + ".push." + t,
                stats: "https://" + n + ".stats." + t,
                engine: "https://" + n + ".engine." + t,
                api: "https://" + n + ".api." + t
            };
        }
        var i = n(5), o = n(47), s = n(3).isNullOrUndefined, a = n(0), u = a.extend, c = a.isObject, l = function(e) {
            return {
                push: e,
                stats: e,
                engine: e,
                api: e
            };
        }, h = !1;
        i.init = function(e) {
            if (!c(e)) return i.init({
                appId: e,
                appKey: arguments.length <= 1 ? void 0 : arguments[1],
                masterKey: arguments.length <= 2 ? void 0 : arguments[2]
            });
            var t = e.appId, n = e.appKey, s = e.masterKey, a = (e.hookKey, e.serverURLs), f = e.disableCurrentUser, d = e.production, p = e.realtime;
            if (i.applicationId) throw new Error("SDK is already initialized.");
            if (!t) throw new TypeError("appId must be a string");
            if (!n) throw new TypeError("appKey must be a string");
            s && console.warn("MasterKey is not supposed to be used in browser."), i._config.applicationId = t, 
            i._config.applicationKey = n, i._config.masterKey = s, void 0 !== d && (i._config.production = d), 
            void 0 !== f && (i._config.disableCurrentUser = f), i._appRouter = new o(i);
            var _ = h || void 0 !== a;
            i._setServerURLs(u({}, r(t), i._config.serverURLs, "string" == typeof a ? l(a) : a), _), 
            p ? i._config.realtime = p : i._sharedConfig.liveQueryRealtime && (i._config.realtime = new i._sharedConfig.liveQueryRealtime({
                appId: t,
                appKey: n
            }));
        }, i.setProduction = function(e) {
            s(e) ? i._config.production = null : i._config.production = e ? 1 : 0;
        }, i._setServerURLs = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            "string" != typeof e ? u(i._config.serverURLs, e) : i._config.serverURLs = l(e), 
            t && (i._appRouter ? i._appRouter.disable() : h = !0);
        }, i.setServerURLs = function(e) {
            return i._setServerURLs(e);
        }, i.keepErrorRawMessage = function(e) {
            i._sharedConfig.keepErrorRawMessage = e;
        }, i.setRequestTimeout = function(e) {
            i._config.requestTimeout = e;
        }, i.initialize = i.init, [ "applicationId", "applicationKey", "masterKey", "hookKey" ].forEach(function(e) {
            return Object.defineProperty(i, e, {
                get: function() {
                    return i._config[e];
                },
                set: function(t) {
                    i._config[e] = t;
                }
            });
        });
    }, function(e, t, n) {
        function r(e) {
            var t = this;
            this.AV = e, this.lockedUntil = 0, o.getAsync("serverURLs").then(function(e) {
                if (!t.disabled) {
                    if (!e) return t.lock(0);
                    var n = e.serverURLs, r = e.lockedUntil;
                    t.AV._setServerURLs(n, !1), t.lockedUntil = r;
                }
            }).catch(function() {
                return t.lock(0);
            });
        }
        var i = n(3).ajax, o = n(21);
        r.prototype.disable = function() {
            this.disabled = !0;
        }, r.prototype.lock = function(e) {
            this.lockedUntil = Date.now() + e;
        }, r.prototype.refresh = function() {
            var e = this;
            if (!(this.disabled || Date.now() < this.lockedUntil)) return this.lock(10), i({
                method: "get",
                url: "https://app-router.leancloud.cn/2/route",
                query: {
                    appId: this.AV.applicationId
                }
            }).then(function(t) {
                if (!e.disabled) {
                    var n = t.ttl;
                    if (!n) throw new Error("missing ttl");
                    n *= 1e3;
                    var r = {
                        push: "https://" + t.push_server,
                        stats: "https://" + t.stats_server,
                        engine: "https://" + t.engine_server,
                        api: "https://" + t.api_server
                    };
                    return e.AV._setServerURLs(r, !1), e.lock(n), o.setAsync("serverURLs", {
                        serverURLs: r,
                        lockedUntil: e.lockedUntil
                    }, n);
                }
            }).catch(function(t) {
                console.warn("refresh server URLs failed: " + t.message), e.lock(600);
            });
        }, e.exports = r;
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            var t = /\s+/, n = Array.prototype.slice;
            e.Events = {
                on: function(e, n, r) {
                    var i, o, s, a, u;
                    if (!n) return this;
                    for (e = e.split(t), i = this._callbacks || (this._callbacks = {}), o = e.shift(); o; ) (s = (u = i[o]) ? u.tail : {}).next = a = {}, 
                    s.context = r, s.callback = n, i[o] = {
                        tail: a,
                        next: u ? u.next : s
                    }, o = e.shift();
                    return this;
                },
                off: function(e, n, i) {
                    var o, s, a, u, c, l;
                    if (s = this._callbacks) {
                        if (!(e || n || i)) return delete this._callbacks, this;
                        for (o = (e = e ? e.split(t) : r.keys(s)).shift(); o; ) if (a = s[o], delete s[o], 
                        a && (n || i)) {
                            for (u = a.tail, a = a.next; a !== u; ) c = a.callback, l = a.context, (n && c !== n || i && l !== i) && this.on(o, c, l), 
                            a = a.next;
                            o = e.shift();
                        }
                        return this;
                    }
                },
                trigger: function(e) {
                    var r, i, o, s, a, u, c;
                    if (!(o = this._callbacks)) return this;
                    for (u = o.all, e = e.split(t), c = n.call(arguments, 1), r = e.shift(); r; ) {
                        if (i = o[r]) for (s = i.tail; (i = i.next) !== s; ) i.callback.apply(i.context || this, c);
                        if (i = u) for (s = i.tail, a = [ r ].concat(c); (i = i.next) !== s; ) i.callback.apply(i.context || this, a);
                        r = e.shift();
                    }
                    return this;
                }
            }, e.Events.bind = e.Events.on, e.Events.unbind = e.Events.off;
        };
    }, function(e, n, r) {
        var i = r(0), o = r(1);
        e.exports = function(e) {
            e.GeoPoint = function(t, n) {
                i.isArray(t) ? (e.GeoPoint._validate(t[0], t[1]), this.latitude = t[0], this.longitude = t[1]) : i.isObject(t) ? (e.GeoPoint._validate(t.latitude, t.longitude), 
                this.latitude = t.latitude, this.longitude = t.longitude) : i.isNumber(t) && i.isNumber(n) ? (e.GeoPoint._validate(t, n), 
                this.latitude = t, this.longitude = n) : (this.latitude = 0, this.longitude = 0);
                var r = this;
                this.__defineGetter__ && this.__defineSetter__ && (this._latitude = this.latitude, 
                this._longitude = this.longitude, this.__defineGetter__("latitude", function() {
                    return r._latitude;
                }), this.__defineGetter__("longitude", function() {
                    return r._longitude;
                }), this.__defineSetter__("latitude", function(t) {
                    e.GeoPoint._validate(t, r.longitude), r._latitude = t;
                }), this.__defineSetter__("longitude", function(t) {
                    e.GeoPoint._validate(r.latitude, t), r._longitude = t;
                }));
            }, e.GeoPoint._validate = function(e, t) {
                if (e < -90) throw new Error("AV.GeoPoint latitude " + e + " < -90.0.");
                if (e > 90) throw new Error("AV.GeoPoint latitude " + e + " > 90.0.");
                if (t < -180) throw new Error("AV.GeoPoint longitude " + t + " < -180.0.");
                if (t > 180) throw new Error("AV.GeoPoint longitude " + t + " > 180.0.");
            }, e.GeoPoint.current = function() {
                return new o(function(n, r) {
                    t.geolocation.getCurrentPosition(function(t) {
                        n(new e.GeoPoint({
                            latitude: t.coords.latitude,
                            longitude: t.coords.longitude
                        }));
                    }, r);
                });
            }, i.extend(e.GeoPoint.prototype, {
                toJSON: function() {
                    return e.GeoPoint._validate(this.latitude, this.longitude), {
                        __type: "GeoPoint",
                        latitude: this.latitude,
                        longitude: this.longitude
                    };
                },
                radiansTo: function(e) {
                    var t = Math.PI / 180, n = this.latitude * t, r = this.longitude * t, i = e.latitude * t, o = n - i, s = r - e.longitude * t, a = Math.sin(o / 2), u = Math.sin(s / 2), c = a * a + Math.cos(n) * Math.cos(i) * u * u;
                    return c = Math.min(1, c), 2 * Math.asin(Math.sqrt(c));
                },
                kilometersTo: function(e) {
                    return 6371 * this.radiansTo(e);
                },
                milesTo: function(e) {
                    return 3958.8 * this.radiansTo(e);
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.ACL = function(t) {
                var n = this;
                if (n.permissionsById = {}, r.isObject(t)) if (t instanceof e.User) n.setReadAccess(t, !0), 
                n.setWriteAccess(t, !0); else {
                    if (r.isFunction(t)) throw new Error("AV.ACL() called with a function.  Did you forget ()?");
                    e._objectEach(t, function(t, i) {
                        if (!r.isString(i)) throw new Error("Tried to create an ACL with an invalid userId.");
                        n.permissionsById[i] = {}, e._objectEach(t, function(e, t) {
                            if ("read" !== t && "write" !== t) throw new Error("Tried to create an ACL with an invalid permission type.");
                            if (!r.isBoolean(e)) throw new Error("Tried to create an ACL with an invalid permission value.");
                            n.permissionsById[i][t] = e;
                        });
                    });
                }
            }, e.ACL.prototype.toJSON = function() {
                return r.clone(this.permissionsById);
            }, e.ACL.prototype._setAccess = function(t, n, i) {
                if (n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName()), 
                !r.isString(n)) throw new Error("userId must be a string.");
                if (!r.isBoolean(i)) throw new Error("allowed must be either true or false.");
                var o = this.permissionsById[n];
                if (!o) {
                    if (!i) return;
                    o = {}, this.permissionsById[n] = o;
                }
                i ? this.permissionsById[n][t] = !0 : (delete o[t], r.isEmpty(o) && delete this.permissionsById[n]);
            }, e.ACL.prototype._getAccess = function(t, n) {
                n instanceof e.User ? n = n.id : n instanceof e.Role && (n = "role:" + n.getName());
                var r = this.permissionsById[n];
                return !!r && !!r[t];
            }, e.ACL.prototype.setReadAccess = function(e, t) {
                this._setAccess("read", e, t);
            }, e.ACL.prototype.getReadAccess = function(e) {
                return this._getAccess("read", e);
            }, e.ACL.prototype.setWriteAccess = function(e, t) {
                this._setAccess("write", e, t);
            }, e.ACL.prototype.getWriteAccess = function(e) {
                return this._getAccess("write", e);
            }, e.ACL.prototype.setPublicReadAccess = function(e) {
                this.setReadAccess("*", e);
            }, e.ACL.prototype.getPublicReadAccess = function() {
                return this.getReadAccess("*");
            }, e.ACL.prototype.setPublicWriteAccess = function(e) {
                this.setWriteAccess("*", e);
            }, e.ACL.prototype.getPublicWriteAccess = function() {
                return this.getWriteAccess("*");
            }, e.ACL.prototype.getRoleReadAccess = function(t) {
                if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getReadAccess("role:" + t);
                throw new Error("role must be a AV.Role or a String");
            }, e.ACL.prototype.getRoleWriteAccess = function(t) {
                if (t instanceof e.Role && (t = t.getName()), r.isString(t)) return this.getWriteAccess("role:" + t);
                throw new Error("role must be a AV.Role or a String");
            }, e.ACL.prototype.setRoleReadAccess = function(t, n) {
                if (t instanceof e.Role && (t = t.getName()), !r.isString(t)) throw new Error("role must be a AV.Role or a String");
                this.setReadAccess("role:" + t, n);
            }, e.ACL.prototype.setRoleWriteAccess = function(t, n) {
                if (t instanceof e.Role && (t = t.getName()), !r.isString(t)) throw new Error("role must be a AV.Role or a String");
                this.setWriteAccess("role:" + t, n);
            };
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.Op = function() {
                this._initialize.apply(this, arguments);
            }, r.extend(e.Op.prototype, {
                _initialize: function() {}
            }), r.extend(e.Op, {
                _extend: e._extend,
                _opDecoderMap: {},
                _registerDecoder: function(t, n) {
                    e.Op._opDecoderMap[t] = n;
                },
                _decode: function(t) {
                    var n = e.Op._opDecoderMap[t.__op];
                    return n ? n(t) : void 0;
                }
            }), e.Op._registerDecoder("Batch", function(t) {
                var n = null;
                return e._arrayEach(t.ops, function(t) {
                    t = e.Op._decode(t), n = t._mergeWithPrevious(n);
                }), n;
            }), e.Op.Set = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return e._encode(this.value());
                },
                _mergeWithPrevious: function(e) {
                    return this;
                },
                _estimate: function(e) {
                    return this.value();
                }
            }), e.Op._UNSET = {}, e.Op.Unset = e.Op._extend({
                toJSON: function() {
                    return {
                        __op: "Delete"
                    };
                },
                _mergeWithPrevious: function(e) {
                    return this;
                },
                _estimate: function(t) {
                    return e.Op._UNSET;
                }
            }), e.Op._registerDecoder("Delete", function(t) {
                return new e.Op.Unset();
            }), e.Op.Increment = e.Op._extend({
                _initialize: function(e) {
                    this._amount = e;
                },
                amount: function() {
                    return this._amount;
                },
                toJSON: function() {
                    return {
                        __op: "Increment",
                        amount: this._amount
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.amount());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() + this.amount());
                        if (t instanceof e.Op.Increment) return new e.Op.Increment(this.amount() + t.amount());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e ? e + this.amount() : this.amount();
                }
            }), e.Op._registerDecoder("Increment", function(t) {
                return new e.Op.Increment(t.amount);
            }), e.Op.BitAnd = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return {
                        __op: "BitAnd",
                        value: this.value()
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(0);
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() & this.value());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e & this.value();
                }
            }), e.Op._registerDecoder("BitAnd", function(t) {
                return new e.Op.BitAnd(t.value);
            }), e.Op.BitOr = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return {
                        __op: "BitOr",
                        value: this.value()
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() | this.value());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e | this.value();
                }
            }), e.Op._registerDecoder("BitOr", function(t) {
                return new e.Op.BitOr(t.value);
            }), e.Op.BitXor = e.Op._extend({
                _initialize: function(e) {
                    this._value = e;
                },
                value: function() {
                    return this._value;
                },
                toJSON: function() {
                    return {
                        __op: "BitXor",
                        value: this.value()
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.value());
                        if (t instanceof e.Op.Set) return new e.Op.Set(t.value() ^ this.value());
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e ^ this.value();
                }
            }), e.Op._registerDecoder("BitXor", function(t) {
                return new e.Op.BitXor(t.value);
            }), e.Op.Add = e.Op._extend({
                _initialize: function(e) {
                    this._objects = e;
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "Add",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Add) return new e.Op.Add(t.objects().concat(this.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(e) {
                    return e ? e.concat(this.objects()) : r.clone(this.objects());
                }
            }), e.Op._registerDecoder("Add", function(t) {
                return new e.Op.Add(e._decode(t.objects));
            }), e.Op.AddUnique = e.Op._extend({
                _initialize: function(e) {
                    this._objects = r.uniq(e);
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "AddUnique",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return new e.Op.Set(this.objects());
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.AddUnique) return new e.Op.AddUnique(this._estimate(t.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t) {
                    if (t) {
                        var n = r.clone(t);
                        return e._arrayEach(this.objects(), function(t) {
                            if (t instanceof e.Object && t.id) {
                                var i = r.find(n, function(n) {
                                    return n instanceof e.Object && n.id === t.id;
                                });
                                if (i) {
                                    var o = r.indexOf(n, i);
                                    n[o] = t;
                                } else n.push(t);
                            } else r.contains(n, t) || n.push(t);
                        }), n;
                    }
                    return r.clone(this.objects());
                }
            }), e.Op._registerDecoder("AddUnique", function(t) {
                return new e.Op.AddUnique(e._decode(t.objects));
            }), e.Op.Remove = e.Op._extend({
                _initialize: function(e) {
                    this._objects = r.uniq(e);
                },
                objects: function() {
                    return this._objects;
                },
                toJSON: function() {
                    return {
                        __op: "Remove",
                        objects: e._encode(this.objects())
                    };
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) return t;
                        if (t instanceof e.Op.Set) return new e.Op.Set(this._estimate(t.value()));
                        if (t instanceof e.Op.Remove) return new e.Op.Remove(r.union(t.objects(), this.objects()));
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t) {
                    if (t) {
                        var n = r.difference(t, this.objects());
                        return e._arrayEach(this.objects(), function(t) {
                            t instanceof e.Object && t.id && (n = r.reject(n, function(n) {
                                return n instanceof e.Object && n.id === t.id;
                            }));
                        }), n;
                    }
                    return [];
                }
            }), e.Op._registerDecoder("Remove", function(t) {
                return new e.Op.Remove(e._decode(t.objects));
            }), e.Op.Relation = e.Op._extend({
                _initialize: function(t, n) {
                    this._targetClassName = null;
                    var i = this, o = function(t) {
                        if (t instanceof e.Object) {
                            if (!t.id) throw new Error("You can't add an unsaved AV.Object to a relation.");
                            if (i._targetClassName || (i._targetClassName = t.className), i._targetClassName !== t.className) throw new Error("Tried to create a AV.Relation with 2 different types: " + i._targetClassName + " and " + t.className + ".");
                            return t.id;
                        }
                        return t;
                    };
                    this.relationsToAdd = r.uniq(r.map(t, o)), this.relationsToRemove = r.uniq(r.map(n, o));
                },
                added: function() {
                    var t = this;
                    return r.map(this.relationsToAdd, function(n) {
                        var r = e.Object._create(t._targetClassName);
                        return r.id = n, r;
                    });
                },
                removed: function() {
                    var t = this;
                    return r.map(this.relationsToRemove, function(n) {
                        var r = e.Object._create(t._targetClassName);
                        return r.id = n, r;
                    });
                },
                toJSON: function() {
                    var e = null, t = null, n = this, i = function(e) {
                        return {
                            __type: "Pointer",
                            className: n._targetClassName,
                            objectId: e
                        };
                    }, o = null;
                    return this.relationsToAdd.length > 0 && (o = r.map(this.relationsToAdd, i), e = {
                        __op: "AddRelation",
                        objects: o
                    }), this.relationsToRemove.length > 0 && (o = r.map(this.relationsToRemove, i), 
                    t = {
                        __op: "RemoveRelation",
                        objects: o
                    }), e && t ? {
                        __op: "Batch",
                        ops: [ e, t ]
                    } : e || t || {};
                },
                _mergeWithPrevious: function(t) {
                    if (t) {
                        if (t instanceof e.Op.Unset) throw new Error("You can't modify a relation after deleting it.");
                        if (t instanceof e.Op.Relation) {
                            if (t._targetClassName && t._targetClassName !== this._targetClassName) throw new Error("Related object must be of class " + t._targetClassName + ", but " + this._targetClassName + " was passed in.");
                            var n = r.union(r.difference(t.relationsToAdd, this.relationsToRemove), this.relationsToAdd), i = r.union(r.difference(t.relationsToRemove, this.relationsToAdd), this.relationsToRemove), o = new e.Op.Relation(n, i);
                            return o._targetClassName = this._targetClassName, o;
                        }
                        throw new Error("Op is invalid after previous op.");
                    }
                    return this;
                },
                _estimate: function(t, n, r) {
                    if (t) {
                        if (t instanceof e.Relation) {
                            if (this._targetClassName) if (t.targetClassName) {
                                if (t.targetClassName !== this._targetClassName) throw new Error("Related object must be a " + t.targetClassName + ", but a " + this._targetClassName + " was passed in.");
                            } else t.targetClassName = this._targetClassName;
                            return t;
                        }
                        throw new Error("Op is invalid after previous op.");
                    }
                    new e.Relation(n, r).targetClassName = this._targetClassName;
                }
            }), e.Op._registerDecoder("AddRelation", function(t) {
                return new e.Op.Relation(e._decode(t.objects), []);
            }), e.Op._registerDecoder("RemoveRelation", function(t) {
                return new e.Op.Relation([], e._decode(t.objects));
            });
        };
    }, function(e, t, n) {
        var r = n(0);
        e.exports = function(e) {
            e.Relation = function(e, t) {
                if (!r.isString(t)) throw new TypeError("key must be a string");
                this.parent = e, this.key = t, this.targetClassName = null;
            }, e.Relation.reverseQuery = function(t, n, r) {
                var i = new e.Query(t);
                return i.equalTo(n, r._toPointer()), i;
            }, r.extend(e.Relation.prototype, {
                _ensureParentAndKey: function(e, t) {
                    if (this.parent = this.parent || e, this.key = this.key || t, this.parent !== e) throw new Error("Internal Error. Relation retrieved from two different Objects.");
                    if (this.key !== t) throw new Error("Internal Error. Relation retrieved from two different keys.");
                },
                add: function(t) {
                    r.isArray(t) || (t = [ t ]);
                    var n = new e.Op.Relation(t, []);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
                },
                remove: function(t) {
                    r.isArray(t) || (t = [ t ]);
                    var n = new e.Op.Relation([], t);
                    this.parent.set(this.key, n), this.targetClassName = n._targetClassName;
                },
                toJSON: function() {
                    return {
                        __type: "Relation",
                        className: this.targetClassName
                    };
                },
                query: function() {
                    var t, n;
                    return this.targetClassName ? (t = e.Object._getSubclass(this.targetClassName), 
                    n = new e.Query(t)) : (t = e.Object._getSubclass(this.parent.className), n = new e.Query(t), 
                    n._extraOptions.redirectClassNameForKey = this.key), n._addCondition("$relatedTo", "object", this.parent._toPointer()), 
                    n._addCondition("$relatedTo", "key", this.key), n;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(54), o = n(55), s = n(56), a = n(4), u = n(2)._request, c = n(1), l = n(3), h = l.tap, f = l.transformFetchOptions, d = n(7)("leancloud:file"), p = n(60);
        e.exports = function(e) {
            var t = function() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
            }, n = function(e) {
                return r.isString(e) ? e.match(/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/)[4] : "";
            }, l = function(e) {
                if (e < 26) return String.fromCharCode(65 + e);
                if (e < 52) return String.fromCharCode(e - 26 + 97);
                if (e < 62) return String.fromCharCode(e - 52 + 48);
                if (62 === e) return "+";
                if (63 === e) return "/";
                throw new Error("Tried to encode large digit " + e + " in base64.");
            }, _ = function(e) {
                var t = [];
                return t.length = Math.ceil(e.length / 3), r.times(t.length, function(n) {
                    var r = e[3 * n], i = e[3 * n + 1] || 0, o = e[3 * n + 2] || 0, s = 3 * n + 1 < e.length, a = 3 * n + 2 < e.length;
                    t[n] = [ l(r >> 2 & 63), l(r << 4 & 48 | i >> 4 & 15), s ? l(i << 2 & 60 | o >> 6 & 3) : "=", a ? l(63 & o) : "=" ].join("");
                }), t.join("");
            };
            e.File = function(t, i, o) {
                if (this.attributes = {
                    name: t,
                    url: "",
                    metaData: {},
                    base64: ""
                }, r.isString(i)) throw new TypeError("Creating an AV.File from a String is not yet supported.");
                r.isArray(i) && (this.attributes.metaData.size = i.length, i = {
                    base64: _(i)
                }), this._extName = "", this._data = i, this._uploadHeaders = {}, i && i.blob && (this._extName = n(i.blob.uri)), 
                "undefined" != typeof Blob && i instanceof Blob && (i.size && (this.attributes.metaData.size = i.size), 
                i.name && (this._extName = n(i.name)));
                var s = void 0;
                if (i && i.owner) s = i.owner; else if (!e._config.disableCurrentUser) try {
                    s = e.User.current();
                } catch (e) {
                    if ("SYNC_API_NOT_AVAILABLE" !== e.code) throw e;
                }
                this.attributes.metaData.owner = s ? s.id : "unknown", this.set("mime_type", o);
            }, e.File.withURL = function(t, n, r, i) {
                if (!t || !n) throw new Error("Please provide file name and url");
                var o = new e.File(t, null, i);
                if (r) for (var s in r) o.attributes.metaData[s] || (o.attributes.metaData[s] = r[s]);
                return o.attributes.url = n, o.attributes.metaData.__source = "external", o;
            }, e.File.createWithoutData = function(t) {
                var n = new e.File();
                return n.id = t, n;
            }, r.extend(e.File.prototype, {
                className: "_File",
                _toFullJSON: function(t) {
                    var n = this, i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], o = r.clone(this.attributes);
                    return e._objectEach(o, function(n, r) {
                        o[r] = e._encode(n, t, void 0, i);
                    }), e._objectEach(this._operations, function(e, t) {
                        o[t] = e;
                    }), r.has(this, "id") && (o.objectId = this.id), r([ "createdAt", "updatedAt" ]).each(function(e) {
                        if (r.has(n, e)) {
                            var t = n[e];
                            o[e] = r.isDate(t) ? t.toJSON() : t;
                        }
                    }), i && (o.__type = "File"), o;
                },
                toFullJSON: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(e);
                },
                toJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [ this ];
                    return this._toFullJSON(n, !1);
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    };
                },
                getACL: function() {
                    return this._acl;
                },
                setACL: function(t) {
                    if (!(t instanceof e.ACL)) return new a(a.OTHER_CAUSE, "ACL must be a AV.ACL.");
                    this._acl = t;
                },
                name: function() {
                    return this.get("name");
                },
                url: function() {
                    return this.get("url");
                },
                get: function(e) {
                    switch (e) {
                      case "objectId":
                        return this.id;

                      case "url":
                      case "name":
                      case "mime_type":
                      case "metaData":
                      case "createdAt":
                      case "updatedAt":
                        return this.attributes[e];

                      default:
                        return this.attributes.metaData[e];
                    }
                },
                set: function() {
                    for (var e = this, t = function(t, n) {
                        switch (t) {
                          case "name":
                          case "url":
                          case "mime_type":
                          case "base64":
                          case "metaData":
                            e.attributes[t] = n;
                            break;

                          default:
                            e.attributes.metaData[t] = n;
                        }
                    }, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    switch (r.length) {
                      case 1:
                        for (var o in r[0]) t(o, r[0][o]);
                        break;

                      case 2:
                        t(r[0], r[1]);
                    }
                },
                setUploadHeader: function(e, t) {
                    return this._uploadHeaders[e] = t, this;
                },
                metaData: function(e, t) {
                    return e && t ? (this.attributes.metaData[e] = t, this) : e && !t ? this.attributes.metaData[e] : this.attributes.metaData;
                },
                thumbnailURL: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100, r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3], i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "png", o = this.attributes.url;
                    if (!o) throw new Error("Invalid url.");
                    if (!e || !t || e <= 0 || t <= 0) throw new Error("Invalid width or height value.");
                    if (n <= 0 || n > 100) throw new Error("Invalid quality value.");
                    return o + "?imageView/" + (r ? 2 : 1) + "/w/" + e + "/h/" + t + "/q/" + n + "/format/" + i;
                },
                size: function() {
                    return this.metaData().size;
                },
                ownerId: function() {
                    return this.metaData().owner;
                },
                destroy: function(e) {
                    return this.id ? u("files", null, this.id, "DELETE", null, e) : c.reject(new Error("The file id does not eixst."));
                },
                _fileToken: function(e, r) {
                    var i = this.attributes.name, o = n(i);
                    !o && this._extName && (i += this._extName, o = this._extName);
                    var s = t() + t() + t() + t() + t() + o, a = {
                        key: s,
                        name: i,
                        ACL: this._acl,
                        mime_type: e,
                        metaData: this.attributes.metaData
                    };
                    return this._qiniu_key = s, u("fileTokens", null, null, "POST", a, r);
                },
                save: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (this.id) throw new Error("File already saved. If you want to manipulate a file, use AV.Query to get it.");
                    if (!this._previousSave) if (this._data) {
                        var n = this.get("mime_type");
                        this._previousSave = this._fileToken(n, t).then(function(a) {
                            return a.mime_type && (n = a.mime_type, e.set("mime_type", n)), e._token = a.token, 
                            c.resolve().then(function() {
                                var t = e._data;
                                if (t && t.base64) return p(t.base64, n);
                                if (t && t.blob) return !t.blob.type && n && (t.blob.type = n), t.blob.name || (t.blob.name = e.get("name")), 
                                t.blob;
                                if ("undefined" != typeof Blob && t instanceof Blob) return t;
                                throw new TypeError("malformed file data");
                            }).then(function(n) {
                                var u = r.extend({}, t);
                                switch (t.onprogress && (u.onprogress = function(e) {
                                    if ("download" !== e.direction) return t.onprogress(e);
                                }), a.provider) {
                                  case "s3":
                                    return s(a, n, e, u);

                                  case "qcloud":
                                    return i(a, n, e, u);

                                  case "qiniu":
                                  default:
                                    return o(a, n, e, u);
                                }
                            }).then(h(function() {
                                return e._callback(!0);
                            }), function(t) {
                                throw e._callback(!1), t;
                            });
                        });
                    } else if (this.attributes.url && "external" === this.attributes.metaData.__source) {
                        var a = {
                            name: this.attributes.name,
                            ACL: this._acl,
                            metaData: this.attributes.metaData,
                            mime_type: this.mimeType,
                            url: this.attributes.url
                        };
                        this._previousSave = u("files", this.attributes.name, null, "post", a, t).then(function(t) {
                            return e.attributes.name = t.name, e.attributes.url = t.url, e.id = t.objectId, 
                            t.size && (e.attributes.metaData.size = t.size), e;
                        });
                    }
                    return this._previousSave;
                },
                _callback: function(e) {
                    u("fileCallback", null, null, "post", {
                        token: this._token,
                        result: e
                    }).catch(d), delete this._token, delete this._data;
                },
                fetch: function(e, t) {
                    return u("files", null, this.id, "GET", f(e), t).then(this._finishFetch.bind(this));
                },
                _finishFetch: function(t) {
                    var n = e.Object.prototype.parse(t);
                    return n.attributes = {
                        name: n.name,
                        url: n.url,
                        mime_type: n.mime_type,
                        bucket: n.bucket
                    }, n.attributes.metaData = n.metaData || {}, n.id = n.objectId, delete n.objectId, 
                    delete n.metaData, delete n.url, delete n.name, delete n.mime_type, delete n.bucket, 
                    r.extend(this, n), this;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(8), i = n(7)("cos"), o = n(1);
        e.exports = function(e, t, n) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
            var a = e.upload_url + "?sign=" + encodeURIComponent(e.token);
            return new o(function(e, o) {
                var u = r("POST", a).set(n._uploadHeaders).attach("fileContent", t, n.attributes.name).field("op", "upload");
                s.onprogress && u.on("progress", s.onprogress), u.end(function(t, r) {
                    if (r && i(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, 
                    t.response = r.body), o(t);
                    e(n);
                });
            });
        };
    }, function(e, t, n) {
        var r = n(8), i = n(1), o = n(7)("qiniu");
        e.exports = function(e, t, n) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId;
            var a = e.token, u = e.upload_url || "https://upload.qiniup.com";
            return new i(function(e, i) {
                var c = r("POST", u).set(n._uploadHeaders).attach("file", t, n.attributes.name).field("name", n.attributes.name).field("key", n._qiniu_key).field("token", a);
                s.onprogress && c.on("progress", s.onprogress), c.end(function(t, r) {
                    if (r && o(r.status, r.body, r.text), t) return r && (t.statusCode = r.status, t.responseText = r.text, 
                    t.response = r.body), i(t);
                    e(n);
                });
            });
        };
    }, function(e, t, n) {
        var r = n(8), i = n(1), o = function(e, t) {
            return t && (e.statusCode = t.status, e.responseText = t.text, e.response = t.body), 
            e;
        };
        e.exports = function(e, t, n) {
            var s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            return n.attributes.url = e.url, n._bucket = e.bucket, n.id = e.objectId, new i(function(i, a) {
                var u = r("PUT", e.upload_url).set(Object.assign({
                    "Content-Type": n.get("mime_type"),
                    "Cache-Control": "public, max-age=31536000"
                }, n._uploadHeaders));
                s.onprogress && u.on("progress", s.onprogress), u.on("response", function(e) {
                    if (e.ok) return i(n);
                    a(o(e.error, e));
                }), u.on("error", function(e, t) {
                    return a(o(e, t));
                }), u.send(t).end();
            });
        };
    }, function(e, t, n) {
        !function() {
            var t = n(58), r = n(22).utf8, i = n(59), o = n(22).bin, s = function e(n, s) {
                n.constructor == String ? n = s && "binary" === s.encoding ? o.stringToBytes(n) : r.stringToBytes(n) : i(n) ? n = Array.prototype.slice.call(n, 0) : Array.isArray(n) || (n = n.toString());
                for (var a = t.bytesToWords(n), u = 8 * n.length, c = 1732584193, l = -271733879, h = -1732584194, f = 271733878, d = 0; d < a.length; d++) a[d] = 16711935 & (a[d] << 8 | a[d] >>> 24) | 4278255360 & (a[d] << 24 | a[d] >>> 8);
                a[u >>> 5] |= 128 << u % 32, a[14 + (u + 64 >>> 9 << 4)] = u;
                for (var p = e._ff, _ = e._gg, v = e._hh, y = e._ii, d = 0; d < a.length; d += 16) {
                    var m = c, g = l, b = h, w = f;
                    l = y(l = y(l = y(l = y(l = v(l = v(l = v(l = v(l = _(l = _(l = _(l = _(l = p(l = p(l = p(l = p(l, h = p(h, f = p(f, c = p(c, l, h, f, a[d + 0], 7, -680876936), l, h, a[d + 1], 12, -389564586), c, l, a[d + 2], 17, 606105819), f, c, a[d + 3], 22, -1044525330), h = p(h, f = p(f, c = p(c, l, h, f, a[d + 4], 7, -176418897), l, h, a[d + 5], 12, 1200080426), c, l, a[d + 6], 17, -1473231341), f, c, a[d + 7], 22, -45705983), h = p(h, f = p(f, c = p(c, l, h, f, a[d + 8], 7, 1770035416), l, h, a[d + 9], 12, -1958414417), c, l, a[d + 10], 17, -42063), f, c, a[d + 11], 22, -1990404162), h = p(h, f = p(f, c = p(c, l, h, f, a[d + 12], 7, 1804603682), l, h, a[d + 13], 12, -40341101), c, l, a[d + 14], 17, -1502002290), f, c, a[d + 15], 22, 1236535329), h = _(h, f = _(f, c = _(c, l, h, f, a[d + 1], 5, -165796510), l, h, a[d + 6], 9, -1069501632), c, l, a[d + 11], 14, 643717713), f, c, a[d + 0], 20, -373897302), h = _(h, f = _(f, c = _(c, l, h, f, a[d + 5], 5, -701558691), l, h, a[d + 10], 9, 38016083), c, l, a[d + 15], 14, -660478335), f, c, a[d + 4], 20, -405537848), h = _(h, f = _(f, c = _(c, l, h, f, a[d + 9], 5, 568446438), l, h, a[d + 14], 9, -1019803690), c, l, a[d + 3], 14, -187363961), f, c, a[d + 8], 20, 1163531501), h = _(h, f = _(f, c = _(c, l, h, f, a[d + 13], 5, -1444681467), l, h, a[d + 2], 9, -51403784), c, l, a[d + 7], 14, 1735328473), f, c, a[d + 12], 20, -1926607734), h = v(h, f = v(f, c = v(c, l, h, f, a[d + 5], 4, -378558), l, h, a[d + 8], 11, -2022574463), c, l, a[d + 11], 16, 1839030562), f, c, a[d + 14], 23, -35309556), h = v(h, f = v(f, c = v(c, l, h, f, a[d + 1], 4, -1530992060), l, h, a[d + 4], 11, 1272893353), c, l, a[d + 7], 16, -155497632), f, c, a[d + 10], 23, -1094730640), h = v(h, f = v(f, c = v(c, l, h, f, a[d + 13], 4, 681279174), l, h, a[d + 0], 11, -358537222), c, l, a[d + 3], 16, -722521979), f, c, a[d + 6], 23, 76029189), h = v(h, f = v(f, c = v(c, l, h, f, a[d + 9], 4, -640364487), l, h, a[d + 12], 11, -421815835), c, l, a[d + 15], 16, 530742520), f, c, a[d + 2], 23, -995338651), h = y(h, f = y(f, c = y(c, l, h, f, a[d + 0], 6, -198630844), l, h, a[d + 7], 10, 1126891415), c, l, a[d + 14], 15, -1416354905), f, c, a[d + 5], 21, -57434055), h = y(h, f = y(f, c = y(c, l, h, f, a[d + 12], 6, 1700485571), l, h, a[d + 3], 10, -1894986606), c, l, a[d + 10], 15, -1051523), f, c, a[d + 1], 21, -2054922799), h = y(h, f = y(f, c = y(c, l, h, f, a[d + 8], 6, 1873313359), l, h, a[d + 15], 10, -30611744), c, l, a[d + 6], 15, -1560198380), f, c, a[d + 13], 21, 1309151649), h = y(h, f = y(f, c = y(c, l, h, f, a[d + 4], 6, -145523070), l, h, a[d + 11], 10, -1120210379), c, l, a[d + 2], 15, 718787259), f, c, a[d + 9], 21, -343485551), 
                    c = c + m >>> 0, l = l + g >>> 0, h = h + b >>> 0, f = f + w >>> 0;
                }
                return t.endian([ c, l, h, f ]);
            };
            s._ff = function(e, t, n, r, i, o, s) {
                var a = e + (t & n | ~t & r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._gg = function(e, t, n, r, i, o, s) {
                var a = e + (t & r | n & ~r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._hh = function(e, t, n, r, i, o, s) {
                var a = e + (t ^ n ^ r) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._ii = function(e, t, n, r, i, o, s) {
                var a = e + (n ^ (t | ~r)) + (i >>> 0) + s;
                return (a << o | a >>> 32 - o) + t;
            }, s._blocksize = 16, s._digestsize = 16, e.exports = function(e, n) {
                if (void 0 === e || null === e) throw new Error("Illegal argument " + e);
                var r = t.wordsToBytes(s(e, n));
                return n && n.asBytes ? r : n && n.asString ? o.bytesToString(r) : t.bytesToHex(r);
            };
        }();
    }, function(e, t) {
        !function() {
            var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = {
                rotl: function(e, t) {
                    return e << t | e >>> 32 - t;
                },
                rotr: function(e, t) {
                    return e << 32 - t | e >>> t;
                },
                endian: function(e) {
                    if (e.constructor == Number) return 16711935 & n.rotl(e, 8) | 4278255360 & n.rotl(e, 24);
                    for (var t = 0; t < e.length; t++) e[t] = n.endian(e[t]);
                    return e;
                },
                randomBytes: function(e) {
                    for (var t = []; e > 0; e--) t.push(Math.floor(256 * Math.random()));
                    return t;
                },
                bytesToWords: function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++, r += 8) t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t;
                },
                wordsToBytes: function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8) t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t;
                },
                bytesToHex: function(e) {
                    for (var t = [], n = 0; n < e.length; n++) t.push((e[n] >>> 4).toString(16)), t.push((15 & e[n]).toString(16));
                    return t.join("");
                },
                hexToBytes: function(e) {
                    for (var t = [], n = 0; n < e.length; n += 2) t.push(parseInt(e.substr(n, 2), 16));
                    return t;
                },
                bytesToBase64: function(e) {
                    for (var n = [], r = 0; r < e.length; r += 3) for (var i = e[r] << 16 | e[r + 1] << 8 | e[r + 2], o = 0; o < 4; o++) 8 * r + 6 * o <= 8 * e.length ? n.push(t.charAt(i >>> 6 * (3 - o) & 63)) : n.push("=");
                    return n.join("");
                },
                base64ToBytes: function(e) {
                    e = e.replace(/[^A-Z0-9+\/]/gi, "");
                    for (var n = [], r = 0, i = 0; r < e.length; i = ++r % 4) 0 != i && n.push((t.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * i + 8) - 1) << 2 * i | t.indexOf(e.charAt(r)) >>> 6 - 2 * i);
                    return n;
                }
            };
            e.exports = n;
        }();
    }, function(e, t) {
        function n(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e);
        }
        function r(e) {
            return "function" == typeof e.readFloatLE && "function" == typeof e.slice && n(e.slice(0, 0));
        }
        e.exports = function(e) {
            return null != e && (n(e) || r(e) || !!e._isBuffer);
        };
    }, function(e, t, n) {
        e.exports = function(e, t) {
            var n;
            e.indexOf("base64") < 0 ? n = atob(e) : e.split(",")[0].indexOf("base64") >= 0 ? (t = t || e.split(",")[0].split(":")[1].split(";")[0], 
            n = atob(e.split(",")[1])) : n = unescape(e.split(",")[1]);
            for (var r = new Uint8Array(n.length), i = 0; i < n.length; i++) r[i] = n.charCodeAt(i);
            return new Blob([ r ], {
                type: t
            });
        };
    }, function(e, t, n) {
        function r(e, t) {
            return e && e[t] ? o.isFunction(e[t]) ? e[t]() : e[t] : null;
        }
        var i = function() {
            function e(e, t) {
                var n = [], r = !0, i = !1, o = void 0;
                try {
                    for (var s, a = e[Symbol.iterator](); !(r = (s = a.next()).done) && (n.push(s.value), 
                    !t || n.length !== t); r = !0) ;
                } catch (e) {
                    i = !0, o = e;
                } finally {
                    try {
                        !r && a.return && a.return();
                    } finally {
                        if (i) throw o;
                    }
                }
                return n;
            }
            return function(t, n) {
                if (Array.isArray(t)) return t;
                if (Symbol.iterator in Object(t)) return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), o = n(0), s = n(4), a = n(1), u = n(2)._request, c = n(3), l = c.isNullOrUndefined, h = c.ensureArray, f = c.transformFetchOptions, d = c.setValue, p = c.findValue, _ = c.isPlainObject, v = function e(t) {
            return o.isArray(t) ? t.map(e) : _(t) ? o.mapObject(t, e) : o.isObject(t) && t._toPointer ? t._toPointer() : t;
        }, y = [ "objectId", "createdAt", "updatedAt" ], m = function(e) {
            if (-1 !== y.indexOf(e)) throw new Error("key[" + e + "] is reserved");
        }, g = function(e) {
            var t = o.find(e, function(e) {
                return e instanceof Error;
            });
            if (!t) return e;
            var n = new s(t.code, t.message);
            throw n.results = e, n;
        };
        e.exports = function(e) {
            e.Object = function(t, n) {
                if (o.isString(t)) return e.Object._create.apply(this, arguments);
                t = t || {}, n && n.parse && (t = this.parse(t), t = this._mergeMagicFields(t));
                var i = r(this, "defaults");
                i && (t = o.extend({}, i, t)), n && n.collection && (this.collection = n.collection), 
                this._serverData = {}, this._opSetQueue = [ {} ], this._flags = {}, this.attributes = {}, 
                this._hashedJSON = {}, this._escapedAttributes = {}, this.cid = o.uniqueId("c"), 
                this.changed = {}, this._silent = {}, this._pending = {}, this.set(t, {
                    silent: !0
                }), this.changed = {}, this._silent = {}, this._pending = {}, this._hasData = !0, 
                this._previousAttributes = o.clone(this.attributes), this.initialize.apply(this, arguments);
            }, e.Object.saveAll = function(t, n) {
                return e.Object._deepSaveAsync(t, null, n);
            }, e.Object.fetchAll = function(e, t) {
                return a.resolve().then(function() {
                    return u("batch", null, null, "POST", {
                        requests: o.map(e, function(e) {
                            if (!e.className) throw new Error("object must have className to fetch");
                            if (!e.id) throw new Error("object must have id to fetch");
                            if (e.dirty()) throw new Error("object is modified but not saved");
                            return {
                                method: "GET",
                                path: "/1.1/classes/" + e.className + "/" + e.id
                            };
                        })
                    }, t);
                }).then(function(t) {
                    var n = o.map(e, function(e, n) {
                        if (t[n].success) {
                            var r = e.parse(t[n].success);
                            return e._cleanupUnsetKeys(r), e._finishFetch(r), e;
                        }
                        return null === t[n].success ? new s(s.OBJECT_NOT_FOUND, "Object not found.") : new s(t[n].error.code, t[n].error.error);
                    });
                    return g(n);
                });
            }, o.extend(e.Object.prototype, e.Events, {
                _fetchWhenSave: !1,
                initialize: function() {},
                fetchWhenSave: function(e) {
                    if (console.warn("AV.Object#fetchWhenSave is deprecated, use AV.Object#save with options.fetchWhenSave instead."), 
                    !o.isBoolean(e)) throw new Error("Expect boolean value for fetchWhenSave");
                    this._fetchWhenSave = e;
                },
                getObjectId: function() {
                    return this.id;
                },
                getCreatedAt: function() {
                    return this.createdAt || this.get("createdAt");
                },
                getUpdatedAt: function() {
                    return this.updatedAt || this.get("updatedAt");
                },
                toJSON: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return this._toFullJSON(n, !1);
                },
                toFullJSON: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return this._toFullJSON(e);
                },
                _toFullJSON: function(t) {
                    var n = this, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = o.clone(this.attributes);
                    if (o.isArray(t)) var s = t.concat(this);
                    return e._objectEach(i, function(t, n) {
                        i[n] = e._encode(t, s, void 0, r);
                    }), e._objectEach(this._operations, function(e, t) {
                        i[t] = e;
                    }), o.has(this, "id") && (i.objectId = this.id), o([ "createdAt", "updatedAt" ]).each(function(e) {
                        if (o.has(n, e)) {
                            var t = n[e];
                            i[e] = o.isDate(t) ? t.toJSON() : t;
                        }
                    }), r && (i.__type = "Object", o.isArray(t) && t.length && (i.__type = "Pointer"), 
                    i.className = this.className), i;
                },
                _refreshCache: function() {
                    var t = this;
                    t._refreshingCache || (t._refreshingCache = !0, e._objectEach(this.attributes, function(n, r) {
                        n instanceof e.Object ? n._refreshCache() : o.isObject(n) && t._resetCacheForKey(r) && t.set(r, new e.Op.Set(n), {
                            silent: !0
                        });
                    }), delete t._refreshingCache);
                },
                dirty: function(e) {
                    this._refreshCache();
                    var t = o.last(this._opSetQueue);
                    return e ? !!t[e] : !this.id || o.keys(t).length > 0;
                },
                _toPointer: function() {
                    return {
                        __type: "Pointer",
                        className: this.className,
                        objectId: this.id
                    };
                },
                get: function(e) {
                    switch (e) {
                      case "objectId":
                        return this.id;

                      case "createdAt":
                      case "updatedAt":
                        return this[e];

                      default:
                        return this.attributes[e];
                    }
                },
                relation: function(t) {
                    var n = this.get(t);
                    if (n) {
                        if (!(n instanceof e.Relation)) throw new Error("Called relation() on non-relation field " + t);
                        return n._ensureParentAndKey(this, t), n;
                    }
                    return new e.Relation(this, t);
                },
                escape: function(e) {
                    var t = this._escapedAttributes[e];
                    if (t) return t;
                    var n, r = this.attributes[e];
                    return n = l(r) ? "" : o.escape(r.toString()), this._escapedAttributes[e] = n, n;
                },
                has: function(e) {
                    return !l(this.attributes[e]);
                },
                _mergeMagicFields: function(t) {
                    var n = this, r = [ "objectId", "createdAt", "updatedAt" ];
                    return e._arrayEach(r, function(r) {
                        t[r] && ("objectId" === r ? n.id = t[r] : "createdAt" !== r && "updatedAt" !== r || o.isDate(t[r]) ? n[r] = t[r] : n[r] = e._parseDate(t[r]), 
                        delete t[r]);
                    }), t;
                },
                _startSave: function() {
                    this._opSetQueue.push({});
                },
                _cancelSave: function() {
                    var t = o.first(this._opSetQueue);
                    this._opSetQueue = o.rest(this._opSetQueue);
                    var n = o.first(this._opSetQueue);
                    e._objectEach(t, function(e, r) {
                        var i = t[r], o = n[r];
                        i && o ? n[r] = o._mergeWithPrevious(i) : i && (n[r] = i);
                    }), this._saving = this._saving - 1;
                },
                _finishSave: function(t) {
                    var n = {};
                    e._traverse(this.attributes, function(t) {
                        t instanceof e.Object && t.id && t._hasData && (n[t.id] = t);
                    });
                    var r = o.first(this._opSetQueue);
                    this._opSetQueue = o.rest(this._opSetQueue), this._applyOpSet(r, this._serverData), 
                    this._mergeMagicFields(t);
                    var i = this;
                    e._objectEach(t, function(t, r) {
                        i._serverData[r] = e._decode(t, r);
                        var o = e._traverse(i._serverData[r], function(t) {
                            if (t instanceof e.Object && n[t.id]) return n[t.id];
                        });
                        o && (i._serverData[r] = o);
                    }), this._rebuildAllEstimatedData();
                    var s = this._opSetQueue.map(o.clone);
                    this._refreshCache(), this._opSetQueue = s, this._saving = this._saving - 1;
                },
                _finishFetch: function(t, n) {
                    this._opSetQueue = [ {} ], this._mergeMagicFields(t);
                    var r = this;
                    e._objectEach(t, function(t, n) {
                        r._serverData[n] = e._decode(t, n);
                    }), this._rebuildAllEstimatedData(), this._refreshCache(), this._opSetQueue = [ {} ], 
                    this._hasData = n;
                },
                _applyOpSet: function(t, n) {
                    var r = this;
                    e._objectEach(t, function(t, o) {
                        var s = p(n, o), a = i(s, 3), u = a[0], c = a[1], l = a[2];
                        d(n, o, t._estimate(u, r, o)), c && c[l] === e.Op._UNSET && delete c[l];
                    });
                },
                _resetCacheForKey: function(t) {
                    var n = this.attributes[t];
                    if (o.isObject(n) && !(n instanceof e.Object) && !(n instanceof e.File)) {
                        var r = JSON.stringify(v(n));
                        if (this._hashedJSON[t] !== r) {
                            var i = !!this._hashedJSON[t];
                            return this._hashedJSON[t] = r, i;
                        }
                    }
                    return !1;
                },
                _rebuildEstimatedDataForKey: function(t) {
                    var n = this;
                    delete this.attributes[t], this._serverData[t] && (this.attributes[t] = this._serverData[t]), 
                    e._arrayEach(this._opSetQueue, function(r) {
                        var o = r[t];
                        if (o) {
                            var s = p(n.attributes, t), a = i(s, 4), u = a[0], c = a[1], l = a[2], h = a[3];
                            d(n.attributes, t, o._estimate(u, n, t)), c && c[l] === e.Op._UNSET && delete c[l], 
                            n._resetCacheForKey(h);
                        }
                    });
                },
                _rebuildAllEstimatedData: function() {
                    var t = this, n = o.clone(this.attributes);
                    this.attributes = o.clone(this._serverData), e._arrayEach(this._opSetQueue, function(n) {
                        t._applyOpSet(n, t.attributes), e._objectEach(n, function(e, n) {
                            t._resetCacheForKey(n);
                        });
                    }), e._objectEach(n, function(e, n) {
                        t.attributes[n] !== e && t.trigger("change:" + n, t, t.attributes[n], {});
                    }), e._objectEach(this.attributes, function(e, r) {
                        o.has(n, r) || t.trigger("change:" + r, t, e, {});
                    });
                },
                set: function(t, n, r) {
                    var i;
                    if (o.isObject(t) || l(t) ? (i = o.mapObject(t, function(t, n) {
                        return m(n), e._decode(t, n);
                    }), r = n) : (i = {}, m(t), i[t] = e._decode(n, t)), r = r || {}, !i) return this;
                    i instanceof e.Object && (i = i.attributes), r.unset && e._objectEach(i, function(t, n) {
                        i[n] = new e.Op.Unset();
                    });
                    var s = o.clone(i), a = this;
                    e._objectEach(s, function(t, n) {
                        t instanceof e.Op && (s[n] = t._estimate(a.attributes[n], a, n), s[n] === e.Op._UNSET && delete s[n]);
                    }), this._validate(i, r), r.changes = {};
                    var u = this._escapedAttributes;
                    return e._arrayEach(o.keys(i), function(t) {
                        var n = i[t];
                        n instanceof e.Relation && (n.parent = a), n instanceof e.Op || (n = new e.Op.Set(n));
                        var s = !0;
                        n instanceof e.Op.Set && o.isEqual(a.attributes[t], n.value) && (s = !1), s && (delete u[t], 
                        r.silent ? a._silent[t] = !0 : r.changes[t] = !0);
                        var c = o.last(a._opSetQueue);
                        c[t] = n._mergeWithPrevious(c[t]), a._rebuildEstimatedDataForKey(t), s ? (a.changed[t] = a.attributes[t], 
                        r.silent || (a._pending[t] = !0)) : (delete a.changed[t], delete a._pending[t]);
                    }), r.silent || this.change(r), this;
                },
                unset: function(e, t) {
                    return t = t || {}, t.unset = !0, this.set(e, null, t);
                },
                increment: function(t, n) {
                    return (o.isUndefined(n) || o.isNull(n)) && (n = 1), this.set(t, new e.Op.Increment(n));
                },
                add: function(t, n) {
                    return this.set(t, new e.Op.Add(h(n)));
                },
                addUnique: function(t, n) {
                    return this.set(t, new e.Op.AddUnique(h(n)));
                },
                remove: function(t, n) {
                    return this.set(t, new e.Op.Remove(h(n)));
                },
                bitAnd: function(t, n) {
                    return this.set(t, new e.Op.BitAnd(n));
                },
                bitOr: function(t, n) {
                    return this.set(t, new e.Op.BitOr(n));
                },
                bitXor: function(t, n) {
                    return this.set(t, new e.Op.BitXor(n));
                },
                op: function(e) {
                    return o.last(this._opSetQueue)[e];
                },
                clear: function(e) {
                    (e = e || {}).unset = !0;
                    var t = o.extend(this.attributes, this._operations);
                    return this.set(t, e);
                },
                _getSaveJSON: function() {
                    var t = o.clone(o.first(this._opSetQueue));
                    return e._objectEach(t, function(e, n) {
                        t[n] = e.toJSON();
                    }), t;
                },
                _canBeSerialized: function() {
                    return e.Object._canBeSerializedAsValue(this.attributes);
                },
                fetch: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1], n = this;
                    return u("classes", this.className, this.id, "GET", f(e), t).then(function(t) {
                        var r = n.parse(t);
                        return e.keys || n._cleanupUnsetKeys(r), n._finishFetch(r, !0), n;
                    });
                },
                _cleanupUnsetKeys: function(t) {
                    var n = this;
                    e._objectEach(this._serverData, function(e, r) {
                        void 0 === t[r] && delete n._serverData[r];
                    });
                },
                save: function(t, n, r) {
                    var i, s, c;
                    o.isObject(t) || l(t) ? (i = t, c = n) : (i = {}, i[t] = n, c = r), (c = o.clone(c) || {}).wait && (s = o.clone(this.attributes));
                    var h = o.clone(c) || {};
                    h.wait && (h.silent = !0), i && this.set(i, h);
                    var f = this, d = [], p = [];
                    return e.Object._findUnsavedChildren(f, d, p), d.length + p.length > 1 ? e.Object._deepSaveAsync(this, f, c) : (this._startSave(), 
                    this._saving = (this._saving || 0) + 1, this._allPreviousSaves = this._allPreviousSaves || a.resolve(), 
                    this._allPreviousSaves = this._allPreviousSaves.catch(function(e) {}).then(function() {
                        var e = f.id ? "PUT" : "POST", t = f._getSaveJSON(), n = {};
                        if ((f._fetchWhenSave || c.fetchWhenSave) && (n.new = "true"), c._failOnNotExist && (n.failOnNotExist = "true"), 
                        c.query) {
                            var r;
                            if ("function" == typeof c.query.toJSON && (r = c.query.toJSON()) && (n.where = r.where), 
                            !n.where) throw new Error("options.query is not an AV.Query");
                        }
                        o.extend(t, f._flags);
                        var a = "classes", l = f.className;
                        "_User" !== f.className || f.id || (a = "users", l = null);
                        var d = (c._makeRequest || u)(a, l, f.id, e, t, c, n);
                        return d = d.then(function(e) {
                            var t = f.parse(e);
                            return c.wait && (t = o.extend(i || {}, t)), f._finishSave(t), c.wait && f.set(s, h), 
                            f;
                        }, function(e) {
                            throw f._cancelSave(), e;
                        });
                    }), this._allPreviousSaves);
                },
                destroy: function(e) {
                    e = e || {};
                    var t = this, n = function() {
                        t.trigger("destroy", t, t.collection, e);
                    };
                    return this.id ? (e.wait || n(), u("classes", this.className, this.id, "DELETE", this._flags, e).then(function() {
                        return e.wait && n(), t;
                    })) : n();
                },
                parse: function(t) {
                    var n = o.clone(t);
                    return o([ "createdAt", "updatedAt" ]).each(function(t) {
                        n[t] && (n[t] = e._parseDate(n[t]));
                    }), n.createdAt && !n.updatedAt && (n.updatedAt = n.createdAt), n;
                },
                clone: function() {
                    return new this.constructor(this.attributes);
                },
                isNew: function() {
                    return !this.id;
                },
                change: function(t) {
                    t = t || {};
                    var n = this._changing;
                    this._changing = !0;
                    var r = this;
                    e._objectEach(this._silent, function(e) {
                        r._pending[e] = !0;
                    });
                    var i = o.extend({}, t.changes, this._silent);
                    if (this._silent = {}, e._objectEach(i, function(e, n) {
                        r.trigger("change:" + n, r, r.get(n), t);
                    }), n) return this;
                    for (;!o.isEmpty(this._pending); ) this._pending = {}, this.trigger("change", this, t), 
                    e._objectEach(this.changed, function(e, t) {
                        r._pending[t] || r._silent[t] || delete r.changed[t];
                    }), r._previousAttributes = o.clone(this.attributes);
                    return this._changing = !1, this;
                },
                hasChanged: function(e) {
                    return arguments.length ? this.changed && o.has(this.changed, e) : !o.isEmpty(this.changed);
                },
                changedAttributes: function(t) {
                    if (!t) return !!this.hasChanged() && o.clone(this.changed);
                    var n = {}, r = this._previousAttributes;
                    return e._objectEach(t, function(e, t) {
                        o.isEqual(r[t], e) || (n[t] = e);
                    }), n;
                },
                previous: function(e) {
                    return arguments.length && this._previousAttributes ? this._previousAttributes[e] : null;
                },
                previousAttributes: function() {
                    return o.clone(this._previousAttributes);
                },
                isValid: function() {
                    try {
                        this.validate(this.attributes);
                    } catch (e) {
                        return !1;
                    }
                    return !0;
                },
                validate: function(t) {
                    if (o.has(t, "ACL") && !(t.ACL instanceof e.ACL)) throw new s(s.OTHER_CAUSE, "ACL must be a AV.ACL.");
                },
                _validate: function(e, t) {
                    !t.silent && this.validate && (e = o.extend({}, this.attributes, e), this.validate(e));
                },
                getACL: function() {
                    return this.get("ACL");
                },
                setACL: function(e, t) {
                    return this.set("ACL", e, t);
                },
                disableBeforeHook: function() {
                    this.ignoreHook("beforeSave"), this.ignoreHook("beforeUpdate"), this.ignoreHook("beforeDelete");
                },
                disableAfterHook: function() {
                    this.ignoreHook("afterSave"), this.ignoreHook("afterUpdate"), this.ignoreHook("afterDelete");
                },
                ignoreHook: function(t) {
                    o.contains([ "beforeSave", "afterSave", "beforeUpdate", "afterUpdate", "beforeDelete", "afterDelete" ], t) || console.trace("Unsupported hookName: " + t), 
                    e.hookKey || console.trace("ignoreHook required hookKey"), this._flags.__ignore_hooks || (this._flags.__ignore_hooks = []), 
                    this._flags.__ignore_hooks.push(t);
                }
            }), e.Object.createWithoutData = function(t, n, r) {
                var i = new e.Object(t);
                return i.id = n, i._hasData = r, i;
            }, e.Object.destroyAll = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!e || 0 === e.length) return a.resolve();
                var n = o.groupBy(e, function(e) {
                    return JSON.stringify({
                        className: e.className,
                        flags: e._flags
                    });
                }), r = {
                    requests: o.map(n, function(e) {
                        var t = o.map(e, "id").join(",");
                        return {
                            method: "DELETE",
                            path: "/1.1/classes/" + e[0].className + "/" + t,
                            body: e[0]._flags
                        };
                    })
                };
                return u("batch", null, null, "POST", r, t).then(function(e) {
                    var t = o.find(e, function(e) {
                        return !e.success;
                    });
                    if (t) throw new s(t.error.code, t.error.error);
                });
            }, e.Object._getSubclass = function(t) {
                if (!o.isString(t)) throw new Error("AV.Object._getSubclass requires a string argument.");
                var n = e.Object._classMap[t];
                return n || (n = e.Object.extend(t), e.Object._classMap[t] = n), n;
            }, e.Object._create = function(t, n, r) {
                return new (e.Object._getSubclass(t))(n, r);
            }, e.Object._classMap = {}, e.Object._extend = e._extend, e.Object.new = function(t, n) {
                return new e.Object(t, n);
            }, e.Object.extend = function(t, n, r) {
                if (!o.isString(t)) {
                    if (t && o.has(t, "className")) return e.Object.extend(t.className, t, n);
                    throw new Error("AV.Object.extend's first argument should be the className.");
                }
                "User" === t && (t = "_User");
                var i = null;
                if (o.has(e.Object._classMap, t)) {
                    var s = e.Object._classMap[t];
                    if (!n && !r) return s;
                    i = s._extend(n, r);
                } else n = n || {}, n._className = t, i = this._extend(n, r);
                return i.extend = function(n) {
                    if (o.isString(n) || n && o.has(n, "className")) return e.Object.extend.apply(i, arguments);
                    var r = [ t ].concat(o.toArray(arguments));
                    return e.Object.extend.apply(i, r);
                }, Object.defineProperty(i, "query", Object.getOwnPropertyDescriptor(e.Object, "query")), 
                i.new = function(e, t) {
                    return new i(e, t);
                }, e.Object._classMap[t] = i, i;
            }, Object.defineProperty(e.Object.prototype, "className", {
                get: function() {
                    var e = this._className || this.constructor._LCClassName || this.constructor.name;
                    return "User" === e ? "_User" : e;
                }
            }), e.Object.register = function(t, n) {
                if (!(t.prototype instanceof e.Object)) throw new Error("registered class is not a subclass of AV.Object");
                var r = n || t.name;
                if (!r.length) throw new Error("registered class must be named");
                n && (t._LCClassName = n), e.Object._classMap[r] = t;
            }, Object.defineProperty(e.Object, "query", {
                get: function() {
                    return new e.Query(this.prototype.className);
                }
            }), e.Object._findUnsavedChildren = function(t, n, r) {
                e._traverse(t, function(t) {
                    return t instanceof e.Object ? void (t.dirty() && n.push(t)) : t instanceof e.File ? void (t.id || r.push(t)) : void 0;
                });
            }, e.Object._canBeSerializedAsValue = function(t) {
                var n = !0;
                return t instanceof e.Object || t instanceof e.File ? n = !!t.id : o.isArray(t) ? e._arrayEach(t, function(t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1);
                }) : o.isObject(t) && e._objectEach(t, function(t) {
                    e.Object._canBeSerializedAsValue(t) || (n = !1);
                }), n;
            }, e.Object._deepSaveAsync = function(t, n, r) {
                var i = [], c = [];
                e.Object._findUnsavedChildren(t, i, c);
                var l = a.resolve();
                o.each(c, function(e) {
                    l = l.then(function() {
                        return e.save();
                    });
                });
                var h = o.uniq(i), f = o.uniq(h);
                return l.then(function() {
                    return a._continueWhile(function() {
                        return f.length > 0;
                    }, function() {
                        var t = [], n = [];
                        if (e._arrayEach(f, function(e) {
                            t.length > 20 ? n.push(e) : e._canBeSerialized() ? t.push(e) : n.push(e);
                        }), f = n, 0 === t.length) return a.reject(new s(s.OTHER_CAUSE, "Tried to save a batch with a cycle."));
                        var i = a.resolve(o.map(t, function(e) {
                            return e._allPreviousSaves || a.resolve();
                        })).then(function() {
                            return u("batch", null, null, "POST", {
                                requests: o.map(t, function(e) {
                                    var t = e.id ? "PUT" : "POST", n = e._getSaveJSON();
                                    o.extend(n, e._flags);
                                    r = "/classes/" + e.className;
                                    "_User" !== e.className || e.id || (r = "/users");
                                    var r = "/1.1" + r;
                                    return e.id && (r = r + "/" + e.id), e._startSave(), {
                                        method: t,
                                        path: r,
                                        body: n
                                    };
                                })
                            }, r).then(function(e) {
                                var n = o.map(t, function(t, n) {
                                    return e[n].success ? (t._finishSave(t.parse(e[n].success)), t) : (t._cancelSave(), 
                                    new s(e[n].error.code, e[n].error.error));
                                });
                                return g(n);
                            });
                        });
                        return e._arrayEach(t, function(e) {
                            e._allPreviousSaves = i;
                        }), i;
                    });
                }).then(function() {
                    return t;
                });
            };
        };
    }, function(e, t, n) {
        var r = n(0), i = n(4);
        e.exports = function(e) {
            e.Role = e.Object.extend("_Role", {
                constructor: function(t, n) {
                    if (r.isString(t) ? (e.Object.prototype.constructor.call(this, null, null), this.setName(t)) : e.Object.prototype.constructor.call(this, t, n), 
                    n) {
                        if (!(n instanceof e.ACL)) throw new TypeError("acl must be an instance of AV.ACL");
                        this.setACL(n);
                    }
                },
                getName: function() {
                    return this.get("name");
                },
                setName: function(e, t) {
                    return this.set("name", e, t);
                },
                getUsers: function() {
                    return this.relation("users");
                },
                getRoles: function() {
                    return this.relation("roles");
                },
                validate: function(t, n) {
                    if ("name" in t && t.name !== this.getName()) {
                        var o = t.name;
                        if (this.id && this.id !== t.objectId) return new i(i.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
                        if (!r.isString(o)) return new i(i.OTHER_CAUSE, "A role's name must be a String.");
                        if (!/^[0-9a-zA-Z\-_ ]+$/.test(o)) return new i(i.OTHER_CAUSE, "A role's name can only contain alphanumeric characters, _, -, and spaces.");
                    }
                    return !!e.Object.prototype.validate && e.Object.prototype.validate.call(this, t, n);
                }
            });
        };
    }, function(e, t, n) {
        function r(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e;
        }
        var i = n(0), o = n(17), s = n(4), a = n(2), u = a._request, c = a.request, l = n(1), h = function() {
            if ("undefined" == typeof wx || "function" != typeof wx.login) throw new Error("Weapp Login is only available in Weapp");
            return new l(function(e, t) {
                wx.login({
                    success: function(n) {
                        var r = n.code, i = n.errMsg;
                        r ? e(r) : t(new Error(i));
                    },
                    fail: function() {
                        return t(new Error("wx.login 失败"));
                    }
                });
            });
        }, f = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = n.unionIdPlatform, o = void 0 === r ? "weixin" : r, a = n.asMainAccount, u = void 0 !== a && a;
            if ("string" != typeof t) throw new s(s.OTHER_CAUSE, "unionId is not a string");
            if ("string" != typeof o) throw new s(s.OTHER_CAUSE, "unionIdPlatform is not a string");
            return i.extend({}, e, {
                platform: o,
                unionid: t,
                main_account: Boolean(u)
            });
        };
        e.exports = function(e) {
            e.User = e.Object.extend("_User", {
                _isCurrentUser: !1,
                _mergeMagicFields: function(t) {
                    return t.sessionToken && (this._sessionToken = t.sessionToken, delete t.sessionToken), 
                    e.User.__super__._mergeMagicFields.call(this, t);
                },
                _cleanupAuthData: function() {
                    if (this.isCurrent()) {
                        var t = this.get("authData");
                        t && e._objectEach(this.get("authData"), function(e, n) {
                            t[n] || delete t[n];
                        });
                    }
                },
                _synchronizeAllAuthData: function() {
                    if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), function(e, n) {
                            t._synchronizeAuthData(n);
                        });
                    }
                },
                _synchronizeAuthData: function(t) {
                    if (this.isCurrent()) {
                        var n;
                        i.isString(t) ? (n = t, t = e.User._authProviders[n]) : n = t.getAuthType();
                        var r = this.get("authData");
                        r && t && (t.restoreAuthentication(r[n]) || this.dissociateAuthData(t));
                    }
                },
                _handleSaveResult: function(t) {
                    return t && !e._config.disableCurrentUser && (this._isCurrentUser = !0), this._cleanupAuthData(), 
                    this._synchronizeAllAuthData(), delete this._serverData.password, this._rebuildEstimatedDataForKey("password"), 
                    this._refreshCache(), !t && !this.isCurrent() || e._config.disableCurrentUser ? l.resolve() : l.resolve(e.User._saveCurrentUser(this));
                },
                _linkWith: function(t, n) {
                    var o, s = this, a = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).failOnNotExist, u = void 0 !== a && a;
                    return i.isString(t) ? (o = t, t = e.User._authProviders[t]) : o = t.getAuthType(), 
                    n ? this.save({
                        authData: r({}, o, n)
                    }, {
                        fetchWhenSave: !!this.get("authData"),
                        _failOnNotExist: u
                    }).then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    }) : t.authenticate().then(function(e) {
                        return s._linkWith(t, e);
                    });
                },
                associateWithAuthData: function(e, t) {
                    return this._linkWith(t, e);
                },
                associateWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this._linkWith(t, f(e, n, r));
                },
                linkWithWeapp: function() {
                    var e = this;
                    return h().then(function(t) {
                        return e._linkWith("lc_weapp", {
                            code: t
                        });
                    });
                },
                dissociateAuthData: function(e) {
                    return this.unset("authData." + e), this.save().then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                _unlinkFrom: function(e) {
                    return console.warn("DEPRECATED: User#_unlinkFrom 已废弃，请使用 User#dissociateAuthData 代替"), 
                    this.dissociateAuthData(e);
                },
                _isLinked: function(e) {
                    var t;
                    return t = i.isString(e) ? e : e.getAuthType(), !!(this.get("authData") || {})[t];
                },
                isAnonymous: function() {
                    return this._isLinked("anonymous");
                },
                logOut: function() {
                    this._logOutWithAll(), this._isCurrentUser = !1;
                },
                _logOutWithAll: function() {
                    if (this.get("authData")) {
                        var t = this;
                        e._objectEach(this.get("authData"), function(e, n) {
                            t._logOutWith(n);
                        });
                    }
                },
                _logOutWith: function(t) {
                    this.isCurrent() && (i.isString(t) && (t = e.User._authProviders[t]), t && t.deauthenticate && t.deauthenticate());
                },
                signUp: function(e, t) {
                    var n = e && e.username || this.get("username");
                    if (!n || "" === n) throw new s(s.OTHER_CAUSE, "Cannot sign up user with an empty name.");
                    var r = e && e.password || this.get("password");
                    if (!r || "" === r) throw new s(s.OTHER_CAUSE, "Cannot sign up user with an empty password.");
                    return this.save(e, t).then(function(e) {
                        return e.isAnonymous() && (e.unset("authData.anonymous"), e._opSetQueue = [ {} ]), 
                        e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                signUpOrlogInWithMobilePhone: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = e && e.mobilePhoneNumber || this.get("mobilePhoneNumber");
                    if (!n || "" === n) throw new s(s.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber with an empty mobilePhoneNumber.");
                    var r = e && e.smsCode || this.get("smsCode");
                    if (!r || "" === r) throw new s(s.OTHER_CAUSE, "Cannot sign up or login user by mobilePhoneNumber  with an empty smsCode.");
                    return t._makeRequest = function(e, t, n, r, i) {
                        return u("usersByMobilePhone", null, null, "POST", i);
                    }, this.save(e, t).then(function(e) {
                        return delete e.attributes.smsCode, delete e._serverData.smsCode, e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                loginWithAuthData: function(e, t, n) {
                    return this._linkWith(t, e, n);
                },
                loginWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this.loginWithAuthData(f(e, n, r), t, r);
                },
                loginWithWeapp: function(e) {
                    var t = this;
                    return h().then(function(n) {
                        return t.loginWithAuthData({
                            code: n
                        }, "lc_weapp", e);
                    });
                },
                logIn: function() {
                    var e = this;
                    return u("login", null, null, "POST", this.toJSON()).then(function(t) {
                        var n = e.parse(t);
                        return e._finishFetch(n), e._handleSaveResult(!0).then(function() {
                            return n.smsCode || delete e.attributes.smsCode, e;
                        });
                    });
                },
                save: function(t, n, r) {
                    var o, s;
                    return i.isObject(t) || i.isNull(t) || i.isUndefined(t) ? (o = t, s = n) : (o = {}, 
                    o[t] = n, s = r), s = s || {}, e.Object.prototype.save.call(this, o, s).then(function(e) {
                        return e._handleSaveResult(!1).then(function() {
                            return e;
                        });
                    });
                },
                follow: function(t, n) {
                    if (!this.id) throw new Error("Please signin.");
                    var r = void 0, o = void 0;
                    t.user ? (r = t.user, o = t.attributes) : r = t;
                    var s = i.isString(r) ? r : r.id;
                    if (!s) throw new Error("Invalid target user.");
                    var a = "users/" + this.id + "/friendship/" + s;
                    return u(a, null, null, "POST", e._encode(o), n);
                },
                unfollow: function(e, t) {
                    if (!this.id) throw new Error("Please signin.");
                    var n = void 0;
                    n = e.user ? e.user : e;
                    var r = i.isString(n) ? n : n.id;
                    if (!r) throw new Error("Invalid target user.");
                    var o = "users/" + this.id + "/friendship/" + r;
                    return u(o, null, null, "DELETE", null, t);
                },
                followerQuery: function() {
                    return e.User.followerQuery(this.id);
                },
                followeeQuery: function() {
                    return e.User.followeeQuery(this.id);
                },
                fetch: function(t, n) {
                    return e.Object.prototype.fetch.call(this, t, n).then(function(e) {
                        return e._handleSaveResult(!1).then(function() {
                            return e;
                        });
                    });
                },
                updatePassword: function(e, t, n) {
                    var r = "users/" + this.id + "/updatePassword";
                    return u(r, null, null, "PUT", {
                        old_password: e,
                        new_password: t
                    }, n);
                },
                isCurrent: function() {
                    return this._isCurrentUser;
                },
                getUsername: function() {
                    return this.get("username");
                },
                getMobilePhoneNumber: function() {
                    return this.get("mobilePhoneNumber");
                },
                setMobilePhoneNumber: function(e, t) {
                    return this.set("mobilePhoneNumber", e, t);
                },
                setUsername: function(e, t) {
                    return this.set("username", e, t);
                },
                setPassword: function(e, t) {
                    return this.set("password", e, t);
                },
                getEmail: function() {
                    return this.get("email");
                },
                setEmail: function(e, t) {
                    return this.set("email", e, t);
                },
                authenticated: function() {
                    return console.warn("DEPRECATED: 如果要判断当前用户的登录状态是否有效，请使用 currentUser.isAuthenticated().then()，如果要判断该用户是否是当前登录用户，请使用 user.id === currentUser.id。"), 
                    !!this._sessionToken && !e._config.disableCurrentUser && e.User.current() && e.User.current().id === this.id;
                },
                isAuthenticated: function() {
                    var t = this;
                    return l.resolve().then(function() {
                        return !!t._sessionToken && e.User._fetchUserBySessionToken(t._sessionToken).then(function() {
                            return !0;
                        }, function(e) {
                            if (211 === e.code) return !1;
                            throw e;
                        });
                    });
                },
                getSessionToken: function() {
                    return this._sessionToken;
                },
                refreshSessionToken: function(e) {
                    var t = this;
                    return u("users/" + this.id + "/refreshSessionToken", null, null, "PUT", null, e).then(function(e) {
                        return t._finishFetch(e), t._handleSaveResult(!0).then(function() {
                            return t;
                        });
                    });
                },
                getRoles: function(t) {
                    return e.Relation.reverseQuery("_Role", "users", this).find(t);
                }
            }, {
                _currentUser: null,
                _currentUserMatchesDisk: !1,
                _CURRENT_USER_KEY: "currentUser",
                _authProviders: {},
                signUp: function(t, n, r, i) {
                    return r = r || {}, r.username = t, r.password = n, e.Object._create("_User").signUp(r, i);
                },
                logIn: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        username: t,
                        password: n
                    }), r.logIn();
                },
                become: function(e) {
                    return this._fetchUserBySessionToken(e).then(function(e) {
                        return e._handleSaveResult(!0).then(function() {
                            return e;
                        });
                    });
                },
                _fetchUserBySessionToken: function(t) {
                    var n = e.Object._create("_User");
                    return c({
                        method: "GET",
                        path: "/users/me",
                        authOptions: {
                            sessionToken: t
                        }
                    }).then(function(e) {
                        var t = n.parse(e);
                        return n._finishFetch(t), n;
                    });
                },
                logInWithMobilePhoneSmsCode: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        mobilePhoneNumber: t,
                        smsCode: n
                    }), r.logIn();
                },
                signUpOrlogInWithMobilePhone: function(t, n, r, i) {
                    return r = r || {}, r.mobilePhoneNumber = t, r.smsCode = n, e.Object._create("_User").signUpOrlogInWithMobilePhone(r, i);
                },
                logInWithMobilePhone: function(t, n) {
                    var r = e.Object._create("_User");
                    return r._finishFetch({
                        mobilePhoneNumber: t,
                        password: n
                    }), r.logIn();
                },
                loginWithAuthData: function(t, n, r) {
                    return e.User._logInWith(n, t, r);
                },
                signUpOrlogInWithAuthData: function() {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthData 已废弃，请使用 User#loginWithAuthData 代替"), 
                    this.loginWithAuthData.apply(this, arguments);
                },
                loginWithAuthDataAndUnionId: function(e, t, n, r) {
                    return this.loginWithAuthData(f(e, n, r), t, r);
                },
                signUpOrlogInWithAuthDataAndUnionId: function() {
                    return console.warn("DEPRECATED: User.signUpOrlogInWithAuthDataAndUnionId 已废弃，请使用 User#loginWithAuthDataAndUnionId 代替"), 
                    this.loginWithAuthDataAndUnionId.apply(this, arguments);
                },
                loginWithWeapp: function(e) {
                    var t = this;
                    return h().then(function(n) {
                        return t.loginWithAuthData({
                            code: n
                        }, "lc_weapp", e);
                    });
                },
                loginAnonymously: function() {
                    return this.loginWithAuthData({
                        id: o()
                    }, "anonymous");
                },
                associateWithAuthData: function(e, t, n) {
                    return console.warn("DEPRECATED: User.associateWithAuthData 已废弃，请使用 User#associateWithAuthData 代替"), 
                    e._linkWith(t, n);
                },
                logOut: function() {
                    return e._config.disableCurrentUser ? (console.warn("AV.User.current() was disabled in multi-user environment, call logOut() from user object instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    l.resolve(null)) : (null !== e.User._currentUser && (e.User._currentUser._logOutWithAll(), 
                    e.User._currentUser._isCurrentUser = !1), e.User._currentUserMatchesDisk = !0, e.User._currentUser = null, 
                    e.localStorage.removeItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function() {
                        return e._refreshSubscriptionId();
                    }));
                },
                followerQuery: function(t) {
                    if (!t || !i.isString(t)) throw new Error("Invalid user object id.");
                    var n = new e.FriendShipQuery("_Follower");
                    return n._friendshipTag = "follower", n.equalTo("user", e.Object.createWithoutData("_User", t)), 
                    n;
                },
                followeeQuery: function(t) {
                    if (!t || !i.isString(t)) throw new Error("Invalid user object id.");
                    var n = new e.FriendShipQuery("_Followee");
                    return n._friendshipTag = "followee", n.equalTo("user", e.Object.createWithoutData("_User", t)), 
                    n;
                },
                requestPasswordReset: function(e) {
                    return u("requestPasswordReset", null, null, "POST", {
                        email: e
                    });
                },
                requestEmailVerify: function(e) {
                    return u("requestEmailVerify", null, null, "POST", {
                        email: e
                    });
                },
                requestMobilePhoneVerify: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                        mobilePhoneNumber: e
                    };
                    return t.validateToken && (n.validate_token = t.validateToken), u("requestMobilePhoneVerify", null, null, "POST", n, t);
                },
                requestPasswordResetBySmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                        mobilePhoneNumber: e
                    };
                    return t.validateToken && (n.validate_token = t.validateToken), u("requestPasswordResetBySmsCode", null, null, "POST", n, t);
                },
                resetPasswordBySmsCode: function(e, t) {
                    return u("resetPasswordBySmsCode", null, e, "PUT", {
                        password: t
                    });
                },
                verifyMobilePhone: function(e) {
                    return u("verifyMobilePhone", null, e, "POST", null);
                },
                requestLoginSmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                        mobilePhoneNumber: e
                    };
                    return t.validateToken && (n.validate_token = t.validateToken), u("requestLoginSmsCode", null, null, "POST", n, t);
                },
                currentAsync: function() {
                    return e._config.disableCurrentUser ? (console.warn("AV.User.currentAsync() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    l.resolve(null)) : e.User._currentUser ? l.resolve(e.User._currentUser) : e.User._currentUserMatchesDisk ? l.resolve(e.User._currentUser) : e.localStorage.getItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY)).then(function(t) {
                        if (!t) return null;
                        e.User._currentUserMatchesDisk = !0, e.User._currentUser = e.Object._create("_User"), 
                        e.User._currentUser._isCurrentUser = !0;
                        var n = JSON.parse(t);
                        return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, 
                        delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), 
                        e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [ {} ], e.User._currentUser;
                    });
                },
                current: function() {
                    if (e._config.disableCurrentUser) return console.warn("AV.User.current() was disabled in multi-user environment, access user from request instead https://leancloud.cn/docs/leanengine-node-sdk-upgrade-1.html"), 
                    null;
                    if (e.User._currentUser) return e.User._currentUser;
                    if (e.User._currentUserMatchesDisk) return e.User._currentUser;
                    e.User._currentUserMatchesDisk = !0;
                    var t = e.localStorage.getItem(e._getAVPath(e.User._CURRENT_USER_KEY));
                    if (!t) return null;
                    e.User._currentUser = e.Object._create("_User"), e.User._currentUser._isCurrentUser = !0;
                    var n = JSON.parse(t);
                    return e.User._currentUser.id = n._id, delete n._id, e.User._currentUser._sessionToken = n._sessionToken, 
                    delete n._sessionToken, e.User._currentUser._finishFetch(n), e.User._currentUser._synchronizeAllAuthData(), 
                    e.User._currentUser._refreshCache(), e.User._currentUser._opSetQueue = [ {} ], e.User._currentUser;
                },
                _saveCurrentUser: function(t) {
                    return (e.User._currentUser !== t ? e.User.logOut() : l.resolve()).then(function() {
                        t._isCurrentUser = !0, e.User._currentUser = t;
                        var n = t._toFullJSON();
                        return n._id = t.id, n._sessionToken = t._sessionToken, e.localStorage.setItemAsync(e._getAVPath(e.User._CURRENT_USER_KEY), JSON.stringify(n)).then(function() {
                            return e.User._currentUserMatchesDisk = !0, e._refreshSubscriptionId();
                        });
                    });
                },
                _registerAuthenticationProvider: function(t) {
                    e.User._authProviders[t.getAuthType()] = t, !e._config.disableCurrentUser && e.User.current() && e.User.current()._synchronizeAuthData(t.getAuthType());
                },
                _logInWith: function(t, n, r) {
                    return e.Object._create("_User")._linkWith(t, n, r);
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(7)("leancloud:query"), o = n(1), s = n(4), a = n(2), u = a._request, c = a.request, l = n(3), h = l.ensureArray, f = l.transformFetchOptions, d = function(e, t) {
            if (void 0 === e) throw new Error(t);
        };
        e.exports = function(e) {
            e.Query = function(t) {
                r.isString(t) && (t = e.Object._getSubclass(t)), this.objectClass = t, this.className = t.prototype.className, 
                this._where = {}, this._include = [], this._select = [], this._limit = -1, this._skip = 0, 
                this._extraOptions = {};
            }, e.Query.or = function() {
                var t = r.toArray(arguments), n = null;
                e._arrayEach(t, function(e) {
                    if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class");
                });
                var i = new e.Query(n);
                return i._orQuery(t), i;
            }, e.Query.and = function() {
                var t = r.toArray(arguments), n = null;
                e._arrayEach(t, function(e) {
                    if (r.isNull(n) && (n = e.className), n !== e.className) throw new Error("All queries must be for the same class");
                });
                var i = new e.Query(n);
                return i._andQuery(t), i;
            }, e.Query.doCloudQuery = function(t, n, i) {
                var o = {
                    cql: t
                };
                return r.isArray(n) ? o.pvalues = n : i = n, u("cloudQuery", null, null, "GET", o, i).then(function(t) {
                    var n = new e.Query(t.className);
                    return {
                        results: r.map(t.results, function(e) {
                            var r = n._newObject(t);
                            return r._finishFetch && r._finishFetch(n._processResult(e), !0), r;
                        }),
                        count: t.count,
                        className: t.className
                    };
                });
            }, e.Query._extend = e._extend, r.extend(e.Query.prototype, {
                _processResult: function(e) {
                    return e;
                },
                get: function(e, t) {
                    if (!e) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
                    var n = this._newObject();
                    n.id = e;
                    var i = this.toJSON(), o = {};
                    return i.keys && (o.keys = i.keys), i.include && (o.include = i.include), i.includeACL && (o.includeACL = i.includeACL), 
                    u("classes", this.className, e, "GET", f(o), t).then(function(e) {
                        if (r.isEmpty(e)) throw new s(s.OBJECT_NOT_FOUND, "Object not found.");
                        return n._finishFetch(n.parse(e), !0), n;
                    });
                },
                toJSON: function() {
                    var t = {
                        where: this._where
                    };
                    return this._include.length > 0 && (t.include = this._include.join(",")), this._select.length > 0 && (t.keys = this._select.join(",")), 
                    void 0 !== this._includeACL && (t.returnACL = this._includeACL), this._limit >= 0 && (t.limit = this._limit), 
                    this._skip > 0 && (t.skip = this._skip), void 0 !== this._order && (t.order = this._order), 
                    e._objectEach(this._extraOptions, function(e, n) {
                        t[n] = e;
                    }), t;
                },
                _newObject: function(t) {
                    return t && t.className ? new e.Object(t.className) : new this.objectClass();
                },
                _createRequest: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.toJSON(), t = arguments[1], n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/classes/" + this.className;
                    return encodeURIComponent(JSON.stringify(e)).length > 2e3 ? c({
                        path: "/batch",
                        method: "POST",
                        data: {
                            requests: [ {
                                method: "GET",
                                path: "/1.1" + n,
                                params: e
                            } ]
                        },
                        authOptions: t
                    }).then(function(e) {
                        var t = e[0];
                        if (t.success) return t.success;
                        var n = new Error(t.error.error || "Unknown batch error");
                        throw n.code = t.error.code, n;
                    }) : c({
                        method: "GET",
                        path: n,
                        query: e,
                        authOptions: t
                    });
                },
                _parseResponse: function(e) {
                    var t = this;
                    return r.map(e.results, function(n) {
                        var r = t._newObject(e);
                        return r._finishFetch && r._finishFetch(t._processResult(n), !0), r;
                    });
                },
                find: function(e) {
                    return this._createRequest(void 0, e).then(this._parseResponse.bind(this));
                },
                scan: function() {
                    var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.orderedBy, s = t.batchSize, a = arguments[1], c = this.toJSON();
                    i("scan %O", c), c.order && (console.warn("The order of the query is ignored for Query#scan. Checkout the orderedBy option of Query#scan."), 
                    delete c.order), c.skip && (console.warn("The skip option of the query is ignored for Query#scan."), 
                    delete c.skip), c.limit && (console.warn("The limit option of the query is ignored for Query#scan."), 
                    delete c.limit), n && (c.scan_key = n), s && (c.limit = s);
                    var l = o.resolve([]), h = void 0, f = !1;
                    return {
                        next: function() {
                            return (l = l.then(function(t) {
                                return f ? [] : t.length > 1 ? t : h || 0 === t.length ? u("scan/classes", e.className, null, "GET", h ? r.extend({}, c, {
                                    cursor: h
                                }) : c, a).then(function(t) {
                                    return h = t.cursor, e._parseResponse(t);
                                }).then(function(e) {
                                    return e.length || (f = !0), t.concat(e);
                                }) : (f = !0, t);
                            })).then(function(e) {
                                return e.shift();
                            }).then(function(e) {
                                return {
                                    value: e,
                                    done: f
                                };
                            });
                        }
                    };
                },
                destroyAll: function(t) {
                    return this.find(t).then(function(n) {
                        return e.Object.destroyAll(n, t);
                    });
                },
                count: function(e) {
                    var t = this.toJSON();
                    return t.limit = 0, t.count = 1, this._createRequest(t, e).then(function(e) {
                        return e.count;
                    });
                },
                first: function(e) {
                    var t = this, n = this.toJSON();
                    return n.limit = 1, this._createRequest(n, e).then(function(e) {
                        return r.map(e.results, function(e) {
                            var n = t._newObject();
                            return n._finishFetch && n._finishFetch(t._processResult(e), !0), n;
                        })[0];
                    });
                },
                skip: function(e) {
                    return d(e, "undefined is not a valid skip value"), this._skip = e, this;
                },
                limit: function(e) {
                    return d(e, "undefined is not a valid limit value"), this._limit = e, this;
                },
                equalTo: function(t, n) {
                    return d(t, "undefined is not a valid key"), d(n, "undefined is not a valid value"), 
                    this._where[t] = e._encode(n), this;
                },
                _addCondition: function(t, n, r) {
                    return d(t, "undefined is not a valid condition key"), d(n, "undefined is not a valid condition"), 
                    d(r, "undefined is not a valid condition value"), this._where[t] || (this._where[t] = {}), 
                    this._where[t][n] = e._encode(r), this;
                },
                sizeEqualTo: function(e, t) {
                    return this._addCondition(e, "$size", t), this;
                },
                notEqualTo: function(e, t) {
                    return this._addCondition(e, "$ne", t), this;
                },
                lessThan: function(e, t) {
                    return this._addCondition(e, "$lt", t), this;
                },
                greaterThan: function(e, t) {
                    return this._addCondition(e, "$gt", t), this;
                },
                lessThanOrEqualTo: function(e, t) {
                    return this._addCondition(e, "$lte", t), this;
                },
                greaterThanOrEqualTo: function(e, t) {
                    return this._addCondition(e, "$gte", t), this;
                },
                containedIn: function(e, t) {
                    return this._addCondition(e, "$in", t), this;
                },
                notContainedIn: function(e, t) {
                    return this._addCondition(e, "$nin", t), this;
                },
                containsAll: function(e, t) {
                    return this._addCondition(e, "$all", t), this;
                },
                exists: function(e) {
                    return this._addCondition(e, "$exists", !0), this;
                },
                doesNotExist: function(e) {
                    return this._addCondition(e, "$exists", !1), this;
                },
                matches: function(e, t, n) {
                    return this._addCondition(e, "$regex", t), n || (n = ""), t.ignoreCase && (n += "i"), 
                    t.multiline && (n += "m"), n && n.length && this._addCondition(e, "$options", n), 
                    this;
                },
                matchesQuery: function(e, t) {
                    var n = t.toJSON();
                    return n.className = t.className, this._addCondition(e, "$inQuery", n), this;
                },
                doesNotMatchQuery: function(e, t) {
                    var n = t.toJSON();
                    return n.className = t.className, this._addCondition(e, "$notInQuery", n), this;
                },
                matchesKeyInQuery: function(e, t, n) {
                    var r = n.toJSON();
                    return r.className = n.className, this._addCondition(e, "$select", {
                        key: t,
                        query: r
                    }), this;
                },
                doesNotMatchKeyInQuery: function(e, t, n) {
                    var r = n.toJSON();
                    return r.className = n.className, this._addCondition(e, "$dontSelect", {
                        key: t,
                        query: r
                    }), this;
                },
                _orQuery: function(e) {
                    var t = r.map(e, function(e) {
                        return e.toJSON().where;
                    });
                    return this._where.$or = t, this;
                },
                _andQuery: function(e) {
                    var t = r.map(e, function(e) {
                        return e.toJSON().where;
                    });
                    return this._where.$and = t, this;
                },
                _quote: function(e) {
                    return "\\Q" + e.replace("\\E", "\\E\\\\E\\Q") + "\\E";
                },
                contains: function(e, t) {
                    return this._addCondition(e, "$regex", this._quote(t)), this;
                },
                startsWith: function(e, t) {
                    return this._addCondition(e, "$regex", "^" + this._quote(t)), this;
                },
                endsWith: function(e, t) {
                    return this._addCondition(e, "$regex", this._quote(t) + "$"), this;
                },
                ascending: function(e) {
                    return d(e, "undefined is not a valid key"), this._order = e, this;
                },
                addAscending: function(e) {
                    return d(e, "undefined is not a valid key"), this._order ? this._order += "," + e : this._order = e, 
                    this;
                },
                descending: function(e) {
                    return d(e, "undefined is not a valid key"), this._order = "-" + e, this;
                },
                addDescending: function(e) {
                    return d(e, "undefined is not a valid key"), this._order ? this._order += ",-" + e : this._order = "-" + e, 
                    this;
                },
                near: function(t, n) {
                    return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), this._addCondition(t, "$nearSphere", n), 
                    this;
                },
                withinRadians: function(e, t, n) {
                    return this.near(e, t), this._addCondition(e, "$maxDistance", n), this;
                },
                withinMiles: function(e, t, n) {
                    return this.withinRadians(e, t, n / 3958.8);
                },
                withinKilometers: function(e, t, n) {
                    return this.withinRadians(e, t, n / 6371);
                },
                withinGeoBox: function(t, n, r) {
                    return n instanceof e.GeoPoint || (n = new e.GeoPoint(n)), r instanceof e.GeoPoint || (r = new e.GeoPoint(r)), 
                    this._addCondition(t, "$within", {
                        $box: [ n, r ]
                    }), this;
                },
                include: function(e) {
                    var t = this;
                    return d(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
                        t._include = t._include.concat(h(e));
                    }), this;
                },
                includeACL: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return this._includeACL = e, this;
                },
                select: function(e) {
                    var t = this;
                    return d(e, "undefined is not a valid key"), r(arguments).forEach(function(e) {
                        t._select = t._select.concat(h(e));
                    }), this;
                },
                each: function(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this._order || this._skip || this._limit >= 0) {
                        var i = new Error("Cannot iterate on a query with sort, skip, or limit.");
                        return o.reject(i);
                    }
                    var s = new e.Query(this.objectClass);
                    s._limit = n.batchSize || 100, s._where = r.clone(this._where), s._include = r.clone(this._include), 
                    s.ascending("objectId");
                    var a = !1;
                    return o._continueWhile(function() {
                        return !a;
                    }, function() {
                        return s.find(n).then(function(e) {
                            var n = o.resolve();
                            return r.each(e, function(e) {
                                n = n.then(function() {
                                    return t(e);
                                });
                            }), n.then(function() {
                                e.length >= s._limit ? s.greaterThan("objectId", e[e.length - 1].id) : a = !0;
                            });
                        });
                    });
                },
                subscribe: function(t) {
                    return e.LiveQuery.init(this, t);
                }
            }), e.FriendShipQuery = e.Query._extend({
                _objectClass: e.User,
                _newObject: function() {
                    return new e.User();
                },
                _processResult: function(e) {
                    if (e && e[this._friendshipTag]) {
                        var t = e[this._friendshipTag];
                        return "Pointer" === t.__type && "_User" === t.className && (delete t.__type, delete t.className), 
                        t;
                    }
                    return null;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(66), o = n(1), s = n(3).inherits, a = n(2).request, u = function(e, t) {
            return a({
                method: "POST",
                path: "/LiveQuery/subscribe",
                data: {
                    query: e,
                    id: t
                }
            });
        };
        e.exports = function(e) {
            var t = function() {
                if (!e._config.realtime) throw new Error("LiveQuery not supported. Please use the LiveQuery bundle. https://url.leanapp.cn/enable-live-query");
            };
            e.LiveQuery = s(i, {
                constructor: function(e, t, n, r) {
                    var o = this;
                    i.apply(this), this.id = e, this._client = t, this._client.register(this), this._queryJSON = n, 
                    this._subscriptionId = r, this._onMessage = this._dispatch.bind(this), this._onReconnect = function() {
                        u(o._queryJSON, o._subscriptionId).catch(function(e) {
                            return console.error("LiveQuery resubscribe error: " + e.message);
                        });
                    }, t.on("message", this._onMessage), t.on("reconnect", this._onReconnect);
                },
                _dispatch: function(t) {
                    var n = this;
                    t.forEach(function(t) {
                        var i = t.op, o = t.object, s = t.query_id, a = t.updatedKeys;
                        if (s === n.id) {
                            var u = e.parseJSON(r.extend({
                                __type: "_File" === o.className ? "File" : "Object"
                            }, o));
                            a ? n.emit(i, u, a) : n.emit(i, u);
                        }
                    });
                },
                unsubscribe: function() {
                    var e = this._client;
                    return e.off("message", this._onMessage), e.off("reconnect", this._onReconnect), 
                    e.deregister(this), a({
                        method: "POST",
                        path: "/LiveQuery/unsubscribe",
                        data: {
                            id: e.id,
                            query_id: this.id
                        }
                    });
                }
            }, {
                init: function(n) {
                    var r = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).subscriptionId, i = void 0 === r ? e._getSubscriptionId() : r;
                    if (t(), !(n instanceof e.Query)) throw new TypeError("LiveQuery must be inited with a Query");
                    return o.resolve(i).then(function(t) {
                        return e._config.realtime.createLiveQueryClient(t).then(function(r) {
                            var i = n.toJSON(), o = {
                                where: i.where,
                                keys: i.keys,
                                returnACL: i.returnACL,
                                className: n.className
                            }, s = u(o, t).then(function(n) {
                                var i = n.query_id;
                                return new e.LiveQuery(i, r, o, t);
                            }).finally(function() {
                                r.deregister(s);
                            });
                            return r.register(s), s;
                        });
                    });
                },
                pause: function() {
                    return t(), e._config.realtime.pause();
                },
                resume: function() {
                    return t(), e._config.realtime.resume();
                }
            });
        };
    }, function(e, t, n) {
        function r() {}
        function i(e, t, n) {
            this.fn = e, this.context = t, this.once = n || !1;
        }
        function o() {
            this._events = new r(), this._eventsCount = 0;
        }
        var s = Object.prototype.hasOwnProperty, a = "~";
        Object.create && (r.prototype = Object.create(null), new r().__proto__ || (a = !1)), 
        o.prototype.eventNames = function() {
            var e, t, n = [];
            if (0 === this._eventsCount) return n;
            for (t in e = this._events) s.call(e, t) && n.push(a ? t.slice(1) : t);
            return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
        }, o.prototype.listeners = function(e, t) {
            var n = a ? a + e : e, r = this._events[n];
            if (t) return !!r;
            if (!r) return [];
            if (r.fn) return [ r.fn ];
            for (var i = 0, o = r.length, s = new Array(o); i < o; i++) s[i] = r[i].fn;
            return s;
        }, o.prototype.emit = function(e, t, n, r, i, o) {
            var s = a ? a + e : e;
            if (!this._events[s]) return !1;
            var u, c, l = this._events[s], h = arguments.length;
            if (l.fn) {
                switch (l.once && this.removeListener(e, l.fn, void 0, !0), h) {
                  case 1:
                    return l.fn.call(l.context), !0;

                  case 2:
                    return l.fn.call(l.context, t), !0;

                  case 3:
                    return l.fn.call(l.context, t, n), !0;

                  case 4:
                    return l.fn.call(l.context, t, n, r), !0;

                  case 5:
                    return l.fn.call(l.context, t, n, r, i), !0;

                  case 6:
                    return l.fn.call(l.context, t, n, r, i, o), !0;
                }
                for (c = 1, u = new Array(h - 1); c < h; c++) u[c - 1] = arguments[c];
                l.fn.apply(l.context, u);
            } else {
                var f, d = l.length;
                for (c = 0; c < d; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), 
                h) {
                  case 1:
                    l[c].fn.call(l[c].context);
                    break;

                  case 2:
                    l[c].fn.call(l[c].context, t);
                    break;

                  case 3:
                    l[c].fn.call(l[c].context, t, n);
                    break;

                  case 4:
                    l[c].fn.call(l[c].context, t, n, r);
                    break;

                  default:
                    if (!u) for (f = 1, u = new Array(h - 1); f < h; f++) u[f - 1] = arguments[f];
                    l[c].fn.apply(l[c].context, u);
                }
            }
            return !0;
        }, o.prototype.on = function(e, t, n) {
            var r = new i(t, n || this), o = a ? a + e : e;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : (this._events[o] = r, 
            this._eventsCount++), this;
        }, o.prototype.once = function(e, t, n) {
            var r = new i(t, n || this, !0), o = a ? a + e : e;
            return this._events[o] ? this._events[o].fn ? this._events[o] = [ this._events[o], r ] : this._events[o].push(r) : (this._events[o] = r, 
            this._eventsCount++), this;
        }, o.prototype.removeListener = function(e, t, n, i) {
            var o = a ? a + e : e;
            if (!this._events[o]) return this;
            if (!t) return 0 == --this._eventsCount ? this._events = new r() : delete this._events[o], 
            this;
            var s = this._events[o];
            if (s.fn) s.fn !== t || i && !s.once || n && s.context !== n || (0 == --this._eventsCount ? this._events = new r() : delete this._events[o]); else {
                for (var u = 0, c = [], l = s.length; u < l; u++) (s[u].fn !== t || i && !s[u].once || n && s[u].context !== n) && c.push(s[u]);
                c.length ? this._events[o] = 1 === c.length ? c[0] : c : 0 == --this._eventsCount ? this._events = new r() : delete this._events[o];
            }
            return this;
        }, o.prototype.removeAllListeners = function(e) {
            var t;
            return e ? (t = a ? a + e : e, this._events[t] && (0 == --this._eventsCount ? this._events = new r() : delete this._events[t])) : (this._events = new r(), 
            this._eventsCount = 0), this;
        }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, 
        o.prototype.setMaxListeners = function() {
            return this;
        }, o.prefixed = a, o.EventEmitter = o, e.exports = o;
    }, function(e, t, n) {
        var r = n(0), i = n(3).tap;
        e.exports = function(e) {
            e.Captcha = function(e, t) {
                this._options = e, this._authOptions = t, this.url = void 0, this.captchaToken = void 0, 
                this.validateToken = void 0;
            }, e.Captcha.prototype.refresh = function() {
                var t = this;
                return e.Cloud._requestCaptcha(this._options, this._authOptions).then(function(e) {
                    var n = e.captchaToken, i = e.url;
                    return r.extend(t, {
                        captchaToken: n,
                        url: i
                    }), i;
                });
            }, e.Captcha.prototype.verify = function(t) {
                var n = this;
                return e.Cloud.verifyCaptcha(t, this.captchaToken).then(i(function(e) {
                    return n.validateToken = e;
                }));
            }, e.Captcha.request = function(t, n) {
                var r = new e.Captcha(t, n);
                return r.refresh().then(function() {
                    return r;
                });
            };
        };
    }, function(e, t, n) {
        var r = n(0), i = n(2), o = i._request, s = i.request, a = n(1);
        e.exports = function(e) {
            e.Cloud = e.Cloud || {}, r.extend(e.Cloud, {
                run: function(t, n, r) {
                    return s({
                        service: "engine",
                        method: "POST",
                        path: "/functions/" + t,
                        data: e._encode(n, null, !0),
                        authOptions: r
                    }).then(function(t) {
                        return e._decode(t).result;
                    });
                },
                rpc: function(t, n, i) {
                    return r.isArray(n) ? a.reject(new Error("Can't pass Array as the param of rpc function in JavaScript SDK.")) : s({
                        service: "engine",
                        method: "POST",
                        path: "/call/" + t,
                        data: e._encodeObjectOrArray(n),
                        authOptions: i
                    }).then(function(t) {
                        return e._decode(t).result;
                    });
                },
                getServerDate: function() {
                    return o("date", null, null, "GET").then(function(t) {
                        return e._decode(t);
                    });
                },
                requestSmsCode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (r.isString(e) && (e = {
                        mobilePhoneNumber: e
                    }), !e.mobilePhoneNumber) throw new Error("Missing mobilePhoneNumber.");
                    return t.validateToken && (e = r.extend({}, e, {
                        validate_token: t.validateToken
                    })), o("requestSmsCode", null, null, "POST", e, t);
                },
                verifySmsCode: function(e, t) {
                    if (!e) throw new Error("Missing sms code.");
                    var n = {};
                    return r.isString(t) && (n.mobilePhoneNumber = t), o("verifySmsCode", e, null, "POST", n);
                },
                _requestCaptcha: function(e, t) {
                    return o("requestCaptcha", null, null, "GET", e, t).then(function(e) {
                        var t = e.captcha_url;
                        return {
                            captchaToken: e.captcha_token,
                            url: t
                        };
                    });
                },
                requestCaptcha: e.Captcha.request,
                verifyCaptcha: function(e, t) {
                    return o("verifyCaptcha", null, null, "POST", {
                        captcha_code: e,
                        captcha_token: t
                    }).then(function(e) {
                        return e.validate_token;
                    });
                }
            });
        };
    }, function(e, t, n) {
        var r = n(2).request;
        e.exports = function(e) {
            e.Installation = e.Object.extend("_Installation"), e.Push = e.Push || {}, e.Push.send = function(e, t) {
                if (e.where && (e.where = e.where.toJSON().where), e.where && e.cql) throw new Error("Both where and cql can't be set");
                if (e.push_time && (e.push_time = e.push_time.toJSON()), e.expiration_time && (e.expiration_time = e.expiration_time.toJSON()), 
                e.expiration_time && e.expiration_time_interval) throw new Error("Both expiration_time and expiration_time_interval can't be set");
                return r({
                    service: "push",
                    method: "POST",
                    path: "/push",
                    data: e,
                    authOptions: t
                });
            };
        };
    }, function(e, t, n) {
        var i = "function" == typeof Symbol && "symbol" == r(Symbol.iterator) ? function(e) {
            return void 0 === e ? "undefined" : r(e);
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : r(e);
        }, o = n(0), s = n(1), a = n(2)._request, u = n(3).getSessionToken;
        e.exports = function(e) {
            var t = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return u(t) ? e.User._fetchUserBySessionToken(u(t)) : e.User.currentAsync();
            }, n = function(n) {
                return t(n).then(function(t) {
                    return e.Object.createWithoutData("_User", t.id)._toPointer();
                });
            };
            e.Status = function(e, t) {
                return this.data = {}, this.inboxType = "default", this.query = null, e && "object" === (void 0 === e ? "undefined" : i(e)) ? this.data = e : (e && (this.data.image = e), 
                t && (this.data.message = t)), this;
            }, o.extend(e.Status.prototype, {
                get: function(e) {
                    return this.data[e];
                },
                set: function(e, t) {
                    return this.data[e] = t, this;
                },
                destroy: function(e) {
                    return this.id ? a("statuses", null, this.id, "DELETE", e) : s.reject(new Error("The status id is not exists."));
                },
                toObject: function() {
                    return this.id ? e.Object.createWithoutData("_Status", this.id) : null;
                },
                _getDataJSON: function() {
                    var t = o.clone(this.data);
                    return e._encode(t);
                },
                send: function() {
                    var t = this, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!u(r) && !e.User.current()) throw new Error("Please signin an user.");
                    return this.query ? n(r).then(function(e) {
                        var n = t.query.toJSON();
                        n.className = t.query.className;
                        var i = {};
                        return i.query = n, t.data = t.data || {}, t.data.source = t.data.source || e, i.data = t._getDataJSON(), 
                        i.inboxType = t.inboxType || "default", a("statuses", null, null, "POST", i, r);
                    }).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    }) : e.Status.sendStatusToFollowers(this, r);
                },
                _finishFetch: function(t) {
                    this.id = t.objectId, this.createdAt = e._parseDate(t.createdAt), this.updatedAt = e._parseDate(t.updatedAt), 
                    this.messageId = t.messageId, delete t.messageId, delete t.objectId, delete t.createdAt, 
                    delete t.updatedAt, this.data = e._decode(t);
                }
            }), e.Status.sendStatusToFollowers = function(t) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (!u(r) && !e.User.current()) throw new Error("Please signin an user.");
                return n(r).then(function(n) {
                    var i = {};
                    i.className = "_Follower", i.keys = "follower", i.where = {
                        user: n
                    };
                    var o = {};
                    return o.query = i, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), 
                    o.inboxType = t.inboxType || "default", a("statuses", null, null, "POST", o, r).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    });
                });
            }, e.Status.sendPrivateStatus = function(t, r) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (!u(i) && !e.User.current()) throw new Error("Please signin an user.");
                if (!r) throw new Error("Invalid target user.");
                var s = o.isString(r) ? r : r.id;
                if (!s) throw new Error("Invalid target user.");
                return n(i).then(function(n) {
                    var r = {};
                    r.className = "_User", r.where = {
                        objectId: s
                    };
                    var o = {};
                    return o.query = r, t.data = t.data || {}, t.data.source = t.data.source || n, o.data = t._getDataJSON(), 
                    o.inboxType = "private", t.inboxType = "private", a("statuses", null, null, "POST", o, i).then(function(n) {
                        return t.id = n.objectId, t.createdAt = e._parseDate(n.createdAt), t;
                    });
                });
            }, e.Status.countUnreadStatuses = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (o.isString(r) || (i = r), !u(i) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return s.resolve(n || t(i)).then(function(t) {
                    var n = {};
                    return n.inboxType = e._encode(r), n.owner = e._encode(t), a("subscribe/statuses/count", null, null, "GET", n, i);
                });
            }, e.Status.resetUnreadCount = function(n) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "default", i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if (o.isString(r) || (i = r), !u(i) && null == n && !e.User.current()) throw new Error("Please signin an user or pass the owner objectId.");
                return s.resolve(n || t(i)).then(function(t) {
                    var n = {};
                    return n.inboxType = e._encode(r), n.owner = e._encode(t), a("subscribe/statuses/resetUnreadCount", null, null, "POST", n, i);
                });
            }, e.Status.statusQuery = function(t) {
                var n = new e.Query("_Status");
                return t && n.equalTo("source", t), n;
            }, e.InboxQuery = e.Query._extend({
                _objectClass: e.Status,
                _sinceId: 0,
                _maxId: 0,
                _inboxType: "default",
                _owner: null,
                _newObject: function() {
                    return new e.Status();
                },
                _createRequest: function(t, n) {
                    return e.InboxQuery.__super__._createRequest.call(this, t, n, "/subscribe/statuses");
                },
                sinceId: function(e) {
                    return this._sinceId = e, this;
                },
                maxId: function(e) {
                    return this._maxId = e, this;
                },
                owner: function(e) {
                    return this._owner = e, this;
                },
                inboxType: function(e) {
                    return this._inboxType = e, this;
                },
                toJSON: function() {
                    var t = e.InboxQuery.__super__.toJSON.call(this);
                    return t.owner = e._encode(this._owner), t.inboxType = e._encode(this._inboxType), 
                    t.sinceId = e._encode(this._sinceId), t.maxId = e._encode(this._maxId), t;
                }
            }), e.Status.inboxQuery = function(t, n) {
                var r = new e.InboxQuery(e.Status);
                return t && (r._owner = t), n && (r._inboxType = n), r;
            };
        };
    }, function(e, t, n) {
        var r = n(0), i = n(2)._request;
        e.exports = function(e) {
            e.SearchSortBuilder = function() {
                this._sortFields = [];
            }, r.extend(e.SearchSortBuilder.prototype, {
                _addField: function(e, t, n, r) {
                    var i = {};
                    return i[e] = {
                        order: t || "asc",
                        mode: n || "avg",
                        missing: "_" + (r || "last")
                    }, this._sortFields.push(i), this;
                },
                ascending: function(e, t, n) {
                    return this._addField(e, "asc", t, n);
                },
                descending: function(e, t, n) {
                    return this._addField(e, "desc", t, n);
                },
                whereNear: function(e, t, n) {
                    n = n || {};
                    var r = {}, i = {
                        lat: t.latitude,
                        lon: t.longitude
                    }, o = {
                        order: n.order || "asc",
                        mode: n.mode || "avg",
                        unit: n.unit || "km"
                    };
                    return o[e] = i, r._geo_distance = o, this._sortFields.push(r), this;
                },
                build: function() {
                    return JSON.stringify(e._encode(this._sortFields));
                }
            }), e.SearchQuery = e.Query._extend({
                _sid: null,
                _hits: 0,
                _queryString: null,
                _highlights: null,
                _sortBuilder: null,
                _createRequest: function(e, t) {
                    return i("search/select", null, null, "GET", e || this.toJSON(), t);
                },
                sid: function(e) {
                    return this._sid = e, this;
                },
                queryString: function(e) {
                    return this._queryString = e, this;
                },
                highlights: function(e) {
                    var t;
                    return t = e && r.isString(e) ? arguments : e, this._highlights = t, this;
                },
                sortBy: function(e) {
                    return this._sortBuilder = e, this;
                },
                hits: function() {
                    return this._hits || (this._hits = 0), this._hits;
                },
                _processResult: function(e) {
                    return delete e.className, delete e._app_url, delete e._deeplink, e;
                },
                hasMore: function() {
                    return !this._hitEnd;
                },
                reset: function() {
                    this._hitEnd = !1, this._sid = null, this._hits = 0;
                },
                find: function() {
                    var e = this;
                    return this._createRequest().then(function(t) {
                        return t.sid ? (e._oldSid = e._sid, e._sid = t.sid) : (e._sid = null, e._hitEnd = !0), 
                        e._hits = t.hits || 0, r.map(t.results, function(n) {
                            n.className && (t.className = n.className);
                            var r = e._newObject(t);
                            return r.appURL = n._app_url, r._finishFetch(e._processResult(n), !0), r;
                        });
                    });
                },
                toJSON: function() {
                    var t = e.SearchQuery.__super__.toJSON.call(this);
                    if (delete t.where, this.className && (t.clazz = this.className), this._sid && (t.sid = this._sid), 
                    !this._queryString) throw new Error("Please set query string.");
                    if (t.q = this._queryString, this._highlights && (t.highlights = this._highlights.join(",")), 
                    this._sortBuilder && t.order) throw new Error("sort and order can not be set at same time.");
                    return this._sortBuilder && (t.sort = this._sortBuilder.build()), t;
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(4), o = n(2).request, s = n(1);
        e.exports = function(e) {
            e.Insight = e.Insight || {}, r.extend(e.Insight, {
                startJob: function(t, n) {
                    if (!t || !t.sql) throw new Error("Please provide the sql to run the job.");
                    var r = {
                        jobConfig: t,
                        appId: e.applicationId
                    };
                    return o({
                        path: "/bigquery/jobs",
                        method: "POST",
                        data: e._encode(r, null, !0),
                        authOptions: n,
                        signKey: !1
                    }).then(function(t) {
                        return e._decode(t).id;
                    });
                },
                on: function(e, t) {}
            }), e.Insight.JobQuery = function(e, t) {
                if (!e) throw new Error("Please provide the job id.");
                this.id = e, this.className = t, this._skip = 0, this._limit = 100;
            }, r.extend(e.Insight.JobQuery.prototype, {
                skip: function(e) {
                    return this._skip = e, this;
                },
                limit: function(e) {
                    return this._limit = e, this;
                },
                find: function(e) {
                    var t = {
                        skip: this._skip,
                        limit: this._limit
                    };
                    return o({
                        path: "/bigquery/jobs/" + this.id,
                        method: "GET",
                        query: t,
                        authOptions: e,
                        signKey: !1
                    }).then(function(e) {
                        return e.error ? s.reject(new i(e.code, e.error)) : s.resolve(e);
                    });
                }
            });
        };
    }, function(e, t, n) {
        var r = n(0), i = n(2)._request, o = n(5), s = function(e) {
            return "string" == typeof e ? e : "function" == typeof e.getPayload ? JSON.stringify(e.getPayload()) : JSON.stringify(e);
        };
        e.exports = o.Object.extend("_Conversation", {
            constructor: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                o.Object.prototype.constructor.call(this, null, null), this.set("name", e), void 0 !== t.isSystem && this.set("sys", !!t.isSystem), 
                void 0 !== t.isTransient && this.set("tr", !!t.isTransient);
            },
            getCreator: function() {
                return this.get("c");
            },
            getLastMessageAt: function() {
                return this.get("lm");
            },
            getMembers: function() {
                return this.get("m");
            },
            addMember: function(e) {
                return this.add("m", e);
            },
            getMutedMembers: function() {
                return this.get("mu");
            },
            getName: function() {
                return this.get("name");
            },
            isTransient: function() {
                return this.get("tr");
            },
            isSystem: function() {
                return this.get("sys");
            },
            send: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = {
                    from_peer: e,
                    conv_id: this.id,
                    transient: !1,
                    message: s(t)
                };
                return void 0 !== n.toClients && (o.to_peers = n.toClients), void 0 !== n.transient && (o.transient = !!n.transient), 
                void 0 !== n.pushData && (o.push_data = n.pushData), i("rtm", "messages", null, "POST", o, r);
            },
            broadcast: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, a = {
                    from_peer: e,
                    conv_id: this.id,
                    message: s(t)
                };
                if (void 0 !== n.pushData && (a.push = n.pushData), void 0 !== n.validTill) {
                    var u = n.validTill;
                    r.isDate(u) && (u = u.getTime()), n.valid_till = u;
                }
                return i("rtm", "broadcast", null, "POST", a, o);
            }
        });
    }, function(e, t, n) {
        function r(e) {
            var t = e.name, n = e.value, r = e.version;
            this.name = t, this.value = n, this.version = r;
        }
        var i = n(0), o = n(1), s = n(2).request, a = n(3), u = a.ensureArray, c = a.parseDate, l = n(5);
        l.LeaderboardVersionChangeInterval = {
            NEVER: "never",
            DAY: "day",
            WEEK: "week",
            MONTH: "month"
        }, l.LeaderboardOrder = {
            ASCENDING: "ascending",
            DESCENDING: "descending"
        }, l.LeaderboardUpdateStrategy = {
            BETTER: "better",
            LAST: "last",
            SUM: "sum"
        };
        var h = function(e) {
            var t = l._decode(e);
            return new r({
                name: t.statisticName,
                value: t.statisticValue,
                version: t.version
            });
        };
        l.Leaderboard = function(e) {
            this.statisticName = e, this.order = void 0, this.updateStrategy = void 0, this.versionChangeInterval = void 0, 
            this.version = void 0, this.nextResetAt = void 0, this.createdAt = void 0;
        };
        var f = l.Leaderboard;
        l.Leaderboard.createWithoutData = function(e) {
            return new f(e);
        }, l.Leaderboard.createLeaderboard = function(e, t) {
            var n = e.statisticName, r = e.order, i = e.versionChangeInterval, o = e.updateStrategy;
            return s({
                method: "POST",
                path: "/leaderboard/leaderboards",
                data: {
                    statisticName: n,
                    order: r,
                    versionChangeInterval: i,
                    updateStrategy: o
                },
                authOptions: t
            }).then(function(e) {
                return new f(n)._finishFetch(e);
            });
        }, l.Leaderboard.getLeaderboard = function(e, t) {
            return f.createWithoutData(e).fetch(t);
        }, l.Leaderboard.getStatistics = function(e) {
            var t = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).statisticNames, n = arguments[2];
            return o.resolve().then(function() {
                if (!e || !e.id) throw new Error("user must be an AV.User");
                return s({
                    method: "GET",
                    path: "/leaderboard/users/" + e.id + "/statistics",
                    query: {
                        statistics: t ? u(t).join(",") : void 0
                    },
                    authOptions: n
                }).then(function(e) {
                    return e.results.map(h);
                });
            });
        }, l.Leaderboard.updateStatistics = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return o.resolve().then(function() {
                if (!e || !e.id) throw new Error("user must be an AV.User");
                var r = i.map(t, function(e, t) {
                    return {
                        statisticName: t,
                        statisticValue: e
                    };
                }), o = n.overwrite;
                return s({
                    method: "POST",
                    path: "/leaderboard/users/" + e.id + "/statistics",
                    query: {
                        overwrite: o ? 1 : void 0
                    },
                    data: r,
                    authOptions: n
                }).then(function(e) {
                    return e.results.map(h);
                });
            });
        }, l.Leaderboard.deleteStatistics = function(e, t, n) {
            return o.resolve().then(function() {
                if (!e || !e.id) throw new Error("user must be an AV.User");
                return s({
                    method: "DELETE",
                    path: "/leaderboard/users/" + e.id + "/statistics",
                    query: {
                        statistics: u(t).join(",")
                    },
                    authOptions: n
                }).then(function() {});
            });
        }, i.extend(f.prototype, {
            _finishFetch: function(e) {
                var t = this;
                return i.forEach(e, function(e, n) {
                    "updatedAt" !== n && "objectId" !== n && ("expiredAt" === n && (n = "nextResetAt"), 
                    "createdAt" === n && (e = c(e)), e && "Date" === e.__type && (e = c(e.iso)), t[n] = e);
                }), this;
            },
            fetch: function(e) {
                var t = this;
                return s({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: e
                }).then(function(e) {
                    return t._finishFetch(e);
                });
            },
            _getResults: function(e, t, n) {
                var r = e.skip, i = e.limit, o = e.selectUserKeys, a = e.includeStatistics, c = e.version;
                return s({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/ranks" + (n ? "/" + n : ""),
                    query: {
                        skip: r,
                        limit: i,
                        includeUser: o ? u(o).join(",") : void 0,
                        includeStatistics: a ? u(a).join(",") : void 0,
                        version: c
                    },
                    authOptions: t
                }).then(function(e) {
                    return e.results.map(function(e) {
                        var t = l._decode(e), n = t.user, r = t.statisticValue, i = t.rank, o = t.statistics;
                        return {
                            user: n,
                            value: r,
                            rank: i,
                            includedStatistics: (void 0 === o ? [] : o).map(h)
                        };
                    });
                });
            },
            getResults: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = e.skip, n = e.limit, r = e.selectUserKeys, i = e.includeStatistics, o = e.version, s = arguments[1];
                return this._getResults({
                    skip: t,
                    limit: n,
                    selectUserKeys: r,
                    includeStatistics: i,
                    version: o
                }, s);
            },
            getResultsAroundUser: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments[2];
                if (e && "string" != typeof e.id) return this.getResultsAroundUser(void 0, e, t);
                var r = t.limit, i = t.selectUserKeys, o = t.includeStatistics, s = t.version;
                return this._getResults({
                    limit: r,
                    selectUserKeys: i,
                    includeStatistics: o,
                    version: s
                }, n, e ? e.id : "self");
            },
            _update: function(e, t) {
                var n = this;
                return s({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    data: e,
                    authOptions: t
                }).then(function(e) {
                    return n._finishFetch(e);
                });
            },
            updateVersionChangeInterval: function(e, t) {
                return this._update({
                    versionChangeInterval: e
                }, t);
            },
            updateUpdateStrategy: function(e, t) {
                return this._update({
                    updateStrategy: e
                }, t);
            },
            reset: function(e) {
                var t = this;
                return s({
                    method: "PUT",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/incrementVersion",
                    authOptions: e
                }).then(function(e) {
                    return t._finishFetch(e);
                });
            },
            destroy: function(e) {
                return l.request({
                    method: "DELETE",
                    path: "/leaderboard/leaderboards/" + this.statisticName,
                    authOptions: e
                }).then(function() {});
            },
            getArchives: function() {
                var e = this, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = t.skip, r = t.limit, i = arguments[1];
                return s({
                    method: "GET",
                    path: "/leaderboard/leaderboards/" + this.statisticName + "/archives",
                    query: {
                        skip: n,
                        limit: r
                    },
                    authOptions: i
                }).then(function(t) {
                    return t.results.map(function(t) {
                        var n = t.version, r = t.status, i = t.url, o = t.activatedAt, s = t.deactivatedAt;
                        return {
                            statisticName: e.statisticName,
                            version: n,
                            status: r,
                            url: i,
                            activatedAt: c(o.iso),
                            deactivatedAt: c(s.iso)
                        };
                    });
                });
            }
        });
    } ]);
});