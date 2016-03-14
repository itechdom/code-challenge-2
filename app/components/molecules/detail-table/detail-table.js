(function () {
    'use strict';

    function DetailTableCtrl($log, $scope, $timeout) {
        $log.info('DetailTableCtrl loading...');

        $scope.mappings = $scope.mappings || {
                product: 'itemProductName',
                productId: 'itemProductId',
                manufacturer: 'itemManufacturerName',
                sku: 'itemSku',
                glCode: 'itemGLCode',
                unit: 'itemProductUnit',
                size: 'itemProductSize',
                unitPrice: 'itemOrderUnitPrice',
                quantity: 'itemOrderQuantity',
                tax: 'itemOrderTax',
                total: 'itemOrderTotal'
            };

        $scope.hasGlCodes = $scope.hasGlCodes || true; //todo default to false
        $scope.hasCustomSkus = $scope.hasCustomSkus || true; //todo default to false

        $scope.skuDisplayText = function (item) {
            return item[$scope.mappings.sku] || item[$scope.mappings.productId];
        }


    }

    DetailTableCtrl.$inject = ['$log', '$scope', '$timeout'];

    function detailTable() {
        return {
            restrict: 'E',
            scope: {
                items: '=',
                mappings: '=',
                filter: '=',
                hasGlCodes: '=',
                hasCustomSkus: '=',
            },
            controller: DetailTableCtrl,
            templateUrl: '/App/directives/detail-table.html'
        }
    }

    angular
        .module('app')
        .directive('detailTable', detailTable)
        .controller('DetailTableCtrl', DetailTableCtrl);
})();