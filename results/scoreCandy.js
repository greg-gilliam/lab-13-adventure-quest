function scoreCandy(candy) {
    if (candy === 0) {
        return 'skinny';
    }
    else if (candy < 50) {
        return 'average';
    }
    return 'chunky';
}

export default scoreCandy;