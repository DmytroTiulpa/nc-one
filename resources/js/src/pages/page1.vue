<template>
    <h1>Page 1</h1>

    <h3>Table 1</h3>
    <table id="example-table-1" ref="dataTable1" class="uk-table uk-table-middle uk-table-divider">
        <thead>
        <tr>
            <th class="">Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <!--<tr>
            <td>Table Data</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
            <td><button class="uk-button uk-button-default" type="button">Button</button></td>
        </tr>
        <tr>
            <td>Table Data</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</td>
            <td><button class="uk-button uk-button-default" type="button">Button</button></td>
        </tr>-->
        </tbody>
    </table>

    <br>
    <h3>Table 2</h3>
    <table id="example-table-2" ref="dataTable2" class="uk-table uk-table-middle uk-table-divider">
        <thead>
        <tr>
            <th class="">Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

    <br>
    <h3>Table 3</h3>
    <table id="example-table-3" ref="dataTable3" class="uk-table uk-table-middle uk-table-divider">
        <thead>
        <tr>
            <th class="">Name</th>
            <th>Age</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        </tbody>
    </table>

</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
    components: {},
    setup() {
        return {};
    },
    mounted() {
        this.initDataTable();
        this.drawUserData();
    },
    methods: {
        initDataTable() {
            this.dataTableInstance = $(this.$refs.dataTable1).DataTable({
                searching: false,
                paging: true,   // пагинация
                pageLength: 5,  // количество записей на странице
            });
            this.dataTableInstance = $(this.$refs.dataTable2).DataTable({
                searching: false,
                paging: false,  // пагинация
            });
            this.dataTableInstance = $(this.$refs.dataTable3).DataTable({
                searching: false,
                paging: false,  // пагинация
            });
        },
        drawUserData() {
            // Генерация 50 строк с тестовыми данными
            let table1 = $('#example-table-1').DataTable();
            let table2 = $('#example-table-2').DataTable();
            let table3 = $('#example-table-3').DataTable();
            for (var i = 0; i < 20; i++) {
                let name = 'Имя ' + (i + 1);
                let age = Math.floor(Math.random() * 50) + 18; // Возраст от 18 до 67 лет
                let email = 'email' + (i + 1) + '@example.com';
                table1.row.add([name, age, email]).draw();
                table2.row.add([name, age, email]).draw();
                table3.row.add([name, age, email]).draw();
            }
        }
    }
});
</script>

<style>
    /* Ваши пользовательские стили для пагинации */
    a.paginate_button {
        background-color: #dadada;
        border: 1px solid #939393 !important;
        border-radius: 3px;
        margin: 5px !important;
        padding: 3px 10px 5px 10px !important;
    }
    .dataTables_info {
        display: inline-block;
        float: left;
    }
    .dataTables_paginate {
        display: inline-block;
        float: right;
    }
</style>
