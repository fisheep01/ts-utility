# 待实现清单

+ UseSecondType
> 场景：在通用的api方法封装时，我希望通过传入一个泛型来便于推导response的类型，response的结构一般来说都是标准的，实现类似于`api<T>(): IDefaultRes<T>`；但是有特殊的场景可能需要额外定制结构，所以希望可以通过可选的第二个泛型来控制，实现类似于`api<T, U>(): UseSecondType<IDefaultRes<T>, U>`；UseSecondType的作用是，如果U有一个具体的类型则使用U，否则使用第一个泛型  
> 状态：已实现

+ ExpandParameters
> 场景：在开发场景中，我们经常需要针对某些函数进行二次封装，ts内置了`Parameters`泛型来获取某个函数的入参类型，但是当我们针对这个函数需要扩展入参的时候就比较难处理，希望实现一个泛型来基于`Parameters`获取的原参数进行扩展。  
> 状态：已实现