import { promises as fs } from "fs";

const { readFile, writeFile } = fs;

async function readData() {
  const data = JSON.parse(await readFile(global.fileNameAuth));

  return data;
}

async function get() {
  const data = await readData();

  return data;
}

export default { get };
