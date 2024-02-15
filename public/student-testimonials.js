const studentsTSData = [

    {
        id: 1,
        name: "Tanay Sahajwalla",
        speack: "Engaging with industry experts while learning Python and C++ has been an amazing and impactful experience in a happy, conducive environment.",
        sTSImg: "assets/st-img/Tanay-Sahajwalla.webp"
    },
    {
        id: 2,
        name: "Manmeet Singh",
        speack: "Gaining confidence and an edge in my field from the first semester, thanks to The School of Future Tech's powerful, modern curriculum,fuels my passion for continuous learning and achievement.",
        sTSImg: "assets/st-img/Manmeet-Singh.webp"
    },
    {
        id: 3,
        name: "Raheel Kotwal",
        speack: "Transformed into a better person and professional, I'm grateful to ITM Skills University for an amazing semester filled with unique experiences like in-house hackathons and meetups, which added immense value to my career.",
        sTSImg: "assets/st-img/Raheel-Kotwal.webp"
    },
    {
        id: 4,
        name: "Roshni Rai",
        speack: "ITM's diverse perspectives and supportive atmosphere, combined with great mentors, have enhanced my technical skills and personal growth, while participation in hackathons boosted my confidence in applying knowledge in real-world scenarios, fostering curiosity and innovation in adynamic ecosystem.",
        sTSImg: "assets/st-img/Roshni-Rai.webp"
    },
    {   
        id: 5,
        name: "Husain Hakim",
        speack: "Wrapping up our first semester at ITM Skills University, l'am on an incredible journey far beyond ordinary college experiences, feeling upgraded and enriched with industry insights from tech leaders, giving me an upper hand in my field and excitement for future semesters.",
        sTSImg: "assets/st-img/Husain-Hakim.webp"
    },
    {   
        id: 6,
        name: "Piyush Kumar Singh",
        speack: "In 6 months, we have learned that languages which other college students would have taken 1-2 years to learn, Btech CSE is al about coding, so from start we focus on core fundamentals of CSE.",
        sTSImg: "assets/st-img/Piyush-Kumar-Singh.webp"
    },
    {   
        id: 7,
        name: "Atharav Patil",
        speack: "The entire Semester Iwas awesome! We had a sprint model that unburdened a lot of load and allowed us to focus on core skills, and industry leaders gave interesting lectures. Every day was more interesting than the other.",
        sTSImg: "assets/st-img/Atharav-Patil.webp"
    },
    {   
        id: 8,
        name: "Manas More",
        speack: "'INDIA'S BEST B.TECH CSE' truly lives up to its name; the first semester has remarkably improved my knowledge, confidence, and problem-solving skills, and Ieagerly anticipate acquiring more skills and sharing this passionate learning journey with friends. #EAT, SLEEP, CODE, REPEAT.",
        sTSImg: "assets/st-img/Manas-More.webp"
    },
    {   
        id: 9,
        name: "Anusri Karmokar",
        speack: "From receiving inaugural swag boxes to writing our first semester exams, our journey has been extraordinary, surpassing the typical CSE student experience with meet-ups, tech leader interactions, hackathons, and presentations, complemented by forming bonds with batchmates, al gearing us for an amazing career launch.",
        sTSImg: "assets/st-img/Anusri-Karmokar.webp"
    },
    {   
        id: 10,
        name: "Rafe Shaikh",
        speack: "Reflecting on the semester's end, I'm astounded by my transformation from a novice in coding and computer systems to proficiency in C, C++, Python, and app development using no-code platforms. The engaging sessions with industry experts, have been eye-opening, equipping me with vital skills for future job opportunities.",
        sTSImg: "assets/st-img/Rafe-Shaikh.webp"
    },
    {   
        id: 11,
        name: "Hanshika Anchan",
        speack: "Transformed by ITM Skills University's practical, industry-oriented curriculum, professional approach from day one, and mentorship from leaders, I've gained confidence, insights, and achieved remarkable project deployment within the first year.",
        sTSImg: "assets/st-img/Hanshika-Anchan.webp"
    },
    {   
        id: 12,
        name: "Prem Thatikonda",
        speack: "Looking back 5 months ago, not only with respect to academics but also as a person overall, the changes are massive. Couldn't have asked for a push ahead in life than the one we got here in college, Every little thing brought about some value, right from the repetitive assignments to the guest lectures. Looking forward to even more thrilling semesters coming up",
        sTSImg: "assets/st-img/Prem-Thatikonda.webp"
    },
    {   
        id: 13,
        name: "Prem Thakare",
        speack: "My mind, once a blank canvas, now dances with Python, C++, and Scratch tunes- a symphony of problem-solving. Love studying at ITM School of FutureTech",
        sTSImg: "assets/st-img/Prem-Thakare.webp"
    },

];



let output = studentsTSData.map(showData).join("");
let dataCards = document.getElementById("data-container");
dataCards.innerHTML = output;

function showData(studentsTSData) {
    let listCard = `
    <div class="flex relative w-80 h-350 st-gradient rounded-lg border border-gray-300">
        <div class="flex flex-col text-white gap-2 w-full p-5">
            <p class="text-justify text-xs">
                “${studentsTSData.speack}"
            </p>
            <strong class="text-xs font-semibold">- ${studentsTSData.name}</strong>
        </div>
        <div class="flex absolute bottom-0 right-3 h-48 w-fit">
            <img src=${studentsTSData.sTSImg} alt=${studentsTSData.name}>
        </div>
    </div>
    `;
    return listCard;
}