<template>
    <div>
        <div class="row mt-5 col-md-10 offset-md-1">
            <div class="col-md-8">
                <div>
                    <h4>Categories</h4>
                </div>
                <table class="table table-striped" v-if="categories.length > 0">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="category in categories">
                        <td>{{category.id}}</td>
                        <td>{{category.name}}</td>
                        <td>
                        <button @click="editCategory(category)" class="btn btn-secondary">
                            <i class="far fa-edit"></i> Edit
                        </button>
                        </td>
                        <td>
                        <button @click="removeCategory(category.id)" class="btn btn-danger">
                            <i class="fas fa-times"></i> Delete
                        </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-md-4">
                <form @submit.prevent="edit ? updateCategory() : addCategory()">
                    <h4>Add Category</h4>
                    <div class="form-group">
                        <label for="name">Category Name</label>
                        <input type="text"  v-model="category.name" class="form-control">    
                    </div>
                    <div>
                        <input type="submit" v-if="!edit" value="Add Category" class="btn btn-primary">
                        <input type="submit" v-else value="Edit Category" class="btn btn-secondary">
                    </div>    
                </form>    
            </div>   
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            category:{
                id: '',
                name:'',
            },
            edit: false
        }
    },
    methods:{
        addCategory(){
            if(this.category.name != ''){
                this.$store.dispatch('insertCategory', this.category.name);
                this.category.name = '';
            }
        },
        updateCategory(){
            if(this.category.name != '' && this.category.id != ''){
                this.$store.dispatch('modifyCategory', this.category);
                this.category.id = '';
                this.category.name = '';
                this.edit = false;
            }
        },
        editCategory(category){
            this.category.id = category.id;
            this.category.name = category.name;
            this.edit = true;
        },
        removeCategory(id){
            this.$store.dispatch('deleteCategory', id);
        }
    },
    computed:{
        categories(){
            return this.$store.getters.getCategories;
        }
    }
}
</script>