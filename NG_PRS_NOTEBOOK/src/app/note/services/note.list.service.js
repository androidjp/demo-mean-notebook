noteListService.$inject= ['$http'];
function noteListService($http){

    var urlBase = "";
    var svc = this;


    /**
     * getNoteListByCustomerId
     * @param {any} customerId 
     * @param {function(err:Object, res:Object)} callback 
     */
    function getNoteListByCustomerId(customerId,page , callback){
        if(!customerId){
            return callback(new Error("customerId is null"),null);
        }

        if(!page){
            return callback(new Error("the page that you want to load is null"),null);
        }
        $http.get("/api/note/list/user/"+customerId+"/"+ page).then((noteList)=>{
            callback(null, noteList);
        } , (err)=>{
            callback(err,null);
        });
    }


    function getNoteListSortByDate(page , callback){
        if(page == null || page == undefined){
            return callback(new Error("page is null"),null);
        }
        $http.get("/api/note/list/date/"+page).then((noteList)=>{
            callback(null, noteList);
        }  , (err)=>{
            callback(err, null);
        });
    }

    /**
     * 
     * 
     * @param {any} note 
     * @param {function(err:Object , res:Object)} callback 
     * @returns 
     */
    function createNote(note , callback){
        if(note === undefined || note === null){
            return callback(new Error("note is null"));
        }
        if(note.authorId === undefined || note.authorId === null || note.authorId.length===0){
            return callback(new Error("authorId is null"));
        }
        if(note.title === undefined || note.title === null || note.title.length===0){
            return callback(new Error("title is null"));
        }
        
        $http.post("http://10.222.47.212:8888/api/note/update", note).then((err, res)=>{
            callback(err,res);
        });
    }


    /**
     * 
     * @param {any} note 
     * @param {function(err:Obj)} callback 
     * @returns 
     */
    function updateNote(note , callback){
        if(note === undefined || note === null){
            return callback(new Error("note is null"));
        }
        if(note.authorId === undefined || note.authorId === null || note.authorId.length===0){
            return callback(new Error("authorId is null"));
        }
        if(note.title === undefined || note.title === null || note.title.length===0){
            return callback(new Error("title is null"));
        }

        if(note.noteId === undefined || note.noteId === null || note.noteId.length===0){
            return callback(new Error("title is null"));
        }
        
        $http.post("http://10.222.47.212:8888/api/note/update", note).then((err, res)=>{
            if(err){
                callback(err);
            }else
                callback(null);
        });
    }

    /**
     * 
     *
     * @param {any} noteId 
     * @param {function(err:Obj)} callback 
     * @returns 
     */
    function deleteNote(noteId, callback){
        if(noteId === undefined || noteId === null || noteId.length===0){
            return callback(new Error("noteId is null"));
        }

        $http.delete("http://10.222.47.212:8888/api/note/delete/" + noteId).then((err,res)=>{
            if(err){
                callback(err);
            }else
                callback(null);
        });
    }



    return {
        getNoteListByCustomerId : getNoteListByCustomerId,
        getNoteListSortByDate:getNoteListSortByDate,
        createNote : createNote,
        updateNote : updateNote,
        deleteNote : deleteNote
    }
}
module.exports = noteListService;