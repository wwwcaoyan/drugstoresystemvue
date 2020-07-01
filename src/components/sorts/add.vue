<template>
  <div id="container">
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="药品分类">
        <el-input v-model="form.type"  placeholder="请选择药品分类"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="add">添加</el-button>
        <el-button type="primary" @click="back">取消</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
    export default {
        name: "add",
      data () {
        return {
          form: {
            type: ''
          }

        }
      },
      methods: {

        add () {
          this.axios.post('http://localhost:8090/sorts', this.form)
            .then(function () {
              this.$router.push({name:'SortShow'})
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
      }
    }
</script>

<style scoped>
  #container {
    width: 600px;
    margin: 20px auto;
  }

</style>
