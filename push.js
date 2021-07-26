const { readFile, writeFile } = require("fs").promises
const path = require("path")
const { exec } = require("child_process");

const myArgs = process.argv.slice(2);
const filepath = path.join(__dirname, 'history.txt')

async function makePush() {
  try {
    const file = await readFile(filepath, "utf-8")
    const fileContent = Buffer.from(file).toString()

    await writeFile(filepath, Number(fileContent) + 1)

    exec('git add . & git commit -m "test"', (error, stdout, stderr) => {
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

// fs.readFile(filepath, "utf-8", (err, content) => {
//   if (err) throw err
//   const data = Buffer.from(content)
//   console.log('Content: ', data.toString()) // выведет уже нормальную строку
//   console.log('Content: ', content) // если передана правильная кодировка, то всё выведет нормально
// })

// writeFile(filepath)

// fs.writeFile(filepath, myArgs[0], err => {
//   if (err) throw err
//   // console.log('Файл создан')

//   // fs.appendFile(filepath, 'Новая строка', err => { // Этот метод для обновления файлов
//   //   if (err) throw err
//   //   console.log('Файл обновлён!')
//   // })
// })