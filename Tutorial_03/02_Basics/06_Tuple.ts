// ? TypeScript tuple 

// * A tuple is work like an array with some additional considerations : => The number of elements in the tuple is fixed.  => The types of elements are known and need not to be the same.

let appInfo : [string , number] ;

appInfo = ["MyApp", 24] // * The order of values in tuple is important. if you change the order of values of the tuple , it will give an error.For this reason , it's good practice to use tuples with data that are related to each other in specific order.

let userInfo : [string,string,number,number?]; //* You can have optional elements specified using the question mark( ? ) postfix.
userInfo = ["Hasan","hasan@gamil,com",34] //* Even though you don't give the forth parameter it don't give any error.

