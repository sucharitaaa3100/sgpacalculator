const tab=document.getElementsByClassName('table')
const button = document.querySelector('.btn-cal')
//console.log(tab)
const table=Array.from(tab)
//console.log(table)
let totalCredit=0;
let total=0;
button.addEventListener('click', function(e) {
    e.preventDefault();
    total = 0;
    totalCredit = 0;

    for (let i = 1; i <= 12; i++) {
        //extracting values from each row and column
        const gradeValue = table[0].rows[i].cells[1].querySelector('input').value;
        const creditValue = table[0].rows[i].cells[2].querySelector('input').value;

        //if values are empty breaking from loop totally
        if (gradeValue === '' || creditValue === '') {
            break;  
        }
        //converting to float after the empty string case
        const gradeInput = parseFloat(gradeValue);
        const creditInput = parseFloat(creditValue);

        //checking if the inputs are valid or not using logical or
        if (isNaN(gradeInput) || isNaN(creditInput)) {
            alert('Please enter valid numbers for grade and credit.');
            return;
        }

        total += (gradeInput * creditInput);
        totalCredit += creditInput;
    }

    
    if (totalCredit === 0) {
        alert('Please enter at least one valid grade and credit.');
        return;
    }
    //sgpa calculation
    const sgpa = total / totalCredit;
    document.getElementById('calc').value = ` ${sgpa.toFixed(2)}`;
});