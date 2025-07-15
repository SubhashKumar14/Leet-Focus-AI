import { RequestHandler } from "express";
import path from "path";
import fs from "fs";
import archiver from "archiver";

export const handleExtensionDownload: RequestHandler = (req, res) => {
  try {
    const extensionPath = path.join(process.cwd(), "leetcode-focus-extension");

    // Check if extension directory exists
    if (!fs.existsSync(extensionPath)) {
      return res.status(404).json({ error: "Extension files not found" });
    }

    // Set response headers for file download
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      'attachment; filename="leetcode-focus-extension.zip"',
    );

    // Create a zip archive
    const archive = archiver("zip", {
      zlib: { level: 9 }, // Maximum compression
    });

    // Handle archive errors
    archive.on("error", (err) => {
      console.error("Archive error:", err);
      res.status(500).json({ error: "Failed to create archive" });
    });

    // Pipe archive data to response
    archive.pipe(res);

    // Add files to archive, excluding unwanted files
    archive.glob("**/*", {
      cwd: extensionPath,
      ignore: ["*.md", "node_modules/**", ".git/**", ".DS_Store", "Thumbs.db"],
    });

    // Finalize the archive
    archive.finalize();
  } catch (error) {
    console.error("Extension download error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
