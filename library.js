//Basically just adds a word to your library
function addWord(library, word){
  if(library == undefined){
    console.log("Remember to insert an array into addWord function");
    return;
  }

  if(word == undefined){
    console.log("Remember to insert a word which is a string into addWord function");
    return;
  }

  library.push(word);
}

//Gets the index of a word inside your word library
function getWordIndex(library, word){
  if(library == undefined){
    console.log("Remember to insert an array into getWordIndex function");
    return("Nothing");
  }

  if(word == undefined){
    console.log("Remember to insert a word which is a string into getWordIndex function");
    return("Nothing");
  }

  for(i in library){
    if(library[i] == word){
      return(i);
    }  
    else{
     continue; 
    }
  console.log("Index not found for getWordIndex " + word + " it may not be in the library you inputted");
  return(0);
  }
}

//Changes the case based on the library's data
function sameCase(library){
  
  for(i in library){
    if(library[i] == library[i].toLowerCase()){
      
    }
  }  
}
