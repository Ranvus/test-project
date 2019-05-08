var app = new Vue({
    el: '#app',
    data:{
        modal: false,
        img: '',
        urls: [
            {message: 'https://ru.vuejs.org/images/bit.png'},
            {message: 'https://ru.vuejs.org/images/logo.png'},
            {message: 'https://ru.vuejs.org/images/modus.png'},
            {message: 'https://ru.vuejs.org/images/tooltwist.png'}
        ],
        urls_text: [
            {}
        ],
        currentUrl: ''
    },
    methods:{
        modalAction(){
            if(this.modal == false){
                this.modal = true
            }else{
                this.modal = false
            }
        },
        getIndex(index){
            this.currentUrl = this.urls[index];
        }
    }
})

function handleFileSelect(evt) {
    var file = evt.target.files; // FileList object
    var f = file[0];
    // Only process image files.
    if (!f.type.match('image.*')) {
        alert("Image only please....");
    }
    var reader = new FileReader();
    // Closure to capture the file information.
    reader.onload = (function(theFile) {
        return function(e) {
            // Render thumbnail.
            var span = document.createElement('span');
            span.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
            document.getElementById('output').insertBefore(span, null);
        };
    })(f);
    // Read in the image file as a data URL.
    reader.readAsDataURL(f);
}
document.getElementById('file').addEventListener('change', handleFileSelect, false);