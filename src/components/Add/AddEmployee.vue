<template>
<div class="row w-100 m-0 p-0 justify-content-end">
    <router-link to="/web/list" class="w-auto"><button class="btn btn-primary">View Employee List</button></router-link>
</div>
    <div class="row w-100 m-0 p-0 justify-content-center">
        <form @submit="addEmployee" class="w-50">
            <div class="form-group">
                <label for="Firstname w-25">First Name</label>
                <input type="text" class="form-control" v-model="employee.firstName" id="Firstname" placeholder="Enter Firstname">
            </div>
             <div class="form-group">
                <label for="Lastname w-25">Last Name</label>
                <input type="text" class="form-control" v-model="employee.lastName" id="Lastname" placeholder="Enter Lastname">
            </div>
            <div class="form-group">
                <label for="email w-25">Email</label>
                <input type="email" class="form-control" v-model="employee.email" id="email" placeholder="Enter email">
            </div>
            <div class="form-group" v-show="!id">
                <label for="password w-25">Password</label>
                <input type="password" class="form-control" v-model="employee.password" id="password" placeholder="Enter Password">
            </div>
            <div class="form-group">
                <label for="phone w-25">Phone</label>
                <input type="text" class="form-control" id="phone" v-model="employee.phone" placeholder="Enter Phone">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script>
import api from '../../api'

export default{
    name:'AddEmployee',
    data(){
        return {
            employee: {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phone: ''
            },
            id: null,
        }
    },
    methods:{

        addEmployee(e){
            e.preventDefault();
            console.log(this.employee);
            if(this.id){
                this.employee.password="@@";
            }
        if(this.employee.firstName && this.employee.email && this.employee.password && this.employee.phone){
            if(!this.id){
          api.addEmployee(this.employee).then(res=>{
            console.log(res);
            this.employee= {
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                phone: ''
            }
          }).catch(err=>{
            alert(err.response.data.msg);
          })
            }else{
            api.updateEmployee(this.employee,this.id).then(res=>{
            console.log(res);
           this.$router.push('/web/list')
          }).catch(err=>{
            alert(err.response.data.msg);
          })
            }
        }else{
            alert('Please fill all the fields');
        }
          
        },
        getEmployeeById(id){
            api.getEmployeeById(id).then(res=>{
                console.log(res.data);
                this.employee = res.data;
            }).catch(err=>{
                alert(err.response.data.msg);
            })
        },
    },
    created(){
       this.id=this.$route.params.id
         if(this.id){
              this.getEmployeeById(this.id);
         }
    //    this.getEmployeeById(this.id);
    }
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
        width: 75% !important;
    }
</style>