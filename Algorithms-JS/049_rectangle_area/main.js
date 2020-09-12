/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function (A, B, C, D, E, F, G, H) {
    const overlap = getInterSectionArea(A, B, C, D, E, F, G, H);
    const areaA = Math.abs(A - C) * Math.abs(B - D);
    const areaB = Math.abs(E - G) * Math.abs(F - H);
    return areaA + areaB - overlap;
};

const getInterSectionArea = (A, B, C, D, E, F, G, H) => {
    const lCorner = {
        x: Math.max(A, E),
        y: Math.max(B, F),
    };
    const rCorner = {
        x: Math.min(C, G),
        y: Math.min(D, H),
    };

    if (lCorner.x <= rCorner.x && lCorner.y <= rCorner.y) {
        return (
            Math.abs(lCorner.x - rCorner.x) * Math.abs(rCorner.y - lCorner.y)
        );
    } else {
        return 0;
    }
};
