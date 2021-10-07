import Conf from 'config/values/default';
import Server from 'config/values/server';
import Version from 'config/values/version';

class Constants {
}

Constants.DEBUG = Conf.DEBUG;
Constants.LOCAL = Conf.LOCAL;
Constants.TITLE = Conf.TITLE;
Constants.PAGE_TITLE = Conf.PAGE_TITLE;
Constants.VERSION = Version.VERSION;
Constants.SERVER_PATH = Server.DATA;

Constants.CONF_ROUTING_BASEPATH = Server.BASE_PATH;

Constants.MENU_BAR_FG_COLOR = "#FFF";
Constants.MENU_BAR_BG_COLOR = "#333";

export default Constants;