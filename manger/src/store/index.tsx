const context: any = require("context")("./model", false, /\.(js|ts|tsx)$/);
const getModel = context.keys().map((key: any) => context(key));

const store: any = {}
getModel.forEach((model: any) => {
    store[model.default.title] = model.default
})
export default store;