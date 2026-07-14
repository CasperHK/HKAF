export type Category = {
  slug: string
  title: string
  englishTitle: string
  description: string
  overview: string
  lead: string
  themes: string[]
  highlights: string[]
}

export const categories = [
  {
    slug: 'physics',
    title: '物理學',
    englishTitle: 'Physics',
    description: '討論理論、實驗、量測方法與香港學界關注的前沿研究。',
    overview: '從基礎定律到高能、凝聚態與跨學科應用，這裡適合嚴謹推演與資料導向交流。',
    lead: '為研究者、學生與業界技術人員提供一個可深入驗證假設、交換文獻與討論方法論的公開場域。',
    themes: ['理論推導與模型比較', '實驗設計與量測誤差', '香港相關研究與學術資訊'],
    highlights: ['重視公式、數據與引用來源', '鼓勵完整推導與反例討論', '適合跨院校交流']
  },
  {
    slug: 'math',
    title: '數學',
    englishTitle: 'Mathematics',
    description: '涵蓋純數、應數、統計與建模，適合深入推導與嚴謹辯論。',
    overview: '聚焦結構、證明、抽象方法與數理應用，為不同程度的數學討論建立高門檻但友善的交流空間。',
    lead: '無論是定理理解、題目剖析、模型建立或研究方向思考，都以清晰邏輯與嚴謹表述為核心。',
    themes: ['證明技巧與解題策略', '統計建模與應用數學', '學習路線與研究選題'],
    highlights: ['適合長篇推導與公式討論', '支援不同方向的數學社群交流', '鼓勵清楚定義問題邊界']
  },
  {
    slug: 'computer-science',
    title: '電腦科學',
    englishTitle: 'Computer Science',
    description: '從演算法、系統、人工智能到開源實作，連接研究與工程。',
    overview: '把理論計算、系統設計與實作經驗放在同一個討論框架中，適合研究者與工程師共同參與。',
    lead: '鼓勵以論文、基準測試、架構分析與實際程式實現來支持觀點，而不只停留在概念層面。',
    themes: ['演算法與複雜度', '系統、網絡與基礎設施', '人工智能與開源實作'],
    highlights: ['研究與工程語境並重', '適合分享實驗結果與原型', '有利於跨領域合作']
  },
  {
    slug: 'astronomy-meteorology',
    title: '天文學與氣象學',
    englishTitle: 'Astronomy and Meteorology',
    description: '聚焦香港天氣、觀測資料、天體現象與本地觀星社群。',
    overview: '結合天空觀測、氣象資料與本地環境脈絡，建立兼具科普價值與研究深度的討論面向。',
    lead: '非常適合香港在地觀測者、學生與愛好者分享資料、分析現象與比對模型。',
    themes: ['本地觀測與資料解讀', '天體事件與觀星紀錄', '天氣模型與預報討論'],
    highlights: ['強調香港與大灣區脈絡', '適合圖表與時間序列分析', '連接社群實地觀測經驗']
  },
  {
    slug: 'ecology',
    title: '生態學',
    englishTitle: 'Ecology',
    description: '圍繞本地生境、保育議題、物種紀錄與田野觀察交流。',
    overview: '從城市生態到保育政策，把田野觀察、資料記錄與公共討論結合起來，建立具地方性的知識社群。',
    lead: '希望把學術研究、教育工作與民間觀察者的經驗連接起來，讓在地自然議題被更細緻地理解。',
    themes: ['香港生境與物種觀察', '保育政策與環境議題', '田野方法與公民科學'],
    highlights: ['強調本地資料與實地經驗', '鼓勵跨專業參與', '有助建立長期觀察記錄']
  },
  {
    slug: 'mechanical-energy',
    title: '機械與能源',
    englishTitle: 'Mechanical Engineering and Energy',
    description: '連接工程設計、能源轉型、材料應用與可持續技術討論。',
    overview: '面向工程實作與產業問題，把設計、製造、能源系統與永續技術放在同一個討論框架內。',
    lead: '適合從原理、模擬、案例到政策和基建角度討論技術可行性與本地應用。',
    themes: ['工程設計與系統整合', '能源轉型與基建', '材料、效率與可持續技術'],
    highlights: ['重視可落地的技術討論', '適合案例研究與方案比較', '連接學術與實務場景']
  }
] satisfies Category[]

export type CategorySlug = (typeof categories)[number]['slug']

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug)
}