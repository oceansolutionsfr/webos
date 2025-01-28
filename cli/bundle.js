/** copyright (C) 2025 sebastien.mamy@gmail.com
 *  @license GNU General Public Licence v2 @disclaimer in no event shall the author be liable for any claim or damages. */

import fs from "fs"

const PATH = "./tmp/icon.webp"


console.log("\"data:image/webp;base64," + fs.readFileSync(PATH, "base64") + "\"\n")

