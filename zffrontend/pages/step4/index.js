var t = getApp(), s = [ "可短租", "近地铁", "非隔断", "有电梯", "带独卫", "有阳台" ], a = void 0;

import util from '../../utils/util';

let formData = {};

Page({
    data: {
        houseType: "",
        houseinfo: "",
        houseTags: []
    },
    onLoad: function(o) {
        var u = this, n = [];
        (a = o.houseId || "") ? e.default.queryById(a).then(function(e) {
            var a = e.title, o = e.houseDesc, c = e.houseTags;
            a = a || "", o = o || "", t.globalData.houseDesc = o, s.forEach(function(e) {
                c.indexOf(e) > -1 ? n.push({
                    name: e,
                    selected: !0
                }) : n.push({
                    name: e,
                    selected: !1
                });
            }), u.setData({
                title: a,
                houseDesc: o,
                houseTags: n
            });
        }) : (n = s.map(function(e) {
            return {
                name: e,
                selected: !1
            };
        }), wx.getStorage({
            key: "tempHouseDesc",
            success: function(e) {
                u.setData({
                    houseTags: n,
                    houseDesc: e.data || ""
                }), t.globalData.houseDesc = houseDesc;
            },
            fail: function() {
                u.setData({
                    houseTags: n,
                    houseDesc: ""
                });
            }
        }));
        wx.getStorage({
            key: "tempHouseInfo",
            success: function(e) {
                formData.bedroom = e.data.bedroom,
                formData.checkInDate = e.data.checkInDate,
                formData.districtName = e.data.districtName,
                formData.genderLimit = e.data.genderLimit,
                formData.houseInfo = e.data.houseInfo,
                formData.houseType = e.data.houseType,
                formData.price = e.data.price,
                formData.rentType = e.data.rentType
            },
            fail: function() {
                u.setData({
                    houseTags: n,
                    houseDesc: ""
                });
            }
        })
        wx.getStorage({
            key: "tempHouseImgPaths",
            success: function(e) {
                formData.imgPaths = e.data.imgPaths,
                formData.videoPath = e.data.videoPath
            },
            fail: function() {
                u.setData({
                    houseTags: n,
                    houseDesc: ""
                });
            }
        })
    },
    onShow: function() {
        var k = this;
        wx.getStorage({
            key: "tempHouseDesc",
            success: function(e) {
                if (e.data !== '') {
                    k.setData({
                        houseDesc: e.data
                    })
                }
            }
        })
    },
    inputDesc: function() {
        wx.navigateTo({
            url: "../desc/index"
        });
    },
    toggleTag: function(e) {
        for (var t = e.currentTarget.dataset.tag, s = this.data.houseTags, a = 0; a < s.length; a++) {
            var o = s[a];
            o.name === t && (o.selected = !o.selected);
        }
        console.log(s)
        this.setData({
            houseTags: s
        });
    },
    formSubmit: function(e) {
        let vdd = [];
        for (let i = 0; i <this.data.houseTags.length; i++) {
            if (this.data.houseTags[i].selected == true) {
                vdd.push(this.data.houseTags[i].name)
            }
        };
        formData.title = e.detail.value.title;
        formData.houseTags = vdd;
        formData.houseDesc = this.data.houseDesc;
        util.wxRequest('api/content/create', formData, 'POST').then(res => {
            if (res.data.code == 200) {
                return wx.showToast({
                    title: res.data.success,
                    image: '../../image/prompt.png',
                    duration: 1000
                })
            } else {
                return wx.showToast({
                    title: res.data.fail,
                    image: '../../image/prompt.png',
                    duration: 1000
                })
            }

        })
    },

    goToNext: function(e) {
        wx.hideLoading(), t.globalData.tempHouseInfo = "", t.globalData.imgPaths = "", t.globalData.videoPath = "", 
        t.globalData.houseDesc = "", wx.removeStorage({
            key: "tempHouseImgPaths",
            success: function() {}
        }), wx.removeStorage({
            key: "tempHouseInfo",
            success: function() {}
        }), wx.removeStorage({
            key: "tempHouseDesc",
            success: function() {}
        }), wx.redirectTo({
            url: "../result/index?houseId=" + e
        });
    }
});