function t(t) {
    return t && t.__esModule ? t : {
        default: t
    };
}

var e = t(require("./cityGroup")), a = t(require("../../service/common")), r = (getApp(), 
[ "北京", "上海", "广州", "深圳", "杭州", "成都", "苏州", "南京", "武汉", "西安", "厦门", "天津", "郑州", "重庆", "青岛" ]);

Page({
    data: {
        hotCitys: r,
        zimu: [ "RM", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ],
        scrollIntoId: "RM",
        groups: e.default
    },
    onLoad: function(t) {
        var e = wx.getStorageSync("currCity");
        this.setData({
            from: t.from || "",
            currCity: e || "未知"
        });
    },
    reLoc: function() {
        var t = this;
        a.default.getRegeo().then(function(e) {
            var a = e.city;
            wx.setStorageSync("currCity", a), t.setData({
                currCity: a
            });
        }).catch(function(t) {
            wx.navigateTo({
                url: "../auth/index?from=loc"
            });
        });
    },
    touchmovefn: function(t) {
        var e = t.changedTouches[0].pageY / 20, a = parseInt(e), r = this.data.zimu[a];
        this.setData({
            scrollIntoId: r
        });
    },
    touchstartfn: function(t) {
        var e = t.target.dataset.id;
        this.setData({
            scrollIntoId: e
        });
    },
    handleTap: function(t) {
        var e = t.target.dataset.name;
        this.setCity(e);
    },
    selectLocCity: function(t) {
        var e = t.currentTarget.dataset.city;
        this.setCity(e);
    },
    selectCity: function(t) {
        var e = t.currentTarget.dataset.city + "市";
        this.setCity(e);
    },
    setCity: function(t) {
        wx.setStorageSync("currCity", t), a.default.getDistricts(t, function() {
            wx.switchTab({
                url: "/pages/index/index"
            });
        });
    }
});