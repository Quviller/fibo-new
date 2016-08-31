function fibo(number) {
    if (number === 1) {
        return 1;
    } else {
        if (number < 1) {
            return 'You should have entered possitive value';
        } else {
            for (var counter = 2, Np = 1, Npp = 0; counter <= number; counter++) {
                var Ncounter = Npp + Np;
                Npp = Ncounter - Npp;
                Np = Ncounter;
            }
            return Ncounter;
        }
    }
}
document.write(fibo(prompt('please enter possitive number')));