
// referancempent des elements

const tab_main_button = document.querySelectorAll(".main_menu > button");
const tab_main_menu = document.querySelectorAll("main > section");
const back_button = document.querySelector(".back_button");
const restart_btn = document.querySelector(".restart_btn");
const start_btn = document.querySelector(".start_btn");
const section_tableaux = document.querySelector(".section_tableaux");
const tab_table = document.querySelectorAll(".section_tableaux > table");
const yes_btn = document.querySelector(".yes_btn");
const no_btn = document.querySelector(".no_btn");
const alert_close_game = document.querySelector(".alert_close_game");
const tab_acg_btns = document.querySelectorAll(".acg_btns > button");
const main_inhibiting = document.querySelector(".main_inhibiting");
const game_inst = document.querySelector(".game_inst");
const tab_table_cells = document.querySelectorAll(".section_tableaux > table td");
const game_loader = document.querySelector(".game_loader");
const random_number = document.querySelector(".random_number");
const tab_game_logo = document.querySelectorAll(".game_logo div span");




/*DEBUT_____________*com.boris3.0_bibliotheque*_____________*/

// function d'ouverure de fenêtre

function open_window(window_section, window_position)
{
    for(i=0; i < window_section.length; i++)
    {
        window_section[i].style.display = "none";
    }
    window_section[window_position].style.display = "flex";
}

// function d'animation de boutton de menu pas translation horizontale retarder

function add_anim_in_time (elmt, class_anim, durtn)
{
    elmt.classList.add(class_anim)
    setTimeout
    (
        function ()
        {
            elmt.classList.remove(class_anim)
        }
        ,durtn
    )

}

/*_____________*acom.boris3.0_bibliotheque*_____________FIN*/



/*DEBUT_____________*ajout des evenements*_____________*/

// main menu events

tab_main_button[0].addEventListener("click", open_jouer);
tab_main_button[1].addEventListener("click", open_mode_emploi);
tab_main_button[2].addEventListener("click", open_apropos);

// start button event

start_btn.addEventListener("click", f_start_btn);

// restart button event


restart_btn.addEventListener("click", f_restart);


// button yes event

yes_btn.addEventListener("click", f_yes_btn);

// button no event

no_btn.addEventListener("click", f_no_btn);

// back button event

back_button.addEventListener("click", f_back_button);

// bouttons de confirmation pour interompe une partie en cour

tab_acg_btns[0].addEventListener("click", fnt_acg_confirmed);

tab_acg_btns[1].addEventListener("click", fnt_acg_no_confirmed);


// evenement de l'ecrant d'hinibation de l'interface de jeux

main_inhibiting.addEventListener("click", f_main_inhibiting);

/*_____________*ajout des evenements*_____________FIN*/



/*DEBUT_____________*Initialisation des variavles globaux*_____________*/


var var_translate = 110;

var validation_number = 0;

var game_started = false;

var choice_finish = false;

tab_choice = [];

var choice_number = undefined

// Les tableaux de choix

// creation du tableau complet
const full_tab = [];

for (let i = 1; i <= 64; i++) 
{
    full_tab.push(i);
}

var finaly_tab = Array.from(full_tab);

const tab_A = [
    1, 2, 3, 4,
    9, 10, 11, 12,
    17, 18, 19, 20,
    25, 26, 27, 28,
    33, 34, 35, 36,
    41, 42, 43, 44,
    49, 50, 51, 52,
    57, 58, 59, 60
  ];


const tab_B = [
    1, 2, 3, 4,
    9, 10, 11, 12,
    17, 18, 19, 20,
    25, 26, 27, 28,
    37, 38, 39, 40,
    45, 46, 47, 48,
    53, 54, 55, 56,
    61, 62, 63, 64
  ];

const tab_C = [
    1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 15, 16,
    33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48
  ]  

const tab_D = [
    1, 2, 5, 6,
    9, 10, 13, 14,
    17, 18, 21, 22,
    25, 26, 29, 30,
    33, 34, 37, 38,
    41, 42, 45, 46,
    49, 50, 53, 54,
    57, 58, 61, 62
  ];
  
const tab_E = [
    1, 3, 5, 7,
    9, 11, 13, 15,
    17, 19, 21, 23,
    25, 27, 29, 31,
    33, 35, 37, 39,
    41, 43, 45, 47,
    49, 51, 53, 55,
    57, 59, 61, 63
  ];

const tab_F = [
    1, 2, 3, 4, 5, 6, 7, 8,
    17, 18, 19, 20, 21, 22, 23, 24,
    33, 34, 35, 36, 37, 38, 39, 40,
    49, 50, 51, 52, 53, 54, 55, 56
  ];


const all_tab = [tab_A, tab_B, tab_C, tab_D, tab_E, tab_F] //tableau contenant la referance de tous les tableau de choix

  
// function pour generer un nombre pseudo-aleatoire

function generateRandomNumber(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function pour l'animation de suite de nombre aleatoire

var randomNumberElement = document.querySelector('.random_number');
var intervalId = setInterval
(
    function() 
    {
      var randomNumber = generateRandomNumber(1, 64);
      randomNumberElement.innerText = randomNumber;
    }
    ,100
);

/*_____________*Initialisation des variavles globaux*_____________FIN*/




/*DEBUT_____________*fonctions des evenements*_____________*/

// code universel pour chaque fenetre du menu ouvert

function main_windows_open()
{
    document.querySelector(".game_logo div.d1 ").classList.add("displayNone");
    for(i=0; i<tab_game_logo.length; i++)
    {
            
        tab_game_logo[i].classList.add("displayNone");
    }
    back_button.classList.remove("displayNone");
}

// fonction d'ouverture du menu jouer

function open_jouer()
{
    open_window(tab_main_menu, 1);
    main_windows_open()
    for(i=0; i<tab_table.length; i++)
    {
        
        add_anim_in_time(tab_table[i], "gradual_onset_anim", 1000);

    }
    add_anim_in_time(game_inst, "big_scal_anim", 450);
    setTimeout
    (
        function ()
        {
            start_btn.classList.remove("displayNone");
            add_anim_in_time(start_btn, "short_scal_anim", 250);
        }
        ,950
    )

}

// function pour le boutton rejouer

function f_restart()
{
    setTimeout
    (
        function ()
        {
            start_btn.classList.remove("displayNone");
            add_anim_in_time(start_btn, "short_scal_anim", 250);
        }
        ,950
    )
    game_inst.classList.add("displayNone");
    setTimeout
    (
        function ()
        {
            game_inst.classList.remove("displayNone");
            add_anim_in_time(game_inst, "big_scal_anim", 450);
        }
        ,1000
    )
    var_restart()
    infc_restart()
}



function open_mode_emploi()
{
    open_window(tab_main_menu, 2);
    main_windows_open()
}

function open_apropos()
{
    open_window(tab_main_menu, 3);
    main_windows_open()
}


function f_game_inst_anim()
{
    game_inst.classList.add("scaleZero");
    setTimeout
    (
        function ()
        {
            game_inst.classList.remove("scaleZero");
            add_anim_in_time(game_inst, "short_scal_anim", 250);
            if(!choice_finish)
            {
                game_inst.textContent="votre nombre est-il présent danc ce tableau ?";   
            }
        }
        ,950
    )
}


function f_start_btn()
{
    game_started = true;
    game_inst.textContent="votre nombre est-il présent danc ce tableau ?";   
    f_game_inst_anim();
    section_tableaux.style.transform ="translateX(220rem)";
    for(i=0; i<tab_table.length; i++)
    {
        
        add_anim_in_time(tab_table[i], "scale_back_forth_anim", 1000);

    }
    start_btn.classList.add("scaleZero");
    setTimeout
    (
        function ()
        {
            start_btn.classList.add("displayNone");
            yes_btn.classList.remove("displayNone");
            no_btn.classList.remove("displayNone");
            add_anim_in_time(yes_btn, "short_scal_anim", 250);
            add_anim_in_time(no_btn, "short_scal_anim", 250);
        
        }
        ,700
    )

}


// fonction reinisilosation des variable

function var_restart()
{
    game_started = false;
    var_translate = 110;
    validation_number = 0;

    choice_number = undefined

    finaly_tab = Array.from(full_tab);


    intervalId = setInterval
    (
    function() 
    {
      var randomNumber = generateRandomNumber(1, 64);
      randomNumberElement.innerText = randomNumber;
    }
    ,100
    );

}

// fonction reinisilosation de l'interface

function infc_restart()
{
    main_inhibiting.classList.add("displayNone");
    section_tableaux.style.transform ="translateX(330rem)";
    yes_btn.classList.add("displayNone");
    no_btn.classList.add("displayNone");
    start_btn.classList.remove("scaleZero");
    start_btn.classList.add("displayNone");
    restart_btn.classList.add("displayNone");
    game_inst.innerHTML="Choisissez un nombre dans votre cœur <br/> puis appuyez sur demarrer"
    yes_btn.classList.remove("scaleZero");
    no_btn.classList.remove("scaleZero");
    game_loader.classList.add("displayNone");
    game_loader.classList.remove("game_loader_none");
    random_number.style.fontSize = "3rem"
    game_inst.classList.remove("scaleZero");
    main_inhibiting.style.backgroundColor = "transparent"
    game_inst.classList.remove("inst_game_over");

}


/*DEBUT_____________*Script choix valider*_____________*/

// function à executer lors du choix entre OUI ou NON

function valideted_choice()
{
    if(validation_number <= 4) //si les textes d'instructions de tous les tableaux ne sont pas encore animé
    {
        f_game_inst_anim();

    }
    if(validation_number <= 5) //si la table de verité liée aux tableaux n'est pas encore complète
    {        
        main_inhibiting.classList.remove("displayNone");
        setTimeout
        (
            function ()
            {
                main_inhibiting.classList.add("displayNone");
            }
            ,1000
        )
        section_tableaux.style.transform =("translateX("+var_translate+"rem)");
        for(i=0; i<tab_table.length; i++)
        {
            
            add_anim_in_time(tab_table[i], "scale_back_forth_anim", 1000);
    
        }
         var_translate = var_translate - 110;
    }

    if(validation_number == 5) //si la table de verité liée aux tableaux est complète
    {
        choice_finish = true;
        f_choice_finish();
    }

    validation_number++;

}

//  function a excuter lorsque la table de vérité est complète

function f_choice_finish()
{

    // script pour la logique

    choice_number = finde_number_choice(tab_choice, finaly_tab, all_tab)

    setTimeout
    (
        function() 
        {
            game_started = false;
        }
        ,4000
    );

    //  script pour l'interface

    game_inst.innerHTML="Sondage de votre cœur terminé <br/>vous avez choisi"
    game_inst.classList.add("inst_game_over");
    game_inst.classList.add("scaleZero");
    setTimeout
    (
        function ()
        {
            game_inst.classList.remove("scaleZero");
            add_anim_in_time(game_inst, "big_scal_anim", 450);
            restart_btn.classList.remove("displayNone");
        }
        ,3650
    )
    yes_btn.classList.add("scaleZero");
    no_btn.classList.add("scaleZero");
    setTimeout
    (
        function ()
        {
            yes_btn.classList.add("displayNone");
            no_btn.classList.add("displayNone");
            add_anim_in_time(game_loader, "gradual_onset_anim", 500);
            game_loader.classList.remove("displayNone");
        }
        ,300
    )
    setTimeout
    (
        function() 
        {
            clearInterval(intervalId);
            document.querySelector('.random_number').innerText = choice_number;
            add_anim_in_time(random_number, "gradual_onset_anim2", 500);
        }
        ,2200
    );
    setTimeout
    (
        function() 
        {
            game_loader.classList.add("game_loader_none");
            random_number.style.fontSize = "10rem"
        }
        ,3000
    );


}

// function lors du clique sur le button OUI

function f_yes_btn ()
{
    tab_choice[validation_number] = true;
    add_anim_in_time(yes_btn, "btn_clicked_anim1", 500);
    valideted_choice();
}

// function lors du clique sur le button NON

function f_no_btn ()
{
    tab_choice[validation_number] = false;
    add_anim_in_time(no_btn, "btn_clicked_anim1", 500);
    valideted_choice();
}

// function qui détermine le nombre choisi par l'utilisateur

function finde_number_choice(bool_tab, cmprs_tab, current_tab)
{

    for(let i=0; i<tab_choice.length; i++)
    {
        if (bool_tab[i]) 
        {
            cmprs_tab = cmprs_tab.filter(element => cmprs_tab.includes(element) && current_tab[i].includes(element));
        }
        else 
        {
            cmprs_tab = cmprs_tab.filter(element => !(current_tab[i].includes(element)));
        }
    }

    return cmprs_tab;

}

// function du boutton retour

function f_back_button()
{
    fnt_menu_items_translate_anim(tab_main_button)
    add_anim_in_time(back_button, "btn_clicked_anim1", 500);
    clearInterval(intervalId);
    if(game_started)
    {
        main_inhibiting.style.backgroundColor = "#160f276b"
        main_inhibiting.classList.remove("displayNone");
        alert_close_game.classList.remove("displayNone");
        add_anim_in_time(alert_close_game, "gradual_onset_anim2", 500);
    }
    else
    {
        add_anim_in_time(back_button, "short_scal_anim", 300);
        open_window(tab_main_menu, 0);
        back_button.classList.add("displayNone");
        var_restart();
        infc_restart();
    }
    if(!game_started)
    {
        document.querySelector(".game_logo div.d1 ").classList.remove("displayNone");
        for(i=0; i<tab_game_logo.length; i++)
        {
                
            tab_game_logo[i].classList.remove("displayNone");
        }
    }
}

//  function à executer au niveau de la boite d'alerte losqu'on veut interrropme une partie en cours

function fnt_acg_confirmed()
{
    game_started = false;
    alert_close_game.classList.add("displayNone");
    f_back_button();
}

function fnt_acg_no_confirmed()
{
    add_anim_in_time(alert_close_game, "gradual_disappearance_anim", 500);
    main_inhibiting.classList.add("displayNone");
    main_inhibiting.style.backgroundColor = "transparent"
    setTimeout(
        function ()
        {
            alert_close_game.classList.add("displayNone");
        }
        ,400
    )
}

// function lors du clique sur l'écrant d'hinibation de l'interface

function f_main_inhibiting()
{
    add_anim_in_time(alert_close_game, "gradual_onset_anim2", 500); 
}



/*_____________*Script choix valider*_____________FIN*/



/*_____________*fonctions des evenements*_____________FIN*/





/*DEBUT_____________*Fonction a executer dès le chargement de la pager*_____________*/

// function d'animation du logo

function f_game_logo()
{
    for(i=0; i<tab_game_logo.length; i++)
    {
        
        tab_game_logo[i].classList.add("lgo_game_anim");

    }
    document.querySelector(".game_logo div.d1").classList.add("gradual_onset_anim");
    setTimeout
    (
        function ()
        {
            for(i=0; i<tab_game_logo.length; i++)
            {
                
                tab_game_logo[i].classList.add("zeroRem");
            }
        }
        ,2010
    )
}

// function d'animation translate horizontale de boutton de menu

function fnt_menu_items_translate_anim(tab_section)
{
    for(i=0; i < tab_main_button.length; i++)
    {
        tab_section[i].style.transform = "translateX(150rem)";
        tab_section[i].classList.add("menu_items_translate_anim");
        tab_section[i].style.animationDelay = (i * 0.1+"s")
    }

    setTimeout
    (
    function ()
    {
        for(i=0; i < tab_main_button.length; i++)
        {
            tab_section[i].style.transform = "translateX(0rem)";
        }
    }
    ,800
    )
}

 // Code à exécuter lorsque la page et tous les éléments externes sont chargés



window.addEventListener('load', function() {
    this.document.querySelector(".loading_page").classList.add("displayNone");
    fnt_menu_items_translate_anim(tab_main_button);
    f_game_logo();
});


/*_____________*Fonction a executer dès le chargement de la pager*_____________FIN*/


// script du curseur personnaliser

const cursor = document.querySelector(".cursor")

//  deplacer le curseur personnzliser sur la page

document.addEventListener // on ajoute l'evenement directement sur document pour afecter le document en entier

("mousemove", e => 
    {
        cursor.style.left = `${e.pageX-20}px`;
        cursor.style.top = `${e.pageY-20}px`;

    }
)


// faire disparaite le curseur quand on quite la page

document.addEventListener("mouseleave", () => 
    {
        cursor.classList.add("displayNone");
    }
);

document.addEventListener("mouseenter", () => 
    {
        cursor.classList.remove("displayNone");
    }
);

// animation du curseur au clique

document.addEventListener('click', ()=>
    {
        add_anim_in_time(cursor, "cursor_click_anim", 500);
        cursor.classList.remove("cursor_hover_anim");  

    }
)

// modifier l'aparence du curseur au survole d'un bouton

const tab_all_btns =  document.querySelectorAll("body button")

document.querySelector("body a").addEventListener("mouseenter", () =>
    {
        cursor.classList.add("cursor_hover_anim");  
    }
)

document.querySelector("body a").addEventListener("mouseout", () =>
    {
        cursor.classList.remove("cursor_hover_anim");  
    }
)

for(i=0; i<tab_all_btns.length; i++)
{
    tab_all_btns[i].addEventListener("mouseover", () =>
        {
            cursor.classList.add("cursor_hover_anim");  
        }

    )
}

// restaurer l'aparence du curseur apre survole

for(i=0; i<tab_all_btns.length; i++)
{
    tab_all_btns[i].addEventListener("mouseout", () =>
        {
            cursor.classList.remove("cursor_hover_anim");  
        }

    )
}
