Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = require("../utils/util"), u = require("../assets/libs/av-weapp-min"), t = function(u) {
    var t = u.title, r = u.districtName, n = u.images, o = u.rentType, i = u.houseTags, s = u.refreshedAt;
    return u.title = t || "【" + o + "】" + r, u.image = n && n.length && n[0] + "?imageView/1/w/240/h/180/q/100/format/png" || "", 
    u.houseTags = i && i.slice(0, 4) || [], u.refreshedAt = (0, e.formatDate)(s), u;
};

exports.default = {
    create: function(e) {
        return u.Cloud.run("createHouse", {
            houseData: e
        });
    },
    update: function(e, t) {
        return u.Cloud.run("updateHouse", {
            houseId: e,
            houseData: t
        });
    },
    updateView: function(e) {
        return u.Cloud.run("updateHouseView", {
            houseId: e
        });
    },
    remove: function(e) {
        return u.Cloud.run("removeHouse", {
            houseId: e
        });
    },
    queryLikeStatus: function(e) {
        return u.Cloud.run("queryHouseLikeStatus", {
            houseId: e
        });
    },
    likeHouse: function(e) {
        return u.Cloud.run("likeHouse", {
            houseId: e
        });
    },
    unlikeHouse: function(e) {
        return u.Cloud.run("unlikeHouse", {
            houseId: e
        });
    },
    listMyLike: function(r) {
        return u.Cloud.run("listMyLikeHouse", {
            pageNumber: r
        }).then(function(u) {
            return u.map(function(u) {
                var r = u.targetHouse, n = u.createdAt;
                return r = t(r), r.likedAt = (0, e.formatDate)(n), r;
            });
        });
    },
    listMyView: function(r) {
        return u.Cloud.run("listMyViewHouse", {
            pageNumber: r
        }).then(function(u) {
            return u.map(function(u) {
                var r = u.targetHouse, n = u.createdAt;
                return r = t(r), r.viewedAt = (0, e.formatDate)(n), r;
            });
        });
    },
    listByUser: function(e) {
        return u.Cloud.run("listHouseByUser", {
            userId: e
        }).then(function(e) {
            return e.map(function(e) {
                return t(e);
            });
        });
    },
    listMyPublish: function() {
        return u.Cloud.run("listMyPublish").then(function(e) {
            return e.map(function(e) {
                return t(e);
            });
        });
    },
    listHomeHouse: function(e, r) {
        return u.Cloud.run("listHomeHouse", {
            currCity: e,
            pageNumber: r
        }).then(function(e) {
            return e.map(function(e) {
                return t(e);
            });
        });
    },
    listHouse: function(e, r, n, o, i) {
        return u.Cloud.run("listHouse", {
            currCity: e,
            currLoc: r,
            pageNumber: n,
            rentType: o,
            queryCond: i
        }).then(function(e) {
            return e.map(function(e) {
                return t(e);
            });
        });
    },
    searchByLocation: function(e, r) {
        return u.Cloud.run("listHouseByLoc", {
            location: e,
            pageNumber: r
        }).then(function(e) {
            return e.map(function(e) {
                return t(e);
            });
        });
    },
    listRoomy: function(t, r, n) {
        return u.Cloud.run("listRoomy", {
            currCity: t,
            pageNumber: r,
            location: n
        }).then(function(u) {
            return u.map(function(u) {
                return u.refreshedAt = (0, e.formatDate)(u.refreshedAt), u;
            });
        });
    },
    queryById: function(e) {
        return u.Cloud.run("queryHouseById", {
            houseId: e
        });
    },
    querySubwayByCity: function(e) {
        return u.Cloud.run("querySubwayByCity", {
            city: e
        });
    }
};