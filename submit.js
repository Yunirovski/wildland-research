function submit()
{
    str = JSON.stringify({
        lang: getCurrentLanguage(), 
        age: getField("eftelingSlider"),
        visit_frequency: getField("visit-frequency"),
        favorite: GetFavoLocation(),
        favorite_why: getField("good-why"),
        leastFavorite: GetLeastFavoLocation(),
        leastFavorite_why: getField("bad-why"),
        first_to_mind: getField("first-to-mind"),
        story_element: getField("story-element"),
        adict: getField("text-does-game"),
        game_type: getField("game-type"),
        good_important: getField("good-important"),
        parent_engagement: getField("question1"),
        education_importance: getField("question2"),
        activity_preference: getField("question3"),
        child_interest_factors: getField("question4"),
        zoo_app_usage: getField("question5"),
        mobile_game_acceptance: getField("question6"),
        ar_vr_experience: getField("question7")
    });


    console.log(str);

    fetch("https://script.google.com/macros/s/AKfycbyjrfSOcd1YuhKyKqE05-Wxd4oF5YMSLkg_L86gp3UYHDFp35LaYx0eRg0jhTi2Cy4F6A/exec", {
        redirect: "follow",
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: str
    })
    .then(response => response.text())
    .then(data => console.log("Response from Google Apps Script:", data))
    .catch(error => console.error("Error:", error));

    const element = document.getElementById("questions");
    element.remove();

    const flags = document.getElementById("lang-buttons");
    flags.innerHTML = "<p>";

    window.scrollTo(0, 0);

    const text = document.getElementById("lang-title");
    text.innerHTML = "Thank you!<p> Bedankt!"
}
function getField(a)
{
    return document.getElementById(a).value;
}