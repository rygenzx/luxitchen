/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';

class App {
  constructor({
    burger, navList, nav, content,
  }) {
    this._burger = burger;
    this._navList = navList;
    this._nav = nav;
    this._content = content;

    this._initialAppShell();
  }

  async _initialAppShell() {
    await DrawerInitiator.init({
      burger: this._burger,
      navList: this._navList,
      nav: this._nav,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
