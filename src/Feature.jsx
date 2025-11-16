import './Feature.css'

const flowData = [
  { number: 1, head: '01', title: '車両登録機能', img: '/public/feature_summary_1_1x.webp', description: '車両情報の入力業務を大幅に省力化。車検証のすべての文字列をスマートフォンで認識。最短1分で車両登録が完了します', list1: '車検証を見ながら手入力で車両を登録している', list2: '書類作成の度、車両情報を入力している' },

  { number: 2, head: '02', title: '広告管理機能', img: '/public/feature_summary_2_2x.webp', description: '一度の車両登録で10以上の広告メディアに一括掲載。業販・輸出サイトへの掲載も可能。新たな販売機会の創出にお役立ちします。', list1: '広告掲載先ごとに車両情報を毎回入力するのが大変', list2: '新しい広告掲載先が欲しい' },

  { number: 3, head: '03', title: '車両付帯サービス', img: '/public/feature_summary_3_2x.webp', description: '業界最高水準の保証部位数を誇る中古車保証を月額無料でご提供。定期点検記録簿の提出や外部鑑定も不要。付帯の手間もありません。', list1: '販売車両に+αの価値を付与したい', list2: '中古車保証を付帯したいのに、条件が厳しくて付帯できない' },
];


function Feature() {
  return (
    <>
      <section>
        <div className="featureBox">
          <h2>「symphony」3つの特長</h2>
          
          {/* 繰り返し部分を map() で動的に生成 */}
          <div className="features">
            {flowData.map((item) =>(
              <div className="featuresContents" key={item.number}>
                <div className="featuresHeading">
                  {item.head}
                </div>

                <div className="featuresDetailbox">
                  <div className="featuresDetail">
                    <div className="fTitle">
                      {item.title}
                    </div>
                    <div className="fImg">
                      <img src={item.img} />
                    </div>
                    <div className="fdDescription">
                      <p>{item.description}</p>
                    </div>
                    <div className="fProblem">
                      <div className="fProblemcta">
                        こんな悩みの方に
                      </div>
                    </div>
                    <div className="fProblemlist">
                      <ul>
                        <li>{item.list1}</li>
                        <li>{item.list2}</li>
                      </ul>
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

export default Feature