import React from "react";
import styles from "./Header.module.css"
import logo from '../../assets/logo.svg';
import {Layout,Typography,Input,Menu,Button,Dropdown} from "antd";
import {GlobalOutlined} from '@ant-design/icons'
import type {MenuProps} from 'antd'

const languageOptions: MenuProps['items']=[
	{
		label:('中文'),
		key:0
	},
	{
		label:('English'),
		key:1
	}
]
export const Header:React.FC = () =>{
	return (
	<div className={styles['app-header']}>
		{/* top-header */}
		<div className={styles['top-header']}>
			<div className={styles.inner}>
				<Typography.Text>让旅游更幸福</Typography.Text>
				<Dropdown.Button
				style={{marginLeft:15}}
				menu={{items:  languageOptions}}
				icon={<GlobalOutlined/>}
				>语言</Dropdown.Button>
				<Button.Group className={styles["button-group"]}>
					<Button>注册</Button>
					<Button>登陆</Button>
				</Button.Group>
			</div>
		</div>
		<Layout.Header className={styles["main-header"]}>
			<img src={logo} alt="logo" className={styles["App-logo"]} />
			<Typography.Title level={3} className={styles.title}>
				React旅游网
			</Typography.Title>
			<Input.Search
			placeholder={"请输入旅游目的地、主题、或关键字"}
			className={styles["search-input"]}/>
		</Layout.Header>

	</div>
)}