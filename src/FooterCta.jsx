import './FooterCta.css'

const flowData = [
  { number: 1, text1: 'symphonyについて詳しく知りたい方に', text2: '資料をお送りいたします', cta: '資料請求',class: 'fcButtongradient' },

  { number: 1, text1: 'ご導入のイメージをご覧になりたい方は', text2: '事例をご参照ください', cta: '活用事例', class: 'fcButton' },

  { number: 1, text1: 'ご不明な点がございましたら', text2: 'お気軽にお問合せください', cta: 'お問合せ', class: 'fcButton' },
];


function FooterCta() {
  return (
    <>
      <section>
        <div className="footerCta">
          <h2>中古車販売に必要なすべてを「symphony」で。</h2>
          
          {/* 繰り返し部分を map() で動的に生成 */}
          <div className="fcListbox">
            <div className="fcList">
              {flowData.map((item) =>(
                <div className="fcContents" key={item.number}>
                  <div className="fcText">
                    {item.text1}<br />{item.text2}
                  </div>
                  <div className={item.class}>
                    {item.cta}
                  </div>
                </div>
              ))}
            </div>
          </div>


            <div className="fcTell">
              <span>お電話でも受け付けておりますので、お気軽にお問合せください。</span>
              <img src="/public/tel_pc.png" />
              受付時間 10:00 〜 18:00（土日祝定休）
            </div>
        </div>
       </section>
    </>
  )
}

export default FooterCta