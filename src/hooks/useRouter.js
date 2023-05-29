import React, { useContext } from 'react'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

const RouterContext = React.createContext()

export const RouterProvider = ({ children, ...props }) => {
  return (
    <Router {...props}>
      <EnhancedWrapper children={children} />
    </Router>
  )
}

const Wrapper = ({ match, location, history, children }) => {
  const contextValue = { match, location, history }
  return <RouterContext.Provider value={contextValue} children={children} />
}

const EnhancedWrapper = withRouter(Wrapper)

export const useRouter = () => {
  return useContext(RouterContext)
}
