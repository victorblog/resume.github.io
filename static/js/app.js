(function(t) {
        function e(e) {
            for (var n, o, c = e[0], l = e[1], r = e[2], f = 0, d = []; f < c.length; f++)
                o = c[f],
                Object.prototype.hasOwnProperty.call(s, o) && s[o] && d.push(s[o][0]),
                    s[o] = 0;
            for (n in l)
                Object.prototype.hasOwnProperty.call(l, n) && (t[n] = l[n]);
            u && u(e);
            while (d.length)
                d.shift()();
            return i.push.apply(i, r || []),
                a()
        }
        function a() {
            for (var t, e = 0; e < i.length; e++) {
                for (var a = i[e], n = !0, c = 1; c < a.length; c++) {
                    var l = a[c];
                    0 !== s[l] && (n = !1)
                }
                n && (i.splice(e--, 1),
                    t = o(o.s = a[0]))
            }
            return t
        }
        var n = {}
            , s = {
            app: 0
        }
            , i = [];
        function o(e) {
            if (n[e])
                return n[e].exports;
            var a = n[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return t[e].call(a.exports, a, a.exports, o),
                a.l = !0,
                a.exports
        }
        o.m = t,
            o.c = n,
            o.d = function(t, e, a) {
                o.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: a
                })
            }
            ,
            o.r = function(t) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
            }
            ,
            o.t = function(t, e) {
                if (1 & e && (t = o(t)),
                8 & e)
                    return t;
                if (4 & e && "object" === typeof t && t && t.__esModule)
                    return t;
                var a = Object.create(null);
                if (o.r(a),
                    Object.defineProperty(a, "default", {
                        enumerable: !0,
                        value: t
                    }),
                2 & e && "string" != typeof t)
                    for (var n in t)
                        o.d(a, n, function(e) {
                            return t[e]
                        }
                            .bind(null, n));
                return a
            }
            ,
            o.n = function(t) {
                var e = t && t.__esModule ? function() {
                        return t["default"]
                    }
                    : function() {
                        return t
                    }
                ;
                return o.d(e, "a", e),
                    e
            }
            ,
            o.o = function(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }
            ,
            o.p = "/xlong-resume/";
        var c = window["webpackJsonp"] = window["webpackJsonp"] || []
            , l = c.push.bind(c);
        c.push = e,
            c = c.slice();
        for (var r = 0; r < c.length; r++)
            e(c[r]);
        var u = l;
        i.push([0, "chunk-vendors"]),
            a()
    }
)({
    0: function(t, e, a) {
        t.exports = a("56d7")
    },
    "19f6": function(t, e, a) {
        t.exports = a.p + "static/img/2.jpg"
    },
    "1a6b": function(t, e, a) {},
    "1ec1": function(t, e, a) {
        t.exports = a.p + "static/img/9.jpg"
    },
    "1ecc": function(t, e, a) {},
    "213c": function(t, e, a) {},
    "2dfd": function(t, e, a) {
        "use strict";
        var n = a("a60d")
            , s = a.n(n);
        s.a
    },
    "2e57": function(t, e, a) {},
    "37b4": function(t, e, a) {
        t.exports = a.p + "static/img/8.jpg"
    },
    4578: function(t, e, a) {},
    "56d7": function(t, e, a) {
        "use strict";
        a.r(e);
        a("cadf"),
            a("551c"),
            a("f751"),
            a("097d");
        var n = a("2b0e")
            , s = function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("div", {
                staticClass: "wrapper",
                attrs: {
                    id: "app"
                }
            }, [a("Loading"), a("SideBar", {
                attrs: {
                    avatar: t.avatar
                }
            }), a("About", {
                attrs: {
                    avatar: t.avatar
                }
            }), a("Resume"), a("Portfolio"), a("Contact"), a("Footer")], 1)
        }
            , i = []
            , o = function() {
            var t = this
                , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
            , c = [function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("div", {
                attrs: {
                    id: "loading"
                }
            }, [a("div", {
                attrs: {
                    id: "loading-center"
                }
            }, [a("div", {
                attrs: {
                    id: "loading-center-absolute"
                }
            }, [a("div", {
                attrs: {
                    id: "object"
                }
            })])])])
        }
        ]
            , l = (a("d88e"),
            a("2877"))
            , r = {}
            , u = Object(l["a"])(r, o, c, !1, null, "95e23fe2", null)
            , f = u.exports
            , d = function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("nav", {
                attrs: {
                    id: "left-nav"
                }
            }, [a("div", {
                staticClass: "logo"
            }, [a("img", {
                attrs: {
                    src: t.avatar
                }
            })]), t._m(0), t._m(1)])
        }
            , m = [function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("div", {
                staticClass: "menu",
                attrs: {
                    id: "menu"
                }
            }, [a("span", {
                staticClass: "menu-global menu-top"
            }), a("span", {
                staticClass: "menu-global menu-middle"
            }), a("span", {
                staticClass: "menu-global menu-bottom"
            })])
        }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("ul", {
                    staticClass: "nav",
                    attrs: {
                        id: "nav"
                    }
                }, [a("li", [a("a", {
                    staticClass: "smoothscroll",
                    attrs: {
                        href: "#about"
                    }
                }, [a("i", {
                    staticClass: "iconfont ic-icon35"
                }), t._v("个人介绍\n\t\t\t")])]), a("li", [a("a", {
                    staticClass: "smoothscroll",
                    attrs: {
                        href: "#resume"
                    }
                }, [a("i", {
                    staticClass: "iconfont ic-file-text"
                }), t._v("简历详情\n\t\t\t")])]), a("li", [a("a", {
                    staticClass: "smoothscroll",
                    attrs: {
                        href: "#portfolio"
                    }
                }, [a("i", {
                    staticClass: "iconfont ic-gongzuojingyan"
                }), t._v("作品集\n\t\t\t")])]), a("li", [a("a", {
                    staticClass: "smoothscroll",
                    attrs: {
                        href: "#contact"
                    }
                }, [a("i", {
                    staticClass: "iconfont ic-email1"
                }), t._v("联系方式\n\t\t\t")])])])
            }
        ]
            , p = {
            props: {
                avatar: {
                    type: String,
                    default: a("951a")
                }
            }
        }
            , v = p
            , _ = (a("d278"),
            Object(l["a"])(v, d, m, !1, null, "622d2083", null))
            , h = _.exports
            , w = function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("section", {
                attrs: {
                    id: "about"
                }
            }, [a("div", {
                staticClass: "row bio-container"
            }, [a("div", {
                staticClass: "twelve columns bio-inner"
            }, [a("div", {
                staticClass: "six columns bio-left"
            }, [a("div", {
                staticClass: "pp-container"
            }, [a("img", {
                staticClass: "profile-pic wow zoomIn",
                attrs: {
                    src: t.avatar
                }
            }), a("h2", [t._v("罗永梅")]), a("p", [t._v("前端开发工程师 / 设计爱好者")])]), t._m(0)]), t._m(1)])])])
        }
            , g = [function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("div", {
                attrs: {
                    id: "social"
                }
            }, [a("div", {
                staticClass: "row social-container"
            }, [a("ul", {
                staticClass: "social"
            }, [a("li", [a("a", {
                attrs: {
                    href: "https://github.com/xLong1029",
                    target: "_blank"
                }
            }, [a("i", {
                staticClass: "iconfont ic-githubb"
            })])]), a("li", [a("a", {
                attrs: {
                    href: "http://xlong.zcool.com.cn",
                    target: "_blank"
                }
            }, [a("i", {
                staticClass: "iconfont ic-zcool"
            })])]), a("li", [a("a", {
                attrs: {
                    href: "https://i.ui.cn/ucenter/358591.html",
                    target: "_blank"
                }
            }, [a("i", {
                staticClass: "iconfont ic-uicn"
            })])])])])])
        }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "six columns main-col wow fadeIn"
                }, [a("div", {
                    staticClass: "arrow-left"
                }), a("p", [t._v("\n\t\t\t\t\tHi，我是罗永梅，网络别名：xLong / xLong1029。\n\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t我是一个Web前端开发工程师，业余爱好字体设计。我学习能力强，喜欢挑战，工作负责，善于分析总结，善于沟通，对新技术有前瞻性。\n\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t我精通HTML、CSS、JavasScript/jQuery等前端技术；\n\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t熟悉但不限于Bootstrap、Vue.、Egg、Angular等前端框架；\n\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t擅长使用Element、Vant、iView、Ant Design等UI框架；\n\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t熟悉MVVM、MVC模式开发，倾向于前后端分离的开发模式；\n\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t熟练运用Svn、Git进行版本控制；\n\t\t\t\t")]), a("p", [t._v("\n\t\t\t\t\t了解Sql Server、SQLite等数据库，了解微信小程序开发；\n\t\t\t\t")]), a("div", {
                    staticClass: "row"
                }, [a("div", {
                    staticClass: "six columns download"
                }, [a("a", {
                    staticClass: "button",
                    attrs: {
                        href: "#contact"
                    }
                }, [a("i", {
                    staticClass: "iconfont ic-phone"
                }), t._v("与我联系\n\t\t\t\t\t\t")]), a("a", {
                    staticClass: "button",
                    attrs: {
                        href: "https://github.com/xLong1029/xlong-resume/blob/gh-pages/file/罗永梅_简历（2019）.doc?raw=true",
                        target: "_blank"
                    }
                }, [a("i", {
                    staticClass: "iconfont ic-download-f"
                }), t._v("下载简历\n\t\t\t\t\t\t")])])])])
            }
        ]
            , C = {
            props: {
                avatar: {
                    type: String,
                    default: a("951a")
                }
            }
        }
            , b = C
            , x = (a("d98e"),
            Object(l["a"])(b, w, g, !1, null, null, null))
            , y = x.exports
            , j = function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("section", {
                attrs: {
                    id: "resume"
                }
            }, [a("h1", {
                staticClass: "section-title wow fadeInDown"
            }, [t._v("简历详情 / Resume")]), a("div", {
                staticClass: "row work"
            }, [t._m(0), a("div", {
                staticClass: "nine columns main-col"
            }, [a("div", {
                staticClass: "work-timeline"
            }, [a("ul", {
                staticClass: "timeline"
            }, t._l(t.experience, (function(e, n) {
                    return a("li", {
                        key: n,
                        staticClass: "timeline-event"
                    }, [a("label", {
                        staticClass: "timeline-event-icon"
                    }), a("div", {
                        staticClass: "timeline-event-copy"
                    }, [a("p", {
                        staticClass: "timeline-event-thumbnail"
                    }, [t._v(t._s(e.workTime))]), a("h3", [t._v(t._s(e.company))]), a("h4", [t._v(t._s(e.job))]), t._l(e.jobContent, (function(e, n) {
                            return a("p", {
                                key: n
                            }, [t._v(t._s(n + 1 + "." + e))])
                        }
                    ))], 2)])
                }
            )), 0)])])]), t._m(1), t._m(2), t._m(3)])
        }
            , k = [function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("div", {
                staticClass: "three columns header-col"
            }, [a("h2", [a("span", [t._v("工作经验")])])])
        }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "row skill"
                }, [a("div", {
                    staticClass: "three columns header-col"
                }, [a("h2", [a("span", [t._v("技能熟练度")])])]), a("div", {
                    staticClass: "nine columns main-col"
                }, [a("p", [t._v("能独立完成一个小型项目开发，包括但不限于PC页面、WebApp、企业CMS等开发。")]), a("div", {
                    staticClass: "bars"
                }, [a("ul", {
                    staticClass: "skills"
                }, [a("li", [a("span", {
                    staticClass: "bar-expand css wow fadeInLeft"
                }), a("em", [t._v("CSS")])]), a("li", [a("span", {
                    staticClass: "bar-expand html5 wow fadeInLeft"
                }), a("em", [t._v("HTML5")])]), a("li", [a("span", {
                    staticClass: "bar-expand jquery wow fadeInLeft"
                }), a("em", [t._v("JavaScript / jQuery")])]), a("li", [a("span", {
                    staticClass: "bar-expand vuejs wow fadeInLeft"
                }), a("em", [t._v("Vue")])]), a("li", [a("span", {
                    staticClass: "bar-expand eggjs wow fadeInLeft"
                }), a("em", [t._v("Egg")])]), a("li", [a("span", {
                    staticClass: "bar-expand illustrator wow fadeInLeft"
                }), a("em", [t._v("Illustrator")])])])])])])
            }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "row education"
                }, [a("div", {
                    staticClass: "three columns header-col"
                }, [a("h2", [a("span", [t._v("教育")])])]), a("div", {
                    staticClass: "nine columns main-col"
                }, [a("p", [t._v("\n\t\t\t\t2014年毕业于 国立华侨大学 计算机科学与技术（数字媒体技术方向） 本科专业\n\t\t\t")])])])
            }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "row awards"
                }, [a("div", {
                    staticClass: "three columns header-col"
                }, [a("h2", [a("span", [t._v("其他")])])]), a("div", {
                    staticClass: "nine columns main-col"
                }, [a("div", {
                    staticClass: "award-list"
                }, [a("ul", [a("li", {
                    staticClass: "wow fadeIn"
                }, [a("span", [a("i", {
                    staticClass: "iconfont ic-certificate pull-left"
                })]), a("h3", [t._v("证书")]), a("h4", [t._v("英语专业六级")]), a("h4", [t._v("计算机助理工程师")])]), a("li", {
                    staticClass: "wow fadeIn"
                }, [a("span", [a("i", {
                    staticClass: "iconfont ic-bisai pull-left"
                })]), a("h3", [t._v("赛事")]), a("h4", [t._v("曾参与《乱入！Sonkwo形象补全计划 - 杉果吉祥物征集大赛》")]), a("h4", [t._v("曾参与《逸想天开 － 天逸笔记本卡通形象设计大赛》")])]), a("li", {
                    staticClass: "wow fadeIn"
                }, [a("span", [a("i", {
                    staticClass: "iconfont ic-love pull-left"
                })]), a("h3", [t._v("公益")]), a("h4", [t._v("参与设计免费公益字体——站酷文艺体")])])])])])])
            }
        ]
            , E = {
            data: function() {
                return {
                    experience: [{
                        company: "润建通信股份有限公司",
                        workTime: "2019/05 - 至今",
                        job: "Web前端开发工程师",
                        jobContent: ["负责研发并维护中国铁塔广西分公司社会资源管理平台，通过GIS地图获取杆塔资源方位，实时监控杆塔资源变化", "负责研发并维护智慧城市资源生态平台，通过GIS地图获取灯杆方位，实时监控灯杆变化，及时派送工单予工人维护", "负责研发并维护广西壮族自治区住房与城乡建设云平台，实现住建厅各门户统一登陆和、监控大屏展示和数据共享", "负责研发广西生活污水垃圾处理设施建设运营管理信息平台，主要负责动态表单功能和自定义模板配置"]
                    }, {
                        company: "广西华建信息科技股份公司",
                        workTime: "2017/05 - 2019/05",
                        job: "Web前端开发工程师",
                        jobContent: ["负责研发建筑材料智能选材平台（PC及Mobile端）、项目申报平台（爬取项目信息，仅供内部员工使用）", "自主创新：基于Egg + Vue + Webpack 开发多页面和单页面服务端客户端渲染的企业CMS系统，可用于企业网站，微信微网站的实现。前台页面可响应式匹配各种移动设备", "负责设计吉祥物和表情包"]
                    }, {
                        company: "南宁云海风网络科技有限公司",
                        workTime: "2016/07 - 2017/03",
                        job: "Web前端项目经理",
                        jobContent: ["负责公司官网项目的开发和日常维护", "负责教授实习生web前端技术，并指导实习生如期完成公司安排的项目", "参与web课程研发和后期优化，完成教学相关文档编写工作"]
                    }, {
                        company: "广西昇泰安电子商务发展有限公司",
                        workTime: "2015/03 - 2016/06",
                        job: "web前端/GUI设计师",
                        jobContent: ["负责公司门下各网站页面调优、维护工作、相关框架拓展开发", "参与app产品原型讨论和产品设计，负责APP开发及游戏宣传海报设计"]
                    }, {
                        company: "福建康众畅想信息科技有限公司",
                        workTime: "2014/02 - 2015/01",
                        job: "开发部团队组长",
                        jobContent: ["分配团队开发人员日常任务", "负责公司项目开发，包括但不限于企业站、商城、微信网页等项目", "独立构思制作H5场景应用模版", "负责网站设计和海报设计"]
                    }]
                }
            }
        }
            , $ = E
            , I = (a("bd9b"),
            Object(l["a"])($, j, k, !1, null, "0bc51058", null))
            , S = I.exports
            , O = function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("section", {
                attrs: {
                    id: "portfolio"
                }
            }, [a("div", {
                staticClass: "work-area"
            }, [t._m(0), t._m(1), a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "work-inner"
            }, t._l(t.work, (function(e, n) {
                    return a("div", {
                        key: n,
                        class: "four columns mix " + e.tag
                    }, [a("div", {
                        staticClass: "item wow fadeInUp",
                        attrs: {
                            "data-wow-delay": e.wowDelay + "s"
                        }
                    }, [a("a", {
                        attrs: {
                            href: e.url,
                            target: "_blank"
                        }
                    }, [a("img", {
                        attrs: {
                            src: e.imgUrl,
                            alt: e.title
                        }
                    }), a("div", {
                        staticClass: "portfolio-caption"
                    }, [a("h4", [t._v(t._s(e.title))])])])])])
                }
            )), 0)]), t._m(2)])])
        }
            , U = [function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "twelve columns"
            }, [a("h1", {
                staticClass: "section-title wow fadeInDown"
            }, [t._v("作品集 / Portfolio")])])])
        }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "row"
                }, [a("ul", {
                    staticClass: "work"
                }, [a("li", {
                    staticClass: "filter",
                    attrs: {
                        "data-filter": "all"
                    }
                }, [t._v("全部")]), a("li", {
                    staticClass: "filter",
                    attrs: {
                        "data-filter": ".development"
                    }
                }, [t._v("开发")]), a("li", {
                    staticClass: "filter",
                    attrs: {
                        "data-filter": ".design"
                    }
                }, [t._v("设计")])])])
            }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "row"
                }, [a("a", {
                    staticClass: "more-work wow fadeInUp",
                    attrs: {
                        href: "https://xlong.zcool.com.cn",
                        target: "_blank"
                    }
                }, [t._v("\n\t\t\t\t更多作品"), a("span", {
                    staticClass: "iconfont ic-arrowrightl arrow"
                })])])
            }
        ]
            , L = {
            data: function() {
                return {
                    work: [{
                        tag: "development",
                        wowDelay: "0.3",
                        url: "https://github.com/xLong1029/xlong-website-cms",
                        imgUrl: a("37b4"),
                        title: "企业一站式解决方案"
                    }, {
                        tag: "design",
                        wowDelay: "0.1",
                        url: "https://mp.weixin.qq.com/s/RUEZG9__2FW8u9-v2Sgt2g",
                        imgUrl: a("f868"),
                        title: "2018年度字体设计"
                    }, {
                        tag: "development",
                        wowDelay: "0.2",
                        url: "https://www.zhujia100.com",
                        imgUrl: a("83dc"),
                        title: "建筑综合信息服务平台——筑加网"
                    }, {
                        tag: "development design",
                        wowDelay: "0.4",
                        url: "http://www.geese.com.cn/",
                        imgUrl: a("19f6"),
                        title: "纺织行业企业信息化解决方案"
                    }, {
                        tag: "development",
                        wowDelay: "0.5",
                        url: "https://xmxx.zhujia100.com/#/ProjectNews",
                        imgUrl: a("1ec1"),
                        title: "项目申报资讯平台"
                    }, {
                        tag: "design",
                        wowDelay: "0.7",
                        url: "https://www.zcool.com.cn/work/ZMTg0NTY0ODA=.html",
                        imgUrl: a("922d"),
                        title: "人工智能分析计算平台——天知心，大数智"
                    }]
                }
            }
        }
            , M = L
            , T = (a("9436"),
            Object(l["a"])(M, O, U, !1, null, "7207cf49", null))
            , q = T.exports
            , P = function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("section", {
                attrs: {
                    id: "contact"
                }
            }, [a("div", {
                staticClass: "row section-head"
            }, [t._m(0), t._m(1), t._m(2), t._m(3), a("div", {
                staticClass: "three columns contact-details wow fadeInUp",
                staticStyle: {
                    "text-align": "center"
                }
            }, [a("img", {
                staticClass: "qrcode",
                attrs: {
                    src: t.qrcode
                }
            }), a("div", [t._v("扫一扫 关注我")])])])])
        }
            , D = [function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("div", {
                staticClass: "twelve columns"
            }, [a("h1", {
                staticClass: "section-title wow fadeInDown"
            }, [t._v("联系方式 / Contact")])])
        }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "three columns contact-details wow fadeInUp"
                }, [a("span", {
                    staticClass: "iconfont ic-map"
                }), a("p", [t._v("广西壮族自治区 南宁市 西乡塘区 衡阳路 西一里")])])
            }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "three columns contact-details wow fadeInUp"
                }, [a("span", {
                    staticClass: "iconfont ic-phone1"
                }), a("p", [t._v("18376686974")])])
            }
            , function() {
                var t = this
                    , e = t.$createElement
                    , a = t._self._c || e;
                return a("div", {
                    staticClass: "three columns contact-details wow fadeInUp"
                }, [a("span", {
                    staticClass: "iconfont ic-email"
                }), a("p", [t._v("381612175@qq.com")])])
            }
        ]
            , z = {
            data: function() {
                return {
                    qrcode: a("72b4")
                }
            }
        }
            , W = z
            , A = (a("2dfd"),
            Object(l["a"])(W, P, D, !1, null, "ef29f092", null))
            , V = A.exports
            , B = function() {
            var t = this
                , e = t.$createElement;
            t._self._c;
            return t._m(0)
        }
            , R = [function() {
            var t = this
                , e = t.$createElement
                , a = t._self._c || e;
            return a("footer", [a("div", {
                staticClass: "row"
            }, [a("div", {
                staticClass: "twelve columns"
            }, [a("ul", {
                staticClass: "social-links"
            }, [a("li", [a("a", {
                attrs: {
                    href: "http://wpa.qq.com/msgrd?v=3&uin=381612175&site=qq&menu=yes"
                }
            }, [a("i", {
                staticClass: "iconfont ic-qq"
            })])]), a("li", [a("a", {
                attrs: {
                    href: "https://github.com/xLong1029",
                    target: "_blank"
                }
            }, [a("i", {
                staticClass: "iconfont ic-githubb"
            })])]), a("li", [a("a", {
                attrs: {
                    href: "http://xlong.zcool.com.cn",
                    target: "_blank"
                }
            }, [a("i", {
                staticClass: "iconfont ic-zcool"
            })])]), a("li", [a("a", {
                attrs: {
                    href: "https://i.ui.cn/ucenter/358591.html",
                    target: "_blank"
                }
            }, [a("i", {
                staticClass: "iconfont ic-uicn"
            })])])]), a("ul", {
                staticClass: "copyright"
            }, [a("li", [t._v("xLong © Copyright 2019, All Rights Reserved")])])]), a("div", {
                attrs: {
                    id: "go-top"
                }
            }, [a("a", {
                staticClass: "smoothscroll",
                attrs: {
                    title: "Back to Top",
                    href: "#about"
                }
            }, [a("i", {
                staticClass: "iconfont ic-arrowup"
            })])])])])
        }
        ]
            , G = (a("768d"),
            {})
            , H = Object(l["a"])(G, B, R, !1, null, "ae2088d8", null)
            , J = H.exports
            , Q = {
            name: "home",
            components: {
                Loading: f,
                SideBar: h,
                About: y,
                Resume: S,
                Portfolio: q,
                Contact: V,
                Footer: J
            },
            data: function() {
                return {
                    avatar: a("92ef")
                }
            }
        }
            , F = Q
            , N = (a("7c55"),
            Object(l["a"])(F, s, i, !1, null, null, null))
            , Z = N.exports;
        a("99fc"),
            a("f176"),
            a("ebd9"),
            a("a5eb"),
            n["a"].config.productionTip = !1,
            new n["a"]({
                render: function(t) {
                    return t(Z)
                }
            }).$mount("#app")
    },
    "5c48": function(t, e, a) {},
    "72b4": function(t, e, a) {
        t.exports = a.p + "static/img/qrcode.jpg"
    },
    "768d": function(t, e, a) {
        "use strict";
        var n = a("2e57")
            , s = a.n(n);
        s.a
    },
    "7c55": function(t, e, a) {
        "use strict";
        var n = a("5c48")
            , s = a.n(n);
        s.a
    },
    "83dc": function(t, e, a) {
        t.exports = a.p + "static/img/1.jpg"
    },
    "922d": function(t, e, a) {
        t.exports = a.p + "static/img/3.jpg"
    },
    "92ef": function(t, e, a) {
        t.exports = a.p + "static/img/avatar.jpg"
    },
    9436: function(t, e, a) {
        "use strict";
        var n = a("1a6b")
            , s = a.n(n);
        s.a
    },
    "951a": function(t, e, a) {
        t.exports = a.p + "static/img/default.jpg"
    },
    "99fc": function(t, e, a) {},
    a5eb: function(t, e) {
        $(window).load((function() {
                $("#loading").delay(800).fadeOut(),
                    $("body").delay(800)
            }
        )),
            jQuery(document).ready((function(t) {
                    t(".smoothscroll").on("click", (function(e) {
                            e.preventDefault();
                            var a = this.hash
                                , n = t(a);
                            t("html, body").stop().animate({
                                scrollTop: n.offset().top
                            }, 800, "swing", (function() {
                                    window.location.hash = a
                                }
                            ))
                        }
                    )),
                        (new WOW).init();
                    var e = t("section")
                        , a = t("#left-nav a");
                    e.waypoint({
                        handler: function(e, n) {
                            var s;
                            s = t(this),
                            "up" === n && (s = s.prev());
                            var i = t('#left-nav a[href="#' + s.attr("id") + '"]');
                            a.parent().removeClass("current"),
                                i.parent().addClass("current")
                        },
                        offset: "35%"
                    }),
                        t(window).on("resize", (function() {
                                t("body").css({
                                    width: t(window).width()
                                })
                            }
                        )),
                        t("#menu").click((function() {
                                t(document.body).toggleClass("show-menu"),
                                    t(".menu").toggleClass("close-menu")
                            }
                        ));
                    var n = {
                        el: {
                            ham: t(".menu"),
                            menuTop: t(".menu-top"),
                            menuMiddle: t(".menu-middle"),
                            menuBottom: t(".menu-bottom")
                        },
                        init: function() {
                            n.bindUIactions()
                        },
                        bindUIactions: function() {
                            n.el.ham.on("click", (function(t) {
                                    n.activateMenu(t),
                                        t.preventDefault()
                                }
                            ))
                        },
                        activateMenu: function() {
                            n.el.menuTop.toggleClass("menu-top-click"),
                                n.el.menuMiddle.toggleClass("menu-middle-click"),
                                n.el.menuBottom.toggleClass("menu-bottom-click")
                        }
                    };
                    n.init(),
                        t(".work-inner").mixItUp()
                }
            ))
    },
    a60d: function(t, e, a) {},
    bd9b: function(t, e, a) {
        "use strict";
        var n = a("1ecc")
            , s = a.n(n);
        s.a
    },
    d278: function(t, e, a) {
        "use strict";
        var n = a("4578")
            , s = a.n(n);
        s.a
    },
    d729: function(t, e, a) {},
    d88e: function(t, e, a) {
        "use strict";
        var n = a("d729")
            , s = a.n(n);
        s.a
    },
    d98e: function(t, e, a) {
        "use strict";
        var n = a("213c")
            , s = a.n(n);
        s.a
    },
    ebd9: function(t, e, a) {},
    f176: function(t, e, a) {},
    f868: function(t, e, a) {
        t.exports = a.p + "static/img/7.jpg"
    }
});
