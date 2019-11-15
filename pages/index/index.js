Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 被点击当前标签
    currentIndexNav: 0,
    navList: [
      {
        id: 1,
        text: '首页'
      },
      {
        id: 2,
        text: '番剧'
      },
      {
        id: 3,
        text: '国创'
      },
      {
        id: 4,
        text: '音乐'
      },
      {
        id: 5,
        text: '舞蹈'
      },
      {
        id: 6,
        text: '游戏'
      },
      {
        id: 7,
        text: '科技'
      },
      {
        id: 8,
        text: '数码'
      },
      {
        id: 9,
        text: '生活'
      },
      {
        id: 10,
        text: '鬼畜'
      }
    ],
    // 轮播图数据
    swiperData: [
      {
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/banner1.png'
      },
      {
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/banner3.png'
      },
      {
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/banner2.png'
      }
    ],
    // 视频列表数据
    videoList: [
      {
        id: 0,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list1.png',
        desc: '后台配置域名更新中，请参考文档呵呵呵呵呵呵呵呵,后台配置域名更新中，请参考文档呵呵呵呵呵呵呵呵',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 1,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list2.png',
        desc: '前方高能！只需10s！我将从你手中抢走硬币！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 2,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list3.png',
        desc: '喜欢就去追！你的青春只有一次！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 3,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list4.png',
        desc: '后台配置域名更新中，请参考文档呵呵呵呵呵呵呵呵',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 4,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list5.png',
        desc: '前方高能！只需10s！我将从你手中抢走硬币！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 5,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list6.png',
        desc: '喜欢就去追！你的青春只有一次！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 6,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list1.png',
        desc: '后台配置域名更新中，请参考文档呵呵呵呵呵呵呵呵',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 7,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list5.png',
        desc: '前方高能！只需10s！我将从你手中抢走硬币！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 8,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list3.png',
        desc: '喜欢就去追！你的青春只有一次！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 9,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list1.png',
        desc: '后台配置域名更新中，请参考文档呵呵呵呵呵呵呵呵',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 10,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list6.png',
        desc: '前方高能！只需10s！我将从你手中抢走硬币！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 11,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list3.png',
        desc: '喜欢就去追！你的青春只有一次！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 12,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list1.png',
        desc: '后台配置域名更新中，请参考文档呵呵呵呵呵呵呵呵',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 13,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list2.png',
        desc: '前方高能！只需10s！我将从你手中抢走硬币！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      },
      {
        id: 14,
        link: '',
        imgSrc:
          'http://heart.ericyang.xyz/list4.png',
        desc: '喜欢就去追！你的青春只有一次！',
        playCount: '24.9万',
        commentCount: '1345',
        videoSrc: '../../video/1.mp4'
      }
    ]
  },
  // 点击首页导航按钮
  activeNav(e) {
    this.setData({
      currentIndexNav: e.target.dataset.index
    })
  },
  // 获取视频列表数据
  getVideoList() {
    wx.request({
      url:
        'https://api.bilibili.com/x/web-interface/ranking?rid=0&day=3&jsonp=jsonp',
      success: result => {
        console.log(result)
      },
      fail: () => {},
      complete: () => {}
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.getVideoList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {}
})
