import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'blog',
    data: { pageTitle: 'acbjhBlogApp.blog.home.title' },
    loadChildren: () => import('./blog/blog.routes'),
  },
  {
    path: 'post',
    data: { pageTitle: 'acbjhBlogApp.post.home.title' },
    loadChildren: () => import('./post/post.routes'),
  },
  {
    path: 'tag',
    data: { pageTitle: 'acbjhBlogApp.tag.home.title' },
    loadChildren: () => import('./tag/tag.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
