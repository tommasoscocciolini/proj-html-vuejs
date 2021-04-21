var app = new Vue({
  el: '#root',

  data:{
    navEl : ['Home', 'About', 'Services', 'Blog', 'Contact', 'Portfolio'],
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
    		desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper'
    	},
    	{
    		what: 'SEO Optimization',
    		desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
    	},
    	{
    		what: 'Security Data',
        desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
    	},
    	{
    		what: 'Branding Strategy',
        desc: 'When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper',
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
