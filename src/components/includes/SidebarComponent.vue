<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
          <li class="nav-item menu-open">
            <router-link to="/dashboard" href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p class = "text-bold">
                ຫນ້າຫຼັກ
              </p>
            </router-link>
          </li>
          <li class="nav-item menu-open">
            <router-link to="/admin" href="#" class="nav-link">
              <i class="nav-icon fas fa-user"></i>
              <p class = "text-bold">
                ເເອັດມິນ
              </p>
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- Sidebar Menu -->
      
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>



<script>
export default {
    
    name: "SidebarComponent"
}
</script>