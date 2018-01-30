"use strict";
var Comment = (function () {
    function Comment(postId, id, name, email, body) {
        this.postId = postId;
        this.id = id;
        this.name = name;
        this.email = email;
        this.body = body;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map