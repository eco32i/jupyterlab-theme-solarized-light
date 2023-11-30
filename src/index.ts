import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the jupyterlab-theme-solarized-light extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-theme-solarized-light:plugin',
  description: 'Solarized light theme for JupyterLab.',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log(
      'JupyterLab extension jupyterlab-theme-solarized-light is activated!'
    );
    const style = 'jupyterlab-theme-solarized-light/index.css';

    manager.register({
      name: 'JupyterLab Solarized Light',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
