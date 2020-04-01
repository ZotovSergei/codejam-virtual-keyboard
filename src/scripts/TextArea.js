export class TextArea {
    
    generateTextArea() {
        const textArea = document.createElement('textarea');
        textArea.className = 'text__area';
        textArea.setAttribute('t-id','t-id1');
        // textArea.setAttribute('readonly','readonly');        
        return textArea;        
    }
    
}