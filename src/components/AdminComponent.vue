<template>

    <!-- /.navbar -->
  
    <!-- /.navbar -->
    <HeaderComponent/>
    <SidebarComponent/>
  
  
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Content Header (Page header) -->
      <div class="content-header">
        <div class="container-fluid">
            <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"><b class="text-primary"><marquee behavior="" direction="">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ</marquee></b></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/dashboard" href="#">ຫນ້າຫຼັກ</router-link></li>
              <li class="breadcrumb-item active">ເເອັດມິນ</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
        </div><!-- /.container-fluid -->
      </div>
      <!-- /.content-header -->
  
      <!-- Main content -->
      <section class="content">
        <div class="container-fluid">
          <!-- Small boxes (Stat box) -->
          <div class="H1 text-center">Test Admin</div>
          <!-- /.row (main row) -->
        </div><!-- /.container-fluid -->
      </section>
      <!-- /.content -->
    </div>
  </template>
  
  
  <script>
  import HeaderComponent from './includes/HeaderComponent.vue';
  import SidebarComponent from './includes/SidebarComponent.vue';
  
  export default {
      
      name:"AdminComponent",
      components: {
        HeaderComponent,
        SidebarComponent
  
      }
  }
  </script>
  