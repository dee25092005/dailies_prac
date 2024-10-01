<template>
<!-- /.navbar -->

<!-- /.navbar -->
<HeaderComponent />
<SidebarComponent />

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0"><b class="text-primary">
                            <marquee behavior="" direction="">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ</marquee>
                        </b></h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link to="/dashboard" href="#">ຫນ້າຫຼັກ</router-link>
                        </li>
                        <li class="breadcrumb-item active">ເເອັດມິນ</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="d-flex justify-content-between">
                                <div class="d-flex mb-2">
                                    <input type="search" required v-model="searchQueryname" class="form-control" placeholder="ຊອກຫາແຜນການ">
                                    <button @click="SearchPlan" class="btn btn-primary ml-2"><i class="fas fa-search"></i></button>
                                </div>
                                <div class="d-flex mb-2">
                                    <input type="search" required v-model="searchQuerypercent" class="form-control" placeholder="ຊອກຫາ %">
                                    <button @click="SearchPlan" class="btn btn-primary ml-2"><i class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div><!-- /.col -->
            </div><!-- /.row -->

        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <h3 class="text-center text-primary">ເເຜນການ</h3>
                    <div class="overflow-a">
                        <table class="table table-striped ">
                            <thead>
                                <tr>
                                    <th>ລຳດັບ</th>
                                    <th>ຊື່</th>
                                    <th>ເປີເຊັນ</th>
                                    <th>active</th>
                                    <th>ສະຖານະ</th>
                                    <th>ສ້າງວັນທີ</th>
                                    <th>ອັບເດດວັນທີ</th>
                                    <th>ປຸ່ມຄຳສັ່ງ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="none_data">
                                    <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                                </tr>
                                <tr v-else v-for="(plan, index) in plans" :key="plan.id">
                                    <td>{{ index + 1}}</td>
                                    <td class="text-bold ">{{ plan.name }}</td>
                                    <td class="text-bold text-success">{{ plan.percent }}%</td>
                                    <td class="text-bold text-danger">{{ plan.active }}%</td>
                                    <td :class="plan.status === 0 ? 'text-danger': 'text-success'">
                                        <b>{{ plan.status === 1 ? 'ສຳເັລດ' : 'ຍັງບໍ່ສຳເລັດ' }}</b>
                                    </td>
                                    <td><b class="text-success">{{ plan.created_at }}</b></td>
                                    <td><b class="text-danger">{{ plan.updated_at }}</b></td>
                                    <td>
                                        <button @click="ShowPlanItem(plan.id)" class="btn btn-warning " data-toggle="modal" data-target="#modal-info"><i class="fas fa-edit"></i></button>
                                        <button @click="ConfirmDelete(plan.id)" href="" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal-info">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content ">
                        <div class="modal-header bg-info">
                            <h4 class="modal-title">ຟອມເເກ້ໄຂຂໍ້ມູນ ເເອັດມິນ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form enctype="multipart/form-data" @submit.prevent="UpdatePlan">
                            <div class="modal-body">
                                <div class="row">
                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputEmail1">ຊື່:<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" required v-model="updatename" id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                    </div>
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputEmail1">ເປີເຊັນ:<span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" required v-model="updatepercent" id="exampleInputEmail1" placeholder="%">
                                    </div>
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputEmail1">ເຄື່ອນໄຫວ:<span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" required v-model="updateactive" id="exampleInputEmail1" placeholder="%">
                                    </div>
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputEmail1">ສະຖານະ:<span class="text-danger">*</span></label>
                                        <select name="" id="" class="from-control" required v-model="updatestatus">
                                            <option value="0">ບໍ່ສຳເລັດ</option>
                                            <option value="1">ສຳເລັດ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times mr-1"></i>ຍົກເລິກ</button>
                                <button type="submit" class="btn btn-info"><i class="fas fa-print mr-1"></i>ບັນທຶກ</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <!-- /.modal -->
            <!-- /.row (main row) -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</div>
</template>

    
<script>
import HeaderComponent from './includes/HeaderComponent.vue';
import SidebarComponent from './includes/SidebarComponent.vue';
import axios from 'axios';
import Swal from 'sweetalert2';
// import { sweetAlert } from 'public/plugins/sweetalert2/sweetalert2.all';
// import responsiveBootstrap4 from 'public/plugins/datatables-responsive/js/responsive.bootstrap4';

export default {

    name: "PlanSuccessComponent",
    components: {
        HeaderComponent,
        SidebarComponent

    },
    props: {
        plan: Object
    },
    computed: {
        statusClass() {
            return this.plan.status === 0 ? 'text-danger' : 'text-success';
        },
        statusText() {
            return this.plan.status === 0 ? 'not success' : 'success';
        }
    },

    data() {
        return {
            name: '',
            percent: '',
            active: '',

            updatename: '',
            updatepercent: '',
            updateactive: '',
            updatestatus: '',

            plan_ID: null,
            plans: [],
            searchQueryname: '',
            searchQuerypercent: ''
        }

    },
    created() {

        //Funtion show plan
        this.ShowPlanSuccess();
    },
    methods: {
        async ShowPlanSuccess() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-plan-success');
                if (Array.isArray(response.data)) {
                    this.plans = response.data;
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('error plan');
            }
        },
        async ConfirmDelete(plan_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່:' + plan_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeletePlan(plan_ID);
                }
            });
        },
        async DeletePlan(plan_ID) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/delete-plan/${plan_ID}`);
                console.log(response.data);
                Swal.fire({
                    title: 'ລົບລ້າງ!',
                    text: 'ຂໍ້ມູນໄດ້ຖືກລຶບສຳເລັດແລ້ວ',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }).then(() => {
                    this.ShowPlans();
                });
            } catch (error) {
                console.error('Error deleting plan', error);
                Swal.fire({
                    title: 'ລົບລ້າງບໍ່ໄດ້!',
                    text: 'ຂໍ້ມູນທີ່ຕ້ອງການລຶບເກີດຂໍ້ຜິດພາດ',
                    icon: 'error',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
            }
        },

        async SearchPlan() {
            const params = new URLSearchParams();

            if (this.searchQueryname) {
                params.append('name', this.searchQueryname);
            }
            if (this.searchQuerypercent) {
                params.append('percent', this.searchQuerypercent)
            }

            fetch(`http://localhost:3000/api/search-plan?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.plans = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },

        //Function Show plan Item 

        async ShowPlanItem(plan_ID) {
            this.plan_ID = plan_ID;
            try {
                const response = await axios.get(`http://localhost:3000/api/plan/${plan_ID}`);
                this.updatename = response.data.name,
                    this.updatepercent = response.data.percent,
                    this.updateactive = response.data.active,
                    this.updatestatus = response.data.status
            } catch (error) {
                console.error(error.response.data);
            }
        },

        //Function updateplan
        async UpdatePlan() {
            try {
                const response = await axios.put(`http://localhost:3000/api/update-plan/${this.plan_ID}`, {
                    name: this.updatename,
                    percent: this.updatepercent,
                    active: this.updateactive,
                    status: this.updatestatus
                });
                console.log(response.data);
                this.$router.push('/plan-success');
                this.ShowUpdateMessage();
                this.SearchPlan();
            } catch (error) {
                console.error(error.response.data)
                this.ShowErrorMassage();
            }
        },
        async ShowUpdateMessage() {
            Swal.fire({
                title: "ແກ້ໄຂສຳເລັດ",
                text: "ຂໍ້ມູນຖືກແກ້ໄຂສຳເລັດເເລ້ວ",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

        async ShowSuccessMessage() {
            Swal.fire({
                title: "ບັນທຶກສຳເລັດ",
                text: "ຂໍ້ມູນຖືກບັນທຶກສຳເລັດເເລ້ວ",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

        async ShowErrorMassage() {
            Swal.fire({
                title: "ເກີດຂໍ້ຜິດພາດ",
                text: "ກະລຸນາລອງໃຫມ່ອີກຄັ້ງ",
                icon: "warning",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        }
    }
}
</script>
