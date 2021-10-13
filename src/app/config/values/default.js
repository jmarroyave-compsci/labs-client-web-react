class Conf {
}

Conf.DEBUG = process.env.__DEBUG;
Conf.LOCAL = process.env.__LOCAL;

Conf.PAGE_TITLE = process.env.NEXT_PUBLIC__PAGE_TITLE;
Conf.TITLE = process.env.NEXT_PUBLIC__TITLE;

export default Conf;