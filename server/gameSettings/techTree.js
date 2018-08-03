var techTree = {
    "prehistory": {
        "animal husbandry": {
            cost: 5,
            preReq: [""],
            cityUnlocks: [""],
            unitUnlocks: [""]
        },
        "fire": {
            cost: 3,
            preReq: [""],
            cityUnlocks: [""],
            unitUnlocks: [""]
        }
    },
    "ancient": {
        "writing": {
            cost: 10,
            preReq: ["fire"],
            cityUnlocks: ["library"],
            unitUnlocks: [""]
        }
    }
}
module.exports = techTree;
