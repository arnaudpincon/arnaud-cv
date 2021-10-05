import React, {useEffect} from 'react';

const Mouse = () => {

    useEffect(() => {

        // Variables pour les élements du dom

        let earth = document.querySelector('#titlePortfolio');
        let moon = document.querySelector('#titleContact');
        let venus = document.querySelector('#titleAbout');
        let sun = document.querySelector('#sunButton');
        let lamp1 = document.querySelector('#lamp1On');
        let blockHover = false;
        let turnOff = true;

        // Variable pour gérer la souris

        const handleCursor = (e) => {
            document.querySelector('.cursor').getElementsByClassName.top = e.pageY + "px";
            document.querySelector('.cursor').getElementsByClassName.left = e.pageX + "px";
        };

        // Afficher ET masquer les titres au survol

        document.querySelectorAll('#vAbout').forEach((link) => {
            link.addEventListener('mouseover', function(){
                venus.classList.add('hovered');
            });
            link.addEventListener('mouseleave', function(){
                venus.classList.remove('hovered');
            });
        })

        document.querySelectorAll('#mContact').forEach((link) => {
            link.addEventListener('mouseover', function(){
                moon.classList.add('hovered');
            });
            link.addEventListener('mouseleave', function(){
                moon.classList.remove('hovered');
            });
        })

        document.querySelectorAll('#ePortfolio').forEach((link) => {
            link.addEventListener('mouseover', function(){
                earth.classList.add('hovered');

            });
            link.addEventListener('mouseleave', function(){
                earth.classList.remove('hovered');
            });
        })

        // Cas particulier du menu hamburger soleil

        const removeHover = () => { // Fonction pour remove menu hamburger soleil
            sun.classList.remove('hovered');
        }

        document.querySelectorAll('#sunButton').forEach((link) => {

            link.addEventListener('mouseover', function(){
                sun.classList.add('hovered');
            });

            link.addEventListener('mouseleave', removeHover);


            link.addEventListener('click', function(){ // Condition pour garder afficher lorsque l'on a cliqué sur le menu
                blockHover = !blockHover;
                if (blockHover === false){
                    console.log(blockHover);
                    link.addEventListener('mouseleave', removeHover);
                } else {
                    console.log(blockHover);
                    link.removeEventListener('mouseleave', removeHover);
                }
            });
        })

        document.querySelectorAll('.elementBurger').forEach((link) => { // Pour masquer le menu lorsque l'on clique sur la nav
            link.addEventListener('click', removeHover);
        })

        /* document.querySelectorAll('#lamp1On').forEach((link) => { // Pour masquer le menu lorsque l'on clique sur la nav
            link.addEventListener('click', function(){
                if (turnOff) {
                    lamp1.classList.add('off');
                    turnOff = false;
                } else {
                    lamp1.classList.remove('off');
                    turnOff = true;
                }
                
            });
        }) */


        
}, []);

return <span className="cursor"></span>

};

export default Mouse;