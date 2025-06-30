
---
[README](https://github.com/dkssud-dus/webRedesign-StudioGhibli) | [README_ja](https://github.com/dkssud-dus/webRedesign-StudioGhibli/blob/main/README_ja.md)

`#RedesignProject` `#Website` `#TeamProject` `#3PeopleTeam` `#Responsive` `#Mobile`
# **Website Redesign Project Details:**
### スタジオジブリ Studio Ghibli

<br/>
<br/>
<br/>

## **役割**
| 名前         | 担当領域           | メインページ作業                                          | サブページ作業                                                  |
|--------------|-------------------------------|---------------------------------------------------------|----------------------------------------------------------------|
| 👑 조효희, Jo hyo hee | 情報伝達                 | Header, Navigation, Ghibli Event, Ghibli Location                                | Studio Ghibli Information, Notice, Event (Calendar), Q&A                            |
| 김채연, Kim chae yeon   | ビジュアル + 情報融合           | Music Control, Main visual, Studio Ghibli information · history, Movies                          | Movie List, Movie Detail                                                           |
| 박서영, Park seo young | 情報伝達        | Notice, Inside, Email, Footer, Top button, Pagenation (section anchor)                          | Ghibli Location, Ghibli Museum, Ghibli Park, Ghibli Event (Weather)                 |

</br>

> README 作成者 & 最終編集者: 김채연, Kim chae yeon

<br/>
<br/>
<br/>

## 目次

1. [プロジェクト概要](#1-プロジェクト概要)   
2. [コア機能](#2-コア機能)   
3. [ページ別機能](#3-ページ別機能)    
   
</br>
</br>
</br>

---

## 1. プロジェクト概要
### 1.1. 背景
スタジオジブリは世界的なアニメーションブランドとして、日本国内のファンだけでなく海外にも数多くのファンを持っている。しかし、公式ホームページの場合、日本語のみをサポートしており、海外ファンのアクセシビリティが著しく低かった。また、ユーザーを考慮した利便性・必要性機能（検索、トップボタンなど）が貧弱で、利用に困難を感じる可能性があった。メインページとサブページの両方で情報を単純な文章で配置し、スタジオジブリのIPを適切に活用できていない様子を見せていた。   

</br>

このプロジェクトの目的は以下の通りである。

</br>

1. 「スタジオジブリ」というブランドのイメージを具体化したい。
2. 公式情報だけでなく、文化コンテンツまで伝えるポータルの役割を果たしたい。
3. 日本国内のファンだけでなく、全世界のファンが簡単にアクセスできるグローバルサイトを作りたい。

</br>
</br>
</br>

### 1.2. キーワード
1. **温かさ、居心地の良さ**   
  1.1. スタジオジブリならではの感性   
  1.2. 童話のような雰囲気   
  1.3. 視覚的魅力の最大化

</br>

2. **多言語サポート**   
  2.1. スタジオジブリの世界中のファンの公式ハブ

</br>

3. **直感性**   
  3.1. 簡潔で明確に、ユーザーの利便性を考慮   

</br>
</br>
</br>

---

## 2. コア機能
### 音楽と動画などのメディアコンテンツ使用
1. `iframe`を活用した動画再生
2. 音楽再生の有効化および進行バー制御

</br>
</br>
</br>

### 大量の情報伝達のためのアコーディオンメニュー
1. JSを活用
2. Notice、Q&Aなどのサブページで使用

</br>
</br>
</br>

---

## 3. ページ別機能

### 3.1. [メインページ](https://dkssud-dus.github.io/webRedesign-StudioGhibli/index_jp.html)

---

### 3.1.1. 音楽コントロール
![mainpage-music](https://github.com/user-attachments/assets/8db360ac-28e7-451d-87e6-f9e4eb8da978)

<br/>

#### 実装概要
1. メインページアクセス時に音楽有効化の是非画面が最初に登場する。
2. ON / OFFで選択し、その後も画面下部右側にミュートボタンと再生ボタンで音楽を有効化できるようにした。
3. 背景画面とGIFイメージはスタジオジブリのIPを活用し、初回ユーザーがページにアクセスした際に「スタジオジブリ」のイメージを強く印象付けられるようにした。

<br/>

> Lead: 김채연, Kim chae yeon

</br>
</br>
</br>

### 3.1.2. Header + Navigation
![mainpage-nav](https://github.com/user-attachments/assets/fa19c116-6a82-476e-a885-f34f9acee669)

<br/>

#### 実装概要
1. 左側にジブリロゴを配置し、メインページへの常時移動を可能にした。
2. 右側には検索ボックス・グローバルボタン・ハンバーガーボタンを配置した。
3. グローバルボタンをクリックすると、韓国語・英語・日本語に言語を変更できるようにした。
4. ハンバーガーボタンをクリックすると、画面全体にナビゲーションが表示され、各メニューは見つけやすいように一行で配置された。
5. 該当メニューをホバーすると、イメージを挿入し彩色したような効果を表現するようにした。

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.1.3. ページネーション (section anchor)
![mainpage-pagenation](https://github.com/user-attachments/assets/5a58e712-113f-4778-924b-105bb21a13cc)

<br/>

#### 実装概要
1. メインページ左側にページネーションを配置し、各セクションに移動してユーザーの利便性を拡大した。

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

### 3.1.4. メインビジュアル
![mainpage-visual](https://github.com/user-attachments/assets/e65663c1-8d26-42c2-b258-58ae3552d7e9)

<br/>

#### 実装概要
1. メインページの中央にボックス形式で動画が登場する。
2. スクロール時に動画のサイズが画面いっぱいに広がり、スタジオジブリの映画のセリフが↑方向に浮かび上がる。

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

### 3.1.5. Studio Ghibli 情報・沿革
![mainpage-company](https://github.com/user-attachments/assets/5f92443d-9553-448f-af4b-efead11fe03e)

<br/>

#### 実装概要
1. メインビジュアルと続く領域である。
2. メインビジュアル映像にオーバーレイが重ねられ、背景映像が暗く見える形で制作された。
3. 左側にはスタジオジブリについての簡単な説明が配置され、「詳細」ボタンでサブページ「会社紹介」に移動可能である。
4. 右側にはスタジオジブリの作品年表がアニメーション効果で↑方向に移動し、マウスの侵入により停止が可能である。
5. 右側の作品タイトルをクリックすると、背景がイメージスワイパーに切り替わり、各作品のイメージを見ることができるようにした。

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

### 3.1.6. お知らせ
![mainpage-news](https://github.com/user-attachments/assets/4da9fb28-f282-445c-9ee5-fbb52ef1d3cc)

<br/>

#### 実装概要
1. マウススクロール時にお知らせ部分に到達すると、AOS機能を使用して左右から要素が登場し、中央で出会うようにした。
2. 左側のイメージはホバー時にオーバーレイが消え、右側の内容もホバー時にテキストの色が変更されるようにした。

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

### 3.1.7. ジブリイベント
![mainpage-event](https://github.com/user-attachments/assets/01498a22-9426-420a-bb6d-bfa88efa7c88)

<br/>

#### 実装概要
1. 右側の日付スクロールで該当日付を探してクリックできるように制作された。
2. 日付をクリックすると、該当日付に合うイベントが左側にチケット形式で登場する。
3. また、進行中のイベントも確認可能になるようスワイパーを使用し、ボタンを押してイベント内容を確認できるようにした。
4. 詳細ボタンをクリックするとサブページ「ジブリイベント」に移動可能である。

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.1.8. 映画
![mainpage-movie](https://github.com/user-attachments/assets/6d1f9ee4-b3e6-42f8-9beb-35f62008ab11)

<br/>

#### 実装概要
1. スタジオジブリの映画紹介セクションである。
2. 映画が配置される分、映画フィルム形式が背景に敷かれるようにデザインした。
3. 映画ポスターはスワイパーで挿入し、各映画ポスターをホバーすると該当領域がスケールし、映画トレーラーがiframeでミュート形式で自動再生されるようにした。
4. マウスが侵入しないとスワイパーは自動で動き、無限ループするようにした。

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

### 3.1.9. インサイド
![mainpage-inside](https://github.com/user-attachments/assets/29e8932b-f0ff-4c54-95e8-3b4a4cf6f496)

<br/>

#### 実装概要
1. スタジオジブリが追求する方向性およびアイデンティティを表す領域として、計6つの内容をタブ形式で構成した。
2. 下部のイメージをクリックすると内容が変更されるようにした。
3. レスポンシブでは下部のイメージが6個並列形式から3個ずつ2列並列に変更される。

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

### 3.1.10. ジブリロケーション
![mainpage-map](https://github.com/user-attachments/assets/0afe0333-a52e-4a32-9769-94bd4cea61ae)

<br/>

#### 実装概要
1. ジブリパークとジブリ美術館を表す地図を制作し中央に配置、各位置にリンクを設けてサブページに移動できるように構成した。
2. 地図イメージ内部の位置を素早く把握できるようアイコンにアニメーションを挿入し、ユーザーの目に留まるようにした。
3. 背景にはスタジオジブリのIPを活用してキャラクターイメージを各所に配置し、360度回転するアニメーションを挿入した。

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.1.11. メール
![mainpage-email](https://github.com/user-attachments/assets/575381e3-626d-4b8f-abd4-9d3179109b64)

<br/>

#### 実装概要
1. できるだけきれいだが情報の認識が早くできるよう実装した。

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

### 3.1.12. フッター
![mainpage-footer](https://github.com/user-attachments/assets/6ee13552-4519-445f-b73b-0db32544dba3)

<br/>

#### 実装概要
1. きれいに構成するよう努力した。
2. トップボタンを組み合わせて作業し、トップボタン内部にはスタジオジブリの作品キャラクターを利用してジブリのIPを活用するようにした。
3. トップボタンはスクロール量が一定部分入らないと登場しないようにし、クリック時には滑らかに上部に移動するようにした。

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

---

### 3.2. サブページ (9)

---

### 3.2.1. [Studio Ghibli情報](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_jp/ghibli-data_jp.html)
![subpage-company-banner](https://github.com/user-attachments/assets/09ac48f0-9504-45e5-9a46-671e8a19d61b)

<br/>

#### 実装概要
1. ジブリ会社についての情報サブページである。
2. 上部のバナーは左右に動くアニメーションを活用してジブリの作品名を込め、目が疲れないよう文字は色なしで進行し、ハッシュタグ部分はポイントカラーを使用して生き生きと表現した。
  
<br/>
<br/>
<br/>
    
![subpage-company-content](https://github.com/user-attachments/assets/5583213f-2dad-4142-8982-edc1194b9261)

<br/>

#### 実装概要
1. 会社情報はテーブル形式で実装して可読性を持たせ、下部の事業内容は情報を写真と共に挿入して直感的に確認できる。   
2. 事業内容はホバー時にオーバーレイが消える形で実装されている。   

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.2.2. [お知らせ](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_jp/ghibli-news_jp.html)
![subpage-news-banner](https://github.com/user-attachments/assets/d25938f7-5999-4969-a6e0-a8fc01b7cffa)

<br/>

#### 実装概要
1. ジブリで上がる最新情報、または告知事項についてのサブページである。
2. 上部のバナーは左右に動くアニメーションを活用してジブリの作品名を込め、目が疲れないよう文字は色なしで進行し、ハッシュタグ部分はポイントカラーを使用して生き生きと表現した。
  
<br/>
<br/>
<br/>
    
![subpage-news-content](https://github.com/user-attachments/assets/64932e15-d556-43d9-b023-dd983a560ded)

<br/>

#### 実装概要
1. 最上部には検索ボックスを活用して素早く探せるようにデザインした。   
2. 全体的なニュースはカード形式で制作し、写真と簡単に内容を確認できるカード形式で進行し、1列に3つのカードが見えるようgridを活用して構成した。   
3. カードをホバーする場合、カード内の写真のスケールが大きくなるよう制作された。   
4. 下部にはジブリパーク、美術館に移動するボタンを作り、自然に他のサブページに移動できる。   

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>

### 3.2.3. [イベント](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_jp/ghibi-event_jp.html)
![subpage-event-banner](https://github.com/user-attachments/assets/ed6dfa8d-a62b-4a7a-bdf9-476bc5342643)

<br/>

#### 実装概要
1. ジブリのイベントを見ることができるサブページである。
2. 上部のバナーは左右に動くアニメーションを活用してジブリの作品名を込め、目が疲れないよう文字は色なしで進行し、ハッシュタグ部分はポイントカラーを使用して生き生きと表現した。
   
<br/>
<br/>
<br/>
    
![subpage-event-content1](https://github.com/user-attachments/assets/6cdc5c2f-d4a1-45ed-bb89-ca6851c3bbde)

<br/>

#### 実装概要
1. 最初に登場するカレンダーは該当日付に何個のイベントがあるかを示し、日付領域をホバー時に背景色が変更されてカーソル位置確認が簡単になるよう制作した。   
2. カレンダーが5月に移ると警告ウィンドウで「前月の情報がありません」が表示され、7月に移ると7月カレンダーの情報が出るようにした。   
3. イベント領域は日付をクリックしなかった場合、日付を選択してくださいという文句が出て、日付をクリック時は該当日付に合うイベント情報がカード形式で登場するようにした。   
4. レスポンシブではカレンダーの形は維持され、イベントはモーダル形式でポップアップされるよう制作した。   

<br/>
<br/>
<br/>
    
![subpage-event-content2](https://github.com/user-attachments/assets/c76b2e39-67f9-41a2-a3bc-01afd8286cd4)

<br/>

#### 実装概要
1. スタジオジブリの本社である東京を基準に、ページアクセス時には当日の天気が表示されるようにした。   
2. 該当天気ボックスをクリック時には1週間の天気情報が出るようにした。   
3. レスポンシブでは、イベントカレンダー下部に配置されることが情報性の面で便利だと判断し、固定的な内容として挿入した。   

</br>

> Lead: 조효희, Jo hyo hee & 박서영, Park seo young

</br>
</br>
</br>

### 3.2.4. [映画リスト](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_jp/movie-list_jp.html)
![subpage-movielist-banner](https://github.com/user-attachments/assets/94b940dd-aa11-4d2e-aee7-0c51f329acc9)

<br/>

#### 実装概要
1. ページ進入時に登場する映画ポスターはアニメーションを活用し、最新公開順 / 公開年度順で方向を変えて動くようにデザインした。

<br/>
<br/>
<br/>
    
![subpage-movielist-content](https://github.com/user-attachments/assets/d79c0800-3731-4d62-85a1-076d5adc408d)

<br/>

#### 実装概要
1. 検索窓には映画タイトルを配列で受け取り、自動でタイピングされる形式でユーザーにヒントを与えユーザーが便利になるようにした。   
2. 作品目録は最新公開順 / 公開年度順 / 作品タイトル順で自動整列されるようにした。   
3. それぞれの映画ポスターをホバー時には映画タイトルと映画公開日が登場するようにした。   
4. レスポンシブでは、3列配置された映画ポスターが1列配置に変更されるようにした。   

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

### 3.2.4.1. [映画詳細](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_kr/movie27.html)
![subpage-movie-banner](https://github.com/user-attachments/assets/44584e19-1dc3-45ec-ab8b-38908a9c24bf)

<br/>

#### 実装概要
1. ページ進入時に映画トレーラーがミュート状態で自動再生されるようにした。

<br/>
<br/>
<br/>
    
![subpage-movie-content](https://github.com/user-attachments/assets/82aa1bcd-2842-4caa-adda-9e98bfc54509)

<br/>

#### 実装概要
1. すぐに登場する音楽コントローラーは、音楽の再生を有効化または無効化できるようにし、音楽進行バーをクリックして音楽進行位置を調節できるようにした。
2. 両端の≪≫ボタンは音楽が1つだけ挿入されたため、再生中の音楽が最初に戻る役割のみ実行するようにした。
   
<br/>
<br/>
<br/>
    
![subpage-movie-content2](https://github.com/user-attachments/assets/b7b45031-b6da-42a1-9d37-b987cc6643ad)

<br/>

#### 実装概要
1. 「アニメーション主要キャラクターに会う」では、それぞれの登場人物をクリックして名セリフと簡単な説明・イメージを見ることができるようにした。
2. 登場人物アイコン / 名セリフおよびイメージ、簡単な説明 / 映像リンク順で3列配置されるようにした。
3. レスポンシブでは、「アニメーション主要キャラクターに会う」の配置が変更されイメージと説明下部に映像リンクを確認可能にした。

<br/>
<br/>
<br/>
    
![subpage-movie-content3](https://github.com/user-attachments/assets/396e9ebd-959a-4b39-b879-1e76a9489ad1)

<br/>

#### 実装概要
1. 「アニメーション内のシーンをもう一度見る」では、スワイパーを使用して映画内のシーンを見ることができるようにした。
2. レスポンシブでは、3列配置されたイメージが1列のみ配置され、1つのイメージを大きく見ることができるようにした。

<br/>

> Lead: 김채연, Kim chae yeon

<br/>
</br>
</br>

#### 3.2.5. [ジブリロケーション](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_jp/total-ghibli_jp.html)
![subpage-location](https://github.com/user-attachments/assets/bb4d111e-91ea-4076-8c82-d5cfcfe9da6b)

<br/>

#### 実装概要
1. マウスの位置によってイメージのサイズが変わり、両方向とも各々のサブページに移動できるよう実装した。

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

#### 3.2.5.1. [ジブリパーク](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_jp/ghibli-park_jp.html)
![subpage-park](https://github.com/user-attachments/assets/a6d9e4b1-3b96-4d56-b397-d94b237b8ab5)

<br/>

#### 実装概要
1. チケット部分のデザインをレシート形式にしてより現実感がありながらスタジオジブリ特有の可愛らしい感性を活かすようにした。
2. 注意事項はアコーディオン形式で構成し、すでに有効化されたアコーディオンは他のアコーディオンメニューがクリックされた際に無効化されるよう実装した。
3. 地図APIを活用して位置を表示する機能が含まれるようにした。

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

#### 3.2.5.2. [ジブリ美術館](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_jp/ghibli-museum_jp.html)
![subpage-museum](https://github.com/user-attachments/assets/fc78825e-5491-4a51-8bb5-84dc74776f7f)

<br/>

#### 実装概要
1. チケット部分のデザインをレシート形式にしてより現実感がありながらスタジオジブリ特有の可愛らしい感性を活かすようにした。
2. 注意事項はアコーディオン形式で構成し、すでに有効化されたアコーディオンは他のアコーディオンメニューがクリックされた際に無効化されるよう実装した。
3. 地図APIを活用して位置を表示する機能が含まれるようにした。

</br>

> Lead: 박서영, Park seo young

</br>
</br>
</br>

#### 3.2.6. [Q&A](https://dkssud-dus.github.io/webRedesign-StudioGhibli/pages_jp/ghibli-QnA_jp.html)
![subpage-qna-banner](https://github.com/user-attachments/assets/7d43857a-294a-4a20-9ed0-e552e8c294df)

<br/>

#### 実装概要
1. ジブリのQ&Aサブページである。
2. 上部のバナーは左右に動くアニメーションを活用してジブリの作品名を盛り込んだもので、目が疲れないよう文字は色を使わず進行し、ハッシュタグ部分はポイントカラーを使用して生き生きと表現した。

</br>
</br>
</br>

![subpage-qna-content](https://github.com/user-attachments/assets/22413aa9-49a5-4215-bf33-b30389b38c5f)

<br/>

#### 実装概要
1. よくある質問はアコーディオン形式を活用して質問が一目で見えるよう制作し、アクティブな質問は他の質問がクリックされた際に非アクティブになるよう実装した。
2. 「お探しの内容」部分はホバー時に色が変更され、上部に少し移動するアニメーション効果を与えた。
3. レスポンシブに変更する際、「お探しの内容」内の内容が簡単にキーワードに変わるようにした。
4. 下部には質問を登録できるようform形式を活用して制作した。

</br>

> Lead: 조효희, Jo hyo hee

</br>
</br>
</br>
---
