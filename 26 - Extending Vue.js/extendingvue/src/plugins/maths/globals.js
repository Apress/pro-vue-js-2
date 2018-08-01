export default {
    sumValues(...vals) {
        return vals.reduce((val, total) => total += val, 0);
    },

    getSymbol(operation) {
        switch (operation.toLowerCase()) {
            case "add": return "+";
            case "subtract": return "-";
            case "multiply": return "*";
            default: return "/";
        }
    }
}
