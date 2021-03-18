<!--search componenet-->
<template>
<div id="search">
    <!--header-->
    <div class="head">
        <span class="title">Salary average</span>
        <!--Button for calculate salary-->
        <div>
            <el-button class="button" type="primary" @click="calculateSalary()" icon="el-icon-refresh-right" circle></el-button>
        </div>
    </div>
    <!--Responsive tabel-->
    <table class="table_responsive">
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="data in resultsFilter">
                <td>{{data.lastname}}, {{data.firstname}}</td>
                <td>{{data.age}}</td>
                <td>{{data.salary}}<span v-if="data.salary!='calculating...'">€</span></td>
            </tr>
        </tbody>
    </table>
    <div class="avg">
        <span class="average" v-loading="loading" v-if="average!=0">AVG: {{Math.round(average)}}€</span>
    </div>
</div>
</template>

<style src="./salary.scss" lang="scss"></style>
<script src="./salary.js"><script>
