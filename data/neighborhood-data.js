const victorian = {
    id: 'victorian',
    title: 'Fancy Victorian Neighborhood',
    map: {
        top: '89%',
        left: '44%',
    },
    description: 'You have chosen to go to the Victorian neighborhood in town. Which house do you want to go to?',
    choices: [{
        id: 'spooky house',
        description: 'The house is run down and lights flicker',
        result: 'You knock on the door and say your trick or treat and no one comes to the door',
        health: 0,
        candy: 0
    }, {
        id: 'fancy house',
        description: 'The house is bright and colorful with their halloween decorations',
        result: 'You knock on this door and two people answer dressed in costume who give you a whole candy bar - score!',
        health: -10,
        candy: 90
    }, {
        id: 'plain house',
        description: 'This house is not decorated but the lights are on',
        result: 'You take a chance and knock. You are in luck - someone comes to the door and lets you pick some candy from the basket. Unfortunately you are held up for your candy by bullies when you leave',
        health: -35,
        candy: 30
    }]    
};

const trailers = {
    id: 'trailers',
    title: 'Fancy Victorian Neighborhood',
    map: {
        top: '17%',
        left: '37%',
    },
    description: 'You have chosen to go to the trailer park in town. Which house do you want to go to?',
    choices: [{
        id: 'spooky house',
        description: 'The house is run down and lights flicker',
        result: 'You knock on the door and say your trick or treat and no one comes to the door',
        health: 0,
        candy: 0
    }, {
        id: 'fancy house',
        description: 'The house is bright and colorful with their halloween decorations',
        result: 'You knock on this door and two people answer dressed in costume who give you a whole candy bar - score!',
        health: -10,
        candy: 90
    }, {
        id: 'plain house',
        description: 'This house is not decorated but the lights are on',
        result: 'You take a chance and knock. You are in luck - someone comes to the door and lets you pick some candy from the basket. Unfortunately you are held up for your candy by bullies when you leave',
        health: -35,
        candy: 30
    }]    
};


const apartments = {
    id: 'apartments',
    title: 'Fancy Victorian Neighborhood',
    map: {
        top: '17%',
        left: '37%',
    },
    description: 'You have chosen to go to an apartment in town. Which house do you want to go to?',
    choices: [{
        id: 'spooky house',
        description: 'The house is run down and lights flicker',
        result: 'You knock on the door and say your trick or treat and no one comes to the door',
        health: 0,
        candy: 0
    }, {
        id: 'fancy house',
        description: 'The house is bright and colorful with their halloween decorations',
        result: 'You knock on this door and two people answer dressed in costume who give you a whole candy bar - score!',
        health: -10,
        candy: 90
    }, {
        id: 'plain house',
        description: 'This house is not decorated but the lights are on',
        result: 'You take a chance and knock. You are in luck - someone comes to the door and lets you pick some candy from the basket. Unfortunately you are held up for your candy by bullies when you leave',
        health: -35,
        candy: 30
    }]    
};

const neighborhoods = [
    victorian,
    trailers,
    apartments,
];

export default neighborhoods;