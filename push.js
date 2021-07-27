const { readFile, writeFile } = require("fs").promises
const path = require("path")
const { exec } = require("child_process");

const myArgs = process.argv.slice(2);
const filepath = path.join(__dirname, 'history.txt')

async function makePush() {
  try {
    const file = await readFile(filepath, "utf-8")
    const fileContent = Buffer.from(file).toString()
    const commitNumber = Number(fileContent) + 1

    await writeFile(filepath, commitNumber)

    exec(`git add . & git commit -m "commit_number_: ${commitNumber}" & git push origin ${myArgs[0]} `, (error, stdout, stderr) => {
      if (error) {
        console.log("error", error)
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    })

  } catch (err) {
    console.log("Error: ", err)
  }
}

makePush()