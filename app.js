// task1

 
setInterval(()=>{
    let now=new Date()
    let gun = Math.trunc(now/ (1000 * 60 * 60 * 24)%366);
  let saat = Math.trunc((now / (1000 * 60 * 60)) % 24);
  let deqiqe = Math.trunc((now / (1000 * 60)) % 60);
  let saniye = Math.trunc((now / 1000) % 60);
  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
   let color=getRandomColor()
  console.log(`%c${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye`,`color:${color}`)
},1000)


// task2
// const students=[
//     {
//         id:1,
//         name: "sevinc",
//         surname: "esedova",
//         age: 24,
//         phone:["051-505-95-56","060-505-95-56"],
//         bal:91,
      
        
//     },
//     {
//         id:2,
//         name: "pusta",
//         surname: "zeynalova",
//         age: 23,
//         phone:["051-505-95-57","060-505-95-57"],
//         bal:91,
        
// },
//   {
//         id:3,
//         name: "Aynur",
//         surname: "Necefova",
//         age: 23,
//         phone:["051-505-95-57","060-505-95-57"],
//         bal:85,
        
//   },
//   {
//         id:4,
//         name: "Minaye",
//         surname: "Memmedova",
//         age: 23,
//         phone:["051-505-95-57","060-505-95-57"],
//         bal: 80,
       
// },           
// ]
// let soz = prompt("telebenin adini daxil edin")
// let students_filter=students.filter((x)=>x.name.includes(soz))
// if(students_filter.length>0){
//     alert(`${soz} adli telebe var`)
// }
// else{
//     alert(`${soz} adli telebe yoxdur`)
// }

// task3
// let soz=prompt("sozu daxil edin")
// for(i=0; i<soz.length*2; i++){
//     if(i<soz.length){
//         console.log(soz.substring(0,i+1))
//     }
//     else{
//         console.log(soz.substring(0,soz.length*2-i-1))
//     }
// }



