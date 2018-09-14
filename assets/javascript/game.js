// Global Variables
var wins = 0;
var loss = 0;
var count = 0;
var images = ["./assets/images/Aqua_Crystal.png", "./assets/images/Earth_Crystal.png","./assets/images/Flame_Crystal.png","./assets/images/Wind_Crystal.png" ];
var goalNumber = "";

//Functions to use

    //randomizes goal number starting at 19 and going to 120
    function randomizeGoalNumber() {
        goalNumber = Math.floor(Math.random() * 102) + 19;
    }
    // This is a for loop function. first it defines crystals as images
    //second it adds a class of crystals so we can effect all of them
    //third it adds the source based on the images variable defined above
    //fourth it adds a value to each html element with a randomized number
    //fifth appends each iteration to the div crystalcontainer
    function crystalReset() {
        for (var i=0; i<images.length; i++) {
            var crystals = $("<img>");
            crystals.addClass("crystals");
            crystals.attr("src", images[i]);
            crystals.attr("value", Math.floor(Math.random() *12 + 1));
            $("#crystalcontainer").append(crystals);


        }
    }

    //This is a reset for what we see once we win or lose
    function softReset () {
        $(".crystals").remove();
        $("#wins").html("Wins: " + wins);
        $("#losses").html("Losses: " + loss);
        $("#currentScore").html(count);
        $("#GoalScore").html("Goal: " + goalNumber);
        
    }

    //Ideally call this at the beginning to ensure everything is in default
    function hardReset () {
        randomizeGoalNumber();
        count = 0;
        softReset();
        crystalReset();
    }

    //initial start up
    randomizeGoalNumber();
    softReset();
    crystalReset();
    
    //On click event

    function clicking() {
        //Ok... this is the most complicated line (I found help online for this)
        //take the "value" (which we determined earlier), and when clicked add it to counter after turning it into an integer.
        //this only applies to elements that have value attributes, so that just means the crystals at the moment. 
        count += parseInt($(this).attr("value"));
        $("#currentScore").html(count);
        if (count === goalNumber){
            wins++;
            hardReset();
        }

        else if (count > goalNumber) {
            loss++;
            hardReset();
        };
    };

    $(document).on("click", ".crystals", clicking);
    



    