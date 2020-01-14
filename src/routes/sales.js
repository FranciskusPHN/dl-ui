module.exports = [
    {
        route: 'sales/finishing-printing-pre-sales-contract',
        name: 'finishing-printing-sales-pre-contract',
        moduleId: './modules/sales/finishing-printing-pre-sales-contract/index',
        nav: true,
        title: 'Pre Sales Contract - Dyeing & Printing',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/finishing-printing-cost-calculation',
        name: 'finishing-printing-cost-calculation',
        moduleId: './modules/sales/finishing-printing-cost-calculation/index',
        nav: true,
        title: 'Cost Calculation - Dyeing & Printing',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },{
        route: 'sales/shin-finishing-printing-sales-contract',
        name: 'shin-finishing-printing-sales-contract',
        moduleId: './modules/sales/shin-finishing-printing-sales-contract/index',
        nav: true,
        title: 'Sales Contract - Dyeing & Printing (New)',
        auth: true,
        settings: {
            group: "sales",
            permission: { /*"A2": 1,*/ "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    // {
    //     route: 'sales/reports/shin-finishing-printing-sales-contract-reports',
    //     name: 'shin-finishing-printing-sales-contract-report',
    //     moduleId: './modules/sales/reports/shin-finishing-printing-sales-contract-report/index',
    //     nav: true,
    //     title: 'Laporan Sales Contract - Dyeing & Printing (New)',
    //     auth: true,
    //     settings: {
    //         group: "sales",
    //         permission: { "A2": 1, "C9": 1 },
    //         iconClass: 'fa fa-dashboard'
    //     }
    // },
    {
        route: 'sales/finishing-printing-sales-contract',
        name: 'finishing-printing-sales-contract',
        moduleId: './modules/sales/finishing-printing-sales-contract/index',
        nav: true,
        title: 'Sales Contract - Dyeing & Printing',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/reports/finishing-printing-sales-contract-reports',
        name: 'finishing-printing-sales-contract-report',
        moduleId: './modules/sales/reports/finishing-printing-sales-contract-report/index',
        nav: true,
        title: 'Laporan Sales Contract - Dyeing & Printing',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/weaving-sales-contract',
        name: 'weaving-sales-contract',
        moduleId: './modules/sales/weaving-sales-contract/index',
        nav: true,
        title: 'Sales Contract - Weaving',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/spinning-sales-contract',
        name: 'spinning-sales-contract',
        moduleId: './modules/sales/spinning-sales-contract/index',
        nav: true,
        title: 'Sales Contract - Spinning',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/reports/weaving-sales-contract-reports',
        name: 'weaving-sales-contract-report',
        moduleId: './modules/sales/reports/weaving-sales-contract-report/index',
        nav: true,
        title: 'Laporan Sales Contract - Weaving',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/reports/spinning-sales-contract-reports',
        name: 'spinning-sales-contract-report',
        moduleId: './modules/sales/reports/spinning-sales-contract-report/index',
        nav: true,
        title: 'Laporan Sales Contract - Spinning',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/shin-production-order',
        name: 'shin-production-order',
        moduleId: './modules/sales/shin-production-order/index',
        nav: true,
        title: 'Surat Perintah Produksi (New)',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/shin-production-order-list-view',
        name: 'shin-production-order-list-view',
        moduleId: './modules/sales/shin-production-order-list-view/index',
        nav: true,
        title: 'Surat Perintah Produksi (New)',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/production-order',
        name: 'production-order',
        moduleId: './modules/sales/production-order/index',
        nav: true,
        title: 'Surat Perintah Produksi',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/production-order-list-view',
        name: 'production-order-list-view',
        moduleId: './modules/sales/production-order-list-view/index',
        nav: true,
        title: 'Surat Perintah Produksi',
        auth: true,
        settings: {
            group: "sales",
            permission: { "F1": 1, "F2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/reports/production-order-reports',
        name: 'production-order-report',
        moduleId: './modules/sales/reports/production-order-report/index',
        nav: true,
        title: 'Monitoring Surat Perintah Produksi',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/do-sales',
        name: 'do-sales',
        moduleId: './modules/sales/do-sales/index',
        nav: true,
        title: 'DO Penjualan',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/sales-invoice',
        name: 'sales-invoice',
        moduleId: './modules/sales/sales-invoice/index',
        nav: true,
        title: 'Faktur Penjualan',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/sales-receipt',
        name: 'sales-receipt',
        moduleId: './modules/sales/sales-receipt/index',
        nav: true,
        title: 'Kwitansi Penjualan',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/reports/sales-monthly-reports',
        name: 'sales-monthly-report',
        moduleId: './modules/sales/reports/sales-monthly-report/index',
        nav: true,
        title: 'Sales Monthly Report / Laporan Sales Per Bulan',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/deal-tracking',
        name: 'deal-tracking',
        moduleId: './modules/sales/deal-tracking/index',
        nav: true,
        title: 'Deal Tracking',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1, "PGA": 1, "PA": 1, "PM": 1, "PE": 1 },
            iconClass: 'fa fa-dashboard'
        }
    },
    {
        route: 'sales/order-status-report',
        name: 'order-status-report',
        moduleId: './modules/sales/reports/order-status-report/index',
        nav: true,
        title: 'Laporan Status Order',
        auth: true,
        settings: {
            group: "sales",
            permission: { "A2": 1, "C9": 1 },
            iconClass: 'fa fa-dashboard'
        }
    }
];
