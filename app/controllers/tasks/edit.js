import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        editTask(id){
            var self = this;
            var title = this.get('model.title');
            var date = this.get('model.date');
            var desc = this.get('model.description');

            //Update record
            this.store.findRecord('task', id)
            .then(function(task){
                task.set('title', title);
                task.set('date', new Date(date));
                task.set('description', desc);

                //save to database
                task.save();

                self.transitionTo('tasks');
            });
        }
    }
});
