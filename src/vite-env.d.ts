/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'feather-icons';
declare module 'vue-cool-lightbox';
declare module 'aos';
declare module 'vue-scrollactive';
