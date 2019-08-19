

const reset = function () {
    Ext.getCmp('htmlEditor').reset();
};



const insertTable = function (cols,rows) {
    var tbody = '<table border = 1>';
    for (i = 0; i < cols; i++){
        tbody += '<tr>';
        for(j = 0; j < rows; j++){
            tbody += "<td>&nbsp;&nbsp;</td>";
        }
        tbody += '</tr>';
    }
    tbody += '</table>';
    return tbody;
}


const insertTableIntoEditorHtml = function () {
    var editorHtmlValues =  Ext.getCmp('htmlEditor').getValue();
    Ext.MessageBox.prompt("insertTable","'2 3' means -> col:2  rows:3",function (btn,text) {
        if(btn === 'ok'){
            var cols = text.split(' ')[0];
            var rows = text.split(' ')[1];
            Ext.getCmp('htmlEditor').setValue(editorHtmlValues + insertTable(cols,rows));
        }
    });
}


const showUploadProgress = function () {

    Ext.MessageBox.show({
        title: 'Upload',
        progressText: 'sending...',
        width: 200,
        progress: true,
        closable: false,
        animEl: 'reply'
    });

    for (var i = 1; i < 5; i++) {
        setTimeout((function (v) {
            return function () {
                if (v === 4) {
                    Ext.MessageBox.hide();

                    if(Ext.getCmp('htmlEditor').getValue() === ''){
                        Ext.getCmp('submit').disable()
                    }

                    Ext.MessageBox.alert('result', 'success')
                } else {
                    var i = v / 3;
                    Ext.MessageBox.updateProgress(i, Math.round(100 * i) + '%');
                }
            };
        })(i), i * 1000);
    }

}

