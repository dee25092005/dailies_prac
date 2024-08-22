<template>
    <div class="hold-transition login-page">
        <div class="login-box">
  <!-- /.login-logo -->
  <div class="card card-outline card-primary">
    <div class="card-body">
      <p class="login-box-msg">Sign in to start your session</p>
      <h2 class="text-center text-primary"><b>ເຂົ້າສູ່ລະບົບ</b></h2>
      <form @submit.prevent="HandleLogin">
        <div class="input-group mb-3">
          <input type="text" v-model="phone" class="form-control" placeholder="ເບີໂທ">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-phone"></span>
            </div>
          </div>
        </div>
        <div class="input-group mb-3">
          <input type="password" v-model="password" class="form-control" placeholder="********">
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-key"></span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <div class="icheck-primary">
              <input type="checkbox" id="remember">
              <label for="remember">
                ຈົດຈຳ
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-4">
            <button type="submit" class="btn btn-primary btn-block">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      </form>

      
    </div>
    <!-- /.card-body -->
  </div>
  <!-- /.card -->
</div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'LoginComponent',
  data(){
    return {
      phone: "",
      password: ""

    };
  },
  methods: {
    async HandleLogin(){
      try{
        const response = await axios.post('http://localhost:3000/login',{
        phone: this.phone,
        password:this.password
      });

      console.log(response.phone);
      console.log("login successfully");

      localStorage.setItem('token',response.data.token);
      this.$router.push('/dashboard')
    
      } catch(error){
      alert("Login error");
    }
  }
}
}
</script>