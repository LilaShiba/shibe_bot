'use strict'
const fetch = require("node-fetch")
// For Node.JS, you need to import the fs (file system) module
const { createReadStream } = require('fs');

// HUBOT_SLACK_TOKEN=xoxb-1036007048677-1094668266853-zdP4TOz4dbLSJ4K7YmRsUc15 ./bin/hubot --adapter slack
// Description:
//   Example scripts for you to examine and try out.
//
// Notes:
//   They are commented out by default, because most of them are pretty silly and
//   wouldn't be useful and amusing enough for day to day huboting.
//   Uncomment the ones you want to try and experiment with.
//
//   These are from the scripting documentation: https://github.com/github/hubot/blob/master/docs/scripting.md

module.exports = (bot) => {
// let dogPhoto = require('path').join(__dirname,'/imgs/dog.jpg');
// // upload image
// bot.respond(/dog/, (res) => {

//   let opts={
//     content: dogPhoto,
//     title: 'A Doggo',
//     channels: res.message.room,
//     file: createReadStream(dogPhoto)
//   }

//   bot.adapter.client.web.files.upload('woof', opts)
// } )

// pascal
  bot.respond(/pascal (.*)/, function(msg){
    let num = msg.match[1]
    let ans = p(num)
    msg.reply(ans)
      // pascal stuff 
    function p(n){
      let tri = [[1], [1,1]]
      for(let j = 2; j < n; j++){
          let prev = tri[tri.length-1];
          let newRow = [1]
          for(let i = 0 ; i < prev.length-1; i++){
              let current = prev[i];
              let next = prev[i+1]
              newRow.push(current+next)
          }
          newRow.push(1)
          tri.push(newRow)
      }

      return tri[n-1]
    }  
});

// Hello
  bot.hear(/Hello!/, function(res) {
    res.send('Meowowow')
    return res.send("Bark!");
    });

  
// neo api
  bot.hear(/Are we doomed/, function(res){
      const current_date = new Date().toISOString().slice(0,10);
      const api_key = process.env.API_KEY
      console.log(api_key)
      const url = "https://api.nasa.gov/neo/rest/v1/feed?start_date="+current_date+"&end_date="+current_date+"&api_key=DEMO_KEY"
      fetch(url).then(resp => resp.json()).then(resp =>{
        const v = resp.near_earth_objects[current_date][0]
        return res.send("Hmmm, there are only " +resp.element_count+ " near earth asteroids today. My favorite is called " +v.name+ ", which is about: " +v.estimated_diameter.miles.estimated_diameter_max+ " miles in diameter. Don't worry! The miss distance is " + v.close_approach_data[0].miss_distance.miles+" miles, or was it inches away?")
        }).catch(err => console.log(err))
    });
  
    // youtube video
    bot.hear(/What is a shiba/, (res) => {
      res.send('https://www.youtube.com/watch?v=tLWcMrDTny8&t=102s')
      res.send("You're Welcome!")
    })

    bot.hear(/food/, (res) => {
      return res.send('yum')
    })
  
    // gif
    bot.hear(/selfie/, (res) => {
      return res.send('https://media.giphy.com/media/shiU2BLT0g5RS/giphy.gif')
    })
  
    // link to app
    bot.hear(/where is iss/, (res) => {
      res.send('Here is a live tracker app')
      res.send('https://bit.ly/estelle-space')
      return res.send('Check it out!')
    })
  
    // tofu chan!
    bot.hear(/tofu chan!/, (res) => {
      res.send('My hero!')
      return res.send('https://www.youtube.com/watch?v=32lUnBsTFzU')
    })

    bot.hear(/exit ticket/, (res) =>{
      res.send('Here ya go and thanks!')
      return res.send('https://forms.gle/BKPdkDdjVTQ9JCML9')
    })

    bot.hear(/class repo/, (res) =>{
      res.send('Okie')
      return res.send('https://git.generalassemb.ly/kjams/JSR_4_2020')
    })
  // robot.hear(/badger/i, (res) => {
  //   res.send('Badgers? BADGERS? WE DON’T NEED NO STINKIN BADGERS')
  // })
  //
  // robot.respond(/open the (.*) doors/i, (res) => {
  //   const doorType = res.match[1]
  //
  //   if (doorType === 'pod bay') {
  //     res.reply('I’m afraid I can’t let you do that.')
  //     return
  //   }
  //
  //   res.reply('Opening #{doorType} doors')
  // })
  //
  // robot.hear(/I like pie/i, (res) => {
  //   res.emote('makes a freshly baked pie')
  // })
  //
  // const lulz = ['lol', 'rofl', 'lmao']
  //
  // robot.respond(`/${lulz.join('|')}/i`, (res) => {
  //   res.send(res.random(lulz))
  // })
  //
  // robot.topic((res) => {
  //   res.send(`${res.message.text}? That’s a Paddlin`)
  // })
  //
  // const enterReplies = ['Hi', 'Target Acquired', 'Firing', 'Hello friend.', 'Gotcha', 'I see you']
  // const leaveReplies = ['Are you still there?', 'Target lost', 'Searching']
  //
  // robot.enter((res) => {
  //   res.send(res.random(enterReplies))
  // })
  // robot.leave((res) => {
  //   res.send(res.random(leaveReplies))
  // })
  //
  // const answer = process.env.HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING
  //
  // robot.respond(/what is the answer to the ultimate question of life/, (res) => {
  //   if (answer) {
  //     res.send(`${answer}, but what is the question?`)
  //     return
  //   }
  //
  //   res.send('Missing HUBOT_ANSWER_TO_THE_ULTIMATE_QUESTION_OF_LIFE_THE_UNIVERSE_AND_EVERYTHING in environment: please set and try again')
  // })
  //
  // robot.respond(/you are a little slow/, (res) => {
  //   setTimeout(() => res.send('Who you calling "slow"?'), 60 * 1000)
  // })
  //
  // let annoyIntervalId = null
  //
  // robot.respond(/annoy me/, (res) => {
  //   if (annoyIntervalId) {
  //     res.send('AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH')
  //     return
  //   }
  //
  //   res.send('Hey, want to hear the most annoying sound in the world?')
  //   annoyIntervalId = setInterval(() => res.send('AAAAAAAAAAAEEEEEEEEEEEEEEEEEEEEEEEEIIIIIIIIHHHHHHHHHH'), 1000)
  // })
  //
  // robot.respond(/unannoy me/, (res) => {
  //   if (!annoyIntervalId) {
  //     res.send('Not annoying you right now, am I?')
  //     return
  //   }
  //
  //   res.send('OKAY, OKAY, OKAY!')
  //   clearInterval(annoyIntervalId)
  //   annoyIntervalId = null
  // })
  //
  //
  // robot.router.post('/hubot/chatsecrets/:room', (req, res) => {
  //   const room = req.params.room
  //   const data = JSON.parse(req.body.payload)
  //   const secret = data.secret
  //
  //   robot.messageRoom(room, `I have a secret: ${secret}`)
  //
  //   res.send('OK')
  // })
  //
  // robot.error((error, response) => {
  //   const message = `DOES NOT COMPUTE: ${error.toString()}`
  //   robot.logger.error(message)
  //
  //   if (response) {
  //     response.reply(message)
  //   }
  // })
  //
  // robot.respond(/have a soda/i, (response) => {
  //   // Get number of sodas had (coerced to a number).
  //   const sodasHad = +robot.brain.get('totalSodas') || 0
  //
  //   if (sodasHad > 4) {
  //     response.reply('I’m too fizzy…')
  //     return
  //   }
  //
  //   response.reply('Sure!')
  //   robot.brain.set('totalSodas', sodasHad + 1)
  // })
  //
  // robot.respond(/sleep it off/i, (res) => {
  //   robot.brain.set('totalSodas', 0)
  //   res.reply('zzzzz')
  // })
}
