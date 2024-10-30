const form = document.querySelectorAll('form');
        const nextForm2 = ()=>{
            form[0].style.left = '-100%';
            form[1].style.left='0%';
        }
        const prevForm1 = () => {
            form[1].style.left = '100%';
            form[0].style.left = '0%';
        }
        const nextForm3 = ()=>{
            form[1].style.left = '-100%';
            form[2].style.left='0%';
        }
        const prevForm2 = () => {
            form[2].style.left = '100%';
            form[1].style.left = '0%';
        }