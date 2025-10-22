#!/usr/bin/env node
import { Command } from "commander";
import { runScan } from "./commands/scan";
import chalk from "chalk";

const program = new Command();

program
  .name("a11y")
  .description("AI-powered WCAG 2.3+ Accessibility Scanner")
  .version("1.0.0");

program
  .command("scan")
  .description("Scan a webpage or local HTML file for accessibility issues")
  .option("-u, --url <url>", "URL to scan")
  .option("-f, --file <path>", "Local HTML file to scan")
  .option("-o, --output <path>", "Output report path (HTML/JSON)")
  .action(async (options) => {
    console.log(chalk.cyanBright(`🚀 Starting accessibility scan...`));
    await runScan(options);
  });

program.parse(process.argv);