import PageNotFound from './pages/page-not-found/page-not-found';

const setting = {
  offersCount: 312,
} as const;

// для переходов в меню
export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  PageNot = '/page-not-found'
}

export default setting;
