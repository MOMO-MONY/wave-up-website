'use strict';

/* =========================================================
   配置 / Configuración
   instagram 留空 = 不显示；填账号（不带 @）即可显示
   ========================================================= */
const CONTACT = {
  email: 'waveup2026@gmail.com',
  instagram: ''
};

/* =========================================================
   中文文案（西语文案直接写在 index.html 里）
   ========================================================= */
const ZH = {
  'skip': '跳到正文',
  'nav.aria': '主导航',
  'nav.services': '服务',
  'nav.china': '小红书',
  'nav.cases': '案例',
  'nav.method': '合作流程',
  'nav.faq': '常见问题',
  'nav.cta': '联系我们',

  'hero.eyebrow': '服务全欧洲的数字营销公司',
  'hero.title': '你的品牌，<br>掀起<em class="serif accent">新浪潮。</em>',
  'hero.lead': '用本地人爱看的 Instagram 和 TikTok 内容，加上精准的广告投放，帮你的店被欧洲本地客人发现、喜欢、走进门。',
  'hero.cta': '开始合作',
  'hero.secondary': '看看我们的案例',
  'hero.p1': '中 · 西 · 英 三语团队',
  'hero.p2': '服务全欧洲客户',
  'hero.p3': '策略 + AI 提效',
  'hero.phone': '一杯咖啡，一千个故事 ☕️',
  'hero.pc.es': '西班牙',
  'hero.pc.it': '意大利',
  'hero.pc.de': '德国',
  'hero.maps1': '就在你附近',
  'hero.maps2': '营业中 · 一键导航',

  'svc.eyebrow': '我们做什么',
  'svc.title': '全链路打通，<br><em class="serif accent">只为让你增长。</em>',
  'svc.sub': '深耕欧洲本地市场五年的专业团队，从开业引爆到长期稳定经营，全程一手包办。老板专心做生意，线上的事交给我们。',
  'svc.ask': '我感兴趣',
  'svc.s1.t': '社媒运营 & 内容制作',
  'svc.s1.d': '策划、脚本、拍摄与剪辑 Reels 和 TikTok，负责日常发布与粉丝互动，打造有辨识度的品牌声音。',
  'svc.s1.k2': '内容制作',
  'svc.s2.t': '达人 & 创作者合作',
  'svc.s2.d': '匹配与你客群契合的博主，统筹合作全流程，确保每条内容都真实自然。',
  'svc.s2.k1': '达人筛选',
  'svc.s2.k2': '合作执行',
  'svc.s3.t': '社媒广告投放',
  'svc.s3.d': '在 Meta 与 TikTok 投放目标清晰的广告：人群定向、素材测试、持续优化，让每一欧都花得明白。',
  'svc.s3.k3': '数据优化',
  'svc.s4.t': 'Google 地图 & 本地曝光',
  'svc.s4.d': '优化你的 Google 商家资料（照片、类目、动态、评价），并投放本地广告，触达正在找店的人。',
  'svc.s4.k1': '商家资料',
  'svc.s5.t': '官网建设 & SEM',
  'svc.s5.d': '清晰好用、能把访客变成预订的网站和落地页，并与 Google 搜索广告无缝衔接。',
  'svc.s5.k1': '网站设计',
  'svc.s6.badge': '我们的独特优势',
  'svc.s6.t': '小红书',
  'svc.s6.d': '用地道中文为你创建并运营账号，让在欧华人和中国游客发现你、收藏你、走进你的店。',
  'svc.s6.k1': '原生中文内容',
  'svc.s6.k2': '账号代运营',
  'svc.s6.more': '了解运作方式',
  'svc.s7.t': '线上线下视觉设计',
  'svc.s7.d': '从数字端到门店，统一的视觉形象：菜单、海报、户外广告牌和各类宣传物料。',
  'svc.s7.k1': '菜单设计',
  'svc.s7.k2': '海报物料',
  'svc.s7.k3': '品牌视觉',

  'xi.eyebrow': '什么是小红书？',
  'xi.title': '中国游客<br><em class="serif accent">决定去哪儿的地方。</em>',
  'xi.sub': '还没用过小红书？一分钟了解它为什么重要。',
  'xi.eq': '像 Instagram 一样看图文和视频，像 Google 地图一样搜地点，像 TripAdvisor 一样看真实评价。三合一，全中文。',
  'xi.f1.t': '月活跃用户',
  'xi.f1.d': '中国最大的社交平台之一，用户以年轻、城市、爱旅行、消费力强的人群为主。',
  'xi.f2.t': '旅行搜索第一入口',
  'xi.f2.d': 'Google 和 Instagram 在中国无法使用。出发前，用户会在小红书搜「米兰餐厅」「柏林必去」。',
  'xi.f3.t': '信任真实分享',
  'xi.f3.d': '笔记来自真实用户的亲身体验。一条好的推荐，比任何广告都更有说服力。',
  'xi.f4.t': '从「收藏」到到店',
  'xi.f4.d': '用户把店铺收藏进旅行清单，到了当地照着打卡。收藏你的人已经决定要来，这就是转化率高的原因。',
  'xi.why.t': '这对你的生意意味着什么',
  'xi.why.1t': '不在小红书，就等于隐形。',
  'xi.why.1d': '你的官网、Google 评价和 Instagram，中国游客都看不到。',
  'xi.why.2t': '客人带着决定而来。',
  'xi.why.2d': '他们不是路过，而是收藏了你的笔记专程前来，有时直接拿出手机给店员看。',
  'xi.why.3t': '内容长期有效。',
  'xi.why.3d': '一篇好笔记发布后几个月仍会出现在搜索结果里，不会 24 小时就消失。',
  'xi.why.4t': '口碑会自我放大。',
  'xi.why.4d': '每位满意的客人都可能发布自己的笔记，带来下一批客人。',
  'cn.eyebrow': '我们怎么帮你',
  'cn.title': '本地小店，<br><em class="serif">全新客群。</em>',
  'cn.lead': '账号搭建、中文内容、达人合作，我们全包，让你从「隐形」变成中国游客的「必打卡」。',
  'cn.body': '我们是深耕欧洲市场的中、西、英三语团队：懂你的生意和当地市场，也能用中文、用他们熟悉的审美和语境去打动这群用户。',
  'cn.cta': '打开这扇门',
  'cn.j1.t': '被发现',
  'cn.j1.d': '图文、视频笔记，覆盖目标用户真正在搜的关键词。',
  'cn.j2.t': '被收藏',
  'cn.j2.d': '实用又好看的内容，让用户收藏进旅行清单并转发分享。',
  'cn.j3.t': '到店消费',
  'cn.j3.d': '从屏幕到门口：地址、营业时间、推荐理由一目了然。',
  'cn.who1': '在欧华人社区',
  'cn.who2': '中国游客与留学生',
  'cn.who3': '餐饮 · 娱乐 · 零售',

  'cases.eyebrow': '案例',
  'cases.title': '这些想法，<br><em class="serif accent">已经在发生。</em>',
  'cases.sub': '这里只展示了一小部分与我们合作的欧洲品牌。',
  'cases.ph': '项目图片',
  'cases.c1.sector': '餐饮 · 德国',
  'cases.c2.sector': '休闲娱乐 · 意大利',
  'cases.c3.sector': '小红书 · 德国',
  'cases.c1.t': '客户名称',
  'cases.c1.d': '简要描述客户面临的挑战与我们的解决方案。',
  'cases.metric': '成果指标',
  'cases.lq.sector': '休闲乐园 · 意大利拉奎拉',
  'cases.lq.d': '为占地 15,000 m² 的室内外蹦床乐园做社媒开业推广：开业造势、真人出镜 Reels，以及票价、安全须知、园区服务等实用内容。',
  'cases.lq.m1': 'Instagram 粉丝',
  'cases.lq.m2': '已发布帖子',
  'cases.lq.link': '在 Instagram 查看',
  'cases.mo.sector': '餐饮 · 西班牙哈蒂瓦',
  'cases.mo.d': '为一家 2,500 m² 的大型寿司餐厅运营社媒，主打全新餐饮概念：精致的菜品摄影、空间 Reels 和辨识度极高的视觉风格。',
  'cases.mo.alt': 'Moon Sushi Xàtiva 的 Instagram 帖子：菜品、鸡尾酒与餐厅空间',
  'cases.ak.sector': '餐饮 · 西班牙阿利坎特',
  'cases.ak.d': '为一家 2,000 m² 以上的寿司与亚洲料理自助餐厅做开业推广：盛大开业活动、达人探店视频，以及吸引新客的抽奖活动。',
  'cases.ak.n': '9.2K',
  'cases.ak.alt': 'Akito 的 Instagram 帖子：盛大开业、达人视频与自助餐',
  'cases.ur.sector': '餐饮 · 西班牙比斯开省贝兰戈',
  'cases.ur.d': '一家 3,000 m²、200 多道菜的高端寿司自助：美食 Reels、达人内容，以及帮门店坐满的「最火甜品」营销活动。',
  'cases.ur.n': '3.8K',
  'cases.ur.alt': 'Urumi 的 Instagram 帖子：菜品、网红甜品与门店环境',
  'cases.fy.sector': '餐饮 · 德国哈瑙',
  'cases.fy.d': '为一家寿司与韩式烤肉自助餐厅打造社媒内容：美食 Reels、达人探店视频，以及价格、营业时间与预订信息等宣传物料。',
  'cases.fy.n': '5.4K',
  'cases.fy.alt': 'Fuyuki Hanau 的 Instagram 帖子：寿司、韩式烤肉与促销海报',
  'cases.lq.alt': "L'Aquiland 的 Instagram 帖子：开业活动、Reels、票价与须知",

  'sr.eyebrow': '视频作品',
  'sr.title': '让人想看、<br><em class="serif accent">想转发的内容。</em>',
  'sr.lead': '我们为客户创作的部分视频：开业宣传、达人合作、产品与空间展示。',
  'sr.watch': '在 Instagram 观看',
  'sr.r1.tag': '开业视频',
  'sr.r1.likes': '6,894',
  'sr.r2.tag': '开业引流活动',
  'sr.r2.likes': '2,216',
  'sr.r3.likes': '1,728',
  'sr.r4.tag': '开业活动',
  'sr.r4.likes': '6,562',
  'sr.r5.likes': '2,097',
  'ai.n1': '创意',
  'ai.n2': '内容',
  'ai.n3': '分析',
  'ai.title': '更多创意，<br>更少内耗，<br><em class="serif accent">这是我们的加分项。</em>',
  'ai.lead': '我们持续学习、紧跟前沿技术，把 AI 和数据工具用在每一个环节，用更高的效率为客户交付更好的结果。',
  'ai.c1': '<b>创意策划：</b>借助 AI 快速产出并验证多套方案，更快找到最适合你的方向。',
  'ai.c2': '<b>内容制作：</b>剪辑、字幕和多语言版本高效完成，更新更快，品质更稳定。',
  'ai.c3': '<b>广告投放：</b>实时追踪数据、持续优化，让每一笔预算都花在刀刃上。',
  'ai.c4': '<b>专业把关：</b>策略判断、本地文化和最终审核，始终由经验丰富的团队负责。',

  'm.eyebrow': '合作流程',
  'm.title': '好的创意，<br><em class="serif accent">清晰的方向。</em>',
  'm.sub': '沟通及时、目标一致，没有隐藏条款。',
  'm.s1.t': '需求诊断',
  'm.s1.d': '免费初步沟通，深入了解门店定位、目标客群和经营目标，并评估现有线上账号的表现。',
  'm.s2.t': '定制方案',
  'm.s2.d': '根据诊断结果出具书面方案，明确渠道、内容规划和预算。服务费与广告投放费分开列示，费用清晰透明。',
  'm.s3.t': '掀起浪潮',
  'm.s3.d': '用最新颖的创意内容引爆线上热度，再把线上流量变成到店客流。从制作、发布到日常维护，全部由我们负责。',
  'm.s4.t': '复盘优化',
  'm.s4.d': '每月提供数据报告，复盘曝光、互动和到店转化效果，并据此优化下一阶段的内容与投放策略。',

  'faq.eyebrow': '开始之前',
  'faq.title': '你可能<br><em class="serif accent">想问这些。</em>',
  'faq.q1': '必须购买全部服务吗？',
  'faq.a1': '不用。我们从你的实际需求出发：可以只做一项服务，也可以组合成整体方案，范围由你决定。',
  'faq.q2': '你们服务哪些国家？',
  'faq.a2': '全欧洲：西班牙、德国、意大利等。我们远程服务各国商家，项目需要时也会到店拍摄。',
  'faq.q3': '我不会当地语言，能和你们合作吗？',
  'faq.a3': '当然可以。我们全程中文沟通，你只需要把想法告诉我们。当地语言的文案、和本地达人及平台的对接都由我们负责，发布前所有内容都会给你确认。',
  'faq.q4': '报价怎么定？',
  'faq.a4': '根据目标、渠道、内容量和项目范围来定。方案会把我们的服务费、广告投放预算和第三方费用分开列明。',
  'faq.q5': 'AI 会取代创意工作吗？',
  'faq.a5': '不会。AI 只是辅助我们调研、探索和提效，策略、创意方向和最终审核都由团队负责。',

  'ct.eyebrow': '下一步，从你开始',
  'ct.title': '下一波浪潮，<br><em class="serif">属于你。</em>',
  'ct.lead': '花两分钟介绍你的生意，我们会带着具体想法回复你，无需任何承诺。',
  'ct.cta': '告诉我们你的想法',
  'ct.wechat': '微信',

  'ft.tag': '扎根本地，连接无界。',
  'ft.country': '欧洲',
  'ft.privacy': '隐私说明',
  'ft.top': '回到顶部 ↑',

  'dlg.close': '关闭',
  'dlg.eyebrow': '下一步',
  'dlg.title': '加个好友，<em class="serif accent">直接聊。</em>',
  'dlg.desc': '扫码加微信，或者在 Instagram 上找到我们，不用填表。',
  'dlg.or': '或者留下你的需求，我们用邮件回复你',
  'qr.wechat.hint': '微信扫码添加',
  'qr.copy': '复制微信号',
  'qr.ig.hint': '扫码关注我们',
  'qr.ig.open': '打开 Instagram',
  'qr.email': '邮箱：',
  'dlg.business': '商家名称',
  'dlg.business.ph': '例：La Ola 咖啡馆',
  'dlg.city': '所在城市和国家',
  'dlg.city.ph': '例：德国柏林',
  'dlg.services': '需要哪些帮助？',
  'dlg.goal': '你希望达成什么目标？',
  'dlg.goal.ph': '吸引更多本地客人、提升门店知名度、增加预订……',
  'dlg.note': '我们会生成一份草稿，由你检查后从自己的邮箱发出。不会自动发送任何数据。',
  'dlg.submit': '生成我的留言',
  'opt.social': '社媒运营',
  'opt.influencers': '达人合作',
  'opt.ads': '社媒广告',
  'opt.maps': 'Google 地图',
  'opt.web': '官网 & SEM',
  'opt.design': '视觉设计',
  'opt.xhs': '小红书',
  'res.eyebrow': '准备发送',
  'res.title': '你的想法，<em class="serif accent">已有方向。</em>',
  'res.desc': '请检查内容，然后从你的邮箱发送。目前尚未发送。',
  'res.email': '打开我的邮箱',
  'res.copy': '复制文本',
  'res.edit': '← 返回修改',

  'pv.eyebrow': '隐私说明',
  'pv.title': '你的数据，<em class="serif accent">由你掌控。</em>',
  'pv.p1': '本网站不使用任何统计分析、追踪器或广告 Cookie。',
  'pv.p2': '表单只在你的浏览器中生成文本，不会发送到任何服务器。如果你选择发送，会打开你的邮件应用供你检查。',
  'pv.p3': '网站字体通过 Google Fonts 加载。托管服务商可能会处理安全提供网页所需的技术数据。'
};

/* =========================================================
   English copy
   ========================================================= */
const EN = {
  'skip': 'Skip to content',
  'nav.aria': 'Main navigation',
  'nav.services': 'Services',
  'nav.china': 'Xiaohongshu',
  'nav.cases': 'Work',
  'nav.method': 'Process',
  'nav.faq': 'FAQ',
  'nav.cta': "Let's talk",

  'hero.eyebrow': 'Digital marketing agency · Europe',
  'hero.title': 'Your brand.<br>A new <em class="serif accent">wave.</em>',
  'hero.lead': 'We put your business on Xiaohongshu (小红书), the app where millions of Chinese travellers decide where to eat and what to visit. Then we add Instagram, TikTok and targeted ads to win over local customers too.',
  'hero.cta': 'Catch the wave',
  'hero.secondary': 'See our work',
  'hero.p1': 'English · Español · 中文',
  'hero.p2': 'Clients across Europe',
  'hero.p3': 'Strategy + AI',
  'hero.phone': 'One coffee. A thousand stories. ☕️',
  'hero.pc.es': 'Spain',
  'hero.pc.it': 'Italy',
  'hero.pc.de': 'Germany',
  'hero.maps1': 'Near you',
  'hero.maps2': 'Open now · Directions',

  'svc.eyebrow': 'What we do',
  'svc.title': 'Everything connected.<br><em class="serif accent">All built for growth.</em>',
  'svc.sub': 'A team with five years on the ground in local European markets. From a launch that gets people talking to steady long-term growth, we handle it all. You run the business; we take care of everything online.',
  'svc.ask': "I'm interested",
  'svc.s1.t': 'Social media &amp; content',
  'svc.s1.d': 'Strategy, scripts, filming and editing for Reels and TikToks. We publish and manage your community with a recognisable voice.',
  'svc.s1.k2': 'Production',
  'svc.s2.t': 'Influencers &amp; creators',
  'svc.s2.d': 'We find creators who match your audience, coordinate every collaboration and keep each piece authentic.',
  'svc.s2.k1': 'Creator selection',
  'svc.s2.k2': 'Collaborations',
  'svc.s3.t': 'Paid social',
  'svc.s3.d': 'Meta and TikTok campaigns with clear goals: audiences, creatives and ongoing optimisation, so every euro teaches us something.',
  'svc.s3.k3': 'Optimisation',
  'svc.s4.t': 'Google Maps &amp; local presence',
  'svc.s4.d': 'We optimise your Business Profile (photos, categories, posts, reviews) and run local ads for people looking for a place like yours.',
  'svc.s4.k1': 'Business Profile',
  'svc.s5.t': 'Websites &amp; SEM',
  'svc.s5.d': 'Clear websites and landing pages that turn visits into bookings, connected to Google Search campaigns.',
  'svc.s5.k1': 'Web design',
  'svc.s6.badge': 'Our edge',
  'svc.s6.t': 'Xiaohongshu',
  'svc.s6.d': 'We create and run your account in native Chinese so the Chinese community in Europe and Chinese travellers discover you, save you and come to visit.',
  'svc.s6.k1': 'Native Chinese content',
  'svc.s6.k2': 'Account management',
  'svc.s6.more': 'How it works',
  'svc.s7.t': 'Design on and off screen',
  'svc.s7.d': 'A consistent visual identity online and in your venue: menus, signage, billboards and promotional material.',
  'svc.s7.k1': 'Menus',
  'svc.s7.k2': 'Signage',
  'svc.s7.k3': 'Visual identity',

  'xi.eyebrow': 'What is Xiaohongshu?',
  'xi.title': 'The app where Chinese travellers<br><em class="serif accent">decide where to go.</em>',
  'xi.sub': 'Never heard of it? Here is what you need to know.',
  'xi.eq': 'Photos and videos like Instagram, place search like Google Maps and real reviews like TripAdvisor. All in one app, in Chinese.',
  'xi.f1.t': 'monthly active users',
  'xi.f1.d': 'One of China’s largest social platforms, with a young, urban audience that travels and spends.',
  'xi.f2.t': 'It’s their travel search engine',
  'xi.f2.d': 'Google and Instagram are blocked in China. Before a trip, people search “restaurant in Milan” or “what to see in Berlin” on Xiaohongshu.',
  'xi.f3.t': 'They trust real people',
  'xi.f3.d': 'Posts are other users’ real experiences. One good recommendation carries more weight than any ad.',
  'xi.f4.t': 'From “save” to visit',
  'xi.f4.d': 'People save places into lists and follow that route during the trip. Whoever saves you has already decided to come: that’s why it converts so well.',
  'xi.why.t': 'Why it matters for your business',
  'xi.why.1t': 'Without Xiaohongshu, you’re invisible.',
  'xi.why.1d': 'Your website, Google reviews and Instagram don’t reach Chinese tourists.',
  'xi.why.2t': 'Customers who have already decided.',
  'xi.why.2d': 'They don’t walk in by chance: they arrive with your post saved, sometimes showing it on their phone.',
  'xi.why.3t': 'Content that lasts for months.',
  'xi.why.3d': 'A good post keeps showing up in search long after it’s published. It doesn’t vanish in 24 hours.',
  'xi.why.4t': 'Word of mouth multiplies.',
  'xi.why.4d': 'Every happy visitor can publish their own post and bring the next ones.',
  'cn.eyebrow': 'How we help',
  'cn.title': 'A local business.<br><em class="serif">A whole new audience.</em>',
  'cn.lead': 'We handle everything: your account, the Chinese content and creator collaborations, so you go from invisible to a must-visit stop.',
  'cn.body': 'We are a trilingual team (English, Spanish and Chinese) with experience across Europe: we understand your business and your market, and we speak to this audience in its own language, aesthetics and codes.',
  'cn.cta': "Let's open that door",
  'cn.j1.t': 'They discover you',
  'cn.j1.d': 'Posts in Chinese with photos, video and the keywords your audience actually searches for.',
  'cn.j2.t': 'They save you',
  'cn.j2.d': 'Useful, beautiful content that gets saved for the trip (收藏) and shared.',
  'cn.j3.t': 'They come to visit',
  'cn.j3.d': 'From screen to doorstep: address, opening hours and a clear reason to come.',
  'cn.who1': 'Chinese community in Europe',
  'cn.who2': 'Chinese tourists and students',
  'cn.who3': 'Restaurants · Leisure · Retail',

  'cases.eyebrow': 'Work',
  'cases.title': 'Ideas already<br><em class="serif accent">in motion.</em>',
  'cases.sub': 'A small sample of the brands we work with across Europe.',
  'cases.ph': 'Project image',
  'cases.c3.sector': 'Xiaohongshu · Germany',
  'cases.c1.t': 'Client name',
  'cases.c1.d': 'A short description of the challenge and what we did.',
  'cases.metric': 'Result',
  'cases.mo.sector': 'Restaurant · Xàtiva, Spain',
  'cases.mo.d': 'Social media for a 2,500 m² sushi restaurant with a new dining concept: refined food photography, Reels of the space and a recognisable look.',
  'cases.mo.alt': 'Moon Sushi Xàtiva Instagram posts: dishes, cocktails and the venue',
  'cases.ak.sector': 'Restaurant · Alicante, Spain',
  'cases.ak.d': 'Launch of a 2,000+ m² sushi and Asian buffet: grand-opening campaign, creator videos and a giveaway to bring in new customers.',
  'cases.ak.n': '9.2K',
  'cases.ak.alt': 'Akito Instagram posts: grand opening, creators and the buffet',
  'cases.ur.sector': 'Restaurant · Berango (Bizkaia), Spain',
  'cases.ur.d': 'Premium sushi buffet with 200+ dishes across 3,000 m²: food Reels, creator content and the “most viral dessert” campaign to fill tables.',
  'cases.ur.n': '3.8K',
  'cases.ur.alt': 'Urumi Instagram posts: dishes, the viral dessert and the venue',
  'cases.fy.sector': 'Restaurant · Hanau, Germany',
  'cases.fy.d': 'Content for an all-you-can-eat sushi and Korean BBQ buffet: food Reels, a creator video and promotional pieces with prices, opening hours and bookings.',
  'cases.fy.n': '5.4K',
  'cases.fy.alt': 'Fuyuki Hanau Instagram posts: sushi, Korean BBQ and promotions',
  'cases.lq.sector': "Leisure park · L'Aquila, Italy",
  'cases.lq.d': 'Social launch of a 15,000 m² indoor and outdoor trampoline park: opening campaign, presenter-led Reels and practical content on prices, rules and facilities.',
  'cases.lq.m1': 'Instagram followers',
  'cases.lq.m2': 'Posts',
  'cases.lq.link': 'View on Instagram',
  'cases.lq.alt': "L'Aquiland Instagram posts: opening, Reels, prices and rules",

  'sr.eyebrow': 'Showreel',
  'sr.title': 'Content people<br><em class="serif accent">watch and share.</em>',
  'sr.lead': 'Some of the videos we have made for our clients: openings, creators, product and space.',
  'sr.watch': 'Watch on Instagram',
  'sr.r1.tag': 'Opening video',
  'sr.r1.likes': '6,894',
  'sr.r2.tag': 'Opening campaign',
  'sr.r2.likes': '2,216',
  'sr.r3.likes': '1,728',
  'sr.r4.tag': 'Opening event',
  'sr.r4.likes': '6,562',
  'sr.r5.likes': '2,097',
  'ai.n1': 'Ideas',
  'ai.n2': 'Content',
  'ai.n3': 'Analytics',
  'ai.title': 'More ideas.<br>Less friction.<br><em class="serif accent">That’s our edge.</em>',
  'ai.lead': 'We keep learning and stay on top of new technology, using AI and data tools at every step to deliver better results for our clients, faster.',
  'ai.c1': '<b>Creative strategy:</b> AI helps us draft and test more concepts, so we find the right direction for you sooner.',
  'ai.c2': '<b>Content production:</b> editing, subtitles and language versions done efficiently, for faster and more consistent output.',
  'ai.c3': '<b>Advertising:</b> we track performance in real time and keep optimising, so every euro of your budget works harder.',
  'ai.c4': '<b>Expert oversight:</b> strategy, local culture and final review always stay with our experienced team.',

  'm.eyebrow': 'How we work',
  'm.title': 'Good ideas.<br><em class="serif accent">A clear direction.</em>',
  'm.sub': 'Close communication, shared goals and no small print.',
  'm.s1.t': 'Discovery',
  'm.s1.d': 'A free initial consultation to understand your positioning, target customers and business goals, and to review how your current accounts are performing.',
  'm.s2.t': 'Tailored plan',
  'm.s2.d': 'A written plan setting out channels, content and budget, with our fees listed separately from ad spend for full transparency.',
  'm.s3.t': 'We make the wave',
  'm.s3.d': 'Fresh, eye-catching content that gets you noticed online, then turns that traffic into customers walking through your door. Production, publishing and day-to-day upkeep: all on us.',
  'm.s4.t': 'We measure and refine',
  'm.s4.d': 'A monthly performance report on reach, engagement and in-store conversions, with clear adjustments to the next phase of content and ads.',

  'faq.eyebrow': 'Before we start',
  'faq.title': 'You might<br><em class="serif accent">be wondering.</em>',
  'faq.q1': 'Do I have to hire every service?',
  'faq.a1': 'No. We start from what your business needs: a single service or a strategy that combines several. You decide the scope with us.',
  'faq.q2': 'Which countries do you work in?',
  'faq.a2': 'All over Europe: Spain, Germany, Italy and more. We work remotely and travel for content shoots when the project needs it.',
  'faq.q3': 'I don’t speak Chinese. Can I still be on Xiaohongshu?',
  'faq.a3': 'Of course. Our team handles the Chinese content and the account. You tell us about your business and approve everything before it goes live.',
  'faq.q4': 'How is the budget put together?',
  'faq.a4': 'Based on your goals, channels, content volume and scope. The proposal separates our fees from ad spend and third-party costs.',
  'faq.q5': 'Does AI replace creative work?',
  'faq.a5': 'No. We use it to research, explore and speed up tasks. Strategy, creative direction and final review stay with our team.',

  'ct.eyebrow': 'What comes next starts with you',
  'ct.title': 'The next wave<br>could be <em class="serif">yours.</em>',
  'ct.lead': 'Tell us about your business in two minutes. We will reply with concrete ideas, no strings attached.',
  'ct.cta': 'Tell us your idea',

  'ft.tag': 'Local creativity. Borderless connections.',
  'ft.country': 'Europe',
  'ft.privacy': 'Privacy',
  'ft.top': 'Back to top ↑',

  'dlg.close': 'Close',
  'dlg.eyebrow': 'Your next step',
  'dlg.title': 'Let’s talk <em class="serif accent">directly.</em>',
  'dlg.desc': 'Scan a code and message us directly. No forms needed.',
  'dlg.or': 'Or leave us your brief in writing',
  'qr.wechat.hint': 'Scan with WeChat to add us',
  'qr.copy': 'Copy WeChat ID',
  'qr.ig.hint': 'Scan to follow us',
  'qr.ig.open': 'Open Instagram',
  'qr.email': 'Email:',
  'dlg.business': 'Business name',
  'dlg.business.ph': 'e.g. Café La Ola',
  'dlg.city': 'City and country',
  'dlg.city.ph': 'e.g. Berlin, Germany',
  'dlg.services': 'How can we help?',
  'dlg.goal': 'What would you like to achieve?',
  'dlg.goal.ph': 'Attract Chinese tourists, more bookings, more awareness for my venue…',
  'dlg.note': 'We’ll prepare a draft for you to review and send from your own email. Nothing is sent automatically.',
  'dlg.submit': 'Prepare my message',
  'opt.social': 'Social media',
  'opt.influencers': 'Influencers',
  'opt.ads': 'Paid social',
  'opt.maps': 'Google Maps',
  'opt.web': 'Web &amp; SEM',
  'opt.design': 'Design',
  'opt.xhs': 'Xiaohongshu 小红书',
  'res.eyebrow': 'Ready to send',
  'res.title': 'Your idea, <em class="serif accent">on course.</em>',
  'res.desc': 'Review the message and send it from your email. It has not been sent yet.',
  'res.email': 'Open my email',
  'res.copy': 'Copy text',
  'res.edit': '← Edit',

  'pv.eyebrow': 'Privacy',
  'pv.title': 'Your data, <em class="serif accent">in your hands.</em>',
  'pv.p1': 'This site uses no analytics, trackers or advertising cookies.',
  'pv.p2': 'The form prepares a text in your browser and does not send it to any server. If you choose to send it, your email app opens so you can review it.',
  'pv.p3': 'Fonts are loaded from Google Fonts. The hosting provider may process technical data needed to serve the site securely.'
};

/* 运行时文案（三种语言） */
const MSG = {
  es: {
    menuOpen: 'Abrir menú', menuClose: 'Cerrar menú',
    required: 'Este campo es obligatorio.',
    hello: 'Hola, Wave Up 👋',
    business: 'Mi negocio', city: 'Ciudad y país', interest: 'Me interesa', goal: 'Mi objetivo',
    noService: 'Necesito orientación', noGoal: 'Me gustaría definirlo con vuestro equipo.',
    outro: 'Me gustaría saber cómo podemos trabajar juntos.',
    subject: 'Nuevo proyecto · ',
    wechatCopied: 'ID de WeChat copiado. Búscanos en WeChat para añadirnos.', wechatManual: 'Nuestro ID de WeChat: ',
    copied: '¡Copiado! Pégalo en tu correo.', selected: 'Texto seleccionado: cópialo con Ctrl/Cmd + C.'
  },
  en: {
    menuOpen: 'Open menu', menuClose: 'Close menu',
    required: 'This field is required.',
    hello: 'Hi Wave Up 👋',
    business: 'My business', city: 'City and country', interest: 'Interested in', goal: 'My goal',
    noService: 'I need some guidance', noGoal: "I'd like to define it with your team.",
    outro: "I'd love to hear how we could work together.",
    subject: 'New project · ',
    wechatCopied: 'WeChat ID copied. Search it in WeChat to add us.', wechatManual: 'Our WeChat ID: ',
    copied: 'Copied! Paste it into your email.', selected: 'Text selected: copy it with Ctrl/Cmd + C.'
  },
  zh: {
    menuOpen: '打开菜单', menuClose: '关闭菜单',
    required: '此项为必填。',
    hello: '你好，Wave Up 👋',
    business: '商家名称', city: '城市和国家', interest: '感兴趣的服务', goal: '目标',
    noService: '需要你们给建议', noGoal: '希望和你们一起梳理。',
    outro: '想了解一下如何合作。',
    subject: '新项目咨询 · ',
    wechatCopied: '微信号已复制，打开微信搜索即可添加我们。', wechatManual: '我们的微信号：',
    copied: '已复制！粘贴到邮件里即可。', selected: '已选中文本，请按 Ctrl/Cmd + C 复制。'
  }
};

/* ========================================================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
document.documentElement.classList.remove('no-js');

/* ---------- i18n ---------- */
const ES_TITLE = document.title;
const ES_TEXT = new Map();
const ES_ATTR = new Map();
$$('[data-i18n]').forEach(el => ES_TEXT.set(el, el.innerHTML));
$$('[data-i18n-attr]').forEach(el => {
  const saved = {};
  el.dataset.i18nAttr.split(';').forEach(pair => { const [attr] = pair.split(':'); saved[attr] = el.getAttribute(attr); });
  ES_ATTR.set(el, saved);
});

const DICT = { zh: ZH, en: EN };
const HTML_LANG = { es: 'es', en: 'en', zh: 'zh-CN' };
const TITLES = {
  en: 'Wave Up · Digital marketing for businesses across Europe',
  zh: 'Wave Up · 欧洲华人商家社媒营销｜Instagram · TikTok · 广告投放'
};
let lang = 'es';
function msg(key) { return MSG[lang][key]; }

function setLang(next) {
  lang = HTML_LANG[next] ? next : 'es';
  const dict = DICT[lang] || {};
  document.documentElement.lang = HTML_LANG[lang];
  document.title = TITLES[lang] || ES_TITLE;
  $$('[data-i18n]').forEach(el => {
    const tr = dict[el.dataset.i18n];
    el.innerHTML = tr != null ? tr : ES_TEXT.get(el);
  });
  $$('[data-i18n-attr]').forEach(el => {
    el.dataset.i18nAttr.split(';').forEach(pair => {
      const [attr, key] = pair.split(':');
      const tr = dict[key];
      el.setAttribute(attr, tr != null ? tr : ES_ATTR.get(el)[attr]);
    });
  });
  $$('.lang-switch button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
  syncMenuLabel();
  try { localStorage.setItem('waveup-lang', lang); } catch (_) { /* storage unavailable */ }
}

function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (HTML_LANG[q]) return q;
  try { const s = localStorage.getItem('waveup-lang'); if (HTML_LANG[s]) return s; } catch (_) { /* ignore */ }
  const nl = (navigator.language || '').toLowerCase();
  if (nl.startsWith('zh')) return 'zh';
  if (nl.startsWith('es') || nl.startsWith('ca') || nl.startsWith('gl') || nl.startsWith('eu')) return 'es';
  return 'en';
}
$$('.lang-switch button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

/* ---------- header & menu ---------- */
const header = $('.header'), menu = $('.menu-toggle'), nav = $('#navigation');
function syncMenuLabel() { menu.setAttribute('aria-label', msg(menu.getAttribute('aria-expanded') === 'true' ? 'menuClose' : 'menuOpen')); }
function setMenu(open) { menu.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); syncMenuLabel(); }
menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
$$('a', nav).forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
document.addEventListener('click', e => { if (!e.target.closest('.header')) setMenu(false); });
matchMedia('(min-width: 901px)').addEventListener('change', () => setMenu(false));

const mobileCta = $('.mobile-cta');
const hero = $('.hero'), contact = $('#contacto');
function onScroll() {
  header.classList.toggle('is-scrolled', scrollY > 8);
  const pastHero = hero.getBoundingClientRect().bottom < 80;
  const atContact = contact.getBoundingClientRect().top < innerHeight;
  mobileCta.classList.toggle('is-visible', pastHero && !atContact);
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* active nav link */
const navLinks = $$('.nav a[href^="#"]:not(.nav-cta)');
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => sectionObserver.observe(s));

/* ---------- reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-in'); revealObserver.unobserve(entry.target); }
  });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
$$('.reveal').forEach((el, i) => {
  const siblings = [...el.parentElement.children].filter(c => c.classList.contains('reveal'));
  el.style.transitionDelay = `${Math.min(siblings.indexOf(el), 5) * 70}ms`;
  revealObserver.observe(el);
});

/* ---------- brief dialog ---------- */
const dialog = $('#brief-dialog'), form = $('#brief-form');
const formView = $('#brief-form-view'), resultView = $('#brief-result-view');
let briefText = '';

function openBrief(service) {
  formView.hidden = false; resultView.hidden = true;
  if (service) $$('input[name="service"]', form).forEach(i => { i.checked = i.value === service; });
  dialog.showModal();
}
$$('[data-open-brief]').forEach(b => b.addEventListener('click', () => openBrief()));
$$('[data-service]').forEach(b => b.addEventListener('click', () => openBrief(b.dataset.service)));
mobileCta.addEventListener('click', e => { e.preventDefault(); openBrief(); });

$$('.dialog-close').forEach(b => b.addEventListener('click', () => b.closest('dialog').close()));
$$('dialog').forEach(d => d.addEventListener('click', e => {
  if (e.target !== d) return;
  const r = d.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) d.close();
}));
new MutationObserver(() => { document.body.style.overflow = $('dialog[open]') ? 'hidden' : ''; })
  .observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open'] });

function serviceLabel(value) {
  const span = $(`input[value="${value}"] + span`, form);
  return span ? span.textContent.trim() : value;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  let firstInvalid = null;
  ['business', 'city'].forEach(name => {
    const input = form.elements[name];
    const ok = String(data.get(name) || '').trim().length > 0;
    input.setAttribute('aria-invalid', String(!ok));
    input.setCustomValidity(ok ? '' : msg('required'));
    if (!ok && !firstInvalid) firstInvalid = input;
  });
  if (firstInvalid) { firstInvalid.reportValidity(); firstInvalid.focus(); return; }

  const business = data.get('business').trim();
  const services = data.getAll('service').map(serviceLabel);
  const goal = String(data.get('objective') || '').trim();
  const c = lang === 'zh' ? '：' : ': ', sep = lang === 'zh' ? '、' : ', ';
  briefText = [
    msg('hello'), '',
    `${msg('business')}${c}${business}`,
    `${msg('city')}${c}${data.get('city').trim()}`,
    `${msg('interest')}${c}${services.length ? services.join(sep) : msg('noService')}`,
    `${msg('goal')}${c}${goal || msg('noGoal')}`,
    '', msg('outro')
  ].join('\n');

  $('#brief-output').textContent = briefText;
  $('#email-brief').href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(msg('subject') + business)}&body=${encodeURIComponent(briefText)}`;
  $('.copy-status').textContent = '';
  formView.hidden = true; resultView.hidden = false;
  dialog.scrollTop = 0;
  $('#email-brief').focus();
});
$$('input, textarea', form).forEach(i => i.addEventListener('input', () => { i.setCustomValidity(''); i.removeAttribute('aria-invalid'); }));

$('#copy-brief').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(briefText);
    $('.copy-status').textContent = msg('copied');
  } catch (_) {
    const range = document.createRange(); range.selectNodeContents($('#brief-output'));
    const sel = getSelection(); sel.removeAllRanges(); sel.addRange(range);
    $('.copy-status').textContent = msg('selected');
  }
});
$('.edit-brief').addEventListener('click', () => { formView.hidden = false; resultView.hidden = true; form.elements.business.focus(); });
$('#privacy-open').addEventListener('click', () => $('#privacy-dialog').showModal());

/* ---------- showreel: autoplay local videos in view ---------- */
const reelVideos = $$('.reel-video');
reelVideos.forEach(v => v.closest('.reel').classList.add('has-video'));
if (reelVideos.length && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const vo = new IntersectionObserver(entries => entries.forEach(({ target, isIntersecting }) => {
    if (isIntersecting) { target.preload = 'auto'; target.play().catch(() => {}); } else target.pause();
  }), { threshold: .5 });
  reelVideos.forEach(v => vo.observe(v));
}

/* ---------- hero: rotate client profile cards ---------- */
const profileCards = $$('.profile-card');
if (profileCards.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setInterval(() => {
    if (document.hidden) return;
    profileCards.forEach(c => { c.dataset.pos = String((Number(c.dataset.pos) + profileCards.length - 1) % profileCards.length); });
  }, 4000);
}

/* ---------- WeChat: copy ID ---------- */
$$('[data-wechat]').forEach(btn => {
  btn.addEventListener('click', async () => {
    const id = btn.dataset.wechat, status = btn.closest('[data-contact-box]').querySelector('.wechat-status');
    try { await navigator.clipboard.writeText(id); status.textContent = msg('wechatCopied'); }
    catch { status.textContent = msg('wechatManual') + id; }
    clearTimeout(btn._t); btn._t = setTimeout(() => { status.textContent = ''; }, 4000);
  });
});

/* ---------- contact links ---------- */
$$('[data-contact-email]').forEach(a => { a.href = `mailto:${CONTACT.email}`; a.textContent = CONTACT.email; });
if (CONTACT.instagram) {
  $$('[data-contact-instagram]').forEach(a => {
    a.href = `https://www.instagram.com/${CONTACT.instagram}/`;
    a.textContent = `Instagram @${CONTACT.instagram}`;
    if ('igIcon' in a.dataset) a.insertAdjacentHTML('afterbegin', '<svg><use href="#insta"/></svg>');
    a.hidden = false;
  });
}
$('#year').textContent = new Date().getFullYear();

/* ---------- go ---------- */
setLang(initialLang());
