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
        parent_engagement: getField("parents-1"),
        education_importance: getField("parents-2"),
        activity_preference: getField("parents-3"),
        child_interest_factors: getField("parents-4"),
        zoo_app_usage: getField("parents-5"),
        mobile_game_acceptance: getField("parents-6"),
        ar_vr_experience: getField("parents-7")
        
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