import Log4js, { Configuration } from 'log4js';
import Application from 'koa';
const CONFIG = {
    /**
     * 指定要记录的日志分类 cheese
     * 展示方式为文件类型 file
     * 日志输出的文件名 cheese.log
     */
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },

    /**
     * 指定日志的默认配置项
     * 如果 log4js.getLogger 中没有指定，默认为 cheese 日志的配置项
     * 指定 cheese 日志的记录内容为 error 及 error 以上级别的信息
     */
    categories: { default: { appenders: ['cheese'], level: 'error' } },
};

const loggerFn = (options: Configuration = CONFIG) => {
    return async (ctx: Application.BaseContext, next: Function) => {
        const start = Date.now();
        Log4js.configure({
            appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
            categories: { default: { appenders: ['cheese'], level: 'info' } },
        });
        const logger = Log4js.getLogger('cheese');
        await next();
        const end = Date.now();
        const responseTime = end - start;
        logger.info(`响应时间为${responseTime / 1000}s`);
    };
};

export = loggerFn();
