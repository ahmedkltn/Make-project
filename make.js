    const fs=require("fs");
    const folder=process.argv[2] || "project";
    const htmlcontent = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<title>New Project</title>\n<link rel="stylesheet" href="style.css">\n</head>\n<body>\n<script src="app.js"></script>\n</body>\n</html>';
    const csscontent="body{background-color:grey}";
    const jscontent="console.log('hello World')";
    try{
        fs.mkdirSync(folder);
        fs.writeFileSync(`${folder}/index.html`,htmlcontent);
        fs.writeFileSync(`${folder}/style.css`,csscontent);
        fs.writeFileSync(`${folder}/app.js`,jscontent);
        
    }catch(e){
        console.log("Cant make file ");
        console.log(e);
    }