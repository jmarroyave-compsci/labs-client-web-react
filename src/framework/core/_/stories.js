import React from 'react';
import { storiesOf } from '@storybook/react';
import Block from 'core/ui/stories/block';

import __data from './data';

import Icon from 'core/ui/icon';

import List from 'core/ui/list';
import HorizontalList from 'core/ui/horizontal-list';
import Placeholder from 'core/ui/placeholder';
import Log from 'core/dev/log';


storiesOf('Core/Placeholders', module)
	.add('type title', () => (
  		<Placeholder type='title' grow={false}/>
	)
)	.add('type text-1-line', () => (
  		<Placeholder type='text-1-line' grow={false}/>
	)
)	.add('type indicador', () => (
  		<Placeholder type='indicador' grow={false}/>
	)
)

storiesOf('Core/List', module)
	.add('default', () => (
		<Block size='xs'>
			<List/>
		</Block>
	))
	.add('no items', () => (
		<Block size='xs'>
			<List/>
		</Block>
	))
	.add('loading', () => (
		<Block size='xs'>
			<List loading/>
		</Block>
	))
	.add('loading + minItems', () => (
		<Block size='xs'>
			<List minItems={3} loading/>
		</Block>
	))
	.add('loading + no icon', () => (
		<Block size='xs'>
			<List minItems={3} loading avatarType='none'/>
		</Block>
	))
	.add('data', () => (
		<Block size='xs'>
			<List 
				data={__data.getList()} 
                primaryLambda={(item)=>item['text']} 
                avatarLambda={(item)=><Icon name={item['text']}/>} 
                avatarType={"icon"}
			/>
		</Block>
	))
	.add('data + numbered', () => (
		<Block size='xs'>
			<List 
				data={__data.getList()} 
                primaryLambda={(item)=>item['text']} 
                avatarLambda={(item)=><Icon name={item['text']}/>} 
                avatarType={"icon"}
                numbered
			/>
		</Block>
	))
	.add('data + grouping + maxItems', () => (
		<Block size='xs'>
			<List 
				data={__data.getList2()} 
                primaryLambda={(item)=>item['id']} 
                avatarLambda={(item)=><Icon name={'default'}/>} 
                avatarType={"icon"}
                groupByLambda={(item)=>item['first_time'].substring(0,7)}
                maxItems={50}
                numbered
			/>
		</Block>
	))
	.add('data + virtual', () => (
		<Block size='xs'>
			<List 
				data={__data.getList2()} 
                primaryLambda={(item)=>item['id']} 
                avatarLambda={(item)=><Icon name={'default'}/>} 
                avatarType={"icon"}
                displayItems={5}
                numbered
                maxItems={50}
			/>
		</Block>
	))
	.add('data + virtual + grouping', () => (
		<Block size='xs'>
			<List 
				data={__data.getList2()} 
                primaryLambda={(item)=>item['id']} 
                avatarLambda={(item)=><Icon name={'default'}/>} 
                avatarType={"icon"}
                groupByLambda={(item)=>item['first_time'].substring(0,7)}
                displayItems={5}
                numbered
                maxItems={50}
			/>
		</Block>
	))


storiesOf('Core/Horizontal List', module)
	.add('default', () => (
  		<HorizontalList data={null}/>
	)
)	.add('data', () => (
  		<HorizontalList data={[1,2,3,4,5]}/>
	)
)

storiesOf('Core/Dev/Log', module)
	.add('default', () => {
  		var comp = <Log/>
  		console.log("hola");
  		return comp;
	}
)
