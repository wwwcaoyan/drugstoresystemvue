<template>
  <div id="container">
    <el-form ref="form" :model="form" label-width="80px">

      <el-form-item label="药品名称">
        <el-input v-model="form.drug_name"  placeholder="请输入药品名称"></el-input>
      </el-form-item>
      <el-form-item label="药品性状">
        <el-input v-model="form.characters"  placeholder="请输入药品性状"></el-input>
      </el-form-item>
      <el-form-item label="主治功能">
        <el-input v-model="form.functions" placeholder="请输入主治功能"></el-input>
      </el-form-item>
      <el-form-item label="包装">
        <el-input v-model="form.pack" placeholder="请输入包装" ></el-input>
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="form.price" placeholder="请输入价格"></el-input>
      </el-form-item>
      <el-form-item label="药品分类">
        <el-select v-model="form.sorts.id" placeholder="请选择药品分类" style="width: 100%">
          <el-option  v-for="sor in sorts" :key="sor.id" :label="sor.type" :value="sor.id">
          </el-option>
        </el-select>
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
              drug_name: '',
              characters: '',
              functions: '',
              pack: '',
              price: '',
              sorts: {
                id: null
              },

            },
            sorts: []
          }
        },
      methods: {
        searchSorts () {
          this.axios.get('http://localhost:8090/sorts')
            .then(function (res) {
              // 成功
              this.sorts = res.data // 此为后台响应回来的数据
              this.form.sorts.id = this.sorts[0].id
            }.bind(this))
            .catch(function (err) {
              if (err.response) {
                // 失败
                console.log(err.response)
              }
            })
        },
            searchById(){
                    this.axios.get('http://localhost:8090/drug/'+ this.$route.params.id)
                      .then(function (res) {
                        // 成功
                        this.form=res.data;
                        if(this.form.sor==null){
                    this.form.sor={id:this.sorts[0].id}
                  }
                }.bind(this))
                .catch(function (err) {
                  if (err.response) {
                    // 失败
                    console.log(err.response)
                  }
                }.bind(this))


            },
            modify () {
              this.axios.put('http://localhost:8090/drug', this.form)
                .then(function () {
                  this.$router.push({name:'DrugShow'})
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
        this.searchSorts()
        this.searchById()
      }
    }
</script>

<style scoped>

</style>
