// Edit article metadata and the ordered paragraphs/headings below.
// The Prattic article is reproduced from the supplied draft with editorial annotations removed.
// Images: add files to public/assets/ and use /assets/filename.jpg.
// Alternatively import an image from src/assets/ and use it as src for automatic optimization.
import activity from '../assets/activity.jpg';
import pacing from '../assets/pacing.jpg';
import handup from '../assets/handup.jpg';



export const story = {
  title:
    "Affording Northwestern: How an international student lives on $1000 a month in Evanston",
  kicker: "In Focus",
  dek: "How an international exchange student spends $1,000 a month",
  authors: [
    {
      name: "Jack Greenspan",
      url: "https://dailynorthwestern.com/staff_name/jack-greenspan/",
    },
    { name: "Allegra Lief",
      url: "https://dailynorthwestern.com/staff_name/allegra-lief/",
    }
  ],
  date: "2026-11-17",
  readTime: "6 minute read",
  // Optional warning; leave empty to omit it.
  
    contentWarning: "",
  sample: false,
  contactEmails: ["j.greenspan@dailynorthwestern.com", "allegralief2029@u.northwestern.edu"],
  // URL PLACEHOLDERS: Replace each "#related-stories-heading" with the real
  // article URL. Until then, these links stay at the Related Stories heading.
  relatedStories: [
    {
      title:
        "By the Numbers: Rent in Evanston is rising, mainly near Northwestern",
      url: "https://dailynorthwestern.com/2026/11/11/data-visualization/by-the-numbers-rent-in-evanston-is-rising-mainly-near-northwestern/", // TODO: Add this story's URL.
    },
    {
      title: "Tips for finding off-campus housing in Evanston",
      url: "https://dailynorthwestern.com/2024/10/21/campus/take-your-time-upperclassman-provide-tips-on-finding-off-campus-housing/", // TODO: Add this story's URL.
    },
    {
      title:
        "Northwestern students grapple with dining, social life in off-campus housing",
      url: "https://dailynorthwestern.com/2022/10/27/campus/northwestern-students-grapple-with-dining-social-life-in-off-campus-housing/", // TODO: Add this story's URL.
    },
  ],

  hero: {
    video: "/assets/train-hero.mp4",
    showDek: false,
  },
  // Swap the second visual here. Hero media lives in hero.video above.
  intro: {
    scrollMedia: { type: "video", src: "/assets/Pacing.mp4" },
  },
  credits: [
    { role: "Editor in Chief", name: "Anavi Prakash" },
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
    text: "Months before Emir Karabag traveled from Reims, France, to Chicago to begin his full-year exchange program at Northwestern, he found himself navigating a challenge familiar to many upperclassmen: finding affordable off-campus housing.",
    },
    {
    type: "paragraph",
    text: "Karabag told himself he would spend no more than $1,000 on monthly rent while he was in Evanston. Through a Facebook group, Karabag found a potential roommate offering up a bedroom in his Evanston apartment. The rent was about $800.",
    },
    {
      type: "immersive",
      label: "Karabag story",
      scrollMedia: { type: "image", src: "/assets/karabag.jpg" },
      paragraphs: [
        { text: "After Karabag verbally — but not contractually — agreed to move in, a different renter he had messaged two weeks prior reached out over WhatsApp with a revised offer that Karabag said came “out of nowhere." },
        { text: "The tenant had dropped the price of his spare bedroom from $1,000 to $500 a month, with a $50 fee for utilities. " },
        { text: "“I was a bit suspicious,” Karabag said. “It’s less than what I used to pay in a small French town. So it’s really something I thought must be horrible.”" },
      ],
    },
    {
    type: "paragraph",
    text: "Nevertheless, he took the $500-a-month bedroom, located in a house just steps away from the Chicago Transit Authority’s Foster station. When he moved in, he learned that his seven roommates were members of fraternity Lambda Chi Alpha, which, as of September 2026, was no longer officially recognized by the University.",
    },
    {
    type: "paragraph",
    text: "Unfamiliar with Greek life in the U.S., Karabag soon discovered that house parties for the entire student body and noisy nights would be a regular part of his housing experience.",
    },
    {
      type: "immersive",
      label: "Karabag story",
      scrollMedia: { type: "image", src: "/assets/foodsplay.jpg" },
      paragraphs: [
        { text: "Karabag said he’s been unsatisfied with the cleanliness of the house and its boisterous environment at times. Even so, he gives credit to his roommates for changing their behaviors when asked, he said." }, 
        { text: "“I personally am not at all a Greek life type, but it’s an interesting culture shock,” he said. “I think it will be an experience that I will look back and say, ‘Wow, this was f–king crazy.’”", media: { type: "image", src: "/assets/couch.jpg" } },
      ],
    },
    {
      type: "heading",
      text: "From Reims to Evanston",
      id: "from-reims-to-evanston",
    },
    {
    type: "paragraph",
    text: "Karabag attends Sciences Po in Reims, France, a “grande école”  — or top-level French university — centered on the social sciences. He studied economics and sociology at Sciences Po, and is set to graduate in the spring, following his year abroad at Northwestern.",
    },
    {
    type: "paragraph",
    text: "At Sciences Po, undergraduate students must either complete a required study abroad program or an internship during their third and final year. The university partners with 445 institutions around the world, allowing students to select a destination that aligns with their academic interests.",
    },
    {
    type: "paragraph",
    text: "Karabag said he’s considering pursuing a master’s degree in public policy once he graduates. He acknowledged that finding a job upon graduation with his sociology degree may prove difficult. Despite this, Karabag said he feels passionate about his chosen field of study.",
    },
    {
    type: "paragraph",
    text: "“Humans are interesting, and psychology feels too individual,” he said. “I wasn’t that interested in individuals. I really wanted to know more about social phenomena.”",
    },
    {
      type: "heading",
      text: "Rising rent",
      id: "rising-rent",
    },
    {
    type: "paragraph",
    text: "Karabag said he doesn’t view the money he saves on rent as extra money to spend. Rather, he said he aims to make his cost of living as low as possible.",
    },
    {
    type: "paragraph",
    text: "According to an [analysis conducted by The Daily](https://dailynorthwestern.com/2026/11/11/data-visualization/by-the-numbers-rent-in-evanston-is-rising-mainly-near-northwestern/), average rent in northern Evanston increased by nearly $1,000 from 2018 to 2026, up to $2,850.",
    },
    {
    type: "paragraph",
    text: "Despite this, Karabag’s monthly expenses sit at just about $1,000. Not all students can say the same.",
    },
    {
    type: "paragraph",
    text: "Bienen junior Brandon Garcia, who lives off campus, currently shares an apartment with three of his friends. He said that while living with a group of roommates, housing costs in Evanston are “very fair.”",
    },
    {
    type: "paragraph",
    text: "This year, while looking for a one-bedroom apartment for next school year, he realized how much higher the costs can be. He looked for apartments in south Evanston further away from campus because they were the only options below $1,600 a month, he said.",
    },
    {
    type: "paragraph",
    text: "But, unlike Karabag, Garcia said that a good deal on rent wouldn’t be worth it if it meant a lack of comfort.",
    },
    {
    type: "paragraph",
    text: "“I don’t feel like I would be comfortable living in a house or apartment with that many people I don’t know,” he said. “Having to share a bathroom and share chores and responsibilities and stuff with a bunch of people you have no idea how they live or what their lifestyle is, I think that would be weird.”",
    },
    {
    type: "paragraph",
    text: "Communication junior Emily Yao, said that in her search for housing, she’s found that one-bedroom and studio apartments range from $1,800 to $2,500 monthly.",
    },
    {
    type: "paragraph",
    text: "She called the rent prices for apartments near campus “insane” and “outrageous.”",
    },
    {
    type: "paragraph",
    text: "“Because we go to Northwestern and because the tuition is so expensive, and because we can pay for the tuition, (landlords think) we should be able to pay for housing,” she said. “But I don’t think that’s how it works.”",
    },
    {
    type: "paragraph",
    text: "Yao said for her, the main reason for moving off campus was to avoid having to deal with crowded bathrooms and noisy neighbors.",
    },
    {
    type: "paragraph",
    text: "For Karabag, though, finding cheap rent was the priority, even if it meant having seven roommates.",
    },
    {
    type: "paragraph",
    text: "“Even back home, I’m a bit of a cheapskate at the core,” he said. “I mean, you have to be one to have a $500 accommodation.”",
    },
    {
      type: "heading",
      text: "Discovering Chicago",
      id: "discovering-chicago",
    },
    {
  type: "paragraph",
  text: "When Karabag arrived at Northwestern for his year abroad, it was his first time setting foot in the U.S. His first impressions of Evanston were mixed. He described it as being “cute and nice” but also “really boring.” But once he began to explore Chicago, he said he was in awe of its vibrant atmosphere, especially its architecture.",
    },
    {
      type: "immersive",
      label: "Karabag story",
      scrollMedia: { type: "image", src: "/assets/platform.jpg" },
      paragraphs: [
        { text: "In October, he participated in the Chicago Architecture Center’s Open House, a free two-day event that opened up 200 architectural sites throughout the city to the public." }, 
        { text: "Through the Open House event and his own adventuring, he’s spent time in several Chicago neighborhoods. So far, he said his favorites are Hyde Park, Pilsen, and the Halsted Street area near the University of Illinois Chicago." },
        { text: "“Students here don’t really go out to Chicago as often as I think they should,” he said. ", media: { type: "image", src: "/assets/cardtap.jpg" } },
        { text: "Karabag relies almost exclusively on the CTA to explore the city. Unlike many other schools in the Chicago area, Northwestern doesn’t provide students a university pass. He estimated that his train fares add up to about $15 a week, or $60 a month."  },
      ],
    },
    {
      type: "paragraph",
      text: `He said he came to Chicago expecting students to be somewhat dependent on cars, but was surprised at how “excellent” the public transportation system is.`,
    },
    {
      type: "heading",
      text: "Cheap thrills",
      id: "cheap-thrills",
    },
    {
      type: "paragraph",
      text: `The CTA is also how Karabag gets to his rock-climbing gym in Uptown, which costs him $85 a month for membership. He said he tries to go two or three times a week. `,
    },
    {
      type: "immersive",
      label: "Rock climbing",
      scrollMedia: { type: "video", src: "/assets/fencing.mp4" },
      paragraphs: [
        { text: "In addition to his rock climbing membership, Karabag is also a part of the NU Fencing Club, which he discovered at the Organizations Fair at Norris University Center earlier this quarter." },
        { text: "“Apparently the courses are free, and I don’t need to buy equipment, so I said, ‘Why not? It looks very cool,’” he said." },
      ],
    },
    {
      type: "immersive",
      label: "Fencing club",
      scrollMedia: { type: "image", src: "/assets/fencing-gear.jpg" },
      paragraphs: [
        { text: "Practices take place at the Patten Gymnasium on Mondays, Wednesdays and Thursdays from 5 to 6 p.m., though Karabag only attends on Mondays in order to make time for rock climbing each week." },
      ],
    },
    {
    type: "paragraph",
    text: "Karabag said he saves big on social costs, too. He admitted that he rarely goes out to bars or social gatherings, largely because he said the costs can “add up really, really fast.”",
    },
    {
    type: "paragraph",
    text: "He also attributed his initial difficulty making friends with other students on campus to this.",
    },
    {
    type: "paragraph",
    text: "“There’s a stereotype that Americans are very friendly, you’ll make friends with them very easily. But that has been the exact opposite of my experience,” he said.",
    },
    {
      type: "heading",
      text: "Food and fees",
      id: "food-and-fees",
    },
    {
    type: "paragraph",
    text: "Karabag typically goes to the grocery store on Mondays or Wednesdays to stock up on food for the week. He said his bill typically comes out to around $60, or $240 a month.",
    },
    {
      type: "immersive",
      label: "Karabag story",
      scrollMedia: { type: "image", src: "/assets/fridge.jpg" },
      paragraphs: [
        { text: "Once or twice a week, he’ll order from a restaurant — usually an inexpensive one, he said. In a month, he spends about $80 on restaurants. When he does order out, he said the large portion sizes in the U.S can be portioned into two or three meals for the week." }, 
      ],
    },
    {
    type: "paragraph",
    text: "The Too Good To Go app has also helped Karabag save money on food. The service partners with local restaurants and grocery stores to sell “surprise bags” filled with surplus food that would otherwise be thrown away. Karabag said he uses the service once or twice a week.",
    },
    {
    type: "paragraph",
    text: "In general, Karabag said he estimates that the cost of items in the U.S. are 30-50% more than in France. Factoring in taxes and tips to the cost of purchases has also been an adjustment, he said.",
    },
    {
    type: "paragraph",
    text: `<span class="soundcite" data-url="https://github.com/dailynorthwestern/affording-nu-audios/raw/refs/heads/main/Emir%20Karabag_Tipping.mp3" data-start="0" data-end="17000" data-plays="1"> “I wish it was the establishments themselves that paid the minimum wage, and tipping was a genuine show of good service and completely optional, like in Europe,” Karabag said.</span>`,
    },
    {
    type: "paragraph",
    text: "Even with the high costs of groceries and entertainment, Karabag said that a month in the U.S. isn’t that much more expensive than in France for him.",
    }, 
    {
    type: "paragraph",
    text: "He added that his slim budget “wouldn’t be possible anywhere else,” given that Chicago has so many free opportunities for sightseeing and people-watching.",
    },
    {
    type: "paragraph",
    text: "“I think Chicago is an extremely good place,” he said. “Parks are free. Looking at the lake is free, until some private equity company buys it and sells it to us.”",
    },
    /*
    {
      type: "image",
      src: activity,
      alt: "People gathered around a table with orange cups and pumpkin buckets at Northwestern.",
      width: activity.width,
      height: activity.height,
      layout: "full",
      sizes: "100vw",
      caption: "Jolt Show host Joe Spivak and producer Grant Penrod tested a pregame student activity in the Ryan Field concourse. (Audrey Pachuta/The Daily Northwestern)",
      credit: "Photo credit: Audrey Pachuta/The Daily Northwestern",
      creditUrl: "https://dailynorthwestern.com/staff_name/audrey-pachuta/", // Optional photographer profile URL.
    },
    */
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
    {
      type: "image",
      src: pacing,
      alt: "Spivak paced the field in front of cheering students.",
      width: activity.width,
      height: activity.height,
      layout: "full",
      sizes: "100vw",
      caption: "During the game against Rutgers, Spivak paced the field in front of the Wildcat Wall as students cheered. (Audrey Pachuta/The Daily Northwestern)",
      credit: "Photo credit: Audrey Pachuta/The Daily Northwestern",
      creditUrl: "https://dailynorthwestern.com/staff_name/audrey-pachuta/", // Optional photographer profile URL.
    },
    */
    
  ],
};
