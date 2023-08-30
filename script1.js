function compareJSONObjects(obj1, obj2) {
    const sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    const sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    return sortedObj1 === sortedObj2;
}


const obj1 = { name: "person1", age: 5 };
const obj2 = { age: 5, name: "person1" };


const result = compareJSONObjects(obj1, obj2);
console.log("Objects match:", result);






//console.log("--------  all contry flag in the console --------");




let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload= function () {
  const data= JSON.parse(xhr.response);
 
  for (let i=0; i < data.length; i++)  {

  console.log("Flag", data[i].flags.png);
  console.log("==========================");
  }
};



//console.log("--------  countries names, regions, sub-region and populations --------");




fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
       
        data.forEach(country => {
            const countryName = country.name.common;
            const region = country.region;
            const subregion = country.subregion;
            const population = country.population;

          
            console.log("Country:", countryName);
            console.log("Region:", region);
            console.log("Sub-region:", subregion);
            console.log("Population:", population);
            console.log("==========================");
        });
    })
    
