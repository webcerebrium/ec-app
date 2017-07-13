import ec from 'ec-react15-lib';
const { start, Logger } = ec;

/* eslint-disable */
const alias = window.EnormousCloudApp;
if (alias) {
   const q = window[alias].q || [];
   const arrOptions = {};
   if (q && q.length) {
     q.forEach((args) => { arrOptions[args[0]] = args[1];});
   }
   arrOptions.baseUrl = arrOptions.baseUrl || '/'
   arrOptions.requestParams = { mode: 'cors', redirect: 'follow' };
   const defaultHeaders = arrOptions.accountId ? { 'X-Account-Id': arrOptions.accountId } : {};
   arrOptions.requestHeaders = arrOptions.requestHeaders || defaultHeaders;
   Logger.of('Application.Start').warn('Starting application, options=', arrOptions);
   start(arrOptions);
} else {
   Logger.of('Application.Error').error('No starter instructions');
}
