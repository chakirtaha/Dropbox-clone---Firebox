import React ,{ useEffect}from 'react'
import './Dashboard.css' 
import pic1 from'./pic1.jpg' 
import pic2 from'./pic2.jpg'

import pic4 from'./pic4.jpg'
import M from 'materialize-css'
 const Dashboard =() =>{

  useEffect(()=>{
    let elements =document.querySelectorAll(".parallax");
    M.Parallax.init(elements);
    
  }, []);
 
  return (

  <body>
   
    <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
            <div className="container">
                <br/><br/>
                <h1 className="header center teal-text text-lighten-1"><i className="material-icons medium" >whatshot</i>FireBox</h1>
                <div className="row center">
                    <h5 className="header col s12 teal-text lighten-5"> <b>Tout ce dont les équipes ont besoin dans un endroit centralisé</b></h5>
                    <h4 className="header col s12 black-text"> Firebox  est bien plus qu’un espace de stockage sécurisé pour les fichiers. C’est un espace de travail intelligent qui centralise les équipes, les outils et les contenus.</h4>
                </div>
                <div className="row center">
                    <a href='/signup' id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Essayer gratuitement pendant 30 jours</a>
                </div>
                <br/><br/>
                <div className="parallax"><img src={pic2} alt={"Unsplashed background img 1"} /></div>
                
                
           </div>
           
       </div>

       
  </div>
  <div className="container">
    <div className="section">

    
    <div className="row">
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">next_week</i></h2>
          <h5 className="center">Centralisez les contenus de votre équipe</h5>

          <p className="light">Créez, stockez et partagez des contenus cloud avec Google Docs, Sheets et Slides, Microsoft Office et FireBox Paper, et regroupez-les avec les fichiers standard de votre FireBox.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">group</i></h2>
          <h5 className="center">Collaborez en équipe, partout et à tout moment</h5>

          <p className="light">Accédez facilement au travail de votre équipe sur votre ordinateur, votre appareil mobile ou le navigateur Web de votre choix.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">devices</i></h2>
          <h5 className="center">Gagnez en sérénité</h5>

          <p className="light">Grâce à notre infrastructure distribuée sécurisée et à nos outils d'administration offrant contrôle et visibilité, les données de votre entreprise sont en sécurité dans FireBox.</p>
        </div>
      </div>
    </div>

  </div>
</div>
  <div className="parallax-container valign-wrapper">
     <div className="section no-pad-bot">
         <div className="container">
             <div className="row center">
                <h5 className="header col s12 black-text">Offrez un espace de travail intelligent à votre entreprise </h5>
           </div>
        </div>
        <div className="parallax"><img src={pic1} alt={"Unsplashed background img 1"} /></div>
     </div>
    
 </div>



 
 <div className="container">
    <div className="section">

    <div className="row">
      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">next_week</i></h2>
          <h5 className="center">Transformez vos dossiers</h5>

          <p className="light">FireBox Spaces rassemble vos fichiers traditionnels et vos contenus cloud au même endroit. Vos présentations PowerPoint cohabitent ainsi avec vos Google Docs, vos tableaux Trello et tous les autres outils que votre équipe souhaite utiliser.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">speed</i></h2>
          <h5 className="center">Retrouvez rapidement ce dont vous avez besoin</h5>

          <p className="light">Avec les suggestions intelligentes de fichiers et de dossiers, votre équipe garde une longueur d'avance. Tous les utilisateurs ont accès aux contenus dont ils ont besoin, quand ils en ont besoin.</p>
        </div>
      </div>

      <div className="col s12 m4">
        <div className="icon-block">
          <h2 className="center brown-text"><i className="material-icons">cloud_done</i></h2>
          <h5 className="center">Utilisez vos outils de collaboration préférés</h5>

          <p className="light">Regroupez les fichiers de votre équipe et les conversations correspondantes dans FireBox en connectant des outils tels que Slack et Zoom.</p>
        </div>
      </div>

    </div>
  </div>
  </div>
  <div className="parallax-container valign-wrapper">
    <div className="section no-pad-bot">
      <div className="container">
        <div className="row center">
          <h5 className="header col s12 black-text">Multipliez les possibilités avec FireBox Business</h5>
        </div>
      </div>
    </div>
    <div className="parallax"><img src={pic4} alt="Unsplashed background img 1" /></div>
  </div>

  
  <footer className="page-footer teal">
    <div className="container">
      <div className="row">
        
        <div className="col s12 center " >
          <h5 className="white-text">Follow us on social media for special offers:</h5>
          
         
            <a className="white-text" href="#!" ><i className="fab fa-facebook small fa-4x" href="#!"></i></a>
            <a className="white-text" href="#!"><i className="fab fa-twitter small fa-4x" href="#!"></i></a>
            <a className="white-text" href="#!"><i className="fab fa-linkedin small fa-4x" href="#!"></i></a>
            <a className="white-text" href="#!"><i className="fab fa-google small fa-4x" href="#!"></i></a>
              
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      <p className="white-text left"> A dropbox clone made by Chakir Taha and Bideq Salma</p>
      <p className="flow-text right"> FireBox  &copy; 2020 </p>
     
      </div>
      
    </div>
  </footer>
 
  <script src="http://materializecss.com/js/init.js"></script>
  
</body>


  )}

export default Dashboard