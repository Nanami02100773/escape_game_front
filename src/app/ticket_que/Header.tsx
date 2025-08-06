import './Header.css'

function Header() {

  return (
    <>
      <div className="header">
        <button className="back-btn" aria-label="戻る">{'\u25C1'}</button>
      </div>
    </>
  )
}

export default Header