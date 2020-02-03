/* eslint-disable @typescript-eslint/no-explicit-any */

const getApi = ((api): ((name: string) => (option?) => Promise<any>) => {
  const Api = {};
  return (name): ((option?) => Promise<any>) => {
    if (!Api[name]) {
      Api[name] = function(options = {}): Promise<any> {
        return new Promise((resolve, reject) => {
          api[name]({
            ...options,
            success: resolve,
            fail: reject,
          });
        });
      };
    }
    return Api[name];
  };
})(tt);

export default getApi;
