#!/usr/bin/env node
import { Command } from "commander";
const program = new Command();

program
  .name("kitcat")
  .description(
    "A CLI tool to generate project context snapshots for AI systems.",
  )
  .version("1.0.0")

  .option("-p, --path <path>", "Path to the root directory (defaults to .)")
  .option("-d, --depth <depth>", "Limit recursion depth (e.g., --depth 2)")

  .option(
    "-e, --exclude <file>",
    "Explicitly exclude files/folders (even if not in .gitignore). Can be used multiple times: -e foo -e bar",
    (val, acc) => {
      acc.push(val);
      return acc;
    },
    [],
  )

  .option(
    "-a, --include-gitignore",
    "Include files/folders ignored by .gitignore",
  )
  .option("-m, --metadata-only", "Only include file metadata, not content")
  .option("-t, --text-only", "Ignore binary files entirely")
  .option(
    "-o, --output <file>",
    "Name/path of the output file (default: output.txt)",
    "output.txt",
  )
  .option("--tree-only", "Only include directory tree, no content or metadata")
  .option(
    "-v, --verbose",
    "Log extra information to the console during execution",
  );
