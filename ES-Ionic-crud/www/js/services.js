angular.module('starter.services', [])


/**
* 
* @autthor: Rommel A. Suarez
* @description: This code contains the service layer that calls  the REST API     
*/
.service('CustomerService', function($http, $httpParamSerializerJQLike) {
     

       //  Return all customer records
       this.getAllCustomers = function(onComplete) {
            $http({
              method  : 'GET',
              url     : 'http://localhost:8080/getAllCustomers',
              headers : {'Content-Type': 'application/json'}  // set the headers so angular passing info as form data (not request payload)
             })
            .success(function(response) {
                 onComplete(response);
             });
        } 

       

        //  Return a customer record using the id as parameter
       this.getCustomer = function(customerId, onComplete) {
          if(undefined!= customerId) {


            $http({
              method  : 'GET',
              url     : 'http://localhost:8080/getCustomer/?id=' + customerId ,
              headers : {'Content-Type': 'application/json'}  // set the headers so angular passing info as form data (not request payload)
             })
            .success(function(data) {
                 onComplete(data);
             });
          }
            
        } 

       

       //  Delete a customer record using the id as parameter
       this.deleteCustomer = function(customerId,onComplete) {
            $http({
              method  : 'GET',
              url     : 'http://localhost:8080/deleteCustomer/?id=' + customerId ,
              headers : {'Content-Type': 'application/json'}  // set the headers so angular passing info as form data (not request payload)
             })
            .success(function(data) {
                 onComplete(data);
             });    

       }

       //  add a new customer record 
       this.addCustomer = function(customer,onComplete) {
           
            $http({
              method  : 'POST',
              url     : 'http://localhost:8080/addCustomer',
              data    :  customer, // pass in data as strings
              headers : {'Content-Type': 'application/json'}  // set the headers so angular passing info as form data (not request payload)
             })
            .success(function(data) {
                 onComplete(data);
             });

       }

        //  Updates an existing customer record 
       this.editCustomer = function(customer,onComplete) {
            $http({
              method  : 'POST',
              url     : 'http://localhost:8080/editCustomer',
              data    :  customer, // pass in data as strings
              headers : {'Content-Type': 'application/json'}  // set the headers so angular passing info as form data (not request payload)
             })
            .success(function(data) {
                 onComplete(data);
             });

       }

});
