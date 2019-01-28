import uuid from 'uuid'

const   ADD_COMMENT = 'ADD_COMMENT',
        EDIT_COMMENT = 'EDIT_COMMENT',
        REMOVE_COMMENT = 'REMOVE_COMMENT',
        THUMB_UP_COMMENT = 'THUMB_UP_COMMENT',
        THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text:,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        id:,
        text:
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id:
    }
}

function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id:,
    }
}

function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id:,
    }
}
