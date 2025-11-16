import './Status.css'

function Status() {
  return (
    <>
      <section>
        <div className="status">
          <div className="statusList">
            <div className="statusItem">
              <div className="statusItemcontent">
                加盟者数<span className="strong">4,000</span><span>社</span>突破
                <div className="statusNoteref">
                  #1
                </div>
              </div>
            </div>

            <div className="statusItem">
              <div className="statusItemcontent">
                <div className="statusItemtext">
                  <p>年間取引</p>
                  <p>利用実績</p>
                </div>
                <span className="strong">10</span><span>万件</span>以上
                <div className="statusNoteref">
                  #2
                </div>
              </div>
            </div>
          </div>
          
          <div className="statusNotes">
            ※1：2024年3月現在 ※2：2021年4月-2022年3月のデータ
          </div>
        </div>
       </section>
    </>
  )
}

export default Status
