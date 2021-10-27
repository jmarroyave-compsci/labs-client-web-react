import React from 'react';
import Icon from "@material-ui/core/Icon";
import SendIcon from '@material-ui/icons/Send';
import NextIcon from '@material-ui/icons/NavigateNext';
import PreviousIcon from '@material-ui/icons/NavigateBefore';
import ReplyIcon from '@material-ui/icons/Reply';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import ForwardIcon from '@material-ui/icons/Forward';
import DraftsIcon from '@material-ui/icons/Drafts';
import CancelIcon from '@material-ui/icons/Cancel';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ArchiveIcon from '@material-ui/icons/Archive';
import DeleteIcon from '@material-ui/icons/Delete';
import SpamIcon from '@material-ui/icons/BugReport';
import DebugIcon from '@material-ui/icons/BugReport';
import ContactsIcon from '@material-ui/icons/Contacts';
import DoneIcon from '@material-ui/icons/Done';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/Email';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatIcon from '@material-ui/icons/ChatBubble';
import RetweetIcon from '@material-ui/icons/Cached';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import NotFoundIcon from '@material-ui/icons/Block';
import DrawerIcon from '@material-ui/icons/Menu';
import BlogIcon from '@material-ui/icons/InsertComment';
import HistoryIcon from '@material-ui/icons/History';
import MapIcon from '@material-ui/icons/Room';
import SettingsIcon from '@material-ui/icons/SettingsApplications';
import SaveIcon from '@material-ui/icons/Save';
import MenuIcon from '@material-ui/icons/MoreVert';
import QuestionIcon from '@material-ui/icons/Help';
import OKIcon from '@material-ui/icons/Done';
import NewIcon from '@material-ui/icons/FiberNew';
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

