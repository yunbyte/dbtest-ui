<template>

	<el-row class="container">

		<el-col :span="24" class="header">
			<el-col :span="6" class="home_logo">yunbyte</el-col>
			<el-col :span="2" class="home_text">1</el-col>
			<el-col :span="16" class="home_swiper">
				<el-tabs v-model="swiper.activeName" @tab-click="tabsClick">
					<el-tab-pane v-for="(item, index) in swiper.list" :label="item.label" :name="item.name"></el-tab-pane>
				</el-tabs>
			</el-col>
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
				</el-dropdown>
			</el-col>
		</el-col>

		<el-col :span="24" class="main">
			<aside class="menu-expanded" v-if="swiper.activeChildren && swiper.activeChildren.length != 0">
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" unique-opened router>
					<template v-for="(item,index) in swiper.activeChildren" v-if="!item.hidden">
						<el-submenu :index="index+''" v-if="!item.leaf">
							<template slot="title"><i :class="item.iconCls"></i>{{ item.name }}</template>
							<el-menu-item v-for="child in item.children" :index="child.meta.target" :key="child.path" v-if="!child.hidden" @click="clickItem(item, child)">{{ child.name }}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="item.leaf && item.children.length > 0" :index="item.children[0].meta.target"><i :class="item.iconCls"></i>{{ item.children[0].name }}</el-menu-item>
					</template>
				</el-menu>
			</aside>
			<el-row class="home_breadcrumbr" :style="swiper.activeChildren && swiper.activeChildren.length != 0? 'left: 250px;': ''">{{ swiper.activeText }}</el-row>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				//头部tabs标签数据
				swiper: {
					activeText: 'dbtest / 数据库事务 / 转账测试',
					list: [
						{name: 'personal', label: 'dbtest'},

					],
					activeChildren: []			//当前tabs标签选中数据的tree
				},
				sysUserName: 'dbtest',
				sysUserAvatar: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2728728692,1600285381&fm=26&gp=0.jpg'
			}
		},
		methods: {
			//tabs选中
			tabsClick: function(val, type) {
				var _this = this;
				_this.swiper.activeLabel = val.label;
				_this.swiper.activeName = val.name;
				//获取路由数据
				_this.swiper.activeChildren = _.filter(_this.$router.options.routes, function(data, j) {
					return data.parent == val.name;
				});
				if(type) _this.pageReset();
			},
			//页面选中
			clickItem: function(item, val) {
				var _this = this;
				console.log(val);
				_this.swiper.activeText = _this.swiper.activeLabel + ' / ' + item.name + ' / ' + val.name;
			},
			//页面重置
			pageReset() {
				let _this = this;
				_this.swiper.activeText = _this.swiper.activeLabel;
				_this.$router.push({ path: '/' });
			}
		},
		mounted() {
			let _this = this, user = sessionStorage.getItem('user'), parents = _this.$route.meta.parent.split('/')
			let haveRouter = _.filter(_this.swiper.list, function(item, i) { return item.name == parents[0]; });
			if(haveRouter.length === 1) {
				_this.tabsClick(haveRouter[0]);
				let items = _.filter(_this.swiper.activeChildren, function(item, i) { return item.parent == parents[0]; });
				let vals = _.filter(items[0].children, function(item, i) { return items[0].path + '/' + item.path == _this.$route.path; });
				_this.clickItem(items[0], vals[0]);
			}

		}
	}

</script>

<style scoped lang="scss">
	@import '~scss_vars';

	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: $color-primary;
			color:#fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color:#fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.home_logo {
				width:130px;
				height:60px;
				font-size: 22px;
				padding-left:20px;
				padding-right:20px;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color:#fff;
				}
			}
			.home_text {
				width:100px;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex:0 0 230px;
				width: 230px;
				.el-menu{
					height: 100%;
				}
			}
			.menu-expanded{
				flex:0 0 230px;
				width: 230px;
			}
			.content-container {
				flex:1;
				overflow-y: scroll;
				padding: 20px;
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
			.home_breadcrumbr {
				position: absolute;
				top: 3px;
			}
		}
	}
</style>
