(function (window, document) {
  'use strict';
  
  // Global used for telling if the site is being used offline with MS Edge (pre-chromium).
  // Helps prevent "unspecified errors" caused by checking for the existence of localStorage support offline.
  window.offlineEdge = window.location.protocol == 'file:' && /Edge/.test(navigator.userAgent);
  
  // Global used for checking localStorage support (ex: storageOK && localStorage.myStorageItem)
  // prevents long winded conditions everytime we want to use storage
  window.storageOK = navigator.cookieEnabled && !offlineEdge && window.localStorage ? true : false;
  
  // # getPaths (helper function) #
  // finds out how deep a file is and returns a path that leads to the root
  // example: getPaths() + 'resources/css/stylesheet-dark.min.css'
  window.getPaths = function () {
    var path = window.location.pathname;
    
    if (/\/report\/|\/download\/|\/donate\/|\/privacy\/|\/arona\/|\/code\/|\/extension\/(index|$)/.test(path)) {
      return '../';  
               
    } else {
      return '';
    }
  };
  
  var hour = new Date().getHours(), // used for Arona's greetings
      // used for youtube embeds
      yt_embed = '<iframe id="video" src="https://www.youtube.com/embed/{ID}?autoplay=1" frameborder="0" allow="autoplay"></iframe>';
  
  // transfers old sensei name storage item to the new version
  if (storageOK && localStorage.senseiName) {
    localStorage.cc_sensei_name = localStorage.senseiName;
    localStorage.removeItem('senseiName');
  }
  
  
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
    // syntax: ['message', expression_id, duration, callback]
    // callback is rarely used here, however, and is instead used within its respective code block.
    speech : {
      // messages displayed upon visit
      greetings : [
        ['Hello, {Sensei}!', 32],
        ['Good ' + (hour <= 11 ? 'morning' : hour <= 16 ? 'afternoon' : 'evening') + ', {Sensei}!', 31],
        ['How are you doing today, {Sensei}?', 2],
        ['What can I do for you today, {Sensei}?', 3],
        ["Let's do our best today, {Sensei}!", 12]
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
      
      // messages for enabling password mode
      password_on : [
        ['Activating password mode!', 22],
        ["I'll do my best to encrypt your messages!", 25],
        ["Don't worry! Your secrets are safe with me, Sensei.", 13],
        ['Let me know what password you want to use!', 31],
        ["It's tough working with passwords, but Arona will try her best.", 24]
      ],
      
      // messages for disabling password mode
      password_off : [
        ['Password mode deactivated.', 33],
        ["(I'll just pretend that I didn't see anything...)", 3],
        ["You have some strange passwords, Sensei.", 26],
        ['Phew... encoding and decoding with passwords is hard work.', 24],
        ['That was exhausting... Can Arona have something sweet now, Sensei?', 23]
      ],
      
      // messages for when the password is wrong
      password_wrong : [
        ["I don't think that's the right password, Sensei...", 24],
        ["This one is really hard to crack without the right password...", 30],
        ["Sorry! That's the wrong password.", 18],
        ["Are you sure this is the correct password, Sensei...?", 26],
        ["It looks like this password doesn't work...", 10]
      ],
      
      // messages for when setting a custom name
      name : {
        set : ['Okay! Nice to meet you, {Sensei}!', 32],
        same : ["What a coincidence! We have the same name!", 12],
        empty : ["I don't know what to call you if you don't write it, Sensei.", 24]
      },
      
      // special messages triggered when encoding/decoding certain words/phrases
      special : {
        // normal
        strawberry_milk : ["I love strawberry milk!<br>Can I have some, Sensei?", 21],
        how_are_you : ["I'm doing good!<br>I hope you are as well, {Sensei}!", 32],
        goodnight : ["Goodnight, Sensei...", 34],
        goodbye : ["Aww... You're leaving already, Sensei? I wanted to spend more time with you...", 24],
        youtube : ['Here\'s your YouTube video, Sensei!<br>' + yt_embed, 32],
        
        // memey
        uoh : ["What are you uoh'ing at, Sensei?", 2],
        cunny : ['Am I cunny, Sensei?', 31],
        cute_and_funny : ['Is Arona cute and funny?', 31],
        correction : ["P-Please don't correct me, Sensei!<br>I've been good, I promise...!", 18],
        kms : ["Please don't do that, {Sensei}! Arona would be lonely without you...", 28],
        seggs : ["S-S-S-Se...!?", 17],
        sixty_nine : ["Why does everybody say 69 is a nice number, Sensei?", 2],
        rickroll : ['Never gonna let you down🎵<br>' + yt_embed.replace('{ID}', 'dQw4w9WgXcQ'), 32, Infinity],
        arisu_dance : ["Heehee, Arisu's dance is so cute and funny.<br>" + yt_embed.replace('{ID}', 'VSKIGdbf5Fg'), 32, Infinity],
        mutsuki_dance : ['Wouldn\'t you rather watch Arona dance? ...No? Fine...here\'s your dumb Mutsuki dance.<br>' + yt_embed.replace('{ID}', 'GfKkSmQrVJw'), 10, Infinity],
        
        // first public cunny code message
        // https://x.com/SethC1995/status/1839472034721456176
        first_message : ['The first Cunny Code message was sent on September 26th, 2024 by Seth-sensei. It asked the question: "Do you know Cunny Code?"', 31, 15000],
        
        // first person to crack the cunny code before the encoder/decoder was released
        // https://x.com/Roxas13thXIII/status/1839909996383088696
        first_decoder : ['The first person to decode Cunny Code before this tool was released was Haise-sensei on September 28th, 2024.<br>I heard he\'s a big fan of <img src="' + getPaths() + 'resources/images/kisaki-ball.png" style="height:40px; vertical-align:middle;" title="Kisaki" alt="Kisaki">!', 31, 15000],
        
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
        love : ["I love you, too, {Sensei}!", 11],
        arona : {
          encode : ['What did you write about me?', 2],
          decode : ['What does it say about me?', 2]
        },
        
        // responses to sensei being mean
        hate : ["Y-You don't really mean that, do you...?", 19],
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
        ["Welome back, {Sensei}!", 11],
        ["Sensei! I've been waiting for you!", 12],
        ["Ah! Sensei! Did you bring me back anything yummy!?", 21],
        ["I was lonely without you, Sensei...", 24],
        ["Ah! I-I wasn't sleeping!<br>I was just resting my eyes!", 18],
      ],
      
      // messages when picking up Arona
      pick_up : [
        ['Weeeeee!', 12],
        ['Higher, Sensei! Higher!', 12],
        ["Arona's flying!", 25],
        ["Wow! I can see so much from up here!", 25],
        ["Wah! Please don't drop me, Sensei!", 28]
      ],
      
      // messages when putting Arona back down
      put_down : [
        ['Again! Again!', 12],
        ['That was so much fun!', 25],
        ['That was fun! Thanks for playing with me, Sensei!', 11],
        ['Uh-oh... I think that made Arona dizzy...', 29],
        ['Aww... I wanted you to hold me for just a little longer...', 24]
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
        password : ["Setting a password allows you to protect your message. This means that only those who know the password can decode it!", 31, 15000],
        
        prompt : [
          'Do you need my help using this tool, {Sensei}?'+
          '<div class="center">'+
            '<button id="NEXT" onclick="Arona.help(Arona.helpStep); Arona.updateHelpPrompt(true);"><i>Yes</i></button>'+
            '<button onclick="Arona.say(Arona.speech.help.prompt_no[0]); Arona.updateHelpPrompt(false);"><i>No</i></button>'+
          '</div>', 2, Infinity
        ],
        
        prompt_angry : [
          '<strong style="color:red;">Do you need my help or not, {Sensei}...? I won\'t take NO for an answer this time...</strong>'+
          '<div class="center">'+
            '<button id="NEXT" onclick="Arona.help(Arona.helpStep); Arona.updateHelpPrompt(true);"><i>Yes</i></button>'+
          '</div>', 8, Infinity
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
          '</div>', 20, Infinity],
        
        step2 : ["Once you've written what you want, you can click the <strong>Encode button</strong> to encode your message.<br>Go ahead and click it, Sensei!", 13, Infinity],
        
        step3 : [
          'Wow, look! My message was encoded with cute and funny icons! You can copy and share this "Cunny Code" with other Senseis on the web!'+
          '<div class="center">'+
            '<button id="NEXT" onclick="Arona.help(++Arona.helpStep);"><i>Next</i></button>'+
          '</div>', 32, Infinity],
        
        step4 : ['When you want to decode another Sensei\'s "Cunny Code," paste it into the <strong>Input field</strong> and click the <strong>Decode button</strong>.<br>Go ahead and click it to decode my message!', 22, Infinity],
        
        step5 : [
          "Look! It decoded my message! And just like it says: you did a good job!"+
          '<div class="center">'+
            '<button id="NEXT" onclick="Arona.help(++Arona.helpStep);"><i>Next</i></button>'+
          '</div>', 11, Infinity],
        
        step6 : [
          "This concludes the tutorial!<br>I hope you have fun exchanging cute and funny messages with your friends, Sensei!"+
          '<div class="center">'+
            '<button id="NEXT" onclick="Arona.help(7); this.disabled = true;"><i>End Tutorial</i></button>'+
          '</div>', 31, Infinity]
      }
    },
    
    
    // HTML node cache
    node : {
      arona : document.getElementById('arona'),
      holo : document.getElementById('holo'),
      halo : document.getElementById('arona_halo'),
      body : document.getElementById('arona_body'),
      
      dialogue_container : document.getElementById('dialogue_container'),
      dialogue : document.getElementById('dialogue'),
      bg : document.getElementById('bg_layer'),
      
      input : document.getElementById('input'),
      output : document.getElementById('output'),
      encode : document.getElementById('encode'),
      decode : document.getElementById('decode'),
      error : document.getElementById('error'),
      error_list : document.getElementById('error_list'),
      password : document.getElementById('password'),
      enable_password : document.getElementById('enable_password'),
      help : document.getElementById('help'),
      
      bgm : document.getElementById('bgm_player'),
      bgm_icon : document.getElementById('bgm_icon')
    },
    
    
    // user settings
    settings : {
      auto_translate : (storageOK && localStorage.cc_auto_translate == 'false') ? false : true,
      keep_password_state : (storageOK && localStorage.cc_keep_password_state == 'true') ? true : false,
      save_password : (storageOK && localStorage.cc_save_password == 'true') ? true : false,
      sensei_name : (storageOK && localStorage.cc_sensei_name !== undefined) ? localStorage.cc_sensei_name : '',
      
      // opens the settings manager
      open : function () {
        Arona.modal.open({
          title : 'Settings Manager',
          content : 
          '<h3 class="settings-title">Encoder Settings</h3>'+
          '<div class="columns-2 clear">'+
            '<div class="settings-label"><label for="auto_translate">Auto translate:</label></div>'+
            '<div class="settings-value">'+
              '<div class="columns-2">'+
                '<div style="width:10%" class="center">'+
                  '<input id="auto_translate" type="checkbox" class="checkbox_setting input_hidden"' + (Arona.settings.auto_translate ? 'checked' : '') + ' onchange="Arona.settings.toggle(this);">'+
                  '<span tabindex="0" class="pseudo_checkbox" id="auto_translate_clone" onclick="this.previousSibling.click();" onkeyup="/enter/i.test(event.key) && this.previousSibling.click();"></span>'+
                '</div>'+
                '<div style="width:90%">Automatically encodes or decodes Cunny Code when text is entered into the input field.</div>'+
              '</div>'+
            '</div>'+
          '</div>'+

          '<div class="columns-2 clear">'+
            '<div class="settings-label"><label for="keep_password_state" id="label_keep_password_state">Keep password state:</label></div>'+
            '<div class="settings-value">'+
              '<div class="columns-2">'+
                '<div style="width:10%" class="center">'+
                  '<input id="keep_password_state" type="checkbox" class="checkbox_setting input_hidden"' + (Arona.settings.keep_password_state ? 'checked' : '') + ' onchange="Arona.settings.toggle(this);">'+
                  '<span tabindex="0" class="pseudo_checkbox" onclick="this.previousSibling.click();" onkeyup="/enter/i.test(event.key) && this.previousSibling.click();"></span>'+
                '</div>'+
                '<div style="width:90%">'+
                  'Whenever you visit the website, the password checkbox will remain ticked or unticked, depending on what you last set it to.<br>'+
                  '<small>(If disabled, the password checkbox defaults to off every time you visit.)</small>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+

          '<div class="columns-2 clear">'+
            '<div class="settings-label"><label for="save_password" id="label_save_password">Save password:</label></div>'+
            '<div class="settings-value">'+
              '<div class="columns-2">'+
                '<div style="width:10%" class="center">'+
                  '<input id="save_password" type="checkbox" class="checkbox_setting input_hidden"' + (Arona.settings.save_password ? 'checked' : '') + ' onchange="Arona.settings.toggle(this);">'+
                  '<span tabindex="0" class="pseudo_checkbox" onclick="this.previousSibling.click();" onkeyup="/enter/i.test(event.key) && this.previousSibling.click();"></span>'+
                '</div>'+
                '<div style="width:90%">'+
                  'Saves your most recent password so you don\'t have to type it again when encrypting or decrypting.<br>'+
                  '<small>(The saved password is deleted upon disabling this option.)</small>'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+

          '<h3 class="settings-title">Other</h3>'+
          '<div class="columns-2 clear">'+
            '<div class="settings-label"><label for="sensei_name" id="label_save_password">Sensei name:</label></div>'+
            '<div class="settings-value">'+
              '<input id="sensei_name" type="text" placeholder="Sensei" value="' + (Arona.settings.sensei_name ? Arona.settings.sensei_name : '') + '" oninput="Arona.settings.updateName(this.value);" maxlength="20"><br>'+
              'Changes the name that Arona calls you by in certain situations, such as greetings.'+
            '</div>'+
          '</div>'+
          '<br>',

          buttonText : 'Close',
          noFocus : true,
          focus : '#auto_translate_clone',
          
          customButton : '<button onclick="Arona.settings.reset();"><i>Reset</i></button>',

          customSize : {
            top : '5%',
            left : '25%',
            bottom : '5%',
            right : '25%'
          }
        });
      },
      
      // handler for general settings that have a boolean value
      toggle : function (setting) {
        var id = setting.id;
        Arona.settings[id] = setting.checked;
        
        if (storageOK) {
          localStorage['cc_' + id] = setting.checked.toString();
          
          // saves or deletes saved password
          if (id == 'save_password') {
            if (!setting.checked) {
              localStorage.removeItem('cc_password_key');
            } else {
              localStorage.cc_password_key = Arona.password.key;
            }
          }

          // saves or deletes saved password state
          if (id == 'keep_password_state') {
            if (!setting.checked) {
              localStorage.removeItem('cc_password_state');
            } else {
              localStorage.cc_password_state = Arona.password.on;
            }
          }
        }
      },
      
      // updates Sensei's name
      updateName : function (name) {
        name = name.slice(0, 20).replace(/</g, '&lt;');
        
        if (name.length) { // check to make sure name is at least 1 char
          // finally format and set Sensei's name
          Arona.settings.sensei_name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
          
          // save Sensei's name to the browser
          if (storageOK) {
            localStorage.cc_sensei_name = Arona.settings.sensei_name;
          }
        }
      },
      
      // reset settings to their default values
      reset : function () {
        if (!confirm('This will reset all settings to their defaults. Do you want to continue?')) return false;
        
        // update settings
        Arona.settings.auto_translate = true;
        document.getElementById('auto_translate').checked = true;
        
        Arona.settings.keep_password_state = false;
        document.getElementById('keep_password_state').checked = false;
        
        Arona.settings.save_password = false;
        document.getElementById('save_password').checked = false;
        
        Arona.settings.sensei_name = '';
        document.getElementById('sensei_name').value = '';
        
        
        // update storage items
        if (storageOK) {
          localStorage.cc_auto_translate = true;
          localStorage.cc_keep_password_state = false;
          localStorage.cc_save_password = false;
          localStorage.cc_sensei_name = '';
          localStorage.removeItem('cc_password_key');
          localStorage.removeItem('cc_password_state');
        }
      }
    },
    
    
    // password settings
    password : {
      key : (storageOK && localStorage.cc_save_password == 'true' && localStorage.cc_password_key !== undefined) ? localStorage.cc_password_key : '',
      on : (storageOK && localStorage.cc_keep_password_state == 'true' && localStorage.cc_password_state == 'true') ? true : false,

      // toggles password mode and has Arona react to it
      toggle : function (caller) {
        Arona.password.on = caller.checked;
        Arona.randomizeMessage(Arona.speech['password_' + (Arona.password.on ? 'on' : 'off')], 'lastPassword' + (Arona.password.on ? 'On' : 'Off') + 'Msg');
        
        // saves password state
        if (Arona.settings.keep_password_state && storageOK) {
          localStorage.cc_password_state = caller.checked;
        }
      }
    },
    
    
    // determines whether Arona should encode or decode the passed input
    determineMode : function (input, caller) {
      // mixed encode
      if (/[A-Z0-9.,!?'"/\(\):;=+\-_@&`~\\\|#$%*\{\}\[\]<>🦀ÄÆĄÀÅÇĈĆŠĤÐŚÈŁÉĐĘĜĴŹÑŃÖØÓŜÞÜŬŻ]/i.test(input) && /😭|💢/.test(input)) {
        Arona.encode(input, caller);
      }

      // decode
      else if (/😭|💢/.test(input)) {
        Arona.decode(input, caller);
      } 

      // default encode
      else {
        Arona.encode(input, caller);
      }
    },
    
    
    // delays encoding/decoding if auto_translate is enabled
    // mainly used for Arona.node.input and Arona.node.password
    delay : function (callback) {
      if (Arona.settings.auto_translate) {
        if (Arona.delayTimeout) clearTimeout(Arona.delayTimeout);
        
        // displays an ellipsis in the output to indicate that it's about to change
        if (!Arona.delayEllipsis) {
          Arona.delayEllipsis = true;
          Arona.node.output.value = Arona.node.output.value + '⋯';
        }
        
        // disable the delay ellipsis after the timeout and continue with encoding/decoding
        Arona.delayTimeout = setTimeout(function () {
          Arona.delayEllipsis = false;
          if (!Arona.node.input.value) Arona.node.output.value = '';
          
          callback && callback();
          delete Arona.delayTimeout;
        }, 350);
      } else {
        callback && callback();
      }
    },
    
    
    // encodes as morse code
    encode : function (input, caller) {
      if (Arona.quitting) return false; // prevents encoding while Arona is leaving
      
      // updates password and input values if sent via an array like this: ['input', 'password']
      if (Array.isArray(input)) {
        Arona.password.key = input[1] ? input[1] : Arona.password.key ? Arona.password.key : '';
        Arona.password.on = Arona.password.key ? true : false; // enable password if set
        input = input[0] ? input[0] : '';
      } else if (!caller) {
        Arona.password.on = false; // disables password if plain string is passed without a caller
      }
      
      // prevent encoding if no input
      if (!input) {
        Arona.say(Arona.speech.empty_encode);
        return false;
      }
      
      // used for saving the unencrypted input for Arona's responses when a password is used
      var unencryptedInput;
      
      // auto-hide error log on encode
      if (Arona.node.error) Arona.node.error.style.display = 'none';
      
      // encrypts the string with a password first if set
      if (Arona.password.on && Arona.password.key) {
        unencryptedInput = input;
        input = CryptoJS.AES.encrypt(input, Arona.password.key).toString();
      }
      
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
        Arona.node.error_list.innerText = err;
        Arona.node.error.style.display = '';
        
        // make Arona say something about the error
        Arona.randomizeMessage(Arona.speech.encode_error);
      }
      
      // standard encoding messages
      else {
        Arona.response(unencryptedInput ? unencryptedInput : input, 'encode');
      }
    },
    
    
    // decodes morse code
    decode : function (input, caller) {
      if (Arona.quitting) return false; // prevents decoding while Arona is leaving
      
      // updates password and input values if sent via an array like this: ['input', 'password']
      if (Array.isArray(input)) {
        Arona.password.key = input[1] ? input[1] : Arona.password.key ? Arona.password.key : '';
        Arona.password.on = Arona.password.key ? true : false; // enable password if set
        input = input[0] ? input[0] : '';
      } else if (!caller) {
        Arona.password.on = false; // disables password if plain string is passed without a caller
      }
      
      if (!input || !/💢|😭/.test(input)) {
        Arona.say(Arona.speech.empty_decode);
        return false;
      }
      
      // flag set to false if using Arona.say() in this code block instead of Arona.response();
      var responseOK = true;
      
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
      
      // decrypts the string with the provided password
      if (Arona.password.on && Arona.password.key) {
        var decrypted = '';
        
        try { // will keep things going if a "Malformed UTF-8 data" error is thrown when the password is wrong
          var decrypted = CryptoJS.AES.decrypt(val, Arona.password.key).toString(CryptoJS.enc.Utf8);
        } catch (error) {
          console.error(error);
        }
        
        // updates the val with the decrypted value if there is one, otherwise show a wrong password message
        if (decrypted) {
          val = decrypted;
        }
        // checks if the output is identical to unencrypted strings first before showing the wrong password message
        else if (/([a-zA-Z0-9/\+=])\w+/.test(val) && !/\s/.test(val)) {
          responseOK = false;
          Arona.randomizeMessage(Arona.speech.password_wrong, 'lastWrongPasswordMsg');
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
      
      // have Arona respond to the decoded value
      if (responseOK) Arona.response(val, 'decode');
    },
    
    
    // Swaps the values of the input and output fields
    swap : function () {
      if (Arona.quitting) return false; // prevents swapping while Arona is leaving
      
      // message for when there's nothing to swap
      if (!Arona.node.input.value && !Arona.node.output.value) {
        Arona.say(Arona.speech.empty_swap);
        return false;
      }
      
      // swap values
      var input = Arona.node.input.value;
      Arona.node.input.value = Arona.node.output.value;
      Arona.node.output.value = input;
      
      // display message from Arona
      Arona.randomizeMessage(Arona.speech.swap);
    },
    
    
    // copies the output to the user's clipboard
    copyText : function (value) {
      if (Arona.quitting) return false; // prevents copying while Arona is leaving
      if (value) {
        try {
          navigator.clipboard.writeText(value);
          Arona.randomizeMessage(Arona.speech.copy.success);

        } catch (err) {
          console.error(err);
          Arona.say(Arona.speech.copy.fail);
        }
      } else {
        Arona.say(Arona.speech.copy.empty);
      }
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
      
      // tell Arona your name
      else if (/^(?:my name is|call me) .*?$/i.test(value)) {
        // get name, sanitize, and limit length
        var name = value.replace(/^(?:my name is|call me) (.*?)$/i, '$1').slice(0, 20).replace(/</g, '&lt;');
        
        if (name.length) { // check to make sure name is at least 1 char
          // finally format and set Sensei's name
          Arona.settings.sensei_name = name.slice(0, 1).toUpperCase() + name.slice(1, name.length).toLowerCase();
          Arona.say(Arona.settings.sensei_name == 'Arona' ? Arona.speech.name.same : Arona.speech.name.set);
          
          // save Sensei's name to the browser
          if (storageOK) {
            localStorage.cc_sensei_name = Arona.settings.sensei_name;
          }
        }
        // fallback for empty name
        else {
          Arona.say(Arona.speech.name.empty);
        }
      }
      
      // Arona shows Sensei her cool kicks
      else if (/show me your shoes/i.test(value)) {
        if (/show-shoes/.test(Arona.node.arona.className)) {
          Arona.say(Arona.speech.show_shoes.shown[0]);
        } else {
          Arona.say(Arona.speech.show_shoes.start[0], Arona.speech.show_shoes.start[1], 1000, function () {
            Arona.node.arona.className = 'arona-leave';

            setTimeout(function() {
              Arona.node.arona.className = 'show-shoes';
              Arona.say(Arona.speech.show_shoes.end);
            }, 1000);
          });
        }
      } 
      
      // auto embeds youtube videos into the dialogue
      else if (/youtube\.com|youtu\.be/i.test(value)) {
        // attempt to grab video id
        var vid = value.match(/.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|live\/|watch\?v=)([^#\&\?]*).*/i);
        
        if (vid && vid[1]) { 
          // clean video id of any trailing whitespace/words & sanitize
          vid = (/\s/.test(vid[1]) ? vid[1].split(/\s/)[0] : vid[1]).replace(/</g, '');
          
          // replace the {ID} placeholder with the actual ID
          Arona.say(Arona.speech.special.youtube[0].replace('{ID}', vid), Arona.speech.special.youtube[1], Infinity);
          Arona.idlingStop = true; // prevent video interruption from idle messages
        }
      }
      
      // shows help prompt if sensei asks arona for help
      else if (/arona(?:, | )help(?: me|)|help(?: me|)(?:, | )arona/i.test(value)) {
        Arona.help();
      }
      
      // Arona returns if you say sorry after making her mad
      else if (Arona.anger >= 5 && (/(?:I'm |)sorry/i.test(value) && !/not sorry/.test(value))) {
        Arona.comeBack();
      } 
      
      // responses to greetings/farewells
      else if (/(?:hello|hi|hey|good day|good evening|good afternoon|good morning)(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.greetings[Math.floor(Math.random() * 2)]);
      } 
      
      else if (/(?:goodbye|good-bye)(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.special.goodbye);
      } 
      
      else if (/good(?: |)night(?:, | )arona|arona(?:, | )good(?: |)night/i.test(value)) {
        Arona.say(Arona.speech.special.goodnight[0], Arona.speech.special.goodnight[1], 3000, function () {
          Arona.expression(34);
          Arona.sleep();
        });
      } 
      
      else if (/how are you(?:, | )arona\?/i.test(value)) {
        Arona.say(Arona.speech.special.how_are_you);
      } 
      
      // responses to questions
      else if (/who was the first (?:person |)to (?:crack|decode) cunny code(?:\?|)|who (?:cracked|decoded) cunny code first(?:\?|)/i.test(value)) {
        Arona.say(Arona.speech.special.first_decoder);
      } 
      
      else if (/who (?:shared|sent) the first cunny code(?: message| post|)(?:\?|)|what was the first cunny code message(?:\?|)/i.test(value)) {
        Arona.say(Arona.speech.special.first_message);
      } 
      
      // meme responses
      else if (/never gonna give you up/i.test(value)) {
        Arona.say(Arona.speech.special.rickroll);
        Arona.idlingStop = true;
      } 
      
      else if (/show me (?:the |)(?:arisu|aris|alice) danc(?:e|ing)/i.test(value)) {
        Arona.say(Arona.speech.special.arisu_dance);
        Arona.idlingStop = true;
      } 
      
      else if (/show me (?:the |)mutsuki danc(?:e|ing)/i.test(value)) {
        Arona.say(Arona.speech.special.mutsuki_dance);
        Arona.idlingStop = true;
      } 
      
      else if (/^69$|^69\s|\s69$|\s69\s/i.test(value)) {
        Arona.say(Arona.speech.special.sixty_nine);
      } 
      
      // responses to compliments
      else if (/arona is cunny|(?:you're|you are) cunny(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.special.arona_cunny);
        if (Arona.anger > 0) Arona.anger--;
      } 
      
      else if (/arona is cute and funny|(?:you're|you are) cute and funny(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.special.arona_cute_and_funny);
        if (Arona.anger > 0) Arona.anger--;
      } 
      
      else if (/arona (?:is |)cute|(?:you're|you are) cute(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.special.arona_cute);
        if (Arona.anger > 0) Arona.anger--;
      } 
      
      else if (/arona (?:is |)(?:breedable|hot|sexy)|(?:you're|you are) (?:breedable|hot|sexy)(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.special.breedable);
        if (Arona.anger > 0) Arona.anger--;
      } 
      
      else if (/arona (?:is |)(?:best|the best|best girl|amazing)|(?:you're|you are) (?:the best|amazing)(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.special.best);
        if (Arona.anger > 0) Arona.anger--;
      } 
      
      else if (/I love (?:you |you, |)arona/i.test(value)) {
        Arona.say(Arona.speech.special.love);
        if (Arona.anger > 0) Arona.anger--;
      } 
      
      // responses to mean comments
      else if (/I hate (?:you |you, |)arona/i.test(value)) {
        Arona.say(Arona.speech.special.hate);
        if (++Arona.anger == 5) Arona.quit();
      } 
      
      else if (/arona (?:is |)(?:dumb|stupid)|(?:you're|you are) (?:dumb|stupid)(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.special.dumb);
        if (++Arona.anger == 5) Arona.quit();
      } 
      
      else if (/arona (?:smells$|stinks)|arona (?:is |)(?:smelly|stinky)|(?:you're|you are) (?:smelly|stinky)(?:, | )arona/i.test(value)) {
        Arona.say(Arona.speech.special[/smelly/.test(value) ? 'smelly' : 'smells']);
        if (++Arona.anger == 5) Arona.quit();
      }
      
      else if (/arona sucks/i.test(value)) {
        Arona.say(Arona.speech.special.sucks);
        if (++Arona.anger == 5) Arona.quit();
      }
      
      // general responses
      else if (/(?:kill|off) myself|kms|commit suicide/i.test(value)) {
        Arona.say(Arona.speech.special.kms);
      } 
      
      else if (/correction/i.test(value)) {
        Arona.say(Arona.speech.special.correction);
      } 
      
      else if (/seggs|sex/i.test(value)) {
        Arona.say(Arona.speech.special.seggs);
      } 
      
      else if (/u[o]+h/i.test(value)) {
        Arona.say(Arona.speech.special.uoh);
      } 
      
      else if (/😭/i.test(value)) {
        Arona.say(Arona.speech.special.sob);
      } 
      
      else if (/💢/i.test(value)) {
        Arona.say(Arona.speech.special.anger);
      } 
      
      else if (/🦀/i.test(value)) {
        Arona.say(Arona.speech.special.kani);
      } 
      
      else if (/cunny/i.test(value)) {
        Arona.say(Arona.speech.special.cunny);
      } 
      
      else if (/cute and funny/i.test(value)) {
        Arona.say(Arona.speech.special.cute_and_funny);
      } 
      
      else if (/strawberry milk/i.test(value)) {
        Arona.say(Arona.speech.special.strawberry_milk);
      } 
      
      else if (/arona/i.test(value)) {
        Arona.say(Arona.speech.special.arona[mode]);
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
      var msg = message[Math.floor(Math.random() * message.length)], timeout = 0;

      // to stop the same message from showing twice in a row, loop the RNG until it gives a new message
      while (Arona[cache] == msg) {
        msg = message[Math.floor(Math.random() * message.length)];
        if (timeout++ > 1000) break; // break out if no different message could be chosen
      }

      // have Arona say the selected message
      if (duration && callback) {
        Arona.say(msg[0], msg[1] || 1, duration, callback);
      } else if (duration) {
        Arona.say(msg[0], msg[1] || 1, duration);
      } else {
        Arona.say(msg);
      }
      
      // cache current selection for comparison next time
      Arona[cache] = msg;
    },
    
    // Arona quits helping Sensei after being mean to her 5 times
    quit : function () {
      Arona.quitting = true;
      Arona.node.help.style.display = 'none';
      
      Arona.say(Arona.speech.quit[0], Arona.speech.quit[1], 5000, function () {
        Arona.expression(6); // keep her face angry while fading out
        Arona.node.arona.className = 'fade-out';
        
        setTimeout(function() {
          Arona.quitting = false;
          Arona.node.arona.style.display = 'none';
        }, 950);
      });
    },
    
    // Arona comes back after Sensei says sorry
    comeBack : function () {
      Arona.node.arona.style.display = '';
      Arona.node.arona.className = 'fade-in';
      Arona.node.help.style.display = '';
      
      Arona.say(Arona.speech.special.sorry);
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
      if (Arona.idlingStop) Arona.idlingStop = false; // resume idle messages if they were stopped
      
      // assigns passed array values to their corresponding argument
      if (Array.isArray(text)) {
        callback = text[3] ? text[3] : null;
        duration = text[2] ? text[2] : Arona.messageDuration;
            holo = text[1] ? text[1] : 1;
            text = text[0] ? text[0] : '';
      }
      
      // default values
      else {
        holo = holo ? holo : 1;
        duration = duration ? duration : Arona.messageDuration;
      }
      
      // format Sensei's name
      if (/\{Sensei\}/i.test(text)) {
        text = Arona.settings.sensei_name ?
          text.replace(/\{Sensei\}/ig, Arona.settings.sensei_name + '-sensei') : // custom name, if set
          text.replace(/\{Sensei\}/ig, 'Sensei'); // default "Sensei" if no custom name
      }
      
      // changes sleeping Arona image if sleeptalking
      if (Arona.sleeping) {
        Arona.node.bg.className = 'sleeptalk';
        Arona.node.bg.firstChild.className = 'fade-in';
      }
      
      // standard image and dialogue change
      Arona.expression(holo);
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
          Arona.expression(1);
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
    
    
    // changes Arona's expression
    // id can be a number between 1-35 (see resources/images/arona/)
    expression : function (id) {
      if (Arona.node.holo) {
        Arona.node.holo.src = getPaths() + 'resources/images/arona/' + (id > 35 ? 1 : id <= 0 ? 1 : id) + '.png';
      }
    },
    
    
    // audio files for arona's voice module
    voice : {
      ah : new Audio(getPaths() + 'resources/audio/arona/ah.ogg'),
      fue : new Audio(getPaths() + 'resources/audio/arona/fue.ogg'),
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
    
    
    // Arona says something based on where the user touches her (head, face, chest, skirt, legs, shoes)
    touch : function (area) {
      if (Arona.anger >= 5) return false; // Arona won't let you touch her if she's angry
      
      if (area) {
        Arona.say(Arona.speech.touch[area]);
        
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
    
    
    // pick up Arona and drag her around the screen
    pickedUp : false,
    pickUp : function (e) {
      if (Arona.anger >= 5) return false; // Arona won't let you pick her up if she's angry
      
      if (!Arona.pickedUp) {
        Arona.pickedUp = true;
        Arona.idlingStop = true;
        Arona.node.arona.className = 'dragging';
        document.body.style.overflow = 'hidden'; // hide overflow to prevent window scrolling on touch screens
        
        // show a random message and keep her expression locked to 35 to show she's having fun
        Arona.speak('fue');
        Arona.randomizeMessage(Arona.speech.pick_up, 'lastPickUpMsg', 5000, function () {
          if (Arona.pickedUp) Arona.expression(35);
        });
        
        // set initial coords for Arona (required if user doesn't move the mouse)
        Arona.drag(e);
      }
    },
    
    // moves Arona around the screen
    drag : function (e) {
      if (Arona.pickedUp) {
        Arona.node.arona.style.left = (e.clientX ? e.clientX : e.touches && e.touches[0] && e.touches[0].clientX ? e.touches[0].clientX : 0) - 230 + 'px';
        Arona.node.arona.style.top = (e.clientY ? e.clientY : e.touches && e.touches[0] && e.touches[0].clientY ? e.touches[0].clientY : 0) - 123 + 'px';
      }
    },
    
    // puts Arona down and lets her go back to her regular position
    putDown : function () {
      if (Arona.pickedUp) {
        Arona.pickedUp = false;
        Arona.idlingStop = false;
        Arona.node.arona.className = '';
        document.body.style.overflow = '';
        Arona.node.arona.style.left = '';
        Arona.node.arona.style.top = '';
        Arona.randomizeMessage(Arona.speech.put_down, 'lastPutDownMsg');
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
        // password help
        if (step == 'password') {
          Arona.say(Arona.speech.help.password);
        }
        
        // standard tutorial
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
              Arona.say(Arona.speech.help.step1);
            });
            break;
            
          case 2:
            Arona.node.input.className = '';
            Arona.node.encode.className = 'focused';
            Arona.node.encode.focus();
            
            Arona.say(Arona.speech.help.step2);
            break;
            
          case 3:
            Arona.node.output.disabled = true;
            Arona.node.output.className = "focused";
            Arona.say(Arona.speech.help.step3);
            document.getElementById('NEXT').focus();
            break;
            
          case 4:
            Arona.node.input.value = '^💢💢😭 💢💢💢 💢💢💢 💢😭😭  😭💢💢💢 💢💢💢 💢😭😭😭 💢😭💢😭💢💢'; // Good job!
            Arona.node.output.value = '';
            
            Arona.node.output.className = '';
            Arona.node.input.className = 'focused no-outline';
            
            Arona.node.decode.className = 'focused';
            Arona.node.decode.focus();
            
            Arona.say(Arona.speech.help.step4);
            break;
            
          case 5:
            Arona.node.output.className = 'focused';
            Arona.node.input.className = '';
            Arona.node.decode.className = '';
            Arona.say(Arona.speech.help.step5);
            document.getElementById('NEXT').focus();
            break;
            
          case 6:
            Arona.node.output.className = '';
            Arona.say(Arona.speech.help.step6);
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
        
        Arona.say(Arona.speech.help.prompt);
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
                Arona.expression(1);
              }
            }
            
            // wake Arona up if she's sleeping
            Arona.awaken();
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
        if (/tutorial/.test(document.body.className) || Arona.anger >= 5 || Arona.idlingStop) return false; // prevent execution when one of these states are active
        
        // Have Arona speak
        Arona.randomizeMessage(Arona.speech['idle' + (Arona.sleeping ? '_sleep' : '')], 'lastIdleMsg', 10000, function () {
          // change arona's holo to a sleepy face before finally falling asleep
          if (Arona.aboutToSleep) {
            Arona.expression(34);
          }
        });
        
        // change background to Arona sleeping and hide the current Arona
        if (++Arona.idleCount == 6) {
          // add short delay for the idle message before switching to sleeping arona
          Arona.aboutToSleep = setTimeout(Arona.sleep, 15000);
        }
        
        delete Arona.idling;
        
        // start next idle timeout
        Arona.idle();
      }, 30000);
    },
    
    // put Arona to sleep
    sleep : function () {
      if (!Arona.sleeping) {
        if (Arona.idleCount < 6) Arona.idleCount = 6; // normalize idle count value if triggered outside of the idle functions

        Arona.sleeping = true;
        document.body.className = 'sleep';
        Arona.node.arona.className = '';
        Arona.node.bg.className = 'fade-in';
        Arona.node.body.className = 'fade-out';
        Arona.node.dialogue_container.className = 'fade-out';

        if (Arona.aboutToSleep) {
          clearTimeout(Arona.aboutToSleep);
          delete Arona.aboutToSleep;
        }
      }
    },
    
    // wake Arona up
    awaken : function () {
      if (Arona.sleeping) {
        Arona.sleeping = false;
        Arona.expression(23);
        Arona.node.bg.className = 'fade-out';
        Arona.node.dialogue_container.className = 'fade-out';
        Arona.node.body.className = 'fade-in';
        
        // kill timeout if it's already set
        if (Arona.aboutToAwaken) {
          clearTimeout(Arona.aboutToAwaken);
        }

        // small timeout so fade in/out animates
        Arona.aboutToAwaken = setTimeout(function() {
          document.body.className = '';
          Arona.node.bg.firstChild.className = '';

          // welcome sensei back
          Arona.randomizeMessage(Arona.speech.idle_awaken, 'lastAwakenMessage');
          delete Arona.aboutToAwaken;
        }, 900);
      }
    },
    
    
    // toggles background music
    toggleBGM : function (play) {
      if (Arona.quitting) return false; // prevents toggling BGM while Arona is leaving
      
      // play music
      if (Arona.node.bgm.paused) {
        Arona.node.bgm.play();
        Arona.node.bgm_icon.src = getPaths() + 'resources/images/play.png';
        Arona.say(Arona.speech.music.play);
      } 
      
      // pause music
      else {
        Arona.node.bgm.pause();
        Arona.node.bgm_icon.src = getPaths() + 'resources/images/mute.png';
        Arona.say(Arona.speech.music.stop);
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
    },
    
    
    // popup modal
    modal : {
      // opens a new modal
      // params: object (optional)
      // {
      //           title : string, (popup title)
      //         content : string, (popup content)
      //      buttonText : string, (custom text for the OK button)
      // closeButtonText : string, (custom text for the close button)
      //         noFocus : bool, (keeps buttons from being focused)
      //           focus : string, (pass a css selector to focus a specific element; overrides noFocus)
      //      customSize : object, manually set the top, left, right, and bottom css properties
      //    customButton : string, add custom HTML to the button area
      //        keepOpen : bool, (keeps the modal open when clicking the callback button; useful for opening another modal afterwards)
      //         noClose : bool, (removes the close button)
      //          zIndex : 'low', lowers the z-index so the exercise menu can be used
      //        callback : function (function to execute when the OK button is clicked)
      //   closeCallback : function (function to execute when the close button is clicked)
      // } // all values are optional
      open : function (o) {
        o = o ? o : {};

        Arona.modal.close();

        // create the modal and set its params
        var modal = document.createElement('DIV'), button, buttons;
        modal.id = 'cunny-modal';
        modal.innerHTML = 
        '<div id="cunny-modal-overlay"' + ( o.zIndex == 'low' ? ' style="z-index:1;"' : '' ) + '></div>'+
        '<div id="cunny-modal-body" style="' + ( o.zIndex == 'low' ? 'z-index:2;' : '' ) + ( o.customSize ? 'top:' + o.customSize.top + ';right:' + o.customSize.right + ';bottom:' + o.customSize.bottom + ';left:' + o.customSize.left + ';' : '' ) + '">'+
          '<h2 id="cunny-modal-header"><span id="cunny-modal-header-text">' + ( o.title ? o.title : 'Popup' ) + '</span></h2>'+
          '<div id="cunny-modal-content">' + ( o.content ? o.content : '' ) + '</div>'+
          '<div id="cunny-modal-buttons" class="center">'+
            (o.customButton ? o.customButton : '') +
            (o.noClose ? '' : '<button id="cunny-modal-close" class="button" onclick="Arona.modal.close();"><i>' + (o.closeButtonText ? o.closeButtonText : 'Close') + '</i></button>')+
          '</div>'+
        '</div>';

        // create a button for the callback function
        if (o.callback) {
          button = document.createElement('BUTTON');
          buttons = modal.querySelector('#cunny-modal-buttons');

          // set button params
          button.innerText = o.buttonText ? o.buttonText : 'OK';
          button.id = 'cunny-modal-ok';
          button.className = 'button';
          button.onclick = function () {
            o.callback();
            !o.keepOpen && Arona.modal.close();
          };

          // insert button into buttons list
          buttons.insertBefore(button, buttons.firstChild);
        }

        // add the modal to the document
        document.body.style.overflow = 'hidden';
        document.body.appendChild(modal);

        // focus confirm/ok button
        if (o.focus) {
          document.querySelector(o.focus).focus();

        } else if (!o.noFocus) {
          document.getElementById('cunny-modal-' + (o.callback ? 'ok' : 'close')).focus();
        }

        // apply close button callback
        if (o.closeCallback) {
          document.getElementById('cunny-modal-close').onclick = function () {
            o.closeCallback();
            !o.keepOpen && Arona.modal.close();
          };
        }

        // pause the timer when opening the modal
        if (window.Genki && Genki.timer && Genki.timer.isRunning()) {
          Genki.pauseTimerWhenOpenPopup();
        }

        return o;
      },

      // close the modal
      close : function () {
        var modal = document.getElementById('cunny-modal');

        if (modal) {
          document.body.style.overflow = '';
          document.body.removeChild(modal);
        }

        // resume the timer when closing the modal
        if (window.Genki && Genki.timer && Genki.timer.isPaused()) {
          Genki.startTimerWhenClosePopup();
        }
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
      
      // auto encode/decode
      if (Arona.settings.auto_translate) {
        Arona.delay(function () {
          Arona.determineMode(Arona.node.input.value, Arona.node.input);
        });
        
        // stop last message from sending if no value
        if (!Arona.node.input.value) Arona.delay();
      }
    };
    
    // disables enter key's normal behavior unless SHIFT is held down
    Arona.node.input.onkeydown = function (e) {
      if (/enter/i.test(e.key) && !e.shiftKey) e.preventDefault();
    };

    // auto encode or decode when pressing the enter button on the input or password field
    for (var node = ['input', 'password'], i = 0, j = node.length; i < j; i++) {
      Arona.node[node[i]].onkeyup = function (e) {
        if (e.shiftKey) return false; // don't encode if holding shift; this indicates a line break

        if (/enter/i.test(e.key)) {
          Arona.determineMode(Arona.node.input.value, this);
        }
      };
    }
    
    // copy output if enter is pressed on the output field
    Arona.node.output.onkeyup = function (e) {
      if (/enter/i.test(e.key)) {
        this.select();
        Arona.copyText(this.value);
      }
    }
  }

  
  if (Arona.node.password) {
    // updates password and saves it if enabled
    Arona.node.password.oninput = function () {
      Arona.password.key = this.value;

      // auto encode/decode if preferred
      if (Arona.settings.auto_translate && Arona.node.input.value) {
        Arona.delay(function () {
          Arona.determineMode(Arona.node.input.value, Arona.node.password);
        });
      }

      // save the password
      if (Arona.settings.save_password && storageOK) {
        localStorage.cc_password_key = this.value;
      }
    };
    
    // applies the saved password
    if (Arona.settings.save_password && storageOK) {
      Arona.node.password.value = Arona.password.key;
    }
  }
  
  
  // toggles password state depending on preferences
  if (Arona.settings.keep_password_state && Arona.node.enable_password) {
    Arona.node.enable_password.checked = Arona.password.on;
  }
  
  // event listeners for when dragging Arona
  Arona.node.halo.onmousedown = function (e) {
    Arona.pickUp(e);
  };
  
  Arona.node.halo.ontouchstart = function (e) {
    Arona.pickUp(e);
  };
  
  document.onmousemove = Arona.drag;
  document.ontouchmove = Arona.drag;
  document.onmouseup = Arona.putDown;
  document.ontouchend = Arona.putDown;
  
}(window, document));
