import { NextResponse, NextRequest } from "next/server";
import path from "path";
import fs from "fs";

export async function GET(request: NextRequest) {
	// const pkg = await readFile(`${process.cwd()}/.next/package.json`, 'utf-8');

	const resObj = {
		dirName: __dirname,
		cwd: process.cwd(),
		cwdParent: path.resolve(process.cwd(), "../"),
		cwdGrandParent: path.resolve(process.cwd(), "../../"),
		tree: getFilesRecursive(path.resolve(process.cwd())),
	};

	// @ts-ignore
	return NextResponse.json(resObj);
}

/**
 *
 * @param dir
 * @param fileFormat
 * @returns
 */
function getFilesRecursive(dir: string) {
	console.log("dir", dir);
	if (dir.includes("node_modules")) {
		console.log("skip node_modules");
		return [];
	}
	type Output =
		| {
				type: "file";
				name: string;
		  }
		| {
				type: "dir";
				name: string;
				children: Output[];
		  };

	const output: Output[] = [];

	const fileOrDirList = fs.readdirSync(dir);

	// Create the full path of the file/directory by concatenating the passed directory and file/directory name
	for (const file of fileOrDirList) {
		const path = `${dir}/${file}`;
		// Check if the current file/directory is a directory using fs.statSync
		if (fs.statSync(path).isDirectory()) {
			// If it is a directory, recursively call the getFiles function with the directory path and the files array
			const files = getFilesRecursive(path);
			if (files.length > 0) {
				output.push({
					type: "dir",
					name: path,
					children: files,
				});
			}
		} else {
			output.push({
				type: "file",
				name: path,
			});
		}
	}

	return output;
}
