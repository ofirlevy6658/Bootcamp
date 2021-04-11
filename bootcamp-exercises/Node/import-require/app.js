import fs from "fs";

import { add, seven, multi } from "./function.js";
require("dotenv").config();

console.log(add(5, 4));
console.log(seven(5));
console.log(multi(5, 4));
