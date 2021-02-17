const request = require('request');
const path = require('path');
const config = require('./config');
const analyze = require('./analyze');
const fs = require('fs');
function start()
{
    request(config.url,function(err,res,body)
    {
        console.log('start');
        if(!err && res)
        {
            console.log('start');
            analyze.findImg(body,downLoad);
        }
    })
}

function downLoad(imgUrl , i)
{
    
    let ext = imgUrl.split('.').pop();
    console.log(ext);
    var http = "http";
    console.log(imgUrl.search(http) != -1 );  // true
    if(imgUrl.search(http) != -1)//包含https
    {

    }
    else{
        imgUrl = "https:"+imgUrl;
    }
    console.log(imgUrl);
    request(imgUrl).pipe(fs.createWriteStream(path.join(config.imgDir,i+'.'+ext),{'encoding':'utf8'}));
    console.log(i);
}

start();