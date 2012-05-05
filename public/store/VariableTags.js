Ext.define('Redwood.store.VariableTags', {
    extend: 'Ext.data.Store',
    model: 'Redwood.model.VariableTags',

    autoLoad: true,
    autoSync: false,
    actionMethods: {
        create : 'POST',
        read   : 'GET',
        update : 'PUT',
        destroy: 'DELETE'
    },
    fields: ['_id','value'],

    proxy: {
        type: 'rest',
        model: 'Redwood.model.VariableTags',
        url: '/variabletags',
        reader: {
            type: 'json',
            root: 'tags',
            successProperty: 'success'
        }
    }
});