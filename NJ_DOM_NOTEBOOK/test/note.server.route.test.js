var app = require('../server');
var request = require('supertest')(app);
var should =  require('should');


describe('note.route/test.js', function(){

    var testCustomerId = "WUJA13";
    var testNote = {
        title:'小明治',
        authorId:testCustomerId
    };


    describe('/api/note/update ------------------------------------------' ,function(){
        before(function(){
            testNote = {
                title:'小明治',
                authorId:testCustomerId
            };
        });
        
        it('should finish update a new note' ,function(done){
            this.timeout(15000);
            request.post('/NJ_DOM_NOTEBOOK/api/note/update')
                .send(testNote)
                .expect(200, function(err, res){
                    should.not.exist(err);
                    should.exist(res.body.noteId);
                    should.equal(res.body.title, testNote.title);
                    should.equal(res.body.authorId, testNote.authorId);
                    testNote.noteId = res.body.noteId;
                    done();
                });
        });

        it('should finish update an existed note' ,function(done){
            testNote.cache = "12345";
            console.log('-----------------');
            console.log(testNote.noteId);
            console.log('-----------------');
            this.timeout(15000);
            request.post('/NJ_DOM_NOTEBOOK/api/note/update')
                .send(testNote)
                .expect(200, function(err, res){
                    should.not.exist(err);
                    should.exist(res.body.noteId);
                    should.equal(testNote.title,res.body.title);
                    should.equal(testNote.cache, res.body.cache);
                    should.equal(testNote.authorId,res.body.authorId);
                    should.equal(testNote.noteId,res.body.noteId);
                    done();
                });
        });

    });

    describe('/api/note/find/:customerId ------------------------------------------', function(){

    });
});


// describe('address/test.js' ,function(){
//     var addAddress = {
//         customerId : 'jasper',
//         content : '珠海南方软件园B5'
//     };
//     var testCustomerId = "jasper";

//     /**
//      * 添加地址
//      */
//     describe('addAddress', function () {
//         it('addAddress', function (done) {
//             this.timeout(15000);
//             request.post('/NJ_DOM_CEAT/api/customer/addAddress')
//                 .send(addAddress)
//                 .expect(200, function (err, res) {
//                     should.not.exist(err);
//                     ///地址id已自动生成uuid
//                     should.exist(res.body.addressId);
//                     ///地址content == 传入的content
//                     should.equal(res.body.content, addAddress.content);
//                     should.equal(res.body.customerId, addAddress.customerId);
//                     ///应该存在 status ，且为false
//                     should.exist(res.body.status);
//                     should.equal(res.body.status, false);
//                     done();
//                 });
//         });
//     });


//     /**
//      * 获取所有地址
//      */
//     describe('getAddressesByCustomerId', function () {
//         it('getAddressesByCustomerId', function (done) {
//             this.timeout(15000);
//             request.get('/NJ_DOM_CEAT/api/customer/getAddressesByCustomerId/'+testCustomerId)
//             // .send(addAddress)
//                 .expect(200, function (err, res) {
//                     should.not.exist(err);
//                     done();
//                 });
//         });
//     });

//     /**
//      * 删除地址 test
//      */
//     var deleteAddressId="15407af3-ce73-4dd5-b1a0-8b6447f00d28";
//     describe('deleteAddress', function () {
//         it('deleteAddress', function (done) {
//             this.timeout(15000);
//             request.delete('/NJ_DOM_CEAT/api/customer/deleteAddress/'+deleteAddressId)
//                 // .send(addAddress)
//                 .expect(200, function (err, res) {
//                     should.not.exist(err);
//                     should.format(res.body,"\\*success\\*");
//                     done();
//                 });
//         });
//     });


//     /**
//      * 更新地址
//      */
//     var updateAddress = {
//         addressId:"15407af3-ce73-4dd5-b1a0-8b6447f00d28",
//         customerId: "jasper",
//         content : "咚咚咚咚东欧当软件园",
//         status: false
//     }
//     describe('updateAddress', function () {
//         it('updateAddress', function (done) {
//             this.timeout(15000);
//             request.post('/NJ_DOM_CEAT/api/customer/updateAddress/')
//             .send(updateAddress)
//                 .expect(200, function (err, res) {
//                     should.not.exist(err);
//                     should.format(res.body,"\\*success\\*");
//                     done();
//                 });
//         });
//     });


//     /**
//      * 设置默认地址
//      */
//     var addressId = "15407af3-ce73-4dd5-b1a0-8b6447f00d28";
//     describe('setDefaultAddress', function () {
//         it('setDefaultAddress', function (done) {
//             this.timeout(15000);
//             request.put(`/NJ_DOM_CEAT/api/customer/${testCustomerId}/setDefaultAddress/${addressId}`)
//                 .expect(200, function (err, res) {
//                     should.not.exist(err);
//                     should.format(res.body,"\\*success\\*");
//                     done();
//                 });
//         });
//     });

//     /**
//      * 获取用户的默认地址
//      */
//     describe('setDefaultAddress', function () {
//         it('setDefaultAddress', function (done) {
//             this.timeout(15000);
//             request.get(`/NJ_DOM_CEAT/api/customer/getDefaultAddressByCustomerId/${testCustomerId}`)
//                 .expect(200, function (err, res) {
//                     should.not.exist(err);
//                     // should.format(res.body,"\\*success\\*");
//                     done();
//                 });
//         });
//     });



// });