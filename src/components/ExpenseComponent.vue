<template>
<!-- Navbar -->

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
                            <marquee behavior="" direction="">ລາຍຮັບ-ລາຍຈ່າຍ</marquee>
                        </b></h1>
                </div><!-- /.col -->
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item">
                            <router-link to="/dashboard" href="#">ໜ້າຫຼັກ</router-link>
                        </li>
                        <li class="breadcrumb-item active">ລາຍຮັບ-ລາຍຈ່າຍ</li>
                    </ol>
                </div><!-- /.col -->
            </div><!-- /.row -->
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6">
                        <div class="d-flex justify-content-between">

                            <div class="d-flex mb-2">
                                <input type="search" required v-model="searchQueryIncome" class="form-control" placeholder="ຊອກຫາລາຍຮັບ">
                                <button @click="SearchIncome" class="btn btn-success ml-2"><i class="fas fa-search"></i></button>
                            </div>
                            <div class="d-flex mb-2">
                                <input type="search" required v-model="searchQueryReason" class="form-control" placeholder="ຊອກຫາທີ່ມາຂອງເງິນ">
                                <button @click="SearchIncome" class="btn btn-success ml-2"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="d-flex justify-content-between">

                            <div class="d-flex mb-2">
                                <input type="search" required v-model="searchQueryExpense" class="form-control" placeholder="ຊອກຫາລາຍຈ່າຍ">
                                <button @click="SearchExpense" class="btn btn-danger ml-2"><i class="fas fa-search"></i></button>
                            </div>
                            <div class="d-flex mb-2">
                                <input type="search" required v-model="searchQueryReasonEx" class="form-control" placeholder="ສາເຫດການຈ່າຍ">
                                <button @click="SearchExpense" class="btn btn-danger ml-2"><i class="fas fa-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
        <div class="container-fluid">
            <!-- Small boxes (Stat box) -->
            <div class="row">

                <div class="col-md-6">
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-success" data-toggle="modal" data-target="#modal-add-income"><i
                                class="fas fa-plus mr-1"></i>ເພີ່ມລາຍຮັບ</button>
                                <router-link to="/income_details" class="btn btn-success"><i class="fas fa-arrow-circle-right mr-1"></i>ລາຍລະອຽດ</router-link>
                    </div>
                    <h3 class="text-center text-success"><b>ລາຍຮັບ</b></h3>
                    <div class="overflow-auto">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>ລຳດັບ</th>
                                    <th>ຈຳນວນເງິນ</th>
                                    <th>ເຫດຜົນທີ່ໄດ້</th>
                                    <th>ສະຖານະ</th>
                                    <th>ສ້າງວັນທີ່</th>
                                    <th>ອັບເດດວັນທີ່</th>
                                    <th>ປຸ່ມຄຳສັ່ງ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="none_data">
                                    <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                                </tr>
                                <tr v-else v-for="(incomes, index) in incomes_s" :key="incomes.id">
                                    <td>{{ index + 1 }}</td>
                                    <td><b class="text-success">{{ incomes.income }}</b></td>
                                    <td><b>{{ incomes.income_reason }}</b></td>
                                    <td><b class="text-danger">{{ incomes.status }}</b></td>
                                    <td><b class="text-success">{{ incomes.created_at }}</b></td>
                                    <td><b class="text-danger">{{ incomes.updated_at }}</b></td>
                                    <td>
                                        <button @click="ShowIncomeItem(incomes.id)" class="btn btn-warning" data-toggle="modal" data-target="#modal-edit-income"><i class="fas fa-edit"></i></button>
                                        <button @click="ConfirmDelete(incomes.id)" href="" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex justify-content-between">
                        <button class="btn btn-danger" data-toggle="modal" data-target="#modal-add-expense"><i class="fas fa-plus mr-1"></i>ເພີ່ມລາຍຈ່າຍ</button>
                                <router-link to="/expense_details" class="btn btn-danger"><i class="fas fa-arrow-circle-right mr-1"></i>ລາຍລະອຽດ</router-link>
                    </div>
                    <h3 class="text-center text-danger"><b>ລາຍຈ່າຍ</b></h3>
                    <div class="overflow-auto">
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>ລຳດັບ</th>
                                    <th>ຈຳນວນເງິນທີ່ຈ່າຍ</th>
                                    <th>ເຫດຜົນທີ່ຈ່າຍ</th>
                                    <th>ສະຖານະ</th>
                                    <th>ຈ່າຍວັນທີ່</th>
                                    <th>ອັບເດດວັນທີ່</th>
                                    <th>ປຸ່ມຄຳສັ່ງ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-if="none_dataEX">
                                    <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                                </tr>
                                <tr v-else v-for="(expenses, index) in expense_s" :key="expenses.id">
                                    <td>{{ index + 1 }}</td>
                                    <td><b class="text-danger">{{ expenses.expense }}</b></td>
                                    <td><b>{{ expenses.expense_reason }}</b></td>
                                    <td><b class="text-danger">{{ expenses.status }}</b></td>
                                    <td><b class="text-success">{{ expenses.created_at }}</b></td>
                                    <td><b class="text-danger">{{ expenses.updated_at }}</b></td>
                                    <td>
                                        <button @click="ShowExpenseItem(expenses.id)" class="btn btn-warning" data-toggle="modal" data-target="#modal-edit-expense"><i class="fas fa-edit"></i></button>
                                        <button @click="ConfirmDeleteEX(expenses.id)" href="" class="btn btn-danger"><i class="fas fa-times"></i></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="modal-add-income">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-success">
                            <h4 class="modal-title">ຟອມບັນທຶກລາຍຮັບ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form enctype="multipart/form-data" @submit.prevent="CreateIncome">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ຈຳນວນເງິນ:<span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" required v-model="income" id="exampleInputEmail1" placeholder="ຈຳນວນເງິນ">
                                    </div>
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ໄດ້ມາຈາກ:<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" required v-model="income_reason" id="exampleInputEmail1" placeholder="ເງິນທີ່ໄດ້ມາຈາກ">
                                    </div>
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ສະຖານະ:<span class="text-danger">*</span></label>
                                        <select name="" id="" class="form-control" required v-model="status">
                                            <option value="">-- ກະລຸນາເລືອກ --</option>
                                            <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                                            <option value="ເງິນໂອນ">-- ເງິນໂອນ --</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                <button type="submit" class="btn btn-success"><i class="fas fa-print mr-1"></i>
                                    ບັນທຶກ</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <div class="modal fade" id="modal-add-expense">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-danger">
                            <h4 class="modal-title">ຟອມບັນທຶກລາຍຈ່າຍ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form enctype="multipart/form-data" @submit.prevent="CreateExpense">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ຈຳນວນເງິນທີ່ຈ່າຍ:<span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" required v-model="expense" id="exampleInputEmail1" placeholder="ຈຳນວນເງິນທີ່ຈ່າຍ">
                                    </div>
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ເຫດຜົນການຈ່າຍ:<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" required v-model="expense_reason" id="exampleInputEmail1" placeholder="ເຫດຜົນການຈ່າຍ">
                                    </div>
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ສະຖານະ:<span class="text-danger">*</span></label>
                                        <select name="" id="" class="form-control" required v-model="status">
                                            <option value="">-- ກະລຸນາເລືອກ --</option>
                                            <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                                            <option value="ເງິນໂອນ">-- ເງິນໂອນ --</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                <button type="submit" class="btn btn-warning"><i class="fas fa-print mr-1"></i>
                                    ບັນທຶກ</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <div class="modal fade" id="modal-edit-income">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-info">
                            <h4 class="modal-title">ຟອມແກ້ໄຂລາຍຮັບ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form enctype="multipart/form-data" @submit.prevent="UpdateIncome">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ຈຳນວນເງິນ:<span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" required v-model="updateincome" id="exampleInputEmail1" placeholder="ຈຳນວນເງິນ">
                                    </div>
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ໄດ້ມາຈາກ:<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" required v-model="updateincome_reason" id="exampleInputEmail1" placeholder="ເງິນທີ່ໄດ້ມາຈາກ">
                                    </div>
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ສະຖານະ:<span class="text-danger">*</span></label>
                                        <select name="" id="" class="form-control" required v-model="updatestatus">
                                            <option value="">-- ກະລຸນາເລືອກ --</option>
                                            <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                                            <option value="ເງິນໂອນ">-- ເງິນໂອນ --</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                <button type="submit" class="btn btn-info"><i class="fas fa-print mr-1"></i>
                                    ບັນທຶກ</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <div class="modal fade" id="modal-edit-expense">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-warning">
                            <h4 class="modal-title">ຟອມແກ້ໄຂລາຍຈ່າຍ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form enctype="multipart/form-data" @submit.prevent="Updateexpense">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ຈຳນວນເງິນທີ່ຈ່າຍ:<span class="text-danger">*</span></label>
                                        <input type="number" class="form-control" required v-model="updateexpense" id="exampleInputEmail1" placeholder="ຈຳນວນເງິນທີ່ຈ່າຍ">
                                    </div>
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ສາເຫດການຈ່າຍ:<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" required v-model="updateexpense_reason" id="exampleInputEmail1" placeholder="ສາເຫດທີ່ຈ່າຍ">
                                    </div>
                                    <div class="form-group ml-4 mb-3">
                                        <label for="exampleInputEmail1">ສະຖານະ:<span class="text-danger">*</span></label>
                                        <select name="" id="" class="form-control" required v-model="updatestatus">
                                            <option value="">-- ກະລຸນາເລືອກ --</option>
                                            <option value="ເງິນສົດ">-- ເງິນສົດ --</option>
                                            <option value="ເງິນໂອນ">-- ເງິນໂອນ --</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                <button type="submit" class="btn btn-success"><i class="fas fa-print mr-1"></i>
                                    ບັນທຶກ</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.modal-content -->
                </div>
                <!-- /.modal-dialog -->
            </div>
            <div class="modal fade" id="modal-info">
                <div class="modal-dialog modal-md">
                    <div class="modal-content">
                        <div class="modal-header bg-info">
                            <h4 class="modal-title">ຟອມແກ້ໄຂຂໍ້ມູນໂມດູລ</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form enctype="multipart/form-data" @submit.prevent="UpdateModule">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="form-group ml-3 mb-3">
                                        <label for="exampleInputEmail1">ຊື່:<span class="text-danger">*</span></label>
                                        <input type="text" class="form-control" required v-model="updatemodulename" id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer justify-content-between">
                                <button type="button" class="btn btn-danger" data-dismiss="modal"><i class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                <button type="submit" class="btn btn-info"><i class="fas fa-print mr-1"></i>
                                    ບັນທຶກ</button>
                            </div>
                        </form>
                    </div>
                    <!-- /.modal-content -->
                </div>

                <!-- /.modal-dialog -->
            </div>
            <!-- /.row (main row) -->
        </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
</div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import HeaderComponent from './includes/HeaderComponent.vue';
import SidebarComponent from './includes/SidebarComponent.vue';
export default {
    name: "ExpenseComponent",
    components: {
        HeaderComponent,
        SidebarComponent
    },
    data() {
        return {
            income: "",
            income_reason: "",

            status: "",

            expense: "",
            expense_reason: "",

            updateexpense: "",
            updateexpense_reason: "",

            updateincome: "",
            updateincome_reason: "",
            updatestatus: "",

            searchQueryExpense: "",
            searchQueryReasonEx: "",

            searchQueryIncome: "",
            searchQueryReason: "",

            incomes_s: [],
            expense_s: [],
            Income_ID: null,
            Expense_ID: null,
            none_data: false,
            none_dataEX: false
        }
    },
    created() {
        this.ShowIncome();
        this.ShowExpense();
    },

    methods: {

        // Function Show Income
        async ShowIncome() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-income');
                if (Array.isArray(response.data)) {
                    this.incomes_s = response.data;
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('Error income', error);
            }
        },

        // Function Show expense
        async ShowExpense() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-expense');
                if (Array.isArray(response.data)) {
                    this.expense_s = response.data;
                    
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('Error enpense', error);
            }
        },

        // Function Create income
        async CreateIncome() {
            try {
                const response = await axios.post('http://localhost:3000/api/create-income', {
                    income: this.income,
                    income_reason: this.income_reason,
                    status: this.status
                });
                console.log(response.data);
                this.ShowIncome();
                this.ShowSuccessMessage();
                this.ResetIncome_Form();
            } catch (error) {
                console.error('Error create admin', error);
                this.ShowErrorMessage();
            }
        },

        // Function Create expense
        async CreateExpense() {
            try {
                const response = await axios.post('http://localhost:3000/api/create-expense', {
                    expense: this.expense,
                    expense_reason: this.expense_reason,
                    status: this.status
                });
                console.log(response.data);
                this.ShowExpense();
                this.ShowSuccessMessage();
                this.ResetExpense_Form();
            } catch (error) {
                console.error('Error create admin', error);
                this.ShowErrorMessage();
            }
        },

        async ShowSuccessMessage() {
            Swal.fire({
                title: "ບັນທຶກສຳເລັດ",
                text: "ຂໍ້ມູນຖືກບັນທຶກສຳເລັດແລ້ວ",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

        // Function Reset Income Form
        async ResetIncome_Form() {
            this.income = "",
                this.income_reason = ""
        },

        // Function Reset expense Form
        async ResetExpense_Form() {
            this.expense = "",
                this.expense_reason = ""
        },
        async ConfirmDelete(Income_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລົບລະຫັດທີ່:' + Income_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteIncome(Income_ID);
                }
            });
        },

        async DeleteIncome(Income_ID) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/delete-income/${Income_ID}`);
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
                    this.ShowIncome();
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
        async ConfirmDeleteEX(Expense_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລົບລະຫັດທີ່:' + Expense_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteExpense(Expense_ID);
                }
            });
        },

        async DeleteExpense(Expense_ID) {
            try {
                const response = await axios.delete(`http://localhost:3000/api/delete-expense/${Expense_ID}`);
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
                    this.ShowExpense();
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

        async SearchIncome() {
            const params = new URLSearchParams();

            if (this.searchQueryIncome) {
                params.append('income', this.searchQueryIncome)
            }
            if (this.searchQueryReason) {
                params.append('income_reason', this.searchQueryReason)
            }

            fetch(`http://localhost:3000/api/search-income?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.incomes_s = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },
        async SearchExpense() {
            const params = new URLSearchParams();

            if (this.searchQueryExpense) {
                params.append('expense', this.searchQueryExpense)
            }
            if (this.searchQueryReasonEx) {
                params.append('expense_reason', this.searchQueryReasonEx)
            }

            fetch(`http://localhost:3000/api/search-expense?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.expense_s = data;
                    this.none_dataEX = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_dataEX = true;
                });
        },
        // Function Show expense Item
        async ShowExpenseItem(Expense_ID) {
            this.Expense_ID = Expense_ID;
            try {
                const response = await axios.get(`http://localhost:3000/api/expense/${Expense_ID}`);
                this.updateexpense = response.data.expense,
                    this.updateexpense_reason = response.data.expense_reason,
                    this.updatestatus = response.data.status
            } catch (error) {
                console.error(error.response.data);
            }
        },

        async ShowIncomeItem(Income_ID) {
            this.Income_ID = Income_ID;
            try {
                const response = await axios.get(`http://localhost:3000/api/income/${Income_ID}`);
                this.updateincome = response.data.income,
                    this.updateincome_reason = response.data.income_reason,
                    this.updatestatus = response.data.status
            } catch (error) {
                console.error(error.response.data);
            }
        },

        // Function Update Income
        async UpdateIncome() {
            try {
                const response = await axios.put(`http://localhost:3000/api/update-income/${this.Income_ID}`, {
                    income: this.updateincome,
                    income_reason: this.updateincome_reason,
                    status: this.updatestatus
                });
                console.log(response.data);
                this.$router.push('/income_expense');
                this.ShowUpdateMessage();
                this.ShowIncome();
            } catch (error) {
                console.error(error.response.data)
                this.ShowErrorMessage();
            }
        },
        async Updateexpense() {
            try {
                const response = await axios.put(`http://localhost:3000/api/update-expense/${this.Expense_ID}`, {
                    expense: this.updateexpense,
                    expense_reason: this.updateexpense_reason,
                    status: this.updatestatus
                });
                console.log(response.data);
                this.$router.push('/income_expense');
                this.ShowUpdateMessage();
                this.ShowExpense();
            } catch (error) {
                console.error(error.response.data)
                this.ShowErrorMessage();
            }
        },

        async ShowUpdateMessage() {
            Swal.fire({
                title: "ແກ້ໄຂສຳເລັດ",
                text: "ຂໍ້ມູນຖືກແກ້ໄຂສຳເລັດແລ້ວ",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

        async ShowErrorMessage() {
            Swal.fire({
                title: "ເກີດຂໍ້ຜິດພາດ",
                text: "ກະລຸນາລອງໃໝ່ອີກຄັ້ງ",
                icon: "warning",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

    }
}
</script>
