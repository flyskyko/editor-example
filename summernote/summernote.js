var Editor = (function () {
    var $summernote;

    function initEditor() {
        $summernote = $('#summernote').summernote({
            height: 500,
        });
    }

    function getCode() {
        console.log($summernote.summernote('code'));
    }

    function bindEvent() {
        $('#getCode').on('click', getCode);
    }

    return {
        initEditor: initEditor,
        getCode: getCode,
        bindEvent: bindEvent,
    }
})();