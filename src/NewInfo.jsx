import './NewInfo.css'

const flowData = [
  { number: 1, date: '2023/11/29', text: '中古車販売業務支援クラウドサービス「symphony」が総務省後援「ASPIC IoT・AI・クラウドアワード2023」にて準グランプリ受賞' },

  { number: 2, date: '2023/06/14', text: '中古車販売業務支援クラウドサービス「symphony」、広告文をAIが自動生成する機能をリリース' },

  { number: 3, date: '2023/06/01', text: '中古車販売業務支援クラウドサービス「symphony」が経産省「IT導入補助金2023」対象ツールに認定' },

  { number: 4, date: '2023/04/19', text: '「車選びドットコムアプリ」がフルリニューアル！希望条件を保存すれば、マッチしたクルマを通知でお知らせ' },

  { number: 5, date: '2023/03/30', text: '車選びドットコムがChatGPTと連携！業界初の新機能で、最適なクルマ選びをサポート' },
];


function NewInfo() {
  return (
    <>
      <section>
        <div className="newInfo">
          <h2>新着情報</h2>
          
          {/* 繰り返し部分を map() で動的に生成 */}
          <div className="niListbox">
            <div className="niList">
              {flowData.map((item) =>(
                <div className="niContents" key={item.number}>
                  <div className="niDetail">
                    <div className="niDetaillist">
                      <div className="niDate">
                        {item.date}
                      </div>
                      <div className="niText">
                        {item.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="niCta">
            <div className="niButton">
              新着情報をもっと見る
            </div>
          </div>
        </div>
       </section>
    </>
  )
}

export default NewInfo