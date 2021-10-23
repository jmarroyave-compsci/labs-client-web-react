import React from 'react'
import Stack from 'com/ui/stack';
import { getSitemap } from 'data/sitemap'
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from 'core/ui/link'

var nodes = 0;

export default function Sources( props ){
  var data = getSitemap();
  console.log(data);
  return (
    <Stack>
      <TreeView
        aria-label="file system navigator"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
      >
        {getTree("home", "/", data.home)}
      </TreeView>
    </Stack>
  )

}


function getTree( label, url, children ){
  return (
    <TreeItem nodeId={nodes++} 
      label={<Link href={url}>{label}</Link>}
    >
      {Object.keys(children).map( c => 
        getTree( c, `${url}${c}/`, children[c] )
      )}
    </TreeItem>
  )
}
