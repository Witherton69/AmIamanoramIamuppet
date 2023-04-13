// FUNCTION EXERCISE
// 1
function fozzieBear(){
    console.log(`Wocka Wocka!`);
  }
  fozzieBear(); 
  
  console.log('====================================');
  
  // 2
  function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
  }
  beaker(`Meep`);
 
  
  console.log('====================================');
  
  // 3
  function muppetShow(a, b){
    if (a === `Muppet` && b === `Show`){
      console.log("It's time to play the music. It's time to light the lights.");
    }
  }
  muppetShow(`Muppet`, `Show`); 

  muppetShow(`Sesame`, `Street`);
  
  console.log('====================================');
  
  // 4
  function kermit(){
    return "Kermit The Frog";
  }
  kermit(); 

  console.log(kermit()); 
  
  console.log('====================================');
  
  // 5
  function muppetShowSeasons(seasons){
    if (seasons === 5){
      return true;
    } else {
      return false;
    }
  }
  console.log(muppetShowSeasons(5)); 

  console.log(muppetShowSeasons(1)); 
  
  console.log('====================================');
  
  // 6
  const manOrMuppet = () => {
    console.log("Am I a man or am I a Muppet?");
  }
    
  manOrMuppet(); 
  
  console.log('====================================');
  
  // 7
  rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
  
  console.log(rainbowConnection()); 
  
  console.log('====================================');
  
  // 8
  // No
  
  // 9
  // Yes
  
  // 10a
  const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
  ];
  
  // 1b
  const upperMovies = newMuppetMovies.map(m => m.toUpperCase());
  
  console.log(upperMovies); 