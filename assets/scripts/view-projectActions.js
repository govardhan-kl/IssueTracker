function removeduplicate(){
var mycode = {};
// THIS IS TO remove repeated and display author name on UI
$("select[id='authors'] > option").each(function () {
    if(mycode[this.text]) {
        $(this).remove();
    } else {
        mycode[this.text] = this.value;
    }
});
}

removeduplicate()

// this is to add selectpicker for the dropdowns
$(document).ready(function(){
    $('#labels').selectpicker();
    $('#authors').selectpicker();
})