import './CustomerVoice.css'

const flowData = [
  { number: 1, img: '/public/interview1.jpg', label: '販売管理', comment: '「symphony」で粗利計算まで統合して管理！これさえあれば中古車販売ができます。', company: '株式会社オートスタイルトレーディング' },

  { number: 2, img: '/public/interview2.jpg', label: '広告掲載', comment: '「symphony」で販売車両と顧客情報を一元管理！「ヤフオク!」の活用で収益・集客の拡大にも繋がりま...', company: '株式会社デッカー' },

  { number: 3, img: '/public/interview3.png', label: '中古保証', comment: '「タイヤパンク保証」の付帯、勧められて始めた「ヤフオク！」「AS-NET」への掲載で売上が向上！別...', company: 'RAYS GARAGE(レイズガレージ) 株式会社' },
];


function CustomerVoice() {
  return (
    <>
      <section>
        <div className="customerVoicebox">
          <h2>symphonyを利用した中古車販売店様の声</h2>
          <div className="cvDescription">
            <p>「symphony（シンフォニー）」は、</p>
            <p>中古車販売に必要なさまざまな業務を一言仮できる、中古車販売に特化した管理システムです。</p>
          </div>
          
          {/* 繰り返し部分を map() で動的に生成 */}
          <div className="customerVoice">
            {flowData.map((item) =>(
              <div className="customerVoiceContents" key={item.number}>
                <div className="cvImg">
                  <img src={item.img} />
                </div>

                <div className="customerVoicedetail">
                  <div className="cvLabel">
                    {item.label}
                  </div>

                  <div className="cvComment">
                    {item.comment}
                  </div>
                  <div className="cvCompany">
                    {item.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cvCta">
            <div className="cvButton">
            活用事例をもっとみる
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

export default CustomerVoice