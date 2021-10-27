import logo from './logo.svg';
import './App.css';
import {
  EuiButton,
  EuiCallOut,
  EuiPanel,
  EuiNavDrawer,
  EuiNavDrawerGroup,
  EuiImage
} from 'wazuh-wui';


function App() {

  const adminLinks = [
    {
      label: 'Admin',
      iconType: 'managementApp',
      flyoutMenu: {
        title: 'Tools and settings',
        listItems: [
          {
            label: 'Dev tools',
            href: '#/layout/nav-drawer',
            iconType: 'devToolsApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add to Tools and Settings to favorites',
            },
          },
          {
            label: 'Stack Monitoring',
            href: '#/layout/nav-drawer',
            iconType: 'monitoringApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Stack Monitoring to favorites',
            },
          },
          {
            label: 'Stack Management',
            href: '#/layout/nav-drawer',
            iconType: 'managementApp',
            extraAction: {
              color: 'subdued',
              iconType: 'starEmpty',
              iconSize: 's',
              'aria-label': 'Add Stack Management to favorites',
            },
          },
        ],
      },
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <EuiButton>Primary button</EuiButton>
          <EuiButton fill>Filled button</EuiButton>
        </div>

        <EuiNavDrawer showToolTips={true}>
          <EuiNavDrawerGroup listItems={adminLinks} />
        </EuiNavDrawer>

      </header>

    </div>
  );
}

export default App;
