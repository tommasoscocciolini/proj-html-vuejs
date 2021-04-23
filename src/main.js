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
    ]

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
