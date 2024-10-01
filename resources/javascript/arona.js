(function (window, document) {
    'use strict';
    
    var hour = new Date().getHours(); // used for Arona's greetings
    
    // # getPaths (helper function) #
    // finds out how deep a file is and returns a path that leads to the root
    // example: getPaths() + 'resources/css/stylesheet-dark.min.css'
    window.getPaths = function () {
      var path = window.location.pathname;
      
      if (/\/report\/|\/download\/|\/donate\/|\/privacy\/|\/arona\/|\/code\/(index|$)/.test(path)) {
        return '../';  
                 
      } else {
        return '';
      }
    };
    
    
    // Arona's functionality
    window.Arona = {
      // encoder/decoder lists
      cunny : {
        encoder : {
          // Letters
          // Uppercase
          'A' : '^😭💢',
          'B' : '^💢😭😭😭',
          'C' : '^💢😭💢😭',
          'D' : '^💢😭😭',
          'E' : '^😭',
          'F' : '^😭😭💢😭',
          'G' : '^💢💢😭',
          'H' : '^😭😭😭😭',
          'I' : '^😭😭',
          'J' : '^😭💢💢💢',
          'K' : '^💢😭💢',
          'L' : '^😭💢😭😭',
          'M' : '^💢💢',
          'N' : '^💢😭',
          'O' : '^💢💢💢',
          'P' : '^😭💢💢😭',
          'Q' : '^💢💢😭💢',
          'R' : '^😭💢😭',
          'S' : '^😭😭😭',
          'T' : '^💢',
          'U' : '^😭😭💢',
          'V' : '^😭😭😭💢',
          'W' : '^😭💢💢',
          'X' : '^💢😭😭💢',
          'Y' : '^💢😭💢💢',
          'Z' : '^💢💢😭😭',
          // Lowercase
          'a' : '😭💢',
          'b' : '💢😭😭😭',
          'c' : '💢😭💢😭',
          'd' : '💢😭😭',
          'e' : '😭',
          'f' : '😭😭💢😭',
          'g' : '💢💢😭',
          'h' : '😭😭😭😭',
          'i' : '😭😭',
          'j' : '😭💢💢💢',
          'k' : '💢😭💢',
          'l' : '😭💢😭😭',
          'm' : '💢💢',
          'n' : '💢😭',
          'o' : '💢💢💢',
          'p' : '😭💢💢😭',
          'q' : '💢💢😭💢',
          'r' : '😭💢😭',
          's' : '😭😭😭',
          't' : '💢',
          'u' : '😭😭💢',
          'v' : '😭😭😭💢',
          'w' : '😭💢💢',
          'x' : '💢😭😭💢',
          'y' : '💢😭💢💢',
          'z' : '💢💢😭😭',

          // russian letters
          // Uppercase
          'А' : '^😭💢',
          'Б' : '^💢😭😭😭',
          'В' : '^😭💢💢',
          'Г' : '^💢💢😭',
          'Д' : '^💢😭😭',
          'Е' : '^😭',
          'Ж' : '^😭😭😭💢',
          'З' : '^💢💢😭😭',
          'И' : '^😭😭',
          'Й' : '^😭💢💢💢',
          'К' : '^💢😭💢',
          'Л' : '^😭💢😭😭',
          'М' : '^💢💢',
          'Н' : '^💢😭',
          'О' : '^💢💢💢',
          'П' : '^😭💢💢😭',
          'Р' : '^😭💢😭',
          'С' : '^😭😭😭',
          'Т' : '^💢',
          'У' : '^😭😭💢',
          'Ф' : '^😭😭💢😭',
          'Х' : '^😭😭😭😭',
          'Ц' : '^💢😭💢😭',
          'Ч' : '^💢💢💢😭',
          'Ш' : '^💢💢💢💢',
          'Щ' : '^💢💢😭💢',
          'Ъ' : '^😭💢💢😭💢😭',
          'Ы' : '^💢😭💢💢',
          'Ь' : '^💢😭😭💢',
          'Э' : '^😭😭😭💢😭😭😭',
          'Ю' : '^😭😭💢💢',
          'Я' : '^😭💢😭💢',
          // Lowercase
          'а' : '😭💢',
          'б' : '💢😭😭😭',
          'в' : '😭💢💢',
          'г' : '💢💢😭',
          'д' : '💢😭😭',
          'е' : '😭',
          'ж' : '😭😭😭💢',
          'з' : '💢💢😭😭',
          'и' : '😭😭',
          'й' : '😭💢💢💢',
          'к' : '💢😭💢',
          'л' : '😭💢😭😭',
          'м' : '💢💢',
          'н' : '💢😭',
          'о' : '💢💢💢',
          'п' : '😭💢💢😭',
          'р' : '😭💢😭',
          'с' : '😭😭😭',
          'т' : '💢',
          'у' : '😭😭💢',
          'ф' : '😭😭💢😭',
          'х' : '😭😭😭😭',
          'ц' : '💢😭💢😭',
          'ч' : '💢💢💢😭',
          'ш' : '💢💢💢💢',
          'щ' : '💢💢😭💢',
          'ъ' : '😭💢💢😭💢😭',
          'ы' : '💢😭💢💢',
          'ь' : '💢😭😭💢',
          'э' : '😭😭😭💢😭😭😭',
          'ю' : '😭😭💢💢',
          'я' : '😭💢😭💢',
          
          // Numbers
          '0' : '💢💢💢💢💢',
          '1' : '😭💢💢💢💢',
          '2' : '😭😭💢💢💢',
          '3' : '😭😭😭💢💢',
          '4' : '😭😭😭😭💢',
          '5' : '😭😭😭😭😭',
          '6' : '💢😭😭😭😭',
          '7' : '💢💢😭😭😭',
          '8' : '💢💢💢😭😭',
          '9' : '💢💢💢💢😭',
          
          // Punctuation
          '.' : '😭💢😭💢😭💢',
          ',' : '💢💢😭😭💢💢',
          '!' : '💢😭💢😭💢💢',
          '?' : '😭😭💢💢😭😭',
          "'" : '😭💢💢💢💢😭',
          '"' : '😭💢😭😭💢😭',
          '/' : '💢😭😭💢😭',
          '(' : '💢😭💢💢😭',
          ')' : '💢😭💢💢😭💢',
          ':' : '💢💢💢😭😭😭',
          ';' : '💢😭💢😭💢😭',
          '=' : '💢😭😭😭💢',
          '+' : '😭💢😭💢😭',
          '-' : '💢😭😭😭😭💢',
          '_' : '😭😭💢💢😭💢',
          '@' : '😭💢💢😭💢😭',
          '&' : '😭💢😭😭😭',
          // extended support (custom)
          '`' : '😭😭💢💢💢💢',
          '~' : '😭😭😭💢💢💢',
          '\\' : '💢😭😭💢💢',
          '|' : '💢💢💢😭💢',
          '#' : '😭😭😭💢😭💢',
          '$' : '😭😭😭💢😭😭💢',
          '%' : '💢😭😭💢😭💢',
          '^' : '💢💢💢😭💢💢💢',
          '*' : '😭💢😭💢💢',
          '{' : '💢💢💢😭💢😭',
          '}' : '💢💢💢😭😭💢',
          '[' : '💢😭😭💢😭😭',
          ']' : '💢😭😭💢💢😭',
          '<' : '😭😭😭😭💢💢',
          '>' : '💢💢😭😭😭😭',
          
          // Accents
          // Uppercase
          'Ä' : '^😭💢😭💢',
          'Æ' : '^😭💢😭💢',
          'Ą' : '^😭💢😭💢',
          'À' : '^😭💢💢😭💢',
          'Å' : '^😭💢💢😭💢',
          'Ç' : '^💢😭💢😭😭',
          'Ĉ' : '^💢😭💢😭😭',
          'Ć' : '^💢😭💢😭😭',
          'Š' : '^💢💢💢💢',
          'Ĥ' : '^💢💢💢💢',
          'Ð' : '^😭😭💢💢😭',
          'Ś' : '^😭😭😭💢😭😭😭',
          'È' : '^😭💢😭😭💢',
          'Ł' : '^😭💢😭😭💢',
          'É' : '^😭😭💢😭😭',
          'Đ' : '^😭😭💢😭😭',
          'Ę' : '^😭😭💢😭😭',
          'Ĝ' : '^💢💢😭💢😭',
          'Ĵ' : '^😭💢💢💢😭',
          'Ź' : '^💢💢😭😭💢😭',
          'Ñ' : '^💢💢😭💢💢',
          'Ń' : '^💢💢😭💢💢',
          'Ö' : '^💢💢💢😭',
          'Ø' : '^💢💢💢😭',
          'Ó' : '^💢💢💢😭',
          'Ŝ' : '^😭😭😭💢😭',
          'Þ' : '^😭💢💢😭😭',
          'Ü' : '^😭😭💢💢',
          'Ŭ' : '^😭😭💢💢',
          'Ż' : '^💢💢😭😭💢',
          // Lowercase
          'ä' : '😭💢😭💢',
          'æ' : '😭💢😭💢',
          'ą' : '😭💢😭💢',
          'à' : '😭💢💢😭💢',
          'å' : '😭💢💢😭💢',
          'ç' : '💢😭💢😭😭',
          'ĉ' : '💢😭💢😭😭',
          'ć' : '💢😭💢😭😭',
          'š' : '💢💢💢💢',
          'ĥ' : '💢💢💢💢',
          'ð' : '😭😭💢💢😭',
          'ś' : '😭😭😭💢😭😭😭',
          'è' : '😭💢😭😭💢',
          'ł' : '😭💢😭😭💢',
          'é' : '😭😭💢😭😭',
          'đ' : '😭😭💢😭😭',
          'ę' : '😭😭💢😭😭',
          'ĝ' : '💢💢😭💢😭',
          'ĵ' : '😭💢💢💢😭',
          'ź' : '💢💢😭😭💢😭',
          'ñ' : '💢💢😭💢💢',
          'ń' : '💢💢😭💢💢',
          'ö' : '💢💢💢😭',
          'ø' : '💢💢💢😭',
          'ó' : '💢💢💢😭',
          'ŝ' : '😭😭😭💢😭',
          'þ' : '😭💢💢😭😭',
          'ü' : '😭😭💢💢',
          'ŭ' : '😭😭💢💢',
          'ż' : '💢💢😭😭💢',
          
          // Emoji
          '\uDE2D' : '😭😭😭😭😭😭', // 😭 sob
          '\uDCA2' : '💢💢💢💢💢💢', // 💢 anger
          '\uDD80' : '😭💢😭💢😭😭', // 🦀 kani
          
          // Space
          ' ' : ' ' // replaces standard space with four-per-em space which doesn't collapse when there's two in a row for word separation
        },
        
        // decoder is fully auto-generated at end of this object
        decoder : {
          '💢😭😭😭😭💢😭' : '\n' // line break (these are encoded right before decoding)
        }
      },
      
      
      // various lines that Arona will say to Sensei
      speech : {
        // messages displayed upon visit
        greetings : [
          ['Hello, Sensei!', 32],
          ['Good ' + (hour <= 11 ? 'morning' : hour <= 16 ? 'afternoon' : 'evening') + ', Sensei!', 31],
          ['How are you doing today, Sensei?', 2],
          ['What can I do for you today, Sensei?', 3],
          ["Let's do our best today, Sensei!", 12]
        ],
        
        // messages displayed when encoding
        encode : [
          ['Message encoded!', 12],
          ['Let me know if you need anything else encoded.', 13],
          ['Heehee, 😭 is so funny looking.', 32],
          ['Did I do a good job?', 25],
          ['Encoding messages is so much fun!', 11],
          ['Can I have some strawberry milk now?', 21],
          ['Who are you sending this message to, Sensei?', 2]
        ],
        empty_encode : ["I'm sorry, but I can't encode an empty message...", 18],
        
        // messages for when an error occurs while encoding
        encode_error : [
          ['S-Something went wrong!', 28],
          ["These characters were too hard for Arona to encode...", 30],
          ["Sorry, Sensei... Arona made an oopsie...", 18],
          ["Senseiii... these characters are too hard to encode.", 24],
          ["Sorry, Sensei... I tried.", 10]
        ],
        
        // messages displayed when decoding
        decode : [
          ['Message decoded!', 12],
          ["I'll be here if you need to decode anything else.", 13],
          ["I wonder why 😭 and 💢 were used to encode these messages.", 24],
          ['How did I do?', 25],
          ['What does it say?', 22],
          ['Decoding these messages is like opening a fortune cookie, heehee...', 23],
          ['Who is this message from, Sensei?', 2]
        ],
        empty_decode : ['You need to paste your Cunny Code into the input field first, then I can decode it for you!', 4],
        
        // messages display when swapping the input/output values
        swap : [
          ['Swapped!', 12],
          ['I swapped the input and output for you!', 31],
          ['Swapping makes Arona dizzy...', 29],
          ['Round and round you go!', 35],
          ['Would you like to swap places with me, Sensei? I want to try some of the sweets in your world...', 23]
        ],
        empty_swap : ["There's nothing to swap, Sensei.", 24],
        
        // special messages triggered when encoding/decoding certain words/phrases
        special : {
          // normal
          strawberry_milk : ["I love strawberry milk!<br>Can I have some, Sensei?", 21],
          how_are_you : ["I'm doing good!<br>I hope you are as well, Sensei!", 32],
          
          // memey
          uoh : ["What are you uoh'ing at, Sensei?", 2],
          cunny : ['Am I cunny, Sensei?', 31],
          cute_and_funny : ['Is Arona cute and funny?', 31],
          correction : ["P-Please don't correct me, Sensei!<br>I've been good, I promise...!", 18],
          kms : ["P-Please don't do that, Sensei! Arona would be lonely without you...", 28],
          seggs : ["S-S-S-Se...!?", 17],
          rickroll : ["Never gonna let you down🎵", 32],
          mutsuki : ['Wouldn\'t you rather watch Arona dance? ...No? Fine...here\'s your dumb Mutsuki dance.<br><iframe id="video" src="https://www.youtube.com/embed/GfKkSmQrVJw?autoplay=1" frameborder="0"></iframe>', 10],
          
          // first public cunny code message
          // https://x.com/SethC1995/status/1839472034721456176
          first_message : ['The first Cunny Code message was sent on September 26th, 2024 by Seth-sensei. It asked the question: "Do you know Cunny Code?"', 31],
          
          // first person to crack the cunny code before the encoder/decoder was released
          // https://x.com/Roxas13thXIII/status/1839909996383088696
          first_decoder : ['The first person to decode Cunny Code before this tool was released was Haise-sensei on September 28th, 2024.<br>I heard he\'s a big fan of <img src="' + getPaths() + 'resources/images/kisaki-ball.png" style="height:40px; vertical-align:middle;" title="Kisaki" alt="Kisaki">!', 31],
          
          // emoji
          sob : ["Why are you sobbing, Sensei?", 24],
          anger : ["Y-You're not mad at me, are you?", 15],
          kani : ["You talk about 🦀 a lot, Sensei.<br>Is it because it's yummy?", 23],
          
          // responses to sensei complimenting/talking about Arona
          arona_cute : ["I-I'm not <em>that</em> cute, hehe...", 13],
          arona_cunny : ["Yay! I'm cunny!", 12],
          arona_cute_and_funny : ["Yay! Arona is cute and funny!", 11],
          breedable : ["I-I-I-I am...?", 16],
          best : ["Aww... Thank you, Sensei!", 32],
          love : ["I love you, too, Sensei!", 11],
          arona : {
            encode : ['What did you write about me?', 2],
            decode : ['What does it say about me?', 2]
          },
          
          // responses to sensei being mean
          dumb : ['A-Am not!<br>Stop being mean!', 5],
          sucks : ['Quit being mean, Sensei!', 14],
          smells : ["N-No I don't!<br>I had a shower before you got here!", 18],
          smelly : ["A-Am not!<br>I had a shower before you got here!", 18],
          
          // apology response
          sorry : ['Okay... I forgive you, Sensei!', 13]
        },
        
        // message displayed after Sensei is mean to Arona 5 times
        quit : ["That's it! I'm done helping you, you big meanie!!", 6],
        
        // messages displayed when stopping or starting the bgm
        music : {
          play : ['Yay! I love this music.<br>Do you like it, too, Sensei?', 11],
          stop : ['Aww... I wanted to keep listening to the music...', 24]
        }, 
        
        // messages for copying output
        copy : {
          success : [
            ['Copied!', 12],
            ['I just copied the text to your clipboard!', 32],
            ["Copi--...huh? Ah! I-I wasn't looking at your clipboard history, I swear!", 28],
            ["Done! Make sure you don't lose it now!", 31],
            ["You're ready to share!", 20]
          ],
          fail : ["I-I don't know why, but I couldn't copy the text to your clipboard... You'll have to do it manually. Sorry, Sensei...", 30],
          empty : ["You need to encode or decode something first before I can copy it to your clipboard.", 26]
        },
        
        // messages displayed upon idle (no encode/decode/help/typing/mouse movement)
        idle : [
          ['Are you still there, Sensei?', 2],
          ['Where did you go, Sensei?', 18],
          ["I guess Sensei fell asleep...", 10],
          ["I'm bored, Sensei...", 24],
          ["Hmm hmm hmm... 🎵", 33],
          ["Lalala...! 🎶", 13],
          ["Maybe Sensei left to buy me some more strawberry milk.", 23]
        ],
        
        idle_sleep : [
          ['Me? Doze off? Never... Zzz...'],
          ['Zzz... Strawberry milk... Heeheehee...'],
          ["There's no way I can eat all that..."],
          ["Heehee... So yummy..."],
          ["Heeheehee..."],
          ["Zzz..."],
          ["Sensei, you're so..."],
          ["Sensei... So big..."],
          ["No, Sensei... You can't do that..."],
          ["Zzz... Sensei... Heehee..."]
        ],
        
        idle_awaken : [
          ["Welome back, Sensei!", 11],
          ["Sensei! I've been waiting for you!", 12],
          ["Ah! Sensei! Did you bring me back anything yummy!?", 21],
          ["I was lonely without you, Sensei...", 24],
          ["Ah! I-I wasn't sleeping!<br>I was just resting my eyes!", 18],
        ],
        
        // messages displayed when clicking on Arona
        touch : {
           head : ['Heeheehee...', 13],
           face : ['Is there something on my face?', 2],
          chest : ["Y-You shouldn't touch Arona there, Sensei!", 18],
          skirt : ['W-What are you doing with my skirt!?', 28],
            leg : ['T-That tickles!', 12],
           shoe : ["Y-You can't take my shoes off, Sensei!<br>I saw what you did to Iori...!", 30]
        },
        
        // start and end dialogue for "show me your shoes" prompt
        show_shoes : {
          start : ["Okay! Just give me a second!", 3],
          end : ["What do you think of my shoes, Sensei?", 2],
          shown : ["I already did, silly!", 12]
        },
        
        // messages displayed during help
        help : {
          prompt : [
            'Do you need my help using this tool, Sensei?'+
            '<div class="center">'+
              '<button id="NEXT" onclick="Arona.help(Arona.helpStep); Arona.updateHelpPrompt(true);"><i>Yes</i></button>'+
              '<button onclick="Arona.say(Arona.speech.help.prompt_no[0][0], Arona.speech.help.prompt_no[0][1]); Arona.updateHelpPrompt(false);"><i>No</i></button>'+
            '</div>', 2
          ],
          
          prompt_angry : [
            '<strong style="color:red;">Do you need my help or not, Sensei...? I won\'t take NO for an answer this time...</strong>'+
            '<div class="center">'+
              '<button id="NEXT" onclick="Arona.help(Arona.helpStep); Arona.updateHelpPrompt(true);"><i>Yes</i></button>'+
            '</div>', 8
          ],
          
          prompt_yes : ["Okay! Let's start the tutorial!", 12],
          prompt_no : [
            ['Let me know if you change your mind!', 3],
            ["O-Okay... I'll be here if you need me.", 24],
            ["Y-You're not teasing me, are you?", 28],
            ["This isn't funny!", 6],
            ['Quit teasing me, Sensei!', 14]
          ],
          
          step1 : [
            'This tool is used for encoding and decoding messages, so the first thing you need to do is write something in the <strong>input field</strong> like I just did.'+
            '<div class="center">'+
              '<button id="NEXT" onclick="Arona.help(++Arona.helpStep);" style="display:none;"><i>Next</i></button>'+
            '</div>', 20],
          
          step2 : ["Once you've written what you want, you can click the <strong>Encode button</strong> to encode your message.<br>Go ahead and click it, Sensei!", 13],
          
          step3 : [
            'Wow, look! My message was encoded with cute and funny icons! You can copy and share this "Cunny Code" with other Senseis on the web!'+
            '<div class="center">'+
              '<button id="NEXT" onclick="Arona.help(++Arona.helpStep);"><i>Next</i></button>'+
            '</div>', 32],
          
          step4 : ['When you want to decode another Sensei\'s "Cunny Code," paste it into the <strong>Input field</strong> and click the <strong>Decode button</strong>.<br>Go ahead and click it to decode my message!', 22],
          
          step5 : [
            "Look! It decoded my message! And just like it says: you did a good job!"+
            '<div class="center">'+
              '<button id="NEXT" onclick="Arona.help(++Arona.helpStep);"><i>Next</i></button>'+
            '</div>', 11],
          
          step6 : [
            "This concludes the tutorial!<br>I hope you have fun exchanging cute and funny messages with your friends, Sensei!"+
            '<div class="center">'+
              '<button id="NEXT" onclick="Arona.help(7); this.disabled = true;"><i>End Tutorial</i></button>'+
            '</div>', 31]
        }
      },
      
      
      // HTML node cache
      node : {
        arona : document.getElementById('arona'),
        holo : document.getElementById('holo'),
        body : document.getElementById('arona_body'),
        
        dialogue_container : document.getElementById('dialogue_container'),
        dialogue : document.getElementById('dialogue'),
        bg : document.getElementById('bg_layer'),
        
        input : document.getElementById('input'),
        output : document.getElementById('output'),
        encode : document.getElementById('encode'),
        decode : document.getElementById('decode'),
        error : document.getElementById('error'),
        help : document.getElementById('help'),
        
        bgm : document.getElementById('bgm_player'),
        bgm_icon : document.getElementById('bgm_icon')
      },
      
      
      // encodes as morse code
      encode : function (input, caller) {
        if (!input) {
          Arona.say(Arona.speech.empty_encode[0], Arona.speech.empty_encode[1]);
          return false;
        }
        
        // auto-hide error log on encode
        if (Arona.node.error) Arona.node.error.style.display = 'none';
        
        // encode the input using 💢 and 😭, and separate each encoded character by a space
        for (var val = '', str = input.replace(/[\uFF01-\uFF5E]/g, function (c) {
          return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); // convert full-width chars to half-width
        }), err = '', i = 0, j = str.length; i < j; i++) {
          // standard encoding
          if (Arona.cunny.encoder[str[i]]) {
            val += Arona.cunny.encoder[str[i]] + ((str[i] == ' ' || (i + 1) == j) ? '' : ' ');
          }
          
          // linebreak encoding fallback
          else if (/\r\n|\n|\r/.test(str[i])) {
            val += '\n';
          }
          
          // whitespace encoding fallback
          else if (/\s/.test(str[i])) {
            val += ' ';
          }
          
          // characters that could not be encoded
          else if (!/55358|55357|65039/.test(str[i].charCodeAt(0))) { // list of excluded chars
            err += str[i];
            console.error('failed to encode: ' + str[i] + ' (' + str[i].charCodeAt(0) + ')');
          }
        }
        
        if (Arona.node.output) Arona.node.output.value = val;
        
        if (!caller) return val; // return value if used without caller
        
        // continues the tutorial if in tutorial mode
        if (/focused/.test(caller.className)) {
          caller.className = '';
          Arona.help(++Arona.helpStep);
          return false;
        }
        
        // display error message if some characters could not be encoded
        if (Arona.node.error && err.length) {
          // parse error log
          Arona.node.error.innerHTML =
            '<h3>Error</h3>'+
            '<strong>The following could not be encoded.</strong><br><div class="overflow-box">' + err.replace(/</g, '&lt;') + '</div>'+
            '<a href="#close" class="close-button" onclick="this.parentNode.style.display = \'none\'; return false;" title="close"><i class="fa">&#xf00d;</i></a>';
          Arona.node.error.style.display = '';
          
          // make Arona say something about the error
          Arona.randomizeMessage(Arona.speech.encode_error);
        }
        
        // standard encoding message
        else {
          Arona.response(input, 'encode');
        }
      },
      
      
      // decodes morse code
      decode : function (input, caller) {
        if (!input || !/💢|😭/.test(input)) {
          Arona.say(Arona.speech.empty_decode[0], Arona.speech.empty_decode[1]);
          return false;
        }
        
        // auto-hide error log on decode
        if (Arona.node.error) Arona.node.error.style.display = 'none';
        
        // decode the input
        // each letter is separated by a space, so we use that to split the input into an array for easy decoding
        // line breaks are encoded as '💢😭😭😭😭💢😭 ' before decoding
        for (var val = '', arr = input.replace(/^\s+|\s+$/g, '').replace(/\r\n|\n|\r/g, '💢😭😭😭😭💢😭 ').replace(/\s/g, ' ').split(' '), i = 0, j = arr.length; i < j; i++) {
          if (Arona.cunny.decoder[arr[i]]) {
            val += Arona.cunny.decoder[arr[i]];
          } else if (arr[i] == '') { // double spaces == a space, and are entered into the array as an empty string
            val += ' ';
          }
        }
        
        if (Arona.node.output) Arona.node.output.value = val;
        
        if (!caller) return val; // return value if used without caller   
        
        // continues the tutorial if in tutorial mode
        if (/focused/.test(caller.className)) {
          caller.className = '';
          Arona.help(++Arona.helpStep);
          return false;
        }
        
        Arona.response(val, 'decode');
      },
      
      
      // Swaps the values of the input and output fields
      swap : function () {
        // message for when there's nothing to swap
        if (!Arona.node.input.value && !Arona.node.output.value) {
          Arona.say(Arona.speech.empty_swap[0], Arona.speech.empty_swap[1]);
          return false;
        }
        
        // swap values
        var input = Arona.node.input.value;
        Arona.node.input.value = Arona.node.output.value;
        Arona.node.output.value = input;
        
        // display message from Arona
        Arona.randomizeMessage(Arona.speech.swap);
      },
      
      
      // determines Arona's response to whatever is encoded or decoded
      anger : 0, // times sensei was mean to Arona
      lastResponse : [], // last encode message, used to prevent repeat dialogue
      response : function (value, mode) {
        // messages Arona says when encoding
        if (/^arona say .*?/i.test(value)) { // make Arona say something
          // example Arona say Cunny {12}
          // {12} = Arona's holo id (1-35 available)
          Arona.say(value.replace(/^arona say /i, '').replace(/</g, '&lt;').replace(/\{\d+\}/g, ''), /\{\d+\}/g.test(value) ? value.replace(/.*?\{(\d+)\}.*/g, '$1') : 31);
        }
        
        // Arona shows Sensei her cool kicks
        else if (/show me your shoes/i.test(value)) {
          if (/show-shoes/.test(Arona.node.arona.className)) {
            Arona.say(Arona.speech.show_shoes.shown[0], Arona.speech.show_shoes.shown[1]);
          } else {
            Arona.say(Arona.speech.show_shoes.start[0], Arona.speech.show_shoes.start[1], 1000, function () {
              Arona.node.arona.className = 'arona-leave';
  
              setTimeout(function() {
                Arona.node.arona.className = 'show-shoes';
                Arona.say(Arona.speech.show_shoes.end[0], Arona.speech.show_shoes.end[1]);
              }, 1000);
            });
          }
        } 
        
        // shows help prompt if sensei asks arona for help
        else if (/arona(?:,|) help(?: me|)|help(?: me|)(?:,|) arona/i.test(value)) {
          Arona.help();
        } 
        
        // Arona returns if you say sorry after making her mad
        else if (Arona.anger >= 5 && (/(?:I'm |)sorry/i.test(value) && !/not sorry/.test(value))) {
          Arona.comeBack();
        } 
        
        else if (/correction/i.test(value)) {
          Arona.say(Arona.speech.special.correction[0], Arona.speech.special.correction[1]);
        } 
        
        else if (/who was the first (?:person |)to (?:crack|decode) cunny code(?:\?|)|who (?:cracked|decoded) cunny code first(?:\?|)/i.test(value)) {
          Arona.say(Arona.speech.special.first_decoder[0], Arona.speech.special.first_decoder[1], 15000);
        } 
        
        else if (/who (?:shared|sent) the first cunny code(?: message| post|)(?:\?|)|what was the first cunny code message(?:\?|)/i.test(value)) {
          Arona.say(Arona.speech.special.first_message[0], Arona.speech.special.first_message[1], 15000);
        } 
        
        else if (/(?:hello|hi|hey|good day|good evening|good afternoon)(?:,|) arona/i.test(value)) {
          var msg = Arona.speech.greetings[Math.floor(Math.random() * 2)];
          Arona.say(msg[0], msg[1]);
        } 
        
        else if (/never gonna give you up/i.test(value)) {
          Arona.say(Arona.speech.special.rickroll[0], Arona.speech.special.rickroll[1]);
        } 
        
        else if (/mutsuki dance/i.test(value)) {
          Arona.say(Arona.speech.special.mutsuki[0], Arona.speech.special.mutsuki[1], Infinity);
        } 
        
        else if (/how are you(?:, arona| arona)\?/i.test(value)) {
          Arona.say(Arona.speech.special.how_are_you[0], Arona.speech.special.how_are_you[1]);
        } 
        
        else if (/arona is cunny/i.test(value)) {
          Arona.say(Arona.speech.special.arona_cunny[0], Arona.speech.special.arona_cunny[1]);
          if (Arona.anger > 0) Arona.anger--;
        } 
        
        else if (/arona is cute and funny/i.test(value)) {
          Arona.say(Arona.speech.special.arona_cute_and_funny[0], Arona.speech.special.arona_cute_and_funny[1]);
          if (Arona.anger > 0) Arona.anger--;
        } 
        
        else if (/arona (?:is |)cute/i.test(value)) {
          Arona.say(Arona.speech.special.arona_cute[0], Arona.speech.special.arona_cute[1]);
          if (Arona.anger > 0) Arona.anger--;
        } 
        
        else if (/arona (?:is |)(?:breedable|hot|sexy)/i.test(value)) {
          Arona.say(Arona.speech.special.breedable[0], Arona.speech.special.breedable[1]);
          if (Arona.anger > 0) Arona.anger--;
        } 
        
        else if (/arona (?:is |)(?:best|the best|best girl)/i.test(value)) {
          Arona.say(Arona.speech.special.best[0], Arona.speech.special.best[1]);
          if (Arona.anger > 0) Arona.anger--;
        } 
        
        else if (/I love (?:you |you, |)arona/i.test(value)) {
          Arona.say(Arona.speech.special.love[0], Arona.speech.special.love[1]);
          if (Arona.anger > 0) Arona.anger--;
        } 
        
        else if (/arona (?:is |)(?:dumb|stupid)/i.test(value)) {
          Arona.say(Arona.speech.special.dumb[0], Arona.speech.special.dumb[1]);
          if (++Arona.anger == 5) Arona.quit();
        } 
        
        else if (/arona (?:smells$|stinks)|arona (?:is |)(?:smelly|stinky)/i.test(value)) {
          var key = /smelly/.test(value) ? 'smelly' : 'smells';
          Arona.say(Arona.speech.special[key][0], Arona.speech.special[key][1]);
          if (++Arona.anger == 5) Arona.quit();
        }
        
        else if (/arona sucks/i.test(value)) {
          Arona.say(Arona.speech.special.sucks[0], Arona.speech.special.sucks[1]);
          if (++Arona.anger == 5) Arona.quit();
        }
        
        else if (/seggs|sex/i.test(value)) {
          Arona.say(Arona.speech.special.seggs[0], Arona.speech.special.seggs[1]);
        } 
        
        else if (/u[o]+h/i.test(value)) {
          Arona.say(Arona.speech.special.uoh[0], Arona.speech.special.uoh[1]);
        } 
        
        else if (/😭/i.test(value)) {
          Arona.say(Arona.speech.special.sob[0], Arona.speech.special.sob[1]);
        } 
        
        else if (/💢/i.test(value)) {
          Arona.say(Arona.speech.special.anger[0], Arona.speech.special.anger[1]);
        } 
        
        else if (/🦀/i.test(value)) {
          Arona.say(Arona.speech.special.kani[0], Arona.speech.special.kani[1]);
        } 
        
        else if (/cunny/i.test(value)) {
          Arona.say(Arona.speech.special.cunny[0], Arona.speech.special.cunny[1]);
        } 
        
        else if (/cute and funny/i.test(value)) {
          Arona.say(Arona.speech.special.cute_and_funny[0], Arona.speech.special.cute_and_funny[1]);
        } 
        
        else if (/strawberry milk/i.test(value)) {
          Arona.say(Arona.speech.special.strawberry_milk[0], Arona.speech.special.strawberry_milk[1]);
        } 
        
        else if (/(?:kill|off) myself|kms|commit suicide/i.test(value)) {
          Arona.say(Arona.speech.special.kms[0], Arona.speech.special.kms[1]);
        } 
        
        else if (/arona/i.test(value)) {
          Arona.say(Arona.speech.special.arona[mode][0], Arona.speech.special.arona[mode][1]);
        } 
        
        // default messages
        else {
          Arona.randomizeMessage(Arona.speech[mode]);
        }
      },
      
      // randomizes the message of an array in Arona.speech, but doesn't let the same message display twice in a row
      // message = an array from Arona.speech
      // cache = variable name (in string form) to store the last message and compare, like Arona.lastResponse
      randomizeMessage : function (message, cache, duration, callback) {
        cache = cache ? cache : 'lastResponse'; // default to Arona.lastResponse if no custom cache
        
        // create the cache if it doesn't already exist
        if (typeof Arona[cache] === undefined) {
          Arona[cache] = [];
        }
        
        // randomize the message
        var msg = message[Math.floor(Math.random() * message.length)];
  
        // to stop the same message from showing twice in a row, loop the RNG until it gives a new message
        while (Arona[cache] == msg) {
          msg = message[Math.floor(Math.random() * message.length)];
        }
  
        // have Arona say the selected message
        if (duration && callback) {
          Arona.say(msg[0], msg[1] || 1, duration, callback);
        } else if (duration) {
          Arona.say(msg[0], msg[1] || 1, duration);
        } else {
          Arona.say(msg[0], msg[1] || 1);
        }
        
        // cache current selection for comparison next time
        Arona[cache] = msg;
      },
      
      // Arona quits helping Sensei after being mean to her 5 times
      quit : function () {
        Arona.node.help.style.display = 'none';
        Arona.node.encode.disabled = true;
        Arona.node.decode.disabled = true;
        
        Arona.say(Arona.speech.quit[0], Arona.speech.quit[1], 5000, function () {
          Arona.node.arona.className = 'fade-out';
          
          setTimeout(function() {
            Arona.node.encode.removeAttribute('disabled');
            Arona.node.decode.removeAttribute('disabled');
            Arona.node.arona.style.display = 'none';
          }, 950);
        });
      },
      
      // Arona comes back after Sensei says sorry
      comeBack : function () {
        Arona.node.arona.style.display = '';
        Arona.node.arona.className = 'fade-in';
        Arona.node.help.style.display = '';
        
        Arona.say(Arona.speech.special.sorry[0], Arona.speech.special.sorry[1]);
        Arona.anger = 0;
      },
      
      
      // make Arona say something
      // text: STRING of any dialogue you want
      // holo: NUMBER used to display her holo image (see resources/images/arona/) [optional]
      // duration: NUMBER of how long you want your message to stay on screen. [optional] (pass Infinity to remove duration)
      // example Arona.say('I love strawberry milk...', 23, 5000); // 5000 = 5 seconds
      messageTimeout : null,
      messageDuration : 10000,
      say : function (text, holo, duration, callback) {
        if (!Arona.node.dialogue) return 'dialogue not found';
        
        holo = holo ? holo : 1;
        duration = duration ? duration : Arona.messageDuration;
        
        if (Arona.sleeping) {
          Arona.node.bg.className = 'sleeptalk'; // changes sleeping Arona image if sleeptalking
          Arona.node.bg.firstChild.className = 'fade-in';
        }
        Arona.node.holo.src = getPaths() + 'resources/images/arona/' + holo + '.png';
        Arona.node.dialogue.innerHTML = text;
        
        // remove classes on arona from interactions
        if (Arona.node.body.className) {
          Arona.node.body.className = '';
        }
        
        // delete duration timeout if present
        if (Arona.messageTimeout) {
          clearTimeout(Arona.messageTimeout);
          delete Arona.messageTimeout;
        }
        
        // show the dialogue by fading it in
        Arona.node.dialogue_container.className = 'fade-in';
        
        if (duration != Infinity) {
          // hide the dialogue after the specified duration
          Arona.messageTimeout = setTimeout(function () {
            if (Arona.sleeping) {
              Arona.node.bg.className = '';
              Arona.node.bg.firstChild.className = 'fade-out';
            }
            Arona.node.holo.src = getPaths() + 'resources/images/arona/1.png';
            Arona.node.dialogue_container.className = 'fade-out';
            delete Arona.timeout;
            
            if (callback) {
              callback();
            }
          }, duration);
        } else if (callback) {
          callback();
        }
      },
      
      
      // audio files for arona's voice module
      voice : {
        ah : new Audio(getPaths() + 'resources/audio/arona/ah.ogg'),
        heeheehee : new Audio(getPaths() + 'resources/audio/arona/heeheehee.ogg'),
        huh : new Audio(getPaths() + 'resources/audio/arona/huh.ogg'),
        sensei : new Audio(getPaths() + 'resources/audio/arona/sensei.ogg')
      },
      
      // make arona speak (audibly)
      // uses voice files above, so file == the object key for voice (Arona.speak('heeeheehee'))
      speak : function (file) {
        // stop any audio currently playing
        for (var k in Arona.voice) {
          if (!Arona.voice[k].paused) {
            Arona.voice[k].pause();
          }
        }
        
        // play the specified audio file
        Arona.voice[file].load();
        Arona.voice[file].play();
      },
      
      
      // copies the output to the user's clipboard
      copyText : function (value) {
        if (value) {
          try {
            navigator.clipboard.writeText(value);
            Arona.randomizeMessage(Arona.speech.copy.success);
  
          } catch (err) {
            console.error(err);
            Arona.say(Arona.speech.copy.fail[0], Arona.speech.copy.fail[1]);
          }
        } else {
          Arona.say(Arona.speech.copy.empty[0], Arona.speech.copy.empty[1]);
        }
      },
      
      
      // Arona says something based on where the user touches her (head, face, chest, skirt, legs, shoes)
      touch : function (area) {
        if (area) {
          Arona.say(Arona.speech.touch[area][0], Arona.speech.touch[area][1]);
          
          // reactions to being touched
          if (/head|leg/.test(area)) {
            setTimeout(function () {
              Arona.node.body.className = 'jump';
              Arona.speak('heeheehee');
            }, 100); // slight delay required in case applying the same class that was removed in Arona.say
          }
          
          else if (/chest|skirt|shoe/.test(area)) {
            setTimeout(function () {
              Arona.node.body.className = 'shake';
              Arona.speak('ah');
            }, 100);
          }
          
          else if (/face/.test(area)) {
            setTimeout(function () {
              Arona.node.body.className = 'lean-in';
              Arona.speak('huh');
            }, 100);
          }
        }
      },
      
      
      // Have Arona write a message into the input field
      write : function (msg, callback) {
        if (!Arona.node.input) return 'input not found';
        
        if (Arona.writingTimeout) {
          clearTimeout(Arona.writingTimeout);
          delete Arona.writingTimeout;
        }
        
        if (!Arona.writing && msg) {
          Arona.writing = true;
          Arona.writingMsg = msg;
          Arona.writingIndex = 0;
          Arona.writingLimit = msg.length;
          Arona.writingCallback = callback;
          Arona.node.input.value = '';
          
          Arona.writingTimeout = setTimeout(Arona.writingLoop, Math.floor(Math.random() * 100) + 100);
          
        } else {
          Arona.writingTimeout = setTimeout(Arona.writingLoop, Math.floor(Math.random() * 100) + 100);
        }
      },
      
      // variables used when Arona is writing
      writing : false,
      writingMsg : null,
      writingIndex : null,
      writingLimit : null,
      writingTimeout : null,
      writingCallback : null,
      
      // writes the next character in the writingMsg string
      writingLoop : function() {
        if (Arona.writingTimeout) delete Arona.writingTimeout;
        
        Arona.node.input.value += Arona.writingMsg[Arona.writingIndex++];
  
        if (Arona.writingIndex < Arona.writingLimit) {
          Arona.write();
        } else {
          Arona.writing = false;
          if (Arona.writingCallback) {
            Arona.writingCallback();
            Arona.writingCallback = null;
          }
        }
      },
      
      
      // plays dialogue from Arona that instructs the user on how to use this tool
      helping : false,
      helpStep : 1,
      help : function (step) {
        // starts tutorial after hitting yes
        if (step) {
          switch (step) {
            case 1:
              Arona.helping = true;
              
              // apply overlay to prevent tutorial interruption
              if (!document.getElementById('tutorial-overlay')) {
                var overlay = document.createElement('DIV');
                overlay.id = 'tutorial-overlay';
                overlay.className = 'fade-in';
  
                document.body.className = 'tutorial';
                document.body.appendChild(overlay);
              }
  
              Arona.node.bg.className = '';
              
              Arona.say(Arona.speech.help.prompt_yes[0], Arona.speech.help.prompt_yes[1], 3000, function() {
                Arona.node.input.className = 'focused';
                Arona.node.input.disabled = true;
                
                // Arona types out her encoding example
                Arona.write('I love strawberry milk!', function() {
                  var next = document.getElementById('NEXT');
                  next.style.display = '';
                  next.focus();
                });
                Arona.say(Arona.speech.help.step1[0], Arona.speech.help.step1[1], Infinity);
              });
              break;
              
            case 2:
              Arona.node.input.className = '';
              Arona.node.encode.className = 'focused';
              Arona.node.encode.focus();
              
              Arona.say(Arona.speech.help.step2[0], Arona.speech.help.step2[1], Infinity);
              break;
              
            case 3:
              Arona.node.output.disabled = true;
              Arona.node.output.className = "focused";
              Arona.say(Arona.speech.help.step3[0], Arona.speech.help.step3[1], Infinity);
              document.getElementById('NEXT').focus();
              break;
              
            case 4:
              Arona.node.input.value = '^💢💢😭 💢💢💢 💢💢💢 💢😭😭  😭💢💢💢 💢💢💢 💢😭😭😭 💢😭💢😭💢💢'; // Good job!
              Arona.node.output.value = '';
              
              Arona.node.output.className = '';
              Arona.node.input.className = 'focused no-outline';
              
              Arona.node.decode.className = 'focused';
              Arona.node.decode.focus();
              
              Arona.say(Arona.speech.help.step4[0], Arona.speech.help.step4[1], Infinity);
              break;
              
            case 5:
              Arona.node.output.className = 'focused';
              Arona.node.input.className = '';
              Arona.node.decode.className = '';
              Arona.say(Arona.speech.help.step5[0], Arona.speech.help.step5[1], Infinity);
              document.getElementById('NEXT').focus();
              break;
              
            case 6:
              Arona.node.output.className = '';
              Arona.say(Arona.speech.help.step6[0], Arona.speech.help.step6[1], Infinity);
              document.getElementById('NEXT').focus();
              break;
              
            case 7: // returns tool to default state
              Arona.helping = false;
              Arona.node.input.value = '';
              Arona.node.output.value = '';
              Arona.node.output.className = '';
              Arona.node.input.removeAttribute('disabled');
              Arona.node.output.removeAttribute('disabled');
              Arona.helpStep = 1;
              
              document.body.removeChild(document.getElementById('tutorial-overlay'));
              document.body.className = '';
              
              Arona.node.dialogue_container.className = 'fade-out';
              break;
            
            default:
              break;
          }
        }
        
        // show prompt before starting tutorial
        else if (!Arona.helping) {
          if (Arona.helpDenied >= 5) {
            document.body.style.backgroundImage = 'url(' + getPaths() + 'resources/images/bg-red.png);';
            
            var overlay = document.createElement('DIV');
            overlay.id = 'tutorial-overlay';
            overlay.className = 'fade-in';
  
            document.body.className = 'tutorial red';
            document.body.appendChild(overlay);
            Arona.node.bg.className = 'fade-in';
          } else {
            Arona.speak('sensei');
          }
          
          Arona.say(Arona.speech.help.prompt[0], Arona.speech.help.prompt[1], Infinity);
          document.getElementById('NEXT').focus();
        }
      },
      
      // updates the help prompt text
      helpDenied : 0, // number of times Sensei denied Arona's help
      updateHelpPrompt : function (accepted) {
        // revert prompts to their defeault state if help is accepted
        if (accepted) {
          if (Arona.helpDenied >= 5) {
            var temp = Arona.speech.help.prompt;
            Arona.speech.help.prompt = Arona.speech.help.prompt_angry;
            Arona.speech.help.prompt_angry = temp;
            document.body.className = 'tutorial';
          }
          
          Arona.speech.help.prompt[0] = Arona.speech.help.prompt[0].replace(/Arona\.speech\.help\.prompt_no\[\d\]/g, 'Arona.speech.help.prompt_no[0]');
          Arona.helpDenied = 0;
        } 
        
        // change dialogue when help is denied
        else {
          Arona.helpDenied++;
          
          if (Arona.helpDenied < 5) {
            Arona.speech.help.prompt[0] = Arona.speech.help.prompt[0].replace(/Arona\.speech\.help\.prompt_no\[\d\]/g, 'Arona.speech.help.prompt_no[' + Arona.helpDenied + ']');
            
          } else {
            var temp = Arona.speech.help.prompt;
            Arona.speech.help.prompt = Arona.speech.help.prompt_angry;
            Arona.speech.help.prompt_angry = temp;
          }
        }
      },
      
      
      // make Arona say things if Sensei is idle
      sleeping : false, // tells if Arona is sleeping
      idleCount : 0, // amount of idle messages before Arona falls asleep
      idling : null,
      lastIdleMsg : [],
      idle : function (init) {
        // set event listeners (one time on initialization)
        if (init) {
          for (var e = ['click', 'keydown', 'mousemove', 'scroll', 'touch'], i = 0, j = e.length; i < j; i++) {
            document.addEventListener(e[i], function () {
              Arona.idleCount = 0; // reset idle count
              Arona.idle(); // clear existing timeout
              
              // stop Arona from falling alseep
              if (Arona.aboutToSleep) {
                clearTimeout(Arona.aboutToSleep);
                delete Arona.aboutToSleep;
                
                // reset Arona emote
                if (/34\.png/.test(Arona.node.holo.src)) {
                  Arona.node.holo.src = getPaths() + 'resources/images/arona/1.png';
                }
              }
              
              // wake Arona up
              if (Arona.sleeping) {
                Arona.sleeping = false;
                Arona.node.holo.src = getPaths() + 'resources/images/arona/23.png';
                Arona.node.bg.className = 'fade-out';
                Arona.node.dialogue_container.className = 'fade-out';
                Arona.node.body.className = 'fade-in';
                
                // small timeout so fade in/out animates
                setTimeout(function() {
                  document.body.className = '';
                  Arona.node.bg.firstChild.className = '';
                  
                  // welcome sensei back
                  Arona.randomizeMessage(Arona.speech.idle_awaken, 'lastAwakenMessage');
                }, 900);
              }
            });
          }
        }
        
        // clear timeout if this function was triggered by an action
        if (Arona.idling) {
          clearTimeout(Arona.idling);
          delete Arona.idling;
        }
        
        // set a timeout for an idle message
        Arona.idling = setTimeout(function () {
          if (/tutorial/.test(document.body.className) || Arona.anger >= 5) return false; // prevent execution while in tutorial or if arona is mad
          
          // Have Arona speak
          Arona.randomizeMessage(Arona.speech['idle' + (Arona.sleeping ? '_sleep' : '')], 'lastIdleMsg', 10000, function () {
            // change arona's holo to a sleepy face before finally falling asleep
            if (Arona.aboutToSleep) {
              Arona.node.holo.src = getPaths() + 'resources/images/arona/34.png';
            }
          });
          
          // change background to Arona sleeping and hide the current Arona
          if (++Arona.idleCount == 6) {
            // add short delay for the idle message before switching to sleeping arona
            Arona.aboutToSleep = setTimeout(function () {
              Arona.sleeping = true;
              document.body.className = 'sleep';
              Arona.node.arona.className = '';
              Arona.node.bg.className = 'fade-in';
              Arona.node.body.className = 'fade-out';
              delete Arona.aboutToSleep;
            }, 15000);
          }
          
          delete Arona.idling;
          
          // start next idle timeout
          Arona.idle();
        }, 30000);
      },
      
      
      // toggles background music
      toggleBGM : function (play) {
        // play music
        if (Arona.node.bgm.paused) {
          Arona.node.bgm.play();
          Arona.node.bgm_icon.src = getPaths() + 'resources/images/play.png';
          Arona.say(Arona.speech.music.play[0], Arona.speech.music.play[1]);
        } 
        
        // pause music
        else {
          Arona.node.bgm.pause();
          Arona.node.bgm_icon.src = getPaths() + 'resources/images/mute.png';
          Arona.say(Arona.speech.music.stop[0], Arona.speech.music.stop[1]);
        }
      },
      
      
      // functions for preloading assets
      preload : {
        imgPath : getPaths() + 'resources/images/',
        
        // main preloader
        assets : function () {
          var images = ['bg_sleep.png', 'bg_sleeptalk.png', 'bg_red.png', 'play.png'], // image list
              aronas = 35, // number of arona images
              i, j, k, img;
          
          while (aronas != 1) { // stop at 1 since it's already loaded upon visiting
            images.push('arona/' + (aronas--) + '.png');
          }
  
          // finally, preload all the images, but 100ms apart as to not assault the browser with requests all at once
          Arona.preload.queue = images;
          Arona.preload.loaded = 0;
          Arona.preload.worker = setInterval(function () {
            var img = Arona.preload.queue[Arona.preload.loaded];
            
            if (img) {
              Arona.preload.image(img);
              Arona.preload.loaded++;
            } else {
              clearInterval(Arona.preload.worker);
              delete Arona.preload.worker;
            }
          }, 100);
        },
  
        // preloads an image
        image : function (src) {
          var img = new Image();
          img.src = Arona.preload.imgPath + src;
        }
      }
    };
    
    // setup decoder keys/values
    for (var k in Arona.cunny.encoder) {
      Arona.cunny.decoder[Arona.cunny.encoder[k]] =
        k == '\uDE2D' ? '😭' :
        k == '\uDCA2' ? '💢' :
        k == '\uDD80' ? '🦀' : k;
    }
    
    // set and normalize audio volume
    for (var k in Arona.voice) {
      Arona.voice[k].volume = 0.4;
    }
    
    if (Arona.node.bgm) {
      Arona.node.bgm.volume = 0.4;
    }
    
    
    // # OFFLINE LINK MODIFICATIONS #
    // appends index.html to links if this project is hosted on the local file system
    if (window.location.protocol == 'file:') {
      for (var a = document.getElementsByTagName('A'), i = 0, j = a.length; i < j; i++) {
        if (!/http/.test(a[i].href)) {
          if (/\/$/.test(a[i].href)) {
            a[i].href += 'index.html';
          } else if (/\/#.*?$/.test(a[i].href)) {
            a[i].href = a[i].href.replace(/(#.*?)$/, 'index.html$1');
          } else if (/\/\?.*?$/.test(a[i].href)) {
            a[i].href = a[i].href.replace(/(\?.*?)$/, 'index.html$1');
          }
        }
      }
    }
    
    
    // handlers for the input/output fields
    if (Arona.node.input) {
      // auto-focus the input
      Arona.node.input.focus();
      
      // emote formatting
      Arona.node.input.oninput = function () {
        if (/:(?:sob|uoh):/ig.test(this.value)) {
          this.value = this.value.replace(/:(?:sob|uoh):/ig, '😭');
        }
        
        if (/:(?:anger|correction):/ig.test(this.value)) {
          this.value = this.value.replace(/:(?:anger|correction):/ig, '💢');
        }
        
        if (/:(?:crab|kani):/ig.test(this.value)) {
          this.value = this.value.replace(/:(?:crab|kani):/ig, '🦀');
        }
      };
      
      // disables enter key's normal behavior unless SHIFT is held down
      Arona.node.input.onkeydown = function (e) {
        if (/enter/i.test(e.key) && !e.shiftKey) e.preventDefault();
      };
  
      // auto encode or decode when pressing the enter button
      Arona.node.input.onkeyup = function (e) {
        if (e.shiftKey) return false; // don't encode if holding shift; this indicates a line break
        
        if (/enter/i.test(e.key)) {
          // mixed encode
          if (/[A-Zа-яА-Я0-9.,!?'"/\(\):;=+\-_@&`~\\\|#$%*\{\}\[\]<>🦀ÄÆĄÀÅÇĈĆŠĤÐŚÈŁÉĐĘĜĴŹÑŃÖØÓŜÞÜŬŻ]/i.test(this.value) && /😭|💢/.test(this.value)) {
            Arona.encode(this.value, this);
          }
          
          // decode
          else if (/😭|💢/.test(this.value)) {
            Arona.decode(this.value, this);
          } 
          
          // default encode
          else {
            Arona.encode(this.value, this);
          }
        }
      };
      
      // copy output if enter is pressed on the output field
      Arona.node.output.onkeyup = function (e) {
        if(/enter/i.test(e.key)) {
          this.select();
          Arona.copyText(this.value);
        }
      }
    }
    
  }(window, document));
