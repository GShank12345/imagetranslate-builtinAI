
// window.alert("window",window);
var textkey = ""
var decrypt1 = ""
var decrypted = ""
var textkey1 = ""
var decrypt2 = ""
var imgc;
var decrypted2 = ""
var stat = ""
var langte = "The language is"
var canDetect = "no";
let detector;
var lg;
var lg1;
var ltext = "";
var languageNames;
// var genimg;
// var yourprompt;
// window.moveTo(0, 0);
cantrans = false;
var d = new Date()
var yourtxt;
var i = 0
var value="";
var imga;
var x=" ";
var streaming=false;
var width = 320;
var canvas = null;
console.log("model...................................")


var flowers = ["flower/flower-1.png","flower/flower-2.png","flower/flower-3.png","flower/flower-4.png","flower/flower-5.png","flower/flower-6.png","flower/flower-7.png","flower/flower-8.png","flower/flower-9.png","flower/flower-10.png"]



var i1 =  Math.floor(Math.random() * flowers.length);
var  mess=flowers[i1];



var ffm = []
// change Feb 8
var url1 = 'https://fonts.googleapis.com/css?family=Tangerine|Inconsolata|Droid+Sans'

        window.document.write("<br><h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Text translation from Image" + " " + String(d).substring(0,16) + "</h1>&nbsp;&nbsp;")

window.document.write("<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Select a File to Load:&nbsp;&nbsp;<input type='file' id='fileToLoad'>&nbsp&nbsp&nbsp<button id='loadFileAsText' onclick='loadfile()'>Load Selected File</button></b><br><br><style>.dcamera{width: 240px;display: inline-block;}</style>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class='dcamera'><video id='video'>video stream unavailable</video></div><br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id='startbutton'>Open Webcam</button></div></center><br><br>")

var tkphoto = document.getElementById('startbutton');

  tkphoto.onclick = function()
    {
        tkphoto.textContent = 'Click to take a photo';
        imgc = null;
        demo.document.body.innerHTML = null;
        video = document.getElementById('video');

        let hidden = video.getAttribute("hidden");
        if (hidden) {
            video.removeAttribute("hidden");
        }
       // canvas = document.getElementById('canvas');
      //  photo = document.getElementById('photo');

        navigator.mediaDevices.getUserMedia({
                           video: true,
                           audio: false
                       })
                       .then(function(stream) {
                           video.srcObject = stream;
                           video.play();
                       })
                       .catch(function(err) {
                           console.log("An error occurred: " + err);
                       });
        video.addEventListener('canplay', function(ev) {
                        if (!streaming) {
                            height = video.videoHeight / (video.videoWidth / width);

                            if (isNaN(height)) {
                                height = width / (4 / 3);
                            }

                            video.setAttribute('width', width);
                            video.setAttribute('height', height);
                         //   canvas.setAttribute('width', width);
                         //   canvas.setAttribute('height', height);
                            streaming = true;
                        }
                    }, false);
        tkphoto.addEventListener('click', function(ev) {
            demo.document.body.innerHTML = null;
         //   democ.document.body.innerHTML = null;

            imgc = null;
                        takepicture();
                        ev.preventDefault();
                    }, false);

    }

function takepicture() {

var canvas = document.createElement("canvas")
var context = canvas.getContext('2d');
    if (width && height) {
        canvas.width = width;
        canvas.height = height;
        context.drawImage(video, 0, 0, width, height);
        var data = canvas.toDataURL('image/png');
        var img = document.createElement("img");
       img.src = data;
        imgc = img.src;
        demo.document.body.innerHTML =  "<img id='img' alt='health' height='250' width='250' src=" + imgc + "></img></html>";
    } else {
      //  clearphoto();
        imgc = null;
        demo.document.body.innerHTML = null;
    }
}
var fileload = document.getElementById('loadFileAsText');

window.document.write(";<iframe name='demo' id='demo' style='color:black;width:75%;' height='500'></iframe><img id='flower-id' width='150' height='150' alt='flowers' src=" + mess + "></img><script id='scriptcr' src='./crypto-js/crypto-js.js' value=imgc></script></body>'")
var textframe = window.document.getElementById('demo');

window.document.getElementById("demo").style.backgroundColor = "lightblue";
// file upload
fileload.onclick = function loadfile() {
    // alert("entered")
    var filename = document.getElementById("fileToLoad").value
    var fileext = filename.split('.').pop().toLowerCase();
    if (fileext == "" || fileext == undefined)
    {
        alert("There is no Image")
    }

    if ((fileext == "jpg") || (fileext == "png")) {
        var fileToLoad = document.getElementById("fileToLoad").files[0];
        console.log("The file to load " + document.getElementById("fileToLoad").files[0])

                var fileReader = new FileReader();
                var img = document.createElement("img")
                fileReader.readAsDataURL(fileToLoad)
                fileReader.onload = function(fileLoadedEvent){
                    console.log("Tinside ")
                    img.src = fileLoadedEvent.target.result;
                    console.log("The file to load " + img.src)
                    imgc = img.src
                    demo.document.body.innerHTML = "<img id='img' alt='health' height='250' width='250' src=" + img.src + "></img></html>"
                    textextract()
                };

    }
    else
    {
        window.alert("Please upload only jpeg or png file. ")
    }
}

async function textextract()
{

    await fetch('Lambda function to get key').then((response) => response.json())
     .then (async (data) =>  {
     decrypt1 = data
   // console.log("decrypt1-aut with iv",decrypt1)
    decrypted = CryptoJS.AES.decrypt(decrypt1,"",{});
        // console.log("text key", decrypted)
          textkey = await decrypted.toString(CryptoJS.enc.Utf8)
        // console.log("text key", textkey)
    });

    if (textkey == null)
    {
        Console.log("text key error")
    }
    demo.document.body.innerHTML = "<b><h2>Please wait...Analyzing</h2></b>"
    demo.document.body.innerHTML.editable = false


    await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + textkey
    },

    body: data = JSON.stringify({
        'model': "gpt-4o-mini",
        'messages': [{role: "user",  content: [
            { type: "text", text: "Extract only the text from the image without any pleasentaries. If there is no text in the image say 'There is no text to translate'. " },
            {
                type: "image_url",
                image_url: {
                    "url": imgc,
                    "detail": "low"
                },
            },
        ],
            'temperature': 0,
            'max_tokens': 256
        },
        ],
    })
    })
    .then((response)=> {
         return response.json()
        .then((data)=> {
           console.log("message success",data.error)
            if (data.error)
            {
                console.log("message error",data.error)
                alert("Internal Error. Please try again after some time.")
                demo.document.body.innerHTML = ""
                window.location.href = "notes.html"
            }
            else
            {
                console.log(data.choices[0].message.content);
               // demo.document.body.innerHTML = "done"
              //  demo.document.body.innerHTML = "<h3><b>" + data.choices[0].message.content + "</b></h3>"
                ltext =  data.choices[0].message.content

                console.log("ltext.......................",ltext)
            }
        })

    })

   // console.log("yourtext.......................",yourtxt)
    printw1()

  //  printw2()
}

async function printw1() {

    if (ltext == "")
     {

       // stat = "Enter a text to translate"
         alert("Unable to translate. Try again later. ")
     }
   // console.log("hello.................................",await translation.canDetect());
    if ('translation' in self && 'canDetect' in self.translation) {
        cantrans = true;
        console.log("Value of cantrans =========================",cantrans);
    }
    if (cantrans == true) {
        canDetect = await translation.canDetect();

        var i = 0;
        if (canDetect !== 'no') {
            if (canDetect === 'readily') {
                // The language detector can immediately be used.
                detector = await translation.createDetector();
                const results = await detector.detect(ltext);
                for (const result of results) {
                    console.log(result.detectedLanguage, result.confidence);

                    if (i == 0)
                    {
                        lg = result.detectedLanguage
                        break;
                    }
                    i = i + 1
                    // lg = result.detectedLanguage
                }
                console.log("language.........................",lg);
                languageNames = new Intl.DisplayNames([lg], {
                    type: 'language'
                });
                console.log("lang=================================",languageNames.of(lg),lg)


              //  const supportsOnDevice = 'model' in window && 'createTranslator' in model;
              //  gentrn1()
                printimg()
            }
        }
        else
        {
            alert("language built-in detector cannot be used in this chrome browser.")
        }
    } else {
            // The language detector can't be used at all.
          //
        console.log("Value of no cantrans =========================",cantrans);
        // *******************************************************************************


        }
    printimg()



}
// file upload
        // window.document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<body onload='enableEditMode()'><style>.dcolor{width:10%;text-align:center}</style><button onclick='bold' title='bold' id='bold'><i class='fa fa-bold'></i></button><textarea id='demo' rows='20' cols='110'></textarea>")

        window.document.write("<text id='langt'></text>")
// demo = window.document.getElementById('demo');
 // var gentrn1 = window.document.getElementById('generatetrn');

var langt = window.document.getElementById('langt') ;
// window.document.write("<br><text id = 'stat'>" + stat + "</text><br>")
// yourtxt = ltext;




async function printimg() {
    console.log("inside----------------")
  //  const session1 = await window.ai.languageModel.create();

  //  console.log(session1);
    const session = await  window.ai.languageModel.create({
     systemPrompt: "Translate the text first then pretend to be an eloquent linguist. If there is no text to translate or if the text is already in English, then simply say there is nothing to translate. Keep it concise and to the point with no pleasentries."
    });
   //  console.log("session---------------",session);
    var text2 = await session.prompt("Translate " + ltext);
    demo.document.body.innerHTML = "<img id='img' alt='health' height='250' width='250' src=" + imgc + "></img></html>" + "<br><h2><b>" + text2 + "</b></h2>"
}
