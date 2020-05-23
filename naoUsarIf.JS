function eNumeroDaSorte(num) {
    return num > 0 && (num%2==0 || num%3==0) && num != 15;
}