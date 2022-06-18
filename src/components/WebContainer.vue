<template>
    <h1 class="fw-bold" style="text-decoration:underline">CRUD operations For Employee</h1>
    <div class="row w-100 w-100 p-0 justify-content-evenly m-2">
    <h3 class="fw-bold w-auto" style="text-transform:capitalize;font-family: cursive;">{{employee.firstName}} {{employee.lastName}}&nbsp; &nbsp;<i @click="logout" style="cursor:pointer;color: red;" title="Log out" class="fas fa-sign-out-alt"></i></h3>
    </div>
<router-view></router-view>
</template>

<script>
import api from "../api";

export default{ 
    name:'WebContainer',
    data(){
        return{
            employee:{
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            }
            }
        },
        methods:{
            logout(e){
                e.preventDefault();
                localStorage.clear();
                this.$router.push('/login');
            }
        },
    created(){
       if(!localStorage.getItem('token')){
           this.$router.push('/login');
       }
       else{
            api.validateUser().then(res=>{
                console.log(res);
                this.employee=res.data.data
            }).catch(err=>{
                console.log(err);
                alert('Token Expired!');
                this.$router.push('/login');
            })
       }
    },
}
</script>

