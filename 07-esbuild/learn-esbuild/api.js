/**
 * @Author liming
 * @Date 2022/12/4 10:29
 **/

const esbuild = require("esbuild");
(async function () {
    const result = await esbuild.build({
        entryPoints: ["app.jsx"],
        bundle: true,
        outfile:"out.js"
    })
    console.log(result)
    //{ errors: [], warnings: [] }
})()
