/**
 * 3D Print Monitoring – page content
 * Edit this file to update all text on the page.
 */
const CONTENT = {

  hero: {
    title: "AI 3D Print",
    titleAccent: "Monitoring",
    subtitle: "A side project by Tomáš Juřica",
  },

  problem: {
    heading: "The Problem",
    paragraphs: [
      `3D printers are blind. Once a print starts, the machine has no idea if
       something is going wrong. A shifted layer, broken support, not sticking to the bed.

       It just keeps going without any feedback resulting in a failed print.`
    ],
  },

  solution: {
    heading: "The Solution",
    paragraphs: [
      `I'm a 3D printing fan &amp; computer vision engineer and I built a solution for that.
       I mounted a small camera on the printer head. After every Nth layer,
       the camera takes a photo, and sends it to an AI model.`,
      `The model knows what the print should look like at that point (generates
       a reference image from the GCode the printer is running) and then
       compares the two and gives a similarity score.`,

      `If the score drops too low, the print has failed and the printer stops.`,
    ],
  },

  timeline: {
    heading: "How it works",
    intro: `A real print, monitored layer by layer. I intentionally ruined the print at layer 55 and the model caught the failure.`,
    layers: [
      {
        number: 20,
        height: "4.2 mm",
        score: "98.9%",
        passed: true,
        images: {
          render:  "img/layer20/render.jpg",
          capture: "img/layer20/capture.jpg",
          overlay: "img/layer20/overlay.jpg",
        },
      },
      {
        number: 30,
        height: "6.2 mm",
        score: "98.3%",
        passed: true,
        images: {
          render:  "img/layer30/render.jpg",
          capture: "img/layer30/capture.jpg",
          overlay: "img/layer30/overlay.jpg",
        },
      },
      {
        number: 40,
        height: "8.2 mm",
        score: "96.0%",
        passed: true,
        images: {
          render:  "img/layer40/render.jpg",
          capture: "img/layer40/capture.jpg",
          overlay: "img/layer40/overlay.jpg",
        },
      },
      {
        number: 50,
        height: "10.2 mm",
        score: "98.5%",
        passed: true,
        images: {
          render:  "img/layer50/render.jpg",
          capture: "img/layer50/capture.jpg",
          overlay: "img/layer50/overlay.jpg",
        },
      },
      {
        number: 55,
        height: "11.2 mm",
        score: "17.4%",
        passed: false,
        failNote: "Print stopped.",
        images: {
          render:  "img/layer55/render.jpg",
          capture: "img/layer55/capture.jpg",
          overlay: "img/layer55/overlay.jpg",
        },
      },
    ],
  },

  video: {
    heading: "Video",
    intro: `A short timelapse video of the system running live.`,
    youtubeId: "Vqsqma_ROqc",
  },

  poc: {
    heading: "Proof of Concept",
    items: [
      `Checks the print every nth layer and tells you if it looks right.`,
      `Runs on a <strong>Raspberry Pi 4</strong> locally, no cloud.`,
      `Detects a failure within about <strong>1 minute</strong>.`,
    ],
  },

  roadmap: {
    heading: "What's next",
    intro: `The proof of concept works. Let's bring it to production together.`,
    items: [
      {
        label: "More training data",
        text: `The model has seen only a few prints. It needs many more to be reliable,
               across different printers, filaments, and geometries.`,
      },
      {
        label: "Detect more failures",
        text: `The model can be extended and catch more types of failures. For example, stringing or first layer quality.`,
      },
      {
        label: "Uninterrupted capture",
        text: `For simplicity the print is paused to do the capture. Right now the head has to move to a fixed position for each photo,
               which pauses the print. Capturing without interrupting would make
               the whole thing much smoother.`,
      },
      {
        label: "Better integration",
        text: `Now for the POC purposes the package works as an octoprint plugin.`,
      },

    ],
  },

  // ─────────────────────────────────────────────────────────────────────────

  links: {
    closing: `Interested? Get in touch.`,
    linkedin: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-ju%C5%99ica-44727671/",
    homepage: "https://tomasjuri.cz",
  },

};
