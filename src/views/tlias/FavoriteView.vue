<template>
  <div>
    <!-- <el-form :inline="true" :model="serachForm" class="demo-form-inline">
      <el-form-item label="Serach for something">
        <el-input v-model="serachForm.name" placeholder="Name"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-select v-model="serachForm.gender" placeholder="Gender">
          <el-option label="" value="" ></el-option>
          <el-option label="Male" value="1" ></el-option>
          <el-option label="Female" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="">
        <el-input v-model="serachForm.phone" placeholder="Phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSearch">Serach</el-button>
      </el-form-item>
    </el-form> -->
    <el-table :data="tableData">
      <el-table-column prop="name" label="Name" width="180"></el-table-column>
      <el-table-column prop="phone" label="Phone Number" width="180"></el-table-column>
      <el-table-column prop="gender" label="Gender" width="140">
        <template slot-scope="scope">
          {{ scope.row.gender==1 ? 'Male' : 'Female' }}
        </template>
      </el-table-column>
      <el-table-column prop="favorite" label="Favorite" width="140">
        <!--  通过element的作用域插槽获取数据 -->
        <template slot-scope="scope">
          {{ scope.row.isFavorite ? 'Yes' : 'No' }}
        </template>
      </el-table-column>
      <el-table-column prop="createTime" label="Create Time" width="180"></el-table-column>
      <el-table-column prop="updateTime" label="Last Update Time" width="230"></el-table-column>
      <el-table-column label="action">
        <template slot-scope="scope">
          <el-button type="danger" size="mini" v-if="scope.row.isFavorite"
                     @click="onChange(scope.row.id,scope.row.isFavorite)">Cancel
            Favorite
          </el-button>
          <el-button type="primary" size="mini" v-else @click="onChange(scope.row.id,scope.row.isFavorite)">Add
            Favorite
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        small
        layout="prev, pager, next"
        @current-change="changePage()"
        :page-size="pagePagination.pageSize"
        :current-page.sync="pagePagination.page"
        :total.sync="pagePagination.total">
    </el-pagination>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tableData: [],
      serachForm: {
        name: "",
        phone: "",
        gender: ""
      },
      pagePagination:{
        page:1,
        pageSize: 10,
        total: 50
      }


    }
  },
  methods: {
    changePage(){
      this.requestContact();
    },
    onSearch(){
      this.requestContact();
    },
    requestContact() {
      const name = this.serachForm.name;
      const phone = this.serachForm.name;
      const gender = this.serachForm.name;
      const page=this.pagePagination.page;
      const pageSize=this.pagePagination.pageSize;
      axios.get(`http://124.71.86.156:8081/emps?name=${name}&phone=${phone}&gender=${gender}&page=${page}&pageSize=${pageSize}&isFavorite=1`).then(res => {
        this.pagePagination.total = res.data.data.total;
        this.tableData = res.data.data.rows; // 确保赋值给 data
      }).catch(error => {
        console.error('Error:', error);
      });
    },
    onDelete: function (id) {
      if (confirm('Are you sure to delete this record?')) {
        axios.delete(`http://124.71.86.156:8081/emps/delete/${id}`)
            .then(() => {
              alert('Delete success');
              this.requestContact();
            })
      }
    },
    onChange: function (id, isFavorite) {
      axios.get(`http://124.71.86.156:8081/emps/changeFavorite?id=${id}&isFavorite=${isFavorite === 0 ? 1 : 0}`).then(() => {
        alert('change success');
        this.requestContact();
      })
    }
  },
  mounted() {
    this.requestContact()
  }

}
</script>

<style></style>
