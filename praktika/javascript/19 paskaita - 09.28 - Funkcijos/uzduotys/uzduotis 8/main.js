function calculate(n1, n2, operator){
    let atsakymas
    switch(operator){
        case '+':
            atsakymas = n1 + n2;
            break;
        case '-':
            atsakymas = n1 - n2;
            break;
        case '*':
            atsakymas = n1 * n2;
            break;
        case '/':
            atsakymas = n1 / n2;
            break;
        case '**':
            atsakymas = n1 ** n2;
            break;
        case '**(1/x)':
            atsakymas = n1 ** (1/n2);
            break;
        case '%':
            atsakymas = n1 % n2;
            break;
    }
    return atsakymas
}