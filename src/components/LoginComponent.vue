<template>
    <div class="hold-transition login-page login-background">
        <div class="login-box">
  <!-- /.login-logo -->
  <div class="card card-outline ">
    <div class="card-body">
      <p class="login-box-msg">
        <img src= "images/logo1.jpg" alt="" style="{radius:100%; width:50% ; height: 60%; border-radius:60%;}">
      </p>
      <h1 class="text-center text-primary"><b>ເຂົ້າສູ່ລະບົບ</b></h1>
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
        <div class="w-100">
          <button type="submit" class="btn btn-primary btn-block text-bold"><i class="fas fa-sign-out-alt"></i>Log In</button>
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
import Swal from "sweetalert2";
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
      this.ShowWelcomeMessage();
      this.$router.push('/dashboard')
    
      } catch(error){
      this.ShowErrorMassage();
    }
  },


  //Show Welcome massage

async ShowWelcomeMessage(){
  Swal.fire({
    title: "ຍິນດີຕ້ອນຮັບ",
    text: "ເຂົ້າສູ່ລະບົບສຳເລັດເເລ້ວ",
    icon: "success",
    timer: 2000, 
    timerProgressBar: true,
    didOpen: () =>{
      Swal.showLoading();
    }
  });
},
 //show error massage
 async ShowErrorMassage(){
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