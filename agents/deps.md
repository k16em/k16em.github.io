# 技術スタック

## ビルドツール・パッケージマネージャー

| ツール名 | バージョン | 用途 |
|---------|-----------|------|
| **Vite** | ^6.2.6 | ビルドツール |
| **pnpm** | - | パッケージマネージャー |

## フロントエンド

| 技術名 | バージョン | 説明 |
|-------|-----------|------|
| **JavaScript (ES Modules)** | - | モジュール形式 |
| **HTML5** | - | マークアップ言語 |
| **CSS3** | - | カスタムスタイル |

## CSSフレームワーク

| テクノロジー | バージョン | 説明 |
|------------|-----------|------|
| **Tailwind CSS** | ^4.1.4 | CSSユーティリティフレームワーク |
| **@tailwindcss/vite** | ^4.1.4 | Viteプラグイン |

## デザイン・UI

| 技術名 | 説明 |
|-------|------|
| **Google Fonts** | Zen Kurenaido (日本語フォント) |
| **Google Material Symbols** | アイコンライブラリ |

## デプロイ

| ツール名 | 用途 |
|---------|------|
| **GitHub Actions** | CI/CD自動デプロイ |

## ディレクトリ構成

```
k16em.github.io/
├── src/                    # ソースコード
│   ├── index.html         # メインHTML
│   └── assets/
│       ├── css/style.css  # カスタムスタイル
│       ├── data/links.json # リンクデータ
│       └── images/icons/cat.jpg  # アイコン画像
├── .github/workflows/      # CI/CD設定
├── agents/                 # エージェント用ディレクトリ
│   └── deps.md            # 技術スタック定義
├── .tool-versions         | # バージョン管理ファイル
├── .gitignore             | # Git無視ファイル設定
├── LICENSE                | # ライセンス
├── package.json           # 依存関係管理
├── pnpm-lock.yaml         # パッケージロックファイル
├── tailwind.config.js     # Tailwind設定
└── vite.config.js         # Vite設定
```