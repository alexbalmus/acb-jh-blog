import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'authority',
    data: { pageTitle: 'acbJhBlogApp.adminAuthority.home.title' },
    loadChildren: () => import('./admin/authority/authority.routes'),
  },
  {
    path: 'blog',
    data: { pageTitle: 'acbJhBlogApp.blog.home.title' },
    loadChildren: () => import('./blog/blog.routes'),
  },
  {
    path: 'post',
    data: { pageTitle: 'acbJhBlogApp.post.home.title' },
    loadChildren: () => import('./post/post.routes'),
  },
  {
    path: 'tag',
    data: { pageTitle: 'acbJhBlogApp.tag.home.title' },
    loadChildren: () => import('./tag/tag.routes'),
  },
  /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
];

export default routes;
