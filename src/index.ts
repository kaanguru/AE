import { render } from "@nexrender/core";
const aeDosyasi = "file:///D:/test/AE/deneme.aep";
const renderYeri = "D:/test/AE/renders/";
const main = async () => {
  const isimler = ["ali", "veli", "49-50"];

  for (const isim of isimler) {
    const myJobJson = {
      template: {
        src: aeDosyasi ,
        composition: "test_comp",
        outputModule: "H.264 - Match Render Settings - 15 Mbps",
        outputExt: "mp4",
        settingsTemplate: "Draft Settings",
      },
      assets: [
        {
          type: "data",
          composition: "Animated_Text_5",
          layerName: "celebrate",
          property: "Source Text",
          value: isim,
        },
      ],
      actions: {
        postrender: [
          {
            module: "@nexrender/action-copy",
            input: "result.mp4",
            output: `${renderYeri}result_${isim}.mp4`, // Use concatenation for dynamic filenames
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
