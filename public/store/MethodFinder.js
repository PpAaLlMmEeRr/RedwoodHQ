Ext.define('Redwood.store.MethodFinder', {
    extend: 'Ext.data.TreeStore',
    model: 'Redwood.model.MethodFinder',

    autoLoad: true,
    autoSync: false,
    folderSort: true,

    sorters: [{

        property : 'cls',
        direction: 'DESC'

    },
        {
            property : 'text',
            direction: 'ASC'

        }

    ],
    proxy: {
        actionMethods: {
            read   : 'POST'
        },
        type: 'rest',
        url: '/methodFinder',
        reader: {
            type: 'json'
        }
    }

});