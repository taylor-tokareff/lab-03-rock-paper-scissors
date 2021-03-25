// IMPORT MODULES under test here:
// import { example } from '../example.js';

const test = QUnit.test;

test('results in draw', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const player = 'rock';
    const computer = 'rock';
    const actual = didUserWin(player, computer)
    
    //Act 
    // Call the function you're testing and set the result to a const
    const expected = 'draw';

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('results in win', (expect) => {
    const player = 'paper';
    const computer = 'rock';
    const actual = didUserWin(player, computer)

    const expected = 'win';

    expect.equal(actual, expected)

});

test('results in loss', (expect) => {
    const player = 'rock';
    const computer = 'paper';
    const actual = didUserWin(player, computer);

    const expected = 'loss';
    
    expect.equal(actual, expected)


})
