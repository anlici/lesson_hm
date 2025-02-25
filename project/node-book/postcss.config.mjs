import plugin from "eslint-plugin-react";
import pxtorem from "postcss-pxtorem";
export default {
    plugin: [
        pxtorem({
            rootValue: 37.5,
            propList: ["*"],
            selectorBlackList: ["html"]
        })
    ]
}