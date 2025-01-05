var e = getApp();

Page({
    data: {
        houseDesc: ""
    },
    onLoad: function() {},
    save: function(a) {
        // e.dealFormId(a.detail.formId);
        var t = a.detail.value.houseDesc;
        wx.setStorage({
            key: "tempHouseDesc",
            data: t
        }), wx.navigateBack();
    }
});