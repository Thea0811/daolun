//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '',
  },

  onLoad: function () {
    var that = this
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/23349080/datapoints?datastream_id=youRenOrNot',
      header: {
        'content-type': 'application/json',
        'api-key': 'hXmpGJwtjjNcM=ZzS2sWImPrc5s='
      },
      success: function (res) {
        console.log(res)      //打印返回的数据
      },

      fail: function (res) {
        console.log("fail!!!")
      },

      complete: function (res) {
        console.log("end")
      }
    })
  },

})