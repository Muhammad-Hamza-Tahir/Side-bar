id1 = document.querySelector('.id1');
main1 = document.querySelector('.main1');
btn2 = document.querySelector('.btn2');


id1.addEventListener('click',function () {
    if ( main1.classList.contains('abc')) {
        main1.classList.remove('abc')
    }else{
        main1.classList.add('abc')
    }
    
})

btn2.addEventListener('click',function () {
   let all =  main1.classList.remove('abc')
   console.log(all);
})


// function getValue() {
//     main1.classList.add('abc') 
// }



// id1.addEventListener('click', getValue() )
    