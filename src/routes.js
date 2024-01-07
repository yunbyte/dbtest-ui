import Home from './views/Home.vue'
import Trans from "./views/Trans.vue";

let routes = [
    // {
    //     path: '/',
    //     component: Home,
    //     hidden: true
    // },
    {
        path: '/', component: Home, name: '数据库事务', parent: 'personal',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            {path: '/', component: Trans, name: '转账测试', meta: {parent: 'personal', target: '/'}},
        ]
    }
];

export default routes;
