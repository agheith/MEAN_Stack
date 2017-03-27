var app = angular.module('app', [])

app.factory('productFactory', ['$http', function($http){
    var factory = {};
    var products = [
        {
            name: "Soccer Cleats",
            quantity: 40,
            price: 99.99
        }
    ];

    factory.create = function(product, callback){
        product.quantity = 40;
        products.push(product);
        callback(products);
    }

    factory.index = function(callback){
        //callback is the function that is passed to the productIndex by the controller, in this case P: setProducts.
        callback(products);
    }

    factory.update = function(product, callback){
        if (Number.isInteger(product.quantity)){
            if(products[product.id].quantity - product.quantity > 0){
                products[product.id].quantity -= product.quantity;
            } else {
                products[product.id].quantity = 0;
            }
        }
        callback(products);
    }

    factory.delete = function(id, callback){
        products.splice(id,1);
        callback(products);
    }
    return factory;
}]);

app.controller("productController", ["$scope", "productFactory", function($scope, productFactory){
    function setProducts(data){
        $scope.products = data;
        $scope.product = {};
    }

    $scope.product = {};
    $scope.products = {};

    $scope.index = function(){
        productFactory.index(setProducts);
    }

    $scope.index();
    $scope.create = function(){
        productFactory.create($scope.product, setProducts);
    }
    $scope.delete = function(id){
        productFactory.delete(id, setProducts)
    }
}]);

app.controller('ordersController', ['$scope','productFactory',
    function($scope, productFactory) {
        function setProducts(data) {
            $scope.products = data;
            $scope.product = {};
        }
        $scope.products = [];

        productFactory.index(setProducts);
        $scope.update = function(id) {
            productFactory.update({
                id: id,
                quantity: 1
            }, setProducts);
        }
    }
]);
