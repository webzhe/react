# react 生命周期

### init(初始化)
```
    //针对一个类，只调用一次   类创建的时候才会调用
    defaultProps    --> getDefaultProps(){return {group:123}}   --> React.createClass()

    针对一个实例  实例产生的时候调用
    state           --> getInitialState(){return {}}    --> ES6 constructor(){this.state = {}}
```

### mount(加载)
    will
    did


### update(更新)  ==> 可以调用多次

    will
    did



### unmount(卸载)
    will
