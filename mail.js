// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2BKeSCVpNJrC35WvTRB-rgxqPGf8ZU7E",
    authDomain: "complaints-85582.firebaseapp.com",
    databaseURL: "https://complaints-85582-default-rtdb.firebaseio.com",
    projectId: "complaints-85582",
    storageBucket: "complaints-85582.appspot.com",
    messagingSenderId: "392908589672",
    appId: "1:392908589672:web:131f4d386e4db0ce5409dd",
    measurementId: "G-7F9FL5LGZP"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  //reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  
  function submitForm(e) {
    e.preventDefault();
  var teamName = getElementVal("teamName");
    var branch = getElementVal("branch");
    var teamSize = getElementVal("teamSize");
  
    var leadName = getElementVal("leadName");
    var leadEmail = getElementVal("leadEmail");
    var leadPhone = getElementVal("leadPhone");
  
    var member1Name = getElementVal("member1Name");
    var member1Email = getElementVal("member1Email");
    var member1Phone = getElementVal("member1Phone");
  
    var member2Name = getElementVal("member2Name");
    var member2Email = getElementVal("member2Email");
    var member2Phone = getElementVal("member2Phone");
  
    var member3Name = getElementVal("member3Name");
    var member3Email = getElementVal("member3Email");
    var member3Phone = getElementVal("member3Phone");
    var utr = getElementVal("utr");
    saveMessages(teamName, branch, teamSize, leadName, leadEmail, leadPhone, member1Name, member1Email, member1Phone, member2Name, member2Email, member2Phone, member3Name, member3Email, member3Phone,utr);
    //   enable alert
    //document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    //setTimeout(() => {
    //  document.querySelector(".alert").style.display = "none";
    //}, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages=(teamName, branch,teamSize,leadName, leadEmail, leadPhone, member1Name, member1Email, member1Phone,
    member2Name, member2Email, member2Phone, member3Name, member3Email, member3Phone,utr) => {
      var newContactForm = contactFormDB.push();
    newContactForm.set({
      teamName:teamName,
      branch:branch,
      teamSize:teamSize,
      leadName:leadName,
      leadEmail: leadEmail,
      leadPhone:leadPhone,
      member1Name:member1Name,
      member1Email: member1Email,
      member1Phone:member1Phone,
      member2Name:member2Name,
      member2Email:member2Email,
      member2Phone: member2Phone,
      member3Name:member3Name,
      member3Email: member3Email,
      member3Phone:member3Phone,
      utr:utr
  
    });
  };
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };