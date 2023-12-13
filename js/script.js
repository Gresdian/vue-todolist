const { createApp } = Vue;

createApp({
    data(){
        return{
            text_task: '',
            tasks : [
                {
                    text: 'Preparare la valigia',
                    done: false,
                },
                {
                    text: 'Stampare biglietto',
                    done: false,
                },
                {
                    text: 'Portare scarpe comode',
                    done: false,
                },
                {
                    text: 'Ricordarsi lo spazzolino',
                    done: false,
                },
                {
                    text: 'Comprare crema solare',
                    done: false,
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
        },
        addTask(){
           let obj = {
            text: this.text_task,
            done: false,

        }
        
        this.tasks.push(obj);
        this.text_task = '';
        }
    },
}).mount('#app');