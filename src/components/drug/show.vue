<template>

  <div id="container">
    <el-table
      :data="drugs"
      border
      highlight-current-row
      @current-change="selectTr"
      style="width: 100%">
      <el-table-column
        prop="drug_name"
        label="药品名称"
        width="150">
      </el-table-column>
      <el-table-column
        prop="characters"
        label="药品性状"
        width="250">
      </el-table-column>
      <el-table-column
        prop="functions"
        label="主治功能"
        width="300">
      </el-table-column>
      <el-table-column
        prop="pack"
        label="包装"
        width="120">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="60">
      </el-table-column>
      <el-table-column
        prop="sorts.type"
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
          drugs: [],
          selectedId: -1
        }
      },
      methods: {
        search() {
          this.axios.get('http://localhost:8090/drug')
            .then(function (res) {
              // 成功
              this.drugs = res.data // 此为后台响应回来的数据
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                // 失败
                console.log(err.response)
              }
            })
        },
        selectTr(obj) {
          this.selectedId = obj.drug_id
        },
        showAdd() {
          this.$router.push({name: 'DrugAdd', requiredAuth: true})
        },
        showUpdate() {
          this.$router.push({name: 'DrugUpdate',params:{id:this.selectedId} })
        },
        deleteItem() {
          this.axios.delete('http://localhost:8090/drug/' + this.selectedId)
            .then(function () {
              // 成功
              this.$router.push({name: 'DrugShow'})
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
    margin: 20px auto;
  }
  #data .selected{
    background-color: #337ab7;
  }
</style>
