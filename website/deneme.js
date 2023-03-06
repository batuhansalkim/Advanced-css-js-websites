function HouseKeeper(yearsOfExperience, name, cleaningRepertoire){
    this.yearsOfExperience = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
    this.clean = function(){
        alert("Cleaning in progress...");
    }
}

var HouseKeeper1 = new HouseKeeper(12, "Batuhan", ["bedroom"]);

console.log(HouseKeeper1.clean());




















