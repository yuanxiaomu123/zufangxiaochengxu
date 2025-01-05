
import WxParse from '../../wxParse/wxParse';
import util from '../../utils/util';
const host = require('../../config').host;

var o = void 0;var e = "";var s = "";

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
        videoPath: "",
        imgPaths: [],
        isUploading: !1
    },
    onLoad: function(a) {
        o = a.rentType;
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
    addVideo: function() {
        var a = this;
        wx.chooseVideo({
            sourceType: [ "album", "camera" ],
            compressed: !0,
            maxDuration: 15,
            camera: "back",
            success: function(t) {
                wx.showLoading({
                    title: "上传中..."
                });
                var i = t.tempFilePath;
                e.default.uploadVideo([ i ]).then(function(t) {
                    wx.hideLoading();
                    var e = t && t.map(function(a) {
                        return a.url();
                    })[0] || "";
                    a.setData({
                        videoPath: e
                    });
                }).catch(function(a) {
                    wx.hideLoading(), wx.showToast({
                        title: "上传失败",
                        icon: "none",
                        duration: 1500
                    });
                });
            }
        });
    },
    addImage: function(e) {
        let that = this　　//坑1
        let opt = e.currentTarget.dataset.opt;
        wx.chooseImage({
            count: 1, // 默认1
            sizeType: ['compressed'],
            sourceType: [opt], 
            success: function (res) {
                let tempFilePaths = res.tempFilePaths;
                that.setData({
                    loading: true
                });
                wx.showLoading({
                    title: '上传中..',
                    mask: true
                })
                wx.uploadFile({
                    url: `${host}api/zufang/uploadfile`,
                    formData: {
                        status: that.data.status
                    },
                    filePath: tempFilePaths[0],
                    name: 'file',
                    header: {"Content-Type": "multipart/form-data"},
                    success: function (res) {
                        let obj = JSON.parse(res.data);
                        if (obj.code == 200) {
                            if(obj.status == 1) {
                                wx.hideLoading()
                                that.setData({
                                    idcardpositive: obj.img,
                                    isPhoto: false,
                                    loadingHide: false,
                                    loading: false
                                });
                            }else if(obj.status == 2) {
                                wx.hideLoading()
                                that.setData({
                                    positivenegative: obj.img,
                                    isPhoto: false,
                                    loadingHide: false,
                                    loading: false
                                });
                            }
                            
                        }
                    }
                })
            }
        })
    },
    removeVideo: function(a) {
        this.setData({
            videoPath: ""
        });
    },
    viewImgs: function() {
        wx.navigateTo({
            url: "../imgView/index"
        });
    },
    goToNext: function(a) {
        wx.setStorage({
            key: "tempHouseImgPaths",
            data: {
                videoPath: e,
                imgPaths: s
            }
        })
        // i.dealFormId(a.detail.formId);
        // var t = this.data, e = t.videoPath, s = t.imgPaths;
        // s.length ? (wx.setStorage({
        //     key: "tempHouseImgPaths",
        //     data: {
        //         videoPath: e,
        //         imgPaths: s
        //     }
        // }), wx.hideLoading(), i.globalData.videoPath = e, i.globalData.imgPaths = s, wx.redirectTo({
        //     url: "../step2/index"
        // })) : wx.showToast({
        //     title: "至少上传一张照片",
        //     icon: "none",
        //     duration: 1500
        // });
        wx.navigateTo({
            url: "../step2/index?rentType=" + o
        });
    }
})



