
var util = require('../../../../utils/util.js');
var cityData = require('../../../../utils/citydata.js');
const host = require('../../../../config').host;
const placeArray = cityData.cityData;
var id = 0;

Page({
	data: {
		name: '',
        tel: '',
        detailed: '',
        citys: '',
        status: 0,
        isCity: false,
        placeArray: '',
        province: '',
        pIndex: 0,
        city: '',
        cIndex: 0,
        area: '',
        aIndex: 0
	},
  	onLoad: function (e) {
        wx.showToast({title: '加载中', icon: 'loading'});
        let that = this;
        let api_token = wx.getStorageSync('api_token');
        id = e.id;
        wx.request({
            url: `${host}api/address/store`,
            data: {
                api_token: api_token,
                id: id
            },
            method: 'POST',
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            success: function(res) {
                setTimeout(function() {
                    wx.hideToast();
                },200);
                that.setData({
                    name: res.data.name,
                    tel: res.data.tel,
                    detailed: res.data.detailed,
                    citys: `${res.data.province} ${res.data.city} ${res.data.area}`,
                    status: res.data.status,
                    province: res.data.province,
                    city: res.data.city,
                    area: res.data.area
                });
            }
        });
    },
    saveCity: function() {
        let that = this;
        this.setData({
            isCity: true,
            placeArray: placeArray
        })
        for (let i = 0; i < placeArray.length; i++) {
            if (placeArray[i].name == that.data.province) {
                that.setData({
                    pIndex: [i]
                });
                for (let ii = 0; ii < placeArray[i].city.length; ii++) {
                    if (placeArray[i].city[ii].name == that.data.city) {
                        that.setData({
                            cIndex: [ii]
                        });
                        for (let iii = 0; iii < placeArray[i].city[ii].area.length; iii++) {
                            if (placeArray[i].city[ii].area[iii] == that.data.area) {
                                that.setData({
                                    aIndex: [iii]
                                });
                            }
                        }
                    }
                }
            }
        }
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
    changeProvince2: function(e) {
        let val = e.detail.value;
        this.setData({
            pIndex: val,
            cIndex: 0,
            aIndex: 0,
            province: placeArray[val].name,
            city: placeArray[val].city[0].name,
            area: placeArray[val].city[0].area[0]
        })
    },
    changeCity2: function(e) {
        let val = e.detail.value;
        this.setData({
            cIndex: val,
            aIndex: 0,
            city: placeArray[this.data.pIndex].city[val].name,
            area: placeArray[this.data.pIndex].city[val].area[0]
        })
    },
    changeArea2: function(e) {
        let val = e.detail.value;
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
        formData.id         = id;
        formData.province   = this.data.province;
        formData.city       = this.data.city;
        formData.area       = this.data.area;
        formData.status     = this.data.status;

        wx.request({
            url: `${host}api/address/edit`,
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
