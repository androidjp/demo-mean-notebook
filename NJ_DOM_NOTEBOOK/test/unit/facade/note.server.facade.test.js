var noteFacade = require('../../../app/facade/note.server.facade');
var should = require('should');


describe('noteFacade/test.js' , function(){

    describe('[addNote()]--------------------------------------',function(){
        var noteDemo;

        beforeEach(function(){
            noteDemo = {
                title:'标题',
                cache:'123456',
                authorId:'WUJA13'
            };
        });

        it('should return the right saved note msg' ,function(){
            noteFacade.addNote(noteDemo,function(err, doc){
                should.not.exist(err);
                should.exist(doc);
                should.exist(doc.nodeId);
                should.equal('123456', doc.cache);
                should.equal(0, doc.status);
            });
        });

        it('should return error when authorId is undefined', function(){
            noteDemo.authorId = undefined;
            noteFacade.addNote(noteDemo,function(err, doc){
                should.exist(err);
                should.equal('The authorId should no be empty!' , err.message);
                should.not.exist(doc);
            });
        });

        it('should return error when authorId is null', function(){
            noteDemo.authorId = undefined;
            noteFacade.addNote(noteDemo,function(err, doc){
                should.exist(err);
                should.equal('The authorId should no be empty!' , err.message);
                should.not.exist(doc);
            });
        });

        it('should return error when authorId is \'\'', function(){
            noteDemo.authorId = "";
            noteFacade.addNote(noteDemo,function(err, doc){
                should.exist(err);
                should.equal('The authorId should no be empty!' , err.message);
                should.not.exist(doc);
            });
        });
   
   
    });

    describe('[getNoteListByCustomerId()]--------------------------------------', function(){
        var customerId = 'WUJA13';
        
        it('should get right response when get noteList of WUJA13' ,function(){
            noteFacade.getNoteListByCustomerId(customerId,function(err, nodes){
                should.not.exist(err);
                should.exist(nodes);
                should.equal(true,nodes instanceof Array);
            });
        });
    });


    
});