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
    		screen: '1',
    		type: 'Branding Strategy',
    	},
    	{
    		name: 'Purinky Products',
    		screen: '4',
    		type: 'Digital Experience',
    	},
    	{
    		name: 'Satisfy Poster',
    		screen: '3',
    		type: 'Branding Strategy',
    	},
    	{
    		name: 'Mock-up',
    		screen: '2',
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
