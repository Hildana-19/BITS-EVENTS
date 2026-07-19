const sections = document.querySelectorAll("section");


const revealSection = () => {


    sections.forEach(section => {


        const position = section.getBoundingClientRect().top;


        const screenPosition = window.innerHeight - 120;



        if(position < screenPosition){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }


    });


};





window.addEventListener("scroll", revealSection);

sections.forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(40px)";
    section.style.transition="0.8s ease";

});



window.addEventListener("load", revealSection);

const eventCards = document.querySelectorAll(".event-card");



eventCards.forEach(card=>{


    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });



    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });



});

const registerButtons = document.querySelectorAll(
    ".primary-btn"
);



registerButtons.forEach(button=>{


    button.addEventListener("click",()=>{


        console.log(
            "Redirecting student to registration page..."
        );


    });



});

window.addEventListener("load",()=>{


    const hour = new Date().getHours();


    let message;



    if(hour < 12){

        message="Good Morning! Welcome to CERMS.";

    }

    else if(hour < 18){

        message="Good Afternoon! Discover campus events.";

    }

    else{

        message="Good Evening! Explore upcoming activities.";

    }



    console.log(message);



});

function loginUser(){


    let email =
    document.getElementById("email")?.value;


    let password =
    document.getElementById("password")?.value;




    if(email && password){


        alert(
            "Login successful. Welcome to CERMS!"
        );


    }

    else{


        alert(
            "Please enter your login information."
        );


    }


}

function registerEvent(){


    alert(
        "Your event registration has been submitted successfully!"
    );

}

