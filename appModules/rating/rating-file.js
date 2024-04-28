const fs = require("fs");

const makeRatingFile = async (path, array) =>{
    fs.readFile(path, (err, file) =>{
        if (err) {
            console.log(err);
            return;
        }
        const ratingArray = JSON.parse(file);
        array.forEach((item)=>{
            if (!ratingArray.find((game) => game.id === item.id)){
                let obj = {
                    id: item.id,
                    title: item.title,
                    image: item.image,
                    link: item.link,
                    description: item.description,
                    rating: 0,
                }
                ratingArray.push(obj);
            }
        })
        fs.writeFile(path, JSON.stringify(ratingArray), () =>{
            console.log('Файл записан!');
        })
    })
}
    module.exports = makeRatingFile;