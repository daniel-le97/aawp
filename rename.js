// walkDirectory.js
import { promises as fs } from "fs";
import path from "path";

/**
 * Recursively walks through a directory and executes a callback for each file found.
 *
 * @param {string} dir - The directory to walk through.
 * @param {function(string): void} callback - The callback function to execute for each file. Receives the file path as an argument.
 * @returns {Promise<void>} - A promise that resolves when the directory has been fully walked.
 */
async function walkDirectory(dir, callback) {
  // Read the directory contents
  const files = await fs.readdir(dir, { withFileTypes: true });

  // Iterate over each file/directory
  for (const file of files) {
    const filePath = path.resolve(dir, file.name);

    if (file.isDirectory()) {
      // If it's a directory, recurse into it
      await walkDirectory(filePath, callback);
    } else {
      // If it's a file, execute the callback
      callback(filePath);
    }
  }
}

// rename all .js files to .jsx in the ./src directory
(async () => {
  const directoryPath = "./src";

  await walkDirectory(directoryPath, async (filePath) => {
    if (filePath.endsWith(".js")) {
      await fs.rename(filePath, filePath.replace(".js", ".jsx"));
    }
  });
})();
