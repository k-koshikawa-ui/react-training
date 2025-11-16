import './UsefulInfo.css'

const flowData = [
  { number: 1, img: '/public/usefulInfo1.png', title: '【2025年9月最新版】中古車市場統計レポート -2025年...', text: '普通自動車の登録台数を発表している「自販連（一般社団法人 日本自動車販売協会連合会）」と、軽自動車の登録台数を発表している「全軽自協（一般社団法人 全国軽自動...' },

  { number: 2, img: '/public/usefulInfo2.jpg', title: '電子車検証の情報更新を行うには？ – 手続き編', text: '2023年から普通自動車、2024年からは軽自動車も電子車検証に切り替わっており、電子車検証を情報更新する機会もあるかと思います。電子車検証の情報を書き換える...' },

  { number: 3, img: '/public/usefulInfo3.png', title: '中古車の支払総額 表示義務化 | 変更内容と注意点を徹底解説', text: '2023年10月より中古車を販売する際に支払総額を表示することが義務付けられました。本記事では、そもそも支払総額には何を含めるべきなのか、広告表示と異なる請求...' },

];


function UsefulInfo() {
  return (
    <>
      <section>
        <div className="usefulInfo">
          <h2>中古車販売お役立ち情報</h2>
          <div className="uiDescription">
            <p>中古車販売をご担当する方々に向けた、日々の業務に役立つ様々な情報をお届けします。</p>
          </div>
          
          {/* 繰り返し部分を map() で動的に生成 */}
          <div className="uiList">
            {flowData.map((item) =>(
              <div className="uiContents" key={item.number}>
                <div className="uiImg">
                  <img src={item.img} />
                </div>

                <div className="uiDetail">
                  <div className="uiTitle">
                    {item.title}
                  </div>
                  <div className="uiText">
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="uiCta">
            <div className="uiButton">
              中古車販売お役立ち情報をもっと見る
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

export default UsefulInfo