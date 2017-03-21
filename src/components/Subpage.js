import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Match, Link } from 'react-router-dom'

import Protected from './Protected'
import DataWrapper from './DataWrapper'

import { Table } from 'antd';
import 'antd/dist/antd.css'

@Protected @DataWrapper @inject("store") @observer
export default class Subpage extends Component {
	constructor(props) {
		super(props)
		this.store = this.props.store
	}
	render() {
		const columns = [{
			title: '主题',
			dataIndex: 'title',
			key: 'title',
		}, {
			title: '内容',
			dataIndex: 'body',
			key: 'body',
		},{
			title: 'Action',
			key: 'action',
			render: () => (
				<span>
					<a href="#">更新</a>
				    <a href="#">删除</a>
				</span>
			),
		}];
		return (
			<div className="page posts">
				{/*<h1>Posts</h1>*/}
				{/*<p className="subheader">Posts are fetched from jsonplaceholder.typicode.com</p>*/}
				{/*<hr />*/}
				{/*<ul>*/}
					{/*{this.store.items && this.store.items.length ? this.store.items.slice(6,12).map(post => {*/}
						{/*return <li key={post.id}>*/}
						{/*<Link to={`${this.props.match.path}/${post.id}`}>*/}
						{/*<h1>{post.title}</h1>*/}
						{/*</Link>*/}
						{/*<p>{post.body.substring(0, 120)}</p>*/}
						{/*</li>*/}
					{/*}) : 'Loading...'}*/}
				{/*</ul>*/}
				<Table dataSource = { this.store.items } columns = {columns} />
			</div>
		)
	}
}