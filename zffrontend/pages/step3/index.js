
import WxParse from '../../wxParse/wxParse';
import util from '../../utils/util';
var c = [ [ 1, 2, 3, 4, 5, 6, 7, 8 ], [ "室" ], [ 0, 1, 2, 3, 4 ], [ "厅" ], [ 1, 2, 3, 4 ], [ "卫" ] ], u = [ "限女生", "限男生", "限单身", "不限男女" ];
let formData = {};

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
        genderLimit: "",
        genderArray: u,
        houseDesc: "",
        rentType: ""
    },
    onLoad: function(e) {
        var k = this;
        k.setData({
            rentType: e.rentType
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
    inputDesc: function() {
        wx.navigateTo({
            url: "../desc/index"
        });
    },
    inputPrice: function(e) {
        this.setData({
            price: e.detail.value
        });
    },
    formSubmit: function(e) {
        formData.title = e.detail.value.title;
        formData.districtName = this.data.districtName;
        formData.price = this.data.price;
        formData.houseInfo = this.data.houseInfo;
        formData.genderLimit = this.data.genderLimit;
        formData.checkInDate = this.data.checkInDate;
        formData.houseDesc = this.data.houseDesc;
        formData.rentType = this.data.rentType;
        util.wxRequest('api/content/creates', formData, 'POST').then(res => {
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
})



