import pic2 from "../img/pic2.jpg"
import proj1 from "../img/proj1.png"
import proj2 from "../img/proj2.JPG"
import projj3 from "../img/projj3.avif"
import proj4 from "../img/proj4.jpg"

import javafx from '../img/javafx.jpg';
import wordPress from '../img/wordPress.png';



export let colors = ["#c3ebf4", "#0f056b"];


export const info = {
    firstName: "Nada",
    lastName: "HANSAL",
    initials: "About ME", // the example uses first and last, but feel free to use three or more if you like.
    position: "Étudiante en Ingénierie Informatique et Technologies Émergentes",
    selfPortrait: pic2, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    
    miniBio: "Je suis passionnée par l'univers de la technologie et je me consacre à acquérir les compétences nécessaires pour devenir une ingénieure informatique accomplie. Mon parcours académique m'a permis de développer une solide compréhension des principes fondamentaux de l'informatique.",
    socials: [
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        }

    ],
   
    skills: {
        name: [
            'html',
            'css3',
            'js',
            'bootstrap',
            'laravel',
            'php',
            'java',
            'python',
            'react',
            'node'
        ],
        
    },
    
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Site de géolocalisation des pharmacies avec MERN",
            image: proj1
        },
        {
            title: "Site de la faculté polydisciplinaire de SB avec WordPress",
            image: proj2
        },
        {
            title: "Site Web de gestion des salles informatiques avec Laravel",
            image: projj3
        },
        {
            title: "Application de sécurisation de la voix sur IP avec Java",
            image: proj4
        },
        
    ],

    certificateImages: [javafx, wordPress],
}