import Robotpic from '../assets/robot1.png'
import Humanpic from '../assets/human1.png'
import './ChatMessage.css';
import dayjs from 'dayjs';

export    function ChatMessage({message,sender, time}) {
        return (
          <div className={sender === 'human' ? 'human-message' : 'robot-message'}>   
            {sender==='robot' && <img src={Robotpic} className="pics"/>}
            <div className="message-content">{message}
               {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
            </div>
            {sender==='human' && <img src={Humanpic} className="pics"/>}
          </div>
        );
 }
