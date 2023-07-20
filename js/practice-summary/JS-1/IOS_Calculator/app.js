const primaryDisplay = document.querySelector('.primary-display')
const secondaryDisplay = document.querySelector('.secondary-display')
const buttons = document.querySelector('.buttons-container')

let operator = ''
let firstNumber = ''
let isPrevOperator = false

function calculate() {
    switch (operator) {
        case '+':
            return Number(firstNumber) + Number(primaryDisplay.innerHTML);
        case '-':
            return Number(firstNumber) - Number(primaryDisplay.innerHTML);
        case 'x':
            return Number(firstNumber) * Number(primaryDisplay.innerHTML);
        case '÷':
            return Number(firstNumber) / Number(primaryDisplay.innerHTML);
        case '%':
            return Number(firstNumber) * Number(primaryDisplay.innerHTML) / 100;
    }
}

buttons.addEventListener('click', (e) => {

    console.log('----------START-----------')

    if (!e.target.classList.contains('button')) return;

    // store values for calculation
    let btnValue = e.target.textContent
    let primaryValue = primaryDisplay.textContent

    // for numbers:
    if (e.target.classList.contains('number')) {
        if (primaryValue.length < 7) {
            if (primaryValue !== '0') {
                primaryDisplay.textContent += btnValue
            } else if (btnValue !== '0') {
                primaryDisplay.textContent = btnValue
            }
        }
    }

    //  AC operation:
    if (e.target.classList.contains('ac')) {
        primaryDisplay.textContent = '0'
        secondaryDisplay.textContent = ''
        operator = ''
        firstNumber = ''
    }

    // for operators:
    if (e.target.classList.contains('operator')) {

        console.log(`OPERATOR: ${e.target.textContent}`)
        console.log(`Operator has been clicked.`)

        if (!isPrevOperator) {

            console.log('isPrevOperator is false')

            if (secondaryDisplay.textContent && operator) {

                console.log('secondaryDisplay and operator exist')

                firstNumber = calculate()

                console.log(`first number has been calculated: ${firstNumber}`)

            } else {

                console.log('secondaryDisplay and/or operator do not exist')

                firstNumber = primaryValue

                console.log(`first number has been set to primaryValue: ${firstNumber}`)
            }

            primaryDisplay.textContent = '0'

            console.log(`primaryDisplay has been reset to 0`)
        }

        // set our operator to the button value so we can use it in our calculate function
        operator = btnValue

        // set secondaryDisplay to show firstNumber and operator:
        secondaryDisplay.textContent = `${firstNumber} ${btnValue}`

        isPrevOperator = true

    } else {
        isPrevOperator = false
    }

    // equal sign operation:
    if (e.target.classList.contains('equal')) {

        // calculate function
        firstNumber = calculate()
        console.log(firstNumber)

        if (operator === '') {
            firstNumber = primaryValue
        }

        operator = ''

        secondaryDisplay.textContent = firstNumber;
        primaryDisplay.textContent = '0'
        // SET IS PREV OPERATOR TO TRUE!!!
        isPrevOperator = true
    }

    // decimal operation:
    if (e.target.classList.contains('decimal')) {
        if (!primaryDisplay.textContent.includes('.')) {
            primaryDisplay.textContent += '.'
        }
    }

    if (e.target.classList.contains('pm')) {
        primaryDisplay.textContent = -Number(primaryDisplay.textContent)
    }

    // previous operator log:
    console.log(`PREV OPERATOR: ${isPrevOperator}`)
    console.log('----------END-----------')
})