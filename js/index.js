(function() {
  
  /* http://stackoverflow.com/questions/5699127/how-to-find-out-the-position-of-the-first-occurrence-of-the-difference-between-t */
  function findDiff(a, b) {
    a = a.toString();
    b = b.toString();
    for (var i = 0; i < Math.min(a.length, b.length); i++) {
      if (a.charAt(i) !== b.charAt(i)) { return i; }
      
    }
    if (a.length !== b.length) { return Math.min(a.length, b.length); }
    return -1;
    
  }
  
  data = [
    "Street",
    "Punk",
    "Pills", 
    "Street Punk Pills",
    "Street Punk Pills Your link to TheVerse",
    "Street Punk Pills A collection of 10,000 + 103 unique blended pills fusing Past, Present, and Future",
    "The Street Punk Pills promotes the meta-well-being of Punks",
    "The Street Punk Pills promotes the meta-well-being of Apes",
    "The Street Punk Pills promotes the meta-well-being of Cats",
    "The Street Punk Pills promotes the meta-well-being of Kongs",
    "The Street Punk Pills promotes the meta-well-being of Toadz",
    "The Street Punk Pills promotes the meta-well-being of Babys", 
    "The Street Punk Pills promotes the meta-well-being of Kids", 
    "The Street Punk Pills promotes the meta-well-being of Mutants", 
    "The Street Punk Pills promotes the meta-well-being of Doodles",
    "The Street Punk Pills promotes the meta-well-being of Lions",
    "The Street Punk Pills promotes the meta-well-being of Doodles", 
    "The Street Punk Pills promotes the meta-well-being of Women", 
    "The Street Punk Pills promotes the meta-well-being of Doodles Men and all cyber-living and non-living things.",
    "Let's face it: We All Need Pills!"
    ];
  
  data_ss = data.map(function(d, i){
    return ((i===0) ? 0 : findDiff(data[i], data[i - 1]));
  });
  data_ss.shift(); // remove 1st element!
  
  jQuery("#typed").typed({
      strings: data,
      stringsstops: data_ss,
      startDelay: 3500,
      typeSpeed: 130
  });
  
})();