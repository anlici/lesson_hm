
const a = '我是一个人'
var x = {
    a: '天外来物',
    fun1: function () {
        console.log(this.a);
    },
    fun2: function () {
        return function () {
            console.log(this.a);
        }
    },
    fun3: function () {
        setTimeout(function () {
            this.fun1()
            console.log(this.a);
        }.call(a), 1000)
    },
}

x.fun3()