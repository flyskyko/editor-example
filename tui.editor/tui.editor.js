var Editor = (function () {
    var editor;

    function initEditor(initialValue) {
        editor = new toastui.Editor({
            el: document.querySelector('#editor'),
            height: '500px',
            initialEditorType: 'markdown',
            previewStyle: 'vertical',
            initialValue: initialValue,
        });
    }

    function initViewer(initialValue) {
        new toastui.Editor.factory({
            el: document.querySelector('#viewer'),
            viewer: true,
            initialValue: initialValue,
        });
    }

    function getHtml() {
        console.log(editor.getHTML());
    }

    function getMarkdown() {
        console.log(editor.getMarkdown());
    }

    function bindEvent() {
        document.querySelector('#getHtml').addEventListener('click', getHtml);
        document.querySelector('#getMarkdown').addEventListener('click', getMarkdown);
    }

    return {
        initEditor: initEditor,
        initViewer: initViewer,
        getHtml: getHtml,
        getMarkdown: getMarkdown,
        bindEvent: bindEvent,
    }
})();