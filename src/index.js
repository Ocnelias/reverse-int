module.exports = function reverse(n) {
    let res = [];
    n = Math.abs(n);
    n = n.toString().split('');
    for (let i = n.length; i >= 0; i--) {
        res.push(n[i]);
    }
    return res.join('');
}
