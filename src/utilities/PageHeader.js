
function PageHeader(props) {
    const {title} = props
  return (
    <div className="page-title">
        <h1>{title}</h1>
    </div>
  )
}

export default PageHeader