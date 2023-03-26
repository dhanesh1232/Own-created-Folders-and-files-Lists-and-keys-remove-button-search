import './index.css'

const HistoryPage = props => {
  const {HistoryItems, onDeleteDomain} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = HistoryItems
  const onDelete = () => {
    onDeleteDomain(id)
  }
  return (
    <li>
      <p>{timeAccessed}</p>
      <div className="data">
        <img src={logoUrl} alt="domain logo" className="logo" />
        <p>{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>
      <button
        type="submit"
        className="btn"
        onClick={onDelete}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}
export default HistoryPage
