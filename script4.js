  const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }];

// Années 70
  function bornInTheSeventies(x) {
     return x.year > 1969 && x.year < 1980;
  }
  
  let seventies = entrepreneurs.filter(bornInTheSeventies);
  console.log("Liste des entrepreneurs nés dans les années 70")
  console.log(seventies);

// Prénoms et noms
  names = [];
  for (let i=0; i < entrepreneurs.length ; i++){
    names[i]={ first: entrepreneurs[i].first,last: entrepreneurs[i].last};
  }
  console.log("Prénoms et noms des entrepreneurs")
  console.log(names);

// Ages actuels
  ages = [];
  for (let i=0; i < entrepreneurs.length ; i++){
    ages[i]={ year: 2022-entrepreneurs[i].year};
  }
  console.log("Ages actuels")
  console.log(ages);

// Merci Francky

function compare( a, b ) {
    if ( a.last < b.last ){
      return -1;
    }
    else{
      return 1;
    }
  }

  compared = entrepreneurs;
  entrepreneurs.sort( compare ); 
  console.log("Ordre alphabetique")
  console.log(compared);

