// This function will listen to event when user click the player image and select a color from the dropdown list. It will set each player's color
$('a').click(function() {
    //console.log($(this).text().toLowerCase());
    $(this).parent().parent().prev().children('img').attr("src", `assets/images/${$(this).text().toLowerCase()}-player.png`);
    var classNames = $(this).parent().parent().parent().parent().attr("class").split(" ");
    if ($(`.${classNames[1]}`).attr("class").indexOf("left-court-left-player-container") != -1 ) {
        //Player A changed color
        playerA.color = $(this).text().toLowerCase();
    } else if ($(`.${classNames[1]}`).attr("class").indexOf("left-court-right-player-container") != -1 ) {
        //Player B changed color
        playerB.color = $(this).text().toLowerCase();
    } else if ($(`.${classNames[1]}`).attr("class").indexOf("right-court-left-player-container") != -1 ) {
        //Player C changed color
        playerC.color = $(this).text().toLowerCase();
    } else if ($(`.${classNames[1]}`).attr("class").indexOf("right-court-right-player-container") != -1 ) {
        //Player D changed color
        playerD.color = $(this).text().toLowerCase();
    };
});

// Variable to hold the macth type Singles/Doubles
function showHidePlayers(courtType, option, matchType) {
    if(option == 'hide') {
        hideElement(`.team-a-player-1-img`);
        hideElement(`#team-a-player-1`);
        hideElement(`.team-b-player-1-img`);
        hideElement(`#team-b-player-1`);
        if (courtType == "mini") {
            hideElement(`.mini-left-court-left-player-container`);
            hideElement(`#mini-team-a-player-1`);
            hideElement(`.mini-right-court-left-player-container`);
            hideElement(`#mini-team-b-player-1`);
        };
    } else {
        showElement(`.team-a-player-1-img`);
        showElement(`#team-a-player-1`);
        showElement(`.team-b-player-1-img`);
        showElement(`#team-b-player-1`);
        if (courtType == "mini") {
            showElement(`.mini-left-court-left-player-container`);
            showElement(`#mini-team-a-player-1`);
            showElement(`.mini-right-court-left-player-container`);
            showElement(`#mini-team-b-player-1`);
        };
    }
    gameMatchType = matchType;
};

function player (name, color, isVisible) {
    this.name = name;
    this.color = color;
    this.isVisible = isVisible;
};

$('#mini-team-a-player-1').on("change", function() { 
    playerA.name = getElementValue(`#mini-team-a-player-1`);
    setElementValue(`#team-a-player-1`, playerA.name)
});

$('#mini-team-a-player-2').on("change", function() { 
    playerB.name = getElementValue(`#mini-team-a-player-2`);
    setElementValue(`#team-a-player-2`, playerB.name)
});

$('#mini-team-b-player-1').on("change", function() { 
    playerC.name = getElementValue(`#mini-team-b-player-1`);
    setElementValue(`#team-b-player-1`, playerC.name)
});

$('#mini-team-b-player-2').on("change", function() { 
    playerD.name = getElementValue(`#mini-team-b-player-2`);
    setElementValue(`#team-b-player-2`, playerD.name)
});