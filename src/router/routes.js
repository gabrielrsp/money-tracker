import Dashboard from '../containers/Dashboard';
import Transactions from '../containers/Transactions';
import Accounts from '../containers/Accounts';
import Reports from '../containers/Reports';
import Profile from '../containers/Profile';
import Files from '../containers/Files';
import Settings from '../containers/Settings';
import WorkInProgress from '../containers/WorkInProgress';

export default [
  {
    path: '/',
    exact: true,
    label: 'Dashboard',
    icon: 'newspaper',
    component: Dashboard
  },
  {
    path: '/transactions/:accountId?',
    link: '/transactions',
    exact: false,
    label: 'Transactions',
    icon: 'exchange',
    component: Transactions
  },
  {
    path: '/accounts',
    exact: false,
    label: 'Accounts',
    icon: 'credit card',
    component: Accounts
  },
  {
    path: '/reports',
    exact: false,
    label: 'Reports',
    icon: 'line chart',
    component: Reports
  },
  {
    path: '/budget',
    exact: false,
    label: 'Budget',
    icon: 'shopping basket',
    component: WorkInProgress
  },

  {
    path: '/files',
    exact: true,
    label: 'Files',
    icon: 'file',
    component: Files
  },

  {
    path: '/settings',
    exact: true,
    label: 'Currrency',
    icon: 'dollar',
    component: Settings
  },



  {
    path: '/profile',
    exact: true,
    label: 'Profile',
    icon: 'user',
    component: Profile
  },



];
