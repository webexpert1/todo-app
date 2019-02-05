'use strict';
var app = angular.module('mainApp', []  )
                .controller("todoController",[ "$scope", "$http", function($scope, $http) {
                   var self = this;
                   self.newtodo = '';
                    self.tasks = [
                        {name:"Buy PC", done:false , description:"Go to store and buy new PC", id:1},
                        {name:"Read book", done:false, description:"Increase your angular skills", id:2},
                        {name:"Take a shower", done:true, description:"Make yourself more fresh", id:3},
                        {name:"Eat chicken", done:false, description:"Take a rest, eat some chicken", id:4}
                        ];

                    self.addTodo = function(){
                        id+= 1;
                        this.task.id = id;
                        this.task.name = name;
                        this.task.done = false;
                        if(this.task.description == undefined){
                            this.description = "";
                        }    
                        this.tasks.push(this.task);  
                       // self.tasks.push({name: this.task.name, done: this.task.done, description: this.task.description });    
                   }
                     self.clearCompleted = function() {
                       self.task.name = "";
                       self.task.description = "";
                   }

                   this.removetask = function(id){
                    index = self.tasks.findIndex(task => id === task.id);
                    self.tasks.splice(index,1);
                }
                                    
                     
                }]);
                