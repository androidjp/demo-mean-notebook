/// note mongoDB Operator
const uuid = require('uuid/v4');
const _ = require('lodash');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoteSchema = Schema({

    noteId: {
        type: String,
        unique: true
    },
    status: {
        type: Number,
        default: 0
    },
    title: String,
    filePath: String,
    cache: String,
    liked:{
        type:Number,
        default:0
    },
    authorId: {
        type:String,
        require:true
    }
},{timestamps:true},{versionKey:false});
///index


// CusSchema.pre('update', function(){
// 	this.update({}, {$set:{updateDatetime:new Date()}});
// });
//
NoteSchema.pre('save', function (next) {
    var note = this;
    if(_.isEmpty(note.noteId)){
        note.noteId = uuid();
    }
    next();
});

NoteSchema.pre('update', function(next){
   var note = this;
   if(_.isEmpty(note.noteId)){
       note.noteId = uuid();
   } 
   next();
});


mongoose.model('Note', NoteSchema ,'NOTE');