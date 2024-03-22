import path from "path";
import url from "url";

const __filenmae = url.fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filenmae);
