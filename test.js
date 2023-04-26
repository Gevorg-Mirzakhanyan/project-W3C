
     const middle = new Object();
     const junior = new Object();
     const senior = new Object();
     
     
     
     const staff = {
       John: {
        position: 'Senior',
        salary: 1600000
       },
       Robert: {
        position: 'Junior',
        salary: 1000000,
       },
       Michel: {
           position: 'Middle',
           salary: 800000,
       },
       Mane: {
           position: 'Middle',
           salary: 500000,
       }
    }


    for (let person in staff) {
        if (staff[person].position === 'Senior') {
            senior[person] = staff[person]; 
        }
        if (staff[person].position === 'Junior') {
            junior[person] = staff[person];
        }
        if (staff[person].position === 'Middle') {
            middle[person] = staff[person];
        }
        
    }
    console.log(senior);
    console.log(junior);
    console.log(middle);

        
    
    
    const arr = [43, 54, 6, 2, 7, 5, 732, 1, 4, 7, 8, 2, 5 ,8];


        let sum = 0;

        for(let element of arr) {
            sum += element;
        }

        console.log(sum)




      for (let i = 0; i< 10; i++) {
        console.log(i);
      }

     


      function camelize (str) {
        return str.split('-')
        .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1) )
        .join('')
      }

      console.log(camelize('my-short-word'));

 