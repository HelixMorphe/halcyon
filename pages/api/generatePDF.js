import puppeteer from "puppeteer";

export default async function handler(req, res) {
  const { url } = req.body;

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });
    await page.setViewport({ width: 1980, height: 1050 });
    await page.screenshot({ fullPage: true, path: "screeenshot.png" });
    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
    });
    await browser.close();

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="resume.pdf"');
    res.status(200).send(pdf);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while generating the PDF.");
  }
}
