<!--search componenet-->
<template>
<div id="search">
    <div class="head">
        <el-row>
            <el-col :span="10" :offset="2">
                <h1 class="title">Salary average</h1>
            </el-col>
               <el-col :span="4" :offset="2" class="margin-top">
               <el-button type="warning" @click="printSalary()">Show salary</el-button>
                <span class="title" v-if="average!=0">AVG: {{Math.round(average)}}€</span>
            </el-col>
        </el-row>
    </div>
    <el-row>
        <el-col :span="22" :offset="1">
            <h3 class="subtitle">Results</h3>
            <!--Result table-->
            <el-table class="margin-top" :data="resultsFilter" >
                <el-table-column prop="lastname" label="Name" class="title">
                   <template slot-scope="scope">
                       {{scope.row.lastname}}, {{scope.row.firstname}}
                    </template>
                </el-table-column>
                <el-table-column prop="age" label="Age" class="title">
                </el-table-column>
                <el-table-column prop="salary" label="Salary" class="title" align="center">
                 <template slot-scope="scope" >
                       {{scope.row.salary}} <span  v-if="scope.row.salary!='calculating...'">€</span>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</div>
</template>

<style src="./salary.scss" lang="scss"></style>
<script src="./salary.js"><script>
