<template>

  <div id="container">
    <el-table
      :data="sorts"
      border
      highlight-current-row
      @current-change="selectTr"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="ID"
      >
      </el-table-column>
      <el-table-column
        prop="type"
        label="药品分类"
      >
      </el-table-column>
    </el-table>
    <el-button type="primary" v-on:click="showAdd">添加</el-button>
    <el-button type="primary"v-on:click="deleteItem">删除</el-button>
    <el-button type="primary" v-on:click="showUpdate">修改</el-button>

  </div>


</template>

<script>
    export default {
        name: "show",
      data() {
        return {
          sorts: [],
          selectedId: -1
        }
      },
      methods: {
        search() {
          this.axios.get('http://localhost:8090/sorts')
            .then(function (res) {
              // 成功
              this.sorts = res.data // 此为后台响应回来的数据
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                // 失败
                console.log(err.response)
              }
            })
        },
        selectTr(obj) {
          this.selectedId = obj.id
        },
        showAdd() {
          this.$router.push({name: 'SortAdd', requiredAuth: true})
        },
        showUpdate() {
          this.$router.push({name: 'SortUpdate',params:{id:this.selectedId} })
        },
        deleteItem() {
          this.axios.delete('http://localhost:8090/sorts/' + this.selectedId)
            .then(function () {
              // 成功
              this.$router.push({name: 'SortShow'})
              this.search()
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                // 失败
                console.log(err.response)
              }
            }.bind(this))

        }

      },
      created() {
        this.search()
      }
    }
</script>

<style scoped>
  #container {
    width: 600px;
    margin: 20px auto;
  }
  #data .selected{
    background-color: #337ab7;
  }
</style>
