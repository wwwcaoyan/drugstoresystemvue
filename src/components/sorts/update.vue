<template>
  <div id="container">
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="药品分类">
        <el-input v-model="form.type" placeholder="请选择药品分类"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="modify">修改</el-button>
        <el-button type="primary" @click="back">取消</el-button>
      </el-form-item>
    </el-form>

  </div>

</template>

<script>
    export default {
        name: "update",
      data() {
        return {
          form: {
            type: ''
          }
        }
      },
      methods: {

        searchById(){
          this.axios.get('http://localhost:8090/sorts/'+ this.$route.params.id)
            .then(function (res) {
              // 成功
              this.form=res.data;
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                // 失败
                console.log(err.response)
              }
            }.bind(this))


        },
        modify () {
          this.axios.put('http://localhost:8090/sorts', this.form)
            .then(function () {
              this.$router.push({name: 'SortShow'})
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                console.log(err.response)
              }
            })
        },
        back(){
          this.$router.go(-1)
        }
      },
      created() {
        this.searchById()
      }
    }
</script>

<style scoped>

</style>
