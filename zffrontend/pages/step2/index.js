
import WxParse from '../../wxParse/wxParse';
import util from '../../utils/util';

var c = [ [ 1, 2, 3, 4, 5, 6, 7, 8 ], [ "室" ], [ 0, 1, 2, 3, 4 ], [ "厅" ], [ 1, 2, 3, 4 ], [ "卫" ] ], u = [ "限女生", "限男生", "限单身", "不限男女" ], d = [ "个人转租", "业主直租", "室友合租", "长租公寓" ], h = [ "个人转租", "业主直租", "长租公寓" ], f = void 0;

Page({
    data: {
        imgUrls: null,
        ProductSort: null,
        Popularity: null,
        airConditioning: null,
        Refrigerator: null,
        washingMachine: null,
        couponlist: null,
        indicatorDots: true,
        autoplay: true,
        scrollLeftpx: 600,
        interval: 5000,
        duration: 1000,
        multiArray: c,
        multiIndex: [ 0, 0, 0, 0, 0, 0 ],
        houseInfo: "",
        bedroom: "",
        price: "",
        tags: [],
        genderLimit: "",
        genderArray: u,
        houseType: "",
        districtName: "",
        houseLoc: "",
        checkInDate: ""
    },
    onLoad: function(e) {
        f = e.rentType;
        console.log(9, f)
        var t = "整租" === f ? h : d;
        this.setData({
            tags: t
        })
    },
    selectType: function(e) {
        var t = e.currentTarget.dataset.type;
        this.setData({
            houseType: t
        });
    },
    onPullDownRefresh: function() {
        this.onLoad();
        wx.stopPullDownRefresh();
    },
    onShareAppMessage: function () {
        return {
            title: '苏州电器小程序',
            path: '/pages/index/index'
        }
    },
    selectAddr: function() {
        var e = this;
        wx.chooseLocation({
            success: function(t) {
                e.setData({
                    districtName: t.name,
                    houseLoc: t
                });
            },
            fail: function(e) {
                e.errMsg.indexOf("auth") > -1 && wx.navigateTo({
                    url: "/pages/auth/index?from=loc"
                });
            }
        });
    },
    inputPrice: function(e) {
        this.setData({
            price: e.detail.value
        });
    },
    bindMultiPickerChange: function(e) {
        var t = e.detail.value, o = t[0], i = t[2], a = t[4], n = c[0][o], s = n + "室" + c[2][i] + "厅" + c[4][a] + "卫";
        this.setData({
            houseInfo: s,
            bedroom: n
        });
    },
    bindPickerChange: function(e) {
        this.setData({
            genderLimit: u[e.detail.value]
        });
    },
    bindDateChange: function(e) {
        this.setData({
            checkInDate: e.detail.value
        });
    },
    goToNext: function(e) {
        var i = this.data;
        var g = {
            rentType: f || "",
            houseType: i.houseType,
            districtName: i.districtName,
            location: i.houseLoc,
            price: Number(i.price),
            houseInfo: i.houseInfo,
            bedroom: i.bedroom,
            genderLimit: i.genderLimit,
            checkInDate: i.checkInDate
        };
        wx.setStorage({
            key: "tempHouseInfo",
            data: g
        }), wx.redirectTo({
            url: "../step4/index"
        });
        
    }
})



