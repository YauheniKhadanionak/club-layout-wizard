import './App.css'

import { Router, Switch, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Layout } from '@abc/protonpack'

import { Dashboard } from './dashboard'
import { Demo } from './demo'
import { Editor } from './editor'

export const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <Switch>
      <Route
        path="/demo"
        component={props => (
          <AppLayout {...props}>
            <Demo />
          </AppLayout>
        )}
      />
      <Route
        path="/editor/:mode?"
        component={props => (
          <AppLayout {...props}>
            <Editor />
          </AppLayout>
        )}
      />
      <Route
        path=""
        component={props => (
          <AppLayout {...props}>
            <Dashboard />
          </AppLayout>
        )}
      />
    </Switch>
  </Router>
)

const AppLayout = props => {
  const showHeader = props.match.params.mode !== 'preview'

  return (
    <Layout className="layout">
      {showHeader && (
        <Layout.Header className="header">
          <svg
            width="94"
            height="64"
            viewBox="0 0 94 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.48 22H19.608V5.992H13.872L10.512 15.064L7.176 5.992H1.44V22H5.568V11.2L9.6 22H11.424L15.48 11.2V22ZM26.8549 22H30.9829V15.544L37.0309 5.992H32.3509L28.9189 11.896L25.4389 5.992H20.7829L26.8549 15.544V22ZM41.7894 22H45.9174V9.592H50.3814V5.992H37.3014V9.592H41.7894V22ZM52.3463 22H56.4743V5.992H52.3463V22ZM73.3941 22H77.5221V5.992H71.7861L68.4261 15.064L65.0901 5.992H59.3541V22H63.4821V11.2L67.5141 22H69.3381L73.3941 11.2V22ZM80.4009 22H92.1369V18.52H84.5289V15.64H91.9689V12.136H84.5289V9.472H92.1369V5.992H80.4009V22Z"
              fill="white"
            />
            <path
              d="M1.204 34H1.652V30.234H6.09V29.828H1.652V26.706H6.16V26.3H1.204V34ZM15.7022 34H16.1502V26.3H15.7022V34ZM28.1776 34H28.6256V26.706H31.1876V26.3H25.6296V26.706H28.1776V34ZM46.4894 34H46.9094V26.3H46.4614V33.23L41.0854 26.3H40.6654V34H41.1134V27L46.4894 34ZM57.1597 34H62.1157V33.594H57.6077V30.234H62.0457V29.828H57.6077V26.706H62.1157V26.3H57.1597V34ZM71.4257 32.922C72.0137 33.65 73.0077 34.168 74.2677 34.168C76.2557 34.168 77.0537 33.146 77.0537 32.012C77.0537 30.458 75.6397 30.08 74.3237 29.73C73.1897 29.422 72.1397 29.142 72.1397 28.148C72.1397 27.224 73.0497 26.538 74.1977 26.538C75.1217 26.538 75.9477 26.818 76.5217 27.532L76.8437 27.238C76.2557 26.566 75.3877 26.132 74.1977 26.132C72.8537 26.132 71.6637 26.888 71.6637 28.148C71.6637 29.52 72.9377 29.842 74.1977 30.15C75.4017 30.458 76.5777 30.766 76.5777 32.012C76.5777 32.894 75.9617 33.762 74.2677 33.762C73.1337 33.762 72.2797 33.202 71.7897 32.628L71.4257 32.922ZM86.1837 32.922C86.7717 33.65 87.7657 34.168 89.0257 34.168C91.0137 34.168 91.8117 33.146 91.8117 32.012C91.8117 30.458 90.3977 30.08 89.0817 29.73C87.9477 29.422 86.8977 29.142 86.8977 28.148C86.8977 27.224 87.8077 26.538 88.9557 26.538C89.8797 26.538 90.7057 26.818 91.2797 27.532L91.6017 27.238C91.0137 26.566 90.1457 26.132 88.9557 26.132C87.6117 26.132 86.4217 26.888 86.4217 28.148C86.4217 29.52 87.6957 29.842 88.9557 30.15C90.1597 30.458 91.3357 30.766 91.3357 32.012C91.3357 32.894 90.7197 33.762 89.0257 33.762C87.8917 33.762 87.0377 33.202 86.5477 32.628L86.1837 32.922Z"
              fill="white"
            />
          </svg>
        </Layout.Header>
      )}
      {showHeader && <Layout.NavBar items={navItems} />}
      <Layout.Content className="layoutContent">{props.children}</Layout.Content>
    </Layout>
  )
}

const navItems = [
  { path: '/', label: 'Dashboard', key: 'Dashboard' },
  { path: '/help', label: 'Help Center', key: 'Help Center' },
  { path: '/editor/preview', label: 'Publish', key: 'Publish' },
]

export default App
