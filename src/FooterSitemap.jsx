import './FooterSitemap.css'

const flowData = [
  { number: 1, text1: '販売管理', text2: '新着情報' },

  { number: 2, text1: '広告掲載', text2: '資料請求' },

  { number: 3, text1: '保証サービス', text2: 'お問合せ' },

  { number: 4, text1: 'オートローン', text2: 'プライバシーポリシー' },

  { number: 5, text1: '活用事例', text2: '会社概要' },

  { number: 6, text1: '導入・サポート', text2: 'サイトマップ' },

  { number: 7, text1: '料金案内' },

  { number: 8, text1: '中古車販売お役立ち情報' },

];


function FooterSitemap() {
  return (
    <>
      <section>
        <div className="FooterSitemap">          
          {/* 繰り返し部分を map() で動的に生成 */}
          <div className="fsListbox">
            <div className="fsList">
              <div className="fsContents">
              <ul>
              {flowData.map((list) =>(
                <li key={list.number}>{list.text1}</li>
              ))}
              </ul>
              <ul>
              {flowData.map((list) =>(
                <li key={list.number}>{list.text2}</li>
              ))}
              </ul>
              </div>
            </div>
          </div>


            <div className="fsCopyright">
              <img src="/public/logo_fabrica.png" />
              <span>© Fabrica Communications Co., LTD.</span>
            </div>
        </div>
       </section>
    </>
  )
}

export default FooterSitemap