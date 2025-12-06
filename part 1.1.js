// 1. Write a function that logs the current file path and directory. (0.5 Grade)
// • Output Example:{File:“/home/user/project/index.js”, Dir:“/home/user/project”}
const path = require("path");

// function currentFile() {

//     console.log("File:", __filename)
//     console.log("Dir:", __dirname)
// }

// currentFile();

//---------------------------------------------------------------------------------------
// 2. Write a function that takes a file path and returns its file name. (0.5 Grade)
// • Input Example: /user/files/report.pdf
// • Output Example:"report.pdf"

// function fileName(filePath) {
//    return path.basename(filePath)
// }
// console.log(fileName("/user/files/report.pdf"));
//----------------------------------------------------------------------------------
// 3. Write a function that builds a path from an object (0.5 Grade)
// • Input Example: { dir: "/folder", name: "app", ext: ".js"}
// • Output Example: “/folder/app.js”

// function formtpath({...objec}) {
//     return path.format({...objec})
// }

// console.log(formtpath({ dir: "/folder", name: "app", ext: ".js" }));

// OR

// WITHOUT SPREAD OPERATOR

// function formtpath(objec) {
//     return path.format(objec)
// }

// console.log(formtpath({ dir: "/folder", name: "app", ext: ".js" }));

// ---------------------------------------------------------------------------------------
// 4. Write a function that returns the file extension from a given file path. (0.5 Grade)
// • Input Example: /docs/readme.md"
// • Output Example: “.md”


// function fileExt(filePath) {
//     return path.extname(filePath)
// }
// console.log(fileExt("/docs/readme.md"));


// 5. Write a function that parses a given path and returns its name and ext. (0.5 Grade)
// • Input Example: /home/app/main.js
// • Output Example: { Name: “main”, Ext: “.js” }

// function parseFile(filePath) {
//     return path.parse(filePath);
// }
// console.log(parseFile("/home/app/main.js"));


// 6. Write a function that checks whether a given path is absolute. (0.5 Grade)
// • Input Example: /home/user/file.txt
// • Output Example: true

// function isAbsolutePath(filePath) {
//     return path.isAbsolute(filePath);
// }
// console.log(isAbsolutePath("/home/user/file.txt"));

// ---------------------------------------------------------------------------------------
// 7. Write a function that joins multiple segments (0.5 Grade)
// • Input:"src","components", "App.js"
// • Output Example: src/components/App.js

// function joinSegments(...all) {
//     return path.join(...all);
// }
// console.log(joinSegments("src","components", "App.js"));

// ---------------------------------------------------------------------------------------
// 8. Write a function that resolves a relative path to an absolute one. (0.5 Grade)
// • Input Example: ./index.js
// • Output Example: /home/user/project/src/index.js

// function isAbsolutePath(relativePath) {
//     return path.resolve(relativePath);
// }
// console.log(isAbsolutePath("./index.js"));

// ---------------------------------------------------------------------------------------
// 9. Write a function that joins two paths. (0.5 Grade)
// • Input Example: /folder1, folder2/file.txt
// • Output Example: /folder1/folder2/file.txt

// function joinTwoPaths(path1, path2) {
//     return path.join(path1, path2);
// }
// console.log(joinTwoPaths("/folder1", "folder2/file.txt"));

// ---------------------------------------------------------------------------------------

// 10. Write a function that deletes a file asynchronously. (0.5 Grade)
// • Input Example: /path/to / file.txt
// • Output Example: The file.txt is deleted.

// const fs = require("fs");

// // function deleteFile(filePath) {
// //     fs.unlink(filePath, (err) => {
// //         if (err) throw err;
// //         console.log("The file.txt is deleted.");
// //     });
// // }

// // deleteFile("/path/to/file.txt");

// ---------------------------------------------------------------------------------------

// 11. Write a function that creates a folder synchronously. (1 Grade)
// • Output Example: “Success”

// const fs = require("fs");

// function createFolder(folderPath) {
//     fs.mkdirSync(folderPath);
//     console.log("Success");
// }

// createFolder("Folder");

// ---------------------------------------------------------------------------------------

// 12. Create an event emitter that listens for a "start" event and logs a welcome message. (0.5 Grade)
// • Output Example: Welcome event triggered!

// const Eventemmiter = require("events");
// const system = new Eventemmiter();

// system.on("Start", () => {
//     console.log("Welcome event triggered!")
// });

// system.emit("Start");

// ---------------------------------------------------------------------------------------

// 13. Emit a custom "login" event with a username parameter. (0.5 Grade)
// • Input Example: "Ahmed"
// • Output Example: “User logged in: Ahmed”

// function login(name) {
//     console.log(`User logged in: ${name}`);
// };
// system.on ("login", login);

// system.emit("login", "Ahmed")
// ---------------------------------------------------------------------------------------

// 14. Read a file synchronously and log its contents. (1 Grade)
// • Input Example: "./notes.txt"
// • Output Example: the file content => “This is a note.”

// const fs = require("fs");

// function readFile(path) {
//     const content = fs.readFileSync(path, "utf-8");
//     console.log(content);
// }

// readFile("./notes.txt");

// ---------------------------------------------------------------------------------------

// 15. Write asynchronously to a file. (1 Grade)
// • Input: path: "./async.txt", content: "Async save"

// const fs = require("fs");

// function writeAsync(path, content) {
//     fs.writeFile(path, content, (err) => {
//         if (err) throw err;
//     });
// }

// writeAsync("./async.txt", "Async save");

// ---------------------------------------------------------------------------------------

// 16. Check if a directory exists. (0.5 Grade)
// • Input Example: "./notes.txt"
// • Output Example: true

// const fs = require("fs");

// function exists(path) {
//     return fs.existsSync(path);
// }

// console.log(exists("./notes.txt"));

// ---------------------------------------------------------------------------------------

// 17. Write a function that returns the OS platform and CPU architecture. (0.5 Grade)
// • Output Example: { Platform: “win32”, Arch: “x64” }

// const os = require("os");

// function systemInfo() {
//     return {
//         Platform: os.platform(),
//         Arch: os.arch()
//     };
// }

// console.log(systemInfo());
// ---------------------------------------------------------------------------------------