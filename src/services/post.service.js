import BaseApiService from './base.api.service'

class ProductService extends BaseApiService {
  routes = {
    getPagePosts: '/post',
    getPosts: '/post/list',
    savePost: '/post',
    updatePost: '/post',
    getPost: '/post/view/:id',
    getCategories: '/post/category/list',
    getReplies: '/post/reply/list/:postId',
    saveReply: '/post/reply'
  }
  constructor() {
    super();
    this.getPosts = this.getPosts.bind(this);
    this.getCategories = this.getCategories.bind(this);
  }

  getPosts(lastId = null) {
    return this.GET(this.routes.getPosts, null, { params: { lastId } });
  }

  savePost(post) {
    return this.POST(this.routes.savePost, { post });
  }

  updatePost(post) {
    return this.PATCH(this.routes.updatePost, { post });
  }

  getPost(id) {
    return this.GET(this.routes.getPost, { id } );
  }

  getCategories() {
    return this.GET(this.routes.getCategories);
  }

  getCategoryPosts(page, categoryId) {
    return this.GET(this.routes.getPagePosts, null, { params: { page, categoryId } });
  }

  getKeywordPosts(page, keyword) {
    return this.GET(this.routes.getPagePosts, null, { params: { page, keyword } });
  }

  getReplies(postId) {
    return this.GET(this.routes.getReplies, { postId });
  }

  saveReply(reply) {
    return this.POST(this.routes.saveReply, { reply });
  }

  // getProducts(categoryId) {
  //   return this.axiosApi.GET(this.routes.getProducts, { categoryId })
  // }

  // searchProducts(keyword) {
  //   return this.axiosApi.POST(this.routes.searchProducts, { keyword })
  // }
}

export default new ProductService()
