import React from 'react'

const Layout = (props) => {
  const { brandName, ...rest} = props
  return (
    <div>
      <nav className="navbar navbar-inverse navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <a href="/" className="navbar-brand">{ brandName }</a>
          </div>
        </div>
      </nav>
      <div className='container-fluid' { ...rest } />
    </div>
  )
}

export { Layout }
