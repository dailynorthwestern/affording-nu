// Edit article metadata and the ordered paragraphs/headings below.
// The Prattic article is reproduced from the supplied draft with editorial annotations removed.
// Images: add files to public/assets/ and use /assets/filename.jpg.
// Alternatively import an image from src/assets/ and use it as src for automatic optimization.
import activity from '../assets/activity.jpg';
import pacing from '../assets/pacing.jpg';
import handup from '../assets/handup.jpg';


export const story = {
  title:
    "Crowned king of the Wildcat Wall, Joe Spivak wants more for NU’s student section",
  kicker: "In Focus",
  dek: "Meet Joe Spivak, the man leading the Wildcat Wall.",
  authors: [
    {
      name: " Audrey Pachuta, Senior Staffer",
      url: "https://dailynorthwestern.com/staff_name/audrey-pachuta/",
    },
  ],
  date: "2026-11-02",
  readTime: "6 minute read",
  // Optional warning; leave empty to omit it.
  
    contentWarning: "",
  sample: false,
  contactEmails: ["AudreyPachuta2027@u.northwestern.edu"],
  // URL PLACEHOLDERS: Replace each "#related-stories-heading" with the real
  // article URL. Until then, these links stay at the Related Stories heading.
  relatedStories: [
    {
      title:
        "Rapid Recap: Oregon 34, No. 20 Northwestern 26",
      url: "https://dailynorthwestern.com/2026/10/31/sports/rapid-recap-oregon-34-no-20-northwestern-26/", // TODO: Add this story's URL.
    },
    {
      title: "Gallery: Northwestern defeats Rutgers 42-14",
      url: "https://dailynorthwestern.com/2026/10/26/photo/gallery-northwestern-defeats-rutgers-42-14/", // TODO: Add this story's URL.
    },
    {
      title:
        "Ryan Field set to open after multi-year, $875 million development",
      url: "https://dailynorthwestern.com/2026/09/29/sports/ryan-field-set-to-open-after-multi-year-875-million-development/", // TODO: Add this story's URL.
    },
  ],

  hero: {
    video: "/assets/newhero.mp4",
    showDek: false,
  },
  // Swap the second visual here. Hero media lives in hero.video above.
  intro: {
    scrollMedia: { type: "video", src: "/assets/Pacing.mp4" },
  },
  credits: [
    { role: "Editor in Chief", name: "Anavi Prakash" },
    { role: "Web Developer", name: "Eunice Lee" },
    { role: "Assistant Web Developer", name: "Nicole Cheah" },
    { role: "Multimedia Features Editor", name: "Jack Greenspan" },
  ],
  //illustrations: [
    //{ image: beercans_left, side: "left" },
    //{ image: beercans, side: "right" },
  // ],
  // The three opening scroll steps, shown once before the normal article.
  introParagraphs: [
    {
      type: "paragraph",
      text: "Ninety minutes before any fan could enter the stadium and three hours before Northwestern kicked off its Oct. 24 game against Rutgers, former defensive lineman Joe Spivak (Communication ’21, Kellogg ’22) paced back and forth in a row of the empty Wildcat Wall.", 
    },
    {
      type: "paragraph",
      text: "Sporting a small man bun, a black polo and white high-top sneakers, the 27-year-old in-stadium emcee wasn’t wearing his game-day garb quite yet. But in that quiet moment, with his eyes transfixed on the vacant gridiron and his hand waving a folded sheet of paper back and forth, he immersed himself in his own personal dress rehearsal.",
    },
    {
      type: "paragraph",
      text: "“I’m not the spark of energy,” he said to himself with a dramatic raspiness to his voice. “You are; the students are.” ",
    },
  ],
  blocks: [
    {
      type: "paragraph",
      text: "That morning, Spivak had arrived at Ryan Field before 8 a.m. with a Colectivo cortado and iced coffee in hand. During the week, he said, he doesn’t drink much caffeine. He wants to feel its effects as much as possible in the moments he needs it most — especially on game day.",
    },
    {
      type: "paragraph",
      text: "For the past year, ever since Pat Ryan Jr. — the son of Ryan Field’s benefactors and CEO of Ryan Sports Development — reached out via LinkedIn, the former football captain-turned-WWE wrestler has spent his days contemplating one question: What would it take to turn a student section long scoffed at as empty and subdued into one capable of creating a true home field advantage?",
    },
    {
      type: "paragraph",
      text: "As the man tasked with keeping NU’s Wildcat Wall rowdy from the first chord of ACDC’s “Thunderstruck” to the moment the game clock winds down to zero, it’s his job to seek out an answer.",
    },
    {
      type: "audioCard",
      id: "marko-audio",
      description: `McCormick sophomore Marko Maruszewski speaks on the Jolt Show’s impact on the Ryan Field in-game experience.`,
      audioSrc: "/assets/Marko.mp3",
      speaker: "Marko",
      audioLabel: "Listen to Marko",
      transcript: `Man. Joe brings the energy. I was hanging out with him yesterday on the purple couch in front of Tech. He's just the man. He's always bringing the energy and the spirit. We really need it to get us started in the mornings at Northwestern, and it's always a good time to see him promoting the Northwestern events.
                  \n I've been in the front row of the Wildcat Wall. I've been on the field on the purple couch, and now I'm gonna go try to get back on the Wildcat Wall again. Honestly, I prefer it a little bit. It's more energy. More in the zone. Yeah, it's been amazing. It's been incredible. It's been intimidating for the opponents, and I've loved it.`, // Replace with the clip’s verbatim transcript.
    },
    {
      type: "heading",
      text: "‘Built for you’",
      id: "built-for-you",
    },
    {
    type: "paragraph",
    text: "During Spivak’s playing days, the program’s success fluctuated. He suited up for squads that amassed 10 wins and took down SEC teams in bowl games, while also enduring the hardships of two separate 3-9 teams in 2019 and 2021.",
    },
    {
    type: "paragraph",
    text: "And while he noticed the student section dwindle during those down years, he recognizes that even during a winning campaign like this season’s, the academic rigor of any NU quarter can make it difficult for students to attend each game.",
    },
    {
    type: "paragraph",
    text: "“Obviously when you’re at Alabama, everyone knows when there’s gonna be a home game,” he said. “But guess what: We’re not Alabama and we don’t want to be.”",
    },
    {
    type: "paragraph",
    text: "Spivak cherishes the idea that his alma mater produces well-rounded students — those who excel not only in athletics, but also in the classroom, on the stage and wherever else they may be.",
    },
    {
    type: "paragraph",
    text: "That’s a reality he embraced during his own college years. Aside from his impressive ascent from a non-scholarship football walk-on to a team captain, he pursued a theater minor and gained a reputation as a DJ, performing most memorably at house parties on Dillo Day.",
    },
  {
  type: "paragraph",
  text: "But regardless of how students choose to get involved during their years at NU, he wants them to know that there is a place for them on the Wildcat Wall — and a stadium full of ’Cats fans hoping they show up.",
  },
  {
  type: "paragraph",
  text: "“This is a truly rare breed of student that is on this campus, and Saturday games are such an opportunity to come together, relax and enjoy yourself at a place that is truly built for you,” Spivak said. “That 100 by 53 yards, that turf field, that’s for the football players. But the rest of that (about) $850 million stadium is built with the students in mind.”",
  },
    {
      type: "heading",
      text: "All systems go",
      id: "all-systems-go",
    },
    {
  type: "paragraph",
  text: "By 9:45 a.m. on the morning NU took on Rutgers, Spivak stood in front of a small stage in the plaza wedged between the “Purple Line” student section and Central Street. Directly in front of him, a small group of students had begun waiting in line for a chance to try their luck on a mechanical bull.",
    },
    {
  type: "paragraph",
  text: "To those watching The Jolt Show from their seats or observing its student competitions in the plaza, the hour-long pregame production might appear to run effortlessly.",
    },
    {
  type: "paragraph",
  text: "But behind the scenes, in the hours before showtime, conversations between Spivak and his producer Grant Penrod can grow intense. On this particular morning, their debate centered around a game modeled after beer pong — more specifically, how they could keep the game inclusive but also engaging to those watching on the big screen.",
    },
    {
      type: "image",
      src: activity,
      alt: "People gathered around a table with orange cups and pumpkin buckets at Northwestern.",
      width: activity.width,
      height: activity.height,
      layout: "full",
      sizes: "100vw",
      caption: "Jolt Show host Joe Spivak and producer Grant Penrod tested a pregame student activity in the Ryan Field concourse.",
      credit: "Photo credit: Audrey Pachuta/The Daily Northwestern",
      creditUrl: "https://dailynorthwestern.com/staff_name/audrey-pachuta/", // Optional photographer profile URL.
    },
    /*
    {
      type: "audioCard",
      id: "haikal-rozaidi-audio",
      description: `Rozaidi discovered The Prattic after coming to Northwestern from The Ohio State University. 

      “What The Prattic had... it was lightning in a bottle,” Rozaidi said.`,
      audioSrc: "/assets/Haikal_AudioEmbed_.mp3",
      speaker: "Haikal",
      audioLabel: "Listen to Haikal",
      transcript: `The stand-up scene at Ohio State was so good that when I got here I was like, “Dude, I gotta find something.” I tried the involvement fair, I tried looking around, but The Prattic isn’t an official thing. 

      It’s so like … it’s popular, but it’s also underground. Other venues are just actual performance venues, like comedy clubs or bars or performance stages. But The Prattic, I remember going in there, I was like, “It is actually just someone's house.” 

      It felt like a secret club, almost like, “Dude, my friend is doing The Prattic, do you want to, like, join us?” Like, you’re just whispering instead of telling everyone.

      They have full crowds every Monday, and the crowds are super supportive and super fun, and they’re not judgemental at all. It helps a lot of newer comics and first-timers to actually keep doing stand-up and not feel as intimidated as we probably thought it was before starting. It’s better than some shows I’ve been on in actual clubs. It’s such a hot room. So losing that room every Monday … it sucks, it’s devastating. I think people are gonna start making their own stuff from the remnants of The Prattic, but I just miss it, a lot. 

      I think what The Prattic had was like lightning in a bottle.`, // Replace with the clip’s verbatim transcript.
    },
    */
    {
  type: "paragraph",
  text: "“Every week it’s very much trial by fire, and we are trying to make something better,” Penrod said prior to the pong debacle. “And when we get to do that, it creates an even stronger bond.”",
  },
  {
  type: "paragraph",
  text: "Penrod, a lanky man in his early thirties with long, flowing hair and glasses, works full-time to meticulously plan and refine The Jolt. A former high school media arts teacher with a wide range of production experience, Penrod came aboard to assist with NU’s gameday experience through a connection he made doing freelance work with Barstool Sports.",
  },
  {
  type: "paragraph",
  text: "Continuing his work with WWE, where he has wrestled under the ring name “Tank Ledger” since 2022, Spivak resides in Orlando, Florida. He travels to Evanston for each home game, leaving many of the backstage responsibilities to his producer.",
  },
  {
  type: "paragraph",
  text: "Ahead of the Rutgers game, Penrod arrived in his office long before the sun rose and passed the time eating Munchkin donuts, reviewing schedules and coordinating with other production team members before Spivak arrived.",
  },
  {
  type: "paragraph",
  text: "Spivak, with his prominent tattoo sleeve and bold western outfit, may be the “celebrity” fans recognize on the jumbotron, but without Penrod’s effort, both men agree that The Jolt couldn’t function in the way it does.",
  },
  {
  type: "paragraph",
  text: "So far, they said, the response from students, coaches and other fans has been overwhelmingly positive.",
  },
  {
  type: "paragraph",
  text: "“I have some family coming in for parents’ weekend and any other year it would’ve been like, ‘Oh, maybe we’ll go to the game to pass the time,’” said Weinberg sophomore Christina L’Hommedieu, who participated in The Jolt’s pregame mechanical bull contest. “But this year, the priority is going to the game.”",
  },
  {
      type: "audioCard",
      id: "christina-audio",
      description: `Weinberg sophomore Christina L’Hommedieu said that attending games has become a priority since NU football moved to Ryan Field.`,
      audioSrc: "/assets/Christina.mp3",
      speaker: "Christina",
      audioLabel: "Listen to Christina",
      transcript: `Having a true student section experience that's like one of the best stadium experiences in the Big Ten is really important, and I think it makes the football games that much more exciting. And it's also just exciting that our team's really good this year. We're super competitive. I have some family coming in for parents weekend, and like any other year, it would have been like, oh, maybe we'll go to a game to pass the time. And this year it was like, no, the priority is going to the game. The priority is seeing the football team, seeing the new stadium, supporting the Wildcats. And I think it's just really fun because it drums up a lot of school spirit. It makes me really proud to go to Northwestern and like, it makes me proud to tell my friends and family, oh, I was at that football game. I saw them beat Penn State. I was in that student section and it's just super fun.`, // Replace with the clip’s verbatim transcript.
    },
    {
      type: "heading",
      text: "Made for this",
      id: "made-for-this",
    },
    {
  type: "paragraph",
  text: "To his family, friends and former teammates, Spivak’s role as the in-stadium host at Ryan Field comes as no surprise. In fact, they believe he was made for it.",
},
{
  type: "paragraph",
  text: "Troy Hudetz (Communication ’21, Kellogg ’22), a former NU linebacker who was Spivak’s teammate and roommate for five years, first met him through a mutual friend while they attended nearby high schools.",
},
{
  type: "paragraph",
  text: "Through two years in Bobb Hall, a summer in Jones Hall and three years living off campus, Hudetz said he got to know Spivak intimately — not just as a teammate who consistently brought energy to early morning practices, but also as a true friend who he could have “deep, real conversations about life with.”",
},
{
  type: "paragraph",
  text: "Hudetz remembers fondly the days during the pandemic, when the two would meet up at a hill between their Illinois hometowns of Darien and Naperville to run sprints and listen to music when the team couldn’t practice together.",
},
{
  type: "paragraph",
  text: "“He’s one of the best people I could pick to be representing the program,” Hudetz said of Spivak’s new role at Ryan Field.",
},
{
      type: "image",
      src: pacing,
      alt: "Spivak paced the field in front of cheering students.",
      width: activity.width,
      height: activity.height,
      layout: "full",
      sizes: "100vw",
      caption: "During the game against Rutgers, Spivak paced the field in front of the Wildcat Wall as students cheered.",
      credit: "Photo credit: Audrey Pachuta/The Daily Northwestern",
      creditUrl: "https://dailynorthwestern.com/staff_name/audrey-pachuta/", // Optional photographer profile URL.
    },
    {
  type: "paragraph",
  text: "Even though former NU linebacker Bryce Gallagher (SESP ’23) had his own biological brother playing beside him, he said he always viewed Spivak as a “big brother,” someone he could count on to hold him accountable and show him the ropes.",
},
{
  type: "paragraph",
  text: "On Thanksgiving, when Gallagher couldn’t return home to Massachusetts ahead of NU’s rivalry game against Illinois, he said Spivak invited him and his brother to celebrate the holiday with his family. Together, they would spend the day watching football and then a Christmas movie, which Gallagher called “some of the best memories (he) can think upon.”",
},
{
  type: "paragraph",
  text: "“The first time I met him and his parents, they just made you feel like one of their own,” Gallagher said.",
},
{
  type: "paragraph",
  text: "In addition to their willingness to open their home to his teammates on Thanksgiving, Spivak said his parents taught him a variety of lessons he carries with him today.",
},
{
  type: "paragraph",
  text: "Each day before he and his three older sisters left their childhood home, Spivak’s parents enforced something they called a “smile check,” a testament to their belief that a person’s smile is “the window that lets people see what’s inside.”",
},
{
  type: "paragraph",
  text: "Now that he’s grown up, that family tradition has followed Spivak to every corner of his career. Whenever he has a microphone in his hand at Ryan Field or in the WWE ring, he feels that he’s sharing his parents’ philosophy with everyone he encounters.",
},
{
  type: "paragraph",
  text: "“They always said, ‘Smiles spread, enthusiasm is infectious,’” Spivak said. “There’s no better display of that than the Wildcat Wall.”",
},
{
      type: "heading",
      text: "For the love of the game",
      id: "for-the-love-of-the-game",
    },

    {
      type: "paragraph",
      text: "Back at the Rutgers game, sometime between when the last ping-pong balls were tossed in the plaza and when the ’Cats commenced their first drive, Spivak migrated down to the field and took his place directly in front of the student section.",
    },
    {
      type: "image",
      src: handup,
      alt: "Spivak holding his hat and brushing his har back.",
      width: activity.width,
      height: activity.height,
      layout: "full",
      sizes: "100vw",
      caption: "Joe Spivak took a deep breath in between intense moments of keeping the student section energized.",
      credit: "Photo credit: Audrey Pachuta/The Daily Northwestern",
      creditUrl: "https://dailynorthwestern.com/staff_name/audrey-pachuta/", // Optional photographer profile URL.
    },
    {
  type: "paragraph",
  text: "There, he welcomed a group of five students who earned a highly coveted spot on The Jolt’s “Purple Couch,” a place where a handful of lucky winners can enjoy the rare opportunity to watch the game on the field, just a few feet beyond the endzone.",
},
{
  type: "paragraph",
  text: "At that point, his work was far from finished, but Spivak said he always takes a deep breath the moment a game begins. Thinking back to his own playing days, he said, there’s a moment when all the preparation settles in, and there’s nothing left to do but watch the fruits of your own labor.",
},
{
  type: "paragraph",
  text: "Spivak knows he has responsibilities to fulfill throughout the game, such as hosting short segments during commercial breaks where he invites students to complete challenges on the field.",
},
{
  type: "paragraph",
  text: "But for the most part, regardless of his job title or student section stardom, Spivak takes in an NU football game with the same raw excitement as the thousands of students standing behind him.",
},
{
  type: "paragraph",
  text: "“I think you’d be hard-pressed to find somebody who loves this school as much as I do,” he said.",
},
{
  type: "paragraph",
  text: "*Jack Greenspan contributed reporting.*",
},
  ],
};
