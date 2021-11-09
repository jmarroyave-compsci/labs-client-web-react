import React, { useRef } from 'react'
import Stack from 'com/ui/stack';
import { getSitemap } from 'data/sitemap'
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'core/ui/link'

export default function Sitemap( props ){
  var nodes = useRef([])
  var data = getSitemap();

  return (
    <Stack>
      <TreeView
        id='sitemap'
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ flexGrow: 1 }}
        expanded={nodes.current}
      >
        {getTree(nodes.current, "home", "/", data.home)}
      </TreeView>
    </Stack>
  )

}


function getTree( nodes, label, url, children ){
  var nodeId = nodes.length.toString();
  nodes.push(nodeId)
  return (
    <TreeItem nodeId={nodeId} key={nodeId} 
      label={<Link href={url}>{label}</Link>}
    >
      {Object.keys(children).map( c => {
        if(c.startsWith("____")) return; 
        return getTree( nodes, c, `${url}${c}/`, children[c] )
        }
      )}
    </TreeItem>
  )
}
