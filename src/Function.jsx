import './Function.css'

const flowData = [
  { number: 1, head: '①仕入れ', title: '車検証の文字列認識', img: '/public/function_detail_list_01.svg', description1: 'スマホのカメラで文字認識', description2: '撮るだけで、車両登録完了', class: 'functionsHeading' },

  { number: 2, head: '①仕入れ', title: '車台番号で車両情報取得', img: '/public/function_detail_list_02.svg', description1: '車台番号入力のみ', description2: '最短1分で車両情報を取得', class: 'functionsHeading' },

  { number: 3, head: '②広告掲載', title: '複数サイトに一括掲載', img: '/public/function_detail_list_03.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識', class: 'functionsHeading' },

  { number: 4, head: '②広告掲載', title: '広告文をAIが自動生成', img: '/public/function_detail_list_04.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識', class: 'functionsHeading' },

  { number: 5, head: '③問合せ対応', title: 'いつでも問合せ確認', img: '/public/function_detail_list_05.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識', class: 'functionsHeading'  },

  { number: 6, head: '④商談', title: '顧客登録業務サポート', img: '/public/function_detail_list_06.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識', class: 'functionsHeading'  },

  { number: 7, head: '④商談', title: '帳票類かんたん作成', img: '/public/function_detail_list_07.svg', description1: 'スマホのカメラで文字認識', description2: '', class: 'functionsHeading'  },

  { number: 8, head: '⑤販売・納車', title: 'スピーディなローン申込', img: '/public/function_detail_list_08.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識', class: 'functionsHeading'  },

  { number: 9, head: '⑤販売・納車', title: '手間なし中古車保証', img: '/public/function_detail_list_09.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識', class: 'functionsHeading'  },

  { number: 10, head: '⑥アフターフォロー', title: '豊富なアプローチ手段', img: '/public/function_detail_list_10.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識', class: 'functionsHeading'  },

  { number: 11, title: '役立つデータ分析', img: '/public/function_detail_list_11.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識' },

  { number: 12, title: '便利な集計機能', img: '/public/function_detail_list_12.svg', description1: 'スマホのカメラで文字認識', description2: 'スマホのカメラで文字認識' },
];


function Function() {
  return (
    <>
      <section>
        <div className="functionBox">
          <h2>「symphony」で出来ること</h2>
          
          {/* 繰り返し部分を map() で動的に生成 */}
          <div className="functions">
            {flowData.map((item) =>(
              <div className="functionsContents" key={item.number}>
                <div className={item.class}>
                  {item.head}
                </div>

                <div className="functionsDetailbox">
                  <div className="functionsDetail">
                    <div className="fdTitle">
                      {item.title}
                    </div>
                    <div className="fdImg">
                      <img src={item.img} />
                    </div>
                    <div className="fdDescription">
                      <p>{item.description1}</p>
                      <p>{item.description2}</p>
                    </div>
                    <div className="fdLink">
                      <div className="fdLinkimg">
                        <img src="/public/icon_blanklink_white.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
       </section>
    </>
  )
}

export default Function