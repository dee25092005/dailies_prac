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
            <div class="row mb-2">
                <div class="col-sm-6">

                </div><!-- /.col -->
                <div class="col-sm-6">
                    <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6">
                            <div class="d-flex">
                                <input type="search" required v-model="searchQuery" class="form-control" placeholder="ຊອກຫາ....">
                                <button @click="SearchAdmin" class="btn btn-primary ml-2"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div><!-- /.col -->
            </div><!-- /.row -->

        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container">
            <!-- Small boxes (Stat box) -->
            <button class="btn btn-primary"><i class="fas fa-plus md-2">ເພີ່ມ</i></button>
            <div class="overflow-auto">
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                            <th>1</th>
                        </tr>
                    <tbody>
                        <tr v-if="none_data">
                                <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                            </tr>
                            <tr v-else v-for="(daily, index) in dailys" :key="daily.DL_ID">
                                <td>{{ index + 1 }}</td>
                                <td>{{ daily.five_six }}</td>
                                <td>{{ daily.six_seven }}</td>
                                <td>{{ daily.seven_eight }}</td>
                                <td>{{ daily.eight_nine }}</td>
                                <td>{{ daily.nine_ten }}</td>
                                <td>{{ daily.ten_eleven }}</td>
                                <td>{{ daily.eleven_twelve }}</td>
                                <td>{{ daily.twelve_thirteen }}</td>
                                <td>{{ daily.thriteen_fourteen }}</td>
                                <td>{{ daily.fourteen_fifteen }}</td>
                                <td>{{ daily.sixteen_seventeen }}</td>
                                <td>{{ daily.eighteen_nineteen }}</td>
                                <td>{{ daily.nineteen_twenty }}</td>
                                <td>{{ daily.twenty_twentyone }}</td>
                                <td>{{ daily.twentyone_twentytwo }}</td>
                                <td>{{ daily.twentytwo_twentythree }}</td>
                                <td>{{ daily.twentythree_four }}</td>
                                <td>{{ daily.days }}</td>
                                <td>{{ daily.created_at }}</td>
                                <td>{{ daily.updated_at }}</td>
                            </tr>
                    </tbody>
                    </thead>
                </table>
            </div>
            <div class="modal fade" id="modal-info">
                <div class="modal-dialog modal-md">
                    <div class="modal-content ">
                        <div class="modal-header bg-info">
                            <h4 class="modal-title">ຟອມເເກ້ໄຂຂໍ້ມູນ ເເອັດມິນ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form enctype="multipart/form-data" @submit.prevent="UpdateAdmin">
                            <div class="modal-body">
                                <div class="row">
                                </div>
                            </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputEmail1">ຊື່:<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" required v-model="updateusername" id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                    </div>
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputEmail1">ອີເມວ:<span class="text-danger">*</span></label>
                                        <input type="email" class="form-control" required v-model="updateemail" id="exampleInputEmail1" placeholder="email@gmail.com">
                                    </div>
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputPassword1">ລະຫັດຜ່ານ:<span class="text-danger">*</span></label>
                                        <input type="password" class="form-control" required v-model="updatepassword" id="exampleInputPassword1" placeholder="*">
                                    </div>
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputPassword1">ເບີໂທ:<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" required v-model="updatephone" id="exampleInputPassword1" placeholder="0207x xxx xxx">
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

    name: "DailyComponent",
    components: {
        HeaderComponent,
        SidebarComponent

    },
    data() {
        return {

            five_six: '',
            six_seven: '',
            seven_eight: '',
            eight_nine: '',
            nine_ten: '',
            ten_eleven: '',
            eleven_twelve: '',
            twelve_thirteen: '',
            thriteen_fourteen: '',
            fourteen_fifteen: '',
            fifteen_sixteen: '',
            sixteen_seventeen: '',
            seventeen_eighteen: '',
            eighteen_nineteen: '',
            nineteen_twenty: '',
            twenty_twentyone: '',
            twentyone_twentytwo: '',
            twentytwo_twentythree: '',
            twentythree_four: '',
            days: '',
            created_at:'',
            updated_at:'',

            update_five_six: '',
            update_six_seven: '',
            update_seven_eight: '',
            update_eight_nine: '',
            update_ten_eleven: '',
            update_eleven_twelve: '',
            update_twelve_thirteen: '',
            update_thriteen_fourteen: '',
            update_fourteen_fifteen: '',
            update_fifteen_sixteen: '',
            update_sixteen_seventeen: '',
            update_seventeen_eighteen: '',
            update_eighteen_nineteen: '',
            update_nineteen_twenty: '',
            update_twenty_twentyone: '',
            update_twentyone_twentytwo: '',
            update_twentytwo_twentythree: '',
            update_twentythree_four: '',
            update_days: '',

            Daily_ID: null,
            dailys: [],
            searchQuery: ''
        }

    },
    created() {

        //Funtion showadmin
        this.ShowDailys();
    },
    methods: {
        async ShowDailys() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-daily');
                if (Array.isArray(response.data)) {
                    this.dailys = response.data;
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('error dailys');
            }
        },

        //function create admin
        async CreateAdmin() {
            try {
                const response = await axios.post('http://localhost:3000/api/create-admin', {
                    username: this.username,
                    email: this.email,
                    password: this.password,
                    phone: this.phone
                });
                console.log(response.data);
                this.ShowAdmins();
                this.ShowSuccessMessage();
                this.ResetAdmin_Form();
            } catch (error) {
                console.error('Error create admin', error);
                this.ShowErrorMassage();
            }
        },

        // Funtion Reset Admin form 
        async ResetAdmin_Form() {
            this.username = "",
                this.email = "",
                this.password = "",
                this.phone = ""
        },

        async SearchAdmin() {
            const params = new URLSearchParams();
            params.append('username', this.searchQuery,
                'email', this.searchQuery,
                'phone', this.searchQuery
            );

            fetch(`http://localhost:3000/api/search-admin?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.admins = data;
                })
                .catch((error) => {
                    console.error('search error', error);
                })

        },
        async ConfirmDelete(Admin_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່:' + Admin_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteAdmin(Admin_ID);
                }
            });
        },
        async DeleteAdmin(Admin_ID) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/delete-admin/${Admin_ID}`);
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
                    this.ShowAdmins();
                });
            } catch (error) {
                console.error('Error deleting admin', error);
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

        //Function Show Admin Item 

        async ShowAdminItem(Admin_ID) {
            this.Admin_ID = Admin_ID;
            try {
                const response = await axios.get(`http://localhost:3000/api/admin/${Admin_ID}`);
                this.updateusername = response.data.username,
                    this.updateemail = response.data.email,
                    this.updatepassword = "",
                    this.updatephone = response.data.phone
            } catch (error) {
                console.error(error.response.data);
            }
        },

        //Function updateAdmin
        async UpdateAdmin() {
            try {
                const response = await axios.put(`http://localhost:3000/api/update-admin/${this.Admin_ID}`, {
                    username: this.updateusername,
                    email: this.updateemail,
                    password: this.updatepassword,
                    phone: this.updatephone
                });
                console.log(response.data);
                this.$router.push('/admin');
                this.ShowUpdateMessage();
                this.SearchAdmin();
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
