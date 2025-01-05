function t(t) {
    if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
    }
    return Array.from(t);
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = function(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}(require("./house")), n = require("../assets/libs/av-weapp-min"), r = new (require("../assets/libs/amap-wx.js").AMapWX)({
    key: "1d42dc1c752ad19d7af40a974e4ea217"
});

exports.default = {
    uploadImgs: function(e) {
        return e.map(function(t) {
            return function() {
                return new n.File("avatar.jpg", {
                    blob: {
                        uri: t
                    }
                }).save();
            };
        }).reduce(function(e, r) {
            return e.then(function(e) {
                return n.Promise.all([].concat(t(e), [ r() ]));
            });
        }, n.Promise.resolve([]));
    },
    uploadVideo: function(e) {
        return e.map(function(t) {
            return function() {
                return new n.File("house.mp4", {
                    blob: {
                        uri: t
                    }
                }).save();
            };
        }).reduce(function(e, r) {
            return e.then(function(e) {
                return n.Promise.all([].concat(t(e), [ r() ]));
            });
        }, n.Promise.resolve([]));
    },
    createQrImg: function(t) {
        return n.Cloud.run("createQr", {
            houseId: t
        }).then(function(n) {
            var r = n.toJSON().url;
            return e.default.update(t, {
                qrImgUrl: r
            }).then(function(t) {
                return t.toJSON();
            });
        });
    },
    getDecryptData: function(t) {
        return n.Cloud.run("getDecryptData", t).then(function(t) {
            return t;
        });
    },
    getLoc: function() {
        return new Promise(function(t, e) {
            wx.getLocation({
                type: "wgs84",
                success: function(e) {
                    t(e);
                },
                fail: function(t) {
                    e(t);
                }
            });
        });
    },
    getStaticMap: function(t) {
        var e = t.latitude, n = t.longitude + "," + e;
        return new Promise(function(t, e) {
            r.getStaticmap({
                zoom: 16,
                size: "690*280",
                scale: 2,
                location: n,
                markers: "mid,0xFF0000,A:" + n,
                success: function(e) {
                    t(e.url);
                },
                fail: function(t) {
                    e(t.errMsg);
                }
            });
        });
    },
    getRegeo: function(t) {
        return new Promise(function(e, n) {
            var o = {};
            t && (o.location = t), o.success = function(t) {
                e(t[0].regeocodeData.addressComponent);
            }, o.fail = function(t) {
                n(t);
            }, r.getRegeo(o);
        });
    },
    getDistricts: function(t, e) {
        var n = 3;
        "北京市" != t && "上海市" != t && "重庆市" != t && "天津市" != t || (n = 4), wx.request({
            url: "https://restapi.amap.com/v3/config/district",
            data: {
                subdistrict: n,
                key: "e8916ef967dd49ed1f59616c8264c30a",
                s: "rsv3",
                output: "json",
                keywords: t
            },
            header: {
                "content-type": "application/json"
            },
            success: function(r) {
                wx.setStorageSync("currCity", t);
                var o = void 0, i = {}, c = (o = 4 == n ? r.data.districts[0].districts[0].districts : r.data.districts[0].districts).map(function(t) {
                    return i[t.adcode] = [ {
                        name: "不限",
                        areacode: "nolimit"
                    } ].concat(t.districts), {
                        name: t.name,
                        code: t.adcode
                    };
                });
                wx.setStorageSync("districts", [ {
                    name: "不限",
                    code: "nolimit"
                } ].concat(c)), wx.setStorageSync("districtMap", i), "function" == typeof e && e(r);
            }
        });
    }
};