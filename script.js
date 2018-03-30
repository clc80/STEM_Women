$(document).ready(function() {

  //make a random number between 0 and 26 for the lady to appear
  var randomLady = Math.floor(Math.random() * ladies.results.length);
  newLady(randomLady);

  $(".btn2").click(function() {
    openNav();
  });
  $(".closebtn").click(function() {
    closeNav();
  });
  $('#btn2').click(function() {
    randomLady = Math.floor(Math.random() * ladies.results.length);
    newLady(randomLady);
  });
  $("li").on('click', function() {
   var colorClass = this.className;
   console.log(colorClass);
});
    /*console.log($(this).text());
    for(var i = 0; i < (ladies.results.length); i += 1) {
        if(ladies["results"][i].name === $(this).value) {
            return i;
        }
    }
    return -1;
  });*/

  //SideNav list of all Women
  var lady = document.querySelector("ul");
  var ladyNameList = "";

  for (i = 0; i < (ladies.results.length); i++) {
    var ladyName = ladies["results"][i].name;

    ladyNameList += "<li class=\""+ i + "\">" + ladyName + " </li>";
  }
  lady.innerHTML = ladyNameList + "<br>";

  //assign the data in the page to the random lady
function newLady(num) {
    $('.name').html(ladies["results"][randomLady].name);
    console.log(randomLady + " and " + ladies["results"][randomLady].name);
    $(".headline").html(ladies["results"][randomLady].headline);
    $(".body").html(ladies["results"][randomLady].body);

    //Go to wikipedia page when 1st button is pushed
    $('.wikiBtn').on('click', function(event) {
      event.preventDefault();
      window.open(ladies["results"][randomLady]["moreInfo"][0], '_blank');
      console.log(randomLady + " and " + ladies["results"][randomLady]["moreInfo"][0]);
    });
    //Go to info when 2nd button is pressed
    $('.otherBtn').on('click', function(event) {
      event.preventDefault();
      window.open(ladies["results"][num]["moreInfo"][1], '_blank');
    });
  }

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
});


var ladies = {
  "results": [
    {
      "name": "Ada Lovelace",
      "image": "ada-lovelace.jpg",
      "headline": "A gifted mathematician, Ada Lovelace is considered to have written instructions for the first computer program in the mid-1800s.",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/ada-lovelace.jpg\"></center><br>Lovelace's immersion in both fields began with her parents: Romanticism's playboy poet Lord Byron and his \"Princess of the Parallelogram,\" a prim and proper product of the Industrial Revolution named Annabella Milbanke. As hinted by Lord Bryon arriving several days late to his own wedding, their marriage would not last. Although divorce was heavily stigmatized in England's Regency Era, Byron's incest with his half sister was even more taboo. Lovelace, then just four months old, would never know her father. <br><br>Fearing that her daughter might inherit Lord Byron's manic tendencies, Annabella imposed on Ada a strict diet of mathematics and science. Lovelace's tutors believed that,had she been a man,there would have been \"potential to become an original mathematical investigator, perhaps of first-rate eminence.\" Indeed, Ada's processing power was reportedly so great she suffered from headaches that impaired her vision.<br><br>Although many men of the time feared \"the very great tension of mind which [sophisticated mathematics] requires is beyond a woman's physical power,\" Lovelace viewed things differently, writing: \"Nothing but a very close and intense application to subjects of a scientific nature now seems at all to keep my imagination from running wild, or to stop the voice which seems to be left in my mind.\" <br><br>At 17, Lovelace became friends with inventor and father of the computer, Charles Babbage. Babbage was best known for designing the difference engine, a computer meant to perform mathematical calculations. He also designed its successor,the analytical engine which was supposed to carry out more complex calculations. <br><br>At 19, marriage led to three children in four years. At 26, encouraged by her husband, Lovelace returned to assisting her friend and mentor Charles Babbage. <br><br>Over time, Babbage became so impressed with Lovelace's analytical skills that he called her the \"Enchantress of Numbers.\" He later asked Lovelace to translate an article written by an Italian mathematician about the analytical engine from French to English. While translating the article, she added her own notes describing how to write code for the device to handle letters, symbols and numbers. <br><br>\"The Analytical Engine has no pretentions whatever to originate anything,\" she wrote in one of those footnotes. \"It can do whatever we know how to order it to perform. It can follow analysis; but it has no power of anticipating any analytical relations or truths. Its province is to assist us in making available what we are already acquainted with.\" <br><br>Thanks to those notes on the engine, Lovelace is now widely recognized as the first computer programmer. <br><br>Ada Lovelace is considered to be the founder of scientific computing and the first computer programmer. Her algorithm - which history has come to know as the first one designed for a machine to carry out. Lovelace would sadly not see built during her lifetime.<br><br>Lovelace passed away in 1852, but her previously little - known work and \"poetical\" approach to science has broken through to inspire present-day young women interested in computer programming. <br><br>Although she earned little public recognition during her lifetime, Ada Lovelace is now considered a pioneer and prophet of the computer age. In the first entry to his book Innovators, Walter Isaacson wrote: \"Like Steve Jobs, [Ada Lovelace] stands at the intersection of arts and technology.\" <br><br>Today, Lovelace's legacy lives on as the world's first computer programmer. Her work with Babbage and her mathematical mind not only gave us the first language of code, but also the method of looping, which is a series of instructions that continually repeats until a certain condition is reached. The looping process is still in use by programmers today.",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Ada_Lovelace", "http://www.history.com/news/10-things-you-may-not-know-about-ada-lovelace"]
    }, {
      "name": "Ana Roque de Duprey",
      "image": "anadupreyphoto_square.jpg",
      "headline": "First Puerto Rican woman to become member of the Public Library",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/anadupreyphoto_square.jpg\"></center><br>Ana Roqué de Duprey was born in Puerto Rico in 1853. She started a school in her home at age 13 and wrote a geography textbook for her students, which was later adopted by the Department of Education of Puerto Rico. <br><br>Roqué had a passion for astronomy and education, founding several girls-only schools as well as the College of Mayagüez, which later became the Mayagüez Campus of the University of Puerto Rico. Roqué wrote the Botany of the Antilles, the most comprehensive study of flora in the Caribbean at the beginning of the 20th century, and was also instrumental in the fight for the Puerto Rican woman's right to vote.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Ana_Roque_de_Duprey", "http://www.latinorebels.com/2015/09/21/the-feminist-flower/"]
    }, {
      "name": "Barbara McClintock",
      "image": "barbara-mcclintock.jpg",
      "headline": "Won the Nobel Prize for Physiology or Medicine in 1983",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/barbara-mcclintock.jpg\"></center><br>Barbara McClintock was an American geneticist and is still considered to be one of the world’s most prestigious cytogeneticists. <br><br>In 1983, McClintock won the Nobel Prize in Physiology for her discovery of the \"jumping gene\" or the ability of genes to change position on the chromosome. McClintock passed away in 1992, but her publications still influence geneticists across the world.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Barbara_McClintock", "https://www.britannica.com/biography/Barbara-McClintock"]
    }, {
      "name": "Calutron Girls",
      "image": "doe_calutronpic_square.jpg",
      "headline": "a group of young women who joined the World War II efforts in Oak Ridge, Tennessee in 1945",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/doe_calutronpic_square.jpg\"></center><br>Isolating enriched uranium was one of the most difficult aspects of the Manhattan Project, which produced the first nuclear bombs during World War II.<br><br> Wartime labor shortages led the Tennessee Eastman Company to recruit young women, who were mostly recent high school graduates, to operate the calutrons that used electromagnetic separation to isolate uranium. Despite being kept in the dark on the specifics of the project, the \"Calutron Girls\" proved to be highly adept at operating the instruments and optimizing uranium production, achieving better rates for production than the male scientists they worked with.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Calutron_Girls", "https://www.thedailybeast.com/the-girls-of-the-manhattan-project"]
    }, {
      "name": "Carol Shaw",
      "image": "carol_shaw.jpg",
      "headline": "Atari Game Developer",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/carol_shaw.jpg\"></center><br>Carol Shaw was born and raised in Palo Alto, CA. Always excellent at math, it wasn't until she inherited her brothers' model railroad that Shaw began tinkering with electronics: \"I actually designed some circuitry … with some transistors and stuff that would turn on the signal light for various blocks showing there was a train up ahead.\" <br><br>Fresh out of Berkeley's Computer Science graduate program, Shaw accepted a position at game-maker Atari in the late 1970s. Wearing thick-rimmed glasses and flannel, she biked 10 miles each way to design and program video games.Eventually landing at Activision, Shaw programmed one of the Atari's best-known shooter games, River Raid. For the first time, gamers could experience an inordinate amount of non-random, repeating terrain despite constrictive memory limits. River Raid was the first game that allowed the shooter to accelerate and slow down all over the screen. Shaw's work as a pioneer game designer has made her a legend to two generations of tech pros and gamers.",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Carol_Shaw", "http://www.vintagecomputing.com/index.php/archives/800/vcg-interview-carol-shaw-female-video-game-pioneer-2"]
    }, {
      "name": "Edith Clarke",
      "image": "edith_clarke.jpg",
      "headline": "Created and patented The Clarke Calculator",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/edith_clarke.jpg\"></center><br>Edith Clarke was a pioneering electrical engineer at the turn of the 20th century. She worked as a \"computer,\" someone who performed difficult mathematical calculations before modern-day computers and calculators were invented. Clarke struggled to find work as a female engineer instead of the 'usual' jobs allowed for women of her time, but became the first professionally employed female electrical engineer in the United States in 1922. <br><br>She paved the way for women in STEM and engineering and was inducted into the National Inventors Hall of Fame in 2015. No matter the obstacle, Edith Clarke knew how to take charge of her own destiny: \"I had always wanted to be an engineer, but felt that women were not supposed to be doing things like studying engineering.\" By no means, however, was Clarke's rise simple and easy. <br><br>Orphaned at age 12, she came of age in a Maryland boarding school. At 18, she received a small inheritance which took her through Vassar College, then Yale's all-women sister institution; she graduated in 1908. After teaching gigs in San Francisco and Wisconsin, Clarke returned to the field full-time as manager of an all-female team of \"human computers\" at AT&T. She had reached the ceiling for women in electrical engineering. Determined to continue her career doing what \"women were not supposed to be doing,\" the pioneering powerhouse next enrolled at MIT and became that institution's first woman to earn an M.S. in electrical engineering. But even with such a degree, no company would hire female engineers. In response, Clarke left the United States to teach physics at Istanbul's Women's College. Again, she couldn't stay out of the field, returning to the United States as a \"human computer\" for General Electric.<br><br>At GE, Edith Clarke created and patented The Clarke Calculator, a graphical device that solved equations used to send power through electrical transmission lines longer than 250 meters. Her massive contribution to transcontinental telephone communication silenced skeptics; in 1922, at 38, Edith Clarke became the first professional female electrical engineer.",
      "STEM-ID": {
        "id": "3",
        "name": "Engineering"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Edith_Clarke", "http://www.edisontechcenter.org/Clarke.html"]
    }, {
      "name": "Ellen Ochoa",
      "image": "ellenochoa_square.jpg",
      "headline": "First Latina astronaut",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/ellenochoa_square.jpg\"></center><br>Dr. Ellen Ochoa, a veteran astronaut, is the 11th director of the Johnson Space Center.She was the first Latina to be chosen as an astronaut, and she is now director of NASA’s Johnson Space Center, the second woman to hold the title and the first Latina. Her previous management roles include Deputy Center Director and Director of Flight Crew Operations. She also holds three patents on optical systems that can applied in multiple uses, including space. <br><br>Ochoa joined NASA in 1988 as a research engineer at Ames Research Center and moved to Johnson Space Center in 1990 when she was selected as an astronaut.  She became the first Hispanic woman to go to space when she served on the nine-day STS-56 mission aboard the space shuttle Discovery in 1993. She has flown in space four times, including STS-66, STS-96 and STS-110, logging nearly 1,000 hours in orbit. <br><br>The space program in its infancy was happening during Ochoa’s childhood, so she did not grow up dreaming of becoming an astronaut. Even when the United States began sending men into space (the first manned spaceflight was 1961), the program clearly involved no women. Sally Ride’s first flight was in 1983 and this opened a window for many women, but the NASA Training Program has always been highly competitive.  Dr. Ochoa applied three times before she was accepted in 1990. <br><br>Born in California, Ochoa earned a bachelor's degree in physics from San Diego State University and a master's degree and doctorate in electrical engineering from Stanford University.  As a research engineer at Sandia National Laboratories and NASA Ames Research Center, Ochoa investigated optical systems for performing information processing. She is a co-inventor on three patents and author of several technical papers. <br><br>Ochoa has been recognized with NASA's highest award, the Distinguished Service Medal, and the Presidential Distinguished Rank Award for senior executives in the federal government. She has received many other awards and is especially honored to have 5 schools named for her. She is a Fellow of the American Association for the Advancement of Science (AAAS) and the American Institute of Aeronautics and Astronautics (AIAA), serves on several boards, and chairs the Nomination Evaluation Committee for the National Medal of Technology and Innovation.   <br><br>She is married to Coe Miles, an intellectual property attorney. They have two sons. ",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Ellen_Ochoa", "https://americacomesalive.com/2014/09/24/ellen-ochoa-first-latina-astronaut-inventor-now-director-mission-control/"]
    }, {
      "name": "ENIAC Programmers",
      "image": "eniac.jpg",
      "headline": "Six young women programmed the first all-electronic programmable computer",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/eniac.jpg\"></center><br>As part of a secret World War Two project, six young women programmed the first all-electronic programmable computer. When the project was eventually introduced to the public in 1946, the women were never introduced or credited for their hard work -- both because computer science was not well understood as an emerging field, and because the public's focus was on the machine itself. Since then, the ENIAC Programmers Project has worked hard to preserve and tell the stories of these six women. <br><br>In 1945–46, Jean Bartik and five other women developed and codified many of the foundations of software programming while working on ENIAC. The six women, whose software work was crucial to its operation and success, were not invited to the dinner celebration for the completion of ENIAC. The day before it debuted, the world’s first general-purpose computer failed to work. It was up to seven women to stay late and make the beast, dubbed ENIAC (Electronic Numerical Integrator and Computer) operational. They were:<ul><li>Betty Jean Jennings Bartik,</li><li>Kathleen McNulty,</li><li>Mauchly Antonelli,</li><li>Ruth Lichterman Teitelbaum,</li><li>Frances Bilas Spence,</li><li>Marlyn Wescoff Meltzer,</li><li>Frances Snyder Holberton</li></ul> The system was neither small nor simple, weighing in at 30 tons and taking up a 1,500-square-foot basement. It came equipped with 18,000 vacuum tubes, 70,000 resistors, 10,000 capacitors, and 5 million hand-soldered joints. Considering its supposed aptitude with calculating ballistics trajectories, the need for it to work was great—the United States was mired deep in World War II.<br><br> \"People never recognized, they never acted as though we knew what we were doing,\" Betty Bartik would say later. \"I mean, we were in a lot of pictures.\" It would take a few decades before these female computing pioneers received due recognition. <br><br>In 1997, they were inducted into the Women in Technology International (WITI) Hall of Fame. In 2014, Walter Isaacson featured them in Innovators with the likes of Steve Jobs and Nikola Tesla. And last year saw the release of a documentary called the \"Eniac Programmers Project,\" which detailed how these women figured out how to program the machine. After the war, many of the women of ENIAC went on to help \"Amazing Grace\" Hopper develop UNIVAC, the world’s first commercial computer.",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/ENIAC#Programmers", "http://www.witi.com/center/witimuseum/halloffame/298369/ENIAC-Programmers-Kathleen-McNulty,-Mauchly-Antonelli,-Jean-Jennings-Bartik,-Frances-Synder-Holber-Marlyn-Wescoff-Meltzer,-Frances-Bilas-Spence-and-Ruth-Lichterman-Teitelbaum/"]
    }, {
      "name": "Evelyn Boyd Granville",
      "image": "Evelyn_Boyd_Granville.jpg",
      "headline": "Race, Space, & Education Advocacy",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/Evelyn_Boyd_Granville.jpg\"></center><br>Growing up in Washington, D.C. during the Great Depression, Evelyne Boyd Granville perpetually saw her glass as half-full. \"I was aware that segregation placed many limitations on Negros,\" she wrote. \"However, daily one came into contact with Negroes who had made a place for themselves in society…\" <br><br>Granville's daily contact with such role models began at Dunbar High School, where highly educated teachers (white and black) instilled a belief in Granville that, regardless of race and gender, all deserved access to knowledge. \"We accepted education as the means to rise above the limitations that a prejudiced society endeavored to place upon us.\" Pinched pennies, financial aid, and academic scholarship made her continued education possible. <br><br>Granville attended Smith College and then Yale for her Ph.D, becoming just the second African American women to receive a mathematics doctorate at any American University. After a few years of teaching at Fisk University, an all-black college in Nashville, Granville began her professional career performing real-time' calculations for satellite launchings. She studied rocket trajectories and methods of orbit computation as a part of the U.S. involvement in the space race. <br><br>In 1967, Granville returned to the classroom, where she began an impressive 30-year commitment to education advocacy.",
      "STEM-ID": {
        "id": "4",
        "name": "Mathematics"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Evelyn_Boyd_Granville", "https://www.biography.com/people/evelyn-boyd-granville-21442045"]
    }, {
      "name": "Grace Hopper",
      "image": "grace-hopper.jpg",
      "headline": "Grace Hopper was a computer scientist, and United States Navy Rear Admiral who also—on top of everything else—helped pioneer computer programming",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/grace-hopper.jpg\"></center><br>Rear Admiral Grace Murray Hopper was at the forefront of computer and programming language development from the 1930s through the 1980s. One of the crowning achievements of her 44-year career was the development of computer languages written in English, rather than mathematical notation — most notably, the common business computing language known as COBOL, which is still in use today.  Hopper's legacy is still honored by the annual Grace Hopper Celebration of Women in Computing Conference.<br><br>Grace Hopper was a computer scientist, Yale Ph.D, and United States Navy Rear Admiral who also—on top of everything else—helped pioneer computer programming. \" Humans are allergic to change,” she once said. “They love to say, ‘We’ve always done it this way.’ I try to fight that. That’s why I have a clock on my wall that runs counter-clockwise.\" <br><br>In 1945, after 10 years of teaching, Hopper joined a new volunteer branch of the Navy known as WAVES (Women Accepted for Volunteer Emergency Service). At just 105 pounds, she was 15 pounds below the Navy minimum weight and had to receive a special exemption. <br><br>During her illustrious career, Hopper worked on UNIVAC I, the first commercial computer produced in the U.S., and created the first compiler. She is also credited with coining the term \"computer bug\" when she found a real moth inside the massive UNIVAC I. <br><br>If that wasn’t enough, Hopper also invented FLOW-MATIC, the first English-like data processing language, which helped spark the development of COBOL, which eventually became the Navy’s standard operating language. <br><br>Late-night show host David Letterman once asked Hopper, \"You know you’re the Queen of Software, right?\" <br>She replied: \"More or less.\" ",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Grace_Hopper", "https://www.biography.com/people/grace-hopper-214068095"]
    }, {
      "name": "Janese Swanson",
      "image": "JaneseSwanson.jpg",
      "headline": "Founder of Girl Tech",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/JaneseSwanson.jpg\"></center><br>Easy was never an option for Janese Swanson. After her father died in Vietnam, she began helping her mother clean houses for extra cash. One day, while cleaning a wealthy doctor's home in La Jolla, CA, Swanson shared a dream of becoming a doctor herself. The doctor's wife advised: \"It will be easier for you if you marry a doctor.\" <br><br>At age 15, she fibbed her date of birth and started slinging televisions at Sears. Many years later, Swanson would use her electronic sales experience as manager of the computer and technology department at a small store called My Child's Destiny. Interested in the nexus of technology and children education, she received Computers in Education Certificate from Berkeley, all while raising her daughter. <br><br>In 1988, Swanson began working for Broderbund Software Company, developing games for kids such as, \"Where in the World is Carmen Sandiego?\" However, she struggled there as \"[we women] earned far less than there male colleagues… had to raise hands to get a word in [at meetings] … and always had a hard time getting men to focus on what we were saying rather than our legs and breasts.\" She quit, got her Ph.D from San Francisco State, and, in 1995, started her own toy company, Girl Tech. <br><br>Swanson initially struggled to find investors and vendors. \"For two years after I founded the company, toy store buyers would say, 'Can you make it pink' [or] 'Can you make it for boys?' And I would say, 'No, this is what girls like to play with.'\" It wasn't easy but, in 1998, Swanson sold Girl Tech to Radica Games Limited for $6 million. She remained with the company for 2 years as Vice President",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Janese_Swanson", "https://speakerpedia.com/speakers/janese-swanson"]
    }, {
      "name": "Katherine Johnson",
      "image": "katherine-johnson.jpg",
      "headline": "A leading figure in American space history",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/katherine-johnson.jpg\"></center><br>Being handpicked to be one of three black students to integrate West Virginia’s graduate schools is something that many people would consider one of their life’s most notable moments, but it’s just one of several breakthroughs that have marked Katherine Johnson’s long and remarkable life. <br><br>Born in White Sulphur Springs, West Virginia in 1918, Katherine Johnson’s intense curiosity and brilliance with numbers vaulted her ahead several grades in school. By thirteen, she was attending the high school on the campus of historically black West Virginia State College. At eighteen, she enrolled in the college itself, where she made quick work of the school’s math curriculum and found a mentor in math professor W. W. Schieffelin Claytor, the third African American to earn a PhD in Mathematics. Katherine graduated with highest honors in 1937 and took a job teaching at a black public school in Virginia.  <br><br>When West Virginia decided to quietly integrate its graduate schools in 1939, West Virginia State’s president Dr. John W. Davis selected Katherine and two male students as the first black students to be offered spots at the state’s flagship school, West Virginia University. Katherine left her teaching job, and enrolled in the graduate math program. At the end of the first session, however, she decided to leave school to start a family with her husband.  <br><br>She returned to teaching when her three daughters got older, but it wasn’t until 1952 that a relative told her about open positions at the all-black West Area Computing section at the National Advisory Committee for Aeronautics’ (NACA’s) Langley laboratory, headed by fellow West Virginian Dorothy Vaughan. <br><br>Katherine and her husband, James Goble, decided to move the family to Newport News to pursue the opportunity, and Katherine began work at Langley in the summer of 1953. Just two weeks into Katherine’s tenure in the office, Dorothy Vaughan assigned her to a project in the Maneuver Loads Branch of the Flight Research Division, and Katherine’s temporary position soon became permanent. <br><br>She spent the next four years analyzing data from flight test, and worked on the investigation of a plane crash caused by wake turbulence. As she was wrapping up this work her husband died of cancer in December 1956. <br><br>The 1957 launch of the Soviet satellite Sputnik changed history—and Katherine Johnson’s life. In 1957, Katherine provided some of the math for the 1958 document Notes on Space Technology, a compendium of a series of 1958 lectures given by engineers in the Flight Research Division and the Pilotless Aircraft Research Division (PARD). Engineers from those groups formed the core of the Space Task Group, the NACA’s first official foray into space travel, and Katherine, who had worked with many of them since coming to Langley, \"came along with the program\" as the NACA became NASA later that year. <br><br>She did trajectory analysis for Alan Shepard’s May 1961 mission Freedom 7, America’s first human spaceflight. In 1960, she and engineer Ted Skopinski coauthored Determination of Azimuth Angle at Burnout for Placing a Satellite Over a Selected Earth Position, a report laying out the equations describing an orbital spaceflight in which the landing position of the spacecraft is specified. It was the first time a woman in the Flight Research Division had received credit as an author of a research report. <br><br>In 1962, as NASA prepared for the orbital mission of John Glenn, Katherine Johnson was called upon to do the work that she would become most known for. The complexity of the orbital flight had required the construction of a worldwide communications network, linking tracking stations around the world to IBM computers in Washington, DC, Cape Canaveral, and Bermuda. The computers had been programmed with the orbital equations that would control the trajectory of the capsule in Glenn’s Friendship 7 mission, from blast off to splashdown, but the astronauts were wary of putting their lives in the care of the electronic calculating machines, which were prone to hiccups and blackouts. As a part of the preflight checklist, Glenn asked engineers to \"get the girl\"—Katherine Johnson—to run the same numbers through the same equations that had been programmed into the computer, but by hand, on her desktop mechanical calculating machine.  “If she says they’re good,’\" Katherine Johnson remembers the astronaut saying, \"then I’m ready to go.\" <br><br>Glenn’s flight was a success, and marked a turning point in the competition between the United States and the Soviet Union in space. When asked to name her greatest contribution to space exploration, Katherine Johnson talks about the calculations that helped synch Project Apollo’s Lunar Lander with the moon-orbiting Command and Service Module. <br><br>She also worked on the Space Shuttle and the Earth Resources Satellite, and authored or coauthored 26 research reports. She retired in 1986, after thirty-three years at Langley. \"I loved going to work every single day,\" she says. In 2015, at age 97, Katherine Johnson added another extraordinary achievement to her long list: President Obama awarded her the Presidential Medal of Freedom, America’s highest civilian honor.",
      "STEM-ID": {
        "id": "4",
        "name": "Mathematics"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Katherine_Johnson", "https://www.biography.com/people/katherine-g-johnson-101016"]
    }, {
      "name": "Lillian Gilbreth",
      "image": "lillianmollergilbraith_square.jpg",
      "headline": "The role model for the highly intelligent, quirky mother in the popular movie Cheaper by the Dozen",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/lillianmollergilbraith_square.jpg\"></center><br>Lillian Moller Gilbreth was an American psychologist and industrial engineer at the turn of the 20th century. She was an expert in efficiency and organizational psychology, the principles of which she applied not only as a management consultant for major corporations, but also to her household of twelve children, as chronicled in the book Cheaper by the Dozen. <br><br>Her long list of firsts includes first female commencement speaker at the University of California, first female engineering professor at Purdue, and first woman elected to the National Academy of Engineering.",
      "STEM-ID": {
        "id": "3",
        "name": "Engineering"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Lillian_Moller_Gilbreth", "https://www.asme.org/career-education/articles/management-professional-practice/lillian-moller-gilbreth"]
    }, {
      "name": "Lydia Villa-Komaroff",
      "image": "lydia-v-k.jpg",
      "headline": "The chief scientific officer and board member at Cytonome/ST LLC",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/lydia-v-k.jpg\"></center><br>Whether or not you are a woman in science, technology, engineering, and math (STEM), you will be wowed by Lydia Villa-Komaroff! and the major accomplishments Villa-Komaroff has made as a scientist despite the adversities she faced. <br><br>“Traditionally, Hispanic women are not socialized to believe they can earn a living, much less be a scientist,” she says. She has clearly gone against such traditions by becoming the chief scientific officer and board member at Cytonome/ST LLC, a company that develops and builds cell processing systems. <br><br>Interested in science from a young age, Villa-Komaroff went on to receive her bachelor’s degree from Goucher College and her doctorate in cell biology from the Massachusetts Institute of Technology — an amazing feat at the time since by 1976 only 19.5 percent of doctorates in biological and agricultural sciences were earned by women. She pursued her love for science as a postdoctoral fellow in Nobel Prize-winning chemist Walker Gilbert’s lab, and it was there that Villa-Komaroff co-authored the first synthesis of mammalian insulin in bacterial cells. <br><br>Villa-Komaroff is an inspiration for women everywhere. As a frequently published researcher and the third Mexican-American woman to earn a doctorate in the United States, Villa-Komaroff exemplifies the dream that with hard work and passion, anything is possible. Furthermore, she has excelled in a field where women — and particularly women of color — are underrepresented. As a woman of color I am always encouraged to see other successful women of color who challenge the typical stereotypes placed upon us. Villa-Komaroff’s accomplishments definitely earn a huge hooray for women in STEM! <br><br>This post was written by AAUW Leadership Programs Intern Nzinga Shury.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Lydia_Villa-Komaroff", "https://www.nsf.gov/od/oia/activities/ceose/Biographies/villa-komaroff.jsp"]
    }, {
      "name": "Margaret Hamilton",
      "image": "Margaret_Hamilton.jpg",
      "headline": "An American computer scientist, systems engineer and business owner, led the team that developed the on-board software for the Apollo Moon missions",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/Margaret_Hamilton.jpg\"></center><br>Margaret Hamilton, an American computer scientist, systems engineer and business owner, led the team that developed the on-board software for the Apollo Moon missions. <br><br>In the 1960s Hamilton took a job with MIT as a developer on the Semi-Automatic Ground Environment (SAGE) project. SAGE was a system of large computers and networking equipment that pulled data from radars to produce a single image of the airspace over a wide area. This technology was eventually used by the military for anti-aircraft air defense against the Soviets during the Cold War. Hamilton’s participation in this project catapulted her into her longstanding career as a computer programmer. <br><br>Hamilton then joined Charles Stark Draper Laboratory at MIT, where she began working as the lead software designer for the Apollo space mission. During the most critical moments of the Apollo 11 mission, it was Hamilton’s priority alarm display that helped decide whether an alert the astronauts received just before they were to land on the Moon meant they should abort their mission. Thanks to Hamilton’s system, the NASA team was able to see that the alert was nothing critical, and the landing went ahead. <br><br>President Obama gave Hamilton the Presidential Medal of Freedom in 2016 to recognize her work saying she encapsulated the \"American spirit of discovery that exists in every little girl and little boy.\" ",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Margaret_Hamilton_(scientist)", "https://www.wired.com/2015/10/margaret-hamilton-nasa-apollo/"]
    }, {
      "name": "Maria Klawe",
      "image": "maria-klawe.jpg",
      "headline": "The first female president of Harvey Mudd College",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/maria-klawe.jpg\"></center><br>Despite growing up as a self-described outcast, Maria Klawe pursed her passion for technology and became a prominent computer scientist. <br><br>Klawe is now the first female president of Harvey Mudd College and works hard to ignite passion about STEM fields amongst diverse groups. During her tenure at Harvey Mudd College, her work has helped support the Computer Science faculty's ability to innovate, and has raised the percentage of women majoring in computer science from less than 15 percent to more than 40 percent today.",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Maria_Klawe", "https://www.hmc.edu/about-hmc/president-klawe/biography-of-president-maria-klawe/"]
    }, {
      "name": "Mary Engle Pennington",
      "image": "maryenglepennington.jpg",
      "headline": "Chemist who worked to establish food safety",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/maryenglepennington.jpg\"></center><br>Mary Engle Pennington was an American chemist at the turn of the 20th century. At a time when few women attended college, Pennington completed her PhD and went on to work as a bacteriological chemist at the U.S. Department of Agriculture. <br><br>Shortly after arriving at the USDA, Pennington became chief of the newly established Food Research Laboratory. During her 40-year career at the USDA, Pennington’s pioneering research on sanitary methods of processing, storing, and shipping food led to achievements such as the first standards for milk safety as well as universally accepted standards for the refrigeration of food products.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Mary_Engle_Pennington", "https://www.fda.gov/AboutFDA/WhatWeDo/History/ucm341862.htm"]
    }, {
      "name": "Sister Mary Kenneth Keller",
      "image": "mary_kenneth_keller.jpg",
      "headline": "First Female Computer Science Phd",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/mary_kenneth_keller.jpg\"></center><br>The first woman to receive a Ph.D in Computer Science was a nun: Mary Kenneth Keller entered the \"Sister of Charity\" in 1932, professing her vows in 1940. Keller received her B.S./M.S. Mathematics from DePaul University in Chicago and briefly studied at Dartmouth, breaking the \"men-only\" rule. While there, Keller played a significant role developing a key computer language: Beginner's All-Puprose Symbolic Instruction Code, or BASIC. Keller understood that the world was \"having an information explosion… and information is of no use unless it's available.\" Thanks to BASIC, writing custom software was no longer restricted to mathematicians and scientists. Her contribution made computer use much more accessible to a broader portion of the population.<br><br>Keller returned to the Midwest and, in 1965, received her PhD from the University of Wisconsin. Clarke College in Dubuque, Iowa hired Keller to create and chair their Computer Science Department, where she continued to grow and share her knowledge for 20 years",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Mary_Kenneth_Keller", "http://mentalfloss.com/article/53178/first-woman-earn-phd-computer-science-was-nun"]
    }, {
      "name": "Mercury 13",
      "image": "mercury-13.jpg",
      "headline": "“Members of the First Lady Astronaut Trainees(FLATs)",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/mercury-13.jpg\"></center><br>Just as NASA launched its first man into space, a group of women underwent secret testing in the hope of becoming America’s first female astronauts. They passed the same battery of tests at the legendary Lovelace Foundation as did the Mercury 7 astronauts. <br><br>These 13 women <ul><li>Jerrie Cobb</li> <li>Bernice Steadman</li> <li>Janey Hart</li> <li>Jerri Truhill</li> <li>Rhea Woltman</li> <li>Sarah Ratley</li> <li>Jan and Marion Dietrich</li> <li>Myrtle Cagle</li> <li>Irene Leverton</li> <li>Gene Nora Jessen</li> <li>Jean Hixson</li> <li>Wally Funk</li>  </ul>passed the same tests as the Mercury 7. But they summarily were dismissed by the boys club at NASA and on Capitol Hill. <br><br>The Mercury 13, also sometimes known as the \"Members of the First Lady Astronaut Trainees\" (FLATs). FLATs was never an official NASA program, and was unfortunately eventually discontinued, but the commitment and determination of these women to get into space has been credited with paving the way for such astronauts as Mae Jemison, the first African-American woman in space.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Mercury_13", "http://www.bbc.com/news/science-environment-36824898"]
    }, {
      "name": "Mollie Orshansky",
      "image": "mollieorshansky.jpg",
      "headline": "Statistician that helped define poverty levels",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/mollieorshansky.jpg\"></center><br>Mollie Orshansky was a food economist and statistician whose work on poverty thresholds pioneered the way the U.S. Government defines poverty. By using the cost of the cheapest nutritionally adequate diet to calculate a cost of living expense for families of various sizes, Orshansky developed guidelines which eventually became the federal government’s official statistical definition of poverty. <br><br>Her work provided a way to assess the impact of new policies on poor populations, which to this day remains a standard measure of new policies, demonstrating the enduring impact of her work on American public policy.",
      "STEM-ID": {
        "id": "4",
        "name": "Mathematics"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Mollie_Orshansky", "https://www.ssa.gov/policy/docs/ssb/v68n3/v68n3p79.html"]
    }, {
      "name": "Rachel Carson",
      "image": "rachel-carson.jpg",
      "headline": "Marine Biologist and Environmentalist",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/rachel-carson.jpg\"></center><br>A marine biologist and nature writer, Rachel Carson catalyzed the global environmental movement with her 1962 book Silent Spring. Outlining the dangers of chemical pesticides, the book led to a nationwide ban on DDT and other pesticides and sparked the movement that ultimately led to the creation of the U.S. Environmental Protection Agency (EPA). <br><br>Born on May 27, 1907 on a farm in Springdale, Pennsylvania, Carson was the youngest of Robert and Maria McLean Carson’s three children. She developed a love of nature from her mother, and Carson became a published writer for children’s magazines by age 10. She attended the Pennsylvania College for Women (now Chatham University), graduating magna cum laude in 1929. She next studied at the oceanographic institute at Woods Hole, Massachusetts and at Johns Hopkins University, where she received a master’s degree in zoology in 1932. Strained family finances forced her to forego pursuit of a doctorate and help support her mother and, later, two orphaned nieces. <br><br>After outscoring all other applicants on the civil service exam, in 1936 Carson became the second woman hired by the U.S. Bureau of Fisheries. She remained there for 15 years, writing brochures and other materials for the public. She was promoted to Editor-in-Chief of all publications for the U. S. Fish and Wildlife Service. Meanwhile, she wrote several popular books about aquatic life, among them Under the Sea Wind (1941) and The Sea Around Us (1951). The latter was serialized in the New Yorker and sold well worldwide. She won a National Book Award, a national science writing-prize and a Guggenheim grant, which, with the book’s sales, enabled her to move to Southport Island, Maine in 1953 to concentrate on writing. <br><br>In 1955, she published The Edge of the Sea, another popular seller. She also began a relationship with Dorothy Freeman, a married summer resident. Though much of their correspondence was destroyed shortly before Carson’s death, the rest was published by Freeman’s granddaughter in 1995 as Always, Rachel: The Letters of Rachel Carson and Dorothy Freeman, 1952–1964: An Intimate Portrait of a Remarkable Friendship. After a niece died in early 1957, Carson adopted her son and relocated to Silver Spring, Maryland, to care for her aging mother. A letter from a friend in Duxbury, Massachusetts about the loss of bird life after pesticide spraying inspired Carson to write Silent Spring. <br><br>The book primarily focuses on pesticides' effects on ecosystems, but four chapters detail their impact on humans, including cancer. She also accused the chemical industry of spreading disinformation and public officials of accepting industry claims uncritically. Chemical companies sought to discredit her as a Communist or hysterical woman. Many pulled their ads from the CBS Reports TV special on April 3, 1963, entitled “The Silent Spring of Rachel Carson.” Still, roughly 15 million viewers tuned in, and that, combined with President John F. Kennedy’s Science Advisory Committee Report – which validated Carson’s research – made pesticides a major public issue. <br><br>Carson received medals from the National Audubon Society and the American Geographical Society, and induction into the American Academy of Arts and Letters. Seriously ill with breast cancer, Carson died two years her book’s publication. <br><br>In 1980, she was posthumously awarded the Presidential Medal of Freedom. Her homes are considered national historic landmarks, and various awards bear her name.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Rachel_Carson", "http://www.rachelcarson.org/Bio.aspx"]
    }, {
      "name": "Radia Perlman",
      "image": "Radia_Perlman.jpg",
      "headline": "Mother of the Internet",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/Radia_Perlman.jpg\"></center><br>Who's going to break the news to Al Gore? Radia Perlman, often described as the 'Mother of the Internet,' insists that, \"The Internet was not invented by any individual.\" <br><br>Perlman did, however, create the algorithm behind the Spanning Tree Protocol (STP), which is an essential part of the Internet's underlying foundation. <br><br>As a child, Perlman put a lot of pressure on herself to get straight A's. Although she excelled at all subjects, she naturally gravitated to math and science because she could control her grades by just knowing the right answer. Although her mother was a mathematician/computer programmer, similar to the women of ENIAC, the two rarely spoke about programming. <br><br>Perlman went on to MIT, just one of handful of females in her class (~50 of 1,000 students). <br><br>In 2000, Perlman published her textbook \"Interconnections,\" greatly simplifying network routing and bridging. \"My book created order,\" she later said. \"It was easy to understand while being conceptually thought-provoking, and a large part of the technology described was stuff I'd invented.\" <br><br>Despite her success, Perlman keeps a level head and credits others equally for her success: \"In engineering, the point is to get the job done, and people are happy to help. You should be generous with credit, and you should be happy to help others.",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Radia_Perlman", "https://www.internethalloffame.org/inductees/radia-perlman"]
    }, {
      "name": "Ruth Rogan Benerito",
      "image": "ruthroganbenerito_square.jpg",
      "headline": "Chemist and pioneer in bioproducts",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/ruthroganbenerito_square.jpg\"></center><br>Ruth Rogan Benerito was an American chemist and pioneer in bioproducts. <br><br>Benerito is credited with saving the cotton industry in post-WWII America through her discovery of a process to produce wrinkle-free, stain-free, and flame-resistant cotton fabrics. <br><br>In addition to this work, Benerito also developed a method to harvest fats from seeds for use in intravenous feeding of medical patients. This system became the foundation for the system we use today. After retiring from the USDA and teaching university courses for an additional eleven years, Benerito received the Lemelson-MIT Lifetime Achievement Award both for her contributions to the textile industry and her commitment to education.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Ruth_R._Benerito", "https://www.sciencehistory.org/historical-profile/ruth-benerito"]
    }, {
      "name": "Sally Ride",
      "image": "sally-ride.jpg",
      "headline": "The first American woman to fly into space",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/sally-ride.jpg\"></center><br>Sally Ride was the first American woman to fly in space. She was the founder of Sally Ride Science and the Sally Ride Science Festivals. She liked to run and play tennis, volleyball and softball. Ride wrote several science books for children. The books are about space exploration, Earth and the solar system. <br><br><b>What Was Sally Ride's Early Life Like?</b><br> Sally Ride was born May 26, 1951, in Los Angeles, Calif. After high school, she attended Stanford University in California. She earned bachelor's, master's and doctorate degrees in physics. Physics is the study of matter and energy and how they interact. <br><br><b>How Did Sally Ride Become an Astronaut?</b><br> Sally Ride applied to be an astronaut in 1977. It was the first time that women were invited to apply to the astronaut program. Ride was a college student and saw an advertisement that NASA was looking for women astronauts. She was one of six women selected to the astronaut corps in 1978. <br><br><b>What Did Sally Ride Do as an Astronaut?</b><br> On June 18,1983, Sally Ride became the first American woman to fly in space. She was a mission specialist on the STS-7 space shuttle mission. A mission specialist does the assigned tasks of a mission. These tasks include using the robotic arm, going on spacewalks and doing science experiments. During her flight, Ride worked the robotic arm to help release satellites into space. She flew on the space shuttle again in 1984 on the STS 41-G mission. <br><br><b>What Did Sally Ride Do After Leaving NASA?</b><br> Ride retired from NASA in 1987. She became a professor at the University of California San Diego. She also looked for new ways to encourage women and girls to study science and mathematics. She came up with the idea for NASA's EarthKAM project. The project lets middle school students select, shoot, download and study photos of Earth using a camera on the International Space Station. <br><br>In 2003, Ride was inducted to the Astronaut Hall of Fame. The Astronaut Hall of Fame honors astronauts for their accomplishments in spaceflight. She was awarded the 2012 National Space Grant Distinguished Service Award. <br><br>Until her death on July 23, 2012, Ride continued to help students - especially girls - study science and mathematics. She wrote science books and other things for students and teachers. She was involved in science programs and festivals around the United States.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Sally_Ride", "https://www.space.com/16756-sally-ride-biography.html"]
    }, {
      "name": "Susan Kare",
      "image": "susan_kare.jpg",
      "headline": "The Apple Icon",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/susan_kare.jpg\"></center><br>Although she briefly worked for Microsoft, Susan Kare is best known for her work with Bill Gate's nemesis, Steve Jobs. <br><br>Kare followed dreams of a career in the fine arts to San Francisco. A chance encounter with an old high school friend landed her an interview with Apple. Steve Jobs, inspired by Xerox's graphical user interface (GUI), was on the hunt for an artist who could design Macintosh's icons. She got the job. \"The morale is to have confidence in your skill mix,\" she later said. \"Because I certainly didn't have a computer background.\" <br><br>Using a pad of graph paper, Kare designed icons that were simple, elegant, and playful. The original designs were just 32 x 32 pixels. <br><br>Kare is also responsible for developing the command (\"Apple\") key as a stylized castle seen from above. As part of her Apple work, Kare created the typeface Chicago, used in the first four generations of the iPod. To keep the lettering smooth and seamless, all lines were purposefully made horizontal, vertical, or on a 45-degree angle. That sort of attention to detail has continued to define Apple to this day.",
      "STEM-ID": {
        "id": "2",
        "name": "Technology"
      },
      "moreInfo": ["https://en.wikipedia.org/wiki/Susan_Kare", "http://www.computinghistory.org.uk/det/1792/Susan-Kare/"]
    }, {
      "name": "Virginia Holsinger",
      "image": "virginiahholsinger.jpg",
      "headline": "Chemist doing research on dairy products",
      "body": "<center> <img src = \"http://thecoderpilot.com/WomenInSTEM/virginiahholsinger.jpg\"></center><br>Virginia H. Holsinger was an American chemist known for her research on dairy products and food security issues. <br><br>Holsinger developed a nutritious and shelf-stable whey and soy drink mixture that is distributed internationally by food donation programs as a substitute for milk. She also created a grain blend that can be mixed with water to provide food for victims of famine, drought, and war. Additionally, her work on the lactase enzyme formed the basis for commercial products to make milk digestible by lactose-intolerant people. Through these discoveries, Holsinger’s work has had a major impact on worldwide public health.",
      "STEM-ID": {
        "id": "1",
        "name": "Science"
      },
      "moreInfo": ["http://lemelson.mit.edu/resources/virginia-holsinger", "http://introductionsnecessary.com/2016/08/22/virginia-holsinger/"]
    }
  ]
}
