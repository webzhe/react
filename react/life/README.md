# react 生命周期

### init(初始化阶段)
```
    //针对一个类，只调用一次   类创建的时候才会调用,不是实例产生
    defaultProps    --> getDefaultProps(){return {group:123}}   --> React.createClass()
    readonly(只读)


    针对一个实例而言  实例产生的时候调用
    针对组件，只调用1次，有几个组件，就调用几次
    state           --> getInitialState(){return {} }    --> ES6 constructor(){this.state = {}}
                    new Item()

    private write(可读可写)
```

### mount(装载阶段)
```
    componentWillMount(即将要加载) 调用一次
        state

    componentDidMount(加载完成) 调用一次
        这个阶段可以和juqery结合一起使用
        dom
        ajax server data
        other framework
```
### update(更新阶段)  ==> 可以调用多次
```
    componentWillReceiveProps(只会在外部执行render() 才会执行)
    shouldComponentUpdate(内部强制刷新不会执行这个方法)

    componentWillUpdate(即将更新)
    componentDidUpdate(更新完成)
```
### unmount(卸载阶段)
```
    will
```
