import './Header.css'

function Header() {
  return (
    <>
      <header>
          <div className="navi-logo-list">
            <img src="/public/logo_symphony-ke.png" alt="logo" />
            <nav>
              <ul>
                <li className="dropdown">販売管理</li>
                <li className="dropdown">広告掲載</li>
                <li className="dropdown">付帯サービス</li>
                <li>活用事例</li>
                <li className="dropdown">料金導入</li>
              </ul>
            </nav>
          </div>

          <nav>
            <div className="nav-cta">            
              <div className="tel">
                <img src="/public/tel.png" alt="0120-122-960" />
                受付時間 10:00 〜 18:00 (土日祝定休)
              </div>
              <div className="request">
                資料請求
              </div>
              <div className="contact">
                お問合せ
              </div>
            </div>
          </nav>
       </header>
    </>
  )
}

export default Header
