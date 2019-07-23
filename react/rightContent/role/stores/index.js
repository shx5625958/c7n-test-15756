export default {
    autoQuery: true,
    selection: false,
    paging: true,
    pageSize: 10,
    transport: {
        read: {
            url: `/iam/v1/roles/search`,
            method: 'post',
        },
    },
    fields: [
        {name: 'name', type: 'string', label: '名字', required: true},
        {name: 'code', type: 'string', label: '编码', required: true},
        {name: 'level', type: 'string', label: '层级'},
        {name: 'enabled', type: 'string', label: '状态'},
    ],
};
