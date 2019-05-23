<template>
    <div>
    <div class="login-form">
        <div class="row">
			<div class="col-md-5 mx-auto">
			<div id="first">
				<div class="myform form ">
					 <div class="logo mb-3">
						 <div class="col-md-12 text-center">
							<h1>Register</h1>
						 </div>
					</div>
                   <form @submit.prevent="registerUser">
                            <div class="form-group">
                              <label for="name">Full name</label>
                              <input type="text" v-model="user.name"  class="form-control" placeholder="Enter full name">
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Email address</label>
                              <input type="email" v-model="user.email"  class="form-control" placeholder="Enter email">
                           </div>
                           <div class="form-group">
                              <label for="exampleInputEmail1">Password</label>
                              <input type="password" v-model="user.password"  class="form-control" placeholder="Enter Password">
                           </div>
                            <div class="form-group">
                              <label for="exampleInputEmail1">Confirm password</label>
                              <input type="password" v-model="user.confirmPassword" class="form-control" placeholder="Confirm Password">
                           </div>
                           <div class="form-group text-center">
                               <div id="on"
                               @click="isOn = true"
                               :class="{active: isOn}">Customer</div>
                                <div id="off"
                               @click="isOn = false"
                               :class="{active: !isOn}">Seller</div>
                           </div>
                           <div class="form-group">
                              <p class="text-center">By registering up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div class="col-md-12 text-center ">
                              <button type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Register</button>
                           </div>
                           <div class="col-md-12 ">
                              <div class="login-or">
                                 <hr class="hr-or">
                                 <span class="span-or">or</span>
                              </div>
                           </div>
                           <div class="col-md-12 mb-3">
                              <p class="text-center">
                                 <a href="javascript:void();" class="google btn mybtn"><i class="fab fa-google-plus-g">
                                 </i> Signup using Google
                                 </a>
                              </p>
                           </div>
                        </form>
                 
				</div>
			</div>
			</div>
		</div>
      </div>   
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            isOn: true,
            user:{
                name: '',
                email:'',
                password:'',
                confirmPassword: ''
            }
        }
    },
    computed:{
        customer(){
            return {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                role: 'customer',
                is_active: 1
            }
        },
        seller(){
            return{
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                role: 'seller',
                is_active: 0
            }
        },
        isLogged(){
            return this.$store.getters.isLoggedIn;
        }
    },
    methods:{
        registerUser(){
            let user = this.isOn ? this.customer : this.seller;
            this.$store.dispatch('register', user);
            
            this.user.name = '';
            this.user.email = '';
            this.user.password = '';
            this.user.confirmPassword = '';
        },
        beforeRouteEnter (to, from, next) {
            if(isLogged){
                next('/');
            }else{
                next();
            }
        },
    }
}
</script>



<style scoped>
        .login-form{
        margin: -2rem 0;
        padding-top:4.2rem;
		padding-bottom:4.2rem;
        background: #202d3a;
        }
        a{
         text-decoration:none !important;
         }
         h1,h2,h3{
         font-family: sans-serif;
         color:  #0e1419c7;
         }
        .myform{
		position: relative;
		display: -ms-flexbox;
		display: flex;
		padding: 1rem;
		-ms-flex-direction: column;
		flex-direction: column;
		width: 100%;
		pointer-events: auto;
		background-color: #ecf0f5;
		background-clip: padding-box;
		border: 1px solid rgba(0,0,0,.2);
		border-radius: 1.1rem;
		outline: 0;
        max-width: 500px;
		 }
         .tx-tfm{
         text-transform:uppercase;
         }
         .mybtn{
         border-radius:50px;
         }
        
         .login-or {
         position: relative;
         color: #0e1419;
         margin-top: 10px;
         margin-bottom: 10px;
         padding-top: 10px;
         padding-bottom: 10px;
         }
         .span-or {
         display: block;
         position: absolute;
         left: 50%;
         top: -2px;
         margin-left: -25px;
         background-color: #fff;
         width: 50px;
         text-align: center;
         }
         .hr-or {
         height: 1px;
         margin-top: 0px !important;
         margin-bottom: 0px !important;
         }
         .google {
         color:#666;
         width:100%;
         height:40px;
         text-align:center;
         outline:none;
         border: 1px solid lightgrey;
         }
          form .error {
         color: #ff0000;
         }
        #on, #off {
            width: 40px;
            height: 20px;
            background-color: lightgray;
            padding: 10px 22px;
            display: inline-block;
            margin: 10px -2px;
            box-sizing: content-box;
            cursor: pointer;
            color:#4a6887;
            font-weight: 900;
            font-size: 12px;
            border-radius: 0.5rem;
        }

        #on:hover, #on.active {
            background-color: #89a4be;
        }

        #off:hover, #off.active {
            background-color: #141c24;
        }
         #second{display:none;}
</style>
