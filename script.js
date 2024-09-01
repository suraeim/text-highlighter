document.addEventListener('DOMContentLoaded', function() {
    // Get references to the elements on the page
    const highlightButton = document.getElementById('highlight-btn');
    const clearButton = document.getElementById('clear-btn');
    const colorPicker = document.getElementById('color-picker');
    const textArea = document.getElementById('text-area');

    // Function to highlight selected text
    highlightButton.addEventListener('click', function() {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const span = document.createElement('span');
            span.style.backgroundColor = colorPicker.value;
            range.surroundContents(span);
            selection.removeAllRanges(); // Clear the text selection
        }
    });

    // Function to clear all highlights
    clearButton.addEventListener('click', function() {
        const spans = textArea.getElementsByTagName('span');
        while (spans.length > 0) {
            const parent = spans[0].parentNode;
            while (spans[0].firstChild) {
                parent.insertBefore(spans[0].firstChild, spans[0]);
            }
            parent.removeChild(spans[0]);
        }
    });
});
