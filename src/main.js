var app = new Vue({
  el: '#root',

  data:{
    navEl :[
      {
        name:'Home',
        link: '',
      },
      {
        name:'About',
        link: '',
      },
      {
        name:'Services',
        link: '',
      },
      {
        name:'Blog',
        link: '',
      },
      {
        name:'Contact',
        link: '',
      },
      {
        name:'Portfolio',
        link: '',
      },
    ],
    latestWorks: [
    	{
    		name: 'Basket of Flower on table',
    		screen: './img/latest1.jpg',
    		type: 'Branding Strategy',
    	},
    	{
    		name: 'Purinky Products',
    		screen: './img/latest4.jpg',
    		type: 'Digital Experience',
    	},
    	{
    		name: 'Satisfy Poster',
    		screen: './img/latest3.jpg',
    		type: 'Branding Strategy',
    	},
    	{
    		name: 'Mock-up',
    		screen: './img/latest2.jpg',
    		type: 'Digital Experience',
    	},
    ],
    wwd: [
    	{
    		what: 'Data Analysis',
    		desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
        screen: './img/dataAnalysis.png',
    	},
    	{
    		what: 'SEO Optimization',
    		desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
        screen: './img/seo-optimization.png',
    	},
    	{
    		what: 'Security Data',
        desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
        screen: './img/securityData.png',
    	},
    	{
    		what: 'Branding Strategy',
        desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
        screen: './img/brandingstrats.png',
    	},
    ],
    plans: [
      {
        name: 'Designing',
        subtitle: 'Process',
        price: 40,
      },
      {
        name: 'Developing',
        subtitle: 'Product',
        price: 60,
      },
      {
        name: 'Supporting',
        subtitle: 'Clients',
        price: 80,
      },
    ],
    servicesPlans: [
      {
        type: 'Creative',
        tx1: 'Design Enabled',
      },
      {
        type: 'Vibrant',
        tx1: 'Color Usage',
      },
      {
        type: 'Eye',
        tx1: 'Catching Design',
      },
      {
        type: 'Extreme',
        tx1: 'Typography',
      },
      {
        type: 'Exceptional',
        tx1: 'Design',
      },
    ],
    // posts: [
    //   {
    //     date: 'April 21, 2019',
    //     contact: 'Alex',
    //     title: 'Amazon gets CCI nod to aquire 49% stake in',
    //     text: 'When, while the lovely valley teems with vapour around me and the meridian sun s...'
    //   },
    // ]
    testimonials: [
      {
        iconPath: './img/id1.png',
        rate: 3,
        text: 'When, while the lovely valley teems with vapour around me and the meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand',
        name: 'Michkel Anegl',
        role: 'Marketing Management',
      },
      {
        iconPath: './img/id2.png',
        rate: 3,
        text: 'When, while the lovely valley teems with vapour around me and the meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand',
        name: 'Michkel Anegl',
        role: 'Marketing Management',
      },
      {
        iconPath: './img/id3.png',
        rate: 3,
        text: 'When, while the lovely valley teems with vapour around me and the meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand',
        name: 'Michkel Anegl',
        role: 'Marketing Management',
      },
    ],
    sponsors: [
      {
        logo: './img/client-1-1.png',
      },
      {
        logo: './img/clienty-2.png',
      },
      {
        logo: './img/clienty-4.png',
      },
      {
        logo: './img/client-5.png',
      },
      {
        logo: './img/clienty-3.png',
      },
    ],
    footerLinks: [
      {
        name:'Services',
        link: '',
      },
      {
        name:'Contact',
        link: '',
      },
      {
        name:'Blog',
        link: '',
      },
    ],
    footerResources: [
      {
        name:'Art Design',
        link: '',
      },
      {
        name:'Computer',
        link: '',
      },
      {
        name:'IT News',
        link: '',
      },
      {
        name:'Networking',
        link: '',
      },
      {
        name:'Web Security',
        link: '',
      },
    ],
  },

  methods:{
    getImgScreen: function (work) {
      let imgSrc = String("./img/latest" + latestWorks.screen + ".jpg")
      return String(imgSrc)
    },
  },

  created: function(){

  },

  computed: {

  },


})
