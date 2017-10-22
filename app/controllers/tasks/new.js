import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        addTask(){
            var title = this.get('title');
            var date = this.get('date');
            var desc = this.get('description');

            var newTask = this.store.createRecord('task', {
                title: title,
                date: new Date(date),
                description: desc
            });

            newTask.save();
            this.setProperties({
                title: '',
                description: '',
                date: ''
            });
            alert(`Title: ${title}, Date: ${date}, Description: ${desc}`);
        }
    }
});
