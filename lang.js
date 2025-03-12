const translations = [
    {
        "id": "text-question-map-best",
        "en": "Click on your favorite place in the Wildlands",
        "nl": "Druk op je favoriete plek in de Wildlands"
    },
    {
        "id": "text-question-map-worst",
        "en": "Click on your least favorite place in the Wildlands",
        "nl": "Druk op je minst favoriete plek in de Wildlands"
    },
    {
        "id": "text-disclaimer-body",
        "en": "This is a school research project about Emmen Wildlands and is not affiliated with, endorsed by, or associated with Wildlands in any way. The research focuses on observing the target audience for zoo-themed games. Any collected data is stored securely and remains completely anonymous.",
        "nl": "Dit is een schoolonderzoek over Emmen Wildlands en staat op geen enkele manier in verband met, wordt niet ondersteund door en is niet geassocieerd met Wildlands. Het onderzoek richt zich op de observatie van de doelgroepen voor dierentuin-gerelateerde spellen. Alle verzamelde gegevens worden veilig opgeslagen en blijven volledig anoniem."
    },
    {
        "id": "text-disclaimer-title",
        "en": "Disclaimer",
        "nl": "Disclaimer"
    },
    {
        "id": "text-header-you",
        "en": "A little about you:",
        "nl": "Een beetje over jou:"
    },
    {
        "id": "text-question-you-age",
        "en": "How old are you?",
        "nl": "Hoe oud ben jij?"
    },
    {
        "id": "text-question-you-frequency",
        "en": "How often have you been at Wildlands?",
        "nl": "Hoe vaak ga je naar de Wildlands?"
    },
    {
        "id": "visit-frequency",
        "en": [
            "Never been",
            "Once or twice in total",
            "A few times a year",
            "A few times a month",
            "Almost every week",
            "Almost every day"
        ],
        "nl": [
            "Nog nooit geweest",
            "Een of twee keer in totaal",
            "Een paar keer per jaar",
            "Een paar keer per maand",
            "Bijna elke week",
            "Bijna elke dag"
        ]
    },
    {
        "id": "text-end",
        "en": "Completely done? Press the button below to submit your results!",
        "nl": "Helemaal klaar? Druk op het knopje hieronder om je antwoorden te versturen!"
    },
    {
        "id": "text-end-title",
        "en": "Almost There!",
        "nl": "Bijna daar!"
    },
    {
        "id": "text-send",
        "en": "Send",
        "nl": "Verstuur"
    },
    {
        "id": "text-why",
        "en": "What is your occupation?",
        "nl": "Wat is jouw beroep?"
    },
    {
        "id": "text-why2",
        "en": "Why did you choose this?",
        "nl": "Waarom koos je hier voor?"
    },
    {
        "id": "text-first-to-mind",
        "en": "What is the first that comes to mind when talking about Efteling?",
        "nl": "Wat komt er als eerst in je op als iemand het over de Efteling heeft?"
    },
    {
        "id": "text-header-efteling",
        "en": "Some questions about Wildlands:",
        "nl": "Wat vragen over de Wildlands:"
    },
    {
        "id": "text-story-element",
        "en": "Which element or story from the park is your favorite?",
        "nl": "Welk element of verhaal van het park is je favoriet?"
    },
    {
        "id": "text-header-game",
        "en": "Some questions about videogames",
        "nl": "Wat vragen over computerspelletjes"
    },
    {
        "id": "text-does-game",
        "en": [
            "Never",
            "A few times a year",
            "A few times a month",
            "About onces a week",
            "A few times a week",
            "Almost every day"
        ],
        "nl": [
            "Nooit",
            "Een paar keer per jaar",
            "Een paar keer per maand",
            "Bijna elke week",
            "Een paar keer per week",
            "Bijna elke dag"
        ]
    },
    {
        "id": "text-question-game-freq",
        "en": "How often do you play videogames?",
        "nl": "Hoe vaak speel jij computerspelletjes?"
    },
    {
        "id": "text-question-game-type",
        "en": "What type of videogames do you play?",
        "nl": "Wat voor computerspelletjes speel je?"
    },
    {
        "id": "text-question-game-important",
        "en": "What do you find the most important/enjoyable in videogames?",
        "nl": "Wat vind je het belangerijkste / leukste in computerspelletjes?"
    }
];


let currentLanguage = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".lang-btn").forEach(button => {
        button.addEventListener("click", function () {
            let language = this.getAttribute("data-lang"); 
            currentLanguage = language;
            document.querySelectorAll(".lang-btn").forEach(btn => btn.classList.remove("selected"));
            this.classList.add("selected");

            // Update text elements
            translations.forEach(entry => {
                let element = document.getElementById(entry.id);
                if (element) {
                    if (Array.isArray(entry[language])) {
                        updateDropdown(entry.id, entry[language]);
                    } else {
                        element.textContent = entry[language];
                    }
                }
            });

            console.log(`Language changed to: ${language}`);
        });
    });

    document.getElementById("lang-dutch").click();
});

function updateDropdown(selectId, optionsArray) {
    let selectElement = document.getElementById(selectId);
    if (selectElement) {
        selectElement.innerHTML = ""; // Clear existing options
        optionsArray.forEach(optionText => {
            let optionElement = document.createElement("option");
            optionElement.textContent = optionText;
            selectElement.appendChild(optionElement);
        });
    }
}

function getCurrentLanguage() {
    return currentLanguage;
}


function getCurrentLanguage() {
    return currentLanguage;
}