<template>
 <div class="row w-100 m-0 p-0 justify-content-center">
    <h1>Login</h1>
 </div>
    <div class="row w-100 m-0 p-0 justify-content-center">
        <form @submit="login" class="w-25">
           
            <div class="form-group">
                <input type="email" class="form-control" v-model="employee.email" id="email" placeholder="Enter email">
            </div>
            <div class="form-group">
                <input type="password" class="form-control" v-model="employee.password" id="password" placeholder="Enter Password">
            </div>

            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</template>

<script>
import api from '../../api'

export default{
    name:'LoginComponent',
    data(){
        return {
            employee: {
                email: '',
                password: '',
            },

        }
    },
    methods:{
        login(e){
            e.preventDefault();
            if(this.employee.email && this.employee.password){
                api.login(this.employee).then(res=>{
                    console.log(res);
                    if(res.status==200){
                        localStorage.setItem('token',res.data.token);
                        this.$router.push('/web/list');
                    }
                }).catch(err=>{
                    console.log(err);
                });
            }
            else{
                alert('Please fill all the fields');
            }
        }
    },
}

</script>

<style scoped>
    .form-group{
       display: flex;
       margin: 1vh 0;
       justify-content: space-between;
    }

    label{
        font-weight: 600;
    }

    .form-control{
        width: 100% !important;
    }
</style>