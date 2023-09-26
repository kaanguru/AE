import { render } from "@nexrender/core";
const cwd = process.cwd();
import { settings } from "./settings.js";
import { assets } from "./assets.js";
const renderYeri = cwd+"/renders/";
const main = async () => {
  const isimler = ["ali", "veli", "49-50"];

  for (const isim of isimler) {
    const myJobJson = {
      template: settings,
      assets: assets(isim),
      actions: {
        postrender: [
          {
            module: "@nexrender/action-copy",
            input: "result.mp4",
            output: `${renderYeri}result_${isim}.mp4`, 
          },
        ],
      },
    };

    try {
      await render(myJobJson, {
        skipCleanup: false,
        debug: false,
      });
      console.log(`Video rendered successfully with text: ${isim}`);
    } catch (error) {
      console.error(`Error rendering video with text: ${isim}`, error);
    }
  }
};

main().catch(console.error);
