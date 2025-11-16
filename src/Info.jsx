import './Info.css'

const flowData = [
  { number: 1, text: '仕入れ', icon: '/public/flow_icon_1.svg' },
  { number: 2, text: '広告掲載', icon: '/public/flow_icon_2.svg' },
  { number: 3, text: '問い合わせ対応', icon: '/public/flow_icon_3.svg' },
  { number: 4, text: '商談', icon: '/public/flow_icon_4.svg' },
  { number: 5, text: '販売・納車', icon: '/public/flow_icon_5.svg' },
  { number: 6, text: 'アフターフォロー', icon: '/public/flow_icon_6.svg' },
];


function Info() {
  return (
    <>
      <section>
        <div className="infoBox">
          <div className="infoHeading">
            <h2>中古車販売管理システム「symphony」</h2>
            <p>「symphony（シンフォニー）」は、</p>
            <p><span>中古車販売に必要なさまざまな業務を一言仮できる、</span>中古車販売に特化した管理システムです。</p>
          </div>
          
          {/* 繰り返し部分を map() で動的に生成 */}
          <div className="contents">
            <div className="contentsDetail">
              {flowData.map((item) => (
                <div className="detailParts" key={item.number}>
                  <div className="detail">
                    <div className="number">
                      {item.number}
                    </div>
                    {item.text}
                    <img src={item.icon} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detailSummary">
            <div className="dsText">
              <span>車両情報と紐づけて、全てのご業務を一元管理</span>
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

            {/* <div className="detail-parts">
              <div className="detail">
                <div className="number">
                  1                
                </div>
                仕入れ
                <img src="/public/flow_icon_1.svg" />
              </div>
            </div>
            <div className="detail-parts">
              <div className="detail">
                <div className="number">
                  2                
                </div>
                仕入れ
                <img src="/public/flow_icon_1.svg" />
              </div>
            </div>
            <div className="detail-parts">
              <div className="detail">
                <div className="number">
                  3                
                </div>
                仕入れ
                <img src="/public/flow_icon_1.svg" />
              </div>
            </div>
            <div className="detail-parts">
              <div className="detail">
                <div className="number">
                  4                
                </div>
                仕入れ
                <img src="/public/flow_icon_1.svg" />
              </div>
            </div>
            <div className="detail-parts">
              <div className="detail">
                <div className="number">
                  5                
                </div>
                仕入れ
                <img src="/public/flow_icon_1.svg" />
              </div>
            </div>
            <div className="detail-parts">
              <div className="detail">
                <div className="number">
                  6                
                </div>
                アフターフォロー
                <img src="/public/flow_icon_1.svg" />
              </div>
            </div> */}


export default Info