<template>
    <el-form label-width="100px" style="width:98%;min-width:600px;" ref="selectForm" :rules="rules" :model="selectForm">
        <div>
            <el-row>
                <el-col :span="24" class="title-2-col">
                    <label class="title-2" @click="titleClick1"><i v-if="loading1" class="el-icon-caret-bottom"></i><i v-else class="el-icon-caret-top"></i>卡对卡转账</label>
                </el-col>
            </el-row>
        </div><hr/><br/>
        <div v-if="loading1" v-loading="listLoading1">
            <el-row class="input-row">
                <el-col :span="8">
                    <el-form-item label="转出账户"  prop="outCardNo1">
                        <el-input  v-model="selectForm.outCardNo1" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="转入账户"  prop="inCardNo1">
                        <el-input  v-model="selectForm.inCardNo1" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="转账金额"  prop="bal1">
                        <el-input  v-model="selectForm.bal1" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="input-row">
                <el-col :span="6">
                    <el-button style="margin-left: 25px;" type="primary" @click.native.prevent="trans" :loading="addLoading1">
                        转 账
                    </el-button>
                </el-col>
            </el-row>
        </div>

        <div>
            <el-row>
                <el-col :span="24" class="title-2-col">
                    <label class="title-2" @click="titleClick2"><i v-if="loading2" class="el-icon-caret-bottom"></i><i v-else class="el-icon-caret-top"></i>一卡转两卡</label>
                </el-col>
            </el-row>
        </div><hr/><br/>
        <div v-if="loading2" v-loading="listLoading2">
            <el-row class="input-row">
                <el-col :span="8">
                    <el-form-item label="转出账户"  prop="outCardNo2">
                        <el-input  v-model="selectForm.outCardNo2" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="转入账户1"  prop="inCardNo21">
                        <el-input  v-model="selectForm.inCardNo21" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="转入账户2"  prop="inCardNo22">
                        <el-input  v-model="selectForm.inCardNo22" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="转账金额"  prop="bal2">
                        <el-input  v-model="selectForm.bal2" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="input-row">
                <el-col>
                    <el-button style="margin-left: 25px;" type="primary" @click.native.prevent="trans2" :loading="addLoading2">
                        转  账
                    </el-button>
                </el-col>
            </el-row>
        </div>

        <div>
            <el-row>
                <el-col :span="24" class="title-2-col">
                    <label class="title-2" @click="titleClick4"><i v-if="loading4" class="el-icon-caret-bottom"></i><i v-else class="el-icon-caret-top"></i>批量生成账号</label>
                </el-col>
            </el-row>
        </div><hr/><br/>
        <div v-if="loading4" v-loading="listLoading4">
            <el-row class="input-row">
                <el-col :span="8">
                    <el-form-item label="批量个数"  prop="createCount">
                        <el-input  v-model="selectForm.createCount" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="起始账号"  prop="startCard">
                        <el-input  v-model="selectForm.startCard" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="原始金额"  prop="initBalance">
                        <el-input  v-model="selectForm.initBalance" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="input-row">
                <el-col :span="6">
                    <el-button style="margin-left: 25px;" type="primary" @click.native.prevent="createCardLoop" :loading="addLoading4">
                        生成账户
                    </el-button>
                </el-col>
            </el-row>
        </div>

        <div>
            <el-row>
                <el-col :span="24" class="title-2-col">
                    <label class="title-2" @click="titleClick3"><i v-if="loading3" class="el-icon-caret-bottom"></i><i v-else class="el-icon-caret-top"></i>批量转账</label>
                </el-col>
            </el-row>
        </div><hr/><br/>
        <div v-if="loading3" v-loading="listLoading3">
            <el-row class="input-row">
                <el-col :span="8">
                    <el-form-item label="批量次数"  prop="batchNum">
                        <el-input  v-model="selectForm.batchNum" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="起始账号"  prop="startCardNo">
                        <el-input  v-model="selectForm.startCardNo" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="转账金额"  prop="bal3">
                        <el-input  v-model="selectForm.bal3" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="input-row">
                <el-col :span="6">
                    <el-button style="margin-left: 25px;" type="primary" @click.native.prevent="transLoop" :loading="addLoading3">
                        转  账
                    </el-button>
                </el-col>
            </el-row>
        </div>

        <div>
            <el-row>
                <el-col :span="24" class="title-2-col">
                    <label class="title-2" @click="titleClick"><i v-if="loading" class="el-icon-caret-bottom"></i><i v-else class="el-icon-caret-top"></i> 交易流水信息</label>
                </el-col>
            </el-row>
        </div><hr/>
        <div v-if="loading" v-loading="listLoading">
            <el-row class="input-row">
                <el-col :span="8">
                    <el-form-item label="转出账户"  prop="outCardNo">
                        <el-input  v-model="selectForm.outCardNo" clearable></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="转入账户"  prop="inCardNo">
                        <el-input  v-model="selectForm.inCardNo" clearable></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row class="input-row">
                <el-col :span="6">
                    <el-button style="margin-left: 25px;" type="primary" @click.native.prevent="getflowing" :loading="addLoading">
                        查  询
                    </el-button>
                </el-col>
            </el-row>
        </div>
        <div v-if="loading" v-loading="listLoading">
            <!--列表-->
            <el-table  v-if="loading" :data="tableInitData" highlight-current-row style="width: 100%" v-loading="listLoading" class="lea_el_table_radio">
                <el-table-column type="index" label="序号"  width="80" align="center"></el-table-column>
                <el-table-column prop="region" label="分区" width="80" align="center"></el-table-column>
                <el-table-column prop="soureCardNo" label="转出账号" width="160"  align="center"></el-table-column>
                <el-table-column prop="destCardNo" label="转入账号" width="160"  align="center"></el-table-column>
                <el-table-column prop="balance" label="转账金额" width="160"  align="center"></el-table-column>
                <el-table-column prop="changeDate" label="操作时间" width="300"  align="center"></el-table-column>
                <el-table-column prop="username" label="操作人" width="320"  align="center"></el-table-column>
            </el-table>
            <div class="block" style="margin-top: 5px;margin-left: 30px" v-if="loading">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="pageInfo.currentPage"
                        :page-size="pageInfo.pagesize"
                        layout="total, prev, pager, next, jumper"
                        :total="tableInitDataTotal">
                </el-pagination>
            </div>
        </div>
        <Modal :show="show" :title="title" @hideModal="hideModal" @submit="submit">
            <p>{{msg1}}</p>
            <p>{{msg2}}</p>
        </Modal>
        <Modal :show="show0" :title="title0" @hideModal="hideModal0" @submit="createSubmit">
            <p>{{msg1}}</p>
            <p>{{msg2}}</p>
            <p>{{msg3}}</p>
        </Modal>
    </el-form>
</template>

<script>

    import axios from 'axios';
    import Modal from './Modal.vue';
    let host = window.location.host,
        // baseUrl = 'http://' + host + '/dbtest';
        baseUrl = 'http://' + host.slice(0,-4) + '8088/dbtest';

    export default {
        data(){
            return {
                listLoading:false, addLoading:false, loading:true,
                listLoading1:false, addLoading1:false, loading1:true,
                listLoading2:false, addLoading2:false, loading2:true,
                listLoading3:false, addLoading3:false, loading3:true,
                listLoading4:false, addLoading4:false, loading4:true,
                selectTableRow:{index:'', row:''},
                tableInitData: [], tableInitDataAll: [], tableInitDataTotal: 0,
                pageInfo:{ pagesize:10, currentPage:1, pagesize2:10, currentPage2:1 },
                rules:{},
                title: '提示信息', show: false,
                title0: '返回信息', show0: false,
                msg1: '', msg2: '', msg3: '',
                selectForm:{
                    outCardNo1:'', inCardNo1:'', bal1:'', cardNo:'',
                    outCardNo2:'', inCardNo21:'', inCardNo22:'', bal2:'',
                    batchNum:'', startCardNo:'',bal3:'',
                    outCardNo:'', inCardNo:'',
                    createCount:'', startCard:'',initBalance:'',
                    region:'', soureCardNo:'', destCardNo:'', balance:'', changeDate:'', username:'',
                },
            }
        },
        components: { Modal },
        methods:{
            titleClick(){this.loading =!this.loading},
            titleClick1(){this.loading1=!this.loading1},
            titleClick2(){this.loading2=!this.loading2},
            titleClick3(){this.loading3=!this.loading3},
            titleClick4(){this.loading4=!this.loading4},
            getTemplateRow(index,row){this.selectTableRow=row;},
            handleSizeChange(val) {console.log(`每页 ${val} 条`);},
            handleCurrentChange(val) {
                let _this = this, page = _this.pageInfo;
                _this.pageInfo.currentPage = val;
                _this.tableInitData = _.filter(_this.tableInitDataAll, function(item, i) {
                    return i >= (page.currentPage - 1) * page.pagesize && i < page.currentPage * page.pagesize;
                });
            },

            /**
             * 卡对卡转账
             */
            trans(){
                if (this.selectForm.outCardNo1 !== "" && this.selectForm.inCardNo1 !== "" && this.selectForm.bal1 !== "") {
                    this.addLoading1 = true;
                    console.log(baseUrl);
                    axios.post(baseUrl + '/trans', {
                        soureCardNo: this.selectForm.outCardNo1,
                        destCardNos: [this.selectForm.inCardNo1],
                        amount: this.selectForm.bal1,
                    }).then(ret => {
                        this.addLoading1 = false;
                        console.log(ret.data);
                        this.getModals(ret.data);
                    })
                } else {
                    this.show = true;
                    this.msg1 = "请输入账号和金额";
                    this.msg2 = "";
                }
            },

            /**
             * 一卡同时转两卡
             */
            trans2(){
                if (this.selectForm.outCardNo2 !== "" && this.selectForm.inCardNo21 !== ""
                    && this.selectForm.inCardNo22 !== "" && this.selectForm.bal2 !== "") {
                    this.addLoading2 = true;
                    axios.post(baseUrl + '/trans2', {
                        soureCardNo: this.selectForm.outCardNo2,
                        destCardNos: [this.selectForm.inCardNo21, this.selectForm.inCardNo22],
                        amount: this.selectForm.bal2
                    }).then(ret => {
                        this.addLoading2 = false;
                        console.log(ret.data);
                        this.getModals(ret.data);
                    })
                } else {
                    this.show = true;
                    this.msg1 = "请输入账号和金额";
                    this.msg2 = "";
                }
            },

            /**
             * 批量转账
             */
            transLoop(){
                if(this.selectForm.batchNum !== "" && this.selectForm.startCardNo !== "" && this.selectForm.bal3 !== ""){
                    this.addLoading3 = true;
                    axios.post(baseUrl + '/transloop',{
                        batchNum:this.selectForm.batchNum,
                        startCardNo:this.selectForm.startCardNo,
                        amount:this.selectForm.bal3,
                    }).then(ret=>{
                        this.addLoading3 = false;
                        console.log(ret.data);
                        this.getModals(ret.data);
                    })
                }else{
                    this.show = true;
                    this.msg1 = "请输入批量次数、起始账号和金额";
                    this.msg2 = "";
                }
            },

            /**
             * 批量生成账户
             */
            createCardLoop(){
                if (this.selectForm.createCount !== "" && this.selectForm.startCard !== "" && this.selectForm.initBalance !== "") {
                    this.addLoading4 = true;
                    axios.post(baseUrl + '/createcardloop', {
                        batchNum: this.selectForm.createCount,
                        startCardNo: this.selectForm.startCard,
                        amount: this.selectForm.initBalance
                    }).then(ret => {
                        this.addLoading4 = false;
                        console.log(ret.data);
                        this.getModals(ret.data);
                    })
                } else {
                    this.show = true;
                    this.msg1 = "请输入批量个数、起始账号和金额";
                    this.msg2 = "";
                }
            },

            /**
             * 生成一条账户信息
             */
            createCard(cardNo){
                axios.post(baseUrl + '/createcard',{
                    cardNo: cardNo,
                    balance: 0,
                }).then(ret=>{
                    this.addLoading4 = false;
                    console.log(ret.data);
                    this.getModals(ret.data);
                })
            },


            /**
             * 查询转账交易流水
             */
            getflowing() {
                this.$refs.selectForm.validate((valid) => {
                    if (valid) {
                        this.addLoading = true;
                        axios.get(baseUrl + '/selectlog',{
                            params:{
                                soureCardNo:this.selectForm.outCardNo,
                                destCardNo:this.selectForm.inCardNo,
                                pageSize:1000,
                                pageNum:1
                            }
                        }).then(ret=>{
                            this.addLoading = false;
                            console.log(ret.data);
                            this.tableInitDataAll = ret.data.list;
                            this.tableInitDataTotal = Number(ret.data.list.length);
                            this.handleCurrentChange(1);
                            this.getModals(ret.data);
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
                this.selectTableRow='';
            },

            hideModal() {this.show = false},
            hideModal0() {this.show0 = false},
            submit() {this.show = false},

            createSubmit(){
                this.show0 = false;
                this.createCard(this.selectForm.cardNo);
            },

            getModals(data){
                if (data.code === "ERROR-1001" || data.code === "ERROR-1003"){
                    this.selectForm.cardNo = data.message.slice(4,-3);
                    console.log(this.selectForm.cardNo);
                    this.show0 = true;
                    this.msg3 = "是否创建该账号？";
                } else {
                    this.show = true;
                }
                this.msg1 = data.code + ":" + data.message;
                this.msg2 = "操作用时：" + data.useTime + "ms";
            },

            mounted() {}
        }

    }
</script>

<style lang="scss" scoped>
    .title-2{
        font-size: 14px;
        color: blue;
        font-weight: bolder;
    }
    .title-2-col{
        padding-top:10px ;
        padding-left: 10px;
        margin-top: 20px;
    }
    .input-row{
        padding-left: 20px;
    }
    .el-input__inner{
        height: 30px;
        width: 200px;
    }
    div.el-date-editor{
        width: 200px!important;
    }
    .el-button{
        padding: 6px 15px;
    }
    .el-form-item{
        margin-bottom: 15px;
    }
    div.el-form-item__error{
        padding-top: 2px;
    }
    tbody>tr>td>div>div.el-date-editor{
        width: 120px!important;
    }
    tbody>tr>td>div>div.el-date-editor>input.el-input__inner{
        width: 120px!important;
    }
    div.el-input{
        width: 240px;
    }
    div.el-table{
        margin-left: 30px;
        margin-right: 30px;
        margin-top: 10px;
    }

</style>
