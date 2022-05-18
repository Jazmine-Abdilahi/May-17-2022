/* video 19 notes */

/* video 20 */

const gameEvents = new Map ([
    [17, ' GOAL'],
    [36, ' Substitution'],
    [47, ' GOAL'],
    [61, ' Substitution'],
    [64, ' Yellow card'],
    [69, ' Red card'],
    [70, ' Substitution'],
    [72, ' Substitution'],
    [76, ' GOAL'],
    [80, ' GOAL'],
    [92, ' Yellow card'],
]);

// 1.
const events = gameEvents.values(gameEvents.values);
console.log(events);

// 2.
gameEvents.deletw(64);

// 3.
console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
);

// 4.
for (const [min, event] of gaeEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`)
};


