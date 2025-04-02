// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,  // SSR활성화
  // 정적 사이트 생성 설정
  nitro: {
    preset: 'static',
    output: {
      dir: '.output/public',  // 출력 디렉토리 설정
      publicDir: '.output/public'
    }
  },

  css: ['~/assets/css/main.css'],  // 전역 CSS
  modules:[
    '@nuxtjs/tailwindcss', // TailwindCSS 사용
  ],
  app:{
    head:{
      title: '여행전에',
      meta:[
        {charset:'utf-8'},
        {name: 'viewport', content:'width=device-width, initial-scale=1'},
        {name: 'description', content: '스카이스캐너 클론 프로젝트'}
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
