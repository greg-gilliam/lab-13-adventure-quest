function scoreHeatlh(health) {
    if (health <= 0) {
        return 'dead';
    } if (health < 35) {
        return 'average';
    } return 'healthy';
}

export default scoreHeatlh;