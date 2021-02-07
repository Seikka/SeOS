var urlStore = 'https://os.52msr.cn/res/';
// var urlStore = 'http://127.0.0.1:8080';
function getAppDataTemplate () {
  return {
    "addressBar": false,
    "autoRun": 0,
    "background": false,
    "badge": 0,
    "desc": '',
    "icon": {
      "type": "fa",
      "content": "wpforms",
      "bg": '#38ff83'
    },
    "openMode": "normal",
    "plugin": false,
    "position": {
      "autoOffset": true,
      "left": true,
      "top": true,
      "x": "x*0.05",
      "y": "y*0.05"
    },
    "version":"1.0.0",
    "poweredBy": "",
    "resizable": true,
    "single": false,
    "size": {
      "height": "y*0.8-80",
      "width": "x*0.8"
    },
    "title": "",
    "url": "",
    "customTile": "",
    "urlRandomToken": true
  };
}
YLApp.onReady(function () {
  var apps = {
    '/apps/meos' : {
      title: 'MeOS手机版',
      desc: 'SeOS官方出品。实时同步，分享你的云桌面，全平台兼容。',
      open: _.merge(getAppDataTemplate(), {
        title: 'MeOS云系统手机版',
        url: 'http://os.52msr.cn/mobile',
        "icon": {
          "type": "fa",
          "content": "cloud",
          "bg": "#000"
        },
      }),
      setup: {
        apps: {
          'meos' : _.merge(getAppDataTemplate(), {
            title: 'MeOS',
            url: 'http://os.52msr.cn/mobile',
            "icon": {
              "type": "fa",
              "content": "cloud",
              "bg": "#000"
            },
            desc: 'SeOS官方出品。实时同步，分享你的云桌面，全平台兼容。',
            "poweredBy": "Seikka",
          }),
        },
        shortcuts: ['meos'],
        menu: { 'meos':  {
            "app": "meos",
            "title": "MeOS",
            "params": {},
            "hash": ""
          },
        },
      }
    },
    '/apps/ps' : {
      title: 'PhotoShop',
      desc: '在线PS',
      open: _.merge(getAppDataTemplate(), {
        title: 'PhotoShop',
        url: 'https://www.jq22.com/demo/jqueryps202002072229/index.html',
        "icon": {
          "type": "img",
          "content": "//www.jq22.com/demo/jqueryps202002072229/favicon.ico",
          "bg": "#fff0"
        },
      }),
      setup: {
        apps: {
          'ps' : _.merge(getAppDataTemplate(), {
            title: 'PhotoShop',
            url: 'https://www.jq22.com/demo/jqueryps202002072229/index.html',
            "icon": {
              "type": "img",
              "content": "//www.jq22.com/demo/jqueryps202002072229/favicon.ico",
              "bg": "#fff0"
            },
            desc: '在线PS',
            "poweredBy": "Seikka",
          }),
        },
        shortcuts: ['ps'],
        menu: { 'ps':  {
            "app": "ps",
            "title": "PhotoShop",
            "params": {},
            "hash": ""
          },
        },
      }
    },
    '/apps/baidu' : {
      title: '百度一下',
      desc: '百度一下，你就知道。',
      open: _.merge(getAppDataTemplate(), {
        title: '百度一下',
        url: 'https://www.baidu.com',
        "icon": {
          "type": "fa",
          "content": "search",
          "bg": "#1588F5"
        },
      }),
      setup: {
        apps: {
          'baidu' : _.merge(getAppDataTemplate(), {
            title: '百度一下',
            url: 'https://www.baidu.com',
            "icon": {
              "type": "fa",
              "content": "search",
              "bg": "#1588F5"
            },
            desc: '百度一下，你就知道。',
            "poweredBy": "baidu",
          }),
        },
        shortcuts: ['baidu'],
        menu: { 'baidu':  {
            "app": "baidu",
            "title": "百度一下",
            "params": {},
            "hash": ""
          },
        },
      }
    },
    '/apps/calculator' : {
      title: '科学计算器',
      desc: '这是一款jquery实现简单计算器代码。该jquery计算器使用 Bootstrap 4进行布局，并结合math.js数学库，实现简单的加减乘除和平方，开方等数学计算。',
      open: _.merge(getAppDataTemplate(), {
        title: '科学计算器',
        url: 'https://appstore.ylui.yuri2.cn/apps/calculator/index.html',
        "icon": {
          "type": "fa",
          "content": "calculator",
          "bg": "#375980"
        },
        "size": {
          "height": "496",
          "width": "324"
        },
      }),
      setup: {
        apps: {
          'calculator' : _.merge(getAppDataTemplate(), {
            title: '科学计算器',
            url: 'https://appstore.ylui.yuri2.cn/apps/calculator/index.html',
            "icon": {
              "type": "fa",
              "content": "calculator",
              "bg": "#375980"
            },
            "size": {
              "height": "496",
              "width": "324"
            },
            "desc": "这是一款jquery实现简单计算器代码。该jquery计算器使用 Bootstrap 4进行布局，并结合math.js数学库，实现简单的加减乘除和平方，开方等数学计算。",
            "poweredBy": "素材来源于网络",
          }),
        },
        shortcuts: ['calculator'],
        menu: { 'calculator':  {
            "app": "calculator",
            "title": "科学计算器",
            "params": {},
            "hash": ""
          },
        },
      }
    },
    '/apps/qrcode' : {
      title: '二维码生成器',
      desc: '这是一款可自定义logo的jQuery生成二维码插件。该插件可以实现二维码的生成，定义在二维码上显示的logo，以及logo的位置，文字颜色、字体等多种属性，非常实用。',
      open: _.merge(getAppDataTemplate(), {
        title: '二维码生成器',
        url: 'https://appstore.ylui.yuri2.cn/apps/qrcode/index.html',
        "icon": {
          "type": "fa",
          "content": "qrcode",
          "bg": "#adadad"
        },
      }),
      setup: {
        apps: {
          'qrcode' : _.merge(getAppDataTemplate(), {
            title: '二维码生成器',
            url: 'https://appstore.ylui.yuri2.cn/qrcode/index.html',
            "desc": "这是一款可自定义logo的jQuery生成二维码插件。该插件可以实现二维码的生成，定义在二维码上显示的logo，以及logo的位置，文字颜色、字体等多种属性，非常实用。",
            "poweredBy": "素材来源于网络",
            "icon": {
              "type": "fa",
              "content": "qrcode",
              "bg": "#adadad"
            },
          }),
        },
        shortcuts: ['qrcode'],
        menu: { 'qrcode':  {
            "app": "qrcode",
            "title": "二维码生成器",
            "params": {},
            "hash": ""
          },
        },
      }
    },
    '/apps/gen-password' : {
      title: '随机字符串生成器',
      desc: '一款自定义规则生成密码/随机字符串的小工具',
      open: _.merge(getAppDataTemplate(), {
        title: '随机字符串生成器',
        url: 'https://appstore.ylui.yuri2.cn/apps/gen-password/index.html',
        "icon": {
          "type": "fa",
          "content": "qrcode",
          "bg": "#adadad"
        },
      }),
      setup: {
        apps: {
          'gen-password' : _.merge(getAppDataTemplate(), {
            title: '随机字符串生成器',
            url: 'https://appstore.ylui.yuri2.cn/apps/gen-password/index.html',
            "desc": "一款自定义规则生成密码/随机字符串的小工具。",
            "poweredBy": "素材来自小影的工具箱 http://tool.c7sky.com/",
            "icon": {
              "type": "fa",
              "content": "gg-circle",
              "bg": "#3af0f0"
            },
          }),
        },
        shortcuts: ['gen-password'],
        menu: { 'gen-password':  {
            "app": "gen-password",
            "title": "随机字符串生成器",
            "params": {},
            "hash": ""
          },
        },
      }
    },
    '/apps/starwars' : {
      title: '星球大战动态壁纸',
      desc: '一款精致的纯CSS动态壁纸，星战迷不容错过。',
      open: _.merge(getAppDataTemplate(), {
        title: '星球大战动态壁纸',
        url: 'https://appstore.ylui.yuri2.cn/apps/starwars/index.html',
        "icon": {
          "type": "fa",
          "content": "image",
          "bg": "#461e38"
        },
      }),
      setup: {
        apps: {
          'starwars' : _.merge(getAppDataTemplate(), {
            title: '星球大战动态壁纸',
            url: 'https://appstore.ylui.yuri2.cn/apps/starwars/index.html',
            "desc": "一款精致的纯CSS动态壁纸，星战迷不容错过。",
            "poweredBy": "素材来自于网络",
            "plugin": true,
            "position": {
              "autoOffset": false,
              "left": true,
              "top": true,
              "x": "-2",
              "y": "-2"
            },
            "resizable": false,
            "single": true,
            "size": {
              "height": "y+4",
              "width": "x+4"
            },
            "urlRandomToken": false,
            "background": true,
            "addressBar": false,
            "autoRun": 9,
            "icon": {
              "type": "fa",
              "content": "image",
              "bg": "#461e38"
            },
          }),
        },
        shortcuts: ['starwars'],
        menu: { 'starwars':  {
            "app": "starwars",
            "title": "星球大战动态壁纸",
            "params": {},
            "hash": ""
          },
        },
      }
    },
    '/apps/triangle-blue' : {
      title: '蓝色动感三角动态壁纸',
      desc: '这是一款科技感十足的三角形平面二维动画特效动态壁纸。',
      open: _.merge(getAppDataTemplate(), {
        title: '蓝色动感三角动态壁纸',
        url: 'https://appstore.ylui.yuri2.cn/apps/triangle-blue/index.html',
        "icon": {
          "type": "fa",
          "content": "image",
          "bg": "#461e38"
        },
      }),
      setup: {
        apps: {
          'triangle-blue' : _.merge(getAppDataTemplate(), {
            title: '蓝色动感三角动态壁纸',
            url: 'https://appstore.ylui.yuri2.cn/apps/triangle-blue/index.html',
            "desc": "这是一款科技感十足的三角形平面二维动画特效动态壁纸。",
            "poweredBy": "素材来自于网络",
            "plugin": true,
            "position": {
              "autoOffset": false,
              "left": true,
              "top": true,
              "x": "-2",
              "y": "-2"
            },
            "resizable": false,
            "single": true,
            "size": {
              "height": "y+4",
              "width": "x+4",
            },
            "urlRandomToken": false,
            "background": true,
            "addressBar": false,
            "autoRun": 9,
            "icon": {
              "type": "fa",
              "content": "image",
              "bg": "#461e38"
            },
          }),
        },
        shortcuts: ['triangle-blue'],
        menu: { 'triangle-blue':  {
            "app": "triangle-blue",
            "title": "蓝色动感三角动态壁纸",
            "params": {},
            "hash": ""
          },
        },
      }
    },
  };
  var eShop = $('.page-shop');
  for(var path in apps) {
    (function () {
      var appData = apps[path];
      var app = $('<div class="app">');
      var cover = $('<img class="cover">');
      var title = $('<div class="title">');
      var desc = $('<div class="desc">');
      var btns = $('<div class="btn-group">\n' +
        '        <div class="open">打开</div>\n' +
        '        <div class="setup">安装</div>\n' +
        '      </div>');
      cover.attr('src', path + '/cover.png');
      title.text(appData.title);
      desc.text(appData.desc);
      app.append(cover, title, desc, btns);
      app.find('.open').click(function () {
        YLApp.eval('open', appData.open)
      });
      app.find('.setup').click(function () {
        YLApp.eval('setup', appData.setup)
      });
      eShop.append(app);
    }())
  }
});
