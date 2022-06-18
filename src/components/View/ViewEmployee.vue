<template>
<div class="row w-100 m-0 p-0 justify-content-end">
    <router-link to="/web/add" class="w-auto"><button class="btn btn-primary">Add Employee</button></router-link>
</div>
    <div class="row w-100 m-0 p-0">
     <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">email</th>
      <th scope="col">Phone</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr :key="employee._id" v-for="(employee,index) in employees">
      <th scope="row">{{index+1}}</th>
      <td>{{employee.firstName}}&nbsp;{{employee.lastName}}</td>
      <td>{{employee.email}}</td>
      <td>{{employee.phone}}</td>
      <td><i @click="edit(employee._id)" class="fas fa-edit" title="edit"></i> &nbsp;&nbsp;<i @click="deleteEmployee(employee._id)" class="fas fa-times" title="delete"></i></td>
    </tr>
  </tbody>
</table>
    </div>
</template>

<script>
import api from '../../api'

export default{
    name:'ViewEmployee',
    data(){
        return {
            employees: []
        }
    },
    methods:{
         getEmployeeList(){
        api.getEmployeeList().then(res=>{
            console.log(res)
            this.employees = res.data;
        }).catch(err=>{
            alert(err.response.data.msg);
        })
         },

        deleteEmployee(id){
           if (confirm('Are you Sure, You want to remove?')){
                api.deleteEmployee(id).then(res=>{
                    console.log(res)
                    this.getEmployeeList();
                }).catch(err=>{
                    alert(err.response.data.msg);
                })
            }
        },
        edit(id){
            this.$router.push({path:'/web/edit/'+id})
        }
    },
   created(){
    this.getEmployeeList();
   }
}
</script>