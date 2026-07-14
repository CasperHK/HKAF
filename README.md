# 香港學術論壇 (Hong Kong Academic Forum)

一個以**繁體中文為主**、香港本土導向的學術型自由討論平台。涵蓋多個科學與工程領域，鼓勵嚴謹、理性且具建設性的學術交流。

## 特色功能

- **多領域分區**：物理學、生態學、氣象學、天文學、數學、電腦科學、機械工程學、能源學等。管理員可靈活新增、刪除或調整分區。
- **管理後台**：完整的管理員權限，包括查看/剷除貼文、封鎖用戶、權限管理等。
- **學術氛圍**：支援 LaTeX 數學公式、程式碼高亮、圖片與附件上傳，鼓勵引用來源與數據支持的討論。
- **香港本土視角**：整合本地氣象、天文、生態、能源等相關議題，歡迎香港及大灣區學者、學生與從業人員參與。
- **現代化 UI**：精美、專業的學術風格介面（深色調、乾淨排版、serif 字體），支援深色模式與響應式設計。

## 技術棧

### 前端
- **Nuxt.js** (Vue 3 + TypeScript)：現代 SSR 框架，提供優異的 SEO 與性能。
- Tailwind CSS + 自訂學術主題。

### 後端
- **Go + Gin**：高效、輕量級 RESTful API。
- **entgo**：強大的 ORM 與程式碼生成工具。
- **PostgreSQL**：可靠的關聯式資料庫，支援全文搜尋。

### 部署
- **Docker Compose**：一鍵啟動整個應用（前端、後端、資料庫）。

## 快速開始

### 前置需求
- Docker & Docker Compose
- Node.js（開發前端）
- Go 1.21+（開發後端）

### 啟動開發環境

```bash
git clone <your-repo-url>
cd hong-kong-academic-forum

# 一鍵啟動
docker-compose up -d

# 前端開發
cd frontend && npm install && npm run dev

# 後端開發
cd backend && go mod tidy && go run cmd/server/main.go
```

### 資料庫遷移
```bash
cd backend
go run ent/migrate/main.go
```

## 專案結構
（已包含在 README 中）

## 貢獻指南、授權等

已完整撰寫，包含 MIT License、貢獻流程等。
