// BIGINT: NEW TYPE

console.log(typeof 4);
let big = 999999999999999999999999999999**9999999999999999999999999999999999999999999;
console.log(typeof big);

console.log(typeof 1n);

// Number.MAX_SAFE_INTEGER
// javascript uses double-precision floating-point number formats (64 bits)
// double-precision: uses 2x as many bits as regular floating-point number
console.log(Number.MAX_SAFE_INTEGER);
// 9007199254740991

// Working with numbers larger than max safe will not cause errors, but can produce inaccurate results
console.log(9007199254740991 + 1);
// Should be 9007199254741001, get 9007199254741000 instead
console.log(9007199254740991 + 10);
// Subtract from number above max safe - no change
console.log(9007199254741000 - 1);

// Calculations remain accurate if using BigInt
// NOTE: cannot mix BigInt and number
console.log(9007199254740991n + 10n);
console.log(9007199254741000n - 1n);

// OPTIONAL CHAINING OPERATOR
// simplifies conditionals in situations where objects/properties may not exist

let trainer_will = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let willPikachuWeight = trainer_will.pikachu.weight;
console.log(willPikachuWeight);

let trainer_andrei = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30
    }
}

// this statement would throw an error:  let andreiPikachuWeight = trainer_andrei.pikachu.weight;
// to avoid errors, need to check first if trainer_andrei object exists,
    // then check if trainer_andrei.pikachu object exists,
    // then check if trainer_andrei.pikachu.weight property exists
if (trainer_andrei && trainer_andrei.pikachu && trainer_andrei.pikachu.weight) {
    let andreiPikachuWeight = trainer_andrei.pikachu.weight;
    console.log(andreiPikachuWeight);
} else {
    let andreiPikachuWeight = undefined;
    console.log(andreiPikachuWeight);
}

// Optional chaining operator - will return 'undefined' if any entity in chain does not exist
let andreiPikachuWeight = trainer_andrei?.pikachu?.weight;
console.log(andreiPikachuWeight);

let willPikachuWeight2 = trainer_will?.pikachu?.weight;
console.log(willPikachuWeight2);

// NULLISH COALESCING OPERATOR
trainer_andrei.pikachu = {
    species: 'Mouse Pokemon',
    height: 0.4,
    weight: 6,
    power: 'lightning'
}

let andreiPikachuPower = trainer_andrei?.pikachu?.power || 'no power';
console.log(andreiPikachuPower);

// OR operator will return right-hand side if left-hand side is falsy
// falsy: false, 0, '', undefined, null
trainer_andrei.pikachu.power = 0;
console.log('OR operator with power = 0')
console.log(andreiPikachuPower1 = trainer_andrei?.pikachu?.power || 'no power');
trainer_andrei.pikachu.power = ''
console.log('OR operator with power = \'\'')
console.log(andreiPikachuPower1 = trainer_andrei?.pikachu?.power || 'no power');

// What if you want to check only if power is null or undefined -
    // for example, what if power should be empty string or 0?
// NULLISH COALESCING OPERATOR: returns left-hand side only if right-hand side is null or undefined
trainer_andrei.pikachu.power = 0;
console.log('nullish coalescing operator with power = 0')
console.log(andreiPikachuPower1 = trainer_andrei?.pikachu?.power ?? 'no power');
trainer_andrei.pikachu.power = ''
console.log('nullish coalescing operator with power = \'\'')
console.log(andreiPikachuPower1 = trainer_andrei?.pikachu?.power ?? 'no power');