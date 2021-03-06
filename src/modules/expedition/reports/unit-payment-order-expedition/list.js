import { inject } from 'aurelia-framework';
import moment from 'moment';
import numeral from 'numeral';
import XLSX from 'xlsx';
import { Service, AzureService } from './service';
const SupplierLoader = require('../../../../loader/supplier-loader');
const DivisionLoader = require('../../../../loader/division-loader');
const UnitPaymentOrderLoader = require('../../../../loader/unit-payment-order-loader');

@inject(Service, AzureService)
export class List {
    columns = [
        [
            { field: 'no', title: 'No. SPB', rowspan: 2, sortable: true },
            {
                field: 'date', title: 'Tgl SPB', formatter: function (value, data, index) {
                    return moment(value).format('DD MMM YYYY');
                },
                rowspan: 2,
                sortable: true,
            },
            {
                field: 'dueDate', title: 'Tgl Jatuh Tempo', formatter: function (value, data, index) {
                    return moment(value).format('DD MMM YYYY');
                },
                rowspan: 2,
                sortable: true,
            },
            { field: 'invoceNo', title: 'Nomor Invoice', rowspan: 2, sortable: true },
            { field: 'supplier.name', title: 'Supplier', rowspan: 2, sortable: true },
            { field: 'division.name', title: 'Divisi', rowspan: 2, sortable: true },
            {
                field: 'position', title: 'Posisi', formatter: (value, data, index) => {
                    let status = this.itemsStatus.find(p => p.value === value);
                    return status.text;
                },
                rowspan: 2,
                sortable: true,
            },
            {
                field: 'SendToVerificationDivisionDate', title: 'Tgl Pembelian Kirim', formatter: function (value, data, index) {
                    return value ? moment(value).format('DD MMM YYYY') : '-';
                },
                rowspan: 2,
            },
            { title: 'Verifikasi', colspan: 3 },
            { title: 'Kasir', colspan: 5 }
        ], [
            {
                field: 'VerificationDivisionDate', title: 'Tgl Terima', formatter: function (value, data, index) {
                    return value ? moment(value).format('DD MMM YYYY') : '-';
                },
            },
            {
                field: 'VerifyDate', title: 'Tgl Cek', formatter: function (value, data, index) {
                    return value ? moment(value).format('DD MMM YYYY') : '-';
                },
            },
            {
                field: 'SendDate', title: 'Tgl Kirim', formatter: function (value, data, index) {
                    return value ? moment(value).format('DD MMM YYYY') : '-';
                },
            },
            {
                field: 'CashierDivisionDate', title: 'Tgl Terima', formatter: function (value, data, index) {
                    return value ? moment(value).format('DD MMM YYYY') : '-';
                },
            },
            {
                field: 'BankExpenditureNoteDate', title: 'Tgl Bayar', formatter: function (value, data, index) {
                    return value ? moment(value).format('DD MMM YYYY') : '-';
                },
            },
            {
                field: 'BankExpenditureNoteNo', title: 'No Kuitansi'
            },
            {
                field: 'BankExpenditureNotePPHDate', title: 'Tgl Bayar PPH', formatter: function (value, data, index) {
                    return value ? moment(value).format('DD MMM YYYY') : '-';
                },
            },
            {
                field: 'BankExpenditureNotePPHNo', title: 'No Kuitansi PPH'
            },
        ]
    ];

    controlOptions = {
        label: {
            length: 4,
        },
        control: {
            length: 4,
        },
    };

    tableOptions = {
        showColumns: false,
        search: false,
        showToggle: false,
    };

    constructor(service, azureService) {
        this.service = service;
        this.azureService = azureService;

        this.flag = false;
        this.selectUPO = ['no'];
        this.selectSupplier = ['code', 'name'];
        this.divisionSelect = ['code', 'name'];
        this.itemsStatus = [
            { text: '', value: 0 },
            { text: 'Bag. Pembelian', value: 1 },
            { text: 'Dikirim ke Bag. Verifikasi', value: 2 },
            { text: 'Bag. Verifikasi', value: 3 },
            { text: 'Dikirim ke Bag. Kasir', value: 4 },
            { text: 'Dikirim ke Bag. Keuangan', value: 5 },
            { text: 'Dikirim ke Bag. Pembelian', value: 6 },
            { text: 'Bag. Kasir', value: 7 },
            { text: 'Bag. Keuangan', value: 8 },
        ];
    }

    loader = (info) => {
        let order = {};
        if (info.sort)
            order[info.sort] = info.order;

        let filter = {};

        if (this.unitPaymentOrder) {
            filter.no = this.unitPaymentOrder.no;
        }

        if (this.supplier) {
            filter.supplierCode = this.supplier.code;
        }

        if (this.division) {
            filter.divisionCode = this.division.code;
        }

        if (this.status.value != 0) {
            filter.status = this.status.value;
        }

        if (this.dateFrom && this.dateFrom != 'Invalid Date' && this.dateTo && this.dateTo != 'Invalid Date') {
            filter.dateFrom = this.dateFrom;
            filter.dateTo = this.dateTo;
        }
            
        if (Object.getOwnPropertyNames(filter).length === 0) {
            filter.dateFrom = new Date();
            filter.dateFrom.setMonth(filter.dateFrom.getMonth() - 1);
            filter.dateTo = new Date();
        }

        let arg = {
            page: parseInt(info.offset / info.limit, 10) + 1,
            size: info.limit,
            filter: JSON.stringify(filter),
            order: order,
            select: ['no', 'date', 'dueDate', 'invoceNo', 'supplier.name', 'division.name', 'position'],
        };

        return this.flag ? (
            this.service.search(arg)
                .then(result => {
                    let unitPaymentOrders = result.data.map(p => p.no);

                    return this.azureService.search({ unitPaymentOrders })
                        .then(response => {
                            let expeditions = response.data;

                            for (let d of result.data) {
                                let expedition = expeditions.find(p => p.UnitPaymentOrderNo == d.no);

                                if (expedition) {
                                    Object.assign(d, expedition);
                                }
                            }

                            return {
                                total: result.info.total,
                                data: result.data
                            }
                        });
                })
        ) : { total: 0, data: [] };
    }

    search() {
        this.flag = true;
        this.tableList.refresh();
    }

    getExcelData() {
        let info = {
            offset: this.page * 50,
            limit: 50,
        };

        this.loader(info)
            .then(response => {
                this.excelData.push(...response.data);

                if (this.excelData.length !== response.total) {
                    this.page++;
                    this.getExcelData();
                }
                else {
                    let wsData = [];

                    for (let data of this.excelData) {
                        wsData.push({
                            'No. SPB': data.no,
                            'Tgl SPB': moment(data.date).format('DD MMM YYYY'),
                            'Tgl Jatuh Tempo': moment(data.dueDate).format('DD MMM YYYY'),
                            'Nomor Invoice': data.invoceNo,
                            'Supplier': data.supplier.name,
                            'Divisi': data.division.name,
                            'Posisi': this.itemsStatus.find(p => p.value === data.position).text,
                            'Tgl Pembelian Kirim': data.SendToVerificationDivisionDate ? moment(data.SendToVerificationDivisionDate).format('DD MMM YYYY') : '-',
                            'Tgl Terima Verifikasi': data.VerificationDivisionDate ? moment(data.VerificationDivisionDate).format('DD MMM YYYY') : '-',
                            'Tgl Cek Verifikasi': data.VerifyDate ? moment(data.VerifyDate).format('DD MMM YYYY') : '-',
                            'Tgl Kirim Verifikasi': data.SendDate ? moment(data.SendDate).format('DD MMM YYYY') : '-',
                            'Tgl Terima Kasir': data.CashierDivisionDate ? moment(data.CashierDivisionDate).format('DD MMM YYYY') : '-',
                            'Tgl Bayar Kasir': data.BankExpenditureNoteDate ? moment(data.BankExpenditureNoteDate).format('DD MMM YYYY') : '-',
                            'No Kuitansi': data.BankExpenditureNoteNo,
                            'Tgl Bayar Kasir PPH': data.BankExpenditureNotePPHDate ? moment(data.BankExpenditureNotePPHDate).format('DD MMM YYYY') : '-',
                            'No Kuitansi PPH': data.BankExpenditureNotePPHNo
                        });
                    }

                    let wb = XLSX.utils.book_new();
                    wb.Props = {
                        Title: 'Report',
                        Subject: 'Dan Liris',
                        Author: 'Dan Liris',
                        CreatedDate: new Date()
                    };
                    wb.SheetNames.push('Surat Perintah Bayar');

                    let ws = XLSX.utils.json_to_sheet(wsData);
                    wb.Sheets['Surat Perintah Bayar'] = ws;

                    let wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' });
                    let buf = new ArrayBuffer(wbout.length);
                    let view = new Uint8Array(buf);
                    for (let i = 0; i < wbout.length; i++) view[i] = wbout.charCodeAt(i) & 0xFF;

                    let fileSaver = require('file-saver');
                    fileSaver.saveAs(new Blob([buf], { type: 'application/octet-stream' }), 'Laporan Expedisi.xlsx');
                }
            });
    }

    excel() {
        this.flag = true;

        this.page = 0;
        this.excelData = [];
        this.getExcelData();
    }

    reset() {
        this.flag = false;
        this.unitPaymentOrder = undefined;
        this.supplier = undefined;
        this.division = undefined;
        this.status = { value: 0 };
        this.dateFrom = undefined;
        this.dateTo = undefined;
        this.tableList.refresh();
    }

    get supplierLoader() {
        return SupplierLoader;
    }

    get divisionLoader() {
        return DivisionLoader;
    }

    get unitPaymentOrderLoader() {
        return UnitPaymentOrderLoader;
    }
}
