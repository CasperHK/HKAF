import type { CategorySlug } from '~/utils/categories'

export type CategoryPost = {
  id: string
  title: string
  authorName: string
  authorRole: string
  authorAffiliation: string
  excerpt: string
  relativeTime: string
  replyCount: number
  viewCount: number
  tags: string[]
}

export type CategoryPostReply = {
  id: string
  authorName: string
  authorRole: string
  relativeTime: string
  body: string
  likeCount: number
}

export const categoryPostsBySlug: Record<CategorySlug, CategoryPost[]> = {
  physics: [
    {
      id: 'physics-1',
      title: '如何比較量子糾纏實驗中的探測器效率修正？',
      authorName: '林卓賢',
      authorRole: '博士研究生',
      authorAffiliation: '香港中文大學物理系',
      excerpt: '最近重看 Bell test 相關文獻，發現不同團隊對探測器 inefficiency correction 的處理差異很大。想請教大家在整理結果時，應先對 coincidence window 做敏感度分析，還是先固定門檻再比較模型假設？',
      relativeTime: '2 小時前',
      replyCount: 18,
      viewCount: 426,
      tags: ['量子資訊', '實驗方法', '文獻比較']
    },
    {
      id: 'physics-2',
      title: '香港高校高能物理 seminar 有哪些值得追的公開資源？',
      authorName: '陳映彤',
      authorRole: '碩士生',
      authorAffiliation: '香港科技大學理學院',
      excerpt: '想整理一份適合新加入者追蹤的本地 seminar 與 colloquium 清單，尤其是會談到 detector、phenomenology 與 data analysis workflow 的系列。若有過往錄影或講義，也想一併收集。',
      relativeTime: '昨天',
      replyCount: 9,
      viewCount: 211,
      tags: ['高能物理', '學術資源', '香港院校']
    },
    {
      id: 'physics-3',
      title: '用 Python 重現雙擺混沌圖時，時間步長應如何選？',
      authorName: '張凱琳',
      authorRole: '本科生',
      authorAffiliation: '香港大學理學院',
      excerpt: '我在做課堂延伸專題，發現不同 integrator 與 step size 會直接影響 phase portrait。大家如果要兼顧可視化與物理可信度，通常會怎樣設定基準？',
      relativeTime: '2 天前',
      replyCount: 14,
      viewCount: 308,
      tags: ['數值模擬', '經典力學', 'Python']
    }
  ],
  math: [
    {
      id: 'math-1',
      title: '證明緊緻性時，何時應先轉向子覆蓋而不是序列法？',
      authorName: '周芷寧',
      authorRole: '助教',
      authorAffiliation: '香港大學數學系',
      excerpt: '最近批改分析作業時，發現很多同學會直接套用 sequential compactness，但在一般拓撲空間下又會失手。想討論一下：在教學與解題上，怎樣判斷應先從 open cover、finite intersection property，還是序列角度切入？',
      relativeTime: '4 小時前',
      replyCount: 24,
      viewCount: 503,
      tags: ['分析學', '拓撲', '證明策略']
    },
    {
      id: 'math-2',
      title: '想用貝葉斯分層模型分析教育數據，先讀哪些材料？',
      authorName: '何景文',
      authorRole: '研究助理',
      authorAffiliation: '香港教育大學數據科學團隊',
      excerpt: '手上有多間學校的縱向學習數據，想由傳統 mixed model 轉到 Bayesian hierarchical model。希望大家推薦兼顧理論與實作的入門路線，最好能涵蓋 prior choice、posterior predictive check 與模型比較。',
      relativeTime: '1 天前',
      replyCount: 13,
      viewCount: 287,
      tags: ['統計', '貝葉斯', '建模']
    },
    {
      id: 'math-3',
      title: '香港數學競賽訓練和大學 proof-based 課程之間怎樣銜接？',
      authorName: '袁子軒',
      authorRole: '新生',
      authorAffiliation: '本地大學數學一年級',
      excerpt: '我以前偏向奧數與競賽訓練，現在進入 proof-based 課程後，發現寫作風格與抽象程度都很不同。想聽聽前輩怎樣過渡到更正式的數學表述。',
      relativeTime: '3 天前',
      replyCount: 16,
      viewCount: 340,
      tags: ['學習路線', '證明寫作', '數學教育']
    }
  ],
  'computer-science': [
    {
      id: 'cs-1',
      title: 'RAG 系統評估應先看 retrieval 還是 answer quality？',
      authorName: '黃子謙',
      authorRole: '機器學習工程師',
      authorAffiliation: '香港數碼港創科團隊',
      excerpt: '我們內部在做繁中知識庫問答，發現 answer 看起來流暢，但實際引用片段不穩定。若要設計第一輪評估基準，大家會先拆 retrieval metrics、citation faithfulness，還是直接端到端看任務完成率？',
      relativeTime: '58 分鐘前',
      replyCount: 31,
      viewCount: 690,
      tags: ['人工智能', '資訊檢索', '評估']
    },
    {
      id: 'cs-2',
      title: '在香港校園網路環境下部署分散式實驗叢集的實務問題',
      authorName: '鄭浩然',
      authorRole: '系統研究員',
      authorAffiliation: '香港理工大學計算系統實驗室',
      excerpt: '想收集大家在大學網路政策、GPU 排程、容器鏡像管理與跨機房 latency 方面的實務經驗。特別關心教學與研究共用叢集時，如何兼顧 reproducibility 與維運成本。',
      relativeTime: '昨天',
      replyCount: 15,
      viewCount: 338,
      tags: ['分散式系統', 'MLOps', '校園基建']
    },
    {
      id: 'cs-3',
      title: '繁體中文論壇搜尋排序，應先做 BM25 還是 embedding baseline？',
      authorName: '李倩彤',
      authorRole: '資料工程師',
      authorAffiliation: '香港初創產品團隊',
      excerpt: '如果 HKAF 之後要做學術討論搜尋，大家會建議先以 keyword-based ranking 建 baseline，還是直接做 hybrid retrieval？我比較想先找出在繁中短文本下的穩定做法。',
      relativeTime: '2 天前',
      replyCount: 20,
      viewCount: 401,
      tags: ['搜尋系統', 'NLP', '產品架構']
    }
  ],
  'astronomy-meteorology': [
    {
      id: 'astro-1',
      title: '今次黑雨前的雷達回波有沒有明顯預警訊號？',
      authorName: '梁穎詩',
      authorRole: '氣象觀測員',
      authorAffiliation: '香港民間天氣社群',
      excerpt: '回看昨晚的雷達拼圖與閃電資料，感覺對流帶在警告升級前已出現兩次明顯 merge。想和大家一起拆解：若只依賴公開資料，哪些指標最值得納入即時判讀？',
      relativeTime: '3 小時前',
      replyCount: 27,
      viewCount: 612,
      tags: ['氣象', '雷達資料', '香港天氣']
    },
    {
      id: 'astro-2',
      title: '香港市區觀星時，如何處理天空背景與光害校正？',
      authorName: '蘇柏霖',
      authorRole: '業餘觀測者',
      authorAffiliation: '西貢觀星小組',
      excerpt: '最近在市區屋頂做短曝光星團拍攝，後製時發現背景 gradients 很難清。想請教大家在香港光害環境下，是否會先做平場與背景建模，還是直接依照天區和時間選擇不同的拍攝策略？',
      relativeTime: '2 天前',
      replyCount: 11,
      viewCount: 264,
      tags: ['天文攝影', '觀測方法', '光害']
    },
    {
      id: 'astro-3',
      title: '颱風路徑 ensemble 圖對一般讀者真的有幫助嗎？',
      authorName: '馮悅晴',
      authorRole: '科普作者',
      authorAffiliation: '本地天氣寫作者社群',
      excerpt: '我在做氣象科普時，常遇到一個問題：ensemble spread 圖專業上很重要，但一般讀者容易誤解成「官方預測不準」。大家怎樣平衡專業性與公眾溝通？',
      relativeTime: '4 天前',
      replyCount: 17,
      viewCount: 372,
      tags: ['科普', '預報溝通', '颱風']
    }
  ],
  ecology: [
    {
      id: 'eco-1',
      title: '米埔冬季水鳥紀錄，如何避免觀察者偏差？',
      authorName: '方雅雯',
      authorRole: '保育研究助理',
      authorAffiliation: '本地濕地保育機構',
      excerpt: '正在整理近三年的公民科學觀測紀錄，發現不同時段與觀察點的 effort 差異很大。若要做跨年度比較，大家會如何處理 detectability 與 sampling effort，才不會把觀察者習慣誤認為族群變化？',
      relativeTime: '6 小時前',
      replyCount: 16,
      viewCount: 354,
      tags: ['鳥類監測', '公民科學', '資料偏差']
    },
    {
      id: 'eco-2',
      title: '香港城市溪流 eDNA 監測有沒有公開資料可比對？',
      authorName: '葉承軒',
      authorRole: '本科生',
      authorAffiliation: '嶺南大學生態與環境課程',
      excerpt: '打算做一個小型城市溪流 biodiversity survey，想了解本地是否已有可公開取得的 eDNA 或 macroinvertebrate baseline dataset。若沒有，大家會建議如何設計最基本但仍有比較價值的採樣框架？',
      relativeTime: '昨天',
      replyCount: 8,
      viewCount: 198,
      tags: ['溪流生態', 'eDNA', '香港自然']
    },
    {
      id: 'eco-3',
      title: '郊野公園人流增加後，夜行性物種監測應如何調整？',
      authorName: '郭嘉怡',
      authorRole: '田野觀察員',
      authorAffiliation: '新界生態記錄小組',
      excerpt: '近年郊遊與夜間活動明顯增加，想討論 camera trap 位置、觀察時間窗與干擾因子的控制方法。若要比較疫情前後資料，大家通常如何處理？',
      relativeTime: '3 天前',
      replyCount: 12,
      viewCount: 289,
      tags: ['野外監測', '哺乳類', '保育方法']
    }
  ],
  'mechanical-energy': [
    {
      id: 'mech-1',
      title: '校園建築冷卻系統改造，先看 COP 還是全生命週期成本？',
      authorName: '許家樂',
      authorRole: '機電工程師',
      authorAffiliation: '香港工程顧問公司',
      excerpt: '最近參與一個校園冷卻系統升級方案，團隊內部對評估指標有分歧：有人主張先看設備效率，有人認為應以 maintenance、partial load behavior 與 replacement cycle 一併比較。想聽聽大家實務上的排序。',
      relativeTime: '5 小時前',
      replyCount: 22,
      viewCount: 471,
      tags: ['暖通空調', '能源效率', '工程評估']
    },
    {
      id: 'mech-2',
      title: '討論香港氫能示範項目的技術可行性與安全邊界',
      authorName: '高穎琳',
      authorRole: '博士候選人',
      authorAffiliation: '香港城市大學能源研究組',
      excerpt: '近月看了幾個本地氫能示範方案，感覺公眾討論常停留在口號層面。想開一串集中談 storage、transport、end-use efficiency 及 urban safety constraint，看看香港場景下哪些環節真正值得投入。',
      relativeTime: '2 天前',
      replyCount: 19,
      viewCount: 362,
      tags: ['氫能', '能源政策', '城市基建']
    },
    {
      id: 'mech-3',
      title: '以學生團隊角度做小型風洞實驗，最常見的量測陷阱是甚麼？',
      authorName: '羅天衡',
      authorRole: '機械工程本科生',
      authorAffiliation: '香港科技大學工程學院',
      excerpt: '我們正準備做一個簡化版空氣動力學專題，但對 calibration、boundary effect 與資料重現性還沒有很有把握。想先收集常見踩雷點，避免做出來的結果只剩展示價值。',
      relativeTime: '4 天前',
      replyCount: 10,
      viewCount: 233,
      tags: ['流體力學', '實驗設計', '學生專題']
    }
  ]
}

export function getPostsByCategorySlug(slug: CategorySlug) {
  return categoryPostsBySlug[slug]
}

export function getPostByCategoryAndId(slug: CategorySlug, postId: string) {
  return categoryPostsBySlug[slug].find((post) => post.id === postId)
}

const categoryPostRepliesByPostId: Record<string, CategoryPostReply[]> = {
  'physics-1': [
    {
      id: 'physics-1-reply-1',
      authorName: '周宇軒',
      authorRole: '實驗物理研究員',
      relativeTime: '1 小時前',
      body: '我會先固定 coincidence window 做一版 baseline，再把 window 與 threshold 一起做二維敏感度掃描。這樣報告時可以清楚分開「方法假設」與「參數選擇」造成的變化。',
      likeCount: 12
    },
    {
      id: 'physics-1-reply-2',
      authorName: '葉芷晴',
      authorRole: '量子資訊博士生',
      relativeTime: '48 分鐘前',
      body: '如果目標是跨論文比較，建議你先整理各團隊 detector model 的假設表，包含 dark count 與 timing jitter。先對齊前提，再比 correction 才不會失焦。',
      likeCount: 9
    }
  ],
  'math-1': [
    {
      id: 'math-1-reply-1',
      authorName: '陳樂怡',
      authorRole: '分析學助教',
      relativeTime: '2 小時前',
      body: '教學上我會先問空間條件：若是 metric/first countable，序列法直觀；若是一般拓撲空間，先回到 open cover 會比較安全。',
      likeCount: 15
    }
  ],
  'math-2': [
    {
      id: 'math-2-reply-1',
      authorName: '曾嘉穎',
      authorRole: '統計學博士生',
      relativeTime: '1 小時前',
      body: '如果你由 mixed model 轉 Bayesian，我會先用最簡單的二層 random intercept 模型建立 baseline，再逐步加入層級結構。先確保 posterior predictive check 過得去，之後先談更複雜 prior。',
      likeCount: 16
    },
    {
      id: 'math-2-reply-2',
      authorName: '黃文浩',
      authorRole: '教育數據研究員',
      relativeTime: '42 分鐘前',
      body: '建議你同步比較 weakly informative prior 同 domain-informed prior 的敏感度，並用 out-of-sample 指標做模型比較。單靠 in-sample fit 好易低估分層模型過擬合風險。',
      likeCount: 12
    }
  ],
  'cs-1': [
    {
      id: 'cs-1-reply-1',
      authorName: '梁敬文',
      authorRole: 'NLP 工程師',
      relativeTime: '35 分鐘前',
      body: '先把 retrieval quality 拆出來是值得的，尤其繁中語料斷詞與命名實體差異大。先有一個可控的 top-k 召回，再看生成端 hallucination。',
      likeCount: 18
    },
    {
      id: 'cs-1-reply-2',
      authorName: '黃靜怡',
      authorRole: '產品研究員',
      relativeTime: '22 分鐘前',
      body: '端到端任務完成率也要早點放進來，不然 retrieval 指標很好看但實際答題體驗仍可能差。建議雙軌：離線檢索 + 小規模真人任務測試。',
      likeCount: 11
    }
  ],
  'astro-1': [
    {
      id: 'astro-1-reply-1',
      authorName: '張志強',
      authorRole: '物理系博士助理',
      relativeTime: '1 小時前',
      body: '觀察昨晚的大帽山雷達圖，在黑雨信號發出前 15 分鐘，確實看到對流單元在沙田上空出現垂直發展劇增的情況。除咗 merge，反映降雨密度的結構變化都係短時預報好關鍵嘅信號。',
      likeCount: 14
    },
    {
      id: 'astro-1-reply-2',
      authorName: '李家傑',
      authorRole: '博士研究生',
      relativeTime: '45 分鐘前',
      body: '公共版雷達資料時間分辨率有局限，實戰上建議同步睇各區雨量計嘅 5 分鐘滑動總和。當雷達回波增強同地面雨量同步上升，通常就代表對流系統已進入成熟階段。',
      likeCount: 8
    }
  ],
  'eco-1': [
    {
      id: 'eco-1-reply-1',
      authorName: '陳美琪',
      authorRole: '生態統計研究員',
      relativeTime: '2 小時前',
      body: '建議用 occupancy modeling 去修正 detectability。米埔唔同觀察點嘅遮蔽度同潮汐影響都幾大，將環境協變量同觀測 effort 一齊入模，會比 raw count 更可靠。',
      likeCount: 11
    },
    {
      id: 'eco-1-reply-2',
      authorName: '何子康',
      authorRole: '自然導賞導師',
      relativeTime: '1 小時前',
      body: '公民科學資料最常見問題係觀察者能力差異，我哋通常會先分 core observers 同一般參與者，再做 effort standardization，避免出現人流變化被誤當族群變化。',
      likeCount: 9
    }
  ],
  'mech-1': [
    {
      id: 'mech-1-reply-1',
      authorName: '馬健榮',
      authorRole: '高級機電顧問',
      relativeTime: '3 小時前',
      body: '喺香港校園改造場景，我會優先睇 LCC 而唔係只睇額定 COP。部分負載運行時間好長，如果忽略 part-load 區間，後續運維成本通常會被低估。',
      likeCount: 19
    },
    {
      id: 'mech-1-reply-2',
      authorName: '林思敏',
      authorRole: '可持續發展工程師',
      relativeTime: '2 小時前',
      body: '補充一點：若校園有淨零目標，建議把設備更換的隱含碳都納入評估。好多時系統優化加控制策略調校，會比單純換高規格設備更有成本效益。',
      likeCount: 13
    }
  ]
}

export function getRepliesByPostId(postId: string) {
  return categoryPostRepliesByPostId[postId] ?? []
}