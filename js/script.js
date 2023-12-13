const { createApp } = Vue;

createApp({
    data(){
        return{
            tasks : [
                {
                    text: 'Preparare la valigia',
                    done: true,
                },
                {
                    text: 'Stampare biglietto',
                    done: true,
                },
                {
                    text: 'Portare scarpe comode',
                    done: true,
                },
                {
                    text: 'Ricordarsi lo spazzolino',
                    done: true,
                },
                {
                    text: 'Comprare crema solare',
                    done: true,
                },
            ]
        }
    },
    methods:{
        toggleDone(index){
            this.tasks[index].done = !this.tasks[index].done;
        },
        removeTodo(index){
            this.tasks.splice(index,1);
        }
    },
}).mount('#app');