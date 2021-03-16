<!--search componenet-->
<template>
<div id="search">
    <div class="head">
        <el-row>
            <el-col :span="12" :offset="2">
                <h1 class="title">Salary average</h1>
            </el-col>
               <el-col :span="4" :offset="2">
               <el-button type="warning" @click="showSalary()">Show salary</el-button>
            </el-col>
        </el-row>

    </div>
    <el-row>
        <el-col :span="22" :offset="1">
            <h3 class="subtitle">Results</h3>
            <!--Result table-->
            <el-table class="table" :data="resultsFilter" v-loading="loading">
                <el-table-column prop="lastname" label="Name" class="title">
                   <template slot-scope="scope">
                       {{scope.row.lastname}}, {{scope.row.firstname}}
                    </template>
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
