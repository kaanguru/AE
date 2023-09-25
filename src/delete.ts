import { readdir, unlinkSync } from 'fs';
import { join } from 'path';

const directoryPath = './renders'; 

readdir(directoryPath, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${directoryPath}`, err);
    return;
  }

  files.forEach((file) => {
    if (file.startsWith('result_') && file.endsWith('.mp4')) {
      const filePath = join(directoryPath, file);

      try {
        unlinkSync(filePath);
        console.log(`Deleted file: ${filePath}`);
      } catch (error) {
        console.error(`Error deleting file: ${filePath}`, error);
      }
    }
  });
});
