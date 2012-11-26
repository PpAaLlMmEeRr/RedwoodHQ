
Ext.define('Redwood.view.Users', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.usersEditor',
    store: 'Users',
    selType: 'rowmodel',

    minHeight: 150,
    manageHeight: true,
    initComponent: function () {
        var usersEditor = this;

        this.columns = [
            {
                header: 'User ID',
                dataIndex: 'username',
                //flex: 1,
                width: 200
            },
            {
                header: 'First/Last Name',
                dataIndex: 'name',
                //flex: 1,
                width: 200
            },
            {
                header: 'Tags',
                dataIndex: 'tag',
                width: 350
            },
            {
                header: 'Role',
                dataIndex: 'role',
                width: 200
            },
            {
            xtype: 'actioncolumn',
            width: 50,
            items: [
                {
                    icon: 'images/edit.png',  // Use a URL in the icon config
                    tooltip: 'Edit',
                    handler: function(grid, rowIndex, colIndex) {
                        usersEditor.fireEvent('userEdit', {
                            rowIndex: rowIndex,
                            colIndex: colIndex
                        });
                    }
                },
                {
                    icon: 'images/delete.png',
                    tooltip: 'Delete',
                    handler: function(grid, rowIndex, colIndex) {
                        usersEditor.fireEvent('userDelete', {
                            rowIndex: rowIndex,
                            colIndex: colIndex
                        });
                    }
                }
            ]
        }
        ];

        this.dockedItems = [{
            xtype: 'toolbar',
            dock: 'top',
            items: [
                //'<-',
                {
                    iconCls: 'icon-add',
                    text: 'Add User'
                },
                "-",
                {
                    width: 400,
                    fieldLabel: 'Search',
                    labelWidth: 50,
                    xtype: 'searchfield',
                    paramNames: ["tag","username","role","name"],
                    store: Ext.data.StoreManager.lookup('Users')
                }
            ]
        }];
        this.callParent(arguments);
    }
});