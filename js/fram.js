innerNav();
innerFooter();

function innerNav(){
    const nav = document.getElementsByTagName('nav')[0];
    nav.innerHTML = `
    <ul>
    <li> 
      <h1><a href="index.html"> <span class="fa-solid fa-book" aria-hidden="true"></span>
      <span>Avishag Basel</span></a></h1>
    </li>
    <li> 
      <a href="index.html#projects-and-achievements">Projects & achievements</a>
    </li>  
    <li> 
      <a href="about.html">About</a>
    </li> 
    <li> 
       <a href="index.html#contact">Contact</a>
    </li>   
    <li> 
       <a href="https://www.linkedin.com/in/avishag-basel-96a79219a" target="_blank">
         <span class="fa-brands fa-linkedin" aria-hidden="true"> </span>
         <span class="sr-only">LinkedIn</span></a>
    </li>  
    <li> 
      <a href="https://github.com/AvishagBasel" target="_blank">
        <span class="fa-brands fa-square-git" aria-hidden="true"> </span>
        <span class="sr-only"> Github </span></a>
    </li>
    <li>
       <a href="#" class="button">Resume</a>
    </li>
  </ul>`;
}

function innerFooter(){
    const footer = document.getElementsByTagName("footer")[0];
    footer.innerHTML = `        <h2>Avishag Basel &middot; Student of Computer science</h2>
    <ul>
  <li> 
         <a href="https://www.linkedin.com/in/avishag-basel-96a79219a" target="_blank">
           <span class="fa-brands fa-linkedin" aria-hidden="true"> </span>
           <span class="sr-only">LinkedIn</span></a>
      </li>  
      <li> 
        <a href="https://github.com/AvishagBasel" target="_blank">
          <span class="fa-brands fa-square-git" aria-hidden="true"> </span>
          <span class="sr-only"> Github </span></a>
      </li>
          <li> 
        <a href="mailto:avishagbasel@gmail.com">
          <span class="fa-solid fa-envelope" aria-hidden="true"> </span>
          <span class="sr-only"> Email </span></a>
      </li> 
    </ul>
    <p><small> &#9786; I will be happy to hear from you.</small></p>`;
}