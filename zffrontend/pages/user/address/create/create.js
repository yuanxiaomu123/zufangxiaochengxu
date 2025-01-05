
var WxParse = require('../../../../wxParse/wxParse.js');
var util = require('../../../../utils/util.js');
const host = require('../../../../config').host;
var cityData = require('../../../../utils/citydata.js');
const placeArray = cityData.cityData;

Page({
	data: {
		name: '',
        tel: '',
        detailed: '',
        citys: '',
        status: 0,
        isCity: false,
        placeArray: placeArray,
        province: placeArray[0].name,
        pIndex: 0,
        city: placeArray[0].city[0].name,
        cIndex: 0,
        area: placeArray[0].city[0].area[0],
        aIndex: 0
	},
  	onLoad: function () {

    },
    saveCity: function() {
        this.setData({
            isCity: true
        })
    },
    cancel: function() {
        this.setData({
            isCity: false
        })
    },
    determine: function() {
        let citys = `${this.data.province} ${this.data.city} ${this.data.area}`;
        this.setData({
            citys: citys,
            isCity: false
        })
    },
    switchChange: function (e){
        if (e.detail.value) {
            this.setData({
                status: 1
            })
        } else {
            this.setData({
                status: 0
            })
        }
    },
    changeProvince2: function(e){
        let val = e.detail.value
        this.setData({
            pIndex: val,
            cIndex: 0,
            aIndex: 0,
            province: placeArray[val].name,
            city: placeArray[val].city[0].name,
            area: placeArray[val].city[0].area[0]
        })
    },
    changeCity2: function(e){
        let val = e.detail.value
        this.setData({
            cIndex: val,
            aIndex: 0,
            city: placeArray[this.data.pIndex].city[val].name,
            area: placeArray[this.data.pIndex].city[val].area[0]
        })
    },
    changeArea2: function(e){
        let val = e.detail.value
        this.setData({
            aIndex: val,
            area: placeArray[this.data.pIndex].city[this.data.cIndex].area[val]
        })
    },
    formSubmit: function(e) {
        let name = e.detail.value.name;
        let tel = e.detail.value.tel;
        let citys = e.detail.value.citys;
        let detailed = e.detail.value.detailed;
        let formData = e.detail.value;
        let api_token = wx.getStorageSync('api_token');
    
        if (name.replace(/ /g,'').length == 0) {
            wx.showToast({
				title: '请填写收件人姓名！'
			});
			return;
        }
        if (tel.replace(/ /g,'').length == 0) {
            wx.showToast({
				title: '请填写手机号码！'
			});
			return;
        }
        if (citys.replace(/ /g,'').length == 0) {
            wx.showToast({
				title: '请选择所在地区！'
			});
			return;
        }
        if (detailed.replace(/ /g,'').length == 0) {
            wx.showToast({
				title: '请填写收货地址！'
			});
			return;
        }

        formData.api_token  = api_token;
        formData.province   = this.data.province;
        formData.city       = this.data.city;
        formData.area       = this.data.area;
        formData.status     = this.data.status;

        wx.request({
            url: `${host}api/address/create`,
            data: formData,
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            method: "POST",
            success: function(res) {
                if (res.data.code == 200) { 
                    wx.showToast({
                        title: '添加成功',
                        icon: 'success'
                    })
                    wx.redirectTo({
                        url: '../list/list'
                    })
                }
            }
        });

    },
    onReachBottom: function() {

    }
   
    
})
