new Vue({
        el: '#exercise',
        data: {
            value: 'shablam'
        },
        methods: {
            showAlert: function() {
            alert('big ol dicks');
            },
            keyDown: function() {
                event.target.value.enter('shablam');
            }
            


            

        }
    });