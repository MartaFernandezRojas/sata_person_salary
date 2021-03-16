<!--search componenet-->
<template>
<div id="search">
    <div class="head">
        <el-row>
            <el-col :span="12" :offset="6">
                <h1 class="title">Salary average</h1>
            </el-col>
        </el-row>

    </div>
    <el-row>
        <el-col :span="22" :offset="1">
            <h3 class="subtitle">Results</h3>
            <!--Result table-->
            <el-table class="table" :data="resultsFilter" v-loading="loading">
                <el-table-column prop="name" label="Name" class="title">
                </el-table-column>
                <el-table-column prop="age" label="Age" class="title">
                </el-table-column>
                <el-table-column prop="salary" label="Salary" class="title" align="center">
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</div>
</template>

<style src="./salary.scss" lang="scss"></style>
<script src="./salary.js"><script>
