var e = sel => document.querySelector(sel)

var log = console.log.bind(console)

var imageFromPath = function(path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function(a, b) {
    var o = a
    var bW = b.w
    var bH = b.h
    if (b.y + bH > o.y && b.y + bH < o.y + o.h) {
        if (b.x + bW > o.x && b.x + bW < o.x + o.w) {
            return true
        }
    }
    return false
}

const randomBetween = function(start, end) {
    var n = Math.random() * (end - start + 1)
    return Math.floor(n + start)
}

var aInb = function(x, x1, x2) {
    return x >= x1 && x <= x2
}

var collide = function(a, b) {
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
        if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
            return true
        }
    }
    return false
}
