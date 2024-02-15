const boaData = [
    {
        id: 1,
        name: "JAI DAGA",
        position: "VP of Technology",
        img:"assets/Board-of-advisor/JAI-DAGA.webp",
        logo:"assets/Board-of-advisor/company-logo/JAI-DAGA-1.webp"
    },
    {
        id: 2,
        name: "PRASHANTH KUMAR",
        position: "Director IT",
        img:"assets/Board-of-advisor/PRASHANTH-KUMAR.webp",
        logo:"assets/Board-of-advisor/company-logo/PRASHANTH-KUMAR-1.webp"
    },
    {
        id: 3,
        name: "VISHAL DUBEY",
        position: "Chief Technology Evangelist",
        img:"assets/Board-of-advisor/VISHAL-DUBEY.webp",
        logo:"assets/Board-of-advisor/company-logo/VISHAL-DUBEY-1.webp"
    },
    {
        id: 4,
        name: "FAIZ MALKHANI",
        position: "Founding Organizer",
        img:"assets/Board-of-advisor/FAIZ-MALKHANI.webp",
        logo:"assets/Board-of-advisor/company-logo/FAIZ-MALKHANI-1.webp"
    },
    {
        id: 5,
        name: "VIVEK YADAV",
        position: "Google Developer Expert",
        img:"assets/Board-of-advisor/VIVEK-YADAV.webp",
        logo:"assets/Board-of-advisor/company-logo/VIVEK-YADAV-1.webp"
    },
    {
        id: 6,
        name: "VARUN RAJ",
        position: "Google Developer Expert",
        img:"assets/Board-of-advisor/VARUN-RAJ.webp",
        logo:"assets/Board-of-advisor/company-logo/VARUN-RAJ-1.webp"
    },
    {
        id: 7,
        name: "SUMON MAL",
        position: "Director of Engineering",
        img:"assets/Board-of-advisor/SUMON-MAL.webp",
        logo:"assets/Board-of-advisor/company-logo/SUMON-MAL-1.webp"
    },
    {
        id: 8,
        name: "SHAILENDRA SAWANT",
        position: "CTO",
        img:"assets/Board-of-advisor/SHAILENDRA-SAWANT.webp",
        logo:"assets/Board-of-advisor/company-logo/SHAILENDRA-SAWANT-1.webp"
    },
    {
        id: 9,
        name: "ANKUSH GORAV",
        position: "VP of Engineering",
        img:"assets/Board-of-advisor/ANKUSH-GORAV.webp",
        logo:"assets/Board-of-advisor/company-logo/ANKUSH-GORAV-1.webp"
    },
    {
        id: 10,
        name: "AJAY MARU",
        position: "CTO",
        img:"assets/Board-of-advisor/AJAY-MARU.webp",
        logo:"assets/Board-of-advisor/company-logo/AJAY-MARU-1.webp"
    },
    {
        id: 11,
        name: "ASIM MALIK",
        position: "The Board of Advisors",
        img:"assets/Board-of-advisor/ASIM-MALIK.webp",
        logo:"assets/Board-of-advisor/company-logo/ASIM-MALIK-1.webp"
    },
    {
        id: 12,
        name: "ABHIJIT PETKAR",
        position: "CTO",
        img:"assets/Board-of-advisor/ABHIJIT-PETKAR.webp",
        logo:"assets/Board-of-advisor/company-logo/ABHIJIT-PETKAR-1.webp"
    },
    {
        id: 13,
        name: "SANJAY KUMAR",
        position: "Engineering Director",
        img:"assets/Board-of-advisor/SANJAY-KUMAR.webp",
        logo:"assets/Board-of-advisor/company-logo/SANJAY-KUMAR-1.webp"
    },
    {
        id: 14,
        name: "AMIT A. BADIYANI",
        position: "Founder &Managing Director",
        img:"assets/Board-of-advisor/AMIT-A.-BADIYANI.webp",
        logo:"assets/Board-of-advisor/company-logo/AMIT-A.-BADIYANI-1.webp"
    },
    {
        id: 15,
        name: "KESHAV KARUNAKAR",
        position: "Co Founder & VP Engineering",
        img:"assets/Board-of-advisor/KESHAV-KARUNAKAR.webp",
        logo:"assets/Board-of-advisor/company-logo/KESHAV-KARUNAKAR-1.webp"
    },
    {
        id: 16,
        name: "MEHAMOOD MANSOORI",
        position: "MD & CEO",
        img:"assets/Board-of-advisor/MEHAMOOD-MANSOORI.webp",
        logo:"assets/Board-of-advisor/company-logo/MEHAMOOD-MANSOORI-1.webp"
    },
    {
        id: 17,
        name: "SUNDEEP MEHTA",
        position: "Sr Vice President",
        img:"assets/Board-of-advisor/SUNDEEP-MEHTA.webp",
        logo:"assets/Board-of-advisor/company-logo/SUNDEEP-MEHTA-1.webp"
    },
    {
        id: 18,
        name: "MUKESH MARFATIA",
        position: "EVP Corporate Strategy",
        img:"assets/Board-of-advisor/MUKESH-MARFATIA.webp",
        logo:"assets/Board-of-advisor/company-logo/MUKESH-MARFATIA-1.webp"
    },
    {
        id: 19,
        name: "DEVVRAT ARYA",
        position: "VP of Technology",
        img:"assets/Board-of-advisor/DEVVRAT-ARYA.webp",
        logo:"assets/Board-of-advisor/company-logo/DEVVRAT-ARYA-1.webp"
    },
    
];

let output1 = boaData.map(showBoaData).join("");
let boaDataCards = document.getElementById("boa-container");
boaDataCards.innerHTML = output1;

function showBoaData(boaData) {
    let listCard = `
    <div class="flex flex-col w-40 md:w-52 rounded-2xl">
        <div class="flex w-full shadow-md bg-brand-yellow rounded-2xl">
            <img loading="lazy" src=${boaData.img} alt=${boaData.name}
                class="flex w-full h-full object-cover rounded-2xl grayscale">
        </div>
        <div class="flex flex-col items-center justify-center gap-1 py-3">
            <strong class="text-xs md:text-base text-center text-brand-red font-bold py-2">${boaData.name}</strong>
            <div class="flex h-8 md:h-auto w-fit mx-auto">
                <p class="text-xs text-center">${boaData.position}</p>
            </div>
            <div class="flex h-12 w-fit mx-auto">
                <img loading="lazy" src=${boaData.logo}
                    class="flex h-full w-fit object-center object-contain" alt=${boaData.name}>
            </div>
        </div>
    </div>                       
    `;
    return listCard;
}