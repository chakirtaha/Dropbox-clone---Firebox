import React from 'react'
import './Dashboard.css' 

const Dashboard = () => {
  return (
  <body>
  
    <div id="index-banner" class="parallax-container">
        <div class="section no-pad-bot">
            <div class="container">
                <br/><br/>
                <h1 class="header center teal-text text-lighten-2">FireBox</h1>
                <div class="row center">
                    <h5 class="header col s12 light">Tout ce dont les équipes ont besoin dans un endroit centralisé</h5>
                    <h4> Firebox  est bien plus qu’un espace de stockage sécurisé pour les fichiers. C’est un espace de travail intelligent qui centralise les équipes, les outils et les contenus.</h4>
                </div>
                <div class="row center">
                    <a href='/signup' id="download-button" class="btn-large waves-effect waves-light teal lighten-1">Essayer gratuitement pendant 30 jours</a>
                </div>
                <br/><br/>

           </div>
           
       </div>

       
  
  </div>
  <div class="parallax-container valign-wrapper">
     <div class="section no-pad-bot">
         <div class="container">
             <div class="row center">
                <h5 class="header col s12 light">Multipliez les possibilités avec Dropbox Business</h5>
           </div>
        </div>
     </div>
    
 </div>

<div class="container">
    <div class="section">

    
    <div class="row">
      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
          <h5 class="center">Centralisez les contenus de votre équipe</h5>

          <p class="light">Créez, stockez et partagez des contenus cloud avec Google Docs, Sheets et Slides, Microsoft Office et Dropbox Paper, et regroupez-les avec les fichiers standard de votre Dropbox.</p>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text"><i class="material-icons">group</i></h2>
          <h5 class="center">Collaborez en équipe, partout et à tout moment</h5>

          <p class="light">Accédez facilement au travail de votre équipe sur votre ordinateur, votre appareil mobile ou le navigateur Web de votre choix.</p>
        </div>
      </div>

      <div class="col s12 m4">
        <div class="icon-block">
          <h2 class="center brown-text"><i class="material-icons">settings</i></h2>
          <h5 class="center">Gagnez en sérénité</h5>

          <p class="light">Grâce à notre infrastructure distribuée sécurisée et à nos outils d'administration offrant contrôle et visibilité, les données de votre entreprise sont en sécurité dans Dropbox.</p>
        </div>
      </div>
    </div>

  </div>
</div>

 
 <div class="container">
    <div class="section">

      <div class="row">
        <div class="col s12 center">
          <h3><i class="mdi-content-send brown-text"></i></h3>
          <h4>Contact Us</h4>
          <p class="left-align light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non consequat magna fermentum ac. Cras ut ultricies eros. Maecenas eros justo, ullamcorper a sapien id, viverra ultrices eros. Morbi sem neque, posuere et pretium eget, bibendum sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget dignissim mauris, non tristique erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;</p>
        </div>
      </div>

    </div>
  </div>


  
  <footer class="page-footer teal">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a class="white-text" href="#!">Link 1</a></li>
            <li><a class="white-text" href="#!">Link 2</a></li>
            <li><a class="white-text" href="#!">Link 3</a></li>
            <li><a class="white-text" href="#!">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="brown-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>


</body>


  )
}

export default Dashboard