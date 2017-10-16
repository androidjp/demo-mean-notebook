/// note mongoDB Operator
const uuid = require('uuid/v4');
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var NoteSchema = Schema({

    noteId: {
        type: String,
        unique: true,
        required: true
    },
    status: {
        type: Integer,
        default: 0,
    },
    title: String,
    filePath: String,
    cache: String,
    authorId: String
}, {
    collection: 'note'
}, {
    timestamps: true
}, {
    versionKey: false
});
///index


// CusSchema.pre('update', function(){
// 	this.update({}, {$set:{updateDatetime:new Date()}});
// });
//
NoteSchema.pre('save', function (next) {
    var note = this;
    note.noteId = uuid();
    next();
});


mongoose.model('Note', NoteSchema);