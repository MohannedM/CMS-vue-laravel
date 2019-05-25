<template>
    <div>
        <div class="col-md-8 offset-md-2 mt-5">
            <div>
                <h4>Latest Products</h4>
            </div>
            <table class="table table-striped">
                <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="product in products">
                    <td>{{product.id}}</td>
                    <td>{{product.name}}</td>
                    <td>{{product.category_id}}</td>
                    <td>
                    <a style="cursor:pointer" class="btn btn-danger">
                        <i class="fas fa-user-times"></i> Delete
                    </a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>   
    </div>
</template>
<script>
export default {
    computed:{
        products(){
            return this.$store.getters.getProducts;
        }
    }
}
</script>
