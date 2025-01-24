/** copyright (C) 2025 sebastien.mamy@gmail.com
 *  @license GNU General Public Licence v2 @disclaimer in no event shall the author be liable for any claim or damages. */

import fs from "fs"

const PATH = "./src/img/"
const TARGET_FILE = "./temp.js"

fs.unlinkSync(TARGET_FILE)
fs.appendFileSync(TARGET_FILE, "const images = {}\n")

// adding images
fs.readdir(PATH, (err, files) => files.forEach(file => fs.appendFileSync(TARGET_FILE, "images[\"" + file + "\"] = \"data:image/gif;base64," + fs.readFileSync(PATH+"/"+file, 'base64') + "\"\n")))


// adding styles

const css = fs.readFileSync("./css/webos.css", "utf8")

