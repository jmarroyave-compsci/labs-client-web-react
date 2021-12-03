import React from 'react';
import Icon from "@mui/material/Icon";
import SendIcon from '@mui/icons-material/Send';
import NextIcon from '@mui/icons-material/NavigateNext';
import PreviousIcon from '@mui/icons-material/NavigateBefore';
import ReplyIcon from '@mui/icons-material/Reply';
import ReplyAllIcon from '@mui/icons-material/ReplyAll';
import ForwardIcon from '@mui/icons-material/Forward';
import DraftsIcon from '@mui/icons-material/Drafts';
import CancelIcon from '@mui/icons-material/Cancel';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';
import SpamIcon from '@mui/icons-material/BugReport';
import DebugIcon from '@mui/icons-material/BugReport';
import ContactsIcon from '@mui/icons-material/Contacts';
import DoneIcon from '@mui/icons-material/Done';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatIcon from '@mui/icons-material/ChatBubble';
import RetweetIcon from '@mui/icons-material/Cached';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import NotFoundIcon from '@mui/icons-material/Block';
import DrawerIcon from '@mui/icons-material/Menu';
import BlogIcon from '@mui/icons-material/InsertComment';
import HistoryIcon from '@mui/icons-material/History';
import MapIcon from '@mui/icons-material/Room';
import SettingsIcon from '@mui/icons-material/SettingsApplications';
import SaveIcon from '@mui/icons-material/Save';
import MenuIcon from '@mui/icons-material/MoreVert';
import QuestionIcon from '@mui/icons-material/Help';
import OKIcon from '@mui/icons-material/Done';
import NewIcon from '@mui/icons-material/FiberNew';
import Image from 'core/ui/image';


class UIIcon extends React.Component {
  getIcon(icon){
    if(!icon) return <NotFoundIcon {...this.props}/>;

    switch(icon){
      case "send":
        return <SendIcon {...this.props}/>;
      case "reply":
        return <ReplyIcon {...this.props}/>;
      case "reply_all":
        return <ReplyAllIcon {...this.props}/>;
      case "forward":
        return <ForwardIcon {...this.props}/>;
      case "draft":
        return <DraftsIcon {...this.props}/>;
      case "cancel":
        return <CancelIcon {...this.props}/>;
      case "attach":
        return <AttachFileIcon {...this.props}/>;
      case "delete":
        return <DeleteIcon {...this.props}/>;
      case "archive":
        return <ArchiveIcon {...this.props}/>;
      case "spam":
        return <SpamIcon {...this.props}/>;       
      case "contacts":
        return <ContactsIcon {...this.props}/>;       
      case "done":
        return <DoneIcon {...this.props}/>;       
      case "home":
        return <HomeIcon {...this.props}/>;       
      case "search":
        return <SearchIcon {...this.props}/>;       
      case "notification":
        return <NotificationIcon {...this.props}/>;       
      case "message":
        return <MessageIcon {...this.props}/>;       
      case "favorite":
        return <FavoriteIcon {...this.props}/>;       
      case "reply-tweet":
        return <ChatIcon {...this.props}/>;       
      case "retweet":
        return <RetweetIcon {...this.props}/>;       
      case "compose":
        return <EditIcon {...this.props}/>;       
      case "close":
        return <CloseIcon {...this.props}/>;       
      case "drawer":
        return <DrawerIcon {...this.props}/>;       
      case "blog":
        return <BlogIcon {...this.props}/>;       
      case "history":
        return <HistoryIcon {...this.props}/>;       
      case "settings":
        return <SettingsIcon {...this.props}/>;       
      case "debug":
        return <DebugIcon {...this.props}/>;       
      case "save":
        return <SaveIcon {...this.props}/>;       
      case "menu":
        return <MenuIcon {...this.props}/>;       
      case "question":
        return <QuestionIcon {...this.props}/>;       
      case "ok":
        return <OKIcon {...this.props}/>;       
      case "map":
        return <MapIcon {...this.props}/>;       
      case "next":
        return <NextIcon {...this.props}/>;       
      case "previous":
        return <PreviousIcon {...this.props}/>;       
      case "new":
        return <NewIcon {...this.props}/>;       
      default:
        return <Icon {...this.props}>{icon}</Icon>;
    }
  }

  render() {
    const { icon, src, width, height, style } =  this.props;
    var img;
    if (src && src != ""){
      img = <Image width={width} height={height} src={src} style={style}/>  
    } else {
      img = this.getIcon(this.props.icon);  
    }
    
    return img;
  }
}

export default UIIcon;

